---
title: Dart의 상태흐름 제어
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/control-flow](https://dart.dev/language/control-flow)

Dart 코드에서 아래와 같은 상태흐름 제어를 사용할 수 있습니다.

* `if`와 `else`
* `for` 반복구
* `while`와 `do-while` 반복구
* `break`와 `continue`
* `switch`와 `case`
* `assert`

또한 [예외처리](error-handling.md#exceptions)에서 설명할 `try-catch`와 `throw`를 사용한 상태흐름 제어도 가능합니다.

## if와 else {#if-and-else}

Dart는 다음 예제에서 보여줄 `if` 명령문과 선택적 `else` 명령문을 지원합니다.
또한 [조건 표현식](operators.md#conditional-expressions)을 참고하세요.

```dart
if (isRaining()) {
    you.bringRainCoat();
} else if (isSnowing()) {
    you.wearJacket();
} else {
    car.putTopDown();
}
```

명령문 조건은 부울 값으로 계산이 되는 표현식이어야 합니다.
더 많은 정보는 [부울](built-in-types.md#booleans)을 참고하세요.

## for 반복구 {#for-loops}

표준 `for` 반복구를 활용하여 반복할 수 있습니다.
예로 들면,

```dart
var message = StringBuffer('Dart is fun');
for (var i = 0; i < 5; i++) {
    message.write('!');
}
```

Dart `for` 반복구 내부의 클로저는 인덱스의 값을 캡쳐하여 JavaScript에서 발견되는 일반적인 함정을 회피할 수 있습니다.
예로 들면 다음과 같은 상황입니다.

```dart
var callbacks = [];
for (var i = 0; i < 2; i++) {
    callbacks.add(() => print(i));
}

for (final c in callbacks) {
    c();
}
```

예상한대로, 출력은 `0`과 `1` 입니다.
대조적으로 JavaScript에서는 `2`와 `2` 입니다.

반복할 객체가 반복가능(리스트와 셋 등)이면서 현재 반복의 수를 알 필요가 없을 경우, `for-in` 형식의 [반복구](https://dart.dev/guides/libraries/library-tour#iteration)를 사용하면 됩니다.

```dart
for (final candidate in candidates) {
    candidate.interview();
}
```

:::tip
`for-in`을 연습하려면 [반복가능한 콜렉션 코드랩](https://dart.dev/codelabs/iterables)을 참고하세요.
:::

반복가능한 클래스는 다른 옵션으로 [`forEach()`](https://api.dart.dev/stable/dart-core/Iterable/forEach.html)를 가지고 있습니다.

```dart
var collection = [1, 2, 3];
collection.forEach(print); // 1 2 3
```

## while과 do-while {#while-and-do-while}

`while` 반복은 반복전 조건식을 계산합니다.

```dart
while (!isDone()) {
    doSomething();
}
```

`do-while` 반복구는 반복 후 조건식을 계산합니다.

```dart
do {
    printLine();
} while (!atEndOfPage());
```

## break와 continue {#break-and-continue}

`break`로 반복을 중단할 수 있습니다.

```dart
while (true) {
    if (shutDownRequested()) break;
    processIncomingRequests();
}
```

`continue`로 생략하고 다음 반복으로 이동합니다.

```dart
for (int i = 0; i < candidates.length; i++) {
    var candidate = candidates[i];
    if (candidate.yearsExperience < 5) {
        continue;
    }
    candidate.interview();
}
```

리스트나 셋처럼 [반복가능](https://api.dart.dev/stable/dart-core/Iterable-class.html)을 사용할 경우 다른방식으로 예제를 작성할 수 있습니다.

```dart
candidates
    .where((c) => c.yearsExperience >= 5)
    .forEach((c) => c.interview());
```

## Swtich와 case {#switch-and-case}

Dart의 Switch 명령문은 정수, 문자열 또는 컴파일타임 상수를 `==`를 사용하여 비교합니다.
비교된 객체는 동일한 클래스(하위 타입이 아닌)의 인스턴스이어야 하며, 클래스는 `==`를 오버라이드하면 안됩니다.
[열거형](enum.md)은 `switch` 명령문에 잘 동작합니다.

각각의 공백이 아닌 `case` 조건은 규칙처럼 `break` 명령문으로 끝납니다.
또다른 공백이 아닌 `case` 조검에 대한 유효한 종료방법은 `continue`, `throw`, `return` 명령문이 있습니다.

`case` 조건에 일치하지 않는 코드를 실행할때는 `default` 조건을 사용합니다.

```dart
var command = 'OPEN';
switch (command) {
    case 'CLOSED':
        executeClosed();
        break;
    case 'PENDING':
        executePending();
        break;
    case 'APPROVED':
        executeApproved();
        break;
    case 'DENIED':
        executeDenied();
        break;
    case 'OPEN':
        executeOpen();
        break;
    default:
        executeUnknown();
}
```

아래 예제는 `case` 조건에 `break` 명령문을 생략했기때문에 에러가 발생하게 됩니다.

```dart
var command = 'OPEN';
switch (command) {
    case 'OPEN':
        executeOpen();
        // 에러 : break 누락
    case 'CLOSED':
        executeClosed();
        break;
}
```

그러나, Dart에서 공백 `case` 조건을 지원하기 때문에 이후 코드를 실행하는 형태(fall-through)가 가능합니다.

```dart
var command = 'CLOSED';
switch (command) {
    case 'CLOSED': // 공백 case는 이후 코드 처리
    case 'NOW_CLOSED':
        // CLOSED와 NOW_CLOSED 둘다 실행됨
        executeNowClosed();
        break;
}
```

이후 코드를 실행하는 형태를 원할 경우 `continue` 명령문과 라벨을 사용하면 됩니다.

```dart
var command = 'CLOSED';
switch (command) {
    case 'CLOSED':
        executeClosed();
        continue nowClosed;
        // nowClosed 라벨로 이동하여 실행을 계속 합니다.

        //... 
    nowClosed:
    case 'NOW_CLOSED':
        // CLOSED와 NOW_CLOSED 둘다 실행됨
        executeNowClosed();
        break;
}
```

`case` 조건은 로컬 변수를 가질 수 있으며 해당 조건 범주 내에서만 사용할 수 있습니다.

## assert {#assert}

개발중에 assert 명령문 - `assert(조건, 선택메시지)`를 사용해서 부울 조건이 false이면 정상 동작을 방해할 수 있습니다.
이 문서 전반적으로 assert 명령문의 예제가 있으며, 여기 더 보여드리겠습니다.

```dart
// 변수가 null이 아닌 값을 확인합니다.
assert(text != null);

// 값이 100 미만임을 확인합니다.
assert(number < 100);

// https URL임을 확인합니다.
assert(urlString.startsWith('https'));
```

어서션에 메세지를 붙이기 위해 `assert`의 두번째 인자로 문자열을 추가합니다. (선택적으로 [마지막 콤마](collections.md#lists) 포함)

```dart
assert(urlString.startsWith('https'),
    'URL ($urlString) should start with "https".');
```

`assert`의 첫번째 인자는 부울값으로 반환되는 표현식이어야 합니다.
만약 표현식이 true이면 어서션은 성공하고 계속 실행됩니다.
false일 경우, 어서션은 실패하고 예외([AssertionError](https://api.dart.dev/stable/dart-core/AssertionError-class.html))이 발생합니다.

어서션을 정확히 언제 동작할까요?
이것은 사용하는 도구와 프레임워크에 따라 다릅니다.

* Flutter는 [디버그 모드](https://docs.flutter.dev/testing/debugging#debug-mode-assertions)에서 활성화 합니다.
* [`webdev serve`](https://dart.dev/tools/webdev#serve)와 같은 개발전용 도구 일 경우에는 기본적으로 어서션을 활성화 합니다.
* [`dart run`](https://dart.dev/tools/dart-run)이나 [`dart compile js`](https://dart.dev/tools/dart-compile#js)와 같은 일부 도구는 명령 플래그인 `--enable-asserts`를 통해 어서션을 지원합니다.

운영 모드에서는 어서션을 생략되며 `assert`의 인자는 계산되지 않습니다.

<AdsenseB />