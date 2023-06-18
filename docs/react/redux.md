---
title: Redux
description: 说说你对Redux的理解？其工作原理？
---

## 单向数据流

- 用户在 view 层触发某个事件，通过 dispatch 发送了 action 和 payload
- action 和 payload 被传入 reducer 函数，返回一个新的 state
- store 拿到 reducer 返回的 state 并做更新，同时通知 view 层进行 re-render

`redux`就是一个状态集中管理的容器，遵循三大基本原则：

- 单一数据源
- state 是只读的
- 使用纯函数来执行修改

## Redux 和 dva 的区别

1. createStore 可以帮助创建 store
2. store.dispatch 帮助派发 action , action 会传递给 store
3. store.getState 这个方法可以帮助获取 store 里边所有的数据内容
4. store.subscribe 方法订阅 store 的改变，只要 store 发生改变， store.subscribe 这个函数接收的这个回调函数就会被执行

Redux 是一个用于管理应用程序状态的 JavaScript 库。它提供了一种可预测的状态管理解决方案，使得应用程序的状态管理变得简单、一致和可维护。

Redux 的工作原理如下：

1. 单一数据源：Redux 强调应用程序状态的单一数据源原则。整个应用程序的状态被存储在一个单一的 JavaScript 对象中，称为 "store"。这个状态对象包含了应用程序中的所有状态数据。

2. 状态不可直接修改：在 Redux 中，状态是不可直接修改的。任何对状态的修改必须通过发起一个 "action" 来描述修改的意图。Action 是一个普通的 JavaScript 对象，它描述了需要对状态进行的变化。

3. 纯函数的 "reducer"：Reducers 是用于描述状态变化的纯函数。Reducer 接收当前的状态和一个 action，并返回一个新的状态对象。它负责根据 action 的类型来确定如何更新状态。由于 Reducer 是纯函数，它不会修改原始状态，而是返回一个新的状态对象。

4. 单向数据流：Redux 遵循单向数据流的模式。当应用程序的状态发生变化时，Redux 通过调用 Reducer 函数来计算新的状态，并将新的状态更新到应用程序的 store 中。然后，Redux 会通知所有订阅了 store 的组件，以便它们可以重新渲染来反映新的状态。

5. 异步操作的中间件：Redux 通过使用中间件来处理异步操作。中间件是一个拦截 action 的函数，可以在 action 到达 Reducer 之前进行处理。这使得我们可以处理异步操作、发起网络请求、触发多个 action 等。

通过以上的工作原理，Redux 提供了一个可预测的状态管理机制。它使得状态的变化变得明确、可追踪，并且通过单一数据源和纯函数的设计，降低了状态管理的复杂性和维护成本。Redux 在大型应用程序或需要共享状态的场景中特别有用，但对于小型应用程序，可以考虑使用 React 的内置状态管理解决方案（如 useState、useReducer）来简化开发。
