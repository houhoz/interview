---
title: React 优化
description: React 项目中怎么优化
---

## 使用 React.memo 避免组件的重复渲染

一般来讲以下三种情况需要重新渲染组件：

- 组件内部 state 发生变化时
- 组件内部使用的 context 发生变化时
- 组件外部传递的 props 发生变化时

props 发生变化时重新渲染，这种情况是一种理想情况。因为如果一个父组件重新渲染，即使其子组件的 props 没有发生任何变化，这个子组件也会重新渲染，我们称这种渲染为非必要的重新渲染。这时 React.memo 就可以派上用场了。

被 React.memo 包裹的组件在渲染前，会对新旧 props 进行浅比较：

- 如果新旧 props 浅比较相等，则不进行重新渲染（使用缓存的组件）
- 如果新旧 props 浅比较不相等，则进行重新渲染（重新渲染的组件）

```jsx
import React, { useState } from 'react'

const Child = () => {
  console.log('Child 渲染了')
  return <div>Child</div>
}

const MemoChild = React.memo(() => {
  console.log('MemoChild 渲染了')
  return <div>MemoChild</div>
})

function App() {
  const [isUpdate, setIsUpdate] = useState(true)
  const onClick = () => {
    setIsUpdate(!isUpdate)
    console.log('点击了按钮')
  }
  return (
    <div className='App'>
      <Child />
      <MemoChild />
      <button onClick={onClick}>刷新 App </button>
    </div>
  )
}

export default App
```

在没有任何优化的情况下，React 中某一组件重新渲染，会导致其全部的子组件重新渲染。即通过 React.memo 的包裹，在其父组件重新渲染时，可以避免这个组件的非必要重新渲染。

【渲染】指的是 React 执行函数组件并生成或更新虚拟 DOM 树（Fiber 树）的过程。在渲染真实 DOM （Commit 阶段）前还有 DOM Diff 的过程，会比对虚拟 DOM 之间的差异，再去渲染变化的 DOM 。不然如果每次更改状态都会重新渲染真实 DOM，那么 React 的性能真就爆炸了

## 使用 useMemo 避免重复计算

React 的 useMemo 把【计算函数 fn】和【依赖项数组 deps】作为参数，useMemo 会执行 fn 并返回一个【缓存值 memorized】，它仅会在某个依赖项改变时才重新计算 memorized。这种优化有助于避免在每次渲染时都进行高开销的计算。

```jsx
import React, { useMemo, useState } from 'react'

function App() {
  const [list] = useState([1, 2, 3, 4])
  const [isUpdate, setIsUpdate] = useState(true)
  const onClick = () => {
    setIsUpdate(!isUpdate)
    console.log('点击了按钮')
  }

  // 普通计算 list 的和
  console.log('普通计算')
  const sum = list.reduce((previous, current) => previous + current)

  // 缓存计算 list 的和
  const memoSum = useMemo(() => {
    console.log('useMemo 计算')
    return list.reduce((previous, current) => previous + current)
  }, [list])

  return (
    <div className='App'>
      <div> sum:{sum}</div>
      <div> memoSum:{memoSum}</div>
      <button onClick={onClick}>重新渲染 App</button>
    </div>
  )
}

export default App
```

在函数组件内部，一些基于 State 的衍生值和一些复杂的计算可以通过 useMemo 进行性能优化。

## 使用 useCallback 避免子组件的重复渲染

React 的 useCallback 把【回调函数 fn】和【依赖项数组 deps】作为参数，并返回一个【缓存的回调函数 memorizedCallback】（本质上是一个引用），它仅会在某个依赖项改变时才重新生成 memorizedCallback。当你把 memorizedCallback 作为参数传递给子组件（被 React.memo 包裹过的）时，它可以避免非必要的子组件重新渲染。

### useCallback 与 useMemo 异同

- useCallback 和 useMemo 都是缓存中间状态；
- 不同的是 useMemo 可以缓存任何类型的值，useCallback 仅仅缓存函数。

useCallback 与 useMemo 都会缓存对应的值，并且只有在依赖变动的时候才会更新缓存，区别在于：

- useMemo 会执行传入的回调函数，返回的是函数执行的结果
- useCallback 不会执行传入的回调函数，返回的是函数的引用

### useCallback 正确的使用场景

函数组件内部定义的函数需要作为其他 Hooks 的依赖。
函数组件内部定义的函数需要传递给其子组件，并且子组件由 React.memo 包裹。

场景 1：useCallback 主要是为了避免当组件重新渲染时，函数引用变动所导致其它 Hooks 的重新执行，更为甚者可能造成组件的无限渲染：

```jsx
import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const add = () => {
    setCount(count => count + 1)
  }
  useEffect(() => {
    add()
  }, [add])
  return <div className='App'>count: {count}</div>
}

export default App
```

useEffect 会执行 add 函数从而触发组件的重新渲染，函数的重新渲染会重新生成 add 的引用，从而触发 useEffect 的重新执行，然后再执行 add 函数触发组件的重新渲染… ，从而导致无限循环：

useEffect 执行 -> add 执行 -> setCount 执行 -> App 重新渲染 -> add 重新生成 -> useEffect 执行 -> add 执行 -> …

为了避免上述的情况，我们给 add 函数套一层 useCallback 避免函数引用的变动，就可以解决无限循环的问题：

```jsx
import React, { useCallback, useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  // 用 useCallback 包裹 add ，只会在组件第一次渲染生成函数引用，之后组件重新渲染时，add 会复用第一次生成的引用。
  const add = useCallback(() => {
    setCount(count => count + 1)
  }, [])
  useEffect(() => {
    add()
  }, [add])
  return <div className='App'>count: {count}</div>
}

export default App
```

场景 2：useCallback 是为了避免由于回调函数引用变动，所导致的子组件非必要重新渲染。（这个子组件有两个前提：首先是接收回调函数作为 props，其次是被 React.memo 所包裹。）

```jsx
const Child = React.memo(({ onClick }) => {
  console.log(`Button render`)
  return (
    <div>
      <button onClick={onClick}>child button</button>
    </div>
  )
})
function App() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  // 情况1：未包裹 useCallback
  const onClick = () => {
    setCountA(countA + 1)
  }
  // 情况2：包裹 useCallback
  const onClick = useCallback(() => {
    setCountA(countA + 1)
  }, [])
  return (
    <div>
      <div>countA:{countA}</div>
      <div>countB:{countB}</div>
      <Child onClick={onClick1} />
      <button onClick={() => setCountB(countB + 1)}>
        App button
      </button>
    </div>
  )
}
```

总结:

- 通过 React.memo 包裹组件，可以避免组件的非必要重新渲染。
- 通过 useMemo，可以避免组件更新时所引发的重复计算。
- 通过 useCallback，可以避免由于函数引用变动所导致的组件重复渲染。

## 使用 useCallback,useMemo

React.memo 和 useCallback,useMemo 结合，单写 useCallback,useMemo，虽然使用了缓存，但是对用到该 props 的子组件还是重新渲染！！单写 React.memo,传过来的 props 还是新的方法/变量，也不能达到优化性能的目的。

## React 中的浅比较是如何工作的？useMemo 是怎么进行浅比较的

Object.is()
