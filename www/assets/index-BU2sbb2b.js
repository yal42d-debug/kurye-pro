(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Gm={exports:{}},dl={},Km={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),gw=Symbol.for("react.portal"),yw=Symbol.for("react.fragment"),vw=Symbol.for("react.strict_mode"),_w=Symbol.for("react.profiler"),ww=Symbol.for("react.provider"),Ew=Symbol.for("react.context"),xw=Symbol.for("react.forward_ref"),Iw=Symbol.for("react.suspense"),kw=Symbol.for("react.memo"),bw=Symbol.for("react.lazy"),yh=Symbol.iterator;function Sw(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Qm={};function Ri(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Ym}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=Ri.prototype;function ad(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Ym}var ld=ad.prototype=new Jm;ld.constructor=ad;qm(ld,Ri.prototype);ld.isPureReactComponent=!0;var vh=Array.isArray,Xm=Object.prototype.hasOwnProperty,cd={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xm.call(e,r)&&!Zm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uo,type:t,key:s,ref:o,props:i,_owner:cd.current}}function Tw(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function Cw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _h=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cw(""+t.key):e.toString(36)}function Zo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uo:case gw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jl(o,0):r,vh(i)?(n="",t!=null&&(n=t.replace(_h,"$&/")+"/"),Zo(i,e,n,"",function(c){return c})):i!=null&&(ud(i)&&(i=Tw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_h,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jl(s,a);o+=Zo(s,e,n,l,i)}else if(l=Sw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jl(s,a++),o+=Zo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var r=[],i=0;return Zo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Pw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},ea={transition:null},Nw={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:ea,ReactCurrentOwner:cd};function tg(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Ri;H.Fragment=yw;H.Profiler=_w;H.PureComponent=ad;H.StrictMode=vw;H.Suspense=Iw;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nw;H.act=tg;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xm.call(e,l)&&!Zm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uo,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:Ew,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ww,_context:t},t.Consumer=t};H.createElement=eg;H.createFactory=function(t){var e=eg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:xw,render:t}};H.isValidElement=ud;H.lazy=function(t){return{$$typeof:bw,_payload:{_status:-1,_result:t},_init:Pw}};H.memo=function(t,e){return{$$typeof:kw,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=ea.transition;ea.transition={};try{t()}finally{ea.transition=e}};H.unstable_act=tg;H.useCallback=function(t,e){return Ye.current.useCallback(t,e)};H.useContext=function(t){return Ye.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};H.useEffect=function(t,e){return Ye.current.useEffect(t,e)};H.useId=function(){return Ye.current.useId()};H.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Ye.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};H.useRef=function(t){return Ye.current.useRef(t)};H.useState=function(t){return Ye.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Ye.current.useTransition()};H.version="18.3.1";Km.exports=H;var dd=Km.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rw=dd,Aw=Symbol.for("react.element"),Dw=Symbol.for("react.fragment"),Lw=Object.prototype.hasOwnProperty,Ow=Rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mw={key:!0,ref:!0,__self:!0,__source:!0};function ng(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Lw.call(e,r)&&!Mw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Aw,type:t,key:s,ref:o,props:i,_owner:Ow.current}}dl.Fragment=Dw;dl.jsx=ng;dl.jsxs=ng;Gm.exports=dl;var rg=Gm.exports,ig={exports:{}},ut={},sg={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,O){var N=T.length;T.push(O);e:for(;0<N;){var F=N-1>>>1,W=T[F];if(0<i(W,O))T[F]=O,T[N]=W,N=F;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],N=T.pop();if(N!==O){T[0]=N;e:for(var F=0,W=T.length,Le=W>>>1;F<Le;){var Ee=2*(F+1)-1,Ce=T[Ee],Je=Ee+1,It=T[Je];if(0>i(Ce,N))Je<W&&0>i(It,Ce)?(T[F]=It,T[Je]=N,F=Je):(T[F]=Ce,T[Ee]=N,F=Ee);else if(Je<W&&0>i(It,N))T[F]=It,T[Je]=N,F=Je;else break e}}return O}function i(T,O){var N=T.sortIndex-O.sortIndex;return N!==0?N:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=T)r(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function E(T){if(v=!1,g(T),!y)if(n(l)!==null)y=!0,bn(_);else{var O=n(c);O!==null&&Sn(E,O.startTime-T)}}function _(T,O){y=!1,v&&(v=!1,m(w),w=-1),p=!0;var N=d;try{for(g(O),f=n(l);f!==null&&(!(f.expirationTime>O)||T&&!J());){var F=f.callback;if(typeof F=="function"){f.callback=null,d=f.priorityLevel;var W=F(f.expirationTime<=O);O=t.unstable_now(),typeof W=="function"?f.callback=W:f===n(l)&&r(l),g(O)}else r(l);f=n(l)}if(f!==null)var Le=!0;else{var Ee=n(c);Ee!==null&&Sn(E,Ee.startTime-O),Le=!1}return Le}finally{f=null,d=N,p=!1}}var I=!1,x=null,w=-1,R=5,D=-1;function J(){return!(t.unstable_now()-D<R)}function we(){if(x!==null){var T=t.unstable_now();D=T;var O=!0;try{O=x(!0,T)}finally{O?Ft():(I=!1,x=null)}}else I=!1}var Ft;if(typeof h=="function")Ft=function(){h(we)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,ur=Qe.port2;Qe.port1.onmessage=we,Ft=function(){ur.postMessage(null)}}else Ft=function(){C(we,0)};function bn(T){x=T,I||(I=!0,Ft())}function Sn(T,O){w=C(function(){T(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,bn(_))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var N=d;d=O;try{return T()}finally{d=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var N=d;d=T;try{return O()}finally{d=N}},t.unstable_scheduleCallback=function(T,O,N){var F=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?F+N:F):N=F,T){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=N+W,T={id:u++,callback:O,priorityLevel:T,startTime:N,expirationTime:W,sortIndex:-1},N>F?(T.sortIndex=N,e(c,T),n(l)===null&&T===n(c)&&(v?(m(w),w=-1):v=!0,Sn(E,N-F))):(T.sortIndex=W,e(l,T),y||p||(y=!0,bn(_))),T},t.unstable_shouldYield=J,t.unstable_wrapCallback=function(T){var O=d;return function(){var N=d;d=O;try{return T.apply(this,arguments)}finally{d=N}}}})(og);sg.exports=og;var Fw=sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw=dd,ct=Fw;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,Ns={};function Dr(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(Ns[t]=e,t=0;t<e.length;t++)ag.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=Object.prototype.hasOwnProperty,Uw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},Eh={};function Hw(t){return Gc.call(Eh,t)?!0:Gc.call(wh,t)?!1:Uw.test(t)?Eh[t]=!0:(wh[t]=!0,!1)}function Vw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zw(t,e,n,r){if(e===null||typeof e>"u"||Vw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var fd=/[\-:]([a-z])/g;function hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fd,hd);Ae[e]=new qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fd,hd);Ae[e]=new qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fd,hd);Ae[e]=new qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new qe(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zw(e,n,i,r)&&(n=null),r||i===null?Hw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var En=Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),xh=Symbol.iterator;function $i(t){return t===null||typeof t!="object"?null:(t=xh&&t[xh]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,Xl;function is(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Zl=!1;function ec(t,e){if(!t||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function Ww(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=ec(t.type,!1),t;case 11:return t=ec(t.type.render,!1),t;case 1:return t=ec(t.type,!0),t;default:return""}}function Qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case Wr:return"Portal";case Kc:return"Profiler";case md:return"StrictMode";case Yc:return"Suspense";case qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case lg:return(t._context.displayName||"Context")+".Provider";case gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:Qc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Qc(t(e))}catch{}}return null}function jw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $w(t){var e=dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ao(t){t._valueTracker||(t._valueTracker=$w(t))}function fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ya(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hg(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function Xc(t,e){hg(t,e);var n=Zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zc(t,e.type,Zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zc(t,e,n){(e!=="number"||ya(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(ss(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zn(n)}}function pg(t,e){var n=Zn(e.value),r=Zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gw=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){Gw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function vg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Kw=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(t,e){if(e){if(Kw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iu=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var su=null,ri=null,ii=null;function Th(t){if(t=po(t)){if(typeof su!="function")throw Error(k(280));var e=t.stateNode;e&&(e=gl(e),su(t.stateNode,t.type,e))}}function _g(t){ri?ii?ii.push(t):ii=[t]:ri=t}function wg(){if(ri){var t=ri,e=ii;if(ii=ri=null,Th(t),e)for(t=0;t<e.length;t++)Th(e[t])}}function Eg(t,e){return t(e)}function xg(){}var tc=!1;function Ig(t,e,n){if(tc)return t(e,n);tc=!0;try{return Eg(t,e,n)}finally{tc=!1,(ri!==null||ii!==null)&&(xg(),wg())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var ou=!1;if(fn)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{ou=!1}function Yw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fs=!1,va=null,_a=!1,au=null,qw={onError:function(t){fs=!0,va=t}};function Qw(t,e,n,r,i,s,o,a,l){fs=!1,va=null,Yw.apply(qw,arguments)}function Jw(t,e,n,r,i,s,o,a,l){if(Qw.apply(this,arguments),fs){if(fs){var c=va;fs=!1,va=null}else throw Error(k(198));_a||(_a=!0,au=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(Lr(t)!==t)throw Error(k(188))}function Xw(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ch(i),t;if(s===r)return Ch(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function bg(t){return t=Xw(t),t!==null?Sg(t):null}function Sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=ct.unstable_scheduleCallback,Ph=ct.unstable_cancelCallback,Zw=ct.unstable_shouldYield,eE=ct.unstable_requestPaint,fe=ct.unstable_now,tE=ct.unstable_getCurrentPriorityLevel,_d=ct.unstable_ImmediatePriority,Cg=ct.unstable_UserBlockingPriority,wa=ct.unstable_NormalPriority,nE=ct.unstable_LowPriority,Pg=ct.unstable_IdlePriority,fl=null,Gt=null;function rE(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:oE,iE=Math.log,sE=Math.LN2;function oE(t){return t>>>=0,t===0?32:31-(iE(t)/sE|0)|0}var Lo=64,Oo=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ea(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=os(a):(s&=o,s!==0&&(r=os(s)))}else o=n&~i,o!==0?r=os(o):s!==0&&(r=os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function aE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=aE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ng(){var t=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),t}function nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function cE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ag,Ed,Dg,Lg,Og,cu=!1,Mo=[],Bn=null,Un=null,Hn=null,Ds=new Map,Ls=new Map,Dn=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Ds.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function Ki(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=po(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dE(t,e,n,r,i){switch(e){case"focusin":return Bn=Ki(Bn,t,e,n,r,i),!0;case"dragenter":return Un=Ki(Un,t,e,n,r,i),!0;case"mouseover":return Hn=Ki(Hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ds.set(s,Ki(Ds.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Ki(Ls.get(s)||null,t,e,n,r,i)),!0}return!1}function Mg(t){var e=mr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=kg(n),e!==null){t.blockedOn=e,Og(t.priority,function(){Dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);iu=r,n.target.dispatchEvent(r),iu=null}else return e=po(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function Rh(t,e,n){ta(t)&&n.delete(e)}function fE(){cu=!1,Bn!==null&&ta(Bn)&&(Bn=null),Un!==null&&ta(Un)&&(Un=null),Hn!==null&&ta(Hn)&&(Hn=null),Ds.forEach(Rh),Ls.forEach(Rh)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,cu||(cu=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,fE)))}function Os(t){function e(i){return Yi(i,t)}if(0<Mo.length){Yi(Mo[0],t);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bn!==null&&Yi(Bn,t),Un!==null&&Yi(Un,t),Hn!==null&&Yi(Hn,t),Ds.forEach(e),Ls.forEach(e),n=0;n<Dn.length;n++)r=Dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dn.length&&(n=Dn[0],n.blockedOn===null);)Mg(n),n.blockedOn===null&&Dn.shift()}var si=En.ReactCurrentBatchConfig,xa=!0;function hE(t,e,n,r){var i=$,s=si.transition;si.transition=null;try{$=1,xd(t,e,n,r)}finally{$=i,si.transition=s}}function pE(t,e,n,r){var i=$,s=si.transition;si.transition=null;try{$=4,xd(t,e,n,r)}finally{$=i,si.transition=s}}function xd(t,e,n,r){if(xa){var i=uu(t,e,n,r);if(i===null)fc(t,e,r,Ia,n),Nh(t,r);else if(dE(i,t,e,n,r))r.stopPropagation();else if(Nh(t,r),e&4&&-1<uE.indexOf(t)){for(;i!==null;){var s=po(i);if(s!==null&&Ag(s),s=uu(t,e,n,r),s===null&&fc(t,e,r,Ia,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fc(t,e,r,null,n)}}var Ia=null;function uu(t,e,n,r){if(Ia=null,t=vd(r),t=mr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ia=t,null}function Fg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tE()){case _d:return 1;case Cg:return 4;case wa:case nE:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var On=null,Id=null,na=null;function Bg(){if(na)return na;var t,e=Id,n=e.length,r,i="value"in On?On.value:On.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return na=i.slice(t,1<r?1-r:void 0)}function ra(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function Ah(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fo:Ah,this.isPropagationStopped=Ah,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=dt(Ai),ho=ae({},Ai,{view:0,detail:0}),mE=dt(ho),rc,ic,qi,hl=ae({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(rc=t.screenX-qi.screenX,ic=t.screenY-qi.screenY):ic=rc=0,qi=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Dh=dt(hl),gE=ae({},hl,{dataTransfer:0}),yE=dt(gE),vE=ae({},ho,{relatedTarget:0}),sc=dt(vE),_E=ae({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),wE=dt(_E),EE=ae({},Ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xE=dt(EE),IE=ae({},Ai,{data:0}),Lh=dt(IE),kE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SE[t])?!!e[t]:!1}function bd(){return TE}var CE=ae({},ho,{key:function(t){if(t.key){var e=kE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ra(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?ra(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ra(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PE=dt(CE),NE=ae({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=dt(NE),RE=ae({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),AE=dt(RE),DE=ae({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),LE=dt(DE),OE=ae({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=dt(OE),FE=[9,13,27,32],Sd=fn&&"CompositionEvent"in window,hs=null;fn&&"documentMode"in document&&(hs=document.documentMode);var BE=fn&&"TextEvent"in window&&!hs,Ug=fn&&(!Sd||hs&&8<hs&&11>=hs),Mh=" ",Fh=!1;function Hg(t,e){switch(t){case"keyup":return FE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function UE(t,e){switch(t){case"compositionend":return Vg(e);case"keypress":return e.which!==32?null:(Fh=!0,Mh);case"textInput":return t=e.data,t===Mh&&Fh?null:t;default:return null}}function HE(t,e){if($r)return t==="compositionend"||!Sd&&Hg(t,e)?(t=Bg(),na=Id=On=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var VE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VE[t.type]:e==="textarea"}function zg(t,e,n,r){_g(r),e=ka(e,"onChange"),0<e.length&&(n=new kd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ps=null,Ms=null;function zE(t){Zg(t,0)}function pl(t){var e=Yr(t);if(fg(e))return t}function WE(t,e){if(t==="change")return e}var Wg=!1;if(fn){var oc;if(fn){var ac="oninput"in document;if(!ac){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),ac=typeof Uh.oninput=="function"}oc=ac}else oc=!1;Wg=oc&&(!document.documentMode||9<document.documentMode)}function Hh(){ps&&(ps.detachEvent("onpropertychange",jg),Ms=ps=null)}function jg(t){if(t.propertyName==="value"&&pl(Ms)){var e=[];zg(e,Ms,t,vd(t)),Ig(zE,e)}}function jE(t,e,n){t==="focusin"?(Hh(),ps=e,Ms=n,ps.attachEvent("onpropertychange",jg)):t==="focusout"&&Hh()}function $E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(Ms)}function GE(t,e){if(t==="click")return pl(e)}function KE(t,e){if(t==="input"||t==="change")return pl(e)}function YE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mt=typeof Object.is=="function"?Object.is:YE;function Fs(t,e){if(Mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gc.call(e,i)||!Mt(t[i],e[i]))return!1}return!0}function Vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zh(t,e){var n=Vh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function $g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=ya();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ya(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qE(t){var e=Gg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$g(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zh(n,s);var o=zh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QE=fn&&"documentMode"in document&&11>=document.documentMode,Gr=null,du=null,ms=null,fu=!1;function Wh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fu||Gr==null||Gr!==ya(r)||(r=Gr,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ms&&Fs(ms,r)||(ms=r,r=ka(du,"onSelect"),0<r.length&&(e=new kd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gr)))}function Bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},lc={},Kg={};fn&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function ml(t){if(lc[t])return lc[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kg)return lc[t]=e[n];return t}var Yg=ml("animationend"),qg=ml("animationiteration"),Qg=ml("animationstart"),Jg=ml("transitionend"),Xg=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){Xg.set(t,e),Dr(e,[t])}for(var cc=0;cc<jh.length;cc++){var uc=jh[cc],JE=uc.toLowerCase(),XE=uc[0].toUpperCase()+uc.slice(1);ir(JE,"on"+XE)}ir(Yg,"onAnimationEnd");ir(qg,"onAnimationIteration");ir(Qg,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(Jg,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZE=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function $h(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jw(r,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;$h(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;$h(i,a,c),s=l}}}if(_a)throw t=au,_a=!1,au=null,t}function X(t,e){var n=e[yu];n===void 0&&(n=e[yu]=new Set);var r=t+"__bubble";n.has(r)||(ey(e,t,2,!1),n.add(r))}function dc(t,e,n){var r=0;e&&(r|=4),ey(n,t,r,e)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[Uo]){t[Uo]=!0,ag.forEach(function(n){n!=="selectionchange"&&(ZE.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uo]||(e[Uo]=!0,dc("selectionchange",!1,e))}}function ey(t,e,n,r){switch(Fg(e)){case 1:var i=hE;break;case 4:i=pE;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ig(function(){var c=s,u=vd(n),f=[];e:{var d=Xg.get(t);if(d!==void 0){var p=kd,y=t;switch(t){case"keypress":if(ra(n)===0)break e;case"keydown":case"keyup":p=PE;break;case"focusin":y="focus",p=sc;break;case"focusout":y="blur",p=sc;break;case"beforeblur":case"afterblur":p=sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=AE;break;case Yg:case qg:case Qg:p=wE;break;case Jg:p=LE;break;case"scroll":p=mE;break;case"wheel":p=ME;break;case"copy":case"cut":case"paste":p=xE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Oh}var v=(e&4)!==0,C=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var h=c,g;h!==null;){g=h;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=As(h,m),E!=null&&v.push(Us(h,E,g)))),C)break;h=h.return}0<v.length&&(d=new p(d,y,null,n,u),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==iu&&(y=n.relatedTarget||n.fromElement)&&(mr(y)||y[hn]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?mr(y):null,y!==null&&(C=Lr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=Dh,E="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Oh,E="onPointerLeave",m="onPointerEnter",h="pointer"),C=p==null?d:Yr(p),g=y==null?d:Yr(y),d=new v(E,h+"leave",p,n,u),d.target=C,d.relatedTarget=g,E=null,mr(u)===c&&(v=new v(m,h+"enter",y,n,u),v.target=g,v.relatedTarget=C,E=v),C=E,p&&y)t:{for(v=p,m=y,h=0,g=v;g;g=Vr(g))h++;for(g=0,E=m;E;E=Vr(E))g++;for(;0<h-g;)v=Vr(v),h--;for(;0<g-h;)m=Vr(m),g--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=Vr(v),m=Vr(m)}v=null}else v=null;p!==null&&Gh(f,d,p,v,!1),y!==null&&C!==null&&Gh(f,C,y,v,!0)}}e:{if(d=c?Yr(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var _=WE;else if(Bh(d))if(Wg)_=KE;else{_=$E;var I=jE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=GE);if(_&&(_=_(t,c))){zg(f,_,n,u);break e}I&&I(t,d,c),t==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&Zc(d,"number",d.value)}switch(I=c?Yr(c):window,t){case"focusin":(Bh(I)||I.contentEditable==="true")&&(Gr=I,du=c,ms=null);break;case"focusout":ms=du=Gr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Wh(f,n,u);break;case"selectionchange":if(QE)break;case"keydown":case"keyup":Wh(f,n,u)}var x;if(Sd)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else $r?Hg(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Ug&&n.locale!=="ko"&&($r||w!=="onCompositionStart"?w==="onCompositionEnd"&&$r&&(x=Bg()):(On=u,Id="value"in On?On.value:On.textContent,$r=!0)),I=ka(c,w),0<I.length&&(w=new Lh(w,t,null,n,u),f.push({event:w,listeners:I}),x?w.data=x:(x=Vg(n),x!==null&&(w.data=x)))),(x=BE?UE(t,n):HE(t,n))&&(c=ka(c,"onBeforeInput"),0<c.length&&(u=new Lh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=x))}Zg(f,e)})}function Us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=As(t,n),s!=null&&r.unshift(Us(t,s,i)),s=As(t,e),s!=null&&r.push(Us(t,s,i))),t=t.return}return r}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=As(n,s),l!=null&&o.unshift(Us(n,l,a))):i||(l=As(n,s),l!=null&&o.push(Us(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ex=/\r\n?/g,tx=/\u0000|\uFFFD/g;function Kh(t){return(typeof t=="string"?t:""+t).replace(ex,`
`).replace(tx,"")}function Ho(t,e,n){if(e=Kh(e),Kh(t)!==e&&n)throw Error(k(425))}function ba(){}var hu=null,pu=null;function mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,nx=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(t){return Yh.resolve(null).then(t).catch(ix)}:gu;function ix(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Os(e)}function Vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Di,Hs="__reactProps$"+Di,hn="__reactContainer$"+Di,yu="__reactEvents$"+Di,sx="__reactListeners$"+Di,ox="__reactHandles$"+Di;function mr(t){var e=t[Vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hn]||n[Vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qh(t);t!==null;){if(n=t[Vt])return n;t=qh(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[Vt]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function gl(t){return t[Hs]||null}var vu=[],qr=-1;function sr(t){return{current:t}}function Z(t){0>qr||(t.current=vu[qr],vu[qr]=null,qr--)}function Q(t,e){qr++,vu[qr]=t.current,t.current=e}var er={},He=sr(er),tt=sr(!1),Ir=er;function pi(t,e){var n=t.type.contextTypes;if(!n)return er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Sa(){Z(tt),Z(He)}function Qh(t,e,n){if(He.current!==er)throw Error(k(168));Q(He,e),Q(tt,n)}function ty(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,jw(t)||"Unknown",i));return ae({},n,r)}function Ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Ir=He.current,Q(He,t),Q(tt,tt.current),!0}function Jh(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=ty(t,e,Ir),r.__reactInternalMemoizedMergedChildContext=t,Z(tt),Z(He),Q(He,t)):Z(tt),Q(tt,n)}var Xt=null,yl=!1,pc=!1;function ny(t){Xt===null?Xt=[t]:Xt.push(t)}function ax(t){yl=!0,ny(t)}function or(){if(!pc&&Xt!==null){pc=!0;var t=0,e=$;try{var n=Xt;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xt=null,yl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(t+1)),Tg(_d,or),i}finally{$=e,pc=!1}}return null}var Qr=[],Jr=0,Ca=null,Pa=0,ht=[],pt=0,kr=null,rn=1,sn="";function dr(t,e){Qr[Jr++]=Pa,Qr[Jr++]=Ca,Ca=t,Pa=e}function ry(t,e,n){ht[pt++]=rn,ht[pt++]=sn,ht[pt++]=kr,kr=t;var r=rn;t=sn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rn=1<<32-Dt(e)+i|n<<i|r,sn=s+t}else rn=1<<s|n<<i|r,sn=t}function Cd(t){t.return!==null&&(dr(t,1),ry(t,1,0))}function Pd(t){for(;t===Ca;)Ca=Qr[--Jr],Qr[Jr]=null,Pa=Qr[--Jr],Qr[Jr]=null;for(;t===kr;)kr=ht[--pt],ht[pt]=null,sn=ht[--pt],ht[pt]=null,rn=ht[--pt],ht[pt]=null}var lt=null,at=null,ne=!1,Ct=null;function iy(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,lt=t,at=Vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,lt=t,at=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,lt=t,at=null,!0):!1;default:return!1}}function _u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(ne){var e=at;if(e){var n=e;if(!Xh(t,e)){if(_u(t))throw Error(k(418));e=Vn(n.nextSibling);var r=lt;e&&Xh(t,e)?iy(r,n):(t.flags=t.flags&-4097|2,ne=!1,lt=t)}}else{if(_u(t))throw Error(k(418));t.flags=t.flags&-4097|2,ne=!1,lt=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;lt=t}function Vo(t){if(t!==lt)return!1;if(!ne)return Zh(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mu(t.type,t.memoizedProps)),e&&(e=at)){if(_u(t))throw sy(),Error(k(418));for(;e;)iy(t,e),e=Vn(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){at=Vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}at=null}}else at=lt?Vn(t.stateNode.nextSibling):null;return!0}function sy(){for(var t=at;t;)t=Vn(t.nextSibling)}function mi(){at=lt=null,ne=!1}function Nd(t){Ct===null?Ct=[t]:Ct.push(t)}var lx=En.ReactCurrentBatchConfig;function Qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function oy(t){function e(m,h){if(t){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=$n(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,E){return h===null||h.tag!==6?(h=Ec(g,m.mode,E),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,E){var _=g.type;return _===jr?u(m,h,g.props.children,E,g.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&ep(_)===h.type)?(E=i(h,g.props),E.ref=Qi(m,h,g),E.return=m,E):(E=ua(g.type,g.key,g.props,null,m.mode,E),E.ref=Qi(m,h,g),E.return=m,E)}function c(m,h,g,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=xc(g,m.mode,E),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function u(m,h,g,E,_){return h===null||h.tag!==7?(h=Er(g,m.mode,E,_),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ec(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ro:return g=ua(h.type,h.key,h.props,null,m.mode,g),g.ref=Qi(m,null,h),g.return=m,g;case Wr:return h=xc(h,m.mode,g),h.return=m,h;case Pn:var E=h._init;return f(m,E(h._payload),g)}if(ss(h)||$i(h))return h=Er(h,m.mode,g,null),h.return=m,h;zo(m,h)}return null}function d(m,h,g,E){var _=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:a(m,h,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:return g.key===_?l(m,h,g,E):null;case Wr:return g.key===_?c(m,h,g,E):null;case Pn:return _=g._init,d(m,h,_(g._payload),E)}if(ss(g)||$i(g))return _!==null?null:u(m,h,g,E,null);zo(m,g)}return null}function p(m,h,g,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(h,m,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ro:return m=m.get(E.key===null?g:E.key)||null,l(h,m,E,_);case Wr:return m=m.get(E.key===null?g:E.key)||null,c(h,m,E,_);case Pn:var I=E._init;return p(m,h,g,I(E._payload),_)}if(ss(E)||$i(E))return m=m.get(g)||null,u(h,m,E,_,null);zo(h,E)}return null}function y(m,h,g,E){for(var _=null,I=null,x=h,w=h=0,R=null;x!==null&&w<g.length;w++){x.index>w?(R=x,x=null):R=x.sibling;var D=d(m,x,g[w],E);if(D===null){x===null&&(x=R);break}t&&x&&D.alternate===null&&e(m,x),h=s(D,h,w),I===null?_=D:I.sibling=D,I=D,x=R}if(w===g.length)return n(m,x),ne&&dr(m,w),_;if(x===null){for(;w<g.length;w++)x=f(m,g[w],E),x!==null&&(h=s(x,h,w),I===null?_=x:I.sibling=x,I=x);return ne&&dr(m,w),_}for(x=r(m,x);w<g.length;w++)R=p(x,m,w,g[w],E),R!==null&&(t&&R.alternate!==null&&x.delete(R.key===null?w:R.key),h=s(R,h,w),I===null?_=R:I.sibling=R,I=R);return t&&x.forEach(function(J){return e(m,J)}),ne&&dr(m,w),_}function v(m,h,g,E){var _=$i(g);if(typeof _!="function")throw Error(k(150));if(g=_.call(g),g==null)throw Error(k(151));for(var I=_=null,x=h,w=h=0,R=null,D=g.next();x!==null&&!D.done;w++,D=g.next()){x.index>w?(R=x,x=null):R=x.sibling;var J=d(m,x,D.value,E);if(J===null){x===null&&(x=R);break}t&&x&&J.alternate===null&&e(m,x),h=s(J,h,w),I===null?_=J:I.sibling=J,I=J,x=R}if(D.done)return n(m,x),ne&&dr(m,w),_;if(x===null){for(;!D.done;w++,D=g.next())D=f(m,D.value,E),D!==null&&(h=s(D,h,w),I===null?_=D:I.sibling=D,I=D);return ne&&dr(m,w),_}for(x=r(m,x);!D.done;w++,D=g.next())D=p(x,m,w,D.value,E),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?w:D.key),h=s(D,h,w),I===null?_=D:I.sibling=D,I=D);return t&&x.forEach(function(we){return e(m,we)}),ne&&dr(m,w),_}function C(m,h,g,E){if(typeof g=="object"&&g!==null&&g.type===jr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:e:{for(var _=g.key,I=h;I!==null;){if(I.key===_){if(_=g.type,_===jr){if(I.tag===7){n(m,I.sibling),h=i(I,g.props.children),h.return=m,m=h;break e}}else if(I.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Pn&&ep(_)===I.type){n(m,I.sibling),h=i(I,g.props),h.ref=Qi(m,I,g),h.return=m,m=h;break e}n(m,I);break}else e(m,I);I=I.sibling}g.type===jr?(h=Er(g.props.children,m.mode,E,g.key),h.return=m,m=h):(E=ua(g.type,g.key,g.props,null,m.mode,E),E.ref=Qi(m,h,g),E.return=m,m=E)}return o(m);case Wr:e:{for(I=g.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=xc(g,m.mode,E),h.return=m,m=h}return o(m);case Pn:return I=g._init,C(m,h,I(g._payload),E)}if(ss(g))return y(m,h,g,E);if($i(g))return v(m,h,g,E);zo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Ec(g,m.mode,E),h.return=m,m=h),o(m)):n(m,h)}return C}var gi=oy(!0),ay=oy(!1),Na=sr(null),Ra=null,Xr=null,Rd=null;function Ad(){Rd=Xr=Ra=null}function Dd(t){var e=Na.current;Z(Na),t._currentValue=e}function Eu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oi(t,e){Ra=t,Rd=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},Xr===null){if(Ra===null)throw Error(k(308));Xr=t,Ra.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return e}var gr=null;function Ld(t){gr===null?gr=[t]:gr.push(t)}function ly(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ld(e)):(n.next=i.next,i.next=n),e.interleaved=n,pn(t,r)}function pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function Od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ld(r)):(e.next=i.next,i.next=e),r.interleaved=e,pn(t,n)}function ia(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wd(t,n)}}function tp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Aa(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(p,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,f,d):y,d==null)break e;f=ae({},f,d);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sr|=o,t.lanes=o,t.memoizedState=f}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var mo={},Kt=sr(mo),Vs=sr(mo),zs=sr(mo);function yr(t){if(t===mo)throw Error(k(174));return t}function Md(t,e){switch(Q(zs,e),Q(Vs,t),Q(Kt,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tu(e,t)}Z(Kt),Q(Kt,e)}function yi(){Z(Kt),Z(Vs),Z(zs)}function uy(t){yr(zs.current);var e=yr(Kt.current),n=tu(e,t.type);e!==n&&(Q(Vs,t),Q(Kt,n))}function Fd(t){Vs.current===t&&(Z(Kt),Z(Vs))}var re=sr(0);function Da(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mc=[];function Bd(){for(var t=0;t<mc.length;t++)mc[t]._workInProgressVersionPrimary=null;mc.length=0}var sa=En.ReactCurrentDispatcher,gc=En.ReactCurrentBatchConfig,br=0,oe=null,me=null,ke=null,La=!1,gs=!1,Ws=0,cx=0;function Oe(){throw Error(k(321))}function Ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mt(t[n],e[n]))return!1;return!0}function Hd(t,e,n,r,i,s){if(br=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sa.current=t===null||t.memoizedState===null?hx:px,t=n(r,i),gs){s=0;do{if(gs=!1,Ws=0,25<=s)throw Error(k(301));s+=1,ke=me=null,e.updateQueue=null,sa.current=mx,t=n(r,i)}while(gs)}if(sa.current=Oa,e=me!==null&&me.next!==null,br=0,ke=me=oe=null,La=!1,e)throw Error(k(300));return t}function Vd(){var t=Ws!==0;return Ws=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?oe.memoizedState=ke=t:ke=ke.next=t,ke}function wt(){if(me===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=me.next;var e=ke===null?oe.memoizedState:ke.next;if(e!==null)ke=e,me=t;else{if(t===null)throw Error(k(310));me=t,t={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ke===null?oe.memoizedState=ke=t:ke=ke.next=t}return ke}function js(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=wt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((br&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,oe.lanes|=u,Sr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Mt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,Sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vc(t){var e=wt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dy(){}function fy(t,e){var n=oe,r=wt(),i=e(),s=!Mt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,zd(my.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,$s(9,py.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(k(349));br&30||hy(n,e,i)}return i}function hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function py(t,e,n,r){e.value=n,e.getSnapshot=r,gy(e)&&yy(t)}function my(t,e,n){return n(function(){gy(e)&&yy(t)})}function gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mt(t,n)}catch{return!0}}function yy(t){var e=pn(t,1);e!==null&&Lt(e,t,1,-1)}function rp(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},e.queue=t,t=t.dispatch=fx.bind(null,oe,t),[e.memoizedState,t]}function $s(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vy(){return wt().memoizedState}function oa(t,e,n,r){var i=Ut();oe.flags|=t,i.memoizedState=$s(1|e,n,void 0,r===void 0?null:r)}function vl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(me!==null){var o=me.memoizedState;if(s=o.destroy,r!==null&&Ud(r,o.deps)){i.memoizedState=$s(e,n,s,r);return}}oe.flags|=t,i.memoizedState=$s(1|e,n,s,r)}function ip(t,e){return oa(8390656,8,t,e)}function zd(t,e){return vl(2048,8,t,e)}function _y(t,e){return vl(4,2,t,e)}function wy(t,e){return vl(4,4,t,e)}function Ey(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xy(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,Ey.bind(null,e,t),n)}function Wd(){}function Iy(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ud(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ky(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ud(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function by(t,e,n){return br&21?(Mt(n,e)||(n=Ng(),oe.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function ux(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=gc.transition;gc.transition={};try{t(!1),e()}finally{$=n,gc.transition=r}}function Sy(){return wt().memoizedState}function dx(t,e,n){var r=jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ty(t))Cy(e,n);else if(n=ly(t,e,n,r),n!==null){var i=We();Lt(n,t,r,i),Py(n,e,r)}}function fx(t,e,n){var r=jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ty(t))Cy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,o)){var l=e.interleaved;l===null?(i.next=i,Ld(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ly(t,e,i,r),n!==null&&(i=We(),Lt(n,t,r,i),Py(n,e,r))}}function Ty(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Cy(t,e){gs=La=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Py(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wd(t,n)}}var Oa={readContext:_t,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},hx={readContext:_t,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oa(4194308,4,Ey.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return oa(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dx.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Wd,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=ux.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Ut();if(ne){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Se===null)throw Error(k(349));br&30||hy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ip(my.bind(null,r,s,t),[t]),r.flags|=2048,$s(9,py.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=Se.identifierPrefix;if(ne){var n=sn,r=rn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},px={readContext:_t,useCallback:Iy,useContext:_t,useEffect:zd,useImperativeHandle:xy,useInsertionEffect:_y,useLayoutEffect:wy,useMemo:ky,useReducer:yc,useRef:vy,useState:function(){return yc(js)},useDebugValue:Wd,useDeferredValue:function(t){var e=wt();return by(e,me.memoizedState,t)},useTransition:function(){var t=yc(js)[0],e=wt().memoizedState;return[t,e]},useMutableSource:dy,useSyncExternalStore:fy,useId:Sy,unstable_isNewReconciler:!1},mx={readContext:_t,useCallback:Iy,useContext:_t,useEffect:zd,useImperativeHandle:xy,useInsertionEffect:_y,useLayoutEffect:wy,useMemo:ky,useReducer:vc,useRef:vy,useState:function(){return vc(js)},useDebugValue:Wd,useDeferredValue:function(t){var e=wt();return me===null?e.memoizedState=t:by(e,me.memoizedState,t)},useTransition:function(){var t=vc(js)[0],e=wt().memoizedState;return[t,e]},useMutableSource:dy,useSyncExternalStore:fy,useId:Sy,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=jn(t),s=cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Lt(e,t,i,r),ia(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=jn(t),s=cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Lt(e,t,i,r),ia(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=jn(t),i=cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Lt(e,t,r,n),ia(e,t,r))}};function sp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fs(n,r)||!Fs(i,s):!0}function Ny(t,e,n){var r=!1,i=er,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=nt(e)?Ir:He.current,r=e.contextTypes,s=(r=r!=null)?pi(t,i):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Od(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=nt(e)?Ir:He.current,i.context=pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_l.enqueueReplaceState(i,i.state,null),Aa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vi(t,e){try{var n="",r=e;do n+=Ww(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gx=typeof WeakMap=="function"?WeakMap:Map;function Ry(t,e,n){n=cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fa||(Fa=!0,Lu=r),ku(t,e)},n}function Ay(t,e,n){n=cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ku(t,e),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ap(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var yx=En.ReactCurrentOwner,Ze=!1;function Ve(t,e,n,r){e.child=t===null?ay(e,null,n,r):gi(e,t.child,n,r)}function up(t,e,n,r,i){n=n.render;var s=e.ref;return oi(e,i),r=Hd(t,e,n,r,s,i),n=Vd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(ne&&n&&Cd(e),e.flags|=1,Ve(t,e,r,i),e.child)}function dp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dy(t,e,s,r,i)):(t=ua(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fs,n(o,r)&&t.ref===e.ref)return mn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fs(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,mn(t,e,i)}return bu(t,e,n,r,i)}function Ly(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(ei,ot),ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(ei,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(ei,ot),ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(ei,ot),ot|=r;return Ve(t,e,i,n),e.child}function Oy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bu(t,e,n,r,i){var s=nt(n)?Ir:He.current;return s=pi(e,s),oi(e,i),n=Hd(t,e,n,r,s,i),r=Vd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(ne&&r&&Cd(e),e.flags|=1,Ve(t,e,n,i),e.child)}function fp(t,e,n,r,i){if(nt(n)){var s=!0;Ta(e)}else s=!1;if(oi(e,i),e.stateNode===null)aa(t,e),Ny(e,n,r),Iu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_t(c):(c=nt(n)?Ir:He.current,c=pi(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&op(e,o,r,c),Nn=!1;var d=e.memoizedState;o.state=d,Aa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||tt.current||Nn?(typeof u=="function"&&(xu(e,n,u,r),l=e.memoizedState),(a=Nn||sp(e,n,a,r,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bt(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=nt(n)?Ir:He.current,l=pi(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&op(e,o,r,l),Nn=!1,d=e.memoizedState,o.state=d,Aa(e,r,o,i);var y=e.memoizedState;a!==f||d!==y||tt.current||Nn?(typeof p=="function"&&(xu(e,n,p,r),y=e.memoizedState),(c=Nn||sp(e,n,c,r,d,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Su(t,e,n,r,s,i)}function Su(t,e,n,r,i,s){Oy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jh(e,n,!1),mn(t,e,s);r=e.stateNode,yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=gi(e,t.child,null,s),e.child=gi(e,null,a,s)):Ve(t,e,a,s),e.memoizedState=r.state,i&&Jh(e,n,!0),e.child}function My(t){var e=t.stateNode;e.pendingContext?Qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qh(t,e.context,!1),Md(t,e.containerInfo)}function hp(t,e,n,r,i){return mi(),Nd(i),e.flags|=256,Ve(t,e,n,r),e.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fy(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(re,i&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,r,0,null),t=Er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cu(n),e.memoizedState=Tu,t):jd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=$n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$n(a,s):(s=Er(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Tu,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jd(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wo(t,e,n,r){return r!==null&&Nd(r),gi(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_c(Error(k(422))),Wo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xl({mode:"visible",children:r.children},i,0,null),s=Er(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&gi(e,t.child,null,o),e.child.memoizedState=Cu(o),e.memoizedState=Tu,s);if(!(e.mode&1))return Wo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=_c(s,r,void 0),Wo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pn(t,i),Lt(r,t,i,-1))}return Qd(),r=_c(Error(k(421))),Wo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Rx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,at=Vn(i.nextSibling),lt=e,ne=!0,Ct=null,t!==null&&(ht[pt++]=rn,ht[pt++]=sn,ht[pt++]=kr,rn=t.id,sn=t.overflow,kr=e),e=jd(e,r.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eu(t.return,e,n)}function wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function By(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ve(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Da(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Da(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function aa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _x(t,e,n){switch(e.tag){case 3:My(e),mi();break;case 5:uy(e);break;case 1:nt(e.type)&&Ta(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?Fy(t,e,n):(Q(re,re.current&1),t=mn(t,e,n),t!==null?t.sibling:null);Q(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return By(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,Ly(t,e,n)}return mn(t,e,n)}var Uy,Pu,Hy,Vy;Uy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pu=function(){};Hy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(Kt.current);var s=null;switch(n){case"input":i=Jc(t,i),r=Jc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=eu(t,i),r=eu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ba)}nu(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ns.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Vy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ji(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wx(t,e,n){var r=e.pendingProps;switch(Pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return nt(e.type)&&Sa(),Me(e),null;case 3:return r=e.stateNode,yi(),Z(tt),Z(He),Bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ct!==null&&(Fu(Ct),Ct=null))),Pu(t,e),Me(e),null;case 5:Fd(e);var i=yr(zs.current);if(n=e.type,t!==null&&e.stateNode!=null)Hy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Me(e),null}if(t=yr(Kt.current),Vo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vt]=e,r[Hs]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<as.length;i++)X(as[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Ih(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":bh(r,s),X("invalid",r)}nu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ho(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ho(r.textContent,a,t),i=["children",""+a]):Ns.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Ao(r),kh(r,s,!0);break;case"textarea":Ao(r),Sh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ba)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vt]=e,t[Hs]=r,Uy(t,e,!1,!1),e.stateNode=t;e:{switch(o=ru(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<as.length;i++)X(as[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":Ih(t,r),i=Jc(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),X("invalid",t);break;case"textarea":bh(t,r),i=eu(t,r),X("invalid",t);break;default:i=r}nu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rs(t,l):typeof l=="number"&&Rs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ns.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&pd(t,s,l,o))}switch(n){case"input":Ao(t),kh(t,r,!1);break;case"textarea":Ao(t),Sh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Vy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=yr(zs.current),yr(Kt.current),Vo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vt]=e,(s=r.nodeValue!==n)&&(t=lt,t!==null))switch(t.tag){case 3:Ho(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=e,e.stateNode=r}return Me(e),null;case 13:if(Z(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&at!==null&&e.mode&1&&!(e.flags&128))sy(),mi(),e.flags|=98560,s=!1;else if(s=Vo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Vt]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Ct!==null&&(Fu(Ct),Ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?_e===0&&(_e=3):Qd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return yi(),Pu(t,e),t===null&&Bs(e.stateNode.containerInfo),Me(e),null;case 10:return Dd(e.type._context),Me(e),null;case 17:return nt(e.type)&&Sa(),Me(e),null;case 19:if(Z(re),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ji(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Da(t),o!==null){for(e.flags|=128,Ji(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>_i&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=Da(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Me(e),null}else 2*fe()-s.renderingStartTime>_i&&n!==1073741824&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=re.current,Q(re,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return qd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ot&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Ex(t,e){switch(Pd(e),e.tag){case 1:return nt(e.type)&&Sa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yi(),Z(tt),Z(He),Bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fd(e),null;case 13:if(Z(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(re),null;case 4:return yi(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var jo=!1,Be=!1,xx=typeof WeakSet=="function"?WeakSet:Set,P=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Nu(t,e,n){try{n()}catch(r){le(t,e,r)}}var mp=!1;function Ix(t,e){if(hu=xa,t=Gg(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===i&&(a=o),d===s&&++u===r&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:t,selectionRange:n},xa=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:bt(e.type,v),C);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=mp,mp=!1,y}function ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nu(e,n,s)}i=i.next}while(i!==r)}}function wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ru(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zy(t){var e=t.alternate;e!==null&&(t.alternate=null,zy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vt],delete e[Hs],delete e[yu],delete e[sx],delete e[ox])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wy(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ba));else if(r!==4&&(t=t.child,t!==null))for(Au(t,e,n),t=t.sibling;t!==null;)Au(t,e,n),t=t.sibling}function Du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}var Pe=null,St=!1;function Tn(t,e,n){for(n=n.child;n!==null;)jy(t,e,n),n=n.sibling}function jy(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:Be||Zr(n,e);case 6:var r=Pe,i=St;Pe=null,Tn(t,e,n),Pe=r,St=i,Pe!==null&&(St?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(St?(t=Pe,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),Os(t)):hc(Pe,n.stateNode));break;case 4:r=Pe,i=St,Pe=n.stateNode.containerInfo,St=!0,Tn(t,e,n),Pe=r,St=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nu(n,e,o),i=i.next}while(i!==r)}Tn(t,e,n);break;case 1:if(!Be&&(Zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}Tn(t,e,n);break;case 21:Tn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Tn(t,e,n),Be=r):Tn(t,e,n);break;default:Tn(t,e,n)}}function yp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xx),e.forEach(function(r){var i=Ax.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,St=!1;break e;case 3:Pe=a.stateNode.containerInfo,St=!0;break e;case 4:Pe=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Pe===null)throw Error(k(160));jy(s,o,i),Pe=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$y(e,t),e=e.sibling}function $y(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),Bt(t),r&4){try{ys(3,t,t.return),wl(3,t)}catch(v){le(t,t.return,v)}try{ys(5,t,t.return)}catch(v){le(t,t.return,v)}}break;case 1:kt(e,t),Bt(t),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(kt(e,t),Bt(t),r&512&&n!==null&&Zr(n,n.return),t.flags&32){var i=t.stateNode;try{Rs(i,"")}catch(v){le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hg(i,s),ru(a,o);var c=ru(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?vg(i,f):u==="dangerouslySetInnerHTML"?gg(i,f):u==="children"?Rs(i,f):pd(i,u,f,c)}switch(a){case"input":Xc(i,s);break;case"textarea":pg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ni(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ni(i,!!s.multiple,s.defaultValue,!0):ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hs]=s}catch(v){le(t,t.return,v)}}break;case 6:if(kt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){le(t,t.return,v)}}break;case 3:if(kt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(v){le(t,t.return,v)}break;case 4:kt(e,t),Bt(t);break;case 13:kt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kd=fe())),r&4&&yp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(c=Be)||u,kt(e,t),Be=c):kt(e,t),Bt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(P=t,u=t.child;u!==null;){for(f=P=u;P!==null;){switch(d=P,p=d.child,d.tag){case 0:case 11:case 14:case 15:ys(4,d,d.return);break;case 1:Zr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){le(r,n,v)}}break;case 5:Zr(d,d.return);break;case 22:if(d.memoizedState!==null){_p(f);continue}}p!==null?(p.return=d,P=p):_p(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yg("display",o))}catch(v){le(t,t.return,v)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){le(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kt(e,t),Bt(t),r&4&&yp(t);break;case 21:break;default:kt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wy(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rs(i,""),r.flags&=-33);var s=gp(t);Du(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gp(t);Au(t,a,o);break;default:throw Error(k(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kx(t,e,n){P=t,Gy(t)}function Gy(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||jo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=jo;var c=Be;if(jo=o,(Be=l)&&!c)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?wp(i):l!==null?(l.return=o,P=l):wp(i);for(;s!==null;)P=s,Gy(s),s=s.sibling;P=i,jo=a,Be=c}vp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):vp(t)}}function vp(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Os(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Be||e.flags&512&&Ru(e)}catch(d){le(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function _p(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function wp(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wl(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{Ru(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Ru(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var bx=Math.ceil,Ma=En.ReactCurrentDispatcher,$d=En.ReactCurrentOwner,vt=En.ReactCurrentBatchConfig,z=0,Se=null,pe=null,Re=0,ot=0,ei=sr(0),_e=0,Gs=null,Sr=0,El=0,Gd=0,vs=null,Xe=null,Kd=0,_i=1/0,Jt=null,Fa=!1,Lu=null,Wn=null,$o=!1,Mn=null,Ba=0,_s=0,Ou=null,la=-1,ca=0;function We(){return z&6?fe():la!==-1?la:la=fe()}function jn(t){return t.mode&1?z&2&&Re!==0?Re&-Re:lx.transition!==null?(ca===0&&(ca=Ng()),ca):(t=$,t!==0||(t=window.event,t=t===void 0?16:Fg(t.type)),t):1}function Lt(t,e,n,r){if(50<_s)throw _s=0,Ou=null,Error(k(185));fo(t,n,r),(!(z&2)||t!==Se)&&(t===Se&&(!(z&2)&&(El|=n),_e===4&&Ln(t,Re)),rt(t,r),n===1&&z===0&&!(e.mode&1)&&(_i=fe()+500,yl&&or()))}function rt(t,e){var n=t.callbackNode;lE(t,e);var r=Ea(t,t===Se?Re:0);if(r===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?ax(Ep.bind(null,t)):ny(Ep.bind(null,t)),rx(function(){!(z&6)&&or()}),n=null;else{switch(Rg(r)){case 1:n=_d;break;case 4:n=Cg;break;case 16:n=wa;break;case 536870912:n=Pg;break;default:n=wa}n=ev(n,Ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ky(t,e){if(la=-1,ca=0,z&6)throw Error(k(327));var n=t.callbackNode;if(ai()&&t.callbackNode!==n)return null;var r=Ea(t,t===Se?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ua(t,r);else{e=r;var i=z;z|=2;var s=qy();(Se!==t||Re!==e)&&(Jt=null,_i=fe()+500,wr(t,e));do try{Cx();break}catch(a){Yy(t,a)}while(!0);Ad(),Ma.current=s,z=i,pe!==null?e=0:(Se=null,Re=0,e=_e)}if(e!==0){if(e===2&&(i=lu(t),i!==0&&(r=i,e=Mu(t,i))),e===1)throw n=Gs,wr(t,0),Ln(t,r),rt(t,fe()),n;if(e===6)Ln(t,r);else{if(i=t.current.alternate,!(r&30)&&!Sx(i)&&(e=Ua(t,r),e===2&&(s=lu(t),s!==0&&(r=s,e=Mu(t,s))),e===1))throw n=Gs,wr(t,0),Ln(t,r),rt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:fr(t,Xe,Jt);break;case 3:if(Ln(t,r),(r&130023424)===r&&(e=Kd+500-fe(),10<e)){if(Ea(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gu(fr.bind(null,t,Xe,Jt),e);break}fr(t,Xe,Jt);break;case 4:if(Ln(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bx(r/1960))-r,10<r){t.timeoutHandle=gu(fr.bind(null,t,Xe,Jt),r);break}fr(t,Xe,Jt);break;case 5:fr(t,Xe,Jt);break;default:throw Error(k(329))}}}return rt(t,fe()),t.callbackNode===n?Ky.bind(null,t):null}function Mu(t,e){var n=vs;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Ua(t,e),t!==2&&(e=Xe,Xe=n,e!==null&&Fu(e)),t}function Fu(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function Sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ln(t,e){for(e&=~Gd,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function Ep(t){if(z&6)throw Error(k(327));ai();var e=Ea(t,0);if(!(e&1))return rt(t,fe()),null;var n=Ua(t,e);if(t.tag!==0&&n===2){var r=lu(t);r!==0&&(e=r,n=Mu(t,r))}if(n===1)throw n=Gs,wr(t,0),Ln(t,e),rt(t,fe()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,Xe,Jt),rt(t,fe()),null}function Yd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(_i=fe()+500,yl&&or())}}function Tr(t){Mn!==null&&Mn.tag===0&&!(z&6)&&ai();var e=z;z|=1;var n=vt.transition,r=$;try{if(vt.transition=null,$=1,t)return t()}finally{$=r,vt.transition=n,z=e,!(z&6)&&or()}}function qd(){ot=ei.current,Z(ei)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nx(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sa();break;case 3:yi(),Z(tt),Z(He),Bd();break;case 5:Fd(r);break;case 4:yi();break;case 13:Z(re);break;case 19:Z(re);break;case 10:Dd(r.type._context);break;case 22:case 23:qd()}n=n.return}if(Se=t,pe=t=$n(t.current,null),Re=ot=e,_e=0,Gs=null,Gd=El=Sr=0,Xe=vs=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gr=null}return t}function Yy(t,e){do{var n=pe;try{if(Ad(),sa.current=Oa,La){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}La=!1}if(br=0,ke=me=oe=null,gs=!1,Ws=0,$d.current=null,n===null||n.return===null){_e=1,Gs=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=lp(o);if(p!==null){p.flags&=-257,cp(p,o,a,s,e),p.mode&1&&ap(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){ap(s,c,e),Qd();break e}l=Error(k(426))}}else if(ne&&a.mode&1){var C=lp(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),cp(C,o,a,s,e),Nd(vi(l,a));break e}}s=l=vi(l,a),_e!==4&&(_e=2),vs===null?vs=[s]:vs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Ry(s,l,e);tp(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Wn===null||!Wn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Ay(s,a,e);tp(s,E);break e}}s=s.return}while(s!==null)}Jy(n)}catch(_){e=_,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function qy(){var t=Ma.current;return Ma.current=Oa,t===null?Oa:t}function Qd(){(_e===0||_e===3||_e===2)&&(_e=4),Se===null||!(Sr&268435455)&&!(El&268435455)||Ln(Se,Re)}function Ua(t,e){var n=z;z|=2;var r=qy();(Se!==t||Re!==e)&&(Jt=null,wr(t,e));do try{Tx();break}catch(i){Yy(t,i)}while(!0);if(Ad(),z=n,Ma.current=r,pe!==null)throw Error(k(261));return Se=null,Re=0,_e}function Tx(){for(;pe!==null;)Qy(pe)}function Cx(){for(;pe!==null&&!Zw();)Qy(pe)}function Qy(t){var e=Zy(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?Jy(t):pe=e,$d.current=null}function Jy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ex(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,pe=null;return}}else if(n=wx(n,e,ot),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);_e===0&&(_e=5)}function fr(t,e,n){var r=$,i=vt.transition;try{vt.transition=null,$=1,Px(t,e,n,r)}finally{vt.transition=i,$=r}return null}function Px(t,e,n,r){do ai();while(Mn!==null);if(z&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cE(t,s),t===Se&&(pe=Se=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,ev(wa,function(){return ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vt.transition,vt.transition=null;var o=$;$=1;var a=z;z|=4,$d.current=null,Ix(t,n),$y(n,t),qE(pu),xa=!!hu,pu=hu=null,t.current=n,kx(n),eE(),z=a,$=o,vt.transition=s}else t.current=n;if($o&&($o=!1,Mn=t,Ba=i),s=t.pendingLanes,s===0&&(Wn=null),rE(n.stateNode),rt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fa)throw Fa=!1,t=Lu,Lu=null,t;return Ba&1&&t.tag!==0&&ai(),s=t.pendingLanes,s&1?t===Ou?_s++:(_s=0,Ou=t):_s=0,or(),null}function ai(){if(Mn!==null){var t=Rg(Ba),e=vt.transition,n=$;try{if(vt.transition=null,$=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,Ba=0,z&6)throw Error(k(331));var i=z;for(z|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(P=c;P!==null;){var u=P;switch(u.tag){case 0:case 11:case 15:ys(8,u,s)}var f=u.child;if(f!==null)f.return=u,P=f;else for(;P!==null;){u=P;var d=u.sibling,p=u.return;if(zy(u),u===c){P=null;break}if(d!==null){d.return=p,P=d;break}P=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ys(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var h=t.current;for(P=h;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=h;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(_){le(a,a.return,_)}if(a===o){P=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,P=E;break e}P=a.return}}if(z=i,or(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(fl,t)}catch{}r=!0}return r}finally{$=n,vt.transition=e}}return!1}function xp(t,e,n){e=vi(n,e),e=Ry(t,e,1),t=zn(t,e,1),e=We(),t!==null&&(fo(t,1,e),rt(t,e))}function le(t,e,n){if(t.tag===3)xp(t,t,n);else for(;e!==null;){if(e.tag===3){xp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){t=vi(n,t),t=Ay(e,t,1),e=zn(e,t,1),t=We(),e!==null&&(fo(e,1,t),rt(e,t));break}}e=e.return}}function Nx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Re&n)===n&&(_e===4||_e===3&&(Re&130023424)===Re&&500>fe()-Kd?wr(t,0):Gd|=n),rt(t,e)}function Xy(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=We();t=pn(t,e),t!==null&&(fo(t,e,n),rt(t,n))}function Rx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xy(t,n)}function Ax(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),Xy(t,n)}var Zy;Zy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,_x(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,ne&&e.flags&1048576&&ry(e,Pa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;aa(t,e),t=e.pendingProps;var i=pi(e,He.current);oi(e,n),i=Hd(null,e,r,t,i,n);var s=Vd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,Ta(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Od(e),i.updater=_l,e.stateNode=i,i._reactInternals=e,Iu(e,r,t,n),e=Su(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Cd(e),Ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(aa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Lx(r),t=bt(r,t),i){case 0:e=bu(null,e,r,t,n);break e;case 1:e=fp(null,e,r,t,n);break e;case 11:e=up(null,e,r,t,n);break e;case 14:e=dp(null,e,r,bt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),bu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),fp(t,e,r,i,n);case 3:e:{if(My(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cy(t,e),Aa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(k(423)),e),e=hp(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(k(424)),e),e=hp(t,e,r,n,i);break e}else for(at=Vn(e.stateNode.containerInfo.firstChild),lt=e,ne=!0,Ct=null,n=ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){e=mn(t,e,n);break e}Ve(t,e,r,n)}e=e.child}return e;case 5:return uy(e),t===null&&wu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mu(r,i)?o=null:s!==null&&mu(r,s)&&(e.flags|=32),Oy(t,e),Ve(t,e,o,n),e.child;case 6:return t===null&&wu(e),null;case 13:return Fy(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=gi(e,null,r,n):Ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),up(t,e,r,i,n);case 7:return Ve(t,e,e.pendingProps,n),e.child;case 8:return Ve(t,e,e.pendingProps.children,n),e.child;case 12:return Ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Na,r._currentValue),r._currentValue=o,s!==null)if(Mt(s.value,o)){if(s.children===i.children&&!tt.current){e=mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=cn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Eu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Eu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,oi(e,n),i=_t(i),r=r(i),e.flags|=1,Ve(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),dp(t,e,r,i,n);case 15:return Dy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),aa(t,e),e.tag=1,nt(r)?(t=!0,Ta(e)):t=!1,oi(e,n),Ny(e,r,i),Iu(e,r,i,n),Su(null,e,r,!0,t,n);case 19:return By(t,e,n);case 22:return Ly(t,e,n)}throw Error(k(156,e.tag))};function ev(t,e){return Tg(t,e)}function Dx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new Dx(t,e,n,r)}function Jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lx(t){if(typeof t=="function")return Jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gd)return 11;if(t===yd)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ua(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return Er(n.children,i,s,e);case md:o=8,i|=8;break;case Kc:return t=mt(12,n,e,i|2),t.elementType=Kc,t.lanes=s,t;case Yc:return t=mt(13,n,e,i),t.elementType=Yc,t.lanes=s,t;case qc:return t=mt(19,n,e,i),t.elementType=qc,t.lanes=s,t;case ug:return xl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lg:o=10;break e;case cg:o=9;break e;case gd:o=11;break e;case yd:o=14;break e;case Pn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Er(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function xl(t,e,n,r){return t=mt(22,t,r,e),t.elementType=ug,t.lanes=n,t.stateNode={isHidden:!1},t}function Ec(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function xc(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xd(t,e,n,r,i,s,o,a,l){return t=new Ox(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Od(s),t}function Mx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tv(t){if(!t)return er;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(nt(n))return ty(t,n,e)}return e}function nv(t,e,n,r,i,s,o,a,l){return t=Xd(n,r,!0,t,i,s,o,a,l),t.context=tv(null),n=t.current,r=We(),i=jn(n),s=cn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,fo(t,i,r),rt(t,r),t}function Il(t,e,n,r){var i=e.current,s=We(),o=jn(i);return n=tv(n),e.context===null?e.context=n:e.pendingContext=n,e=cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,o),t!==null&&(Lt(t,i,o,s),ia(t,i,o)),o}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){Ip(t,e),(t=t.alternate)&&Ip(t,e)}function Fx(){return null}var rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ef(t){this._internalRoot=t}kl.prototype.render=ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Il(t,e,null,null)};kl.prototype.unmount=ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Il(null,t,null,null)}),e[hn]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dn.length&&e!==0&&e<Dn[n].priority;n++);Dn.splice(n,0,t),n===0&&Mg(t)}};function tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function Bx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ha(o);s.call(c)}}var o=nv(e,r,t,0,null,!1,!1,"",kp);return t._reactRootContainer=o,t[hn]=o.current,Bs(t.nodeType===8?t.parentNode:t),Tr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ha(l);a.call(c)}}var l=Xd(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=l,t[hn]=l.current,Bs(t.nodeType===8?t.parentNode:t),Tr(function(){Il(e,l,n,r)}),l}function Sl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ha(o);a.call(l)}}Il(e,o,t,i)}else o=Bx(n,e,t,i,r);return Ha(o)}Ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(wd(e,n|1),rt(e,fe()),!(z&6)&&(_i=fe()+500,or()))}break;case 13:Tr(function(){var r=pn(t,1);if(r!==null){var i=We();Lt(r,t,1,i)}}),Zd(t,1)}};Ed=function(t){if(t.tag===13){var e=pn(t,134217728);if(e!==null){var n=We();Lt(e,t,134217728,n)}Zd(t,134217728)}};Dg=function(t){if(t.tag===13){var e=jn(t),n=pn(t,e);if(n!==null){var r=We();Lt(n,t,e,r)}Zd(t,e)}};Lg=function(){return $};Og=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};su=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gl(r);if(!i)throw Error(k(90));fg(r),Xc(r,i)}}}break;case"textarea":pg(t,n);break;case"select":e=n.value,e!=null&&ni(t,!!n.multiple,e,!1)}};Eg=Yd;xg=Tr;var Ux={usingClientEntryPoint:!1,Events:[po,Yr,gl,_g,wg,Yd]},Xi={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hx={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bg(t),t===null?null:t.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||Fx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{fl=Go.inject(Hx),Gt=Go}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ux;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(e))throw Error(k(200));return Mx(t,e,null,n)};ut.createRoot=function(t,e){if(!tf(t))throw Error(k(299));var n=!1,r="",i=rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xd(t,1,!1,null,null,n,!1,r,i),t[hn]=e.current,Bs(t.nodeType===8?t.parentNode:t),new ef(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=bg(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return Tr(t)};ut.hydrate=function(t,e,n){if(!bl(e))throw Error(k(200));return Sl(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!tf(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nv(e,null,t,1,n??null,i,!1,s,o),t[hn]=e.current,Bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kl(e)};ut.render=function(t,e,n){if(!bl(e))throw Error(k(200));return Sl(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!bl(t))throw Error(k(40));return t._reactRootContainer?(Tr(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1};ut.unstable_batchedUpdates=Yd;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Sl(t,e,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function iv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iv)}catch(t){console.error(t)}}iv(),ig.exports=ut;var Vx=ig.exports,sv,bp=Vx;sv=bp.createRoot,bp.hydrateRoot;const zx=`<!-- LOGIN EKRANI (Açılışta Engelleme İçin) -->
<div id="loginOverlay"
    class="fixed inset-0 z-[999] bg-[#0f172a] flex flex-col items-center justify-center p-6 text-center animate-fade-in">
    <div class="mb-8 relative group">
        <div
            class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200">
        </div>
        <div
            class="relative w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center border border-white/10 shadow-2xl">
            <i class="fa-solid fa-shield-halved text-4xl text-indigo-500"></i>
        </div>
    </div>

    <h2 id="loginTitle" class="text-2xl font-black text-white mb-2 tracking-tight">Kurye Pro</h2>
    <p class="text-gray-400 text-sm mb-8 max-w-xs mx-auto">Devam etmek için Google hesabınız ile oturum açın.</p>

    <div class="w-full max-w-xs space-y-4">
        <button onclick="attemptLogin()" id="btnLoginBtn"
            class="w-full py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            <i class="fa-brands fa-google text-red-600 text-xl"></i>
            GOOGLE İLE GİRİŞ YAP
        </button>
    </div>

    <div class="mt-8 pt-8 border-t border-white/5 w-full max-w-xs">
        <p class="text-[10px] text-gray-500 font-mono" id="deviceInfoText">Cihaz Doğrulanıyor...</p>
    </div>
</div>

<!-- Özel Modal (Confirm için) -->
<div id="customConfirmModal"
    class="hidden fixed inset-0 z-[100] custom-modal-overlay flex items-center justify-center p-4">
    <div class="custom-modal bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-sm shadow-2xl p-6 relative">
        <div class="flex justify-center mb-4">
            <div class="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <i class="fa-solid fa-exclamation-triangle text-yellow-500 text-xl"></i>
            </div>
        </div>
        <h3 id="confirmModalTitle" class="text-lg font-bold text-white text-center mb-2">Emin misiniz?</h3>
        <p id="confirmModalMessage" class="text-sm text-gray-300 text-center mb-6">Bu işlem geri alınamaz.</p>
        <div class="flex gap-3">
            <button id="confirmModalCancel"
                class="modal-btn-cancel flex-1 py-3 text-white rounded-xl font-bold">İptal</button>
            <button id="confirmModalOk"
                class="modal-btn-confirm flex-1 py-3 text-white rounded-xl font-bold">Evet</button>
        </div>
    </div>
</div>

<!-- KURYE ARAMA MODALI (DIALER) -->
<div id="dialerModal" class="hidden fixed inset-0 z-[90] custom-modal-overlay flex items-center justify-center p-4">
    <div
        class="custom-modal bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-sm shadow-2xl p-5 relative overflow-hidden flex flex-col max-h-[90vh]">

        <!-- Header -->
        <div class="flex justify-between items-center mb-4 pb-3 border-b border-gray-800">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <div
                    class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                    <i class="fa-solid fa-phone text-white text-xs"></i>
                </div>
                Kurye Arama
            </h3>
            <button onclick="closeDialerModal()"
                class="w-8 h-8 rounded-full bg-slate-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <div class="overflow-y-auto no-scrollbar flex-1 pr-1">
            <!-- Sipariş No Girişi -->
            <div class="mb-5">
                <label class="text-[10px] uppercase font-bold text-gray-500 mb-1.5 block ml-1">Sipariş No &
                    İşlem</label>
                <div class="flex gap-2 mb-2">
                    <input type="tel" id="dialerOrderInput" placeholder="Sipariş No Girin..."
                        class="dialer-input w-full p-3 rounded-xl font-bold text-lg text-center tracking-widest bg-slate-950">
                </div>
                <div class="flex gap-2">
                    <button onclick="saveOrderHistory()"
                        class="flex-1 py-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 font-bold text-xs border border-blue-600/30 transition-all active:scale-95">
                        <i class="fa-solid fa-save mr-1"></i> KAYDET
                    </button>
                    <button onclick="document.getElementById('dialerOrderInput').value=''"
                        class="flex-1 py-2 rounded-xl bg-slate-800 text-gray-400 hover:bg-slate-700 font-bold text-xs border border-white/5 transition-all active:scale-95">
                        <i class="fa-solid fa-eraser mr-1"></i> TEMİZLE
                    </button>
                </div>
            </div>

            <!-- Son Eklenenler (History) -->
            <div id="dialerHistorySection" class="mb-5 hidden">
                <label
                    class="text-[10px] uppercase font-bold text-gray-500 mb-1.5 block ml-1 flex justify-between items-center">
                    <span>Son İşlemler</span>
                    <button onclick="clearDialerHistory()"
                        class="text-[9px] text-red-400 hover:underline">Temizle</button>
                </label>
                <div id="dialerHistoryList" class="flex flex-wrap gap-2">
                    <!-- JS ile dolacak -->
                </div>
            </div>

            <!-- Telefon Numaraları -->
            <div>
                <label class="text-[10px] uppercase font-bold text-gray-500 mb-1.5 block ml-1">Kayıtlı
                    Numaralar</label>

                <!-- Default Number -->
                <div
                    class="bg-slate-800/50 p-3 rounded-xl border border-white/5 mb-2 flex items-center justify-between group hover:border-green-500/30 transition-colors">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                            <i class="fa-solid fa-headset"></i>
                        </div>
                        <div>
                            <div class="text-xs text-gray-400 font-bold">Varsayılan</div>
                            <div class="text-white font-mono font-bold tracking-wider">0212 365 34 03</div>
                        </div>
                    </div>
                    <button onclick="callDialerNumber('02123653403')"
                        class="w-10 h-10 rounded-xl bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-500/20 active:scale-90 transition-all flex items-center justify-center">
                        <i class="fa-solid fa-phone"></i>
                    </button>
                </div>

                <!-- Custom Numbers List -->
                <div id="dialerNumbersList" class="space-y-2 mb-3">
                    <!-- JS ile dolacak -->
                </div>

                <!-- Add New Number -->
                <div class="mt-3 pt-3 border-t border-gray-800">
                    <div class="flex gap-2">
                        <input type="tel" id="newDialerNumber" placeholder="Yeni Numara Ekle..."
                            class="dialer-input flex-1 p-2 rounded-lg text-sm bg-slate-950">
                        <button onclick="addDialerNumber()"
                            class="w-10 rounded-lg bg-slate-800 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 transition-colors">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Header -->
<div class="glass-header sticky top-0 z-40 px-4">
    <div class="max-w-md mx-auto flex justify-between items-center">
        <h1 class="font-bold text-lg text-white flex items-center gap-2 tracking-tight">
            <div
                class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <i class="fa-solid fa-motorcycle text-white text-sm"></i>
            </div>
            Kurye Pro V34
        </h1>
        <div id="headerTools" class="flex items-center gap-3">
            <div id="headerManualToggle"
                class="flex items-center gap-2 bg-slate-800/80 backdrop-blur p-1 pr-3 rounded-full border border-white/5">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="manualModeToggle" class="sr-only peer" onchange="toggleManualMode()">
                    <div
                        class="w-8 h-4 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-500">
                    </div>
                </label>
                <span class="text-[9px] font-bold text-gray-300" id="modeLabel">PAKET</span>
            </div>
            <button onclick="toggleSettings()"
                class="bg-slate-800/80 text-gray-300 hover:text-white p-2 rounded-full border border-white/5 w-8 h-8 flex items-center justify-center"><i
                    class="fa-solid fa-gear text-xs"></i></button>
        </div>
    </div>
</div>

<!-- Hızlı Erişim Çubuğu -->
<div class="dock-container" id="sideDock">
    <button class="dock-trigger" onclick="toggleSideDock()">
        <i class="fa-solid fa-chevron-right text-lg"></i>
    </button>
    <div class="dock-items">
        <a href="javascript:void(0)" onclick="toggleMapModal()" class="dock-link bg-blue-600 hover:bg-blue-500"><i
                class="fa-solid fa-map"></i></a>
        <a href="https://music.youtube.com" target="_blank" class="dock-link bg-red-600 hover:bg-red-500"><i
                class="fa-brands fa-youtube"></i></a>
        <a href="javascript:void(0)" onclick="openDialerModal()" class="dock-link bg-green-600 hover:bg-green-500"><i
                class="fa-solid fa-phone"></i></a>
        <a href="javascript:void(0)" onclick="posTetikle()" class="dock-link bg-orange-600 hover:bg-orange-500"><i
                class="fa-solid fa-credit-card"></i></a>
    </div>
</div>

<!-- Akıllı Yukarı/Aşağı Butonu -->
<button id="scrollDirectionBtn" class="scroll-direction-btn">
    <i class="fa-solid fa-chevron-down" id="scrollDirectionIcon"></i>
</button>

<!-- YEDEKLEME BÖLÜMÜ -->
<div id="settingsModal" class="hidden fixed inset-0 z-[60] modal-overlay flex items-center justify-center p-4">
    <div
        class="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-sm shadow-2xl p-6 relative flex flex-col max-h-[90vh]">
        <div class="flex justify-between items-center mb-6 shrink-0">
            <h2 class="text-lg font-bold text-white">Ayarlar</h2>
            <button onclick="toggleSettings()" class="text-gray-400 hover:text-white transition-colors"><i
                    class="fa-solid fa-xmark text-xl"></i></button>
        </div>
        <div class="overflow-y-auto pr-1 custom-scrollbar space-y-6 flex-1">
            <div class="space-y-4">
                <h3 class="text-xs font-bold text-indigo-400 uppercase tracking-widest border-b border-white/5 pb-2">
                    Birim Fiyatlar</h3>
                <div class="grid grid-cols-2 gap-3">
                    <div><label class="text-[10px] text-gray-500 font-bold block mb-1.5">Tekli Paket</label><input
                            type="number" id="confSingle" class="w-full input-dark p-2.5 rounded-xl font-bold"
                            onkeyup="savePriceSettings()"></div>
                    <div><label class="text-[10px] text-gray-500 font-bold block mb-1.5">Çoklu Paket</label><input
                            type="number" id="confMulti" class="w-full input-dark p-2.5 rounded-xl font-bold"
                            onkeyup="savePriceSettings()"></div>
                    <div><label class="text-[10px] text-gray-500 font-bold block mb-1.5">AVM Bonusu</label><input
                            type="number" id="confAvm" class="w-full input-dark p-2.5 rounded-xl font-bold"
                            onkeyup="savePriceSettings()"></div>
                    <div><label class="text-[10px] text-gray-500 font-bold block mb-1.5">Gece Farkı</label><input
                            type="number" id="confNight" class="w-full input-dark p-2.5 rounded-xl font-bold"
                            onkeyup="savePriceSettings()"></div>
                </div>
            </div>
            <div class="border-t border-slate-700 pt-4">
                <h3 class="text-sm font-bold text-white flex items-center gap-2"><i
                        class="fa-solid fa-database text-amber-500"></i> Veri Yedekle ve Geri Yükle</h3>
                <button onclick="backupData()"
                    class="w-full py-3 text-xs bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-500 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mb-3"><i
                        class="fa-solid fa-download"></i> Tüm Verileri Yedekle (.json)</button>
                <button onclick="document.getElementById('restoreFileInput').click()"
                    class="w-full py-3 text-xs bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"><i
                        class="fa-solid fa-upload"></i> Yedekten Geri Yükle</button>
                <input type="file" id="restoreFileInput" accept=".json" class="hidden" onchange="restoreData(event)">
            </div>
            <div class="border-t border-slate-700 pt-4">
                <div class="text-[10px] text-gray-500 space-y-1">
                    <div class="flex justify-between"><span>Toplam Veri:</span><span id="dataSize">0 KB</span></div>
                    <div class="flex justify-between"><span>Son Yedekleme:</span><span id="lastBackupTime">Hiç</span>
                    </div>
                    <div class="flex justify-between"><span>Kayıtlı Günler:</span><span id="savedDaysCount">0</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-3 mt-6 shrink-0">
            <button onclick="resetPriceDefaults()"
                class="px-4 py-3 text-xs font-bold text-red-400 bg-red-900/10 border border-red-900/30 rounded-xl hover:bg-red-900/20 transition-colors">Fiyatları
                Sıfırla</button>
            <button onclick="toggleSettings()"
                class="flex-1 py-3 text-xs bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 transition-all">Kaydet
                ve Çık</button>
        </div>
    </div>
</div>

<!-- Not Modal -->
<div id="noteModal" class="hidden fixed inset-0 z-[60] modal-overlay flex items-center justify-center p-4">
    <div
        class="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-sm shadow-2xl p-6 relative flex flex-col max-h-[90vh]">
        <div class="flex justify-between items-center mb-4 shrink-0">
            <h2 class="text-sm font-bold text-white" id="noteDateTitle">...</h2><button onclick="closeNoteModal()"
                class="text-gray-400 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div id="dayEventsList" class="flex-1 overflow-y-auto mb-4 space-y-2 pr-1 min-h-[50px]"></div>
        <div class="border-t border-slate-700 pt-4 shrink-0 bg-slate-900">
            <p class="text-[10px] font-bold text-indigo-400 mb-2 uppercase">Yeni Ekle</p>
            <div class="flex gap-2 mb-3"><button onclick="setNoteType('income')" id="btnTypeIncome"
                    class="btn-type flex-1 py-2 rounded-lg bg-green-900/40 text-green-400 font-bold text-[10px]"><i
                        class="fa-solid fa-arrow-up mr-1"></i>GELİR</button><button onclick="setNoteType('expense')"
                    id="btnTypeExpense"
                    class="btn-type flex-1 py-2 rounded-lg bg-red-900/40 text-red-400 font-bold text-[10px]"><i
                        class="fa-solid fa-arrow-down mr-1"></i>GİDER</button><button onclick="setNoteType('activity')"
                    id="btnTypeActivity"
                    class="btn-type flex-1 py-2 rounded-lg bg-yellow-900/40 text-yellow-400 font-bold text-[10px]"><i
                        class="fa-solid fa-list-check mr-1"></i>İŞ</button></div>
            <div class="space-y-3">
                <div><input type="text" id="noteText" placeholder="Açıklama"
                        class="w-full input-dark p-2.5 rounded-xl text-sm"></div>
                <div id="amountInputGroup">
                    <div class="relative"><span
                            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₺</span><input type="number"
                            id="noteAmount" placeholder="0"
                            class="w-full input-dark p-2.5 pl-8 rounded-xl text-sm font-bold"></div>
                </div>
            </div><button onclick="addNote()"
                class="w-full py-3 mt-4 text-xs bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg">EKLE</button>
        </div>
    </div>
</div>

<!-- Adres Arama Modalı -->
<div id="mapModal" class="hidden fixed inset-0 z-[60] modal-overlay flex items-center justify-center p-4 text-left">
    <div
        class="custom-modal bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-sm shadow-2xl p-6 relative flex flex-col max-h-[90vh]">
        <div class="flex justify-between items-center mb-6 shrink-0">
            <h2 class="text-lg font-bold text-white flex items-center gap-2"><i
                    class="fa-solid fa-map-location-dot text-blue-500"></i> Adres Bul</h2>
            <button onclick="toggleMapModal()" class="text-gray-400 hover:text-white transition-colors"><i
                    class="fa-solid fa-xmark text-xl"></i></button>
        </div>

        <div class="overflow-y-auto pr-1 custom-scrollbar space-y-4 flex-1">
            <!-- Hızlı Arama -->
            <div class="relative">
                <label class="text-[9px] text-gray-400 font-bold uppercase block mb-2 flex items-center gap-1">
                    <i class="fa-solid fa-keyboard"></i> Hızlı Arama (Mahalle, Sokak veya Kapı No yaz)
                </label>
                <div class="relative">
                    <input type="text" id="quickAddressSearch" class="w-full input-dark p-3 pl-10 rounded-xl text-sm"
                        placeholder="Örn: Akademi, 317, İstanbul CD..." oninput="quickSearchAddress(this.value)"
                        autocomplete="off">
                    <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
                </div>
                <div id="quickSearchResults"
                    class="hidden absolute left-0 right-0 mt-1 bg-slate-800 border border-slate-600 rounded-xl max-h-48 overflow-y-auto z-50 shadow-xl">
                </div>
            </div>

            <div class="flex items-center gap-2 text-[10px] text-gray-500">
                <div class="flex-1 border-t border-slate-700"></div>
                <span>veya manuel seç</span>
                <div class="flex-1 border-t border-slate-700"></div>
            </div>

            <div class="space-y-3">
                <!-- Mahalle -->
                <div class="modern-select-container">
                    <label
                        class="text-[9px] text-gray-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none">Mahalle
                        (Selçuklu)</label>
                    <select id="mapMahalle" class="modern-select pt-8" onchange="loadStreets()">
                        <option value="">Seçiniz...</option>
                    </select>
                </div>

                <!-- Cadde/Sokak -->
                <div class="modern-select-container">
                    <label
                        class="text-[9px] text-gray-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none">Cadde
                        / Sokak</label>
                    <select id="mapSokak" class="modern-select pt-8" onchange="loadDoors()" disabled>
                        <option value="">Önce Mahalle Seçin</option>
                    </select>
                </div>

                <!-- Kapı No -->
                <div class="modern-select-container">
                    <label
                        class="text-[9px] text-gray-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none">Kapı
                        No</label>
                    <select id="mapKapi" class="modern-select pt-8" disabled>
                        <option value="">Önce Sokak Seçin</option>
                    </select>
                </div>

                <button onclick="searchAndShowMap()"
                    class="w-full py-3 text-sm bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                    <i class="fa-solid fa-search-location"></i> KONUMU GÖSTER
                </button>

                <button id="googleMapsBtn" onclick="openExternalMap()"
                    class="hidden w-full py-3 text-sm bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all flex items-center justify-center gap-2 border border-white/10">
                    <i class="fa-brands fa-google"></i> Google Map'te Aç
                </button>
            </div>

            <!-- Harita Alanı -->
            <div id="internalMapContainer" class="hidden space-y-3 mt-4 pt-4 border-t border-slate-700">
                <div id="internalMap" class="w-full h-[250px] rounded-2xl border border-white/10 z-0 relative">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ANA İÇERİK -->
<div class="max-w-md mx-auto p-4 space-y-4">

    <!-- SEKME 1: GELİR (PROFIT) -->
    <div id="tabProfit" class="tab-content active space-y-4">

        <div class="flex bg-slate-900 p-1 rounded-2xl border border-white/5 mb-4">
            <button onclick="setDurationMode('day')" id="btnDurDay" class="toggle-btn active">1 GÜN</button>
            <button onclick="setDurationMode('week')" id="btnDurWeek" class="toggle-btn inactive">1 HAFTA</button>
            <button onclick="setDurationMode('month')" id="btnDurMonth" class="toggle-btn inactive">1 AY</button>
        </div>

        <div class="card p-4 flex justify-between items-center bg-slate-800/30 border-white/5">
            <div>
                <p class="text-[10px] text-gray-400 uppercase font-bold mb-1.5 ml-1">AYDA KAÇ GÜN YATTIN?</p>
                <div class="flex items-center gap-3 bg-slate-900/50 p-1 rounded-xl border border-white/5 mb-1">
                    <button class="btn-counter hover:bg-indigo-600 hover:text-white" onclick="changeDays(1)">+</button>
                    <span id="daysOffDisplay" class="text-xl font-black text-white w-8 text-center">4</span>
                    <button class="btn-counter hover:bg-indigo-600 hover:text-white" onclick="changeDays(-1)">-</button>
                </div>
            </div>
            <div class="text-right">
                <p class="text-[9px] text-gray-500 uppercase font-bold mb-1">ÇALIŞILAN GÜN</p>
                <p class="text-4xl font-black text-indigo-400" id="calculatedWorkDays">26</p>
            </div>
        </div>

        <!-- Manual Section -->
        <div id="manualSection" class="hidden animate-fade-in">
            <div
                class="bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 mb-4 relative group">
                <label class="text-xs text-emerald-400 font-bold uppercase mb-2 block tracking-wider">Toplam
                    Ciro</label>
                <div class="relative">
                    <span
                        class="absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-bold text-emerald-500/50">₺</span>
                    <input type="number" id="manualIncomeVal" placeholder="0"
                        class="w-full bg-transparent border-b-2 border-emerald-500/30 p-2 pl-8 text-4xl font-black text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-white/10"
                        onkeyup="calculateProfit()">
                </div>
            </div>

            <!-- Date Selector (Dropdown) - Updated Style -->
            <div class="modern-select-container mb-4">
                <label
                    class="text-[9px] text-gray-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none"><i
                        class="fa-solid fa-credit-card text-indigo-400 mr-1.5"></i> Ödeme Günü (Çarşamba)</label>
                <select id="manualPaymentDate" class="modern-select pt-8">
                    <!-- Populated by JS -->
                </select>
            </div>

            <button onclick="addCalculatedToPayment('manualPaymentDate')"
                class="add-income-btn w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 mb-4">
                <i class="fa-solid fa-calendar-plus"></i>
                <span>HESAPLANAN NET TUTARI ÖDEMEYE EKLE</span>
            </button>
            <button onclick="scrollToResults()"
                class="btn-action w-full py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 text-white font-bold text-sm flex items-center justify-center gap-2 group mb-4">
                <span>HESAPLA & SONUCU GÖR</span>
                <i class="fa-solid fa-arrow-down group-hover:translate-y-1 transition-transform"></i>
            </button>
        </div>

        <div id="packetSection">
            <div class="card p-5 relative overflow-hidden">
                <div class="flex justify-between items-center mb-5">
                    <h2 class="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2">
                        <i class="fa-solid fa-pen-to-square text-indigo-500"></i> Günlük Giriş
                    </h2>
                    <button onclick="clearPacketInputs()"
                        class="text-[10px] font-bold text-red-400 bg-red-900/10 px-2 py-1.5 rounded-lg border border-red-500/20 hover:bg-red-900/30 transition-colors">
                        <i class="fa-solid fa-trash-can"></i> SIFIRLA
                    </button>
                </div>

                <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div><label class="text-[9px] text-gray-400 uppercase font-bold block mb-1.5 ml-1">Tekli
                                (110₺)</label><input type="number" id="single"
                                class="w-full input-dark p-3 rounded-xl font-bold text-xl text-center" placeholder="0"
                                onkeyup="calculateProfit()"></div>
                        <div><label class="text-[9px] text-gray-400 uppercase font-bold block mb-1.5 ml-1">Çoklu
                                (40₺)</label><input type="number" id="multi"
                                class="w-full input-dark p-3 rounded-xl font-bold text-xl text-center" placeholder="0"
                                onkeyup="calculateProfit()"></div>
                    </div>
                    <div class="grid grid-cols-3 gap-3">
                        <div><label class="text-[9px] text-gray-500 font-bold block mb-1.5 text-center">AVM
                                (10₺)</label><input type="number" id="avm"
                                class="w-full input-dark p-2 rounded-xl text-center text-sm font-semibold"
                                placeholder="-" onkeyup="calculateProfit()"></div>
                        <div><label class="text-[9px] text-gray-500 font-bold block mb-1.5 text-center">Gece
                                (20₺)</label><input type="number" id="night"
                                class="w-full input-dark p-2 rounded-xl text-center text-sm font-semibold"
                                placeholder="-" onkeyup="calculateProfit()"></div>
                        <div><label class="text-[10px] text-blue-400 font-bold block mb-1.5 text-center">Ort.
                                KM</label><input type="number" id="avgKmProfit"
                                class="w-full input-dark p-2 rounded-xl text-center text-sm font-semibold border-blue-500/30 focus:border-blue-500"
                                placeholder="Örn: 3.5" step="0.1" onkeyup="calculateProfit()"></div>
                    </div>
                    <div class="text-center" id="profitKmInfo" style="display:none;"><span class="tier-info-badge"><i
                                class="fa-solid fa-route mr-1"></i><span id="profitKmRate">0</span> TL/paket olarak
                            hesaplandı</span></div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 text-center mt-4">
                <div class="bg-slate-800/40 rounded-2xl p-4 border border-white/5">
                    <p class="text-[9px] text-gray-500 font-bold uppercase mb-1">Günlük Ciro</p>
                    <p class="text-2xl font-black text-white">₺<span id="dispDailyMoney">0</span></p>
                </div>
                <div class="bg-slate-800/40 rounded-2xl p-4 border border-white/5">
                    <p class="text-[9px] text-indigo-300 font-bold uppercase mb-1">Paket Sayısı</p>
                    <p class="text-2xl font-black text-white"><span id="dispTotalPackets">0</span></p>
                </div>
            </div>

            <!-- Date Selector (Dropdown) - Updated Style -->
            <div class="modern-select-container mt-4">
                <label
                    class="text-[9px] text-gray-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none"><i
                        class="fa-solid fa-credit-card text-indigo-400 mr-1.5"></i> Ödeme Günü (Çarşamba)</label>
                <select id="packetPaymentDate" class="modern-select pt-8">
                    <!-- Populated by JS -->
                </select>
            </div>

            <button onclick="addCalculatedToPayment('packetPaymentDate')"
                class="add-income-btn w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 mb-4 mt-2">
                <i class="fa-solid fa-calendar-plus"></i>
                <span>HESAPLANAN NET TUTARI ÖDEMEYE EKLE</span>
            </button>

            <div
                class="card p-5 mt-4 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border-indigo-500/10 shadow-lg shadow-indigo-500/5">
                <div class="flex justify-between items-end mb-3">
                    <div>
                        <h2
                            class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1">
                            <i class="fa-solid fa-star text-yellow-500"></i> Günlük Bonus
                        </h2>
                        <span class="text-3xl font-black text-white tracking-tight">₺<span
                                id="bonusAmount">0</span></span>
                        <div class="text-[10px] text-gray-400 mt-1 font-bold" id="selectedDayLabel">Otomatik
                            Algılandı</div>
                    </div>
                    <div class="text-right">
                        <div class="text-[10px] text-gray-500 font-bold mb-1">SONRAKİ SEVİYE</div>
                        <span class="text-sm font-bold text-indigo-200 bg-indigo-500/10 px-2 py-1 rounded"><span
                                id="nextBonusPkt">-</span> Pkt</span>
                    </div>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-3 mb-2 p-0.5 border border-white/5 relative">
                    <div id="bonusBar"
                        class="bg-gradient-to-r from-indigo-600 to-purple-500 h-2 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        style="width: 0%"></div>
                </div>
                <div
                    class="flex justify-between items-center text-[9px] mt-2 bg-slate-800/50 p-2 rounded-lg border border-white/5">
                    <div class="text-gray-400">Şu an: <span id="currentTierInfo" class="text-white font-bold">0
                            TL</span></div>
                    <div class="text-indigo-300 flex items-center gap-1"><span>Sonraki: <span id="nextTierInfo"
                                class="font-bold">0 TL</span></span><i class="fa-solid fa-arrow-right text-[8px]"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="card p-5 space-y-4 mt-4">
            <div class="flex justify-between items-center border-b border-white/5 pb-3">
                <h2 class="text-xs font-bold text-gray-400 uppercase flex items-center gap-2"><i
                        class="fa-solid fa-wallet text-indigo-500"></i> Gider & KDV Yönetimi</h2>
            </div>
            <div class="bg-emerald-900/5 border border-emerald-500/10 rounded-2xl p-4">
                <label
                    class="text-[9px] text-emerald-500 font-bold uppercase mb-3 block tracking-wider flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> KDV'den Düşülen Giderler
                </label>
                <div class="grid grid-cols-2 gap-4">
                    <div><label class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">Günlük
                            Yakıt</label><input type="number" id="dailyFuel"
                            class="w-full input-dark p-2.5 rounded-xl text-center font-bold text-sm"
                            onkeyup="saveExpenses(); calculateProfit()"></div>
                    <div><label class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">Ekstra
                            (Aylık)</label><input type="number" id="extraVat" placeholder="-"
                            class="w-full input-dark p-2.5 rounded-xl text-center font-bold text-sm"
                            onkeyup="saveExpenses(); calculateProfit()"></div>
                </div>
            </div>
            <div class="bg-blue-900/5 border border-blue-500/10 rounded-2xl p-4">
                <label
                    class="text-[9px] text-blue-400 font-bold uppercase mb-3 block tracking-wider flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Sadece KDV'ler (KDV'den Düşer)
                </label>
                <div class="grid grid-cols-2 gap-4">
                    <div><label class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">Diğer KDV
                            1</label><input type="number" id="extraVatOnly1" placeholder="-"
                            class="w-full input-dark p-2.5 rounded-xl text-center font-bold text-sm"
                            onkeyup="saveExpenses(); calculateProfit()"></div>
                    <div><label class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">Diğer KDV
                            2</label><input type="number" id="extraVatOnly2" placeholder="-"
                            class="w-full input-dark p-2.5 rounded-xl text-center font-bold text-sm"
                            onkeyup="saveExpenses(); calculateProfit()"></div>
                </div>
                <div class="mt-3"><label
                        class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">Açıklama</label><input type="text"
                        id="vatDescription" placeholder="Örn: Ofis malzemesi KDV'si"
                        class="w-full input-dark p-2.5 rounded-xl text-sm" onchange="saveExpenses()"></div>
            </div>
            <div class="bg-red-900/5 border border-red-500/10 rounded-2xl p-4">
                <label
                    class="text-[9px] text-red-400 font-bold uppercase mb-3 block tracking-wider flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-red-500"></div> Net Giderler (KDV'den Düşülmez)
                </label>
                <div class="grid grid-cols-3 gap-3">
                    <div><label class="text-[9px] text-gray-500 block mb-1.5 font-bold text-center">Bakım
                            (Ay)</label><input type="number" id="maintCost"
                            class="w-full input-dark p-2 rounded-xl text-center text-xs"
                            onkeyup="saveExpenses(); calculateProfit()"></div>
                    <div><label class="text-[9px] text-gray-500 block mb-1.5 font-bold text-center">Muhasebe
                            (Ay)</label><input type="number" id="accCost"
                            class="w-full input-dark p-2 rounded-xl text-center text-xs"
                            onkeyup="saveExpenses(); calculateProfit()"></div>
                    <div><label class="text-[9px] text-gray-500 block mb-1.5 font-bold text-center">Diğer</label><input
                            type="number" id="otherCost" placeholder="-"
                            class="w-full input-dark p-2 rounded-xl text-center text-xs"
                            onkeyup="saveExpenses(); calculateProfit()"></div>
                </div>
            </div>
        </div>

        <div id="finalResultCard"
            class="bg-black rounded-3xl p-6 shadow-2xl border border-gray-800 relative overflow-hidden group mt-4">
            <div
                class="absolute top-0 right-0 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-600/30 transition-all duration-700">
            </div>
            <div class="relative z-10">
                <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <i class="fa-solid fa-flag-checkered"></i> Ay Sonu Net Kalan
                </h3>
                <div class="space-y-3 text-xs font-medium">
                    <div class="flex justify-between text-gray-300 pb-2 border-b border-white/5"><span>Toplam Brüt
                            Ciro:</span><span class="font-bold text-white">₺<span id="resGross">0</span></span>
                    </div>
                    <div class="flex justify-between text-red-400"><span>Toplam Giderler:</span><span>-₺<span
                                id="resExpenses">0</span></span></div>
                    <div class="flex justify-between text-blue-400"><span>KDV'den Düşülenler:</span><span>-₺<span
                                id="resVatDeductions">0</span></span></div>
                    <div class="flex justify-between text-orange-400"><span>Ödenecek KDV:</span><span>-₺<span
                                id="resVat">0</span></span></div>
                </div>
                <div class="mt-6 text-center">
                    <p class="text-[10px] text-gray-500 mb-1 font-bold uppercase tracking-wide">Cebine Girecek Net
                        Para</p>
                    <span class="text-5xl font-black text-emerald-400 tracking-tighter drop-shadow-lg">₺<span
                            id="resNet">0</span></span>
                </div>
            </div>
        </div>
    </div>

    <!-- SEKME 2: HIZ (PERF) -->
    <div id="tabPerf" class="tab-content space-y-6">
        <div class="bg-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/20">
            <div class="absolute top-0 right-0 w-full h-full opacity-10"><i
                    class="fa-solid fa-gauge-high text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12"></i>
            </div>
            <div class="flex justify-between items-start relative z-10">
                <div>
                    <h2 class="text-2xl font-bold text-white">Hız Analizi</h2>
                    <p class="text-indigo-200 text-sm mt-1 font-medium">Anlık net performans.</p>
                </div>
                <button onclick="resetAllCounters()"
                    class="text-[10px] bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg font-bold"><i
                        class="fa-solid fa-rotate-left mr-1"></i>SIFIRLA</button>
            </div>
        </div>

        <div class="perf-counter-card rounded-3xl p-5 border border-slate-700/50">
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="bg-slate-900/80 rounded-2xl p-4 border border-slate-700">
                    <div class="counter-type mb-2">TEKLİ</div>
                    <div class="flex items-center justify-between"><button onclick="changePacketCount('single', -1)"
                            class="counter-btn bg-red-500/20 text-red-400"><i class="fa-solid fa-minus"></i></button>
                        <div class="counter-value text-white" id="counterSingle">0</div><button
                            onclick="changePacketCount('single', 1)"
                            class="counter-btn bg-green-500/20 text-green-400"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <div class="bg-slate-900/80 rounded-2xl p-4 border border-slate-700">
                    <div class="counter-type mb-2">ÇOKLU</div>
                    <div class="flex items-center justify-between"><button onclick="changePacketCount('multi', -1)"
                            class="counter-btn bg-red-500/20 text-red-400"><i class="fa-solid fa-minus"></i></button>
                        <div class="counter-value text-white" id="counterMulti">0</div><button
                            onclick="changePacketCount('multi', 1)"
                            class="counter-btn bg-green-500/20 text-green-400"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
            <div class="text-center text-[11px] text-gray-400 font-bold">TOPLAM: <span id="totalPacketsCounter"
                    class="text-white text-lg ml-1">0</span></div>
        </div>

        <div class="earning-card rounded-3xl p-5 mt-4">
            <h3 class="text-xs font-bold text-gray-400 uppercase mb-4 flex items-center gap-2"><i
                    class="fa-solid fa-coins text-yellow-500"></i> Anlık Kazanç Tablosu (KDV Dahil)</h3>
            <div class="space-y-2">
                <div class="earning-item flex justify-between items-center">
                    <div>
                        <div class="earning-label">Tekli Paket (110₺)</div>
                        <div class="text-[11px] text-gray-400">Adet: <span id="singleCountDisplay">0</span></div>
                    </div>
                    <div class="earning-value" id="earnSingle">0 ₺</div>
                </div>
                <div class="earning-item flex justify-between items-center">
                    <div>
                        <div class="earning-label">Çoklu Paket (40₺)</div>
                        <div class="text-[11px] text-gray-400">Adet: <span id="multiCountDisplay">0</span></div>
                    </div>
                    <div class="earning-value" id="earnMulti">0 ₺</div>
                </div>
                <div class="earning-item bg-blue-500/10 border-l-2 border-blue-500">
                    <div class="flex justify-between items-center mb-1">
                        <div class="earning-label text-blue-400">Paket Başı Ort. KM</div>
                        <div class="text-[9px] text-gray-400 font-bold">Tablo: <span id="kmUnitPriceDisp"
                                class="text-white">0</span> ₺/pkt</div>
                    </div>
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2 flex-1"><input type="number" id="avgKmInput"
                                class="w-full bg-slate-900 border border-slate-600 rounded-lg text-center p-2 text-white font-bold"
                                placeholder="Ort. KM" step="0.1" onkeyup="updateEarningCalculation()"><span
                                class="text-xs font-bold text-gray-400">km</span></div>
                        <div class="earning-value text-blue-400" id="perfKmEarnings">0 ₺</div>
                    </div>
                </div>
                <div
                    class="earning-item flex justify-between items-center bg-yellow-500/10 border-l-2 border-yellow-500">
                    <div>
                        <div class="earning-label text-yellow-500">Tier Bonusu</div>
                        <div class="text-[10px] text-gray-400"><span id="speedDayLabel">Bugün</span></div>
                    </div>
                    <div class="earning-value text-yellow-400" id="earnBonus">0 ₺</div>
                </div>
                <div class="earning-item bg-blue-900/20 rounded-lg flex justify-between items-center">
                    <div>
                        <div class="earning-label text-blue-400">Toplam Gelir (KDV Dahil)</div>
                    </div>
                    <div class="text-xl font-black text-white" id="totalEarning">0 ₺</div>
                </div>

                <div class="vat-calculation-item vat-income">
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-[10px] text-blue-400 font-bold">Gelir KDV (%20)</div>
                            <div class="text-[9px] text-gray-400">KDV Dahil - KDV Hariç</div>
                        </div>
                        <div class="text-right">
                            <div class="text-sm font-bold text-blue-300" id="vatOnIncome">0 ₺</div>
                            <div class="text-[10px] text-gray-300" id="incomeWithoutVat">KDV Hariç: 0 ₺</div>
                        </div>
                    </div>
                </div>

                <div class="earning-item flex justify-between items-center">
                    <div>
                        <div class="earning-label text-red-500">Şu ana kadar yakıt</div>
                        <div class="text-[11px] text-gray-400">(KDV Dahil)</div>
                    </div>
                    <div class="flex items-center justify-end gap-1"><input type="number" id="perfFuelInput"
                            class="w-20 bg-transparent text-right text-lg font-bold text-red-400 outline-none border-b border-red-500/30"
                            placeholder="0" onkeyup="updateEarningCalculation()"><span
                            class="text-red-400 font-bold text-lg">₺</span></div>
                </div>

                <div class="vat-calculation-item vat-fuel">
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-[10px] text-red-400 font-bold">Yakıt KDV (%20)</div>
                            <div class="text-[9px] text-gray-400">KDV Dahil - KDV Hariç</div>
                        </div>
                        <div class="text-right">
                            <div class="text-sm font-bold text-red-300" id="vatOnFuel">0 ₺</div>
                            <div class="text-[10px] text-gray-300" id="fuelWithoutVat">KDV Hariç: 0 ₺</div>
                        </div>
                    </div>
                </div>

                <div class="vat-calculation-item vat-net">
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-[10px] text-emerald-400 font-bold">Net Kazanç (KDV Hariç)</div>
                            <div class="text-[9px] text-gray-400">Gelir(KDV Hariç) - Yakıt(KDV Hariç)</div>
                        </div>
                        <div class="text-right">
                            <div class="text-lg font-black text-emerald-300" id="netEarningAfterVat">0 ₺</div>
                            <div class="text-[10px] text-gray-300">KDV'den sonra eline geçer</div>
                        </div>
                    </div>
                </div>

                <div class="earning-item net-earning rounded-lg p-4 flex justify-between items-center mt-3">
                    <div>
                        <div class="earning-label text-emerald-400">Net Kazanç (KDV Dahil)</div>
                        <div class="text-[11px] text-emerald-300">Gelir - Benzin (KDV Dahil)</div>
                    </div>
                    <div class="text-2xl font-black text-white" id="totalNetEarning">0 ₺</div>
                </div>
            </div>
        </div>

        <div class="card p-6 space-y-6 bg-slate-800/50">
            <div class="grid grid-cols-2 gap-5">
                <div class="relative"><label
                        class="block text-[10px] font-bold text-gray-500 uppercase mb-2 ml-1">Başlangıç</label>
                    <div
                        class="flex flex-col bg-slate-900 rounded-2xl border border-white/5 p-1.5 group focus-within:border-indigo-500/50 transition-colors">
                        <input type="time" id="perfStartTime"
                            class="w-full bg-transparent p-2 text-white outline-none text-xl font-bold text-center"
                            onchange="calculatePerf(); savePerfMemoryAuto()"><button
                            onclick="setPerfTime('perfStartTime')"
                            class="text-[10px] text-indigo-400 font-bold uppercase py-1.5 hover:text-white hover:bg-white/5 rounded-lg transition-all">Şu
                            An</button>
                    </div>
                </div>
                <div class="relative"><label class="block text-[10px] font-bold text-gray-500 uppercase mb-2 ml-1">Bitiş
                        (Şimdi)</label>
                    <div
                        class="flex flex-col bg-slate-900 rounded-2xl border border-white/5 p-1.5 group focus-within:border-indigo-500/50 transition-colors">
                        <input type="time" id="perfEndTime"
                            class="w-full bg-transparent p-2 text-white outline-none text-xl font-bold text-center"
                            onchange="calculatePerf(); savePerfMemoryAuto()"><button
                            onclick="setPerfTime('perfEndTime')"
                            class="text-[10px] text-indigo-400 font-bold uppercase py-1.5 hover:text-white hover:bg-white/5 rounded-lg transition-all">Şu
                            An</button>
                    </div>
                </div>
            </div>
            <div class="relative"><label class="block text-[10px] font-bold text-gray-500 uppercase mb-2 ml-1">Bu
                    sürede kaç paket attın?</label>
                <div
                    class="flex items-center bg-slate-900 rounded-2xl border border-white/5 p-2 focus-within:border-indigo-500/50 transition-colors">
                    <div class="w-12 h-12 flex items-center justify-center text-indigo-500 ml-1 bg-white/5 rounded-xl">
                        <i class="fa-solid fa-box-open text-xl"></i>
                    </div><input type="number" id="perfPacketCount" placeholder="Örn: 24"
                        class="w-full bg-transparent p-3 text-white outline-none text-3xl font-black text-center placeholder-gray-700"
                        onkeyup="calculatePerf(); savePerfMemoryAuto()" onchange="savePerfMemoryAuto()">
                </div>
                <div class="text-[10px] text-gray-500 mt-1 ml-1">Yukarıdaki sayaçtan gelen toplam: <span
                        id="counterTotalHint" class="text-indigo-400 font-bold">0</span> paket</div>
            </div>
            <div id="perfResultArea" class="hidden space-y-4 animate-fade-in">
                <div
                    class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden border border-white/10">
                    <p class="text-indigo-100 text-[10px] font-bold uppercase tracking-widest mb-1">Ortalama Hızın
                    </p>
                    <div class="flex items-baseline gap-2"><span id="perfAvgSpeed"
                            class="text-6xl font-black tracking-tighter">0</span><span
                            class="text-sm font-medium opacity-80">pkt / saat</span></div>
                    <div
                        class="mt-4 pt-3 border-t border-white/10 inline-flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg">
                        <i class="fa-solid fa-bolt text-yellow-400 text-xs"></i><span class="text-xs font-bold"><span
                                id="perfMinsPerPacket">0</span> dakikada 1 paket</span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-slate-800 rounded-2xl p-4 border border-white/5 text-center">
                        <p class="text-gray-500 text-[9px] uppercase font-bold mb-1">Geçen Süre</p>
                        <p id="perfTotalTime" class="text-white font-bold text-xl">0s</p>
                    </div>
                    <div class="bg-slate-800 rounded-2xl p-4 border border-white/5 text-center">
                        <p class="text-gray-500 text-[9px] uppercase font-bold mb-1">Toplam Paket</p>
                        <p id="perfTotalPackets" class="text-white font-bold text-xl">-</p>
                    </div>
                </div>
            </div>
            <button onclick="resetPerfForm()"
                class="w-full py-4 text-gray-500 text-xs font-bold hover:text-white transition-colors flex items-center justify-center gap-2 bg-slate-800/50 rounded-2xl border border-white/5 hover:bg-gray-800 hover:border-gray-500/30"><i
                    class="fa-solid fa-rotate-left"></i> FORMU SIFIRLA</button>
        </div>
    </div>

    <!-- SEKME 3: AJANDA (CALENDAR) & WEATHER -->
    <div id="tabCalendar" class="tab-content space-y-4">
        <div class="bg-slate-900 rounded-3xl p-5 text-white shadow-xl relative overflow-hidden border border-slate-700">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xs font-bold flex items-center gap-1.5"><i
                            class="fa-solid fa-location-dot text-indigo-400"></i> <span id="weatherLocation">Konya
                            Selçuklu</span></h3>
                    <p class="text-[10px] text-gray-300 mt-0.5" id="weatherDesc">Detaylı Hava Durumu</p>
                </div>
                <div class="text-right"><span class="text-3xl font-black tracking-tight" id="currentTemp">--°</span>
                    <p class="text-[10px] text-gray-300 mt-0.5" id="currentWeatherDesc">--</p>
                </div>
            </div>
            <div class="mb-6">
                <h4 class="text-xs font-bold mb-3 flex items-center gap-2"><i
                        class="fa-solid fa-clock text-indigo-400"></i> Önümüzdeki Saatler</h4>
                <div id="hourlyForecast" class="flex space-x-4 overflow-x-auto pb-2 no-scrollbar">
                    <div class="text-center shrink-0">
                        <div class="bg-slate-800 rounded-xl p-3 min-w-[70px]">
                            <div class="text-xs font-bold text-gray-300">--:--</div><i
                                class="fa-solid fa-sun text-2xl text-yellow-400 my-2"></i>
                            <div class="text-sm font-bold text-white">--°</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative z-10 border-t border-slate-800 pt-4">
                <h4 class="text-xs font-bold mb-2 flex items-center gap-2"><i
                        class="fa-solid fa-calendar-days text-indigo-400"></i> 7 Günlük Tahmin</h4>
                <div id="weeklyForecast" class="space-y-2 max-h-[180px] overflow-y-auto no-scrollbar"><span
                        class="text-xs text-gray-400">Haftalık veriler yükleniyor...</span></div>
            </div>
            <div class="text-center mt-4 pt-3 border-t border-slate-800"><button onclick="openGoogleWeather()"
                    class="text-[10px] text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto"><i
                        class="fa-solid fa-external-link-alt text-xs"></i><span>Detaylı Google Hava
                        Durumu</span></button></div>
        </div>

        <div class="payment-day-card rounded-3xl p-5">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h3 class="text-sm font-bold text-white flex items-center gap-2"><i
                            class="fa-solid fa-calendar-check text-purple-400"></i> Ödeme Günü (Çarşamba)</h3>
                    <p class="text-[10px] text-gray-300 mt-1">Bir sonraki ödeme gününde alacağın tutar</p>
                </div>
                <div class="text-right">
                    <div class="text-3xl font-black text-white" id="nextPaymentAmount">0 ₺</div>
                    <div class="text-[10px] text-purple-300" id="nextPaymentDate">--.--.----</div>
                </div>
            </div>
            <div class="space-y-3">
                <div class="flex justify-between items-center text-sm"><span class="text-gray-300">Toplam
                        Birikmiş:</span><span class="font-bold text-white" id="accumulatedTotal">0 ₺</span></div>
                <div class="flex justify-between items-center text-sm"><span class="text-gray-300">Ödeme
                        Günü:</span><span class="font-bold text-purple-400" id="paymentDayInfo">Her Çarşamba</span>
                </div>
            </div>
            <button onclick="processPayment()"
                class="w-full py-3 mt-4 text-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"><i
                    class="fa-solid fa-money-bill-wave"></i> ÖDEMEYİ TAMAMLA (BANKAYA EKLE)</button>
        </div>

        <div class="flex justify-between items-center mb-3 bg-slate-800/50 p-2 rounded-xl border border-white/5">
            <button onclick="goToToday()"
                class="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 hover:bg-indigo-500 hover:text-white transition-colors">BUGÜN</button>
            <div class="flex items-center gap-2"><button onclick="changeMonth(-1)" class="nav-cal-btn"><i
                        class="fa-solid fa-chevron-left"></i></button>
                <h2 class="text-lg font-bold text-white flex flex-col items-center leading-none"><span
                        id="currentMonthLabel">...</span><span id="currentYearLabel"
                        class="text-[10px] text-gray-400 font-normal mt-1">...</span></h2><button
                    onclick="changeMonth(1)" class="nav-cal-btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 font-bold mb-2">
            <div>Pzt</div>
            <div>Sal</div>
            <div>Çar</div>
            <div>Per</div>
            <div>Cum</div>
            <div>Cmt</div>
            <div>Paz</div>
        </div>
        <div id="calendarGrid" class="grid grid-cols-7 gap-1.5"></div>

        <div class="bg-slate-900 border border-slate-700 rounded-3xl p-5 mt-4">
            <h3 class="text-sm font-bold text-white flex items-center gap-2"><i
                    class="fa-solid fa-clipboard-list text-indigo-500"></i> Aktivite Panosu</h3>
            <div id="todayActivities" class="mb-4"></div>
            <div class="border-t border-slate-800 pt-4">
                <h4 class="text-[10px] font-bold text-gray-500 uppercase mb-2">Yaklaşanlar</h4>
                <div id="upcomingActivities" class="space-y-2">
                    <div class="text-center text-[10px] text-gray-600 py-2">Yaklaşan kayıt yok.</div>
                </div>
            </div>
        </div>

        <!-- Restored: Selected Month Summary -->
        <div class="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 mt-4">
            <h3 class="text-xs font-bold text-gray-400 uppercase border-b border-gray-700 pb-2 mb-2">Seçili Ay Özeti
            </h3>
            <div class="space-y-2 text-xs">
                <div class="flex justify-between text-gray-300"><span>Sabit Gelirler:</span><span
                        class="font-bold text-green-400" id="fixedIncomeSummary">0 ₺</span></div>
                <div class="flex justify-between text-gray-300"><span>Ekstra Gelirler:</span><span
                        class="font-bold text-emerald-400" id="monthlyExtraIncome">+0 ₺</span></div>
                <div class="flex justify-between text-gray-300"><span>Ekstra Giderler:</span><span
                        class="font-bold text-red-400" id="monthlyExpenseSummary">-0 ₺</span></div>
                <div class="flex justify-between text-white font-bold pt-2 border-t border-gray-700">
                    <span>NET:</span><span id="monthlyNetSummary">0 ₺</span>
                </div>
            </div>
        </div>

        <!-- Restored: Financial Management Module -->
        <div class="simulation-card mt-6 p-6 space-y-6">
            <div class="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                    <h3 class="text-sm font-bold text-white flex items-center gap-2"><i
                            class="fa-solid fa-coins text-yellow-500"></i> Finans Yönetimi</h3>
                    <p class="text-[10px] text-gray-400 mt-1">Gelir, gider ve bakiye takibi</p>
                </div>
                <div class="w-10 h-10 bg-yellow-600/20 rounded-xl flex items-center justify-center"><i
                        class="fa-solid fa-wallet text-yellow-400"></i></div>
            </div>
            <div class="space-y-4">
                <h4 class="text-xs font-bold text-gray-400 uppercase flex items-center gap-2"><i
                        class="fa-solid fa-bank text-emerald-500"></i> Mevcut Durum</h4>
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-emerald-900/20 rounded-xl p-3 border border-emerald-500/20">
                        <label class="text-[10px] text-emerald-400 block mb-2 font-bold">Banka Hesabı</label>
                        <div class="relative"><span
                                class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">₺</span><input
                                type="number" id="bankAccount" class="w-full input-dark p-2 pl-6 rounded-lg text-sm"
                                placeholder="0" onchange="saveFinancialData()"></div>
                    </div>
                    <div class="bg-red-900/20 rounded-xl p-3 border border-red-500/20">
                        <label class="text-[10px] text-red-400 block mb-2 font-bold">Kredi Kartı Borcu</label>
                        <div class="relative"><span
                                class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">₺</span><input
                                type="number" id="creditDebt" class="w-full input-dark p-2 pl-6 rounded-lg text-sm"
                                placeholder="0" onchange="saveFinancialData()"></div>
                    </div>
                </div>
                <div class="flex justify-between items-center text-sm"><span class="text-gray-300">Net
                        Bakiye:</span><span id="netBalance" class="text-lg font-bold text-white">0 ₺</span></div>
            </div>

            <!-- Restored: Recurring Transactions Module -->
            <div class="space-y-4">
                <h4 class="text-xs font-bold text-gray-400 uppercase flex items-center gap-2"><i
                        class="fa-solid fa-repeat text-indigo-500"></i> Tekrarlayan İşlemler</h4>
                <div class="bg-slate-800/50 rounded-xl p-3 border border-white/5">
                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div><label class="text-[10px] text-gray-500 block mb-1.5 font-bold">Ayın Günü</label><input
                                type="number" min="1" max="31" id="repeatDay"
                                class="w-full input-dark p-2 rounded-lg text-sm text-center" placeholder="1"></div>
                        <div><label class="text-[10px] text-gray-500 block mb-1.5 font-bold">Tür</label><select
                                id="repeatType" class="w-full input-dark p-2 rounded-lg text-sm">
                                <option value="income">Gelir (+)</option>
                                <option value="expense">Gider (-)</option>
                                <option value="activity">Aktivite</option>
                            </select></div>
                    </div>
                    <div class="mb-3"><label
                            class="text-[10px] text-gray-500 block mb-1.5 font-bold">Açıklama</label><input type="text"
                            id="repeatDesc" class="w-full input-dark p-2 rounded-lg text-sm" placeholder="Örn: Kira">
                    </div>
                    <div class="mb-4"><label class="text-[10px] text-gray-500 block mb-1.5 font-bold">Miktar
                            (₺)</label><input type="number" id="repeatAmount"
                            class="w-full input-dark p-2 rounded-lg text-sm" placeholder="0"></div>
                    <button onclick="addRepeatTransaction()"
                        class="w-full py-2.5 text-xs bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"><i
                            class="fa-solid fa-plus"></i> Ekle</button>
                </div>
                <div id="repeatTransactionsList" class="space-y-2 max-h-40 overflow-y-auto pr-1"></div>
            </div>

            <!-- Restored: Future Calculation Module (Improved UI) -->
            <div class="space-y-4">
                <h4 class="text-xs font-bold text-gray-400 uppercase flex items-center gap-2"><i
                        class="fa-solid fa-crystal-ball text-purple-500"></i> Gelecek Hesaplama</h4>
                <div class="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <div class="flex justify-between items-center mb-4">
                        <div>
                            <div class="text-xs font-bold text-white">Kaç Gün Sonrası?</div>
                            <div class="text-[10px] text-gray-400">Tahmini bakiye</div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="changeSimulationDays(-5)"
                                class="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600"><i
                                    class="fa-solid fa-minus"></i></button>
                            <span id="simDays" class="text-lg font-bold text-white w-10 text-center">10</span>
                            <button onclick="changeSimulationDays(5)"
                                class="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600"><i
                                    class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <button onclick="calculateFutureBalance()"
                        class="w-full py-3 text-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"><i
                            class="fa-solid fa-bolt"></i> HESAPLA</button>
                </div>
                <div id="futureResult"
                    class="hidden animate-fade-in bg-slate-800 rounded-2xl p-5 border border-emerald-500/20 mt-4">
                    <div class="text-center mb-4">
                        <div id="resultEmoji" class="text-4xl mb-2">📊</div>
                        <h3 id="resultTitle" class="text-lg font-bold text-white">Sonuç</h3>
                    </div>
                    <div class="space-y-2 text-sm">
                        <div class="flex justify-between text-gray-300"><span>Şu An:</span><span
                                class="font-bold text-white" id="currentBalanceResult">0 ₺</span></div>
                        <div class="flex justify-between text-emerald-400"><span>Gelirler:</span><span class="font-bold"
                                id="futureIncomesResult">+0 ₺</span></div>
                        <div class="flex justify-between text-red-400"><span>Giderler:</span><span class="font-bold"
                                id="futureExpensesResult">-0 ₺</span></div>
                        <div class="pt-2 border-t border-white/10 flex justify-between font-bold text-white text-lg">
                            <span>Tahmini:</span><span id="finalBalanceResult" class="text-emerald-400">0 ₺</span>
                        </div>
                    </div>
                    <div class="text-center mt-3 pt-3 border-t border-white/5"><button
                            onclick="document.getElementById('futureResult').classList.add('hidden')"
                            class="text-[10px] text-gray-500 hover:text-white"><i class="fa-solid fa-rotate-left"></i>
                            Kapat</button></div>
                </div>
            </div>
        </div>

        <!-- Transaction History -->
        <div class="simulation-card mt-6 p-6 space-y-6">
            <div class="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                    <h3 class="text-sm font-bold text-white flex items-center gap-2"><i
                            class="fa-solid fa-clock-rotate-left text-blue-500"></i> Son İşlemler (Son 5)</h3>
                    <p class="text-[10px] text-gray-400 mt-1">Gelir, gider ve ödeme geçmişi</p>
                </div>
                <div class="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center"><i
                        class="fa-solid fa-history text-blue-400"></i></div>
            </div>
            <div id="transactionHistory" class="space-y-3 max-h-60 overflow-y-auto pr-1">
                <div class="text-center text-[10px] text-gray-500 italic py-4">Henüz işlem kaydı bulunmuyor.</div>
            </div>
            <div class="text-center pt-3 border-t border-white/5"><button onclick="clearTransactionHistory()"
                    class="text-[10px] text-gray-500 hover:text-red-400 transition-colors flex items-center justify-center gap-1 mx-auto"><i
                        class="fa-solid fa-trash-can"></i> İşlem Geçmişini Temizle</button></div>
        </div>
    </div>

    <!-- SEKME 4: HAZIRLIK LİSTESİ (CHECKLIST & GARAJ) -->
    <div id="tabChecklist" class="tab-content space-y-4">
        <div class="flex bg-slate-900 p-1 rounded-2xl border border-white/5 mb-2"><button
                onclick="switchChecklist('start')" id="btnCheckStart" class="toggle-btn active"><i
                    class="fa-solid fa-sun mr-1 text-orange-400"></i> İşe Başlarken</button><button
                onclick="switchChecklist('end')" id="btnCheckEnd" class="toggle-btn inactive"><i
                    class="fa-solid fa-moon mr-1 text-indigo-400"></i> İşten Dönerken</button></div>
        <div id="checkHeaderCard"
            class="bg-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/20 transition-colors duration-500">
            <div class="absolute top-0 right-0 w-full h-full opacity-10"><i id="checkHeaderIcon"
                    class="fa-solid fa-backpack text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12"></i>
            </div>
            <h2 id="checkHeaderTitle" class="text-2xl font-bold text-white relative z-10">Çanta Hazırlığı</h2>
            <p id="checkHeaderSub" class="text-indigo-100 text-sm mt-1 relative z-10 font-medium">Unutma: Eksik
                malzeme = Zaman kaybı.</p>
        </div>
        <div class="card p-5 bg-slate-800/50">
            <div class="flex gap-2 mb-4"><input type="text" id="newCheckItem" placeholder="Eşya ekle (Örn: Powerbank)"
                    class="w-full input-dark p-3 rounded-xl text-sm border-white/10 focus:border-indigo-500"><button
                    onclick="addCheckItem()"
                    class="w-12 bg-white/10 text-white rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"><i
                        class="fa-solid fa-plus"></i></button></div>
            <div id="checklistContainer" class="space-y-2"></div>
            <div id="emptyListMsg" class="text-center text-xs text-gray-500 py-4 hidden">Listen boş. Yukarıdan
                ekleme yap.</div>
        </div>
        <div class="bg-slate-900 border border-orange-500/20 rounded-3xl p-5 mt-4 relative overflow-hidden">
            <div class="absolute -right-5 -top-5 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-sm font-bold text-white flex items-center gap-2 z-10"><i
                        class="fa-solid fa-screwdriver-wrench text-orange-500"></i> Motor Bakım</h3>
                <div
                    class="text-[10px] text-orange-300 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20 z-10">
                    Yağ Değişimi</div>
            </div>
            <div class="space-y-3 relative z-10">
                <div class="flex gap-2 text-[10px]">
                    <div class="flex-1"><label class="text-gray-500 block mb-1">Şu Anki KM</label><input type="number"
                            id="currentKm" class="w-full input-dark p-2 rounded-lg text-center font-bold"
                            onfocus="if(this.value=='0') this.value=''" onchange="calculateMaintenance()"></div>
                    <div class="flex-1"><label class="text-gray-500 block mb-1">Son Bakım KM</label><input type="number"
                            id="lastOilKm" class="w-full input-dark p-2 rounded-lg text-center font-bold"
                            onfocus="if(this.value=='0') this.value=''" onchange="calculateMaintenance()"></div>
                    <div class="flex-1"><label class="text-gray-500 block mb-1">Aralık</label><input type="number"
                            id="oilInterval" value="2000" class="w-full input-dark p-2 rounded-lg text-center font-bold"
                            onfocus="if(this.value=='0') this.value=''" onchange="calculateMaintenance()"></div>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-3 mt-2 overflow-hidden border border-white/5">
                    <div id="oilProgressBar" class="bg-green-500 h-full transition-all duration-500" style="width: 0%">
                    </div>
                </div>
                <div class="flex justify-between text-[10px] font-bold"><span id="oilStatusText"
                        class="text-white">Durum Hesaplanıyor...</span><span id="oilPercentText"
                        class="text-gray-400">0%</span></div>
            </div>
        </div>

        <div class="bg-slate-900 border border-cyan-500/20 rounded-3xl p-5 mt-4 relative overflow-hidden">
            <div class="absolute -right-5 -top-5 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-sm font-bold text-white flex items-center gap-2 z-10"><i
                        class="fa-solid fa-gas-pump text-cyan-400"></i> Yakıt Takip</h3><button
                    onclick="clearFuelForm()"
                    class="text-[10px] text-gray-500 hover:text-white transition-colors z-10"><i
                        class="fa-solid fa-eraser"></i> Formu Temizle</button>
            </div>
            <div class="space-y-3 relative z-10">
                <div class="grid grid-cols-2 gap-3">
                    <div><label class="text-[10px] text-cyan-400 font-bold block mb-1">Litre Fiyatı</label>
                        <div class="relative"><input type="number" id="calcFuelUnitPrice"
                                class="w-full input-dark p-2.5 rounded-xl font-bold text-white text-center border-cyan-500/30 focus:border-cyan-500 transition-colors"
                                placeholder="42.50" onkeyup="calculateFuelConsumption()"
                                oninput="saveFuelUnitData()"><span
                                class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-500">₺</span>
                        </div>
                    </div>
                    <div><label class="text-[10px] text-green-400 font-bold block mb-1">Ödenen Tutar</label>
                        <div class="relative"><input type="number" id="calcFuelPrice"
                                class="w-full input-dark p-2.5 rounded-xl font-bold text-white text-center border-green-500/30 focus:border-green-500 transition-colors"
                                placeholder="200" onkeyup="calculateFuelConsumption()"><span
                                class="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-500">₺</span>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div><label class="text-[10px] text-gray-500 font-bold block mb-1">Yapılan KM</label><input
                            type="number" id="calcFuelKm"
                            class="w-full input-dark p-2.5 rounded-xl font-bold text-white text-center"
                            placeholder="150" onkeyup="calculateFuelConsumption()"></div>
                    <div
                        class="bg-slate-800/50 rounded-xl border border-white/5 flex flex-col items-center justify-center">
                        <span class="text-[9px] text-gray-500">Alınan Yakıt</span><span
                            class="text-lg font-bold text-gray-300"><span id="calcFuelLtDisplay">0.0</span>
                            Lt</span><input type="hidden" id="calcFuelLt">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mt-2">
                    <div class="bg-slate-800 rounded-xl p-2 text-center border border-white/5">
                        <div class="text-[9px] text-gray-500 font-bold uppercase">KM Başına</div>
                        <div class="text-lg font-black text-white mt-1">₺<span id="resFuelTl">0.00</span></div>
                    </div>
                    <div class="bg-slate-800 rounded-xl p-2 text-center border border-white/5">
                        <div class="text-[9px] text-gray-500 font-bold uppercase">100 KM'de</div>
                        <div class="text-lg font-black text-cyan-400 mt-1"><span id="resFuelLt100">0.0</span> Lt
                        </div>
                    </div>
                </div>
                <button onclick="addFuelEntry()"
                    class="w-full py-2.5 mt-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold text-xs transition-all shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2"><i
                        class="fa-solid fa-plus"></i> LİSTEYE EKLE</button>
                <div class="mt-4 pt-4 border-t border-white/10">
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="text-[10px] font-bold text-gray-400 uppercase">Son 5 Yakıt Alımı</h4><button
                            onclick="clearFuelHistory()"
                            class="text-[9px] text-red-400 hover:text-red-300">Temizle</button>
                    </div>
                    <div id="fuelHistoryList" class="space-y-2">
                        <div class="text-center text-[10px] text-gray-600 py-2">Kayıt yok.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ALT NAV -->
<div class="fixed bottom-6 inset-x-0 flex justify-center z-50 pointer-events-none">
    <div
        class="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl shadow-black/50 pointer-events-auto flex items-center gap-1">
        <button onclick="switchTab('tabProfit', this)"
            class="nav-item active px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-xs font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"><i
                class="fa-solid fa-calculator text-sm"></i><span>Gelir</span></button>
        <button onclick="switchTab('tabPerf', this)"
            class="nav-item px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5"><i
                class="fa-solid fa-stopwatch text-sm"></i><span>Hız</span></button>
        <button onclick="switchTab('tabCalendar', this)"
            class="nav-item px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5"><i
                class="fa-solid fa-calendar-days text-sm"></i><span>Ajanda</span></button>
        <button onclick="switchTab('tabChecklist', this)"
            class="nav-item px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-300 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5"><i
                class="fa-solid fa-clipboard-check text-sm"></i><span>Çanta</span></button>
    </div>
</div>`;function Bu(t,e,n){let r=0,i=0,s=0;for(let o=0;o<e.length;o++){const a=e[o];if(t>=a.min&&(r=a[n]),t<a.min&&s===0){s=a.min,i=a[n];break}}return{current:r,nextTarget:s,nextValue:i}}function Ko(t,e,n){let r=0;for(let i=0;i<e.length;i++){const s=e[i];t>=s.min&&(r=s[n])}return r}function ov(t){return!t||t===0?0:t<=3?5:t<=5?6:t<=7?7:8}const Wx="modulepreload",jx=function(t,e){return new URL(t,e).href},Sp={},nf=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=jx(c,r),c in Sp)return;Sp[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!r)for(let y=o.length-1;y>=0;y--){const v=o[y];if(v.href===c&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Wx,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((y,v)=>{p.addEventListener("load",y),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},$x=()=>{};var Tp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+av.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Kx;const d=s<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const y=c<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cv=function(t){const e=lv(t);return rf.encodeByteArray(e,!0)},Va=function(t){return cv(t).replace(/\./g,"")},za=function(t){try{return rf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){return uv(void 0,t)}function uv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qx(n)||(t[n]=uv(t[n],e[n]));return t}function qx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=()=>Qx().__FIREBASE_DEFAULTS__,Xx=()=>{if(typeof process>"u"||typeof Tp>"u")return;const t=Tp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&za(t[1]);return e&&JSON.parse(e)},sf=()=>{try{return $x()||Jx()||Xx()||Zx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dv=t=>{var e,n;return(n=(e=sf())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},eI=t=>{const e=dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fv=()=>{var t;return(t=sf())==null?void 0:t.config},hv=t=>{var e;return(e=sf())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Va(JSON.stringify(n)),Va(JSON.stringify(o)),""].join(".")}const ws={};function nI(){const t={prod:[],emulator:[]};for(const e of Object.keys(ws))ws[e]?t.emulator.push(e):t.prod.push(e);return t}function rI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Cp=!1;function mv(t,e){if(typeof window>"u"||typeof document>"u"||!Oi(window.location.host)||ws[t]===e||ws[t]||Cp)return;ws[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=nI().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,p){d.setAttribute("width","24"),d.setAttribute("id",p),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Cp=!0,o()},d}function u(d,p){d.setAttribute("id",p),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=rI(r),p=n("text"),y=document.getElementById(p)||document.createElement("span"),v=n("learnmore"),C=document.getElementById(v)||document.createElement("a"),m=n("preprendIcon"),h=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const g=d.element;a(g),u(C,v);const E=c();l(h,m),g.append(h,y,C,E),document.body.appendChild(g)}s?(y.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(h.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function iI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){return av.NODE_ADMIN===!0}function lI(){try{return typeof indexedDB=="object"}catch{return!1}}function cI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="FirebaseError";class ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uI,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ar(i,a,r)}}function dI(t,e){return t.replace(fI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ks(za(s[0])||""),n=Ks(za(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},hI=function(t){const e=yv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pI=function(t){const e=yv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Uu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Pp(s)&&Pp(o)){if(!Cr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Pp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function gI(t,e){const n=new yI(t,e);return n.subscribe.bind(n)}class yI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ic),i.error===void 0&&(i.error=Ic),i.complete===void 0&&(i.complete=Ic);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ic(){}function Tl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new go;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xI(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EI(t){return t===hr?void 0:t}function xI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const kI={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},bI=G.INFO,SI={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=SI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class af{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const CI=(t,e)=>e.some(n=>t instanceof n);let Np,Rp;function PI(){return Np||(Np=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NI(){return Rp||(Rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vv=new WeakMap,Hu=new WeakMap,_v=new WeakMap,kc=new WeakMap,lf=new WeakMap;function RI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vv.set(n,t)}).catch(()=>{}),lf.set(e,t),e}function AI(t){if(Hu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hu.set(t,e)}let Vu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_v.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DI(t){Vu=t(Vu)}function LI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bc(this),e,...n);return _v.set(r,e.sort?e.sort():[e]),Gn(r)}:NI().includes(t)?function(...e){return t.apply(bc(this),e),Gn(vv.get(this))}:function(...e){return Gn(t.apply(bc(this),e))}}function OI(t){return typeof t=="function"?LI(t):(t instanceof IDBTransaction&&AI(t),CI(t,PI())?new Proxy(t,Vu):t)}function Gn(t){if(t instanceof IDBRequest)return RI(t);if(kc.has(t))return kc.get(t);const e=OI(t);return e!==t&&(kc.set(t,e),lf.set(e,t)),e}const bc=t=>lf.get(t);function MI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const FI=["get","getKey","getAll","getAllKeys","count"],BI=["put","add","delete","clear"],Sc=new Map;function Ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sc.get(e))return Sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Sc.set(e,s),s}DI(t=>({...t,get:(e,n,r)=>Ap(e,n)||t.get(e,n,r),has:(e,n)=>!!Ap(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zu="@firebase/app",Dp="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new af("@firebase/app"),VI="@firebase/app-compat",zI="@firebase/analytics-compat",WI="@firebase/analytics",jI="@firebase/app-check-compat",$I="@firebase/app-check",GI="@firebase/auth",KI="@firebase/auth-compat",YI="@firebase/database",qI="@firebase/data-connect",QI="@firebase/database-compat",JI="@firebase/functions",XI="@firebase/functions-compat",ZI="@firebase/installations",ek="@firebase/installations-compat",tk="@firebase/messaging",nk="@firebase/messaging-compat",rk="@firebase/performance",ik="@firebase/performance-compat",sk="@firebase/remote-config",ok="@firebase/remote-config-compat",ak="@firebase/storage",lk="@firebase/storage-compat",ck="@firebase/firestore",uk="@firebase/ai",dk="@firebase/firestore-compat",fk="firebase",hk="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="[DEFAULT]",pk={[zu]:"fire-core",[VI]:"fire-core-compat",[WI]:"fire-analytics",[zI]:"fire-analytics-compat",[$I]:"fire-app-check",[jI]:"fire-app-check-compat",[GI]:"fire-auth",[KI]:"fire-auth-compat",[YI]:"fire-rtdb",[qI]:"fire-data-connect",[QI]:"fire-rtdb-compat",[JI]:"fire-fn",[XI]:"fire-fn-compat",[ZI]:"fire-iid",[ek]:"fire-iid-compat",[tk]:"fire-fcm",[nk]:"fire-fcm-compat",[rk]:"fire-perf",[ik]:"fire-perf-compat",[sk]:"fire-rc",[ok]:"fire-rc-compat",[ak]:"fire-gcs",[lk]:"fire-gcs-compat",[ck]:"fire-fst",[dk]:"fire-fst-compat",[uk]:"fire-vertex","fire-js":"fire-js",[fk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Map,mk=new Map,ju=new Map;function Lp(t,e){try{t.container.addComponent(e)}catch(n){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ei(t){const e=t.name;if(ju.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;ju.set(e,t);for(const n of ja.values())Lp(n,t);for(const n of mk.values())Lp(n,t);return!0}function cf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ie(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new yo("app","Firebase",gk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=hk;function wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Wu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(n||(n=fv()),!n)throw Kn.create("no-options");const s=ja.get(i);if(s){if(Cr(n,s.options)&&Cr(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const o=new II(i);for(const l of ju.values())o.addComponent(l);const a=new yk(n,r,o);return ja.set(i,a),a}function Ev(t=Wu){const e=ja.get(t);if(!e&&t===Wu&&fv())return wv();if(!e)throw Kn.create("no-app",{appName:t});return e}function Yn(t,e,n){let r=pk[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(o.join(" "));return}Ei(new Pr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="firebase-heartbeat-database",_k=1,Ys="firebase-heartbeat-store";let Tc=null;function xv(){return Tc||(Tc=MI(vk,_k,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ys)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function wk(t){try{const n=(await xv()).transaction(Ys),r=await n.objectStore(Ys).get(Iv(t));return await n.done,r}catch(e){if(e instanceof ar)gn.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(n.message)}}}async function Op(t,e){try{const r=(await xv()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,Iv(t)),await r.done}catch(n){if(n instanceof ar)gn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gn.warn(r.message)}}}function Iv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=1024,xk=30;class Ik{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>xk){const o=Sk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mp(),{heartbeatsToSend:r,unsentEntries:i}=kk(this._heartbeatsCache.heartbeats),s=Va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return gn.warn(n),""}}}function Mp(){return new Date().toISOString().substring(0,10)}function kk(t,e=Ek){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lI()?cI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fp(t){return Va(JSON.stringify({version:2,heartbeats:t})).length}function Sk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){Ei(new Pr("platform-logger",e=>new UI(e),"PRIVATE")),Ei(new Pr("heartbeat",e=>new Ik(e),"PRIVATE")),Yn(zu,Dp,t),Yn(zu,Dp,"esm2020"),Yn("fire-js","")}Tk("");var Ck="firebase",Pk="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(Ck,Pk,"app");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={PHONE:"phone",TOTP:"totp"},Rk={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ak={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},Dk={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},Lk={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mk=Ok,bv=kv,Sv=new yo("auth","Firebase",kv()),Fk={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new af("@firebase/auth");function Bk(t,...e){$a.logLevel<=G.WARN&&$a.warn(`Auth (${Mi}): ${t}`,...e)}function da(t,...e){$a.logLevel<=G.ERROR&&$a.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw df(t,...e)}function je(t,...e){return df(t,...e)}function uf(t,e,n){const r={...bv(),[e]:n};return new yo("auth","Firebase",r).create(e,{appName:t.name})}function Te(t){return uf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fi(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),uf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sv.create(t,...e)}function b(t,e,...n){if(!t)throw df(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw da(e),new Error(e)}function yn(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ff(){return Bp()==="http:"||Bp()==="https:"}function Bp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ff()||sI()||"connection"in navigator)?navigator.onLine:!0}function Hk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=of()||gv()}get(){return Uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wk=new vo(3e4,6e4);function ee(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function te(t,e,n,r,i={}){return Cv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Or({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return iI()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Oi(t.emulatorConfig.host)&&(c.credentials="include"),Tv.fetch()(await Pv(t,t.config.apiHost,n,a),c)})}async function Cv(t,e,n){t._canInitEmulator=!1;const r={...Vk,...e};try{const i=new $k(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw us(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw us(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw us(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw us(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw uf(t,u,c);st(t,u)}}catch(i){if(i instanceof ar)throw i;st(t,"network-request-failed",{message:String(i)})}}async function xn(t,e,n,r,i={}){const s=await te(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Pv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?hf(t.config,i):`${t.config.apiScheme}://${i}`;return zk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function jk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $k{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),Wk.get())})}}function us(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=je(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){return t!==void 0&&t.getResponse!==void 0}function Hp(t){return t!==void 0&&t.enterprise!==void 0}class Nv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t){return(await te(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Rv(t,e){return te(t,"GET","/v2/recaptchaConfig",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){return te(t,"POST","/v1/accounts:delete",e)}async function Yk(t,e){return te(t,"POST","/v1/accounts:update",e)}async function Ga(t,e){return te(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e=!1){return M(t).getIdToken(e)}async function Av(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=Pl(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Es(Cc(i.auth_time)),issuedAtTime:Es(Cc(i.iat)),expirationTime:Es(Cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cc(t){return Number(t)*1e3}function Pl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const i=za(n);return i?JSON.parse(i):(da("Failed to decode base64 JWT payload"),null)}catch(i){return da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vp(t){const e=Pl(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ar&&Qk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t){var f;const e=t.auth,n=await t.getIdToken(),r=await vn(t,Ga(e,{idToken:n}));b(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?Lv(i.providerUserInfo):[],o=Xk(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new $u(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function Dv(t){const e=M(t);await Qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e){const n=await Cv(t,{},async()=>{const r=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Pv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Oi(t.emulatorConfig.host)&&(l.credentials="include"),Tv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eb(t,e){return te(t,"POST","/v2/accounts:revokeToken",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Zk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new li;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Jk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $u(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vn(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Av(this,e)}reload(){return Dv(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(Te(this.auth));const e=await this.getIdToken();return await vn(this,Kk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:p,providerData:y,stsTokenManager:v}=n;b(f&&v,e,"internal-error");const C=li.fromJSON(this.name,v);b(typeof f=="string",e,"internal-error"),Cn(r,e.name),Cn(i,e.name),b(typeof d=="boolean",e,"internal-error"),b(typeof p=="boolean",e,"internal-error"),Cn(s,e.name),Cn(o,e.name),Cn(a,e.name),Cn(l,e.name),Cn(c,e.name),Cn(u,e.name);const m=new Rt({uid:f,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:C,createdAt:c,lastLoginAt:u});return y&&Array.isArray(y)&&(m.providerData=y.map(h=>({...h}))),l&&(m._redirectEventId=l),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new li;i.updateFromServerResponse(n);const s=new Rt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];b(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Lv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new li;a.updateFromIdToken(r);const l=new Rt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $u(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=new Map;function on(t){yn(t instanceof Function,"Expected a class definition");let e=zp.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ov.type="NONE";const Gu=Ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ga(this.auth,{idToken:e}).catch(()=>{});return n?Rt._fromGetAccountInfoResponse(this.auth,n,e):null}return Rt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci(on(Gu),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||on(Gu);const o=fa(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let f;if(typeof u=="string"){const d=await Ga(e,{idToken:u}).catch(()=>{});if(!d)break;f=await Rt._fromGetAccountInfoResponse(e,d,u)}else f=Rt._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ci(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ci(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vv(e))return"Blackberry";if(zv(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||Bv(e))&&!e.includes("edge/"))return"Chrome";if(Hv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mv(t=Ge()){return/firefox\//i.test(t)}function Fv(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bv(t=Ge()){return/crios\//i.test(t)}function Uv(t=Ge()){return/iemobile/i.test(t)}function Hv(t=Ge()){return/android/i.test(t)}function Vv(t=Ge()){return/blackberry/i.test(t)}function zv(t=Ge()){return/webos/i.test(t)}function pf(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tb(t=Ge()){var e;return pf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function nb(){return oI()&&document.documentMode===10}function Wv(t=Ge()){return pf(t)||Hv(t)||zv(t)||Vv(t)||/windows phone/i.test(t)||Uv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e=[]){let n;switch(t){case"Browser":n=Wp(Ge());break;case"Worker":n=`${Wp(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(t,e={}){return te(t,"GET","/v2/passwordPolicy",ee(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=6;class ob{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jp(this),this.idTokenSubscription=new jp(this),this.beforeStateQueue=new rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ga(this,{idToken:e}),r=await Rt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(ie(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ie(this.app))return Promise.reject(Te(this));const n=e?M(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(Te(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ie(this.app)?Promise.reject(Te(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ib(this),n=new ob(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Bk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function de(t){return M(t)}class jp{constructor(e){this.auth=e,this.observer=null,this.addObserver=gI(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lb(t){_o=t}function mf(t){return _o.loadJS(t)}function cb(){return _o.recaptchaV2Script}function ub(){return _o.recaptchaEnterpriseScript}function db(){return _o.gapiScript}function $v(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=500,hb=6e4,Yo=1e12;class pb{constructor(e){this.auth=e,this.counter=Yo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new yb(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Yo;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Yo;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Yo;return(r=this._widgets.get(n))==null||r.execute(),""}}class mb{constructor(){this.enterprise=new gb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yb{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;b(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=vb(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},hb)},fb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vb(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const _b="recaptcha-enterprise",xs="NO_RECAPTCHA";class Gv{constructor(e){this.type=_b,this.auth=de(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Rv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Nv(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Hp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xs)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mb().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Hp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ub();l.length!==0&&(l+=a),mf(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Zi(t,e,n,r=!1,i=!1){const s=new Gv(t);let o;if(i)o=xs;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qn(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zi(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Zi(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Zi(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await Zi(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await Zi(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function Kv(t){const e=de(t),n=await Rv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Nv(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Gv(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e){const n=cf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cr(s,e??{}))return i;st(i,"already-initialized")}return n.initialize({options:e})}function wb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qv(t,e,n){const r=de(t);b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Qv(e),{host:o,port:a}=Eb(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){b(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),b(Cr(c,r.config.emulator)&&Cr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Oi(o)?(pv(`${s}//${o}${l}`),mv("Auth",!0)):i||xb()}function Qv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eb(t){const e=Qv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$p(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:$p(o)}}}function $p(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t,e){return te(t,"POST","/v1/accounts:resetPassword",ee(t,e))}async function Ib(t,e){return te(t,"POST","/v1/accounts:update",e)}async function kb(t,e){return te(t,"POST","/v1/accounts:signUp",e)}async function bb(t,e){return te(t,"POST","/v1/accounts:update",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e){return xn(t,"POST","/v1/accounts:signInWithPassword",ee(t,e))}async function Nl(t,e){return te(t,"POST","/v1/accounts:sendOobCode",ee(t,e))}async function Tb(t,e){return Nl(t,e)}async function Cb(t,e){return Nl(t,e)}async function Pb(t,e){return Nl(t,e)}async function Nb(t,e){return Nl(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",ee(t,e))}async function Ab(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Bi{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qn(e,n,"signInWithPassword",Sb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Rb(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qn(e,r,"signUpPassword",kb,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ab(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e){return xn(t,"POST","/v1/accounts:signInWithIdp",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="http://localhost";class Yt extends Bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,un(e,n)}buildRequest(){const e={requestUri:Db,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Or(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e){return te(t,"POST","/v1/accounts:sendVerificationCode",ee(t,e))}async function Lb(t,e){return xn(t,"POST","/v1/accounts:signInWithPhoneNumber",ee(t,e))}async function Ob(t,e){const n=await xn(t,"POST","/v1/accounts:signInWithPhoneNumber",ee(t,e));if(n.temporaryProof)throw us(t,"account-exists-with-different-credential",n);return n}const Mb={USER_NOT_FOUND:"user-not-found"};async function Fb(t,e){const n={...e,operation:"REAUTH"};return xn(t,"POST","/v1/accounts:signInWithPhoneNumber",ee(t,n),Mb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Bi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Qn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Qn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Lb(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Ob(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Fb(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Qn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ub(t){const e=ls(cs(t)).link,n=e?ls(cs(e)).deep_link_id:null,r=ls(cs(t)).deep_link_id;return(r?ls(cs(r)).link:null)||r||n||e||t}class Ui{constructor(e){const n=ls(cs(e)),r=n.apiKey??null,i=n.oobCode??null,s=Bb(n.mode??null);b(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ub(e);try{return new Ui(n)}catch{return null}}}function Hb(t){return Ui.parseLink(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.providerId=lr.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ui.parseLink(n);return b(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}lr.PROVIDER_ID="password";lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends In{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Is extends Hi{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return b("providerId"in n&&"signInMethod"in n,"argument-error"),Yt._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return b(e.idToken||e.accessToken,"argument-error"),Yt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Is.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Is.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Is(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Hi{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Hi{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="http://localhost";class Js extends Bi{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,un(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Js(r,s)}static _create(e,n){return new Js(e,n)}buildRequest(){return{requestUri:Vb,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="saml.";class Ka extends In{constructor(e){b(e.startsWith(zb),"argument-error"),super(e)}static credentialFromResult(e){return Ka.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ka.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Js.fromJSON(e);return b(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Js._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(t,e){return xn(t,"POST","/v1/accounts:signUp",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rt._fromIdTokenResponse(e,r,i),o=Kp(r);return new Et({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kp(r);return new Et({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t){var i;if(ie(t.app))return Promise.reject(Te(t));const e=de(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Et({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await Xv(e,{returnSecureToken:!0}),r=await Et._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends ar{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ya.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ya(e,n,r,i)}}function Zv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ya._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e){const n=M(t);await Rl(!0,n,e);const{providerUserInfo:r}=await Yk(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=e_(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function gf(t,e,n=!1){const r=await vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Et._forOperation(t,"link",r)}async function Rl(t,e,n){await Qs(e);const r=e_(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";b(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(t,e,n=!1){const{auth:r}=t;if(ie(r.app))return Promise.reject(Te(r));const i="reauthenticate";try{const s=await vn(t,Zv(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=Pl(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),Et._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e,n=!1){if(ie(t.app))return Promise.reject(Te(t));const r="signIn",i=await Zv(t,r,e),s=await Et._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Al(t,e){return n_(de(t),e)}async function r_(t,e){const n=M(t);return await Rl(!1,n,e.providerId),gf(n,e)}async function i_(t,e){return t_(M(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e){return xn(t,"POST","/v1/accounts:signInWithCustomToken",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(t,e){if(ie(t.app))return Promise.reject(Te(t));const n=de(t),r=await $b(n,{token:e,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?yf._fromServerResponse(e,n):"totpInfo"in n?vf._fromServerResponse(e,n):st(e,"internal-error")}}class yf extends wo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new yf(n)}}class vf extends wo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new vf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e,n){var r;b(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),b(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),b(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(b(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(b(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(t){const e=de(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Kb(t,e,n){const r=de(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Dl(r,i,n),await qn(r,i,"getOobCode",Cb,"EMAIL_PASSWORD_PROVIDER")}async function Yb(t,e,n){await Jv(M(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_f(t),r})}async function qb(t,e){await bb(M(t),{oobCode:e})}async function s_(t,e){const n=M(t),r=await Jv(n,{oobCode:e}),i=r.requestType;switch(b(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":b(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":b(r.mfaInfo,n,"internal-error");default:b(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=wo._fromServerResponse(de(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Qb(t,e){const{data:n}=await s_(M(t),e);return n.email}async function Jb(t,e,n){if(ie(t.app))return Promise.reject(Te(t));const r=de(t),o=await qn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Xv,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_f(t),l}),a=await Et._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Xb(t,e,n){return ie(t.app)?Promise.reject(Te(t)):Al(M(t),lr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_f(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e,n){const r=de(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){b(a.handleCodeInApp,r,"argument-error"),a&&Dl(r,o,a)}s(i,n),await qn(r,i,"getOobCode",Pb,"EMAIL_PASSWORD_PROVIDER")}function eS(t,e){const n=Ui.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function tS(t,e,n){if(ie(t.app))return Promise.reject(Te(t));const r=M(t),i=lr.credentialWithLink(e,n||qs());return b(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Al(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(t,e){return te(t,"POST","/v1/accounts:createAuthUri",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){const n=ff()?qs():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await nS(M(t),r);return i||[]}async function iS(t,e){const n=M(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Dl(n.auth,i,e);const{email:s}=await Tb(n.auth,i);s!==t.email&&await t.reload()}async function sS(t,e,n){const r=M(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Dl(r.auth,s,n);const{email:o}=await Nb(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e){return te(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vn(r,oS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function lS(t,e){const n=M(t);return ie(n.auth.app)?Promise.reject(Te(n.auth)):o_(n,e,null)}function cS(t,e){return o_(M(t),null,e)}async function o_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await vn(t,Ib(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=Pl(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ui(r,a)}}if(!e)return null;switch(e){case"facebook.com":return new dS(r,n);case"github.com":return new fS(r,n);case"google.com":return new hS(r,n);case"twitter.com":return new pS(r,n,t.screenName||null);case"custom":case"anonymous":return new ui(r,null);default:return new ui(r,e,n)}}class ui{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class a_ extends ui{constructor(e,n,r,i){super(e,n,r),this.username=i}}class dS extends ui{constructor(e,n){super(e,"facebook.com",n)}}class fS extends a_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class hS extends ui{constructor(e,n){super(e,"google.com",n)}}class pS extends a_{constructor(e,n,r){super(e,"twitter.com",n,r)}}function mS(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:uS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(t,e){return M(t).setPersistence(e)}function yS(t){return Kv(t)}async function vS(t,e){return de(t).validatePassword(e)}function l_(t,e,n,r){return M(t).onIdTokenChanged(e,n,r)}function c_(t,e,n){return M(t).beforeAuthStateChanged(e,n)}function _S(t,e,n,r){return M(t).onAuthStateChanged(e,n,r)}function wS(t){M(t).useDeviceLanguage()}function ES(t,e){return M(t).updateCurrentUser(e)}function u_(t){return M(t).signOut()}function xS(t,e){return de(t).revokeAccessToken(e)}async function IS(t){return M(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new vr("enroll",e,n)}static _fromMfaPendingCredential(e){return new vr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if((n=e.multiFactorSession)!=null&&n.pendingCredential)return vr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)!=null&&r.idToken)return vr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=de(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>wo._fromServerResponse(r,a));b(i.mfaPendingCredential,r,"internal-error");const o=vr._fromMfaPendingCredential(i.mfaPendingCredential);return new wf(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c={...i,idToken:l.idToken,refreshToken:l.refreshToken};switch(n.operationType){case"signIn":const u=await Et._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return b(n.user,r,"internal-error"),Et._forOperation(n.user,n.operationType,c);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function kS(t,e){var i;const n=M(t),r=e;return b(e.customData.operationType,n,"argument-error"),b((i=r.customData._serverResponse)==null?void 0:i.mfaPendingCredential,n,"argument-error"),wf._fromError(n,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:start",ee(t,e))}function bS(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:finalize",ee(t,e))}function SS(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:start",ee(t,e))}function TS(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:finalize",ee(t,e))}function CS(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ee(t,e))}class Ef{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>wo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Ef(e)}async getSession(){return vr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await vn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await vn(this.user,CS(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Pc=new WeakMap;function PS(t){const e=M(t);return Pc.has(e)||Pc.set(e,Ef._fromUser(e)),Pc.get(e)}const qa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=1e3,RS=10;class f_ extends d_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}f_.type="LOCAL";const h_=f_;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=1e3;function Nc(t){var r;const e=t.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return((r=document.cookie.match(n))==null?void 0:r[1])??null}function Rc(t){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${t.split(":")[3]}`}class p_{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const n=new URL(`${window.location.origin}/__cookies__`);return n.searchParams.set("finalTarget",e),n}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,n){}async _get(e){if(!this._isAvailable())return null;const n=Rc(e);if(window.cookieStore){const r=await window.cookieStore.get(n);return r==null?void 0:r.value}return Nc(n)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const r=Rc(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,n){if(!this._isAvailable())return;const r=Rc(e);if(window.cookieStore){const a=c=>{const u=c.changed.find(d=>d.name===r);u&&n(u.value),c.deleted.find(d=>d.name===r)&&n(null)},l=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(n,l),window.cookieStore.addEventListener("change",a)}let i=Nc(r);const s=setInterval(()=>{const a=Nc(r);a!==i&&(n(a),i=a)},AS),o=()=>clearInterval(s);this.listenerUnsubscribes.set(n,o)}_removeListener(e,n){const r=this.listenerUnsubscribes.get(n);r&&(r(),this.listenerUnsubscribes.delete(n))}}p_.type="COOKIE";const DS=p_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_ extends d_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m_.type="SESSION";const xf=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ll(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await LS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ll.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ol("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function MS(t){he().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function FS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function US(){return If()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="firebaseLocalStorageDb",HS=1,Qa="firebaseLocalStorage",y_="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ml(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function VS(){const t=indexedDB.deleteDatabase(g_);return new Eo(t).toPromise()}function Ku(){const t=indexedDB.open(g_,HS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qa,{keyPath:y_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await VS(),e(await Ku()))})})}async function qp(t,e,n){const r=Ml(t,!0).put({[y_]:e,value:n});return new Eo(r).toPromise()}async function zS(t,e){const n=Ml(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function Qp(t,e){const n=Ml(t,!0).delete(e);return new Eo(n).toPromise()}const WS=800,jS=3;class v_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return If()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ll._getInstance(US()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await FS(),!this.activeServiceWorker)return;this.sender=new OS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ku();return await qp(e,qa,"1"),await Qp(e,qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ml(i,!1).getAll();return new Eo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v_.type="LOCAL";const __=v_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e){return te(t,"POST","/v2/accounts/mfaSignIn:start",ee(t,e))}function $S(t,e){return te(t,"POST","/v2/accounts/mfaSignIn:finalize",ee(t,e))}function GS(t,e){return te(t,"POST","/v2/accounts/mfaSignIn:finalize",ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=$v("rcb"),KS=new vo(3e4,6e4);class YS{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=he().grecaptcha)!=null&&e.render)}load(e,n=""){return b(qS(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Up(he().grecaptcha)?Promise.resolve(he().grecaptcha):new Promise((r,i)=>{const s=he().setTimeout(()=>{i(je(e,"network-request-failed"))},KS.get());he()[Ac]=()=>{he().clearTimeout(s),delete he()[Ac];const a=he().grecaptcha;if(!a||!Up(a)){i(je(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const f=l(c,u);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${cb()}?${Or({onload:Ac,render:"explicit",hl:n})}`;mf(o).catch(()=>{clearTimeout(s),i(je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=he().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function qS(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class QS{async load(e){return new pb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="recaptcha",JS={theme:"light",type:"image"};class XS{constructor(e,n,r={...JS}){this.parameters=r,this.type=ks,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=de(e),this.isInvisible=this.parameters.size==="invisible",b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;b(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new QS:new YS,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){b(!this.parameters.sitekey,this.auth,"argument-error"),b(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),b(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=he()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){b(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){b(ff()&&!If(),this.auth,"internal-error"),await ZS(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Gk(this.auth);b(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return b(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ZS(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Qn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function eT(t,e,n){if(ie(t.app))return Promise.reject(Te(t));const r=de(t),i=await Fl(r,e,M(n));return new kf(i,s=>Al(r,s))}async function tT(t,e,n){const r=M(t);await Rl(!1,r,"phone");const i=await Fl(r.auth,e,M(n));return new kf(i,s=>r_(r,s))}async function nT(t,e,n){const r=M(t);if(ie(r.auth.app))return Promise.reject(Te(r.auth));const i=await Fl(r.auth,e,M(n));return new kf(i,s=>i_(r,s))}async function Fl(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Kv(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){b(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await qn(t,o,"mfaSmsEnrollment",async(u,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===xs){b((n==null?void 0:n.type)===ks,u,"argument-error");const d=await Dc(u,f,n);return Yp(u,d)}return Yp(u,f)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{b(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;b(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await qn(t,a,"mfaSmsSignIn",async(f,d)=>{if(d.phoneSignInInfo.captchaResponse===xs){b((n==null?void 0:n.type)===ks,f,"argument-error");const p=await Dc(f,d,n);return Jp(f,p)}return Jp(f,d)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await qn(t,s,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===xs){b((n==null?void 0:n.type)===ks,c,"argument-error");const f=await Dc(c,u,n);return Gp(c,f)}return Gp(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function rT(t,e){const n=M(t);if(ie(n.auth.app))return Promise.reject(Te(n.auth));await gf(n,e)}async function Dc(t,e,n){b(n.type===ks,t,"argument-error");const r=await n.verify();b(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.providerId=xr.PROVIDER_ID,this.auth=de(e)}verifyPhoneNumber(e,n){return Fl(this.auth,e,M(n))}static credential(e,n){return Qn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return xr.credentialFromTaggedObject(n)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Qn._fromTokenResponse(n,r):null}}xr.PROVIDER_ID="phone";xr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){return e?on(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf extends Bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iT(t){return n_(t.auth,new bf(t),t.bypassAuthState)}function sT(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),t_(n,new bf(t),t.bypassAuthState)}async function oT(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),gf(n,new bf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iT;case"linkViaPopup":case"linkViaRedirect":return oT;case"reauthViaPopup":case"reauthViaRedirect":return sT;default:st(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new vo(2e3,1e4);async function lT(t,e,n){if(ie(t.app))return Promise.reject(je(t,"operation-not-supported-in-this-environment"));const r=de(t);Fi(t,e,In);const i=Mr(r,n);return new an(r,"signInViaPopup",e,i).executeNotNull()}async function cT(t,e,n){const r=M(t);if(ie(r.auth.app))return Promise.reject(je(r.auth,"operation-not-supported-in-this-environment"));Fi(r.auth,e,In);const i=Mr(r.auth,n);return new an(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function uT(t,e,n){const r=M(t);Fi(r.auth,e,In);const i=Mr(r.auth,n);return new an(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class an extends w_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aT.get())};e()}}an.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="pendingRedirect",ha=new Map;class fT extends w_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ha.get(this.auth._key());if(!e){try{const r=await hT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ha.set(this.auth._key(),e)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hT(t,e){const n=x_(e),r=E_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Sf(t,e){return E_(t)._set(x_(e),"true")}function pT(t,e){ha.set(t._key(),e)}function E_(t){return on(t._redirectPersistence)}function x_(t){return fa(dT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t,e,n){return gT(t,e,n)}async function gT(t,e,n){if(ie(t.app))return Promise.reject(Te(t));const r=de(t);Fi(t,e,In),await r._initializationPromise;const i=Mr(r,n);return await Sf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function yT(t,e,n){return vT(t,e,n)}async function vT(t,e,n){const r=M(t);if(Fi(r.auth,e,In),ie(r.auth.app))return Promise.reject(Te(r.auth));await r.auth._initializationPromise;const i=Mr(r.auth,n);await Sf(i,r.auth);const s=await k_(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function _T(t,e,n){return wT(t,e,n)}async function wT(t,e,n){const r=M(t);Fi(r.auth,e,In),await r.auth._initializationPromise;const i=Mr(r.auth,n);await Rl(!1,r,e.providerId),await Sf(i,r.auth);const s=await k_(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function ET(t,e){return await de(t)._initializationPromise,I_(t,e,!1)}async function I_(t,e,n=!1){if(ie(t.app))return Promise.reject(Te(t));const r=de(t),i=Mr(r,e),o=await new fT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function k_(t){const e=Ol(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=10*60*1e3;class IT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!b_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xp(e))}saveEventToCache(e){this.cachedEventUids.add(Xp(e)),this.lastProcessedEventTime=Date.now()}}function Xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function b_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(t,e={}){return te(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TT=/^https?/;async function CT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bT(t);for(const n of e)try{if(PT(n))return}catch{}st(t,"unauthorized-domain")}function PT(t){const e=qs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TT.test(n))return!1;if(ST.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new vo(3e4,6e4);function Zp(){const t=he().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RT(t){return new Promise((e,n)=>{var i,s,o;function r(){Zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zp(),n(je(t,"network-request-failed"))},timeout:NT.get()})}if((s=(i=he().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=he().gapi)!=null&&o.load)r();else{const a=$v("iframefcb");return he()[a]=()=>{gapi.load?r():n(je(t,"network-request-failed"))},mf(`${db()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pa=null,e})}let pa=null;function AT(t){return pa=pa||RT(t),pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=new vo(5e3,15e3),LT="__/auth/iframe",OT="emulator/auth/iframe",MT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BT(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,OT):`https://${t.config.authDomain}/${LT}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=FT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Or(r).slice(1)}`}async function UT(t){const e=await AT(t),n=he().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:BT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=he().setTimeout(()=>{s(o)},DT.get());function l(){he().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VT=500,zT=600,WT="_blank",jT="http://localhost";class em{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $T(t,e,n,r=VT,i=zT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...HT,width:r.toString(),height:i.toString(),top:s,left:o},c=Ge().toLowerCase();n&&(a=Bv(c)?WT:n),Mv(c)&&(e=e||jT,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(tb(c)&&a!=="_self")return GT(e||"",a),new em(null);const f=window.open(e||"",a,u);b(f,t,"popup-blocked");try{f.focus()}catch{}return new em(f)}function GT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="__/auth/handler",YT="emulator/auth/handler",qT=encodeURIComponent("fac");async function tm(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof In){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof Hi){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${qT}=${encodeURIComponent(l)}`:"";return`${QT(t)}?${Or(a).slice(1)}${c}`}function QT({config:t}){return t.emulator?hf(t,YT):`https://${t.authDomain}/${KT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="webStorageSupport";class JT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xf,this._completeRedirectFn=I_,this._overrideRedirectResult=pT}async _openPopup(e,n,r,i){var o;yn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await tm(e,n,r,qs(),i);return $T(e,s,Ol())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tm(e,n,r,qs(),i);return MS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UT(e),r=new IT(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Lc];s!==void 0&&n(!!s),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wv()||Fv()||pf()}}const S_=JT;class T_{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return jt("unexpected MultiFactorSessionType")}}}class Tf extends T_{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Tf(e)}_finalizeEnroll(e,n,r){return bS(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return $S(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class C_{constructor(){}static assertion(e){return Tf._fromCredential(e)}}C_.FACTOR_ID="phone";class P_{static assertionForEnrollment(e,n){return Xs._fromSecret(e,n)}static assertionForSignIn(e,n){return Xs._fromEnrollmentId(e,n)}static async generateSecret(e){var i;const n=e;b(typeof((i=n.user)==null?void 0:i.auth)<"u","internal-error");const r=await SS(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Bl._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}P_.FACTOR_ID="totp";class Xs extends T_{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new Xs(n,void 0,e)}static _fromEnrollmentId(e,n){return new Xs(n,e)}async _finalizeEnroll(e,n,r){return b(typeof this.secret<"u",e,"argument-error"),TS(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){b(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return GS(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Bl{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Bl(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var i;let r=!1;return(qo(e)||qo(n))&&(r=!0),r&&(qo(e)&&(e=((i=this.auth.currentUser)==null?void 0:i.email)||"unknownuser"),qo(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function qo(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var nm="@firebase/auth",rm="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eC(t){Ei(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jv(t)},c=new ab(r,i,s,l);return wb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ei(new Pr("auth-internal",e=>{const n=de(e.getProvider("auth").getImmediate());return(r=>new XT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(nm,rm,ZT(t)),Yn(nm,rm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=5*60,nC=hv("authIdTokenMaxAge")||tC;let im=null;const rC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nC)return;const i=n==null?void 0:n.token;im!==i&&(im=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function N_(t=Ev()){const e=cf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yv(t,{popupRedirectResolver:S_,persistence:[__,h_,xf]}),r=hv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=rC(s.toString());c_(n,o,()=>o(n.currentUser)),l_(n,a=>o(a))}}const i=dv("auth");return i&&qv(n,`http://${i}`),n}function iC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}lb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eC("Browser");const sC=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:Lk,ActionCodeURL:Ui,AuthCredential:Bi,AuthErrorCodes:Fk,EmailAuthCredential:xi,EmailAuthProvider:lr,FacebookAuthProvider:Zt,FactorId:Nk,GithubAuthProvider:tn,GoogleAuthProvider:en,OAuthCredential:Yt,OAuthProvider:Is,OperationType:Dk,PhoneAuthCredential:Qn,PhoneAuthProvider:xr,PhoneMultiFactorGenerator:C_,ProviderId:Rk,RecaptchaVerifier:XS,SAMLAuthProvider:Ka,SignInMethod:Ak,TotpMultiFactorGenerator:P_,TotpSecret:Bl,TwitterAuthProvider:nn,applyActionCode:qb,beforeAuthStateChanged:c_,browserCookiePersistence:DS,browserLocalPersistence:h_,browserPopupRedirectResolver:S_,browserSessionPersistence:xf,checkActionCode:s_,confirmPasswordReset:Yb,connectAuthEmulator:qv,createUserWithEmailAndPassword:Jb,debugErrorMap:Mk,deleteUser:IS,fetchSignInMethodsForEmail:rS,getAdditionalUserInfo:mS,getAuth:N_,getIdToken:qk,getIdTokenResult:Av,getMultiFactorResolver:kS,getRedirectResult:ET,inMemoryPersistence:Gu,indexedDBLocalPersistence:__,initializeAuth:Yv,initializeRecaptchaConfig:yS,isSignInWithEmailLink:eS,linkWithCredential:r_,linkWithPhoneNumber:tT,linkWithPopup:uT,linkWithRedirect:_T,multiFactor:PS,onAuthStateChanged:_S,onIdTokenChanged:l_,parseActionCodeURL:Hb,prodErrorMap:bv,reauthenticateWithCredential:i_,reauthenticateWithPhoneNumber:nT,reauthenticateWithPopup:cT,reauthenticateWithRedirect:yT,reload:Dv,revokeAccessToken:xS,sendEmailVerification:iS,sendPasswordResetEmail:Kb,sendSignInLinkToEmail:Zb,setPersistence:gS,signInAnonymously:Wb,signInWithCredential:Al,signInWithCustomToken:Gb,signInWithEmailAndPassword:Xb,signInWithEmailLink:tS,signInWithPhoneNumber:eT,signInWithPopup:lT,signInWithRedirect:mT,signOut:u_,unlink:jb,updateCurrentUser:ES,updateEmail:lS,updatePassword:cS,updatePhoneNumber:rT,updateProfile:aS,useDeviceLanguage:wS,validatePassword:vS,verifyBeforeUpdateEmail:sS,verifyPasswordResetCode:Qb},Symbol.toStringTag,{value:"Module"}));var sm={};const om="@firebase/database",am="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let R_="";function oC(t){R_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aC(e)}}catch{}return new lC},_r=A_("localStorage"),cC=A_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new af("@firebase/database"),uC=function(){let t=1;return function(){return t++}}(),D_=function(t){const e=_I(t),n=new mI;n.update(e);const r=n.digest();return rf.encodeByteArray(r)},xo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=xo.apply(null,r):typeof r=="object"?e+=ye(r):e+=r,e+=" "}return e};let bs=null,lm=!0;const dC=function(t,e){S(!0,"Can't turn on custom loggers persistently."),di.logLevel=G.VERBOSE,bs=di.log.bind(di)},Ne=function(...t){if(lm===!0&&(lm=!1,bs===null&&cC.get("logging_enabled")===!0&&dC()),bs){const e=xo.apply(null,t);bs(e)}},Io=function(t){return function(...e){Ne(t,...e)}},Yu=function(...t){const e="FIREBASE INTERNAL ERROR: "+xo(...t);di.error(e)},_n=function(...t){const e=`FIREBASE FATAL ERROR: ${xo(...t)}`;throw di.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+xo(...t);di.warn(e)},fC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ii="[MIN_NAME]",Nr="[MAX_NAME]",Fr=function(t,e){if(t===e)return 0;if(t===Ii||e===Nr)return-1;if(e===Ii||t===Nr)return 1;{const n=cm(t),r=cm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},pC=function(t,e){return t===e?0:t<e?-1:1},es=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},Pf=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ye(e[r]),n+=":",n+=Pf(t[e[r]]);return n+="}",n},L_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function De(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const O_=function(t){S(!Cf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},mC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const vC=new RegExp("^-?(0*)\\d{1,10}$"),_C=-2147483648,wC=2147483647,cm=function(t){if(vC.test(t)){const e=Number(t);if(e>=_C&&e<=wC)return e}return null},Vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},EC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ss=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ie(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class ma{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ma.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="5",M_="v",F_="s",B_="r",U_="f",H_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,V_="ls",z_="p",qu="ac",W_="websocket",j_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function G_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===W_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===j_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kC(t)&&(n.ns=t.namespace);const i=[];return De(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.counters_={}}incrementCounter(e,n=1){qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc={},Mc={};function Rf(t){const e=t.toString();return Oc[e]||(Oc[e]=new bC),Oc[e]}function SC(t,e){const n=t.toString();return Mc[n]||(Mc[n]=e()),Mc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="start",CC="close",PC="pLPCommand",NC="pRTLPCB",K_="id",Y_="pw",q_="ser",RC="cb",AC="seg",DC="ts",LC="d",OC="dframe",Q_=1870,J_=30,MC=Q_-J_,FC=25e3,BC=3e4;class ti{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Io(e),this.stats_=Rf(n),this.urlFn=l=>(this.appCheckToken&&(l[qu]=this.appCheckToken),G_(n,j_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BC)),hC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Af((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===um)this.id=a,this.password=l;else if(o===CC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[um]="t",r[q_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[RC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[M_]=Nf,this.transportSessionId&&(r[F_]=this.transportSessionId),this.lastSessionId&&(r[V_]=this.lastSessionId),this.applicationId&&(r[z_]=this.applicationId),this.appCheckToken&&(r[qu]=this.appCheckToken),typeof location<"u"&&location.hostname&&H_.test(location.hostname)&&(r[B_]=U_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ti.forceAllow_=!0}static forceDisallow(){ti.forceDisallow_=!0}static isAvailable(){return ti.forceAllow_?!0:!ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mC()&&!gC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cv(n),i=L_(r,MC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[OC]="t",r[K_]=e,r[Y_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Af{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uC(),window[PC+this.uniqueCallbackIdentifier]=e,window[NC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Af.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[K_]=this.myID,e[Y_]=this.myPW,e[q_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+J_+r.length<=Q_;){const o=this.pendingSegs.shift();r=r+"&"+AC+i+"="+o.seg+"&"+DC+i+"="+o.ts+"&"+LC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(FC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=16384,HC=45e3;let Ja=null;typeof MozWebSocket<"u"?Ja=MozWebSocket:typeof WebSocket<"u"&&(Ja=WebSocket);class Nt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Io(this.connId),this.stats_=Rf(n),this.connURL=Nt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[M_]=Nf,typeof location<"u"&&location.hostname&&H_.test(location.hostname)&&(o[B_]=U_),n&&(o[F_]=n),r&&(o[V_]=r),i&&(o[qu]=i),s&&(o[z_]=s),G_(e,W_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_r.set("previous_websocket_failure",!0);try{let r;aI(),this.mySock=new Ja(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ja!==null&&!Nt.forceDisallow_}static previouslyFailed(){return _r.isInMemoryStorage||_r.get("previous_websocket_failure")===!0}markConnectionHealthy(){_r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ks(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=L_(n,UC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2;Nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{static get ALL_TRANSPORTS(){return[ti,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Nt&&Nt.isAvailable();let r=n&&!Nt.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nt];else{const i=this.transports_=[];for(const s of Zs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=6e4,zC=5e3,WC=10*1024,jC=100*1024,Fc="t",dm="d",$C="s",fm="r",GC="e",hm="o",pm="a",mm="n",gm="p",KC="h";class YC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Io("c:"+this.id+":"),this.transportManager_=new Zs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ss(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fc in e){const n=e[Fc];n===pm?this.upgradeIfSecondaryHealthy_():n===fm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=es("t",e),r=es("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=es("t",e),r=es("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=es(Fc,e);if(dm in e){const r=e[dm];if(n===KC){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$C?this.onConnectionShutdown_(r):n===fm?this.onReset_(r):n===GC?Yu("Server Error: "+r):n===hm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nf!==r&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ss(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(VC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ss(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Z_{static getInstance(){return new Xa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!of()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=32,vm=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new K("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function tr(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Df(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function eo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function e0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=V(t),r=V(e);if(n===null)return e;if(n===r)return ze(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QC(t,e){const n=eo(t,0),r=eo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Fr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function t0(t,e){if(tr(t)!==tr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(tr(t)>tr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JC{constructor(e,n){this.errorPrefix_=n,this.parts_=eo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Cl(this.parts_[r]);n0(this)}}function XC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cl(e),n0(t)}function ZC(t){const e=t.parts_.pop();t.byteLength_-=Cl(e),t.parts_.length>0&&(t.byteLength_-=1)}function n0(t){if(t.byteLength_>vm)throw new Error(t.errorPrefix_+"has a key path longer than "+vm+" bytes ("+t.byteLength_+").");if(t.parts_.length>ym)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ym+") or object contains a cycle "+pr(t))}function pr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends Z_{static getInstance(){return new Lf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=1e3,e1=60*5*1e3,_m=30*1e3,t1=1.3,n1=3e4,r1="server_kill",wm=3;class dn extends X_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dn.nextPersistentConnectionId_++,this.log_=Io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ts,this.maxReconnectDelay_=e1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ye(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new go,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;dn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&qt(e,"w")){const r=wi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_m)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yu("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>n1&&(this.reconnectDelay_=ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*t1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new YC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{$e(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(r1)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&$e(f),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Uu(this.interruptReasons_)&&(this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Pf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wm&&(this.reconnectDelay_=_m,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+R_.replace(/\./g,"-")]=1,of()?e["framework.cordova"]=1:gv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xa.getInstance().currentlyOnline();return Uu(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(Ii,e),i=new B(Ii,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;class r0 extends Ul{static get __EMPTY_NODE(){return Qo}static set __EMPTY_NODE(e){Qo=e}compare(e,n){return Fr(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(Nr,Qo)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,Qo)}toString(){return".key"}}const fi=new r0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??et.EMPTY_NODE,this.right=s??et.EMPTY_NODE}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class i1{copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jo(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new i1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t,e){return Fr(t.name,e.name)}function Of(t,e){return Fr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;function o1(t){Qu=t}const i0=function(t){return typeof t=="number"?"number:"+O_(t):"string:"+t},s0=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qt(e,".sv"),"Priority must be a string or number.")}else S(t===Qu||t.isEmpty(),"priority of unexpected type.");S(t===Qu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Em;class xe{static set __childrenNodeConstructor(e){Em=e}static get __childrenNodeConstructor(){return Em}constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),s0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:V(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=V(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+i0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=O_(this.value_):e+=this.value_,this.lazyHash_=D_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o0,a0;function a1(t){o0=t}function l1(t){a0=t}class c1 extends Ul{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(Nr,new xe("[PRIORITY-POST]",a0))}makePost(e,n){const r=o0(e);return new B(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ue=new c1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=Math.log(2);class d1{constructor(e){const n=s=>parseInt(Math.log(s)/u1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new be(d,f.node,be.BLACK,null,null);{const p=parseInt(u/2,10)+l,y=i(l,p),v=i(p+1,c);return f=t[p],d=n?n(f):f,new be(d,f.node,be.BLACK,y,v)}},s=function(l){let c=null,u=null,f=t.length;const d=function(y,v){const C=f-y,m=f;f-=y;const h=i(C+1,m),g=t[C],E=n?n(g):g;p(new be(E,g.node,v,null,h))},p=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),C=Math.pow(2,l.count-(y+1));v?d(C,be.BLACK):(d(C,be.BLACK),d(C,be.RED))}return u},o=new d1(t.length),a=s(o);return new et(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;const zr={};class ln{static get Default(){return S(zr&&ue,"ChildrenNode.ts has not been loaded"),Bc=Bc||new ln({".priority":zr},{".priority":ue}),Bc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return qt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Za(r,e.getCompare()):a=zr;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new ln(u,c)}addToIndexes(e,n){const r=Wa(this.indexes_,(i,s)=>{const o=wi(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===zr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(B.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Za(a,o.getCompare())}else return zr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new ln(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wa(this.indexes_,i=>{if(i===zr)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new ln(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns;class A{static get EMPTY_NODE(){return ns||(ns=new A(new et(Of),null,ln.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&s0(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ns}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ns:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ns:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=V(e);if(r===null)return n;{S(V(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ue,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+i0(this.getPriority().val())+":"),this.forEachChild(ue,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":D_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ko?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ue),i=n.getIterator(ue);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class f1 extends A{constructor(){super(new et(Of),A.EMPTY_NODE,ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const ko=new f1;Object.defineProperties(B,{MIN:{value:new B(Ii,A.EMPTY_NODE)},MAX:{value:new B(Nr,ko)}});r0.__EMPTY_NODE=A.EMPTY_NODE;xe.__childrenNodeConstructor=A;o1(ko);l1(ko);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=!0;function ge(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,ge(e))}if(!(t instanceof Array)&&h1){const n=[];let r=!1;if(De(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ge(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new B(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=Za(n,s1,o=>o.name,Of);if(r){const o=Za(n,ue.getCompare());return new A(s,ge(e),new ln({".priority":o},{".priority":ue}))}else return new A(s,ge(e),ln.Default)}else{let n=A.EMPTY_NODE;return De(t,(r,i)=>{if(qt(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}a1(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1 extends Ul{constructor(e){super(),this.indexPath_=e,S(!U(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}makePost(e,n){const r=ge(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,ko);return new B(Nr,e)}toString(){return eo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1 extends Ul{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=ge(e);return new B(n,r)}toString(){return".value"}}const g1=new m1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){return{type:"value",snapshotNode:t}}function ki(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function to(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function no(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function y1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(to(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ki(n,r)):o.trackChildChange(no(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,s)=>{n.hasChild(i)||r.trackChildChange(to(i,s))}),n.isLeafNode()||n.forEachChild(ue,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(no(i,s,o))}else r.trackChildChange(ki(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.indexedFilter_=new Mf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ro.getStartPost_(e),this.endPost_=ro.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ue,(o,a)=>{s.matches(new B(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ro(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new B(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(no(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(to(n,f));const v=a.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ki(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(to(c.name,c.node)),s.trackChildChange(ki(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _1(t){return t.loadsAllData()?new Mf(t.getIndex()):t.hasLimit()?new v1(t):new ro(t)}function xm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===g1?n="$value":t.index_===fi?n="$key":(S(t.index_ instanceof p1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ye(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ye(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ye(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Im(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends X_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Io("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=el.getListenId_(e,r),a={};this.listens_[o]=a;const l=xm(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),wi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const r=el.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xm(e._queryParams),r=e._path.toString(),i=new go;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Or(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ks(a.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(){return{value:null,children:new Map}}function c0(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=V(e);t.children.has(r)||t.children.set(r,tl());const i=t.children.get(r);e=q(e),c0(i,e,n)}}function Ju(t,e,n){t.value!==null?n(e,t.value):E1(t,(r,i)=>{const s=new K(e.toString()+"/"+r);Ju(i,s,n)})}function E1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&De(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=10*1e3,I1=30*1e3,k1=5*60*1e3;class b1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new x1(e);const r=km+(I1-km)*Math.random();Ss(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;De(e,(i,s)=>{s>0&&qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ss(this.reportStats_.bind(this),Math.floor(Math.random()*2*k1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function Bf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=At.ACK_USER_WRITE,this.source=Bf()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new nl(j(),n,this.revert)}}else return S(V(this.path)===e,"operationForChild called for unrelated child."),new nl(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new io(this.source,j()):new io(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=At.OVERWRITE}operationForChild(e){return U(this.path)?new Rr(this.source,j(),this.snap.getImmediateChild(e)):new Rr(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=At.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Rr(this.source,j(),n.value):new bi(this.source,j(),n)}else return S(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bi(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function T1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(y1(o.childName,o.snapshotNode))}),rs(t,i,"child_removed",e,r,n),rs(t,i,"child_added",e,r,n),rs(t,i,"child_moved",s,r,n),rs(t,i,"child_changed",e,r,n),rs(t,i,"value",e,r,n),i}function rs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>P1(t,a,l)),o.forEach(a=>{const l=C1(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function C1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function P1(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return{eventCache:t,serverCache:e}}function Ts(t,e,n,r){return Hl(new nr(e,n,r),t.serverCache)}function u0(t,e,n,r){return Hl(t.eventCache,new nr(e,n,r))}function rl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc;const N1=()=>(Uc||(Uc=new et(pC)),Uc);class Y{static fromObject(e){let n=new Y(null);return De(e,(r,i)=>{n=n.set(new K(r),i)}),n}constructor(e,n=N1()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(U(e))return null;{const r=V(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:ce(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=V(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new Y(null)}}set(e,n){if(U(e))return new Y(n,this.children);{const r=V(e),s=(this.children.get(r)||new Y(null)).set(q(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=V(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=V(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(U(e))return n;{const r=V(e),s=(this.children.get(r)||new Y(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(q(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=V(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),ce(n,i),r):new Y(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new Y(null))}}function Cs(t,e,n){if(U(e))return new Ot(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new Ot(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new Ot(s)}}}function Xu(t,e,n){let r=t;return De(n,(i,s)=>{r=Cs(r,ce(e,i),s)}),r}function bm(t,e){if(U(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new Ot(n)}}function Zu(t,e){return Br(t,e)!=null}function Br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function Sm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function Jn(t,e){if(U(e))return t;{const n=Br(t,e);return n!=null?new Ot(new Y(n)):new Ot(t.writeTree_.subtree(e))}}function ed(t){return t.writeTree_.isEmpty()}function Si(t,e){return d0(j(),t.writeTree_,e)}function d0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=d0(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){return m0(e,t)}function R1(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Cs(t.visibleWrites,e,n)),t.lastWriteId=r}function A1(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Xu(t.visibleWrites,e,n),t.lastWriteId=r}function D1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function L1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&O1(a,r.path)?i=!1:gt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return M1(t),!0;if(r.snap)t.visibleWrites=bm(t.visibleWrites,r.path);else{const a=r.children;De(a,l=>{t.visibleWrites=bm(t.visibleWrites,ce(r.path,l))})}return!0}else return!1}function O1(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(ce(t.path,n),e))return!0;return!1}function M1(t){t.visibleWrites=f0(t.allWrites,F1,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function F1(t){return t.visible}function f0(t,e,n){let r=Ot.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gt(n,o)?(a=ze(n,o),r=Cs(r,a,s.snap)):gt(o,n)&&(a=ze(o,n),r=Cs(r,j(),s.snap.getChild(a)));else if(s.children){if(gt(n,o))a=ze(n,o),r=Xu(r,a,s.children);else if(gt(o,n))if(a=ze(o,n),U(a))r=Xu(r,j(),s.children);else{const l=wi(s.children,V(a));if(l){const c=l.getChild(q(a));r=Cs(r,j(),c)}}}else throw Li("WriteRecord should have .snap or .children")}}return r}function h0(t,e,n,r,i){if(!r&&!i){const s=Br(t.visibleWrites,e);if(s!=null)return s;{const o=Jn(t.visibleWrites,e);if(ed(o))return n;if(n==null&&!Zu(o,j()))return null;{const a=n||A.EMPTY_NODE;return Si(o,a)}}}else{const s=Jn(t.visibleWrites,e);if(!i&&ed(s))return n;if(!i&&n==null&&!Zu(s,j()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(gt(c.path,e)||gt(e,c.path))},a=f0(t.allWrites,o,e),l=n||A.EMPTY_NODE;return Si(a,l)}}}function B1(t,e,n){let r=A.EMPTY_NODE;const i=Br(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Jn(t.visibleWrites,e);return n.forEachChild(ue,(o,a)=>{const l=Si(Jn(s,new K(o)),a);r=r.updateImmediateChild(o,l)}),Sm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Jn(t.visibleWrites,e);return Sm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function U1(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(Zu(t.visibleWrites,s))return null;{const o=Jn(t.visibleWrites,s);return ed(o)?i.getChild(n):Si(o,i.getChild(n))}}function H1(t,e,n,r){const i=ce(e,n),s=Br(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Jn(t.visibleWrites,i);return Si(o,r.getNode().getImmediateChild(n))}else return null}function V1(t,e){return Br(t.visibleWrites,e)}function z1(t,e,n,r,i,s,o){let a;const l=Jn(t.visibleWrites,e),c=Br(l,j());if(c!=null)a=c;else if(n!=null)a=Si(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&u.length<i;)f(p,r)!==0&&u.push(p),p=d.getNext();return u}else return[]}function W1(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function il(t,e,n,r){return h0(t.writeTree,t.treePath,e,n,r)}function Vf(t,e){return B1(t.writeTree,t.treePath,e)}function Tm(t,e,n,r){return U1(t.writeTree,t.treePath,e,n,r)}function sl(t,e){return V1(t.writeTree,ce(t.treePath,e))}function j1(t,e,n,r,i,s){return z1(t.writeTree,t.treePath,e,n,r,i,s)}function zf(t,e,n){return H1(t.writeTree,t.treePath,e,n)}function p0(t,e){return m0(ce(t.treePath,e),t.writeTree)}function m0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,no(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,to(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ki(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,no(r,e.snapshotNode,i.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const g0=new G1;class Wf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),s=j1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){return{filter:t}}function Y1(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function q1(t,e,n,r,i){const s=new $1;let o,a;if(n.type===At.OVERWRITE){const c=n;c.source.fromUser?o=td(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=ol(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===At.MERGE){const c=n;c.source.fromUser?o=J1(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=nd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===At.ACK_USER_WRITE){const c=n;c.revert?o=eP(t,e,c.path,r,i,s):o=X1(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===At.LISTEN_COMPLETE)o=Z1(t,e,n.path,r,s);else throw Li("Unknown operation type: "+n.type);const l=s.getChanges();return Q1(e,o,l),{viewCache:o,changes:l}}function Q1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(l0(rl(e)))}}function y0(t,e,n,r,i,s){const o=e.eventCache;if(sl(r,n)!=null)return e;{let a,l;if(U(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ar(e),u=c instanceof A?c:A.EMPTY_NODE,f=Vf(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=il(r,Ar(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){S(tr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Tm(r,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=q(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Tm(r,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=zf(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,s):a=o.getNode()}}return Ts(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function ol(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=V(n);if(!l.isCompleteForPath(n)&&tr(n)>1)return e;const y=q(n),C=l.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),p,C,y,g0,null)}const f=u0(e,c,l.isFullyInitialized()||U(n),u.filtersNodes()),d=new Wf(i,f,s);return y0(t,f,n,i,d,a)}function td(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Wf(i,e,s);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ts(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ts(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=q(n),p=a.getNode().getImmediateChild(f);let y;if(U(d))y=r;else{const v=u.getCompleteChild(f);v!=null?Df(d)===".priority"&&v.getChild(e0(d)).isEmpty()?y=v:y=v.updateChild(d,r):y=A.EMPTY_NODE}if(p.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),f,y,d,u,o);l=Ts(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cm(t,e){return t.eventCache.isCompleteForChild(e)}function J1(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ce(n,l);Cm(e,V(u))&&(a=td(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ce(n,l);Cm(e,V(u))||(a=td(t,a,u,c,i,s,o))}),a}function Pm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function nd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(n)?c=r:c=new Y(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),y=Pm(t,p,d);l=ol(t,l,new K(f),y,i,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const y=e.serverCache.getNode().getImmediateChild(f),v=Pm(t,y,d);l=ol(t,l,new K(f),v,i,s,o,a)}}),l}function X1(t,e,n,r,i,s,o){if(sl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ol(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let c=new Y(null);return l.getNode().forEachChild(fi,(u,f)=>{c=c.set(new K(u),f)}),nd(t,e,n,c,i,s,a,o)}else return e}else{let c=new Y(null);return r.foreach((u,f)=>{const d=ce(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),nd(t,e,n,c,i,s,a,o)}}function Z1(t,e,n,r,i){const s=e.serverCache,o=u0(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return y0(t,o,n,r,g0,i)}function eP(t,e,n,r,i,s){let o;if(sl(r,n)!=null)return e;{const a=new Wf(r,e,i),l=e.eventCache.getNode();let c;if(U(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=il(r,Ar(e));else{const f=e.serverCache.getNode();S(f instanceof A,"serverChildren would be complete if leaf node"),u=Vf(r,f)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=V(n);let f=zf(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,q(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,A.EMPTY_NODE,q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=il(r,Ar(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||sl(r,j())!=null,Ts(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Mf(r.getIndex()),s=_1(r);this.processor_=K1(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),u=new nr(l,o.isFullyInitialized(),i.filtersNodes()),f=new nr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Hl(f,u),this.eventGenerator_=new S1(this.query_)}get query(){return this.query_}}function nP(t){return t.viewCache_.serverCache.getNode()}function rP(t){return rl(t.viewCache_)}function iP(t,e){const n=Ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Nm(t){return t.eventRegistrations_.length===0}function sP(t,e){t.eventRegistrations_.push(e)}function Rm(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Am(t,e,n,r){e.type===At.MERGE&&e.source.queryId!==null&&(S(Ar(t.viewCache_),"We should always have a full cache before handling merges"),S(rl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=q1(t.processor_,i,e,n,r);return Y1(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,v0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function oP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(s,o)=>{r.push(ki(s,o))}),n.isFullyInitialized()&&r.push(l0(n.getNode())),v0(t,r,n.getNode(),e)}function v0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return T1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;class _0{constructor(){this.views=new Map}}function aP(t){S(!al,"__referenceConstructor has already been defined"),al=t}function lP(){return S(al,"Reference.ts has not been loaded"),al}function cP(t){return t.views.size===0}function jf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Am(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Am(o,e,n,r));return s}}function w0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=il(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=Vf(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const c=Hl(new nr(a,l,!1),new nr(r,i,!1));return new tP(e,c)}return o}function uP(t,e,n,r,i,s){const o=w0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),sP(o,n),oP(o,n)}function dP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=rr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Rm(c,n,r)),Nm(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Rm(l,n,r)),Nm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!rr(t)&&s.push(new(lP())(e._repo,e._path)),{removed:s,events:o}}function E0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xn(t,e){let n=null;for(const r of t.views.values())n=n||iP(r,e);return n}function x0(t,e){if(e._queryParams.loadsAllData())return zl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function I0(t,e){return x0(t,e)!=null}function rr(t){return zl(t)!=null}function zl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll;function fP(t){S(!ll,"__referenceConstructor has already been defined"),ll=t}function hP(){return S(ll,"Reference.ts has not been loaded"),ll}let pP=1;class Dm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=W1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function k0(t,e,n,r,i){return R1(t.pendingWriteTree_,e,n,r,i),i?zi(t,new Rr(Bf(),e,n)):[]}function mP(t,e,n,r){A1(t.pendingWriteTree_,e,n,r);const i=Y.fromObject(n);return zi(t,new bi(Bf(),e,i))}function Fn(t,e,n=!1){const r=D1(t.pendingWriteTree_,e);if(L1(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(j(),!0):De(r.children,o=>{s=s.set(new K(o),!0)}),zi(t,new nl(r.path,s,n))}else return[]}function bo(t,e,n){return zi(t,new Rr(Uf(),e,n))}function gP(t,e,n){const r=Y.fromObject(n);return zi(t,new bi(Uf(),e,r))}function yP(t,e){return zi(t,new io(Uf(),e))}function vP(t,e,n){const r=Gf(t,n);if(r){const i=Kf(r),s=i.path,o=i.queryId,a=ze(s,e),l=new io(Hf(o),a);return Yf(t,s,l)}else return[]}function b0(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||I0(o,e))){const l=dP(o,e,n,r);cP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,p)=>rr(p));if(u&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=xP(d);for(let y=0;y<p.length;++y){const v=p[y],C=v.query,m=P0(t,v);t.listenProvider_.startListening(Ps(C),so(t,C),m.hashFn,m.onComplete)}}}!f&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Ps(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Wl(d));t.listenProvider_.stopListening(Ps(d),p)}))}IP(t,c)}return a}function S0(t,e,n,r){const i=Gf(t,r);if(i!=null){const s=Kf(i),o=s.path,a=s.queryId,l=ze(o,e),c=new Rr(Hf(a),l,n);return Yf(t,o,c)}else return[]}function _P(t,e,n,r){const i=Gf(t,r);if(i){const s=Kf(i),o=s.path,a=s.queryId,l=ze(o,e),c=Y.fromObject(n),u=new bi(Hf(a),l,c);return Yf(t,o,u)}else return[]}function wP(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const y=ze(d,i);s=s||Xn(p,y),o=o||rr(p)});let a=t.syncPointTree_.get(i);a?(o=o||rr(a),s=s||Xn(a,j())):(a=new _0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=Xn(y,j());v&&(s=s.updateImmediateChild(p,v))}));const c=I0(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Wl(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=kP();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Vl(t.pendingWriteTree_,i);let f=uP(a,e,n,u,s,l);if(!c&&!o&&!r){const d=x0(a,e);f=f.concat(bP(t,e,d))}return f}function $f(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=Xn(a,l);if(c)return c});return h0(i,e,s,n,!0)}function EP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=ze(c,n);r=r||Xn(u,f)});let i=t.syncPointTree_.get(n);i?r=r||Xn(i,j()):(i=new _0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new nr(r,!0,!1):null,a=Vl(t.pendingWriteTree_,e._path),l=w0(i,e,a,s?o.getNode():A.EMPTY_NODE,s);return rP(l)}function zi(t,e){return T0(e,t.syncPointTree_,null,Vl(t.pendingWriteTree_,j()))}function T0(t,e,n,r){if(U(t.path))return C0(t,e,n,r);{const i=e.get(j());n==null&&i!=null&&(n=Xn(i,j()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=p0(r,o);s=s.concat(T0(a,l,c,u))}return i&&(s=s.concat(jf(i,t,r,n))),s}}function C0(t,e,n,r){const i=e.get(j());n==null&&i!=null&&(n=Xn(i,j()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=p0(r,o),u=t.operationForChild(o);u&&(s=s.concat(C0(u,a,l,c)))}),i&&(s=s.concat(jf(i,t,r,n))),s}function P0(t,e){const n=e.query,r=so(t,n);return{hashFn:()=>(nP(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?vP(t,n._path,r):yP(t,n._path);{const s=yC(i,n);return b0(t,n,null,s)}}}}function so(t,e){const n=Wl(e);return t.queryToTagMap.get(n)}function Wl(t){return t._path.toString()+"$"+t._queryIdentifier}function Gf(t,e){return t.tagToQueryMap.get(e)}function Kf(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function Yf(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=Vl(t.pendingWriteTree_,e);return jf(r,n,i,null)}function xP(t){return t.fold((e,n,r)=>{if(n&&rr(n))return[zl(n)];{let i=[];return n&&(i=E0(n)),De(r,(s,o)=>{i=i.concat(o)}),i}})}function Ps(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hP())(t._repo,t._path):t}function IP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Wl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function kP(){return pP++}function bP(t,e,n){const r=e._path,i=so(t,e),s=P0(t,n),o=t.listenProvider_.startListening(Ps(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!rr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!U(c)&&u&&rr(u))return[zl(u).query];{let d=[];return u&&(d=d.concat(E0(u).map(p=>p.query))),De(f,(p,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ps(u),so(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qf(n)}node(){return this.node_}}class Qf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new Qf(this.syncTree_,n)}node(){return $f(this.syncTree_,this.path_)}}const SP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Lm=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CP(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},CP=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},N0=function(t,e,n,r){return Jf(e,new Qf(n,t),r)},R0=function(t,e,n){return Jf(t,new qf(e),n)};function Jf(t,e,n){const r=t.getPriority().val(),i=Lm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Lm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(ue,(a,l)=>{const c=Jf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Zf(t,e){let n=e instanceof K?e:new K(e),r=t,i=V(n);for(;i!==null;){const s=wi(r.node.children,i)||{children:{},childCount:0};r=new Xf(i,r,s),n=q(n),i=V(n)}return r}function Wi(t){return t.node.value}function A0(t,e){t.node.value=e,rd(t)}function D0(t){return t.node.childCount>0}function PP(t){return Wi(t)===void 0&&!D0(t)}function jl(t,e){De(t.node.children,(n,r)=>{e(new Xf(n,t,r))})}function L0(t,e,n,r){n&&e(t),jl(t,i=>{L0(i,e,!0)})}function NP(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function So(t){return new K(t.parent===null?t.name:So(t.parent)+"/"+t.name)}function rd(t){t.parent!==null&&RP(t.parent,t.name,t)}function RP(t,e,n){const r=PP(n),i=qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,rd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,rd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/[\[\].#$\/\u0000-\u001F\u007F]/,DP=/[\[\].#$\u0000-\u001F\u007F]/,Hc=10*1024*1024,eh=function(t){return typeof t=="string"&&t.length!==0&&!AP.test(t)},O0=function(t){return typeof t=="string"&&t.length!==0&&!DP.test(t)},LP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),O0(t)},OP=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Cf(t)||t&&typeof t=="object"&&qt(t,".sv")},MP=function(t,e,n,r){$l(Tl(t,"value"),e,n)},$l=function(t,e,n){const r=n instanceof K?new JC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+pr(r));if(typeof e=="function")throw new Error(t+"contains a function "+pr(r)+" with contents = "+e.toString());if(Cf(e))throw new Error(t+"contains "+e.toString()+" "+pr(r));if(typeof e=="string"&&e.length>Hc/3&&Cl(e)>Hc)throw new Error(t+"contains a string greater than "+Hc+" utf8 bytes "+pr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(De(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!eh(o)))throw new Error(t+" contains an invalid key ("+o+") "+pr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);XC(r,o),$l(t,a,r),ZC(r)}),i&&s)throw new Error(t+' contains ".value" child '+pr(r)+" in addition to actual children.")}},FP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=eo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!eh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(QC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&gt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},BP=function(t,e,n,r){const i=Tl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];De(e,(o,a)=>{const l=new K(o);if($l(i,a,ce(n,l)),Df(l)===".priority"&&!OP(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),FP(i,s)},M0=function(t,e,n,r){if(!O0(n))throw new Error(Tl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),M0(t,e,n)},HP=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},VP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!eh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LP(n))throw new Error(Tl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function th(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!t0(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xt(t,e,n){th(t,n),WP(t,r=>gt(r,e)||gt(e,r))}function WP(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();bs&&Ne("event: "+n.toString()),Vi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P="repo_interrupt",GP=25;class KP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new Xf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YP(t,e,n){if(t.stats_=Rf(t.repoInfo_),t.forceRestClient_||EC())t.server_=new el(t.repoInfo_,(r,i,s,o)=>{Om(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new dn(t.repoInfo_,e,(r,i,s,o)=>{Om(t,r,i,s,o)},r=>{Mm(t,r)},r=>{QP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=SC(t.repoInfo_,()=>new b1(t.stats_,t.server_)),t.infoData_=new w1,t.infoSyncTree_=new Dm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=bo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nh(t,"connected",!1),t.serverSyncTree_=new Dm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);xt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function qP(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gl(t){return SP({timestamp:qP(t)})}function Om(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Wa(n,c=>ge(c));o=_P(t.serverSyncTree_,s,l,i)}else{const l=ge(n);o=S0(t.serverSyncTree_,s,l,i)}else if(r){const l=Wa(n,c=>ge(c));o=gP(t.serverSyncTree_,s,l)}else{const l=ge(n);o=bo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ti(t,s)),xt(t.eventQueue_,a,o)}function Mm(t,e){nh(t,"connected",e),e===!1&&eN(t)}function QP(t,e){De(e,(n,r)=>{nh(t,n,r)})}function nh(t,e,n){const r=new K("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=bo(t.infoSyncTree_,r,i);xt(t.eventQueue_,r,s)}function rh(t){return t.nextWriteId_++}function JP(t,e,n){const r=EP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ge(i).withIndex(e._queryParams.getIndex());wP(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bo(t.serverSyncTree_,e._path,s);else{const a=so(t.serverSyncTree_,e);o=S0(t.serverSyncTree_,e._path,s,a)}return xt(t.eventQueue_,e._path,o),b0(t.serverSyncTree_,e,n,null,!0),s},i=>(To(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function XP(t,e,n,r,i){To(t,"set",{path:e.toString(),value:n,priority:r});const s=Gl(t),o=ge(n,r),a=$f(t.serverSyncTree_,e),l=R0(o,a,s),c=rh(t),u=k0(t.serverSyncTree_,e,l,c,!0);th(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const y=d==="ok";y||$e("set at "+e+" failed: "+d);const v=Fn(t.serverSyncTree_,c,!y);xt(t.eventQueue_,e,v),id(t,i,d,p)});const f=sh(t,e);Ti(t,f),xt(t.eventQueue_,f,[])}function ZP(t,e,n,r){To(t,"update",{path:e.toString(),value:n});let i=!0;const s=Gl(t),o={};if(De(n,(a,l)=>{i=!1,o[a]=N0(ce(e,a),ge(l),t.serverSyncTree_,s)}),i)Ne("update() called with empty data.  Don't do anything."),id(t,r,"ok",void 0);else{const a=rh(t),l=mP(t.serverSyncTree_,e,o,a);th(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||$e("update at "+e+" failed: "+c);const d=Fn(t.serverSyncTree_,a,!f),p=d.length>0?Ti(t,e):e;xt(t.eventQueue_,p,d),id(t,r,c,u)}),De(n,c=>{const u=sh(t,ce(e,c));Ti(t,u)}),xt(t.eventQueue_,e,[])}}function eN(t){To(t,"onDisconnectEvents");const e=Gl(t),n=tl();Ju(t.onDisconnect_,j(),(i,s)=>{const o=N0(i,s,t.serverSyncTree_,e);c0(n,i,o)});let r=[];Ju(n,j(),(i,s)=>{r=r.concat(bo(t.serverSyncTree_,i,s));const o=sh(t,i);Ti(t,o)}),t.onDisconnect_=tl(),xt(t.eventQueue_,j(),r)}function tN(t){t.persistentConnection_&&t.persistentConnection_.interrupt($P)}function To(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function id(t,e,n,r){e&&Vi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function F0(t,e,n){return $f(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function ih(t,e=t.transactionQueueTree_){if(e||Kl(t,e),Wi(e)){const n=U0(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nN(t,So(e),n)}else D0(e)&&jl(e,n=>{ih(t,n)})}function nN(t,e,n){const r=n.map(c=>c.currentWriteId),i=F0(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=ze(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{To(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Fn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Kl(t,Zf(t.transactionQueueTree_,e)),ih(t,t.transactionQueueTree_),xt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)Vi(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{$e("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ti(t,e)}},o)}function Ti(t,e){const n=B0(t,e),r=So(n),i=U0(t,n);return rN(t,i,r),r}function rN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let u=!1,f;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=GP)u=!0,f="maxretry",i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=F0(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){$l("transaction failed: Data returned ",p,l.path);let y=ge(p);typeof p=="object"&&p!=null&&qt(p,".priority")||(y=y.updatePriority(d.getPriority()));const C=l.currentWriteId,m=Gl(t),h=R0(y,d,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=rh(t),o.splice(o.indexOf(C),1),i=i.concat(k0(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Fn(t.serverSyncTree_,C,!0))}else u=!0,f="nodata",i=i.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0))}xt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Kl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Vi(r[a]);ih(t,t.transactionQueueTree_)}function B0(t,e){let n,r=t.transactionQueueTree_;for(n=V(e);n!==null&&Wi(r)===void 0;)r=Zf(r,n),e=q(e),n=V(e);return r}function U0(t,e){const n=[];return H0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function H0(t,e,n){const r=Wi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);jl(e,i=>{H0(t,i,n)})}function Kl(t,e){const n=Wi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,A0(e,n.length>0?n:void 0)}jl(e,r=>{Kl(t,r)})}function sh(t,e){const n=So(B0(t,e)),r=Zf(t.transactionQueueTree_,e);return NP(r,i=>{Vc(t,i)}),Vc(t,r),L0(r,i=>{Vc(t,i)}),n}function Vc(t,e){const n=Wi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?A0(e,void 0):n.length=s+1,xt(t.eventQueue_,So(e),i);for(let o=0;o<r.length;o++)Vi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fm=function(t,e){const n=oN(t),r=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},oN=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=iN(t.substring(u,f)));const d=sN(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class lN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Df(this._path)}get ref(){return new kn(this._repo,this._path)}get _queryIdentifier(){const e=Im(this._queryParams),n=Pf(e);return n==="{}"?"default":n}get _queryObject(){return Im(this._queryParams)}isEqual(e){if(e=M(e),!(e instanceof oh))return!1;const n=this._repo===e._repo,r=t0(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+qC(this._path)}}class kn extends oh{constructor(e,n){super(e,n,new Ff,!1)}get parent(){const e=e0(this._path);return e===null?null:new kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class oo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=sd(this.ref,e);return new oo(this._node.getChild(n),r,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new oo(i,sd(this.ref,r),ue)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function V0(t,e){return t=M(t),t._checkNotDeleted("ref"),e!==void 0?sd(t._root,e):t._root}function sd(t,e){return t=M(t),V(t._path)===null?UP("child","path",e):M0("child","path",e),new kn(t._repo,ce(t._path,e))}function uN(t,e){t=M(t),HP("set",t._path),MP("set",e,t._path);const n=new go;return XP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function dN(t,e){BP("update",e,t._path);const n=new go;return ZP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function z0(t){t=M(t);const e=new cN(()=>{}),n=new ah(e);return JP(t._repo,t,n).then(r=>new oo(r,new kn(t._repo,t._path),t._queryParams.getIndex()))}class ah{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new aN("value",this,new oo(e.snapshotNode,new kn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lN(this,e,n):null}matches(e){return e instanceof ah?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}aP(kn);fP(kn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="FIREBASE_DATABASE_EMULATOR_HOST",od={};let hN=!1;function pN(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Oi(s);t.repoInfo_=new $_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function mN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fm(s,i),a=o.repoInfo,l;typeof process<"u"&&sm&&(l=sm[fN]),l?(s=`http://${l}?ns=${a.namespace}`,o=Fm(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new IC(t.name,t.options,e);VP("Invalid Firebase Database URL",o),U(o.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const u=yN(a,t,c,new xC(t,n));return new vN(u,t)}function gN(t,e){const n=od[e];(!n||n[t.key]!==t)&&_n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tN(t),delete n[t.key]}function yN(t,e,n,r){let i=od[e.name];i||(i={},od[e.name]=i);let s=i[t.toURLString()];return s&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new KP(t,hN,n,r),i[t.toURLString()]=s,s}class vN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kn(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function _N(t=Ev(),e){const n=cf(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=eI("database");r&&wN(n,...r)}return n}function wN(t,e,n,r={}){t=M(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Cr(r,s.repoInfo_.emulatorOptions))return;_n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ma(ma.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:tI(r.mockUserToken,t.app.options.projectId);o=new ma(a)}Oi(e)&&(pv(e),mv("Database",!0)),pN(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t){oC(Mi),Ei(new Pr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return mN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Yn(om,am,t),Yn(om,am,"esm2020")}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EN();/*! Capacitor: https://capacitorjs.com/ - MIT License */const xN=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,o)=>{n.platforms.set(s,o)},i=s=>{n.platforms.has(s)&&(n.currentPlatform=n.platforms.get(s))};return n.addPlatform=r,n.setPlatform=i,n},IN=t=>t.CapacitorPlatforms=xN(t),W0=IN(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});W0.addPlatform;W0.setPlatform;var Ci;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Ci||(Ci={}));class zc extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const kN=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},bN=t=>{var e,n,r,i,s;const o=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},l=a.Plugins=a.Plugins||{},c=t.CapacitorPlatforms,u=()=>o!==null?o.name:kN(t),f=((e=c==null?void 0:c.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||u,d=()=>f()!=="web",p=((n=c==null?void 0:c.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||d,y=x=>{const w=E.get(x);return!!(w!=null&&w.platforms.has(f())||m(x))},v=((r=c==null?void 0:c.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||y,C=x=>{var w;return(w=a.PluginHeaders)===null||w===void 0?void 0:w.find(R=>R.name===x)},m=((i=c==null?void 0:c.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||C,h=x=>t.console.error(x),g=(x,w,R)=>Promise.reject(`${R} does not have an implementation of "${w}".`),E=new Map,_=(x,w={})=>{const R=E.get(x);if(R)return console.warn(`Capacitor plugin "${x}" already registered. Cannot register plugins twice.`),R.proxy;const D=f(),J=m(x);let we;const Ft=async()=>(!we&&D in w?we=typeof w[D]=="function"?we=await w[D]():we=w[D]:o!==null&&!we&&"web"in w&&(we=typeof w.web=="function"?we=await w.web():we=w.web),we),Qe=(N,F)=>{var W,Le;if(J){const Ee=J==null?void 0:J.methods.find(Ce=>F===Ce.name);if(Ee)return Ee.rtype==="promise"?Ce=>a.nativePromise(x,F.toString(),Ce):(Ce,Je)=>a.nativeCallback(x,F.toString(),Ce,Je);if(N)return(W=N[F])===null||W===void 0?void 0:W.bind(N)}else{if(N)return(Le=N[F])===null||Le===void 0?void 0:Le.bind(N);throw new zc(`"${x}" plugin is not implemented on ${D}`,Ci.Unimplemented)}},ur=N=>{let F;const W=(...Le)=>{const Ee=Ft().then(Ce=>{const Je=Qe(Ce,N);if(Je){const It=Je(...Le);return F=It==null?void 0:It.remove,It}else throw new zc(`"${x}.${N}()" is not implemented on ${D}`,Ci.Unimplemented)});return N==="addListener"&&(Ee.remove=async()=>F()),Ee};return W.toString=()=>`${N.toString()}() { [capacitor code] }`,Object.defineProperty(W,"name",{value:N,writable:!1,configurable:!1}),W},bn=ur("addListener"),Sn=ur("removeListener"),T=(N,F)=>{const W=bn({eventName:N},F),Le=async()=>{const Ce=await W;Sn({eventName:N,callbackId:Ce},F)},Ee=new Promise(Ce=>W.then(()=>Ce({remove:Le})));return Ee.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Le()},Ee},O=new Proxy({},{get(N,F){switch(F){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return J?T:bn;case"removeListener":return Sn;default:return ur(F)}}});return l[x]=O,E.set(x,{name:x,proxy:O,platforms:new Set([...Object.keys(w),...J?[D]:[]])}),O},I=((s=c==null?void 0:c.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||_;return a.convertFileSrc||(a.convertFileSrc=x=>x),a.getPlatform=f,a.handleError=h,a.isNativePlatform=p,a.isPluginAvailable=v,a.pluginMethodNoop=g,a.registerPlugin=I,a.Exception=zc,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},SN=t=>t.Capacitor=bN(t),ao=SN(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Yl=ao.registerPlugin;ao.Plugins;class j0{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new ao.Exception(e,Ci.Unimplemented)}unavailable(e="not available"){return new ao.Exception(e,Ci.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const Bm=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Um=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class TN extends j0{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Um(i).trim(),s=Um(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=Bm(e.key),r=Bm(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Yl("CapacitorCookies",{web:()=>new TN});const CN=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),PN=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},NN=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let a,l;return Array.isArray(o)?(l="",o.forEach(c=>{a=e?encodeURIComponent(c):c,l+=`${s}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${s}=${a}`),`${r}&${l}`},"").substr(1):null,RN=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=PN(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,a]of Object.entries(t.data||{}))s.set(o,a);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((a,l)=>{s.append(l,a)});else for(const a of Object.keys(t.data))s.append(a,t.data[a]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class AN extends j0{async request(e){const n=RN(e,e.webFetchExtra),r=NN(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:a="text"}=s.ok?e:{};o.includes("application/json")&&(a="json");let l,c;switch(a){case"arraybuffer":case"blob":c=await s.blob(),l=await CN(c);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const u={};return s.headers.forEach((f,d)=>{u[d]=f}),{data:l,headers:u,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Yl("CapacitorHttp",{web:()=>new AN});const DN=Yl("Browser",{web:()=>nf(()=>import("./web-BW4fhihc.js"),[],import.meta.url).then(t=>new t.BrowserWeb)}),LN={apiKey:"AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",authDomain:"kuryeprov44.firebaseapp.com",databaseURL:"https://kuryeprov44-default-rtdb.firebaseio.com",projectId:"kuryeprov44",storageBucket:"kuryeprov44.firebasestorage.app",messagingSenderId:"177653241936",appId:"1:177653241936:web:4130a534c4bf7cb05fd955",measurementId:"G-313RD4XLZW"},$0=wv(LN),lh=N_($0),G0=_N($0);async function ON(){try{if(ao.isNativePlatform())return await DN.open({url:"https://kuryeprov44.web.app?login=true",presentationStyle:"popover"}),{type:"external_browser"};{const{GoogleAuthProvider:t,signInWithPopup:e}=await nf(async()=>{const{GoogleAuthProvider:i,signInWithPopup:s}=await Promise.resolve().then(()=>sC);return{GoogleAuthProvider:i,signInWithPopup:s}},void 0,import.meta.url),n=new t,r=await e(lh,n);return BN(r.user).catch(console.error),{success:!0,user:r.user}}}catch(t){return console.error("Login Error:",t),{success:!1,error:t.message}}}async function MN(){return null}async function FN(){await u_(lh),localStorage.removeItem("firebase_uid")}async function BN(t){const e=V0(G0,"users/"+t.uid),n=await z0(e),r=new Date().toISOString();n.exists()?await dN(e,{lastLogin:r,displayName:t.displayName,photoURL:t.photoURL,email:t.email}):await uN(e,{uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,role:"user",isBanned:!1,dailyLimit:1e3,createdAt:r,lastLogin:r}),localStorage.setItem("firebase_uid",t.uid)}async function UN(t){if(!t)return{allowed:!1,reason:"Giriş yapılmamış."};try{const e=await z0(V0(G0,"users/"+t));if(e.exists()){const n=e.val();return n.isBanned?{allowed:!1,reason:"HESABINIZ YASAKLANMIŞTIR.",status:"banned"}:{allowed:!0,data:n}}return{allowed:!1,reason:"Kullanıcı kaydı bulunamadı."}}catch{return{allowed:!1,reason:"Sunucu hatası."}}}const HN="yal42d-debug",VN="kurye_pro",zN=`https://raw.githubusercontent.com/${HN}/${VN}/main/updates`;async function K0(){const t=await MN();return t&&t.success,new Promise(e=>{const n=lh.onAuthStateChanged(async r=>{if(n(),r){const i=await UN(r.uid);i.allowed?e({allowed:!0,user:i.data,status:"authorized"}):(await FN(),e({allowed:!1,reason:i.reason,status:i.status}))}else e({allowed:!1,reason:"Giriş Yapılmalı",status:"login_required"})})})}async function WN(){return await ON()}async function jN(){const t=await K0();if(!t.allowed)throw new Error(t.reason);const e=await fetch(`${zN}/secure_db.txt?t=${Date.now()}`);if(!e.ok)throw new Error("Veri indirilemedi.");const r=(await e.text()).match(/encryptedData\s*=\s*"([^"]+)"/);if(r&&r[1]){const i=r[1];if(i.startsWith("KRYSEC_")){const s=i.replace("KRYSEC_","").split("").reverse().join(""),o=decodeURIComponent(escape(window.atob(s)));return JSON.parse(o)}}throw new Error("Veri formatı hatalı.")}function $N(){typeof document>"u"||document.body.classList.add("min-h-screen","pb-32","bg-[#0f172a]")}function GN(){typeof window>"u"||Object.assign(window,{addCalculatedToPayment:WR,addCheckItem:lR,addDialerNumber:YR,addFuelEntry:xR,addNote:PR,addRepeatTransaction:JN,backupData:yR,calculateFuelConsumption:wR,calculateFutureBalance:jR,calculateMaintenance:ew,calculatePerf:Ql,calculateProfit:cr,callDialerNumber:QR,changeDays:dR,changeMonth:tR,changePacketCount:hR,changeSimulationDays:zR,clearDialerHistory:XR,clearFuelForm:kR,clearFuelHistory:IR,clearPacketInputs:BR,clearTransactionHistory:UR,closeDialerModal:KR,closeNoteModal:TR,deleteAccumulatedPayment:SR,deleteCheckItem:cR,deleteNote:NR,deleteRepeatTransaction:XN,goToToday:nR,loadDoors:lw,loadStreets:aw,openDialerModal:GR,openExternalMap:iA,openGoogleWeather:iR,openNoteModal:Po,posTetikle:VR,processPayment:ZN,quickSearchAddress:ZR,selectQuickResult:eA,removeDialerNumber:qR,resetAllCounters:pR,resetPerfForm:DR,resetPriceDefaults:HR,restoreData:vR,saveExpenses:gR,saveFinancialData:Q0,saveFuelUnitData:ER,saveOrderHistory:JR,savePerfMemoryAuto:hh,savePriceSettings:iw,scrollToResults:MR,searchAndShowMap:cw,setDurationMode:q0,setNoteType:CR,setPerfTime:AR,switchChecklist:aR,switchTab:FR,toggleCheckItem:tw,toggleManualMode:LR,toggleMapModal:nA,toggleSettings:OR,toggleSideDock:$R,updateEarningCalculation:Ni})}let Pt=4,yt={single:110,multi:40,avm:10,night:20},cl="weekday",ve={},zt=null,Y0="expense",lo=new Date,Co="start",Ur=[],Hr=[],ft={currentKm:0,lastOilKm:0,oilInterval:2e3},Ue={single:0,multi:0},se={},$t=[],Ie={fuel:250,extra:"",extraVatOnly1:"",extraVatOnly2:"",vatDescription:"",maint:3e3,acc:1e3,other:""},Fe="day";const Rn=[{min:0,max:19,weekday:0,friday:0,saturday:0,sunday:0},{min:20,max:21,weekday:207,friday:289,saturday:434,sunday:521},{min:22,max:25,weekday:259,friday:363,saturday:545,sunday:654},{min:26,max:29,weekday:317,friday:444,saturday:665,sunday:798},{min:30,max:33,weekday:379,friday:531,saturday:796,sunday:955},{min:34,max:37,weekday:446,friday:624,saturday:936,sunday:1123},{min:38,max:41,weekday:517,friday:723,saturday:1085,sunday:1302},{min:42,max:45,weekday:592,friday:829,saturday:1243,sunday:1492},{min:46,max:49,weekday:671,friday:940,saturday:1410,sunday:1692},{min:50,max:53,weekday:783,friday:1096,saturday:1644,sunday:1973},{min:54,max:57,weekday:931,friday:1303,saturday:1954,sunday:2345},{min:58,max:61,weekday:1089,friday:1524,saturday:2286,sunday:2744},{min:62,max:65,weekday:1257,friday:1760,saturday:2640,sunday:3168},{min:66,max:69,weekday:1435,friday:2009,saturday:3014,sunday:3617},{min:70,max:999,weekday:1623,friday:2272,saturday:3408,sunday:4089}];let wn=[],An=10,Wt=[];function KN(){uR(),rw(),mR(),eR(),oR(),sR(),rR(),cr(),Qt(),ew(),RR(),fR(),_R(),qN(),QN(),ql(),sw(),ch(),YN(),q0("day");const t=document.getElementById("scrollDirectionBtn"),e=document.getElementById("scrollDirectionIcon");let n="bottom";t&&e&&(window.addEventListener("scroll",function(){const r=window.scrollY,i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);r<i/2?(n="bottom",e.className="fa-solid fa-arrow-down"):(n="top",e.className="fa-solid fa-arrow-up"),t.classList.toggle("visible",r>100)},{passive:!0}),t.addEventListener("click",function(){window.scrollTo({top:n==="bottom"?document.body.scrollHeight:0,behavior:"smooth"})})),tA()}function q0(t){Fe=t,["btnDurDay","btnDurWeek","btnDurMonth"].forEach(n=>{document.getElementById(n).classList.remove("active"),document.getElementById(n).classList.add("inactive")});const e=t==="day"?"btnDurDay":t==="week"?"btnDurWeek":"btnDurMonth";document.getElementById(e).classList.add("active"),document.getElementById(e).classList.remove("inactive"),t==="day"?Pt=0:t==="week"?Pt=1:Pt=4,document.getElementById("daysOffDisplay").innerText=Pt,cr()}function YN(){const t=["manualPaymentDate","packetPaymentDate"],e=new Date,n=[];let r=new Date(e);for(;r.getDay()!==3;)r.setDate(r.getDate()+1);for(let i=0;i<4;i++){const s=r.toISOString().split("T")[0],o=r.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"});n.push({value:s,label:o}),r.setDate(r.getDate()+7)}t.forEach(i=>{const s=document.getElementById(i);s&&(s.innerHTML="",n.forEach(o=>{const a=document.createElement("option");a.value=o.value,a.innerText=o.label,s.appendChild(a)}))})}function qN(){const t=JSON.parse(localStorage.getItem("kurye_financial")||"{}");t.bank&&(document.getElementById("bankAccount").value=t.bank),t.debt&&(document.getElementById("creditDebt").value=t.debt),J0()}function Q0(){const t={bank:parseFloat(document.getElementById("bankAccount").value)||0,debt:parseFloat(document.getElementById("creditDebt").value)||0};localStorage.setItem("kurye_financial",JSON.stringify(t)),J0()}function J0(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;document.getElementById("netBalance").innerText=(t-e).toLocaleString("tr-TR")+" ₺"}function QN(){const t=localStorage.getItem("kurye_repeat");t&&(wn=JSON.parse(t))}function JN(){const t=document.getElementById("repeatDay").value,e=document.getElementById("repeatDesc").value,n=parseFloat(document.getElementById("repeatAmount").value),r=document.getElementById("repeatType").value;if(!t||!e){const i=document.querySelector(".simulation-card");i.classList.add("shake-animation"),setTimeout(()=>i.classList.remove("shake-animation"),500);return}wn.push({day:t,description:e,amount:n||0,type:r}),localStorage.setItem("kurye_repeat",JSON.stringify(wn)),X0(),Qt(),Ke("Eklendi","Tekrarlayan işlem kaydedildi.")}function X0(){const t=document.getElementById("repeatTransactionsList");t.innerHTML="",wn.forEach((e,n)=>{let r=e.type==="income"?"GELİR (+)":e.type==="expense"?"GİDER (-)":"AKTİVİTE",i=e.type==="income"?"text-green-400":e.type==="expense"?"text-red-400":"text-yellow-400",s=e.type==="activity"?"":e.type==="income"?`+${e.amount}₺`:`-${e.amount}₺`;t.innerHTML+=`
                    <div class="bg-slate-800/50 p-2 rounded-lg flex justify-between items-center border border-white/5">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[10px] text-gray-400">Her ayın ${e.day}. günü • <span class="${i} font-bold">${r} ${s}</span></div>
                        </div>
                        <button onclick="deleteRepeatTransaction(${n})" class="text-gray-500 hover:text-red-400"><i class="fa-solid fa-trash"></i></button>
                    </div>`})}function XN(t){wn.splice(t,1),localStorage.setItem("kurye_repeat",JSON.stringify(wn)),X0(),Qt()}function ql(){const t=localStorage.getItem("kurye_accumulated_payments");t&&(se=JSON.parse(t));const e=localStorage.getItem("kurye_transaction_history");e&&($t=JSON.parse(e));const n=Object.keys(se).sort();let r=n.length>0?n[0]:"--.--.----",i=n.length>0?se[r]:0,s=0;for(let a in se)s+=se[a];document.getElementById("nextPaymentAmount").innerText=i.toLocaleString("tr-TR")+" ₺",document.getElementById("nextPaymentDate").innerText=r.split("-").reverse().join("."),document.getElementById("accumulatedTotal").innerText=s.toLocaleString("tr-TR")+" ₺";const o=new Date().toISOString().split("T")[0];n.includes(o)?(document.getElementById("paymentDayInfo").innerText="BUGÜN ÖDEME GÜNÜ",document.getElementById("paymentDayInfo").className="font-bold text-emerald-400 animate-pulse"):(document.getElementById("paymentDayInfo").innerText="Her Çarşamba",document.getElementById("paymentDayInfo").className="font-bold text-purple-400"),Z0()}async function ZN(){const t=Object.keys(se).sort();if(t.length===0){Ke("Bilgi","Ödenecek tutar yok.");return}const e=t[0],n=se[e];if(!await ji(`₺${n.toLocaleString("tr-TR")} tutarındaki ${e} tarihli ödemeyi banka hesabına aktarmak istiyor musunuz?`,"Ödeme Al"))return;let i=parseFloat(document.getElementById("bankAccount").value)||0;i+=n,document.getElementById("bankAccount").value=i,delete se[e],$t.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"payment",amount:n,description:"Banka Aktarımı"}),Q0(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(se)),localStorage.setItem("kurye_transaction_history",JSON.stringify($t)),ql(),Qt(),Ke("Başarılı","Ödeme banka hesabına eklendi.")}function Z0(){const t=document.getElementById("transactionHistory");t.innerHTML="",$t.length===0&&(t.innerHTML='<div class="text-center text-[10px] text-gray-500 italic py-4">İşlem yok.</div>'),$t.forEach(e=>{let n=e.type==="income"?"transaction-income":e.type==="payment"?"transaction-payment":"transaction-expense";t.innerHTML+=`
                    <div class="transaction-history-item ${n} flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[9px] text-gray-400">${e.date}</div>
                        </div>
                        <div class="text-sm font-bold text-white">${e.amount.toLocaleString("tr-TR")} ₺</div>
                    </div>
                `})}function eR(){const t=localStorage.getItem("kurye_calendar");t&&(ve=JSON.parse(t)),ch()}function Qt(){const t=document.getElementById("calendarGrid");t.innerHTML="";const e=lo.getFullYear(),n=lo.getMonth(),r=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];document.getElementById("currentMonthLabel").innerText=r[n],document.getElementById("currentYearLabel").innerText=e;const i=new Date(e,n,1).getDay(),s=i===0?6:i-1,o=new Date(e,n+1,0).getDate();for(let u=0;u<s;u++){const f=document.createElement("div");f.className="calendar-day opacity-50 bg-slate-800/50",t.appendChild(f)}const a=new Date;let l=0,c=0;for(let u=1;u<=o;u++){const f=document.createElement("div");f.className="calendar-day flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 relative",u===a.getDate()&&n===a.getMonth()&&e===a.getFullYear()&&f.classList.add("today"),f.innerHTML=`<span class="text-sm font-bold text-gray-300">${u}</span>`;const d=`${e}-${String(n+1).padStart(2,"0")}-${String(u).padStart(2,"0")}`,p=document.createElement("div");p.className="dots-container",ve[d]&&ve[d].forEach(y=>{y.type==="income"&&(p.innerHTML+='<div class="dot bg-green-500"></div>',l+=y.amount),y.type==="expense"&&(p.innerHTML+='<div class="dot bg-red-500"></div>',c+=y.amount),y.type==="activity"&&(p.innerHTML+='<div class="dot bg-yellow-500"></div>')}),wn.forEach(y=>{parseInt(y.day)===u&&(p.innerHTML+='<div class="dot bg-blue-400"></div>')}),se[d]&&(p.innerHTML+='<div class="dot bg-purple-500 border border-white"></div>'),f.appendChild(p),f.onclick=()=>Po(d),t.appendChild(f)}document.getElementById("monthlyExtraIncome").innerText="+"+l.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyExpenseSummary").innerText="-"+c.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyNetSummary").innerText=(l-c).toLocaleString("tr-TR")+" ₺",ch()}function tR(t){lo.setMonth(lo.getMonth()+t),Qt()}function nR(){lo=new Date,Qt()}function ch(){const t=document.getElementById("todayActivities"),e=document.getElementById("upcomingActivities"),n=new Date().toISOString().split("T")[0];let r="",i="",s=!1;Object.keys(ve).sort().forEach(l=>{l>=n&&ve[l].forEach(u=>{const f=l===n,p=new Date(l).toLocaleDateString("tr-TR",{day:"numeric",month:"long"});let y="GİDER (-)",v="text-red-400",C=u.amount?`-${u.amount}₺`:"",m="border-red-500/20";u.type==="income"?(y="GELİR (+)",v="text-green-400",C=`+${u.amount}₺`,m="border-green-500/20"):u.type==="activity"&&(y="AKTİVİTE",v="text-yellow-400",C="",m="border-yellow-500/20");const h=`
                        <div onclick="openNoteModal('${l}')" class="activity-item flex items-center justify-between bg-slate-800/60 p-3 rounded-xl border ${m} mb-2 cursor-pointer hover:bg-slate-800">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-bold ${v} border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">${y}</span>
                                    <span class="text-[9px] text-gray-400">${f?"Bugün":p}</span>
                                </div>
                                <p class="text-xs font-bold text-white">${u.note}</p>
                            </div>
                            <span class="text-sm font-bold ${v}">${C}</span>
                        </div>`;f?r+=h:(i+=h,s=!0)})}),Object.keys(se).sort().forEach(l=>{if(l>=n){const c=l===n,f=new Date(l).toLocaleDateString("tr-TR",{day:"numeric",month:"long"}),d=`
                    <div onclick="openNoteModal('${l}')" class="activity-item flex items-center justify-between bg-purple-900/20 p-3 rounded-xl border border-purple-500/30 mb-2 cursor-pointer hover:bg-purple-900/30">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-[10px] font-bold text-purple-400 border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">ÖDEME</span>
                                <span class="text-[9px] text-purple-300">${c?"Bugün":f}</span>
                            </div>
                            <p class="text-xs font-bold text-white">Ödeme Bekliyor</p>
                        </div>
                        <span class="text-sm font-bold text-white">${se[l].toLocaleString("tr-TR")} ₺</span>
                    </div>`;c?r+=d:(i+=d,s=!0)}}),r||(r='<div class="text-center text-xs text-gray-500 italic py-2">Bugün için planlanan bir şey yok.</div>'),s||(i='<div class="text-center text-[10px] text-gray-600 py-2">Yaklaşan kayıt yok.</div>'),t.innerHTML=r,e.innerHTML=i}async function rR(){try{const r=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${37.8714}&longitude=${32.4846}&current_weather=true&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)).json();document.getElementById("currentTemp").innerText=`${Math.round(r.current_weather.temperature)}°`,document.getElementById("currentWeatherDesc").innerText=Hm(r.current_weather.weathercode);const i=document.getElementById("hourlyForecast");i.innerHTML="";const s=new Date().getHours();for(let a=0;a<24;a++){const l=new Date(r.hourly.time[a]);l.getHours()>=s&&(i.innerHTML+=`
                            <div class="text-center shrink-0">
                                <div class="bg-slate-800 rounded-xl p-3 min-w-[70px] border border-white/5">
                                    <div class="text-xs font-bold text-gray-300">${l.getHours()}:00</div>
                                    <div class="text-2xl my-2">${Vm(r.hourly.weathercode[a])}</div>
                                    <div class="text-sm font-bold text-white">${Math.round(r.hourly.temperature_2m[a])}°</div>
                                </div>
                            </div>`)}const o=document.getElementById("weeklyForecast");o.innerHTML="";for(let a=0;a<7;a++){const c=new Date(r.daily.time[a]).toLocaleDateString("tr-TR",{weekday:"long"}),u=r.daily.weathercode[a],d=u>=51&&u<=67||u>=80&&u<=82?"weather-row rain-alert-bg p-2 rounded-lg":"weather-row p-2";o.innerHTML+=`
                        <div class="${d} flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="w-6 text-center">${Vm(u)}</span>
                                <div>
                                    <div class="text-xs font-bold text-white">${c}</div>
                                    <div class="text-[10px] text-gray-400">${Hm(u)}</div>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-gray-300">
                                <span class="text-white">${Math.round(r.daily.temperature_2m_max[a])}°</span> / ${Math.round(r.daily.temperature_2m_min[a])}°
                            </div>
                        </div>`}}catch(t){console.error("Hava durumu hatası:",t)}}function Hm(t){return t===0?"Açık":t>=1&&t<=3?"Parçalı Bulutlu":t>=45&&t<=48?"Sisli":t>=51&&t<=67?"Yağmurlu":t>=71&&t<=77?"Karlı":t>=80&&t<=82?"Sağanak":t>=95?"Fırtına":"Bulutlu"}function Vm(t){return t===0?'<i class="fa-solid fa-sun text-yellow-400"></i>':t>=1&&t<=3?'<i class="fa-solid fa-cloud-sun text-gray-300"></i>':t>=45&&t<=48?'<i class="fa-solid fa-smog text-gray-400"></i>':t>=51&&t<=67?'<i class="fa-solid fa-cloud-rain text-blue-400"></i>':t>=71&&t<=77?'<i class="fa-regular fa-snowflake text-white"></i>':'<i class="fa-solid fa-cloud text-gray-500"></i>'}function iR(){window.open("https://www.google.com/search?q=hava+durumu+konya","_blank")}function sR(){const t=localStorage.getItem("kurye_garage");t&&(ft=JSON.parse(t)),document.getElementById("currentKm").value=ft.currentKm||"",document.getElementById("lastOilKm").value=ft.lastOilKm||"",document.getElementById("oilInterval").value=ft.oilInterval||2e3}function ew(){ft.currentKm=parseFloat(document.getElementById("currentKm").value)||0,ft.lastOilKm=parseFloat(document.getElementById("lastOilKm").value)||0,ft.oilInterval=parseFloat(document.getElementById("oilInterval").value)||2e3,localStorage.setItem("kurye_garage",JSON.stringify(ft));let e=(ft.currentKm-ft.lastOilKm)/ft.oilInterval*100;e>100&&(e=100),e<0&&(e=0);const n=document.getElementById("oilProgressBar");n.style.width=e+"%",document.getElementById("oilPercentText").innerText="%"+e.toFixed(0);const r=document.getElementById("oilStatusText");e<50?(n.className="bg-green-500 h-full transition-all",r.innerText="Durum İyi",r.className="text-green-400 font-bold"):e<80?(n.className="bg-yellow-500 h-full transition-all",r.innerText="Bakım Yaklaşıyor",r.className="text-yellow-400 font-bold"):(n.className="bg-red-500 h-full transition-all",r.innerText="BAKIM GEREKLİ!",r.className="text-red-500 font-bold animate-pulse")}function oR(){const t=localStorage.getItem("kurye_checklist_start"),e=localStorage.getItem("kurye_checklist_end");t&&(Ur=JSON.parse(t)),e&&(Hr=JSON.parse(e)),Pi()}function aR(t){Co=t,document.getElementById("btnCheckStart").className=t==="start"?"toggle-btn active":"toggle-btn inactive",document.getElementById("btnCheckEnd").className=t==="end"?"toggle-btn active":"toggle-btn inactive";const e=document.getElementById("checkHeaderTitle"),n=document.getElementById("checkHeaderSub"),r=document.getElementById("checkHeaderIcon"),i=document.getElementById("checkHeaderCard");t==="start"?(e.innerText="İşe Başlarken",n.innerText="Unutma: Eksik malzeme = Zaman kaybı.",r.className="fa-solid fa-backpack text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",i.className="bg-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/20 transition-colors duration-500"):(e.innerText="İşten Dönerken",n.innerText="Yarına hazırlık bugünden başlar.",r.className="fa-solid fa-moon text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",i.className="bg-purple-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-purple-900/20 transition-colors duration-500"),Pi()}function Pi(){const t=Co==="start"?Ur:Hr,e=document.getElementById("checklistContainer");e.innerHTML="",t.length===0?document.getElementById("emptyListMsg").classList.remove("hidden"):document.getElementById("emptyListMsg").classList.add("hidden"),t.forEach((n,r)=>{const i=document.createElement("div");i.className=`check-item ${n.checked?"checked":""} bg-slate-800 p-3 rounded-xl flex items-center justify-between cursor-pointer`,i.innerHTML=`<span class="font-bold text-sm text-white flex-1">${n.text}</span><button onclick="deleteCheckItem(event, ${r})" class="text-gray-500 hover:text-red-400 p-2"><i class="fa-solid fa-trash"></i></button>`,i.onclick=s=>{s.target.tagName!=="BUTTON"&&s.target.tagName!=="I"&&tw(r)},e.appendChild(i)})}function lR(){const t=document.getElementById("newCheckItem").value;if(!t)return;(Co==="start"?Ur:Hr).push({text:t,checked:!1}),ul(),document.getElementById("newCheckItem").value="",Pi()}function tw(t){const e=Co==="start"?Ur:Hr;e[t].checked=!e[t].checked,ul(),Pi(),e.length>0&&e.every(n=>n.checked)&&(Ke("Harika!","Tüm ürünler seçildi, çanta hazır!"),setTimeout(()=>{e.forEach(n=>n.checked=!1),ul(),Pi()},1500))}function cR(t,e){t.stopPropagation(),(Co==="start"?Ur:Hr).splice(e,1),ul(),Pi()}function ul(){localStorage.setItem("kurye_checklist_start",JSON.stringify(Ur)),localStorage.setItem("kurye_checklist_end",JSON.stringify(Hr))}function uR(){const t=new Date().getDay();Xo(t===0?"sunday":t===5?"friday":t===6?"saturday":"weekday")}function Xo(t){cl=t;const e={weekday:"Pazartesi - Perşembe",friday:"Cuma Günü",saturday:"Cumartesi Günü",sunday:"Pazar Günü"};document.getElementById("selectedDayLabel")&&(document.getElementById("selectedDayLabel").innerText=e[t]),document.getElementById("speedDayLabel")&&(document.getElementById("speedDayLabel").innerText=e[t]),cr(),typeof Ni=="function"&&Ni()}function dR(t){Pt+=t,Pt<0&&(Pt=0),Pt>30&&(Pt=30),document.getElementById("daysOffDisplay").innerText=Pt,Fe="month",["btnDurDay","btnDurWeek","btnDurMonth"].forEach(e=>{document.getElementById(e).classList.remove("active"),document.getElementById(e).classList.add("inactive")}),cr()}function cr(){let t;Fe==="day"?t=1:Fe==="week"?t=6:t=30-Pt,document.getElementById("calculatedWorkDays").innerText=t;const e=parseFloat(document.getElementById("dailyFuel").value)||0,n=parseFloat(document.getElementById("extraVat").value)||0,r=parseFloat(document.getElementById("extraVatOnly1").value)||0,i=parseFloat(document.getElementById("extraVatOnly2").value)||0,s=parseFloat(document.getElementById("maintCost").value)||0,o=parseFloat(document.getElementById("accCost").value)||0,a=parseFloat(document.getElementById("otherCost").value)||0;let l=0;if(document.getElementById("manualModeToggle").checked)l=parseFloat(document.getElementById("manualIncomeVal").value)||0;else{const w=parseFloat(document.getElementById("single").value)||0,R=parseFloat(document.getElementById("multi").value)||0,D=parseFloat(document.getElementById("avm").value)||0,J=parseFloat(document.getElementById("night").value)||0,we=parseFloat(document.getElementById("avgKmProfit").value)||0,Ft=ov(we);we>0?(document.getElementById("profitKmInfo").style.display="block",document.getElementById("profitKmRate").innerText=Ft):document.getElementById("profitKmInfo").style.display="none";const Qe=w+R,ur=Qe*Ft,bn=w*yt.single+R*yt.multi,Sn=D*yt.avm+J*yt.night+ur,T=bn+Sn,O=Bu(Qe,Rn,cl).current,N=T+O;document.getElementById("dispDailyMoney").innerText=N.toLocaleString("tr-TR"),document.getElementById("dispTotalPackets").innerText=Qe,document.getElementById("bonusAmount").innerText=O.toLocaleString("tr-TR");const F=Bu(Qe,Rn,cl),W=document.getElementById("bonusBar"),Le=document.getElementById("nextBonusPkt");if(document.getElementById("currentTierInfo").innerText=F.current.toLocaleString("tr-TR")+" TL",F.nextTarget>0){let mw=Math.min(100,Qe/F.nextTarget*100);W.style.width=`${mw}%`,Le.innerText=F.nextTarget,document.getElementById("nextTierInfo").innerText=F.nextValue.toLocaleString("tr-TR")+" TL"}else W.style.width="100%",Le.innerText="MAX",document.getElementById("nextTierInfo").innerText="MAX";const Ee=Ko(Qe,Rn,"weekday"),Ce=Ko(Qe,Rn,"friday"),Je=Ko(Qe,Rn,"saturday"),It=Ko(Qe,Rn,"sunday"),dw=T+Ee,fw=T+Ce,hw=T+Je,pw=T+It,gh=(dw*18+fw*4+hw*4+pw*4)/30;Fe==="day"?l=N:l=gh*t}let u=0,f=0;Fe==="day"?(u=0,f=0):Fe==="week"?(u=s/4,f=o/4):(u=s,f=o);const d=.2;let p=e;Fe==="week"?p=e*7:Fe==="month"&&(p=e*t);const y=Fe==="day"?n/30:Fe==="week"?n/4:n,v=Fe==="day"?a/30:Fe==="week"?a/4:a,C=Fe==="day"?(r+i)/30:Fe==="week"?(r+i)/4:r+i,m=p+y,h=u+f+v,g=m+h+C,E=l-l/(1+d),_=m-m/(1+d),I=Math.max(0,E-_-C),x=l-g-I;document.getElementById("resGross").innerText=l.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resExpenses").innerText=g.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resVatDeductions").innerText=(C+_).toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resVat").innerText=I.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resNet").innerText=x.toLocaleString("tr-TR",{maximumFractionDigits:0})}function fR(){const t=localStorage.getItem("kurye_packet_counter");t?Ue=JSON.parse(t):Ue={single:0,multi:0},uh(),dh();const e=localStorage.getItem("kurye_instant_fuel");e!==null&&(document.getElementById("perfFuelInput").value=e),Ni()}function nw(){localStorage.setItem("kurye_packet_counter",JSON.stringify(Ue)),sw()}function hR(t,e){Ue[t]+=e,Ue[t]<0&&(Ue[t]=0),uh(),dh(),Ni(),nw()}async function pR(){await ji("Tüm paket sayaçlarını sıfırlamak istediğinize emin misiniz?","Sayaç Sıfırlama")&&(Ue={single:0,multi:0},uh(),dh(),localStorage.setItem("kurye_instant_fuel",250),document.getElementById("perfFuelInput").value=250,Ni(),nw(),Ke("Sıfırlandı","Tüm sayaçlar temizlendi."))}function uh(){document.getElementById("counterSingle").textContent=Ue.single,document.getElementById("counterMulti").textContent=Ue.multi,document.getElementById("totalPacketsCounter").textContent=Ue.single+Ue.multi}function dh(){const t=Ue.single+Ue.multi;document.getElementById("perfPacketCount")&&(document.getElementById("perfPacketCount").value=t,Ql())}function Ni(){var g,E;const e=Ue.single||0,n=Ue.multi||0,r=e+n,i=parseFloat((g=document.getElementById("avgKmInput"))==null?void 0:g.value)||0;i&&localStorage.setItem("kurye_avg_km_perf",i);const s=ov(i),o=r*s,a=e*yt.single,l=n*yt.multi,u=Bu(r,Rn,cl).current,f=a+l+o+u,d=f/(1+.2),p=f-d,y=parseFloat((E=document.getElementById("perfFuelInput"))==null?void 0:E.value)||0;y&&localStorage.setItem("kurye_instant_fuel",y);const v=y/(1+.2),C=y-v,m=d-v,h=f-y;document.getElementById("singleCountDisplay").innerText=e,document.getElementById("multiCountDisplay").innerText=n,document.getElementById("earnSingle").innerText=a+" ₺",document.getElementById("earnMulti").innerText=l+" ₺",document.getElementById("kmUnitPriceDisp").innerText=s,document.getElementById("perfKmEarnings").innerText=o.toFixed(0)+" ₺",document.getElementById("earnBonus").innerText=u+" ₺",document.getElementById("totalEarning").innerText=f.toLocaleString("tr-TR")+" ₺",document.getElementById("vatOnIncome").innerText=p.toFixed(0)+" ₺",document.getElementById("incomeWithoutVat").innerText="KDV Hariç: "+d.toFixed(0)+" ₺",document.getElementById("vatOnFuel").innerText=C.toFixed(0)+" ₺",document.getElementById("fuelWithoutVat").innerText="KDV Hariç: "+v.toFixed(0)+" ₺",document.getElementById("netEarningAfterVat").innerText=m.toFixed(0)+" ₺",document.getElementById("totalNetEarning").innerText=h.toLocaleString("tr-TR")+" ₺"}function ji(t,e="Emin misiniz?"){return new Promise(n=>{document.getElementById("confirmModalTitle").textContent=e,document.getElementById("confirmModalMessage").textContent=t,document.getElementById("customConfirmModal").classList.remove("hidden"),document.getElementById("confirmModalOk").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!0)},document.getElementById("confirmModalCancel").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!1)}})}function Ke(t,e){const n=document.querySelector(".success-toast");n&&n.remove();const r=document.createElement("div");r.className="success-toast",r.innerHTML=`<i class="fa-solid fa-check-circle text-lg"></i><div><div class="font-bold">${t}</div><div class="text-[10px] opacity-90">${e}</div></div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3e3)}function rw(){const t=localStorage.getItem("kurye_prices");t&&(yt=JSON.parse(t)),["confSingle","confMulti","confAvm","confNight"].forEach(e=>{const n=e.replace("conf","").toLowerCase();document.getElementById(e).value=yt[n]})}function mR(){const t=localStorage.getItem("kurye_expenses");t&&(Ie=JSON.parse(t)),document.getElementById("dailyFuel").value=Ie.fuel,document.getElementById("extraVat").value=Ie.extra,document.getElementById("extraVatOnly1").value=Ie.extraVatOnly1,document.getElementById("extraVatOnly2").value=Ie.extraVatOnly2,document.getElementById("vatDescription").value=Ie.vatDescription,document.getElementById("maintCost").value=Ie.maint,document.getElementById("accCost").value=Ie.acc,document.getElementById("otherCost").value=Ie.other}function gR(){Ie.fuel=parseFloat(document.getElementById("dailyFuel").value)||0,Ie.extra=parseFloat(document.getElementById("extraVat").value)||0,Ie.extraVatOnly1=parseFloat(document.getElementById("extraVatOnly1").value)||0,Ie.extraVatOnly2=parseFloat(document.getElementById("extraVatOnly2").value)||0,Ie.vatDescription=document.getElementById("vatDescription").value,Ie.maint=parseFloat(document.getElementById("maintCost").value)||0,Ie.acc=parseFloat(document.getElementById("accCost").value)||0,Ie.other=parseFloat(document.getElementById("otherCost").value)||0,localStorage.setItem("kurye_expenses",JSON.stringify(Ie))}function iw(){["single","multi","avm","night"].forEach(t=>{const e="conf"+t.charAt(0).toUpperCase()+t.slice(1);yt[t]=parseFloat(document.getElementById(e).value)||0}),localStorage.setItem("kurye_prices",JSON.stringify(yt)),cr()}function yR(){const t={metadata:{app:"Kurye Pro",version:"V34",date:new Date().toISOString()},prices:yt,dailyBonusTiers:Rn,calendarData:ve,checklistStart:Ur,checklistEnd:Hr,garageData:ft,packetCounter:Ue,accumulatedPayments:se,fuelHistory:Wt,expenses:JSON.parse(localStorage.getItem("kurye_expenses")||"{}")},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=`kurye_backup_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}async function vR(t){const e=t.target.files[0];if(!e||!await ji("Verileriniz silinecek. Onaylıyor musunuz?","Geri Yükle"))return;const r=new FileReader;r.onload=function(i){try{const s=JSON.parse(i.target.result);s.prices&&localStorage.setItem("kurye_prices",JSON.stringify(s.prices)),s.expenses&&localStorage.setItem("kurye_expenses",JSON.stringify(s.expenses)),s.calendarData&&localStorage.setItem("kurye_calendar",JSON.stringify(s.calendarData)),s.packetCounter&&localStorage.setItem("kurye_packet_counter",JSON.stringify(s.packetCounter)),s.fuelHistory&&localStorage.setItem("kurye_fuel_history_list",JSON.stringify(s.fuelHistory)),window.location.reload()}catch{Ke("Hata","Dosya okunamadı.")}},r.readAsText(e)}function _R(){const t=localStorage.getItem("kurye_fuel_unit_price");t&&(document.getElementById("calcFuelUnitPrice").value=t);const e=localStorage.getItem("kurye_fuel_history_list");e&&(Wt=JSON.parse(e),fh())}function wR(){const t=parseFloat(document.getElementById("calcFuelUnitPrice").value)||0,e=parseFloat(document.getElementById("calcFuelPrice").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;let r=t>0&&e>0?e/t:0;document.getElementById("calcFuelLtDisplay").innerText=r.toFixed(1),document.getElementById("calcFuelLt").value=r,n>0&&e>0&&(document.getElementById("resFuelTl").innerText=(e/n).toFixed(2),document.getElementById("resFuelLt100").innerText=(r>0?r/n*100:0).toFixed(1))}function ER(){localStorage.setItem("kurye_fuel_unit_price",document.getElementById("calcFuelUnitPrice").value)}function xR(){const t=parseFloat(document.getElementById("calcFuelPrice").value)||0,e=parseFloat(document.getElementById("calcFuelLt").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;if(t<=0)return Ke("Hata","Tutar giriniz.");Wt.unshift({date:new Date().toLocaleDateString("tr-TR",{day:"numeric",month:"short"}),amount:t,lt:e,km:n,per100:n>0&&e>0?(e/n*100).toFixed(1):"0.0"}),Wt.length>5&&(Wt=Wt.slice(0,5)),localStorage.setItem("kurye_fuel_history_list",JSON.stringify(Wt)),fh(),Ke("Eklendi","Yakıt kaydı eklendi.")}function fh(){const t=document.getElementById("fuelHistoryList");t&&(t.innerHTML=Wt.length?"":'<div class="text-center text-[10px] text-gray-600 py-2">Kayıt yok.</div>',Wt.forEach(e=>{t.innerHTML+=`<div class="bg-slate-800/80 p-2 rounded-lg border border-white/5 flex justify-between items-center mb-1"><div><div class="text-xs font-bold text-white">${e.amount} ₺ <span class="text-[10px] text-gray-400">(${e.lt.toFixed(1)} Lt)</span></div><div class="text-[9px] text-gray-500">${e.date} • ${e.km>0?e.km+" KM":"KM girilmedi"}</div></div><div class="text-right"><div class="text-xs font-bold text-cyan-400">${e.per100} Lt <span class="text-[9px] text-gray-500">/100km</span></div></div></div>`}))}async function IR(){await ji("Geçmiş silinsin mi?")&&(Wt=[],localStorage.removeItem("kurye_fuel_history_list"),fh())}function kR(){document.getElementById("calcFuelPrice").value="",document.getElementById("calcFuelKm").value=""}function bR(t){const e=new Date(t);zt=t,document.getElementById("noteDateTitle").innerText=e.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}),document.getElementById("noteModal").classList.remove("hidden");const n=document.getElementById("dayEventsList");n.innerHTML="";let r=!1;se[t]&&(r=!0,n.innerHTML+=`
                    <div class="bg-purple-900/40 p-2 rounded-lg mb-2 border border-purple-500/30 flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">Ödeme Günü</div>
                            <div class="text-[10px] text-purple-300">Bu tarihte birikmiş: <span class="text-white font-bold">${se[t].toLocaleString("tr-TR")} ₺</span></div>
                        </div>
                        <button onclick="deleteAccumulatedPayment('${t}')" class="text-purple-300 hover:text-red-400 transition-colors px-2"><i class="fa-solid fa-trash"></i></button>
                    </div>`);const i=parseInt(t.split("-")[2]);wn.forEach(s=>{if(parseInt(s.day)===i){r=!0;let o=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",a=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",l=s.type==="activity"?"":s.type==="income"?`+${s.amount}₺`:`-${s.amount}₺`;n.innerHTML+=`
                        <div class="bg-blue-900/40 p-2 rounded-lg mb-2 border border-blue-500/20">
                            <div class="text-xs font-bold text-white">${s.description}</div>
                            <div class="text-[10px] text-blue-300">Tekrarlayan İşlem • <span class="${a} font-bold">${o} ${l}</span></div>
                        </div>`}}),ve[t]&&ve[t].forEach((s,o)=>{r=!0;let a=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",l=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",c="";s.type==="income"?c=`+${s.amount}₺`:s.type==="expense"&&(c=`-${s.amount}₺`),n.innerHTML+=`
                        <div class="bg-slate-800 p-2 rounded-lg mb-2 flex justify-between items-center">
                            <div>
                                <div class="text-xs font-bold text-white">${s.note}</div>
                                <div class="text-[10px] text-gray-400"><span class="${l} font-bold">${a}</span> ${c}</div>
                            </div>
                            <button onclick="deleteNote(${o})" class="text-red-400"><i class="fa-solid fa-trash"></i></button>
                        </div>`}),r||(n.innerHTML='<div class="text-center text-[10px] text-gray-500 py-2">Henüz not yok.</div>')}async function SR(t){await ji(`${t} tarihindeki ödemeyi silmek istediğinize emin misiniz?`,"Ödeme Sil")&&(delete se[t],localStorage.setItem("kurye_accumulated_payments",JSON.stringify(se)),Ke("Silindi","Ödeme silindi."),Po(t),Qt(),ql())}function Po(t){bR(t)}function TR(){document.getElementById("noteModal").classList.add("hidden")}function CR(t){Y0=t,["btnTypeIncome","btnTypeExpense","btnTypeActivity"].forEach(e=>document.getElementById(e).classList.remove("active")),document.getElementById("btnType"+t.charAt(0).toUpperCase()+t.slice(1)).classList.add("active")}function PR(){const t=document.getElementById("noteText").value,e=parseFloat(document.getElementById("noteAmount").value);!t&&!e||(ve[zt]||(ve[zt]=[]),ve[zt].push({note:t,amount:e,type:Y0}),localStorage.setItem("kurye_calendar",JSON.stringify(ve)),document.getElementById("noteText").value="",document.getElementById("noteAmount").value="",Ke("Eklendi","Not eklendi."),Po(zt),Qt())}function NR(t){ve[zt]&&(ve[zt].splice(t,1),ve[zt].length===0&&delete ve[zt],localStorage.setItem("kurye_calendar",JSON.stringify(ve)),Po(zt),Qt())}function RR(){const t=localStorage.getItem("kurye_perf_memory");if(t){const e=JSON.parse(t);e.start&&(document.getElementById("perfStartTime").value=e.start),e.end&&(document.getElementById("perfEndTime").value=e.end),e.count&&(document.getElementById("perfPacketCount").value=e.count),Ql()}}function hh(){const t={start:document.getElementById("perfStartTime").value,end:document.getElementById("perfEndTime").value,count:document.getElementById("perfPacketCount").value};localStorage.setItem("kurye_perf_memory",JSON.stringify(t))}function AR(t){const e=new Date,n=String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0");document.getElementById(t).value=n,Ql(),hh()}function Ql(){const t=document.getElementById("perfStartTime").value,e=document.getElementById("perfEndTime").value,n=parseFloat(document.getElementById("perfPacketCount").value)||0;if(!t||!e||n<=0)return;const[r,i]=t.split(":").map(Number),[s,o]=e.split(":").map(Number);let a=s*60+o-(r*60+i);if(a<0&&(a+=24*60),a>0){const l=a/60,c=n/l,u=a/n;document.getElementById("perfResultArea").classList.remove("hidden"),document.getElementById("perfAvgSpeed").innerText=c.toFixed(1),document.getElementById("perfMinsPerPacket").innerText=u.toFixed(1),document.getElementById("perfTotalTime").innerText=Math.floor(a/60)+"s "+a%60+"dk",document.getElementById("perfTotalPackets").innerText=n}}function DR(){document.getElementById("perfStartTime").value="",document.getElementById("perfEndTime").value="",document.getElementById("perfPacketCount").value="",document.getElementById("perfResultArea").classList.add("hidden"),hh()}function sw(){let t=0;for(let e in localStorage)localStorage.hasOwnProperty(e)&&(t+=(localStorage[e].length+e.length)*2);document.getElementById("dataSize").innerText=(t/1024).toFixed(2)+" KB"}function LR(){const t=document.getElementById("manualModeToggle").checked,e=document.getElementById("manualSection"),n=document.getElementById("packetSection"),r=document.getElementById("modeLabel");t?(e.classList.remove("hidden"),n.classList.add("hidden"),r.innerText="MANUEL",r.classList.remove("text-gray-300"),r.classList.add("text-emerald-400")):(e.classList.add("hidden"),n.classList.remove("hidden"),r.innerText="PAKET",r.classList.add("text-gray-300"),r.classList.remove("text-emerald-400")),cr()}function OR(){document.getElementById("settingsModal").classList.toggle("hidden")}function MR(){document.getElementById("finalResultCard").scrollIntoView({behavior:"smooth"})}function FR(t,e){document.querySelectorAll(".tab-content").forEach(r=>r.classList.remove("active")),document.getElementById(t).classList.add("active"),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active","bg-indigo-600","text-white","shadow-lg")),e.classList.add("active","bg-indigo-600","text-white","shadow-lg"),e.classList.remove("text-gray-400");const n=document.getElementById("headerManualToggle");t==="tabProfit"?n.classList.remove("hidden"):n.classList.add("hidden")}function BR(){document.getElementById("single").value="",document.getElementById("multi").value="",cr()}function UR(){$t=[],localStorage.removeItem("kurye_transaction_history"),Z0()}function HR(){confirm("Varsayılan fiyatlara dönülsün mü?")&&(yt={single:110,multi:40,avm:10,night:20},iw(),rw())}function VR(){console.log("POS")}function zR(t){An+=t,An<1&&(An=1),An>60&&(An=60),document.getElementById("simDays").textContent=An}async function WR(t){const e=document.getElementById("resNet").innerText.replace(/\./g,"").replace(",","."),n=parseFloat(e);if(n<=0){Ke("Hata","Net gelir 0 veya daha düşük.");return}const r=document.getElementById(t).value,i=new Date(r);await ji(`₺${n.toLocaleString("tr-TR")} tutarındaki net gelir ${i.toLocaleDateString("tr-TR")} ödemesine eklensin mi?`,"Ödeme Ekle")&&(se[r]||(se[r]=0),se[r]+=n,$t.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"income",amount:n,description:"Hesaplanan Net Gelir"}),$t.length>5&&$t.pop(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(se)),localStorage.setItem("kurye_transaction_history",JSON.stringify($t)),Ke("Başarılı","Ödeme gününe eklendi."),ql(),Qt())}function jR(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;let n=t-e,r=0,i=0;const s=new Date,o=new Date;o.setDate(s.getDate()+An),Object.keys(ve).forEach(d=>{const p=new Date(d);p>=s&&p<=o&&ve[d].forEach(v=>{v.type==="income"?r+=parseFloat(v.amount)||0:v.type==="expense"&&(i+=parseFloat(v.amount)||0)})});const a=s.getDate(),l=new Date(s.getFullYear(),s.getMonth()+1,0).getDate();wn.forEach(d=>{if(d.type==="activity")return;let p=d.day-a;p<0&&(p=l-a+parseInt(d.day)),p<=An&&(d.type==="income"?r+=d.amount:d.type==="expense"&&(i+=d.amount))});for(let d in se){const p=new Date(d);p>=s&&p<=o&&(r+=se[d])}document.getElementById("currentBalanceResult").innerText=n.toLocaleString("tr-TR")+" ₺",document.getElementById("futureIncomesResult").innerText="+"+r.toLocaleString("tr-TR")+" ₺",document.getElementById("futureExpensesResult").innerText="-"+i.toLocaleString("tr-TR")+" ₺";const c=n+r-i;document.getElementById("finalBalanceResult").innerText=c.toLocaleString("tr-TR")+" ₺";const u=document.getElementById("resultEmoji"),f=document.getElementById("resultTitle");c>n*1.2?(u.textContent="🚀",f.textContent="MÜTHİŞ!",f.className="text-lg font-bold text-emerald-400"):c>n?(u.textContent="📈",f.textContent="İYİ GİDİYOR!",f.className="text-lg font-bold text-green-400"):c>0?(u.textContent="⚠️",f.textContent="DİKKAT!",f.className="text-lg font-bold text-yellow-400"):(u.textContent="🔴",f.textContent="TEHLİKE!",f.className="text-lg font-bold text-red-400"),document.getElementById("futureResult").classList.remove("hidden"),document.getElementById("futureResult").scrollIntoView({behavior:"smooth",block:"center"})}function $R(){const t=document.getElementById("sideDock");t&&t.classList.toggle("active")}let co=JSON.parse(localStorage.getItem("kurye_dialer_numbers")||"[]"),Tt=JSON.parse(localStorage.getItem("kurye_dialer_history")||"[]");function GR(){document.getElementById("dialerModal").classList.remove("hidden"),ph(),mh(),document.getElementById("dialerOrderInput").focus()}function KR(){document.getElementById("dialerModal").classList.add("hidden")}function ph(){const t=document.getElementById("dialerNumbersList");t.innerHTML="",co.forEach((e,n)=>{t.innerHTML+=`
                    <div class="bg-slate-800/30 p-2 rounded-xl border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-gray-400">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="text-white font-mono font-bold tracking-wide text-sm">${e}</div>
                        </div>
                        <div class="flex gap-2">
                             <button onclick="callDialerNumber('${e}')" class="w-8 h-8 rounded-lg bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center">
                                <i class="fa-solid fa-phone text-xs"></i>
                            </button>
                            <button onclick="removeDialerNumber(${n})" class="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center">
                                <i class="fa-solid fa-trash text-xs"></i>
                            </button>
                        </div>
                    </div>
                `})}function YR(){const t=document.getElementById("newDialerNumber"),e=t.value.trim().replace(/\s/g,"");if(e){if(e.length<3)return Ke("Hata","Geçersiz numara");co.push(e),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(co)),t.value="",ph()}}function qR(t){co.splice(t,1),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(co)),ph()}function QR(t){const e=document.getElementById("dialerOrderInput").value.trim();e&&ow(e);let n=t;e&&(n+=","+e),window.open("tel:"+n)}function JR(){const t=document.getElementById("dialerOrderInput").value.trim();t&&(ow(t),Ke("Kaydedildi","Geçmişe eklendi"))}function ow(t){Tt=Tt.filter(e=>e!==t),Tt.unshift(t),Tt.length>10&&(Tt=Tt.slice(0,10)),localStorage.setItem("kurye_dialer_history",JSON.stringify(Tt)),mh()}function mh(){const t=document.getElementById("dialerHistoryList"),e=document.getElementById("dialerHistorySection");if(Tt.length===0){e.classList.add("hidden");return}e.classList.remove("hidden"),t.innerHTML="",Tt.forEach(n=>{t.innerHTML+=`
                    <button onclick="document.getElementById('dialerOrderInput').value = '${n}'" 
                        class="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 font-mono text-sm border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                        ${n}
                    </button>
                `})}function XR(){Tt=[],localStorage.setItem("kurye_dialer_history",JSON.stringify(Tt)),mh()}async function ZR(t){const e=document.getElementById("quickSearchResults");if(!t||t.length<2){e.classList.add("hidden"),e.innerHTML="";return}if(await uw(),!it)return;function n(a){return a.toUpperCase().replace(/İ/g,"I").replace(/I/g,"I").replace(/Ğ/g,"G").replace(/Ü/g,"U").replace(/Ş/g,"S").replace(/Ö/g,"O").replace(/Ç/g,"C")}const r=t.trim().split(/\s+/).map(a=>n(a)).filter(a=>a.length>0),i=[],s=20;function o(a){const l=n(a);return r.every(c=>l.includes(c))}for(const[a,l]of Object.entries(it)){const c=l.adi;for(const[u,f]of Object.entries(l.streets||{})){const d=f.adi;for(const p of f.doors||[]){const y=p.no,v=c+" "+d+" "+y;if(o(v)&&i.push({type:"kapi",icon:"fa-door-open",color:"text-amber-400",text:c+" Mah. "+d+" No:"+y,mahalleId:a,mahalleAdi:c,sokakId:u,sokakAdi:d,door:p}),i.length>=s)break}if(i.length<s){const p=c+" "+d;o(p)&&!i.some(y=>y.sokakId===u&&!y.door)&&i.push({type:"sokak",icon:"fa-road",color:"text-green-400",text:d+", "+c+" Mah.",mahalleId:a,mahalleAdi:c,sokakId:u,sokakAdi:d})}if(i.length>=s)break}if(i.length<s&&r.length===1&&o(c)&&!i.some(u=>u.mahalleId===a&&u.type==="mahalle")&&i.push({type:"mahalle",icon:"fa-location-dot",color:"text-blue-400",text:c+" Mah.",mahalleId:a,mahalleAdi:c}),i.length>=s)break}i.sort((a,l)=>{const c={kapi:0,sokak:1,mahalle:2};return c[a.type]-c[l.type]}),i.length===0?e.innerHTML='<div class="p-3 text-gray-500 text-sm text-center">Sonuç bulunamadı</div>':e.innerHTML=i.map(a=>`
                    <div class="p-2 hover:bg-slate-700 cursor-pointer flex items-center gap-2 text-sm border-b border-slate-700 last:border-0"
                         onclick='selectQuickResult(${JSON.stringify(a).replace(/'/g,"&#39;")})'>
                        <i class="fa-solid ${a.icon} ${a.color}"></i>
                        <span class="text-gray-200">${a.text}</span>
                    </div>
                `).join(""),e.classList.remove("hidden")}function eA(t){document.getElementById("quickSearchResults").classList.add("hidden"),document.getElementById("quickAddressSearch").value=t.text;const e=document.getElementById("mapMahalle");e.value=t.mahalleId,aw(),t.sokakId&&setTimeout(()=>{const n=document.getElementById("mapSokak");n.value=t.sokakId,lw(),t.door&&setTimeout(()=>{const r=document.getElementById("mapKapi"),i="No: "+t.door.no;for(let s of r.options)if(s.text===i||s.textContent===i){r.value=s.value;break}cw()},200)},150)}let Ht=null,Wc=null,ga=null,it=null;window.attemptLogin=async function(){const t=document.getElementById("btnLoginBtn");t.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i> Google ile Bağlanılıyor...',t.disabled=!0;const e=await WN();if(e.type==="redirect"||e.type==="external_browser"){t.innerHTML='<i class="fa-solid fa-external-link-alt mr-2"></i> Tarayıcıda Giriş Yap',t.disabled=!1;const n=document.getElementById("deviceInfoText");n&&(n.innerText="Tarayıcıda giriş yaptıktan sonra uygulamayı yeniden açın.");return}e.success?(document.getElementById("loginOverlay").classList.add("hidden"),Ke("Giriş Başarılı",`Hoşgeldin, ${e.user.displayName}`)):(e.error&&!e.error.includes("auth/popup-blocked")&&alert("Giriş Başarısız: "+e.error),t.innerHTML='<i class="fa-brands fa-google mr-2"></i> GOOGLE İLE GİRİŞ YAP',t.disabled=!1)};async function tA(){const t=document.getElementById("deviceInfoText");t&&(t.innerText="Yükleniyor...");const e=await K0(),n=document.getElementById("loginOverlay");e.status==="authorized"?n&&(n.classList.add("transition-opacity","duration-500","opacity-0"),setTimeout(()=>{n.classList.add("hidden"),n.style.opacity="1"},500)):(t&&(t.innerText="Güvenli Giriş v4.2"),e.status==="banned"&&(document.getElementById("loginTitle").innerText="HESAP YASAKLANDI",document.getElementById("loginTitle").classList.add("text-red-500"),document.getElementById("btnLoginBtn").style.display="none",t&&(t.innerText="Yönetici ile iletişime geçin.")))}async function nA(){var n;const t=document.getElementById("mapModal");if(!t)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),t.classList.add("animate-modal-in"),await uw(),((n=document.getElementById("mapMahalle"))==null?void 0:n.options.length)<=1&&rA()):(t.classList.add("hidden"),t.classList.remove("animate-modal-in"),console.log("🔒 Güvenlik: Adres verisi RAM'den silindi."),it=null,document.getElementById("mapMahalle").innerHTML='<option value="">Seçiniz...</option>',document.getElementById("mapSokak").innerHTML='<option value="">Önce Mahalle Seçin</option>',document.getElementById("mapKapi").innerHTML='<option value="">Önce Sokak Seçin</option>',Ht&&(Ht.remove(),Ht=null))}function rA(){const t=document.getElementById("mapMahalle");if(!it||t.options.length>1)return;t.innerHTML='<option value="">Seçiniz...</option>';const e=Object.entries(it).map(([n,r])=>({id:n,adi:r.adi}));e.sort((n,r)=>n.adi.localeCompare(r.adi,"tr")),e.forEach(n=>{const r=document.createElement("option");r.value=n.id,r.textContent=n.adi,t.appendChild(r)})}function aw(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak"),n=document.getElementById("mapKapi");if(e.innerHTML='<option value="">Yükleniyor...</option>',e.disabled=!0,n.innerHTML='<option value="">Önce Sokak Seçin</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!it||!it[t]){e.innerHTML='<option value="">Önce Mahalle Seçin</option>';return}const r=it[t].streets,i=Object.entries(r).map(([s,o])=>({id:s,adi:o.adi,tur:o.tur}));i.sort((s,o)=>s.adi.localeCompare(o.adi,"tr")),e.innerHTML='<option value="">Seçiniz...</option>',i.forEach(s=>{const o=document.createElement("option");o.value=s.id,o.textContent=s.adi+(s.tur?" ("+s.tur+")":""),e.appendChild(o)}),e.disabled=!1}function lw(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak").value,n=document.getElementById("mapKapi");if(n.innerHTML='<option value="">Yükleniyor...</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!e||!it||!it[t]){n.innerHTML='<option value="">Önce Sokak Seçin</option>';return}const r=it[t].streets[e];if(!r||!r.doors||r.doors.length===0){n.innerHTML='<option value="">Bu sokakta kapı bulunamadı</option>';return}const i=[...r.doors];i.sort((s,o)=>{const a=parseInt(s.no)||0,l=parseInt(o.no)||0;return a-l}),n.innerHTML='<option value="">Seçiniz...</option>',i.forEach(s=>{const o=document.createElement("option");o.value=JSON.stringify({lat:s.lat,lon:s.lon,no:s.no}),o.textContent="No: "+s.no,n.appendChild(o)}),n.disabled=!1}function cw(){const t=document.getElementById("mapKapi").value;if(!t){alert("Lütfen geçerli bir kapı numarası seçin.");return}const e=JSON.parse(t);ga=e,document.getElementById("internalMapContainer").classList.remove("hidden"),document.getElementById("googleMapsBtn").classList.remove("hidden"),setTimeout(()=>{Ht?(Ht.invalidateSize(),Ht.setView([e.lat,e.lon],18)):(Ht=L.map("internalMap").setView([e.lat,e.lon],18),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(Ht)),Wc&&Ht.removeLayer(Wc),Wc=L.marker([e.lat,e.lon]).addTo(Ht).bindPopup(`<b>Kapı No: ${e.no}</b>`).openPopup()},100)}function iA(){ga?window.open(`https://www.google.com/maps/search/?api=1&query=${ga.lat},${ga.lon}`,"_blank"):alert("Önce konum seçmelisiniz.")}async function uw(){if(it&&Object.keys(it).length>0)return!0;try{const t=document.getElementById("updateStatus");return t&&(t.innerText="Güvenli bağlantı kuruluyor...",t.style.display="block"),it=await jN(),console.log("🔓 Veri Erişim İzni Onaylandı."),t&&(t.style.display="none"),!0}catch(t){console.error("Erişim Hatası:",t),getDeviceId(),alert(`⛔ ERİŞİM ENGELLENDİ

Sebep: ${t.message}

Eğer giriş yapmadıysanız uygulamayı yeniden başlatıp giriş kodunu giriniz.`);const e=document.getElementById("updateStatus");return e&&(e.style.display="none"),!1}}const sA="__capgo_keep_url_path_after_reload",jc="__capgo_history_stack__",zm=100,oA=typeof window<"u"&&typeof document<"u"&&typeof history<"u";if(oA){const t=window;if(!t.__capgoHistoryPatched){t.__capgoHistoryPatched=!0;const e=()=>{try{if(t.__capgoKeepUrlPathAfterReload)return!0}catch{}try{return window.localStorage.getItem(sA)==="1"}catch{return!1}},n=()=>{try{const _=window.sessionStorage.getItem(jc);if(!_)return{stack:[],index:-1};const I=JSON.parse(_);return!I||!Array.isArray(I.stack)||typeof I.index!="number"?{stack:[],index:-1}:I}catch{return{stack:[],index:-1}}},r=(_,I)=>{try{window.sessionStorage.setItem(jc,JSON.stringify({stack:_,index:I}))}catch{}},i=()=>{try{window.sessionStorage.removeItem(jc)}catch{}},s=_=>{try{const I=_??window.location.href,x=new URL(I instanceof URL?I.toString():I,window.location.href);return`${x.pathname}${x.search}${x.hash}`}catch{return null}},o=(_,I)=>{if(_.length<=zm)return{stack:_,index:I};const x=_.length-zm,w=_.slice(x),R=Math.max(0,I-x);return{stack:w,index:R}},a=_=>{document.readyState==="complete"||document.readyState==="interactive"?_():window.addEventListener("DOMContentLoaded",_,{once:!0})};let l=!1,c=!1,u=!1;const f=()=>{if(!l)return;const _=n(),I=s();if(I){if(_.stack.length===0){_.stack.push(I),_.index=0,r(_.stack,_.index);return}(_.index<0||_.index>=_.stack.length)&&(_.index=_.stack.length-1),_.stack[_.index]!==I&&(_.stack[_.index]=I,r(_.stack,_.index))}},d=(_,I)=>{if(!l||c)return;const x=s(_);if(!x)return;let{stack:w,index:R}=n();w.length===0?(w.push(x),R=w.length-1):I?((R<0||R>=w.length)&&(R=w.length-1),w[R]=x):R>=w.length-1?(w.push(x),R=w.length-1):(w=w.slice(0,R+1),w.push(x),R=w.length-1),{stack:w,index:R}=o(w,R),r(w,R)},p=()=>{if(!l||c)return;const _=n();if(_.stack.length===0){f();return}const I=_.index>=0&&_.index<_.stack.length?_.index:_.stack.length-1,x=s();if(_.stack.length===1&&x===_.stack[0])return;const w=_.stack[0];if(!w)return;c=!0;try{history.replaceState(history.state,document.title,w);for(let J=1;J<_.stack.length;J+=1)history.pushState(history.state,document.title,_.stack[J])}catch{c=!1;return}c=!1;const R=_.stack.length-1,D=I-R;D!==0?history.go(D):(history.replaceState(history.state,document.title,_.stack[I]),window.dispatchEvent(new PopStateEvent("popstate")))},y=()=>{!l||u||(u=!0,a(()=>{u=!1,p()}))};let v=null,C=null;const m=()=>{if(!l||c)return;const _=s();if(!_)return;const I=n(),x=I.stack.lastIndexOf(_);x>=0?I.index=x:(I.stack.push(_),I.index=I.stack.length-1);const w=o(I.stack,I.index);r(w.stack,w.index)},h=()=>{v&&C||(v=history.pushState,C=history.replaceState,history.pushState=function(I,x,w){const R=v==null?void 0:v.call(history,I,x,w);return d(w,!1),R},history.replaceState=function(I,x,w){const R=C==null?void 0:C.call(history,I,x,w);return d(w,!0),R},window.addEventListener("popstate",m))},g=()=>{v&&(history.pushState=v,v=null),C&&(history.replaceState=C,C=null),window.removeEventListener("popstate",m)},E=_=>{if(l===_){l&&(f(),y());return}l=_,l?(h(),f(),y()):(g(),i())};window.addEventListener("CapacitorUpdaterKeepUrlPathAfterReload",_=>{var I;const x=_,w=(I=x==null?void 0:x.detail)===null||I===void 0?void 0:I.enabled;typeof w=="boolean"?(t.__capgoKeepUrlPathAfterReload=w,E(w)):(t.__capgoKeepUrlPathAfterReload=!0,E(!0))}),E(e())}}var Wm;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.UPDATE_NOT_AVAILABLE=1]="UPDATE_NOT_AVAILABLE",t[t.UPDATE_AVAILABLE=2]="UPDATE_AVAILABLE",t[t.UPDATE_IN_PROGRESS=3]="UPDATE_IN_PROGRESS"})(Wm||(Wm={}));var jm;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.PENDING=1]="PENDING",t[t.DOWNLOADING=2]="DOWNLOADING",t[t.INSTALLING=3]="INSTALLING",t[t.INSTALLED=4]="INSTALLED",t[t.FAILED=5]="FAILED",t[t.CANCELED=6]="CANCELED",t[t.DOWNLOADED=11]="DOWNLOADED"})(jm||(jm={}));var $m;(function(t){t[t.OK=0]="OK",t[t.CANCELED=1]="CANCELED",t[t.FAILED=2]="FAILED",t[t.NOT_AVAILABLE=3]="NOT_AVAILABLE",t[t.NOT_ALLOWED=4]="NOT_ALLOWED",t[t.INFO_MISSING=5]="INFO_MISSING"})($m||($m={}));const $c=Yl("CapacitorUpdater",{web:()=>nf(()=>import("./web-gw37sg1Q.js"),[],import.meta.url).then(t=>new t.CapacitorUpdaterWeb)});function aA(){return dd.useEffect(()=>{GN(),$N(),KN(),$c.notifyAppReady(),setTimeout(async()=>{try{const e="yal42d-debug",n="kurye_pro",r=`https://raw.githubusercontent.com/${e}/${n}/main/updates/version.json`,i=await fetch(r);if(!i.ok)return;const s=await i.json(),o=localStorage.getItem("app_version_code");if(s.version!==o){console.log("Yeni güncelleme bulundu:",s.version);const a=`https://github.com/${e}/${n}/raw/main/updates/dist.zip`,l=await $c.download({url:a,version:s.version});await $c.set(l),localStorage.setItem("app_version_code",s.version)}}catch(e){console.error("Update check failed",e)}},5e3)},[]),rg.jsx("div",{id:"app-root",dangerouslySetInnerHTML:{__html:zx}})}const lA=document.getElementById("root"),cA=sv(lA);cA.render(rg.jsx(aA,{}));export{Wm as A,j0 as W};
