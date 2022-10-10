---
title: 프로필 사용
desription: Using profiles with Compose
keywords: cli, compose, profile, profiles reference
---

프로필은 선택적 서비스 활성화로 Compose 어플리케이션 모델을 다양한 용도 및 환경에 사용할 수 있게 합니다.
각 서비스를 0개 이상의 프로필에 매핑하면 됩니다.
매핑되지 않은 경우, 서비스는 _항상_ 시작하며, 매핑되면 해당 프로필이 활성화 된 경우에만 시작됩니다.

이것은 하나의 `docker-compose.yml`에 추가적인 서비스를 정의할 수 있게 합니다.
디버깅이나 개발환경과 같은 특수한 시나리오를 시작가능하게 합니다.

## 서비스에 프로필 매핑

서비스는 프로필 이름의 배열을 받는 [`profiles` 속성](compose-file/compose-file-v3.md#profiles)을 통해 프로필에 할당될 수 있습니다.

```yaml
version: "3.9"
services:
  frontend:
    image: frontend
    profiles: ["frontend"]

  phpmyadmin:
    image: phpmyadmin
    depends_on:
      - db
    profiles:
      - debug

  backend:
    image: backend

  db:
    image: mysql
```

`frontend`와 `phpmyadmin` 서비스는 `frontend`와 `debug` 프로필에 연결되어있으며 해당 프로필이 활성화 된 경우에만 서비스를 시작하게 됩니다.

`profiles` 속성이 없는 서비스는 _항상_ 활성화 됩니다. 예로, 위 상태에서 `docker-compose up`을 실행하면 `backend`와 `db`만 시작됩니다.

프로필 이름은 `[a-zA-Z0-9][a-zA-Z0-9_.-]+` 정규식 유형에 맞게 작성되어야 합니다.

> **정보**
>
> 어플리케이션의 주요 서비스는 `profiles`에 매핑되어있지 않아야 합니다. 그래야 항상 활성 및 자동적으로 시작됩니다.

## 프로필 활성화

프로필을 활성화하려면 `--profile` [명령어 옵션](reference/overview.md) 또는 [`COMPOSE_PROFILES` 환경변수](reference/envvars.md#compose_profiles)를 사용할수 있습니다.

```sh
$ docker-compose --profile debug up
$ COMPOSE_PROFILES=debug docker-compose up
```

위 명령어 둘다 `debug` 프로필을 활성화한 뒤 어플리케이션을 시작하는 것 입니다.
위의 `docker-compose.yml` 파일을 사용할 경우 `backend`, `db`, `phpmyadmin`을 시작하게 됩니다.

다수의 프로필은 다수의 `--profile` 플래그를 전달하거나 `COMPOSE_PROFILES` 환경변수에 쉼표로 구분된 것을 전달하면 됩니다.

```sh
$ docker-compose --profile frontend --profile debug up
$ COMPOSE_PROFILES=frontend,debug docker-compose up
```

## 자동활성 프로필 및 종속성 해결

`profiles`가 할당된 서비스를 명령어에 명시할 경우 해당 프로필을 자동으로 활성화합니다.
이것은 일회성 서비스나 디버깅 도구등에 사용됩니다.
예를 들어 아래의 구성을 보겠습니다.

```yaml
version: "3.9"
services:
  backend:
    image: backend

  db:
    image: mysql

  db-migrations:
    image: backend
    command: myapp migrate
    depends_on:
      - db
    profiles:
      - tools
```

```sh
# backend와 db만 시작합니다
$ docker-compose up -d

# 암묵적으로 `tools` 프로필을 활성화 하고 db-migrations를 실행합니다.
# (필요시 db를 시작합니다)
$ docker-compose run db-migrations
```

그러나 `docker-compose`는 명령어에 있는 서비스의 프로필만 자동으로 활성화 해주는 것이며 그에 종속된 서비스의 프로필은 활성화 되지 않습니다.
따라서 `depends_on`의 대상이 되는 모든 서비스는 공통 프로필을 가져서(또는 `profiles` 생략) 항상 활성화되거나 명시적으로 프로필을 활성화 해야합니다.

```yaml
version: "3.9"
services:
  web:
    image: web

  mock-backend:
    image: backend
    profiles: ["dev"]
    depends_on:
      - db

  db:
    image: mysql
    profiles: ["dev"]

  phpmyadmin:
    image: phpmyadmin
    profiles: ["debug"]
    depends_on:
      - db
```

```sh
# "web"만 시작합니다
$ docker-compose up -d

# 암묵적으로 `dev` 프로필을 활성화 하고 mock-backend를 시작합니다.
# (필요시 db 포함)
$ docker-compose up -d mock-backend

# "dev" 프로필이 비활성화 되어있어 실패합니다
$ docker-compose up phpmyadmin
```

`phpmyadmin`을 대상으로 하는 것은 자동으로 그 프로필을 활성화 합니다. - 예. `debug`
하지만 종속된 `db`에 대한 프로필을 자동으로 활성화 하지는 않습니다. - 예. `dev`
따라서 이것을 수정하려면 `db`서비스에 `debug` 프로필을 추가합니다.

```yaml
db:
  image: mysql
  profiles: ["debug", "dev"]
```

또는 `db`의 프로필을 명시적으로 활성화 합니다.

```sh
# phpmyadmin을 대상으로 하였기 때문에 프로필 "debug"는 자동으로 활성화가 됩니다.
$ docker-compose --profile dev up phpmyadmin
$ COMPOSE_PROFILES=dev docker-compose up phpmyadmin
```

## Compose 문서 더보기

- [사용자 가이드](index.md)
- [Compose 설치하기](install.md)
- [시작하기](gettingstarted.md)
- [명령어 레퍼런스](reference/index.md)
- [Compose 파일 레퍼런스](compose-file/index.md)
- [Compose를 활용한 샘플 어플리케이션](samples-for-compose.md)

<AdsenseB />