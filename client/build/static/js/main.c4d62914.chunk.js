(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{174:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(16),c=t.n(o),l=(t(74),t(7)),i=t(6),u=t(2),s=t.n(u);function d(){var e=Object(l.a)(["\n  height: 100%;\n  min-width: 0;\n  grid-column-end: ",";\n  grid-row-end: ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return d=function(){return e},e}var m=i.default.div(d(),(function(e){var n=e.width;return"span ".concat(void 0===n?1:n)}),(function(e){var n=e.height;return"span ".concat(void 0===n?1:n)}),(function(e){var n=e.left;return n&&"grid-column-start: ".concat(n)}),(function(e){var n=e.top;return n&&"grid-row-start: ".concat(n)}),(function(e){return e.center&&"text-align: center"}),(function(e){var n=e.area;return n&&"grid-area: ".concat(n)}),(function(e){return e.middle&&"\n    display: inline-flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    justify-self: stretch;\n  "}));m.propTypes={className:s.a.string,width:s.a.number,height:s.a.number,top:s.a.oneOfType([s.a.number,s.a.string]),left:s.a.oneOfType([s.a.number,s.a.string]),middle:s.a.bool,center:s.a.bool,area:s.a.string};var p=m;function f(){var e=Object(l.a)(["\n  display: grid;\n  height: ",";\n  grid-auto-flow: ",";\n  grid-auto-rows: ",";\n  ",";\n  grid-template-columns: ",";\n  grid-gap: ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return f=function(){return e},e}var g=function(e){return"number"===typeof e?"repeat(".concat(e,", 1fr)"):e},h=i.default.div(f(),(function(e){var n=e.height;return void 0===n?"auto":n}),(function(e){var n=e.flow,t=void 0===n?"row":n;return t}),(function(e){var n=e.minRowHeight;return"minmax(".concat(void 0===n?"20px":n,", auto)")}),(function(e){var n=e.rows;return n&&"grid-template-rows: ".concat(g(n))}),(function(e){var n=e.columns;return g(void 0===n?12:n)}),(function(e){var n=e.gap,t=void 0===n?"8px":n;return t}),(function(e){var n=e.columnGap;return n&&"column-gap: ".concat(n)}),(function(e){var n=e.rowGap;return n&&"row-gap: ".concat(n)}),(function(e){var n=e.areas;return n&&"grid-template-areas: ".concat(function(e){return e.map((function(e){return'"'.concat(e,'"')})).join(" ")}(n))}),(function(e){var n=e.justifyContent;return n&&"justify-content: ".concat(n)}),(function(e){var n=e.alignContent;return n&&"align-content: ".concat(n)}));h.propTypes={className:s.a.string,columns:s.a.oneOfType([s.a.string,s.a.number]),gap:s.a.string,columnGap:s.a.string,rowGap:s.a.string,height:s.a.string,minRowHeight:s.a.string,flow:s.a.string,rows:s.a.oneOfType([s.a.string,s.a.number]),areas:s.a.arrayOf(s.a.string),justifyContent:s.a.string,alignContent:s.a.string};var v=h;function E(){var e=Object(l.a)(["\n  align-self: center;\n"]);return E=function(){return e},e}function b(){var e=Object(l.a)(["\noverflow: hidden;\npadding: 10px;\nmargin: 0px auto 0;\nwidth: auto;\nmin-height:50px;\nfont-family: Quicksand, arial, sans-serif;\nbox-shadow: 0 0 10px rgba(0, 0, 0, .05), 0 0px 10px rgba(0, 0, 0, .08);\nborder-radius: 5px;\n  color: ",";\n"]);return b=function(){return e},e}var w=i.default.div(b(),(function(e){return e.color})),y=i.default.div(E()),x=function(e){var n=e.children,t=e.color,a=void 0===t?"#ff867c":t;return r.a.createElement(w,{color:a},r.a.createElement(y,null,n))};function O(){var e=Object(l.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: ",";\n"]);return O=function(){return e},e}var j=i.default.h1(O(),(function(e){return e.color?e.color:"#424242"}));function S(){var e=Object(l.a)(["\n  /* Adapt the colors based on primary prop*/\n  background: ",";\n  color: ",";\n\n  font-size: 14px;\n    padding: 6px 12px;\n    margin: 20px auto 10px;\n    width: ",";\n    display: inline-block;\n    text-decoration: none;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 3px;\n"]);return S=function(){return e},e}var C=i.default.button(S(),(function(e){return e.primary?"#ff867c":"white"}),(function(e){return e.primary?"white":"palevioletred"}),(function(e){return e.width?e.width:"100px"})),T=t(8),k=t(27),_=t(20),P=t.n(_),D=t(35),A=t.n(D),R=t(4),U=function(e){e?P.a.defaults.headers.common.Authorization=e:delete P.a.defaults.headers.common.Authorization};function F(e,n){return{type:"SET_USER_DATA",payload:Object(k.a)({},e,n)}}var I=t(5);var H=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{signout:function(){return e((function(e){localStorage.removeItem("jwtToken"),U(!1),e({type:"SET_USER_DATA",payload:{auth:!1}})}))},setData:function(n,t){return e(F(n,t))}}}))((function(e){var n=Object(I.f)();if(e.user.redirect){var t=e.user.redirect;e.setData("redirect",null),n.push(t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(v,{columns:"100px 1fr 100px",rows:"minmax(10px,auto)"},r.a.createElement(p,null,r.a.createElement(j,null,"Company")),r.a.createElement(p,{left:3,middle:!0},e.user.auth?r.a.createElement(C,{onClick:function(){e.signout(),n.push("/sign-in")}},"logout"):null))))}));var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",null,r.a.createElement("div",{style:{marginTop:50}},r.a.createElement("center",null,r.a.createElement("code",null,"Copyright \xa9 Company Inc.")))))};var B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(p,null,e.children),r.a.createElement(W,null))},L=(t(98),t(23)),z=t(10);function N(){var e=Object(l.a)(["\n  align-self: center;\n  width:auto;\n"]);return N=function(){return e},e}function G(){var e=Object(l.a)(["\noverflow: hidden;\npadding: 10px 10px 32px;\nmargin: 48px auto 0;\nwidth: ",";\nmax-width: ",";\nfont-family: Quicksand, arial, sans-serif;\nbox-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);\nborder-radius: 5px;\n  color: ",";\n"]);return G=function(){return e},e}var K=i.default.div(G(),(function(e){return e.width?e.width:"auto"}),(function(e){return e.fullWidth?e.fullWidth:"400px"}),(function(e){return e.color})),Q=i.default.div(N()),q=function(e){var n=e.children,t=e.color,a=void 0===t?"#ff867c":t;return r.a.createElement(K,{color:a},r.a.createElement(Q,null,n))};function J(){var e=Object(l.a)(["\n  padding: 0.5em;\n  margin: 0.5em auto;\n  height:2em;\n  color: ",";\n  width: ",";\n  \n  background: papayawhip;\n  border: none;\n  border-radius: 3px;\n"]);return J=function(){return e},e}var M=i.default.input(J(),(function(e){return e.inputColor||"palevioletred"}),(function(e){return e.fullwidth?"100%":"250px"})),V=t(17),$=t.n(V);var X=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{signup:function(n){return e((t=n,function(e){P.a.post("/api/auth/sign-up",t).then((function(n){R.b.success("Registered successfully"),setTimeout((function(){e(F("redirect","/"))}),2e3)})).catch((function(n){e({type:"SET_USER_DATA",payload:n.response.data}),n.response.data.description&&R.b.error(n.response.data.description)}))}));var t}}}))((function(e){var n=Object(a.useState)(""),t=Object(z.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(""),i=Object(z.a)(l,2),u=i[0],s=i[1],d=Object(a.useState)(""),m=Object(z.a)(d,2),f=m[0],g=m[1],h=Object(a.useState)(""),v=Object(z.a)(h,2),E=v[0],b=v[1],w=Object(a.useState)(""),y=Object(z.a)(w,2),x=y[0],O=y[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(p,{style:{display:"flex",flexDirection:"column"}},r.a.createElement("center",null,r.a.createElement("h3",null,"Sign Up")),r.a.createElement(M,{type:"text",placeholder:"first name",onChange:function(e){return c(e.target.value)}}),r.a.createElement(M,{type:"text",placeholder:"last name",onChange:function(e){return s(e.target.value)}}),r.a.createElement(M,{type:"text",placeholder:"email",onChange:function(e){return g(e.target.value)}}),r.a.createElement(M,{type:"password",placeholder:"password",onChange:function(e){return b(e.target.value)}}),r.a.createElement(M,{type:"password",placeholder:"confirm password",onChange:function(e){return O(e.target.value)}}),r.a.createElement(C,{primary:!0,onClick:function(){$.a.isEmail(f)?o&&u&&E&&x?E.length<8?R.b.warn("Passwords should be at least 8 characters"):$.a.equals(E,x)?e.signup({first_name:o,last_name:u,email:f,password:E,confirm_password:x}):R.b.warn("Passwords doesn't match"):R.b.warn("Please fill all fields"):R.b.warn("Please use valid email")}},"Sign Up"),r.a.createElement(C,{as:"a",href:"/sign-in"},"Sign In")))))}));var Y=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{signin:function(n){return e((t=n,function(e){P.a.post("/api/auth/token",t).then((function(n){var t=n.data.accessToken;localStorage.setItem("jwtToken",t),U(t),e(F("redirect","/")),e(F("auth",!0)),R.b.success("Logged")})).catch((function(n){e({type:"SET_USER_DATA",payload:n.response.data}),n.response.data.description&&R.b.error(n.response.data.description)}))}));var t}}}))((function(e){var n=Object(I.f)(),t=Object(a.useState)(""),o=Object(z.a)(t,2),c=o[0],l=o[1],i=Object(a.useState)(""),u=Object(z.a)(i,2),s=u[0],d=u[1];return e.user.auth&&n.push("/"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(p,{style:{display:"flex",flexDirection:"column"}},r.a.createElement("center",null,r.a.createElement("h3",null,"Sign In")),r.a.createElement(M,{type:"text",placeholder:"email",onChange:function(e){return l(e.target.value)}}),r.a.createElement(M,{type:"password",placeholder:"password",onChange:function(e){return d(e.target.value)}}),r.a.createElement(C,{primary:!0,onClick:function(){$.a.isEmail(c)?s?e.signin({email:c,password:s}):R.b.warn("Please fill all fields"):R.b.warn("Please use valid email")}},"SignIn"),r.a.createElement(v,{columns:1},r.a.createElement(p,{center:!0,middle:!0},r.a.createElement(C,{as:"a",href:"/forgot-password",style:{marginTop:0}},"Forgot password?")),r.a.createElement(p,{center:!0,middle:!0},r.a.createElement(C,{as:"a",href:"/sign-up",style:{marginTop:-25}},"Sign Up")))))))}));var Z=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{forgotP:function(n){return e((t=n,function(e){P.a.post("/api/auth/forgot-password",t).then((function(e){e.data&&e.data.message&&R.b.success(e.data.message,{position:"top-center",autoClose:8e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(n){e({type:"SET_USER_DATA",payload:n.response.data}),n.response.data.description&&R.b.error(n.response.data.description)}))}));var t}}}))((function(e){var n=Object(a.useState)(""),t=Object(z.a)(n,2),o=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(p,{style:{display:"flex",flexDirection:"column"}},r.a.createElement("center",null,r.a.createElement("h3",null,"Reset your password")),r.a.createElement("center",null,r.a.createElement("h6",null,"Enter your user account's verified email address and we will send you a password reset link.")),r.a.createElement(M,{type:"text",placeholder:"Enter your email address",onChange:function(e){return c(e.target.value)}}),r.a.createElement(C,{primary:!0,width:"auto",onClick:function(){$.a.isEmail(o)?e.forgotP({email:o}):R.b.warn("Please use valid email")}},"Send password reset email"),r.a.createElement(C,{as:"a",href:"/sign-in"},"Sign In")))))}));var ee=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{resetP:function(n){return e((t=n,function(e){P.a.post("/api/auth/reset-password",t).then((function(n){n.data&&n.data.message&&R.b.success(n.data.message,{position:"top-center",autoClose:8e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout((function(){e(F("redirect","/"))}),2e3)})).catch((function(e){R.b.error("Invalid Credentials")}))}));var t}}}))((function(e){var n=Object(a.useState)(""),t=Object(z.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(""),i=Object(z.a)(l,2),u=i[0],s=i[1],d=decodeURI(e.location.search),m=new URLSearchParams(d).get("auth");return m?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(p,{style:{display:"flex",flexDirection:"column"}},r.a.createElement("center",null,r.a.createElement("h3",null,"Change your password")),r.a.createElement("center",null,r.a.createElement("h6",null,"Make sure it's at least 8 characters")),r.a.createElement(M,{type:"password",placeholder:"password",onChange:function(e){return s(e.target.value)}}),r.a.createElement(M,{type:"password",placeholder:"confirm password",onChange:function(e){return c(e.target.value)}}),r.a.createElement(C,{primary:!0,width:"auto",onClick:function(){u&&o?u.length<8?R.b.warn("Passwords should be at least 8 characters"):$.a.equals(u,o)?e.resetP({reset_key:m,password:u,confirm_password:o}):R.b.warn("Passwords doesn't match"):R.b.warn("Please fill all fields")}},"Change password"))))):r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(p,{style:{display:"flex",flexDirection:"column"}},r.a.createElement("center",null,r.a.createElement("h3",null,"404")),r.a.createElement(C,{primary:!0,width:"auto",as:"a",href:"/"},"Home"))))})),ne=t(67),te=t.n(ne);function ae(){var e=Object(l.a)(["\n  align-self: center;\n  width:auto;\n"]);return ae=function(){return e},e}function re(){var e=Object(l.a)(["\noverflow: hidden;\npadding: 10px 10px 32px;\nmargin: 48px auto 0;\nwidth: ",";\nfont-family: Quicksand, arial, sans-serif;\nbox-shadow: 0 0 20px rgba(0,0,0,.05), 0 0px 5px rgba(0,0,0,.08);\nborder-radius: 5px;\n  color: ",";\n"]);return re=function(){return e},e}var oe=i.default.div(re(),(function(e){return e.width?e.width:"auto"}),(function(e){return e.color})),ce=i.default.div(ae()),le=function(e){var n=e.children,t=e.color,a=void 0===t?"#ff867c":t;return r.a.createElement(oe,{color:a},r.a.createElement(ce,null,n))},ie=[{name:"Name",selector:"name",sortable:!0},{name:"Position",selector:"position",sortable:!0},{name:"Email",selector:"email",sortable:!0}];var ue=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{search:function(n){return e(function(e){return function(n){P.a.post("/api/employees/list",{search:e}).then((function(e){console.log("res,",e),e.data&&e.data.employees&&n(F("employees",e.data.employees))})).catch((function(e){console.log("err,",e)}))}}(n))}}}))((function(e){var n=Object(a.useState)(""),t=Object(z.a)(n,2),o=t[0],c=t[1];return Object(a.useEffect)((function(){e.search(o)}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(le,null,r.a.createElement(M,{placeholder:"search",onChange:function(e){return c(e.target.value)}}),r.a.createElement(te.a,{noHeader:!0,columns:ie,data:e.user.employees?e.user.employees:[],defaultSortField:"title",responsive:!0}))))}));var se=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{setData:function(n,t){return e(F(n,t))}}}))((function(e){var n=!1;if(localStorage.jwtToken){var t=localStorage.jwtToken,a=A()(t),o=(new Date).getTime(),c=new Date(a.iat).getTime();(c+=354e4)<o&&(window.location.href="./sign-in"),e.user.auth||e.setData("auth",!0),n=!0}else if("/"===window.location.pathname)return window.location.href="./sign-in",null;return n?r.a.createElement(L.a,null,r.a.createElement(B,null,r.a.createElement(ue,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement(B,null,r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:ue}),r.a.createElement(I.a,{exact:!0,path:"/sign-up",component:X}),r.a.createElement(I.a,{exact:!0,path:"/sign-in",component:Y}),r.a.createElement(I.a,{exact:!0,path:"/forgot-password",component:Z}),r.a.createElement(I.a,{exact:!0,path:"/resetpassword",component:ee})))),r.a.createElement(R.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}))})),de=t(19),me=t(68),pe=t(39),fe=t(40),ge=t(29);var he,ve=Object(de.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_USER_DATA":return Object(ge.a)(Object(ge.a)({},e),n.payload);default:return Object(ge.a)({},e)}}});he="production"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})?Object(de.a)(fe.a,pe.a):Object(de.a)(fe.a,Object(me.createLogger)(),pe.a);var Ee=Object(de.d)(ve,he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T.a,{store:Ee},r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,n,t){e.exports=t(174)},74:function(e,n,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.c4d62914.chunk.js.map