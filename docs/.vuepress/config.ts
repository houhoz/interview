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
        text: '简介',
        link: '/README.md',
      },
      {
        text: 'Css  ( 已完结..)',
        collapsible: true,
        children: ['/css/README.md'],
      },
      {
        text: 'Javascript  ( 已完结..)',
        collapsible: true,
        children: [
          '/javascript/README.md',
          '/javascript/debounce.md',
          '/javascript/closure.md',
        ],
      },
      {
        text: 'React、Vue  ( 已完结..)',
        collapsible: true,
        children: [
          '/react/README.md',
          '/react/hooks.md',
          '/react/setState.md',
          '/react/events.md',
          '/react/useState.md',
          '/react/redux.md',
          '/react/fiber.md',
        ],
      },
      {
        text: 'Http ( 已完结..)',
        collapsible: true,
        children: ['/http/README.md'],
      },
      {
        text: 'Webpack系列  ( 已完结..)',
        collapsible: true,
        children: ['/webpack/README.md'],
      },
    ],
  }),
})
