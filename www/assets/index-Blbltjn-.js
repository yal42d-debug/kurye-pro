(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Kp={exports:{}},Ml={},Gp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Symbol.for("react.element"),U0=Symbol.for("react.portal"),z0=Symbol.for("react.fragment"),H0=Symbol.for("react.strict_mode"),j0=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),W0=Symbol.for("react.context"),$0=Symbol.for("react.forward_ref"),K0=Symbol.for("react.suspense"),G0=Symbol.for("react.memo"),Y0=Symbol.for("react.lazy"),xf=Symbol.iterator;function q0(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var Yp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qp=Object.assign,Qp={};function gi(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Yp}gi.prototype.isReactComponent={};gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jp(){}Jp.prototype=gi.prototype;function _u(t,e,n){this.props=t,this.context=e,this.refs=Qp,this.updater=n||Yp}var wu=_u.prototype=new Jp;wu.constructor=_u;qp(wu,gi.prototype);wu.isPureReactComponent=!0;var Ef=Array.isArray,Xp=Object.prototype.hasOwnProperty,xu={current:null},Zp={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xp.call(e,r)&&!Zp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ms,type:t,key:s,ref:o,props:i,_owner:xu.current}}function Q0(t,e){return{$$typeof:Ms,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Eu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ms}function J0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kf=/\/+/g;function pa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J0(""+t.key):e.toString(36)}function ko(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ms:case U0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pa(o,0):r,Ef(i)?(n="",t!=null&&(n=t.replace(kf,"$&/")+"/"),ko(i,e,n,"",function(c){return c})):i!=null&&(Eu(i)&&(i=Q0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(kf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ef(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+pa(s,l);o+=ko(s,e,n,a,i)}else if(a=q0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+pa(s,l++),o+=ko(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function eo(t,e,n){if(t==null)return t;var r=[],i=0;return ko(t,r,"","",function(s){return e.call(n,s,i++)}),r}function X0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},bo={transition:null},Z0={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:bo,ReactCurrentOwner:xu};function tm(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!Eu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=gi;U.Fragment=z0;U.Profiler=j0;U.PureComponent=_u;U.StrictMode=H0;U.Suspense=K0;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;U.act=tm;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Xp.call(e,a)&&!Zp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ms,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:W0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V0,_context:t},t.Consumer=t};U.createElement=em;U.createFactory=function(t){var e=em.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:$0,render:t}};U.isValidElement=Eu;U.lazy=function(t){return{$$typeof:Y0,_payload:{_status:-1,_result:t},_init:X0}};U.memo=function(t,e){return{$$typeof:G0,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=bo.transition;bo.transition={};try{t()}finally{bo.transition=e}};U.unstable_act=tm;U.useCallback=function(t,e){return ze.current.useCallback(t,e)};U.useContext=function(t){return ze.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};U.useEffect=function(t,e){return ze.current.useEffect(t,e)};U.useId=function(){return ze.current.useId()};U.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return ze.current.useMemo(t,e)};U.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};U.useRef=function(t){return ze.current.useRef(t)};U.useState=function(t){return ze.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return ze.current.useTransition()};U.version="18.3.1";Gp.exports=U;var ku=Gp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_=ku,t_=Symbol.for("react.element"),n_=Symbol.for("react.fragment"),r_=Object.prototype.hasOwnProperty,i_=e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s_={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)r_.call(e,r)&&!s_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:t_,type:t,key:s,ref:o,props:i,_owner:i_.current}}Ml.Fragment=n_;Ml.jsx=nm;Ml.jsxs=nm;Kp.exports=Ml;var rm=Kp.exports,im={exports:{}},tt={},sm={exports:{}},om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,D){var N=I.length;I.push(D);e:for(;0<N;){var M=N-1>>>1,j=I[M];if(0<i(j,D))I[M]=D,I[N]=j,N=M;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],N=I.pop();if(N!==D){I[0]=N;e:for(var M=0,j=I.length,Ce=j>>>1;M<Ce;){var me=2*(M+1)-1,xe=I[me],Ve=me+1,pt=I[Ve];if(0>i(xe,N))Ve<j&&0>i(pt,xe)?(I[M]=pt,I[Ve]=N,M=Ve):(I[M]=xe,I[me]=N,M=me);else if(Ve<j&&0>i(pt,N))I[M]=pt,I[Ve]=N,M=Ve;else break e}}return D}function i(I,D){var N=I.sortIndex-D.sortIndex;return N!==0?N:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],f=1,d=null,u=3,p=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=I)r(c),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(c)}}function x(I){if(v=!1,g(I),!y)if(n(a)!==null)y=!0,dn(_);else{var D=n(c);D!==null&&fn(x,D.startTime-I)}}function _(I,D){y=!1,v&&(v=!1,m(w),w=-1),p=!0;var N=u;try{for(g(D),d=n(a);d!==null&&(!(d.expirationTime>D)||I&&!Q());){var M=d.callback;if(typeof M=="function"){d.callback=null,u=d.priorityLevel;var j=M(d.expirationTime<=D);D=t.unstable_now(),typeof j=="function"?d.callback=j:d===n(a)&&r(a),g(D)}else r(a);d=n(a)}if(d!==null)var Ce=!0;else{var me=n(c);me!==null&&fn(x,me.startTime-D),Ce=!1}return Ce}finally{d=null,u=N,p=!1}}var k=!1,E=null,w=-1,P=5,A=-1;function Q(){return!(t.unstable_now()-A<P)}function pe(){if(E!==null){var I=t.unstable_now();A=I;var D=!0;try{D=E(!0,I)}finally{D?Pt():(k=!1,E=null)}}else k=!1}var Pt;if(typeof h=="function")Pt=function(){h(pe)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Qn=je.port2;je.port1.onmessage=pe,Pt=function(){Qn.postMessage(null)}}else Pt=function(){C(pe,0)};function dn(I){E=I,k||(k=!0,Pt())}function fn(I,D){w=C(function(){I(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,dn(_))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(u){case 1:case 2:case 3:var D=3;break;default:D=u}var N=u;u=D;try{return I()}finally{u=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=u;u=I;try{return D()}finally{u=N}},t.unstable_scheduleCallback=function(I,D,N){var M=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?M+N:M):N=M,I){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=N+j,I={id:f++,callback:D,priorityLevel:I,startTime:N,expirationTime:j,sortIndex:-1},N>M?(I.sortIndex=N,e(c,I),n(a)===null&&I===n(c)&&(v?(m(w),w=-1):v=!0,fn(x,N-M))):(I.sortIndex=j,e(a,I),y||p||(y=!0,dn(_))),I},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(I){var D=u;return function(){var N=u;u=D;try{return I.apply(this,arguments)}finally{u=N}}}})(om);sm.exports=om;var o_=sm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_=ku,et=o_;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lm=new Set,os={};function wr(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(os[t]=e,t=0;t<e.length;t++)lm.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=Object.prototype.hasOwnProperty,a_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Sf={};function c_(t){return ic.call(Sf,t)?!0:ic.call(bf,t)?!1:a_.test(t)?Sf[t]=!0:(bf[t]=!0,!1)}function u_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function d_(t,e,n,r){if(e===null||typeof e>"u"||u_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function He(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new He(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new He(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new He(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new He(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new He(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new He(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new He(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new He(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new He(t,5,!1,t.toLowerCase(),null,!1,!1)});var bu=/[\-:]([a-z])/g;function Su(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bu,Su);Se[e]=new He(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bu,Su);Se[e]=new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bu,Su);Se[e]=new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new He(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new He(t,1,!1,t.toLowerCase(),null,!0,!0)});function Iu(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d_(e,n,i,r)&&(n=null),r||i===null?c_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cn=l_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),cm=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),um=Symbol.for("react.offscreen"),If=Symbol.iterator;function Ti(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,ma;function zi(t){if(ma===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ma=e&&e[1]||""}return`
`+ma+t}var ga=!1;function ya(t,e){if(!t||ga)return"";ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ga=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function f_(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=ya(t.type,!1),t;case 11:return t=ya(t.type.render,!1),t;case 1:return t=ya(t.type,!0),t;default:return""}}function ac(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nr:return"Fragment";case Tr:return"Portal";case sc:return"Profiler";case Cu:return"StrictMode";case oc:return"Suspense";case lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cm:return(t.displayName||"Context")+".Consumer";case am:return(t._context.displayName||"Context")+".Provider";case Tu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nu:return e=t.displayName||null,e!==null?e:ac(t.type)||"Memo";case mn:e=t._payload,t=t._init;try{return ac(t(e))}catch{}}return null}function h_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ac(e);case 8:return e===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p_(t){var e=dm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function no(t){t._valueTracker||(t._valueTracker=p_(t))}function fm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hm(t,e){e=e.checked,e!=null&&Iu(t,"checked",e,!1)}function uc(t,e){hm(t,e);var n=zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&dc(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dc(t,e,n){(e!=="number"||Ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hi=Array.isArray;function Hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Hi(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zn(n)}}function pm(t,e){var n=zn(e.value),r=zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m_=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){m_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function ym(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ym(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var g_=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pc(t,e){if(e){if(g_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function mc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gc=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yc=null,jr=null,Vr=null;function Rf(t){if(t=Us(t)){if(typeof yc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Hl(e),yc(t.stateNode,t.type,e))}}function _m(t){jr?Vr?Vr.push(t):Vr=[t]:jr=t}function wm(){if(jr){var t=jr,e=Vr;if(Vr=jr=null,Rf(t),e)for(t=0;t<e.length;t++)Rf(e[t])}}function xm(t,e){return t(e)}function Em(){}var va=!1;function km(t,e,n){if(va)return t(e,n);va=!0;try{return xm(t,e,n)}finally{va=!1,(jr!==null||Vr!==null)&&(Em(),wm())}}function as(t,e){var n=t.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var vc=!1;if(en)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){vc=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{vc=!1}function y_(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var $i=!1,jo=null,Vo=!1,_c=null,v_={onError:function(t){$i=!0,jo=t}};function __(t,e,n,r,i,s,o,l,a){$i=!1,jo=null,y_.apply(v_,arguments)}function w_(t,e,n,r,i,s,o,l,a){if(__.apply(this,arguments),$i){if($i){var c=jo;$i=!1,jo=null}else throw Error(b(198));Vo||(Vo=!0,_c=c)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Af(t){if(xr(t)!==t)throw Error(b(188))}function x_(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Af(i),t;if(s===r)return Af(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function Sm(t){return t=x_(t),t!==null?Im(t):null}function Im(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Im(t);if(e!==null)return e;t=t.sibling}return null}var Cm=et.unstable_scheduleCallback,Df=et.unstable_cancelCallback,E_=et.unstable_shouldYield,k_=et.unstable_requestPaint,le=et.unstable_now,b_=et.unstable_getCurrentPriorityLevel,Ru=et.unstable_ImmediatePriority,Tm=et.unstable_UserBlockingPriority,Wo=et.unstable_NormalPriority,S_=et.unstable_LowPriority,Nm=et.unstable_IdlePriority,Fl=null,Bt=null;function I_(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:N_,C_=Math.log,T_=Math.LN2;function N_(t){return t>>>=0,t===0?32:31-(C_(t)/T_|0)|0}var io=64,so=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $o(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ji(l):(s&=o,s!==0&&(r=ji(s)))}else o=n&~i,o!==0?r=ji(o):s!==0&&(r=ji(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function P_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=P_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function wc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pm(){var t=io;return io<<=1,!(io&4194240)&&(io=64),t}function _a(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function A_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Au(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Rm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Am,Du,Dm,Lm,Om,xc=!1,oo=[],Cn=null,Tn=null,Nn=null,cs=new Map,us=new Map,_n=[],D_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":us.delete(e.pointerId)}}function Pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Us(e),e!==null&&Du(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function L_(t,e,n,r,i){switch(e){case"focusin":return Cn=Pi(Cn,t,e,n,r,i),!0;case"dragenter":return Tn=Pi(Tn,t,e,n,r,i),!0;case"mouseover":return Nn=Pi(Nn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return cs.set(s,Pi(cs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,us.set(s,Pi(us.get(s)||null,t,e,n,r,i)),!0}return!1}function Mm(t){var e=tr(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=bm(n),e!==null){t.blockedOn=e,Om(t.priority,function(){Dm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function So(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gc=r,n.target.dispatchEvent(r),gc=null}else return e=Us(n),e!==null&&Du(e),t.blockedOn=n,!1;e.shift()}return!0}function Of(t,e,n){So(t)&&n.delete(e)}function O_(){xc=!1,Cn!==null&&So(Cn)&&(Cn=null),Tn!==null&&So(Tn)&&(Tn=null),Nn!==null&&So(Nn)&&(Nn=null),cs.forEach(Of),us.forEach(Of)}function Ri(t,e){t.blockedOn===e&&(t.blockedOn=null,xc||(xc=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,O_)))}function ds(t){function e(i){return Ri(i,t)}if(0<oo.length){Ri(oo[0],t);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cn!==null&&Ri(Cn,t),Tn!==null&&Ri(Tn,t),Nn!==null&&Ri(Nn,t),cs.forEach(e),us.forEach(e),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&_n.shift()}var Wr=cn.ReactCurrentBatchConfig,Ko=!0;function M_(t,e,n,r){var i=W,s=Wr.transition;Wr.transition=null;try{W=1,Lu(t,e,n,r)}finally{W=i,Wr.transition=s}}function F_(t,e,n,r){var i=W,s=Wr.transition;Wr.transition=null;try{W=4,Lu(t,e,n,r)}finally{W=i,Wr.transition=s}}function Lu(t,e,n,r){if(Ko){var i=Ec(t,e,n,r);if(i===null)Na(t,e,r,Go,n),Lf(t,r);else if(L_(i,t,e,n,r))r.stopPropagation();else if(Lf(t,r),e&4&&-1<D_.indexOf(t)){for(;i!==null;){var s=Us(i);if(s!==null&&Am(s),s=Ec(t,e,n,r),s===null&&Na(t,e,r,Go,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Na(t,e,r,null,n)}}var Go=null;function Ec(t,e,n,r){if(Go=null,t=Pu(r),t=tr(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Go=t,null}function Fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b_()){case Ru:return 1;case Tm:return 4;case Wo:case S_:return 16;case Nm:return 536870912;default:return 16}default:return 16}}var bn=null,Ou=null,Io=null;function Bm(){if(Io)return Io;var t,e=Ou,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Io=i.slice(t,1<r?1-r:void 0)}function Co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Mf(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Mf,this.isPropagationStopped=Mf,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=nt(yi),Bs=re({},yi,{view:0,detail:0}),B_=nt(Bs),wa,xa,Ai,Bl=re({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(wa=t.screenX-Ai.screenX,xa=t.screenY-Ai.screenY):xa=wa=0,Ai=t),wa)},movementY:function(t){return"movementY"in t?t.movementY:xa}}),Ff=nt(Bl),U_=re({},Bl,{dataTransfer:0}),z_=nt(U_),H_=re({},Bs,{relatedTarget:0}),Ea=nt(H_),j_=re({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),V_=nt(j_),W_=re({},yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$_=nt(W_),K_=re({},yi,{data:0}),Bf=nt(K_),G_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q_[t])?!!e[t]:!1}function Fu(){return Q_}var J_=re({},Bs,{key:function(t){if(t.key){var e=G_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X_=nt(J_),Z_=re({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=nt(Z_),ew=re({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),tw=nt(ew),nw=re({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),rw=nt(nw),iw=re({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=nt(iw),ow=[9,13,27,32],Bu=en&&"CompositionEvent"in window,Ki=null;en&&"documentMode"in document&&(Ki=document.documentMode);var lw=en&&"TextEvent"in window&&!Ki,Um=en&&(!Bu||Ki&&8<Ki&&11>=Ki),zf=" ",Hf=!1;function zm(t,e){switch(t){case"keyup":return ow.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function aw(t,e){switch(t){case"compositionend":return Hm(e);case"keypress":return e.which!==32?null:(Hf=!0,zf);case"textInput":return t=e.data,t===zf&&Hf?null:t;default:return null}}function cw(t,e){if(Pr)return t==="compositionend"||!Bu&&zm(t,e)?(t=Bm(),Io=Ou=bn=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Um&&e.locale!=="ko"?null:e.data;default:return null}}var uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uw[t.type]:e==="textarea"}function jm(t,e,n,r){_m(r),e=Yo(e,"onChange"),0<e.length&&(n=new Mu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gi=null,fs=null;function dw(t){Zm(t,0)}function Ul(t){var e=Dr(t);if(fm(e))return t}function fw(t,e){if(t==="change")return e}var Vm=!1;if(en){var ka;if(en){var ba="oninput"in document;if(!ba){var Vf=document.createElement("div");Vf.setAttribute("oninput","return;"),ba=typeof Vf.oninput=="function"}ka=ba}else ka=!1;Vm=ka&&(!document.documentMode||9<document.documentMode)}function Wf(){Gi&&(Gi.detachEvent("onpropertychange",Wm),fs=Gi=null)}function Wm(t){if(t.propertyName==="value"&&Ul(fs)){var e=[];jm(e,fs,t,Pu(t)),km(dw,e)}}function hw(t,e,n){t==="focusin"?(Wf(),Gi=e,fs=n,Gi.attachEvent("onpropertychange",Wm)):t==="focusout"&&Wf()}function pw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(fs)}function mw(t,e){if(t==="click")return Ul(e)}function gw(t,e){if(t==="input"||t==="change")return Ul(e)}function yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:yw;function hs(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ic.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function $f(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,e){var n=$f(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$f(n)}}function $m(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$m(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Km(){for(var t=window,e=Ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ho(t.document)}return e}function Uu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vw(t){var e=Km(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(r!==null&&Uu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kf(n,s);var o=Kf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _w=en&&"documentMode"in document&&11>=document.documentMode,Rr=null,kc=null,Yi=null,bc=!1;function Gf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bc||Rr==null||Rr!==Ho(r)||(r=Rr,"selectionStart"in r&&Uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&hs(Yi,r)||(Yi=r,r=Yo(kc,"onSelect"),0<r.length&&(e=new Mu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rr)))}function ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ar={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Sa={},Gm={};en&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function zl(t){if(Sa[t])return Sa[t];if(!Ar[t])return t;var e=Ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gm)return Sa[t]=e[n];return t}var Ym=zl("animationend"),qm=zl("animationiteration"),Qm=zl("animationstart"),Jm=zl("transitionend"),Xm=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){Xm.set(t,e),wr(e,[t])}for(var Ia=0;Ia<Yf.length;Ia++){var Ca=Yf[Ia],ww=Ca.toLowerCase(),xw=Ca[0].toUpperCase()+Ca.slice(1);$n(ww,"on"+xw)}$n(Ym,"onAnimationEnd");$n(qm,"onAnimationIteration");$n(Qm,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Jm,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function qf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,w_(r,e,void 0,t),t.currentTarget=null}function Zm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;qf(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;qf(i,l,c),s=a}}}if(Vo)throw t=_c,Vo=!1,_c=null,t}function J(t,e){var n=e[Nc];n===void 0&&(n=e[Nc]=new Set);var r=t+"__bubble";n.has(r)||(eg(e,t,2,!1),n.add(r))}function Ta(t,e,n){var r=0;e&&(r|=4),eg(n,t,r,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[co]){t[co]=!0,lm.forEach(function(n){n!=="selectionchange"&&(Ew.has(n)||Ta(n,!1,t),Ta(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Ta("selectionchange",!1,e))}}function eg(t,e,n,r){switch(Fm(e)){case 1:var i=M_;break;case 4:i=F_;break;default:i=Lu}n=i.bind(null,e,n,t),i=void 0,!vc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Na(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=tr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}km(function(){var c=s,f=Pu(n),d=[];e:{var u=Xm.get(t);if(u!==void 0){var p=Mu,y=t;switch(t){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":p=X_;break;case"focusin":y="focus",p=Ea;break;case"focusout":y="blur",p=Ea;break;case"beforeblur":case"afterblur":p=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tw;break;case Ym:case qm:case Qm:p=V_;break;case Jm:p=rw;break;case"scroll":p=B_;break;case"wheel":p=sw;break;case"copy":case"cut":case"paste":p=$_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uf}var v=(e&4)!==0,C=!v&&t==="scroll",m=v?u!==null?u+"Capture":null:u;v=[];for(var h=c,g;h!==null;){g=h;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=as(h,m),x!=null&&v.push(ms(h,x,g)))),C)break;h=h.return}0<v.length&&(u=new p(u,y,null,n,f),d.push({event:u,listeners:v}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==gc&&(y=n.relatedTarget||n.fromElement)&&(tr(y)||y[tn]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?tr(y):null,y!==null&&(C=xr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(v=Ff,x="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Uf,x="onPointerLeave",m="onPointerEnter",h="pointer"),C=p==null?u:Dr(p),g=y==null?u:Dr(y),u=new v(x,h+"leave",p,n,f),u.target=C,u.relatedTarget=g,x=null,tr(f)===c&&(v=new v(m,h+"enter",y,n,f),v.target=g,v.relatedTarget=C,x=v),C=x,p&&y)t:{for(v=p,m=y,h=0,g=v;g;g=Ir(g))h++;for(g=0,x=m;x;x=Ir(x))g++;for(;0<h-g;)v=Ir(v),h--;for(;0<g-h;)m=Ir(m),g--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ir(v),m=Ir(m)}v=null}else v=null;p!==null&&Qf(d,u,p,v,!1),y!==null&&C!==null&&Qf(d,C,y,v,!0)}}e:{if(u=c?Dr(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var _=fw;else if(jf(u))if(Vm)_=gw;else{_=pw;var k=hw}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(_=mw);if(_&&(_=_(t,c))){jm(d,_,n,f);break e}k&&k(t,u,c),t==="focusout"&&(k=u._wrapperState)&&k.controlled&&u.type==="number"&&dc(u,"number",u.value)}switch(k=c?Dr(c):window,t){case"focusin":(jf(k)||k.contentEditable==="true")&&(Rr=k,kc=c,Yi=null);break;case"focusout":Yi=kc=Rr=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,Gf(d,n,f);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":Gf(d,n,f)}var E;if(Bu)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Pr?zm(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Um&&n.locale!=="ko"&&(Pr||w!=="onCompositionStart"?w==="onCompositionEnd"&&Pr&&(E=Bm()):(bn=f,Ou="value"in bn?bn.value:bn.textContent,Pr=!0)),k=Yo(c,w),0<k.length&&(w=new Bf(w,t,null,n,f),d.push({event:w,listeners:k}),E?w.data=E:(E=Hm(n),E!==null&&(w.data=E)))),(E=lw?aw(t,n):cw(t,n))&&(c=Yo(c,"onBeforeInput"),0<c.length&&(f=new Bf("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=E))}Zm(d,e)})}function ms(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=as(t,n),s!=null&&r.unshift(ms(t,s,i)),s=as(t,e),s!=null&&r.push(ms(t,s,i))),t=t.return}return r}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=as(n,s),a!=null&&o.unshift(ms(n,a,l))):i||(a=as(n,s),a!=null&&o.push(ms(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kw=/\r\n?/g,bw=/\u0000|\uFFFD/g;function Jf(t){return(typeof t=="string"?t:""+t).replace(kw,`
`).replace(bw,"")}function uo(t,e,n){if(e=Jf(e),Jf(t)!==e&&n)throw Error(b(425))}function qo(){}var Sc=null,Ic=null;function Cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tc=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(t){return Xf.resolve(null).then(t).catch(Cw)}:Tc;function Cw(t){setTimeout(function(){throw t})}function Pa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ds(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ds(e)}function Pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vi=Math.random().toString(36).slice(2),Lt="__reactFiber$"+vi,gs="__reactProps$"+vi,tn="__reactContainer$"+vi,Nc="__reactEvents$"+vi,Tw="__reactListeners$"+vi,Nw="__reactHandles$"+vi;function tr(t){var e=t[Lt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[Lt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zf(t);t!==null;){if(n=t[Lt])return n;t=Zf(t)}return e}t=n,n=t.parentNode}return null}function Us(t){return t=t[Lt]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Hl(t){return t[gs]||null}var Pc=[],Lr=-1;function Kn(t){return{current:t}}function X(t){0>Lr||(t.current=Pc[Lr],Pc[Lr]=null,Lr--)}function q(t,e){Lr++,Pc[Lr]=t.current,t.current=e}var Hn={},De=Kn(Hn),Ge=Kn(!1),cr=Hn;function Zr(t,e){var n=t.type.contextTypes;if(!n)return Hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(t){return t=t.childContextTypes,t!=null}function Qo(){X(Ge),X(De)}function eh(t,e,n){if(De.current!==Hn)throw Error(b(168));q(De,e),q(Ge,n)}function tg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,h_(t)||"Unknown",i));return re({},n,r)}function Jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hn,cr=De.current,q(De,t),q(Ge,Ge.current),!0}function th(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=tg(t,e,cr),r.__reactInternalMemoizedMergedChildContext=t,X(Ge),X(De),q(De,t)):X(Ge),q(Ge,n)}var $t=null,jl=!1,Ra=!1;function ng(t){$t===null?$t=[t]:$t.push(t)}function Pw(t){jl=!0,ng(t)}function Gn(){if(!Ra&&$t!==null){Ra=!0;var t=0,e=W;try{var n=$t;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$t=null,jl=!1}catch(i){throw $t!==null&&($t=$t.slice(t+1)),Cm(Ru,Gn),i}finally{W=e,Ra=!1}}return null}var Or=[],Mr=0,Xo=null,Zo=0,st=[],ot=0,ur=null,Gt=1,Yt="";function Jn(t,e){Or[Mr++]=Zo,Or[Mr++]=Xo,Xo=t,Zo=e}function rg(t,e,n){st[ot++]=Gt,st[ot++]=Yt,st[ot++]=ur,ur=t;var r=Gt;t=Yt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gt=1<<32-St(e)+i|n<<i|r,Yt=s+t}else Gt=1<<s|n<<i|r,Yt=t}function zu(t){t.return!==null&&(Jn(t,1),rg(t,1,0))}function Hu(t){for(;t===Xo;)Xo=Or[--Mr],Or[Mr]=null,Zo=Or[--Mr],Or[Mr]=null;for(;t===ur;)ur=st[--ot],st[ot]=null,Yt=st[--ot],st[ot]=null,Gt=st[--ot],st[ot]=null}var Ze=null,Xe=null,Z=!1,_t=null;function ig(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=Pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ur!==null?{id:Gt,overflow:Yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Xe=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ac(t){if(Z){var e=Xe;if(e){var n=e;if(!nh(t,e)){if(Rc(t))throw Error(b(418));e=Pn(n.nextSibling);var r=Ze;e&&nh(t,e)?ig(r,n):(t.flags=t.flags&-4097|2,Z=!1,Ze=t)}}else{if(Rc(t))throw Error(b(418));t.flags=t.flags&-4097|2,Z=!1,Ze=t}}}function rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function fo(t){if(t!==Ze)return!1;if(!Z)return rh(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cc(t.type,t.memoizedProps)),e&&(e=Xe)){if(Rc(t))throw sg(),Error(b(418));for(;e;)ig(t,e),e=Pn(e.nextSibling)}if(rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xe=Pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Ze?Pn(t.stateNode.nextSibling):null;return!0}function sg(){for(var t=Xe;t;)t=Pn(t.nextSibling)}function ei(){Xe=Ze=null,Z=!1}function ju(t){_t===null?_t=[t]:_t.push(t)}var Rw=cn.ReactCurrentBatchConfig;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ih(t){var e=t._init;return e(t._payload)}function og(t){function e(m,h){if(t){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Ln(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,h,g,x){return h===null||h.tag!==6?(h=Ba(g,m.mode,x),h.return=m,h):(h=i(h,g),h.return=m,h)}function a(m,h,g,x){var _=g.type;return _===Nr?f(m,h,g.props.children,x,g.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mn&&ih(_)===h.type)?(x=i(h,g.props),x.ref=Di(m,h,g),x.return=m,x):(x=Lo(g.type,g.key,g.props,null,m.mode,x),x.ref=Di(m,h,g),x.return=m,x)}function c(m,h,g,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Ua(g,m.mode,x),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function f(m,h,g,x,_){return h===null||h.tag!==7?(h=lr(g,m.mode,x,_),h.return=m,h):(h=i(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ba(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case to:return g=Lo(h.type,h.key,h.props,null,m.mode,g),g.ref=Di(m,null,h),g.return=m,g;case Tr:return h=Ua(h,m.mode,g),h.return=m,h;case mn:var x=h._init;return d(m,x(h._payload),g)}if(Hi(h)||Ti(h))return h=lr(h,m.mode,g,null),h.return=m,h;ho(m,h)}return null}function u(m,h,g,x){var _=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:l(m,h,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case to:return g.key===_?a(m,h,g,x):null;case Tr:return g.key===_?c(m,h,g,x):null;case mn:return _=g._init,u(m,h,_(g._payload),x)}if(Hi(g)||Ti(g))return _!==null?null:f(m,h,g,x,null);ho(m,g)}return null}function p(m,h,g,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,l(h,m,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case to:return m=m.get(x.key===null?g:x.key)||null,a(h,m,x,_);case Tr:return m=m.get(x.key===null?g:x.key)||null,c(h,m,x,_);case mn:var k=x._init;return p(m,h,g,k(x._payload),_)}if(Hi(x)||Ti(x))return m=m.get(g)||null,f(h,m,x,_,null);ho(h,x)}return null}function y(m,h,g,x){for(var _=null,k=null,E=h,w=h=0,P=null;E!==null&&w<g.length;w++){E.index>w?(P=E,E=null):P=E.sibling;var A=u(m,E,g[w],x);if(A===null){E===null&&(E=P);break}t&&E&&A.alternate===null&&e(m,E),h=s(A,h,w),k===null?_=A:k.sibling=A,k=A,E=P}if(w===g.length)return n(m,E),Z&&Jn(m,w),_;if(E===null){for(;w<g.length;w++)E=d(m,g[w],x),E!==null&&(h=s(E,h,w),k===null?_=E:k.sibling=E,k=E);return Z&&Jn(m,w),_}for(E=r(m,E);w<g.length;w++)P=p(E,m,w,g[w],x),P!==null&&(t&&P.alternate!==null&&E.delete(P.key===null?w:P.key),h=s(P,h,w),k===null?_=P:k.sibling=P,k=P);return t&&E.forEach(function(Q){return e(m,Q)}),Z&&Jn(m,w),_}function v(m,h,g,x){var _=Ti(g);if(typeof _!="function")throw Error(b(150));if(g=_.call(g),g==null)throw Error(b(151));for(var k=_=null,E=h,w=h=0,P=null,A=g.next();E!==null&&!A.done;w++,A=g.next()){E.index>w?(P=E,E=null):P=E.sibling;var Q=u(m,E,A.value,x);if(Q===null){E===null&&(E=P);break}t&&E&&Q.alternate===null&&e(m,E),h=s(Q,h,w),k===null?_=Q:k.sibling=Q,k=Q,E=P}if(A.done)return n(m,E),Z&&Jn(m,w),_;if(E===null){for(;!A.done;w++,A=g.next())A=d(m,A.value,x),A!==null&&(h=s(A,h,w),k===null?_=A:k.sibling=A,k=A);return Z&&Jn(m,w),_}for(E=r(m,E);!A.done;w++,A=g.next())A=p(E,m,w,A.value,x),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?w:A.key),h=s(A,h,w),k===null?_=A:k.sibling=A,k=A);return t&&E.forEach(function(pe){return e(m,pe)}),Z&&Jn(m,w),_}function C(m,h,g,x){if(typeof g=="object"&&g!==null&&g.type===Nr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case to:e:{for(var _=g.key,k=h;k!==null;){if(k.key===_){if(_=g.type,_===Nr){if(k.tag===7){n(m,k.sibling),h=i(k,g.props.children),h.return=m,m=h;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===mn&&ih(_)===k.type){n(m,k.sibling),h=i(k,g.props),h.ref=Di(m,k,g),h.return=m,m=h;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Nr?(h=lr(g.props.children,m.mode,x,g.key),h.return=m,m=h):(x=Lo(g.type,g.key,g.props,null,m.mode,x),x.ref=Di(m,h,g),x.return=m,m=x)}return o(m);case Tr:e:{for(k=g.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Ua(g,m.mode,x),h.return=m,m=h}return o(m);case mn:return k=g._init,C(m,h,k(g._payload),x)}if(Hi(g))return y(m,h,g,x);if(Ti(g))return v(m,h,g,x);ho(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Ba(g,m.mode,x),h.return=m,m=h),o(m)):n(m,h)}return C}var ti=og(!0),lg=og(!1),el=Kn(null),tl=null,Fr=null,Vu=null;function Wu(){Vu=Fr=tl=null}function $u(t){var e=el.current;X(el),t._currentValue=e}function Dc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $r(t,e){tl=t,Vu=Fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(Vu!==t)if(t={context:t,memoizedValue:e,next:null},Fr===null){if(tl===null)throw Error(b(308));Fr=t,tl.dependencies={lanes:0,firstContext:t}}else Fr=Fr.next=t;return e}var nr=null;function Ku(t){nr===null?nr=[t]:nr.push(t)}function ag(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ku(e)):(n.next=i.next,i.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gn=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ku(r)):(e.next=i.next,i.next=e),r.interleaved=e,nn(t,n)}function To(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Au(t,n)}}function sh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,r){var i=t.updateQueue;gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,f=c=a=null,l=s;do{var u=l.lane,p=l.eventTime;if((r&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,v=l;switch(u=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,u);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,u=typeof y=="function"?y.call(p,d,u):y,u==null)break e;d=re({},d,u);break e;case 2:gn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,u=i.effects,u===null?i.effects=[l]:u.push(l))}else p={eventTime:p,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=p,a=d):f=f.next=p,o|=u;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;u=l,l=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fr|=o,t.lanes=o,t.memoizedState=d}}function oh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var zs={},Ut=Kn(zs),ys=Kn(zs),vs=Kn(zs);function rr(t){if(t===zs)throw Error(b(174));return t}function Yu(t,e){switch(q(vs,e),q(ys,t),q(Ut,zs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hc(e,t)}X(Ut),q(Ut,e)}function ni(){X(Ut),X(ys),X(vs)}function ug(t){rr(vs.current);var e=rr(Ut.current),n=hc(e,t.type);e!==n&&(q(ys,t),q(Ut,n))}function qu(t){ys.current===t&&(X(Ut),X(ys))}var ee=Kn(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Aa=[];function Qu(){for(var t=0;t<Aa.length;t++)Aa[t]._workInProgressVersionPrimary=null;Aa.length=0}var No=cn.ReactCurrentDispatcher,Da=cn.ReactCurrentBatchConfig,dr=0,ne=null,ce=null,ve=null,il=!1,qi=!1,_s=0,Aw=0;function Te(){throw Error(b(321))}function Ju(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function Xu(t,e,n,r,i,s){if(dr=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,No.current=t===null||t.memoizedState===null?Mw:Fw,t=n(r,i),qi){s=0;do{if(qi=!1,_s=0,25<=s)throw Error(b(301));s+=1,ve=ce=null,e.updateQueue=null,No.current=Bw,t=n(r,i)}while(qi)}if(No.current=sl,e=ce!==null&&ce.next!==null,dr=0,ve=ce=ne=null,il=!1,e)throw Error(b(300));return t}function Zu(){var t=_s!==0;return _s=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ne.memoizedState=ve=t:ve=ve.next=t,ve}function ft(){if(ce===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=ve===null?ne.memoizedState:ve.next;if(e!==null)ve=e,ce=t;else{if(t===null)throw Error(b(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},ve===null?ne.memoizedState=ve=t:ve=ve.next=t}return ve}function ws(t,e){return typeof e=="function"?e(t):e}function La(t){var e=ft(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var f=c.lane;if((dr&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ne.lanes|=f,fr|=f}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,Nt(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oa(t){var e=ft(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dg(){}function fg(t,e){var n=ne,r=ft(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,ed(mg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,xs(9,pg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(b(349));dr&30||hg(n,e,i)}return i}function hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pg(t,e,n,r){e.value=n,e.getSnapshot=r,gg(e)&&yg(t)}function mg(t,e,n){return n(function(){gg(e)&&yg(t)})}function gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function yg(t){var e=nn(t,1);e!==null&&It(e,t,1,-1)}function lh(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},e.queue=t,t=t.dispatch=Ow.bind(null,ne,t),[e.memoizedState,t]}function xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vg(){return ft().memoizedState}function Po(t,e,n,r){var i=At();ne.flags|=t,i.memoizedState=xs(1|e,n,void 0,r===void 0?null:r)}function Vl(t,e,n,r){var i=ft();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&Ju(r,o.deps)){i.memoizedState=xs(e,n,s,r);return}}ne.flags|=t,i.memoizedState=xs(1|e,n,s,r)}function ah(t,e){return Po(8390656,8,t,e)}function ed(t,e){return Vl(2048,8,t,e)}function _g(t,e){return Vl(4,2,t,e)}function wg(t,e){return Vl(4,4,t,e)}function xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Eg(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,xg.bind(null,e,t),n)}function td(){}function kg(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ju(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bg(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ju(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sg(t,e,n){return dr&21?(Nt(n,e)||(n=Pm(),ne.lanes|=n,fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function Dw(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Da.transition;Da.transition={};try{t(!1),e()}finally{W=n,Da.transition=r}}function Ig(){return ft().memoizedState}function Lw(t,e,n){var r=Dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cg(t))Tg(e,n);else if(n=ag(t,e,n,r),n!==null){var i=Me();It(n,t,r,i),Ng(n,e,r)}}function Ow(t,e,n){var r=Dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cg(t))Tg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Nt(l,o)){var a=e.interleaved;a===null?(i.next=i,Ku(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=ag(t,e,i,r),n!==null&&(i=Me(),It(n,t,r,i),Ng(n,e,r))}}function Cg(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function Tg(t,e){qi=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ng(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Au(t,n)}}var sl={readContext:dt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Mw={readContext:dt,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:ah,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Po(4194308,4,xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Po(4194308,4,t,e)},useInsertionEffect:function(t,e){return Po(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Lw.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:lh,useDebugValue:td,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=lh(!1),e=t[0];return t=Dw.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=At();if(Z){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),we===null)throw Error(b(349));dr&30||hg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ah(mg.bind(null,r,s,t),[t]),r.flags|=2048,xs(9,pg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=At(),e=we.identifierPrefix;if(Z){var n=Yt,r=Gt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Aw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fw={readContext:dt,useCallback:kg,useContext:dt,useEffect:ed,useImperativeHandle:Eg,useInsertionEffect:_g,useLayoutEffect:wg,useMemo:bg,useReducer:La,useRef:vg,useState:function(){return La(ws)},useDebugValue:td,useDeferredValue:function(t){var e=ft();return Sg(e,ce.memoizedState,t)},useTransition:function(){var t=La(ws)[0],e=ft().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:fg,useId:Ig,unstable_isNewReconciler:!1},Bw={readContext:dt,useCallback:kg,useContext:dt,useEffect:ed,useImperativeHandle:Eg,useInsertionEffect:_g,useLayoutEffect:wg,useMemo:bg,useReducer:Oa,useRef:vg,useState:function(){return Oa(ws)},useDebugValue:td,useDeferredValue:function(t){var e=ft();return ce===null?e.memoizedState=t:Sg(e,ce.memoizedState,t)},useTransition:function(){var t=Oa(ws)[0],e=ft().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:fg,useId:Ig,unstable_isNewReconciler:!1};function gt(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Dn(t),s=Xt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(It(e,t,i,r),To(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Dn(t),s=Xt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rn(t,s,i),e!==null&&(It(e,t,i,r),To(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=Dn(t),i=Xt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rn(t,i,r),e!==null&&(It(e,t,r,n),To(e,t,r))}};function ch(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hs(n,r)||!hs(i,s):!0}function Pg(t,e,n){var r=!1,i=Hn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Ye(e)?cr:De.current,r=e.contextTypes,s=(r=r!=null)?Zr(t,i):Hn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function uh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function Oc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Gu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Ye(e)?cr:De.current,i.context=Zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wl.enqueueReplaceState(i,i.state,null),nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,e){try{var n="",r=e;do n+=f_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ma(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function Rg(t,e,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ll||(ll=!0,Kc=r),Mc(t,e)},n}function Ag(t,e,n){n=Xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mc(t,e),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Uw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Zw.bind(null,t,e,n),e.then(t,t))}function fh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var zw=cn.ReactCurrentOwner,$e=!1;function Le(t,e,n,r){e.child=t===null?lg(e,null,n,r):ti(e,t.child,n,r)}function ph(t,e,n,r,i){n=n.render;var s=e.ref;return $r(e,i),r=Xu(t,e,n,r,s,i),n=Zu(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(Z&&n&&zu(e),e.flags|=1,Le(t,e,r,i),e.child)}function mh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dg(t,e,s,r,i)):(t=Lo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=Ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hs(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,rn(t,e,i)}return Fc(t,e,n,r,i)}function Lg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Ur,Je),Je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(Ur,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(Ur,Je),Je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(Ur,Je),Je|=r;return Le(t,e,i,n),e.child}function Og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fc(t,e,n,r,i){var s=Ye(n)?cr:De.current;return s=Zr(e,s),$r(e,i),n=Xu(t,e,n,r,s,i),r=Zu(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(Z&&r&&zu(e),e.flags|=1,Le(t,e,n,i),e.child)}function gh(t,e,n,r,i){if(Ye(n)){var s=!0;Jo(e)}else s=!1;if($r(e,i),e.stateNode===null)Ro(t,e),Pg(e,n,r),Oc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Ye(n)?cr:De.current,c=Zr(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&uh(e,o,r,c),gn=!1;var u=e.memoizedState;o.state=u,nl(e,r,o,i),a=e.memoizedState,l!==r||u!==a||Ge.current||gn?(typeof f=="function"&&(Lc(e,n,f,r),a=e.memoizedState),(l=gn||ch(e,n,l,r,u,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cg(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:gt(e.type,l),o.props=c,d=e.pendingProps,u=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=dt(a):(a=Ye(n)?cr:De.current,a=Zr(e,a));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||u!==a)&&uh(e,o,r,a),gn=!1,u=e.memoizedState,o.state=u,nl(e,r,o,i);var y=e.memoizedState;l!==d||u!==y||Ge.current||gn?(typeof p=="function"&&(Lc(e,n,p,r),y=e.memoizedState),(c=gn||ch(e,n,c,r,u,y,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),r=!1)}return Bc(t,e,n,r,s,i)}function Bc(t,e,n,r,i,s){Og(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&th(e,n,!1),rn(t,e,s);r=e.stateNode,zw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ti(e,t.child,null,s),e.child=ti(e,null,l,s)):Le(t,e,l,s),e.memoizedState=r.state,i&&th(e,n,!0),e.child}function Mg(t){var e=t.stateNode;e.pendingContext?eh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eh(t,e.context,!1),Yu(t,e.containerInfo)}function yh(t,e,n,r,i){return ei(),ju(i),e.flags|=256,Le(t,e,n,r),e.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fg(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(ee,i&1),t===null)return Ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,r,0,null),t=lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zc(n),e.memoizedState=Uc,t):nd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Hw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ln(l,s):(s=lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uc,r}return s=t.child,t=s.sibling,r=Ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nd(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,n,r){return r!==null&&ju(r),ti(e,t.child,null,n),t=nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ma(Error(b(422))),po(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gl({mode:"visible",children:r.children},i,0,null),s=lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ti(e,t.child,null,o),e.child.memoizedState=zc(o),e.memoizedState=Uc,s);if(!(e.mode&1))return po(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Ma(s,r,void 0),po(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(t,i),It(r,t,i,-1))}return ad(),r=Ma(Error(b(421))),po(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ex.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xe=Pn(i.nextSibling),Ze=e,Z=!0,_t=null,t!==null&&(st[ot++]=Gt,st[ot++]=Yt,st[ot++]=ur,Gt=t.id,Yt=t.overflow,ur=e),e=nd(e,r.children),e.flags|=4096,e)}function vh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dc(t.return,e,n)}function Fa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vh(t,n,e);else if(t.tag===19)vh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fa(e,!0,n,null,s);break;case"together":Fa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jw(t,e,n){switch(e.tag){case 3:Mg(e),ei();break;case 5:ug(e);break;case 1:Ye(e.type)&&Jo(e);break;case 4:Yu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(el,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?Fg(t,e,n):(q(ee,ee.current&1),t=rn(t,e,n),t!==null?t.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,Lg(t,e,n)}return rn(t,e,n)}var Ug,Hc,zg,Hg;Ug=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};zg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rr(Ut.current);var s=null;switch(n){case"input":i=cc(t,i),r=cc(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=fc(t,i),r=fc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qo)}pc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(os.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(os.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&J("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Li(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vw(t,e,n){var r=e.pendingProps;switch(Hu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return Ye(e.type)&&Qo(),Ne(e),null;case 3:return r=e.stateNode,ni(),X(Ge),X(De),Qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(qc(_t),_t=null))),Hc(t,e),Ne(e),null;case 5:qu(e);var i=rr(vs.current);if(n=e.type,t!==null&&e.stateNode!=null)zg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ne(e),null}if(t=rr(Ut.current),fo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Lt]=e,r[gs]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Vi.length;i++)J(Vi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Cf(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Nf(r,s),J("invalid",r)}pc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&uo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&uo(r.textContent,l,t),i=["children",""+l]):os.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":no(r),Tf(r,s,!0);break;case"textarea":no(r),Pf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Lt]=e,t[gs]=r,Ug(t,e,!1,!1),e.stateNode=t;e:{switch(o=mc(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vi.length;i++)J(Vi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Cf(t,r),i=cc(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),J("invalid",t);break;case"textarea":Nf(t,r),i=fc(t,r),J("invalid",t);break;default:i=r}pc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?vm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&gm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ls(t,a):typeof a=="number"&&ls(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(os.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",t):a!=null&&Iu(t,s,a,o))}switch(n){case"input":no(t),Tf(t,r,!1);break;case"textarea":no(t),Pf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)Hg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=rr(vs.current),rr(Ut.current),fo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Lt]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=e,e.stateNode=r}return Ne(e),null;case 13:if(X(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&Xe!==null&&e.mode&1&&!(e.flags&128))sg(),ei(),e.flags|=98560,s=!1;else if(s=fo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Lt]=e}else ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ne(e),s=!1}else _t!==null&&(qc(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?he===0&&(he=3):ad())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return ni(),Hc(t,e),t===null&&ps(e.stateNode.containerInfo),Ne(e),null;case 10:return $u(e.type._context),Ne(e),null;case 17:return Ye(e.type)&&Qo(),Ne(e),null;case 19:if(X(ee),s=e.memoizedState,s===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Li(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=128,Li(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>ii&&(e.flags|=128,r=!0,Li(s,!1),e.lanes=4194304)}else{if(!r)if(t=rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return Ne(e),null}else 2*le()-s.renderingStartTime>ii&&n!==1073741824&&(e.flags|=128,r=!0,Li(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return ld(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function Ww(t,e){switch(Hu(e),e.tag){case 1:return Ye(e.type)&&Qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ni(),X(Ge),X(De),Qu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qu(e),null;case 13:if(X(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(ee),null;case 4:return ni(),null;case 10:return $u(e.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var mo=!1,Re=!1,$w=typeof WeakSet=="function"?WeakSet:Set,T=null;function Br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function jc(t,e,n){try{n()}catch(r){ie(t,e,r)}}var _h=!1;function Kw(t,e){if(Sc=Ko,t=Km(),Uu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===t)break t;if(u===n&&++c===i&&(l=o),u===s&&++f===r&&(a=o),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ic={focusedElem:t,selectionRange:n},Ko=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:gt(e.type,v),C);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){ie(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=_h,_h=!1,y}function Qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jc(e,n,s)}i=i.next}while(i!==r)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jg(t){var e=t.alternate;e!==null&&(t.alternate=null,jg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Lt],delete e[gs],delete e[Nc],delete e[Tw],delete e[Nw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vg(t){return t.tag===5||t.tag===3||t.tag===4}function wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(r!==4&&(t=t.child,t!==null))for(Wc(t,e,n),t=t.sibling;t!==null;)Wc(t,e,n),t=t.sibling}function $c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($c(t,e,n),t=t.sibling;t!==null;)$c(t,e,n),t=t.sibling}var Ee=null,yt=!1;function hn(t,e,n){for(n=n.child;n!==null;)Wg(t,e,n),n=n.sibling}function Wg(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Re||Br(n,e);case 6:var r=Ee,i=yt;Ee=null,hn(t,e,n),Ee=r,yt=i,Ee!==null&&(yt?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(yt?(t=Ee,n=n.stateNode,t.nodeType===8?Pa(t.parentNode,n):t.nodeType===1&&Pa(t,n),ds(t)):Pa(Ee,n.stateNode));break;case 4:r=Ee,i=yt,Ee=n.stateNode.containerInfo,yt=!0,hn(t,e,n),Ee=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jc(n,e,o),i=i.next}while(i!==r)}hn(t,e,n);break;case 1:if(!Re&&(Br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}hn(t,e,n);break;case 21:hn(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,hn(t,e,n),Re=r):hn(t,e,n);break;default:hn(t,e,n)}}function xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $w),e.forEach(function(r){var i=tx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,yt=!1;break e;case 3:Ee=l.stateNode.containerInfo,yt=!0;break e;case 4:Ee=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(Ee===null)throw Error(b(160));Wg(s,o,i),Ee=null,yt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$g(e,t),e=e.sibling}function $g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),Rt(t),r&4){try{Qi(3,t,t.return),$l(3,t)}catch(v){ie(t,t.return,v)}try{Qi(5,t,t.return)}catch(v){ie(t,t.return,v)}}break;case 1:mt(e,t),Rt(t),r&512&&n!==null&&Br(n,n.return);break;case 5:if(mt(e,t),Rt(t),r&512&&n!==null&&Br(n,n.return),t.flags&32){var i=t.stateNode;try{ls(i,"")}catch(v){ie(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hm(i,s),mc(l,o);var c=mc(l,s);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?vm(i,d):f==="dangerouslySetInnerHTML"?gm(i,d):f==="children"?ls(i,d):Iu(i,f,d,c)}switch(l){case"input":uc(i,s);break;case"textarea":pm(i,s);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hr(i,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Hr(i,!!s.multiple,s.defaultValue,!0):Hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[gs]=s}catch(v){ie(t,t.return,v)}}break;case 6:if(mt(e,t),Rt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ie(t,t.return,v)}}break;case 3:if(mt(e,t),Rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ds(e.containerInfo)}catch(v){ie(t,t.return,v)}break;case 4:mt(e,t),Rt(t);break;case 13:mt(e,t),Rt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sd=le())),r&4&&xh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(c=Re)||f,mt(e,t),Re=c):mt(e,t),Rt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(T=t,f=t.child;f!==null;){for(d=T=f;T!==null;){switch(u=T,p=u.child,u.tag){case 0:case 11:case 14:case 15:Qi(4,u,u.return);break;case 1:Br(u,u.return);var y=u.stateNode;if(typeof y.componentWillUnmount=="function"){r=u,n=u.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ie(r,n,v)}}break;case 5:Br(u,u.return);break;case 22:if(u.memoizedState!==null){kh(d);continue}}p!==null?(p.return=u,T=p):kh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ym("display",o))}catch(v){ie(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){ie(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(e,t),Rt(t),r&4&&xh(t);break;case 21:break;default:mt(e,t),Rt(t)}}function Rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vg(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ls(i,""),r.flags&=-33);var s=wh(t);$c(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wh(t);Wc(t,l,o);break;default:throw Error(b(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gw(t,e,n){T=t,Kg(t)}function Kg(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Re;l=mo;var c=Re;if(mo=o,(Re=a)&&!c)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?bh(i):a!==null?(a.return=o,T=a):bh(i);for(;s!==null;)T=s,Kg(s),s=s.sibling;T=i,mo=l,Re=c}Eh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Eh(t)}}function Eh(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||$l(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&oh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}oh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ds(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Re||e.flags&512&&Vc(e)}catch(u){ie(e,e.return,u)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function kh(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function bh(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{Vc(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{Vc(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var Yw=Math.ceil,ol=cn.ReactCurrentDispatcher,rd=cn.ReactCurrentOwner,ut=cn.ReactCurrentBatchConfig,H=0,we=null,ae=null,be=0,Je=0,Ur=Kn(0),he=0,Es=null,fr=0,Kl=0,id=0,Ji=null,We=null,sd=0,ii=1/0,Wt=null,ll=!1,Kc=null,An=null,go=!1,Sn=null,al=0,Xi=0,Gc=null,Ao=-1,Do=0;function Me(){return H&6?le():Ao!==-1?Ao:Ao=le()}function Dn(t){return t.mode&1?H&2&&be!==0?be&-be:Rw.transition!==null?(Do===0&&(Do=Pm()),Do):(t=W,t!==0||(t=window.event,t=t===void 0?16:Fm(t.type)),t):1}function It(t,e,n,r){if(50<Xi)throw Xi=0,Gc=null,Error(b(185));Fs(t,n,r),(!(H&2)||t!==we)&&(t===we&&(!(H&2)&&(Kl|=n),he===4&&wn(t,be)),qe(t,r),n===1&&H===0&&!(e.mode&1)&&(ii=le()+500,jl&&Gn()))}function qe(t,e){var n=t.callbackNode;R_(t,e);var r=$o(t,t===we?be:0);if(r===0)n!==null&&Df(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Df(n),e===1)t.tag===0?Pw(Sh.bind(null,t)):ng(Sh.bind(null,t)),Iw(function(){!(H&6)&&Gn()}),n=null;else{switch(Rm(r)){case 1:n=Ru;break;case 4:n=Tm;break;case 16:n=Wo;break;case 536870912:n=Nm;break;default:n=Wo}n=ey(n,Gg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gg(t,e){if(Ao=-1,Do=0,H&6)throw Error(b(327));var n=t.callbackNode;if(Kr()&&t.callbackNode!==n)return null;var r=$o(t,t===we?be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cl(t,r);else{e=r;var i=H;H|=2;var s=qg();(we!==t||be!==e)&&(Wt=null,ii=le()+500,or(t,e));do try{Jw();break}catch(l){Yg(t,l)}while(!0);Wu(),ol.current=s,H=i,ae!==null?e=0:(we=null,be=0,e=he)}if(e!==0){if(e===2&&(i=wc(t),i!==0&&(r=i,e=Yc(t,i))),e===1)throw n=Es,or(t,0),wn(t,r),qe(t,le()),n;if(e===6)wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!qw(i)&&(e=cl(t,r),e===2&&(s=wc(t),s!==0&&(r=s,e=Yc(t,s))),e===1))throw n=Es,or(t,0),wn(t,r),qe(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Xn(t,We,Wt);break;case 3:if(wn(t,r),(r&130023424)===r&&(e=sd+500-le(),10<e)){if($o(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tc(Xn.bind(null,t,We,Wt),e);break}Xn(t,We,Wt);break;case 4:if(wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yw(r/1960))-r,10<r){t.timeoutHandle=Tc(Xn.bind(null,t,We,Wt),r);break}Xn(t,We,Wt);break;case 5:Xn(t,We,Wt);break;default:throw Error(b(329))}}}return qe(t,le()),t.callbackNode===n?Gg.bind(null,t):null}function Yc(t,e){var n=Ji;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=cl(t,e),t!==2&&(e=We,We=n,e!==null&&qc(e)),t}function qc(t){We===null?We=t:We.push.apply(We,t)}function qw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e){for(e&=~id,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Sh(t){if(H&6)throw Error(b(327));Kr();var e=$o(t,0);if(!(e&1))return qe(t,le()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=wc(t);r!==0&&(e=r,n=Yc(t,r))}if(n===1)throw n=Es,or(t,0),wn(t,e),qe(t,le()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xn(t,We,Wt),qe(t,le()),null}function od(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(ii=le()+500,jl&&Gn())}}function hr(t){Sn!==null&&Sn.tag===0&&!(H&6)&&Kr();var e=H;H|=1;var n=ut.transition,r=W;try{if(ut.transition=null,W=1,t)return t()}finally{W=r,ut.transition=n,H=e,!(H&6)&&Gn()}}function ld(){Je=Ur.current,X(Ur)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sw(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Hu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:ni(),X(Ge),X(De),Qu();break;case 5:qu(r);break;case 4:ni();break;case 13:X(ee);break;case 19:X(ee);break;case 10:$u(r.type._context);break;case 22:case 23:ld()}n=n.return}if(we=t,ae=t=Ln(t.current,null),be=Je=e,he=0,Es=null,id=Kl=fr=0,We=Ji=null,nr!==null){for(e=0;e<nr.length;e++)if(n=nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}nr=null}return t}function Yg(t,e){do{var n=ae;try{if(Wu(),No.current=sl,il){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(dr=0,ve=ce=ne=null,qi=!1,_s=0,rd.current=null,n===null||n.return===null){he=1,Es=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=be,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=fh(o);if(p!==null){p.flags&=-257,hh(p,o,l,s,e),p.mode&1&&dh(s,c,e),e=p,a=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(a),e.updateQueue=v}else y.add(a);break e}else{if(!(e&1)){dh(s,c,e),ad();break e}a=Error(b(426))}}else if(Z&&l.mode&1){var C=fh(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),hh(C,o,l,s,e),ju(ri(a,l));break e}}s=a=ri(a,l),he!==4&&(he=2),Ji===null?Ji=[s]:Ji.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Rg(s,a,e);sh(s,m);break e;case 1:l=a;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(An===null||!An.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Ag(s,l,e);sh(s,x);break e}}s=s.return}while(s!==null)}Jg(n)}catch(_){e=_,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function qg(){var t=ol.current;return ol.current=sl,t===null?sl:t}function ad(){(he===0||he===3||he===2)&&(he=4),we===null||!(fr&268435455)&&!(Kl&268435455)||wn(we,be)}function cl(t,e){var n=H;H|=2;var r=qg();(we!==t||be!==e)&&(Wt=null,or(t,e));do try{Qw();break}catch(i){Yg(t,i)}while(!0);if(Wu(),H=n,ol.current=r,ae!==null)throw Error(b(261));return we=null,be=0,he}function Qw(){for(;ae!==null;)Qg(ae)}function Jw(){for(;ae!==null&&!E_();)Qg(ae)}function Qg(t){var e=Zg(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Jg(t):ae=e,rd.current=null}function Jg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ww(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ae=null;return}}else if(n=Vw(n,e,Je),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);he===0&&(he=5)}function Xn(t,e,n){var r=W,i=ut.transition;try{ut.transition=null,W=1,Xw(t,e,n,r)}finally{ut.transition=i,W=r}return null}function Xw(t,e,n,r){do Kr();while(Sn!==null);if(H&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(A_(t,s),t===we&&(ae=we=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,ey(Wo,function(){return Kr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=W;W=1;var l=H;H|=4,rd.current=null,Kw(t,n),$g(n,t),vw(Ic),Ko=!!Sc,Ic=Sc=null,t.current=n,Gw(n),k_(),H=l,W=o,ut.transition=s}else t.current=n;if(go&&(go=!1,Sn=t,al=i),s=t.pendingLanes,s===0&&(An=null),I_(n.stateNode),qe(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,t=Kc,Kc=null,t;return al&1&&t.tag!==0&&Kr(),s=t.pendingLanes,s&1?t===Gc?Xi++:(Xi=0,Gc=t):Xi=0,Gn(),null}function Kr(){if(Sn!==null){var t=Rm(al),e=ut.transition,n=W;try{if(ut.transition=null,W=16>t?16:t,Sn===null)var r=!1;else{if(t=Sn,Sn=null,al=0,H&6)throw Error(b(331));var i=H;for(H|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(T=c;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:Qi(8,f,s)}var d=f.child;if(d!==null)d.return=f,T=d;else for(;T!==null;){f=T;var u=f.sibling,p=f.return;if(jg(f),f===c){T=null;break}if(u!==null){u.return=p,T=u;break}T=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,T=m;break e}T=s.return}}var h=t.current;for(T=h;T!==null;){o=T;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,T=g;else e:for(o=h;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$l(9,l)}}catch(_){ie(l,l.return,_)}if(l===o){T=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,T=x;break e}T=l.return}}if(H=i,Gn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Fl,t)}catch{}r=!0}return r}finally{W=n,ut.transition=e}}return!1}function Ih(t,e,n){e=ri(n,e),e=Rg(t,e,1),t=Rn(t,e,1),e=Me(),t!==null&&(Fs(t,1,e),qe(t,e))}function ie(t,e,n){if(t.tag===3)Ih(t,t,n);else for(;e!==null;){if(e.tag===3){Ih(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){t=ri(n,t),t=Ag(e,t,1),e=Rn(e,t,1),t=Me(),e!==null&&(Fs(e,1,t),qe(e,t));break}}e=e.return}}function Zw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(be&n)===n&&(he===4||he===3&&(be&130023424)===be&&500>le()-sd?or(t,0):id|=n),qe(t,e)}function Xg(t,e){e===0&&(t.mode&1?(e=so,so<<=1,!(so&130023424)&&(so=4194304)):e=1);var n=Me();t=nn(t,e),t!==null&&(Fs(t,e,n),qe(t,n))}function ex(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xg(t,n)}function tx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Xg(t,n)}var Zg;Zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,jw(t,e,n);$e=!!(t.flags&131072)}else $e=!1,Z&&e.flags&1048576&&rg(e,Zo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ro(t,e),t=e.pendingProps;var i=Zr(e,De.current);$r(e,n),i=Xu(null,e,r,t,i,n);var s=Zu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ye(r)?(s=!0,Jo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gu(e),i.updater=Wl,e.stateNode=i,i._reactInternals=e,Oc(e,r,t,n),e=Bc(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&zu(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ro(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rx(r),t=gt(r,t),i){case 0:e=Fc(null,e,r,t,n);break e;case 1:e=gh(null,e,r,t,n);break e;case 11:e=ph(null,e,r,t,n);break e;case 14:e=mh(null,e,r,gt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Fc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),gh(t,e,r,i,n);case 3:e:{if(Mg(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cg(t,e),nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ri(Error(b(423)),e),e=yh(t,e,r,n,i);break e}else if(r!==i){i=ri(Error(b(424)),e),e=yh(t,e,r,n,i);break e}else for(Xe=Pn(e.stateNode.containerInfo.firstChild),Ze=e,Z=!0,_t=null,n=lg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===i){e=rn(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return ug(e),t===null&&Ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cc(r,i)?o=null:s!==null&&Cc(r,s)&&(e.flags|=32),Og(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&Ac(e),null;case 13:return Fg(t,e,n);case 4:return Yu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ti(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),ph(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(el,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!Ge.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Xt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Dc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$r(e,n),i=dt(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),mh(t,e,r,i,n);case 15:return Dg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Ro(t,e),e.tag=1,Ye(r)?(t=!0,Jo(e)):t=!1,$r(e,n),Pg(e,r,i),Oc(e,r,i,n),Bc(null,e,r,!0,t,n);case 19:return Bg(t,e,n);case 22:return Lg(t,e,n)}throw Error(b(156,e.tag))};function ey(t,e){return Cm(t,e)}function nx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new nx(t,e,n,r)}function cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rx(t){if(typeof t=="function")return cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tu)return 11;if(t===Nu)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Nr:return lr(n.children,i,s,e);case Cu:o=8,i|=8;break;case sc:return t=lt(12,n,e,i|2),t.elementType=sc,t.lanes=s,t;case oc:return t=lt(13,n,e,i),t.elementType=oc,t.lanes=s,t;case lc:return t=lt(19,n,e,i),t.elementType=lc,t.lanes=s,t;case um:return Gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case am:o=10;break e;case cm:o=9;break e;case Tu:o=11;break e;case Nu:o=14;break e;case mn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function lr(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Gl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=um,t.lanes=n,t.stateNode={isHidden:!1},t}function Ba(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function Ua(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ix(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ud(t,e,n,r,i,s,o,l,a){return t=new ix(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(s),t}function sx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ty(t){if(!t)return Hn;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Ye(n))return tg(t,n,e)}return e}function ny(t,e,n,r,i,s,o,l,a){return t=ud(n,r,!0,t,i,s,o,l,a),t.context=ty(null),n=t.current,r=Me(),i=Dn(n),s=Xt(r,i),s.callback=e??null,Rn(n,s,i),t.current.lanes=i,Fs(t,i,r),qe(t,r),t}function Yl(t,e,n,r){var i=e.current,s=Me(),o=Dn(i);return n=ty(n),e.context===null?e.context=n:e.pendingContext=n,e=Xt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(i,e,o),t!==null&&(It(t,i,o,s),To(t,i,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ch(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dd(t,e){Ch(t,e),(t=t.alternate)&&Ch(t,e)}function ox(){return null}var ry=typeof reportError=="function"?reportError:function(t){console.error(t)};function fd(t){this._internalRoot=t}ql.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Yl(t,e,null,null)};ql.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hr(function(){Yl(null,t,null,null)}),e[tn]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_n.length&&e!==0&&e<_n[n].priority;n++);_n.splice(n,0,t),n===0&&Mm(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Th(){}function lx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ul(o);s.call(c)}}var o=ny(e,r,t,0,null,!1,!1,"",Th);return t._reactRootContainer=o,t[tn]=o.current,ps(t.nodeType===8?t.parentNode:t),hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ul(a);l.call(c)}}var a=ud(t,0,!1,null,null,!1,!1,"",Th);return t._reactRootContainer=a,t[tn]=a.current,ps(t.nodeType===8?t.parentNode:t),hr(function(){Yl(e,a,n,r)}),a}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ul(o);l.call(a)}}Yl(e,o,t,i)}else o=lx(n,e,t,i,r);return ul(o)}Am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ji(e.pendingLanes);n!==0&&(Au(e,n|1),qe(e,le()),!(H&6)&&(ii=le()+500,Gn()))}break;case 13:hr(function(){var r=nn(t,1);if(r!==null){var i=Me();It(r,t,1,i)}}),dd(t,1)}};Du=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=Me();It(e,t,134217728,n)}dd(t,134217728)}};Dm=function(t){if(t.tag===13){var e=Dn(t),n=nn(t,e);if(n!==null){var r=Me();It(n,t,e,r)}dd(t,e)}};Lm=function(){return W};Om=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};yc=function(t,e,n){switch(e){case"input":if(uc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hl(r);if(!i)throw Error(b(90));fm(r),uc(r,i)}}}break;case"textarea":pm(t,n);break;case"select":e=n.value,e!=null&&Hr(t,!!n.multiple,e,!1)}};xm=od;Em=hr;var ax={usingClientEntryPoint:!1,Events:[Us,Dr,Hl,_m,wm,od]},Oi={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cx={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sm(t),t===null?null:t.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Fl=yo.inject(cx),Bt=yo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(b(200));return sx(t,e,null,n)};tt.createRoot=function(t,e){if(!hd(t))throw Error(b(299));var n=!1,r="",i=ry;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ud(t,1,!1,null,null,n,!1,r,i),t[tn]=e.current,ps(t.nodeType===8?t.parentNode:t),new fd(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=Sm(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return hr(t)};tt.hydrate=function(t,e,n){if(!Ql(e))throw Error(b(200));return Jl(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ry;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ny(e,null,t,1,n??null,i,!1,s,o),t[tn]=e.current,ps(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ql(e)};tt.render=function(t,e,n){if(!Ql(e))throw Error(b(200));return Jl(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(b(40));return t._reactRootContainer?(hr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};tt.unstable_batchedUpdates=od;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ql(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Jl(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(t){console.error(t)}}iy(),im.exports=tt;var ux=im.exports,sy,Nh=ux;sy=Nh.createRoot,Nh.hydrateRoot;const dx=`<!-- LOGIN EKRANI (Açılışta Engelleme İçin) -->
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
</div>`;function Qc(t,e,n){let r=0,i=0,s=0;for(let o=0;o<e.length;o++){const l=e[o];if(t>=l.min&&(r=l[n]),t<l.min&&s===0){s=l.min,i=l[n];break}}return{current:r,nextTarget:s,nextValue:i}}function vo(t,e,n){let r=0;for(let i=0;i<e.length;i++){const s=e[i];t>=s.min&&(r=s[n])}return r}function oy(t){return!t||t===0?0:t<=3?5:t<=5?6:t<=7?7:8}const fx=()=>{};var Ph={};/**
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
 */const ly={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw _i(e)},_i=function(t){return new Error("Firebase Database ("+ly.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ay=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,f=s>>2,d=(s&3)<<4|l>>4;let u=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(u=64)),r.push(n[f],n[d],n[u],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||d==null)throw new px;const u=s<<2|l>>4;if(r.push(u),c!==64){const p=l<<4&240|c>>2;if(r.push(p),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class px extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cy=function(t){const e=ay(t);return pd.encodeByteArray(e,!0)},dl=function(t){return cy(t).replace(/\./g,"")},fl=function(t){try{return pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mx(t){return uy(void 0,t)}function uy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gx(n)||(t[n]=uy(t[n],e[n]));return t}function gx(t){return t!=="__proto__"}/**
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
 */function yx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vx=()=>yx().__FIREBASE_DEFAULTS__,_x=()=>{if(typeof process>"u"||typeof Ph>"u")return;const t=Ph.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fl(t[1]);return e&&JSON.parse(e)},md=()=>{try{return fx()||vx()||_x()||wx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dy=t=>{var e,n;return(n=(e=md())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},xx=t=>{const e=dy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fy=()=>{var t;return(t=md())==null?void 0:t.config},hy=t=>{var e;return(e=md())==null?void 0:e[`_${t}`]};/**
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
 */class Hs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function py(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Ex(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),""].join(".")}const Zi={};function kx(){const t={prod:[],emulator:[]};for(const e of Object.keys(Zi))Zi[e]?t.emulator.push(e):t.prod.push(e);return t}function bx(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Rh=!1;function my(t,e){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||Zi[t]===e||Zi[t]||Rh)return;Zi[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=kx().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function l(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function a(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Rh=!0,o()},u}function f(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=bx(r),p=n("text"),y=document.getElementById(p)||document.createElement("span"),v=n("learnmore"),C=document.getElementById(v)||document.createElement("a"),m=n("preprendIcon"),h=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const g=u.element;l(g),f(C,v);const x=c();a(h,m),g.append(h,y,C,x),document.body.appendChild(g)}s?(y.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Sx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ix(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cx(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tx(){return ly.NODE_ADMIN===!0}function Nx(){try{return typeof indexedDB=="object"}catch{return!1}}function Px(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Rx="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rx,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ax(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,l,r)}}function Ax(t,e){return t.replace(Dx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Dx=/\{\$([^}]+)}/g;/**
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
 */function ks(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const yy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ks(fl(s[0])||""),n=ks(fl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Lx=function(t){const e=yy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ox=function(t){const e=yy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function si(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ah(s)&&Ah(o)){if(!pr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ah(t){return t!==null&&typeof t=="object"}/**
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
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Mx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const u=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,f;for(let d=0;d<80;d++){d<40?d<20?(c=l^s&(o^l),f=1518500249):(c=s^o^l,f=1859775393):d<60?(c=s&o|l&(s|o),f=2400959708):(c=s^o^l,f=3395469782);const u=(i<<5|i>>>27)+c+a+f+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Fx(t,e){const n=new Bx(t,e);return n.subscribe.bind(n)}class Bx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ux(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=za),i.error===void 0&&(i.error=za),i.complete===void 0&&(i.complete=za);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ux(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function za(){}function Xl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const zx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class Hx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Hs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vx(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jx(t){return t===Zn?void 0:t}function Vx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const $x={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Kx=$.INFO,Gx={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Yx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Gx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=Kx,this._logHandler=Yx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$x[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const qx=(t,e)=>e.some(n=>t instanceof n);let Dh,Lh;function Qx(){return Dh||(Dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jx(){return Lh||(Lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vy=new WeakMap,Xc=new WeakMap,_y=new WeakMap,Ha=new WeakMap,vd=new WeakMap;function Xx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(On(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vy.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function Zx(t){if(Xc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_y.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eE(t){Zc=t(Zc)}function tE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ja(this),e,...n);return _y.set(r,e.sort?e.sort():[e]),On(r)}:Jx().includes(t)?function(...e){return t.apply(ja(this),e),On(vy.get(this))}:function(...e){return On(t.apply(ja(this),e))}}function nE(t){return typeof t=="function"?tE(t):(t instanceof IDBTransaction&&Zx(t),qx(t,Qx())?new Proxy(t,Zc):t)}function On(t){if(t instanceof IDBRequest)return Xx(t);if(Ha.has(t))return Ha.get(t);const e=nE(t);return e!==t&&(Ha.set(t,e),vd.set(e,t)),e}const ja=t=>vd.get(t);function rE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=On(o);return r&&o.addEventListener("upgradeneeded",a=>{r(On(o.result),a.oldVersion,a.newVersion,On(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const iE=["get","getKey","getAll","getAllKeys","count"],sE=["put","add","delete","clear"],Va=new Map;function Oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Va.get(e))return Va.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Va.set(e,s),s}eE(t=>({...t,get:(e,n,r)=>Oh(e,n)||t.get(e,n,r),has:(e,n)=>!!Oh(e,n)||t.has(e,n)}));/**
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
 */class oE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eu="@firebase/app",Mh="0.14.8";/**
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
 */const sn=new yd("@firebase/app"),aE="@firebase/app-compat",cE="@firebase/analytics-compat",uE="@firebase/analytics",dE="@firebase/app-check-compat",fE="@firebase/app-check",hE="@firebase/auth",pE="@firebase/auth-compat",mE="@firebase/database",gE="@firebase/data-connect",yE="@firebase/database-compat",vE="@firebase/functions",_E="@firebase/functions-compat",wE="@firebase/installations",xE="@firebase/installations-compat",EE="@firebase/messaging",kE="@firebase/messaging-compat",bE="@firebase/performance",SE="@firebase/performance-compat",IE="@firebase/remote-config",CE="@firebase/remote-config-compat",TE="@firebase/storage",NE="@firebase/storage-compat",PE="@firebase/firestore",RE="@firebase/ai",AE="@firebase/firestore-compat",DE="firebase",LE="12.9.0";/**
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
 */const tu="[DEFAULT]",OE={[eu]:"fire-core",[aE]:"fire-core-compat",[uE]:"fire-analytics",[cE]:"fire-analytics-compat",[fE]:"fire-app-check",[dE]:"fire-app-check-compat",[hE]:"fire-auth",[pE]:"fire-auth-compat",[mE]:"fire-rtdb",[gE]:"fire-data-connect",[yE]:"fire-rtdb-compat",[vE]:"fire-fn",[_E]:"fire-fn-compat",[wE]:"fire-iid",[xE]:"fire-iid-compat",[EE]:"fire-fcm",[kE]:"fire-fcm-compat",[bE]:"fire-perf",[SE]:"fire-perf-compat",[IE]:"fire-rc",[CE]:"fire-rc-compat",[TE]:"fire-gcs",[NE]:"fire-gcs-compat",[PE]:"fire-fst",[AE]:"fire-fst-compat",[RE]:"fire-vertex","fire-js":"fire-js",[DE]:"fire-js-all"};/**
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
 */const pl=new Map,ME=new Map,nu=new Map;function Fh(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oi(t){const e=t.name;if(nu.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;nu.set(e,t);for(const n of pl.values())Fh(n,t);for(const n of ME.values())Fh(n,t);return!0}function _d(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const FE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new js("app","Firebase",FE);/**
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
 */class BE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ei=LE;function wy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:tu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=fy()),!n)throw Mn.create("no-options");const s=pl.get(i);if(s){if(pr(n,s.options)&&pr(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const o=new Wx(i);for(const a of nu.values())o.addComponent(a);const l=new BE(n,r,o);return pl.set(i,l),l}function xy(t=tu){const e=pl.get(t);if(!e&&t===tu&&fy())return wy();if(!e)throw Mn.create("no-app",{appName:t});return e}function Fn(t,e,n){let r=OE[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(o.join(" "));return}oi(new mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const UE="firebase-heartbeat-database",zE=1,bs="firebase-heartbeat-store";let Wa=null;function Ey(){return Wa||(Wa=rE(UE,zE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),Wa}async function HE(t){try{const n=(await Ey()).transaction(bs),r=await n.objectStore(bs).get(ky(t));return await n.done,r}catch(e){if(e instanceof Yn)sn.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function Bh(t,e){try{const r=(await Ey()).transaction(bs,"readwrite");await r.objectStore(bs).put(e,ky(t)),await r.done}catch(n){if(n instanceof Yn)sn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function ky(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jE=1024,VE=30;class WE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>VE){const o=GE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uh(),{heartbeatsToSend:r,unsentEntries:i}=$E(this._heartbeatsCache.heartbeats),s=dl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sn.warn(n),""}}}function Uh(){return new Date().toISOString().substring(0,10)}function $E(t,e=jE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nx()?Px().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zh(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}function GE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function YE(t){oi(new mr("platform-logger",e=>new oE(e),"PRIVATE")),oi(new mr("heartbeat",e=>new WE(e),"PRIVATE")),Fn(eu,Mh,t),Fn(eu,Mh,"esm2020"),Fn("fire-js","")}YE("");var qE="firebase",QE="12.9.0";/**
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
 */Fn(qE,QE,"app");function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JE=by,Sy=new js("auth","Firebase",by());/**
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
 */const ml=new yd("@firebase/auth");function XE(t,...e){ml.logLevel<=$.WARN&&ml.warn(`Auth (${Ei}): ${t}`,...e)}function Oo(t,...e){ml.logLevel<=$.ERROR&&ml.error(`Auth (${Ei}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw xd(t,...e)}function Ct(t,...e){return xd(t,...e)}function wd(t,e,n){const r={...JE(),[e]:n};return new js("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return wd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ht(t,"argument-error"),wd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sy.create(t,...e)}function O(t,e,...n){if(!t)throw xd(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function on(t,e){t||qt(e)}/**
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
 */function ru(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ek(){return Hh()==="http:"||Hh()==="https:"}function Hh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ek()||Ix()||"connection"in navigator)?navigator.onLine:!0}function nk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vs{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||gy()}get(){return tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ed(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Iy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ik=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sk=new Vs(3e4,6e4);function kd(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ki(t,e,n,r,i={}){return Cy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xi({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:a,...s};return Sx()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&wi(t.emulatorConfig.host)&&(c.credentials="include"),Iy.fetch()(await Ty(t,t.config.apiHost,n,l),c)})}async function Cy(t,e,n){t._canInitEmulator=!1;const r={...rk,...e};try{const i=new lk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw _o(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wd(t,f,c);Ht(t,f)}}catch(i){if(i instanceof Yn)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function ok(t,e,n,r,i={}){const s=await ki(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ty(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ed(t.config,i):`${t.config.apiScheme}://${i}`;return ik.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class lk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),sk.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ak(t,e){return ki(t,"POST","/v1/accounts:delete",e)}async function gl(t,e){return ki(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function es(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ck(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=bd(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:es($a(i.auth_time)),issuedAtTime:es($a(i.iat)),expirationTime:es($a(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $a(t){return Number(t)*1e3}function bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=fl(n);return i?JSON.parse(i):(Oo("Failed to decode base64 JWT payload"),null)}catch(i){return Oo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jh(t){const e=bd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&uk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await Ss(t,gl(e,{idToken:n}));O(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?Ny(i.providerUserInfo):[],o=hk(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?a:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new iu(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function fk(t){const e=rt(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ny(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function pk(t,e){const n=await Cy(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ty(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&wi(t.emulatorConfig.host)&&(a.credentials="include"),Iy.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mk(t,e){return ki(t,"POST","/v2/accounts:revokeToken",kd(t,e))}/**
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
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=jh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
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
 */function pn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new dk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new iu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ck(this,e)}reload(){return fk(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await Ss(this,ak(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:u,isAnonymous:p,providerData:y,stsTokenManager:v}=n;O(d&&v,e,"internal-error");const C=Gr.fromJSON(this.name,v);O(typeof d=="string",e,"internal-error"),pn(r,e.name),pn(i,e.name),O(typeof u=="boolean",e,"internal-error"),O(typeof p=="boolean",e,"internal-error"),pn(s,e.name),pn(o,e.name),pn(l,e.name),pn(a,e.name),pn(c,e.name),pn(f,e.name);const m=new kt({uid:d,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:p,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:C,createdAt:c,lastLoginAt:f});return y&&Array.isArray(y)&&(m.providerData=y.map(h=>({...h}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gr;i.updateFromServerResponse(n);const s=new kt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ny(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Gr;l.updateFromIdToken(r);const a=new kt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new iu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
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
 */const Vh=new Map;function Qt(t){on(t instanceof Function,"Expected a class definition");let e=Vh.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vh.set(t,e),e)}/**
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
 */class Py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Py.type="NONE";const Wh=Py;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await gl(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(Qt(Wh),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Qt(Wh);const o=Mo(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let d;if(typeof f=="string"){const u=await gl(e,{idToken:f}).catch(()=>{});if(!u)break;d=await kt._fromGetAccountInfoResponse(e,u,f)}else d=kt._fromJSON(e,f);c!==s&&(l=d),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Yr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Yr(s,e,r))}}/**
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
 */function $h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ry(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(My(e))return"Blackberry";if(Fy(e))return"Webos";if(Ay(e))return"Safari";if((e.includes("chrome/")||Dy(e))&&!e.includes("edge/"))return"Chrome";if(Oy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ry(t=Be()){return/firefox\//i.test(t)}function Ay(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dy(t=Be()){return/crios\//i.test(t)}function Ly(t=Be()){return/iemobile/i.test(t)}function Oy(t=Be()){return/android/i.test(t)}function My(t=Be()){return/blackberry/i.test(t)}function Fy(t=Be()){return/webos/i.test(t)}function Sd(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gk(t=Be()){var e;return Sd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function yk(){return Cx()&&document.documentMode===10}function By(t=Be()){return Sd(t)||Oy(t)||Fy(t)||My(t)||/windows phone/i.test(t)||Ly(t)}/**
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
 */function Uy(t,e=[]){let n;switch(t){case"Browser":n=$h(Be());break;case"Worker":n=`${$h(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${r}`}/**
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
 */class vk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _k(t,e={}){return ki(t,"GET","/v2/passwordPolicy",kd(t,e))}/**
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
 */const wk=6;class xk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ek{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new vk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gl(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(ar(this));const n=e?rt(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _k(this),n=new xk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&XE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ea(t){return rt(t)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fx(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Id={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kk(t){Id=t}function bk(t){return Id.loadJS(t)}function Sk(){return Id.gapiScript}function Ik(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ck(t,e){const n=_d(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pr(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function Tk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nk(t,e,n){const r=ea(t);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zy(e),{host:o,port:l}=Pk(e),a=l===null?"":`:${l}`,c={url:`${s}//${o}${a}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(pr(c,r.config.emulator)&&pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,wi(o)?(py(`${s}//${o}${a}`),my("Auth",!0)):Rk()}function zy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Pk(t){const e=zy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gh(o)}}}function Gh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
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
 */async function qr(t,e){return ok(t,"POST","/v1/accounts:signInWithIdp",kd(t,e))}/**
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
 */const Ak="http://localhost";class gr extends Hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:Ak,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
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
 */class Cd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ws extends Cd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends Ws{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class En extends Ws{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class kn extends Ws{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kt._fromIdTokenResponse(e,r,i),o=Yh(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yh(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vl extends Yn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vl(e,n,r,i)}}function jy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,s,e,r):s})}async function Dk(t,e,n=!1){const r=await Ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function Lk(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(ar(r));const i="reauthenticate";try{const s=await Ss(t,jy(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=bd(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
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
 */async function Ok(t,e,n=!1){if(xt(t.app))return Promise.reject(ar(t));const r="signIn",i=await jy(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Mk(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function Fk(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function Bk(t){return rt(t).signOut()}const _l="__sak";/**
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
 */class Vy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Uk=1e3,zk=10;class Wy extends Vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=By(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wy.type="LOCAL";const Hk=Wy;/**
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
 */class $y extends Vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$y.type="SESSION";const Ky=$y;/**
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
 */function jk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await jk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function Td(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=Td("",20);i.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const u=d;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(u.data.response);break;default:clearTimeout(f),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zt(){return window}function Wk(t){zt().location.href=t}/**
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
 */function Gy(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function $k(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Gk(){return Gy()?self:null}/**
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
 */const Yy="firebaseLocalStorageDb",Yk=1,wl="firebaseLocalStorage",qy="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function qk(){const t=indexedDB.deleteDatabase(Yy);return new $s(t).toPromise()}function su(){const t=indexedDB.open(Yy,Yk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:qy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await qk(),e(await su()))})})}async function qh(t,e,n){const r=na(t,!0).put({[qy]:e,value:n});return new $s(r).toPromise()}async function Qk(t,e){const n=na(t,!1).get(e),r=await new $s(n).toPromise();return r===void 0?null:r.value}function Qh(t,e){const n=na(t,!0).delete(e);return new $s(n).toPromise()}const Jk=800,Xk=3;class Qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(Gk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await $k(),!this.activeServiceWorker)return;this.sender=new Vk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await su();return await qh(e,_l,"1"),await Qh(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=na(i,!1).getAll();return new $s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qy.type="LOCAL";const Zk=Qy;new Vs(3e4,6e4);/**
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
 */function Jy(t,e){return e?Qt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nd extends Hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eb(t){return Ok(t.auth,new Nd(t),t.bypassAuthState)}function tb(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Lk(n,new Nd(t),t.bypassAuthState)}async function nb(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Dk(n,new Nd(t),t.bypassAuthState)}/**
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
 */class Xy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:Ht(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rb=new Vs(2e3,1e4);async function ib(t,e,n){if(xt(t.app))return Promise.reject(Ct(t,"operation-not-supported-in-this-environment"));const r=ea(t);ZE(t,e,Cd);const i=Jy(r,n);return new ir(r,"signInViaPopup",e,i).executeNotNull()}class ir extends Xy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rb.get())};e()}}ir.currentPopupAction=null;/**
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
 */const sb="pendingRedirect",Fo=new Map;class ob extends Xy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await lb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lb(t,e){const n=ub(e),r=cb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ab(t,e){Fo.set(t._key(),e)}function cb(t){return Qt(t._redirectPersistence)}function ub(t){return Mo(sb,t.config.apiKey,t.name)}async function db(t,e,n=!1){if(xt(t.app))return Promise.reject(ar(t));const r=ea(t),i=Jy(r,e),o=await new ob(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fb=10*60*1e3;class hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zy(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jh(e))}saveEventToCache(e){this.cachedEventUids.add(Jh(e)),this.lastProcessedEventTime=Date.now()}}function Jh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zy(t);default:return!1}}/**
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
 */async function mb(t,e={}){return ki(t,"GET","/v1/projects",e)}/**
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
 */const gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yb=/^https?/;async function vb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mb(t);for(const n of e)try{if(_b(n))return}catch{}Ht(t,"unauthorized-domain")}function _b(t){const e=ru(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yb.test(n))return!1;if(gb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wb=new Vs(3e4,6e4);function Xh(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xb(t){return new Promise((e,n)=>{var i,s,o;function r(){Xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xh(),n(Ct(t,"network-request-failed"))},timeout:wb.get()})}if((s=(i=zt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=zt().gapi)!=null&&o.load)r();else{const l=Ik("iframefcb");return zt()[l]=()=>{gapi.load?r():n(Ct(t,"network-request-failed"))},bk(`${Sk()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function Eb(t){return Bo=Bo||xb(t),Bo}/**
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
 */const kb=new Vs(5e3,15e3),bb="__/auth/iframe",Sb="emulator/auth/iframe",Ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tb(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ed(e,Sb):`https://${t.config.authDomain}/${bb}`,r={apiKey:e.apiKey,appName:t.name,v:Ei},i=Cb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function Nb(t){const e=await Eb(t),n=zt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Tb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ib,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),l=zt().setTimeout(()=>{s(o)},kb.get());function a(){zt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Pb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rb=500,Ab=600,Db="_blank",Lb="http://localhost";class Zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ob(t,e,n,r=Rb,i=Ab){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...Pb,width:r.toString(),height:i.toString(),top:s,left:o},c=Be().toLowerCase();n&&(l=Dy(c)?Db:n),Ry(c)&&(e=e||Lb,a.scrollbars="yes");const f=Object.entries(a).reduce((u,[p,y])=>`${u}${p}=${y},`,"");if(gk(c)&&l!=="_self")return Mb(e||"",l),new Zh(null);const d=window.open(e||"",l,f);O(d,t,"popup-blocked");try{d.focus()}catch{}return new Zh(d)}function Mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fb="__/auth/handler",Bb="emulator/auth/handler",Ub=encodeURIComponent("fac");async function ep(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ei,eventId:i};if(e instanceof Cd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Ws){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const a=await t._getAppCheckToken(),c=a?`#${Ub}=${encodeURIComponent(a)}`:"";return`${zb(t)}?${xi(l).slice(1)}${c}`}function zb({config:t}){return t.emulator?Ed(t,Bb):`https://${t.authDomain}/${Fb}`}/**
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
 */const Ka="webStorageSupport";class Hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ky,this._completeRedirectFn=db,this._overrideRedirectResult=ab}async _openPopup(e,n,r,i){var o;on((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ep(e,n,r,ru(),i);return Ob(e,s,Td())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ep(e,n,r,ru(),i);return Wk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Nb(e),r=new hb(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ka,{type:Ka},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Ka];s!==void 0&&n(!!s),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return By()||Ay()||Sd()}}const jb=Hb;var tp="@firebase/auth",np="1.12.0";/**
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
 */class Vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $b(t){oi(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uy(t)},c=new Ek(r,i,s,a);return Tk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),oi(new mr("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(r=>new Vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(tp,np,Wb(t)),Fn(tp,np,"esm2020")}/**
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
 */const Kb=5*60,Gb=hy("authIdTokenMaxAge")||Kb;let rp=null;const Yb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gb)return;const i=n==null?void 0:n.token;rp!==i&&(rp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qb(t=xy()){const e=_d(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ck(t,{popupRedirectResolver:jb,persistence:[Zk,Hk,Ky]}),r=hy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Yb(s.toString());Fk(n,o,()=>o(n.currentUser)),Mk(n,l=>o(l))}}const i=dy("auth");return i&&Nk(n,`http://${i}`),n}function Qb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}kk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$b("Browser");var ip={};const sp="@firebase/database",op="1.1.0";/**
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
 */let ev="";function Jb(t){ev=t}/**
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
 */class Xb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Zb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Xb(e)}}catch{}return new Zb},sr=tv("localStorage"),eS=tv("sessionStorage");/**
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
 */const Qr=new yd("@firebase/database"),tS=function(){let t=1;return function(){return t++}}(),nv=function(t){const e=zx(t),n=new Mx;n.update(e);const r=n.digest();return pd.encodeByteArray(r)},Ks=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ks.apply(null,r):typeof r=="object"?e+=de(r):e+=r,e+=" "}return e};let ts=null,lp=!0;const nS=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Qr.logLevel=$.VERBOSE,ts=Qr.log.bind(Qr)},ke=function(...t){if(lp===!0&&(lp=!1,ts===null&&eS.get("logging_enabled")===!0&&nS()),ts){const e=Ks.apply(null,t);ts(e)}},Gs=function(t){return function(...e){ke(t,...e)}},ou=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ks(...t);Qr.error(e)},ln=function(...t){const e=`FIREBASE FATAL ERROR: ${Ks(...t)}`;throw Qr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Ks(...t);Qr.warn(e)},rS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},iS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ai="[MIN_NAME]",yr="[MAX_NAME]",Er=function(t,e){if(t===e)return 0;if(t===ai||e===yr)return-1;if(e===ai||t===yr)return 1;{const n=ap(t),r=ap(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},sS=function(t,e){return t===e?0:t<e?-1:1},Mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},Rd=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=de(e[r]),n+=":",n+=Rd(t[e[r]]);return n+="}",n},rv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ie(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iv=function(t){S(!Pd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let d="";for(a=0;a<64;a+=8){let u=parseInt(f.substr(a,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},oS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const cS=new RegExp("^-?(0*)\\d{1,10}$"),uS=-2147483648,dS=2147483647,ap=function(t){if(cS.test(t)){const e=Number(t);if(e>=uS&&e<=dS)return e}return null},bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},fS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,xt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Uo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Uo.OWNER="owner";/**
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
 */const Ad="5",sv="v",ov="s",lv="r",av="f",cv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uv="ls",dv="p",lu="ac",fv="websocket",hv="long_polling";/**
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
 */class pv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mv(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===fv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mS(t)&&(n.ns=t.namespace);const i=[];return Ie(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class gS{constructor(){this.counters_={}}incrementCounter(e,n=1){jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mx(this.counters_)}}/**
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
 */const Ga={},Ya={};function Dd(t){const e=t.toString();return Ga[e]||(Ga[e]=new gS),Ga[e]}function yS(t,e){const n=t.toString();return Ya[n]||(Ya[n]=e()),Ya[n]}/**
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
 */class vS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&bi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cp="start",_S="close",wS="pLPCommand",xS="pRTLPCB",gv="id",yv="pw",vv="ser",ES="cb",kS="seg",bS="ts",SS="d",IS="dframe",_v=1870,wv=30,CS=_v-wv,TS=25e3,NS=3e4;class zr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gs(e),this.stats_=Dd(n),this.urlFn=a=>(this.appCheckToken&&(a[lu]=this.appCheckToken),mv(n,hv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NS)),iS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ld((...s)=>{const[o,l,a,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cp)this.id=l,this.password=a;else if(o===_S)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[cp]="t",r[vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ES]=this.scriptTagHolder.uniqueCallbackIdentifier),r[sv]=Ad,this.transportSessionId&&(r[ov]=this.transportSessionId),this.lastSessionId&&(r[uv]=this.lastSessionId),this.applicationId&&(r[dv]=this.applicationId),this.appCheckToken&&(r[lu]=this.appCheckToken),typeof location<"u"&&location.hostname&&cv.test(location.hostname)&&(r[lv]=av);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zr.forceAllow_=!0}static forceDisallow(){zr.forceDisallow_=!0}static isAvailable(){return zr.forceAllow_?!0:!zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oS()&&!lS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cy(n),i=rv(r,CS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[IS]="t",r[gv]=e,r[yv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ld{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tS(),window[wS+this.uniqueCallbackIdentifier]=e,window[xS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ld.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gv]=this.myID,e[yv]=this.myPW,e[vv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wv+r.length<=_v;){const o=this.pendingSegs.shift();r=r+"&"+kS+i+"="+o.seg+"&"+bS+i+"="+o.ts+"&"+SS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(TS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const PS=16384,RS=45e3;let xl=null;typeof MozWebSocket<"u"?xl=MozWebSocket:typeof WebSocket<"u"&&(xl=WebSocket);class Et{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gs(this.connId),this.stats_=Dd(n),this.connURL=Et.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[sv]=Ad,typeof location<"u"&&location.hostname&&cv.test(location.hostname)&&(o[lv]=av),n&&(o[ov]=n),r&&(o[uv]=r),i&&(o[lu]=i),s&&(o[dv]=s),mv(e,fv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sr.set("previous_websocket_failure",!0);try{let r;Tx(),this.mySock=new xl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xl!==null&&!Et.forceDisallow_}static previouslyFailed(){return sr.isInMemoryStorage||sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ks(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rv(n,PS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
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
 */class Is{static get ALL_TRANSPORTS(){return[zr,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Et&&Et.isAvailable();let r=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const i=this.transports_=[];for(const s of Is.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
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
 */const AS=6e4,DS=5e3,LS=10*1024,OS=100*1024,qa="t",up="d",MS="s",dp="r",FS="e",fp="o",hp="a",pp="n",mp="p",BS="h";class US{constructor(e,n,r,i,s,o,l,a,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gs("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qa in e){const n=e[qa];n===hp?this.upgradeIfSecondaryHealthy_():n===dp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mi("t",e),r=Mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mi(qa,e);if(up in e){const r=e[up];if(n===BS){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===pp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MS?this.onConnectionShutdown_(r):n===dp?this.onReset_(r):n===FS?ou("Server Error: "+r):n===fp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ou("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ad!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ev{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class El extends Ev{static getInstance(){return new El}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const gp=32,yp=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new K("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jn(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Od(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return Oe(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function HS(t,e){const n=Cs(t,0),r=Cs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Er(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function bv(t,e){if(jn(t)!==jn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(jn(t)>jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class jS{constructor(e,n){this.errorPrefix_=n,this.parts_=Cs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zl(this.parts_[r]);Sv(this)}}function VS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zl(e),Sv(t)}function WS(t){const e=t.parts_.pop();t.byteLength_-=Zl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sv(t){if(t.byteLength_>yp)throw new Error(t.errorPrefix_+"has a key path longer than "+yp+" bytes ("+t.byteLength_+").");if(t.parts_.length>gp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gp+") or object contains a cycle "+er(t))}function er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Md extends Ev{static getInstance(){return new Md}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fi=1e3,$S=60*5*1e3,vp=30*1e3,KS=1.3,GS=3e4,YS="server_kill",_p=3;class Zt extends xv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Zt.nextPersistentConnectionId_++,this.log_=Gs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fi,this.maxReconnectDelay_=$S,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Md.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(de(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Hs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Zt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jt(e,"w")){const r=si(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ox(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Lx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ou("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>GS&&(this.reconnectDelay_=Fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*KS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,l=new US(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Fe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(YS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Fe(d),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jc(this.interruptReasons_)&&(this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Rd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=vp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ev.replace(/\./g,"-")]=1,gd()?e["framework.cordova"]=1:gy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return Jc(this.interruptReasons_)&&e}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
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
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
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
 */class ra{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(ai,e),i=new F(ai,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let wo;class Iv extends ra{static get __EMPTY_NODE(){return wo}static set __EMPTY_NODE(e){wo=e}compare(e,n){return Er(e.name,n.name)}isDefinedOn(e){throw _i("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(yr,wo)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,wo)}toString(){return".key"}}const Jr=new Iv;/**
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
 */class xo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_e.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class qS{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xo(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new qS;/**
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
 */function QS(t,e){return Er(t.name,e.name)}function Fd(t,e){return Er(t,e)}/**
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
 */let au;function JS(t){au=t}const Cv=function(t){return typeof t=="number"?"number:"+iv(t):"string:"+t},Tv=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jt(e,".sv"),"Priority must be a string or number.")}else S(t===au||t.isEmpty(),"priority of unexpected type.");S(t===au||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wp;class ge{static set __childrenNodeConstructor(e){wp=e}static get __childrenNodeConstructor(){return wp}constructor(e,n=ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:z(e)===".priority"?this.priorityNode_:ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iv(this.value_):e+=this.value_,this.lazyHash_=nv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ge.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ge.VALUE_TYPE_ORDER.indexOf(n),s=ge.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nv,Pv;function XS(t){Nv=t}function ZS(t){Pv=t}class eI extends ra{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Er(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(yr,new ge("[PRIORITY-POST]",Pv))}makePost(e,n){const r=Nv(e);return new F(n,new ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new eI;/**
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
 */const tI=Math.log(2);class nI{constructor(e){const n=s=>parseInt(Math.log(s)/tI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kl=function(t,e,n,r){t.sort(e);const i=function(a,c){const f=c-a;let d,u;if(f===0)return null;if(f===1)return d=t[a],u=n?n(d):d,new _e(u,d.node,_e.BLACK,null,null);{const p=parseInt(f/2,10)+a,y=i(a,p),v=i(p+1,c);return d=t[p],u=n?n(d):d,new _e(u,d.node,_e.BLACK,y,v)}},s=function(a){let c=null,f=null,d=t.length;const u=function(y,v){const C=d-y,m=d;d-=y;const h=i(C+1,m),g=t[C],x=n?n(g):g;p(new _e(x,g.node,v,null,h))},p=function(y){c?(c.left=y,c=y):(f=y,c=y)};for(let y=0;y<a.count;++y){const v=a.nextBitIsOne(),C=Math.pow(2,a.count-(y+1));v?u(C,_e.BLACK):(u(C,_e.BLACK),u(C,_e.RED))}return f},o=new nI(t.length),l=s(o);return new Ke(r||e,l)};/**
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
 */let Qa;const Cr={};class Jt{static get Default(){return S(Cr&&oe,"ChildrenNode.ts has not been loaded"),Qa=Qa||new Jt({".priority":Cr},{".priority":oe}),Qa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return jt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Jr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=kl(r,e.getCompare()):l=Cr;const a=e.toString(),c={...this.indexSet_};c[a]=e;const f={...this.indexes_};return f[a]=l,new Jt(f,c)}addToIndexes(e,n){const r=hl(this.indexes_,(i,s)=>{const o=si(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),kl(l,o.getCompare())}else return Cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=hl(this.indexes_,i=>{if(i===Cr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Jt(r,this.indexSet_)}}/**
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
 */let Bi;class R{static get EMPTY_NODE(){return Bi||(Bi=new R(new Ke(Fd),null,Jt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Tv(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bi:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{S(z(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cv(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":nv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ys?-1:0}withIndex(e){if(e===Jr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Jr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),i=n.getIterator(oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Jr?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rI extends R{constructor(){super(new Ke(Fd),R.EMPTY_NODE,Jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const Ys=new rI;Object.defineProperties(F,{MIN:{value:new F(ai,R.EMPTY_NODE)},MAX:{value:new F(yr,Ys)}});Iv.__EMPTY_NODE=R.EMPTY_NODE;ge.__childrenNodeConstructor=R;JS(Ys);ZS(Ys);/**
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
 */const iI=!0;function ue(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ge(n,ue(e))}if(!(t instanceof Array)&&iI){const n=[];let r=!1;if(Ie(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=kl(n,QS,o=>o.name,Fd);if(r){const o=kl(n,oe.getCompare());return new R(s,ue(e),new Jt({".priority":o},{".priority":oe}))}else return new R(s,ue(e),Jt.Default)}else{let n=R.EMPTY_NODE;return Ie(t,(r,i)=>{if(jt(t,r)&&r.substring(0,1)!=="."){const s=ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ue(e))}}XS(ue);/**
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
 */class sI extends ra{constructor(e){super(),this.indexPath_=e,S(!B(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Er(e.name,n.name):s}makePost(e,n){const r=ue(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,Ys);return new F(yr,e)}toString(){return Cs(this.indexPath_,0).join("/")}}/**
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
 */class oI extends ra{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Er(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ue(e);return new F(n,r)}toString(){return".value"}}const lI=new oI;/**
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
 */function Rv(t){return{type:"value",snapshotNode:t}}function ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ts(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ci(n,r)):o.trackChildChange(Ns(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ts(i,s))}),n.isLeafNode()||n.forEachChild(oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ns(i,s,o))}else r.trackChildChange(ci(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ps{constructor(e){this.indexedFilter_=new Bd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ps.getStartPost_(e),this.endPost_=Ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(oe,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class cI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,p)=>d(p,u)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new F(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||l.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:o(u,a);if(f&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Ns(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ts(n,d));const v=l.updateImmediateChild(n,R.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s!=null&&s.trackChildChange(ci(u.name,u.node)),v.updateImmediateChild(u.name,u.node)):v}}else return r.isEmpty()?e:f&&o(c,a)>=0?(s!=null&&(s.trackChildChange(Ts(c.name,c.node)),s.trackChildChange(ci(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,R.EMPTY_NODE)):e}}/**
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
 */class Ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ai}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uI(t){return t.loadsAllData()?new Bd(t.getIndex()):t.hasLimit()?new cI(t):new Ps(t)}function xp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===lI?n="$value":t.index_===Jr?n="$key":(S(t.index_ instanceof sI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=de(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+de(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=de(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ep(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
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
 */class bl extends xv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Gs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bl.getListenId_(e,r),l={};this.listens_[o]=l;const a=xp(e._queryParams);this.restRequest_(s+".json",a,(c,f)=>{let d=f;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),si(this.listens_,o)===l){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,n){const r=bl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xp(e._queryParams),r=e._path.toString(),i=new Hs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ks(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class dI{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Sl(){return{value:null,children:new Map}}function Av(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,Sl());const i=t.children.get(r);e=Y(e),Av(i,e,n)}}function cu(t,e,n){t.value!==null?n(e,t.value):fI(t,(r,i)=>{const s=new K(e.toString()+"/"+r);cu(i,s,n)})}function fI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class hI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ie(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const kp=10*1e3,pI=30*1e3,mI=5*60*1e3;class gI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hI(e);const r=kp+(pI-kp)*Math.random();ns(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ie(e,(i,s)=>{s>0&&jt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*mI))}}/**
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
 */var bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bt||(bt={}));function zd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Il{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=bt.ACK_USER_WRITE,this.source=zd()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Il(V(),n,this.revert)}}else return S(z(this.path)===e,"operationForChild called for unrelated child."),new Il(Y(this.path),this.affectedTree,this.revert)}}/**
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
 */class Rs{constructor(e,n){this.source=e,this.path=n,this.type=bt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Rs(this.source,V()):new Rs(this.source,Y(this.path))}}/**
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
 */class vr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=bt.OVERWRITE}operationForChild(e){return B(this.path)?new vr(this.source,V(),this.snap.getImmediateChild(e)):new vr(this.source,Y(this.path),this.snap)}}/**
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
 */class ui{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=bt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new vr(this.source,V(),n.value):new ui(this.source,V(),n)}else return S(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Vn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class yI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(aI(o.childName,o.snapshotNode))}),Ui(t,i,"child_removed",e,r,n),Ui(t,i,"child_added",e,r,n),Ui(t,i,"child_moved",s,r,n),Ui(t,i,"child_changed",e,r,n),Ui(t,i,"value",e,r,n),i}function Ui(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>wI(t,l,a)),o.forEach(l=>{const a=_I(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function _I(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wI(t,e,n){if(e.childName==null||n.childName==null)throw _i("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ia(t,e){return{eventCache:t,serverCache:e}}function rs(t,e,n,r){return ia(new Vn(e,n,r),t.serverCache)}function Dv(t,e,n,r){return ia(t.eventCache,new Vn(e,n,r))}function Cl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _r(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ja;const xI=()=>(Ja||(Ja=new Ke(sS)),Ja);class G{static fromObject(e){let n=new G(null);return Ie(e,(r,i)=>{n=n.set(new K(r),i)}),n}constructor(e,n=xI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(B(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:se(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new G(null)}}set(e,n){if(B(e))return new G(n,this.children);{const r=z(e),s=(this.children.get(r)||new G(null)).set(Y(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(B(e))return n;{const r=z(e),s=(this.children.get(r)||new G(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),se(n,i),r):new G(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new G(null))}}function is(t,e,n){if(B(e))return new Tt(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new Tt(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new Tt(s)}}}function uu(t,e,n){let r=t;return Ie(n,(i,s)=>{r=is(r,se(e,i),s)}),r}function bp(t,e){if(B(e))return Tt.empty();{const n=t.writeTree_.setTree(e,new G(null));return new Tt(n)}}function du(t,e){return kr(t,e)!=null}function kr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Sp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function Bn(t,e){if(B(e))return t;{const n=kr(t,e);return n!=null?new Tt(new G(n)):new Tt(t.writeTree_.subtree(e))}}function fu(t){return t.writeTree_.isEmpty()}function di(t,e){return Lv(V(),t.writeTree_,e)}function Lv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Lv(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
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
 */function sa(t,e){return Bv(e,t)}function EI(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=is(t.visibleWrites,e,n)),t.lastWriteId=r}function kI(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=uu(t.visibleWrites,e,n),t.lastWriteId=r}function bI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function SI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&II(l,r.path)?i=!1:at(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return CI(t),!0;if(r.snap)t.visibleWrites=bp(t.visibleWrites,r.path);else{const l=r.children;Ie(l,a=>{t.visibleWrites=bp(t.visibleWrites,se(r.path,a))})}return!0}else return!1}function II(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(se(t.path,n),e))return!0;return!1}function CI(t){t.visibleWrites=Ov(t.allWrites,TI,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TI(t){return t.visible}function Ov(t,e,n){let r=Tt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)at(n,o)?(l=Oe(n,o),r=is(r,l,s.snap)):at(o,n)&&(l=Oe(o,n),r=is(r,V(),s.snap.getChild(l)));else if(s.children){if(at(n,o))l=Oe(n,o),r=uu(r,l,s.children);else if(at(o,n))if(l=Oe(o,n),B(l))r=uu(r,V(),s.children);else{const a=si(s.children,z(l));if(a){const c=a.getChild(Y(l));r=is(r,V(),c)}}}else throw _i("WriteRecord should have .snap or .children")}}return r}function Mv(t,e,n,r,i){if(!r&&!i){const s=kr(t.visibleWrites,e);if(s!=null)return s;{const o=Bn(t.visibleWrites,e);if(fu(o))return n;if(n==null&&!du(o,V()))return null;{const l=n||R.EMPTY_NODE;return di(o,l)}}}else{const s=Bn(t.visibleWrites,e);if(!i&&fu(s))return n;if(!i&&n==null&&!du(s,V()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(at(c.path,e)||at(e,c.path))},l=Ov(t.allWrites,o,e),a=n||R.EMPTY_NODE;return di(l,a)}}}function NI(t,e,n){let r=R.EMPTY_NODE;const i=kr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Bn(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=di(Bn(s,new K(o)),l);r=r.updateImmediateChild(o,a)}),Sp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Bn(t.visibleWrites,e);return Sp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function PI(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(du(t.visibleWrites,s))return null;{const o=Bn(t.visibleWrites,s);return fu(o)?i.getChild(n):di(o,i.getChild(n))}}function RI(t,e,n,r){const i=se(e,n),s=kr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Bn(t.visibleWrites,i);return di(o,r.getNode().getImmediateChild(n))}else return null}function AI(t,e){return kr(t.visibleWrites,e)}function DI(t,e,n,r,i,s,o){let l;const a=Bn(t.visibleWrites,e),c=kr(a,V());if(c!=null)l=c;else if(n!=null)l=di(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],d=o.getCompare(),u=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=u.getNext();for(;p&&f.length<i;)d(p,r)!==0&&f.push(p),p=u.getNext();return f}else return[]}function LI(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function Tl(t,e,n,r){return Mv(t.writeTree,t.treePath,e,n,r)}function Vd(t,e){return NI(t.writeTree,t.treePath,e)}function Ip(t,e,n,r){return PI(t.writeTree,t.treePath,e,n,r)}function Nl(t,e){return AI(t.writeTree,se(t.treePath,e))}function OI(t,e,n,r,i,s){return DI(t.writeTree,t.treePath,e,n,r,i,s)}function Wd(t,e,n){return RI(t.writeTree,t.treePath,e,n)}function Fv(t,e){return Bv(se(t.treePath,e),t.writeTree)}function Bv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class MI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ns(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ts(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ci(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ns(r,e.snapshotNode,i.oldSnap));else throw _i("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class FI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Uv=new FI;class $d{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),s=OI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function BI(t){return{filter:t}}function UI(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zI(t,e,n,r,i){const s=new MI;let o,l;if(n.type===bt.OVERWRITE){const c=n;c.source.fromUser?o=hu(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Pl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===bt.MERGE){const c=n;c.source.fromUser?o=jI(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=pu(t,e,c.path,c.children,r,i,l,s))}else if(n.type===bt.ACK_USER_WRITE){const c=n;c.revert?o=$I(t,e,c.path,r,i,s):o=VI(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===bt.LISTEN_COMPLETE)o=WI(t,e,n.path,r,s);else throw _i("Unknown operation type: "+n.type);const a=s.getChanges();return HI(e,o,a),{viewCache:o,changes:a}}function HI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Cl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Rv(Cl(e)))}}function zv(t,e,n,r,i,s){const o=e.eventCache;if(Nl(r,n)!=null)return e;{let l,a;if(B(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_r(e),f=c instanceof R?c:R.EMPTY_NODE,d=Vd(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Tl(r,_r(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=z(n);if(c===".priority"){S(jn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const d=Ip(r,n,f,a);d!=null?l=t.filter.updatePriority(f,d):l=o.getNode()}else{const f=Y(n);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const u=Ip(r,n,o.getNode(),a);u!=null?d=o.getNode().getImmediateChild(c).updateChild(f,u):d=o.getNode().getImmediateChild(c)}else d=Wd(r,c,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),c,d,f,i,s):l=o.getNode()}}return rs(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function Pl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);c=f.updateFullNode(a.getNode(),p,null)}else{const p=z(n);if(!a.isCompleteForPath(n)&&jn(n)>1)return e;const y=Y(n),C=a.getNode().getImmediateChild(p).updateChild(y,r);p===".priority"?c=f.updatePriority(a.getNode(),C):c=f.updateChild(a.getNode(),p,C,y,Uv,null)}const d=Dv(e,c,a.isFullyInitialized()||B(n),f.filtersNodes()),u=new $d(i,d,s);return zv(t,d,n,i,u,l)}function hu(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const f=new $d(i,e,s);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=rs(e,c,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=rs(e,c,l.isFullyInitialized(),l.isFiltered());else{const u=Y(n),p=l.getNode().getImmediateChild(d);let y;if(B(u))y=r;else{const v=f.getCompleteChild(d);v!=null?Od(u)===".priority"&&v.getChild(kv(u)).isEmpty()?y=v:y=v.updateChild(u,r):y=R.EMPTY_NODE}if(p.equals(y))a=e;else{const v=t.filter.updateChild(l.getNode(),d,y,u,f,o);a=rs(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Cp(t,e){return t.eventCache.isCompleteForChild(e)}function jI(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const f=se(n,a);Cp(e,z(f))&&(l=hu(t,l,f,c,i,s,o))}),r.foreach((a,c)=>{const f=se(n,a);Cp(e,z(f))||(l=hu(t,l,f,c,i,s,o))}),l}function Tp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=r:c=new G(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(f.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),y=Tp(t,p,u);a=Pl(t,a,new K(d),y,i,s,o,l)}}),c.children.inorderTraversal((d,u)=>{const p=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!f.hasChild(d)&&!p){const y=e.serverCache.getNode().getImmediateChild(d),v=Tp(t,y,u);a=Pl(t,a,new K(d),v,i,s,o,l)}}),a}function VI(t,e,n,r,i,s,o){if(Nl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Pl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let c=new G(null);return a.getNode().forEachChild(Jr,(f,d)=>{c=c.set(new K(f),d)}),pu(t,e,n,c,i,s,l,o)}else return e}else{let c=new G(null);return r.foreach((f,d)=>{const u=se(n,f);a.isCompleteForPath(u)&&(c=c.set(f,a.getNode().getChild(u)))}),pu(t,e,n,c,i,s,l,o)}}function WI(t,e,n,r,i){const s=e.serverCache,o=Dv(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return zv(t,o,n,r,Uv,i)}function $I(t,e,n,r,i,s){let o;if(Nl(r,n)!=null)return e;{const l=new $d(r,e,i),a=e.eventCache.getNode();let c;if(B(n)||z(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Tl(r,_r(e));else{const d=e.serverCache.getNode();S(d instanceof R,"serverChildren would be complete if leaf node"),f=Vd(r,d)}f=f,c=t.filter.updateFullNode(a,f,s)}else{const f=z(n);let d=Wd(r,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=a.getImmediateChild(f)),d!=null?c=t.filter.updateChild(a,f,d,Y(n),l,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(a,f,R.EMPTY_NODE,Y(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tl(r,_r(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Nl(r,V())!=null,rs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class KI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Bd(r.getIndex()),s=uI(r);this.processor_=BI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),f=new Vn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Vn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ia(d,f),this.eventGenerator_=new yI(this.query_)}get query(){return this.query_}}function GI(t){return t.viewCache_.serverCache.getNode()}function YI(t){return Cl(t.viewCache_)}function qI(t,e){const n=_r(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Np(t){return t.eventRegistrations_.length===0}function QI(t,e){t.eventRegistrations_.push(e)}function Pp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Rp(t,e,n,r){e.type===bt.MERGE&&e.source.queryId!==null&&(S(_r(t.viewCache_),"We should always have a full cache before handling merges"),S(Cl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=zI(t.processor_,i,e,n,r);return UI(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Hv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function JI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(s,o)=>{r.push(ci(s,o))}),n.isFullyInitialized()&&r.push(Rv(n.getNode())),Hv(t,r,n.getNode(),e)}function Hv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return vI(t.eventGenerator_,e,n,i)}/**
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
 */let Rl;class jv{constructor(){this.views=new Map}}function XI(t){S(!Rl,"__referenceConstructor has already been defined"),Rl=t}function ZI(){return S(Rl,"Reference.ts has not been loaded"),Rl}function e1(t){return t.views.size===0}function Kd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Rp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Rp(o,e,n,r));return s}}function Vv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Tl(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=Vd(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const c=ia(new Vn(l,a,!1),new Vn(r,i,!1));return new KI(e,c)}return o}function t1(t,e,n,r,i,s){const o=Vv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),QI(o,n),JI(o,n)}function n1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Wn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Pp(c,n,r)),Np(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Pp(a,n,r)),Np(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Wn(t)&&s.push(new(ZI())(e._repo,e._path)),{removed:s,events:o}}function Wv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Un(t,e){let n=null;for(const r of t.views.values())n=n||qI(r,e);return n}function $v(t,e){if(e._queryParams.loadsAllData())return oa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Kv(t,e){return $v(t,e)!=null}function Wn(t){return oa(t)!=null}function oa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Al;function r1(t){S(!Al,"__referenceConstructor has already been defined"),Al=t}function i1(){return S(Al,"Reference.ts has not been loaded"),Al}let s1=1;class Ap{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=LI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gv(t,e,n,r,i){return EI(t.pendingWriteTree_,e,n,r,i),i?Si(t,new vr(zd(),e,n)):[]}function o1(t,e,n,r){kI(t.pendingWriteTree_,e,n,r);const i=G.fromObject(n);return Si(t,new ui(zd(),e,i))}function In(t,e,n=!1){const r=bI(t.pendingWriteTree_,e);if(SI(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(V(),!0):Ie(r.children,o=>{s=s.set(new K(o),!0)}),Si(t,new Il(r.path,s,n))}else return[]}function qs(t,e,n){return Si(t,new vr(Hd(),e,n))}function l1(t,e,n){const r=G.fromObject(n);return Si(t,new ui(Hd(),e,r))}function a1(t,e){return Si(t,new Rs(Hd(),e))}function c1(t,e,n){const r=Yd(t,n);if(r){const i=qd(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new Rs(jd(o),l);return Qd(t,s,a)}else return[]}function Yv(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Kv(o,e))){const a=n1(o,e,n,r);e1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const f=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(u,p)=>Wn(p));if(f&&!d){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const p=h1(u);for(let y=0;y<p.length;++y){const v=p[y],C=v.query,m=Xv(t,v);t.listenProvider_.startListening(ss(C),As(t,C),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(ss(e),null):c.forEach(u=>{const p=t.queryToTagMap.get(la(u));t.listenProvider_.stopListening(ss(u),p)}))}p1(t,c)}return l}function qv(t,e,n,r){const i=Yd(t,r);if(i!=null){const s=qd(i),o=s.path,l=s.queryId,a=Oe(o,e),c=new vr(jd(l),a,n);return Qd(t,o,c)}else return[]}function u1(t,e,n,r){const i=Yd(t,r);if(i){const s=qd(i),o=s.path,l=s.queryId,a=Oe(o,e),c=G.fromObject(n),f=new ui(jd(l),a,c);return Qd(t,o,f)}else return[]}function d1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(u,p)=>{const y=Oe(u,i);s=s||Un(p,y),o=o||Wn(p)});let l=t.syncPointTree_.get(i);l?(o=o||Wn(l),s=s||Un(l,V())):(l=new jv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const v=Un(y,V());v&&(s=s.updateImmediateChild(p,v))}));const c=Kv(l,e);if(!c&&!e._queryParams.loadsAllData()){const u=la(e);S(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=m1();t.queryToTagMap.set(u,p),t.tagToQueryMap.set(p,u)}const f=sa(t.pendingWriteTree_,i);let d=t1(l,e,n,f,s,a);if(!c&&!o&&!r){const u=$v(l,e);d=d.concat(g1(t,e,u))}return d}function Gd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),c=Un(l,a);if(c)return c});return Mv(i,e,s,n,!0)}function f1(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const d=Oe(c,n);r=r||Un(f,d)});let i=t.syncPointTree_.get(n);i?r=r||Un(i,V()):(i=new jv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Vn(r,!0,!1):null,l=sa(t.pendingWriteTree_,e._path),a=Vv(i,e,l,s?o.getNode():R.EMPTY_NODE,s);return YI(a)}function Si(t,e){return Qv(e,t.syncPointTree_,null,sa(t.pendingWriteTree_,V()))}function Qv(t,e,n,r){if(B(t.path))return Jv(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Un(i,V()));let s=[];const o=z(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,f=Fv(r,o);s=s.concat(Qv(l,a,c,f))}return i&&(s=s.concat(Kd(i,t,r,n))),s}}function Jv(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Un(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Fv(r,o),f=t.operationForChild(o);f&&(s=s.concat(Jv(f,l,a,c)))}),i&&(s=s.concat(Kd(i,t,r,n))),s}function Xv(t,e){const n=e.query,r=As(t,n);return{hashFn:()=>(GI(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?c1(t,n._path,r):a1(t,n._path);{const s=aS(i,n);return Yv(t,n,null,s)}}}}function As(t,e){const n=la(e);return t.queryToTagMap.get(n)}function la(t){return t._path.toString()+"$"+t._queryIdentifier}function Yd(t,e){return t.tagToQueryMap.get(e)}function qd(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function Qd(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=sa(t.pendingWriteTree_,e);return Kd(r,n,i,null)}function h1(t){return t.fold((e,n,r)=>{if(n&&Wn(n))return[oa(n)];{let i=[];return n&&(i=Wv(n)),Ie(r,(s,o)=>{i=i.concat(o)}),i}})}function ss(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(i1())(t._repo,t._path):t}function p1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=la(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function m1(){return s1++}function g1(t,e,n){const r=e._path,i=As(t,e),s=Xv(t,n),o=t.listenProvider_.startListening(ss(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!Wn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,f,d)=>{if(!B(c)&&f&&Wn(f))return[oa(f).query];{let u=[];return f&&(u=u.concat(Wv(f).map(p=>p.query))),Ie(d,(p,y)=>{u=u.concat(y)}),u}});for(let c=0;c<a.length;++c){const f=a[c];t.listenProvider_.stopListening(ss(f),As(t,f))}}return o}/**
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
 */class Jd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jd(n)}node(){return this.node_}}class Xd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new Xd(this.syncTree_,n)}node(){return Gd(this.syncTree_,this.path_)}}const y1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Dp=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return v1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},v1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},_1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Zv=function(t,e,n,r){return Zd(e,new Xd(n,t),r)},e0=function(t,e,n){return Zd(t,new Jd(e),n)};function Zd(t,e,n){const r=t.getPriority().val(),i=Dp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Dp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ge(l,ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ge(i))),o.forEachChild(oe,(l,a)=>{const c=Zd(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class ef{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function tf(t,e){let n=e instanceof K?e:new K(e),r=t,i=z(n);for(;i!==null;){const s=si(r.node.children,i)||{children:{},childCount:0};r=new ef(i,r,s),n=Y(n),i=z(n)}return r}function Ii(t){return t.node.value}function t0(t,e){t.node.value=e,mu(t)}function n0(t){return t.node.childCount>0}function w1(t){return Ii(t)===void 0&&!n0(t)}function aa(t,e){Ie(t.node.children,(n,r)=>{e(new ef(n,t,r))})}function r0(t,e,n,r){n&&e(t),aa(t,i=>{r0(i,e,!0)})}function x1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Qs(t){return new K(t.parent===null?t.name:Qs(t.parent)+"/"+t.name)}function mu(t){t.parent!==null&&E1(t.parent,t.name,t)}function E1(t,e,n){const r=w1(n),i=jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,mu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mu(t))}/**
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
 */const k1=/[\[\].#$\/\u0000-\u001F\u007F]/,b1=/[\[\].#$\u0000-\u001F\u007F]/,Xa=10*1024*1024,nf=function(t){return typeof t=="string"&&t.length!==0&&!k1.test(t)},i0=function(t){return typeof t=="string"&&t.length!==0&&!b1.test(t)},S1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),i0(t)},I1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pd(t)||t&&typeof t=="object"&&jt(t,".sv")},C1=function(t,e,n,r){ca(Xl(t,"value"),e,n)},ca=function(t,e,n){const r=n instanceof K?new jS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+er(r));if(typeof e=="function")throw new Error(t+"contains a function "+er(r)+" with contents = "+e.toString());if(Pd(e))throw new Error(t+"contains "+e.toString()+" "+er(r));if(typeof e=="string"&&e.length>Xa/3&&Zl(e)>Xa)throw new Error(t+"contains a string greater than "+Xa+" utf8 bytes "+er(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ie(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!nf(o)))throw new Error(t+" contains an invalid key ("+o+") "+er(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VS(r,o),ca(t,l,r),WS(r)}),i&&s)throw new Error(t+' contains ".value" child '+er(r)+" in addition to actual children.")}},T1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Cs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!nf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(HS);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&at(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},N1=function(t,e,n,r){const i=Xl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ie(e,(o,l)=>{const a=new K(o);if(ca(i,l,se(n,a)),Od(a)===".priority"&&!I1(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),T1(i,s)},s0=function(t,e,n,r){if(!i0(n))throw new Error(Xl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},P1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),s0(t,e,n)},R1=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},A1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!S1(n))throw new Error(Xl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class D1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!bv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ht(t,e,n){rf(t,n),L1(t,r=>at(r,e)||at(e,r))}function L1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(O1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function O1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ts&&ke("event: "+n.toString()),bi(r)}}}/**
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
 */const M1="repo_interrupt",F1=25;class B1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new D1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sl(),this.transactionQueueTree_=new ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function U1(t,e,n){if(t.stats_=Dd(t.repoInfo_),t.forceRestClient_||fS())t.server_=new bl(t.repoInfo_,(r,i,s,o)=>{Lp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Op(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zt(t.repoInfo_,e,(r,i,s,o)=>{Lp(t,r,i,s,o)},r=>{Op(t,r)},r=>{H1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=yS(t.repoInfo_,()=>new gI(t.stats_,t.server_)),t.infoData_=new dI,t.infoSyncTree_=new Ap({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=qs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),sf(t,"connected",!1),t.serverSyncTree_=new Ap({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);ht(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function z1(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ua(t){return y1({timestamp:z1(t)})}function Lp(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=hl(n,c=>ue(c));o=u1(t.serverSyncTree_,s,a,i)}else{const a=ue(n);o=qv(t.serverSyncTree_,s,a,i)}else if(r){const a=hl(n,c=>ue(c));o=l1(t.serverSyncTree_,s,a)}else{const a=ue(n);o=qs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=fi(t,s)),ht(t.eventQueue_,l,o)}function Op(t,e){sf(t,"connected",e),e===!1&&$1(t)}function H1(t,e){Ie(e,(n,r)=>{sf(t,n,r)})}function sf(t,e,n){const r=new K("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(r,i);const s=qs(t.infoSyncTree_,r,i);ht(t.eventQueue_,r,s)}function of(t){return t.nextWriteId_++}function j1(t,e,n){const r=f1(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ue(i).withIndex(e._queryParams.getIndex());d1(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=qs(t.serverSyncTree_,e._path,s);else{const l=As(t.serverSyncTree_,e);o=qv(t.serverSyncTree_,e._path,s,l)}return ht(t.eventQueue_,e._path,o),Yv(t.serverSyncTree_,e,n,null,!0),s},i=>(Js(t,"get for query "+de(e)+" failed: "+i),Promise.reject(new Error(i))))}function V1(t,e,n,r,i){Js(t,"set",{path:e.toString(),value:n,priority:r});const s=ua(t),o=ue(n,r),l=Gd(t.serverSyncTree_,e),a=e0(o,l,s),c=of(t),f=Gv(t.serverSyncTree_,e,a,c,!0);rf(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(u,p)=>{const y=u==="ok";y||Fe("set at "+e+" failed: "+u);const v=In(t.serverSyncTree_,c,!y);ht(t.eventQueue_,e,v),gu(t,i,u,p)});const d=af(t,e);fi(t,d),ht(t.eventQueue_,d,[])}function W1(t,e,n,r){Js(t,"update",{path:e.toString(),value:n});let i=!0;const s=ua(t),o={};if(Ie(n,(l,a)=>{i=!1,o[l]=Zv(se(e,l),ue(a),t.serverSyncTree_,s)}),i)ke("update() called with empty data.  Don't do anything."),gu(t,r,"ok",void 0);else{const l=of(t),a=o1(t.serverSyncTree_,e,o,l);rf(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,f)=>{const d=c==="ok";d||Fe("update at "+e+" failed: "+c);const u=In(t.serverSyncTree_,l,!d),p=u.length>0?fi(t,e):e;ht(t.eventQueue_,p,u),gu(t,r,c,f)}),Ie(n,c=>{const f=af(t,se(e,c));fi(t,f)}),ht(t.eventQueue_,e,[])}}function $1(t){Js(t,"onDisconnectEvents");const e=ua(t),n=Sl();cu(t.onDisconnect_,V(),(i,s)=>{const o=Zv(i,s,t.serverSyncTree_,e);Av(n,i,o)});let r=[];cu(n,V(),(i,s)=>{r=r.concat(qs(t.serverSyncTree_,i,s));const o=af(t,i);fi(t,o)}),t.onDisconnect_=Sl(),ht(t.eventQueue_,V(),r)}function K1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(M1)}function Js(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function gu(t,e,n,r){e&&bi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function o0(t,e,n){return Gd(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function lf(t,e=t.transactionQueueTree_){if(e||da(t,e),Ii(e)){const n=a0(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&G1(t,Qs(e),n)}else n0(e)&&aa(e,n=>{lf(t,n)})}function G1(t,e,n){const r=n.map(c=>c.currentWriteId),i=o0(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];S(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=Oe(e,f.path);s=s.updateChild(d,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Js(t,"transaction put response",{path:a.toString(),status:c});let f=[];if(c==="ok"){const d=[];for(let u=0;u<n.length;u++)n[u].status=2,f=f.concat(In(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&d.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();da(t,tf(t.transactionQueueTree_,e)),lf(t,t.transactionQueueTree_),ht(t.eventQueue_,e,f);for(let u=0;u<d.length;u++)bi(d[u])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}fi(t,e)}},o)}function fi(t,e){const n=l0(t,e),r=Qs(n),i=a0(t,n);return Y1(t,i,r),r}function Y1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Oe(n,a.path);let f=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,d=a.abortReason,i=i.concat(In(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=F1)f=!0,d="maxretry",i=i.concat(In(t.serverSyncTree_,a.currentWriteId,!0));else{const u=o0(t,a.path,o);a.currentInputSnapshot=u;const p=e[l].update(u.val());if(p!==void 0){ca("transaction failed: Data returned ",p,a.path);let y=ue(p);typeof p=="object"&&p!=null&&jt(p,".priority")||(y=y.updatePriority(u.getPriority()));const C=a.currentWriteId,m=ua(t),h=e0(y,u,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=h,a.currentWriteId=of(t),o.splice(o.indexOf(C),1),i=i.concat(Gv(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(In(t.serverSyncTree_,C,!0))}else f=!0,d="nodata",i=i.concat(In(t.serverSyncTree_,a.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(u){setTimeout(u,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}da(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)bi(r[l]);lf(t,t.transactionQueueTree_)}function l0(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&Ii(r)===void 0;)r=tf(r,n),e=Y(e),n=z(e);return r}function a0(t,e){const n=[];return c0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function c0(t,e,n){const r=Ii(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);aa(e,i=>{c0(t,i,n)})}function da(t,e){const n=Ii(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,t0(e,n.length>0?n:void 0)}aa(e,r=>{da(t,r)})}function af(t,e){const n=Qs(l0(t,e)),r=tf(t.transactionQueueTree_,e);return x1(r,i=>{Za(t,i)}),Za(t,r),r0(r,i=>{Za(t,i)}),n}function Za(t,e){const n=Ii(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(In(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?t0(e,void 0):n.length=s+1,ht(t.eventQueue_,Qs(e),i);for(let o=0;o<r.length;o++)bi(r[o])}}/**
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
 */function q1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Q1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mp=function(t,e){const n=J1(t),r=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},J1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(i=q1(t.substring(f,d)));const u=Q1(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class X1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Z1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class eC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Od(this._path)}get ref(){return new un(this._repo,this._path)}get _queryIdentifier(){const e=Ep(this._queryParams),n=Rd(e);return n==="{}"?"default":n}get _queryObject(){return Ep(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof cf))return!1;const n=this._repo===e._repo,r=bv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zS(this._path)}}class un extends cf{constructor(e,n){super(e,n,new Ud,!1)}get parent(){const e=kv(this._path);return e===null?null:new un(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ds{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=yu(this.ref,e);return new Ds(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ds(i,yu(this.ref,r),oe)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function u0(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?yu(t._root,e):t._root}function yu(t,e){return t=rt(t),z(t._path)===null?P1("child","path",e):s0("child","path",e),new un(t._repo,se(t._path,e))}function tC(t,e){t=rt(t),R1("set",t._path),C1("set",e,t._path);const n=new Hs;return V1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function nC(t,e){N1("update",e,t._path);const n=new Hs;return W1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function d0(t){t=rt(t);const e=new eC(()=>{}),n=new uf(e);return j1(t._repo,t,n).then(r=>new Ds(r,new un(t._repo,t._path),t._queryParams.getIndex()))}class uf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new X1("value",this,new Ds(e.snapshotNode,new un(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Z1(this,e,n):null}matches(e){return e instanceof uf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}XI(un);r1(un);/**
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
 */const rC="FIREBASE_DATABASE_EMULATOR_HOST",vu={};let iC=!1;function sC(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=wi(s);t.repoInfo_=new pv(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function oC(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mp(s,i),l=o.repoInfo,a;typeof process<"u"&&ip&&(a=ip[rC]),a?(s=`http://${a}?ns=${l.namespace}`,o=Mp(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new pS(t.name,t.options,e);A1("Invalid Firebase Database URL",o),B(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const f=aC(l,t,c,new hS(t,n));return new cC(f,t)}function lC(t,e){const n=vu[e];(!n||n[t.key]!==t)&&ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),K1(t),delete n[t.key]}function aC(t,e,n,r){let i=vu[e.name];i||(i={},vu[e.name]=i);let s=i[t.toURLString()];return s&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new B1(t,iC,n,r),i[t.toURLString()]=s,s}class cC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new un(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ln("Cannot call "+e+" on a deleted database.")}}function uC(t=xy(),e){const n=_d(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=xx("database");r&&dC(n,...r)}return n}function dC(t,e,n,r={}){t=rt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&pr(r,s.repoInfo_.emulatorOptions))return;ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Uo(Uo.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Ex(r.mockUserToken,t.app.options.projectId);o=new Uo(l)}wi(e)&&(py(e),my("Database",!0)),sC(s,i,r,o)}/**
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
 */function fC(t){Jb(Ei),oi(new mr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return oC(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Fn(sp,op,t),Fn(sp,op,"esm2020")}Zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};fC();const hC={apiKey:"AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",authDomain:"kuryeprov44.firebaseapp.com",databaseURL:"https://kuryeprov44-default-rtdb.firebaseio.com",projectId:"kuryeprov44",storageBucket:"kuryeprov44.firebasestorage.app",messagingSenderId:"177653241936",appId:"1:177653241936:web:4130a534c4bf7cb05fd955",measurementId:"G-313RD4XLZW"},f0=wy(hC),df=qb(f0),h0=uC(f0),pC=new Kt;async function mC(){try{const e=(await ib(df,pC)).user;return await yC(e),{success:!0,user:e}}catch(t){return console.error("Login Error:",t),{success:!1,error:t.message}}}async function gC(){await Bk(df),localStorage.removeItem("firebase_uid")}async function yC(t){const e=u0(h0,"users/"+t.uid),n=await d0(e),r=new Date().toISOString();n.exists()?await nC(e,{lastLogin:r,photoURL:t.photoURL,displayName:t.displayName,email:t.email}):await tC(e,{uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,role:"user",isBanned:!1,dailyLimit:1e3,createdAt:r,lastLogin:r}),localStorage.setItem("firebase_uid",t.uid)}async function vC(t){if(!t)return{allowed:!1,reason:"Giriş yapılmamış."};try{const e=await d0(u0(h0,"users/"+t));if(e.exists()){const n=e.val();return n.isBanned?{allowed:!1,reason:"HESABINIZ YASAKLANMIŞTIR.",status:"banned"}:{allowed:!0,data:n}}else return{allowed:!1,reason:"Kullanıcı kaydı bulunamadı."}}catch{return{allowed:!1,reason:"Sunucu hatası."}}}const _C="yal42d-debug",wC="kurye_pro",xC=`https://raw.githubusercontent.com/${_C}/${wC}/main/updates`;async function p0(){return new Promise(t=>{const e=df.onAuthStateChanged(async n=>{if(e(),n){const r=await vC(n.uid);r.allowed?t({allowed:!0,user:r.data,status:"authorized"}):(await gC(),t({allowed:!1,reason:r.reason,status:r.status}))}else t({allowed:!1,reason:"Giriş Yapılmalı",status:"login_required"})})})}async function EC(){return await mC()}async function kC(){const t=await p0();if(!t.allowed)throw new Error(t.reason);const e=await fetch(`${xC}/secure_db.txt?t=${Date.now()}`);if(!e.ok)throw new Error("Veri indirilemedi.");const r=(await e.text()).match(/encryptedData\s*=\s*"([^"]+)"/);if(r&&r[1]){const i=r[1];if(i.startsWith("KRYSEC_")){const s=i.replace("KRYSEC_","").split("").reverse().join(""),o=decodeURIComponent(escape(window.atob(s)));return JSON.parse(o)}}throw new Error("Veri formatı hatalı.")}function bC(){typeof document>"u"||document.body.classList.add("min-h-screen","pb-32","bg-[#0f172a]")}function SC(){typeof window>"u"||Object.assign(window,{addCalculatedToPayment:ET,addCheckItem:HC,addDialerNumber:CT,addFuelEntry:tT,addNote:aT,addRepeatTransaction:PC,backupData:QC,calculateFuelConsumption:ZC,calculateFutureBalance:kT,calculateMaintenance:x0,calculatePerf:ha,calculateProfit:qn,callDialerNumber:NT,changeDays:WC,changeMonth:LC,changePacketCount:KC,changeSimulationDays:xT,clearDialerHistory:RT,clearFuelForm:rT,clearFuelHistory:nT,clearPacketInputs:yT,clearTransactionHistory:vT,closeDialerModal:IT,closeNoteModal:oT,deleteAccumulatedPayment:sT,deleteCheckItem:jC,deleteNote:cT,deleteRepeatTransaction:RC,goToToday:OC,loadDoors:N0,loadStreets:T0,openDialerModal:ST,openExternalMap:FT,openGoogleWeather:FC,openNoteModal:Zs,posTetikle:wT,processPayment:AC,quickSearchAddress:AT,selectQuickResult:DT,removeDialerNumber:TT,resetAllCounters:GC,resetPerfForm:fT,resetPriceDefaults:_T,restoreData:JC,saveExpenses:qC,saveFinancialData:y0,saveFuelUnitData:eT,saveOrderHistory:PT,savePerfMemoryAuto:gf,savePriceSettings:S0,scrollToResults:mT,searchAndShowMap:P0,setDurationMode:g0,setNoteType:lT,setPerfTime:dT,switchChecklist:zC,switchTab:gT,toggleCheckItem:E0,toggleManualMode:hT,toggleMapModal:OT,toggleSettings:pT,toggleSideDock:bT,updateEarningCalculation:pi})}let wt=4,ct={single:110,multi:40,avm:10,night:20},Dl="weekday",fe={},Ot=null,m0="expense",Ls=new Date,Xs="start",br=[],Sr=[],it={currentKm:0,lastOilKm:0,oilInterval:2e3},Ae={single:0,multi:0},te={},Ft=[],ye={fuel:250,extra:"",extraVatOnly1:"",extraVatOnly2:"",vatDescription:"",maint:3e3,acc:1e3,other:""},Pe="day";const yn=[{min:0,max:19,weekday:0,friday:0,saturday:0,sunday:0},{min:20,max:21,weekday:207,friday:289,saturday:434,sunday:521},{min:22,max:25,weekday:259,friday:363,saturday:545,sunday:654},{min:26,max:29,weekday:317,friday:444,saturday:665,sunday:798},{min:30,max:33,weekday:379,friday:531,saturday:796,sunday:955},{min:34,max:37,weekday:446,friday:624,saturday:936,sunday:1123},{min:38,max:41,weekday:517,friday:723,saturday:1085,sunday:1302},{min:42,max:45,weekday:592,friday:829,saturday:1243,sunday:1492},{min:46,max:49,weekday:671,friday:940,saturday:1410,sunday:1692},{min:50,max:53,weekday:783,friday:1096,saturday:1644,sunday:1973},{min:54,max:57,weekday:931,friday:1303,saturday:1954,sunday:2345},{min:58,max:61,weekday:1089,friday:1524,saturday:2286,sunday:2744},{min:62,max:65,weekday:1257,friday:1760,saturday:2640,sunday:3168},{min:66,max:69,weekday:1435,friday:2009,saturday:3014,sunday:3617},{min:70,max:999,weekday:1623,friday:2272,saturday:3408,sunday:4089}];let an=[],vn=10,Mt=[];function IC(){VC(),b0(),YC(),DC(),UC(),BC(),MC(),qn(),Vt(),x0(),uT(),$C(),XC(),TC(),NC(),fa(),I0(),ff(),CC(),g0("day");const t=document.getElementById("scrollDirectionBtn"),e=document.getElementById("scrollDirectionIcon");let n="bottom";t&&e&&(window.addEventListener("scroll",function(){const r=window.scrollY,i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);r<i/2?(n="bottom",e.className="fa-solid fa-arrow-down"):(n="top",e.className="fa-solid fa-arrow-up"),t.classList.toggle("visible",r>100)},{passive:!0}),t.addEventListener("click",function(){window.scrollTo({top:n==="bottom"?document.body.scrollHeight:0,behavior:"smooth"})})),LT()}function g0(t){Pe=t,["btnDurDay","btnDurWeek","btnDurMonth"].forEach(n=>{document.getElementById(n).classList.remove("active"),document.getElementById(n).classList.add("inactive")});const e=t==="day"?"btnDurDay":t==="week"?"btnDurWeek":"btnDurMonth";document.getElementById(e).classList.add("active"),document.getElementById(e).classList.remove("inactive"),t==="day"?wt=0:t==="week"?wt=1:wt=4,document.getElementById("daysOffDisplay").innerText=wt,qn()}function CC(){const t=["manualPaymentDate","packetPaymentDate"],e=new Date,n=[];let r=new Date(e);for(;r.getDay()!==3;)r.setDate(r.getDate()+1);for(let i=0;i<4;i++){const s=r.toISOString().split("T")[0],o=r.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"});n.push({value:s,label:o}),r.setDate(r.getDate()+7)}t.forEach(i=>{const s=document.getElementById(i);s&&(s.innerHTML="",n.forEach(o=>{const l=document.createElement("option");l.value=o.value,l.innerText=o.label,s.appendChild(l)}))})}function TC(){const t=JSON.parse(localStorage.getItem("kurye_financial")||"{}");t.bank&&(document.getElementById("bankAccount").value=t.bank),t.debt&&(document.getElementById("creditDebt").value=t.debt),v0()}function y0(){const t={bank:parseFloat(document.getElementById("bankAccount").value)||0,debt:parseFloat(document.getElementById("creditDebt").value)||0};localStorage.setItem("kurye_financial",JSON.stringify(t)),v0()}function v0(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;document.getElementById("netBalance").innerText=(t-e).toLocaleString("tr-TR")+" ₺"}function NC(){const t=localStorage.getItem("kurye_repeat");t&&(an=JSON.parse(t))}function PC(){const t=document.getElementById("repeatDay").value,e=document.getElementById("repeatDesc").value,n=parseFloat(document.getElementById("repeatAmount").value),r=document.getElementById("repeatType").value;if(!t||!e){const i=document.querySelector(".simulation-card");i.classList.add("shake-animation"),setTimeout(()=>i.classList.remove("shake-animation"),500);return}an.push({day:t,description:e,amount:n||0,type:r}),localStorage.setItem("kurye_repeat",JSON.stringify(an)),_0(),Vt(),Ue("Eklendi","Tekrarlayan işlem kaydedildi.")}function _0(){const t=document.getElementById("repeatTransactionsList");t.innerHTML="",an.forEach((e,n)=>{let r=e.type==="income"?"GELİR (+)":e.type==="expense"?"GİDER (-)":"AKTİVİTE",i=e.type==="income"?"text-green-400":e.type==="expense"?"text-red-400":"text-yellow-400",s=e.type==="activity"?"":e.type==="income"?`+${e.amount}₺`:`-${e.amount}₺`;t.innerHTML+=`
                    <div class="bg-slate-800/50 p-2 rounded-lg flex justify-between items-center border border-white/5">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[10px] text-gray-400">Her ayın ${e.day}. günü • <span class="${i} font-bold">${r} ${s}</span></div>
                        </div>
                        <button onclick="deleteRepeatTransaction(${n})" class="text-gray-500 hover:text-red-400"><i class="fa-solid fa-trash"></i></button>
                    </div>`})}function RC(t){an.splice(t,1),localStorage.setItem("kurye_repeat",JSON.stringify(an)),_0(),Vt()}function fa(){const t=localStorage.getItem("kurye_accumulated_payments");t&&(te=JSON.parse(t));const e=localStorage.getItem("kurye_transaction_history");e&&(Ft=JSON.parse(e));const n=Object.keys(te).sort();let r=n.length>0?n[0]:"--.--.----",i=n.length>0?te[r]:0,s=0;for(let l in te)s+=te[l];document.getElementById("nextPaymentAmount").innerText=i.toLocaleString("tr-TR")+" ₺",document.getElementById("nextPaymentDate").innerText=r.split("-").reverse().join("."),document.getElementById("accumulatedTotal").innerText=s.toLocaleString("tr-TR")+" ₺";const o=new Date().toISOString().split("T")[0];n.includes(o)?(document.getElementById("paymentDayInfo").innerText="BUGÜN ÖDEME GÜNÜ",document.getElementById("paymentDayInfo").className="font-bold text-emerald-400 animate-pulse"):(document.getElementById("paymentDayInfo").innerText="Her Çarşamba",document.getElementById("paymentDayInfo").className="font-bold text-purple-400"),w0()}async function AC(){const t=Object.keys(te).sort();if(t.length===0){Ue("Bilgi","Ödenecek tutar yok.");return}const e=t[0],n=te[e];if(!await Ci(`₺${n.toLocaleString("tr-TR")} tutarındaki ${e} tarihli ödemeyi banka hesabına aktarmak istiyor musunuz?`,"Ödeme Al"))return;let i=parseFloat(document.getElementById("bankAccount").value)||0;i+=n,document.getElementById("bankAccount").value=i,delete te[e],Ft.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"payment",amount:n,description:"Banka Aktarımı"}),y0(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(te)),localStorage.setItem("kurye_transaction_history",JSON.stringify(Ft)),fa(),Vt(),Ue("Başarılı","Ödeme banka hesabına eklendi.")}function w0(){const t=document.getElementById("transactionHistory");t.innerHTML="",Ft.length===0&&(t.innerHTML='<div class="text-center text-[10px] text-gray-500 italic py-4">İşlem yok.</div>'),Ft.forEach(e=>{let n=e.type==="income"?"transaction-income":e.type==="payment"?"transaction-payment":"transaction-expense";t.innerHTML+=`
                    <div class="transaction-history-item ${n} flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[9px] text-gray-400">${e.date}</div>
                        </div>
                        <div class="text-sm font-bold text-white">${e.amount.toLocaleString("tr-TR")} ₺</div>
                    </div>
                `})}function DC(){const t=localStorage.getItem("kurye_calendar");t&&(fe=JSON.parse(t)),ff()}function Vt(){const t=document.getElementById("calendarGrid");t.innerHTML="";const e=Ls.getFullYear(),n=Ls.getMonth(),r=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];document.getElementById("currentMonthLabel").innerText=r[n],document.getElementById("currentYearLabel").innerText=e;const i=new Date(e,n,1).getDay(),s=i===0?6:i-1,o=new Date(e,n+1,0).getDate();for(let f=0;f<s;f++){const d=document.createElement("div");d.className="calendar-day opacity-50 bg-slate-800/50",t.appendChild(d)}const l=new Date;let a=0,c=0;for(let f=1;f<=o;f++){const d=document.createElement("div");d.className="calendar-day flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 relative",f===l.getDate()&&n===l.getMonth()&&e===l.getFullYear()&&d.classList.add("today"),d.innerHTML=`<span class="text-sm font-bold text-gray-300">${f}</span>`;const u=`${e}-${String(n+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`,p=document.createElement("div");p.className="dots-container",fe[u]&&fe[u].forEach(y=>{y.type==="income"&&(p.innerHTML+='<div class="dot bg-green-500"></div>',a+=y.amount),y.type==="expense"&&(p.innerHTML+='<div class="dot bg-red-500"></div>',c+=y.amount),y.type==="activity"&&(p.innerHTML+='<div class="dot bg-yellow-500"></div>')}),an.forEach(y=>{parseInt(y.day)===f&&(p.innerHTML+='<div class="dot bg-blue-400"></div>')}),te[u]&&(p.innerHTML+='<div class="dot bg-purple-500 border border-white"></div>'),d.appendChild(p),d.onclick=()=>Zs(u),t.appendChild(d)}document.getElementById("monthlyExtraIncome").innerText="+"+a.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyExpenseSummary").innerText="-"+c.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyNetSummary").innerText=(a-c).toLocaleString("tr-TR")+" ₺",ff()}function LC(t){Ls.setMonth(Ls.getMonth()+t),Vt()}function OC(){Ls=new Date,Vt()}function ff(){const t=document.getElementById("todayActivities"),e=document.getElementById("upcomingActivities"),n=new Date().toISOString().split("T")[0];let r="",i="",s=!1;Object.keys(fe).sort().forEach(a=>{a>=n&&fe[a].forEach(f=>{const d=a===n,p=new Date(a).toLocaleDateString("tr-TR",{day:"numeric",month:"long"});let y="GİDER (-)",v="text-red-400",C=f.amount?`-${f.amount}₺`:"",m="border-red-500/20";f.type==="income"?(y="GELİR (+)",v="text-green-400",C=`+${f.amount}₺`,m="border-green-500/20"):f.type==="activity"&&(y="AKTİVİTE",v="text-yellow-400",C="",m="border-yellow-500/20");const h=`
                        <div onclick="openNoteModal('${a}')" class="activity-item flex items-center justify-between bg-slate-800/60 p-3 rounded-xl border ${m} mb-2 cursor-pointer hover:bg-slate-800">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-bold ${v} border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">${y}</span>
                                    <span class="text-[9px] text-gray-400">${d?"Bugün":p}</span>
                                </div>
                                <p class="text-xs font-bold text-white">${f.note}</p>
                            </div>
                            <span class="text-sm font-bold ${v}">${C}</span>
                        </div>`;d?r+=h:(i+=h,s=!0)})}),Object.keys(te).sort().forEach(a=>{if(a>=n){const c=a===n,d=new Date(a).toLocaleDateString("tr-TR",{day:"numeric",month:"long"}),u=`
                    <div onclick="openNoteModal('${a}')" class="activity-item flex items-center justify-between bg-purple-900/20 p-3 rounded-xl border border-purple-500/30 mb-2 cursor-pointer hover:bg-purple-900/30">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-[10px] font-bold text-purple-400 border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">ÖDEME</span>
                                <span class="text-[9px] text-purple-300">${c?"Bugün":d}</span>
                            </div>
                            <p class="text-xs font-bold text-white">Ödeme Bekliyor</p>
                        </div>
                        <span class="text-sm font-bold text-white">${te[a].toLocaleString("tr-TR")} ₺</span>
                    </div>`;c?r+=u:(i+=u,s=!0)}}),r||(r='<div class="text-center text-xs text-gray-500 italic py-2">Bugün için planlanan bir şey yok.</div>'),s||(i='<div class="text-center text-[10px] text-gray-600 py-2">Yaklaşan kayıt yok.</div>'),t.innerHTML=r,e.innerHTML=i}async function MC(){try{const r=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${37.8714}&longitude=${32.4846}&current_weather=true&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)).json();document.getElementById("currentTemp").innerText=`${Math.round(r.current_weather.temperature)}°`,document.getElementById("currentWeatherDesc").innerText=Fp(r.current_weather.weathercode);const i=document.getElementById("hourlyForecast");i.innerHTML="";const s=new Date().getHours();for(let l=0;l<24;l++){const a=new Date(r.hourly.time[l]);a.getHours()>=s&&(i.innerHTML+=`
                            <div class="text-center shrink-0">
                                <div class="bg-slate-800 rounded-xl p-3 min-w-[70px] border border-white/5">
                                    <div class="text-xs font-bold text-gray-300">${a.getHours()}:00</div>
                                    <div class="text-2xl my-2">${Bp(r.hourly.weathercode[l])}</div>
                                    <div class="text-sm font-bold text-white">${Math.round(r.hourly.temperature_2m[l])}°</div>
                                </div>
                            </div>`)}const o=document.getElementById("weeklyForecast");o.innerHTML="";for(let l=0;l<7;l++){const c=new Date(r.daily.time[l]).toLocaleDateString("tr-TR",{weekday:"long"}),f=r.daily.weathercode[l],u=f>=51&&f<=67||f>=80&&f<=82?"weather-row rain-alert-bg p-2 rounded-lg":"weather-row p-2";o.innerHTML+=`
                        <div class="${u} flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="w-6 text-center">${Bp(f)}</span>
                                <div>
                                    <div class="text-xs font-bold text-white">${c}</div>
                                    <div class="text-[10px] text-gray-400">${Fp(f)}</div>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-gray-300">
                                <span class="text-white">${Math.round(r.daily.temperature_2m_max[l])}°</span> / ${Math.round(r.daily.temperature_2m_min[l])}°
                            </div>
                        </div>`}}catch(t){console.error("Hava durumu hatası:",t)}}function Fp(t){return t===0?"Açık":t>=1&&t<=3?"Parçalı Bulutlu":t>=45&&t<=48?"Sisli":t>=51&&t<=67?"Yağmurlu":t>=71&&t<=77?"Karlı":t>=80&&t<=82?"Sağanak":t>=95?"Fırtına":"Bulutlu"}function Bp(t){return t===0?'<i class="fa-solid fa-sun text-yellow-400"></i>':t>=1&&t<=3?'<i class="fa-solid fa-cloud-sun text-gray-300"></i>':t>=45&&t<=48?'<i class="fa-solid fa-smog text-gray-400"></i>':t>=51&&t<=67?'<i class="fa-solid fa-cloud-rain text-blue-400"></i>':t>=71&&t<=77?'<i class="fa-regular fa-snowflake text-white"></i>':'<i class="fa-solid fa-cloud text-gray-500"></i>'}function FC(){window.open("https://www.google.com/search?q=hava+durumu+konya","_blank")}function BC(){const t=localStorage.getItem("kurye_garage");t&&(it=JSON.parse(t)),document.getElementById("currentKm").value=it.currentKm||"",document.getElementById("lastOilKm").value=it.lastOilKm||"",document.getElementById("oilInterval").value=it.oilInterval||2e3}function x0(){it.currentKm=parseFloat(document.getElementById("currentKm").value)||0,it.lastOilKm=parseFloat(document.getElementById("lastOilKm").value)||0,it.oilInterval=parseFloat(document.getElementById("oilInterval").value)||2e3,localStorage.setItem("kurye_garage",JSON.stringify(it));let e=(it.currentKm-it.lastOilKm)/it.oilInterval*100;e>100&&(e=100),e<0&&(e=0);const n=document.getElementById("oilProgressBar");n.style.width=e+"%",document.getElementById("oilPercentText").innerText="%"+e.toFixed(0);const r=document.getElementById("oilStatusText");e<50?(n.className="bg-green-500 h-full transition-all",r.innerText="Durum İyi",r.className="text-green-400 font-bold"):e<80?(n.className="bg-yellow-500 h-full transition-all",r.innerText="Bakım Yaklaşıyor",r.className="text-yellow-400 font-bold"):(n.className="bg-red-500 h-full transition-all",r.innerText="BAKIM GEREKLİ!",r.className="text-red-500 font-bold animate-pulse")}function UC(){const t=localStorage.getItem("kurye_checklist_start"),e=localStorage.getItem("kurye_checklist_end");t&&(br=JSON.parse(t)),e&&(Sr=JSON.parse(e)),hi()}function zC(t){Xs=t,document.getElementById("btnCheckStart").className=t==="start"?"toggle-btn active":"toggle-btn inactive",document.getElementById("btnCheckEnd").className=t==="end"?"toggle-btn active":"toggle-btn inactive";const e=document.getElementById("checkHeaderTitle"),n=document.getElementById("checkHeaderSub"),r=document.getElementById("checkHeaderIcon"),i=document.getElementById("checkHeaderCard");t==="start"?(e.innerText="İşe Başlarken",n.innerText="Unutma: Eksik malzeme = Zaman kaybı.",r.className="fa-solid fa-backpack text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",i.className="bg-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/20 transition-colors duration-500"):(e.innerText="İşten Dönerken",n.innerText="Yarına hazırlık bugünden başlar.",r.className="fa-solid fa-moon text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",i.className="bg-purple-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-purple-900/20 transition-colors duration-500"),hi()}function hi(){const t=Xs==="start"?br:Sr,e=document.getElementById("checklistContainer");e.innerHTML="",t.length===0?document.getElementById("emptyListMsg").classList.remove("hidden"):document.getElementById("emptyListMsg").classList.add("hidden"),t.forEach((n,r)=>{const i=document.createElement("div");i.className=`check-item ${n.checked?"checked":""} bg-slate-800 p-3 rounded-xl flex items-center justify-between cursor-pointer`,i.innerHTML=`<span class="font-bold text-sm text-white flex-1">${n.text}</span><button onclick="deleteCheckItem(event, ${r})" class="text-gray-500 hover:text-red-400 p-2"><i class="fa-solid fa-trash"></i></button>`,i.onclick=s=>{s.target.tagName!=="BUTTON"&&s.target.tagName!=="I"&&E0(r)},e.appendChild(i)})}function HC(){const t=document.getElementById("newCheckItem").value;if(!t)return;(Xs==="start"?br:Sr).push({text:t,checked:!1}),Ll(),document.getElementById("newCheckItem").value="",hi()}function E0(t){const e=Xs==="start"?br:Sr;e[t].checked=!e[t].checked,Ll(),hi(),e.length>0&&e.every(n=>n.checked)&&(Ue("Harika!","Tüm ürünler seçildi, çanta hazır!"),setTimeout(()=>{e.forEach(n=>n.checked=!1),Ll(),hi()},1500))}function jC(t,e){t.stopPropagation(),(Xs==="start"?br:Sr).splice(e,1),Ll(),hi()}function Ll(){localStorage.setItem("kurye_checklist_start",JSON.stringify(br)),localStorage.setItem("kurye_checklist_end",JSON.stringify(Sr))}function VC(){const t=new Date().getDay();Eo(t===0?"sunday":t===5?"friday":t===6?"saturday":"weekday")}function Eo(t){Dl=t;const e={weekday:"Pazartesi - Perşembe",friday:"Cuma Günü",saturday:"Cumartesi Günü",sunday:"Pazar Günü"};document.getElementById("selectedDayLabel")&&(document.getElementById("selectedDayLabel").innerText=e[t]),document.getElementById("speedDayLabel")&&(document.getElementById("speedDayLabel").innerText=e[t]),qn(),typeof pi=="function"&&pi()}function WC(t){wt+=t,wt<0&&(wt=0),wt>30&&(wt=30),document.getElementById("daysOffDisplay").innerText=wt,Pe="month",["btnDurDay","btnDurWeek","btnDurMonth"].forEach(e=>{document.getElementById(e).classList.remove("active"),document.getElementById(e).classList.add("inactive")}),qn()}function qn(){let t;Pe==="day"?t=1:Pe==="week"?t=6:t=30-wt,document.getElementById("calculatedWorkDays").innerText=t;const e=parseFloat(document.getElementById("dailyFuel").value)||0,n=parseFloat(document.getElementById("extraVat").value)||0,r=parseFloat(document.getElementById("extraVatOnly1").value)||0,i=parseFloat(document.getElementById("extraVatOnly2").value)||0,s=parseFloat(document.getElementById("maintCost").value)||0,o=parseFloat(document.getElementById("accCost").value)||0,l=parseFloat(document.getElementById("otherCost").value)||0;let a=0;if(document.getElementById("manualModeToggle").checked)a=parseFloat(document.getElementById("manualIncomeVal").value)||0;else{const w=parseFloat(document.getElementById("single").value)||0,P=parseFloat(document.getElementById("multi").value)||0,A=parseFloat(document.getElementById("avm").value)||0,Q=parseFloat(document.getElementById("night").value)||0,pe=parseFloat(document.getElementById("avgKmProfit").value)||0,Pt=oy(pe);pe>0?(document.getElementById("profitKmInfo").style.display="block",document.getElementById("profitKmRate").innerText=Pt):document.getElementById("profitKmInfo").style.display="none";const je=w+P,Qn=je*Pt,dn=w*ct.single+P*ct.multi,fn=A*ct.avm+Q*ct.night+Qn,I=dn+fn,D=Qc(je,yn,Dl).current,N=I+D;document.getElementById("dispDailyMoney").innerText=N.toLocaleString("tr-TR"),document.getElementById("dispTotalPackets").innerText=je,document.getElementById("bonusAmount").innerText=D.toLocaleString("tr-TR");const M=Qc(je,yn,Dl),j=document.getElementById("bonusBar"),Ce=document.getElementById("nextBonusPkt");if(document.getElementById("currentTierInfo").innerText=M.current.toLocaleString("tr-TR")+" TL",M.nextTarget>0){let B0=Math.min(100,je/M.nextTarget*100);j.style.width=`${B0}%`,Ce.innerText=M.nextTarget,document.getElementById("nextTierInfo").innerText=M.nextValue.toLocaleString("tr-TR")+" TL"}else j.style.width="100%",Ce.innerText="MAX",document.getElementById("nextTierInfo").innerText="MAX";const me=vo(je,yn,"weekday"),xe=vo(je,yn,"friday"),Ve=vo(je,yn,"saturday"),pt=vo(je,yn,"sunday"),L0=I+me,O0=I+xe,M0=I+Ve,F0=I+pt,wf=(L0*18+O0*4+M0*4+F0*4)/30;Pe==="day"?a=N:a=wf*t}let f=0,d=0;Pe==="day"?(f=0,d=0):Pe==="week"?(f=s/4,d=o/4):(f=s,d=o);const u=.2;let p=e;Pe==="week"?p=e*7:Pe==="month"&&(p=e*t);const y=Pe==="day"?n/30:Pe==="week"?n/4:n,v=Pe==="day"?l/30:Pe==="week"?l/4:l,C=Pe==="day"?(r+i)/30:Pe==="week"?(r+i)/4:r+i,m=p+y,h=f+d+v,g=m+h+C,x=a-a/(1+u),_=m-m/(1+u),k=Math.max(0,x-_-C),E=a-g-k;document.getElementById("resGross").innerText=a.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resExpenses").innerText=g.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resVatDeductions").innerText=(C+_).toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resVat").innerText=k.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resNet").innerText=E.toLocaleString("tr-TR",{maximumFractionDigits:0})}function $C(){const t=localStorage.getItem("kurye_packet_counter");t?Ae=JSON.parse(t):Ae={single:0,multi:0},hf(),pf();const e=localStorage.getItem("kurye_instant_fuel");e!==null&&(document.getElementById("perfFuelInput").value=e),pi()}function k0(){localStorage.setItem("kurye_packet_counter",JSON.stringify(Ae)),I0()}function KC(t,e){Ae[t]+=e,Ae[t]<0&&(Ae[t]=0),hf(),pf(),pi(),k0()}async function GC(){await Ci("Tüm paket sayaçlarını sıfırlamak istediğinize emin misiniz?","Sayaç Sıfırlama")&&(Ae={single:0,multi:0},hf(),pf(),localStorage.setItem("kurye_instant_fuel",250),document.getElementById("perfFuelInput").value=250,pi(),k0(),Ue("Sıfırlandı","Tüm sayaçlar temizlendi."))}function hf(){document.getElementById("counterSingle").textContent=Ae.single,document.getElementById("counterMulti").textContent=Ae.multi,document.getElementById("totalPacketsCounter").textContent=Ae.single+Ae.multi}function pf(){const t=Ae.single+Ae.multi;document.getElementById("perfPacketCount")&&(document.getElementById("perfPacketCount").value=t,ha())}function pi(){var g,x;const e=Ae.single||0,n=Ae.multi||0,r=e+n,i=parseFloat((g=document.getElementById("avgKmInput"))==null?void 0:g.value)||0;i&&localStorage.setItem("kurye_avg_km_perf",i);const s=oy(i),o=r*s,l=e*ct.single,a=n*ct.multi,f=Qc(r,yn,Dl).current,d=l+a+o+f,u=d/(1+.2),p=d-u,y=parseFloat((x=document.getElementById("perfFuelInput"))==null?void 0:x.value)||0;y&&localStorage.setItem("kurye_instant_fuel",y);const v=y/(1+.2),C=y-v,m=u-v,h=d-y;document.getElementById("singleCountDisplay").innerText=e,document.getElementById("multiCountDisplay").innerText=n,document.getElementById("earnSingle").innerText=l+" ₺",document.getElementById("earnMulti").innerText=a+" ₺",document.getElementById("kmUnitPriceDisp").innerText=s,document.getElementById("perfKmEarnings").innerText=o.toFixed(0)+" ₺",document.getElementById("earnBonus").innerText=f+" ₺",document.getElementById("totalEarning").innerText=d.toLocaleString("tr-TR")+" ₺",document.getElementById("vatOnIncome").innerText=p.toFixed(0)+" ₺",document.getElementById("incomeWithoutVat").innerText="KDV Hariç: "+u.toFixed(0)+" ₺",document.getElementById("vatOnFuel").innerText=C.toFixed(0)+" ₺",document.getElementById("fuelWithoutVat").innerText="KDV Hariç: "+v.toFixed(0)+" ₺",document.getElementById("netEarningAfterVat").innerText=m.toFixed(0)+" ₺",document.getElementById("totalNetEarning").innerText=h.toLocaleString("tr-TR")+" ₺"}function Ci(t,e="Emin misiniz?"){return new Promise(n=>{document.getElementById("confirmModalTitle").textContent=e,document.getElementById("confirmModalMessage").textContent=t,document.getElementById("customConfirmModal").classList.remove("hidden"),document.getElementById("confirmModalOk").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!0)},document.getElementById("confirmModalCancel").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!1)}})}function Ue(t,e){const n=document.querySelector(".success-toast");n&&n.remove();const r=document.createElement("div");r.className="success-toast",r.innerHTML=`<i class="fa-solid fa-check-circle text-lg"></i><div><div class="font-bold">${t}</div><div class="text-[10px] opacity-90">${e}</div></div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3e3)}function b0(){const t=localStorage.getItem("kurye_prices");t&&(ct=JSON.parse(t)),["confSingle","confMulti","confAvm","confNight"].forEach(e=>{const n=e.replace("conf","").toLowerCase();document.getElementById(e).value=ct[n]})}function YC(){const t=localStorage.getItem("kurye_expenses");t&&(ye=JSON.parse(t)),document.getElementById("dailyFuel").value=ye.fuel,document.getElementById("extraVat").value=ye.extra,document.getElementById("extraVatOnly1").value=ye.extraVatOnly1,document.getElementById("extraVatOnly2").value=ye.extraVatOnly2,document.getElementById("vatDescription").value=ye.vatDescription,document.getElementById("maintCost").value=ye.maint,document.getElementById("accCost").value=ye.acc,document.getElementById("otherCost").value=ye.other}function qC(){ye.fuel=parseFloat(document.getElementById("dailyFuel").value)||0,ye.extra=parseFloat(document.getElementById("extraVat").value)||0,ye.extraVatOnly1=parseFloat(document.getElementById("extraVatOnly1").value)||0,ye.extraVatOnly2=parseFloat(document.getElementById("extraVatOnly2").value)||0,ye.vatDescription=document.getElementById("vatDescription").value,ye.maint=parseFloat(document.getElementById("maintCost").value)||0,ye.acc=parseFloat(document.getElementById("accCost").value)||0,ye.other=parseFloat(document.getElementById("otherCost").value)||0,localStorage.setItem("kurye_expenses",JSON.stringify(ye))}function S0(){["single","multi","avm","night"].forEach(t=>{const e="conf"+t.charAt(0).toUpperCase()+t.slice(1);ct[t]=parseFloat(document.getElementById(e).value)||0}),localStorage.setItem("kurye_prices",JSON.stringify(ct)),qn()}function QC(){const t={metadata:{app:"Kurye Pro",version:"V34",date:new Date().toISOString()},prices:ct,dailyBonusTiers:yn,calendarData:fe,checklistStart:br,checklistEnd:Sr,garageData:it,packetCounter:Ae,accumulatedPayments:te,fuelHistory:Mt,expenses:JSON.parse(localStorage.getItem("kurye_expenses")||"{}")},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=`kurye_backup_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}async function JC(t){const e=t.target.files[0];if(!e||!await Ci("Verileriniz silinecek. Onaylıyor musunuz?","Geri Yükle"))return;const r=new FileReader;r.onload=function(i){try{const s=JSON.parse(i.target.result);s.prices&&localStorage.setItem("kurye_prices",JSON.stringify(s.prices)),s.expenses&&localStorage.setItem("kurye_expenses",JSON.stringify(s.expenses)),s.calendarData&&localStorage.setItem("kurye_calendar",JSON.stringify(s.calendarData)),s.packetCounter&&localStorage.setItem("kurye_packet_counter",JSON.stringify(s.packetCounter)),s.fuelHistory&&localStorage.setItem("kurye_fuel_history_list",JSON.stringify(s.fuelHistory)),window.location.reload()}catch{Ue("Hata","Dosya okunamadı.")}},r.readAsText(e)}function XC(){const t=localStorage.getItem("kurye_fuel_unit_price");t&&(document.getElementById("calcFuelUnitPrice").value=t);const e=localStorage.getItem("kurye_fuel_history_list");e&&(Mt=JSON.parse(e),mf())}function ZC(){const t=parseFloat(document.getElementById("calcFuelUnitPrice").value)||0,e=parseFloat(document.getElementById("calcFuelPrice").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;let r=t>0&&e>0?e/t:0;document.getElementById("calcFuelLtDisplay").innerText=r.toFixed(1),document.getElementById("calcFuelLt").value=r,n>0&&e>0&&(document.getElementById("resFuelTl").innerText=(e/n).toFixed(2),document.getElementById("resFuelLt100").innerText=(r>0?r/n*100:0).toFixed(1))}function eT(){localStorage.setItem("kurye_fuel_unit_price",document.getElementById("calcFuelUnitPrice").value)}function tT(){const t=parseFloat(document.getElementById("calcFuelPrice").value)||0,e=parseFloat(document.getElementById("calcFuelLt").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;if(t<=0)return Ue("Hata","Tutar giriniz.");Mt.unshift({date:new Date().toLocaleDateString("tr-TR",{day:"numeric",month:"short"}),amount:t,lt:e,km:n,per100:n>0&&e>0?(e/n*100).toFixed(1):"0.0"}),Mt.length>5&&(Mt=Mt.slice(0,5)),localStorage.setItem("kurye_fuel_history_list",JSON.stringify(Mt)),mf(),Ue("Eklendi","Yakıt kaydı eklendi.")}function mf(){const t=document.getElementById("fuelHistoryList");t&&(t.innerHTML=Mt.length?"":'<div class="text-center text-[10px] text-gray-600 py-2">Kayıt yok.</div>',Mt.forEach(e=>{t.innerHTML+=`<div class="bg-slate-800/80 p-2 rounded-lg border border-white/5 flex justify-between items-center mb-1"><div><div class="text-xs font-bold text-white">${e.amount} ₺ <span class="text-[10px] text-gray-400">(${e.lt.toFixed(1)} Lt)</span></div><div class="text-[9px] text-gray-500">${e.date} • ${e.km>0?e.km+" KM":"KM girilmedi"}</div></div><div class="text-right"><div class="text-xs font-bold text-cyan-400">${e.per100} Lt <span class="text-[9px] text-gray-500">/100km</span></div></div></div>`}))}async function nT(){await Ci("Geçmiş silinsin mi?")&&(Mt=[],localStorage.removeItem("kurye_fuel_history_list"),mf())}function rT(){document.getElementById("calcFuelPrice").value="",document.getElementById("calcFuelKm").value=""}function iT(t){const e=new Date(t);Ot=t,document.getElementById("noteDateTitle").innerText=e.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}),document.getElementById("noteModal").classList.remove("hidden");const n=document.getElementById("dayEventsList");n.innerHTML="";let r=!1;te[t]&&(r=!0,n.innerHTML+=`
                    <div class="bg-purple-900/40 p-2 rounded-lg mb-2 border border-purple-500/30 flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">Ödeme Günü</div>
                            <div class="text-[10px] text-purple-300">Bu tarihte birikmiş: <span class="text-white font-bold">${te[t].toLocaleString("tr-TR")} ₺</span></div>
                        </div>
                        <button onclick="deleteAccumulatedPayment('${t}')" class="text-purple-300 hover:text-red-400 transition-colors px-2"><i class="fa-solid fa-trash"></i></button>
                    </div>`);const i=parseInt(t.split("-")[2]);an.forEach(s=>{if(parseInt(s.day)===i){r=!0;let o=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",l=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",a=s.type==="activity"?"":s.type==="income"?`+${s.amount}₺`:`-${s.amount}₺`;n.innerHTML+=`
                        <div class="bg-blue-900/40 p-2 rounded-lg mb-2 border border-blue-500/20">
                            <div class="text-xs font-bold text-white">${s.description}</div>
                            <div class="text-[10px] text-blue-300">Tekrarlayan İşlem • <span class="${l} font-bold">${o} ${a}</span></div>
                        </div>`}}),fe[t]&&fe[t].forEach((s,o)=>{r=!0;let l=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",a=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",c="";s.type==="income"?c=`+${s.amount}₺`:s.type==="expense"&&(c=`-${s.amount}₺`),n.innerHTML+=`
                        <div class="bg-slate-800 p-2 rounded-lg mb-2 flex justify-between items-center">
                            <div>
                                <div class="text-xs font-bold text-white">${s.note}</div>
                                <div class="text-[10px] text-gray-400"><span class="${a} font-bold">${l}</span> ${c}</div>
                            </div>
                            <button onclick="deleteNote(${o})" class="text-red-400"><i class="fa-solid fa-trash"></i></button>
                        </div>`}),r||(n.innerHTML='<div class="text-center text-[10px] text-gray-500 py-2">Henüz not yok.</div>')}async function sT(t){await Ci(`${t} tarihindeki ödemeyi silmek istediğinize emin misiniz?`,"Ödeme Sil")&&(delete te[t],localStorage.setItem("kurye_accumulated_payments",JSON.stringify(te)),Ue("Silindi","Ödeme silindi."),Zs(t),Vt(),fa())}function Zs(t){iT(t)}function oT(){document.getElementById("noteModal").classList.add("hidden")}function lT(t){m0=t,["btnTypeIncome","btnTypeExpense","btnTypeActivity"].forEach(e=>document.getElementById(e).classList.remove("active")),document.getElementById("btnType"+t.charAt(0).toUpperCase()+t.slice(1)).classList.add("active")}function aT(){const t=document.getElementById("noteText").value,e=parseFloat(document.getElementById("noteAmount").value);!t&&!e||(fe[Ot]||(fe[Ot]=[]),fe[Ot].push({note:t,amount:e,type:m0}),localStorage.setItem("kurye_calendar",JSON.stringify(fe)),document.getElementById("noteText").value="",document.getElementById("noteAmount").value="",Ue("Eklendi","Not eklendi."),Zs(Ot),Vt())}function cT(t){fe[Ot]&&(fe[Ot].splice(t,1),fe[Ot].length===0&&delete fe[Ot],localStorage.setItem("kurye_calendar",JSON.stringify(fe)),Zs(Ot),Vt())}function uT(){const t=localStorage.getItem("kurye_perf_memory");if(t){const e=JSON.parse(t);e.start&&(document.getElementById("perfStartTime").value=e.start),e.end&&(document.getElementById("perfEndTime").value=e.end),e.count&&(document.getElementById("perfPacketCount").value=e.count),ha()}}function gf(){const t={start:document.getElementById("perfStartTime").value,end:document.getElementById("perfEndTime").value,count:document.getElementById("perfPacketCount").value};localStorage.setItem("kurye_perf_memory",JSON.stringify(t))}function dT(t){const e=new Date,n=String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0");document.getElementById(t).value=n,ha(),gf()}function ha(){const t=document.getElementById("perfStartTime").value,e=document.getElementById("perfEndTime").value,n=parseFloat(document.getElementById("perfPacketCount").value)||0;if(!t||!e||n<=0)return;const[r,i]=t.split(":").map(Number),[s,o]=e.split(":").map(Number);let l=s*60+o-(r*60+i);if(l<0&&(l+=24*60),l>0){const a=l/60,c=n/a,f=l/n;document.getElementById("perfResultArea").classList.remove("hidden"),document.getElementById("perfAvgSpeed").innerText=c.toFixed(1),document.getElementById("perfMinsPerPacket").innerText=f.toFixed(1),document.getElementById("perfTotalTime").innerText=Math.floor(l/60)+"s "+l%60+"dk",document.getElementById("perfTotalPackets").innerText=n}}function fT(){document.getElementById("perfStartTime").value="",document.getElementById("perfEndTime").value="",document.getElementById("perfPacketCount").value="",document.getElementById("perfResultArea").classList.add("hidden"),gf()}function I0(){let t=0;for(let e in localStorage)localStorage.hasOwnProperty(e)&&(t+=(localStorage[e].length+e.length)*2);document.getElementById("dataSize").innerText=(t/1024).toFixed(2)+" KB"}function hT(){const t=document.getElementById("manualModeToggle").checked,e=document.getElementById("manualSection"),n=document.getElementById("packetSection"),r=document.getElementById("modeLabel");t?(e.classList.remove("hidden"),n.classList.add("hidden"),r.innerText="MANUEL",r.classList.remove("text-gray-300"),r.classList.add("text-emerald-400")):(e.classList.add("hidden"),n.classList.remove("hidden"),r.innerText="PAKET",r.classList.add("text-gray-300"),r.classList.remove("text-emerald-400")),qn()}function pT(){document.getElementById("settingsModal").classList.toggle("hidden")}function mT(){document.getElementById("finalResultCard").scrollIntoView({behavior:"smooth"})}function gT(t,e){document.querySelectorAll(".tab-content").forEach(r=>r.classList.remove("active")),document.getElementById(t).classList.add("active"),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active","bg-indigo-600","text-white","shadow-lg")),e.classList.add("active","bg-indigo-600","text-white","shadow-lg"),e.classList.remove("text-gray-400");const n=document.getElementById("headerManualToggle");t==="tabProfit"?n.classList.remove("hidden"):n.classList.add("hidden")}function yT(){document.getElementById("single").value="",document.getElementById("multi").value="",qn()}function vT(){Ft=[],localStorage.removeItem("kurye_transaction_history"),w0()}function _T(){confirm("Varsayılan fiyatlara dönülsün mü?")&&(ct={single:110,multi:40,avm:10,night:20},S0(),b0())}function wT(){console.log("POS")}function xT(t){vn+=t,vn<1&&(vn=1),vn>60&&(vn=60),document.getElementById("simDays").textContent=vn}async function ET(t){const e=document.getElementById("resNet").innerText.replace(/\./g,"").replace(",","."),n=parseFloat(e);if(n<=0){Ue("Hata","Net gelir 0 veya daha düşük.");return}const r=document.getElementById(t).value,i=new Date(r);await Ci(`₺${n.toLocaleString("tr-TR")} tutarındaki net gelir ${i.toLocaleDateString("tr-TR")} ödemesine eklensin mi?`,"Ödeme Ekle")&&(te[r]||(te[r]=0),te[r]+=n,Ft.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"income",amount:n,description:"Hesaplanan Net Gelir"}),Ft.length>5&&Ft.pop(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(te)),localStorage.setItem("kurye_transaction_history",JSON.stringify(Ft)),Ue("Başarılı","Ödeme gününe eklendi."),fa(),Vt())}function kT(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;let n=t-e,r=0,i=0;const s=new Date,o=new Date;o.setDate(s.getDate()+vn),Object.keys(fe).forEach(u=>{const p=new Date(u);p>=s&&p<=o&&fe[u].forEach(v=>{v.type==="income"?r+=parseFloat(v.amount)||0:v.type==="expense"&&(i+=parseFloat(v.amount)||0)})});const l=s.getDate(),a=new Date(s.getFullYear(),s.getMonth()+1,0).getDate();an.forEach(u=>{if(u.type==="activity")return;let p=u.day-l;p<0&&(p=a-l+parseInt(u.day)),p<=vn&&(u.type==="income"?r+=u.amount:u.type==="expense"&&(i+=u.amount))});for(let u in te){const p=new Date(u);p>=s&&p<=o&&(r+=te[u])}document.getElementById("currentBalanceResult").innerText=n.toLocaleString("tr-TR")+" ₺",document.getElementById("futureIncomesResult").innerText="+"+r.toLocaleString("tr-TR")+" ₺",document.getElementById("futureExpensesResult").innerText="-"+i.toLocaleString("tr-TR")+" ₺";const c=n+r-i;document.getElementById("finalBalanceResult").innerText=c.toLocaleString("tr-TR")+" ₺";const f=document.getElementById("resultEmoji"),d=document.getElementById("resultTitle");c>n*1.2?(f.textContent="🚀",d.textContent="MÜTHİŞ!",d.className="text-lg font-bold text-emerald-400"):c>n?(f.textContent="📈",d.textContent="İYİ GİDİYOR!",d.className="text-lg font-bold text-green-400"):c>0?(f.textContent="⚠️",d.textContent="DİKKAT!",d.className="text-lg font-bold text-yellow-400"):(f.textContent="🔴",d.textContent="TEHLİKE!",d.className="text-lg font-bold text-red-400"),document.getElementById("futureResult").classList.remove("hidden"),document.getElementById("futureResult").scrollIntoView({behavior:"smooth",block:"center"})}function bT(){const t=document.getElementById("sideDock");t&&t.classList.toggle("active")}let Os=JSON.parse(localStorage.getItem("kurye_dialer_numbers")||"[]"),vt=JSON.parse(localStorage.getItem("kurye_dialer_history")||"[]");function ST(){document.getElementById("dialerModal").classList.remove("hidden"),yf(),vf(),document.getElementById("dialerOrderInput").focus()}function IT(){document.getElementById("dialerModal").classList.add("hidden")}function yf(){const t=document.getElementById("dialerNumbersList");t.innerHTML="",Os.forEach((e,n)=>{t.innerHTML+=`
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
                `})}function CT(){const t=document.getElementById("newDialerNumber"),e=t.value.trim().replace(/\s/g,"");if(e){if(e.length<3)return Ue("Hata","Geçersiz numara");Os.push(e),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(Os)),t.value="",yf()}}function TT(t){Os.splice(t,1),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(Os)),yf()}function NT(t){const e=document.getElementById("dialerOrderInput").value.trim();e&&C0(e);let n=t;e&&(n+=","+e),window.open("tel:"+n)}function PT(){const t=document.getElementById("dialerOrderInput").value.trim();t&&(C0(t),Ue("Kaydedildi","Geçmişe eklendi"))}function C0(t){vt=vt.filter(e=>e!==t),vt.unshift(t),vt.length>10&&(vt=vt.slice(0,10)),localStorage.setItem("kurye_dialer_history",JSON.stringify(vt)),vf()}function vf(){const t=document.getElementById("dialerHistoryList"),e=document.getElementById("dialerHistorySection");if(vt.length===0){e.classList.add("hidden");return}e.classList.remove("hidden"),t.innerHTML="",vt.forEach(n=>{t.innerHTML+=`
                    <button onclick="document.getElementById('dialerOrderInput').value = '${n}'" 
                        class="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 font-mono text-sm border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                        ${n}
                    </button>
                `})}function RT(){vt=[],localStorage.setItem("kurye_dialer_history",JSON.stringify(vt)),vf()}async function AT(t){const e=document.getElementById("quickSearchResults");if(!t||t.length<2){e.classList.add("hidden"),e.innerHTML="";return}if(await R0(),!Qe)return;function n(l){return l.toUpperCase().replace(/İ/g,"I").replace(/I/g,"I").replace(/Ğ/g,"G").replace(/Ü/g,"U").replace(/Ş/g,"S").replace(/Ö/g,"O").replace(/Ç/g,"C")}const r=t.trim().split(/\s+/).map(l=>n(l)).filter(l=>l.length>0),i=[],s=20;function o(l){const a=n(l);return r.every(c=>a.includes(c))}for(const[l,a]of Object.entries(Qe)){const c=a.adi;for(const[f,d]of Object.entries(a.streets||{})){const u=d.adi;for(const p of d.doors||[]){const y=p.no,v=c+" "+u+" "+y;if(o(v)&&i.push({type:"kapi",icon:"fa-door-open",color:"text-amber-400",text:c+" Mah. "+u+" No:"+y,mahalleId:l,mahalleAdi:c,sokakId:f,sokakAdi:u,door:p}),i.length>=s)break}if(i.length<s){const p=c+" "+u;o(p)&&!i.some(y=>y.sokakId===f&&!y.door)&&i.push({type:"sokak",icon:"fa-road",color:"text-green-400",text:u+", "+c+" Mah.",mahalleId:l,mahalleAdi:c,sokakId:f,sokakAdi:u})}if(i.length>=s)break}if(i.length<s&&r.length===1&&o(c)&&!i.some(f=>f.mahalleId===l&&f.type==="mahalle")&&i.push({type:"mahalle",icon:"fa-location-dot",color:"text-blue-400",text:c+" Mah.",mahalleId:l,mahalleAdi:c}),i.length>=s)break}i.sort((l,a)=>{const c={kapi:0,sokak:1,mahalle:2};return c[l.type]-c[a.type]}),i.length===0?e.innerHTML='<div class="p-3 text-gray-500 text-sm text-center">Sonuç bulunamadı</div>':e.innerHTML=i.map(l=>`
                    <div class="p-2 hover:bg-slate-700 cursor-pointer flex items-center gap-2 text-sm border-b border-slate-700 last:border-0"
                         onclick='selectQuickResult(${JSON.stringify(l).replace(/'/g,"&#39;")})'>
                        <i class="fa-solid ${l.icon} ${l.color}"></i>
                        <span class="text-gray-200">${l.text}</span>
                    </div>
                `).join(""),e.classList.remove("hidden")}function DT(t){document.getElementById("quickSearchResults").classList.add("hidden"),document.getElementById("quickAddressSearch").value=t.text;const e=document.getElementById("mapMahalle");e.value=t.mahalleId,T0(),t.sokakId&&setTimeout(()=>{const n=document.getElementById("mapSokak");n.value=t.sokakId,N0(),t.door&&setTimeout(()=>{const r=document.getElementById("mapKapi"),i="No: "+t.door.no;for(let s of r.options)if(s.text===i||s.textContent===i){r.value=s.value;break}P0()},200)},150)}let Dt=null,ec=null,zo=null,Qe=null;window.attemptLogin=async function(){const t=document.getElementById("btnLoginBtn");t.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i> Google ile Bağlanılıyor...',t.disabled=!0;const e=await EC();e.success?(document.getElementById("loginOverlay").classList.add("hidden"),Ue("Giriş Başarılı",`Hoşgeldin, ${e.user.displayName}`)):(alert("Giriş Başarısız: "+e.error),t.innerHTML='<i class="fa-brands fa-google mr-2"></i> GOOGLE İLE GİRİŞ YAP',t.disabled=!1)};async function LT(){const t=document.getElementById("deviceInfoText");t&&(t.innerText="Yükleniyor...");const e=await p0(),n=document.getElementById("loginOverlay");e.status==="authorized"?n&&(n.classList.add("transition-opacity","duration-500","opacity-0"),setTimeout(()=>{n.classList.add("hidden"),n.style.opacity="1"},500)):(t&&(t.innerText="Güvenli Giriş v4.2"),e.status==="banned"&&(document.getElementById("loginTitle").innerText="HESAP YASAKLANDI",document.getElementById("loginTitle").classList.add("text-red-500"),document.getElementById("btnLoginBtn").style.display="none",t&&(t.innerText="Yönetici ile iletişime geçin.")))}async function OT(){var n;const t=document.getElementById("mapModal");if(!t)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),t.classList.add("animate-modal-in"),await R0(),((n=document.getElementById("mapMahalle"))==null?void 0:n.options.length)<=1&&MT()):(t.classList.add("hidden"),t.classList.remove("animate-modal-in"),console.log("🔒 Güvenlik: Adres verisi RAM'den silindi."),Qe=null,document.getElementById("mapMahalle").innerHTML='<option value="">Seçiniz...</option>',document.getElementById("mapSokak").innerHTML='<option value="">Önce Mahalle Seçin</option>',document.getElementById("mapKapi").innerHTML='<option value="">Önce Sokak Seçin</option>',Dt&&(Dt.remove(),Dt=null))}function MT(){const t=document.getElementById("mapMahalle");if(!Qe||t.options.length>1)return;t.innerHTML='<option value="">Seçiniz...</option>';const e=Object.entries(Qe).map(([n,r])=>({id:n,adi:r.adi}));e.sort((n,r)=>n.adi.localeCompare(r.adi,"tr")),e.forEach(n=>{const r=document.createElement("option");r.value=n.id,r.textContent=n.adi,t.appendChild(r)})}function T0(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak"),n=document.getElementById("mapKapi");if(e.innerHTML='<option value="">Yükleniyor...</option>',e.disabled=!0,n.innerHTML='<option value="">Önce Sokak Seçin</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!Qe||!Qe[t]){e.innerHTML='<option value="">Önce Mahalle Seçin</option>';return}const r=Qe[t].streets,i=Object.entries(r).map(([s,o])=>({id:s,adi:o.adi,tur:o.tur}));i.sort((s,o)=>s.adi.localeCompare(o.adi,"tr")),e.innerHTML='<option value="">Seçiniz...</option>',i.forEach(s=>{const o=document.createElement("option");o.value=s.id,o.textContent=s.adi+(s.tur?" ("+s.tur+")":""),e.appendChild(o)}),e.disabled=!1}function N0(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak").value,n=document.getElementById("mapKapi");if(n.innerHTML='<option value="">Yükleniyor...</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!e||!Qe||!Qe[t]){n.innerHTML='<option value="">Önce Sokak Seçin</option>';return}const r=Qe[t].streets[e];if(!r||!r.doors||r.doors.length===0){n.innerHTML='<option value="">Bu sokakta kapı bulunamadı</option>';return}const i=[...r.doors];i.sort((s,o)=>{const l=parseInt(s.no)||0,a=parseInt(o.no)||0;return l-a}),n.innerHTML='<option value="">Seçiniz...</option>',i.forEach(s=>{const o=document.createElement("option");o.value=JSON.stringify({lat:s.lat,lon:s.lon,no:s.no}),o.textContent="No: "+s.no,n.appendChild(o)}),n.disabled=!1}function P0(){const t=document.getElementById("mapKapi").value;if(!t){alert("Lütfen geçerli bir kapı numarası seçin.");return}const e=JSON.parse(t);zo=e,document.getElementById("internalMapContainer").classList.remove("hidden"),document.getElementById("googleMapsBtn").classList.remove("hidden"),setTimeout(()=>{Dt?(Dt.invalidateSize(),Dt.setView([e.lat,e.lon],18)):(Dt=L.map("internalMap").setView([e.lat,e.lon],18),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(Dt)),ec&&Dt.removeLayer(ec),ec=L.marker([e.lat,e.lon]).addTo(Dt).bindPopup(`<b>Kapı No: ${e.no}</b>`).openPopup()},100)}function FT(){zo?window.open(`https://www.google.com/maps/search/?api=1&query=${zo.lat},${zo.lon}`,"_blank"):alert("Önce konum seçmelisiniz.")}async function R0(){if(Qe&&Object.keys(Qe).length>0)return!0;try{const t=document.getElementById("updateStatus");return t&&(t.innerText="Güvenli bağlantı kuruluyor...",t.style.display="block"),Qe=await kC(),console.log("🔓 Veri Erişim İzni Onaylandı."),t&&(t.style.display="none"),!0}catch(t){console.error("Erişim Hatası:",t),getDeviceId(),alert(`⛔ ERİŞİM ENGELLENDİ

Sebep: ${t.message}

Eğer giriş yapmadıysanız uygulamayı yeniden başlatıp giriş kodunu giriniz.`);const e=document.getElementById("updateStatus");return e&&(e.style.display="none"),!1}}const BT="modulepreload",UT=function(t,e){return new URL(t,e).href},Up={},zT=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=UT(c,r),c in Up)return;Up[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!r)for(let y=o.length-1;y>=0;y--){const v=o[y];if(v.href===c&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":BT,f||(p.as="script"),p.crossOrigin="",p.href=c,a&&p.setAttribute("nonce",a),document.head.appendChild(p),f)return new Promise((y,v)=>{p.addEventListener("load",y),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const HT=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,o)=>{n.platforms.set(s,o)},i=s=>{n.platforms.has(s)&&(n.currentPlatform=n.platforms.get(s))};return n.addPlatform=r,n.setPlatform=i,n},jT=t=>t.CapacitorPlatforms=HT(t),A0=jT(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});A0.addPlatform;A0.setPlatform;var mi;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(mi||(mi={}));class tc extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const VT=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},WT=t=>{var e,n,r,i,s;const o=t.CapacitorCustomPlatform||null,l=t.Capacitor||{},a=l.Plugins=l.Plugins||{},c=t.CapacitorPlatforms,f=()=>o!==null?o.name:VT(t),d=((e=c==null?void 0:c.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||f,u=()=>d()!=="web",p=((n=c==null?void 0:c.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||u,y=E=>{const w=x.get(E);return!!(w!=null&&w.platforms.has(d())||m(E))},v=((r=c==null?void 0:c.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||y,C=E=>{var w;return(w=l.PluginHeaders)===null||w===void 0?void 0:w.find(P=>P.name===E)},m=((i=c==null?void 0:c.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||C,h=E=>t.console.error(E),g=(E,w,P)=>Promise.reject(`${P} does not have an implementation of "${w}".`),x=new Map,_=(E,w={})=>{const P=x.get(E);if(P)return console.warn(`Capacitor plugin "${E}" already registered. Cannot register plugins twice.`),P.proxy;const A=d(),Q=m(E);let pe;const Pt=async()=>(!pe&&A in w?pe=typeof w[A]=="function"?pe=await w[A]():pe=w[A]:o!==null&&!pe&&"web"in w&&(pe=typeof w.web=="function"?pe=await w.web():pe=w.web),pe),je=(N,M)=>{var j,Ce;if(Q){const me=Q==null?void 0:Q.methods.find(xe=>M===xe.name);if(me)return me.rtype==="promise"?xe=>l.nativePromise(E,M.toString(),xe):(xe,Ve)=>l.nativeCallback(E,M.toString(),xe,Ve);if(N)return(j=N[M])===null||j===void 0?void 0:j.bind(N)}else{if(N)return(Ce=N[M])===null||Ce===void 0?void 0:Ce.bind(N);throw new tc(`"${E}" plugin is not implemented on ${A}`,mi.Unimplemented)}},Qn=N=>{let M;const j=(...Ce)=>{const me=Pt().then(xe=>{const Ve=je(xe,N);if(Ve){const pt=Ve(...Ce);return M=pt==null?void 0:pt.remove,pt}else throw new tc(`"${E}.${N}()" is not implemented on ${A}`,mi.Unimplemented)});return N==="addListener"&&(me.remove=async()=>M()),me};return j.toString=()=>`${N.toString()}() { [capacitor code] }`,Object.defineProperty(j,"name",{value:N,writable:!1,configurable:!1}),j},dn=Qn("addListener"),fn=Qn("removeListener"),I=(N,M)=>{const j=dn({eventName:N},M),Ce=async()=>{const xe=await j;fn({eventName:N,callbackId:xe},M)},me=new Promise(xe=>j.then(()=>xe({remove:Ce})));return me.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Ce()},me},D=new Proxy({},{get(N,M){switch(M){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return Q?I:dn;case"removeListener":return fn;default:return Qn(M)}}});return a[E]=D,x.set(E,{name:E,proxy:D,platforms:new Set([...Object.keys(w),...Q?[A]:[]])}),D},k=((s=c==null?void 0:c.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||_;return l.convertFileSrc||(l.convertFileSrc=E=>E),l.getPlatform=d,l.handleError=h,l.isNativePlatform=p,l.isPluginAvailable=v,l.pluginMethodNoop=g,l.registerPlugin=k,l.Exception=tc,l.DEBUG=!!l.DEBUG,l.isLoggingEnabled=!!l.isLoggingEnabled,l.platform=l.getPlatform(),l.isNative=l.isNativePlatform(),l},$T=t=>t.Capacitor=WT(t),Ol=$T(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),_f=Ol.registerPlugin;Ol.Plugins;class D0{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new Ol.Exception(e,mi.Unimplemented)}unavailable(e="not available"){return new Ol.Exception(e,mi.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const zp=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Hp=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class KT extends D0{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Hp(i).trim(),s=Hp(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=zp(e.key),r=zp(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}_f("CapacitorCookies",{web:()=>new KT});const GT=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),YT=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},qT=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,a;return Array.isArray(o)?(a="",o.forEach(c=>{l=e?encodeURIComponent(c):c,a+=`${s}=${l}&`}),a.slice(0,-1)):(l=e?encodeURIComponent(o):o,a=`${s}=${l}`),`${r}&${a}`},"").substr(1):null,QT=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=YT(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,a)=>{s.append(a,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class JT extends D0{async request(e){const n=QT(e,e.webFetchExtra),r=qT(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let a,c;switch(l){case"arraybuffer":case"blob":c=await s.blob(),a=await GT(c);break;case"json":a=await s.json();break;case"document":case"text":default:a=await s.text()}const f={};return s.headers.forEach((d,u)=>{f[u]=d}),{data:a,headers:f,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}_f("CapacitorHttp",{web:()=>new JT});const XT="__capgo_keep_url_path_after_reload",nc="__capgo_history_stack__",jp=100,ZT=typeof window<"u"&&typeof document<"u"&&typeof history<"u";if(ZT){const t=window;if(!t.__capgoHistoryPatched){t.__capgoHistoryPatched=!0;const e=()=>{try{if(t.__capgoKeepUrlPathAfterReload)return!0}catch{}try{return window.localStorage.getItem(XT)==="1"}catch{return!1}},n=()=>{try{const _=window.sessionStorage.getItem(nc);if(!_)return{stack:[],index:-1};const k=JSON.parse(_);return!k||!Array.isArray(k.stack)||typeof k.index!="number"?{stack:[],index:-1}:k}catch{return{stack:[],index:-1}}},r=(_,k)=>{try{window.sessionStorage.setItem(nc,JSON.stringify({stack:_,index:k}))}catch{}},i=()=>{try{window.sessionStorage.removeItem(nc)}catch{}},s=_=>{try{const k=_??window.location.href,E=new URL(k instanceof URL?k.toString():k,window.location.href);return`${E.pathname}${E.search}${E.hash}`}catch{return null}},o=(_,k)=>{if(_.length<=jp)return{stack:_,index:k};const E=_.length-jp,w=_.slice(E),P=Math.max(0,k-E);return{stack:w,index:P}},l=_=>{document.readyState==="complete"||document.readyState==="interactive"?_():window.addEventListener("DOMContentLoaded",_,{once:!0})};let a=!1,c=!1,f=!1;const d=()=>{if(!a)return;const _=n(),k=s();if(k){if(_.stack.length===0){_.stack.push(k),_.index=0,r(_.stack,_.index);return}(_.index<0||_.index>=_.stack.length)&&(_.index=_.stack.length-1),_.stack[_.index]!==k&&(_.stack[_.index]=k,r(_.stack,_.index))}},u=(_,k)=>{if(!a||c)return;const E=s(_);if(!E)return;let{stack:w,index:P}=n();w.length===0?(w.push(E),P=w.length-1):k?((P<0||P>=w.length)&&(P=w.length-1),w[P]=E):P>=w.length-1?(w.push(E),P=w.length-1):(w=w.slice(0,P+1),w.push(E),P=w.length-1),{stack:w,index:P}=o(w,P),r(w,P)},p=()=>{if(!a||c)return;const _=n();if(_.stack.length===0){d();return}const k=_.index>=0&&_.index<_.stack.length?_.index:_.stack.length-1,E=s();if(_.stack.length===1&&E===_.stack[0])return;const w=_.stack[0];if(!w)return;c=!0;try{history.replaceState(history.state,document.title,w);for(let Q=1;Q<_.stack.length;Q+=1)history.pushState(history.state,document.title,_.stack[Q])}catch{c=!1;return}c=!1;const P=_.stack.length-1,A=k-P;A!==0?history.go(A):(history.replaceState(history.state,document.title,_.stack[k]),window.dispatchEvent(new PopStateEvent("popstate")))},y=()=>{!a||f||(f=!0,l(()=>{f=!1,p()}))};let v=null,C=null;const m=()=>{if(!a||c)return;const _=s();if(!_)return;const k=n(),E=k.stack.lastIndexOf(_);E>=0?k.index=E:(k.stack.push(_),k.index=k.stack.length-1);const w=o(k.stack,k.index);r(w.stack,w.index)},h=()=>{v&&C||(v=history.pushState,C=history.replaceState,history.pushState=function(k,E,w){const P=v==null?void 0:v.call(history,k,E,w);return u(w,!1),P},history.replaceState=function(k,E,w){const P=C==null?void 0:C.call(history,k,E,w);return u(w,!0),P},window.addEventListener("popstate",m))},g=()=>{v&&(history.pushState=v,v=null),C&&(history.replaceState=C,C=null),window.removeEventListener("popstate",m)},x=_=>{if(a===_){a&&(d(),y());return}a=_,a?(h(),d(),y()):(g(),i())};window.addEventListener("CapacitorUpdaterKeepUrlPathAfterReload",_=>{var k;const E=_,w=(k=E==null?void 0:E.detail)===null||k===void 0?void 0:k.enabled;typeof w=="boolean"?(t.__capgoKeepUrlPathAfterReload=w,x(w)):(t.__capgoKeepUrlPathAfterReload=!0,x(!0))}),x(e())}}var Vp;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.UPDATE_NOT_AVAILABLE=1]="UPDATE_NOT_AVAILABLE",t[t.UPDATE_AVAILABLE=2]="UPDATE_AVAILABLE",t[t.UPDATE_IN_PROGRESS=3]="UPDATE_IN_PROGRESS"})(Vp||(Vp={}));var Wp;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.PENDING=1]="PENDING",t[t.DOWNLOADING=2]="DOWNLOADING",t[t.INSTALLING=3]="INSTALLING",t[t.INSTALLED=4]="INSTALLED",t[t.FAILED=5]="FAILED",t[t.CANCELED=6]="CANCELED",t[t.DOWNLOADED=11]="DOWNLOADED"})(Wp||(Wp={}));var $p;(function(t){t[t.OK=0]="OK",t[t.CANCELED=1]="CANCELED",t[t.FAILED=2]="FAILED",t[t.NOT_AVAILABLE=3]="NOT_AVAILABLE",t[t.NOT_ALLOWED=4]="NOT_ALLOWED",t[t.INFO_MISSING=5]="INFO_MISSING"})($p||($p={}));const rc=_f("CapacitorUpdater",{web:()=>zT(()=>import("./web-BaMKysrS.js"),[],import.meta.url).then(t=>new t.CapacitorUpdaterWeb)});function eN(){return ku.useEffect(()=>{SC(),bC(),IC(),rc.notifyAppReady(),setTimeout(async()=>{try{const e="yal42d-debug",n="kurye_pro",r=`https://raw.githubusercontent.com/${e}/${n}/main/updates/version.json`,i=await fetch(r);if(!i.ok)return;const s=await i.json(),o=localStorage.getItem("app_version_code");if(s.version!==o){console.log("Yeni güncelleme bulundu:",s.version);const l=`https://github.com/${e}/${n}/raw/main/updates/dist.zip`,a=await rc.download({url:l,version:s.version});await rc.set(a),localStorage.setItem("app_version_code",s.version)}}catch(e){console.error("Update check failed",e)}},5e3)},[]),rm.jsx("div",{id:"app-root",dangerouslySetInnerHTML:{__html:dx}})}const tN=document.getElementById("root"),nN=sy(tN);nN.render(rm.jsx(eN,{}));export{Vp as A,D0 as W};
