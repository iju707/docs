---
title: Dependency Injector - Wiring (연결)
tag:
    - dependency injection
    - inversion of control
    - python
    - v4.41.0
---

원문 : [https://python-dependency-injector.ets-labs.org/wiring.html](https://python-dependency-injector.ets-labs.org/wiring.html)

Wiring 기능은 컨테이너 Provider를 함수나 메소드에 주입시키는 방법을 제공합니다.

Wiring을 사용할 때 필요한 것:

* **`@inject` 데코레이터를 사용** : 데코레이터 `@inject`가 의존성을 주입합니다.
* **마커를 사용** : Wiring 마커는 어떤 의존성(예, `Provide[Container.bar]`)을 주입할지 지정합니다. 이것은 컨테이너가 주입을 찾는데 도움을 줍니다.
* **코드의 마커로 컨테이너를 연결** : 연결하고자 하는 특정 모듈과 패키지로 `container.wire()`를 호출합니다.
* **평소처럼 함수와 클래스를 사용** : 프레임워크가 지정된 주입을 제공합니다.

```python
from dependency_injector import containers, providers
from dependency_injector.wiring import Provide, inject

dd
class Service:
    ...


class Container(containers.DeclarativeContainer):

    service = providers.Factory(Service)


@inject
def main(service: Service = Provide[Container.service]) -> None:
    ...


if __name__ == "__main__":
    container = Container()
    container.wire(modules=[__name__])

    main()
```

## 데코레이터 `@inject` {#decorator-inject}

데코레이터 `@inject`는 의존성을 주입합니다.
주입하기위해 모든 함수와 메소드에 데코레이트할 수 있습니다.

```python
from dependency_injector.wiring import inject, Provide


@inject
def foo(bar: Bar = Provide[Container.bar]):
    ...
```

데코레이터 `@inject`는 적절한 연결동작이 확실하도록 함수의 가장 첫번째 데코레이터로 지정되어야 합니다.
또한 연결 프로세스의 성능에 기여합니다.

```python
from dependency_injector.wiring import inject, Provide


@decorator_etc
@decorator_2
@decorator_1
@inject
def foo(bar: Bar = Provide[Container.bar]):
    ...
```

또한 FastAPI나 유사하게 데코레이터를 사용하는 다른 프레임워크, 클로저, 주입이 있는 사용자 지정의 데코레이터 유형에 `@inject`를 첫번째 데코레이터로 지정하는게 중요합니다.

FastAPI 예제는 다음과 같습니다.

```python
app = FastAPI()


@app.api_route("/")
@inject
async def index(service: Service = Depends(Provide[Container.service])):
    value = await service.process()
    return {"result": value}
```

데코레이터 예제는 다음과 같습니다.

```python
def decorator1(func):
    @functools.wraps(func)
    @inject
    def wrapper(value1: int = Provide[Container.config.value1]):
        result = func()
        return result + value1
    return wrapper


def decorator2(func):
    @functools.wraps(func)
    @inject
    def wrapper(value2: int = Provide[Container.config.value2]):
        result = func()
        return result + value2
    return wrapper

@decorator1
@decorator2
def sample():
    ...
```

:::note 함께보기
[이슈 #404](https://github.com/ets-labs/python-dependency-injector/issues/404#issuecomment-785216978)에서 `@inject` 데코레이터에 대해 좀더 자세하게 설명합니다.
:::

## 마커 {#markers}

Wiring 기능은 주입을 만들기 위해 마커를 사용합니다.
주입 마커는 함수나 메소드 인자의 값으로 명시됩니다.

```python
from dependency_injector.wiring import inject, Provide


@inject
def foo(bar: Bar = Provide[Container.bar]):
    ...
```

어노테이션 명시는 선택적입니다.

Provider 자체를 주입하려면 `Provide[foo.provider]`를 사용합니다.

```python
from dependency_injector.providers import Factory
from dependency_injector.wiring import inject, Provide


@inject
def foo(bar_provider: Factory[Bar] = Provide[Container.bar.provider]):
    bar = bar_provider(argument="baz")
    ...
```

또한 `Provide[foo]` 를 사용하여 Provider 자체를 주입할 수 있습니다.

```python
from dependency_injector.providers import Factory
from dependency_injector.wiring import inject, Provider


@inject
def foo(bar_provider: Factory[Bar] = Provider[Container.bar]):
    bar = bar_provider(argument="baz")
    ...
```

평소하는 것 처럼 구성, 제공되는 인스턴스, 하위 컨테이너 Provider를 사용하면 됩니다.

```python
@inject
def foo(token: str = Provide[Container.config.api_token]):
    ...


@inject
def foo(timeout: int = Provide[Container.config.timeout.as_(int)]):
    ...


@inject
def foo(baz: Baz = Provide[Container.bar.provided.baz]):
    ...


@inject
def foo(bar: Bar = Provide[Container.subcontainer.bar]):
    ...
```

함수단위 실행범위를 구현하기 위해 Wiring과 `Resource` Provider를 조합할 수 있습니다.
상세한 내용은 [`Resource`와 Wiring, 함수단위 실행 범위](https://python-dependency-injector.ets-labs.org/providers/resource.html#resource-provider-wiring-closing)에서 볼 수 있습니다.

또한 컨테이너를 주입하기 위해 `Provide`를 사용할 수 있습니다.

```python {14-17}
from dependency_injector import containers, providers
from dependency_injector.wiring import Provide, inject


class Service:
    ...


class Container(containers.DeclarativeContainer):

    service = providers.Factory(Service)


@inject
def main(container: Container = Provide[Container]):
    service = container.service()
    ...


if __name__ == "__main__":
    container = Container()
    container.wire(modules=[__name__])

    main()
```

## 문자열 식별자 {#string-identifiers}

문자열 식별자를 사용해서 연결할 수 있습니다.
문자열 식별자는 컨테이너에 Provider 이름과 일치해야합니다.

```python {14-16}
from dependency_injector import containers, providers
from dependency_injector.wiring import Provide, inject


class Service:
    ...


class Container(containers.DeclarativeContainer):

    service = providers.Factory(Service)


@inject
def main(service: Service = Provide["service"]) -> None:
    ...


if __name__ == "__main__":
    container = Container()
    container.wire(modules=[__name__])

    main()
```

문자열 식별자를 사용하면 주입을 지정하기 위해 컨테이너를 사용할 필요가 없습니다.

중첩된 컨테이너에서 주입을 지정하려면 점 `.`을 구분자로 사용합니다.

```python
@inject
def foo(service: UserService = Provide["services.user"]) -> None:
    ...
```

또한 주입 수정자를 사용할 수 있습니다.

```python
from dependency_injector.wiring import (
    inject,
    Provide,
    as_int,
    as_float,
    as_,
    required,
    invariant,
    provided,
)


@inject
def foo(value: int = Provide["config.option", as_int()]) -> None:
    ...


@inject
def foo(value: float = Provide["config.option", as_float()]) -> None:
    ...


@inject
def foo(value: Decimal = Provide["config.option", as_(Decimal)]) -> None:
    ...

@inject
def foo(value: str = Provide["config.option", required()]) -> None:
    ...

@inject
def foo(value: int = Provide["config.option", required().as_int()]) -> None:
    ...


@inject
def foo(value: int = Provide["config.option", invariant("config.switch")]) -> None:
    ...

@inject
def foo(value: int = Provide["service", provided().foo["bar"].call()]) -> None:
    ...
```

컨테이너를 주입할 때는 특수 식별자인 `<container>`를 사용합니다.

```python
@inject
def foo(container: Container = Provide["<container>"]) -> None:
    ...
```

## 모듈과 클래스 속성으로 주입 만들기

모듈과 클래스 속성으로 주입을 만들기 위해 Wiring을 사용할 수 있습니다.

```python {11,16}
from dependency_injector import containers, providers
from dependency_injector.wiring import Provide


class Service:
    ...


class Container(containers.DeclarativeContainer):

    service = providers.Factory(Service)


service: Service = Provide[Container.service]


class Main:

    service: Service = Provide[Container.service]


if __name__ == "__main__":
    container = Container()
    container.wire(modules=[__name__])

    assert isinstance(service, Service)
    assert isinstance(Main.service, Service)
```

또한 Container에 대한 의존성을 피하기 위해 문자열 식별자를 사용할 수 있습니다.

```python {1,6}
service: Service = Provide["service"]


class Main:

    service: Service = Provide["service"]
```

## 모듈과 패키지 Wiring

모듈에 컨테이너를 연결하려면 `container.wire()` 메소드를 호출해야 합니다.

```python
container.wire(
    modules=[
        "yourapp.module1",
        "yourapp.module2",
    ],
)
```

`container.wire()` 메소드는 상대경로도 가능합니다.

```python
# In module "yourapp.main":

container.wire(
    modules=[
        ".module1",  # Resolved to: "yourapp.module1"
        ".module2",  # Resolved to: "yourapp.module2"
    ],
)
```

또한 `from_package` 인자를 사용하여 상대경로를 해석할 기본 패키지를 수동으로 식별할 수 있습니다.

```python
# In module "yourapp.main":

container.wire(
    modules=[
        ".module1",  # Resolved to: "anotherapp.module1"
        ".module2",  # Resolved to: "anotherapp.module2"
    ],
    from_package="anotherapp",
)
```

또한 `modules` 인자는 가져오기한 모듈을 사용할 수 있습니다.

```python
from yourapp import module1, module2


container = Container()
container.wire(modules=[module1, module2])
```

패키지를 사용하여 컨테이너와 연결시킬 수 있습니다.
컨테이너는 패키지에 있는 모듈을 재귀적으로 탐색합니다.

```python
container.wire(
    packages=[
        "yourapp.package1",
        "yourapp.package2",
    ],
)
```

`modules`와 `packages` 인자는 함께 사용될 수 있습니다.

Wiring이 완료되면 함수와 메소드는 호출이 될 때 주입이 제공됩니다.

```python
@inject
def foo(bar: Bar = Provide[Container.bar]):
    ...


container = Container()
container.wire(modules=[__name__])

foo()  # <--- 인자 "bar"가 주입됩니다.
```

주입은 키워드 인자로 처리됩니다.

```python
foo()  # 아래로 동일합니다
foo(bar=container.bar())
```

컨텍스트 키워드 인자는 주입보다 우선됩니다.

```python
foo(bar=Bar())  # Bar() is injected
```

주입된 함수나 메소드를 이전으로 되돌릴려면 `container.unwire()` 메소드를 호출합니다.

```python
container.unwire()
```

테스트할 때 각 테스트전 재생성, 재연결을 위하여 사용할 수 있습니다.

```python
import unittest


class SomeTest(unittest.TestCase):

    def setUp(self):
        self.container = Container()
        self.container.wire(modules=["yourapp.module1", "yourapp.module2"])
        self.addCleanup(self.container.unwire)
```

```python
import pytest


@pytest.fixture
def container():
    container = Container()
    container.wire(modules=["yourapp.module1", "yourapp.module2"])
    yield container
    container.unwire()
```

:::note
많은 코드를 가지고 있으면 Wiring에 대한 소요시간이 오래 걸릴 수 있습니다.
컨테이너 인스턴스를 유지하고 테스트간에 재연결을 피하는걸 고려하세요.
:::

:::note
파이썬은 개별적으로 가져온 함수에 대한 패치에 제약이 있습니다.
에러를 방지하기 위해서 개별 함수를 가져오기 위해 모듈을 가져오거나 Wiring 후 가져오기를 하도록 합니다.

```python
# Potential error:

from .module import fn

fn()
```

대신 다음을 사용하세요.

```python
# Always works:

from . import module

module.fn()
```
:::

## Wiring 구성 {#wiring-configuration}

컨테이너에 Wiring 구성을 정의할 수 있습니다.
Wiring 구성이 정의되면 컨테이너는 자동으로 인스턴스를 생성할 때 `.wire()` 메소드를 호출합니다.

```python
class Container(containers.DeclarativeContainer):

    wiring_config = containers.WiringConfiguration(
        modules=[
            "yourapp.module1",
            "yourapp.module2",
        ],
        packages=[
            "yourapp.package1",
            "yourapp.package2",
        ],
    )

    ...


if __name__ == "__main__":
    container = Container()  # container.wire()가 자동으로 호출됩니다.
    ...
```

또한 상대적 가져오기를 사용할 수 있습니다.
컨테이너는 컨테이너 클래스의 모듈 기준으로 해석하게 됩니다.

```python
# In module "yourapp.container":

class Container(containers.DeclarativeContainer):

    wiring_config = containers.WiringConfiguration(
        modules=[
           ".module1",  # 다음으로 해석 : "yourapp.module1"
           ".module2",  # 다음으로 해석 : "yourapp.module2"
        ],
    )
)


# In module "yourapp.foo.bar.main":

if __name__ == "__main__":
    container = Container()  # wire to "yourapp.module1" and "yourapp.module2"
    ...
```

Wiring 구성을 사용하고 수동으로 `.wire()`를 호출하려면, `auto_wire=False` 플래그를 설정합니다.

```python
class Container(containers.DeclarativeContainer):

    wiring_config = containers.WiringConfiguration(
        modules=["yourapp.module1"],
        auto_wire=False,
    )


if __name__ == "__main__":
    container = Container()  # container.wire() 가 자동으로 호출되지 않습니다.
    container.wire()         # wire to "yourapp.module1"
    ...
```

<AdsenseB />