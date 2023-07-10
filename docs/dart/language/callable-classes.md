---
title: Dart의 호출가능 클래스
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/callable-classes](https://dart.dev/language/callable-classes)

Dart 클래스의 인스턴스를 함수처럼 호출하고자 한다면 `call()` 메소드를 구현하면 됩니다.

`call()` 메소드는 어떤 클래스든 함수를 흉내낼 수 있도록 합니다.
이 메소드는 매개변수와 반환 타입과 같은 일반적인 [함수](functions.md)가 제공하는 기능을 동일하게 지원합니다.

아래의 예제에서 `WannabeFunction` 클래스는 `call()` 함수를 선언했으며, 3개의 문자열을 받아 스페이스로 구분하여 연결한 뒤 느낌표를 붙입니다.
**Run**을 클릭하여 코드를 실행할 수 있습니다.

<component is="script" type="text/javascript" src="https://dartpad.dev/inject_embed.dart.js" defer />
<pre>
    <code class="language-run-dartpad:theme-light:mode-dart:ga_id-example1:width-100%:height-400px">
class WannabeFunction {
  String call(String a, String b, String c) => '$a $b $c!';
}

var wf = WannabeFunction();
var out = wf('Hi', 'there,', 'gang');

void main() => print(out);
    </code>
</pre>

<AdsenseB />