(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),l=n(202),i=n(201),c=n(218),s=n(229);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Form Tests"}),r.a.createElement("h1",{style:{textAlign:"center"}},"Forms Test Page"),r.a.createElement(c.a,null,function(e){var t=e.setFormState,n=e.setSubmitResponse;return r.a.createElement(s.a,{setFormState:t,setSubmitResponse:n})}),r.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},199:function(e,t,n){"use strict";var a=["box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)","box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)","box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)"],r=(n(87),n(61),n(214),n(198)),o={small:400,med:960,large:1140},l=(Object.keys(o).reduce(function(e,t){return e[t]=function(){return Object(r.b)(["@media (min-width:","em){","}"],o[t]/16,r.b.apply(void 0,arguments))},e},{}),Object.keys(o).reduce(function(e,t){return e[t]=function(){return Object(r.b)(["@media (max-width:","em){","}"],o[t]/16,r.b.apply(void 0,arguments))},e},{}),"#e85a36"),i=n(215),c=n.n(i);function s(){var e=c()(["\n\nhtml {\n  font: 112.5%/1.45em  'brandon_grotesque_regularRg', sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  box-sizing: border-box;\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n}\nbody {\n  margin: 0;\n  background: ",";\n\n}\n\nh1, h2 {\n  font-family: 'lulo_cleanone_bold', sans-serif;\n  margin-top: 0;\n  padding: .5rem;\n  line-height: normal;\n  text-align: center;\n}\np, ul, a {\n  letter-spacing: 1px;\n}\np {\n  font-size: 1.2rem;\n}\nul {\n  font-size: 1.2rem;\n}\n\nblockquote {\n  margin: .5rem auto;\n  display: table;\n  p {\n    text-align: center;\n  }\n}\n\na {\n  color: ",";\n}\n\n"]);return s=function(){return e},e}var m=Object(r.a)(s(),"#35343f",l),u=Object(r.d)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),p=Object(r.b)([".gear{transform-origin:49% 39%;transition:0.5s;animation:"," 7s linear infinite;animation-play-state:paused;}:hover > .gear{animation-play-state:running;fill:",";}"],u,l),d=r.c.hr.withConfig({displayName:"line__Line",componentId:"sc-1tq5xvd-0"})(["background-image:linear-gradient(90deg,transparent,white,transparent);border:0;height:1px;"]);n.d(t,"f",function(){return l}),n.d(t,"e",function(){return"#35343f"}),n.d(t,"a",function(){return m}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return a})},200:function(e,t,n){"use strict";n.d(t,"c",function(){return x}),n.d(t,"b",function(){return E}),n.d(t,"d",function(){return v}),n.d(t,"a",function(){return k});var a=n(0),r=n.n(a),o=n(198),l=n(36),i=n(1),c=n.n(i),s=n(204),m=n.n(s),u=n(205),p=n.n(u),d=n(206),f=n.n(d),h=n(207),g=n.n(h),y=n(199),b=o.c.div.withConfig({displayName:"GearButtons__AnimationWrapper",componentId:"t8s7xt-0"})(["margin:1rem auto;background:",";padding:1rem;text-align:center;display:grid;grid-template-columns:auto auto;grid-gap:10px;align-items:center;max-width:550px;background:#00000055;",";svg{width:150px;cursor:pointer;",";display:block;}"],y.e,y.c[2],y.d),x=function(e){var t=e.children;return r.a.createElement(b,null,t,r.a.createElement(l.Link,{to:"/forms/submitProjectFormPage"},r.a.createElement(m.a,null)))},E=function(e){var t=e.children;return r.a.createElement(b,null,t,r.a.createElement(l.Link,{to:"/forms/getInvolvedFormPage"},r.a.createElement(p.a,null)))},v=function(e){var t=e.children;return r.a.createElement(b,null,t,r.a.createElement(l.Link,{to:"/forms/sponsorFormPage"},r.a.createElement(f.a,null)))},w=Object(o.c)(b).withConfig({displayName:"GearButtons__AnimatedInternProGears",componentId:"t8s7xt-1"})(["box-shadow:none;svg{width:150px;margin:0 2rem;}"]),k=function(e){var t=e.handleInternOrPro;return r.a.createElement(w,{style:{boxShadow:"none"}},r.a.createElement(g.a,{onClick:function(){return t("intern")}}),r.a.createElement(p.a,{onClick:function(){return t("pro")}}),r.a.createElement(y.b,null))};k.propTypes={handleInternOrPro:c.a.func.isRequired}},201:function(e,t,n){"use strict";var a=n(208),r=n(0),o=n.n(r),l=n(1),i=n.n(l),c=n(216),s=n.n(c),m=n(36);function u(e){var t=e.description,n=e.lang,r=e.meta,l=e.keywords,i=e.title;return o.a.createElement(m.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:i},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:a}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var p="1025518380"},202:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),l=n.n(o),i=n(198),c=n(210),s=(n(213),n(199)),m=n(7),u=n.n(m),p=n(36),d=n(203),f=n.n(d),h=i.c.ul.withConfig({displayName:"navbar__NavList",componentId:"sc-1lkjaee-0"})(["font-family:'lulo_cleanone',sans-serif;list-style:none;margin:auto;display:flex;align-items:center;justify-content:center;padding:0;padding-bottom:1rem;@media (max-width:800px){flex-direction:column;}"]),g=i.c.li.withConfig({displayName:"navbar__NavLi",componentId:"sc-1lkjaee-1"})(["display:inline-block;margin-right:1rem;a{transition:0.1s ease;&:hover,&:active{background:",";box-shadow:0px 0px 39px 0px rgba(0,0,0,0.79);}}"],s.e),y=function(e){var t=e.to,n=e.children;return r.a.createElement(g,null,r.a.createElement(p.Link,{to:t,activeStyle:{background:s.e,color:"white"},style:{color:"white",textDecoration:"none",padding:"0.3rem"}},n))};y.propTypes={to:l.a.string.isRequired,children:l.a.node.isRequired};var b=function(){return r.a.createElement(h,null,r.a.createElement(y,{to:"/"},"Home"),r.a.createElement(y,{to:"/who-we-are"},"Who We Are"),r.a.createElement(y,{to:"/how-it-works"},"How It Works"),r.a.createElement(y,{to:"/showcase"},"Showcase"))},x=(n(200),i.c.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-31ozxh-0"})(["display:grid;grid-template-columns:1fr 4fr;justify-content:space-around;background:",";",";box-shadow:inset 0px 0px 136px 0px rgba(0,0,0,0.75);height:150px;",""],s.f,s.c[2],function(e){return e.home&&Object(i.b)(["height:50vh;align-content:center;grid-template-columns:auto;svg{height:30vh;}@media only screen and (max-width:750px){display:flex;flex-direction:column;height:auto;}"])})),E=Object(i.c)(f.a).withConfig({displayName:"header__StyledLogo",componentId:"sc-31ozxh-1"})(["height:120px;margin:1rem auto;display:grid;fill:white;filter:drop-shadow(0px 0px 15px rgba(0,0,0,0.75));"]),v=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props.pathname&&"homeHeader";return r.a.createElement(x,{home:e},r.a.createElement(p.Link,{to:"/"},r.a.createElement(E,null)),r.a.createElement(b,null))},t}(a.Component);v.propTypes={pathname:l.a.string},v.defaultProps={pathname:""};var w=v,k=function(){return r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},L=i.c.main.withConfig({displayName:"layout__LayoutBody",componentId:"ii2kc2-0"})(["margin:0.5rem auto;max-width:960px;padding:0 2rem 1rem;color:white;"]),_=function(e){var t=e.children,n=e.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),n?r.a.createElement(c.a,{config:"slow",from:{opacity:0},to:{opacity:1}},function(e){return r.a.createElement("div",{style:e},r.a.createElement(w,{pathname:n}))}):r.a.createElement(w,null),r.a.createElement(L,null,t,r.a.createElement(k,null)))};_.propTypes={children:l.a.node.isRequired,pathname:l.a.string};t.a=_},203:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,a.createElement("g",null,[a.createElement("path",{d:"M373.8,27.4c-5-4-11.3-6.9-18.8-8.6h0c-5.6-1.3-12-1.9-19.2-1.9c-13.2,0-42.2,1.9-42.2,1.9l0,26.1l26.2,8.4v26.8l-26.2,8.4\n\t\tl0,53.5H338v-36.4c15.9-0.4,29-5.1,38.1-13.7c8.3-7.9,12.8-19.3,12.8-32.2C388.9,46.8,383.5,35,373.8,27.4z",key:0}),a.createElement("g",{key:1},a.createElement("polygon",{points:"279.2,18.7 237.6,142.5 195.3,142.5 155.7,18.7 195.6,18.7 204,44.9 230.8,44.9 239.2,18.7 \t\t"})),a.createElement("g",{key:2},[a.createElement("path",{d:"M16.8,205.1v0.3c0,7,7.6,12.2,19.7,12.2c11.7,0,17.9-4.9,17.9-11.7c0-8.2-8.9-11.1-19.5-14.3c-10.2-3.1-22.4-7-22.4-18.3\n\t\t\tc0-9.8,8.7-16.4,22.3-16.4c13.8,0,23.5,6.8,23.5,16.3v0.7h-4.7v-0.4c0-7-7.2-12.2-18.8-12.2c-11.2,0-17.3,4.9-17.3,11.7\n\t\t\tc0,8,8.5,10.9,18.7,14.1c10.1,3.1,23.2,6.9,23.2,18.7c0,9.9-9.1,16.3-23,16.3c-14.3,0-24.4-6.8-24.4-16.3v-0.6h4.8V205.1z",key:0}),a.createElement("path",{d:"M74.6,158h50.1v4.7h-22.8v58.1h-4.7v-58.1H74.6V158z",key:1}),a.createElement("path",{d:"M196.6,158v39c0,14.1-9.2,24.9-26.3,24.9S144,211,144,197v-39h4.7v38.9c0,11.8,7.6,20.4,21.6,20.4\n\t\t\tc14.1,0,21.6-8.6,21.6-20.4V158H196.6z",key:2}),a.createElement("path",{d:"M221.1,158h24.5c19.1,0,29.2,13.8,29.2,31.4s-10.1,31.4-29.2,31.4h-24.5V158z M225.9,162.7v53.4h19.6\n\t\t\tc15.9,0,24.7-11.5,24.7-26.7s-8.9-26.7-24.7-26.7L225.9,162.7L225.9,162.7z",key:3}),a.createElement("path",{d:"M300.9,158v62.8h-4.8V158H300.9z",key:4}),a.createElement("path",{d:"M356.2,156.8c18,0,32.7,14.6,32.7,32.6S374.4,222,356.2,222s-32.8-14.6-32.8-32.6C323.4,171.5,338,156.8,356.2,156.8z\n\t\t\t M356.2,217.3c15.3,0,27.8-12.5,27.8-27.8s-12.6-27.8-27.8-27.8c-15.4,0-27.9,12.6-27.9,27.8C328.2,204.8,340.9,217.3,356.2,217.3\n\t\t\tz",key:5})]),a.createElement("polygon",{points:"141.2,18.7 103,18.7 94.6,44.9 67.9,44.9 59.5,18.7 21.4,18.7 13.5,142.5 39.5,142.5 40.3,120.6 57.3,113.6 \n\t\t73.2,128.6 89.4,128.6 105.3,113.6 122.3,120.6 123.1,142.5 149.1,142.5 \t",key:3})]))}r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 401 239",style:{enableBackground:"new 0 0 401 239"},xmlSpace:"preserve"},e.exports=r,r.default=r},204:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("defs",{key:0},a.createElement("style",null,"\r\n      .text {\r\n        font-size: 26.71px;\r\n        font-family: 'brandon_grotesque_regularRg', sans-serif;\r\n      }\r\n      .text,\r\n      .gear,\r\n      .icon {\r\n        fill: #fff;\r\n      }\r\n    ")),a.createElement("title",{key:1},"\r\n    Client\r\n  "),a.createElement("text",{className:"text",transform:"translate(51.55 193.44)",key:2},"\r\n    Apply\r\n  "),a.createElement("path",{d:"M160.65,89l.1-17.39L142,63l-.31.54a1.7,1.7,0,0,0-.1-.37,60.92,60.92,0,0,0-2.35-6.9l-.26-.69c-.94-2.23-3.2-6.58-3.2-6.58l7.39-19.41L130.92,17.28l-19.22,7.16a4,4,0,0,1,0,.58,52.2,52.2,0,0,0-7.06-3.47A62.08,62.08,0,0,0,97.34,19l-.08.2,0-.22L88.79.08,71.47,0,62.92,18.81,64,18.9a75.82,75.82,0,0,0-7.49,2.58l-.7.29A61.07,61.07,0,0,0,49.29,25a1.35,1.35,0,0,0-.24.13L29.58,17.67,17.29,29.92l7.33,19.63.8-.74a2,2,0,0,0-.19.34A59.54,59.54,0,0,0,21.88,56c-1,2.41-2.6,7.59-2.63,7.77L.09,72.08,0,89.45l19.11,8.73V96.32c.1.37.22.72.3,1.08a63.63,63.63,0,0,0,2.51,7.24,61.1,61.1,0,0,0,3.37,6.9c.16.3.34.6.5.88l-.65-.64-7.5,19.64,12.21,12.34,19.66-7.35-1.59-1.61c.49.29.95.58,1.45.83a61.91,61.91,0,0,0,14.12,5.85,8.22,8.22,0,0,0,1,.29H63.37L71.94,161l17.34-.11L98,141.57l-2,.17c.52-.13,1.05-.22,1.58-.38a61,61,0,0,0,7.25-2.45,63.36,63.36,0,0,0,6.88-3.33l.46-.26-.4.42.09.23,19.37,7.42,12.28-12.25-7.33-19.63-.05.12-.07,0-.87.87c.2-.32.39-.66.57-1a60.19,60.19,0,0,0,3.37-6.91,64.75,64.75,0,0,0,2.41-7.65c0-.09.3.58.3.58Zm-80.28,48.9a57.41,57.41,0,1,1,57.3-57.41A57.36,57.36,0,0,1,80.38,137.93Z",className:"gear",key:3}),a.createElement("path",{d:"M98.54,70.6V52.4c0-5.19-3.24-9.4-7.25-9.4H68.21c-4,0-7.25,4.21-7.25,9.4V70.6a10.86,10.86,0,0,0-4.83,9v25.5A10.87,10.87,0,0,0,67,116H92.5a10.87,10.87,0,0,0,10.87-10.87V79.63A10.86,10.86,0,0,0,98.54,70.6ZM86.42,105.26H74.15L77.1,93.49a7.36,7.36,0,1,1,6.38,0Zm5.67-36.5H67.4V56.4c0-2.79,1.74-5,3.89-5H88.2c2.15,0,3.89,2.26,3.89,5Z",className:"icon",key:4})])}r.defaultProps={viewBox:"0 0 160.75 210.76"},e.exports=r,r.default=r},205:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("defs",{key:0},a.createElement("style",null,"\r\n      .text {\r\n        font-size: 26.71px;\r\n        font-family: 'brandon_grotesque_regularRg', sans-serif;\r\n      }\r\n      .text,\r\n      .icon,\r\n      .gear {\r\n        fill: #fff;\r\n      }\r\n    ")),a.createElement("title",{key:1},"\r\n    Developer Gear\r\n  "),a.createElement("text",{className:"text",transform:"translate(14 195.02) scale(1.06 1)",key:2},"\r\n    Developers\r\n  "),a.createElement("path",{d:"M119.4,68.22,97.77,60.11a1.75,1.75,0,0,0-.62-.11H60.66a2.29,2.29,0,0,0-.93.2l-18.27,8.1a1.5,1.5,0,0,0-.87,1.6l3.48,21.89a2.09,2.09,0,0,0,.78,1.33C47.68,95.32,58.26,104,58.26,104s-.37-20.93-.37-20.93l-2.3-5.33-.15-.34-.07-.16a.51.51,0,0,0-.07-.11,3.09,3.09,0,0,0-.55-.41l-1.26-1.35c-.83-.56-1.68-2.2-2.5-2.2h.17s-.07,0-.11-.06l.15.06h0c.82,0,1.65,1.49,2.48,2l1.33,1,.33.32a1.57,1.57,0,0,1,.36.34,1.33,1.33,0,0,1,.14.22l.09.18.17.34,2.71,5.26,0,.06V83c1-1.6,2-3.19,2.91-4.8.13-.21.25-.42.39-.63l.21-.33a2.25,2.25,0,0,1,.36-.42,2.29,2.29,0,0,1,1-.49,2.43,2.43,0,0,1,.57-.06l.39,0,3.1.18,6.21.35c2.07.11,4.14.26,6.21.38h0l1.21.27-1.24-.26c-2.07,0-4.15.11-6.22.14l-6.22.11-3.11.05h-.39l-.19,0-.2.09a.66.66,0,0,0-.16.13.82.82,0,0,0-.12.16l-.18.31c-.12.22-.26.43-.38.65-1,1.63-1.9,3.31-2.9,4.94L60.17,104h43.3a1.91,1.91,0,0,0,1.23-.45c2.44-2,12.44-10.4,13.25-11.1a1.73,1.73,0,0,0,.6-1.17c.28-3.35,1.45-17.51,1.78-21.58A1.46,1.46,0,0,0,119.4,68.22Zm-68.2,6h0L51,74.14v0l.18,0v0ZM103.26,68l0,.23a2.14,2.14,0,0,1-.1.37,1.49,1.49,0,0,1-.14.31,3.15,3.15,0,0,1-.76.9,7.79,7.79,0,0,1-1.76,1.08,16.47,16.47,0,0,1-1.79.7,32.58,32.58,0,0,1-3.47.92l-1.65.32a15.83,15.83,0,0,1-1.59.23q-1.55.14-2.94.18c-1.85,0-3.46,0-4.78,0l-1.76,0H77.73l-1.76,0c-1.32,0-2.93.06-4.78,0-.93,0-1.91-.08-2.95-.18s-2.11-.34-3.23-.56a31.55,31.55,0,0,1-3.47-.92,16.43,16.43,0,0,1-1.79-.7A7.84,7.84,0,0,1,58,69.82a3.24,3.24,0,0,1-.76-.89A2.2,2.2,0,0,1,57,68.3,2.87,2.87,0,0,1,57,68s0,0,0-.11v-.2a3.09,3.09,0,0,1,1.45-2,14.42,14.42,0,0,1,4-1.71,50.69,50.69,0,0,1,8.66-1.56,92.61,92.61,0,0,1,18.08,0A50.69,50.69,0,0,1,97.8,64a14.38,14.38,0,0,1,4,1.71,4.87,4.87,0,0,1,.87.76,2.48,2.48,0,0,1,.58,1.16l0,.17v.13S103.26,68,103.26,68Zm3,6.9h0L106,75l.29-.13h0Zm0,0,0-.06h.08Z",className:"icon",key:3}),a.createElement("path",{d:"M160.65,89l.1-17.39L142,63l-.31.54a1.7,1.7,0,0,0-.1-.37,60.92,60.92,0,0,0-2.35-6.9l-.26-.69c-.94-2.23-3.2-6.58-3.2-6.58l7.39-19.41L130.92,17.28l-19.22,7.16a4,4,0,0,1,0,.58,52.2,52.2,0,0,0-7.06-3.47A62.08,62.08,0,0,0,97.34,19l-.08.2,0-.22L88.79.08,71.47,0,62.92,18.81,64,18.9a75.82,75.82,0,0,0-7.49,2.58l-.7.29A61.07,61.07,0,0,0,49.29,25a1.35,1.35,0,0,0-.24.13L29.58,17.67,17.29,29.92l7.33,19.63.8-.74a2,2,0,0,0-.19.34A59.54,59.54,0,0,0,21.88,56c-1,2.41-2.6,7.59-2.63,7.77L.09,72.08,0,89.45l19.11,8.73V96.32c.1.37.22.72.3,1.08a63.63,63.63,0,0,0,2.51,7.24,61.1,61.1,0,0,0,3.37,6.9c.16.3.34.6.5.88l-.65-.64-7.5,19.64,12.21,12.34,19.66-7.35-1.59-1.61c.49.29.95.58,1.45.83a61.91,61.91,0,0,0,14.12,5.85,8.22,8.22,0,0,0,1,.29H63.37L71.94,161l17.34-.11L98,141.57l-2,.17c.52-.13,1.05-.22,1.58-.38a61,61,0,0,0,7.25-2.45,63.36,63.36,0,0,0,6.88-3.33l.46-.26-.4.42.09.23,19.37,7.42,12.28-12.25-7.33-19.63-.05.12-.07,0-.87.87c.2-.32.39-.66.57-1a60.19,60.19,0,0,0,3.37-6.91,64.75,64.75,0,0,0,2.41-7.65c0-.09.3.58.3.58Zm-80.28,48.9a57.41,57.41,0,1,1,57.3-57.41A57.36,57.36,0,0,1,80.38,137.93Z",className:"gear",key:4})])}r.defaultProps={viewBox:"0 0 160.75 208.87"},e.exports=r,r.default=r},206:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("defs",{key:0},a.createElement("style",null,"\r\n      .text {\r\n        font-size: 26.71px;\r\n        font-family: 'brandon_grotesque_regularRg', sans-serif;\r\n      }\r\n      .text,\r\n      .gear,\r\n      .icon {\r\n        fill: #fff;\r\n      }\r\n    ")),a.createElement("title",{key:1},"Sponors"),a.createElement("text",{className:"text",transform:"translate(32.99 195.02) scale(1.06 1)",key:2},"\r\n    Sponsors\r\n  "),a.createElement("path",{className:"gear",d:"M160.65,89l.1-17.39L142,63l-.31.54a1.7,1.7,0,0,0-.1-.37,60.92,60.92,0,0,0-2.35-6.9l-.26-.69c-.94-2.23-3.2-6.58-3.2-6.58l7.39-19.41L130.92,17.28l-19.22,7.16a4,4,0,0,1,0,.58,52.2,52.2,0,0,0-7.06-3.47A62.08,62.08,0,0,0,97.34,19l-.08.2,0-.22L88.79.08,71.47,0,62.92,18.81,64,18.9a75.82,75.82,0,0,0-7.49,2.58l-.7.29A61.07,61.07,0,0,0,49.29,25a1.35,1.35,0,0,0-.24.13L29.58,17.67,17.29,29.92l7.33,19.63.8-.74a2,2,0,0,0-.19.34A59.54,59.54,0,0,0,21.88,56c-1,2.41-2.6,7.59-2.63,7.77L.09,72.08,0,89.45l19.11,8.73V96.32c.1.37.22.72.3,1.08a63.63,63.63,0,0,0,2.51,7.24,61.1,61.1,0,0,0,3.37,6.9c.16.3.34.6.5.88l-.65-.64-7.5,19.64,12.21,12.34,19.66-7.35-1.59-1.61c.49.29.95.58,1.45.83a61.91,61.91,0,0,0,14.12,5.85,8.22,8.22,0,0,0,1,.29H63.37L71.94,161l17.34-.11L98,141.57l-2,.17c.52-.13,1.05-.22,1.58-.38a61,61,0,0,0,7.25-2.45,63.36,63.36,0,0,0,6.88-3.33l.46-.26-.4.42.09.23,19.37,7.42,12.28-12.25-7.33-19.63-.05.12-.07,0-.87.87c.2-.32.39-.66.57-1a60.19,60.19,0,0,0,3.37-6.91,64.75,64.75,0,0,0,2.41-7.65c0-.09.3.58.3.58Zm-80.28,48.9a57.41,57.41,0,1,1,57.3-57.41A57.36,57.36,0,0,1,80.38,137.93Z",key:3}),a.createElement("path",{className:"icon",d:"M121,95.51l-1.63.42a1.48,1.48,0,0,1-1.66-.68c-.87-1.58-3.39-5.37-10.64-13.43-6-6.63-9.4-8.06-11.25-8a2,2,0,0,0-2,1.77l-.93,8.52a1.67,1.67,0,0,1-1.38,1.43l-1.22-.29L89.11,110H76l-.32-25-.75.25a1.39,1.39,0,0,1-1.48-1.41c.3-5.52-.37-8.44-.91-9.88a3.47,3.47,0,0,0-1.43-1.72c-8.38-5.37-17.14,0-17.14,0l-8.14.22-.59-.27a1.59,1.59,0,0,1-.94-1.4l-.2-12.75a1.79,1.79,0,0,1,1-1.61L46,56h6.49c10.11,4.75,16.35,1.78,18.1.7a2.05,2.05,0,0,1,1.23-.29c3.38.28,18.07,1.72,28.56,6.64,10.21,4.8,19.23,24.89,21.62,30.56A1.41,1.41,0,0,1,121,95.51Z",key:4})])}r.defaultProps={viewBox:"0 0 160.75 208.87"},e.exports=r,r.default=r},207:function(e,t,n){var a=n(0);function r(e){return a.createElement("svg",e,[a.createElement("defs",{key:0},a.createElement("style",null,"\r\n      .text {\r\n        font-size: 26.71px;\r\n        font-family: 'brandon_grotesque_regularRg', sans-serif;\r\n      }\r\n      .text,\r\n      .gear,\r\n      .icon {\r\n        fill: #fff;\r\n      }\r\n    ")),a.createElement("title",{key:1},"\r\n    Interns\r\n  "),a.createElement("text",{className:"text",transform:"translate(42.22 195.02) scale(1.06 1)",key:2},"\r\n    Interns\r\n  "),a.createElement("path",{d:"M90.73,70.33c1.3.28,1.12.73.71,1.07A2.66,2.66,0,0,1,90,72c-3.24.35-18.67,2-19.65,2a.92.92,0,0,1-.62-.23c-.52-.47-.14-1.2.64-1.28l20.1-2.09A.79.79,0,0,1,90.73,70.33Zm-.24-4.55-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,65.78Zm0,9.08-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,74.85Zm0,9.08L70.39,86c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2A2.66,2.66,0,0,0,91.43,85c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,83.93Zm0-4.54-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,79.39Zm0,9.08-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,88.47Zm0,4.54-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,93Zm0,9.08-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,102.08Zm0-4.54-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,97.55Zm0,9.08-20.1,2.09c-.78.08-1.16.81-.64,1.28a.92.92,0,0,0,.62.23c1,0,16.41-1.61,19.65-2a2.66,2.66,0,0,0,1.41-.55c.42-.35.6-.8-.71-1.07A.79.79,0,0,0,90.48,106.62Z",className:"icon",key:3}),a.createElement("path",{d:"M104.63,62.22H56.22c-3.26,0-5.69-1.89-5-3.79C53.93,50.72,65,44.8,78.58,44.31c0,0,0-.31,0-.31v1.08h0a32.43,32.43,0,0,0-6.32.85,2.17,2.17,0,0,0-1.15.78c-.36.41-.54,1,.42,1.32a.44.44,0,0,0,.19,0,54.43,54.43,0,0,1,6.86-.61l0,4.61a.93.93,0,0,0,1.85.23c.05-.33.09-2.25.11-4.83a54.32,54.32,0,0,1,7,.5c.61.08,1-.64.63-1.3a.79.79,0,0,0-.45-.4,38.55,38.55,0,0,0-7-.63h-.11c0-.46,0-.94,0-1.42,14.31,0,26.24,6.17,29.08,14.21C110.31,60.34,107.89,62.22,104.63,62.22Z",className:"icon",key:4}),a.createElement("path",{d:"M81,121.28a.5.5,0,0,1-.62,0l-4.62-3.8-4-3.29a.43.43,0,0,1,.31-.76H89.28a.43.43,0,0,1,.31.76l-4,3.29Z",className:"icon",key:5}),a.createElement("path",{d:"M160.65,89l.1-17.39L142,63l-.31.54a1.7,1.7,0,0,0-.1-.37,60.92,60.92,0,0,0-2.35-6.9l-.26-.69c-.94-2.23-3.2-6.58-3.2-6.58l7.39-19.41L130.92,17.28l-19.22,7.16a4,4,0,0,1,0,.58,52.2,52.2,0,0,0-7.06-3.47A62.08,62.08,0,0,0,97.34,19l-.08.2,0-.22L88.79.08,71.47,0,62.92,18.81,64,18.9a75.82,75.82,0,0,0-7.49,2.58l-.7.29A61.07,61.07,0,0,0,49.29,25a1.35,1.35,0,0,0-.24.13L29.58,17.67,17.29,29.92l7.33,19.63.8-.74a2,2,0,0,0-.19.34A59.54,59.54,0,0,0,21.88,56c-1,2.41-2.6,7.59-2.63,7.77L.09,72.08,0,89.45l19.11,8.73V96.32c.1.37.22.72.3,1.08a63.63,63.63,0,0,0,2.51,7.24,61.1,61.1,0,0,0,3.37,6.9c.16.3.34.6.5.88l-.65-.64-7.5,19.64,12.21,12.34,19.66-7.35-1.59-1.61c.49.29.95.58,1.45.83a61.91,61.91,0,0,0,14.12,5.85,8.22,8.22,0,0,0,1,.29H63.37L71.94,161l17.34-.11L98,141.57l-2,.17c.52-.13,1.05-.22,1.58-.38a61,61,0,0,0,7.25-2.45,63.36,63.36,0,0,0,6.88-3.33l.46-.26-.4.42.09.23,19.37,7.42,12.28-12.25-7.33-19.63-.05.12-.07,0-.87.87c.2-.32.39-.66.57-1a60.19,60.19,0,0,0,3.37-6.91,64.75,64.75,0,0,0,2.41-7.65c0-.09.3.58.3.58Zm-80.28,48.9a57.41,57.41,0,1,1,57.3-57.41A57.36,57.36,0,0,1,80.38,137.93Z",className:"gear",key:6})])}r.defaultProps={viewBox:"0 0 160.75 208.87"},e.exports=r,r.default=r},208:function(e){e.exports={data:{site:{siteMetadata:{title:"MVP Studio",description:"We are a collaborative and fun group of web professionals who strive to provide cost–effective design solutions that support your organization's mission and suits your exact needs.",author:"Greg McKelvey"}}}}},217:function(e,t,n){"use strict";var a=n(198),r=n(209),o=n(199),l=Object(a.c)(r.b).withConfig({displayName:"styledForm__StyledForm",componentId:"sc-1bcebt2-0"})(["display:grid;max-width:600px;margin:0 auto;text-align:center;label{max-width:100%;margin:0.5rem;text-align:left;}label,input,textarea,button{font-size:1.25rem;}input,textarea{width:100%;font-family:inherit;padding:0.5rem;",";margin-top:0.25rem;}.select{color:",";}.checkbox-label{display:grid;justify-content:flex-start;}.checkbox{box-shadow:none;transform:scale(1.5);}.invalid{background:#f66;}input:focus{outline-color:",";}button{margin:0 auto;width:250px;background:#2b2b2b;border:none;height:3rem;border-radius:5px;box-shadow:0px 1px 5px #333;color:white;cursor:pointer;font-family:inherit;transition:0.2s;:hover{box-shadow:0px 5px 10px #000;transform:translate(0,-2px);}:disabled{background-color:#aaa;}}"],o.c[2],o.e,o.f);t.a=l},218:function(e,t,n){"use strict";n(26);var a=n(7),r=n.n(a),o=n(0),l=n.n(o),i=n(210),c=n(1),s=n.n(c),m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={submitResponse:"",formSubmitted:!1},t.setFormStateTrue=function(){t.setState({formSubmitted:!0})},t.setSubmitResponse=function(e){t.setState({submitResponse:e})},t.renderResponse=function(e){var n=t.state.submitResponse;return l.a.createElement(i.c.h2,{style:Object.assign({textAlign:"center"},e)},n)},t.renderForm=function(e){var n=t.props.children;return l.a.createElement(i.c.div,{style:e},n({setFormState:t.setFormStateTrue,setSubmitResponse:t.setSubmitResponse}))},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state.formSubmitted;return l.a.createElement(i.b,{items:t,native:!0,from:{opacity:0,height:0},enter:{opacity:1,height:"auto"},leave:{opacity:0,height:0}},function(t){return t?e.renderResponse:e.renderForm})},t}(o.Component);m.propTypes={children:s.a.func},t.a=m},229:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(7),r=n.n(a),o=n(0),l=n.n(o),i=n(209),c=n(1),s=n.n(c),m=n(226),u=n(217),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.handleSubmit,n=e.errors,a=e.touched,r=e.isSubmitting,o=e.isValid,c=e.setFieldValue,s=e.sponsorOptions,p=e.showcaseOptions,d=e.typeOfOrganization;return l.a.createElement(u.a,{onSubmit:t},l.a.createElement("div",null,l.a.createElement("h3",null,"Sponsor Form"),l.a.createElement("p",null,"Please provide the following information:")),l.a.createElement("label",null,"Name:*",l.a.createElement(i.a,{className:a.Name&&n.Name?"invalid":"",type:"text",name:"Name",required:!0})),l.a.createElement("label",null,"Email:*",l.a.createElement(i.a,{className:a.Email&&n.Email?"invalid":"",type:"email",name:"Email",required:!0})),l.a.createElement("label",null,"Type of Organization:",l.a.createElement(i.a,{className:"select",component:m.a,name:"Type_Of_Organization",options:d,onChange:function(e){return c("Type_Of_Organization",e.value)}})),l.a.createElement("label",null,"Types of Projects Interested in:",l.a.createElement(i.a,{component:"textarea",name:"Project_Types_Interest"})),l.a.createElement("label",null,"Interested in Projects:",l.a.createElement(i.a,{className:"select",component:m.a,name:"Interested_In_Projects",isMulti:!0,closeMenuOnSelect:"false",options:p,onChange:function(e){return c("Interested_In_Projects",e.map(function(e){return e.value}))}})),l.a.createElement("label",null,"Type of Sponsorship:",l.a.createElement(i.a,{className:"select",component:m.a,name:"Type_Of_Sponsorship",isMulti:!0,closeMenuOnSelect:"false",options:s,onChange:function(e){return c("Type_Of_Sponsorship",e.map(function(e){return e.value}))}})),l.a.createElement("button",{type:"submit",disabled:r||!o},"Submit"))},t}(o.Component);p.propTypes={handleSubmit:s.a.func.isRequired,errors:s.a.object.isRequired,touched:s.a.object.isRequired,isSubmitting:s.a.bool,isValid:s.a.bool,setFieldValue:s.a.func.isRequired,sponsorOptions:s.a.arrayOf(c.object).isRequired,showcaseOptions:s.a.arrayOf(c.object).isRequired,typeOfOrganization:s.a.arrayOf(c.object).isRequired}}}]);
//# sourceMappingURL=component---src-pages-form-test-js-0d0f69f85dbdf97be8c8.js.map