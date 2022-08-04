import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Java",
    prefix: "/java/",
    children: [
      {
        text: "JVM에서 메모리 관리",
        link: "article/java-memory-management.md",
      },
    ],
  },
  {
    text: "Spring Core",
    prefix: "/spring/core/",
    children: [
      {
        text: "Inversion of Control",
        link: "ioc/"
      }
    ]
  },
  {
    text: "Docker",
    prefix: "/docker/",
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
    children: [
      {
        text: "Boto3 Library",
        link: "boto3/"
      }
    ]
  }
]);
