import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'web前端面试 - 面试官系列',
  description:
    'web前端面试,vue面试题,react面试题,js面试题,大厂面试题,阿里面试题,京东面试题',
  theme: defaultTheme({
    sidebar: [
      {
        text: '简介',
        link: '/README.md',
      },
      {
        text: 'React、Vue  ( 已完结..)',
        collapsible: true,
        children: ['/react/README.md'],
      },
      {
        text: 'Webpack系列  ( 已完结..)',
        collapsible: true,
        children: ['/webpack/README.md'],
      },
    ],
  }),
})
