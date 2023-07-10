---
title: Dart의 메타데이터
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/metadata](https://dart.dev/language/metadata)

코드에 대한 추가적인 정보를 제공하기 위해 메타데이터를 사용합니다.
메타데이터 어노테이션은 `@` 문자로 시작하며 (`deprecated` 같은)컴파일타임 상수의 참조나 상수 생성자의 호출을 따릅니다.

모든 Dart 코드에 세가지 어노테이션 사용이 가능합니다.(`@Deprecated`, `@deprecated`, `@override`)
`@override`의 사용 예제로 [클래스 확장하기](extend.md)를 보시면 됩니다.
`@Deprecated` 어노테이션 사용예제는 다음과 같습니다.

```dart
class Television {
  /// 대신 전원을 키기위해 [turnOn]를 사용합니다.
  @Deprecated('Use turnOn instead')
  void activate() {
    turnOn();
  }

  /// TV의 전원을 킵니다.
  void turnOn() {...}
  // ···
}
```

자신만의 메타데이터 어노테이션을 정의할수도 있습니다.
아래 2개의 인자를 가지는 `@Todo` 어노테이션을 정의하는 예제입니다.

```dart
class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}
```

그리고 `@Todo` 어노테이션을 사용하는 예제입니다.

```dart
@Todo('Dash', 'Implement this function')
void doSomething() {
  print('Do something');
}
```

메타데이터는 라이브러리, 클래스, typedef, 타입 매개변수, 생성자, 팩토리, 함수, 필드, 인자 변수 선언 전과 가져오기 또는 보내기 지시문 앞에 위치할 수 있습니다.
리플렉션을 사용해 메타데이터를 검색할 수 있습니다.

<AdsenseB />