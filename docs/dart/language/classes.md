---
title: Dart의 클래스
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/classes](https://dart.dev/language/classes)

Dart는 클래스와 혼합된 계승을 지원하는 객체지향 언어입니다.
모든 객체는 클래스의 인스턴스이며 `Null`을 제외한 클래스는 [Object](https://api.dart.dev/stable/dart-core/Object-class.html)에서 파생됩니다.
혼합된 계승은 모든 클래스는 정확히 하나의 상위클래스(예외로 [최상위 클래스](https://dart.dev/null-safety/understanding-null-safety#top-and-bottom) `Object?`)를 가지지만 클래스 본문은 다수의 클래스 계층을 재사용될 수 있습니다.
[확장메소드](extension-methods.md)는 클래스를 변경하거나 하위 클래스를 만들지 않고 클래스의 기능을 추가할 수 있는 방법입니다.

## 클래스 멤버 사용하기 {#using-class-members}

객체는 함수와 데이터로 구성된 _멤버_ 가 있습니다. (각기 _메소드_ 와 _인스턴스 변수_)
메소드를 호출할 때 객체 위에서 _실행_ 하므로 메소드는 객체의 함수와 데이터에 접근할 수 있습니다.

점(`.`)을 사용하여 인스턴스 변수나 메소드를 참조할 수 있습니다.

```dart
var p = Point(2, 2);

// y의 값을 가져오기
assert(p.y == 2);

// p의 distanceTo() 실행하기
double distance = p.distanceTo(Point(4, 4));
```

`.`대신 `?.`을 사용하여 왼쪽 피연산자가 null일때 예외가 발생함을 방지할 수 있습니다.

```dart
// p가 null이 아니면 그것의 y 값과 같게 변수가 설정됩니다.
var a = p?.y;
```

## 생성자 사용하기 {#using-constructors}

생성자를 사용하여 객체를 만들 수 있습니다.
생성자 이름은 `ClassName` 이나 `ClassName.identifier` 입니다.
예로들어, 아래 코드는 `Point` 객체들을 `Point()`와 `Point.fromJson()` 생성자로 만드는 것 입니다.

```dart
var p1 = Point(2, 2);
var p2 = Point.fromJson({'x': 1, 'y': 2});
```

아래 코드는 동일한 내용이지만 `new` 키워드를 생성자 이름전에 사용한 것 입니다.

```dart
var p1 = new Point(2, 2);
var p2 = new Point.fromJson({'x': 1, 'y': 2});
```

몇몇 클래스는 [상수 생성자](constructors.md#constant-constructors)를 제공합니다.
상수 생성자를 사용해서 컴파일타임 상수를 생성하려면 생성자 이름 앞에 `const` 키워드를 추가하면 됩니다.

```dart
var p = const ImmutablePoint(2, 2);
```

두개의 동일한 컴파일타임 상수를 생성하면 한개의 정식 인스턴스가 생성됩니다.

```dart
var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

assert(identical(a, b)); // 동일한 인스턴스 입니다.
```

상수 문맥에서 생성자나 리터럴 전에 `const` 키워드를 생략할 수 있습니다.
아래 코드 예제에서 상수 맵을 만드는 것 입니다.

```dart
// 다수의 const 키워드가 있습니다.
const pointAndLine = const {
    'point': const [const ImmutablePoint(0, 0)],
    'line': const [const ImmutablePoint(1, 10), const ImmutablePoint(-2, 11)],
};
```

모두 생략해도 되나 첫번째 `const` 키워드는 사용해야 합니다.

```dart
// 상수 문맥을 시작하는 한개의 const만 존재
const pointAndLine = {
    'point': [ImmutablePoint(0, 0)],
    'line': [ImmutablePoint(1, 10), ImmutablePoint(-2, 11)],
};
```

상수 생성자가 상수 문맥 밖에 있고 `const` 키워드 없이 실행된다면, **상수가 아닌 객체**가 생성됩니다.

```dart
var a = const ImmutablePoint(1, 1); // 상수가 생성됨
var b = ImmutablePoint(1, 1); // 상수로 생성안됨

assert(!identical(a, b)); // 동일한 인스턴스가 아님
```

## 객체 유형 가져오기 {#getting-an-objects-type}

런타임에 객체의 유형을 가져오려면 [`Type`](https://api.dart.dev/stable/dart-core/Type-class.html) 객체를 반환하는 `Object`의 `runtimeType`를 사용합니다.

```dart
print('a의 유형은 ${a.runtimeType}입니다.');
```

:::warning
객체의 유형을 테스트할 때 `runtimeType` 보다 [유형 테스트 연산자](operators.md#type-test-operators)를 사용하세요.
운영 환경에서 `object is Type` 테스트가 `object.runtimeType == Type` 테스트보다 안전합니다.
:::

여기까지 클래스를 어떻게 사용하는지 살펴봤습니다.
아래부터는 클래스를 어떻게 구현하는지 살펴보겠습니다.

## 인스턴스 변수 {#instance-variables}

인스턴스 변수를 어떻게 선언하는지 보여줍니다.

```dart
class Point {
    double? x; // 인스턴스 변수 x를 선언, null로 초기화
    double? y; // y를 선언, null로 초기화
    double z = 0; // z를 선언, 0으로 초기화
}
```

모든 초기화되지 않은 인스턴스 변수는 `null` 값을 가집니다.

모든 인스턴스 변수는 암시적인 getter 메소드를 생성합니다.
또한 final이 아닌 인스턴스 변수와 초기화없는 `late final` 인스턴스 변수는 암시적인 setter 메소드를 생성합니다.
자세한 정보는 [getter와 setter](methods.md#getters-and-setters)를 참고하세요.

`late`가 아닌 인스턴스 변수를 선언한 곳에 초기화하려면 값은 생성자나 초기화 목록이 실행되기 전인 인스턴스가 생성될 때 설정됩니다.
결과적으로 `late`가 아닌 인스턴스 변수 초기화는 `this`에 접근할 수 없습니다.

```dart
class Point {
    double? x; // 인스턴스 변수 x를 선언, null로 초기화
    double? y; // y를 선언, null로 초기화
}

void main() {
    var point = Point();
    point.x = 4; // x의 setter 메소드를 사용
    assert(point.x == 4); // x의 getter 메소드를 사용
    aasert(point.y == null); // 기본값은 null
}
```

정확히 한번만 설정이 가능한 경우 인스턴스 변수는 `final`이 됩니다.
선언부에서 `final`이거나 `late`가 아닌 인스턴스 변수의 초기화는 생성자 매개변수나 생성자 [초기화 목록](constructors.md#initializer-list)을 사용합니다.

```dart
class ProfileMark {
    final String name;
    final DateTime start = DateTime.now();

    ProfileMark(this.name);
    ProfileMark.unnamed() : name = '';
}
```

`final` 인스턴스 변수의 값을 생성자 본문이 시작한 이후 할당해야 할 경우 다음의 한가지를 사용하면 됩니다.

* [팩토리 생성자](constructors.md#factory-constructors)를 사용
* `late final`을 사용하는 것은 [주의해야 합니다.](https://dart.dev/guides/language/effective-dart/design#avoid-public-late-final-fields-without-initializers) 초기화 없는 `late final`은 API에 setter를 추가합니다.

## 추상 클래스 {#abstract-classes}

인스턴스가 될 수 없는 추상 클래스를 정의하기 위해 `abstract` 수식어를 사용합니다.
추상 클래스는 자주 구현되는 인터페이스를 정의하기 위해 유용합니다.
추상 클래스를 인스턴스화할 수 있도록 보이려면, [팩토리 생성자](constructors.md#factory-constructors)를 정의합니다.

추상 클래스는 자주 [추상 메소드](methods.md#abstract-methods)를 가지고 있습니다.
다음 예제는 추상 메소드를 가지고 있는 추상 클래스를 선언하는 것 입니다.

```dart
// 이 클래스는 추상으로 선언되며 인스턴스화가 불가합니다.
abstract class AbstractContainer {
    // 생성자, 필드, 메소드를 선언...

    void updateChildren(); // 추상 메소드
}
```

## 암시적 인터페이스 {#implicit-interfaces}

모든 클래스는 암묵적으로 클래스와 구현된 인터페이스의 모든 인스턴스 멤버를 포함한 인터페이스를 정의합니다.
B의 구현을 상속하지 않고 B 클래스의 API를 지원하는 클래스 A를 생성하려면, 클래스 A는 B 인터페이스를 구현해야합니다.

A 클래스는 `implements` 절에 선언된 한개 이상의 인터페이스를 구현하며 해당 인터페이스에 필요한 API를 제공합니다.
예로 들면,

```dart
// Person, greet()를 포함한 암시적 인터페이스
class Person {
    // 인터페이스에 있지만 이 라이브러리에서만 볼 수 있음
    final String _name;

    // 생성자이기 때문에 인터페이스에 없음
    Person(this._name);

    // 인터페이스
    String greet(String who) => 'Hello, $who. I am $_name.';
}

// Person 인터페이스 구현체
class Impostor implements Person {
    String get _name => '';

    String greet(String who) => 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) => person.greet('Bob');

void main() {
    print(greetBob(Person('Kathy')));
    print(greetBob(Impostor()));
}
```

아래는 다수의 인터페이스를 구현하는 클래스를 정의하는 예제입니다.

```dart
class Point implements Comparable, Location { ... }
```

## 클래스 변수 및 함수 {#class-variables-and-methods}

`static` 키워드를 사용하여 클래스전반 변수와 메소드를 구현할 수 있습니다.

### 정적 변수 {#static-variables}

정적 변수(클래스 변수)는 클래스전반 상태나 상수에 유용합니다.

```dart
class Queue {
    static const initialCapacity = 16;
    // ...
}

void main() {
    assert(Queue.initialCapacity == 16);
}
```

정적변수는 사용되기 전까지 초기화되지 않습니다.

:::note
본 페이지에서 상수 이름에 [스타일 가이드 추천](https://dart.dev/guides/language/effective-dart/style#identifiers)에 따라 `lowerCamelCase`를 선호합니다.
:::

### 정적 함수 {#static-methods}

정적 메소드(클래스 메소드)는 인스턴스에서 동작하지 않기 때문에 `this`에 접근할 수 있습니다.
그러나, 정적 변수에 접근할 수 있습니다.
아래 예제에서 보여주듯, 클래스에서 정적 메소드를 직접 실행할 수 있습니다.

```dart
import 'dart:math';

class Point {
    double x, y;
    Point(this.x, this.y);

    static double distanceBetween(Point a, Point b) {
        var dx = a.x - b.y;
        var dy = a.y - b.y;
        return sqrt(dx * dx + dy * dy);
    }
}

void main() {
    var a = Point(2, 2);
    var b = Point(4, 4);
    var distance = Point.distanceBetween(a, b);
    assert(2.8 < distance && distance < 2.9);
    print(distance);
}
```

:::note
공통적이거나 넓은 방면에서 유틸리티적 기능으로 사용될 경우 정적 메소드대신 최상위 함수를 사용함을 고려하세요.
:::

정적 메소드를 컴파일타임 상수로 사용할 수 있습니다.
예로 들어, 상수 생성자에 매개변수로 정적 메소드를 전달할 수 있습니다.

<AdsenseB />