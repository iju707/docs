---
title: Boto3를 활용한 Amazon S3 PrivateLink 사용하기
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-privatelink.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-privatelink.html)

## 아마존 S3의 AWS PrivateLink

이번 절에서 인터페이스 VPC 접점를 사용하기 위해 S3 클라이언트를 구성하는 방법을 보여주겠습니다.

### 클라이언트 접점 URL 구성하기

인터페이스 VPC 접점을 사용하기 위해 S3 클라이언트를 구성할 때, 클라이언트에서 사용되는 접점에 명시할 자원의 유형은 하나만 참조될 수 있습니다. 버킷과 접근 지점에 둘다 접근하려면 각각 자원 유형을 위한 두개의 클라이언트를 인스턴화 해야합니다.

아래 예제는 인터페이스 VPC 접점을 통해 S3 버킷에 접속할 수 있도록 S3 클라이언트를 구성하는 것 입니다.

```python
import boto3

s3_client = boto3.client(
    service_name='s3',
    endpoint_url='https://bucket.vpce-abc123-abcdefgh.s3.us-east-1.vpce.amazonaws.com'
)
```

아래 예제는 인터페이스 VPC 접점을 통해 S3 접근 지점에 접속할 수 있도록 S3 클라이언트를 구성하는 것입니다. 이 클라이언트는 S3 버킷을 참조할 때 사용될 수 없습니다.

```python
import boto3

s3_client = boto3.client(
    service_name='s3',
    endpoint_url='https://accesspoint.vpce-abc123-abcdefgh.s3.us-east-1.vpce.amazonaws.com'
)
```

아래 예제는 인터페이스 VPC 접점을 사용하기 위해 S3 제어 클라이언트를 구성하는 것 입니다.

```python
import boto3

control_client = boto3.client(
    service_name='s3control',
    endpoint_url='https://control.vpce-abc123-abcdefgh.s3.us-east-1.vpce.amazonaws.com'
)
```