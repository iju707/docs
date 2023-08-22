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
        text: "타입",
        children: [
            {
                text: "내장타입",
                link: "built-in-types"
            },
            {
                text: "콜렉션",
                link: "collections"
            },
            {
                text: "제너릭",
                link: "generics"
            },
            {
                text: "타입정의",
                link: "typedefs"
            },
            {
                text: "타입 시스템",
                link: "type-system"
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
    },
    {
        text: "클래스&객체",
        children: [
            {
                text: "클래스",
                link: "classes"
            },
            {
                text: "생성자",
                link: "constructors"
            },
            {
                text: "메소드",
                link: "methods"
            },
            {
                text: "클래스 확장",
                link: "extend"
            },
            {
                text: "Mixin",
                link: "mixins"
            },
            {
                text: "열거형타입",
                link: "enum"
            },
            {
                text: "확장된 메소드",
                link: "extension-methods"
            },
            {
                text: "호출가능클래스",
                link: "callable-classes"
            }
        ]
    },
    {
        text: "동시성",
        children: [
            {
                text: "비동기 지원",
                link: "async"
            }
        ]
    }
]