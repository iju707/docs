const { localTheme } = require('./theme')

const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { searchPlugin } = require('@vuepress/plugin-search')
const snippetorsTabs = require('@snippetors/vuepress-plugin-tabs')
const snippetorsCodeCopy = require('@snippetors/vuepress-plugin-code-copy')

module.exports = {
    lang: 'ko-KR',
    title: '문서 번역 모음',
    description: '문서 번역 모음입니다',
    base: '/docs/',
    head: [ 
        ['link', { rel: "icon", type: "image/png", href: "/icon.png"}],
    ],
    theme: localTheme({
        logo: '/icon.png',
        lastUpdated: true,
        lastUpdatedText: '마지막 수정일시',
        navbar: [
            {
                text: 'Java',
                children: [
                    { text: '자바 메모리관리', link: '/java/article/java-memory-management.md'}
                ]
            },
            {
                text: 'Spring',
                children: [
                    {
                        text: 'Core',
                        link: '/spring/core/'
                    }
                ]
            },
            {
                text: 'Docker',
                children: [
                    {
                        text: 'Docker-compose',
                        link: '/docker/compose/'
                    }
                ]
            },
            {
                text:'Flutter',
                children: [
                    {
                        text: '시작하기',
                        link: '/flutter/get-started/'
                    }
                ]
            }
        ],
        sidebar: { 
            '/spring/core/ioc/' : [
                '/spring/core/ioc/1_1.md',
                '/spring/core/ioc/1_2.md',
                '/spring/core/ioc/1_3.md',
                '/spring/core/ioc/1_4.md',
                '/spring/core/ioc/1_5.md',
                '/spring/core/ioc/1_6.md',
                '/spring/core/ioc/1_7.md',
                '/spring/core/ioc/1_8.md',
                '/spring/core/ioc/1_9.md',
                '/spring/core/ioc/1_10.md',
                '/spring/core/ioc/1_11.md',
                '/spring/core/ioc/1_12.md',
                '/spring/core/ioc/1_13.md',
                '/spring/core/ioc/1_14.md',
                '/spring/core/ioc/1_15.md',
                '/spring/core/ioc/1_16.md'
            ]
        }
    }),
    plugins: [
        googleAnalyticsPlugin({
            id: 'UA-41121759-18'
        }),
        searchPlugin({}),
        snippetorsTabs({ events: ['snippetors-vuepress-plugin-code-copy-update-event'] }),
        snippetorsCodeCopy({}),
    ]
}