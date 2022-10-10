---
title: Boto3를 활용한 Amazon S3 파일 다운로드 예제
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-download-file.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-example-download-file.html)

파이썬용 AWS SDK가 제공하는 파일 다운로드 함수는 파일 업로드와 비슷합니다.

`download_file` 함수는 버킷의 이름과 다운로드할 객체, 파일이 저장될 파일이름을 인자로 받습니다.

```python
import boto3

s3 = boto3.client('s3')
s3.download_file('BUCKET_NAME', 'OBJECT_NAME', 'FILE_NAME')
```

`download_fileobj` 함수는 쓰기가능한 파일같은 객체를 인자로 받습니다.
파일 객체는 텍스트모드가 아닌 바이너리 모드로 열려있어야 합니다.

```python
s3 = boto3.client('s3')
with open('FILE_NAME', 'wb') as f:
    s3.download_fileobj('BUCKET_NAME', 'OBJECT_NAME', f)
```

업로드와 비슷하게, 다운로드 함수도 S3 `Client`, `Bucket`, `Object` 클래스에서 제공되며 각각 클래스에서 제공하는 기능은 모두 동일합니다.
편한 클래스를 선택해서 사용하면 됩니다.

또한 업로드 함수같이 다운로드 함수는 선택적 ```ExtraArgs```와 ```Callback``` 인자를 지원합니다.

다운로드 함수에 설정가능한 `ExtraArgs` 목록은 `S3Transfer` 객체의 `ALLOWED_DOWNLOAD_ARGS` 속성에 정의되어있습니다.
자세한 내용은 [`boto3.s3.transfer.S3Transfer.ALLOWED_DOWNLOAD_ARGS`](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/customizations/s3.html#boto3.s3.transfer.S3Transfer.ALLOWED_DOWNLOAD_ARGS)를 참고하세요.

다운로드 함수의 `Callback` 인자는 업로드 함수와 동일한 목적으로 사용됩니다.
업로드와 다운로드 함수 모두 동일한 `Callback` 클래스를 실행합니다.

<AdsenseB />