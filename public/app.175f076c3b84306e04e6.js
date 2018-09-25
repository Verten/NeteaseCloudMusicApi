!function(x){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],c=0,i=[];c<r.length;c++)n=r[c],M[n]&&i.push(M[n][0]),M[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(x[t]=o[t]);for(w&&w(e);i.length;)i.shift()();return v.push.apply(v,a||[]),s()}function s(){for(var e,t=0;t<v.length;t++){for(var n=v[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==M[a]&&(r=!1)}r&&(v.splice(t--,1),e=R(R.s=n[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!N[e]||!f[e])return;for(var n in f[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(H[n]=t[n]);0==--l&&0===u&&y()}(e,t),n&&n(e,t)};var a,r=!0,k="175f076c3b84306e04e6",t=1e4,L={},I=[],o=[];var c=[],D="idle";function A(e){D=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var i,H,U,l=0,u=0,p={},f={},N={};function F(e){return+e+""===e?+e:e}function d(e){if("idle"!==D)throw new Error("check() is only allowed in idle status");return r=e,A("check"),(a=t,a=a||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=R.p+""+k+".hot-update.json";r.open("GET",o,!0),r.timeout=a,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})).then(function(e){if(!e)return A("idle"),null;f={},p={},N=e.c,U=e.h,A("prepare");var t=new Promise(function(e,t){i={resolve:e,reject:t}});for(var n in H={},M)h(n);return"prepare"===D&&0===u&&0===l&&y(),t});var a}function h(e){var t,n,r;N[e]?(f[e]=!0,l++,t=e,n=document.getElementsByTagName("head")[0],(r=document.createElement("script")).charset="utf-8",r.src=R.p+""+t+"."+k+".hot-update.js",n.appendChild(r)):p[e]=!0}function y(){A("ready");var t=i;if(i=null,t)if(r)Promise.resolve().then(function(){return b(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in H)Object.prototype.hasOwnProperty.call(H,n)&&e.push(F(n));t.resolve(e)}}function b(n){if("ready"!==D)throw new Error("apply() is only allowed in ready status");var e,t,r,u,o;function a(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),a=o.id,c=o.chain;if((u=G[a])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(u.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var i=0;i<u.parents.length;i++){var s=u.parents[i],l=G[s];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),p(n[s],[a])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var c={},i=[],s={},l=function(){console.warn("[HMR] unexpected require("+d.moduleId+") to disposed module")};for(var f in H)if(Object.prototype.hasOwnProperty.call(H,f)){var d;o=F(f);var h=!1,y=!1,b=!1,v="";switch((d=H[f]?a(o):{type:"disposed",moduleId:f}).chain&&(v="\nUpdate propagation: "+d.chain.join(" -> ")),d.type){case"self-declined":n.onDeclined&&n.onDeclined(d),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+d.moduleId+v));break;case"declined":n.onDeclined&&n.onDeclined(d),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+d.moduleId+" in "+d.parentId+v));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(d),n.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+v));break;case"accepted":n.onAccepted&&n.onAccepted(d),y=!0;break;case"disposed":n.onDisposed&&n.onDisposed(d),b=!0;break;default:throw new Error("Unexception type "+d.type)}if(h)return A("abort"),Promise.reject(h);if(y)for(o in s[o]=H[o],p(i,d.outdatedModules),d.outdatedDependencies)Object.prototype.hasOwnProperty.call(d.outdatedDependencies,o)&&(c[o]||(c[o]=[]),p(c[o],d.outdatedDependencies[o]));b&&(p(i,[d.moduleId]),s[o]=l)}var m,g=[];for(t=0;t<i.length;t++)o=i[t],G[o]&&G[o].hot._selfAccepted&&g.push({module:o,errorHandler:G[o].hot._selfAccepted});A("dispose"),Object.keys(N).forEach(function(e){!1===N[e]&&delete M[e]});for(var O,w,j=i.slice();0<j.length;)if(o=j.pop(),u=G[o]){var E={},_=u.hot._disposeHandlers;for(r=0;r<_.length;r++)(e=_[r])(E);for(L[o]=E,u.hot.active=!1,delete G[o],delete c[o],r=0;r<u.children.length;r++){var S=G[u.children[r]];S&&(0<=(m=S.parents.indexOf(o))&&S.parents.splice(m,1))}}for(o in c)if(Object.prototype.hasOwnProperty.call(c,o)&&(u=G[o]))for(w=c[o],r=0;r<w.length;r++)O=w[r],0<=(m=u.children.indexOf(O))&&u.children.splice(m,1);for(o in A("apply"),k=U,s)Object.prototype.hasOwnProperty.call(s,o)&&(x[o]=s[o]);var P=null;for(o in c)if(Object.prototype.hasOwnProperty.call(c,o)&&(u=G[o])){w=c[o];var T=[];for(t=0;t<w.length;t++)if(O=w[t],e=u.hot._acceptedDependencies[O]){if(-1!==T.indexOf(e))continue;T.push(e)}for(t=0;t<T.length;t++){e=T[t];try{e(w)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:o,dependencyId:w[t],error:e}),n.ignoreErrored||P||(P=e)}}}for(t=0;t<g.length;t++){var C=g[t];o=C.module,I=[o];try{R(o)}catch(t){if("function"==typeof C.errorHandler)try{C.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:t}),n.ignoreErrored||P||(P=e),P||(P=t)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:o,error:t}),n.ignoreErrored||P||(P=t)}}return P?(A("fail"),Promise.reject(P)):(A("idle"),new Promise(function(e){e(i)}))}var G={},M={0:0},v=[];function R(e){if(G[e])return G[e].exports;var t,r,n=G[e]={i:e,l:!1,exports:{},hot:(t=e,r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);0<=t&&r._disposeHandlers.splice(t,1)},check:d,apply:b,status:function(e){if(!e)return D;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);0<=t&&c.splice(t,1)},data:L[t]},a=void 0,r),parents:(o=I,I=[],o),children:[]};return x[e].call(n.exports,n,n.exports,function(t){var n=G[t];if(!n)return R;var r=function(e){return n.hot.active?(G[e]?-1===G[e].parents.indexOf(t)&&G[e].parents.push(t):(I=[t],a=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),I=[]),R(e)},e=function(t){return{configurable:!0,enumerable:!0,get:function(){return R[t]},set:function(e){R[t]=e}}};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,e(o));return r.e=function(e){return"ready"===D&&A("prepare"),u++,R.e(e).then(t,function(e){throw t(),e});function t(){u--,"prepare"===D&&(p[e]||h(e),0===u&&0===l&&y())}},r.t=function(e,t){return 1&t&&(e=r(e)),R.t(e,-2&t)},r}(e)),n.l=!0,n.exports}R.m=x,R.c=G,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(t,e){if(1&e&&(t=R(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)R.d(n,r,function(e){return t[e]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/",R.h=function(){return k};var m=window.webpackJsonp=window.webpackJsonp||[],g=m.push.bind(m);m.push=e,m=m.slice();for(var O=0;O<m.length;O++)e(m[O]);var w=g;v.push([256,1]),s()}({16:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return r}),n.d(t,"c",function(){return p}),n.d(t,"d",function(){return f});n(547);var r,o,a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};function c(e){if(e.ok)return e;var t=a({},e);throw t.response=e,t}function i(e){return e.text().then(function(e){return e?JSON.parse(e):{}})}function s(e,t){return fetch(e,t).then(c).then(i).then(function(e){return e})}function l(e){return 200===e.code}function u(e,n){console.debug("error with api:"+e,n);var t=n.response;return void 0===t?n:(n.status=t.status,n.statusText=t.statusText,t.text().then(function(t){try{var e=JSON.parse(t);Object.assign(n,e)}catch(e){n.message=t}return n}))}function p(e,t,n){var r={mode:"cors",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}},o="";if(["GET","POST","DELETE","PUT"].every(function(e){return e!==t.toUpperCase()}))console.error("invalid http method");else{r.method=t.toUpperCase();var a=Object.keys(n);if("GET"===t.toUpperCase())a.forEach(function(e){return o=o+"&"+e+"="+n[e]}),""!==o&&(o=o.slice(1)),console.info(e+"?"+o);else{var c={};a.forEach(function(e){return c[e]=n[e]}),r.body=JSON.stringify(c)}}return{config:r,url:e+"?"+o}}function f(e){return e.error.toString()}(o=r||(r={})).GET="GET",o.POST="POST",o.DELETE="DELETE",o.PUT="PUT"},249:function(t,e,r){"use strict";r.d(e,"a",function(){return p});var o=r(46),n=r(250),a=r(251),c=r(254),i=r(94),s=r(252),l=Object(c.a)(),u=Object(n.createLogger)({collapsed:!0,diff:!0,stateTransformer:function(e){return Object(a.mapValues)(e,function(e){return e.toJS?e.toJS():e})}});function p(e){var n=Object(o.d)(i.default,e,Object(o.a)(l,u));return t.hot.accept(94,function(e){var t;i=r(94),t=r(94),n.replaceReducer(t)}),l.run(s.a),n}},252:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(8),o=n(85),a=n(84),c=function(n,r){var o,a,c,e,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,a&&(c=2&t[0]?a.return:t[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,t[1])).done)return c;switch(a=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,a=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(c=0<(c=i.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){i.label=t[1];break}if(6===t[0]&&i.label<c[1]){i.label=c[1],c=t;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(t);break}c[2]&&i.ops.pop(),i.trys.pop();continue}t=r.call(n,i)}catch(e){t=[6,e],a=0}finally{o=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}};function i(){return c(this,function(e){switch(e.label){case 0:return[4,Object(r.a)([Object(r.c)(o.c),Object(r.c)(a.c)])];case 1:return e.sent(),[2]}})}},256:function(e,t,n){n(257),e.exports=n(615)},41:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return a});var r="/api",o="username",a="password"},615:function(e,t,n){"use strict";n.r(t);var r,o,a,c,i,s=n(1),l=n(36),u=n(63),p=n(21),f=n(253),d=n.n(f),h=n(619),y=n(248),b=n.n(y),v=n(231),m=n.n(v),g=n(232),O=n.n(g),w=n(83),j=n.n(w),E=n(123),_=n.n(E),S=n(233),P=n.n(S),T=n(74),C=n.n(T),x=n(234),k=n.n(x),L=n(617),I=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},A=function(n){function e(e){var t=n.call(this,e)||this;return t.state={},t.isUserLogin=t.isUserLogin.bind(t),t.handleClick=t.handleClick.bind(t),t}return I(e,n),e.prototype.render=function(){return s.createElement(m.a,{position:"static"},s.createElement(O.a,null,s.createElement(_.a,{className:this.props.classes.menuButton,color:"inherit","aria-label":"Radio"},s.createElement(P.a,null)),s.createElement(j.a,{variant:"title",color:"inherit",className:this.props.classes.flex},"Radio"),s.createElement(C.a,{color:"inherit",onClick:this.handleClick},this.isUserLogin())))},e.prototype.isUserLogin=function(){var e=this.props,t=e.loginSuccess,n=e.userInfo;return t?s.createElement(k.a,{alt:"Adelle Charles",src:n.profile.avatarUrl}):"Login"},e.prototype.handleClick=function(){var e=this.props,t=e.loginSuccess,n=e.history,r=e.location;t||(console.info("redirect to login page"),n.replace({pathname:"/login",state:{from:r.pathname}}))},e}(s.Component),H=Object(u.b)(function(e){var t=e.Login;return D({},t)})(Object(p.withStyles)(function(e){return Object(p.createStyles)({root:{flexGrow:1},flex:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})})(Object(L.a)(A))),U=n(620),N=n(618),F=n(46),G=n(61),M=n.n(G),R=n(84),W=n(236),Y=n.n(W),B=n(239),J=n.n(B),q=n(238),z=n.n(q),V=n(237),X=n.n(V),Q=Object(p.withStyles)(function(e){return Object(p.createStyles)({card:{maxWidth:345,margin:2*e.spacing.unit+"px "+e.spacing.unit+"px"},media:{height:140,objectFit:"cover"},content:{height:168,textOverflow:"ellipsis",overflow:"hidden"}})})(function(e){var t=e.classes,n=e.title,r=e.description,o=e.onclick,a=e.cover;return s.createElement(Y.a,{className:t.card},s.createElement(X.a,{component:"img",className:t.media,image:a}),s.createElement(z.a,{className:t.content},s.createElement(j.a,{gutterBottom:!0,variant:"headline",component:"h2"},n),s.createElement(j.a,{component:"p"},r)),s.createElement(J.a,null,s.createElement(C.a,{size:"small",color:"primary",onClick:o},"Detail")))}),$=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Z=function(n){function e(e){var t=n.call(this,e)||this;return t.state={},t.renderPlaylistCard=t.renderPlaylistCard.bind(t),t}return $(e,n),e.prototype.render=function(){var e=this.props.classes;return s.createElement(M.a,{className:e.paper},this.renderPlaylistCard())},e.prototype.componentDidMount=function(){this.props.actions.fetchTopPlaylist()},e.prototype.renderPlaylistCard=function(){var t=this,n=[],e=this.props.playlists;return null!=e&&e.forEach(function(e){n.push(s.createElement(Q,{key:e.id,title:e.name,description:e.description,cover:e.coverImgUrl,onclick:t.handleClickPlaylist(e.id)}))}),n},e.prototype.handleClickPlaylist=function(e){return function(){console.info("Playlist id -> "+e)}},e}(s.Component),ee=Object(u.b)(function(e){var t=e.Playlist;return K({},t)},function(e){return{actions:Object(F.b)({fetchTopPlaylist:R.b},e)}})(Object(p.withStyles)(function(e){return Object(p.createStyles)({root:{flexGrow:1},paper:{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:2*e.spacing.unit+"px "+3*e.spacing.unit+"px "+3*e.spacing.unit+"px"}})})(Z)),te=n(164),ne=n.n(te),re=n(85),oe=n(41),ae=n(16),ce=n(247),ie=n.n(ce),se=n(240),le=n.n(se),ue=n(242),pe=n.n(ue),fe=n(243),de=n.n(fe),he=n(241),ye=n.n(he),be=n(163),ve=n.n(be),me=n(246),ge=n.n(me),Oe=n(244),we=n.n(Oe),je=n(245),Ee=n.n(je),_e=(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Se={success:le.a,warning:ye.a,error:pe.a,info:de.a},Pe=function(n){function e(e){var t=n.call(this,e)||this;return t.state={},t}return _e(e,n),e.prototype.render=function(){var e=this.props,t=e.type,n=e.onClose,r=e.style,o=e.message,a=e.classes,c=Se[t];return s.createElement(ve.a,{className:a[t]+" "+r,"aria-describedby":"client-snackbar",message:s.createElement("span",{id:"client-snackbar",className:a.message},s.createElement(c,{className:a.icon+" "+a.iconVariant}),o),action:s.createElement(_.a,{key:"close","aria-label":"Close",color:"inherit",className:a.close,onClick:n},s.createElement(ge.a,{className:a.icon}))})},e}(s.Component),Te=Object(p.withStyles)(function(e){return Object(p.createStyles)({close:{width:4*e.spacing.unit,height:4*e.spacing.unit},success:{backgroundColor:we.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:Ee.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}})})(Pe),Ce=(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),xe=function(n){function e(e){var t=n.call(this,e)||this;return t.state={open:!1,message:"",type:"info"},t.handleClose=t.handleClose.bind(t),t}return Ce(e,n),e.prototype.render=function(){var e=this.props.classes;return s.createElement("div",null,s.createElement(ie.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose},s.createElement(Te,{style:e.margin,message:this.state.message,type:this.state.type,onClose:this.handleClose})))},e.prototype.componentWillReceiveProps=function(e){var t=e.infoConfig;this.setState({open:t.open,type:t.type,message:t.message})},e.prototype.handleClose=function(){this.setState({open:!1,message:""})},e}(s.Component),ke=Object(p.withStyles)(function(e){return{margin:{margin:e.spacing.unit}}})(xe),Le=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Ie=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},De=function(r){function e(e){var t,n=r.call(this,e)||this;return n.state=((t={})[oe.c]="",t[oe.b]="",t.loginInfo={open:!1,message:""},t),n.handleLogin=n.handleLogin.bind(n),n.handleTextFieldChange=n.handleTextFieldChange.bind(n),n}return Le(e,r),e.prototype.render=function(){var e=this.props.classes;return s.createElement(M.a,{className:e.paper},s.createElement(ne.a,{id:"email",label:"Email",value:this.state.username,onChange:this.handleTextFieldChange(oe.c),margin:"normal",fullWidth:!0}),s.createElement(ne.a,{id:"password-input",label:"Password",type:"password",onChange:this.handleTextFieldChange(oe.b),margin:"normal",fullWidth:!0}),s.createElement(C.a,{variant:"contained",className:e.loginButton,color:"primary",onClick:this.handleLogin},"Login"),s.createElement(ke,{infoConfig:this.state.loginInfo}))},e.prototype.componentWillReceiveProps=function(e){var t=e.loginSuccess,n=e.history,r=e.error;t&&n.replace({pathname:"/"}),r&&this.setState({loginInfo:{open:!0,message:Object(ae.d)(r),type:"error"}})},e.prototype.handleLogin=function(){this.props.actions.login(this.state.username,this.state.password)},e.prototype.handleTextFieldChange=function(n){var r=this;return function(e){var t;r.setState(((t={})[n]=e.target.value,t.loginInfo={open:!1,message:""},t))}},e}(s.Component),Ae=Object(u.b)(function(e){var t=e.Login;return Ie({},t)},function(e){return{actions:Object(F.b)({login:re.b},e)}})(Object(p.withStyles)(function(e){return Object(p.createStyles)({loginButton:{marginTop:2*e.spacing.unit},paper:{width:"65%",margin:9*e.spacing.unit+"px auto 0 auto",display:"flex",flexDirection:"column",alignItems:"center",padding:2*e.spacing.unit+"px "+3*e.spacing.unit+"px "+3*e.spacing.unit+"px"}})})(De));function He(e){return s.createElement("div",null,"404 Not Found")}var Ue,Ne=function(){return s.createElement(U.a,null,s.createElement(N.a,{exact:!0,path:"/",component:ee}),s.createElement(N.a,{path:"/login",component:Ae}),s.createElement(N.a,{path:"/*",component:He}))},Fe=(Ue=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}Ue(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),Ge=function(n){function e(e){var t=n.call(this,e)||this;return t.state={},t}return Fe(e,n),e.prototype.render=function(){var e=this.props.classes;return s.createElement("div",{className:e.root},s.createElement(b.a,null),s.createElement(H,{userInfo:this.props.userInfo,loginSuccess:this.props.loginSuccess}),s.createElement(Ne,null))},e.prototype.componentDidMount=function(){this.props.loginSuccess||console.info("not login")},e}(s.Component),Me=Object(p.withStyles)(function(e){return Object(p.createStyles)({root:{flexGrow:1},paper:{marginTop:1*e.spacing.unit}})})(Ge),Re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function We(e){navigator.serviceWorker.register(e).then(function(t){t.onupdatefound=function(){var e=t.installing;e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ye=n(249),Be=Object(p.createMuiTheme)({palette:{primary:{main:d.a[500]},secondary:{main:"#11cb5f"}}}),Je=Object(Ye.a)({});l.render(s.createElement(p.MuiThemeProvider,{theme:Be},s.createElement(u.a,{store:Je},s.createElement(h.a,null,s.createElement(Me,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var t,e="//service-worker.js";Re?(t=e,fetch(t).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):We(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")}),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):We(e)})}}()},84:function(e,t,n){"use strict";n.d(t,"b",function(){return O}),n.d(t,"c",function(){return L});var r,p=n(8),o=n(41),f=n(16),a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d=function(n,r){var o,a,c,e,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,a&&(c=2&t[0]?a.return:t[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,t[1])).done)return c;switch(a=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,a=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(c=0<(c=i.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){i.label=t[1];break}if(6===t[0]&&i.label<c[1]){i.label=c[1],c=t;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(t);break}c[2]&&i.ops.pop(),i.trys.pop();continue}t=r.call(n,i)}catch(e){t=[6,e],a=0}finally{o=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},c="@react-template/FETCH_HOT_PLAYLIST",i="@react-template/FETCH_TOP_PLAYLIST",s="@react-template/FETCH_TOP_PLAYLIST_SUCCESS",l="@react-template/FETCH_TOP_PLAYLIST_FAILED",u="@react-template/FETCH_PLAYLIST_DETAIL",h="@react-template/FETCH_PLAYLIST_DETAIL_SUCCESS",y="@react-template/FETCH_PLAYLIST_DETAIL_FAILED",b=((r={})["@react-template/FETCH_PLAYLIST"]=o.a+"/playlist/catlist",r[c]=o.a+"/playlist/hot",r[i]=o.a+"/top/playlist",r[u]=o.a+"/playlist/detail",r),v={playlists:void 0,playlistDetail:void 0,error:void 0};t.a=function(e,t){switch(void 0===e&&(e=v),t.type){case i:return a({},e,{playlists:[]});case s:return a({},e,{playlists:t.payload.playlists});case l:return a({},e,{playlists:[],error:t.error});case u:return a({},e,{playlistDetail:void 0});case h:return a({},e,{playlistDetail:t.payload.playlist});case y:default:return e}};var m=function(e){return{type:"@react-template/FETCH_HOT_PLAYLIST_SUCCESS",payload:e}},g=function(e){return{type:"@react-template/FETCH_HOT_PLAYLIST_FAILED",error:e}},O=function(){return{type:i}},w=function(e){return{type:s,payload:e}},j=function(e){return{type:l,error:e}},E=function(e){return{type:h,payload:e}},_=function(e){return{type:y,error:e}};function S(t){var n,r,o,a,c,i,s,l,u;return d(this,function(e){switch(e.label){case 0:n=Object(f.c)(b[t.type],f.e.GET,{}),r=n.url,o=n.config,e.label=1;case 1:return e.trys.push([1,8,,11]),[4,Object(p.b)(f.a,r,o)];case 2:return a=e.sent(),Object(f.b)(a)?[4,Object(p.d)(m(a))]:[3,4];case 3:return e.sent(),[3,7];case 4:return c=p.d,i=g,[4,Object(p.b)(f.f,r,{error:a.code})];case 5:return[4,c.apply(void 0,[i.apply(void 0,[e.sent()])])];case 6:e.sent(),e.label=7;case 7:return[3,11];case 8:return s=e.sent(),l=p.d,u=g,[4,Object(p.b)(f.f,r,s)];case 9:return[4,l.apply(void 0,[u.apply(void 0,[e.sent()])])];case 10:return e.sent(),[3,11];case 11:return[2]}})}function P(t){var n,r,o,a,c,i,s,l,u;return d(this,function(e){switch(e.label){case 0:n=Object(f.c)(b[t.type],f.e.GET,{}),r=n.url,o=n.config,e.label=1;case 1:return e.trys.push([1,8,,11]),[4,Object(p.b)(f.a,r,o)];case 2:return a=e.sent(),Object(f.b)(a)?[4,Object(p.d)(w(a))]:[3,4];case 3:return e.sent(),[3,7];case 4:return c=p.d,i=j,[4,Object(p.b)(f.f,r,{error:a.code})];case 5:return[4,c.apply(void 0,[i.apply(void 0,[e.sent()])])];case 6:e.sent(),e.label=7;case 7:return[3,11];case 8:return s=e.sent(),l=p.d,u=j,[4,Object(p.b)(f.f,r,s)];case 9:return[4,l.apply(void 0,[u.apply(void 0,[e.sent()])])];case 10:return e.sent(),[3,11];case 11:return[2]}})}function T(t){var n,r,o,a,c,i,s,l,u;return d(this,function(e){switch(e.label){case 0:n=Object(f.c)(b[t.type],f.e.GET,{id:t.id}),r=n.url,o=n.config,e.label=1;case 1:return e.trys.push([1,8,,11]),[4,Object(p.b)(f.a,r,o)];case 2:return a=e.sent(),Object(f.b)(a)?[4,Object(p.d)(E(a))]:[3,4];case 3:return e.sent(),[3,7];case 4:return c=p.d,i=_,[4,Object(p.b)(f.f,r,{error:a.code})];case 5:return[4,c.apply(void 0,[i.apply(void 0,[e.sent()])])];case 6:e.sent(),e.label=7;case 7:return[3,11];case 8:return s=e.sent(),l=p.d,u=_,[4,Object(p.b)(f.f,r,s)];case 9:return[4,l.apply(void 0,[u.apply(void 0,[e.sent()])])];case 10:return e.sent(),[3,11];case 11:return[2]}})}function C(){return d(this,function(e){switch(e.label){case 0:return[4,Object(p.e)(c,S)];case 1:return e.sent(),[2]}})}function x(){return d(this,function(e){switch(e.label){case 0:return[4,Object(p.e)(i,P)];case 1:return e.sent(),[2]}})}function k(){return d(this,function(e){switch(e.label){case 0:return[4,Object(p.e)(u,T)];case 1:return e.sent(),[2]}})}function L(){return d(this,function(e){switch(e.label){case 0:return[4,Object(p.a)([Object(p.c)(C),Object(p.c)(x),Object(p.c)(k)])];case 1:return e.sent(),[2]}})}},85:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"c",function(){return m});var r,p=n(8),f=n(16),o=n(41),a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d=function(n,r){var o,a,c,e,i={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,a&&(c=2&t[0]?a.return:t[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,t[1])).done)return c;switch(a=0,c&&(t=[2&t[0],c.value]),t[0]){case 0:case 1:c=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,a=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(c=0<(c=i.trys).length&&c[c.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!c||t[1]>c[0]&&t[1]<c[3])){i.label=t[1];break}if(6===t[0]&&i.label<c[1]){i.label=c[1],c=t;break}if(c&&i.label<c[2]){i.label=c[2],i.ops.push(t);break}c[2]&&i.ops.pop(),i.trys.pop();continue}t=r.call(n,i)}catch(e){t=[6,e],a=0}finally{o=c=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},c="@react-template/USER_LOGIN",i="@react-template/USER_LOGIN_SUCCESS",s="@react-template/USER_LOGIN_FAILED",h=((r={})[c]=o.a+"/login",r),l={username:void 0,password:void 0,userInfo:null,error:void 0,loginSuccess:!1};t.a=function(e,t){switch(void 0===e&&(e=l),t.type){case c:return a({},e,{username:t.username,password:t.password,loginSuccess:!1,error:void 0});case i:return a({},e,{password:void 0,userInfo:t.payload,loginSuccess:!0,error:void 0});case s:return a({},e,{username:void 0,password:void 0,loginSuccess:!1,error:t.error});default:return e}};var u=function(e,t){return{type:c,username:e,password:t}},y=function(e){return{type:i,payload:e}},b=function(e){return{type:s,error:e}};function v(t){var n,r,o,a,c,i,s,l,u;return d(this,function(e){switch(e.label){case 0:n=Object(f.c)(h[t.type],f.e.GET,{email:t.username,password:t.password}),r=n.url,(o=n.config).method=f.e.POST,e.label=1;case 1:return e.trys.push([1,8,,11]),[4,Object(p.b)(f.a,r,o)];case 2:return a=e.sent(),Object(f.b)(a)?[4,Object(p.d)(y(a))]:[3,4];case 3:return e.sent(),[3,7];case 4:return c=p.d,i=b,[4,Object(p.b)(f.f,r,{error:a.code})];case 5:return[4,c.apply(void 0,[i.apply(void 0,[e.sent()])])];case 6:e.sent(),e.label=7;case 7:return[3,11];case 8:return s=e.sent(),l=p.d,u=b,[4,Object(p.b)(f.f,r,s)];case 9:return[4,l.apply(void 0,[u.apply(void 0,[e.sent()])])];case 10:return e.sent(),[3,11];case 11:return[2]}})}function m(){return d(this,function(e){switch(e.label){case 0:return[4,Object(p.e)(c,v)];case 1:return e.sent(),[2]}})}},94:function(e,t,n){"use strict";n.r(t);var r=n(46),o=n(85),a=n(84),c=Object(r.c)(Object.assign({},{Login:o.a,Playlist:a.a}));t.default=c}});