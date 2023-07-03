function lb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ub(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var h_={exports:{}},kd={},p_={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),cb=Symbol.for("react.portal"),db=Symbol.for("react.fragment"),fb=Symbol.for("react.strict_mode"),hb=Symbol.for("react.profiler"),pb=Symbol.for("react.provider"),mb=Symbol.for("react.context"),gb=Symbol.for("react.forward_ref"),yb=Symbol.for("react.suspense"),vb=Symbol.for("react.memo"),wb=Symbol.for("react.lazy"),Wy=Symbol.iterator;function _b(t){return t===null||typeof t!="object"?null:(t=Wy&&t[Wy]||t["@@iterator"],typeof t=="function"?t:null)}var m_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g_=Object.assign,y_={};function jo(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||m_}jo.prototype.isReactComponent={};jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v_(){}v_.prototype=jo.prototype;function $m(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||m_}var Fm=$m.prototype=new v_;Fm.constructor=$m;g_(Fm,jo.prototype);Fm.isPureReactComponent=!0;var qy=Array.isArray,w_=Object.prototype.hasOwnProperty,Bm={current:null},__={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)w_.call(e,r)&&!__.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pl,type:t,key:s,ref:o,props:i,_owner:Bm.current}}function Eb(t,e){return{$$typeof:Pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pl}function Sb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ky=/\/+/g;function Gf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sb(""+t.key):e.toString(36)}function Ju(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pl:case cb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gf(o,0):r,qy(i)?(n="",t!=null&&(n=t.replace(Ky,"$&/")+"/"),Ju(i,e,n,"",function(u){return u})):i!=null&&(Vm(i)&&(i=Eb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ky,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gf(s,a);o+=Ju(s,e,n,l,i)}else if(l=_b(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gf(s,a++),o+=Ju(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Su(t,e,n){if(t==null)return t;var r=[],i=0;return Ju(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Zu={transition:null},Cb={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Zu,ReactCurrentOwner:Bm};me.Children={map:Su,forEach:function(t,e,n){Su(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Su(t,function(){e++}),e},toArray:function(t){return Su(t,function(e){return e})||[]},only:function(t){if(!Vm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=jo;me.Fragment=db;me.Profiler=hb;me.PureComponent=$m;me.StrictMode=fb;me.Suspense=yb;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cb;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)w_.call(e,l)&&!__.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Pl,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:mb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pb,_context:t},t.Consumer=t};me.createElement=E_;me.createFactory=function(t){var e=E_.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:gb,render:t}};me.isValidElement=Vm;me.lazy=function(t){return{$$typeof:wb,_payload:{_status:-1,_result:t},_init:kb}};me.memo=function(t,e){return{$$typeof:vb,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Zu.transition;Zu.transition={};try{t()}finally{Zu.transition=e}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(t,e){return Qt.current.useCallback(t,e)};me.useContext=function(t){return Qt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};me.useEffect=function(t,e){return Qt.current.useEffect(t,e)};me.useId=function(){return Qt.current.useId()};me.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Qt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};me.useRef=function(t){return Qt.current.useRef(t)};me.useState=function(t){return Qt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Qt.current.useTransition()};me.version="18.2.0";p_.exports=me;var M=p_.exports;const Ie=jm(M),Ib=lb({__proto__:null,default:Ie},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb=M,Tb=Symbol.for("react.element"),xb=Symbol.for("react.fragment"),zb=Object.prototype.hasOwnProperty,Ab=bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nb={key:!0,ref:!0,__self:!0,__source:!0};function S_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zb.call(e,r)&&!Nb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Tb,type:t,key:s,ref:o,props:i,_owner:Ab.current}}kd.Fragment=xb;kd.jsx=S_;kd.jsxs=S_;h_.exports=kd;var I=h_.exports,ip={},k_={exports:{}},En={},C_={exports:{}},I_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,F){var Y=P.length;P.push(F);e:for(;0<Y;){var ae=Y-1>>>1,Se=P[ae];if(0<i(Se,F))P[ae]=F,P[Y]=Se,Y=ae;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var F=P[0],Y=P.pop();if(Y!==F){P[0]=Y;e:for(var ae=0,Se=P.length,Ht=Se>>>1;ae<Ht;){var Cn=2*(ae+1)-1,Zt=P[Cn],ht=Cn+1,Et=P[ht];if(0>i(Zt,Y))ht<Se&&0>i(Et,Zt)?(P[ae]=Et,P[ht]=Y,ae=ht):(P[ae]=Zt,P[Cn]=Y,ae=Cn);else if(ht<Se&&0>i(Et,Y))P[ae]=Et,P[ht]=Y,ae=ht;else break e}}return F}function i(P,F){var Y=P.sortIndex-F.sortIndex;return Y!==0?Y:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,m=null,g=3,y=!1,E=!1,v=!1,c=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=P)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function w(P){if(v=!1,p(P),!E)if(n(l)!==null)E=!0,q(_);else{var F=n(u);F!==null&&Q(w,F.startTime-P)}}function _(P,F){E=!1,v&&(v=!1,f(b),b=-1),y=!0;var Y=g;try{for(p(F),m=n(l);m!==null&&(!(m.expirationTime>F)||P&&!O());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,g=m.priorityLevel;var Se=ae(m.expirationTime<=F);F=t.unstable_now(),typeof Se=="function"?m.callback=Se:m===n(l)&&r(l),p(F)}else r(l);m=n(l)}if(m!==null)var Ht=!0;else{var Cn=n(u);Cn!==null&&Q(w,Cn.startTime-F),Ht=!1}return Ht}finally{m=null,g=Y,y=!1}}var S=!1,C=null,b=-1,x=5,T=-1;function O(){return!(t.unstable_now()-T<x)}function N(){if(C!==null){var P=t.unstable_now();T=P;var F=!0;try{F=C(!0,P)}finally{F?D():(S=!1,C=null)}}else S=!1}var D;if(typeof h=="function")D=function(){h(N)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,L=V.port2;V.port1.onmessage=N,D=function(){L.postMessage(null)}}else D=function(){c(N,0)};function q(P){C=P,S||(S=!0,D())}function Q(P,F){b=c(function(){P(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){E||y||(E=!0,q(_))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var Y=g;g=F;try{return P()}finally{g=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=g;g=P;try{return F()}finally{g=Y}},t.unstable_scheduleCallback=function(P,F,Y){var ae=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,P={id:d++,callback:F,priorityLevel:P,startTime:Y,expirationTime:Se,sortIndex:-1},Y>ae?(P.sortIndex=Y,e(u,P),n(l)===null&&P===n(u)&&(v?(f(b),b=-1):v=!0,Q(w,Y-ae))):(P.sortIndex=Se,e(l,P),E||y||(E=!0,q(_))),P},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(P){var F=g;return function(){var Y=g;g=F;try{return P.apply(this,arguments)}finally{g=Y}}}})(I_);C_.exports=I_;var Rb=C_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_=M,wn=Rb;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T_=new Set,Xa={};function Es(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(Xa[t]=e,t=0;t<e.length;t++)T_.add(e[t])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sp=Object.prototype.hasOwnProperty,Pb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gy={},Yy={};function Ob(t){return sp.call(Yy,t)?!0:sp.call(Gy,t)?!1:Pb.test(t)?Yy[t]=!0:(Gy[t]=!0,!1)}function Ub(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Db(t,e,n,r){if(e===null||typeof e>"u"||Ub(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hm=/[\-:]([a-z])/g;function Wm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hm,Wm);zt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hm,Wm);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hm,Wm);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qm(t,e,n,r){var i=zt.hasOwnProperty(e)?zt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Db(e,n,i,r)&&(n=null),r||i===null?Ob(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wr=b_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ku=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Km=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),ap=Symbol.for("react.suspense"),lp=Symbol.for("react.suspense_list"),Ym=Symbol.for("react.memo"),ei=Symbol.for("react.lazy"),A_=Symbol.for("react.offscreen"),Xy=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=Xy&&t[Xy]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,Yf;function Ea(t){if(Yf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yf=e&&e[1]||""}return`
`+Yf+t}var Xf=!1;function Qf(t,e){if(!t||Xf)return"";Xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function Mb(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=Qf(t.type,!1),t;case 11:return t=Qf(t.type.render,!1),t;case 1:return t=Qf(t.type,!0),t;default:return""}}function up(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Vs:return"Portal";case op:return"Profiler";case Km:return"StrictMode";case ap:return"Suspense";case lp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z_:return(t.displayName||"Context")+".Consumer";case x_:return(t._context.displayName||"Context")+".Provider";case Gm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ym:return e=t.displayName||null,e!==null?e:up(t.type)||"Memo";case ei:e=t._payload,t=t._init;try{return up(t(e))}catch{}}return null}function Lb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return up(e);case 8:return e===Km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jb(t){var e=N_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cu(t){t._valueTracker||(t._valueTracker=jb(t))}function R_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cp(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P_(t,e){e=e.checked,e!=null&&qm(t,"checked",e,!1)}function dp(t,e){P_(t,e);var n=bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fp(t,e.type,n):e.hasOwnProperty("defaultValue")&&fp(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fp(t,e,n){(e!=="number"||wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function io(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Sa(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bi(n)}}function O_(t,e){var n=bi(e.value),r=bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function U_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?U_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Iu,D_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Iu=Iu||document.createElement("div"),Iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$b=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){$b.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function M_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function L_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Fb=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mp(t,e){if(e){if(Fb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function gp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yp=null;function Xm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vp=null,so=null,oo=null;function tv(t){if(t=Dl(t)){if(typeof vp!="function")throw Error(j(280));var e=t.stateNode;e&&(e=xd(e),vp(t.stateNode,t.type,e))}}function j_(t){so?oo?oo.push(t):oo=[t]:so=t}function $_(){if(so){var t=so,e=oo;if(oo=so=null,tv(t),e)for(t=0;t<e.length;t++)tv(e[t])}}function F_(t,e){return t(e)}function B_(){}var Jf=!1;function V_(t,e,n){if(Jf)return t(e,n);Jf=!0;try{return F_(t,e,n)}finally{Jf=!1,(so!==null||oo!==null)&&(B_(),$_())}}function Ja(t,e){var n=t.stateNode;if(n===null)return null;var r=xd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var wp=!1;if(Or)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){wp=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{wp=!1}function Bb(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Oa=!1,_c=null,Ec=!1,_p=null,Vb={onError:function(t){Oa=!0,_c=t}};function Hb(t,e,n,r,i,s,o,a,l){Oa=!1,_c=null,Bb.apply(Vb,arguments)}function Wb(t,e,n,r,i,s,o,a,l){if(Hb.apply(this,arguments),Oa){if(Oa){var u=_c;Oa=!1,_c=null}else throw Error(j(198));Ec||(Ec=!0,_p=u)}}function Ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nv(t){if(Ss(t)!==t)throw Error(j(188))}function qb(t){var e=t.alternate;if(!e){if(e=Ss(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nv(i),t;if(s===r)return nv(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function W_(t){return t=qb(t),t!==null?q_(t):null}function q_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q_(t);if(e!==null)return e;t=t.sibling}return null}var K_=wn.unstable_scheduleCallback,rv=wn.unstable_cancelCallback,Kb=wn.unstable_shouldYield,Gb=wn.unstable_requestPaint,tt=wn.unstable_now,Yb=wn.unstable_getCurrentPriorityLevel,Qm=wn.unstable_ImmediatePriority,G_=wn.unstable_UserBlockingPriority,Sc=wn.unstable_NormalPriority,Xb=wn.unstable_LowPriority,Y_=wn.unstable_IdlePriority,Cd=null,lr=null;function Qb(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(Cd,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:eT,Jb=Math.log,Zb=Math.LN2;function eT(t){return t>>>=0,t===0?32:31-(Jb(t)/Zb|0)|0}var bu=64,Tu=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ka(a):(s&=o,s!==0&&(r=ka(s)))}else o=n&~i,o!==0?r=ka(o):s!==0&&(r=ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bn(e),i=1<<n,r|=t[n],e&=~i;return r}function tT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=tT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ep(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X_(){var t=bu;return bu<<=1,!(bu&4194240)&&(bu=64),t}function Zf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function rT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function Q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J_,Zm,Z_,eE,tE,Sp=!1,xu=[],hi=null,pi=null,mi=null,Za=new Map,el=new Map,ni=[],iT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iv(t,e){switch(t){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(e.pointerId)}}function ca(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Dl(e),e!==null&&Zm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sT(t,e,n,r,i){switch(e){case"focusin":return hi=ca(hi,t,e,n,r,i),!0;case"dragenter":return pi=ca(pi,t,e,n,r,i),!0;case"mouseover":return mi=ca(mi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Za.set(s,ca(Za.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,el.set(s,ca(el.get(s)||null,t,e,n,r,i)),!0}return!1}function nE(t){var e=Gi(t.target);if(e!==null){var n=Ss(e);if(n!==null){if(e=n.tag,e===13){if(e=H_(n),e!==null){t.blockedOn=e,tE(t.priority,function(){Z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yp=r,n.target.dispatchEvent(r),yp=null}else return e=Dl(n),e!==null&&Zm(e),t.blockedOn=n,!1;e.shift()}return!0}function sv(t,e,n){ec(t)&&n.delete(e)}function oT(){Sp=!1,hi!==null&&ec(hi)&&(hi=null),pi!==null&&ec(pi)&&(pi=null),mi!==null&&ec(mi)&&(mi=null),Za.forEach(sv),el.forEach(sv)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Sp||(Sp=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,oT)))}function tl(t){function e(i){return da(i,t)}if(0<xu.length){da(xu[0],t);for(var n=1;n<xu.length;n++){var r=xu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hi!==null&&da(hi,t),pi!==null&&da(pi,t),mi!==null&&da(mi,t),Za.forEach(e),el.forEach(e),n=0;n<ni.length;n++)r=ni[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ni.length&&(n=ni[0],n.blockedOn===null);)nE(n),n.blockedOn===null&&ni.shift()}var ao=Wr.ReactCurrentBatchConfig,Cc=!0;function aT(t,e,n,r){var i=xe,s=ao.transition;ao.transition=null;try{xe=1,eg(t,e,n,r)}finally{xe=i,ao.transition=s}}function lT(t,e,n,r){var i=xe,s=ao.transition;ao.transition=null;try{xe=4,eg(t,e,n,r)}finally{xe=i,ao.transition=s}}function eg(t,e,n,r){if(Cc){var i=kp(t,e,n,r);if(i===null)uh(t,e,r,Ic,n),iv(t,r);else if(sT(i,t,e,n,r))r.stopPropagation();else if(iv(t,r),e&4&&-1<iT.indexOf(t)){for(;i!==null;){var s=Dl(i);if(s!==null&&J_(s),s=kp(t,e,n,r),s===null&&uh(t,e,r,Ic,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uh(t,e,r,null,n)}}var Ic=null;function kp(t,e,n,r){if(Ic=null,t=Xm(r),t=Gi(t),t!==null)if(e=Ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function rE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yb()){case Qm:return 1;case G_:return 4;case Sc:case Xb:return 16;case Y_:return 536870912;default:return 16}default:return 16}}var li=null,tg=null,tc=null;function iE(){if(tc)return tc;var t,e=tg,n=e.length,r,i="value"in li?li.value:li.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tc=i.slice(t,1<r?1-r:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zu(){return!0}function ov(){return!1}function Sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zu:ov,this.isPropagationStopped=ov,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ng=Sn($o),Ul=qe({},$o,{view:0,detail:0}),uT=Sn(Ul),eh,th,fa,Id=qe({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(eh=t.screenX-fa.screenX,th=t.screenY-fa.screenY):th=eh=0,fa=t),eh)},movementY:function(t){return"movementY"in t?t.movementY:th}}),av=Sn(Id),cT=qe({},Id,{dataTransfer:0}),dT=Sn(cT),fT=qe({},Ul,{relatedTarget:0}),nh=Sn(fT),hT=qe({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),pT=Sn(hT),mT=qe({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gT=Sn(mT),yT=qe({},$o,{data:0}),lv=Sn(yT),vT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ET(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_T[t])?!!e[t]:!1}function rg(){return ET}var ST=qe({},Ul,{key:function(t){if(t.key){var e=vT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rg,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kT=Sn(ST),CT=qe({},Id,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uv=Sn(CT),IT=qe({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rg}),bT=Sn(IT),TT=qe({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),xT=Sn(TT),zT=qe({},Id,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AT=Sn(zT),NT=[9,13,27,32],ig=Or&&"CompositionEvent"in window,Ua=null;Or&&"documentMode"in document&&(Ua=document.documentMode);var RT=Or&&"TextEvent"in window&&!Ua,sE=Or&&(!ig||Ua&&8<Ua&&11>=Ua),cv=String.fromCharCode(32),dv=!1;function oE(t,e){switch(t){case"keyup":return NT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function PT(t,e){switch(t){case"compositionend":return aE(e);case"keypress":return e.which!==32?null:(dv=!0,cv);case"textInput":return t=e.data,t===cv&&dv?null:t;default:return null}}function OT(t,e){if(Ws)return t==="compositionend"||!ig&&oE(t,e)?(t=iE(),tc=tg=li=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sE&&e.locale!=="ko"?null:e.data;default:return null}}var UT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UT[t.type]:e==="textarea"}function lE(t,e,n,r){j_(r),e=bc(e,"onChange"),0<e.length&&(n=new ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Da=null,nl=null;function DT(t){wE(t,0)}function bd(t){var e=Gs(t);if(R_(e))return t}function MT(t,e){if(t==="change")return e}var uE=!1;if(Or){var rh;if(Or){var ih="oninput"in document;if(!ih){var hv=document.createElement("div");hv.setAttribute("oninput","return;"),ih=typeof hv.oninput=="function"}rh=ih}else rh=!1;uE=rh&&(!document.documentMode||9<document.documentMode)}function pv(){Da&&(Da.detachEvent("onpropertychange",cE),nl=Da=null)}function cE(t){if(t.propertyName==="value"&&bd(nl)){var e=[];lE(e,nl,t,Xm(t)),V_(DT,e)}}function LT(t,e,n){t==="focusin"?(pv(),Da=e,nl=n,Da.attachEvent("onpropertychange",cE)):t==="focusout"&&pv()}function jT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bd(nl)}function $T(t,e){if(t==="click")return bd(e)}function FT(t,e){if(t==="input"||t==="change")return bd(e)}function BT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:BT;function rl(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sp.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gv(t,e){var n=mv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mv(n)}}function dE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fE(){for(var t=window,e=wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wc(t.document)}return e}function sg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VT(t){var e=fE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dE(n.ownerDocument.documentElement,n)){if(r!==null&&sg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gv(n,s);var o=gv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HT=Or&&"documentMode"in document&&11>=document.documentMode,qs=null,Cp=null,Ma=null,Ip=!1;function yv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ip||qs==null||qs!==wc(r)||(r=qs,"selectionStart"in r&&sg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ma&&rl(Ma,r)||(Ma=r,r=bc(Cp,"onSelect"),0<r.length&&(e=new ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function Au(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:Au("Animation","AnimationEnd"),animationiteration:Au("Animation","AnimationIteration"),animationstart:Au("Animation","AnimationStart"),transitionend:Au("Transition","TransitionEnd")},sh={},hE={};Or&&(hE=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Td(t){if(sh[t])return sh[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hE)return sh[t]=e[n];return t}var pE=Td("animationend"),mE=Td("animationiteration"),gE=Td("animationstart"),yE=Td("transitionend"),vE=new Map,vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(t,e){vE.set(t,e),Es(e,[t])}for(var oh=0;oh<vv.length;oh++){var ah=vv[oh],WT=ah.toLowerCase(),qT=ah[0].toUpperCase()+ah.slice(1);Pi(WT,"on"+qT)}Pi(pE,"onAnimationEnd");Pi(mE,"onAnimationIteration");Pi(gE,"onAnimationStart");Pi("dblclick","onDoubleClick");Pi("focusin","onFocus");Pi("focusout","onBlur");Pi(yE,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function wv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Wb(r,e,void 0,t),t.currentTarget=null}function wE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wv(i,a,u),s=l}}}if(Ec)throw t=_p,Ec=!1,_p=null,t}function De(t,e){var n=e[Ap];n===void 0&&(n=e[Ap]=new Set);var r=t+"__bubble";n.has(r)||(_E(e,t,2,!1),n.add(r))}function lh(t,e,n){var r=0;e&&(r|=4),_E(n,t,r,e)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function il(t){if(!t[Nu]){t[Nu]=!0,T_.forEach(function(n){n!=="selectionchange"&&(KT.has(n)||lh(n,!1,t),lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nu]||(e[Nu]=!0,lh("selectionchange",!1,e))}}function _E(t,e,n,r){switch(rE(e)){case 1:var i=aT;break;case 4:i=lT;break;default:i=eg}n=i.bind(null,e,n,t),i=void 0,!wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}V_(function(){var u=s,d=Xm(n),m=[];e:{var g=vE.get(t);if(g!==void 0){var y=ng,E=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":y=kT;break;case"focusin":E="focus",y=nh;break;case"focusout":E="blur",y=nh;break;case"beforeblur":case"afterblur":y=nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=dT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=bT;break;case pE:case mE:case gE:y=pT;break;case yE:y=xT;break;case"scroll":y=uT;break;case"wheel":y=AT;break;case"copy":case"cut":case"paste":y=gT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=uv}var v=(e&4)!==0,c=!v&&t==="scroll",f=v?g!==null?g+"Capture":null:g;v=[];for(var h=u,p;h!==null;){p=h;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Ja(h,f),w!=null&&v.push(sl(h,w,p)))),c)break;h=h.return}0<v.length&&(g=new y(g,E,null,n,d),m.push({event:g,listeners:v}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==yp&&(E=n.relatedTarget||n.fromElement)&&(Gi(E)||E[Ur]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(E=n.relatedTarget||n.toElement,y=u,E=E?Gi(E):null,E!==null&&(c=Ss(E),E!==c||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=u),y!==E)){if(v=av,w="onMouseLeave",f="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=uv,w="onPointerLeave",f="onPointerEnter",h="pointer"),c=y==null?g:Gs(y),p=E==null?g:Gs(E),g=new v(w,h+"leave",y,n,d),g.target=c,g.relatedTarget=p,w=null,Gi(d)===u&&(v=new v(f,h+"enter",E,n,d),v.target=p,v.relatedTarget=c,w=v),c=w,y&&E)t:{for(v=y,f=E,h=0,p=v;p;p=Ls(p))h++;for(p=0,w=f;w;w=Ls(w))p++;for(;0<h-p;)v=Ls(v),h--;for(;0<p-h;)f=Ls(f),p--;for(;h--;){if(v===f||f!==null&&v===f.alternate)break t;v=Ls(v),f=Ls(f)}v=null}else v=null;y!==null&&_v(m,g,y,v,!1),E!==null&&c!==null&&_v(m,c,E,v,!0)}}e:{if(g=u?Gs(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var _=MT;else if(fv(g))if(uE)_=FT;else{_=jT;var S=LT}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=$T);if(_&&(_=_(t,u))){lE(m,_,n,d);break e}S&&S(t,g,u),t==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&fp(g,"number",g.value)}switch(S=u?Gs(u):window,t){case"focusin":(fv(S)||S.contentEditable==="true")&&(qs=S,Cp=u,Ma=null);break;case"focusout":Ma=Cp=qs=null;break;case"mousedown":Ip=!0;break;case"contextmenu":case"mouseup":case"dragend":Ip=!1,yv(m,n,d);break;case"selectionchange":if(HT)break;case"keydown":case"keyup":yv(m,n,d)}var C;if(ig)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ws?oE(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(sE&&n.locale!=="ko"&&(Ws||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ws&&(C=iE()):(li=d,tg="value"in li?li.value:li.textContent,Ws=!0)),S=bc(u,b),0<S.length&&(b=new lv(b,t,null,n,d),m.push({event:b,listeners:S}),C?b.data=C:(C=aE(n),C!==null&&(b.data=C)))),(C=RT?PT(t,n):OT(t,n))&&(u=bc(u,"onBeforeInput"),0<u.length&&(d=new lv("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=C))}wE(m,e)})}function sl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ja(t,n),s!=null&&r.unshift(sl(t,s,i)),s=Ja(t,e),s!=null&&r.push(sl(t,s,i))),t=t.return}return r}function Ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _v(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ja(n,s),l!=null&&o.unshift(sl(n,l,a))):i||(l=Ja(n,s),l!=null&&o.push(sl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GT=/\r\n?/g,YT=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(GT,`
`).replace(YT,"")}function Ru(t,e,n){if(e=Ev(e),Ev(t)!==e&&n)throw Error(j(425))}function Tc(){}var bp=null,Tp=null;function xp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zp=typeof setTimeout=="function"?setTimeout:void 0,XT=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,QT=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(t){return Sv.resolve(null).then(t).catch(JT)}:zp;function JT(t){setTimeout(function(){throw t})}function ch(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tl(e)}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),nr="__reactFiber$"+Fo,ol="__reactProps$"+Fo,Ur="__reactContainer$"+Fo,Ap="__reactEvents$"+Fo,ZT="__reactListeners$"+Fo,ex="__reactHandles$"+Fo;function Gi(t){var e=t[nr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[nr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kv(t);t!==null;){if(n=t[nr])return n;t=kv(t)}return e}t=n,n=t.parentNode}return null}function Dl(t){return t=t[nr]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function xd(t){return t[ol]||null}var Np=[],Ys=-1;function Oi(t){return{current:t}}function $e(t){0>Ys||(t.current=Np[Ys],Np[Ys]=null,Ys--)}function Pe(t,e){Ys++,Np[Ys]=t.current,t.current=e}var Ti={},Ft=Oi(Ti),ln=Oi(!1),as=Ti;function _o(t,e){var n=t.type.contextTypes;if(!n)return Ti;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function un(t){return t=t.childContextTypes,t!=null}function xc(){$e(ln),$e(Ft)}function Cv(t,e,n){if(Ft.current!==Ti)throw Error(j(168));Pe(Ft,e),Pe(ln,n)}function EE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,Lb(t)||"Unknown",i));return qe({},n,r)}function zc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ti,as=Ft.current,Pe(Ft,t),Pe(ln,ln.current),!0}function Iv(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=EE(t,e,as),r.__reactInternalMemoizedMergedChildContext=t,$e(ln),$e(Ft),Pe(Ft,t)):$e(ln),Pe(ln,n)}var Ir=null,zd=!1,dh=!1;function SE(t){Ir===null?Ir=[t]:Ir.push(t)}function tx(t){zd=!0,SE(t)}function Ui(){if(!dh&&Ir!==null){dh=!0;var t=0,e=xe;try{var n=Ir;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ir=null,zd=!1}catch(i){throw Ir!==null&&(Ir=Ir.slice(t+1)),K_(Qm,Ui),i}finally{xe=e,dh=!1}}return null}var Xs=[],Qs=0,Ac=null,Nc=0,Tn=[],xn=0,ls=null,Tr=1,xr="";function Wi(t,e){Xs[Qs++]=Nc,Xs[Qs++]=Ac,Ac=t,Nc=e}function kE(t,e,n){Tn[xn++]=Tr,Tn[xn++]=xr,Tn[xn++]=ls,ls=t;var r=Tr;t=xr;var i=32-Bn(r)-1;r&=~(1<<i),n+=1;var s=32-Bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tr=1<<32-Bn(e)+i|n<<i|r,xr=s+t}else Tr=1<<s|n<<i|r,xr=t}function og(t){t.return!==null&&(Wi(t,1),kE(t,1,0))}function ag(t){for(;t===Ac;)Ac=Xs[--Qs],Xs[Qs]=null,Nc=Xs[--Qs],Xs[Qs]=null;for(;t===ls;)ls=Tn[--xn],Tn[xn]=null,xr=Tn[--xn],Tn[xn]=null,Tr=Tn[--xn],Tn[xn]=null}var vn=null,mn=null,Be=!1,$n=null;function CE(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,mn=gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:Tr,overflow:xr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,mn=null,!0):!1;default:return!1}}function Rp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pp(t){if(Be){var e=mn;if(e){var n=e;if(!bv(t,e)){if(Rp(t))throw Error(j(418));e=gi(n.nextSibling);var r=vn;e&&bv(t,e)?CE(r,n):(t.flags=t.flags&-4097|2,Be=!1,vn=t)}}else{if(Rp(t))throw Error(j(418));t.flags=t.flags&-4097|2,Be=!1,vn=t}}}function Tv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Pu(t){if(t!==vn)return!1;if(!Be)return Tv(t),Be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xp(t.type,t.memoizedProps)),e&&(e=mn)){if(Rp(t))throw IE(),Error(j(418));for(;e;)CE(t,e),e=gi(e.nextSibling)}if(Tv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=vn?gi(t.stateNode.nextSibling):null;return!0}function IE(){for(var t=mn;t;)t=gi(t.nextSibling)}function Eo(){mn=vn=null,Be=!1}function lg(t){$n===null?$n=[t]:$n.push(t)}var nx=Wr.ReactCurrentBatchConfig;function Ln(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Rc=Oi(null),Pc=null,Js=null,ug=null;function cg(){ug=Js=Pc=null}function dg(t){var e=Rc.current;$e(Rc),t._currentValue=e}function Op(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Pc=t,ug=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(ug!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Pc===null)throw Error(j(308));Js=t,Pc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Yi=null;function fg(t){Yi===null?Yi=[t]:Yi.push(t)}function bE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dr(t,r)}function Dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ti=!1;function hg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dr(t,n)}return i=r.interleaved,i===null?(e.next=e,fg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dr(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jm(t,n)}}function xv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Oc(t,e,n,r){var i=t.updateQueue;ti=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var m=i.baseState;o=0,d=u=l=null,a=s;do{var g=a.lane,y=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,v=a;switch(g=e,y=n,v.tag){case 1:if(E=v.payload,typeof E=="function"){m=E.call(y,m,g);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=v.payload,g=typeof E=="function"?E.call(y,m,g):E,g==null)break e;m=qe({},m,g);break e;case 2:ti=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=m):d=d.next=y,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=m}}function zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var xE=new b_.Component().refs;function Up(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ad={isMounted:function(t){return(t=t._reactInternals)?Ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=wi(t),s=Rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(Vn(e,t,i,r),rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xt(),i=wi(t),s=Rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(Vn(e,t,i,r),rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),r=wi(t),i=Rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=yi(t,i,r),e!==null&&(Vn(e,t,r,n),rc(e,t,r))}};function Av(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!rl(n,r)||!rl(i,s):!0}function zE(t,e,n){var r=!1,i=Ti,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=un(e)?as:Ft.current,r=e.contextTypes,s=(r=r!=null)?_o(t,i):Ti),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ad,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ad.enqueueReplaceState(e,e.state,null)}function Dp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=xE,hg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=un(e)?as:Ft.current,i.context=_o(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Up(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ad.enqueueReplaceState(i,i.state,null),Oc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===xE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ou(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rv(t){var e=t._init;return e(t._payload)}function AE(t){function e(f,h){if(t){var p=f.deletions;p===null?(f.deletions=[h],f.flags|=16):p.push(h)}}function n(f,h){if(!t)return null;for(;h!==null;)e(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=_i(f,h),f.index=0,f.sibling=null,f}function s(f,h,p){return f.index=p,t?(p=f.alternate,p!==null?(p=p.index,p<h?(f.flags|=2,h):p):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,h,p,w){return h===null||h.tag!==6?(h=vh(p,f.mode,w),h.return=f,h):(h=i(h,p),h.return=f,h)}function l(f,h,p,w){var _=p.type;return _===Hs?d(f,h,p.props.children,w,p.key):h!==null&&(h.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ei&&Rv(_)===h.type)?(w=i(h,p.props),w.ref=ha(f,h,p),w.return=f,w):(w=uc(p.type,p.key,p.props,null,f.mode,w),w.ref=ha(f,h,p),w.return=f,w)}function u(f,h,p,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=wh(p,f.mode,w),h.return=f,h):(h=i(h,p.children||[]),h.return=f,h)}function d(f,h,p,w,_){return h===null||h.tag!==7?(h=rs(p,f.mode,w,_),h.return=f,h):(h=i(h,p),h.return=f,h)}function m(f,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=vh(""+h,f.mode,p),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ku:return p=uc(h.type,h.key,h.props,null,f.mode,p),p.ref=ha(f,null,h),p.return=f,p;case Vs:return h=wh(h,f.mode,p),h.return=f,h;case ei:var w=h._init;return m(f,w(h._payload),p)}if(Sa(h)||la(h))return h=rs(h,f.mode,p,null),h.return=f,h;Ou(f,h)}return null}function g(f,h,p,w){var _=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return _!==null?null:a(f,h,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ku:return p.key===_?l(f,h,p,w):null;case Vs:return p.key===_?u(f,h,p,w):null;case ei:return _=p._init,g(f,h,_(p._payload),w)}if(Sa(p)||la(p))return _!==null?null:d(f,h,p,w,null);Ou(f,p)}return null}function y(f,h,p,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(h,f,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ku:return f=f.get(w.key===null?p:w.key)||null,l(h,f,w,_);case Vs:return f=f.get(w.key===null?p:w.key)||null,u(h,f,w,_);case ei:var S=w._init;return y(f,h,p,S(w._payload),_)}if(Sa(w)||la(w))return f=f.get(p)||null,d(h,f,w,_,null);Ou(h,w)}return null}function E(f,h,p,w){for(var _=null,S=null,C=h,b=h=0,x=null;C!==null&&b<p.length;b++){C.index>b?(x=C,C=null):x=C.sibling;var T=g(f,C,p[b],w);if(T===null){C===null&&(C=x);break}t&&C&&T.alternate===null&&e(f,C),h=s(T,h,b),S===null?_=T:S.sibling=T,S=T,C=x}if(b===p.length)return n(f,C),Be&&Wi(f,b),_;if(C===null){for(;b<p.length;b++)C=m(f,p[b],w),C!==null&&(h=s(C,h,b),S===null?_=C:S.sibling=C,S=C);return Be&&Wi(f,b),_}for(C=r(f,C);b<p.length;b++)x=y(C,f,b,p[b],w),x!==null&&(t&&x.alternate!==null&&C.delete(x.key===null?b:x.key),h=s(x,h,b),S===null?_=x:S.sibling=x,S=x);return t&&C.forEach(function(O){return e(f,O)}),Be&&Wi(f,b),_}function v(f,h,p,w){var _=la(p);if(typeof _!="function")throw Error(j(150));if(p=_.call(p),p==null)throw Error(j(151));for(var S=_=null,C=h,b=h=0,x=null,T=p.next();C!==null&&!T.done;b++,T=p.next()){C.index>b?(x=C,C=null):x=C.sibling;var O=g(f,C,T.value,w);if(O===null){C===null&&(C=x);break}t&&C&&O.alternate===null&&e(f,C),h=s(O,h,b),S===null?_=O:S.sibling=O,S=O,C=x}if(T.done)return n(f,C),Be&&Wi(f,b),_;if(C===null){for(;!T.done;b++,T=p.next())T=m(f,T.value,w),T!==null&&(h=s(T,h,b),S===null?_=T:S.sibling=T,S=T);return Be&&Wi(f,b),_}for(C=r(f,C);!T.done;b++,T=p.next())T=y(C,f,b,T.value,w),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?b:T.key),h=s(T,h,b),S===null?_=T:S.sibling=T,S=T);return t&&C.forEach(function(N){return e(f,N)}),Be&&Wi(f,b),_}function c(f,h,p,w){if(typeof p=="object"&&p!==null&&p.type===Hs&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ku:e:{for(var _=p.key,S=h;S!==null;){if(S.key===_){if(_=p.type,_===Hs){if(S.tag===7){n(f,S.sibling),h=i(S,p.props.children),h.return=f,f=h;break e}}else if(S.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ei&&Rv(_)===S.type){n(f,S.sibling),h=i(S,p.props),h.ref=ha(f,S,p),h.return=f,f=h;break e}n(f,S);break}else e(f,S);S=S.sibling}p.type===Hs?(h=rs(p.props.children,f.mode,w,p.key),h.return=f,f=h):(w=uc(p.type,p.key,p.props,null,f.mode,w),w.ref=ha(f,h,p),w.return=f,f=w)}return o(f);case Vs:e:{for(S=p.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(f,h.sibling),h=i(h,p.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else e(f,h);h=h.sibling}h=wh(p,f.mode,w),h.return=f,f=h}return o(f);case ei:return S=p._init,c(f,h,S(p._payload),w)}if(Sa(p))return E(f,h,p,w);if(la(p))return v(f,h,p,w);Ou(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,p),h.return=f,f=h):(n(f,h),h=vh(p,f.mode,w),h.return=f,f=h),o(f)):n(f,h)}return c}var So=AE(!0),NE=AE(!1),Ml={},ur=Oi(Ml),al=Oi(Ml),ll=Oi(Ml);function Xi(t){if(t===Ml)throw Error(j(174));return t}function pg(t,e){switch(Pe(ll,e),Pe(al,t),Pe(ur,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pp(e,t)}$e(ur),Pe(ur,e)}function ko(){$e(ur),$e(al),$e(ll)}function RE(t){Xi(ll.current);var e=Xi(ur.current),n=pp(e,t.type);e!==n&&(Pe(al,t),Pe(ur,n))}function mg(t){al.current===t&&($e(ur),$e(al))}var He=Oi(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fh=[];function gg(){for(var t=0;t<fh.length;t++)fh[t]._workInProgressVersionPrimary=null;fh.length=0}var ic=Wr.ReactCurrentDispatcher,hh=Wr.ReactCurrentBatchConfig,us=0,We=null,ut=null,mt=null,Dc=!1,La=!1,ul=0,rx=0;function Nt(){throw Error(j(321))}function yg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function vg(t,e,n,r,i,s){if(us=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?ax:lx,t=n(r,i),La){s=0;do{if(La=!1,ul=0,25<=s)throw Error(j(301));s+=1,mt=ut=null,e.updateQueue=null,ic.current=ux,t=n(r,i)}while(La)}if(ic.current=Mc,e=ut!==null&&ut.next!==null,us=0,mt=ut=We=null,Dc=!1,e)throw Error(j(300));return t}function wg(){var t=ul!==0;return ul=0,t}function tr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?We.memoizedState=mt=t:mt=mt.next=t,mt}function Pn(){if(ut===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=mt===null?We.memoizedState:mt.next;if(e!==null)mt=e,ut=t;else{if(t===null)throw Error(j(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},mt===null?We.memoizedState=mt=t:mt=mt.next=t}return mt}function cl(t,e){return typeof e=="function"?e(t):e}function ph(t){var e=Pn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((us&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,o=r):l=l.next=m,We.lanes|=d,cs|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Hn(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,cs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mh(t){var e=Pn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function PE(){}function OE(t,e){var n=We,r=Pn(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,an=!0),r=r.queue,_g(ME.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,dl(9,DE.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(j(349));us&30||UE(n,e,i)}return i}function UE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function DE(t,e,n,r){e.value=n,e.getSnapshot=r,LE(e)&&jE(t)}function ME(t,e,n){return n(function(){LE(e)&&jE(t)})}function LE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function jE(t){var e=Dr(t,1);e!==null&&Vn(e,t,1,-1)}function Pv(t){var e=tr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,We,t),[e.memoizedState,t]}function dl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $E(){return Pn().memoizedState}function sc(t,e,n,r){var i=tr();We.flags|=t,i.memoizedState=dl(1|e,n,void 0,r===void 0?null:r)}function Nd(t,e,n,r){var i=Pn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&yg(r,o.deps)){i.memoizedState=dl(e,n,s,r);return}}We.flags|=t,i.memoizedState=dl(1|e,n,s,r)}function Ov(t,e){return sc(8390656,8,t,e)}function _g(t,e){return Nd(2048,8,t,e)}function FE(t,e){return Nd(4,2,t,e)}function BE(t,e){return Nd(4,4,t,e)}function VE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function HE(t,e,n){return n=n!=null?n.concat([t]):null,Nd(4,4,VE.bind(null,e,t),n)}function Eg(){}function WE(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qE(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function KE(t,e,n){return us&21?(Hn(n,e)||(n=X_(),We.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function ix(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=hh.transition;hh.transition={};try{t(!1),e()}finally{xe=n,hh.transition=r}}function GE(){return Pn().memoizedState}function sx(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YE(t))XE(e,n);else if(n=bE(t,e,n,r),n!==null){var i=Xt();Vn(n,t,r,i),QE(n,e,r)}}function ox(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YE(t))XE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(i.next=i,fg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=bE(t,e,i,r),n!==null&&(i=Xt(),Vn(n,t,r,i),QE(n,e,r))}}function YE(t){var e=t.alternate;return t===We||e!==null&&e===We}function XE(t,e){La=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function QE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jm(t,n)}}var Mc={readContext:Rn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},ax={readContext:Rn,useCallback:function(t,e){return tr().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Ov,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sc(4194308,4,VE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return sc(4,2,t,e)},useMemo:function(t,e){var n=tr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sx.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=tr();return t={current:t},e.memoizedState=t},useState:Pv,useDebugValue:Eg,useDeferredValue:function(t){return tr().memoizedState=t},useTransition:function(){var t=Pv(!1),e=t[0];return t=ix.bind(null,t[1]),tr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=tr();if(Be){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),gt===null)throw Error(j(349));us&30||UE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ov(ME.bind(null,r,s,t),[t]),r.flags|=2048,dl(9,DE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tr(),e=gt.identifierPrefix;if(Be){var n=xr,r=Tr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ul++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:Rn,useCallback:WE,useContext:Rn,useEffect:_g,useImperativeHandle:HE,useInsertionEffect:FE,useLayoutEffect:BE,useMemo:qE,useReducer:ph,useRef:$E,useState:function(){return ph(cl)},useDebugValue:Eg,useDeferredValue:function(t){var e=Pn();return KE(e,ut.memoizedState,t)},useTransition:function(){var t=ph(cl)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:PE,useSyncExternalStore:OE,useId:GE,unstable_isNewReconciler:!1},ux={readContext:Rn,useCallback:WE,useContext:Rn,useEffect:_g,useImperativeHandle:HE,useInsertionEffect:FE,useLayoutEffect:BE,useMemo:qE,useReducer:mh,useRef:$E,useState:function(){return mh(cl)},useDebugValue:Eg,useDeferredValue:function(t){var e=Pn();return ut===null?e.memoizedState=t:KE(e,ut.memoizedState,t)},useTransition:function(){var t=mh(cl)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:PE,useSyncExternalStore:OE,useId:GE,unstable_isNewReconciler:!1};function Co(t,e){try{var n="",r=e;do n+=Mb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cx=typeof WeakMap=="function"?WeakMap:Map;function JE(t,e,n){n=Rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jc||(jc=!0,Kp=r),Mp(t,e)},n}function ZE(t,e,n){n=Rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mp(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Uv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Cx.bind(null,t,e,n),e.then(t,t))}function Dv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rr(-1,1),e.tag=2,yi(n,e,1))),n.lanes|=1),t)}var dx=Wr.ReactCurrentOwner,an=!1;function Kt(t,e,n,r){e.child=t===null?NE(e,null,n,r):So(e,t.child,n,r)}function Lv(t,e,n,r,i){n=n.render;var s=e.ref;return lo(e,i),r=vg(t,e,n,r,s,i),n=wg(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(Be&&n&&og(e),e.flags|=1,Kt(t,e,r,i),e.child)}function jv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,eS(t,e,s,r,i)):(t=uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:rl,n(o,r)&&t.ref===e.ref)return Mr(t,e,i)}return e.flags|=1,t=_i(s,r),t.ref=e.ref,t.return=e,e.child=t}function eS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(rl(s,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Mr(t,e,i)}return Lp(t,e,n,r,i)}function tS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(eo,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(eo,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Pe(eo,pn),pn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Pe(eo,pn),pn|=r;return Kt(t,e,i,n),e.child}function nS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lp(t,e,n,r,i){var s=un(n)?as:Ft.current;return s=_o(e,s),lo(e,i),n=vg(t,e,n,r,s,i),r=wg(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mr(t,e,i)):(Be&&r&&og(e),e.flags|=1,Kt(t,e,n,i),e.child)}function $v(t,e,n,r,i){if(un(n)){var s=!0;zc(e)}else s=!1;if(lo(e,i),e.stateNode===null)oc(t,e),zE(e,n,r),Dp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=un(n)?as:Ft.current,u=_o(e,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Nv(e,o,r,u),ti=!1;var g=e.memoizedState;o.state=g,Oc(e,r,o,i),l=e.memoizedState,a!==r||g!==l||ln.current||ti?(typeof d=="function"&&(Up(e,n,d,r),l=e.memoizedState),(a=ti||Av(e,n,a,r,g,l,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,TE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ln(e.type,a),o.props=u,m=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=un(n)?as:Ft.current,l=_o(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==l)&&Nv(e,o,r,l),ti=!1,g=e.memoizedState,o.state=g,Oc(e,r,o,i);var E=e.memoizedState;a!==m||g!==E||ln.current||ti?(typeof y=="function"&&(Up(e,n,y,r),E=e.memoizedState),(u=ti||Av(e,n,u,r,g,E,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return jp(t,e,n,r,s,i)}function jp(t,e,n,r,i,s){nS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Iv(e,n,!1),Mr(t,e,s);r=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=r.state,i&&Iv(e,n,!0),e.child}function rS(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),pg(t,e.containerInfo)}function Fv(t,e,n,r,i){return Eo(),lg(i),e.flags|=256,Kt(t,e,n,r),e.child}var $p={dehydrated:null,treeContext:null,retryLane:0};function Fp(t){return{baseLanes:t,cachePool:null,transitions:null}}function iS(t,e,n){var r=e.pendingProps,i=He.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(He,i&1),t===null)return Pp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Od(o,r,0,null),t=rs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fp(n),e.memoizedState=$p,t):Sg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_i(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_i(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$p,r}return s=t.child,t=s.sibling,r=_i(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sg(t,e){return e=Od({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uu(t,e,n,r){return r!==null&&lg(r),So(e,t.child,null,n),t=Sg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gh(Error(j(422))),Uu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Od({mode:"visible",children:r.children},i,0,null),s=rs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=Fp(o),e.memoizedState=$p,s);if(!(e.mode&1))return Uu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=gh(s,r,void 0),Uu(t,e,o,r)}if(a=(o&t.childLanes)!==0,an||a){if(r=gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dr(t,i),Vn(r,t,i,-1))}return xg(),r=gh(Error(j(421))),Uu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ix.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mn=gi(i.nextSibling),vn=e,Be=!0,$n=null,t!==null&&(Tn[xn++]=Tr,Tn[xn++]=xr,Tn[xn++]=ls,Tr=t.id,xr=t.overflow,ls=e),e=Sg(e,r.children),e.flags|=4096,e)}function Bv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Op(t.return,e,n)}function yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Kt(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bv(t,n,e);else if(t.tag===19)Bv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yh(e,!0,n,null,s);break;case"together":yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=_i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hx(t,e,n){switch(e.tag){case 3:rS(e),Eo();break;case 5:RE(e);break;case 1:un(e.type)&&zc(e);break;case 4:pg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(Rc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?iS(t,e,n):(Pe(He,He.current&1),t=Mr(t,e,n),t!==null?t.sibling:null);Pe(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,tS(t,e,n)}return Mr(t,e,n)}var oS,Bp,aS,lS;oS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bp=function(){};aS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xi(ur.current);var s=null;switch(n){case"input":i=cp(t,i),r=cp(t,r),s=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),s=[];break;case"textarea":i=hp(t,i),r=hp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tc)}mp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&De("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lS=function(t,e,n,r){n!==r&&(e.flags|=4)};function pa(t,e){if(!Be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function px(t,e,n){var r=e.pendingProps;switch(ag(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return un(e.type)&&xc(),Rt(e),null;case 3:return r=e.stateNode,ko(),$e(ln),$e(Ft),gg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Pu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Xp($n),$n=null))),Bp(t,e),Rt(e),null;case 5:mg(e);var i=Xi(ll.current);if(n=e.type,t!==null&&e.stateNode!=null)aS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Rt(e),null}if(t=Xi(ur.current),Pu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nr]=e,r[ol]=s,t=(e.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(i=0;i<Ca.length;i++)De(Ca[i],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":Qy(r,s),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},De("invalid",r);break;case"textarea":Zy(r,s),De("invalid",r)}mp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ru(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ru(r.textContent,a,t),i=["children",""+a]):Xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&De("scroll",r)}switch(n){case"input":Cu(r),Jy(r,s,!0);break;case"textarea":Cu(r),ev(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nr]=e,t[ol]=r,oS(t,e,!1,!1),e.stateNode=t;e:{switch(o=gp(n,r),n){case"dialog":De("cancel",t),De("close",t),i=r;break;case"iframe":case"object":case"embed":De("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ca.length;i++)De(Ca[i],t);i=r;break;case"source":De("error",t),i=r;break;case"img":case"image":case"link":De("error",t),De("load",t),i=r;break;case"details":De("toggle",t),i=r;break;case"input":Qy(t,r),i=cp(t,r),De("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),De("invalid",t);break;case"textarea":Zy(t,r),i=hp(t,r),De("invalid",t);break;default:i=r}mp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?L_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qa(t,l):typeof l=="number"&&Qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&De("scroll",t):l!=null&&qm(t,s,l,o))}switch(n){case"input":Cu(t),Jy(t,r,!1);break;case"textarea":Cu(t),ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?io(t,!!r.multiple,s,!1):r.defaultValue!=null&&io(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)lS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Xi(ll.current),Xi(ur.current),Pu(e)){if(r=e.stateNode,n=e.memoizedProps,r[nr]=e,(s=r.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Ru(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ru(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nr]=e,e.stateNode=r}return Rt(e),null;case 13:if($e(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Be&&mn!==null&&e.mode&1&&!(e.flags&128))IE(),Eo(),e.flags|=98560,s=!1;else if(s=Pu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[nr]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else $n!==null&&(Xp($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?ct===0&&(ct=3):xg())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return ko(),Bp(t,e),t===null&&il(e.stateNode.containerInfo),Rt(e),null;case 10:return dg(e.type._context),Rt(e),null;case 17:return un(e.type)&&xc(),Rt(e),null;case 19:if($e(He),s=e.memoizedState,s===null)return Rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)pa(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(He,He.current&1|2),e.child}t=t.sibling}s.tail!==null&&tt()>Io&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Be)return Rt(e),null}else 2*tt()-s.renderingStartTime>Io&&n!==1073741824&&(e.flags|=128,r=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tt(),e.sibling=null,n=He.current,Pe(He,r?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return Tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function mx(t,e){switch(ag(e),e.tag){case 1:return un(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ko(),$e(ln),$e(Ft),gg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mg(e),null;case 13:if($e(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $e(He),null;case 4:return ko(),null;case 10:return dg(e.type._context),null;case 22:case 23:return Tg(),null;case 24:return null;default:return null}}var Du=!1,Ut=!1,gx=typeof WeakSet=="function"?WeakSet:Set,X=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(t,e,r)}else n.current=null}function Vp(t,e,n){try{n()}catch(r){Ge(t,e,r)}}var Vv=!1;function yx(t,e){if(bp=Cc,t=fE(),sg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,m=t,g=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(a=o+i),m!==s||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===t)break t;if(g===n&&++u===i&&(a=o),g===s&&++d===r&&(l=o),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tp={focusedElem:t,selectionRange:n},Cc=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var v=E.memoizedProps,c=E.memoizedState,f=e.stateNode,h=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ln(e.type,v),c);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){Ge(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return E=Vv,Vv=!1,E}function ja(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vp(e,n,s)}i=i.next}while(i!==r)}}function Rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uS(t){var e=t.alternate;e!==null&&(t.alternate=null,uS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nr],delete e[ol],delete e[Ap],delete e[ZT],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cS(t){return t.tag===5||t.tag===3||t.tag===4}function Hv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tc));else if(r!==4&&(t=t.child,t!==null))for(Wp(t,e,n),t=t.sibling;t!==null;)Wp(t,e,n),t=t.sibling}function qp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qp(t,e,n),t=t.sibling;t!==null;)qp(t,e,n),t=t.sibling}var Ct=null,jn=!1;function Qr(t,e,n){for(n=n.child;n!==null;)dS(t,e,n),n=n.sibling}function dS(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(Cd,n)}catch{}switch(n.tag){case 5:Ut||Zs(n,e);case 6:var r=Ct,i=jn;Ct=null,Qr(t,e,n),Ct=r,jn=i,Ct!==null&&(jn?(t=Ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ct.removeChild(n.stateNode));break;case 18:Ct!==null&&(jn?(t=Ct,n=n.stateNode,t.nodeType===8?ch(t.parentNode,n):t.nodeType===1&&ch(t,n),tl(t)):ch(Ct,n.stateNode));break;case 4:r=Ct,i=jn,Ct=n.stateNode.containerInfo,jn=!0,Qr(t,e,n),Ct=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vp(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Ut&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ge(n,e,a)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Ut=(r=Ut)||n.memoizedState!==null,Qr(t,e,n),Ut=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function Wv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(r){var i=bx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ct=a.stateNode,jn=!1;break e;case 3:Ct=a.stateNode.containerInfo,jn=!0;break e;case 4:Ct=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Ct===null)throw Error(j(160));dS(s,o,i),Ct=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fS(e,t),e=e.sibling}function fS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),Zn(t),r&4){try{ja(3,t,t.return),Rd(3,t)}catch(v){Ge(t,t.return,v)}try{ja(5,t,t.return)}catch(v){Ge(t,t.return,v)}}break;case 1:Mn(e,t),Zn(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(Mn(e,t),Zn(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var i=t.stateNode;try{Qa(i,"")}catch(v){Ge(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&P_(i,s),gp(a,o);var u=gp(a,s);for(o=0;o<l.length;o+=2){var d=l[o],m=l[o+1];d==="style"?L_(i,m):d==="dangerouslySetInnerHTML"?D_(i,m):d==="children"?Qa(i,m):qm(i,d,m,u)}switch(a){case"input":dp(i,s);break;case"textarea":O_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?io(i,!!s.multiple,y,!1):g!==!!s.multiple&&(s.defaultValue!=null?io(i,!!s.multiple,s.defaultValue,!0):io(i,!!s.multiple,s.multiple?[]:"",!1))}i[ol]=s}catch(v){Ge(t,t.return,v)}}break;case 6:if(Mn(e,t),Zn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ge(t,t.return,v)}}break;case 3:if(Mn(e,t),Zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(v){Ge(t,t.return,v)}break;case 4:Mn(e,t),Zn(t);break;case 13:Mn(e,t),Zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ig=tt())),r&4&&Wv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ut=(u=Ut)||d,Mn(e,t),Ut=u):Mn(e,t),Zn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(X=t,d=t.child;d!==null;){for(m=X=d;X!==null;){switch(g=X,y=g.child,g.tag){case 0:case 11:case 14:case 15:ja(4,g,g.return);break;case 1:Zs(g,g.return);var E=g.stateNode;if(typeof E.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(v){Ge(r,n,v)}}break;case 5:Zs(g,g.return);break;case 22:if(g.memoizedState!==null){Kv(m);continue}}y!==null?(y.return=g,X=y):Kv(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=M_("display",o))}catch(v){Ge(t,t.return,v)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){Ge(t,t.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mn(e,t),Zn(t),r&4&&Wv(t);break;case 21:break;default:Mn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cS(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qa(i,""),r.flags&=-33);var s=Hv(t);qp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hv(t);Wp(t,a,o);break;default:throw Error(j(161))}}catch(l){Ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t,e,n){X=t,hS(t)}function hS(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Du;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ut;a=Du;var u=Ut;if(Du=o,(Ut=l)&&!u)for(X=i;X!==null;)o=X,l=o.child,o.tag===22&&o.memoizedState!==null?Gv(i):l!==null?(l.return=o,X=l):Gv(i);for(;s!==null;)X=s,hS(s),s=s.sibling;X=i,Du=a,Ut=u}qv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):qv(t)}}function qv(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||Rd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&tl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ut||e.flags&512&&Hp(e)}catch(g){Ge(e,e.return,g)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function Kv(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function Gv(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rd(4,e)}catch(l){Ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ge(e,i,l)}}var s=e.return;try{Hp(e)}catch(l){Ge(e,s,l)}break;case 5:var o=e.return;try{Hp(e)}catch(l){Ge(e,o,l)}}}catch(l){Ge(e,e.return,l)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var wx=Math.ceil,Lc=Wr.ReactCurrentDispatcher,kg=Wr.ReactCurrentOwner,Nn=Wr.ReactCurrentBatchConfig,Ee=0,gt=null,ot=null,Tt=0,pn=0,eo=Oi(0),ct=0,fl=null,cs=0,Pd=0,Cg=0,$a=null,sn=null,Ig=0,Io=1/0,Cr=null,jc=!1,Kp=null,vi=null,Mu=!1,ui=null,$c=0,Fa=0,Gp=null,ac=-1,lc=0;function Xt(){return Ee&6?tt():ac!==-1?ac:ac=tt()}function wi(t){return t.mode&1?Ee&2&&Tt!==0?Tt&-Tt:nx.transition!==null?(lc===0&&(lc=X_()),lc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:rE(t.type)),t):1}function Vn(t,e,n,r){if(50<Fa)throw Fa=0,Gp=null,Error(j(185));Ol(t,n,r),(!(Ee&2)||t!==gt)&&(t===gt&&(!(Ee&2)&&(Pd|=n),ct===4&&ri(t,Tt)),cn(t,r),n===1&&Ee===0&&!(e.mode&1)&&(Io=tt()+500,zd&&Ui()))}function cn(t,e){var n=t.callbackNode;nT(t,e);var r=kc(t,t===gt?Tt:0);if(r===0)n!==null&&rv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rv(n),e===1)t.tag===0?tx(Yv.bind(null,t)):SE(Yv.bind(null,t)),QT(function(){!(Ee&6)&&Ui()}),n=null;else{switch(Q_(r)){case 1:n=Qm;break;case 4:n=G_;break;case 16:n=Sc;break;case 536870912:n=Y_;break;default:n=Sc}n=ES(n,pS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pS(t,e){if(ac=-1,lc=0,Ee&6)throw Error(j(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var r=kc(t,t===gt?Tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fc(t,r);else{e=r;var i=Ee;Ee|=2;var s=gS();(gt!==t||Tt!==e)&&(Cr=null,Io=tt()+500,ns(t,e));do try{Sx();break}catch(a){mS(t,a)}while(1);cg(),Lc.current=s,Ee=i,ot!==null?e=0:(gt=null,Tt=0,e=ct)}if(e!==0){if(e===2&&(i=Ep(t),i!==0&&(r=i,e=Yp(t,i))),e===1)throw n=fl,ns(t,0),ri(t,r),cn(t,tt()),n;if(e===6)ri(t,r);else{if(i=t.current.alternate,!(r&30)&&!_x(i)&&(e=Fc(t,r),e===2&&(s=Ep(t),s!==0&&(r=s,e=Yp(t,s))),e===1))throw n=fl,ns(t,0),ri(t,r),cn(t,tt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:qi(t,sn,Cr);break;case 3:if(ri(t,r),(r&130023424)===r&&(e=Ig+500-tt(),10<e)){if(kc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zp(qi.bind(null,t,sn,Cr),e);break}qi(t,sn,Cr);break;case 4:if(ri(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wx(r/1960))-r,10<r){t.timeoutHandle=zp(qi.bind(null,t,sn,Cr),r);break}qi(t,sn,Cr);break;case 5:qi(t,sn,Cr);break;default:throw Error(j(329))}}}return cn(t,tt()),t.callbackNode===n?pS.bind(null,t):null}function Yp(t,e){var n=$a;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=sn,sn=n,e!==null&&Xp(e)),t}function Xp(t){sn===null?sn=t:sn.push.apply(sn,t)}function _x(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ri(t,e){for(e&=~Cg,e&=~Pd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),r=1<<n;t[n]=-1,e&=~r}}function Yv(t){if(Ee&6)throw Error(j(327));uo();var e=kc(t,0);if(!(e&1))return cn(t,tt()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var r=Ep(t);r!==0&&(e=r,n=Yp(t,r))}if(n===1)throw n=fl,ns(t,0),ri(t,e),cn(t,tt()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qi(t,sn,Cr),cn(t,tt()),null}function bg(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(Io=tt()+500,zd&&Ui())}}function ds(t){ui!==null&&ui.tag===0&&!(Ee&6)&&uo();var e=Ee;Ee|=1;var n=Nn.transition,r=xe;try{if(Nn.transition=null,xe=1,t)return t()}finally{xe=r,Nn.transition=n,Ee=e,!(Ee&6)&&Ui()}}function Tg(){pn=eo.current,$e(eo)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XT(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(ag(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xc();break;case 3:ko(),$e(ln),$e(Ft),gg();break;case 5:mg(r);break;case 4:ko();break;case 13:$e(He);break;case 19:$e(He);break;case 10:dg(r.type._context);break;case 22:case 23:Tg()}n=n.return}if(gt=t,ot=t=_i(t.current,null),Tt=pn=e,ct=0,fl=null,Cg=Pd=cs=0,sn=$a=null,Yi!==null){for(e=0;e<Yi.length;e++)if(n=Yi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yi=null}return t}function mS(t,e){do{var n=ot;try{if(cg(),ic.current=Mc,Dc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dc=!1}if(us=0,mt=ut=We=null,La=!1,ul=0,kg.current=null,n===null||n.return===null){ct=1,fl=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Dv(o);if(y!==null){y.flags&=-257,Mv(y,o,a,s,e),y.mode&1&&Uv(s,u,e),e=y,l=u;var E=e.updateQueue;if(E===null){var v=new Set;v.add(l),e.updateQueue=v}else E.add(l);break e}else{if(!(e&1)){Uv(s,u,e),xg();break e}l=Error(j(426))}}else if(Be&&a.mode&1){var c=Dv(o);if(c!==null){!(c.flags&65536)&&(c.flags|=256),Mv(c,o,a,s,e),lg(Co(l,a));break e}}s=l=Co(l,a),ct!==4&&(ct=2),$a===null?$a=[s]:$a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=JE(s,l,e);xv(s,f);break e;case 1:a=l;var h=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vi===null||!vi.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ZE(s,a,e);xv(s,w);break e}}s=s.return}while(s!==null)}vS(n)}catch(_){e=_,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function gS(){var t=Lc.current;return Lc.current=Mc,t===null?Mc:t}function xg(){(ct===0||ct===3||ct===2)&&(ct=4),gt===null||!(cs&268435455)&&!(Pd&268435455)||ri(gt,Tt)}function Fc(t,e){var n=Ee;Ee|=2;var r=gS();(gt!==t||Tt!==e)&&(Cr=null,ns(t,e));do try{Ex();break}catch(i){mS(t,i)}while(1);if(cg(),Ee=n,Lc.current=r,ot!==null)throw Error(j(261));return gt=null,Tt=0,ct}function Ex(){for(;ot!==null;)yS(ot)}function Sx(){for(;ot!==null&&!Kb();)yS(ot)}function yS(t){var e=_S(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?vS(t):ot=e,kg.current=null}function vS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mx(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,ot=null;return}}else if(n=px(n,e,pn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ct===0&&(ct=5)}function qi(t,e,n){var r=xe,i=Nn.transition;try{Nn.transition=null,xe=1,kx(t,e,n,r)}finally{Nn.transition=i,xe=r}return null}function kx(t,e,n,r){do uo();while(ui!==null);if(Ee&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rT(t,s),t===gt&&(ot=gt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mu||(Mu=!0,ES(Sc,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=xe;xe=1;var a=Ee;Ee|=4,kg.current=null,yx(t,n),fS(n,t),VT(Tp),Cc=!!bp,Tp=bp=null,t.current=n,vx(n),Gb(),Ee=a,xe=o,Nn.transition=s}else t.current=n;if(Mu&&(Mu=!1,ui=t,$c=i),s=t.pendingLanes,s===0&&(vi=null),Qb(n.stateNode),cn(t,tt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jc)throw jc=!1,t=Kp,Kp=null,t;return $c&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===Gp?Fa++:(Fa=0,Gp=t):Fa=0,Ui(),null}function uo(){if(ui!==null){var t=Q_($c),e=Nn.transition,n=xe;try{if(Nn.transition=null,xe=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,$c=0,Ee&6)throw Error(j(331));var i=Ee;for(Ee|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:ja(8,d,s)}var m=d.child;if(m!==null)m.return=d,X=m;else for(;X!==null;){d=X;var g=d.sibling,y=d.return;if(uS(d),d===u){X=null;break}if(g!==null){g.return=y,X=g;break}X=y}}}var E=s.alternate;if(E!==null){var v=E.child;if(v!==null){E.child=null;do{var c=v.sibling;v.sibling=null,v=c}while(v!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ja(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,X=f;break e}X=s.return}}var h=t.current;for(X=h;X!==null;){o=X;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,X=p;else e:for(o=h;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rd(9,a)}}catch(_){Ge(a,a.return,_)}if(a===o){X=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,X=w;break e}X=a.return}}if(Ee=i,Ui(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(Cd,t)}catch{}r=!0}return r}finally{xe=n,Nn.transition=e}}return!1}function Xv(t,e,n){e=Co(n,e),e=JE(t,e,1),t=yi(t,e,1),e=Xt(),t!==null&&(Ol(t,1,e),cn(t,e))}function Ge(t,e,n){if(t.tag===3)Xv(t,t,n);else for(;e!==null;){if(e.tag===3){Xv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=Co(n,t),t=ZE(e,t,1),e=yi(e,t,1),t=Xt(),e!==null&&(Ol(e,1,t),cn(e,t));break}}e=e.return}}function Cx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(Tt&n)===n&&(ct===4||ct===3&&(Tt&130023424)===Tt&&500>tt()-Ig?ns(t,0):Cg|=n),cn(t,e)}function wS(t,e){e===0&&(t.mode&1?(e=Tu,Tu<<=1,!(Tu&130023424)&&(Tu=4194304)):e=1);var n=Xt();t=Dr(t,e),t!==null&&(Ol(t,e,n),cn(t,n))}function Ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wS(t,n)}function bx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),wS(t,n)}var _S;_S=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,hx(t,e,n);an=!!(t.flags&131072)}else an=!1,Be&&e.flags&1048576&&kE(e,Nc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oc(t,e),t=e.pendingProps;var i=_o(e,Ft.current);lo(e,n),i=vg(null,e,r,t,i,n);var s=wg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(r)?(s=!0,zc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hg(e),i.updater=Ad,e.stateNode=i,i._reactInternals=e,Dp(e,r,t,n),e=jp(null,e,r,!0,s,n)):(e.tag=0,Be&&s&&og(e),Kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xx(r),t=Ln(r,t),i){case 0:e=Lp(null,e,r,t,n);break e;case 1:e=$v(null,e,r,t,n);break e;case 11:e=Lv(null,e,r,t,n);break e;case 14:e=jv(null,e,r,Ln(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Lp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),$v(t,e,r,i,n);case 3:e:{if(rS(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,TE(t,e),Oc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Co(Error(j(423)),e),e=Fv(t,e,r,n,i);break e}else if(r!==i){i=Co(Error(j(424)),e),e=Fv(t,e,r,n,i);break e}else for(mn=gi(e.stateNode.containerInfo.firstChild),vn=e,Be=!0,$n=null,n=NE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),r===i){e=Mr(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return RE(e),t===null&&Pp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xp(r,i)?o=null:s!==null&&xp(r,s)&&(e.flags|=32),nS(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Pp(e),null;case 13:return iS(t,e,n);case 4:return pg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=So(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Lv(t,e,r,i,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Pe(Rc,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!ln.current){e=Mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Op(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Op(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,lo(e,n),i=Rn(i),r=r(i),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),jv(t,e,r,i,n);case 15:return eS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),oc(t,e),e.tag=1,un(r)?(t=!0,zc(e)):t=!1,lo(e,n),zE(e,r,i),Dp(e,r,i,n),jp(null,e,r,!0,t,n);case 19:return sS(t,e,n);case 22:return tS(t,e,n)}throw Error(j(156,e.tag))};function ES(t,e){return K_(t,e)}function Tx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,r){return new Tx(t,e,n,r)}function zg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xx(t){if(typeof t=="function")return zg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gm)return 11;if(t===Ym)return 14}return 2}function _i(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return rs(n.children,i,s,e);case Km:o=8,i|=8;break;case op:return t=An(12,n,e,i|2),t.elementType=op,t.lanes=s,t;case ap:return t=An(13,n,e,i),t.elementType=ap,t.lanes=s,t;case lp:return t=An(19,n,e,i),t.elementType=lp,t.lanes=s,t;case A_:return Od(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x_:o=10;break e;case z_:o=9;break e;case Gm:o=11;break e;case Ym:o=14;break e;case ei:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=An(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function rs(t,e,n,r){return t=An(7,t,r,e),t.lanes=n,t}function Od(t,e,n,r){return t=An(22,t,r,e),t.elementType=A_,t.lanes=n,t.stateNode={isHidden:!1},t}function vh(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function wh(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zf(0),this.expirationTimes=Zf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ag(t,e,n,r,i,s,o,a,l){return t=new zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hg(s),t}function Ax(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function SS(t){if(!t)return Ti;t=t._reactInternals;e:{if(Ss(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(un(n))return EE(t,n,e)}return e}function kS(t,e,n,r,i,s,o,a,l){return t=Ag(n,r,!0,t,i,s,o,a,l),t.context=SS(null),n=t.current,r=Xt(),i=wi(n),s=Rr(r,i),s.callback=e??null,yi(n,s,i),t.current.lanes=i,Ol(t,i,r),cn(t,r),t}function Ud(t,e,n,r){var i=e.current,s=Xt(),o=wi(i);return n=SS(n),e.context===null?e.context=n:e.pendingContext=n,e=Rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yi(i,e,o),t!==null&&(Vn(t,i,o,s),rc(t,i,o)),o}function Bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ng(t,e){Qv(t,e),(t=t.alternate)&&Qv(t,e)}function Nx(){return null}var CS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rg(t){this._internalRoot=t}Dd.prototype.render=Rg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Ud(t,e,null,null)};Dd.prototype.unmount=Rg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){Ud(null,t,null,null)}),e[Ur]=null}};function Dd(t){this._internalRoot=t}Dd.prototype.unstable_scheduleHydration=function(t){if(t){var e=eE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ni.length&&e!==0&&e<ni[n].priority;n++);ni.splice(n,0,t),n===0&&nE(t)}};function Pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jv(){}function Rx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Bc(o);s.call(u)}}var o=kS(e,r,t,0,null,!1,!1,"",Jv);return t._reactRootContainer=o,t[Ur]=o.current,il(t.nodeType===8?t.parentNode:t),ds(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Bc(l);a.call(u)}}var l=Ag(t,0,!1,null,null,!1,!1,"",Jv);return t._reactRootContainer=l,t[Ur]=l.current,il(t.nodeType===8?t.parentNode:t),ds(function(){Ud(e,l,n,r)}),l}function Ld(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Bc(o);a.call(l)}}Ud(e,o,t,i)}else o=Rx(n,e,t,i,r);return Bc(o)}J_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(Jm(e,n|1),cn(e,tt()),!(Ee&6)&&(Io=tt()+500,Ui()))}break;case 13:ds(function(){var r=Dr(t,1);if(r!==null){var i=Xt();Vn(r,t,1,i)}}),Ng(t,1)}};Zm=function(t){if(t.tag===13){var e=Dr(t,134217728);if(e!==null){var n=Xt();Vn(e,t,134217728,n)}Ng(t,134217728)}};Z_=function(t){if(t.tag===13){var e=wi(t),n=Dr(t,e);if(n!==null){var r=Xt();Vn(n,t,e,r)}Ng(t,e)}};eE=function(){return xe};tE=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};vp=function(t,e,n){switch(e){case"input":if(dp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xd(r);if(!i)throw Error(j(90));R_(r),dp(r,i)}}}break;case"textarea":O_(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};F_=bg;B_=ds;var Px={usingClientEntryPoint:!1,Events:[Dl,Gs,xd,j_,$_,bg]},ma={findFiberByHostInstance:Gi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ox={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W_(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||Nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{Cd=Lu.inject(Ox),lr=Lu}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pg(e))throw Error(j(200));return Ax(t,e,null,n)};En.createRoot=function(t,e){if(!Pg(t))throw Error(j(299));var n=!1,r="",i=CS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ag(t,1,!1,null,null,n,!1,r,i),t[Ur]=e.current,il(t.nodeType===8?t.parentNode:t),new Rg(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=W_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return ds(t)};En.hydrate=function(t,e,n){if(!Md(e))throw Error(j(200));return Ld(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Pg(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=CS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kS(e,null,t,1,n??null,i,!1,s,o),t[Ur]=e.current,il(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Dd(e)};En.render=function(t,e,n){if(!Md(e))throw Error(j(200));return Ld(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Md(t))throw Error(j(40));return t._reactRootContainer?(ds(function(){Ld(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};En.unstable_batchedUpdates=bg;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Md(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Ld(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";function IS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IS)}catch(t){console.error(t)}}IS(),k_.exports=En;var Ux=k_.exports,Zv=Ux;ip.createRoot=Zv.createRoot,ip.hydrateRoot=Zv.hydrateRoot;const e1=({name:t,value:e})=>I.jsxs("div",{className:`movie__${t}`,children:[I.jsx("span",{className:"info__head",children:t.replace(/\b\w/g,n=>n.toUpperCase())}),e]});var bS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},t1=Ie.createContext&&Ie.createContext(bS),Ei=globalThis&&globalThis.__assign||function(){return Ei=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ei.apply(this,arguments)},Dx=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function TS(t){return t&&t.map(function(e,n){return Ie.createElement(e.tag,Ei({key:n},e.attr),TS(e.child))})}function hn(t){return function(e){return Ie.createElement(Mx,Ei({attr:Ei({},t.attr)},e),TS(t.child))}}function Mx(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=Dx(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ie.createElement("svg",Ei({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ei(Ei({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ie.createElement("title",null,s),t.children)};return t1!==void 0?Ie.createElement(t1.Consumer,null,function(n){return e(n)}):e(bS)}function xS(t){return hn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]})(t)}function Lx(t){return hn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(t)}function zS(t){return hn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(t)}function jx(t){return hn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"}}]})(t)}function AS(t){return hn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z"}}]})(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$x=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},RS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,m=(s&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(g=64)),r.push(n[d],n[m],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(NS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$x(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||m==null)throw new Fx;const g=s<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),m!==64){const E=u<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bx=function(t){const e=NS(t);return RS.encodeByteArray(e,!0)},Vc=function(t){return Bx(t).replace(/\./g,"")},PS=function(t){try{return RS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hx=()=>Vx().__FIREBASE_DEFAULTS__,Wx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&PS(t[1]);return e&&JSON.parse(e)},jd=()=>{try{return Hx()||Wx()||qx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OS=t=>{var e,n;return(n=(e=jd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},US=t=>{const e=OS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DS=()=>{var t;return(t=jd())===null||t===void 0?void 0:t.config},MS=t=>{var e;return(e=jd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function LS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vc(JSON.stringify(n)),Vc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function Yx(){var t;const e=(t=jd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jx(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zx(){try{return typeof indexedDB=="object"}catch{return!1}}function ez(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tz="FirebaseError";class yr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tz,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ll.prototype.create)}}class Ll{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nz(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yr(i,a,r)}}function nz(t,e){return t.replace(rz,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rz=/\{\$([^}]+)}/g;function iz(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(n1(s)&&n1(o)){if(!Hc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function n1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ia(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sz(t,e){const n=new oz(t,e);return n.subscribe.bind(n)}class oz{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");az(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_h),i.error===void 0&&(i.error=_h),i.complete===void 0&&(i.complete=_h);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function az(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _h(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class xi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ki="[DEFAULT]";/**
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
 */class lz{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Kx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cz(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uz(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uz(t){return t===Ki?void 0:t}function cz(t){return t.instantiationMode==="EAGER"}/**
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
 */class dz{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lz(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const fz={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},hz=Ce.INFO,pz={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},mz=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pz[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Og{constructor(e){this.name=e,this._logLevel=hz,this._logHandler=mz,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fz[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const gz=(t,e)=>e.some(n=>t instanceof n);let r1,i1;function yz(){return r1||(r1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vz(){return i1||(i1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jS=new WeakMap,Qp=new WeakMap,$S=new WeakMap,Eh=new WeakMap,Ug=new WeakMap;function wz(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Si(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jS.set(n,t)}).catch(()=>{}),Ug.set(e,t),e}function _z(t){if(Qp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qp.set(t,e)}let Jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$S.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ez(t){Jp=t(Jp)}function Sz(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sh(this),e,...n);return $S.set(r,e.sort?e.sort():[e]),Si(r)}:vz().includes(t)?function(...e){return t.apply(Sh(this),e),Si(jS.get(this))}:function(...e){return Si(t.apply(Sh(this),e))}}function kz(t){return typeof t=="function"?Sz(t):(t instanceof IDBTransaction&&_z(t),gz(t,yz())?new Proxy(t,Jp):t)}function Si(t){if(t instanceof IDBRequest)return wz(t);if(Eh.has(t))return Eh.get(t);const e=kz(t);return e!==t&&(Eh.set(t,e),Ug.set(e,t)),e}const Sh=t=>Ug.get(t);function Cz(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Si(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Si(o.result),l.oldVersion,l.newVersion,Si(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Iz=["get","getKey","getAll","getAllKeys","count"],bz=["put","add","delete","clear"],kh=new Map;function s1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kh.get(e))return kh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=bz.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Iz.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return kh.set(e,s),s}Ez(t=>({...t,get:(e,n,r)=>s1(e,n)||t.get(e,n,r),has:(e,n)=>!!s1(e,n)||t.has(e,n)}));/**
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
 */class Tz{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xz(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xz(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zp="@firebase/app",o1="0.9.12";/**
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
 */const fs=new Og("@firebase/app"),zz="@firebase/app-compat",Az="@firebase/analytics-compat",Nz="@firebase/analytics",Rz="@firebase/app-check-compat",Pz="@firebase/app-check",Oz="@firebase/auth",Uz="@firebase/auth-compat",Dz="@firebase/database",Mz="@firebase/database-compat",Lz="@firebase/functions",jz="@firebase/functions-compat",$z="@firebase/installations",Fz="@firebase/installations-compat",Bz="@firebase/messaging",Vz="@firebase/messaging-compat",Hz="@firebase/performance",Wz="@firebase/performance-compat",qz="@firebase/remote-config",Kz="@firebase/remote-config-compat",Gz="@firebase/storage",Yz="@firebase/storage-compat",Xz="@firebase/firestore",Qz="@firebase/firestore-compat",Jz="firebase",Zz="9.22.2";/**
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
 */const em="[DEFAULT]",eA={[Zp]:"fire-core",[zz]:"fire-core-compat",[Nz]:"fire-analytics",[Az]:"fire-analytics-compat",[Pz]:"fire-app-check",[Rz]:"fire-app-check-compat",[Oz]:"fire-auth",[Uz]:"fire-auth-compat",[Dz]:"fire-rtdb",[Mz]:"fire-rtdb-compat",[Lz]:"fire-fn",[jz]:"fire-fn-compat",[$z]:"fire-iid",[Fz]:"fire-iid-compat",[Bz]:"fire-fcm",[Vz]:"fire-fcm-compat",[Hz]:"fire-perf",[Wz]:"fire-perf-compat",[qz]:"fire-rc",[Kz]:"fire-rc-compat",[Gz]:"fire-gcs",[Yz]:"fire-gcs-compat",[Xz]:"fire-fst",[Qz]:"fire-fst-compat","fire-js":"fire-js",[Jz]:"fire-js-all"};/**
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
 */const Wc=new Map,tm=new Map;function tA(t,e){try{t.container.addComponent(e)}catch(n){fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(tm.has(e))return fs.debug(`There were multiple attempts to register component ${e}.`),!1;tm.set(e,t);for(const n of Wc.values())tA(n,t);return!0}function $d(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nA={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ki=new Ll("app","Firebase",nA);/**
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
 */class rA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=Zz;function FS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:em,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ki.create("bad-app-name",{appName:String(i)});if(n||(n=DS()),!n)throw ki.create("no-options");const s=Wc.get(i);if(s){if(Hc(n,s.options)&&Hc(r,s.config))return s;throw ki.create("duplicate-app",{appName:i})}const o=new dz(i);for(const l of tm.values())o.addComponent(l);const a=new rA(n,r,o);return Wc.set(i,a),a}function Dg(t=em){const e=Wc.get(t);if(!e&&t===em&&DS())return FS();if(!e)throw ki.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let i=(r=eA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fs.warn(a.join(" "));return}hs(new xi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iA="firebase-heartbeat-database",sA=1,hl="firebase-heartbeat-store";let Ch=null;function BS(){return Ch||(Ch=Cz(iA,sA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hl)}}}).catch(t=>{throw ki.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function oA(t){try{return await(await BS()).transaction(hl).objectStore(hl).get(VS(t))}catch(e){if(e instanceof yr)fs.warn(e.message);else{const n=ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fs.warn(n.message)}}}async function a1(t,e){try{const r=(await BS()).transaction(hl,"readwrite");await r.objectStore(hl).put(e,VS(t)),await r.done}catch(n){if(n instanceof yr)fs.warn(n.message);else{const r=ki.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fs.warn(r.message)}}}function VS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aA=1024,lA=30*24*60*60*1e3;class uA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=l1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=l1(),{heartbeatsToSend:n,unsentEntries:r}=cA(this._heartbeatsCache.heartbeats),i=Vc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function l1(){return new Date().toISOString().substring(0,10)}function cA(t,e=aA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),u1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),u1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zx()?ez().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return a1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return a1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function u1(t){return Vc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fA(t){hs(new xi("platform-logger",e=>new Tz(e),"PRIVATE")),hs(new xi("heartbeat",e=>new uA(e),"PRIVATE")),cr(Zp,o1,t),cr(Zp,o1,"esm2017"),cr("fire-js","")}fA("");var hA="firebase",pA="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(hA,pA,"app");function Mg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function HS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mA=HS,WS=new Ll("auth","Firebase",HS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Og("@firebase/auth");function gA(t,...e){qc.logLevel<=Ce.WARN&&qc.warn(`Auth (${ks}): ${t}`,...e)}function cc(t,...e){qc.logLevel<=Ce.ERROR&&qc.error(`Auth (${ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw Lg(t,...e)}function dr(t,...e){return Lg(t,...e)}function qS(t,e,n){const r=Object.assign(Object.assign({},mA()),{[e]:n});return new Ll("auth","Firebase",r).create(e,{appName:t.name})}function yA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&On(t,"argument-error"),qS(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return WS.create(t,...e)}function se(t,e,...n){if(!t)throw Lg(e,...n)}function zr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function Lr(t,e){t||zr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vA(){return c1()==="http:"||c1()==="https:"}function c1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vA()||Xx()||"connection"in navigator)?navigator.onLine:!0}function _A(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lr(n>e,"Short delay should be less than long delay!"),this.isMobile=Gx()||Qx()}get(){return wA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e){Lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=new $l(3e4,6e4);function Cs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Is(t,e,n,r,i={}){return GS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=jl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),KS.fetch()(YS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function GS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EA),e);try{const i=new kA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ju(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ju(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ju(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qS(t,d,u);On(t,d)}}catch(i){if(i instanceof yr)throw i;On(t,"network-request-failed",{message:String(i)})}}async function Fl(t,e,n,r,i={}){const s=await Is(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}function YS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jg(t.config,i):`${t.config.apiScheme}://${i}`}class kA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dr(this.auth,"network-request-failed")),SA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ju(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dr(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CA(t,e){return Is(t,"POST","/v1/accounts:delete",e)}async function IA(t,e){return Is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bA(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=$g(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ba(Ih(i.auth_time)),issuedAtTime:Ba(Ih(i.iat)),expirationTime:Ba(Ih(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ih(t){return Number(t)*1e3}function $g(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=PS(n);return i?JSON.parse(i):(cc("Failed to decode base64 JWT payload"),null)}catch(i){return cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function TA(t){const e=$g(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yr&&xA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ba(this.lastLoginAt),this.creationTime=Ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pl(t,IA(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RA(s.providerUserInfo):[],a=NA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new XS(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function AA(t){const e=Ye(t);await Kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RA(t){return t.map(e=>{var{providerId:n}=e,r=Mg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PA(t,e){const n=await GS(t,{},async()=>{const r=jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=YS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",KS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return se(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ml;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ml,this.toJSON())}_performRefresh(){return zr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class is{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new XS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pl(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bA(this,e)}reload(){return AA(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new is(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pl(this,CA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,c=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:w,isAnonymous:_,providerData:S,stsTokenManager:C}=n;se(p&&C,e,"internal-error");const b=ml.fromJSON(this.name,C);se(typeof p=="string",e,"internal-error"),Jr(m,e.name),Jr(g,e.name),se(typeof w=="boolean",e,"internal-error"),se(typeof _=="boolean",e,"internal-error"),Jr(y,e.name),Jr(E,e.name),Jr(v,e.name),Jr(c,e.name),Jr(f,e.name),Jr(h,e.name);const x=new is({uid:p,auth:e,email:g,emailVerified:w,displayName:m,isAnonymous:_,photoURL:E,phoneNumber:y,tenantId:v,stsTokenManager:b,createdAt:f,lastLoginAt:h});return S&&Array.isArray(S)&&(x.providerData=S.map(T=>Object.assign({},T))),c&&(x._redirectEventId=c),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new ml;i.updateFromServerResponse(n);const s=new is({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=new Map;function Ar(t){Lr(t instanceof Function,"Expected a class definition");let e=d1.get(t);return e?(Lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d1.set(t,e),e)}/**
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
 */class QS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}QS.type="NONE";const f1=QS;/**
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
 */function dc(t,e,n){return`firebase:${t}:${e}:${n}`}class co{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=dc(this.userKey,i.apiKey,s),this.fullPersistenceKey=dc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?is._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new co(Ar(f1),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ar(f1);const o=dc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const m=is._fromJSON(e,d);u!==s&&(a=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new co(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new co(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ek(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nk(e))return"Blackberry";if(rk(e))return"Webos";if(Fg(e))return"Safari";if((e.includes("chrome/")||ZS(e))&&!e.includes("edge/"))return"Chrome";if(tk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JS(t=Bt()){return/firefox\//i.test(t)}function Fg(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZS(t=Bt()){return/crios\//i.test(t)}function ek(t=Bt()){return/iemobile/i.test(t)}function tk(t=Bt()){return/android/i.test(t)}function nk(t=Bt()){return/blackberry/i.test(t)}function rk(t=Bt()){return/webos/i.test(t)}function Fd(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OA(t=Bt()){var e;return Fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function UA(){return Jx()&&document.documentMode===10}function ik(t=Bt()){return Fd(t)||tk(t)||rk(t)||nk(t)||/windows phone/i.test(t)||ek(t)}function DA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t,e=[]){let n;switch(t){case"Browser":n=h1(Bt());break;case"Worker":n=`${h1(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}async function ok(t,e){return Is(t,"GET","/v2/recaptchaConfig",Cs(t,e))}function p1(t){return t!==void 0&&t.enterprise!==void 0}class ak{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MA().appendChild(r)})}function LA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jA="https://www.google.com/recaptcha/enterprise.js?render=",$A="recaptcha-enterprise",FA="NO_RECAPTCHA";class uk{constructor(e){this.type=$A,this.auth=Di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ok(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ak(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;p1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(FA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&p1(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lk(jA+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function bo(t,e,n,r=!1){const i=new uk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class BA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m1(this),this.idTokenSubscription=new m1(this),this.beforeStateQueue=new BA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}async initializeRecaptchaConfig(){const e=await ok(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ak(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new uk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ll("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return se(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Di(t){return Ye(t)}class m1{constructor(e){this.auth=e,this.observer=null,this.addObserver=sz(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t,e){const n=$d(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hc(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function WA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qA(t,e,n){const r=Di(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ck(e),{host:o,port:a}=KA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GA()}function ck(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KA(t){const e=ck(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:g1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:g1(o)}}}function g1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zr("not implemented")}_getIdTokenResponse(e){return zr("not implemented")}_linkToIdToken(e,n){return zr("not implemented")}_getReauthenticationResolver(e){return zr("not implemented")}}async function YA(t,e){return Is(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(t,e){return Fl(t,"POST","/v1/accounts:signInWithPassword",Cs(t,e))}async function XA(t,e){return Is(t,"POST","/v1/accounts:sendOobCode",Cs(t,e))}async function Th(t,e){return XA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",Cs(t,e))}async function JA(t,e){return Fl(t,"POST","/v1/accounts:signInWithEmailLink",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Bg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await bo(e,r,"signInWithPassword");return bh(e,i)}else return bh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await bo(e,r,"signInWithPassword");return bh(e,s)}else return Promise.reject(i)});case"emailLink":return QA(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return YA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JA(e,{idToken:n,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e){return Fl(t,"POST","/v1/accounts:signInWithIdp",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="http://localhost";class ps extends Bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ps(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:ZA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tN(t){const e=Ia(ba(t)).link,n=e?Ia(ba(e)).deep_link_id:null,r=Ia(ba(t)).deep_link_id;return(r?Ia(ba(r)).link:null)||r||n||e||t}class Vg{constructor(e){var n,r,i,s,o,a;const l=Ia(ba(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,m=eN((i=l.mode)!==null&&i!==void 0?i:null);se(u&&d&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tN(e);try{return new Vg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.providerId=Bo.PROVIDER_ID}static credential(e,n){return gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vg.parseLink(n);return se(r,"argument-error"),gl._fromEmailAndCode(e,r.code,r.tenantId)}}Bo.PROVIDER_ID="password";Bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends Hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Bl{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Bl{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Bl{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return oi.credential(n,r)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(t,e){return Fl(t,"POST","/v1/accounts:signUp",Cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await is._fromIdTokenResponse(e,r,i),o=y1(r);return new ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=y1(r);return new ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function y1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends yr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gc(e,n,r,i)}}function dk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(t,s,e,r):s})}async function nN(t,e,n=!1){const r=await pl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
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
 */async function rN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await pl(t,dk(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=$g(s.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(t.uid===a,r,"user-mismatch"),ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(t,e,n=!1){const r="signIn",i=await dk(t,r,e),s=await ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function iN(t,e){return fk(Di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e,n){var r;se(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),se(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(se(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(se(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e,n){var r;const i=Di(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await bo(i,s,"getOobCode",!0);n&&zh(i,o,n),await Th(i,o)}else n&&zh(i,s,n),await Th(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await bo(i,s,"getOobCode",!0);n&&zh(i,a,n),await Th(i,a)}else return Promise.reject(o)})}async function oN(t,e,n){var r;const i=Di(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await bo(i,s,"signUpPassword");o=xh(i,u)}else o=xh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await bo(i,s,"signUpPassword");return xh(i,d)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await ms._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function aN(t,e,n){return iN(Ye(t),Bo.credential(e,n))}function lN(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function uN(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function cN(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function dN(t){return Ye(t).signOut()}const Yc="__sak";/**
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
 */class hk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(){const t=Bt();return Fg(t)||Fd(t)}const hN=1e3,pN=10;class pk extends hk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fN()&&DA(),this.fallbackToPolling=ik(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pk.type="LOCAL";const mN=pk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk extends hk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mk.type="SESSION";const gk=mk;/**
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
 */function gN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await gN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wg("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){return window}function vN(t){fr().location.href=t}/**
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
 */function yk(){return typeof fr().WorkerGlobalScope<"u"&&typeof fr().importScripts=="function"}async function wN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _N(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function EN(){return yk()?self:null}/**
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
 */const vk="firebaseLocalStorageDb",SN=1,Xc="firebaseLocalStorage",wk="fbase_key";class Vl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vd(t,e){return t.transaction([Xc],e?"readwrite":"readonly").objectStore(Xc)}function kN(){const t=indexedDB.deleteDatabase(vk);return new Vl(t).toPromise()}function rm(){const t=indexedDB.open(vk,SN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xc,{keyPath:wk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xc)?e(r):(r.close(),await kN(),e(await rm()))})})}async function v1(t,e,n){const r=Vd(t,!0).put({[wk]:e,value:n});return new Vl(r).toPromise()}async function CN(t,e){const n=Vd(t,!1).get(e),r=await new Vl(n).toPromise();return r===void 0?null:r.value}function w1(t,e){const n=Vd(t,!0).delete(e);return new Vl(n).toPromise()}const IN=800,bN=3;class _k{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bd._getInstance(EN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wN(),!this.activeServiceWorker)return;this.sender=new yN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_N()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rm();return await v1(e,Yc,"1"),await w1(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vd(i,!1).getAll();return new Vl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_k.type="LOCAL";const TN=_k;new $l(3e4,6e4);/**
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
 */function Ek(t,e){return e?Ar(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qg extends Bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xN(t){return fk(t.auth,new qg(t),t.bypassAuthState)}function zN(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),rN(n,new qg(t),t.bypassAuthState)}async function AN(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),nN(n,new qg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xN;case"linkViaPopup":case"linkViaRedirect":return AN;case"reauthViaPopup":case"reauthViaRedirect":return zN;default:On(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=new $l(2e3,1e4);async function RN(t,e,n){const r=Di(t);yA(t,e,Hg);const i=Ek(r,n);return new Qi(r,"signInViaPopup",e,i).executeNotNull()}class Qi extends Sk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qi.currentPopupAction&&Qi.currentPopupAction.cancel(),Qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=Wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NN.get())};e()}}Qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="pendingRedirect",fc=new Map;class ON extends Sk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const r=await UN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UN(t,e){const n=LN(e),r=MN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DN(t,e){fc.set(t._key(),e)}function MN(t){return Ar(t._redirectPersistence)}function LN(t){return dc(PN,t.config.apiKey,t.name)}async function jN(t,e,n=!1){const r=Di(t),i=Ek(r,e),o=await new ON(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=10*60*1e3;class FN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$N&&this.cachedEventUids.clear(),this.cachedEventUids.has(_1(e))}saveEventToCache(e){this.cachedEventUids.add(_1(e)),this.lastProcessedEventTime=Date.now()}}function _1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e={}){return Is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WN=/^https?/;async function qN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VN(t);for(const n of e)try{if(KN(n))return}catch{}On(t,"unauthorized-domain")}function KN(t){const e=nm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WN.test(n))return!1;if(HN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GN=new $l(3e4,6e4);function E1(){const t=fr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YN(t){return new Promise((e,n)=>{var r,i,s;function o(){E1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{E1(),n(dr(t,"network-request-failed"))},timeout:GN.get()})}if(!((i=(r=fr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fr().gapi)===null||s===void 0)&&s.load)o();else{const a=LA("iframefcb");return fr()[a]=()=>{gapi.load?o():n(dr(t,"network-request-failed"))},lk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw hc=null,e})}let hc=null;function XN(t){return hc=hc||YN(t),hc}/**
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
 */const QN=new $l(5e3,15e3),JN="__/auth/iframe",ZN="emulator/auth/iframe",eR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nR(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jg(e,ZN):`https://${t.config.authDomain}/${JN}`,r={apiKey:e.apiKey,appName:t.name,v:ks},i=tR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jl(r).slice(1)}`}async function rR(t){const e=await XN(t),n=fr().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:nR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dr(t,"network-request-failed"),a=fr().setTimeout(()=>{s(o)},QN.get());function l(){fr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const iR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sR=500,oR=600,aR="_blank",lR="http://localhost";class S1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uR(t,e,n,r=sR,i=oR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},iR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Bt().toLowerCase();n&&(a=ZS(u)?aR:n),JS(u)&&(e=e||lR,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[y,E])=>`${g}${y}=${E},`,"");if(OA(u)&&a!=="_self")return cR(e||"",a),new S1(null);const m=window.open(e||"",a,d);se(m,t,"popup-blocked");try{m.focus()}catch{}return new S1(m)}function cR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dR="__/auth/handler",fR="emulator/auth/handler",hR=encodeURIComponent("fac");async function k1(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ks,eventId:i};if(e instanceof Hg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iz(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries(s||{}))o[d]=m}if(e instanceof Bl){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${hR}=${encodeURIComponent(l)}`:"";return`${pR(t)}?${jl(a).slice(1)}${u}`}function pR({config:t}){return t.emulator?jg(t,fR):`https://${t.authDomain}/${dR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="webStorageSupport";class mR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gk,this._completeRedirectFn=jN,this._overrideRedirectResult=DN}async _openPopup(e,n,r,i){var s;Lr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await k1(e,n,r,nm(),i);return uR(e,o,Wg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await k1(e,n,r,nm(),i);return vN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rR(e),r=new FN(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ah,{type:Ah},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ah];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ik()||Fg()||Fd()}}const gR=mR;var C1="@firebase/auth",I1="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wR(t){hs(new xi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sk(t)},u=new VA(r,i,s,l);return WA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new xi("auth-internal",e=>{const n=Di(e.getProvider("auth").getImmediate());return(r=>new yR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(C1,I1,vR(t)),cr(C1,I1,"esm2017")}/**
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
 */const _R=5*60,ER=MS("authIdTokenMaxAge")||_R;let b1=null;const SR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ER)return;const i=n==null?void 0:n.token;b1!==i&&(b1=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kR(t=Dg()){const e=$d(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HA(t,{popupRedirectResolver:gR,persistence:[TN,mN,gk]}),r=MS("authTokenSyncURL");if(r){const s=SR(r);uN(n,s,()=>s(n.currentUser)),lN(n,o=>s(o))}const i=OS("auth");return i&&qA(n,`http://${i}`),n}wR("Browser");var CR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,Kg=Kg||{},le=CR||self;function Hd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function IR(t){return Object.prototype.hasOwnProperty.call(t,Nh)&&t[Nh]||(t[Nh]=++bR)}var Nh="closure_uid_"+(1e9*Math.random()>>>0),bR=0;function TR(t,e,n){return t.call.apply(t.bind,arguments)}function xR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=TR:Lt=xR,Lt.apply(null,arguments)}function $u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function wt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Mi(){this.s=this.s,this.o=this.o}var zR=0;Mi.prototype.s=!1;Mi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zR!=0)&&IR(this)};Mi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ck=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function T1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Hd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function jt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}jt.prototype.h=function(){this.defaultPrevented=!0};var AR=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{le.addEventListener("test",()=>{},e),le.removeEventListener("test",()=>{},e)}catch{}return t}();function yl(t){return/^[\s\xa0]*$/.test(t)}function Wd(){var t=le.navigator;return t&&(t=t.userAgent)?t:""}function rr(t){return Wd().indexOf(t)!=-1}function Yg(t){return Yg[" "](t),t}Yg[" "]=function(){};function NR(t,e){var n=kP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var RR=rr("Opera"),To=rr("Trident")||rr("MSIE"),Ik=rr("Edge"),im=Ik||To,bk=rr("Gecko")&&!(Wd().toLowerCase().indexOf("webkit")!=-1&&!rr("Edge"))&&!(rr("Trident")||rr("MSIE"))&&!rr("Edge"),PR=Wd().toLowerCase().indexOf("webkit")!=-1&&!rr("Edge");function Tk(){var t=le.document;return t?t.documentMode:void 0}var sm;e:{var Rh="",Ph=function(){var t=Wd();if(bk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ik)return/Edge\/([\d\.]+)/.exec(t);if(To)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PR)return/WebKit\/(\S+)/.exec(t);if(RR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ph&&(Rh=Ph?Ph[1]:""),To){var Oh=Tk();if(Oh!=null&&Oh>parseFloat(Rh)){sm=String(Oh);break e}}sm=Rh}var om;if(le.document&&To){var x1=Tk();om=x1||parseInt(sm,10)||void 0}else om=void 0;var OR=om;function vl(t,e){if(jt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bk){e:{try{Yg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vl.$.h.call(this)}}wt(vl,jt);var UR={2:"touch",3:"pen",4:"mouse"};vl.prototype.h=function(){vl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wl="closure_listenable_"+(1e6*Math.random()|0),DR=0;function MR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++DR,this.fa=this.ia=!1}function qd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Xg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function LR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xk(t){const e={};for(const n in t)e[n]=t[n];return e}const z1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<z1.length;s++)n=z1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Kd(t){this.src=t,this.g={},this.h=0}Kd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=lm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MR(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function am(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ck(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(qd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Qg="closure_lm_"+(1e6*Math.random()|0),Uh={};function Ak(t,e,n,r,i){if(r&&r.once)return Rk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ak(t,e[s],n,r,i);return null}return n=e0(n),t&&t[Wl]?t.O(e,n,Hl(r)?!!r.capture:!!r,i):Nk(t,e,n,!1,r,i)}function Nk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Hl(i)?!!i.capture:!!i,a=Zg(t);if(a||(t[Qg]=a=new Kd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=jR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)AR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ok(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jR(){function t(n){return e.call(t.src,t.listener,n)}const e=$R;return t}function Rk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Rk(t,e[s],n,r,i);return null}return n=e0(n),t&&t[Wl]?t.P(e,n,Hl(r)?!!r.capture:!!r,i):Nk(t,e,n,!0,r,i)}function Pk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Pk(t,e[s],n,r,i);else r=Hl(r)?!!r.capture:!!r,n=e0(n),t&&t[Wl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=lm(s,n,r,i),-1<n&&(qd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lm(e,n,r,i)),(n=-1<t?e[t]:null)&&Jg(n))}function Jg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wl])am(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ok(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zg(e))?(am(n,t),n.h==0&&(n.src=null,e[Qg]=null)):qd(t)}}}function Ok(t){return t in Uh?Uh[t]:Uh[t]="on"+t}function $R(t,e){if(t.fa)t=!0;else{e=new vl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Jg(t),t=n.call(r,e)}return t}function Zg(t){return t=t[Qg],t instanceof Kd?t:null}var Dh="__closure_events_fn_"+(1e9*Math.random()>>>0);function e0(t){return typeof t=="function"?t:(t[Dh]||(t[Dh]=function(e){return t.handleEvent(e)}),t[Dh])}function vt(){Mi.call(this),this.i=new Kd(this),this.S=this,this.J=null}wt(vt,Mi);vt.prototype[Wl]=!0;vt.prototype.removeEventListener=function(t,e,n,r){Pk(this,t,e,n,r)};function xt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new jt(e,t);else if(e instanceof jt)e.target=e.target||t;else{var i=e;e=new jt(r,t),zk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Fu(o,r,!0,e)&&i}if(o=e.g=t,i=Fu(o,r,!0,e)&&i,i=Fu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Fu(o,r,!1,e)&&i}vt.prototype.N=function(){if(vt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)qd(n[r]);delete t.g[e],t.h--}}this.J=null};vt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};vt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&am(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var t0=le.JSON.stringify;class FR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function BR(){var t=n0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VR{constructor(){this.h=this.g=null}add(e,n){const r=Uk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Uk=new FR(()=>new HR,t=>t.reset());class HR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qR(t){le.setTimeout(()=>{throw t},0)}let wl,_l=!1,n0=new VR,Dk=()=>{const t=le.Promise.resolve(void 0);wl=()=>{t.then(KR)}};var KR=()=>{for(var t;t=BR();){try{t.h.call(t.g)}catch(n){qR(n)}var e=Uk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_l=!1};function Gd(t,e){vt.call(this),this.h=t||1,this.g=e||le,this.j=Lt(this.qb,this),this.l=Date.now()}wt(Gd,vt);H=Gd.prototype;H.ga=!1;H.T=null;H.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(r0(this),this.start()))}};H.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function r0(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}H.N=function(){Gd.$.N.call(this),r0(this),delete this.g};function i0(t,e,n){if(typeof t=="function")n&&(t=Lt(t,n));else if(t&&typeof t.handleEvent=="function")t=Lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function Mk(t){t.g=i0(()=>{t.g=null,t.i&&(t.i=!1,Mk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GR extends Mi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mk(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function El(t){Mi.call(this),this.h=t,this.g={}}wt(El,Mi);var A1=[];function Lk(t,e,n,r){Array.isArray(n)||(n&&(A1[0]=n.toString()),n=A1);for(var i=0;i<n.length;i++){var s=Ak(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function jk(t){Xg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jg(e)},t),t.g={}}El.prototype.N=function(){El.$.N.call(this),jk(this)};El.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yd(){this.g=!0}Yd.prototype.Ea=function(){this.g=!1};function YR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var d=u[0];u=u[1];var m=d.split("_");o=2<=m.length&&m[1]=="type"?o+(d+"="+u+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function XR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function to(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JR(t,n)+(r?" "+r:"")})}function QR(t,e){t.info(function(){return"TIMEOUT: "+e})}Yd.prototype.info=function(){};function JR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return t0(n)}catch{return e}}var bs={},N1=null;function Xd(){return N1=N1||new vt}bs.Ta="serverreachability";function $k(t){jt.call(this,bs.Ta,t)}wt($k,jt);function Sl(t){const e=Xd();xt(e,new $k(e))}bs.STAT_EVENT="statevent";function Fk(t,e){jt.call(this,bs.STAT_EVENT,t),this.stat=e}wt(Fk,jt);function Yt(t){const e=Xd();xt(e,new Fk(e,t))}bs.Ua="timingevent";function Bk(t,e){jt.call(this,bs.Ua,t),this.size=e}wt(Bk,jt);function ql(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var Qd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function s0(){}s0.prototype.h=null;function R1(t){return t.h||(t.h=t.i())}function Hk(){}var Kl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function o0(){jt.call(this,"d")}wt(o0,jt);function a0(){jt.call(this,"c")}wt(a0,jt);var um;function Jd(){}wt(Jd,s0);Jd.prototype.g=function(){return new XMLHttpRequest};Jd.prototype.i=function(){return{}};um=new Jd;function Gl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new El(this),this.P=ZR,t=im?125:void 0,this.V=new Gd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Wk}function Wk(){this.i=null,this.g="",this.h=!1}var ZR=45e3,cm={},Qc={};H=Gl.prototype;H.setTimeout=function(t){this.P=t};function dm(t,e,n){t.L=1,t.v=ef(jr(e)),t.s=n,t.S=!0,qk(t,null)}function qk(t,e){t.G=Date.now(),Yl(t),t.A=jr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),eC(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Wk,t.g=EC(t.l,n?e:null,!t.s),0<t.O&&(t.M=new GR(Lt(t.Pa,t,t.g),t.O)),Lk(t.U,t.g,"readystatechange",t.nb),e=t.I?xk(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Sl(),YR(t.j,t.u,t.A,t.m,t.W,t.s)}H.nb=function(t){t=t.target;const e=this.M;e&&ir(t)==3?e.l():this.Pa(t)};H.Pa=function(t){try{if(t==this.g)e:{const d=ir(this.g);var e=this.g.Ia();const m=this.g.da();if(!(3>d)&&(d!=3||im||this.g&&(this.h.h||this.g.ja()||D1(this.g)))){this.J||d!=4||e==7||(e==8||0>=m?Sl(3):Sl(2)),Zd(this);var n=this.g.da();this.ca=n;t:if(Kk(this)){var r=D1(this.g);t="";var i=r.length,s=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ji(this),Va(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,XR(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yl(a)){var u=a;break t}}u=null}if(n=u)to(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fm(this,n);else{this.i=!1,this.o=3,Yt(12),Ji(this),Va(this);break e}}this.S?(Gk(this,d,o),im&&this.i&&d==3&&(Lk(this.U,this.V,"tick",this.mb),this.V.start())):(to(this.j,this.m,o,null),fm(this,o)),d==4&&Ji(this),this.i&&!this.J&&(d==4?yC(this.l,this):(this.i=!1,Yl(this)))}else _P(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Yt(12)):(this.o=0,Yt(13)),Ji(this),Va(this)}}}catch{}finally{}};function Kk(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Gk(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=eP(t,n),i==Qc){e==4&&(t.o=4,Yt(14),r=!1),to(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cm){t.o=4,Yt(15),to(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else to(t.j,t.m,i,null),fm(t,i);Kk(t)&&i!=Qc&&i!=cm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),h0(e),e.M=!0,Yt(11))):(to(t.j,t.m,n,"[Invalid Chunked Response]"),Ji(t),Va(t))}H.mb=function(){if(this.g){var t=ir(this.g),e=this.g.ja();this.C<e.length&&(Zd(this),Gk(this,t,e),this.i&&t!=4&&Yl(this))}};function eP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Qc:(n=Number(e.substring(n,r)),isNaN(n)?cm:(r+=1,r+n>e.length?Qc:(e=e.slice(r,r+n),t.C=r+n,e)))}H.cancel=function(){this.J=!0,Ji(this)};function Yl(t){t.Y=Date.now()+t.P,Yk(t,t.P)}function Yk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ql(Lt(t.lb,t),e)}function Zd(t){t.B&&(le.clearTimeout(t.B),t.B=null)}H.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(QR(this.j,this.A),this.L!=2&&(Sl(),Yt(17)),Ji(this),this.o=2,Va(this)):Yk(this,this.Y-t)};function Va(t){t.l.H==0||t.J||yC(t.l,t)}function Ji(t){Zd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,r0(t.V),jk(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function fm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hm(n.i,t))){if(!t.K&&hm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ed(n),rf(n);else break e;f0(n),Yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ql(Lt(n.ib,n),6e3));if(1>=rC(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zi(n,11)}else if((t.K||n.g==t)&&ed(n),!yl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const d=u[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const m=u[4];m!=null&&(n.Ga=m,n.l.info("SVER="+n.Ga));const g=u[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const E=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(l0(s,s.h),s.h=null))}if(r.F){const v=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Le(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=_C(r,r.J?r.pa:null,r.Y),o.K){iC(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Zd(a),Yl(a)),r.g=o}else mC(r);0<n.j.length&&sf(n)}else u[0]!="stop"&&u[0]!="close"||Zi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zi(n,7):d0(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Sl(4)}catch{}}function tP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Hd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Hd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Xk(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Hd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nP(t),r=tP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Qk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ss(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ss){this.h=t.h,Jc(this,t.j),this.s=t.s,this.g=t.g,Zc(this,t.m),this.l=t.l;var e=t.i,n=new kl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),P1(this,n),this.o=t.o}else t&&(e=String(t).match(Qk))?(this.h=!1,Jc(this,e[1]||"",!0),this.s=Ta(e[2]||""),this.g=Ta(e[3]||"",!0),Zc(this,e[4]),this.l=Ta(e[5]||"",!0),P1(this,e[6]||"",!0),this.o=Ta(e[7]||"")):(this.h=!1,this.i=new kl(null,this.h))}ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xa(e,O1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xa(e,O1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xa(n,n.charAt(0)=="/"?oP:sP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xa(n,lP)),t.join("")};function jr(t){return new ss(t)}function Jc(t,e,n){t.j=n?Ta(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Zc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function P1(t,e,n){e instanceof kl?(t.i=e,uP(t.i,t.h)):(n||(e=xa(e,aP)),t.i=new kl(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function ef(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ta(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var O1=/[#\/\?@]/g,sP=/[#\?:]/g,oP=/[#\?]/g,aP=/[#\?@]/g,lP=/#/g;function kl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Li(t){t.g||(t.g=new Map,t.h=0,t.i&&rP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=kl.prototype;H.add=function(t,e){Li(this),this.i=null,t=Vo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Jk(t,e){Li(t),e=Vo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Zk(t,e){return Li(t),e=Vo(t,e),t.g.has(e)}H.forEach=function(t,e){Li(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};H.ta=function(){Li(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};H.Z=function(t){Li(this);let e=[];if(typeof t=="string")Zk(this,t)&&(e=e.concat(this.g.get(Vo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};H.set=function(t,e){return Li(this),this.i=null,t=Vo(this,t),Zk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function eC(t,e,n){Jk(t,e),0<n.length&&(t.i=null,t.g.set(Vo(t,e),Gg(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Vo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function uP(t,e){e&&!t.j&&(Li(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Jk(this,r),eC(this,i,n))},t)),t.j=e}var cP=class{constructor(t,e){this.g=t,this.map=e}};function tC(t){this.l=t||dP,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dP=10;function nC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function rC(t){return t.h?1:t.g?t.g.size:0}function hm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function l0(t,e){t.g?t.g.add(e):t.h=e}function iC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}tC.prototype.cancel=function(){if(this.i=sC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function sC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gg(t.i)}var fP=class{stringify(t){return le.JSON.stringify(t,void 0)}parse(t){return le.JSON.parse(t,void 0)}};function hP(){this.g=new fP}function pP(t,e,n){const r=n||"";try{Xk(t,function(i,s){let o=i;Hl(i)&&(o=t0(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function mP(t,e){const n=new Yd;if(le.Image){const r=new Image;r.onload=$u(Bu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$u(Bu,n,r,"TestLoadImage: error",!1,e),r.onabort=$u(Bu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$u(Bu,n,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Bu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xl(t){this.l=t.fc||null,this.j=t.ob||!1}wt(Xl,s0);Xl.prototype.g=function(){return new tf(this.l,this.j)};Xl.prototype.i=function(t){return function(){return t}}({});function tf(t,e){vt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=u0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wt(tf,vt);var u0=0;H=tf.prototype;H.open=function(t,e){if(this.readyState!=u0)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cl(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ql(this)),this.readyState=u0};H.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cl(this)),this.g&&(this.readyState=3,Cl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function oC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}H.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ql(this):Cl(this),this.readyState==3&&oC(this)}};H.Za=function(t){this.g&&(this.response=this.responseText=t,Ql(this))};H.Ya=function(t){this.g&&(this.response=t,Ql(this))};H.ka=function(){this.g&&Ql(this)};function Ql(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cl(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(tf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gP=le.JSON.parse;function Xe(t){vt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=aC,this.L=this.M=!1}wt(Xe,vt);var aC="",yP=/^https?$/i,vP=["POST","PUT"];H=Xe.prototype;H.Oa=function(t){this.M=t};H.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():um.g(),this.C=this.u?R1(this.u):R1(um),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){U1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=le.FormData&&t instanceof le.FormData,!(0<=Ck(vP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cC(this),0<this.B&&((this.L=wP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=i0(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){U1(this,s)}};function wP(t){return To&&typeof t.timeout=="number"&&t.ontimeout!==void 0}H.ua=function(){typeof Kg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function U1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lC(t),nf(t)}function lC(t){t.F||(t.F=!0,xt(t,"complete"),xt(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),nf(this))};H.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nf(this,!0)),Xe.$.N.call(this)};H.La=function(){this.s||(this.G||this.v||this.l?uC(this):this.kb())};H.kb=function(){uC(this)};function uC(t){if(t.h&&typeof Kg<"u"&&(!t.C[1]||ir(t)!=4||t.da()!=2)){if(t.v&&ir(t)==4)i0(t.La,0,t);else if(xt(t,"readystatechange"),ir(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Qk)[1]||null;!i&&le.self&&le.self.location&&(i=le.self.location.protocol.slice(0,-1)),r=!yP.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var s=2<ir(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",lC(t)}}finally{nf(t)}}}}function nf(t,e){if(t.g){cC(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xt(t,"ready");try{n.onreadystatechange=r}catch{}}}function cC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}H.isActive=function(){return!!this.g};function ir(t){return t.g?t.g.readyState:0}H.da=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}};H.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gP(e)}};function D1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case aC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _P(t){const e={};t=(t.g&&2<=ir(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(yl(t[r]))continue;var n=WR(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}LR(e,function(r){return r.join(", ")})}H.Ia=function(){return this.m};H.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dC(t){let e="";return Xg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function c0(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function ga(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fC(t){this.Ga=0,this.j=[],this.l=new Yd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ga("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ga("baseRetryDelayMs",5e3,t),this.hb=ga("retryDelaySeedMs",1e4,t),this.eb=ga("forwardChannelMaxRetries",2,t),this.xa=ga("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new tC(t&&t.concurrentRequestLimit),this.Ja=new hP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}H=fC.prototype;H.ra=8;H.H=1;function d0(t){if(hC(t),t.H==3){var e=t.W++,n=jr(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),Jl(t,n),e=new Gl(t,t.l,e),e.L=2,e.v=ef(jr(n)),n=!1,le.navigator&&le.navigator.sendBeacon)try{n=le.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&le.Image&&(new Image().src=e.v,n=!0),n||(e.g=EC(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yl(e)}wC(t)}function rf(t){t.g&&(h0(t),t.g.cancel(),t.g=null)}function hC(t){rf(t),t.u&&(le.clearTimeout(t.u),t.u=null),ed(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function sf(t){if(!nC(t.i)&&!t.m){t.m=!0;var e=t.Na;wl||Dk(),_l||(wl(),_l=!0),n0.add(e,t),t.C=0}}function EP(t,e){return rC(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ql(Lt(t.Na,t,e),vC(t,t.C)),t.C++,!0)}H.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Gl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xk(s),zk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=pC(this,i,e),n=jr(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.F&&Le(n,"X-HTTP-Session-Id",this.F),Jl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(dC(s)))+"&"+e:this.o&&c0(n,this.o,s)),l0(this.i,i),this.bb&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),i.aa=!0,dm(i,n,null)):dm(i,n,e),this.H=2}}else this.H==3&&(t?M1(this,t):this.j.length==0||nC(this.i)||M1(this))};function M1(t,e){var n;e?n=e.m:n=t.W++;const r=jr(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.V),Jl(t,r),t.o&&t.s&&c0(r,t.o,t.s),n=new Gl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=pC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),l0(t.i,n),dm(n,r,e)}function Jl(t,e){t.na&&Xg(t.na,function(n,r){Le(e,r,n)}),t.h&&Xk({},function(n,r){Le(e,r,n)})}function pC(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Lt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const d=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{pP(d,o,"req"+u+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function mC(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wl||Dk(),_l||(wl(),_l=!0),n0.add(e,t),t.A=0}}function f0(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ql(Lt(t.Ma,t),vC(t,t.A)),t.A++,!0)}H.Ma=function(){if(this.u=null,gC(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ql(Lt(this.jb,this),t)}};H.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Yt(10),rf(this),gC(this))};function h0(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function gC(t){t.g=new Gl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=jr(t.wa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.V),Le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Le(e,"TO",t.qa),Le(e,"TYPE","xmlhttp"),Jl(t,e),t.o&&t.s&&c0(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ef(jr(e)),n.s=null,n.S=!0,qk(n,t)}H.ib=function(){this.v!=null&&(this.v=null,rf(this),f0(this),Yt(19))};function ed(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function yC(t,e){var n=null;if(t.g==e){ed(t),h0(t),t.g=null;var r=2}else if(hm(t.i,e))n=e.F,iC(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Xd(),xt(r,new Bk(r,n)),sf(t)}else mC(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&EP(t,e)||r==2&&f0(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Zi(t,5);break;case 4:Zi(t,10);break;case 3:Zi(t,6);break;default:Zi(t,2)}}}function vC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Zi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Lt(t.pb,t);n||(n=new ss("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||Jc(n,"https"),ef(n)),mP(n.toString(),r)}else Yt(2);t.H=0,t.h&&t.h.za(e),wC(t),hC(t)}H.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Yt(2)):(this.l.info("Failed to ping google.com"),Yt(1))};function wC(t){if(t.H=0,t.ma=[],t.h){const e=sC(t.i);(e.length!=0||t.j.length!=0)&&(T1(t.ma,e),T1(t.ma,t.j),t.i.i.length=0,Gg(t.j),t.j.length=0),t.h.ya()}}function _C(t,e,n){var r=n instanceof ss?jr(n):new ss(n);if(r.g!="")e&&(r.g=e+"."+r.g),Zc(r,r.m);else{var i=le.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ss(null);r&&Jc(s,r),e&&(s.g=e),i&&Zc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Le(r,n,e),Le(r,"VER",t.ra),Jl(t,r),r}function EC(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Xe(new Xl({ob:!0})):new Xe(t.va),e.Oa(t.J),e}H.isActive=function(){return!!this.h&&this.h.isActive(this)};function SC(){}H=SC.prototype;H.Ba=function(){};H.Aa=function(){};H.za=function(){};H.ya=function(){};H.isActive=function(){return!0};H.Va=function(){};function td(){if(To&&!(10<=Number(OR)))throw Error("Environmental error: no available transport.")}td.prototype.g=function(t,e){return new _n(t,e)};function _n(t,e){vt.call(this),this.g=new fC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!yl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!yl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ho(this)}wt(_n,vt);_n.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Yt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=_C(t,null,t.Y),sf(t)};_n.prototype.close=function(){d0(this.g)};_n.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=t0(t),t=n);e.j.push(new cP(e.fb++,t)),e.H==3&&sf(e)};_n.prototype.N=function(){this.g.h=null,delete this.j,d0(this.g),delete this.g,_n.$.N.call(this)};function kC(t){o0.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}wt(kC,o0);function CC(){a0.call(this),this.status=1}wt(CC,a0);function Ho(t){this.g=t}wt(Ho,SC);Ho.prototype.Ba=function(){xt(this.g,"a")};Ho.prototype.Aa=function(t){xt(this.g,new kC(t))};Ho.prototype.za=function(t){xt(this.g,new CC)};Ho.prototype.ya=function(){xt(this.g,"b")};function SP(){this.blockSize=-1}function Wn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}wt(Wn,SP);Wn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Mh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Wn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Mh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Mh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Mh(this,r),i=0;break}}this.h=i,this.i+=e};Wn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ze(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var kP={};function p0(t){return-128<=t&&128>t?NR(t,function(e){return new ze([e|0],0>e?-1:0)}):new ze([t|0],0>t?-1:0)}function sr(t){if(isNaN(t)||!isFinite(t))return ho;if(0>t)return bt(sr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=pm;return new ze(e,0)}function IC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return bt(IC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sr(Math.pow(e,8)),r=ho,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=sr(Math.pow(e,s)),r=r.R(s).add(sr(o))):(r=r.R(n),r=r.add(sr(o)))}return r}var pm=4294967296,ho=p0(0),mm=p0(1),L1=p0(16777216);H=ze.prototype;H.ea=function(){if(zn(this))return-bt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:pm+r)*e,e*=pm}return t};H.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Nr(this))return"0";if(zn(this))return"-"+bt(this).toString(t);for(var e=sr(Math.pow(t,6)),n=this,r="";;){var i=rd(n,e).g;n=nd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Nr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};H.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Nr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zn(t){return t.h==-1}H.X=function(t){return t=nd(this,t),zn(t)?-1:Nr(t)?0:1};function bt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ze(n,~t.h).add(mm)}H.abs=function(){return zn(this)?bt(this):this};H.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ze(n,n[n.length-1]&-2147483648?-1:0)};function nd(t,e){return t.add(bt(e))}H.R=function(t){if(Nr(this)||Nr(t))return ho;if(zn(this))return zn(t)?bt(this).R(bt(t)):bt(bt(this).R(t));if(zn(t))return bt(this.R(bt(t)));if(0>this.X(L1)&&0>t.X(L1))return sr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Vu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Vu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Vu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Vu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ze(n,0)};function Vu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ya(t,e){this.g=t,this.h=e}function rd(t,e){if(Nr(e))throw Error("division by zero");if(Nr(t))return new ya(ho,ho);if(zn(t))return e=rd(bt(t),e),new ya(bt(e.g),bt(e.h));if(zn(e))return e=rd(t,bt(e)),new ya(bt(e.g),e.h);if(30<t.g.length){if(zn(t)||zn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=mm,r=e;0>=r.X(t);)n=j1(n),r=j1(r);var i=js(n,1),s=js(r,1);for(r=js(r,2),n=js(n,2);!Nr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=js(r,1),n=js(n,1)}return e=nd(t,i.R(e)),new ya(i,e)}for(i=ho;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=sr(n),o=s.R(e);zn(o)||0<o.X(t);)n-=r,s=sr(n),o=s.R(e);Nr(s)&&(s=mm),i=i.add(s),t=nd(t,o)}return new ya(i,t)}H.gb=function(t){return rd(this,t).h};H.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ze(n,this.h&t.h)};H.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ze(n,this.h|t.h)};H.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ze(n,this.h^t.h)};function j1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ze(n,t.h)}function js(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ze(i,t.h)}td.prototype.createWebChannel=td.prototype.g;_n.prototype.send=_n.prototype.u;_n.prototype.open=_n.prototype.m;_n.prototype.close=_n.prototype.close;Qd.NO_ERROR=0;Qd.TIMEOUT=8;Qd.HTTP_ERROR=6;Vk.COMPLETE="complete";Hk.EventType=Kl;Kl.OPEN="a";Kl.CLOSE="b";Kl.ERROR="c";Kl.MESSAGE="d";vt.prototype.listen=vt.prototype.O;Xe.prototype.listenOnce=Xe.prototype.P;Xe.prototype.getLastError=Xe.prototype.Sa;Xe.prototype.getLastErrorCode=Xe.prototype.Ia;Xe.prototype.getStatus=Xe.prototype.da;Xe.prototype.getResponseJson=Xe.prototype.Wa;Xe.prototype.getResponseText=Xe.prototype.ja;Xe.prototype.send=Xe.prototype.ha;Xe.prototype.setWithCredentials=Xe.prototype.Oa;Wn.prototype.digest=Wn.prototype.l;Wn.prototype.reset=Wn.prototype.reset;Wn.prototype.update=Wn.prototype.j;ze.prototype.add=ze.prototype.add;ze.prototype.multiply=ze.prototype.R;ze.prototype.modulo=ze.prototype.gb;ze.prototype.compare=ze.prototype.X;ze.prototype.toNumber=ze.prototype.ea;ze.prototype.toString=ze.prototype.toString;ze.prototype.getBits=ze.prototype.D;ze.fromNumber=sr;ze.fromString=IC;var CP=function(){return new td},IP=function(){return Xd()},Lh=Qd,bP=Vk,TP=bs,$1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},xP=Xl,Hu=Hk,zP=Xe,AP=Wn,po=ze;const F1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Og("@firebase/firestore");function B1(){return gs.logLevel}function ee(t,...e){if(gs.logLevel<=Ce.DEBUG){const n=e.map(m0);gs.debug(`Firestore (${Wo}): ${t}`,...n)}}function $r(t,...e){if(gs.logLevel<=Ce.ERROR){const n=e.map(m0);gs.error(`Firestore (${Wo}): ${t}`,...n)}}function xo(t,...e){if(gs.logLevel<=Ce.WARN){const n=e.map(m0);gs.warn(`Firestore (${Wo}): ${t}`,...n)}}function m0(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+t;throw $r(e),new Error(e)}function Fe(t,e){t||oe()}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends yr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class RP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let PP=class{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new bC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Ot(e)}};class OP{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class UP{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new OP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.T=n.token,new DP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=LP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function zo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new dt(0,0))}static max(){return new ue(new dt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Il{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new je(n)}static emptyPath(){return new je([])}}const jP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Il{construct(e,n,r){return new Mt(e,n,r)}static isValidIdentifier(e){return jP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(je.fromString(e))}static fromName(e){return new re(je.fromString(e).popFirst(5))}static empty(){return new re(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new je(e.slice()))}}function $P(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ue.fromTimestamp(r===1e9?new dt(n+1,0):new dt(n,r));return new zi(i,re.empty(),e)}function FP(t){return new zi(t.readTime,t.key,-1)}class zi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zi(ue.min(),re.empty(),-1)}static max(){return new zi(ue.max(),re.empty(),-1)}}function BP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==VP)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function eu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}g0.ct=-1;function of(t){return t==null}function id(t){return t===0&&1/t==-1/0}function WP(t){return typeof t=="number"&&Number.isInteger(t)&&!id(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||It.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}}class Wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??It.RED,this.left=i??It.EMPTY,this.right=s??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new It(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return It.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,r,i){return this}insert(t,e,n){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new H1(this.data.getIterator())}getIteratorFrom(e){return new H1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $t(this.comparator);return n.data=e,n}}class H1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new gn([])}unionWith(e){let n=new $t(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zC("Invalid base64 string: "+i):i}}(e);return new Vt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const qP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=qP.exec(t);if(Fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ys(t){return typeof t=="string"?Vt.fromBase64String(t):Vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function v0(t){const e=t.mapValue.fields.__previous_value__;return y0(e)?v0(e):e}function bl(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Tl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?y0(t)?4:GP(t)?9007199254740991:10:oe()}function mr(t,e){if(t===e)return!0;const n=vs(t);if(n!==vs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bl(t).isEqual(bl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ai(r.timestampValue),o=Ai(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ys(r.bytesValue).isEqual(ys(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return st(r.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(r.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return st(r.integerValue)===st(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=st(r.doubleValue),o=st(i.doubleValue);return s===o?id(s)===id(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return zo(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(V1(s)!==V1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!mr(s[a],o[a])))return!1;return!0}(t,e);default:return oe()}}function xl(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function Ao(t,e){if(t===e)return 0;const n=vs(t),r=vs(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=st(i.integerValue||i.doubleValue),a=st(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return W1(t.timestampValue,e.timestampValue);case 4:return W1(bl(t),bl(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ys(i),a=ys(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=be(o[l],a[l]);if(u!==0)return u}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=be(st(i.latitude),st(s.latitude));return o!==0?o:be(st(i.longitude),st(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Ao(o[l],a[l]);if(u)return u}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===qu.mapValue&&s===qu.mapValue)return 0;if(i===qu.mapValue)return 1;if(s===qu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let d=0;d<a.length&&d<u.length;++d){const m=be(a[d],u[d]);if(m!==0)return m;const g=Ao(o[a[d]],l[u[d]]);if(g!==0)return g}return be(a.length,u.length)}(t.mapValue,e.mapValue);default:throw oe()}}function W1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ai(t),r=Ai(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function No(t){return gm(t)}function gm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ai(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ys(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,re.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=gm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${gm(r.fields[a])}`;return s+"}"}(t.mapValue):oe();var e,n}function q1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ym(t){return!!t&&"integerValue"in t}function w0(t){return!!t&&"arrayValue"in t}function K1(t){return!!t&&"nullValue"in t}function G1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pc(t){return!!t&&"mapValue"in t}function Ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ha(n)}setAll(e){let n=Mt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ha(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new on(Ha(this.value))}}function AC(t){const e=[];return Ts(t.fields,(n,r)=>{const i=new Mt([n]);if(pc(r)){const s=AC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,ue.min(),ue.min(),ue.min(),on.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,ue.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,ue.min(),ue.min(),on.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ue.min(),ue.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sd{constructor(e,n){this.position=e,this.inclusive=n}}function Y1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ao(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function X1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function YP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class NC{}class at extends NC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QP(e,n,r):n==="array-contains"?new eO(e,r):n==="in"?new tO(e,r):n==="not-in"?new nO(e,r):n==="array-contains-any"?new rO(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new JP(e,r):new ZP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ao(n,this.value)):n!==null&&vs(this.value)===vs(n)&&this.matchesComparison(Ao(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class qn extends NC{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new qn(e,n)}matches(e){return RC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function RC(t){return t.op==="and"}function PC(t){return XP(t)&&RC(t)}function XP(t){for(const e of t.filters)if(e instanceof qn)return!1;return!0}function vm(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+No(t.value);if(PC(t))return t.filters.map(e=>vm(e)).join(",");{const e=t.filters.map(n=>vm(n)).join(",");return`${t.op}(${e})`}}function OC(t,e){return t instanceof at?function(n,r){return r instanceof at&&n.op===r.op&&n.field.isEqual(r.field)&&mr(n.value,r.value)}(t,e):t instanceof qn?function(n,r){return r instanceof qn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&OC(s,r.filters[o]),!0):!1}(t,e):void oe()}function UC(t){return t instanceof at?function(e){return`${e.field.canonicalString()} ${e.op} ${No(e.value)}`}(t):t instanceof qn?function(e){return e.op.toString()+" {"+e.getFilters().map(UC).join(" ,")+"}"}(t):"Filter"}class QP extends at{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class JP extends at{constructor(e,n){super(e,"in",n),this.keys=DC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZP extends at{constructor(e,n){super(e,"not-in",n),this.keys=DC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function DC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class eO extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return w0(n)&&xl(n.arrayValue,this.value)}}class tO extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xl(this.value.arrayValue,n)}}class nO extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xl(this.value.arrayValue,n)}}class rO extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!w0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xl(this.value.arrayValue,r))}}/**
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
 */class iO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Q1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iO(t,e,n,r,i,s,o)}function _0(t){const e=fe(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),of(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>No(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>No(r)).join(",")),e.dt=n}return e.dt}function E0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!YP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!OC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!X1(t.startAt,e.startAt)&&X1(t.endAt,e.endAt)}function wm(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function sO(t,e,n,r,i,s,o,a){return new tu(t,e,n,r,i,s,o,a)}function S0(t){return new tu(t)}function J1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MC(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function k0(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function LC(t){return t.collectionGroup!==null}function mo(t){const e=fe(t);if(e.wt===null){e.wt=[];const n=k0(e),r=MC(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Wa(n)),e.wt.push(new Wa(Mt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Wa(Mt.keyField(),s))}}}return e.wt}function Fr(t){const e=fe(t);if(!e._t)if(e.limitType==="F")e._t=Q1(e.path,e.collectionGroup,mo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of mo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Wa(s.field,o))}const r=e.endAt?new sd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new sd(e.startAt.position,e.startAt.inclusive):null;e._t=Q1(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function _m(t,e){e.getFirstInequalityField(),k0(t);const n=t.filters.concat([e]);return new tu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Em(t,e,n){return new tu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function af(t,e){return E0(Fr(t),Fr(e))&&t.limitType===e.limitType}function jC(t){return`${_0(Fr(t))}|lt:${t.limitType}`}function Sm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>UC(r)).join(", ")}]`),of(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>No(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>No(r)).join(",")),`Target(${n})`}(Fr(t))}; limitType=${t.limitType})`}function lf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):re.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of mo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Y1(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,mo(n),r)||n.endAt&&!function(i,s,o){const a=Y1(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,mo(n),r))}(t,e)}function oO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $C(t){return(e,n)=>{let r=!1;for(const i of mo(t)){const s=aO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aO(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Ao(a,l):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=new Ke(re.comparator);function Br(){return lO}const FC=new Ke(re.comparator);function za(...t){let e=FC;for(const n of t)e=e.insert(n.key,n);return e}function BC(t){let e=FC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function es(){return qa()}function VC(){return qa()}function qa(){return new qo(t=>t.toString(),(t,e)=>t.isEqual(e))}const uO=new Ke(re.comparator),cO=new $t(re.comparator);function pe(...t){let e=cO;for(const n of t)e=e.add(n);return e}const dO=new $t(be);function fO(){return dO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:id(e)?"-0":e}}function WC(t){return{integerValue:""+t}}function hO(t,e){return WP(e)?WC(e):HC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this._=void 0}}function pO(t,e,n){return t instanceof od?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&y0(i)&&(i=v0(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ro?KC(t,e):t instanceof Po?GC(t,e):function(r,i){const s=qC(r,i),o=Z1(s)+Z1(r.gt);return ym(s)&&ym(r.gt)?WC(o):HC(r.serializer,o)}(t,e)}function mO(t,e,n){return t instanceof Ro?KC(t,e):t instanceof Po?GC(t,e):n}function qC(t,e){return t instanceof ad?ym(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class od extends uf{}class Ro extends uf{constructor(e){super(),this.elements=e}}function KC(t,e){const n=YC(e);for(const r of t.elements)n.some(i=>mr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Po extends uf{constructor(e){super(),this.elements=e}}function GC(t,e){let n=YC(e);for(const r of t.elements)n=n.filter(i=>!mr(i,r));return{arrayValue:{values:n}}}class ad extends uf{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Z1(t){return st(t.integerValue||t.doubleValue)}function YC(t){return w0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n){this.field=e,this.transform=n}}function gO(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ro&&r instanceof Ro||n instanceof Po&&r instanceof Po?zo(n.elements,r.elements,mr):n instanceof ad&&r instanceof ad?mr(n.gt,r.gt):n instanceof od&&r instanceof od}(t.transform,e.transform)}class yO{constructor(e,n){this.version=e,this.transformResults=n}}class hr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cf{}function QC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZC(t.key,hr.none()):new nu(t.key,t.data,hr.none());{const n=t.data,r=on.empty();let i=new $t(Mt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ji(t.key,r,new gn(i.toArray()),hr.none())}}function vO(t,e,n){t instanceof nu?function(r,i,s){const o=r.value.clone(),a=tw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(r,i,s){if(!mc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=tw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(JC(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ka(t,e,n,r){return t instanceof nu?function(i,s,o,a){if(!mc(i.precondition,s))return o;const l=i.value.clone(),u=nw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(i,s,o,a){if(!mc(i.precondition,s))return o;const l=nw(i.fieldTransforms,a,s),u=s.data;return u.setAll(JC(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,s,o){return mc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function wO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qC(r.transform,i||null);s!=null&&(n===null&&(n=on.empty()),n.set(r.field,s))}return n||null}function ew(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&zo(n,r,(i,s)=>gO(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nu extends cf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends cf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function JC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tw(t,e,n){const r=new Map;Fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,mO(o,a,n[i]))}return r}function nw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,pO(s,o,e))}return r}class ZC extends cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _O extends cf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VC();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=QC(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&zo(this.mutations,e.mutations,(n,r)=>ew(n,r))&&zo(this.baseMutations,e.baseMutations,(n,r)=>ew(n,r))}}class C0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length);let i=uO;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new C0(e,n,r,i)}}/**
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
 */class SO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,we;function CO(t){switch(t){default:return oe();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function e2(t){if(t===void 0)return $r("GRPC error has no .code"),U.UNKNOWN;switch(t){case it.OK:return U.OK;case it.CANCELLED:return U.CANCELLED;case it.UNKNOWN:return U.UNKNOWN;case it.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case it.INTERNAL:return U.INTERNAL;case it.UNAVAILABLE:return U.UNAVAILABLE;case it.UNAUTHENTICATED:return U.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case it.NOT_FOUND:return U.NOT_FOUND;case it.ALREADY_EXISTS:return U.ALREADY_EXISTS;case it.PERMISSION_DENIED:return U.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case it.ABORTED:return U.ABORTED;case it.OUT_OF_RANGE:return U.OUT_OF_RANGE;case it.UNIMPLEMENTED:return U.UNIMPLEMENTED;case it.DATA_LOSS:return U.DATA_LOSS;default:return oe()}}(we=it||(it={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class I0{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ku}static getOrCreateInstance(){return Ku===null&&(Ku=new I0),Ku}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ku=null;/**
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
 */function IO(){return new TextEncoder}/**
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
 */const bO=new po([4294967295,4294967295],0);function rw(t){const e=IO().encode(t),n=new AP;return n.update(e),new Uint8Array(n.digest())}function iw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new po([n,r],0),new po([i,s],0)]}class b0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Aa(`Invalid padding: ${n}`);if(r<0)throw new Aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=po.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(po.fromNumber(r)));return i.compare(bO)===1&&(i=new po([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=rw(e),[r,i]=iw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new b0(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=rw(e),[r,i]=iw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ru.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new df(ue.min(),i,new Ke(be),Br(),pe())}}class ru{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ru(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class t2{constructor(e,n){this.targetId=e,this.Vt=n}}class n2{constructor(e,n,r=Vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sw{constructor(){this.St=0,this.Dt=aw(),this.Ct=Vt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=pe(),n=pe(),r=pe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new ru(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=aw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class TO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Br(),this.zt=ow(),this.Wt=new Ke(be)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(wm(o))if(i===0){const a=new re(o.path);this.Yt(r,a,Dt.newNoDocument(a,ue.min()))}else Fe(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=I0.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,d,m){var g,y,E,v,c,f;const h={localCacheCount:d,existenceFilterCount:m.count},p=m.unchangedNames;return p&&(h.bloomFilter={applied:u===0,hashCount:(g=p==null?void 0:p.hashCount)!==null&&g!==void 0?g:0,bitmapLength:(v=(E=(y=p==null?void 0:p.bits)===null||y===void 0?void 0:y.bitmap)===null||E===void 0?void 0:E.length)!==null&&v!==void 0?v:0,padding:(f=(c=p==null?void 0:p.bits)===null||c===void 0?void 0:c.padding)!==null&&f!==void 0?f:0}),h}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ys(s).toUint8Array()}catch(d){if(d instanceof zC)return xo("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw d}try{u=new b0(l,o,a)}catch(d){return xo(d instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",d),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&wm(a.target)){const l=new re(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Dt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=pe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new df(e,n,this.Wt,this.jt,r);return this.jt=Br(),this.zt=ow(),this.Wt=new Ke(be),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new sw,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new $t(be),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new sw),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function ow(){return new Ke(re.comparator)}function aw(){return new Ke(re.comparator)}const xO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),AO=(()=>({and:"AND",or:"OR"}))();class NO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function km(t,e){return t.useProto3Json||of(e)?e:{value:e}}function ld(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RO(t,e){return ld(t,e.toTimestamp())}function pr(t){return Fe(!!t),ue.fromTimestamp(function(e){const n=Ai(e);return new dt(n.seconds,n.nanos)}(t))}function T0(t,e){return function(n){return new je(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function i2(t){const e=je.fromString(t);return Fe(l2(e)),e}function Cm(t,e){return T0(t.databaseId,e.path)}function jh(t,e){const n=i2(e);if(n.get(1)!==t.databaseId.projectId)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(s2(n))}function Im(t,e){return T0(t.databaseId,e)}function PO(t){const e=i2(t);return e.length===4?je.emptyPath():s2(e)}function bm(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function s2(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lw(t,e,n){return{name:Cm(t,e),fields:n.value.mapValue.fields}}function OO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Fe(u===void 0||typeof u=="string"),Vt.fromBase64String(u||"")):(Fe(u===void 0||u instanceof Uint8Array),Vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?U.UNKNOWN:e2(l.code);return new G(u,l.message||"")}(o);n=new n2(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jh(t,r.document.name),s=pr(r.document.updateTime),o=r.document.createTime?pr(r.document.createTime):ue.min(),a=new on({mapValue:{fields:r.document.fields}}),l=Dt.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new gc(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jh(t,r.document),s=r.readTime?pr(r.readTime):ue.min(),o=Dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new gc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jh(t,r.document),s=r.removedTargetIds||[];n=new gc([],s,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kO(i,s),a=r.targetId;n=new t2(a,o)}}return n}function UO(t,e){let n;if(e instanceof nu)n={update:lw(t,e.key,e.value)};else if(e instanceof ZC)n={delete:Cm(t,e.key)};else if(e instanceof ji)n={update:lw(t,e.key,e.data),updateMask:HO(e.fieldMask)};else{if(!(e instanceof _O))return oe();n={verify:Cm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof od)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Po)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ad)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:RO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function DO(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?pr(r.updateTime):pr(i);return s.isEqual(ue.min())&&(s=pr(i)),new yO(s,r.transformResults||[])}(n,e))):[]}function MO(t,e){return{documents:[Im(t,e.path)]}}function LO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Im(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Im(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return a2(qn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Fs(d.field),direction:FO(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=km(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function jO(t){let e=PO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(d){const m=o2(d);return m instanceof qn&&PC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(d=>function(m){return new Wa(Bs(m.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d)));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,of(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,g=d.values||[];return new sd(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new sd(g,m)}(n.endAt)),sO(e,i,o,s,a,"F",l,u)}function $O(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function o2(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Bs(e.unaryFilter.field);return at.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Bs(e.unaryFilter.field);return at.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bs(e.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Bs(e.unaryFilter.field);return at.create(s,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(e){return at.create(Bs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return qn.create(e.compositeFilter.filters.map(n=>o2(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return oe()}}(e.compositeFilter.op))}(t):oe()}function FO(t){return xO[t]}function BO(t){return zO[t]}function VO(t){return AO[t]}function Fs(t){return{fieldPath:t.canonicalString()}}function Bs(t){return Mt.fromServerFormat(t.fieldPath)}function a2(t){return t instanceof at?function(e){if(e.op==="=="){if(G1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NAN"}};if(K1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(G1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NAN"}};if(K1(e.value))return{unaryFilter:{field:Fs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fs(e.field),op:BO(e.op),value:e.value}}}(t):t instanceof qn?function(e){const n=e.getFilters().map(r=>a2(r));return n.length===1?n[0]:{compositeFilter:{op:VO(e.op),filters:n}}}(t):oe()}function HO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function l2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r,i,s=ue.min(),o=ue.min(),a=Vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.fe=e}}function qO(t){const e=jO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Em(e,e.limit,"L"):e}/**
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
 */class KO{constructor(){this.rn=new GO}addToCollectionParentIndex(e,n){return this.rn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(zi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(zi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class GO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $t(je.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $t(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Oo(0)}static Mn(){return new Oo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(){this.changes=new qo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class XO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ka(r.mutation,i,gn.empty(),dt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=es();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=za();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Br();const o=qa(),a=qa();return n.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof ji)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ka(d.mutation,u,d.mutation.getFieldMask(),dt.now())):o.set(u.key,gn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var m;return a.set(u,new XO(d,(m=o.get(u))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qa();let i=new Ke((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||gn.empty();d=a.applyToLocalView(u,d),r.set(l,d);const m=(i.get(a.batchId)||pe()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,m=VC();d.forEach(g=>{if(!s.has(g)){const y=QC(n.get(g),r.get(g));y!==null&&m.set(g,y),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return re.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(es());let a=-1,l=s;return o.next(u=>$.forEach(u,(d,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,pe())).next(d=>({batchId:a,changes:BC(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=za();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=za();return this.indexManager.getCollectionParents(e,i).next(o=>$.forEach(o,a=>{const l=function(u,d){return new tu(d,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((d,m)=>{s=s.insert(d,m)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Dt.newInvalidDocument(u)))});let o=za();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ka(u.mutation,l,gn.empty(),dt.now()),lf(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return $.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:pr(r.createTime)}),$.resolve()}getNamedQuery(e,n){return $.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:qO(r.bundledQuery),readTime:pr(r.readTime)}}(n)),$.resolve()}}/**
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
 */class ZO{constructor(){this.overlays=new Ke(re.comparator),this.ls=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=es();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=es(),s=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ke((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=es(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=es(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return $.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SO(n,r));let s=this.ls.get(n);s===void 0&&(s=pe(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.fs=new $t(pt.ds),this.ws=new $t(pt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new pt(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new pt(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new re(new je([])),r=new pt(n,e),i=new pt(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new re(new je([])),r=new pt(n,e),i=new pt(n,e+1);let s=pe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return re.comparator(e.key,n.key)||be(e.As,n.As)}static _s(e,n){return be(e.As,n.As)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new $t(pt.ds)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),i=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $t(be);return n.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),$.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new pt(new re(s),0);let a=new $t(be);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),$.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return $.forEach(n.mutations,i=>{const s=new pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new pt(n,0),i=this.Rs.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.Ds=e,this.docs=new Ke(re.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=Br();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Br();const o=n.path,a=new re(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||BP(FP(d),r)<=0||(i.has(d.key)||lf(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){oe()}Cs(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new n4(this)}getSize(e){return $.resolve(this.size)}}class n4 extends YO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e){this.persistence=e,this.xs=new qo(n=>_0(n),E0),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Ns=0,this.ks=new x0,this.targetCount=0,this.Ms=Oo.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),$.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Oo(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Fn(n),$.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n){this.$s={},this.overlays={},this.Os=new g0(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new r4(this),this.indexManager=new KO,this.remoteDocumentCache=function(r){return new t4(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new WO(n),this.qs=new JO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new e4(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new s4(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return $.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class s4 extends HP{constructor(e){super(),this.currentSequenceNumber=e}}class z0{constructor(e){this.persistence=e,this.Qs=new x0,this.js=null}static zs(e){return new z0(e)}get Ws(){if(this.js)return this.js;throw oe()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),$.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Ws,r=>{const i=re.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,ue.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return $.or([()=>$.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=pe(),i=pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new A0(e,n.fromCache,r,i)}}/**
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
 */class o4{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(J1(n))return $.resolve(null);let r=Fr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Em(n,null,"F"),r=Fr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Em(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return J1(n)||i.isEqual(ue.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(B1()<=Ce.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sm(n)),this.Wi(e,o,n,$P(i,-1)))})}ji(e,n){let r=new $t($C(e));return n.forEach((i,s)=>{lf(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return B1()<=Ce.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Sm(n)),this.Ui.getDocumentsMatchingQuery(e,n,zi.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ke(be),this.Yi=new qo(s=>_0(s),E0),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function l4(t,e,n,r){return new a4(t,e,n,r)}async function u2(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=pe();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function u4(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const d=l.batch,m=d.keys();let g=$.resolve();return m.forEach(y=>{g=g.next(()=>u.getEntry(a,y)).next(E=>{const v=l.docVersions.get(y);Fe(v!==null),E.version.compareTo(v)<0&&(d.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=pe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function c2(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function c4(t,e){const n=fe(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((d,m)=>{const g=i.get(m);if(!g)return;a.push(n.Bs.removeMatchingKeys(s,d.removedDocuments,m).next(()=>n.Bs.addMatchingKeys(s,d.addedDocuments,m)));let y=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?y=y.withResumeToken(Vt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(m,y),function(E,v,c){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0}(g,y,d)&&a.push(n.Bs.updateTargetData(s,y))});let l=Br(),u=pe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(d4(s,o,e.documentUpdates).next(d=>{l=d.nr,u=d.sr})),!r.isEqual(ue.min())){const d=n.Bs.getLastRemoteSnapshotVersion(s).next(m=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function d4(t,e,n){let r=pe(),i=pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Br();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function f4(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function h4(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new ci(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Tm(t,e,n){const r=fe(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!eu(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function uw(t,e,n){const r=fe(t);let i=ue.min(),s=pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const d=fe(a),m=d.Yi.get(u);return m!==void 0?$.resolve(d.Ji.get(m)):d.Bs.getTargetData(l,u)}(r,o,Fr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:ue.min(),n?s:pe())).next(a=>(p4(r,oO(e),a),{documents:a,ir:s})))}function p4(t,e,n){let r=t.Xi.get(e)||ue.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class cw{constructor(){this.activeTargetIds=fO()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class m4{constructor(){this.Hr=new cw,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new cw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g4{Yr(e){}shutdown(){}}/**
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
 */class dw{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gu=null;function $h(){return Gu===null?Gu=268435456+Math.round(2147483648*Math.random()):Gu++,"0x"+Gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class w4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=$h(),a=this.To(e,n);ee("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(ee("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw xo("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=y4[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=$h();return new Promise((o,a)=>{const l=new zP;l.setWithCredentials(!0),l.listenOnce(bP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Lh.NO_ERROR:const d=l.getResponseJson();ee(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Lh.TIMEOUT:ee(Pt,`RPC '${e}' ${s} timed out`),a(new G(U.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const m=l.getStatus();if(ee(Pt,`RPC '${e}' ${s} failed with status:`,m,"response text:",l.getResponseText()),m>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const E=function(v){const c=v.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(c)>=0?c:U.UNKNOWN}(y.status);a(new G(E,y.message))}else a(new G(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new G(U.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{ee(Pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);ee(Pt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=$h(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=CP(),a=IP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new xP({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");ee(Pt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const m=o.createWebChannel(d,l);let g=!1,y=!1;const E=new v4({ro:c=>{y?ee(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,c):(g||(ee(Pt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),ee(Pt,`RPC '${e}' stream ${i} sending:`,c),m.send(c))},oo:()=>m.close()}),v=(c,f,h)=>{c.listen(f,p=>{try{h(p)}catch(w){setTimeout(()=>{throw w},0)}})};return v(m,Hu.EventType.OPEN,()=>{y||ee(Pt,`RPC '${e}' stream ${i} transport opened.`)}),v(m,Hu.EventType.CLOSE,()=>{y||(y=!0,ee(Pt,`RPC '${e}' stream ${i} transport closed`),E.wo())}),v(m,Hu.EventType.ERROR,c=>{y||(y=!0,xo(Pt,`RPC '${e}' stream ${i} transport errored:`,c),E.wo(new G(U.UNAVAILABLE,"The operation could not be completed")))}),v(m,Hu.EventType.MESSAGE,c=>{var f;if(!y){const h=c.data[0];Fe(!!h);const p=h,w=p.error||((f=p[0])===null||f===void 0?void 0:f.error);if(w){ee(Pt,`RPC '${e}' stream ${i} received error:`,w);const _=w.status;let S=function(b){const x=it[b];if(x!==void 0)return e2(x)}(_),C=w.message;S===void 0&&(S=U.INTERNAL,C="Unknown error status: "+_+" with message "+w.message),y=!0,E.wo(new G(S,C)),m.close()}else ee(Pt,`RPC '${e}' stream ${i} received:`,h),E._o(h)}}),v(a,TP.STAT_EVENT,c=>{c.stat===$1.PROXY?ee(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):c.stat===$1.NOPROXY&&ee(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function Fh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){return new NO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new d2(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new G(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _4 extends f2{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=OO(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ue.min():s.readTime?pr(s.readTime):ue.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=bm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=wm(a)?{documents:MO(i,a)}:{query:LO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=r2(i,s.resumeToken);const l=km(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(ue.min())>0){o.readTime=ld(i,s.snapshotVersion.toTimestamp());const l=km(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=$O(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=bm(this.serializer),n.removeTarget=e,this.Wo(n)}}class E4 extends f2{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=DO(e.writeResults,e.commitTime),r=pr(e.commitTime);return this.listener.cu(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=bm(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UO(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(U.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(U.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class k4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?($r(n),this.mu=!1):ee("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{xs(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=fe(a);l.vu.add(4),await iu(l),l.bu.set("Unknown"),l.vu.delete(4),await hf(l)}(this))})}),this.bu=new k4(r,i)}}async function hf(t){if(xs(t))for(const e of t.Ru)await e(!0)}async function iu(t){for(const e of t.Ru)await e(!1)}function h2(t,e){const n=fe(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),P0(n)?R0(n):Ko(n).Ko()&&N0(n,e))}function p2(t,e){const n=fe(t),r=Ko(n);n.Au.delete(e),r.Ko()&&m2(n,e),n.Au.size===0&&(r.Ko()?r.jo():xs(n)&&n.bu.set("Unknown"))}function N0(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ko(t).su(e)}function m2(t,e){t.Vu.qt(e),Ko(t).iu(e)}function R0(t){t.Vu=new TO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Ko(t).start(),t.bu.gu()}function P0(t){return xs(t)&&!Ko(t).Uo()&&t.Au.size>0}function xs(t){return fe(t).vu.size===0}function g2(t){t.Vu=void 0}async function I4(t){t.Au.forEach((e,n)=>{N0(t,e)})}async function b4(t,e){g2(t),P0(t)?(t.bu.Iu(e),R0(t)):t.bu.set("Unknown")}async function T4(t,e,n){if(t.bu.set("Online"),e instanceof n2&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ud(t,r)}else if(e instanceof gc?t.Vu.Ht(e):e instanceof t2?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(ue.min()))try{const r=await c2(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Vt.EMPTY_BYTE_STRING,u.snapshotVersion)),m2(i,a);const d=new ci(u.target,a,l,u.sequenceNumber);N0(i,d)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await ud(t,r)}}async function ud(t,e,n){if(!eu(e))throw e;t.vu.add(1),await iu(t),t.bu.set("Offline"),n||(n=()=>c2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await hf(t)})}function y2(t,e){return e().catch(n=>ud(t,n,e))}async function pf(t){const e=fe(t),n=Ni(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;x4(e);)try{const i=await f4(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,z4(e,i)}catch(i){await ud(e,i)}v2(e)&&w2(e)}function x4(t){return xs(t)&&t.Eu.length<10}function z4(t,e){t.Eu.push(e);const n=Ni(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function v2(t){return xs(t)&&!Ni(t).Uo()&&t.Eu.length>0}function w2(t){Ni(t).start()}async function A4(t){Ni(t).hu()}async function N4(t){const e=Ni(t);for(const n of t.Eu)e.uu(n.mutations)}async function R4(t,e,n){const r=t.Eu.shift(),i=C0.from(r,e,n);await y2(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await pf(t)}async function P4(t,e){e&&Ni(t).ou&&await async function(n,r){if(i=r.code,CO(i)&&i!==U.ABORTED){const s=n.Eu.shift();Ni(n).Qo(),await y2(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await pf(n)}var i}(t,e),v2(t)&&w2(t)}async function fw(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=xs(n);n.vu.add(3),await iu(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await hf(n)}async function O4(t,e){const n=fe(t);e?(n.vu.delete(2),await hf(n)):e||(n.vu.add(2),await iu(n),n.bu.set("Unknown"))}function Ko(t){return t.Su||(t.Su=function(e,n,r){const i=fe(e);return i.fu(),new _4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:I4.bind(null,t),ao:b4.bind(null,t),nu:T4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),P0(t)?R0(t):t.bu.set("Unknown")):(await t.Su.stop(),g2(t))})),t.Su}function Ni(t){return t.Du||(t.Du=function(e,n,r){const i=fe(e);return i.fu(),new E4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:A4.bind(null,t),ao:P4.bind(null,t),au:N4.bind(null,t),cu:R4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await pf(t)):(await t.Du.stop(),t.Eu.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new O0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function U0(t,e){if($r("AsyncQueue",`${e}: ${t}`),eu(t))return new G(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=za(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new go(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new go;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Cu=new Ke(re.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):oe():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Uo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Uo(e,n,go.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&af(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(){this.Nu=void 0,this.listeners=[]}}class D4{constructor(){this.queries=new qo(e=>jC(e),af),this.onlineState="Unknown",this.ku=new Set}}async function _2(t,e){const n=fe(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new U4),i)try{s.Nu=await n.onListen(r)}catch(o){const a=U0(o,`Initialization of query '${Sm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&D0(n)}async function E2(t,e){const n=fe(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function M4(t,e){const n=fe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&D0(n)}function L4(t,e,n){const r=fe(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function D0(t){t.ku.forEach(e=>{e.next()})}class S2{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.key=e}}class C2{constructor(e){this.key=e}}class j4{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=pe(),this.mutatedKeys=pe(),this.tc=$C(e),this.ec=new go(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new hw,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,m)=>{const g=i.get(d),y=lf(this.query,m)?m:null,E=!!g&&this.mutatedKeys.has(g.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let c=!1;g&&y?g.data.isEqual(y.data)?E!==v&&(r.track({type:3,doc:y}),c=!0):this.rc(g,y)||(r.track({type:2,doc:y}),c=!0,(l&&this.tc(y,l)>0||u&&this.tc(y,u)<0)&&(a=!0)):!g&&y?(r.track({type:0,doc:y}),c=!0):g&&!y&&(r.track({type:1,doc:g}),c=!0,(l||u)&&(a=!0)),c&&(y?(o=o.add(y),s=v?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,d)=>function(m,g){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return y(m)-y(g)}(u.type,d.type)||this.tc(u.doc,d.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Uo(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new hw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=pe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new C2(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new k2(r))}),n}hc(e){this.Yu=e.ir,this.Zu=pe();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Uo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class $4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class F4{constructor(e){this.key=e,this.fc=!1}}class B4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new qo(a=>jC(a),af),this._c=new Map,this.mc=new Set,this.gc=new Ke(re.comparator),this.yc=new Map,this.Ic=new x0,this.Tc={},this.Ec=new Map,this.Ac=Oo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function V4(t,e){const n=Z4(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await h4(n.localStore,Fr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await H4(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&h2(n.remoteStore,o)}return i}async function H4(t,e,n,r,i){t.Rc=(m,g,y)=>async function(E,v,c,f){let h=v.view.sc(c);h.zi&&(h=await uw(E.localStore,v.query,!1).then(({documents:_})=>v.view.sc(_,h)));const p=f&&f.targetChanges.get(v.targetId),w=v.view.applyChanges(h,E.isPrimaryClient,p);return mw(E,v.targetId,w.cc),w.snapshot}(t,m,g,y);const s=await uw(t.localStore,e,!0),o=new j4(e,s.ir),a=o.sc(s.documents),l=ru.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);mw(t,n,u.cc);const d=new $4(e,n,o);return t.wc.set(e,d),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function W4(t,e){const n=fe(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!af(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Tm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),p2(n.remoteStore,r.targetId),xm(n,r.targetId)}).catch(Zl)):(xm(n,r.targetId),await Tm(n.localStore,r.targetId,!0))}async function q4(t,e,n){const r=eU(t);try{const i=await function(s,o){const a=fe(s),l=dt.now(),u=o.reduce((g,y)=>g.add(y.key),pe());let d,m;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Br(),E=pe();return a.Zi.getEntries(g,u).next(v=>{y=v,y.forEach((c,f)=>{f.isValidDocument()||(E=E.add(c))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,y)).next(v=>{d=v;const c=[];for(const f of o){const h=wO(f,d.get(f.key).overlayedDocument);h!=null&&c.push(new ji(f.key,h,AC(h.value.mapValue),hr.exists(!0)))}return a.mutationQueue.addMutationBatch(g,l,c,o)}).next(v=>{m=v;const c=v.applyToLocalDocumentSet(d,E);return a.documentOverlayCache.saveOverlays(g,v.batchId,c)})}).then(()=>({batchId:m.batchId,changes:BC(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Ke(be)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await su(r,i.changes),await pf(r.remoteStore)}catch(i){const s=U0(i,"Failed to persist write");n.reject(s)}}async function I2(t,e){const n=fe(t);try{const r=await c4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Fe(o.fc):i.removedDocuments.size>0&&(Fe(o.fc),o.fc=!1))}),await su(n,r,e)}catch(r){await Zl(r)}}function pw(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=fe(s);a.onlineState=o;let l=!1;a.queries.forEach((u,d)=>{for(const m of d.listeners)m.Mu(o)&&(l=!0)}),l&&D0(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function K4(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Ke(re.comparator);o=o.insert(s,Dt.newNoDocument(s,ue.min()));const a=pe().add(s),l=new df(ue.min(),new Map,new Ke(be),o,a);await I2(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),M0(r)}else await Tm(r.localStore,e,!1).then(()=>xm(r,e,n)).catch(Zl)}async function G4(t,e){const n=fe(t),r=e.batch.batchId;try{const i=await u4(n.localStore,e);T2(n,r,null),b2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await su(n,i)}catch(i){await Zl(i)}}async function Y4(t,e,n){const r=fe(t);try{const i=await function(s,o){const a=fe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(d=>(Fe(d!==null),u=d.keys(),a.mutationQueue.removeMutationBatch(l,d))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);T2(r,e,n),b2(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await su(r,i)}catch(i){await Zl(i)}}function b2(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function T2(t,e,n){const r=fe(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||x2(t,r)})}function x2(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(p2(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),M0(t))}function mw(t,e,n){for(const r of n)r instanceof k2?(t.Ic.addReference(r.key,e),X4(t,r)):r instanceof C2?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||x2(t,r.key)):oe()}function X4(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.mc.add(r),M0(t))}function M0(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new re(je.fromString(e)),r=t.Ac.next();t.yc.set(r,new F4(n)),t.gc=t.gc.insert(n,r),h2(t.remoteStore,new ci(Fr(S0(n.path)),r,"TargetPurposeLimboResolution",g0.ct))}}async function su(t,e,n){const r=fe(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const d=A0.Li(l.targetId,u);s.push(d)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=fe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(l,m=>$.forEach(m.Fi,g=>u.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>$.forEach(m.Bi,g=>u.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!eu(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const m=d.targetId;if(!d.fromCache){const g=u.Ji.get(m),y=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(y);u.Ji=u.Ji.insert(m,E)}}}(r.localStore,s))}async function Q4(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await u2(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new G(U.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await su(n,r.er)}}function J4(t,e){const n=fe(t),r=n.yc.get(e);if(r&&r.fc)return pe().add(r.key);{let i=pe();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Z4(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=I2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K4.bind(null,e),e.dc.nu=M4.bind(null,e.eventManager),e.dc.Pc=L4.bind(null,e.eventManager),e}function eU(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Y4.bind(null,e),e}class gw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ff(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return l4(this.persistence,new o4,e.initialUser,this.serializer)}createPersistence(e){return new i4(z0.zs,this.serializer)}createSharedClientState(e){return new m4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q4.bind(null,this.syncEngine),await O4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new D4}createDatastore(e){const n=ff(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new w4(i));var i;return function(s,o,a,l){return new S4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>pw(this.syncEngine,a,0),o=dw.D()?new dw:new g4,new C4(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const d=new B4(r,i,s,o,a,l);return u&&(d.vc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=fe(e);ee("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await iu(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=TC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ee("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ee("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=U0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bh(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await u2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iU(t);ee("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>fw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>fw(e.remoteStore,s)),t._onlineComponents=e}function rU(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function iU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rU(n))throw n;xo("Error using user provided cache. Falling back to memory cache: "+n),await Bh(t,new gw)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Bh(t,new gw);return t._offlineComponents}async function A2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await yw(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await yw(t,new tU))),t._onlineComponents}function sU(t){return A2(t).then(e=>e.syncEngine)}async function N2(t){const e=await A2(t),n=e.eventManager;return n.onListen=V4.bind(null,e.syncEngine),n.onUnlisten=W4.bind(null,e.syncEngine),n}function oU(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new z2({next:m=>{s.enqueueAndForget(()=>E2(i,d));const g=m.docs.has(o);!g&&m.fromCache?l.reject(new G(U.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&a&&a.source==="server"?l.reject(new G(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(m)},error:m=>l.reject(m)}),d=new S2(S0(o.path),u,{includeMetadataChanges:!0,Ku:!0});return _2(i,d)}(await N2(t),t.asyncQueue,e,n,r)),r.promise}function aU(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new z2({next:m=>{s.enqueueAndForget(()=>E2(i,d)),m.fromCache&&a.source==="server"?l.reject(new G(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(m)},error:m=>l.reject(m)}),d=new S2(o,u,{includeMetadataChanges:!0,Ku:!0});return _2(i,d)}(await N2(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function R2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t,e,n){if(!n)throw new G(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lU(t,e,n,r){if(e===!0&&r===!0)throw new G(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ww(t){if(!re.isDocumentKey(t))throw new G(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _w(t){if(re.isDocumentKey(t))throw new G(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function Ri(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mf(t);throw new G(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=R2((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class gf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ew({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ew(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new NP;switch(n.type){case"firstParty":return new UP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vw.get(e);n&&(ee("ComponentProvider","Removing Datastore"),vw.delete(e),n.terminate())}(this),Promise.resolve()}}function uU(t,e,n,r={}){var i;const s=(t=Ri(t,gf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ot.MOCK_USER;else{a=LS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new G(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ot(u)}t._authCredentials=new RP(new bC(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class Go{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Go(this.firestore,e,this._query)}}class Ci extends Go{constructor(e,n,r){super(e,n,S0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new re(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function Kn(t,e,...n){if(t=Ye(t),P2("collection","path",e),t instanceof gf){const r=je.fromString(e,...n);return _w(r),new Ci(t,null,r)}{if(!(t instanceof dn||t instanceof Ci))throw new G(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return _w(r),new Ci(t.firestore,null,r)}}function $i(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=TC.A()),P2("doc","path",e),t instanceof gf){const r=je.fromString(e,...n);return ww(r),new dn(t,null,new re(r))}{if(!(t instanceof dn||t instanceof Ci))throw new G(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return ww(r),new dn(t.firestore,t instanceof Ci?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new d2(this,"async_queue_retry"),this.Xc=()=>{const n=Fh();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Fh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Pr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!eu(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=O0.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&oe()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class ou extends gf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new cU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||O2(this),this._firestoreClient.terminate()}}function dU(t,e){const n=typeof t=="object"?t:Dg(),r=typeof t=="string"?t:e||"(default)",i=$d(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=US("firestore");s&&uU(i,...s)}return i}function L0(t){return t._firestoreClient||O2(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function O2(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new KP(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,R2(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new nU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Do(Vt.fromBase64String(e))}catch(n){throw new G(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Do(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fU=/^__.*__$/;class hU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new nu(e,this.data,n,this.fieldTransforms)}}class U2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D2(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class vf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return cd(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(D2(this.ca)&&fU.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class pU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ff(e)}ya(e,n,r,i=!1){return new vf({ca:e,methodName:n,ga:r,path:Mt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $0(t){const e=t._freezeSettings(),n=ff(t._databaseId);return new pU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mU(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);F0("Data must be an object, but it was:",o,r);const a=L2(r,o);let l,u;if(s.merge)l=new gn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const g=zm(e,m,n);if(!o.contains(g))throw new G(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$2(d,g)||d.push(g)}l=new gn(d),u=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,u=o.fieldTransforms;return new hU(new on(a),l,u)}class wf extends au{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wf}}function M2(t,e,n){return new vf({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class gU extends au{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=M2(this,e,!0),r=this.pa.map(s=>zs(s,n)),i=new Ro(r);return new XC(e.path,i)}isEqual(e){return this===e}}class yU extends au{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=M2(this,e,!0),r=this.pa.map(s=>zs(s,n)),i=new Po(r);return new XC(e.path,i)}isEqual(e){return this===e}}function vU(t,e,n,r){const i=t.ya(1,e,n);F0("Data must be an object, but it was:",i,r);const s=[],o=on.empty();Ts(r,(l,u)=>{const d=B0(e,l,n);u=Ye(u);const m=i.da(d);if(u instanceof wf)s.push(d);else{const g=zs(u,m);g!=null&&(s.push(d),o.set(d,g))}});const a=new gn(s);return new U2(o,a,i.fieldTransforms)}function wU(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[zm(e,r,n)],l=[i];if(s.length%2!=0)throw new G(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(zm(e,s[g])),l.push(s[g+1]);const u=[],d=on.empty();for(let g=a.length-1;g>=0;--g)if(!$2(u,a[g])){const y=a[g];let E=l[g];E=Ye(E);const v=o.da(y);if(E instanceof wf)u.push(y);else{const c=zs(E,v);c!=null&&(u.push(y),d.set(y,c))}}const m=new gn(u);return new U2(d,m,o.fieldTransforms)}function _U(t,e,n,r=!1){return zs(n,t.ya(r?4:3,e))}function zs(t,e){if(j2(t=Ye(t)))return F0("Unsupported field value:",e,t),L2(t,e);if(t instanceof au)return function(n,r){if(!D2(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=zs(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hO(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=dt.fromDate(n);return{timestampValue:ld(r.serializer,i)}}if(n instanceof dt){const i=new dt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ld(r.serializer,i)}}if(n instanceof j0)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Do)return{bytesValue:r2(r.serializer,n._byteString)};if(n instanceof dn){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:T0(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${mf(n)}`)}(t,e)}function L2(t,e){const n={};return xC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(t,(r,i)=>{const s=zs(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function j2(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof j0||t instanceof Do||t instanceof dn||t instanceof au)}function F0(t,e,n){if(!j2(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=mf(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function zm(t,e,n){if((e=Ye(e))instanceof yf)return e._internalPath;if(typeof e=="string")return B0(t,e);throw cd("Field path arguments must be of type string or ",t,!1,void 0,n)}const EU=new RegExp("[~\\*/\\[\\]]");function B0(t,e,n){if(e.search(EU)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yf(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new G(U.INVALID_ARGUMENT,a+t+l)}function $2(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(V0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SU extends F2{data(){return super.data()}}function V0(t,e){return typeof e=="string"?B0(t,e):e instanceof yf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H0{}class CU extends H0{}function Fi(t,e,...n){let r=[];e instanceof H0&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof W0).length,o=i.filter(a=>a instanceof _f).length;if(s>1||s>0&&o>0)throw new G(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _f extends CU{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _f(e,n,r)}_apply(e){const n=this._parse(e);return B2(e._query,n),new Go(e.firestore,e.converter,_m(e._query,n))}_parse(e){const n=$0(e.firestore);return function(i,s,o,a,l,u,d){let m;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new G(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){kw(d,u);const g=[];for(const y of d)g.push(Sw(a,i,y));m={arrayValue:{values:g}}}else m=Sw(a,i,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||kw(d,u),m=_U(o,s,d,u==="in"||u==="not-in");return at.create(l,u,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Bi(t,e,n){const r=e,i=V0("where",t);return _f._create(i,r,n)}class W0 extends H0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new W0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)B2(s,a),s=_m(s,a)}(e._query,n),new Go(e.firestore,e.converter,_m(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Sw(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new G(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!LC(e)&&n.indexOf("/")!==-1)throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!re.isDocumentKey(r))throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return q1(t,new re(r))}if(n instanceof dn)return q1(t,n._key);throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mf(n)}.`)}function kw(t,e){if(!Array.isArray(t)||t.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function B2(t,e){if(e.isInequality()){const r=k0(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new G(U.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=MC(t);s!==null&&IU(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function IU(t,e,n){if(!n.isEqual(e))throw new G(U.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class bU{convertValue(e,n="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ts(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new j0(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=v0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bl(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Fe(l2(r));const i=new Tl(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||$r(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TU(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class V2 extends F2{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(V0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yc extends V2{data(e={}){return super.data(e)}}class xU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Na(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yc(this._firestore,this._userDataWriter,r.key,r,new Na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new yc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new yc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:zU(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(t){t=Ri(t,dn);const e=Ri(t.firestore,ou);return oU(L0(e),t._key).then(n=>NU(e,t,n))}class H2 extends bU{constructor(e){super(),this.firestore=e}convertBytes(e){return new Do(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dn(this.firestore,null,n)}}function Vi(t){t=Ri(t,Go);const e=Ri(t.firestore,ou),n=L0(e),r=new H2(e);return kU(t._query),aU(n,t._query).then(i=>new xU(e,r,t,i))}function Yo(t,e,n,...r){t=Ri(t,dn);const i=Ri(t.firestore,ou),s=$0(i);let o;return o=typeof(e=Ye(e))=="string"||e instanceof yf?wU(s,"updateDoc",t._key,e,n,r):vU(s,"updateDoc",t._key,e),W2(i,[o.toMutation(t._key,hr.exists(!0))])}function q0(t,e){const n=Ri(t.firestore,ou),r=$i(t),i=TU(t.converter,e);return W2(n,[mU($0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hr.exists(!1))]).then(()=>r)}function W2(t,e){return function(n,r){const i=new Pr;return n.asyncQueue.enqueueAndForget(async()=>q4(await sU(n),r,i)),i.promise}(L0(t),e)}function NU(t,e,n){const r=n.docs.get(e._key),i=new H2(t);return new V2(t,i,e._key,r,new Na(n.hasPendingWrites,n.fromCache),e.converter)}function K0(...t){return new gU("arrayUnion",t)}function q2(...t){return new yU("arrayRemove",t)}(function(t,e=!0){(function(n){Wo=n})(ks),hs(new xi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new ou(new PP(n.getProvider("auth-internal")),new MP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),cr(F1,"3.12.2",t),cr(F1,"3.12.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="firebasestorage.googleapis.com",G2="storageBucket",RU=2*60*1e3,PU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends yr{constructor(e,n,r=0){super(Vh(e),`Firebase Storage: ${n} (${Vh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qe||(Qe={}));function Vh(t){return"storage/"+t}function G0(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Qe.UNKNOWN,t)}function OU(t){return new Je(Qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UU(t){return new Je(Qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Qe.UNAUTHENTICATED,t)}function MU(){return new Je(Qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function LU(t){return new Je(Qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function jU(){return new Je(Qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $U(){return new Je(Qe.CANCELED,"User canceled the upload/download.")}function FU(t){return new Je(Qe.INVALID_URL,"Invalid URL '"+t+"'.")}function BU(t){return new Je(Qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function VU(){return new Je(Qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+G2+"' property when initializing the app?")}function HU(){return new Je(Qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WU(){return new Je(Qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qU(t){return new Je(Qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Am(t){return new Je(Qe.INVALID_ARGUMENT,t)}function Y2(){return new Je(Qe.APP_DELETED,"The Firebase app was deleted.")}function KU(t){return new Je(Qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ga(t,e){return new Je(Qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function va(t){throw new Je(Qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(r.path==="")return r;throw BU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",y=new RegExp(`^https?://${m}/${d}/b/${i}/o${g}`,"i"),E={bucket:1,path:3},v=n===K2?"(?:storage.googleapis.com|storage.cloud.google.com)":n,c="([^?#]*)",f=new RegExp(`^https?://${v}/${i}/${c}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:y,indices:E,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<p.length;w++){const _=p[w],S=_.regex.exec(e);if(S){const C=S[_.indices.bucket];let b=S[_.indices.path];b||(b=""),r=new yn(C,b),_.postModify(r);break}}if(r==null)throw FU(e);return r}}class GU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...c){u||(u=!0,e.apply(null,c))}function m(c){i=setTimeout(()=>{i=null,t(y,l())},c)}function g(){s&&clearTimeout(s)}function y(c,...f){if(u){g();return}if(c){g(),d.call(null,c,...f);return}if(l()||o){g(),d.call(null,c,...f);return}r<64&&(r*=2);let p;a===1?(a=2,p=0):p=(r+Math.random())*1e3,m(p)}let E=!1;function v(c){E||(E=!0,g(),!u&&(i!==null?(c||(a=2),clearTimeout(i),m(0)):c||(a=1)))}return m(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function XU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QU(t){return t!==void 0}function JU(t){return typeof t=="object"&&!Array.isArray(t)}function Y0(t){return typeof t=="string"||t instanceof String}function Cw(t){return X0()&&t instanceof Blob}function X0(){return typeof Blob<"u"&&!Yx()}function Iw(t,e,n,r){if(r<e)throw Am(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Am(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function X2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var os;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(os||(os={}));/**
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
 */function ZU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e,n,r,i,s,o,a,l,u,d,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,E)=>{this.resolve_=y,this.reject_=E,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Yu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===os.NO_ERROR,l=s.getStatus();if(!a||ZU(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===os.ABORT;r(!1,new Yu(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Yu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());QU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=G0();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Y2():$U();o(l)}else{const l=jU();o(l)}};this.canceled_?n(!1,new Yu(!1,null,!0)):this.backoffId_=YU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function t5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function n5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function r5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function i5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function s5(t,e,n,r,i,s,o=!0){const a=X2(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return r5(u,e),t5(u,n),n5(u,s),i5(u,r),new e5(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function a5(...t){const e=o5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(X0())return new Blob(t);throw new Je(Qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function l5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function u5(t){if(typeof atob>"u")throw qU("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hh{constructor(e,n){this.data=e,this.contentType=n||null}}function c5(t,e){switch(t){case or.RAW:return new Hh(Q2(e));case or.BASE64:case or.BASE64URL:return new Hh(J2(t,e));case or.DATA_URL:return new Hh(f5(e),h5(e))}throw G0()}function Q2(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function d5(t){let e;try{e=decodeURIComponent(t)}catch{throw Ga(or.DATA_URL,"Malformed data URL.")}return Q2(e)}function J2(t,e){switch(t){case or.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ga(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case or.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ga(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=u5(e)}catch(i){throw i.message.includes("polyfill")?i:Ga(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Z2{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ga(or.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=p5(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function f5(t){const e=new Z2(t);return e.base64?J2(or.BASE64,e.rest):d5(e.rest)}function h5(t){return new Z2(t).contentType}function p5(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){let r=0,i="";Cw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Cw(this.data_)){const r=this.data_,i=l5(r,e,n);return i===null?null:new ai(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ai(r,!0)}}static getBlob(...e){if(X0()){const n=e.map(r=>r instanceof ai?r.data_:r);return new ai(a5.apply(null,n))}else{const n=e.map(o=>Y0(o)?c5(or.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ai(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){let e;try{e=JSON.parse(t)}catch{return null}return JU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function g5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function tI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y5(t,e){return e}class qt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||y5}}let Xu=null;function v5(t){return!Y0(t)||t.length<2?t:tI(t)}function nI(){if(Xu)return Xu;const t=[];t.push(new qt("bucket")),t.push(new qt("generation")),t.push(new qt("metageneration")),t.push(new qt("name","fullPath",!0));function e(s,o){return v5(o)}const n=new qt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new qt("size");return i.xform=r,t.push(i),t.push(new qt("timeCreated")),t.push(new qt("updated")),t.push(new qt("md5Hash",null,!0)),t.push(new qt("cacheControl",null,!0)),t.push(new qt("contentDisposition",null,!0)),t.push(new qt("contentEncoding",null,!0)),t.push(new qt("contentLanguage",null,!0)),t.push(new qt("contentType",null,!0)),t.push(new qt("metadata","customMetadata",!0)),Xu=t,Xu}function w5(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new yn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _5(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return w5(r,t),r}function rI(t,e,n){const r=eI(e);return r===null?null:_5(t,r,n)}function E5(t,e,n,r){const i=eI(e);if(i===null||!Y0(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,m=t.fullPath,g="/b/"+o(d)+"/o/"+o(m),y=Q0(g,n,r),E=X2({alt:"media",token:u});return y+E})[0]}function S5(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class iI{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){if(!t)throw G0()}function k5(t,e){function n(r,i){const s=rI(t,i,e);return sI(s!==null),s}return n}function C5(t,e){function n(r,i){const s=rI(t,i,e);return sI(s!==null),E5(s,i,t.host,t._protocol)}return n}function oI(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=MU():i=DU():n.getStatus()===402?i=UU(t.bucket):n.getStatus()===403?i=LU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function I5(t){const e=oI(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=OU(t.path)),s.serverResponse=i.serverResponse,s}return n}function b5(t,e,n){const r=e.fullServerUrl(),i=Q0(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new iI(i,s,C5(t,n),o);return a.errorHandler=I5(e),a}function T5(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function x5(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=T5(null,e)),r}function z5(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let p="";for(let w=0;w<2;w++)p=p+Math.random().toString().slice(2);return p}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=x5(e,r,i),d=S5(u,n),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",y=ai.getBlob(m,r,g);if(y===null)throw HU();const E={name:u.fullPath},v=Q0(s,t.host,t._protocol),c="POST",f=t.maxUploadRetryTime,h=new iI(v,c,k5(t,n),f);return h.urlParams=E,h.headers=o,h.body=y.uploadData(),h.errorHandler=oI(e),h}class A5{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=os.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=os.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=os.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw va("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw va("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw va("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw va("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw va("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class N5 extends A5{initXhr(){this.xhr_.responseType="text"}}function aI(){return new N5}/**
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
 */class ws{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ws(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tI(this._location.path)}get storage(){return this._service}get parent(){const e=m5(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new ws(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw KU(e)}}function R5(t,e,n){t._throwIfRoot("uploadBytes");const r=z5(t.storage,t._location,nI(),new ai(e,!0),n);return t.storage.makeRequestWithTokens(r,aI).then(i=>({metadata:i,ref:t}))}function P5(t){t._throwIfRoot("getDownloadURL");const e=b5(t.storage,t._location,nI());return t.storage.makeRequestWithTokens(e,aI).then(n=>{if(n===null)throw WU();return n})}function O5(t,e){const n=g5(t._location.path,e),r=new yn(t._location.bucket,n);return new ws(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U5(t){return/^[A-Za-z]+:\/\//.test(t)}function D5(t,e){return new ws(t,e)}function lI(t,e){if(t instanceof J0){const n=t;if(n._bucket==null)throw VU();const r=new ws(n,n._bucket);return e!=null?lI(r,e):r}else return e!==void 0?O5(t,e):t}function M5(t,e){if(e&&U5(e)){if(t instanceof J0)return D5(t,e);throw Am("To use ref(service, url), the first argument must be a Storage instance.")}else return lI(t,e)}function bw(t,e){const n=e==null?void 0:e[G2];return n==null?null:yn.makeFromBucketSpec(n,t)}function L5(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:LS(i,t.app.options.projectId))}class J0{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=K2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RU,this._maxUploadRetryTime=PU,this._requests=new Set,i!=null?this._bucket=yn.makeFromBucketSpec(i,this._host):this._bucket=bw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=bw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ws(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new GU(Y2());{const o=s5(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Tw="@firebase/storage",xw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="storage";function j5(t,e,n){return t=Ye(t),R5(t,e,n)}function $5(t){return t=Ye(t),P5(t)}function F5(t,e){return t=Ye(t),M5(t,e)}function B5(t=Dg(),e){t=Ye(t);const r=$d(t,uI).getImmediate({identifier:e}),i=US("storage");return i&&V5(r,...i),r}function V5(t,e,n,r={}){L5(t,e,n,r)}function H5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new J0(n,r,i,e,ks)}function W5(){hs(new xi(uI,H5,"PUBLIC").setMultipleInstances(!0)),cr(Tw,xw,""),cr(Tw,xw,"esm2017")}W5();const q5={apiKey:"AIzaSyAxFzrCtrPqYAjIW8xzaaNDq9Cum5IPlr0",authDomain:"fir-auth-article-5a22c.firebaseapp.com",projectId:"fir-auth-article-5a22c",storageBucket:"fir-auth-article-5a22c.appspot.com",messagingSenderId:"497685829031",appId:"1:497685829031:web:4171ccc2354c4fcb3a9282"},Z0=FS(q5),Xo=kR(Z0),yt=dU(Z0),K5=B5(Z0),lu=async(t,e,n,r)=>{try{const i=Fi(Kn(yt,t),Bi(n,"==",r)),s=await Vi(i),o=$i(yt,t,s.docs[0].id),a=await AU(o);if(a.exists())return a.data()[e];console.log("No existe el documento")}catch{console.log("No se puede acceder al campo")}return null},cI=async()=>{try{const e=(await RN(Xo,new br)).user,n=Fi(Kn(yt,"users"),Bi("uid","==",e.uid));(await Vi(n)).docs.length===0&&await q0(Kn(yt,"users"),{uid:e.uid,name:e.displayName,authProvider:"google",email:e.email,photo:e.photoURL,favorites:[],blocked:[]})}catch(t){console.error(t),alert(t.message)}},G5=async(t,e)=>{try{const n=await aN(Xo,t,e)}catch(n){console.error(n),alert(n.message)}},Y5=async(t,e,n)=>{try{const i=(await oN(Xo,e,n)).user;await q0(Kn(yt,"users"),{uid:i.uid,name:t,authProvider:"local",email:e,photo:null,favorites:[],blocked:[]})}catch(r){console.error(r),alert(r.message)}},X5=async t=>{try{const e=await sN(Xo,t);alert("Password reset link sent!")}catch(e){console.error(e),alert(e.message)}},Q5=()=>{dN(Xo)},J5=async(t,e)=>{try{const n=Fi(Kn(yt,"users"),Bi("uid","==",t.uid)),r=await Vi(n),i=$i(yt,"users",r.docs[0].id);await Yo(i,{favorites:K0(e)})}catch(n){console.log(n)}},Z5=async(t,e)=>{try{const n=Fi(Kn(yt,"users"),Bi("uid","==",t.uid)),r=await Vi(n),i=$i(yt,"users",r.docs[0].id);await Yo(i,{blocked:K0(e)})}catch(n){console.log(n)}},eD=async(t,e)=>{try{const n=Fi(Kn(yt,"users"),Bi("uid","==",t.uid)),r=await Vi(n),i=$i(yt,"users",r.docs[0].id);await Yo(i,{favorites:q2(e)})}catch(n){console.log(n)}},tD=async(t,e)=>{try{const n=Fi(Kn(yt,"users"),Bi("uid","==",t.uid)),r=await Vi(n),i=$i(yt,"users",r.docs[0].id);await Yo(i,{blocked:q2(e)})}catch(n){console.log(n)}},nD=async(t,e)=>{try{const n=Fi(Kn(yt,"comments"),Bi("id","==",t)),r=await Vi(n);if(r.docs.length===0)await q0(Kn(yt,"comments"),{id:t,comments:[e]});else{const i=$i(yt,"comments",r.docs[0].id);await Yo(i,{comments:K0(e)})}}catch(n){console.error(n)}},rD=async t=>await lu("comments","comments","id",t),iD=async(t,e)=>{try{const n=Fi(Kn(yt,"users"),Bi("uid","==",t)),r=await Vi(n),i=$i(yt,"users",r.docs[0].id);await Yo(i,{photo:e})}catch(n){console.log(n)}},sD=async(t,e)=>{const n=F5(K5,`photo-user${e}`);await j5(n,t);const r=await $5(n);return await iD(e,r),r},oD=async t=>await lu("users","photo","uid",t),aD=async t=>await lu("users","name","uid",t),lD=async t=>await lu("users","blocked","uid",t),uD=async t=>await lu("users","favorites","uid",t);/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(this,arguments)}var di;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(di||(di={}));const zw="popstate";function cD(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Nm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:dd(i)}return fD(e,n,null,t)}function nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ey(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dD(){return Math.random().toString(36).substr(2,8)}function Aw(t,e){return{usr:t.state,key:t.key,idx:e}}function Nm(t,e,n,r){return n===void 0&&(n=null),zl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qo(e):e,{state:n,key:e&&e.key||r||dD()})}function dd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=di.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(zl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function m(){a=di.Pop;let c=d(),f=c==null?null:c-u;u=c,l&&l({action:a,location:v.location,delta:f})}function g(c,f){a=di.Push;let h=Nm(v.location,c,f);n&&n(h,c),u=d()+1;let p=Aw(h,u),w=v.createHref(h);try{o.pushState(p,"",w)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function y(c,f){a=di.Replace;let h=Nm(v.location,c,f);n&&n(h,c),u=d();let p=Aw(h,u),w=v.createHref(h);o.replaceState(p,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function E(c){let f=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof c=="string"?c:dd(c);return nt(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let v={get action(){return a},get location(){return t(i,o)},listen(c){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(zw,m),l=c,()=>{i.removeEventListener(zw,m),l=null}},createHref(c){return e(i,c)},createURL:E,encodeLocation(c){let f=E(c);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(c){return o.go(c)}};return v}var Nw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Nw||(Nw={}));function hD(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Qo(e):e,i=ty(r.pathname||"/",n);if(i==null)return null;let s=dI(t);pD(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=kD(s[a],bD(i));return o}function dI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(nt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ii([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dI(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ED(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of fI(s.path))i(s,o,l)}),e}function fI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=fI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mD=/^:\w+$/,gD=3,yD=2,vD=1,wD=10,_D=-2,Rw=t=>t==="*";function ED(t,e){let n=t.split("/"),r=n.length;return n.some(Rw)&&(r+=_D),e&&(r+=yD),n.filter(i=>!Rw(i)).reduce((i,s)=>i+(mD.test(s)?gD:s===""?vD:wD),r)}function SD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=CD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let m=a.route;s.push({params:r,pathname:Ii([i,d.pathname]),pathnameBase:AD(Ii([i,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(i=Ii([i,d.pathnameBase]))}return s}function CD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ID(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,m)=>{if(d==="*"){let g=a[m]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=TD(a[m]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ID(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ey(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bD(t){try{return decodeURI(t)}catch(e){return ey(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function TD(t,e){try{return decodeURIComponent(t)}catch(n){return ey(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ty(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qo(t):t;return{pathname:n?n.startsWith("/")?n:zD(n,e):e,search:ND(r),hash:RD(i)}}function zD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ny(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ry(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qo(t):(i=zl({},t),nt(!i.pathname||!i.pathname.includes("?"),Wh("?","pathname","search",i)),nt(!i.pathname||!i.pathname.includes("#"),Wh("#","pathname","hash",i)),nt(!i.search||!i.search.includes("#"),Wh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let m=e.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?e[m]:"/"}let l=xD(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Ii=t=>t.join("/").replace(/\/\/+/g,"/"),AD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ND=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hI=["post","put","patch","delete"];new Set(hI);const OD=["get",...hI];new Set(OD);/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fd.apply(this,arguments)}const UD="startTransition";var Pw=Ib[UD];const iy=M.createContext(null),pI=M.createContext(null),As=M.createContext(null),Ef=M.createContext(null),qr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),mI=M.createContext(null);function DD(t,e){let{relative:n}=e===void 0?{}:e;Jo()||nt(!1);let{basename:r,navigator:i}=M.useContext(As),{hash:s,pathname:o,search:a}=oy(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ii([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Jo(){return M.useContext(Ef)!=null}function Zo(){return Jo()||nt(!1),M.useContext(Ef).location}function gI(t){M.useContext(As).static||M.useLayoutEffect(t)}function sy(){let{isDataRoute:t}=M.useContext(qr);return t?QD():MD()}function MD(){Jo()||nt(!1);let t=M.useContext(iy),{basename:e,navigator:n}=M.useContext(As),{matches:r}=M.useContext(qr),{pathname:i}=Zo(),s=JSON.stringify(ny(r).map(l=>l.pathnameBase)),o=M.useRef(!1);return gI(()=>{o.current=!0}),M.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=ry(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Ii([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,i,t])}const LD=M.createContext(null);function jD(t){let e=M.useContext(qr).outlet;return e&&M.createElement(LD.Provider,{value:t},e)}function oy(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=M.useContext(qr),{pathname:i}=Zo(),s=JSON.stringify(ny(r).map(o=>o.pathnameBase));return M.useMemo(()=>ry(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function $D(t,e){return FD(t,e)}function FD(t,e,n){Jo()||nt(!1);let{navigator:r}=M.useContext(As),{matches:i}=M.useContext(qr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Zo(),u;if(e){var d;let v=typeof e=="string"?Qo(e):e;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||nt(!1),u=v}else u=l;let m=u.pathname||"/",g=a==="/"?m:m.slice(a.length)||"/",y=hD(t,{pathname:g}),E=qD(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Ii([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Ii([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&E?M.createElement(Ef.Provider,{value:{location:fd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:di.Pop}},E):E}function BD(){let t=XD(),e=PD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,s)}const VD=M.createElement(BD,null);class HD extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?M.createElement(qr.Provider,{value:this.props.routeContext},M.createElement(mI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WD(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(iy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(qr.Provider,{value:e},r)}function qD(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||nt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,m=null;n&&(m=l.route.errorElement||VD);let g=e.concat(s.slice(0,u+1)),y=()=>{let E;return d?E=m:l.route.Component?E=M.createElement(l.route.Component,null):l.route.element?E=l.route.element:E=a,M.createElement(WD,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:E})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?M.createElement(HD,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Rm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Rm||(Rm={}));var Al;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Al||(Al={}));function KD(t){let e=M.useContext(iy);return e||nt(!1),e}function GD(t){let e=M.useContext(pI);return e||nt(!1),e}function YD(t){let e=M.useContext(qr);return e||nt(!1),e}function yI(t){let e=YD(),n=e.matches[e.matches.length-1];return n.route.id||nt(!1),n.route.id}function XD(){var t;let e=M.useContext(mI),n=GD(Al.UseRouteError),r=yI(Al.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function QD(){let{router:t}=KD(Rm.UseNavigateStable),e=yI(Al.UseNavigateStable),n=M.useRef(!1);return gI(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,fd({fromRouteId:e},s)))},[t,e])}function JD(t){let{to:e,replace:n,state:r,relative:i}=t;Jo()||nt(!1);let{matches:s}=M.useContext(qr),{pathname:o}=Zo(),a=sy(),l=ry(e,ny(s).map(d=>d.pathnameBase),o,i==="path"),u=JSON.stringify(l);return M.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function ZD(t){return jD(t.context)}function er(t){nt(!1)}function e3(t){let{basename:e="/",children:n=null,location:r,navigationType:i=di.Pop,navigator:s,static:o=!1}=t;Jo()&&nt(!1);let a=e.replace(/^\/*/,"/"),l=M.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Qo(r));let{pathname:u="/",search:d="",hash:m="",state:g=null,key:y="default"}=r,E=M.useMemo(()=>{let v=ty(u,a);return v==null?null:{location:{pathname:v,search:d,hash:m,state:g,key:y},navigationType:i}},[a,u,d,m,g,y,i]);return E==null?null:M.createElement(As.Provider,{value:l},M.createElement(Ef.Provider,{children:n,value:E}))}function t3(t){let{children:e,location:n}=t;return $D(Pm(e),n)}var Ow;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Ow||(Ow={}));new Promise(()=>{});function Pm(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Pm(r.props.children,s));return}r.type!==er&&nt(!1),!r.props.index||!r.props.children||nt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hd.apply(this,arguments)}function vI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function n3(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function r3(t,e){return t.button===0&&(!e||e==="_self")&&!n3(t)}const i3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],s3=["aria-current","caseSensitive","className","end","style","to","children"];function o3(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=cD({window:i,v5Compat:!0}));let o=s.current,[a,l]=M.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=M.useCallback(m=>{u&&Pw?Pw(()=>l(m)):l(m)},[l,u]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.createElement(e3,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const a3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nl=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d}=e,m=vI(e,i3),{basename:g}=M.useContext(As),y,E=!1;if(typeof u=="string"&&l3.test(u)&&(y=u,a3))try{let h=new URL(window.location.href),p=u.startsWith("//")?new URL(h.protocol+u):new URL(u),w=ty(p.pathname,g);p.origin===h.origin&&w!=null?u=w+p.search+p.hash:E=!0}catch{}let v=DD(u,{relative:i}),c=c3(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});function f(h){r&&r(h),h.defaultPrevented||c(h)}return M.createElement("a",hd({},m,{href:y||v,onClick:E||s?r:f,ref:n,target:l}))}),u3=M.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,d=vI(e,s3),m=oy(l,{relative:d.relative}),g=Zo(),y=M.useContext(pI),{navigator:E}=M.useContext(As),v=E.encodeLocation?E.encodeLocation(m).pathname:m.pathname,c=g.pathname,f=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(c=c.toLowerCase(),f=f?f.toLowerCase():null,v=v.toLowerCase());let h=c===v||!o&&c.startsWith(v)&&c.charAt(v.length)==="/",p=f!=null&&(f===v||!o&&f.startsWith(v)&&f.charAt(v.length)==="/"),w=h?r:void 0,_;typeof s=="function"?_=s({isActive:h,isPending:p}):_=[s,h?"active":null,p?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:h,isPending:p}):a;return M.createElement(Nl,hd({},d,{"aria-current":w,className:_,ref:n,style:S,to:l}),typeof u=="function"?u({isActive:h,isPending:p}):u)});var Uw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Uw||(Uw={}));var Dw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dw||(Dw={}));function c3(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=sy(),l=Zo(),u=oy(t,{relative:o});return M.useCallback(d=>{if(r3(d,n)){d.preventDefault();let m=r!==void 0?r:dd(l)===dd(u);a(t,{replace:m,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const wI=Ie.createContext(),Ns=()=>M.useContext(wI),d3={currentMovie:0,showComments:!1,comments:[],userPhoto:null,userName:null,blocked:[],favorites:[]},f3=(t,e)=>{switch(e.type){case"SHOW_COMMENTS":return{...t,currentMovie:e.value,showComments:!0};case"HIDE_COMMENTS":return{...t,currentMovie:null,showComments:!1,comments:[]};case"SAVE_COMMENT":return nD(t.currentMovie.id,e.value),{...t,comments:[e.value,...t.comments]};case"GET_COMMENTS_COMPLETED":return{...t,comments:e.value.reverse()};case"UPDATE_USER_PHOTO":return{...t,userPhoto:e.value};case"UPDATE_USER_NAME":return{...t,userName:e.value};case"UPDATE_BLOCKED":return{...t,blocked:e.value};case"UPDATE_FAVORITES":return{...t,favorites:e.value};default:return t}},h3=({children:t})=>{const[e,n]=M.useReducer(f3,d3);return I.jsx(wI.Provider,{value:{currentMovie:e.currentMovie,showComments:e.showComments,comments:e.comments,userPhoto:e.userPhoto,userName:e.userName,blocked:e.blocked,favorites:e.favorites,state:e,dispatch:n},children:t})},p3=({movie:t,user:e,hideBlocked:n})=>{const{dispatch:r,blocked:i,favorites:s}=Ns();t.favorite=s.find(c=>c.id===t.id)!==void 0,t.blocked=i.find(c=>c.id===t.id)!==void 0;const{id:o,title:a,overview:l,vote_average:u,release_date:d,poster_path:m}=t,g=sy(),y=()=>{if(!e)g("/login");else{const c={id:o,title:a,overview:l,vote_average:u,release_date:d,poster_path:m};if(t.favorite){eD(e,c);const f=s.filter(h=>t.id!==h.id);r({type:"UPDATE_FAVORITES",value:f})}else J5(e,c),r({type:"UPDATE_FAVORITES",value:[...s,c]})}},E=()=>{if(!e)g("/login");else{const c={id:o,title:a,overview:l,vote_average:u,release_date:d,poster_path:m};if(t.blocked){tD(e,c);const f=i.filter(h=>t.id!==h.id);r({type:"UPDATE_BLOCKED",value:f})}else Z5(e,c),r({type:"UPDATE_BLOCKED",value:[...i,c]})}},v=()=>{e?r({type:"SHOW_COMMENTS",value:t}):g("/login")};if(!(t.blocked&&n))return I.jsxs("div",{className:"movie",style:{backgroundImage:`url(${m})`},children:[I.jsx("h2",{className:"movie__title",children:a}),I.jsx("div",{className:"movie__description",children:l}),I.jsxs("div",{className:"movie__infos",children:[I.jsx(e1,{name:"rating",value:u}),I.jsx(e1,{name:"estreno",value:d})]}),I.jsxs("div",{className:"movie__buttons",children:[I.jsx("div",{className:"movie__btn",onClick:y,children:t.favorite?I.jsx(xS,{}):I.jsx(Lx,{})}),I.jsx("div",{className:"movie__btn",onClick:v,children:I.jsx(zS,{})}),I.jsx("div",{className:"movie__btn",onClick:E,children:t.blocked?I.jsx(AS,{}):I.jsx(jx,{})})]})]})};function ay({data:t,user:e,hideBlocked:n=!1}){const r=t.map(i=>I.jsx(p3,{movie:i,user:e,hideBlocked:n},i.id));return I.jsx("div",{className:"movies__container",children:r})}const m3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAKlBMVEXi4uLHx8fGxsbU1NTPz8/a2trKysrX19fMzMzQ0NDd3d3g4ODY2Njl5eUwiZpZAAAFiUlEQVR4nO2c2ZKjOBBF0b6A/v93W5kpCbArosMuRAcz9zy4ACM4RntCsSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALiCzRjjTmufkkdqczrWTFavK2asW/05w7QoWk13eFutlDp5q085ep/X59HOdK23+fFU8P4PeJe+/ihvpUbb8LH1MbG+3ftK4A1veMMb3rd5+9j5RjSeU9/az3e+6udH6tu9x4ZHjU/gDW94w/s672fO07QNnS86TG164u1m79cZ4qfimF/CG97whvc/8n5o+62T63zVX47Ud3s/dXzy2PEgvOENb3hf7f2s9lsp3/nY+pjY3+59JfCGN7zhDe/7vJ/Z7zy1n3/+uAre8IY3vH/r/dA420VxzXyz91PjyNcCb3jDG94P9H5o+33VczPhNu8lyv9L/W58MlLL+naDd+b8vfT/0+IN2lU8WRvDWDX2Y+L+/4C0ekcpAQAAAAAAAAAArqaszrn1bevx630CnI8rt2Ik0JEpXkK22XIQwXbzIoGU2KbnLnI8yrS0HLwYAZQ19UhK22bnvXLGiHD3dj1I1qMhzVtplfvetObrvkFLWEoP7xYtqt79KNNe8kNn0LHkg36zyCfvyq5N4j0qVb27pHhTBIh3fHll0PXe9egrexfP5/Waf8zuHSkMp8MqNr4Jsa61zhhK5o3hu56e3gjFR7Xt187zrk70p5YSCm6uy8qeuXvXCuDJlPOmXsDMD8YskitFook1z+SvLe2onjNRT6q3e9ZXE17hzSOLxbtEWqcP1hIhyapQOCrK2cPlxHuVxXu9yzvV83NNKvuSHlc6+BFklSUJ4oYX7/6TvONce2tSJ3nzBeUcH96Ka55evVgukh2uv61rLSfvWi9bVuy1ZI53fwpMGhfKWC4IYXhLe0d6ytO20PeTEn/ypnq57ldj0uWmM2srLbFaucFQIRtpjoc3dTWbNNg6bjlxMS4mr1yR09G75ldltPOp/OX8v/GOfCWpHewZzadcurc2LvP5vdq/dqXdyXm53vzLORe9mlctm/fa89SPYuGX3bvf8di7pfqrRk/qXr21eLu55ZvvaDi6eNW7ttxyyfv5+KqO+xBZSXNPbWTz1pbaE928hUBH9SWe7p5cy2YT39KgGyO8wcXqdhgQ2ZSOw6NQZXziYmMj/b7AiftBEmGdqxtSyZQW90sA+J+x1r7eFEd9BbUPmReKqVu50zT0bPdi6+feHNc9pGdqz32numfqexjZqGY3JtT7eBku+drEJRnI1U5IBrMyvrX60I24MeTt3U8dilvd+qs+T5vtLV1y6eMqnj7I3G3X4N5wdEdxjLz2oR8PE/YEpxv+U8gyIJGBfpLhnis8fBrDvrO3jMBiEe82oXzxrj3Q5FfIJsnWpfBjJ4t8Ln0g8pN3m96tzZuLjT97+zounKu9tBK6lU23wEId5G2t4P7kXQ7/esGliUdTL9c7ej/3ERS2lWxnGynsURZpMPjmnVsKtYx6qVR+8R6zo0nwMDSJbCsxqkVUkjQhb96pp3DNW37EW72c6s21kVs5U9oIuxYZnggt0iC+eas2+aVBLLdBmROlk7cxc+slV6LAV7os7YEwjkbpxFN4Uw7eXNm48Q4taqFlakylIrXqWHq9nFoxW7chU5fQmkQ35vE0kxze1A/KBLmlCDKR457Kpb6H6QsTtXMri1r1bFfS9ak+gcwH7xGUa1/GPVCx75F6vZz57nKaXEV6szuZUJWjKdbKEeIKzbUSfaXGLIz3pHADx5Hz/jxb6XtwAl6Y6E0vxJQoX11wS66fW52txUgRoEKrNtDHYtrbM0OiHelL2hJko+X5WtvDbH1hojcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ+AN+dUXAuJWE0QAAAABJRU5ErkJggg==";function g3(t){return t.trim().replaceAll(" ","+")}function y3(t){return t?`https://image.tmdb.org/t/p/w500${t}`:m3}function v3(){return window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight}function w3(t){return t.slice(0,4)}function _3(t){return t.toFixed(1)}function E3(t){return hn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}function S3(t){return hn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(t)}function ly(t){return hn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(t)}function uy(t){return hn({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const k3="8f578cdecb8c15112d8837ddfb9c6838";function C3({setData:t,dataLoading:e,setDataLoading:n,favorites:r,blocked:i}){const[s,o]=M.useState(""),[a,l]=M.useState(null),[u,d]=M.useState(0),[m,g]=M.useState(0),[y,E]=M.useState(!1);let v=s==="";const c=()=>{l(1),t([])},f=()=>{v3()&&E(!0)},h=p=>{fetch(`https://api.themoviedb.org/3/search/movie?api_key=${k3}&query=${p}&page=${a}&language=es-AR`).then(w=>w.json()).then(w=>{console.log(w);const _=w.results.map(S=>{const{id:C,title:b,overview:x,poster_path:T,release_date:O,vote_average:N}=S;return{id:C,title:b,overview:x,poster_path:y3(T),release_date:w3(O),vote_average:_3(N),favorite:r.find(V=>V.id===S.id)!==void 0,blocked:i.find(V=>V.id===S.id)!==void 0}});t(S=>[...S,..._]),d(w.total_pages),g(w.total_results)})};return M.useEffect(()=>{console.log(`page: ${a} loadMoreData: ${y} totalPages: ${u}`),(a==1||a>1&&!e&&y)&&(n(!0),setTimeout(()=>{h(g3(s)),n(!1),E(!1),a<u||u===0?l(a+1):(l(null),d(0))},1500))},[a,y]),M.useEffect(()=>(window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)),[]),I.jsxs("div",{className:"search-box",children:[I.jsx("input",{type:"text",value:s,placeholder:"Escriba la búsqueda...",onChange:p=>o(p.target.value)}),I.jsx("div",{className:"search-btn",disabled:v,onClick:c,children:I.jsx(ly,{})}),I.jsx("div",{className:"cancel-btn",disabled:v,onClick:()=>o(""),children:I.jsx(uy,{})}),I.jsx("div",{className:"search-results",children:m>0&&I.jsxs("p",{children:[m," peliculas encontradas"]})})]})}var Sf={},qh={exports:{}},Kh,Mw;function I3(){if(Mw)return Kh;Mw=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Kh=t,Kh}var Gh,Lw;function b3(){if(Lw)return Gh;Lw=1;var t=I3();function e(){}function n(){}return n.resetWarningCache=e,Gh=function(){function r(o,a,l,u,d,m){if(m!==t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}r.isRequired=r;function i(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return s.PropTypes=s,s},Gh}var jw;function _I(){return jw||(jw=1,qh.exports=b3()()),qh.exports}var EI={exports:{}};(function(t,e){(function(n){t.exports=n(null)})(function n(r){var i=/^\0+/g,s=/[\0\r\f]/g,o=/: */g,a=/zoo|gra/,l=/([,: ])(transform)/g,u=/,+\s*(?![^(]*[)])/g,d=/ +\s*(?![^(]*[)])/g,m=/ *[\0] */g,g=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,E=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,v=/\W+/g,c=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,h=/:(read-only)/g,p=/\s+(?=[{\];=:>])/g,w=/([[}=:>])\s+/g,_=/(\{[^{]+?);(?=\})/g,S=/\s{2,}/g,C=/([^\(])(:+) */g,b=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,O=/-self|flex-/g,N=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,L="-webkit-",q="-moz-",Q="-ms-",P=59,F=125,Y=123,ae=40,Se=41,Ht=91,Cn=93,Zt=10,ht=13,Et=9,Kr=64,en=32,ea=38,tn=45,hu=95,Gn=42,wr=44,Yn=58,k=39,A=34,R=47,J=62,W=43,B=126,te=0,Oe=12,Ve=11,Un=107,ta=109,Rs=115,Ps=112,pu=111,mu=105,Df=99,na=100,ZI=112,Xn=1,Gr=1,Yr=0,Qn=1,Dn=1,Mf=1,Oy=0,Uy=0,Lf=0,jf=[],$f=[],_r=0,Ff=null,eb=-2,tb=-1,nb=0,rb=1,ib=2,sb=3,Dy=0,ra=1,gu="",Xr="",ia="";function Bf(ce,ie,ne,he,K){for(var Te,z,_e=0,ge=0,rt=0,ye=0,lt=0,Ne=0,ve=0,Wt=0,nn=0,Us=0,rn=0,Er=0,vu=0,Jn=0,ke=0,In=0,Ds=0,oa=0,Re=0,Hi=ne.length,aa=Hi-1,At="",de="",Ue="",Ze="",wu="",Wf="";ke<Hi;){if(ve=ne.charCodeAt(ke),ke===aa&&ge+ye+rt+_e!==0&&(ge!==0&&(ve=ge===R?Zt:R),ye=rt=_e=0,Hi++,aa++),ge+ye+rt+_e===0){if(ke===aa&&(In>0&&(de=de.replace(s,"")),de.trim().length>0)){switch(ve){case en:case Et:case P:case ht:case Zt:break;default:de+=ne.charAt(ke)}ve=P}if(Ds===1)switch(ve){case Y:case F:case P:case A:case k:case ae:case Se:case wr:Ds=0;case Et:case ht:case Zt:case en:break;default:for(Ds=0,Re=ke,lt=ve,ke--,ve=P;Re<Hi;)switch(ne.charCodeAt(Re++)){case Zt:case ht:case P:++ke,ve=lt,Re=Hi;break;case Yn:In>0&&(++ke,ve=lt);case Y:Re=Hi}}switch(ve){case Y:for(lt=(de=de.trim()).charCodeAt(0),rn=1,Re=++ke;ke<Hi;){switch(ve=ne.charCodeAt(ke)){case Y:rn++;break;case F:rn--;break;case R:switch(Ne=ne.charCodeAt(ke+1)){case Gn:case R:ke=ab(Ne,ke,aa,ne)}break;case Ht:ve++;case ae:ve++;case A:case k:for(;ke++<aa&&ne.charCodeAt(ke)!==ve;);}if(rn===0)break;ke++}switch(Ue=ne.substring(Re,ke),lt===te&&(lt=(de=de.replace(i,"").trim()).charCodeAt(0)),lt){case Kr:switch(In>0&&(de=de.replace(s,"")),Ne=de.charCodeAt(1)){case na:case ta:case Rs:case tn:Te=ie;break;default:Te=jf}if(Re=(Ue=Bf(ie,Te,Ue,Ne,K+1)).length,Lf>0&&Re===0&&(Re=de.length),_r>0&&(Te=My(jf,de,oa),z=Os(sb,Ue,Te,ie,Gr,Xn,Re,Ne,K,he),de=Te.join(""),z!==void 0&&(Re=(Ue=z.trim()).length)===0&&(Ne=0,Ue="")),Re>0)switch(Ne){case Rs:de=de.replace(x,ob);case na:case ta:case tn:Ue=de+"{"+Ue+"}";break;case Un:Ue=(de=de.replace(c,"$1 $2"+(ra>0?gu:"")))+"{"+Ue+"}",Dn===1||Dn===2&&yu("@"+Ue,3)?Ue="@"+L+Ue+"@"+Ue:Ue="@"+Ue;break;default:Ue=de+Ue,he===ZI&&(Ze+=Ue,Ue="")}else Ue="";break;default:Ue=Bf(ie,My(ie,de,oa),Ue,he,K+1)}wu+=Ue,Er=0,Ds=0,Jn=0,In=0,oa=0,vu=0,de="",Ue="",ve=ne.charCodeAt(++ke);break;case F:case P:if((Re=(de=(In>0?de.replace(s,""):de).trim()).length)>1)switch(Jn===0&&((lt=de.charCodeAt(0))===tn||lt>96&&lt<123)&&(Re=(de=de.replace(" ",":")).length),_r>0&&(z=Os(rb,de,ie,ce,Gr,Xn,Ze.length,he,K,he))!==void 0&&(Re=(de=z.trim()).length)===0&&(de="\0\0"),lt=de.charCodeAt(0),Ne=de.charCodeAt(1),lt){case te:break;case Kr:if(Ne===mu||Ne===Df){Wf+=de+ne.charAt(ke);break}default:if(de.charCodeAt(Re-1)===Yn)break;Ze+=Vf(de,lt,Ne,de.charCodeAt(2))}Er=0,Ds=0,Jn=0,In=0,oa=0,de="",ve=ne.charCodeAt(++ke)}}switch(ve){case ht:case Zt:if(ge+ye+rt+_e+Uy===0)switch(Us){case Se:case k:case A:case Kr:case B:case J:case Gn:case W:case R:case tn:case Yn:case wr:case P:case Y:case F:break;default:Jn>0&&(Ds=1)}ge===R?ge=0:Qn+Er===0&&he!==Un&&de.length>0&&(In=1,de+="\0"),_r*Dy>0&&Os(nb,de,ie,ce,Gr,Xn,Ze.length,he,K,he),Xn=1,Gr++;break;case P:case F:if(ge+ye+rt+_e===0){Xn++;break}default:switch(Xn++,At=ne.charAt(ke),ve){case Et:case en:if(ye+_e+ge===0)switch(Wt){case wr:case Yn:case Et:case en:At="";break;default:ve!==en&&(At=" ")}break;case te:At="\\0";break;case Oe:At="\\f";break;case Ve:At="\\v";break;case ea:ye+ge+_e===0&&Qn>0&&(oa=1,In=1,At="\f"+At);break;case 108:if(ye+ge+_e+Yr===0&&Jn>0)switch(ke-Jn){case 2:Wt===Ps&&ne.charCodeAt(ke-3)===Yn&&(Yr=Wt);case 8:nn===pu&&(Yr=nn)}break;case Yn:ye+ge+_e===0&&(Jn=ke);break;case wr:ge+rt+ye+_e===0&&(In=1,At+="\r");break;case A:case k:ge===0&&(ye=ye===ve?0:ye===0?ve:ye);break;case Ht:ye+ge+rt===0&&_e++;break;case Cn:ye+ge+rt===0&&_e--;break;case Se:ye+ge+_e===0&&rt--;break;case ae:if(ye+ge+_e===0){if(Er===0)switch(2*Wt+3*nn){case 533:break;default:rn=0,Er=1}rt++}break;case Kr:ge+rt+ye+_e+Jn+vu===0&&(vu=1);break;case Gn:case R:if(ye+_e+rt>0)break;switch(ge){case 0:switch(2*ve+3*ne.charCodeAt(ke+1)){case 235:ge=R;break;case 220:Re=ke,ge=Gn}break;case Gn:ve===R&&Wt===Gn&&Re+2!==ke&&(ne.charCodeAt(Re+2)===33&&(Ze+=ne.substring(Re,ke+1)),At="",ge=0)}}if(ge===0){if(Qn+ye+_e+vu===0&&he!==Un&&ve!==P)switch(ve){case wr:case B:case J:case W:case Se:case ae:if(Er===0){switch(Wt){case Et:case en:case Zt:case ht:At+="\0";break;default:At="\0"+At+(ve===wr?"":"\0")}In=1}else switch(ve){case ae:Jn+7===ke&&Wt===108&&(Jn=0),Er=++rn;break;case Se:(Er=--rn)==0&&(In=1,At+="\0")}break;case Et:case en:switch(Wt){case te:case Y:case F:case P:case wr:case Oe:case Et:case en:case Zt:case ht:break;default:Er===0&&(In=1,At+="\0")}}de+=At,ve!==en&&ve!==Et&&(Us=ve)}}nn=Wt,Wt=ve,ke++}if(Re=Ze.length,Lf>0&&Re===0&&wu.length===0&&ie[0].length!==0&&(he!==ta||ie.length===1&&(Qn>0?Xr:ia)===ie[0])&&(Re=ie.join(",").length+2),Re>0){if(Te=Qn===0&&he!==Un?function(jy){for(var Sr,St,_u=0,$y=jy.length,Fy=Array($y);_u<$y;++_u){for(var qf=jy[_u].split(m),Eu="",Ms=0,Kf=0,By=0,Vy=0,Hy=qf.length;Ms<Hy;++Ms)if(!((Kf=(St=qf[Ms]).length)===0&&Hy>1)){if(By=Eu.charCodeAt(Eu.length-1),Vy=St.charCodeAt(0),Sr="",Ms!==0)switch(By){case Gn:case B:case J:case W:case en:case ae:break;default:Sr=" "}switch(Vy){case ea:St=Sr+Xr;case B:case J:case W:case en:case Se:case ae:break;case Ht:St=Sr+St+Xr;break;case Yn:switch(2*St.charCodeAt(1)+3*St.charCodeAt(2)){case 530:if(Mf>0){St=Sr+St.substring(8,Kf-1);break}default:(Ms<1||qf[Ms-1].length<1)&&(St=Sr+Xr+St)}break;case wr:Sr="";default:Kf>1&&St.indexOf(":")>0?St=Sr+St.replace(C,"$1"+Xr+"$2"):St=Sr+St+Xr}Eu+=St}Fy[_u]=Eu.replace(s,"").trim()}return Fy}(ie):ie,_r>0&&(z=Os(ib,Ze,Te,ce,Gr,Xn,Re,he,K,he))!==void 0&&(Ze=z).length===0)return Wf+Ze+wu;if(Ze=Te.join(",")+"{"+Ze+"}",Dn*Yr!=0){switch(Dn===2&&!yu(Ze,2)&&(Yr=0),Yr){case pu:Ze=Ze.replace(h,":"+q+"$1")+Ze;break;case Ps:Ze=Ze.replace(f,"::"+L+"input-$1")+Ze.replace(f,"::"+q+"$1")+Ze.replace(f,":"+Q+"input-$1")+Ze}Yr=0}}return Wf+Ze+wu}function My(ce,ie,ne){var he=ie.trim().split(g),K=he,Te=he.length,z=ce.length;switch(z){case 0:case 1:for(var _e=0,ge=z===0?"":ce[0]+" ";_e<Te;++_e)K[_e]=Ly(ge,K[_e],ne,z).trim();break;default:_e=0;var rt=0;for(K=[];_e<Te;++_e)for(var ye=0;ye<z;++ye)K[rt++]=Ly(ce[ye]+" ",he[_e],ne,z).trim()}return K}function Ly(ce,ie,ne,he){var K=ie,Te=K.charCodeAt(0);switch(Te<33&&(Te=(K=K.trim()).charCodeAt(0)),Te){case ea:switch(Qn+he){case 0:case 1:if(ce.trim().length===0)break;default:return K.replace(y,"$1"+ce.trim())}break;case Yn:switch(K.charCodeAt(1)){case 103:if(Mf>0&&Qn>0)return K.replace(E,"$1").replace(y,"$1"+ia);break;default:return ce.trim()+K.replace(y,"$1"+ce.trim())}default:if(ne*Qn>0&&K.indexOf("\f")>0)return K.replace(y,(ce.charCodeAt(0)===Yn?"":"$1")+ce.trim())}return ce+K}function Vf(ce,ie,ne,he){var K,Te=0,z=ce+";",_e=2*ie+3*ne+4*he;if(_e===944)return function(ge){var rt=ge.length,ye=ge.indexOf(":",9)+1,lt=ge.substring(0,ye).trim(),Ne=ge.substring(ye,rt-1).trim();switch(ge.charCodeAt(9)*ra){case 0:break;case tn:if(ge.charCodeAt(10)!==110)break;default:for(var ve=Ne.split((Ne="",u)),Wt=0,ye=0,rt=ve.length;Wt<rt;ye=0,++Wt){for(var nn=ve[Wt],Us=nn.split(d);nn=Us[ye];){var rn=nn.charCodeAt(0);if(ra===1&&(rn>Kr&&rn<90||rn>96&&rn<123||rn===hu||rn===tn&&nn.charCodeAt(1)!==tn))switch(isNaN(parseFloat(nn))+(nn.indexOf("(")!==-1)){case 1:switch(nn){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:nn+=gu}}Us[ye++]=nn}Ne+=(Wt===0?"":",")+Us.join(" ")}}return Ne=lt+Ne+";",Dn===1||Dn===2&&yu(Ne,1)?L+Ne+Ne:Ne}(z);if(Dn===0||Dn===2&&!yu(z,1))return z;switch(_e){case 1015:return z.charCodeAt(10)===97?L+z+z:z;case 951:return z.charCodeAt(3)===116?L+z+z:z;case 963:return z.charCodeAt(5)===110?L+z+z:z;case 1009:if(z.charCodeAt(4)!==100)break;case 969:case 942:return L+z+z;case 978:return L+z+q+z+z;case 1019:case 983:return L+z+q+z+Q+z+z;case 883:return z.charCodeAt(8)===tn?L+z+z:z.indexOf("image-set(",11)>0?z.replace(V,"$1"+L+"$2")+z:z;case 932:if(z.charCodeAt(4)===tn)switch(z.charCodeAt(5)){case 103:return L+"box-"+z.replace("-grow","")+L+z+Q+z.replace("grow","positive")+z;case 115:return L+z+Q+z.replace("shrink","negative")+z;case 98:return L+z+Q+z.replace("basis","preferred-size")+z}return L+z+Q+z+z;case 964:return L+z+Q+"flex-"+z+z;case 1023:if(z.charCodeAt(8)!==99)break;return K=z.substring(z.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),L+"box-pack"+K+L+z+Q+"flex-pack"+K+z;case 1005:return a.test(z)?z.replace(o,":"+L)+z.replace(o,":"+q)+z:z;case 1e3:switch(Te=(K=z.substring(13).trim()).indexOf("-")+1,K.charCodeAt(0)+K.charCodeAt(Te)){case 226:K=z.replace(b,"tb");break;case 232:K=z.replace(b,"tb-rl");break;case 220:K=z.replace(b,"lr");break;default:return z}return L+z+Q+K+z;case 1017:if(z.indexOf("sticky",9)===-1)return z;case 975:switch(Te=(z=ce).length-10,_e=(K=(z.charCodeAt(Te)===33?z.substring(0,Te):z).substring(ce.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|K.charCodeAt(7))){case 203:if(K.charCodeAt(8)<111)break;case 115:z=z.replace(K,L+K)+";"+z;break;case 207:case 102:z=z.replace(K,L+(_e>102?"inline-":"")+"box")+";"+z.replace(K,L+K)+";"+z.replace(K,Q+K+"box")+";"+z}return z+";";case 938:if(z.charCodeAt(5)===tn)switch(z.charCodeAt(6)){case 105:return K=z.replace("-items",""),L+z+L+"box-"+K+Q+"flex-"+K+z;case 115:return L+z+Q+"flex-item-"+z.replace(O,"")+z;default:return L+z+Q+"flex-line-pack"+z.replace("align-content","").replace(O,"")+z}break;case 973:case 989:if(z.charCodeAt(3)!==tn||z.charCodeAt(4)===122)break;case 931:case 953:if(D.test(ce)===!0)return(K=ce.substring(ce.indexOf(":")+1)).charCodeAt(0)===115?Vf(ce.replace("stretch","fill-available"),ie,ne,he).replace(":fill-available",":stretch"):z.replace(K,L+K)+z.replace(K,q+K.replace("fill-",""))+z;break;case 962:if(z=L+z+(z.charCodeAt(5)===102?Q+z:"")+z,ne+he===211&&z.charCodeAt(13)===105&&z.indexOf("transform",10)>0)return z.substring(0,z.indexOf(";",27)+1).replace(l,"$1"+L+"$2")+z}return z}function yu(ce,ie){var ne=ce.indexOf(ie===1?":":"{"),he=ce.substring(0,ie!==3?ne:10),K=ce.substring(ne+1,ce.length-1);return Ff(ie!==2?he:he.replace(N,"$1"),K,ie)}function ob(ce,ie){var ne=Vf(ie,ie.charCodeAt(0),ie.charCodeAt(1),ie.charCodeAt(2));return ne!==ie+";"?ne.replace(T," or ($1)").substring(4):"("+ie+")"}function Os(ce,ie,ne,he,K,Te,z,_e,ge,rt){for(var ye,lt=0,Ne=ie;lt<_r;++lt)switch(ye=$f[lt].call(sa,ce,Ne,ne,he,K,Te,z,_e,ge,rt)){case void 0:case!1:case!0:case null:break;default:Ne=ye}if(Ne!==ie)return Ne}function ab(ce,ie,ne,he){for(var K=ie+1;K<ne;++K)switch(he.charCodeAt(K)){case R:if(ce===Gn&&he.charCodeAt(K-1)===Gn&&ie+2!==K)return K+1;break;case Zt:if(ce===R)return K+1}return K}function Hf(ce){for(var ie in ce){var ne=ce[ie];switch(ie){case"keyframe":ra=0|ne;break;case"global":Mf=0|ne;break;case"cascade":Qn=0|ne;break;case"compress":Oy=0|ne;break;case"semicolon":Uy=0|ne;break;case"preserve":Lf=0|ne;break;case"prefix":Ff=null,ne?typeof ne!="function"?Dn=1:(Dn=2,Ff=ne):Dn=0}}return Hf}function sa(ce,ie){if(this!==void 0&&this.constructor===sa)return n(ce);var ne=ce,he=ne.charCodeAt(0);he<33&&(he=(ne=ne.trim()).charCodeAt(0)),ra>0&&(gu=ne.replace(v,he===Ht?"":"-")),he=1,Qn===1?ia=ne:Xr=ne;var K,Te=[ia];_r>0&&(K=Os(tb,ie,Te,Te,Gr,Xn,0,0,0,0))!==void 0&&typeof K=="string"&&(ie=K);var z=Bf(jf,Te,ie,0,0);return _r>0&&(K=Os(eb,z,Te,Te,Gr,Xn,z.length,0,0,0))!==void 0&&typeof(z=K)!="string"&&(he=0),gu="",ia="",Xr="",Yr=0,Gr=1,Xn=1,Oy*he==0?z:z.replace(s,"").replace(p,"").replace(w,"$1").replace(_,"$1").replace(S," ")}return sa.use=function ce(ie){switch(ie){case void 0:case null:_r=$f.length=0;break;default:if(typeof ie=="function")$f[_r++]=ie;else if(typeof ie=="object")for(var ne=0,he=ie.length;ne<he;++ne)ce(ie[ne]);else Dy=0|!!ie}return ce},sa.set=Hf,r!==void 0&&Hf(r),sa})})(EI);var T3=EI.exports;const SI=jm(T3);var kI={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function(n){var r="/*|*/",i=r+"}";function s(o){if(o)try{n(o+"}")}catch{}}return function(a,l,u,d,m,g,y,E,v,c){switch(a){case 1:if(v===0&&l.charCodeAt(0)===64)return n(l+";"),"";break;case 2:if(E===0)return l+r;break;case 3:switch(E){case 102:case 112:return n(u[0]+l),"";default:return l+(c===0?r:"")}case-2:l.split(i).forEach(s)}}}})})(kI);var x3=kI.exports;const z3=jm(x3);var A3={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},CI={exports:{}},Ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _t=typeof Symbol=="function"&&Symbol.for,cy=_t?Symbol.for("react.element"):60103,dy=_t?Symbol.for("react.portal"):60106,kf=_t?Symbol.for("react.fragment"):60107,Cf=_t?Symbol.for("react.strict_mode"):60108,If=_t?Symbol.for("react.profiler"):60114,bf=_t?Symbol.for("react.provider"):60109,Tf=_t?Symbol.for("react.context"):60110,fy=_t?Symbol.for("react.async_mode"):60111,xf=_t?Symbol.for("react.concurrent_mode"):60111,zf=_t?Symbol.for("react.forward_ref"):60112,Af=_t?Symbol.for("react.suspense"):60113,N3=_t?Symbol.for("react.suspense_list"):60120,Nf=_t?Symbol.for("react.memo"):60115,Rf=_t?Symbol.for("react.lazy"):60116,R3=_t?Symbol.for("react.block"):60121,P3=_t?Symbol.for("react.fundamental"):60117,O3=_t?Symbol.for("react.responder"):60118,U3=_t?Symbol.for("react.scope"):60119;function kn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case cy:switch(t=t.type,t){case fy:case xf:case kf:case If:case Cf:case Af:return t;default:switch(t=t&&t.$$typeof,t){case Tf:case zf:case Rf:case Nf:case bf:return t;default:return e}}case dy:return e}}}function II(t){return kn(t)===xf}Ae.AsyncMode=fy;Ae.ConcurrentMode=xf;Ae.ContextConsumer=Tf;Ae.ContextProvider=bf;Ae.Element=cy;Ae.ForwardRef=zf;Ae.Fragment=kf;Ae.Lazy=Rf;Ae.Memo=Nf;Ae.Portal=dy;Ae.Profiler=If;Ae.StrictMode=Cf;Ae.Suspense=Af;Ae.isAsyncMode=function(t){return II(t)||kn(t)===fy};Ae.isConcurrentMode=II;Ae.isContextConsumer=function(t){return kn(t)===Tf};Ae.isContextProvider=function(t){return kn(t)===bf};Ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===cy};Ae.isForwardRef=function(t){return kn(t)===zf};Ae.isFragment=function(t){return kn(t)===kf};Ae.isLazy=function(t){return kn(t)===Rf};Ae.isMemo=function(t){return kn(t)===Nf};Ae.isPortal=function(t){return kn(t)===dy};Ae.isProfiler=function(t){return kn(t)===If};Ae.isStrictMode=function(t){return kn(t)===Cf};Ae.isSuspense=function(t){return kn(t)===Af};Ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===kf||t===xf||t===If||t===Cf||t===Af||t===N3||typeof t=="object"&&t!==null&&(t.$$typeof===Rf||t.$$typeof===Nf||t.$$typeof===bf||t.$$typeof===Tf||t.$$typeof===zf||t.$$typeof===P3||t.$$typeof===O3||t.$$typeof===U3||t.$$typeof===R3)};Ae.typeOf=kn;CI.exports=Ae;var bI=CI.exports,$w=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function D3(t,e){return!!(t===e||$w(t)&&$w(e))}function M3(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!D3(t[n],e[n]))return!1;return!0}function TI(t,e){e===void 0&&(e=M3);var n,r=[],i,s=!1;function o(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s&&n===this&&e(a,r)||(i=t.apply(this,a),s=!0,n=this,r=a),i}return o}_I();function L3(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var j3=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$3=L3(function(t){return j3.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function hy(t){return Object.prototype.toString.call(t).slice(8,-1)}function Ra(t){return hy(t)!=="Object"?!1:t.constructor===Object&&Object.getPrototypeOf(t)===Object.prototype}function Fw(t){return hy(t)==="Array"}function Bw(t){return hy(t)==="Symbol"}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Vw(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}function Hw(t,e,n,r){var i=r.propertyIsEnumerable(e)?"enumerable":"nonenumerable";i==="enumerable"&&(t[e]=n),i==="nonenumerable"&&Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!0,configurable:!0})}function xI(t,e,n){if(!Ra(e))return n&&Fw(n)&&n.forEach(function(u){e=u(t,e)}),e;var r={};if(Ra(t)){var i=Object.getOwnPropertyNames(t),s=Object.getOwnPropertySymbols(t);r=Vw(i,s).reduce(function(u,d){var m=t[d];return(!Bw(d)&&!Object.getOwnPropertyNames(e).includes(d)||Bw(d)&&!Object.getOwnPropertySymbols(e).includes(d))&&Hw(u,d,m,t),u},{})}var o=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e),l=Vw(o,a).reduce(function(u,d){var m=e[d],g=Ra(t)?t[d]:void 0;return n&&Fw(n)&&n.forEach(function(y){m=y(g,m)}),g!==void 0&&Ra(m)&&(m=xI(g,m,n)),Hw(u,d,m,e),u},r);return l}function F3(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=null,i=t;return Ra(t)&&t.extensions&&Object.keys(t).length===1&&(i={},r=t.extensions),e.reduce(function(s,o){return xI(s,o,r)},i)}var Ww=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},zI=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},B3=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),fn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uu=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},V3=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Mo=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},py=function(t){return(typeof t>"u"?"undefined":zI(t))==="object"&&t.constructor===Object},pd=Object.freeze([]),Ya=Object.freeze({});function Vr(t){return typeof t=="function"}function my(t){return t.displayName||t.name||"Component"}function H3(t){return typeof t=="function"&&!(t.prototype&&t.prototype.isReactComponent)}function cu(t){return t&&typeof t.styledComponentId=="string"}var Rl=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Pf="data-styled-version",W3="data-styled-streamed",_s=typeof window<"u"&&"HTMLElement"in window,AI=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process<"u"&&({}.REACT_APP_SC_DISABLE_SPEEDY||{}.SC_DISABLE_SPEEDY)||!1,q3={},gr=function(t){uu(e,t);function e(n){vr(this,e);for(var r=arguments.length,i=Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];var o,o=Mo(this,t.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(i.length>0?" Additional arguments: "+i.join(", "):"")));return Mo(o)}return e}(Error),K3=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,G3=function(t){var e=""+(t||""),n=[];return e.replace(K3,function(r,i,s){return n.push({componentId:i,matchIndex:s}),r}),n.map(function(r,i){var s=r.componentId,o=r.matchIndex,a=n[i+1],l=a?e.slice(o,a.matchIndex):e.slice(o);return{componentId:s,cssFromDOM:l}})},Y3=/^\s*\/\/.*$/gm,NI=new SI({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),RI=new SI({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),Om=[],PI=function(e){if(e===-2){var n=Om;return Om=[],n}},OI=z3(function(t){Om.push(t)}),UI=void 0,yo=void 0,DI=void 0,X3=function(e,n,r){return n>0&&r.slice(0,n).indexOf(yo)!==-1&&r.slice(n-yo.length,n)!==yo?"."+UI:e},Q3=function(e,n,r){e===2&&r.length&&r[0].lastIndexOf(yo)>0&&(r[0]=r[0].replace(DI,X3))};RI.use([Q3,OI,PI]);NI.use([OI,PI]);var J3=function(e){return NI("",e)};function gy(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",i=t.join("").replace(Y3,""),s=e&&n?n+" "+e+" { "+i+" }":i;return UI=r,yo=e,DI=new RegExp("\\"+yo+"\\b","g"),RI(n||!e?"":e,s)}var yy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},vy=function(e,n,r){if(r){var i=e[n]||(e[n]=Object.create(null));i[r]=!0}},md=function(e,n){e[n]=Object.create(null)},wy=function(e){return function(n,r){return e[n]!==void 0&&e[n][r]}},MI=function(e){var n="";for(var r in e)n+=Object.keys(e[r]).join(" ")+" ";return n.trim()},Z3=function(e){var n=Object.create(null);for(var r in e)n[r]=fn({},e[r]);return n},Yh=function(e){if(e.sheet)return e.sheet;for(var n=e.ownerDocument.styleSheets.length,r=0;r<n;r+=1){var i=e.ownerDocument.styleSheets[r];if(i.ownerNode===e)return i}throw new gr(10)},eM=function(e,n,r){if(!n)return!1;var i=e.cssRules.length;try{e.insertRule(n,r<=i?r:i)}catch{return!1}return!0},tM=function(e,n,r){for(var i=n-r,s=n;s>i;s-=1)e.deleteRule(s)},_y=function(e){return`
/* sc-component-id: `+e+` */
`},Xh=function(e,n){for(var r=0,i=0;i<=n;i+=1)r+=e[i];return r},nM=function(e,n,r){var i=document;e?i=e.ownerDocument:n&&(i=n.ownerDocument);var s=i.createElement("style");s.setAttribute(Rl,""),s.setAttribute(Pf,"4.4.1");var o=yy();if(o&&s.setAttribute("nonce",o),s.appendChild(i.createTextNode("")),e&&!n)e.appendChild(s);else{if(!n||!e||!n.parentNode)throw new gr(6);n.parentNode.insertBefore(s,r?n:n.nextSibling)}return s},Ey=function(e,n){return function(r){var i=yy(),s=[i&&'nonce="'+i+'"',Rl+'="'+MI(n)+'"',Pf+'="4.4.1"',r],o=s.filter(Boolean).join(" ");return"<style "+o+">"+e()+"</style>"}},Sy=function(e,n){return function(){var r,i=(r={},r[Rl]=MI(n),r[Pf]="4.4.1",r),s=yy();return s&&(i.nonce=s),Ie.createElement("style",fn({},i,{dangerouslySetInnerHTML:{__html:e()}}))}},ky=function(e){return function(){return Object.keys(e)}},rM=function(e,n){var r=Object.create(null),i=Object.create(null),s=[],o=n!==void 0,a=!1,l=function(y){var E=i[y];return E!==void 0?E:(i[y]=s.length,s.push(0),md(r,y),i[y])},u=function(y,E,v){for(var c=l(y),f=Yh(e),h=Xh(s,c),p=0,w=[],_=E.length,S=0;S<_;S+=1){var C=E[S],b=o;b&&C.indexOf("@import")!==-1?w.push(C):eM(f,C,h+p)&&(b=!1,p+=1)}o&&w.length>0&&(a=!0,n().insertRules(y+"-import",w)),s[c]+=p,vy(r,y,v)},d=function(y){var E=i[y];if(E!==void 0&&e.isConnected!==!1){var v=s[E],c=Yh(e),f=Xh(s,E)-1;tM(c,f,v),s[E]=0,md(r,y),o&&a&&n().removeRules(y+"-import")}},m=function(){var y=Yh(e),E=y.cssRules,v="";for(var c in i){v+=_y(c);for(var f=i[c],h=Xh(s,f),p=s[f],w=h-p;w<h;w+=1){var _=E[w];_!==void 0&&(v+=_.cssText)}}return v};return{clone:function(){throw new gr(5)},css:m,getIds:ky(i),hasNameForId:wy(r),insertMarker:l,insertRules:u,removeRules:d,sealed:!1,styleTag:e,toElement:Sy(m,r),toHTML:Ey(m,r)}},qw=function(e,n){return e.createTextNode(_y(n))},iM=function(e,n){var r=Object.create(null),i=Object.create(null),s=n!==void 0,o=!1,a=function(g){var y=i[g];return y!==void 0?y:(i[g]=qw(e.ownerDocument,g),e.appendChild(i[g]),r[g]=Object.create(null),i[g])},l=function(g,y,E){for(var v=a(g),c=[],f=y.length,h=0;h<f;h+=1){var p=y[h],w=s;if(w&&p.indexOf("@import")!==-1)c.push(p);else{w=!1;var _=h===f-1?"":" ";v.appendData(""+p+_)}}vy(r,g,E),s&&c.length>0&&(o=!0,n().insertRules(g+"-import",c))},u=function(g){var y=i[g];if(y!==void 0){var E=qw(e.ownerDocument,g);e.replaceChild(E,y),i[g]=E,md(r,g),s&&o&&n().removeRules(g+"-import")}},d=function(){var g="";for(var y in i)g+=i[y].data;return g};return{clone:function(){throw new gr(5)},css:d,getIds:ky(i),hasNameForId:wy(r),insertMarker:a,insertRules:l,removeRules:u,sealed:!1,styleTag:e,toElement:Sy(d,r),toHTML:Ey(d,r)}},sM=function t(e,n){var r=e===void 0?Object.create(null):e,i=n===void 0?Object.create(null):n,s=function(g){var y=i[g];return y!==void 0?y:i[g]=[""]},o=function(g,y,E){var v=s(g);v[0]+=y.join(" "),vy(r,g,E)},a=function(g){var y=i[g];y!==void 0&&(y[0]="",md(r,g))},l=function(){var g="";for(var y in i){var E=i[y][0];E&&(g+=_y(y)+E)}return g},u=function(){var g=Z3(r),y=Object.create(null);for(var E in i)y[E]=[i[E][0]];return t(g,y)},d={clone:u,css:l,getIds:ky(i),hasNameForId:wy(r),insertMarker:s,insertRules:o,removeRules:a,sealed:!1,styleTag:null,toElement:Sy(l,r),toHTML:Ey(l,r)};return d},Kw=function(e,n,r,i,s){if(_s&&!r){var o=nM(e,n,i);return AI?iM(o,s):rM(o,s)}return sM()},oM=function(e,n,r){for(var i=0,s=r.length;i<s;i+=1){var o=r[i],a=o.componentId,l=o.cssFromDOM,u=J3(l);e.insertRules(a,u)}for(var d=0,m=n.length;d<m;d+=1){var g=n[d];g.parentNode&&g.parentNode.removeChild(g)}},aM=/\s+/,gd=void 0;_s?gd=AI?40:1e3:gd=-1;var Gw=0,Qh=void 0,Hr=function(){function t(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_s?document.head:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;vr(this,t),this.getImportRuleTag=function(){var i=e.importRuleTag;if(i!==void 0)return i;var s=e.tags[0],o=!0;return e.importRuleTag=Kw(e.target,s?s.styleTag:null,e.forceServer,o)},Gw+=1,this.id=Gw,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return t.prototype.rehydrate=function(){if(!_s||this.forceServer)return this;var n=[],r=[],i=!1,s=document.querySelectorAll("style["+Rl+"]["+Pf+'="4.4.1"]'),o=s.length;if(!o)return this;for(var a=0;a<o;a+=1){var l=s[a];i||(i=!!l.getAttribute(W3));for(var u=(l.getAttribute(Rl)||"").trim().split(aM),d=u.length,m=0,g;m<d;m+=1)g=u[m],this.rehydratedNames[g]=!0;r.push.apply(r,G3(l.textContent)),n.push(l)}var y=r.length;if(!y)return this;var E=this.makeTag(null);oM(E,n,r),this.capacity=Math.max(1,gd-y),this.tags.push(E);for(var v=0;v<y;v+=1)this.tagMap[r[v].componentId]=E;return this},t.reset=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;Qh=new t(void 0,n).rehydrate()},t.prototype.clone=function(){var n=new t(this.target,this.forceServer);return this.clones.push(n),n.tags=this.tags.map(function(r){for(var i=r.getIds(),s=r.clone(),o=0;o<i.length;o+=1)n.tagMap[i[o]]=s;return s}),n.rehydratedNames=fn({},this.rehydratedNames),n.deferred=fn({},this.deferred),n},t.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(n){n.sealed=!0})},t.prototype.makeTag=function(n){var r=n?n.styleTag:null,i=!1;return Kw(this.target,r,this.forceServer,i,this.getImportRuleTag)},t.prototype.getTagForId=function(n){var r=this.tagMap[n];if(r!==void 0&&!r.sealed)return r;var i=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=gd,i=this.makeTag(i),this.tags.push(i)),this.tagMap[n]=i},t.prototype.hasId=function(n){return this.tagMap[n]!==void 0},t.prototype.hasNameForId=function(n,r){if(this.ignoreRehydratedNames[n]===void 0&&this.rehydratedNames[r])return!0;var i=this.tagMap[n];return i!==void 0&&i.hasNameForId(n,r)},t.prototype.deferredInject=function(n,r){if(this.tagMap[n]===void 0){for(var i=this.clones,s=0;s<i.length;s+=1)i[s].deferredInject(n,r);this.getTagForId(n).insertMarker(n),this.deferred[n]=r}},t.prototype.inject=function(n,r,i){for(var s=this.clones,o=0;o<s.length;o+=1)s[o].inject(n,r,i);var a=this.getTagForId(n);if(this.deferred[n]!==void 0){var l=this.deferred[n].concat(r);a.insertRules(n,l,i),this.deferred[n]=void 0}else a.insertRules(n,r,i)},t.prototype.remove=function(n){var r=this.tagMap[n];if(r!==void 0){for(var i=this.clones,s=0;s<i.length;s+=1)i[s].remove(n);r.removeRules(n),this.ignoreRehydratedNames[n]=!0,this.deferred[n]=void 0}},t.prototype.toHTML=function(){return this.tags.map(function(n){return n.toHTML()}).join("")},t.prototype.toReactElements=function(){var n=this.id;return this.tags.map(function(r,i){var s="sc-"+n+"-"+i;return M.cloneElement(r.toElement(),{key:s})})},B3(t,null,[{key:"master",get:function(){return Qh||(Qh=new t().rehydrate())}},{key:"instance",get:function(){return t.master}}]),t}(),LI=function(){function t(e,n){var r=this;vr(this,t),this.inject=function(i){i.hasNameForId(r.id,r.name)||i.inject(r.id,r.rules,r.name)},this.toString=function(){throw new gr(12,String(r.name))},this.name=e,this.rules=n,this.id="sc-keyframes-"+e}return t.prototype.getName=function(){return this.name},t}(),lM=/([A-Z])/g,uM=/^ms-/;function Yw(t){return t.replace(lM,"-$1").toLowerCase().replace(uM,"-ms-")}function cM(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!(t in A3)?e+"px":String(e).trim()}var jI=function(e){return e==null||e===!1||e===""},dM=function t(e,n){var r=[],i=Object.keys(e);return i.forEach(function(s){if(!jI(e[s])){if(py(e[s]))return r.push.apply(r,t(e[s],s)),r;if(Vr(e[s]))return r.push(Yw(s)+":",e[s],";"),r;r.push(Yw(s)+": "+cM(s,e[s])+";")}return r}),n?[n+" {"].concat(r,["}"]):r};function Lo(t,e,n){if(Array.isArray(t)){for(var r=[],i=0,s=t.length,o;i<s;i+=1)o=Lo(t[i],e,n),o!==null&&(Array.isArray(o)?r.push.apply(r,o):r.push(o));return r}if(jI(t))return null;if(cu(t))return"."+t.styledComponentId;if(Vr(t))if(H3(t)&&e){var a=t(e);return Lo(a,e,n)}else return t;return t instanceof LI?n?(t.inject(n),t.getName()):t:py(t)?dM(t):t.toString()}function Of(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Vr(t)||py(t)?Lo(Ww(pd,[t].concat(n))):Lo(Ww(t,n))}function Um(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ya;if(!bI.isValidElementType(e))throw new gr(1,String(e));var r=function(){return t(e,n,Of.apply(void 0,arguments))};return r.withConfig=function(i){return Um(t,e,fn({},n,i))},r.attrs=function(i){return Um(t,e,fn({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r}function Cy(t){for(var e=t.length|0,n=e|0,r=0,i;e>=4;)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),i^=i>>>24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)^i,e-=4,++r;switch(e){case 3:n^=(t.charCodeAt(r+2)&255)<<16;case 2:n^=(t.charCodeAt(r+1)&255)<<8;case 1:n^=t.charCodeAt(r)&255,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)}return n^=n>>>13,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16),(n^n>>>15)>>>0}var Qu=52,Xw=function(e){return String.fromCharCode(e+(e>25?39:97))};function $I(t){var e="",n=void 0;for(n=t;n>Qu;n=Math.floor(n/Qu))e=Xw(n%Qu)+e;return Xw(n%Qu)+e}function fM(t){for(var e in t)if(Vr(t[e]))return!0;return!1}function Iy(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(Array.isArray(r)&&!Iy(r,e))return!1;if(Vr(r)&&!cu(r))return!1}return!e.some(function(i){return Vr(i)||fM(i)})}var Qw=function(e){return $I(Cy(e))},Jw=function(){function t(e,n,r){vr(this,t),this.rules=e,this.isStatic=Iy(e,n),this.componentId=r,Hr.master.hasId(r)||Hr.master.deferredInject(r,[])}return t.prototype.generateAndInjectStyles=function(n,r){var i=this.isStatic,s=this.componentId,o=this.lastClassName;if(_s&&i&&typeof o=="string"&&r.hasNameForId(s,o))return o;var a=Lo(this.rules,n,r),l=Qw(this.componentId+a.join(""));return r.hasNameForId(s,l)||r.inject(this.componentId,gy(a,"."+l,void 0,s),l),this.lastClassName=l,l},t.generateName=function(n){return Qw(n)},t}(),by=function(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ya,r=n?t.theme===n.theme:!1,i=t.theme&&!r?t.theme:e||n.theme;return i},hM=/[[\].#*$><+~=|^:(),"'`-]+/g,pM=/(^-|-$)/g;function Dm(t){return t.replace(hM,"-").replace(pM,"")}function yd(t){return typeof t=="string"&&!0}function mM(t){return yd(t)?"styled."+t:"Styled("+my(t)+")"}var Jh,Zw={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},gM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},e_=(Jh={},Jh[bI.ForwardRef]={$$typeof:!0,render:!0},Jh),yM=Object.defineProperty,vM=Object.getOwnPropertyNames,t_=Object.getOwnPropertySymbols,wM=t_===void 0?function(){return[]}:t_,_M=Object.getOwnPropertyDescriptor,EM=Object.getPrototypeOf,SM=Object.prototype,kM=Array.prototype;function Ty(t,e,n){if(typeof e!="string"){var r=EM(e);r&&r!==SM&&Ty(t,r,n);for(var i=kM.concat(vM(e),wM(e)),s=e_[t.$$typeof]||Zw,o=e_[e.$$typeof]||Zw,a=i.length,l=void 0,u=void 0;a--;)if(u=i[a],!gM[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])&&(l=_M(e,u),l))try{yM(t,u,l)}catch{}return t}return t}function CM(t){return!!(t&&t.prototype&&t.prototype.isReactComponent)}var vd=M.createContext(),Uf=vd.Consumer,IM=function(t){uu(e,t);function e(n){vr(this,e);var r=Mo(this,t.call(this,n));return r.getContext=TI(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return e.prototype.render=function(){return this.props.children?Ie.createElement(vd.Consumer,null,this.renderInner):null},e.prototype.renderInner=function(r){var i=this.getContext(this.props.theme,r);return Ie.createElement(vd.Provider,{value:i},this.props.children)},e.prototype.getTheme=function(r,i){if(Vr(r)){var s=r(i);return s}if(r===null||Array.isArray(r)||(typeof r>"u"?"undefined":zI(r))!=="object")throw new gr(8);return fn({},i,r)},e.prototype.getContext=function(r,i){return this.getTheme(r,i)},e}(M.Component),bM=function(){function t(){vr(this,t),this.masterSheet=Hr.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return t.prototype.seal=function(){if(!this.sealed){var n=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(n,1),this.sealed=!0}},t.prototype.collectStyles=function(n){if(this.sealed)throw new gr(2);return Ie.createElement(FI,{sheet:this.instance},n)},t.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},t.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},t.prototype.interleaveWithNodeStream=function(n){throw new gr(3)},t}(),xy=M.createContext(),zy=xy.Consumer,FI=function(t){uu(e,t);function e(n){vr(this,e);var r=Mo(this,t.call(this,n));return r.getContext=TI(r.getContext),r}return e.prototype.getContext=function(r,i){if(r)return r;if(i)return new Hr(i);throw new gr(4)},e.prototype.render=function(){var r=this.props,i=r.children,s=r.sheet,o=r.target;return Ie.createElement(xy.Provider,{value:this.getContext(s,o)},i)},e}(M.Component),n_={};function TM(t,e,n){var r=typeof e!="string"?"sc":Dm(e),i=(n_[r]||0)+1;n_[r]=i;var s=r+"-"+t.generateName(r+i);return n?n+"-"+s:s}var xM=function(t){uu(e,t);function e(){vr(this,e);var n=Mo(this,t.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return e.prototype.render=function(){return Ie.createElement(zy,null,this.renderOuter)},e.prototype.renderOuter=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hr.master;return this.styleSheet=r,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():Ie.createElement(Uf,null,this.renderInner)},e.prototype.renderInner=function(r){var i=this.props.forwardedComponent,s=i.componentStyle,o=i.defaultProps;i.displayName;var a=i.foldedComponentIds,l=i.styledComponentId,u=i.target,d=void 0;s.isStatic?d=this.generateAndInjectStyles(Ya,this.props):d=this.generateAndInjectStyles(by(this.props,r,o)||Ya,this.props);var m=this.props.as||this.attrs.as||u,g=yd(m),y={},E=fn({},this.props,this.attrs),v=void 0;for(v in E)v==="forwardedComponent"||v==="as"||(v==="forwardedRef"?y.ref=E[v]:v==="forwardedAs"?y.as=E[v]:(!g||$3(v))&&(y[v]=E[v]));return this.props.style&&this.attrs.style&&(y.style=fn({},this.attrs.style,this.props.style)),y.className=Array.prototype.concat(a,l,d!==l?d:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),M.createElement(m,y)},e.prototype.buildExecutionContext=function(r,i,s){var o=this,a=fn({},i,{theme:r});return s.length&&(this.attrs={},s.forEach(function(l){var u=l,d=!1,m=void 0,g=void 0;Vr(u)&&(u=u(a),d=!0);for(g in u)m=u[g],d||Vr(m)&&!CM(m)&&!cu(m)&&(m=m(a)),o.attrs[g]=m,a[g]=m})),a},e.prototype.generateAndInjectStyles=function(r,i){var s=i.forwardedComponent,o=s.attrs,a=s.componentStyle;if(s.warnTooManyClasses,a.isStatic&&!o.length)return a.generateAndInjectStyles(Ya,this.styleSheet);var l=a.generateAndInjectStyles(this.buildExecutionContext(r,i,o),this.styleSheet);return l},e}(M.Component);function BI(t,e,n){var r=cu(t),i=!yd(t),s=e.displayName,o=s===void 0?mM(t):s,a=e.componentId,l=a===void 0?TM(Jw,e.displayName,e.parentComponentId):a,u=e.ParentComponent,d=u===void 0?xM:u,m=e.attrs,g=m===void 0?pd:m,y=e.displayName&&e.componentId?Dm(e.displayName)+"-"+e.componentId:e.componentId||l,E=r&&t.attrs?Array.prototype.concat(t.attrs,g).filter(Boolean):g,v=new Jw(r?t.componentStyle.rules.concat(n):n,E,y),c=void 0,f=function(p,w){return Ie.createElement(d,fn({},p,{forwardedComponent:c,forwardedRef:w}))};return f.displayName=o,c=Ie.forwardRef(f),c.displayName=o,c.attrs=E,c.componentStyle=v,c.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):pd,c.styledComponentId=y,c.target=r?t.target:t,c.withComponent=function(p){var w=e.componentId,_=V3(e,["componentId"]),S=w&&w+"-"+(yd(p)?p:Dm(my(p))),C=fn({},_,{attrs:E,componentId:S,ParentComponent:d});return BI(p,C,n)},Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?F3(t.defaultProps,p):p}}),c.toString=function(){return"."+c.styledComponentId},i&&Ty(c,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),c}var zM=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Mm=function(e){return Um(BI,e)};zM.forEach(function(t){Mm[t]=Mm(t)});var AM=function(){function t(e,n){vr(this,t),this.rules=e,this.componentId=n,this.isStatic=Iy(e,pd),Hr.master.hasId(n)||Hr.master.deferredInject(n,[])}return t.prototype.createStyles=function(n,r){var i=Lo(this.rules,n,r),s=gy(i,"");r.inject(this.componentId,s)},t.prototype.removeStyles=function(n){var r=this.componentId;n.hasId(r)&&n.remove(r)},t.prototype.renderStyles=function(n,r){this.removeStyles(r),this.createStyles(n,r)},t}();_s&&(window.scCGSHMRCache={});function NM(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Of.apply(void 0,[t].concat(n)),s="sc-global-"+Cy(JSON.stringify(i)),o=new AM(i,s),a=function(l){uu(u,l);function u(d){vr(this,u);var m=Mo(this,l.call(this,d)),g=m.constructor,y=g.globalStyle,E=g.styledComponentId;return _s&&(window.scCGSHMRCache[E]=(window.scCGSHMRCache[E]||0)+1),m.state={globalStyle:y,styledComponentId:E},m}return u.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),window.scCGSHMRCache[this.state.styledComponentId]===0&&this.state.globalStyle.removeStyles(this.styleSheet)},u.prototype.render=function(){var m=this;return Ie.createElement(zy,null,function(g){m.styleSheet=g||Hr.master;var y=m.state.globalStyle;return y.isStatic?(y.renderStyles(q3,m.styleSheet),null):Ie.createElement(Uf,null,function(E){var v=m.constructor.defaultProps,c=fn({},m.props);return typeof E<"u"&&(c.theme=by(m.props,E,v)),y.renderStyles(c,m.styleSheet),null})})},u}(Ie.Component);return a.globalStyle=o,a.styledComponentId=s,a}var RM=function(e){return e.replace(/\s|\\n/g,"")};function PM(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Of.apply(void 0,[t].concat(n)),s=$I(Cy(RM(JSON.stringify(i))));return new LI(s,gy(i,s,"@keyframes"))}var OM=function(t){var e=Ie.forwardRef(function(n,r){return Ie.createElement(Uf,null,function(i){var s=t.defaultProps,o=by(n,i,s);return Ie.createElement(t,fn({},n,{theme:o,ref:r}))})});return Ty(e,t),e.displayName="WithTheme("+my(t)+")",e},UM={StyleSheet:Hr};const DM=Object.freeze(Object.defineProperty({__proto__:null,ServerStyleSheet:bM,StyleSheetConsumer:zy,StyleSheetContext:xy,StyleSheetManager:FI,ThemeConsumer:Uf,ThemeContext:vd,ThemeProvider:IM,__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS:UM,createGlobalStyle:NM,css:Of,default:Mm,isStyledComponent:cu,keyframes:PM,withTheme:OM},Symbol.toStringTag,{value:"Module"})),MM=ub(DM);(function(t){(function(e,n){for(var r in n)e[r]=n[r]})(t,function(e){var n={};function r(i){if(n[i])return n[i].exports;var s=n[i]={i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=n,r.d=function(i,s,o){r.o(i,s)||Object.defineProperty(i,s,{enumerable:!0,get:o})},r.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,s){if(1&s&&(i=r(i)),8&s||4&s&&typeof i=="object"&&i&&i.__esModule)return i;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:i}),2&s&&typeof i!="string")for(var a in i)r.d(o,a,function(l){return i[l]}.bind(null,a));return o},r.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(s,"a",s),s},r.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},r.p="",r(r.s=3)}([function(e,n){e.exports=M},function(e,n){e.exports=_I()},function(e,n){e.exports=MM},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=n.WhisperSpinner=n.ClassicSpinner=n.TraceSpinner=n.JellyfishSpinner=n.MagicSpinner=n.FlapperSpinner=n.HoopSpinner=n.RingSpinner=n.RainbowSpinner=n.PongSpinner=n.CombSpinner=n.GooSpinner=n.SwishSpinner=n.RotateSpinner=n.ClapSpinner=n.FlagSpinner=n.SphereSpinner=n.FillSpinner=n.CubeSpinner=n.ImpulseSpinner=n.DominoSpinner=n.SequenceSpinner=n.PulseSpinner=n.SpiralSpinner=n.CircleSpinner=n.GuardSpinner=n.HeartSpinner=n.StageSpinner=n.FireworkSpinner=n.PushSpinner=n.WaveSpinner=n.BarsSpinner=n.SwapSpinner=n.GridSpinner=n.BallSpinner=void 0;var i=r(4),s=r(5),o=r(6),a=r(7),l=r(8),u=r(9),d=r(10),m=r(11),g=r(12),y=r(13),E=r(14),v=r(15),c=r(16),f=r(17),h=r(18),p=r(19),w=r(20),_=r(21),S=r(22),C=r(23),b=r(24),x=r(25),T=r(26),O=r(27),N=r(28),D=r(29),V=r(30),L=r(31),q=r(32),Q=r(33),P=r(34),F=r(35),Y=r(36),ae=r(37),Se=r(38),Ht=r(39);n.BallSpinner=i.BallSpinner,n.GridSpinner=s.GridSpinner,n.SwapSpinner=o.SwapSpinner,n.BarsSpinner=a.BarsSpinner,n.WaveSpinner=l.WaveSpinner,n.PushSpinner=u.PushSpinner,n.FireworkSpinner=d.FireworkSpinner,n.StageSpinner=m.StageSpinner,n.HeartSpinner=g.HeartSpinner,n.GuardSpinner=y.GuardSpinner,n.CircleSpinner=E.CircleSpinner,n.SpiralSpinner=v.SpiralSpinner,n.PulseSpinner=c.PulseSpinner,n.SequenceSpinner=f.SequenceSpinner,n.DominoSpinner=h.DominoSpinner,n.ImpulseSpinner=p.ImpulseSpinner,n.CubeSpinner=w.CubeSpinner,n.FillSpinner=_.FillSpinner,n.SphereSpinner=S.SphereSpinner,n.FlagSpinner=C.FlagSpinner,n.ClapSpinner=b.ClapSpinner,n.RotateSpinner=x.RotateSpinner,n.SwishSpinner=T.SwishSpinner,n.GooSpinner=O.GooSpinner,n.CombSpinner=N.CombSpinner,n.PongSpinner=D.PongSpinner,n.RainbowSpinner=V.RainbowSpinner,n.RingSpinner=L.RingSpinner,n.HoopSpinner=q.HoopSpinner,n.FlapperSpinner=Q.FlapperSpinner,n.MagicSpinner=P.MagicSpinner,n.JellyfishSpinner=F.JellyfishSpinner,n.TraceSpinner=Y.TraceSpinner,n.ClassicSpinner=ae.ClassicSpinner,n.WhisperSpinner=Se.WhisperSpinner,n.MetroSpinner=Ht.MetroSpinner},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BallSpinner=void 0;var i=g([`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`],[`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`]),s=g([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.BallSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f},a.default.createElement(v,{color:h,size:f,sizeUnit:w})," ")},E=d.default.div.withConfig({displayName:"ball__Wrapper",componentId:"sc-1edcqkl-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=d.default.div.withConfig({displayName:"ball__Ball",componentId:"sc-1edcqkl-1"})(o,function(c){return""+c.size/3+c.sizeUnit},function(c){return""+c.size/3+c.sizeUnit},function(c){return c.color},function(c){return function(f){return(0,u.keyframes)(i,f.size/2,f.sizeUnit,-f.size/2,f.sizeUnit)}(c)});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GridSpinner=void 0;var i=g([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.GridSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(_){for(var S=_.countBallsInLine,C=_.color,b=_.size,x=_.sizeUnit,T=[],O=0,N=0;N<S;N++)for(var D=0;D<S;D++)T.push(a.default.createElement(v,{color:C,size:b,x:N*(b/3+b/12),y:D*(b/3+b/12),key:O.toString(),sizeUnit:x})),O++;return T}({countBallsInLine:3,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"grid__Wrapper",componentId:"sc-11vno70-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"grid__Ball",componentId:"sc-11vno70-1"})(o,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.size/4,c.sizeUnit,c.size/4,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwapSpinner=void 0;var i=g([`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`],[`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=function(f){switch(f.index){case 0:return{x:f.size-f.size/4,y:f.y};case 1:return{x:f.x,y:f.y-f.size/2+f.size/8};case 2:return{x:0,y:f.y}}},E=n.SwapSpinner=function(f){var h=f.size,p=f.color,w=f.loading,_=f.sizeUnit;return w&&a.default.createElement(v,{size:h,sizeUnit:_},function(S){for(var C=S.countBalls,b=S.color,x=S.size,T=S.sizeUnit,O=[],N=0;N<C;N++)O.push(a.default.createElement(c,{color:b,size:x,x:N*(x/4+x/8),y:x/2-x/8,key:N.toString(),index:N,sizeUnit:T}));return O}({countBalls:3,color:p,size:h,sizeUnit:_}))},v=d.default.div.withConfig({displayName:"swap__Wrapper",componentId:"sc-1a8o1b-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+(f.size/2+f.size/8)+f.sizeUnit}),c=d.default.div.withConfig({displayName:"swap__Ball",componentId:"sc-1a8o1b-1"})(o,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return(0,u.keyframes)(i,f.y,f.x,y(f).y,y(f).x,f.y,f.x)});E.defaultProps={loading:!0,size:40,color:"#4b4c56",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BarsSpinner=void 0;var i=g([`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`],[`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.BarsSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(_,S,C,b){for(var x=[],T=0;T<_;T++)x.push(a.default.createElement(v,{color:S,size:C,sizeUnit:b,x:T*(C/5+C/25)-C/12,key:T.toString(),index:T}));return x}(5,h,f,w))},E=d.default.div.withConfig({displayName:"bars__Wrapper",componentId:"sc-1sb659-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"bars__Bar",componentId:"sc-1sb659-1"})(o,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/20+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.size/20,c.sizeUnit,c.size/6,c.sizeUnit,c.size/20,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WaveSpinner=void 0;var i=g([`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`],[`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),E=n.WaveSpinner=function(f){var h=f.size,p=f.color,w=f.loading,_=f.sizeUnit;return w&&a.default.createElement(v,{size:h,sizeUnit:_},function(S){for(var C=S.countBars,b=S.color,x=S.size,T=S.sizeUnit,O=[],N=0;N<C;N++)O.push(a.default.createElement(c,{color:b,size:x,x:N*(x/5+(x/15-x/100)),y:0,key:N.toString(),index:N,sizeUnit:T}));return O}({countBars:10,color:p,size:h,sizeUnit:_}))},v=d.default.div.withConfig({displayName:"wave__Wrapper",componentId:"sc-8a0z7x-0"})(s,function(f){return""+2.5*f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"wave__Bar",componentId:"sc-8a0z7x-1"})(o,function(f){return""+(f.y+f.size/10)+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/10+f.sizeUnit},function(f){return""+(f.size-f.size/10)+f.sizeUnit},function(f){return f.color},y,function(f){return .15*f.index});E.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PushSpinner=void 0;var i=g([`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`],[`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),o=g([`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.PushSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(_){for(var S=_.countBars,C=_.color,b=_.size,x=_.sizeUnit,T=[],O=0;O<S;O++)T.push(a.default.createElement(v,{color:C,size:b,x:O*(b/5+(b/15-b/100)),y:0,key:O.toString(),index:O,sizeUnit:x}));return T}({countBars:10,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"push__Wrapper",componentId:"ypksxs-0"})(s,function(c){return""+2.5*c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"push__Bar",componentId:"ypksxs-1"})(o,function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:30,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FireworkSpinner=void 0;var i=m([`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`]),s=m([`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),o=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function m(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var g=(0,l.keyframes)(i),y=n.FireworkSpinner=function(v){var c=v.size,f=v.color,h=v.loading,p=v.sizeUnit;return h&&o.default.createElement(E,{size:c,color:f,sizeUnit:p})},E=u.default.div.withConfig({displayName:"firework__Wrapper",componentId:"sc-1bn5a2-0"})(s,function(v){return""+v.size/10+v.sizeUnit},function(v){return v.color},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},g);y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.StageSpinner=void 0;var i=g([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.StageSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(_){for(var S=_.countBalls,C=_.color,b=_.size,x=_.sizeUnit,T=[],O=0,N=0;N<S;N++)T.push(a.default.createElement(v,{color:C,size:b,index:N,x:N*(b/2.5),y:b/2-b/10,key:O.toString(),sizeUnit:x})),O++;return T}({countBalls:3,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"stage__Wrapper",componentId:"sc-161krao-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"stage__Ball",componentId:"sc-161krao-1"})(o,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y+c.size/2,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)},function(c){return .2*c.index});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HeartSpinner=void 0;var i=m([`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`],[`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`]),s=m([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`]),o=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function m(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var g=(0,l.keyframes)(i),y=n.HeartSpinner=function(v){var c=v.size,f=v.color,h=v.loading,p=v.sizeUnit;return h&&o.default.createElement(E,{size:c,color:f,sizeUnit:p})},E=u.default.div.withConfig({displayName:"heart__Wrapper",componentId:"sc-12jb06u-0"})(s,function(v){return""+v.size+v.sizeUnit},function(v){return""+(v.size-v.size/10)+v.sizeUnit},g,function(v){return""+v.size/20+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+(v.size-v.size/5)+v.sizeUnit},function(v){return v.color},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GuardSpinner=void 0;var i=E([`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`],[`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`]),s=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),o=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`]),l=E([`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),u=y(r(0)),d=y(r(1)),m=r(2),g=y(m);function y(_){return _&&_.__esModule?_:{default:_}}function E(_,S){return Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(S)}}))}var v=(0,m.keyframes)(i),c=n.GuardSpinner=function(_){var S=_.size,C=_.backColor,b=_.frontColor,x=_.loading,T=_.sizeUnit;return x&&u.default.createElement(f,{size:S,sizeUnit:T},function(O){for(var N=O.countCubesInLine,D=O.backColor,V=O.frontColor,L=O.size,q=O.sizeUnit,Q=[],P=0,F=0;F<N;F++)for(var Y=0;Y<N;Y++)Q.push(u.default.createElement(h,{size:L,x:F*(L/4+L/8),y:Y*(L/4+L/8),key:P.toString(),sizeUnit:q},u.default.createElement(p,{size:L,index:P,sizeUnit:q},u.default.createElement(w,{front:!0,size:L,color:V,sizeUnit:q}),u.default.createElement(w,{left:!0,size:L,color:D,sizeUnit:q})))),P++;return Q}({countCubesInLine:3,backColor:C,frontColor:b,size:S,sizeUnit:T}))},f=g.default.div.withConfig({displayName:"guard__Wrapper",componentId:"sc-13axfn9-0"})(s,function(_){return""+_.size+_.sizeUnit},function(_){return""+_.size+_.sizeUnit},function(_){return""+3*_.size+_.sizeUnit}),h=g.default.div.withConfig({displayName:"guard__CubeWrapper",componentId:"sc-13axfn9-1"})(o,function(_){return""+_.y+_.sizeUnit},function(_){return""+_.x+_.sizeUnit},function(_){return""+_.size+_.sizeUnit},function(_){return""+_.size+_.sizeUnit}),p=g.default.div.withConfig({displayName:"guard__Cube",componentId:"sc-13axfn9-2"})(a,function(_){return""+_.size/4+_.sizeUnit},function(_){return""+_.size/4+_.sizeUnit},v,function(_){return .125*_.index}),w=g.default.div.withConfig({displayName:"guard__Side",componentId:"sc-13axfn9-3"})(l,function(_){return _.color},function(_){return _.front?0:-90},function(_){return""+_.size/8+_.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#373846",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CircleSpinner=void 0;var i=m([`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`]),s=m([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`]),o=d(r(0)),a=d(r(1)),l=r(2),u=d(l);function d(v){return v&&v.__esModule?v:{default:v}}function m(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var g=(0,l.keyframes)(i),y=n.CircleSpinner=function(v){var c=v.size,f=v.color,h=v.loading,p=v.sizeUnit;return h&&o.default.createElement(E,{size:c,color:f,sizeUnit:p})},E=u.default.div.withConfig({displayName:"circle__Wrapper",componentId:"sc-16bbsoy-0"})(s,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size/5+v.sizeUnit},function(v){return v.color},g);y.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SpiralSpinner=void 0;var i=E([`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`],[`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`]),s=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),o=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=E([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),u=y(r(0)),d=y(r(1)),m=r(2),g=y(m);function y(_){return _&&_.__esModule?_:{default:_}}function E(_,S){return Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(S)}}))}var v=(0,m.keyframes)(i),c=n.SpiralSpinner=function(_){var S=_.size,C=_.backColor,b=_.frontColor,x=_.loading,T=_.sizeUnit;return x&&u.default.createElement(f,{size:S,sizeUnit:T},function(O){for(var N=O.countCubesInLine,D=O.backColor,V=O.frontColor,L=O.size,q=O.sizeUnit,Q=[],P=0,F=0;F<N;F++)Q.push(u.default.createElement(h,{x:F*(L/4),y:0,key:P.toString(),sizeUnit:q},u.default.createElement(p,{size:L,index:P,sizeUnit:q},u.default.createElement(w,{front:!0,size:L,color:V,sizeUnit:q}),u.default.createElement(w,{back:!0,size:L,color:V,sizeUnit:q}),u.default.createElement(w,{bottom:!0,size:L,color:D,sizeUnit:q}),u.default.createElement(w,{top:!0,size:L,color:D,sizeUnit:q})))),P++;return Q}({countCubesInLine:4,backColor:C,frontColor:b,size:S,sizeUnit:T}))},f=g.default.div.withConfig({displayName:"spiral__Wrapper",componentId:"sc-1898s0q-0"})(s,function(_){return""+_.size+_.sizeUnit},function(_){return""+_.size/4+_.sizeUnit},function(_){return""+3*_.size+_.sizeUnit}),h=g.default.div.withConfig({displayName:"spiral__CubeWrapper",componentId:"sc-1898s0q-1"})(o,function(_){return""+_.y+_.sizeUnit},function(_){return""+_.x+_.sizeUnit}),p=g.default.div.withConfig({displayName:"spiral__Cube",componentId:"sc-1898s0q-2"})(a,function(_){return""+_.size/4+_.sizeUnit},function(_){return""+_.size/4+_.sizeUnit},v,function(_){return .15*_.index}),w=g.default.div.withConfig({displayName:"spiral__Side",componentId:"sc-1898s0q-3"})(l,function(_){return _.color},function(_){return function(S){return S.top?90:S.bottom?-90:0}(_)},function(_){return _.back?180:0},function(_){return""+_.size/8+_.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PulseSpinner=void 0;var i=g([`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`],[`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),E=n.PulseSpinner=function(f){var h=f.size,p=f.color,w=f.loading,_=f.sizeUnit;return w&&a.default.createElement(v,{size:h,sizeUnit:_},function(S){for(var C=S.countCubeInLine,b=S.color,x=S.size,T=S.sizeUnit,O=[],N=0,D=0;D<C;D++)O.push(a.default.createElement(c,{color:b,size:x,x:D*(x/3+x/15),y:0,key:N.toString(),index:D,sizeUnit:T})),N++;return O}({countCubeInLine:3,color:p,size:h,sizeUnit:_}))},v=d.default.div.withConfig({displayName:"pulse__Wrapper",componentId:"sc-1yr0qmr-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit}),c=d.default.div.withConfig({displayName:"pulse__Cube",componentId:"sc-1yr0qmr-1"})(o,function(f){return""+f.y+f.sizeUnit},function(f){return""+f.x+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/2.5+f.sizeUnit},function(f){return f.color},y,function(f){return .15*f.index});E.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SequenceSpinner=void 0;var i=E([`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`]),s=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`]),o=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=E([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),u=y(r(0)),d=y(r(1)),m=r(2),g=y(m);function y(w){return w&&w.__esModule?w:{default:w}}function E(w,_){return Object.freeze(Object.defineProperties(w,{raw:{value:Object.freeze(_)}}))}var v=n.SequenceSpinner=function(w){var _=w.size,S=w.backColor,C=w.frontColor,b=w.loading,x=w.sizeUnit;return b&&u.default.createElement(c,{size:_,sizeUnit:x},function(T){for(var O=T.countCubesInLine,N=T.backColor,D=T.frontColor,V=T.size,L=T.sizeUnit,q=[],Q=0,P=0;P<O;P++)q.push(u.default.createElement(f,{x:P*(V/8+V/11),y:0,key:Q.toString(),sizeUnit:L},u.default.createElement(h,{size:V,index:Q,sizeUnit:L},u.default.createElement(p,{front:!0,size:V,color:D,sizeUnit:L}),u.default.createElement(p,{left:!0,size:V,color:N,sizeUnit:L})))),Q++;return q}({countCubesInLine:5,backColor:S,frontColor:C,size:_,sizeUnit:x}))},c=g.default.div.withConfig({displayName:"sequence__Wrapper",componentId:"sc-61fmm1-0"})(s,function(w){return""+w.size+w.sizeUnit},function(w){return""+w.size/1.75+w.sizeUnit},function(w){return""+3*w.size+w.sizeUnit}),f=g.default.div.withConfig({displayName:"sequence__CubeWrapper",componentId:"sc-61fmm1-1"})(o,function(w){return""+w.y+w.sizeUnit},function(w){return""+w.x+w.sizeUnit}),h=g.default.div.withConfig({displayName:"sequence__Cube",componentId:"sc-61fmm1-2"})(a,function(w){return""+w.size/8+w.sizeUnit},function(w){return""+w.size/1.75+w.sizeUnit},function(w){return(0,m.keyframes)(i,w.size,w.sizeUnit,w.size,w.sizeUnit)},function(w){return .1*w.index}),p=g.default.div.withConfig({displayName:"sequence__Side",componentId:"sc-61fmm1-3"})(l,function(w){return w.color},function(w){return w.front?0:-90},function(w){return""+w.size/16+w.sizeUnit});v.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.DominoSpinner=void 0;var i=g([`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`],[`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`]),s=g([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`],[`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.DominoSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit,_=function(S,C){for(var b=[],x=0;x<=S+1;x++)b.push(C/8*-x);return b}(7,f);return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(S){for(var C=S.countBars,b=S.rotatesPoints,x=S.translatesPoints,T=S.color,O=S.size,N=S.sizeUnit,D=[],V=0;V<C;V++)D.push(a.default.createElement(v,{color:T,size:O,translatesPoints:x,rotate:b[V],key:V.toString(),index:V,sizeUnit:N}));return D}({countBars:7,rotatesPoints:[0,0,0,10,40,60,70],translatesPoints:_,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"domino__Wrapper",componentId:"sc-81zu9-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"domino__Bar",componentId:"sc-81zu9-1"})(o,function(c){return""+c.size/30+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.translatesPoints[0],c.sizeUnit,c.translatesPoints[1],c.sizeUnit,c.translatesPoints[2],c.sizeUnit,c.translatesPoints[3],c.sizeUnit,c.translatesPoints[4],c.sizeUnit,c.translatesPoints[5],c.sizeUnit,c.translatesPoints[6],c.sizeUnit,c.translatesPoints[7],c.sizeUnit,c.translatesPoints[8],c.sizeUnit)},function(c){return-.42*c.index},function(c){return""+(c.size-15*c.index)+c.sizeUnit},function(c){return c.rotate});y.defaultProps={loading:!0,size:100,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ImpulseSpinner=void 0;var i=g([`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`],[`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.ImpulseSpinner=function(c){var f=c.size,h=c.frontColor,p=c.backColor,w=c.loading,_=c.sizeUnit;return w&&a.default.createElement(E,{size:f,sizeUnit:_},function(S){for(var C=S.countBalls,b=S.frontColor,x=S.backColor,T=S.size,O=S.sizeUnit,N=[],D=0;D<C;D++)N.push(a.default.createElement(v,{frontColor:b,backColor:x,size:T,x:D*(T/5+T/5),y:0,key:D.toString(),index:D,sizeUnit:O}));return N}({countBalls:3,frontColor:h,backColor:p,size:f,sizeUnit:_}))},E=d.default.div.withConfig({displayName:"impulse__Wrapper",componentId:"sc-1eafdhu-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"impulse__Ball",componentId:"sc-1eafdhu-1"})(o,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor,c.frontColor,c.backColor,c.backColor)},function(c){return .125*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CubeSpinner=void 0;var i=E([`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`],[`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`]),s=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),o=E([`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`]),l=E([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),u=y(r(0)),d=y(r(1)),m=r(2),g=y(m);function y(_){return _&&_.__esModule?_:{default:_}}function E(_,S){return Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(S)}}))}var v=(0,m.keyframes)(i),c=n.CubeSpinner=function(_){var S=_.size,C=_.backColor,b=_.frontColor,x=_.loading,T=_.sizeUnit;return x&&u.default.createElement(f,{size:S,sizeUnit:T},u.default.createElement(h,{x:0,y:0,sizeUnit:T},u.default.createElement(p,{size:S,sizeUnit:T},u.default.createElement(w,{front:!0,size:S,color:b,sizeUnit:T}),u.default.createElement(w,{back:!0,size:S,color:b,sizeUnit:T}),u.default.createElement(w,{bottom:!0,size:S,color:C,sizeUnit:T}),u.default.createElement(w,{top:!0,size:S,color:C,sizeUnit:T}),u.default.createElement(w,{left:!0,size:S,color:C,sizeUnit:T}),u.default.createElement(w,{right:!0,size:S,color:C,sizeUnit:T}))))},f=g.default.div.withConfig({displayName:"cube__Wrapper",componentId:"sc-1iks05k-0"})(s,function(_){return""+_.size+_.sizeUnit},function(_){return""+_.size+_.sizeUnit},function(_){return""+4*_.size+_.sizeUnit}),h=g.default.div.withConfig({displayName:"cube__CubeWrapper",componentId:"sc-1iks05k-1"})(o,function(_){return""+_.y+_.sizeUnit},function(_){return""+_.x+_.sizeUnit}),p=g.default.div.withConfig({displayName:"cube__Cube",componentId:"sc-1iks05k-2"})(a,function(_){return""+_.size+_.sizeUnit},function(_){return""+_.size+_.sizeUnit},v),w=g.default.div.withConfig({displayName:"cube__Side",componentId:"sc-1iks05k-3"})(l,function(_){return _.color},function(_){return function(S){return S.top?90:S.bottom?-90:0}(_)},function(_){return function(S){return S.left?90:S.right?-90:S.back?180:0}(_)},function(_){return""+_.size/2+_.sizeUnit});c.defaultProps={loading:!0,size:25,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FillSpinner=void 0;var i=y([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),s=y([`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`],[`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`]),o=y([`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`],[`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`]),a=y([`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),l=g(r(0)),u=g(r(1)),d=r(2),m=g(d);function g(p){return p&&p.__esModule?p:{default:p}}function y(p,w){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(w)}}))}var E=(0,d.keyframes)(i),v=(0,d.keyframes)(s),c=n.FillSpinner=function(p){var w=p.size,_=p.color,S=p.loading,C=p.sizeUnit;return S&&l.default.createElement(f,{size:w,color:_,sizeUnit:C},l.default.createElement(h,{color:_,size:w,sizeUnit:C}))},f=m.default.div.withConfig({displayName:"fill__Wrapper",componentId:"ehv7z4-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size/8+p.sizeUnit},function(p){return p.color},E),h=m.default.div.withConfig({displayName:"fill__Plane",componentId:"ehv7z4-1"})(a,function(p){return p.color},v);c.defaultProps={loading:!0,size:20,color:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SphereSpinner=void 0;var i=y([`
    to{
        transform: rotate(360deg);
    }
`],[`
    to{
        transform: rotate(360deg);
    }
`]),s=y([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),o=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`]),a=y([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=g(r(0)),u=g(r(1)),d=r(2),m=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,p){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(p)}}))}var E=(0,d.keyframes)(i),v=n.SphereSpinner=function(h){var p=h.size,w=h.color,_=h.loading,S=h.sizeUnit,C=p/2,b=p/5;return _&&l.default.createElement(c,{size:p,sizeUnit:S},function(x){for(var T=x.countBalls,O=x.radius,N=x.angle,D=x.color,V=x.size,L=x.ballSize,q=x.sizeUnit,Q=[],P=L/2,F=0;F<T;F++){var Y=Math.sin(N*F*(Math.PI/180))*O-P,ae=Math.cos(N*F*(Math.PI/180))*O-P;Q.push(l.default.createElement(f,{color:D,ballSize:L,size:V,x:Y,y:ae,key:F.toString(),index:F,sizeUnit:q}))}return Q}({countBalls:7,radius:C,angle:360/7,color:w,size:p,ballSize:b,sizeUnit:S}))},c=m.default.div.withConfig({displayName:"sphere__Wrapper",componentId:"sc-1t5xu9p-0"})(o,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},E),f=m.default.div.withConfig({displayName:"sphere__Ball",componentId:"sc-1t5xu9p-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.color},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(p){return(0,d.keyframes)(s,p.x,p.sizeUnit,p.y,p.sizeUnit,p.size/12,p.sizeUnit,p.size/12,p.sizeUnit,p.size/12,p.sizeUnit,p.size/12,p.sizeUnit,p.x,p.sizeUnit,p.y,p.sizeUnit)}(h)},function(h){return .3*h.index});v.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlagSpinner=void 0;var i=y([`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`],[`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`]),s=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=y([`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`]),a=y([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`]),l=g(r(0)),u=g(r(1)),d=r(2),m=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,p){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(p)}}))}var E=n.FlagSpinner=function(h){var p=h.size,w=h.color,_=h.loading,S=h.sizeUnit;return _&&l.default.createElement(v,{size:p,sizeUnit:S},function(C){for(var b=C.countPlaneInLine,x=C.color,T=C.size,O=C.sizeUnit,N=[],D=[],V=0,L=0;L<b;L++){for(var q=0;q<b;q++)D.push(l.default.createElement(f,{color:x,size:T,x:L*(T/6+T/9),y:q*(T/6+T/9)+T/10,key:L+q.toString(),index:V,sizeUnit:O})),V++;N.push(l.default.createElement(c,{index:V,key:V.toString(),size:T,sizeUnit:O},[].concat(D))),D.length=0}return N}({countPlaneInLine:4,color:w,size:p,sizeUnit:S}))},v=m.default.div.withConfig({displayName:"flag__Wrapper",componentId:"sc-3eh05c-0"})(s,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit}),c=m.default.div.withConfig({displayName:"flag__Line",componentId:"sc-3eh05c-1"})(o,function(h){return(0,d.keyframes)(i,-h.size/5,h.sizeUnit)},function(h){return .05*h.index}),f=m.default.div.withConfig({displayName:"flag__Plane",componentId:"sc-3eh05c-2"})(a,function(h){return""+h.y+h.sizeUnit},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return""+h.size/6+h.sizeUnit},function(h){return h.color});E.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},E.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClapSpinner=void 0;var i=y([`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`],[`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`]),s=y([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),o=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`]),a=y([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`]),l=g(r(0)),u=g(r(1)),d=r(2),m=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,p){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(p)}}))}var E=(0,d.keyframes)(i),v=n.ClapSpinner=function(h){var p=h.size,w=h.frontColor,_=h.backColor,S=h.loading,C=h.sizeUnit,b=p/2,x=p/5;return S&&l.default.createElement(c,{size:p,sizeUnit:C},function(T){for(var O=T.countBalls,N=T.radius,D=T.angle,V=T.frontColor,L=T.backColor,q=T.size,Q=T.ballSize,P=T.sizeUnit,F=[],Y=Q/2,ae=0;ae<O;ae++){var Se=Math.sin(D*ae*(Math.PI/180))*N-Y,Ht=Math.cos(D*ae*(Math.PI/180))*N-Y;F.push(l.default.createElement(f,{frontColor:V,backColor:L,ballSize:Q,size:q,sizeUnit:P,x:Se,y:Ht,key:ae.toString(),index:ae}))}return F}({countBalls:7,radius:b,angle:360/7,frontColor:w,backColor:_,size:p,ballSize:x,sizeUnit:C}))},c=m.default.div.withConfig({displayName:"clap__Wrapper",componentId:"sc-12p9tb5-0"})(o,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},E),f=m.default.div.withConfig({displayName:"clap__Ball",componentId:"sc-12p9tb5-1"})(a,function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.size/2+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return h.frontColor},function(h){return""+h.x+h.sizeUnit},function(h){return""+h.y+h.sizeUnit},function(h){return function(p){return(0,d.keyframes)(s,p.x,p.sizeUnit,p.y,p.sizeUnit,p.x,p.sizeUnit,p.y,p.sizeUnit,p.x,p.sizeUnit,p.y,p.sizeUnit,p.backColor,p.x,p.sizeUnit,p.y,p.sizeUnit)}(h)},function(h){return .2*h.index});v.defaultProps={loading:!0,size:30,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RotateSpinner=void 0;var i=g([`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`],[`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),E=n.RotateSpinner=function(f){var h=f.size,p=f.color,w=f.loading,_=f.sizeUnit,S=h/2,C=h/5;return w&&a.default.createElement(v,{size:h,sizeUnit:_},function(b){for(var x=b.countBalls,T=b.radius,O=b.angle,N=b.color,D=b.size,V=b.ballSize,L=b.sizeUnit,q=[],Q=V/2,P=0;P<x;P++){var F=Math.sin(O*P*(Math.PI/180))*T-Q,Y=Math.cos(O*P*(Math.PI/180))*T-Q;q.push(a.default.createElement(c,{color:N,ballSize:V,size:D,x:F,y:Y,key:P.toString(),index:P,sizeUnit:L}))}return q}({countBalls:8,radius:S,angle:45,color:p,size:h,ballSize:C,sizeUnit:_}))},v=d.default.div.withConfig({displayName:"rotate__Wrapper",componentId:"sc-1b62bh9-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"rotate__Ball",componentId:"sc-1b62bh9-1"})(o,function(f){return""+f.ballSize+f.sizeUnit},function(f){return""+f.ballSize+f.sizeUnit},function(f){return f.color},y,function(f){return .3*f.index});E.defaultProps={loading:!0,size:45,color:"#00ff89",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwishSpinner=void 0;var i=g([`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`],[`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.SwishSpinner=function(c){var f=c.size,h=c.frontColor,p=c.backColor,w=c.loading,_=c.sizeUnit;return w&&a.default.createElement(E,{size:f,sizeUnit:_},function(S){for(var C=S.countBallsInLine,b=S.frontColor,x=S.backColor,T=S.size,O=S.sizeUnit,N=[],D=0,V=0;V<C;V++)for(var L=0;L<C;L++)N.push(a.default.createElement(v,{frontColor:b,backColor:x,size:T,x:V*(T/3+T/15),y:L*(T/3+T/15),key:D.toString(),index:D,sizeUnit:O})),D++;return N}({countBallsInLine:3,frontColor:h,backColor:p,size:f,sizeUnit:_}))},E=d.default.div.withConfig({displayName:"swish__Wrapper",componentId:"e0szto-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"swish__Ball",componentId:"e0szto-1"})(o,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GooSpinner=void 0;var i=E([`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),s=E([`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`],[`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`]),o=E([`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`],[`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`]),a=E([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`]),l=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`]),u=y(r(0)),d=y(r(1)),m=r(2),g=y(m);function y(p){return p&&p.__esModule?p:{default:p}}function E(p,w){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(w)}}))}var v=n.GooSpinner=function(p){var w=p.size,_=p.color,S=p.loading,C=p.sizeUnit;return S&&u.default.createElement(c,{size:w,sizeUnit:C},u.default.createElement(f,{size:w,sizeUnit:C},function(b){for(var x=b.countBalls,T=b.color,O=b.size,N=b.sizeUnit,D=[],V=O/4,L=[-V,V],q=0;q<x;q++)D.push(u.default.createElement(h,{color:T,size:O,x:O/2-O/6,y:O/2-O/6,key:q.toString(),translateTo:L[q],index:q,sizeUnit:N}));return D}({countBalls:2,color:_,size:w,sizeUnit:C})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},u.default.createElement("defs",null,u.default.createElement("filter",{id:"goo"},u.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),u.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5",result:"goo"}),u.default.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},c=g.default.div.withConfig({displayName:"goo__Wrapper",componentId:"sc-12keask-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit}),f=g.default.div.withConfig({displayName:"goo__BallsWrapper",componentId:"sc-12keask-1"})(a,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit},function(){return(0,m.keyframes)(i)}),h=g.default.div.withConfig({displayName:"goo__Ball",componentId:"sc-12keask-2"})(l,function(p){return""+p.y+p.sizeUnit},function(p){return""+p.x+p.sizeUnit},function(p){return""+p.size/3+p.sizeUnit},function(p){return""+p.size/3+p.sizeUnit},function(p){return p.color},function(p){return(0,m.keyframes)(s,p.translateTo,p.sizeUnit)});v.defaultProps={loading:!0,size:55,color:"#fff",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CombSpinner=void 0;var i=g([`
    to {
        transform: rotate(450deg);
    }
`],[`
    to {
        transform: rotate(450deg);
    }
`]),s=g([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.CombSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit,_=f/9;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(S){for(var C=S.countBars,b=S.color,x=S.size,T=S.sizeUnit,O=[],N=0;N<C;N++)O.push(a.default.createElement(v,{color:b,size:x,key:N.toString(),sizeUnit:T,index:N}));return O}({countBars:_,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"comb__Wrapper",componentId:"x9t4ur-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=d.default.div.withConfig({displayName:"comb__Bar",componentId:"x9t4ur-1"})(o,function(c){return""+c.size/60+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+9*c.index+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:100,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PongSpinner=void 0;var i=E([`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`]),s=E([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`]),o=E([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),a=E([`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`]),l=E([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`]),u=y(r(0)),d=y(r(1)),m=r(2),g=y(m);function y(p){return p&&p.__esModule?p:{default:p}}function E(p,w){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(w)}}))}var v=n.PongSpinner=function(p){var w=p.size,_=p.color,S=p.loading,C=p.sizeUnit;return S&&u.default.createElement(c,{size:w,sizeUnit:C},u.default.createElement(h,{left:!0,color:_,size:w,sizeUnit:C}),u.default.createElement(f,{color:_,size:w,sizeUnit:C}),u.default.createElement(h,{right:!0,color:_,size:w,sizeUnit:C}))},c=g.default.div.withConfig({displayName:"pong__Wrapper",componentId:"sc-1lbqo08-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size/1.75+p.sizeUnit}),f=g.default.div.withConfig({displayName:"pong__Ball",componentId:"sc-1lbqo08-1"})(a,function(p){return""+p.size/8+p.sizeUnit},function(p){return""+p.size/8+p.sizeUnit},function(p){return p.color},function(p){return function(w){return(0,m.keyframes)(s,w.size/3.5-w.size/8,w.sizeUnit,w.size/12,w.sizeUnit,w.size/3.5,w.sizeUnit,w.size-w.size/8,w.sizeUnit,w.size/1.75-w.size/8,w.sizeUnit,w.size/12,w.sizeUnit,w.size/3.5,w.sizeUnit,w.size-w.size/8,w.sizeUnit,w.size/3.5-w.size/8,w.sizeUnit,w.size/12,w.sizeUnit)}(p)}),h=g.default.div.withConfig({displayName:"pong__Player",componentId:"sc-1lbqo08-2"})(l,function(p){return""+p.size/12+p.sizeUnit},function(p){return""+p.size/3+p.sizeUnit},function(p){return p.color},function(p){return p.left?0:p.size},function(p){return p.right?0:p.size},function(p){return function(w){return(0,m.keyframes)(i,w.left?0:w.size/3.5,w.sizeUnit,w.left?w.size/3.5:0,w.sizeUnit,w.left?0:w.size/3.5,w.sizeUnit)}(p)});v.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,color:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RainbowSpinner=void 0;var i=g([`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`],[`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`]),s=g([`
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),o=g([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.RainbowSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f,sizeUnit:w},a.default.createElement(v,{size:f,color:h,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"rainbow__Wrapper",componentId:"sc-1ugdhww-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=d.default.div.withConfig({displayName:"rainbow__Line",componentId:"sc-1ugdhww-1"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit)});y.defaultProps={loading:!0,size:50,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RingSpinner=void 0;var i=y([`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`],[`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`]),s=y([`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`],[`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`]),o=y([`
    width: `,`;
    height: `,`;
`],[`
    width: `,`;
    height: `,`;
`]),a=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`]),l=g(r(0)),u=g(r(1)),d=r(2),m=g(d);function g(f){return f&&f.__esModule?f:{default:f}}function y(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var E=n.RingSpinner=function(f){var h=f.size,p=f.color,w=f.loading,_=f.sizeUnit;return w&&l.default.createElement(v,{size:h,sizeUnit:_},l.default.createElement(c,{size:h,color:p,sizeUnit:_}))},v=m.default.div.withConfig({displayName:"ring__Wrapper",componentId:"sc-1ki0q4s-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=m.default.div.withConfig({displayName:"ring__Circle",componentId:"sc-1ki0q4s-1"})(a,function(f){return"inset 0 0 0 "+f.size/10+f.sizeUnit+" "+f.color},function(f){return(0,d.keyframes)(i,f.size/10,f.sizeUnit,f.color,f.color)},function(f){return f.color},function(f){return(0,d.keyframes)(s,f.color,f.size/10,f.sizeUnit,f.color)});E.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},E.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HoopSpinner=void 0;var i=g([`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`],[`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`]),o=g([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.HoopSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(_){for(var S=_.countBallsInLine,C=_.color,b=_.size,x=_.sizeUnit,T=[],O=0,N=0;N<S;N++)T.push(a.default.createElement(v,{color:C,size:b,key:O.toString(),index:N,sizeUnit:x})),O++;return T}({countBallsInLine:6,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"hoop__Wrapper",componentId:"sc-6dao9o-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"hoop__Ball",componentId:"sc-6dao9o-1"})(o,function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return 1-.2*c.index},function(c){return(0,u.keyframes)(i,c.color,"rotateX(65deg) rotateY(45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)","rotateX(65deg) rotateY(-45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)")},function(c){return 200*c.index});y.defaultProps={loading:!0,size:45,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlapperSpinner=void 0;var i=g([`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`],[`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.FlapperSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit,_=f/2,S=f/1.5;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(C){for(var b=C.countBalls,x=C.radius,T=C.angle,O=C.color,N=C.size,D=C.ballSize,V=C.sizeUnit,L=[],q=D/2,Q=0;Q<b;Q++){var P=Math.sin(T*Q*(Math.PI/180))*x-q,F=Math.cos(T*Q*(Math.PI/180))*x-q;L.push(a.default.createElement(v,{color:O,ballSize:D,size:N,x:P,y:F,key:Q.toString(),index:Q,sizeUnit:V}))}return L}({countBalls:7,radius:_,angle:360/7,color:h,size:f,ballSize:S,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"flapper__Wrapper",componentId:"kzbmuk-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"flapper__Ball",componentId:"kzbmuk-1"})(o,function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return c.color},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.y+c.sizeUnit},function(c){return function(f){return(0,u.keyframes)(i,f.x,f.sizeUnit,f.y,f.sizeUnit)}(c)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MagicSpinner=void 0;var i=g([`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`],[`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),o=g([`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.MagicSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit,_=f/12;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(S){for(var C=S.countBalls,b=S.color,x=S.size,T=S.sizeUnit,O=[],N=0;N<C;N++)O.push(a.default.createElement(v,{color:b,countBalls:C,size:x,key:N.toString(),index:N,sizeUnit:T}));return O}({countBalls:_,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"magic__Wrapper",componentId:"dtlj8d-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"magic__Ball",componentId:"dtlj8d-1"})(o,function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:70,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.JellyfishSpinner=void 0;var i=g([`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`],[`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(c){return c&&c.__esModule?c:{default:c}}function g(c,f){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(f)}}))}var y=n.JellyfishSpinner=function(c){var f=c.size,h=c.color,p=c.loading,w=c.sizeUnit;return p&&a.default.createElement(E,{size:f,sizeUnit:w},function(_){for(var S=_.countBalls,C=_.color,b=_.size,x=_.sizeUnit,T=[],O=0,N=0;N<S;N++)T.push(a.default.createElement(v,{color:C,size:b,countRings:S,key:O.toString(),index:N,sizeUnit:x})),O++;return T}({countBalls:6,color:h,size:f,sizeUnit:w}))},E=d.default.div.withConfig({displayName:"jellyfish__Wrapper",componentId:"qquojd-0"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=d.default.div.withConfig({displayName:"jellyfish__Ring",componentId:"qquojd-1"})(o,function(c){return""+c.index*(c.size/c.countRings)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countRings)/2+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,"translateY("+-c.size/5+c.sizeUnit+");","translateY("+c.size/4+c.sizeUnit+")","translateY("+-c.size/5+c.sizeUnit+")")},function(c){return 100*c.index});y.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TraceSpinner=void 0;var i=E([`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`],[`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`]),s=E([`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`],[`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`]),o=E([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`]),a=E([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`]),l=E([`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`],[`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`]),u=y(r(0)),d=y(r(1)),m=r(2),g=y(m);function y(p){return p&&p.__esModule?p:{default:p}}function E(p,w){return Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(w)}}))}var v=n.TraceSpinner=function(p){var w=p.size,_=p.frontColor,S=p.backColor,C=p.loading,b=p.sizeUnit;return C&&u.default.createElement(c,{size:w,sizeUnit:b},function(x){for(var T=x.countBalls,O=x.frontColor,N=x.backColor,D=x.size,V=x.sizeUnit,L=[],q=[0,1,3,2],Q=0,P=0;P<T/2;P++)for(var F=0;F<T/2;F++)L.push(u.default.createElement(f,{frontColor:O,backColor:N,size:D,x:F*(D/2+D/10),y:P*(D/2+D/10),key:q[Q].toString(),index:q[Q],sizeUnit:V})),Q++;return L}({countBalls:4,frontColor:_,backColor:S,size:w,sizeUnit:b}),u.default.createElement(h,{frontColor:_,size:w,sizeUnit:b}))},c=g.default.div.withConfig({displayName:"trace__Wrapper",componentId:"k17r81-0"})(o,function(p){return""+p.size+p.sizeUnit},function(p){return""+p.size+p.sizeUnit}),f=g.default.div.withConfig({displayName:"trace__Ball",componentId:"k17r81-1"})(a,function(p){return""+p.y+p.sizeUnit},function(p){return""+p.x+p.sizeUnit},function(p){return""+p.size/5+p.sizeUnit},function(p){return""+p.size/5+p.sizeUnit},function(p){return""+p.size/10+p.sizeUnit},function(p){return p.backColor},function(p){return(0,m.keyframes)(i,p.size/10,p.sizeUnit,p.backColor,p.size/10,p.sizeUnit,p.frontColor,p.size/10,p.sizeUnit,p.backColor,p.size/10,p.sizeUnit,p.backColor)},function(p){return 1*p.index}),h=(0,g.default)(f)(l,function(p){return p.frontColor},function(p){return p.frontColor},function(p){return(0,m.keyframes)(s,p.size/2+p.size/10,p.sizeUnit,p.size/2+p.size/10,p.sizeUnit,p.size/2+p.size/10,p.sizeUnit,p.size/2+p.size/10,p.sizeUnit)});v.defaultProps={loading:!0,size:35,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:d.default.bool,size:d.default.number,frontColor:d.default.string,backColor:d.default.string,sizeUnit:d.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClassicSpinner=void 0;var i=g([`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`]),s=g([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),o=g([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`]),a=m(r(0)),l=m(r(1)),u=r(2),d=m(u);function m(f){return f&&f.__esModule?f:{default:f}}function g(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var y=(0,u.keyframes)(i),E=n.ClassicSpinner=function(f){var h=f.size,p=f.color,w=f.loading,_=f.sizeUnit,S=h/2;return w&&a.default.createElement(v,{size:h,sizeUnit:_},function(C){for(var b=C.countBars,x=C.color,T=C.size,O=C.barSize,N=C.sizeUnit,D=[],V=0;V<b;V++){var L=360/b*V,q=-T/2;D.push(a.default.createElement(c,{countBars:b,color:x,barSize:O,size:T,rotate:L,translate:q,key:V.toString(),index:V,sizeUnit:N}))}return D}({countBars:16,radius:S,color:p,size:h,sizeUnit:_}))},v=d.default.div.withConfig({displayName:"classic__Wrapper",componentId:"sc-1ycp7u6-0"})(s,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit}),c=d.default.div.withConfig({displayName:"classic__Bar",componentId:"sc-1ycp7u6-1"})(o,function(f){return""+f.size/10+f.sizeUnit},function(f){return""+f.size/4+f.sizeUnit},function(f){return f.color},function(f){return"rotate("+f.rotate+"deg)"},function(f){return"translate(0, "+f.translate+f.sizeUnit+")"},y,function(f){return .06*f.countBars},function(f){return .06*f.index});E.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},E.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WhisperSpinner=void 0;var i=y([`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`],[`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`]),s=y([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=y([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`]),a=y([`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`],[`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`]),l=g(r(0)),u=g(r(1)),d=r(2),m=g(d);function g(f){return f&&f.__esModule?f:{default:f}}function y(f,h){return Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(h)}}))}var E=n.WhisperSpinner=function(f){var h=f.size,p=f.frontColor,w=f.backColor,_=f.loading,S=f.sizeUnit;return _&&l.default.createElement(v,{size:h,sizeUnit:S},function(C){for(var b=C.countBallsInLine,x=C.frontColor,T=C.backColor,O=C.size,N=C.sizeUnit,D=[],V=0,L=0;L<b;L++)for(var q=0;q<b;q++)D.push(l.default.createElement(c,{frontColor:x,backColor:T,size:O,key:V.toString(),index:V,sizeUnit:N})),V++;return D}({countBallsInLine:3,frontColor:p,backColor:w,size:h,sizeUnit:S}))},v=m.default.div.withConfig({displayName:"whisper__Wrapper",componentId:"k8uff3-0"})(o,function(f){return""+f.size+f.sizeUnit},function(f){return""+f.size+f.sizeUnit},function(){return(0,d.keyframes)(s)}),c=m.default.div.withConfig({displayName:"whisper__Ball",componentId:"k8uff3-1"})(a,function(f){return""+f.size/15+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return""+f.size/5+f.sizeUnit},function(f){return f.frontColor},function(f){return(0,d.keyframes)(i,f.backColor,f.frontColor)});E.defaultProps={loading:!0,size:50,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},E.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=void 0;var i=y([`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`]),s=y([`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`],[`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`]),o=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`]),a=y([`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`]),l=g(r(0)),u=g(r(1)),d=r(2),m=g(d);function g(h){return h&&h.__esModule?h:{default:h}}function y(h,p){return Object.freeze(Object.defineProperties(h,{raw:{value:Object.freeze(p)}}))}var E=(0,d.keyframes)(i),v=n.MetroSpinner=function(h){var p=h.size,w=h.color,_=h.loading,S=h.sizeUnit,C=p/2,b=p/8;return _&&l.default.createElement(c,{size:p,sizeUnit:S},function(x){for(var T=x.countBalls,O=x.radius,N=x.angle,D=x.color,V=x.size,L=x.ballSize,q=x.sizeUnit,Q=[],P=L/2,F=0;F<T;F++){var Y=Math.sin(N*F*(Math.PI/180))*O-P,ae=Math.cos(N*F*(Math.PI/180))*O-P;Q.push(l.default.createElement(f,{countBalls:T,color:D,ballSize:L,size:V,sizeUnit:q,x:Y,y:ae,key:F.toString(),index:F+1}))}return Q}({countBalls:9,radius:C,angle:40,color:w,size:p,ballSize:b,sizeUnit:S}))},c=m.default.div.withConfig({displayName:"metro__Wrapper",componentId:"sc-2iqssn-0"})(o,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},E),f=m.default.div.withConfig({displayName:"metro__Ball",componentId:"sc-2iqssn-1"})(a,function(h){return""+h.size+h.sizeUnit},function(h){return""+h.size+h.sizeUnit},function(h){return(0,d.keyframes)(s,h.size/2/h.countBalls*(h.index-1)/h.size*100,(h.size/2/h.countBalls+1e-4)*(h.index-1)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-2))+"deg)",(h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)",(h.size/2+h.size/2/h.countBalls*(h.index-0)+2)/h.size*100,"rotate("+(0-360/h.countBalls*(h.index-1))+"deg)","rotate("+(0-360/h.countBalls*(h.countBalls-1))+"deg)")},function(h){return"rotate("+360/h.countBalls*h.index+"deg)"},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.ballSize+h.sizeUnit},function(h){return""+h.color});v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}}]))})(Sf);function LM({user:t}){const[e,n]=M.useState([]),[r,i]=M.useState(!1),{blocked:s,favorites:o}=Ns();return I.jsxs("div",{className:"home",children:[I.jsx(C3,{setData:n,dataLoading:r,setDataLoading:i,favorites:o,blocked:s}),e&&I.jsx(ay,{data:e,user:t,hideBlocked:!0}),r&&I.jsx("div",{className:"spinner",children:I.jsx(Sf.RotateSpinner,{size:30,color:"#000",loading:r})})]})}function jM({user:t}){const{blocked:e}=Ns();return I.jsx("div",{className:"blocked",children:e&&I.jsx(ay,{data:e,user:t})})}var du=t=>t.type==="checkbox",no=t=>t instanceof Date,Gt=t=>t==null;const VI=t=>typeof t=="object";var ft=t=>!Gt(t)&&!Array.isArray(t)&&VI(t)&&!no(t),$M=t=>ft(t)&&t.target?du(t.target)?t.target.checked:t.target.value:t,FM=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,BM=(t,e)=>t.has(FM(e)),VM=t=>{const e=t.constructor&&t.constructor.prototype;return ft(e)&&e.hasOwnProperty("isPrototypeOf")},Ay=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Zr(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Ay&&(t instanceof Blob||t instanceof FileList))&&(n||ft(t)))if(e=n?[]:{},!n&&!VM(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Zr(t[r]));else return t;return e}var fu=t=>Array.isArray(t)?t.filter(Boolean):[],et=t=>t===void 0,Z=(t,e,n)=>{if(!e||!ft(t))return n;const r=fu(e.split(/[,[\].]+?/)).reduce((i,s)=>Gt(i)?i:i[s],t);return et(r)||r===t?et(t[e])?n:t[e]:r};const r_={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Fn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},kr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Ie.createContext(null);var HM=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Fn.all&&(e._proxyFormState[o]=!r||Fn.all),n&&(n[o]=!0),t[o]}});return i},bn=t=>ft(t)&&!Object.keys(t).length,WM=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return bn(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||Fn.all))},Zh=t=>Array.isArray(t)?t:[t];function qM(t){const e=Ie.useRef(t);e.current=t,Ie.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var ar=t=>typeof t=="string",KM=(t,e,n,r,i)=>ar(t)?(r&&e.watch.add(t),Z(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),Z(n,s))):(r&&(e.watchAll=!0),n),Ny=t=>/^\w*$/.test(t),HI=t=>fu(t.replace(/["|']|\]/g,"").split(/\.|\[/));function Me(t,e,n){let r=-1;const i=Ny(e)?[e]:HI(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=ft(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var GM=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const Lm=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=Z(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else ft(o)&&Lm(o,e)}}};var i_=t=>({isOnSubmit:!t||t===Fn.onSubmit,isOnBlur:t===Fn.onBlur,isOnChange:t===Fn.onChange,isOnAll:t===Fn.all,isOnTouch:t===Fn.onTouched}),s_=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),YM=(t,e,n)=>{const r=fu(Z(t,n));return Me(r,"root",e[n]),Me(t,n,r),t},vo=t=>typeof t=="boolean",Ry=t=>t.type==="file",fi=t=>typeof t=="function",wd=t=>{if(!Ay)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},vc=t=>ar(t),Py=t=>t.type==="radio",_d=t=>t instanceof RegExp;const o_={value:!1,isValid:!1},a_={value:!0,isValid:!0};var WI=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!et(t[0].attributes.value)?et(t[0].value)||t[0].value===""?a_:{value:t[0].value,isValid:!0}:a_:o_}return o_};const l_={isValid:!1,value:null};var qI=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,l_):l_;function u_(t,e,n="validate"){if(vc(t)||Array.isArray(t)&&t.every(vc)||vo(t)&&!t)return{type:n,message:vc(t)?t:"",ref:e}}var $s=t=>ft(t)&&!_d(t)?t:{value:t,message:""},c_=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:d,max:m,pattern:g,validate:y,name:E,valueAsNumber:v,mount:c,disabled:f}=t._f,h=Z(e,E);if(!c||f)return{};const p=o?o[0]:s,w=N=>{r&&p.reportValidity&&(p.setCustomValidity(vo(N)?"":N||""),p.reportValidity())},_={},S=Py(s),C=du(s),b=S||C,x=(v||Ry(s))&&et(s.value)&&et(h)||wd(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,T=GM.bind(null,E,n,_),O=(N,D,V,L=kr.maxLength,q=kr.minLength)=>{const Q=N?D:V;_[E]={type:N?L:q,message:Q,ref:s,...T(N?L:q,Q)}};if(i?!Array.isArray(h)||!h.length:a&&(!b&&(x||Gt(h))||vo(h)&&!h||C&&!WI(o).isValid||S&&!qI(o).isValid)){const{value:N,message:D}=vc(a)?{value:!!a,message:a}:$s(a);if(N&&(_[E]={type:kr.required,message:D,ref:p,...T(kr.required,D)},!n))return w(D),_}if(!x&&(!Gt(d)||!Gt(m))){let N,D;const V=$s(m),L=$s(d);if(!Gt(h)&&!isNaN(h)){const q=s.valueAsNumber||h&&+h;Gt(V.value)||(N=q>V.value),Gt(L.value)||(D=q<L.value)}else{const q=s.valueAsDate||new Date(h),Q=Y=>new Date(new Date().toDateString()+" "+Y),P=s.type=="time",F=s.type=="week";ar(V.value)&&h&&(N=P?Q(h)>Q(V.value):F?h>V.value:q>new Date(V.value)),ar(L.value)&&h&&(D=P?Q(h)<Q(L.value):F?h<L.value:q<new Date(L.value))}if((N||D)&&(O(!!N,V.message,L.message,kr.max,kr.min),!n))return w(_[E].message),_}if((l||u)&&!x&&(ar(h)||i&&Array.isArray(h))){const N=$s(l),D=$s(u),V=!Gt(N.value)&&h.length>+N.value,L=!Gt(D.value)&&h.length<+D.value;if((V||L)&&(O(V,N.message,D.message),!n))return w(_[E].message),_}if(g&&!x&&ar(h)){const{value:N,message:D}=$s(g);if(_d(N)&&!h.match(N)&&(_[E]={type:kr.pattern,message:D,ref:s,...T(kr.pattern,D)},!n))return w(D),_}if(y){if(fi(y)){const N=await y(h,e),D=u_(N,p);if(D&&(_[E]={...D,...T(kr.validate,D.message)},!n))return w(D.message),_}else if(ft(y)){let N={};for(const D in y){if(!bn(N)&&!n)break;const V=u_(await y[D](h,e),p,D);V&&(N={...V,...T(D,V.message)},w(V.message),n&&(_[E]=N))}if(!bn(N)&&(_[E]={ref:p,...N},!n))return _}}return w(!0),_};function XM(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=et(t)?r++:t[e[r++]];return t}function QM(t){for(const e in t)if(t.hasOwnProperty(e)&&!et(t[e]))return!1;return!0}function kt(t,e){const n=Array.isArray(e)?e:Ny(e)?[e]:HI(e),r=n.length===1?t:XM(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(ft(r)&&bn(r)||Array.isArray(r)&&QM(r))&&kt(t,n.slice(0,-1)),t}function ep(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Ed=t=>Gt(t)||!VI(t);function ts(t,e){if(Ed(t)||Ed(e))return t===e;if(no(t)&&no(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(no(s)&&no(o)||ft(s)&&ft(o)||Array.isArray(s)&&Array.isArray(o)?!ts(s,o):s!==o)return!1}}return!0}var KI=t=>t.type==="select-multiple",JM=t=>Py(t)||du(t),tp=t=>wd(t)&&t.isConnected,GI=t=>{for(const e in t)if(fi(t[e]))return!0;return!1};function Sd(t,e={}){const n=Array.isArray(t);if(ft(t)||n)for(const r in t)Array.isArray(t[r])||ft(t[r])&&!GI(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Sd(t[r],e[r])):Gt(t[r])||(e[r]=!0);return e}function YI(t,e,n){const r=Array.isArray(t);if(ft(t)||r)for(const i in t)Array.isArray(t[i])||ft(t[i])&&!GI(t[i])?et(e)||Ed(n[i])?n[i]=Array.isArray(t[i])?Sd(t[i],[]):{...Sd(t[i])}:YI(t[i],Gt(e)?{}:e[i],n[i]):n[i]=!ts(t[i],e[i]);return n}var np=(t,e)=>YI(t,e,Sd(e)),XI=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>et(t)?t:e?t===""?NaN:t&&+t:n&&ar(t)?new Date(t):r?r(t):t;function rp(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Ry(e)?e.files:Py(e)?qI(t.refs).value:KI(e)?[...e.selectedOptions].map(({value:n})=>n):du(e)?WI(t.refs).value:XI(et(e.value)?t.ref.value:e.value,t)}var ZM=(t,e,n,r)=>{const i={};for(const s of t){const o=Z(e,s);o&&Me(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},wa=t=>et(t)?t:_d(t)?t.source:ft(t)?_d(t.value)?t.value.source:t.value:t,eL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function d_(t,e,n){const r=Z(t,n);if(r||Ny(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Z(e,s),a=Z(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var tL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,nL=(t,e)=>!fu(Z(t,e)).length&&kt(t,e);const rL={mode:Fn.onSubmit,reValidateMode:Fn.onChange,shouldFocusError:!0};function iL(t={},e){let n={...rL,...t},r={submitCount:0,isDirty:!1,isLoading:fi(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=ft(n.defaultValues)||ft(n.values)?Zr(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Zr(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,d=0;const m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:ep(),array:ep(),state:ep()},y=t.resetOptions&&t.resetOptions.keepDirtyValues,E=i_(n.mode),v=i_(n.reValidateMode),c=n.criteriaMode===Fn.all,f=k=>A=>{clearTimeout(d),d=setTimeout(k,A)},h=async k=>{if(m.isValid||k){const A=n.resolver?bn((await x()).errors):await O(i,!0);A!==r.isValid&&g.state.next({isValid:A})}},p=k=>m.isValidating&&g.state.next({isValidating:k}),w=(k,A=[],R,J,W=!0,B=!0)=>{if(J&&R){if(a.action=!0,B&&Array.isArray(Z(i,k))){const te=R(Z(i,k),J.argA,J.argB);W&&Me(i,k,te)}if(B&&Array.isArray(Z(r.errors,k))){const te=R(Z(r.errors,k),J.argA,J.argB);W&&Me(r.errors,k,te),nL(r.errors,k)}if(m.touchedFields&&B&&Array.isArray(Z(r.touchedFields,k))){const te=R(Z(r.touchedFields,k),J.argA,J.argB);W&&Me(r.touchedFields,k,te)}m.dirtyFields&&(r.dirtyFields=np(s,o)),g.state.next({name:k,isDirty:D(k,A),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Me(o,k,A)},_=(k,A)=>{Me(r.errors,k,A),g.state.next({errors:r.errors})},S=(k,A,R,J)=>{const W=Z(i,k);if(W){const B=Z(o,k,et(R)?Z(s,k):R);et(B)||J&&J.defaultChecked||A?Me(o,k,A?B:rp(W._f)):q(k,B),a.mount&&h()}},C=(k,A,R,J,W)=>{let B=!1,te=!1;const Oe={name:k};if(!R||J){m.isDirty&&(te=r.isDirty,r.isDirty=Oe.isDirty=D(),B=te!==Oe.isDirty);const Ve=ts(Z(s,k),A);te=Z(r.dirtyFields,k),Ve?kt(r.dirtyFields,k):Me(r.dirtyFields,k,!0),Oe.dirtyFields=r.dirtyFields,B=B||m.dirtyFields&&te!==!Ve}if(R){const Ve=Z(r.touchedFields,k);Ve||(Me(r.touchedFields,k,R),Oe.touchedFields=r.touchedFields,B=B||m.touchedFields&&Ve!==R)}return B&&W&&g.state.next(Oe),B?Oe:{}},b=(k,A,R,J)=>{const W=Z(r.errors,k),B=m.isValid&&vo(A)&&r.isValid!==A;if(t.delayError&&R?(u=f(()=>_(k,R)),u(t.delayError)):(clearTimeout(d),u=null,R?Me(r.errors,k,R):kt(r.errors,k)),(R?!ts(W,R):W)||!bn(J)||B){const te={...J,...B&&vo(A)?{isValid:A}:{},errors:r.errors,name:k};r={...r,...te},g.state.next(te)}p(!1)},x=async k=>n.resolver(o,n.context,ZM(k||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),T=async k=>{const{errors:A}=await x();if(k)for(const R of k){const J=Z(A,R);J?Me(r.errors,R,J):kt(r.errors,R)}else r.errors=A;return A},O=async(k,A,R={valid:!0})=>{for(const J in k){const W=k[J];if(W){const{_f:B,...te}=W;if(B){const Oe=l.array.has(B.name),Ve=await c_(W,o,c,n.shouldUseNativeValidation&&!A,Oe);if(Ve[B.name]&&(R.valid=!1,A))break;!A&&(Z(Ve,B.name)?Oe?YM(r.errors,Ve,B.name):Me(r.errors,B.name,Ve[B.name]):kt(r.errors,B.name))}te&&await O(te,A,R)}}return R.valid},N=()=>{for(const k of l.unMount){const A=Z(i,k);A&&(A._f.refs?A._f.refs.every(R=>!tp(R)):!tp(A._f.ref))&&ht(k)}l.unMount=new Set},D=(k,A)=>(k&&A&&Me(o,k,A),!ts(ae(),s)),V=(k,A,R)=>KM(k,l,{...a.mount?o:et(A)?s:ar(k)?{[k]:A}:A},R,A),L=k=>fu(Z(a.mount?o:s,k,t.shouldUnregister?Z(s,k,[]):[])),q=(k,A,R={})=>{const J=Z(i,k);let W=A;if(J){const B=J._f;B&&(!B.disabled&&Me(o,k,XI(A,B)),W=wd(B.ref)&&Gt(A)?"":A,KI(B.ref)?[...B.ref.options].forEach(te=>te.selected=W.includes(te.value)):B.refs?du(B.ref)?B.refs.length>1?B.refs.forEach(te=>(!te.defaultChecked||!te.disabled)&&(te.checked=Array.isArray(W)?!!W.find(Oe=>Oe===te.value):W===te.value)):B.refs[0]&&(B.refs[0].checked=!!W):B.refs.forEach(te=>te.checked=te.value===W):Ry(B.ref)?B.ref.value="":(B.ref.value=W,B.ref.type||g.values.next({name:k,values:{...o}})))}(R.shouldDirty||R.shouldTouch)&&C(k,W,R.shouldTouch,R.shouldDirty,!0),R.shouldValidate&&Y(k)},Q=(k,A,R)=>{for(const J in A){const W=A[J],B=`${k}.${J}`,te=Z(i,B);(l.array.has(k)||!Ed(W)||te&&!te._f)&&!no(W)?Q(B,W,R):q(B,W,R)}},P=(k,A,R={})=>{const J=Z(i,k),W=l.array.has(k),B=Zr(A);Me(o,k,B),W?(g.array.next({name:k,values:{...o}}),(m.isDirty||m.dirtyFields)&&R.shouldDirty&&g.state.next({name:k,dirtyFields:np(s,o),isDirty:D(k,B)})):J&&!J._f&&!Gt(B)?Q(k,B,R):q(k,B,R),s_(k,l)&&g.state.next({...r}),g.values.next({name:k,values:{...o}}),!a.mount&&e()},F=async k=>{const A=k.target;let R=A.name,J=!0;const W=Z(i,R),B=()=>A.type?rp(W._f):$M(k);if(W){let te,Oe;const Ve=B(),Un=k.type===r_.BLUR||k.type===r_.FOCUS_OUT,ta=!eL(W._f)&&!n.resolver&&!Z(r.errors,R)&&!W._f.deps||tL(Un,Z(r.touchedFields,R),r.isSubmitted,v,E),Rs=s_(R,l,Un);Me(o,R,Ve),Un?(W._f.onBlur&&W._f.onBlur(k),u&&u(0)):W._f.onChange&&W._f.onChange(k);const Ps=C(R,Ve,Un,!1),pu=!bn(Ps)||Rs;if(!Un&&g.values.next({name:R,type:k.type,values:{...o}}),ta)return m.isValid&&h(),pu&&g.state.next({name:R,...Rs?{}:Ps});if(!Un&&Rs&&g.state.next({...r}),p(!0),n.resolver){const{errors:mu}=await x([R]),Df=d_(r.errors,i,R),na=d_(mu,i,Df.name||R);te=na.error,R=na.name,Oe=bn(mu)}else te=(await c_(W,o,c,n.shouldUseNativeValidation))[R],J=isNaN(Ve)||Ve===Z(o,R,Ve),J&&(te?Oe=!1:m.isValid&&(Oe=await O(i,!0)));J&&(W._f.deps&&Y(W._f.deps),b(R,Oe,te,Ps))}},Y=async(k,A={})=>{let R,J;const W=Zh(k);if(p(!0),n.resolver){const B=await T(et(k)?k:W);R=bn(B),J=k?!W.some(te=>Z(B,te)):R}else k?(J=(await Promise.all(W.map(async B=>{const te=Z(i,B);return await O(te&&te._f?{[B]:te}:te)}))).every(Boolean),!(!J&&!r.isValid)&&h()):J=R=await O(i);return g.state.next({...!ar(k)||m.isValid&&R!==r.isValid?{}:{name:k},...n.resolver||!k?{isValid:R}:{},errors:r.errors,isValidating:!1}),A.shouldFocus&&!J&&Lm(i,B=>B&&Z(r.errors,B),k?W:l.mount),J},ae=k=>{const A={...s,...a.mount?o:{}};return et(k)?A:ar(k)?Z(A,k):k.map(R=>Z(A,R))},Se=(k,A)=>({invalid:!!Z((A||r).errors,k),isDirty:!!Z((A||r).dirtyFields,k),isTouched:!!Z((A||r).touchedFields,k),error:Z((A||r).errors,k)}),Ht=k=>{k&&Zh(k).forEach(A=>kt(r.errors,A)),g.state.next({errors:k?r.errors:{}})},Cn=(k,A,R)=>{const J=(Z(i,k,{_f:{}})._f||{}).ref;Me(r.errors,k,{...A,ref:J}),g.state.next({name:k,errors:r.errors,isValid:!1}),R&&R.shouldFocus&&J&&J.focus&&J.focus()},Zt=(k,A)=>fi(k)?g.values.subscribe({next:R=>k(V(void 0,A),R)}):V(k,A,!0),ht=(k,A={})=>{for(const R of k?Zh(k):l.mount)l.mount.delete(R),l.array.delete(R),A.keepValue||(kt(i,R),kt(o,R)),!A.keepError&&kt(r.errors,R),!A.keepDirty&&kt(r.dirtyFields,R),!A.keepTouched&&kt(r.touchedFields,R),!n.shouldUnregister&&!A.keepDefaultValue&&kt(s,R);g.values.next({values:{...o}}),g.state.next({...r,...A.keepDirty?{isDirty:D()}:{}}),!A.keepIsValid&&h()},Et=(k,A={})=>{let R=Z(i,k);const J=vo(A.disabled);return Me(i,k,{...R||{},_f:{...R&&R._f?R._f:{ref:{name:k}},name:k,mount:!0,...A}}),l.mount.add(k),et(A.value)||Me(o,k,A.value),R?J&&Me(o,k,A.disabled?void 0:Z(o,k,rp(R._f))):S(k,!0,A.value),{...J?{disabled:A.disabled}:{},...n.progressive?{required:!!A.required,min:wa(A.min),max:wa(A.max),minLength:wa(A.minLength),maxLength:wa(A.maxLength),pattern:wa(A.pattern)}:{},name:k,onChange:F,onBlur:F,ref:W=>{if(W){Et(k,A),R=Z(i,k);const B=et(W.value)&&W.querySelectorAll&&W.querySelectorAll("input,select,textarea")[0]||W,te=JM(B),Oe=R._f.refs||[];if(te?Oe.find(Ve=>Ve===B):B===R._f.ref)return;Me(i,k,{_f:{...R._f,...te?{refs:[...Oe.filter(tp),B,...Array.isArray(Z(s,k))?[{}]:[]],ref:{type:B.type,name:k}}:{ref:B}}}),S(k,!1,void 0,B)}else R=Z(i,k,{}),R._f&&(R._f.mount=!1),(n.shouldUnregister||A.shouldUnregister)&&!(BM(l.array,k)&&a.action)&&l.unMount.add(k)}}},Kr=()=>n.shouldFocusError&&Lm(i,k=>k&&Z(r.errors,k),l.mount),en=(k,A)=>async R=>{R&&(R.preventDefault&&R.preventDefault(),R.persist&&R.persist());let J=Zr(o);if(g.state.next({isSubmitting:!0}),n.resolver){const{errors:W,values:B}=await x();r.errors=W,J=B}else await O(i);kt(r.errors,"root"),bn(r.errors)?(g.state.next({errors:{}}),await k(J,R)):(A&&await A({...r.errors},R),Kr(),setTimeout(Kr)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:bn(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ea=(k,A={})=>{Z(i,k)&&(et(A.defaultValue)?P(k,Z(s,k)):(P(k,A.defaultValue),Me(s,k,A.defaultValue)),A.keepTouched||kt(r.touchedFields,k),A.keepDirty||(kt(r.dirtyFields,k),r.isDirty=A.defaultValue?D(k,Z(s,k)):D()),A.keepError||(kt(r.errors,k),m.isValid&&h()),g.state.next({...r}))},tn=(k,A={})=>{const R=k||s,J=Zr(R),W=k&&!bn(k)?J:s;if(A.keepDefaultValues||(s=R),!A.keepValues){if(A.keepDirtyValues||y)for(const B of l.mount)Z(r.dirtyFields,B)?Me(W,B,Z(o,B)):P(B,Z(W,B));else{if(Ay&&et(k))for(const B of l.mount){const te=Z(i,B);if(te&&te._f){const Oe=Array.isArray(te._f.refs)?te._f.refs[0]:te._f.ref;if(wd(Oe)){const Ve=Oe.closest("form");if(Ve){Ve.reset();break}}}}i={}}o=t.shouldUnregister?A.keepDefaultValues?Zr(s):{}:Zr(W),g.array.next({values:{...W}}),g.values.next({values:{...W}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!m.isValid||!!A.keepIsValid,a.watch=!!t.shouldUnregister,g.state.next({submitCount:A.keepSubmitCount?r.submitCount:0,isDirty:A.keepDirty?r.isDirty:!!(A.keepDefaultValues&&!ts(k,s)),isSubmitted:A.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:A.keepDirtyValues?r.dirtyFields:A.keepDefaultValues&&k?np(s,k):{},touchedFields:A.keepTouched?r.touchedFields:{},errors:A.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},hu=(k,A)=>tn(fi(k)?k(o):k,A);return{control:{register:Et,unregister:ht,getFieldState:Se,handleSubmit:en,setError:Cn,_executeSchema:x,_getWatch:V,_getDirty:D,_updateValid:h,_removeUnmounted:N,_updateFieldArray:w,_getFieldArray:L,_reset:tn,_resetDefaultValues:()=>fi(n.defaultValues)&&n.defaultValues().then(k=>{hu(k,n.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:k=>{r={...r,...k}},_subjects:g,_proxyFormState:m,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(k){a=k},get _defaultValues(){return s},get _names(){return l},set _names(k){l=k},get _formState(){return r},set _formState(k){r=k},get _options(){return n},set _options(k){n={...n,...k}}},trigger:Y,register:Et,handleSubmit:en,watch:Zt,setValue:P,getValues:ae,reset:hu,resetField:ea,clearErrors:Ht,unregister:ht,setError:Cn,setFocus:(k,A={})=>{const R=Z(i,k),J=R&&R._f;if(J){const W=J.refs?J.refs[0]:J.ref;W.focus&&(W.focus(),A.shouldSelect&&W.select())}},getFieldState:Se}}function sL(t={}){const e=Ie.useRef(),n=Ie.useRef(),[r,i]=Ie.useState({isDirty:!1,isValidating:!1,isLoading:fi(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:fi(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...iL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,qM({subject:s._subjects.state,next:o=>{WM(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Ie.useEffect(()=>{t.values&&!ts(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),Ie.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=HM(r,s),e.current}function oL(){var s,o,a,l,u;const{register:t,handleSubmit:e,formState:{errors:n}}=sL(),r=({name:d,email:m,password:g})=>{Y5(d,m,g)},i="Es requerido";return I.jsx("div",{className:"form",onSubmit:e(r),children:I.jsxs("form",{className:"form__container",children:[I.jsxs("div",{className:"form__box",children:[I.jsx("input",{...t("name",{required:i}),type:"text",className:"form__textBox",placeholder:"Nombre"}),I.jsx("p",{className:"form__error",children:(s=n.name)==null?void 0:s.message})]}),I.jsxs("div",{className:"form__box",children:[I.jsx("input",{...t("email",{required:i,pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,message:"El correo electrónico no es válido"}}),type:"text",className:"form__textBox",placeholder:"Correo electrónico"}),I.jsx("p",{className:"form__error",children:(o=n.email)==null?void 0:o.message})]}),I.jsxs("div",{className:"form__box",children:[I.jsx("input",{...t("password",{required:i,validate:{checkLength:d=>d.length>=6,matchPattern:d=>/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(d)}}),type:"password",className:"form__textBox",placeholder:"Contraseña"}),I.jsxs("p",{className:"form__error",children:[((a=n.password)==null?void 0:a.type)==="required"&&"Es required",((l=n.password)==null?void 0:l.type)==="checkLength"&&"Debe tener mínimo 6 caracteres",((u=n.password)==null?void 0:u.type)==="matchPattern"&&"Minuscula, mayuscula, digito y caracter especial"]})]}),I.jsx("button",{type:"submit",className:"form__btn",children:"Registrarse"}),I.jsx("button",{className:"form__btn form__google",onClick:cI,children:"Registrarse con Google"}),I.jsxs("div",{className:"form__link",children:["¿Ya tenés una cuenta? ",I.jsx(Nl,{to:"/login",children:"Accede"})," ahora."]})]})})}function aL(){const[t,e]=M.useState(""),[n,r]=M.useState("");return I.jsx("div",{className:"form",children:I.jsxs("div",{className:"form__container",children:[I.jsx("input",{type:"text",className:"form__textBox",value:t,onChange:i=>e(i.target.value),placeholder:"Correo electrónico"}),I.jsx("input",{type:"password",className:"form__textBox",value:n,onChange:i=>r(i.target.value),placeholder:"Contraseñá"}),I.jsx("button",{className:"form__btn",onClick:()=>G5(t,n),children:"Acceder"}),I.jsx("button",{className:"form__btn form__google",onClick:cI,children:"Acceder con Google"}),I.jsx("div",{className:"form__link",children:I.jsx(Nl,{to:"/reset",children:"Olvidé mi contraseña"})}),I.jsxs("div",{className:"form__link",children:["¿No tenés una cuenta? ",I.jsx(Nl,{to:"/register",children:"Registrate"})," ahora."]})]})})}function lL(){const[t,e]=M.useState("");return I.jsx("div",{className:"form",children:I.jsxs("div",{className:"form__container",children:[I.jsx("input",{type:"text",className:"form__textBox",value:t,onChange:n=>e(n.target.value),placeholder:"Correo electrónico"}),I.jsx("button",{className:"form__btn",onClick:()=>X5(t),children:"Restablecer la contraseña"}),I.jsxs("div",{className:"form__link",children:["¿No tenés una cuenta? ",I.jsx(Nl,{to:"/register",children:"Registrate"})," ahora."]})]})})}function uL({user:t}){const{dispatch:e,userPhoto:n,userName:r,blocked:i,favorites:s}=Ns(),o=async a=>{try{const l=await sD(a.target.files[0],t==null?void 0:t.uid);e({type:"UPDATE_USER_PHOTO",value:l})}catch{console.log("Error al subir archivo")}};return I.jsx("div",{className:"page-center",children:I.jsxs("div",{className:"carduser",children:[I.jsxs("div",{className:"carduser__profile",children:[I.jsx("img",{className:"carduser__picture",src:n,alt:"Foto de perfil"}),I.jsxs("div",{className:"carduser__info",children:[I.jsx("h2",{className:"carduser__username",children:r}),I.jsx("p",{className:"carduser__email",children:t==null?void 0:t.email}),I.jsxs("div",{className:"carduser__stats",children:[I.jsxs("div",{className:"carduser__stat",children:[I.jsx("div",{className:"carduser__icon",children:I.jsx(ly,{})}),I.jsx("p",{className:"carduser__value",children:"--"})]}),I.jsxs("div",{className:"carduser__stat",children:[I.jsx("div",{className:"carduser__icon",children:I.jsx(xS,{})}),I.jsx("p",{className:"carduser__value",children:s.length})]}),I.jsxs("div",{className:"carduser__stat",children:[I.jsx("div",{className:"carduser__icon",children:I.jsx(AS,{})}),I.jsx("p",{className:"carduser__value",children:i.length})]}),I.jsxs("div",{className:"carduser__stat",children:[I.jsx("div",{className:"carduser__icon",children:I.jsx(zS,{})}),I.jsx("p",{className:"carduser__value",children:"--"})]})]})]})]}),I.jsxs("div",{className:"carduser__btns",children:[I.jsx("input",{type:"file",hidden:!0,id:"upload-btn",onChange:o}),I.jsx("label",{htmlFor:"upload-btn",className:"carduser__btn-photo",children:"Cambiar imagen"}),I.jsx("button",{className:"carduser__btn-logout",onClick:Q5,children:"Cerrar sesión"})]})]})})}function cL({user:t}){const{favorites:e}=Ns();return I.jsx("div",{className:"favorites",children:e&&I.jsx(ay,{data:e,user:t})})}function f_({isAllowed:t,redirectTo:e="/"}){return t?I.jsx(ZD,{}):I.jsx(JD,{to:e})}function dL(t){return hn({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.657 2.343c-1.511-1.511-3.52-2.343-5.657-2.343s-4.146 0.832-5.657 2.343c-1.511 1.511-2.343 3.52-2.343 5.657s0.832 4.146 2.343 5.657c1.511 1.511 3.52 2.343 5.657 2.343s4.146-0.832 5.657-2.343c1.511-1.511 2.343-3.52 2.343-5.657s-0.832-4.146-2.343-5.657zM14 8c0 1.294-0.412 2.494-1.111 3.475l-8.364-8.364c0.981-0.699 2.181-1.111 3.475-1.111 3.308 0 6 2.692 6 6zM2 8c0-1.294 0.412-2.494 1.111-3.475l8.364 8.364c-0.981 0.699-2.181 1.111-3.475 1.111-3.308 0-6-2.692-6-6z"}}]})(t)}function fL(t){return hn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"}},{tag:"path",attr:{d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]})(t)}function hL(t){return hn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"}}]})(t)}function pL(t){return hn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"}}]})(t)}const mL=[{title:"Buscador",url:"/",cName:"nav-links",icon:I.jsx(ly,{}),always:!0},{title:"Favoritas",url:"/favorites",cName:"nav-links",icon:I.jsx(S3,{}),always:!1,loggedIn:!0},{title:"Bloqueadas",url:"/blocked",cName:"nav-links",icon:I.jsx(dL,{}),always:!1,loggedIn:!0},{title:"Registrarse",url:"/register",cName:"nav-links",icon:I.jsx(hL,{}),always:!1,loggedIn:!1},{title:"Acceder",url:"/login",cName:"nav-links",icon:I.jsx(fL,{}),always:!1,loggedIn:!1},{title:"Perfil",url:"/user",cName:"nav-links",icon:I.jsx(pL,{}),always:!1,loggedIn:!0},{title:"Acerca",url:"/about",cName:"nav-links-mobile",always:!0}];function gL(t){return hn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.001 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 15.2712 20.4293 18.1755 18.001 20ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10ZM8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14ZM16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14ZM12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"}}]})(t)}function yL({isAuthenticated:t}){const[e,n]=M.useState({clicked:!1}),r=()=>{n({...e,clicked:!e.clicked})};return I.jsx(I.Fragment,{children:I.jsxs("nav",{className:"navbaritems",children:[I.jsxs("h1",{className:"logo",children:[I.jsx("span",{children:"Cinéfilo"}),I.jsx(gL,{className:"logo-icon"})]}),I.jsx("div",{className:"menu-icons",onClick:r,children:e.clicked?I.jsx(uy,{}):I.jsx(E3,{})}),I.jsx("ul",{className:e.clicked?"nav-menu active":"nav-menu",children:mL.map((i,s)=>{if(i.always||i.loggedIn===t)return I.jsx("li",{children:I.jsxs(u3,{to:i.url,className:i.cName,children:[i.icon,I.jsx("span",{children:i.title})]})},s)})})]})})}function _a(t){return t.toString().padStart(2,"0")}function vL(t){return[_a(t.getDate()),_a(t.getMonth()+1),t.getFullYear()].join("/")+" "+[_a(t.getHours()),_a(t.getMinutes()),_a(t.getSeconds())].join(":")}const QI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAIAAgMAAACndkrSAAAADFBMVEUlJSXm5ub///+BgYEvUjZvAAALIElEQVR42u3dPWsjSRoH8JKaE0is29EEdu4FO5pLDBKc1x9ggg22hd3eYx3Yy1h2YLh0YPURlLQPhgkEZ824W4bpDzCB4OCCSy66ZHIHdmRY9uAOljnJnvFoZL10VT0tPf+ap2DRNG6Qflv9Uk+9PKWSJImDIAj7n1H/071DJUIRilCEIhShCEUoQhGKUIQUwv5/9f6/O/3PRv/TvUMRilCEIhShCEUoQhGKUIQiJBFKBEx7OPif6rIwiX/5Vf3rt0biqjC+VfdlOYydFL7qqYeyGbsnbJyq4bLknHAEeEd0Shi21Gj5h1PCs1fqcam5JOyOAapvbhwSPhsnVIWOM8JLNb5sRo4I46cThOrIEWE6Caj8yAlhV00u1y6MPb1Opwh9FyLgaVXYr0QHhOlUoR/BC2M1vRzBC1szhCV44e0ModcBF16qWaUKLmzOFBYiaGFXzS5X0MJ2BmEJWtjLIPQSYOFxJuEGsLClspQSrjDTRXp/mYIKn6ts5QZ27KmdUViCjYC3Mwq9CFTY7WUVXoEK36qspQoqTDMLi6BClb1EkMILDeE6pLCtISwhCutNDWEBUbirdAqi8EBLuAEobGkJK4DCppawiCcMldK8EdGEO5rCDbixp0tNYRUuAk41hT6c8FZT6EVgwrinKVSHYMILXaBaARO2tYVlMGGqLfTBhNq3ofLOoIRH+kL1M5TwuT5QfQsl3DcQVqCE7wyEW1DCpoGwiCSsK5OCJNwzEt4AjT1dGAlXgCLgtpGwDCRMjYQ+kLBpJCwCCXtGQi+CEcZmQnUIIzR7lCq1BiM8NxRWYYRtQ2EZRpgaCn0YYdNQWIQRGj5K+68LFKEyLSjCrrHwCkR4YSxcAxl7OjEW1kAi4H1jYQVEmBoLfRBh01hYxBC+3jYWFkCEyrxgCGNzoIch7FrU4RWE8MJCuAYhPLcQrkAI2xbCsghZCFMLoQ8hbFoIi87XYR5C8vgw44K1ycvY2EfAdWVTnBdC1OGeVR02AIQ7VsINETIQHlgJVwGEJ1bCGoBw30pYcV6IUIffWwlLAMLUSugDCJtWwqIIRTiHsadtK2Eh4h8B96yEHoBQ2RURipC/kH9fW2wpPGQv7FoKr0S4cOGFpXBNhCIU4cKFT9gLzy2FK+zHnn6wFK6yj4DdF55YCmsiFKEIFy6ssBfuO1+H+1KHIpT7UOpQ3ocOCoO5b0oyay0w9whYhPjCcxF+9T1RT6Q3UXqERShCEcoYsANC92cq8JttQh0f1i2F/GdfitABoeXsSwCh5QxagFnQdkKZ5y1CWVEiq4Jk7drXIXR/haXdpKhVWenMYN2TXUfNGkDmD7sg/woht4nlkhkRMhDaBIheJBl4JIuSZMKSbGYi/DqyCrqfGdL97J4dC2EnkCy7DHLuBaF5n3DhZQKRdd68UVMMMYTmjRofRGj+yi+DCM0nYFZBhMx2f0hkBw/ZhWXMoWk/Bs5OOk3jCB9FmBpH+CjCtnH8iyJ0f2c593cH5LXDYw4RsOm8KI/4Z+S547HZ66IIJDR7XfhAQrPZChUg4XPTEW4YIaudxwPZPd5IuG32KMURBu8MhFtQwn2zRymQ0ORh+i2U8Mig3fYzlLChL/TOsIT67bZiHUuoH+aX8xLmER/2D/V3KtnI42fkFQH3D/XbbQ0wYf1WE7icgAm1Q0QfTnii3aJBE+5oB4dowlA7dEIT1pu6oROaUHN1UAVQeKDbRwMn3NXtwYATat2IBURh0NaM7/GEOiNQa5BCnQkLUY7CnOLD/mc91WiU5vczchRqNE1roMLMMaJ3AyrMPFBaSECFQSv7uwJUeJy9yQYqzHiZegmsMONlWgIW7mSpRG8DWBj2Ml6ksMJ6ltZ3qYEszDJd+ApamGGqaSHCFs6et18NsIXJrN59r5O3MMf48O6wNftlmMv3ziUCvjuc1XJrwAtnxMF+Ai+cUYk3DginLmXzX7ognPbWvw5dEE5ZfuFHbgjjp5OER4EbwokNm83AFWEyfjLmHzvuCMc/bG4Cd4RnY65Tr/bpry+Bhf/8dDjmpVh6OPlvEayw+/eHO61xOgJc+nxy7xpW2B5kY/l4OEJc+nzyuSrlKsy3V39oGUzy4/B7YmiRVKqWUSPg496gZf1wGHY+RcPLjaGTj4FHZlp3E/CH/prEP/2qln8Ph7sP76KrEqbwvk+/MfLXwU0yfPLxfZcppPD5nbA0I5lNet/tDSn82ENznSXlUglS2PsUIWVIX7ccAQofJpu8n3LyQ4N1HVDYGgohJp787KENByj83BW8Gc3uEfciOOHQjKhvbiacPBz8r8AJ05F5eWNObjz7IicGmvB25jh2+EWH/3IHTHgxOunp0cnhq5GkkGDC0Yj3/ejJ4ZvRnkWssaezR4Nq7788ufHm0aIZrAh4TP6WzeGTk1ePT1iHEo7r5u5HhR//msS3E3II4wjHj/x+F96HTy/Gr+2KgIRmKXjWgYQtI6EPJLw1EvYvUxShaZ6odRihaTazEozQNM0uTFZB49yX3hWI8K3zGVotMiW/hBDuKvPSgBAeWAhrEGNPqYVwCyICvrUQQuyk0+1ZCCF2tLq0AQ42KWEvbFoJiwBCq4t0sGkXd6Hd1nmDPLTchZeWwjJ7YdNSWGQvtLwN+zcic2HXFki+SIhaeGktrDIXvrMW+syFp9ZC6uWIxMJdZV94jz1dEAjXWEfAbQJhmbUwJRD6rIW3BMLliLNQUZRDxsILEuEaY+ElibDKWPiKRFhiLGySCIuMhT0SoRe5LlR865DmUTp4mHIVviESVtkK20TCMlthSiT02Y49NYmERa4RcJ3oUUq7hIZUqKgKV+EemfCGqXCHTLjBVHhCJqwxFe6TCStMhSmZ0GcqbJIJi0yF22TCQsRTqOiK80KPp7BLWIdXLIUXhMI15+vwCcuxpxNCYY1lBLxPKKywFH7vvDAlFPoshU1CYdF5Ics6rG8TCgsshYqyiHAh96Hzwj1S4Q1D4Q6pcEOEIsxBeEAqXGU49nRJKqwyjIDbpMKyCOGFf2AobJEKSwyFKanQZyhskgqLIhQhe2GBoXCbVhjxE/ZIhZ4IFyBUtEWE8x97qhML+UXA7gsDEWqWBjvhrvPCPWLhjQjnLtwhFm6IUIQiFKEIHRT+wFYY5JNm3n52IrsI+FyEIhwdImUnvHReKHUoQhGKUIT8hGV2wrbUodRhbkKq+HCfWFhhFwGLUIQiXLzwhFhYEyF8b+Kq9JdKn7cIZS7G1zgninhuIsMZQ7QzaIsM1z2lpEJfVgUtQEjbjfFfhkLaIdI1jvlpaKcIcxRSPkwLLIWUD9MtllmU3hIKq5LrazH52ujabUzztRHeiFvO5y9dZSqkm8zONlMy1WXqs93vieoy/R/f/Z6IhId8d3+guUx9xjt40Lz0rznvhrRN0+pmLDwnehnyFRK03LwOa2Fs35dRi3gLQ9tKLCTMhYHtnbjKXhieWjbY2AuDY7sBGQBh3WbztVoCILS5TpcSDGFsLDwKMYTGe3etRnkIA+KdxweHhrfiJvHPyGlv9bvD8C9mLwocYZCcmj1lcIQNbeJSXAcTahKX4gBOqEVcigNAYeNHjadogCgMwr9mBL5PQIVBPc5ypS6Tf+/8hP3D2dX4nwRbmCQvpvr+1D8dXZjEL6b44ty+d37Cfh3FP431/Zbz985PODiMfxnpM/w9TF47JbwLbf/84cNT5X334d+N+96A+QjziA8nHd5DP7bN5/W9cxUu5FCEIhShCEUoQhGKUIQiFOFchHOLDxd1KEIRilCEIhShCEUoQhGKUIRwY08SAedy+H9/GwvAYql3DwAAAABJRU5ErkJggg==",wL=({user:t})=>{const[e,n]=M.useState(""),[r,i]=M.useState(!0),{dispatch:s,currentMovie:o,comments:a,userName:l}=Ns();console.log(t);const u=d=>{d.preventDefault();const m=new Date;s({type:"SAVE_COMMENT",value:{date:vL(m),name:l,comment:e,id:m.getTime(),userId:t.uid}}),n("")};return M.useEffect(()=>{rD(o.id).then(d=>{s({type:"GET_COMMENTS_COMPLETED",value:d||[]}),i(!1)}).catch(d=>{console.error("Error al obtener los comentarios:",d)})},[]),M.useEffect(()=>{console.log(`comments: ${a}`)},[a]),I.jsx("div",{className:"popup",children:I.jsxs("div",{className:"popup__box",children:[I.jsx("span",{className:"popup__closebtn",onClick:()=>s({type:"HIDE_COMMENTS"}),children:I.jsx(uy,{})}),I.jsxs("div",{className:"popup__movie",style:{backgroundImage:`url(${o.poster_path})`},children:[I.jsx("h2",{className:"popup__movie__title",children:o.title}),I.jsx("div",{className:"popup__movie_description",children:o.overview}),I.jsxs("div",{className:"popup__infos",children:[I.jsxs("div",{children:["Rating ",o.vote_average]}),I.jsxs("div",{children:["Estreno ",o.release_date]})]})]}),I.jsxs("div",{className:"popup__messages",children:[I.jsxs("form",{action:"",className:"popup__form",onSubmit:u,children:[I.jsx("textarea",{className:"popup__textarea",value:e,onChange:d=>n(d.target.value),placeholder:"Escribe tu comentario"}),I.jsx("input",{className:"popup__button",type:"submit",disabled:e==="",value:"Enviar comentario"})]}),I.jsx("div",{className:"spinner",children:I.jsx(Sf.RotateSpinner,{size:30,color:"red",loading:r})}),I.jsx("div",{className:"popup__list",children:a&&a.map(d=>I.jsxs("div",{className:"popup__item",children:[I.jsx("p",{className:"popup__comment",children:d.comment}),I.jsxs("div",{className:"popup__details",children:[I.jsxs("div",{className:"popup__user",children:[I.jsx("img",{src:QI,alt:"Foto de perfil",className:"popup__photo"}),I.jsx("p",{children:d.name})]}),I.jsx("p",{className:"popup__messages__list__date",children:d.date})]})]},d.id))})]})]})})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function _L(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(d){try{u(r.next(d))}catch(m){o(m)}}function l(d){try{u(r.throw(d))}catch(m){o(m)}}function u(d){d.done?s(d.value):i(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function EL(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(d){return l([u,d])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ro=function(){return ro=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ro.apply(this,arguments)},JI=function(t){return{loading:t==null,value:t}},SL=function(){return function(t,e){switch(e.type){case"error":return ro(ro({},t),{error:e.error,loading:!1,value:void 0});case"reset":return JI(e.defaultValue);case"value":return ro(ro({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},kL=function(t){var e=t?t():void 0,n=M.useReducer(SL(),JI(e)),r=n[0],i=n[1],s=M.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=M.useCallback(function(l){i({type:"error",error:l})},[]),a=M.useCallback(function(l){i({type:"value",value:l})},[]);return M.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},CL=function(t,e){var n=kL(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return M.useEffect(function(){var l=cN(t,function(u){return _L(void 0,void 0,void 0,function(){var d;return EL(this,function(m){switch(m.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];m.label=1;case 1:return m.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return m.sent(),[3,4];case 3:return d=m.sent(),s(d),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};function IL(){const[t,e,n]=CL(Xo),{showComments:r,dispatch:i}=Ns();return M.useEffect(()=>{t&&(oD(t==null?void 0:t.uid).then(s=>{i({type:"UPDATE_USER_PHOTO",value:s||QI})}),aD(t==null?void 0:t.uid).then(s=>i({type:"UPDATE_USER_NAME",value:s})),lD(t==null?void 0:t.uid).then(s=>{i({type:"UPDATE_BLOCKED",value:s||[]})}),uD(t==null?void 0:t.uid).then(s=>{i({type:"UPDATE_FAVORITES",value:s||[]})}))},[t]),I.jsx("div",{className:"App",children:e?I.jsx("div",{className:"spinner",children:I.jsx(Sf.RotateSpinner,{size:30,color:"#000"})}):I.jsxs(o3,{children:[I.jsx(yL,{isAuthenticated:t!==null}),I.jsx("div",{className:"content",children:I.jsxs(t3,{children:[I.jsx(er,{path:"/",element:I.jsx(LM,{user:t})}),I.jsxs(er,{element:I.jsx(f_,{isAllowed:t!==null,redirectTo:"/login"}),children:[I.jsx(er,{path:"/favorites",element:I.jsx(cL,{user:t})}),I.jsx(er,{path:"/blocked",element:I.jsx(jM,{user:t})}),I.jsx(er,{path:"/user",element:I.jsx(uL,{user:t})})]}),I.jsxs(er,{element:I.jsx(f_,{isAllowed:t===null}),children:[I.jsx(er,{path:"/register",element:I.jsx(oL,{})}),I.jsx(er,{path:"/login",element:I.jsx(aL,{})}),I.jsx(er,{path:"/reset",element:I.jsx(lL,{})})]})]})}),r&&I.jsx(wL,{user:t})]})})}ip.createRoot(document.getElementById("root")).render(I.jsx(h3,{children:I.jsx(IL,{})}));
