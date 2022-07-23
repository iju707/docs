---
description: How to control service startup and shutdown order in Docker Compose
keywords: documentation, docs, docker, compose, startup, shutdown, order
title: 시작과 종료 순서 제어하기
---

[depends_on](compose-file/compose-file-v3.md#depends_on) 옵션을 사용해서 서비스의 시작과 종료 순서를 제어할 수 있습니다.
Compose는 항상 `depends_on`, `links`, `volumes_from`, and `network_mode: "service:..."` 에서 결정되는 의존성을 가지고 그 순서대로 컨테이너를 시작과 종료하게 됩니다.

그러나, Compose의 시작에서 컨테이너가 "대기" 상태가 될때까지 기다리지 않고, 실행중만 되면 다음 단계로 처리합니다. 여기에는 그럴만한 이유가 있습니다.

예를 들어, 데이터베이스를 기다리는 문제는 분산 시스템에서 발생하는 더 큰 문제들의 일부일 뿐입니다. 운영환경에서는 언제든지 데이터베이스를 사용할 수 없게 되거나, 호스트의 이동이 발생하게 됩니다. 어플리케이션은 이런 유형의 실패에 탄력적 대응이 가능해야합니다.

이를 처리하려면 실패 후 데이터베이스에 대한 연결을 다시 설정하도록 어플리케이션을 설계해야합니다. 연결을 재시도하면 결국 데이터베이스에 연결할 수 있게 됩니다.

가장 좋은 해결책은 시작할 때와 어떤 이유로 연결이 끊길 때마다 어플리케이션 코드에서 이 검사를 수행하는 것 입니다. 그러나 이 수준의 복원력이 필요하지 않은 경우 래퍼 스크립트를 사용하여 해결할 수 도 있습니다.

- [wait-for-it](https://github.com/vishnubob/wait-for-it) 또는 [dockerize](https://github.com/jwilder/dockerize), sh-호환되는 [wait-for](https://github.com/Eficode/wait-for), [RelayAndContainers](https://github.com/jasonsychau/RelayAndContainers) 템플릿과 같은 툴을 사용할 수 있습니다. 이것은 TCP 연결을 수락할 때까지 주어진 호스트와 포트를 폴링하기 위해 어플리케이션 이미지에 포함할 수 있는 작은 래퍼 스크립트입니다.

  예로들어, `wait-for-it.sh` 또는 `wait-for` 를 서비스 명령에 래핑해서 사용하고자 한다면 다음과 같습니다.

  ```yaml
  version: "2"
  services:
    web:
      build: .
      ports:
        - "80:8000"
      depends_on:
        - "db"
      command: ["./wait-for-it.sh", "db:5432", "--", "python", "app.py"]
    db:
      image: postgres
  ```

  > **팁**
  >
  > 첫번째 솔루션에는 제약사항이 있습니다. 예로들어, 특정 서비스가 정말로 준비되었는지 검증하지 않습니다. 명령어에 더 많은 인수를 추가할 경우, 다음 예제와 같이 루프와 함께 `bash shift` 명령을 사용하세요.

- 대안으로, 어플리케이션에 맞는 상태체크를 수행하는 래퍼 스크립트를 작성하는 것 입니다. 아래예제는 Postgres가 명령을 수행할 준비가 될때까지 대기하는 것 입니다.

  ```bash
  #!/bin/sh
  # wait-for-postgres.sh

  set -e
  
  host="$1"
  shift
  cmd="$@"
  
  until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U "postgres" -c '\q'; do
    >&2 echo "Postgres is unavailable - sleeping"
    sleep 1
  done
  
  >&2 echo "Postgres is up - executing command"
  exec $cmd
  ```

  이전 예제에서 다음 설정으로 래퍼 스크립트를 사용할 수 있습니다.
- 
  ```yaml
  command: ["./wait-for-postgres.sh", "db", "python", "app.py"]
  ```

## Compose 문서

- [사용자가이드](index.md)
- [Compose 설치하기](install.md)
- [시작하기](gettingstarted.md)
- [명령어 레퍼런스](reference/index.md)
- [Compose 파일 레퍼런스](compose-file/index.md)
- [Compose를 활용한 샘플 어플리케이션](samples-for-compose.md)