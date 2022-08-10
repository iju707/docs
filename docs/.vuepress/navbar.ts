import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Blog",
    link: "https://www.oofbird.me",
    icon: "blog"
  },
  {
    text: "Java",
    prefix: "/java/",
    icon: "java",
    children: [
      {
        text: "JVM에서 메모리 관리",
        link: "article/java-memory-management.md",
      },
    ],
  },
  {
    text: "Spring",
    prefix: "/spring/",
    icon: "back-stage",
    children: [
      {
        text: "Spring Core",
        prefix: "core/",
        children: [
          {
            text: "Inversion of Control",
            link: "ioc/"
          }
        ]
      }
    ]
  },
  {
    text: "Docker",
    prefix: "/docker/",
    icon: "stack",
    children: [
      {
        text: "Docker Compose",
        link: "compose/",
      }
    ]
  },
  {
    text: "Flutter",
    prefix: "/flutter/",
    icon: "mobile",
    children: [
      {
        text: "시작하기",
        link: "get-started/install/",
      }
    ]
  },
  {
    text: "Python",
    prefix: "/python/",
    icon: "python",
    children: [
      {
        text: "Boto3 Library",
        link: "boto3/"
      }
    ]
  },
  {
    text: "Elastic",
    prefix: "/elastic/",
    icon: "search",
    children: [
      {
        text: "머신러닝",
        link: "ml/setup"
      }
    ]
  }
]);
