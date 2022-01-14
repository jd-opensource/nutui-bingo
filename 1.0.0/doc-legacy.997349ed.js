System.register(["./vendor-legacy.807f5587.js"],(function(t){"use strict";var e,d,g;return{setters:[function(t){e=t.e,d=t.o,g=t.y}],execute:function(){const n={class:"markdown-body"},h=[g('<h1>Hiteggs组件</h1><h3>介绍</h3><p>用于砸金蛋抽奖场景，可以自定义金蛋图片等</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { Hiteggs } from &#39;@nutui/nutui-bingo&#39;;\n\nconst app = createApp();\napp.use(Hiteggs);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nutbig-hiteggs&gt;&lt;/nutbig-hiteggs&gt;\n</code></pre><h3>自定义传入个数</h3><pre><code class="language-html">&lt;nutbig-hiteggs :num=9&gt;&lt;/nutbig-hiteggs&gt;\n</code></pre><h3>砸击事件</h3><pre><code class="language-html">&lt;nutbig-hiteggs :num=9 @click=&quot;hit&quot;&gt;&lt;/nutbig-hiteggs&gt;\n</code></pre><pre><code class="language-javascript">setup(){\n     const hit = ()=&gt;{\n      console.log(&#39;中奖啦&#39;);\n      \n    }\n    return{\n        hit,\n    }\n}\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>num</td><td>金蛋个数</td><td>number</td><td>9</td></tr><tr><td>intact-img</td><td>完整金蛋图片地址</td><td>String</td><td><a href="http://img10.360buyimg.com/imagetools/jfs/t1/217651/2/1901/114207/617770f2E74551438/5342f7b949e7bec3.png">img10.360buyimg.com/imagetools/jfs/t1/217651/2/1901/114207/617770f2E74551438/5342f7b949e7bec3.png</a></td></tr><tr><td>hammer</td><td>锤子图片</td><td>String</td><td><a href="http://img13.360buyimg.com/imagetools/jfs/t1/95159/30/17834/9845/61444874E0f463263/924741cae55efb85.png">img13.360buyimg.com/imagetools/jfs/t1/95159/30/17834/9845/61444874E0f463263/924741cae55efb85.png</a></td></tr><tr><td>width</td><td>金蛋图片宽度</td><td>String</td><td>80px</td></tr><tr><td>height</td><td>金蛋图片高度</td><td>String</td><td>80px</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>砸击金蛋后触发</td><td>-</td></tr></tbody></table>',18)];t("default",{setup:t=>(t,g)=>(d(),e("div",n,h))})}}}));
