(this.webpackJsonpfavelagroup=this.webpackJsonpfavelagroup||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c,a,r,i,s,o,l=n(1),j=n.n(l),b=n(18),u=n.n(b),O=n(11),d=n(4),h=n(0),m=function(e){var t=e.children;return Object(h.jsx)("header",{children:t})},p=n(3),f={title:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0438\u044f",path:"/auth"},x={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/reg",routes:{confirmed:{title:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 e-mail",path:"/email-confirmed"}}},g={title:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",path:"/forget-pass"},v=n.p+"static/media/logo.fb080818.svg",w=n(12),y=n(15),N={isUser:!1},C={visible:!0},k=function(){function e(t,n){Object(w.a)(this,e),this.stateManager=t,this.stateContent=n}return Object(y.a)(e,[{key:"initialize",value:function(){try{this.stateManager.securityStore.setUser(N),this.stateContent.contentStore.setVisibleHeader(C)}catch(e){}}},{key:"user",get:function(){return this.stateManager.securityStore.user},set:function(e){this.stateManager.securityStore.setUser(e)}},{key:"visibleHeader",get:function(){return this.stateContent.contentStore.visibleHeader},set:function(e){this.stateContent.contentStore.setVisibleHeader(e)}}]),e}(),_=n(17),E=n(13),S=(n(23),n(2)),z=(c=function(){function e(){Object(w.a)(this,e),Object(_.a)(this,"user",a,this),Object(_.a)(this,"error",r,this),Object(S.m)(this)}return Object(y.a)(e,[{key:"setUser",value:function(e){this.user=e}},{key:"setError",value:function(e){this.error=e}},{key:"unauthorize",value:function(){this.user=N}}]),e}(),a=Object(E.a)(c.prototype,"user",[S.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return N}}),r=Object(E.a)(c.prototype,"error",[S.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(E.a)(c.prototype,"setUser",[S.f],Object.getOwnPropertyDescriptor(c.prototype,"setUser"),c.prototype),Object(E.a)(c.prototype,"setError",[S.f],Object.getOwnPropertyDescriptor(c.prototype,"setError"),c.prototype),Object(E.a)(c.prototype,"unauthorize",[S.f],Object.getOwnPropertyDescriptor(c.prototype,"unauthorize"),c.prototype),c),F=(i=function(){function e(){Object(w.a)(this,e),Object(_.a)(this,"visibleHeader",s,this),Object(S.m)(this)}return Object(y.a)(e,[{key:"setVisibleHeader",value:function(e){this.visibleHeader=e}}]),e}(),s=Object(E.a)(i.prototype,"visibleHeader",[S.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return C}}),Object(E.a)(i.prototype,"setVisibleHeader",[S.f],Object.getOwnPropertyDescriptor(i.prototype,"setVisibleHeader"),i.prototype),i),H=new k(new function e(t){Object(w.a)(this,e),this.securityStore=t}(new z),new function e(t){Object(w.a)(this,e),this.contentStore=t}(new F)),U=j.a.createContext({applicationManager:H}),P=function(){return Object(l.useContext)(U).applicationManager},M=Object(d.a)((function(){var e=P(),t=e.visibleHeader,n=Object(p.f)(),c=e.user.isUser?Object(h.jsx)("button",{onClick:function(){try{e.user=N,n.push(f.path)}catch(t){}},className:"link link-grey",children:"\u0412\u044b\u0439\u0442\u0438"}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"}),Object(h.jsx)(O.b,{to:x.path,className:"btn btn-blue",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"header-menu__left-content",children:Object(h.jsx)(O.b,{to:f.path,children:Object(h.jsx)("img",{src:v,alt:"Logo"})})}),Object(h.jsx)("div",{className:"header-menu__right-content",children:t.visible&&c})]})})),R=n(7),T=n(6),$=function(e){var t=e.icon,n=e.text;return Object(h.jsxs)("button",{className:"btn btn-icon",children:[Object(h.jsx)("i",{className:"icon__".concat(t)}),Object(h.jsx)("span",{children:n})]})},V=Object(d.a)((function(){var e=Object(p.f)(),t=Object(l.useState)({email:"",password:""}),n=Object(T.a)(t,2),c=n[0],a=n[1],r=Object(l.useState)(""),i=Object(T.a)(r,2),s=i[0],o=i[1];return Object(l.useEffect)((function(){return o("")}),[c]),Object(h.jsxs)("div",{className:"auth-container",children:[Object(h.jsx)("h1",{children:"\u0412\u043e\u0439\u0442\u0438"}),Object(h.jsx)("h2",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, \u0440\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0430\u0441 \u0441\u043d\u043e\u0432\u0430 \ud83d\udc4b"}),Object(h.jsxs)("div",{className:"auth-container__social-group",children:[Object(h.jsx)($,{icon:"facebook",text:"\u0412\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Facebook"}),Object(h.jsx)($,{icon:"google",text:"\u0412\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google"})]}),Object(h.jsx)("h2",{children:"\u0438\u043b\u0438"}),Object(h.jsxs)("div",{className:"auth-container__input-group",children:[Object(h.jsx)("input",{className:s?"danger":"",type:"email",value:c.email,name:"email",placeholder:"Email",onChange:function(e){return a(Object(R.a)(Object(R.a)({},c),{},{email:e.currentTarget.value}))}}),Object(h.jsx)("input",{className:s?"danger":"",type:"password",value:c.password,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return a(Object(R.a)(Object(R.a)({},c),{},{password:e.currentTarget.value}))}}),Object(h.jsx)("div",{className:"text-danger",children:s})]}),Object(h.jsxs)("div",{className:"auth-container__submit-group",children:[Object(h.jsx)("button",{onClick:function(){return o(""),""===c.email||""===c.password?o((c.email?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email, ")+(c.password?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c")):"example@example.com"!==c.email||"password2021"!==c.password?o("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0435mail \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"):void 0},className:"btn btn-blue",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(h.jsx)("button",{onClick:function(){return e.push(g.path)},className:"link",children:" \u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})]})]})}));!function(e){e[e.ForgetPassword=0]="ForgetPassword",e[e.EmailSent=1]="EmailSent"}(o||(o={}));var D,G=Object(d.a)((function(e){var t=e.onControl,n=Object(l.useState)({email:""}),c=Object(T.a)(n,2),a=c[0],r=c[1],i=Object(l.useState)(""),s=Object(T.a)(i,2),o=s[0],j=s[1];return Object(l.useEffect)((function(){return j("")}),[a]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0440\u0430\u043d\u0435\u0435"}),Object(h.jsxs)("div",{className:"forget-container__input-group",children:[Object(h.jsx)("input",{className:o?"danger":"",type:"email",value:a.email,name:"email",placeholder:"Email",onChange:function(e){return r(Object(R.a)(Object(R.a)({},a),{},{email:e.currentTarget.value}))}}),Object(h.jsx)("div",{className:"text-danger",children:o})]}),Object(h.jsxs)("div",{className:"forget-container__submit-group",children:[Object(h.jsx)("button",{onClick:function(){return j(""),new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(a.email)?"example@example.com"!==a.email?j("\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"):void t():j("\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u044b \u043e\u0448\u0438\u0431\u043b\u0438\u0441\u044c \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430")},className:"btn btn-blue",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(h.jsx)("button",{className:"link link-grey",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})})),J=Object(d.a)((function(){var e=Object(p.f)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"\u041f\u0438\u0441\u044c\u043c\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"}),Object(h.jsx)("h2",{children:"\u041d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 e-mail \u0431\u044b\u043b\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0434\u043b\u044f \u0441\u043c\u0435\u043d\u044b \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(h.jsx)("div",{className:"forget-container__submit-group",children:Object(h.jsx)("button",{onClick:function(){e.push(f.path)},className:"btn btn-blue",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})]})})),B=Object(d.a)((function(){var e=P(),t=Object(l.useState)(o.ForgetPassword),n=Object(T.a)(t,2),c=n[0],a=n[1],r=Object(l.useState)("icon__key"),i=Object(T.a)(r,2),s=i[0],j=i[1],b=e.visibleHeader;Object(l.useEffect)((function(){b.visible=!1}),[]);return Object(h.jsxs)("div",{className:"forget-container",children:[Object(h.jsx)("i",{className:s}),c===o.ForgetPassword&&Object(h.jsx)(G,{onControl:function(){a(o.EmailSent),j("icon__send")}}),c===o.EmailSent&&Object(h.jsx)(J,{})]})})),I=n(22),L=n.n(I),q=n(28),A={isUser:!0},K=Object(d.a)((function(){var e=P(),t=Object(p.f)(),n=Object(l.useState)({name:"",email:"",password:""}),c=Object(T.a)(n,2),a=c[0],r=c[1],i=Object(l.useState)(""),s=Object(T.a)(i,2),o=s[0],j=s[1],b=Object(l.useState)(!1),u=Object(T.a)(b,2),O=u[0],d=u[1],m=function(){try{e.user=A}catch(o){}},f=function(){var e=Object(q.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(""),new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(a.email)){e.next=4;break}return e.abrupt("return",j("\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u044b \u043e\u0448\u0438\u0431\u043b\u0438\u0441\u044c \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430"));case 4:return e.next=6,m();case 6:t.push(x.routes.confirmed.path);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){return j("")}),[a]),Object(h.jsxs)("div",{className:"reg-container",children:[Object(h.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsx)("h2",{children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0441\u044f \u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0435 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432."}),Object(h.jsxs)("div",{className:"auth-container__social-group",children:[Object(h.jsx)($,{icon:"facebook",text:"\u0412\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Facebook"}),Object(h.jsx)($,{icon:"google",text:"\u0412\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google"})]}),Object(h.jsx)("h2",{children:"\u0438\u043b\u0438"}),Object(h.jsxs)("div",{className:"reg-container__input-group",children:[Object(h.jsx)("input",{type:"text",value:a.name,name:"name",placeholder:"\u0418\u043c\u044f",onChange:function(e){return r(Object(R.a)(Object(R.a)({},a),{},{name:e.currentTarget.value}))}}),Object(h.jsx)("input",{className:o?"danger":"",type:"email",value:a.email,name:"email",placeholder:"Email",onChange:function(e){return r(Object(R.a)(Object(R.a)({},a),{},{email:e.currentTarget.value}))}}),Object(h.jsx)("div",{className:"text-danger",children:o}),Object(h.jsx)("input",{type:"password",value:a.password,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return r(Object(R.a)(Object(R.a)({},a),{},{password:e.currentTarget.value}))}}),Object(h.jsx)("button",{className:"link",hidden:O,onClick:function(){return d(!0)},children:"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"}),O?Object(h.jsx)("input",{placeholder:"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434",name:"promoCode"}):null]}),Object(h.jsxs)("div",{className:"reg-container__submit-group",children:[Object(h.jsx)("button",{onClick:f,className:"btn btn-blue",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(h.jsxs)("span",{children:["\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442, \u044f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 ",Object(h.jsx)("button",{className:"link",children:"\u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438 \u043e\u0444\u0435\u0440\u0442\u044b"})]})]})]})})),Q=Object(d.a)((function(e){var t=e.onControl;return Object(h.jsxs)("div",{className:"confirmed-container email-confirmed",children:[Object(h.jsx)("h1",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 e-mail"}),Object(h.jsx)("h2",{children:"\u0418\u0433\u043e\u0440\u044c, \u043d\u0430 \u0432\u0430\u0448 E-mail \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0441\u043e \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u043d\u0435\u0439, \u0447\u0442\u043e\u0431\u044b \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448\u0443 \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c 7 \u0434\u043d\u0435\u0439 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430. "}),Object(h.jsxs)("div",{className:"confirmed-container__submit-group",children:[Object(h.jsx)("button",{className:"btn btn-blue",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043f\u043e\u0447\u0442\u0435"}),Object(h.jsx)("button",{onClick:t,className:"link",children:" \u041c\u043d\u0435 \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e \u043f\u0438\u0441\u044c\u043c\u043e"})]})]})})),W=Object(d.a)((function(e){var t=e.onControl,n=Object(l.useState)({email:""}),c=Object(T.a)(n,2),a=c[0],r=c[1],i=Object(l.useState)(""),s=Object(T.a)(i,2),o=s[0],j=s[1];return Object(l.useEffect)((function(){return j("")}),[a]),Object(h.jsxs)("div",{className:"confirmed-container repeated-email",children:[Object(h.jsx)("h1",{children:"\u041c\u043d\u0435 \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e \u043f\u0438\u0441\u044c\u043c\u043e"}),Object(h.jsxs)("h2",{children:["\u041f\u0438\u0441\u044c\u043c\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0439\u0442\u0438 \u0441 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0432 5-10 \u043c\u0438\u043d\u0443\u0442. ",Object(h.jsx)("br",{}),"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u0430\u043f\u043a\u0438 \u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e \u044f\u0449\u0438\u043a\u0430 (\u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f gmail.com) \u0438 \u043f\u0430\u043f\u043a\u0443 ",Object(h.jsx)("br",{}),'"\u0421\u043f\u0430\u043c".\u0415\u0441\u043b\u0438 \u043f\u0438\u0441\u044c\u043c\u043e \u0432\u0441\u0435 \u0436\u0435 \u043d\u0435 \u043f\u0440\u0438\u0448\u043b\u043e, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0438\u043b\u0438 \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u0432 ',Object(h.jsx)("br",{}),"\u0442\u0435\u0445.\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 ",Object(h.jsx)("a",{href:"mailto:support@livedune.ru",className:"link",children:"support@livedune.ru"})," \u0438 \u043c\u044b \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u043c \u0432\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442. "]}),Object(h.jsxs)("div",{className:"confirmed-container__input-group",children:[Object(h.jsx)("input",{className:o?"danger":"",type:"email",value:a.email,name:"email",placeholder:"Email",onChange:function(e){return r(Object(R.a)(Object(R.a)({},a),{},{email:e.currentTarget.value}))}}),Object(h.jsx)("div",{className:"text-danger",children:o})]}),Object(h.jsxs)("div",{className:"confirmed-container__submit-group",children:[Object(h.jsx)("button",{onClick:function(){if(j(""),!new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(a.email))return j("\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u044b \u043e\u0448\u0438\u0431\u043b\u0438\u0441\u044c \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430");t()},className:"btn btn-blue",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"}),Object(h.jsx)("button",{className:"link link-grey",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})}));!function(e){e[e.EmailConfirmed=0]="EmailConfirmed",e[e.RepeatedConfirmed=1]="RepeatedConfirmed"}(D||(D={}));var X=Object(d.a)((function(){var e=P(),t=Object(p.f)(),n=e.user,c=Object(l.useState)(D.EmailConfirmed),a=Object(T.a)(c,2),r=a[0],i=a[1];return Object(l.useEffect)((function(){!1===n.isUser&&t.push(f.path)}),[]),Object(h.jsxs)(h.Fragment,{children:[r===D.EmailConfirmed&&Object(h.jsx)(Q,{onControl:function(){i(D.RepeatedConfirmed)}}),r===D.RepeatedConfirmed&&Object(h.jsx)(W,{onControl:function(){i(D.EmailConfirmed)}})]})})),Y=Object(d.a)((function(){var e,t="favelagroup";return e=Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:t+f.path,component:V}),Object(h.jsx)(p.a,{path:t+x.path,component:K}),Object(h.jsx)(p.a,{path:t+x.routes.confirmed.path,component:X}),Object(h.jsx)(p.a,{path:t+g.path,component:B})]}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{children:Object(h.jsx)(M,{})}),e]})}));n(39),n(40);u.a.render(Object(h.jsx)(j.a.StrictMode,{children:Object(h.jsx)(O.a,{children:Object(h.jsx)(Y,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f6294373.chunk.js.map