const {defaultTheme} = require('vuepress')
module.exports = {
    locales: {
        '/': {
            lang: 'en_US',
        },
        '/zh/': {
            lang: 'zh_CN'
        }
    },
    title: '你好',
    description: '第一个博客',
    // base: '',
    head: [['link', {rel: 'icon', href: 'https://vuejs.org/images/logo.png'}]],
    theme: defaultTheme({
        navbar: [
            {
                // 相当于就是导航栏
                text: '前端',
                // 点击后要跳转的链接
                link: '/前端/',
                children: [
                    {
                        text: 'vue',
                        link: '/前端/web2.html/'
                    }
                ]
            },
            {
                text: '后端',
                link: '/java/'
            }
        ],
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/alu-heng/testVuePress',
        locales: {
            '/': {
                selectLanguageName: 'English',
            },
            // 虽然设置了中英文转换，但是并不是自己翻译的，而是重新定位到了新的站点
            '/zh/': {
                selectLanguageName: '中文'
            }
        },
        sidebar: [
            {
                text:'标题1',
                // 设置可折叠
                collapsible: true
            },
            {
                text: '标题2'
            }
        ],

    })
}
