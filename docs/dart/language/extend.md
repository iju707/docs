---
title: Dart의 클래스확장
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/extend](https://dart.dev/language/extend)

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

`extends`의 다른 사용은 제너릭 페이지의 [매개변수화된 타입](generics.md#restricting-the-parameterized-type) 논제를 참고하세요.

### 멤버 재정의 {#overriding-members}

하위클래스는 인스턴스 메소드([연산자](methods.md#operators)포함), getter, setter를 재정의할 수 있습니다.
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
* [제너릭 메소드](generics.md#using-generic-methods)은 제너릭이 아닌것으로 재정의할 수 없으며 반대도 불가능합니다.

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

<AdsenseB />