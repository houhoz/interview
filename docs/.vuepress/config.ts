import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'web前端面试',
  description:
    'web前端面试,vue面试题,react面试题,js面试题,大厂面试题,阿里面试题,京东面试题',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  base: process.env.NODE_ENV === 'development' ? '/' : '/interview/',
  theme: defaultTheme({
    lastUpdated: false,
    contributors: false,
    logo: '/images/logo.png',
    sidebar: [
      {
        text: '概总',
        link: '/README.md',
      },
      {
        text: 'Css',
        link: '/css/README.md',
      },
      {
        text: 'Javascript',
        collapsible: true,
        children: [
          '/javascript/README.md',
          '/javascript/debounce.md',
          '/javascript/closure.md',
          '/javascript/algorithm.md',
        ],
      },
      {
        text: 'React、Vue',
        collapsible: true,
        children: [
          '/react/README.md',
          '/react/events.md',
          '/react/fiber.md',
          '/react/hook.md',
          '/react/optimize.md',
          '/react/reactVsVue.md',
          '/react/redux.md',
          '/react/setState.md',
          '/react/useState.md',
          '/react/vNode.md',
        ],
      },
      {
        text: 'Http',
        link: '/http/README.md',
      },
      {
        text: 'Webpack',
        link: '/webpack/README.md',
      },
    ],
  }),
})
