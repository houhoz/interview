# 面试题总结

## Css
- flex布局
- 说说z-index有什么需要注意的地方，z-index: 0 和z-index：1的区别，z-index为0和1哪个元素在上面
- 两个div，都给margin：20px，这两个div的间距是多少？为什么会产生这种问题？怎么解决？（BFC）
- 怎么触发BFC，说出你能想到的所有方案

## React
- react18的新特性
- 合成事件
- setState是同步还是异步
- 为什么useState要使用数组而不是对象?
- React和Vue的区别
- React的生命周期和官方为什么要改它的生命周期
- react和vue的使用情况、怎么编写一个vue插件、Vue.use函数里面具体做了哪些事
- 简述下react受控和非受控组件

### React Hook
- react hook出现的意义什么？解决了什么问题？
- React Hook有什么问题，Vue3中是怎么解决这些问题的
- Hooks为什么不能在循环和判断中使用，Hooks是怎么实现的
- react class 和 hook的区别，hook存在的意义是什么

### React Fiber
- React Fiber是什么，是怎么实现的
- 简述react fiber的作用，以及实现原理

### React diff算法
- React diff算法是怎么实现的，传递diff算法的算法复杂度是多少

### React 优化
- React项目中怎么优化
- PureComponent为什么可以进行浅比较，shouldComponentUpdate是怎么进行浅比较的
- 父组件渲染子组件是否会渲染，类组件有PureComponent，函数组件怎么实现父组件渲染子组件不渲染


### Redux
- Redux的原理
- Redux和dva的区别
- 说说你对Redux的理解？其工作原理？

## Http

- 从输入 URL 到页面展示到底发生了什么


## Webpack

- Webpack打包原理
- 使用Webpack做过哪些优化
- Webpack中主要有哪些配置
- loader是什么，plugin是什么，写过loader和plugin吗，二者的区别
- AST是什么，有没有了解过AST
- 简述一下babel和ast？可以用ast做一些什么事？

## TypeScript

- 为什么要用ts，接口是什么，泛型是什么
- typescript的联合类型和交叉类型是什么？
- typescript的Interface和type有什么区别？

## 浏览器

- 路由有哪几种，是怎么实现的（3种）
- section是用来做什么的
- 了解SSO吗
- 什么是重绘和重排
- 服务端渲染的方案有哪些？next.js和nuxt.js的区别
- cdn的原理

## JavaScript

- ES6的迭代器是怎么实现的
- 怎么实现继承
- Javascript的数据类型（8种）
- JSBridge的原理
- 你能说一下for of 和for in的区别吗？
- for of 你提到Symbol.iterator，那么你能不能说一下你对iterator的理解？（迭代器模式在js里面的实现）
- iterator和generator的关系是什么？你说iterator能自动执行，那么是怎么实现自动执行的？

## 手写代码
- 简单实现下promise
- 实现promise时的then函数不要return一个新的promise对象，直接复用当前this

## 开放题
- 一个大型项目多人协作你们是怎么保证代码质量的
- 如果一个后台管理系统中有很多表格，你会怎么做（Hooks逻辑拆分 / 封装业务组件）
- 了解过Serverless，什么是Serverless
- 说一下你知道的所有的跨端解决方案（taro/uni-app/flutter/electron/React-Native/weex）
- 你还知道哪些新的前端技术（微前端、Low Code、可视化、BI、BFF）
- 什么是微前端

## 其他
- 讲一下你知道的网络安全问题吧，例如你介绍一下XSS和CSRF？分别怎么防御？
