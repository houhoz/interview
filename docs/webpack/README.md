---
title: Webpack的打包流程
description: Webpack的打包流程
---

# Webpack的打包流程


1. Webpack 从项目的`entry`入口文件开始递归分析，调用所有配置的 `loader`对模块进行编译因为 webpack 默认只能识别 js 代码，所以如 css 文件、.vue 结尾的文件，必须要通过对应的 loader 解析成 js 代码后，webpack 才能识别

2. 利用`babel(babylon)`将 js 代码转化为`ast抽象语法树`，然后通过`babel-traverse`对 ast 进行遍历

3. 遍历的目的找到文件的`import引用节点，`因为现在我们引入文件都是通过 import 的方式引入，所以找到了 import 节点，就找到了文件的依赖关系

4. 同时每个模块生成一个唯一的 id，并将解析过的`模块缓存`起来，如果其他地方也引入该模块，就无需重新解析，最后根据依赖关系生成依赖图谱

5. 递归遍历所有依赖图谱的模块，组装成一个个包含多个模块的 `Chunk(块)`

6. 最后将生成的文件输出到 `output` 的目录中

