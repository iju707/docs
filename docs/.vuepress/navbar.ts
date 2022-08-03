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
    link: "/spring/core/",
    children: [
      {
        text: "IoC",
        link: "ioc/"
      }
    ]
  }
]);
