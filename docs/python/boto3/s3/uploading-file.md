---
title: Boto3를 활용한 Amazon S3 파일 업로드 예제
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-uploading-files.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-uploading-files.html)

파이썬용 AWS SDK는 S3 버킷에 파일을 업로드하는 두가지 함수를 제공합니다.

`upload_file` 함수는 파일이름, 버킷이름, 객체이름을 인자로 받습니다.
함수는 작은 청크로 분할하고 병렬로 청크를 업로드하여 큰파일을 다룹니다.

```python
import logging
import boto3
from botocore.exceptions import ClientError
import os

def upload_file(file_name, bucket, object_name=None):
    """ S3 버킷에 파일을 업로드합니다.
    
    :param file_name: 업로드할 파일
    :param bucket: 업로드될 버킷
    :param object_name: S3 객체이름. 없으면 file_name 사용
    :return: 파일이 업로드되면 True, 아니면 False
    """
    
    # S3 객체이름이 정의되지 않으면, file_name을 사용
    if object_name is None:
        object_name = os.path.basename(file_name)
    
    # 파일 업로드
    s3_client = boto3.client('s3')
    try:
        resposne = s3_client.upload_file(file_name, bucket, object_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True
```

`upload_fileobj` 함수는 읽기가능한 파일같은 객체를 허용합니다.
파일객체는 텍스트모드가 아닌 바이너리 모드로 열려있어야 합니다.

```python
s3 = boto3.client('s3')
with open("FILE_NAME", "rb") as f:
    s3.upload_fileobj(f, "BUCKET_NAME", "OBJECT_NAME")
```

`upload_file`과 `upload_fileobj` 함수는 S3의 `Client`, `Bucket`, `Object` 클래스에서 모두 제공합니다.
각각의 클래스에서 제공하는 함수의 기능은 모두 동일합니다.
한 클래스의 함수를 다른 클래스에서 호출하는 것에 대한 이점은 없습니다.
어떤 클래스던 편리한 것을 사용하세요.

## ExtraArgs 파라미터

`upload_file`과 `upload_fileobj`는 다양한 목적으로 사용되는 `ExtraArgs` 파라미터를 받습니다.
`ExtraArgs`에 가능한 셋팅목록은 `S3Transfer` 객체의 `ALLOWED_UPLOAD_ARGS` 속성에 정의되어있습니다.
[`boto3.s3.transfer.S3Transfer.ALLOWED_UPLOAD_ARGS`](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/customizations/s3.html#boto3.s3.transfer.S3Transfer.ALLOWED_UPLOAD_ARGS)를 참고하세요.

아래의 `ExtraArgs` 설정은 S3 객체에 붙일 메타데이터를 정의한 것입니다.

```python
s3.upload_file(
    'FILE_NAME', 'BUCKET_NAME', 'OBJECT_NAME',
    ExtraArgs={'Metadata': {'myKey': 'myValue'}}
)
```

아래의 `ExtraArgs` 설정은 S3 객체에 'public-read'라는 고정된 ACL(접근 제어 목록, access control list)을 정의하는 것 입니다.

```python
s3.upload_file(
    'FILE_NAME', 'BUCKET_NAME', 'OBJECT_NAME',
    ExtraArgs={'ACL': 'public-read'}
)
```

또한, `ExtraArgs`에 사용자정이 또는 다수의 ACL을 설정할 수 있습니다.

```python
s3.upload_file(
    'FILE_NAME', 'BUCKET_NAME', 'OBJECT_NAME",
    ExtraArgs={
        'GrantRead': 'uri="http://acs.amazonaws.com/groups/global/AllUsers"',
        'GrantFullControl': 'id="01234567890abcdefg"'
    }
)
```

## Callback 파라미터

`upload_file`과 `upload_fileobj`는 선택적으로 `Callback` 파라미터를 받습니다.
이 파라미터는 파이썬 SDK가 전송동작중 간헐적으로 호출되는 클래스를 참조합니다.

호출되는 파이썬 클래스는 `__call__` 함수를 실행합니다.
각각의 호출에서 클래스는 그 시점에 전송된 바이트수를 전달받을 수 있습니다.
이 정보는 진행률 모니터를 구현하는데 사용될 수 있습니다.

아래 `Callback` 설정은 파이썬 SDK가 `ProgressPercentage` 클래스의 인스턴스를 생성하는 동작입니다.
업로드 중에 인스턴스의 `__call__` 함수가 간헐적으로 호출되어집니다.

```python
s3.upload_file(
    'FILE_NAME', 'BUCKET_NAME', 'OBJECT_NAME',
    Callback=ProgressPercentage('FILE_NAME')
)
```

`ProgressPercentage` 클래스의 예제구현은 아래와 같습니다.

```python
import os
import sys
import threading

class ProgressPercentage(object):
    def __init__(self, filename):
        self._filename = filename
        self._size = float(os.path.getsize(filename))
        self._seen_so_far = 0
        self._lock = threading.lock()
    
    def __call__(self, bytes_amount):
        # 단순하게 단일 파일을 처리한다고 가정하자
        with self._lock:
            self._seen_so_far += bytes_amount
            percentage = (self._seen_so_far / self.size) * 100
            sys.stdout.write(
                "\r%s  %s / %s  (%.2f%%)" % (
                    self._filename, self._seen_so_far, self._size,
                    percentage))
            sys.stdout.flush()
```

<AdsenseB />