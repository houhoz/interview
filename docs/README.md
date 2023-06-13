# 面试题总结

## Css

- [flex 布局](./css/README.md)
- 说说 z-index 有什么需要注意的地方，z-index: 0 和 z-index：1 的区别，z-index 为 0 和 1 哪个元素在上面
- 两个 div，都给 margin：20px，这两个 div 的间距是多少？为什么会产生这种问题？怎么解决？（BFC）
- 怎么触发 BFC，说出你能想到的所有方案

## JavaScript

- ES6 的迭代器是怎么实现的
- js 怎么去实现继承？（我先说了寄生组合继承，然后他问我组合继承解决了原型链继承的哪些问题？）
- Javascript 的数据类型（8 种）
- JSBridge 的原理
- 你能说一下 for of 和 for in 的区别吗？
- for of 你提到 Symbol.iterator，那么你能不能说一下你对 iterator 的理解？（迭代器模式在 js 里面的实现）
- iterator 和 generator 的关系是什么？你说 iterator 能自动执行，那么是怎么实现自动执行的？

## TypeScript

- 为什么要用 ts，接口是什么，泛型是什么
- typescript 的联合类型和交叉类型是什么？
- typescript 的 Interface 和 type 有什么区别？

## React

- [react18 的新特性](./react/README.md)
- [合成事件](./react/events.md)
- [setState 是同步还是异步](./react/setState.md)
- [为什么 useState 要使用数组而不是对象?](./react/useState.md)
- React 和 Vue 的区别
- React 的生命周期和官方为什么要改它的生命周期
- react 和 vue 的使用情况、怎么编写一个 vue 插件、Vue.use 函数里面具体做了哪些事
- 简述下 react 受控和非受控组件

### React Hook

- react hook 出现的意义什么？解决了什么问题？
- React Hook 有什么问题，Vue3 中是怎么解决这些问题的
- Hooks 为什么不能在循环和判断中使用，Hooks 是怎么实现的
- react class 和 hook 的区别，hook 存在的意义是什么

### React Fiber

- React Fiber 是什么，是怎么实现的
- 简述 react fiber 的作用，以及实现原理

### React diff 算法

- React diff 算法是怎么实现的，传递 diff 算法的算法复杂度是多少

### React 优化

- React 项目中怎么优化
- PureComponent 为什么可以进行浅比较，shouldComponentUpdate 是怎么进行浅比较的
- 父组件渲染子组件是否会渲染，类组件有 PureComponent，函数组件怎么实现父组件渲染子组件不渲染

### Redux

- Redux 的原理
- Redux 和 dva 的区别
- 说说你对 Redux 的理解？其工作原理？

## Http

- 从输入 URL 到页面展示到底发生了什么

## Webpack

- Webpack 打包原理
- 使用 Webpack 做过哪些优化
- Webpack 中主要有哪些配置
- loader 是什么，plugin 是什么，写过 loader 和 plugin 吗，二者的区别
- AST 是什么，有没有了解过 AST
- 简述一下 babel 和 ast？可以用 ast 做一些什么事？

## 浏览器

- 路由有哪几种，是怎么实现的（3 种）
- section 是用来做什么的
- 了解 SSO 吗
- 什么是重绘和重排
- 服务端渲染的方案有哪些？next.js 和 nuxt.js 的区别
- cdn 的原理

## 手写代码

- 简单实现下 promise
- 实现 promise 时的 then 函数不要 return 一个新的 promise 对象，直接复用当前 this

## 开放题

- 一个大型项目多人协作你们是怎么保证代码质量的
- 如果一个后台管理系统中有很多表格，你会怎么做（Hooks 逻辑拆分 / 封装业务组件）
- 了解过 Serverless，什么是 Serverless
- 说一下你知道的所有的跨端解决方案（taro/uni-app/flutter/electron/React-Native/weex）
- 你还知道哪些新的前端技术（微前端、Low Code、可视化、BI、BFF）
- 什么是微前端

## 其他

- 讲一下你知道的网络安全问题吧，例如你介绍一下 XSS 和 CSRF？分别怎么防御？
- 原生微信小程序的优势？与 Taro 相比
