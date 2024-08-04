import type { NavGroup } from './types/nav'

export default defineAppConfig({
    author: {
        name: 'Henry Moreau',
    },
    description: 'Student / Designer / Dreamchaser',
    footer: {
        copyright: `© ${new Date().getFullYear()} Henry Moreau`,
        message: 'aka Zhilu, L33Z22L11',
    },
    nav: <NavGroup[]> [
        {
            title: '',
            list: [
                { icon: 'ph:house-duotone', title: '主页', link: '/' },
                { icon: 'ph:pen-nib-duotone', title: '文章', link: '/article' },
                // { icon: "ph:pen-nib-duotone", title: "文章", link: "https://blog.zhilu.cyou", external: true },
                // { icon: "ph:code-duotone", title: "项目", link: "/project" },
                { icon: 'ph:code-duotone', title: '项目', link: 'https://github.com/HenryMoreau', external: true },
                { icon: 'ph:globe-duotone', title: '站点', link: '/site' },
                { icon: 'ph:files-duotone', title: '日志', link: '/log' },
            ],
        },
        {
            title: '社交',
            list: [
                { icon: 'ri:qq-fill', title: 'QQ：1686902671', link: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd', external: true },
                { icon: 'ph:github-logo-duotone', title: 'Github', link: 'https://github.com/HenryMoreau', external: true },
                { icon: 'ph:telegram-logo-duotone', title: 'Telegram', link: 'https://t.me/AYoungUser', external: true },
            ],
        },
    ],
})
