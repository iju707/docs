---
title: Boto3를 활용한 Amazon S3으로 정적웹호스트 하기
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-static-web-host.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-static-web-host.html)

## 아마존 S3 버킷을 정적웹호스트로 사용하기

S3 버킷으로 정적웹사이트 호스팅을 구성할 수 있습니다.

### 웹사이트 구성 검색하기

파이썬용 AWS SDK의 `get_bucket_website` 함수를 호출하여 버킷의 웹사이트 구성을 검색할 수 있습니다.

```python
import boto3

# 웹사이트 구성 검색하기
s3 = boto3.client('s3')
result = s3.get_bucket_website(Bucket='BUCKET_NAME')
```

### 웹사이트 구성 설정하기

`put_bucket_website` 함수를 호출해서 버킷의 웹사이트 구성을 설정할 수 있습니다.

```python
# 웹사이트 구성 정의하기
website_configuration = {
    'ErrorDocument': {'Key': 'error.html'},
    'IndexDocument': {'Suffix': 'index.html'},
}

# 웹사이트 구성 설정하기
s3 = boto3.client('s3')
s3.put_bucket_website(Bucket='BUCKET_NAME',
                      WebsiteConfiguration=website_configuration)
```

### 웹사이트 구성 삭제하기

`delete_bucket_website` 함수 호출해서 버킷의 웹사이트 구성을 삭제할 수 있습니다.

```python
# 웹사이트 구성 삭제하기
s3 = boto3.client('s3')
s3.delete_bucket_website(Bucket='BUCKET_NAME')
```