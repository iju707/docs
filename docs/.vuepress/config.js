const { localTheme } = require('./theme');
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics');
const { searchPlugin } = require('@vuepress/plugin-search');
const { commentPlugin } = require('vuepress-plugin-comment2');
const { sitemapPlugin } = require('vuepress-plugin-sitemap2');
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");
const { seoPlugin } = require("vuepress-plugin-seo2");

module.exports = {
    lang: 'ko-KR',
    title: '문서 번역 모음',
    description: '문서 번역 모음입니다',
    base: '/',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/icon.png" }],
    ],
    theme: localTheme({
        logo: '/icon.png',
        lastUpdated: true,
        lastUpdatedText: '마지막 수정일시',
        navbar: [
            {
                text: 'Java',
                children: [
                    { text: '자바 메모리관리', link: '/java/article/java-memory-management.md' }
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
                text: 'Flutter',
                children: [
                    {
                        text: '시작하기',
                        link: '/flutter/get-started/install/'
                    }
                ]
            },
            {
                text: 'AWS',
                children: [
                    {
                        text: 'Boto3',
                        link: '/aws/boto3/'
                    }
                ]
            }
        ],
        sidebar: {
            '/spring/core/ioc/': [
                '1_1.md',
                '1_2.md',
                '1_3.md',
                '1_4.md',
                '1_5.md',
                '1_6.md',
                '1_7.md',
                '1_8.md',
                '1_9.md',
                '1_10.md',
                '1_11.md',
                '1_12.md',
                '1_13.md',
                '1_14.md',
                '1_15.md',
                '1_16.md'
            ],
            "/docker/compose/": [
                "/docker/compose/",
                {
                    text: "Compose V2",
                    collapsible: true,
                    children: [
                        "/docker/compose/cli-command.md",
                        "/docker/compose/cli-command-compatibility.md"
                    ]
                },
                "/docker/compose/install.md",
                "/docker/compose/gettingstarted.md",
                "/docker/compose/environment-variables.md",
                "/docker/compose/env-file.md",
                "/docker/compose/profiles.md",
                "/docker/compose/gpu-support.md",
                "/docker/compose/extends.md",
                "/docker/compose/networking.md",
                "/docker/compose/production.md",
                "/docker/compose/startup-order.md",
            ],
            "/flutter/get-started/": [
                {
                    text: "1. 설치하기",
                    link: "/flutter/get-started/install/",
                    collapsible: true,
                    children: [
                        "/flutter/get-started/install/windows.md",
                        "/flutter/get-started/install/macos.md",
                        "/flutter/get-started/install/linux.md",
                        "/flutter/get-started/install/chromeos.md"
                    ]
                },
                {
                    text: "2. 에디터 구성하기",
                    link: "/flutter/get-started/editor/",
                    collapsible: true,
                    children: [
                        "/flutter/get-started/editor/androidstudio.md",
                        "/flutter/get-started/editor/visualstudiocode.md",
                        "/flutter/get-started/editor/emacs.md"
                    ]
                },
                {
                    text: "3. 체험해보기",
                    link: "/flutter/get-started/test-drive/",
                    collapsible: true,
                    children: [
                        "/flutter/get-started/test-drive/androidstudio.md",
                        "/flutter/get-started/test-drive/visualstudiocode.md",
                        "/flutter/get-started/test-drive/terminal.md",
                    ]
                }, 
                "/flutter/get-started/codelab.md",
                "/flutter/get-started/learn-more.md",
            ],
        }
    }),
    plugins: [
        googleAnalyticsPlugin({
            id: 'UA-41121759-18'
        }),
        searchPlugin({}),
        commentPlugin({
            provider: "Giscus",
            repo: "iju707/docs",
            repoId: "R_kgDOHrj9wQ",
            category: "General",
            categoryId: "DIC_kwDOHrj9wc4CQb4g",
        }),
        sitemapPlugin({
            hostname: "https://docs.oofbird.me"
        }),
        mdEnhancePlugin({
            enableAll: true,
        }),
        seoPlugin({
            hostname: "https://docs.oofbird.me",
            author: "Jinuk Im",
        }),
    ]
};