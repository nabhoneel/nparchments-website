(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149),o=a(155),c=a(156);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(148),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(150),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabhoneel's Parchments"}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(149),l=a(7),u=a.n(l),d=(a(153),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={menuWidth:"250px"},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({navbarHeight:document.querySelector(".Navbar").offsetHeight}),this.setMenu(),window.onresize=function(){e.setMenu()}},a.setMenu=function(){var e=document.querySelector(".side-menu");document.body.clientWidth<=896?e.style.width="0px":(console.log(document.documentElement.clientWidth+"(else)"),document.querySelector(".side-menu").style.width="100%")},a.render=function(){var e=this;return i.a.createElement("div",{className:"Header"},i.a.createElement("nav",{className:"Navbar"},i.a.createElement("span",{className:"open-slide"},i.a.createElement("button",{className:"menu-toggle",id:"menu-toggle",onClick:function(){var t=document.getElementById("menu-toggle"),a=document.querySelector(".side-menu");t.classList.contains("is-active")?t.classList.contains("is-active")&&(t.classList.remove("is-active"),a.style.width="0px"):(t.classList.add("is-active"),a.style.width=e.state.menuWidth)}},"Menu")),i.a.createElement("ul",{className:"navbar-nav side-menu"},i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/"},"Home")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/projects"},"Projects")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/blog"},"Blog")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/photos"},"Photogrid")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/contact"},"Contact")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/about"},"About")))))},t}(r.Component));d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(154),a(158),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement("div",{style:{}},t,i.a.createElement("footer",{style:{textAlign:"center",padding:"1em",background:"rgb(214, 214, 214)",width:"100%"}},"Rebel © ",(new Date).getFullYear())))},data:n})});p.propTypes={children:c.a.node.isRequired};t.a=p},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(159),l=a.n(s),u=a(149);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabhoneel's Parchments",description:"My portfolio and a few articles about my wherabouts - here and there",author:"@nabhoneel"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-8f8d3d36585d3b89ad92.js.map