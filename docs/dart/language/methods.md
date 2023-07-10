---
title: Dart의 메소드
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/methods](https://dart.dev/language/methods)

메소드는 객체에 대한 행동을 제공하는 함수입니다.

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
`!=`와 같은 몇몇 [연산자](operators.md)가 목록에 없음을 알 수 있을 것입니다.
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
추상 메소드는 [추상 클래스](classes.md#abstract-classes)에서만 존재합니다.

메소드를 추상으로 만들기 위해 메소드 본문 대신 세미콜론(`;`)을 사용합니다.

```dart
abstract class Doer {
    // 인스턴스 변수와 메소드를 정의...

    void doSomething(); // 추상 메소드를 정의
}ß

class EffectiveDoer extends Doer {
    void doSomething() {
        // 구현을 제공하며 메소드는 여기서 추상이 아닙니다.
    }
}
```

<AdsenseB />