(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=s(c);fetch(c.href,f)}})();function f0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Hs={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fd;function d0(){if(Fd)return Hl;Fd=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function s(o,c,f){var m=null;if(f!==void 0&&(m=""+f),c.key!==void 0&&(m=""+c.key),"key"in c){f={};for(var v in c)v!=="key"&&(f[v]=c[v])}else f=c;return c=f.ref,{$$typeof:i,type:o,key:m,ref:c!==void 0?c:null,props:f}}return Hl.Fragment=l,Hl.jsx=s,Hl.jsxs=s,Hl}var Wd;function p0(){return Wd||(Wd=1,Hs.exports=d0()),Hs.exports}var q=p0(),qs={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function h0(){if(Id)return de;Id=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function A(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function U(x,X,W){this.props=x,this.context=X,this.refs=M,this.updater=W||B}U.prototype.isReactComponent={},U.prototype.setState=function(x,X){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,X,"setState")},U.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function k(){}k.prototype=U.prototype;function w(x,X,W){this.props=x,this.context=X,this.refs=M,this.updater=W||B}var O=w.prototype=new k;O.constructor=w,T(O,U.prototype),O.isPureReactComponent=!0;var H=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function F(x,X,W,I,re,xe){return W=xe.ref,{$$typeof:i,type:x,key:X,ref:W!==void 0?W:null,props:xe}}function J(x,X){return F(x.type,X,void 0,void 0,void 0,x.props)}function V(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function Z(x){var X={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(W){return X[W]})}var $=/\/+/g;function ee(x,X){return typeof x=="object"&&x!==null&&x.key!=null?Z(""+x.key):X.toString(36)}function ie(){}function he(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ie,ie):(x.status="pending",x.then(function(X){x.status==="pending"&&(x.status="fulfilled",x.value=X)},function(X){x.status==="pending"&&(x.status="rejected",x.reason=X)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function ce(x,X,W,I,re){var xe=typeof x;(xe==="undefined"||xe==="boolean")&&(x=null);var fe=!1;if(x===null)fe=!0;else switch(xe){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(x.$$typeof){case i:case l:fe=!0;break;case b:return fe=x._init,ce(fe(x._payload),X,W,I,re)}}if(fe)return re=re(x),fe=I===""?"."+ee(x,0):I,H(re)?(W="",fe!=null&&(W=fe.replace($,"$&/")+"/"),ce(re,X,W,"",function(on){return on})):re!=null&&(V(re)&&(re=J(re,W+(re.key==null||x&&x.key===re.key?"":(""+re.key).replace($,"$&/")+"/")+fe)),X.push(re)),1;fe=0;var st=I===""?".":I+":";if(H(x))for(var De=0;De<x.length;De++)I=x[De],xe=st+ee(I,De),fe+=ce(I,X,W,xe,re);else if(De=A(x),typeof De=="function")for(x=De.call(x),De=0;!(I=x.next()).done;)I=I.value,xe=st+ee(I,De++),fe+=ce(I,X,W,xe,re);else if(xe==="object"){if(typeof x.then=="function")return ce(he(x),X,W,I,re);throw X=String(x),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return fe}function _(x,X,W){if(x==null)return x;var I=[],re=0;return ce(x,I,"","",function(xe){return X.call(W,xe,re++)}),I}function Q(x){if(x._status===-1){var X=x._result;X=X(),X.then(function(W){(x._status===0||x._status===-1)&&(x._status=1,x._result=W)},function(W){(x._status===0||x._status===-1)&&(x._status=2,x._result=W)}),x._status===-1&&(x._status=0,x._result=X)}if(x._status===1)return x._result.default;throw x._result}var P=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function ne(){}return de.Children={map:_,forEach:function(x,X,W){_(x,function(){X.apply(this,arguments)},W)},count:function(x){var X=0;return _(x,function(){X++}),X},toArray:function(x){return _(x,function(X){return X})||[]},only:function(x){if(!V(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},de.Component=U,de.Fragment=s,de.Profiler=c,de.PureComponent=w,de.StrictMode=o,de.Suspense=h,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,de.__COMPILER_RUNTIME={__proto__:null,c:function(x){return L.H.useMemoCache(x)}},de.cache=function(x){return function(){return x.apply(null,arguments)}},de.cloneElement=function(x,X,W){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var I=T({},x.props),re=x.key,xe=void 0;if(X!=null)for(fe in X.ref!==void 0&&(xe=void 0),X.key!==void 0&&(re=""+X.key),X)!K.call(X,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&X.ref===void 0||(I[fe]=X[fe]);var fe=arguments.length-2;if(fe===1)I.children=W;else if(1<fe){for(var st=Array(fe),De=0;De<fe;De++)st[De]=arguments[De+2];I.children=st}return F(x.type,re,void 0,void 0,xe,I)},de.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},de.createElement=function(x,X,W){var I,re={},xe=null;if(X!=null)for(I in X.key!==void 0&&(xe=""+X.key),X)K.call(X,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(re[I]=X[I]);var fe=arguments.length-2;if(fe===1)re.children=W;else if(1<fe){for(var st=Array(fe),De=0;De<fe;De++)st[De]=arguments[De+2];re.children=st}if(x&&x.defaultProps)for(I in fe=x.defaultProps,fe)re[I]===void 0&&(re[I]=fe[I]);return F(x,xe,void 0,void 0,null,re)},de.createRef=function(){return{current:null}},de.forwardRef=function(x){return{$$typeof:v,render:x}},de.isValidElement=V,de.lazy=function(x){return{$$typeof:b,_payload:{_status:-1,_result:x},_init:Q}},de.memo=function(x,X){return{$$typeof:p,type:x,compare:X===void 0?null:X}},de.startTransition=function(x){var X=L.T,W={};L.T=W;try{var I=x(),re=L.S;re!==null&&re(W,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(ne,P)}catch(xe){P(xe)}finally{L.T=X}},de.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},de.use=function(x){return L.H.use(x)},de.useActionState=function(x,X,W){return L.H.useActionState(x,X,W)},de.useCallback=function(x,X){return L.H.useCallback(x,X)},de.useContext=function(x){return L.H.useContext(x)},de.useDebugValue=function(){},de.useDeferredValue=function(x,X){return L.H.useDeferredValue(x,X)},de.useEffect=function(x,X,W){var I=L.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return I.useEffect(x,X)},de.useId=function(){return L.H.useId()},de.useImperativeHandle=function(x,X,W){return L.H.useImperativeHandle(x,X,W)},de.useInsertionEffect=function(x,X){return L.H.useInsertionEffect(x,X)},de.useLayoutEffect=function(x,X){return L.H.useLayoutEffect(x,X)},de.useMemo=function(x,X){return L.H.useMemo(x,X)},de.useOptimistic=function(x,X){return L.H.useOptimistic(x,X)},de.useReducer=function(x,X,W){return L.H.useReducer(x,X,W)},de.useRef=function(x){return L.H.useRef(x)},de.useState=function(x){return L.H.useState(x)},de.useSyncExternalStore=function(x,X,W){return L.H.useSyncExternalStore(x,X,W)},de.useTransition=function(){return L.H.useTransition()},de.version="19.1.1",de}var ep;function tu(){return ep||(ep=1,qs.exports=h0()),qs.exports}var be=tu();const we=f0(be);var js={exports:{}},ql={},Us={exports:{}},Gs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function m0(){return tp||(tp=1,(function(i){function l(_,Q){var P=_.length;_.push(Q);e:for(;0<P;){var ne=P-1>>>1,x=_[ne];if(0<c(x,Q))_[ne]=Q,_[P]=x,P=ne;else break e}}function s(_){return _.length===0?null:_[0]}function o(_){if(_.length===0)return null;var Q=_[0],P=_.pop();if(P!==Q){_[0]=P;e:for(var ne=0,x=_.length,X=x>>>1;ne<X;){var W=2*(ne+1)-1,I=_[W],re=W+1,xe=_[re];if(0>c(I,P))re<x&&0>c(xe,I)?(_[ne]=xe,_[re]=P,ne=re):(_[ne]=I,_[W]=P,ne=W);else if(re<x&&0>c(xe,P))_[ne]=xe,_[re]=P,ne=re;else break e}}return Q}function c(_,Q){var P=_.sortIndex-Q.sortIndex;return P!==0?P:_.id-Q.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var m=Date,v=m.now();i.unstable_now=function(){return m.now()-v}}var h=[],p=[],b=1,S=null,A=3,B=!1,T=!1,M=!1,U=!1,k=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function H(_){for(var Q=s(p);Q!==null;){if(Q.callback===null)o(p);else if(Q.startTime<=_)o(p),Q.sortIndex=Q.expirationTime,l(h,Q);else break;Q=s(p)}}function L(_){if(M=!1,H(_),!T)if(s(h)!==null)T=!0,K||(K=!0,ee());else{var Q=s(p);Q!==null&&ce(L,Q.startTime-_)}}var K=!1,F=-1,J=5,V=-1;function Z(){return U?!0:!(i.unstable_now()-V<J)}function $(){if(U=!1,K){var _=i.unstable_now();V=_;var Q=!0;try{e:{T=!1,M&&(M=!1,w(F),F=-1),B=!0;var P=A;try{t:{for(H(_),S=s(h);S!==null&&!(S.expirationTime>_&&Z());){var ne=S.callback;if(typeof ne=="function"){S.callback=null,A=S.priorityLevel;var x=ne(S.expirationTime<=_);if(_=i.unstable_now(),typeof x=="function"){S.callback=x,H(_),Q=!0;break t}S===s(h)&&o(h),H(_)}else o(h);S=s(h)}if(S!==null)Q=!0;else{var X=s(p);X!==null&&ce(L,X.startTime-_),Q=!1}}break e}finally{S=null,A=P,B=!1}Q=void 0}}finally{Q?ee():K=!1}}}var ee;if(typeof O=="function")ee=function(){O($)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,he=ie.port2;ie.port1.onmessage=$,ee=function(){he.postMessage(null)}}else ee=function(){k($,0)};function ce(_,Q){F=k(function(){_(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(_){_.callback=null},i.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<_?Math.floor(1e3/_):5},i.unstable_getCurrentPriorityLevel=function(){return A},i.unstable_next=function(_){switch(A){case 1:case 2:case 3:var Q=3;break;default:Q=A}var P=A;A=Q;try{return _()}finally{A=P}},i.unstable_requestPaint=function(){U=!0},i.unstable_runWithPriority=function(_,Q){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=A;A=_;try{return Q()}finally{A=P}},i.unstable_scheduleCallback=function(_,Q,P){var ne=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ne+P:ne):P=ne,_){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=P+x,_={id:b++,callback:Q,priorityLevel:_,startTime:P,expirationTime:x,sortIndex:-1},P>ne?(_.sortIndex=P,l(p,_),s(h)===null&&_===s(p)&&(M?(w(F),F=-1):M=!0,ce(L,P-ne))):(_.sortIndex=x,l(h,_),T||B||(T=!0,K||(K=!0,ee()))),_},i.unstable_shouldYield=Z,i.unstable_wrapCallback=function(_){var Q=A;return function(){var P=A;A=Q;try{return _.apply(this,arguments)}finally{A=P}}}})(Gs)),Gs}var np;function g0(){return np||(np=1,Us.exports=m0()),Us.exports}var Ys={exports:{}},et={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function v0(){if(ap)return et;ap=1;var i=tu();function l(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(l(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(h,p,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:S==null?null:""+S,children:h,containerInfo:p,implementation:b}}var m=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,et.createPortal=function(h,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return f(h,p,null,b)},et.flushSync=function(h){var p=m.T,b=o.p;try{if(m.T=null,o.p=2,h)return h()}finally{m.T=p,o.p=b,o.d.f()}},et.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(h,p))},et.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},et.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var b=p.as,S=v(b,p.crossOrigin),A=typeof p.integrity=="string"?p.integrity:void 0,B=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?o.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:B}):b==="script"&&o.d.X(h,{crossOrigin:S,integrity:A,fetchPriority:B,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},et.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=v(p.as,p.crossOrigin);o.d.M(h,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(h)},et.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,S=v(b,p.crossOrigin);o.d.L(h,b,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},et.preloadModule=function(h,p){if(typeof h=="string")if(p){var b=v(p.as,p.crossOrigin);o.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(h)},et.requestFormReset=function(h){o.d.r(h)},et.unstable_batchedUpdates=function(h,p){return h(p)},et.useFormState=function(h,p,b){return m.H.useFormState(h,p,b)},et.useFormStatus=function(){return m.H.useHostTransitionStatus()},et.version="19.1.1",et}var lp;function b0(){if(lp)return Ys.exports;lp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Ys.exports=v0(),Ys.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function y0(){if(ip)return ql;ip=1;var i=g0(),l=tu(),s=b0();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(o(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return v(r),e;if(u===a)return v(r),t;u=u.sibling}throw Error(o(188))}if(n.return!==a.return)n=r,a=u;else{for(var d=!1,g=r.child;g;){if(g===n){d=!0,n=r,a=u;break}if(g===a){d=!0,a=r,n=u;break}g=g.sibling}if(!d){for(g=u.child;g;){if(g===n){d=!0,n=u,a=r;break}if(g===a){d=!0,a=u,n=r;break}g=g.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),O=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case U:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case K:return"SuspenseList";case V:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case O:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case J:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var ce=Array.isArray,_=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ne=[],x=-1;function X(e){return{current:e}}function W(e){0>x||(e.current=ne[x],ne[x]=null,x--)}function I(e,t){x++,ne[x]=e.current,e.current=t}var re=X(null),xe=X(null),fe=X(null),st=X(null);function De(e,t){switch(I(fe,t),I(xe,e),I(re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Od(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Od(t),e=Md(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(re),I(re,e)}function on(){W(re),W(xe),W(fe)}function Sr(e){e.memoizedState!==null&&I(st,e);var t=re.current,n=Md(t,e.type);t!==n&&(I(xe,e),I(re,n))}function Yl(e){xe.current===e&&(W(re),W(xe)),st.current===e&&(W(st),Nl._currentValue=P)}var Tr=Object.prototype.hasOwnProperty,wr=i.unstable_scheduleCallback,Er=i.unstable_cancelCallback,Xp=i.unstable_shouldYield,Vp=i.unstable_requestPaint,Rt=i.unstable_now,Pp=i.unstable_getCurrentPriorityLevel,lu=i.unstable_ImmediatePriority,iu=i.unstable_UserBlockingPriority,Xl=i.unstable_NormalPriority,Qp=i.unstable_LowPriority,ru=i.unstable_IdlePriority,Zp=i.log,Kp=i.unstable_setDisableYieldValue,Ua=null,ut=null;function sn(e){if(typeof Zp=="function"&&Kp(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(Ua,e)}catch{}}var ct=Math.clz32?Math.clz32:Fp,Jp=Math.log,$p=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(Jp(e)/$p|0)|0}var Vl=256,Pl=4194304;function Rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ql(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=a&134217727;return g!==0?(a=g&~u,a!==0?r=Rn(a):(d&=g,d!==0?r=Rn(d):n||(n=g&~e,n!==0&&(r=Rn(n))))):(g=a&~u,g!==0?r=Rn(g):d!==0?r=Rn(d):n||(n=a&~e,n!==0&&(r=Rn(n)))),r===0?0:t!==0&&t!==r&&(t&u)===0&&(u=r&-r,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:r}function Ga(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ou(){var e=Vl;return Vl<<=1,(Vl&4194048)===0&&(Vl=256),e}function su(){var e=Pl;return Pl<<=1,(Pl&62914560)===0&&(Pl=4194304),e}function Or(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ip(e,t,n,a,r,u){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,y=e.expirationTimes,D=e.hiddenUpdates;for(n=d&~n;0<n;){var j=31-ct(n),Y=1<<j;g[j]=0,y[j]=-1;var N=D[j];if(N!==null)for(D[j]=null,j=0;j<N.length;j++){var R=N[j];R!==null&&(R.lane&=-536870913)}n&=~Y}a!==0&&uu(e,a,0),u!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function uu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ct(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ct(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Mr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ar(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fu(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Pd(e.type))}function eh(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var un=Math.random().toString(36).slice(2),We="__reactFiber$"+un,at="__reactProps$"+un,ea="__reactContainer$"+un,zr="__reactEvents$"+un,th="__reactListeners$"+un,nh="__reactHandles$"+un,du="__reactResources$"+un,Xa="__reactMarker$"+un;function _r(e){delete e[We],delete e[at],delete e[zr],delete e[th],delete e[nh]}function ta(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ea]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cd(e);e!==null;){if(n=e[We])return n;e=Cd(e)}return t}e=n,n=e.parentNode}return null}function na(e){if(e=e[We]||e[ea]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Va(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function aa(e){var t=e[du];return t||(t=e[du]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Xa]=!0}var pu=new Set,hu={};function Bn(e,t){la(e,t),la(e+"Capture",t)}function la(e,t){for(hu[e]=t,e=0;e<t.length;e++)pu.add(t[e])}var ah=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mu={},gu={};function lh(e){return Tr.call(gu,e)?!0:Tr.call(mu,e)?!1:ah.test(e)?gu[e]=!0:(mu[e]=!0,!1)}function Zl(e,t,n){if(lh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Kl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var Cr,vu;function ia(e){if(Cr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cr=t&&t[1]||"",vu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cr+e+vu}var Dr=!1;function Nr(e,t){if(!e||Dr)return"";Dr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(R){var N=R}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(R){N=R}e.call(Y.prototype)}}else{try{throw Error()}catch(R){N=R}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(R){if(R&&N&&typeof R.stack=="string")return[R.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),d=u[0],g=u[1];if(d&&g){var y=d.split(`
`),D=g.split(`
`);for(r=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;r<D.length&&!D[r].includes("DetermineComponentFrameRoot");)r++;if(a===y.length||r===D.length)for(a=y.length-1,r=D.length-1;1<=a&&0<=r&&y[a]!==D[r];)r--;for(;1<=a&&0<=r;a--,r--)if(y[a]!==D[r]){if(a!==1||r!==1)do if(a--,r--,0>r||y[a]!==D[r]){var j=`
`+y[a].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=a&&0<=r);break}}}finally{Dr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ia(n):""}function ih(e){switch(e.tag){case 26:case 27:case 5:return ia(e.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 15:return Nr(e.type,!1);case 11:return Nr(e.type.render,!1);case 1:return Nr(e.type,!0);case 31:return ia("Activity");default:return""}}function bu(e){try{var t="";do t+=ih(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rh(e){var t=yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){a=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jl(e){e._valueTracker||(e._valueTracker=rh(e))}function xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=yu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var oh=/[\n"\\]/g;function St(e){return e.replace(oh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kr(e,t,n,a,r,u,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Rr(e,d,xt(t)):n!=null?Rr(e,d,xt(n)):a!=null&&e.removeAttribute("value"),r==null&&u!=null&&(e.defaultChecked=!!u),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+xt(g):e.removeAttribute("name")}function Su(e,t,n,a,r,u,d,g){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=g?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Rr(e,t,n){t==="number"&&$l(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ra(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Tu(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function wu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(o(92));if(ce(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function oa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||sh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ou(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Eu(e,r,a)}else for(var u in t)t.hasOwnProperty(u)&&Eu(e,u,t[u])}function Br(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ch=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(e){return ch.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Lr=null;function Hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,ua=null;function Mu(e){var t=na(e);if(t&&(e=t.stateNode)){var n=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(kr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[at]||null;if(!r)throw Error(o(90));kr(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&xu(a)}break e;case"textarea":Tu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ra(e,!!n.multiple,t,!1)}}}var qr=!1;function Au(e,t,n){if(qr)return e(t,n);qr=!0;try{var a=e(t);return a}finally{if(qr=!1,(sa!==null||ua!==null)&&(Li(),sa&&(t=sa,e=ua,ua=sa=null,Mu(t),e)))for(t=0;t<e.length;t++)Mu(e[t])}}function Pa(e,t){var n=e.stateNode;if(n===null)return null;var a=n[at]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jr=!1;if(Vt)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){jr=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{jr=!1}var cn=null,Ur=null,Wl=null;function zu(){if(Wl)return Wl;var e,t=Ur,n=t.length,a,r="value"in cn?cn.value:cn.textContent,u=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===r[u-a];a++);return Wl=r.slice(e,1<a?1-a:void 0)}function Il(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function _u(){return!1}function lt(e){function t(n,a,r,u,d){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(u):u[g]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ei:_u,this.isPropagationStopped=_u,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=lt(Ln),Za=b({},Ln,{view:0,detail:0}),fh=lt(Za),Gr,Yr,Ka,ni=b({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ka&&(Ka&&e.type==="mousemove"?(Gr=e.screenX-Ka.screenX,Yr=e.screenY-Ka.screenY):Yr=Gr=0,Ka=e),Gr)},movementY:function(e){return"movementY"in e?e.movementY:Yr}}),Cu=lt(ni),dh=b({},ni,{dataTransfer:0}),ph=lt(dh),hh=b({},Za,{relatedTarget:0}),Xr=lt(hh),mh=b({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),gh=lt(mh),vh=b({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bh=lt(vh),yh=b({},Ln,{data:0}),Du=lt(yh),xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Th[e])?!!t[e]:!1}function Vr(){return wh}var Eh=b({},Za,{key:function(e){if(e.key){var t=xh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vr,charCode:function(e){return e.type==="keypress"?Il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oh=lt(Eh),Mh=b({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=lt(Mh),Ah=b({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vr}),zh=lt(Ah),_h=b({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=lt(_h),Dh=b({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=lt(Dh),kh=b({},Ln,{newState:0,oldState:0}),Rh=lt(kh),Bh=[9,13,27,32],Pr=Vt&&"CompositionEvent"in window,Ja=null;Vt&&"documentMode"in document&&(Ja=document.documentMode);var Lh=Vt&&"TextEvent"in window&&!Ja,ku=Vt&&(!Pr||Ja&&8<Ja&&11>=Ja),Ru=" ",Bu=!1;function Lu(e,t){switch(e){case"keyup":return Bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ca=!1;function Hh(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(Bu=!0,Ru);case"textInput":return e=t.data,e===Ru&&Bu?null:e;default:return null}}function qh(e,t){if(ca)return e==="compositionend"||!Pr&&Lu(e,t)?(e=zu(),Wl=Ur=cn=null,ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ku&&t.locale!=="ko"?null:t.data;default:return null}}var jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jh[e.type]:t==="textarea"}function ju(e,t,n,a){sa?ua?ua.push(a):ua=[a]:sa=a,t=Yi(t,"onChange"),0<t.length&&(n=new ti("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var $a=null,Fa=null;function Uh(e){xd(e,0)}function ai(e){var t=Va(e);if(xu(t))return e}function Uu(e,t){if(e==="change")return t}var Gu=!1;if(Vt){var Qr;if(Vt){var Zr="oninput"in document;if(!Zr){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),Zr=typeof Yu.oninput=="function"}Qr=Zr}else Qr=!1;Gu=Qr&&(!document.documentMode||9<document.documentMode)}function Xu(){$a&&($a.detachEvent("onpropertychange",Vu),Fa=$a=null)}function Vu(e){if(e.propertyName==="value"&&ai(Fa)){var t=[];ju(t,Fa,e,Hr(e)),Au(Uh,t)}}function Gh(e,t,n){e==="focusin"?(Xu(),$a=t,Fa=n,$a.attachEvent("onpropertychange",Vu)):e==="focusout"&&Xu()}function Yh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Fa)}function Xh(e,t){if(e==="click")return ai(t)}function Vh(e,t){if(e==="input"||e==="change")return ai(t)}function Ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Ph;function Wa(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Tr.call(t,r)||!ft(e[r],t[r]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,t){var n=Pu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function Zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$l(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$l(e.document)}return t}function Kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qh=Vt&&"documentMode"in document&&11>=document.documentMode,fa=null,Jr=null,Ia=null,$r=!1;function Ju(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$r||fa==null||fa!==$l(a)||(a=fa,"selectionStart"in a&&Kr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ia&&Wa(Ia,a)||(Ia=a,a=Yi(Jr,"onSelect"),0<a.length&&(t=new ti("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=fa)))}function Hn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var da={animationend:Hn("Animation","AnimationEnd"),animationiteration:Hn("Animation","AnimationIteration"),animationstart:Hn("Animation","AnimationStart"),transitionrun:Hn("Transition","TransitionRun"),transitionstart:Hn("Transition","TransitionStart"),transitioncancel:Hn("Transition","TransitionCancel"),transitionend:Hn("Transition","TransitionEnd")},Fr={},$u={};Vt&&($u=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function qn(e){if(Fr[e])return Fr[e];if(!da[e])return e;var t=da[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $u)return Fr[e]=t[n];return e}var Fu=qn("animationend"),Wu=qn("animationiteration"),Iu=qn("animationstart"),Zh=qn("transitionrun"),Kh=qn("transitionstart"),Jh=qn("transitioncancel"),ec=qn("transitionend"),tc=new Map,Wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wr.push("scrollEnd");function _t(e,t){tc.set(e,t),Bn(t,[e])}var nc=new WeakMap;function Tt(e,t){if(typeof e=="object"&&e!==null){var n=nc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:bu(t)},nc.set(e,t),t)}return{value:e,source:t,stack:bu(t)}}var wt=[],pa=0,Ir=0;function li(){for(var e=pa,t=Ir=pa=0;t<e;){var n=wt[t];wt[t++]=null;var a=wt[t];wt[t++]=null;var r=wt[t];wt[t++]=null;var u=wt[t];if(wt[t++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}u!==0&&ac(n,r,u)}}function ii(e,t,n,a){wt[pa++]=e,wt[pa++]=t,wt[pa++]=n,wt[pa++]=a,Ir|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function eo(e,t,n,a){return ii(e,t,n,a),ri(e)}function ha(e,t){return ii(e,null,null,t),ri(e)}function ac(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,u=e.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(r=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,r&&t!==null&&(r=31-ct(n),e=u.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),u):null}function ri(e){if(50<El)throw El=0,os=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ma={};function $h(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,a){return new $h(e,t,n,a)}function to(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pt(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function lc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,n,a,r,u){var d=0;if(a=e,typeof e=="function")to(e)&&(d=1);else if(typeof e=="string")d=Wm(e,n,re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case V:return e=dt(31,n,t,r),e.elementType=V,e.lanes=u,e;case T:return jn(n.children,r,u,t);case M:d=8,r|=24;break;case U:return e=dt(12,n,t,r|2),e.elementType=U,e.lanes=u,e;case L:return e=dt(13,n,t,r),e.elementType=L,e.lanes=u,e;case K:return e=dt(19,n,t,r),e.elementType=K,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case O:d=10;break e;case w:d=9;break e;case H:d=11;break e;case F:d=14;break e;case J:d=16,a=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=dt(d,n,t,r),t.elementType=e,t.type=a,t.lanes=u,t}function jn(e,t,n,a){return e=dt(7,e,a,t),e.lanes=n,e}function no(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function ao(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ga=[],va=0,si=null,ui=0,Et=[],Ot=0,Un=null,Qt=1,Zt="";function Gn(e,t){ga[va++]=ui,ga[va++]=si,si=e,ui=t}function ic(e,t,n){Et[Ot++]=Qt,Et[Ot++]=Zt,Et[Ot++]=Un,Un=e;var a=Qt;e=Zt;var r=32-ct(a)-1;a&=~(1<<r),n+=1;var u=32-ct(t)+r;if(30<u){var d=r-r%5;u=(a&(1<<d)-1).toString(32),a>>=d,r-=d,Qt=1<<32-ct(t)+r|n<<r|a,Zt=u+e}else Qt=1<<u|n<<r|a,Zt=e}function lo(e){e.return!==null&&(Gn(e,1),ic(e,1,0))}function io(e){for(;e===si;)si=ga[--va],ga[va]=null,ui=ga[--va],ga[va]=null;for(;e===Un;)Un=Et[--Ot],Et[Ot]=null,Zt=Et[--Ot],Et[Ot]=null,Qt=Et[--Ot],Et[Ot]=null}var tt=null,Be=null,Te=!1,Yn=null,Bt=!1,ro=Error(o(519));function Xn(e){var t=Error(o(418,""));throw nl(Tt(t,e)),ro}function rc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[We]=e,t[at]=a,n){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(n=0;n<Ml.length;n++)ve(Ml[n],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),Su(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Jl(t);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),wu(t,a.value,a.defaultValue,a.children),Jl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Ed(t.textContent,n)?(a.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),a.onScroll!=null&&ve("scroll",t),a.onScrollEnd!=null&&ve("scrollend",t),a.onClick!=null&&(t.onclick=Xi),t=!0):t=!1,t||Xn(e)}function oc(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:tt=tt.return}}function el(e){if(e!==tt)return!1;if(!Te)return oc(e),Te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ws(e.type,e.memoizedProps)),n=!n),n&&Be&&Xn(e),oc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Be=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Be=null}}else t===27?(t=Be,Mn(e.type)?(e=As,As=null,Be=e):Be=t):Be=tt?Dt(e.stateNode.nextSibling):null;return!0}function tl(){Be=tt=null,Te=!1}function sc(){var e=Yn;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),Yn=null),e}function nl(e){Yn===null?Yn=[e]:Yn.push(e)}var oo=X(null),Vn=null,Kt=null;function fn(e,t,n){I(oo,t._currentValue),t._currentValue=n}function Jt(e){e._currentValue=oo.current,W(oo)}function so(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function uo(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var u=r.dependencies;if(u!==null){var d=r.child;u=u.firstContext;e:for(;u!==null;){var g=u;u=r;for(var y=0;y<t.length;y++)if(g.context===t[y]){u.lanes|=n,g=u.alternate,g!==null&&(g.lanes|=n),so(u.return,n,e),a||(d=null);break e}u=g.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(o(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),so(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function al(e,t,n,a){e=null;for(var r=t,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var g=r.type;ft(r.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(r===st.current){if(d=r.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Nl):e=[Nl])}r=r.return}e!==null&&uo(t,e,n,a),t.flags|=262144}function ci(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Vn=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return uc(Vn,e)}function fi(e,t){return Vn===null&&Pn(e),uc(e,t)}function uc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kt===null){if(e===null)throw Error(o(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return n}var Fh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Wh=i.unstable_scheduleCallback,Ih=i.unstable_NormalPriority,Ge={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function co(){return{controller:new Fh,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&Wh(Ih,function(){e.controller.abort()})}var il=null,fo=0,ba=0,ya=null;function em(e,t){if(il===null){var n=il=[];fo=0,ba=hs(),ya={status:"pending",value:void 0,then:function(a){n.push(a)}}}return fo++,t.then(cc,cc),t}function cc(){if(--fo===0&&il!==null){ya!==null&&(ya.status="fulfilled");var e=il;il=null,ba=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var fc=_.S;_.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&em(e,t),fc!==null&&fc(e,t)};var Qn=X(null);function po(){var e=Qn.current;return e!==null?e:Ce.pooledCache}function di(e,t){t===null?I(Qn,Qn.current):I(Qn,t.pool)}function dc(){var e=po();return e===null?null:{parent:Ge._currentValue,pool:e}}var rl=Error(o(460)),pc=Error(o(474)),pi=Error(o(542)),ho={then:function(){}};function hc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hi(){}function mc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hi,hi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vc(e),e;default:if(typeof t.status=="string")t.then(hi,hi);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,vc(e),e}throw ol=t,rl}}var ol=null;function gc(){if(ol===null)throw Error(o(459));var e=ol;return ol=null,e}function vc(e){if(e===rl||e===pi)throw Error(o(483))}var dn=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function go(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=ri(e),ac(e,null,n),t}return ii(e,a,t,n),ri(e)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,cu(e,n)}}function vo(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?r=u=t:u=u.next=t}else r=u=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bo=!1;function ul(){if(bo){var e=ya;if(e!==null)throw e}}function cl(e,t,n,a){bo=!1;var r=e.updateQueue;dn=!1;var u=r.firstBaseUpdate,d=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var y=g,D=y.next;y.next=null,d===null?u=D:d.next=D,d=y;var j=e.alternate;j!==null&&(j=j.updateQueue,g=j.lastBaseUpdate,g!==d&&(g===null?j.firstBaseUpdate=D:g.next=D,j.lastBaseUpdate=y))}if(u!==null){var Y=r.baseState;d=0,j=D=y=null,g=u;do{var N=g.lane&-536870913,R=N!==g.lane;if(R?(ye&N)===N:(a&N)===N){N!==0&&N===ba&&(bo=!0),j!==null&&(j=j.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ue=e,oe=g;N=t;var ze=n;switch(oe.tag){case 1:if(ue=oe.payload,typeof ue=="function"){Y=ue.call(ze,Y,N);break e}Y=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=oe.payload,N=typeof ue=="function"?ue.call(ze,Y,N):ue,N==null)break e;Y=b({},Y,N);break e;case 2:dn=!0}}N=g.callback,N!==null&&(e.flags|=64,R&&(e.flags|=8192),R=r.callbacks,R===null?r.callbacks=[N]:R.push(N))}else R={lane:N,tag:g.tag,payload:g.payload,callback:g.callback,next:null},j===null?(D=j=R,y=Y):j=j.next=R,d|=N;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;R=g,g=R.next,R.next=null,r.lastBaseUpdate=R,r.shared.pending=null}}while(!0);j===null&&(y=Y),r.baseState=y,r.firstBaseUpdate=D,r.lastBaseUpdate=j,u===null&&(r.shared.lanes=0),Tn|=d,e.lanes=d,e.memoizedState=Y}}function bc(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function yc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bc(n[e],t)}var xa=X(null),mi=X(0);function xc(e,t){e=nn,I(mi,e),I(xa,t),nn=e|t.baseLanes}function yo(){I(mi,nn),I(xa,xa.current)}function xo(){nn=mi.current,W(xa),W(mi)}var mn=0,pe=null,Me=null,je=null,gi=!1,Sa=!1,Zn=!1,vi=0,fl=0,Ta=null,nm=0;function He(){throw Error(o(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function To(e,t,n,a,r,u){return mn=u,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?af:lf,Zn=!1,u=n(a,r),Zn=!1,Sa&&(u=Tc(t,n,a,r)),Sc(e),u}function Sc(e){_.H=wi;var t=Me!==null&&Me.next!==null;if(mn=0,je=Me=pe=null,gi=!1,fl=0,Ta=null,t)throw Error(o(300));e===null||Pe||(e=e.dependencies,e!==null&&ci(e)&&(Pe=!0))}function Tc(e,t,n,a){pe=e;var r=0;do{if(Sa&&(Ta=null),fl=0,Sa=!1,25<=r)throw Error(o(301));if(r+=1,je=Me=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}_.H=um,u=t(n,a)}while(Sa);return u}function am(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?dl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(pe.flags|=1024),t}function wo(){var e=vi!==0;return vi=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gi=!1}mn=0,je=Me=pe=null,Sa=!1,fl=vi=0,Ta=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?pe.memoizedState=je=e:je=je.next=e,je}function Ue(){if(Me===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=je===null?pe.memoizedState:je.next;if(t!==null)je=t,Me=e;else{if(e===null)throw pe.alternate===null?Error(o(467)):Error(o(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},je===null?pe.memoizedState=je=e:je=je.next=e}return je}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(e){var t=fl;return fl+=1,Ta===null&&(Ta=[]),e=mc(Ta,e,t),t=pe,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?af:lf),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dl(e);if(e.$$typeof===O)return Ie(e)}throw Error(o(438,String(e)))}function Ao(e){var t=null,n=pe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=pe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Mo(),pe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Z;return t.index++,n}function $t(e,t){return typeof t=="function"?t(e):t}function yi(e){var t=Ue();return zo(t,Me,e)}function zo(e,t,n){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var r=e.baseQueue,u=a.pending;if(u!==null){if(r!==null){var d=r.next;r.next=u.next,u.next=d}t.baseQueue=r=u,a.pending=null}if(u=e.baseState,r===null)e.memoizedState=u;else{t=r.next;var g=d=null,y=null,D=t,j=!1;do{var Y=D.lane&-536870913;if(Y!==D.lane?(ye&Y)===Y:(mn&Y)===Y){var N=D.revertLane;if(N===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),Y===ba&&(j=!0);else if((mn&N)===N){D=D.next,N===ba&&(j=!0);continue}else Y={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},y===null?(g=y=Y,d=u):y=y.next=Y,pe.lanes|=N,Tn|=N;Y=D.action,Zn&&n(u,Y),u=D.hasEagerState?D.eagerState:n(u,Y)}else N={lane:Y,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},y===null?(g=y=N,d=u):y=y.next=N,pe.lanes|=Y,Tn|=Y;D=D.next}while(D!==null&&D!==t);if(y===null?d=u:y.next=g,!ft(u,e.memoizedState)&&(Pe=!0,j&&(n=ya,n!==null)))throw n;e.memoizedState=u,e.baseState=d,e.baseQueue=y,a.lastRenderedState=u}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function _o(e){var t=Ue(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,u=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do u=e(u,d.action),d=d.next;while(d!==r);ft(u,t.memoizedState)||(Pe=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function wc(e,t,n){var a=pe,r=Ue(),u=Te;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!ft((Me||r).memoizedState,n);d&&(r.memoizedState=n,Pe=!0),r=r.queue;var g=Mc.bind(null,a,r,e);if(pl(2048,8,g,[e]),r.getSnapshot!==t||d||je!==null&&je.memoizedState.tag&1){if(a.flags|=2048,wa(9,xi(),Oc.bind(null,a,r,n,t),null),Ce===null)throw Error(o(349));u||(mn&124)!==0||Ec(a,t,n)}return n}function Ec(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t=Mo(),pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oc(e,t,n,a){t.value=n,t.getSnapshot=a,Ac(t)&&zc(e)}function Mc(e,t,n){return n(function(){Ac(t)&&zc(e)})}function Ac(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function zc(e){var t=ha(e,2);t!==null&&vt(t,e,2)}function Co(e){var t=it();if(typeof e=="function"){var n=e;if(e=n(),Zn){sn(!0);try{n()}finally{sn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function _c(e,t,n,a){return e.baseState=n,zo(e,Me,typeof a=="function"?a:$t)}function lm(e,t,n,a,r){if(Ti(e))throw Error(o(485));if(e=t.action,e!==null){var u={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};_.T!==null?n(!0):u.isTransition=!1,a(u),n=t.pending,n===null?(u.next=t.pending=u,Cc(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Cc(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var u=_.T,d={};_.T=d;try{var g=n(r,a),y=_.S;y!==null&&y(d,g),Dc(e,t,g)}catch(D){Do(e,t,D)}finally{_.T=u}}else try{u=n(r,a),Dc(e,t,u)}catch(D){Do(e,t,D)}}function Dc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Nc(e,t,a)},function(a){return Do(e,t,a)}):Nc(e,t,n)}function Nc(e,t,n){t.status="fulfilled",t.value=n,kc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cc(e,n)))}function Do(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,kc(t),t=t.next;while(t!==a)}e.action=null}function kc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rc(e,t){return t}function Bc(e,t){if(Te){var n=Ce.formState;if(n!==null){e:{var a=pe;if(Te){if(Be){t:{for(var r=Be,u=Bt;r.nodeType!==8;){if(!u){r=null;break t}if(r=Dt(r.nextSibling),r===null){r=null;break t}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){Be=Dt(r.nextSibling),a=r.data==="F!";break e}}Xn(a)}a=!1}a&&(t=n[0])}}return n=it(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rc,lastRenderedState:t},n.queue=a,n=ef.bind(null,pe,a),a.dispatch=n,a=Co(!1),u=Lo.bind(null,pe,!1,a.queue),a=it(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=lm.bind(null,pe,r,u,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Lc(e){var t=Ue();return Hc(t,Me,e)}function Hc(e,t,n){if(t=zo(e,t,Rc)[0],e=yi($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=dl(t)}catch(d){throw d===rl?pi:d}else a=t;t=Ue();var r=t.queue,u=r.dispatch;return n!==t.memoizedState&&(pe.flags|=2048,wa(9,xi(),im.bind(null,r,n),null)),[a,u,e]}function im(e,t){e.action=t}function qc(e){var t=Ue(),n=Me;if(n!==null)return Hc(t,n,e);Ue(),t=t.memoizedState,n=Ue();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function wa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Mo(),pe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function xi(){return{destroy:void 0,resource:void 0}}function jc(){return Ue().memoizedState}function Si(e,t,n,a){var r=it();a=a===void 0?null:a,pe.flags|=e,r.memoizedState=wa(1|t,xi(),n,a)}function pl(e,t,n,a){var r=Ue();a=a===void 0?null:a;var u=r.memoizedState.inst;Me!==null&&a!==null&&So(a,Me.memoizedState.deps)?r.memoizedState=wa(t,u,n,a):(pe.flags|=e,r.memoizedState=wa(1|t,u,n,a))}function Uc(e,t){Si(8390656,8,e,t)}function Gc(e,t){pl(2048,8,e,t)}function Yc(e,t){return pl(4,2,e,t)}function Xc(e,t){return pl(4,4,e,t)}function Vc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,n){n=n!=null?n.concat([e]):null,pl(4,4,Vc.bind(null,t,e),n)}function No(){}function Qc(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&So(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Zc(e,t){var n=Ue();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&So(t,a[1]))return a[0];if(a=e(),Zn){sn(!0);try{e()}finally{sn(!1)}}return n.memoizedState=[a,t],a}function ko(e,t,n){return n===void 0||(mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ff(),pe.lanes|=e,Tn|=e,n)}function Kc(e,t,n,a){return ft(n,t)?n:xa.current!==null?(e=ko(e,n,a),ft(e,t)||(Pe=!0),e):(mn&42)===0?(Pe=!0,e.memoizedState=n):(e=Ff(),pe.lanes|=e,Tn|=e,t)}function Jc(e,t,n,a,r){var u=Q.p;Q.p=u!==0&&8>u?u:8;var d=_.T,g={};_.T=g,Lo(e,!1,t,n);try{var y=r(),D=_.S;if(D!==null&&D(g,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var j=tm(y,a);hl(e,t,j,gt(e))}else hl(e,t,a,gt(e))}catch(Y){hl(e,t,{then:function(){},status:"rejected",reason:Y},gt())}finally{Q.p=u,_.T=d}}function rm(){}function Ro(e,t,n,a){if(e.tag!==5)throw Error(o(476));var r=$c(e).queue;Jc(e,r,t,P,n===null?rm:function(){return Fc(e),n(a)})}function $c(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Fc(e){var t=$c(e).next.queue;hl(e,t,{},gt())}function Bo(){return Ie(Nl)}function Wc(){return Ue().memoizedState}function Ic(){return Ue().memoizedState}function om(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gt();e=pn(n);var a=hn(t,e,n);a!==null&&(vt(a,t,n),sl(a,t,n)),t={cache:co()},e.payload=t;return}t=t.return}}function sm(e,t,n){var a=gt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ti(e)?tf(t,n):(n=eo(e,t,n,a),n!==null&&(vt(n,e,a),nf(n,t,a)))}function ef(e,t,n){var a=gt();hl(e,t,n,a)}function hl(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ti(e))tf(t,r);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,g=u(d,n);if(r.hasEagerState=!0,r.eagerState=g,ft(g,d))return ii(e,t,r,0),Ce===null&&li(),!1}catch{}finally{}if(n=eo(e,t,r,a),n!==null)return vt(n,e,a),nf(n,t,a),!0}return!1}function Lo(e,t,n,a){if(a={lane:2,revertLane:hs(),action:a,hasEagerState:!1,eagerState:null,next:null},Ti(e)){if(t)throw Error(o(479))}else t=eo(e,n,a,2),t!==null&&vt(t,e,2)}function Ti(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function tf(e,t){Sa=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nf(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,cu(e,n)}}var wi={readContext:Ie,use:bi,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He},af={readContext:Ie,use:bi,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Uc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Si(4194308,4,Vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){Si(4,2,e,t)},useMemo:function(e,t){var n=it();t=t===void 0?null:t;var a=e();if(Zn){sn(!0);try{e()}finally{sn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=it();if(n!==void 0){var r=n(t);if(Zn){sn(!0);try{n(t)}finally{sn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=sm.bind(null,pe,e),[a.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=Co(e);var t=e.queue,n=ef.bind(null,pe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:No,useDeferredValue:function(e,t){var n=it();return ko(n,e,t)},useTransition:function(){var e=Co(!1);return e=Jc.bind(null,pe,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=pe,r=it();if(Te){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ce===null)throw Error(o(349));(ye&124)!==0||Ec(a,t,n)}r.memoizedState=n;var u={value:n,getSnapshot:t};return r.queue=u,Uc(Mc.bind(null,a,u,e),[e]),a.flags|=2048,wa(9,xi(),Oc.bind(null,a,u,n,t),null),n},useId:function(){var e=it(),t=Ce.identifierPrefix;if(Te){var n=Zt,a=Qt;n=(a&~(1<<32-ct(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=nm++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Bo,useFormState:Bc,useActionState:Bc,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Lo.bind(null,pe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ao,useCacheRefresh:function(){return it().memoizedState=om.bind(null,pe)}},lf={readContext:Ie,use:bi,useCallback:Qc,useContext:Ie,useEffect:Gc,useImperativeHandle:Pc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:Zc,useReducer:yi,useRef:jc,useState:function(){return yi($t)},useDebugValue:No,useDeferredValue:function(e,t){var n=Ue();return Kc(n,Me.memoizedState,e,t)},useTransition:function(){var e=yi($t)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:dl(e),t]},useSyncExternalStore:wc,useId:Wc,useHostTransitionStatus:Bo,useFormState:Lc,useActionState:Lc,useOptimistic:function(e,t){var n=Ue();return _c(n,Me,e,t)},useMemoCache:Ao,useCacheRefresh:Ic},um={readContext:Ie,use:bi,useCallback:Qc,useContext:Ie,useEffect:Gc,useImperativeHandle:Pc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:Zc,useReducer:_o,useRef:jc,useState:function(){return _o($t)},useDebugValue:No,useDeferredValue:function(e,t){var n=Ue();return Me===null?ko(n,e,t):Kc(n,Me.memoizedState,e,t)},useTransition:function(){var e=_o($t)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:dl(e),t]},useSyncExternalStore:wc,useId:Wc,useHostTransitionStatus:Bo,useFormState:qc,useActionState:qc,useOptimistic:function(e,t){var n=Ue();return Me!==null?_c(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ao,useCacheRefresh:Ic},Ea=null,ml=0;function Ei(e){var t=ml;return ml+=1,Ea===null&&(Ea=[]),mc(Ea,e,t)}function gl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oi(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rf(e){var t=e._init;return t(e._payload)}function of(e){function t(z,E){if(e){var C=z.deletions;C===null?(z.deletions=[E],z.flags|=16):C.push(E)}}function n(z,E){if(!e)return null;for(;E!==null;)t(z,E),E=E.sibling;return null}function a(z){for(var E=new Map;z!==null;)z.key!==null?E.set(z.key,z):E.set(z.index,z),z=z.sibling;return E}function r(z,E){return z=Pt(z,E),z.index=0,z.sibling=null,z}function u(z,E,C){return z.index=C,e?(C=z.alternate,C!==null?(C=C.index,C<E?(z.flags|=67108866,E):C):(z.flags|=67108866,E)):(z.flags|=1048576,E)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function g(z,E,C,G){return E===null||E.tag!==6?(E=no(C,z.mode,G),E.return=z,E):(E=r(E,C),E.return=z,E)}function y(z,E,C,G){var te=C.type;return te===T?j(z,E,C.props.children,G,C.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===J&&rf(te)===E.type)?(E=r(E,C.props),gl(E,C),E.return=z,E):(E=oi(C.type,C.key,C.props,null,z.mode,G),gl(E,C),E.return=z,E)}function D(z,E,C,G){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=ao(C,z.mode,G),E.return=z,E):(E=r(E,C.children||[]),E.return=z,E)}function j(z,E,C,G,te){return E===null||E.tag!==7?(E=jn(C,z.mode,G,te),E.return=z,E):(E=r(E,C),E.return=z,E)}function Y(z,E,C){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=no(""+E,z.mode,C),E.return=z,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case A:return C=oi(E.type,E.key,E.props,null,z.mode,C),gl(C,E),C.return=z,C;case B:return E=ao(E,z.mode,C),E.return=z,E;case J:var G=E._init;return E=G(E._payload),Y(z,E,C)}if(ce(E)||ee(E))return E=jn(E,z.mode,C,null),E.return=z,E;if(typeof E.then=="function")return Y(z,Ei(E),C);if(E.$$typeof===O)return Y(z,fi(z,E),C);Oi(z,E)}return null}function N(z,E,C,G){var te=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return te!==null?null:g(z,E,""+C,G);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case A:return C.key===te?y(z,E,C,G):null;case B:return C.key===te?D(z,E,C,G):null;case J:return te=C._init,C=te(C._payload),N(z,E,C,G)}if(ce(C)||ee(C))return te!==null?null:j(z,E,C,G,null);if(typeof C.then=="function")return N(z,E,Ei(C),G);if(C.$$typeof===O)return N(z,E,fi(z,C),G);Oi(z,C)}return null}function R(z,E,C,G,te){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return z=z.get(C)||null,g(E,z,""+G,te);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case A:return z=z.get(G.key===null?C:G.key)||null,y(E,z,G,te);case B:return z=z.get(G.key===null?C:G.key)||null,D(E,z,G,te);case J:var me=G._init;return G=me(G._payload),R(z,E,C,G,te)}if(ce(G)||ee(G))return z=z.get(C)||null,j(E,z,G,te,null);if(typeof G.then=="function")return R(z,E,C,Ei(G),te);if(G.$$typeof===O)return R(z,E,C,fi(E,G),te);Oi(E,G)}return null}function ue(z,E,C,G){for(var te=null,me=null,ae=E,se=E=0,Ze=null;ae!==null&&se<C.length;se++){ae.index>se?(Ze=ae,ae=null):Ze=ae.sibling;var Se=N(z,ae,C[se],G);if(Se===null){ae===null&&(ae=Ze);break}e&&ae&&Se.alternate===null&&t(z,ae),E=u(Se,E,se),me===null?te=Se:me.sibling=Se,me=Se,ae=Ze}if(se===C.length)return n(z,ae),Te&&Gn(z,se),te;if(ae===null){for(;se<C.length;se++)ae=Y(z,C[se],G),ae!==null&&(E=u(ae,E,se),me===null?te=ae:me.sibling=ae,me=ae);return Te&&Gn(z,se),te}for(ae=a(ae);se<C.length;se++)Ze=R(ae,z,se,C[se],G),Ze!==null&&(e&&Ze.alternate!==null&&ae.delete(Ze.key===null?se:Ze.key),E=u(Ze,E,se),me===null?te=Ze:me.sibling=Ze,me=Ze);return e&&ae.forEach(function(Dn){return t(z,Dn)}),Te&&Gn(z,se),te}function oe(z,E,C,G){if(C==null)throw Error(o(151));for(var te=null,me=null,ae=E,se=E=0,Ze=null,Se=C.next();ae!==null&&!Se.done;se++,Se=C.next()){ae.index>se?(Ze=ae,ae=null):Ze=ae.sibling;var Dn=N(z,ae,Se.value,G);if(Dn===null){ae===null&&(ae=Ze);break}e&&ae&&Dn.alternate===null&&t(z,ae),E=u(Dn,E,se),me===null?te=Dn:me.sibling=Dn,me=Dn,ae=Ze}if(Se.done)return n(z,ae),Te&&Gn(z,se),te;if(ae===null){for(;!Se.done;se++,Se=C.next())Se=Y(z,Se.value,G),Se!==null&&(E=u(Se,E,se),me===null?te=Se:me.sibling=Se,me=Se);return Te&&Gn(z,se),te}for(ae=a(ae);!Se.done;se++,Se=C.next())Se=R(ae,z,se,Se.value,G),Se!==null&&(e&&Se.alternate!==null&&ae.delete(Se.key===null?se:Se.key),E=u(Se,E,se),me===null?te=Se:me.sibling=Se,me=Se);return e&&ae.forEach(function(c0){return t(z,c0)}),Te&&Gn(z,se),te}function ze(z,E,C,G){if(typeof C=="object"&&C!==null&&C.type===T&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case A:e:{for(var te=C.key;E!==null;){if(E.key===te){if(te=C.type,te===T){if(E.tag===7){n(z,E.sibling),G=r(E,C.props.children),G.return=z,z=G;break e}}else if(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===J&&rf(te)===E.type){n(z,E.sibling),G=r(E,C.props),gl(G,C),G.return=z,z=G;break e}n(z,E);break}else t(z,E);E=E.sibling}C.type===T?(G=jn(C.props.children,z.mode,G,C.key),G.return=z,z=G):(G=oi(C.type,C.key,C.props,null,z.mode,G),gl(G,C),G.return=z,z=G)}return d(z);case B:e:{for(te=C.key;E!==null;){if(E.key===te)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(z,E.sibling),G=r(E,C.children||[]),G.return=z,z=G;break e}else{n(z,E);break}else t(z,E);E=E.sibling}G=ao(C,z.mode,G),G.return=z,z=G}return d(z);case J:return te=C._init,C=te(C._payload),ze(z,E,C,G)}if(ce(C))return ue(z,E,C,G);if(ee(C)){if(te=ee(C),typeof te!="function")throw Error(o(150));return C=te.call(C),oe(z,E,C,G)}if(typeof C.then=="function")return ze(z,E,Ei(C),G);if(C.$$typeof===O)return ze(z,E,fi(z,C),G);Oi(z,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,E!==null&&E.tag===6?(n(z,E.sibling),G=r(E,C),G.return=z,z=G):(n(z,E),G=no(C,z.mode,G),G.return=z,z=G),d(z)):n(z,E)}return function(z,E,C,G){try{ml=0;var te=ze(z,E,C,G);return Ea=null,te}catch(ae){if(ae===rl||ae===pi)throw ae;var me=dt(29,ae,null,z.mode);return me.lanes=G,me.return=z,me}finally{}}}var Oa=of(!0),sf=of(!1),Mt=X(null),Lt=null;function gn(e){var t=e.alternate;I(Ye,Ye.current&1),I(Mt,e),Lt===null&&(t===null||xa.current!==null||t.memoizedState!==null)&&(Lt=e)}function uf(e){if(e.tag===22){if(I(Ye,Ye.current),I(Mt,e),Lt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Lt=e)}}else vn()}function vn(){I(Ye,Ye.current),I(Mt,Mt.current)}function Ft(e){W(Mt),Lt===e&&(Lt=null),W(Ye)}var Ye=X(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Ms(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ho(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qo={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=gt(),r=pn(a);r.payload=t,n!=null&&(r.callback=n),t=hn(e,r,a),t!==null&&(vt(t,e,a),sl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=gt(),r=pn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=hn(e,r,a),t!==null&&(vt(t,e,a),sl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),a=pn(n);a.tag=2,t!=null&&(a.callback=t),t=hn(e,a,n),t!==null&&(vt(t,e,n),sl(t,e,n))}};function cf(e,t,n,a,r,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,d):t.prototype&&t.prototype.isPureReactComponent?!Wa(n,a)||!Wa(r,u):!0}function ff(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&qo.enqueueReplaceState(t,t.state,null)}function Kn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var Ai=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function df(e){Ai(e)}function pf(e){console.error(e)}function hf(e){Ai(e)}function zi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function mf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function jo(e,t,n){return n=pn(n),n.tag=3,n.payload={element:null},n.callback=function(){zi(e,t)},n}function gf(e){return e=pn(e),e.tag=3,e}function vf(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=a.value;e.payload=function(){return r(u)},e.callback=function(){mf(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){mf(t,n,a),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var g=a.stack;this.componentDidCatch(a.value,{componentStack:g!==null?g:""})})}function cm(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&al(t,n,r,!0),n=Mt.current,n!==null){switch(n.tag){case 13:return Lt===null?us():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ho?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),fs(e,a,r)),!1;case 22:return n.flags|=65536,a===ho?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),fs(e,a,r)),!1}throw Error(o(435,n.tag))}return fs(e,a,r),us(),!1}if(Te)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==ro&&(e=Error(o(422),{cause:a}),nl(Tt(e,n)))):(a!==ro&&(t=Error(o(423),{cause:a}),nl(Tt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Tt(a,n),r=jo(e.stateNode,a,r),vo(e,r),Le!==4&&(Le=2)),!1;var u=Error(o(520),{cause:a});if(u=Tt(u,n),wl===null?wl=[u]:wl.push(u),Le!==4&&(Le=2),t===null)return!0;a=Tt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=jo(n.stateNode,a,e),vo(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(wn===null||!wn.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=gf(r),vf(r,e,n,a),vo(n,r),!1}n=n.return}while(n!==null);return!1}var bf=Error(o(461)),Pe=!1;function Je(e,t,n,a){t.child=e===null?sf(t,null,n,a):Oa(t,e.child,n,a)}function yf(e,t,n,a,r){n=n.render;var u=t.ref;if("ref"in a){var d={};for(var g in a)g!=="ref"&&(d[g]=a[g])}else d=a;return Pn(t),a=To(e,t,n,d,u,r),g=wo(),e!==null&&!Pe?(Eo(e,t,r),Wt(e,t,r)):(Te&&g&&lo(t),t.flags|=1,Je(e,t,a,r),t.child)}function xf(e,t,n,a,r){if(e===null){var u=n.type;return typeof u=="function"&&!to(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Sf(e,t,u,a,r)):(e=oi(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Zo(e,r)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(d,a)&&e.ref===t.ref)return Wt(e,t,r)}return t.flags|=1,e=Pt(u,a),e.ref=t.ref,e.return=t,t.child=e}function Sf(e,t,n,a,r){if(e!==null){var u=e.memoizedProps;if(Wa(u,a)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=a=u,Zo(e,r))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,Wt(e,t,r)}return Uo(e,t,n,a,r)}function Tf(e,t,n){var a=t.pendingProps,r=a.children,u=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=u!==null?u.baseLanes|n:n,e!==null){for(r=t.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;t.childLanes=u&~a}else t.childLanes=0,t.child=null;return wf(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&di(t,u!==null?u.cachePool:null),u!==null?xc(t,u):yo(),uf(t);else return t.lanes=t.childLanes=536870912,wf(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(di(t,u.cachePool),xc(t,u),vn(),t.memoizedState=null):(e!==null&&di(t,null),yo(),vn());return Je(e,t,r,n),t.child}function wf(e,t,n,a){var r=po();return r=r===null?null:{parent:Ge._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&di(t,null),yo(),uf(t),e!==null&&al(e,t,a,!0),null}function _i(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Uo(e,t,n,a,r){return Pn(t),n=To(e,t,n,a,void 0,r),a=wo(),e!==null&&!Pe?(Eo(e,t,r),Wt(e,t,r)):(Te&&a&&lo(t),t.flags|=1,Je(e,t,n,r),t.child)}function Ef(e,t,n,a,r,u){return Pn(t),t.updateQueue=null,n=Tc(t,a,n,r),Sc(e),a=wo(),e!==null&&!Pe?(Eo(e,t,u),Wt(e,t,u)):(Te&&a&&lo(t),t.flags|=1,Je(e,t,n,u),t.child)}function Of(e,t,n,a,r){if(Pn(t),t.stateNode===null){var u=ma,d=n.contextType;typeof d=="object"&&d!==null&&(u=Ie(d)),u=new n(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=qo,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},mo(t),d=n.contextType,u.context=typeof d=="object"&&d!==null?Ie(d):ma,u.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Ho(t,n,d,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&qo.enqueueReplaceState(u,u.state,null),cl(t,a,u,r),ul(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var g=t.memoizedProps,y=Kn(n,g);u.props=y;var D=u.context,j=n.contextType;d=ma,typeof j=="object"&&j!==null&&(d=Ie(j));var Y=n.getDerivedStateFromProps;j=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,j||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g||D!==d)&&ff(t,u,a,d),dn=!1;var N=t.memoizedState;u.state=N,cl(t,a,u,r),ul(),D=t.memoizedState,g||N!==D||dn?(typeof Y=="function"&&(Ho(t,n,Y,a),D=t.memoizedState),(y=dn||cf(t,n,y,a,N,D,d))?(j||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=D),u.props=a,u.state=D,u.context=d,a=y):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,go(e,t),d=t.memoizedProps,j=Kn(n,d),u.props=j,Y=t.pendingProps,N=u.context,D=n.contextType,y=ma,typeof D=="object"&&D!==null&&(y=Ie(D)),g=n.getDerivedStateFromProps,(D=typeof g=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==Y||N!==y)&&ff(t,u,a,y),dn=!1,N=t.memoizedState,u.state=N,cl(t,a,u,r),ul();var R=t.memoizedState;d!==Y||N!==R||dn||e!==null&&e.dependencies!==null&&ci(e.dependencies)?(typeof g=="function"&&(Ho(t,n,g,a),R=t.memoizedState),(j=dn||cf(t,n,j,a,N,R,y)||e!==null&&e.dependencies!==null&&ci(e.dependencies))?(D||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,R,y),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,R,y)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),u.props=a,u.state=R,u.context=y,a=j):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,_i(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Oa(t,e.child,null,r),t.child=Oa(t,null,n,r)):Je(e,t,n,r),t.memoizedState=u.state,e=t.child):e=Wt(e,t,r),e}function Mf(e,t,n,a){return tl(),t.flags|=256,Je(e,t,n,a),t.child}var Go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yo(e){return{baseLanes:e,cachePool:dc()}}function Xo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function Af(e,t,n){var a=t.pendingProps,r=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Te){if(r?gn(t):vn(),Te){var g=Be,y;if(y=g){e:{for(y=g,g=Bt;y.nodeType!==8;){if(!g){g=null;break e}if(y=Dt(y.nextSibling),y===null){g=null;break e}}g=y}g!==null?(t.memoizedState={dehydrated:g,treeContext:Un!==null?{id:Qt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},y=dt(18,null,null,0),y.stateNode=g,y.return=t,t.child=y,tt=t,Be=null,y=!0):y=!1}y||Xn(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Ms(g)?t.lanes=32:t.lanes=536870912,null;Ft(t)}return g=a.children,a=a.fallback,r?(vn(),r=t.mode,g=Ci({mode:"hidden",children:g},r),a=jn(a,r,n,null),g.return=t,a.return=t,g.sibling=a,t.child=g,r=t.child,r.memoizedState=Yo(n),r.childLanes=Xo(e,d,n),t.memoizedState=Go,a):(gn(t),Vo(t,g))}if(y=e.memoizedState,y!==null&&(g=y.dehydrated,g!==null)){if(u)t.flags&256?(gn(t),t.flags&=-257,t=Po(e,t,n)):t.memoizedState!==null?(vn(),t.child=e.child,t.flags|=128,t=null):(vn(),r=a.fallback,g=t.mode,a=Ci({mode:"visible",children:a.children},g),r=jn(r,g,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,Oa(t,e.child,null,n),a=t.child,a.memoizedState=Yo(n),a.childLanes=Xo(e,d,n),t.memoizedState=Go,t=r);else if(gn(t),Ms(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var D=d.dgst;d=D,a=Error(o(419)),a.stack="",a.digest=d,nl({value:a,source:null,stack:null}),t=Po(e,t,n)}else if(Pe||al(e,t,n,!1),d=(n&e.childLanes)!==0,Pe||d){if(d=Ce,d!==null&&(a=n&-n,a=(a&42)!==0?1:Mr(a),a=(a&(d.suspendedLanes|n))!==0?0:a,a!==0&&a!==y.retryLane))throw y.retryLane=a,ha(e,a),vt(d,e,a),bf;g.data==="$?"||us(),t=Po(e,t,n)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Be=Dt(g.nextSibling),tt=t,Te=!0,Yn=null,Bt=!1,e!==null&&(Et[Ot++]=Qt,Et[Ot++]=Zt,Et[Ot++]=Un,Qt=e.id,Zt=e.overflow,Un=t),t=Vo(t,a.children),t.flags|=4096);return t}return r?(vn(),r=a.fallback,g=t.mode,y=e.child,D=y.sibling,a=Pt(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,D!==null?r=Pt(D,r):(r=jn(r,g,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,g=e.child.memoizedState,g===null?g=Yo(n):(y=g.cachePool,y!==null?(D=Ge._currentValue,y=y.parent!==D?{parent:D,pool:D}:y):y=dc(),g={baseLanes:g.baseLanes|n,cachePool:y}),r.memoizedState=g,r.childLanes=Xo(e,d,n),t.memoizedState=Go,a):(gn(t),n=e.child,e=n.sibling,n=Pt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Vo(e,t){return t=Ci({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ci(e,t){return e=dt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Po(e,t,n){return Oa(t,e.child,null,n),e=Vo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),so(e.return,t,n)}function Qo(e,t,n,a,r){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=n,u.tailMode=r)}function _f(e,t,n){var a=t.pendingProps,r=a.revealOrder,u=a.tail;if(Je(e,t,a.children,n),a=Ye.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zf(e,n,t);else if(e.tag===19)zf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(I(Ye,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Mi(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Qo(t,!1,r,n,u);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Mi(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Qo(t,!0,n,null,u);break;case"together":Qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(al(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ci(e)))}function fm(e,t,n){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),fn(t,Ge,e.memoizedState.cache),tl();break;case 27:case 5:Sr(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:fn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Af(e,t,n):(gn(t),e=Wt(e,t,n),e!==null?e.sibling:null);gn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(al(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return _f(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),I(Ye,Ye.current),a)break;return null;case 22:case 23:return t.lanes=0,Tf(e,t,n);case 24:fn(t,Ge,e.memoizedState.cache)}return Wt(e,t,n)}function Cf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!Zo(e,n)&&(t.flags&128)===0)return Pe=!1,fm(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,Te&&(t.flags&1048576)!==0&&ic(t,ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")to(a)?(e=Kn(a,e),t.tag=1,t=Of(null,t,a,e,n)):(t.tag=0,t=Uo(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===H){t.tag=11,t=yf(null,t,a,e,n);break e}else if(r===F){t.tag=14,t=xf(null,t,a,e,n);break e}}throw t=he(a)||a,Error(o(306,t,""))}}return t;case 0:return Uo(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=Kn(a,t.pendingProps),Of(e,t,a,r,n);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var u=t.memoizedState;r=u.element,go(e,t),cl(t,a,null,n);var d=t.memoizedState;if(a=d.cache,fn(t,Ge,a),a!==u.cache&&uo(t,[Ge],n,!0),ul(),a=d.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Mf(e,t,a,n);break e}else if(a!==r){r=Tt(Error(o(424)),t),nl(r),t=Mf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Dt(e.firstChild),tt=t,Te=!0,Yn=null,Bt=!0,n=sf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(tl(),a===r){t=Wt(e,t,n);break e}Je(e,t,a,n)}t=t.child}return t;case 26:return _i(e,t),e===null?(n=Rd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Te||(n=t.type,e=t.pendingProps,a=Vi(fe.current).createElement(n),a[We]=t,a[at]=e,Fe(a,n,e),Ve(a),t.stateNode=a):t.memoizedState=Rd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Sr(t),e===null&&Te&&(a=t.stateNode=Dd(t.type,t.pendingProps,fe.current),tt=t,Bt=!0,r=Be,Mn(t.type)?(As=r,Be=Dt(a.firstChild)):Be=r),Je(e,t,t.pendingProps.children,n),_i(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Te&&((r=a=Be)&&(a=jm(a,t.type,t.pendingProps,Bt),a!==null?(t.stateNode=a,tt=t,Be=Dt(a.firstChild),Bt=!1,r=!0):r=!1),r||Xn(t)),Sr(t),r=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,a=u.children,ws(r,u)?a=null:d!==null&&ws(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=To(e,t,am,null,null,n),Nl._currentValue=r),_i(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&Te&&((e=n=Be)&&(n=Um(n,t.pendingProps,Bt),n!==null?(t.stateNode=n,tt=t,Be=null,e=!0):e=!1),e||Xn(t)),null;case 13:return Af(e,t,n);case 4:return De(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Oa(t,null,a,n):Je(e,t,a,n),t.child;case 11:return yf(e,t,t.type,t.pendingProps,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,fn(t,t.type,a.value),Je(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,Pn(t),r=Ie(r),a=a(r),t.flags|=1,Je(e,t,a,n),t.child;case 14:return xf(e,t,t.type,t.pendingProps,n);case 15:return Sf(e,t,t.type,t.pendingProps,n);case 19:return _f(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=Ci(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Pt(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Tf(e,t,n);case 24:return Pn(t),a=Ie(Ge),e===null?(r=po(),r===null&&(r=Ce,u=co(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),t.memoizedState={parent:a,cache:r},mo(t),fn(t,Ge,r)):((e.lanes&n)!==0&&(go(e,t),cl(t,null,null,n),ul()),r=e.memoizedState,u=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),fn(t,Ge,a)):(a=u.cache,fn(t,Ge,a),a!==r.cache&&uo(t,[Ge],n,!0))),Je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function It(e){e.flags|=4}function Df(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jd(t)){if(t=Mt.current,t!==null&&((ye&4194048)===ye?Lt!==null:(ye&62914560)!==ye&&(ye&536870912)===0||t!==Lt))throw ol=ho,pc;e.flags|=8192}}function Di(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?su():536870912,e.lanes|=t,_a|=t)}function vl(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function dm(e,t,n){var a=t.pendingProps;switch(io(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Ge),on(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(el(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sc())),Re(t),null;case 26:return n=t.memoizedState,e===null?(It(t),n!==null?(Re(t),Df(t,n)):(Re(t),t.flags&=-16777217)):n?n!==e.memoizedState?(It(t),Re(t),Df(t,n)):(Re(t),t.flags&=-16777217):(e.memoizedProps!==a&&It(t),Re(t),t.flags&=-16777217),null;case 27:Yl(t),n=fe.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Re(t),null}e=re.current,el(t)?rc(t):(e=Dd(r,a,n),t.stateNode=e,It(t))}return Re(t),null;case 5:if(Yl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Re(t),null}if(e=re.current,el(t))rc(t);else{switch(r=Vi(fe.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[We]=t,e[at]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Fe(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&It(t)}}return Re(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&It(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=fe.current,el(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=tt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[We]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Ed(e.nodeValue,n)),e||Xn(t)}else e=Vi(e).createTextNode(a),e[We]=t,t.stateNode=e}return Re(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=el(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[We]=t}else tl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),r=!1}else r=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ft(t),t):(Ft(t),null)}if(Ft(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Di(t,t.updateQueue),Re(t),null;case 4:return on(),e===null&&bs(t.stateNode.containerInfo),Re(t),null;case 10:return Jt(t.type),Re(t),null;case 19:if(W(Ye),r=t.memoizedState,r===null)return Re(t),null;if(a=(t.flags&128)!==0,u=r.rendering,u===null)if(a)vl(r,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Mi(e),u!==null){for(t.flags|=128,vl(r,!1),e=u.updateQueue,t.updateQueue=e,Di(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)lc(n,e),n=n.sibling;return I(Ye,Ye.current&1|2),t.child}e=e.sibling}r.tail!==null&&Rt()>Ri&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}else{if(!a)if(e=Mi(u),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Di(t,e),vl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Te)return Re(t),null}else 2*Rt()-r.renderingStartTime>Ri&&n!==536870912&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Rt(),t.sibling=null,e=Ye.current,I(Ye,a?e&1|2:e&1),t):(Re(t),null);case 22:case 23:return Ft(t),xo(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&Di(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&W(Qn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jt(Ge),Re(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function pm(e,t){switch(io(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Ge),on(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Yl(t),null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));tl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Ye),null;case 4:return on(),null;case 10:return Jt(t.type),null;case 22:case 23:return Ft(t),xo(),e!==null&&W(Qn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Ge),null;case 25:return null;default:return null}}function Nf(e,t){switch(io(t),t.tag){case 3:Jt(Ge),on();break;case 26:case 27:case 5:Yl(t);break;case 4:on();break;case 13:Ft(t);break;case 19:W(Ye);break;case 10:Jt(t.type);break;case 22:case 23:Ft(t),xo(),e!==null&&W(Qn);break;case 24:Jt(Ge)}}function bl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var u=n.create,d=n.inst;a=u(),d.destroy=a}n=n.next}while(n!==r)}}catch(g){_e(t,t.return,g)}}function bn(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){var d=a.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,r=t;var y=n,D=g;try{D()}catch(j){_e(r,y,j)}}}a=a.next}while(a!==u)}}catch(j){_e(t,t.return,j)}}function kf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{yc(t,n)}catch(a){_e(e,e.return,a)}}}function Rf(e,t,n){n.props=Kn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){_e(e,t,a)}}function yl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){_e(e,t,r)}}function Ht(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){_e(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Bf(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){_e(e,e.return,r)}}function Ko(e,t,n){try{var a=e.stateNode;Rm(a,e.type,n,t),a[at]=t}catch(r){_e(e,e.return,r)}}function Lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mn(e.type)||e.tag===4}function Jo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xi));else if(a!==4&&(a===27&&Mn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}function Ni(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Mn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}function Hf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Fe(t,a,n),t[We]=e,t[at]=n}catch(u){_e(e,e.return,u)}}var en=!1,qe=!1,Fo=!1,qf=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function hm(e,t){if(e=e.containerInfo,Ss=$i,e=Ku(e),Kr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,g=-1,y=-1,D=0,j=0,Y=e,N=null;t:for(;;){for(var R;Y!==n||r!==0&&Y.nodeType!==3||(g=d+r),Y!==u||a!==0&&Y.nodeType!==3||(y=d+a),Y.nodeType===3&&(d+=Y.nodeValue.length),(R=Y.firstChild)!==null;)N=Y,Y=R;for(;;){if(Y===e)break t;if(N===n&&++D===r&&(g=d),N===u&&++j===a&&(y=d),(R=Y.nextSibling)!==null)break;Y=N,N=Y.parentNode}Y=R}n=g===-1||y===-1?null:{start:g,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ts={focusedElem:e,selectionRange:n},$i=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,r=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var ue=Kn(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ue,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){_e(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Os(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Os(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function jf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:yn(e,n),a&4&&bl(5,n);break;case 1:if(yn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){_e(n,n.return,d)}else{var r=Kn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){_e(n,n.return,d)}}a&64&&kf(n),a&512&&yl(n,n.return);break;case 3:if(yn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{yc(e,t)}catch(d){_e(n,n.return,d)}}break;case 27:t===null&&a&4&&Hf(n);case 26:case 5:yn(e,n),t===null&&a&4&&Bf(n),a&512&&yl(n,n.return);break;case 12:yn(e,n);break;case 13:yn(e,n),a&4&&Yf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=wm.bind(null,n),Gm(e,n))));break;case 22:if(a=n.memoizedState!==null||en,!a){t=t!==null&&t.memoizedState!==null||qe,r=en;var u=qe;en=a,(qe=t)&&!u?xn(e,n,(n.subtreeFlags&8772)!==0):yn(e,n),en=r,qe=u}break;case 30:break;default:yn(e,n)}}function Uf(e){var t=e.alternate;t!==null&&(e.alternate=null,Uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_r(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,rt=!1;function tn(e,t,n){for(n=n.child;n!==null;)Gf(e,t,n),n=n.sibling}function Gf(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 26:qe||Ht(n,t),tn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Ht(n,t);var a=Ne,r=rt;Mn(n.type)&&(Ne=n.stateNode,rt=!1),tn(e,t,n),zl(n.stateNode),Ne=a,rt=r;break;case 5:qe||Ht(n,t);case 6:if(a=Ne,r=rt,Ne=null,tn(e,t,n),Ne=a,rt=r,Ne!==null)if(rt)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(u){_e(n,t,u)}else try{Ne.removeChild(n.stateNode)}catch(u){_e(n,t,u)}break;case 18:Ne!==null&&(rt?(e=Ne,_d(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ll(e)):_d(Ne,n.stateNode));break;case 4:a=Ne,r=rt,Ne=n.stateNode.containerInfo,rt=!0,tn(e,t,n),Ne=a,rt=r;break;case 0:case 11:case 14:case 15:qe||bn(2,n,t),qe||bn(4,n,t),tn(e,t,n);break;case 1:qe||(Ht(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Rf(n,t,a)),tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:qe=(a=qe)||n.memoizedState!==null,tn(e,t,n),qe=a;break;default:tn(e,t,n)}}function Yf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(n){_e(t,t.return,n)}}function mm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qf),t;default:throw Error(o(435,e.tag))}}function Wo(e,t){var n=mm(e);t.forEach(function(a){var r=Em.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function pt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],u=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(Mn(g.type)){Ne=g.stateNode,rt=!1;break e}break;case 5:Ne=g.stateNode,rt=!1;break e;case 3:case 4:Ne=g.stateNode.containerInfo,rt=!0;break e}g=g.return}if(Ne===null)throw Error(o(160));Gf(u,d,r),Ne=null,rt=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}var Ct=null;function Xf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),ht(e),a&4&&(bn(3,e,e.return),bl(3,e),bn(5,e,e.return));break;case 1:pt(t,e),ht(e),a&512&&(qe||n===null||Ht(n,n.return)),a&64&&en&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Ct;if(pt(t,e),ht(e),a&512&&(qe||n===null||Ht(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Xa]||u[We]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(a),r.head.insertBefore(u,r.querySelector("head > title"))),Fe(u,a,n),u[We]=e,Ve(u),a=u;break e;case"link":var d=Hd("link","href",r).get(a+(n.href||""));if(d){for(var g=0;g<d.length;g++)if(u=d[g],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(g,1);break t}}u=r.createElement(a),Fe(u,a,n),r.head.appendChild(u);break;case"meta":if(d=Hd("meta","content",r).get(a+(n.content||""))){for(g=0;g<d.length;g++)if(u=d[g],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(g,1);break t}}u=r.createElement(a),Fe(u,a,n),r.head.appendChild(u);break;default:throw Error(o(468,a))}u[We]=e,Ve(u),a=u}e.stateNode=a}else qd(r,e.type,e.stateNode);else e.stateNode=Ld(r,a,e.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?qd(r,e.type,e.stateNode):Ld(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ko(e,e.memoizedProps,n.memoizedProps)}break;case 27:pt(t,e),ht(e),a&512&&(qe||n===null||Ht(n,n.return)),n!==null&&a&4&&Ko(e,e.memoizedProps,n.memoizedProps);break;case 5:if(pt(t,e),ht(e),a&512&&(qe||n===null||Ht(n,n.return)),e.flags&32){r=e.stateNode;try{oa(r,"")}catch(R){_e(e,e.return,R)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,Ko(e,r,n!==null?n.memoizedProps:r)),a&1024&&(Fo=!0);break;case 6:if(pt(t,e),ht(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(R){_e(e,e.return,R)}}break;case 3:if(Zi=null,r=Ct,Ct=Pi(t.containerInfo),pt(t,e),Ct=r,ht(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ll(t.containerInfo)}catch(R){_e(e,e.return,R)}Fo&&(Fo=!1,Vf(e));break;case 4:a=Ct,Ct=Pi(e.stateNode.containerInfo),pt(t,e),ht(e),Ct=a;break;case 12:pt(t,e),ht(e);break;case 13:pt(t,e),ht(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ls=Rt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Wo(e,a)));break;case 22:r=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,D=en,j=qe;if(en=D||r,qe=j||y,pt(t,e),qe=j,en=D,ht(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||y||en||qe||Jn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(u=y.stateNode,r)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=y.stateNode;var Y=y.memoizedProps.style,N=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;g.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(R){_e(y,y.return,R)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=r?"":y.memoizedProps}catch(R){_e(y,y.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Wo(e,n))));break;case 19:pt(t,e),ht(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Wo(e,a)));break;case 30:break;case 21:break;default:pt(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Lf(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,u=Jo(e);Ni(e,u,r);break;case 5:var d=n.stateNode;n.flags&32&&(oa(d,""),n.flags&=-33);var g=Jo(e);Ni(e,g,d);break;case 3:case 4:var y=n.stateNode.containerInfo,D=Jo(e);$o(e,D,y);break;default:throw Error(o(161))}}catch(j){_e(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jf(e,t.alternate,t),t=t.sibling}function Jn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bn(4,t,t.return),Jn(t);break;case 1:Ht(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Rf(t,t.return,n),Jn(t);break;case 27:zl(t.stateNode);case 26:case 5:Ht(t,t.return),Jn(t);break;case 22:t.memoizedState===null&&Jn(t);break;case 30:Jn(t);break;default:Jn(t)}e=e.sibling}}function xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:xn(r,u,n),bl(4,u);break;case 1:if(xn(r,u,n),a=u,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(D){_e(a,a.return,D)}if(a=u,r=a.updateQueue,r!==null){var g=a.stateNode;try{var y=r.shared.hiddenCallbacks;if(y!==null)for(r.shared.hiddenCallbacks=null,r=0;r<y.length;r++)bc(y[r],g)}catch(D){_e(a,a.return,D)}}n&&d&64&&kf(u),yl(u,u.return);break;case 27:Hf(u);case 26:case 5:xn(r,u,n),n&&a===null&&d&4&&Bf(u),yl(u,u.return);break;case 12:xn(r,u,n);break;case 13:xn(r,u,n),n&&d&4&&Yf(r,u);break;case 22:u.memoizedState===null&&xn(r,u,n),yl(u,u.return);break;case 30:break;default:xn(r,u,n)}t=t.sibling}}function Io(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ll(n))}function es(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e))}function qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pf(e,t,n,a),t=t.sibling}function Pf(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,n,a),r&2048&&bl(9,t);break;case 1:qt(e,t,n,a);break;case 3:qt(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ll(e)));break;case 12:if(r&2048){qt(e,t,n,a),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,g=u.onPostCommit;typeof g=="function"&&g(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){_e(t,t.return,y)}}else qt(e,t,n,a);break;case 13:qt(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?qt(e,t,n,a):xl(e,t):u._visibility&2?qt(e,t,n,a):(u._visibility|=2,Ma(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&Io(d,t);break;case 24:qt(e,t,n,a),r&2048&&es(t.alternate,t);break;default:qt(e,t,n,a)}}function Ma(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,d=t,g=n,y=a,D=d.flags;switch(d.tag){case 0:case 11:case 15:Ma(u,d,g,y,r),bl(8,d);break;case 23:break;case 22:var j=d.stateNode;d.memoizedState!==null?j._visibility&2?Ma(u,d,g,y,r):xl(u,d):(j._visibility|=2,Ma(u,d,g,y,r)),r&&D&2048&&Io(d.alternate,d);break;case 24:Ma(u,d,g,y,r),r&&D&2048&&es(d.alternate,d);break;default:Ma(u,d,g,y,r)}t=t.sibling}}function xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:xl(n,a),r&2048&&Io(a.alternate,a);break;case 24:xl(n,a),r&2048&&es(a.alternate,a);break;default:xl(n,a)}t=t.sibling}}var Sl=8192;function Aa(e){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)Qf(e),e=e.sibling}function Qf(e){switch(e.tag){case 26:Aa(e),e.flags&Sl&&e.memoizedState!==null&&e0(Ct,e.memoizedState,e.memoizedProps);break;case 5:Aa(e);break;case 3:case 4:var t=Ct;Ct=Pi(e.stateNode.containerInfo),Aa(e),Ct=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Sl,Sl=16777216,Aa(e),Sl=t):Aa(e));break;default:Aa(e)}}function Zf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Jf(a,e)}Zf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kf(e),e=e.sibling}function Kf(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&bn(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ki(e)):Tl(e);break;default:Tl(e)}}function ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Qe=a,Jf(a,e)}Zf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:bn(8,t,t.return),ki(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ki(t));break;default:ki(t)}e=e.sibling}}function Jf(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:bn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ll(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Qe=a;else e:for(n=e;Qe!==null;){a=Qe;var r=a.sibling,u=a.return;if(Uf(a),a===n){Qe=null;break e}if(r!==null){r.return=u,Qe=r;break e}Qe=u}}}var gm={getCacheForType:function(e){var t=Ie(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},vm=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ce=null,ge=null,ye=0,Oe=0,mt=null,Sn=!1,za=!1,ts=!1,nn=0,Le=0,Tn=0,$n=0,ns=0,At=0,_a=0,wl=null,ot=null,as=!1,ls=0,Ri=1/0,Bi=null,wn=null,$e=0,En=null,Ca=null,Da=0,is=0,rs=null,$f=null,El=0,os=null;function gt(){if((Ee&2)!==0&&ye!==0)return ye&-ye;if(_.T!==null){var e=ba;return e!==0?e:hs()}return fu()}function Ff(){At===0&&(At=(ye&536870912)===0||Te?ou():536870912);var e=Mt.current;return e!==null&&(e.flags|=32),At}function vt(e,t,n){(e===Ce&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Na(e,0),On(e,ye,At,!1)),Ya(e,n),((Ee&2)===0||e!==Ce)&&(e===Ce&&((Ee&2)===0&&($n|=n),Le===4&&On(e,ye,At,!1)),jt(e))}function Wf(e,t,n){if((Ee&6)!==0)throw Error(o(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ga(e,t),r=a?xm(e,t):cs(e,t,!0),u=a;do{if(r===0){za&&!a&&On(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!bm(n)){r=cs(e,t,!1),u=!1;continue}if(r===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var g=e;r=wl;var y=g.current.memoizedState.isDehydrated;if(y&&(Na(g,d).flags|=256),d=cs(g,d,!1),d!==2){if(ts&&!y){g.errorRecoveryDisabledLanes|=u,$n|=u,r=4;break e}u=ot,ot=r,u!==null&&(ot===null?ot=u:ot.push.apply(ot,u))}r=d}if(u=!1,r!==2)continue}}if(r===1){Na(e,0),On(e,t,0,!0);break}e:{switch(a=e,u=r,u){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:On(a,t,At,!Sn);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=ls+300-Rt(),10<r)){if(On(a,t,At,!Sn),Ql(a,0,!0)!==0)break e;a.timeoutHandle=Ad(If.bind(null,a,n,ot,Bi,as,t,At,$n,_a,Sn,u,2,-0,0),r);break e}If(a,n,ot,Bi,as,t,At,$n,_a,Sn,u,0,-0,0)}}break}while(!0);jt(e)}function If(e,t,n,a,r,u,d,g,y,D,j,Y,N,R){if(e.timeoutHandle=-1,Y=t.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(Dl={stylesheets:null,count:0,unsuspend:Im},Qf(t),Y=t0(),Y!==null)){e.cancelPendingCommit=Y(rd.bind(null,e,t,u,n,a,r,d,g,y,j,1,N,R)),On(e,u,d,!D);return}rd(e,t,u,n,a,r,d,g,y)}function bm(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],u=r.getSnapshot;r=r.value;try{if(!ft(u(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t,n,a){t&=~ns,t&=~$n,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var u=31-ct(r),d=1<<u;a[u]=-1,r&=~d}n!==0&&uu(e,n,t)}function Li(){return(Ee&6)===0?(Ol(0),!1):!0}function ss(){if(ge!==null){if(Oe===0)var e=ge.return;else e=ge,Kt=Vn=null,Oo(e),Ea=null,ml=0,e=ge;for(;e!==null;)Nf(e.alternate,e),e=e.return;ge=null}}function Na(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Lm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ss(),Ce=e,ge=n=Pt(e.current,null),ye=t,Oe=0,mt=null,Sn=!1,za=Ga(e,t),ts=!1,_a=At=ns=$n=Tn=Le=0,ot=wl=null,as=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-ct(a),u=1<<r;t|=e[r],a&=~u}return nn=t,li(),n}function ed(e,t){pe=null,_.H=wi,t===rl||t===pi?(t=gc(),Oe=3):t===pc?(t=gc(),Oe=4):Oe=t===bf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,ge===null&&(Le=1,zi(e,Tt(t,e.current)))}function td(){var e=_.H;return _.H=wi,e===null?wi:e}function nd(){var e=_.A;return _.A=gm,e}function us(){Le=4,Sn||(ye&4194048)!==ye&&Mt.current!==null||(za=!0),(Tn&134217727)===0&&($n&134217727)===0||Ce===null||On(Ce,ye,At,!1)}function cs(e,t,n){var a=Ee;Ee|=2;var r=td(),u=nd();(Ce!==e||ye!==t)&&(Bi=null,Na(e,t)),t=!1;var d=Le;e:do try{if(Oe!==0&&ge!==null){var g=ge,y=mt;switch(Oe){case 8:ss(),d=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var D=Oe;if(Oe=0,mt=null,ka(e,g,y,D),n&&za){d=0;break e}break;default:D=Oe,Oe=0,mt=null,ka(e,g,y,D)}}ym(),d=Le;break}catch(j){ed(e,j)}while(!0);return t&&e.shellSuspendCounter++,Kt=Vn=null,Ee=a,_.H=r,_.A=u,ge===null&&(Ce=null,ye=0,li()),d}function ym(){for(;ge!==null;)ad(ge)}function xm(e,t){var n=Ee;Ee|=2;var a=td(),r=nd();Ce!==e||ye!==t?(Bi=null,Ri=Rt()+500,Na(e,t)):za=Ga(e,t);e:do try{if(Oe!==0&&ge!==null){t=ge;var u=mt;t:switch(Oe){case 1:Oe=0,mt=null,ka(e,t,u,1);break;case 2:case 9:if(hc(u)){Oe=0,mt=null,ld(t);break}t=function(){Oe!==2&&Oe!==9||Ce!==e||(Oe=7),jt(e)},u.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:hc(u)?(Oe=0,mt=null,ld(t)):(Oe=0,mt=null,ka(e,t,u,7));break;case 5:var d=null;switch(ge.tag){case 26:d=ge.memoizedState;case 5:case 27:var g=ge;if(!d||jd(d)){Oe=0,mt=null;var y=g.sibling;if(y!==null)ge=y;else{var D=g.return;D!==null?(ge=D,Hi(D)):ge=null}break t}}Oe=0,mt=null,ka(e,t,u,5);break;case 6:Oe=0,mt=null,ka(e,t,u,6);break;case 8:ss(),Le=6;break e;default:throw Error(o(462))}}Sm();break}catch(j){ed(e,j)}while(!0);return Kt=Vn=null,_.H=a,_.A=r,Ee=n,ge!==null?0:(Ce=null,ye=0,li(),Le)}function Sm(){for(;ge!==null&&!Xp();)ad(ge)}function ad(e){var t=Cf(e.alternate,e,nn);e.memoizedProps=e.pendingProps,t===null?Hi(e):ge=t}function ld(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ef(n,t,t.pendingProps,t.type,void 0,ye);break;case 11:t=Ef(n,t,t.pendingProps,t.type.render,t.ref,ye);break;case 5:Oo(t);default:Nf(n,t),t=ge=lc(t,nn),t=Cf(n,t,nn)}e.memoizedProps=e.pendingProps,t===null?Hi(e):ge=t}function ka(e,t,n,a){Kt=Vn=null,Oo(t),Ea=null,ml=0;var r=t.return;try{if(cm(e,r,t,n,ye)){Le=1,zi(e,Tt(n,e.current)),ge=null;return}}catch(u){if(r!==null)throw ge=r,u;Le=1,zi(e,Tt(n,e.current)),ge=null;return}t.flags&32768?(Te||a===1?e=!0:za||(ye&536870912)!==0?e=!1:(Sn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),id(t,e)):Hi(t)}function Hi(e){var t=e;do{if((t.flags&32768)!==0){id(t,Sn);return}e=t.return;var n=dm(t.alternate,t,nn);if(n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Le===0&&(Le=5)}function id(e,t){do{var n=pm(e.alternate,e);if(n!==null){n.flags&=32767,ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=n}while(e!==null);Le=6,ge=null}function rd(e,t,n,a,r,u,d,g,y){e.cancelPendingCommit=null;do qi();while($e!==0);if((Ee&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(u=t.lanes|t.childLanes,u|=Ir,Ip(e,n,u,d,g,y),e===Ce&&(ge=Ce=null,ye=0),Ca=t,En=e,Da=n,is=u,rs=r,$f=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Om(Xl,function(){return fd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null,r=Q.p,Q.p=2,d=Ee,Ee|=4;try{hm(e,t,n)}finally{Ee=d,Q.p=r,_.T=a}}$e=1,od(),sd(),ud()}}function od(){if($e===1){$e=0;var e=En,t=Ca,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var a=Q.p;Q.p=2;var r=Ee;Ee|=4;try{Xf(t,e);var u=Ts,d=Ku(e.containerInfo),g=u.focusedElem,y=u.selectionRange;if(d!==g&&g&&g.ownerDocument&&Zu(g.ownerDocument.documentElement,g)){if(y!==null&&Kr(g)){var D=y.start,j=y.end;if(j===void 0&&(j=D),"selectionStart"in g)g.selectionStart=D,g.selectionEnd=Math.min(j,g.value.length);else{var Y=g.ownerDocument||document,N=Y&&Y.defaultView||window;if(N.getSelection){var R=N.getSelection(),ue=g.textContent.length,oe=Math.min(y.start,ue),ze=y.end===void 0?oe:Math.min(y.end,ue);!R.extend&&oe>ze&&(d=ze,ze=oe,oe=d);var z=Qu(g,oe),E=Qu(g,ze);if(z&&E&&(R.rangeCount!==1||R.anchorNode!==z.node||R.anchorOffset!==z.offset||R.focusNode!==E.node||R.focusOffset!==E.offset)){var C=Y.createRange();C.setStart(z.node,z.offset),R.removeAllRanges(),oe>ze?(R.addRange(C),R.extend(E.node,E.offset)):(C.setEnd(E.node,E.offset),R.addRange(C))}}}}for(Y=[],R=g;R=R.parentNode;)R.nodeType===1&&Y.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<Y.length;g++){var G=Y[g];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}$i=!!Ss,Ts=Ss=null}finally{Ee=r,Q.p=a,_.T=n}}e.current=t,$e=2}}function sd(){if($e===2){$e=0;var e=En,t=Ca,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var a=Q.p;Q.p=2;var r=Ee;Ee|=4;try{jf(e,t.alternate,t)}finally{Ee=r,Q.p=a,_.T=n}}$e=3}}function ud(){if($e===4||$e===3){$e=0,Vp();var e=En,t=Ca,n=Da,a=$f;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Ca=En=null,cd(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(wn=null),Ar(n),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Ua,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=_.T,r=Q.p,Q.p=2,_.T=null;try{for(var u=e.onRecoverableError,d=0;d<a.length;d++){var g=a[d];u(g.value,{componentStack:g.stack})}}finally{_.T=t,Q.p=r}}(Da&3)!==0&&qi(),jt(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===os?El++:(El=0,os=e):El=0,Ol(0)}}function cd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ll(t)))}function qi(e){return od(),sd(),ud(),fd()}function fd(){if($e!==5)return!1;var e=En,t=is;is=0;var n=Ar(Da),a=_.T,r=Q.p;try{Q.p=32>n?32:n,_.T=null,n=rs,rs=null;var u=En,d=Da;if($e=0,Ca=En=null,Da=0,(Ee&6)!==0)throw Error(o(331));var g=Ee;if(Ee|=4,Kf(u.current),Pf(u,u.current,d,n),Ee=g,Ol(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Ua,u)}catch{}return!0}finally{Q.p=r,_.T=a,cd(e,t)}}function dd(e,t,n){t=Tt(n,t),t=jo(e.stateNode,t,2),e=hn(e,t,2),e!==null&&(Ya(e,2),jt(e))}function _e(e,t,n){if(e.tag===3)dd(e,e,n);else for(;t!==null;){if(t.tag===3){dd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wn===null||!wn.has(a))){e=Tt(n,e),n=gf(2),a=hn(t,n,2),a!==null&&(vf(n,a,t,e),Ya(a,2),jt(a));break}}t=t.return}}function fs(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new vm;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(ts=!0,r.add(n),e=Tm.bind(null,e,t,n),t.then(e,e))}function Tm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ce===e&&(ye&n)===n&&(Le===4||Le===3&&(ye&62914560)===ye&&300>Rt()-ls?(Ee&2)===0&&Na(e,0):ns|=n,_a===ye&&(_a=0)),jt(e)}function pd(e,t){t===0&&(t=su()),e=ha(e,t),e!==null&&(Ya(e,t),jt(e))}function wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pd(e,n)}function Em(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),pd(e,n)}function Om(e,t){return wr(e,t)}var ji=null,Ra=null,ds=!1,Ui=!1,ps=!1,Fn=0;function jt(e){e!==Ra&&e.next===null&&(Ra===null?ji=Ra=e:Ra=Ra.next=e),Ui=!0,ds||(ds=!0,Am())}function Ol(e,t){if(!ps&&Ui){ps=!0;do for(var n=!1,a=ji;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var u=0;else{var d=a.suspendedLanes,g=a.pingedLanes;u=(1<<31-ct(42|e)+1)-1,u&=r&~(d&~g),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,vd(a,u))}else u=ye,u=Ql(a,a===Ce?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Ga(a,u)||(n=!0,vd(a,u));a=a.next}while(n);ps=!1}}function Mm(){hd()}function hd(){Ui=ds=!1;var e=0;Fn!==0&&(Bm()&&(e=Fn),Fn=0);for(var t=Rt(),n=null,a=ji;a!==null;){var r=a.next,u=md(a,t);u===0?(a.next=null,n===null?ji=r:n.next=r,r===null&&(Ra=n)):(n=a,(e!==0||(u&3)!==0)&&(Ui=!0)),a=r}Ol(e)}function md(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-ct(u),g=1<<d,y=r[d];y===-1?((g&n)===0||(g&a)!==0)&&(r[d]=Wp(g,t)):y<=t&&(e.expiredLanes|=g),u&=~g}if(t=Ce,n=ye,n=Ql(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Er(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ga(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Er(a),Ar(n)){case 2:case 8:n=iu;break;case 32:n=Xl;break;case 268435456:n=ru;break;default:n=Xl}return a=gd.bind(null,e),n=wr(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Er(a),e.callbackPriority=2,e.callbackNode=null,2}function gd(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(qi()&&e.callbackNode!==n)return null;var a=ye;return a=Ql(e,e===Ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Wf(e,a,t),md(e,Rt()),e.callbackNode!=null&&e.callbackNode===n?gd.bind(null,e):null)}function vd(e,t){if(qi())return null;Wf(e,t,!0)}function Am(){Hm(function(){(Ee&6)!==0?wr(lu,Mm):hd()})}function hs(){return Fn===0&&(Fn=ou()),Fn}function bd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fl(""+e)}function yd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function zm(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var u=bd((r[at]||null).action),d=a.submitter;d&&(t=(t=d[at]||null)?bd(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var g=new ti("action","action",null,a,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Fn!==0){var y=d?yd(r,d):new FormData(r);Ro(n,{pending:!0,data:y,method:r.method,action:u},null,y)}}else typeof u=="function"&&(g.preventDefault(),y=d?yd(r,d):new FormData(r),Ro(n,{pending:!0,data:y,method:r.method,action:u},u,y))},currentTarget:r}]})}}for(var ms=0;ms<Wr.length;ms++){var gs=Wr[ms],_m=gs.toLowerCase(),Cm=gs[0].toUpperCase()+gs.slice(1);_t(_m,"on"+Cm)}_t(Fu,"onAnimationEnd"),_t(Wu,"onAnimationIteration"),_t(Iu,"onAnimationStart"),_t("dblclick","onDoubleClick"),_t("focusin","onFocus"),_t("focusout","onBlur"),_t(Zh,"onTransitionRun"),_t(Kh,"onTransitionStart"),_t(Jh,"onTransitionCancel"),_t(ec,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function xd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var d=a.length-1;0<=d;d--){var g=a[d],y=g.instance,D=g.currentTarget;if(g=g.listener,y!==u&&r.isPropagationStopped())break e;u=g,r.currentTarget=D;try{u(r)}catch(j){Ai(j)}r.currentTarget=null,u=y}else for(d=0;d<a.length;d++){if(g=a[d],y=g.instance,D=g.currentTarget,g=g.listener,y!==u&&r.isPropagationStopped())break e;u=g,r.currentTarget=D;try{u(r)}catch(j){Ai(j)}r.currentTarget=null,u=y}}}}function ve(e,t){var n=t[zr];n===void 0&&(n=t[zr]=new Set);var a=e+"__bubble";n.has(a)||(Sd(t,e,2,!1),n.add(a))}function vs(e,t,n){var a=0;t&&(a|=4),Sd(n,e,a,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function bs(e){if(!e[Gi]){e[Gi]=!0,pu.forEach(function(n){n!=="selectionchange"&&(Dm.has(n)||vs(n,!1,e),vs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,vs("selectionchange",!1,t))}}function Sd(e,t,n,a){switch(Pd(t)){case 2:var r=l0;break;case 8:r=i0;break;default:r=Ns}n=r.bind(null,t,n,e),r=void 0,!jr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function ys(e,t,n,a,r){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var g=a.stateNode.containerInfo;if(g===r)break;if(d===4)for(d=a.return;d!==null;){var y=d.tag;if((y===3||y===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;g!==null;){if(d=ta(g),d===null)return;if(y=d.tag,y===5||y===6||y===26||y===27){a=u=d;continue e}g=g.parentNode}}a=a.return}Au(function(){var D=u,j=Hr(n),Y=[];e:{var N=tc.get(e);if(N!==void 0){var R=ti,ue=e;switch(e){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":R=Oh;break;case"focusin":ue="focus",R=Xr;break;case"focusout":ue="blur",R=Xr;break;case"beforeblur":case"afterblur":R=Xr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=zh;break;case Fu:case Wu:case Iu:R=gh;break;case ec:R=Ch;break;case"scroll":case"scrollend":R=fh;break;case"wheel":R=Nh;break;case"copy":case"cut":case"paste":R=bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Nu;break;case"toggle":case"beforetoggle":R=Rh}var oe=(t&4)!==0,ze=!oe&&(e==="scroll"||e==="scrollend"),z=oe?N!==null?N+"Capture":null:N;oe=[];for(var E=D,C;E!==null;){var G=E;if(C=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||C===null||z===null||(G=Pa(E,z),G!=null&&oe.push(Al(E,G,C))),ze)break;E=E.return}0<oe.length&&(N=new R(N,ue,null,n,j),Y.push({event:N,listeners:oe}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",N&&n!==Lr&&(ue=n.relatedTarget||n.fromElement)&&(ta(ue)||ue[ea]))break e;if((R||N)&&(N=j.window===j?j:(N=j.ownerDocument)?N.defaultView||N.parentWindow:window,R?(ue=n.relatedTarget||n.toElement,R=D,ue=ue?ta(ue):null,ue!==null&&(ze=f(ue),oe=ue.tag,ue!==ze||oe!==5&&oe!==27&&oe!==6)&&(ue=null)):(R=null,ue=D),R!==ue)){if(oe=Cu,G="onMouseLeave",z="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Nu,G="onPointerLeave",z="onPointerEnter",E="pointer"),ze=R==null?N:Va(R),C=ue==null?N:Va(ue),N=new oe(G,E+"leave",R,n,j),N.target=ze,N.relatedTarget=C,G=null,ta(j)===D&&(oe=new oe(z,E+"enter",ue,n,j),oe.target=C,oe.relatedTarget=ze,G=oe),ze=G,R&&ue)t:{for(oe=R,z=ue,E=0,C=oe;C;C=Ba(C))E++;for(C=0,G=z;G;G=Ba(G))C++;for(;0<E-C;)oe=Ba(oe),E--;for(;0<C-E;)z=Ba(z),C--;for(;E--;){if(oe===z||z!==null&&oe===z.alternate)break t;oe=Ba(oe),z=Ba(z)}oe=null}else oe=null;R!==null&&Td(Y,N,R,oe,!1),ue!==null&&ze!==null&&Td(Y,ze,ue,oe,!0)}}e:{if(N=D?Va(D):window,R=N.nodeName&&N.nodeName.toLowerCase(),R==="select"||R==="input"&&N.type==="file")var te=Uu;else if(qu(N))if(Gu)te=Vh;else{te=Yh;var me=Gh}else R=N.nodeName,!R||R.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?D&&Br(D.elementType)&&(te=Uu):te=Xh;if(te&&(te=te(e,D))){ju(Y,te,n,j);break e}me&&me(e,N,D),e==="focusout"&&D&&N.type==="number"&&D.memoizedProps.value!=null&&Rr(N,"number",N.value)}switch(me=D?Va(D):window,e){case"focusin":(qu(me)||me.contentEditable==="true")&&(fa=me,Jr=D,Ia=null);break;case"focusout":Ia=Jr=fa=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":$r=!1,Ju(Y,n,j);break;case"selectionchange":if(Qh)break;case"keydown":case"keyup":Ju(Y,n,j)}var ae;if(Pr)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else ca?Lu(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(ku&&n.locale!=="ko"&&(ca||se!=="onCompositionStart"?se==="onCompositionEnd"&&ca&&(ae=zu()):(cn=j,Ur="value"in cn?cn.value:cn.textContent,ca=!0)),me=Yi(D,se),0<me.length&&(se=new Du(se,e,null,n,j),Y.push({event:se,listeners:me}),ae?se.data=ae:(ae=Hu(n),ae!==null&&(se.data=ae)))),(ae=Lh?Hh(e,n):qh(e,n))&&(se=Yi(D,"onBeforeInput"),0<se.length&&(me=new Du("onBeforeInput","beforeinput",null,n,j),Y.push({event:me,listeners:se}),me.data=ae)),zm(Y,e,D,n,j)}xd(Y,t)})}function Al(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=Pa(e,n),r!=null&&a.unshift(Al(e,r,u)),r=Pa(e,t),r!=null&&a.push(Al(e,r,u))),e.tag===3)return a;e=e.return}return[]}function Ba(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Td(e,t,n,a,r){for(var u=t._reactName,d=[];n!==null&&n!==a;){var g=n,y=g.alternate,D=g.stateNode;if(g=g.tag,y!==null&&y===a)break;g!==5&&g!==26&&g!==27||D===null||(y=D,r?(D=Pa(n,u),D!=null&&d.unshift(Al(n,D,y))):r||(D=Pa(n,u),D!=null&&d.push(Al(n,D,y)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Nm=/\r\n?/g,km=/\u0000|\uFFFD/g;function wd(e){return(typeof e=="string"?e:""+e).replace(Nm,`
`).replace(km,"")}function Ed(e,t){return t=wd(t),wd(e)===t}function Xi(){}function Ae(e,t,n,a,r,u){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||oa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&oa(e,""+a);break;case"className":Kl(e,"class",a);break;case"tabIndex":Kl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(e,n,a);break;case"style":Ou(e,a,u);break;case"data":if(t!=="object"){Kl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",r.name,r,null),Ae(e,t,"formEncType",r.formEncType,r,null),Ae(e,t,"formMethod",r.formMethod,r,null),Ae(e,t,"formTarget",r.formTarget,r,null)):(Ae(e,t,"encType",r.encType,r,null),Ae(e,t,"method",r.method,r,null),Ae(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Fl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Xi);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Fl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Zl(e,"popover",a);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Zl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=uh.get(n)||n,Zl(e,n,a))}}function xs(e,t,n,a,r,u){switch(n){case"style":Ou(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof a=="string"?oa(e,a):(typeof a=="number"||typeof a=="bigint")&&oa(e,""+a);break;case"onScroll":a!=null&&ve("scroll",e);break;case"onScrollEnd":a!=null&&ve("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),u=e[at]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,r),typeof a=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Zl(e,n,a)}}}function Fe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var a=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,u,d,n,null)}}r&&Ae(e,t,"srcSet",n.srcSet,n,null),a&&Ae(e,t,"src",n.src,n,null);return;case"input":ve("invalid",e);var g=u=d=r=null,y=null,D=null;for(a in n)if(n.hasOwnProperty(a)){var j=n[a];if(j!=null)switch(a){case"name":r=j;break;case"type":d=j;break;case"checked":y=j;break;case"defaultChecked":D=j;break;case"value":u=j;break;case"defaultValue":g=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:Ae(e,t,a,j,n,null)}}Su(e,u,g,y,D,d,r,!1),Jl(e);return;case"select":ve("invalid",e),a=d=u=null;for(r in n)if(n.hasOwnProperty(r)&&(g=n[r],g!=null))switch(r){case"value":u=g;break;case"defaultValue":d=g;break;case"multiple":a=g;default:Ae(e,t,r,g,n,null)}t=u,n=d,e.multiple=!!a,t!=null?ra(e,!!a,t,!1):n!=null&&ra(e,!!a,n,!0);return;case"textarea":ve("invalid",e),u=r=a=null;for(d in n)if(n.hasOwnProperty(d)&&(g=n[d],g!=null))switch(d){case"value":a=g;break;case"defaultValue":r=g;break;case"children":u=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(o(91));break;default:Ae(e,t,d,g,n,null)}wu(e,a,r,u),Jl(e);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ae(e,t,y,a,n,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(a=0;a<Ml.length;a++)ve(Ml[a],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(a=n[D],a!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ae(e,t,D,a,n,null)}return;default:if(Br(t)){for(j in n)n.hasOwnProperty(j)&&(a=n[j],a!==void 0&&xs(e,t,j,a,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(a=n[g],a!=null&&Ae(e,t,g,a,n,null))}function Rm(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,d=null,g=null,y=null,D=null,j=null;for(R in n){var Y=n[R];if(n.hasOwnProperty(R)&&Y!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":y=Y;default:a.hasOwnProperty(R)||Ae(e,t,R,null,a,Y)}}for(var N in a){var R=a[N];if(Y=n[N],a.hasOwnProperty(N)&&(R!=null||Y!=null))switch(N){case"type":u=R;break;case"name":r=R;break;case"checked":D=R;break;case"defaultChecked":j=R;break;case"value":d=R;break;case"defaultValue":g=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:R!==Y&&Ae(e,t,N,R,a,Y)}}kr(e,d,g,y,D,j,u,r);return;case"select":R=d=g=N=null;for(u in n)if(y=n[u],n.hasOwnProperty(u)&&y!=null)switch(u){case"value":break;case"multiple":R=y;default:a.hasOwnProperty(u)||Ae(e,t,u,null,a,y)}for(r in a)if(u=a[r],y=n[r],a.hasOwnProperty(r)&&(u!=null||y!=null))switch(r){case"value":N=u;break;case"defaultValue":g=u;break;case"multiple":d=u;default:u!==y&&Ae(e,t,r,u,a,y)}t=g,n=d,a=R,N!=null?ra(e,!!n,N,!1):!!a!=!!n&&(t!=null?ra(e,!!n,t,!0):ra(e,!!n,n?[]:"",!1));return;case"textarea":R=N=null;for(g in n)if(r=n[g],n.hasOwnProperty(g)&&r!=null&&!a.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ae(e,t,g,null,a,r)}for(d in a)if(r=a[d],u=n[d],a.hasOwnProperty(d)&&(r!=null||u!=null))switch(d){case"value":N=r;break;case"defaultValue":R=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==u&&Ae(e,t,d,r,a,u)}Tu(e,N,R);return;case"option":for(var ue in n)if(N=n[ue],n.hasOwnProperty(ue)&&N!=null&&!a.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ae(e,t,ue,null,a,N)}for(y in a)if(N=a[y],R=n[y],a.hasOwnProperty(y)&&N!==R&&(N!=null||R!=null))switch(y){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ae(e,t,y,N,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)N=n[oe],n.hasOwnProperty(oe)&&N!=null&&!a.hasOwnProperty(oe)&&Ae(e,t,oe,null,a,N);for(D in a)if(N=a[D],R=n[D],a.hasOwnProperty(D)&&N!==R&&(N!=null||R!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:Ae(e,t,D,N,a,R)}return;default:if(Br(t)){for(var ze in n)N=n[ze],n.hasOwnProperty(ze)&&N!==void 0&&!a.hasOwnProperty(ze)&&xs(e,t,ze,void 0,a,N);for(j in a)N=a[j],R=n[j],!a.hasOwnProperty(j)||N===R||N===void 0&&R===void 0||xs(e,t,j,N,a,R);return}}for(var z in n)N=n[z],n.hasOwnProperty(z)&&N!=null&&!a.hasOwnProperty(z)&&Ae(e,t,z,null,a,N);for(Y in a)N=a[Y],R=n[Y],!a.hasOwnProperty(Y)||N===R||N==null&&R==null||Ae(e,t,Y,N,a,R)}var Ss=null,Ts=null;function Vi(e){return e.nodeType===9?e:e.ownerDocument}function Od(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Md(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Es=null;function Bm(){var e=window.event;return e&&e.type==="popstate"?e===Es?!1:(Es=e,!0):(Es=null,!1)}var Ad=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(qm)}:Ad;function qm(e){setTimeout(function(){throw e})}function Mn(e){return e==="head"}function _d(e,t){var n=t,a=0,r=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<a&&8>a){n=a;var d=e.ownerDocument;if(n&1&&zl(d.documentElement),n&2&&zl(d.body),n&4)for(n=d.head,zl(n),d=n.firstChild;d;){var g=d.nextSibling,y=d.nodeName;d[Xa]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=g}}if(r===0){e.removeChild(u),Ll(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:a=n.charCodeAt(0)-48;else a=0;n=u}while(n);Ll(t)}function Os(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Os(n),_r(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function jm(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Xa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function Um(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Dt(e.nextSibling),e===null))return null;return e}function Ms(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Gm(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var As=null;function Cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Dd(e,t,n){switch(t=Vi(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function zl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_r(e)}var zt=new Map,Nd=new Set;function Pi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var an=Q.d;Q.d={f:Ym,r:Xm,D:Vm,C:Pm,L:Qm,m:Zm,X:Jm,S:Km,M:$m};function Ym(){var e=an.f(),t=Li();return e||t}function Xm(e){var t=na(e);t!==null&&t.tag===5&&t.type==="form"?Fc(t):an.r(e)}var La=typeof document>"u"?null:document;function kd(e,t,n){var a=La;if(a&&typeof t=="string"&&t){var r=St(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Nd.has(r)||(Nd.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Fe(t,"link",e),Ve(t),a.head.appendChild(t)))}}function Vm(e){an.D(e),kd("dns-prefetch",e,null)}function Pm(e,t){an.C(e,t),kd("preconnect",e,t)}function Qm(e,t,n){an.L(e,t,n);var a=La;if(a&&e&&t){var r='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+St(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+St(n.imageSizes)+'"]')):r+='[href="'+St(e)+'"]';var u=r;switch(t){case"style":u=Ha(e);break;case"script":u=qa(e)}zt.has(u)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),zt.set(u,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(_l(u))||t==="script"&&a.querySelector(Cl(u))||(t=a.createElement("link"),Fe(t,"link",e),Ve(t),a.head.appendChild(t)))}}function Zm(e,t){an.m(e,t);var n=La;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+St(a)+'"][href="'+St(e)+'"]',u=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=qa(e)}if(!zt.has(u)&&(e=b({rel:"modulepreload",href:e},t),zt.set(u,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cl(u)))return}a=n.createElement("link"),Fe(a,"link",e),Ve(a),n.head.appendChild(a)}}}function Km(e,t,n){an.S(e,t,n);var a=La;if(a&&e){var r=aa(a).hoistableStyles,u=Ha(e);t=t||"default";var d=r.get(u);if(!d){var g={loading:0,preload:null};if(d=a.querySelector(_l(u)))g.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=zt.get(u))&&zs(e,n);var y=d=a.createElement("link");Ve(y),Fe(y,"link",e),y._p=new Promise(function(D,j){y.onload=D,y.onerror=j}),y.addEventListener("load",function(){g.loading|=1}),y.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Qi(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:g},r.set(u,d)}}}function Jm(e,t){an.X(e,t);var n=La;if(n&&e){var a=aa(n).hoistableScripts,r=qa(e),u=a.get(r);u||(u=n.querySelector(Cl(r)),u||(e=b({src:e,async:!0},t),(t=zt.get(r))&&_s(e,t),u=n.createElement("script"),Ve(u),Fe(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function $m(e,t){an.M(e,t);var n=La;if(n&&e){var a=aa(n).hoistableScripts,r=qa(e),u=a.get(r);u||(u=n.querySelector(Cl(r)),u||(e=b({src:e,async:!0,type:"module"},t),(t=zt.get(r))&&_s(e,t),u=n.createElement("script"),Ve(u),Fe(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function Rd(e,t,n,a){var r=(r=fe.current)?Pi(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ha(n.href),n=aa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ha(n.href);var u=aa(r).hoistableStyles,d=u.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=r.querySelector(_l(e)))&&!u._p&&(d.instance=u,d.state.loading=5),zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zt.set(e,n),u||Fm(r,e,n,d.state))),t&&a===null)throw Error(o(528,""));return d}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qa(n),n=aa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ha(e){return'href="'+St(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function Bd(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Fm(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Fe(t,"link",n),Ve(t),e.head.appendChild(t))}function qa(e){return'[src="'+St(e)+'"]'}function Cl(e){return"script[async]"+e}function Ld(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+St(n.href)+'"]');if(a)return t.instance=a,Ve(a),a;var r=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ve(a),Fe(a,"style",r),Qi(a,n.precedence,e),t.instance=a;case"stylesheet":r=Ha(n.href);var u=e.querySelector(_l(r));if(u)return t.state.loading|=4,t.instance=u,Ve(u),u;a=Bd(n),(r=zt.get(r))&&zs(a,r),u=(e.ownerDocument||e).createElement("link"),Ve(u);var d=u;return d._p=new Promise(function(g,y){d.onload=g,d.onerror=y}),Fe(u,"link",a),t.state.loading|=4,Qi(u,n.precedence,e),t.instance=u;case"script":return u=qa(n.src),(r=e.querySelector(Cl(u)))?(t.instance=r,Ve(r),r):(a=n,(r=zt.get(u))&&(a=b({},n),_s(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ve(r),Fe(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Qi(a,n.precedence,e));return t.instance}function Qi(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,u=r,d=0;d<a.length;d++){var g=a[d];if(g.dataset.precedence===t)u=g;else if(u!==r)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function zs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _s(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zi=null;function Hd(e,t,n){if(Zi===null){var a=new Map,r=Zi=new Map;r.set(n,a)}else r=Zi,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var u=n[r];if(!(u[Xa]||u[We]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var g=a.get(d);g?g.push(u):a.set(d,[u])}}return a}function qd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Wm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Dl=null;function Im(){}function e0(e,t,n){if(Dl===null)throw Error(o(475));var a=Dl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Ha(n.href),u=e.querySelector(_l(r));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Ki.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=u,Ve(u);return}u=e.ownerDocument||e,n=Bd(n),(r=zt.get(r))&&zs(n,r),u=u.createElement("link"),Ve(u);var d=u;d._p=new Promise(function(g,y){d.onload=g,d.onerror=y}),Fe(u,"link",n),t.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Ki.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function t0(){if(Dl===null)throw Error(o(475));var e=Dl;return e.stylesheets&&e.count===0&&Cs(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Cs(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Ki(){if(this.count--,this.count===0){if(this.stylesheets)Cs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ji=null;function Cs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ji=new Map,t.forEach(n0,e),Ji=null,Ki.call(e))}function n0(e,t){if(!(t.state.loading&4)){var n=Ji.get(e);if(n)var a=n.get(null);else{n=new Map,Ji.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var d=r[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}r=t.instance,d=r.getAttribute("data-precedence"),u=n.get(d)||a,u===a&&n.set(null,r),n.set(d,r),this.count++,a=Ki.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),u?u.parentNode.insertBefore(r,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Nl={$$typeof:O,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function a0(e,t,n,a,r,u,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.hiddenUpdates=Or(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Ud(e,t,n,a,r,u,d,g,y,D,j,Y){return e=new a0(e,t,n,d,g,y,D,Y),t=1,u===!0&&(t|=24),u=dt(3,null,null,t),e.current=u,u.stateNode=e,t=co(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:t},mo(u),e}function Gd(e){return e?(e=ma,e):ma}function Yd(e,t,n,a,r,u){r=Gd(r),a.context===null?a.context=r:a.pendingContext=r,a=pn(t),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=hn(e,a,t),n!==null&&(vt(n,e,t),sl(n,e,t))}function Xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ds(e,t){Xd(e,t),(e=e.alternate)&&Xd(e,t)}function Vd(e){if(e.tag===13){var t=ha(e,67108864);t!==null&&vt(t,e,67108864),Ds(e,67108864)}}var $i=!0;function l0(e,t,n,a){var r=_.T;_.T=null;var u=Q.p;try{Q.p=2,Ns(e,t,n,a)}finally{Q.p=u,_.T=r}}function i0(e,t,n,a){var r=_.T;_.T=null;var u=Q.p;try{Q.p=8,Ns(e,t,n,a)}finally{Q.p=u,_.T=r}}function Ns(e,t,n,a){if($i){var r=ks(a);if(r===null)ys(e,t,a,Fi,n),Qd(e,a);else if(o0(r,e,t,n,a))a.stopPropagation();else if(Qd(e,a),t&4&&-1<r0.indexOf(e)){for(;r!==null;){var u=na(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=Rn(u.pendingLanes);if(d!==0){var g=u;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var y=1<<31-ct(d);g.entanglements[1]|=y,d&=~y}jt(u),(Ee&6)===0&&(Ri=Rt()+500,Ol(0))}}break;case 13:g=ha(u,2),g!==null&&vt(g,u,2),Li(),Ds(u,2)}if(u=ks(a),u===null&&ys(e,t,a,Fi,n),u===r)break;r=u}r!==null&&a.stopPropagation()}else ys(e,t,a,null,n)}}function ks(e){return e=Hr(e),Rs(e)}var Fi=null;function Rs(e){if(Fi=null,e=ta(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fi=e,null}function Pd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pp()){case lu:return 2;case iu:return 8;case Xl:case Qp:return 32;case ru:return 268435456;default:return 32}default:return 32}}var Bs=!1,An=null,zn=null,_n=null,kl=new Map,Rl=new Map,Cn=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qd(e,t){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(t.pointerId)}}function Bl(e,t,n,a,r,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[r]},t!==null&&(t=na(t),t!==null&&Vd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function o0(e,t,n,a,r){switch(t){case"focusin":return An=Bl(An,e,t,n,a,r),!0;case"dragenter":return zn=Bl(zn,e,t,n,a,r),!0;case"mouseover":return _n=Bl(_n,e,t,n,a,r),!0;case"pointerover":var u=r.pointerId;return kl.set(u,Bl(kl.get(u)||null,e,t,n,a,r)),!0;case"gotpointercapture":return u=r.pointerId,Rl.set(u,Bl(Rl.get(u)||null,e,t,n,a,r)),!0}return!1}function Zd(e){var t=ta(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,eh(e.priority,function(){if(n.tag===13){var a=gt();a=Mr(a);var r=ha(n,a);r!==null&&vt(r,n,a),Ds(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Lr=a,n.target.dispatchEvent(a),Lr=null}else return t=na(n),t!==null&&Vd(t),e.blockedOn=n,!1;t.shift()}return!0}function Kd(e,t,n){Wi(e)&&n.delete(t)}function s0(){Bs=!1,An!==null&&Wi(An)&&(An=null),zn!==null&&Wi(zn)&&(zn=null),_n!==null&&Wi(_n)&&(_n=null),kl.forEach(Kd),Rl.forEach(Kd)}function Ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Bs||(Bs=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,s0)))}var er=null;function Jd(e){er!==e&&(er=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){er===e&&(er=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Rs(a||n)===null)continue;break}var u=na(n);u!==null&&(e.splice(t,3),t-=3,Ro(u,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function Ll(e){function t(y){return Ii(y,e)}An!==null&&Ii(An,e),zn!==null&&Ii(zn,e),_n!==null&&Ii(_n,e),kl.forEach(t),Rl.forEach(t);for(var n=0;n<Cn.length;n++){var a=Cn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)Zd(n),n.blockedOn===null&&Cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],u=n[a+1],d=r[at]||null;if(typeof u=="function")d||Jd(n);else if(d){var g=null;if(u&&u.hasAttribute("formAction")){if(r=u,d=u[at]||null)g=d.formAction;else if(Rs(r)!==null)continue}else g=d.action;typeof g=="function"?n[a+1]=g:(n.splice(a,3),a-=3),Jd(n)}}}function Ls(e){this._internalRoot=e}tr.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,a=gt();Yd(n,a,e,t,null,null)},tr.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yd(e.current,2,null,e,null,null),Li(),t[ea]=null}};function tr(e){this._internalRoot=e}tr.prototype.unstable_scheduleHydration=function(e){if(e){var t=fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cn.length&&t!==0&&t<Cn[n].priority;n++);Cn.splice(n,0,e),n===0&&Zd(e)}};var $d=l.version;if($d!=="19.1.1")throw Error(o(527,$d,"19.1.1"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var u0={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{Ua=nr.inject(u0),ut=nr}catch{}}return ql.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,a="",r=df,u=pf,d=hf,g=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=Ud(e,1,!1,null,null,n,a,r,u,d,g,null),e[ea]=t.current,bs(e),new Ls(t)},ql.hydrateRoot=function(e,t,n){if(!c(e))throw Error(o(299));var a=!1,r="",u=df,d=pf,g=hf,y=null,D=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(D=n.formState)),t=Ud(e,1,!0,t,n??null,a,r,u,d,g,y,D),t.context=Gd(null),n=t.current,a=gt(),a=Mr(a),r=pn(a),r.callback=null,hn(n,r,a),n=a,t.current.lanes=n,Ya(t,n),jt(t),e[ea]=t.current,bs(e),new tr(t)},ql.version="19.1.1",ql}var rp;function x0(){if(rp)return js.exports;rp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),js.exports=y0(),js.exports}var S0=x0();const T0="/assets/bg-image-VD33_2m8.webp",w0="/assets/bg-image4-Bo0BT07M.webp",E0="/assets/bg-image5-DMj4zC43.webp";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M0=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,s,o)=>o?o.toUpperCase():s.toLowerCase()),op=i=>{const l=M0(i);return l.charAt(0).toUpperCase()+l.slice(1)},Sp=(...i)=>i.filter((l,s,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===s).join(" ").trim(),A0=i=>{for(const l in i)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var z0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=be.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:c="",children:f,iconNode:m,...v},h)=>be.createElement("svg",{ref:h,...z0,width:l,height:l,stroke:i,strokeWidth:o?Number(s)*24/Number(l):s,className:Sp("lucide",c),...!f&&!A0(v)&&{"aria-hidden":"true"},...v},[...m.map(([p,b])=>be.createElement(p,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=(i,l)=>{const s=be.forwardRef(({className:o,...c},f)=>be.createElement(_0,{ref:f,iconNode:l,className:Sp(`lucide-${O0(op(i))}`,`lucide-${i}`,o),...c}));return s.displayName=op(i),s};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],D0=In("calendar",C0);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],sp=In("circle-check-big",N0);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],fr=In("eye-off",k0);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],dr=In("eye",R0);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],L0=In("mail",B0);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ar=In("user",H0);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],j0=In("users",q0);function up(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function nu(i,l){i===void 0&&(i={}),l===void 0&&(l={});const s=["__proto__","constructor","prototype"];Object.keys(l).filter(o=>s.indexOf(o)<0).forEach(o=>{typeof i[o]>"u"?i[o]=l[o]:up(l[o])&&up(i[o])&&Object.keys(l[o]).length>0&&nu(i[o],l[o])})}const Tp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Yt(){const i=typeof document<"u"?document:{};return nu(i,Tp),i}const U0={document:Tp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function nt(){const i=typeof window<"u"?window:{};return nu(i,U0),i}function G0(i){return i===void 0&&(i=""),i.trim().split(" ").filter(l=>!!l.trim())}function Y0(i){const l=i;Object.keys(l).forEach(s=>{try{l[s]=null}catch{}try{delete l[s]}catch{}})}function wp(i,l){return l===void 0&&(l=0),setTimeout(i,l)}function pr(){return Date.now()}function X0(i){const l=nt();let s;return l.getComputedStyle&&(s=l.getComputedStyle(i,null)),!s&&i.currentStyle&&(s=i.currentStyle),s||(s=i.style),s}function V0(i,l){l===void 0&&(l="x");const s=nt();let o,c,f;const m=X0(i);return s.WebKitCSSMatrix?(c=m.transform||m.webkitTransform,c.split(",").length>6&&(c=c.split(", ").map(v=>v.replace(",",".")).join(", ")),f=new s.WebKitCSSMatrix(c==="none"?"":c)):(f=m.MozTransform||m.OTransform||m.MsTransform||m.msTransform||m.transform||m.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),o=f.toString().split(",")),l==="x"&&(s.WebKitCSSMatrix?c=f.m41:o.length===16?c=parseFloat(o[12]):c=parseFloat(o[4])),l==="y"&&(s.WebKitCSSMatrix?c=f.m42:o.length===16?c=parseFloat(o[13]):c=parseFloat(o[5])),c||0}function lr(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function P0(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function yt(){const i=Object(arguments.length<=0?void 0:arguments[0]),l=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const o=s<0||arguments.length<=s?void 0:arguments[s];if(o!=null&&!P0(o)){const c=Object.keys(Object(o)).filter(f=>l.indexOf(f)<0);for(let f=0,m=c.length;f<m;f+=1){const v=c[f],h=Object.getOwnPropertyDescriptor(o,v);h!==void 0&&h.enumerable&&(lr(i[v])&&lr(o[v])?o[v].__swiper__?i[v]=o[v]:yt(i[v],o[v]):!lr(i[v])&&lr(o[v])?(i[v]={},o[v].__swiper__?i[v]=o[v]:yt(i[v],o[v])):i[v]=o[v])}}}return i}function ir(i,l,s){i.style.setProperty(l,s)}function Ep(i){let{swiper:l,targetPosition:s,side:o}=i;const c=nt(),f=-l.translate;let m=null,v;const h=l.params.speed;l.wrapperEl.style.scrollSnapType="none",c.cancelAnimationFrame(l.cssModeFrameID);const p=s>f?"next":"prev",b=(A,B)=>p==="next"&&A>=B||p==="prev"&&A<=B,S=()=>{v=new Date().getTime(),m===null&&(m=v);const A=Math.max(Math.min((v-m)/h,1),0),B=.5-Math.cos(A*Math.PI)/2;let T=f+B*(s-f);if(b(T,s)&&(T=s),l.wrapperEl.scrollTo({[o]:T}),b(T,s)){l.wrapperEl.style.overflow="hidden",l.wrapperEl.style.scrollSnapType="",setTimeout(()=>{l.wrapperEl.style.overflow="",l.wrapperEl.scrollTo({[o]:T})}),c.cancelAnimationFrame(l.cssModeFrameID);return}l.cssModeFrameID=c.requestAnimationFrame(S)};S()}function Gt(i,l){l===void 0&&(l="");const s=nt(),o=[...i.children];return s.HTMLSlotElement&&i instanceof HTMLSlotElement&&o.push(...i.assignedElements()),l?o.filter(c=>c.matches(l)):o}function Q0(i,l){const s=[l];for(;s.length>0;){const o=s.shift();if(i===o)return!0;s.push(...o.children,...o.shadowRoot?o.shadowRoot.children:[],...o.assignedElements?o.assignedElements():[])}}function Z0(i,l){const s=nt();let o=l.contains(i);return!o&&s.HTMLSlotElement&&l instanceof HTMLSlotElement&&(o=[...l.assignedElements()].includes(i),o||(o=Q0(i,l))),o}function hr(i){try{console.warn(i);return}catch{}}function mr(i,l){l===void 0&&(l=[]);const s=document.createElement(i);return s.classList.add(...Array.isArray(l)?l:G0(l)),s}function K0(i,l){const s=[];for(;i.previousElementSibling;){const o=i.previousElementSibling;l?o.matches(l)&&s.push(o):s.push(o),i=o}return s}function J0(i,l){const s=[];for(;i.nextElementSibling;){const o=i.nextElementSibling;l?o.matches(l)&&s.push(o):s.push(o),i=o}return s}function kn(i,l){return nt().getComputedStyle(i,null).getPropertyValue(l)}function gr(i){let l=i,s;if(l){for(s=0;(l=l.previousSibling)!==null;)l.nodeType===1&&(s+=1);return s}}function Op(i,l){const s=[];let o=i.parentElement;for(;o;)l?o.matches(l)&&s.push(o):s.push(o),o=o.parentElement;return s}function Fs(i,l,s){const o=nt();return i[l==="width"?"offsetWidth":"offsetHeight"]+parseFloat(o.getComputedStyle(i,null).getPropertyValue(l==="width"?"margin-right":"margin-top"))+parseFloat(o.getComputedStyle(i,null).getPropertyValue(l==="width"?"margin-left":"margin-bottom"))}function Ke(i){return(Array.isArray(i)?i:[i]).filter(l=>!!l)}function vr(i,l){l===void 0&&(l=""),typeof trustedTypes<"u"?i.innerHTML=trustedTypes.createPolicy("html",{createHTML:s=>s}).createHTML(l):i.innerHTML=l}let Xs;function $0(){const i=nt(),l=Yt();return{smoothScroll:l.documentElement&&l.documentElement.style&&"scrollBehavior"in l.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&l instanceof i.DocumentTouch)}}function Mp(){return Xs||(Xs=$0()),Xs}let Vs;function F0(i){let{userAgent:l}=i===void 0?{}:i;const s=Mp(),o=nt(),c=o.navigator.platform,f=l||o.navigator.userAgent,m={ios:!1,android:!1},v=o.screen.width,h=o.screen.height,p=f.match(/(Android);?[\s\/]+([\d.]+)?/);let b=f.match(/(iPad).*OS\s([\d_]+)/);const S=f.match(/(iPod)(.*OS\s([\d_]+))?/),A=!b&&f.match(/(iPhone\sOS|iOS)\s([\d_]+)/),B=c==="Win32";let T=c==="MacIntel";const M=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!b&&T&&s.touch&&M.indexOf(`${v}x${h}`)>=0&&(b=f.match(/(Version)\/([\d.]+)/),b||(b=[0,1,"13_0_0"]),T=!1),p&&!B&&(m.os="android",m.android=!0),(b||A||S)&&(m.os="ios",m.ios=!0),m}function Ap(i){return i===void 0&&(i={}),Vs||(Vs=F0(i)),Vs}let Ps;function W0(){const i=nt(),l=Ap();let s=!1;function o(){const v=i.navigator.userAgent.toLowerCase();return v.indexOf("safari")>=0&&v.indexOf("chrome")<0&&v.indexOf("android")<0}if(o()){const v=String(i.navigator.userAgent);if(v.includes("Version/")){const[h,p]=v.split("Version/")[1].split(" ")[0].split(".").map(b=>Number(b));s=h<16||h===16&&p<2}}const c=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),f=o(),m=f||c&&l.ios;return{isSafari:s||f,needPerspectiveFix:s,need3dFix:m,isWebView:c}}function zp(){return Ps||(Ps=W0()),Ps}function I0(i){let{swiper:l,on:s,emit:o}=i;const c=nt();let f=null,m=null;const v=()=>{!l||l.destroyed||!l.initialized||(o("beforeResize"),o("resize"))},h=()=>{!l||l.destroyed||!l.initialized||(f=new ResizeObserver(S=>{m=c.requestAnimationFrame(()=>{const{width:A,height:B}=l;let T=A,M=B;S.forEach(U=>{let{contentBoxSize:k,contentRect:w,target:O}=U;O&&O!==l.el||(T=w?w.width:(k[0]||k).inlineSize,M=w?w.height:(k[0]||k).blockSize)}),(T!==A||M!==B)&&v()})}),f.observe(l.el))},p=()=>{m&&c.cancelAnimationFrame(m),f&&f.unobserve&&l.el&&(f.unobserve(l.el),f=null)},b=()=>{!l||l.destroyed||!l.initialized||o("orientationchange")};s("init",()=>{if(l.params.resizeObserver&&typeof c.ResizeObserver<"u"){h();return}c.addEventListener("resize",v),c.addEventListener("orientationchange",b)}),s("destroy",()=>{p(),c.removeEventListener("resize",v),c.removeEventListener("orientationchange",b)})}function eg(i){let{swiper:l,extendParams:s,on:o,emit:c}=i;const f=[],m=nt(),v=function(b,S){S===void 0&&(S={});const A=m.MutationObserver||m.WebkitMutationObserver,B=new A(T=>{if(l.__preventObserver__)return;if(T.length===1){c("observerUpdate",T[0]);return}const M=function(){c("observerUpdate",T[0])};m.requestAnimationFrame?m.requestAnimationFrame(M):m.setTimeout(M,0)});B.observe(b,{attributes:typeof S.attributes>"u"?!0:S.attributes,childList:l.isElement||(typeof S.childList>"u"?!0:S).childList,characterData:typeof S.characterData>"u"?!0:S.characterData}),f.push(B)},h=()=>{if(l.params.observer){if(l.params.observeParents){const b=Op(l.hostEl);for(let S=0;S<b.length;S+=1)v(b[S])}v(l.hostEl,{childList:l.params.observeSlideChildren}),v(l.wrapperEl,{attributes:!1})}},p=()=>{f.forEach(b=>{b.disconnect()}),f.splice(0,f.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),o("init",h),o("destroy",p)}var tg={on(i,l,s){const o=this;if(!o.eventsListeners||o.destroyed||typeof l!="function")return o;const c=s?"unshift":"push";return i.split(" ").forEach(f=>{o.eventsListeners[f]||(o.eventsListeners[f]=[]),o.eventsListeners[f][c](l)}),o},once(i,l,s){const o=this;if(!o.eventsListeners||o.destroyed||typeof l!="function")return o;function c(){o.off(i,c),c.__emitterProxy&&delete c.__emitterProxy;for(var f=arguments.length,m=new Array(f),v=0;v<f;v++)m[v]=arguments[v];l.apply(o,m)}return c.__emitterProxy=l,o.on(i,c,s)},onAny(i,l){const s=this;if(!s.eventsListeners||s.destroyed||typeof i!="function")return s;const o=l?"unshift":"push";return s.eventsAnyListeners.indexOf(i)<0&&s.eventsAnyListeners[o](i),s},offAny(i){const l=this;if(!l.eventsListeners||l.destroyed||!l.eventsAnyListeners)return l;const s=l.eventsAnyListeners.indexOf(i);return s>=0&&l.eventsAnyListeners.splice(s,1),l},off(i,l){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||i.split(" ").forEach(o=>{typeof l>"u"?s.eventsListeners[o]=[]:s.eventsListeners[o]&&s.eventsListeners[o].forEach((c,f)=>{(c===l||c.__emitterProxy&&c.__emitterProxy===l)&&s.eventsListeners[o].splice(f,1)})}),s},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let l,s,o;for(var c=arguments.length,f=new Array(c),m=0;m<c;m++)f[m]=arguments[m];return typeof f[0]=="string"||Array.isArray(f[0])?(l=f[0],s=f.slice(1,f.length),o=i):(l=f[0].events,s=f[0].data,o=f[0].context||i),s.unshift(o),(Array.isArray(l)?l:l.split(" ")).forEach(h=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(p=>{p.apply(o,[h,...s])}),i.eventsListeners&&i.eventsListeners[h]&&i.eventsListeners[h].forEach(p=>{p.apply(o,s)})}),i}};function ng(){const i=this;let l,s;const o=i.el;typeof i.params.width<"u"&&i.params.width!==null?l=i.params.width:l=o.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?s=i.params.height:s=o.clientHeight,!(l===0&&i.isHorizontal()||s===0&&i.isVertical())&&(l=l-parseInt(kn(o,"padding-left")||0,10)-parseInt(kn(o,"padding-right")||0,10),s=s-parseInt(kn(o,"padding-top")||0,10)-parseInt(kn(o,"padding-bottom")||0,10),Number.isNaN(l)&&(l=0),Number.isNaN(s)&&(s=0),Object.assign(i,{width:l,height:s,size:i.isHorizontal()?l:s}))}function ag(){const i=this;function l(Z,$){return parseFloat(Z.getPropertyValue(i.getDirectionLabel($))||0)}const s=i.params,{wrapperEl:o,slidesEl:c,size:f,rtlTranslate:m,wrongRTL:v}=i,h=i.virtual&&s.virtual.enabled,p=h?i.virtual.slides.length:i.slides.length,b=Gt(c,`.${i.params.slideClass}, swiper-slide`),S=h?i.virtual.slides.length:b.length;let A=[];const B=[],T=[];let M=s.slidesOffsetBefore;typeof M=="function"&&(M=s.slidesOffsetBefore.call(i));let U=s.slidesOffsetAfter;typeof U=="function"&&(U=s.slidesOffsetAfter.call(i));const k=i.snapGrid.length,w=i.slidesGrid.length;let O=s.spaceBetween,H=-M,L=0,K=0;if(typeof f>"u")return;typeof O=="string"&&O.indexOf("%")>=0?O=parseFloat(O.replace("%",""))/100*f:typeof O=="string"&&(O=parseFloat(O)),i.virtualSize=-O,b.forEach(Z=>{m?Z.style.marginLeft="":Z.style.marginRight="",Z.style.marginBottom="",Z.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(ir(o,"--swiper-centered-offset-before",""),ir(o,"--swiper-centered-offset-after",""));const F=s.grid&&s.grid.rows>1&&i.grid;F?i.grid.initSlides(b):i.grid&&i.grid.unsetSlides();let J;const V=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(Z=>typeof s.breakpoints[Z].slidesPerView<"u").length>0;for(let Z=0;Z<S;Z+=1){J=0;let $;if(b[Z]&&($=b[Z]),F&&i.grid.updateSlide(Z,$,b),!(b[Z]&&kn($,"display")==="none")){if(s.slidesPerView==="auto"){V&&(b[Z].style[i.getDirectionLabel("width")]="");const ee=getComputedStyle($),ie=$.style.transform,he=$.style.webkitTransform;if(ie&&($.style.transform="none"),he&&($.style.webkitTransform="none"),s.roundLengths)J=i.isHorizontal()?Fs($,"width"):Fs($,"height");else{const ce=l(ee,"width"),_=l(ee,"padding-left"),Q=l(ee,"padding-right"),P=l(ee,"margin-left"),ne=l(ee,"margin-right"),x=ee.getPropertyValue("box-sizing");if(x&&x==="border-box")J=ce+P+ne;else{const{clientWidth:X,offsetWidth:W}=$;J=ce+_+Q+P+ne+(W-X)}}ie&&($.style.transform=ie),he&&($.style.webkitTransform=he),s.roundLengths&&(J=Math.floor(J))}else J=(f-(s.slidesPerView-1)*O)/s.slidesPerView,s.roundLengths&&(J=Math.floor(J)),b[Z]&&(b[Z].style[i.getDirectionLabel("width")]=`${J}px`);b[Z]&&(b[Z].swiperSlideSize=J),T.push(J),s.centeredSlides?(H=H+J/2+L/2+O,L===0&&Z!==0&&(H=H-f/2-O),Z===0&&(H=H-f/2-O),Math.abs(H)<1/1e3&&(H=0),s.roundLengths&&(H=Math.floor(H)),K%s.slidesPerGroup===0&&A.push(H),B.push(H)):(s.roundLengths&&(H=Math.floor(H)),(K-Math.min(i.params.slidesPerGroupSkip,K))%i.params.slidesPerGroup===0&&A.push(H),B.push(H),H=H+J+O),i.virtualSize+=J+O,L=J,K+=1}}if(i.virtualSize=Math.max(i.virtualSize,f)+U,m&&v&&(s.effect==="slide"||s.effect==="coverflow")&&(o.style.width=`${i.virtualSize+O}px`),s.setWrapperSize&&(o.style[i.getDirectionLabel("width")]=`${i.virtualSize+O}px`),F&&i.grid.updateWrapperSize(J,A),!s.centeredSlides){const Z=[];for(let $=0;$<A.length;$+=1){let ee=A[$];s.roundLengths&&(ee=Math.floor(ee)),A[$]<=i.virtualSize-f&&Z.push(ee)}A=Z,Math.floor(i.virtualSize-f)-Math.floor(A[A.length-1])>1&&A.push(i.virtualSize-f)}if(h&&s.loop){const Z=T[0]+O;if(s.slidesPerGroup>1){const $=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/s.slidesPerGroup),ee=Z*s.slidesPerGroup;for(let ie=0;ie<$;ie+=1)A.push(A[A.length-1]+ee)}for(let $=0;$<i.virtual.slidesBefore+i.virtual.slidesAfter;$+=1)s.slidesPerGroup===1&&A.push(A[A.length-1]+Z),B.push(B[B.length-1]+Z),i.virtualSize+=Z}if(A.length===0&&(A=[0]),O!==0){const Z=i.isHorizontal()&&m?"marginLeft":i.getDirectionLabel("marginRight");b.filter(($,ee)=>!s.cssMode||s.loop?!0:ee!==b.length-1).forEach($=>{$.style[Z]=`${O}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let Z=0;T.forEach(ee=>{Z+=ee+(O||0)}),Z-=O;const $=Z>f?Z-f:0;A=A.map(ee=>ee<=0?-M:ee>$?$+U:ee)}if(s.centerInsufficientSlides){let Z=0;T.forEach(ee=>{Z+=ee+(O||0)}),Z-=O;const $=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(Z+$<f){const ee=(f-Z-$)/2;A.forEach((ie,he)=>{A[he]=ie-ee}),B.forEach((ie,he)=>{B[he]=ie+ee})}}if(Object.assign(i,{slides:b,snapGrid:A,slidesGrid:B,slidesSizesGrid:T}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){ir(o,"--swiper-centered-offset-before",`${-A[0]}px`),ir(o,"--swiper-centered-offset-after",`${i.size/2-T[T.length-1]/2}px`);const Z=-i.snapGrid[0],$=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(ee=>ee+Z),i.slidesGrid=i.slidesGrid.map(ee=>ee+$)}if(S!==p&&i.emit("slidesLengthChange"),A.length!==k&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),B.length!==w&&i.emit("slidesGridLengthChange"),s.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!h&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const Z=`${s.containerModifierClass}backface-hidden`,$=i.el.classList.contains(Z);S<=s.maxBackfaceHiddenSlides?$||i.el.classList.add(Z):$&&i.el.classList.remove(Z)}}function lg(i){const l=this,s=[],o=l.virtual&&l.params.virtual.enabled;let c=0,f;typeof i=="number"?l.setTransition(i):i===!0&&l.setTransition(l.params.speed);const m=v=>o?l.slides[l.getSlideIndexByData(v)]:l.slides[v];if(l.params.slidesPerView!=="auto"&&l.params.slidesPerView>1)if(l.params.centeredSlides)(l.visibleSlides||[]).forEach(v=>{s.push(v)});else for(f=0;f<Math.ceil(l.params.slidesPerView);f+=1){const v=l.activeIndex+f;if(v>l.slides.length&&!o)break;s.push(m(v))}else s.push(m(l.activeIndex));for(f=0;f<s.length;f+=1)if(typeof s[f]<"u"){const v=s[f].offsetHeight;c=v>c?v:c}(c||c===0)&&(l.wrapperEl.style.height=`${c}px`)}function ig(){const i=this,l=i.slides,s=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let o=0;o<l.length;o+=1)l[o].swiperSlideOffset=(i.isHorizontal()?l[o].offsetLeft:l[o].offsetTop)-s-i.cssOverflowAdjustment()}const cp=(i,l,s)=>{l&&!i.classList.contains(s)?i.classList.add(s):!l&&i.classList.contains(s)&&i.classList.remove(s)};function rg(i){i===void 0&&(i=this&&this.translate||0);const l=this,s=l.params,{slides:o,rtlTranslate:c,snapGrid:f}=l;if(o.length===0)return;typeof o[0].swiperSlideOffset>"u"&&l.updateSlidesOffset();let m=-i;c&&(m=i),l.visibleSlidesIndexes=[],l.visibleSlides=[];let v=s.spaceBetween;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*l.size:typeof v=="string"&&(v=parseFloat(v));for(let h=0;h<o.length;h+=1){const p=o[h];let b=p.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(b-=o[0].swiperSlideOffset);const S=(m+(s.centeredSlides?l.minTranslate():0)-b)/(p.swiperSlideSize+v),A=(m-f[0]+(s.centeredSlides?l.minTranslate():0)-b)/(p.swiperSlideSize+v),B=-(m-b),T=B+l.slidesSizesGrid[h],M=B>=0&&B<=l.size-l.slidesSizesGrid[h],U=B>=0&&B<l.size-1||T>1&&T<=l.size||B<=0&&T>=l.size;U&&(l.visibleSlides.push(p),l.visibleSlidesIndexes.push(h)),cp(p,U,s.slideVisibleClass),cp(p,M,s.slideFullyVisibleClass),p.progress=c?-S:S,p.originalProgress=c?-A:A}}function og(i){const l=this;if(typeof i>"u"){const b=l.rtlTranslate?-1:1;i=l&&l.translate&&l.translate*b||0}const s=l.params,o=l.maxTranslate()-l.minTranslate();let{progress:c,isBeginning:f,isEnd:m,progressLoop:v}=l;const h=f,p=m;if(o===0)c=0,f=!0,m=!0;else{c=(i-l.minTranslate())/o;const b=Math.abs(i-l.minTranslate())<1,S=Math.abs(i-l.maxTranslate())<1;f=b||c<=0,m=S||c>=1,b&&(c=0),S&&(c=1)}if(s.loop){const b=l.getSlideIndexByData(0),S=l.getSlideIndexByData(l.slides.length-1),A=l.slidesGrid[b],B=l.slidesGrid[S],T=l.slidesGrid[l.slidesGrid.length-1],M=Math.abs(i);M>=A?v=(M-A)/T:v=(M+T-B)/T,v>1&&(v-=1)}Object.assign(l,{progress:c,progressLoop:v,isBeginning:f,isEnd:m}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&l.updateSlidesProgress(i),f&&!h&&l.emit("reachBeginning toEdge"),m&&!p&&l.emit("reachEnd toEdge"),(h&&!f||p&&!m)&&l.emit("fromEdge"),l.emit("progress",c)}const Qs=(i,l,s)=>{l&&!i.classList.contains(s)?i.classList.add(s):!l&&i.classList.contains(s)&&i.classList.remove(s)};function sg(){const i=this,{slides:l,params:s,slidesEl:o,activeIndex:c}=i,f=i.virtual&&s.virtual.enabled,m=i.grid&&s.grid&&s.grid.rows>1,v=S=>Gt(o,`.${s.slideClass}${S}, swiper-slide${S}`)[0];let h,p,b;if(f)if(s.loop){let S=c-i.virtual.slidesBefore;S<0&&(S=i.virtual.slides.length+S),S>=i.virtual.slides.length&&(S-=i.virtual.slides.length),h=v(`[data-swiper-slide-index="${S}"]`)}else h=v(`[data-swiper-slide-index="${c}"]`);else m?(h=l.find(S=>S.column===c),b=l.find(S=>S.column===c+1),p=l.find(S=>S.column===c-1)):h=l[c];h&&(m||(b=J0(h,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!b&&(b=l[0]),p=K0(h,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!p===0&&(p=l[l.length-1]))),l.forEach(S=>{Qs(S,S===h,s.slideActiveClass),Qs(S,S===b,s.slideNextClass),Qs(S,S===p,s.slidePrevClass)}),i.emitSlidesClasses()}const ur=(i,l)=>{if(!i||i.destroyed||!i.params)return;const s=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,o=l.closest(s());if(o){let c=o.querySelector(`.${i.params.lazyPreloaderClass}`);!c&&i.isElement&&(o.shadowRoot?c=o.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{o.shadowRoot&&(c=o.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),c&&c.remove())})),c&&c.remove()}},Zs=(i,l)=>{if(!i.slides[l])return;const s=i.slides[l].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Ws=i=>{if(!i||i.destroyed||!i.params)return;let l=i.params.lazyPreloadPrevNext;const s=i.slides.length;if(!s||!l||l<0)return;l=Math.min(l,s);const o=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),c=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const m=c,v=[m-l];v.push(...Array.from({length:l}).map((h,p)=>m+o+p)),i.slides.forEach((h,p)=>{v.includes(h.column)&&Zs(i,p)});return}const f=c+o-1;if(i.params.rewind||i.params.loop)for(let m=c-l;m<=f+l;m+=1){const v=(m%s+s)%s;(v<c||v>f)&&Zs(i,v)}else for(let m=Math.max(c-l,0);m<=Math.min(f+l,s-1);m+=1)m!==c&&(m>f||m<c)&&Zs(i,m)};function ug(i){const{slidesGrid:l,params:s}=i,o=i.rtlTranslate?i.translate:-i.translate;let c;for(let f=0;f<l.length;f+=1)typeof l[f+1]<"u"?o>=l[f]&&o<l[f+1]-(l[f+1]-l[f])/2?c=f:o>=l[f]&&o<l[f+1]&&(c=f+1):o>=l[f]&&(c=f);return s.normalizeSlideIndex&&(c<0||typeof c>"u")&&(c=0),c}function cg(i){const l=this,s=l.rtlTranslate?l.translate:-l.translate,{snapGrid:o,params:c,activeIndex:f,realIndex:m,snapIndex:v}=l;let h=i,p;const b=B=>{let T=B-l.virtual.slidesBefore;return T<0&&(T=l.virtual.slides.length+T),T>=l.virtual.slides.length&&(T-=l.virtual.slides.length),T};if(typeof h>"u"&&(h=ug(l)),o.indexOf(s)>=0)p=o.indexOf(s);else{const B=Math.min(c.slidesPerGroupSkip,h);p=B+Math.floor((h-B)/c.slidesPerGroup)}if(p>=o.length&&(p=o.length-1),h===f&&!l.params.loop){p!==v&&(l.snapIndex=p,l.emit("snapIndexChange"));return}if(h===f&&l.params.loop&&l.virtual&&l.params.virtual.enabled){l.realIndex=b(h);return}const S=l.grid&&c.grid&&c.grid.rows>1;let A;if(l.virtual&&c.virtual.enabled&&c.loop)A=b(h);else if(S){const B=l.slides.find(M=>M.column===h);let T=parseInt(B.getAttribute("data-swiper-slide-index"),10);Number.isNaN(T)&&(T=Math.max(l.slides.indexOf(B),0)),A=Math.floor(T/c.grid.rows)}else if(l.slides[h]){const B=l.slides[h].getAttribute("data-swiper-slide-index");B?A=parseInt(B,10):A=h}else A=h;Object.assign(l,{previousSnapIndex:v,snapIndex:p,previousRealIndex:m,realIndex:A,previousIndex:f,activeIndex:h}),l.initialized&&Ws(l),l.emit("activeIndexChange"),l.emit("snapIndexChange"),(l.initialized||l.params.runCallbacksOnInit)&&(m!==A&&l.emit("realIndexChange"),l.emit("slideChange"))}function fg(i,l){const s=this,o=s.params;let c=i.closest(`.${o.slideClass}, swiper-slide`);!c&&s.isElement&&l&&l.length>1&&l.includes(i)&&[...l.slice(l.indexOf(i)+1,l.length)].forEach(v=>{!c&&v.matches&&v.matches(`.${o.slideClass}, swiper-slide`)&&(c=v)});let f=!1,m;if(c){for(let v=0;v<s.slides.length;v+=1)if(s.slides[v]===c){f=!0,m=v;break}}if(c&&f)s.clickedSlide=c,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(c.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=m;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}o.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var dg={updateSize:ng,updateSlides:ag,updateAutoHeight:lg,updateSlidesOffset:ig,updateSlidesProgress:rg,updateProgress:og,updateSlidesClasses:sg,updateActiveIndex:cg,updateClickedSlide:fg};function pg(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const l=this,{params:s,rtlTranslate:o,translate:c,wrapperEl:f}=l;if(s.virtualTranslate)return o?-c:c;if(s.cssMode)return c;let m=V0(f,i);return m+=l.cssOverflowAdjustment(),o&&(m=-m),m||0}function hg(i,l){const s=this,{rtlTranslate:o,params:c,wrapperEl:f,progress:m}=s;let v=0,h=0;const p=0;s.isHorizontal()?v=o?-i:i:h=i,c.roundLengths&&(v=Math.floor(v),h=Math.floor(h)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?v:h,c.cssMode?f[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-v:-h:c.virtualTranslate||(s.isHorizontal()?v-=s.cssOverflowAdjustment():h-=s.cssOverflowAdjustment(),f.style.transform=`translate3d(${v}px, ${h}px, ${p}px)`);let b;const S=s.maxTranslate()-s.minTranslate();S===0?b=0:b=(i-s.minTranslate())/S,b!==m&&s.updateProgress(i),s.emit("setTranslate",s.translate,l)}function mg(){return-this.snapGrid[0]}function gg(){return-this.snapGrid[this.snapGrid.length-1]}function vg(i,l,s,o,c){i===void 0&&(i=0),l===void 0&&(l=this.params.speed),s===void 0&&(s=!0),o===void 0&&(o=!0);const f=this,{params:m,wrapperEl:v}=f;if(f.animating&&m.preventInteractionOnTransition)return!1;const h=f.minTranslate(),p=f.maxTranslate();let b;if(o&&i>h?b=h:o&&i<p?b=p:b=i,f.updateProgress(b),m.cssMode){const S=f.isHorizontal();if(l===0)v[S?"scrollLeft":"scrollTop"]=-b;else{if(!f.support.smoothScroll)return Ep({swiper:f,targetPosition:-b,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:-b,behavior:"smooth"})}return!0}return l===0?(f.setTransition(0),f.setTranslate(b),s&&(f.emit("beforeTransitionStart",l,c),f.emit("transitionEnd"))):(f.setTransition(l),f.setTranslate(b),s&&(f.emit("beforeTransitionStart",l,c),f.emit("transitionStart")),f.animating||(f.animating=!0,f.onTranslateToWrapperTransitionEnd||(f.onTranslateToWrapperTransitionEnd=function(A){!f||f.destroyed||A.target===this&&(f.wrapperEl.removeEventListener("transitionend",f.onTranslateToWrapperTransitionEnd),f.onTranslateToWrapperTransitionEnd=null,delete f.onTranslateToWrapperTransitionEnd,f.animating=!1,s&&f.emit("transitionEnd"))}),f.wrapperEl.addEventListener("transitionend",f.onTranslateToWrapperTransitionEnd))),!0}var bg={getTranslate:pg,setTranslate:hg,minTranslate:mg,maxTranslate:gg,translateTo:vg};function yg(i,l){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${i}ms`,s.wrapperEl.style.transitionDelay=i===0?"0ms":""),s.emit("setTransition",i,l)}function _p(i){let{swiper:l,runCallbacks:s,direction:o,step:c}=i;const{activeIndex:f,previousIndex:m}=l;let v=o;v||(f>m?v="next":f<m?v="prev":v="reset"),l.emit(`transition${c}`),s&&v==="reset"?l.emit(`slideResetTransition${c}`):s&&f!==m&&(l.emit(`slideChangeTransition${c}`),v==="next"?l.emit(`slideNextTransition${c}`):l.emit(`slidePrevTransition${c}`))}function xg(i,l){i===void 0&&(i=!0);const s=this,{params:o}=s;o.cssMode||(o.autoHeight&&s.updateAutoHeight(),_p({swiper:s,runCallbacks:i,direction:l,step:"Start"}))}function Sg(i,l){i===void 0&&(i=!0);const s=this,{params:o}=s;s.animating=!1,!o.cssMode&&(s.setTransition(0),_p({swiper:s,runCallbacks:i,direction:l,step:"End"}))}var Tg={setTransition:yg,transitionStart:xg,transitionEnd:Sg};function wg(i,l,s,o,c){i===void 0&&(i=0),s===void 0&&(s=!0),typeof i=="string"&&(i=parseInt(i,10));const f=this;let m=i;m<0&&(m=0);const{params:v,snapGrid:h,slidesGrid:p,previousIndex:b,activeIndex:S,rtlTranslate:A,wrapperEl:B,enabled:T}=f;if(!T&&!o&&!c||f.destroyed||f.animating&&v.preventInteractionOnTransition)return!1;typeof l>"u"&&(l=f.params.speed);const M=Math.min(f.params.slidesPerGroupSkip,m);let U=M+Math.floor((m-M)/f.params.slidesPerGroup);U>=h.length&&(U=h.length-1);const k=-h[U];if(v.normalizeSlideIndex)for(let F=0;F<p.length;F+=1){const J=-Math.floor(k*100),V=Math.floor(p[F]*100),Z=Math.floor(p[F+1]*100);typeof p[F+1]<"u"?J>=V&&J<Z-(Z-V)/2?m=F:J>=V&&J<Z&&(m=F+1):J>=V&&(m=F)}if(f.initialized&&m!==S&&(!f.allowSlideNext&&(A?k>f.translate&&k>f.minTranslate():k<f.translate&&k<f.minTranslate())||!f.allowSlidePrev&&k>f.translate&&k>f.maxTranslate()&&(S||0)!==m))return!1;m!==(b||0)&&s&&f.emit("beforeSlideChangeStart"),f.updateProgress(k);let w;m>S?w="next":m<S?w="prev":w="reset";const O=f.virtual&&f.params.virtual.enabled;if(!(O&&c)&&(A&&-k===f.translate||!A&&k===f.translate))return f.updateActiveIndex(m),v.autoHeight&&f.updateAutoHeight(),f.updateSlidesClasses(),v.effect!=="slide"&&f.setTranslate(k),w!=="reset"&&(f.transitionStart(s,w),f.transitionEnd(s,w)),!1;if(v.cssMode){const F=f.isHorizontal(),J=A?k:-k;if(l===0)O&&(f.wrapperEl.style.scrollSnapType="none",f._immediateVirtual=!0),O&&!f._cssModeVirtualInitialSet&&f.params.initialSlide>0?(f._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{B[F?"scrollLeft":"scrollTop"]=J})):B[F?"scrollLeft":"scrollTop"]=J,O&&requestAnimationFrame(()=>{f.wrapperEl.style.scrollSnapType="",f._immediateVirtual=!1});else{if(!f.support.smoothScroll)return Ep({swiper:f,targetPosition:J,side:F?"left":"top"}),!0;B.scrollTo({[F?"left":"top"]:J,behavior:"smooth"})}return!0}const K=zp().isSafari;return O&&!c&&K&&f.isElement&&f.virtual.update(!1,!1,m),f.setTransition(l),f.setTranslate(k),f.updateActiveIndex(m),f.updateSlidesClasses(),f.emit("beforeTransitionStart",l,o),f.transitionStart(s,w),l===0?f.transitionEnd(s,w):f.animating||(f.animating=!0,f.onSlideToWrapperTransitionEnd||(f.onSlideToWrapperTransitionEnd=function(J){!f||f.destroyed||J.target===this&&(f.wrapperEl.removeEventListener("transitionend",f.onSlideToWrapperTransitionEnd),f.onSlideToWrapperTransitionEnd=null,delete f.onSlideToWrapperTransitionEnd,f.transitionEnd(s,w))}),f.wrapperEl.addEventListener("transitionend",f.onSlideToWrapperTransitionEnd)),!0}function Eg(i,l,s,o){i===void 0&&(i=0),s===void 0&&(s=!0),typeof i=="string"&&(i=parseInt(i,10));const c=this;if(c.destroyed)return;typeof l>"u"&&(l=c.params.speed);const f=c.grid&&c.params.grid&&c.params.grid.rows>1;let m=i;if(c.params.loop)if(c.virtual&&c.params.virtual.enabled)m=m+c.virtual.slidesBefore;else{let v;if(f){const A=m*c.params.grid.rows;v=c.slides.find(B=>B.getAttribute("data-swiper-slide-index")*1===A).column}else v=c.getSlideIndexByData(m);const h=f?Math.ceil(c.slides.length/c.params.grid.rows):c.slides.length,{centeredSlides:p}=c.params;let b=c.params.slidesPerView;b==="auto"?b=c.slidesPerViewDynamic():(b=Math.ceil(parseFloat(c.params.slidesPerView,10)),p&&b%2===0&&(b=b+1));let S=h-v<b;if(p&&(S=S||v<Math.ceil(b/2)),o&&p&&c.params.slidesPerView!=="auto"&&!f&&(S=!1),S){const A=p?v<c.activeIndex?"prev":"next":v-c.activeIndex-1<c.params.slidesPerView?"next":"prev";c.loopFix({direction:A,slideTo:!0,activeSlideIndex:A==="next"?v+1:v-h+1,slideRealIndex:A==="next"?c.realIndex:void 0})}if(f){const A=m*c.params.grid.rows;m=c.slides.find(B=>B.getAttribute("data-swiper-slide-index")*1===A).column}else m=c.getSlideIndexByData(m)}return requestAnimationFrame(()=>{c.slideTo(m,l,s,o)}),c}function Og(i,l,s){l===void 0&&(l=!0);const o=this,{enabled:c,params:f,animating:m}=o;if(!c||o.destroyed)return o;typeof i>"u"&&(i=o.params.speed);let v=f.slidesPerGroup;f.slidesPerView==="auto"&&f.slidesPerGroup===1&&f.slidesPerGroupAuto&&(v=Math.max(o.slidesPerViewDynamic("current",!0),1));const h=o.activeIndex<f.slidesPerGroupSkip?1:v,p=o.virtual&&f.virtual.enabled;if(f.loop){if(m&&!p&&f.loopPreventsSliding)return!1;if(o.loopFix({direction:"next"}),o._clientLeft=o.wrapperEl.clientLeft,o.activeIndex===o.slides.length-1&&f.cssMode)return requestAnimationFrame(()=>{o.slideTo(o.activeIndex+h,i,l,s)}),!0}return f.rewind&&o.isEnd?o.slideTo(0,i,l,s):o.slideTo(o.activeIndex+h,i,l,s)}function Mg(i,l,s){l===void 0&&(l=!0);const o=this,{params:c,snapGrid:f,slidesGrid:m,rtlTranslate:v,enabled:h,animating:p}=o;if(!h||o.destroyed)return o;typeof i>"u"&&(i=o.params.speed);const b=o.virtual&&c.virtual.enabled;if(c.loop){if(p&&!b&&c.loopPreventsSliding)return!1;o.loopFix({direction:"prev"}),o._clientLeft=o.wrapperEl.clientLeft}const S=v?o.translate:-o.translate;function A(w){return w<0?-Math.floor(Math.abs(w)):Math.floor(w)}const B=A(S),T=f.map(w=>A(w)),M=c.freeMode&&c.freeMode.enabled;let U=f[T.indexOf(B)-1];if(typeof U>"u"&&(c.cssMode||M)){let w;f.forEach((O,H)=>{B>=O&&(w=H)}),typeof w<"u"&&(U=M?f[w]:f[w>0?w-1:w])}let k=0;if(typeof U<"u"&&(k=m.indexOf(U),k<0&&(k=o.activeIndex-1),c.slidesPerView==="auto"&&c.slidesPerGroup===1&&c.slidesPerGroupAuto&&(k=k-o.slidesPerViewDynamic("previous",!0)+1,k=Math.max(k,0))),c.rewind&&o.isBeginning){const w=o.params.virtual&&o.params.virtual.enabled&&o.virtual?o.virtual.slides.length-1:o.slides.length-1;return o.slideTo(w,i,l,s)}else if(c.loop&&o.activeIndex===0&&c.cssMode)return requestAnimationFrame(()=>{o.slideTo(k,i,l,s)}),!0;return o.slideTo(k,i,l,s)}function Ag(i,l,s){l===void 0&&(l=!0);const o=this;if(!o.destroyed)return typeof i>"u"&&(i=o.params.speed),o.slideTo(o.activeIndex,i,l,s)}function zg(i,l,s,o){l===void 0&&(l=!0),o===void 0&&(o=.5);const c=this;if(c.destroyed)return;typeof i>"u"&&(i=c.params.speed);let f=c.activeIndex;const m=Math.min(c.params.slidesPerGroupSkip,f),v=m+Math.floor((f-m)/c.params.slidesPerGroup),h=c.rtlTranslate?c.translate:-c.translate;if(h>=c.snapGrid[v]){const p=c.snapGrid[v],b=c.snapGrid[v+1];h-p>(b-p)*o&&(f+=c.params.slidesPerGroup)}else{const p=c.snapGrid[v-1],b=c.snapGrid[v];h-p<=(b-p)*o&&(f-=c.params.slidesPerGroup)}return f=Math.max(f,0),f=Math.min(f,c.slidesGrid.length-1),c.slideTo(f,i,l,s)}function _g(){const i=this;if(i.destroyed)return;const{params:l,slidesEl:s}=i,o=l.slidesPerView==="auto"?i.slidesPerViewDynamic():l.slidesPerView;let c=i.getSlideIndexWhenGrid(i.clickedIndex),f;const m=i.isElement?"swiper-slide":`.${l.slideClass}`,v=i.grid&&i.params.grid&&i.params.grid.rows>1;if(l.loop){if(i.animating)return;f=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),l.centeredSlides?i.slideToLoop(f):c>(v?(i.slides.length-o)/2-(i.params.grid.rows-1):i.slides.length-o)?(i.loopFix(),c=i.getSlideIndex(Gt(s,`${m}[data-swiper-slide-index="${f}"]`)[0]),wp(()=>{i.slideTo(c)})):i.slideTo(c)}else i.slideTo(c)}var Cg={slideTo:wg,slideToLoop:Eg,slideNext:Og,slidePrev:Mg,slideReset:Ag,slideToClosest:zg,slideToClickedSlide:_g};function Dg(i,l){const s=this,{params:o,slidesEl:c}=s;if(!o.loop||s.virtual&&s.params.virtual.enabled)return;const f=()=>{Gt(c,`.${o.slideClass}, swiper-slide`).forEach((B,T)=>{B.setAttribute("data-swiper-slide-index",T)})},m=()=>{const A=Gt(c,`.${o.slideBlankClass}`);A.forEach(B=>{B.remove()}),A.length>0&&(s.recalcSlides(),s.updateSlides())},v=s.grid&&o.grid&&o.grid.rows>1;o.loopAddBlankSlides&&(o.slidesPerGroup>1||v)&&m();const h=o.slidesPerGroup*(v?o.grid.rows:1),p=s.slides.length%h!==0,b=v&&s.slides.length%o.grid.rows!==0,S=A=>{for(let B=0;B<A;B+=1){const T=s.isElement?mr("swiper-slide",[o.slideBlankClass]):mr("div",[o.slideClass,o.slideBlankClass]);s.slidesEl.append(T)}};if(p){if(o.loopAddBlankSlides){const A=h-s.slides.length%h;S(A),s.recalcSlides(),s.updateSlides()}else hr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");f()}else if(b){if(o.loopAddBlankSlides){const A=o.grid.rows-s.slides.length%o.grid.rows;S(A),s.recalcSlides(),s.updateSlides()}else hr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");f()}else f();s.loopFix({slideRealIndex:i,direction:o.centeredSlides?void 0:"next",initial:l})}function Ng(i){let{slideRealIndex:l,slideTo:s=!0,direction:o,setTranslate:c,activeSlideIndex:f,initial:m,byController:v,byMousewheel:h}=i===void 0?{}:i;const p=this;if(!p.params.loop)return;p.emit("beforeLoopFix");const{slides:b,allowSlidePrev:S,allowSlideNext:A,slidesEl:B,params:T}=p,{centeredSlides:M,initialSlide:U}=T;if(p.allowSlidePrev=!0,p.allowSlideNext=!0,p.virtual&&T.virtual.enabled){s&&(!T.centeredSlides&&p.snapIndex===0?p.slideTo(p.virtual.slides.length,0,!1,!0):T.centeredSlides&&p.snapIndex<T.slidesPerView?p.slideTo(p.virtual.slides.length+p.snapIndex,0,!1,!0):p.snapIndex===p.snapGrid.length-1&&p.slideTo(p.virtual.slidesBefore,0,!1,!0)),p.allowSlidePrev=S,p.allowSlideNext=A,p.emit("loopFix");return}let k=T.slidesPerView;k==="auto"?k=p.slidesPerViewDynamic():(k=Math.ceil(parseFloat(T.slidesPerView,10)),M&&k%2===0&&(k=k+1));const w=T.slidesPerGroupAuto?k:T.slidesPerGroup;let O=M?Math.max(w,Math.ceil(k/2)):w;O%w!==0&&(O+=w-O%w),O+=T.loopAdditionalSlides,p.loopedSlides=O;const H=p.grid&&T.grid&&T.grid.rows>1;b.length<k+O||p.params.effect==="cards"&&b.length<k+O*2?hr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):H&&T.grid.fill==="row"&&hr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],K=[],F=H?Math.ceil(b.length/T.grid.rows):b.length,J=m&&F-U<k&&!M;let V=J?U:p.activeIndex;typeof f>"u"?f=p.getSlideIndex(b.find(_=>_.classList.contains(T.slideActiveClass))):V=f;const Z=o==="next"||!o,$=o==="prev"||!o;let ee=0,ie=0;const ce=(H?b[f].column:f)+(M&&typeof c>"u"?-k/2+.5:0);if(ce<O){ee=Math.max(O-ce,w);for(let _=0;_<O-ce;_+=1){const Q=_-Math.floor(_/F)*F;if(H){const P=F-Q-1;for(let ne=b.length-1;ne>=0;ne-=1)b[ne].column===P&&L.push(ne)}else L.push(F-Q-1)}}else if(ce+k>F-O){ie=Math.max(ce-(F-O*2),w),J&&(ie=Math.max(ie,k-F+U+1));for(let _=0;_<ie;_+=1){const Q=_-Math.floor(_/F)*F;H?b.forEach((P,ne)=>{P.column===Q&&K.push(ne)}):K.push(Q)}}if(p.__preventObserver__=!0,requestAnimationFrame(()=>{p.__preventObserver__=!1}),p.params.effect==="cards"&&b.length<k+O*2&&(K.includes(f)&&K.splice(K.indexOf(f),1),L.includes(f)&&L.splice(L.indexOf(f),1)),$&&L.forEach(_=>{b[_].swiperLoopMoveDOM=!0,B.prepend(b[_]),b[_].swiperLoopMoveDOM=!1}),Z&&K.forEach(_=>{b[_].swiperLoopMoveDOM=!0,B.append(b[_]),b[_].swiperLoopMoveDOM=!1}),p.recalcSlides(),T.slidesPerView==="auto"?p.updateSlides():H&&(L.length>0&&$||K.length>0&&Z)&&p.slides.forEach((_,Q)=>{p.grid.updateSlide(Q,_,p.slides)}),T.watchSlidesProgress&&p.updateSlidesOffset(),s){if(L.length>0&&$){if(typeof l>"u"){const _=p.slidesGrid[V],P=p.slidesGrid[V+ee]-_;h?p.setTranslate(p.translate-P):(p.slideTo(V+Math.ceil(ee),0,!1,!0),c&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-P,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-P))}else if(c){const _=H?L.length/T.grid.rows:L.length;p.slideTo(p.activeIndex+_,0,!1,!0),p.touchEventsData.currentTranslate=p.translate}}else if(K.length>0&&Z)if(typeof l>"u"){const _=p.slidesGrid[V],P=p.slidesGrid[V-ie]-_;h?p.setTranslate(p.translate-P):(p.slideTo(V-ie,0,!1,!0),c&&(p.touchEventsData.startTranslate=p.touchEventsData.startTranslate-P,p.touchEventsData.currentTranslate=p.touchEventsData.currentTranslate-P))}else{const _=H?K.length/T.grid.rows:K.length;p.slideTo(p.activeIndex-_,0,!1,!0)}}if(p.allowSlidePrev=S,p.allowSlideNext=A,p.controller&&p.controller.control&&!v){const _={slideRealIndex:l,direction:o,setTranslate:c,activeSlideIndex:f,byController:!0};Array.isArray(p.controller.control)?p.controller.control.forEach(Q=>{!Q.destroyed&&Q.params.loop&&Q.loopFix({..._,slideTo:Q.params.slidesPerView===T.slidesPerView?s:!1})}):p.controller.control instanceof p.constructor&&p.controller.control.params.loop&&p.controller.control.loopFix({..._,slideTo:p.controller.control.params.slidesPerView===T.slidesPerView?s:!1})}p.emit("loopFix")}function kg(){const i=this,{params:l,slidesEl:s}=i;if(!l.loop||!s||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const o=[];i.slides.forEach(c=>{const f=typeof c.swiperSlideIndex>"u"?c.getAttribute("data-swiper-slide-index")*1:c.swiperSlideIndex;o[f]=c}),i.slides.forEach(c=>{c.removeAttribute("data-swiper-slide-index")}),o.forEach(c=>{s.append(c)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var Rg={loopCreate:Dg,loopFix:Ng,loopDestroy:kg};function Bg(i){const l=this;if(!l.params.simulateTouch||l.params.watchOverflow&&l.isLocked||l.params.cssMode)return;const s=l.params.touchEventsTarget==="container"?l.el:l.wrapperEl;l.isElement&&(l.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=i?"grabbing":"grab",l.isElement&&requestAnimationFrame(()=>{l.__preventObserver__=!1})}function Lg(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Hg={setGrabCursor:Bg,unsetGrabCursor:Lg};function qg(i,l){l===void 0&&(l=this);function s(o){if(!o||o===Yt()||o===nt())return null;o.assignedSlot&&(o=o.assignedSlot);const c=o.closest(i);return!c&&!o.getRootNode?null:c||s(o.getRootNode().host)}return s(l)}function fp(i,l,s){const o=nt(),{params:c}=i,f=c.edgeSwipeDetection,m=c.edgeSwipeThreshold;return f&&(s<=m||s>=o.innerWidth-m)?f==="prevent"?(l.preventDefault(),!0):!1:!0}function jg(i){const l=this,s=Yt();let o=i;o.originalEvent&&(o=o.originalEvent);const c=l.touchEventsData;if(o.type==="pointerdown"){if(c.pointerId!==null&&c.pointerId!==o.pointerId)return;c.pointerId=o.pointerId}else o.type==="touchstart"&&o.targetTouches.length===1&&(c.touchId=o.targetTouches[0].identifier);if(o.type==="touchstart"){fp(l,o,o.targetTouches[0].pageX);return}const{params:f,touches:m,enabled:v}=l;if(!v||!f.simulateTouch&&o.pointerType==="mouse"||l.animating&&f.preventInteractionOnTransition)return;!l.animating&&f.cssMode&&f.loop&&l.loopFix();let h=o.target;if(f.touchEventsTarget==="wrapper"&&!Z0(h,l.wrapperEl)||"which"in o&&o.which===3||"button"in o&&o.button>0||c.isTouched&&c.isMoved)return;const p=!!f.noSwipingClass&&f.noSwipingClass!=="",b=o.composedPath?o.composedPath():o.path;p&&o.target&&o.target.shadowRoot&&b&&(h=b[0]);const S=f.noSwipingSelector?f.noSwipingSelector:`.${f.noSwipingClass}`,A=!!(o.target&&o.target.shadowRoot);if(f.noSwiping&&(A?qg(S,h):h.closest(S))){l.allowClick=!0;return}if(f.swipeHandler&&!h.closest(f.swipeHandler))return;m.currentX=o.pageX,m.currentY=o.pageY;const B=m.currentX,T=m.currentY;if(!fp(l,o,B))return;Object.assign(c,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),m.startX=B,m.startY=T,c.touchStartTime=pr(),l.allowClick=!0,l.updateSize(),l.swipeDirection=void 0,f.threshold>0&&(c.allowThresholdMove=!1);let M=!0;h.matches(c.focusableElements)&&(M=!1,h.nodeName==="SELECT"&&(c.isTouched=!1)),s.activeElement&&s.activeElement.matches(c.focusableElements)&&s.activeElement!==h&&(o.pointerType==="mouse"||o.pointerType!=="mouse"&&!h.matches(c.focusableElements))&&s.activeElement.blur();const U=M&&l.allowTouchMove&&f.touchStartPreventDefault;(f.touchStartForcePreventDefault||U)&&!h.isContentEditable&&o.preventDefault(),f.freeMode&&f.freeMode.enabled&&l.freeMode&&l.animating&&!f.cssMode&&l.freeMode.onTouchStart(),l.emit("touchStart",o)}function Ug(i){const l=Yt(),s=this,o=s.touchEventsData,{params:c,touches:f,rtlTranslate:m,enabled:v}=s;if(!v||!c.simulateTouch&&i.pointerType==="mouse")return;let h=i;if(h.originalEvent&&(h=h.originalEvent),h.type==="pointermove"&&(o.touchId!==null||h.pointerId!==o.pointerId))return;let p;if(h.type==="touchmove"){if(p=[...h.changedTouches].find(L=>L.identifier===o.touchId),!p||p.identifier!==o.touchId)return}else p=h;if(!o.isTouched){o.startMoving&&o.isScrolling&&s.emit("touchMoveOpposite",h);return}const b=p.pageX,S=p.pageY;if(h.preventedByNestedSwiper){f.startX=b,f.startY=S;return}if(!s.allowTouchMove){h.target.matches(o.focusableElements)||(s.allowClick=!1),o.isTouched&&(Object.assign(f,{startX:b,startY:S,currentX:b,currentY:S}),o.touchStartTime=pr());return}if(c.touchReleaseOnEdges&&!c.loop)if(s.isVertical()){if(S<f.startY&&s.translate<=s.maxTranslate()||S>f.startY&&s.translate>=s.minTranslate()){o.isTouched=!1,o.isMoved=!1;return}}else{if(m&&(b>f.startX&&-s.translate<=s.maxTranslate()||b<f.startX&&-s.translate>=s.minTranslate()))return;if(!m&&(b<f.startX&&s.translate<=s.maxTranslate()||b>f.startX&&s.translate>=s.minTranslate()))return}if(l.activeElement&&l.activeElement.matches(o.focusableElements)&&l.activeElement!==h.target&&h.pointerType!=="mouse"&&l.activeElement.blur(),l.activeElement&&h.target===l.activeElement&&h.target.matches(o.focusableElements)){o.isMoved=!0,s.allowClick=!1;return}o.allowTouchCallbacks&&s.emit("touchMove",h),f.previousX=f.currentX,f.previousY=f.currentY,f.currentX=b,f.currentY=S;const A=f.currentX-f.startX,B=f.currentY-f.startY;if(s.params.threshold&&Math.sqrt(A**2+B**2)<s.params.threshold)return;if(typeof o.isScrolling>"u"){let L;s.isHorizontal()&&f.currentY===f.startY||s.isVertical()&&f.currentX===f.startX?o.isScrolling=!1:A*A+B*B>=25&&(L=Math.atan2(Math.abs(B),Math.abs(A))*180/Math.PI,o.isScrolling=s.isHorizontal()?L>c.touchAngle:90-L>c.touchAngle)}if(o.isScrolling&&s.emit("touchMoveOpposite",h),typeof o.startMoving>"u"&&(f.currentX!==f.startX||f.currentY!==f.startY)&&(o.startMoving=!0),o.isScrolling||h.type==="touchmove"&&o.preventTouchMoveFromPointerMove){o.isTouched=!1;return}if(!o.startMoving)return;s.allowClick=!1,!c.cssMode&&h.cancelable&&h.preventDefault(),c.touchMoveStopPropagation&&!c.nested&&h.stopPropagation();let T=s.isHorizontal()?A:B,M=s.isHorizontal()?f.currentX-f.previousX:f.currentY-f.previousY;c.oneWayMovement&&(T=Math.abs(T)*(m?1:-1),M=Math.abs(M)*(m?1:-1)),f.diff=T,T*=c.touchRatio,m&&(T=-T,M=-M);const U=s.touchesDirection;s.swipeDirection=T>0?"prev":"next",s.touchesDirection=M>0?"prev":"next";const k=s.params.loop&&!c.cssMode,w=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!o.isMoved){if(k&&w&&s.loopFix({direction:s.swipeDirection}),o.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(L)}o.allowMomentumBounce=!1,c.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",h)}if(new Date().getTime(),c._loopSwapReset!==!1&&o.isMoved&&o.allowThresholdMove&&U!==s.touchesDirection&&k&&w&&Math.abs(T)>=1){Object.assign(f,{startX:b,startY:S,currentX:b,currentY:S,startTranslate:o.currentTranslate}),o.loopSwapReset=!0,o.startTranslate=o.currentTranslate;return}s.emit("sliderMove",h),o.isMoved=!0,o.currentTranslate=T+o.startTranslate;let O=!0,H=c.resistanceRatio;if(c.touchReleaseOnEdges&&(H=0),T>0?(k&&w&&o.allowThresholdMove&&o.currentTranslate>(c.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(c.slidesPerView!=="auto"&&s.slides.length-c.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),o.currentTranslate>s.minTranslate()&&(O=!1,c.resistance&&(o.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+o.startTranslate+T)**H))):T<0&&(k&&w&&o.allowThresholdMove&&o.currentTranslate<(c.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(c.slidesPerView!=="auto"&&s.slides.length-c.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(c.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(c.slidesPerView,10)))}),o.currentTranslate<s.maxTranslate()&&(O=!1,c.resistance&&(o.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-o.startTranslate-T)**H))),O&&(h.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&o.currentTranslate<o.startTranslate&&(o.currentTranslate=o.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&o.currentTranslate>o.startTranslate&&(o.currentTranslate=o.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(o.currentTranslate=o.startTranslate),c.threshold>0)if(Math.abs(T)>c.threshold||o.allowThresholdMove){if(!o.allowThresholdMove){o.allowThresholdMove=!0,f.startX=f.currentX,f.startY=f.currentY,o.currentTranslate=o.startTranslate,f.diff=s.isHorizontal()?f.currentX-f.startX:f.currentY-f.startY;return}}else{o.currentTranslate=o.startTranslate;return}!c.followFinger||c.cssMode||((c.freeMode&&c.freeMode.enabled&&s.freeMode||c.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),c.freeMode&&c.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(o.currentTranslate),s.setTranslate(o.currentTranslate))}function Gg(i){const l=this,s=l.touchEventsData;let o=i;o.originalEvent&&(o=o.originalEvent);let c;if(o.type==="touchend"||o.type==="touchcancel"){if(c=[...o.changedTouches].find(L=>L.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else{if(s.touchId!==null||o.pointerId!==s.pointerId)return;c=o}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(o.type)&&!(["pointercancel","contextmenu"].includes(o.type)&&(l.browser.isSafari||l.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:m,touches:v,rtlTranslate:h,slidesGrid:p,enabled:b}=l;if(!b||!m.simulateTouch&&o.pointerType==="mouse")return;if(s.allowTouchCallbacks&&l.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&m.grabCursor&&l.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}m.grabCursor&&s.isMoved&&s.isTouched&&(l.allowSlideNext===!0||l.allowSlidePrev===!0)&&l.setGrabCursor(!1);const S=pr(),A=S-s.touchStartTime;if(l.allowClick){const L=o.path||o.composedPath&&o.composedPath();l.updateClickedSlide(L&&L[0]||o.target,L),l.emit("tap click",o),A<300&&S-s.lastClickTime<300&&l.emit("doubleTap doubleClick",o)}if(s.lastClickTime=pr(),wp(()=>{l.destroyed||(l.allowClick=!0)}),!s.isTouched||!s.isMoved||!l.swipeDirection||v.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let B;if(m.followFinger?B=h?l.translate:-l.translate:B=-s.currentTranslate,m.cssMode)return;if(m.freeMode&&m.freeMode.enabled){l.freeMode.onTouchEnd({currentPos:B});return}const T=B>=-l.maxTranslate()&&!l.params.loop;let M=0,U=l.slidesSizesGrid[0];for(let L=0;L<p.length;L+=L<m.slidesPerGroupSkip?1:m.slidesPerGroup){const K=L<m.slidesPerGroupSkip-1?1:m.slidesPerGroup;typeof p[L+K]<"u"?(T||B>=p[L]&&B<p[L+K])&&(M=L,U=p[L+K]-p[L]):(T||B>=p[L])&&(M=L,U=p[p.length-1]-p[p.length-2])}let k=null,w=null;m.rewind&&(l.isBeginning?w=m.virtual&&m.virtual.enabled&&l.virtual?l.virtual.slides.length-1:l.slides.length-1:l.isEnd&&(k=0));const O=(B-p[M])/U,H=M<m.slidesPerGroupSkip-1?1:m.slidesPerGroup;if(A>m.longSwipesMs){if(!m.longSwipes){l.slideTo(l.activeIndex);return}l.swipeDirection==="next"&&(O>=m.longSwipesRatio?l.slideTo(m.rewind&&l.isEnd?k:M+H):l.slideTo(M)),l.swipeDirection==="prev"&&(O>1-m.longSwipesRatio?l.slideTo(M+H):w!==null&&O<0&&Math.abs(O)>m.longSwipesRatio?l.slideTo(w):l.slideTo(M))}else{if(!m.shortSwipes){l.slideTo(l.activeIndex);return}l.navigation&&(o.target===l.navigation.nextEl||o.target===l.navigation.prevEl)?o.target===l.navigation.nextEl?l.slideTo(M+H):l.slideTo(M):(l.swipeDirection==="next"&&l.slideTo(k!==null?k:M+H),l.swipeDirection==="prev"&&l.slideTo(w!==null?w:M))}}function dp(){const i=this,{params:l,el:s}=i;if(s&&s.offsetWidth===0)return;l.breakpoints&&i.setBreakpoint();const{allowSlideNext:o,allowSlidePrev:c,snapGrid:f}=i,m=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const v=m&&l.loop;(l.slidesPerView==="auto"||l.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!v?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!m?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=c,i.allowSlideNext=o,i.params.watchOverflow&&f!==i.snapGrid&&i.checkOverflow()}function Yg(i){const l=this;l.enabled&&(l.allowClick||(l.params.preventClicks&&i.preventDefault(),l.params.preventClicksPropagation&&l.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Xg(){const i=this,{wrapperEl:l,rtlTranslate:s,enabled:o}=i;if(!o)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-l.scrollLeft:i.translate=-l.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let c;const f=i.maxTranslate()-i.minTranslate();f===0?c=0:c=(i.translate-i.minTranslate())/f,c!==i.progress&&i.updateProgress(s?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function Vg(i){const l=this;ur(l,i.target),!(l.params.cssMode||l.params.slidesPerView!=="auto"&&!l.params.autoHeight)&&l.update()}function Pg(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Cp=(i,l)=>{const s=Yt(),{params:o,el:c,wrapperEl:f,device:m}=i,v=!!o.nested,h=l==="on"?"addEventListener":"removeEventListener",p=l;!c||typeof c=="string"||(s[h]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:v}),c[h]("touchstart",i.onTouchStart,{passive:!1}),c[h]("pointerdown",i.onTouchStart,{passive:!1}),s[h]("touchmove",i.onTouchMove,{passive:!1,capture:v}),s[h]("pointermove",i.onTouchMove,{passive:!1,capture:v}),s[h]("touchend",i.onTouchEnd,{passive:!0}),s[h]("pointerup",i.onTouchEnd,{passive:!0}),s[h]("pointercancel",i.onTouchEnd,{passive:!0}),s[h]("touchcancel",i.onTouchEnd,{passive:!0}),s[h]("pointerout",i.onTouchEnd,{passive:!0}),s[h]("pointerleave",i.onTouchEnd,{passive:!0}),s[h]("contextmenu",i.onTouchEnd,{passive:!0}),(o.preventClicks||o.preventClicksPropagation)&&c[h]("click",i.onClick,!0),o.cssMode&&f[h]("scroll",i.onScroll),o.updateOnWindowResize?i[p](m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",dp,!0):i[p]("observerUpdate",dp,!0),c[h]("load",i.onLoad,{capture:!0}))};function Qg(){const i=this,{params:l}=i;i.onTouchStart=jg.bind(i),i.onTouchMove=Ug.bind(i),i.onTouchEnd=Gg.bind(i),i.onDocumentTouchStart=Pg.bind(i),l.cssMode&&(i.onScroll=Xg.bind(i)),i.onClick=Yg.bind(i),i.onLoad=Vg.bind(i),Cp(i,"on")}function Zg(){Cp(this,"off")}var Kg={attachEvents:Qg,detachEvents:Zg};const pp=(i,l)=>i.grid&&l.grid&&l.grid.rows>1;function Jg(){const i=this,{realIndex:l,initialized:s,params:o,el:c}=i,f=o.breakpoints;if(!f||f&&Object.keys(f).length===0)return;const m=Yt(),v=o.breakpointsBase==="window"||!o.breakpointsBase?o.breakpointsBase:"container",h=["window","container"].includes(o.breakpointsBase)||!o.breakpointsBase?i.el:m.querySelector(o.breakpointsBase),p=i.getBreakpoint(f,v,h);if(!p||i.currentBreakpoint===p)return;const S=(p in f?f[p]:void 0)||i.originalParams,A=pp(i,o),B=pp(i,S),T=i.params.grabCursor,M=S.grabCursor,U=o.enabled;A&&!B?(c.classList.remove(`${o.containerModifierClass}grid`,`${o.containerModifierClass}grid-column`),i.emitContainerClasses()):!A&&B&&(c.classList.add(`${o.containerModifierClass}grid`),(S.grid.fill&&S.grid.fill==="column"||!S.grid.fill&&o.grid.fill==="column")&&c.classList.add(`${o.containerModifierClass}grid-column`),i.emitContainerClasses()),T&&!M?i.unsetGrabCursor():!T&&M&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(K=>{if(typeof S[K]>"u")return;const F=o[K]&&o[K].enabled,J=S[K]&&S[K].enabled;F&&!J&&i[K].disable(),!F&&J&&i[K].enable()});const k=S.direction&&S.direction!==o.direction,w=o.loop&&(S.slidesPerView!==o.slidesPerView||k),O=o.loop;k&&s&&i.changeDirection(),yt(i.params,S);const H=i.params.enabled,L=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),U&&!H?i.disable():!U&&H&&i.enable(),i.currentBreakpoint=p,i.emit("_beforeBreakpoint",S),s&&(w?(i.loopDestroy(),i.loopCreate(l),i.updateSlides()):!O&&L?(i.loopCreate(l),i.updateSlides()):O&&!L&&i.loopDestroy()),i.emit("breakpoint",S)}function $g(i,l,s){if(l===void 0&&(l="window"),!i||l==="container"&&!s)return;let o=!1;const c=nt(),f=l==="window"?c.innerHeight:s.clientHeight,m=Object.keys(i).map(v=>{if(typeof v=="string"&&v.indexOf("@")===0){const h=parseFloat(v.substr(1));return{value:f*h,point:v}}return{value:v,point:v}});m.sort((v,h)=>parseInt(v.value,10)-parseInt(h.value,10));for(let v=0;v<m.length;v+=1){const{point:h,value:p}=m[v];l==="window"?c.matchMedia(`(min-width: ${p}px)`).matches&&(o=h):p<=s.clientWidth&&(o=h)}return o||"max"}var Fg={setBreakpoint:Jg,getBreakpoint:$g};function Wg(i,l){const s=[];return i.forEach(o=>{typeof o=="object"?Object.keys(o).forEach(c=>{o[c]&&s.push(l+c)}):typeof o=="string"&&s.push(l+o)}),s}function Ig(){const i=this,{classNames:l,params:s,rtl:o,el:c,device:f}=i,m=Wg(["initialized",s.direction,{"free-mode":i.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:o},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:f.android},{ios:f.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);l.push(...m),c.classList.add(...l),i.emitContainerClasses()}function ev(){const i=this,{el:l,classNames:s}=i;!l||typeof l=="string"||(l.classList.remove(...s),i.emitContainerClasses())}var tv={addClasses:Ig,removeClasses:ev};function nv(){const i=this,{isLocked:l,params:s}=i,{slidesOffsetBefore:o}=s;if(o){const c=i.slides.length-1,f=i.slidesGrid[c]+i.slidesSizesGrid[c]+o*2;i.isLocked=i.size>f}else i.isLocked=i.snapGrid.length===1;s.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),s.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),l&&l!==i.isLocked&&(i.isEnd=!1),l!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var av={checkOverflow:nv},Is={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function lv(i,l){return function(o){o===void 0&&(o={});const c=Object.keys(o)[0],f=o[c];if(typeof f!="object"||f===null){yt(l,o);return}if(i[c]===!0&&(i[c]={enabled:!0}),c==="navigation"&&i[c]&&i[c].enabled&&!i[c].prevEl&&!i[c].nextEl&&(i[c].auto=!0),["pagination","scrollbar"].indexOf(c)>=0&&i[c]&&i[c].enabled&&!i[c].el&&(i[c].auto=!0),!(c in i&&"enabled"in f)){yt(l,o);return}typeof i[c]=="object"&&!("enabled"in i[c])&&(i[c].enabled=!0),i[c]||(i[c]={enabled:!1}),yt(l,o)}}const Ks={eventsEmitter:tg,update:dg,translate:bg,transition:Tg,slide:Cg,loop:Rg,grabCursor:Hg,events:Kg,breakpoints:Fg,checkOverflow:av,classes:tv},Js={};let au=class rn{constructor(){let l,s;for(var o=arguments.length,c=new Array(o),f=0;f<o;f++)c[f]=arguments[f];c.length===1&&c[0].constructor&&Object.prototype.toString.call(c[0]).slice(8,-1)==="Object"?s=c[0]:[l,s]=c,s||(s={}),s=yt({},s),l&&!s.el&&(s.el=l);const m=Yt();if(s.el&&typeof s.el=="string"&&m.querySelectorAll(s.el).length>1){const b=[];return m.querySelectorAll(s.el).forEach(S=>{const A=yt({},s,{el:S});b.push(new rn(A))}),b}const v=this;v.__swiper__=!0,v.support=Mp(),v.device=Ap({userAgent:s.userAgent}),v.browser=zp(),v.eventsListeners={},v.eventsAnyListeners=[],v.modules=[...v.__modules__],s.modules&&Array.isArray(s.modules)&&v.modules.push(...s.modules);const h={};v.modules.forEach(b=>{b({params:s,swiper:v,extendParams:lv(s,h),on:v.on.bind(v),once:v.once.bind(v),off:v.off.bind(v),emit:v.emit.bind(v)})});const p=yt({},Is,h);return v.params=yt({},p,Js,s),v.originalParams=yt({},v.params),v.passedParams=yt({},s),v.params&&v.params.on&&Object.keys(v.params.on).forEach(b=>{v.on(b,v.params.on[b])}),v.params&&v.params.onAny&&v.onAny(v.params.onAny),Object.assign(v,{enabled:v.params.enabled,el:l,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return v.params.direction==="horizontal"},isVertical(){return v.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:v.params.allowSlideNext,allowSlidePrev:v.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:v.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:v.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),v.emit("_swiper"),v.params.init&&v.init(),v}getDirectionLabel(l){return this.isHorizontal()?l:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[l]}getSlideIndex(l){const{slidesEl:s,params:o}=this,c=Gt(s,`.${o.slideClass}, swiper-slide`),f=gr(c[0]);return gr(l)-f}getSlideIndexByData(l){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===l))}getSlideIndexWhenGrid(l){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?l=Math.floor(l/this.params.grid.rows):this.params.grid.fill==="row"&&(l=l%Math.ceil(this.slides.length/this.params.grid.rows))),l}recalcSlides(){const l=this,{slidesEl:s,params:o}=l;l.slides=Gt(s,`.${o.slideClass}, swiper-slide`)}enable(){const l=this;l.enabled||(l.enabled=!0,l.params.grabCursor&&l.setGrabCursor(),l.emit("enable"))}disable(){const l=this;l.enabled&&(l.enabled=!1,l.params.grabCursor&&l.unsetGrabCursor(),l.emit("disable"))}setProgress(l,s){const o=this;l=Math.min(Math.max(l,0),1);const c=o.minTranslate(),m=(o.maxTranslate()-c)*l+c;o.translateTo(m,typeof s>"u"?0:s),o.updateActiveIndex(),o.updateSlidesClasses()}emitContainerClasses(){const l=this;if(!l.params._emitClasses||!l.el)return;const s=l.el.className.split(" ").filter(o=>o.indexOf("swiper")===0||o.indexOf(l.params.containerModifierClass)===0);l.emit("_containerClasses",s.join(" "))}getSlideClasses(l){const s=this;return s.destroyed?"":l.className.split(" ").filter(o=>o.indexOf("swiper-slide")===0||o.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const l=this;if(!l.params._emitClasses||!l.el)return;const s=[];l.slides.forEach(o=>{const c=l.getSlideClasses(o);s.push({slideEl:o,classNames:c}),l.emit("_slideClass",o,c)}),l.emit("_slideClasses",s)}slidesPerViewDynamic(l,s){l===void 0&&(l="current"),s===void 0&&(s=!1);const o=this,{params:c,slides:f,slidesGrid:m,slidesSizesGrid:v,size:h,activeIndex:p}=o;let b=1;if(typeof c.slidesPerView=="number")return c.slidesPerView;if(c.centeredSlides){let S=f[p]?Math.ceil(f[p].swiperSlideSize):0,A;for(let B=p+1;B<f.length;B+=1)f[B]&&!A&&(S+=Math.ceil(f[B].swiperSlideSize),b+=1,S>h&&(A=!0));for(let B=p-1;B>=0;B-=1)f[B]&&!A&&(S+=f[B].swiperSlideSize,b+=1,S>h&&(A=!0))}else if(l==="current")for(let S=p+1;S<f.length;S+=1)(s?m[S]+v[S]-m[p]<h:m[S]-m[p]<h)&&(b+=1);else for(let S=p-1;S>=0;S-=1)m[p]-m[S]<h&&(b+=1);return b}update(){const l=this;if(!l||l.destroyed)return;const{snapGrid:s,params:o}=l;o.breakpoints&&l.setBreakpoint(),[...l.el.querySelectorAll('[loading="lazy"]')].forEach(m=>{m.complete&&ur(l,m)}),l.updateSize(),l.updateSlides(),l.updateProgress(),l.updateSlidesClasses();function c(){const m=l.rtlTranslate?l.translate*-1:l.translate,v=Math.min(Math.max(m,l.maxTranslate()),l.minTranslate());l.setTranslate(v),l.updateActiveIndex(),l.updateSlidesClasses()}let f;if(o.freeMode&&o.freeMode.enabled&&!o.cssMode)c(),o.autoHeight&&l.updateAutoHeight();else{if((o.slidesPerView==="auto"||o.slidesPerView>1)&&l.isEnd&&!o.centeredSlides){const m=l.virtual&&o.virtual.enabled?l.virtual.slides:l.slides;f=l.slideTo(m.length-1,0,!1,!0)}else f=l.slideTo(l.activeIndex,0,!1,!0);f||c()}o.watchOverflow&&s!==l.snapGrid&&l.checkOverflow(),l.emit("update")}changeDirection(l,s){s===void 0&&(s=!0);const o=this,c=o.params.direction;return l||(l=c==="horizontal"?"vertical":"horizontal"),l===c||l!=="horizontal"&&l!=="vertical"||(o.el.classList.remove(`${o.params.containerModifierClass}${c}`),o.el.classList.add(`${o.params.containerModifierClass}${l}`),o.emitContainerClasses(),o.params.direction=l,o.slides.forEach(f=>{l==="vertical"?f.style.width="":f.style.height=""}),o.emit("changeDirection"),s&&o.update()),o}changeLanguageDirection(l){const s=this;s.rtl&&l==="rtl"||!s.rtl&&l==="ltr"||(s.rtl=l==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(l){const s=this;if(s.mounted)return!0;let o=l||s.params.el;if(typeof o=="string"&&(o=document.querySelector(o)),!o)return!1;o.swiper=s,o.parentNode&&o.parentNode.host&&o.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const c=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let m=o&&o.shadowRoot&&o.shadowRoot.querySelector?o.shadowRoot.querySelector(c()):Gt(o,c())[0];return!m&&s.params.createElements&&(m=mr("div",s.params.wrapperClass),o.append(m),Gt(o,`.${s.params.slideClass}`).forEach(v=>{m.append(v)})),Object.assign(s,{el:o,wrapperEl:m,slidesEl:s.isElement&&!o.parentNode.host.slideSlots?o.parentNode.host:m,hostEl:s.isElement?o.parentNode.host:o,mounted:!0,rtl:o.dir.toLowerCase()==="rtl"||kn(o,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(o.dir.toLowerCase()==="rtl"||kn(o,"direction")==="rtl"),wrongRTL:kn(m,"display")==="-webkit-box"}),!0}init(l){const s=this;if(s.initialized||s.mount(l)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const c=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&c.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),c.forEach(f=>{f.complete?ur(s,f):f.addEventListener("load",m=>{ur(s,m.target)})}),Ws(s),s.initialized=!0,Ws(s),s.emit("init"),s.emit("afterInit"),s}destroy(l,s){l===void 0&&(l=!0),s===void 0&&(s=!0);const o=this,{params:c,el:f,wrapperEl:m,slides:v}=o;return typeof o.params>"u"||o.destroyed||(o.emit("beforeDestroy"),o.initialized=!1,o.detachEvents(),c.loop&&o.loopDestroy(),s&&(o.removeClasses(),f&&typeof f!="string"&&f.removeAttribute("style"),m&&m.removeAttribute("style"),v&&v.length&&v.forEach(h=>{h.classList.remove(c.slideVisibleClass,c.slideFullyVisibleClass,c.slideActiveClass,c.slideNextClass,c.slidePrevClass),h.removeAttribute("style"),h.removeAttribute("data-swiper-slide-index")})),o.emit("destroy"),Object.keys(o.eventsListeners).forEach(h=>{o.off(h)}),l!==!1&&(o.el&&typeof o.el!="string"&&(o.el.swiper=null),Y0(o)),o.destroyed=!0),null}static extendDefaults(l){yt(Js,l)}static get extendedDefaults(){return Js}static get defaults(){return Is}static installModule(l){rn.prototype.__modules__||(rn.prototype.__modules__=[]);const s=rn.prototype.__modules__;typeof l=="function"&&s.indexOf(l)<0&&s.push(l)}static use(l){return Array.isArray(l)?(l.forEach(s=>rn.installModule(s)),rn):(rn.installModule(l),rn)}};Object.keys(Ks).forEach(i=>{Object.keys(Ks[i]).forEach(l=>{au.prototype[l]=Ks[i][l]})});au.use([I0,eg]);const Dp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Wn(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function ja(i,l){const s=["__proto__","constructor","prototype"];Object.keys(l).filter(o=>s.indexOf(o)<0).forEach(o=>{typeof i[o]>"u"?i[o]=l[o]:Wn(l[o])&&Wn(i[o])&&Object.keys(l[o]).length>0?l[o].__swiper__?i[o]=l[o]:ja(i[o],l[o]):i[o]=l[o]})}function Np(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function kp(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function Rp(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function Bp(i){i===void 0&&(i="");const l=i.split(" ").map(o=>o.trim()).filter(o=>!!o),s=[];return l.forEach(o=>{s.indexOf(o)<0&&s.push(o)}),s.join(" ")}function iv(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function rv(i){let{swiper:l,slides:s,passedParams:o,changedParams:c,nextEl:f,prevEl:m,scrollbarEl:v,paginationEl:h}=i;const p=c.filter(V=>V!=="children"&&V!=="direction"&&V!=="wrapperClass"),{params:b,pagination:S,navigation:A,scrollbar:B,virtual:T,thumbs:M}=l;let U,k,w,O,H,L,K,F;c.includes("thumbs")&&o.thumbs&&o.thumbs.swiper&&!o.thumbs.swiper.destroyed&&b.thumbs&&(!b.thumbs.swiper||b.thumbs.swiper.destroyed)&&(U=!0),c.includes("controller")&&o.controller&&o.controller.control&&b.controller&&!b.controller.control&&(k=!0),c.includes("pagination")&&o.pagination&&(o.pagination.el||h)&&(b.pagination||b.pagination===!1)&&S&&!S.el&&(w=!0),c.includes("scrollbar")&&o.scrollbar&&(o.scrollbar.el||v)&&(b.scrollbar||b.scrollbar===!1)&&B&&!B.el&&(O=!0),c.includes("navigation")&&o.navigation&&(o.navigation.prevEl||m)&&(o.navigation.nextEl||f)&&(b.navigation||b.navigation===!1)&&A&&!A.prevEl&&!A.nextEl&&(H=!0);const J=V=>{l[V]&&(l[V].destroy(),V==="navigation"?(l.isElement&&(l[V].prevEl.remove(),l[V].nextEl.remove()),b[V].prevEl=void 0,b[V].nextEl=void 0,l[V].prevEl=void 0,l[V].nextEl=void 0):(l.isElement&&l[V].el.remove(),b[V].el=void 0,l[V].el=void 0))};c.includes("loop")&&l.isElement&&(b.loop&&!o.loop?L=!0:!b.loop&&o.loop?K=!0:F=!0),p.forEach(V=>{if(Wn(b[V])&&Wn(o[V]))Object.assign(b[V],o[V]),(V==="navigation"||V==="pagination"||V==="scrollbar")&&"enabled"in o[V]&&!o[V].enabled&&J(V);else{const Z=o[V];(Z===!0||Z===!1)&&(V==="navigation"||V==="pagination"||V==="scrollbar")?Z===!1&&J(V):b[V]=o[V]}}),p.includes("controller")&&!k&&l.controller&&l.controller.control&&b.controller&&b.controller.control&&(l.controller.control=b.controller.control),c.includes("children")&&s&&T&&b.virtual.enabled?(T.slides=s,T.update(!0)):c.includes("virtual")&&T&&b.virtual.enabled&&(s&&(T.slides=s),T.update(!0)),c.includes("children")&&s&&b.loop&&(F=!0),U&&M.init()&&M.update(!0),k&&(l.controller.control=b.controller.control),w&&(l.isElement&&(!h||typeof h=="string")&&(h=document.createElement("div"),h.classList.add("swiper-pagination"),h.part.add("pagination"),l.el.appendChild(h)),h&&(b.pagination.el=h),S.init(),S.render(),S.update()),O&&(l.isElement&&(!v||typeof v=="string")&&(v=document.createElement("div"),v.classList.add("swiper-scrollbar"),v.part.add("scrollbar"),l.el.appendChild(v)),v&&(b.scrollbar.el=v),B.init(),B.updateSize(),B.setTranslate()),H&&(l.isElement&&((!f||typeof f=="string")&&(f=document.createElement("div"),f.classList.add("swiper-button-next"),vr(f,l.hostEl.constructor.nextButtonSvg),f.part.add("button-next"),l.el.appendChild(f)),(!m||typeof m=="string")&&(m=document.createElement("div"),m.classList.add("swiper-button-prev"),vr(m,l.hostEl.constructor.prevButtonSvg),m.part.add("button-prev"),l.el.appendChild(m))),f&&(b.navigation.nextEl=f),m&&(b.navigation.prevEl=m),A.init(),A.update()),c.includes("allowSlideNext")&&(l.allowSlideNext=o.allowSlideNext),c.includes("allowSlidePrev")&&(l.allowSlidePrev=o.allowSlidePrev),c.includes("direction")&&l.changeDirection(o.direction,!1),(L||F)&&l.loopDestroy(),(K||F)&&l.loopCreate(),l.update()}function ov(i,l){i===void 0&&(i={}),l===void 0&&(l=!0);const s={on:{}},o={},c={};ja(s,Is),s._emitClasses=!0,s.init=!1;const f={},m=Dp.map(h=>h.replace(/_/,"")),v=Object.assign({},i);return Object.keys(v).forEach(h=>{typeof i[h]>"u"||(m.indexOf(h)>=0?Wn(i[h])?(s[h]={},c[h]={},ja(s[h],i[h]),ja(c[h],i[h])):(s[h]=i[h],c[h]=i[h]):h.search(/on[A-Z]/)===0&&typeof i[h]=="function"?l?o[`${h[2].toLowerCase()}${h.substr(3)}`]=i[h]:s.on[`${h[2].toLowerCase()}${h.substr(3)}`]=i[h]:f[h]=i[h])}),["navigation","pagination","scrollbar"].forEach(h=>{s[h]===!0&&(s[h]={}),s[h]===!1&&delete s[h]}),{params:s,passedParams:c,rest:f,events:o}}function sv(i,l){let{el:s,nextEl:o,prevEl:c,paginationEl:f,scrollbarEl:m,swiper:v}=i;Np(l)&&o&&c&&(v.params.navigation.nextEl=o,v.originalParams.navigation.nextEl=o,v.params.navigation.prevEl=c,v.originalParams.navigation.prevEl=c),kp(l)&&f&&(v.params.pagination.el=f,v.originalParams.pagination.el=f),Rp(l)&&m&&(v.params.scrollbar.el=m,v.originalParams.scrollbar.el=m),v.init(s)}function uv(i,l,s,o,c){const f=[];if(!l)return f;const m=h=>{f.indexOf(h)<0&&f.push(h)};if(s&&o){const h=o.map(c),p=s.map(c);h.join("")!==p.join("")&&m("children"),o.length!==s.length&&m("children")}return Dp.filter(h=>h[0]==="_").map(h=>h.replace(/_/,"")).forEach(h=>{if(h in i&&h in l)if(Wn(i[h])&&Wn(l[h])){const p=Object.keys(i[h]),b=Object.keys(l[h]);p.length!==b.length?m(h):(p.forEach(S=>{i[h][S]!==l[h][S]&&m(h)}),b.forEach(S=>{i[h][S]!==l[h][S]&&m(h)}))}else i[h]!==l[h]&&m(h)}),f}const cv=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.emit("_virtualUpdated"),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function br(){return br=Object.assign?Object.assign.bind():function(i){for(var l=1;l<arguments.length;l++){var s=arguments[l];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i[o]=s[o])}return i},br.apply(this,arguments)}function Lp(i){return i.type&&i.type.displayName&&i.type.displayName.includes("SwiperSlide")}function Hp(i){const l=[];return we.Children.toArray(i).forEach(s=>{Lp(s)?l.push(s):s.props&&s.props.children&&Hp(s.props.children).forEach(o=>l.push(o))}),l}function fv(i){const l=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return we.Children.toArray(i).forEach(o=>{if(Lp(o))l.push(o);else if(o.props&&o.props.slot&&s[o.props.slot])s[o.props.slot].push(o);else if(o.props&&o.props.children){const c=Hp(o.props.children);c.length>0?c.forEach(f=>l.push(f)):s["container-end"].push(o)}else s["container-end"].push(o)}),{slides:l,slots:s}}function dv(i,l,s){if(!s)return null;const o=b=>{let S=b;return b<0?S=l.length+b:S>=l.length&&(S=S-l.length),S},c=i.isHorizontal()?{[i.rtlTranslate?"right":"left"]:`${s.offset}px`}:{top:`${s.offset}px`},{from:f,to:m}=s,v=i.params.loop?-l.length:0,h=i.params.loop?l.length*2:l.length,p=[];for(let b=v;b<h;b+=1)b>=f&&b<=m&&p.push(l[o(b)]);return p.map((b,S)=>we.cloneElement(b,{swiper:i,style:c,key:b.props.virtualIndex||b.key||`slide-${S}`}))}function Gl(i,l){return typeof window>"u"?be.useEffect(i,l):be.useLayoutEffect(i,l)}const hp=be.createContext(null),pv=be.createContext(null),qp=be.forwardRef(function(i,l){let{className:s,tag:o="div",wrapperTag:c="div",children:f,onSwiper:m,...v}=i===void 0?{}:i,h=!1;const[p,b]=be.useState("swiper"),[S,A]=be.useState(null),[B,T]=be.useState(!1),M=be.useRef(!1),U=be.useRef(null),k=be.useRef(null),w=be.useRef(null),O=be.useRef(null),H=be.useRef(null),L=be.useRef(null),K=be.useRef(null),F=be.useRef(null),{params:J,passedParams:V,rest:Z,events:$}=ov(v),{slides:ee,slots:ie}=fv(f),he=()=>{T(!B)};Object.assign(J.on,{_containerClasses(ne,x){b(x)}});const ce=()=>{Object.assign(J.on,$),h=!0;const ne={...J};if(delete ne.wrapperClass,k.current=new au(ne),k.current.virtual&&k.current.params.virtual.enabled){k.current.virtual.slides=ee;const x={cache:!1,slides:ee,renderExternal:A,renderExternalUpdate:!1};ja(k.current.params.virtual,x),ja(k.current.originalParams.virtual,x)}};U.current||ce(),k.current&&k.current.on("_beforeBreakpoint",he);const _=()=>{h||!$||!k.current||Object.keys($).forEach(ne=>{k.current.on(ne,$[ne])})},Q=()=>{!$||!k.current||Object.keys($).forEach(ne=>{k.current.off(ne,$[ne])})};be.useEffect(()=>()=>{k.current&&k.current.off("_beforeBreakpoint",he)}),be.useEffect(()=>{!M.current&&k.current&&(k.current.emitSlidesClasses(),M.current=!0)}),Gl(()=>{if(l&&(l.current=U.current),!!U.current)return k.current.destroyed&&ce(),sv({el:U.current,nextEl:H.current,prevEl:L.current,paginationEl:K.current,scrollbarEl:F.current,swiper:k.current},J),m&&!k.current.destroyed&&m(k.current),()=>{k.current&&!k.current.destroyed&&k.current.destroy(!0,!1)}},[]),Gl(()=>{_();const ne=uv(V,w.current,ee,O.current,x=>x.key);return w.current=V,O.current=ee,ne.length&&k.current&&!k.current.destroyed&&rv({swiper:k.current,slides:ee,passedParams:V,changedParams:ne,nextEl:H.current,prevEl:L.current,scrollbarEl:F.current,paginationEl:K.current}),()=>{Q()}}),Gl(()=>{cv(k.current)},[S]);function P(){return J.virtual?dv(k.current,ee,S):ee.map((ne,x)=>we.cloneElement(ne,{swiper:k.current,swiperSlideIndex:x}))}return we.createElement(o,br({ref:U,className:Bp(`${p}${s?` ${s}`:""}`)},Z),we.createElement(pv.Provider,{value:k.current},ie["container-start"],we.createElement(c,{className:iv(J.wrapperClass)},ie["wrapper-start"],P(),ie["wrapper-end"]),Np(J)&&we.createElement(we.Fragment,null,we.createElement("div",{ref:L,className:"swiper-button-prev"}),we.createElement("div",{ref:H,className:"swiper-button-next"})),Rp(J)&&we.createElement("div",{ref:F,className:"swiper-scrollbar"}),kp(J)&&we.createElement("div",{ref:K,className:"swiper-pagination"}),ie["container-end"]))});qp.displayName="Swiper";const cr=be.forwardRef(function(i,l){let{tag:s="div",children:o,className:c="",swiper:f,zoom:m,lazy:v,virtualIndex:h,swiperSlideIndex:p,...b}=i===void 0?{}:i;const S=be.useRef(null),[A,B]=be.useState("swiper-slide"),[T,M]=be.useState(!1);function U(H,L,K){L===S.current&&B(K)}Gl(()=>{if(typeof p<"u"&&(S.current.swiperSlideIndex=p),l&&(l.current=S.current),!(!S.current||!f)){if(f.destroyed){A!=="swiper-slide"&&B("swiper-slide");return}return f.on("_slideClass",U),()=>{f&&f.off("_slideClass",U)}}}),Gl(()=>{f&&S.current&&!f.destroyed&&B(f.getSlideClasses(S.current))},[f]);const k={isActive:A.indexOf("swiper-slide-active")>=0,isVisible:A.indexOf("swiper-slide-visible")>=0,isPrev:A.indexOf("swiper-slide-prev")>=0,isNext:A.indexOf("swiper-slide-next")>=0},w=()=>typeof o=="function"?o(k):o,O=()=>{M(!0)};return we.createElement(s,br({ref:S,className:Bp(`${A}${c?` ${c}`:""}`),"data-swiper-slide-index":h,onLoad:O},b),m&&we.createElement(hp.Provider,{value:k},we.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof m=="number"?m:void 0},w(),v&&!T&&we.createElement("div",{className:"swiper-lazy-preloader"}))),!m&&we.createElement(hp.Provider,{value:k},w(),v&&!T&&we.createElement("div",{className:"swiper-lazy-preloader"})))});cr.displayName="SwiperSlide";function jp(i,l,s,o){return i.params.createElements&&Object.keys(o).forEach(c=>{if(!s[c]&&s.auto===!0){let f=Gt(i.el,`.${o[c]}`)[0];f||(f=mr("div",o[c]),f.className=o[c],i.el.append(f)),s[c]=f,l[c]=f}}),s}function hv(i){let{swiper:l,extendParams:s,on:o,emit:c}=i;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),l.navigation={nextEl:null,prevEl:null};function f(T){let M;return T&&typeof T=="string"&&l.isElement&&(M=l.el.querySelector(T)||l.hostEl.querySelector(T),M)?M:(T&&(typeof T=="string"&&(M=[...document.querySelectorAll(T)]),l.params.uniqueNavElements&&typeof T=="string"&&M&&M.length>1&&l.el.querySelectorAll(T).length===1?M=l.el.querySelector(T):M&&M.length===1&&(M=M[0])),T&&!M?T:M)}function m(T,M){const U=l.params.navigation;T=Ke(T),T.forEach(k=>{k&&(k.classList[M?"add":"remove"](...U.disabledClass.split(" ")),k.tagName==="BUTTON"&&(k.disabled=M),l.params.watchOverflow&&l.enabled&&k.classList[l.isLocked?"add":"remove"](U.lockClass))})}function v(){const{nextEl:T,prevEl:M}=l.navigation;if(l.params.loop){m(M,!1),m(T,!1);return}m(M,l.isBeginning&&!l.params.rewind),m(T,l.isEnd&&!l.params.rewind)}function h(T){T.preventDefault(),!(l.isBeginning&&!l.params.loop&&!l.params.rewind)&&(l.slidePrev(),c("navigationPrev"))}function p(T){T.preventDefault(),!(l.isEnd&&!l.params.loop&&!l.params.rewind)&&(l.slideNext(),c("navigationNext"))}function b(){const T=l.params.navigation;if(l.params.navigation=jp(l,l.originalParams.navigation,l.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(T.nextEl||T.prevEl))return;let M=f(T.nextEl),U=f(T.prevEl);Object.assign(l.navigation,{nextEl:M,prevEl:U}),M=Ke(M),U=Ke(U);const k=(w,O)=>{w&&w.addEventListener("click",O==="next"?p:h),!l.enabled&&w&&w.classList.add(...T.lockClass.split(" "))};M.forEach(w=>k(w,"next")),U.forEach(w=>k(w,"prev"))}function S(){let{nextEl:T,prevEl:M}=l.navigation;T=Ke(T),M=Ke(M);const U=(k,w)=>{k.removeEventListener("click",w==="next"?p:h),k.classList.remove(...l.params.navigation.disabledClass.split(" "))};T.forEach(k=>U(k,"next")),M.forEach(k=>U(k,"prev"))}o("init",()=>{l.params.navigation.enabled===!1?B():(b(),v())}),o("toEdge fromEdge lock unlock",()=>{v()}),o("destroy",()=>{S()}),o("enable disable",()=>{let{nextEl:T,prevEl:M}=l.navigation;if(T=Ke(T),M=Ke(M),l.enabled){v();return}[...T,...M].filter(U=>!!U).forEach(U=>U.classList.add(l.params.navigation.lockClass))}),o("click",(T,M)=>{let{nextEl:U,prevEl:k}=l.navigation;U=Ke(U),k=Ke(k);const w=M.target;let O=k.includes(w)||U.includes(w);if(l.isElement&&!O){const H=M.path||M.composedPath&&M.composedPath();H&&(O=H.find(L=>U.includes(L)||k.includes(L)))}if(l.params.navigation.hideOnClick&&!O){if(l.pagination&&l.params.pagination&&l.params.pagination.clickable&&(l.pagination.el===w||l.pagination.el.contains(w)))return;let H;U.length?H=U[0].classList.contains(l.params.navigation.hiddenClass):k.length&&(H=k[0].classList.contains(l.params.navigation.hiddenClass)),c(H===!0?"navigationShow":"navigationHide"),[...U,...k].filter(L=>!!L).forEach(L=>L.classList.toggle(l.params.navigation.hiddenClass))}});const A=()=>{l.el.classList.remove(...l.params.navigation.navigationDisabledClass.split(" ")),b(),v()},B=()=>{l.el.classList.add(...l.params.navigation.navigationDisabledClass.split(" ")),S()};Object.assign(l.navigation,{enable:A,disable:B,update:v,init:b,destroy:S})}function jl(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function mv(i){let{swiper:l,extendParams:s,on:o,emit:c}=i;const f="swiper-pagination";s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:w=>w,formatFractionTotal:w=>w,bulletClass:`${f}-bullet`,bulletActiveClass:`${f}-bullet-active`,modifierClass:`${f}-`,currentClass:`${f}-current`,totalClass:`${f}-total`,hiddenClass:`${f}-hidden`,progressbarFillClass:`${f}-progressbar-fill`,progressbarOppositeClass:`${f}-progressbar-opposite`,clickableClass:`${f}-clickable`,lockClass:`${f}-lock`,horizontalClass:`${f}-horizontal`,verticalClass:`${f}-vertical`,paginationDisabledClass:`${f}-disabled`}}),l.pagination={el:null,bullets:[]};let m,v=0;function h(){return!l.params.pagination.el||!l.pagination.el||Array.isArray(l.pagination.el)&&l.pagination.el.length===0}function p(w,O){const{bulletActiveClass:H}=l.params.pagination;w&&(w=w[`${O==="prev"?"previous":"next"}ElementSibling`],w&&(w.classList.add(`${H}-${O}`),w=w[`${O==="prev"?"previous":"next"}ElementSibling`],w&&w.classList.add(`${H}-${O}-${O}`)))}function b(w,O,H){if(w=w%H,O=O%H,O===w+1)return"next";if(O===w-1)return"previous"}function S(w){const O=w.target.closest(jl(l.params.pagination.bulletClass));if(!O)return;w.preventDefault();const H=gr(O)*l.params.slidesPerGroup;if(l.params.loop){if(l.realIndex===H)return;const L=b(l.realIndex,H,l.slides.length);L==="next"?l.slideNext():L==="previous"?l.slidePrev():l.slideToLoop(H)}else l.slideTo(H)}function A(){const w=l.rtl,O=l.params.pagination;if(h())return;let H=l.pagination.el;H=Ke(H);let L,K;const F=l.virtual&&l.params.virtual.enabled?l.virtual.slides.length:l.slides.length,J=l.params.loop?Math.ceil(F/l.params.slidesPerGroup):l.snapGrid.length;if(l.params.loop?(K=l.previousRealIndex||0,L=l.params.slidesPerGroup>1?Math.floor(l.realIndex/l.params.slidesPerGroup):l.realIndex):typeof l.snapIndex<"u"?(L=l.snapIndex,K=l.previousSnapIndex):(K=l.previousIndex||0,L=l.activeIndex||0),O.type==="bullets"&&l.pagination.bullets&&l.pagination.bullets.length>0){const V=l.pagination.bullets;let Z,$,ee;if(O.dynamicBullets&&(m=Fs(V[0],l.isHorizontal()?"width":"height"),H.forEach(ie=>{ie.style[l.isHorizontal()?"width":"height"]=`${m*(O.dynamicMainBullets+4)}px`}),O.dynamicMainBullets>1&&K!==void 0&&(v+=L-(K||0),v>O.dynamicMainBullets-1?v=O.dynamicMainBullets-1:v<0&&(v=0)),Z=Math.max(L-v,0),$=Z+(Math.min(V.length,O.dynamicMainBullets)-1),ee=($+Z)/2),V.forEach(ie=>{const he=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(ce=>`${O.bulletActiveClass}${ce}`)].map(ce=>typeof ce=="string"&&ce.includes(" ")?ce.split(" "):ce).flat();ie.classList.remove(...he)}),H.length>1)V.forEach(ie=>{const he=gr(ie);he===L?ie.classList.add(...O.bulletActiveClass.split(" ")):l.isElement&&ie.setAttribute("part","bullet"),O.dynamicBullets&&(he>=Z&&he<=$&&ie.classList.add(...`${O.bulletActiveClass}-main`.split(" ")),he===Z&&p(ie,"prev"),he===$&&p(ie,"next"))});else{const ie=V[L];if(ie&&ie.classList.add(...O.bulletActiveClass.split(" ")),l.isElement&&V.forEach((he,ce)=>{he.setAttribute("part",ce===L?"bullet-active":"bullet")}),O.dynamicBullets){const he=V[Z],ce=V[$];for(let _=Z;_<=$;_+=1)V[_]&&V[_].classList.add(...`${O.bulletActiveClass}-main`.split(" "));p(he,"prev"),p(ce,"next")}}if(O.dynamicBullets){const ie=Math.min(V.length,O.dynamicMainBullets+4),he=(m*ie-m)/2-ee*m,ce=w?"right":"left";V.forEach(_=>{_.style[l.isHorizontal()?ce:"top"]=`${he}px`})}}H.forEach((V,Z)=>{if(O.type==="fraction"&&(V.querySelectorAll(jl(O.currentClass)).forEach($=>{$.textContent=O.formatFractionCurrent(L+1)}),V.querySelectorAll(jl(O.totalClass)).forEach($=>{$.textContent=O.formatFractionTotal(J)})),O.type==="progressbar"){let $;O.progressbarOpposite?$=l.isHorizontal()?"vertical":"horizontal":$=l.isHorizontal()?"horizontal":"vertical";const ee=(L+1)/J;let ie=1,he=1;$==="horizontal"?ie=ee:he=ee,V.querySelectorAll(jl(O.progressbarFillClass)).forEach(ce=>{ce.style.transform=`translate3d(0,0,0) scaleX(${ie}) scaleY(${he})`,ce.style.transitionDuration=`${l.params.speed}ms`})}O.type==="custom"&&O.renderCustom?(vr(V,O.renderCustom(l,L+1,J)),Z===0&&c("paginationRender",V)):(Z===0&&c("paginationRender",V),c("paginationUpdate",V)),l.params.watchOverflow&&l.enabled&&V.classList[l.isLocked?"add":"remove"](O.lockClass)})}function B(){const w=l.params.pagination;if(h())return;const O=l.virtual&&l.params.virtual.enabled?l.virtual.slides.length:l.grid&&l.params.grid.rows>1?l.slides.length/Math.ceil(l.params.grid.rows):l.slides.length;let H=l.pagination.el;H=Ke(H);let L="";if(w.type==="bullets"){let K=l.params.loop?Math.ceil(O/l.params.slidesPerGroup):l.snapGrid.length;l.params.freeMode&&l.params.freeMode.enabled&&K>O&&(K=O);for(let F=0;F<K;F+=1)w.renderBullet?L+=w.renderBullet.call(l,F,w.bulletClass):L+=`<${w.bulletElement} ${l.isElement?'part="bullet"':""} class="${w.bulletClass}"></${w.bulletElement}>`}w.type==="fraction"&&(w.renderFraction?L=w.renderFraction.call(l,w.currentClass,w.totalClass):L=`<span class="${w.currentClass}"></span> / <span class="${w.totalClass}"></span>`),w.type==="progressbar"&&(w.renderProgressbar?L=w.renderProgressbar.call(l,w.progressbarFillClass):L=`<span class="${w.progressbarFillClass}"></span>`),l.pagination.bullets=[],H.forEach(K=>{w.type!=="custom"&&vr(K,L||""),w.type==="bullets"&&l.pagination.bullets.push(...K.querySelectorAll(jl(w.bulletClass)))}),w.type!=="custom"&&c("paginationRender",H[0])}function T(){l.params.pagination=jp(l,l.originalParams.pagination,l.params.pagination,{el:"swiper-pagination"});const w=l.params.pagination;if(!w.el)return;let O;typeof w.el=="string"&&l.isElement&&(O=l.el.querySelector(w.el)),!O&&typeof w.el=="string"&&(O=[...document.querySelectorAll(w.el)]),O||(O=w.el),!(!O||O.length===0)&&(l.params.uniqueNavElements&&typeof w.el=="string"&&Array.isArray(O)&&O.length>1&&(O=[...l.el.querySelectorAll(w.el)],O.length>1&&(O=O.find(H=>Op(H,".swiper")[0]===l.el))),Array.isArray(O)&&O.length===1&&(O=O[0]),Object.assign(l.pagination,{el:O}),O=Ke(O),O.forEach(H=>{w.type==="bullets"&&w.clickable&&H.classList.add(...(w.clickableClass||"").split(" ")),H.classList.add(w.modifierClass+w.type),H.classList.add(l.isHorizontal()?w.horizontalClass:w.verticalClass),w.type==="bullets"&&w.dynamicBullets&&(H.classList.add(`${w.modifierClass}${w.type}-dynamic`),v=0,w.dynamicMainBullets<1&&(w.dynamicMainBullets=1)),w.type==="progressbar"&&w.progressbarOpposite&&H.classList.add(w.progressbarOppositeClass),w.clickable&&H.addEventListener("click",S),l.enabled||H.classList.add(w.lockClass)}))}function M(){const w=l.params.pagination;if(h())return;let O=l.pagination.el;O&&(O=Ke(O),O.forEach(H=>{H.classList.remove(w.hiddenClass),H.classList.remove(w.modifierClass+w.type),H.classList.remove(l.isHorizontal()?w.horizontalClass:w.verticalClass),w.clickable&&(H.classList.remove(...(w.clickableClass||"").split(" ")),H.removeEventListener("click",S))})),l.pagination.bullets&&l.pagination.bullets.forEach(H=>H.classList.remove(...w.bulletActiveClass.split(" ")))}o("changeDirection",()=>{if(!l.pagination||!l.pagination.el)return;const w=l.params.pagination;let{el:O}=l.pagination;O=Ke(O),O.forEach(H=>{H.classList.remove(w.horizontalClass,w.verticalClass),H.classList.add(l.isHorizontal()?w.horizontalClass:w.verticalClass)})}),o("init",()=>{l.params.pagination.enabled===!1?k():(T(),B(),A())}),o("activeIndexChange",()=>{typeof l.snapIndex>"u"&&A()}),o("snapIndexChange",()=>{A()}),o("snapGridLengthChange",()=>{B(),A()}),o("destroy",()=>{M()}),o("enable disable",()=>{let{el:w}=l.pagination;w&&(w=Ke(w),w.forEach(O=>O.classList[l.enabled?"remove":"add"](l.params.pagination.lockClass)))}),o("lock unlock",()=>{A()}),o("click",(w,O)=>{const H=O.target,L=Ke(l.pagination.el);if(l.params.pagination.el&&l.params.pagination.hideOnClick&&L&&L.length>0&&!H.classList.contains(l.params.pagination.bulletClass)){if(l.navigation&&(l.navigation.nextEl&&H===l.navigation.nextEl||l.navigation.prevEl&&H===l.navigation.prevEl))return;const K=L[0].classList.contains(l.params.pagination.hiddenClass);c(K===!0?"paginationShow":"paginationHide"),L.forEach(F=>F.classList.toggle(l.params.pagination.hiddenClass))}});const U=()=>{l.el.classList.remove(l.params.pagination.paginationDisabledClass);let{el:w}=l.pagination;w&&(w=Ke(w),w.forEach(O=>O.classList.remove(l.params.pagination.paginationDisabledClass))),T(),B(),A()},k=()=>{l.el.classList.add(l.params.pagination.paginationDisabledClass);let{el:w}=l.pagination;w&&(w=Ke(w),w.forEach(O=>O.classList.add(l.params.pagination.paginationDisabledClass))),M()};Object.assign(l.pagination,{enable:U,disable:k,render:B,update:A,init:T,destroy:M})}function gv(i){let{swiper:l,extendParams:s,on:o,emit:c,params:f}=i;l.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let m,v,h=f&&f.autoplay?f.autoplay.delay:3e3,p=f&&f.autoplay?f.autoplay.delay:3e3,b,S=new Date().getTime(),A,B,T,M,U,k,w;function O(P){!l||l.destroyed||!l.wrapperEl||P.target===l.wrapperEl&&(l.wrapperEl.removeEventListener("transitionend",O),!(w||P.detail&&P.detail.bySwiperTouchMove)&&Z())}const H=()=>{if(l.destroyed||!l.autoplay.running)return;l.autoplay.paused?A=!0:A&&(p=b,A=!1);const P=l.autoplay.paused?b:S+p-new Date().getTime();l.autoplay.timeLeft=P,c("autoplayTimeLeft",P,P/h),v=requestAnimationFrame(()=>{H()})},L=()=>{let P;return l.virtual&&l.params.virtual.enabled?P=l.slides.find(x=>x.classList.contains("swiper-slide-active")):P=l.slides[l.activeIndex],P?parseInt(P.getAttribute("data-swiper-autoplay"),10):void 0},K=P=>{if(l.destroyed||!l.autoplay.running)return;cancelAnimationFrame(v),H();let ne=typeof P>"u"?l.params.autoplay.delay:P;h=l.params.autoplay.delay,p=l.params.autoplay.delay;const x=L();!Number.isNaN(x)&&x>0&&typeof P>"u"&&(ne=x,h=x,p=x),b=ne;const X=l.params.speed,W=()=>{!l||l.destroyed||(l.params.autoplay.reverseDirection?!l.isBeginning||l.params.loop||l.params.rewind?(l.slidePrev(X,!0,!0),c("autoplay")):l.params.autoplay.stopOnLastSlide||(l.slideTo(l.slides.length-1,X,!0,!0),c("autoplay")):!l.isEnd||l.params.loop||l.params.rewind?(l.slideNext(X,!0,!0),c("autoplay")):l.params.autoplay.stopOnLastSlide||(l.slideTo(0,X,!0,!0),c("autoplay")),l.params.cssMode&&(S=new Date().getTime(),requestAnimationFrame(()=>{K()})))};return ne>0?(clearTimeout(m),m=setTimeout(()=>{W()},ne)):requestAnimationFrame(()=>{W()}),ne},F=()=>{S=new Date().getTime(),l.autoplay.running=!0,K(),c("autoplayStart")},J=()=>{l.autoplay.running=!1,clearTimeout(m),cancelAnimationFrame(v),c("autoplayStop")},V=(P,ne)=>{if(l.destroyed||!l.autoplay.running)return;clearTimeout(m),P||(k=!0);const x=()=>{c("autoplayPause"),l.params.autoplay.waitForTransition?l.wrapperEl.addEventListener("transitionend",O):Z()};if(l.autoplay.paused=!0,ne){U&&(b=l.params.autoplay.delay),U=!1,x();return}b=(b||l.params.autoplay.delay)-(new Date().getTime()-S),!(l.isEnd&&b<0&&!l.params.loop)&&(b<0&&(b=0),x())},Z=()=>{l.isEnd&&b<0&&!l.params.loop||l.destroyed||!l.autoplay.running||(S=new Date().getTime(),k?(k=!1,K(b)):K(),l.autoplay.paused=!1,c("autoplayResume"))},$=()=>{if(l.destroyed||!l.autoplay.running)return;const P=Yt();P.visibilityState==="hidden"&&(k=!0,V(!0)),P.visibilityState==="visible"&&Z()},ee=P=>{P.pointerType==="mouse"&&(k=!0,w=!0,!(l.animating||l.autoplay.paused)&&V(!0))},ie=P=>{P.pointerType==="mouse"&&(w=!1,l.autoplay.paused&&Z())},he=()=>{l.params.autoplay.pauseOnMouseEnter&&(l.el.addEventListener("pointerenter",ee),l.el.addEventListener("pointerleave",ie))},ce=()=>{l.el&&typeof l.el!="string"&&(l.el.removeEventListener("pointerenter",ee),l.el.removeEventListener("pointerleave",ie))},_=()=>{Yt().addEventListener("visibilitychange",$)},Q=()=>{Yt().removeEventListener("visibilitychange",$)};o("init",()=>{l.params.autoplay.enabled&&(he(),_(),F())}),o("destroy",()=>{ce(),Q(),l.autoplay.running&&J()}),o("_freeModeStaticRelease",()=>{(T||k)&&Z()}),o("_freeModeNoMomentumRelease",()=>{l.params.autoplay.disableOnInteraction?J():V(!0,!0)}),o("beforeTransitionStart",(P,ne,x)=>{l.destroyed||!l.autoplay.running||(x||!l.params.autoplay.disableOnInteraction?V(!0,!0):J())}),o("sliderFirstMove",()=>{if(!(l.destroyed||!l.autoplay.running)){if(l.params.autoplay.disableOnInteraction){J();return}B=!0,T=!1,k=!1,M=setTimeout(()=>{k=!0,T=!0,V(!0)},200)}}),o("touchEnd",()=>{if(!(l.destroyed||!l.autoplay.running||!B)){if(clearTimeout(M),clearTimeout(m),l.params.autoplay.disableOnInteraction){T=!1,B=!1;return}T&&l.params.cssMode&&Z(),T=!1,B=!1}}),o("slideChange",()=>{l.destroyed||!l.autoplay.running||(U=!0)}),Object.assign(l.autoplay,{start:F,stop:J,pause:V,resume:Z})}const vv=({setFormObj:i,onSubmit:l})=>{const[s,o]=be.useState(!1),[c,f]=be.useState(!1),m=()=>{o(!s)},v=()=>{f(!c)};function h(b){const{name:S,value:A}=b.target;i(B=>({...B,[S]:A}))}function p(b){b.preventDefault(),l()}return q.jsx("div",{className:"max-w-screen min-h-screen flex justify-center items-center bg-[#605A71] text-white",children:q.jsxs("form",{className:"w-full h-screen md:h-full md  md:flex md:gap-7   bg-[#2C2638] max-w-[950px] md:px-10   mx-auto md:rounded-xl",onSubmit:p,children:[q.jsx("div",{className:" left-section md:w-1/2 hidden md:block rounded-2xl max-h-[570px] overflow-hidden   my-auto ",children:q.jsxs(qp,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:1e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:[gv,mv,hv],className:"w-full h-full ",children:[q.jsx(cr,{children:q.jsx("img",{className:" object-contain w-full h-full object-center  my-auto",src:T0,alt:"bg1"})}),q.jsx(cr,{children:q.jsx("img",{className:"object-center object-contain w-full h-full  my-auto",src:w0,alt:"bg2"})}),q.jsx(cr,{children:q.jsx("img",{className:"object-center object-contain h-full w-full   my-auto",src:E0,alt:"bg3"})})]})}),q.jsxs("div",{className:"right-section w-full h-full md:w-1/2 my-auto ",children:[q.jsx("h1",{className:"text-center font-medium text-3xl py-4 uppercase md:text-4xl",children:"Create an account"}),q.jsxs("div",{className:"flex gap-1  text-sm md:text-base justify-center",children:[q.jsx("p",{className:"text-[#7F7B89]",children:"Already have an Account?"}),q.jsx("a",{href:"/",className:"text-purple-300 font-medium",children:"Log in"})]}),q.jsxs("div",{className:"flex gap-4 mt-4 mb-4 md:mb-4 mx-auto w-11/12",children:[q.jsx("input",{onChange:h,name:"FirstName",required:!0,type:"text",placeholder:"First Name ",className:"border-none bg-[#3C364C] w-1/2 p-2  rounded-md text-sm md:text-base placeholder:text-[#7F7B89]"}),q.jsx("input",{onChange:h,name:"LastName",required:!0,type:"text",placeholder:"Last Name ",className:"border-none bg-[#3C364C] w-1/2 p-2  rounded-md text-sm md:text-base placeholder:text-[#7F7B89]"})]}),q.jsxs("div",{className:"flex gap-4 mb-4 md:mb-4 mx-auto w-11/12",children:[q.jsx("input",{onChange:h,name:"age",required:!0,min:5,max:200,type:"number",placeholder:"Enter your age",className:"border-none bg-[#3C364C] w-1/2 p-2  rounded-md text-sm  md:text-base placeholder:text-[#7F7B89]"}),q.jsxs("select",{required:!0,onChange:b=>{h(b),b.target.classList.toggle("text-[#7F7B89]",b.target.value===""),b.target.classList.toggle("text-white",b.target.value!=="")},defaultValue:"",name:"gender",className:"border-none bg-[#3C364C] w-1/2 p-2  rounded-md text-sm md:text-base  text-[#7F7B89]",children:[q.jsx("option",{value:"",disabled:!0,className:"text-[#7F7B89]",children:"Gender"}),q.jsx("option",{value:"Male",children:"Male"}),q.jsx("option",{value:"Female",children:"Female"}),q.jsx("option",{value:"Other",children:"Other"})]})]}),q.jsx("input",{onChange:h,required:!0,type:"email",name:"Email",autoComplete:"email",placeholder:"Email",className:"border-none block mb-4 md:mb-4 bg-[#3C364C] w-11/12  p-2  md:text-base mx-auto rounded-md text-sm placeholder:text-[#7F7B89]"}),q.jsxs("div",{className:"border-none block relative mb-3 md:mb-4 bg-[#3C364C] mx-auto w-11/12  rounded-md text-sm md:text-base",children:[q.jsx("input",{onChange:h,required:!0,type:s?"text":"password",name:"Password",placeholder:"Password",className:"border-none block mb-4 md:mb-4  p-2 bg-[#3C364C] w-full  mx-auto md:text-base rounded-md text-sm placeholder:text-[#7F7B89]"}),s?q.jsx(fr,{onClick:m,className:"absolute right-2 top-2 md:top-2 text-[#7F7B89] hover:text-white cursor-pointer"}):q.jsx(dr,{onClick:m,className:"absolute right-2 top-2 md:top-2 text-[#7F7B89] hover:text-white cursor-pointer"})]}),q.jsxs("div",{className:"border-none block relative mb-3 bg-[#3C364C] mx-auto w-11/12  rounded-md text-sm",children:[q.jsx("input",{onChange:h,required:!0,type:c?"text":"password",name:"ConfirmPassword",placeholder:"Confirm your Password",className:"border-none block mb-3 md:mb-4 p-2  md:text-base     bg-[#3C364C] w-full  mx-auto rounded-md text-sm placeholder:text-[#7F7B89]"}),c?q.jsx(fr,{onClick:v,className:"absolute right-2 top-2 md:top-2 text-[#7F7B89] hover:text-white  cursor-pointer "}):q.jsx(dr,{onClick:v,className:"absolute right-2 top-2 md:top-2 text-[#7F7B89] hover:text-white  cursor-pointer"})]}),q.jsxs("div",{className:"w-11/12 mx-auto ",children:[q.jsx("input",{onChange:h,name:"checkbox",required:!0,type:"checkbox",id:"terms",className:"mr-2 accent-purple-500 md:scale-150 "}),q.jsxs("label",{htmlFor:"terms",className:"text-sm md:text-base text-[#7F7B89]",children:["I agree to the ",q.jsx("span",{className:" underline cursor-pointer text-purple-300 font-medium",children:" terms & conditions"})]})]}),q.jsx("button",{className:"w-11/12 mx-auto py-2  bg-[#6D54B3] hover:bg-[#493684] cursor-pointer rounded-md text-sm  md:text-base font-medium block mt-6 active:scale-90 transition duration-150",children:"Create Account"}),q.jsxs("div",{className:"flex items-center w-11/12 mx-auto justify-center text-[#7F7B89] text-sm my-4",children:[q.jsx("div",{className:"flex-grow border-t border-[#7F7B89]"}),q.jsx("span",{className:"mx-3",children:"or register with"}),q.jsx("div",{className:"flex-grow border-t border-[#7F7B89]"})]}),q.jsxs("div",{className:"flex gap-4 w-11/12 mx-auto  md:mb-4",children:[q.jsx("button",{className:"w-1/2 py-1 bg-[#3C364C] cursor-pointer rounded-md text-sm  flex justify-center items-center",children:q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"35",height:"35",viewBox:"0 0 48 48",children:[q.jsx("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),q.jsx("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),q.jsx("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),q.jsx("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]})}),q.jsx("button",{className:"w-1/2 py-1  md:py-3 bg-[#3C364C] rounded-md text-sm  cursor-pointer flex justify-center items-center",children:q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"35",height:"35",viewBox:"0 0 48 48",children:[q.jsx("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),q.jsx("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})]})})]})]})]})})},bv=({formObj:i})=>{const[l,s]=we.useState(!1),[o,c]=we.useState(!1);if(!i||Object.keys(i).length===0||Object.values(i).every(p=>p===""||p===void 0||p===null))return q.jsx("div",{className:"min-h-screen bg-[#605A71] flex items-center justify-center p-4",children:q.jsxs("div",{className:"bg-[#2C2638] rounded-xl p-8 max-w-md w-full text-center",children:[q.jsx("div",{className:"w-16 h-16 bg-[#3C364C] rounded-full flex items-center justify-center mx-auto mb-4",children:q.jsx(ar,{className:"w-8 h-8 text-[#7F7B89]"})}),q.jsx("h2",{className:"text-2xl font-medium text-white mb-2",children:"No Data Available"}),q.jsx("p",{className:"text-[#7F7B89]",children:"Please fill out the form to see your information here."})]})});const m=p=>{switch(p){case"FirstName":return"First Name";case"LastName":return"Last Name";case"Email":return"Email Address";case"age":return"Age";case"gender":return"Gender";case"Password":return"Password";case"ConfirmPassword":return"Confirm Password";case"checkbox":return"Terms & Conditions";default:return p}},v=p=>{switch(p){case"FirstName":case"LastName":return q.jsx(ar,{className:"w-5 h-5 text-[#6D54B3]"});case"Email":return q.jsx(L0,{className:"w-5 h-5 text-[#6D54B3]"});case"age":return q.jsx(D0,{className:"w-5 h-5 text-[#6D54B3]"});case"gender":return q.jsx(j0,{className:"w-5 h-5 text-[#6D54B3]"});case"checkbox":return q.jsx(sp,{className:"w-5 h-5 text-green-500"});default:return q.jsx(ar,{className:"w-5 h-5 text-[#6D54B3]"})}},h=(p,b)=>p==="checkbox"?q.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${b?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:b?"Accepted":"Not Accepted"}):p==="Password"?q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"font-mono text-[#7F7B89]",children:l?b:"•".repeat(b?.length||8)}),q.jsx("button",{onClick:()=>s(!l),className:"text-[#7F7B89] hover:text-white transition-colors",children:l?q.jsx(fr,{className:"w-4 h-4"}):q.jsx(dr,{className:"w-4 h-4"})})]}):p==="ConfirmPassword"?q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"font-mono text-[#7F7B89]",children:o?b:"•".repeat(b?.length||8)}),q.jsx("button",{onClick:()=>c(!o),className:"text-[#7F7B89] hover:text-white transition-colors",children:o?q.jsx(fr,{className:"w-4 h-4"}):q.jsx(dr,{className:"w-4 h-4"})})]}):p==="age"?q.jsxs("span",{className:"text-white font-medium",children:[b," years old"]}):q.jsx("span",{className:"text-white font-medium",children:b});return q.jsx("div",{className:"min-h-screen bg-[#605A71] p-4",children:q.jsxs("div",{className:"max-w-4xl mx-auto",children:[q.jsxs("div",{className:"text-center mb-8",children:[q.jsx("h1",{className:"text-3xl md:text-4xl font-medium text-white mb-2",children:"Account Information"}),q.jsx("p",{className:"text-[#7F7B89] text-sm md:text-base",children:"Review your submitted information"})]}),q.jsxs("div",{className:"bg-[#2C2638] rounded-xl overflow-hidden",children:[q.jsx("div",{className:"bg-gradient-to-r from-[#6D54B3] to-[#493684] p-6",children:q.jsxs("div",{className:"flex items-center gap-4",children:[q.jsx("div",{className:"w-16 h-16 bg-white/20 rounded-full flex items-center justify-center",children:q.jsx(ar,{className:"w-8 h-8 text-white"})}),q.jsxs("div",{children:[q.jsx("h2",{className:"text-2xl font-medium text-white",children:i.FirstName&&i.LastName?`${i.FirstName} ${i.LastName}`:i.FirstName||i.LastName||"User Profile"}),q.jsx("p",{className:"text-purple-200",children:i.Email||"No email provided"})]})]})}),q.jsxs("div",{className:"p-6",children:[q.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Object.entries(i).map(([p,b])=>!b&&b!==!1?null:q.jsx("div",{className:"bg-[#3C364C] rounded-lg p-4 transition-all duration-200 hover:bg-[#423B4D] group",children:q.jsxs("div",{className:"flex items-start gap-3",children:[q.jsx("div",{className:"mt-1",children:v(p)}),q.jsxs("div",{className:"flex-1",children:[q.jsx("label",{className:"text-[#7F7B89] text-sm font-medium block mb-1",children:m(p)}),q.jsx("div",{className:"text-white",children:h(p,b)})]})]})},p))}),i.Password&&i.ConfirmPassword&&q.jsx("div",{className:"mt-6 p-4 bg-[#3C364C] rounded-lg",children:q.jsx("div",{className:"flex items-center gap-3",children:i.Password===i.ConfirmPassword?q.jsxs(q.Fragment,{children:[q.jsx(sp,{className:"w-5 h-5 text-green-500"}),q.jsx("span",{className:"text-green-400 font-medium",children:"Passwords match"})]}):q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center",children:q.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"})}),q.jsx("span",{className:"text-red-400 font-medium",children:"Passwords do not match"})]})})}),q.jsxs("div",{className:"mt-8 flex flex-col sm:flex-row gap-4",children:[q.jsx("button",{className:"flex-1 bg-[#6D54B3] hover:bg-[#493684] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 active:scale-95",children:"Edit Information"}),q.jsx("button",{className:"flex-1 bg-[#3C364C] hover:bg-[#423B4D] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 active:scale-95",children:"Download Summary"})]})]})]}),q.jsx("div",{className:"text-center mt-8",children:q.jsxs("p",{className:"text-[#7F7B89] text-sm",children:["This information is securely stored and processed according to our"," ",q.jsx("span",{className:"text-purple-300 underline cursor-pointer hover:text-purple-200",children:"privacy policy"})]})})]})})};function Xe(i,l){l===void 0&&(l={});var s=l.insertAt;if(i&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",s==="top"&&o.firstChild?o.insertBefore(c,o.firstChild):o.appendChild(c),c.styleSheet?c.styleSheet.cssText=i:c.appendChild(document.createTextNode(i))}}Xe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Ut=function(){return Ut=Object.assign||function(i){for(var l,s=1,o=arguments.length;s<o;s++)for(var c in l=arguments[s])Object.prototype.hasOwnProperty.call(l,c)&&(i[c]=l[c]);return i},Ut.apply(this,arguments)};function yr(i){return yr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},yr(i)}var yv=/^\s+/,xv=/\s+$/;function le(i,l){if(l=l||{},(i=i||"")instanceof le)return i;if(!(this instanceof le))return new le(i,l);var s=(function(o){var c={r:0,g:0,b:0},f=1,m=null,v=null,h=null,p=!1,b=!1;typeof o=="string"&&(o=(function(T){T=T.replace(yv,"").replace(xv,"").toLowerCase();var M,U=!1;if(eu[T])T=eu[T],U=!0;else if(T=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(M=Nt.rgb.exec(T))?{r:M[1],g:M[2],b:M[3]}:(M=Nt.rgba.exec(T))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=Nt.hsl.exec(T))?{h:M[1],s:M[2],l:M[3]}:(M=Nt.hsla.exec(T))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=Nt.hsv.exec(T))?{h:M[1],s:M[2],v:M[3]}:(M=Nt.hsva.exec(T))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=Nt.hex8.exec(T))?{r:bt(M[1]),g:bt(M[2]),b:bt(M[3]),a:xp(M[4]),format:U?"name":"hex8"}:(M=Nt.hex6.exec(T))?{r:bt(M[1]),g:bt(M[2]),b:bt(M[3]),format:U?"name":"hex"}:(M=Nt.hex4.exec(T))?{r:bt(M[1]+""+M[1]),g:bt(M[2]+""+M[2]),b:bt(M[3]+""+M[3]),a:xp(M[4]+""+M[4]),format:U?"name":"hex8"}:(M=Nt.hex3.exec(T))?{r:bt(M[1]+""+M[1]),g:bt(M[2]+""+M[2]),b:bt(M[3]+""+M[3]),format:U?"name":"hex"}:!1})(o)),yr(o)=="object"&&(ln(o.r)&&ln(o.g)&&ln(o.b)?(S=o.r,A=o.g,B=o.b,c={r:255*ke(S,255),g:255*ke(A,255),b:255*ke(B,255)},p=!0,b=String(o.r).substr(-1)==="%"?"prgb":"rgb"):ln(o.h)&&ln(o.s)&&ln(o.v)?(m=Ul(o.s),v=Ul(o.v),c=(function(T,M,U){T=6*ke(T,360),M=ke(M,100),U=ke(U,100);var k=Math.floor(T),w=T-k,O=U*(1-M),H=U*(1-w*M),L=U*(1-(1-w)*M),K=k%6,F=[U,H,O,O,L,U][K],J=[L,U,U,H,O,O][K],V=[O,O,L,U,U,H][K];return{r:255*F,g:255*J,b:255*V}})(o.h,m,v),p=!0,b="hsv"):ln(o.h)&&ln(o.s)&&ln(o.l)&&(m=Ul(o.s),h=Ul(o.l),c=(function(T,M,U){var k,w,O;function H(F,J,V){return V<0&&(V+=1),V>1&&(V-=1),V<1/6?F+6*(J-F)*V:V<.5?J:V<2/3?F+(J-F)*(2/3-V)*6:F}if(T=ke(T,360),M=ke(M,100),U=ke(U,100),M===0)k=w=O=U;else{var L=U<.5?U*(1+M):U+M-U*M,K=2*U-L;k=H(K,L,T+1/3),w=H(K,L,T),O=H(K,L,T-1/3)}return{r:255*k,g:255*w,b:255*O}})(o.h,m,h),p=!0,b="hsl"),o.hasOwnProperty("a")&&(f=o.a));var S,A,B;return f=Up(f),{ok:p,format:o.format||b,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}})(i);this._originalInput=i,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=Math.round(100*this._a)/100,this._format=l.format||s.format,this._gradientType=l.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=s.ok}function mp(i,l,s){i=ke(i,255),l=ke(l,255),s=ke(s,255);var o,c,f=Math.max(i,l,s),m=Math.min(i,l,s),v=(f+m)/2;if(f==m)o=c=0;else{var h=f-m;switch(c=v>.5?h/(2-f-m):h/(f+m),f){case i:o=(l-s)/h+(l<s?6:0);break;case l:o=(s-i)/h+2;break;case s:o=(i-l)/h+4}o/=6}return{h:o,s:c,l:v}}function gp(i,l,s){i=ke(i,255),l=ke(l,255),s=ke(s,255);var o,c,f=Math.max(i,l,s),m=Math.min(i,l,s),v=f,h=f-m;if(c=f===0?0:h/f,f==m)o=0;else{switch(f){case i:o=(l-s)/h+(l<s?6:0);break;case l:o=(s-i)/h+2;break;case s:o=(i-l)/h+4}o/=6}return{h:o,s:c,v}}function vp(i,l,s,o){var c=[kt(Math.round(i).toString(16)),kt(Math.round(l).toString(16)),kt(Math.round(s).toString(16))];return o&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function bp(i,l,s,o){return[kt(Gp(o)),kt(Math.round(i).toString(16)),kt(Math.round(l).toString(16)),kt(Math.round(s).toString(16))].join("")}function Sv(i,l){l=l===0?0:l||10;var s=le(i).toHsl();return s.s-=l/100,s.s=xr(s.s),le(s)}function Tv(i,l){l=l===0?0:l||10;var s=le(i).toHsl();return s.s+=l/100,s.s=xr(s.s),le(s)}function wv(i){return le(i).desaturate(100)}function Ev(i,l){l=l===0?0:l||10;var s=le(i).toHsl();return s.l+=l/100,s.l=xr(s.l),le(s)}function Ov(i,l){l=l===0?0:l||10;var s=le(i).toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-l/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-l/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-l/100*255))),le(s)}function Mv(i,l){l=l===0?0:l||10;var s=le(i).toHsl();return s.l-=l/100,s.l=xr(s.l),le(s)}function Av(i,l){var s=le(i).toHsl(),o=(s.h+l)%360;return s.h=o<0?360+o:o,le(s)}function zv(i){var l=le(i).toHsl();return l.h=(l.h+180)%360,le(l)}function yp(i,l){if(isNaN(l)||l<=0)throw new Error("Argument to polyad must be a positive number");for(var s=le(i).toHsl(),o=[le(i)],c=360/l,f=1;f<l;f++)o.push(le({h:(s.h+f*c)%360,s:s.s,l:s.l}));return o}function _v(i){var l=le(i).toHsl(),s=l.h;return[le(i),le({h:(s+72)%360,s:l.s,l:l.l}),le({h:(s+216)%360,s:l.s,l:l.l})]}function Cv(i,l,s){l=l||6,s=s||30;var o=le(i).toHsl(),c=360/s,f=[le(i)];for(o.h=(o.h-(c*l>>1)+720)%360;--l;)o.h=(o.h+c)%360,f.push(le(o));return f}function Dv(i,l){l=l||6;for(var s=le(i).toHsv(),o=s.h,c=s.s,f=s.v,m=[],v=1/l;l--;)m.push(le({h:o,s:c,v:f})),f=(f+v)%1;return m}le.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var i=this.toRgb();return(299*i.r+587*i.g+114*i.b)/1e3},getLuminance:function(){var i,l,s,o=this.toRgb();return i=o.r/255,l=o.g/255,s=o.b/255,.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},setAlpha:function(i){return this._a=Up(i),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var i=gp(this._r,this._g,this._b);return{h:360*i.h,s:i.s,v:i.v,a:this._a}},toHsvString:function(){var i=gp(this._r,this._g,this._b),l=Math.round(360*i.h),s=Math.round(100*i.s),o=Math.round(100*i.v);return this._a==1?"hsv("+l+", "+s+"%, "+o+"%)":"hsva("+l+", "+s+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var i=mp(this._r,this._g,this._b);return{h:360*i.h,s:i.s,l:i.l,a:this._a}},toHslString:function(){var i=mp(this._r,this._g,this._b),l=Math.round(360*i.h),s=Math.round(100*i.s),o=Math.round(100*i.l);return this._a==1?"hsl("+l+", "+s+"%, "+o+"%)":"hsla("+l+", "+s+"%, "+o+"%, "+this._roundA+")"},toHex:function(i){return vp(this._r,this._g,this._b,i)},toHexString:function(i){return"#"+this.toHex(i)},toHex8:function(i){return(function(l,s,o,c,f){var m=[kt(Math.round(l).toString(16)),kt(Math.round(s).toString(16)),kt(Math.round(o).toString(16)),kt(Gp(c))];return f&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)&&m[3].charAt(0)==m[3].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0)+m[3].charAt(0):m.join("")})(this._r,this._g,this._b,this._a,i)},toHex8String:function(i){return"#"+this.toHex8(i)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ke(this._r,255))+"%",g:Math.round(100*ke(this._g,255))+"%",b:Math.round(100*ke(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ke(this._r,255))+"%, "+Math.round(100*ke(this._g,255))+"%, "+Math.round(100*ke(this._b,255))+"%)":"rgba("+Math.round(100*ke(this._r,255))+"%, "+Math.round(100*ke(this._g,255))+"%, "+Math.round(100*ke(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Nv[vp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(i){var l="#"+bp(this._r,this._g,this._b,this._a),s=l,o=this._gradientType?"GradientType = 1, ":"";if(i){var c=le(i);s="#"+bp(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+l+",endColorstr="+s+")"},toString:function(i){var l=!!i;i=i||this._format;var s=!1,o=this._a<1&&this._a>=0;return l||!o||i!=="hex"&&i!=="hex6"&&i!=="hex3"&&i!=="hex4"&&i!=="hex8"&&i!=="name"?(i==="rgb"&&(s=this.toRgbString()),i==="prgb"&&(s=this.toPercentageRgbString()),i!=="hex"&&i!=="hex6"||(s=this.toHexString()),i==="hex3"&&(s=this.toHexString(!0)),i==="hex4"&&(s=this.toHex8String(!0)),i==="hex8"&&(s=this.toHex8String()),i==="name"&&(s=this.toName()),i==="hsl"&&(s=this.toHslString()),i==="hsv"&&(s=this.toHsvString()),s||this.toHexString()):i==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return le(this.toString())},_applyModification:function(i,l){var s=i.apply(null,[this].concat([].slice.call(l)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(Ev,arguments)},brighten:function(){return this._applyModification(Ov,arguments)},darken:function(){return this._applyModification(Mv,arguments)},desaturate:function(){return this._applyModification(Sv,arguments)},saturate:function(){return this._applyModification(Tv,arguments)},greyscale:function(){return this._applyModification(wv,arguments)},spin:function(){return this._applyModification(Av,arguments)},_applyCombination:function(i,l){return i.apply(null,[this].concat([].slice.call(l)))},analogous:function(){return this._applyCombination(Cv,arguments)},complement:function(){return this._applyCombination(zv,arguments)},monochromatic:function(){return this._applyCombination(Dv,arguments)},splitcomplement:function(){return this._applyCombination(_v,arguments)},triad:function(){return this._applyCombination(yp,[3])},tetrad:function(){return this._applyCombination(yp,[4])}},le.fromRatio=function(i,l){if(yr(i)=="object"){var s={};for(var o in i)i.hasOwnProperty(o)&&(s[o]=o==="a"?i[o]:Ul(i[o]));i=s}return le(i,l)},le.equals=function(i,l){return!(!i||!l)&&le(i).toRgbString()==le(l).toRgbString()},le.random=function(){return le.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},le.mix=function(i,l,s){s=s===0?0:s||50;var o=le(i).toRgb(),c=le(l).toRgb(),f=s/100;return le({r:(c.r-o.r)*f+o.r,g:(c.g-o.g)*f+o.g,b:(c.b-o.b)*f+o.b,a:(c.a-o.a)*f+o.a})},le.readability=function(i,l){var s=le(i),o=le(l);return(Math.max(s.getLuminance(),o.getLuminance())+.05)/(Math.min(s.getLuminance(),o.getLuminance())+.05)},le.isReadable=function(i,l,s){var o,c,f=le.readability(i,l);switch(c=!1,(o=(function(m){var v,h;return v=((m=m||{level:"AA",size:"small"}).level||"AA").toUpperCase(),h=(m.size||"small").toLowerCase(),v!=="AA"&&v!=="AAA"&&(v="AA"),h!=="small"&&h!=="large"&&(h="small"),{level:v,size:h}})(s)).level+o.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},le.mostReadable=function(i,l,s){var o,c,f,m,v=null,h=0;c=(s=s||{}).includeFallbackColors,f=s.level,m=s.size;for(var p=0;p<l.length;p++)(o=le.readability(i,l[p]))>h&&(h=o,v=le(l[p]));return le.isReadable(i,v,{level:f,size:m})||!c?v:(s.includeFallbackColors=!1,le.mostReadable(i,["#fff","#000"],s))};var eu=le.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Nv=le.hexNames=(function(i){var l={};for(var s in i)i.hasOwnProperty(s)&&(l[i[s]]=s);return l})(eu);function Up(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function ke(i,l){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(i)&&(i="100%");var s=(function(o){return typeof o=="string"&&o.indexOf("%")!=-1})(i);return i=Math.min(l,Math.max(0,parseFloat(i))),s&&(i=parseInt(i*l,10)/100),Math.abs(i-l)<1e-6?1:i%l/parseFloat(l)}function xr(i){return Math.min(1,Math.max(0,i))}function bt(i){return parseInt(i,16)}function kt(i){return i.length==1?"0"+i:""+i}function Ul(i){return i<=1&&(i=100*i+"%"),i}function Gp(i){return Math.round(255*parseFloat(i)).toString(16)}function xp(i){return bt(i)/255}var Nn,rr,or,Nt=(rr="[\\s|\\(]+("+(Nn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Nn+")[,|\\s]+("+Nn+")\\s*\\)?",or="[\\s|\\(]+("+Nn+")[,|\\s]+("+Nn+")[,|\\s]+("+Nn+")[,|\\s]+("+Nn+")\\s*\\)?",{CSS_UNIT:new RegExp(Nn),rgb:new RegExp("rgb"+rr),rgba:new RegExp("rgba"+or),hsl:new RegExp("hsl"+rr),hsla:new RegExp("hsla"+or),hsv:new RegExp("hsv"+rr),hsva:new RegExp("hsva"+or),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function ln(i){return!!Nt.CSS_UNIT.exec(i)}var kv=function(i,l){var s=(typeof i=="string"?parseInt(i):i)||0;if(s>=-5&&s<=5){var o=s,c=parseFloat(l),f=c+o*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:l}},Rv=function(i,l){var s=i||{},o="";switch(l){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var c={};if(s.fontSize){var f=s.fontSize;c=(function(m,v){var h={};for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&v.indexOf(p)<0&&(h[p]=m[p]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function"){var b=0;for(p=Object.getOwnPropertySymbols(m);b<p.length;b++)v.indexOf(p[b])<0&&Object.prototype.propertyIsEnumerable.call(m,p[b])&&(h[p[b]]=m[p[b]])}return h})(s,["fontSize"]),o=f}return{fontSize:o,styles:c}},Bv={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Lv=function(i){var l=i.className,s=i.text,o=i.textColor,c=i.staticText,f=i.style;return s?we.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(l||"").trim(),style:Ut(Ut(Ut({},c&&Bv),o&&{color:o,mixBlendMode:"unset"}),f&&f)},typeof s=="string"&&s.length?s:"loading"):null},Yp="rgb(50, 205, 50)";function Hv(i,l){if(l===void 0&&(l=0),i.length===0)throw new Error("Input array cannot be empty!");var s=[];return(function o(c,f){return f===void 0&&(f=0),s.push.apply(s,c),s.length<f&&o(s,f),s.slice(0,f)})(i,l)}Xe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);le(Yp).toRgb();Array.from({length:4},(function(i,l){return"--atom-phase".concat(l+1,"-rgb")}));Xe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--commet-phase".concat(l+1,"-color")}));Xe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--OP-annulus-phase".concat(l+1,"-color")}));function $s(i){return i&&i.Math===Math&&i}Xe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);$s(typeof window=="object"&&window)||$s(typeof self=="object"&&self)||$s(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(i,l){return"--OP-dotted-phase".concat(l+1,"-color")}));Xe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--OP-spokes-phase".concat(l+1,"-color")}));Xe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(i,l){return"--OP-annulus-dual-sectors-phase".concat(l+1,"-color")}));Xe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return["--OP-annulus-track-phase".concat(l+1,"-color"),"--OP-annulus-sector-phase".concat(l+1,"-color")]}));Xe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--four-square-phase".concat(l+1,"-color")}));Xe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--mosaic-phase".concat(l+1,"-color")}));Xe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--riple-phase".concat(l+1,"-color")}));Xe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--TD-pulsate-phase".concat(l+1,"-color")}));Xe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--TD-brick-stack-phase".concat(l+1,"-color")}));Xe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--TD-bob-phase".concat(l+1,"-color")}));Xe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--TD-bounce-phase".concat(l+1,"-color")}));Xe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);var sr=Array.from({length:4},(function(i,l){return"--shape-phase".concat(l+1,"-color")})),qv=function(i){var l,s=Rv(i?.style,i?.size),o=s.styles,c=s.fontSize,f=i?.easing,m=kv(i?.speedPlus,"1.2s").animationPeriod,v=(function(h){var p={},b=sr.length;if(Array.isArray(h)&&h.length>0){for(var S=Hv(h,b),A=0;A<S.length&&!(A>b-1);A++){var B=S[A];p[sr[A]]=B}return p}try{if(typeof h!="string")throw new Error("Color String expected");for(A=0;A<b;A++)p[sr[A]]=h}catch(T){for(T instanceof Error?console.warn("[".concat(T.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),A=0;A<b;A++)p[sr[A]]=Yp}return p})((l=i?.color)!==null&&l!==void 0?l:"");return we.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:Ut(Ut(Ut(Ut(Ut({},c&&{fontSize:c}),m&&{"--rli-animation-duration":m}),f&&{"--rli-animation-function":f}),v),o),role:"status","aria-live":"polite","aria-label":"Loading"},we.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},we.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),we.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),we.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),we.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),we.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),we.createElement(Lv,{staticText:!0,text:i?.text,textColor:i?.textColor,style:{marginTop:"0.8em"}}))};Xe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--trophySpin-phase".concat(l+1,"-color")}));Xe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--slab-phase".concat(l+1,"-color")}));Xe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(i,l){return"--life-line-phase".concat(l+1,"-color")}));const jv=()=>q.jsx("div",{className:"w-full h-screen flex justify-center items-center bg-[#605A71]",children:q.jsx(qv,{color:"#2C2638   ",size:"large",text:"wait karo",textColor:"#000000"})}),Uv=()=>{const[i,l]=be.useState({}),[s,o]=be.useState(!1),[c,f]=be.useState(!1),m=()=>{f(!0),setTimeout(()=>{f(!1),o(!0)},2e3)};return q.jsx(q.Fragment,{children:c?q.jsx(jv,{}):s?q.jsx(bv,{formObj:i}):q.jsx(vv,{setFormObj:l,onSubmit:m})})};S0.createRoot(document.getElementById("root")).render(q.jsx(be.StrictMode,{children:q.jsx(Uv,{})}));
