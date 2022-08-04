import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/spring/core/ioc/": [
    {
      text: "Spring Core IoC",
      prefix: "/spring/core/ioc/",
      link: "/spring/core/ioc/",
      children: [
        { "text": "1.1 스프링 IoC 컨테이너와 빈 소개", link: "1_1", },
        { "text": "1.2 컨테이너 훑어보기", link: "1_2", },
        { "text": "1.3 빈 훑어보기", link: "1_3", },
        { "text": "1.4 의존성", link: "1_4", },
        { "text": "1.5 빈의 범위", link: "1_5", },
        { "text": "1.6 빈의 성질 사용자정의하기", link: "1_6", },
        { "text": "1.7 빈 정의 상속", link: "1_7", },
        { "text": "1.8 컨테이너 확장 지점", link: "1_8", },
        { "text": "1.9 어노테이션기반 컨테이너 구성", link: "1_9", },
        { "text": "1.10 클래스패스 탐색 및 관리되는 컴포넌트들", link: "1_10", },
        { "text": "1.11 JSR 330 표준 어노테이션 사용하기", link: "1_11", },
        { "text": "1.12 자바기반 컨테이너 구성", link: "1_12", },
        { "text": "1.13 환경 추상화", link: "1_13", },
        { "text": "1.14 LoadTimeWeaver 등록하기", link: "1_14", },
        { "text": "1.15 ApplicationContext의 추가적인 기능", link: "1_15", },
        { "text": "1.16 BeanFactory", link: "1_16", },
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
              "windows",
              "macos",
              "linux",
              "chromeos"
            ]
          },
          {
            text: "2. 에디터 구성하기",
            prefix: "editor/",
            link: "editor/",
            children: [
              "androidstudio",
              "visualstudiocode",
              "emacs"
            ]
          },
          {
            text: "3. 체험해보기",
            prefix: "test-drive/",
            link: "test-drive/",
            children: [
              "androidstudio",
              "visualstudiocode",
              "terminal"
            ]
          },
          "codelab",
          "learn-more"
        ]
      }
  ]
});
