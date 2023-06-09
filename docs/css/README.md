---
title: Flex布局
description: 常见的布局方式是什么，flex你了解的多吗
---

# Flex布局

flexbox，是一维的布局模型。一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。

> 常见的布局方式有浮动布局、Position定位、Flex、 Grid；

> Grid布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局

## flex:1 到底什么含义

flex属性是flex-grow，flex-shrink和flex-basis的缩写。

`flex: 1; === flex: 1 1 0%;`

- 第一个参数表示: **flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大**
- 第二个参数表示: **flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小**
- 第三个参数表示: **flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小**

> 不管是否设置宽度，flex-basis的值都是0，所有子项平分全部的父亲空间


## 当display:flex;碰上white-space:nowrap;的时候，会打乱flex布局。

问题解决:

- content 设置min-width: 0;
- content 设置overflow: hidden;