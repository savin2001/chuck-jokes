(this["webpackJsonpchuck-jokes"]=this["webpackJsonpchuck-jokes"]||[]).push([[0],{16:function(e,c,t){},43:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(17),i=t.n(n),r=t(3),o=t(6),j=t.n(o),l=t(7),d=t(18),h=t(4),u=t.n(h),b=Object(s.createContext)(!1),O=(t(16),t(0)),m=function(){var e=Object(s.useState)({joke:""}),c=Object(r.a)(e,2),t=c[0],a=c[1],n=Object(s.useContext)(b),i=Object(r.a)(n,1)[0],o=function(){var e=Object(d.a)(j.a.mark((function e(){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://api.chucknorris.io/jokes/random?category=".concat(i));case 2:c=e.sent,s=c.data.value,a(Object(l.a)(Object(l.a)({},t),{},{joke:s}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o()}),[i]),Object(O.jsx)("div",{className:"glass",children:Object(O.jsx)("h4",{className:"joke",children:t.joke})})};var x=function(){var e=Object(s.useState)(""),c=Object(r.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),o=i[0],j=i[1],l={method:"get",url:"https://api.chucknorris.io/jokes/categories",headers:{"content-type":"application/json"},data:""};return Object(s.useEffect)((function(){u()(l).then((function(e){j(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(O.jsx)(b.Provider,{value:[t,a],children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"landing slideLeft",children:Object(O.jsxs)("div",{className:"landing-text",children:[Object(O.jsx)("h1",{children:"Chuck Norris Jokes"}),Object(O.jsx)("p",{children:"Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris that have become an Internet phenomenon and as a result have become widespread in popular culture. The 'facts' are normally absurd hyperbolic claims about Norris' toughness, attitude, virility, sophistication, and masculinity."}),Object(O.jsx)("a",{href:"#chuck",className:"btn",children:"Wanna laugh?"})]})}),Object(O.jsxs)("div",{className:"main expandUp",children:[Object(O.jsx)("h2",{id:"chuck",children:"Click on category to get 'em jokes"}),Object(O.jsxs)("div",{className:" split",children:[Object(O.jsxs)("div",{className:"first-half",children:[o.map((function(e){return Object(O.jsx)("div",{onClick:function(){document.getElementById("joke").classList.add("slideLeft")},children:Object(O.jsx)("div",{onClick:function(){return a(e)},className:"category",children:Object(O.jsx)("div",{className:"details",children:Object(O.jsx)("h5",{children:e})})},e)})})),";"]}),Object(O.jsx)("div",{className:"second-half",id:"joke",children:Object(O.jsx)(m,{})}),Object(O.jsx)("div",{className:"circle1"}),Object(O.jsx)("div",{className:"circle2"}),Object(O.jsx)("div",{className:"circle3"})]})]}),Object(O.jsx)("div",{className:"footer-bg",children:Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)("div",{className:"footer-text",children:Object(O.jsx)("small",{children:"Osuka Technologies"})})})})]})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e57b7830.chunk.js.map