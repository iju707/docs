---
title: Dart의 함수
tag:
    - Dart
    - 2.18.2
---

원문 : [https://dart.dev/guides/language/language-tour#functions](https://dart.dev/guides/language/language-tour#functions)

Dart는 진정한 객체지향 언어이기에 함수 또한 객체이며 [`Funtion`](https://api.dart.dev/stable/dart-core/Function-class.html)이라는 타입을 가집니다.
이 의미는 함수가 변수에 할당이 되거나 다른 함수에 인자로 전달될 수 있습니다.
또한 Dart 클래스의 인스턴스를 함수처럼 호출할 수 있습니다.
자세한 정보는 [호출가능한 클래스](callable-classes.md)를 참고하세요.

함수 구현체에 대한 예제입니다.

```dart
bool isNoble(int atomicNumber) {
    return _nobleGases[atomicNumber] != null;
}
```

효율적인 Dart를 위해 [공개 API의 타입지정](https://dart.dev/guides/language/effective-dart/design#do-type-annotate-fields-and-top-level-variables-if-the-type-isnt-obvious)을 추천하지만, 함수에서 타입을 생략해도 동작합니다.

```dart
isNoble(atomicNumber) {
    return _nobleGases[atomicNumber] != null;
}
```

만약 함수가 한가지 표현식만 있다면 간소화된 문법을 사용할 수 있습니다.

```dart
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

`=> expr` 문법은 `{ return expr; }`의 축약형입니다.
`=>` 표기법은 화살표 문법이라고도 합니다.

:::note
표현식만(명령문은 아님) 화살표(`=>`)와 세미콜론(`;`) 사이에 위치할 수 있습니다.
예로 들어, [`if`](control-flow-statements.md#if-and-else) 명령문은 위치할 수 없으나 [조건 표현식](operators.md#conditional-expressions)은 가능합니다.
:::

## 매개변수 {#parameters}

함수는 몇개던 필수적 위치의 매개변수를 가질 수 있습니다.
그 뒤로 명명된 매개변수나 선택적 매개변수를 가질 수 있습니다. (동시는 안됨)

:::note
몇몇 API - 특히 [Flutter](https://flutter.dev/)의 위젯 생성자 - 는 필수 매개변수임에도 명명된 매개변수만 사용합니다.
다음 절에서 자세하게 알아보겠습니다.
:::

함수에 인자를 전달하거나 함수의 매개변수를 정의할 때 [마지막 콤마](built-in-types.md#trailing-comma)를 사용할 수 있습니다.

### 명명된 매개변수 {#named-parameters}

명명된 매개변수는 명시적으로 `required`가 마킹되기전까지는 선택적입니다.

함수를 정의할 때 명명된 매개변수를 지정하려면 `{param1, param2, ...}`를 사용하면 됩니다.

```dart
// [bold]와 [hidden] 플래그를 설정
void enableFlags({bool? bold, bool? hidden}) {...}
```

함수를 호출할 때 명명된 인자를 `paramName: value`를 사용해서 지정할 수 있습니다.
예로 들면 다음과 같습니다.

```dart
enableFlags(bold: ture, hidden: false);
```

보통 위치적 인수를 먼저 배치하는 것이 일반적이지만, API에 적합할 경우에는 명명된 인수를 인수목록의 아무 곳에나 배치할 수 있습니다.

```dart
repeat(times: 2, () {
    ...
});
```

:::tip
만약 매개변수가 선택적이지만 `null`이 될 수 없으면, [기본값](#default-parameter-values)을 사용하세요.
:::

명명된 매개변수가 선택적 매개변수 중 하나이지만, `required`를 어노테이션으로 추가해서 매개변수가 필수값으로 만들 수 있으며 사용자는 매개변수의 값을 제공해야 합니다.
예제는 다음과 같습니다.

```dart
const Scrollbar({super.key, required Widget child});
```

누군가 `child` 매개변수 없이 `Scrollbar`를 만들려고 시도한다면 분석기는 이슈를 보고할 것 입니다.

### 선택적 매개변수 {#optional-positional-parameters}

함수의 매개변수 집합을 `[]`로 감싸면 선택적 매개변수로 지정됩니다.

```dart
String say(String from, String msg, [String? device]) {
    var result = '$from says $msg';
    if (device != null) {
        result = '$result with a $device';
    }
    return result;
}
```

선택적 매개변수없이 함수를 호출하는 예제입니다.

```dart
assert(say('Bob', 'Howdy') == 'Bob says Howdy');
```

3번째 매개변수를 추가하여 함수를 호출하는 예제입니다.

```dart
assert(say('Bob', 'Howdy', 'smoke signal') == 'Bob says Howdy with a smoke signal');
```

### 매개변수 기본값 {#default-parameter-values}



## main() 함수 {#the-main-function}

모든 앱은 앱의 진입점을 제공하는 최상위 `main()` 함수를 가지고 있어야 합니다.
`main()` 함수는 `void`를 반환하고 선택적으로 `List<String>` 파라미터를 인자로 받습니다.

간단한 `main()` 함수 예제입니다.

```dart
void main() {
    print('Hello, World!');
}
```

명령줄에서 인자를 받는 앱의 `main()` 함수 예제입니다.

```dart
// 앱을 다음과 같이 실행하면 됩니다 : dart args.dart 1 test
void main(List<String> arguments) {
    print(arguments);

    assert(arguments.length == 2);
    assert(int.parse(arguments[0]) == 1);
    assert(arguments[1] == 'test');
}
```

[args 라이브러리](https://pub.dev/packages/args)를 사용해서 명령줄 인자를 정의/파싱할 수 있습니다.

## 1급 클래스객체인 함수 {#functions-as-first-class-objects}

함수를 다른 함수의 인자로 전달할 수 있습니다.
예로 들면 다음과 같습니다.

```dart
void printElement(int element) {
    print(element);
}

var list = [1, 2, 3];

// printElement를 인자로 전달하기
list.forEach(printElement)
```

또한 함수를 변수에 할당할 수 있습니다.

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
```

이 예제는 익명 함수를 사용했습니다.
더 자세한 내용은 다음 절을 참고하세요.

## 익명 함수 {#anonymous-functions}

대부분의 함수는 `main()`이나 `printElement()`와 같이 이름을 가집니다.
익명 함수(람다 또는 클로저)라고 불리는 이름이 없는 함수를 만들 수도 있습니다.
익명 함수를 변수에 할당할수 있어서 콜렉션에 추가하거나 삭제할수 도 있습니다.

익명 함수는 일반적인 함수와 비슷하게 콤마로 구분하고 선택적 타입 어노테이션이 있는 0개 이상의 인자가 괄호 사이에 있습니다.

아래의 코드 블럭은 함수의 본문을 담고 있습니다.

```dart
([[Type] param1[, ...]]) {
    codeBlock;
};
```

아래 예제는 타입이 없는 `item` 이라는 인자를 가진 익명 함수를 정의합니다.
함수는 리스트의 아이템마다 실행되며, 특정 인덱스의 값을 포함한 문자열을 출력합니다.

```dart
const list = ['apples', 'bananas', 'oranges'];
list.forEach((item) {
    print('${list.indexOf(item)}: $item');
});
```

**Run** 을 클릭하여 코드를 실행합니다.

<component is="script" type="text/javascript" src="https://dartpad.dev/inject_embed.dart.js" defer />
<pre>
    <code class="language-run-dartpad:theme-light:mode-dart:ga_id-example1:width-100%:height-400px">
void main() {
    const list = ['apples', 'bananas', 'oranges'];
    list.forEach((item) {
        print('${list.indexOf(item)}: $item');
    });
}
    </code>
</pre>

함수가 하나의 표현식 또는 반환 명령문을 가지고 있으면 화살표 표기법을 사용하여 간결하게 할 수 있습니다.
아래의 코드를 복사하여 DartPad에 붙여넣고 함수가 동일한지 **Run**을 클릭하여 실행해보세요.

```dart
list.forEach((item) => print('${list.indexOf(item)}: $item'))
```

## 어휘적 범위 {#lexical-scope}

Dart는 어휘적 범위를 가지는 언어이며, 변수의 범위를 정적으로 결정하여 코드의 레이아웃을 간결하게 합니다.
변수가 범위안에 있는지 보고싶으면 "중괄호 밖으로 따라가기"를 하면 됩니다.

각 범위 수준을 가지는 변수와 중첩 함수에 대한 예제입니다.

```dart
bool topLevel = true;

void main() {
    var insideMain = true;

    void myFunction() {
        var insideFunction = true;

        void nestedFunction() {
            var insideNextedFunction = true;

            assert(topLevel);
            assert(insideMain);
            assert(insideFunction);
            assert(insideNestedFunction);
        }
    }
}
```

## 어휘적 클로저 {#lexical-closures}

클로저는 함수가 본래의 범위 밖에서 사용되더라도 어휘적 범위에서 변수에 접근이 가능한 함수 객체입니다.

함수는 주변 범위에 정의된 변수를 포함시킬 수 있습니다.
아래 예제에서 `makeAdder()`는 변수 `addBy`를 캡쳐합니다.
반환된 함수가 어디로 가든, `addBy`를 기억합니다.

```dart
/// 함수가 [addBy]에 함수 인자를 더하여 반환합니다.
Function makeAdder(int addBy) {
    return (int i) => addBy + i;
}

void main() {
    // 2를 더하도록 함수를 만듦
    var add2 = makeAdder(2);

    // 4를 더하도록 함수를 만듦
    var add4 = makeAdder(4);

    assert(add2(3) == 5);
    assert(add2(3) == 7);
}
```

## 함수 동일여부 테스트 {#testing-functions-for-equality}

최상위 함수, 정적 함수, 인스턴스 함수에 대한 동일여부를 테스트하는 예제입니다.

```dart
void foo() {} // 최상위 함수

class A {
    static void bar() {} // 정적 함수
    void baz() {} // 인스턴스 함수
}

void main() {
    Function x;

    // 최상위 함수 비교
    x = foo;
    assert(foo == x);

    // 정적 함수 비교
    x = A.bar;
    assert(A.bar == x);

    // 인스턴스 함수 비교
    var v = A(); // A의 #1 인스턴스
    var w = A(); // A의 #2 인스턴스
    var y = w;
    x = w.baz;

    // 이 클로저는 동일한 인스턴스 (#2)를 참조합니다.
    // 따라서 동일합니다.
    assert(y.baz == x);

    // 이 클로저는 다른 인스턴스를 참조합니다.
    // 따라서 다릅니다.
    assert(v.baz != w.baz);
}
```

## 반환 값 {#return-values}

모든 함수는 값을 반환합니다.
반환되는 값이 명시되지 않으면, 암무적으로 함수 본문에 `return null;`을 추가합니다.

```dart
foo() {}

assert(foo() == null);
```

<AdsenseB />