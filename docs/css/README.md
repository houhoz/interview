---
title: Flex布局
description: 常见的布局方式是什么，flex你了解的多吗
---

## Flex 布局

flexbox，是一维的布局模型。一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。

> 常见的布局方式有浮动布局、Position 定位、Flex、 Grid；  
> Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局

### flex:1 到底什么含义

flex 属性是 flex-grow，flex-shrink 和 flex-basis 的缩写。

`flex: 1; === flex: 1 1 0%;`

- 第一个参数表示: **flex-grow 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大**
- 第二个参数表示: **flex-shrink 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小**
- 第三个参数表示: **flex-basis 给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小**

> 不管是否设置宽度，flex-basis 的值都是 0，所有子项平分全部的父亲空间

### 当 display:flex;碰上 white-space:nowrap;的时候，会打乱 flex 布局。

问题解决:

- content 设置 min-width: 0;
- content 设置 overflow: hidden;
