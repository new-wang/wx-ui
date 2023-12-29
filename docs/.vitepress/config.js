/*
 * @Author: new-wang
 * @Date: 2023-12-29 14:47:52
 * @LastEditors: new-wang
 * @LastEditTime: 2023-12-29 15:12:26
 * @Description: 
 */
const sidebar = [
    {
        text: '基础',
        items:[
            { text: '安装', link: '/item-a' },
            { 
                text: '介绍', 
                items:[
                    {
                        text: 'Vue.js 是什么', 
                        link: '/item-a' 
                    },
                    {
                        text: '起步', 
                        link: '/item-a' 
                    }
                ]
            },
        ]
    },
    {
        text: '深入组件',
        items: [
            { text: '组件注册', link: '/item-a' },
            { text: 'Props', link: '/item-b' },
        ]
    },
    {
        text: '组件',
        items: [
            { text: 'button', link: '/components/button/' },
        ]
    },
    // ...
]

const config = {
    themeConfig: {
        nav:[
            {
                text: "nav1",
                link: ""
            }
        ],
        sidebar,
    },
    // markdown: {
    //     // config(md){
    //     //     // 这里可以使用markdown-it插件
    //     //     const { demoBlockPlugin } = require('vitepress-theme-demoblock')
    //     //     md.use(demoBlockPlugin)
    //     // }
    // }
}

export default config