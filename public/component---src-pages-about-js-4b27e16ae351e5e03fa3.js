(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(155);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"About Us"),r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio tempore recusandae ea earum dolor quod, quaerat laborum repellendus modi, non inventore, reiciendis molestias quia atque fugit repudiandae voluptatibus vero")))}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return v}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(148),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(150),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Nabhoneel's Parchments"}}}}},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(149),l=a(7),u=a.n(l),d=(a(153),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={menuWidth:"250px"},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({navbarHeight:document.querySelector(".Navbar").offsetHeight}),this.setMenu(),window.onresize=function(){e.setMenu()}},a.setMenu=function(){var e=document.querySelector(".side-menu");document.body.clientWidth<=896?e.style.width="0px":(console.log(document.documentElement.clientWidth+"(else)"),document.querySelector(".side-menu").style.width="100%")},a.render=function(){var e=this;return i.a.createElement("div",{className:"Header"},i.a.createElement("nav",{className:"Navbar"},i.a.createElement("span",{className:"open-slide"},i.a.createElement("button",{className:"menu-toggle",id:"menu-toggle",onClick:function(){var t=document.getElementById("menu-toggle"),a=document.querySelector(".side-menu");t.classList.contains("is-active")?t.classList.contains("is-active")&&(t.classList.remove("is-active"),a.style.width="0px"):(t.classList.add("is-active"),a.style.width=e.state.menuWidth)}},"Menu")),i.a.createElement("ul",{className:"navbar-nav side-menu"},i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/"},"Home")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/projects"},"Projects")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/blog"},"Blog")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/photos"},"Photogrid")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/contact"},"Contact")),i.a.createElement("li",{className:"navbar-item"},i.a.createElement(s.Link,{className:"navbar-link",to:"/about"},"About")))))},t}(r.Component));d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(154),a(158),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement("div",{style:{}},t,i.a.createElement("footer",{style:{textAlign:"center",padding:"1em",background:"rgb(214, 214, 214)",width:"100%"}},"Rebel © ",(new Date).getFullYear())))},data:n})});p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-about-js-4b27e16ae351e5e03fa3.js.map