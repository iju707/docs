---
description: Docker Compose
keywords: compose, V2
title: Compose V2
---

## Compose V2와 새로운 `docker compose` 명령어

> **중요**
>
> Docker CLI의 `compose` 명령으로 지원되는 새로운 Compose V2가 이제 사용가능합니다.
> Compose V2는 Compose의 기능을 Docker 플랫폼에 포함시켜 통합하였으며, 기존 `docker-compose`의 기능 및 플래그를 대부분 지원하게 됩니다.
> 대시(`-`)를 스페이스로 변경한, `docker-compose` 대신 `docker compose`로 실행하여 Compose V2를 테스트 할 수 있습니다.

Docker Desktop 3.4.0에서는 기존 `docker-compose`를 새로운 명령으로 변경하여 호출을 변경하지 않고 Compose V2 명령을 실행할 수 있습니다.
교체 활성화에 대한 자세한 방법은 [Compose V2 설치하기](#compose-v2-설치하기) 섹션을 함께 보세요.

## Docker Compose의 진화된 내용

[Compose 사양](https://github.com/compose-spec/compose-spec)의 소개에서 Compose YAML 파일 모델과 `docker-compose`구현에 대한 차이를 명확하게 구별해줍니다.
이러한 변경으로 `compose` 명령이 Docker CLI에 직접 추가되고 단순히 Dokcer 컨텍스트를 전환하여 Compose 어플리케이션을 클라우드 플랫폼에 "up" 시키고 [Amazon ECS](/cloud/ecs-integration)와 [Microsoft ACI](/cloud/aci-integration)에 출시할수 있게하는 등의 다양한 개선이 되었습니다.

Compose 사양이 발전함에 따라, Docker CLI에 새로운 기능이 더 빨리 제공됩니다.

`docker-compose`가 계속 지원되고 유지보수될때까지는 Compose V2 구현은 Compose의 방향 중 일부 사양으로 직접 포함되어 진행될 것 입니다.
이를 통해 커뮤니티 제안, Docker CLI 및/또는 엔진에 의한 실험적 구현을 포함하고 사용자에게 더 빠르게 기능을 제공할 수 있습니다.
또한 [profiles](profiles.md)와 [GPU](gpu-support.md) 장치 같은 새로 추가된 Compose 사양의 일부를 지원합니다.

게다가, Compose V2는 [Apple silicon](../desktop/mac/apple-silicon.md)을 지원합니다.

새로운 Compose 명령에 지원되는 플래그 관련 추가적 정보는 [docker-compose 호환성 목록](cli-command-compatibility.md)를 참고하세요.

## Compose V2의 GA 전환

현재 리눅스에 Compose V2 설치하는 표준방법을 제공하려고 노력하고 있습니다. 이게 가능해지면 Compose V2는 GA(일반사용가능)으로 마킹될 것 입니다.

**Compose V2 GA** 의미:

- 새로운 기능과 버그 수정은 Compose V2  코드기반에서만 고려될 예정입니다.
- 맥과 윈도우의 Docker Desktop에서 Docker Compose V2가 기본설정이 될 것 입니다. Docker Desktop UI나 CLI에서 여전히 옵션변경이 가능합니다. 이 의미는, `docker-compose`명령을 실행해도 실제는 `docker compose`를 실행하게 됩니다.
- Compose V2가 Docker CLI의 최신버전에 포함될 것 입니다. [Compose Switch](#compose-switch)를 사용하면 `docker-compose`에서 `docker compose`로 리다이렉트됩니다.
- [Compose V2 브랜치](https://github.com/docker/compose/tree/v2)가 기본 브랜치로 변경됩니다.
- Docker Compose V1는 보안적 이슈를 해결하도록 유지보수 될 것 입니다.

> **중요**
>
> 우리는 가급적 모든 사용자들에게 가능하도록 Compose V2 변경을 부드럽게 만들고자 합니다.
> 현재는 Compose V1을 더이상 사용하지 않을 계획은 가지고 있지 않습니다.
> GA와 리눅스에 채택된 커뮤니티에서 피드백을 리뷰하고나서 Compose V1을 비활성화할 계획을 수립할 것 입니다.
> `docker-compose`에서 `docker compose`로의 별칭을 삭제할 계획은 없습니다.
> 이것은 사용자들이 현재 가지고 있는 스크립트를 변경하지 않고 V2로의 전환을 쉽게 만들기 때문입니다.
> 우리는 V1에 대한 비활성화 및 보안이슈에 대한 지원정책의 종료를 충분한 시간계획하에 상세한 정보를 가지고 블로그 포스트에 게시할 예정입니다.
>
> 당신의 피드백은 우리에게 정말 중요합니다. [Public Roadmap](https://github.com/docker/roadmap/issues/257)에 연락 및 피드백을 부탁드립니다.

## Compose V2 설치하기

이번 섹션은 Compose V2 설치에 대한 지침을 포함하고 있습니다.

### 맥과 윈도우에 설치하기

맥과 윈도우의 Docker Desktop 버전 3.2.1 이상에는 새로운 Compose 명령이 Docker CLI에 포함되어있습니다.
그래서 윈도우와 맥 사용자는 Compose V2를 별도로 설치할 필요는 없습니다.

Docker Desktop 사용자에게 자동으로 Docker Compose V2를 점진적으로 변경하도록 하였습니다.
그래서 스크립트의 변경이 따로 필요하지 않고 Docker Compose V2로 순조롭게 이동할 수 있습니다.
Compoes V2에 문제가 발생한다면 Docker Desktop 또는 CLI에서 간단하게 Compose V1으로 변경할 수 있습니다.

Docker Desktop 설치관련 명령은 다음을 참고하세요.

- [맥에 Docker Desktop 설치하기](../desktop/mac/install.md)
- [윈도우에 Docker Desktop 설치하기](../desktop/windows/install.md)

Docker Desktop 사용하여 Compose V2 비활성화 하려면 다음 동작을 하면 됩니다.

1. Docker 메뉴에서 **속성(Preferences)** (윈도우에서는 **설정(Settings)** > **일반(General)** 을 클릭합니다.
2. **Docker Compose V2 사용(Use Docker Compose V2)** 체크박스를 해지합니다.

CLI 사용하여 Compose V2를 비활성화 하려면 다음 명령을 입력하면 됩니다.

```console
$ docker-compose disable-v2
```

### 리눅스에서 설치하기

Compose V2를 설치하려면 [프로젝트 릴리즈 페이지](https://github.com/docker/compose/releases)에서 현재 시스템에 맞는 바이너리를 다운받고 `$HOME/.docker/cli-plugins`에 `docker-compose` 이름으로 복사합니다.

1. 아래 명령으로 Docker Compose의 현재 안정버전을 다운받을 수 있습니다.

    ```console
    $ DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
    $ mkdir -p $DOCKER_CONFIG/cli-plugins
    $ curl -SL https://github.com/docker/compose/releases/download/v1.28.4/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
    ```
   
   이 명령은 현재 활성 사용자의 `$HOME` 디렉터리에 Compose V2를 설치합니다. 모든 사용자에 대한 설치를 하는 경우 `~/.docker/cli-plugins`를 `/use/local/lib/docker/cli-plugins`로 변경하면 됩니다.

2. 바이너리에 실행가능 권한을 추가합니다.

    ```console
    $ chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
    ```

3. 설치된 내용을 확인합니다.

    ```console
    $ docker compose version
    Docker Compose version 1.28.4
    ```

### Compose Switch

[Compose Switch](https://github.com/docker/compose-switch/)는 Compose V1 `docker-compose`(파이썬) 실행파일을 대체합니다.
Compose switch는 명령어를 Compose V2 `docker compose`로 번역하고 다음 실행합니다.

자동으로 Compose Switch를 설치하려면 다음을 실행합니다.

```console
$ curl -fL https://raw.githubusercontent.com/docker/compose-switch/master/install_on_linux.sh | sh
```

수동으로 설치하려면 다음을 수행합니다.

1. 시스템에 맞는 `compose-switch`를 다운받습니다.

    ```console
    $ curl -fL https://github.com/docker/compose-switch/releases/download/v1.28.4/docker-compose-linux-amd64 -o /usr/local/bin/compose-switch
    ```

2. 실행파일로 변경하기 위해 아래 명령을 실행합니다.

    ```console
    $ chmod +x /usr/local/bin/compose-switch
    ```

3. 기존 `/use/local/bin/docker-compose`와 같이 설치된 `docker-compose`를 삭제합니다.

    ```console
    $ mv /usr/local/bin/docker-compose /usr/local/bin/docker-compose-v1
    ```

4. `docker-compose` 명령어에 대한 **alternatives** 그룹을 정의합니다.

    ```console
    $ update-alternatives --install /usr/local/bin/docker-compose docker-compose <PATH_TO_DOCKER_COMPOSE_V1> 1
    $ update-alternatives --install /usr/local/bin/docker-compose docker-compose /usr/local/bin/compose-switch 99
    ```

5. 설치된 내용을 확인합니다.

    ```console
    $ update-alternatives --display docker-compose
    docker-compose - auto mode
        link best version is /usr/local/bin/compose-switch
        link currently points to /usr/local/bin/compose-switch
        link docker-compose is /usr/local/bin/docker-compose
    /usr/bin/docker-compose - priority 1
    /usr/local/bin/compose-switch - priority 99
    ```

#### Docker Compose 설치제거하기

curl을 사용하여 Docker Compose를 설치했다면, 다음명령으로 설치제거할 수 있습니다.

```console
$ sudo rm ~/.docker/cli-plugins/docker-compose
```