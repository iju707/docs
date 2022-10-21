---
title: Dart의 내장된 타입
tag:
    - Dart
    - 2.18.2
---
원문 : [https://dart.dev/guides/language/language-tour#built-in-types](https://dart.dev/guides/language/language-tour#built-in-types)

Dart 언어는 아래 목록을 특별히 지원합니다.

* [숫자](#numbers)(`int`, `double`)
* [문자열](#strings)(`String`)
* [부울](#booleans)(`bool`)
* [리스트](#lists)(`List`, 배열이라고도 함)
* [세트](#sets)(`Set`)
* [맵](#maps)(`Map`)
* [룬](#runes-and-grapheme-clusters)(`Runes`, 종종 `characters` API로 대체됨)
* [심볼](#symbols)(`Symbol`)
* `null` 값 (`Null`)

이 지원에는 리터럴을 사용하여 객체를 만드는 기능이 포함됩니다.
예로 들어, `'this is a string'`은 문자열 리터럴 이고 `true`는 부울 리터럴입니다.

Dart의 모든 변수가 객체(클래스의 인스턴스)를 참조하기 때문에 변수를 초기화할 때 보통 생성자를 사용합니다.
내장된 타입의 일부는 자체적 생성자를 가지고 있습니다.
예로 들어, 맵을 만들때는 `Map()` 생성자를 사용합니다.

또한 일부 다른 타입은 Dart 언어에서 특별한 역할을 담당하고 있습니다.

* `Object` : `Null`을 제외한 Dart의 모든 클래스의 상위클래스
* `Enum` : 모든 enum의 상위클래스
* `Future`와 `Stream` : [비동기 지원](asynchrony-support.md)에서 사용
* `Iterable` : [for-in 루프](https://dart.dev/guides/libraries/library-tour#iteration)나 동기적 [제너레이터 함수](generators.md)에서 사용
* `Never` : 표현식이 성공적인 평가를 완료할 수 없음을 나타냅니다. 항상 예외를 발생시키는 함수에서 자주 사용됩니다.
* `dynamic` : 정적 확인을 비활성화하는 것을 가리킵니다. 보통 `Object`나 `Object?` 대신 사용합니다.
* `void` : 값이 전혀 사용되지 않음을 가리킵니다. 종종 반환 타입으로 사용됩니다.

`Object`, `Object?`, `Null` 및 `Never` 클래스는 클래스 계층에서 특별한 역할을 가지고 있으며 [null 안전 이해하기](https://dart.dev/null-safety/understanding-null-safety)의 [상단과 하단](https://dart.dev/null-safety/understanding-null-safety#top-and-bottom) 절에서 설명하고 있습니다.

## 숫자 {#numbers}

Dart의 숫자는 두가지 방식으로 제공됩니다.

### [int](https://api.dart.dev/stable/dart-core/int-class.html)

정수값는 [플랫폼에 따라](https://dart.dev/guides/language/numbers) 64비트보다 크지 않습니다.
네이티브 플랫폼에서는 값은 -2<sup>63</sup> 부터 2<sup>63</sup> - 1까지 됩니다.
웹에서는 정수값은 JavaScript의 숫자(소수부분이 없는 64비트 부동소수점값)로 표현되며 -2<sup>53</sup>부터 2<sup>53</sup> - 1까지 됩니다.

### [double](https://api.dart.dev/stable/dart-core/double-class.html)

IEEE 754 표준에서 정의한 64-비트(2배 정밀도) 부동소수점 숫자입니다.

`int`와 `double`은 [`num`](https://api.dart.dev/stable/2.18.2/dart-core/num-class.html)의 하위타입입니다.
num 타입은 +, -, /, * 와 같은 기본 연산자를 포함하며 또한 다른 함수에서 `abs()`, `ceil()`, `floor()`와 같은 것도 찾을 수 있습니다.
(>>와 같은 비트 연산자는 `int` 클래스에 정의되어있습니다)
만약 num이나 그 하위 타입에 원하는게 없을 경우에는 [dart:math](https://api.dart.dev/stable/dart-math) 라이브러리에 있을 수 있습니다.

정수는 소수점이 없는 숫자입니다.
여기 정수 리터럴을 정의하는 예제입니다.

```dart
var x = 1;
var hex = 0xDEADBEEF;
```

만약 소수점을 포함하는 그것은 더블입니다.
여기 더블 리터럴을 정의하는 예제입니다.

```dart
var y = 1.1;
var exponents = 1.42e5;
```

또한 변수를 num으로 선언할 수 있습니다.
이렇게 하면 변수는 정수와 더블 값 모두를 가질 수 있습니다.

```dart
num x = 1; // x는 int와 double 값 모두를 가질 수 있습니다.
x += 2.5;
```

정수 리터럴은 필요시 자동으로 더블로 변환됩니다.

```dart
double z = 1; // 이것은 double z = 1.0 과 동일
```

여기 숫자를 문자열로 또는 그 반대로 하는 방법입니다.

```dart
// String -> int
var one = int.parse('1');
assert(one == 1);

// String -> double
var onePointOne = double.parse('1.1')
assert(onePointOne == 1.1);

// int -> String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -> String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');
```

`int` 타입은 비트 필드에서 플래그를 조작하고 마킹하는데 유용한 전통적인 비트쉬프트(`<<`, `>>`, `>>>`), 보어(`~`), AND(`&`), OR(`|`), XOR(`^`) 연산자를 제공합니다.
예로 들면 다음과 같습니다.

```dart
assert((3 << 1) == 6); // 0011 << 1 = 0110
assert((3 | 4) == 7); // 0011 | 0100 == 0111
assert((3 & 4) == 0); // 0011 & 0100 = 0000
```

더 많은 예제는 [비트와 쉬프트 연산자](operators.md#bitwise-and-shift-operators) 절을 참고하세요.

숫자 리터럴은 컴파일타임 상수입니다.
피연산자가 숫자로 계산되는 컴파일타임 상수이면 많은 산술표현 또한 컴파일타임 상수입니다.

```dart
const msPerSecond = 1000;
const secondsUntilRetry = 5;
const msUntilRetry = secondsUntilRetry * msPerSecond;
```

더 자세한 정보는 [Dart의 숫자](https://dart.dev/guides/language/numbers)를 참고하세요.

## 문자열 {#strings}

Dart 문자열(`String` 객체)는 UTF-16 코드 단위의 시퀀스를 가지고 있습니다.
문자열을 만들때 따옴표나 쌍따옴표를 사용할 수 있습니다.

```dart
var s1 = '스트링 리터럴에 대해 따옴표가 잘 동작합니다.';
var s2 = "쌍따옴표도 잘 동작합니다.";
var s3 = 'It\'s easy to escape the string delimiter.';
var s3 = "It's even easier to use the other delimiter.";
```

`${expression}` 을 사용해서 문자열안에 표현식값을 넣을 수 있습니다.
표현식이 식별자일 경우에는 `{}`를 생략할수 있습니다.
객체에 해당하는 문자열을 가져오려면 Dart에서는 객체의 `toString()` 함수를 호출하면 됩니다.

```dart
var s = 'string interpolation';

assert('Dart has $s, which is very handy.' ==
    'Dart has string interpolation, '
        'which is very handy.');
assert('That deserves all caps. '
        '${s.toUpperCase()} is very handy!' ==
    'That deserves all caps. '
        'STRING INTERPOLATION is very handy!');
```

:::note
`==` 연산자는 두 객체가 같은지 테스트를 합니다.
두 문자열이 만약 같은 코드단위 시퀀스를 가지고 있다면 동일하다고 판단합니다.
:::

인접한 문자열 또는 `+` 연산자로 병합할 수 있습니다.

```dart
var s1 = 'String '
    'concatenation'
    " works even over line breaks.";
assert(s1 == 
    'String concatenation works even over '
        'line breaks.');

var s2 = 'The + operator ' + 'works, as well.';
assert(s2 == 'The + operator works, as well.');
```

여러줄의 문자열을 만드는 다른 방법은 따옴표나 쌍따옴표를 세번사용하는 것 입니다.

```dart
var s1 = '''
You can create
multi-line strings like this one.
''';

var s2 = """This is also a
multi-line string.""";
```

`r` 접두어를 사용해서 "원시" 문자열을 생성할 수 있습니다.

```dart
var s = r'원시 문자열에서는 \n 도 특수한 처리가 되지 않습니다.';
```

문자열에서 유니코드 문자를 어떻게 표현하는지에 대한 상세한 내용은 [룬과 자소 클러스터](#runes-and-grapheme-clusters)를 참고하세요.

보간 표현식이 null이나 숫자, 문자열, 또는 부울로 계산되는 컴파일타임상수이면 문자 리터럴은 컴파일타임 상수가 됩니다.

```dart
// 이것은 정적 문자열으로 동작합니다.
const aConstNum = 0;
const aConstBool = true;
const aConstString = 'a constant string';

// 이것은 정적 문자열로 동작하지 않습니다.
var aNum = 0;
var aBool = true;
var aString = 'a String';
const aConstList = [1, 2, 3];

const validConstString = '$aConstNum $aConstBool $aConstString';
// const invalidConstString = '$aNum $aBool $aString $aConstList';
```

문자열을 사용하는데 더 자세한 정보는 [문자열과 정규표현식](https://dart.dev/guides/libraries/library-tour#strings-and-regular-expressions)을 참고하세요.

## 부울 {#booleans}

부울 값을 표현하기 위해 Dart는 `bool`이라는 타입을 사용합니다.
컴파일타임 상수인 두가지 `true`와 `false` 부울 리터럴만 이 타입을 가질 수 있습니다.

Dart 타입 보장에서 `if (nonbooleanValue)`나 `assert (nonBooleanValue)`를 사용할 수 없다는걸 의미합니다.
대신, 다음과 같이 명시적으로 값을 확인합니다.

```dart
// 공백 문자열을 확인합니다.
var fullName = '';
assert(fullName.isEmpty);

// 0인지 확인
var hitPoints = 0;
assert(hitPoints <= 0);

// null인지 확인
var unicorn;
assert(unicorn == null);

// NaN인지 확인
var iMeantToDoThis = 0 / 0;
assert(iMeantToDoThis.isNaN);
```

## 리스트 {#lists}

이전의 모든 프로그래밍 언어에 대한 가장 표준적 콜렉션은 정렬된 객체 그룹인 배열일 것 입니다.
Dart에서 배열은 [`List`](https://api.dart.dev/stable/2.18.2/dart-core/List-class.html) 객체이며 많은 사람들이 리스트라고 부릅니다.

Dart 리스트 리터럴은 대괄호(`[]`)로 시작종료되는 표현식이나 값의 쉼표로 구분된 목록으로 표현됩니다.
여기 Dart 리스트의 예제가 있습니다.

```dart
var list = [1, 2, 3];
```

:::note
Dart는 `list`를 `List<int>` 타입으로 추정합니다.
이 리스트에 정수가 아닌 객체를 추가하면 분석기 또는 런타임에 오류가 발생하게 됩니다.
자세한 정보는 [타입 추론](https://dart.dev/guides/language/type-system#type-inference)을 참고하세요.
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

{#spread-operator}

Dart 2.3에서는 컬렉션에 여러값을 간결하게 삽입할 수 있는 방법인 **스프레드 연산자 (`...`)**와 **null인식 스프레드 연산자(`...?`)**를 소개하였습니다.

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

{#collection-operators} 

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
Dar의 세트 지원은 세트 리터럴과 [`Set`](https://api.dart.dev/stable/2.18.2/dart-core/Set-class.html)타입으로 제공됩니다.

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