---
title: Dart의 라이브러리와 가져오기
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/libraries](https://dart.dev/language/libraries)

`import`와 `library` 지시어는 모듈화, 공유화가 가능한 코드기반을 만드는데 도움이 됩니다.
라이브러리는 API만 제공하는게 아니고 공개범위의 단위입니다. (밑줄(`_`)로 시작한 식별자는 라이브러리 내에만 보입니다)
모든 Dart의 앱은 [`library`](libraries.md#library-directive) 지시자를 사용하지 않아도 라이브러리입니다.

라이브러리는 [패키지](https://dart.dev/guides/packages)를 사용하여 배포할 수 있습니다.

:::info
 If you’re curious why Dart uses underscores instead of access modifier keywords like public or private, see SDK issue 33383.
왜 Dart에서 public이나 private 같은 접근식별자를 사용하지 않고 밑줄을 사용하는지 궁금하다면 [SDK 이슈 33383](https://github.com/dart-lang/sdk/issues/33383)을 참고하세요.
:::

## 라이브러리 사용하기 {#using-libraries}

다른 라이브러리 범위 내에 사용되는 한 라이브러리의 네임스페이스를 지정하기 위해 `import`를 사용합니다.

예로 들어, Dart 웹 앱은 일반적으로 [`dart:html`](https://api.dart.dev/stable/dart-html) 라이브러리를 사용하며 아래와 같이 가져올 수 있습니다.

```dart
import 'dart:html';
```

`import`에 필요한 인자는 지정할 라이브러리의 URI 입니다.
내장된 라이브러리는 URI가 `dart:`로 시작합니다.
다른 라이브러리는 파일시스템 경로 또는 `package:` 구문을 사용합니다.
`package:` 구문은 pub툴과 같은 패키지 관리자에 제공되는 라이브러리들을 지정합니다.
예로 들면,

```dart
import 'package:test/test.dart';
```

:::note
URI는 단일 자원 식별자를 나타냅니다.
URLs (단일 자원 위치자)는 URI의 일반적인 종류입니다.
:::

### 라이브러리 접두어 지정하기 {#specifying-a-library-prefix}

식별자가 중복되는 두개의 라이브러리를 가져올 경우, 접두사를 한개 또는 둘다 지정할 수 있습니다.
예로 들어, 라이브러리1과 라이브러리2 둘다 Element 클래스를 가지고 있다면 코드에 다음과 같이 사용할 수 있습니다.

```dart
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;

// 라이브러리1의 Element 사용하기
Element element1 = Element();

// 라이브러리2의 Element 사용하기
lib2.Element element2 = lib2.Element();
```

### 라이브러리의 일부만 가져오기 {#importing-only-part-of-a-library}

라이브러리의 일부만 사용하려면 라이브러리의 선택적 가져오기를 하면 됩니다.
에로 들면 다음과 같습니다.

```dart
// foo만 가져오기
import 'package:lib1/lib1.dart' show foo;

// foo를 제외한 나머지 가져오기
import 'package:lib2/lib2.dart' hide foo;
```

#### 지연된 라이브러리 로딩하기

연기된 로딩(또한 지연 로딩)은 라이브러리가 필요하거나 필요할 때, 즉시 라이브러리를 로딩하는 웹앱을 가능하게 합니다.
연기된 로딩을 사용하는 경우에 대한 예시입니다.

* 웹 앱의 초기 기동 시간을 단축
* 예로 알고리즘의 선택적 구현을 시도하기 위한 A/B 테스트 수행
* 선택적 화면 또는 다이얼로그 같은 거의 사용되지 않는 기능을 로딩

:::warning
`dart compile js`만 연기된 로딩을 지원합니다.
Flutter와 Dart VM은 연기된 로딩을 지원하지 않습니다.
자세한 정보는 [이슈 #33118](https://github.com/dart-lang/sdk/issues/33118)과 [이슈 #27776](https://github.com/dart-lang/sdk/issues/27776)을 살펴보세요.
:::

라이브러리를 지연된 로딩하기 위해 첫번째 가져오기를 `deferred as`를 사용해야합니다.

```dart
import 'package:greetings/hello.dart' deferred as hello;
```

라이브러리가 필요할 때 라이브러리 식별자를 사용하여 `loadLibrary()`를 실행합니다.

```dart
Future<void> greet() async {
  await hello.loadLibrary();
  hello.printGreeting();
}
```

이전 코드에서 `await` 키워드는 라이브러리가 로딩될 때까지 실행을 일시정지시킵니다.
`async`와 `await`에 대한 더 자세한 정보는 [비동기 지원](https://dart.dev/language/async)을 참고하세요.

라이브러리에 `loadLibrary()`를 여러번 실행해도 문제 없습니다.
라이브러리는 딱 한번 로딩됩니다.

연기된 로딩을 사용할 때 아래를 꼭 기억하세요.

* 해당 파일에서 가져오기한 지연된 라이브러리의 상수는 상수가 아닙니다.
  이 상수는 연기된 라이브러리가 로딩될 때까지 존재하지 않는다는걸 기억하세요.
* 해당 파일에서 가져오기한 지연된 라이브러리의 타입을 사용할 수 없습니다.
  대신, 지연된 라이브러리와 해당 파일에서 모두 가져오기를 한 라이브러리에 인터페이스 타입으로 이동하는 것을 고려하세요.
* Dart는 명시적으로 `deferred as namespace`를 사용해서 정의한 네임스페이스에 `loadLibrary()`를 삽입합니다.
  `loadLibrary()` 함수는 [`Future`](https://dart.dev/guides/libraries/library-tour#future)를 반환합니다.

### `library` 지시자 {#library-directive}

라이브러리 수준의 [문서 주석](https://dart.dev/guides/language/effective-dart/documentation#consider-writing-a-library-level-doc-comment)이나 [메타데이터 어노테이션](metadata.md)을 열거하기 위해 파일의 시작부분에 `library` 선언을 추가합니다.

```dart
/// 테스트에 정말 좋은 라이브러리
@TestOn('browser')
library;
```

## 라이브러리 구현하기 {#implementing-libraries}

아래를 포함해서 라이브러리 패키지를 어떻게 구현하는지 가이드 받기 위해 [라이브러리 패키지 생성하기](https://dart.dev/guides/libraries/create-library-packages)를 살펴보세요.

* 라이브러리 소스코드 구성하는 방법
* `export` 지시자 사용하는 방법
* `part` 지시자를 언제 사용하는지
* 다수의 플랫폼을 지원하기 위한 라이브러리를 구현할 때 조건부 가져오기와 내보내기를 사용하는 방법

<AdsenseB />