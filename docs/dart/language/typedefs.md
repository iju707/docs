---
title: Dart의 타입정의
tag:
    - Dart
    - 2.19.6
---

원문 : [https://dart.dev/language/typedefs](https://dart.dev/language/typedefs)

타입별칭(종종 `typedef` 키워드로 선언되어 _typedef_로 불림)은 타입을 참조하기 위한 간결한 방법입니다.
`IntList`라는 타입별칭을 선언하고 사용하는 간단한 예제입니다.

```dart
typedef IntList = List<int>;
IntList il = [1, 2, 3];
```

타입별칭은 타입 인자를 가질 수 있습니다.

```dart
typedef ListMapper<X> = Map<X, List<X>>;
Map<String, List<String>> m1 = {}; // Verbose.
ListMapper<String> m2 = {}; // 동일하지만 좀더 간결하고 명확합니다.
```

:::note 버전노트
2.13 버전이전에는 typedef가 함수 타입만 제한되었습니다.
새로운 typedef를 사용하려면 최소 2.13 이상의 [언어버전](https://dart.dev/guides/language/evolution#language-versioning)이 필요합니다.
:::

대부분의 상황에서 함수에 대하여 typedef 대신 인라인 함수 타입을 사용하는 것을 권장합니다.
하지만 함수 tyepdef도 나름 유용합니다.

```dart
typedef Compare<T> = int Function(T a, T b);

int sort(int a, int b) => a - b;

void main() {
  assert(sort is Compare<int>); // True!
}
```

<AdsenseB />