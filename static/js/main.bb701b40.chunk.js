(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{27:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c(1),n=c(0);const l=Object(a.createContext)(),i=e=>{let{children:t}=e;const[c,s]=Object(a.useState)("light");Object(a.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",(e=>{s(e.matches?"dark":"light")}))}),[]);return Object(n.jsx)(l.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),s(e)}}],children:t})},r={homepage:"https://josephlyh.github.io",title:"JL."},o={name:"Lam Yuen Ho Joseph",role:"Software Engineer",description:"Passionate in developing software applications and solving problems.",resume:"Resume_2024_03_04.pdf",social:{linkedin:"https://www.linkedin.com/in/lam-yuen-ho-joseph",github:"https://github.com/JosephLYH",email:"yuenholam@gmail.com",mobile:"+85291726708"}},j=[{name:"Court Booking Bot with Captcha Solver",description:"A bot that automates the booking of courts. It is able to solve simple captchas and book courts automatically.",stack:["Python, Tensorflow"],sourceCode:"https://github.com/JosephLYH/HKUCSE_Captcha_Breaking",livePreview:""}],b=["Git","SQL","Python","C/C++","Lua","HTML","CSS","JavaScript","React","Docker","AWS"];var h=c(13),m=c.n(h),d=c(11),u=c.n(d),O=c(15),x=c.n(O),p=c(14),k=c.n(p);c(27);var v=()=>{const[{themeName:e,toggleTheme:t}]=Object(a.useContext)(l),[c,s]=Object(a.useState)(!1),i=()=>s(!c);return Object(n.jsxs)("nav",{className:"center nav",children:[Object(n.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[j.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#projects",onClick:i,className:"link link--nav",children:"Projects"})}):null,b.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#skills",onClick:i,className:"link link--nav",children:"Skills"})}):null,null]}),Object(n.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(n.jsx)(u.a,{}):Object(n.jsx)(m.a,{})}),Object(n.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(n.jsx)(k.a,{}):Object(n.jsx)(x.a,{})})]})};c(31);var _=()=>{const{homepage:e,title:t}=r;return Object(n.jsxs)("header",{className:"header center",children:[Object(n.jsx)("h3",{children:e?Object(n.jsx)("a",{href:e,className:"link",children:t}):t}),Object(n.jsx)(v,{})]})},N=c(8),g=c.n(N),f=c(16),w=c.n(f),C=c(17),S=c.n(C),y=c(18),L=c.n(y);c(32);var P=()=>{const{name:e,role:t,description:c,resume:s,social:a}=o;return Object(n.jsxs)("div",{className:"about center",children:[e&&Object(n.jsxs)("h1",{children:["Hi, I am ",Object(n.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(n.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(n.jsx)("p",{className:"about__desc",children:c&&c}),s&&Object(n.jsx)("a",{href:s,"aria-label":"resume",className:"about__contact",children:Object(n.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),Object(n.jsx)("div",{className:"about__contact center",children:a&&Object(n.jsxs)(n.Fragment,{children:[a.github&&Object(n.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(n.jsx)(g.a,{})}),a.linkedin&&Object(n.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(n.jsx)(w.a,{})}),a.email&&Object(n.jsx)("a",{href:"mailto:".concat(a.email),"aria-label":"email",className:"link link--icon",children:Object(n.jsx)(S.a,{})}),a.mobile&&Object(n.jsx)("a",{href:"tel:".concat(a.mobile),"aria-label":"mobile",className:"link link--icon",children:Object(n.jsx)(L.a,{})})]})})]})},E=c(6),J=c.n(E),H=c(19),B=c.n(H);c(34);var I=e=>{let{project:t}=e;return Object(n.jsxs)("div",{className:"project",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(n.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(n.jsx)("li",{className:"project__stack-item",children:e},J()())))}),t.sourceCode&&Object(n.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(n.jsx)(g.a,{})}),t.livePreview&&Object(n.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(n.jsx)(B.a,{})})]})};c(35);var T=()=>j.length?Object(n.jsxs)("section",{id:"projects",className:"section projects",children:[Object(n.jsx)("h2",{className:"section__title",children:"Projects"}),Object(n.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(n.jsx)(I,{project:e},J()())))})]}):null;c(36);var Y=()=>b.length?Object(n.jsxs)("section",{className:"section skills",id:"skills",children:[Object(n.jsx)("h2",{className:"section__title",children:"Skills"}),Object(n.jsx)("ul",{className:"skills__list",children:b.map((e=>Object(n.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())))})]}):null,A=c(20),R=c.n(A);c(37);var M=()=>{const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{const e=()=>window.scrollY>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(n.jsx)("div",{className:"scroll-top",children:Object(n.jsx)("a",{href:"#top","aria-label":"scroll to top",children:Object(n.jsx)(R.a,{fontSize:"large"})})}):null};c(38);var z=()=>null;c(39);var D=()=>{const{social:e}=o;return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("a",{href:e.github,className:"link footer__link",children:["Created By ",o.name]})})};c(40);var F=()=>{const[{themeName:e}]=Object(a.useContext)(l);return Object(n.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(n.jsx)(_,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(T,{}),Object(n.jsx)(Y,{}),Object(n.jsx)(z,{})]}),Object(n.jsx)(M,{}),Object(n.jsx)(D,{})]})};c(41);Object(s.render)(Object(n.jsx)(i,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.bb701b40.chunk.js.map