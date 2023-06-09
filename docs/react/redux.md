---
title: Redux
description: 说说你对Redux的理解？其工作原理？
---

`redux`就是一个状态集中管理的容器，遵循三大基本原则：

- 单一数据源
- state 是只读的
- 使用纯函数来执行修改
1. createStore可以帮助创建 store
2. store.dispatch 帮助派发 action , action 会传递给 store
3. store.getState 这个方法可以帮助获取 store 里边所有的数据内容
4. store.subscrible 方法订阅 store 的改变，只要 store 发生改变， store.subscrible 这个函数接收的这个回调函数就会被执行