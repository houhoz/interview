---
title: setState
description: setState是同步还是异步
---

# setState 是同步还是异步

setState 并不是单纯异步或者是同步的，它的表现会因为调用场景的不同而不同：

在 react 钩子函数中也就是我们说的生命周期函数里是 setState 异步的，还有合成事件也就是我们定义的函数，setState 也是异步的。

而在 setTimeout、setInterval 等函数中，包括在 DOM 原生事件中，setState 都是同步的。

导致这种差异的原因，是因为 react 的事务机制和更新机制的工作方式决定的。事务机制，在源码中这个变量为`isBatchingUpdates`，在执行 react 钩子函数和合成事件之前，这个变量都会被 react 修改成 true,当这个变量为 true 时，setState 就不会生效，当钩子函数或者合成事件执行完毕之后，这个变量会被设置为 false,此时 setState 才会生效，`isBatchingUpdates`就好像一把锁，在`isBatchingUpdates`的约束下 setState 只能是异步的。但是当遇到 setTimeout 时，事情就会有点不同，isBatchingUpdates 的约束对 setTimeout 内部的执行逻辑完全没有约束能力,这是因为 setTimeout 就是异步的，当异步函数开始执行的时候，同步任务早就结束了，isBatchingUpdates 早就被设置为了 false。批量更新，每来一个 setState，就会把他塞进一个队列里面，最后再合并相同任务，最后只针对需要更新的 state 进行操作

> 从`react 18`开始, 使用了`createRoot`创建应用后, 所有的更新都会自动进行批处理(也就是异步合并).使用`render`的应用会保持之前的行为.  
> 如果你想保持同步更新行为, 可以使用`ReactDOM.flushSync()`.

参考文献

- https://zhuanlan.zhihu.com/p/460668459
