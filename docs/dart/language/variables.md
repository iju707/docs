---
title: Dart의 변수
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/variables](https://dart.dev/language/variables)

변수를 만들고 초기화하는 예제가 있습니다.

```dart
var name = 'Bob';
```

변수는 참조를 저장합니다.
`name`이라는 변수는 "Bob"의 값을 가지는 `String` 객체의 참조를 포함하고 있습니다.

`name` 변수의 타입은 `String`으로 유추되지만 타입을 지정해서 변경할 수 있습니다.
객체가 한가지 타입으로 제한되지 않는 경우에는 `Object` 타입으로 지정하면 됩니다. (또는 필요할 경우 `dynamic`)

```dart
Object name = 'Bob';
```

다른 방법으로는 유추할 수 있는 타입을 명시적으로 지정하는 것 입니다.

```dart
String name = 'Bob';
```

:::note
이 문서에서는 로컬 변수에 대하여 타입명시보단 `var`를 사용하는 [스타일 가이드 권장사항](https://dart.dev/guides/language/effective-dart/design#types)을 따릅니다.
:::

## 기본값 {#default-value}

null이 가능한 타입의 초기화안된 변수는 `null`로 초기화됩니다.
숫자 타입의 변수라도 null로 초기화 됩니다.
Dart의 다른것과 마찬가지로 숫자 또한 객체이기 때문입니다.

```dart
int? lineCount;
assert(lineCount == null);
```

:::note
운영 코드는 `assert()` 호출을 무시합니다.
하지만 개발중에는 `assert(condition)`에서 조건이 false일 경우 예외가 발생하게 됩니다.
자세한 정보는 [Assert](control-flow.md#assert)를 참고하세요.
:::

null 안전을 활성화 하면 변수를 사용하기 전에 null이 아닌 값으로 무조건 초기화 해야합니다.

```dart
int lineCount = 0;
```

로컬변수를 선언한 곳에 초기화할 필요는 없지만 사용하기전 값을 할당해야 합니다.
예로 들어, 아래 코드는 Dart가 `print()`로 전달 할 시점에 `lineCount`가 null이 아님을 감지할 수 있기 떄문에 문제가 없습니다.

```dart
int lineCount;

if (weLikeToCount) {
    lineCount = countLines();
} else {
    lineCount = 0;
}

print(lineCount);
```

최상위 및 클래스 변수는 지연되어 초기화합니다.
초기화 코드는 변수가 처음 사용될 때 실행됩니다.

## 지연된 변수 {#late-variables}

`late` 수정자는 두가지 경우에 사용됩니다.

* null이 불가능한 변수를 선언하는데 선언 이후 초기화할 때
* 변수의 지연된 초기화할 때

종종 Dart의 제어흐름 분석은 null이 불가능한 변수를 사용하기전 null이 아닌 값으로 설정된 것을 감지할 수 있지만 때로는 분석이 실패합니다.
두가지 일반적인 경우는 최상위 변수와 인스턴스 변수입니다.
Dart는 종종 설정의 여부를 확인할 수 없으므로 시도하지 않습니다.

사용하기전 변수가 설정됨을 확신할 수 있지만 Dart에서 인정되지 않는 경우 오류를 수정하기 위해 `late`를 변수에 마킹하는 것 입니다.

```dart
late String description;

void main() {
    description = 'Feijoada!';
    print(description);
}
```

:::warning
`late` 변수의 초기화에 실패한다면, 변수가 사용할 때 런타임 오류가 발생할 것 입니다.
:::

`late`로 지정된 변수가 선언할 때 같이 초기화 된다면, 초기화는 변수가 처음사용될 때 실행됩니다.
지연된 초기화는 다음과 같은 경우에 유용합니다.

* 변수가 필요하지 않을 수 있으며 초기화하는데 비용이 많이 드는 경우
* 인스턴스 변수를 초기화하는데 초기화할 때 `this`에 접근이 필요한 경우

아래 예제에서 `temperature` 변수는 전혀 사용되지 않으면 비용이 많이 드는 `readThermometer()`함수는 절대 호출되지 않습니다.

```dart
// 이 프로그램은 readThermometer()만 호출합니다.
late String temperature = readThermometer(); // 지연된 초기화
```

## final과 const {#final-and-const}

만약 변수를 변경할 생각이 없는 경우에는 `final`이나 `const`를 `var`대신 사용하거나 타입 앞에 추가합니다.
final 변수는 한번만 설정됩니다.
const 변수는 컴파일타임 상수입니다. (const 변수는 암시적으로 final이 됩니다)

:::note
[인스턴스 변수](https://dart.dev/language/classes#instance-variables)는 `final`이 될 수 있으나 `const`는 불가능합니다.
:::

`final` 변수를 생성하고 설정하는 예제입니다.

```dart
final name = 'Bob'; // 타입 지정없는 예제
final String nickname = 'Bobby';
```

`final` 변수의 값은 변경할 수 없습니다.

```dart
// 정적 분석 : 오류/경고
name = 'Alice'; // 오류 : final 변수는 한번만 설정이 가능합니다.
```

**컴파일타임 상수**로 만들고 싶으면 `const` 변수를 사용하면 됩니다.
클래스수준의 const 변수는 `static const`로 지정하면 됩니다.
변수를 선언하는 곳에 숫자, 문자열, const 변수, 상수 숫자의 수치적연산 결과와 같은 컴파일타임 상수를 값으로 설정하면 됩니다.

```dart
const bar = 1000000; // 압력 단위 (dynes/cm2)
const double atm = 1.01325 * bar; // 표준 대기
```

`const` 키워드는 상수 변수를 선언할때만 사용하는 것은 아닙니다.
상수값들을 생성하거나 상수값들을 생성하는 생성자를 선언할 떄도 사용합니다.
모든 변수는 상수값을 가질 수 있습니다.

```dart
var foo = const [];
final bar = const [];
const baz = []; // const [] 와 동일
```

위의 `baz`와 같이 `const` 선언의 초기화 표현식에 `const`를 생략할 수도 있습니다.
자세한 내용은 [불필요하게 const 사용하지 않기](https://dart.dev/guides/language/effective-dart/usage#dont-use-const-redundantly)를 참고하세요.

`fianl`이나 `const`가 아닌 변수의 값은 `const` 값을 사용했더라도 변경이 가능합니다.

```dart
foo = [1, 2, 3]; // 원래는 const []
```

그러나, `const` 변수의 값은 변경이 불가능합니다.

```dart
// 정적 분석 : 오류/경고
baz = [42]; // 오류 : 상수 변수는 값을 할당할 수 없습니다.
```

[타입 확인 및 변환](operators.md#type-test-operators)(`is`와 `as`), [콜렉션 if](https://dart.dev/language/collections#collection-operators)와 [스프레드 연산자](https://dart.dev/language/collections#spread-operators) (`...`와 `...?`)를 사용하여 상수를 선언할 수 있습니다.

```dart
const Object i = 3; // i는 int 값을 가지는 const 객체
const list = [i as int]; // 타입변환을 사용
const map = {if (i is int) i: 'int'}; // is와 콜렉션 if를 사용
const set = {if (list is List<int>) ...list}; // ...와 스프레드
```

:::note
`final`객체는 수정할 수 없지만 내부의 필드는 변경이 가능합니다.
이와 대조되어 불변성을 가지기 떄문에 `const` 객체와 필드는 변경이 불가능합니다.
:::

상수값을 생성할 때 `const`를 사용하는 것에 대한 자세한 정보는 [리스트](https://dart.dev/language/collections#lists), [맵](https://dart.dev/language/collections#maps)이나 [클래스](https://dart.dev/language/classes)를 참고하세요.

<AdsenseB />