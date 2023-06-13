---
title: React 和 Vue 的区别
description: React 和 Vue 的区别
---

## 共同点

- 数据驱动视图
- 组件化
- 都使用 Virtual DOM

### 1. 数据驱动视图

在 jquery 时代，我们需要频繁的操作 DOM 来实现页面效果与交互；而 Vue 和 React 解决了这一痛点，采用数据驱动视图方式，隐藏操作 DOM 的频繁操作。所以我们在开发时，只需要关注数据变化即可，但是二者实现方式不尽相同。

### 2. 组件化

React 与 Vue 都遵循组件化思想，它们把注意力放在 UI 层，将页面分成一些细块，这些块就是组件，组件之间的组合嵌套就形成最后的网页界面。  
所以在开发时都有相同的套路，比如都有父子组件传递， 都有数据状态管理、前端路由、插槽等。

### 3. Virtual DOM

Vue 与 React 都使用了 Virtual DOM + Diff 算法， 不管是 Vue 的 Template 模板+options api 写法， 还是 React 的 Class 或者 Function 写法,最后都是生成 render 函数，而 render 函数执行返回 VNode(虚拟 DOM 的数据结构，本质上是棵树)。  
当每一次 UI 更新时，总会根据 render 重新生成最新的 VNode，然后跟以前缓存起来老的 VNode 进行比对，再使用 Diff 算法（框架核心）去真正更新真实 DOM（虚拟 DOM 是 JS 对象结构，同样在 JS 引擎中，而真实 DOM 在浏览器渲染引擎中，所以操作虚拟 DOM 比操作真实 DOM 开销要小的多）

## 不同点

### 1. 核心思想不同

vue 的主要特点：灵活易用的渐进式框架，进行数据拦截/代理，它对侦测数据的变化更敏感、更精确。

React 推崇函数式编程（纯组件），数据不可变以及单向数据流

### 2. 组件写法差异

React 推荐的做法是 JSX + inline style, 也就是把 HTML 和 CSS 全都写进 JavaScript 中,即 all in js; Vue 推荐的做法是 template 的单文件组件格式(简单易懂，从传统前端转过来易于理解),即 html,css,JS 写在同一个文件(vue 也支持 JSX 写法)

### 3. diff 算法不同

- 不同的组件产生不同的 DOM 结构。当 type 不相同时，对应 DOM 操作就是直接销毁老的 DOM，创建新的 DOM。
- 同一层次的一组子节点，可以通过唯一的 key 区分。

### 4. 响应式原理不同

Vue

- Vue 依赖收集，自动优化，数据可变。
- Vue 递归监听 data 的所有属性,直接修改。
- 当数据改变时，自动找到引用组件重新渲染。

React

- React 基于状态机，手动优化，数据不可变，需要 setState 驱动新的 state 替换老的 state。当数据改变时，以组件为根目录，默认全部重新渲染,所以 React 中会需要 shouldComponentUpdate 这个生命周期函数方法来进行控制
