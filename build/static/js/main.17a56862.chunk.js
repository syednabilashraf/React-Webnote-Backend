(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{20:function(t,e){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),o=n.n(c),u=(n(20),n(6),n(4)),r=n(2),a=n(1),i=function(t){var e=t.note;return Object(a.jsx)("li",{children:e.content})},s=n(3),j=n.n(s),b="/api/notes",h=function(){return j.a.get(b).then((function(t){return t.data}))},f=function(t){return j.a.post(b,t).then((function(t){return t.data}))},l=function(){var t=Object(r.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)("Enter note here"),s=Object(u.a)(o,2),b=s[0],l=s[1],O=Object(r.useState)(!0),d=Object(u.a)(O,2);d[0],d[1];Object(r.useEffect)((function(){h().then((function(t){c(t.notes)}))}),[]);j.a.get("http://localhost:3001/notes").then((function(t){}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Notes"}),Object(a.jsx)("ul",{children:n.map((function(t){return Object(a.jsx)(i,{note:t},t.id)}))}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:n.length+1,name:"Abed",content:b};f(e).then((function(e){console.log(t),c(n.concat(e)),l("")}))},children:[Object(a.jsx)("input",{value:b,onChange:function(t){l(t.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"save"})]})]})};o.a.render(Object(a.jsx)(l,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.17a56862.chunk.js.map