(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,c=n(6),o=n.n(c),i=n(5),r=n(7),a=n(1),u=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.None=0]="None",t[t.Alphabet=1]="Alphabet",t[t.Length=2]="Length"}(s||(s={}));var b=function(){var t=Object(a.useState)(s.None),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),b=Object(i.a)(o,2),h=b[0],j=b[1],d=n===s.None&&!h,p=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return o.sort((function(t,e){switch(n){case s.Alphabet:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(l,{sortType:n,isReversed:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:n!==s.Alphabet?"button is-info is-light":"button is-info",onClick:function(){return c(s.Alphabet)},children:"Sort Alphabetically"}),Object(u.jsx)("button",{type:"button",className:n!==s.Length?"button is-success is-light":"button is-success",onClick:function(){return c(s.Length)},children:"Sort by Length"}),Object(u.jsx)("button",{type:"button",className:h?"button is-warning":"button is-warning is-light",onClick:function(){return j(!h)},children:"Reverse"}),!d&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.None),j(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a0a3fa12.chunk.js.map