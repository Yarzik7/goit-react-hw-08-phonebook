"use strict";(self.webpackChunkphonebook_frontend=self.webpackChunkphonebook_frontend||[]).push([[202],{7303:function(n,e,t){t.d(e,{Af:function(){return u},Gz:function(){return l},hF:function(){return f},oW:function(){return o},pT:function(){return c},xU:function(){return i},zh:function(){return s}});var r=t(6916),a=t(6368),u=function(n){return n.contacts.items},o=function(n){return n.contacts.isDeleting},i=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.isFetching},s=function(n){return n.contacts.error},l=function(n){return n.contacts.currentContactId},f=(0,r.P1)([a.A,u],(function(n,e){return{items:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})),allLength:e.length}}))},6368:function(n,e,t){t.d(e,{A:function(){return r}});var r=function(n){return n.filter}},9202:function(n,e,t){t.d(e,{Z:function(){return b}});var r=t(5861),a=t(9439),u=t(7757),o=t.n(u),i=t(9434),c=t(2791),s=t(3660),l=t(9602),f=t(2745),d=t(184),p=function(){var n=(0,c.useState)(""),e=(0,a.Z)(n,2),t=e[0],u=e[1],p=(0,c.useState)(""),h=(0,a.Z)(p,2),v=h[0],m=h[1],y=(0,c.useState)(""),x=(0,a.Z)(y,2),g=x[0],b=x[1],_=(0,i.I0)(),C=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_((0,s.z2)({name:t,email:v,password:g}));case 2:j();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":u(r);break;case"email":m(r);break;case"password":b(r);break;default:return}},j=function(){u(""),m(""),b("")};return(0,d.jsxs)(f.Z,{buttonCaption:"Register",onSubmit:C,children:[(0,d.jsx)(l.Z,{label:"Username",type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF\\- ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:w}),(0,d.jsx)(l.Z,{label:"Email",type:"email",name:"email",onChange:w}),(0,d.jsx)(l.Z,{label:"Password",type:"password",name:"password",minLength:"8",onChange:w})]})},h=function(){var n=(0,c.useState)(""),e=(0,a.Z)(n,2),t=e[0],u=e[1],p=(0,c.useState)(""),h=(0,a.Z)(p,2),v=h[0],m=h[1],y=(0,i.I0)(),x=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y((0,s.Ib)({email:t,password:v}));case 2:b();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"email":u(r);break;case"password":m(r);break;default:return}},b=function(){u(""),m("")};return(0,d.jsxs)(f.Z,{buttonCaption:"Login",onSubmit:x,children:[(0,d.jsx)(l.Z,{label:"Email",type:"email",name:"email",onChange:g}),(0,d.jsx)(l.Z,{label:"Password",type:"password",name:"password",minLength:"8",onChange:g})]})},v=t(2819),m=t(1087),y="AuthPagesContent_formBox__pN12I",x="AuthPagesContent_authOffer__navLink__lKyw0",g="AuthPagesContent_authOffer__9HEbQ",b=function(n){var e=n.page,t="Login"===e;return(0,d.jsxs)(v.Z,{headText:e,isHeadHas:!1,children:[(0,d.jsx)("h1",{className:"title",children:e}),(0,d.jsx)("div",{className:y,children:t?(0,d.jsx)(h,{}):(0,d.jsx)(p,{})}),(0,d.jsxs)("p",{className:g,children:[t?"Don't have an account? ":"Already have an account? ",(0,d.jsx)(m.OL,{to:t?"/register":"/login",className:x,children:t?"SignUp":"Login"})]})]})}},2745:function(n,e,t){t.d(e,{Z:function(){return h}});var r=t(5861),a=t(9439),u=t(7757),o=t.n(u),i=t(2791),c="Form_form__e1yzW",s="Form_button__8NOIT",l=t(9434),f=t(7303),d=t(5323),p=t(184),h=function(n){var e=n.buttonCaption,t=n.onSubmit,u=n.children,h=(0,i.useState)(!1),v=(0,a.Z)(h,2),m=v[0],y=v[1],x=(0,l.v9)(f.xU),g=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),y(!0),n.next=4,t();case 4:y(!1);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,p.jsxs)("form",{className:c,onSubmit:g,children:[u,(0,p.jsxs)("button",{disabled:m,className:s,type:"submit",children:[e,x&&(0,p.jsx)(d.a,{size:"30px",strokeSize:4,color:"var(--primary-dark-color)",secondaryColor:'"var(--primary-dark-color)"'})]})]})}},9602:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(2791),a=t(5984),u="Input_label__NXpCD",o="Input_input__E5rzA",i=t(184),c=function(n){var e=n.onChange,t=n.type,c=void 0===t?"text":t,s=n.name,l=void 0===s?"":s,f=n.label,d=n.title,p=n.pattern,h=n.required,v=void 0===h||h,m=n.minLength,y=n.value,x=(0,r.useRef)((0,a.x0)());return(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)("label",{htmlFor:x.current,className:u,children:f}),(0,i.jsx)("input",{id:x.current,className:o,type:c,name:l,value:y,pattern:p,title:d,required:v,onChange:e,minLength:m})]})}},2819:function(n,e,t){t.d(e,{Z:function(){return l}});var r="Head_head__UoJYS",a=t(184),u=function(n){var e=n.headText,t=n.headType,u=void 0===t?"h1":t,o=n.cssClass;return(0,a.jsx)(u,{className:null!==o&&void 0!==o?o:r,children:e})},o="Section_section__Z2PLw",i=function(n){var e=n.isHeadHas,t=void 0===e||e,r=n.headText,i=n.headType,c=void 0===i?"h2":i,s=n.cssHeadClass,l=n.children;return(0,a.jsxs)("section",{className:o,children:[t&&(0,a.jsx)(u,{headText:r,headType:c,cssClass:s}),l]})},c="Container_container__VVOCq",s=function(n){var e=n.children;return(0,a.jsx)("div",{className:c,children:e})},l=function(n){var e=n.isHeadHas,t=void 0===e||e,r=n.headText,o=n.headType,c=void 0===o?"h2":o,l=n.cssHeadClass,f=n.children;return(0,a.jsx)(i,{isHeadHas:!1,children:(0,a.jsxs)(s,{children:[t&&(0,a.jsx)(u,{headText:r,headType:c,cssClass:l}),f]})})}},6916:function(n,e,t){t.d(e,{P1:function(){return c}});var r="NOT_FOUND";var a=function(n,e){return n===e};function u(n,e){var t="object"===typeof e?e:{equalityCheck:e},u=t.equalityCheck,o=void 0===u?a:u,i=t.maxSize,c=void 0===i?1:i,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(o),f=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function a(n){var a=t.findIndex((function(t){return e(n,t.key)}));if(a>-1){var u=t[a];return a>0&&(t.splice(a,1),t.unshift(u)),u.value}return r}return{get:a,put:function(e,u){a(e)===r&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function d(){var e=f.get(arguments);if(e===r){if(e=n.apply(null,arguments),s){var t=f.getEntries(),a=t.find((function(n){return s(n.value,e)}));a&&(e=a.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function o(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function i(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var u,i=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=c,f=l.memoizeOptions,d=void 0===f?t:f,p=Array.isArray(d)?d:[d],h=o(r),v=n.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return u=v.apply(null,n)}));return Object.assign(m,{resultFunc:s,memoizedResultFunc:v,dependencies:h,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return a}var c=i(u)},5984:function(n,e,t){t.d(e,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=202.41b89084.chunk.js.map