import { defineUserConfig } from "vuepress";
import theme from "./theme";
import googleAnalyticsPlugin from '@vuepress/plugin-google-analytics';

export default defineUserConfig({
  lang: "en-US",
  title: "문서번역모음",
  description: "문서 번역 모음입니다.",

  base: "/",

  theme,

  plugins: [
    googleAnalyticsPlugin({
        id: 'UA-41121759-18'
    }),
  ]
});
