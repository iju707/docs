---
title: Dart의 메소드확장
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/mixins](https://dart.dev/language/mixins)

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

<AdsenseB />