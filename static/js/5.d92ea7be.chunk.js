(this.webpackJsonptelemedic=this.webpackJsonptelemedic||[]).push([[5],{100:function(t,e,n){"use strict";n.r(e);var A=n(0),c=n(38),i=n.n(c),a=n(51),s=n(32),r=(n(248),n(128)),o=n(58),l=n(176),u=n(53),d=n(170),j=n(189),h=n(190),f=n(192),b=n(166),O=n(6),p=function(t){var e=t.technicalInspectionsList,n=t.handleScroll,A=t.load;return Object(O.jsxs)("div",{id:"techlist",className:"technical-inspections-page",onScroll:n,children:[Object(O.jsx)(d.a,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0445\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}),Object(O.jsx)(j.a,{children:e.map((function(t){var e=t.attributes.date;return Object(O.jsxs)(o.b,{to:"/technicalinspection/".concat(t.id),className:"technical-inspections-link",children:[Object(O.jsxs)(h.a,{children:[Object(O.jsxs)(f.a,{children:[Object(O.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440"})," ",Object(O.jsx)(r.a,{children:t.id})]}),Object(O.jsxs)(f.a,{children:[Object(O.jsx)("label",{children:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(O.jsx)(r.a,{children:Object(l.b)(e)})]})]}),Object(O.jsx)(b.a,{})]},t.id)}))}),A&&Object(O.jsx)(u.a,{})]})},v=n(61),g=n(59),m=function(){var t=Object(A.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(A.useState)(10),o=Object(s.a)(r,2),l=o[0],d=o[1],j=Object(A.useState)(!1),h=Object(s.a)(j,2),f=h[0],b=h[1],m=function(){var t=Object(a.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat(g.a,"/tech_inspections?page[size]=").concat(l,"&sort=-id"));case 2:e=t.sent,c(e.data),b(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(A.useEffect)((function(){m(),d(l+5)}),[]),0===n.length?Object(O.jsx)(u.a,{}):Object(O.jsx)(p,{technicalInspectionsList:n,handleScroll:function(){var t=document.getElementById("techlist");t&&(t.scrollTop+10>=t.scrollHeight-t.offsetHeight&&(d(l+10),b(!0),m()))},load:f})};e.default=function(){return Object(O.jsx)(m,{})}},166:function(t,e,n){"use strict";n(0);var A=n(6);e.a=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{style:{width:"100%",border:"1px solid rgba(124, 147, 156, 0.62)"}}),Object(A.jsx)("div",{style:{width:"100%",border:"1px solid #FFFFFF"}})]})}},169:function(t,e,n){},170:function(t,e,n){"use strict";n(0),n(169);var A=n.p+"static/media/back-arrow.3cc4fcb7.svg",c=n(166),i=n(128),a=n(156),s=n(184),r=n(60),o=n(6);e.a=function(t){var e=t.children,n=Object(r.b)(),l=n.pwaInstall,u=n.supported,d=n.isInstalled,j=window.location.pathname;return Object(o.jsxs)("div",{className:"navigation-header",children:[Object(o.jsxs)("nav",{className:"navigation-header-wrapper",children:[Object(o.jsx)("div",{style:{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:"/home"!==j&&Object(o.jsx)("img",{className:"navigation-header-image",src:A,alt:"arrow",onClick:function(){window.history.back()}})}),Object(o.jsx)("div",{className:"navigation-header-content",children:Object(o.jsx)(i.a,{children:e})}),u()&&!d()&&Object(o.jsx)(a.a,{onClick:function(){l({title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAsSgAALEoBd3p0TQAAAD9QTFRFR3BMAAAA/9FLAAAA7sQ+/Ms3AAAAAAAA/9JJ+s1ApIQk/9JM/9VN7sE0dl8ZAAAA/s04f2Yc/tJM/s89/tFHjhYgtQAAABB0Uk5TACJIDajzKzPz3WfIKs1RB9kkoP0AAAFhSURBVHja7d07doMwAEVBMALxsYEA+19r6FIJuiD5zK1dvLFEraqSJEnSX68w9FuW9UN43c5/T1vWTe+bv7/fMq+/PIT3uf/Y9zXT9v04BVdnMJ3z16w7CdPFBdqONfuOLX2JQgH7T0FIAoa9CMCQBPRrEfVJwF4GYP9ewFpIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAScBPoqd+DwAAAAAAAAAAAAAAAAAAAADwP4CnhgIAAAAAAAAAAAAAAAAAAAAA5Al4KgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDHAW0Z+9v0w5plANIPa4YyAOmnTccyAGMS0H1K2P/pkoB6LuAzbuc6CWjimL2gHWOTfmG5jnPmt+gzx+7iieslxjiGIdNjaIcwngOXq1fGm5h9TXXZUuc9v16qu5q6y3V9VzeVJElf1S9xHfxZqqmO1AAAAABJRU5ErkJggg==",description:"Telemedic App"}).then((function(){return alert("\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e \u0438\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u0430")}))},children:Object(o.jsx)(s.a,{})})]}),Object(o.jsx)(c.a,{})]})}},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var A=n(1),c=n(0),i=n.n(c),a=n(155);function s(t,e){var n=function(e,n){return i.a.createElement(a.a,Object(A.a)({ref:n},e),t)};return n.muiName=a.a.muiName,i.a.memo(i.a.forwardRef(n))}},176:function(t,e,n){"use strict";n.d(e,"a",(function(){return A})),n.d(e,"b",(function(){return c}));var A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=new Date,n=e.getTimezoneOffset()/60*-1;return Date.prototype.addHours=function(t){return this.setHours(this.getHours()+t),this},"\n  ".concat(new Date(t).addHours(n).toISOString().split("T")[0].split(".")[0],"\n  ").concat(new Date(t).addHours(n).toISOString().split("T")[1].split(".")[0])},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=new Date,n=e.getTimezoneOffset()/60*-1;return Date.prototype.addHours=function(t){return this.setHours(this.getHours()+t),this},"\n  ".concat(new Date(t).addHours(n).toISOString().split("T")[0].split(".")[0])}},184:function(t,e,n){"use strict";var A=n(0),c=n(172);e.a=Object(c.a)(A.createElement("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Computer")},189:function(t,e,n){"use strict";n(0);var A=n(6);e.a=function(t){var e=t.children;return Object(A.jsx)("div",{className:"list",children:e})}},190:function(t,e,n){"use strict";n(0),n(191);var A=n(6);e.a=function(t){var e=t.children;return Object(A.jsx)("div",{className:"list-items",children:e})}},191:function(t,e,n){},192:function(t,e,n){"use strict";n(0),n(193);var A=n(6);e.a=function(t){var e=t.children,n=t.style;return Object(A.jsx)("div",{className:"list-item",style:n,children:e})}},193:function(t,e,n){},248:function(t,e,n){}}]);
//# sourceMappingURL=5.d92ea7be.chunk.js.map