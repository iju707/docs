---
title: Dart 소개
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language](https://dart.dev/language)

이 페이지는 Dart 언어의 주요기능에 대하여 예제를 가지고 간략한 소개를 제공합니다.

Dart의 코어 라이브러리에 대해 배우려면 [라이브러리 둘러보기](https://dart.dev/guides/libraries/library-tour)를 참고하세요.
또한 더 많은 실습 소개를 보려면 [Dart 컨닝 코드랩](https://dart.dev/codelabs/dart-cheatsheet)에 방문해보세요.

## 변수 {#variables}

[형식이 안전](https://dart.dev/language/type-system)한 Dart 코드에서 대부분의 변수를 그들의 유형을 명시적으로 지정하지 않고 `var`를 사용하여 선언할 수 있습니다.
유형추론 덕에 변수의 유형은 초기 값에 의하여 결정됩니다.

```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

기본값 및 `final`과 `const` 키워드, 특수 유형을 포함하여 Dart에서 변수에 대하여 [더 읽어보세요](variables.md).

## 흐름 제어문 {#control-flow-statements}

Dart는 일반적인 흐름 제어문을 지원합니다.

```dart
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (final object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
```

`break`, `continue`, `switch`, `case`, `assert`를 포함하여 Dart의 흐름 제어문에 대해 [더 읽어보세요](https://dart.dev/language/control-flow).

## 함수 {#functions}

각 함수의 인자와 반환 값에 대한 유형을 지정하는 것을 [권장합니다](https://dart.dev/guides/language/effective-dart/design#types).

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
```

단축 `=>`(화살표) 문법은 단일 명령문을 포함한 함수를 다룹니다.
이 문법은 익명함수를 인자로 전달할 때 특히 유용합니다.

```dart
flybyObjects.where((name) => name.contains('turn')).forEach(print);
```

익명함수를 보여주는것 외에(`where()` 인자), 함수를 인자로 사용할 수 있는 코드를 보여줍니다. (`forEach()`의 인자로 상위 `print()` 함수를 전달)

선택적 인자, 기본 인자값, 어휘적 범위를 포함하여 Dart의 함수에 대해 [더 읽어보세요](functions.md).

## 주석 {#comments}

Dart의 주석은 일반적으로 `//`으로 시작합니다.

```dart
// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/* Comments like these are also supported. */
```

문서화 도구가 어떻게 작동하는지를 포함하여 Dart의 주석에 대해 [더 읽어보세요](comments.md).

## 가져오기 {#imports}

다른 라이브러리에 정의된 API에 접근하려면 `import`를 사용합니다.

```dart
// 코어 라이브러리 가져오기
import 'dart:math';

// 외부 패키지에서 라이브러리 가져오기
import 'package:test/test.dart';

// 파일에서 가져오기
import 'path/to/my_other_file.dart';
```

라이브러리 접두사 및 `show`와 `hide`, `deferred` 키워드를 통한 지연 로딩 등을 포함하여 Dart의 라이브러리와 가시성에 대해 [더 읽어보세요](libraries.md).

## 클래스 {#classes}

여기 세개의 속성, 두개의 생성자, 그리고 메소드를 가진 클래스 예제가 있습니다.
속성중 한개는 직접 설정이 불가능하며, getter 메소드(변수 대신)를 사용해서 정의하고 있습니다.
메소드는 문자열 보간을 사용해서 변수에 대한 문자열 내부의 문자 동등여부를 출력합니다.

```dart
class Spacecraft {
  String name;
  DateTime? launchDate;

  // 읽기전용인 non-final 속성
  int? get launchYear => launchDate?.year;

  // 멤버에 대한 할당이 문법적으로 자동화된 생성자
  Spacecraft(this.name, this.launchDate) {
    // 필요시 초기화 코드
  }

  // 기본값을 전달하기 위한 명명된 생성자
  Spacecraft.unlaunched(String name) : this(name, null);

  // 메소드
  void describe() {
    print('Spacecraft: $name');
    // 유형 상승은 getter에서 동작하지 않습니다.
    var launchDate = this.launchDate;
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}
```

문자열 보간 및 리터럴, 표현식, `toString()` 메소드를 포함하여 문자열에 대해 [더 읽어보세요](https://dart.dev/language/built-in-types#strings).

`Spacecraft` 클래스를 아래와 같이 사용할 것 입니다.

```dart
var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();
```

초기화 목록, 선택적 `new`와 `const`, 생성자 리다이렉팅, `factory` 생성자, getter, setter 등등을 포함하여 Dart의 클래스에 대해 [더 읽어보세요](https://dart.dev/language/classes).

## 열거형 {#enums}

열거형은 사전정의된 값 또는 인스턴스(다른 유형의 인스턴스가 없는 조건)의 집합을 열거하는 방법입니다.

사전정의된 식물유형의 간단한 목록인 단순 `enum`의 예제입니다.

```dart
enum PlanetType { terrestrial, gas, ice }
```

태양계 이름을 사용하여 정의된 상수 인스턴스 집합인 행성계 클래스의 향상된 열거형 선언 예제입니다.

```dart
/// 태양계 시스템과 몇몇 속성을 가진 다른 행성의 열거형
enum Planet {
  mercury(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  venus(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  // ···
  uranus(planetType: PlanetType.ice, moons: 27, hasRings: true),
  neptune(planetType: PlanetType.ice, moons: 14, hasRings: true);

  /// 상수를 만드는 생성자
  const Planet(
      {required this.planetType, required this.moons, required this.hasRings});

  /// 모든 인스턴스의 변수는 final
  final PlanetType planetType;
  final int moons;
  final bool hasRings;

  /// 향상된 enum은 getter와 다른 메소드를 지원함
  bool get isGiant =>
      planetType == PlanetType.gas || planetType == PlanetType.ice;
}
```

`Planet` enum은 다음과 같이 사용합니다.

```dart
final yourPlanet = Planet.earth;

if (!yourPlanet.isGiant) {
  print('Your planet is not a "giant planet".');
}
```

향상된 Enum 요구사항 및 자동도입 속성, 열거값 이름에 접근, switch 명령문 지원 등등을 포함하여 Dart의 enum에 대해 [더 읽어보세요](https://dart.dev/language/enum).

## 상속 {#inheritance}

Dart는 단일 상속을 가집니다.

```dart
class Orbiter extends Spacecraft {
  double altitude;

  Orbiter(super.name, DateTime super.launchDate, this.altitude);
}
```

클래스 확장, 선택적 `@override` 어노테이션 등 [더 읽어보세요](https://dart.dev/language/extend).

## Mixin {#mixins}

Mixin은 다중 클래스 계층에서 코드를 재사용하는 방법입니다.
아래 mixin 정의가 있습니다.

```dart
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```

클래스에 mixin의 기능을 추가하려면 `with`로 mixin을 클래스에 확장시키면 됩니다.

```dart
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```

`PilotedCraft`는 이제 `astronauts` 필드와 `describeCrew()` 메소드를 가지게 됩니다.

mixin에 대해 [더 읽어보세요](https://dart.dev/language/mixins).

## 인터페이스와 추상 클래스 {#interfaces-and-abstract-classes}

Dart는 `interface` 키워드가 없습니다.
대신 모든 클래스는 암묵적으로 인터페이스를 정의합니다.
따라서 어떤 클래스든 구현할 수 있습니다.

```dart
class MockSpaceship implements Spacecraft {
  // ···
}
```

암묵적 인터페이스에 대해 [더 읽어보세요](https://dart.dev/language/classes#implicit-interfaces).

구성체 클래스에 의해 확장(또는 구현)되기 위한 추상 클래스를 만들 수 있습니다.
추상 클래스는 추상 메소드(본문이 없는)를 포함합니다.

```dart {1}
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}
```

`Describable`를 확장한 어떤 클래스든 `describeWithEmphasis()` 메소드를 가지며 확장자의 `describe()` 구현을 호출하게 됩니다.

추상 클래스와 메소드에 대해 [더 읽어보세요](https://dart.dev/language/classes#abstract-classes).

## 비동기 {#async}

콜백 무덤을 피하고 좀더 코드를 읽기 쉽게 만들기 위해 `async`와 `await`를 사용합니다.

```dart {3}
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}
```

위 메소드는 아래와 같습니다.

```dart
Future<void> printWithDelay(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}
```

다음 예제에서는 `async`와 `await`가 비동기 코드를 좀더 읽기 쉽게 만들어주는 것을 보여줍니다.

```dart
Future<void> createDescriptions(Iterable<String> objects) async {
  for (final object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print(
            'File for $object already exists. It was modified on $modified.');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.');
    } on IOException catch (e) {
      print('Cannot create description for $object: $e');
    }
  }
}
```

또한 `async*`를 사용해서 스트림을 만드는데 멋지고 읽기쉬운 방법으로 만들 수 있습니다.

```dart
Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (final object in objects) {
    await Future.delayed(oneSecond);
    yield '${craft.name} flies by $object';
  }
}
```

`async` 함수 및 `Future`, `Stream`, 비동기 반복구 (`await for`) 등 비동기지원에 대해 [더 읽어보세요](https://dart.dev/language/async).

## 예외 {#exceptions}

예외를 발생시키려면 `throw`를 사용합니다.

```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```

예외를 포착하려면, `try` 명령문과 `on` 또는 `catch` (또는 둘다)를 사용합니다.

```dart {7}
Future<void> describeFlybyObjects(List<String> flybyObjects) async {
  try {
    for (final object in flybyObjects) {
      var description = await File('$object.txt').readAsString();
      print(description);
    }
  } on IOException catch (e) {
    print('Could not describe object: $e');
  } finally {
    flybyObjects.clear();
  }
}
```

참고할 것은 위 코드는 비동기 입니다.
`try`는 동기 코드 및 `async` 함수의 코드 모두 동작합니다.

스택트레이스, `rethrow`, `Error`와 `Exception` 차이점 등 예외에 대하여 [더 읽어보세요](https://dart.dev/language/error-handling#exceptions).

## 주요 개념 {#important-concepts}

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

* 명시적으로 모든 타입이 가능하다고 하고 싶은 경우에는 `Object?`(Null 안전 활성화한 경우), `Object`, [특수한 타입인 `dynamic`](https://dart.dev/guides/language/effective-dart/design#avoid-using-dynamic-unless-you-want-to-disable-static-checking)(런타임까지 타입확인을 지연하고자 하는 경우) 타입을 사용하면 됩니다.

* Dart는 `List<int>` (정수의 목록) 또는 `List<Object>` (다양한 타입의 객체 목록)와 같이 제너릭 타입을 지원합니다.

* Dart는 클래스나 객체에 연결된 함수(각각 정적, 인스턴스 메소드) 뿐만 아니라 최상위 함수(`main()` 와 같은)를 지원합니다.
  또한 함수내 함수(중첩 또는 로컬 함수)를 만들 수 있습니다.

* 비슷하게, Dart는 클래스나 객체에 연결된 변수(정적, 인스턴스 변수) 뿐만 아니라 최상위 변수도 지원합니다.
  인스턴스 변수를 필드나 속성이라고도 합니다.

* 자바와 다르게 Dart는 `public`, `protected`나 `private` 키워드가 없습니다.
  밑줄(`_`)로 식별자를 시작하면, 라이브러리내 비공개입니다.
  자세한 내용은 [라이브러리와 가져오기](libraries.md)을 참고하세요.

* 식별자는 문자나 밑줄(`_`)로 시작할 수 있으며 그 뒤에는 문자와 숫자의 조합이 가능합니다.

* Dart는 표현식(런타임 값이 있는)과 명령문(그렇지 않음)을 가지고 있습니다.
  예로 들어, [조건 표현식](operators.md#conditional-expressions)인 `condition ? expr1 : expr2`는 `expr1` 또는 `expr2` 값을 가지고 있습니다.
  비교하여 [if-else 명령문](https://dart.dev/language/control-flow#if-and-else)은 값이 없습니다.
  명령문은 종종 한개 이상의 표현식을 포함하지만 표현식은 명령문을 직접 포함하지는 않습니다.

* Dart 툴은 경고와 에러 두가지 유형의 문제를 알려줍니다.
  경고는 코드가 동작하지 않을 수 있지만 프로그램 실행을 중단시키지는 않습니다.
  에러는 컴파일타임 또는 런타임에 발생할 수 있습니다.
  컴파일타임 에러는 코드가 전혀 실행되지 않습니다.
  런타임 에러는 코드가 실행중에 [예외](exceptions.md)가 발생합니다.

## 추가적인 자료 {#additional-resources}

더 많은 코드 예제는 [라이브러리 투어](https://dart.dev/guides/libraries/library-tour)와 [Dart API 참조](https://api.dart.dev/)에 있습니다.
이 사이트의 코드 규칙은 [Dart 스타일 가이드](https://dart.dev/guides/language/effective-dart/style)를 따릅니다.

<AdsenseB />