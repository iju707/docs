---
title: Dart의 열거형
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/enum](https://dart.dev/language/enum)

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
복사-붙여넣기 오류를 방지하기 위하여 열거된 유형을 정의할 때 [쉼표로 끝나기](collections.md#lists)를 사용할 수 있습니다.
:::

### 향상된 열거형 선언하기 {#declaring-enhanced-enums}

또한 Dart는 고정된 수로 제한하여 정의된 상수 인스턴스를 가지는 필드, 메소드, 정적 생성자의 클래스를 선언하기 위한 열거형 선언을 허용합니다.

향상된 열거형 선언은 일반적인 [클래스](classes.md)의 문법을 따르되 몇가지 추가 요구사항이 있습니다.

* [mixins](mixins.md)로 추가된 것 포함하여 인스턴스 변수는 `final`이어야 합니다.
* 모든 [발생하는 생성자](constructors.md#constant-constructors)는 상수여야 합니다.
* [팩토리 생성자](constructors.md#factory-constructors)는 고정된 알려진 열거형 인스턴스 한개를 반환해야 합니다.
* [Enum](https://api.dart.dev/stable/dart-core/Enum-class.html)은 자동으로 확장되므로 다른 클래스는 확장될 수 없습니다.
* `index`, `hashCode`, 동등 연산자 `==`는 재정의될 수 없습니다.
* 자동으로 생성되는 정적 `values` getter와 충돌되기 때문에 `values`라는 이름을 가지는 멤버는 열거형에서 정의가 불가능합니다.
* 모든 enum의 인스턴스는 선언의 시작부에 선언이 되어야 하며, 최소 한개 이상의 인스턴스가 정의되어야 합니다.

향상된 열거형의 인스턴스 메소드는 현재 enum 값을 참조하기 위해 `this`를 사용할 수 있습니다.

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

:::note 버전노트
향상된 열거형은 [언어버전](https://dart.dev/guides/language/evolution#language-versioning)이 최소 2.17이어야 합니다.
:::

### 열거형 사용하기 {#using-enums}

열거된 값에 접근하는 것은 다른 [정적 변수](classes.md#class-variables-and-methods)와 동일합니다.

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

열거형을 [switch 명령문](control-flow.md#switch-and-case)에서 사용할 수 있으며 모든 열거형의 값을 다루지 않으면 경고가 발생합니다.

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

보통의 객체처럼 열겨형의 값에 대한 멤버도 접속할 수 있습니다.

```dart
print(Vehicle.car.carbonFootprint);
```

<AdsenseB />