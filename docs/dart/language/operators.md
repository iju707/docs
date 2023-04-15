---
title: Dart의 연산자
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/operators](https://dart.dev/language/operators)

{#operators}

Dart는 아래 테이블에 나열된 연산자를 지원합니다.
이 표는 Dart 연산자 연관성과 Dart 연산자 관계의 근사치인 내림차순 연산자 우선순위를 보여줍니다.
이중 많은 것을 [클래스 멤버의 연산자](https://dart.dev/language/methods#operators)로 구현할 수 있습니다.

| 설명 | 연산자 | 결합성 |
| :- | :- | :- |
| 단항 접미사 | `expr++` `expr--` `()` `[]` `?[]` `.` `?.` `!` | 없음 |
| 단항 접두사 | `-expr` `!expr` `~expr` `++expr` `--expr` `await expr` | 없음 |
| 곱셈 | `*` `/` `%` `~/` | 왼쪽 |
| 덧셈 | `+` `-` | 왼쪽 |
| 쉬프트 | `<<` `>>` `>>>` | 왼쪽 |
| 비트 AND | `&` | 왼쪽 |
| 비트 XOR | `^` | 왼쪽 |
| 비트 OR | `|` | 왼쪽 |
| 관계 및 타입 검사 | `>=` `>` `<=` `<` `as` `is` `is!` | 없음 |
| 동등 | `==` `!=` | 없음 |
| 논리 AND | `&&` | 왼쪽 |
| 논리 OR | `||` | 왼쪽 |
| null일 경우 | `??` | 왼쪽 |
| 조건식 | `expr1 ? expr2 : epxr3` | 오른쪽 |
| 캐스케이드 | `..` `?..` | 왼쪽 |
| 할당 | `=` `*=` `/=` `-=` `&=` `^=` 등 | 오른쪽 |

:::warning
직전 테이블은 참고용으로만 사용해야합니다.
연산자 우선순위와 결합성의 개념은 언어 문법에서 발견되는 진실의 근사치입니다.
연산자 우선순위는 Dart 파서의 동작에 대한 근사치 입니다.
문법에 정의된 Dart 연산자 관계에 대한 표준적인 동작인 [Dart 언어 사양](https://dart.dev/guides/language/spec)에서 찾을 수 있습니다.
:::

연산자를 사용할 때 표현식을 생성하면 됩니다.
연산자 표현식 예제입니다.

```dart
a++
a + b
a = b
a == b
c ? a : b
a is T
```

## 연산자 우선순위 예제 {#operator-precedence-example}

[연산자 테이블](#operators)에서 각 연산자는 아래의 행에 있는 연산자보다 우선순위를 가집니다.
예로 들어, 곱셈 연산자 `%`는 동등연산자 `==`보다 높은 우선순위(따라서 먼저 실행)를 가지며 동등연산자는 논리 AND 연산자`&&`보다 높은 우선순위를 가집니다.
이 우선순위에 따라 아래 두줄의 코드에서 동일하게 실행됩니다.

```dart
// 괄호가 가독성을 높입니다.
if ((n % i == 0) && (d % i == 0)) ...

// 읽기는 어렵지만 동일합니다.
if (n % i == 0 && d % i == 0) ...
```

:::warning
연산자가 두개의 피연산자를 가지는 경우 왼쪽의 연산자가 어떤 함수를 사용하는지 결정합니다.
예로 들어, `Vector` 객체와 `Point` 객체를 가지는 경우 `aVector + aPoint`는 `Vector`의 덧셈(`+`)을 사용합니다.
:::

## 산술 연산자 {#arithmetic-operators}

Dart는 아래 표와 같이 산술 연산자를 지원합니다.

| 연산자 | 의미 |
| :- | :- |
| `+` | 더하기 |
| `-` | 빼기 |
| `-expr` | 단항 마이너스, 부정 이라고도 함(표현식의 부호를 반전) |
| `*` | 곱하기 |
| `/` | 나누기 |
| `~/` | 나누기, 정수 결과를 반환 |
| `%` | 정수 나누기에 대한 나머지 (모듈로) |

예제

```dart
assert(2 + 3 == 5);
assert(2 - 3 == -1);
assert(2 * 3 == 6);
assert(5 / 2 == 2.5); // 결과는 더블
assert(5 ~/ 2 == 2); // 결과는 정수
assert(5 % 2 == 1); // 나머지

assert('5/2 = ${5 ~/ 2} r $ {5 % 2}` == `5/2 = 2 r 1');
```

Dart는 접두/접미 증감/감소 연산자 또한 지원합니다.

| 연산자 | 의미 |
| :- | :- |
| `++var` | `var = var + 1` (표현식 값은 `var + 1`) |
| `var++` | `var = var + 1` (표현식 값은 `var`) |
| `--var` | `var = var - 1` (표현식 값은 `var - 1`) |
| `var--` | `var = var - 1` (표현식 값은 `var`) |

예제

```dart
int a;
int b;

a = 0;
b = ++a; // 증가시키고 값을 가져옵니다.
assert(a == b); // 1 == 1

a = 0;
b = a++; // 값을 가져오고 증가시킵니다.
assert(a != b); // 1 != 0

a = 0;
b = --a; // 감소시키고 값을 가져옵니다.
assert(a == b); // -1 == -1

a = 0;
b = a--;
assert(a != b); // -1 != 0;
```

## 동등 및 관계 연산자 {#equality-and-relational-operators}

아래 표는 동등/관계 연산자의 의미 목록입니다.

| 연산자 | 의미 |
| :- | :- |
| `==` | 같음. 아래 내용을 살펴보세요 |
| `!=` | 같지 않음 |
| `>` | 보다 큼 |
| `<` | 보다 작음 |
| `>=` | 보다 크거나 같음 |
| `<=` | 보다 작거나 같음 |

두개의 객체 x, y 가 동일한 것인지 확인하려면 `==` 연산자를 사용하면 됩니다.
(두 객체가 정확하게 같은 객체인지 판별하려는 특수한 경우에는 [`identical()`](https://api.dart.dev/stable/dart-core/identical.html) 함수를 대신 사용합니다.)
아래는 `==` 연산자가 동작하는 방식입니다.

1. x나 y가 null이면 둘다 null일 경우 ture, 하나만 null일 경우이는 false를 반환합니다.
2. y를 인자로 x의 `==` 함수를 수행하여 결과를 반환합니다. (맞다. `==`와 같은 연산자는 첫번째 피연산자에서 실행되는 함수입니다. 자세한 정보는 [연산자](https://dart.dev/language/methods#operators)를 참고하세요)

여기 동등과 관계 연산자를 사용한 예제입니다.

```dart
assert(2 == 2);
assert(2 != 3);
assert(3 > 2);
assert(2 < 3);
assert(3 >= 3);
assert(2 <= 3);
```

## 타입 검사 연산자 {#type-test-operators}

`as`, `is`, `is!` 연산자는 런타임중 타입을 확인하는 방법입니다.

| 연산자 | 의미 |
| :- | :- |
| `as` | 타입변환 ([라이브러리 접두어](libraries.md#specifying-a-library-prefix) 지정으로도 사용) |
| `is` | 객체가 특정 타입일 경우 True |
| `is!` | 객체가 특정 타입을 포함하지 않은 경우 True |

`obj is T`의 결과는 `obj`가 `T`로 지정된 인터페이스를 구현했다면 true 입니다.
예로 들어, `obj is Object?`는 항상 true입니다.

`as` 연산자는 객체가 특정타입인 것이 확실할 때 객체를 특정 타입으로 변환할 때 사용합니다.
예제는 다음과 같습니다.

```dart
(employee as Person).firstName = 'Bob';
```

만약 객체가 `T` 타입임이 확실하지 않으면 객체를 사용하기 전 `is T`를 사용해서 타입을 확인합니다.

```dart
if (employee is Person) {
    // 타입 확인
    employee.firstName = 'Bob';
}
```

:::note
코드가 동일한 것은 아닙니다.
`employee`가 null이거나 `Person`이 아닌 경우 첫번째 예제는 예외가 발생됩니다.
두번째는 아무것도 발생되지 않습니다.
:::

## 할당 연산자 {#assignment-operators}

이미 봤듯, `=` 연산자를 활용해서 값을 할당할 수 있습니다.
할당되는 변수가 null 인 경우에만 할당하려면 `??=` 연산자를 활용합니다.

```dart
// a에 값을 할당
a = value;

// b가 null일 경우 값을 할당, 아니면 b는 유지
b ??= value;
```

`+=`와 같은 복합 할당 연산자는 연산자와 할당을 조합합니다.

| `=` | `*=` | `%=` | `>>>=` | `^=` |
| - | - | - | - | - |
| **`+=`** | **`/=`** | **`<<=`** | **`&=`** | **`|=`** |
| **`-=`** | **`~/=`** | **`>>=`** | | |

복합 할당 연산자가 동작하는 원리입니다.

| | 복합 할당 | 동일 표현식 |
| - | - | - |
| **op 연산자** | `a op= b` | `a = a op b` |
| **예제** | `a += b` | `a = a + b` |

아래 예제는 할당과 복합 할당 연산자를 사용한 것 입니다.

```dart
var a = 2; // =를 사용한 할당
a *= 3; // 할당 및 곱셈 : a = a * 3
assert(a == 6);
```

## 논리 연산자 {#logical-operators}

논리 연산자를 사용해서 부울식을 반전 또는 조합할 수 있습니다.

| 연산자 | 의미 |
| - | - |
| `!expr` | 다음 표현식을 반전 (false를 true, 또는 그 반대) |
| `||` | 논리 OR |
| `&&` | 논리 AND |

논리 연산자를 사용한 예제입니다.

```dart
if (!done && (col == 0 || col == 3)) {
    // ...뭔가 하기...
}
```

## 비트 및 쉬프트 연산자 {#bitwise-and-shift-operators}

Dart에서 숫자의 개별 비트를 조작할 수 있습니다.
보통 정수와 함께 대한 비트나 쉬프트 연산자를 사용합니다.

| 연산자 | 의미 |
| - | - |
| `&` | AND |
| `|` | OR |
| `^` | XOR |
| `~expr` | 단항 비트 보수 (0은 1, 1은 0) |
| `<<` | 왼쪽 쉬프트 |
| `>>` | 오른쪽 쉬프트 |
| `>>>` | 부호없는 오른쪽 쉬프트 |

비트와 쉬프트 연산자를 사용한 예제입니다.

```dart
final value = 0x22;
final bitmask = 0x0f;

assert((value & bitmask) == 0x02); // AND
assert((value & ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR
assert((value << 4) == 0x220); // 왼쪽 쉬프트
assert((value >> 4) == 0x02); // 오른쪽 쉬프트
assert((value >>> 4) == 0x02); // 부호없는 오른쪽 쉬프트
assert((-value >> 4) == -0x03); // 오른쪽 쉬프트
assert((-value >>> 4) > 0); // 부호없는 오른쪽 쉬프트
```

:::note 버전노트
`>>>` 연산자(트리플 쉬프트 또는 부호없는 쉬프트)는 2.14 이상의 [언어 버전](https://dart.dev/guides/language/evolution#language-versioning)을 요구합니다.
:::

## 조건 표현식 {#conditional-expressions}

Dart는 [if-else](control-flow.md#if-and-else) 명령문이 필요한 표현식을 간결하게 할 수 있는 두개의 연산자를 가지고 있습니다.

`조건 ? 표현식1 : 표현식2`

만약 조건이 true라면, 표현식1을 평가하고 (그 결과값을 반환), 반대면 표현식2의 값을 평가하고 반환합니다.

`표현식1 ?? 표현식2`

표현식1이 null이 아니면 값을 반환하고 반대면 표현식2의 값을 평가하고 반환합니다.

부울 표현식을 기반으로 값을 할당해야할 때 `?`와 `:`을 사용하는 것을 고려하세요.

```dart
var visibility = isPublic ? 'public' : 'private';
```

부울 표현식이 null을 확인하면 `??`의 사용을 고려하세요.

```dart
String playerName(String? name) => name ?? 'Guest';
```

위 예제는 최소 두가지 다른 방법으로 작성은 가능하나 간결하지는 않습니다.

```dart
// ?: 연산자를 사용한 조금 긴 버전
String playerName(String? name) => name != null ? name : 'Guest';

// if-else 명령문을 사용한 매우 긴 버전
String playerName(String? name) {
    if(name != null) {
        return name;
    } else {
        return 'Guest';
    }
}
```

## 캐스케이드 표현법 {#cascade-notation}

캐스케이드(`..`, `?..`)는 동일한 객체에 대하여 연속적인 명령을 가능하게 합니다.
인스턴스 멤버에 접속하거나 동일한 객체에 인스턴스 함수를 호출할 수 있습니다.
임시 변수를 만드는 단계를 생략하게 하고 좀 더 유동적인 코드를 작성할 수 있게 합니다.

아래의 코드를 살펴봅시다.

```dart
var paint = Paint()
    ..color = Colors.black
    ..strokeCap = StrokeCap.round
    ..strokeWidth = 5.0;
```

`Paint()`의 생성자는 `Paint` 객체를 반환합니다.
이 객체에 캐스케이드 표기법을 따르는 코드는 반환되는 값들을 무시합니다.

이전 예제는 다음 코드와 동일합니다.

```dart
var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;
```

만약 캐스케이드 연산자를 사용할 객체가 null일 수도 있는 경우 null-단축 캐스케이드(`?..`)를 첫번째 연산자로 사용합니다.
`?..`로 시작하면 null 객체에 대한 캐스케이드 연산자가 할당되지 않음을 보장합니다.

```dart
querySelector('#confirm') // 객체 가져오기
    ?..text = 'Confirm' // 멤버 사용하기
    ..classes.add('important')
    ..onClick.listen((e) => window.alert('Confirmed!'))
    ..scrollIntoView();
```

:::note 버전노트
`?..` 문법은 [Dart 언어버전](https://dart.dev/guides/language/evolution#language-versioning) 2.12 이상을 요구합니다.
:::

이전 코드는 아래와 동일합니다.

```dart
var button = querySelector('#confirm');
button?.text = 'Confirm';
button?.classes.add('important');
button?.onClick.listen((e) => window.alert('Confirmed!'));
button?.scrollIntoView();
```

또한 중첩된 캐스케이드도 가능합니다.
예제는 다음과 같습니다.

```dart
final addressBook = (AddressBookBuilder()
    ..name = 'jenny'
    ..email = 'jenny@example.com'
    ..phone = (PhoneNumberBuilder()
        ..number = '415-555-0100'
        ..label = 'home')
        .build())
    .build();
```

주의할 점은 함수에 캐스케이드를 구성할 때 실제 객체를 반환해야합니다.
예로 들어, 아래의 코드는 실패합니다.

```dart
var sb = StringBuffer();
sb.write('foo')
    ..write('bar'); // 에러 : 'write' 함수는 'void'로 정의될 수 없습니다.
```

`sb.write()`를 호출하면 void가 반환되기 때문에 `void`로 캐스케이드를 구성할 수 없습니다.

:::note
엄밀히 말하면, 캐스케이드에 대한 "이중점" 표기법은 연산자가 아닙니다.
Dart 구문의 일부일 뿐입니다.
:::

## 기타 연산자 {#other-operators}

다른 예에서 나머지 연산자의 대부분을 살펴보았습니다.

| 연산자 | 이름 | 의미 |
| :- | :- | :- |
| `()` | 함수 어플리케이션 | 함수 호출을 표현 |
| `[]` | 첨자 접근 | 오버라이드 가능한 `[]` 연산자의 호출을 표현. 예로 `fooList[1]`은 int `1`을 전달해 `fooList`의 인덱스 `1`인 요소에 접근합니다. |
| `?[]` | 조건부 첨자 접근 | `[]`와 비슷하지만 왼쪽 피연산자가 null일 수 있습니다. 예로, `fooList?[1]`은 int `1`을 전달해 `fooList`의 인덱스 `1`인 요소에 접근하지만 `fooList`가 null일 수 있습니다. (그럴 경우 null로 계산됨) |
| `.` | 멤버 접근 | 표현식의 속성을 참조. 예로, `foo.bar`는 표현식 `foo`에서 `bar` 속성을 선택합니다. |
| `?.` | 조건부 멤버 접근 | `.`와 비슷하지만 왼쪽 피연산자가 null일 수 있습니다. 예로, `foo?.bar`는 표현식 `foo`에서 `bar` 속성을 선택하지만 `foo`가 null일 수 있습니다. (그럴 경우 `foo?.bar`는 null) |
| `!` | Null 표명 연산자 | 표현식을 non-nullable 형식으로 캐스팅합니다. 캐스트에 실패하면 런타임 예외가 발생합니다. 예로, `foo!.bar`는 `foo`가 null이 아니면 `bar` 속성을 선택하고, `foo`가 null이면 런타임 예외를 발생시킨다고 표명합니다. |

`.`, `?.`, `..` 연산자에 대한 자세한 정보는 [클래스](https://dart.dev/language/classes)를 참고하세요.

<AdsenseB />