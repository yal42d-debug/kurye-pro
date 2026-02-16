(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Km={exports:{}},ml={},qm={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),yw=Symbol.for("react.portal"),_w=Symbol.for("react.fragment"),ww=Symbol.for("react.strict_mode"),Ew=Symbol.for("react.profiler"),xw=Symbol.for("react.provider"),Iw=Symbol.for("react.context"),bw=Symbol.for("react.forward_ref"),kw=Symbol.for("react.suspense"),Sw=Symbol.for("react.memo"),Tw=Symbol.for("react.lazy"),Eh=Symbol.iterator;function Cw(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var Ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qm=Object.assign,Jm={};function Oi(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Ym}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xm(){}Xm.prototype=Oi.prototype;function ud(t,e,n){this.props=t,this.context=e,this.refs=Jm,this.updater=n||Ym}var dd=ud.prototype=new Xm;dd.constructor=ud;Qm(dd,Oi.prototype);dd.isPureReactComponent=!0;var xh=Array.isArray,Zm=Object.prototype.hasOwnProperty,fd={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zm.call(e,r)&&!eg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uo,type:t,key:s,ref:o,props:i,_owner:fd.current}}function Pw(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function Rw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ih=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rw(""+t.key):e.toString(36)}function na(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uo:case yw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tc(o,0):r,xh(i)?(n="",t!=null&&(n=t.replace(Ih,"$&/")+"/"),na(i,e,n,"",function(c){return c})):i!=null&&(hd(i)&&(i=Pw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ih,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+tc(s,a);o+=na(s,e,n,l,i)}else if(l=Cw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+tc(s,a++),o+=na(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Do(t,e,n){if(t==null)return t;var r=[],i=0;return na(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Nw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qe={current:null},ra={transition:null},Aw={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:ra,ReactCurrentOwner:fd};function ng(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Oi;U.Fragment=_w;U.Profiler=Ew;U.PureComponent=ud;U.StrictMode=ww;U.Suspense=kw;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw;U.act=ng;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zm.call(e,l)&&!eg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uo,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Iw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xw,_context:t},t.Consumer=t};U.createElement=tg;U.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:bw,render:t}};U.isValidElement=hd;U.lazy=function(t){return{$$typeof:Tw,_payload:{_status:-1,_result:t},_init:Nw}};U.memo=function(t,e){return{$$typeof:Sw,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=ra.transition;ra.transition={};try{t()}finally{ra.transition=e}};U.unstable_act=ng;U.useCallback=function(t,e){return qe.current.useCallback(t,e)};U.useContext=function(t){return qe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return qe.current.useDeferredValue(t)};U.useEffect=function(t,e){return qe.current.useEffect(t,e)};U.useId=function(){return qe.current.useId()};U.useImperativeHandle=function(t,e,n){return qe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return qe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return qe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return qe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return qe.current.useReducer(t,e,n)};U.useRef=function(t){return qe.current.useRef(t)};U.useState=function(t){return qe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return qe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return qe.current.useTransition()};U.version="18.3.1";qm.exports=U;var wa=qm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=wa,Ow=Symbol.for("react.element"),Lw=Symbol.for("react.fragment"),Mw=Object.prototype.hasOwnProperty,Fw=Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bw={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Mw.call(e,r)&&!Bw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ow,type:t,key:s,ref:o,props:i,_owner:Fw.current}}ml.Fragment=Lw;ml.jsx=rg;ml.jsxs=rg;Km.exports=ml;var kt=Km.exports,ig={exports:{}},ut={},sg={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(S,A){var P=S.length;S.push(A);e:for(;0<P;){var M=P-1>>>1,j=S[M];if(0<i(j,A))S[M]=A,S[P]=j,P=M;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var A=S[0],P=S.pop();if(P!==A){S[0]=P;e:for(var M=0,j=S.length,Oe=j>>>1;M<Oe;){var Ee=2*(M+1)-1,Ce=S[Ee],Je=Ee+1,It=S[Je];if(0>i(Ce,P))Je<j&&0>i(It,Ce)?(S[M]=It,S[Je]=P,M=Je):(S[M]=Ce,S[Ee]=P,M=Ee);else if(Je<j&&0>i(It,P))S[M]=It,S[Je]=P,M=Je;else break e}}return A}function i(S,A){var P=S.sortIndex-A.sortIndex;return P!==0?P:S.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(S){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=S)r(c),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(c)}}function _(S){if(y=!1,g(S),!v)if(n(l)!==null)v=!0,Tn(k);else{var A=n(c);A!==null&&Cn(_,A.startTime-S)}}function k(S,A){v=!1,y&&(y=!1,m(b),b=-1),p=!0;var P=f;try{for(g(A),d=n(l);d!==null&&(!(d.expirationTime>A)||S&&!fe());){var M=d.callback;if(typeof M=="function"){d.callback=null,f=d.priorityLevel;var j=M(d.expirationTime<=A);A=t.unstable_now(),typeof j=="function"?d.callback=j:d===n(l)&&r(l),g(A)}else r(l);d=n(l)}if(d!==null)var Oe=!0;else{var Ee=n(c);Ee!==null&&Cn(_,Ee.startTime-A),Oe=!1}return Oe}finally{d=null,f=P,p=!1}}var T=!1,I=null,b=-1,H=5,D=-1;function fe(){return!(t.unstable_now()-D<H)}function me(){if(I!==null){var S=t.unstable_now();D=S;var A=!0;try{A=I(!0,S)}finally{A?Ft():(T=!1,I=null)}}else T=!1}var Ft;if(typeof h=="function")Ft=function(){h(me)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,pr=Qe.port2;Qe.port1.onmessage=me,Ft=function(){pr.postMessage(null)}}else Ft=function(){R(me,0)};function Tn(S){I=S,T||(T=!0,Ft())}function Cn(S,A){b=R(function(){S(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Tn(k))},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(S){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var P=f;f=A;try{return S()}finally{f=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=f;f=S;try{return A()}finally{f=P}},t.unstable_scheduleCallback=function(S,A,P){var M=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?M+P:M):P=M,S){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=P+j,S={id:u++,callback:A,priorityLevel:S,startTime:P,expirationTime:j,sortIndex:-1},P>M?(S.sortIndex=P,e(c,S),n(l)===null&&S===n(c)&&(y?(m(b),b=-1):y=!0,Cn(_,P-M))):(S.sortIndex=j,e(l,S),v||p||(v=!0,Tn(k))),S},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(S){var A=f;return function(){var P=f;f=A;try{return S.apply(this,arguments)}finally{f=P}}}})(og);sg.exports=og;var Uw=sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vw=wa,ct=Uw;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,Ns={};function Mr(t,e){gi(t,e),gi(t+"Capture",e)}function gi(t,e){for(Ns[t]=e,t=0;t<e.length;t++)ag.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,Hw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bh={},kh={};function zw(t){return Kc.call(kh,t)?!0:Kc.call(bh,t)?!1:Hw.test(t)?kh[t]=!0:(bh[t]=!0,!1)}function jw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ww(t,e,n,r){if(e===null||typeof e>"u"||jw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var pd=/[\-:]([a-z])/g;function md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pd,md);Ae[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pd,md);Ae[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pd,md);Ae[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function gd(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ww(e,n,i,r)&&(n=null),r||i===null?zw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=Vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),yd=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),Qc=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),Sh=Symbol.iterator;function Ki(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,nc;function os(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var rc=!1;function ic(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?os(t):""}function $w(t){switch(t.tag){case 5:return os(t.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function Jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case Gr:return"Portal";case qc:return"Profiler";case vd:return"StrictMode";case Yc:return"Suspense";case Qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case lg:return(t._context.displayName||"Context")+".Provider";case yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:Jc(t.type)||"Memo";case Nn:e=t._payload,t=t._init;try{return Jc(t(e))}catch{}}return null}function Gw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jc(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kw(t){var e=dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Lo(t){t._valueTracker||(t._valueTracker=Kw(t))}function fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Th(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hg(t,e){e=e.checked,e!=null&&gd(t,"checked",e,!1)}function Zc(t,e){hg(t,e);var n=rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&eu(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ch(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eu(t,e,n){(e!=="number"||Ea(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var as=Array.isArray;function si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(as(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function pg(t,e){var n=rr(e.value),r=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mo,gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function As(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qw=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(t){qw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hs[e]=hs[t]})});function vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hs.hasOwnProperty(t)&&hs[t]?(""+e).trim():e+"px"}function yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Yw=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(t,e){if(e){if(Yw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var su=null;function wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ou=null,oi=null,ai=null;function Nh(t){if(t=po(t)){if(typeof ou!="function")throw Error(w(280));var e=t.stateNode;e&&(e=wl(e),ou(t.stateNode,t.type,e))}}function _g(t){oi?ai?ai.push(t):ai=[t]:oi=t}function wg(){if(oi){var t=oi,e=ai;if(ai=oi=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function Eg(t,e){return t(e)}function xg(){}var sc=!1;function Ig(t,e,n){if(sc)return t(e,n);sc=!0;try{return Eg(t,e,n)}finally{sc=!1,(oi!==null||ai!==null)&&(xg(),wg())}}function Ds(t,e){var n=t.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var au=!1;if(hn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){au=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{au=!1}function Qw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ps=!1,xa=null,Ia=!1,lu=null,Jw={onError:function(t){ps=!0,xa=t}};function Xw(t,e,n,r,i,s,o,a,l){ps=!1,xa=null,Qw.apply(Jw,arguments)}function Zw(t,e,n,r,i,s,o,a,l){if(Xw.apply(this,arguments),ps){if(ps){var c=xa;ps=!1,xa=null}else throw Error(w(198));Ia||(Ia=!0,lu=c)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(Fr(t)!==t)throw Error(w(188))}function eE(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ah(i),t;if(s===r)return Ah(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function kg(t){return t=eE(t),t!==null?Sg(t):null}function Sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sg(t);if(e!==null)return e;t=t.sibling}return null}var Tg=ct.unstable_scheduleCallback,Dh=ct.unstable_cancelCallback,tE=ct.unstable_shouldYield,nE=ct.unstable_requestPaint,ue=ct.unstable_now,rE=ct.unstable_getCurrentPriorityLevel,Ed=ct.unstable_ImmediatePriority,Cg=ct.unstable_UserBlockingPriority,ba=ct.unstable_NormalPriority,iE=ct.unstable_LowPriority,Pg=ct.unstable_IdlePriority,gl=null,Kt=null;function sE(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:lE,oE=Math.log,aE=Math.LN2;function lE(t){return t>>>=0,t===0?32:31-(oE(t)/aE|0)|0}var Fo=64,Bo=4194304;function ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ls(a):(s&=o,s!==0&&(r=ls(s)))}else o=n&~i,o!==0?r=ls(o):s!==0&&(r=ls(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Dt(e),i=1<<n,r|=t[n],e&=~i;return r}function cE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=cE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rg(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dt(e),t[e]=n}function dE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Dt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function Ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ag,Id,Dg,Og,Lg,uu=!1,Uo=[],Vn=null,Hn=null,zn=null,Os=new Map,Ls=new Map,Ln=[],fE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oh(t,e){switch(t){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Os.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ls.delete(e.pointerId)}}function Yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=po(e),e!==null&&Id(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hE(t,e,n,r,i){switch(e){case"focusin":return Vn=Yi(Vn,t,e,n,r,i),!0;case"dragenter":return Hn=Yi(Hn,t,e,n,r,i),!0;case"mouseover":return zn=Yi(zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Os.set(s,Yi(Os.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ls.set(s,Yi(Ls.get(s)||null,t,e,n,r,i)),!0}return!1}function Mg(t){var e=_r(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ia(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);su=r,n.target.dispatchEvent(r),su=null}else return e=po(n),e!==null&&Id(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){ia(t)&&n.delete(e)}function pE(){uu=!1,Vn!==null&&ia(Vn)&&(Vn=null),Hn!==null&&ia(Hn)&&(Hn=null),zn!==null&&ia(zn)&&(zn=null),Os.forEach(Lh),Ls.forEach(Lh)}function Qi(t,e){t.blockedOn===e&&(t.blockedOn=null,uu||(uu=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,pE)))}function Ms(t){function e(i){return Qi(i,t)}if(0<Uo.length){Qi(Uo[0],t);for(var n=1;n<Uo.length;n++){var r=Uo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vn!==null&&Qi(Vn,t),Hn!==null&&Qi(Hn,t),zn!==null&&Qi(zn,t),Os.forEach(e),Ls.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Mg(n),n.blockedOn===null&&Ln.shift()}var li=In.ReactCurrentBatchConfig,Sa=!0;function mE(t,e,n,r){var i=$,s=li.transition;li.transition=null;try{$=1,bd(t,e,n,r)}finally{$=i,li.transition=s}}function gE(t,e,n,r){var i=$,s=li.transition;li.transition=null;try{$=4,bd(t,e,n,r)}finally{$=i,li.transition=s}}function bd(t,e,n,r){if(Sa){var i=du(t,e,n,r);if(i===null)gc(t,e,r,Ta,n),Oh(t,r);else if(hE(i,t,e,n,r))r.stopPropagation();else if(Oh(t,r),e&4&&-1<fE.indexOf(t)){for(;i!==null;){var s=po(i);if(s!==null&&Ag(s),s=du(t,e,n,r),s===null&&gc(t,e,r,Ta,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gc(t,e,r,null,n)}}var Ta=null;function du(t,e,n,r){if(Ta=null,t=wd(r),t=_r(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ta=t,null}function Fg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rE()){case Ed:return 1;case Cg:return 4;case ba:case iE:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var Fn=null,kd=null,sa=null;function Bg(){if(sa)return sa;var t,e=kd,n=e.length,r,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return sa=i.slice(t,1<r?1-r:void 0)}function oa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function Mh(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:Mh,this.isPropagationStopped=Mh,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=dt(Li),ho=se({},Li,{view:0,detail:0}),vE=dt(ho),ac,lc,Ji,vl=se({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(ac=t.screenX-Ji.screenX,lc=t.screenY-Ji.screenY):lc=ac=0,Ji=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Fh=dt(vl),yE=se({},vl,{dataTransfer:0}),_E=dt(yE),wE=se({},ho,{relatedTarget:0}),cc=dt(wE),EE=se({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),xE=dt(EE),IE=se({},Li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bE=dt(IE),kE=se({},Li,{data:0}),Bh=dt(kE),SE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=CE[t])?!!e[t]:!1}function Td(){return PE}var RE=se({},ho,{key:function(t){if(t.key){var e=SE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NE=dt(RE),AE=se({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=dt(AE),DE=se({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),OE=dt(DE),LE=se({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),ME=dt(LE),FE=se({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BE=dt(FE),UE=[9,13,27,32],Cd=hn&&"CompositionEvent"in window,ms=null;hn&&"documentMode"in document&&(ms=document.documentMode);var VE=hn&&"TextEvent"in window&&!ms,Ug=hn&&(!Cd||ms&&8<ms&&11>=ms),Vh=" ",Hh=!1;function Vg(t,e){switch(t){case"keyup":return UE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function HE(t,e){switch(t){case"compositionend":return Hg(e);case"keypress":return e.which!==32?null:(Hh=!0,Vh);case"textInput":return t=e.data,t===Vh&&Hh?null:t;default:return null}}function zE(t,e){if(qr)return t==="compositionend"||!Cd&&Vg(t,e)?(t=Bg(),sa=kd=Fn=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jE[t.type]:e==="textarea"}function zg(t,e,n,r){_g(r),e=Ca(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gs=null,Fs=null;function WE(t){Zg(t,0)}function yl(t){var e=Jr(t);if(fg(e))return t}function $E(t,e){if(t==="change")return e}var jg=!1;if(hn){var uc;if(hn){var dc="oninput"in document;if(!dc){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),dc=typeof jh.oninput=="function"}uc=dc}else uc=!1;jg=uc&&(!document.documentMode||9<document.documentMode)}function Wh(){gs&&(gs.detachEvent("onpropertychange",Wg),Fs=gs=null)}function Wg(t){if(t.propertyName==="value"&&yl(Fs)){var e=[];zg(e,Fs,t,wd(t)),Ig(WE,e)}}function GE(t,e,n){t==="focusin"?(Wh(),gs=e,Fs=n,gs.attachEvent("onpropertychange",Wg)):t==="focusout"&&Wh()}function KE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Fs)}function qE(t,e){if(t==="click")return yl(e)}function YE(t,e){if(t==="input"||t==="change")return yl(e)}function QE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mt=typeof Object.is=="function"?Object.is:QE;function Bs(t,e){if(Mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kc.call(e,i)||!Mt(t[i],e[i]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gh(t,e){var n=$h(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function $g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=Ea();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ea(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JE(t){var e=Gg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$g(n.ownerDocument.documentElement,n)){if(r!==null&&Pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gh(n,s);var o=Gh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XE=hn&&"documentMode"in document&&11>=document.documentMode,Yr=null,fu=null,vs=null,hu=!1;function Kh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Yr==null||Yr!==Ea(r)||(r=Yr,"selectionStart"in r&&Pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vs&&Bs(vs,r)||(vs=r,r=Ca(fu,"onSelect"),0<r.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yr)))}function Ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},fc={},Kg={};hn&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function _l(t){if(fc[t])return fc[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kg)return fc[t]=e[n];return t}var qg=_l("animationend"),Yg=_l("animationiteration"),Qg=_l("animationstart"),Jg=_l("transitionend"),Xg=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Xg.set(t,e),Mr(e,[t])}for(var hc=0;hc<qh.length;hc++){var pc=qh[hc],ZE=pc.toLowerCase(),ex=pc[0].toUpperCase()+pc.slice(1);lr(ZE,"on"+ex)}lr(qg,"onAnimationEnd");lr(Yg,"onAnimationIteration");lr(Qg,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Jg,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function Yh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Zw(r,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yh(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yh(i,a,c),s=l}}}if(Ia)throw t=lu,Ia=!1,lu=null,t}function J(t,e){var n=e[yu];n===void 0&&(n=e[yu]=new Set);var r=t+"__bubble";n.has(r)||(ev(e,t,2,!1),n.add(r))}function mc(t,e,n){var r=0;e&&(r|=4),ev(n,t,r,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Us(t){if(!t[zo]){t[zo]=!0,ag.forEach(function(n){n!=="selectionchange"&&(tx.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,mc("selectionchange",!1,e))}}function ev(t,e,n,r){switch(Fg(e)){case 1:var i=mE;break;case 4:i=gE;break;default:i=bd}n=i.bind(null,e,n,t),i=void 0,!au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ig(function(){var c=s,u=wd(n),d=[];e:{var f=Xg.get(t);if(f!==void 0){var p=Sd,v=t;switch(t){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":p=NE;break;case"focusin":v="focus",p=cc;break;case"focusout":v="blur",p=cc;break;case"beforeblur":case"afterblur":p=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_E;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=OE;break;case qg:case Yg:case Qg:p=xE;break;case Jg:p=ME;break;case"scroll":p=vE;break;case"wheel":p=BE;break;case"copy":case"cut":case"paste":p=bE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uh}var y=(e&4)!==0,R=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var h=c,g;h!==null;){g=h;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Ds(h,m),_!=null&&y.push(Vs(h,_,g)))),R)break;h=h.return}0<y.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==su&&(v=n.relatedTarget||n.fromElement)&&(_r(v)||v[pn]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?_r(v):null,v!==null&&(R=Fr(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Fh,_="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=Uh,_="onPointerLeave",m="onPointerEnter",h="pointer"),R=p==null?f:Jr(p),g=v==null?f:Jr(v),f=new y(_,h+"leave",p,n,u),f.target=R,f.relatedTarget=g,_=null,_r(u)===c&&(y=new y(m,h+"enter",v,n,u),y.target=g,y.relatedTarget=R,_=y),R=_,p&&v)t:{for(y=p,m=v,h=0,g=y;g;g=Wr(g))h++;for(g=0,_=m;_;_=Wr(_))g++;for(;0<h-g;)y=Wr(y),h--;for(;0<g-h;)m=Wr(m),g--;for(;h--;){if(y===m||m!==null&&y===m.alternate)break t;y=Wr(y),m=Wr(m)}y=null}else y=null;p!==null&&Qh(d,f,p,y,!1),v!==null&&R!==null&&Qh(d,R,v,y,!0)}}e:{if(f=c?Jr(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var k=$E;else if(zh(f))if(jg)k=YE;else{k=KE;var T=GE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=qE);if(k&&(k=k(t,c))){zg(d,k,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&eu(f,"number",f.value)}switch(T=c?Jr(c):window,t){case"focusin":(zh(T)||T.contentEditable==="true")&&(Yr=T,fu=c,vs=null);break;case"focusout":vs=fu=Yr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Kh(d,n,u);break;case"selectionchange":if(XE)break;case"keydown":case"keyup":Kh(d,n,u)}var I;if(Cd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else qr?Vg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Ug&&n.locale!=="ko"&&(qr||b!=="onCompositionStart"?b==="onCompositionEnd"&&qr&&(I=Bg()):(Fn=u,kd="value"in Fn?Fn.value:Fn.textContent,qr=!0)),T=Ca(c,b),0<T.length&&(b=new Bh(b,t,null,n,u),d.push({event:b,listeners:T}),I?b.data=I:(I=Hg(n),I!==null&&(b.data=I)))),(I=VE?HE(t,n):zE(t,n))&&(c=Ca(c,"onBeforeInput"),0<c.length&&(u=new Bh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=I))}Zg(d,e)})}function Vs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ca(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ds(t,n),s!=null&&r.unshift(Vs(t,s,i)),s=Ds(t,e),s!=null&&r.push(Vs(t,s,i))),t=t.return}return r}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Ds(n,s),l!=null&&o.unshift(Vs(n,l,a))):i||(l=Ds(n,s),l!=null&&o.push(Vs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nx=/\r\n?/g,rx=/\u0000|\uFFFD/g;function Jh(t){return(typeof t=="string"?t:""+t).replace(nx,`
`).replace(rx,"")}function jo(t,e,n){if(e=Jh(e),Jh(t)!==e&&n)throw Error(w(425))}function Pa(){}var pu=null,mu=null;function gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(ox)}:vu;function ox(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ms(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ms(e)}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Mi,Hs="__reactProps$"+Mi,pn="__reactContainer$"+Mi,yu="__reactEvents$"+Mi,ax="__reactListeners$"+Mi,lx="__reactHandles$"+Mi;function _r(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zh(t);t!==null;){if(n=t[Ht])return n;t=Zh(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[Ht]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function wl(t){return t[Hs]||null}var _u=[],Xr=-1;function cr(t){return{current:t}}function X(t){0>Xr||(t.current=_u[Xr],_u[Xr]=null,Xr--)}function Q(t,e){Xr++,_u[Xr]=t.current,t.current=e}var ir={},Ve=cr(ir),tt=cr(!1),Tr=ir;function vi(t,e){var n=t.type.contextTypes;if(!n)return ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function Ra(){X(tt),X(Ve)}function ep(t,e,n){if(Ve.current!==ir)throw Error(w(168));Q(Ve,e),Q(tt,n)}function tv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,Gw(t)||"Unknown",i));return se({},n,r)}function Na(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Tr=Ve.current,Q(Ve,t),Q(tt,tt.current),!0}function tp(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=tv(t,e,Tr),r.__reactInternalMemoizedMergedChildContext=t,X(tt),X(Ve),Q(Ve,t)):X(tt),Q(tt,n)}var Zt=null,El=!1,yc=!1;function nv(t){Zt===null?Zt=[t]:Zt.push(t)}function cx(t){El=!0,nv(t)}function ur(){if(!yc&&Zt!==null){yc=!0;var t=0,e=$;try{var n=Zt;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zt=null,El=!1}catch(i){throw Zt!==null&&(Zt=Zt.slice(t+1)),Tg(Ed,ur),i}finally{$=e,yc=!1}}return null}var Zr=[],ei=0,Aa=null,Da=0,ht=[],pt=0,Cr=null,rn=1,sn="";function mr(t,e){Zr[ei++]=Da,Zr[ei++]=Aa,Aa=t,Da=e}function rv(t,e,n){ht[pt++]=rn,ht[pt++]=sn,ht[pt++]=Cr,Cr=t;var r=rn;t=sn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var s=32-Dt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rn=1<<32-Dt(e)+i|n<<i|r,sn=s+t}else rn=1<<s|n<<i|r,sn=t}function Rd(t){t.return!==null&&(mr(t,1),rv(t,1,0))}function Nd(t){for(;t===Aa;)Aa=Zr[--ei],Zr[ei]=null,Da=Zr[--ei],Zr[ei]=null;for(;t===Cr;)Cr=ht[--pt],ht[pt]=null,sn=ht[--pt],ht[pt]=null,rn=ht[--pt],ht[pt]=null}var lt=null,at=null,te=!1,Pt=null;function iv(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,lt=t,at=jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,lt=t,at=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,lt=t,at=null,!0):!1;default:return!1}}function wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(te){var e=at;if(e){var n=e;if(!np(t,e)){if(wu(t))throw Error(w(418));e=jn(n.nextSibling);var r=lt;e&&np(t,e)?iv(r,n):(t.flags=t.flags&-4097|2,te=!1,lt=t)}}else{if(wu(t))throw Error(w(418));t.flags=t.flags&-4097|2,te=!1,lt=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;lt=t}function Wo(t){if(t!==lt)return!1;if(!te)return rp(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gu(t.type,t.memoizedProps)),e&&(e=at)){if(wu(t))throw sv(),Error(w(418));for(;e;)iv(t,e),e=jn(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){at=jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}at=null}}else at=lt?jn(t.stateNode.nextSibling):null;return!0}function sv(){for(var t=at;t;)t=jn(t.nextSibling)}function yi(){at=lt=null,te=!1}function Ad(t){Pt===null?Pt=[t]:Pt.push(t)}var ux=In.ReactCurrentBatchConfig;function Xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function $o(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ip(t){var e=t._init;return e(t._payload)}function ov(t){function e(m,h){if(t){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Kn(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,_){return h===null||h.tag!==6?(h=kc(g,m.mode,_),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,_){var k=g.type;return k===Kr?u(m,h,g.props.children,_,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nn&&ip(k)===h.type)?(_=i(h,g.props),_.ref=Xi(m,h,g),_.return=m,_):(_=ha(g.type,g.key,g.props,null,m.mode,_),_.ref=Xi(m,h,g),_.return=m,_)}function c(m,h,g,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Sc(g,m.mode,_),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function u(m,h,g,_,k){return h===null||h.tag!==7?(h=kr(g,m.mode,_,k),h.return=m,h):(h=i(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=kc(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Oo:return g=ha(h.type,h.key,h.props,null,m.mode,g),g.ref=Xi(m,null,h),g.return=m,g;case Gr:return h=Sc(h,m.mode,g),h.return=m,h;case Nn:var _=h._init;return d(m,_(h._payload),g)}if(as(h)||Ki(h))return h=kr(h,m.mode,g,null),h.return=m,h;$o(m,h)}return null}function f(m,h,g,_){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,h,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:return g.key===k?l(m,h,g,_):null;case Gr:return g.key===k?c(m,h,g,_):null;case Nn:return k=g._init,f(m,h,k(g._payload),_)}if(as(g)||Ki(g))return k!==null?null:u(m,h,g,_,null);$o(m,g)}return null}function p(m,h,g,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(h,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oo:return m=m.get(_.key===null?g:_.key)||null,l(h,m,_,k);case Gr:return m=m.get(_.key===null?g:_.key)||null,c(h,m,_,k);case Nn:var T=_._init;return p(m,h,g,T(_._payload),k)}if(as(_)||Ki(_))return m=m.get(g)||null,u(h,m,_,k,null);$o(h,_)}return null}function v(m,h,g,_){for(var k=null,T=null,I=h,b=h=0,H=null;I!==null&&b<g.length;b++){I.index>b?(H=I,I=null):H=I.sibling;var D=f(m,I,g[b],_);if(D===null){I===null&&(I=H);break}t&&I&&D.alternate===null&&e(m,I),h=s(D,h,b),T===null?k=D:T.sibling=D,T=D,I=H}if(b===g.length)return n(m,I),te&&mr(m,b),k;if(I===null){for(;b<g.length;b++)I=d(m,g[b],_),I!==null&&(h=s(I,h,b),T===null?k=I:T.sibling=I,T=I);return te&&mr(m,b),k}for(I=r(m,I);b<g.length;b++)H=p(I,m,b,g[b],_),H!==null&&(t&&H.alternate!==null&&I.delete(H.key===null?b:H.key),h=s(H,h,b),T===null?k=H:T.sibling=H,T=H);return t&&I.forEach(function(fe){return e(m,fe)}),te&&mr(m,b),k}function y(m,h,g,_){var k=Ki(g);if(typeof k!="function")throw Error(w(150));if(g=k.call(g),g==null)throw Error(w(151));for(var T=k=null,I=h,b=h=0,H=null,D=g.next();I!==null&&!D.done;b++,D=g.next()){I.index>b?(H=I,I=null):H=I.sibling;var fe=f(m,I,D.value,_);if(fe===null){I===null&&(I=H);break}t&&I&&fe.alternate===null&&e(m,I),h=s(fe,h,b),T===null?k=fe:T.sibling=fe,T=fe,I=H}if(D.done)return n(m,I),te&&mr(m,b),k;if(I===null){for(;!D.done;b++,D=g.next())D=d(m,D.value,_),D!==null&&(h=s(D,h,b),T===null?k=D:T.sibling=D,T=D);return te&&mr(m,b),k}for(I=r(m,I);!D.done;b++,D=g.next())D=p(I,m,b,D.value,_),D!==null&&(t&&D.alternate!==null&&I.delete(D.key===null?b:D.key),h=s(D,h,b),T===null?k=D:T.sibling=D,T=D);return t&&I.forEach(function(me){return e(m,me)}),te&&mr(m,b),k}function R(m,h,g,_){if(typeof g=="object"&&g!==null&&g.type===Kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:e:{for(var k=g.key,T=h;T!==null;){if(T.key===k){if(k=g.type,k===Kr){if(T.tag===7){n(m,T.sibling),h=i(T,g.props.children),h.return=m,m=h;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nn&&ip(k)===T.type){n(m,T.sibling),h=i(T,g.props),h.ref=Xi(m,T,g),h.return=m,m=h;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===Kr?(h=kr(g.props.children,m.mode,_,g.key),h.return=m,m=h):(_=ha(g.type,g.key,g.props,null,m.mode,_),_.ref=Xi(m,h,g),_.return=m,m=_)}return o(m);case Gr:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Sc(g,m.mode,_),h.return=m,m=h}return o(m);case Nn:return T=g._init,R(m,h,T(g._payload),_)}if(as(g))return v(m,h,g,_);if(Ki(g))return y(m,h,g,_);$o(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=kc(g,m.mode,_),h.return=m,m=h),o(m)):n(m,h)}return R}var _i=ov(!0),av=ov(!1),Oa=cr(null),La=null,ti=null,Dd=null;function Od(){Dd=ti=La=null}function Ld(t){var e=Oa.current;X(Oa),t._currentValue=e}function xu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ci(t,e){La=t,Dd=ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ze=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(Dd!==t)if(t={context:t,memoizedValue:e,next:null},ti===null){if(La===null)throw Error(w(308));ti=t,La.dependencies={lanes:0,firstContext:t}}else ti=ti.next=t;return e}var wr=null;function Md(t){wr===null?wr=[t]:wr.push(t)}function lv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Md(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var An=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Md(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function aa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xd(t,n)}}function sp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ma(t,e,n,r){var i=t.updateQueue;An=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=se({},d,f);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rr|=o,t.lanes=o,t.memoizedState=d}}function op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var mo={},qt=cr(mo),zs=cr(mo),js=cr(mo);function Er(t){if(t===mo)throw Error(w(174));return t}function Bd(t,e){switch(Q(js,e),Q(zs,t),Q(qt,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nu(e,t)}X(qt),Q(qt,e)}function wi(){X(qt),X(zs),X(js)}function uv(t){Er(js.current);var e=Er(qt.current),n=nu(e,t.type);e!==n&&(Q(zs,t),Q(qt,n))}function Ud(t){zs.current===t&&(X(qt),X(zs))}var ne=cr(0);function Fa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Vd(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var la=In.ReactCurrentDispatcher,wc=In.ReactCurrentBatchConfig,Pr=0,ie=null,ge=null,be=null,Ba=!1,ys=!1,Ws=0,dx=0;function Le(){throw Error(w(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mt(t[n],e[n]))return!1;return!0}function zd(t,e,n,r,i,s){if(Pr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,la.current=t===null||t.memoizedState===null?mx:gx,t=n(r,i),ys){s=0;do{if(ys=!1,Ws=0,25<=s)throw Error(w(301));s+=1,be=ge=null,e.updateQueue=null,la.current=vx,t=n(r,i)}while(ys)}if(la.current=Ua,e=ge!==null&&ge.next!==null,Pr=0,be=ge=ie=null,Ba=!1,e)throw Error(w(300));return t}function jd(){var t=Ws!==0;return Ws=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ie.memoizedState=be=t:be=be.next=t,be}function wt(){if(ge===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=be===null?ie.memoizedState:be.next;if(e!==null)be=e,ge=t;else{if(t===null)throw Error(w(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},be===null?ie.memoizedState=be=t:be=be.next=t}return be}function $s(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=wt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Pr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ie.lanes|=u,Rr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Mt(r,e.memoizedState)||(Ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,Rr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=wt(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mt(s,e.memoizedState)||(Ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dv(){}function fv(t,e){var n=ie,r=wt(),i=e(),s=!Mt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ze=!0),r=r.queue,Wd(mv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Gs(9,pv.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(w(349));Pr&30||hv(n,e,i)}return i}function hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pv(t,e,n,r){e.value=n,e.getSnapshot=r,gv(e)&&vv(t)}function mv(t,e,n){return n(function(){gv(e)&&vv(t)})}function gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mt(t,n)}catch{return!0}}function vv(t){var e=mn(t,1);e!==null&&Ot(e,t,1,-1)}function ap(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:t},e.queue=t,t=t.dispatch=px.bind(null,ie,t),[e.memoizedState,t]}function Gs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yv(){return wt().memoizedState}function ca(t,e,n,r){var i=Ut();ie.flags|=t,i.memoizedState=Gs(1|e,n,void 0,r===void 0?null:r)}function xl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Hd(r,o.deps)){i.memoizedState=Gs(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Gs(1|e,n,s,r)}function lp(t,e){return ca(8390656,8,t,e)}function Wd(t,e){return xl(2048,8,t,e)}function _v(t,e){return xl(4,2,t,e)}function wv(t,e){return xl(4,4,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,Ev.bind(null,e,t),n)}function $d(){}function Iv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function bv(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kv(t,e,n){return Pr&21?(Mt(n,e)||(n=Rg(),ie.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ze=!0),t.memoizedState=n)}function fx(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=wc.transition;wc.transition={};try{t(!1),e()}finally{$=n,wc.transition=r}}function Sv(){return wt().memoizedState}function hx(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tv(t))Cv(e,n);else if(n=lv(t,e,n,r),n!==null){var i=We();Ot(n,t,r,i),Pv(n,e,r)}}function px(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tv(t))Cv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,o)){var l=e.interleaved;l===null?(i.next=i,Md(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=lv(t,e,i,r),n!==null&&(i=We(),Ot(n,t,r,i),Pv(n,e,r))}}function Tv(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Cv(t,e){ys=Ba=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xd(t,n)}}var Ua={readContext:_t,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},mx={readContext:_t,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ca(4194308,4,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ca(4194308,4,t,e)},useInsertionEffect:function(t,e){return ca(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hx.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:ap,useDebugValue:$d,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=ap(!1),e=t[0];return t=fx.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Ut();if(te){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),Se===null)throw Error(w(349));Pr&30||hv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lp(mv.bind(null,r,s,t),[t]),r.flags|=2048,Gs(9,pv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=Se.identifierPrefix;if(te){var n=sn,r=rn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gx={readContext:_t,useCallback:Iv,useContext:_t,useEffect:Wd,useImperativeHandle:xv,useInsertionEffect:_v,useLayoutEffect:wv,useMemo:bv,useReducer:Ec,useRef:yv,useState:function(){return Ec($s)},useDebugValue:$d,useDeferredValue:function(t){var e=wt();return kv(e,ge.memoizedState,t)},useTransition:function(){var t=Ec($s)[0],e=wt().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:fv,useId:Sv,unstable_isNewReconciler:!1},vx={readContext:_t,useCallback:Iv,useContext:_t,useEffect:Wd,useImperativeHandle:xv,useInsertionEffect:_v,useLayoutEffect:wv,useMemo:bv,useReducer:xc,useRef:yv,useState:function(){return xc($s)},useDebugValue:$d,useDeferredValue:function(t){var e=wt();return ge===null?e.memoizedState=t:kv(e,ge.memoizedState,t)},useTransition:function(){var t=xc($s)[0],e=wt().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:fv,useId:Sv,unstable_isNewReconciler:!1};function St(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Iu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=Gn(t),s=un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Ot(e,t,i,r),aa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=Gn(t),s=un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wn(t,s,i),e!==null&&(Ot(e,t,i,r),aa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=Gn(t),i=un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wn(t,i,r),e!==null&&(Ot(e,t,r,n),aa(e,t,r))}};function cp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bs(n,r)||!Bs(i,s):!0}function Rv(t,e,n){var r=!1,i=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=nt(e)?Tr:Ve.current,r=e.contextTypes,s=(r=r!=null)?vi(t,i):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function up(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function bu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=nt(e)?Tr:Ve.current,i.context=vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Il.enqueueReplaceState(i,i.state,null),Ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ei(t,e){try{var n="",r=e;do n+=$w(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ha||(Ha=!0,Lu=r),ku(t,e)},n}function Av(t,e,n){n=un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ku(t,e),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ax.bind(null,t,e,n),e.then(t,t))}function fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=un(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var _x=In.ReactCurrentOwner,Ze=!1;function ze(t,e,n,r){e.child=t===null?av(e,null,n,r):_i(e,t.child,n,r)}function pp(t,e,n,r,i){n=n.render;var s=e.ref;return ci(e,i),r=zd(t,e,n,r,s,i),n=jd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(te&&n&&Rd(e),e.flags|=1,ze(t,e,r,i),e.child)}function mp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dv(t,e,s,r,i)):(t=ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bs,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Kn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bs(s,r)&&t.ref===e.ref)if(Ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ze=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Su(t,e,n,r,i)}function Ov(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(ri,ot),ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(ri,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(ri,ot),ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(ri,ot),ot|=r;return ze(t,e,i,n),e.child}function Lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Su(t,e,n,r,i){var s=nt(n)?Tr:Ve.current;return s=vi(e,s),ci(e,i),n=zd(t,e,n,r,s,i),r=jd(),t!==null&&!Ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(te&&r&&Rd(e),e.flags|=1,ze(t,e,n,i),e.child)}function gp(t,e,n,r,i){if(nt(n)){var s=!0;Na(e)}else s=!1;if(ci(e,i),e.stateNode===null)ua(t,e),Rv(e,n,r),bu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_t(c):(c=nt(n)?Tr:Ve.current,c=vi(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&up(e,o,r,c),An=!1;var f=e.memoizedState;o.state=f,Ma(e,r,o,i),l=e.memoizedState,a!==r||f!==l||tt.current||An?(typeof u=="function"&&(Iu(e,n,u,r),l=e.memoizedState),(a=An||cp(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:St(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=nt(n)?Tr:Ve.current,l=vi(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&up(e,o,r,l),An=!1,f=e.memoizedState,o.state=f,Ma(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||tt.current||An?(typeof p=="function"&&(Iu(e,n,p,r),v=e.memoizedState),(c=An||cp(e,n,c,r,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Tu(t,e,n,r,s,i)}function Tu(t,e,n,r,i,s){Lv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tp(e,n,!1),gn(t,e,s);r=e.stateNode,_x.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_i(e,t.child,null,s),e.child=_i(e,null,a,s)):ze(t,e,a,s),e.memoizedState=r.state,i&&tp(e,n,!0),e.child}function Mv(t){var e=t.stateNode;e.pendingContext?ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ep(t,e.context,!1),Bd(t,e.containerInfo)}function vp(t,e,n,r,i){return yi(),Ad(i),e.flags|=256,ze(t,e,n,r),e.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Pu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fv(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return Eu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,r,0,null),t=kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pu(n),e.memoizedState=Cu,t):Gd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kn(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Pu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Cu,r}return s=t.child,t=s.sibling,r=Kn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gd(t,e){return e=Sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,r){return r!==null&&Ad(r),_i(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ic(Error(w(422))),Go(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sl({mode:"visible",children:r.children},i,0,null),s=kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_i(e,t.child,null,o),e.child.memoizedState=Pu(o),e.memoizedState=Cu,s);if(!(e.mode&1))return Go(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=Ic(s,r,void 0),Go(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ze||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Ot(r,t,i,-1))}return Xd(),r=Ic(Error(w(421))),Go(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,at=jn(i.nextSibling),lt=e,te=!0,Pt=null,t!==null&&(ht[pt++]=rn,ht[pt++]=sn,ht[pt++]=Cr,rn=t.id,sn=t.overflow,Cr=e),e=Gd(e,r.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xu(t.return,e,n)}function bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ze(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ex(t,e,n){switch(e.tag){case 3:Mv(e),yi();break;case 5:uv(e);break;case 1:nt(e.type)&&Na(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Oa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?Fv(t,e,n):(Q(ne,ne.current&1),t=gn(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Ov(t,e,n)}return gn(t,e,n)}var Uv,Ru,Vv,Hv;Uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};Vv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Er(qt.current);var s=null;switch(n){case"input":i=Xc(t,i),r=Xc(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=tu(t,i),r=tu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pa)}ru(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ns.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zi(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xx(t,e,n){var r=e.pendingProps;switch(Nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return nt(e.type)&&Ra(),Me(e),null;case 3:return r=e.stateNode,wi(),X(tt),X(Ve),Vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pt!==null&&(Bu(Pt),Pt=null))),Ru(t,e),Me(e),null;case 5:Ud(e);var i=Er(js.current);if(n=e.type,t!==null&&e.stateNode!=null)Vv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Me(e),null}if(t=Er(qt.current),Wo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[Hs]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<cs.length;i++)J(cs[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Th(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Ph(r,s),J("invalid",r)}ru(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,a,t),i=["children",""+a]):Ns.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Lo(r),Ch(r,s,!0);break;case"textarea":Lo(r),Rh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[Hs]=r,Uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=iu(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<cs.length;i++)J(cs[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Th(t,r),i=Xc(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),J("invalid",t);break;case"textarea":Ph(t,r),i=tu(t,r),J("invalid",t);break;default:i=r}ru(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&As(t,l):typeof l=="number"&&As(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ns.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&gd(t,s,l,o))}switch(n){case"input":Lo(t),Ch(t,r,!1);break;case"textarea":Lo(t),Rh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?si(t,!!r.multiple,s,!1):r.defaultValue!=null&&si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Er(js.current),Er(qt.current),Wo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=lt,t!==null))switch(t.tag){case 3:jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return Me(e),null;case 13:if(X(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&at!==null&&e.mode&1&&!(e.flags&128))sv(),yi(),e.flags|=98560,s=!1;else if(s=Wo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ht]=e}else yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else Pt!==null&&(Bu(Pt),Pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?we===0&&(we=3):Xd())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return wi(),Ru(t,e),t===null&&Us(e.stateNode.containerInfo),Me(e),null;case 10:return Ld(e.type._context),Me(e),null;case 17:return nt(e.type)&&Ra(),Me(e),null;case 19:if(X(ne),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fa(t),o!==null){for(e.flags|=128,Zi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>xi&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Me(e),null}else 2*ue()-s.renderingStartTime>xi&&n!==1073741824&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return Jd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ot&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Ix(t,e){switch(Nd(e),e.tag){case 1:return nt(e.type)&&Ra(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return wi(),X(tt),X(Ve),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(X(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(ne),null;case 4:return wi(),null;case 10:return Ld(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var Ko=!1,Be=!1,bx=typeof WeakSet=="function"?WeakSet:Set,C=null;function ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function Nu(t,e,n){try{n()}catch(r){oe(t,e,r)}}var _p=!1;function kx(t,e){if(pu=Sa,t=Gg(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:t,selectionRange:n},Sa=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,R=v.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:St(e.type,y),R);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(_){oe(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return v=_p,_p=!1,v}function _s(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nu(e,n,s)}i=i.next}while(i!==r)}}function bl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zv(t){var e=t.alternate;e!==null&&(t.alternate=null,zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[Hs],delete e[yu],delete e[ax],delete e[lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pa));else if(r!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}function Ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var Pe=null,Tt=!1;function Pn(t,e,n){for(n=n.child;n!==null;)Wv(t,e,n),n=n.sibling}function Wv(t,e,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:Be||ni(n,e);case 6:var r=Pe,i=Tt;Pe=null,Pn(t,e,n),Pe=r,Tt=i,Pe!==null&&(Tt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Tt?(t=Pe,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),Ms(t)):vc(Pe,n.stateNode));break;case 4:r=Pe,i=Tt,Pe=n.stateNode.containerInfo,Tt=!0,Pn(t,e,n),Pe=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nu(n,e,o),i=i.next}while(i!==r)}Pn(t,e,n);break;case 1:if(!Be&&(ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Pn(t,e,n),Be=r):Pn(t,e,n);break;default:Pn(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(r){var i=Ox.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,Tt=!1;break e;case 3:Pe=a.stateNode.containerInfo,Tt=!0;break e;case 4:Pe=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Pe===null)throw Error(w(160));Wv(s,o,i),Pe=null,Tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Bt(t),r&4){try{_s(3,t,t.return),bl(3,t)}catch(y){oe(t,t.return,y)}try{_s(5,t,t.return)}catch(y){oe(t,t.return,y)}}break;case 1:bt(e,t),Bt(t),r&512&&n!==null&&ni(n,n.return);break;case 5:if(bt(e,t),Bt(t),r&512&&n!==null&&ni(n,n.return),t.flags&32){var i=t.stateNode;try{As(i,"")}catch(y){oe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hg(i,s),iu(a,o);var c=iu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?yg(i,d):u==="dangerouslySetInnerHTML"?gg(i,d):u==="children"?As(i,d):gd(i,u,d,c)}switch(a){case"input":Zc(i,s);break;case"textarea":pg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?si(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?si(i,!!s.multiple,s.defaultValue,!0):si(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hs]=s}catch(y){oe(t,t.return,y)}}break;case 6:if(bt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){oe(t,t.return,y)}}break;case 3:if(bt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(e.containerInfo)}catch(y){oe(t,t.return,y)}break;case 4:bt(e,t),Bt(t);break;case 13:bt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yd=ue())),r&4&&Ep(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(c=Be)||u,bt(e,t),Be=c):bt(e,t),Bt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(C=t,u=t.child;u!==null;){for(d=C=u;C!==null;){switch(f=C,p=f.child,f.tag){case 0:case 11:case 14:case 15:_s(4,f,f.return);break;case 1:ni(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){oe(r,n,y)}}break;case 5:ni(f,f.return);break;case 22:if(f.memoizedState!==null){Ip(d);continue}}p!==null?(p.return=f,C=p):Ip(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vg("display",o))}catch(y){oe(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){oe(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bt(e,t),Bt(t),r&4&&Ep(t);break;case 21:break;default:bt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(As(i,""),r.flags&=-33);var s=wp(t);Ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wp(t);Du(t,a,o);break;default:throw Error(w(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sx(t,e,n){C=t,Gv(t)}function Gv(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ko;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Be;a=Ko;var c=Be;if(Ko=o,(Be=l)&&!c)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?bp(i):l!==null?(l.return=o,C=l):bp(i);for(;s!==null;)C=s,Gv(s),s=s.sibling;C=i,Ko=a,Be=c}xp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):xp(t)}}function xp(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||bl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:St(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&op(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}op(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ms(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Be||e.flags&512&&Au(e)}catch(f){oe(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Ip(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function bp(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bl(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{Au(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{Au(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var Tx=Math.ceil,Va=In.ReactCurrentDispatcher,Kd=In.ReactCurrentOwner,yt=In.ReactCurrentBatchConfig,z=0,Se=null,pe=null,Ne=0,ot=0,ri=cr(0),we=0,Ks=null,Rr=0,kl=0,qd=0,ws=null,Xe=null,Yd=0,xi=1/0,Xt=null,Ha=!1,Lu=null,$n=null,qo=!1,Bn=null,za=0,Es=0,Mu=null,da=-1,fa=0;function We(){return z&6?ue():da!==-1?da:da=ue()}function Gn(t){return t.mode&1?z&2&&Ne!==0?Ne&-Ne:ux.transition!==null?(fa===0&&(fa=Rg()),fa):(t=$,t!==0||(t=window.event,t=t===void 0?16:Fg(t.type)),t):1}function Ot(t,e,n,r){if(50<Es)throw Es=0,Mu=null,Error(w(185));fo(t,n,r),(!(z&2)||t!==Se)&&(t===Se&&(!(z&2)&&(kl|=n),we===4&&Mn(t,Ne)),rt(t,r),n===1&&z===0&&!(e.mode&1)&&(xi=ue()+500,El&&ur()))}function rt(t,e){var n=t.callbackNode;uE(t,e);var r=ka(t,t===Se?Ne:0);if(r===0)n!==null&&Dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dh(n),e===1)t.tag===0?cx(kp.bind(null,t)):nv(kp.bind(null,t)),sx(function(){!(z&6)&&ur()}),n=null;else{switch(Ng(r)){case 1:n=Ed;break;case 4:n=Cg;break;case 16:n=ba;break;case 536870912:n=Pg;break;default:n=ba}n=ey(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(da=-1,fa=0,z&6)throw Error(w(327));var n=t.callbackNode;if(ui()&&t.callbackNode!==n)return null;var r=ka(t,t===Se?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ja(t,r);else{e=r;var i=z;z|=2;var s=Yv();(Se!==t||Ne!==e)&&(Xt=null,xi=ue()+500,br(t,e));do try{Rx();break}catch(a){qv(t,a)}while(!0);Od(),Va.current=s,z=i,pe!==null?e=0:(Se=null,Ne=0,e=we)}if(e!==0){if(e===2&&(i=cu(t),i!==0&&(r=i,e=Fu(t,i))),e===1)throw n=Ks,br(t,0),Mn(t,r),rt(t,ue()),n;if(e===6)Mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Cx(i)&&(e=ja(t,r),e===2&&(s=cu(t),s!==0&&(r=s,e=Fu(t,s))),e===1))throw n=Ks,br(t,0),Mn(t,r),rt(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:gr(t,Xe,Xt);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=Yd+500-ue(),10<e)){if(ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vu(gr.bind(null,t,Xe,Xt),e);break}gr(t,Xe,Xt);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Dt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tx(r/1960))-r,10<r){t.timeoutHandle=vu(gr.bind(null,t,Xe,Xt),r);break}gr(t,Xe,Xt);break;case 5:gr(t,Xe,Xt);break;default:throw Error(w(329))}}}return rt(t,ue()),t.callbackNode===n?Kv.bind(null,t):null}function Fu(t,e){var n=ws;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=ja(t,e),t!==2&&(e=Xe,Xe=n,e!==null&&Bu(e)),t}function Bu(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function Cx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~qd,e&=~kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Dt(e),r=1<<n;t[n]=-1,e&=~r}}function kp(t){if(z&6)throw Error(w(327));ui();var e=ka(t,0);if(!(e&1))return rt(t,ue()),null;var n=ja(t,e);if(t.tag!==0&&n===2){var r=cu(t);r!==0&&(e=r,n=Fu(t,r))}if(n===1)throw n=Ks,br(t,0),Mn(t,e),rt(t,ue()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,Xe,Xt),rt(t,ue()),null}function Qd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(xi=ue()+500,El&&ur())}}function Nr(t){Bn!==null&&Bn.tag===0&&!(z&6)&&ui();var e=z;z|=1;var n=yt.transition,r=$;try{if(yt.transition=null,$=1,t)return t()}finally{$=r,yt.transition=n,z=e,!(z&6)&&ur()}}function Jd(){ot=ri.current,X(ri)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ix(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ra();break;case 3:wi(),X(tt),X(Ve),Vd();break;case 5:Ud(r);break;case 4:wi();break;case 13:X(ne);break;case 19:X(ne);break;case 10:Ld(r.type._context);break;case 22:case 23:Jd()}n=n.return}if(Se=t,pe=t=Kn(t.current,null),Ne=ot=e,we=0,Ks=null,qd=kl=Rr=0,Xe=ws=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wr=null}return t}function qv(t,e){do{var n=pe;try{if(Od(),la.current=Ua,Ba){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ba=!1}if(Pr=0,be=ge=ie=null,ys=!1,Ws=0,Kd.current=null,n===null||n.return===null){we=1,Ks=e,pe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=fp(o);if(p!==null){p.flags&=-257,hp(p,o,a,s,e),p.mode&1&&dp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){dp(s,c,e),Xd();break e}l=Error(w(426))}}else if(te&&a.mode&1){var R=fp(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),hp(R,o,a,s,e),Ad(Ei(l,a));break e}}s=l=Ei(l,a),we!==4&&(we=2),ws===null?ws=[s]:ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Nv(s,l,e);sp(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($n===null||!$n.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Av(s,a,e);sp(s,_);break e}}s=s.return}while(s!==null)}Jv(n)}catch(k){e=k,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Yv(){var t=Va.current;return Va.current=Ua,t===null?Ua:t}function Xd(){(we===0||we===3||we===2)&&(we=4),Se===null||!(Rr&268435455)&&!(kl&268435455)||Mn(Se,Ne)}function ja(t,e){var n=z;z|=2;var r=Yv();(Se!==t||Ne!==e)&&(Xt=null,br(t,e));do try{Px();break}catch(i){qv(t,i)}while(!0);if(Od(),z=n,Va.current=r,pe!==null)throw Error(w(261));return Se=null,Ne=0,we}function Px(){for(;pe!==null;)Qv(pe)}function Rx(){for(;pe!==null&&!tE();)Qv(pe)}function Qv(t){var e=Zv(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?Jv(t):pe=e,Kd.current=null}function Jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ix(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,pe=null;return}}else if(n=xx(n,e,ot),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);we===0&&(we=5)}function gr(t,e,n){var r=$,i=yt.transition;try{yt.transition=null,$=1,Nx(t,e,n,r)}finally{yt.transition=i,$=r}return null}function Nx(t,e,n,r){do ui();while(Bn!==null);if(z&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dE(t,s),t===Se&&(pe=Se=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,ey(ba,function(){return ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=$;$=1;var a=z;z|=4,Kd.current=null,kx(t,n),$v(n,t),JE(mu),Sa=!!pu,mu=pu=null,t.current=n,Sx(n),nE(),z=a,$=o,yt.transition=s}else t.current=n;if(qo&&(qo=!1,Bn=t,za=i),s=t.pendingLanes,s===0&&($n=null),sE(n.stateNode),rt(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ha)throw Ha=!1,t=Lu,Lu=null,t;return za&1&&t.tag!==0&&ui(),s=t.pendingLanes,s&1?t===Mu?Es++:(Es=0,Mu=t):Es=0,ur(),null}function ui(){if(Bn!==null){var t=Ng(za),e=yt.transition,n=$;try{if(yt.transition=null,$=16>t?16:t,Bn===null)var r=!1;else{if(t=Bn,Bn=null,za=0,z&6)throw Error(w(331));var i=z;for(z|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(C=c;C!==null;){var u=C;switch(u.tag){case 0:case 11:case 15:_s(8,u,s)}var d=u.child;if(d!==null)d.return=u,C=d;else for(;C!==null;){u=C;var f=u.sibling,p=u.return;if(zv(u),u===c){C=null;break}if(f!==null){f.return=p,C=f;break}C=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_s(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,C=m;break e}C=s.return}}var h=t.current;for(C=h;C!==null;){o=C;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,C=g;else e:for(o=h;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bl(9,a)}}catch(k){oe(a,a.return,k)}if(a===o){C=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,C=_;break e}C=a.return}}if(z=i,ur(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(gl,t)}catch{}r=!0}return r}finally{$=n,yt.transition=e}}return!1}function Sp(t,e,n){e=Ei(n,e),e=Nv(t,e,1),t=Wn(t,e,1),e=We(),t!==null&&(fo(t,1,e),rt(t,e))}function oe(t,e,n){if(t.tag===3)Sp(t,t,n);else for(;e!==null;){if(e.tag===3){Sp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=Ei(n,t),t=Av(e,t,1),e=Wn(e,t,1),t=We(),e!==null&&(fo(e,1,t),rt(e,t));break}}e=e.return}}function Ax(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ne&n)===n&&(we===4||we===3&&(Ne&130023424)===Ne&&500>ue()-Yd?br(t,0):qd|=n),rt(t,e)}function Xv(t,e){e===0&&(t.mode&1?(e=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):e=1);var n=We();t=mn(t,e),t!==null&&(fo(t,e,n),rt(t,n))}function Dx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xv(t,n)}function Ox(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Xv(t,n)}var Zv;Zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)Ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ze=!1,Ex(t,e,n);Ze=!!(t.flags&131072)}else Ze=!1,te&&e.flags&1048576&&rv(e,Da,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ua(t,e),t=e.pendingProps;var i=vi(e,Ve.current);ci(e,n),i=zd(null,e,r,t,i,n);var s=jd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,Na(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fd(e),i.updater=Il,e.stateNode=i,i._reactInternals=e,bu(e,r,t,n),e=Tu(null,e,r,!0,s,n)):(e.tag=0,te&&s&&Rd(e),ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mx(r),t=St(r,t),i){case 0:e=Su(null,e,r,t,n);break e;case 1:e=gp(null,e,r,t,n);break e;case 11:e=pp(null,e,r,t,n);break e;case 14:e=mp(null,e,r,St(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),Su(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),gp(t,e,r,i,n);case 3:e:{if(Mv(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cv(t,e),Ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ei(Error(w(423)),e),e=vp(t,e,r,n,i);break e}else if(r!==i){i=Ei(Error(w(424)),e),e=vp(t,e,r,n,i);break e}else for(at=jn(e.stateNode.containerInfo.firstChild),lt=e,te=!0,Pt=null,n=av(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){e=gn(t,e,n);break e}ze(t,e,r,n)}e=e.child}return e;case 5:return uv(e),t===null&&Eu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gu(r,i)?o=null:s!==null&&gu(r,s)&&(e.flags|=32),Lv(t,e),ze(t,e,o,n),e.child;case 6:return t===null&&Eu(e),null;case 13:return Fv(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_i(e,null,r,n):ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),pp(t,e,r,i,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Oa,r._currentValue),r._currentValue=o,s!==null)if(Mt(s.value,o)){if(s.children===i.children&&!tt.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=un(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ci(e,n),i=_t(i),r=r(i),e.flags|=1,ze(t,e,r,n),e.child;case 14:return r=e.type,i=St(r,e.pendingProps),i=St(r.type,i),mp(t,e,r,i,n);case 15:return Dv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:St(r,i),ua(t,e),e.tag=1,nt(r)?(t=!0,Na(e)):t=!1,ci(e,n),Rv(e,r,i),bu(e,r,i,n),Tu(null,e,r,!0,t,n);case 19:return Bv(t,e,n);case 22:return Ov(t,e,n)}throw Error(w(156,e.tag))};function ey(t,e){return Tg(t,e)}function Lx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new Lx(t,e,n,r)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mx(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yd)return 11;if(t===_d)return 14}return 2}function Kn(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Kr:return kr(n.children,i,s,e);case vd:o=8,i|=8;break;case qc:return t=mt(12,n,e,i|2),t.elementType=qc,t.lanes=s,t;case Yc:return t=mt(13,n,e,i),t.elementType=Yc,t.lanes=s,t;case Qc:return t=mt(19,n,e,i),t.elementType=Qc,t.lanes=s,t;case ug:return Sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lg:o=10;break e;case cg:o=9;break e;case yd:o=11;break e;case _d:o=14;break e;case Nn:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function kr(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function Sl(t,e,n,r){return t=mt(22,t,r,e),t.elementType=ug,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function Sc(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ef(t,e,n,r,i,s,o,a,l){return t=new Fx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function Bx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ty(t){if(!t)return ir;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(nt(n))return tv(t,n,e)}return e}function ny(t,e,n,r,i,s,o,a,l){return t=ef(n,r,!0,t,i,s,o,a,l),t.context=ty(null),n=t.current,r=We(),i=Gn(n),s=un(r,i),s.callback=e??null,Wn(n,s,i),t.current.lanes=i,fo(t,i,r),rt(t,r),t}function Tl(t,e,n,r){var i=e.current,s=We(),o=Gn(i);return n=ty(n),e.context===null?e.context=n:e.pendingContext=n,e=un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(i,e,o),t!==null&&(Ot(t,i,o,s),aa(t,i,o)),o}function Wa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tf(t,e){Tp(t,e),(t=t.alternate)&&Tp(t,e)}function Ux(){return null}var ry=typeof reportError=="function"?reportError:function(t){console.error(t)};function nf(t){this._internalRoot=t}Cl.prototype.render=nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Tl(t,e,null,null)};Cl.prototype.unmount=nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Tl(null,t,null,null)}),e[pn]=null}};function Cl(t){this._internalRoot=t}Cl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&Mg(t)}};function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function Vx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wa(o);s.call(c)}}var o=ny(e,r,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=o,t[pn]=o.current,Us(t.nodeType===8?t.parentNode:t),Nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Wa(l);a.call(c)}}var l=ef(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=l,t[pn]=l.current,Us(t.nodeType===8?t.parentNode:t),Nr(function(){Tl(e,l,n,r)}),l}function Rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Wa(o);a.call(l)}}Tl(e,o,t,i)}else o=Vx(n,e,t,i,r);return Wa(o)}Ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ls(e.pendingLanes);n!==0&&(xd(e,n|1),rt(e,ue()),!(z&6)&&(xi=ue()+500,ur()))}break;case 13:Nr(function(){var r=mn(t,1);if(r!==null){var i=We();Ot(r,t,1,i)}}),tf(t,1)}};Id=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=We();Ot(e,t,134217728,n)}tf(t,134217728)}};Dg=function(t){if(t.tag===13){var e=Gn(t),n=mn(t,e);if(n!==null){var r=We();Ot(n,t,e,r)}tf(t,e)}};Og=function(){return $};Lg=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};ou=function(t,e,n){switch(e){case"input":if(Zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wl(r);if(!i)throw Error(w(90));fg(r),Zc(r,i)}}}break;case"textarea":pg(t,n);break;case"select":e=n.value,e!=null&&si(t,!!n.multiple,e,!1)}};Eg=Qd;xg=Nr;var Hx={usingClientEntryPoint:!1,Events:[po,Jr,wl,_g,wg,Qd]},es={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kg(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||Ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{gl=Yo.inject(zx),Kt=Yo}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(e))throw Error(w(200));return Bx(t,e,null,n)};ut.createRoot=function(t,e){if(!rf(t))throw Error(w(299));var n=!1,r="",i=ry;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,Us(t.nodeType===8?t.parentNode:t),new nf(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=kg(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return Nr(t)};ut.hydrate=function(t,e,n){if(!Pl(e))throw Error(w(200));return Rl(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!rf(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ry;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ny(e,null,t,1,n??null,i,!1,s,o),t[pn]=e.current,Us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cl(e)};ut.render=function(t,e,n){if(!Pl(e))throw Error(w(200));return Rl(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(w(40));return t._reactRootContainer?(Nr(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};ut.unstable_batchedUpdates=Qd;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Rl(t,e,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(t){console.error(t)}}iy(),ig.exports=ut;var jx=ig.exports,sy,Pp=jx;sy=Pp.createRoot,Pp.hydrateRoot;const Wx=`<!-- LOGIN EKRANI (Açılışta Engelleme İçin) -->
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
</div>`,$x="modulepreload",Gx=function(t,e){return new URL(t,e).href},Rp={},qn=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Gx(c,r),c in Rp)return;Rp[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let v=o.length-1;v>=0;v--){const y=o[v];if(y.href===c&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":$x,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((v,y)=>{p.addEventListener("load",v),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function Uu(t,e,n){let r=0,i=0,s=0;for(let o=0;o<e.length;o++){const a=e[o];if(t>=a.min&&(r=a[n]),t<a.min&&s===0){s=a.min,i=a[n];break}}return{current:r,nextTarget:s,nextValue:i}}function Qo(t,e,n){let r=0;for(let i=0;i<e.length;i++){const s=e[i];t>=s.min&&(r=s[n])}return r}function oy(t){return!t||t===0?0:t<=3?5:t<=5?6:t<=7?7:8}var Np={};/**
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
 */const ay={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(t,e){if(!t)throw Fi(e)},Fi=function(t){return new Error("Firebase Database ("+ay.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ly=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ly(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new qx;const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cy=function(t){const e=ly(t);return sf.encodeByteArray(e,!0)},$a=function(t){return cy(t).replace(/\./g,"")},Ga=function(t){try{return sf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yx(t){return uy(void 0,t)}function uy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Qx(n)||(t[n]=uy(t[n],e[n]));return t}function Qx(t){return t!=="__proto__"}/**
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
 */function Jx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xx=()=>Jx().__FIREBASE_DEFAULTS__,Zx=()=>{if(typeof process>"u"||typeof Np>"u")return;const t=Np.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ga(t[1]);return e&&JSON.parse(e)},of=()=>{try{return Xx()||Zx()||eI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dy=t=>{var e,n;return(n=(e=of())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tI=t=>{const e=dy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fy=()=>{var t;return(t=of())===null||t===void 0?void 0:t.config},hy=t=>{var e;return(e=of())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function nI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$a(JSON.stringify(n)),$a(JSON.stringify(o)),""].join(".")}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function rI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sI(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oI(){return ay.NODE_ADMIN===!0}function aI(){try{return typeof indexedDB=="object"}catch{return!1}}function lI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const cI="FirebaseError";class dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cI,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dr(i,a,r)}}function uI(t,e){return t.replace(dI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dI=/\{\$([^}]+)}/g;/**
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
 */function qs(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
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
 */const my=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=qs(Ga(s[0])||""),n=qs(Ga(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},fI=function(t){const e=my(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},hI=function(t){const e=my(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ii(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ka(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ap(s)&&Ap(o)){if(!qa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ap(t){return t!==null&&typeof t=="object"}/**
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
 */function Br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ds(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class pI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mI(t,e){const n=new gI(t,e);return n.subscribe.bind(n)}class gI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tc),i.error===void 0&&(i.error=Tc),i.complete===void 0&&(i.complete=Tc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tc(){}function Nl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const yI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Al=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function O(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vr="[DEFAULT]";/**
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
 */class _I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new go;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(EI(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wI(t){return t===vr?void 0:t}function EI(t){return t.instantiationMode==="EAGER"}/**
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
 */class xI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const II={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},bI=G.INFO,kI={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},SI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lf{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=SI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?II[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const TI=(t,e)=>e.some(n=>t instanceof n);let Dp,Op;function CI(){return Dp||(Dp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PI(){return Op||(Op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gy=new WeakMap,Hu=new WeakMap,vy=new WeakMap,Cc=new WeakMap,cf=new WeakMap;function RI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gy.set(n,t)}).catch(()=>{}),cf.set(e,t),e}function NI(t){if(Hu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hu.set(t,e)}let zu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AI(t){zu=t(zu)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return vy.set(r,e.sort?e.sort():[e]),Yn(r)}:PI().includes(t)?function(...e){return t.apply(Pc(this),e),Yn(gy.get(this))}:function(...e){return Yn(t.apply(Pc(this),e))}}function OI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&NI(t),TI(t,CI())?new Proxy(t,zu):t)}function Yn(t){if(t instanceof IDBRequest)return RI(t);if(Cc.has(t))return Cc.get(t);const e=OI(t);return e!==t&&(Cc.set(t,e),cf.set(e,t)),e}const Pc=t=>cf.get(t);function LI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const MI=["get","getKey","getAll","getAllKeys","count"],FI=["put","add","delete","clear"],Rc=new Map;function Lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rc.get(e))return Rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=FI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Rc.set(e,s),s}AI(t=>({...t,get:(e,n,r)=>Lp(e,n)||t.get(e,n,r),has:(e,n)=>!!Lp(e,n)||t.has(e,n)}));/**
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
 */class BI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ju="@firebase/app",Mp="0.10.15";/**
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
 */const vn=new lf("@firebase/app"),VI="@firebase/app-compat",HI="@firebase/analytics-compat",zI="@firebase/analytics",jI="@firebase/app-check-compat",WI="@firebase/app-check",$I="@firebase/auth",GI="@firebase/auth-compat",KI="@firebase/database",qI="@firebase/data-connect",YI="@firebase/database-compat",QI="@firebase/functions",JI="@firebase/functions-compat",XI="@firebase/installations",ZI="@firebase/installations-compat",eb="@firebase/messaging",tb="@firebase/messaging-compat",nb="@firebase/performance",rb="@firebase/performance-compat",ib="@firebase/remote-config",sb="@firebase/remote-config-compat",ob="@firebase/storage",ab="@firebase/storage-compat",lb="@firebase/firestore",cb="@firebase/vertexai",ub="@firebase/firestore-compat",db="firebase",fb="11.0.1";/**
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
 */const Wu="[DEFAULT]",hb={[ju]:"fire-core",[VI]:"fire-core-compat",[zI]:"fire-analytics",[HI]:"fire-analytics-compat",[WI]:"fire-app-check",[jI]:"fire-app-check-compat",[$I]:"fire-auth",[GI]:"fire-auth-compat",[KI]:"fire-rtdb",[qI]:"fire-data-connect",[YI]:"fire-rtdb-compat",[QI]:"fire-fn",[JI]:"fire-fn-compat",[XI]:"fire-iid",[ZI]:"fire-iid-compat",[eb]:"fire-fcm",[tb]:"fire-fcm-compat",[nb]:"fire-perf",[rb]:"fire-perf-compat",[ib]:"fire-rc",[sb]:"fire-rc-compat",[ob]:"fire-gcs",[ab]:"fire-gcs-compat",[lb]:"fire-fst",[ub]:"fire-fst-compat",[cb]:"fire-vertex","fire-js":"fire-js",[db]:"fire-js-all"};/**
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
 */const Ya=new Map,pb=new Map,$u=new Map;function Fp(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if($u.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;$u.set(e,t);for(const n of Ya.values())Fp(n,t);for(const n of pb.values())Fp(n,t);return!0}function uf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function de(t){return t.settings!==void 0}/**
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
 */const mb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new vo("app","Firebase",mb);/**
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
 */class gb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Bi=fb;function yy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=fy()),!n)throw Qn.create("no-options");const s=Ya.get(i);if(s){if(qa(n,s.options)&&qa(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new xI(i);for(const l of $u.values())o.addComponent(l);const a=new gb(n,r,o);return Ya.set(i,a),a}function _y(t=Wu){const e=Ya.get(t);if(!e&&t===Wu&&fy())return yy();if(!e)throw Qn.create("no-app",{appName:t});return e}function Jn(t,e,n){var r;let i=(r=hb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(a.join(" "));return}bi(new Ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vb="firebase-heartbeat-database",yb=1,Ys="firebase-heartbeat-store";let Nc=null;function wy(){return Nc||(Nc=LI(vb,yb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ys)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function _b(t){try{const n=(await wy()).transaction(Ys),r=await n.objectStore(Ys).get(Ey(t));return await n.done,r}catch(e){if(e instanceof dr)vn.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function Bp(t,e){try{const r=(await wy()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,Ey(t)),await r.done}catch(n){if(n instanceof dr)vn.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(r.message)}}}function Ey(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wb=1024,Eb=30*24*60*60*1e3;class xb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Up();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Eb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Up(),{heartbeatsToSend:r,unsentEntries:i}=Ib(this._heartbeatsCache.heartbeats),s=$a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return vn.warn(n),""}}}function Up(){return new Date().toISOString().substring(0,10)}function Ib(t,e=wb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?lI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _b(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vp(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kb(t){bi(new Ar("platform-logger",e=>new BI(e),"PRIVATE")),bi(new Ar("heartbeat",e=>new xb(e),"PRIVATE")),Jn(ju,Mp,t),Jn(ju,Mp,"esm2017"),Jn("fire-js","")}kb("");var Sb="firebase",Tb="11.0.1";/**
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
 */Jn(Sb,Tb,"app");function df(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
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
 */const Cb={PHONE:"phone",TOTP:"totp"},Pb={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Rb={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},Nb={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},Ab={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Db(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function xy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ob=Db,Iy=xy,by=new vo("auth","Firebase",xy()),Lb={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
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
 */const Qa=new lf("@firebase/auth");function Mb(t,...e){Qa.logLevel<=G.WARN&&Qa.warn(`Auth (${Bi}): ${t}`,...e)}function pa(t,...e){Qa.logLevel<=G.ERROR&&Qa.error(`Auth (${Bi}): ${t}`,...e)}/**
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
 */function st(t,...e){throw hf(t,...e)}function $e(t,...e){return hf(t,...e)}function ff(t,e,n){const r=Object.assign(Object.assign({},Iy()),{[e]:n});return new vo("auth","Firebase",r).create(e,{appName:t.name})}function Te(t){return ff(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ui(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),ff(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return by.create(t,...e)}function E(t,e,...n){if(!t)throw hf(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function yn(t,e){t||$t(e)}/**
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
 */function Qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pf(){return Hp()==="http:"||Hp()==="https:"}function Hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pf()||iI()||"connection"in navigator)?navigator.onLine:!0}function Bb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=af()||py()}get(){return Fb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mf(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ky{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ub={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vb=new yo(3e4,6e4);function Z(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ee(t,e,n,r,i={}){return Sy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Br(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return rI()||(c.referrerPolicy="no-referrer"),ky.fetch()(Ty(t,t.config.apiHost,n,a),c)})}async function Sy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ub),e);try{const i=new zb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fs(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ff(t,u,c);st(t,u)}}catch(i){if(i instanceof dr)throw i;st(t,"network-request-failed",{message:String(i)})}}async function bn(t,e,n,r,i={}){const s=await ee(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ty(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mf(t.config,i):`${t.config.apiScheme}://${i}`}function Hb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),Vb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$e(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function zp(t){return t!==void 0&&t.getResponse!==void 0}function jp(t){return t!==void 0&&t.enterprise!==void 0}class Cy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function jb(t){return(await ee(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Py(t,e){return ee(t,"GET","/v2/recaptchaConfig",Z(t,e))}/**
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
 */async function Wb(t,e){return ee(t,"POST","/v1/accounts:delete",e)}async function $b(t,e){return ee(t,"POST","/v1/accounts:update",e)}async function Ry(t,e){return ee(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function Gb(t,e=!1){return O(t).getIdToken(e)}async function Ny(t,e=!1){const n=O(t),r=await n.getIdToken(e),i=Dl(r);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xs(Ac(i.auth_time)),issuedAtTime:xs(Ac(i.iat)),expirationTime:xs(Ac(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function Dl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ga(n);return i?JSON.parse(i):(pa("Failed to decode base64 JWT payload"),null)}catch(i){return pa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wp(t){const e=Dl(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dr&&Kb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Js(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _n(t,Ry(n,{idToken:r}));E(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dy(s.providerUserInfo):[],a=Yb(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Ay(t){const e=O(t);await Js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dy(t){return t.map(e=>{var{providerId:n}=e,r=df(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qb(t,e){const n=await Sy(t,{},async()=>{const r=Br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ty(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ky.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jb(t,e){return ee(t,"POST","/v2/accounts:revokeToken",Z(t,e))}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){E(e.length!==0,"internal-error");const n=Wp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Qb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new di;return r&&(E(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function Rn(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ny(this,e)}reload(){return Ay(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(de(this.auth.app))return Promise.reject(Te(this.auth));const e=await this.getIdToken();return await _n(this,Wb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,h=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:_,isAnonymous:k,providerData:T,stsTokenManager:I}=n;E(g&&I,e,"internal-error");const b=di.fromJSON(this.name,I);E(typeof g=="string",e,"internal-error"),Rn(d,e.name),Rn(f,e.name),E(typeof _=="boolean",e,"internal-error"),E(typeof k=="boolean",e,"internal-error"),Rn(p,e.name),Rn(v,e.name),Rn(y,e.name),Rn(R,e.name),Rn(m,e.name),Rn(h,e.name);const H=new on({uid:g,auth:e,email:f,emailVerified:_,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:p,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:h});return T&&Array.isArray(T)&&(H.providerData=T.map(D=>Object.assign({},D))),R&&(H._redirectEventId=R),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new di;i.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Js(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];E(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Dy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new di;a.updateFromIdToken(r);const l=new on({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Gu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const $p=new Map;function an(t){yn(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
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
 */class Oy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Oy.type="NONE";const Ku=Oy;/**
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
 */function ma(t,e,n){return`firebase:${t}:${e}:${n}`}class fi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ma(this.userKey,i.apiKey,s),this.fullPersistenceKey=ma("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fi(an(Ku),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||an(Ku);const o=ma(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=on._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fi(s,e,r))}}/**
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
 */function Gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(By(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ly(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vy(e))return"Blackberry";if(Hy(e))return"Webos";if(My(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if(Uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ly(t=Ke()){return/firefox\//i.test(t)}function My(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(t=Ke()){return/crios\//i.test(t)}function By(t=Ke()){return/iemobile/i.test(t)}function Uy(t=Ke()){return/android/i.test(t)}function Vy(t=Ke()){return/blackberry/i.test(t)}function Hy(t=Ke()){return/webos/i.test(t)}function gf(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xb(t=Ke()){var e;return gf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zb(){return sI()&&document.documentMode===10}function zy(t=Ke()){return gf(t)||Uy(t)||Hy(t)||Vy(t)||/windows phone/i.test(t)||By(t)}/**
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
 */function jy(t,e=[]){let n;switch(t){case"Browser":n=Gp(Ke());break;case"Worker":n=`${Gp(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bi}/${r}`}/**
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
 */class ek{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tk(t,e={}){return ee(t,"GET","/v2/passwordPolicy",Z(t,e))}/**
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
 */const nk=6;class rk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ik{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kp(this),this.idTokenSubscription=new Kp(this),this.beforeStateQueue=new ek(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=by,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ry(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(de(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Js(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(de(this.app))return Promise.reject(Te(this));const n=e?O(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return de(this.app)?Promise.reject(Te(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return de(this.app)?Promise.reject(Te(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tk(this),n=new rk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await fi.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ce(t){return O(t)}class Kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=mI(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sk(t){_o=t}function vf(t){return _o.loadJS(t)}function ok(){return _o.recaptchaV2Script}function ak(){return _o.recaptchaEnterpriseScript}function lk(){return _o.gapiScript}function Wy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const ck=500,uk=6e4,Jo=1e12;class dk{constructor(e){this.auth=e,this.counter=Jo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new pk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Jo;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Jo;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Jo;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class fk{constructor(){this.enterprise=new hk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;E(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=mk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},uk)},ck))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mk(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const gk="recaptcha-enterprise",Is="NO_RECAPTCHA";class $y{constructor(e){this.type=gk,this.auth=ce(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Py(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Cy(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Is)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&jp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ak();l.length!==0&&(l+=a),vf(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ts(t,e,n,r=!1,i=!1){const s=new $y(t);let o;if(i)o=Is;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xn(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await ts(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ts(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await ts(t,e,n);return r(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await ts(t,e,n,!1,!0);return r(t,u)}return Promise.reject(l)})}else{const a=await ts(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function Gy(t){const e=ce(t),n=await Py(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Cy(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new $y(e).verify()}/**
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
 */function Ky(t,e){const n=uf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qa(s,e??{}))return i;st(i,"already-initialized")}return n.initialize({options:e})}function vk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qy(t,e,n){const r=ce(t);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Yy(e),{host:o,port:a}=yk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_k()}function Yy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yk(t){const e=Yy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qp(o)}}}function qp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _k(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
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
 */async function Qy(t,e){return ee(t,"POST","/v1/accounts:resetPassword",Z(t,e))}async function wk(t,e){return ee(t,"POST","/v1/accounts:update",e)}async function Ek(t,e){return ee(t,"POST","/v1/accounts:signUp",e)}async function xk(t,e){return ee(t,"POST","/v1/accounts:update",Z(t,e))}/**
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
 */async function Ik(t,e){return bn(t,"POST","/v1/accounts:signInWithPassword",Z(t,e))}async function Ol(t,e){return ee(t,"POST","/v1/accounts:sendOobCode",Z(t,e))}async function bk(t,e){return Ol(t,e)}async function kk(t,e){return Ol(t,e)}async function Sk(t,e){return Ol(t,e)}async function Tk(t,e){return Ol(t,e)}/**
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
 */async function Ck(t,e){return bn(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}async function Pk(t,e){return bn(t,"POST","/v1/accounts:signInWithEmailLink",Z(t,e))}/**
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
 */class ki extends Vi{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(e,n,"signInWithPassword",Ik,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ck(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xn(e,r,"signUpPassword",Ek,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Pk(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function dn(t,e){return bn(t,"POST","/v1/accounts:signInWithIdp",Z(t,e))}/**
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
 */const Rk="http://localhost";class Yt extends Vi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=df(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:Rk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Br(n)}return e}}/**
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
 */async function Yp(t,e){return ee(t,"POST","/v1/accounts:sendVerificationCode",Z(t,e))}async function Nk(t,e){return bn(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,e))}async function Ak(t,e){const n=await bn(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,e));if(n.temporaryProof)throw fs(t,"account-exists-with-different-credential",n);return n}const Dk={USER_NOT_FOUND:"user-not-found"};async function Ok(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return bn(t,"POST","/v1/accounts:signInWithPhoneNumber",Z(t,n),Dk)}/**
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
 */class Zn extends Vi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Zn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Zn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Nk(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Ak(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ok(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Zn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Lk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mk(t){const e=us(ds(t)).link,n=e?us(ds(e)).deep_link_id:null,r=us(ds(t)).deep_link_id;return(r?us(ds(r)).link:null)||r||n||e||t}class Hi{constructor(e){var n,r,i,s,o,a;const l=us(ds(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Lk((i=l.mode)!==null&&i!==void 0?i:null);E(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Mk(e);try{return new Hi(n)}catch{return null}}}function Fk(t){return Hi.parseLink(t)}/**
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
 */class fr{constructor(){this.providerId=fr.PROVIDER_ID}static credential(e,n){return ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hi.parseLink(n);return E(r,"argument-error"),ki._fromEmailAndCode(e,r.code,r.tenantId)}}fr.PROVIDER_ID="password";fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zi extends kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class bs extends zi{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return E("providerId"in n&&"signInMethod"in n,"argument-error"),Yt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),Yt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return bs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return bs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new bs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class en extends zi{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class zt extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
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
 */class tn extends zi{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */const Bk="http://localhost";class Xs extends Vi{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Xs(r,s)}static _create(e,n){return new Xs(e,n)}buildRequest(){return{requestUri:Bk,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Uk="saml.";class Ja extends kn{constructor(e){E(e.startsWith(Uk),"argument-error"),super(e)}static credentialFromResult(e){return Ja.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ja.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Xs.fromJSON(e);return E(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Xs._create(r,n)}catch{return null}}}/**
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
 */class nn extends zi{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */async function Jy(t,e){return bn(t,"POST","/v1/accounts:signUp",Z(t,e))}/**
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
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),o=Qp(r);return new Et({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qp(r);return new Et({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Vk(t){var e;if(de(t.app))return Promise.reject(Te(t));const n=ce(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Et({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Jy(n,{returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Xa extends dr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xa(e,n,r,i)}}function Xy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xa._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Zy(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Hk(t,e){const n=O(t);await Ll(!0,n,e);const{providerUserInfo:r}=await $b(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Zy(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function yf(t,e,n=!1){const r=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Et._forOperation(t,"link",r)}async function Ll(t,e,n){await Js(e);const r=Zy(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";E(r.has(n)===t,e.auth,i)}/**
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
 */async function e_(t,e,n=!1){const{auth:r}=t;if(de(r.app))return Promise.reject(Te(r));const i="reauthenticate";try{const s=await _n(t,Xy(r,i,e,t),n);E(s.idToken,r,"internal-error");const o=Dl(s.idToken);E(o,r,"internal-error");const{sub:a}=o;return E(t.uid===a,r,"user-mismatch"),Et._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
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
 */async function t_(t,e,n=!1){if(de(t.app))return Promise.reject(Te(t));const r="signIn",i=await Xy(t,r,e),s=await Et._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wo(t,e){return t_(ce(t),e)}async function n_(t,e){const n=O(t);return await Ll(!1,n,e.providerId),yf(n,e)}async function r_(t,e){return e_(O(t),e)}/**
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
 */async function zk(t,e){return bn(t,"POST","/v1/accounts:signInWithCustomToken",Z(t,e))}/**
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
 */async function jk(t,e){if(de(t.app))return Promise.reject(Te(t));const n=ce(t),r=await zk(n,{token:e,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Eo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?_f._fromServerResponse(e,n):"totpInfo"in n?wf._fromServerResponse(e,n):st(e,"internal-error")}}class _f extends Eo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new _f(n)}}class wf extends Eo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new wf(n)}}/**
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
 */function Ml(t,e,n){var r;E(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),E(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Ef(t){const e=ce(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Wk(t,e,n){const r=ce(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Ml(r,i,n),await Xn(r,i,"getOobCode",kk,"EMAIL_PASSWORD_PROVIDER")}async function $k(t,e,n){await Qy(O(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ef(t),r})}async function Gk(t,e){await xk(O(t),{oobCode:e})}async function i_(t,e){const n=O(t),r=await Qy(n,{oobCode:e}),i=r.requestType;switch(E(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(r.mfaInfo,n,"internal-error");default:E(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Eo._fromServerResponse(ce(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Kk(t,e){const{data:n}=await i_(O(t),e);return n.email}async function qk(t,e,n){if(de(t.app))return Promise.reject(Te(t));const r=ce(t),o=await Xn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jy,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ef(t),l}),a=await Et._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Yk(t,e,n){return de(t.app)?Promise.reject(Te(t)):wo(O(t),fr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ef(t),r})}/**
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
 */async function Qk(t,e,n){const r=ce(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){E(a.handleCodeInApp,r,"argument-error"),a&&Ml(r,o,a)}s(i,n),await Xn(r,i,"getOobCode",Sk,"EMAIL_PASSWORD_PROVIDER")}function Jk(t,e){const n=Hi.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Xk(t,e,n){if(de(t.app))return Promise.reject(Te(t));const r=O(t),i=fr.credentialWithLink(e,n||Qs());return E(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),wo(r,i)}/**
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
 */async function Zk(t,e){return ee(t,"POST","/v1/accounts:createAuthUri",Z(t,e))}/**
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
 */async function eS(t,e){const n=pf()?Qs():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Zk(O(t),r);return i||[]}async function tS(t,e){const n=O(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ml(n.auth,i,e);const{email:s}=await bk(n.auth,i);s!==t.email&&await t.reload()}async function nS(t,e,n){const r=O(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Ml(r.auth,s,n);const{email:o}=await Tk(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function rS(t,e){return ee(t,"POST","/v1/accounts:update",e)}/**
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
 */async function iS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=O(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _n(r,rS(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sS(t,e){const n=O(t);return de(n.auth.app)?Promise.reject(Te(n.auth)):s_(n,e,null)}function oS(t,e){return s_(O(t),null,e)}async function s_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await _n(t,wk(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function aS(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Dl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new hi(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new lS(s,i);case"github.com":return new cS(s,i);case"google.com":return new uS(s,i);case"twitter.com":return new dS(s,i,t.screenName||null);case"custom":case"anonymous":return new hi(s,null);default:return new hi(s,r,i)}}class hi{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class o_ extends hi{constructor(e,n,r,i){super(e,n,r),this.username=i}}class lS extends hi{constructor(e,n){super(e,"facebook.com",n)}}class cS extends o_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class uS extends hi{constructor(e,n){super(e,"google.com",n)}}class dS extends o_{constructor(e,n,r){super(e,"twitter.com",n,r)}}function fS(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:aS(n)}/**
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
 */function hS(t,e){return O(t).setPersistence(e)}function pS(t){return Gy(t)}async function mS(t,e){return ce(t).validatePassword(e)}function a_(t,e,n,r){return O(t).onIdTokenChanged(e,n,r)}function l_(t,e,n){return O(t).beforeAuthStateChanged(e,n)}function gS(t,e,n,r){return O(t).onAuthStateChanged(e,n,r)}function vS(t){O(t).useDeviceLanguage()}function yS(t,e){return O(t).updateCurrentUser(e)}function c_(t){return O(t).signOut()}function _S(t,e){return ce(t).revokeAccessToken(e)}async function wS(t){return O(t).delete()}/**
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
 */class xr{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new xr("enroll",e,n)}static _fromMfaPendingCredential(e){return new xr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return xr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return xr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class xf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=ce(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Eo._fromServerResponse(r,a));E(i.mfaPendingCredential,r,"internal-error");const o=xr._fromMfaPendingCredential(i.mfaPendingCredential);return new xf(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const u=await Et._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return E(n.user,r,"internal-error"),Et._forOperation(n.user,n.operationType,c);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function ES(t,e){var n;const r=O(t),i=e;return E(e.customData.operationType,r,"argument-error"),E((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),xf._fromError(r,i)}/**
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
 */function Jp(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:start",Z(t,e))}function xS(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:finalize",Z(t,e))}function IS(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:start",Z(t,e))}function bS(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:finalize",Z(t,e))}function kS(t,e){return ee(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Z(t,e))}class If{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Eo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new If(e)}async getSession(){return xr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await _n(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await _n(this.user,kS(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Dc=new WeakMap;function SS(t){const e=O(t);return Dc.has(e)||Dc.set(e,If._fromUser(e)),Dc.get(e)}const Za="__sak";/**
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
 */class u_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Za,"1"),this.storage.removeItem(Za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TS=1e3,CS=10;class d_ extends u_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Zb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d_.type="LOCAL";const f_=d_;/**
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
 */class h_ extends u_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h_.type="SESSION";const bf=h_;/**
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
 */function PS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await PS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fl.receivers=[];/**
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
 */function Bl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Bl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function he(){return window}function NS(t){he().location.href=t}/**
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
 */function kf(){return typeof he().WorkerGlobalScope<"u"&&typeof he().importScripts=="function"}async function AS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OS(){return kf()?self:null}/**
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
 */const p_="firebaseLocalStorageDb",LS=1,el="firebaseLocalStorage",m_="fbase_key";class xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ul(t,e){return t.transaction([el],e?"readwrite":"readonly").objectStore(el)}function MS(){const t=indexedDB.deleteDatabase(p_);return new xo(t).toPromise()}function qu(){const t=indexedDB.open(p_,LS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(el,{keyPath:m_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(el)?e(r):(r.close(),await MS(),e(await qu()))})})}async function Xp(t,e,n){const r=Ul(t,!0).put({[m_]:e,value:n});return new xo(r).toPromise()}async function FS(t,e){const n=Ul(t,!1).get(e),r=await new xo(n).toPromise();return r===void 0?null:r.value}function Zp(t,e){const n=Ul(t,!0).delete(e);return new xo(n).toPromise()}const BS=800,US=3;class g_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>US)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fl._getInstance(OS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AS(),!this.activeServiceWorker)return;this.sender=new RS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qu();return await Xp(e,Za,"1"),await Zp(e,Za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ul(i,!1).getAll();return new xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g_.type="LOCAL";const v_=g_;/**
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
 */function em(t,e){return ee(t,"POST","/v2/accounts/mfaSignIn:start",Z(t,e))}function VS(t,e){return ee(t,"POST","/v2/accounts/mfaSignIn:finalize",Z(t,e))}function HS(t,e){return ee(t,"POST","/v2/accounts/mfaSignIn:finalize",Z(t,e))}/**
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
 */const Oc=Wy("rcb"),zS=new yo(3e4,6e4);class jS{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=he().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return E(WS(n),e,"argument-error"),this.shouldResolveImmediately(n)&&zp(he().grecaptcha)?Promise.resolve(he().grecaptcha):new Promise((r,i)=>{const s=he().setTimeout(()=>{i($e(e,"network-request-failed"))},zS.get());he()[Oc]=()=>{he().clearTimeout(s),delete he()[Oc];const a=he().grecaptcha;if(!a||!zp(a)){i($e(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${ok()}?${Br({onload:Oc,render:"explicit",hl:n})}`;vf(o).catch(()=>{clearTimeout(s),i($e(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=he().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function WS(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class $S{async load(e){return new dk(e)}clearedOneInstance(){}}/**
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
 */const ks="recaptcha",GS={theme:"light",type:"image"};class KS{constructor(e,n,r=Object.assign({},GS)){this.parameters=r,this.type=ks,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ce(e),this.isInvisible=this.parameters.size==="invisible",E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;E(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new $S:new jS,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=he()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(pf()&&!kf(),this.auth,"internal-error"),await qS(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await jb(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function qS(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Sf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Zn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function YS(t,e,n){if(de(t.app))return Promise.reject(Te(t));const r=ce(t),i=await Vl(r,e,O(n));return new Sf(i,s=>wo(r,s))}async function QS(t,e,n){const r=O(t);await Ll(!1,r,"phone");const i=await Vl(r.auth,e,O(n));return new Sf(i,s=>n_(r,s))}async function JS(t,e,n){const r=O(t);if(de(r.auth.app))return Promise.reject(Te(r.auth));const i=await Vl(r.auth,e,O(n));return new Sf(i,s=>r_(r,s))}async function Vl(t,e,n){var r;if(!t._getRecaptchaConfig())try{await Gy(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){E(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Xn(t,o,"mfaSmsEnrollment",async(u,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Is){E((n==null?void 0:n.type)===ks,u,"argument-error");const f=await Lc(u,d,n);return Jp(u,f)}return Jp(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{E(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;E(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Xn(t,a,"mfaSmsSignIn",async(d,f)=>{if(f.phoneSignInInfo.captchaResponse===Is){E((n==null?void 0:n.type)===ks,d,"argument-error");const p=await Lc(d,f,n);return em(d,p)}return em(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Xn(t,s,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===Is){E((n==null?void 0:n.type)===ks,c,"argument-error");const d=await Lc(c,u,n);return Yp(c,d)}return Yp(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function XS(t,e){const n=O(t);if(de(n.auth.app))return Promise.reject(Te(n.auth));await yf(n,e)}async function Lc(t,e,n){E(n.type===ks,t,"argument-error");const r=await n.verify();E(typeof r=="string",t,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */class Sr{constructor(e){this.providerId=Sr.PROVIDER_ID,this.auth=ce(e)}verifyPhoneNumber(e,n){return Vl(this.auth,e,O(n))}static credential(e,n){return Zn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Sr.credentialFromTaggedObject(n)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Zn._fromTokenResponse(n,r):null}}Sr.PROVIDER_ID="phone";Sr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ur(t,e){return e?an(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tf extends Vi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZS(t){return t_(t.auth,new Tf(t),t.bypassAuthState)}function eT(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),e_(n,new Tf(t),t.bypassAuthState)}async function tT(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),yf(n,new Tf(t),t.bypassAuthState)}/**
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
 */class y_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZS;case"linkViaPopup":case"linkViaRedirect":return tT;case"reauthViaPopup":case"reauthViaRedirect":return eT;default:st(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nT=new yo(2e3,1e4);async function rT(t,e,n){if(de(t.app))return Promise.reject($e(t,"operation-not-supported-in-this-environment"));const r=ce(t);Ui(t,e,kn);const i=Ur(r,n);return new ln(r,"signInViaPopup",e,i).executeNotNull()}async function iT(t,e,n){const r=O(t);if(de(r.auth.app))return Promise.reject($e(r.auth,"operation-not-supported-in-this-environment"));Ui(r.auth,e,kn);const i=Ur(r.auth,n);return new ln(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function sT(t,e,n){const r=O(t);Ui(r.auth,e,kn);const i=Ur(r.auth,n);return new ln(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ln extends y_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nT.get())};e()}}ln.currentPopupAction=null;/**
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
 */const oT="pendingRedirect",ga=new Map;class aT extends y_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ga.get(this.auth._key());if(!e){try{const r=await lT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ga.set(this.auth._key(),e)}return this.bypassAuthState||ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lT(t,e){const n=w_(e),r=__(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Cf(t,e){return __(t)._set(w_(e),"true")}function cT(t,e){ga.set(t._key(),e)}function __(t){return an(t._redirectPersistence)}function w_(t){return ma(oT,t.config.apiKey,t.name)}/**
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
 */function uT(t,e,n){return dT(t,e,n)}async function dT(t,e,n){if(de(t.app))return Promise.reject(Te(t));const r=ce(t);Ui(t,e,kn),await r._initializationPromise;const i=Ur(r,n);return await Cf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function fT(t,e,n){return hT(t,e,n)}async function hT(t,e,n){const r=O(t);if(Ui(r.auth,e,kn),de(r.auth.app))return Promise.reject(Te(r.auth));await r.auth._initializationPromise;const i=Ur(r.auth,n);await Cf(i,r.auth);const s=await I_(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function pT(t,e,n){return mT(t,e,n)}async function mT(t,e,n){const r=O(t);Ui(r.auth,e,kn),await r.auth._initializationPromise;const i=Ur(r.auth,n);await Ll(!1,r,e.providerId),await Cf(i,r.auth);const s=await I_(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function E_(t,e){return await ce(t)._initializationPromise,x_(t,e,!1)}async function x_(t,e,n=!1){if(de(t.app))return Promise.reject(Te(t));const r=ce(t),i=Ur(r,e),o=await new aT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function I_(t){const e=Bl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const gT=10*60*1e3;class vT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!b_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($e(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gT&&this.cachedEventUids.clear(),this.cachedEventUids.has(tm(e))}saveEventToCache(e){this.cachedEventUids.add(tm(e)),this.lastProcessedEventTime=Date.now()}}function tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function b_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(t);default:return!1}}/**
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
 */async function _T(t,e={}){return ee(t,"GET","/v1/projects",e)}/**
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
 */const wT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ET=/^https?/;async function xT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _T(t);for(const n of e)try{if(IT(n))return}catch{}st(t,"unauthorized-domain")}function IT(t){const e=Qs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ET.test(n))return!1;if(wT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bT=new yo(3e4,6e4);function nm(){const t=he().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kT(t){return new Promise((e,n)=>{var r,i,s;function o(){nm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nm(),n($e(t,"network-request-failed"))},timeout:bT.get()})}if(!((i=(r=he().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=he().gapi)===null||s===void 0)&&s.load)o();else{const a=Wy("iframefcb");return he()[a]=()=>{gapi.load?o():n($e(t,"network-request-failed"))},vf(`${lk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw va=null,e})}let va=null;function ST(t){return va=va||kT(t),va}/**
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
 */const TT=new yo(5e3,15e3),CT="__/auth/iframe",PT="emulator/auth/iframe",RT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AT(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mf(e,PT):`https://${t.config.authDomain}/${CT}`,r={apiKey:e.apiKey,appName:t.name,v:Bi},i=NT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Br(r).slice(1)}`}async function DT(t){const e=await ST(t),n=he().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:AT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$e(t,"network-request-failed"),a=he().setTimeout(()=>{s(o)},TT.get());function l(){he().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const OT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LT=500,MT=600,FT="_blank",BT="http://localhost";class rm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UT(t,e,n,r=LT,i=MT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OT),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ke().toLowerCase();n&&(a=Fy(c)?FT:n),Ly(c)&&(e=e||BT,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(Xb(c)&&a!=="_self")return VT(e||"",a),new rm(null);const d=window.open(e||"",a,u);E(d,t,"popup-blocked");try{d.focus()}catch{}return new rm(d)}function VT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HT="__/auth/handler",zT="emulator/auth/handler",jT=encodeURIComponent("fac");async function im(t,e,n,r,i,s){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bi,eventId:i};if(e instanceof kn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof zi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${jT}=${encodeURIComponent(l)}`:"";return`${WT(t)}?${Br(a).slice(1)}${c}`}function WT({config:t}){return t.emulator?mf(t,zT):`https://${t.authDomain}/${HT}`}/**
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
 */const Mc="webStorageSupport";class $T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bf,this._completeRedirectFn=x_,this._overrideRedirectResult=cT}async _openPopup(e,n,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await im(e,n,r,Qs(),i);return UT(e,o,Bl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await im(e,n,r,Qs(),i);return NS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DT(e),r=new vT(e);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Mc];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zy()||My()||gf()}}const k_=$T;class S_{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return $t("unexpected MultiFactorSessionType")}}}class Pf extends S_{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Pf(e)}_finalizeEnroll(e,n,r){return xS(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return VS(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class T_{constructor(){}static assertion(e){return Pf._fromCredential(e)}}T_.FACTOR_ID="phone";class C_{static assertionForEnrollment(e,n){return Zs._fromSecret(e,n)}static assertionForSignIn(e,n){return Zs._fromEnrollmentId(e,n)}static async generateSecret(e){var n;const r=e;E(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");const i=await IS(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Hl._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}}C_.FACTOR_ID="totp";class Zs extends S_{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new Zs(n,void 0,e)}static _fromEnrollmentId(e,n){return new Zs(n,e)}async _finalizeEnroll(e,n,r){return E(typeof this.secret<"u",e,"argument-error"),bS(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){E(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return HS(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Hl{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Hl(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let i=!1;return(Xo(e)||Xo(n))&&(i=!0),i&&(Xo(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Xo(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Xo(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var sm="@firebase/auth",om="1.8.0";/**
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
 */class GT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qT(t){bi(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jy(t)},c=new ik(r,i,s,l);return vk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bi(new Ar("auth-internal",e=>{const n=ce(e.getProvider("auth").getImmediate());return(r=>new GT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(sm,om,KT(t)),Jn(sm,om,"esm2017")}/**
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
 */const YT=5*60,QT=hy("authIdTokenMaxAge")||YT;let am=null;const JT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QT)return;const i=n==null?void 0:n.token;am!==i&&(am=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function P_(t=_y()){const e=uf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ky(t,{popupRedirectResolver:k_,persistence:[v_,f_,bf]}),r=hy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=JT(s.toString());l_(n,o,()=>o(n.currentUser)),a_(n,a=>o(a))}}const i=dy("auth");return i&&qy(n,`http://${i}`),n}function XT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$e("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qT("Browser");const Fc=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:Ab,ActionCodeURL:Hi,AuthCredential:Vi,AuthErrorCodes:Lb,EmailAuthCredential:ki,EmailAuthProvider:fr,FacebookAuthProvider:en,FactorId:Cb,GithubAuthProvider:tn,GoogleAuthProvider:zt,OAuthCredential:Yt,OAuthProvider:bs,OperationType:Nb,PhoneAuthCredential:Zn,PhoneAuthProvider:Sr,PhoneMultiFactorGenerator:T_,ProviderId:Pb,RecaptchaVerifier:KS,SAMLAuthProvider:Ja,SignInMethod:Rb,TotpMultiFactorGenerator:C_,TotpSecret:Hl,TwitterAuthProvider:nn,applyActionCode:Gk,beforeAuthStateChanged:l_,browserLocalPersistence:f_,browserPopupRedirectResolver:k_,browserSessionPersistence:bf,checkActionCode:i_,confirmPasswordReset:$k,connectAuthEmulator:qy,createUserWithEmailAndPassword:qk,debugErrorMap:Ob,deleteUser:wS,fetchSignInMethodsForEmail:eS,getAdditionalUserInfo:fS,getAuth:P_,getIdToken:Gb,getIdTokenResult:Ny,getMultiFactorResolver:ES,getRedirectResult:E_,inMemoryPersistence:Ku,indexedDBLocalPersistence:v_,initializeAuth:Ky,initializeRecaptchaConfig:pS,isSignInWithEmailLink:Jk,linkWithCredential:n_,linkWithPhoneNumber:QS,linkWithPopup:sT,linkWithRedirect:pT,multiFactor:SS,onAuthStateChanged:gS,onIdTokenChanged:a_,parseActionCodeURL:Fk,prodErrorMap:Iy,reauthenticateWithCredential:r_,reauthenticateWithPhoneNumber:JS,reauthenticateWithPopup:iT,reauthenticateWithRedirect:fT,reload:Ay,revokeAccessToken:_S,sendEmailVerification:tS,sendPasswordResetEmail:Wk,sendSignInLinkToEmail:Qk,setPersistence:hS,signInAnonymously:Vk,signInWithCredential:wo,signInWithCustomToken:jk,signInWithEmailAndPassword:Yk,signInWithEmailLink:Xk,signInWithPhoneNumber:YS,signInWithPopup:rT,signInWithRedirect:uT,signOut:c_,unlink:Hk,updateCurrentUser:yS,updateEmail:sS,updatePassword:oS,updatePhoneNumber:XS,updateProfile:iS,useDeviceLanguage:vS,validatePassword:mS,verifyBeforeUpdateEmail:nS,verifyPasswordResetCode:Kk},Symbol.toStringTag,{value:"Module"}));var lm={};const cm="@firebase/database",um="1.0.9";/**
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
 */let R_="";function ZT(t){R_=t}/**
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
 */class eC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:qs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const N_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eC(e)}}catch{}return new tC},Ir=N_("localStorage"),nC=N_("sessionStorage");/**
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
 */const pi=new lf("@firebase/database"),rC=function(){let t=1;return function(){return t++}}(),A_=function(t){const e=yI(t),n=new pI;n.update(e);const r=n.digest();return sf.encodeByteArray(r)},Io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Io.apply(null,r):typeof r=="object"?e+=ye(r):e+=r,e+=" "}return e};let Ss=null,dm=!0;const iC=function(t,e){x(!0,"Can't turn on custom loggers persistently."),pi.logLevel=G.VERBOSE,Ss=pi.log.bind(pi)},Re=function(...t){if(dm===!0&&(dm=!1,Ss===null&&nC.get("logging_enabled")===!0&&iC()),Ss){const e=Io.apply(null,t);Ss(e)}},bo=function(t){return function(...e){Re(t,...e)}},Yu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Io(...t);pi.error(e)},wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Io(...t)}`;throw pi.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Io(...t);pi.warn(e)},sC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Rf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},oC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Si="[MIN_NAME]",Dr="[MAX_NAME]",Vr=function(t,e){if(t===e)return 0;if(t===Si||e===Dr)return-1;if(e===Si||t===Dr)return 1;{const n=fm(t),r=fm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},aC=function(t,e){return t===e?0:t<e?-1:1},ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},Nf=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ye(e[r]),n+=":",n+=Nf(t[e[r]]);return n+="}",n},D_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function De(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const O_=function(t){x(!Rf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},lC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const dC=new RegExp("^-?(0*)\\d{1,10}$"),fC=-2147483648,hC=2147483647,fm=function(t){if(dC.test(t)){const e=Number(t);if(e>=fC&&e<=hC)return e}return null},ji=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},pC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class ya{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ya.OWNER="owner";/**
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
 */const Af="5",L_="v",M_="s",F_="r",B_="f",U_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,V_="ls",H_="p",Qu="ac",z_="websocket",j_="long_polling";/**
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
 */class W_{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $_(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===z_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===j_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vC(t)&&(n.ns=t.namespace);const i=[];return De(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class yC{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yx(this.counters_)}}/**
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
 */const Bc={},Uc={};function Df(t){const e=t.toString();return Bc[e]||(Bc[e]=new yC),Bc[e]}function _C(t,e){const n=t.toString();return Uc[n]||(Uc[n]=e()),Uc[n]}/**
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
 */class wC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ji(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hm="start",EC="close",xC="pLPCommand",IC="pRTLPCB",G_="id",K_="pw",q_="ser",bC="cb",kC="seg",SC="ts",TC="d",CC="dframe",Y_=1870,Q_=30,PC=Y_-Q_,RC=25e3,NC=3e4;class ii{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bo(e),this.stats_=Df(n),this.urlFn=l=>(this.appCheckToken&&(l[Qu]=this.appCheckToken),$_(n,j_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NC)),oC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Of((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hm)this.id=a,this.password=l;else if(o===EC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[hm]="t",r[q_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[L_]=Af,this.transportSessionId&&(r[M_]=this.transportSessionId),this.lastSessionId&&(r[V_]=this.lastSessionId),this.applicationId&&(r[H_]=this.applicationId),this.appCheckToken&&(r[Qu]=this.appCheckToken),typeof location<"u"&&location.hostname&&U_.test(location.hostname)&&(r[F_]=B_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lC()&&!cC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cy(n),i=D_(r,PC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[CC]="t",r[G_]=e,r[K_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Of{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rC(),window[xC+this.uniqueCallbackIdentifier]=e,window[IC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Of.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Re("frame writing exception"),a.stack&&Re(a.stack),Re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[G_]=this.myID,e[K_]=this.myPW,e[q_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Q_+r.length<=Y_;){const o=this.pendingSegs.shift();r=r+"&"+kC+i+"="+o.seg+"&"+SC+i+"="+o.ts+"&"+TC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(RC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const AC=16384,DC=45e3;let tl=null;typeof MozWebSocket<"u"?tl=MozWebSocket:typeof WebSocket<"u"&&(tl=WebSocket);class Nt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bo(this.connId),this.stats_=Df(n),this.connURL=Nt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[L_]=Af,typeof location<"u"&&location.hostname&&U_.test(location.hostname)&&(o[F_]=B_),n&&(o[M_]=n),r&&(o[V_]=r),i&&(o[Qu]=i),s&&(o[H_]=s),$_(e,z_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let r;oI(),this.mySock=new tl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&tl!==null&&!Nt.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=qs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=D_(n,AC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(DC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2;Nt.healthyTimeout=3e4;/**
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
 */class eo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ii,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Nt&&Nt.isAvailable();let r=n&&!Nt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nt];else{const i=this.transports_=[];for(const s of eo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}eo.globalTransportInitialized_=!1;/**
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
 */const OC=6e4,LC=5e3,MC=10*1024,FC=100*1024,Vc="t",pm="d",BC="s",mm="r",UC="e",gm="o",vm="a",ym="n",_m="p",VC="h";class HC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bo("c:"+this.id+":"),this.transportManager_=new eo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vc in e){const n=e[Vc];n===vm?this.upgradeIfSecondaryHealthy_():n===mm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ns("t",e),r=ns("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_m,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ns("t",e),r=ns("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ns(Vc,e);if(pm in e){const r=e[pm];if(n===VC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BC?this.onConnectionShutdown_(r):n===mm?this.onReset_(r):n===UC?Yu("Server Error: "+r):n===gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Af!==r&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_m,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class J_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class X_{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class nl extends X_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!af()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nl}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const wm=32,Em=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new K("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function sr(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Lf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function to(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Z_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=V(t),r=V(e);if(n===null)return e;if(n===r)return je(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jC(t,e){const n=to(t,0),r=to(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Vr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function e0(t,e){if(sr(t)!==sr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(sr(t)>sr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class WC{constructor(e,n){this.errorPrefix_=n,this.parts_=to(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Al(this.parts_[r]);t0(this)}}function $C(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Al(e),t0(t)}function GC(t){const e=t.parts_.pop();t.byteLength_-=Al(e),t.parts_.length>0&&(t.byteLength_-=1)}function t0(t){if(t.byteLength_>Em)throw new Error(t.errorPrefix_+"has a key path longer than "+Em+" bytes ("+t.byteLength_+").");if(t.parts_.length>wm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wm+") or object contains a cycle "+yr(t))}function yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mf extends X_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Mf}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const rs=1e3,KC=60*5*1e3,xm=30*1e3,qC=1.3,YC=3e4,QC="server_kill",Im=3;class fn extends J_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=fn.nextPersistentConnectionId_++,this.log_=bo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rs,this.maxReconnectDelay_=KC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ye(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new go,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=Ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yu("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YC&&(this.reconnectDelay_=rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new HC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Ge(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(QC)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ge(d),l())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vu(this.interruptReasons_)&&(this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Nf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Im&&(this.reconnectDelay_=xm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Im&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+R_.replace(/\./g,"-")]=1,af()?e["framework.cordova"]=1:py()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nl.getInstance().currentlyOnline();return Vu(this.interruptReasons_)&&e}}fn.nextPersistentConnectionId_=0;fn.nextConnectionId_=0;/**
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
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Si,e),i=new F(Si,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let Zo;class n0 extends zl{static get __EMPTY_NODE(){return Zo}static set __EMPTY_NODE(e){Zo=e}compare(e,n){return Vr(e.name,n.name)}isDefinedOn(e){throw Fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Dr,Zo)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Zo)}toString(){return".key"}}const mi=new n0;/**
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
 */class ea{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??et.EMPTY_NODE,this.right=s??et.EMPTY_NODE}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class JC{copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ea(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ea(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ea(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ea(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new JC;/**
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
 */function XC(t,e){return Vr(t.name,e.name)}function Ff(t,e){return Vr(t,e)}/**
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
 */let Ju;function ZC(t){Ju=t}const r0=function(t){return typeof t=="number"?"number:"+O_(t):"string:"+t},i0=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else x(t===Ju||t.isEmpty(),"priority of unexpected type.");x(t===Ju||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let bm;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),i0(this.priorityNode_)}static set __childrenNodeConstructor(e){bm=e}static get __childrenNodeConstructor(){return bm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:V(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=V(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+r0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=O_(this.value_):e+=this.value_,this.lazyHash_=A_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let s0,o0;function eP(t){s0=t}function tP(t){o0=t}class nP extends zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Vr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Dr,new xe("[PRIORITY-POST]",o0))}makePost(e,n){const r=s0(e);return new F(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new nP;/**
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
 */const rP=Math.log(2);class iP{constructor(e){const n=s=>parseInt(Math.log(s)/rP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rl=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new ke(f,d.node,ke.BLACK,null,null);{const p=parseInt(u/2,10)+l,v=i(l,p),y=i(p+1,c);return d=t[p],f=n?n(d):d,new ke(f,d.node,ke.BLACK,v,y)}},s=function(l){let c=null,u=null,d=t.length;const f=function(v,y){const R=d-v,m=d;d-=v;const h=i(R+1,m),g=t[R],_=n?n(g):g;p(new ke(_,g.node,y,null,h))},p=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),R=Math.pow(2,l.count-(v+1));y?f(R,ke.BLACK):(f(R,ke.BLACK),f(R,ke.RED))}return u},o=new iP(t.length),a=s(o);return new et(r||e,a)};/**
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
 */let Hc;const $r={};class cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x($r&&le,"ChildrenNode.ts has not been loaded"),Hc=Hc||new cn({".priority":$r},{".priority":le}),Hc}get(e){const n=Ii(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=rl(r,e.getCompare()):a=$r;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new cn(u,c)}addToIndexes(e,n){const r=Ka(this.indexes_,(i,s)=>{const o=Ii(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===$r)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),rl(a,o.getCompare())}else return $r;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new cn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ka(this.indexes_,i=>{if(i===$r)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new cn(r,this.indexSet_)}}/**
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
 */let is;class N{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&i0(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return is||(is=new N(new et(Ff),null,cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?is:this.priorityNode_;return new N(i,o,s)}}updateChild(e,n){const r=V(e);if(r===null)return n;{x(V(e)!==".priority"||sr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,a)=>{n[o]=a.val(e),r++,s&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+r0(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":A_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ko?-1:0}withIndex(e){if(e===mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mi?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sP extends N{constructor(){super(new et(Ff),N.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const ko=new sP;Object.defineProperties(F,{MIN:{value:new F(Si,N.EMPTY_NODE)},MAX:{value:new F(Dr,ko)}});n0.__EMPTY_NODE=N.EMPTY_NODE;xe.__childrenNodeConstructor=N;ZC(ko);tP(ko);/**
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
 */const oP=!0;function ve(t,e=null){if(t===null)return N.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,ve(e))}if(!(t instanceof Array)&&oP){const n=[];let r=!1;if(De(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ve(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return N.EMPTY_NODE;const s=rl(n,XC,o=>o.name,Ff);if(r){const o=rl(n,le.getCompare());return new N(s,ve(e),new cn({".priority":o},{".priority":le}))}else return new N(s,ve(e),cn.Default)}else{let n=N.EMPTY_NODE;return De(t,(r,i)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}eP(ve);/**
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
 */class aP extends zl{constructor(e){super(),this.indexPath_=e,x(!B(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Vr(e.name,n.name):s}makePost(e,n){const r=ve(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,ko);return new F(Dr,e)}toString(){return to(this.indexPath_,0).join("/")}}/**
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
 */class lP extends zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ve(e);return new F(n,r)}toString(){return".value"}}const cP=new lP;/**
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
 */function a0(t){return{type:"value",snapshotNode:t}}function Ti(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function no(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Bf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(no(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ti(n,r)):o.trackChildChange(ro(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(no(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ro(i,s,o))}else r.trackChildChange(Ti(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class io{constructor(e){this.indexedFilter_=new Bf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=io.getStartPost_(e),this.endPost_=io.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=N.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,a)=>{s.matches(new F(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class dP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new io(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=N.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new F(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ro(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(no(n,d));const y=a.updateImmediateChild(n,N.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ti(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(no(c.name,c.node)),s.trackChildChange(Ti(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
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
 */class Uf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Si}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new Uf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fP(t){return t.loadsAllData()?new Bf(t.getIndex()):t.hasLimit()?new dP(t):new io(t)}function km(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===cP?n="$value":t.index_===mi?n="$key":(x(t.index_ instanceof aP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ye(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ye(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ye(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
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
 */class il extends J_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=bo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=il.getListenId_(e,r),a={};this.listens_[o]=a;const l=km(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Ii(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=il.getListenId_(e,n);delete this.listens_[r]}get(e){const n=km(e._queryParams),r=e._path.toString(),i=new go;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Br(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=qs(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class hP{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function sl(){return{value:null,children:new Map}}function l0(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=V(e);t.children.has(r)||t.children.set(r,sl());const i=t.children.get(r);e=Y(e),l0(i,e,n)}}function Xu(t,e,n){t.value!==null?n(e,t.value):pP(t,(r,i)=>{const s=new K(e.toString()+"/"+r);Xu(i,s,n)})}function pP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class mP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&De(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Tm=10*1e3,gP=30*1e3,vP=5*60*1e3;class yP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mP(e);const r=Tm+(gP-Tm)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;De(e,(i,s)=>{s>0&&Qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*vP))}}/**
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
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function Vf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ol{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=At.ACK_USER_WRITE,this.source=Vf()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new ol(W(),n,this.revert)}}else return x(V(this.path)===e,"operationForChild called for unrelated child."),new ol(Y(this.path),this.affectedTree,this.revert)}}/**
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
 */class so{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new so(this.source,W()):new so(this.source,Y(this.path))}}/**
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
 */class Or{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=At.OVERWRITE}operationForChild(e){return B(this.path)?new Or(this.source,W(),this.snap.getImmediateChild(e)):new Or(this.source,Y(this.path),this.snap)}}/**
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
 */class Ci{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=At.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Or(this.source,W(),n.value):new Ci(this.source,W(),n)}else return x(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ci(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class or{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class _P{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wP(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(uP(o.childName,o.snapshotNode))}),ss(t,i,"child_removed",e,r,n),ss(t,i,"child_added",e,r,n),ss(t,i,"child_moved",s,r,n),ss(t,i,"child_changed",e,r,n),ss(t,i,"value",e,r,n),i}function ss(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>xP(t,a,l)),o.forEach(a=>{const l=EP(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function EP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xP(t,e,n){if(e.childName==null||n.childName==null)throw Fi("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function jl(t,e){return{eventCache:t,serverCache:e}}function Cs(t,e,n,r){return jl(new or(e,n,r),t.serverCache)}function c0(t,e,n,r){return jl(t.eventCache,new or(e,n,r))}function al(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Lr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let zc;const IP=()=>(zc||(zc=new et(aC)),zc);class q{constructor(e,n=IP()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return De(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(B(e))return null;{const r=V(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:ae(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=V(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new q(null)}}set(e,n){if(B(e))return new q(n,this.children);{const r=V(e),s=(this.children.get(r)||new q(null)).set(Y(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=V(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=V(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(B(e))return n;{const r=V(e),s=(this.children.get(r)||new q(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=V(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=V(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),ae(n,i),r):new q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new q(null))}}function Ps(t,e,n){if(B(e))return new Lt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=je(i,e);return s=s.updateChild(o,n),new Lt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new Lt(s)}}}function Zu(t,e,n){let r=t;return De(n,(i,s)=>{r=Ps(r,ae(e,i),s)}),r}function Cm(t,e){if(B(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new Lt(n)}}function ed(t,e){return Hr(t,e)!=null}function Hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Pm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function er(t,e){if(B(e))return t;{const n=Hr(t,e);return n!=null?new Lt(new q(n)):new Lt(t.writeTree_.subtree(e))}}function td(t){return t.writeTree_.isEmpty()}function Pi(t,e){return u0(W(),t.writeTree_,e)}function u0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=u0(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function Wl(t,e){return p0(e,t)}function bP(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ps(t.visibleWrites,e,n)),t.lastWriteId=r}function kP(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Zu(t.visibleWrites,e,n),t.lastWriteId=r}function SP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function TP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&CP(a,r.path)?i=!1:gt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return PP(t),!0;if(r.snap)t.visibleWrites=Cm(t.visibleWrites,r.path);else{const a=r.children;De(a,l=>{t.visibleWrites=Cm(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function CP(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(ae(t.path,n),e))return!0;return!1}function PP(t){t.visibleWrites=d0(t.allWrites,RP,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RP(t){return t.visible}function d0(t,e,n){let r=Lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)gt(n,o)?(a=je(n,o),r=Ps(r,a,s.snap)):gt(o,n)&&(a=je(o,n),r=Ps(r,W(),s.snap.getChild(a)));else if(s.children){if(gt(n,o))a=je(n,o),r=Zu(r,a,s.children);else if(gt(o,n))if(a=je(o,n),B(a))r=Zu(r,W(),s.children);else{const l=Ii(s.children,V(a));if(l){const c=l.getChild(Y(a));r=Ps(r,W(),c)}}}else throw Fi("WriteRecord should have .snap or .children")}}return r}function f0(t,e,n,r,i){if(!r&&!i){const s=Hr(t.visibleWrites,e);if(s!=null)return s;{const o=er(t.visibleWrites,e);if(td(o))return n;if(n==null&&!ed(o,W()))return null;{const a=n||N.EMPTY_NODE;return Pi(o,a)}}}else{const s=er(t.visibleWrites,e);if(!i&&td(s))return n;if(!i&&n==null&&!ed(s,W()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(gt(c.path,e)||gt(e,c.path))},a=d0(t.allWrites,o,e),l=n||N.EMPTY_NODE;return Pi(a,l)}}}function NP(t,e,n){let r=N.EMPTY_NODE;const i=Hr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=er(t.visibleWrites,e);return n.forEachChild(le,(o,a)=>{const l=Pi(er(s,new K(o)),a);r=r.updateImmediateChild(o,l)}),Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=er(t.visibleWrites,e);return Pm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function AP(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(ed(t.visibleWrites,s))return null;{const o=er(t.visibleWrites,s);return td(o)?i.getChild(n):Pi(o,i.getChild(n))}}function DP(t,e,n,r){const i=ae(e,n),s=Hr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=er(t.visibleWrites,i);return Pi(o,r.getNode().getImmediateChild(n))}else return null}function OP(t,e){return Hr(t.visibleWrites,e)}function LP(t,e,n,r,i,s,o){let a;const l=er(t.visibleWrites,e),c=Hr(l,W());if(c!=null)a=c;else if(n!=null)a=Pi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&u.length<i;)d(p,r)!==0&&u.push(p),p=f.getNext();return u}else return[]}function MP(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function ll(t,e,n,r){return f0(t.writeTree,t.treePath,e,n,r)}function jf(t,e){return NP(t.writeTree,t.treePath,e)}function Rm(t,e,n,r){return AP(t.writeTree,t.treePath,e,n,r)}function cl(t,e){return OP(t.writeTree,ae(t.treePath,e))}function FP(t,e,n,r,i,s){return LP(t.writeTree,t.treePath,e,n,r,i,s)}function Wf(t,e,n){return DP(t.writeTree,t.treePath,e,n)}function h0(t,e){return p0(ae(t.treePath,e),t.writeTree)}function p0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class BP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ro(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,no(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ti(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ro(r,e.snapshotNode,i.oldSnap));else throw Fi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const m0=new UP;class $f{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lr(this.viewCache_),s=FP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function VP(t){return{filter:t}}function HP(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zP(t,e,n,r,i){const s=new BP;let o,a;if(n.type===At.OVERWRITE){const c=n;c.source.fromUser?o=nd(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=ul(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===At.MERGE){const c=n;c.source.fromUser?o=WP(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===At.ACK_USER_WRITE){const c=n;c.revert?o=KP(t,e,c.path,r,i,s):o=$P(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===At.LISTEN_COMPLETE)o=GP(t,e,n.path,r,s);else throw Fi("Unknown operation type: "+n.type);const l=s.getChanges();return jP(e,o,l),{viewCache:o,changes:l}}function jP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=al(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(a0(al(e)))}}function g0(t,e,n,r,i,s){const o=e.eventCache;if(cl(r,n)!=null)return e;{let a,l;if(B(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Lr(e),u=c instanceof N?c:N.EMPTY_NODE,d=jf(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=ll(r,Lr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=V(n);if(c===".priority"){x(sr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Rm(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Y(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Rm(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Wf(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Cs(e,a,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function ul(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=V(n);if(!l.isCompleteForPath(n)&&sr(n)>1)return e;const v=Y(n),R=l.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),p,R,v,m0,null)}const d=c0(e,c,l.isFullyInitialized()||B(n),u.filtersNodes()),f=new $f(i,d,s);return g0(t,d,n,i,f,a)}function nd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new $f(i,e,s);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Cs(e,c,!0,t.filter.filtersNodes());else{const d=V(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Cs(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Y(n),p=a.getNode().getImmediateChild(d);let v;if(B(f))v=r;else{const y=u.getCompleteChild(d);y!=null?Lf(f)===".priority"&&y.getChild(Z_(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=N.EMPTY_NODE}if(p.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),d,v,f,u,o);l=Cs(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nm(t,e){return t.eventCache.isCompleteForChild(e)}function WP(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ae(n,l);Nm(e,V(u))&&(a=nd(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ae(n,l);Nm(e,V(u))||(a=nd(t,a,u,c,i,s,o))}),a}function Am(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function rd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;B(n)?c=r:c=new q(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),v=Am(t,p,f);l=ul(t,l,new K(d),v,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const v=e.serverCache.getNode().getImmediateChild(d),y=Am(t,v,f);l=ul(t,l,new K(d),y,i,s,o,a)}}),l}function $P(t,e,n,r,i,s,o){if(cl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(B(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ul(t,e,n,l.getNode().getChild(n),i,s,a,o);if(B(n)){let c=new q(null);return l.getNode().forEachChild(mi,(u,d)=>{c=c.set(new K(u),d)}),rd(t,e,n,c,i,s,a,o)}else return e}else{let c=new q(null);return r.foreach((u,d)=>{const f=ae(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),rd(t,e,n,c,i,s,a,o)}}function GP(t,e,n,r,i){const s=e.serverCache,o=c0(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return g0(t,o,n,r,m0,i)}function KP(t,e,n,r,i,s){let o;if(cl(r,n)!=null)return e;{const a=new $f(r,e,i),l=e.eventCache.getNode();let c;if(B(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ll(r,Lr(e));else{const d=e.serverCache.getNode();x(d instanceof N,"serverChildren would be complete if leaf node"),u=jf(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=V(n);let d=Wf(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Y(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,N.EMPTY_NODE,Y(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ll(r,Lr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||cl(r,W())!=null,Cs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class qP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Bf(r.getIndex()),s=fP(r);this.processor_=VP(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=new or(l,o.isFullyInitialized(),i.filtersNodes()),d=new or(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=jl(d,u),this.eventGenerator_=new _P(this.query_)}get query(){return this.query_}}function YP(t){return t.viewCache_.serverCache.getNode()}function QP(t){return al(t.viewCache_)}function JP(t,e){const n=Lr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Dm(t){return t.eventRegistrations_.length===0}function XP(t,e){t.eventRegistrations_.push(e)}function Om(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Lm(t,e,n,r){e.type===At.MERGE&&e.source.queryId!==null&&(x(Lr(t.viewCache_),"We should always have a full cache before handling merges"),x(al(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=zP(t.processor_,i,e,n,r);return HP(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,v0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ZP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(Ti(s,o))}),n.isFullyInitialized()&&r.push(a0(n.getNode())),v0(t,r,n.getNode(),e)}function v0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return wP(t.eventGenerator_,e,n,i)}/**
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
 */let dl;class y0{constructor(){this.views=new Map}}function eR(t){x(!dl,"__referenceConstructor has already been defined"),dl=t}function tR(){return x(dl,"Reference.ts has not been loaded"),dl}function nR(t){return t.views.size===0}function Gf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Lm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Lm(o,e,n,r));return s}}function _0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ll(n,i?r:null),l=!1;a?l=!0:r instanceof N?(a=jf(n,r),l=!1):(a=N.EMPTY_NODE,l=!1);const c=jl(new or(a,l,!1),new or(r,i,!1));return new qP(e,c)}return o}function rR(t,e,n,r,i,s){const o=_0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),XP(o,n),ZP(o,n)}function iR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ar(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Om(c,n,r)),Dm(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Om(l,n,r)),Dm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ar(t)&&s.push(new(tR())(e._repo,e._path)),{removed:s,events:o}}function w0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function tr(t,e){let n=null;for(const r of t.views.values())n=n||JP(r,e);return n}function E0(t,e){if(e._queryParams.loadsAllData())return $l(t);{const r=e._queryIdentifier;return t.views.get(r)}}function x0(t,e){return E0(t,e)!=null}function ar(t){return $l(t)!=null}function $l(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let fl;function sR(t){x(!fl,"__referenceConstructor has already been defined"),fl=t}function oR(){return x(fl,"Reference.ts has not been loaded"),fl}let aR=1;class Mm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=MP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function I0(t,e,n,r,i){return bP(t.pendingWriteTree_,e,n,r,i),i?Wi(t,new Or(Vf(),e,n)):[]}function lR(t,e,n,r){kP(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Wi(t,new Ci(Vf(),e,i))}function Un(t,e,n=!1){const r=SP(t.pendingWriteTree_,e);if(TP(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(W(),!0):De(r.children,o=>{s=s.set(new K(o),!0)}),Wi(t,new ol(r.path,s,n))}else return[]}function So(t,e,n){return Wi(t,new Or(Hf(),e,n))}function cR(t,e,n){const r=q.fromObject(n);return Wi(t,new Ci(Hf(),e,r))}function uR(t,e){return Wi(t,new so(Hf(),e))}function dR(t,e,n){const r=qf(t,n);if(r){const i=Yf(r),s=i.path,o=i.queryId,a=je(s,e),l=new so(zf(o),a);return Qf(t,s,l)}else return[]}function b0(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||x0(o,e))){const l=iR(o,e,n,r);nR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>ar(p));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=mR(f);for(let v=0;v<p.length;++v){const y=p[v],R=y.query,m=C0(t,y);t.listenProvider_.startListening(Rs(R),oo(t,R),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Rs(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(Gl(f));t.listenProvider_.stopListening(Rs(f),p)}))}gR(t,c)}return a}function k0(t,e,n,r){const i=qf(t,r);if(i!=null){const s=Yf(i),o=s.path,a=s.queryId,l=je(o,e),c=new Or(zf(a),l,n);return Qf(t,o,c)}else return[]}function fR(t,e,n,r){const i=qf(t,r);if(i){const s=Yf(i),o=s.path,a=s.queryId,l=je(o,e),c=q.fromObject(n),u=new Ci(zf(a),l,c);return Qf(t,o,u)}else return[]}function hR(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const v=je(f,i);s=s||tr(p,v),o=o||ar(p)});let a=t.syncPointTree_.get(i);a?(o=o||ar(a),s=s||tr(a,W())):(a=new y0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=N.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,v)=>{const y=tr(v,W());y&&(s=s.updateImmediateChild(p,y))}));const c=x0(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Gl(e);x(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=vR();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=Wl(t.pendingWriteTree_,i);let d=rR(a,e,n,u,s,l);if(!c&&!o&&!r){const f=E0(a,e);d=d.concat(yR(t,e,f))}return d}function Kf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),c=tr(a,l);if(c)return c});return f0(i,e,s,n,!0)}function pR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=je(c,n);r=r||tr(u,d)});let i=t.syncPointTree_.get(n);i?r=r||tr(i,W()):(i=new y0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new or(r,!0,!1):null,a=Wl(t.pendingWriteTree_,e._path),l=_0(i,e,a,s?o.getNode():N.EMPTY_NODE,s);return QP(l)}function Wi(t,e){return S0(e,t.syncPointTree_,null,Wl(t.pendingWriteTree_,W()))}function S0(t,e,n,r){if(B(t.path))return T0(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=tr(i,W()));let s=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=h0(r,o);s=s.concat(S0(a,l,c,u))}return i&&(s=s.concat(Gf(i,t,r,n))),s}}function T0(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=tr(i,W()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=h0(r,o),u=t.operationForChild(o);u&&(s=s.concat(T0(u,a,l,c)))}),i&&(s=s.concat(Gf(i,t,r,n))),s}function C0(t,e){const n=e.query,r=oo(t,n);return{hashFn:()=>(YP(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?dR(t,n._path,r):uR(t,n._path);{const s=uC(i,n);return b0(t,n,null,s)}}}}function oo(t,e){const n=Gl(e);return t.queryToTagMap.get(n)}function Gl(t){return t._path.toString()+"$"+t._queryIdentifier}function qf(t,e){return t.tagToQueryMap.get(e)}function Yf(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function Qf(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=Wl(t.pendingWriteTree_,e);return Gf(r,n,i,null)}function mR(t){return t.fold((e,n,r)=>{if(n&&ar(n))return[$l(n)];{let i=[];return n&&(i=w0(n)),De(r,(s,o)=>{i=i.concat(o)}),i}})}function Rs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(oR())(t._repo,t._path):t}function gR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Gl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function vR(){return aR++}function yR(t,e,n){const r=e._path,i=oo(t,e),s=C0(t,n),o=t.listenProvider_.startListening(Rs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!ar(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!B(c)&&u&&ar(u))return[$l(u).query];{let f=[];return u&&(f=f.concat(w0(u).map(p=>p.query))),De(d,(p,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Rs(u),oo(t,u))}}return o}/**
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
 */class Jf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jf(n)}node(){return this.node_}}class Xf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Xf(this.syncTree_,n)}node(){return Kf(this.syncTree_,this.path_)}}const _R=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fm=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ER(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},ER=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},P0=function(t,e,n,r){return Zf(e,new Xf(n,t),r)},R0=function(t,e,n){return Zf(t,new Jf(e),n)};function Zf(t,e,n){const r=t.getPriority().val(),i=Fm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Fm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(le,(a,l)=>{const c=Zf(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class eh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function th(t,e){let n=e instanceof K?e:new K(e),r=t,i=V(n);for(;i!==null;){const s=Ii(r.node.children,i)||{children:{},childCount:0};r=new eh(i,r,s),n=Y(n),i=V(n)}return r}function $i(t){return t.node.value}function N0(t,e){t.node.value=e,id(t)}function A0(t){return t.node.childCount>0}function xR(t){return $i(t)===void 0&&!A0(t)}function Kl(t,e){De(t.node.children,(n,r)=>{e(new eh(n,t,r))})}function D0(t,e,n,r){n&&e(t),Kl(t,i=>{D0(i,e,!0)})}function IR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function To(t){return new K(t.parent===null?t.name:To(t.parent)+"/"+t.name)}function id(t){t.parent!==null&&bR(t.parent,t.name,t)}function bR(t,e,n){const r=xR(n),i=Qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,id(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,id(t))}/**
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
 */const kR=/[\[\].#$\/\u0000-\u001F\u007F]/,SR=/[\[\].#$\u0000-\u001F\u007F]/,jc=10*1024*1024,nh=function(t){return typeof t=="string"&&t.length!==0&&!kR.test(t)},O0=function(t){return typeof t=="string"&&t.length!==0&&!SR.test(t)},TR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),O0(t)},CR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Rf(t)||t&&typeof t=="object"&&Qt(t,".sv")},PR=function(t,e,n,r){ql(Nl(t,"value"),e,n)},ql=function(t,e,n){const r=n instanceof K?new WC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+yr(r)+" with contents = "+e.toString());if(Rf(e))throw new Error(t+"contains "+e.toString()+" "+yr(r));if(typeof e=="string"&&e.length>jc/3&&Al(e)>jc)throw new Error(t+"contains a string greater than "+jc+" utf8 bytes "+yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(De(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!nh(o)))throw new Error(t+" contains an invalid key ("+o+") "+yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$C(r,o),ql(t,a,r),GC(r)}),i&&s)throw new Error(t+' contains ".value" child '+yr(r)+" in addition to actual children.")}},RR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=to(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!nh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&gt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},NR=function(t,e,n,r){const i=Nl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];De(e,(o,a)=>{const l=new K(o);if(ql(i,a,ae(n,l)),Lf(l)===".priority"&&!CR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),RR(i,s)},L0=function(t,e,n,r){if(!O0(n))throw new Error(Nl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},AR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),L0(t,e,n)},DR=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},OR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TR(n))throw new Error(Nl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class LR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!e0(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xt(t,e,n){rh(t,n),MR(t,r=>gt(r,e)||gt(e,r))}function MR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(FR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function FR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ss&&Re("event: "+n.toString()),ji(r)}}}/**
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
 */const BR="repo_interrupt",UR=25;class VR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sl(),this.transactionQueueTree_=new eh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HR(t,e,n){if(t.stats_=Df(t.repoInfo_),t.forceRestClient_||pC())t.server_=new il(t.repoInfo_,(r,i,s,o)=>{Bm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Um(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new fn(t.repoInfo_,e,(r,i,s,o)=>{Bm(t,r,i,s,o)},r=>{Um(t,r)},r=>{jR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_C(t.repoInfo_,()=>new yP(t.stats_,t.server_)),t.infoData_=new hP,t.infoSyncTree_=new Mm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=So(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ih(t,"connected",!1),t.serverSyncTree_=new Mm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);xt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function zR(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(t){return _R({timestamp:zR(t)})}function Bm(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ka(n,c=>ve(c));o=fR(t.serverSyncTree_,s,l,i)}else{const l=ve(n);o=k0(t.serverSyncTree_,s,l,i)}else if(r){const l=Ka(n,c=>ve(c));o=cR(t.serverSyncTree_,s,l)}else{const l=ve(n);o=So(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ri(t,s)),xt(t.eventQueue_,a,o)}function Um(t,e){ih(t,"connected",e),e===!1&&KR(t)}function jR(t,e){De(e,(n,r)=>{ih(t,n,r)})}function ih(t,e,n){const r=new K("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=So(t.infoSyncTree_,r,i);xt(t.eventQueue_,r,s)}function sh(t){return t.nextWriteId_++}function WR(t,e,n){const r=pR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ve(i).withIndex(e._queryParams.getIndex());hR(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=So(t.serverSyncTree_,e._path,s);else{const a=oo(t.serverSyncTree_,e);o=k0(t.serverSyncTree_,e._path,s,a)}return xt(t.eventQueue_,e._path,o),b0(t.serverSyncTree_,e,n,null,!0),s},i=>(Co(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function $R(t,e,n,r,i){Co(t,"set",{path:e.toString(),value:n,priority:r});const s=Yl(t),o=ve(n,r),a=Kf(t.serverSyncTree_,e),l=R0(o,a,s),c=sh(t),u=I0(t.serverSyncTree_,e,l,c,!0);rh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const v=f==="ok";v||Ge("set at "+e+" failed: "+f);const y=Un(t.serverSyncTree_,c,!v);xt(t.eventQueue_,e,y),sd(t,i,f,p)});const d=ah(t,e);Ri(t,d),xt(t.eventQueue_,d,[])}function GR(t,e,n,r){Co(t,"update",{path:e.toString(),value:n});let i=!0;const s=Yl(t),o={};if(De(n,(a,l)=>{i=!1,o[a]=P0(ae(e,a),ve(l),t.serverSyncTree_,s)}),i)Re("update() called with empty data.  Don't do anything."),sd(t,r,"ok",void 0);else{const a=sh(t),l=lR(t.serverSyncTree_,e,o,a);rh(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ge("update at "+e+" failed: "+c);const f=Un(t.serverSyncTree_,a,!d),p=f.length>0?Ri(t,e):e;xt(t.eventQueue_,p,f),sd(t,r,c,u)}),De(n,c=>{const u=ah(t,ae(e,c));Ri(t,u)}),xt(t.eventQueue_,e,[])}}function KR(t){Co(t,"onDisconnectEvents");const e=Yl(t),n=sl();Xu(t.onDisconnect_,W(),(i,s)=>{const o=P0(i,s,t.serverSyncTree_,e);l0(n,i,o)});let r=[];Xu(n,W(),(i,s)=>{r=r.concat(So(t.serverSyncTree_,i,s));const o=ah(t,i);Ri(t,o)}),t.onDisconnect_=sl(),xt(t.eventQueue_,W(),r)}function qR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BR)}function Co(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function sd(t,e,n,r){e&&ji(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function M0(t,e,n){return Kf(t.serverSyncTree_,e,n)||N.EMPTY_NODE}function oh(t,e=t.transactionQueueTree_){if(e||Ql(t,e),$i(e)){const n=B0(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&YR(t,To(e),n)}else A0(e)&&Kl(e,n=>{oh(t,n)})}function YR(t,e,n){const r=n.map(c=>c.currentWriteId),i=M0(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];x(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=je(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Co(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Un(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ql(t,th(t.transactionQueueTree_,e)),oh(t,t.transactionQueueTree_),xt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)ji(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ri(t,e)}},o)}function Ri(t,e){const n=F0(t,e),r=To(n),i=B0(t,n);return QR(t,i,r),r}function QR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=je(n,l.path);let u=!1,d;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=UR)u=!0,d="maxretry",i=i.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else{const f=M0(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ql("transaction failed: Data returned ",p,l.path);let v=ve(p);typeof p=="object"&&p!=null&&Qt(p,".priority")||(v=v.updatePriority(f.getPriority()));const R=l.currentWriteId,m=Yl(t),h=R0(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=sh(t),o.splice(o.indexOf(R),1),i=i.concat(I0(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Un(t.serverSyncTree_,R,!0))}else u=!0,d="nodata",i=i.concat(Un(t.serverSyncTree_,l.currentWriteId,!0))}xt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ql(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ji(r[a]);oh(t,t.transactionQueueTree_)}function F0(t,e){let n,r=t.transactionQueueTree_;for(n=V(e);n!==null&&$i(r)===void 0;)r=th(r,n),e=Y(e),n=V(e);return r}function B0(t,e){const n=[];return U0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function U0(t,e,n){const r=$i(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Kl(e,i=>{U0(t,i,n)})}function Ql(t,e){const n=$i(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,N0(e,n.length>0?n:void 0)}Kl(e,r=>{Ql(t,r)})}function ah(t,e){const n=To(F0(t,e)),r=th(t.transactionQueueTree_,e);return IR(r,i=>{Wc(t,i)}),Wc(t,r),D0(r,i=>{Wc(t,i)}),n}function Wc(t,e){const n=$i(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?N0(e,void 0):n.length=s+1,xt(t.eventQueue_,To(e),i);for(let o=0;o<r.length;o++)ji(r[o])}}/**
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
 */function JR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function XR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vm=function(t,e){const n=ZR(t),r=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new W_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},ZR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=JR(t.substring(u,d)));const f=XR(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class eN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class tN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class nN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class lh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:Lf(this._path)}get ref(){return new Sn(this._repo,this._path)}get _queryIdentifier(){const e=Sm(this._queryParams),n=Nf(e);return n==="{}"?"default":n}get _queryObject(){return Sm(this._queryParams)}isEqual(e){if(e=O(e),!(e instanceof lh))return!1;const n=this._repo===e._repo,r=e0(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zC(this._path)}}class Sn extends lh{constructor(e,n){super(e,n,new Uf,!1)}get parent(){const e=Z_(this._path);return e===null?null:new Sn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ao{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=od(this.ref,e);return new ao(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ao(i,od(this.ref,r),le)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jl(t,e){return t=O(t),t._checkNotDeleted("ref"),e!==void 0?od(t._root,e):t._root}function od(t,e){return t=O(t),V(t._path)===null?AR("child","path",e):L0("child","path",e),new Sn(t._repo,ae(t._path,e))}function rN(t,e){t=O(t),DR("set",t._path),PR("set",e,t._path);const n=new go;return $R(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function V0(t,e){NR("update",e,t._path);const n=new go;return GR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Xl(t){t=O(t);const e=new nN(()=>{}),n=new ch(e);return WR(t._repo,t,n).then(r=>new ao(r,new Sn(t._repo,t._path),t._queryParams.getIndex()))}class ch{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new eN("value",this,new ao(e.snapshotNode,new Sn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new tN(this,e,n):null}matches(e){return e instanceof ch?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}eR(Sn);sR(Sn);/**
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
 */const iN="FIREBASE_DATABASE_EMULATOR_HOST",ad={};let sN=!1;function oN(t,e,n,r){t.repoInfo_=new W_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function aN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vm(s,i),a=o.repoInfo,l;typeof process<"u"&&lm&&(l=lm[iN]),l?(s=`http://${l}?ns=${a.namespace}`,o=Vm(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new gC(t.name,t.options,e);OR("Invalid Firebase Database URL",o),B(o.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=cN(a,t,c,new mC(t.name,n));return new uN(u,t)}function lN(t,e){const n=ad[e];(!n||n[t.key]!==t)&&wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qR(t),delete n[t.key]}function cN(t,e,n,r){let i=ad[e.name];i||(i={},ad[e.name]=i);let s=i[t.toURLString()];return s&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VR(t,sN,n,r),i[t.toURLString()]=s,s}class uN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sn(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function dN(t=_y(),e){const n=uf(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=tI("database");r&&fN(n,...r)}return n}function fN(t,e,n,r={}){t=O(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ya(ya.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:nI(r.mockUserToken,t.app.options.projectId);s=new ya(o)}oN(i,e,n,s)}/**
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
 */function hN(t){ZT(Bi),bi(new Ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return aN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Jn(cm,um,t),Jn(cm,um,"esm2017")}fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hN();/*! Capacitor: https://capacitorjs.com/ - MIT License */const pN=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,o)=>{n.platforms.set(s,o)},i=s=>{n.platforms.has(s)&&(n.currentPlatform=n.platforms.get(s))};return n.addPlatform=r,n.setPlatform=i,n},mN=t=>t.CapacitorPlatforms=pN(t),H0=mN(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});H0.addPlatform;H0.setPlatform;var Ni;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Ni||(Ni={}));class $c extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const gN=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},vN=t=>{var e,n,r,i,s;const o=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},l=a.Plugins=a.Plugins||{},c=t.CapacitorPlatforms,u=()=>o!==null?o.name:gN(t),d=((e=c==null?void 0:c.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||u,f=()=>d()!=="web",p=((n=c==null?void 0:c.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||f,v=I=>{const b=_.get(I);return!!(b!=null&&b.platforms.has(d())||m(I))},y=((r=c==null?void 0:c.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||v,R=I=>{var b;return(b=a.PluginHeaders)===null||b===void 0?void 0:b.find(H=>H.name===I)},m=((i=c==null?void 0:c.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||R,h=I=>t.console.error(I),g=(I,b,H)=>Promise.reject(`${H} does not have an implementation of "${b}".`),_=new Map,k=(I,b={})=>{const H=_.get(I);if(H)return console.warn(`Capacitor plugin "${I}" already registered. Cannot register plugins twice.`),H.proxy;const D=d(),fe=m(I);let me;const Ft=async()=>(!me&&D in b?me=typeof b[D]=="function"?me=await b[D]():me=b[D]:o!==null&&!me&&"web"in b&&(me=typeof b.web=="function"?me=await b.web():me=b.web),me),Qe=(P,M)=>{var j,Oe;if(fe){const Ee=fe==null?void 0:fe.methods.find(Ce=>M===Ce.name);if(Ee)return Ee.rtype==="promise"?Ce=>a.nativePromise(I,M.toString(),Ce):(Ce,Je)=>a.nativeCallback(I,M.toString(),Ce,Je);if(P)return(j=P[M])===null||j===void 0?void 0:j.bind(P)}else{if(P)return(Oe=P[M])===null||Oe===void 0?void 0:Oe.bind(P);throw new $c(`"${I}" plugin is not implemented on ${D}`,Ni.Unimplemented)}},pr=P=>{let M;const j=(...Oe)=>{const Ee=Ft().then(Ce=>{const Je=Qe(Ce,P);if(Je){const It=Je(...Oe);return M=It==null?void 0:It.remove,It}else throw new $c(`"${I}.${P}()" is not implemented on ${D}`,Ni.Unimplemented)});return P==="addListener"&&(Ee.remove=async()=>M()),Ee};return j.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(j,"name",{value:P,writable:!1,configurable:!1}),j},Tn=pr("addListener"),Cn=pr("removeListener"),S=(P,M)=>{const j=Tn({eventName:P},M),Oe=async()=>{const Ce=await j;Cn({eventName:P,callbackId:Ce},M)},Ee=new Promise(Ce=>j.then(()=>Ce({remove:Oe})));return Ee.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Oe()},Ee},A=new Proxy({},{get(P,M){switch(M){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return fe?S:Tn;case"removeListener":return Cn;default:return pr(M)}}});return l[I]=A,_.set(I,{name:I,proxy:A,platforms:new Set([...Object.keys(b),...fe?[D]:[]])}),A},T=((s=c==null?void 0:c.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||k;return a.convertFileSrc||(a.convertFileSrc=I=>I),a.getPlatform=d,a.handleError=h,a.isNativePlatform=p,a.isPluginAvailable=y,a.pluginMethodNoop=g,a.registerPlugin=T,a.Exception=$c,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},yN=t=>t.Capacitor=vN(t),En=yN(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Po=En.registerPlugin;En.Plugins;class z0{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new En.Exception(e,Ni.Unimplemented)}unavailable(e="not available"){return new En.Exception(e,Ni.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const Hm=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),zm=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class _N extends z0{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=zm(i).trim(),s=zm(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=Hm(e.key),r=Hm(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Po("CapacitorCookies",{web:()=>new _N});const wN=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),EN=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},xN=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let a,l;return Array.isArray(o)?(l="",o.forEach(c=>{a=e?encodeURIComponent(c):c,l+=`${s}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${s}=${a}`),`${r}&${l}`},"").substr(1):null,IN=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=EN(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,a]of Object.entries(t.data||{}))s.set(o,a);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((a,l)=>{s.append(l,a)});else for(const a of Object.keys(t.data))s.append(a,t.data[a]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class bN extends z0{async request(e){const n=IN(e,e.webFetchExtra),r=xN(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:a="text"}=s.ok?e:{};o.includes("application/json")&&(a="json");let l,c;switch(a){case"arraybuffer":case"blob":c=await s.blob(),l=await wN(c);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const u={};return s.headers.forEach((d,f)=>{u[f]=d}),{data:l,headers:u,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Po("CapacitorHttp",{web:()=>new bN});const uh=Po("Browser",{web:()=>qn(()=>import("./web-Dh-tvasU.js"),[],import.meta.url).then(t=>new t.BrowserWeb)}),kN=Po("App",{web:()=>qn(()=>import("./web-BC36hUBr.js"),[],import.meta.url).then(t=>new t.AppWeb)});var jm;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(jm||(jm={}));var Wm;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(Wm||(Wm={}));const j0=Po("FirebaseAuthentication",{web:()=>qn(()=>import("./web-DPnKIbRj.js"),[],import.meta.url).then(t=>new t.FirebaseAuthenticationWeb)}),SN={apiKey:"AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",authDomain:"kuryeprov44.firebaseapp.com",databaseURL:"https://kuryeprov44-default-rtdb.firebaseio.com",projectId:"kuryeprov44",storageBucket:"kuryeprov44.firebasestorage.app",messagingSenderId:"177653241936",appId:"1:177653241936:web:4130a534c4bf7cb05fd955",measurementId:"G-313RD4XLZW"},W0=yy(SN),nr=P_(W0),Ro=dN(W0);function dh(t){t&&(localStorage.setItem("firebase_uid",t.uid),localStorage.setItem("user_name",t.displayName||"Kullanıcı"),localStorage.setItem("user_email",t.email||""))}En.isNativePlatform()&&kN.addListener("appUrlOpen",async t=>{const e=t.url;if(e.startsWith("kuryepro://auth")){const n=new URL(e).searchParams,r=n.get("uid"),i=n.get("name"),s=n.get("email");if(r){localStorage.setItem("firebase_uid",r),localStorage.setItem("user_name",i||"Kullanıcı"),localStorage.setItem("user_email",s||"");try{await uh.close()}catch{}window.location.reload()}}});async function TN(){var i,s;const t=await j0.signInWithGoogle();if(!t||!t.user)throw new Error("Native Google sign-in başarısız.");let e=t.user;const n=(i=t.credential)==null?void 0:i.idToken,r=(s=t.credential)==null?void 0:s.accessToken;if(n||r)try{const o=zt.credential(n||void 0,r||void 0),a=await wo(nr,o);a!=null&&a.user&&(e=a.user)}catch(o){console.warn("JS SDK oturumu açılamadı, native kullanıcı ile devam ediliyor.",o)}return await fh(e),dh(e),{success:!0,user:e}}async function $0(t={}){try{if(En.isNativePlatform())return await TN();if(new URLSearchParams(window.location.search).get("mode")==="login"){const{GoogleAuthProvider:n,signInWithRedirect:r}=await qn(async()=>{const{GoogleAuthProvider:s,signInWithRedirect:o}=await Promise.resolve().then(()=>Fc);return{GoogleAuthProvider:s,signInWithRedirect:o}},void 0,import.meta.url),i=new n;return await r(nr,i),{type:"redirect"}}else{const{GoogleAuthProvider:n,signInWithPopup:r}=await qn(async()=>{const{GoogleAuthProvider:s,signInWithPopup:o}=await Promise.resolve().then(()=>Fc);return{GoogleAuthProvider:s,signInWithPopup:o}},void 0,import.meta.url),i=new n;try{const s=await r(nr,i);return await fh(s.user),dh(s.user),{success:!0,user:s.user}}catch{const{signInWithRedirect:o}=await qn(async()=>{const{signInWithRedirect:a}=await Promise.resolve().then(()=>Fc);return{signInWithRedirect:a}},void 0,import.meta.url);return await o(nr,i),{type:"redirect"}}}}catch(e){return console.error("Login Error:",e),En.isNativePlatform()?(await uh.open({url:"https://kuryeprov44.web.app/?mode=login",presentationStyle:"popover"}),{type:"external_browser",error:String(e)}):{success:!1,error:(e==null?void 0:e.message)||String(e)}}}async function G0(){try{const t=await E_(nr);return!t||!t.user?{handled:!1}:(await fh(t.user),dh(t.user),{handled:!0,user:t.user})}catch(t){return console.error("Redirect Error:",t),{handled:!1,error:(t==null?void 0:t.message)||String(t)}}}async function ld(){if(En.isNativePlatform())try{await j0.signOut()}catch(t){console.warn(t)}await c_(nr),localStorage.removeItem("firebase_uid"),localStorage.removeItem("user_name"),localStorage.removeItem("user_email")}async function fh(t){const e=Jl(Ro,"users/"+t.uid),n=await Xl(e),r=new Date().toISOString();n.exists()?await V0(e,{lastLogin:r,displayName:t.displayName,photoURL:t.photoURL,email:t.email}):await rN(e,{uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,role:"user",isBanned:!1,dailyLimit:1e3,createdAt:r,lastLogin:r}),localStorage.setItem("firebase_uid",t.uid)}async function cd(t){const e=t||localStorage.getItem("firebase_uid");if(!e)return{allowed:!1,reason:"Giriş yapılmamış.",status:"login_required"};try{const n=await Xl(Jl(Ro,"users/"+e));if(n.exists()){const r=n.val();return r.isBanned?{allowed:!1,reason:"HESABINIZ YASAKLANMIŞTIR.",status:"banned"}:{allowed:!0,data:r}}return{allowed:!1,reason:"Kullanıcı kaydı bulunamadı.",status:"login_required"}}catch{return{allowed:!1,reason:"Sunucu hatası."}}}async function CN(t=null){const e=t||localStorage.getItem("firebase_uid");if(!e)return{allowed:!1};try{const n=await Xl(Jl(Ro,"users/"+e));if(!n.exists())return{allowed:!1};const r=n.val();if(r.role==="admin")return{allowed:!0,limit:9999,usage:0};const i=r.dailyLimit===void 0?1e3:r.dailyLimit,s=new Date().toISOString().split("T")[0];let o=0;return r.lastQueryDate===s&&(o=r.queryCount||0),o>=i?{allowed:!1,limit:i,usage:o}:{allowed:!0,limit:i,usage:o}}catch(n){return console.error("Limit check error",n),{allowed:!1}}}async function PN(t=null){const e=t||localStorage.getItem("firebase_uid");if(!e)return!1;try{const n=Jl(Ro,"users/"+e),r=await Xl(n);if(!r.exists())return!1;const i=r.val();if(i.role==="admin")return!0;const s=new Date().toISOString().split("T")[0];let o=0;i.lastQueryDate===s&&(o=i.queryCount||0);const a=i.dailyLimit===void 0?1e3:i.dailyLimit;return o<a?(await V0(n,{lastQueryDate:s,queryCount:o+1}),!0):!1}catch{return!1}}const K0=Object.freeze(Object.defineProperty({__proto__:null,auth:nr,checkUserStatus:cd,db:Ro,handleRedirectResult:G0,hasRemainingLimit:CN,incrementLimitUsage:PN,loginWithGoogle:$0,logoutUser:ld},Symbol.toStringTag,{value:"Module"})),RN="yal42d-debug",NN="kurye_pro",AN=`https://raw.githubusercontent.com/${RN}/${NN}/main/updates`;async function q0(){await G0();const t=localStorage.getItem("firebase_uid");if(t){const e=await cd(t);if(e.allowed)return{allowed:!0,user:e.data,status:"authorized"};if(e.status==="banned")return await ld(),{allowed:!1,reason:e.reason,status:"banned"}}return new Promise(e=>{const n=nr.onAuthStateChanged(async r=>{if(n(),r){const i=await cd(r.uid);i.allowed?e({allowed:!0,user:i.data,status:"authorized"}):(await ld(),e({allowed:!1,reason:i.reason,status:i.status}))}else e({allowed:!1,reason:"Giriş Yapılmalı",status:"login_required"})})})}async function Y0(t={}){return await $0(t)}async function DN(){const t=await q0();if(!t.allowed)throw new Error(t.reason);const e=await fetch(`${AN}/secure_db.txt?t=${Date.now()}`);if(!e.ok)throw new Error("Veri indirilemedi.");const r=(await e.text()).match(/encryptedData\s*=\s*"([^"]+)"/);if(r&&r[1]){const i=r[1];if(i.startsWith("KRYSEC_")){const s=i.replace("KRYSEC_","").split("").reverse().join(""),o=decodeURIComponent(escape(window.atob(s)));return JSON.parse(o)}}throw new Error("Veri formatı hatalı.")}function ON(){typeof document>"u"||document.body.classList.add("min-h-screen","pb-32","bg-[#0f172a]")}function LN(){typeof window>"u"||Object.assign(window,{addCalculatedToPayment:A1,addCheckItem:JN,addDialerNumber:F1,addFuelEntry:d1,addNote:y1,addRepeatTransaction:VN,backupData:o1,calculateFuelConsumption:c1,calculateFutureBalance:D1,calculateMaintenance:nw,calculatePerf:ec,calculateProfit:hr,callDialerNumber:U1,changeDays:e1,changeMonth:WN,changePacketCount:n1,changeSimulationDays:N1,clearDialerHistory:H1,clearFuelForm:h1,clearFuelHistory:f1,clearPacketInputs:T1,clearTransactionHistory:C1,closeDialerModal:M1,closeNoteModal:g1,deleteAccumulatedPayment:m1,deleteCheckItem:XN,deleteNote:_1,deleteRepeatTransaction:HN,goToToday:$N,loadDoors:uw,loadStreets:cw,openDialerModal:L1,openExternalMap:K1,openGoogleWeather:KN,openNoteModal:Ao,posTetikle:R1,processPayment:zN,quickSearchAddress:z1,selectQuickResult:j1,removeDialerNumber:B1,resetAllCounters:r1,resetPerfForm:x1,resetPriceDefaults:P1,restoreData:a1,saveExpenses:s1,saveFinancialData:X0,saveFuelUnitData:u1,saveOrderHistory:V1,savePerfMemoryAuto:vh,savePriceSettings:ow,scrollToResults:k1,searchAndShowMap:dw,setDurationMode:J0,setNoteType:v1,setPerfTime:E1,switchChecklist:QN,switchTab:S1,toggleCheckItem:rw,toggleManualMode:I1,toggleMapModal:$1,toggleSettings:b1,toggleSideDock:O1,updateEarningCalculation:Di})}let Rt=4,vt={single:110,multi:40,avm:10,night:20},hl="weekday",_e={},jt=null,Q0="expense",lo=new Date,No="start",zr=[],jr=[],ft={currentKm:0,lastOilKm:0,oilInterval:2e3},Ue={single:0,multi:0},re={},Gt=[],Ie={fuel:250,extra:"",extraVatOnly1:"",extraVatOnly2:"",vatDescription:"",maint:3e3,acc:1e3,other:""},Fe="day";const Dn=[{min:0,max:19,weekday:0,friday:0,saturday:0,sunday:0},{min:20,max:21,weekday:207,friday:289,saturday:434,sunday:521},{min:22,max:25,weekday:259,friday:363,saturday:545,sunday:654},{min:26,max:29,weekday:317,friday:444,saturday:665,sunday:798},{min:30,max:33,weekday:379,friday:531,saturday:796,sunday:955},{min:34,max:37,weekday:446,friday:624,saturday:936,sunday:1123},{min:38,max:41,weekday:517,friday:723,saturday:1085,sunday:1302},{min:42,max:45,weekday:592,friday:829,saturday:1243,sunday:1492},{min:46,max:49,weekday:671,friday:940,saturday:1410,sunday:1692},{min:50,max:53,weekday:783,friday:1096,saturday:1644,sunday:1973},{min:54,max:57,weekday:931,friday:1303,saturday:1954,sunday:2345},{min:58,max:61,weekday:1089,friday:1524,saturday:2286,sunday:2744},{min:62,max:65,weekday:1257,friday:1760,saturday:2640,sunday:3168},{min:66,max:69,weekday:1435,friday:2009,saturday:3014,sunday:3617},{min:70,max:999,weekday:1623,friday:2272,saturday:3408,sunday:4089}];let xn=[],On=10,Wt=[];function MN(){ZN(),sw(),i1(),jN(),YN(),qN(),GN(),hr(),Jt(),nw(),w1(),t1(),l1(),BN(),UN(),Zl(),aw(),hh(),FN(),J0("day");const t=document.getElementById("scrollDirectionBtn"),e=document.getElementById("scrollDirectionIcon");let n="bottom";t&&e&&(window.addEventListener("scroll",function(){const r=window.scrollY,i=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);r<i/2?(n="bottom",e.className="fa-solid fa-arrow-down"):(n="top",e.className="fa-solid fa-arrow-up"),t.classList.toggle("visible",r>100)},{passive:!0}),t.addEventListener("click",function(){window.scrollTo({top:n==="bottom"?document.body.scrollHeight:0,behavior:"smooth"})})),W1()}function J0(t){Fe=t,["btnDurDay","btnDurWeek","btnDurMonth"].forEach(n=>{document.getElementById(n).classList.remove("active"),document.getElementById(n).classList.add("inactive")});const e=t==="day"?"btnDurDay":t==="week"?"btnDurWeek":"btnDurMonth";document.getElementById(e).classList.add("active"),document.getElementById(e).classList.remove("inactive"),t==="day"?Rt=0:t==="week"?Rt=1:Rt=4,document.getElementById("daysOffDisplay").innerText=Rt,hr()}function FN(){const t=["manualPaymentDate","packetPaymentDate"],e=new Date,n=[];let r=new Date(e);for(;r.getDay()!==3;)r.setDate(r.getDate()+1);for(let i=0;i<4;i++){const s=r.toISOString().split("T")[0],o=r.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"});n.push({value:s,label:o}),r.setDate(r.getDate()+7)}t.forEach(i=>{const s=document.getElementById(i);s&&(s.innerHTML="",n.forEach(o=>{const a=document.createElement("option");a.value=o.value,a.innerText=o.label,s.appendChild(a)}))})}function BN(){const t=JSON.parse(localStorage.getItem("kurye_financial")||"{}");t.bank&&(document.getElementById("bankAccount").value=t.bank),t.debt&&(document.getElementById("creditDebt").value=t.debt),Z0()}function X0(){const t={bank:parseFloat(document.getElementById("bankAccount").value)||0,debt:parseFloat(document.getElementById("creditDebt").value)||0};localStorage.setItem("kurye_financial",JSON.stringify(t)),Z0()}function Z0(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;document.getElementById("netBalance").innerText=(t-e).toLocaleString("tr-TR")+" ₺"}function UN(){const t=localStorage.getItem("kurye_repeat");t&&(xn=JSON.parse(t))}function VN(){const t=document.getElementById("repeatDay").value,e=document.getElementById("repeatDesc").value,n=parseFloat(document.getElementById("repeatAmount").value),r=document.getElementById("repeatType").value;if(!t||!e){const i=document.querySelector(".simulation-card");i.classList.add("shake-animation"),setTimeout(()=>i.classList.remove("shake-animation"),500);return}xn.push({day:t,description:e,amount:n||0,type:r}),localStorage.setItem("kurye_repeat",JSON.stringify(xn)),ew(),Jt(),He("Eklendi","Tekrarlayan işlem kaydedildi.")}function ew(){const t=document.getElementById("repeatTransactionsList");t.innerHTML="",xn.forEach((e,n)=>{let r=e.type==="income"?"GELİR (+)":e.type==="expense"?"GİDER (-)":"AKTİVİTE",i=e.type==="income"?"text-green-400":e.type==="expense"?"text-red-400":"text-yellow-400",s=e.type==="activity"?"":e.type==="income"?`+${e.amount}₺`:`-${e.amount}₺`;t.innerHTML+=`
                    <div class="bg-slate-800/50 p-2 rounded-lg flex justify-between items-center border border-white/5">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[10px] text-gray-400">Her ayın ${e.day}. günü • <span class="${i} font-bold">${r} ${s}</span></div>
                        </div>
                        <button onclick="deleteRepeatTransaction(${n})" class="text-gray-500 hover:text-red-400"><i class="fa-solid fa-trash"></i></button>
                    </div>`})}function HN(t){xn.splice(t,1),localStorage.setItem("kurye_repeat",JSON.stringify(xn)),ew(),Jt()}function Zl(){const t=localStorage.getItem("kurye_accumulated_payments");t&&(re=JSON.parse(t));const e=localStorage.getItem("kurye_transaction_history");e&&(Gt=JSON.parse(e));const n=Object.keys(re).sort();let r=n.length>0?n[0]:"--.--.----",i=n.length>0?re[r]:0,s=0;for(let a in re)s+=re[a];document.getElementById("nextPaymentAmount").innerText=i.toLocaleString("tr-TR")+" ₺",document.getElementById("nextPaymentDate").innerText=r.split("-").reverse().join("."),document.getElementById("accumulatedTotal").innerText=s.toLocaleString("tr-TR")+" ₺";const o=new Date().toISOString().split("T")[0];n.includes(o)?(document.getElementById("paymentDayInfo").innerText="BUGÜN ÖDEME GÜNÜ",document.getElementById("paymentDayInfo").className="font-bold text-emerald-400 animate-pulse"):(document.getElementById("paymentDayInfo").innerText="Her Çarşamba",document.getElementById("paymentDayInfo").className="font-bold text-purple-400"),tw()}async function zN(){const t=Object.keys(re).sort();if(t.length===0){He("Bilgi","Ödenecek tutar yok.");return}const e=t[0],n=re[e];if(!await Gi(`₺${n.toLocaleString("tr-TR")} tutarındaki ${e} tarihli ödemeyi banka hesabına aktarmak istiyor musunuz?`,"Ödeme Al"))return;let i=parseFloat(document.getElementById("bankAccount").value)||0;i+=n,document.getElementById("bankAccount").value=i,delete re[e],Gt.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"payment",amount:n,description:"Banka Aktarımı"}),X0(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(re)),localStorage.setItem("kurye_transaction_history",JSON.stringify(Gt)),Zl(),Jt(),He("Başarılı","Ödeme banka hesabına eklendi.")}function tw(){const t=document.getElementById("transactionHistory");t.innerHTML="",Gt.length===0&&(t.innerHTML='<div class="text-center text-[10px] text-gray-500 italic py-4">İşlem yok.</div>'),Gt.forEach(e=>{let n=e.type==="income"?"transaction-income":e.type==="payment"?"transaction-payment":"transaction-expense";t.innerHTML+=`
                    <div class="transaction-history-item ${n} flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[9px] text-gray-400">${e.date}</div>
                        </div>
                        <div class="text-sm font-bold text-white">${e.amount.toLocaleString("tr-TR")} ₺</div>
                    </div>
                `})}function jN(){const t=localStorage.getItem("kurye_calendar");t&&(_e=JSON.parse(t)),hh()}function Jt(){const t=document.getElementById("calendarGrid");t.innerHTML="";const e=lo.getFullYear(),n=lo.getMonth(),r=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];document.getElementById("currentMonthLabel").innerText=r[n],document.getElementById("currentYearLabel").innerText=e;const i=new Date(e,n,1).getDay(),s=i===0?6:i-1,o=new Date(e,n+1,0).getDate();for(let u=0;u<s;u++){const d=document.createElement("div");d.className="calendar-day opacity-50 bg-slate-800/50",t.appendChild(d)}const a=new Date;let l=0,c=0;for(let u=1;u<=o;u++){const d=document.createElement("div");d.className="calendar-day flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 relative",u===a.getDate()&&n===a.getMonth()&&e===a.getFullYear()&&d.classList.add("today"),d.innerHTML=`<span class="text-sm font-bold text-gray-300">${u}</span>`;const f=`${e}-${String(n+1).padStart(2,"0")}-${String(u).padStart(2,"0")}`,p=document.createElement("div");p.className="dots-container",_e[f]&&_e[f].forEach(v=>{v.type==="income"&&(p.innerHTML+='<div class="dot bg-green-500"></div>',l+=v.amount),v.type==="expense"&&(p.innerHTML+='<div class="dot bg-red-500"></div>',c+=v.amount),v.type==="activity"&&(p.innerHTML+='<div class="dot bg-yellow-500"></div>')}),xn.forEach(v=>{parseInt(v.day)===u&&(p.innerHTML+='<div class="dot bg-blue-400"></div>')}),re[f]&&(p.innerHTML+='<div class="dot bg-purple-500 border border-white"></div>'),d.appendChild(p),d.onclick=()=>Ao(f),t.appendChild(d)}document.getElementById("monthlyExtraIncome").innerText="+"+l.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyExpenseSummary").innerText="-"+c.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyNetSummary").innerText=(l-c).toLocaleString("tr-TR")+" ₺",hh()}function WN(t){lo.setMonth(lo.getMonth()+t),Jt()}function $N(){lo=new Date,Jt()}function hh(){const t=document.getElementById("todayActivities"),e=document.getElementById("upcomingActivities"),n=new Date().toISOString().split("T")[0];let r="",i="",s=!1;Object.keys(_e).sort().forEach(l=>{l>=n&&_e[l].forEach(u=>{const d=l===n,p=new Date(l).toLocaleDateString("tr-TR",{day:"numeric",month:"long"});let v="GİDER (-)",y="text-red-400",R=u.amount?`-${u.amount}₺`:"",m="border-red-500/20";u.type==="income"?(v="GELİR (+)",y="text-green-400",R=`+${u.amount}₺`,m="border-green-500/20"):u.type==="activity"&&(v="AKTİVİTE",y="text-yellow-400",R="",m="border-yellow-500/20");const h=`
                        <div onclick="openNoteModal('${l}')" class="activity-item flex items-center justify-between bg-slate-800/60 p-3 rounded-xl border ${m} mb-2 cursor-pointer hover:bg-slate-800">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-bold ${y} border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">${v}</span>
                                    <span class="text-[9px] text-gray-400">${d?"Bugün":p}</span>
                                </div>
                                <p class="text-xs font-bold text-white">${u.note}</p>
                            </div>
                            <span class="text-sm font-bold ${y}">${R}</span>
                        </div>`;d?r+=h:(i+=h,s=!0)})}),Object.keys(re).sort().forEach(l=>{if(l>=n){const c=l===n,d=new Date(l).toLocaleDateString("tr-TR",{day:"numeric",month:"long"}),f=`
                    <div onclick="openNoteModal('${l}')" class="activity-item flex items-center justify-between bg-purple-900/20 p-3 rounded-xl border border-purple-500/30 mb-2 cursor-pointer hover:bg-purple-900/30">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-[10px] font-bold text-purple-400 border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">ÖDEME</span>
                                <span class="text-[9px] text-purple-300">${c?"Bugün":d}</span>
                            </div>
                            <p class="text-xs font-bold text-white">Ödeme Bekliyor</p>
                        </div>
                        <span class="text-sm font-bold text-white">${re[l].toLocaleString("tr-TR")} ₺</span>
                    </div>`;c?r+=f:(i+=f,s=!0)}}),r||(r='<div class="text-center text-xs text-gray-500 italic py-2">Bugün için planlanan bir şey yok.</div>'),s||(i='<div class="text-center text-[10px] text-gray-600 py-2">Yaklaşan kayıt yok.</div>'),t.innerHTML=r,e.innerHTML=i}async function GN(){try{const r=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${37.8714}&longitude=${32.4846}&current_weather=true&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)).json();document.getElementById("currentTemp").innerText=`${Math.round(r.current_weather.temperature)}°`,document.getElementById("currentWeatherDesc").innerText=$m(r.current_weather.weathercode);const i=document.getElementById("hourlyForecast");i.innerHTML="";const s=new Date().getHours();for(let a=0;a<24;a++){const l=new Date(r.hourly.time[a]);l.getHours()>=s&&(i.innerHTML+=`
                            <div class="text-center shrink-0">
                                <div class="bg-slate-800 rounded-xl p-3 min-w-[70px] border border-white/5">
                                    <div class="text-xs font-bold text-gray-300">${l.getHours()}:00</div>
                                    <div class="text-2xl my-2">${Gm(r.hourly.weathercode[a])}</div>
                                    <div class="text-sm font-bold text-white">${Math.round(r.hourly.temperature_2m[a])}°</div>
                                </div>
                            </div>`)}const o=document.getElementById("weeklyForecast");o.innerHTML="";for(let a=0;a<7;a++){const c=new Date(r.daily.time[a]).toLocaleDateString("tr-TR",{weekday:"long"}),u=r.daily.weathercode[a],f=u>=51&&u<=67||u>=80&&u<=82?"weather-row rain-alert-bg p-2 rounded-lg":"weather-row p-2";o.innerHTML+=`
                        <div class="${f} flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="w-6 text-center">${Gm(u)}</span>
                                <div>
                                    <div class="text-xs font-bold text-white">${c}</div>
                                    <div class="text-[10px] text-gray-400">${$m(u)}</div>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-gray-300">
                                <span class="text-white">${Math.round(r.daily.temperature_2m_max[a])}°</span> / ${Math.round(r.daily.temperature_2m_min[a])}°
                            </div>
                        </div>`}}catch(t){console.error("Hava durumu hatası:",t)}}function $m(t){return t===0?"Açık":t>=1&&t<=3?"Parçalı Bulutlu":t>=45&&t<=48?"Sisli":t>=51&&t<=67?"Yağmurlu":t>=71&&t<=77?"Karlı":t>=80&&t<=82?"Sağanak":t>=95?"Fırtına":"Bulutlu"}function Gm(t){return t===0?'<i class="fa-solid fa-sun text-yellow-400"></i>':t>=1&&t<=3?'<i class="fa-solid fa-cloud-sun text-gray-300"></i>':t>=45&&t<=48?'<i class="fa-solid fa-smog text-gray-400"></i>':t>=51&&t<=67?'<i class="fa-solid fa-cloud-rain text-blue-400"></i>':t>=71&&t<=77?'<i class="fa-regular fa-snowflake text-white"></i>':'<i class="fa-solid fa-cloud text-gray-500"></i>'}function KN(){window.open("https://www.google.com/search?q=hava+durumu+konya","_blank")}function qN(){const t=localStorage.getItem("kurye_garage");t&&(ft=JSON.parse(t)),document.getElementById("currentKm").value=ft.currentKm||"",document.getElementById("lastOilKm").value=ft.lastOilKm||"",document.getElementById("oilInterval").value=ft.oilInterval||2e3}function nw(){ft.currentKm=parseFloat(document.getElementById("currentKm").value)||0,ft.lastOilKm=parseFloat(document.getElementById("lastOilKm").value)||0,ft.oilInterval=parseFloat(document.getElementById("oilInterval").value)||2e3,localStorage.setItem("kurye_garage",JSON.stringify(ft));let e=(ft.currentKm-ft.lastOilKm)/ft.oilInterval*100;e>100&&(e=100),e<0&&(e=0);const n=document.getElementById("oilProgressBar");n.style.width=e+"%",document.getElementById("oilPercentText").innerText="%"+e.toFixed(0);const r=document.getElementById("oilStatusText");e<50?(n.className="bg-green-500 h-full transition-all",r.innerText="Durum İyi",r.className="text-green-400 font-bold"):e<80?(n.className="bg-yellow-500 h-full transition-all",r.innerText="Bakım Yaklaşıyor",r.className="text-yellow-400 font-bold"):(n.className="bg-red-500 h-full transition-all",r.innerText="BAKIM GEREKLİ!",r.className="text-red-500 font-bold animate-pulse")}function YN(){const t=localStorage.getItem("kurye_checklist_start"),e=localStorage.getItem("kurye_checklist_end");t&&(zr=JSON.parse(t)),e&&(jr=JSON.parse(e)),Ai()}function QN(t){No=t,document.getElementById("btnCheckStart").className=t==="start"?"toggle-btn active":"toggle-btn inactive",document.getElementById("btnCheckEnd").className=t==="end"?"toggle-btn active":"toggle-btn inactive";const e=document.getElementById("checkHeaderTitle"),n=document.getElementById("checkHeaderSub"),r=document.getElementById("checkHeaderIcon"),i=document.getElementById("checkHeaderCard");t==="start"?(e.innerText="İşe Başlarken",n.innerText="Unutma: Eksik malzeme = Zaman kaybı.",r.className="fa-solid fa-backpack text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",i.className="bg-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/20 transition-colors duration-500"):(e.innerText="İşten Dönerken",n.innerText="Yarına hazırlık bugünden başlar.",r.className="fa-solid fa-moon text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",i.className="bg-purple-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-purple-900/20 transition-colors duration-500"),Ai()}function Ai(){const t=No==="start"?zr:jr,e=document.getElementById("checklistContainer");e.innerHTML="",t.length===0?document.getElementById("emptyListMsg").classList.remove("hidden"):document.getElementById("emptyListMsg").classList.add("hidden"),t.forEach((n,r)=>{const i=document.createElement("div");i.className=`check-item ${n.checked?"checked":""} bg-slate-800 p-3 rounded-xl flex items-center justify-between cursor-pointer`,i.innerHTML=`<span class="font-bold text-sm text-white flex-1">${n.text}</span><button onclick="deleteCheckItem(event, ${r})" class="text-gray-500 hover:text-red-400 p-2"><i class="fa-solid fa-trash"></i></button>`,i.onclick=s=>{s.target.tagName!=="BUTTON"&&s.target.tagName!=="I"&&rw(r)},e.appendChild(i)})}function JN(){const t=document.getElementById("newCheckItem").value;if(!t)return;(No==="start"?zr:jr).push({text:t,checked:!1}),pl(),document.getElementById("newCheckItem").value="",Ai()}function rw(t){const e=No==="start"?zr:jr;e[t].checked=!e[t].checked,pl(),Ai(),e.length>0&&e.every(n=>n.checked)&&(He("Harika!","Tüm ürünler seçildi, çanta hazır!"),setTimeout(()=>{e.forEach(n=>n.checked=!1),pl(),Ai()},1500))}function XN(t,e){t.stopPropagation(),(No==="start"?zr:jr).splice(e,1),pl(),Ai()}function pl(){localStorage.setItem("kurye_checklist_start",JSON.stringify(zr)),localStorage.setItem("kurye_checklist_end",JSON.stringify(jr))}function ZN(){const t=new Date().getDay();ta(t===0?"sunday":t===5?"friday":t===6?"saturday":"weekday")}function ta(t){hl=t;const e={weekday:"Pazartesi - Perşembe",friday:"Cuma Günü",saturday:"Cumartesi Günü",sunday:"Pazar Günü"};document.getElementById("selectedDayLabel")&&(document.getElementById("selectedDayLabel").innerText=e[t]),document.getElementById("speedDayLabel")&&(document.getElementById("speedDayLabel").innerText=e[t]),hr(),typeof Di=="function"&&Di()}function e1(t){Rt+=t,Rt<0&&(Rt=0),Rt>30&&(Rt=30),document.getElementById("daysOffDisplay").innerText=Rt,Fe="month",["btnDurDay","btnDurWeek","btnDurMonth"].forEach(e=>{document.getElementById(e).classList.remove("active"),document.getElementById(e).classList.add("inactive")}),hr()}function hr(){let t;Fe==="day"?t=1:Fe==="week"?t=6:t=30-Rt,document.getElementById("calculatedWorkDays").innerText=t;const e=parseFloat(document.getElementById("dailyFuel").value)||0,n=parseFloat(document.getElementById("extraVat").value)||0,r=parseFloat(document.getElementById("extraVatOnly1").value)||0,i=parseFloat(document.getElementById("extraVatOnly2").value)||0,s=parseFloat(document.getElementById("maintCost").value)||0,o=parseFloat(document.getElementById("accCost").value)||0,a=parseFloat(document.getElementById("otherCost").value)||0;let l=0;if(document.getElementById("manualModeToggle").checked)l=parseFloat(document.getElementById("manualIncomeVal").value)||0;else{const b=parseFloat(document.getElementById("single").value)||0,H=parseFloat(document.getElementById("multi").value)||0,D=parseFloat(document.getElementById("avm").value)||0,fe=parseFloat(document.getElementById("night").value)||0,me=parseFloat(document.getElementById("avgKmProfit").value)||0,Ft=oy(me);me>0?(document.getElementById("profitKmInfo").style.display="block",document.getElementById("profitKmRate").innerText=`${Ft} TL/km`):document.getElementById("profitKmInfo").style.display="none";const Qe=b+H,pr=Qe*me*Ft,Tn=b*vt.single+H*vt.multi,Cn=D*vt.avm+fe*vt.night+pr,S=Tn+Cn,A=Uu(Qe,Dn,hl).current,P=S+A;document.getElementById("dispDailyMoney").innerText=P.toLocaleString("tr-TR"),document.getElementById("dispTotalPackets").innerText=Qe,document.getElementById("bonusAmount").innerText=A.toLocaleString("tr-TR");const M=Uu(Qe,Dn,hl),j=document.getElementById("bonusBar"),Oe=document.getElementById("nextBonusPkt");if(document.getElementById("currentTierInfo").innerText=M.current.toLocaleString("tr-TR")+" TL",M.nextTarget>0){let vw=Math.min(100,Qe/M.nextTarget*100);j.style.width=`${vw}%`,Oe.innerText=M.nextTarget,document.getElementById("nextTierInfo").innerText=M.nextValue.toLocaleString("tr-TR")+" TL"}else j.style.width="100%",Oe.innerText="MAX",document.getElementById("nextTierInfo").innerText="MAX";const Ee=Qo(Qe,Dn,"weekday"),Ce=Qo(Qe,Dn,"friday"),Je=Qo(Qe,Dn,"saturday"),It=Qo(Qe,Dn,"sunday"),hw=S+Ee,pw=S+Ce,mw=S+Je,gw=S+It,wh=(hw*18+pw*4+mw*4+gw*4)/30;Fe==="day"?l=P:l=wh*t}let u=0,d=0;Fe==="day"?(u=0,d=0):Fe==="week"?(u=s/4,d=o/4):(u=s,d=o);const f=.2;let p=e;Fe==="week"?p=e*7:Fe==="month"&&(p=e*t);const v=Fe==="day"?n/30:Fe==="week"?n/4:n,y=Fe==="day"?a/30:Fe==="week"?a/4:a,R=Fe==="day"?(r+i)/30:Fe==="week"?(r+i)/4:r+i,m=p+v,h=u+d+y,g=m+h+R,_=l-l/(1+f),k=m-m/(1+f),T=Math.max(0,_-k-R),I=l-g-T;document.getElementById("resGross").innerText=l.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resExpenses").innerText=g.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resVatDeductions").innerText=(R+k).toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resVat").innerText=T.toLocaleString("tr-TR",{maximumFractionDigits:0}),document.getElementById("resNet").innerText=I.toLocaleString("tr-TR",{maximumFractionDigits:0})}function t1(){const t=localStorage.getItem("kurye_packet_counter");t?Ue=JSON.parse(t):Ue={single:0,multi:0},ph(),mh();const e=localStorage.getItem("kurye_instant_fuel");e!==null&&(document.getElementById("perfFuelInput").value=e),Di()}function iw(){localStorage.setItem("kurye_packet_counter",JSON.stringify(Ue)),aw()}function n1(t,e){Ue[t]+=e,Ue[t]<0&&(Ue[t]=0),ph(),mh(),Di(),iw()}async function r1(){await Gi("Tüm paket sayaçlarını sıfırlamak istediğinize emin misiniz?","Sayaç Sıfırlama")&&(Ue={single:0,multi:0},ph(),mh(),localStorage.setItem("kurye_instant_fuel",250),document.getElementById("perfFuelInput").value=250,Di(),iw(),He("Sıfırlandı","Tüm sayaçlar temizlendi."))}function ph(){document.getElementById("counterSingle").textContent=Ue.single,document.getElementById("counterMulti").textContent=Ue.multi,document.getElementById("totalPacketsCounter").textContent=Ue.single+Ue.multi}function mh(){const t=Ue.single+Ue.multi;document.getElementById("perfPacketCount")&&(document.getElementById("perfPacketCount").value=t,ec())}function Di(){var g,_;const e=Ue.single||0,n=Ue.multi||0,r=e+n,i=parseFloat((g=document.getElementById("avgKmInput"))==null?void 0:g.value)||0;i&&localStorage.setItem("kurye_avg_km_perf",i);const s=oy(i),o=r*i*s,a=e*vt.single,l=n*vt.multi,u=Uu(r,Dn,hl).current,d=a+l+o+u,f=d/(1+.2),p=d-f,v=parseFloat((_=document.getElementById("perfFuelInput"))==null?void 0:_.value)||0;v&&localStorage.setItem("kurye_instant_fuel",v);const y=v/(1+.2),R=v-y,m=f-y,h=d-v;document.getElementById("singleCountDisplay").innerText=e,document.getElementById("multiCountDisplay").innerText=n,document.getElementById("earnSingle").innerText=a+" ₺",document.getElementById("earnMulti").innerText=l+" ₺",document.getElementById("kmUnitPriceDisp").innerText=s+" TL/Km",document.getElementById("perfKmEarnings").innerText=o.toFixed(0)+" ₺",document.getElementById("earnBonus").innerText=u+" ₺",document.getElementById("totalEarning").innerText=d.toLocaleString("tr-TR")+" ₺",document.getElementById("vatOnIncome").innerText=p.toFixed(0)+" ₺",document.getElementById("incomeWithoutVat").innerText="KDV Hariç: "+f.toFixed(0)+" ₺",document.getElementById("vatOnFuel").innerText=R.toFixed(0)+" ₺",document.getElementById("fuelWithoutVat").innerText="KDV Hariç: "+y.toFixed(0)+" ₺",document.getElementById("netEarningAfterVat").innerText=m.toFixed(0)+" ₺",document.getElementById("totalNetEarning").innerText=h.toLocaleString("tr-TR")+" ₺"}function Gi(t,e="Emin misiniz?"){return new Promise(n=>{document.getElementById("confirmModalTitle").textContent=e,document.getElementById("confirmModalMessage").textContent=t,document.getElementById("customConfirmModal").classList.remove("hidden"),document.getElementById("confirmModalOk").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!0)},document.getElementById("confirmModalCancel").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!1)}})}function He(t,e){const n=document.querySelector(".success-toast");n&&n.remove();const r=document.createElement("div");r.className="success-toast",r.innerHTML=`<i class="fa-solid fa-check-circle text-lg"></i><div><div class="font-bold">${t}</div><div class="text-[10px] opacity-90">${e}</div></div>`,document.body.appendChild(r),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3e3)}function sw(){const t=localStorage.getItem("kurye_prices");t&&(vt=JSON.parse(t)),["confSingle","confMulti","confAvm","confNight"].forEach(e=>{const n=e.replace("conf","").toLowerCase();document.getElementById(e).value=vt[n]})}function i1(){const t=localStorage.getItem("kurye_expenses");t&&(Ie=JSON.parse(t)),document.getElementById("dailyFuel").value=Ie.fuel,document.getElementById("extraVat").value=Ie.extra,document.getElementById("extraVatOnly1").value=Ie.extraVatOnly1,document.getElementById("extraVatOnly2").value=Ie.extraVatOnly2,document.getElementById("vatDescription").value=Ie.vatDescription,document.getElementById("maintCost").value=Ie.maint,document.getElementById("accCost").value=Ie.acc,document.getElementById("otherCost").value=Ie.other}function s1(){Ie.fuel=parseFloat(document.getElementById("dailyFuel").value)||0,Ie.extra=parseFloat(document.getElementById("extraVat").value)||0,Ie.extraVatOnly1=parseFloat(document.getElementById("extraVatOnly1").value)||0,Ie.extraVatOnly2=parseFloat(document.getElementById("extraVatOnly2").value)||0,Ie.vatDescription=document.getElementById("vatDescription").value,Ie.maint=parseFloat(document.getElementById("maintCost").value)||0,Ie.acc=parseFloat(document.getElementById("accCost").value)||0,Ie.other=parseFloat(document.getElementById("otherCost").value)||0,localStorage.setItem("kurye_expenses",JSON.stringify(Ie))}function ow(){["single","multi","avm","night"].forEach(t=>{const e="conf"+t.charAt(0).toUpperCase()+t.slice(1);vt[t]=parseFloat(document.getElementById(e).value)||0}),localStorage.setItem("kurye_prices",JSON.stringify(vt)),hr()}function o1(){const t={metadata:{app:"Kurye Pro",version:"V34",date:new Date().toISOString()},prices:vt,dailyBonusTiers:Dn,calendarData:_e,checklistStart:zr,checklistEnd:jr,garageData:ft,packetCounter:Ue,accumulatedPayments:re,fuelHistory:Wt,expenses:JSON.parse(localStorage.getItem("kurye_expenses")||"{}")},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=`kurye_backup_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r)}async function a1(t){const e=t.target.files[0];if(!e||!await Gi("Verileriniz silinecek. Onaylıyor musunuz?","Geri Yükle"))return;const r=new FileReader;r.onload=function(i){try{const s=JSON.parse(i.target.result);s.prices&&localStorage.setItem("kurye_prices",JSON.stringify(s.prices)),s.expenses&&localStorage.setItem("kurye_expenses",JSON.stringify(s.expenses)),s.calendarData&&localStorage.setItem("kurye_calendar",JSON.stringify(s.calendarData)),s.packetCounter&&localStorage.setItem("kurye_packet_counter",JSON.stringify(s.packetCounter)),s.fuelHistory&&localStorage.setItem("kurye_fuel_history_list",JSON.stringify(s.fuelHistory)),window.location.reload()}catch{He("Hata","Dosya okunamadı.")}},r.readAsText(e)}function l1(){const t=localStorage.getItem("kurye_fuel_unit_price");t&&(document.getElementById("calcFuelUnitPrice").value=t);const e=localStorage.getItem("kurye_fuel_history_list");e&&(Wt=JSON.parse(e),gh())}function c1(){const t=parseFloat(document.getElementById("calcFuelUnitPrice").value)||0,e=parseFloat(document.getElementById("calcFuelPrice").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;let r=t>0&&e>0?e/t:0;document.getElementById("calcFuelLtDisplay").innerText=r.toFixed(1),document.getElementById("calcFuelLt").value=r,n>0&&e>0&&(document.getElementById("resFuelTl").innerText=(e/n).toFixed(2),document.getElementById("resFuelLt100").innerText=(r>0?r/n*100:0).toFixed(1))}function u1(){localStorage.setItem("kurye_fuel_unit_price",document.getElementById("calcFuelUnitPrice").value)}function d1(){const t=parseFloat(document.getElementById("calcFuelPrice").value)||0,e=parseFloat(document.getElementById("calcFuelLt").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;if(t<=0)return He("Hata","Tutar giriniz.");Wt.unshift({date:new Date().toLocaleDateString("tr-TR",{day:"numeric",month:"short"}),amount:t,lt:e,km:n,per100:n>0&&e>0?(e/n*100).toFixed(1):"0.0"}),Wt.length>5&&(Wt=Wt.slice(0,5)),localStorage.setItem("kurye_fuel_history_list",JSON.stringify(Wt)),gh(),He("Eklendi","Yakıt kaydı eklendi.")}function gh(){const t=document.getElementById("fuelHistoryList");t&&(t.innerHTML=Wt.length?"":'<div class="text-center text-[10px] text-gray-600 py-2">Kayıt yok.</div>',Wt.forEach(e=>{t.innerHTML+=`<div class="bg-slate-800/80 p-2 rounded-lg border border-white/5 flex justify-between items-center mb-1"><div><div class="text-xs font-bold text-white">${e.amount} ₺ <span class="text-[10px] text-gray-400">(${e.lt.toFixed(1)} Lt)</span></div><div class="text-[9px] text-gray-500">${e.date} • ${e.km>0?e.km+" KM":"KM girilmedi"}</div></div><div class="text-right"><div class="text-xs font-bold text-cyan-400">${e.per100} Lt <span class="text-[9px] text-gray-500">/100km</span></div></div></div>`}))}async function f1(){await Gi("Geçmiş silinsin mi?")&&(Wt=[],localStorage.removeItem("kurye_fuel_history_list"),gh())}function h1(){document.getElementById("calcFuelPrice").value="",document.getElementById("calcFuelKm").value=""}function p1(t){const e=new Date(t);jt=t,document.getElementById("noteDateTitle").innerText=e.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}),document.getElementById("noteModal").classList.remove("hidden");const n=document.getElementById("dayEventsList");n.innerHTML="";let r=!1;re[t]&&(r=!0,n.innerHTML+=`
                    <div class="bg-purple-900/40 p-2 rounded-lg mb-2 border border-purple-500/30 flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">Ödeme Günü</div>
                            <div class="text-[10px] text-purple-300">Bu tarihte birikmiş: <span class="text-white font-bold">${re[t].toLocaleString("tr-TR")} ₺</span></div>
                        </div>
                        <button onclick="deleteAccumulatedPayment('${t}')" class="text-purple-300 hover:text-red-400 transition-colors px-2"><i class="fa-solid fa-trash"></i></button>
                    </div>`);const i=parseInt(t.split("-")[2]);xn.forEach(s=>{if(parseInt(s.day)===i){r=!0;let o=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",a=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",l=s.type==="activity"?"":s.type==="income"?`+${s.amount}₺`:`-${s.amount}₺`;n.innerHTML+=`
                        <div class="bg-blue-900/40 p-2 rounded-lg mb-2 border border-blue-500/20">
                            <div class="text-xs font-bold text-white">${s.description}</div>
                            <div class="text-[10px] text-blue-300">Tekrarlayan İşlem • <span class="${a} font-bold">${o} ${l}</span></div>
                        </div>`}}),_e[t]&&_e[t].forEach((s,o)=>{r=!0;let a=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",l=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",c="";s.type==="income"?c=`+${s.amount}₺`:s.type==="expense"&&(c=`-${s.amount}₺`),n.innerHTML+=`
                        <div class="bg-slate-800 p-2 rounded-lg mb-2 flex justify-between items-center">
                            <div>
                                <div class="text-xs font-bold text-white">${s.note}</div>
                                <div class="text-[10px] text-gray-400"><span class="${l} font-bold">${a}</span> ${c}</div>
                            </div>
                            <button onclick="deleteNote(${o})" class="text-red-400"><i class="fa-solid fa-trash"></i></button>
                        </div>`}),r||(n.innerHTML='<div class="text-center text-[10px] text-gray-500 py-2">Henüz not yok.</div>')}async function m1(t){await Gi(`${t} tarihindeki ödemeyi silmek istediğinize emin misiniz?`,"Ödeme Sil")&&(delete re[t],localStorage.setItem("kurye_accumulated_payments",JSON.stringify(re)),He("Silindi","Ödeme silindi."),Ao(t),Jt(),Zl())}function Ao(t){p1(t)}function g1(){document.getElementById("noteModal").classList.add("hidden")}function v1(t){Q0=t,["btnTypeIncome","btnTypeExpense","btnTypeActivity"].forEach(e=>document.getElementById(e).classList.remove("active")),document.getElementById("btnType"+t.charAt(0).toUpperCase()+t.slice(1)).classList.add("active")}function y1(){const t=document.getElementById("noteText").value,e=parseFloat(document.getElementById("noteAmount").value);!t&&!e||(_e[jt]||(_e[jt]=[]),_e[jt].push({note:t,amount:e,type:Q0}),localStorage.setItem("kurye_calendar",JSON.stringify(_e)),document.getElementById("noteText").value="",document.getElementById("noteAmount").value="",He("Eklendi","Not eklendi."),Ao(jt),Jt())}function _1(t){_e[jt]&&(_e[jt].splice(t,1),_e[jt].length===0&&delete _e[jt],localStorage.setItem("kurye_calendar",JSON.stringify(_e)),Ao(jt),Jt())}function w1(){const t=localStorage.getItem("kurye_perf_memory");if(t){const e=JSON.parse(t);e.start&&(document.getElementById("perfStartTime").value=e.start),e.end&&(document.getElementById("perfEndTime").value=e.end),e.count&&(document.getElementById("perfPacketCount").value=e.count),ec()}}function vh(){const t={start:document.getElementById("perfStartTime").value,end:document.getElementById("perfEndTime").value,count:document.getElementById("perfPacketCount").value};localStorage.setItem("kurye_perf_memory",JSON.stringify(t))}function E1(t){const e=new Date,n=String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0");document.getElementById(t).value=n,ec(),vh()}function ec(){const t=document.getElementById("perfStartTime").value,e=document.getElementById("perfEndTime").value,n=parseFloat(document.getElementById("perfPacketCount").value)||0;if(!t||!e||n<=0)return;const[r,i]=t.split(":").map(Number),[s,o]=e.split(":").map(Number);let a=s*60+o-(r*60+i);if(a<0&&(a+=24*60),a>0){const l=a/60,c=n/l,u=a/n;document.getElementById("perfResultArea").classList.remove("hidden"),document.getElementById("perfAvgSpeed").innerText=c.toFixed(1),document.getElementById("perfMinsPerPacket").innerText=u.toFixed(1),document.getElementById("perfTotalTime").innerText=Math.floor(a/60)+"s "+a%60+"dk",document.getElementById("perfTotalPackets").innerText=n}}function x1(){document.getElementById("perfStartTime").value="",document.getElementById("perfEndTime").value="",document.getElementById("perfPacketCount").value="",document.getElementById("perfResultArea").classList.add("hidden"),vh()}function aw(){let t=0;for(let e in localStorage)localStorage.hasOwnProperty(e)&&(t+=(localStorage[e].length+e.length)*2);document.getElementById("dataSize").innerText=(t/1024).toFixed(2)+" KB"}function I1(){const t=document.getElementById("manualModeToggle").checked,e=document.getElementById("manualSection"),n=document.getElementById("packetSection"),r=document.getElementById("modeLabel");t?(e.classList.remove("hidden"),n.classList.add("hidden"),r.innerText="MANUEL",r.classList.remove("text-gray-300"),r.classList.add("text-emerald-400")):(e.classList.add("hidden"),n.classList.remove("hidden"),r.innerText="PAKET",r.classList.add("text-gray-300"),r.classList.remove("text-emerald-400")),hr()}function b1(){document.getElementById("settingsModal").classList.toggle("hidden")}function k1(){document.getElementById("finalResultCard").scrollIntoView({behavior:"smooth"})}function S1(t,e){document.querySelectorAll(".tab-content").forEach(r=>r.classList.remove("active")),document.getElementById(t).classList.add("active"),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active","bg-indigo-600","text-white","shadow-lg")),e.classList.add("active","bg-indigo-600","text-white","shadow-lg"),e.classList.remove("text-gray-400");const n=document.getElementById("headerManualToggle");t==="tabProfit"?n.classList.remove("hidden"):n.classList.add("hidden")}function T1(){document.getElementById("single").value="",document.getElementById("multi").value="",hr()}function C1(){Gt=[],localStorage.removeItem("kurye_transaction_history"),tw()}function P1(){confirm("Varsayılan fiyatlara dönülsün mü?")&&(vt={single:110,multi:40,avm:10,night:20},ow(),sw())}function R1(){console.log("POS")}function N1(t){On+=t,On<1&&(On=1),On>60&&(On=60),document.getElementById("simDays").textContent=On}async function A1(t){const e=document.getElementById("resNet").innerText.replace(/\./g,"").replace(",","."),n=parseFloat(e);if(n<=0){He("Hata","Net gelir 0 veya daha düşük.");return}const r=document.getElementById(t).value,i=new Date(r);await Gi(`₺${n.toLocaleString("tr-TR")} tutarındaki net gelir ${i.toLocaleDateString("tr-TR")} ödemesine eklensin mi?`,"Ödeme Ekle")&&(re[r]||(re[r]=0),re[r]+=n,Gt.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"income",amount:n,description:"Hesaplanan Net Gelir"}),Gt.length>5&&Gt.pop(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(re)),localStorage.setItem("kurye_transaction_history",JSON.stringify(Gt)),He("Başarılı","Ödeme gününe eklendi."),Zl(),Jt())}function D1(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;let n=t-e,r=0,i=0;const s=new Date,o=new Date;o.setDate(s.getDate()+On),Object.keys(_e).forEach(f=>{const p=new Date(f);p>=s&&p<=o&&_e[f].forEach(y=>{y.type==="income"?r+=parseFloat(y.amount)||0:y.type==="expense"&&(i+=parseFloat(y.amount)||0)})});const a=s.getDate(),l=new Date(s.getFullYear(),s.getMonth()+1,0).getDate();xn.forEach(f=>{if(f.type==="activity")return;let p=f.day-a;p<0&&(p=l-a+parseInt(f.day)),p<=On&&(f.type==="income"?r+=f.amount:f.type==="expense"&&(i+=f.amount))});for(let f in re){const p=new Date(f);p>=s&&p<=o&&(r+=re[f])}document.getElementById("currentBalanceResult").innerText=n.toLocaleString("tr-TR")+" ₺",document.getElementById("futureIncomesResult").innerText="+"+r.toLocaleString("tr-TR")+" ₺",document.getElementById("futureExpensesResult").innerText="-"+i.toLocaleString("tr-TR")+" ₺";const c=n+r-i;document.getElementById("finalBalanceResult").innerText=c.toLocaleString("tr-TR")+" ₺";const u=document.getElementById("resultEmoji"),d=document.getElementById("resultTitle");c>n*1.2?(u.textContent="🚀",d.textContent="MÜTHİŞ!",d.className="text-lg font-bold text-emerald-400"):c>n?(u.textContent="📈",d.textContent="İYİ GİDİYOR!",d.className="text-lg font-bold text-green-400"):c>0?(u.textContent="⚠️",d.textContent="DİKKAT!",d.className="text-lg font-bold text-yellow-400"):(u.textContent="🔴",d.textContent="TEHLİKE!",d.className="text-lg font-bold text-red-400"),document.getElementById("futureResult").classList.remove("hidden"),document.getElementById("futureResult").scrollIntoView({behavior:"smooth",block:"center"})}function O1(){const t=document.getElementById("sideDock");t&&t.classList.toggle("active")}let co=JSON.parse(localStorage.getItem("kurye_dialer_numbers")||"[]"),Ct=JSON.parse(localStorage.getItem("kurye_dialer_history")||"[]");function L1(){document.getElementById("dialerModal").classList.remove("hidden"),yh(),_h(),document.getElementById("dialerOrderInput").focus()}function M1(){document.getElementById("dialerModal").classList.add("hidden")}function yh(){const t=document.getElementById("dialerNumbersList");t.innerHTML="",co.forEach((e,n)=>{t.innerHTML+=`
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
                `})}function F1(){const t=document.getElementById("newDialerNumber"),e=t.value.trim().replace(/\s/g,"");if(e){if(e.length<3)return He("Hata","Geçersiz numara");co.push(e),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(co)),t.value="",yh()}}function B1(t){co.splice(t,1),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(co)),yh()}function U1(t){const e=document.getElementById("dialerOrderInput").value.trim();e&&lw(e);let n=t;e&&(n+=","+e),window.open("tel:"+n)}function V1(){const t=document.getElementById("dialerOrderInput").value.trim();t&&(lw(t),He("Kaydedildi","Geçmişe eklendi"))}function lw(t){Ct=Ct.filter(e=>e!==t),Ct.unshift(t),Ct.length>10&&(Ct=Ct.slice(0,10)),localStorage.setItem("kurye_dialer_history",JSON.stringify(Ct)),_h()}function _h(){const t=document.getElementById("dialerHistoryList"),e=document.getElementById("dialerHistorySection");if(Ct.length===0){e.classList.add("hidden");return}e.classList.remove("hidden"),t.innerHTML="",Ct.forEach(n=>{t.innerHTML+=`
                    <button onclick="document.getElementById('dialerOrderInput').value = '${n}'" 
                        class="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 font-mono text-sm border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                        ${n}
                    </button>
                `})}function H1(){Ct=[],localStorage.setItem("kurye_dialer_history",JSON.stringify(Ct)),_h()}async function z1(t){const e=document.getElementById("quickSearchResults");if(!t||t.length<2){e.classList.add("hidden"),e.innerHTML="";return}try{let a;try{a=await qn(()=>Promise.resolve().then(()=>K0),void 0,import.meta.url)}catch(l){console.error(l)}if(a&&a.hasRemainingLimit&&!(await a.hasRemainingLimit()).allowed){e.innerHTML=`<div class="p-3 text-red-500 text-sm text-center font-bold">
                                            <i class="fa-solid fa-lock mb-2"></i><br>
                                            GÜNLÜK SORGU LİMİTİ DOLDU<br>
                                            <span class="text-xs text-gray-400 font-normal">Yarın tekrar deneyin.</span>
                                         </div>`,e.classList.remove("hidden");return}}catch(a){console.error("Limit check fail",a)}if(await fw(),!it)return;function n(a){return a.toUpperCase().replace(/İ/g,"I").replace(/I/g,"I").replace(/Ğ/g,"G").replace(/Ü/g,"U").replace(/Ş/g,"S").replace(/Ö/g,"O").replace(/Ç/g,"C")}const r=t.trim().split(/\s+/).map(a=>n(a)).filter(a=>a.length>0),i=[],s=20;function o(a){const l=n(a);return r.every(c=>l.includes(c))}for(const[a,l]of Object.entries(it)){const c=l.adi;for(const[u,d]of Object.entries(l.streets||{})){const f=d.adi;for(const p of d.doors||[]){const v=p.no,y=c+" "+f+" "+v;if(o(y)&&i.push({type:"kapi",icon:"fa-door-open",color:"text-amber-400",text:c+" Mah. "+f+" No:"+v,mahalleId:a,mahalleAdi:c,sokakId:u,sokakAdi:f,door:p}),i.length>=s)break}if(i.length<s){const p=c+" "+f;o(p)&&!i.some(v=>v.sokakId===u&&!v.door)&&i.push({type:"sokak",icon:"fa-road",color:"text-green-400",text:f+", "+c+" Mah.",mahalleId:a,mahalleAdi:c,sokakId:u,sokakAdi:f})}if(i.length>=s)break}if(i.length<s&&r.length===1&&o(c)&&!i.some(u=>u.mahalleId===a&&u.type==="mahalle")&&i.push({type:"mahalle",icon:"fa-location-dot",color:"text-blue-400",text:c+" Mah.",mahalleId:a,mahalleAdi:c}),i.length>=s)break}i.sort((a,l)=>{const c={kapi:0,sokak:1,mahalle:2};return c[a.type]-c[l.type]}),i.length===0?e.innerHTML='<div class="p-3 text-gray-500 text-sm text-center">Sonuç bulunamadı</div>':e.innerHTML=i.map(a=>`
                    <div class="p-2 hover:bg-slate-700 cursor-pointer flex items-center gap-2 text-sm border-b border-slate-700 last:border-0"
                         onclick='selectQuickResult(${JSON.stringify(a).replace(/'/g,"&#39;")})'>
                        <i class="fa-solid ${a.icon} ${a.color}"></i>
                        <span class="text-gray-200">${a.text}</span>
                    </div>
                `).join(""),e.classList.remove("hidden")}async function j1(t){try{const n=await qn(()=>Promise.resolve().then(()=>K0),void 0,import.meta.url);if(n&&n.incrementLimitUsage&&!await n.incrementLimitUsage()){He("Hata","Limit doldu, işlem yapılamaz."),document.getElementById("quickSearchResults").classList.add("hidden");return}}catch(n){console.warn("Increment failed",n)}document.getElementById("quickSearchResults").classList.add("hidden"),document.getElementById("quickAddressSearch").value=t.text;const e=document.getElementById("mapMahalle");e.value=t.mahalleId,cw(),t.sokakId&&setTimeout(()=>{const n=document.getElementById("mapSokak");n.value=t.sokakId,uw(),t.door&&setTimeout(()=>{const r=document.getElementById("mapKapi"),i="No: "+t.door.no;for(let s of r.options)if(s.text===i||s.textContent===i){r.value=s.value;break}dw()},200)},150)}let Vt=null,Gc=null,_a=null,it=null;window.attemptLogin=async function(t={}){const e=document.getElementById("btnLoginBtn"),n=(t==null?void 0:t.auto)===!0;e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i> Google ile Bağlanılıyor...',e.disabled=!0;const r=await Y0(t);if(r.type==="redirect"||r.type==="external_browser"){e.innerHTML='<i class="fa-solid fa-external-link-alt mr-2"></i> Tarayıcıda Giriş Yap',e.disabled=!1;const i=document.getElementById("deviceInfoText");i&&(i.innerText="Tarayıcıda giriş yaptıktan sonra uygulamayı yeniden açın.");return}r.success?(document.getElementById("loginOverlay").classList.add("hidden"),He("Giriş Başarılı",`Hoşgeldin, ${r.user.displayName}`)):(!n&&r.error&&!r.error.includes("auth/popup-blocked")&&alert("Giriş Başarısız: "+r.error),e.innerHTML='<i class="fa-brands fa-google mr-2"></i> GOOGLE İLE GİRİŞ YAP',e.disabled=!1)};async function W1(){const t=document.getElementById("deviceInfoText");if(t&&(t.innerText="Yükleniyor..."),new URLSearchParams(window.location.search).get("mode")==="login"){typeof window.attemptLogin=="function"?window.attemptLogin({auto:!0}):Y0({}).catch(console.error);return}const n=await q0(),r=document.getElementById("loginOverlay");n.status==="authorized"?r&&(r.classList.add("transition-opacity","duration-500","opacity-0"),setTimeout(()=>{r.classList.add("hidden"),r.style.opacity="1"},500)):(t&&(t.innerText="Güvenli Giriş v4.2"),n.status==="banned"&&(document.getElementById("loginTitle").innerText="HESAP YASAKLANDI",document.getElementById("loginTitle").classList.add("text-red-500"),document.getElementById("btnLoginBtn").style.display="none",t&&(t.innerText="Yönetici ile iletişime geçin.")))}async function $1(){var n;const t=document.getElementById("mapModal");if(!t)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),t.classList.add("animate-modal-in"),await fw(),((n=document.getElementById("mapMahalle"))==null?void 0:n.options.length)<=1&&G1()):(t.classList.add("hidden"),t.classList.remove("animate-modal-in"),console.log("🔒 Güvenlik: Adres verisi RAM'den silindi."),it=null,document.getElementById("mapMahalle").innerHTML='<option value="">Seçiniz...</option>',document.getElementById("mapSokak").innerHTML='<option value="">Önce Mahalle Seçin</option>',document.getElementById("mapKapi").innerHTML='<option value="">Önce Sokak Seçin</option>',Vt&&(Vt.remove(),Vt=null))}function G1(){const t=document.getElementById("mapMahalle");if(!it||t.options.length>1)return;t.innerHTML='<option value="">Seçiniz...</option>';const e=Object.entries(it).map(([n,r])=>({id:n,adi:r.adi}));e.sort((n,r)=>n.adi.localeCompare(r.adi,"tr")),e.forEach(n=>{const r=document.createElement("option");r.value=n.id,r.textContent=n.adi,t.appendChild(r)})}function cw(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak"),n=document.getElementById("mapKapi");if(e.innerHTML='<option value="">Yükleniyor...</option>',e.disabled=!0,n.innerHTML='<option value="">Önce Sokak Seçin</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!it||!it[t]){e.innerHTML='<option value="">Önce Mahalle Seçin</option>';return}const r=it[t].streets,i=Object.entries(r).map(([s,o])=>({id:s,adi:o.adi,tur:o.tur}));i.sort((s,o)=>s.adi.localeCompare(o.adi,"tr")),e.innerHTML='<option value="">Seçiniz...</option>',i.forEach(s=>{const o=document.createElement("option");o.value=s.id,o.textContent=s.adi+(s.tur?" ("+s.tur+")":""),e.appendChild(o)}),e.disabled=!1}function uw(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak").value,n=document.getElementById("mapKapi");if(n.innerHTML='<option value="">Yükleniyor...</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!e||!it||!it[t]){n.innerHTML='<option value="">Önce Sokak Seçin</option>';return}const r=it[t].streets[e];if(!r||!r.doors||r.doors.length===0){n.innerHTML='<option value="">Bu sokakta kapı bulunamadı</option>';return}const i=[...r.doors];i.sort((s,o)=>{const a=parseInt(s.no)||0,l=parseInt(o.no)||0;return a-l}),n.innerHTML='<option value="">Seçiniz...</option>',i.forEach(s=>{const o=document.createElement("option");o.value=JSON.stringify({lat:s.lat,lon:s.lon,no:s.no}),o.textContent="No: "+s.no,n.appendChild(o)}),n.disabled=!1}function dw(){const t=document.getElementById("mapKapi").value;if(!t){alert("Lütfen geçerli bir kapı numarası seçin.");return}const e=JSON.parse(t);_a=e,document.getElementById("internalMapContainer").classList.remove("hidden"),document.getElementById("googleMapsBtn").classList.remove("hidden"),setTimeout(()=>{Vt?(Vt.invalidateSize(),Vt.setView([e.lat,e.lon],18)):(Vt=L.map("internalMap").setView([e.lat,e.lon],18),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(Vt)),Gc&&Vt.removeLayer(Gc),Gc=L.marker([e.lat,e.lon]).addTo(Vt).bindPopup(`<b>Kapı No: ${e.no}</b>`).openPopup()},100)}function K1(){_a?window.open(`https://www.google.com/maps/search/?api=1&query=${_a.lat},${_a.lon}`,"_blank"):alert("Önce konum seçmelisiniz.")}async function fw(){if(it&&Object.keys(it).length>0)return!0;try{const t=document.getElementById("updateStatus");return t&&(t.innerText="Güvenli bağlantı kuruluyor...",t.style.display="block"),it=await DN(),console.log("🔓 Veri Erişim İzni Onaylandı."),t&&(t.style.display="none"),!0}catch(t){console.error("Erişim Hatası:",t),alert(`⛔ ERİŞİM ENGELLENDİ

Sebep: ${t.message}

Eğer giriş yapmadıysanız uygulamayı yeniden başlatıp giriş kodunu giriniz.`);const e=document.getElementById("updateStatus");return e&&(e.style.display="none"),!1}}function q1(){const[t,e]=wa.useState(null);wa.useEffect(()=>{try{LN(),ON(),MN()}catch(i){console.error("Critical: Init App Failed",i),alert("App Init Error: "+i.message+`
`+i.stack)}const r=async()=>{try{const i="yal42d-debug",s="kurye_pro",o="main",a=`https://raw.githubusercontent.com/${i}/${s}/${o}/updates/version.json?t=${Date.now()}`,l=await fetch(a,{cache:"no-store"});if(!l.ok)return;const c=await l.json(),u=parseInt(c.version||"0"),d=parseInt(localStorage.getItem("app_version_code")||"0");if(d===0&&u>0){localStorage.setItem("app_version_code",String(u));return}const f=await fetch(`https://raw.githubusercontent.com/${i}/${s}/${o}/updates/app_config.json?t=${Date.now()}`);if(f.ok){const p=await f.json(),v=parseInt(p.force_update_min_version||"0");if(d<v&&d>0){console.error(`FORCED UPDATE: Local ${d} < Min ${v}`),e({forced:!0,version:u,url:c.url,msg:"Bu sürüm artık desteklenmiyor. Lütfen güncelleyin."});return}}u>d&&(console.log("New version detected:",u),e({forced:!1,version:u,url:c.url}))}catch(i){console.warn("Version check failed",i)}};En.isNativePlatform()&&setTimeout(r,3e3)},[]);const n=async()=>{t&&await uh.open({url:t.url})};return kt.jsxs(kt.Fragment,{children:[kt.jsx("div",{id:"app-root",dangerouslySetInnerHTML:{__html:Wx}}),t&&kt.jsxs("div",{style:{position:"fixed",bottom:t.forced?"0":"20px",right:t.forced?"0":"20px",left:t.forced?"0":"20px",top:t.forced?"0":"auto",backgroundColor:t.forced?"rgba(0,0,0,0.95)":"#10b981",color:"white",padding:"20px",borderRadius:t.forced?"0":"12px",boxShadow:"0 10px 25px rgba(0,0,0,0.5)",zIndex:99999,display:"flex",flexDirection:t.forced?"column":"row",alignItems:"center",justifyContent:t.forced?"center":"space-between",animation:"slideUp 0.5s ease-out"},children:[t.forced&&kt.jsx("div",{style:{fontSize:"50px",marginBottom:"20px"},children:"⚠️"}),kt.jsxs("div",{style:{textAlign:t.forced?"center":"left",marginBottom:t.forced?"20px":"0"},children:[kt.jsx("div",{style:{fontWeight:"bold",fontSize:t.forced?"22px":"14px"},children:t.forced?"ZORUNLU GÜNCELLEME":"Yeni Güncelleme Mevcut!"}),kt.jsx("div",{style:{fontSize:t.forced?"16px":"12px",opacity:.9,marginTop:"5px"},children:t.forced?t.msg||"Devam etmek için güncellemeniz gerekiyor.":"Devam etmek için indirin."}),t.forced&&kt.jsxs("div",{style:{marginTop:"10px",fontSize:"14px",color:"#ef4444"},children:["v",t.version," sürümüne geçmelisiniz."]})]}),kt.jsx("button",{onClick:n,style:{backgroundColor:t.forced?"#ef4444":"white",color:t.forced?"white":"#059669",border:"none",padding:t.forced?"15px 40px":"8px 16px",borderRadius:"8px",fontWeight:"bold",fontSize:t.forced?"18px":"12px",marginTop:t.forced?"20px":"0"},children:t.forced?"HEMEN GÜNCELLE":"İNDİR"})]})]})}const Y1=document.getElementById("root"),Q1=sy(Y1);Q1.render(kt.jsx(q1,{}));export{qy as A,nS as B,uT as C,rT as D,fr as E,en as F,tn as G,pT as H,sT as I,n_ as J,Yt as K,fS as L,Ku as M,v_ as N,bs as O,Wm as P,bf as Q,KS as R,f_ as S,nn as T,z0 as W,Gk as a,$k as b,qk as c,wS as d,E_ as e,eS as f,P_ as g,zt as h,Jk as i,_S as j,Wk as k,QS as l,Qk as m,jm as n,hS as o,Vk as p,jk as q,Ay as r,tS as s,Yk as t,Xk as u,YS as v,Hk as w,sS as x,oS as y,iS as z};
