---
title: fiber架构
description: fiber架构
---

## 定义

协调的概念：比较虚拟 DOM 树，找出需要变更的节点，更新，称为协调(Reconcliation)

### React16 之前的协调

特点：

- 递归调用，通过 React DOM 树级关系构成的栈递归
- 在 virtualDOM 的比对过程中，发现一个 instance 有更新，会立即执行 DOM 操作。
- 同步更新，没法打断

缺点：
如果有大量更新或者有很深的组件结构树，执行 diff 操作的执行栈会越来越深并不能及时释放，那么 js 将一直占用主线程，一直要等到整棵 virtualDOM 树计算完成之后，才能把执行权交给渲染引擎，这就会导致用户的交互操作以及页面动画得不到响应，就会有明显感觉卡顿(掉帧)，影响用户体验。

解决：
把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会，所以 React 在 15 版本更新 16 版本时候推出了 Fiber 协调的概念。

关于 fiber，有三层具体含义：

1. 作为架构来说，在旧的架构中，Reconciler（协调器）采用递归的方式执行，无法中断，节点数据保存在递归的调用栈中，被称为 Stack Reconciler，stack 就是调用栈；在新的架构中，Reconciler（协调器）是基于 fiber 实现的，节点数据保存在 fiber 中，所以被称为 fiber Reconciler。
2. 作为静态数据结构来说，每个 fiber 对应一个组件，保存了这个组件的类型对应的 dom 节点信息，这个时候，fiber 节点就是我们所说的虚拟 DOM。
3. 作为动态工作单元来说，fiber 节点保存了该节点需要更新的状态，以及需要执行的副作用

React Fiber 是 React 16 版本引入的一种新的协调机制，它的作用是实现更高效的组件渲染和更新，以提升应用程序的性能和用户体验。

React Fiber 的主要作用包括：

1. 异步渲染：React Fiber 支持将组件的渲染工作划分为多个优先级较低的小任务，从而使得渲染过程可以在多帧之间分散执行，不会阻塞主线程。这样可以提高应用程序的响应性，避免长时间的卡顿。

2. 增量更新：React Fiber 使用增量更新的方式进行组件更新，它可以中断和恢复渲染过程，根据当前帧的时间片情况来动态调整任务的优先级。这使得 React 可以根据当前的资源情况，灵活地调度和处理更新任务，以提供更平滑的用户体验。

3. 优先级调度：React Fiber 引入了任务的优先级概念，可以根据任务的类型和优先级来调度和执行任务。通过将高优先级任务优先执行，React Fiber 可以更好地响应用户交互和动态变化的场景，提升应用程序的实时性。

React Fiber 的实现原理涉及以下关键概念：

1. Fiber 节点：每个 React 组件都会对应一个 Fiber 节点，它是一个 JavaScript 对象，用于描述组件的结构和状态。Fiber 节点包含了组件的类型、props、状态、子节点等信息。

2. 调度器：React Fiber 有一个全局的调度器，负责控制任务的调度和优先级管理。调度器根据任务的优先级和时间片来决定任务的执行顺序和时间分配。

3. 协调过程：React Fiber 采用一种双缓存技术，将组件的协调过程分为两个阶段：reconciliation（协调）和 commit（提交）。在协调阶段，React Fiber 会通过比较新旧 Fiber 节点的差异，确定需要更新的组件和子树。在提交阶段，React Fiber 根据协调阶段的结果，对组件进行实际的渲染和更新操作。

4. 时间切片：React Fiber 将渲染任务划分为多个时间片（Time Slice），并通过调度器分配时间片给任务。每个时间片有一定的时间限制，当时间片用尽时，会中断任务的执行，并将控制权交还给调度器，以便处理其他任务和事件。

通过上述实现原理，React Fiber 实现了更高效的组件渲染和更新机制。它通过异步渲染、增量更新和

优先级调度等技术手段，使得 React 应用程序能够更好地响应用户交互、提供流畅的用户体验，并在资源有限的环境下进行智能的任务调度和处理。

参考

- https://juejin.cn/post/6844904202137763847#heading-6
