import{_ as h,r as o,o as d,c as s,a as e,b as a,w as t,d as i,e as n}from"./app-42511d1c.js";const c={},u=e("h1",{id:"面试题总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#面试题总结","aria-hidden":"true"},"#"),i(" 面试题总结")],-1),_=e("h2",{id:"css",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css","aria-hidden":"true"},"#"),i(" Css")],-1),f=e("li",null,"说说 z-index 有什么需要注意的地方，z-index: 0 和 z-index：1 的区别，z-index 为 0 和 1 哪个元素在上面",-1),p=e("li",null,"两个 div，都给 margin：20px，这两个 div 的间距是多少？为什么会产生这种问题？怎么解决？（BFC）",-1),x=e("li",null,"怎么触发 BFC，说出你能想到的所有方案",-1),b=n('<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><ul><li>ES6 的迭代器是怎么实现的</li><li>js 怎么去实现继承？（我先说了寄生组合继承，然后他问我组合继承解决了原型链继承的哪些问题？）</li><li>Javascript 的数据类型（8 种）</li><li>JSBridge 的原理</li><li>你能说一下 for of 和 for in 的区别吗？</li><li>for of 你提到 Symbol.iterator，那么你能不能说一下你对 iterator 的理解？（迭代器模式在 js 里面的实现）</li><li>iterator 和 generator 的关系是什么？你说 iterator 能自动执行，那么是怎么实现自动执行的？</li></ul><h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><ul><li>为什么要用 ts，接口是什么，泛型是什么</li><li>typescript 的联合类型和交叉类型是什么？</li><li>typescript 的 Interface 和 type 有什么区别？</li></ul><h2 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h2>',5),k=e("li",null,"React 和 Vue 的区别",-1),m=e("li",null,"React 的生命周期和官方为什么要改它的生命周期",-1),R=e("li",null,"react 和 vue 的使用情况、怎么编写一个 vue 插件、Vue.use 函数里面具体做了哪些事",-1),S=e("li",null,"简述下 react 受控和非受控组件",-1),v=n('<h3 id="react-hook" tabindex="-1"><a class="header-anchor" href="#react-hook" aria-hidden="true">#</a> React Hook</h3><ul><li>react hook 出现的意义什么？解决了什么问题？</li><li>React Hook 有什么问题，Vue3 中是怎么解决这些问题的</li><li>Hooks 为什么不能在循环和判断中使用，Hooks 是怎么实现的</li><li>react class 和 hook 的区别，hook 存在的意义是什么</li></ul><h3 id="react-fiber" tabindex="-1"><a class="header-anchor" href="#react-fiber" aria-hidden="true">#</a> React Fiber</h3><ul><li>React Fiber 是什么，是怎么实现的</li><li>简述 react fiber 的作用，以及实现原理</li></ul><h3 id="react-diff-算法" tabindex="-1"><a class="header-anchor" href="#react-diff-算法" aria-hidden="true">#</a> React diff 算法</h3><ul><li>React diff 算法是怎么实现的，传递 diff 算法的算法复杂度是多少</li></ul><h3 id="react-优化" tabindex="-1"><a class="header-anchor" href="#react-优化" aria-hidden="true">#</a> React 优化</h3><ul><li>React 项目中怎么优化</li><li>PureComponent 为什么可以进行浅比较，shouldComponentUpdate 是怎么进行浅比较的</li><li>父组件渲染子组件是否会渲染，类组件有 PureComponent，函数组件怎么实现父组件渲染子组件不渲染</li></ul><h3 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> Redux</h3>',9),j=e("li",null,"Redux 和 dva 的区别",-1),g=e("li",null,"说说你对 Redux 的理解？其工作原理？",-1),C=n('<h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> Http</h2><ul><li>从输入 URL 到页面展示到底发生了什么</li></ul><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h2><ul><li>Webpack 打包原理</li><li>使用 Webpack 做过哪些优化</li><li>Webpack 中主要有哪些配置</li><li>loader 是什么，plugin 是什么，写过 loader 和 plugin 吗，二者的区别</li><li>AST 是什么，有没有了解过 AST</li><li>简述一下 babel 和 ast？可以用 ast 做一些什么事？</li></ul><h2 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h2><ul><li>路由有哪几种，是怎么实现的（3 种）</li><li>section 是用来做什么的</li><li>了解 SSO 吗</li><li>什么是重绘和重排</li><li>服务端渲染的方案有哪些？next.js 和 nuxt.js 的区别</li><li>cdn 的原理</li></ul><h2 id="手写代码" tabindex="-1"><a class="header-anchor" href="#手写代码" aria-hidden="true">#</a> 手写代码</h2><ul><li>简单实现下 promise</li><li>实现 promise 时的 then 函数不要 return 一个新的 promise 对象，直接复用当前 this</li></ul><h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h2><ul><li>版本号排序</li><li>大数相加</li><li>寻找和为定值的多个数</li><li>数组排序</li><li>数组去重</li></ul><h2 id="开放题" tabindex="-1"><a class="header-anchor" href="#开放题" aria-hidden="true">#</a> 开放题</h2><ul><li>一个大型项目多人协作你们是怎么保证代码质量的</li><li>如果一个后台管理系统中有很多表格，你会怎么做（Hooks 逻辑拆分 / 封装业务组件）</li><li>了解过 Serverless，什么是 Serverless</li><li>说一下你知道的所有的跨端解决方案（taro/uni-app/flutter/electron/React-Native/weex）</li><li>你还知道哪些新的前端技术（微前端、Low Code、可视化、BI、BFF）</li><li>什么是微前端</li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ul><li>讲一下你知道的网络安全问题吧，例如你介绍一下 XSS 和 CSRF？分别怎么防御？</li><li>原生微信小程序的优势？与 Taro 相比<br> https://blog.csdn.net/qq_39207948/article/details/112526275</li></ul><h3 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h3>',15),B={href:"https://juejin.cn/post/6990174096554360869",target:"_blank",rel:"noopener noreferrer"},y={href:"https://juejin.cn/post/6888689009854251021",target:"_blank",rel:"noopener noreferrer"},F={href:"https://zhuanlan.zhihu.com/p/524974090",target:"_blank",rel:"noopener noreferrer"},V={href:"https://juejin.cn/post/7239715208792342584",target:"_blank",rel:"noopener noreferrer"},w={href:"https://juejin.cn/post/7195513281228898363",target:"_blank",rel:"noopener noreferrer"};function z(H,L){const l=o("RouterLink"),r=o("ExternalLinkIcon");return d(),s("div",null,[u,_,e("ul",null,[e("li",null,[a(l,{to:"/css/"},{default:t(()=>[i("flex 布局")]),_:1})]),f,p,x]),b,e("ul",null,[e("li",null,[a(l,{to:"/react/"},{default:t(()=>[i("react18 的新特性")]),_:1})]),e("li",null,[a(l,{to:"/react/events.html"},{default:t(()=>[i("合成事件")]),_:1})]),e("li",null,[a(l,{to:"/react/setState.html"},{default:t(()=>[i("setState 是同步还是异步")]),_:1})]),e("li",null,[a(l,{to:"/react/useState.html"},{default:t(()=>[i("为什么 useState 要使用数组而不是对象?")]),_:1})]),k,m,R,S]),v,e("ul",null,[e("li",null,[a(l,{to:"/react/redux.html"},{default:t(()=>[i("Redux 的原理")]),_:1})]),j,g]),C,e("ul",null,[e("li",null,[e("a",B,[i("2021 年：字节跳动前端面经"),a(r)])]),e("li",null,[e("a",y,[i("字节跳动前端面试总结"),a(r)])]),e("li",null,[e("a",F,[i("2022 前端面试经历"),a(r)])]),e("li",null,[e("a",V,[i("大专前端，三轮面试，终与阿里无缘"),a(r)])]),e("li",null,[e("a",w,[i("2023 再看 React 状态管理库"),a(r)])])])])}const T=h(c,[["render",z],["__file","index.html.vue"]]);export{T as default};
