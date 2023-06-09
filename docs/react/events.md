---
title: React的合成事件
description: React的合成事件
---

React 合成事件是指将原生事件合成一个 React 事件，之所以要封装自己的一套事件机制，目的是为了实现全浏览器的一致性，抹平不同浏览器之间的差异性。

![alt 图片](./images/eventflow.svg)

所谓事件流包括三个阶段：事件捕获、目标阶段和事件冒泡。事件捕获是从外到里，对应图中的红色箭头标注部分 window -> document -> html ... -> target，目标阶段是事件真正发生并处理的阶段，事件冒泡是从里到外，对应图中的 target -> ... -> html -> document -> window。 React 合成事件的工作原理大致可以分为两个阶段：

1. 事件绑定
2. 事件触发

在 React17 之前，React 是把事件委托在 document 上的，React17 及以后版本不再把事件委托在 document 上，而是委托在挂载的容器上了  
当真实的 dom 触发事件时，此时构造 React 合成事件对象，按照冒泡或者捕获的路径去收集真正的事件处理函数，在此过程中会先处理原生事件，然后当冒泡到 document 对象后，再处理 React 事件。
