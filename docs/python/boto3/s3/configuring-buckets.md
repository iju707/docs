---
title: Boto3를 활용한 Amazon S3 버킷 CORS 구성
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-configuring-buckets.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-configuring-buckets.html)

## 버킷 CORS 구성

교차 출처 자원 공유(Cross Origin Resource Sharing, CORS)는 하나의 도메인 클라이언트 웹 어플리케이션에서 다른 도메인의 자원에 접근가능하도록 합니다. 구성은 허용할 출처, HTTP 방법(GET, PUT, 등), 다른 요소를 정의하는 규칙을 선언합니다.

### 버킷 CORS 구성 검색하기

파이썬용 AWS SDK의 `get_bucket_cors` 함수를 호출하여 버킷의 CORS 구성을 검색할 수 있습니다.

```python
import logging
import boto3
from botocore.exceptions import ClientError


def get_bucket_cors(bucket_name):
    """ 아마존 S3 버킷의 CORS 구성 규칙을 검색하기
    
    :param bucket_name: 문자열
    :return: 버킷의 CORS 구성 규칙 목록. CORS 구성이 없다면 공백 목록 반환. 오류 발생시 None 반환
    """
    
    # CORS 구성 검색하기
    s3 = boto3.client('s3')
    try:
        response = s3.get_bucket_cors(Bucket=bucket_name)
    except ClientError as e:
        if e.response['Error']['Code'] == 'NoSuchCORSConfiguration':
            return []
        else:
            # AllAccessDisabled 오류 == 버킷을 찾을 수 없음
            logging.error(e)
            return None;
            
    return response['CORSRules']
```

### 버킷 CORS 구성 설정하기

`put_bucket_cors` 함수를 호출하여 버킷의 CORS 구성을 설정할 수 있다.

```python
# 구성 규칙 정의하기
cors_configuration = {
    'CORSRules': [{
        'AllowedHeaders': ['Authorization'],
        'AllowedMethods': ['GET', 'PUT'],
        'AllowedOrigins': ['*'],
        'ExposeHeaders': ['ETag', 'x-amz-request-id'],
        'MaxAgeSeconds': 3000
    }]
}

# CORS 구성 설정하기
s3 = boto3.client('s3')
s3.put_bucket_cors(Bucket='BUCKET_NAME', CORSConfiguration=cors_configuration)
```