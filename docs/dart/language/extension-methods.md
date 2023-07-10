---
title: Dart의 확장된 메소드
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/extension-methods](https://dart.dev/language/extension-methods)

확장된 메소드은 기존의 라이브러리에 기능요소를 추가하는 것 입니다.
아마 자세히 알지 못한 상태에서 확장된 메소드를 사용하고 있을 것 입니다.
예로 들어, IDE에서 코드완성을 사용할 때 일반 메소드말고 확장된 메소드를 제안할 것 입니다.

<iframe width="560" height="315" src="https://www.youtube.com/embed/D3j0OSfT9ZI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

_이 비디오를 시청하시면 확장된 메소드에 대한 개요를 배울 수 있습니다._

## 개요 {#overview}

몇몇 API를 사용하거나 널리사용되는 라이브러리를 구현할 때 API를 바꾸는 것이 비실용적이거나 불가능할 때가 많습니다.
그러나 일부 기능을 추가하고 싶을 때가 있습니다.

예로 들어, 문자열을 정수로 파싱하는 아래 코드를 고려해보겠습니다.

```dart
int.parse('42')
```

대신 문자열에 이 기능을 가지고 있다면, 툴에서 좀더 짧고 쉽게 사용할 수 있을 것 입니다.

```dart
'42'.parseInt()
```

위 코드가 가능하려면 `String` 클래스의 확장을 포함한 라이브러리를 가져와야 합니다.

```dart
import 'string_apis.dart';
// ···
print('42'.parseInt()); // 확장된 함수 사용하기
```

확장은 메소드 뿐만아니라 getter, setter와 연산자 등 다른 멤버도 가능합니다.
또한, 확장은 API 충돌이 발생할때 도움이 되도록 명명할 수 있습니다.
아래에서 문자열의 연산자인 확장(`NumberParsing`)을 사용하여 확장된 메소드 `parseInt()`를 어떻게 구현하는지 보여줍니다.

```dart
extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
  // ···
}
```

다음 절에서는 확장된 메소드를 어떻게 사용하는지 보겠습니다.
그 후 확장된 메소드를 구현하는 것을 살펴보겠습니다.

## 확장된 메소드 사용하기 {#using-extension-methods}

모든 Dart 코드 처럼, 확장된 메소드는 라이브러리에 있습니다.
이미 확장된 메소드를 어떻게 사용하는지 봤을 것 입니다.
라이브러리 자체를 가져와서 평범한 메소드처럼 사용하면 됩니다.

```dart
// String에 확장을 가지고 있는 라이브러리를 가져옵니다.
import 'string_apis.dart';
// ···
print('42'.padLeft(5)); // String 메소드를 사용
print('42'.parseInt()); // 확장된 메소드를 사용
```

확장된 메소드를 사용하기 위해 알아야될 전부 입니다.
코드를 작성할 때 확장된 메소드를 정적 타입(`dynamic`과 반대)에 의존시키고 [API 충돌](extension-methods.md#api-conflicts)을 해결해야하는 방법이 필요할 수 있습니다.

### 정적 타입과 dynamic {#static-types-and-dynamic}

변수의 타입이 `dynamic`일 경우 확장된 메소드를 실행할 수 없습니다.
예로 들어, 아래 코드의 결과는 런타임 예외가 발생합니다.

```dart
dynamic d = '2';
print(d.parseInt()); // 런타임 예외: NoSuchMethodError
```

확장된 메소드는 Dart의 타입추론에도 동작합니다.
아래 코드는 변수 `v`가 `String` 타입을 가지도록 추론되어 정상동작을 합니다.

```dart
var v = '2';
print(v.parseInt()); // 출력 : 2
```

`dynamic`이 동작하지 않은 이유는 확장된 메소드가 정적 타입의 수신자에 대해 처리되기 때문입니다.
확장된 메소드가 정적으로 처리되기 때문에 정적 함수를 호출하는 것처럼 빠릅니다.

정적 타입과 `dynamic`에 대한 자세한 내용은 [Dart 타입 시스템](type-system.md)을 참고하세요.

### API 충돌 {#api-conflicts}

확장된 멤버가 인터페이스나 다른 확장된 멤버와 충돌할 경우 몇가지 선택지가 있습니다.

한가지는 `show`나 `hide`를 사용하여 노출되는 API를 제한하는 충돌된 확장을 가져오는 것으로 변경합니다.

```dart
// String 확장된 메소드 parseInt()를 정의
import 'string_apis.dart';

// 동일하게 parseInt()를 정의했지만 NumberParsing2를 숨겨서 확장된 메소드를 숨김
import 'string_apis_2.dart' hide NumberParsing2;

// ···
// 'string_apis.dart'에 정의된 parseInt()
print('42'.parseInt());
```

다른방법으로는 확장이 래퍼클래스처럼 보이도록 명시적 확장을 사용하는 것 입니다.

```dart
// 두 라이브러리 모두 다른 이름을 가진 확장으로 문자열의 확장인 parseInt()를 정의합니다.
import 'string_apis.dart'; // NumberParsing 확장을 포함
import 'string_apis_2.dart'; // NumberParsing2 확장을 포함

// ···
// print('42'.parseInt()); // 동작하지 않음
print(NumberParsing('42').parseInt());
print(NumberParsing2('42').parseInt());
```

만약 확장의 이름이 동일하다면 접두어를 사용하여 가져와야됩니다.

```dart
// 두 라이브러리 모두 다른 이름을 가진 확장으로 문자열의 확장인 parseInt()를 정의합니다.
// 또한 'string_apis_3.dart'의 NumberParsing 확장은 parseNum()을 정의합니다.
import 'string_apis.dart';
import 'string_apis_3.dart' as rad;

// ···
// print('42'.parseInt()); // 동작하지 않음

// string_apis.dart의 ParseNumbers 확장을 사용
print(NumberParsing('42').parseInt());

// string_apis_3.dart의 ParseNumbers 확장을 사용
print(rad.NumberParsing('42').parseInt());

// string_apis_3.dart만 parseNum()를 가짐
print('42'.parseNum());
```

예제가 보여주듯 접두어를 사용하여 가져오더라도 확장된 메소드를 암묵적으로 실행할 수 있습니다.
확장을 명시적으로 실행할 때 이름이 충돌되는 것을 피하고자 할때만 접두어를 사용하시면 됩니다.

## 확장된 메소드 구현하기 {#implementing-extension-methods}

아래의 문법이 확장을 생성하는 것 입니다.

```dart
extension <extension name>? on <type> {
  (<member definition>)*
}
```

예로 들어, `String` 클래스에 확장을 구현하는 것 입니다.

```dart
extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }

  double parseDouble() {
    return double.parse(this);
  }
}
```

확장의 멤버는 메소드, getter, setter 또는 연산자가 될 수 있습니다.
또한 확장은 정적 필드와 정적 도우미 메소드를 가질 수 있습니다.

### 이름없는 확장 {#unnamed-extensions}

확장을 선언할 때 이름을 생략할 수 있습니다.
이름없는 확장은 선언된 라이브러리 내에서만 보입니다.
이름을 가지지 않기 때문에, [API 충돌](extension-methods.md#api-conflicts)을 해결하기 위해 명시적으로 적용할 수 없습니다.

```dart
extension on String {
  bool get isBlank => trim().isEmpty;
}
```

:::note
이름없는 확장의 정적 멤버는 확장 선언 내에서만 실행할 수 있습니다.
:::

## 제너릭 확장 구현하기 {#implementing-generic-extensions}

확장은 제너릭 타입 매개변수를 가질 수 있습니다.
예로 들어, 내장형 `List<T>` 타입에 getter, 연산자, 메소드를 확장하는 코드입니다.

```dart
extension MyFancyList<T> on List<T> {
  int get doubleLength => length * 2;
  List<T> operator -() => reversed.toList();
  List<List<T>> split(int at) => [sublist(0, at), sublist(at)];
}
```

`T` 타입은 메소드가 호출되는 list의 정적 타입에 기반으로 할당됩니다.

## 자료 {#resources}

확장된 메소드에 더 자세한 정보는 아래를 참고하세요.

* [문서: Dart 확장된 메소드 기본사항](https://medium.com/dartlang/extension-methods-2d466cd8b308)
* [기능 명세](https://github.com/dart-lang/language/blob/main/accepted/2.7/static-extension-methods/feature-specification.md#dart-static-extension-methods-design)
* [확장된 메소드 예제](https://github.com/dart-lang/samples/tree/main/extension_methods)

<AdsenseB />