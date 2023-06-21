import{_ as n,o as s,c as a,e}from"./app-42511d1c.js";const t={},p=e(`<h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><p>在第一次触发事件时，不立即执行函数，若计时器的时间间隔之内没有再次触发事件就执行；在计时器时间间隔内又触发新的事件，会清除计时器，重新计时。</p><p>在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      timer <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const log = () =&gt; {</span>
<span class="token comment">//   console.log(&#39;1111 :&gt;&gt; &#39;, 1111)</span>
<span class="token comment">// }</span>
<span class="token comment">// window.addEventListener(&#39;scroll&#39;, debounce(log, 500))</span>
<span class="token comment">// window.onscroll = debounce(log, 500)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h2><p>定义了标志变量。第一次触发的事件正在执行时，计时器设定时间内又触发新的事件，不会再执行。</p><p>规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 记录上一次函数触发的时间</span>
  <span class="token keyword">let</span> lastTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录当前函数触发的时间</span>
    <span class="token keyword">var</span> nowTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 当前时间减去上一次执行时间大于这个时间间隔才让他触发这个函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nowTime <span class="token operator">-</span> lastTime <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 同步时间</span>
      lastTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小结：</p><p>输入框搜索确定结果的时候 可以使用防抖，用户最后一次的输入结果</p><p>搜索框存在搜索提示的时候 就需要使用节流，用户可以一边输入一边看到搜索提示</p><h2 id="实现一个-usedebounce、usethrottle" tabindex="-1"><a class="header-anchor" href="#实现一个-usedebounce、usethrottle" aria-hidden="true">#</a> 实现一个 useDebounce、useThrottle</h2><ol><li>什么是防抖、节流，分别解释一下？</li><li>在白纸上手写一个防抖 or 节流函数，自己任选（限时 4 分钟）</li><li>react hooks 有了解吗？上机实现一个 useDebounce、useThrottle</li><li>typescript 有了解吗？用 ts 再来写一遍</li></ol>`,13),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","debounce.html.vue"]]);export{r as default};
