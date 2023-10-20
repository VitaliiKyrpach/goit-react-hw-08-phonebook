"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[89],{89:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(439),u=t(791),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},a=t(434),o=t(97),c="NOT_FOUND";var s=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?s:r,i=t.maxSize,a=void 0===i?1:i,o=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),f=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return c}return{get:r,put:function(e,u){r(e)===c&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function p(){var e=f.get(arguments);if(e===c){if(e=n.apply(null,arguments),o){var t=f.getEntries(),r=t.find((function(n){return o(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function f(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function p(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var i,a=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,l=s.memoizeOptions,p=void 0===l?t:l,d=Array.isArray(p)?p:[p],h=f(r),v=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=v.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:v,dependencies:h,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return u}var d=p(l),h=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},y=d([h,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),g=t(184),x=function(){var n=(0,u.useState)(""),e=(0,r.Z)(n,2),t=e[0],c=e[1],s=(0,u.useState)(""),l=(0,r.Z)(s,2),f=l[0],p=l[1],d=(0,a.I0)(),v=(0,a.v9)(h),m=function(n){var e=n.target,t=e.name,r=e.value;"name"===t?c(r):p(r)};return(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=v.find((function(n){return n.name===t}));e?alert("".concat(e.name," is already in contacts")):(d((0,o.uK)({id:i(),name:t,phone:f})),c(""),p(""))},children:[(0,g.jsxs)("label",{children:["Name",(0,g.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:m})]}),(0,g.jsxs)("label",{children:["Number",(0,g.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:f,onChange:m})]}),(0,g.jsx)("button",{type:"submit",children:"Add contact"})]})},j=function(n){var e=n.id,t=n.user,r=n.phone,u=(0,a.I0)();return(0,g.jsxs)("li",{children:[t,": ",r,(0,g.jsx)("button",{type:"button",onClick:function(){return function(n){u((0,o.GK)(n))}(e)},children:"delete"})]})},b=function(){var n=(0,a.I0)(),e=(0,a.v9)(y);return(0,u.useEffect)((function(){n((0,o.yF)())}),[n]),(0,g.jsx)("ul",{children:e&&e.map((function(n){var e=n.id,t=n.name,r=n.phone;return(0,g.jsx)(j,{id:e,user:t,phone:r},e)}))})},k=t(895),C=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.filter}));return(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Find contacts by name"}),(0,g.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){n((0,k.F)(e.target.value))}})]})},w=function(){var n=(0,a.v9)(v),e=(0,a.v9)(m);return(0,g.jsxs)("div",{className:"App",children:[(0,g.jsx)("h1",{children:"Phonebook"}),(0,g.jsx)(x,{}),(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(C,{}),n&&(0,g.jsx)("h2",{children:"Loading..."}),e&&(0,g.jsx)("p",{children:e}),(0,g.jsx)(b,{})]})}}}]);
//# sourceMappingURL=89.b24878ed.chunk.js.map