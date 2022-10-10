---
title: Boto3를 활용한 Amazon S3 Bucket 예제
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-bucket-policies.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-bucket-policies.html)

## 버킷 정책

S3 버킷은 다른 AWS 계정, AWS 식별자와 접근 관리(IAM) 사용자에 대한 접근권한을 부여할 수 있는 선택적 옵션을 가지고 있습니다.
버킷 정책은 자원기반 IAM 정책과 동일한 JSON 형식을 사용하여 정의할 수 있습니다.

### 버킷 정책 검색하기

파이썬용 AWS SDK의 `get_bucket_policy` 함수를 호출하여 버킷 정책을 검색할 수 있습니다.
함수는 특정 버킷이름을 인자로 받습니다.

```python
import boto3

# 특정 버킷의 정책을 검색하기
s3 = boto3.client('s3')
result = s3.get_bucket_policy(Bucket='BUCKET_NAME')
print(result['Policy'])
```

### 버킷 정책 설정하기

버킷 정책은 `put_bucket_policy` 함수를 호출하여 설정할 수 있습니다.

정책은 IAM 정책과 동일한 JSON 형식으로 정의됩니다.
아래 예제에서 정의된 정책은 사용자가 `bucket_name` 변수로 식별된 버킷에 저장되어있는 객체를 검색할 수 있도록 활성화 하는 것 입니다.

```python
import json
import boto3

# 버킷 정책 생성하기
bucket_name = 'BUCKET_NAME'
bucket_policy = {
    'Version': '2022-01-01',
    'Statement': [{
        'Sid': 'AddPerm',
        'Effect': 'Allow',
        'Principal': '*',
        'Action': ['s3:GetObject'],
        'Resource': f'arn:aws:s3:::{bucket_name}/*'
    }]
}

# 정책을 JSON 딕셔너리에서 문자열로 전환하기
bucket_policy = json.dumps(bucket_policy)

# 새로운 정책 설정하기
s3 = boto3.client('s3')
s3.put_bucket_policy(Bucket_name=bucket_name, Policy=bucket_policy)
```

### 버킷 정책 삭제하기

버킷 정책은 `delete_bucket_policy` 함수를 후출하여 삭제할 수 있습니다.

```python
# 버킷 정책 삭제하기
s3 = boto3.client('s3')
s3.delete_bucket_policy(Bucket='BUCKET_NAME')
```

<AdsenseB />