(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function OE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ug={exports:{}},Sl={},dg={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),ME=Symbol.for("react.portal"),UE=Symbol.for("react.fragment"),FE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),HE=Symbol.for("react.provider"),KE=Symbol.for("react.context"),VE=Symbol.for("react.forward_ref"),zE=Symbol.for("react.suspense"),jE=Symbol.for("react.memo"),WE=Symbol.for("react.lazy"),Dh=Symbol.iterator;function $E(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,pg={};function Mr(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mg(){}mg.prototype=Mr.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}var wd=Ed.prototype=new mg;wd.constructor=Ed;hg(wd,Mr.prototype);wd.isPureReactComponent=!0;var Oh=Array.isArray,gg=Object.prototype.hasOwnProperty,xd={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,i)&&!vg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vo,type:t,key:s,ref:o,props:r,_owner:xd.current}}function GE(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function YE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mh=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YE(""+t.key):e.toString(36)}function la(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case ME:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uc(o,0):i,Oh(r)?(n="",t!=null&&(n=t.replace(Mh,"$&/")+"/"),la(r,e,n,"",function(c){return c})):r!=null&&(Id(r)&&(r=GE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Mh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Oh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+uc(s,a);o+=la(s,e,n,l,r)}else if(l=$E(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,a++),o+=la(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(t,e,n){if(t==null)return t;var i=[],r=0;return la(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ye={current:null},ca={transition:null},QE={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:ca,ReactCurrentOwner:xd};function _g(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Mr;B.Fragment=UE;B.Profiler=BE;B.PureComponent=Ed;B.StrictMode=FE;B.Suspense=zE;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE;B.act=_g;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gg.call(e,l)&&!vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:o}};B.createContext=function(t){return t={$$typeof:KE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HE,_context:t},t.Consumer=t};B.createElement=yg;B.createFactory=function(t){var e=yg.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:VE,render:t}};B.isValidElement=Id;B.lazy=function(t){return{$$typeof:WE,_payload:{_status:-1,_result:t},_init:qE}};B.memo=function(t,e){return{$$typeof:jE,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=ca.transition;ca.transition={};try{t()}finally{ca.transition=e}};B.unstable_act=_g;B.useCallback=function(t,e){return Ye.current.useCallback(t,e)};B.useContext=function(t){return Ye.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Ye.current.useDeferredValue(t)};B.useEffect=function(t,e){return Ye.current.useEffect(t,e)};B.useId=function(){return Ye.current.useId()};B.useImperativeHandle=function(t,e,n){return Ye.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Ye.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Ye.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Ye.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Ye.current.useReducer(t,e,n)};B.useRef=function(t){return Ye.current.useRef(t)};B.useState=function(t){return Ye.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Ye.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Ye.current.useTransition()};B.version="18.3.1";dg.exports=B;var Os=dg.exports;const Eg=OE(Os);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE=Os,XE=Symbol.for("react.element"),ZE=Symbol.for("react.fragment"),ew=Object.prototype.hasOwnProperty,tw=JE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nw={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ew.call(e,i)&&!nw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:XE,type:t,key:s,ref:o,props:r,_owner:tw.current}}Sl.Fragment=ZE;Sl.jsx=wg;Sl.jsxs=wg;ug.exports=Sl;var me=ug.exports,xg={exports:{}},ut={},Ig={exports:{}},bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,O){var N=A.length;A.push(O);e:for(;0<N;){var H=N-1>>>1,j=A[H];if(0<r(j,O))A[H]=O,A[N]=j,N=H;else break e}}function n(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var O=A[0],N=A.pop();if(N!==O){A[0]=N;e:for(var H=0,j=A.length,st=j>>>1;H<st;){var Me=2*(H+1)-1,Ke=A[Me],ft=Me+1,Qt=A[ft];if(0>r(Ke,N))ft<j&&0>r(Qt,Ke)?(A[H]=Qt,A[ft]=N,H=ft):(A[H]=Ke,A[Me]=N,H=Me);else if(ft<j&&0>r(Qt,N))A[H]=Qt,A[ft]=N,H=ft;else break e}}return O}function r(A,O){var N=A.sortIndex-O.sortIndex;return N!==0?N:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=A)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function _(A){if(y=!1,g(A),!v)if(n(l)!==null)v=!0,ji(S);else{var O=n(c);O!==null&&Wi(_,O.startTime-A)}}function S(A,O){v=!1,y&&(y=!1,m(b),b=-1),p=!0;var N=f;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||A&&!oe());){var H=d.callback;if(typeof H=="function"){d.callback=null,f=d.priorityLevel;var j=H(d.expirationTime<=O);O=t.unstable_now(),typeof j=="function"?d.callback=j:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var st=!0;else{var Me=n(c);Me!==null&&Wi(_,Me.startTime-O),st=!1}return st}finally{d=null,f=N,p=!1}}var T=!1,x=null,b=-1,K=5,R=-1;function oe(){return!(t.unstable_now()-R<K)}function ae(){if(x!==null){var A=t.unstable_now();R=A;var O=!0;try{O=x(!0,A)}finally{O?qt():(T=!1,x=null)}}else T=!1}var qt;if(typeof h=="function")qt=function(){h(ae)};else if(typeof MessageChannel<"u"){var Bo=new MessageChannel,qr=Bo.port2;Bo.port1.onmessage=ae,qt=function(){qr.postMessage(null)}}else qt=function(){k(ae,0)};function ji(A){x=A,T||(T=!0,qt())}function Wi(A,O){b=k(function(){A(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,ji(S))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var N=f;f=O;try{return A()}finally{f=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var N=f;f=A;try{return O()}finally{f=N}},t.unstable_scheduleCallback=function(A,O,N){var H=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,A){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=N+j,A={id:u++,callback:O,priorityLevel:A,startTime:N,expirationTime:j,sortIndex:-1},N>H?(A.sortIndex=N,e(c,A),n(l)===null&&A===n(c)&&(y?(m(b),b=-1):y=!0,Wi(_,N-H))):(A.sortIndex=j,e(l,A),v||p||(v=!0,ji(S))),A},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(A){var O=f;return function(){var N=f;f=O;try{return A.apply(this,arguments)}finally{f=N}}}})(bg);Ig.exports=bg;var iw=Ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rw=Os,ct=iw;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,Ms={};function Oi(t,e){yr(t,e),yr(t+"Capture",e)}function yr(t,e){for(Ms[t]=e,t=0;t<e.length;t++)Sg.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,sw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uh={},Fh={};function ow(t){return nu.call(Fh,t)?!0:nu.call(Uh,t)?!1:sw.test(t)?Fh[t]=!0:(Uh[t]=!0,!1)}function aw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lw(t,e,n,i){if(e===null||typeof e>"u"||aw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qe(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){De[t]=new qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];De[e]=new qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){De[t]=new qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){De[t]=new qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){De[t]=new qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){De[t]=new qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){De[t]=new qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){De[t]=new qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){De[t]=new qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Sd);De[e]=new qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Sd);De[e]=new qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Sd);De[e]=new qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){De[t]=new qe(t,1,!1,t.toLowerCase(),null,!1,!1)});De.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){De[t]=new qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,i){var r=De.hasOwnProperty(e)?De[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lw(e,n,r,i)&&(n=null),i||r===null?ow(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var In=rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),ru=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Ag=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function Qr(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,dc;function cs(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function hc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?cs(t):""}function cw(t){switch(t.tag){case 5:return cs(t.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qi:return"Fragment";case Yi:return"Portal";case iu:return"Profiler";case Td:return"StrictMode";case ru:return"Suspense";case su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tg:return(t.displayName||"Context")+".Consumer";case kg:return(t._context.displayName||"Context")+".Provider";case Ad:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cd:return e=t.displayName||null,e!==null?e:ou(t.type)||"Memo";case Cn:e=t._payload,t=t._init;try{return ou(t(e))}catch{}}return null}function uw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(e);case 8:return e===Td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ei(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dw(t){var e=Cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vo(t){t._valueTracker||(t._valueTracker=dw(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function au(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ei(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ng(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function lu(t,e){Ng(t,e);var n=ei(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cu(t,e.type,n):e.hasOwnProperty("defaultValue")&&cu(t,e.type,ei(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cu(t,e,n){(e!=="number"||ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var us=Array.isArray;function ar(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ei(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(us(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ei(n)}}function Pg(t,e){var n=ei(e.value),i=ei(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,Dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Us(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fw=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(t){fw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gs[e]=gs[t]})});function Og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gs.hasOwnProperty(t)&&gs[t]?(""+e).trim():e+"px"}function Mg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hw=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fu(t,e){if(e){if(hw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function Rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mu=null,lr=null,cr=null;function jh(t){if(t=Eo(t)){if(typeof mu!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Rl(e),mu(t.stateNode,t.type,e))}}function Ug(t){lr?cr?cr.push(t):cr=[t]:lr=t}function Fg(){if(lr){var t=lr,e=cr;if(cr=lr=null,jh(t),e)for(t=0;t<e.length;t++)jh(e[t])}}function Bg(t,e){return t(e)}function Hg(){}var pc=!1;function Kg(t,e,n){if(pc)return t(e,n);pc=!0;try{return Bg(t,e,n)}finally{pc=!1,(lr!==null||cr!==null)&&(Hg(),Fg())}}function Fs(t,e){var n=t.stateNode;if(n===null)return null;var i=Rl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var gu=!1;if(pn)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){gu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{gu=!1}function pw(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var vs=!1,Ta=null,Aa=!1,vu=null,mw={onError:function(t){vs=!0,Ta=t}};function gw(t,e,n,i,r,s,o,a,l){vs=!1,Ta=null,pw.apply(mw,arguments)}function vw(t,e,n,i,r,s,o,a,l){if(gw.apply(this,arguments),vs){if(vs){var c=Ta;vs=!1,Ta=null}else throw Error(E(198));Aa||(Aa=!0,vu=c)}}function Mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Mi(t)!==t)throw Error(E(188))}function yw(t){var e=t.alternate;if(!e){if(e=Mi(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(E(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==i)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function zg(t){return t=yw(t),t!==null?jg(t):null}function jg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=ct.unstable_scheduleCallback,$h=ct.unstable_cancelCallback,_w=ct.unstable_shouldYield,Ew=ct.unstable_requestPaint,he=ct.unstable_now,ww=ct.unstable_getCurrentPriorityLevel,Nd=ct.unstable_ImmediatePriority,$g=ct.unstable_UserBlockingPriority,Ca=ct.unstable_NormalPriority,xw=ct.unstable_LowPriority,Gg=ct.unstable_IdlePriority,kl=null,jt=null;function Iw(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:kw,bw=Math.log,Sw=Math.LN2;function kw(t){return t>>>=0,t===0?32:31-(bw(t)/Sw|0)|0}var jo=64,Wo=4194304;function ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ra(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ds(a):(s&=o,s!==0&&(i=ds(s)))}else o=n&~r,o!==0?i=ds(o):s!==0&&(i=ds(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Rt(e),r=1<<n,i|=t[n],e&=~r;return i}function Tw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Aw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rt(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Tw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yg(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rt(e),t[e]=n}function Cw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Rt(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Rt(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var W=0;function qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qg,Ld,Jg,Xg,Zg,_u=!1,$o=[],Fn=null,Bn=null,Hn=null,Bs=new Map,Hs=new Map,Ln=[],Rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(t,e){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hs.delete(e.pointerId)}}function Xr(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Eo(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nw(t,e,n,i,r){switch(e){case"focusin":return Fn=Xr(Fn,t,e,n,i,r),!0;case"dragenter":return Bn=Xr(Bn,t,e,n,i,r),!0;case"mouseover":return Hn=Xr(Hn,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Bs.set(s,Xr(Bs.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Hs.set(s,Xr(Hs.get(s)||null,t,e,n,i,r)),!0}return!1}function ev(t){var e=gi(t.target);if(e!==null){var n=Mi(e);if(n!==null){if(e=n.tag,e===13){if(e=Vg(n),e!==null){t.blockedOn=e,Zg(t.priority,function(){Jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pu=i,n.target.dispatchEvent(i),pu=null}else return e=Eo(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Yh(t,e,n){ua(t)&&n.delete(e)}function Pw(){_u=!1,Fn!==null&&ua(Fn)&&(Fn=null),Bn!==null&&ua(Bn)&&(Bn=null),Hn!==null&&ua(Hn)&&(Hn=null),Bs.forEach(Yh),Hs.forEach(Yh)}function Zr(t,e){t.blockedOn===e&&(t.blockedOn=null,_u||(_u=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,Pw)))}function Ks(t){function e(r){return Zr(r,t)}if(0<$o.length){Zr($o[0],t);for(var n=1;n<$o.length;n++){var i=$o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fn!==null&&Zr(Fn,t),Bn!==null&&Zr(Bn,t),Hn!==null&&Zr(Hn,t),Bs.forEach(e),Hs.forEach(e),n=0;n<Ln.length;n++)i=Ln[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)ev(n),n.blockedOn===null&&Ln.shift()}var ur=In.ReactCurrentBatchConfig,Na=!0;function Lw(t,e,n,i){var r=W,s=ur.transition;ur.transition=null;try{W=1,Dd(t,e,n,i)}finally{W=r,ur.transition=s}}function Dw(t,e,n,i){var r=W,s=ur.transition;ur.transition=null;try{W=4,Dd(t,e,n,i)}finally{W=r,ur.transition=s}}function Dd(t,e,n,i){if(Na){var r=Eu(t,e,n,i);if(r===null)Sc(t,e,i,Pa,n),Gh(t,i);else if(Nw(r,t,e,n,i))i.stopPropagation();else if(Gh(t,i),e&4&&-1<Rw.indexOf(t)){for(;r!==null;){var s=Eo(r);if(s!==null&&Qg(s),s=Eu(t,e,n,i),s===null&&Sc(t,e,i,Pa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Sc(t,e,i,null,n)}}var Pa=null;function Eu(t,e,n,i){if(Pa=null,t=Rd(i),t=gi(t),t!==null)if(e=Mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pa=t,null}function tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ww()){case Nd:return 1;case $g:return 4;case Ca:case xw:return 16;case Gg:return 536870912;default:return 16}default:return 16}}var On=null,Od=null,da=null;function nv(){if(da)return da;var t,e=Od,n=e.length,i,r="value"in On?On.value:On.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return da=r.slice(t,1<i?1-i:void 0)}function fa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function qh(){return!1}function dt(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:qh,this.isPropagationStopped=qh,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=dt(Ur),_o=se({},Ur,{view:0,detail:0}),Ow=dt(_o),gc,vc,es,Tl=se({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==es&&(es&&t.type==="mousemove"?(gc=t.screenX-es.screenX,vc=t.screenY-es.screenY):vc=gc=0,es=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:vc}}),Qh=dt(Tl),Mw=se({},Tl,{dataTransfer:0}),Uw=dt(Mw),Fw=se({},_o,{relatedTarget:0}),yc=dt(Fw),Bw=se({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Hw=dt(Bw),Kw=se({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vw=dt(Kw),zw=se({},Ur,{data:0}),Jh=dt(zw),jw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$w[t])?!!e[t]:!1}function Ud(){return Gw}var Yw=se({},_o,{key:function(t){if(t.key){var e=jw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ww[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?fa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qw=dt(Yw),Qw=se({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=dt(Qw),Jw=se({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),Xw=dt(Jw),Zw=se({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=dt(Zw),tx=se({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=dt(tx),ix=[9,13,27,32],Fd=pn&&"CompositionEvent"in window,ys=null;pn&&"documentMode"in document&&(ys=document.documentMode);var rx=pn&&"TextEvent"in window&&!ys,iv=pn&&(!Fd||ys&&8<ys&&11>=ys),Zh=" ",ep=!1;function rv(t,e){switch(t){case"keyup":return ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function sx(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:(ep=!0,Zh);case"textInput":return t=e.data,t===Zh&&ep?null:t;default:return null}}function ox(t,e){if(Qi)return t==="compositionend"||!Fd&&rv(t,e)?(t=nv(),da=Od=On=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iv&&e.locale!=="ko"?null:e.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ax[t.type]:e==="textarea"}function ov(t,e,n,i){Ug(i),e=La(e,"onChange"),0<e.length&&(n=new Md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _s=null,Vs=null;function lx(t){vv(t,0)}function Al(t){var e=Zi(t);if(Rg(e))return t}function cx(t,e){if(t==="change")return e}var av=!1;if(pn){var _c;if(pn){var Ec="oninput"in document;if(!Ec){var np=document.createElement("div");np.setAttribute("oninput","return;"),Ec=typeof np.oninput=="function"}_c=Ec}else _c=!1;av=_c&&(!document.documentMode||9<document.documentMode)}function ip(){_s&&(_s.detachEvent("onpropertychange",lv),Vs=_s=null)}function lv(t){if(t.propertyName==="value"&&Al(Vs)){var e=[];ov(e,Vs,t,Rd(t)),Kg(lx,e)}}function ux(t,e,n){t==="focusin"?(ip(),_s=e,Vs=n,_s.attachEvent("onpropertychange",lv)):t==="focusout"&&ip()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(Vs)}function fx(t,e){if(t==="click")return Al(e)}function hx(t,e){if(t==="input"||t==="change")return Al(e)}function px(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:px;function zs(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nu.call(e,r)||!Lt(t[r],e[r]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uv(){for(var t=window,e=ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ka(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mx(t){var e=uv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cv(n.ownerDocument.documentElement,n)){if(i!==null&&Bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sp(n,s);var o=sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gx=pn&&"documentMode"in document&&11>=document.documentMode,Ji=null,wu=null,Es=null,xu=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xu||Ji==null||Ji!==ka(i)||(i=Ji,"selectionStart"in i&&Bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Es&&zs(Es,i)||(Es=i,i=La(wu,"onSelect"),0<i.length&&(e=new Md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ji)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xi={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},wc={},dv={};pn&&(dv=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function Cl(t){if(wc[t])return wc[t];if(!Xi[t])return t;var e=Xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dv)return wc[t]=e[n];return t}var fv=Cl("animationend"),hv=Cl("animationiteration"),pv=Cl("animationstart"),mv=Cl("transitionend"),gv=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ai(t,e){gv.set(t,e),Oi(e,[t])}for(var xc=0;xc<ap.length;xc++){var Ic=ap[xc],vx=Ic.toLowerCase(),yx=Ic[0].toUpperCase()+Ic.slice(1);ai(vx,"on"+yx)}ai(fv,"onAnimationEnd");ai(hv,"onAnimationIteration");ai(pv,"onAnimationStart");ai("dblclick","onDoubleClick");ai("focusin","onFocus");ai("focusout","onBlur");ai(mv,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vw(i,e,void 0,t),t.currentTarget=null}function vv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}}}if(Aa)throw t=vu,Aa=!1,vu=null,t}function X(t,e){var n=e[Tu];n===void 0&&(n=e[Tu]=new Set);var i=t+"__bubble";n.has(i)||(yv(e,t,2,!1),n.add(i))}function bc(t,e,n){var i=0;e&&(i|=4),yv(n,t,i,e)}var qo="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[qo]){t[qo]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(_x.has(n)||bc(n,!1,t),bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qo]||(e[qo]=!0,bc("selectionchange",!1,e))}}function yv(t,e,n,i){switch(tv(e)){case 1:var r=Lw;break;case 4:r=Dw;break;default:r=Dd}n=r.bind(null,e,n,t),r=void 0,!gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Sc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Kg(function(){var c=s,u=Rd(n),d=[];e:{var f=gv.get(t);if(f!==void 0){var p=Md,v=t;switch(t){case"keypress":if(fa(n)===0)break e;case"keydown":case"keyup":p=qw;break;case"focusin":v="focus",p=yc;break;case"focusout":v="blur",p=yc;break;case"beforeblur":case"afterblur":p=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Xw;break;case fv:case hv:case pv:p=Hw;break;case mv:p=ex;break;case"scroll":p=Ow;break;case"wheel":p=nx;break;case"copy":case"cut":case"paste":p=Vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Xh}var y=(e&4)!==0,k=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var h=c,g;h!==null;){g=h;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Fs(h,m),_!=null&&y.push(Ws(h,_,g)))),k)break;h=h.return}0<y.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==pu&&(v=n.relatedTarget||n.fromElement)&&(gi(v)||v[mn]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?gi(v):null,v!==null&&(k=Mi(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=Qh,_="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=Xh,_="onPointerLeave",m="onPointerEnter",h="pointer"),k=p==null?f:Zi(p),g=v==null?f:Zi(v),f=new y(_,h+"leave",p,n,u),f.target=k,f.relatedTarget=g,_=null,gi(u)===c&&(y=new y(m,h+"enter",v,n,u),y.target=g,y.relatedTarget=k,_=y),k=_,p&&v)t:{for(y=p,m=v,h=0,g=y;g;g=$i(g))h++;for(g=0,_=m;_;_=$i(_))g++;for(;0<h-g;)y=$i(y),h--;for(;0<g-h;)m=$i(m),g--;for(;h--;){if(y===m||m!==null&&y===m.alternate)break t;y=$i(y),m=$i(m)}y=null}else y=null;p!==null&&cp(d,f,p,y,!1),v!==null&&k!==null&&cp(d,k,v,y,!0)}}e:{if(f=c?Zi(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=cx;else if(tp(f))if(av)S=hx;else{S=dx;var T=ux}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=fx);if(S&&(S=S(t,c))){ov(d,S,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&cu(f,"number",f.value)}switch(T=c?Zi(c):window,t){case"focusin":(tp(T)||T.contentEditable==="true")&&(Ji=T,wu=c,Es=null);break;case"focusout":Es=wu=Ji=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,op(d,n,u);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":op(d,n,u)}var x;if(Fd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qi?rv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(iv&&n.locale!=="ko"&&(Qi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Qi&&(x=nv()):(On=u,Od="value"in On?On.value:On.textContent,Qi=!0)),T=La(c,b),0<T.length&&(b=new Jh(b,t,null,n,u),d.push({event:b,listeners:T}),x?b.data=x:(x=sv(n),x!==null&&(b.data=x)))),(x=rx?sx(t,n):ox(t,n))&&(c=La(c,"onBeforeInput"),0<c.length&&(u=new Jh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=x))}vv(d,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function La(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fs(t,n),s!=null&&i.unshift(Ws(t,s,r)),s=Fs(t,e),s!=null&&i.push(Ws(t,s,r))),t=t.return}return i}function $i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Fs(n,s),l!=null&&o.unshift(Ws(n,l,a))):r||(l=Fs(n,s),l!=null&&o.push(Ws(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ex=/\r\n?/g,wx=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(Ex,`
`).replace(wx,"")}function Qo(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(E(425))}function Da(){}var Iu=null,bu=null;function Su(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,Ix=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(t){return dp.resolve(null).then(t).catch(bx)}:ku;function bx(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ks(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ks(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Fr,$s="__reactProps$"+Fr,mn="__reactContainer$"+Fr,Tu="__reactEvents$"+Fr,Sx="__reactListeners$"+Fr,kx="__reactHandles$"+Fr;function gi(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[Bt])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function Eo(t){return t=t[Bt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Rl(t){return t[$s]||null}var Au=[],er=-1;function li(t){return{current:t}}function Z(t){0>er||(t.current=Au[er],Au[er]=null,er--)}function J(t,e){er++,Au[er]=t.current,t.current=e}var ti={},He=li(ti),et=li(!1),ki=ti;function _r(t,e){var n=t.type.contextTypes;if(!n)return ti;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tt(t){return t=t.childContextTypes,t!=null}function Oa(){Z(et),Z(He)}function hp(t,e,n){if(He.current!==ti)throw Error(E(168));J(He,e),J(et,n)}function _v(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(E(108,uw(t)||"Unknown",r));return se({},n,i)}function Ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ti,ki=He.current,J(He,t),J(et,et.current),!0}function pp(t,e,n){var i=t.stateNode;if(!i)throw Error(E(169));n?(t=_v(t,e,ki),i.__reactInternalMemoizedMergedChildContext=t,Z(et),Z(He),J(He,t)):Z(et),J(et,n)}var Xt=null,Nl=!1,Tc=!1;function Ev(t){Xt===null?Xt=[t]:Xt.push(t)}function Tx(t){Nl=!0,Ev(t)}function ci(){if(!Tc&&Xt!==null){Tc=!0;var t=0,e=W;try{var n=Xt;for(W=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Xt=null,Nl=!1}catch(r){throw Xt!==null&&(Xt=Xt.slice(t+1)),Wg(Nd,ci),r}finally{W=e,Tc=!1}}return null}var tr=[],nr=0,Ua=null,Fa=0,pt=[],mt=0,Ti=null,rn=1,sn="";function fi(t,e){tr[nr++]=Fa,tr[nr++]=Ua,Ua=t,Fa=e}function wv(t,e,n){pt[mt++]=rn,pt[mt++]=sn,pt[mt++]=Ti,Ti=t;var i=rn;t=sn;var r=32-Rt(i)-1;i&=~(1<<r),n+=1;var s=32-Rt(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,rn=1<<32-Rt(e)+r|n<<r|i,sn=s+t}else rn=1<<s|n<<r|i,sn=t}function Hd(t){t.return!==null&&(fi(t,1),wv(t,1,0))}function Kd(t){for(;t===Ua;)Ua=tr[--nr],tr[nr]=null,Fa=tr[--nr],tr[nr]=null;for(;t===Ti;)Ti=pt[--mt],pt[mt]=null,sn=pt[--mt],pt[mt]=null,rn=pt[--mt],pt[mt]=null}var lt=null,at=null,ne=!1,Tt=null;function xv(t,e){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,lt=t,at=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,lt=t,at=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,lt=t,at=null,!0):!1;default:return!1}}function Cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(ne){var e=at;if(e){var n=e;if(!mp(t,e)){if(Cu(t))throw Error(E(418));e=Kn(n.nextSibling);var i=lt;e&&mp(t,e)?xv(i,n):(t.flags=t.flags&-4097|2,ne=!1,lt=t)}}else{if(Cu(t))throw Error(E(418));t.flags=t.flags&-4097|2,ne=!1,lt=t}}}function gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;lt=t}function Jo(t){if(t!==lt)return!1;if(!ne)return gp(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Su(t.type,t.memoizedProps)),e&&(e=at)){if(Cu(t))throw Iv(),Error(E(418));for(;e;)xv(t,e),e=Kn(e.nextSibling)}if(gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){at=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}at=null}}else at=lt?Kn(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=at;t;)t=Kn(t.nextSibling)}function Er(){at=lt=null,ne=!1}function Vd(t){Tt===null?Tt=[t]:Tt.push(t)}var Ax=In.ReactCurrentBatchConfig;function ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var i=n.stateNode}if(!i)throw Error(E(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Xo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function bv(t){function e(m,h){if(t){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function i(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function r(m,h){return m=Wn(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,_){return h===null||h.tag!==6?(h=Dc(g,m.mode,_),h.return=m,h):(h=r(h,g),h.return=m,h)}function l(m,h,g,_){var S=g.type;return S===qi?u(m,h,g.props.children,_,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Cn&&vp(S)===h.type)?(_=r(h,g.props),_.ref=ts(m,h,g),_.return=m,_):(_=_a(g.type,g.key,g.props,null,m.mode,_),_.ref=ts(m,h,g),_.return=m,_)}function c(m,h,g,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Oc(g,m.mode,_),h.return=m,h):(h=r(h,g.children||[]),h.return=m,h)}function u(m,h,g,_,S){return h===null||h.tag!==7?(h=xi(g,m.mode,_,S),h.return=m,h):(h=r(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Dc(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ko:return g=_a(h.type,h.key,h.props,null,m.mode,g),g.ref=ts(m,null,h),g.return=m,g;case Yi:return h=Oc(h,m.mode,g),h.return=m,h;case Cn:var _=h._init;return d(m,_(h._payload),g)}if(us(h)||Qr(h))return h=xi(h,m.mode,g,null),h.return=m,h;Xo(m,h)}return null}function f(m,h,g,_){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,h,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:return g.key===S?l(m,h,g,_):null;case Yi:return g.key===S?c(m,h,g,_):null;case Cn:return S=g._init,f(m,h,S(g._payload),_)}if(us(g)||Qr(g))return S!==null?null:u(m,h,g,_,null);Xo(m,g)}return null}function p(m,h,g,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(h,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return m=m.get(_.key===null?g:_.key)||null,l(h,m,_,S);case Yi:return m=m.get(_.key===null?g:_.key)||null,c(h,m,_,S);case Cn:var T=_._init;return p(m,h,g,T(_._payload),S)}if(us(_)||Qr(_))return m=m.get(g)||null,u(h,m,_,S,null);Xo(h,_)}return null}function v(m,h,g,_){for(var S=null,T=null,x=h,b=h=0,K=null;x!==null&&b<g.length;b++){x.index>b?(K=x,x=null):K=x.sibling;var R=f(m,x,g[b],_);if(R===null){x===null&&(x=K);break}t&&x&&R.alternate===null&&e(m,x),h=s(R,h,b),T===null?S=R:T.sibling=R,T=R,x=K}if(b===g.length)return n(m,x),ne&&fi(m,b),S;if(x===null){for(;b<g.length;b++)x=d(m,g[b],_),x!==null&&(h=s(x,h,b),T===null?S=x:T.sibling=x,T=x);return ne&&fi(m,b),S}for(x=i(m,x);b<g.length;b++)K=p(x,m,b,g[b],_),K!==null&&(t&&K.alternate!==null&&x.delete(K.key===null?b:K.key),h=s(K,h,b),T===null?S=K:T.sibling=K,T=K);return t&&x.forEach(function(oe){return e(m,oe)}),ne&&fi(m,b),S}function y(m,h,g,_){var S=Qr(g);if(typeof S!="function")throw Error(E(150));if(g=S.call(g),g==null)throw Error(E(151));for(var T=S=null,x=h,b=h=0,K=null,R=g.next();x!==null&&!R.done;b++,R=g.next()){x.index>b?(K=x,x=null):K=x.sibling;var oe=f(m,x,R.value,_);if(oe===null){x===null&&(x=K);break}t&&x&&oe.alternate===null&&e(m,x),h=s(oe,h,b),T===null?S=oe:T.sibling=oe,T=oe,x=K}if(R.done)return n(m,x),ne&&fi(m,b),S;if(x===null){for(;!R.done;b++,R=g.next())R=d(m,R.value,_),R!==null&&(h=s(R,h,b),T===null?S=R:T.sibling=R,T=R);return ne&&fi(m,b),S}for(x=i(m,x);!R.done;b++,R=g.next())R=p(x,m,b,R.value,_),R!==null&&(t&&R.alternate!==null&&x.delete(R.key===null?b:R.key),h=s(R,h,b),T===null?S=R:T.sibling=R,T=R);return t&&x.forEach(function(ae){return e(m,ae)}),ne&&fi(m,b),S}function k(m,h,g,_){if(typeof g=="object"&&g!==null&&g.type===qi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:e:{for(var S=g.key,T=h;T!==null;){if(T.key===S){if(S=g.type,S===qi){if(T.tag===7){n(m,T.sibling),h=r(T,g.props.children),h.return=m,m=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Cn&&vp(S)===T.type){n(m,T.sibling),h=r(T,g.props),h.ref=ts(m,T,g),h.return=m,m=h;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===qi?(h=xi(g.props.children,m.mode,_,g.key),h.return=m,m=h):(_=_a(g.type,g.key,g.props,null,m.mode,_),_.ref=ts(m,h,g),_.return=m,m=_)}return o(m);case Yi:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=r(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else e(m,h);h=h.sibling}h=Oc(g,m.mode,_),h.return=m,m=h}return o(m);case Cn:return T=g._init,k(m,h,T(g._payload),_)}if(us(g))return v(m,h,g,_);if(Qr(g))return y(m,h,g,_);Xo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=r(h,g),h.return=m,m=h):(n(m,h),h=Dc(g,m.mode,_),h.return=m,m=h),o(m)):n(m,h)}return k}var wr=bv(!0),Sv=bv(!1),Ba=li(null),Ha=null,ir=null,zd=null;function jd(){zd=ir=Ha=null}function Wd(t){var e=Ba.current;Z(Ba),t._currentValue=e}function Nu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function dr(t,e){Ha=t,zd=ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function _t(t){var e=t._currentValue;if(zd!==t)if(t={context:t,memoizedValue:e,next:null},ir===null){if(Ha===null)throw Error(E(308));ir=t,Ha.dependencies={lanes:0,firstContext:t}}else ir=ir.next=t;return e}var vi=null;function $d(t){vi===null?vi=[t]:vi.push(t)}function kv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$d(e)):(n.next=r.next,r.next=n),e.interleaved=n,gn(t,i)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,V&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gn(t,n)}return r=i.interleaved,r===null?(e.next=e,$d(i)):(e.next=r.next,r.next=e),i.interleaved=e,gn(t,n)}function ha(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pd(t,n)}}function yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ka(t,e,n,i){var r=t.updateQueue;Rn=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=se({},d,f);break e;case 2:Rn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ci|=o,t.lanes=o,t.memoizedState=d}}function _p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(E(191,r));r.call(i)}}}var wo={},Wt=li(wo),Gs=li(wo),Ys=li(wo);function yi(t){if(t===wo)throw Error(E(174));return t}function Yd(t,e){switch(J(Ys,e),J(Gs,t),J(Wt,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=du(e,t)}Z(Wt),J(Wt,e)}function xr(){Z(Wt),Z(Gs),Z(Ys)}function Av(t){yi(Ys.current);var e=yi(Wt.current),n=du(e,t.type);e!==n&&(J(Gs,t),J(Wt,n))}function qd(t){Gs.current===t&&(Z(Wt),Z(Gs))}var ie=li(0);function Va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Qd(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var pa=In.ReactCurrentDispatcher,Cc=In.ReactCurrentBatchConfig,Ai=0,re=null,_e=null,ke=null,za=!1,ws=!1,qs=0,Cx=0;function Ue(){throw Error(E(321))}function Jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function Xd(t,e,n,i,r,s){if(Ai=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=t===null||t.memoizedState===null?Lx:Dx,t=n(i,r),ws){s=0;do{if(ws=!1,qs=0,25<=s)throw Error(E(301));s+=1,ke=_e=null,e.updateQueue=null,pa.current=Ox,t=n(i,r)}while(ws)}if(pa.current=ja,e=_e!==null&&_e.next!==null,Ai=0,ke=_e=re=null,za=!1,e)throw Error(E(300));return t}function Zd(){var t=qs!==0;return qs=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?re.memoizedState=ke=t:ke=ke.next=t,ke}function Et(){if(_e===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=ke===null?re.memoizedState:ke.next;if(e!==null)ke=e,_e=t;else{if(t===null)throw Error(E(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ke===null?re.memoizedState=ke=t:ke=ke.next=t}return ke}function Qs(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Et(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var i=_e,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ai&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,re.lanes|=u,Ci|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Lt(i,e.memoizedState)||(Je=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,re.lanes|=s,Ci|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nc(t){var e=Et(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Lt(s,e.memoizedState)||(Je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Cv(){}function Rv(t,e){var n=re,i=Et(),r=e(),s=!Lt(i.memoizedState,r);if(s&&(i.memoizedState=r,Je=!0),i=i.queue,ef(Lv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Js(9,Pv.bind(null,n,i,r,e),void 0,null),Ae===null)throw Error(E(349));Ai&30||Nv(n,e,r)}return r}function Nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,i){e.value=n,e.getSnapshot=i,Dv(e)&&Ov(t)}function Lv(t,e,n){return n(function(){Dv(e)&&Ov(t)})}function Dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function Ov(t){var e=gn(t,1);e!==null&&Nt(e,t,1,-1)}function Ep(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:t},e.queue=t,t=t.dispatch=Px.bind(null,re,t),[e.memoizedState,t]}function Js(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Mv(){return Et().memoizedState}function ma(t,e,n,i){var r=Ut();re.flags|=t,r.memoizedState=Js(1|e,n,void 0,i===void 0?null:i)}function Pl(t,e,n,i){var r=Et();i=i===void 0?null:i;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,i!==null&&Jd(i,o.deps)){r.memoizedState=Js(e,n,s,i);return}}re.flags|=t,r.memoizedState=Js(1|e,n,s,i)}function wp(t,e){return ma(8390656,8,t,e)}function ef(t,e){return Pl(2048,8,t,e)}function Uv(t,e){return Pl(4,2,t,e)}function Fv(t,e){return Pl(4,4,t,e)}function Bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,Bv.bind(null,e,t),n)}function tf(){}function Kv(t,e){var n=Et();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Vv(t,e){var n=Et();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Ai&21?(Lt(n,e)||(n=Yg(),re.lanes|=n,Ci|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=n)}function Rx(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var i=Cc.transition;Cc.transition={};try{t(!1),e()}finally{W=n,Cc.transition=i}}function jv(){return Et().memoizedState}function Nx(t,e,n){var i=jn(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(t))$v(e,n);else if(n=kv(t,e,n,i),n!==null){var r=je();Nt(n,t,i,r),Gv(n,e,i)}}function Px(t,e,n){var i=jn(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(t))$v(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Lt(a,o)){var l=e.interleaved;l===null?(r.next=r,$d(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=kv(t,e,r,i),n!==null&&(r=je(),Nt(n,t,i,r),Gv(n,e,i))}}function Wv(t){var e=t.alternate;return t===re||e!==null&&e===re}function $v(t,e){ws=za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pd(t,n)}}var ja={readContext:_t,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Lx={readContext:_t,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:_t,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ma(4194308,4,Bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return ma(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ut();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Nx.bind(null,re,t),[i.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:tf,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=Rx.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=re,r=Ut();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Ae===null)throw Error(E(349));Ai&30||Nv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,wp(Lv.bind(null,i,s,t),[t]),i.flags|=2048,Js(9,Pv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=Ae.identifierPrefix;if(ne){var n=sn,i=rn;n=(i&~(1<<32-Rt(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dx={readContext:_t,useCallback:Kv,useContext:_t,useEffect:ef,useImperativeHandle:Hv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:Vv,useReducer:Rc,useRef:Mv,useState:function(){return Rc(Qs)},useDebugValue:tf,useDeferredValue:function(t){var e=Et();return zv(e,_e.memoizedState,t)},useTransition:function(){var t=Rc(Qs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:jv,unstable_isNewReconciler:!1},Ox={readContext:_t,useCallback:Kv,useContext:_t,useEffect:ef,useImperativeHandle:Hv,useInsertionEffect:Uv,useLayoutEffect:Fv,useMemo:Vv,useReducer:Nc,useRef:Mv,useState:function(){return Nc(Qs)},useDebugValue:tf,useDeferredValue:function(t){var e=Et();return _e===null?e.memoizedState=t:zv(e,_e.memoizedState,t)},useTransition:function(){var t=Nc(Qs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:jv,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=je(),r=jn(t),s=un(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vn(t,s,r),e!==null&&(Nt(e,t,r,i),ha(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=je(),r=jn(t),s=un(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vn(t,s,r),e!==null&&(Nt(e,t,r,i),ha(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),i=jn(t),r=un(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vn(t,r,i),e!==null&&(Nt(e,t,i,n),ha(e,t,i))}};function xp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!zs(n,i)||!zs(r,s):!0}function Yv(t,e,n){var i=!1,r=ti,s=e.contextType;return typeof s=="object"&&s!==null?s=_t(s):(r=tt(e)?ki:He.current,i=e.contextTypes,s=(i=i!=null)?_r(t,r):ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Lu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=_t(s):(s=tt(e)?ki:He.current,r.context=_r(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ll.enqueueReplaceState(r,r.state,null),Ka(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ir(t,e){try{var n="",i=e;do n+=cw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=un(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$a||($a=!0,ju=i),Du(t,e)},n}function Qv(t,e,n){n=un(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Du(t,e),typeof i!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Mx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Qx.bind(null,t,e,n),e.then(t,t))}function Sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=un(-1,1),e.tag=2,Vn(n,e,1))),n.lanes|=1),t)}var Ux=In.ReactCurrentOwner,Je=!1;function Ve(t,e,n,i){e.child=t===null?Sv(e,null,n,i):wr(e,t.child,n,i)}function Tp(t,e,n,i,r){n=n.render;var s=e.ref;return dr(e,r),i=Xd(t,e,n,i,s,r),n=Zd(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vn(t,e,r)):(ne&&n&&Hd(e),e.flags|=1,Ve(t,e,i,r),e.child)}function Ap(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jv(t,e,s,i,r)):(t=_a(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(o,i)&&t.ref===e.ref)return vn(t,e,r)}return e.flags|=1,t=Wn(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(zs(s,i)&&t.ref===e.ref)if(Je=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,vn(t,e,r)}return Ou(t,e,n,i,r)}function Xv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(sr,ot),ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(sr,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,J(sr,ot),ot|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,J(sr,ot),ot|=i;return Ve(t,e,r,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ou(t,e,n,i,r){var s=tt(n)?ki:He.current;return s=_r(e,s),dr(e,r),n=Xd(t,e,n,i,s,r),i=Zd(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vn(t,e,r)):(ne&&i&&Hd(e),e.flags|=1,Ve(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(tt(n)){var s=!0;Ma(e)}else s=!1;if(dr(e,r),e.stateNode===null)ga(t,e),Yv(e,n,i),Lu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_t(c):(c=tt(n)?ki:He.current,c=_r(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Ip(e,o,i,c),Rn=!1;var f=e.memoizedState;o.state=f,Ka(e,i,o,r),l=e.memoizedState,a!==i||f!==l||et.current||Rn?(typeof u=="function"&&(Pu(e,n,u,i),l=e.memoizedState),(a=Rn||xp(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Tv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:bt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_t(l):(l=tt(n)?ki:He.current,l=_r(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ip(e,o,i,l),Rn=!1,f=e.memoizedState,o.state=f,Ka(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||et.current||Rn?(typeof p=="function"&&(Pu(e,n,p,i),v=e.memoizedState),(c=Rn||xp(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Mu(t,e,n,i,s,r)}function Mu(t,e,n,i,r,s){Zv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pp(e,n,!1),vn(t,e,s);i=e.stateNode,Ux.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=wr(e,t.child,null,s),e.child=wr(e,null,a,s)):Ve(t,e,a,s),e.memoizedState=i.state,r&&pp(e,n,!0),e.child}function ey(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Yd(t,e.containerInfo)}function Rp(t,e,n,i,r){return Er(),Vd(r),e.flags|=256,Ve(t,e,n,i),e.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function ty(t,e,n){var i=e.pendingProps,r=ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),J(ie,r&1),t===null)return Ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ml(o,i,0,null),t=xi(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fu(n),e.memoizedState=Uu,t):nf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Fx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wn(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=xi(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uu,i}return s=t.child,t=s.sibling,i=Wn(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nf(t,e){return e=Ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,i){return i!==null&&Vd(i),wr(e,t.child,null,n),t=nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(E(422))),Zo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ml({mode:"visible",children:i.children},r,0,null),s=xi(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wr(e,t.child,null,o),e.child.memoizedState=Fu(o),e.memoizedState=Uu,s);if(!(e.mode&1))return Zo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(E(419)),i=Pc(s,i,void 0),Zo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Je||a){if(i=Ae,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gn(t,r),Nt(i,t,r,-1))}return cf(),i=Pc(Error(E(421))),Zo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Jx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,at=Kn(r.nextSibling),lt=e,ne=!0,Tt=null,t!==null&&(pt[mt++]=rn,pt[mt++]=sn,pt[mt++]=Ti,rn=t.id,sn=t.overflow,Ti=e),e=nf(e,i.children),e.flags|=4096,e)}function Np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,n)}function Lc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ny(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ve(t,e,i.children,n),i=ie.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,n,e);else if(t.tag===19)Np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(J(ie,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Va(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Va(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ci|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bx(t,e,n){switch(e.tag){case 3:ey(e),Er();break;case 5:Av(e);break;case 1:tt(e.type)&&Ma(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;J(Ba,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?ty(t,e,n):(J(ie,ie.current&1),t=vn(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ny(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),J(ie,ie.current),i)break;return null;case 22:case 23:return e.lanes=0,Xv(t,e,n)}return vn(t,e,n)}var iy,Bu,ry,sy;iy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bu=function(){};ry=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yi(Wt.current);var s=null;switch(n){case"input":r=au(t,r),i=au(t,i),s=[];break;case"select":r=se({},r,{value:void 0}),i=se({},i,{value:void 0}),s=[];break;case"textarea":r=uu(t,r),i=uu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Da)}fu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ms.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sy=function(t,e,n,i){n!==i&&(e.flags|=4)};function ns(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Hx(t,e,n){var i=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(e),null;case 1:return tt(e.type)&&Oa(),Fe(e),null;case 3:return i=e.stateNode,xr(),Z(et),Z(He),Qd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Jo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tt!==null&&(Gu(Tt),Tt=null))),Bu(t,e),Fe(e),null;case 5:qd(e);var r=yi(Ys.current);if(n=e.type,t!==null&&e.stateNode!=null)ry(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(E(166));return Fe(e),null}if(t=yi(Wt.current),Jo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bt]=e,i[$s]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",i),X("close",i);break;case"iframe":case"object":case"embed":X("load",i);break;case"video":case"audio":for(r=0;r<fs.length;r++)X(fs[r],i);break;case"source":X("error",i);break;case"img":case"image":case"link":X("error",i),X("load",i);break;case"details":X("toggle",i);break;case"input":Hh(i,s),X("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},X("invalid",i);break;case"textarea":Vh(i,s),X("invalid",i)}fu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qo(i.textContent,a,t),r=["children",""+a]):Ms.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",i)}switch(n){case"input":Vo(i),Kh(i,s,!0);break;case"textarea":Vo(i),zh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Da)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Bt]=e,t[$s]=i,iy(t,e,!1,!1),e.stateNode=t;e:{switch(o=hu(n,i),n){case"dialog":X("cancel",t),X("close",t),r=i;break;case"iframe":case"object":case"embed":X("load",t),r=i;break;case"video":case"audio":for(r=0;r<fs.length;r++)X(fs[r],t);r=i;break;case"source":X("error",t),r=i;break;case"img":case"image":case"link":X("error",t),X("load",t),r=i;break;case"details":X("toggle",t),r=i;break;case"input":Hh(t,i),r=au(t,i),X("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=se({},i,{value:void 0}),X("invalid",t);break;case"textarea":Vh(t,i),r=uu(t,i),X("invalid",t);break;default:r=i}fu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Mg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Dg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Us(t,l):typeof l=="number"&&Us(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&kd(t,s,l,o))}switch(n){case"input":Vo(t),Kh(t,i,!1);break;case"textarea":Vo(t),zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ei(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ar(t,!!i.multiple,s,!1):i.defaultValue!=null&&ar(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Da)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Fe(e),null;case 6:if(t&&e.stateNode!=null)sy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(E(166));if(n=yi(Ys.current),yi(Wt.current),Jo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bt]=e,(s=i.nodeValue!==n)&&(t=lt,t!==null))switch(t.tag){case 3:Qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bt]=e,e.stateNode=i}return Fe(e),null;case 13:if(Z(ie),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&at!==null&&e.mode&1&&!(e.flags&128))Iv(),Er(),e.flags|=98560,s=!1;else if(s=Jo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Bt]=e}else Er(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Fe(e),s=!1}else Tt!==null&&(Gu(Tt),Tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?Ie===0&&(Ie=3):cf())),e.updateQueue!==null&&(e.flags|=4),Fe(e),null);case 4:return xr(),Bu(t,e),t===null&&js(e.stateNode.containerInfo),Fe(e),null;case 10:return Wd(e.type._context),Fe(e),null;case 17:return tt(e.type)&&Oa(),Fe(e),null;case 19:if(Z(ie),s=e.memoizedState,s===null)return Fe(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ns(s,!1);else{if(Ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Va(t),o!==null){for(e.flags|=128,ns(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>br&&(e.flags|=128,i=!0,ns(s,!1),e.lanes=4194304)}else{if(!i)if(t=Va(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Fe(e),null}else 2*he()-s.renderingStartTime>br&&n!==1073741824&&(e.flags|=128,i=!0,ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=ie.current,J(ie,i?n&1|2:n&1),e):(Fe(e),null);case 22:case 23:return lf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ot&1073741824&&(Fe(e),e.subtreeFlags&6&&(e.flags|=8192)):Fe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Kx(t,e){switch(Kd(e),e.tag){case 1:return tt(e.type)&&Oa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xr(),Z(et),Z(He),Qd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(Z(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Er()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ie),null;case 4:return xr(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var ea=!1,Be=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,C=null;function rr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){le(t,e,i)}else n.current=null}function Hu(t,e,n){try{n()}catch(i){le(t,e,i)}}var Pp=!1;function zx(t,e){if(Iu=Na,t=uv(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:t,selectionRange:n},Na=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:bt(e.type,y),k);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(_){le(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return v=Pp,Pp=!1,v}function xs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hu(e,n,s)}r=r.next}while(r!==i)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function oy(t){var e=t.alternate;e!==null&&(t.alternate=null,oy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[$s],delete e[Tu],delete e[Sx],delete e[kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ay(t){return t.tag===5||t.tag===3||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ay(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Da));else if(i!==4&&(t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}function zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}var Re=null,St=!1;function Tn(t,e,n){for(n=n.child;n!==null;)ly(t,e,n),n=n.sibling}function ly(t,e,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Be||rr(n,e);case 6:var i=Re,r=St;Re=null,Tn(t,e,n),Re=i,St=r,Re!==null&&(St?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(St?(t=Re,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),Ks(t)):kc(Re,n.stateNode));break;case 4:i=Re,r=St,Re=n.stateNode.containerInfo,St=!0,Tn(t,e,n),Re=i,St=r;break;case 0:case 11:case 14:case 15:if(!Be&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hu(n,e,o),r=r.next}while(r!==i)}Tn(t,e,n);break;case 1:if(!Be&&(rr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){le(n,e,a)}Tn(t,e,n);break;case 21:Tn(t,e,n);break;case 22:n.mode&1?(Be=(i=Be)||n.memoizedState!==null,Tn(t,e,n),Be=i):Tn(t,e,n);break;default:Tn(t,e,n)}}function Dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vx),e.forEach(function(i){var r=Xx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function It(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,St=!1;break e;case 3:Re=a.stateNode.containerInfo,St=!0;break e;case 4:Re=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Re===null)throw Error(E(160));ly(s,o,r),Re=null,St=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){le(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cy(e,t),e=e.sibling}function cy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(It(e,t),Mt(t),i&4){try{xs(3,t,t.return),Dl(3,t)}catch(y){le(t,t.return,y)}try{xs(5,t,t.return)}catch(y){le(t,t.return,y)}}break;case 1:It(e,t),Mt(t),i&512&&n!==null&&rr(n,n.return);break;case 5:if(It(e,t),Mt(t),i&512&&n!==null&&rr(n,n.return),t.flags&32){var r=t.stateNode;try{Us(r,"")}catch(y){le(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ng(r,s),hu(a,o);var c=hu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Mg(r,d):u==="dangerouslySetInnerHTML"?Dg(r,d):u==="children"?Us(r,d):kd(r,u,d,c)}switch(a){case"input":lu(r,s);break;case"textarea":Pg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ar(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ar(r,!!s.multiple,s.defaultValue,!0):ar(r,!!s.multiple,s.multiple?[]:"",!1))}r[$s]=s}catch(y){le(t,t.return,y)}}break;case 6:if(It(e,t),Mt(t),i&4){if(t.stateNode===null)throw Error(E(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){le(t,t.return,y)}}break;case 3:if(It(e,t),Mt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ks(e.containerInfo)}catch(y){le(t,t.return,y)}break;case 4:It(e,t),Mt(t);break;case 13:It(e,t),Mt(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(of=he())),i&4&&Dp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(c=Be)||u,It(e,t),Be=c):It(e,t),Mt(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(C=t,u=t.child;u!==null;){for(d=C=u;C!==null;){switch(f=C,p=f.child,f.tag){case 0:case 11:case 14:case 15:xs(4,f,f.return);break;case 1:rr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){le(i,n,y)}}break;case 5:rr(f,f.return);break;case 22:if(f.memoizedState!==null){Mp(d);continue}}p!==null?(p.return=f,C=p):Mp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(y){le(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){le(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:It(e,t),Mt(t),i&4&&Dp(t);break;case 21:break;default:It(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ay(n)){var i=n;break e}n=n.return}throw Error(E(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Us(r,""),i.flags&=-33);var s=Lp(t);zu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Lp(t);Vu(t,a,o);break;default:throw Error(E(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jx(t,e,n){C=t,uy(t)}function uy(t,e,n){for(var i=(t.mode&1)!==0;C!==null;){var r=C,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Be;a=ea;var c=Be;if(ea=o,(Be=l)&&!c)for(C=r;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?Up(r):l!==null?(l.return=o,C=l):Up(r);for(;s!==null;)C=s,uy(s),s=s.sibling;C=r,ea=a,Be=c}Op(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,C=s):Op(t)}}function Op(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||Dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Be)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_p(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ks(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Be||e.flags&512&&Ku(e)}catch(f){le(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Mp(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Up(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(l){le(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){le(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{Ku(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var Wx=Math.ceil,Wa=In.ReactCurrentDispatcher,rf=In.ReactCurrentOwner,yt=In.ReactCurrentBatchConfig,V=0,Ae=null,ve=null,Le=0,ot=0,sr=li(0),Ie=0,Xs=null,Ci=0,Ol=0,sf=0,Is=null,Qe=null,of=0,br=1/0,Jt=null,$a=!1,ju=null,zn=null,ta=!1,Mn=null,Ga=0,bs=0,Wu=null,va=-1,ya=0;function je(){return V&6?he():va!==-1?va:va=he()}function jn(t){return t.mode&1?V&2&&Le!==0?Le&-Le:Ax.transition!==null?(ya===0&&(ya=Yg()),ya):(t=W,t!==0||(t=window.event,t=t===void 0?16:tv(t.type)),t):1}function Nt(t,e,n,i){if(50<bs)throw bs=0,Wu=null,Error(E(185));yo(t,n,i),(!(V&2)||t!==Ae)&&(t===Ae&&(!(V&2)&&(Ol|=n),Ie===4&&Dn(t,Le)),nt(t,i),n===1&&V===0&&!(e.mode&1)&&(br=he()+500,Nl&&ci()))}function nt(t,e){var n=t.callbackNode;Aw(t,e);var i=Ra(t,t===Ae?Le:0);if(i===0)n!==null&&$h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$h(n),e===1)t.tag===0?Tx(Fp.bind(null,t)):Ev(Fp.bind(null,t)),Ix(function(){!(V&6)&&ci()}),n=null;else{switch(qg(i)){case 1:n=Nd;break;case 4:n=$g;break;case 16:n=Ca;break;case 536870912:n=Gg;break;default:n=Ca}n=yy(n,dy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dy(t,e){if(va=-1,ya=0,V&6)throw Error(E(327));var n=t.callbackNode;if(fr()&&t.callbackNode!==n)return null;var i=Ra(t,t===Ae?Le:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ya(t,i);else{e=i;var r=V;V|=2;var s=hy();(Ae!==t||Le!==e)&&(Jt=null,br=he()+500,wi(t,e));do try{Yx();break}catch(a){fy(t,a)}while(!0);jd(),Wa.current=s,V=r,ve!==null?e=0:(Ae=null,Le=0,e=Ie)}if(e!==0){if(e===2&&(r=yu(t),r!==0&&(i=r,e=$u(t,r))),e===1)throw n=Xs,wi(t,0),Dn(t,i),nt(t,he()),n;if(e===6)Dn(t,i);else{if(r=t.current.alternate,!(i&30)&&!$x(r)&&(e=Ya(t,i),e===2&&(s=yu(t),s!==0&&(i=s,e=$u(t,s))),e===1))throw n=Xs,wi(t,0),Dn(t,i),nt(t,he()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(E(345));case 2:hi(t,Qe,Jt);break;case 3:if(Dn(t,i),(i&130023424)===i&&(e=of+500-he(),10<e)){if(Ra(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){je(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(hi.bind(null,t,Qe,Jt),e);break}hi(t,Qe,Jt);break;case 4:if(Dn(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Rt(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=he()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wx(i/1960))-i,10<i){t.timeoutHandle=ku(hi.bind(null,t,Qe,Jt),i);break}hi(t,Qe,Jt);break;case 5:hi(t,Qe,Jt);break;default:throw Error(E(329))}}}return nt(t,he()),t.callbackNode===n?dy.bind(null,t):null}function $u(t,e){var n=Is;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=Ya(t,e),t!==2&&(e=Qe,Qe=n,e!==null&&Gu(e)),t}function Gu(t){Qe===null?Qe=t:Qe.push.apply(Qe,t)}function $x(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Lt(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e){for(e&=~sf,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rt(e),i=1<<n;t[n]=-1,e&=~i}}function Fp(t){if(V&6)throw Error(E(327));fr();var e=Ra(t,0);if(!(e&1))return nt(t,he()),null;var n=Ya(t,e);if(t.tag!==0&&n===2){var i=yu(t);i!==0&&(e=i,n=$u(t,i))}if(n===1)throw n=Xs,wi(t,0),Dn(t,e),nt(t,he()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hi(t,Qe,Jt),nt(t,he()),null}function af(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(br=he()+500,Nl&&ci())}}function Ri(t){Mn!==null&&Mn.tag===0&&!(V&6)&&fr();var e=V;V|=1;var n=yt.transition,i=W;try{if(yt.transition=null,W=1,t)return t()}finally{W=i,yt.transition=n,V=e,!(V&6)&&ci()}}function lf(){ot=sr.current,Z(sr)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xx(n)),ve!==null)for(n=ve.return;n!==null;){var i=n;switch(Kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oa();break;case 3:xr(),Z(et),Z(He),Qd();break;case 5:qd(i);break;case 4:xr();break;case 13:Z(ie);break;case 19:Z(ie);break;case 10:Wd(i.type._context);break;case 22:case 23:lf()}n=n.return}if(Ae=t,ve=t=Wn(t.current,null),Le=ot=e,Ie=0,Xs=null,sf=Ol=Ci=0,Qe=Is=null,vi!==null){for(e=0;e<vi.length;e++)if(n=vi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vi=null}return t}function fy(t,e){do{var n=ve;try{if(jd(),pa.current=ja,za){for(var i=re.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}za=!1}if(Ai=0,ke=_e=re=null,ws=!1,qs=0,rf.current=null,n===null||n.return===null){Ie=1,Xs=e,ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Sp(o);if(p!==null){p.flags&=-257,kp(p,o,a,s,e),p.mode&1&&bp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){bp(s,c,e),cf();break e}l=Error(E(426))}}else if(ne&&a.mode&1){var k=Sp(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),kp(k,o,a,s,e),Vd(Ir(l,a));break e}}s=l=Ir(l,a),Ie!==4&&(Ie=2),Is===null?Is=[s]:Is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=qv(s,l,e);yp(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zn===null||!zn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Qv(s,a,e);yp(s,_);break e}}s=s.return}while(s!==null)}my(n)}catch(S){e=S,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function hy(){var t=Wa.current;return Wa.current=ja,t===null?ja:t}function cf(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Ae===null||!(Ci&268435455)&&!(Ol&268435455)||Dn(Ae,Le)}function Ya(t,e){var n=V;V|=2;var i=hy();(Ae!==t||Le!==e)&&(Jt=null,wi(t,e));do try{Gx();break}catch(r){fy(t,r)}while(!0);if(jd(),V=n,Wa.current=i,ve!==null)throw Error(E(261));return Ae=null,Le=0,Ie}function Gx(){for(;ve!==null;)py(ve)}function Yx(){for(;ve!==null&&!_w();)py(ve)}function py(t){var e=vy(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?my(t):ve=e,rf.current=null}function my(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kx(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,ve=null;return}}else if(n=Hx(n,e,ot),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);Ie===0&&(Ie=5)}function hi(t,e,n){var i=W,r=yt.transition;try{yt.transition=null,W=1,qx(t,e,n,i)}finally{yt.transition=r,W=i}return null}function qx(t,e,n,i){do fr();while(Mn!==null);if(V&6)throw Error(E(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cw(t,s),t===Ae&&(ve=Ae=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ta||(ta=!0,yy(Ca,function(){return fr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=W;W=1;var a=V;V|=4,rf.current=null,zx(t,n),cy(n,t),mx(bu),Na=!!Iu,bu=Iu=null,t.current=n,jx(n),Ew(),V=a,W=o,yt.transition=s}else t.current=n;if(ta&&(ta=!1,Mn=t,Ga=r),s=t.pendingLanes,s===0&&(zn=null),Iw(n.stateNode),nt(t,he()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($a)throw $a=!1,t=ju,ju=null,t;return Ga&1&&t.tag!==0&&fr(),s=t.pendingLanes,s&1?t===Wu?bs++:(bs=0,Wu=t):bs=0,ci(),null}function fr(){if(Mn!==null){var t=qg(Ga),e=yt.transition,n=W;try{if(yt.transition=null,W=16>t?16:t,Mn===null)var i=!1;else{if(t=Mn,Mn=null,Ga=0,V&6)throw Error(E(331));var r=V;for(V|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(C=c;C!==null;){var u=C;switch(u.tag){case 0:case 11:case 15:xs(8,u,s)}var d=u.child;if(d!==null)d.return=u,C=d;else for(;C!==null;){u=C;var f=u.sibling,p=u.return;if(oy(u),u===c){C=null;break}if(f!==null){f.return=p,C=f;break}C=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,C=m;break e}C=s.return}}var h=t.current;for(C=h;C!==null;){o=C;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,C=g;else e:for(o=h;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(S){le(a,a.return,S)}if(a===o){C=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,C=_;break e}C=a.return}}if(V=r,ci(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{W=n,yt.transition=e}}return!1}function Bp(t,e,n){e=Ir(n,e),e=qv(t,e,1),t=Vn(t,e,1),e=je(),t!==null&&(yo(t,1,e),nt(t,e))}function le(t,e,n){if(t.tag===3)Bp(t,t,n);else for(;e!==null;){if(e.tag===3){Bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zn===null||!zn.has(i))){t=Ir(n,t),t=Qv(e,t,1),e=Vn(e,t,1),t=je(),e!==null&&(yo(e,1,t),nt(e,t));break}}e=e.return}}function Qx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(Le&n)===n&&(Ie===4||Ie===3&&(Le&130023424)===Le&&500>he()-of?wi(t,0):sf|=n),nt(t,e)}function gy(t,e){e===0&&(t.mode&1?(e=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):e=1);var n=je();t=gn(t,e),t!==null&&(yo(t,e,n),nt(t,n))}function Jx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gy(t,n)}function Xx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(e),gy(t,n)}var vy;vy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||et.current)Je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Je=!1,Bx(t,e,n);Je=!!(t.flags&131072)}else Je=!1,ne&&e.flags&1048576&&wv(e,Fa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ga(t,e),t=e.pendingProps;var r=_r(e,He.current);dr(e,n),r=Xd(null,e,i,t,r,n);var s=Zd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tt(i)?(s=!0,Ma(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gd(e),r.updater=Ll,e.stateNode=r,r._reactInternals=e,Lu(e,i,t,n),e=Mu(null,e,i,!0,s,n)):(e.tag=0,ne&&s&&Hd(e),Ve(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ga(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=eI(i),t=bt(i,t),r){case 0:e=Ou(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=Tp(null,e,i,t,n);break e;case 14:e=Ap(null,e,i,bt(i.type,t),n);break e}throw Error(E(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bt(i,r),Ou(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bt(i,r),Cp(t,e,i,r,n);case 3:e:{if(ey(e),t===null)throw Error(E(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Tv(t,e),Ka(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ir(Error(E(423)),e),e=Rp(t,e,i,n,r);break e}else if(i!==r){r=Ir(Error(E(424)),e),e=Rp(t,e,i,n,r);break e}else for(at=Kn(e.stateNode.containerInfo.firstChild),lt=e,ne=!0,Tt=null,n=Sv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),i===r){e=vn(t,e,n);break e}Ve(t,e,i,n)}e=e.child}return e;case 5:return Av(e),t===null&&Ru(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Su(i,r)?o=null:s!==null&&Su(i,s)&&(e.flags|=32),Zv(t,e),Ve(t,e,o,n),e.child;case 6:return t===null&&Ru(e),null;case 13:return ty(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=wr(e,null,i,n):Ve(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bt(i,r),Tp(t,e,i,r,n);case 7:return Ve(t,e,e.pendingProps,n),e.child;case 8:return Ve(t,e,e.pendingProps.children,n),e.child;case 12:return Ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,J(Ba,i._currentValue),i._currentValue=o,s!==null)if(Lt(s.value,o)){if(s.children===r.children&&!et.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=un(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ve(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,dr(e,n),r=_t(r),i=i(r),e.flags|=1,Ve(t,e,i,n),e.child;case 14:return i=e.type,r=bt(i,e.pendingProps),r=bt(i.type,r),Ap(t,e,i,r,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bt(i,r),ga(t,e),e.tag=1,tt(i)?(t=!0,Ma(e)):t=!1,dr(e,n),Yv(e,i,r),Lu(e,i,r,n),Mu(null,e,i,!0,t,n);case 19:return ny(t,e,n);case 22:return Xv(t,e,n)}throw Error(E(156,e.tag))};function yy(t,e){return Wg(t,e)}function Zx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(t,e,n,i){return new Zx(t,e,n,i)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eI(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ad)return 11;if(t===Cd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _a(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qi:return xi(n.children,r,s,e);case Td:o=8,r|=8;break;case iu:return t=gt(12,n,e,r|2),t.elementType=iu,t.lanes=s,t;case ru:return t=gt(13,n,e,r),t.elementType=ru,t.lanes=s,t;case su:return t=gt(19,n,e,r),t.elementType=su,t.lanes=s,t;case Ag:return Ml(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kg:o=10;break e;case Tg:o=9;break e;case Ad:o=11;break e;case Cd:o=14;break e;case Cn:o=16,i=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=gt(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xi(t,e,n,i){return t=gt(7,t,i,e),t.lanes=n,t}function Ml(t,e,n,i){return t=gt(22,t,i,e),t.elementType=Ag,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=gt(6,t,null,e),t.lanes=n,t}function Oc(t,e,n){return e=gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tI(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function df(t,e,n,i,r,s,o,a,l){return t=new tI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(s),t}function nI(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _y(t){if(!t)return ti;t=t._reactInternals;e:{if(Mi(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(tt(n))return _v(t,n,e)}return e}function Ey(t,e,n,i,r,s,o,a,l){return t=df(n,i,!0,t,r,s,o,a,l),t.context=_y(null),n=t.current,i=je(),r=jn(n),s=un(i,r),s.callback=e??null,Vn(n,s,r),t.current.lanes=r,yo(t,r,i),nt(t,i),t}function Ul(t,e,n,i){var r=e.current,s=je(),o=jn(r);return n=_y(n),e.context===null?e.context=n:e.pendingContext=n,e=un(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vn(r,e,o),t!==null&&(Nt(t,r,o,s),ha(t,r,o)),o}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function iI(){return null}var wy=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}Fl.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Ul(t,e,null,null)};Fl.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){Ul(null,t,null,null)}),e[mn]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&ev(t)}};function pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function rI(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=qa(o);s.call(c)}}var o=Ey(e,i,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=o,t[mn]=o.current,js(t.nodeType===8?t.parentNode:t),Ri(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=qa(l);a.call(c)}}var l=df(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=l,t[mn]=l.current,js(t.nodeType===8?t.parentNode:t),Ri(function(){Ul(e,l,n,i)}),l}function Hl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qa(o);a.call(l)}}Ul(e,o,t,r)}else o=rI(n,e,t,r,i);return qa(o)}Qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ds(e.pendingLanes);n!==0&&(Pd(e,n|1),nt(e,he()),!(V&6)&&(br=he()+500,ci()))}break;case 13:Ri(function(){var i=gn(t,1);if(i!==null){var r=je();Nt(i,t,1,r)}}),ff(t,1)}};Ld=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=je();Nt(e,t,134217728,n)}ff(t,134217728)}};Jg=function(t){if(t.tag===13){var e=jn(t),n=gn(t,e);if(n!==null){var i=je();Nt(n,t,e,i)}ff(t,e)}};Xg=function(){return W};Zg=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};mu=function(t,e,n){switch(e){case"input":if(lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rl(i);if(!r)throw Error(E(90));Rg(i),lu(i,r)}}}break;case"textarea":Pg(t,n);break;case"select":e=n.value,e!=null&&ar(t,!!n.multiple,e,!1)}};Bg=af;Hg=Ri;var sI={usingClientEntryPoint:!1,Events:[Eo,Zi,Rl,Ug,Fg,af]},is={findFiberByHostInstance:gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oI={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||iI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{kl=na.inject(oI),jt=na}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sI;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(e))throw Error(E(200));return nI(t,e,null,n)};ut.createRoot=function(t,e){if(!pf(t))throw Error(E(299));var n=!1,i="",r=wy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=df(t,1,!1,null,null,n,!1,i,r),t[mn]=e.current,js(t.nodeType===8?t.parentNode:t),new hf(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return Ri(t)};ut.hydrate=function(t,e,n){if(!Bl(e))throw Error(E(200));return Hl(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!pf(t))throw Error(E(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=wy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ey(e,null,t,1,n??null,r,!1,s,o),t[mn]=e.current,js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fl(e)};ut.render=function(t,e,n){if(!Bl(e))throw Error(E(200));return Hl(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(E(40));return t._reactRootContainer?(Ri(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};ut.unstable_batchedUpdates=af;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Hl(t,e,n,!1,i)};ut.version="18.3.1-next-f1338f8080-20240426";function xy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xy)}catch(t){console.error(t)}}xy(),xg.exports=ut;var aI=xg.exports,Iy,Vp=aI;Iy=Vp.createRoot,Vp.hydrateRoot;const lI=`<!-- LOGIN EKRANI (Açılışta Engelleme İçin) -->
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
                
                <h3 class="text-sm font-bold text-white flex items-center gap-2 mt-4 mb-3"><i class="fa-solid fa-user-shield text-red-500"></i> Hesap Ayarları</h3>
                <button onclick="window.logoutUserApp()"
                    class="w-full py-3 text-xs bg-red-600/20 border border-red-500/50 text-red-400 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-right-from-bracket"></i> Google Oturumunu Kapat</button>
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
                <!-- İlçe -->
                <div class="modern-select-container">
                    <label
                        class="text-[9px] text-indigo-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none">İlçe / Bölge</label>
                    <select id="mapIlce" class="modern-select pt-8" onchange="window.loadMahallesByIlce()">
                        <option value="">Önce İlçe Seçiniz</option>
                    </select>
                </div>

                <!-- Mahalle -->
                <div class="modern-select-container">
                    <label
                        class="text-[9px] text-gray-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none">Mahalle</label>
                    <select id="mapMahalle" class="modern-select pt-8" onchange="loadStreets()">
                        <option value="">Önce İlçe Seçin</option>
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

        <!-- SUB-NAVIGATION -->
        <div class="bg-slate-900 p-1 rounded-2xl border border-white/5 mb-4 grid grid-cols-3 gap-1">
            <button onclick="switchProfitSubView('expense')" id="btnSubExpense"
                class="sub-nav-btn active py-2 text-[10px] font-bold rounded-xl transition-all duration-300">GİDER
                HESAPLA</button>
            <button onclick="switchProfitSubView('average')" id="btnSubAverage"
                class="sub-nav-btn inactive py-2 text-[10px] font-bold rounded-xl transition-all duration-300">ORTALAMA</button>
            <button onclick="switchProfitSubView('detailed')" id="btnSubDetailed"
                class="sub-nav-btn inactive py-2 text-[10px] font-bold rounded-xl transition-all duration-300">DETAYLI
                PLAN</button>
        </div>

        <!-- VIEW 1: EXPENSE CALCULATOR (GIDER HESAPLA) -->
        <div id="viewExpense" class="animate-fade-in">
            <div
                class="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 rounded-3xl p-6 mb-4 relative group">
                <label class="text-xs text-indigo-400 font-bold uppercase mb-2 block tracking-wider">Toplam
                    Ciro (KDV Dahil)</label>
                <div class="relative">
                    <span
                        class="absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-bold text-indigo-500/50">₺</span>
                    <input type="number" id="manualTurnoverInput" placeholder="0"
                        class="w-full bg-transparent border-b-2 border-indigo-500/30 p-2 pl-8 text-4xl font-black text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder-white/10"
                        onkeyup="calculateProfit()">
                </div>
            </div>

            <!-- Expense & KDV Management (Moved Here) -->
            <div class="card p-5 space-y-4 mt-4">
                <div class="flex justify-between items-center border-b border-white/5 pb-3">
                    <h2 class="text-xs font-bold text-gray-400 uppercase flex items-center gap-2"><i
                            class="fa-solid fa-wallet text-indigo-500"></i> Gider & KDV Yönetimi</h2>
                </div>

                <!-- NEW: Dynamic Expense Adding Panel -->
                <div class="bg-indigo-900/5 border border-indigo-500/10 rounded-2xl p-4">
                    <label
                        class="text-[9px] text-indigo-400 font-bold uppercase mb-3 block tracking-wider flex items-center gap-2">
                        <div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Gider & KDV Ekle
                    </label>
                    <div class="grid grid-cols-3 gap-3 mb-3">
                        <div>
                            <label class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">Gider Adı</label>
                            <input type="text" id="expName" placeholder="Örn: Ofis Malz."
                                class="w-full input-dark p-2.5 rounded-xl text-center font-bold text-sm">
                        </div>
                        <div>
                            <label class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">Tutar (₺)</label>
                            <input type="number" id="expAmount" placeholder="0"
                                class="w-full input-dark p-2.5 rounded-xl text-center font-bold text-sm">
                        </div>
                        <div>
                            <label class="text-[9px] text-gray-500 block mb-1.5 font-bold ml-1">KDV Oranı</label>
                            <select id="expVatRate"
                                class="w-full input-dark p-2.5 rounded-xl text-center font-bold text-sm">
                                <option value="20">%20</option>
                                <option value="18">%18</option>
                                <option value="10">%10</option>
                                <option value="1">%1</option>
                                <option value="0">%0</option>
                            </select>
                        </div>
                    </div>
                    <button onclick="addExpenseItem()"
                        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl transition-all text-xs uppercase tracking-wider">
                        <i class="fa-solid fa-plus mr-2"></i> LİSTEYE EKLE
                    </button>
                </div>

                <!-- NEW: Expense List Display -->
                <div id="expenseListContainer" class="space-y-2"></div>
            </div>

            <!-- Final Result Card (Using Manual Input) -->
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

        <!-- VIEW 2: AVERAGE CALCULATOR (ORTALAMA) - Existing Logic -->
        <!-- VIEW 2: AVERAGE CALCULATOR (ORTALAMA) - Existing Logic -->
        <div id="viewAverage" class="hidden animate-fade-in space-y-4">

            <!-- Duration Mode Buttons (Restored) -->
            <div class="bg-slate-900 border border-white/5 rounded-2xl mb-2 p-1">
                <div class="grid grid-cols-3 gap-1">
                    <button onclick="setDurationMode('day')" id="btnDurDay"
                        class="py-2.5 text-xs font-bold rounded-xl transition-all duration-300 active bg-indigo-600 text-white shadow-lg">1
                        GÜN</button>
                    <button onclick="setDurationMode('week')" id="btnDurWeek"
                        class="py-2.5 text-xs font-bold rounded-xl transition-all duration-300 inactive text-gray-500 hover:text-white hover:bg-white/5">1
                        HAFTA</button>
                    <button onclick="setDurationMode('month')" id="btnDurMonth"
                        class="py-2.5 text-xs font-bold rounded-xl transition-all duration-300 inactive text-gray-500 hover:text-white hover:bg-white/5">1
                        AY</button>
                </div>
            </div>

            <!-- Weekly Off Days Selector -->
            <!-- Off Days Counter Selector -->
            <div class="bg-slate-900/50 p-3 rounded-xl border border-white/5 mb-2">
                <label
                    class="text-[9px] text-gray-400 font-bold uppercase block mb-2 flex justify-between items-center">
                    <span>İzin Günleri</span>
                    <div class="flex items-center gap-2">
                        <span id="offDaysTotalLabel" class="text-indigo-400 font-bold">0 Gün</span>
                        <button onclick="resetOffDays()"
                            class="text-red-400 hover:text-red-300 transition-colors p-1"><i
                                class="fa-solid fa-trash-can"></i></button>
                    </div>
                </label>
                <div class="grid grid-cols-4 gap-2">
                    <!-- Pzt-Per -->
                    <button onclick="addOffDay('weekday')" id="btnOffWeekday"
                        class="off-cat-btn flex flex-col items-center justify-center p-2 rounded-lg bg-slate-800 border border-white/5 hover:bg-slate-700 transition-all active:scale-95 group relative overflow-hidden">
                        <span
                            class="text-[8px] font-bold text-gray-400 group-hover:text-white uppercase tracking-wider mb-1">HAFTA
                            İÇİ</span>
                        <span class="text-xl font-black text-white z-10" id="countWeekday">0</span>
                        <!-- Bar bg indicator -->
                        <div class="absolute bottom-0 left-0 h-1 bg-indigo-500 transition-all duration-300"
                            style="width:0%" id="barWeekday"></div>
                    </button>
                    <!-- Cuma -->
                    <button onclick="addOffDay('friday')" id="btnOffFriday"
                        class="off-cat-btn flex flex-col items-center justify-center p-2 rounded-lg bg-slate-800 border border-white/5 hover:bg-slate-700 transition-all active:scale-95 group relative overflow-hidden">
                        <span
                            class="text-[8px] font-bold text-emerald-400 group-hover:text-emerald-300 uppercase tracking-wider mb-1">CUMA</span>
                        <span class="text-xl font-black text-white z-10" id="countFriday">0</span>
                        <div class="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-300"
                            style="width:0%" id="barFriday"></div>
                    </button>
                    <!-- Cmt -->
                    <button onclick="addOffDay('saturday')" id="btnOffSaturday"
                        class="off-cat-btn flex flex-col items-center justify-center p-2 rounded-lg bg-slate-800 border border-white/5 hover:bg-slate-700 transition-all active:scale-95 group relative overflow-hidden">
                        <span
                            class="text-[8px] font-bold text-amber-400 group-hover:text-amber-300 uppercase tracking-wider mb-1">CMT</span>
                        <span class="text-xl font-black text-white z-10" id="countSaturday">0</span>
                        <div class="absolute bottom-0 left-0 h-1 bg-amber-500 transition-all duration-300"
                            style="width:0%" id="barSaturday"></div>
                    </button>
                    <!-- Pazar -->
                    <button onclick="addOffDay('sunday')" id="btnOffSunday"
                        class="off-cat-btn flex flex-col items-center justify-center p-2 rounded-lg bg-slate-800 border border-white/5 hover:bg-slate-700 transition-all active:scale-95 group relative overflow-hidden">
                        <span
                            class="text-[8px] font-bold text-red-400 group-hover:text-red-300 uppercase tracking-wider mb-1">PAZAR</span>
                        <span class="text-xl font-black text-white z-10" id="countSunday">0</span>
                        <div class="absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-300"
                            style="width:0%" id="barSunday"></div>
                    </button>
                </div>
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
                                    class="w-full input-dark p-3 rounded-xl font-bold text-xl text-center"
                                    placeholder="0" onkeyup="calculateProfit()"></div>
                            <div><label class="text-[9px] text-gray-400 uppercase font-bold block mb-1.5 ml-1">Çoklu
                                    (40₺)</label><input type="number" id="multi"
                                    class="w-full input-dark p-3 rounded-xl font-bold text-xl text-center"
                                    placeholder="0" onkeyup="calculateProfit()"></div>
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
                        <div class="text-center" id="profitKmInfo" style="display:none;"><span
                                class="tier-info-badge"><i class="fa-solid fa-route mr-1"></i><span
                                    id="profitKmRate">0</span> TL/paket olarak
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
                        <div class="text-indigo-300 flex items-center gap-1"><span>Sonraki: <span id="nextBonusPkt"
                                    class="font-bold text-white">0</span> Pkt / <span id="nextTierInfo"
                                    class="font-bold">0 TL</span></span><i
                                class="fa-solid fa-arrow-right text-[8px]"></i>
                        </div>
                    </div>
                </div>

                <!-- NEW: Prominent Total Result Card -->
                <div
                    class="bg-gradient-to-r from-emerald-900/40 to-slate-900 border border-emerald-500/20 rounded-2xl p-5 mt-4 relative overflow-hidden">
                    <div class="relative z-10 flex justify-between items-center">
                        <div>
                            <p class="text-[10px] text-emerald-400 font-bold uppercase mb-1 tracking-widest">Tahmini
                                Toplam Ciro</p>
                            <p class="text-xs text-gray-400 font-mono" id="calculatedWorkDaysInfo"><span
                                    class="text-white font-bold" id="calculatedWorkDays">26</span> Gün Üzerinden</p>
                        </div>
                        <div class="text-right">
                            <p class="text-3xl font-black text-white tracking-tight">₺<span id="avgTotalGross">0</span>
                            </p>
                        </div>
                    </div>
                    <!-- Decorative Glow -->
                    <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl">
                    </div>
                </div>
            </div>
        </div>


        <!-- VIEW 3: DETAILED PLAN (DETAYLI PLAN) - New -->
        <div id="viewDetailed" class="hidden animate-fade-in space-y-4">
            <div class="bg-indigo-900/20 rounded-2xl p-4 border border-indigo-500/20 space-y-3">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-[10px] text-indigo-300 font-bold uppercase block mb-2">Başlangıç
                            Tarihi</label>
                        <input type="date" id="planStartDate"
                            class="w-full input-dark p-2 rounded-lg text-sm font-bold text-white bg-slate-800"
                            onchange="generateDetailedPlanInputs()">
                    </div>
                    <div>
                        <label class="text-[10px] text-indigo-300 font-bold uppercase block mb-2">Gün Sayısı</label>
                        <div class="flex items-center gap-2">
                            <button onclick="changeDetailDays(-1)"
                                class="w-8 h-8 bg-slate-800 rounded-lg text-white font-bold hover:bg-slate-700">-</button>
                            <span id="detailDaysDisp" class="text-xl font-black text-white w-8 text-center">7</span>
                            <button onclick="changeDetailDays(1)"
                                class="w-8 h-8 bg-slate-800 rounded-lg text-white font-bold hover:bg-slate-700">+</button>
                        </div>
                    </div>
                </div>
                <button onclick="generateDetailedPlanInputs()"
                    class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                    <i class="fa-solid fa-list-check"></i>
                    TABLOYU OLUŞTUR / GÜNCELLE
                </button>
            </div>

            <div id="detailedPlanContainer" class="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                <div class="text-center text-xs text-gray-500 py-10">
                    Yukarıdan gün sayısını seçip "TABLOYU OLUŞTUR" butonuna basın.
                </div>
            </div>

            <div id="detailedResultArea" class="hidden">
                <div
                    class="card p-5 mt-4 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border-indigo-500/10 shadow-lg shadow-indigo-500/5">
                    <div class="flex justify-between items-end">
                        <div>
                            <h2 class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">DETAYLI
                                PLAN
                                TOPLAM</h2>
                            <span class="text-3xl font-black text-white tracking-tight">₺<span
                                    id="detailTotalGross">0</span></span>
                            <div class="text-[10px] text-emerald-400 mt-1 font-bold">Bonuslar Dahil</div>
                        </div>
                    </div>
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
            <!-- AVM Counter Added -->
            <div class="bg-slate-900/80 rounded-2xl p-4 border border-slate-700 mb-4">
                <div class="counter-type mb-2 text-yellow-500">AVM GİRİŞİ (10₺)</div>
                <div class="flex items-center justify-between">
                    <button onclick="changePacketCount('avm', -1)" class="counter-btn bg-red-500/20 text-red-400"><i
                            class="fa-solid fa-minus"></i></button>
                    <div class="counter-value text-white" id="counterAvm">0</div>
                    <button onclick="changePacketCount('avm', 1)" class="counter-btn bg-green-500/20 text-green-400"><i
                            class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div class="text-center text-[11px] text-gray-400 font-bold">TOPLAM PAKET: <span id="totalPacketsCounter"
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
                <div class="earning-item flex justify-between items-center">
                    <div>
                        <div class="earning-label text-yellow-500">AVM Girişi (10₺)</div>
                        <div class="text-[11px] text-gray-400">Adet: <span id="avmCountDisplay">0</span></div>
                    </div>
                    <div class="earning-value" id="earnAvm">0 ₺</div>
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

            <!-- Date Selector (Dropdown) for Speed Menu -->
            <div class="modern-select-container mt-4">
                <label
                    class="text-[9px] text-gray-400 font-bold uppercase block absolute top-2 left-4 z-10 flex items-center pointer-events-none"><i
                        class="fa-solid fa-credit-card text-indigo-400 mr-1.5"></i> Ödeme Günü (Çarşamba)</label>
                <select id="perfPaymentDate" class="modern-select pt-8">
                    <!-- Populated by JS -->
                </select>
            </div>

            <button onclick="addPerfToPayment('perfPaymentDate')"
                class="add-income-btn w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 mb-4 mt-2">
                <i class="fa-solid fa-calendar-plus"></i>
                <span>HESAPLANAN NET TUTARI ÖDEMEYE EKLE</span>
            </button>
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
                        class="fa-solid fa-clock text-indigo-400"></i>
                    Önümüzdeki Saatler</h4>
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
                    class="fa-solid fa-sun mr-1 text-orange-400"></i> İşe
                Başlarken</button><button onclick="switchChecklist('end')" id="btnCheckEnd"
                class="toggle-btn inactive"><i class="fa-solid fa-moon mr-1 text-indigo-400"></i> İşten
                Dönerken</button></div>
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
                        class="text-white">Durum
                        Hesaplanıyor...</span><span id="oilPercentText" class="text-gray-400">0%</span></div>
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
</div>`;/*! Capacitor: https://capacitorjs.com/ - MIT License */const cI=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},i=(s,o)=>{n.platforms.set(s,o)},r=s=>{n.platforms.has(s)&&(n.currentPlatform=n.platforms.get(s))};return n.addPlatform=i,n.setPlatform=r,n},uI=t=>t.CapacitorPlatforms=cI(t),by=uI(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});by.addPlatform;by.setPlatform;var Sr;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Sr||(Sr={}));class Mc extends Error{constructor(e,n,i){super(e),this.message=e,this.code=n,this.data=i}}const dI=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},fI=t=>{var e,n,i,r,s;const o=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},l=a.Plugins=a.Plugins||{},c=t.CapacitorPlatforms,u=()=>o!==null?o.name:dI(t),d=((e=c==null?void 0:c.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||u,f=()=>d()!=="web",p=((n=c==null?void 0:c.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||f,v=x=>{const b=_.get(x);return!!(b!=null&&b.platforms.has(d())||m(x))},y=((i=c==null?void 0:c.currentPlatform)===null||i===void 0?void 0:i.isPluginAvailable)||v,k=x=>{var b;return(b=a.PluginHeaders)===null||b===void 0?void 0:b.find(K=>K.name===x)},m=((r=c==null?void 0:c.currentPlatform)===null||r===void 0?void 0:r.getPluginHeader)||k,h=x=>t.console.error(x),g=(x,b,K)=>Promise.reject(`${K} does not have an implementation of "${b}".`),_=new Map,S=(x,b={})=>{const K=_.get(x);if(K)return console.warn(`Capacitor plugin "${x}" already registered. Cannot register plugins twice.`),K.proxy;const R=d(),oe=m(x);let ae;const qt=async()=>(!ae&&R in b?ae=typeof b[R]=="function"?ae=await b[R]():ae=b[R]:o!==null&&!ae&&"web"in b&&(ae=typeof b.web=="function"?ae=await b.web():ae=b.web),ae),Bo=(N,H)=>{var j,st;if(oe){const Me=oe==null?void 0:oe.methods.find(Ke=>H===Ke.name);if(Me)return Me.rtype==="promise"?Ke=>a.nativePromise(x,H.toString(),Ke):(Ke,ft)=>a.nativeCallback(x,H.toString(),Ke,ft);if(N)return(j=N[H])===null||j===void 0?void 0:j.bind(N)}else{if(N)return(st=N[H])===null||st===void 0?void 0:st.bind(N);throw new Mc(`"${x}" plugin is not implemented on ${R}`,Sr.Unimplemented)}},qr=N=>{let H;const j=(...st)=>{const Me=qt().then(Ke=>{const ft=Bo(Ke,N);if(ft){const Qt=ft(...st);return H=Qt==null?void 0:Qt.remove,Qt}else throw new Mc(`"${x}.${N}()" is not implemented on ${R}`,Sr.Unimplemented)});return N==="addListener"&&(Me.remove=async()=>H()),Me};return j.toString=()=>`${N.toString()}() { [capacitor code] }`,Object.defineProperty(j,"name",{value:N,writable:!1,configurable:!1}),j},ji=qr("addListener"),Wi=qr("removeListener"),A=(N,H)=>{const j=ji({eventName:N},H),st=async()=>{const Ke=await j;Wi({eventName:N,callbackId:Ke},H)},Me=new Promise(Ke=>j.then(()=>Ke({remove:st})));return Me.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await st()},Me},O=new Proxy({},{get(N,H){switch(H){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return oe?A:ji;case"removeListener":return Wi;default:return qr(H)}}});return l[x]=O,_.set(x,{name:x,proxy:O,platforms:new Set([...Object.keys(b),...oe?[R]:[]])}),O},T=((s=c==null?void 0:c.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||S;return a.convertFileSrc||(a.convertFileSrc=x=>x),a.getPlatform=d,a.handleError=h,a.isNativePlatform=p,a.isPluginAvailable=y,a.pluginMethodNoop=g,a.registerPlugin=T,a.Exception=Mc,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},hI=t=>t.Capacitor=fI(t),ni=hI(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),xo=ni.registerPlugin;ni.Plugins;class Sy{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),i&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,i){const r=this.listeners[e];if(!r){if(i){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}r.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:i=>{this.notifyListeners(n,i)}}}unimplemented(e="not implemented"){return new ni.Exception(e,Sr.Unimplemented)}unavailable(e="not available"){return new ni.Exception(e,Sr.Unavailable)}async removeListener(e,n){const i=this.listeners[e];if(!i)return;const r=i.indexOf(n);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(i=>{this.notifyListeners(e,i)}))}}const zp=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),jp=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class pI extends Sy{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[r,s]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=jp(r).trim(),s=jp(s).trim(),n[r]=s}),n}async setCookie(e){try{const n=zp(e.key),i=zp(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${i||""}${r}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}xo("CapacitorCookies",{web:()=>new pI});const mI=async t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{const r=i.result;e(r.indexOf(",")>=0?r.split(",")[1]:r)},i.onerror=r=>n(r),i.readAsDataURL(t)}),gI=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(r=>r.toLocaleLowerCase()).reduce((r,s,o)=>(r[s]=t[e[o]],r),{})},vI=(t,e=!0)=>t?Object.entries(t).reduce((i,r)=>{const[s,o]=r;let a,l;return Array.isArray(o)?(l="",o.forEach(c=>{a=e?encodeURIComponent(c):c,l+=`${s}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${s}=${a}`),`${i}&${l}`},"").substr(1):null,yI=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),r=gI(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(r.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,a]of Object.entries(t.data||{}))s.set(o,a);n.body=s.toString()}else if(r.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((a,l)=>{s.append(l,a)});else for(const a of Object.keys(t.data))s.append(a,t.data[a]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(r.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class _I extends Sy{async request(e){const n=yI(e,e.webFetchExtra),i=vI(e.params,e.shouldEncodeUrlParams),r=i?`${e.url}?${i}`:e.url,s=await fetch(r,n),o=s.headers.get("content-type")||"";let{responseType:a="text"}=s.ok?e:{};o.includes("application/json")&&(a="json");let l,c;switch(a){case"arraybuffer":case"blob":c=await s.blob(),l=await mI(c);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const u={};return s.headers.forEach((d,f)=>{u[f]=d}),{data:l,headers:u,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}xo("CapacitorHttp",{web:()=>new _I});const EI="modulepreload",wI=function(t,e){return new URL(t,e).href},Wp={},it=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=wI(c,i),c in Wp)return;Wp[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!i)for(let v=o.length-1;v>=0;v--){const y=o[v];if(y.href===c&&(!u||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":EI,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((v,y)=>{p.addEventListener("load",v),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},mf=xo("Browser",{web:()=>it(()=>import("./web-DpLd9pdI.js"),[],import.meta.url).then(t=>new t.BrowserWeb)});function Ss(t,e,n){let i=0,r=0,s=0;for(let o=0;o<e.length;o++){const a=e[o];if(t>=a.min&&(i=a[n]),t<a.min&&s===0){s=a.min,r=a[n];break}}return{current:i,nextTarget:s,nextValue:r}}function xI(t,e,n){let i=0;for(let r=0;r<e.length;r++){const s=e[r];t>=s.min&&(i=s[n])}return i}function gf(t){return!t||t===0?0:t<=3?5:t<=5?6:t<=7?7:8}var $p={};/**
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
 */const ky={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw Br(e)},Br=function(t){return new Error("Firebase Database ("+ky.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ty=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},II=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(n[u],n[d],n[f],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ty(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):II(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new bI;const f=s<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const v=c<<6&192|d;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ay=function(t){const e=Ty(t);return vf.encodeByteArray(e,!0)},Qa=function(t){return Ay(t).replace(/\./g,"")},Ja=function(t){try{return vf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SI(t){return Cy(void 0,t)}function Cy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kI(n)||(t[n]=Cy(t[n],e[n]));return t}function kI(t){return t!=="__proto__"}/**
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
 */function TI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AI=()=>TI().__FIREBASE_DEFAULTS__,CI=()=>{if(typeof process>"u"||typeof $p>"u")return;const t=$p.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ja(t[1]);return e&&JSON.parse(e)},yf=()=>{try{return AI()||CI()||RI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ry=t=>{var e,n;return(n=(e=yf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NI=t=>{const e=Ry(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ny=()=>{var t;return(t=yf())===null||t===void 0?void 0:t.config},Py=t=>{var e;return(e=yf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Io{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function PI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qa(JSON.stringify(n)),Qa(JSON.stringify(o)),""].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _f(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function LI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OI(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function MI(){return ky.NODE_ADMIN===!0}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function FI(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BI="FirebaseError";class ui extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=BI,Object.setPrototypeOf(this,ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?HI(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ui(r,a,i)}}function HI(t,e){return t.replace(KI,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const KI=/\{\$([^}]+)}/g;/**
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
 */function Zs(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const Dy=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Zs(Ja(s[0])||""),n=Zs(Ja(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},VI=function(t){const e=Dy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zI=function(t){const e=Dy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Yu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xa(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Gp(s)&&Gp(o)){if(!Za(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Gp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ui(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class jI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function WI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");GI(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Uc),r.error===void 0&&(r.error=Uc),r.complete===void 0&&(r.complete=Uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}function Kl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const YI=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,I(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Vl=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function D(t){return t&&t._delegate?t._delegate:t}class Ni{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pi="[DEFAULT]";/**
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
 */class qI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Io;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JI(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:QI(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QI(t){return t===pi?void 0:t}function JI(t){return t.instantiationMode==="EAGER"}/**
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
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const ZI={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},eb=$.INFO,tb={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},nb=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=tb[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ef{constructor(e){this.name=e,this._logLevel=eb,this._logHandler=nb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const ib=(t,e)=>e.some(n=>t instanceof n);let Yp,qp;function rb(){return Yp||(Yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,qu=new WeakMap,My=new WeakMap,Fc=new WeakMap,wf=new WeakMap;function ob(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($n(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oy.set(n,t)}).catch(()=>{}),wf.set(e,t),e}function ab(t){if(qu.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qu.set(t,e)}let Qu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||My.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lb(t){Qu=t(Qu)}function cb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Bc(this),e,...n);return My.set(i,e.sort?e.sort():[e]),$n(i)}:sb().includes(t)?function(...e){return t.apply(Bc(this),e),$n(Oy.get(this))}:function(...e){return $n(t.apply(Bc(this),e))}}function ub(t){return typeof t=="function"?cb(t):(t instanceof IDBTransaction&&ab(t),ib(t,rb())?new Proxy(t,Qu):t)}function $n(t){if(t instanceof IDBRequest)return ob(t);if(Fc.has(t))return Fc.get(t);const e=ub(t);return e!==t&&(Fc.set(t,e),wf.set(e,t)),e}const Bc=t=>wf.get(t);function db(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=$n(o);return i&&o.addEventListener("upgradeneeded",l=>{i($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fb=["get","getKey","getAll","getAllKeys","count"],hb=["put","add","delete","clear"],Hc=new Map;function Qp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hc.get(e))return Hc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=hb.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||fb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Hc.set(e,s),s}lb(t=>({...t,get:(e,n,i)=>Qp(e,n)||t.get(e,n,i),has:(e,n)=>!!Qp(e,n)||t.has(e,n)}));/**
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
 */class pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mb(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function mb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ju="@firebase/app",Jp="0.10.15";/**
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
 */const yn=new Ef("@firebase/app"),gb="@firebase/app-compat",vb="@firebase/analytics-compat",yb="@firebase/analytics",_b="@firebase/app-check-compat",Eb="@firebase/app-check",wb="@firebase/auth",xb="@firebase/auth-compat",Ib="@firebase/database",bb="@firebase/data-connect",Sb="@firebase/database-compat",kb="@firebase/functions",Tb="@firebase/functions-compat",Ab="@firebase/installations",Cb="@firebase/installations-compat",Rb="@firebase/messaging",Nb="@firebase/messaging-compat",Pb="@firebase/performance",Lb="@firebase/performance-compat",Db="@firebase/remote-config",Ob="@firebase/remote-config-compat",Mb="@firebase/storage",Ub="@firebase/storage-compat",Fb="@firebase/firestore",Bb="@firebase/vertexai",Hb="@firebase/firestore-compat",Kb="firebase",Vb="11.0.1";/**
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
 */const Xu="[DEFAULT]",zb={[Ju]:"fire-core",[gb]:"fire-core-compat",[yb]:"fire-analytics",[vb]:"fire-analytics-compat",[Eb]:"fire-app-check",[_b]:"fire-app-check-compat",[wb]:"fire-auth",[xb]:"fire-auth-compat",[Ib]:"fire-rtdb",[bb]:"fire-data-connect",[Sb]:"fire-rtdb-compat",[kb]:"fire-fn",[Tb]:"fire-fn-compat",[Ab]:"fire-iid",[Cb]:"fire-iid-compat",[Rb]:"fire-fcm",[Nb]:"fire-fcm-compat",[Pb]:"fire-perf",[Lb]:"fire-perf-compat",[Db]:"fire-rc",[Ob]:"fire-rc-compat",[Mb]:"fire-gcs",[Ub]:"fire-gcs-compat",[Fb]:"fire-fst",[Hb]:"fire-fst-compat",[Bb]:"fire-vertex","fire-js":"fire-js",[Kb]:"fire-js-all"};/**
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
 */const el=new Map,jb=new Map,Zu=new Map;function Xp(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(Zu.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Zu.set(e,t);for(const n of el.values())Xp(n,t);for(const n of jb.values())Xp(n,t);return!0}function xf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pe(t){return t.settings!==void 0}/**
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
 */const Wb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new bo("app","Firebase",Wb);/**
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
 */class $b{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=Vb;function Uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Xu,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Gn.create("bad-app-name",{appName:String(r)});if(n||(n=Ny()),!n)throw Gn.create("no-options");const s=el.get(r);if(s){if(Za(n,s.options)&&Za(i,s.config))return s;throw Gn.create("duplicate-app",{appName:r})}const o=new XI(r);for(const l of Zu.values())o.addComponent(l);const a=new $b(n,i,o);return el.set(r,a),a}function Fy(t=Xu){const e=el.get(t);if(!e&&t===Xu&&Ny())return Uy();if(!e)throw Gn.create("no-app",{appName:t});return e}function Yn(t,e,n){var i;let r=(i=zb[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}Tr(new Ni(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Gb="firebase-heartbeat-database",Yb=1,eo="firebase-heartbeat-store";let Kc=null;function By(){return Kc||(Kc=db(Gb,Yb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Kc}async function qb(t){try{const n=(await By()).transaction(eo),i=await n.objectStore(eo).get(Hy(t));return await n.done,i}catch(e){if(e instanceof ui)yn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Zp(t,e){try{const i=(await By()).transaction(eo,"readwrite");await i.objectStore(eo).put(e,Hy(t)),await i.done}catch(n){if(n instanceof ui)yn.warn(n.message);else{const i=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(i.message)}}}function Hy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qb=1024,Jb=30*24*60*60*1e3;class Xb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eS(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=em();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Jb}),this._storage.overwrite(this._heartbeatsCache))}catch(i){yn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=em(),{heartbeatsToSend:i,unsentEntries:r}=Zb(this._heartbeatsCache.heartbeats),s=Qa(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return yn.warn(n),""}}}function em(){return new Date().toISOString().substring(0,10)}function Zb(t,e=Qb){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),tm(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tm(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class eS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?FI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tm(t){return Qa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tS(t){Tr(new Ni("platform-logger",e=>new pb(e),"PRIVATE")),Tr(new Ni("heartbeat",e=>new Xb(e),"PRIVATE")),Yn(Ju,Jp,t),Yn(Ju,Jp,"esm2017"),Yn("fire-js","")}tS("");var nS="firebase",iS="11.0.1";/**
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
 */Yn(nS,iS,"app");function If(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}/**
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
 */const rS={PHONE:"phone",TOTP:"totp"},sS={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},oS={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},aS={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},lS={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function cS(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Ky(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uS=cS,Vy=Ky,zy=new bo("auth","Firebase",Ky()),dS={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
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
 */const tl=new Ef("@firebase/auth");function fS(t,...e){tl.logLevel<=$.WARN&&tl.warn(`Auth (${Hr}): ${t}`,...e)}function Ea(t,...e){tl.logLevel<=$.ERROR&&tl.error(`Auth (${Hr}): ${t}`,...e)}/**
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
 */function rt(t,...e){throw Sf(t,...e)}function We(t,...e){return Sf(t,...e)}function bf(t,e,n){const i=Object.assign(Object.assign({},Vy()),{[e]:n});return new bo("auth","Firebase",i).create(e,{appName:t.name})}function Ce(t){return bf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kr(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&rt(t,"argument-error"),bf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return zy.create(t,...e)}function w(t,e,...n){if(!t)throw Sf(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ea(e),new Error(e)}function _n(t,e){t||zt(e)}/**
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
 */function to(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kf(){return nm()==="http:"||nm()==="https:"}function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kf()||DI()||"connection"in navigator)?navigator.onLine:!0}function pS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=_f()||Ly()}get(){return hS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tf(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jy{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gS=new So(3e4,6e4);function ee(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function te(t,e,n,i,r={}){return Wy(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ui(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return LI()||(c.referrerPolicy="no-referrer"),jy.fetch()($y(t,t.config.apiHost,n,a),c)})}async function Wy(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},mS),e);try{const r=new yS(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ms(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ms(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ms(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bf(t,u,c);rt(t,u)}}catch(r){if(r instanceof ui)throw r;rt(t,"network-request-failed",{message:String(r)})}}async function bn(t,e,n,i,r={}){const s=await te(t,e,n,i,r);return"mfaPendingCredential"in s&&rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $y(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Tf(t.config,r):`${t.config.apiScheme}://${r}`}function vS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(We(this.auth,"network-request-failed")),gS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ms(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=We(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */function im(t){return t!==void 0&&t.getResponse!==void 0}function rm(t){return t!==void 0&&t.enterprise!==void 0}class Gy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function _S(t){return(await te(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Yy(t,e){return te(t,"GET","/v2/recaptchaConfig",ee(t,e))}/**
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
 */async function ES(t,e){return te(t,"POST","/v1/accounts:delete",e)}async function wS(t,e){return te(t,"POST","/v1/accounts:update",e)}async function qy(t,e){return te(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function xS(t,e=!1){return D(t).getIdToken(e)}async function Qy(t,e=!1){const n=D(t),i=await n.getIdToken(e),r=zl(i);w(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ks(Vc(r.auth_time)),issuedAtTime:ks(Vc(r.iat)),expirationTime:ks(Vc(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function zl(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ea("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ja(n);return r?JSON.parse(r):(Ea("Failed to decode base64 JWT payload"),null)}catch(r){return Ea("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function sm(t){const e=zl(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function En(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ui&&IS(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function IS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function no(t){var e;const n=t.auth,i=await t.getIdToken(),r=await En(t,qy(n,{idToken:i}));w(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xy(s.providerUserInfo):[],a=SS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ed(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Jy(t){const e=D(t);await no(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SS(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Xy(t){return t.map(e=>{var{providerId:n}=e,i=If(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function kS(t,e){const n=await Wy(t,{},async()=>{const i=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=$y(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TS(t,e){return te(t,"POST","/v2/accounts:revokeToken",ee(t,e))}/**
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
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){w(e.length!==0,"internal-error");const n=sm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await kS(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new hr;return i&&(w(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(w(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(w(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function An(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=If(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ed(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await En(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qy(this,e)}reload(){return Jy(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await no(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(Ce(this.auth));const e=await this.getIdToken();return await En(this,ES(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,h=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:_,isAnonymous:S,providerData:T,stsTokenManager:x}=n;w(g&&x,e,"internal-error");const b=hr.fromJSON(this.name,x);w(typeof g=="string",e,"internal-error"),An(d,e.name),An(f,e.name),w(typeof _=="boolean",e,"internal-error"),w(typeof S=="boolean",e,"internal-error"),An(p,e.name),An(v,e.name),An(y,e.name),An(k,e.name),An(m,e.name),An(h,e.name);const K=new on({uid:g,auth:e,email:f,emailVerified:_,displayName:d,isAnonymous:S,photoURL:v,phoneNumber:p,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:h});return T&&Array.isArray(T)&&(K.providerData=T.map(R=>Object.assign({},R))),k&&(K._redirectEventId=k),K}static async _fromIdTokenResponse(e,n,i=!1){const r=new hr;r.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await no(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];w(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Xy(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new hr;a.updateFromIdToken(i);const l=new on({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ed(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const om=new Map;function an(t){_n(t instanceof Function,"Expected a class definition");let e=om.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,om.set(t,e),e)}/**
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
 */class Zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zy.type="NONE";const td=Zy;/**
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
 */function wa(t,e,n){return`firebase:${t}:${e}:${n}`}class pr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=wa(this.userKey,r.apiKey,s),this.fullPersistenceKey=wa("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new pr(an(td),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||an(td);const o=wa(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=on._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new pr(s,e,i))}}/**
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
 */function am(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(e0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s0(e))return"Blackberry";if(o0(e))return"Webos";if(t0(e))return"Safari";if((e.includes("chrome/")||n0(e))&&!e.includes("edge/"))return"Chrome";if(r0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function e0(t=Ge()){return/firefox\//i.test(t)}function t0(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n0(t=Ge()){return/crios\//i.test(t)}function i0(t=Ge()){return/iemobile/i.test(t)}function r0(t=Ge()){return/android/i.test(t)}function s0(t=Ge()){return/blackberry/i.test(t)}function o0(t=Ge()){return/webos/i.test(t)}function Af(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AS(t=Ge()){var e;return Af(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CS(){return OI()&&document.documentMode===10}function a0(t=Ge()){return Af(t)||r0(t)||o0(t)||s0(t)||/windows phone/i.test(t)||i0(t)}/**
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
 */function l0(t,e=[]){let n;switch(t){case"Browser":n=am(Ge());break;case"Worker":n=`${am(Ge())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${i}`}/**
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
 */class RS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function NS(t,e={}){return te(t,"GET","/v2/passwordPolicy",ee(t,e))}/**
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
 */const PS=6;class LS{constructor(e){var n,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:PS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class DS{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lm(this),this.idTokenSubscription=new lm(this),this.beforeStateQueue=new RS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await pr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qy(this,{idToken:e}),i=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await no(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(Ce(this));const n=e?D(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(Ce(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(Ce(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NS(this),n=new LS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await TS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await pr.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fe(t){return D(t)}class lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=WI(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ko={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OS(t){ko=t}function Cf(t){return ko.loadJS(t)}function MS(){return ko.recaptchaV2Script}function US(){return ko.recaptchaEnterpriseScript}function FS(){return ko.gapiScript}function c0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const BS=500,HS=6e4,ia=1e12;class KS{constructor(e){this.auth=e,this.counter=ia,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new jS(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||ia;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||ia;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||ia;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class VS{constructor(){this.enterprise=new zS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class jS{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;w(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=WS(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},HS)},BS))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function WS(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const $S="recaptcha-enterprise",Ts="NO_RECAPTCHA";class u0{constructor(e){this.type=$S,this.auth=fe(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Yy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Gy(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;rm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ts)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VS().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&rm(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=US();l.length!==0&&(l+=a),Cf(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function rs(t,e,n,i=!1,r=!1){const s=new u0(t);let o;if(r)o=Ts;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qn(t,e,n,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await rs(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rs(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await rs(t,e,n);return i(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())===null||c===void 0?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const u=await rs(t,e,n,!1,!0);return i(t,u)}return Promise.reject(l)})}else{const a=await rs(t,e,n,!1,!0);return i(t,a)}else return Promise.reject(r+" provider is not supported.")}async function d0(t){const e=fe(t),n=await Yy(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new Gy(n);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new u0(e).verify()}/**
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
 */function f0(t,e){const n=xf(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Za(s,e??{}))return r;rt(r,"already-initialized")}return n.initialize({options:e})}function GS(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function h0(t,e,n){const i=fe(t);w(i._canInitEmulator,i,"emulator-config-failed"),w(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=p0(e),{host:o,port:a}=YS(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qS()}function p0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YS(t){const e=p0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:cm(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:cm(o)}}}function cm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}/**
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
 */async function m0(t,e){return te(t,"POST","/v1/accounts:resetPassword",ee(t,e))}async function QS(t,e){return te(t,"POST","/v1/accounts:update",e)}async function JS(t,e){return te(t,"POST","/v1/accounts:signUp",e)}async function XS(t,e){return te(t,"POST","/v1/accounts:update",ee(t,e))}/**
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
 */async function ZS(t,e){return bn(t,"POST","/v1/accounts:signInWithPassword",ee(t,e))}async function jl(t,e){return te(t,"POST","/v1/accounts:sendOobCode",ee(t,e))}async function ek(t,e){return jl(t,e)}async function tk(t,e){return jl(t,e)}async function nk(t,e){return jl(t,e)}async function ik(t,e){return jl(t,e)}/**
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
 */async function rk(t,e){return bn(t,"POST","/v1/accounts:signInWithEmailLink",ee(t,e))}async function sk(t,e){return bn(t,"POST","/v1/accounts:signInWithEmailLink",ee(t,e))}/**
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
 */class Ar extends Vr{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ar(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Ar(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qn(e,n,"signInWithPassword",ZS,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return rk(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qn(e,i,"signUpPassword",JS,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return sk(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function dn(t,e){return bn(t,"POST","/v1/accounts:signInWithIdp",ee(t,e))}/**
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
 */const ok="http://localhost";class Gt extends Vr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=If(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Gt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,dn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:ok,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
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
 */async function um(t,e){return te(t,"POST","/v1/accounts:sendVerificationCode",ee(t,e))}async function ak(t,e){return bn(t,"POST","/v1/accounts:signInWithPhoneNumber",ee(t,e))}async function lk(t,e){const n=await bn(t,"POST","/v1/accounts:signInWithPhoneNumber",ee(t,e));if(n.temporaryProof)throw ms(t,"account-exists-with-different-credential",n);return n}const ck={USER_NOT_FOUND:"user-not-found"};async function uk(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return bn(t,"POST","/v1/accounts:signInWithPhoneNumber",ee(t,n),ck)}/**
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
 */class Qn extends Vr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Qn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Qn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return ak(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return lk(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return uk(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new Qn({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */function dk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fk(t){const e=hs(ps(t)).link,n=e?hs(ps(e)).deep_link_id:null,i=hs(ps(t)).deep_link_id;return(i?hs(ps(i)).link:null)||i||n||e||t}class zr{constructor(e){var n,i,r,s,o,a;const l=hs(ps(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=dk((r=l.mode)!==null&&r!==void 0?r:null);w(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fk(e);try{return new zr(n)}catch{return null}}}function hk(t){return zr.parseLink(t)}/**
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
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return Ar._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=zr.parseLink(n);return w(i,"argument-error"),Ar._fromEmailAndCode(e,i.code,i.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends Sn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class As extends jr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return w("providerId"in n&&"signInMethod"in n,"argument-error"),Gt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),Gt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return As.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return As.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!n&&!s||!a)return null;try{return new As(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Zt extends jr{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class Ht extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gt._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ht.credential(n,i)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
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
 */class en extends jr{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */const pk="http://localhost";class io extends Vr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,dn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=n;return!i||!r||!s||i!==r?null:new io(i,s)}static _create(e,n){return new io(e,n)}buildRequest(){return{requestUri:pk,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const mk="saml.";class nl extends Sn{constructor(e){w(e.startsWith(mk),"argument-error"),super(e)}static credentialFromResult(e){return nl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return nl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=io.fromJSON(e);return w(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:i}=e;if(!n||!i)return null;try{return io._create(i,n)}catch{return null}}}/**
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
 */class tn extends jr{constructor(){super("twitter.com")}static credential(e,n){return Gt._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return tn.credential(n,i)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */async function g0(t,e){return bn(t,"POST","/v1/accounts:signUp",ee(t,e))}/**
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
 */class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await on._fromIdTokenResponse(e,i,r),o=dm(i);return new wt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=dm(i);return new wt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function dm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function gk(t){var e;if(pe(t.app))return Promise.reject(Ce(t));const n=fe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new wt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await g0(n,{returnSecureToken:!0}),r=await wt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
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
 */class il extends ui{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,il.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new il(e,n,i,r)}}function v0(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?il._fromErrorAndOperation(t,s,e,i):s})}/**
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
 */function y0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function vk(t,e){const n=D(t);await Wl(!0,n,e);const{providerUserInfo:i}=await wS(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=y0(i||[]);return n.providerData=n.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Rf(t,e,n=!1){const i=await En(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wt._forOperation(t,"link",i)}async function Wl(t,e,n){await no(e);const i=y0(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";w(i.has(n)===t,e.auth,r)}/**
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
 */async function _0(t,e,n=!1){const{auth:i}=t;if(pe(i.app))return Promise.reject(Ce(i));const r="reauthenticate";try{const s=await En(t,v0(i,r,e,t),n);w(s.idToken,i,"internal-error");const o=zl(s.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(t.uid===a,i,"user-mismatch"),wt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(i,"user-mismatch"),s}}/**
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
 */async function E0(t,e,n=!1){if(pe(t.app))return Promise.reject(Ce(t));const i="signIn",r=await v0(t,i,e),s=await wt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function To(t,e){return E0(fe(t),e)}async function w0(t,e){const n=D(t);return await Wl(!1,n,e.providerId),Rf(n,e)}async function x0(t,e){return _0(D(t),e)}/**
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
 */async function yk(t,e){return bn(t,"POST","/v1/accounts:signInWithCustomToken",ee(t,e))}/**
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
 */async function _k(t,e){if(pe(t.app))return Promise.reject(Ce(t));const n=fe(t),i=await yk(n,{token:e,returnSecureToken:!0}),r=await wt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
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
 */class Ao{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Nf._fromServerResponse(e,n):"totpInfo"in n?Pf._fromServerResponse(e,n):rt(e,"internal-error")}}class Nf extends Ao{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Nf(n)}}class Pf extends Ao{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Pf(n)}}/**
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
 */function $l(t,e,n){var i;w(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),w(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(w(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(w(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Lf(t){const e=fe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ek(t,e,n){const i=fe(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&$l(i,r,n),await qn(i,r,"getOobCode",tk,"EMAIL_PASSWORD_PROVIDER")}async function wk(t,e,n){await m0(D(t),{oobCode:e,newPassword:n}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Lf(t),i})}async function xk(t,e){await XS(D(t),{oobCode:e})}async function I0(t,e){const n=D(t),i=await m0(n,{oobCode:e}),r=i.requestType;switch(w(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(i.mfaInfo,n,"internal-error");default:w(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=Ao._fromServerResponse(fe(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function Ik(t,e){const{data:n}=await I0(D(t),e);return n.email}async function bk(t,e,n){if(pe(t.app))return Promise.reject(Ce(t));const i=fe(t),o=await qn(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",g0,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Lf(t),l}),a=await wt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Sk(t,e,n){return pe(t.app)?Promise.reject(Ce(t)):To(D(t),di.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Lf(t),i})}/**
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
 */async function kk(t,e,n){const i=fe(t),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){w(a.handleCodeInApp,i,"argument-error"),a&&$l(i,o,a)}s(r,n),await qn(i,r,"getOobCode",nk,"EMAIL_PASSWORD_PROVIDER")}function Tk(t,e){const n=zr.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Ak(t,e,n){if(pe(t.app))return Promise.reject(Ce(t));const i=D(t),r=di.credentialWithLink(e,n||to());return w(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),To(i,r)}/**
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
 */async function Ck(t,e){return te(t,"POST","/v1/accounts:createAuthUri",ee(t,e))}/**
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
 */async function Rk(t,e){const n=kf()?to():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await Ck(D(t),i);return r||[]}async function Nk(t,e){const n=D(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&$l(n.auth,r,e);const{email:s}=await ek(n.auth,r);s!==t.email&&await t.reload()}async function Pk(t,e,n){const i=D(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&$l(i.auth,s,n);const{email:o}=await ik(i.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function Lk(t,e){return te(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Dk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=D(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await En(i,Lk(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Ok(t,e){const n=D(t);return pe(n.auth.app)?Promise.reject(Ce(n.auth)):b0(n,e,null)}function Mk(t,e){return b0(D(t),null,e)}async function b0(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await En(t,QS(i,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function Uk(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t!=null&&t.idToken)){const o=(n=(e=zl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new mr(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new Fk(s,r);case"github.com":return new Bk(s,r);case"google.com":return new Hk(s,r);case"twitter.com":return new Kk(s,r,t.screenName||null);case"custom":case"anonymous":return new mr(s,null);default:return new mr(s,i,r)}}class mr{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class S0 extends mr{constructor(e,n,i,r){super(e,n,i),this.username=r}}class Fk extends mr{constructor(e,n){super(e,"facebook.com",n)}}class Bk extends S0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Hk extends mr{constructor(e,n){super(e,"google.com",n)}}class Kk extends S0{constructor(e,n,i){super(e,"twitter.com",n,i)}}function Vk(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Uk(n)}/**
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
 */function zk(t,e){return D(t).setPersistence(e)}function jk(t){return d0(t)}async function Wk(t,e){return fe(t).validatePassword(e)}function k0(t,e,n,i){return D(t).onIdTokenChanged(e,n,i)}function T0(t,e,n){return D(t).beforeAuthStateChanged(e,n)}function $k(t,e,n,i){return D(t).onAuthStateChanged(e,n,i)}function Gk(t){D(t).useDeviceLanguage()}function Yk(t,e){return D(t).updateCurrentUser(e)}function A0(t){return D(t).signOut()}function qk(t,e){return fe(t).revokeAccessToken(e)}async function Qk(t){return D(t).delete()}/**
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
 */class _i{constructor(e,n,i){this.type=e,this.credential=n,this.user=i}static _fromIdtoken(e,n){return new _i("enroll",e,n)}static _fromMfaPendingCredential(e){return new _i("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return _i._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return _i._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Df{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=fe(e),r=n.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>Ao._fromServerResponse(i,a));w(r.mfaPendingCredential,i,"internal-error");const o=_i._fromMfaPendingCredential(r.mfaPendingCredential);return new Df(o,s,async a=>{const l=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const c=Object.assign(Object.assign({},r),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const u=await wt._fromIdTokenResponse(i,n.operationType,c);return await i._updateCurrentUser(u.user),u;case"reauthenticate":return w(n.user,i,"internal-error"),wt._forOperation(n.user,n.operationType,c);default:rt(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function Jk(t,e){var n;const i=D(t),r=e;return w(e.customData.operationType,i,"argument-error"),w((n=r.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),Df._fromError(i,r)}/**
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
 */function fm(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:start",ee(t,e))}function Xk(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:finalize",ee(t,e))}function Zk(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:start",ee(t,e))}function eT(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:finalize",ee(t,e))}function tT(t,e){return te(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ee(t,e))}class Of{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>Ao._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Of(e)}async getSession(){return _i._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const i=e,r=await this.getSession(),s=await En(this.user,i._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const r=await En(this.user,tT(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const zc=new WeakMap;function nT(t){const e=D(t);return zc.has(e)||zc.set(e,Of._fromUser(e)),zc.get(e)}const rl="__sak";/**
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
 */class C0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rl,"1"),this.storage.removeItem(rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iT=1e3,rT=10;class R0 extends C0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);CS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,rT):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R0.type="LOCAL";const N0=R0;/**
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
 */class P0 extends C0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P0.type="SESSION";const Mf=P0;/**
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
 */function sT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Gl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await sT(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gl.receivers=[];/**
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
 */function Yl(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class oT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Yl("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ge(){return window}function aT(t){ge().location.href=t}/**
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
 */function Uf(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function lT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uT(){return Uf()?self:null}/**
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
 */const L0="firebaseLocalStorageDb",dT=1,sl="firebaseLocalStorage",D0="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ql(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function fT(){const t=indexedDB.deleteDatabase(L0);return new Co(t).toPromise()}function nd(){const t=indexedDB.open(L0,dT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(sl,{keyPath:D0})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(sl)?e(i):(i.close(),await fT(),e(await nd()))})})}async function hm(t,e,n){const i=ql(t,!0).put({[D0]:e,value:n});return new Co(i).toPromise()}async function hT(t,e){const n=ql(t,!1).get(e),i=await new Co(n).toPromise();return i===void 0?null:i.value}function pm(t,e){const n=ql(t,!0).delete(e);return new Co(n).toPromise()}const pT=800,mT=3;class O0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>mT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gl._getInstance(uT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lT(),!this.activeServiceWorker)return;this.sender=new oT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await hm(e,rl,"1"),await pm(e,rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>hm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>hT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ql(r,!1).getAll();return new Co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O0.type="LOCAL";const M0=O0;/**
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
 */function mm(t,e){return te(t,"POST","/v2/accounts/mfaSignIn:start",ee(t,e))}function gT(t,e){return te(t,"POST","/v2/accounts/mfaSignIn:finalize",ee(t,e))}function vT(t,e){return te(t,"POST","/v2/accounts/mfaSignIn:finalize",ee(t,e))}/**
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
 */const jc=c0("rcb"),yT=new So(3e4,6e4);class _T{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ge().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return w(ET(n),e,"argument-error"),this.shouldResolveImmediately(n)&&im(ge().grecaptcha)?Promise.resolve(ge().grecaptcha):new Promise((i,r)=>{const s=ge().setTimeout(()=>{r(We(e,"network-request-failed"))},yT.get());ge()[jc]=()=>{ge().clearTimeout(s),delete ge()[jc];const a=ge().grecaptcha;if(!a||!im(a)){r(We(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,i(a)};const o=`${MS()}?${Ui({onload:jc,render:"explicit",hl:n})}`;Cf(o).catch(()=>{clearTimeout(s),r(We(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ge().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ET(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class wT{async load(e){return new KS(e)}clearedOneInstance(){}}/**
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
 */const Cs="recaptcha",xT={theme:"light",type:"image"};class IT{constructor(e,n,i=Object.assign({},xT)){this.parameters=i,this.type=Cs,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=fe(e),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof n=="string"?document.getElementById(n):n;w(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wT:new _T,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=ge()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(kf()&&!Uf(),this.auth,"internal-error"),await bT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await _S(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function bT(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ff{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Qn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function ST(t,e,n){if(pe(t.app))return Promise.reject(Ce(t));const i=fe(t),r=await Ql(i,e,D(n));return new Ff(r,s=>To(i,s))}async function kT(t,e,n){const i=D(t);await Wl(!1,i,"phone");const r=await Ql(i.auth,e,D(n));return new Ff(r,s=>w0(i,s))}async function TT(t,e,n){const i=D(t);if(pe(i.auth.app))return Promise.reject(Ce(i.auth));const r=await Ql(i.auth,e,D(n));return new Ff(r,s=>x0(i,s))}async function Ql(t,e,n){var i;if(!t._getRecaptchaConfig())try{await d0(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){w(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await qn(t,o,"mfaSmsEnrollment",async(u,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===Ts){w((n==null?void 0:n.type)===Cs,u,"argument-error");const f=await Wc(u,d,n);return fm(u,f)}return fm(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{w(s.type==="signin",t,"internal-error");const o=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;w(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await qn(t,a,"mfaSmsSignIn",async(d,f)=>{if(f.phoneSignInInfo.captchaResponse===Ts){w((n==null?void 0:n.type)===Cs,d,"argument-error");const p=await Wc(d,f,n);return mm(d,p)}return mm(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await qn(t,s,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===Ts){w((n==null?void 0:n.type)===Cs,c,"argument-error");const d=await Wc(c,u,n);return um(c,d)}return um(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function AT(t,e){const n=D(t);if(pe(n.auth.app))return Promise.reject(Ce(n.auth));await Rf(n,e)}async function Wc(t,e,n){w(n.type===Cs,t,"argument-error");const i=await n.verify();w(typeof i=="string",t,"argument-error");const r=Object.assign({},e);if("phoneEnrollmentInfo"in r){const s=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,l=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:l}}),r}else if("phoneSignInInfo"in r){const s=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:s,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:i}),r}/**
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
 */class Ii{constructor(e){this.providerId=Ii.PROVIDER_ID,this.auth=fe(e)}verifyPhoneNumber(e,n){return Ql(this.auth,e,D(n))}static credential(e,n){return Qn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Ii.credentialFromTaggedObject(n)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?Qn._fromTokenResponse(n,i):null}}Ii.PROVIDER_ID="phone";Ii.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Fi(t,e){return e?an(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bf extends Vr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CT(t){return E0(t.auth,new Bf(t),t.bypassAuthState)}function RT(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),_0(n,new Bf(t),t.bypassAuthState)}async function NT(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Rf(n,new Bf(t),t.bypassAuthState)}/**
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
 */class U0{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CT;case"linkViaPopup":case"linkViaRedirect":return NT;case"reauthViaPopup":case"reauthViaRedirect":return RT;default:rt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PT=new So(2e3,1e4);async function LT(t,e,n){if(pe(t.app))return Promise.reject(We(t,"operation-not-supported-in-this-environment"));const i=fe(t);Kr(t,e,Sn);const r=Fi(i,n);return new ln(i,"signInViaPopup",e,r).executeNotNull()}async function DT(t,e,n){const i=D(t);if(pe(i.auth.app))return Promise.reject(We(i.auth,"operation-not-supported-in-this-environment"));Kr(i.auth,e,Sn);const r=Fi(i.auth,n);return new ln(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function OT(t,e,n){const i=D(t);Kr(i.auth,e,Sn);const r=Fi(i.auth,n);return new ln(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class ln extends U0{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PT.get())};e()}}ln.currentPopupAction=null;/**
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
 */const MT="pendingRedirect",xa=new Map;class UT extends U0{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=xa.get(this.auth._key());if(!e){try{const i=await FT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}xa.set(this.auth._key(),e)}return this.bypassAuthState||xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FT(t,e){const n=B0(e),i=F0(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function Hf(t,e){return F0(t)._set(B0(e),"true")}function BT(t,e){xa.set(t._key(),e)}function F0(t){return an(t._redirectPersistence)}function B0(t){return wa(MT,t.config.apiKey,t.name)}/**
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
 */function HT(t,e,n){return KT(t,e,n)}async function KT(t,e,n){if(pe(t.app))return Promise.reject(Ce(t));const i=fe(t);Kr(t,e,Sn),await i._initializationPromise;const r=Fi(i,n);return await Hf(r,i),r._openRedirect(i,e,"signInViaRedirect")}function VT(t,e,n){return zT(t,e,n)}async function zT(t,e,n){const i=D(t);if(Kr(i.auth,e,Sn),pe(i.auth.app))return Promise.reject(Ce(i.auth));await i.auth._initializationPromise;const r=Fi(i.auth,n);await Hf(r,i.auth);const s=await V0(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function jT(t,e,n){return WT(t,e,n)}async function WT(t,e,n){const i=D(t);Kr(i.auth,e,Sn),await i.auth._initializationPromise;const r=Fi(i.auth,n);await Wl(!1,i,e.providerId),await Hf(r,i.auth);const s=await V0(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function H0(t,e){return await fe(t)._initializationPromise,K0(t,e,!1)}async function K0(t,e,n=!1){if(pe(t.app))return Promise.reject(Ce(t));const i=fe(t),r=Fi(i,e),o=await new UT(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function V0(t){const e=Yl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const $T=10*60*1e3;class GT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!z0(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(We(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$T&&this.cachedEventUids.clear(),this.cachedEventUids.has(gm(e))}saveEventToCache(e){this.cachedEventUids.add(gm(e)),this.lastProcessedEventTime=Date.now()}}function gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function z0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z0(t);default:return!1}}/**
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
 */async function qT(t,e={}){return te(t,"GET","/v1/projects",e)}/**
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
 */const QT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JT=/^https?/;async function XT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qT(t);for(const n of e)try{if(ZT(n))return}catch{}rt(t,"unauthorized-domain")}function ZT(t){const e=to(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!JT.test(n))return!1;if(QT.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const eA=new So(3e4,6e4);function vm(){const t=ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tA(t){return new Promise((e,n)=>{var i,r,s;function o(){vm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vm(),n(We(t,"network-request-failed"))},timeout:eA.get()})}if(!((r=(i=ge().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ge().gapi)===null||s===void 0)&&s.load)o();else{const a=c0("iframefcb");return ge()[a]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},Cf(`${FS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ia=null,e})}let Ia=null;function nA(t){return Ia=Ia||tA(t),Ia}/**
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
 */const iA=new So(5e3,15e3),rA="__/auth/iframe",sA="emulator/auth/iframe",oA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lA(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tf(e,sA):`https://${t.config.authDomain}/${rA}`,i={apiKey:e.apiKey,appName:t.name,v:Hr},r=aA.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Ui(i).slice(1)}`}async function cA(t){const e=await nA(t),n=ge().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:lA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oA,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},iA.get());function l(){ge().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const uA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dA=500,fA=600,hA="_blank",pA="http://localhost";class ym{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mA(t,e,n,i=dA,r=fA){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},uA),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Ge().toLowerCase();n&&(a=n0(c)?hA:n),e0(c)&&(e=e||pA,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(AS(c)&&a!=="_self")return gA(e||"",a),new ym(null);const d=window.open(e||"",a,u);w(d,t,"popup-blocked");try{d.focus()}catch{}return new ym(d)}function gA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const vA="__/auth/handler",yA="emulator/auth/handler",_A=encodeURIComponent("fac");async function _m(t,e,n,i,r,s){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Hr,eventId:r};if(e instanceof Sn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof jr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${_A}=${encodeURIComponent(l)}`:"";return`${EA(t)}?${Ui(a).slice(1)}${c}`}function EA({config:t}){return t.emulator?Tf(t,yA):`https://${t.authDomain}/${vA}`}/**
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
 */const $c="webStorageSupport";class wA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mf,this._completeRedirectFn=K0,this._overrideRedirectResult=BT}async _openPopup(e,n,i,r){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _m(e,n,i,to(),r);return mA(e,o,Yl())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await _m(e,n,i,to(),r);return aT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(_n(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await cA(e),i=new GT(e);return n.register("authEvent",r=>(w(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[$c];o!==void 0&&n(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a0()||t0()||Af()}}const j0=wA;class W0{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return zt("unexpected MultiFactorSessionType")}}}class Kf extends W0{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Kf(e)}_finalizeEnroll(e,n,i){return Xk(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return gT(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $0{constructor(){}static assertion(e){return Kf._fromCredential(e)}}$0.FACTOR_ID="phone";class G0{static assertionForEnrollment(e,n){return ro._fromSecret(e,n)}static assertionForSignIn(e,n){return ro._fromEnrollmentId(e,n)}static async generateSecret(e){var n;const i=e;w(typeof((n=i.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");const r=await Zk(i.user.auth,{idToken:i.credential,totpEnrollmentInfo:{}});return Jl._fromStartTotpMfaEnrollmentResponse(r,i.user.auth)}}G0.FACTOR_ID="totp";class ro extends W0{constructor(e,n,i){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=i}static _fromSecret(e,n){return new ro(n,void 0,e)}static _fromEnrollmentId(e,n){return new ro(n,e)}async _finalizeEnroll(e,n,i){return w(typeof this.secret<"u",e,"argument-error"),eT(e,{idToken:n,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){w(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const i={verificationCode:this.otp};return vT(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}}class Jl{constructor(e,n,i,r,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=i,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Jl(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var i;let r=!1;return(ra(e)||ra(n))&&(r=!0),r&&(ra(e)&&(e=((i=this.auth.currentUser)===null||i===void 0?void 0:i.email)||"unknownuser"),ra(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ra(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var Em="@firebase/auth",wm="1.8.0";/**
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
 */class xA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bA(t){Tr(new Ni("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l0(t)},c=new DS(i,r,s,l);return GS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Tr(new Ni("auth-internal",e=>{const n=fe(e.getProvider("auth").getImmediate());return(i=>new xA(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(Em,wm,IA(t)),Yn(Em,wm,"esm2017")}/**
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
 */const SA=5*60,kA=Py("authIdTokenMaxAge")||SA;let xm=null;const TA=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>kA)return;const r=n==null?void 0:n.token;xm!==r&&(xm=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Y0(t=Fy()){const e=xf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=f0(t,{popupRedirectResolver:j0,persistence:[M0,N0,Mf]}),i=Py("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=TA(s.toString());T0(n,o,()=>o(n.currentUser)),k0(n,a=>o(a))}}const r=Ry("auth");return r&&h0(n,`http://${r}`),n}function AA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}OS({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=We("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",AA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bA("Browser");const Gc=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:lS,ActionCodeURL:zr,AuthCredential:Vr,AuthErrorCodes:dS,EmailAuthCredential:Ar,EmailAuthProvider:di,FacebookAuthProvider:Zt,FactorId:rS,GithubAuthProvider:en,GoogleAuthProvider:Ht,OAuthCredential:Gt,OAuthProvider:As,OperationType:aS,PhoneAuthCredential:Qn,PhoneAuthProvider:Ii,PhoneMultiFactorGenerator:$0,ProviderId:sS,RecaptchaVerifier:IT,SAMLAuthProvider:nl,SignInMethod:oS,TotpMultiFactorGenerator:G0,TotpSecret:Jl,TwitterAuthProvider:tn,applyActionCode:xk,beforeAuthStateChanged:T0,browserLocalPersistence:N0,browserPopupRedirectResolver:j0,browserSessionPersistence:Mf,checkActionCode:I0,confirmPasswordReset:wk,connectAuthEmulator:h0,createUserWithEmailAndPassword:bk,debugErrorMap:uS,deleteUser:Qk,fetchSignInMethodsForEmail:Rk,getAdditionalUserInfo:Vk,getAuth:Y0,getIdToken:xS,getIdTokenResult:Qy,getMultiFactorResolver:Jk,getRedirectResult:H0,inMemoryPersistence:td,indexedDBLocalPersistence:M0,initializeAuth:f0,initializeRecaptchaConfig:jk,isSignInWithEmailLink:Tk,linkWithCredential:w0,linkWithPhoneNumber:kT,linkWithPopup:OT,linkWithRedirect:jT,multiFactor:nT,onAuthStateChanged:$k,onIdTokenChanged:k0,parseActionCodeURL:hk,prodErrorMap:Vy,reauthenticateWithCredential:x0,reauthenticateWithPhoneNumber:TT,reauthenticateWithPopup:DT,reauthenticateWithRedirect:VT,reload:Jy,revokeAccessToken:qk,sendEmailVerification:Nk,sendPasswordResetEmail:Ek,sendSignInLinkToEmail:kk,setPersistence:zk,signInAnonymously:gk,signInWithCredential:To,signInWithCustomToken:_k,signInWithEmailAndPassword:Sk,signInWithEmailLink:Ak,signInWithPhoneNumber:ST,signInWithPopup:LT,signInWithRedirect:HT,signOut:A0,unlink:vk,updateCurrentUser:Yk,updateEmail:Ok,updatePassword:Mk,updatePhoneNumber:AT,updateProfile:Dk,useDeviceLanguage:Gk,validatePassword:Wk,verifyBeforeUpdateEmail:Pk,verifyPasswordResetCode:Ik},Symbol.toStringTag,{value:"Module"}));var Im={};const bm="@firebase/database",Sm="1.0.9";/**
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
 */let q0="";function CA(t){q0=t}/**
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
 */class RA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class NA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Q0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new RA(e)}}catch{}return new NA},Ei=Q0("localStorage"),PA=Q0("sessionStorage");/**
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
 */const gr=new Ef("@firebase/database"),LA=function(){let t=1;return function(){return t++}}(),J0=function(t){const e=YI(t),n=new jI;n.update(e);const i=n.digest();return vf.encodeByteArray(i)},Ro=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ro.apply(null,i):typeof i=="object"?e+=we(i):e+=i,e+=" "}return e};let Rs=null,km=!0;const DA=function(t,e){I(!0,"Can't turn on custom loggers persistently."),gr.logLevel=$.VERBOSE,Rs=gr.log.bind(gr)},Ne=function(...t){if(km===!0&&(km=!1,Rs===null&&PA.get("logging_enabled")===!0&&DA()),Rs){const e=Ro.apply(null,t);Rs(e)}},No=function(t){return function(...e){Ne(t,...e)}},id=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ro(...t);gr.error(e)},wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ro(...t)}`;throw gr.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+Ro(...t);gr.warn(e)},OA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},MA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cr="[MIN_NAME]",Pi="[MAX_NAME]",Bi=function(t,e){if(t===e)return 0;if(t===Cr||e===Pi)return-1;if(e===Cr||t===Pi)return 1;{const n=Tm(t),i=Tm(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},UA=function(t,e){return t===e?0:t<e?-1:1},ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},zf=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=we(e[i]),n+=":",n+=zf(t[e[i]]);return n+="}",n},X0=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Z0=function(t){I(!Vf(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},FA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HA(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const KA=new RegExp("^-?(0*)\\d{1,10}$"),VA=-2147483648,zA=2147483647,Tm=function(t){if(KA.test(t)){const e=Number(t);if(e>=VA&&e<=zA)return e}return null},Wr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},jA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ns=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WA{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class $A{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class ba{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ba.OWNER="owner";/**
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
 */const jf="5",e_="v",t_="s",n_="r",i_="f",r_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,s_="ls",o_="p",rd="ac",a_="websocket",l_="long_polling";/**
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
 */class c_{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GA(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function u_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let i;if(e===a_)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===l_)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GA(t)&&(n.ns=t.namespace);const r=[];return Oe(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class YA{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SI(this.counters_)}}/**
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
 */const Yc={},qc={};function Wf(t){const e=t.toString();return Yc[e]||(Yc[e]=new YA),Yc[e]}function qA(t,e){const n=t.toString();return qc[n]||(qc[n]=e()),qc[n]}/**
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
 */class QA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Wr(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Am="start",JA="close",XA="pLPCommand",ZA="pRTLPCB",d_="id",f_="pw",h_="ser",eC="cb",tC="seg",nC="ts",iC="d",rC="dframe",p_=1870,m_=30,sC=p_-m_,oC=25e3,aC=3e4;class or{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=No(e),this.stats_=Wf(n),this.urlFn=l=>(this.appCheckToken&&(l[rd]=this.appCheckToken),u_(n,l_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aC)),MA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $f((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Am)this.id=a,this.password=l;else if(o===JA)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Am]="t",i[h_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[eC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[e_]=jf,this.transportSessionId&&(i[t_]=this.transportSessionId),this.lastSessionId&&(i[s_]=this.lastSessionId),this.applicationId&&(i[o_]=this.applicationId),this.appCheckToken&&(i[rd]=this.appCheckToken),typeof location<"u"&&location.hostname&&r_.test(location.hostname)&&(i[n_]=i_);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){or.forceAllow_=!0}static forceDisallow(){or.forceDisallow_=!0}static isAvailable(){return or.forceAllow_?!0:!or.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!FA()&&!BA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ay(n),r=X0(i,sC);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[rC]="t",i[d_]=e,i[f_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $f{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LA(),window[XA+this.uniqueCallbackIdentifier]=e,window[ZA+this.uniqueCallbackIdentifier]=n,this.myIFrame=$f.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[d_]=this.myID,e[f_]=this.myPW,e[h_]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+m_+i.length<=p_;){const o=this.pendingSegs.shift();i=i+"&"+tC+r+"="+o.seg+"&"+nC+r+"="+o.ts+"&"+iC+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(oC)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const lC=16384,cC=45e3;let ol=null;typeof MozWebSocket<"u"?ol=MozWebSocket:typeof WebSocket<"u"&&(ol=WebSocket);class At{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=No(this.connId),this.stats_=Wf(n),this.connURL=At.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[e_]=jf,typeof location<"u"&&location.hostname&&r_.test(location.hostname)&&(o[n_]=i_),n&&(o[t_]=n),i&&(o[s_]=i),r&&(o[rd]=r),s&&(o[o_]=s),u_(e,a_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ei.set("previous_websocket_failure",!0);try{let i;MI(),this.mySock=new ol(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ol!==null&&!At.forceDisallow_}static previouslyFailed(){return Ei.isInMemoryStorage||Ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Zs(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=X0(n,lC);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}At.responsesRequiredToBeHealthy=2;At.healthyTimeout=3e4;/**
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
 */class so{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[or,At]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=At&&At.isAvailable();let i=n&&!At.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[At];else{const r=this.transports_=[];for(const s of so.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);so.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}so.globalTransportInitialized_=!1;/**
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
 */const uC=6e4,dC=5e3,fC=10*1024,hC=100*1024,Qc="t",Cm="d",pC="s",Rm="r",mC="e",Nm="o",Pm="a",Lm="n",Dm="p",gC="h";class vC{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=No("c:"+this.id+":"),this.transportManager_=new so(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ns(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qc in e){const n=e[Qc];n===Pm?this.upgradeIfSecondaryHealthy_():n===Rm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ss("t",e),i=ss("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ss("t",e),i=ss("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ss(Qc,e);if(Cm in e){const i=e[Cm];if(n===gC){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Lm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===pC?this.onConnectionShutdown_(i):n===Rm?this.onReset_(i):n===mC?id("Server Error: "+i):n===Nm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):id("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jf!==i&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ns(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ns(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(dC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class g_{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class v_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class al extends v_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_f()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new al}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Om=32,Mm=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ii(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Gf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function oo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function y_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ue(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof G)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new G(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=M(t),i=M(e);if(n===null)return e;if(n===i)return ze(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _C(t,e){const n=oo(t,0),i=oo(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Bi(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function Yf(t,e){if(ii(t)!==ii(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function vt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ii(t)>ii(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class EC{constructor(e,n){this.errorPrefix_=n,this.parts_=oo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Vl(this.parts_[i]);__(this)}}function wC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vl(e),__(t)}function xC(t){const e=t.parts_.pop();t.byteLength_-=Vl(e),t.parts_.length>0&&(t.byteLength_-=1)}function __(t){if(t.byteLength_>Mm)throw new Error(t.errorPrefix_+"has a key path longer than "+Mm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Om)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Om+") or object contains a cycle "+mi(t))}function mi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class qf extends v_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new qf}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const os=1e3,IC=60*5*1e3,Um=30*1e3,bC=1.3,SC=3e4,kC="server_kill",Fm=3;class fn extends g_{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=fn.nextPersistentConnectionId_++,this.log_=No("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=os,this.maxReconnectDelay_=IC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&al.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(we(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Io,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;fn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const i=kr(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Um)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=VI(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):id("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=os,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=os,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SC&&(this.reconnectDelay_=os),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new vC(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{$e(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(kC)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&$e(d),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yu(this.interruptReasons_)&&(this.reconnectDelay_=os,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>zf(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new G(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fm&&(this.reconnectDelay_=Um,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+q0.replace(/\./g,"-")]=1,_f()?e["framework.cordova"]=1:Ly()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=al.getInstance().currentlyOnline();return Yu(this.interruptReasons_)&&e}}fn.nextPersistentConnectionId_=0;fn.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class Xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new U(Cr,e),r=new U(Cr,n);return this.compare(i,r)!==0}minPost(){return U.MIN}}/**
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
 */let sa;class E_ extends Xl{static get __EMPTY_NODE(){return sa}static set __EMPTY_NODE(e){sa=e}compare(e,n){return Bi(e.name,n.name)}isDefinedOn(e){throw Br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Pi,sa)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,sa)}toString(){return".key"}}const vr=new E_;/**
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
 */class oa{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Te.RED,this.left=r??Xe.EMPTY_NODE,this.right=s??Xe.EMPTY_NODE}copy(e,n,i,r,s){return new Te(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class TC{copy(e,n,i,r,s){return this}insert(e,n,i){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xe{constructor(e,n=Xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new oa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new oa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new oa(this.root_,null,this.comparator_,!0,e)}}Xe.EMPTY_NODE=new TC;/**
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
 */function AC(t,e){return Bi(t.name,e.name)}function Qf(t,e){return Bi(t,e)}/**
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
 */let sd;function CC(t){sd=t}const w_=function(t){return typeof t=="number"?"number:"+Z0(t):"string:"+t},x_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else I(t===sd||t.isEmpty(),"priority of unexpected type.");I(t===sd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bm;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),x_(this.priorityNode_)}static set __childrenNodeConstructor(e){Bm=e}static get __childrenNodeConstructor(){return Bm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=M(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+w_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Z0(this.value_):e+=this.value_,this.lazyHash_=J0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Se.VALUE_TYPE_ORDER.indexOf(n),s=Se.VALUE_TYPE_ORDER.indexOf(i);return I(r>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let I_,b_;function RC(t){I_=t}function NC(t){b_=t}class PC extends Xl{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Bi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Pi,new Se("[PRIORITY-POST]",b_))}makePost(e,n){const i=I_(e);return new U(n,new Se("[PRIORITY-POST]",i))}toString(){return".priority"}}const de=new PC;/**
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
 */const LC=Math.log(2);class DC{constructor(e){const n=s=>parseInt(Math.log(s)/LC,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ll=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Te(f,d.node,Te.BLACK,null,null);{const p=parseInt(u/2,10)+l,v=r(l,p),y=r(p+1,c);return d=t[p],f=n?n(d):d,new Te(f,d.node,Te.BLACK,v,y)}},s=function(l){let c=null,u=null,d=t.length;const f=function(v,y){const k=d-v,m=d;d-=v;const h=r(k+1,m),g=t[k],_=n?n(g):g;p(new Te(_,g.node,y,null,h))},p=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),k=Math.pow(2,l.count-(v+1));y?f(k,Te.BLACK):(f(k,Te.BLACK),f(k,Te.RED))}return u},o=new DC(t.length),a=s(o);return new Xe(i||e,a)};/**
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
 */let Jc;const Gi={};class cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Gi&&de,"ChildrenNode.ts has not been loaded"),Jc=Jc||new cn({".priority":Gi},{".priority":de}),Jc}get(e){const n=kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xe?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==vr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=ll(i,e.getCompare()):a=Gi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new cn(u,c)}addToIndexes(e,n){const i=Xa(this.indexes_,(r,s)=>{const o=kr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),r===Gi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ll(a,o.getCompare())}else return Gi;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new cn(i,this.indexSet_)}removeFromIndexes(e,n){const i=Xa(this.indexes_,r=>{if(r===Gi)return r;{const s=n.get(e.name);return s?r.remove(new U(e.name,s)):r}});return new cn(i,this.indexSet_)}}/**
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
 */let as;class P{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&x_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return as||(as=new P(new Xe(Qf),null,cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||as}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?as:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new U(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?as:this.priorityNode_;return new P(r,o,s)}}updateChild(e,n){const i=M(e);if(i===null)return n;{I(M(e)!==".priority"||ii(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Q(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(de,(o,a)=>{n[o]=a.val(e),i++,s&&P.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+w_(this.getPriority().val())+":"),this.forEachChild(de,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":J0(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Po?-1:0}withIndex(e){if(e===vr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(de),r=n.getIterator(de);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vr?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OC extends P{constructor(){super(new Xe(Qf),P.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Po=new OC;Object.defineProperties(U,{MIN:{value:new U(Cr,P.EMPTY_NODE)},MAX:{value:new U(Pi,Po)}});E_.__EMPTY_NODE=P.EMPTY_NODE;Se.__childrenNodeConstructor=P;CC(Po);NC(Po);/**
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
 */const MC=!0;function Ee(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,Ee(e))}if(!(t instanceof Array)&&MC){const n=[];let i=!1;if(Oe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return P.EMPTY_NODE;const s=ll(n,AC,o=>o.name,Qf);if(i){const o=ll(n,de.getCompare());return new P(s,Ee(e),new cn({".priority":o},{".priority":de}))}else return new P(s,Ee(e),cn.Default)}else{let n=P.EMPTY_NODE;return Oe(t,(i,r)=>{if(Yt(t,i)&&i.substring(0,1)!=="."){const s=Ee(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ee(e))}}RC(Ee);/**
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
 */class UC extends Xl{constructor(e){super(),this.indexPath_=e,I(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Bi(e.name,n.name):s}makePost(e,n){const i=Ee(e),r=P.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(n,r)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Po);return new U(Pi,e)}toString(){return oo(this.indexPath_,0).join("/")}}/**
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
 */class FC extends Xl{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Bi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const i=Ee(e);return new U(n,i)}toString(){return".value"}}const BC=new FC;/**
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
 */function S_(t){return{type:"value",snapshotNode:t}}function Rr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ao(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function lo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Jf{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ao(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rr(n,i)):o.trackChildChange(lo(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(de,(r,s)=>{n.hasChild(r)||i.trackChildChange(ao(r,s))}),n.isLeafNode()||n.forEachChild(de,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(lo(r,s,o))}else i.trackChildChange(Rr(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class co{constructor(e){this.indexedFilter_=new Jf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=co.getStartPost_(e),this.endPost_=co.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new U(n,i))||(i=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=P.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(de,(o,a)=>{s.matches(new U(o,a))||(r=r.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class KC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new co(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new U(n,i))||(i=P.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new U(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(lo(n,i,d)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(ao(n,d));const y=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Rr(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ao(c.name,c.node)),s.trackChildChange(Rr(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
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
 */class Xf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Xf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VC(t){return t.loadsAllData()?new Jf(t.getIndex()):t.hasLimit()?new KC(t):new co(t)}function Hm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===BC?n="$value":t.index_===vr?n="$key":(I(t.index_ instanceof UC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=we(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+we(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=we(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Km(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
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
 */class cl extends g_{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=No("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=cl.getListenId_(e,i),a={};this.listens_[o]=a;const l=Hm(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),kr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const i=cl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Hm(e._queryParams),i=e._path.toString(),r=new Io;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ui(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Zs(a.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class zC{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ul(){return{value:null,children:new Map}}function k_(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=M(e);t.children.has(i)||t.children.set(i,ul());const r=t.children.get(i);e=Q(e),k_(r,e,n)}}function od(t,e,n){t.value!==null?n(e,t.value):jC(t,(i,r)=>{const s=new G(e.toString()+"/"+i);od(r,s,n)})}function jC(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class WC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Oe(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const Vm=10*1e3,$C=30*1e3,GC=5*60*1e3;class YC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WC(e);const i=Vm+($C-Vm)*Math.random();Ns(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Oe(e,(r,s)=>{s>0&&Yt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Ns(this.reportStats_.bind(this),Math.floor(Math.random()*2*GC))}}/**
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
 */var Ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function Zf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function th(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class dl{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Ct.ACK_USER_WRITE,this.source=Zf()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new dl(z(),n,this.revert)}}else return I(M(this.path)===e,"operationForChild called for unrelated child."),new dl(Q(this.path),this.affectedTree,this.revert)}}/**
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
 */class uo{constructor(e,n){this.source=e,this.path=n,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new uo(this.source,z()):new uo(this.source,Q(this.path))}}/**
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
 */class Li{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Ct.OVERWRITE}operationForChild(e){return F(this.path)?new Li(this.source,z(),this.snap.getImmediateChild(e)):new Li(this.source,Q(this.path),this.snap)}}/**
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
 */class Nr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Ct.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Li(this.source,z(),n.value):new Nr(this.source,z(),n)}else return I(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nr(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ri{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class qC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QC(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(HC(o.childName,o.snapshotNode))}),ls(t,r,"child_removed",e,i,n),ls(t,r,"child_added",e,i,n),ls(t,r,"child_moved",s,i,n),ls(t,r,"child_changed",e,i,n),ls(t,r,"value",e,i,n),r}function ls(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>XC(t,a,l)),o.forEach(a=>{const l=JC(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function JC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function XC(t,e,n){if(e.childName==null||n.childName==null)throw Br("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),r=new U(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function Zl(t,e){return{eventCache:t,serverCache:e}}function Ps(t,e,n,i){return Zl(new ri(e,n,i),t.serverCache)}function T_(t,e,n,i){return Zl(t.eventCache,new ri(e,n,i))}function fl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Di(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xc;const ZC=()=>(Xc||(Xc=new Xe(UA)),Xc);class q{constructor(e,n=ZC()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Oe(e,(i,r)=>{n=n.set(new G(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(F(e))return null;{const i=M(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:ue(new G(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=M(e),i=this.children.get(n);return i!==null?i.subtree(Q(e)):new q(null)}}set(e,n){if(F(e))return new q(n,this.children);{const i=M(e),s=(this.children.get(i)||new q(null)).set(Q(e),n),o=this.children.insert(i,s);return new q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=M(e),i=this.children.get(n);if(i){const r=i.remove(Q(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=M(e),i=this.children.get(n);return i?i.get(Q(e)):null}}setTree(e,n){if(F(e))return n;{const i=M(e),s=(this.children.get(i)||new q(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new q(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ue(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(F(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),ue(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,i){if(F(e))return this;{this.value&&i(n,this.value);const r=M(e),s=this.children.get(r);return s?s.foreachOnPath_(Q(e),ue(n,r),i):new q(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(ue(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Pt{constructor(e){this.writeTree_=e}static empty(){return new Pt(new q(null))}}function Ls(t,e,n){if(F(e))return new Pt(new q(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=ze(r,e);return s=s.updateChild(o,n),new Pt(t.writeTree_.set(r,s))}else{const r=new q(n),s=t.writeTree_.setTree(e,r);return new Pt(s)}}}function ad(t,e,n){let i=t;return Oe(n,(r,s)=>{i=Ls(i,ue(e,r),s)}),i}function zm(t,e){if(F(e))return Pt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new Pt(n)}}function ld(t,e){return Hi(t,e)!=null}function Hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function jm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(i,r)=>{e.push(new U(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new U(i,r.value))}),e}function Jn(t,e){if(F(e))return t;{const n=Hi(t,e);return n!=null?new Pt(new q(n)):new Pt(t.writeTree_.subtree(e))}}function cd(t){return t.writeTree_.isEmpty()}function Pr(t,e){return A_(z(),t.writeTree_,e)}function A_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=A_(ue(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(ue(t,".priority"),i)),n}}/**
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
 */function ec(t,e){return P_(e,t)}function eR(t,e,n,i,r){I(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Ls(t.visibleWrites,e,n)),t.lastWriteId=i}function tR(t,e,n,i){I(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=ad(t.visibleWrites,e,n),t.lastWriteId=i}function nR(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function iR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rR(a,i.path)?r=!1:vt(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return sR(t),!0;if(i.snap)t.visibleWrites=zm(t.visibleWrites,i.path);else{const a=i.children;Oe(a,l=>{t.visibleWrites=zm(t.visibleWrites,ue(i.path,l))})}return!0}else return!1}function rR(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(ue(t.path,n),e))return!0;return!1}function sR(t){t.visibleWrites=C_(t.allWrites,oR,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function oR(t){return t.visible}function C_(t,e,n){let i=Pt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)vt(n,o)?(a=ze(n,o),i=Ls(i,a,s.snap)):vt(o,n)&&(a=ze(o,n),i=Ls(i,z(),s.snap.getChild(a)));else if(s.children){if(vt(n,o))a=ze(n,o),i=ad(i,a,s.children);else if(vt(o,n))if(a=ze(o,n),F(a))i=ad(i,z(),s.children);else{const l=kr(s.children,M(a));if(l){const c=l.getChild(Q(a));i=Ls(i,z(),c)}}}else throw Br("WriteRecord should have .snap or .children")}}return i}function R_(t,e,n,i,r){if(!i&&!r){const s=Hi(t.visibleWrites,e);if(s!=null)return s;{const o=Jn(t.visibleWrites,e);if(cd(o))return n;if(n==null&&!ld(o,z()))return null;{const a=n||P.EMPTY_NODE;return Pr(o,a)}}}else{const s=Jn(t.visibleWrites,e);if(!r&&cd(s))return n;if(!r&&n==null&&!ld(s,z()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(vt(c.path,e)||vt(e,c.path))},a=C_(t.allWrites,o,e),l=n||P.EMPTY_NODE;return Pr(a,l)}}}function aR(t,e,n){let i=P.EMPTY_NODE;const r=Hi(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(de,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Jn(t.visibleWrites,e);return n.forEachChild(de,(o,a)=>{const l=Pr(Jn(s,new G(o)),a);i=i.updateImmediateChild(o,l)}),jm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Jn(t.visibleWrites,e);return jm(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function lR(t,e,n,i,r){I(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if(ld(t.visibleWrites,s))return null;{const o=Jn(t.visibleWrites,s);return cd(o)?r.getChild(n):Pr(o,r.getChild(n))}}function cR(t,e,n,i){const r=ue(e,n),s=Hi(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Jn(t.visibleWrites,r);return Pr(o,i.getNode().getImmediateChild(n))}else return null}function uR(t,e){return Hi(t.visibleWrites,e)}function dR(t,e,n,i,r,s,o){let a;const l=Jn(t.visibleWrites,e),c=Hi(l,z());if(c!=null)a=c;else if(n!=null)a=Pr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=f.getNext();for(;p&&u.length<r;)d(p,i)!==0&&u.push(p),p=f.getNext();return u}else return[]}function fR(){return{visibleWrites:Pt.empty(),allWrites:[],lastWriteId:-1}}function hl(t,e,n,i){return R_(t.writeTree,t.treePath,e,n,i)}function nh(t,e){return aR(t.writeTree,t.treePath,e)}function Wm(t,e,n,i){return lR(t.writeTree,t.treePath,e,n,i)}function pl(t,e){return uR(t.writeTree,ue(t.treePath,e))}function hR(t,e,n,i,r,s){return dR(t.writeTree,t.treePath,e,n,i,r,s)}function ih(t,e,n){return cR(t.writeTree,t.treePath,e,n)}function N_(t,e){return P_(ue(t.treePath,e),t.writeTree)}function P_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class pR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,lo(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,ao(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Rr(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,lo(i,e.snapshotNode,r.oldSnap));else throw Br("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class mR{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const L_=new mR;class rh{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ri(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ih(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Di(this.viewCache_),s=hR(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function gR(t){return{filter:t}}function vR(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function yR(t,e,n,i,r){const s=new pR;let o,a;if(n.type===Ct.OVERWRITE){const c=n;c.source.fromUser?o=ud(t,e,c.path,c.snap,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=ml(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Ct.MERGE){const c=n;c.source.fromUser?o=ER(t,e,c.path,c.children,i,r,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=dd(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Ct.ACK_USER_WRITE){const c=n;c.revert?o=IR(t,e,c.path,i,r,s):o=wR(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Ct.LISTEN_COMPLETE)o=xR(t,e,n.path,i,s);else throw Br("Unknown operation type: "+n.type);const l=s.getChanges();return _R(e,o,l),{viewCache:o,changes:l}}function _R(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=fl(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(S_(fl(e)))}}function D_(t,e,n,i,r,s){const o=e.eventCache;if(pl(i,n)!=null)return e;{let a,l;if(F(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Di(e),u=c instanceof P?c:P.EMPTY_NODE,d=nh(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=hl(i,Di(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=M(n);if(c===".priority"){I(ii(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Wm(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Wm(i,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=ih(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,s):a=o.getNode()}}return Ps(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function ml(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=M(n);if(!l.isCompleteForPath(n)&&ii(n)>1)return e;const v=Q(n),k=l.getNode().getImmediateChild(p).updateChild(v,i);p===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),p,k,v,L_,null)}const d=T_(e,c,l.isFullyInitialized()||F(n),u.filtersNodes()),f=new rh(r,d,s);return D_(t,d,n,r,f,a)}function ud(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new rh(r,e,s);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ps(e,c,!0,t.filter.filtersNodes());else{const d=M(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Ps(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Q(n),p=a.getNode().getImmediateChild(d);let v;if(F(f))v=i;else{const y=u.getCompleteChild(d);y!=null?Gf(f)===".priority"&&y.getChild(y_(f)).isEmpty()?v=y:v=y.updateChild(f,i):v=P.EMPTY_NODE}if(p.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),d,v,f,u,o);l=Ps(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $m(t,e){return t.eventCache.isCompleteForChild(e)}function ER(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=ue(n,l);$m(e,M(u))&&(a=ud(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=ue(n,l);$m(e,M(u))||(a=ud(t,a,u,c,r,s,o))}),a}function Gm(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function dd(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=i:c=new q(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),v=Gm(t,p,f);l=ml(t,l,new G(d),v,r,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const v=e.serverCache.getNode().getImmediateChild(d),y=Gm(t,v,f);l=ml(t,l,new G(d),y,r,s,o,a)}}),l}function wR(t,e,n,i,r,s,o){if(pl(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ml(t,e,n,l.getNode().getChild(n),r,s,a,o);if(F(n)){let c=new q(null);return l.getNode().forEachChild(vr,(u,d)=>{c=c.set(new G(u),d)}),dd(t,e,n,c,r,s,a,o)}else return e}else{let c=new q(null);return i.foreach((u,d)=>{const f=ue(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),dd(t,e,n,c,r,s,a,o)}}function xR(t,e,n,i,r){const s=e.serverCache,o=T_(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return D_(t,o,n,i,L_,r)}function IR(t,e,n,i,r,s){let o;if(pl(i,n)!=null)return e;{const a=new rh(i,e,r),l=e.eventCache.getNode();let c;if(F(n)||M(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=hl(i,Di(e));else{const d=e.serverCache.getNode();I(d instanceof P,"serverChildren would be complete if leaf node"),u=nh(i,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=M(n);let d=ih(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Q(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,P.EMPTY_NODE,Q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hl(i,Di(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||pl(i,z())!=null,Ps(e,c,o,t.filter.filtersNodes())}}/**
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
 */class bR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Jf(i.getIndex()),s=VC(i);this.processor_=gR(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(P.EMPTY_NODE,a.getNode(),null),u=new ri(l,o.isFullyInitialized(),r.filtersNodes()),d=new ri(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Zl(d,u),this.eventGenerator_=new qC(this.query_)}get query(){return this.query_}}function SR(t){return t.viewCache_.serverCache.getNode()}function kR(t){return fl(t.viewCache_)}function TR(t,e){const n=Di(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Ym(t){return t.eventRegistrations_.length===0}function AR(t,e){t.eventRegistrations_.push(e)}function qm(t,e,n){const i=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Qm(t,e,n,i){e.type===Ct.MERGE&&e.source.queryId!==null&&(I(Di(t.viewCache_),"We should always have a full cache before handling merges"),I(fl(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=yR(t.processor_,r,e,n,i);return vR(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,O_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function CR(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(s,o)=>{i.push(Rr(s,o))}),n.isFullyInitialized()&&i.push(S_(n.getNode())),O_(t,i,n.getNode(),e)}function O_(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return QC(t.eventGenerator_,e,n,r)}/**
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
 */let gl;class M_{constructor(){this.views=new Map}}function RR(t){I(!gl,"__referenceConstructor has already been defined"),gl=t}function NR(){return I(gl,"Reference.ts has not been loaded"),gl}function PR(t){return t.views.size===0}function sh(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return I(s!=null,"SyncTree gave us an op for an invalid query."),Qm(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Qm(o,e,n,i));return s}}function U_(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=hl(n,r?i:null),l=!1;a?l=!0:i instanceof P?(a=nh(n,i),l=!1):(a=P.EMPTY_NODE,l=!1);const c=Zl(new ri(a,l,!1),new ri(i,r,!1));return new bR(e,c)}return o}function LR(t,e,n,i,r,s){const o=U_(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),AR(o,n),CR(o,n)}function DR(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=si(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(qm(c,n,i)),Ym(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(qm(l,n,i)),Ym(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!si(t)&&s.push(new(NR())(e._repo,e._path)),{removed:s,events:o}}function F_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xn(t,e){let n=null;for(const i of t.views.values())n=n||TR(i,e);return n}function B_(t,e){if(e._queryParams.loadsAllData())return tc(t);{const i=e._queryIdentifier;return t.views.get(i)}}function H_(t,e){return B_(t,e)!=null}function si(t){return tc(t)!=null}function tc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let vl;function OR(t){I(!vl,"__referenceConstructor has already been defined"),vl=t}function MR(){return I(vl,"Reference.ts has not been loaded"),vl}let UR=1;class Jm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=fR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K_(t,e,n,i,r){return eR(t.pendingWriteTree_,e,n,i,r),r?$r(t,new Li(Zf(),e,n)):[]}function FR(t,e,n,i){tR(t.pendingWriteTree_,e,n,i);const r=q.fromObject(n);return $r(t,new Nr(Zf(),e,r))}function Un(t,e,n=!1){const i=nR(t.pendingWriteTree_,e);if(iR(t.pendingWriteTree_,e)){let s=new q(null);return i.snap!=null?s=s.set(z(),!0):Oe(i.children,o=>{s=s.set(new G(o),!0)}),$r(t,new dl(i.path,s,n))}else return[]}function Lo(t,e,n){return $r(t,new Li(eh(),e,n))}function BR(t,e,n){const i=q.fromObject(n);return $r(t,new Nr(eh(),e,i))}function HR(t,e){return $r(t,new uo(eh(),e))}function KR(t,e,n){const i=ah(t,n);if(i){const r=lh(i),s=r.path,o=r.queryId,a=ze(s,e),l=new uo(th(o),a);return ch(t,s,l)}else return[]}function yl(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||H_(o,e))){const l=DR(o,e,n,i);PR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>si(p));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=jR(f);for(let v=0;v<p.length;++v){const y=p[v],k=y.query,m=W_(t,y);t.listenProvider_.startListening(Ds(k),fo(t,k),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(Ds(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(nc(f));t.listenProvider_.stopListening(Ds(f),p)}))}WR(t,c)}return a}function V_(t,e,n,i){const r=ah(t,i);if(r!=null){const s=lh(r),o=s.path,a=s.queryId,l=ze(o,e),c=new Li(th(a),l,n);return ch(t,o,c)}else return[]}function VR(t,e,n,i){const r=ah(t,i);if(r){const s=lh(r),o=s.path,a=s.queryId,l=ze(o,e),c=q.fromObject(n),u=new Nr(th(a),l,c);return ch(t,o,u)}else return[]}function fd(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(f,p)=>{const v=ze(f,r);s=s||Xn(p,v),o=o||si(p)});let a=t.syncPointTree_.get(r);a?(o=o||si(a),s=s||Xn(a,z())):(a=new M_,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,v)=>{const y=Xn(v,z());y&&(s=s.updateImmediateChild(p,y))}));const c=H_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=nc(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=$R();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=ec(t.pendingWriteTree_,r);let d=LR(a,e,n,u,s,l);if(!c&&!o&&!i){const f=B_(a,e);d=d.concat(GR(t,e,f))}return d}function oh(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=Xn(a,l);if(c)return c});return R_(r,e,s,n,!0)}function zR(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ze(c,n);i=i||Xn(u,d)});let r=t.syncPointTree_.get(n);r?i=i||Xn(r,z()):(r=new M_,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new ri(i,!0,!1):null,a=ec(t.pendingWriteTree_,e._path),l=U_(r,e,a,s?o.getNode():P.EMPTY_NODE,s);return kR(l)}function $r(t,e){return z_(e,t.syncPointTree_,null,ec(t.pendingWriteTree_,z()))}function z_(t,e,n,i){if(F(t.path))return j_(t,e,n,i);{const r=e.get(z());n==null&&r!=null&&(n=Xn(r,z()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=N_(i,o);s=s.concat(z_(a,l,c,u))}return r&&(s=s.concat(sh(r,t,i,n))),s}}function j_(t,e,n,i){const r=e.get(z());n==null&&r!=null&&(n=Xn(r,z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=N_(i,o),u=t.operationForChild(o);u&&(s=s.concat(j_(u,a,l,c)))}),r&&(s=s.concat(sh(r,t,i,n))),s}function W_(t,e){const n=e.query,i=fo(t,n);return{hashFn:()=>(SR(e)||P.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?KR(t,n._path,i):HR(t,n._path);{const s=HA(r,n);return yl(t,n,null,s)}}}}function fo(t,e){const n=nc(e);return t.queryToTagMap.get(n)}function nc(t){return t._path.toString()+"$"+t._queryIdentifier}function ah(t,e){return t.tagToQueryMap.get(e)}function lh(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function ch(t,e,n){const i=t.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const r=ec(t.pendingWriteTree_,e);return sh(i,n,r,null)}function jR(t){return t.fold((e,n,i)=>{if(n&&si(n))return[tc(n)];{let r=[];return n&&(r=F_(n)),Oe(i,(s,o)=>{r=r.concat(o)}),r}})}function Ds(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(MR())(t._repo,t._path):t}function WR(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=nc(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function $R(){return UR++}function GR(t,e,n){const i=e._path,r=fo(t,e),s=W_(t,n),o=t.listenProvider_.startListening(Ds(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)I(!si(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!F(c)&&u&&si(u))return[tc(u).query];{let f=[];return u&&(f=f.concat(F_(u).map(p=>p.query))),Oe(d,(p,v)=>{f=f.concat(v)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ds(u),fo(t,u))}}return o}/**
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
 */class uh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new uh(n)}node(){return this.node_}}class dh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new dh(this.syncTree_,n)}node(){return oh(this.syncTree_,this.path_)}}const YR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xm=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return QR(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},QR=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const r=e.node();if(I(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},$_=function(t,e,n,i){return fh(e,new dh(n,t),i)},G_=function(t,e,n){return fh(t,new uh(e),n)};function fh(t,e,n){const i=t.getPriority().val(),r=Xm(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Xm(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Se(a,Ee(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Se(r))),o.forEachChild(de,(a,l)=>{const c=fh(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class hh{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ph(t,e){let n=e instanceof G?e:new G(e),i=t,r=M(n);for(;r!==null;){const s=kr(i.node.children,r)||{children:{},childCount:0};i=new hh(r,i,s),n=Q(n),r=M(n)}return i}function Gr(t){return t.node.value}function Y_(t,e){t.node.value=e,hd(t)}function q_(t){return t.node.childCount>0}function JR(t){return Gr(t)===void 0&&!q_(t)}function ic(t,e){Oe(t.node.children,(n,i)=>{e(new hh(n,t,i))})}function Q_(t,e,n,i){n&&e(t),ic(t,r=>{Q_(r,e,!0)})}function XR(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Do(t){return new G(t.parent===null?t.name:Do(t.parent)+"/"+t.name)}function hd(t){t.parent!==null&&ZR(t.parent,t.name,t)}function ZR(t,e,n){const i=JR(n),r=Yt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,hd(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,hd(t))}/**
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
 */const eN=/[\[\].#$\/\u0000-\u001F\u007F]/,tN=/[\[\].#$\u0000-\u001F\u007F]/,Zc=10*1024*1024,mh=function(t){return typeof t=="string"&&t.length!==0&&!eN.test(t)},J_=function(t){return typeof t=="string"&&t.length!==0&&!tN.test(t)},nN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),J_(t)},iN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Vf(t)||t&&typeof t=="object"&&Yt(t,".sv")},rN=function(t,e,n,i){rc(Kl(t,"value"),e,n)},rc=function(t,e,n){const i=n instanceof G?new EC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+mi(i));if(typeof e=="function")throw new Error(t+"contains a function "+mi(i)+" with contents = "+e.toString());if(Vf(e))throw new Error(t+"contains "+e.toString()+" "+mi(i));if(typeof e=="string"&&e.length>Zc/3&&Vl(e)>Zc)throw new Error(t+"contains a string greater than "+Zc+" utf8 bytes "+mi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Oe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!mh(o)))throw new Error(t+" contains an invalid key ("+o+") "+mi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wC(i,o),rc(t,a,i),xC(i)}),r&&s)throw new Error(t+' contains ".value" child '+mi(i)+" in addition to actual children.")}},sN=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=oo(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!mh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_C);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&vt(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},oN=function(t,e,n,i){const r=Kl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Oe(e,(o,a)=>{const l=new G(o);if(rc(r,a,ue(n,l)),Gf(l)===".priority"&&!iN(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),sN(r,s)},X_=function(t,e,n,i){if(!J_(n))throw new Error(Kl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},aN=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),X_(t,e,n)},lN=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!mh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nN(n))throw new Error(Kl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class uN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sc(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Yf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Z_(t,e,n){sc(t,n),eE(t,i=>Yf(i,e))}function xt(t,e,n){sc(t,n),eE(t,i=>vt(i,e)||vt(e,i))}function eE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(dN(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Rs&&Ne("event: "+n.toString()),Wr(i)}}}/**
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
 */const fN="repo_interrupt",hN=25;class pN{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ul(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mN(t,e,n){if(t.stats_=Wf(t.repoInfo_),t.forceRestClient_||jA())t.server_=new cl(t.repoInfo_,(i,r,s,o)=>{Zm(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>eg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new fn(t.repoInfo_,e,(i,r,s,o)=>{Zm(t,i,r,s,o)},i=>{eg(t,i)},i=>{vN(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=qA(t.repoInfo_,()=>new YC(t.stats_,t.server_)),t.infoData_=new zC,t.infoSyncTree_=new Jm({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Lo(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gh(t,"connected",!1),t.serverSyncTree_=new Jm({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);xt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function gN(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oc(t){return YR({timestamp:gN(t)})}function Zm(t,e,n,i,r){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Xa(n,c=>Ee(c));o=VR(t.serverSyncTree_,s,l,r)}else{const l=Ee(n);o=V_(t.serverSyncTree_,s,l,r)}else if(i){const l=Xa(n,c=>Ee(c));o=BR(t.serverSyncTree_,s,l)}else{const l=Ee(n);o=Lo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Lr(t,s)),xt(t.eventQueue_,a,o)}function eg(t,e){gh(t,"connected",e),e===!1&&wN(t)}function vN(t,e){Oe(e,(n,i)=>{gh(t,n,i)})}function gh(t,e,n){const i=new G("/.info/"+e),r=Ee(n);t.infoData_.updateSnapshot(i,r);const s=Lo(t.infoSyncTree_,i,r);xt(t.eventQueue_,i,s)}function vh(t){return t.nextWriteId_++}function yN(t,e,n){const i=zR(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=Ee(r).withIndex(e._queryParams.getIndex());fd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Lo(t.serverSyncTree_,e._path,s);else{const a=fo(t.serverSyncTree_,e);o=V_(t.serverSyncTree_,e._path,s,a)}return xt(t.eventQueue_,e._path,o),yl(t.serverSyncTree_,e,n,null,!0),s},r=>(Oo(t,"get for query "+we(e)+" failed: "+r),Promise.reject(new Error(r))))}function _N(t,e,n,i,r){Oo(t,"set",{path:e.toString(),value:n,priority:i});const s=oc(t),o=Ee(n,i),a=oh(t.serverSyncTree_,e),l=G_(o,a,s),c=vh(t),u=K_(t.serverSyncTree_,e,l,c,!0);sc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const v=f==="ok";v||$e("set at "+e+" failed: "+f);const y=Un(t.serverSyncTree_,c,!v);xt(t.eventQueue_,e,y),pd(t,r,f,p)});const d=_h(t,e);Lr(t,d),xt(t.eventQueue_,d,[])}function EN(t,e,n,i){Oo(t,"update",{path:e.toString(),value:n});let r=!0;const s=oc(t),o={};if(Oe(n,(a,l)=>{r=!1,o[a]=$_(ue(e,a),Ee(l),t.serverSyncTree_,s)}),r)Ne("update() called with empty data.  Don't do anything."),pd(t,i,"ok",void 0);else{const a=vh(t),l=FR(t.serverSyncTree_,e,o,a);sc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||$e("update at "+e+" failed: "+c);const f=Un(t.serverSyncTree_,a,!d),p=f.length>0?Lr(t,e):e;xt(t.eventQueue_,p,f),pd(t,i,c,u)}),Oe(n,c=>{const u=_h(t,ue(e,c));Lr(t,u)}),xt(t.eventQueue_,e,[])}}function wN(t){Oo(t,"onDisconnectEvents");const e=oc(t),n=ul();od(t.onDisconnect_,z(),(r,s)=>{const o=$_(r,s,t.serverSyncTree_,e);k_(n,r,o)});let i=[];od(n,z(),(r,s)=>{i=i.concat(Lo(t.serverSyncTree_,r,s));const o=_h(t,r);Lr(t,o)}),t.onDisconnect_=ul(),xt(t.eventQueue_,z(),i)}function xN(t,e,n){let i;M(e._path)===".info"?i=fd(t.infoSyncTree_,e,n):i=fd(t.serverSyncTree_,e,n),Z_(t.eventQueue_,e._path,i)}function IN(t,e,n){let i;M(e._path)===".info"?i=yl(t.infoSyncTree_,e,n):i=yl(t.serverSyncTree_,e,n),Z_(t.eventQueue_,e._path,i)}function bN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(fN)}function Oo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function pd(t,e,n,i){e&&Wr(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function tE(t,e,n){return oh(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function yh(t,e=t.transactionQueueTree_){if(e||ac(t,e),Gr(e)){const n=iE(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&SN(t,Do(e),n)}else q_(e)&&ic(e,n=>{yh(t,n)})}function SN(t,e,n){const i=n.map(c=>c.currentWriteId),r=tE(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ze(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Oo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Un(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ac(t,ph(t.transactionQueueTree_,e)),yh(t,t.transactionQueueTree_),xt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Wr(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$e("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Lr(t,e)}},o)}function Lr(t,e){const n=nE(t,e),i=Do(n),r=iE(t,n);return kN(t,r,i),i}function kN(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let u=!1,d;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=hN)u=!0,d="maxretry",r=r.concat(Un(t.serverSyncTree_,l.currentWriteId,!0));else{const f=tE(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){rc("transaction failed: Data returned ",p,l.path);let v=Ee(p);typeof p=="object"&&p!=null&&Yt(p,".priority")||(v=v.updatePriority(f.getPriority()));const k=l.currentWriteId,m=oc(t),h=G_(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=vh(t),o.splice(o.indexOf(k),1),r=r.concat(K_(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),r=r.concat(Un(t.serverSyncTree_,k,!0))}else u=!0,d="nodata",r=r.concat(Un(t.serverSyncTree_,l.currentWriteId,!0))}xt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}ac(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Wr(i[a]);yh(t,t.transactionQueueTree_)}function nE(t,e){let n,i=t.transactionQueueTree_;for(n=M(e);n!==null&&Gr(i)===void 0;)i=ph(i,n),e=Q(e),n=M(e);return i}function iE(t,e){const n=[];return rE(t,e,n),n.sort((i,r)=>i.order-r.order),n}function rE(t,e,n){const i=Gr(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);ic(e,r=>{rE(t,r,n)})}function ac(t,e){const n=Gr(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Y_(e,n.length>0?n:void 0)}ic(e,i=>{ac(t,i)})}function _h(t,e){const n=Do(nE(t,e)),i=ph(t.transactionQueueTree_,e);return XR(i,r=>{eu(t,r)}),eu(t,i),Q_(i,r=>{eu(t,r)}),n}function eu(t,e){const n=Gr(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Y_(e,void 0):n.length=s+1,xt(t.eventQueue_,Do(e),r);for(let o=0;o<i.length;o++)Wr(i[o])}}/**
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
 */function TN(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function AN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const tg=function(t,e){const n=CN(t),i=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OA();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new c_(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new G(n.pathString)}},CN=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=TN(t.substring(u,d)));const f=AN(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");i=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class RN{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class NN{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class sE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Eh{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return F(this._path)?null:Gf(this._path)}get ref(){return new kn(this._repo,this._path)}get _queryIdentifier(){const e=Km(this._queryParams),n=zf(e);return n==="{}"?"default":n}get _queryObject(){return Km(this._queryParams)}isEqual(e){if(e=D(e),!(e instanceof Eh))return!1;const n=this._repo===e._repo,i=Yf(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+yC(this._path)}}class kn extends Eh{constructor(e,n){super(e,n,new Xf,!1)}get parent(){const e=y_(this._path);return e===null?null:new kn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ho{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),i=md(this.ref,e);return new ho(this._node.getChild(n),i,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new ho(r,md(this.ref,i),de)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function hn(t,e){return t=D(t),t._checkNotDeleted("ref"),e!==void 0?md(t._root,e):t._root}function md(t,e){return t=D(t),M(t._path)===null?aN("child","path",e):X_("child","path",e),new kn(t._repo,ue(t._path,e))}function PN(t,e){t=D(t),lN("set",t._path),rN("set",e,t._path);const n=new Io;return _N(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function oE(t,e){oN("update",e,t._path);const n=new Io;return EN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function bi(t){t=D(t);const e=new sE(()=>{}),n=new lc(e);return yN(t._repo,t,n).then(i=>new ho(i,new kn(t._repo,t._path),t._queryParams.getIndex()))}class lc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new RN("value",this,new ho(e.snapshotNode,new kn(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new NN(this,e,n):null}matches(e){return e instanceof lc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function LN(t,e,n,i,r){const s=new sE(n,void 0),o=new lc(s);return xN(t._repo,t,o),()=>IN(t._repo,t,o)}function aE(t,e,n,i){return LN(t,"value",e)}RR(kn);OR(kn);/**
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
 */const DN="FIREBASE_DATABASE_EMULATOR_HOST",gd={};let ON=!1;function MN(t,e,n,i){t.repoInfo_=new c_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function UN(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=tg(s,r),a=o.repoInfo,l;typeof process<"u"&&Im&&(l=Im[DN]),l?(s=`http://${l}?ns=${a.namespace}`,o=tg(s,r),a=o.repoInfo):o.repoInfo.secure;const c=new $A(t.name,t.options,e);cN("Invalid Firebase Database URL",o),F(o.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=BN(a,t,c,new WA(t.name,n));return new HN(u,t)}function FN(t,e){const n=gd[e];(!n||n[t.key]!==t)&&wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bN(t),delete n[t.key]}function BN(t,e,n,i){let r=gd[e.name];r||(r={},gd[e.name]=r);let s=r[t.toURLString()];return s&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new pN(t,ON,n,i),r[t.toURLString()]=s,s}class HN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kn(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function KN(t=Fy(),e){const n=xf(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=NI("database");i&&VN(n,...i)}return n}function VN(t,e,n,i={}){t=D(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&wn("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ba(ba.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:PI(i.mockUserToken,t.app.options.projectId);s=new ba(o)}MN(r,e,n,s)}/**
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
 */function zN(t){CA(Hr),Tr(new Ni("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return UN(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Yn(bm,Sm,t),Yn(bm,Sm,"esm2017")}fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zN();const jN=xo("App",{web:()=>it(()=>import("./web-B3BAmvcd.js"),[],import.meta.url).then(t=>new t.AppWeb)});var ng;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(ng||(ng={}));var ig;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(ig||(ig={}));const lE=xo("FirebaseAuthentication",{web:()=>it(()=>import("./web-DPzGPN0B.js"),[],import.meta.url).then(t=>new t.FirebaseAuthenticationWeb)}),WN={apiKey:"AIzaSyBfN1-OQUQgQTu358UO6aZ-BDIbjWZq1Mc",authDomain:"kuryeprov44.firebaseapp.com",databaseURL:"https://kuryeprov44-default-rtdb.firebaseio.com",projectId:"kuryeprov44",storageBucket:"kuryeprov44.firebasestorage.app",messagingSenderId:"177653241936",appId:"1:177653241936:web:4130a534c4bf7cb05fd955",measurementId:"G-313RD4XLZW"},cE=Uy(WN),Zn=Y0(cE),$t=KN(cE);function wh(t){if(!t)return;localStorage.setItem("firebase_uid",t.uid),localStorage.setItem("user_name",t.displayName||"Kullanıcı"),localStorage.setItem("user_email",t.email||"");const e=hn($t,"users/"+t.uid);aE(e,async n=>{n.exists()&&n.val().isBanned&&(console.warn("HESAP YASAKLANDI - OTOMATIK CIKIS YAPILIYOR"),await _l(),window.location.reload())})}ni.isNativePlatform()&&jN.addListener("appUrlOpen",async t=>{const e=t.url;if(e.startsWith("kuryepro://auth")){const n=new URL(e).searchParams,i=n.get("uid"),r=n.get("name"),s=n.get("email");if(i){localStorage.setItem("firebase_uid",i),localStorage.setItem("user_name",r||"Kullanıcı"),localStorage.setItem("user_email",s||"");try{await mf.close()}catch{}window.location.reload()}}});async function $N(){var r,s;const t=await lE.signInWithGoogle();if(!t||!t.user)throw new Error("Native Google sign-in başarısız.");let e=t.user;const n=(r=t.credential)==null?void 0:r.idToken,i=(s=t.credential)==null?void 0:s.accessToken;if(n||i)try{const o=Ht.credential(n||void 0,i||void 0),a=await To(Zn,o);a!=null&&a.user&&(e=a.user)}catch(o){console.warn("JS SDK oturumu açılamadı, native kullanıcı ile devam ediliyor.",o)}return await xh(e),wh(e),{success:!0,user:e}}async function uE(t={}){try{if(ni.isNativePlatform())return await $N();if(new URLSearchParams(window.location.search).get("mode")==="login"){const{GoogleAuthProvider:n,signInWithRedirect:i}=await it(async()=>{const{GoogleAuthProvider:s,signInWithRedirect:o}=await Promise.resolve().then(()=>Gc);return{GoogleAuthProvider:s,signInWithRedirect:o}},void 0,import.meta.url),r=new n;return await i(Zn,r),{type:"redirect"}}else{const{GoogleAuthProvider:n,signInWithPopup:i}=await it(async()=>{const{GoogleAuthProvider:s,signInWithPopup:o}=await Promise.resolve().then(()=>Gc);return{GoogleAuthProvider:s,signInWithPopup:o}},void 0,import.meta.url),r=new n;try{const s=await i(Zn,r);return await xh(s.user),wh(s.user),{success:!0,user:s.user}}catch{const{signInWithRedirect:o}=await it(async()=>{const{signInWithRedirect:a}=await Promise.resolve().then(()=>Gc);return{signInWithRedirect:a}},void 0,import.meta.url);return await o(Zn,r),{type:"redirect"}}}}catch(e){return console.error("Login Error:",e),ni.isNativePlatform()?(await mf.open({url:"https://kuryeprov44.web.app/?mode=login",presentationStyle:"popover"}),{type:"external_browser",error:String(e)}):{success:!1,error:(e==null?void 0:e.message)||String(e)}}}async function dE(){try{const t=await H0(Zn);return!t||!t.user?{handled:!1}:(await xh(t.user),wh(t.user),{handled:!0,user:t.user})}catch(t){return console.error("Redirect Error:",t),{handled:!1,error:(t==null?void 0:t.message)||String(t)}}}async function _l(){if(ni.isNativePlatform())try{await lE.signOut()}catch(t){console.warn(t)}await A0(Zn),localStorage.removeItem("firebase_uid"),localStorage.removeItem("user_name"),localStorage.removeItem("user_email")}async function xh(t){const e=hn($t,"users_v45/"+t.uid),n=await bi(e),i=new Date().toISOString();n.exists()?await oE(e,{lastLogin:i,displayName:t.displayName,photoURL:t.photoURL,email:t.email}):await PN(e,{uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,role:"user",isBanned:!1,dailyLimit:100,createdAt:i,lastLogin:i}),localStorage.setItem("firebase_uid",t.uid)}async function vd(t){const e=t||localStorage.getItem("firebase_uid");if(!e)return{allowed:!1,reason:"Giriş yapılmamış.",status:"login_required"};try{const n=await bi(hn($t,"users_v45/"+e));if(n.exists()){const i=n.val();return i.isBanned?{allowed:!1,reason:"HESABINIZ YASAKLANMIŞTIR.",status:"banned"}:{allowed:!0,data:i}}return{allowed:!1,reason:"Kullanıcı kaydı bulunamadı.",status:"login_required"}}catch{return{allowed:!1,reason:"Sunucu hatası."}}}async function GN(t=null){const e=t||localStorage.getItem("firebase_uid");if(!e)return{allowed:!1};try{const n=await bi(hn($t,"users_v45/"+e));if(!n.exists())return{allowed:!1};const i=n.val();if(i.role==="admin")return{allowed:!0,limit:9999,usage:0};const r=new Date,s=r.toISOString().split("T")[0],o=s+"-"+r.getHours(),a=i.dailyLimit===void 0?100:i.dailyLimit;let l=i.lastQueryDate===s&&i.queryCount||0;if(l>=a)return{allowed:!1,reason:"Günlük limit doldu.",limit:a,usage:l};const c=i.hourlyLimit===void 0?60:i.hourlyLimit;let u=i.lastQueryHour===o&&i.hourlyQueryCount||0;return u>=c?{allowed:!1,reason:"Saatlik limit doldu.",limit:c,usage:u}:{allowed:!0,dailyLimit:a,dailyUsage:l,hourlyLimit:c,hourlyUsage:u}}catch(n){return console.error("Limit check error",n),{allowed:!1}}}async function YN(t=null){const e=t||localStorage.getItem("firebase_uid");if(!e)return!1;try{const n=hn($t,"users_v45/"+e),i=await bi(n);if(!i.exists())return!1;const r=i.val();if(r.role==="admin")return!0;const s=new Date,o=s.toISOString().split("T")[0],a=o+"-"+s.getHours(),l=r.dailyLimit===void 0?100:r.dailyLimit,c=r.hourlyLimit===void 0?60:r.hourlyLimit;let u=r.lastQueryDate===o&&r.queryCount||0,d=r.lastQueryHour===a&&r.hourlyQueryCount||0;return u>=l||d>=c?!1:(await oE(n,{lastQueryDate:o,queryCount:u+1,lastQueryHour:a,hourlyQueryCount:d+1}),!0)}catch{return!1}}async function qN(t=null){const e=t||localStorage.getItem("firebase_uid");if(!e)throw new Error("GİRİŞ GEREKLİ");try{const n=hn($t,"users_v45/"+e),i=await bi(n);if(!i.exists())throw new Error("KULLANICI BULUNAMADI");const r=i.val();if(r.role!=="admin"&&(!r.allowedRegions||Object.keys(r.allowedRegions).length===0))throw new Error("BÖLGE YETKİNİZ YOK");let s={};const o=r.role==="admin"?(await bi(hn($t,"regions_v45"))).val()||{}:r.allowedRegions,a=Object.keys(o).map(async c=>{if(o[c]!==!0&&r.role!=="admin")return null;const u=hn($t,"regions_v45/"+c),d=await bi(u);if(!d.exists())return null;const f=d.val();let p="";if(f.data_chunks?p=f.data_chunks.join(""):f.data&&(p=f.data),p)try{let v=p;if(p.startsWith("KRYSEC_")){const y=p.replace("KRYSEC_","");let k="";for(let g=y.length-1;g>=0;g--)k+=y[g];const m=atob(k),h=new Uint8Array(m.length);for(let g=0;g<m.length;g++)h[g]=m.charCodeAt(g);v=new TextDecoder().decode(h)}return JSON.parse(v)}catch(v){return console.error("Decrypt error:",c,v),null}return null});return(await Promise.all(a)).forEach(c=>{c&&Object.assign(s,c)}),Object.keys(s).length===0?null:s}catch(n){throw console.error("Fetch Region Error",n),n}}function QN(t){const e=localStorage.getItem("firebase_uid");if(!e)return null;const n=hn($t,"users_v45/"+e);return aE(n,i=>{i.exists()&&i.val().isBanned===!0&&(console.warn("🚫 KULLANICI YASAKLANDI! OTURUM KAPATILIYOR..."),localStorage.clear(),t&&t())})}const Yr=Object.freeze(Object.defineProperty({__proto__:null,auth:Zn,checkUserStatus:vd,db:$t,fetchUserRegionData:qN,handleRedirectResult:dE,hasRemainingLimit:GN,incrementLimitUsage:YN,loginWithGoogle:uE,logoutUser:_l,startBanListener:QN},Symbol.toStringTag,{value:"Module"})),JN="yal42d-debug",XN="kurye_pro",ZN=`https://raw.githubusercontent.com/${JN}/${XN}/main/updates`;async function fE(){await dE();const t=localStorage.getItem("firebase_uid");if(t){const e=await vd(t);if(e.allowed)return{allowed:!0,user:e.data,status:"authorized"};if(e.status==="banned")return await _l(),{allowed:!1,reason:e.reason,status:"banned"}}return new Promise(e=>{const n=Zn.onAuthStateChanged(async i=>{if(n(),i){const r=await vd(i.uid);r.allowed?e({allowed:!0,user:r.data,status:"authorized"}):(await _l(),e({allowed:!1,reason:r.reason,status:r.status}))}else e({allowed:!1,reason:"Giriş Yapılmalı",status:"login_required"})})})}async function Ih(t={}){return await uE(t)}async function hE(){try{const t=await it(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url);if(t&&t.fetchUserRegionData){const e=await t.fetchUserRegionData(localStorage.getItem("firebase_uid"));if(e&&Object.keys(e).length>0)return e}}catch(t){console.warn("Firebase failed",t)}try{const t=await fetch(`${ZN}/secure_db.txt?t=${Date.now()}`);if(t.ok){const n=(await t.text()).match(/encryptedData\s*=\s*"([^"]+)"/);if(n&&n[1]){const i=n[1];if(i.startsWith("KRYSEC_")){const r=i.replace("KRYSEC_","").split("").reverse().join(""),s=decodeURIComponent(escape(window.atob(r)));return JSON.parse(s)}}}}catch{}throw new Error("Veri yüklenemedi.")}async function eP(){try{const e=(await it(()=>import("./addressDataEncrypted-CqAmYi8b.js"),[],import.meta.url)).encryptedData;if(e&&e.startsWith("KRYSEC_")){const n=e.replace("KRYSEC_","").split("").reverse().join(""),i=decodeURIComponent(escape(window.atob(n)));return JSON.parse(i)}}catch(t){return console.warn("Local bundle fetch failed",t),null}}const tP=Object.freeze(Object.defineProperty({__proto__:null,checkAccess:fE,fetchLocalData:eP,fetchSecureData:hE,startGoogleLogin:Ih},Symbol.toStringTag,{value:"Module"}));function nP(){typeof document>"u"||document.body.classList.add("min-h-screen","pb-32","bg-[#0f172a]")}function iP(){typeof window>"u"||Object.assign(window,{addCalculatedToPayment:XP,addCheckItem:_P,addDialerNumber:rL,addFuelEntry:LP,addNote:HP,addPerfToPayment:ZP,addRepeatTransaction:lP,backupData:AP,calculateFuelConsumption:NP,calculateFutureBalance:eL,calculateDetailedPlan:IE,calculateMaintenance:EE,calculatePerf:cc,calculateProfit:Ot,addExpenseItem:og,deleteExpenseItem:ag,renderExpenseList:xl,callDialerNumber:oL,changeMonth:fP,changePacketCount:kP,changeSimulationDays:JP,changeDetailDays:xP,clearDialerHistory:lL,clearFuelForm:OP,clearFuelHistory:DP,clearPacketInputs:GP,clearTransactionHistory:YP,closeDialerModal:iL,closeNoteModal:FP,deleteAccumulatedPayment:UP,deleteCheckItem:EP,deleteNote:KP,deleteRepeatTransaction:cP,generateDetailedPlanInputs:Sh,goToToday:hP,loadDoors:PE,loadStreets:Lh,openDialerModal:nL,openExternalMap:hL,openGoogleWeather:mP,openNoteModal:Fo,posTetikle:QP,processPayment:uP,quickSearchAddress:cL,selectQuickResult:uL,removeDialerNumber:sL,resetAllCounters:TP,resetPerfForm:jP,resetPriceDefaults:qP,restoreData:CP,saveExpenses:Ah,saveFinancialData:gE,saveFuelUnitData:PP,saveOrderHistory:aL,savePerfMemoryAuto:Rh,savePriceSettings:AE,scrollToResults:$P,searchAndShowMap:LE,setDurationMode:mE,setNoteType:BP,setPerfTime:zP,switchChecklist:yP,switchProfitSubView:xE,switchTab:RE,toggleCheckItem:wE,addOffDay:IP,resetOffDays:bP,toggleMapModal:fL,toggleSettings:WP,toggleSideDock:tL,updateEarningCalculation:Or,addExpenseItem:og,deleteExpenseItem:ag,renderExpenseList:xl})}let Pe={single:110,multi:40,avm:10,night:20},El="weekday",xe={},Kt=null,pE="expense",po=new Date,Mo="start",Ki=[],Vi=[],ht={currentKm:0,lastOilKm:0,oilInterval:2e3},ye={single:0,multi:0},Y={},Ze=[],mo="month",nn={weekday:0,friday:0,saturday:0,sunday:0},yd="expense",oi=[];const Si=[{min:0,max:19,weekday:0,friday:0,saturday:0,sunday:0},{min:20,max:21,weekday:207,friday:289,saturday:434,sunday:521},{min:22,max:25,weekday:259,friday:363,saturday:545,sunday:654},{min:26,max:29,weekday:317,friday:444,saturday:665,sunday:798},{min:30,max:33,weekday:379,friday:531,saturday:796,sunday:955},{min:34,max:37,weekday:446,friday:624,saturday:936,sunday:1123},{min:38,max:41,weekday:517,friday:723,saturday:1085,sunday:1302},{min:42,max:45,weekday:592,friday:829,saturday:1243,sunday:1492},{min:46,max:49,weekday:671,friday:940,saturday:1410,sunday:1692},{min:50,max:53,weekday:783,friday:1096,saturday:1644,sunday:1973},{min:54,max:57,weekday:931,friday:1303,saturday:1954,sunday:2345},{min:58,max:61,weekday:1089,friday:1524,saturday:2286,sunday:2744},{min:62,max:65,weekday:1257,friday:1760,saturday:2640,sunday:3168},{min:66,max:69,weekday:1435,friday:2009,saturday:3014,sunday:3617},{min:70,max:999,weekday:1623,friday:2272,saturday:3408,sunday:4089}];let xn=[],Nn=10,Vt=[];function rP(){xE("average"),wP(),kE(),TE(),dP(),vP(),gP(),pP(),Ot(),setTimeout(()=>{const i=document.querySelector(`button[onclick*="switchTab('tabPerf'"]`);i&&RE("tabPerf",i)},100),Dt(),EE(),VP(),SP(),RP(),oP(),aP(),Uo(),CE(),bh(),sP(),mE("day");const t=document.getElementById("scrollDirectionBtn"),e=document.getElementById("scrollDirectionIcon");let n="bottom";t&&e&&(window.addEventListener("scroll",function(){const i=window.scrollY,r=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);i<r/2?(n="bottom",e.className="fa-solid fa-arrow-down"):(n="top",e.className="fa-solid fa-arrow-up"),t.classList.toggle("visible",i>100)},{passive:!0}),t.addEventListener("click",function(){window.scrollTo({top:n==="bottom"?document.body.scrollHeight:0,behavior:"smooth"})})),dL()}function mE(t){mo=t;const e=["btnDurDay","btnDurWeek","btnDurMonth"];if(document.getElementById(e[0])){e.forEach(s=>{const o=document.getElementById(s);o&&(o.classList.remove("active","bg-indigo-600","text-white","shadow-lg"),o.classList.add("inactive","text-gray-500","hover:text-white","hover:bg-white/5"))});const i=t==="day"?"btnDurDay":t==="week"?"btnDurWeek":"btnDurMonth",r=document.getElementById(i);r&&(r.classList.remove("inactive","text-gray-500","hover:text-white","hover:bg-white/5"),r.classList.add("active","bg-indigo-600","text-white","shadow-lg"))}Ot()}function sP(){const t=["manualPaymentDate","packetPaymentDate","perfPaymentDate"],e=new Date,n=[];let i=new Date(e);for(;i.getDay()!==3;)i.setDate(i.getDate()+1);for(let r=0;r<4;r++){const s=i.toISOString().split("T")[0],o=i.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"});n.push({value:s,label:o}),i.setDate(i.getDate()+7)}t.forEach(r=>{const s=document.getElementById(r);s&&(s.innerHTML="",n.forEach(o=>{const a=document.createElement("option");a.value=o.value,a.innerText=o.label,s.appendChild(a)}))})}function oP(){const t=JSON.parse(localStorage.getItem("kurye_financial")||"{}");t.bank&&(document.getElementById("bankAccount").value=t.bank),t.debt&&(document.getElementById("creditDebt").value=t.debt),vE()}function gE(){const t={bank:parseFloat(document.getElementById("bankAccount").value)||0,debt:parseFloat(document.getElementById("creditDebt").value)||0};localStorage.setItem("kurye_financial",JSON.stringify(t)),vE()}function vE(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;document.getElementById("netBalance").innerText=(t-e).toLocaleString("tr-TR")+" ₺"}function aP(){const t=localStorage.getItem("kurye_repeat");t&&(xn=JSON.parse(t))}function lP(){const t=document.getElementById("repeatDay").value,e=document.getElementById("repeatDesc").value,n=parseFloat(document.getElementById("repeatAmount").value),i=document.getElementById("repeatType").value;if(!t||!e){const r=document.querySelector(".simulation-card");r.classList.add("shake-animation"),setTimeout(()=>r.classList.remove("shake-animation"),500);return}xn.push({day:t,description:e,amount:n||0,type:i}),localStorage.setItem("kurye_repeat",JSON.stringify(xn)),yE(),Dt(),be("Eklendi","Tekrarlayan işlem kaydedildi.")}function yE(){const t=document.getElementById("repeatTransactionsList");t.innerHTML="",xn.forEach((e,n)=>{let i=e.type==="income"?"GELİR (+)":e.type==="expense"?"GİDER (-)":"AKTİVİTE",r=e.type==="income"?"text-green-400":e.type==="expense"?"text-red-400":"text-yellow-400",s=e.type==="activity"?"":e.type==="income"?`+${e.amount}₺`:`-${e.amount}₺`;t.innerHTML+=`
                    <div class="bg-slate-800/50 p-2 rounded-lg flex justify-between items-center border border-white/5">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[10px] text-gray-400">Her ayın ${e.day}. günü • <span class="${r} font-bold">${i} ${s}</span></div>
                        </div>
                        <button onclick="deleteRepeatTransaction(${n})" class="text-gray-500 hover:text-red-400"><i class="fa-solid fa-trash"></i></button>
                    </div>`})}function cP(t){xn.splice(t,1),localStorage.setItem("kurye_repeat",JSON.stringify(xn)),yE(),Dt()}function Uo(){const t=localStorage.getItem("kurye_accumulated_payments");t&&(Y=JSON.parse(t));const e=localStorage.getItem("kurye_transaction_history");e&&(Ze=JSON.parse(e));const n=Object.keys(Y).sort();let i=n.length>0?n[0]:"--.--.----",r=n.length>0?Y[i]:0,s=0;for(let a in Y)s+=Y[a];document.getElementById("nextPaymentAmount").innerText=r.toLocaleString("tr-TR")+" ₺",document.getElementById("nextPaymentDate").innerText=i.split("-").reverse().join("."),document.getElementById("accumulatedTotal").innerText=s.toLocaleString("tr-TR")+" ₺";const o=new Date().toISOString().split("T")[0];n.includes(o)?(document.getElementById("paymentDayInfo").innerText="BUGÜN ÖDEME GÜNÜ",document.getElementById("paymentDayInfo").className="font-bold text-emerald-400 animate-pulse"):(document.getElementById("paymentDayInfo").innerText="Her Çarşamba",document.getElementById("paymentDayInfo").className="font-bold text-purple-400"),_E()}async function uP(){const t=Object.keys(Y).sort();if(t.length===0){be("Bilgi","Ödenecek tutar yok.");return}const e=t[0],n=Y[e];if(!await zi(`₺${n.toLocaleString("tr-TR")} tutarındaki ${e} tarihli ödemeyi banka hesabına aktarmak istiyor musunuz?`,"Ödeme Al"))return;let r=parseFloat(document.getElementById("bankAccount").value)||0;r+=n,document.getElementById("bankAccount").value=r,delete Y[e],Ze.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"payment",amount:n,description:"Banka Aktarımı"}),gE(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(Y)),localStorage.setItem("kurye_transaction_history",JSON.stringify(Ze)),Uo(),Dt(),be("Başarılı","Ödeme banka hesabına eklendi.")}function _E(){const t=document.getElementById("transactionHistory");t.innerHTML="",Ze.length===0&&(t.innerHTML='<div class="text-center text-[10px] text-gray-500 italic py-4">İşlem yok.</div>'),Ze.forEach(e=>{let n=e.type==="income"?"transaction-income":e.type==="payment"?"transaction-payment":"transaction-expense";t.innerHTML+=`
                    <div class="transaction-history-item ${n} flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">${e.description}</div>
                            <div class="text-[9px] text-gray-400">${e.date}</div>
                        </div>
                        <div class="text-sm font-bold text-white">${e.amount.toLocaleString("tr-TR")} ₺</div>
                    </div>
                `})}function dP(){const t=localStorage.getItem("kurye_calendar");t&&(xe=JSON.parse(t)),bh()}function Dt(){const t=document.getElementById("calendarGrid");t.innerHTML="";const e=po.getFullYear(),n=po.getMonth(),i=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];document.getElementById("currentMonthLabel").innerText=i[n],document.getElementById("currentYearLabel").innerText=e;const r=new Date(e,n,1).getDay(),s=r===0?6:r-1,o=new Date(e,n+1,0).getDate();for(let u=0;u<s;u++){const d=document.createElement("div");d.className="calendar-day opacity-50 bg-slate-800/50",t.appendChild(d)}const a=new Date;let l=0,c=0;for(let u=1;u<=o;u++){const d=document.createElement("div");d.className="calendar-day flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 relative",u===a.getDate()&&n===a.getMonth()&&e===a.getFullYear()&&d.classList.add("today"),d.innerHTML=`<span class="text-sm font-bold text-gray-300">${u}</span>`;const f=`${e}-${String(n+1).padStart(2,"0")}-${String(u).padStart(2,"0")}`,p=document.createElement("div");p.className="dots-container",xe[f]&&xe[f].forEach(v=>{v.type==="income"&&(p.innerHTML+='<div class="dot bg-green-500"></div>',l+=v.amount),v.type==="expense"&&(p.innerHTML+='<div class="dot bg-red-500"></div>',c+=v.amount),v.type==="activity"&&(p.innerHTML+='<div class="dot bg-yellow-500"></div>')}),xn.forEach(v=>{parseInt(v.day)===u&&(p.innerHTML+='<div class="dot bg-blue-400"></div>')}),Y[f]&&(p.innerHTML+='<div class="dot bg-purple-500 border border-white"></div>'),d.appendChild(p),d.onclick=()=>Fo(f),t.appendChild(d)}document.getElementById("monthlyExtraIncome").innerText="+"+l.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyExpenseSummary").innerText="-"+c.toLocaleString("tr-TR")+" ₺",document.getElementById("monthlyNetSummary").innerText=(l-c).toLocaleString("tr-TR")+" ₺",bh()}function fP(t){po.setMonth(po.getMonth()+t),Dt()}function hP(){po=new Date,Dt()}function bh(){const t=document.getElementById("todayActivities"),e=document.getElementById("upcomingActivities"),n=new Date().toISOString().split("T")[0];let i="",r="",s=!1;Object.keys(xe).sort().forEach(l=>{l>=n&&xe[l].forEach(u=>{const d=l===n,p=new Date(l).toLocaleDateString("tr-TR",{day:"numeric",month:"long"});let v="GİDER (-)",y="text-red-400",k=u.amount?`-${u.amount}₺`:"",m="border-red-500/20";u.type==="income"?(v="GELİR (+)",y="text-green-400",k=`+${u.amount}₺`,m="border-green-500/20"):u.type==="activity"&&(v="AKTİVİTE",y="text-yellow-400",k="",m="border-yellow-500/20");const h=`
                        <div onclick="openNoteModal('${l}')" class="activity-item flex items-center justify-between bg-slate-800/60 p-3 rounded-xl border ${m} mb-2 cursor-pointer hover:bg-slate-800">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-bold ${y} border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">${v}</span>
                                    <span class="text-[9px] text-gray-400">${d?"Bugün":p}</span>
                                </div>
                                <p class="text-xs font-bold text-white">${u.note}</p>
                            </div>
                            <span class="text-sm font-bold ${y}">${k}</span>
                        </div>`;d?i+=h:(r+=h,s=!0)})}),Object.keys(Y).sort().forEach(l=>{if(l>=n){const c=l===n,d=new Date(l).toLocaleDateString("tr-TR",{day:"numeric",month:"long"}),f=`
                    <div onclick="openNoteModal('${l}')" class="activity-item flex items-center justify-between bg-purple-900/20 p-3 rounded-xl border border-purple-500/30 mb-2 cursor-pointer hover:bg-purple-900/30">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-[10px] font-bold text-purple-400 border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">ÖDEME</span>
                                <span class="text-[9px] text-purple-300">${c?"Bugün":d}</span>
                            </div>
                            <p class="text-xs font-bold text-white">Ödeme Bekliyor</p>
                        </div>
                        <span class="text-sm font-bold text-white">${Y[l].toLocaleString("tr-TR")} ₺</span>
                    </div>`;c?i+=f:(r+=f,s=!0)}}),i||(i='<div class="text-center text-xs text-gray-500 italic py-2">Bugün için planlanan bir şey yok.</div>'),s||(r='<div class="text-center text-[10px] text-gray-600 py-2">Yaklaşan kayıt yok.</div>'),t.innerHTML=i,e.innerHTML=r}async function pP(){try{const i=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${37.8714}&longitude=${32.4846}&current_weather=true&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)).json();document.getElementById("currentTemp").innerText=`${Math.round(i.current_weather.temperature)}°`,document.getElementById("currentWeatherDesc").innerText=rg(i.current_weather.weathercode);const r=document.getElementById("hourlyForecast");r.innerHTML="";const s=new Date().getHours();for(let a=0;a<24;a++){const l=new Date(i.hourly.time[a]);l.getHours()>=s&&(r.innerHTML+=`
                            <div class="text-center shrink-0">
                                <div class="bg-slate-800 rounded-xl p-3 min-w-[70px] border border-white/5">
                                    <div class="text-xs font-bold text-gray-300">${l.getHours()}:00</div>
                                    <div class="text-2xl my-2">${sg(i.hourly.weathercode[a])}</div>
                                    <div class="text-sm font-bold text-white">${Math.round(i.hourly.temperature_2m[a])}°</div>
                                </div>
                            </div>`)}const o=document.getElementById("weeklyForecast");o.innerHTML="";for(let a=0;a<7;a++){const c=new Date(i.daily.time[a]).toLocaleDateString("tr-TR",{weekday:"long"}),u=i.daily.weathercode[a],f=u>=51&&u<=67||u>=80&&u<=82?"weather-row rain-alert-bg p-2 rounded-lg":"weather-row p-2";o.innerHTML+=`
                        <div class="${f} flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="w-6 text-center">${sg(u)}</span>
                                <div>
                                    <div class="text-xs font-bold text-white">${c}</div>
                                    <div class="text-[10px] text-gray-400">${rg(u)}</div>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-gray-300">
                                <span class="text-white">${Math.round(i.daily.temperature_2m_max[a])}°</span> / ${Math.round(i.daily.temperature_2m_min[a])}°
                            </div>
                        </div>`}}catch(t){console.error("Hava durumu hatası:",t)}}function rg(t){return t===0?"Açık":t>=1&&t<=3?"Parçalı Bulutlu":t>=45&&t<=48?"Sisli":t>=51&&t<=67?"Yağmurlu":t>=71&&t<=77?"Karlı":t>=80&&t<=82?"Sağanak":t>=95?"Fırtına":"Bulutlu"}function sg(t){return t===0?'<i class="fa-solid fa-sun text-yellow-400"></i>':t>=1&&t<=3?'<i class="fa-solid fa-cloud-sun text-gray-300"></i>':t>=45&&t<=48?'<i class="fa-solid fa-smog text-gray-400"></i>':t>=51&&t<=67?'<i class="fa-solid fa-cloud-rain text-blue-400"></i>':t>=71&&t<=77?'<i class="fa-regular fa-snowflake text-white"></i>':'<i class="fa-solid fa-cloud text-gray-500"></i>'}function mP(){window.open("https://www.google.com/search?q=hava+durumu+konya","_blank")}function gP(){const t=localStorage.getItem("kurye_garage");t&&(ht=JSON.parse(t)),document.getElementById("currentKm").value=ht.currentKm||"",document.getElementById("lastOilKm").value=ht.lastOilKm||"",document.getElementById("oilInterval").value=ht.oilInterval||2e3}function EE(){ht.currentKm=parseFloat(document.getElementById("currentKm").value)||0,ht.lastOilKm=parseFloat(document.getElementById("lastOilKm").value)||0,ht.oilInterval=parseFloat(document.getElementById("oilInterval").value)||2e3,localStorage.setItem("kurye_garage",JSON.stringify(ht));let e=(ht.currentKm-ht.lastOilKm)/ht.oilInterval*100;e>100&&(e=100),e<0&&(e=0);const n=document.getElementById("oilProgressBar");n.style.width=e+"%",document.getElementById("oilPercentText").innerText="%"+e.toFixed(0);const i=document.getElementById("oilStatusText");e<50?(n.className="bg-green-500 h-full transition-all",i.innerText="Durum İyi",i.className="text-green-400 font-bold"):e<80?(n.className="bg-yellow-500 h-full transition-all",i.innerText="Bakım Yaklaşıyor",i.className="text-yellow-400 font-bold"):(n.className="bg-red-500 h-full transition-all",i.innerText="BAKIM GEREKLİ!",i.className="text-red-500 font-bold animate-pulse")}function vP(){const t=localStorage.getItem("kurye_checklist_start"),e=localStorage.getItem("kurye_checklist_end");t&&(Ki=JSON.parse(t)),e&&(Vi=JSON.parse(e)),Dr()}function yP(t){Mo=t,document.getElementById("btnCheckStart").className=t==="start"?"toggle-btn active":"toggle-btn inactive",document.getElementById("btnCheckEnd").className=t==="end"?"toggle-btn active":"toggle-btn inactive";const e=document.getElementById("checkHeaderTitle"),n=document.getElementById("checkHeaderSub"),i=document.getElementById("checkHeaderIcon"),r=document.getElementById("checkHeaderCard");t==="start"?(e.innerText="İşe Başlarken",n.innerText="Unutma: Eksik malzeme = Zaman kaybı.",i.className="fa-solid fa-backpack text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",r.className="bg-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/20 transition-colors duration-500"):(e.innerText="İşten Dönerken",n.innerText="Yarına hazırlık bugünden başlar.",i.className="fa-solid fa-moon text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12",r.className="bg-purple-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-purple-900/20 transition-colors duration-500"),Dr()}function Dr(){const t=Mo==="start"?Ki:Vi,e=document.getElementById("checklistContainer");e.innerHTML="",t.length===0?document.getElementById("emptyListMsg").classList.remove("hidden"):document.getElementById("emptyListMsg").classList.add("hidden"),t.forEach((n,i)=>{const r=document.createElement("div");r.className=`check-item ${n.checked?"checked":""} bg-slate-800 p-3 rounded-xl flex items-center justify-between cursor-pointer`,r.innerHTML=`<span class="font-bold text-sm text-white flex-1">${n.text}</span><button onclick="deleteCheckItem(event, ${i})" class="text-gray-500 hover:text-red-400 p-2"><i class="fa-solid fa-trash"></i></button>`,r.onclick=s=>{s.target.tagName!=="BUTTON"&&s.target.tagName!=="I"&&wE(i)},e.appendChild(r)})}function _P(){const t=document.getElementById("newCheckItem").value;if(!t)return;(Mo==="start"?Ki:Vi).push({text:t,checked:!1}),wl(),document.getElementById("newCheckItem").value="",Dr()}function wE(t){const e=Mo==="start"?Ki:Vi;e[t].checked=!e[t].checked,wl(),Dr(),e.length>0&&e.every(n=>n.checked)&&(be("Harika!","Tüm ürünler seçildi, çanta hazır!"),setTimeout(()=>{e.forEach(n=>n.checked=!1),wl(),Dr()},1500))}function EP(t,e){t.stopPropagation(),(Mo==="start"?Ki:Vi).splice(e,1),wl(),Dr()}function wl(){localStorage.setItem("kurye_checklist_start",JSON.stringify(Ki)),localStorage.setItem("kurye_checklist_end",JSON.stringify(Vi))}function wP(){const t=new Date().getDay();aa(t===0?"sunday":t===5?"friday":t===6?"saturday":"weekday")}function aa(t){El=t;const e={weekday:"Pazartesi - Perşembe",friday:"Cuma Günü",saturday:"Cumartesi Günü",sunday:"Pazar Günü"};document.getElementById("selectedDayLabel")&&(document.getElementById("selectedDayLabel").innerText=e[t]),document.getElementById("speedDayLabel")&&(document.getElementById("speedDayLabel").innerText=e[t]),Ot(),typeof Or=="function"&&Or()}function xE(t){yd=t;const e={expense:"btnSubExpense",average:"btnSubAverage",detailed:"btnSubDetailed"};Object.keys(e).forEach(i=>{const r=document.getElementById(e[i]);r&&(i===t?(r.classList.add("active","bg-indigo-600","text-white","shadow-lg"),r.classList.remove("inactive","text-gray-500","hover:bg-white/5")):(r.classList.remove("active","bg-indigo-600","text-white","shadow-lg"),r.classList.add("inactive","text-gray-500","hover:bg-white/5")))});const n={expense:document.getElementById("viewExpense"),average:document.getElementById("viewAverage"),detailed:document.getElementById("viewDetailed")};Object.keys(n).forEach(i=>{n[i]&&(i===t?n[i].classList.remove("hidden"):n[i].classList.add("hidden"))}),t==="detailed"&&Sh(),TE(),Ot()}let Pn=7;function xP(t){Pn+=t,Pn<1&&(Pn=1),Pn>31&&(Pn=31),document.getElementById("detailDaysDisp").innerText=Pn,Sh()}function Sh(){const t=document.getElementById("detailedPlanContainer");t.innerHTML="";let e=document.getElementById("planStartDate").value,n=new Date;if(e)n=new Date(e);else{const r=n.toISOString().split("T")[0];document.getElementById("planStartDate").value=r}const i=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];for(let r=0;r<Pn;r++){const s=new Date(n);s.setDate(n.getDate()+r);const o=s.getDay(),a=i[o],l=s.toLocaleDateString("tr-TR",{day:"numeric",month:"numeric"});let c="text-gray-400";o===5?c="text-emerald-400":(o===6||o===0)&&(c="text-indigo-400"),t.innerHTML+=`
            <div class="bg-slate-800/50 p-3 rounded-xl border border-white/5 space-y-2">
                <div class="flex justify-between items-center border-b border-white/5 pb-1">
                    <div class="text-[11px] font-bold ${c} flex items-center gap-2">
                        <i class="fa-regular fa-calendar"></i> ${l} ${a}
                    </div>
                    <div class="text-[10px] font-bold text-gray-500" id="detail_info_${r}">Bonus: -</div>
                </div>
                
                <div class="grid grid-cols-4 gap-2">
                    <div class="col-span-1">
                        <label class="block text-[8px] text-gray-500 font-bold mb-0.5 text-center">Tekli</label>
                        <input type="number" id="ds_${r}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="0" onkeyup="calculateDetailedPlan()">
                    </div>
                    <div class="col-span-1">
                        <label class="block text-[8px] text-gray-500 font-bold mb-0.5 text-center">Çoklu</label>
                        <input type="number" id="dm_${r}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="0" onkeyup="calculateDetailedPlan()">
                    </div>
                    <div class="col-span-1">
                        <label class="block text-[8px] text-gray-500 font-bold mb-0.5 text-center">AVM</label>
                        <input type="number" id="da_${r}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="-" onkeyup="calculateDetailedPlan()">
                    </div>
                    <div class="col-span-1">
                        <label class="block text-[8px] text-blue-500/70 font-bold mb-0.5 text-center">Gece</label>
                        <input type="number" id="dn_${r}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="-" onkeyup="calculateDetailedPlan()">
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-2 items-center">
                     <div>
                        <label class="block text-[8px] test-gray-500 font-bold mb-0.5 ml-1">Ort. KM</label>
                        <div class="relative">
                            <input type="number" id="dkm_${r}" step="0.1" class="input-dark p-1.5 rounded-lg text-xs font-bold w-full pl-6 text-blue-300" placeholder="0" onkeyup="calculateDetailedPlan()">
                             <i class="fa-solid fa-gauge-high absolute left-2 top-1/2 -translate-y-1/2 text-[9px] text-blue-500"></i>
                        </div>
                     </div>
                     <div class="bg-slate-900 rounded-lg p-1.5 text-right">
                        <span class="text-[10px] text-gray-400 block" style="line-height:1">Günlük</span>
                        <span id="dres_${r}" class="text-sm font-black text-white">0 ₺</span>
                     </div>
                </div>
            </div>
        `}document.getElementById("detailedResultArea").classList.remove("hidden"),IE()}function IE(){let t=0,e=document.getElementById("planStartDate").value,n=e?new Date(e):new Date;for(let i=0;i<Pn;i++){const r=parseFloat(document.getElementById(`ds_${i}`).value)||0,s=parseFloat(document.getElementById(`dm_${i}`).value)||0,o=parseFloat(document.getElementById(`da_${i}`).value)||0,a=parseFloat(document.getElementById(`dn_${i}`).value)||0,l=parseFloat(document.getElementById(`dkm_${i}`).value)||0,c=r*Pe.single+s*Pe.multi,u=o*Pe.avm+a*Pe.night,d=r+s,f=gf(l),p=d*l*f,v=new Date(n);v.setDate(n.getDate()+i);const y=v.getDay();let k="weekday";y===5?k="friday":y===6?k="saturday":y===0&&(k="sunday"),xI(d,Si,k);const h=Ss(d,Si,k).current,g=c+u+p+h;t+=g,document.getElementById(`dres_${i}`).innerText=g.toLocaleString("tr-TR")+" ₺";const _=Math.round(p)||0;document.getElementById(`detail_info_${i}`).innerText=`Bonus: ${h}₺ / KM: ${_}₺`}document.getElementById("detailTotalGross").innerText=t.toLocaleString("tr-TR")}function IP(t){nn[t]===void 0&&(nn[t]=0);let e=5;mo==="week"?t==="weekday"?e=4:e=1:mo==="day"&&(e=1),nn[t]<e?nn[t]++:nn[t]=0,bE(),Ot()}function bP(){nn={weekday:0,friday:0,saturday:0,sunday:0},bE(),Ot()}function bE(){["weekday","friday","saturday","sunday"].forEach(n=>{const i=nn[n];let r=n.charAt(0).toUpperCase()+n.slice(1);const s=document.getElementById(`count${r}`);s&&(s.innerText=i);const o=document.getElementById(`bar${r}`);o&&(o.style.width=`${Math.min(100,i*20)}%`)});const t=Object.values(nn).reduce((n,i)=>n+i,0),e=document.getElementById("offDaysTotalLabel");e&&(e.innerText=`${t} Gün`)}function Ot(){if(yd==="expense"){const t=parseFloat(document.getElementById("manualTurnoverInput").value)||0,n=t/(1+.2),i=t-n;let r=0,s=0;oi.forEach(l=>{r+=l.total,s+=l.vat});let o=i-s;o<0&&(o=0);const a=t-r-o;document.getElementById("resGross").innerText=t.toLocaleString("tr-TR"),document.getElementById("resExpenses").innerText=r.toLocaleString("tr-TR"),document.getElementById("resVatDeductions").innerText=s.toLocaleString("tr-TR"),document.getElementById("resVat").innerText=o.toLocaleString("tr-TR"),document.getElementById("resNet").innerText=a.toLocaleString("tr-TR"),xl()}else if(yd==="average"){const t=parseFloat(document.getElementById("single").value)||0,e=parseFloat(document.getElementById("multi").value)||0,n=parseFloat(document.getElementById("avm").value)||0,i=parseFloat(document.getElementById("night").value)||0,r=document.getElementById("avgKmProfit");let s=3.5;try{const R=localStorage.getItem("userSettings");R&&(s=JSON.parse(R).avgKm||3.5)}catch(R){console.error("Error reading settings",R)}const o=r?parseFloat(r.value)||0:s,a=gf(o),l=document.getElementById("profitKmInfo");l&&(o>0?(l.style.display="block",document.getElementById("profitKmRate").innerText=`${a} TL/km`):l.style.display="none");const c=t+e,u=c*o*a,d=t*Pe.single+e*Pe.multi,f=n*Pe.avm+i*Pe.night+u,p=d+f,v=Ss(c,Si,El).current,y=p+v;document.getElementById("dispDailyMoney").innerText=y.toLocaleString("tr-TR"),document.getElementById("dispTotalPackets").innerText=c,document.getElementById("bonusAmount").innerText=v.toLocaleString("tr-TR");let k=0,m=new Date,h=0;mo==="month"?h=30:mo==="week"?h=7:h=1;let g=0,_={...nn};for(let R=0;R<h;R++){const oe=m.getDay();let ae="weekday";if(oe===5?ae="friday":oe===6?ae="saturday":oe===0&&(ae="sunday"),_[ae]>0)_[ae]--;else{g++;const qt=Ss(c,Si,ae).current;k+=p+qt}m.setDate(m.getDate()+1)}document.getElementById("avgTotalGross").innerText=k.toLocaleString("tr-TR"),document.getElementById("calculatedWorkDays")&&(document.getElementById("calculatedWorkDays").innerText=g);const S=new Date().toLocaleDateString("tr-TR",{day:"numeric",month:"long"}),T=document.getElementById("calculatedWorkDaysInfo");T&&(T.innerHTML=`<span class="text-indigo-400 font-bold">${S}</span>'den itibaren <span class="text-gray-400">${h} Gün</span> (<span class="text-white font-bold">${g} İş Günü</span>)`);const x=Ss(c,Si,El),b=document.getElementById("bonusBar"),K=document.getElementById("nextBonusPkt");if(document.getElementById("currentTierInfo").innerText=x.current.toLocaleString("tr-TR")+" TL",x.nextTarget>0){let R=Math.min(100,c/x.nextTarget*100);b.style.width=`${R}%`,K.innerText=x.nextTarget,document.getElementById("nextTierInfo").innerText=x.nextValue.toLocaleString("tr-TR")+" TL"}else b.style.width="100%",K.innerText="MAX",document.getElementById("nextTierInfo").innerText="MAX"}}function SP(){const t=localStorage.getItem("kurye_packet_counter");t?ye=JSON.parse(t):ye={single:0,multi:0,avm:0},ye.avm===void 0&&(ye.avm=0),kh(),Th();const e=localStorage.getItem("kurye_instant_fuel");e!==null&&(document.getElementById("perfFuelInput").value=e),Or()}function SE(){localStorage.setItem("kurye_packet_counter",JSON.stringify(ye)),CE()}function kP(t,e){ye[t]+=e,ye[t]<0&&(ye[t]=0),kh(),Th(),Or(),SE()}async function TP(){await zi("Tüm paket sayaçlarını sıfırlamak istediğinize emin misiniz?","Sayaç Sıfırlama")&&(ye={single:0,multi:0,avm:0},kh(),Th(),localStorage.setItem("kurye_instant_fuel",250),document.getElementById("perfFuelInput").value=250,Or(),SE(),be("Sıfırlandı","Tüm sayaçlar temizlendi."))}function kh(){document.getElementById("counterSingle").textContent=ye.single,document.getElementById("counterMulti").textContent=ye.multi,document.getElementById("counterAvm")&&(document.getElementById("counterAvm").textContent=ye.avm||0),document.getElementById("totalPacketsCounter").textContent=ye.single+ye.multi}function Th(){const t=ye.single+ye.multi;document.getElementById("perfPacketCount")&&(document.getElementById("perfPacketCount").value=t,cc())}function Or(){var S,T;const e=ye.single||0,n=ye.multi||0,i=e+n,r=parseFloat((S=document.getElementById("avgKmInput"))==null?void 0:S.value)||0;r&&localStorage.setItem("kurye_avg_km_perf",r);const s=gf(r),o=i*r*s,a=e*Pe.single,l=n*Pe.multi,c=ye.avm||0,u=c*Pe.avm,f=Ss(i,Si,El).current,p=a+l+o+f+u,v=p/(1+.2),y=p-v,k=parseFloat((T=document.getElementById("perfFuelInput"))==null?void 0:T.value)||0;k&&localStorage.setItem("kurye_instant_fuel",k);const m=k/(1+.2),h=k-m,g=v-m,_=p-k;document.getElementById("singleCountDisplay").innerText=e,document.getElementById("multiCountDisplay").innerText=n,document.getElementById("avmCountDisplay")&&(document.getElementById("avmCountDisplay").innerText=c),document.getElementById("earnSingle").innerText=a+" ₺",document.getElementById("earnMulti").innerText=l+" ₺",document.getElementById("earnAvm")&&(document.getElementById("earnAvm").innerText=u+" ₺"),document.getElementById("kmUnitPriceDisp").innerText=s+" TL/Km",document.getElementById("perfKmEarnings").innerText=o.toFixed(0)+" ₺",document.getElementById("earnBonus").innerText=f+" ₺",document.getElementById("totalEarning").innerText=p.toLocaleString("tr-TR")+" ₺",document.getElementById("vatOnIncome").innerText=y.toFixed(0)+" ₺",document.getElementById("incomeWithoutVat").innerText="KDV Hariç: "+v.toFixed(0)+" ₺",document.getElementById("vatOnFuel").innerText=h.toFixed(0)+" ₺",document.getElementById("fuelWithoutVat").innerText="KDV Hariç: "+m.toFixed(0)+" ₺",document.getElementById("netEarningAfterVat").innerText=g.toFixed(0)+" ₺",document.getElementById("totalNetEarning").innerText=_.toLocaleString("tr-TR")+" ₺"}function zi(t,e="Emin misiniz?"){return new Promise(n=>{document.getElementById("confirmModalTitle").textContent=e,document.getElementById("confirmModalMessage").textContent=t,document.getElementById("customConfirmModal").classList.remove("hidden"),document.getElementById("confirmModalOk").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!0)},document.getElementById("confirmModalCancel").onclick=function(){document.getElementById("customConfirmModal").classList.add("hidden"),n(!1)}})}function be(t,e){const n=document.querySelector(".success-toast");n&&n.remove();const i=document.createElement("div");i.className="success-toast",i.innerHTML=`<i class="fa-solid fa-check-circle text-lg"></i><div><div class="font-bold">${t}</div><div class="text-[10px] opacity-90">${e}</div></div>`,document.body.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),300)},3e3)}function kE(){const t=localStorage.getItem("kurye_prices");t&&(Pe=JSON.parse(t)),["confSingle","confMulti","confAvm","confNight"].forEach(e=>{const n=e.replace("conf","").toLowerCase();document.getElementById(e).value=Pe[n]})}function TE(){const t=localStorage.getItem("kurye_custom_expenses");t?oi=JSON.parse(t):oi=[],xl()}function Ah(){localStorage.setItem("kurye_custom_expenses",JSON.stringify(oi))}function og(){const t=document.getElementById("expName").value||"Gider",e=parseFloat(document.getElementById("expAmount").value)||0,n=parseFloat(document.getElementById("expVatRate").value)||0;if(e===0)return;const i=e*n/(100+n),r=e-i;oi.push({id:Date.now(),name:t,base:r,rate:n,vat:i,total:e}),document.getElementById("expName").value="",document.getElementById("expAmount").value="",Ah(),Ot()}function ag(t){oi=oi.filter(e=>e.id!==t),Ah(),Ot()}function xl(){const t=document.getElementById("expenseListContainer");t&&(t.innerHTML="",oi.forEach(e=>{t.innerHTML+=`
            <div class="flex items-center justify-between bg-slate-800/40 p-2.5 rounded-xl border border-white/5 mb-2 hover:bg-slate-800/60 transition-all group">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-white">${e.name}</span>
                        <span class="text-[9px] px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full font-bold">%${e.rate} KDV</span>
                    </div>
                    <div class="text-[10px] text-gray-500">
                        Taban: ${e.base.toLocaleString("tr-TR")} ₺ + KDV: ${e.vat.toLocaleString("tr-TR")} ₺
                    </div>
                </div>
                <div class="text-right flex items-center gap-3">
                    <div class="text-xs font-black text-white">${e.total.toLocaleString("tr-TR")} ₺</div>
                    <button onclick="deleteExpenseItem(${e.id})" class="text-gray-600 group-hover:text-red-400 transition-colors p-1.5">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `}))}function AE(){["single","multi","avm","night"].forEach(t=>{const e="conf"+t.charAt(0).toUpperCase()+t.slice(1);Pe[t]=parseFloat(document.getElementById(e).value)||0}),localStorage.setItem("kurye_prices",JSON.stringify(Pe)),Ot()}function AP(){const t={metadata:{app:"Kurye Pro",version:"V34",date:new Date().toISOString()},prices:Pe,dailyBonusTiers:Si,calendarData:xe,checklistStart:Ki,checklistEnd:Vi,garageData:ht,packetCounter:ye,accumulatedPayments:Y,fuelHistory:Vt,expenses:JSON.parse(localStorage.getItem("kurye_expenses")||"{}")},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=`kurye_backup_${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i)}async function CP(t){const e=t.target.files[0];if(!e||!await zi("Verileriniz silinecek. Onaylıyor musunuz?","Geri Yükle"))return;const i=new FileReader;i.onload=function(r){try{const s=JSON.parse(r.target.result);s.prices&&localStorage.setItem("kurye_prices",JSON.stringify(s.prices)),s.expenses&&localStorage.setItem("kurye_expenses",JSON.stringify(s.expenses)),s.calendarData&&localStorage.setItem("kurye_calendar",JSON.stringify(s.calendarData)),s.packetCounter&&localStorage.setItem("kurye_packet_counter",JSON.stringify(s.packetCounter)),s.fuelHistory&&localStorage.setItem("kurye_fuel_history_list",JSON.stringify(s.fuelHistory)),window.location.reload()}catch{be("Hata","Dosya okunamadı.")}},i.readAsText(e)}function RP(){const t=localStorage.getItem("kurye_fuel_unit_price");t&&(document.getElementById("calcFuelUnitPrice").value=t);const e=localStorage.getItem("kurye_fuel_history_list");e&&(Vt=JSON.parse(e),Ch())}function NP(){const t=parseFloat(document.getElementById("calcFuelUnitPrice").value)||0,e=parseFloat(document.getElementById("calcFuelPrice").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;let i=t>0&&e>0?e/t:0;document.getElementById("calcFuelLtDisplay").innerText=i.toFixed(1),document.getElementById("calcFuelLt").value=i,n>0&&e>0&&(document.getElementById("resFuelTl").innerText=(e/n).toFixed(2),document.getElementById("resFuelLt100").innerText=(i>0?i/n*100:0).toFixed(1))}function PP(){localStorage.setItem("kurye_fuel_unit_price",document.getElementById("calcFuelUnitPrice").value)}function LP(){const t=parseFloat(document.getElementById("calcFuelPrice").value)||0,e=parseFloat(document.getElementById("calcFuelLt").value)||0,n=parseFloat(document.getElementById("calcFuelKm").value)||0;if(t<=0)return be("Hata","Tutar giriniz.");Vt.unshift({date:new Date().toLocaleDateString("tr-TR",{day:"numeric",month:"short"}),amount:t,lt:e,km:n,per100:n>0&&e>0?(e/n*100).toFixed(1):"0.0"}),Vt.length>5&&(Vt=Vt.slice(0,5)),localStorage.setItem("kurye_fuel_history_list",JSON.stringify(Vt)),Ch(),be("Eklendi","Yakıt kaydı eklendi.")}function Ch(){const t=document.getElementById("fuelHistoryList");t&&(t.innerHTML=Vt.length?"":'<div class="text-center text-[10px] text-gray-600 py-2">Kayıt yok.</div>',Vt.forEach(e=>{t.innerHTML+=`<div class="bg-slate-800/80 p-2 rounded-lg border border-white/5 flex justify-between items-center mb-1"><div><div class="text-xs font-bold text-white">${e.amount} ₺ <span class="text-[10px] text-gray-400">(${e.lt.toFixed(1)} Lt)</span></div><div class="text-[9px] text-gray-500">${e.date} • ${e.km>0?e.km+" KM":"KM girilmedi"}</div></div><div class="text-right"><div class="text-xs font-bold text-cyan-400">${e.per100} Lt <span class="text-[9px] text-gray-500">/100km</span></div></div></div>`}))}async function DP(){await zi("Geçmiş silinsin mi?")&&(Vt=[],localStorage.removeItem("kurye_fuel_history_list"),Ch())}function OP(){document.getElementById("calcFuelPrice").value="",document.getElementById("calcFuelKm").value=""}function MP(t){const e=new Date(t);Kt=t,document.getElementById("noteDateTitle").innerText=e.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric"}),document.getElementById("noteModal").classList.remove("hidden");const n=document.getElementById("dayEventsList");n.innerHTML="";let i=!1;Y[t]&&(i=!0,n.innerHTML+=`
                    <div class="bg-purple-900/40 p-2 rounded-lg mb-2 border border-purple-500/30 flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">Ödeme Günü</div>
                            <div class="text-[10px] text-purple-300">Bu tarihte birikmiş: <span class="text-white font-bold">${Y[t].toLocaleString("tr-TR")} ₺</span></div>
                        </div>
                        <button onclick="deleteAccumulatedPayment('${t}')" class="text-purple-300 hover:text-red-400 transition-colors px-2"><i class="fa-solid fa-trash"></i></button>
                    </div>`);const r=parseInt(t.split("-")[2]);xn.forEach(s=>{if(parseInt(s.day)===r){i=!0;let o=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",a=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",l=s.type==="activity"?"":s.type==="income"?`+${s.amount}₺`:`-${s.amount}₺`;n.innerHTML+=`
                        <div class="bg-blue-900/40 p-2 rounded-lg mb-2 border border-blue-500/20">
                            <div class="text-xs font-bold text-white">${s.description}</div>
                            <div class="text-[10px] text-blue-300">Tekrarlayan İşlem • <span class="${a} font-bold">${o} ${l}</span></div>
                        </div>`}}),xe[t]&&xe[t].forEach((s,o)=>{i=!0;let a=s.type==="income"?"GELİR":s.type==="expense"?"GİDER":"AKTİVİTE",l=s.type==="income"?"text-green-400":s.type==="expense"?"text-red-400":"text-yellow-400",c="";s.type==="income"?c=`+${s.amount}₺`:s.type==="expense"&&(c=`-${s.amount}₺`),n.innerHTML+=`
                        <div class="bg-slate-800 p-2 rounded-lg mb-2 flex justify-between items-center">
                            <div>
                                <div class="text-xs font-bold text-white">${s.note}</div>
                                <div class="text-[10px] text-gray-400"><span class="${l} font-bold">${a}</span> ${c}</div>
                            </div>
                            <button onclick="deleteNote(${o})" class="text-red-400"><i class="fa-solid fa-trash"></i></button>
                        </div>`}),i||(n.innerHTML='<div class="text-center text-[10px] text-gray-500 py-2">Henüz not yok.</div>')}async function UP(t){await zi(`${t} tarihindeki ödemeyi silmek istediğinize emin misiniz?`,"Ödeme Sil")&&(delete Y[t],localStorage.setItem("kurye_accumulated_payments",JSON.stringify(Y)),be("Silindi","Ödeme silindi."),Fo(t),Dt(),Uo())}function Fo(t){MP(t)}function FP(){document.getElementById("noteModal").classList.add("hidden")}function BP(t){pE=t,["btnTypeIncome","btnTypeExpense","btnTypeActivity"].forEach(e=>document.getElementById(e).classList.remove("active")),document.getElementById("btnType"+t.charAt(0).toUpperCase()+t.slice(1)).classList.add("active")}function HP(){const t=document.getElementById("noteText").value,e=parseFloat(document.getElementById("noteAmount").value);!t&&!e||(xe[Kt]||(xe[Kt]=[]),xe[Kt].push({note:t,amount:e,type:pE}),localStorage.setItem("kurye_calendar",JSON.stringify(xe)),document.getElementById("noteText").value="",document.getElementById("noteAmount").value="",be("Eklendi","Not eklendi."),Fo(Kt),Dt())}function KP(t){xe[Kt]&&(xe[Kt].splice(t,1),xe[Kt].length===0&&delete xe[Kt],localStorage.setItem("kurye_calendar",JSON.stringify(xe)),Fo(Kt),Dt())}function VP(){const t=localStorage.getItem("kurye_perf_memory");if(t){const e=JSON.parse(t);e.start&&(document.getElementById("perfStartTime").value=e.start),e.end&&(document.getElementById("perfEndTime").value=e.end),e.count&&(document.getElementById("perfPacketCount").value=e.count),cc()}}function Rh(){const t={start:document.getElementById("perfStartTime").value,end:document.getElementById("perfEndTime").value,count:document.getElementById("perfPacketCount").value};localStorage.setItem("kurye_perf_memory",JSON.stringify(t))}function zP(t){const e=new Date,n=String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0");document.getElementById(t).value=n,cc(),Rh()}function cc(){const t=document.getElementById("perfStartTime").value,e=document.getElementById("perfEndTime").value,n=parseFloat(document.getElementById("perfPacketCount").value)||0;if(!t||!e||n<=0)return;const[i,r]=t.split(":").map(Number),[s,o]=e.split(":").map(Number);let a=s*60+o-(i*60+r);if(a<0&&(a+=24*60),a>0){const l=a/60,c=n/l,u=a/n;document.getElementById("perfResultArea").classList.remove("hidden"),document.getElementById("perfAvgSpeed").innerText=c.toFixed(1),document.getElementById("perfMinsPerPacket").innerText=u.toFixed(1),document.getElementById("perfTotalTime").innerText=Math.floor(a/60)+"s "+a%60+"dk",document.getElementById("perfTotalPackets").innerText=n}}function jP(){document.getElementById("perfEndTime").value="",document.getElementById("perfPacketCount").value="",document.getElementById("perfResultArea").classList.add("hidden"),Rh()}function CE(){let t=0;for(let e in localStorage)localStorage.hasOwnProperty(e)&&(t+=(localStorage[e].length+e.length)*2);document.getElementById("dataSize").innerText=(t/1024).toFixed(2)+" KB"}function WP(){document.getElementById("settingsModal").classList.toggle("hidden")}function $P(){document.getElementById("finalResultCard").scrollIntoView({behavior:"smooth"})}function RE(t,e){document.querySelectorAll(".tab-content").forEach(n=>n.classList.remove("active")),document.getElementById(t).classList.add("active"),document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active","bg-indigo-600","text-white","shadow-lg")),e.classList.add("active","bg-indigo-600","text-white","shadow-lg"),e.classList.remove("text-gray-400")}function GP(){document.getElementById("single").value="",document.getElementById("multi").value="",Ot()}function YP(){Ze=[],localStorage.removeItem("kurye_transaction_history"),_E()}function qP(){confirm("Varsayılan fiyatlara dönülsün mü?")&&(Pe={single:110,multi:40,avm:10,night:20},AE(),kE())}function QP(){console.log("POS")}function JP(t){Nn+=t,Nn<1&&(Nn=1),Nn>60&&(Nn=60),document.getElementById("simDays").textContent=Nn}async function XP(t){const e=document.getElementById("resNet").innerText.replace(/\./g,"").replace(",","."),n=parseFloat(e);if(n<=0){be("Hata","Net gelir 0 veya daha düşük.");return}const i=document.getElementById(t).value,r=new Date(i);await zi(`₺${n.toLocaleString("tr-TR")} tutarındaki net gelir ${r.toLocaleDateString("tr-TR")} ödemesine eklensin mi?`,"Ödeme Ekle")&&(Y[i]||(Y[i]=0),Y[i]+=n,Ze.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"income",amount:n,description:"Hesaplanan Net Gelir"}),Ze.length>5&&Ze.pop(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(Y)),localStorage.setItem("kurye_transaction_history",JSON.stringify(Ze)),be("Başarılı","Ödeme gününe eklendi."),Uo(),Dt())}async function ZP(t){const e=document.getElementById("totalNetEarning").innerText.replace("₺","").replace(/\./g,"").replace(",",".").trim(),n=parseFloat(e);if(isNaN(n)||n<=0){be("Hata","Net kazanç hesaplanamadı veya 0.");return}const i=document.getElementById(t).value,r=new Date(i);await zi(`₺${n.toLocaleString("tr-TR")} tutarındaki HIZ MENÜSÜ net kazancı ${r.toLocaleDateString("tr-TR")} ödemesine eklensin mi?`,"Ödeme Ekle")&&(Y[i]||(Y[i]=0),Y[i]+=n,Ze.unshift({date:new Date().toLocaleDateString("tr-TR"),type:"income",amount:n,description:"Hız Menüsü Kazancı"}),Ze.length>5&&Ze.pop(),localStorage.setItem("kurye_accumulated_payments",JSON.stringify(Y)),localStorage.setItem("kurye_transaction_history",JSON.stringify(Ze)),be("Başarılı","Hız kazancı ödeme gününe eklendi."),Uo(),Dt())}function eL(){const t=parseFloat(document.getElementById("bankAccount").value)||0,e=parseFloat(document.getElementById("creditDebt").value)||0;let n=t-e,i=0,r=0;const s=new Date,o=new Date;o.setDate(s.getDate()+Nn),Object.keys(xe).forEach(f=>{const p=new Date(f);p>=s&&p<=o&&xe[f].forEach(y=>{y.type==="income"?i+=parseFloat(y.amount)||0:y.type==="expense"&&(r+=parseFloat(y.amount)||0)})});const a=s.getDate(),l=new Date(s.getFullYear(),s.getMonth()+1,0).getDate();xn.forEach(f=>{if(f.type==="activity")return;let p=f.day-a;p<0&&(p=l-a+parseInt(f.day)),p<=Nn&&(f.type==="income"?i+=f.amount:f.type==="expense"&&(r+=f.amount))});for(let f in Y){const p=new Date(f);p>=s&&p<=o&&(i+=Y[f])}document.getElementById("currentBalanceResult").innerText=n.toLocaleString("tr-TR")+" ₺",document.getElementById("futureIncomesResult").innerText="+"+i.toLocaleString("tr-TR")+" ₺",document.getElementById("futureExpensesResult").innerText="-"+r.toLocaleString("tr-TR")+" ₺";const c=n+i-r;document.getElementById("finalBalanceResult").innerText=c.toLocaleString("tr-TR")+" ₺";const u=document.getElementById("resultEmoji"),d=document.getElementById("resultTitle");c>n*1.2?(u.textContent="🚀",d.textContent="MÜTHİŞ!",d.className="text-lg font-bold text-emerald-400"):c>n?(u.textContent="📈",d.textContent="İYİ GİDİYOR!",d.className="text-lg font-bold text-green-400"):c>0?(u.textContent="⚠️",d.textContent="DİKKAT!",d.className="text-lg font-bold text-yellow-400"):(u.textContent="🔴",d.textContent="TEHLİKE!",d.className="text-lg font-bold text-red-400"),document.getElementById("futureResult").classList.remove("hidden"),document.getElementById("futureResult").scrollIntoView({behavior:"smooth",block:"center"})}function tL(){const t=document.getElementById("sideDock");t&&t.classList.toggle("active")}let go=JSON.parse(localStorage.getItem("kurye_dialer_numbers")||"[]"),kt=JSON.parse(localStorage.getItem("kurye_dialer_history")||"[]");function nL(){document.getElementById("dialerModal").classList.remove("hidden"),Nh(),Ph(),document.getElementById("dialerOrderInput").focus()}function iL(){document.getElementById("dialerModal").classList.add("hidden")}function Nh(){const t=document.getElementById("dialerNumbersList");t.innerHTML="",go.forEach((e,n)=>{t.innerHTML+=`
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
                `})}function rL(){const t=document.getElementById("newDialerNumber"),e=t.value.trim().replace(/\s/g,"");if(e){if(e.length<3)return be("Hata","Geçersiz numara");go.push(e),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(go)),t.value="",Nh()}}function sL(t){go.splice(t,1),localStorage.setItem("kurye_dialer_numbers",JSON.stringify(go)),Nh()}function oL(t){const e=document.getElementById("dialerOrderInput").value.trim();e&&NE(e);let n=t;e&&(n+=","+e),window.open("tel:"+n)}function aL(){const t=document.getElementById("dialerOrderInput").value.trim();t&&(NE(t),be("Kaydedildi","Geçmişe eklendi"))}function NE(t){kt=kt.filter(e=>e!==t),kt.unshift(t),kt.length>10&&(kt=kt.slice(0,10)),localStorage.setItem("kurye_dialer_history",JSON.stringify(kt)),Ph()}function Ph(){const t=document.getElementById("dialerHistoryList"),e=document.getElementById("dialerHistorySection");if(kt.length===0){e.classList.add("hidden");return}e.classList.remove("hidden"),t.innerHTML="",kt.forEach(n=>{t.innerHTML+=`
                    <button onclick="document.getElementById('dialerOrderInput').value = '${n}'" 
                        class="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 font-mono text-sm border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                        ${n}
                    </button>
                `})}function lL(){kt=[],localStorage.setItem("kurye_dialer_history",JSON.stringify(kt)),Ph()}async function cL(t){const e=document.getElementById("quickSearchResults");if(!t||t.length<2){e.classList.add("hidden"),e.innerHTML="";return}try{let a;try{a=await it(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url)}catch(l){console.error(l)}if(a&&a.checkUserStatus){const l=localStorage.getItem("firebase_uid");if(!l){e.innerHTML='<div class="p-3 text-red-500 text-sm text-center font-bold"><i class="fa-solid fa-lock mb-2"></i><br>GİRİŞ YAPILMADI</div>',e.classList.remove("hidden");return}const c=await a.checkUserStatus(l);if(!c.allowed){e.innerHTML='<div class="p-3 text-red-500 text-sm text-center font-bold"><i class="fa-solid fa-lock mb-2"></i><br>ERİŞİM ENGELLENDİ</div>',e.classList.remove("hidden");return}const u=c.data;if(u.role!=="admin"&&(!u.allowedRegions||Object.keys(u.allowedRegions).length===0)){e.innerHTML=`<div class="p-3 text-red-500 text-sm text-center font-bold">
                                            <i class="fa-solid fa-lock mb-2"></i><br>
                                            BÖLGE YETKİNİZ YOK<br>
                                            <span class="text-xs text-gray-400 font-normal">Yöneticinizden bölge atanmasını isteyin.</span>
                                         </div>`,e.classList.remove("hidden");return}}if(a&&a.hasRemainingLimit){const l=await a.hasRemainingLimit();if(!l.allowed){const c=l.reason||"SORGU LİMİTİ DOLDU";e.innerHTML=`<div class="p-3 text-red-500 text-sm text-center font-bold">
                                            <i class="fa-solid fa-lock mb-2"></i><br>
                                            ${c}<br>
                                            <span class="text-xs text-gray-400 font-normal">Sonra tekrar deneyin.</span>
                                         </div>`,e.classList.remove("hidden");return}}}catch(a){console.error("Limit check fail",a)}if(await DE(),!ce)return;function n(a){return a.toUpperCase().replace(/İ/g,"I").replace(/I/g,"I").replace(/Ğ/g,"G").replace(/Ü/g,"U").replace(/Ş/g,"S").replace(/Ö/g,"O").replace(/Ç/g,"C")}const i=t.trim().split(/\s+/).map(a=>n(a)).filter(a=>a.length>0),r=[],s=20;function o(a){const l=n(a);return i.every(c=>l.includes(c))}for(const[a,l]of Object.entries(ce)){const c=l.adi;for(const[u,d]of Object.entries(l.streets||{})){const f=d.adi;for(const p of d.doors||[]){const v=p.no,y=c+" "+f+" "+v;if(o(y)&&r.push({type:"kapi",icon:"fa-door-open",color:"text-amber-400",text:c+" Mah. "+f+" No:"+v,mahalleId:a,mahalleAdi:c,sokakId:u,sokakAdi:f,door:p}),r.length>=s)break}if(r.length<s){const p=c+" "+f;o(p)&&!r.some(v=>v.sokakId===u&&!v.door)&&r.push({type:"sokak",icon:"fa-road",color:"text-green-400",text:f+", "+c+" Mah.",mahalleId:a,mahalleAdi:c,sokakId:u,sokakAdi:f})}if(r.length>=s)break}if(r.length<s&&i.length===1&&o(c)&&!r.some(u=>u.mahalleId===a&&u.type==="mahalle")&&r.push({type:"mahalle",icon:"fa-location-dot",color:"text-blue-400",text:c+" Mah.",mahalleId:a,mahalleAdi:c}),r.length>=s)break}r.sort((a,l)=>{const c={kapi:0,sokak:1,mahalle:2};return c[a.type]-c[l.type]}),r.length===0?e.innerHTML='<div class="p-3 text-gray-500 text-sm text-center">Sonuç bulunamadı</div>':e.innerHTML=r.map(a=>`
                    <div class="p-2 hover:bg-slate-700 cursor-pointer flex items-center gap-2 text-sm border-b border-slate-700 last:border-0"
                         onclick='selectQuickResult(${JSON.stringify(a).replace(/'/g,"&#39;")})'>
                        <i class="fa-solid ${a.icon} ${a.color}"></i>
                        <span class="text-gray-200">${a.text}</span>
                    </div>
                `).join(""),e.classList.remove("hidden")}async function uL(t){try{const n=await it(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url);if(n&&n.checkUserStatus){const i=localStorage.getItem("firebase_uid"),r=await n.checkUserStatus(i);if(!r.allowed)return;const s=r.data;if(s.role!=="admin"&&(!s.allowedRegions||Object.keys(s.allowedRegions).length===0)){be("Hata","Bölge yetkiniz yok.");return}}if(n&&n.incrementLimitUsage&&!await n.incrementLimitUsage()){be("Hata","Limit doldu, işlem yapılamaz."),document.getElementById("quickSearchResults").classList.add("hidden");return}}catch(n){console.warn("Increment failed",n)}document.getElementById("quickSearchResults").classList.add("hidden"),document.getElementById("quickAddressSearch").value=t.text;const e=document.getElementById("mapMahalle");e.value=t.mahalleId,Lh(),t.sokakId&&setTimeout(()=>{const n=document.getElementById("mapSokak");n.value=t.sokakId,PE(),t.door&&setTimeout(()=>{const i=document.getElementById("mapKapi"),r="No: "+t.door.no;for(let s of i.options)if(s.text===r||s.textContent===r){i.value=s.value;break}LE()},200)},150)}let Ft=null,tu=null,Sa=null,ce=null;window.attemptLogin=async function(t={}){const e=document.getElementById("btnLoginBtn"),n=(t==null?void 0:t.auto)===!0;e.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i> Google ile Bağlanılıyor...',e.disabled=!0;const i=await Ih(t);if(i.type==="redirect"||i.type==="external_browser"){e.innerHTML='<i class="fa-solid fa-external-link-alt mr-2"></i> Tarayıcıda Giriş Yap',e.disabled=!1;const r=document.getElementById("deviceInfoText");r&&(r.innerText="Tarayıcıda giriş yaptıktan sonra uygulamayı yeniden açın.");return}i.success?(document.getElementById("loginOverlay").classList.add("hidden"),be("Giriş Başarılı",`Hoşgeldin, ${i.user.displayName}`)):(!n&&i.error&&!i.error.includes("auth/popup-blocked")&&alert("Giriş Başarısız: "+i.error),e.innerHTML='<i class="fa-brands fa-google mr-2"></i> GOOGLE İLE GİRİŞ YAP',e.disabled=!1)};window.logoutUserApp=async function(){try{const t=await it(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url);t&&t.logoutUser&&(await t.logoutUser(),window.location.reload())}catch(t){console.error(t)}};async function dL(){const t=document.getElementById("deviceInfoText");if(t&&(t.innerText="Yükleniyor..."),new URLSearchParams(window.location.search).get("mode")==="login"){typeof window.attemptLogin=="function"?window.attemptLogin({auto:!0}):Ih({}).catch(console.error);return}const n=await fE(),i=document.getElementById("loginOverlay");n.status==="authorized"?i&&(i.classList.add("transition-opacity","duration-500","opacity-0"),setTimeout(()=>{i.classList.add("hidden"),i.style.opacity="1"},500)):(t&&(t.innerText="Güvenli Giriş v4.2"),n.status==="banned"&&(document.getElementById("loginTitle").innerText="HESAP YASAKLANDI",document.getElementById("loginTitle").classList.add("text-red-500"),document.getElementById("btnLoginBtn").style.display="none",t&&(t.innerText="Yönetici ile iletişime geçin.")))}async function fL(){var n;const t=document.getElementById("mapModal");if(!t)return;if(t.classList.contains("hidden"))t.classList.remove("hidden"),t.classList.add("animate-modal-in"),await DE(),((n=document.getElementById("mapIlce"))==null?void 0:n.options.length)<=1&&_d();else{t.classList.add("hidden"),t.classList.remove("animate-modal-in"),console.log("🔒 Güvenlik: Adres verisi RAM'den silindi."),ce=null;const i=document.getElementById("mapIlce");i&&(i.innerHTML='<option value="">Önce İlçe Seçiniz</option>'),document.getElementById("mapMahalle").innerHTML='<option value="">Önce İlçe Seçin</option>',document.getElementById("mapSokak").innerHTML='<option value="">Önce Mahalle Seçin</option>',document.getElementById("mapKapi").innerHTML='<option value="">Önce Sokak Seçin</option>',Ft&&(Ft.remove(),Ft=null)}}function Il(t){return t?t.toString().replace(/i/g,"İ").replace(/ı/g,"I").replace(/ğ/g,"Ğ").replace(/ü/g,"Ü").replace(/ş/g,"Ş").replace(/ö/g,"Ö").replace(/ç/g,"Ç").toUpperCase().trim():""}const lg={İSTİKLAL:"KARATAY",KALENDERHANE:"KARATAY",KARAASLAN:"KARATAY",KARADONA:"KARATAY",KARAKAYA:"KARATAY",KATRANCI:"KARATAY",KEÇECİLER:"KARATAY",KIZÖREN:"KARATAY",KÖSEALİ:"KARATAY",KUMKÖPRÜ:"KARATAY",MENGENE:"KARATAY",NAKİPOĞLU:"KARATAY",OBRUK:"KARATAY",ORTAKONAK:"KARATAY",OVAKAVAĞI:"KARATAY",SAKYATAN:"KARATAY",SARAÇOĞLU:"KARATAY",SARIYAKUP:"KARATAY",ŞATIR:"KARATAY",SEDİRLER:"KARATAY",SELİMSULTAN:"KARATAY",ŞEMSİTEBRİZİ:"KARATAY","SULTAN MESUD":"KARATAY",SÜRÜÇ:"KARATAY",TATLICAK:"KARATAY",ULUBATLIHASAN:"KARATAY",YAĞLIBAYAT:"KARATAY",YARMA:"KARATAY",YAVŞANKUYU:"KARATAY",YEDİLER:"KARATAY",YENİCE:"KARATAY",YENİKENT:"KARATAY",ZİNCİRLİ:"KARATAY",ALAKOVA:"MERAM",ALAVARDI:"MERAM","ALİ ULVİ KURUCU":"MERAM",ALPASLAN:"MERAM",AŞKAN:"MERAM","ATEŞBAZ VELİ":"MERAM",AYANBEY:"MERAM",AYDOĞDU:"MERAM",AYMANAS:"MERAM",BAHÇEŞEHİR:"MERAM",BAYAT:"MERAM",BORUKTOLU:"MERAM",BOTSA:"MERAM",BOYALI:"MERAM",ÇARIKLAR:"MERAM",ÇAYBAŞI:"MERAM",ÇAYIRBAĞI:"MERAM",ÇOMAKLAR:"MERAM",ÇOMAKLI:"MERAM",ÇUKURÇİMEN:"MERAM",DERE:"MERAM",DURUNDAY:"MERAM",ERENKAYA:"MERAM",EVLİYATEKKE:"MERAM",GÖDENE:"MERAM",HADİMİ:"MERAM",HARMANCIK:"MERAM",HASANŞEYH:"MERAM",HATIP:"MERAM",HATUNSARAY:"MERAM",HAVZAN:"MERAM",İKİPINAR:"MERAM",İNLİCE:"MERAM",KARAAĞAÇ:"MERAM",KARADİĞİN:"MERAM",KARADİĞİNDERESİ:"MERAM",KARAHÜYÜK:"MERAM",KAŞINHANI:"MERAM",KAVAK:"MERAM",KAYADİBİ:"MERAM",KAYALI:"MERAM",KAYIHÜYÜK:"MERAM",KİLİSTRA:"MERAM",KIZILÖREN:"MERAM",KONEVİ:"MERAM",KOVANAĞZI:"MERAM",KÖYCEĞİZ:"MERAM",KOZAĞAÇ:"MERAM",KUMRALI:"MERAM",LALEBAHÇE:"MERAM",MELİKŞAH:"MERAM","OSMAN GAZİ":"MERAM",PAMUKCU:"MERAM",PİREBİ:"MERAM",SADIKLAR:"MERAM",SAĞLIK:"MERAM",SAHİBATA:"MERAM",SARIKIZ:"MERAM",SEFAKÖY:"MERAM",ULUĞBEY:"MERAM",ULUIRMAK:"MERAM",UZUNHARMANLAR:"MERAM",YAKA:"MERAM",YATAĞAN:"MERAM",YAYLAPINAR:"MERAM",YENİBAHÇE:"MERAM",YENİŞEHİR:"MERAM",YEŞİLDERE:"MERAM",YEŞİLTEKKE:"MERAM",AKADEMİ:"SELÇUKLU",AKINCILAR:"SELÇUKLU",AKPINAR:"SELÇUKLU",AKŞEMSETTİN:"SELÇUKLU",ARDIÇLI:"SELÇUKLU",AŞAĞIPINARBAŞI:"SELÇUKLU",AYDINLIKEVLER:"SELÇUKLU",BAĞRIKURT:"SELÇUKLU",BAŞARAKAVAK:"SELÇUKLU",BEDİR:"SELÇUKLU",BEYHEKİM:"SELÇUKLU",BİÇER:"SELÇUKLU",BİLECİK:"SELÇUKLU",BİNKONUTLAR:"SELÇUKLU","BOSNA HERSEK":"SELÇUKLU",BUHARA:"SELÇUKLU",BÜYÜKKAYACIK:"SELÇUKLU",ÇALDERE:"SELÇUKLU",ÇALTI:"SELÇUKLU",ÇANDIR:"SELÇUKLU",CUMHURİYET:"SELÇUKLU",DAĞDERE:"SELÇUKLU",DOKUZ:"SELÇUKLU",DUMLUPINAR:"SELÇUKLU",EĞRİBAYAT:"SELÇUKLU",ERENKÖY:"SELÇUKLU",ESENLER:"SELÇUKLU",FATİH:"SELÇUKLU",FERHUNİYE:"SELÇUKLU",FERİTPAŞA:"SELÇUKLU",GÜVENÇ:"SELÇUKLU",HACIKAYMAK:"SELÇUKLU",HANAYBAŞI:"SELÇUKLU",HOCACİHAN:"SELÇUKLU",HOROZLUHAN:"SELÇUKLU","HÜSAMETTİN ÇELEBİ":"SELÇUKLU",İHSANİYE:"SELÇUKLU",IŞIKLAR:"SELÇUKLU",KALEKÖY:"SELÇUKLU",KARAÖMERLER:"SELÇUKLU",KERVAN:"SELÇUKLU",KILINÇARSLAN:"SELÇUKLU",KINIK:"SELÇUKLU",KIZILCAKUYU:"SELÇUKLU",KOSOVA:"SELÇUKLU",KÜÇÜKMUHSİNE:"SELÇUKLU",MALAZGİRT:"SELÇUKLU","MEHMET AKİF":"SELÇUKLU",MEYDANKÖY:"SELÇUKLU","MUSALLA BAĞLARI":"SELÇUKLU",NİŞANTAŞ:"SELÇUKLU",PARSANA:"SELÇUKLU",SAKARYA:"SELÇUKLU",SALAHATTİN:"SELÇUKLU",SANCAK:"SELÇUKLU",SARAYKÖY:"SELÇUKLU",SARICALAR:"SELÇUKLU",ŞEKER:"SELÇUKLU","SELAHADDİNİ EYYUBİ":"SELÇUKLU",SELÇUK:"SELÇUKLU","ŞEYH ŞAMİL":"SELÇUKLU",SİLLE:"SELÇUKLU","SİLLE AK":"SELÇUKLU",SIZMA:"SELÇUKLU",SULUTAS:"SELÇUKLU",TATKÖY:"SELÇUKLU",TEPEKENT:"SELÇUKLU",TÖMEK:"SELÇUKLU",ULUMUHSİNE:"SELÇUKLU",YAZIBELEN:"SELÇUKLU",YAZIR:"SELÇUKLU",YUKARIPINARBAŞI:"SELÇUKLU",AZİZİYE:"KARATAY",BAKIRTOLU:"KARATAY",BAŞAK:"KARATAY",BAŞGÖTÜREN:"KARATAY",BEŞAĞIL:"KARATAY",BÜYÜKBURNAK:"KARATAY",ÇATALHÜYÜK:"KARATAY",ÇENGİLTİ:"KARATAY",ÇİMENLİK:"KARATAY",DİVANLAR:"KARATAY",EMİRGAZİ:"KARATAY",ERENLER:"KARATAY",ERLER:"KARATAY",ESENTEPE:"KARATAY",FETİH:"KARATAY",FEVZİÇAKMAK:"KARATAY",GAZİOSMANPAŞA:"KARATAY",GÖÇÜ:"KARATAY",HACIVEYİSZADE:"KARATAY",HAMZAOĞLU:"KARATAY",HAYIROĞLU:"KARATAY",İPEKLER:"KARATAY",İŞGALAMAN:"KARATAY",İSMİL:"KARATAY",ACIDORT:"KARATAY",AĞSAKLI:"KARATAY",AKABE:"KARATAY",AKBAŞ:"KARATAY",AKÖRENKIŞLA:"KARATAY",ARAPLAR:"KARATAY"},bl={};for(let t in lg)bl[Il(t)]=lg[t];function _d(){if(!ce)return;const t=document.getElementById("mapIlce");if(!t||t.options.length>1)return;const e=new Set;Object.values(ce).forEach(r=>{let s=r.ilce;if(!s){const o=Il(r.adi);s=bl[o]||"Genel"}e.add(s)});const n=[...e].sort((r,s)=>r.localeCompare(s,"tr"));t.innerHTML='<option value="">İlçe Seçiniz...</option>',n.forEach(r=>{const s=document.createElement("option");s.value=r,s.textContent=r,t.appendChild(s)});const i=localStorage.getItem("kurye_last_ilce");i&&e.has(i)&&(t.value=i,window.loadMahallesByIlce())}window.loadMahallesByIlce=function(){const t=document.getElementById("mapIlce"),e=document.getElementById("mapMahalle"),n=document.getElementById("mapSokak"),i=document.getElementById("mapKapi"),r=t.value;r&&localStorage.setItem("kurye_last_ilce",r),n.innerHTML='<option value="">Önce Mahalle Seçin</option>',n.disabled=!0,i.innerHTML='<option value="">Önce Sokak Seçin</option>',i.disabled=!0;const s=document.getElementById("internalMapContainer");if(s&&s.classList.add("hidden"),!r||!ce){e.innerHTML='<option value="">Önce İlçe Seçin</option>';return}const o=Object.entries(ce).filter(([l,c])=>{let u=c.ilce;if(!u){const d=Il(c.adi);u=bl[d]||"Genel"}return u===r}).map(([l,c])=>({id:l,adi:c.adi})).sort((l,c)=>l.adi.localeCompare(c.adi,"tr"));e.innerHTML='<option value="">Mahalle Seçiniz...</option>',o.forEach(l=>{const c=document.createElement("option");c.value=l.id,c.textContent=l.adi,e.appendChild(c)});const a=localStorage.getItem("kurye_last_mahalle");if(a&&ce[a]){let l=ce[a].ilce;if(!l){const c=Il(ce[a].adi);l=bl[c]||"Genel"}l===r&&(e.value=a,Lh())}};function Lh(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak"),n=document.getElementById("mapKapi");if(t&&localStorage.setItem("kurye_last_mahalle",t),e.innerHTML='<option value="">Yükleniyor...</option>',e.disabled=!0,n.innerHTML='<option value="">Önce Sokak Seçin</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!ce||!ce[t]){e.innerHTML='<option value="">Önce Mahalle Seçin</option>';return}const i=ce[t].streets,r=Object.entries(i).map(([s,o])=>({id:s,adi:o.adi,tur:o.tur}));r.sort((s,o)=>s.adi.localeCompare(o.adi,"tr")),e.innerHTML='<option value="">Seçiniz...</option>',r.forEach(s=>{const o=document.createElement("option");o.value=s.id,o.textContent=s.adi+(s.tur?" ("+s.tur+")":""),e.appendChild(o)}),e.disabled=!1}function PE(){const t=document.getElementById("mapMahalle").value,e=document.getElementById("mapSokak").value,n=document.getElementById("mapKapi");if(n.innerHTML='<option value="">Yükleniyor...</option>',n.disabled=!0,document.getElementById("internalMapContainer").classList.add("hidden"),!t||!e||!ce||!ce[t]){n.innerHTML='<option value="">Önce Sokak Seçin</option>';return}const i=ce[t].streets[e];if(!i||!i.doors||i.doors.length===0){n.innerHTML='<option value="">Bu sokakta kapı bulunamadı</option>';return}const r=[...i.doors];r.sort((s,o)=>{const a=parseInt(s.no)||0,l=parseInt(o.no)||0;return a-l}),n.innerHTML='<option value="">Seçiniz...</option>',r.forEach(s=>{const o=document.createElement("option");o.value=JSON.stringify({lat:s.lat,lon:s.lon,no:s.no}),o.textContent="No: "+s.no,n.appendChild(o)}),n.disabled=!1}function LE(){const t=document.getElementById("mapKapi").value;if(!t){alert("Lütfen geçerli bir kapı numarası seçin.");return}(async()=>{try{const e=await it(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url),n=localStorage.getItem("firebase_uid"),i=await e.checkUserStatus(n);if(!i.allowed){alert("Erişim Reddedildi");return}const r=i.data;if(r.role!=="admin"&&(!r.allowedRegions||Object.keys(r.allowedRegions).length===0)){alert(`BÖLGE YETKİNİZ YOK
Lütfen yöneticinizden bölge tanımlatın.`);return}const s=await e.hasRemainingLimit(n);if(!s.allowed){alert(s.reason||"Arama limitiniz doldu.");return}await e.incrementLimitUsage();const o=JSON.parse(t);Sa=o,document.getElementById("internalMapContainer").classList.remove("hidden"),document.getElementById("googleMapsBtn").classList.remove("hidden"),setTimeout(()=>{Ft?(Ft.invalidateSize(),Ft.setView([o.lat,o.lon],18)):(Ft=L.map("internalMap").setView([o.lat,o.lon],18),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(Ft)),tu&&Ft.removeLayer(tu),tu=L.marker([o.lat,o.lon]).addTo(Ft).bindPopup(`<b>Kapı No: ${o.no}</b>`).openPopup()},100)}catch(e){console.error(e)}})()}function hL(){Sa?window.open(`https://www.google.com/maps/search/?api=1&query=${Sa.lat},${Sa.lon}`,"_blank"):alert("Önce konum seçmelisiniz.")}async function DE(){if(ce&&Object.keys(ce).length>0)return!0;try{const t=document.getElementById("updateStatus");ce||(ce=await(await it(()=>Promise.resolve().then(()=>tP),void 0,import.meta.url)).fetchLocalData(),ce&&(console.log("⚡ Offline veri anında hazır."),_d()));const e=await hE();if(e){ce=e,console.log("🔓 Güncel veri Firebase'den alındı.");const n=document.getElementById("mapIlce");n&&n.options.length<=1&&_d()}return t&&(t.style.display="none"),!0}catch(t){console.error("Erişim Hatası:",t),alert(`⛔ ERİŞİM ENGELLENDİ

Sebep: ${t.message}

Eğer giriş yapmadıysanız uygulamayı yeniden başlatıp giriş kodunu giriniz.`);const e=document.getElementById("updateStatus");return e&&(e.style.display="none"),!1}}function cg(){console.log("🛠 Enjektör Çalışıyor...");const t=document.getElementById("manualTurnoverInput");if(!t){console.error("❌ Hedef element (manualTurnoverInput) bulunamadı!");return}const e=t.closest(".px-5.pb-6");if(!e)return;const n=e.querySelector(".card.p-5.space-y-4.mt-4");n&&(console.log("✅ Eski kart bulundu, temizleniyor..."),n.innerHTML=`
            <div class="flex justify-between items-center border-b border-white/5 pb-3">
                <h2 class="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                    <i class="fa-solid fa-wallet text-indigo-500"></i> GİDER & KDV YÖNETİMİ
                </h2>
            </div>
            
            <div class="bg-indigo-500/5 rounded-2xl p-4 border border-indigo-500/10">
                <h3 class="text-[10px] text-indigo-400 font-bold uppercase mb-4 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> GİDER EKLE (% KDV DAHİL)
                </h3>
                <div class="space-y-3">
                    <input type="text" id="expName" class="w-full input-dark p-3 rounded-xl text-xs font-semibold" placeholder="Gider Adı (Örn: Ofis Malzemesi)">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="relative">
                            <input type="number" id="expAmount" class="w-full input-dark p-3 rounded-xl font-bold text-lg" placeholder="Tutar">
                            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-bold">₺</span>
                        </div>
                        <div class="relative">
                            <select id="expVatRate" class="w-full input-dark p-3 rounded-xl font-bold appearance-none">
                                <option value="20">%20 KDV</option>
                                <option value="10">%10 KDV</option>
                                <option value="1">%1 KDV</option>
                                <option value="18">%18 KDV</option>
                                <option value="0">%0 KDV</option>
                            </select>
                            <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-indigo-400 pointer-events-none"></i>
                        </div>
                    </div>
                    <button onclick="window.addExpenseItem()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black rounded-xl transition-all shadow-lg shadow-indigo-500/20 uppercase">LİSTEYE EKLE</button>
                </div>
                <div id="expenseListContainer" class="mt-4 space-y-2 max-h-[250px] overflow-y-auto pr-1"></div>
            </div>

            <div class="bg-emerald-500/5 rounded-2xl p-4 border border-emerald-500/10">
                <label class="text-[9px] text-gray-400 font-bold block mb-1.5 ml-1 uppercase tracking-widest">Toplam Yakıt (Tutar)</label>
                <input type="number" id="dailyFuel" class="w-full input-dark p-3 rounded-xl font-bold" placeholder="0" onkeyup="window.calculateProfit()">
            </div>
        `,window.renderExpenseList())}(async()=>{try{const t=await it(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url);t&&t.startBanListener&&t.startBanListener(()=>{alert(`⛔ HESABINIZ YASAKLANDI!
Uygulama kapatılıyor.`),window.location.reload()})}catch(t){console.warn("Ban listener init failed",t)}})();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>setTimeout(cg,800)):setTimeout(cg,800);function pL(){const[t,e]=Os.useState(null);Os.useEffect(()=>{try{iP(),nP(),rP()}catch(o){console.error("Init Error",o)}const r=async()=>{try{const o="yal42d-debug",a="kurye_pro",l="main",c=`https://raw.githubusercontent.com/${o}/${a}/${l}/updates/version.json?t=${Date.now()}`,u=await fetch(c,{cache:"no-store"});if(!u.ok)return;const d=await u.json(),f=parseInt(d.version||"0"),p=45,v=`https://raw.githubusercontent.com/${o}/${a}/${l}/updates/app_config.json?t=${Date.now()}`,y=await fetch(v,{cache:"no-store"});if(y.ok){const k=await y.json(),m=parseInt(k.force_update_min_version||k.min_version||"0");if(p<m){console.warn("BLOCKED: Your version is too old."),e({forced:!0,version:f,url:d.url,msg:k.welcome_message||"Zorunlu güncelleme gerekli."});return}}f>p&&e({forced:!1,version:f,url:d.url})}catch(o){console.warn("Update check failed",o)}};r();const s=setInterval(r,6e4);return()=>clearInterval(s)},[]);const n=async()=>{t&&await mf.open({url:t.url})};return me.jsxs(me.Fragment,{children:[me.jsx("div",{id:"app-root",style:{display:t&&t.forced?"none":"block"},dangerouslySetInnerHTML:{__html:lI}}),t&&me.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"#0f172a",color:"white",padding:"40px",zIndex:1e6,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:[me.jsx("div",{style:{fontSize:"80px",marginBottom:"20px"},children:t.forced?"🚫":"🎁"}),me.jsx("h1",{style:{fontSize:"24px",fontWeight:"900",marginBottom:"10px"},children:t.forced?"ZORUNLU GÜNCELLEME":"YENİ SÜRÜM MEVCUT"}),me.jsx("p",{style:{opacity:.7,marginBottom:"30px",maxWidth:"300px"},children:t.forced?t.msg:`Size daha iyi hizmet verebilmek için v${t.version} yayınlandı.`}),me.jsx("button",{onClick:n,style:{backgroundColor:"#6366f1",color:"white",border:"none",padding:"15px 40px",borderRadius:"15px",fontWeight:"bold",fontSize:"18px",cursor:"pointer",boxShadow:"0 10px 20px rgba(99,102,241,0.3)"},children:"HEMEN GÜNCELLE"}),!t.forced&&me.jsx("button",{onClick:()=>e(null),style:{background:"none",border:"none",color:"#94a3b8",marginTop:"20px",fontSize:"14px",textDecoration:"underline"},children:"Daha Sonra"})]})]})}class mL extends Eg.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("Uncaught error:",e,n),this.setState({errorInfo:n})}render(){return this.state.hasError?me.jsxs("div",{style:{padding:"20px",backgroundColor:"#991b1b",color:"white",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",fontFamily:"system-ui, -apple-system, sans-serif"},children:[me.jsx("h1",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"10px"},children:"Oops! Bir şeyler ters gitti."}),me.jsx("p",{style:{marginBottom:"20px"},children:"Uygulama beklenmedik bir hatayla karşılaştı."}),me.jsxs("div",{style:{backgroundColor:"rgba(0,0,0,0.3)",padding:"15px",borderRadius:"8px",textAlign:"left",maxWidth:"90%",overflow:"auto",marginBottom:"20px",fontSize:"12px",fontFamily:"monospace"},children:[me.jsx("strong",{style:{color:"#fca5a5"},children:this.state.error&&this.state.error.toString()}),me.jsx("br",{}),me.jsx("pre",{style:{margin:"10px 0 0 0",whiteSpace:"pre-wrap"},children:this.state.errorInfo&&this.state.errorInfo.componentStack})]}),me.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"10px 20px",border:"none",borderRadius:"6px",backgroundColor:"white",color:"#991b1b",fontWeight:"bold",cursor:"pointer",fontSize:"16px"},children:"Uygulamayı Yeniden Başlat"})]}):this.props.children}}const gL=document.getElementById("root"),vL=Iy(gL);vL.render(me.jsx(Eg.StrictMode,{children:me.jsx(mL,{children:me.jsx(pL,{})})}));export{h0 as A,Pk as B,HT as C,LT as D,di as E,Zt as F,en as G,jT as H,OT as I,w0 as J,Gt as K,Vk as L,td as M,M0 as N,As as O,ig as P,Mf as Q,IT as R,N0 as S,tn as T,Sy as W,xk as a,wk as b,bk as c,Qk as d,H0 as e,Rk as f,Y0 as g,Ht as h,Tk as i,qk as j,Ek as k,kT as l,kk as m,ng as n,zk as o,gk as p,_k as q,Jy as r,Nk as s,Sk as t,Ak as u,ST as v,vk as w,Ok as x,Mk as y,Dk as z};
