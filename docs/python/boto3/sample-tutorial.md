---
title: Boto3 예제 튜토리얼
tag:
    - aws
    - python
---

원본 : [https://boto3.amazonaws.com/v1/documentation/api/latest/guide/sqs.html](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/sqs.html)

이 튜토리얼은 AWS 서비스에서 Boto3를 어떻게 사용하는지 보여줍니다.
이번 예제 튜토리얼에서 [아마존 단순 큐 서비스(Amazon Simple Queue Service (SQS))](http://aws.amazon.com/documentation/sqs/)를 Boto3로 사용하는 법을 배울 수 있습니다.

## SQS

SQS는 큐와 메시지 프로세스를 가능하게 합니다.
이번 튜토리얼에서 [자원](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/resources.html#guide-resources)과 [컬렉션](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/collections.html#guide-collections)으로 새로운 큐를 생성하고 기존 큐를 가져오고 사용하는 것, 큐에 새로운 메시지를 주입하고 큐에서 메시지를 처리하는 것을 배울 것 입니다.

## 큐 생성하기

큐는 이름으로 생성할 수 있습니다.
또한 아이템이 처리되기 전까지 대기하는 시간(초)와 같이 큐의 속성도 선택적으로 설정할 수 있습니다.
다음 예제에서 큐의 이름을 `test`로 사용하겠습니다.
큐를 생성하기전에 SQS 서비스자원을 얻어와야 합니다.

```python
# 서비스 자원 가져오기
sqs = boto3.resource('sqs')

# 큐 생성하기. SQS.Qqueue 인스턴스를 반환합니다.
queue = sqs.create_queue(QueueName='test', Attributes={'DelaySeconds': '5'})

# 큐의 식별자와 속성에 접근할 수 있습니다.
print(queue.url)
print(queue.attributes.get('DelaySeconds'))
```

참조 : [SQS.ServiceResource.create_queue()](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.ServiceResource.create_queue)

:::warning
```test```라는 큐를 이미 보유하고 있을 경우 위 코드에서 예외가 발생할 수 있습니다.
:::

## 기존 큐 사용하기

큐 이름을 기준으로 검색할 수 있습니다.
만약 큐가 없는 경우에는 예외가 발생할 수 있습니다.

```python
# 서비스 자원 가져오기
sqs = boto3.resource('sqs')

# 큐 가져오기. SQS.Queue 인스턴스가 반환됩니다.
queue = sqs.get_queue_by_name(QueueName='test')

# 큐의 식별자와 속성에 접근할 수 있습니다.
print(queue.url)
print(queue.attributes.get('DelaySeconds'))
```

기존 큐에 대한 모든 목록을 볼 수도 있습니다.

```python
# ARN(아마존 자원 이름)의 일부인 큐 이름을 각각 출력합니다.
for queue in sqs.queues.all():
    print(queue.url)
```

:::tip
큐로부터 이름을 가져오려면, 큐의 `attributes` 속성에서 가능한 ARN을 사용해야합니다.
`queue.attributes['QueueArn'].split(':')[-1]`에서 이름을 반환합니다.
:::

참조 : [SQS.ServiceResource.get_queue_by_name()](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.ServiceResource.get_queue_by_name), [SQS.ServiceResource.queues](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.ServiceResource.queues)

## 메시지 전송하기

메시지를 전송하면 큐의 맨끝에 메시지가 추가됩니다.

```python
# 서비스 자원 가져오기
sqs = boto3.resource('sqs')

# 큐 가져오기
queue = sqs.get_queue_by_name(QueueName='test')

# 새로운 메시지 생성하기
response = queue.send_message(MessageBody='world')

# 응답은 자원이 아니지만, 메시지ID와 MD5를 제공합니다
print(response.get('MessageId'))
print(response.get('MD5OfMessageBody'))
```

사용자정의 속성을 포함하여 메시지를 생성할 수 있습니다.

```python
queue.send_message(MessageBody='boto3', MessageAttributes={
    'Author': {
        'StringValue': 'Daniel',
        'DataType': 'String'
    }
})
```

또한 메시지를 배치로 전송할 수 있습니다.
한개의 요청에 두개의 메시지를 서술하여 전송하는 것은 아래와 같습니다.

```python
response = queue.send_messages(Entries=[
    {
        'Id': '1',
        'MessageBody': 'world'
    },
    {
        'Id': '2',
        'MessageBody': 'boto3',
        'MessageAttributes': {
            'Author': {
                'StringValue': 'Daniel',
                'DataType': 'String'
            }
        }
    }
])

# 실패 내용 출력하기
print(response.get('Failed'))
```

위 경우 응답에 `Successful`과 `Failed` 메시지의 목록을 포함하고 있으며 필요시 실패한 메시지를 재전송할 수 있습니다.

참조 : [SQS.Queue.send_message()](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.Queue.send_message), [SQS.Queue.send_messages()](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.Queue.send_messages)

## 메시지 처리하기

메시지는 배치에서 처리됩니다.

```python
# 서비스 자원 가져오기
sqs = boto3.resource('sqs')

# 큐 가져오기
queue = sqs.get_queue_by_name(QueueName='test')

# 메시지를 처리하여 본문, 작성자(선택)을 출력하기
for message in queue.receive_messages(MessageAttributeNames=['Author']):
    # 있으면 작성자 메시지 속성을 가져오기
    author_text = ''
    if message.message_attributes is not None:
        author_name = message.message_attributes.get('Author').get('StringValue')
        if author_name:
            author_text = ' ({0})'.format(author_name)
        
    # 본문과 작성자(있으면)를 출력하기
    print('Hello, {0}!{1}'.format(message.body, author_text))
    
    # 큐에게 메시지가 처리되었다고 알리기
    message.delete()
```

이전 절에서 [SQS.Queue.send_messages()](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.Queue.send_messages)로 배치전송된 메시지만 가져오게 된다면 위 코드는 아래와 같이 출력됩니다.

```
Hello, world!
Hello, boto3! (Daniel)
```

참조 : [SQS.Queue.receive_messages()](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.Queue.receive_messages), [SQS.Message.delete()](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/sqs.html#SQS.Message.delete)