import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/spring/core/ioc/": [
    {
      text: "Spring Core IoC",
      prefix: "/spring/core/ioc/",
      link: "/spring/core/ioc/",
      children: [
        { text: "1.1 스프링 IoC 컨테이너와 빈 소개", link: "1_1", },
        { text: "1.2 컨테이너 훑어보기", link: "1_2", },
        { text: "1.3 빈 훑어보기", link: "1_3", },
        { text: "1.4 의존성", link: "1_4", },
        { text: "1.5 빈의 범위", link: "1_5", },
        { text: "1.6 빈의 성질 사용자정의하기", link: "1_6", },
        { text: "1.7 빈 정의 상속", link: "1_7", },
        { text: "1.8 컨테이너 확장 지점", link: "1_8", },
        { text: "1.9 어노테이션기반 컨테이너 구성", link: "1_9", },
        { text: "1.10 클래스패스 탐색 및 관리되는 컴포넌트들", link: "1_10", },
        { text: "1.11 JSR 330 표준 어노테이션 사용하기", link: "1_11", },
        { text: "1.12 자바기반 컨테이너 구성", link: "1_12", },
        { text: "1.13 환경 추상화", link: "1_13", },
        { text: "1.14 LoadTimeWeaver 등록하기", link: "1_14", },
        { text: "1.15 ApplicationContext의 추가적인 기능", link: "1_15", },
        { text: "1.16 BeanFactory", link: "1_16", },
      ]
    }
  ],
  "/docker/compose/": [
    {
      text: "Docker Compose",
      prefix: "/docker/compose/",
      link: "/docker/compose/",
      children: [
        {
          text: "Compose V2",
          children: [
            "cli-command",
            "cli-command-compatibility"
          ]
        },
        "install",
        "gettingstarted",
        "environment-variables",
        "env-file",
        "profiles",
        "gpu-support",
        "extends",
        "networking",
        "production",
        "startup-order",
      ],      
    },
  ],
  "/flutter/get-started/": [
      {
        text: "Flutter 시작하기",
        prefix: "/flutter/get-started/",
        children: [
          {
            text: "1. 설치하기",
            prefix: "install/",
            link: "install/",
            children: [
              { text: "Windows", link: "windows" },
              { text: "MacOS", link: "macos" },
              { text: "Linux", link: "linux" },
              { text: "ChromeOS", link: "chromeos" }
            ]
          },
          {
            text: "2. 에디터 구성하기",
            prefix: "editor/",
            link: "editor/",
            children: [
              { text: "Android Studio(IntelliJ)", link: "androidstudio" },
              { text: "Visual Studio Code", link: "visualstudiocode" },
              { text: "Emacs", link: "emacs" }
            ]
          },
          {
            text: "3. 체험해보기",
            prefix: "test-drive/",
            link: "test-drive/",
            children: [
              { text: "Android Studio(IntelliJ)", link: "androidstudio" },
              { text: "Visual Studio Code", link: "visualstudiocode" },
              { text: "터미널과 에디터", link: "terminal"}
            ]
          },
          {
            text: "4. 첫번째 앱 만들기",
            children: [
              { text: "파트 1", link: "codelab" },
              { text: "파트 2", link: "codelab2" }
            ]
          },
          { text: "5. 더 알아보기", link: "learn-more" }
        ]
      }
  ],
  "/python/boto3/": [
    {
      text: "Boto3 Library",
      prefix: "/python/boto3/",
      children: [
        { text: "빠르게 해보기", link: "" },
        { text: "예제 튜토리얼", link: "sample-tutorial"},
        {
          text: "Amazon S3 예제",
          prefix: "s3/",
          link: "s3/",
          children: [
            { text: "Amazon S3 버킷", link: "amazon-s3" },
            { text: "파일 업로드", link: "uploading-file" },
            { text: "파일 다운로드", link: "download-file" },
            { text: "파일 전송구성", link: "file-transfer" },
            { text: "사전인증 URL", link: "presigned-urls" },
            { text: "버킷 정책", link: "bucket-policies" },
            { text: "접근 권한", link: "access-permissions" },
            { text: "정적웹호스트 사용", link: "static-web-host" },
            { text: "버킷 CORS 구성", link: "configuring-buckets" },
            { text: "아마존 S3의 PrivateLink", link: "privatelink" },
          ]
        }
      ]
    }
  ],
  "/elastic/ml/": [
    {
      text: "엘라스틱 머신러닝",
      prefix: "/elastic/ml/",
      children: [
        { text: "설정하기", link: "setup"},
        {
          text: "시작해보기",
          link: "ml-getting-started",
          children: [
            { text: "키바나에서 데이터 조회하기", link: "ml-gs-visualizer" },
            { text: "이상탐지 잡 만들기", link: "ml-gs-jobs" },
            { text: "이상탐지 결과보기", link: "ml-gs-results" },
            { text: "예측 생성하기", link: "ml-gs-forecasts" },
            { text: "다음단계", link: "ml-gs-next" }
          ]
        },
        {
          text: "이상탐지",
          link: "xpack-ml",
          children: [
            { text: "이상탐지 개요", link: "ml-overview" }
          ]
        }
      ]
    }
  ]
});
