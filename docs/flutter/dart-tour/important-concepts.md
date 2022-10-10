---
title: Dart의 중요 개념
tag:
    - Dart
    - 2.18.2
---

원문 : [https://dart.dev/guides/language/language-tour#important-concepts](https://dart.dev/guides/language/language-tour#important-concepts)

Dart 언어에 대해 배우고자 할 경우 다음의 사실과 개념을 염두해두세요.

* 변수에 위치하는 모든것은 객체이며 모든 객체는 클래스의 인스턴스입니다.
  숫자, 함수와 `null` 조차도 객체입니다.
  `null`을 제외하고는([null 안전보장](https://dart.dev/null-safety)을 활성화한 경우) 모든 객체는 [`Object`](https://api.dart.dev/stable/dart-core/Object-class.html) 클래스에서 상속됩니다.

  :::tip 버전노트
  [Null 안전](https://dart.dev/null-safety)은 Dart 2.12에서 소개되었습니다.
  Null 안전을 사용하려면 적어도 2.12 [언어버전](https://dart.dev/guides/language/evolution#language-versioning) 이상을 사용해야 합니다.
  :::

* Dart는 강력한 타입형이지만 Dart가 타입을 유추할 수 있으므로 타입지정은 선택적입니다.
  이전 코드에서는 `number`는 `int`타입으로 유추됩니다.

* [Null 안전](https://dart.dev/null-safety)을 활성화 하면 변수는 가능하다고 표시하기전까지 `null`을 가질 수 없습니다.
  해당 타입의 맨 끝에 물음표(`?`)를 추가해서 변수가 null이 가능하다고 만들 수 있습니다.
  예로 들어, `int?`는 정수이거나 `null`일 수 있습니다.
  Dart에서는 가능하지만 표현식자체가 절대로 `null`을 가질 수 없는것을 알고 있다면, `!`를 추가해서 null이 아님을 경고할 수 있습니다. (만약 null이면 예외발생)
  예로 들어, `int x = nullableButNotNullInt!`

* 명시적으로 모든 타입이 가능하다고 하고 싶은 경우에는 `Object?`([Null 안전 활성화](https://dart.dev/null-safety#enable-null-safety)한 경우), `Object`, [특수한 타입인 `dynamic`](https://dart.dev/guides/language/effective-dart/design#avoid-using-dynamic-unless-you-want-to-disable-static-checking)(런타임까지 타입확인을 지연하고자 하는 경우) 타입을 사용하면 됩니다.

* Dart는 `List<int>` (정수의 목록) 또는 `List<Object>` (다양한 타입의 객체 목록)와 같이 제너릭 타입을 지원합니다.

* Dart는 클래스나 객체에 연결된 함수(각각 정적, 인스턴스 메소드) 뿐만 아니라 최상위 함수(`main()` 와 같은)를 지원합니다.
  또한 함수내 함수(중첩 또는 로컬 함수)를 만들 수 있습니다.

* 비슷하게, Dart는 클래스나 객체에 연결된 변수(정적, 인스턴스 변수) 뿐만 아니라 최상위 변수도 지원합니다.
  인스턴스 변수를 필드나 속성이라고도 합니다.

* 자바와 다르게 Dart는 `public`, `protected`나 `private` 키워드가 없습니다.
  밑줄(`_`)로 식별자를 시작하면, 라이브러리내 비공개입니다.
  자세한 내용은 [라이브러리와 가시성](libraries-and-visibility.md)을 참고하세요.

* 식별자는 문자나 밑줄(`_`)로 시작할 수 있으며 그 뒤에는 문자와 숫자의 조합이 가능합니다.

* Dart는 표현식(런타임 값이 있는)과 명령문(그렇지 않음)을 가지고 있습니다.
  예로 들어, [조건 표현식](operators.md#conditional-expressions)인 `condition ? expr1 : expr2`는 `expr1` 또는 `expr2` 값을 가지고 있습니다.
  비교하여 [if-else 명령문](control-flow-statements.md#if-and-else)은 값이 없습니다.
  명령문은 종종 한개 이상의 표현식을 포함하지만 표현식은 명령문을 직접 포함하지는 않습니다.

* Dart 툴은 경고와 에러 두가지 유형의 문제를 알려줍니다.
  경고는 코드가 동작하지 않을 수 있지만 프로그램 실행을 중단시키지는 않습니다.
  에러는 컴파일타임 또는 런타임에 발생할 수 있습니다.
  컴파일타임 에러는 코드가 전혀 실행되지 않습니다.
  런타임 에러는 코드가 실행중에 [예외](exceptions.md)가 발생합니다.

<AdsenseB />