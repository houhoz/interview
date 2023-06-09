---
title: 防抖与节流
description: 防抖与节流是什么，解决什么问题
---

## 防抖
在第一次触发事件时，不立即执行函数，若计时器的时间间隔之内没有再次触发事件就执行；在计时器时间间隔内又触发新的事件，会清除计时器，重新计时。

在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

```js
function debounce(fn, delay) {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, delay)
  }
}

// const log = () => {
//   console.log('1111 :>> ', 1111)
// }
// window.addEventListener('scroll', debounce(log, 500))
// window.onscroll = debounce(log, 500)
```

## 节流

定义了标志变量。第一次触发的事件正在执行时，计时器设定时间内又触发新的事件，不会再执行。

规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

```js
function throttle(fn, delay) {
  // 记录上一次函数触发的时间
  let lastTime = Date.now()
  return () => {
    // 记录当前函数触发的时间
    var nowTime = Date.now()
    // 当前时间减去上一次执行时间大于这个时间间隔才让他触发这个函数
    if (nowTime - lastTime >= delay) {
      fn()
      // 同步时间
      lastTime = Date.now()
    }
  }
}

window.onscroll = throttle(log, 500)
```

小结：

输入框搜索确定结果的时候 可以使用防抖，用户最后一次的输入结果

搜索框存在搜索提示的时候 就需要使用节流，用户可以一边输入一边看到搜索提示

## 实现一个useDebounce、useThrottle

1. 什么是防抖、节流，分别解释一下？
2. 在白纸上手写一个防抖or节流函数，自己任选（限时4分钟）
3. react hooks有了解吗？上机实现一个useDebounce、useThrottle
4. typescript有了解吗？用ts再来写一遍