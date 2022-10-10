---
title: Boto3를 활용한 Amazon S3 Bucket 예제
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-creating-buckets.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-creating-buckets.html)

Amazon S3 버킷은 파일을 보관하는 저장소 위치입니다.
S3 파일들은 객체를 참조하고 있습니다.

이번 절에서는 S3 버킷관련 일반적인 동작을 어떻게 수행하는지 파이썬용 AWS SDK 사용하는 방법을 알아보겠습니다.

## Amazon S3 버킷 만들기

Amazon S3 버킷의 이름은 AWS 플랫폼의 모든 지역에서 유일해야합니다.
버킷은 지연을 최소화 하거나 규제요구사항을 해결하기 위해 특정 지역에 위치할 수 있습니다.

```python
import logging
import boto3
from botocore.exceptions import ClientError


def create_bucket(bucket_name, region=None):
    """ 특정 지역에 S3 버킷을 생성하기
    리전이 지정되어있지 않으면, 버킷은 S3 기본 리전(us-east-1)에 생성됩니다.
    
    :param bucket_name: 생성할 버킷 이름
    :param region: 생성될 버킷의 지역 문자열, 예: us-west-2
    :return: 버킷이 생성되면 True, 아니면 False
    """
    
    # 버킷생성하기
    try:
        if region is None:
            s3_client = boto3.client('s3')
            s3_client.create_bucket(Bucket=bucket_name)
        else:
            s3_client = boto3.client('s3', region_name=region)
            location = {'LocationConstraint': region}
            s3_client.create_bucket(Bucket=bucket_name, CreaetBucketConfiguration=location)
    except ClientError as e:
        logging.error(e)
        return False
    return True
```

## 기존 버킷 목록조회

AWS 계정에 있는 기존 버킷 목록을 조회하는 것 입니다.

```python
# 기존 버킷목록 가져오기
s3 = boto3.client('s3')
resposne = s3.list_buckets()

# 버킷이름 출력하기
print('Existing buckets:')
for bucket in response['Buckets']:
    print(f'    {bucket["Name"]}')
```

<AdsenseB />