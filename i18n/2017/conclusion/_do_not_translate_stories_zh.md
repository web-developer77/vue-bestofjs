# DO NOT TRANSLATE AND USE ANY MORE

最后让我们挑选一些关键事件来结束 2017 年的回顾。

### Facebook 许可协议事件

2016 的["Leftpad 门"](http://developer.telerik.com/featured/left-pad-indicative-fragile-javascript-ecosystem/)事件删除了 NPM 里许多常用的包, 一度让当时许多项目“中断”了。

在2017年, 我们分析了很多 Facebook 为了保护自己开源项目的原因， 其中有 {react} 和 {flow}, 使用了一种叫“ BSD + Parents ”的独特许可协议。大致意思是一旦被许可人对 Facebook 及其子公司甚至关联公司提出直接的或间接专利诉讼，该协议授予用户的专利权利（使用 React）即刻自动终止。

其实这并不是一个新闻, 在2016年十月, [一位律师分析 Facebook 的许可协议](https://www.elcaminolegal.com/single-post/2016/10/04/Facebook-Reactjs-License)中就已经给出了 React **不是**开源项目的结论。

这导致一些开发者开始了对React生态圈强烈抵制。许多人也为此担心，它会成为公司丢弃 React 的一个好借口（尤其在大公司）。

首先 Facebook 在[官方博客](https://code.facebook.com/posts/112130496157735/explaining-react-s-license/)上解释了" BSD + Parents "协议是如何帮助他们为开源事业做贡献的。

接着在去年9月份，迫于强大的压力， Facebook 最终更换成了 MIT 协议来彻底解决这个问题。

先是[ Relicensing React, Jest, Flow, and Immutable.js ](https://code.facebook.com/posts/300798627056246)修改了协议。

接下来是 [GraphQL specification turn](https://medium.com/@leeb/relicensing-the-graphql-specification-e7d07a52301b)也改了协议。

从这一事件中也能看出 Facebook 近些年已在 JavaScript 领域中占据了举足轻重的地位。

我们已说过 {react} , {react-native} , {flow} 和 {jest} 项目皆来自 Facebook 。

我们也可以关注 {reason} , 这是一门编译到 JavaScript 的对象-函数式编程语言(object-functional programming language), 详情可以阅读Dr. Axel Rauschmayer的文章[什么是 ReasonML?](http://2ality.com/2017/11/about-reasonml.html) 

### Web Assembly: 下一场革命？

经过多年的发展，网页浏览器己在不少领域成为通用工具：既能播放音频与视频，也能在后台服务器上完成密集计算。

但 JavaScript 本身有一个历史已久的难点：性能。

Web Assembly 是一个新的网络标准，它能优化代码的读取和执行速度。

正如Lin Clark在[ Cartoon Introduction ](https://www.smashingmagazine.com/2017/05/abridged-cartoon-introduction-webassembly/)文章中的解释, WebAssembly 是可以浏览器里不用只写 JavaScript，也能使用其它编程语言的一种方法。


想要在网页中使用 Web Assembly，需要先编译成一个 `.wasm` 文件。
然后在浏览器中加载这个 `.wasm`，你便会发现它能运行得飞快！


在八月份, Sean Lark 宣布 {webpack} 项目得到了 Mozilla 项目125，000美元[awarded $125,000 By Mozilla](https://medium.com/webpack/webpack-awarded-125-000-from-moss-program-f63eeaaf4e15)的赞助来实现对 WebAssembly 优先支持。

Mozilla Firefox , Google Chrome , Apple Safari , 和 Microsoft Edge 都表示将在最新的版本支持 WebAssembly 。

[在你的浏览器中运行高性能的应用](https://spectrum.ieee.org/computing/software/webassembly-will-finally-let-you-run-highperformance-applications-in-your-browser)，看了后期待满满，它真的会是下一场革命吗？

## 仍在快速成长的 Node.js

{nodejs} 保持了快速前进的步伐。最大的变化是易用性上，7.6版本加入了[`async await` 模式](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)。
这个模式可以让异步的代码容易阅读和书写：不再需要回调，不再需要 promise 链。


这让那些后台开发转过来的开发者能更容易上手。

值得注意的是，从底层原理上来讲，这个模式其实是使用了 `Promise` 规范。

`async await` 模式来自ECMAScript 2017规范。Node.js 做了非常大的努力来导入这些新特性，所以在写后端代码时，像{babel}这样的编译器已经不再是必要的了。

下一步将是[ ES6 modules ](http://2ality.com/2014/09/es6-modules-final.html)模块的采用。

第二点变化是 Node.js 的包管理 {npm} 也更加成熟了。

在2016年，{yarn} 一鸣惊人地出现在了2016年_明星项目_榜单中(排名第3)。Facebook 做了如下工作去试图填补npm的缺陷：

* 改进安装时的性能问题
* 通过锁住己安装包的版本号来变得更加可预测

广受欢迎的 {yarn} 甚至让许多项目在自己的文档中添加了可以同时使用 `npm install` 或 `yarn add` 命令来进行安装的提示。

不过 {npm} 在第 5 个版本中进行了大量的改进，解决了上面提到的两个问题，使得{yarn}不再具有这方面的优势。

在其中诸多改进中, 我们也要提及 `npx` 这个工具， 它可以让开发者更容易地在本地运行已经安装的包, 这里有注解: [Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)。

---

感谢您的阅读, 请自由分享此篇文章！有任何问题也请在[ Github ](https://github.com/bestofjs/javascriptrisingstars)上联系我们!
