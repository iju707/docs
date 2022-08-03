import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://docs.oofbird.me",

  author: {
    name: "Jinuk Im",
    url: "https://www.oofbird.me",
  },

  iconAssets: "iconfont",

  logo: "/logo.png",

  repo: "iju707/docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Default footer",

  displayFooter: true,

  pageInfo: false,

  plugins: {
    comment: {
      provider: "Giscus",
      repo: "iju707/docs",
      repoId: "R_kgDOHrj9wQ",
      category: "General",
      categoryId: "DIC_kwDOHrj9wc4CQb4g",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
