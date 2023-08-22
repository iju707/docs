---
title: Dart의 내장된 타입
tag:
    - Dart
    - 3.0.1
---

원문 : [https://dart.dev/language/async](https://dart.dev/language/async)

Dart 라이브러리는 [`Future`](https://api.dart.dev/stable/dart-async/Future-class.html)나 [`Stream`](https://api.dart.dev/stable/dart-async/Stream-class.html)을 반환하는 함수들로 가득차있습니다.
이 함수들은 비동기라고 부릅니다.
아마 시간이 많이 소요되는 기능(예로 I/O)을 구성한 뒤 이 동작이 끝날때까지 기다리지 않고 반환합니다. 

`async`와 `await` 키워드는 동기적 코드와 비슷하게 비동기 코드를 작성할 수 있도록 비동기 프로그래밍을 지원해줍니다.

## Future 다루기 {#handling-futures}

완성된 Future에 대한 결과가 필요하면 두가지 선택지가 있습니다.

* 이번 장과 [비동기 프로그래밍 코드랩](https://dart.dev/codelabs/async-await)에서 소개할 `async`와 `await` 사용하기
* [라이브러리 투어](https://dart.dev/guides/libraries/library-tour#future)에서 소개할 `Future` API 사용하기

`async`와 `await`를 사용하는 코드는 비동기 이지만, 동기식 코드와 매우 유사하게 보입니다.
예로 들어, 비동기 함수의 결과를 기다리기 위해 `await`를 사용한 코드 입니다.

```dart
await lookUpVersion();
```

`await`를 사용하기 위해 코드는 `async`가 마킹된 함수여야 합니다.

```dart
Future<void> checkVersion() async {
  var version = await lookUpVersion();
  // 버전을 가지고 무언가를 처리
}
```

:::note
`async` 함수가 시간을 소비하는 연산을 수행하더라도 그 연산을 기다리지 않습니다.
대신, `async` 함수는 첫번째 `await` 표현식에 마주칠때까지 실행합니다.
그리고 나서 `Future` 객체가 반환되면 `await` 표현식이 완료된 이후부터 실행을 계속합니다.
:::

`await`가 사용된 코드에서 에러를 처리하고 정리하기 위해 `try`와 `catch`, `fianlly`를 사용할 수 있습니다.

```dart
try {
  version = await lookUpVersion();
} catch (e) {
  // version을 찾울 수 없을 때 후처리
}
```

`async` 함수에서 `await`를 여러번 사용할 수 있습니다.
예로 들어, 다음 코드는 함수의 결과를 3번 기다리는 것 입니다.

```dart
var entrypoint = await findEntryPoint();
var exitCode = await runExecutable(entrypoint, args);
await flushThenExit(exitCode);
```

`await expression`에서 `expression`의 값은 항상 `Future` 입니다.
만약 그렇지 않다면 자동으로 `Future`로 감싸여집니다.
이 `Future` 객체는 객체의 반환 보장을 가리킵니다.
`await expression`의 값은 반환된 객체가 됩니다.
`await expression`은 객체가 가능할때 까지 실행을 보류하게 됩니다.

**`await` 사용할 때 컴파일타임 에러가 발생하면 `await`가 `async` 함수안에 있는지 확인해보세요.**
예로 들어, 어플리케이션의 `main()`함수에 `await`를 사용하면 `main()`의 본문은 `async`로 마킹되어야 합니다.

```dart
void main() async {
  checkVersion();
  print('In main: version is ${await lookUpVersion()}');
}
```

:::note
이전 예제에서 `async` 함수(`checkVersion()`)를 결과를 기다리지 않고 사용하고 있습니다.
이부분은 코드에서 함수의 실행이 종료되었다고 가정하는 경우 문제가 발생할 수 있는 방법입니다.
문제를 회피하기 위하여, [`unwaited_futures` 린터 규칙](https://dart.dev/tools/linter-rules#unawaited_futures)을 사용하세요.
:::

Future, `async`, `await`에 대한 상세한 소개는 [비동기 프로그래밍 코드랩](https://dart.dev/codelabs/async-await)을 살펴보세요.

## 비동기 함수 선언하기 {#declaring-async-functions}

`async` 함수는 본문이 `async` 수식어를 마킹한 함수입니다.

함수에 `async` 키워드를 추가하는 것은 Future로 반환하게 만듭니다.
예로 들어, 동기적 함수를 고려할 때 문자열을 반환하면 다음과 같습니다.

```dart
String lookUpVersion() => '1.0.0';
```

향후 구현된 내용이 시간소요가 많이되어 `async` 함수로 변경하고자 할 경우 반환값은 `Future`가 됩니다.

```dart
Future<String> lookUpVersion() async => '1.0.0';
```

참고할 것으로 함수의 본문이 Future API를 사용하지 않아도 됩니다.
Dart는 필요시 Future 객체를 생성합니다.
반환할만한 값이 없는 경우에는 `Future<void>`로 반환타입을 만들면 됩니다.

Future, `async`와 `await`를 사용한 실습형 소개는 [비동기 프로그래밍 코드랩](https://dart.dev/codelabs/async-await)을 참고사헤요.

## 스트림 다루기 {#handling-streams}

스트림에서 값을 가져오려면 두가지 방법이 있습니다.

* `async`와 비동기 반복구 (`await for`)를 사용
* [라이브러리 투어](https://dart.dev/guides/libraries/library-tour#stream)에서 소개하는 스트림 API 사용

:::note
`await for`를 사용하기 전에 코드가 명확한지, 스트림의 결과 모두를 기다리고자하는지 명확해야합니다.
예로 들어, UI 프레임워크는 끊임없는 이벤트 스트림을 전달하기 때문에 `await for`를 UI 이벤트 수신자에서 사용하면 안됩니다.
:::

비동기 반복구는 아래와 같은 유형입니다.

```dart
await for (varOrType identifier in expression) {
  // 스트림이 값을 내보낼 때마다 실행됩니다.
}
```

`expression`의 값은 Stream 타입을 가져야 합니다.
아래와 같이 실행됩니다.

1. 스트림이 값을 내보낼 때까지 대기합니다.
2. 내보내진 값을 변수에 설정하고 반복구의 본문을 실행합니다.
3. 스트림이 종료될 때까지 1과 2를 반복합니다.

스트림에서의 수신을 중단하려면 `break`나 `return` 상태문을 사용하여 반복구를 빠져나와서 스트림을 구독해지하는 것 입니다.

**만약 비동기 반복구를 구현했을 때 컴파일타임 오류가 발생했다면, `await for`가 `async` 함수내 있는지 확인해보세요.**
예로 들어, 비동기 반복구를 앱의 `main()` 함수에서 사용하려면 `main()`의 본문은 `async`로 표시되어야 합니다.

```dart
void main() async {
  // ...
  await for (final request in requestServer) {
    handleRequest(request);
  }
  // ...
}
```

비동기 프로그래밍에 더 자세한 정보는 라이브러리 투어의 [dart:async](https://dart.dev/guides/libraries/library-tour#dartasync---asynchronous-programming) 절을 참고하세요.

<AdsenseB />