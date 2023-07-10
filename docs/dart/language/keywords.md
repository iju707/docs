---
title: Dart의 키워드
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/keywords](https://dart.dev/language/keywords)

아래 표는 Dart 언어에서 특별하게 다루는 단어 목록입니다.

| 키워드 | 키워드 | 키워드 | 키워드 |
| :-----: | :-----: | :-----: | :-----: |
| [abstract](classes.md#abstract-classes)<sup>2</sup> | [else](control-flow.md#if-and-else) | [import](libraries.md#using-libraries)<sup>2</sup> | [show](libraries.md#importing-only-part-of-a-library)<sup>1</sup> |
| [as](operators.md#type-test-operators)<sup>2</sup> | [enum](enum.md) | [in](control-flow.md#for-loops) | [static](classes.md#class-variables-and-methods)<sup>2</sup> |
| [assert](control-flow.md#assert) | [export](https://dart.dev/guides/libraries/create-library-packages)<sup>2</sup> | [interface](classes.md#implicit-interfaces)<sup>2</sup> | [super](extend.md) |
| [async](https://dart.dev/language/async)<sup>1</sup> | [extends](extend.md) | [is](operators.md#type-test-operators) | [switch](control-flow.md#switch-and-case) |
| [await](https://dart.dev/language/async)<sup>3</sup> | [extension](extension-methods.md)<sup>2</sup> | [late](variables.md#late-variables)<sup>2</sup> | [sync](functions.md#generators)<sup>1</sup> |
| [break](control-flow.md#break-and-continue) | [external](https://spec.dart.dev/DartLangSpecDraft.pdf#External%20Functions)<sup>2</sup> | [library](libraries.md)<sup>2</sup> | [this](constructors.md) |
| [case](control-flow.md#switch-and-case) | [factory](constructors.md#factory-constructors)<sup>2</sup> | [mixin](mixins.md)<sup>2</sup> | [throw](error-handling.md#throw) |
| [catch](error-handling.md#catch) | [false](built-in-types.md#booleans) | [new](classes.md#using-constructors) | [true](built-in-types.md#booleans) |
| [class](classes.md#instance-variables) | [final](variables.md#final-and-const) | [null](variables.md#default-value) | [try](error-handling.md#catch) |
| [const](variables.md#final-and-const) | [finally](error-handling.md#finally) | [on](error-handling.md#catch)<sup>1</sup> | [typedefs](typedefs.md)<sup>2</sup> |
| [continue](control-flow.md#break-and-continue) | [for](control-flow.md#for-loops) | [operator](methods.md#operators)<sup>2</sup> | [var](variables.md) |
| [covariant](https://dart.dev/guides/language/sound-problems#the-covariant-keyword)<sup>2</sup> | [Function](functions.md)<sup>2</sup> | [part](https://dart.dev/guides/libraries/create-library-packages#organizing-a-library-package) | [void](built-in-types.md) |
| [default](control-flow.md#switch-and-case) | [get](methods.md#getters-and-setters)<sup>2</sup> | [required](functions.md#named-parameters)<sup>2</sup> | [while](control-flow.md#while-and-do-while) |
| [deffered](libraries.md#lazily-loading-a-library)<sup>2</sup> | [hide](libraries.md#importing-only-part-of-a-library)<sup>1</sup> | [rethrow](error-handling.md#catch) | [with](mixins.md) | 
| [do](control-flow.md#while-and-do-while) | [if](control-flow.md#if-and-else) | [return](functions.md#return-values) | [yield](functions.md#generators)<sup>3</sup> |
| [dynamic](README.md#important-concepts)<sup>2</sup> | [implements](classes.md#implicit-interfaces)<sup>2</sup> | [set](methods.md#getters-and-setters)<sup>2</sup> |

이 단어를 식별자로 사용자제하세요.
그러나 필요하다면 각주가 달린 키워드는 식별자가 될 수 있습니다.

* 각주 **1**이 있는 단어는 **문맥 키워드** 입니다. 특정위치에서만 의미를 가지게 됩니다.
  어디에서나 유효한 식별자가 됩니다.

* 각주 **2**가 있는 단어는 **내장된 식별자** 입니다.
  이 키워드는 대부분의 위치에서 유효한 식별자가 되지만 클래스나 타입의 이름, 또는 import 접두사 에서는 사용불가합니다.

* 각주 **3**이 있는 단어는 [비동기 지원](https://dart.dev/language/async)에 관련된 예약된 단어로 제약됩니다.
  `await`나 `yield`는 `async`, `async*` 또는 `sync*`로 표시된 함수의 식별자로 사용할수는 없습니다.

각주가 없는 표의 모든 단어는 **예약된 단어**이므로 식별자로 사용할 수 없습니다.

<AdsenseB />