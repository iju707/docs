---
title: Dart의 예외처리
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/error-handling](https://dart.dev/language/error-handling)

## 예외 {#exceptions}

Dart 코드는 예외를 발생시키고 감지할 수 있습니다.
예외는 예측되지 않은 무언가가 발생한 것을 가리키는 오류입니다.
예외가 감지되지 않으면 예외가 발생된 [격리](https://dart.dev/language/concurrency#how-isolates-work)가 일시중단되고 일반적으로 격리와 그 프로그램은 종료됩니다.

Java와는 달리, 모든 Dart의 예외는 미확인 예외입니다.
함수는 어떤 예외가 발생할지 선언하지 않으며, 어떤 예외든 감지할 필요는 없습니다.

Dart는 [Exception](https://api.dart.dev/stable/dart-core/Exception-class.html)와 [Error](https://api.dart.dev/stable/dart-core/Error-class.html) 타입을 제공하며 다양한 사전정의된 하위 타입이 있습니다.
물론 당신만의 예외를 정의할 수 있습니다.
그러나, Dart 프로그램은 Exception이나 Error 객체 뿐만 아니라 null이 아닌 객체를 예외처럼 발생시킬 수 있습니다.

### throw {#throw}

여기 예외를 발생시키거나 전달시키는 예제입니다.

```dart
throw FormatException('Expected at least 1 section');
```

또한 임의의 객체를 가지고 예외를 발생시킬 수 있습니다.

```dart
throw 'Out of llamas';
```

:::note
운영수준의 코드에서는 일반적으로 [Error](https://api.dart.dev/stable/dart-core/Error-class.html)나 [Exception](https://api.dart.dev/stable/dart-core/Exception-class.html)의 구현체 타입을 예외로 발생시킵니다.
:::

예외를 발생시키는 것은 표현식이기 때문에 `=>` 명렴운 안에 예외를 발생시킬 수 있으며 표현식이 가능한 어디든 사용할 수 있습니다.

```dart
void distanceTo(Point other) => throw UnimplementedError();
```

### catch {#catch}

예외를 감지 또는 캡쳐하는 것은 전파상황에서 예외를 중단시키는 것(예외를 다시 발생시키지 않는 한) 입니다.
예외를 감지하는 것은 이것을 다룰수 있는 기회를 주는 것 입니다.

```dart
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  buyMoreLlamas();
}
```

한가지 타입 이상의 예외를 발생시키는 코드를 다룰 때는, 다중 catch 조건을 정의하면 됩니다.
발생된 객체 타입과 일치하는 첫번째 조건에서 예외를 다룹니다.
catch 조건에 타입을 별도 식별하지 않으면 조건은 발생한 객체의 모든 타입을 다루게 됩니다.

```dart
try {
    breedMoreLlamas();
} on OutOfLlamasException {
    // 특정 예외
    buyMoreLlamas();
} on Exception catch (e) {
    // 예외인 모든 것
    print('Unknown exeption : $e');
} catch (e) {
    // 타입이 없으면 모두 처리
    print('Something really unknown: $e');
}
```

위에 코드를 보듯, `on`이나 `catch` 또는 둘다를 사용할 수 있습니다.
`on`은 예외 타입을 지정하고자 할 때 사용합니다.
`catch`는 예외처리에서 예외 객체를 사용할 때 필요합니다.

`catch()`에 한개 또는 두개의 인자를 지정할 수 있습니다.
첫번째는 발생된 예외이며, 두번째는 스택트레이스 입니다. ([StackTrace](https://api.dart.dev/stable/dart-core/StackTrace-class.html) 객체)

```dart
try {
    // ...
} on Exception catch (e) {
    print('Exception details:\n $e');
} catch (e, s) {
    print('Exception details:\n $e');
    print('Stack trace:\n $s');
}
```

예외를 부분적으로 처리하면서 전파를 가능하게 하려면 `rethrow` 키워드를 사용합니다.

```dart
void misbehave() {
    try {
        dynamic foo = true;
        print(foo++); // 런타임 오류
    } catch (e) {
        print('misbehave() partially handled ${e.runtimeType}.');
        rethrow; // 호출한 곳에서 예외를 볼 수 있습니다.
    }
}

void main() {
    try {
        misbehave();
    } catch (e) {
        print('main() finished handling ${e.runtimeType}.');
    }
}
```

### finally {#finally}

예외가 발생하거나 안하거나 실행되어야할 코드가 있는 경우 `finally` 조건을 사용합니다.
예외에 적용되는 `catch` 조건이 없는 경우 예외는 `finally` 조건이 실행된 뒤 전파됩니다.

```dart
try {
    breedMoreLlamas();
} finally {
    // 예외가 발생하더라도 항상 정리합니다.
    cleanLlamaStalls();
}
```

`finally` 조건은 `catch` 조건이 처리된 뒤 실행됩니다.

```dart
try {
    breedMoreLlamas();
} catch (e) {
    print('Error: $e'); // 예외가 먼저 처리됨
} finally {
    cleanLlamaStalls(); // 그리고 정리함
}
```

라이브러리 투어의 [Exception](https://dart.dev/guides/libraries/library-tour#exceptions) 절에서 더 자세한 내용을 확인해보세요.

<AdsenseB />