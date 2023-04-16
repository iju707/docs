---
title: Dart의 콜렉션
tag:
    - Dart
    - 2.19.6
---
원문 : [https://dart.dev/language/collections](https://dart.dev/language/collections)

## 리스트 {#lists}

이전의 모든 프로그래밍 언어에 대한 가장 표준적 콜렉션은 정렬된 객체 그룹인 배열일 것 입니다.
Dart에서 배열은 [`List`](https://api.dart.dev/stable/dart-core/List-class.html) 객체이며 많은 사람들이 리스트라고 부릅니다.

Dart 리스트 리터럴은 대괄호(`[]`)로 시작종료되는 표현식이나 값의 쉼표로 구분된 목록으로 표현됩니다.
여기 Dart 리스트의 예제가 있습니다.

```dart
var list = [1, 2, 3];
```

:::note
Dart는 `list`를 `List<int>` 타입으로 추정합니다.
이 리스트에 정수가 아닌 객체를 추가하면 분석기 또는 런타임에 오류가 발생하게 됩니다.
자세한 정보는 [타입 추론](https://dart.dev/language/type-system#type-inference)을 참고하세요.
:::

{#trailing-comma}

Dart 콜렉션 리터럴의 마지막 아이템에 콤마를 추가할 수 있습니다.
마지막 콤마는 콜렉션에 영향을 주지는 않지만 복사-붙여넣기 오류를 방지할 수 있습니다.

```dart
var list = [
    'Car',
    'Boat',
    'Plane',
]
```

리스트는 0으로 시작되는 인덱싱을 사용하며 첫번째값의 인덱스가 0이고 `list.length - 1`이 마지막값의 인덱스가 됩니다.
`.length` 속성을 사용해서 리스트의 길이를 가져올 수 있으며, 첨자연산자(`[]`)를 사용하여 리스트의 값을 가져올 수 있습니다.

```dart
var list = [1, 2, 3];
assert(list.length == 3);
assert(list[1] == 2);

list[1] = 1;
assert(list[1] == 1);
```

리스트를 컴파일타임 상수로 만들고자 한다면 리스트 리터럴의 선두에 `const`를 추가하면 됩니다.

```dart
var constantList = const [1, 2, 3];
// constantList[1] = 1; // 이 줄은 오류가 발생할 것 입니다.
```

### 스프레드 연산자 {#spread-operators}

Dart에서는 컬렉션에 여러값을 간결하게 삽입할 수 있는 방법인 **스프레드 연산자 (`...`)**와 **null인식 스프레드 연산자(`...?`)**를 지원합니다.

예로 들어, 리스트의 값들을 다른 리스트에 삽입하기 위해 스프레드 연산자(`...`)를 사용할 수 있습니다.

```dart
var list = [1, 2, 3];
var list2 = [0, ...list];
assert(list2.length == 4);
```

만약 스프레드 연산자 오른쪽에 있는 표현식이 null이 될 수 있으면 null인식 스프레드 연산자(`...?`)를 사용해서 예외를 피할 수 있습니다.

```dart
var list2 = [0, ...?list];
assert(list2.length == 1);
```

스프레드 연산자를 사용에 대한 자세한 정보와 예제는 [스프레드 연산자 제안](https://github.com/dart-lang/language/blob/master/accepted/2.3/spread-collections/feature-specification.md)을 참고하세요.

### 콜렉션 연산자 {#collection-operators} 

또한 Dart는 **콜렉션 if**와 **콜렉션 for**를 제공하며 조건식(`if`)나 반복구(`for`)를 사용하여 콜렉션을 구성할 수 있습니다.

여기 **콜렉션 if**를 사용하여 3개 또는 4개 아이템을 가지는 리스트를 생성하는 예제입니다.

```dart
var nav = ['Home', 'Furniture', 'Plants', if (promoActive) 'Outlet'];
```

다른 리스트에 추가하기 전에 리스트의 아이템을 조작하기 위해 **콜렉션 for**를 사용하는 예제입니다.

```dart
var listOfInts = [1, 2, 3];
var listOfStrings = ['#0', for (var i in listOfInts) '#$i'];
assert(listOfStrings[1] == '#1');
```

콜렉션 `if`나 `for`의 사용에 대한 자세한 정보와 예제는 [콜렉션 제어흐름 제안](https://github.com/dart-lang/language/blob/master/accepted/2.3/control-flow-collections/feature-specification.md)을 참고하세요.

리스트 타입은 리스트를 조작하기 위해 다양한 간편한 함수를 가지고 있습니다.
리스트에 대한 자세한 정보는 [제너릭](generics.md)과 [콜렉션](https://dart.dev/guides/libraries/library-tour#collections)을 참고하세요.

## 세트 {#sets}

Dart의 세트는 유일한 아이템의 정렬되지 않은 콜렉션 입니다.
Dar의 세트 지원은 세트 리터럴과 [`Set`](https://api.dart.dev/stable/dart-core/Set-class.html)타입으로 제공됩니다.

세트 리터럴로 만든 간단한 Dart 세트 예제입니다.

```dart
var halogens = {'fluorine', 'chlorine', 'bormine', 'iodine', 'astatine'};
```

:::note
Dart는 `halogens`를 `Set<String>`으로 추론합니다.
세트에 잘못된 타입의 값을 추가한다면 분석기나 런타임은 오류를 발생시킬 것 입니다.
자세한 정보는 [타입 추론](https://dart.dev/guides/language/type-system#type-inference)을 참고하세요.
:::

비어있는 세트를 만드려면 타입 인자에 `{}`를 사용하거나 `Set` 타입 변수에 `{}`를 할당하면 됩니다.

```dart
var name = <String>{};
// Set<String> names = {}; // 이것도 동작합니다.
// var names = {}; // 이것은 세트가 아닌 맵으로 생성됩니다.
```

:::note 세트? 맵?
맵 리터럴의 문법은 세트 리터럴과 유사합니다.
맵 리터럴이 우선되기 때문에 `{}` 는 기본적으로 `Map` 타입이 됩니다.
`{}` 또는 할당할 변수에 타입 어노테이션을 잊은 경우 Dart는 객체를 `Map<dynamic, dynamic>`으로 생성합니다.
:::

기존 세트에 아이템을 추가하려면 `add()`나 `addAll()` 함수를 사용하면 됩니다.

```dart
var elements = <String>{};
elements.add('fluorine');
elements.addAll(halogens);
```

컴파일타임 상수로 세트를 생성하려면 `const`를 세트 리터럴 앞에 사용하면 됩니다.

```dart
final constantSet = const {
    'fluorine',
    'chlorine',
    'bromine',
    'iodine',
    'astatine',
};
// constantSet.add('helium'); // 이 코든느 오류가 발생합니다.
```

세트는 리스트와 동일하게 스프레드 연산자(`...`와 `...?`)와 콜렉션 `if`와 `for`를 지원합니다.
자세한 정보는 [리스트 스프레드 연산자](#spread-operator)와 [리스트 콜렉션 연산자](#collection-operators) 부분을 참고하세요.

세트의 자세한 정보는 [제너릭](generics.md)과 [세트](https://dart.dev/guides/libraries/library-tour#sets)를 참고하세요.

## 맵 {#maps}

일반적으로 맵은 키와 값을 연결하는 객체입니다.
키와 값 모두 객체의 어느 타입이든 가능합니다.
각 키는 딱 한번만 사용되며, 동일한 값은 여러번 반복되도 됩니다.
Dart의 맵 지원은 맵 리터럴과 [`Map`](https://api.dart.dev/stable/dart-core/Map-class.html)타입으로 제공됩니다.

맵 리터럴을 사용한 간단한 Dart 맵 예제입니다.

```dart
var gifts = {
    // 키: 값
    'first': 'partridge',
    'second': 'turtledoves',
    'fifth': 'golden rings'
};

var nobleGases = {
    2: 'helium',
    10: 'neon',
    18: 'argon',
};
```

:::note
Dart는 `gifts`를 `Map<String, String>` 타입으로 `nobleGases`를 `Map<int, String>` 타입으로 추론합니다.
각 맵에 잘못된 타입의 값을 추가하면 분석기나 런타임은 오류를 발생시킵니다.
자세한 정보는 [타입 추론](https://dart.dev/guides/language/type-system#type-inference)을 참고하세요.
:::

Map 생성자로 동일한 객체를 만들 수 있습니다.

```dart
var gifts = Map<String, String>();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';

var nobleGases = Map<int, String>();
nobleGases[2] = 'helium';
nobleGases[10] = 'neon';
nobleGases[18] = 'argon';
```

:::note
C#이나 자바같은 언어를 사용했다면 `new Map()`이 아닌 `Map()`만 사용한 것을 알수 있습니다.
Dart에서 `new` 키워드는 선택적입니다.
자세한 내용은 [생성자 사용하기](classes.md#using-constructors)를 참고하세요.
:::

기존 맵에 새로운 키-값을 추가하려면 첨자 할당 연산자(`[]=`)를 사용하면 됩니다.

```dart
var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds'; // 키와 값 쌍 추가
```

첨자 연산자(`[]`)를 사용하여 맵에서 값을 검색할 수 있습니다.

```dart
var gifts = {'first': 'partridge'};
assert(gifts['first'] == 'partridge');
```

만약 맵에서 해당 키가 없다면 `null`을 반환합니다.

```dart
var gifts = {'first': 'partridge'};
assert(gifts['fifth'] == null);
```

`.length`를 사용해서 맵의 키-값 쌍의 수를 알 수 있습니다.

```dart
var gifts = {'first', 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);
```

컴파일타임 상수로 맵을 만드려면 맵 리터럴 앞에 `const`를 사용하면 됩니다.

```dart
final constantMap = const {
    2: 'helium',
    10: 'neon',
    18: 'argon',
};

// constantMap[2] = 'Helium'; // 이 코드는 오류가 발생합니다.
```

맵은 리스트와 동일하게 스프레드 연산자(`...`와 `...?`)와 콜렉션 `if`와 `for`를 지원합니다.
자세한 정보는 [리스트 스프레드 연산자](#spread-operator)와 [리스트 콜렉션 연산자](#collection-operators) 부분을 참고하세요.

맵에 관련된 자세한 정보는 [제너릭](generics.md)과 라이브러리 둘러보기의 [맵 API](https://dart.dev/guides/libraries/library-tour#maps)를 참고하세요.

## 룬과 자소 클러스터 {#runes-and-grapheme-clusters}

Dart에서 [룬](https://api.dart.dev/stable/dart-core/Runes-class.html)은 문자열의 유니코드 코드포인트을 보여줍니다.
[문자 패키지](https://pub.dev/packages/characters)를 사용하여 [유니코드(확장) 자소 클러스터](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)라고 하는 사용자 인식 문자를 보거나 조작할 수 있습니다.

유니코드는 세계 문자 시스템 전부에 사용되는 글자, 숫자, 심볼을 유일한 숫자값으로 정의합니다.
Dart 문자열은 UTF-16 코드 단위 시퀀스이기 때문에 스트링에 유니코드 코드포인트를 표현하려면 특별한 문법이 필요합니다.
유니코드 코드포인트를 표현하는 일반적인 방법은 `\uXXXX`이며 XXXX는 4자리 16진수 입니다.
예로 들어, 하트 문자(♥)는 `\u2665`입니다.
4자리가 아닐 경우에는 중괄효로 값을 표시합니다.
예로 들어, 웃는 이모지(😆)는 `\u{1f606}`입니다.

개별 유니코드 문자를 읽거나 쓰고 싶을 경우, 문자 패키지의 문자열에 정의된 `characters` getter를 사용합니다.
반환된 [`Characters`](https://pub.dev/documentation/characters/latest/characters/Characters-class.html) 객체는 자소 클러스터 시퀀스의 문자열입니다.
문자 API를 사용한 예제입니다.

```dart
import 'package:characters/characters.dart';
...
var hi = 'Hi 🇩🇰';
print(hi);
print('The end of the string: ${hi.substring(hi.length - 1)}');
print('The last character: ${hi.characters.last}\n');
```

환경에 따라 다르지만 출력은 다음과 같을 것 입니다.

```bash
$dart run bin/main.dart
Hi 🇩🇰
The end of the string: ???
The last character: 🇩🇰
```

문자열을 조작하기 위해 문자 패키지를 사용하는 자세한 내용은 문자 패키지의 [예제](https://pub.dev/packages/characters/example)와 [API 참조](https://pub.dev/documentation/characters)를 참고하세요.

## 심볼 {#symbols}

[심볼](https://api.dart.dev/stable/dart-core/Symbol-class.html) 객체는 Dart 프로그램에서 선언된 연산자 또는 식별자를 나타냅니다.
심볼을 사용할 필요가 없을 수 있지만 축소는 식별자 이름을 변경하지만 식별자 심볼은 변경하지 않기 때문에 이름으로 식별자를 참조하는 API에는 매우 중요합니다.

식별자의 심볼을 가져오려면 심볼 리터럴을 사용하면 되며 식별자 앞에 `#`을 사용하면 됩니다.

```dart
#radix
#bar
```

심볼 리터럴은 컴파일타임 상수입니다.

<AdsenseB />