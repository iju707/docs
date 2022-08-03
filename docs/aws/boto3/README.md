---
title: 빠르게 해보기
---

원본 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html)

이 가이드는 파이썬용 AWS SDK를 설치하거나 업데이트하는데 필요한 단계를 자세하게 설명합니다.
SDK는 두개의 파이썬 패키지로 구성되어있습니다.

* Botocore : 파이썬 SDK와 AWS CLI 간의 낮은 수준 기능적 공유를 제공하는 라이브러리
* Boto3 : 파이썬 SDK 자체 구현 패키지

:::tip
문서 및 개발자들이 파이썬용 AWS SDK를 "Boto3"라고 지칭하는 경향이 있으며 이 문서에서도 동일하게 사용합니다.
:::

## 설치하기

Boto3를 사용하려면 먼저 Boto3와 의존성을 설치해야합니다.

### 파이썬 설치 또는 업데이트

Boto3를 설치하기 전에, 파이썬 3.7 또는 이후 버전을 설치해야 합니다. 파이썬 3.6 또는 그 이전 버전에 대한 지원은 종료되었습니다. 파이썬 버전 각각에 대한 종료 일정목록 이후에는 Boto3 의 새로운 릴리즈에서 해당 버전에 대한 파이썬 지원이 더 이상 포함되지 않습니다. 종료 일정을 포함하여 파이썬 3.7을 사용하도록 프로젝트를 업데이트하는 것에 대한 자세한 정보는 [파이썬 3로 통합](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/migrationpy3.html#guide-migration-py3)을 참고하세요.

파이썬의 최신버전을 가져오는 방법은 공식 [파이썬 문서](https://www.python.org/downloads/)를 참고하세요.

### Boto3 설치하기

pip를 통해 최신 Boto3를 설치합니다.

```bash
$ pip install boto3
```

