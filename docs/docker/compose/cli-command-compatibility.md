---
description: Compose command compatibility with docker-compose
keywords: documentation, docs, docker, compose, containers
title: Compose 명령어와 docker-compose 간의 호환성
---

Docker CLI의 `compose` 명령은 `docker-compose` 명령 및 플래그의 대부분을 지원합니다.
`docker-compose`에서 사용하던 코드나 설정변경없이 사용가능할 것으로 예상됩니다.

`compose`명령에서 사용이 불가능한 Compose 기능이 있다면, [Compose](https://github.com/docker/compose/issues) 깃허브 리포지토리에 이슈를 생성해주시면 우선검토하도록 하겠습니다.

## 아직 구현안된 명령 및 플래그

아래의 명령어는 아직 구현이 되어있지 않으며, 추후 구현할 예정입니다.
이러한 명령이 사용사례에서 더 높은 우선순위인지 알려주세요.

`compose build --memory`: 이 옵션은 아직 buildkit에서 지원하지 않습니다. 플래그는 현재 지원하고 있지만 Compose 사용에 충돌되지 않도록 숨김처리되었습니다. 따라 플래그를 사용하더라도 별도 영향이 없습니다.

## 구현되지 않을 플래그

아래의 목록에 포함된 플래그는 Docker CLI의 Compose에서 지원할 계획이 없습니다. 이미 `docker-compose`에서 비활성화 되었거나, Docker CLI의 Compose에 관련이 없기 때문입니다.

* `compose ps --filter KEY-VALUE` : `service` 명령과의 복잡한 사용법으로 인해 관련이 없고 `docker-compose`에서도 제대로 문서화가 되어있지 않습니다.
* `compose rm --all` : docker-compose에서 비활성화 되었습니다.
* `compose scale` : docker-compose에서 비활성화 되었습니다. (`compose up --scale`를 대신 사용하세요)

전역 플래그:

* `--compatibility`는 Docker Compose V2에서 새롭게 정의되었습니다. 이제 이것의 의미는 V2에서 수행하는 명령을 V1에서 하는것과 동일하게 하는 것 입니다.
    * 한가지 다른점은 컨테이너 이름의 단어 구분자 입니다. V1에서 `_`로 사용하는 것을 V2에서는 호스트이름에 좀더 맞도록 `-`를 사용합니다.
      그래서 Docker Compose에서 `--compatibility`를 적용하면 `_`를 다시 사용합니다.
      따라서 한가지만 선택해서 잘 적용해야 됩니다. 그렇지 않으면 Docker Compose가 컨테이너를 서비스의 인스턴스로 인식하지 못할 수 있습니다. able to recognize the container as an instance of the service.

## Config 명령

config 명령은 실제 프로젝트를 실행할 때 Docker Compose에서 사용할 설정을 보여주기 위한 것입니다.
알다시피, Compose 파일의 일부는 짧거나 긴 포맷을 가지고 있습니다. 예로 `ports` 엔트리 같은 것 입니다.
아래 예제에서 config 명령을 통해 `ports` 섹션을 확장해서 볼 수 있습니다.

docker-compose.yml:
```
services:
  web:
    image: nginx
    ports:
      - 80:80
```

`$ docker compose config` 명령을 실행하면 다음과 같은 출력이 나옵니다.

```
services:
  web:
    image: nginx
    networks:
      default: null
    ports:
    - mode: ingress
      target: 80
      published: 80
      protocol: tcp
networks:
  default:
    name: workspace_default
```

위 결과는 Docker Compose가 실행하는 프로젝트에서 사용되는 전체길이의 설정정보입니다.

<AdsenseB />