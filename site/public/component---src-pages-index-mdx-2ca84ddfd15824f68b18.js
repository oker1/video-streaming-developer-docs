(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var i=a("pOBw"),s=a("q1tI"),r=a.n(s),c=a("NmYn"),b=a.n(c),l=a("OKom"),p=a("k4MR"),o=a("TSYQ"),n=a.n(o),d=a("QH2O"),g=a("qKvR"),m=function(e){var t,a=e.title,i=e.tabs,s=void 0===i?[]:i;return Object(g.b)("div",{className:n()(d.pageHeader,(t={},t[d.withTabs]=s.length,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.text},a)))))},u=a("pEPl"),A=a("BAC9"),v=function(e){var t=e.relativePagePath,a=e.repository,i=u.data.site.siteMetadata.repository,s=a||i,r=s.baseUrl,c=s.subDirectory,b=r+"/edit/"+s.branch+c+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),h=(a("Oyvg"),a("Wbzz")),O=a("I8xM");var w=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var t,s=b()(e,{lower:!0}),r=s===i,c=new RegExp(i+"(?!-)"),l=a.replace(c,s);return Object(g.b)("li",{key:e,className:n()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(g.b)(h.Link,{className:O.link,to:""+l},e))}));return Object(g.b)("div",{className:O.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:O.list},s))))))},i}(r.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,r=e.Title,c=t.frontmatter,o=void 0===c?{}:c,n=t.relativePagePath,d=t.titleType,u=o.tabs,A=o.title,h=o.theme,O=o.description,j=o.keywords,x=i.data.site.pathPrefix,N=x?s.pathname.replace(x,""):s.pathname,C=u?N.split("/").filter(Boolean).slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(g.b)(p.a,{tabs:u,homepage:!1,theme:h,pageTitle:A,pageDescription:O,pageKeywords:j,titleType:d},Object(g.b)(m,{title:r?Object(g.b)(r,null):A,label:"label",tabs:u}),u&&Object(g.b)(w,{slug:N,tabs:u,currentTab:C}),Object(g.b)(y.a,{padded:!0},a,Object(g.b)(v,{relativePagePath:n})),Object(g.b)(f.a,{pageContext:t,location:s,slug:N,tabs:u,currentTab:C}),Object(g.b)(l.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/carbon-design-system/gatsby-theme-carbon","subDirectory":"/packages/example","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/developers/site/public"}}}')},pfKO:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),s=(a("013z"),a("QH4P"));a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var c={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=b("PageDescription"),p=b("FeatureCard"),o=b("ArtDirection"),n={_frontmatter:c},d=s.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(i.b)(d,r({},n,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"MDX content starts here"),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"The homepage content here lives in the ",Object(i.b)("inlineCode",{parentName:"p"},"src/pages/index.mdx")," directory at the root of your project. Just like the other mdx pages, you can use all of our theme components here without importing them. Review the ",Object(i.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/pages/index.mdx"}),"MDX example source"),".")),Object(i.b)(p,{color:"dark",href:"/getting-started",title:"Getting started",actionIcon:"arrowRight",className:"homepage-feature",mdxType:"FeatureCard"},Object(i.b)(o,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVQoz+XSMQ4BURSF4SeZp1AqTGUJNiBKldoKZgMapQWwAp3SFpQa1qCYXqmhMBHnd6abCAmRqdwFfPmTe0IIQY1mqtgeKkkzJd2ZYm+t2N8qjnK1srM6UzSYS+MlmqzRYoNWe7TL0eGIThd0vVHe3V7AIAYxSAXEIAYxiEEMYhCDGMQgBinBogJWC5/BjwuLF4XvwK8L/xCs7Sm1zObnYT8ACmQHKavKNk4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/developers/site/public/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/3cbba/blue-stripes-mobile.png",srcSet:["/developers/site/public/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/7fc1e/blue-stripes-mobile.png 288w","/developers/site/public/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/a5df1/blue-stripes-mobile.png 576w","/developers/site/public/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/3cbba/blue-stripes-mobile.png 1152w","/developers/site/public/static/0662e09c0b7fcc0ee0e7b8e912f8aa7c/362ee/blue-stripes-mobile.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAApElEQVQoz+XSMQ4BURSF4SeZp1AqTGUJNiBKldoKZgMapQWwAp3SFpQa1qCYXqmhMBHnd6abCAmRqdwFfPmTe0IIQY1mqtgeKkkzJd2ZYm+t2N8qjnK1srM6UzSYS+MlmqzRYoNWe7TL0eGIThd0vVHe3V7AIAYxSAXEIAYxiEEMYhCDGMQgBinBogJWC5/BjwuLF4XvwK8L/xCs7Sm1zObnYT8ACmQHKavKNk4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/developers/site/public/static/714db3c141e2e35bc62de90825ac2e72/3cbba/blue-stripes-tablet.png",srcSet:["/developers/site/public/static/714db3c141e2e35bc62de90825ac2e72/7fc1e/blue-stripes-tablet.png 288w","/developers/site/public/static/714db3c141e2e35bc62de90825ac2e72/a5df1/blue-stripes-tablet.png 576w","/developers/site/public/static/714db3c141e2e35bc62de90825ac2e72/3cbba/blue-stripes-tablet.png 1152w","/developers/site/public/static/714db3c141e2e35bc62de90825ac2e72/362ee/blue-stripes-tablet.png 1600w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAd0lEQVQoz2NgZBH6z8Lv+J9ZOPY/k1jlfwaluf8ZdLb9Z7C/9p/B99l/hoz//2Ur//236fz3P3r2//+Fy///79n1///C4///H7/z//+N5///v/vy//+P3//BgIEBaiCTUOx/RtEK7AZWkGAg3IXUMpBh1EBKDQQA2ftyUuvMYaUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"blue vertical stripes",title:"blue vertical stripes",src:"/developers/site/public/static/94d00b5a50f32d01224183239bc5c4af/3cbba/blue-stripes.png",srcSet:["/developers/site/public/static/94d00b5a50f32d01224183239bc5c4af/7fc1e/blue-stripes.png 288w","/developers/site/public/static/94d00b5a50f32d01224183239bc5c4af/a5df1/blue-stripes.png 576w","/developers/site/public/static/94d00b5a50f32d01224183239bc5c4af/3cbba/blue-stripes.png 1152w","/developers/site/public/static/94d00b5a50f32d01224183239bc5c4af/0b124/blue-stripes.png 1728w","/developers/site/public/static/94d00b5a50f32d01224183239bc5c4af/e957c/blue-stripes.png 1920w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-2ca84ddfd15824f68b18.js.map