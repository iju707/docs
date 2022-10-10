---
description: How to install Docker Compose, Docker Compose를 어떻게 설치하는가?
keywords: compose, orchestration, install, installation, docker, documentation
title: 설치하기
---

Compose를 맥OS, 윈도우, 64비트 리눅스에서 실행할 수 있습니다.

## 사전요구사항

Docker Compose는 Docker Engine을 통해 다양한 동작을 수행하기 때문에, 로컬 또는 원격 등 환경구성에 따라 Docker Engine이 설치되어있어야 합니다.

- 맥과 윈도우를 위한 Docker Desktop과 같은 데스크탑 시스템에서는 Docker Compose는 설치대상에 포함되어있습니다.

- 리눅스 시스템의 경우, [Docker Engine 설치하기](../engine/install/index.md#server)를 참고하여 먼저 설치한 뒤,
  Compose 설치하기 절차를 진행하면 됩니다.

- root 유저가 아닌 경우, [root가 아닌 유저로 Docker 관리](../engine/install/linux-postinstall.md)를 참고하세요.

## Compose 설치

아래의 절차는 맥, 윈도우, 윈도우서버2016, 리눅스의 설치절차를 다루며 추가로 `pip` 파이선패키지관리자를 통한 설치 및 컨테이너내부에 설치를 다루고 있습니다.

> 다른버전 설치
>
> 아래의 절차는 Compose의 현재 안정버전(**v1.28.4**)을 설치하는 것입니다.
> 다른 버전의 Compose를 설치하려면, 릴리즈 번호를 원하는 버전으로 바꾸면 됩니다.
> [Github의 Compose 저장소 릴리즈 페이지](https://github.com/docker/compose/releases)에서 직접 다운가능한 릴리즈 버전의 목록을 볼 수 있습니다.
> Compose의 **사전릴리즈**를 설치하려면, [사전릴리즈 빌드](#사전릴리즈-빌드)를 참고하세요.

* [맥에서 설치](#맥에서-설치)
* [윈도우에서 설치](#윈도우에서-설치)
* [윈도우서버에서 설치](#윈도우서버에서-설치)
* [리눅스에서 설치](#리눅스에서-설치)
* [다른방법으로 설치](#다른방법으로-설치)
* [사전릴리즈 빌드](#사전릴리즈-빌드)

### 맥에서 설치

**Docker Desktop for Mac**은 다른 Docker 앱과 함께 Compose가 포함되어있습니다.
따라서 맥 사용자는 Compose를 따로 설치할 필요가 없습니다.
설치절차는 [Docker Desktop on Mac 설치](../docker-for-mac/install.md)를 참고하세요.

### 윈도우에서 설치

**Docker Desktop for Windows**는 다른 Docker 앱과 함께 Compose가 포함되어있습니다.
따라서 대부분 윈도우 사용자는 Compose를 따로 설치할 필요가 없습니다.
설치절차는 [Docker Desktop on Windows 설치](../docker-for-windows/install.md)를 참고하세요.

만약 윈도우서버에서 Docker 데몬과 클라이언트를 실행할 경우에는 아래 윈도우서버에서 설치절차를 따르시기 바랍니다.

### 윈도우서버에서 설치

윈도우 서버에서 Docker 데몬과 클라이언트를 직접 실행고 Docker Compose를 설치하려면 아래 절차를 수행하시면 됩니다.

1.  관리자 권한으로 PowerShell을 실행합니다.
    PowerShell을 검색한 뒤, 오른쪽 클릭하고 **관리자 권한으로 실행**을 선택합니다.
    이 앱이 장치를 변경할수 있다는 질문이 표시되면 **예**를 선택합니다.
    
2.  GitHub에서 TLS1.2가 필요하며로 PowerShell에서 다음을 수행합니다.

    ```powershell  
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    ```

    그후 최신 안정화 버전인 Compose (v1.28.4)를 다음 명령으로 다운로드 합니다.

    ```powershell
    Invoke-WebRequest "https://github.com/docker/compose/releases/download/1.28.4/docker-compose-Windows-x86_64.exe" -UseBasicParsing -OutFile $Env:ProgramFiles\Docker\docker-compose.exe
    ```

    **정보**: Windows 서버 2019에서는 Compose 실행파일을 `$Env:ProgramFiles\Docker`에 추가합니다. 이 디렉터리는 시스템 `PATH`에 등록되어있기 때문에, 추가 절차없이 `docker-compose --version` 명령을 실행할 수 있습니다.

    > 다른 버전의 Compose를 설치하려면, `1.28.4`를 원하는 버전으로 변경하시면 됩니다.

3.  설치를 테스트합니다.

    ```powershell
    docker-compose --version

    docker-compose version 1.28.4, build 01110ad01
    ```

### 리눅스에서 설치

리눅스에서는 [Github의 Compose 저장소 릴리즈 페이지](https://github.com/docker/compose/releases)에서 Docker Compose 바이너리를 다운받을 수 있습니다.

링크의 바이너리를 다운받기 위해 터미널에서 `curl` 명령으로 다음을 수행하면 됩니다.  
단계별 절차는 아래와 같습니다.

> `alpine`에서는 다음의 종속 패키지가 필요합니다.
> `py-pip`, `python-dev`, `libffi-dev`, `openssl-dev`, `gcc`, `libc-dev`, `rust`, `cargo`, `make`

1.  현재 Docker Compose의 안정버전을 다운받으려면 다음을 실행합니다.

    ```bash
    sudo curl -L "https://github.com/docker/compose/releases/download/1.28.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    ```

    > 다른 버전의 Compose를 설치하려면, `1.28.4`를 원하는 버전으로 변경하시면 됩니다.

    `curl`사용에 문제가 있다면 [다른방법으로 설치](#다른방법으로-설치)를 참고하시기 바랍니다.

2.  바이너리에 실행권한을 설정합니다.

    ```bash
    sudo chmod +x /usr/local/bin/docker-compose
    ```

    > **정보**: 설치후 `docker-compose`명령이 실패한다면, `PATH`를 확인해보시기 바랍니다.
    > `/usr/bin` 또는 `PATH`에 정의된 다른 디렉터리에 심볼릭링크를 생성하면 됩니다.

    예로들어:

    ```bash
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
    ```

3.  선택적으로 `bash`나 `zsh` 쉘에 [자동완성](completion.md)을 설치하시기 바랍니다.

4.  설치를 테스트 합니다.

    ```bash
    $ docker-compose --version
    docker-compose version 1.28.4, build 1110ad01
    ```

### 다른방법으로 설치

- [pip로 설치](#pip로-설치)
- [컨테이너로 설치](#컨테이너로-설치)

#### pip로 설치

> `alpine`에서는 다음의 종속 패키지가 필요합니다.
> `py-pip`, `python-dev`, `libffi-dev`, `openssl-dev`, `gcc`, `libc-dev`, `rust`, `cargo`, `make`

`pip`를 사용해 [pypi](https://pypi.python.org/pypi/docker-compose)에서 Compose를 설치할 수 있습니다.
`pip`를 설치할 때, [virtualenv](https://virtualenv.pypa.io/en/latest/)를 사용하는 것을 추천합니다.
많은 OS가 가지고 있는 파이선 시스템 패키제엇 docker-compose 종속성과 충돌이 발생할 수 있기 때문입니다.
[virtualenv 튜토리얼](https://docs.python-guide.org/dev/virtualenvs/)을 통해 시작해볼 수 있습니다.

```bash
pip install docker-compose
```
만약 virtualenv를 사용하지 않으면,

```bash
sudo pip install docker-compose
```

> `pip`는 6.0 이상의 버전이 필요합니다.

#### 컨테이너로 설치

Compose는 간단한 bash 스크립트로 컨테이너 내부에서도 동작가능합니다.
컨테이너에 compose를 설치하려면 다음 명령을 실행합니다.

```bash
sudo curl -L --fail https://github.com/docker/compose/releases/download/1.28.4/run.sh -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 사전릴리즈 빌드

사전릴리즈에 관심이 있다면, [Github의 Compose 저장소 릴리즈 페이지](https://github.com/docker/compose/releases)에서 릴리즈 후보군을 다운받을 수 있습니다.

링크의 바이너리를 다운받기 위해 터미널에서 `curl` 명령으로 다음을 수행하면 됩니다.  
단계별 절차는 아래와 같습니다.

"master" 브랜치에서 빌드된 사전릴리즈는 [https://dl.bintray.com/docker-compose/master/](https://dl.bintray.com/docker-compose/master/)에서 다운받을 수 있습니다.

> 사전릴리즈는 릴리즈하기전 새로운 기능을 사용해볼수 있으나 안정을 보장하진 않습니다.

## 업그레이드

1.2 이하 버전에서 업그레이드 하려면 Compose를 업그레이드한 뒤 기존 컨테이너를 삭제하거나 전환해야합니다.
이것은 버전 1.3부터 Compose는 컨테이너 추적을 위한 Docker 라벨을 사용하며 이 라벨을 추가하기위해 컨테이너를 재생성해야합니다.

라벨없이 컨테이너 생성이 감지되면 실행을 거부하므로 두셋트가 되지 끝나지 않습니다.
기존 컨테이너를 유지하고지 한다면(예로 저장하고자 하는 데이터 볼륨을 가지고 있을 경우) Compose 1.5.x를 사용하여 아래 명령으로 전환합니다.

```bash
docker-compose migrate-to-labels
```

다른방법으로, 유지가 필요없는 경우 삭제하시면 됩니다.
Compose에서 새롭게 다시 생성합니다.

```bash
docker container rm -f -v myapp_web_1 myapp_db_1 ...
```

## 설치제거

`curl`을 사용하여 설치했다면 다음명령으로 삭제할 수 있습니다.

```bash
sudo rm /usr/local/bin/docker-compose
```

`pip`를 사용하여 설치했다면 다음명령으로 삭제할 수 있습니다.

```bash
pip uninstall docker-compose
```

> "권한 거부(Permission denied)" 오류가 발생했다면?
>
> 삭제할 때 "권한 거부(Permission denied)"가 발생했다면 아마 `docker-compose`를 삭제하기 위한 적절한 권한이 없어서입니다.
> 강제로 삭제할 경우, 각 명령어 앞에 `sudo`를 추가하고 다시하시면 됩니다.

## 다음으로

- [사용자가이드](index.md)
- [시작하기](gettingstarted.md)
- [명령어 레퍼런스](reference/index.md)
- [Compose 파일 레퍼런스](compose-file/index.md)
- [Compose를 활용한 샘플 어플리케이션](samples-for-compose.md)

<AdsenseB />