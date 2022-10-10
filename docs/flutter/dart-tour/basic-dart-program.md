---
title: Dart 기본 프로그램
tag:
    - Dart
    - 2.18.2
prev: /flutter/dart-tour/
---

원문 : [https://dart.dev/guides/language/language-tour#a-basic-dart-program](https://dart.dev/guides/language/language-tour#a-basic-dart-program)

아래 코드는 Dart의 많은 기본 기능을 사용한 예제입니다.

```dart
// 함수를 정의
void printInteger(int aNumber) {
    print('숫자는 $aNumber 입니다.'); // 콘솔에 출력
}

// 앱이 시작하면 실행되는 함수
void main() {
    var number = 42; // 변수를 정의 및 초기화
    printInteger(number); // 함수를 호출
}
```

아래는 Dart 앱에 전부(또는 거의 대부분) 적용되는 이 프로그램이 사용한 것 들입니다.

`// 이것은 주석입니다.`

한줄 주석입니다. 또한 Dart는 여러 줄과 문서 주석을 지원합니다.
자세한 내용은 [주석](comments.md)를 참고하세요.

`void`

사용되지 않는 값을 나타내는 특수 타입입니다.
`printInteger()`나 `main()`와 같은 함수는 명시적으로 값을 반환하지 않기 때문에 `void` 반환타입을 가지고 있습니다.

`int`

정수를 가리키는 다른 타입입니다.
다른 [내장된 타입](built-in-types.md)으로는 `String`, `List`, `bool`이 있습니다.

`42`

숫자 리터럴입니다.
숫자 리터럴은 컴파일시간 상수 중 하나 입니다.

`print()`

출력을 표시하는 편리한 방법입니다.

`'...'` (또는 `"..."`)

문자 리터럴입니다.

`$variableName` (또는 `${expression}`)

문자열 삽입 : 문자 리터럴 내부에 변수 또는 표현식의 해당 문자열을 삽입합니다.
더 자세한 정보는 [문자열](built-in-types.md#strings)를 참고하세요.

`main()`

앱 실행이 시작될때 필수적으로 요구되는 특수한 최상위 함수입니다.
더 자세한 정보는 [main() 함수](funtions.md#the-main-function)를 참고하세요.

`var`

타입을 지정하지 않고 변수를 정의하는 방법입니다.
이 변수의 타입 (`int`)는 초기화 값 (`42`)에 의해 결정됩니다.

:::note
이 페이지의 코드는 [Dart 스타일 가이드](https://dart.dev/guides/language/effective-dart/style)의 규칙을 따릅니다.
:::

<AdsenseB />