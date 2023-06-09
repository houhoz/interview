---
title: fiber架构
description: fiber架构
---

关于 fiber，有三层具体含义：

1. 作为架构来说，在旧的架构中，Reconciler（协调器）采用递归的方式执行，无法中断，节点数据保存在递归的调用栈中，被称为 Stack Reconciler，stack 就是调用栈；在新的架构中，Reconciler（协调器）是基于 fiber 实现的，节点数据保存在 fiber 中，所以被称为 fiber Reconciler。
2. 作为静态数据结构来说，每个 fiber 对应一个组件，保存了这个组件的类型对应的 dom 节点信息，这个时候，fiber 节点就是我们所说的虚拟 DOM。
3. 作为动态工作单元来说，fiber 节点保存了该节点需要更新的状态，以及需要执行的副作用
