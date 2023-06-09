---
title: 从输入 URL 到页面展示到底发生了什么
description: 从输入 URL 到页面展示到底发生了什么
---

## 基本流程

浏览器在发送请求之前先检查有没有缓存，过程如下：
![alt 图片](./images/brower-caching.png)

> 浏览器会先去查看强缓存（Expires 和 cache-control）判断是否过期，如果强缓存生效，直接从缓存中读取资源；若不生效则进行协商缓存(Last-Modified / If-Modified-Since 和 Etag/If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，返回 200，并重新返回资源和缓存标识，再次存入浏览器缓存中；生效则返回 304，并从缓存中读取资源。（协商缓存之前要经过 DNS 域名解析，之后建立 TCP 链接）

### 强制缓存：

根据 Expires（response header 里的过期时间）判断，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存，并不会向服务端发起请求，展示为 200 状态。

### 协商缓存：

客户端向服务端发送带有 If-None-Match 和 If-Modified-Since 的请求进行协商判断，如果资源没有变化继续使用本地缓存，记录为 304 状态；如果资源发生变化，服务端响应数据，记录为 200 状态。

1. DNS 解析:将域名解析成 IP 地址

   - 首先搜索浏览器自身的 DNS 缓存，有缓存直接返回;
   - 浏览器自身 DNS 不存在，浏览器就会调用一个类似 getHostByName 的库函数,此函数会先去检测本地 hosts 文件，查看是否有对应 ip。
   - 如果本地 hosts 文件不存在映射关系，就会查询路由缓存，路由缓存不存在就去查找本地 DNS 服务器（一般 TCP/IP 参数里会设首选 DNS 服务器，通常是 8.8.8.8)(客户端到本地 DNS 服务器是递归过程）
   - 如果本地 DNS 服务器还没找到就会向根服务器发出请求。

2. TCP 连接：TCP 三次握手

   TCP 三次握手的过程如下：

   - 客户端发送标有 SYN 的数据包，表示我将要发送请求。
   - 服务端发送标有 SYN/ACK 的数据包，表示我已经收到通知，告知客户端发送请求。
   - 客户端发送标有 ACK 的数据包，表示我要开始发送请求，准备被接受。

   为什么 TCP 建立一定要三次呢？两次不行吗？

   - 双方要明确对方接收能力都是正常的，（客户端发之后，服务端可以确定客户端发送能力正常，服务端发送给客户端，客户端可以确定服务端的接收和发送能力正常，最后客户端发送确认，来确定客户端的接收能力。
   - 为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。

3. 发送 HTTP 请求
4. 服务器处理请求并返回 HTTP 报文
5. 浏览器解析渲染页面

   1. 根据 HTML 解析出 DOM 树
   2. 根据 CSS 解析生成 CSS 规则树
   3. 结合 DOM 树和 CSS 规则树，生成渲染树
   4. 根据渲染树计算每一个节点的信息
   5. 根据计算好的信息绘制页面

6. 断开连接：TCP 四次挥手

## http1.0

每发起一个请求，都要新建一次 TCP 连接（三次握手），而且是串行请求，做了无谓的 TCP 连接建立和断开，增加了通信开销。

## http1.1

HTTP/1.1 提出了长连接的通信方式，也叫持久连接。这种方式的好处在于减少了 TCP 连接的重复建立和断开所造成的额外开销，减轻了服务器端的负载。  
持久连接的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。
