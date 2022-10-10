import { defineClientConfig } from "@vuepress/client";
import AdsenseB from "./components/AdsenseB.vue";

export default defineClientConfig({
    enhance: ({app, router, siteData}) => {
        app.component("AdsenseB", AdsenseB);
    },
});