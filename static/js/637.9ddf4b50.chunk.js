"use strict";(self.webpackChunkphonebook_frontend=self.webpackChunkphonebook_frontend||[]).push([[637],{9202:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(9434),a=t(3660),i=t(9602),s=t(2745),o=t(184),u=function(){var e=(0,r.I0)();return(0,o.jsxs)(s.Z,{buttonCaption:"Register",onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,a.z2)({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()},children:[(0,o.jsx)(i.Z,{label:"Username",type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF\\- ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,o.jsx)(i.Z,{label:"Email",type:"email",name:"email"}),(0,o.jsx)(i.Z,{label:"Password",type:"password",name:"password",minLength:"8"})]})},l=function(){var e=(0,r.I0)();return(0,o.jsxs)(s.Z,{buttonCaption:"Login",onSubmit:function(n){n.preventDefault();var t=n.currentTarget;e((0,a.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},children:[(0,o.jsx)(i.Z,{label:"Email",type:"email",name:"email"}),(0,o.jsx)(i.Z,{label:"Password",type:"password",name:"password",minLength:"8"})]})},c=t(7111),m=t(3087),d="AuthPagesContent_formBox__pN12I",p=function(e){var n=e.page;return(0,o.jsx)(c.Z,{children:(0,o.jsxs)(m.Z,{children:[(0,o.jsx)("h1",{className:"title",children:n}),(0,o.jsx)("div",{className:d,children:"Login"===n?(0,o.jsx)(l,{}):(0,o.jsx)(u,{})})]})})}},3087:function(e,n,t){t.d(n,{Z:function(){return i}});var r="Container_container__VVOCq",a=t(184),i=function(e){var n=e.children;return(0,a.jsx)("div",{className:r,children:n})}},2745:function(e,n,t){t.d(n,{Z:function(){return s}});var r="Form_form__e1yzW",a="Form_button__8NOIT",i=t(184),s=function(e){var n=e.buttonCaption,t=e.onSubmit,s=e.children;return(0,i.jsxs)("form",{className:r,onSubmit:t,children:[s,(0,i.jsx)("button",{className:a,type:"submit",children:n})]})}},9602:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(2791),a=t(5984),i="Input_label__NXpCD",s="Input_input__E5rzA",o=t(184),u=function(e){var n=e.onChange,t=e.type,u=void 0===t?"text":t,l=e.name,c=void 0===l?"":l,m=e.label,d=e.title,p=e.pattern,f=e.required,h=void 0===f||f,v=e.minLength,x=e.value,b=(0,r.useRef)((0,a.x0)());return(0,o.jsxs)(o.Fragment,{children:[m&&(0,o.jsx)("label",{htmlFor:b.current,className:i,children:m}),(0,o.jsx)("input",{id:b.current,className:s,type:u,name:c,value:x,pattern:p,title:d,required:h,onChange:n,minLength:v})]})}},7111:function(e,n,t){t.d(n,{Z:function(){return i}});var r="Section_section__Z2PLw",a=t(184),i=function(e){var n=e.children;return(0,a.jsx)("section",{className:r,children:n})}},3637:function(e,n,t){t.r(n);var r=t(9202),a=t(184);n.default=function(){return(0,a.jsx)(r.Z,{page:"Login"})}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=637.9ddf4b50.chunk.js.map