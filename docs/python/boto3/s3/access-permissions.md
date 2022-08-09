---
title: Boto3를 활용한 Amazon S3 접근권한목록 예제
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-access-permissions.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-access-permissions.html)

## 접근 권한

이번 절에서 접근권한목록(ACL)을 사용해서 S3 버킷이나 객체에 대한 접근권한을 어떻게 관리하는지 알아보겠습니다.

### 버킷 접근 권한 목록 가져오기

아래 예제는 S3 버킷의 현재 접근권한목록을 검색하는 것 입니다.

```python
import boto3

# 버킷의 ACL 검색하기
s3 = boto3.client('s3')
result = s3.get_bucket_acl(Bucket='BUCKET_NAME')
print(result)
```