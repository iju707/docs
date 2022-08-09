---
title: Boto3 빠르게 해보기
tag:
    - aws
    - python
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

프로젝트에서 특정버전의 Boto3가 필요하거나 특정버전에 대한 호환성 문제를 가지고 있을 경우 설치에 제약사항을 줄 수 있습니다.

```bash
# Boto3 버전 1.0 지정하여 설치하기
$ pip install boto3==1.0.0

# Boto3 1.15.0 이상 버전으로 설치하기
$ pip install boto3>=1.15.0

# Boto3 1.15.3 이전버전만 사용하기
$ pip install boto3<=1.15.3
```

:::tip
Boto3의 마지막 개발버전은 [깃허브](https://github.com/boto/boto3)에 있습니다.
:::

### AWS Common Runtime(CRT) 사용하기

Boto3 기본설치에 더하여 새로운 AWS Common Runtime (CRT) 포함을 선택할 수 있습니다.
AWS CRT는 AWS SDK들을 위한 새로운 기반을 제공하는 모듈 패키지 집합입니다.
각각 라이브러리는 구현하는 기능영역에 대한 좀더 나은 성능과 최소한의 공간을 제공합니다.
CRT를 사용하면 SDK는 가능하면 공통 기반코드를 공유하고 AWS SDK들 간에 일관성 및 처리량 최적화를 제공합니다.

AWS CRT가 포함되면, Boto3는 파이썬용 AWS SDK에서 제공하지 않는 기능을 포함하기 위해 AWS CRT를 사용합니다.

아래와 같은 기능을 사용할 때 확인할 수 있습니다.

* [Amazon S3 Multi-Reigon Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPoints.html)
* [Amazon S3 Object Integrity](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html)
* Amazon EventBridge Global Endpoints

그러나, Boto3는 기본적으로 AWS CRT를 사용하지 않지만 Boto3를 설치할 때 crt 추가기능을 정의하여 사용하는 것을 선택할 수 있습니다.

```bash
$ pip install boto3[crt]
```

CRT를 사용하지 않는 Boto3로 되돌리는 명령은 다음과 같습니다.

```bash
$ pip uninstall awscrt
```

다시 CRT를 활성화 하려면, `awscrt`에 맞는 버전을 가져올 수 있도록 `boto3[crt]`를 다시 설치하면 됩니다.

```bash
$ pip install boto3[crt]
```

## 구성하기

Boto3를 사용하기 전에, [IAM 콘솔](https://console.aws.amazon.com/iam/home) 또는 AWS CLI를 사용하여 AWS 계정에 대한 인증자격증명을 설정해야합니다.

IAM 콘솔을 사용하여 계정을 어떻게 생성하는지에 대한 절차는 [IAM 사용자 생성하기](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console)를 참고하세요.
사용자가 생성되면 [접근키 관리하기](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)를 보고 사용자를 인증하는데 사용되는 키를 생성하고 검색하는지를 배울 수 있습니다.

[AWS CLI](http://aws.amazon.com/cli/)가 설치되어있으면, **aws configure** 명령으로 인증파일을 구성할 수 있습니다.

```bash
$ aws configure
```

대안으로, 인증파일을 따로 생성해도 됩니다.
기본적으로 파일경로는 `~/.aws/credentials` 입니다.
최소한 인증파일은 접근키와 비밀접근키를 가지고 있어야 합니다.
예로 들어, 계정에 대한 키와 비밀키는 `default` 프로파일에 정의됩니다.

```
[default]
aws_access_key_id = 접근키
aws_secret_access_key = 비밀키
```

기본 지역을 AWS 구성파일에 추가하고 싶으면 기본경로인 `~/.aws/config`에 파일을 작성하면 됩니다.

```
[default]
region = us-east-1
```

대안으로, 클라이언트와 자원을 만들 대 `region_name`을 넘겨주면 됩니다.

기본 프로파일의 자격증명과 생성접속때 사용되는 기본 지역을 구성하였습니다.
좀더 상세한 구성 소스와 옵션에 대한 정보는 [구성하기](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html#guide-configuration)를 참고하세요.

## Boto3 사용하기

Boto3를 사용하려면, 먼저 import를 하고 어떻 서비스를 사용할지 명시해야합니다.

```python
import boto3

# 아마존 S3를 사용해보자
s3 = boto3.resource('s3')
```

이제 `s3` 자원을 가지게 되었고 서비스에 요청을 보낼 수 있습니다.
아래의 코드는 `buckets` 컬렉을 사용하여 모든 버킷이름을 출력하는 것 입니다.

```python
# 버킷이름 출력하기
for bucket in s3.buckets.all():
    print(bucket.name)
```

또한 바이너리 데이터를 업로드/다운로드 할 수 있습니다.
예로 들어, 아래는 기존 S3의 `my-bucket` 이라는 버킷에 새로운 파일을 업로드하는 것 입니다.

```python
# 새로운 파일 업로드
data = open('test.jpg', 'rb')
s3.Bucket('my-bucket').put_object(Key='test.jpg', Body=data)
```

[자원](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/resources.html#guide-resources)과 [컬렉션](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/collections.html#guide-collections)은 다 절에서 더 자세히 다루겠습니다.