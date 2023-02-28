---
title: Dependency Injector - 파이썬 의존성 주입 프레임워크
tag:
    - dependency injection
    - inversion of control
    - python
    - v4.41.0
---

원문 : [https://python-dependency-injector.ets-labs.org/](https://python-dependency-injector.ets-labs.org/)

`Dependency Injector`는 파이썬의 의존성 주입 프레임워크입니다.

의존성 주입 원칙을 구현하는데 도움을 줍니다.

`Dependency Injector`의 주요 기능은 다음과 같습니다.

* **Provider** 객체를 모으는데 도움이 되는 `Factory`, `Singleton`, `Callable`, `Coroutine`, `Object`, `List`, `Dict`, `Configuration`, `Resource`, `Dependency`, `Selector` Provider를 제공합니다. [Provider](./providers/)를 참고하세요
* **Overriding** 즉시 다른 Provider를 또다른 Provider로 재정의 가능합니다. 개발/스테이지 환경의 테스트나 구성에 API 클라이언트를 목 등으로 대체할 수 있도록 도와줍니다. [Provider 재정의](https://python-dependency-injector.ets-labs.org/providers/overriding.html#provider-overriding)를 참고하세요.
* **Configuration** 설정을 `yaml`, `ini`, `json` 파일, `pydantic` 설정, 환경변수, 디렉터리에서 읽을 수 있습니다. [Configuration Provider](https://python-dependency-injector.ets-labs.org/providers/configuration.html#configuration-provider)를 참고하세요.
* **Resources** 초기화 및 로그, 이벤트 루프, 쓰레드/프로세스 풀 등의 구성을 도화줄 수 있습니다. Wiring과 함께 함수단위 실행 범위로 사용할 수 있습니다. [Resource Provider](https://python-dependency-injector.ets-labs.org/providers/resource.html#resource-provider)를 참고하세요.
* **Containers** 선언적, 동적 컨테이너를 제공합니다. [Containers](https://python-dependency-injector.ets-labs.org/containers/index.html#containers)를 참고하세요.
* **Wiring** 함수와 메소드에 의존성을 주입합니다. Django, Flask, Aiohttp, Sanic, FastAPI 등과 같은 다른 프레임워크에 통합할 때 도움이 됩니다. [Wiring](https://python-dependency-injector.ets-labs.org/wiring.html#wiring)을 참고하세요.
* **Asynchronous** 비동기 주입을 지원합니다. [Asynchronous Injections](https://python-dependency-injector.ets-labs.org/providers/async.html#async-injections)를 참고하세요.
* **Typing** `mypy`에 친화적인 타이핑 부분을 제공합니다. [Typing과 mypy](https://python-dependency-injector.ets-labs.org/providers/typing_mypy.html#provider-typing)를 참고하세요.
* **성능** 빠릅니다. `Cython`으로 작성되었습니다.
* **성숙도** 성숙하고 운영에 준비되었습니다. 테스트와 문서화가 잘 되어있고 지원이 잘됩니다.

```python
from dependency_injector import containers, providers
from dependency_injector.wiring import Provide, inject


class Container(containers.DeclarativeContainer):

    config = providers.Configuration()

    api_client = providers.Singleton(
        ApiClient,
        api_key=config.api_key,
        timeout=config.timeout,
    )

    service = providers.Factory(
        Service,
        api_client=api_client,
    )


@inject
def main(service: Service = Provide[Container.service]) -> None:
    ...


if __name__ == "__main__":
    container = Container()
    container.config.api_key.from_env("API_KEY", required=True)
    container.config.timeout.from_env("TIMEOUT", as_=int, default=5)
    container.wire(modules=[__name__])

    main()  # <-- 의존성이 자동으로 주입됩니다.

    with container.api_client.override(mock.Mock()):
        main()  # <-- 재정의된 의존성이 자동으로 주입됩니다.
```

`Dependency Injector`에서 개체 조립은 Container에 통합됩니다.
Dependency Injector는 명시적으로 정의됩니다.
이것은 어플리케이션의 동작이 어떻게 되는지 이해하고 변경하는데 쉽게 만듭니다.

![step for dependency injector](https://raw.githubusercontent.com/wiki/ets-labs/python-dependency-injector/img/di-readme.svg)

문서를 보고 `Dependency Injector`가 어떻게 동작하는지 더 알아보세요.

<AdsenseB />