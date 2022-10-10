---
title: 환경변수
description: How to set, use and manage environment variables in Compose
keywords: compose, orchestration, environment, env file
---

Compose의 다양한 곳에서 여러가지 의미로 환경변수를 사용합니다.
이번 페이지에서 관련된 필요정보를 확인해볼수 있습니다.

## Compose 파일의 환경변수 대체

Compose 파일내 변수를 추출하여 쉘의 환경변수로 사용할 수 있습니다.

```yaml
web:
  image: "webapp:${TAG}"
```

다수의 환경변수를 가지고 있다면 환경변수파일 경로를 사용해서 대체할 수 있습니다.
기본적으로 `docker-compose` 명령은 동일 프로젝트 디렉터리(Compose 파일이 있는 상위 폴더)의 `.env` 파일을 찾게 됩니다.

파일을 독립변수로 전달하면 어디든 저장하고 이름만 적절하게 지정하면 됩니다.
예로들면, `.env.ci`, `.env.dev`, `.env.prod`와 같습니다.
파일 경로 전달은 `--env-file` 옵션을 사용하면 됩니다.

```shell
docker-compose --env-file ./config/.env.dev up 
```

더 많은 정보는 Compose 파일 참조의 [변수대체](compose-file/compose-file-v3.md#변수대체) 섹션을 참고하시기 바랍니다.

## 컨테이너의 환경변수 설정

`docker run -e VARIABLE=VALUE ...` 명령과 같이 서비스 컨테이너의 환경변수를 [`environment` 키](compose-file/compose-file-v3.md#environment)로 설정할 수 있습니다.

```yaml
web:
  environment:
    - DEBUG=1
```

## 컨테이너의 환경변수 전달

`docker run -e VARIABLE ...` 명령과 같이 서비스의 컨테이너에 [`environment` 키](compose-file/compose-file-v3.md#environment)를 값없이 설정하여 쉘의 환경변수를 전달할 수 있습니다.

```yaml
web:
  environment:
    - DEBUG
```

컨테이너의 `DEBUG` 변수 값은 Compose가 실행된 쉘의 동일 변수값으로 전달됩니다.

## "env_file" 구성 옵션

`docker run --env-file=FILE ...` 명령과 같이 서비스의 컨테이너에 ['env_file' 옵션](compose-file/compose-file-v3.md#env_file)으로 외부파일을 사용하여 다수의 환경변수를 전달할 수 있습니다.

```yaml
web:
  env_file:
    - web-variables.env
```

## `docker-compose run`의 환경변수 설정

`docker run -e`와 같이 `docker-compose run -e`를 사용하여 일회성 컨테이너에 환경변수를 설정할 수 있습니다.

```bash
docker-compose run -e DEBUG=1 web python console.py
```

또한 값을 주지 않으면 쉘의 변수값을 전달할 수 있습니다.

```bash
docker-compose run -e DEBUG web python console.py
```

컨테이너의 `DEBUG` 변수값은 Compose가 실행된 쉘에 동일한 변수의 값으로 전달됩니다.


## ".env" 파일

Compose 파일 또는 구성에서 참조할 환경변수의 기본값을 `.env`라는 [환경파일](env-file.md)에 설정할 수 있습니다.

```bash
$ cat .env
TAG=v1.5

$ cat docker-compose.yml
version: '3'
services:
  web:
    image: "webapp:${TAG}"
```

`docker-compose up`을 실행하면 `web` 서비스는 `webapp:v1.5`을 사용하게 됩니다.
[config 명령어](reference/config.md)로 터미널에 실행중인 어플리케이션 구성을 출력하여 검증할 수 있습니다.

```bash
$ docker-compose config

version: '3'
services:
  web:
    image: 'webapp:v1.5'
```

쉘의 값이 `.env` 파일에 정의된것보다 우선되어집니다.
쉘에서 `TAG`를 다른값으로 설정하면 `image`에 치환되는 값이 변경됩니다.

```bash
$ export TAG=v2.0
$ docker-compose config

version: '3'
services:
  web:
    image: 'webapp:v2.0'
```

다수의 파일에 동일한 환경변수를 설정하면, Compose는 아래의 우선순위로 값을 선택하게 됩니다.

1. Compose 파일
2. 쉘 환경변수
3. 환경 파일
4. Dockerfile
5. 정의되지 않은 변수

아래의 예제는 환경파일과 Compose 파일에 동일한 환경변수를 설정한 것 입니다.

```bash
$ cat ./Docker/api/api.env
NODE_ENV=test

$ cat docker-compose.yml
version: '3'
services:
  api:
    image: 'node:6-alpine'
    env_file:
     - ./Docker/api/api.env
    environment:
     - NODE_ENV=production
```

컨테이너를 실행하면 환경변수는 Compose 파일에 정의된 값을 사용하게 됩니다.

```bash
$ docker-compose exec api node

> process.env.NODE_ENV
'production'
```

Docker Compose 항목에 `environment`나 `env_file`이 없는 경우에만 `Dockerfile`에 `ARG`나 `ENV`를 처리하게 됩니다.

> NodeJS 컨테이너 세부사항
>
> `package.json`에 `script:start`를 위해 `NODE_ENV=test node server.js`와 같이 설정되어있으면 `docker-compose.yml` 파일에 설정된건 무시됩니다.

## 환경변수를 사용하여 Compose 구성

다수의 환경변수는 Docker Compose 명령어 방식으로 구성할 수 있습니다.
이것은 `COMPOSE_`나 `DOCKER_`로 시작하며 자세한 것은 [CLI 환경변수](reference/envvars.md)를 참고하세요.

## links를 활용한 환경변수

[v1 Compose 파일](compose-file/compose-file-v1.md#link-environment-variables)에 ['links' 옵션](compose-file/compose-file-v3.md#links)을 사용할 경우, 환경변수는 각각의 링크에 생성됩니다.
이 변수는 만료되었습니다.
like 별칭대신 hostname을 사용하시기 바랍니다.

<AdsenseB />