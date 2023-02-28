---
title: Dependency Injector - Provider
tag:
    - dependency injection
    - inversion of control
    - python
    - v4.41.0
---

원문 : [https://python-dependency-injector.ets-labs.org/providers/index.html](https://python-dependency-injector.ets-labs.org/providers/index.html)

Provider는 객체들을 조립하는데 도움을 줍니다.
객체를 만들고 의존성을 주입합니다.

각각 Provider는 호출가능형태입니다.
객체를 생성해야할 때 Provider를 함수처럼 호출하면 됩니다.
Provider는 하위의 의존성을 검색하고 생성된 객체에 주입시켜줍니다.
객체 그래프를 조립하는데 도움이되는 종속 효과가 발생하게 됩니다.
문서에서 `Factory`, `Singletone`, `Callable`과 다른 Provider들을 확인해보세요.

```
provider1()
│
├──> provider2()
│
├──> provider3()
│    │
│    └──> provider4()
│
└──> provider5()
     │
     └──> provider6()
```

또 다른 Provider 기능은 재정의입니다.
아무 Provider를 다른 Provider로 재정의가 가능합니다.
이것은 테스트할 때 도움이 됩니다.
또한 개발/스테이지 환경에 따른 API 클라이언트 재정의에도 도움이 됩니다.
예제는 [Provider 재정의](https://python-dependency-injector.ets-labs.org/providers/overriding.html#provider-overriding)를 참고하세요.

전체 객체가 아닌 일부분만 주입이 필요할 경우에는, [제공되는 객체의 속성, 아이템, 메소드 호출을 주입하기](https://python-dependency-injector.ets-labs.org/providers/provided_instance.html#provided-instance) 내용을 참고하세요.

새로운 Provider를 만들려면 [사용자정의 Provider 생성하기](https://python-dependency-injector.ets-labs.org/providers/custom.html#create-provider)를 참고하세요.

Provider 모듈의 API 문서 - [`dependency_injector.providers`](https://python-dependency-injector.ets-labs.org/api/providers.html#module-dependency_injector.providers)

<AdsenseB/>