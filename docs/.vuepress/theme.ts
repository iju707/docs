import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://docs.oofbird.me",

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "iju707/docs",

  docsDir: "docs",

  pageInfo: ["Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      navbar: navbar,

      sidebar: sidebar,
      
      metaLocales: {
        editLink: "페이지 수정하기"
      }
    }
  },

  plugins: {
    comment: {
      provider: "Giscus",
      repo: "iju707/docs",
      repoId: "R_kgDOHrj9wQ",
      category: "General",
      categoryId: "DIC_kwDOHrj9wc4CQb4g",
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
