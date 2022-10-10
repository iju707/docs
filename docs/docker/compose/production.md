---
description: Guide to using Docker Compose in production
keywords: compose, orchestration, containers, production
title: 운영환경 사용
---

개발환경에서 Compose로 어플리케이션을 정의할 때, 이 정의를 CI, 스테이징, 운영환경 등 다른 환경에서 어플리케이션을 실행하기 위해 사용할 수 있습니다.

어플리케이션을 배포하기 가장 쉬운방법은 개발환경에서 실행하는 것과 유사하게 단일 서버에 실행하는 것 입니다.
어플리케이션의 스케일 확장이 필요한 경우, Compose 어플리케이션을 스웜 클러스터에 실행하면 됩니다.

### 운영환경을 위한 Compose 파일 수정

아마도 운영에 적합하게 만들려면 어플리케이션의 구성을 변경해야할 것입니다.
변경에는 다음 사항이 포함될 것 입니다.

- 어플리케이션 코드가 있는 볼륨 바인딩 제거하여 코드는 컨테이너 내부에만 있고 밖에서 변경이 불가능하도록 함
- 호스트의 다른 포트로 바인딩
- 다른 환경변수로 설정, 예로 로깅 수준 감소, 이메일 서버와 같은 외부 서비스 설정 변경
- 중단 시간 방지를 위하여 `restart: always`와 같은 재시작 정책 정의
- 로그 수집기 같은 추가 서비스 추가

이와 같은 이유로, `production.yml`이라는 운영에 적합한 구성을 정의한 추가적인 Compose 파일 정의를 고려하게 됩니다.
이 구성파일은 원본 Compose 파일에서 변경하고 싶은 내용만 포함하게 됩니다.
추가적인 Compose 파일은 원본 `docker-compose.yml`에 병합되어 새로운 구성을 만들게 됩니다.

두번째 구성파일이 생기면, `-f` 옵션을 활용하여 해당 파일을 사용한다고 Compose에 전달해야합니다.

```shell
docker-compose -f docker-compose.yml -f production.yml up -d
```

더 복잡한 예제는 [다중 Compose 파일 사용](extends.md#다른-환경)을 참고하세요.

### 변경 배포

어플리케이션 코드의 변경이 있으면 이미지를 재빌드하고 어플리케이션 컨테이너를 재생성해야함을 기억해야합니다.
`web` 서비스를 재배포할 경우 다음과 같습니다.

```shell
    $ docker-compose build web
    $ docker-compose up --no-deps -d web
```

첫번째로 `web`을 위한 이미지를 재빌드하고 `web` 서비스 *하나만* 중지, 삭제, 재생성을 합니다.
`--no-deps` 항목은 Compose에서 `web`에 의존되어있는 다른 서비스의 재생성을 방지합니다.

### 단일 서버에서 Compose 실행

`DOCKER_HOST`, `DOCKER_TLS_VERIFY`, `DOCKER_CERT_PATH` 환경변수를 적절하게 설정하면 원격 도커 호스트에 어플리케이션을 배포하도록 Compose를 사용할 수 있습니다.

환경변수를 한번만 설정하면 모든 일반적인 `docker-compose` 명령은 추가구성없이 동작합니다.

## Compose 문서

- [사용자가이드](index.md)
- [Compose 설치하기](install.md)
- [시작하기](gettingstarted.md)
- [명령어 레퍼런스](reference/index.md)
- [Compose 파일 레퍼런스](compose-file/index.md)
- [Compose를 활용한 샘플 어플리케이션](samples-for-compose.md)

<AdsenseB />