---
title: Boto3를 활용한 Amazon S3 사전인증 URL 사용하기
tag:
    - aws
    - python
---

원문 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html)

## 사전인증 URL

AWS 인증 또는 S3 객체에 접근할 권한이 없는 사용자에게 사전인증 URL을 사용하여 임시적 접근을 부여할 수 있습니다.

사전인증 URL은 객체에 접근할 수 있는 AWS 사용자가 생성할 수 있습니다.
생성된 URL은 미인증 사용자에게 전달될 수 있습니다.
사전인증 URL은 브라우저에서 접근가능하거나 프로그램 또는 HTML 웹페이지에서 사용될 수 있습니다.
사전인증 URL에 사용되는 인증정보는 이 URL을 생성한 AWS 사용자의 정보입니다.

사전인증 URL은 URL이 생성될 때 정의되는 제한된 기간의 시간동안만 유효하게 됩니다.

```python
import logging
import boto3
from botocore.exceptions import ClientError

def create_presigned_url(bucket_name, object_name, expiration=3600):
    """S3 객체를 공유하기 위해 사전인증 URL 생성하기

    :param bucket_name: string
    :param object_name: string
    :param expiration: 사전인증 URL이 유효한 시간(초)
    :return: 문자열의 사전인증URL. 오류가 있으면 None 반환
    """

    # S3 객체를 위한 사전인증 URL을 생성한다.
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': object_name},
                                                    ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None
    
    # 사전인증 URL이 포함된 응답
    return resposne
```

브라우저에서 사전인증 URL을 입력하여 S3 객체를 다운로드할 수 있습니다.
프로그램 또는 HTML 페이지는 HTTP GET 요청으로 사전인증 URL을 사용하여 S3 객체를 다운받을 수 있습니다.

아래 코드는 파이썬 `requests` 패키지를 사용하여 GET 요청을 수행하는 것을 보여줍니다.

```python
import requests    # 설치하기: pip install requests

url = create_presigned_url('BUCKET_NAME', 'OBJECT_NAME')
if url is not None:
    response = requests.get(url)
```

## 다른 S3 동작을 수행하기 위한 사전인증 URL 사용하기

사전인증 URL의 주 목적은 S3 객체에 사용자 임시 접근을 부여하는 것 입니다.
그러나, 사전인증 URL은 S3 버킷과 객체에 대한 추가적인 동작을 수행할 수 있도록 권한을 부여하는데 사용될 수 있습니다.

아래에 보여주는 `create_presigned_url_expanded` 함수는 특정 S3 동작을 수행하기 위한 사전인증 URL을 생성하는 것 입니다.
함수는 'list\_buckets'나 'get\_bucket\_location'와 같은 S3 client 함수의 이름을 인자로 받습니다.
함수에 전달되는 파라미터는 `method_parameters` 딕셔너리 인자에 정의되어있습니다.
사용할 HTTP 방식(GET, PUT 등)은 정의 가능하나 파이썬용 AWS SDK에서 적절한 방식을 선택하기 때문에 이 인자는 필수는 아닙니다.

```python
import logging
import boto3
from botocore.exceptions import ClientError

def create_presigned_url_expanded(client_method_name, method_parameters=None,
                                  expiration=3600, http_method=None):
    """ S3.Client 함수를 실행하기 위한 사전인증 URL 생성하기
    
    AWS 파이썬 SDK에서 제공하는 모든 클라이언트 함수가 지원되지는 않습니다.
    
    :param client_method_name: S3.Client 함수의 이름. 예, 'list_buckets'
    :param method_parameters: 함수에 전달할 파라미터 딕셔너리
    :param expiration: 사전인증 URL이 유효한 시간
    :param http_method: 사용할 HTTP 방식 (GET 등)
    :return: 사전인증 URL 문자열. 오류시 None 반환
    """
    
    # S3 클라이언트 함수를 위한 사전인증 URL 생성하기
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_url(ClientMethod=client_method_name,
                                                    Params=method_parameters,
                                                    ExpiresIn=expiration,
                                                    HttpMethod=http_method)
    except ClientError as e:
        logging.error(e)
        return None
    
    # 사전인증 URL을 포함한 응답
    return response
```

## 파일업로드를 위한 사전인증 URL 생성하기

파일을 업로드하기위한 AWS 인증정보를 가지고 있지 않은 사용자도 사전인증 URL을 통해 업로드를 수행할 수 있습니다.
업로드 동작은 HTTP POST 요청을 만들고 요청의 일부분으로 전송될 추가적인 인자를 필요로 합니다.

```python
import logging
import boto3
from botocore.exceptions import ClientError

def create_presigned_post(bucket_name, object_name,
                          fields=None, conditions=None, expiration=3600):
    """ 파일을 업로드하기 위한 사전인증 URL S3 POST 요청 생성하기
    
    :param bucket_name: 문자열
    :param object_name: 문자열
    :param fields: 미리채워진 양식필드 딕셔너리
    :param conditions: 정책에 포함할 조건 목록
    :param expiration: 사전인증 URL이 유효한 시간(초)
    :return: 아래의 키를 가진 딕셔너리
        url: POST 요청 URL
        fields: POST와 함께 제출될 양식 항목과 값의 딕셔너리
    :return : 오류시 None
    """
    
    # 사전인증 S3 POST URL 생성하기
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_post(bucket_name,
                                                     object_name,
                                                     Fields=fields,
                                                     Conditions=conditions,
                                                     ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None
        
    # 사전인증 URL과 요구되는 항목을 포함한 응답
    return response
```

생성된 사전인증 URL은 후속으로 진행할 HTTP POST 요청에 전달될 URL과 추가적인 항목을 포함하고 있습니다.

아래 코드는 파일을 S3에 업로드하기위해 `requests` 패키지를 사용하여 사전인증 POST URL로  POST 요청을 수행하는 것을 보여줍니다.

```python
import requests # 설치필요시 : pip install requests

# 사전인증 URL 생성하기
object_name = 'OBJECT_NAME'
response = create_presigned_post('BUCKET_NAME', object_name)
if response is None:
    exit(1)
    
# 다른 파이썬 프로그램에서 파일을 업로드하기 위해 사전인증 URL을 어떻게 사용하는지 보여줍니다.
with open(object_name, 'rb') as f:
    files = {'file': (object_name, f)}
    http_response = requests.post(response['url'], data=response['fields'], files=files)
# 성공하면 HTTP 상태코드 204가 반환됩니다.
logging.info(f'파일 업로드 HTTP 상태코드: {http_response.status_code}')
```

사전인증 URL과 항목은 HTML 페이지에서도 사용될 수 있습니다.

```html
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body>
    <!-- S3Client.generate_presigned_post() 에서 반환된 'url' 값 복사-->
    <form action="URL_VALUE" method="post" enctype="multipart/form-data">
      <!-- S3Client.generate_presigned_post() 에서 반환된 키/값형식의 'fields' 복-->
      <input type="hidden" name="key" value="VALUE" />
      <input type="hidden" name="AWSAccessKeyId" value="VALUE" />
      <input type="hidden" name="policy" value="VALUE" />
      <input type="hidden" name="signature" value="VALUE" />
    File:
      <input type="file"   name="file" /> <br />
      <input type="submit" name="submit" value="Upload to Amazon S3" />
    </form>
  </body>
</html>
```

<AdsenseB />