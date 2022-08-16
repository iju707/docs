---
title: Windows에 Flutter 설치하기
prev: false
next: /flutter/get-started/editor/
tag:
    - Flutter
    - 3.0.5
---

원문 : [https://docs.flutter.dev/get-started/install/windows](https://docs.flutter.dev/get-started/install/windows)

## 시스템 요구사항

Flutter를 설치하고 실행하기 위해서는 아래의 최소요구사항을 만족하는 개발환경을 가지고 있어야합니다.

* **운영체제** : Windows 10 또는 그 이후버전 (64-bit), x86-64 기반.
* **디스크 공간** : 1.64 GB (이것은 IDE/도구에 대한 공간은 제외합니다)
* **도구** : Flutter는 윈도우에서 실행되기 위해 아래의 도구를 필요로 합니다.
  * [Windows PowerShell 5.0](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell) 또는 이상 (Windows 10에는 이미 설치되어있습니다)
  * [Git for Windows](https://git-scm.com/download/win) 2.x, **Windows 명령창에서 Git을 사용**하기 위한 옵션  

    이미 Git for Windows가 설치되어있다면, git 명령이 명령창이나 PowerShell에서 동작하는지 확인하세요.

## Flutter SDK 가져오기

1. Flutter SDK의 마지막 안정 릴리즈를 다운받기 위해 아래의 설치번들을 다운로드 하세요.
  
    [flutter_windows_3.0.5-stable.zip](https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_3.0.5-stable.zip)

    다른 릴리즈나 오래된 빌드버전은 [SDK releases](https://docs.flutter.dev/development/tools/sdk/releases) 페이지를 참고하세요.

2. 압축을 풀고 포함된 `flutter`를 Flutter SDK를 위한 원하는 경로에 위치합니다.(예로들어, `C:\src\flutter`)

::: warning
Flutter를 특수문자나 공백이 포함된 경로에 설치하지 마세요.
:::

::: warning
Flutter를 상위권한이 필요한 `C:\Program Files\`와 같은데에 설치하지 마세요.
:::

고정된 버전의 설치번들로 설치하고 싶지 않을 경우에는 1, 2단계를 생략하시면 됩니다.
대신, Github의 [Flutter 리포지토리](https://github.com/flutter/flutter)에서 소스를 받고 필요한 브랜치나 태그로 교체하시면 됩니다.

예로들면,

```bash
C:\src>git clone https://github.com/flutter/flutter.git -b stable
```

이제 Flutter 콘솔에서 Flutter 명령을 실행할 준비가 되었습니다.

### 환경경로 갱신하기

일반 Windows 콘솔에서 Flutter 명령을 실행하고 싶으면 Flutter를 **PATH** 환경변수에 추가하는 다음 과정을 수행하시면 됩니다.

* 시작의 검색창에서 `env`를 입력하고 **현재 계정의 환경변수를 수정하기** 선택하시면 됩니다.
* **사용자 변수**에서 **Path**라는 엔트리가 있는지 확인합니다.
  * 엔트리가 존재한다면, `flutter/bin` 이 사용하는 전체경로를 기존값에서 ; 로 구분하여 추가합니다.
  * 엔트리가 없다면, 새로운 **Path** 환경변수를 생성하고 `flutter/bin`이 사용하는 전체경로를 값으로 추가합니다.

변경된 내용을 적용하기 위해 존재하는 모든 콘솔 윈도우를 닫고 다시 열어주시기 바랍니다.

::: tip
Flutter 1.19.0 dev 릴리즈 이상부터 Flutter SDK에 `flutter`명령과 함께 `dart`명령이 포함되어 보다 쉽게 Dart 명령줄 프로그램을 실행할 수 있습니다.
Flutter SDK를 다운받으면 자동으로 호환되는 Dart를 다운받게 되며, 별도로 Dart SDK를 다운받은 경우 두 버전이 호환되지 않을 수 있으므로 Flutter 버전의 `dart`가 path에 가장 우선시 되어야 합니다.
아래의 명령은 `flutter`와 `dart` 명령이 동일한 `bin` 디렉터리에 시작하여 호환되는지 여부를 알려줍니다.

```bash
C:\>where flutter dart
C:\path-to-flutter-sdk\bin\flutter
C:\path-to-flutter-sdk\bin\flutter.bat
C:\path-to-dart-sdk\bin\dart.exe        :: this should go after `C:\path-to-flutter-sdk\bin\` commands
C:\path-to-flutter-sdk\bin\dart
C:\path-to-flutter-sdk\bin\dart.bat
```

위 경우에는 Flutter SDK의 `dart`명령이 처음에 위치하지 않습니다.
`C:\path-to-flutter-sdk\bin\`의 명령을 `C:\path-to-dart-sdk\bin\`의 명령 앞에 오도록 path를 갱신합니다.(위 경우 기준)
변경된 내용을 적용하기 위해 쉘을 재시작하고 `where`명령을 다시 실행하면 `flutter`와 동일 디렉터리에 위치한 `dart`명령이 우선시 됨을 볼 수 있습니다.

```bash
C:\>where flutter dart
C:\dev\src\flutter\bin\flutter
C:\dev\src\flutter\bin\flutter.bat
C:\dev\src\flutter\bin\dart
C:\dev\src\flutter\bin\dart.bat
C:\dev\src\dart-sdk\bin\dart.exe
```

그러나, `PowerShell`을 사용한다면 `Where-Object`명령에 `where`별칭이 적용되어있지 않으므로 `where.exe`로 대신 사용해야 합니다.

```powershell
PS C:\> where.exe flutter dart
```

`dart`명령에 대해 알고 싶다면, 명령줄에서 `dart -h`를 실행하거나 [dart tool](https://dart.dev/tools/dart-run)페이지를 확인하세요.
:::

### `flutter doctor` 실행하기

Flutter 디렉터리를 가지고 있는 상태의 콘솔 윈도우(아래참조)에서 아래 명령을 통해 설치완료를 위한 플랫폼 의존성이 있는지 확인할 수 있습니다.

```bash
C:\src\flutter>flutter doctor
```

이 명령어는 환경을 확인하고 Flutter 설치에 대한 상태리포트를 보여줍니다.
출력된 내용에서 추가적으로 설치해야될 소프트웨어나 수행할 행동을 확인하면 됩니다. (굵은글씨 참조)

예로들면 다음과 같습니다.

``` {3}
[-] Android toolchain - develop for Android devices
    • Android SDK at D:\Android\sdk
    ✗ Android SDK is missing command line tools; download from https://goo.gl/XxQghQ
    • Try re-installing or updating your Android SDK,
      visit https://docs.flutter.dev/setup/#android-setup for detailed instructions.
```

아래 절은 이러한 행동을 어떻게 수행하고 설치과정을 마무리하는지 보여줍니다.
누락된 의존성을 설치한 뒤 다시 `flutter doctor` 명령을 수행하면 모든 것이 정상적으로 되어있는지 검증할 수 있습니다.

::: tip
만약 `flutter doctor`가 Flutter 플러그인이나 Dart 플러그인이 Android Studio에 설치되지 않았다고 표시되면, [에디터 설정](../editor/androidstudio.md)로 이동해서 이슈를 해결하시면 됩니다.
:::

::: warning
Flutter 도구는 가끔 구글서버로부터 리소스를 다운받습니다.
Flutter SDK를 다운받거나 사용하기 위해서는 [Google Terms of Service](https://policies.google.com/terms)에 동의해야합니다.

예로들어, Github를 사용하여 설치한 경우(미리 패키징된 아카이브와는 달리), Flutter 도구는 최초실행시 Dart SDK를 구글서버로부터 다운받아 `flutter` 도구 자체를 실행할때 사용합니다.
이것은 Flutter를 업그레이드 할때도 동일하게 발생합니다.(예로, `flutter upgrade` 명령어를 실행한 경우)

`flutter` 도구는 기능 사용 통계를 보고하거나 [충돌보고서](https://github.com/flutter/flutter/wiki/Flutter-CLI-crash-reporting)를 전송하기 위해 Google Analytics를 사용합니다.

Flutter 도구 분석은 최초실행시 전송되지는 않습니다.
보고서를 비활성화하려면, `flutter config --no-analytics`를 실행하시면 됩니다.
현재 설정정보를 보려면, `flutter config`를 사용하시면 됩니다.
만약 분석 설정을 미사용하게 되면, opt-out(옵션 미사용) 이벤트가 전송되고 이후에는 Flutter 도구를 통해 전송되는 정보는 없습니다.

또한 Dart 도구는 사용량 매트릭스 및 충돌보고서를 구글에 전송합니다.
이런 매트릭스의 제출을 제어하려면, [`dart tool`](https://dart.dev/tools/dart-tool)에 아래 옵션을 사용하시면 됩니다.

* `--enable-analytics` : 익명분석 활성화
* `--disable-analytics` : 익명분석 비활성화

[구글 개인정보보호 정책](https://policies.google.com/privacy)에 이러한 서비스에서 데이터를 어떻게 처리하는지 안내되어있습니다.
:::

## Android 설정

::: tip
Flutter는 Android 플랫폼 의존성을 지원하기 위해 Android Studio를 전체설치하도록 되어있습니다.
그러나 다양한 에디터에서 Flutter 어플리케이션을 작성할 수 있으며, 뒤에서 다루도록 하겠습니다.
:::

### Android Studio 설치하기

1. [Android Studio](https://developer.android.com/studio)를 다운받고 설치합니다.
2. Android Studio를 시작하고 'Android Studio Setup Wizard'로 이동합니다.
    Flutter에서 Android를 개발할 때 필요한 가장 최신의 Android SDK, Android SDK 명령줄 도구, Android SDK 빌드도구를 설치합니다.
3. `flutter doctor`를 실행해서 Android Studio 설치가 맞게 되었는지 검증합니다.
    만약 Flutter에서 없다고 표시하면, Android Studio가 설치된 디렉터리를 `flutter config --android-studio-dir <directory>` 명령으로 설정합니다.

### Android 장치 설정하기

Android 장치에서 Flutter 어플리케이션을 실행하고 테스트할 준비를 위해 Android 4.1 (API level 16) 또는 그 이상이 실행되는 Android 장치가 필요합니다.

1. 장치에서 **개발자 옵션**과 **USB 디버깅**을 활성화 합니다.
    자세한 방법은 [Android 문서](https://developer.android.com/studio/debug/dev-options)를 참고하시면 됩니다.
2. Windows일 경우 : [Google USB Driver](https://developer.android.com/studio/run/win-usb)를 설치합니다.
3. USB 케이블을 사용해서 컴퓨터에 핸드폰을 연결합니다.
    장치에 확인창이 표시되면 컴퓨터에서 장치접근을 할 수 있도록 권한을 허용합니다.
4. 터미널에서 `flutter devices` 명령을 실행하여 Flutter가 연결된 Android 장치를 인식하고 있는지 검증합니다.
    기본적으로 `abd` 도구에 기반한 Android SDK 버전을 사용합니다.
    Flutter에서 다른 버전의 Android SDK를 사용하고 싶을 경우 `ANDROID_SDK_ROOT` 환경변수를 해당 SDK가 설치된 경로로 변경설정해야합니다.  

### Android 에뮬레이터 설정하기

Android 에뮬레이터에서 Flutter 어플리케이션을 실행하고 테스트하기 위해서 다음 동작을 따라하세요.

1. 장치에서 [VM 가속화](https://developer.android.com/studio/run/emulator-acceleration)를 활성화 합니다.
2. **Android Studio**를 실행하고 **AVD Manager** 아이콘을 클릭한 뒤 **Create Virtual Device...** 을 선택합니다.
    * 오래된 Android Studio의 경우 **Android Studio > 도구 > Android > AVD Manager**를 실행하고 **Create Virtual Device...** 를 선택합니다.
      (**Android** 하위 메뉴는 Android 프로젝트 내에서만 표출됩니다)
    * 프로젝트를 열고 있지 않는다면 **Configure > AVD Manager**를 선택하고 **Create Virtual Device...** 를 선택합니다.
3. 장치 정의를 선택하고 **Next**를 클릭합니다.
4. 에뮬레이팅할 Android 버전의 시스템 이미지 1개 이상을 선택하고 **Next**를 클릭합니다.
    x86 또는 x86_64 이미지를 추천합니다.
5. Emulated Performance 아래 **Hardware - GLES 2.0**을 선택하여 [장치 가속화](https://developer.android.com/studio/run/emulator-acceleration)를 활성화 합니다.
6. AVD 구성이 정확한지 검증하고 **Finish**를 클릭합니다.
  
    위의 자세한 단계는 [AVD 관리하기](https://developer.android.com/studio/run/managing-avds)를 참고하시면 됩니다.
7. Android 가상장치 관리자에서 툴바의 **Run**을 클릭합니다.
    에뮬레이터가 시작되고 선택한 OS 버전 및 장치에 대한 기본 화면이 표시됩니다.

### Android 라이선스 동의하기

Flutter를 사용하기 전에 Android SDK 플랫폼 라이선스를 동의해야 합니다.
이 과정은 아래 나열된 도구가 설치된 후 완료되면 됩니다.

1. 설치된 자바의 버전이 8인지 확인하고 `JAVA_HOME` 환경변수에 JDK 폴더가 설정되었는지 확인합니다.

    Android Studio 2.2 또는 그 이상의 버전에는 JDK가 포함되어 따로 하실일은 없습니다.
2. 열려진 콘솔 윈도우에서 라이선스 동의를 시작하기 위해 아래 명령을 실행합니다.
    ```bash
    C:\src\flutter> flutter doctor --android-licenses
    ```
3. 동의하기전에 각각의 라이선스 규약을 확인해보시기 바랍니다.
4. 라이선스에 동의한 경우 `flutter doctor`를 다시 실행하여 Flutter를 사용할 준비가 완료되었는지 확인합니다.

## Windows 설정

### 추가적인 Windows 요구사항

Windows 데스크탑 개발을 위해 Flutter SDK 외에 다음이 필요합니다.

* [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) Visual Studio를 설치할 때 윈도우 빌드를 위해 "Desktop development with C++" 워크로드와 모든 기본 컴포넌트를 포함한 설치가 필요합니다. 

::: tip
**Visual Studio**는 Visual Studio Code와 다릅니다.
:::

자세한 내용은 [Flutter의 Desktop 지원](https://docs.flutter.dev/desktop)을 참고하세요.

## Web 설정

Flutter는 `stable`채널에서 웹 어플리케이션 빌드를 지원합니다.
Flutter 2에서 다른 어플리케이션을 만들면 자동으로 웹으로 빌드가 됩니다.
웹이 안정화되기 전에 생성된 어플리케이션에서 웹을 지원하도록 하려면 위에 설정을 모두 마친 뒤 [Flutter에서 웹 어플리케이션 빌드하기](../web.md) 지침을 따라하시면 됩니다.

## 다음단계

선호하는 에디터를 구성하시면 됩니다.