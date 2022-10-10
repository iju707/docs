---
description: How Compose sets up networking between containers
keywords: documentation, docs, docker, compose, orchestration, containers, networking
title: 네트워크
---

> 이 페이지는 Compose 파일 형식 [버전 2](compose-file/compose-file-v2.md) 또는 [이상](compose-file/index.md)을 다루고 있습니다.
> 네트워크 기능은 Compose 파일 형식 [버전 1(레거시)](compose-file/compose-file-v1.md)에서는 지원하지 않습니다.

기본적으로 Compose는 어플리케이션에 대한 단일 [네트워크](../engine/reference/commandline/network_create.md)를 생성합니다.
서비스의 각각 컨테이너는 기본 네트워크에 연결되며 이 네트워크를 통하여 서로 *연결*되고 컨테이너 이름과 동일한 호스트명으로 서로를 *검색*할 수 있습니다.

> **참고**
> 어플리케이션 네트워크의 이름은 "프로젝트 이름(어플리케이션 디렉터리 이름)"을 기반으로 생성됩니다.
> 프로젝트 이름을 [`--project-name` 플래그](reference/overview.md)나 [`COMPOSE_PROJECT_NAME` 환경변수](reference/envvars.md#compose_project_name)로 덮어쓸 수 있습니다.

예로들어, `myapp`이라는 디렉터리에 어플리케이션이 있고, `docker-compose.yml`은 다음과 같습니다.

```yaml
version: "3.9"
services:
  web:
    build: .
    ports:
      - "8000:8000"
  db:
    image: postgres
    ports:
      - "8001:5432"
```

`docker-compose up` 명령을 실행하면 아래와 같이 처리됩니다.

1.  `myapp_default`라는 이름의 네트워크가 생성됩니다.
2.  `web` 구성을 사용하여 컨테이너가 생성됩니다. `web`이라는 이름으로 `myapp_default` 네트워크에 참여합니다.
3.  `db` 구성을 사용하여 컨테이너가 생성됩니다. `db`라는 이름으로 `myapp_default` 네트워크에 참여합니다.

> **v2.1 이상에서, 오버레이 네트워크는 항상 `attachable`입니다.**
> 
> Compose 파일 형식 2.1로 시작하면, 오버레이 네트워크는 항상 `attachable` 상태로 생성됩니다.
> 이것은 설정불가능합니다.
> 이 의미는 단독 컨테이너도 오버레이 네트워크에 접속할 수 있다는 것 입니다.
> 
> Compose 파일 형식 3.x 에서는 `attachable` 속성을 `false`로 설정할 수 있습니다.

각각의 컨테이너는 호스트명 `web`과 `db`로 검색가능하며, 적절한 컨테이너 IP 주소를 얻게 됩니다.
예로들어, `web` 어플리케이션 코드는 `postgres://db:5432`라는 주소를 접속하여 Postgres 데이터베이스의 사용이 가능합니다.

`HOST_PORT`와 `CONTAINER_PORT`간의 구분이 중요합니다.
위 예제에서, `db`의 `HOST_PORT`는 `8001`이며 컨테이너 포트는 `5432` (Postgres 기본값) 입니다.
네트워크 연결이 가능한 서비스간 통신은 `CONTAINER_PORT`를 사용합니다.
`HOST_PORT`가 정의되면, 서비스는 스웜 밖에서도 접근 가능합니다.

`web` 컨테이너에서 `db` 접근주소는 `postgres://db:5432`와 같습니다.
호스트 머신에서는 접근 주소는 `postgres://{DOCKER_IP}:8001`와 같습니다.

## 컨테이너 업데이트

서비스의 구성을 변경하고 갱신하기 위해 `docker-compose up`을 실행하면 오래된 컨테이너는 삭제되며 새로운 컨테이너가 동일한 이름이지만 다른 IP로 네트워크에 참여합니다.
실행중인 컨테이너는 이름으로 찾고 새로운 주소로 접속합니다. 

컨테이너가 오래된 컨테이너에 접속하고 있는 경우에는 연결이 끊키게 됩니다.
이 상태를 감지하고 다시 이름을 검색한 뒤 재접속하는 것은 컨테이너의 책임입니다.

## 링크

링크는 서비스가 다른 서비스로부터 접근가능하도록 하는 추가적인 별칭을 정의할 수 있게 합니다.
기본적으로 통신하기 위해 서비스를 활성화 할 필요는 없습니다.
기본적으로 다른 서비스는 또 다른 서비스에 서비스 이름을 가지고 접근이 가능합니다.
아래의 예제는 `db` 서비스가 `web` 서비스에 `db`와 `database`라는 호스트명으로 접근가능한 것 입니다. 

```yaml
    version: "3"
    services:

      web:
        build: .
        links:
          - "db:database"
      db:
        image: postgres
```

추가적인 것은 [링크 참조](compose-file/compose-file-v2.md#links)를 확인하시기 바랍니다.

## 다중 호스트 네트워크

Compose 어플리케이션을 [스웜 모드가 활성화](../engine/swarm/index.md)된 도커엔진에 배포할 경우, 다중 호스트 통신을 활성화하기 위하여 내장된 `overlay` 드라이버를 사용하도록 해야합니다.

[스웜 모드 섹션](../engine/swarm/index.md)을 참조하여 스웜 클러스터를 구성하고 [다중 호스트 네트워크로 시작](../network/network-tutorial-overlay.md)하는 방법으로 다중 호스트 오버레이 네트워크에 관하여 배우시기 바랍니다.

## 특정 사용자정의 네트워크

기본 어플리케이션 네트워크를 사용하는 대신, `networks` 상위 키를 활용하여 네트워크를 정의할 수 있습니다.
이것은 좀더 복잡한 토폴로지와 특정 [사용자정의 네트워크 드라이버](../engine/extend/plugins_network/) 및 옵션으로 생성할 수 있게 합니다.
또한 Compose에서 관리되지 않는 외부에서 생성된 네트워크로 서비스에 접속하도록 사용할 수 있습니다.

각각의 서비스는 *서비스-레벨*의 `networks` 키로 접속할 네트워크를 정의할 수 있으며, 내용은 *상위-레벨*의 `networks` 키 아래 정의된 엔트리 이름을 참조하는 목록입니다.

아래 예제는 Compose 파일에 2개의 사용자정의 네트워크를 정의합니다.
`proxy` 서비스는 공통의 네트워크를 공유하고 있지 않기 때문에 `db` 서비스와는 독립되어 집니다.
`app` 서비스만이 나머지 두개 서비스와의 통신이 가능합니다.

```yaml
   version: "3"
    services:

      proxy:
        build: ./proxy
        networks:
          - frontend
      app:
        build: ./app
        networks:
          - frontend
          - backend
      db:
        image: postgres
        networks:
          - backend

    networks:
      frontend:
        # Use a custom driver
        driver: custom-driver-1
      backend:
        # Use a custom driver which takes special options
        driver: custom-driver-2
        driver_opts:
          foo: "1"
          bar: "2"
```

네트워크는 연결된 각각의 네트워크에 대해 [ipv4 주소 또는 ipv6 주소](compose-file/compose-file-v2.md#ipv4_address-ipv6_address)를 설정하여 고정 IP 주소를 구성할 수 있습니다.

네트워크는 또한 [사용자정의 이름](compose-file/compose-file-v3.md#network-configuration-reference)을 줄 수 있습니다. (버전 3.5 이후)

```yaml
    version: "3.5"
    networks:
      frontend:
        name: custom_frontend
        driver: custom-driver-1
```

네트워크 구성에 사용가능한 전체 옵션의 상세내용은 아래 참조를 보시기 바랍니다.

- [상위-레벨 `networks` 키](compose-file/compose-file-v2.md#network-configuration-reference)
- [서비스-레벨 `networks` 키](compose-file/compose-file-v2.md#networks)

## 기본 네트워크 설정

특정 네트워크를 정의하는 대신, `network` 엔트리의 `default` 이름을 활용하여 어플리케이션의 기본 네트워크 설정을 변경할 수 있습니다.

```yaml
    version: "3"
    services:

      web:
        build: .
        ports:
          - "8000:8000"
      db:
        image: postgres

    networks:
      default:
        # Use a custom driver
        driver: custom-driver-1
```

## 기존 네트워크 사용하기

컨테이너가 기존 네트워크에 참여하고자 할 경우, [`external` 옵션](compose-file/compose-file-v2.md#network-configuration-reference)을 사용하면 됩니다.

```yaml
    networks:
      default:
        external:
          name: my-pre-existing-network
```

`[projectname]_default`이름의 네트워크를 생성하는 대신, Compose는 `my-pre-existing-network`라는 네트워크를 찾고 어플리케이션 컨테이너를 해당 네트워크에 참여시킵니다.

<AdsenseB />