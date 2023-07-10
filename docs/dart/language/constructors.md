---
title: Dart의 생성자
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/constructors](https://dart.dev/language/constructors)

클래스와 동일한 이름으로 함수를 생성하면 생성자를 선언할 수 있습니다.(추가 선택적으로, [명명된 생성자](constructors.md#named-constructors)에 묘사된 추가적 식별자도 가능)
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
보통 Dart 스타일에서는 `this`를 생략합니다.
:::

## 형식 매개변수로 초기화하기 {#initializing-formal-parameters}

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

## 기본 생성자 {#default-constructors}

생성자를 선언하지 않으면 기본 생성자를 제공합니다.
기본 생성자는 인자가 없으며 부모클래스의 인자없는 생성자를 실행합니다.

## 생성자는 상속되지 않음 {#constructors-arent-inherited}

하위클래스는 상위클래스의 생성자를 상속하지는 않습니다.
생성자를 선언하지 않은 하위클래스는 기본 생성자(인자 없음, 이름 없음)만 가지게 됩니다.

## 명명된 생성자 {#named-constructors}

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

## 기본아닌 상위클래스 생성자 실행하기 {#invoking-a-non-default-superclass-constructor}

기본적으로 하위클래스의 생성자는 상위클래스의 이름없고 인자가 없는 생성자를 호출합니다.
상위클래스의 생성자는 생성자 본문의 시작에 호출됩니다.
[초기화 목록](constructors.md#initializer-list)도 사용되었다면, 상위클래스가 호출되기전에 실행합니다.
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

### super 매개변수 {#super-parameters}

상위 생성자의 호출에 각각 매개변수를 수동으로 전달하지 않기 위하여, 지정된 또는 기본 상위클래스 생성자상위-초기화 매개변수를 사용할 수 있습니다.
이 기능은 리디렉션 생성자와 함께 사용할 수 없습니다.
상위 초기화 매개변수는 [형식 매개변수로 초기화하기](constructors.md#initializing-formal-parameters)의 구문과 의미가 유사합니다.

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
콜론(`:`) 다음에 생성자 호출(클래스 이름대신 `this`를 사용)하고 리디렉션 생성자의 본문은 비어있습니다.

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
자세한 내용은 [생성자 사용하기](classes.md#using-constructors)를 참고하세요.

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

<AdsenseB />