import{_ as e,c as r,o as t,ae as i}from"./chunks/framework.a0lWT1vU.js";const b=JSON.parse('{"title":"优化方案","description":"","frontmatter":{"title":"优化方案"},"headers":[],"relativePath":"2-中阶/4-性能优化/3-优化方案/index.md","filePath":"2-中阶/4-性能优化/3-优化方案/index.md"}'),o={name:"2-中阶/4-性能优化/3-优化方案/index.md"};function h(n,a,l,s,d,c){return t(),r("div",null,a[0]||(a[0]=[i('<h2 id="压缩" tabindex="-1">压缩 <a class="header-anchor" href="#压缩" aria-label="Permalink to &quot;压缩&quot;">​</a></h2><h3 id="代码压缩" tabindex="-1">代码压缩 <a class="header-anchor" href="#代码压缩" aria-label="Permalink to &quot;代码压缩&quot;">​</a></h3><h3 id="文本压缩-gzip、brotli、zopfli等" tabindex="-1">文本压缩（gzip、Brotli、Zopfli等） <a class="header-anchor" href="#文本压缩-gzip、brotli、zopfli等" aria-label="Permalink to &quot;文本压缩（gzip、Brotli、Zopfli等）&quot;">​</a></h3><h3 id="tree-shaking" tabindex="-1">Tree-shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree-shaking&quot;">​</a></h3><h3 id="code-splitting" tabindex="-1">Code-splitting <a class="header-anchor" href="#code-splitting" aria-label="Permalink to &quot;Code-splitting&quot;">​</a></h3><h2 id="图片优化" tabindex="-1">图片优化 <a class="header-anchor" href="#图片优化" aria-label="Permalink to &quot;图片优化&quot;">​</a></h2><h3 id="小图优化-css-sprite、iconfont、datauri、svg" tabindex="-1">小图优化（css sprite、iconfont、dataURI、svg） <a class="header-anchor" href="#小图优化-css-sprite、iconfont、datauri、svg" aria-label="Permalink to &quot;小图优化（css sprite、iconfont、dataURI、svg）&quot;">​</a></h3><h3 id="图片格式选择" tabindex="-1">图片格式选择 <a class="header-anchor" href="#图片格式选择" aria-label="Permalink to &quot;图片格式选择&quot;">​</a></h3><h3 id="压缩-如tinypng" tabindex="-1">压缩（如tinypng） <a class="header-anchor" href="#压缩-如tinypng" aria-label="Permalink to &quot;压缩（如tinypng）&quot;">​</a></h3><h3 id="响应式" tabindex="-1">响应式 <a class="header-anchor" href="#响应式" aria-label="Permalink to &quot;响应式&quot;">​</a></h3><h2 id="加载策略" tabindex="-1">加载策略 <a class="header-anchor" href="#加载策略" aria-label="Permalink to &quot;加载策略&quot;">​</a></h2><h3 id="懒加载" tabindex="-1">懒加载 <a class="header-anchor" href="#懒加载" aria-label="Permalink to &quot;懒加载&quot;">​</a></h3><h3 id="dns预解析、预加载、预渲染" tabindex="-1">DNS预解析、预加载、预渲染 <a class="header-anchor" href="#dns预解析、预加载、预渲染" aria-label="Permalink to &quot;DNS预解析、预加载、预渲染&quot;">​</a></h3><h3 id="离线化-serviceworker、appcache、离线包等" tabindex="-1">离线化（ServiceWorker、AppCache、离线包等） <a class="header-anchor" href="#离线化-serviceworker、appcache、离线包等" aria-label="Permalink to &quot;离线化（ServiceWorker、AppCache、离线包等）&quot;">​</a></h3><h3 id="http缓存" tabindex="-1">HTTP缓存 <a class="header-anchor" href="#http缓存" aria-label="Permalink to &quot;HTTP缓存&quot;">​</a></h3><h3 id="数据缓存-localstorage、sessionstorage" tabindex="-1">数据缓存（localStorage、sessionStorage） <a class="header-anchor" href="#数据缓存-localstorage、sessionstorage" aria-label="Permalink to &quot;数据缓存（localStorage、sessionStorage）&quot;">​</a></h3><h3 id="资源加载-顺序、位置、异步等" tabindex="-1">资源加载（顺序、位置、异步等） <a class="header-anchor" href="#资源加载-顺序、位置、异步等" aria-label="Permalink to &quot;资源加载（顺序、位置、异步等）&quot;">​</a></h3><h3 id="请求合并" tabindex="-1">请求合并 <a class="header-anchor" href="#请求合并" aria-label="Permalink to &quot;请求合并&quot;">​</a></h3><h3 id="http2" tabindex="-1">HTTP2 <a class="header-anchor" href="#http2" aria-label="Permalink to &quot;HTTP2&quot;">​</a></h3><h3 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-label="Permalink to &quot;CDN&quot;">​</a></h3><h3 id="服务端渲染" tabindex="-1">服务端渲染 <a class="header-anchor" href="#服务端渲染" aria-label="Permalink to &quot;服务端渲染&quot;">​</a></h3><h2 id="执行渲染" tabindex="-1">执行渲染 <a class="header-anchor" href="#执行渲染" aria-label="Permalink to &quot;执行渲染&quot;">​</a></h2><h3 id="css代码优化-选择器、启用gpu、避免表达式等" tabindex="-1">CSS代码优化（选择器、启用GPU、避免表达式等） <a class="header-anchor" href="#css代码优化-选择器、启用gpu、避免表达式等" aria-label="Permalink to &quot;CSS代码优化（选择器、启用GPU、避免表达式等）&quot;">​</a></h3><h3 id="使用requestanimationframe实现视觉变化" tabindex="-1">使用requestAnimationFrame实现视觉变化 <a class="header-anchor" href="#使用requestanimationframe实现视觉变化" aria-label="Permalink to &quot;使用requestAnimationFrame实现视觉变化&quot;">​</a></h3><h3 id="降低复杂度或使用web-worker" tabindex="-1">降低复杂度或使用Web Worker <a class="header-anchor" href="#降低复杂度或使用web-worker" aria-label="Permalink to &quot;降低复杂度或使用Web Worker&quot;">​</a></h3><h3 id="避免大型、复杂的布局和布局抖动" tabindex="-1">避免大型、复杂的布局和布局抖动 <a class="header-anchor" href="#避免大型、复杂的布局和布局抖动" aria-label="Permalink to &quot;避免大型、复杂的布局和布局抖动&quot;">​</a></h3><h3 id="简化绘制复杂度、减少绘制区域" tabindex="-1">简化绘制复杂度、减少绘制区域 <a class="header-anchor" href="#简化绘制复杂度、减少绘制区域" aria-label="Permalink to &quot;简化绘制复杂度、减少绘制区域&quot;">​</a></h3><h3 id="输入处理程序防抖" tabindex="-1">输入处理程序防抖 <a class="header-anchor" href="#输入处理程序防抖" aria-label="Permalink to &quot;输入处理程序防抖&quot;">​</a></h3><h2 id="感官体验优化" tabindex="-1">感官体验优化 <a class="header-anchor" href="#感官体验优化" aria-label="Permalink to &quot;感官体验优化&quot;">​</a></h2><h3 id="骨架屏" tabindex="-1">骨架屏 <a class="header-anchor" href="#骨架屏" aria-label="Permalink to &quot;骨架屏&quot;">​</a></h3><h3 id="snapshot" tabindex="-1">Snapshot <a class="header-anchor" href="#snapshot" aria-label="Permalink to &quot;Snapshot&quot;">​</a></h3><h3 id="loading" tabindex="-1">Loading <a class="header-anchor" href="#loading" aria-label="Permalink to &quot;Loading&quot;">​</a></h3>',32)]))}const q=e(o,[["render",h]]);export{b as __pageData,q as default};
