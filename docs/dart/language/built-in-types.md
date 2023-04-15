---
title: Dart의 내장된 타입
tag:
    - Dart
    - 2.19.6
---
원문 : [https://dart.dev/language/built-in-types](https://dart.dev/language/built-in-types)

Dart 언어는 아래 목록을 특별히 지원합니다.

* [숫자](built-in-types.md#numbers)(`int`, `double`)
* [문자열](built-in-types.md#strings)(`String`)
* [부울](built-in-types.md#booleans)(`bool`)
* [리스트](https://dart.dev/language/collections#lists)(`List`, 배열이라고도 함)
* [세트](https://dart.dev/language/collections#sets)(`Set`)
* [맵](https://dart.dev/language/collections#maps)(`Map`)
* [룬](built-in-types.md#runes-and-grapheme-clusters)(`Runes`, 종종 `characters` API로 대체됨)
* [심볼](built-in-types.md#symbols)(`Symbol`)
* `null` 값 (`Null`)

이 지원에는 리터럴을 사용하여 객체를 만드는 기능이 포함됩니다.
예로 들어, `'this is a string'`은 문자열 리터럴 이고 `true`는 부울 리터럴입니다.

Dart의 모든 변수가 객체(클래스의 인스턴스)를 참조하기 때문에 변수를 초기화할 때 보통 생성자를 사용합니다.
내장된 타입의 일부는 자체적 생성자를 가지고 있습니다.
예로 들어, 맵을 만들때는 `Map()` 생성자를 사용합니다.

또한 일부 다른 타입은 Dart 언어에서 특별한 역할을 담당하고 있습니다.

* `Object` : `Null`을 제외한 Dart의 모든 클래스의 상위클래스
* `Enum` : 모든 enum의 상위클래스
* `Future`와 `Stream` : [비동기 지원](https://dart.dev/language/async)에서 사용
* `Iterable` : [for-in 루프](https://dart.dev/guides/libraries/library-tour#iteration)나 동기적 [제너레이터 함수](functions.md#generators)에서 사용
* `Never` : 표현식이 성공적인 평가를 완료할 수 없음을 나타냅니다. 항상 예외를 발생시키는 함수에서 자주 사용됩니다.
* `dynamic` : 정적 확인을 비활성화하는 것을 가리킵니다. 보통 `Object`나 `Object?` 대신 사용합니다.
* `void` : 값이 전혀 사용되지 않음을 가리킵니다. 종종 반환 타입으로 사용됩니다.

`Object`, `Object?`, `Null` 및 `Never` 클래스는 클래스 계층에서 특별한 역할을 가지고 있으며 [null 안전 이해하기](https://dart.dev/null-safety/understanding-null-safety#top-and-bottom)를 참고하세요.

## 숫자 {#numbers}

Dart의 숫자는 두가지 방식으로 제공됩니다.

### [int](https://api.dart.dev/stable/dart-core/int-class.html)

정수값는 [플랫폼에 따라](https://dart.dev/guides/language/numbers) 64비트보다 크지 않습니다.
네이티브 플랫폼에서는 값은 -2<sup>63</sup> 부터 2<sup>63</sup> - 1까지 됩니다.
웹에서는 정수값은 JavaScript의 숫자(소수부분이 없는 64비트 부동소수점값)로 표현되며 -2<sup>53</sup>부터 2<sup>53</sup> - 1까지 됩니다.

### [double](https://api.dart.dev/stable/dart-core/double-class.html)

IEEE 754 표준에서 정의한 64-비트(2배 정밀도) 부동소수점 숫자입니다.

`int`와 `double`은 [`num`](https://api.dart.dev/stable/dart-core/num-class.html)의 하위타입입니다.
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

문자열에서 유니코드 문자를 어떻게 표현하는지에 대한 상세한 내용은 [룬과 자소 클러스터](built-in-types.md#runes-and-grapheme-clusters)를 참고하세요.

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