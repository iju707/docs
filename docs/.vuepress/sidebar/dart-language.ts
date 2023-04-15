import { m } from "vuepress-theme-hope/lib/node/index-eccaf9af";

export default [
    {
        text: "소개",
        link: "/dart/language"
    },
    {
        text: "기본 문법",
        children: [
            {
                text: "변수",
                link: "variables"
            },
            {
                text: "연산자",
                link: "operators"
            },
            {
                text: "주석",
                link: "comments"
            },
            {
                text: "메타데이터",
                link: "metadata"
            },
            {
                text: "라이브러리와 가져오기",
                link: "libraries"
            },
            {
                text: "키워드",
                link: "keywords"
            }
        ]
    },
    {
        text: "함수",
        link: "functions"
    },
    {
        text: "상태흐름제어",
        link: "control-flow"
    },
    {
        text: "예외처리",
        link: "error-handling"
    }
]