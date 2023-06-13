---
title: React18
description: React18新特性
---

## React 18 更新

1. 并发模式

- 并发模式是实现并发更新的基本前提
- v18 中，以是否使用并发特性作为是否开启并发更新的依据。
- 并发特性指开启并发模式后才能使用的特性，比如：useDeferredValue/useTransition

2. 更新 render API  
   v18 使用 ReactDOM.createRoot() 创建一个新的根元素进行渲染，使用该 API，会自动启用并发模式。

3. setState 自动批处理  
   批处理是为了获得更好的性能，在数据层，将多个状态更新批量处理，合并成一次更新（在视图层，将多个渲染合并成一次渲染）。

- 在 18 之前，只有在 react 事件处理函数中，才会自动执行批处理，其它情况会多次更新
- 在 18 之后，任何情况都会自动执行批处理，多次更新始终合并为一次

4. 新的 hook

**useTransition 和 useDeferredValue 它们的作用都是降低更新操作的优先级**

## 并发(Concurrent)

> 在实现"并发"之前，渲染是同步的(所谓的同步，就是指如果 react 的某个组件执行时间长，它无法中断，会一直执行，直到组件完全渲染到 DOM 中。在这个过程中，由于 Javascript 是单线程的，因此渲染任务会占满 JavaScript 线程，阻塞浏览器的主线程，从而导致用户无法进行交互操作)。  
> 然而，有了并发渲染（并发指的就是通过 time slice 将任务拆分为多个，然后 react 根据优先级来完成调度策略，将低优先级的任务先挂起，将高优先级的任务分配到浏览器主线程的一帧的空闲时间中去执行，如果浏览器在当前一帧中还有剩余的空闲时间，那么 React 就会利用空闲时间来执行剩下的低优先级的任务），react 的渲染和更新可以被中断和恢复。那么如果在执行某个组件更新过程中又有了新的更新请求到达。比如我们下面的 input 输入事件，那么 React 就会创建一个新的更新版本。这种情况下，在某个时间段内可能会同时存在多个更新版本。  
> 为了优化上述问题，React 18 提供了新的 Hook 函数 useTransition，它可以将多个版本的更新打包到一起，在未来的某一帧空闲时间内执行，从而优化应用的性能和响应时间。而 useDeferredValue 的作用是将某个值的更新推迟到未来的某个时间片内执行，从而避免不必要的重复渲染和性能开销。

## useTransition 的应用场景

开启并发模式-concurrent，concurrent 模式允许将 UI 更新标记为高优先级的或者可中断的低优先级操作。

useTransition()将 UI 更新标记为低优先级，这种操作对大量的非紧急更新非常有用。

useTransition 是一个用于处理渲染过程中的状态转换的 Hook。它可以让我们在组件更新时添加一个延迟，以便在完成数据加载之前保持用户界面的稳定性。在数据加载完成后，React 会将组件更新为最新状态。

```js
import { useState, useTransition, useMemo } from 'react'
const numbers = [...new Array(20000).keys()]

function App() {
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = e => {
    startTransition(() => {
      setQuery(e.target.value)
    })
  }

  const list = useMemo(
    () =>
      numbers.map((i, index) =>
        query ? (
          i.toString().startsWith(query) && <p key={index}>{i}</p>
        ) : (
          <p key={index}>{i}</p>
        )
      ),
    [query]
  )

  return (
    <div>
      <input type='number' onChange={handleChange} />
      <div>{isPending ? 'Loading...' : list}</div>
    </div>
  )
}

export default App
```

## useDeferredValue

```js
import { useState, useMemo, useDeferredValue } from 'react'

const numbers = [...new Array(200000).keys()]

export default function App() {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <input type='number' onChange={handleChange} value={query} />
      <List query={query} />
    </div>
  )
}

function List(props) {
  const { query } = props
  const defQuery = useDeferredValue(query)

  const list = useMemo(
    () =>
      numbers.map((i, index) =>
        defQuery ? (
          i.toString().startsWith(defQuery) && <p key={index}>{i}</p>
        ) : (
          <p key={index}>{i}</p>
        )
      ),
    [defQuery]
  )

  return <div>{list}</div>
}
```

> useTransition 直接控制更新状态的代码，而 useDeferredValue 控制一个受状态变化影响的值。它们做的是同样的事,帮助提高用户体验(UX)，不应该同时使用这两者。  
> 相反，如果你可以访问更新操作，并且有一些更新操作应该以较低的优先级处理，就使用 useTransition。如果你没有这种权限，就使用 useDeferredValue。

参考：

- https://juejin.cn/post/7210375522504982584
- https://juejin.cn/post/7222499585036648504
