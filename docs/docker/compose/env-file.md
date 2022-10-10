---
description: Declare default environment variables in a file
keywords: fig, composition, compose, docker, orchestration, environment, env file
title: 환경변수 파일 정의하기
---

Compose는 기본 환경변수를 `docker-compose` 명령이 실행될 폴더 *(현재 작업 디렉터리)* 에 `.env`라는 이름의 환경파일로 정의가능합니다.

## 문법 규칙

`.env` 파일에 적용될 문법 규칙은 다음과 같습니다.

* Compose는 `env`파일에 `변수=값` 유형으로 한줄씩 입력됩니다.
* `#`으로 시작하면 해당 줄은 주석으로 간주하고 무시합니다.
* 공백줄도 무시합니다.
* 따옴표를 별도로 처리하지 않습니다. 그 의미는 **모두 값으로 간주** 됨을 의미합니다.

## Compose 파일과 CLI 변수

환경변수는 [변수 치환](compose-file/compose-file-v3.md#variable-substitution)을 위해 사용될 수 있고, 아래의 [CLI 변수](reference/envvars.md) 정의에도 사용될 수 있습니다.

- `COMPOSE_API_VERSION`
- `COMPOSE_CONVERT_WINDOWS_PATHS`
- `COMPOSE_FILE`
- `COMPOSE_HTTP_TIMEOUT`
- `COMPOSE_PROFILES`
- `COMPOSE_PROJECT_NAME`
- `COMPOSE_TLS_VERSION`
- `DOCKER_CERT_PATH`
- `DOCKER_HOST`
- `DOCKER_TLS_VERIFY`

> **참고**
>
> * 런타임시 환경에 있는 값은 항상 `.env` 파일안에 정의된 것으로 덮어써집니다. 비슷하게 명령어 매개변수가 더 우선됩니다.
> * `.env` 파일에 정의된 환경변수는 자동으로 컨테이너에 보여지는것은 아닙니다. 컨테이너가 사용가능하도록 하려면 쉘에서 컨테이너로 변수넘기기, Compose 파일에 환경변수 정의하기 등의 [Compose의 환경변수](environment-variables.md) 주제 가이드를 따라야 합니다.

## Compose 문서 더보기

- [사용자 가이드](index.md)
- [Compose 설치하기](install.md)
- [시작하기](gettingstarted.md)
- [명령어 레퍼런스](reference/index.md)
- [Compose 파일 레퍼런스](compose-file/index.md)
- [Compose를 활용한 샘플 어플리케이션](samples-for-compose.md)

<AdsenseB />