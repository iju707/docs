---
title: Dart의 클래스
tag:
    - Dart
    - 2.18.2
---

원문 : [https://dart.dev/guides/language/language-tour#classes](https://dart.dev/guides/language/language-tour#classes)

Dart는 클래스와 혼합된 계승을 지원하는 객체지향 언어입니다.
모든 객체는 클래스의 인스턴스이며 `Null`을 제외한 클래스는 [Object](https://api.dart.dev/stable/dart-core/Object-class.html)에서 파생됩니다.
혼합된 계승은 모든 클래스는 정확히 하나의 상위클래스(예외로 [최상위 클래스](https://dart.dev/null-safety/understanding-null-safety#top-and-bottom) `Object?`)를 가지지만 클래스 본문은 다수의 클래스 계층을 재사용될 수 있습니다.
[확장메소드](#extension-methods)는 클래스를 변경하거나 하위 클래스를 만들지 않고 클래스의 기능을 추가할 수 있는 방법입니다.

## 클래스 멤버 사용하기 {#using-class-members}

객체는 함수와 데이터로 구성된 멤버가 있습니다. (각기 메소드와 인스턴스 변수)
메소드를 호출할 때 객체 위에서 실행하므로 메소드는 객체의 함수와 데이터에 접근할 수 있습니다.

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

몇몇 클래스는 [상수 생성자](#constant-constructors)를 제공합니다.
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
객체의 유형을 테스트할 때 `runtimeType` 보다 [유형 테스트 연산자](#type-test-operators)를 사용하세요.
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
자세한 정보는 [getter와 setter](#getters-and-setters)를 참고하세요.

`late`가 아닌 인스턴스 변수를 선언한 곳에 초기화하려면 값은 생성자나 초기화 목록이 실행되기 전인 인스턴스가 생성될 때 설정됩니다.

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
선언부에서 `final`이거나 `late`가 아닌 인스턴스 변수의 초기화는 생성자 매개변수나 생성자 [초기화 목록](#initializer-list)을 사용합니다.

```dart
class ProfileMark {
    final String name;
    final DateTime start = DateTime.now();

    ProfileMark(this.name);
    ProfileMark.unnamed() : name = '';
}
```

`final` 인스턴스 변수의 값을 생성자 본문이 시작한 이후 할당해야 할 경우 다음의 한가지를 사용하면 됩니다.

* [팩토리 생성자](#factory-constructors)를 사용
* `late final`을 사용하는 것은 [주의해야 합니다.](https://dart.dev/guides/language/effective-dart/design#avoid-public-late-final-fields-without-initializers) 초기화 없는 `late final`은 API에 setter를 추가합니다.

## 생성자 {#constructors}

클래스와 동일한 이름으로 함수를 생성하면 생성자를 선언할 수 있습니다.(추가 선택적으로, [명명된 생성자](#named-constructors)에 묘사된 추가적 식별자도 가능)
생성자의 대부분 일반적인 유형은 생성을 위한 생성자로, 클래스의 새로운 인스턴스를 만들게 됩니다.

```dart
class Point {
    double x = 0;
    double y = 0;
    Point(double x, double y) {
        // 인스턴스 변수를 초기화 하기 위해
        // 좀더 나은 방식으로 형식 매개변수로 초기화하기를 참고하세요
        this.x = x;
        this.y = y;
    }
}
```

`this` 키워드는 현재 인스턴스를 참조합니다.

:::note
이름에 충돌이 있을 경우에만 `this` 키워드를 사용하세요.
그렇지 않으면 Dart는 `this`를 생략합니다.
:::

### 형식 매개변수로 초기화하기 {#initializing-formal-parameters}

생성자의 인자를 인스턴스 변수에 할당하는 패턴은 매우 일반적이며, Dart는 형식 매개변수로 초기화하기를 사용하여 더 쉽게 만들어줍니다.

매개변수 초기화는 또한 초기화되거나 기본값이 제공되어야 하는 null이 아닌 또는 `final` 인스턴스 변수의 초기화에도 사용됩니다.

```dart
class Point {
    final double x;
    final double y;

    // 생성자 본문이 실행되기 전에
    // x와 y 인스턴스 변수를 설정합니다.
    Point(this.x, this.y);
}
```

형식 초기화에 도입된 변수들은 암묵적 final이며 초기화 목록 범위 내에서만 사용가능합니다.

### 기본 생성자 {#default-constructors}

생성자를 선언하지 않으면 기본 생성자를 제공합니다.
기본 생성자는 인자가 없으며 부모클래스의 인자없는 생성자를 실행합니다.

### 생성자는 상속되지 않음 {#constructors-arent-inherited}

하위클래스는 상위클래스의 생성자를 상속하지는 않습니다.
생성자를 선언하지 않은 하위클래스는 기본 생성자(인자 없음, 이름 없음)만 가지게 됩니다.

### 명명된 생성자 {#named-constructors}

클래스에 대해 여러 생성자를 구현하거나 추가적인 명확함을 제공하려면 명명된 생성자를 사용합니다.

```dart
const double xOrigin = 0;
const double yOrigin = 0;

class Point {
    final double x;
    final double y;

    Point(this.x, this.y);

    // 명명된 생성자
    Point.origin()
        : x = xOrigin,
          y = yOrigin;
}
```

생성자는 상속이 되지 않음을 기억하며 부모클래스의 명명된 생성자는 하위클래스에 상속되지 않습니다.
부모클래스에 정의된 명명된 생성자를 하위클래스에 생성하려면 반드시 하위클래스에 생성자를 구현해야합니다.

### 기본아닌 상위클래스 생성자 실행하기 {#invoking-a-non-default-superclass-constructor}

기본적으로 하위클래스의 생성자는 상위클래스의 이름없고 인자가 없는 생성자를 호출합니다.
상위클래스의 생성자는 생성자 본문의 시작에 호출됩니다.
[초기화 목록](#initializer-list)도 사용되었다면, 상위클래스가 호출되기전에 실행합니다.
요약하자면 실행의 순서는 다음과 같습니다.

1. 초기화 목록
2. 상위클래스의 인자없는 생성자
3. 메인 클래스의 인자없는 생성자

상위클래스가 이름없고 인자가 없는 생성자가 없다면, 상위클래스의 생성자 중 하나를 수동으로 호출해야합니다.
생성자 본문 전에(누구든지) 콜론(`:`) 이후 상위클래스 생성자를 명시합니다.

아래 예제에서 Employee 클래스의 생성자는 상위클래스인 Person의 명명된 생성자를 호출합니다.
코드를 실행하기 위해 **Run** 버튼을 클릭해보세요.

<component is="script" type="text/javascript" src="https://dartpad.dev/inject_embed.dart.js" defer />
<pre>
    <code class="language-run-dartpad:theme-light:mode-dart:ga_id-example1:width-100%:height-400px">
class Person {
  String? firstName;

  Person.fromJson(Map data) {
    print('in Person');
  }
}

class Employee extends Person {
  // Person does not have a default constructor;
  // you must call super.fromJson().
  Employee.fromJson(super.data) : super.fromJson() {
    print('in Employee');
  }
}

void main() {
  var employee = Employee.fromJson({});
  print(employee);
  // Prints:
  // in Person
  // in Employee
  // Instance of 'Employee'
}
    </code>
</pre>

상위클래스 생성자의 인자는 생성자가 실행되기전에 수행되므로 인자는 함수호출처럼 표현식이 가능합니다.

```dart
class Employee extends Person {
    Employee() : super.fromJson(fetchDefaultData());
    // ...
}
```

:::warning
상위클래스 생성자의 인자는 `this`에 접근할 수 없습니다.
예로 들어, 인자는 정적 메소드를 호출할순 있지만 인스턴스 메소드는 불가합니다.
:::

상위 생성자의 호출에 각각 파라미터를 수동으로 전달하지 않기 위하여, 지정된 또는 기본 상위클래스 생성자상위-초기화 매개변수를 사용할 수 있습니다.
이 기능은 리디렉션 생성자와 함께 사용할 수 없습니다.
상위 초기화 매개변수는 [형식 매개변수로 초기화하기](#initializing-formal-parameters)의 구문과 의미가 유사합니다.

```dart
class Vector2d {
    final double x;
    final double y;

    Vector2d(this.x, this.y);
}

class Vector3d extends Vector2d {
    final double z;

    // x와 y 매개변수를 기본 상위 생성자에 전달하는 것은 다음과 같습니다.
    // Vector3d(final double x, final double y, this.z) : super(x, y);
    Vector3d(super.x, super.y, this.z);
}
```

상위 생성자 호출에 이미 위치인수가 있는 경우 상위 초기화 매개변수는 위치할 수 없지만 항상 다음과 같이 이름으로 지정할 수 있습니다.

```dart
class Vector2d {
    // ...

    Vector2d.named({required this.x, required this.y});
}

class Vector3d extends Vector2d {
    // ...

    // y 매개변수를 명명된 상위 생성자로 전달한 예시
    // Vector3d.yzPlane({required double y, required this.z})
    //      : super.named(x: 0, y: y);
    Vector3d.yzPlane({required super.y, required this.z}) : super.named(x: 0);
}
```

:::note 버전노트
상위 초기화 매개변수를 사용하려면 최소 2.17 [언어버전](https://dart.dev/guides/language/evolution#language-versioning)이 필요합니다.
이전 버전을 사용하고 있다면 모든 상위 생성자의 매개변수를 수동으로 전달해야 합니다.
:::

### 초기화 목록 {#initializer-list}

상위클래스 생성자를 실행하는것 외에도 생성자 본문이 실행하기 전에 인스턴스 변수를 초기화할 수 있습니다.
초기화를 쉼표로 구분합니다.

```dart
// 초기화 목록은 생성자 본문이 시작하기 전에 인스턴스 변수를 설정합니다.
Point.fromJson(Map<String, double> json)
    : x = json['x']!,
      y = json['y']! {
    print('In Point.fromJson(): ($x $y)');
}
```

:::warning
초기화의 우편은 `this` 에 접근할 수 없습니다.
:::

개발중에는 초기화목록에서 `assert`를 활용하여 입력를 검증할 수 있습니다.

```dart
Point.withAssert(this.x, this.y) : assert(x >= 0) {
    print('In Point.withAssert(): ($x, $y)');
}
```

초기화 목록은 final 필드를 설정할 때 편리합니다.
아래 예제는 3개의 final 필드를 초기화 목록에서 초기화 합니다.
**Run**을 클릭하면 코드를 실행합니다.

<component is="script" type="text/javascript" src="https://dartpad.dev/inject_embed.dart.js" defer />
<pre>
    <code class="language-run-dartpad:theme-light:mode-dart:ga_id-example1:width-100%:height-400px">
import 'dart:math';

class Point {
  final double x;
  final double y;
  final double distanceFromOrigin;

  Point(double x, double y)
      : x = x,
        y = y,
        distanceFromOrigin = sqrt(x * x + y * y);
}

void main() {
  var p = Point(2, 3);
  print(p.distanceFromOrigin);
}
    </code>
</pre>

### 리디렉션 생성자 {#redirecting-constructors}

때때로 동일 클래스의 다른 생성자에게 리디렉션할 목적으로 생성자를 사용할 수 있습니다.
콜론 다음에 생성자 호출(클래스 이름대신 `this`를 사용)하고 리디렉션 생성자의 본문은 비어있습니다.

```dart
class Point {
    double x, y;

    // 이 클래스의 메인 생성자
    Point(this.x, this.y);

    // 메인 생성자에게 위임
    Point.alongXAxis(double x) : this(x, 0);
}
```

### 상수 생성자 {#constant-constructors}

클래스가 절대 변경되지 않는 객체를 생성한다면 이 객체를 컴파일타임 상수로 만들 수 있습니다.
이것을 하기 위해 `const` 생성자를 정의하고 모든 변수를 `final`로 만듭니다.

```dart
class ImmutablePoint {
    static const ImmutablePoint origin = ImmutablePoint(0, 0);

    final double x, y;

    const ImmutablePoint(this.x, this.y);
}
```

상수 생성자는 항상 상수를 생성하지는 않습니다.
자세한 내용은 [생성자 사용하기](#using-constructors)를 참고하세요.

### 팩토리 생성자 {#factory-constructors}

클래스의 생성자가 항상 새로운 인스턴스를 생성하지 않는다면 `factory` 키워드를 사용합니다.
예로 들어, 팩토리 생성자는 캐시에서 인스턴스를 반환하거나 하위유형의 인스턴스를 반환합니다.
팩토리 생성자의 다른 사용경우는 초기화 목록에서 다루지 못하는 로직을 사용하여 final 변수를 초기화하는 경우입니다.

:::tip
final 변수의 지연된 초기화를 다루는 다른방법은 [late final을 사용](https://dart.dev/guides/language/effective-dart/design#avoid-public-late-final-fields-without-initializers)하는 것 입니다. (주의!)
:::

아래 예제에서 `Logger` 팩토리 생성자는 캐시에서 객체를 반환하며, `Logger.fromJson` 팩토리 생성자는 JSON 객체에서 final 변수를 초기화합니다.

```dart
class Logger {
    final String name;
    bool mute = false;

    // _cache는 이름앞에 _가 있어서 라이브러리 전용입니다.
    static final Map<String, Logger> _cache = <String, Logger>{};

    factory Logger(String name) {
        return _cache.putIfAbsent(name, () => Logger._internal(name));
    }

    factory Logger.fromJson(Map<String, Object> json) {
        return Logger(json['name'].toString());
    }

    Logger._internal(this.name);

    void log(String msg) {
        if (!mute) print(msg);
    }
}
```

:::note
팩토리 생성자는 `this`에 접근할 수 없습니다.
:::

팩토리 생성자를 실행하는 것은 다른 생성자와 비슷합니다.

```dart
var logger = Logger('UI');
logger.log('Button clicked');

var logMap = {'name': 'UI'};
var loggerJson = Logger.fromJson(logMap);
```

## 메소드 {#methods}

메소드는 객체의 행동을 제공하는 함수입니다.

### 인스턴스 메소드 {#instance-methods}

객체의 인스턴스 메소드는 인스턴스 변수와 `this`에 접근할 수 있습니다.
아래 예제의 `distanceTo()` 메소드는 인스턴스 메소드의 예제입니다.

```dart
import 'dart:math';

class Point {
    final double x;
    final double y;

    Point(this.x, this.y);

    double distanceTo(Point other) {
        var dx = x - other.x;
        var dy = y - other.y;
    }
}
```

### 연산자 {#operators}

연산자는 특별한 이름을 가진 인스턴스 메소드 입니다.
Dart는 아래의 이름 연산자를 정의할 수 있게 합니다.

| < | + | \| | >>> |
| :- | :- | :- | :- |
| > | / | ^ | [] |
| <= | ~/ | & | []= |
| >= | * | << | ~ |
| - | % | >> | == |

:::note
`!=`와 같은 몇몇 [연산자](./operators.md)가 목록에 없음을 알 수 있을 것입니다.
이것은 단순히 구문적 변형이기 때문입니다.
예로 들어, `e1 != e2` 표현식은 `!(e1 == e2)`의 구문적 변형입니다.
:::

연산자 선언은 내장된 식별자인 `operator`를 사용하여 정의할 수 있습니다.
아래 예제는 벡터의 더하기(`+`), 빼기(`-`), 동등(`==`)을 정의한 것 입니다.

```dart
class Vector {
    final x, y;

    Vector(this.x, this.y);

    Vector operator +(Vector v) => Vector(x + v.x, y + v.y);
    Vector operator -(Vector v) => Vector(x - v.x, y - v.y);

    @override
    bool operator ==(Object other) =>
        other is Vector && x == other.x && y == other.y;
    
    @override
    int get hashCode => Object.hash(x, y);
}

void main() {
    final v = Vector(2, 3);
    final w = Vecotr(2, 2);

    assert(v + w == Vector(4, 5));
    assert(v - w == Vector(0, 1));
}
```

### getter와 setter {#getters-and-setters}

getter와 setter는 객체의 속성을 읽고 쓸수 있는 특별한 메소드 입니다.
각 인스턴스 변수는 암묵적으로 getter와 가능하면 setter까지 가지고 있다는것을 기억하세요.
`get`과 `set` 키워드를 사용한 getter와 setter를 구현하여 추가적인 속성을 생성할 수 있습니다.

```dart
class Rectangle {
    double left, top, width, height;

    Rectangle(this.left, this.top, this.width, this.height);

    // 두 계산된 속성을 정의 : right, bottom
    double get right => left + width;
    set right(double value) => left = value - width;
    double get bottom => top + height;
    set bottom(double value) => top = value - height;
}

void main() {
    var rect = Rectangle(3, 4, 20, 15);
    assert(rect.left == 3);
    rect.right = 12;
    assert(rect.left == -8);
}
```

getter와 setter를 사용하면 클라이언트 코드를 변경하지 않고 인스턴스 변수로 시작하여 나중에는 메소드로 래핑할 수 있습니다.

:::note
증분(`++`)와 같은 연산자는 getter가 명시적으로 정의되어있는지 여부와 상관없이 예상대로 동작합니다.
예상치 못한 부작용을 피하기 위해 연산자는 getter를 딱 한번만 호출하고 해당 값을 임시변수에 저장합니다.
:::

### 추상 메소드 {#abstract-methods}

인스턴스, getter와 setter는 추상이 될 수 있으며 인터페이스를 정의해도 다른 클래스에서 구현할 수 있도록 남길수 있습니다.
추상 메소드는 [추상 클래스](#abstract-classes)에서만 존재합니다.

메소드를 추상으로 만들기 위해 메소드 본문 대신 세미콜론(`;`)을 사용합니다.

```dart
abstract class Doer {
    // 인스턴스 변수와 메소드를 정의...

    void doSomething(); // 추상 메소드를 정의
}

class EffectiveDoer extends Doer {
    void doSomething() {
        // 구현을 제공하며 메소드는 여기서 추상이 아닙니다.
    }
}
```

## 추상 클래스 {#abstract-classes}

인스턴스가 될 수 없는 추상 클래스를 정의하기 위해 `abstract` 수식어를 사용합니다.
추상 클래스는 자주 구현되는 인터페이스를 정의하기 위해 유용합니다.
추상 클래스를 인스턴스화할 수 있도록 보이려면, [팩토리 생성자](#factory-constructors)를 정의합니다.

추상 클래스는 자주 [추상 메소드](#abstract-methods)를 가지고 있습니다.
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

## 클래스 확장하기 {#extending-a-class}

`extends`를 사용해서 하위 클래스를 생성할수 있고, `super`로 상위클래스를 참조할 수 있습니다.

```dart
class Television {
    void turnOn() {
        _illuminateDisplay();
        _activateIrSensor();
    }
    // ...
}

class SmartTelevision extends Television {
    void turnOn() {
        super.turnOn();
        _bootNetworkInterface();
        _initializeMemory();
        _upgradeApps();
    }
    // ...
}
```

`extends`의 다른 사용은 [제너릭](./generics.md)의 [매개변수화 유형](./generics.md#restricting-the-parameterized-type)의 논제를 참고하세요.

### 멤버 재정의 {#overriding-members}

하위클래스는 인스턴스 메소드([연산자](#operators)포함), getter, setter를 재정의할 수 있습니다.
`@override` 어노테이션을 사용하여 의도적으로 멤버를 재정의했다고 가리킬 수 있습니다.

```dart
class Television {
    // ...
    set contrast(int value) { ... }
}

class SmartTelevision extends Television {
    @override
    set contrast(num value) { ... }
    // ...
}
```

재정의 메소드 선언은 다양한 여러가지 재정의 방법에 일치해야합니다.

* 반환 유형은 재정의할 메소드의 반환 유형과 동일한 유형(또는 하위유형)이어야 합니다.
* 인자 유형은 재정의할 메소드의 인자 유형과 동일한 유형(또는 하위유형)이어야 합니다.
  이전 예제에서, `SmartTelevision`의 `contrast` setter는 인자 유형을 `int`의 하위유형인 `num`으로 변경합니다.
* 재정의된 메소드가 n 위치의 매개변수를 수용하면, 재정의한 메소드 또한 n 위치의 매개변수를 수용해야 합니다.
* [제너릭 메소드](./generics.md#using-generic-methods)은 제너릭이 아닌것으로 재정의할 수 없으며 반대도 불가능합니다.

때때로 메소드 매개변수나 인스턴스 변수의 유형을 축소하고 싶을 수 있습니다.
이것은 정상적인 규칙을 위반하고 런타임 유형 오류를 발생시킬 수 있는 다운캐스드와 비슷합니다.
그래도 코드에서 타입에러가 발생하지 않음을 보장하면 타입축소는 가능합니다.
이경우에, 매개변수 정의에서 [`covariant` 키워드](https://dart.dev/guides/language/sound-problems#the-covariant-keyword)를 사용하면 됩니다.
자세한 정보는 [Dart 언어 사양](https://dart.dev/guides/language/spec)을 보세요.

:::warning
`==`를 재정의하면 객체의 `hashCode` getter를 함께 재정의해야합니다.
`==`와 `hashCode`에 대한 재정의 예제는 [맵키 구현](https://dart.dev/guides/libraries/library-tour#implementing-map-keys)을 보세요.
:::

### noSuchMethod() {#nosuchmethod}

존재하지 않는 메소드나 인스턴스 변수를 사용을 시도하는 코드를 감지하거나 반응할때는 `noSuchMethod()`를 재정의하면 됩니다.

```dart
class A {
    // noSuchMethod를 재정의하지 않으면,
    // 존재하지 않는 멤버를 사용하는 결과는 NoSuchMethodError입니다.
    @override
    void noSuchMethod(Invocation invocation) {
        print('존재하지 않는 멤버사용을 시도했습니다: ${invocation.memberName}');
    }
}
```

아래 중 **하나**라도 참이 아니면 구현되지않은 메소드를 **실행할 수 없습니다.**

* 받는 쪽이 정적유형 `dynamic`을 가집니다.
* 받는 쪽이 미구현된 메소드(abstract도 가능)를 정의하는 정적유형을 가지고 받는 쪽의 동적유형은 클래스 `Object`와는 다른 `noSuchMethod()`의 구현을 가집니다.

더 많은 정보는, 비공식 [noSuchMethod 전달 사양](https://github.com/dart-lang/language/blob/master/archive/feature-specifications/nosuchmethod-forwarding.md)을 참고하세요.

## 확장메소드 {#extension-methods}

확장메소드는 존재하는 라이브러리의 기능을 추가할 때 사용되는 방법입니다.
아마 인지하지 못한채로 확장 메소드를 사용하고 있습니다.
예로 들어, IDE의 코드 채우기를 사용하고 있으면, 일반적인 방법과 함께 확장 함수를 제안합니다.

`string_apis.dart`에서 정의된 `String`의 명명된 `parseInt()` 확장메소드를 사용하는 예제입니다.

```dart
import 'string_apis.dart';
...
print('42'.padLeft(5)); // String 메소드를 사용
print('42'.parseInt()); // 확장메소드 사용
```

확장메소드를 사용 및 구현하는 상세정보는 [확장메소드 페이지](https://dart.dev/guides/language/extension-methods)를 참고하세요.

## 열거된 유형 {#enumerated-types}

열거형, enums라고 종종 불리는 열거된 유형은 고정된 숫자의 상수값을 표현하는데 사용되는 클래스의 특수한 종류입니다.

:::note
모든 enums는 자동으로 [`Enum`](https://api.dart.dev/stable/dart-core/Enum-class.html) 클래스를 확장합니다.
또한 봉인되어있기 때문에 하위클래스, 구현, 혼합될 수 없으며 명시적 인스턴스화도 할 수 없습니다.

추상클래스와 mixin은 명시적으로 `Enum`을 구현 또는 확장할 수 있지만 enum 정의를 구현하거나 혼합하여도 어떠한 객체라도 해당 클래스와 mixin의 유형을 실제 구현할 수 없습니다.
:::

### 단순 열거형 선언하기 {#declaring-simple-enums}

단순한 열거된 유형을 정의하는 것은 `enum` 키워드를 사용하고 열거할 값을 목록화 하면 됩니다.

```dart
enum Color { red, green, blue }
```

:::tip
복사-붙여넣기 오류를 방지하기 위하여 열거된 유형을 정의할 때 [쉼표로 끝나기](built-in-types.md#trailing-comma)를 사용할 수 있습니다.
:::

### 향상된 열거형 선언하기 {#declaring-enhanced-enums}

또한 Dart는 고정된 수로 제한하여 정의된 상수 인스턴스를 가지는 필드, 메소드, 정적 생성자의 클래스를 선언하기 위한 열거형 선언을 허용합니다.

향상된 열거형 선언은 일반적인 [클래스](./classes.md)의 문법을 따르되 몇가지 추가 요구사항이 있습니다.

* [mixins](#adding-features-to-a-class-mixins)로 추가된 것 포함하여 인스턴스 변수는 `final`이어야 합니다.
* 모든 [발생하는 생성자](#constant-constructors)는 상수여야 합니다.
* [팩토리 생성자](#factory-constructors)는 고정된 알려진 열거형 인스턴스 한개를 반환해야 합니다.
* [Enum](https://api.dart.dev/stable/2.19.0/dart-core/Enum-class.html)은 자동으로 확장되므로 다른 클래스는 확장될 수 없습니다.
* `index`, `hashCode`, 동등 연산자 `==`는 재정의될 수 없습니다.
* 자동으로 생성되는 정적 `values` getter와 충돌되기 때문에 `values`라는 이름을 가지는 멤버는 열거형에서 정의가 불가능합니다.
* 모든 enum의 인스턴스는 선언의 시작부에 선언이 되어야 하며, 최소 한개 이상의 인스턴스가 정의되어야 합니다.

다수의 인스턴스, 인스턴스 변수, getter, 구현된 인터페이스를 가진 향상된 열거형을 정의하는 예제입니다.

```dart
enum Vehicle implements Comparable<Vehicle> {
    car(tires: 4, passengers: 5, carbonPerKilometer: 400),
    bus(tires: 6, passengers: 50, carbonPerKilometer: 800),
    bicycle(tires: 2, passengers: 1, carbonPerKilometer: 0);

    const Vehicle({
        required this.tires,
        required this.passengers,
        required this.carbonPerKilometer,
    });

    final int tires;
    final int passengers;
    final int carbonPerKilometer;

    int get carbonFootprint => (carbonPerKilometer / passengers).round();

    @override
    int compareTo(Vehicle other) => carbonFootprint - other.carbonFootprint;
}
```

향상된 열거형의 선언에 더 자세한 내용은 [클래스](./classes.md) 절을 참고하세요.

:::note 버전노트
향상된 열거형은 [언어버전](https://dart.dev/guides/language/evolution#language-versioning)이 최소 2.17이어야 합니다.
:::

### 열거형 사용하기 {#using-enums}

열거된 값에 접근하는 것은 다른 [정적 변수](#static-variables)와 동일합니다.

```dart
final favoriteColor = Color.blue;
if (favoriteColor == Color.blue) {
    print('Your favorite color is blue!');
}
```

열거형의 각 값은 `index` getter를 가지며 열거형 정의에서 값의 0부터 시작하는 위치를 반환합니다.
예로 들어, 첫번째 값은 0 인덱스이며 두번째 값은 1 인덱스입니다.

```dart
assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);
```

열거된 값들의 목록을 가져오려면 열거형의 `values` 상수를 사용하면 됩니다.

```dart
List<Color> colors = Color.values;
assert(colors[2] == Color.blue);
```

열거형을 [switch 명령문](./control-flow-statements.md#static-variables)에서 사용할 수 있으며 모든 열거형의 값을 다루지 않으면 경고가 발생합니다.

```dart
var aColor = Color.blue;

switch (aColor) {
    case Color.red:
        print('Red as roses!');
        break;
    case Color.green:
        print('Green as grass!');
        break;
    default: // 이 부분이 없으면 경고 발생
        print(aColor); // 'Color.blue'
}
```

`Color.blue`에서 `blue`와 같은 열거된 값의 이름에 접근하려면 `.name` 속성을 사용하면 됩니다.

```dart
print(Color.blue.name); // 'blue'
```

## 클래스에 기능 추가하기 : mixin {#adding-features-to-a-class-mixins}

Mixin은 다수의 클래스 계층에서 클래스 코드를 재사용하는 방법입니다.

mixin을 사용하려면 `with` 키워드 뒤로 한개 이상의 mixin 이름을 나열합니다.
아래 예제는 두개의 클래스가 mixin을 사용하는 것 입니다.

```dart
class Musician extends Performer with Musical {
    // ...
}

class Maestro extends Person with Musical, Aggressive, Demented {
    Maestro(String maestroName) {
        name = maestroName;
        canConduct = true;
    }
}
```

mixin을 구현하기 위해 Object를 확장하고 생성자 선언이 없는 클래스를 생성합니다.
mixin을 일반 클래스로 사용하길 원하지 않는 이상 `class` 대신 `mixin` 키워드를 사용합니다.
예로 들면,

```dart
mixin Musical {
    bool canPlayPiano = false;
    bool canCompose = false;
    bool canConduct = false;

    void entertainMe() {
        if (canPlayPiano) {
            print('Playing piano');
        } else if (canConduct) {
            print('Waving hands');
        } else {
            print('Humming to self');
        }
    }
}
```

때로는 mixin을 사용할 유형을 제한할 경우도 있습니다.
예로 들어, mixin이 내부에 정의되지 않은 함수를 실행해야 할 때가 있습니다.
아래 예제에서 보여주듯, `on` 키워드를 사용하여 요구되는 상위클래스를 정의하여 mixin의 사용을 제한할 수 있습니다.

```dart
class Musician {
    // ...
}
mixin MusicalPerformer on Musician {
    // ...
}
class SingerDancer extends Musician with MusicalPerformer {
    // ...
}
```

이전 코드에서 `Musician` 클래스를 확장/구현한 클래스만 mixin `MusicalPerformer`를 사용할 수 있습니다.
`SingerDancer`가 `Musician`을 확장했기 떄문에 `SingerDancer`는 `MusicalPerformer`를 사용할 수 있습니다.

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