---
title: Dart의 제너릭
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/generics](https://dart.dev/language/generics)

기본 배열타입인 [`List`](https://api.dart.dev/stable/dart-core/List-class.html)에 대한 API 문서를 보다보면, 실제 `List<E>`와 같은 타입을 볼 수 있습니다.
`<...>` 표기법은 리스트의 제너릭(또는 매개변수화된) 타입(형식 타입 매개변수를 가지는 타입)을 표기합니다.
[관례에 따르면](https://dart.dev/guides/language/effective-dart/design#do-follow-existing-mnemonic-conventions-when-naming-type-parameters), 대부분 타입 변수는 단일문자 이름(E 및 T, S, K, V 같은)을 가집니다.

## 왜 제너릭을 사용하는가? {#why-use-generics}

제너릭은 자주 타입보장이 필요할 때 사용되지만 코드가 실행가능하도록 많은 이점을 가지고 있습니다.

* 제너릭타입을 적절하게 지정하면 코드가 더 잘 생성됩니다.
* 제너릭을 사용하여 코드중복을 줄일 수 있습니다.

목록에 문자열만 포함하려고 하는 경우 `List<String>`(문자열 목록으로 부름)으로 선언하면 됩니다.
이것으로 당신과 같이 일하는 프로그래머, 도구 등이 목록에 문자열이 아닌 것이 할당되면 잘못됨을 감지할 수 있습니다.
아래 예제가 있습니다.

```dart
// 정적분석 : 에러/경고
var names = <String>[];
names.addAll(['Seth', 'Kathy', 'Lars']);
names.add(42); // Error
```

제너릭을 사용하는 다른 이유로 코드 중복을 줄여주는 것 입니다.
제너릭은 정적 분석의 이점을 가져간 채로 다수의 타입에 대하여 단일 인터페이스와 구현을 공유할 수 있습니다.
예로 들어, 객체에 대한 캐시용 인터페이스를 생성하겠습니다.

```dart
abstract class ObjectCache {
  Object getByKey(String key);
  void setByKey(String key, Object value);
}
```

이 인터페이스의 문자열용 버전이 필요함을 발견하고 다른 인터페이스를 생성합니다.

```dart
abstract class StringCache {
  String getByKey(String key);
  void setByKey(String key, String value);
}
```

나중에, 이 인터페이스의 숫자용 버전이 필요함을 발견하고....
아이디어를 생각해봅시다.

제너릭 타입은 이 모든 인터페이스의 생성에 대한 문제를 해결해줍니다.
기존과 다르게 타입 매개변수를 받는 단일 인터페이스를 생성합니다.

```dart
abstract class Cache<T> {
  T getByKey(String key);
  void setByKey(String key, T value);
}
```

코드에서 T는 들어오는 타입입니다.
개발자가 나중에 정의할 타입의 자리표시자로 생각하시면 됩니다.

## 콜렉션 리터럴에서 사용하기 {#using-collection-literals}

리스트, 세트, 맵 리터럴은 매개변수화 되어있습니다.
매개변수화된 리터럴은 기존에 사용하는 리터럴과 유사하지만 중괄호를 열기전 `<type>`(리스트, 세트) 또는 `<keyType, valueType>`(맵)을 추가합니다.
타입화 리터럴에 대한 예제입니다.

```dart
var names = <String>['Seth', 'Kathy', 'Lars'];
var uniqueNames = <String>{'Seth', 'Kathy', 'Lars'};
var pages = <String, String>{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};
```

## 생성자에 매개변수화된 타입 사용하기 {#using-parameterized-types-with-constructors}

생성자를 사용할 때 한개 이상의 타입을 지정하려면 클래스 이름에 꺾쇠 괄호(`<...>`)에 타입을 추가합니다.
예로 들면 다음과 같습니다.

```dart
var nameSet = Set<String>.from(names);
```

아래 코드는 정수 키와 View 타입의 값을 가지는 Map을 생성하는 것 입니다.

```dart
var views = Map<int, View>();
```

## 제너릭 콜렉션과 가지고있는 타입 {#generic-collections-and-the-types-they-contain}

Dart의 제너릭 타입은 _구체화_되어있습니다.
다시말해 런타입동안 타입 정보를 가지고 다니게 됩니다.
예로 들어, 콜렉션의 타입에 대한 테스트가 가능합니다.

```dart
var names = <String>[];
names.addAll(['Seth', 'Kathy', 'Lars']);
print(names is List<String>); // true
```

:::note
대조적으로 자바의 제너릭은 _지워 없앰_을 사용합니다.
다시 말해, 제너릭 타입 매개변수가 런타임에 삭제됩니다.
자바에서 객체가 List인지 테스트는 가능하지만 `List<String>`인지는 테스트가 불가능합니다.
:::

## 매개변수화 타입 제한하기 {#restricting-the-parameterized-type}

제너럭 타입을 구현할 때 인자로 제공되는 타입에 대한 제한을 하고 특정 타입의 하위 타입만 가능하도록 하고 싶을 수 있습니다.
이때 `extends` 키워드를 사용하여 할 수 있습니다.

일반적인 사용사례는 `Object`의 하위 유형으로 만들어진 null이 아닌 타입(기본값 [`Object?`](https://dart.dev/null-safety/understanding-null-safety#top-and-bottom) 대신)으로 확정하는 것 입니다. 

```dart
class Foo<T extends Object> {
  // T에 어느 타입이든 가능하지만 null이 아니어야 합니다.
}
```

`Object` 대신 다른 타입에도 `extends`를 사용할 수 있습니다.
아래 예제는 `SomeBaseClass`를 확장하는 것이며 `SomeBaseClass`의 멤버만 T 타입의 객체로 호출될 수 있습니다.

```dart
class Foo<T extends SomeBaseClass> {
  // 구현은 여기서...
  String toString() => "Instance of 'Foo<$T>'";
}

class Extender extends SomeBaseClass {...}
```

`SomeBaseClass`나 그 하위 타입을 제너릭 인자로 사용하는것이 허용됩니다.

```dart
var someBaseClassFoo = Foo<SomeBaseClass>();
var extenderFoo = Foo<Extender>();
```

또한 제너릭 인자를 사용하지 않는 것도 허용됩니다.

```dart
var foo = Foo();
print(foo); // Foo<SomeBaseClass>의 인스턴스
```

`SomeBaseClass`가 아닌 것으로 타입을 지정하면 에러가 발생합니다.

```dart
// 정적 분석 : 에러/경고
var foo = Foo<Object>();
```

## 제너릭 함수 사용하기 {#using-generic-methods}

메소드와 함수에서도 타입 인자가 허용됩니다.

```dart
T first<T>(List<T> ts) {
  // Do some initial work or error checking, then...
  T tmp = ts[0];
  // Do some additional checking or processing...
  return tmp;
}
```

여기서 `first<T>`의 제너릭 타입 매개변수는 다양한 위치에서 타입 인자 `T`를 사용할 수 있습니다.

* 함수의 반환 타입 (`T`)
* 인자의 타입 (`List<T>`)
* 로컬 변수의 타입 (`T map`)

<AdsenseB />