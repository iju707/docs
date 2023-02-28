export default [
    {
        text: "Dependency Injector",
        prefix: "/python/dependency-injector/",
        link: "/python/dependency-injector/",
        children: [
            {
                text: "예제",
                prefix: "example/",
                children: [
                    { text: "단일컨테이너", link: "single_container" },
                    { text: "다중컨테이너", link: "multi_containers" }
                ]
            },
            {
                text: "튜토리얼",
                prefix: "tutorials/",
                link: "tutorials/",
                children: [
                    { text: "Flask", link: "flask"}
                ]
            },
            {
                text: "공급자(Provider)",
                prefix: "providers/",
                link: "providers/",
                children: [
                    { text: "Factory Provider", link: "factory"}
                ]
            }
        ]
    }
]