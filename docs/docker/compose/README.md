---
description: Introduction and Overview of Compose, Docker Compose에 대한 개요를 설명합니다.
keywords: documentation, docs, docker, compose, orchestration, containers
title: 개요
---

>**Compose 파일에 대한 레퍼런스를 찾으신요?** [마지막 버전은 여기서 확인가능합니다](https://docs.docker.com/compose/compose-file/).

Compose는 다중 컨테이너 Docker 어플리케이션을 정의하고 구동하기 위한 도구입니다.
Compose에서는 어플리케이션 서비스를 YAML 파일을 사용하여 구성할 수 있습니다.
그리고나서 한번의 명령으로 구성으로부터 모든 서비스를 생성하고 시작할 수 있습니다.
Compose의 모든 기능에 대해 알고 싶으면 [기능목록](#특징)을 확인해보세요.

Compose는 모든 환경에서 동작합니다: 운영, 스테이징, 개발, 테스트 등의 CI 워크 플로우. [일반적인 사용예시](#일반적인-사용예시)에서 다양한 경우에 대해 배울 수 있습니다.

Compose는 기본적인 3단계 절차로 사용합니다:

1. `Dockerfile`에 어플리케이션 환경을 정의하고 어디든 생성할 수 있게 합니다.

2. `docker-compose.yml`에 어플리케이션으로 만들 서비스를 정의하고 독립된 환경에서 함께 구동할 수 있게 합니다.

3. `docker-compose up` 을 실행하면 Compose는 전체 어플리케이션을 시작하고 동작하게 합니다.


`docker-compose.yml`은 다음과 같습니다:

``` yaml
version: "3.9"  # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

Compose 파일에 대한 자세한 정보는 [Compose 파일 레퍼런스](compose-file/index.md)를 참고하세요.

Compose는 어플리케이션의 전체 주기를 관리할 명령어를 가지고 있습니다.

* 서비스의 시작, 종료, 재빌드
* 동작중인 서비스의 상태보기
* 동작중인 서비스의 로그출력 보기
* 서비스에서 일회성 명령 수행하기

## Compose 목차

- [Compose 설치](install.md)
- [Compose 시작하기](gettingstarted.md)
- [Django 구성해보기](django.md)
- [Rails 구성해보기](rails.md)
- [WordPress 구성해보기](wordpress.md)
- [자주하는 질문](faq.md)
- [명령어 레퍼런스](reference/index.md)
- [Compose 파일 레퍼런스](compose-file/index.md)

## 특징

Compose는 다음과 같은 특징을 가지고 있습니다:

* [단일호스트에 독립된 다중 환경구성](#단일호스트에-독립된-다중-환경구성)
* [컨테이너 생성시 볼륨데이터 저장](#컨테이너-생성시-볼륨데이터-저장)
* [변경된 컨테이너만 재생성](#변경된-컨테이너만-재생성)
* [다양한 환경조합을 위한 변수지원](#다양한-환경조합을-위한-변수지원)

### 단일호스트에 독립된 다중 환경구성

Compose는 각각 독립된 환경을 위해 프로젝트 이름을 사용합니다. 이것을 활용해서 다양한 컨텍스트를 만들 수 있습니다:

* 개발서버에서는 프로젝트의 기능별 브랜치의 안정화된 버전을 실행하기 위해 단일 환경에서 다수의 복제본을 생성할 수 있습니다.
* CI 서버에서는 서로의 간섭을 방지하기 위해 프로젝트 이름을 빌드번호로 설정하여 보관할 수 있습니다.
* 공유서버 또는 개발서버에서는 다른 프로젝트에서 동일한 서비스명을 사용하여 발생하는 간섭을 방지할 수 있습니다.

다른 프로젝트 이름은 프로젝트 디렉터리의 기본이름이 됩니다. 또는 [`-p` 명령어 옵션](reference/overview.md)이나 [`COMPOSE_PROJECT_NAME` 환경변수](reference/envvars.md#compose-프로젝트-이름)를 통해 설정할 수 있습니다.

### 컨테이너 생성시 볼륨데이터 저장

Compose는 서비스에 의해 사용된 모든 볼륨을 저장합니다.
`docker-compose up`으로 실행하면, 기존에 동작중인 컨테이너를 발견할 경우 해당 볼륨을 새로운 컨테이너로 복사합니다.
이 절차로 인하여 볼륨 데이터의 손실을 방지할 수 있습니다.

윈도우 장비에서 `docker-compose`를 사용하면, [환경변수](reference/envvars.md)를 참고하여 필요한 환경변수를 수정해야합니다.

### 변경된 컨테이너만 재생성

Compose는 컨테이너 생성에 사용된 구성을 캐싱합니다.
변경없이 서비스를 재시작할 경우 Compose는 기존의 컨테이너를 재사용하게 됩니다.
컨테이너의 재사용은 환경에 대한 변경을 아주 빠르게 할 수 있게 합니다.

### 다양한 환경조합을 위한 변수지원

Compose는 Compose 파일에 변수를 지원합니다.
이 변수를 사용하여 다른 환경 또는 사용자의 조합으로 커스터마이징이 가능합니다.
자세한 내용은 [변수치환](compose-file/compose-file-v3.md#변수치환)을 참고하시기 바랍니다.

`extends` 필드를 사용하거나 다수의 파일을 생성하여 Compose 파일을 확장할 수 있습니다.
자세한 내용은 [extends](extends.md)를 참고하시기 바랍니다.

## 일반적인 사용예시

Compose는 다양한 환경에서 사용될 수 있습니다. 아래에서 일반적인 경우를 살펴보시기 바랍니다.

### 개발환경

개발중인 소프트웨어가 있을때, 독립적인 환경에서 어플리케이션을 실행하고 그것과 상호작용하는 것이 중요합니다.
Compose 명령어는 환경울 생성하고 상호작용하는데 사용될 수 있습니다.

[Compose 파일](compose-file/index.md)은 어플리케이션 서비스에 종속되는 모든것(데이터베이스, 큐, 캐시, 웹서비스 API, 등)을 문서화하고 구성할 수 있게 합니다.
Compose 명령어 도구를 사용하면 단일 명령으로(`docker-compose up`) 하나 이상의 컨테이너를 생성/시작할 수 있습니다.

또한, 이러한 기능은 개발자에게 프로젝트를 시작하기 위한 편리한 방법을 제공합니다.
Compose는 단일 장비에 사용할 Compose 파일과 몇개의 명령어로 "개발자 시작 가이드"의 많은 부분을 줄여주게 합니다.

### 테스트자동화환경

연속적 배포 또는 통합과정에서 중요한 부분중에 하나는 자동화된 테스트환경입니다.
자동화된 end-to-end 테스트는 테스트를 수행할 환경이 필요합니다.
Compose는 테스트를 위한 독립적인 환경을 생성하고 삭제하는데 편리한 방법을 제공합니다.
전체 환경울 [Compose 파일](compose-file/index.md)에 정의하고 아래의 명령어로 이 환경울 생성/삭제할 수 있습니다.

```bash
$ docker-compose up -d
$ ./run_tests
$ docker-compose down
```

### 단일호스트배포

Compose는 일반적으로 개발/테스팅 절차에 집중하고 있지만, 운영환경에 기반한 기능도 만들고 있습니다.

운영환경에 기반한 기능에 대한 자세한 내용은 [운영에서의 Compose](production.md)를 참고하시기 바랍니다.

## 릴리즈노트

Docker Compose의 과거/현재 릴리즈에 대한 변경상세 내용을 보려면, [CHANGELOG](https://github.com/docker/compose/blob/master/CHANGELOG.md)를 참고하시기 바랍니다.

## 도움받기

Docker Compose는 개발이 활성화되어있습니다.
도움이 필요하거나 컨트리뷰트를 하거나 같은 사용자들간의 소통을 위해 다양한 채널을 준비하고 있습니다.

* 버그나 파일기능 요청을 보고할 경우: [Github의 이슈추적기](https://github.com/docker/compose/issues)를 활용하세요.
* 실시간으로 프로젝트 관련하여 이야기할 경우: Docker 커뮤니티 슬랙의 `#docker-compose` 채널에 참여하세요.
* 코드나 문서에 컨트리뷰트할 경우: [Github의 pull request](https://github.com/docker/compose/pulls)를 요청하세요.