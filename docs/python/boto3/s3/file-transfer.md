---
title: Boto3를 활용한 Amazon S3 파일 전송 구성
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3.html)

파일이나 S3 객체를 업로드, 다운로드, 복사할 때 파이썬용 AWS SDK는 자동으로 재시도, 분할/통합 전송을 관리합니다.

관리 동작은 대부분의 시나리오에 잘 맞도록 알맞은 기본 설정값을 사용하여 동작됩니다.
특별한 경우를 다루기 위해 기본 설정을 요구사항에 맞춰 구성할 수도 있습니다.

구성 설정은 [`boto3.transfer.TransferConfig`](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/customizations/s3.html#boto3.s3.transfer.TransferConfig) 객체에 저장됩니다.
객체는 전송 함수(`upload_file`, `download_file` 등)에서 `Config=` 인자로 전달되어집니다.

남은 절에서 `TransferConfig` 객체를 가지고 다양한 전송 동작을 구성하는지 알아보겠습니다.

## 분할전송

분할전송은 파일크기가 `multipart_threshold` 속성의 값을 초과했을때 동작합니다.

아래 예제에서 `TransferConfig` 객체에 정의된 한계값보다 파일의 크기가 클경우 분할로 전송되도록 `upload_file`을 구성하였습니다.

```python
import boto3
from boto3.s3.transfer import TransferConfig

# 원하는 분할 한계값 설정하기 (5GB)
GB = 1024 ** 3
config = TransferConfig(multipart_threshold=5 * GB)

# 전송 수행하기
s3 = boto3.client('s3')
s3.upload_file('FILE_NAME', 'BUCKET_NAME', 'OBJECT_NAME', Config=config)
```

## 병렬전송 동작

병렬 S3 API 전송 동작의 최대 숫자는 접속 속도에 맞게 조정될 수 있습니다. 대역폭 사용량을 가감하기 위해 `max_concurrency` 속성으로 설정할 수 있습니다.

기본 설정값은 10 입니다. 대역폭 사용량을 줄이려면 값을 줄이고 높이려면 값을 높이면 됩니다.

```python
# 다운스트림 대역폭을 조금만 사용하려면 최대 병렬을 감소시킵니다.
config = TransferConfig(max_concurrency=5)

# S3 객체를 다운로드 합니다.
s3 = boto3.client('s3')
s3.download_file('BUCKET_NAME', 'OBJECT_NAME', 'FILE_NAME', Config=config)
```

## 쓰레드

전송동작은 병렬을 구현하기 위해 쓰레드를 사용합니다. `use_threads` 속성을 `False`로 설정하여 쓰레드사용을 비활성화 할 수 있습니다.

쓰레드사용이 비활성화되면, 병렬 전송은 발생되지 않습니다. 따라서, `max_concurrency` 속성의 값이 무시됩니다.

```python
# 쓰레드 사용/병렬 전송 비활성화
config = TransferConfig(use_threads=False)

s3 = boto3.client('s3')
s3.download_file('BUCKET_NAME', 'OBJECT_NAME', 'FILE_NAME', Config=config)
```