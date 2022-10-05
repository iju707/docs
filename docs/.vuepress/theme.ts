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

      footer: `
      <div class="ad-outer">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1537305666483956" crossorigin="anonymous"></script>
          <ins class="adsbygoogle ad-inner"
              data-ad-client="ca-pub-1537305666483956"
              data-ad-slot="6991744222"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
      </div>
      `,
      displayFooter: true,
      
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
