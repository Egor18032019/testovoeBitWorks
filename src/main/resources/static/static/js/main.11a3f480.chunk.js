(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(11),a=n.n(r),l=(n(17),n(4)),i=n.p+"static/media/logo.6ce24c58.svg",o=(n(18),"/"),u="/realization",j="/task",b="/case",d="SENDCELLS",h="ERROR",f="GETALLCELLS",O=n(7),p=n(0);var m=function(){return Object(p.jsxs)("div",{className:"toolbar",children:[Object(p.jsx)(O.b,{className:"toolbar-link",to:u,children:Object(p.jsx)("h2",{children:"- \u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f "})}),Object(p.jsx)(O.b,{className:"toolbar-link",to:j,children:Object(p.jsx)("h2",{children:"- \u0422\u0435\u0445. \u0437\u0430\u0434\u0430\u043d\u0438\u0435 "})}),Object(p.jsx)(O.b,{className:"toolbar-link",to:b,children:Object(p.jsx)("h2",{children:"- Test case "})})]})};var x=function(){return Object(p.jsx)("div",{className:"main",children:Object(p.jsx)(m,{})})},v=n(12),N=s.a.createContext("cells"),y={active:"REALIZATION",result:[],status:""},_=function(e,t){switch(t.type){case f:var n=t.payload;if(n.length<9){var c=[];n.forEach((function(e){c.push(e.id)})),[0,1,2,3,4,5,6,7,8,9].filter((function(e){return!c.includes(e)})).forEach((function(e){n.push({id:e,name:""})}))}return n.sort((function(e,t){return e.id-t.id})),Object.assign({},e,{result:n,status:""});case h:var s=t.payload;return Object.assign({},e,{status:s});case d:var r=t.payload,a=r.requestList,l=a.reduce((function(e,t){var n={id:t,name:r.name};return e.push(n),e}),[]),i=[].concat(e.result).filter((function(e){return!a.includes(e.id)}));return i.push.apply(i,Object(v.a)(l)),i.sort((function(e,t){return e.id-t.id})),Object.assign({},e,{result:i,status:""})}},g=n(5),k=n.n(g),L=n(9);function R(){return E.apply(this,arguments)}function E(){return(E=Object(L.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/get");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(L.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/rec",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(L.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/clear",{method:"POST"});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){var t=e.cell,n=t.id,c=t.name;return Object(p.jsxs)("li",{className:"cell",children:[Object(p.jsxs)("div",{className:"cell_id",children:[n," "]}),Object(p.jsxs)("div",{className:"cell_name",children:[c," "]})]})},T=(n(21),function(){var e=Object(c.useContext)(N),t=e.state,n=e.dispatch,s=Object(c.useState)([]),r=Object(l.a)(s,2),a=r[0],i=r[1],o=Object(c.useState)("Realization"),u=Object(l.a)(o,2),j=u[0],b=u[1],d=Object(c.useRef)(null),O=Object(c.useRef)(null),m=Object(c.useRef)(null),x=Object(c.useRef)("NORMAL"),v=Object(c.useRef)("+");Object(c.useEffect)((function(){R().then((function(e){console.log(e),n({type:f,payload:e})}))}),[]),Object(c.useEffect)((function(){i(t.result)}),[t.result]),Object(c.useEffect)((function(){b(t.status.info)}),[t.status]);var y=function(e){e&&e.preventDefault(),R().then((function(e){console.log(e),n({type:f,payload:e})}))};return Object(p.jsxs)("div",{className:"realization",children:[Object(p.jsxs)("form",{className:"realization-form",ref:d,children:[Object(p.jsxs)("fieldset",{className:"ad-form__element",children:[Object(p.jsx)("label",{className:"ad-form__label",htmlFor:"sign",children:"\u0417\u043d\u0430\u043a"}),Object(p.jsxs)("select",{id:"sign",name:"sign",ref:v,children:[Object(p.jsx)("option",{value:"+",children:"+"}),Object(p.jsx)("option",{value:"-",children:"-"})]})]}),Object(p.jsxs)("fieldset",{className:"realization-form__element",children:[Object(p.jsx)("label",{className:"realization-form__label",htmlFor:"users",children:"\u0418\u043c\u044f"}),Object(p.jsx)("input",{id:"users",name:"users",type:"text",required:!0,ref:O})]}),Object(p.jsxs)("fieldset",{className:"realization-form__element",children:[Object(p.jsx)("label",{className:"realization-form__label",htmlFor:"cells",children:"\u041c\u0435\u0441\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e"}),Object(p.jsx)("input",{id:"cells",name:"cells",type:"text",required:!0,ref:m})]}),Object(p.jsxs)("fieldset",{className:"ad-form__element",children:[Object(p.jsx)("label",{className:"ad-form__label",htmlFor:"priority",children:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442"}),Object(p.jsxs)("select",{id:"priority",name:"priority",ref:x,children:[Object(p.jsx)("option",{value:"NORMAL",children:"NORMAL"}),Object(p.jsx)("option",{value:"LOWPRIO",children:"LOWPRIO"})]})]}),Object(p.jsxs)("fieldset",{className:"realization-form__element realization-form__element--submit",children:[Object(p.jsx)("button",{className:"ad-form__submit",type:"submit",onClick:function(e){e.preventDefault(),console.log("SendCells ");var t=Array.from(m.current.value.split(","));(function(e){return S.apply(this,arguments)})({sign:v.current.value,name:O.current.value,requestList:t,priority:x.current.value}).then((function(e){e.info?n({type:h,payload:e}):y()}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),"\u0438\u043b\u0438 ",Object(p.jsx)("button",{className:"ad-form__reset",type:"reset",onClick:function(){d=null},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"})]})]}),Object(p.jsx)("h1",{children:j}),Object(p.jsx)("button",{className:"update_button",onClick:y,children:" \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c  "}),Object(p.jsx)("ul",{className:"cell_list",children:a.map((function(e){return Object(p.jsx)(A,{cell:e},Date.now()+e.name+Math.random())}))}),Object(p.jsx)("button",{className:"ad-form__clear",type:"submit",onClick:function(){(function(e){return C.apply(this,arguments)})().then((function(e){n({type:f,payload:e})}))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 H2 \u0411\u0414"})]})});var w=function(){return Object(p.jsxs)("div",{className:"test",children:[Object(p.jsx)("h1",{children:"TESTCASE"}),Object(p.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})};var z=function(){return Object(p.jsxs)("div",{className:"tech",children:[Object(p.jsx)("h1",{children:"TechTask"}),Object(p.jsx)("p",{children:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u0426\u0435\u043b\u044c \u0441\u043e\u0438\u0441\u043a\u0430\u0442\u0435\u043b\u044f: \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0421\u043c\u044b\u0441\u043b \u0437\u0430\u0434\u0430\u0447\u0438: \u0438\u043c\u0435\u0435\u0442\u0441\u044f N \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438 M \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u0432, M \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u0430\u043a \u0431\u043e\u043b\u044c\u0448\u0435, \u0440\u0430\u0432\u043d\u043e, \u0442\u0430\u043a \u0438 \u043c\u0435\u043d\u044c\u0448\u0435 N. \u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0443\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u043c \u0432\u043b\u0430\u0434\u0435\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u0438\u0437 N (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 N1, N2, N3) - SN. \u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0443\u0431\u044a\u0435\u043a\u0442 \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u043e\u0436\u0435\u0442 \u0432\u043b\u0430\u0434\u0435\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u0438\u0437 \u0441\u0432\u043e\u0435\u0433\u043e \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 SN. \u0412 \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043e\u0434\u043d\u0438\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u043c\u043e\u0436\u0435\u0442 \u0432\u043b\u0430\u0434\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0441\u0443\u0431\u044a\u0435\u043a\u0442. \u0417\u0430\u0434\u0430\u0447\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438: 1. \u0421\u0443\u0431\u044a\u0435\u043a\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c\u0441\u044f \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0437\u0430 \u043e\u0434\u043d\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f (\u0442\u043e \u0435\u0441\u0442\u044c \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0447\u0442\u043e \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u0430\u0433\u0435\u043d\u0442\u044b \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u044f\u0442\u044c\u0441\u044f \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f) 2. \u0421\u0443\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435 \u0435\u0433\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 3. \u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u044b\u043c \u0438 \u0441\u0442\u0440\u0435\u043c\u0438\u0442\u044c\u0441\u044f \u043a \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u043c\u0443 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e \u0441\u0440\u0435\u0434\u0438 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u0432 4. \u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u043c, \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u0441\u0431\u0440\u043e\u0441 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438 \u043f\u043e\u043b\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0440\u0430\u0441\u0447\u0435\u0442, \u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u043d\u044f\u0442\u0438\u0435 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043d\u043e\u0432\u043e\u0439 \u0434\u0438\u0441\u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439. 5. \u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 (\u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438) \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0442\u044c \u0435\u043c\u0443 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u043e\u0432 (\u0442\u043e \u0435\u0441\u0442\u044c \u0441\u0443\u0431\u044a\u0435\u043a\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u043c). 6. \u041e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0431\u0435\u0437 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u043a\u0435\u043c-\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430, \u0432 \u0447\u044c\u0435\u043c \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442. 7. \u0415\u0441\u043b\u0438 \u0441\u0443\u0431\u044a\u0435\u043a\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 LOWPRIO, \u0442\u043e \u043e\u043d \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u043c, \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430 \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430. \u041a\u0430\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435: 1. \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u041e\u041e\u041f \u0438\u043b\u0438 \u0424\u041f (\u0435\u0441\u043b\u0438 \u0432\u044b\u0431\u0440\u0430\u043d \u0424\u042f) 2. \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u043e\u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f 3. \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c unit-test-\u044b \u0434\u043b\u044f \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u0441\u0435\u0433\u043e \u043a\u043e\u0434\u0430 (\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u042f\u041f) 4. \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440 (\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442 \u0434\u043b\u044f \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u042f\u041f) 5. \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0432 \u044f\u0437\u044b\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, scaladoc \u0434\u043b\u044f scala) 6. \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0435, \u043b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438 \u0438 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0438\u043c\u0435\u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 7. Main \u043d\u0435 \u043d\u0443\u0436\u0435\u043d"})]})},F=n(2);var M=function(){var e=Object(c.useReducer)(_,y),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(p.jsx)(N.Provider,{value:{dispatch:s,state:n},children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(p.jsx)("a",{className:"App-link",href:"/",children:Object(p.jsx)("h1",{children:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0432\u043b\u0430\u0434\u0435\u043d\u0438\u044f"})}),Object(p.jsx)("a",{className:"App-link",href:"https://github.com/Egor18032019/testovoeBitWorks",target:"_blank",rel:"noopener noreferrer",children:"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"})]}),Object(p.jsx)("main",{children:Object(p.jsx)(O.a,{children:Object(p.jsxs)(F.c,{children:[Object(p.jsx)(F.a,{path:o,element:Object(p.jsx)(x,{})}),Object(p.jsx)(F.a,{path:u,element:Object(p.jsx)(T,{})}),Object(p.jsx)(F.a,{path:j,element:Object(p.jsx)(w,{})}),Object(p.jsx)(F.a,{path:b,element:Object(p.jsx)(z,{})})]})})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),P()}},[[22,1,2]]]);
//# sourceMappingURL=main.11a3f480.chunk.js.map