---
description: How to use Docker Compose's extends keyword to share configuration between files and projects
keywords: fig, composition, compose, docker, orchestration, documentation, docs
title: 구성 공유하기
---

Compose는 공통 속성을 공유하는 두가지 방법을 제공합니다.

1. [다중 Compose 파일 사용](extends.md#다중-Compose-파일)으로 Compose 파일 전체를 확장하기
2. [`extends` 항목](extends.md#서비스-확장)으로 개별 서비스 확장하기 (Compose 파일 버전 2.1 이상)

## 다중 Compose 파일

다중 Compose 파일을 사용하는 것은 Compose 어플리케이션을 다른 환경 또는 워크플로우로 커스터마이징할 수 있게 합니다.

### 다중 Compose 파일 이해하기

기본적으로, Compose는 `docker-compose.yml`과 선택적으로 `docker-compose.override.yml`파일을 읽습니다.
관례상 `docker-compose.yml`은 기본 구성을 포함합니다.
이름에서 알 수 있듯, 대체파일은 기존 서비스 또는 전체 새로운 서비스로 덮어쓰는 구성을 포함합니다.

서비스가 두개의 파일 모두 정의되어있으면, Compose는 [구성의 추가 및 덮어쓰기](extends.md#구성의-추가-및-덮어쓰기)에서 설명한 규칙을 사용하여 구성을 병합합니다.

다중 재작성 파일들 또는 다른 이름의 재작성 파일을 사용할 경우 파일의 목록을 선언하기 위하여 `-f` 옵션을 사용하면 됩니다.
Compose는 명령어에 선언된 순서대로 파일들을 병합하게 됩니다.
`-f` 사용법에 대한 자세한 내용은 [`docker-compose` 명령어 참조](reference/overview.md)를 확인해보시기 바랍니다.

다중 구성 파일을 사용할 때, 파일의 모든 경로가 기본 Compose 파일(`-f` 옵션에 최초 선언된 Compose 파일)에 상대경로여야 합니다.
이것은 재작성 파일들이 유효한 Compose 파일이 아니어도 되기 때문에 필요합니다.
재작성 파일은 구성의 작은 부분을 포함하게 됩니다.
서비스의 구성이 어느 경로를 참조하는지 추적하는 것은 어렵고 혼란스럽습니다.
따라서 쉽게 이해하기 위해서 모든 경로는 기본 파일의 상대 경로로 작성되어야 합니다.

### 사용예제

이번 장에서는 다중 Compose 파일의 두가지 일반 사용예제를 소개합니다.
* 다른 환경으로 Compose 어플리케이션 변경하기
* Compose 어플리케이션에서 관리적 행동 수행하기

#### 다른 환경
다중 파일의 일반적 사용예제는 개발 Compose 어플리케이션을 운영과 유사한 환경(운영 또는 스테이징, CI)으로 변경하는 것 입니다.
이 차이점을 지원하기 위해 Compose 구성을 몇가지 다른 파일로 나눠야 합니다.

기본 파일을 서비스의 정식 구성으로 정의합니다.

**docker-compose.yml**

```yaml
    web:
      image: example/my_web_app:latest
      depends_on:
        - db
        - cache

    db:
      image: postgres:latest

    cache:
      image: redis:latest
```

이번 예제의 개발 구성에서는 호스트에 포트를 노출하고 코드를 볼륨으로 마운트하고 web 이미지를 빌드합니다.

**docker-compose.override.yml**

```yaml
    web:
      build: .
      volumes:
        - '.:/code'
      ports:
        - 8883:80
      environment:
        DEBUG: 'true'

    db:
      command: '-d'
      ports:
        - 5432:5432

    cache:
      ports:
        - 6379:6379
```

`docker-compose up` 명령을 수행하면 재작성된 내용을 자동으로 읽게 됩니다.

이젠, 이 Compose 어플리케이션을 운영환경에 사용해보겠습니다.
따라서 (다른 git 레포지토리에 저장되거나 다른 팀에 관리되는) 다른 재작성 파일을 생성합니다.

**docker-compose.prod.yml**

```yaml
    web:
      ports:
        - 80:80
      environment:
        PRODUCTION: 'true'

    cache:
      environment:
        TTL: '500'
```

운영의 Compose 파일을 배포하려면 다음 명령을 수행합니다.

```shell
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

`docker-compose.yml`과 `docker-compose.prod.yml` 파일의 구성을 사용하여 세개의 서비스를 배포하게 됩니다.
개발 구성인 `docker-compose.override.yml`는 사용되지 않습니다.

Compose의 운영환경 사용법은 [운영환경](production.md) 에서 확인해보시기 바랍니다.

#### 관리업무

다른 일반적인 사용예제는 Compose 어플리케이션에서 하나 이상의 서비스에 대한 임시 또는 관리성 업무를 수행하는 것 입니다.
아래 예제는 데이터베이스 백업에 관련된 것 입니다.

**docker-compose.yml** 로 시작하겠습니다.

```yaml
    web:
      image: example/my_web_app:latest
      depends_on:
        - db

    db:
      image: postgres:latest
```

**docker-compose.admin.yml**에는 데이터베이스의 내보내기 또는 백업을 실행할 새로운 서비스를 추가합니다.

```yaml
    dbadmin:
      build: database_admin/
      depends_on:
        - db
```

일반적인 환경은 `docker-compose up -d` 명령으로 시작합니다.
데이터베이스 백업을 실행할 경우 `docker-compose.admin.yml`을 아래와 같이 포함시킵니다.

```console
    docker-compose -f docker-compose.yml -f docker-compose.admin.yml \
        run dbadmin db-backup
```

## 서비스 확장

> **참고**
> 
> `extends` 키워드는 Compose 파일 버전 2.1까지 지원되고 있습니다.
> ([v1의 extends](compose-file/compose-file-v1.md#extends)와 [v2의 extends](compose-file/compose-file-v2.md#extends) 참고)
> 하지만, Compose 버전 3.x부터 지원되지 않습니다.
> [버전 3 요약](compose-file/compose-versioning.md#version-3)에서 추가 삭제된 키워드를 볼 수 있으며 [어떻게 업그레이드해야되는지](compose-file/compose-versioning.md#upgrading) 정보를 제공하고 있습니다.
> [moby/moby#31101](https://github.com/moby/moby/issues/31101)에 보시면 차후 버전에 일부형태로 `extends`를 추가지원할 가능성에 대하여 논의하는 쓰레드를 볼 수 있습니다.

Docker Compose는 `extends` 키워드로 다른 파일 똔느 다른 프로젝트 전체에 공통 구성을 공유할 수 있도록 합니다.
서비스 확장은 다양한 서비스를 가지고 있을 때 공통 구성옵션 집합을 재사용할 수 있게하여 유용합니다.
`extends`를 사용하면 서비스 옵션의 공통 집합을 한곳에 정의하고 어디든 참조할 수 있습니다.

Keep in mind that `volumes_from` and `depends_on` are never shared between
services using `extends`. These exceptions exist to avoid implicit
dependencies; you always define `volumes_from` locally. This ensures
dependencies between services are clearly visible when reading the current file.
Defining these locally also ensures that changes to the referenced file don't
break anything.

### 확장구성 이해하기

`docker-compose.yml`에 서비스를 정의할 때, 다음과 같이 확장된 다른 서비스를 정의할 수 있습니다.

```yaml
    web:
      extends:
        file: common-services.yml
        service: webapp
```

이것은 `common-services.yml` 파일에 정의된 `webapp`서비스에 대한 구성을 재사용한다는 것 입니다.
`common-services.yml`에 다음과 같이 정의되어있다고 하겠습니다.

```yaml
    webapp:
      build: .
      ports:
        - "8000:8000"
      volumes:
        - "/data"
```

이 경우, `docker-compose.yml`에 동일한 `build`, `ports`와 `volumes` 구성값을 `web` 하위에 정의한 것과 같은 결과를 가지게 됩니다.

또한 `docker-compose.yml` 파일 내에 구성을 정의 (또는 재정의)가 가능합니다.

```yaml
    web:
      extends:
        file: common-services.yml
        service: webapp
      environment:
        - DEBUG=1
      cpu_shares: 5

    important_web:
      extends: web
      cpu_shares: 10
```

다른 서비스를 작성해도 되며, `web`서비스에 연결해도 됩니다.

```yaml
    web:
      extends:
        file: common-services.yml
        service: webapp
      environment:
        - DEBUG=1
      cpu_shares: 5
      depends_on:
        - db
    db:
      image: postgres
```

### 사용예제

개별 서비스를 확장하는 것은 공통 설정을 가지고 있는 다수의 서비스를 가지고 있을 때 유용합니다.
아래 예제는 두개의 서비스를 가진 Compose 어플리케이션 입니다. 웹 어플리케이션, 큐 워커.
두 서비스는 동일한 코드기반을 사용하고 많은 공통옵션을 가지고 있습니다.

**common.yaml**에 공통 구성을 정의합니다.

```yaml
    app:
      build: .
      environment:
        CONFIG_FILE_PATH: /code/config
        API_KEY: xxxyyy
      cpu_shares: 5
```

**docker-compose.yml**에 공통 설정을 사용하는 구체적인 서비스를 정의합니다.

```yaml
    webapp:
      extends:
        file: common.yml
        service: app
      command: /code/run_web_app
      ports:
        - 8080:8080
      depends_on:
        - queue
        - db

    queue_worker:
      extends:
        file: common.yml
        service: app
      command: /code/run_worker
      depends_on:
        - queue
```

## 구성의 추가 및 덮어쓰기

Compose는 원본 서비스에서 로컬로 구성을 복사할 수 있습니다.
만약 고성 옵션이 원본 서비스와 로컬 서비스에 함께 정의되어있으면, 로컬 값이 원본 값을 *대체*하거나 *확장*합니다.

`image`나 `command`, `mem_limit`과 같은 단일값 옵션의 경우 새로운 값이 기존 값을 대체합니다.

```yaml
    # original service
    command: python app.py

    # local service
    command: python otherapp.py

    # result
    command: python otherapp.py
```

> Compose 파일 버전 1의 `build`와 `image`
>
> `build`와 `image`의 경우, [Compose 파일 버전 1 형식](compose-file/compose-file-v1.md)을 사용할 경우,
> Compose는 로컬 서비스의 옵션을 사용하고 원본 서비스에 정의되어있는 다른 옵션은 포기하게 됩니다.
>
> 예로, 원본 서비스에 `image: webapp`이 정의되어있고, 로컬 서비스에 `build: .`로 되어있다고 하면 결과적으로 `image`옵션은 없고 `build: .`를 가지게 됩니다.
>
> 이것은 버전 1 파일에서 `build`와 `image`가 동시에 사용불가능하기 때문입니다.

`ports`나 `expose`, `external_links`, `dns`, `dns_search`, `tmpfs`와 같은 **다중값 옵션**의 경우 Compose는 두 값을 병합합니다.

```yaml
    # original service
    expose:
      - "3000"

    # local service
    expose:
      - "4000"
      - "5000"

    # result
    expose:
      - "3000"
      - "4000"
      - "5000"
```

`environment`와 `labels`, `volumes`, `devices`의 경우, Compose는 로컬에 정의한 값을 우선으로 두가지를 병합합니다.
`environment`와 `labels`는 환경변수 또는 라벨 이름으로 사용할 값을 결정합니다.

```yaml
    # original service
    environment:
      - FOO=original
      - BAR=original

    # local service
    environment:
      - BAR=local
      - BAZ=local

    # result
    environment:
      - FOO=original
      - BAR=local
      - BAZ=local
```

`volumes`와 `devices`의 항목은 컨테이너의 마운트 경로 기준으로 병합됩니다.

```yaml
    # original service
    volumes:
      - ./original:/foo
      - ./original:/bar

    # local service
    volumes:
      - ./local:/bar
      - ./local:/baz

    # result
    volumes:
      - ./original:/foo
      - ./local:/bar
      - ./local:/baz
```

## Compose 문서

- [사용자가이드](index.md)
- [Compose 설치하기](install.md)
- [시작하기](gettingstarted.md)
- [명령어 레퍼런스](reference/index.md)
- [Compose 파일 레퍼런스](compose-file/index.md)
- [Compose를 활용한 샘플 어플리케이션](samples-for-compose.md)