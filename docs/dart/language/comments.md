---
title: Dart의 주석
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/comments](https://dart.dev/language/comments)

Dart는 한줄 주석, 여러줄 주석, 문서화 주석을 지원합니다.

## 한줄 주석 {#single-line-comments}

한줄 주석은 `//`로 시작합니다.
`//`와 해당 줄 끝까지 모든것은 Dart 컴파일러가 무시합니다.

```dart
void main() {
    // TODO: AbstractLlamaGreetingFactory로 리펙터링하기?
    print('Welcome to my Llama farm!');
}
```

## 여러줄 주석 {#multi-line-comments}

여러줄 주석은 `/*`로 시작해서 `*/`로 끝납니다.
`/*`와 `*/` 사이의 모든것은 Dart 컴파일러가 무시합니다.
(주석이 문서화 주석이 아닌경우. 다음 절을 참고하세요)
여러줄 주석은 중첩될 수 있습니다.

```dart
void main() {
    /*
     * 많은 것을 했다. 이제 치킨집할까...

     Llama larry = Llama();
     larry.feed();
     larry.exercise();
     larry.clean();
    */
}
```

## 문서화 주석 {#documentation-comments}

문서화 주석은 `///`나 `/**`로 시작한 여러줄 또는 한줄 주석입니다.
여러줄에 `///`를 사용하면 여러줄 문서 주석과 동일한 효과를 가집니다.

문서화 주석안에는 분석기가 모든 텍스트를 무시하지만 대괄호에 만나면 다릅니다.
대괄호를 사용하면 클래스, 메소드, 필드, 최상위 변수, 함수, 인자등을 참조할 수 있습니다.
대괄호의 이름은 문서화된 프로그램 요소의 문법적 범위에서 처리됩니다.

다른 클래스와 인자를 참조하는 문서화 주석에 대한 예제입니다.

```dart
/// A domesticated South American camelid (Lama glama).
///
/// Andean cultures have used llamas as meat and pack
/// animals since pre-Hispanic times.
///
/// Just like any other animal, llamas need to eat,
/// so don't forget to [feed] them some [Food].
class Llama {
  String? name;

  /// Feeds your llama [food].
  ///
  /// The typical llama eats one bale of hay per week.
  void feed(Food food) {
    // ...
  }

  /// Exercises your llama with an [activity] for
  /// [timeLimit] minutes.
  void exercise(Activity activity, int timeLimit) {
    // ...
  }
}
```

클래스의 생성된 문서에서 `[feed]`는 `feed` 메소드의 문서로 링크가 되며, `[Food]`는 `Food` 클래스의 문서로 링크됩니다.

Dart 코드를 분석하고 HTML 문서를 생성하기 위해 [`dart doc`](https://dart.dev/tools/dart-doc)이라는 Dart의 문서 생성도구를 사용해야 합니다.
생성된 문서에 대한 예제는 [Dart API 문서](https://api.dart.dev/stable)를 참고하세요.
주석을 구조화하는 방법에 대한 조언은 [효과적인 Dart: 문서](https://dart.dev/guides/language/effective-dart/documentation)를 참조하세요.

<AdsenseB />