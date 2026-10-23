(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $w(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hg={exports:{}},Ll={},qg={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),Ww=Symbol.for("react.portal"),Hw=Symbol.for("react.fragment"),qw=Symbol.for("react.strict_mode"),Kw=Symbol.for("react.profiler"),Gw=Symbol.for("react.provider"),Qw=Symbol.for("react.context"),Xw=Symbol.for("react.forward_ref"),Yw=Symbol.for("react.suspense"),Jw=Symbol.for("react.memo"),Zw=Symbol.for("react.lazy"),Ep=Symbol.iterator;function eE(t){return t===null||typeof t!="object"?null:(t=Ep&&t[Ep]||t["@@iterator"],typeof t=="function"?t:null)}var Kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gg=Object.assign,Qg={};function Yi(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Kg}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xg(){}Xg.prototype=Yi.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||Kg}var Uh=Fh.prototype=new Xg;Uh.constructor=Fh;Gg(Uh,Yi.prototype);Uh.isPureReactComponent=!0;var Tp=Array.isArray,Yg=Object.prototype.hasOwnProperty,jh={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yg.call(e,r)&&!Jg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:So,type:t,key:s,ref:o,props:i,_owner:jh.current}}function tE(t,e){return{$$typeof:So,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===So}function nE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ip=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nE(""+t.key):e.toString(36)}function Ra(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case So:case Ww:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bu(o,0):r,Tp(i)?(n="",t!=null&&(n=t.replace(Ip,"$&/")+"/"),Ra(i,e,n,"",function(h){return h})):i!=null&&(zh(i)&&(i=tE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ip,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+bu(s,l);o+=Ra(s,e,n,u,i)}else if(u=eE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+bu(s,l++),o+=Ra(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var r=[],i=0;return Ra(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},Ca={transition:null},iE={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:jh};function ey(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Yi;re.Fragment=Hw;re.Profiler=Kw;re.PureComponent=Fh;re.StrictMode=qw;re.Suspense=Yw;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;re.act=ey;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Yg.call(e,u)&&!Jg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:So,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:Qw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gw,_context:t},t.Consumer=t};re.createElement=Zg;re.createFactory=function(t){var e=Zg.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:Xw,render:t}};re.isValidElement=zh;re.lazy=function(t){return{$$typeof:Zw,_payload:{_status:-1,_result:t},_init:rE}};re.memo=function(t,e){return{$$typeof:Jw,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ca.transition;Ca.transition={};try{t()}finally{Ca.transition=e}};re.unstable_act=ey;re.useCallback=function(t,e){return wt.current.useCallback(t,e)};re.useContext=function(t){return wt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};re.useEffect=function(t,e){return wt.current.useEffect(t,e)};re.useId=function(){return wt.current.useId()};re.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return wt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};re.useRef=function(t){return wt.current.useRef(t)};re.useState=function(t){return wt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return wt.current.useTransition()};re.version="18.3.1";qg.exports=re;var ge=qg.exports;const sE=$w(ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE=ge,aE=Symbol.for("react.element"),lE=Symbol.for("react.fragment"),uE=Object.prototype.hasOwnProperty,cE=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hE={key:!0,ref:!0,__self:!0,__source:!0};function ty(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uE.call(e,r)&&!hE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:aE,type:t,key:s,ref:o,props:i,_owner:cE.current}}Ll.Fragment=lE;Ll.jsx=ty;Ll.jsxs=ty;Hg.exports=Ll;var D=Hg.exports,_c={},ny={exports:{}},Lt={},ry={exports:{}},iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var ne=B.length;B.push(G);e:for(;0<ne;){var ve=ne-1>>>1,de=B[ve];if(0<i(de,G))B[ve]=G,B[ne]=de,ne=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],ne=B.pop();if(ne!==G){B[0]=ne;e:for(var ve=0,de=B.length,Se=de>>>1;ve<Se;){var qt=2*(ve+1)-1,Kt=B[qt],Gt=qt+1,z=B[Gt];if(0>i(Kt,ne))Gt<de&&0>i(z,Kt)?(B[ve]=z,B[Gt]=ne,ve=Gt):(B[ve]=Kt,B[qt]=ne,ve=qt);else if(Gt<de&&0>i(z,ne))B[ve]=z,B[Gt]=ne,ve=Gt;else break e}}return G}function i(B,G){var ne=B.sortIndex-G.sortIndex;return ne!==0?ne:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,y=3,T=!1,R=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function x(B){if(N=!1,k(B),!R)if(n(u)!==null)R=!0,Rr(F);else{var G=n(h);G!==null&&Ht(x,G.startTime-B)}}function F(B,G){R=!1,N&&(N=!1,S(g),g=-1),T=!0;var ne=y;try{for(k(G),p=n(u);p!==null&&(!(p.expirationTime>G)||B&&!A());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,y=p.priorityLevel;var de=ve(p.expirationTime<=G);G=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(u)&&r(u),k(G)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var qt=n(h);qt!==null&&Ht(x,qt.startTime-G),Se=!1}return Se}finally{p=null,y=ne,T=!1}}var U=!1,v=null,g=-1,w=5,E=-1;function A(){return!(t.unstable_now()-E<w)}function C(){if(v!==null){var B=t.unstable_now();E=B;var G=!0;try{G=v(!0,B)}finally{G?I():(U=!1,v=null)}}else U=!1}var I;if(typeof _=="function")I=function(){_(C)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,wn=Tt.port2;Tt.port1.onmessage=C,I=function(){wn.postMessage(null)}}else I=function(){V(C,0)};function Rr(B){v=B,U||(U=!0,I())}function Ht(B,G){g=V(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,Rr(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var ne=y;y=G;try{return B()}finally{y=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=y;y=B;try{return G()}finally{y=ne}},t.unstable_scheduleCallback=function(B,G,ne){var ve=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ve+ne:ve):ne=ve,B){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ne+de,B={id:f++,callback:G,priorityLevel:B,startTime:ne,expirationTime:de,sortIndex:-1},ne>ve?(B.sortIndex=ne,e(h,B),n(u)===null&&B===n(h)&&(N?(S(g),g=-1):N=!0,Ht(x,ne-ve))):(B.sortIndex=de,e(u,B),R||T||(R=!0,Rr(F))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var G=y;return function(){var ne=y;y=G;try{return B.apply(this,arguments)}finally{y=ne}}}})(iy);ry.exports=iy;var dE=ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=ge,Ot=dE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sy=new Set,Ys={};function Jr(t,e){Oi(t,e),Oi(t+"Capture",e)}function Oi(t,e){for(Ys[t]=e,t=0;t<e.length;t++)sy.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,pE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sp={},kp={};function mE(t){return vc.call(kp,t)?!0:vc.call(Sp,t)?!1:pE.test(t)?kp[t]=!0:(Sp[t]=!0,!1)}function gE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yE(t,e,n,r){if(e===null||typeof e>"u"||gE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,$h);Ze[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,$h);Ze[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,$h);Ze[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wh(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yE(e,n,i,r)&&(n=null),r||i===null?mE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),hi=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),oy=Symbol.for("react.provider"),ay=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Tc=Symbol.for("react.suspense_list"),Kh=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),ly=Symbol.for("react.offscreen"),Ap=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Vu;function Rs(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Ou=!1;function Lu(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function _E(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=Lu(t.type,!1),t;case 11:return t=Lu(t.type.render,!1),t;case 1:return t=Lu(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case hi:return"Portal";case wc:return"Profiler";case Hh:return"StrictMode";case Ec:return"Suspense";case Tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ay:return(t.displayName||"Context")+".Consumer";case oy:return(t._context.displayName||"Context")+".Provider";case qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kh:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function vE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wE(t){var e=uy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=wE(t))}function cy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sc(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hy(t,e){e=e.checked,e!=null&&Wh(t,"checked",e,!1)}function kc(t,e){hy(t,e);var n=_r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||Qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Cs(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function dy(t,e){var n=_r(e.value),r=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,py=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EE=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(t){EE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Os[e]=Os[t]})});function my(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Os.hasOwnProperty(t)&&Os[t]?(""+e).trim():e+"px"}function gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=my(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TE=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(TE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function Gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,ki=null,Ai=null;function Np(t){if(t=Ro(t)){if(typeof Dc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=zl(e),Dc(t.stateNode,t.type,e))}}function yy(t){ki?Ai?Ai.push(t):Ai=[t]:ki=t}function _y(){if(ki){var t=ki,e=Ai;if(Ai=ki=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function vy(t,e){return t(e)}function wy(){}var Mu=!1;function Ey(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return vy(t,e,n)}finally{Mu=!1,(ki!==null||Ai!==null)&&(wy(),_y())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var bc=!1;if(Dn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){bc=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{bc=!1}function IE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ls=!1,Xa=null,Ya=!1,Vc=null,SE={onError:function(t){Ls=!0,Xa=t}};function kE(t,e,n,r,i,s,o,l,u){Ls=!1,Xa=null,IE.apply(SE,arguments)}function AE(t,e,n,r,i,s,o,l,u){if(kE.apply(this,arguments),Ls){if(Ls){var h=Xa;Ls=!1,Xa=null}else throw Error(M(198));Ya||(Ya=!0,Vc=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ty(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dp(t){if(Zr(t)!==t)throw Error(M(188))}function RE(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dp(i),t;if(s===r)return Dp(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Iy(t){return t=RE(t),t!==null?Sy(t):null}function Sy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sy(t);if(e!==null)return e;t=t.sibling}return null}var ky=Ot.unstable_scheduleCallback,bp=Ot.unstable_cancelCallback,CE=Ot.unstable_shouldYield,PE=Ot.unstable_requestPaint,Ve=Ot.unstable_now,xE=Ot.unstable_getCurrentPriorityLevel,Qh=Ot.unstable_ImmediatePriority,Ay=Ot.unstable_UserBlockingPriority,Ja=Ot.unstable_NormalPriority,NE=Ot.unstable_LowPriority,Ry=Ot.unstable_IdlePriority,Ml=null,cn=null;function DE(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:OE,bE=Math.log,VE=Math.LN2;function OE(t){return t>>>=0,t===0?32:31-(bE(t)/VE|0)|0}var la=64,ua=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Za(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ps(l):(s&=o,s!==0&&(r=Ps(s)))}else o=n&~i,o!==0?r=Ps(o):s!==0&&(r=Ps(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),i=1<<n,r|=t[n],e&=~i;return r}function LE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ME(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=LE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cy(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function FE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function Py(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xy,Yh,Ny,Dy,by,Lc=!1,ca=[],or=null,ar=null,lr=null,eo=new Map,to=new Map,Yn=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ro(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jE(t,e,n,r,i){switch(e){case"focusin":return or=ws(or,t,e,n,r,i),!0;case"dragenter":return ar=ws(ar,t,e,n,r,i),!0;case"mouseover":return lr=ws(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,ws(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,ws(to.get(s)||null,t,e,n,r,i)),!0}return!1}function Vy(t){var e=Or(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ty(n),e!==null){t.blockedOn=e,by(t.priority,function(){Ny(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=Ro(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Op(t,e,n){Pa(t)&&n.delete(e)}function zE(){Lc=!1,or!==null&&Pa(or)&&(or=null),ar!==null&&Pa(ar)&&(ar=null),lr!==null&&Pa(lr)&&(lr=null),eo.forEach(Op),to.forEach(Op)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,zE)))}function no(t){function e(i){return Es(i,t)}if(0<ca.length){Es(ca[0],t);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Es(or,t),ar!==null&&Es(ar,t),lr!==null&&Es(lr,t),eo.forEach(e),to.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Vy(n),n.blockedOn===null&&Yn.shift()}var Ri=Bn.ReactCurrentBatchConfig,el=!0;function BE(t,e,n,r){var i=pe,s=Ri.transition;Ri.transition=null;try{pe=1,Jh(t,e,n,r)}finally{pe=i,Ri.transition=s}}function $E(t,e,n,r){var i=pe,s=Ri.transition;Ri.transition=null;try{pe=4,Jh(t,e,n,r)}finally{pe=i,Ri.transition=s}}function Jh(t,e,n,r){if(el){var i=Mc(t,e,n,r);if(i===null)Gu(t,e,r,tl,n),Vp(t,r);else if(jE(i,t,e,n,r))r.stopPropagation();else if(Vp(t,r),e&4&&-1<UE.indexOf(t)){for(;i!==null;){var s=Ro(i);if(s!==null&&xy(s),s=Mc(t,e,n,r),s===null&&Gu(t,e,r,tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gu(t,e,r,null,n)}}var tl=null;function Mc(t,e,n,r){if(tl=null,t=Gh(r),t=Or(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ty(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function Oy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xE()){case Qh:return 1;case Ay:return 4;case Ja:case NE:return 16;case Ry:return 536870912;default:return 16}default:return 16}}var rr=null,Zh=null,xa=null;function Ly(){if(xa)return xa;var t,e=Zh,n=e.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xa=i.slice(t,1<r?1-r:void 0)}function Na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function Lp(){return!1}function Mt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:Lp,this.isPropagationStopped=Lp,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=Mt(Ji),Ao=Re({},Ji,{view:0,detail:0}),WE=Mt(Ao),Uu,ju,Ts,Fl=Re({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Uu=t.screenX-Ts.screenX,ju=t.screenY-Ts.screenY):ju=Uu=0,Ts=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Mp=Mt(Fl),HE=Re({},Fl,{dataTransfer:0}),qE=Mt(HE),KE=Re({},Ao,{relatedTarget:0}),zu=Mt(KE),GE=Re({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),QE=Mt(GE),XE=Re({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YE=Mt(XE),JE=Re({},Ji,{data:0}),Fp=Mt(JE),ZE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tT[t])?!!e[t]:!1}function td(){return nT}var rT=Re({},Ao,{key:function(t){if(t.key){var e=ZE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:td,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iT=Mt(rT),sT=Re({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Mt(sT),oT=Re({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:td}),aT=Mt(oT),lT=Re({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),uT=Mt(lT),cT=Re({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hT=Mt(cT),dT=[9,13,27,32],nd=Dn&&"CompositionEvent"in window,Ms=null;Dn&&"documentMode"in document&&(Ms=document.documentMode);var fT=Dn&&"TextEvent"in window&&!Ms,My=Dn&&(!nd||Ms&&8<Ms&&11>=Ms),jp=" ",zp=!1;function Fy(t,e){switch(t){case"keyup":return dT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function pT(t,e){switch(t){case"compositionend":return Uy(e);case"keypress":return e.which!==32?null:(zp=!0,jp);case"textInput":return t=e.data,t===jp&&zp?null:t;default:return null}}function mT(t,e){if(fi)return t==="compositionend"||!nd&&Fy(t,e)?(t=Ly(),xa=Zh=rr=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return My&&e.locale!=="ko"?null:e.data;default:return null}}var gT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gT[t.type]:e==="textarea"}function jy(t,e,n,r){yy(r),e=nl(e,"onChange"),0<e.length&&(n=new ed("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,ro=null;function yT(t){Yy(t,0)}function Ul(t){var e=gi(t);if(cy(e))return t}function _T(t,e){if(t==="change")return e}var zy=!1;if(Dn){var Bu;if(Dn){var $u="oninput"in document;if(!$u){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),$u=typeof $p.oninput=="function"}Bu=$u}else Bu=!1;zy=Bu&&(!document.documentMode||9<document.documentMode)}function Wp(){Fs&&(Fs.detachEvent("onpropertychange",By),ro=Fs=null)}function By(t){if(t.propertyName==="value"&&Ul(ro)){var e=[];jy(e,ro,t,Gh(t)),Ey(yT,e)}}function vT(t,e,n){t==="focusin"?(Wp(),Fs=e,ro=n,Fs.attachEvent("onpropertychange",By)):t==="focusout"&&Wp()}function wT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(ro)}function ET(t,e){if(t==="click")return Ul(e)}function TT(t,e){if(t==="input"||t==="change")return Ul(e)}function IT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:IT;function io(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vc.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,e){var n=Hp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function $y(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$y(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wy(){for(var t=window,e=Qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qa(t.document)}return e}function rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ST(t){var e=Wy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$y(n.ownerDocument.documentElement,n)){if(r!==null&&rd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qp(n,s);var o=qp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kT=Dn&&"documentMode"in document&&11>=document.documentMode,pi=null,Fc=null,Us=null,Uc=!1;function Kp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uc||pi==null||pi!==Qa(r)||(r=pi,"selectionStart"in r&&rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&io(Us,r)||(Us=r,r=nl(Fc,"onSelect"),0<r.length&&(e=new ed("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Wu={},Hy={};Dn&&(Hy=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function jl(t){if(Wu[t])return Wu[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hy)return Wu[t]=e[n];return t}var qy=jl("animationend"),Ky=jl("animationiteration"),Gy=jl("animationstart"),Qy=jl("transitionend"),Xy=new Map,Gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){Xy.set(t,e),Jr(e,[t])}for(var Hu=0;Hu<Gp.length;Hu++){var qu=Gp[Hu],AT=qu.toLowerCase(),RT=qu[0].toUpperCase()+qu.slice(1);Ir(AT,"on"+RT)}Ir(qy,"onAnimationEnd");Ir(Ky,"onAnimationIteration");Ir(Gy,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Qy,"onTransitionEnd");Oi("onMouseEnter",["mouseout","mouseover"]);Oi("onMouseLeave",["mouseout","mouseover"]);Oi("onPointerEnter",["pointerout","pointerover"]);Oi("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CT=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function Qp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AE(r,e,void 0,t),t.currentTarget=null}function Yy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Qp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Qp(i,l,h),s=u}}}if(Ya)throw t=Vc,Ya=!1,Vc=null,t}function Ee(t,e){var n=e[Wc];n===void 0&&(n=e[Wc]=new Set);var r=t+"__bubble";n.has(r)||(Jy(e,t,2,!1),n.add(r))}function Ku(t,e,n){var r=0;e&&(r|=4),Jy(n,t,r,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[fa]){t[fa]=!0,sy.forEach(function(n){n!=="selectionchange"&&(CT.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,Ku("selectionchange",!1,e))}}function Jy(t,e,n,r){switch(Oy(e)){case 1:var i=BE;break;case 4:i=$E;break;default:i=Jh}n=i.bind(null,e,n,t),i=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Or(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ey(function(){var h=s,f=Gh(n),p=[];e:{var y=Xy.get(t);if(y!==void 0){var T=ed,R=t;switch(t){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":T=iT;break;case"focusin":R="focus",T=zu;break;case"focusout":R="blur",T=zu;break;case"beforeblur":case"afterblur":T=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=qE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=aT;break;case qy:case Ky:case Gy:T=QE;break;case Qy:T=uT;break;case"scroll":T=WE;break;case"wheel":T=hT;break;case"copy":case"cut":case"paste":T=YE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Up}var N=(e&4)!==0,V=!N&&t==="scroll",S=N?y!==null?y+"Capture":null:y;N=[];for(var _=h,k;_!==null;){k=_;var x=k.stateNode;if(k.tag===5&&x!==null&&(k=x,S!==null&&(x=Zs(_,S),x!=null&&N.push(oo(_,x,k)))),V)break;_=_.return}0<N.length&&(y=new T(y,R,null,n,f),p.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",y&&n!==Nc&&(R=n.relatedTarget||n.fromElement)&&(Or(R)||R[bn]))break e;if((T||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=h,R=R?Or(R):null,R!==null&&(V=Zr(R),R!==V||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=h),T!==R)){if(N=Mp,x="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Up,x="onPointerLeave",S="onPointerEnter",_="pointer"),V=T==null?y:gi(T),k=R==null?y:gi(R),y=new N(x,_+"leave",T,n,f),y.target=V,y.relatedTarget=k,x=null,Or(f)===h&&(N=new N(S,_+"enter",R,n,f),N.target=k,N.relatedTarget=V,x=N),V=x,T&&R)t:{for(N=T,S=R,_=0,k=N;k;k=oi(k))_++;for(k=0,x=S;x;x=oi(x))k++;for(;0<_-k;)N=oi(N),_--;for(;0<k-_;)S=oi(S),k--;for(;_--;){if(N===S||S!==null&&N===S.alternate)break t;N=oi(N),S=oi(S)}N=null}else N=null;T!==null&&Xp(p,y,T,N,!1),R!==null&&V!==null&&Xp(p,V,R,N,!0)}}e:{if(y=h?gi(h):window,T=y.nodeName&&y.nodeName.toLowerCase(),T==="select"||T==="input"&&y.type==="file")var F=_T;else if(Bp(y))if(zy)F=TT;else{F=wT;var U=vT}else(T=y.nodeName)&&T.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=ET);if(F&&(F=F(t,h))){jy(p,F,n,f);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&Ac(y,"number",y.value)}switch(U=h?gi(h):window,t){case"focusin":(Bp(U)||U.contentEditable==="true")&&(pi=U,Fc=h,Us=null);break;case"focusout":Us=Fc=pi=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Kp(p,n,f);break;case"selectionchange":if(kT)break;case"keydown":case"keyup":Kp(p,n,f)}var v;if(nd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else fi?Fy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(My&&n.locale!=="ko"&&(fi||g!=="onCompositionStart"?g==="onCompositionEnd"&&fi&&(v=Ly()):(rr=f,Zh="value"in rr?rr.value:rr.textContent,fi=!0)),U=nl(h,g),0<U.length&&(g=new Fp(g,t,null,n,f),p.push({event:g,listeners:U}),v?g.data=v:(v=Uy(n),v!==null&&(g.data=v)))),(v=fT?pT(t,n):mT(t,n))&&(h=nl(h,"onBeforeInput"),0<h.length&&(f=new Fp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}Yy(p,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Zs(n,s),u!=null&&o.unshift(oo(n,u,l))):i||(u=Zs(n,s),u!=null&&o.push(oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PT=/\r\n?/g,xT=/\u0000|\uFFFD/g;function Yp(t){return(typeof t=="string"?t:""+t).replace(PT,`
`).replace(xT,"")}function pa(t,e,n){if(e=Yp(e),Yp(t)!==e&&n)throw Error(M(425))}function rl(){}var jc=null,zc=null;function Bc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,NT=typeof clearTimeout=="function"?clearTimeout:void 0,Jp=typeof Promise=="function"?Promise:void 0,DT=typeof queueMicrotask=="function"?queueMicrotask:typeof Jp<"u"?function(t){return Jp.resolve(null).then(t).catch(bT)}:$c;function bT(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),ln="__reactFiber$"+Zi,ao="__reactProps$"+Zi,bn="__reactContainer$"+Zi,Wc="__reactEvents$"+Zi,VT="__reactListeners$"+Zi,OT="__reactHandles$"+Zi;function Or(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zp(t);t!==null;){if(n=t[ln])return n;t=Zp(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[ln]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function zl(t){return t[ao]||null}var Hc=[],yi=-1;function Sr(t){return{current:t}}function Te(t){0>yi||(t.current=Hc[yi],Hc[yi]=null,yi--)}function _e(t,e){yi++,Hc[yi]=t.current,t.current=e}var vr={},ct=Sr(vr),At=Sr(!1),Br=vr;function Li(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function il(){Te(At),Te(ct)}function em(t,e,n){if(ct.current!==vr)throw Error(M(168));_e(ct,e),_e(At,n)}function Zy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,vE(t)||"Unknown",i));return Re({},n,r)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Br=ct.current,_e(ct,t),_e(At,At.current),!0}function tm(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Zy(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,Te(At),Te(ct),_e(ct,t)):Te(At),_e(At,n)}var Sn=null,Bl=!1,Xu=!1;function e_(t){Sn===null?Sn=[t]:Sn.push(t)}function LT(t){Bl=!0,e_(t)}function kr(){if(!Xu&&Sn!==null){Xu=!0;var t=0,e=pe;try{var n=Sn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Bl=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),ky(Qh,kr),i}finally{pe=e,Xu=!1}}return null}var _i=[],vi=0,ol=null,al=0,Ft=[],Ut=0,$r=null,kn=1,An="";function Dr(t,e){_i[vi++]=al,_i[vi++]=ol,ol=t,al=e}function t_(t,e,n){Ft[Ut++]=kn,Ft[Ut++]=An,Ft[Ut++]=$r,$r=t;var r=kn;t=An;var i=32-nn(r)-1;r&=~(1<<i),n+=1;var s=32-nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kn=1<<32-nn(e)+i|n<<i|r,An=s+t}else kn=1<<s|n<<i|r,An=t}function id(t){t.return!==null&&(Dr(t,1),t_(t,1,0))}function sd(t){for(;t===ol;)ol=_i[--vi],_i[vi]=null,al=_i[--vi],_i[vi]=null;for(;t===$r;)$r=Ft[--Ut],Ft[Ut]=null,An=Ft[--Ut],Ft[Ut]=null,kn=Ft[--Ut],Ft[Ut]=null}var Vt=null,Dt=null,Ie=!1,tn=null;function n_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Dt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:kn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Dt=null,!0):!1;default:return!1}}function qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(Ie){var e=Dt;if(e){var n=e;if(!nm(t,e)){if(qc(t))throw Error(M(418));e=ur(n.nextSibling);var r=Vt;e&&nm(t,e)?n_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Vt=t)}}else{if(qc(t))throw Error(M(418));t.flags=t.flags&-4097|2,Ie=!1,Vt=t}}}function rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function ma(t){if(t!==Vt)return!1;if(!Ie)return rm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bc(t.type,t.memoizedProps)),e&&(e=Dt)){if(qc(t))throw r_(),Error(M(418));for(;e;)n_(t,e),e=ur(e.nextSibling)}if(rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Vt?ur(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=Dt;t;)t=ur(t.nextSibling)}function Mi(){Dt=Vt=null,Ie=!1}function od(t){tn===null?tn=[t]:tn.push(t)}var MT=Bn.ReactCurrentBatchConfig;function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function im(t){var e=t._init;return e(t._payload)}function i_(t){function e(S,_){if(t){var k=S.deletions;k===null?(S.deletions=[_],S.flags|=16):k.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=fr(S,_),S.index=0,S.sibling=null,S}function s(S,_,k){return S.index=k,t?(k=S.alternate,k!==null?(k=k.index,k<_?(S.flags|=2,_):k):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,_,k,x){return _===null||_.tag!==6?(_=rc(k,S.mode,x),_.return=S,_):(_=i(_,k),_.return=S,_)}function u(S,_,k,x){var F=k.type;return F===di?f(S,_,k.props.children,x,k.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Qn&&im(F)===_.type)?(x=i(_,k.props),x.ref=Is(S,_,k),x.return=S,x):(x=Fa(k.type,k.key,k.props,null,S.mode,x),x.ref=Is(S,_,k),x.return=S,x)}function h(S,_,k,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==k.containerInfo||_.stateNode.implementation!==k.implementation?(_=ic(k,S.mode,x),_.return=S,_):(_=i(_,k.children||[]),_.return=S,_)}function f(S,_,k,x,F){return _===null||_.tag!==7?(_=jr(k,S.mode,x,F),_.return=S,_):(_=i(_,k),_.return=S,_)}function p(S,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return _=rc(""+_,S.mode,k),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sa:return k=Fa(_.type,_.key,_.props,null,S.mode,k),k.ref=Is(S,null,_),k.return=S,k;case hi:return _=ic(_,S.mode,k),_.return=S,_;case Qn:var x=_._init;return p(S,x(_._payload),k)}if(Cs(_)||_s(_))return _=jr(_,S.mode,k,null),_.return=S,_;ga(S,_)}return null}function y(S,_,k,x){var F=_!==null?_.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return F!==null?null:l(S,_,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case sa:return k.key===F?u(S,_,k,x):null;case hi:return k.key===F?h(S,_,k,x):null;case Qn:return F=k._init,y(S,_,F(k._payload),x)}if(Cs(k)||_s(k))return F!==null?null:f(S,_,k,x,null);ga(S,k)}return null}function T(S,_,k,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return S=S.get(k)||null,l(_,S,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case sa:return S=S.get(x.key===null?k:x.key)||null,u(_,S,x,F);case hi:return S=S.get(x.key===null?k:x.key)||null,h(_,S,x,F);case Qn:var U=x._init;return T(S,_,k,U(x._payload),F)}if(Cs(x)||_s(x))return S=S.get(k)||null,f(_,S,x,F,null);ga(_,x)}return null}function R(S,_,k,x){for(var F=null,U=null,v=_,g=_=0,w=null;v!==null&&g<k.length;g++){v.index>g?(w=v,v=null):w=v.sibling;var E=y(S,v,k[g],x);if(E===null){v===null&&(v=w);break}t&&v&&E.alternate===null&&e(S,v),_=s(E,_,g),U===null?F=E:U.sibling=E,U=E,v=w}if(g===k.length)return n(S,v),Ie&&Dr(S,g),F;if(v===null){for(;g<k.length;g++)v=p(S,k[g],x),v!==null&&(_=s(v,_,g),U===null?F=v:U.sibling=v,U=v);return Ie&&Dr(S,g),F}for(v=r(S,v);g<k.length;g++)w=T(v,S,g,k[g],x),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?g:w.key),_=s(w,_,g),U===null?F=w:U.sibling=w,U=w);return t&&v.forEach(function(A){return e(S,A)}),Ie&&Dr(S,g),F}function N(S,_,k,x){var F=_s(k);if(typeof F!="function")throw Error(M(150));if(k=F.call(k),k==null)throw Error(M(151));for(var U=F=null,v=_,g=_=0,w=null,E=k.next();v!==null&&!E.done;g++,E=k.next()){v.index>g?(w=v,v=null):w=v.sibling;var A=y(S,v,E.value,x);if(A===null){v===null&&(v=w);break}t&&v&&A.alternate===null&&e(S,v),_=s(A,_,g),U===null?F=A:U.sibling=A,U=A,v=w}if(E.done)return n(S,v),Ie&&Dr(S,g),F;if(v===null){for(;!E.done;g++,E=k.next())E=p(S,E.value,x),E!==null&&(_=s(E,_,g),U===null?F=E:U.sibling=E,U=E);return Ie&&Dr(S,g),F}for(v=r(S,v);!E.done;g++,E=k.next())E=T(v,S,g,E.value,x),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?g:E.key),_=s(E,_,g),U===null?F=E:U.sibling=E,U=E);return t&&v.forEach(function(C){return e(S,C)}),Ie&&Dr(S,g),F}function V(S,_,k,x){if(typeof k=="object"&&k!==null&&k.type===di&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case sa:e:{for(var F=k.key,U=_;U!==null;){if(U.key===F){if(F=k.type,F===di){if(U.tag===7){n(S,U.sibling),_=i(U,k.props.children),_.return=S,S=_;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Qn&&im(F)===U.type){n(S,U.sibling),_=i(U,k.props),_.ref=Is(S,U,k),_.return=S,S=_;break e}n(S,U);break}else e(S,U);U=U.sibling}k.type===di?(_=jr(k.props.children,S.mode,x,k.key),_.return=S,S=_):(x=Fa(k.type,k.key,k.props,null,S.mode,x),x.ref=Is(S,_,k),x.return=S,S=x)}return o(S);case hi:e:{for(U=k.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===k.containerInfo&&_.stateNode.implementation===k.implementation){n(S,_.sibling),_=i(_,k.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=ic(k,S.mode,x),_.return=S,S=_}return o(S);case Qn:return U=k._init,V(S,_,U(k._payload),x)}if(Cs(k))return R(S,_,k,x);if(_s(k))return N(S,_,k,x);ga(S,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,k),_.return=S,S=_):(n(S,_),_=rc(k,S.mode,x),_.return=S,S=_),o(S)):n(S,_)}return V}var Fi=i_(!0),s_=i_(!1),ll=Sr(null),ul=null,wi=null,ad=null;function ld(){ad=wi=ul=null}function ud(t){var e=ll.current;Te(ll),t._currentValue=e}function Gc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){ul=t,ad=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(ad!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(ul===null)throw Error(M(308));wi=t,ul.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Lr=null;function cd(t){Lr===null?Lr=[t]:Lr.push(t)}function o_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vn(t,n)}return i=r.interleaved,i===null?(e.next=e,cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vn(t,n)}function Da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xh(t,n)}}function sm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,T=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(y=e,T=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){p=R.call(T,p,y);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,y=typeof R=="function"?R.call(T,p,y):R,y==null)break e;p=Re({},p,y);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else T={eventTime:T,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=T,u=p):f=f.next=T,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=p}}function om(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Co={},hn=Sr(Co),lo=Sr(Co),uo=Sr(Co);function Mr(t){if(t===Co)throw Error(M(174));return t}function dd(t,e){switch(_e(uo,e),_e(lo,t),_e(hn,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cc(e,t)}Te(hn),_e(hn,e)}function Ui(){Te(hn),Te(lo),Te(uo)}function l_(t){Mr(uo.current);var e=Mr(hn.current),n=Cc(e,t.type);e!==n&&(_e(lo,t),_e(hn,n))}function fd(t){lo.current===t&&(Te(hn),Te(lo))}var ke=Sr(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function pd(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var ba=Bn.ReactCurrentDispatcher,Ju=Bn.ReactCurrentBatchConfig,Wr=0,Ae=null,Me=null,$e=null,dl=!1,js=!1,co=0,FT=0;function it(){throw Error(M(321))}function md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function gd(t,e,n,r,i,s){if(Wr=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?BT:$T,t=n(r,i),js){s=0;do{if(js=!1,co=0,25<=s)throw Error(M(301));s+=1,$e=Me=null,e.updateQueue=null,ba.current=WT,t=n(r,i)}while(js)}if(ba.current=fl,e=Me!==null&&Me.next!==null,Wr=0,$e=Me=Ae=null,dl=!1,e)throw Error(M(300));return t}function yd(){var t=co!==0;return co=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function $t(){if(Me===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=$e===null?Ae.memoizedState:$e.next;if(e!==null)$e=e,Me=t;else{if(t===null)throw Error(M(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function ho(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=$t(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Wr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ae.lanes|=f,Hr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,sn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=$t(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function u_(){}function c_(t,e){var n=Ae,r=$t(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,_d(f_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,fo(9,d_.bind(null,n,r,i,e),void 0,null),We===null)throw Error(M(349));Wr&30||h_(n,e,i)}return i}function h_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,r){e.value=n,e.getSnapshot=r,p_(e)&&m_(t)}function f_(t,e,n){return n(function(){p_(e)&&m_(t)})}function p_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function m_(t){var e=Vn(t,1);e!==null&&rn(e,t,1,-1)}function am(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=zT.bind(null,Ae,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g_(){return $t().memoizedState}function Va(t,e,n,r){var i=an();Ae.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function $l(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&md(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function lm(t,e){return Va(8390656,8,t,e)}function _d(t,e){return $l(2048,8,t,e)}function y_(t,e){return $l(4,2,t,e)}function __(t,e){return $l(4,4,t,e)}function v_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,v_.bind(null,e,t),n)}function vd(){}function E_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&md(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function T_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&md(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function I_(t,e,n){return Wr&21?(sn(n,e)||(n=Cy(),Ae.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function UT(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Ju.transition;Ju.transition={};try{t(!1),e()}finally{pe=n,Ju.transition=r}}function S_(){return $t().memoizedState}function jT(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k_(t))A_(e,n);else if(n=o_(t,e,n,r),n!==null){var i=_t();rn(n,t,r,i),R_(n,e,r)}}function zT(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k_(t))A_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,sn(l,o)){var u=e.interleaved;u===null?(i.next=i,cd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=o_(t,e,i,r),n!==null&&(i=_t(),rn(n,t,r,i),R_(n,e,r))}}function k_(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function A_(t,e){js=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xh(t,n)}}var fl={readContext:Bt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},BT={readContext:Bt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Va(4194308,4,v_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Va(4194308,4,t,e)},useInsertionEffect:function(t,e){return Va(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jT.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:am,useDebugValue:vd,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=am(!1),e=t[0];return t=UT.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=an();if(Ie){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),We===null)throw Error(M(349));Wr&30||h_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lm(f_.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,d_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=We.identifierPrefix;if(Ie){var n=An,r=kn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$T={readContext:Bt,useCallback:E_,useContext:Bt,useEffect:_d,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:__,useMemo:T_,useReducer:Zu,useRef:g_,useState:function(){return Zu(ho)},useDebugValue:vd,useDeferredValue:function(t){var e=$t();return I_(e,Me.memoizedState,t)},useTransition:function(){var t=Zu(ho)[0],e=$t().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:S_,unstable_isNewReconciler:!1},WT={readContext:Bt,useCallback:E_,useContext:Bt,useEffect:_d,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:__,useMemo:T_,useReducer:ec,useRef:g_,useState:function(){return ec(ho)},useDebugValue:vd,useDeferredValue:function(t){var e=$t();return Me===null?e.memoizedState=t:I_(e,Me.memoizedState,t)},useTransition:function(){var t=ec(ho)[0],e=$t().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:S_,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=dr(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(rn(e,t,i,r),Da(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=dr(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(rn(e,t,i,r),Da(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=dr(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(rn(e,t,r,n),Da(e,t,r))}};function um(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function C_(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=Rt(e)?Br:ct.current,r=e.contextTypes,s=(r=r!=null)?Li(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function Xc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=Rt(e)?Br:ct.current,i.context=Li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wl.enqueueReplaceState(i,i.state,null),cl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ji(t,e){try{var n="",r=e;do n+=_E(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HT=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ml||(ml=!0,ah=r),Yc(t,e)},n}function x_(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yc(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sI.bind(null,t,e,n),e.then(t,t))}function dm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var qT=Bn.ReactCurrentOwner,kt=!1;function yt(t,e,n,r){e.child=t===null?s_(e,null,n,r):Fi(e,t.child,n,r)}function pm(t,e,n,r,i){n=n.render;var s=e.ref;return Ci(e,i),r=gd(t,e,n,r,s,i),n=yd(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ie&&n&&id(e),e.flags|=1,yt(t,e,r,i),e.child)}function mm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N_(t,e,s,r,i)):(t=Fa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function N_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Jc(t,e,n,r,i)}function D_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Ti,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Ti,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Ti,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Ti,Nt),Nt|=r;return yt(t,e,i,n),e.child}function b_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jc(t,e,n,r,i){var s=Rt(n)?Br:ct.current;return s=Li(e,s),Ci(e,i),n=gd(t,e,n,r,s,i),r=yd(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(Ie&&r&&id(e),e.flags|=1,yt(t,e,n,i),e.child)}function gm(t,e,n,r,i){if(Rt(n)){var s=!0;sl(e)}else s=!1;if(Ci(e,i),e.stateNode===null)Oa(t,e),C_(e,n,r),Xc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Bt(h):(h=Rt(n)?Br:ct.current,h=Li(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&cm(e,o,r,h),Xn=!1;var y=e.memoizedState;o.state=y,cl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||At.current||Xn?(typeof f=="function"&&(Qc(e,n,f,r),u=e.memoizedState),(l=Xn||um(e,n,l,r,y,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Zt(e.type,l),o.props=h,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=Rt(n)?Br:ct.current,u=Li(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&cm(e,o,r,u),Xn=!1,y=e.memoizedState,o.state=y,cl(e,r,o,i);var R=e.memoizedState;l!==p||y!==R||At.current||Xn?(typeof T=="function"&&(Qc(e,n,T,r),R=e.memoizedState),(h=Xn||um(e,n,h,r,y,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Zc(t,e,n,r,s,i)}function Zc(t,e,n,r,i,s){b_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tm(e,n,!1),On(t,e,s);r=e.stateNode,qT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,l,s)):yt(t,e,l,s),e.memoizedState=r.state,i&&tm(e,n,!0),e.child}function V_(t){var e=t.stateNode;e.pendingContext?em(t,e.pendingContext,e.pendingContext!==e.context):e.context&&em(t,e.context,!1),dd(t,e.containerInfo)}function ym(t,e,n,r,i){return Mi(),od(i),e.flags|=256,yt(t,e,n,r),e.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(t){return{baseLanes:t,cachePool:null,transitions:null}}function O_(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(ke,i&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kl(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=th(n),e.memoizedState=eh,t):wd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return KT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eh,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wd(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,r){return r!==null&&od(r),Fi(e,t.child,null,n),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tc(Error(M(422))),ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kl({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=th(o),e.memoizedState=eh,s);if(!(e.mode&1))return ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=tc(s,r,void 0),ya(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vn(t,i),rn(r,t,i,-1))}return Ad(),r=tc(Error(M(421))),ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=oI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Dt=ur(i.nextSibling),Vt=e,Ie=!0,tn=null,t!==null&&(Ft[Ut++]=kn,Ft[Ut++]=An,Ft[Ut++]=$r,kn=t.id,An=t.overflow,$r=e),e=wd(e,r.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gc(t.return,e,n)}function nc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function L_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GT(t,e,n){switch(e.tag){case 3:V_(e),Mi();break;case 5:l_(e);break;case 1:Rt(e.type)&&sl(e);break;case 4:dd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(ll,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?O_(t,e,n):(_e(ke,ke.current&1),t=On(t,e,n),t!==null?t.sibling:null);_e(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return L_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,D_(t,e,n)}return On(t,e,n)}var M_,nh,F_,U_;M_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nh=function(){};F_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(hn.current);var s=null;switch(n){case"input":i=Sc(t,i),r=Sc(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Rc(t,i),r=Rc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rl)}Pc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ys.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ys.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ee("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};U_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ss(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function QT(t,e,n){var r=e.pendingProps;switch(sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Rt(e.type)&&il(),st(e),null;case 3:return r=e.stateNode,Ui(),Te(At),Te(ct),pd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(ch(tn),tn=null))),nh(t,e),st(e),null;case 5:fd(e);var i=Mr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return st(e),null}if(t=Mr(hn.current),ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ln]=e,r[ao]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)Ee(xs[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Rp(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":Pp(r,s),Ee("invalid",r)}Pc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,l,t),i=["children",""+l]):Ys.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":oa(r),Cp(r,s,!0);break;case"textarea":oa(r),xp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[ao]=r,M_(t,e,!1,!1),e.stateNode=t;e:{switch(o=xc(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)Ee(xs[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Rp(t,r),i=Sc(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Pp(t,r),i=Rc(t,r),Ee("invalid",t);break;default:i=r}Pc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?gy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&py(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ys.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&Wh(t,s,u,o))}switch(n){case"input":oa(t),Cp(t,r,!1);break;case"textarea":oa(t),xp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)U_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Mr(uo.current),Mr(hn.current),ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(s=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return st(e),null;case 13:if(Te(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Dt!==null&&e.mode&1&&!(e.flags&128))r_(),Mi(),e.flags|=98560,s=!1;else if(s=ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[ln]=e}else Mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else tn!==null&&(ch(tn),tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ue===0&&(Ue=3):Ad())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Ui(),nh(t,e),t===null&&so(e.stateNode.containerInfo),st(e),null;case 10:return ud(e.type._context),st(e),null;case 17:return Rt(e.type)&&il(),st(e),null;case 19:if(Te(ke),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ss(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,Ss(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>zi&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304)}else{if(!r)if(t=hl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return st(e),null}else 2*Ve()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=ke.current,_e(ke,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return kd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function XT(t,e){switch(sd(e),e.tag){case 1:return Rt(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),Te(At),Te(ct),pd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fd(e),null;case 13:if(Te(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(ke),null;case 4:return Ui(),null;case 10:return ud(e.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var _a=!1,lt=!1,YT=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function rh(t,e,n){try{n()}catch(r){xe(t,e,r)}}var vm=!1;function JT(t,e){if(jc=el,t=Wy(),rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,y=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)y=p,p=T;for(;;){if(p===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(T=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zc={focusedElem:t,selectionRange:n},el=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,V=R.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Zt(e.type,N),V);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(x){xe(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=vm,vm=!1,R}function zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rh(e,n,s)}i=i.next}while(i!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j_(t){var e=t.alternate;e!==null&&(t.alternate=null,j_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[ao],delete e[Wc],delete e[VT],delete e[OT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function z_(t){return t.tag===5||t.tag===3||t.tag===4}function wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}function oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}var Ge=null,en=!1;function Kn(t,e,n){for(n=n.child;n!==null;)B_(t,e,n),n=n.sibling}function B_(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:lt||Ei(n,e);case 6:var r=Ge,i=en;Ge=null,Kn(t,e,n),Ge=r,en=i,Ge!==null&&(en?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(en?(t=Ge,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),no(t)):Qu(Ge,n.stateNode));break;case 4:r=Ge,i=en,Ge=n.stateNode.containerInfo,en=!0,Kn(t,e,n),Ge=r,en=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rh(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!lt&&(Ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Kn(t,e,n),lt=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YT),e.forEach(function(r){var i=aI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,en=!1;break e;case 3:Ge=l.stateNode.containerInfo,en=!0;break e;case 4:Ge=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(Ge===null)throw Error(M(160));B_(s,o,i),Ge=null,en=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){xe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$_(e,t),e=e.sibling}function $_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),on(t),r&4){try{zs(3,t,t.return),Hl(3,t)}catch(N){xe(t,t.return,N)}try{zs(5,t,t.return)}catch(N){xe(t,t.return,N)}}break;case 1:Jt(e,t),on(t),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(Jt(e,t),on(t),r&512&&n!==null&&Ei(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(N){xe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hy(i,s),xc(l,o);var h=xc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?gy(i,p):f==="dangerouslySetInnerHTML"?py(i,p):f==="children"?Js(i,p):Wh(i,f,p,h)}switch(l){case"input":kc(i,s);break;case"textarea":dy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Si(i,!!s.multiple,T,!1):y!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[ao]=s}catch(N){xe(t,t.return,N)}}break;case 6:if(Jt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){xe(t,t.return,N)}}break;case 3:if(Jt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(N){xe(t,t.return,N)}break;case 4:Jt(e,t),on(t);break;case 13:Jt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Id=Ve())),r&4&&Em(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(h=lt)||f,Jt(e,t),lt=h):Jt(e,t),on(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(y=$,T=y.child,y.tag){case 0:case 11:case 14:case 15:zs(4,y,y.return);break;case 1:Ei(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){xe(r,n,N)}}break;case 5:Ei(y,y.return);break;case 22:if(y.memoizedState!==null){Im(p);continue}}T!==null?(T.return=y,$=T):Im(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=my("display",o))}catch(N){xe(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){xe(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Jt(e,t),on(t),r&4&&Em(t);break;case 21:break;default:Jt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(z_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=wm(t);oh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wm(t);sh(t,l,o);break;default:throw Error(M(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZT(t,e,n){$=t,W_(t)}function W_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_a;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||lt;l=_a;var h=lt;if(_a=o,(lt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Sm(i):u!==null?(u.return=o,$=u):Sm(i);for(;s!==null;)$=s,W_(s),s=s.sibling;$=i,_a=l,lt=h}Tm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Tm(t)}}function Tm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&om(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}om(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}lt||e.flags&512&&ih(e)}catch(y){xe(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Im(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Sm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{ih(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{ih(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var eI=Math.ceil,pl=Bn.ReactCurrentDispatcher,Ed=Bn.ReactCurrentOwner,zt=Bn.ReactCurrentBatchConfig,le=0,We=null,Le=null,Ye=0,Nt=0,Ti=Sr(0),Ue=0,po=null,Hr=0,ql=0,Td=0,Bs=null,It=null,Id=0,zi=1/0,In=null,ml=!1,ah=null,hr=null,va=!1,ir=null,gl=0,$s=0,lh=null,La=-1,Ma=0;function _t(){return le&6?Ve():La!==-1?La:La=Ve()}function dr(t){return t.mode&1?le&2&&Ye!==0?Ye&-Ye:MT.transition!==null?(Ma===0&&(Ma=Cy()),Ma):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Oy(t.type)),t):1}function rn(t,e,n,r){if(50<$s)throw $s=0,lh=null,Error(M(185));ko(t,n,r),(!(le&2)||t!==We)&&(t===We&&(!(le&2)&&(ql|=n),Ue===4&&Jn(t,Ye)),Ct(t,r),n===1&&le===0&&!(e.mode&1)&&(zi=Ve()+500,Bl&&kr()))}function Ct(t,e){var n=t.callbackNode;ME(t,e);var r=Za(t,t===We?Ye:0);if(r===0)n!==null&&bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bp(n),e===1)t.tag===0?LT(km.bind(null,t)):e_(km.bind(null,t)),DT(function(){!(le&6)&&kr()}),n=null;else{switch(Py(r)){case 1:n=Qh;break;case 4:n=Ay;break;case 16:n=Ja;break;case 536870912:n=Ry;break;default:n=Ja}n=J_(n,H_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function H_(t,e){if(La=-1,Ma=0,le&6)throw Error(M(327));var n=t.callbackNode;if(Pi()&&t.callbackNode!==n)return null;var r=Za(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yl(t,r);else{e=r;var i=le;le|=2;var s=K_();(We!==t||Ye!==e)&&(In=null,zi=Ve()+500,Ur(t,e));do try{rI();break}catch(l){q_(t,l)}while(!0);ld(),pl.current=s,le=i,Le!==null?e=0:(We=null,Ye=0,e=Ue)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=uh(t,i))),e===1)throw n=po,Ur(t,0),Jn(t,r),Ct(t,Ve()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!tI(i)&&(e=yl(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=uh(t,s))),e===1))throw n=po,Ur(t,0),Jn(t,r),Ct(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:br(t,It,In);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=Id+500-Ve(),10<e)){if(Za(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$c(br.bind(null,t,It,In),e);break}br(t,It,In);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eI(r/1960))-r,10<r){t.timeoutHandle=$c(br.bind(null,t,It,In),r);break}br(t,It,In);break;case 5:br(t,It,In);break;default:throw Error(M(329))}}}return Ct(t,Ve()),t.callbackNode===n?H_.bind(null,t):null}function uh(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=yl(t,e),t!==2&&(e=It,It=n,e!==null&&ch(e)),t}function ch(t){It===null?It=t:It.push.apply(It,t)}function tI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~Td,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function km(t){if(le&6)throw Error(M(327));Pi();var e=Za(t,0);if(!(e&1))return Ct(t,Ve()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=uh(t,r))}if(n===1)throw n=po,Ur(t,0),Jn(t,e),Ct(t,Ve()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,It,In),Ct(t,Ve()),null}function Sd(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(zi=Ve()+500,Bl&&kr())}}function qr(t){ir!==null&&ir.tag===0&&!(le&6)&&Pi();var e=le;le|=1;var n=zt.transition,r=pe;try{if(zt.transition=null,pe=1,t)return t()}finally{pe=r,zt.transition=n,le=e,!(le&6)&&kr()}}function kd(){Nt=Ti.current,Te(Ti)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NT(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Ui(),Te(At),Te(ct),pd();break;case 5:fd(r);break;case 4:Ui();break;case 13:Te(ke);break;case 19:Te(ke);break;case 10:ud(r.type._context);break;case 22:case 23:kd()}n=n.return}if(We=t,Le=t=fr(t.current,null),Ye=Nt=e,Ue=0,po=null,Td=ql=Hr=0,It=Bs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function q_(t,e){do{var n=Le;try{if(ld(),ba.current=fl,dl){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dl=!1}if(Wr=0,$e=Me=Ae=null,js=!1,co=0,Ed.current=null,n===null||n.return===null){Ue=1,po=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=dm(o);if(T!==null){T.flags&=-257,fm(T,o,l,s,e),T.mode&1&&hm(s,h,e),e=T,u=h;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){hm(s,h,e),Ad();break e}u=Error(M(426))}}else if(Ie&&l.mode&1){var V=dm(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),fm(V,o,l,s,e),od(ji(u,l));break e}}s=u=ji(u,l),Ue!==4&&(Ue=2),Bs===null?Bs=[s]:Bs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=P_(s,u,e);sm(s,S);break e;case 1:l=u;var _=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(hr===null||!hr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=x_(s,l,e);sm(s,x);break e}}s=s.return}while(s!==null)}Q_(n)}catch(F){e=F,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function K_(){var t=pl.current;return pl.current=fl,t===null?fl:t}function Ad(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(Hr&268435455)&&!(ql&268435455)||Jn(We,Ye)}function yl(t,e){var n=le;le|=2;var r=K_();(We!==t||Ye!==e)&&(In=null,Ur(t,e));do try{nI();break}catch(i){q_(t,i)}while(!0);if(ld(),le=n,pl.current=r,Le!==null)throw Error(M(261));return We=null,Ye=0,Ue}function nI(){for(;Le!==null;)G_(Le)}function rI(){for(;Le!==null&&!CE();)G_(Le)}function G_(t){var e=Y_(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?Q_(t):Le=e,Ed.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XT(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=QT(n,e,Nt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function br(t,e,n){var r=pe,i=zt.transition;try{zt.transition=null,pe=1,iI(t,e,n,r)}finally{zt.transition=i,pe=r}return null}function iI(t,e,n,r){do Pi();while(ir!==null);if(le&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FE(t,s),t===We&&(Le=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,J_(Ja,function(){return Pi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=pe;pe=1;var l=le;le|=4,Ed.current=null,JT(t,n),$_(n,t),ST(zc),el=!!jc,zc=jc=null,t.current=n,ZT(n),PE(),le=l,pe=o,zt.transition=s}else t.current=n;if(va&&(va=!1,ir=t,gl=i),s=t.pendingLanes,s===0&&(hr=null),DE(n.stateNode),Ct(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ml)throw ml=!1,t=ah,ah=null,t;return gl&1&&t.tag!==0&&Pi(),s=t.pendingLanes,s&1?t===lh?$s++:($s=0,lh=t):$s=0,kr(),null}function Pi(){if(ir!==null){var t=Py(gl),e=zt.transition,n=pe;try{if(zt.transition=null,pe=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,gl=0,le&6)throw Error(M(331));var i=le;for(le|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:zs(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var y=f.sibling,T=f.return;if(j_(f),f===h){$=null;break}if(y!==null){y.return=T,$=y;break}$=T}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var V=N.sibling;N.sibling=null,N=V}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zs(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,$=k;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(F){xe(l,l.return,F)}if(l===o){$=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,$=x;break e}$=l.return}}if(le=i,kr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Ml,t)}catch{}r=!0}return r}finally{pe=n,zt.transition=e}}return!1}function Am(t,e,n){e=ji(n,e),e=P_(t,e,1),t=cr(t,e,1),e=_t(),t!==null&&(ko(t,1,e),Ct(t,e))}function xe(t,e,n){if(t.tag===3)Am(t,t,n);else for(;e!==null;){if(e.tag===3){Am(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=ji(n,t),t=x_(e,t,1),e=cr(e,t,1),t=_t(),e!==null&&(ko(e,1,t),Ct(e,t));break}}e=e.return}}function sI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>Ve()-Id?Ur(t,0):Td|=n),Ct(t,e)}function X_(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=_t();t=Vn(t,e),t!==null&&(ko(t,e,n),Ct(t,n))}function oI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X_(t,n)}function aI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),X_(t,n)}var Y_;Y_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,GT(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Ie&&e.flags&1048576&&t_(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Oa(t,e),t=e.pendingProps;var i=Li(e,ct.current);Ci(e,n),i=gd(null,e,r,t,i,n);var s=yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hd(e),i.updater=Wl,e.stateNode=i,i._reactInternals=e,Xc(e,r,t,n),e=Zc(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&id(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uI(r),t=Zt(r,t),i){case 0:e=Jc(null,e,r,t,n);break e;case 1:e=gm(null,e,r,t,n);break e;case 11:e=pm(null,e,r,t,n);break e;case 14:e=mm(null,e,r,Zt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Jc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),gm(t,e,r,i,n);case 3:e:{if(V_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a_(t,e),cl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ji(Error(M(423)),e),e=ym(t,e,r,n,i);break e}else if(r!==i){i=ji(Error(M(424)),e),e=ym(t,e,r,n,i);break e}else for(Dt=ur(e.stateNode.containerInfo.firstChild),Vt=e,Ie=!0,tn=null,n=s_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){e=On(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return l_(e),t===null&&Kc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bc(r,i)?o=null:s!==null&&Bc(r,s)&&(e.flags|=32),b_(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Kc(e),null;case 13:return O_(t,e,n);case 4:return dd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),pm(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(ll,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!At.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=xn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Gc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ci(e,n),i=Bt(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=Zt(r,e.pendingProps),i=Zt(r.type,i),mm(t,e,r,i,n);case 15:return N_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Zt(r,i),Oa(t,e),e.tag=1,Rt(r)?(t=!0,sl(e)):t=!1,Ci(e,n),C_(e,r,i),Xc(e,r,i,n),Zc(null,e,r,!0,t,n);case 19:return L_(t,e,n);case 22:return D_(t,e,n)}throw Error(M(156,e.tag))};function J_(t,e){return ky(t,e)}function lI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new lI(t,e,n,r)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uI(t){if(typeof t=="function")return Rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qh)return 11;if(t===Kh)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return jr(n.children,i,s,e);case Hh:o=8,i|=8;break;case wc:return t=jt(12,n,e,i|2),t.elementType=wc,t.lanes=s,t;case Ec:return t=jt(13,n,e,i),t.elementType=Ec,t.lanes=s,t;case Tc:return t=jt(19,n,e,i),t.elementType=Tc,t.lanes=s,t;case ly:return Kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oy:o=10;break e;case ay:o=9;break e;case qh:o=11;break e;case Kh:o=14;break e;case Qn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function Kl(t,e,n,r){return t=jt(22,t,r,e),t.elementType=ly,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function ic(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cd(t,e,n,r,i,s,o,l,u){return t=new cI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(s),t}function hI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z_(t){if(!t)return vr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(Rt(n))return Zy(t,n,e)}return e}function ev(t,e,n,r,i,s,o,l,u){return t=Cd(n,r,!0,t,i,s,o,l,u),t.context=Z_(null),n=t.current,r=_t(),i=dr(n),s=xn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,ko(t,i,r),Ct(t,r),t}function Gl(t,e,n,r){var i=e.current,s=_t(),o=dr(i);return n=Z_(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(rn(t,i,o,s),Da(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pd(t,e){Rm(t,e),(t=t.alternate)&&Rm(t,e)}function dI(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function xd(t){this._internalRoot=t}Ql.prototype.render=xd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Gl(t,e,null,null)};Ql.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Gl(null,t,null,null)}),e[bn]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&Vy(t)}};function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function fI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=_l(o);s.call(h)}}var o=ev(e,r,t,0,null,!1,!1,"",Cm);return t._reactRootContainer=o,t[bn]=o.current,so(t.nodeType===8?t.parentNode:t),qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=_l(u);l.call(h)}}var u=Cd(t,0,!1,null,null,!1,!1,"",Cm);return t._reactRootContainer=u,t[bn]=u.current,so(t.nodeType===8?t.parentNode:t),qr(function(){Gl(e,u,n,r)}),u}function Yl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=_l(o);l.call(u)}}Gl(e,o,t,i)}else o=fI(n,e,t,i,r);return _l(o)}xy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(Xh(e,n|1),Ct(e,Ve()),!(le&6)&&(zi=Ve()+500,kr()))}break;case 13:qr(function(){var r=Vn(t,1);if(r!==null){var i=_t();rn(r,t,1,i)}}),Pd(t,1)}};Yh=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=_t();rn(e,t,134217728,n)}Pd(t,134217728)}};Ny=function(t){if(t.tag===13){var e=dr(t),n=Vn(t,e);if(n!==null){var r=_t();rn(n,t,e,r)}Pd(t,e)}};Dy=function(){return pe};by=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Dc=function(t,e,n){switch(e){case"input":if(kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zl(r);if(!i)throw Error(M(90));cy(r),kc(r,i)}}}break;case"textarea":dy(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};vy=Sd;wy=qr;var pI={usingClientEntryPoint:!1,Events:[Ro,gi,zl,yy,_y,Sd]},ks={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mI={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iy(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||dI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Ml=wa.inject(mI),cn=wa}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pI;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(M(200));return hI(t,e,null,n)};Lt.createRoot=function(t,e){if(!Nd(t))throw Error(M(299));var n=!1,r="",i=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cd(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,so(t.nodeType===8?t.parentNode:t),new xd(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Iy(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return qr(t)};Lt.hydrate=function(t,e,n){if(!Xl(e))throw Error(M(200));return Yl(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Nd(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ev(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ql(e)};Lt.render=function(t,e,n){if(!Xl(e))throw Error(M(200));return Yl(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(M(40));return t._reactRootContainer?(qr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Lt.unstable_batchedUpdates=Sd;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xl(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Yl(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),ny.exports=Lt;var gI=ny.exports,Pm=gI;_c.createRoot=Pm.createRoot,_c.hydrateRoot=Pm.hydrateRoot;var xm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},iv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,T=h&63;u||(T=64,o||(y=64)),r.push(n[f],n[p],n[y],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new _I;const y=s<<2|l>>4;if(r.push(y),h!==64){const T=l<<4&240|h>>2;if(r.push(T),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vI=function(t){const e=rv(t);return iv.encodeByteArray(e,!0)},vl=function(t){return vI(t).replace(/\./g,"")},sv=function(t){try{return iv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const EI=()=>wI().__FIREBASE_DEFAULTS__,TI=()=>{if(typeof process>"u"||typeof xm>"u")return;const t=xm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},II=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sv(t[1]);return e&&JSON.parse(e)},Jl=()=>{try{return EI()||TI()||II()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ov=t=>{var e,n;return(n=(e=Jl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SI=t=>{const e=ov(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},av=()=>{var t;return(t=Jl())===null||t===void 0?void 0:t.config},lv=t=>{var e;return(e=Jl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function AI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function CI(){var t;const e=(t=Jl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bI(){return!CI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VI(){try{return typeof indexedDB=="object"}catch{return!1}}function OI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LI,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $n(i,l,r)}}function MI(t,e){return t.replace(FI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FI=/\{\$([^}]+)}/g;function UI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nm(s)&&Nm(o)){if(!wl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jI(t,e){const n=new zI(t,e);return n.subscribe.bind(n)}class zI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sc),i.error===void 0&&(i.error=sc),i.complete===void 0&&(i.complete=sc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class Kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class $I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HI(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WI(t){return t===Vr?void 0:t}function HI(t){return t.instantiationMode==="EAGER"}/**
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
 */class qI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const KI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},GI=se.INFO,QI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=QI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dd{constructor(e){this.name=e,this._logLevel=GI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const YI=(t,e)=>e.some(n=>t instanceof n);let Dm,bm;function JI(){return Dm||(Dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZI(){return bm||(bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uv=new WeakMap,hh=new WeakMap,cv=new WeakMap,oc=new WeakMap,bd=new WeakMap;function e1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uv.set(n,t)}).catch(()=>{}),bd.set(e,t),e}function t1(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n1(t){dh=t(dh)}function r1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return cv.set(r,e.sort?e.sort():[e]),pr(r)}:ZI().includes(t)?function(...e){return t.apply(ac(this),e),pr(uv.get(this))}:function(...e){return pr(t.apply(ac(this),e))}}function i1(t){return typeof t=="function"?r1(t):(t instanceof IDBTransaction&&t1(t),YI(t,JI())?new Proxy(t,dh):t)}function pr(t){if(t instanceof IDBRequest)return e1(t);if(oc.has(t))return oc.get(t);const e=i1(t);return e!==t&&(oc.set(t,e),bd.set(e,t)),e}const ac=t=>bd.get(t);function s1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pr(o.result),u.oldVersion,u.newVersion,pr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const o1=["get","getKey","getAll","getAllKeys","count"],a1=["put","add","delete","clear"],lc=new Map;function Vm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||o1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return lc.set(e,s),s}n1(t=>({...t,get:(e,n,r)=>Vm(e,n)||t.get(e,n,r),has:(e,n)=>!!Vm(e,n)||t.has(e,n)}));/**
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
 */class l1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function u1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fh="@firebase/app",Om="0.10.13";/**
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
 */const Ln=new Dd("@firebase/app"),c1="@firebase/app-compat",h1="@firebase/analytics-compat",d1="@firebase/analytics",f1="@firebase/app-check-compat",p1="@firebase/app-check",m1="@firebase/auth",g1="@firebase/auth-compat",y1="@firebase/database",_1="@firebase/data-connect",v1="@firebase/database-compat",w1="@firebase/functions",E1="@firebase/functions-compat",T1="@firebase/installations",I1="@firebase/installations-compat",S1="@firebase/messaging",k1="@firebase/messaging-compat",A1="@firebase/performance",R1="@firebase/performance-compat",C1="@firebase/remote-config",P1="@firebase/remote-config-compat",x1="@firebase/storage",N1="@firebase/storage-compat",D1="@firebase/firestore",b1="@firebase/vertexai-preview",V1="@firebase/firestore-compat",O1="firebase",L1="10.14.1";/**
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
 */const ph="[DEFAULT]",M1={[fh]:"fire-core",[c1]:"fire-core-compat",[d1]:"fire-analytics",[h1]:"fire-analytics-compat",[p1]:"fire-app-check",[f1]:"fire-app-check-compat",[m1]:"fire-auth",[g1]:"fire-auth-compat",[y1]:"fire-rtdb",[_1]:"fire-data-connect",[v1]:"fire-rtdb-compat",[w1]:"fire-fn",[E1]:"fire-fn-compat",[T1]:"fire-iid",[I1]:"fire-iid-compat",[S1]:"fire-fcm",[k1]:"fire-fcm-compat",[A1]:"fire-perf",[R1]:"fire-perf-compat",[C1]:"fire-rc",[P1]:"fire-rc-compat",[x1]:"fire-gcs",[N1]:"fire-gcs-compat",[D1]:"fire-fst",[V1]:"fire-fst-compat",[b1]:"fire-vertex","fire-js":"fire-js",[O1]:"fire-js-all"};/**
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
 */const El=new Map,F1=new Map,mh=new Map;function Lm(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(mh.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;mh.set(e,t);for(const n of El.values())Lm(n,t);for(const n of F1.values())Lm(n,t);return!0}function Vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t.settings!==void 0}/**
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
 */const U1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mr=new Po("app","Firebase",U1);/**
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
 */class j1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const es=L1;function hv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ph,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=av()),!n)throw mr.create("no-options");const s=El.get(i);if(s){if(wl(n,s.options)&&wl(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new qI(i);for(const u of mh.values())o.addComponent(u);const l=new j1(n,r,o);return El.set(i,l),l}function dv(t=ph){const e=El.get(t);if(!e&&t===ph&&av())return hv();if(!e)throw mr.create("no-app",{appName:t});return e}function gr(t,e,n){var r;let i=(r=M1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}Bi(new Kr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const z1="firebase-heartbeat-database",B1=1,mo="firebase-heartbeat-store";let uc=null;function fv(){return uc||(uc=s1(z1,B1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),uc}async function $1(t){try{const n=(await fv()).transaction(mo),r=await n.objectStore(mo).get(pv(t));return await n.done,r}catch(e){if(e instanceof $n)Ln.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Mm(t,e){try{const r=(await fv()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,pv(t)),await r.done}catch(n){if(n instanceof $n)Ln.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function pv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const W1=1024,H1=30*24*60*60*1e3;class q1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=H1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fm(),{heartbeatsToSend:r,unsentEntries:i}=K1(this._heartbeatsCache.heartbeats),s=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function Fm(){return new Date().toISOString().substring(0,10)}function K1(t,e=W1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Um(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Um(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class G1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VI()?OI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Um(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Q1(t){Bi(new Kr("platform-logger",e=>new l1(e),"PRIVATE")),Bi(new Kr("heartbeat",e=>new q1(e),"PRIVATE")),gr(fh,Om,t),gr(fh,Om,"esm2017"),gr("fire-js","")}Q1("");var X1="firebase",Y1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(X1,Y1,"app");function Od(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J1=mv,gv=new Po("auth","Firebase",mv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Dd("@firebase/auth");function Z1(t,...e){Tl.logLevel<=se.WARN&&Tl.warn(`Auth (${es}): ${t}`,...e)}function Ua(t,...e){Tl.logLevel<=se.ERROR&&Tl.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw Ld(t,...e)}function dn(t,...e){return Ld(t,...e)}function yv(t,e,n){const r=Object.assign(Object.assign({},J1()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return yv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gv.create(t,...e)}function J(t,e,...n){if(!t)throw Ld(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ua(e),new Error(e)}function Fn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eS(){return jm()==="http:"||jm()==="https:"}function jm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eS()||xI()||"connection"in navigator)?navigator.onLine:!0}function nS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=RI()||NI()}get(){return tS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new No(3e4,6e4);function Do(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ts(t,e,n,r,i={}){return vv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return PI()||(h.referrerPolicy="no-referrer"),_v.fetch()(wv(t,t.config.apiHost,n,l),h)})}async function vv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rS),e);try{const i=new sS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ea(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw yv(t,f,h);Mn(t,f)}}catch(i){if(i instanceof $n)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function Fd(t,e,n,r,i={}){const s=await ts(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Md(t.config,i):`${t.config.apiScheme}://${i}`}class sS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),iS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e){return ts(t,"POST","/v1/accounts:delete",e)}async function Ev(t,e){return ts(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aS(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=Ud(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ws(cc(i.auth_time)),issuedAtTime:Ws(cc(i.iat)),expirationTime:Ws(cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cc(t){return Number(t)*1e3}function Ud(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=sv(n);return i?JSON.parse(i):(Ua("Failed to decode base64 JWT payload"),null)}catch(i){return Ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zm(t){const e=Ud(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&lS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),i=await go(t,Ev(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tv(s.providerUserInfo):[],l=hS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function cS(t){const e=vt(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tv(t){return t.map(e=>{var{providerId:n}=e,r=Od(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(t,e){const n=await vv(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_v.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fS(t,e){return ts(t,"POST","/v2/accounts:revokeToken",Do(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await go(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aS(this,e)}reload(){return cS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await go(this,oS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:x,isAnonymous:F,providerData:U,stsTokenManager:v}=n;J(k&&v,e,"internal-error");const g=xi.fromJSON(this.name,v);J(typeof k=="string",e,"internal-error"),Gn(p,e.name),Gn(y,e.name),J(typeof x=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),Gn(T,e.name),Gn(R,e.name),Gn(N,e.name),Gn(V,e.name),Gn(S,e.name),Gn(_,e.name);const w=new Cn({uid:k,auth:e,email:y,emailVerified:x,displayName:p,isAnonymous:F,photoURL:R,phoneNumber:T,tenantId:N,stsTokenManager:g,createdAt:S,lastLoginAt:_});return U&&Array.isArray(U)&&(w.providerData=U.map(E=>Object.assign({},E))),V&&(w._redirectEventId=V),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new xi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Il(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new xi;l.updateFromIdToken(r);const u=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Map;function Pn(t){Fn(t instanceof Function,"Expected a class definition");let e=Bm.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bm.set(t,e),e)}/**
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
 */class Iv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Iv.type="NONE";const $m=Iv;/**
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
 */function ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(Pn($m),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Pn($m);const o=ja(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=Cn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ni(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pv(e))return"Blackberry";if(xv(e))return"Webos";if(kv(e))return"Safari";if((e.includes("chrome/")||Av(e))&&!e.includes("edge/"))return"Chrome";if(Cv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sv(t=ht()){return/firefox\//i.test(t)}function kv(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Av(t=ht()){return/crios\//i.test(t)}function Rv(t=ht()){return/iemobile/i.test(t)}function Cv(t=ht()){return/android/i.test(t)}function Pv(t=ht()){return/blackberry/i.test(t)}function xv(t=ht()){return/webos/i.test(t)}function jd(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pS(t=ht()){var e;return jd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mS(){return DI()&&document.documentMode===10}function Nv(t=ht()){return jd(t)||Cv(t)||xv(t)||Pv(t)||/windows phone/i.test(t)||Rv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t,e=[]){let n;switch(t){case"Browser":n=Wm(ht());break;case"Worker":n=`${Wm(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class gS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function yS(t,e={}){return ts(t,"GET","/v2/passwordPolicy",Do(t,e))}/**
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
 */const _S=6;class vS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_S,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hm(this),this.idTokenSubscription=new Hm(this),this.beforeStateQueue=new gS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ev(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Nn(this));const n=e?vt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yS(this),n=new vS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Z1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bo(t){return vt(t)}class Hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ES(t){zd=t}function TS(t){return zd.loadJS(t)}function IS(){return zd.gapiScript}function SS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e){const n=Vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wl(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function AS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RS(t,e,n){const r=bo(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=bv(e),{host:o,port:l}=CS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),PS()}function bv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CS(t){const e=bv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qm(o)}}}function qm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e){return Fd(t,"POST","/v1/accounts:signInWithIdp",Do(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="http://localhost";class Gr extends Vv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Od(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:xS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends Ov{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Vo{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Vo{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Vo{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e){return Fd(t,"POST","/v1/accounts:signUp",Do(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=Km(r);return new Un({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Km(r);return new Un({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Km(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t){var e;if(un(t.app))return Promise.reject(Nn(t));const n=bo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Un({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await NS(n,{returnSecureToken:!0}),i=await Un._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends $n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sl(e,n,r,i)}}function Lv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sl._fromErrorAndOperation(t,s,e,r):s})}async function bS(t,e,n=!1){const r=await go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Un._forOperation(t,"link",r)}/**
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
 */async function VS(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await go(t,Lv(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Ud(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Un._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e,n=!1){if(un(t.app))return Promise.reject(Nn(t));const r="signIn",i=await Lv(t,r,e),s=await Un._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e){return Fd(t,"POST","/v1/accounts:signInWithCustomToken",Do(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e){if(un(t.app))return Promise.reject(Nn(t));const n=bo(t),r=await LS(n,{token:e,returnSecureToken:!0}),i=await Un._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function FS(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function US(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function jS(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}const kl="__sak";/**
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
 */class Mv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kl,"1"),this.storage.removeItem(kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1e3,BS=10;class Fv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fv.type="LOCAL";const $S=Fv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uv.type="SESSION";const jv=Uv;/**
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
 */function WS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await WS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Bd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return window}function qS(t){fn().location.href=t}/**
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
 */function zv(){return typeof fn().WorkerGlobalScope<"u"&&typeof fn().importScripts=="function"}async function KS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QS(){return zv()?self:null}/**
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
 */const Bv="firebaseLocalStorageDb",XS=1,Al="firebaseLocalStorage",$v="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eu(t,e){return t.transaction([Al],e?"readwrite":"readonly").objectStore(Al)}function YS(){const t=indexedDB.deleteDatabase(Bv);return new Oo(t).toPromise()}function _h(){const t=indexedDB.open(Bv,XS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Al,{keyPath:$v})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Al)?e(r):(r.close(),await YS(),e(await _h()))})})}async function Gm(t,e,n){const r=eu(t,!0).put({[$v]:e,value:n});return new Oo(r).toPromise()}async function JS(t,e){const n=eu(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Qm(t,e){const n=eu(t,!0).delete(e);return new Oo(n).toPromise()}const ZS=800,ek=3;class Wv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _h(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ek)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(QS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KS(),!this.activeServiceWorker)return;this.sender=new HS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _h();return await Gm(e,kl,"1"),await Qm(e,kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=eu(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wv.type="LOCAL";const tk=Wv;new No(3e4,6e4);/**
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
 */function nk(t,e){return e?Pn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $d extends Vv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rk(t){return OS(t.auth,new $d(t),t.bypassAuthState)}function ik(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),VS(n,new $d(t),t.bypassAuthState)}async function sk(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),bS(n,new $d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rk;case"linkViaPopup":case"linkViaRedirect":return sk;case"reauthViaPopup":case"reauthViaRedirect":return ik;default:Mn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new No(2e3,1e4);class Ii extends Hv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ok.get())};e()}}Ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="pendingRedirect",za=new Map;class lk extends Hv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const r=await uk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uk(t,e){const n=dk(e),r=hk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ck(t,e){za.set(t._key(),e)}function hk(t){return Pn(t._redirectPersistence)}function dk(t){return ja(ak,t.config.apiKey,t.name)}async function fk(t,e,n=!1){if(un(t.app))return Promise.reject(Nn(t));const r=bo(t),i=nk(r,e),o=await new lk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=10*60*1e3;class mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xm(e))}saveEventToCache(e){this.cachedEventUids.add(Xm(e)),this.lastProcessedEventTime=Date.now()}}function Xm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(t,e={}){return ts(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vk=/^https?/;async function wk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yk(t);for(const n of e)try{if(Ek(n))return}catch{}Mn(t,"unauthorized-domain")}function Ek(t){const e=gh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vk.test(n))return!1;if(_k.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Tk=new No(3e4,6e4);function Ym(){const t=fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ik(t){return new Promise((e,n)=>{var r,i,s;function o(){Ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ym(),n(dn(t,"network-request-failed"))},timeout:Tk.get()})}if(!((i=(r=fn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=fn().gapi)===null||s===void 0)&&s.load)o();else{const l=SS("iframefcb");return fn()[l]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},TS(`${IS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ba=null,e})}let Ba=null;function Sk(t){return Ba=Ba||Ik(t),Ba}/**
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
 */const kk=new No(5e3,15e3),Ak="__/auth/iframe",Rk="emulator/auth/iframe",Ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xk(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Md(e,Rk):`https://${t.config.authDomain}/${Ak}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=Pk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xo(r).slice(1)}`}async function Nk(t){const e=await Sk(t),n=fn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:xk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ck,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),l=fn().setTimeout(()=>{s(o)},kk.get());function u(){fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bk=500,Vk=600,Ok="_blank",Lk="http://localhost";class Jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mk(t,e,n,r=bk,i=Vk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Dk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ht().toLowerCase();n&&(l=Av(h)?Ok:n),Sv(h)&&(e=e||Lk,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[T,R])=>`${y}${T}=${R},`,"");if(pS(h)&&l!=="_self")return Fk(e||"",l),new Jm(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new Jm(p)}function Fk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Uk="__/auth/handler",jk="emulator/auth/handler",zk=encodeURIComponent("fac");async function Zm(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof Ov){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Vo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${zk}=${encodeURIComponent(u)}`:"";return`${Bk(t)}?${xo(l).slice(1)}${h}`}function Bk({config:t}){return t.emulator?Md(t,jk):`https://${t.authDomain}/${Uk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="webStorageSupport";class $k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jv,this._completeRedirectFn=fk,this._overrideRedirectResult=ck}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Zm(e,n,r,gh(),i);return Mk(e,o,Bd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zm(e,n,r,gh(),i);return qS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Nk(e),r=new mk(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hc,{type:hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hc];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nv()||kv()||jd()}}const Wk=$k;var eg="@firebase/auth",tg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kk(t){Bi(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dv(t)},h=new wS(r,i,s,u);return AS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bi(new Kr("auth-internal",e=>{const n=bo(e.getProvider("auth").getImmediate());return(r=>new Hk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(eg,tg,qk(t)),gr(eg,tg,"esm2017")}/**
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
 */const Gk=5*60,Qk=lv("authIdTokenMaxAge")||Gk;let ng=null;const Xk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qk)return;const i=n==null?void 0:n.token;ng!==i&&(ng=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yk(t=dv()){const e=Vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kS(t,{popupRedirectResolver:Wk,persistence:[tk,$S,jv]}),r=lv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Xk(s.toString());US(n,o,()=>o(n.currentUser)),FS(n,l=>o(l))}}const i=ov("auth");return i&&RS(n,`http://${i}`),n}function Jk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ES({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Jk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kk("Browser");var rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zr,Kv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function w(){}w.prototype=g.prototype,v.D=g.prototype,v.prototype=new w,v.prototype.constructor=v,v.C=function(E,A,C){for(var I=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)I[Tt-2]=arguments[Tt];return g.prototype[A].apply(E,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,w){w||(w=0);var E=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)E[A]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(A=0;16>A;++A)E[A]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=v.g[0],w=v.g[1],A=v.g[2];var C=v.g[3],I=g+(C^w&(A^C))+E[0]+3614090360&4294967295;g=w+(I<<7&4294967295|I>>>25),I=C+(A^g&(w^A))+E[1]+3905402710&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(w^C&(g^w))+E[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(g^A&(C^g))+E[3]+3250441966&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(C^w&(A^C))+E[4]+4118548399&4294967295,g=w+(I<<7&4294967295|I>>>25),I=C+(A^g&(w^A))+E[5]+1200080426&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(w^C&(g^w))+E[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(g^A&(C^g))+E[7]+4249261313&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(C^w&(A^C))+E[8]+1770035416&4294967295,g=w+(I<<7&4294967295|I>>>25),I=C+(A^g&(w^A))+E[9]+2336552879&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(w^C&(g^w))+E[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(g^A&(C^g))+E[11]+2304563134&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(C^w&(A^C))+E[12]+1804603682&4294967295,g=w+(I<<7&4294967295|I>>>25),I=C+(A^g&(w^A))+E[13]+4254626195&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(w^C&(g^w))+E[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=w+(g^A&(C^g))+E[15]+1236535329&4294967295,w=A+(I<<22&4294967295|I>>>10),I=g+(A^C&(w^A))+E[1]+4129170786&4294967295,g=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(g^w))+E[6]+3225465664&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(C^g))+E[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^g&(A^C))+E[0]+3921069994&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(A^C&(w^A))+E[5]+3593408605&4294967295,g=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(g^w))+E[10]+38016083&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(C^g))+E[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^g&(A^C))+E[4]+3889429448&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(A^C&(w^A))+E[9]+568446438&4294967295,g=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(g^w))+E[14]+3275163606&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(C^g))+E[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^g&(A^C))+E[8]+1163531501&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(A^C&(w^A))+E[13]+2850285829&4294967295,g=w+(I<<5&4294967295|I>>>27),I=C+(w^A&(g^w))+E[2]+4243563512&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^w&(C^g))+E[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=w+(C^g&(A^C))+E[12]+2368359562&4294967295,w=A+(I<<20&4294967295|I>>>12),I=g+(w^A^C)+E[5]+4294588738&4294967295,g=w+(I<<4&4294967295|I>>>28),I=C+(g^w^A)+E[8]+2272392833&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^w)+E[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^g)+E[14]+4259657740&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(w^A^C)+E[1]+2763975236&4294967295,g=w+(I<<4&4294967295|I>>>28),I=C+(g^w^A)+E[4]+1272893353&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^w)+E[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^g)+E[10]+3200236656&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(w^A^C)+E[13]+681279174&4294967295,g=w+(I<<4&4294967295|I>>>28),I=C+(g^w^A)+E[0]+3936430074&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^w)+E[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^g)+E[6]+76029189&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(w^A^C)+E[9]+3654602809&4294967295,g=w+(I<<4&4294967295|I>>>28),I=C+(g^w^A)+E[12]+3873151461&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^w)+E[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=w+(A^C^g)+E[2]+3299628645&4294967295,w=A+(I<<23&4294967295|I>>>9),I=g+(A^(w|~C))+E[0]+4096336452&4294967295,g=w+(I<<6&4294967295|I>>>26),I=C+(w^(g|~A))+E[7]+1126891415&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~w))+E[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~g))+E[5]+4237533241&4294967295,w=A+(I<<21&4294967295|I>>>11),I=g+(A^(w|~C))+E[12]+1700485571&4294967295,g=w+(I<<6&4294967295|I>>>26),I=C+(w^(g|~A))+E[3]+2399980690&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~w))+E[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~g))+E[1]+2240044497&4294967295,w=A+(I<<21&4294967295|I>>>11),I=g+(A^(w|~C))+E[8]+1873313359&4294967295,g=w+(I<<6&4294967295|I>>>26),I=C+(w^(g|~A))+E[15]+4264355552&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~w))+E[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~g))+E[13]+1309151649&4294967295,w=A+(I<<21&4294967295|I>>>11),I=g+(A^(w|~C))+E[4]+4149444226&4294967295,g=w+(I<<6&4294967295|I>>>26),I=C+(w^(g|~A))+E[11]+3174756917&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~w))+E[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=w+(C^(A|~g))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+C&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var w=g-this.blockSize,E=this.B,A=this.h,C=0;C<g;){if(A==0)for(;C<=w;)i(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<g;)if(E[A++]=v.charCodeAt(C++),A==this.blockSize){i(this,E),A=0;break}}else for(;C<g;)if(E[A++]=v[C++],A==this.blockSize){i(this,E),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var w=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=w&255,w/=256;for(this.u(v),v=Array(16),g=w=0;4>g;++g)for(var E=0;32>E;E+=8)v[w++]=this.g[g]>>>E&255;return v};function s(v,g){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=g(v)}function o(v,g){this.h=g;for(var w=[],E=!0,A=v.length-1;0<=A;A--){var C=v[A]|0;E&&C==g||(w[A]=C,E=!1)}this.g=w}var l={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return V(h(-v));for(var g=[],w=1,E=0;v>=w;E++)g[E]=v/w|0,w*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return V(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(g,8)),E=p,A=0;A<v.length;A+=8){var C=Math.min(8,v.length-A),I=parseInt(v.substring(A,A+C),g);8>C?(C=h(Math.pow(g,C)),E=E.j(C).add(h(I))):(E=E.j(w),E=E.add(h(I)))}return E}var p=u(0),y=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-V(this).m();for(var v=0,g=1,w=0;w<this.g.length;w++){var E=this.i(w);v+=(0<=E?E:4294967296+E)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(N(this))return"-"+V(this).toString(v);for(var g=h(Math.pow(v,6)),w=this,E="";;){var A=x(w,g).g;w=S(w,A.j(g));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(v);if(w=A,R(w))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=S(this,v),N(v)?-1:R(v)?0:1};function V(v){for(var g=v.g.length,w=[],E=0;E<g;E++)w[E]=~v.g[E];return new o(w,~v.h).add(y)}t.abs=function(){return N(this)?V(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],E=0,A=0;A<=g;A++){var C=E+(this.i(A)&65535)+(v.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);E=I>>>16,C&=65535,I&=65535,w[A]=I<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(v,g){return v.add(V(g))}t.j=function(v){if(R(this)||R(v))return p;if(N(this))return N(v)?V(this).j(V(v)):V(V(this).j(v));if(N(v))return V(this.j(V(v)));if(0>this.l(T)&&0>v.l(T))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,w=[],E=0;E<2*g;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<v.g.length;A++){var C=this.i(E)>>>16,I=this.i(E)&65535,Tt=v.i(A)>>>16,wn=v.i(A)&65535;w[2*E+2*A]+=I*wn,_(w,2*E+2*A),w[2*E+2*A+1]+=C*wn,_(w,2*E+2*A+1),w[2*E+2*A+1]+=I*Tt,_(w,2*E+2*A+1),w[2*E+2*A+2]+=C*Tt,_(w,2*E+2*A+2)}for(E=0;E<g;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=g;E<2*g;E++)w[E]=0;return new o(w,0)};function _(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function k(v,g){this.g=v,this.h=g}function x(v,g){if(R(g))throw Error("division by zero");if(R(v))return new k(p,p);if(N(v))return g=x(V(v),g),new k(V(g.g),V(g.h));if(N(g))return g=x(v,V(g)),new k(V(g.g),g.h);if(30<v.g.length){if(N(v)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,E=g;0>=E.l(v);)w=F(w),E=F(E);var A=U(w,1),C=U(E,1);for(E=U(E,2),w=U(w,2);!R(E);){var I=C.add(E);0>=I.l(v)&&(A=A.add(w),C=I),E=U(E,1),w=U(w,1)}return g=S(v,A.j(g)),new k(A,g)}for(A=p;0<=v.l(g);){for(w=Math.max(1,Math.floor(v.m()/g.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=h(w),I=C.j(g);N(I)||0<I.l(v);)w-=E,C=h(w),I=C.j(g);R(C)&&(C=y),A=A.add(C),v=S(v,I)}return new k(A,v)}t.A=function(v){return x(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)&v.i(E);return new o(w,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)|v.i(E);return new o(w,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),w=[],E=0;E<g;E++)w[E]=this.i(E)^v.i(E);return new o(w,this.h^v.h)};function F(v){for(var g=v.g.length+1,w=[],E=0;E<g;E++)w[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(w,v.h)}function U(v,g){var w=g>>5;g%=32;for(var E=v.g.length-w,A=[],C=0;C<E;C++)A[C]=0<g?v.i(C+w)>>>g|v.i(C+w+1)<<32-g:v.i(C+w);return new o(A,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,zr=o}).apply(typeof rg<"u"?rg:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gv,Ns,Qv,$a,vh,Xv,Yv,Jv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,y.apply(null,arguments)}function T(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,b){for(var j=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)j[ye-2]=arguments[ye];return c.prototype[P].apply(m,j)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const P=a.length||0,b=m.length||0;a.length=P+b;for(let j=0;j<b;j++)a[P+j]=m[j]}else a.push(m)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var F=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function U(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let b=0;b<w.length;b++)d=w[b],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=G;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Tt{constructor(){this.h=this.g=null}add(c,d){const m=wn.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var wn=new S(()=>new Rr,a=>a.reset());class Rr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,B=!1,G=new Tt,ne=()=>{const a=l.Promise.resolve(void 0);Ht=()=>{a.then(ve)}};var ve=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){C(d)}var c=wn;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Kt(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{x(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Gt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Kt.aa.h.call(this)}}R(Kt,Se);var Gt={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),W=0;function Y(a,c,d,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++W,this.da=this.fa=!1}function Q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a){this.src=a,this.g={},this.h=0}X.prototype.add=function(a,c,d,m,P){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var j=ae(a,c,m,P);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new Y(c,this.src,b,!!m,P),c.fa=d,a.push(c)),c};function he(a,c){var d=c.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,c,void 0),b;(b=0<=P)&&Array.prototype.splice.call(m,P,1),b&&(Q(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ae(a,c,d,m){for(var P=0;P<a.length;++P){var b=a[P];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==m)return P}return-1}var dt="closure_lm_"+(1e6*Math.random()|0),ze={};function Qt(a,c,d,m,P){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Qt(a,c[b],d,m,P);return null}return d=kf(d),a&&a[z]?a.K(c,d,h(m)?!!m.capture:!1,P):He(a,c,d,!1,m,P)}function He(a,c,d,m,P,b){if(!c)throw Error("Invalid event type");var j=h(P)?!!P.capture:!!P,ye=qe(a);if(ye||(a[dt]=ye=new X(a)),d=ye.add(c,d,m,j,b),d.proxy)return d;if(m=ft(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)qt||(P=j),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(pt(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ft(){function a(d){return c.call(a.src,a.listener,d)}const c=fe;return a}function Xt(a,c,d,m,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)Xt(a,c[b],d,m,P);else m=h(m)?!!m.capture:!!m,d=kf(d),a&&a[z]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=ae(b,d,m,P),-1<d&&(Q(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=qe(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ae(c,d,m,P)),(d=-1<a?c[a]:null)&&De(d))}function De(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[z])he(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(pt(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=qe(c))?(he(d,a),d.h==0&&(d.src=null,c[dt]=null)):Q(a)}}}function pt(a){return a in ze?ze[a]:ze[a]="on"+a}function fe(a,c){if(a.da)a=!0;else{c=new Kt(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&De(a),a=d.call(m,c)}return a}function qe(a){return a=a[dt],a instanceof X?a:null}var gu="__closure_events_fn_"+(1e9*Math.random()>>>0);function kf(a){return typeof a=="function"?a:(a[gu]||(a[gu]=function(c){return a.handleEvent(c)}),a[gu])}function tt(){de.call(this),this.i=new X(this),this.M=this,this.F=null}R(tt,de),tt.prototype[z]=!0,tt.prototype.removeEventListener=function(a,c,d,m){Xt(this,a,c,d,m)};function mt(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var P=c;c=new Se(m,a),E(c,P)}if(P=!0,d)for(var b=d.length-1;0<=b;b--){var j=c.g=d[b];P=Bo(j,m,!0,c)&&P}if(j=c.g=a,P=Bo(j,m,!0,c)&&P,P=Bo(j,m,!1,c)&&P,d)for(b=0;b<d.length;b++)j=c.g=d[b],P=Bo(j,m,!1,c)&&P}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)Q(d[m]);delete a.g[c],a.h--}}this.F=null},tt.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},tt.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Bo(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,b=0;b<c.length;++b){var j=c[b];if(j&&!j.da&&j.capture==d){var ye=j.listener,Ke=j.ha||j.src;j.fa&&he(a.i,j),P=ye.call(Ke,m)!==!1&&P}}return P&&!m.defaultPrevented}function Af(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Rf(a){a.g=Af(()=>{a.g=null,a.i&&(a.i=!1,Rf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class yw extends de{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Rf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(a){de.call(this),this.h=a,this.g={}}R(ss,de);var Cf=[];function Pf(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&De(c)},a),a.g={}}ss.prototype.N=function(){ss.aa.N.call(this),Pf(this)},ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yu=l.JSON.stringify,_w=l.JSON.parse,vw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function _u(){}_u.prototype.h=null;function xf(a){return a.h||(a.h=a.i())}function Nf(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vu(){Se.call(this,"d")}R(vu,Se);function wu(){Se.call(this,"c")}R(wu,Se);var Cr={},Df=null;function $o(){return Df=Df||new tt}Cr.La="serverreachability";function bf(a){Se.call(this,Cr.La,a)}R(bf,Se);function as(a){const c=$o();mt(c,new bf(c))}Cr.STAT_EVENT="statevent";function Vf(a,c){Se.call(this,Cr.STAT_EVENT,a),this.stat=c}R(Vf,Se);function gt(a){const c=$o();mt(c,new Vf(c,a))}Cr.Ma="timingevent";function Of(a,c){Se.call(this,Cr.Ma,a),this.size=c}R(Of,Se);function ls(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function us(){this.g=!0}us.prototype.xa=function(){this.g=!1};function ww(a,c,d,m,P,b){a.info(function(){if(a.g)if(b)for(var j="",ye=b.split("&"),Ke=0;Ke<ye.length;Ke++){var ue=ye[Ke].split("=");if(1<ue.length){var nt=ue[0];ue=ue[1];var rt=nt.split("_");j=2<=rt.length&&rt[1]=="type"?j+(nt+"="+ue+"&"):j+(nt+"=redacted&")}}else j=null;else j=b;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+j})}function Ew(a,c,d,m,P,b,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+b+" "+j})}function ni(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Iw(a,d)+(m?" "+m:"")})}function Tw(a,c){a.info(function(){return"TIMEOUT: "+c})}us.prototype.info=function(){};function Iw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var b=P[0];if(b!="noop"&&b!="stop"&&b!="close")for(var j=1;j<P.length;j++)P[j]=""}}}}return yu(d)}catch{return c}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Eu;function Ho(){}R(Ho,_u),Ho.prototype.g=function(){return new XMLHttpRequest},Ho.prototype.i=function(){return{}},Eu=new Ho;function Wn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new ss(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mf}function Mf(){this.i=null,this.g="",this.h=!1}var Ff={},Tu={};function Iu(a,c,d){a.L=1,a.v=Qo(En(c)),a.m=d,a.P=!0,Uf(a,null)}function Uf(a,c){a.F=Date.now(),qo(a),a.A=En(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Zf(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Mf,a.g=yp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new yw(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Cf[0]=P.toString()),P=Cf);for(var b=0;b<P.length;b++){var j=Qt(d,P[b],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),as(),ww(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Tn(a)==3?c.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=Tn(this.g);var c=this.g.Ba();const si=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||op(this.g)))){this.J||rt!=4||c==7||(c==8||0>=si?as(3):as(2)),Su(this);var d=this.g.Z();this.X=d;t:if(jf(this)){var m=op(this.g);a="";var P=m.length,b=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),cs(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(b&&c==P-1)});m.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Ew(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Ke=this.g;if((ye=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ye)){var ue=ye;break t}}ue=null}if(d=ue)ni(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ku(this,d);else{this.o=!1,this.s=3,gt(12),Pr(this),cs(this);break e}}if(this.P){d=!0;let Yt;for(;!this.J&&this.C<j.length;)if(Yt=Sw(this,j),Yt==Tu){rt==4&&(this.s=4,gt(14),d=!1),ni(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Ff){this.s=4,gt(15),ni(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else ni(this.i,this.l,Yt,null),ku(this,Yt);if(jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||j.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)ni(this.i,this.l,j,"[Invalid Chunked Response]"),Pr(this),cs(this);else if(0<j.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Nu(nt),nt.M=!0,gt(11))}}else ni(this.i,this.l,j,null),ku(this,j);rt==4&&Pr(this),this.o&&!this.J&&(rt==4?fp(this.j,this):(this.o=!1,qo(this)))}else zw(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Pr(this),cs(this)}}}catch{}finally{}};function jf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Sw(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Tu:(d=Number(c.substring(d,m)),isNaN(d)?Ff:(m+=1,m+d>c.length?Tu:(c=c.slice(m,m+d),a.C=m+d,c)))}Wn.prototype.cancel=function(){this.J=!0,Pr(this)};function qo(a){a.S=Date.now()+a.I,zf(a,a.I)}function zf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ls(y(a.ba,a),c)}function Su(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Tw(this.i,this.A),this.L!=2&&(as(),gt(17)),Pr(this),this.s=2,cs(this)):zf(this,this.S-a)};function cs(a){a.j.G==0||a.J||fp(a.j,a)}function Pr(a){Su(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Pf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function ku(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Au(d.h,a))){if(!a.K&&Au(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ta(d),Zo(d);else break e;xu(d),gt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ls(y(d.Za,d),6e3));if(1>=Wf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Nr(d,11)}else if((a.K||d.g==a)&&ta(d),!_(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let ue=P[c];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const nt=ue[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=ue[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const si=ue[5];si!=null&&typeof si=="number"&&0<si&&(m=1.5*si,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Yt=a.g;if(Yt){const ra=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ra){var b=m.h;b.g||ra.indexOf("spdy")==-1&&ra.indexOf("quic")==-1&&ra.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ru(b,b.h),b.h=null))}if(m.D){const Du=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Du&&(m.ya=Du,we(m.I,m.D,Du))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=a;if(m.qa=gp(m,m.J?m.ia:null,m.W),j.K){Hf(m.h,j);var ye=j,Ke=m.L;Ke&&(ye.I=Ke),ye.B&&(Su(ye),qo(ye)),m.g=j}else hp(m);0<d.i.length&&ea(d)}else ue[0]!="stop"&&ue[0]!="close"||Nr(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Nr(d,7):Pu(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}as(4)}catch{}}var kw=class{constructor(a,c){this.g=a,this.map=c}};function Bf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $f(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wf(a){return a.h?1:a.g?a.g.size:0}function Au(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ru(a,c){a.g?a.g.add(c):a.h=c}function Hf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Bf.prototype.cancel=function(){if(this.i=qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function Aw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function Rw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function Kf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Rw(a),m=Aw(a),P=m.length,b=0;b<P;b++)c.call(void 0,m[b],d&&d[b],a)}var Gf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var b=a[d].substring(0,m);P=a[d].substring(m+1)}else b=a[d];c(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,Ko(this,a.j),this.o=a.o,this.g=a.g,Go(this,a.s),this.l=a.l;var c=a.i,d=new fs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Qf(this,d),this.m=a.m}else a&&(c=String(a).match(Gf))?(this.h=!1,Ko(this,c[1]||"",!0),this.o=hs(c[2]||""),this.g=hs(c[3]||"",!0),Go(this,c[4]),this.l=hs(c[5]||"",!0),Qf(this,c[6]||"",!0),this.m=hs(c[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}xr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ds(c,Xf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ds(c,Xf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ds(d,d.charAt(0)=="/"?Nw:xw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ds(d,bw)),a.join("")};function En(a){return new xr(a)}function Ko(a,c,d){a.j=d?hs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Go(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Qf(a,c,d){c instanceof fs?(a.i=c,Vw(a.i,a.h)):(d||(c=ds(c,Dw)),a.i=new fs(c,a.h))}function we(a,c,d){a.i.set(c,d)}function Qo(a){return we(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function hs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Pw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xf=/[#\/\?@]/g,xw=/[#\?:]/g,Nw=/[#\?]/g,Dw=/[#\?@]/g,bw=/#/g;function fs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&Cw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=fs.prototype,t.add=function(a,c){Hn(this),this.i=null,a=ri(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Yf(a,c){Hn(a),c=ri(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Jf(a,c){return Hn(a),c=ri(a,c),a.g.has(c)}t.forEach=function(a,c){Hn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(c,P,m,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const P=a[m];for(let b=0;b<P.length;b++)d.push(c[m])}return d},t.V=function(a){Hn(this);let c=[];if(typeof a=="string")Jf(this,a)&&(c=c.concat(this.g.get(ri(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Hn(this),this.i=null,a=ri(this,a),Jf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Zf(a,c,d){Yf(a,c),0<d.length&&(a.i=null,a.g.set(ri(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const b=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var P=b;j[m]!==""&&(P+="="+encodeURIComponent(String(j[m]))),a.push(P)}}return this.i=a.join("&")};function ri(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Vw(a,c){c&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Yf(this,m),Zf(this,P,d))},a)),a.j=c}function Ow(a,c){const d=new us;if(l.Image){const m=new Image;m.onload=T(qn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=T(qn,d,"TestLoadImage: error",!1,c,m),m.onabort=T(qn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=T(qn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function Lw(a,c){const d=new us,m=new AbortController,P=setTimeout(()=>{m.abort(),qn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(P),b.ok?qn(d,"TestPingServer: ok",!0,c):qn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),qn(d,"TestPingServer: error",!1,c)})}function qn(a,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function Mw(){this.g=new vw}function Fw(a,c,d){const m=d||"";try{Kf(a,function(P,b){let j=P;h(P)&&(j=yu(P)),c.push(m+b+"="+encodeURIComponent(j))})}catch(P){throw c.push(m+"type="+encodeURIComponent("_badmap")),P}}function Xo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Xo,_u),Xo.prototype.g=function(){return new Yo(this.l,this.j)},Xo.prototype.i=function(a){return function(){return a}}({});function Yo(a,c){tt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Yo,tt),t=Yo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ep(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ep(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ps(this):ms(this),this.readyState==3&&ep(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ps(this))},t.Qa=function(a){this.g&&(this.response=a,ps(this))},t.ga=function(){this.g&&ps(this)};function ps(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ms(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function tp(a){let c="";return U(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Cu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=tp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):we(a,c,d))}function Pe(a){tt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Pe,tt);var Uw=/^https?$/i,jw=["POST","PUT"];t=Pe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Eu.g(),this.v=this.o?xf(this.o):xf(Eu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){np(this,b);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())d.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jw,c,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,j]of d)this.g.setRequestHeader(b,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){np(this,b)}};function np(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,rp(a),Jo(a)}function rp(a){a.A||(a.A=!0,mt(a,"complete"),mt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,mt(this,"complete"),mt(this,"abort"),Jo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jo(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ip(this):this.bb())},t.bb=function(){ip(this)};function ip(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Af(a.Ea,0,a);else if(mt(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=j===0){var P=String(a.D).match(Gf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!Uw.test(P?P.toLowerCase():"")}d=m}if(d)mt(a,"complete"),mt(a,"success");else{a.m=6;try{var b=2<Tn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",rp(a)}}finally{Jo(a)}}}}function Jo(a,c){if(a.g){sp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||mt(a,"ready");try{d.onreadystatechange=m}catch{}}}function sp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),_w(c)}};function op(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zw(a){const c={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=A(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[P]||[];c[P]=b,b.push(d)}v(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function ap(a){this.Aa=0,this.i=[],this.j=new us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gs("baseRetryDelayMs",5e3,a),this.cb=gs("retryDelaySeedMs",1e4,a),this.Wa=gs("forwardChannelMaxRetries",2,a),this.wa=gs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bf(a&&a.concurrentRequestLimit),this.Da=new Mw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ap.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){gt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=gp(this,null,this.W),ea(this)};function Pu(a){if(lp(a),a.G==3){var c=a.U++,d=En(a.I);if(we(d,"SID",a.K),we(d,"RID",c),we(d,"TYPE","terminate"),ys(a,d),c=new Wn(a,a.j,c),c.L=2,c.v=Qo(En(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=yp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),qo(c)}mp(a)}function Zo(a){a.g&&(Nu(a),a.g.cancel(),a.g=null)}function lp(a){Zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ea(a){if(!$f(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ht||ne(),B||(Ht(),B=!0),G.add(c,a),a.B=0}}function Bw(a,c){return Wf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ls(y(a.Ga,a,c),pp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Wn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=g(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(P.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=cp(this,P,c),d=En(this.I),we(d,"RID",a),we(d,"CVER",22),this.D&&we(d,"X-HTTP-Session-Id",this.D),ys(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(tp(b)))+"&"+c:this.m&&Cu(d,this.m,b)),Ru(this.h,P),this.Ua&&we(d,"TYPE","init"),this.P?(we(d,"$req",c),we(d,"SID","null"),P.T=!0,Iu(P,d,null)):Iu(P,d,c),this.G=2}}else this.G==3&&(a?up(this,a):this.i.length==0||$f(this.h)||up(this))};function up(a,c){var d;c?d=c.l:d=a.U++;const m=En(a.I);we(m,"SID",a.K),we(m,"RID",d),we(m,"AID",a.T),ys(a,m),a.m&&a.o&&Cu(m,a.m,a.o),d=new Wn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=cp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ru(a.h,d),Iu(d,m,c)}function ys(a,c){a.H&&U(a.H,function(d,m){we(c,m,d)}),a.l&&Kf({},function(d,m){we(c,m,d)})}function cp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let b=-1;for(;;){const j=["count="+d];b==-1?0<d?(b=P[0].g,j.push("ofs="+b)):b=0:j.push("ofs="+b);let ye=!0;for(let Ke=0;Ke<d;Ke++){let ue=P[Ke].g;const nt=P[Ke].map;if(ue-=b,0>ue)b=Math.max(0,P[Ke].g-100),ye=!1;else try{Fw(nt,j,"req"+ue+"_")}catch{m&&m(nt)}}if(ye){m=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function hp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ht||ne(),B||(Ht(),B=!0),G.add(c,a),a.v=0}}function xu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ls(y(a.Fa,a),pp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,dp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ls(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Zo(this),dp(this))};function Nu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function dp(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=En(a.qa);we(c,"RID","rpc"),we(c,"SID",a.K),we(c,"AID",a.T),we(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&we(c,"TO",a.ja),we(c,"TYPE","xmlhttp"),ys(a,c),a.m&&a.o&&Cu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Qo(En(c)),d.m=null,d.P=!0,Uf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Zo(this),xu(this),gt(19))};function ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function fp(a,c){var d=null;if(a.g==c){ta(a),Nu(a),a.g=null;var m=2}else if(Au(a.h,c))d=c.D,Hf(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;m=$o(),mt(m,new Of(m,d)),ea(a)}else hp(a);else if(P=c.s,P==3||P==0&&0<c.X||!(m==1&&Bw(a,c)||m==2&&xu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function pp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Nr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),m=a.Xa;const P=!m;m=new xr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ko(m,"https"),Qo(m),P?Ow(m.toString(),d):Lw(m.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(c),mp(a),lp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function mp(a){if(a.G=0,a.ka=[],a.l){const c=qf(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function gp(a,c,d){var m=d instanceof xr?En(d):new xr(d);if(m.g!="")c&&(m.g=c+"."+m.g),Go(m,m.s);else{var P=l.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var b=new xr(null);m&&Ko(b,m),c&&(b.g=c),P&&Go(b,P),d&&(b.l=d),m=b}return d=a.D,c=a.ya,d&&c&&we(m,d,c),we(m,"VER",a.la),ys(a,m),m}function yp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Pe(new Xo({eb:d})):new Pe(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _p(){}t=_p.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function na(){}na.prototype.g=function(a,c){return new xt(a,c)};function xt(a,c){tt.call(this),this.g=new ap(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ii(this)}R(xt,tt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Pu(this.g)},xt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=yu(a),a=d);c.i.push(new kw(c.Ya++,a)),c.G==3&&ea(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,Pu(this.g),delete this.g,xt.aa.N.call(this)};function vp(a){vu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(vp,vu);function wp(){wu.call(this),this.status=1}R(wp,wu);function ii(a){this.g=a}R(ii,_p),ii.prototype.ua=function(){mt(this.g,"a")},ii.prototype.ta=function(a){mt(this.g,new vp(a))},ii.prototype.sa=function(a){mt(this.g,new wp)},ii.prototype.ra=function(){mt(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Jv=function(){return new na},Yv=function(){return $o()},Xv=Cr,vh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,$a=Wo,Lf.COMPLETE="complete",Qv=Lf,Nf.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Ns=Nf,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,Gv=Pe}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const ig="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Dd("@firebase/firestore");function As(){return Qr.logLevel}function H(t,...e){if(Qr.logLevel<=se.DEBUG){const n=e.map(Wd);Qr.debug(`Firestore (${ns}): ${t}`,...n)}}function jn(t,...e){if(Qr.logLevel<=se.ERROR){const n=e.map(Wd);Qr.error(`Firestore (${ns}): ${t}`,...n)}}function $i(t,...e){if(Qr.logLevel<=se.WARN){const n=e.map(Wd);Qr.warn(`Firestore (${ns}): ${t}`,...n)}}function Wd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function me(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class eA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tA{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Zv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new at(e)}}class nA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new iA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=oA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Wi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new je(0,0))}static max(){return new ee(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends yo{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const aA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends yo{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return aA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ne.fromString(e))}static fromName(e){return new K(Ne.fromString(e).popFirst(5))}static empty(){return new K(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ne(e.slice()))}}function lA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new wr(i,K.empty(),e)}function uA(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(ee.min(),K.empty(),-1)}static max(){return new wr(ee.max(),K.empty(),-1)}}function cA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==hA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function fA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hd.oe=-1;function tu(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function pA(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ia(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ia(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ia(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ia(this.root,e,this.comparator,!0)}}class Ia{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new og(this.data.getIterator())}getIteratorFrom(e){return new og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Je(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class n0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new n0("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const mA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(me(!!t),typeof t=="string"){let e=0;const n=mA.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Kd(t){const e=t.mapValue.fields.__previous_value__;return qd(e)?Kd(e):e}function _o(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qd(t)?4:_A(t)?9007199254740991:yA(t)?10:11:Z()}function _n(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Xr(i.bytesValue).isEqual(Xr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?Rl(o)===Rl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Wi(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(sg(o)!==sg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return Z()}}function wo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Hi(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ag(t.timestampValue,e.timestampValue);case 4:return ag(_o(t),_o(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Xr(s),u=Xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ce(be(s.latitude),be(o.latitude));return l!==0?l:ce(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},y=o.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=ce(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:lg(T,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Sa.mapValue&&o===Sa.mapValue)return 0;if(s===Sa.mapValue)return 1;if(o===Sa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=ce(u[p],f[p]);if(y!==0)return y;const T=Hi(l[u[p]],h[f[p]]);if(T!==0)return T}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Er(t),r=Er(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function lg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Hi(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function qi(t){return wh(t)}function wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wh(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Eh(t){return!!t&&"integerValue"in t}function Gd(t){return!!t&&"arrayValue"in t}function ug(t){return!!t&&"nullValue"in t}function cg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function yA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _A(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Hs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(Hs(this.value))}}function r0(t){const e=[];return ei(t.fields,(n,r)=>{const i=new Xe([n]);if(Wa(r)){const s=r0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ee.min(),ee.min(),ee.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,ee.min(),ee.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ee.min(),ee.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cl{constructor(e,n){this.position=e,this.inclusive=n}}function hg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Hi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function vA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class i0{}class Fe extends i0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new EA(e,n,r):n==="array-contains"?new SA(e,r):n==="in"?new kA(e,r):n==="not-in"?new AA(e,r):n==="array-contains-any"?new RA(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TA(e,r):new IA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hi(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(Hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends i0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vn(e,n)}matches(e){return s0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function s0(t){return t.op==="and"}function o0(t){return wA(t)&&s0(t)}function wA(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function Th(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+qi(t.value);if(o0(t))return t.filters.map(e=>Th(e)).join(",");{const e=t.filters.map(n=>Th(n)).join(",");return`${t.op}(${e})`}}function a0(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof vn?function(r,i){return i instanceof vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&a0(o,i.filters[l]),!0):!1}(t,e):void Z()}function l0(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${qi(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(l0).join(" ,")+"}"}(t):"Filter"}class EA extends Fe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class TA extends Fe{constructor(e,n){super(e,"in",n),this.keys=u0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IA extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=u0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function u0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class SA extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gd(n)&&wo(n.arrayValue,this.value)}}class kA extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class AA extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wo(this.value.arrayValue,n)}}class RA extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wo(this.value.arrayValue,r))}}/**
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
 */class CA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function fg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new CA(t,e,n,r,i,s,o)}function Qd(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Th(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qi(r)).join(",")),e.ue=n}return e.ue}function Xd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dg(t.startAt,e.startAt)&&dg(t.endAt,e.endAt)}function Ih(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PA(t,e,n,r,i,s,o,l){return new nu(t,e,n,r,i,s,o,l)}function ru(t){return new nu(t)}function pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xA(t){return t.collectionGroup!==null}function qs(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pl(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new Pl(Xe.keyField(),r))}return e.ce}function pn(t){const e=te(t);return e.le||(e.le=NA(e,qs(t))),e.le}function NA(t,e){if(t.limitType==="F")return fg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pl(i.field,s)});const n=t.endAt?new Cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cl(t.startAt.position,t.startAt.inclusive):null;return fg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sh(t,e,n){return new nu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function iu(t,e){return Xd(pn(t),pn(e))&&t.limitType===e.limitType}function c0(t){return`${Qd(pn(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>l0(i)).join(", ")}]`),tu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qi(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function su(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of qs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=hg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,qs(r),i)||r.endAt&&!function(o,l,u){const h=hg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,qs(r),i))}(t,e)}function DA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function h0(t){return(e,n)=>{let r=!1;for(const i of qs(t)){const s=bA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bA(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Hi(u,h):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return t0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new Ce(K.comparator);function zn(){return VA}const d0=new Ce(K.comparator);function Ds(...t){let e=d0;for(const n of t)e=e.insert(n.key,n);return e}function f0(t){let e=d0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return Ks()}function p0(){return Ks()}function Ks(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const OA=new Ce(K.comparator),LA=new Je(K.comparator);function ie(...t){let e=LA;for(const n of t)e=e.add(n);return e}const MA=new Je(ce);function FA(){return MA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function m0(t){return{integerValue:""+t}}function UA(t,e){return pA(e)?m0(e):Yd(t,e)}/**
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
 */class ou{constructor(){this._=void 0}}function jA(t,e,n){return t instanceof xl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qd(s)&&(s=Kd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Eo?y0(t,e):t instanceof To?_0(t,e):function(i,s){const o=g0(i,s),l=mg(o)+mg(i.Pe);return Eh(o)&&Eh(i.Pe)?m0(l):Yd(i.serializer,l)}(t,e)}function zA(t,e,n){return t instanceof Eo?y0(t,e):t instanceof To?_0(t,e):n}function g0(t,e){return t instanceof Nl?function(r){return Eh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xl extends ou{}class Eo extends ou{constructor(e){super(),this.elements=e}}function y0(t,e){const n=v0(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class To extends ou{constructor(e){super(),this.elements=e}}function _0(t,e){let n=v0(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class Nl extends ou{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function mg(t){return be(t.integerValue||t.doubleValue)}function v0(t){return Gd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Eo&&i instanceof Eo||r instanceof To&&i instanceof To?Wi(r.elements,i.elements,_n):r instanceof Nl&&i instanceof Nl?_n(r.Pe,i.Pe):r instanceof xl&&i instanceof xl}(t.transform,e.transform)}class $A{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class au{}function w0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new T0(t.key,mn.none()):new Fo(t.key,t.data,mn.none());{const n=t.data,r=St.empty();let i=new Je(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new bt(i.toArray()),mn.none())}}function WA(t,e,n){t instanceof Fo?function(i,s,o){const l=i.value.clone(),u=yg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(i,s,o){if(!Ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=yg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(E0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Gs(t,e,n,r){return t instanceof Fo?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=s.value.clone(),f=_g(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=_g(s.fieldTransforms,u,o),f=o.data;return f.setAll(E0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function HA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=g0(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function gg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wi(r,i,(s,o)=>BA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends au{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends au{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yg(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,zA(o,l,n[i]))}return r}function _g(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jA(s,o,e))}return r}class T0 extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qA extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Gs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=p0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=w0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(n,r)=>gg(n,r))&&Wi(this.baseMutations,e.baseMutations,(n,r)=>gg(n,r))}}class Jd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return OA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jd(e,n,r,i)}}/**
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
 */class GA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,oe;function XA(t){switch(t){default:return Z();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function I0(t){if(t===void 0)return jn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Oe.OK:return L.OK;case Oe.CANCELLED:return L.CANCELLED;case Oe.UNKNOWN:return L.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return L.INTERNAL;case Oe.UNAVAILABLE:return L.UNAVAILABLE;case Oe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Oe.NOT_FOUND:return L.NOT_FOUND;case Oe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Oe.ABORTED:return L.ABORTED;case Oe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Oe.DATA_LOSS:return L.DATA_LOSS;default:return Z()}}(oe=Oe||(Oe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YA(){return new TextEncoder}/**
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
 */const JA=new zr([4294967295,4294967295],0);function vg(t){const e=YA().encode(t),n=new Kv;return n.update(e),new Uint8Array(n.digest())}function wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zr([n,r],0),new zr([i,s],0)]}class Zd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new bs(`Invalid padding: ${n}`);if(r<0)throw new bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=zr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(zr.fromNumber(r)));return i.compare(JA)===1&&(i=new zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=vg(e),[r,i]=wg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=vg(e),[r,i]=wg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lu(ee.min(),i,new Ce(ce),zn(),ie())}}class Uo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class S0{constructor(e,n){this.targetId=e,this.me=n}}class k0{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Eg{constructor(){this.fe=0,this.ge=Ig(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ig()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ZA{constructor(e){this.Le=e,this.Be=new Map,this.ke=zn(),this.qe=Tg(),this.Qe=new Ce(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ih(s))if(r===0){const o=new K(s.path);this.Ue(n,o,ut.newNoDocument(o,ee.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Xr(r).toUint8Array()}catch(u){if(u instanceof n0)return $i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Zd(o,i,s)}catch(u){return $i(u instanceof bs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Ih(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new lu(e,n,this.Qe,this.ke,r);return this.ke=zn(),this.qe=Tg(),this.Qe=new Ce(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Eg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Eg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Tg(){return new Ce(K.comparator)}function Ig(){return new Ce(K.comparator)}const eR={asc:"ASCENDING",desc:"DESCENDING"},tR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nR={and:"AND",or:"OR"};class rR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kh(t,e){return t.useProto3Json||tu(e)?e:{value:e}}function Dl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iR(t,e){return Dl(t,e.toTimestamp())}function gn(t){return me(!!t),ee.fromTimestamp(function(n){const r=Er(n);return new je(r.seconds,r.nanos)}(t))}function ef(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function R0(t){const e=Ne.fromString(t);return me(D0(e)),e}function Rh(t,e){return ef(t.databaseId,e.path)}function dc(t,e){const n=R0(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(P0(n))}function C0(t,e){return ef(t.databaseId,e)}function sR(t){const e=R0(t);return e.length===4?Ne.emptyPath():P0(e)}function Ch(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P0(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sg(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function oR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(me(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:I0(h.code);return new q(f,h.message||"")}(o);n=new k0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dc(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ee.min(),l=new St({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new qa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dc(t,r.document),s=r.readTime?gn(r.readTime):ee.min(),o=ut.newNoDocument(i,s),l=r.removedTargetIds||[];n=new qa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dc(t,r.document),s=r.removedTargetIds||[];n=new qa([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QA(i,s),l=r.targetId;n=new S0(l,o)}}return n}function aR(t,e){let n;if(e instanceof Fo)n={update:Sg(t,e.key,e.value)};else if(e instanceof T0)n={delete:Rh(t,e.key)};else if(e instanceof Ar)n={update:Sg(t,e.key,e.data),updateMask:gR(e.fieldMask)};else{if(!(e instanceof qA))return Z();n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function lR(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(ee.min())&&(o=gn(s)),new $A(o,i.transformResults||[])}(n,e))):[]}function uR(t,e){return{documents:[C0(t,e.path)]}}function cR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=C0(t,i);const s=function(h){if(h.length!==0)return N0(vn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:ui(y.field),direction:fR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function hR(t){let e=sR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const y=x0(p);return y instanceof vn&&o0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(R){return new Pl(ci(R.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,tu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,T=p.values||[];return new Cl(T,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,T=p.values||[];return new Cl(T,y)}(n.endAt)),PA(e,i,o,s,l,"F",u,h)}function dR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>x0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function fR(t){return eR[t]}function pR(t){return tR[t]}function mR(t){return nR[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return Xe.fromServerFormat(t.fieldPath)}function N0(t){return t instanceof Fe?function(n){if(n.op==="=="){if(cg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(ug(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(ug(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:pR(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(i=>N0(i));return r.length===1?r[0]:{compositeFilter:{op:mR(n.op),filters:r}}}(t):Z()}function gR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.ct=e}}function _R(t){const e=hR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sh(e,e.limit,"L"):e}/**
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
 */class vR{constructor(){this.un=new wR}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(wr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class wR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ki(0)}static kn(){return new Ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Gs(r.mutation,i,bt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ds();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=zn();const o=Ks(),l=function(){return Ks()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ar)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Gs(f.mutation,h,f.mutation.getFieldMask(),je.now())):o.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new TR(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ks();let i=new Ce((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=p0();f.forEach(y=>{if(!s.has(y)){const T=w0(n.get(y),r.get(y));T!==null&&p.set(y,T),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Fr());let l=-1,u=s;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:f0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(p,y){return new nu(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=Ds();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Gs(f.mutation,h,bt.empty(),je.now()),su(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:_R(i.bundledQuery),readTime:gn(i.readTime)}}(n)),O.resolve()}}/**
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
 */class kR{constructor(){this.overlays=new Ce(K.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Fr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Fr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GA(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.Tr=new Je(Be.Er),this.dr=new Je(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Be(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ne([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ne([])),r=new Be(n,e),i=new Be(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(Be.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ce);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Be(new K(s),0);let l=new Je(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),O.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Be(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.Mr=e,this.docs=function(){return new Ce(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||cA(uA(f),r)<=0||(i.has(f.key)||su(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PR(this)}getSize(e){return O.resolve(this.size)}}class PR extends ER{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.persistence=e,this.Nr=new rs(n=>Qd(n),Xd),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new tf,this.targetCount=0,this.kr=Ki.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Hd(0),this.Kr=!1,this.Kr=!0,this.$r=new AR,this.referenceDelegate=e(this),this.Ur=new xR(this),this.indexManager=new vR,this.remoteDocumentCache=function(i){return new CR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new yR(n),this.Gr=new SR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new RR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new DR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class DR extends dA{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Jr=new tf,this.Yr=null}static Zr(e){return new nf(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rf(e,n.fromCache,r,i)}}/**
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
 */class bR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bI()?8:fA(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new bR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(As()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(As()<=se.DEBUG&&H("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(As()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):O.resolve())}Yi(e,n){if(pg(n))return O.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sh(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Sh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return pg(n)||i.isEqual(ee.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?O.resolve(null):(As()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(n)),this.rs(e,o,n,lA(i,-1)).next(l=>l))})}ts(e,n){let r=new Je(h0(e));return n.forEach((i,s)=>{su(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return As()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",li(n)),this.Ji.getDocumentsMatchingQuery(e,n,wr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ce(ce),this._s=new rs(s=>Qd(s),Xd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function LR(t,e,n,r){return new OR(t,e,n,r)}async function b0(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function MR(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,y=p.keys();let T=O.resolve();return y.forEach(R=>{T=T.next(()=>f.getEntry(u,R)).next(N=>{const V=h.docVersions.get(R);me(V!==null),N.version.compareTo(V)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function V0(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function FR(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const y=i.get(p);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let T=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(et.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(p,T),function(N,V,S){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,T,f)&&l.push(n.Ur.updateTargetData(s,T))});let u=zn(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(UR(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function UR(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function jR(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zR(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Ph(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function kg(t,e,n){const r=te(t);let i=ee.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=te(u),y=p._s.get(f);return y!==void 0?O.resolve(p.os.get(y)):p.Ur.getTargetData(h,f)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ie())).next(l=>(BR(r,DA(e),l),{documents:l,Ts:s})))}function BR(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Ag{constructor(){this.activeTargetIds=FA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $R{constructor(){this.so=new Ag,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WR{_o(e){}shutdown(){}}/**
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
 */class Rg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ka=null;function fc(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class KR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=fc(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw $i("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=HR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=fc();return new Promise((o,l)=>{const u=new Gv;u.setWithCredentials(!0),u.listenOnce(Qv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $a.NO_ERROR:const f=u.getResponseJson();H(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case $a.TIMEOUT:H(ot,`RPC '${e}' ${s} timed out`),l(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const p=u.getStatus();if(H(ot,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const R=function(V){const S=V.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(S)>=0?S:L.UNKNOWN}(T.status);l(new q(R,T.message))}else l(new q(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(L.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(ot,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=fc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Jv(),l=Yv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(ot,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let y=!1,T=!1;const R=new qR({Io:V=>{T?H(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(y||(H(ot,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),H(ot,`RPC '${e}' stream ${i} sending:`,V),p.send(V))},To:()=>p.close()}),N=(V,S,_)=>{V.listen(S,k=>{try{_(k)}catch(x){setTimeout(()=>{throw x},0)}})};return N(p,Ns.EventType.OPEN,()=>{T||(H(ot,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),N(p,Ns.EventType.CLOSE,()=>{T||(T=!0,H(ot,`RPC '${e}' stream ${i} transport closed`),R.So())}),N(p,Ns.EventType.ERROR,V=>{T||(T=!0,$i(ot,`RPC '${e}' stream ${i} transport errored:`,V),R.So(new q(L.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ns.EventType.MESSAGE,V=>{var S;if(!T){const _=V.data[0];me(!!_);const k=_,x=k.error||((S=k[0])===null||S===void 0?void 0:S.error);if(x){H(ot,`RPC '${e}' stream ${i} received error:`,x);const F=x.status;let U=function(w){const E=Oe[w];if(E!==void 0)return I0(E)}(F),v=x.message;U===void 0&&(U=L.INTERNAL,v="Unknown error status: "+F+" with message "+x.message),T=!0,R.So(new q(U,v)),p.close()}else H(ot,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),N(l,Xv.STAT_EVENT,V=>{V.stat===vh.PROXY?H(ot,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===vh.NOPROXY&&H(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){return new rR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new O0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GR extends L0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=oR(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?gn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ch(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ih(u)?{documents:uR(s,u)}:{query:cR(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=A0(s,o.resumeToken);const h=kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=Dl(s,o.snapshotVersion.toTimestamp());const h=kh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=dR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ch(this.serializer),n.removeTarget=e,this.a_(n)}}class QR extends L0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=lR(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ch(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ah(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ah(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class YR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ti(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=te(u);h.L_.add(4),await jo(h),h.q_.set("Unknown"),h.L_.delete(4),await cu(h)}(this))})}),this.q_=new YR(r,i)}}async function cu(t){if(ti(t))for(const e of t.B_)await e(!0)}async function jo(t){for(const e of t.B_)await e(!1)}function M0(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),lf(n)?af(n):is(n).r_()&&of(n,e))}function sf(t,e){const n=te(t),r=is(n);n.N_.delete(e),r.r_()&&F0(n,e),n.N_.size===0&&(r.r_()?r.o_():ti(n)&&n.q_.set("Unknown"))}function of(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).A_(e)}function F0(t,e){t.Q_.xe(e),is(t).R_(e)}function af(t){t.Q_=new ZA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),is(t).start(),t.q_.v_()}function lf(t){return ti(t)&&!is(t).n_()&&t.N_.size>0}function ti(t){return te(t).L_.size===0}function U0(t){t.Q_=void 0}async function ZR(t){t.q_.set("Online")}async function eC(t){t.N_.forEach((e,n)=>{of(t,e)})}async function tC(t,e){U0(t),lf(t)?(t.q_.M_(e),af(t)):t.q_.set("Unknown")}async function nC(t,e,n){if(t.q_.set("Online"),e instanceof k0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof qa?t.Q_.Ke(e):e instanceof S0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await V0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),F0(s,u);const p=new sr(f.target,u,h,f.sequenceNumber);of(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!Mo(e))throw e;t.L_.add(1),await jo(t),t.q_.set("Offline"),n||(n=()=>V0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await cu(t)})}function j0(t,e){return e().catch(n=>bl(t,n,e))}async function hu(t){const e=te(t),n=Tr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rC(e);)try{const i=await jR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,iC(e,i)}catch(i){await bl(e,i)}z0(e)&&B0(e)}function rC(t){return ti(t)&&t.O_.length<10}function iC(t,e){t.O_.push(e);const n=Tr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function z0(t){return ti(t)&&!Tr(t).n_()&&t.O_.length>0}function B0(t){Tr(t).start()}async function sC(t){Tr(t).p_()}async function oC(t){const e=Tr(t);for(const n of t.O_)e.m_(n.mutations)}async function aC(t,e,n){const r=t.O_.shift(),i=Jd.from(r,e,n);await j0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hu(t)}async function lC(t,e){e&&Tr(t).V_&&await async function(r,i){if(function(o){return XA(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Tr(r).s_(),await j0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await hu(r)}}(t,e),z0(t)&&B0(t)}async function Cg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.L_.add(3),await jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await cu(n)}async function uC(t,e){const n=te(t);e?(n.L_.delete(2),await cu(n)):e||(n.L_.add(2),await jo(n),n.q_.set("Unknown"))}function is(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new GR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ZR.bind(null,t),Ro:eC.bind(null,t),mo:tC.bind(null,t),d_:nC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),lf(t)?af(t):t.q_.set("Unknown")):(await t.K_.stop(),U0(t))})),t.K_}function Tr(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new QR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:sC.bind(null,t),mo:lC.bind(null,t),f_:oC.bind(null,t),g_:aC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await hu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new uf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Mo(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.W_=new Ce(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gi(e,n,bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class hC{constructor(){this.queries=xg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=xg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function xg(){return new rs(t=>c0(t),iu)}async function $0(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new cC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=cf(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hf(n)}async function W0(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dC(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&hf(n)}function fC(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hf(t){t.Y_.forEach(e=>{e.next()})}var xh,Ng;(Ng=xh||(xh={})).ea="default",Ng.Cache="cache";class H0{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.key=e}}class K0{constructor(e){this.key=e}}class pC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=h0(e),this.Ra=new bi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Pg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const y=i.get(f),T=su(this.query,p)?p:null,R=!!y&&this.mutatedKeys.has(y.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let V=!1;y&&T?y.data.isEqual(T.data)?R!==N&&(r.track({type:3,doc:T}),V=!0):this.ga(y,T)||(r.track({type:2,doc:T}),V=!0,(u&&this.Aa(T,u)>0||h&&this.Aa(T,h)<0)&&(l=!0)):!y&&T?(r.track({type:0,doc:T}),V=!0):y&&!T&&(r.track({type:1,doc:y}),V=!0,(u||h)&&(l=!0)),V&&(T?(o=o.add(T),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(T,R){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return N(T)-N(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Gi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Pg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new K0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new q0(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Gi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gC{constructor(e){this.key=e,this.va=!1}}class yC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new rs(l=>c0(l),iu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(K.comparator),this.Na=new Map,this.La=new tf,this.Ba={},this.ka=new Map,this.qa=Ki.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function _C(t,e,n=!0){const r=Z0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await G0(r,e,n,!0),i}async function vC(t,e){const n=Z0(t);await G0(n,e,!0,!1)}async function G0(t,e,n,r){const i=await zR(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await wC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&M0(t.remoteStore,i),l}async function wC(t,e,n,r,i){t.Ka=(p,y,T)=>async function(N,V,S,_){let k=V.view.ma(S);k.ns&&(k=await kg(N.localStore,V.query,!1).then(({documents:v})=>V.view.ma(v,k)));const x=_&&_.targetChanges.get(V.targetId),F=_&&_.targetMismatches.get(V.targetId)!=null,U=V.view.applyChanges(k,N.isPrimaryClient,x,F);return bg(N,V.targetId,U.wa),U.snapshot}(t,p,y,T);const s=await kg(t.localStore,e,!0),o=new pC(e,s.Ts),l=o.ma(s.documents),u=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);bg(t,n,h.wa);const f=new mC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function EC(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!iu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ph(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&sf(r.remoteStore,i.targetId),Nh(r,i.targetId)}).catch(Lo)):(Nh(r,i.targetId),await Ph(r.localStore,i.targetId,!0))}async function TC(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sf(n.remoteStore,r.targetId))}async function IC(t,e,n){const r=xC(t);try{const i=await function(o,l){const u=te(o),h=je.now(),f=l.reduce((T,R)=>T.add(R.key),ie());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=zn(),N=ie();return u.cs.getEntries(T,f).next(V=>{R=V,R.forEach((S,_)=>{_.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(V=>{p=V;const S=[];for(const _ of l){const k=HA(_,p.get(_.key).overlayedDocument);k!=null&&S.push(new Ar(_.key,k,r0(k.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(T,h,S,l)}).next(V=>{y=V;const S=V.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(T,V.batchId,S)})}).then(()=>({batchId:y.batchId,changes:f0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ce(ce)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await zo(r,i.changes),await hu(r.remoteStore)}catch(i){const s=cf(i,"Failed to persist write");n.reject(s)}}async function Q0(t,e){const n=te(t);try{const r=await FR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await zo(n,r,e)}catch(r){await Lo(r)}}function Dg(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const y of p.j_)y.Z_(l)&&(h=!0)}),h&&hf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SC(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(K.comparator);o=o.insert(s,ut.newNoDocument(s,ee.min()));const l=ie().add(s),u=new lu(ee.min(),new Map,new Ce(ce),o,l);await Q0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),df(r)}else await Ph(r.localStore,e,!1).then(()=>Nh(r,e,n)).catch(Lo)}async function kC(t,e){const n=te(t),r=e.batch.batchId;try{const i=await MR(n.localStore,e);Y0(n,r,null),X0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await Lo(i)}}async function AC(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(me(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Y0(r,e,n),X0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await Lo(i)}}function X0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Y0(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Nh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||J0(t,r)})}function J0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),df(t))}function bg(t,e,n){for(const r of n)r instanceof q0?(t.La.addReference(r.key,e),RC(t,r)):r instanceof K0?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||J0(t,r.key)):Z()}function RC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),df(t))}function df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new gC(n)),t.Oa=t.Oa.insert(n,r),M0(t.remoteStore,new sr(pn(ru(n.path)),r,"TargetPurposeLimboResolution",Hd.oe))}}async function zo(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=rf.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,y=>O.forEach(y.$i,T=>f.persistence.referenceDelegate.addReference(p,y.targetId,T)).next(()=>O.forEach(y.Ui,T=>f.persistence.referenceDelegate.removeReference(p,y.targetId,T)))))}catch(p){if(!Mo(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const T=f.os.get(y),R=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(y,N)}}}(r.localStore,s))}async function CC(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await b0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.hs)}}function PC(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Z0(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Q0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SC.bind(null,e),e.Ca.d_=dC.bind(null,e.eventManager),e.Ca.$a=fC.bind(null,e.eventManager),e}function xC(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AC.bind(null,e),e}class Vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return LR(this.persistence,new VR,e.initialUser,this.serializer)}Ga(e){return new NR(nf.Zr,this.serializer)}Wa(e){return new $R}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vl.provider={build:()=>new Vl};class Dh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CC.bind(null,this.syncEngine),await uC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hC}()}createDatastore(e){const n=uu(e.databaseInfo.databaseId),r=function(s){return new KR(s)}(e.databaseInfo);return function(s,o,l,u){return new XR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new JR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Dg(this.syncEngine,n,0),function(){return Rg.D()?new Rg:new WR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new yC(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await jo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dh.provider={build:()=>new Dh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ew{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=e0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await b0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DC(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Cg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Cg(e.remoteStore,i)),t._onlineComponents=e}async function DC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await mc(t,new Vl)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await mc(t,new Vl);return t._offlineComponents}async function tw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Vg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Vg(t,new Dh))),t._onlineComponents}function bC(t){return tw(t).then(e=>e.syncEngine)}async function bh(t){const e=await tw(t),n=e.eventManager;return n.onListen=_C.bind(null,e.syncEngine),n.onUnlisten=EC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TC.bind(null,e.syncEngine),n}function VC(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new ew({next:y=>{f.Za(),o.enqueueAndForget(()=>W0(s,p));const T=y.docs.has(l);!T&&y.fromCache?h.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&y.fromCache&&u&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new H0(ru(l.path),f,{includeMetadataChanges:!0,_a:!0});return $0(s,p)}(await bh(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function nw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LC(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lg(t){if(!K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ff(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ff(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zk;switch(r.type){case"firstParty":return new rA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Og.get(n);r&&(H("ComponentProvider","Removing Datastore"),Og.delete(n),r.terminate())}(this),Promise.resolve()}}function MC(t,e,n,r={}){var i;const s=(t=yn(t,pf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&$i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=at.MOCK_USER;else{l=AI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(h)}t._authCredentials=new eA(new Zv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new du(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Io(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Io extends du{constructor(e,n,r){super(e,n,ru(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new K(e))}withConverter(e){return new Io(this.firestore,e,this._path)}}function Qs(t,e,...n){if(t=vt(t),arguments.length===1&&(e=e0.newId()),OC("doc","path",e),t instanceof pf){const r=Ne.fromString(e,...n);return Lg(r),new Pt(t,null,new K(r))}{if(!(t instanceof Pt||t instanceof Io))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Lg(r),new Pt(t.firestore,t instanceof Io?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new O0(this,"async_queue_retry"),this.Vu=()=>{const r=pc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new yr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Mo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=uf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ug(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Qi extends pf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Fg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fg(e),this._firestoreClient=void 0,await e}}}function FC(t,e){const n=typeof t=="object"?t:dv(),r=typeof t=="string"?t:"(default)",i=Vd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=SI("firestore");s&&MC(i,...s)}return i}function mf(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||UC(t),t._firestoreClient}function UC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new gA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,nw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new NC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xi(et.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xi(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=/^__.*__$/;class zC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}class rw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class vf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ol(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iw(this.Cu)&&jC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class BC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uu(e)}Qu(e,n,r,i=!1){return new vf({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sw(t){const e=t._freezeSettings(),n=uu(t._databaseId);return new BC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $C(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);wf("Data must be an object, but it was:",o,r);const l=ow(r,o);let u,h;if(s.merge)u=new bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const y=Vh(e,p,n);if(!o.contains(y))throw new q(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);lw(f,y)||f.push(y)}u=new bt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new zC(new St(l),u,h)}class pu extends gf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pu}}function WC(t,e,n,r){const i=t.Qu(1,e,n);wf("Data must be an object, but it was:",i,r);const s=[],o=St.empty();ei(r,(u,h)=>{const f=Ef(e,u,n);h=vt(h);const p=i.Nu(f);if(h instanceof pu)s.push(f);else{const y=mu(h,p);y!=null&&(s.push(f),o.set(f,y))}});const l=new bt(s);return new rw(o,l,i.fieldTransforms)}function HC(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Vh(e,r,n)],u=[i];if(s.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Vh(e,s[y])),u.push(s[y+1]);const h=[],f=St.empty();for(let y=l.length-1;y>=0;--y)if(!lw(h,l[y])){const T=l[y];let R=u[y];R=vt(R);const N=o.Nu(T);if(R instanceof pu)h.push(T);else{const V=mu(R,N);V!=null&&(h.push(T),f.set(T,V))}}const p=new bt(h);return new rw(f,p,o.fieldTransforms)}function mu(t,e){if(aw(t=vt(t)))return wf("Unsupported field value:",e,t),ow(t,e);if(t instanceof gf)return function(r,i){if(!iw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=mu(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:Dl(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dl(i.serializer,s)}}if(r instanceof yf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xi)return{bytesValue:A0(i.serializer,r._byteString)};if(r instanceof Pt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ef(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _f)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Yd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ff(r)}`)}(t,e)}function ow(t,e){const n={};return t0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,i)=>{const s=mu(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof yf||t instanceof Xi||t instanceof Pt||t instanceof gf||t instanceof _f)}function wf(t,e,n){if(!aw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ff(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Vh(t,e,n){if((e=vt(e))instanceof fu)return e._internalPath;if(typeof e=="string")return Ef(t,e);throw Ol("Field path arguments must be of type string or ",t,!1,void 0,n)}const qC=new RegExp("[~\\*/\\[\\]]");function Ef(t,e,n){if(e.search(qC)>=0)throw Ol(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fu(...e.split("."))._internalPath}catch{throw Ol(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ol(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function lw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KC extends uw{data(){return super.data()}}function cw(t,e){return typeof e=="string"?Ef(t,e):e instanceof fu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QC{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ei(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new _f(s)}convertGeoPoint(e){return new yf(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=Er(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);me(D0(r));const i=new vo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||jn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hw extends uw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ka extends hw{data(e={}){return super.data(e)}}class YC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ka(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ka(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Vs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:JC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function JC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){t=yn(t,Pt);const e=yn(t.firestore,Qi);return VC(mf(e),t._key).then(n=>pw(e,t,n))}class dw extends QC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function eP(t,e,n){t=yn(t,Pt);const r=yn(t.firestore,Qi),i=XC(t.converter,e);return fw(r,[$C(sw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function Oh(t,e,n,...r){t=yn(t,Pt);const i=yn(t.firestore,Qi),s=sw(i);let o;return o=typeof(e=vt(e))=="string"||e instanceof fu?HC(s,"updateDoc",t._key,e,n,r):WC(s,"updateDoc",t._key,e),fw(i,[o.toMutation(t._key,mn.exists(!0))])}function tP(t,...e){var n,r,i;t=vt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ug(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ug(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof Pt)h=yn(t.firestore,Qi),f=ru(t._key.path),u={next:p=>{e[o]&&e[o](pw(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=yn(t,du);h=yn(p.firestore,Qi),f=p._query;const y=new dw(h);u={next:T=>{e[o]&&e[o](new YC(h,y,p,T))},error:e[o+1],complete:e[o+2]},GC(t._query)}return function(y,T,R,N){const V=new ew(N),S=new H0(T,V,R);return y.asyncQueue.enqueueAndForget(async()=>$0(await bh(y),S)),()=>{V.Za(),y.asyncQueue.enqueueAndForget(async()=>W0(await bh(y),S))}}(mf(h),f,l,u)}function fw(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>IC(await bC(r),i,s)),s.promise}(mf(t),e)}function pw(t,e,n){const r=n.docs.get(e._key),i=new dw(t);return new hw(t,i,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ns=i})(es),Bi(new Kr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Qi(new tA(r.getProvider("auth-internal")),new sA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),gr(ig,"4.7.3",e),gr(ig,"4.7.3","esm2017")})();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Wt=(t,e)=>{const n=ge.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>ge.createElement("svg",{ref:f,...nP,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${rP(t)}`,l].join(" "),...h},[...e.map(([p,y])=>ge.createElement(p,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=Wt("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=Wt("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=Wt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=Wt("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=Wt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=Wt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=Wt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=Wt("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Wt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=Wt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=Wt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=Wt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xs=typeof __app_id<"u"?__app_id:"spanish-scrabble-app",hP=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"mock-key",projectId:"mock-project"};let gc,Ga,Vi;try{gc=hv(hP),Ga=Yk(gc),Vi=FC(gc)}catch(t){console.error("Error al inicializar Firebase",t)}const dP=[["T","_","_","d","_","_","_","T","_","_","_","d","_","_","T"],["_","D","_","_","_","t","_","_","_","t","_","_","_","D","_"],["_","_","D","_","_","_","d","_","d","_","_","_","D","_","_"],["d","_","_","D","_","_","_","d","_","_","_","D","_","_","d"],["_","_","_","_","D","_","_","_","_","_","D","_","_","_","_"],["_","t","_","_","_","t","_","_","_","t","_","_","_","t","_"],["_","_","d","_","_","_","d","_","d","_","_","_","d","_","_"],["T","_","_","d","_","_","_","*","_","_","_","d","_","_","T"],["_","_","d","_","_","_","d","_","d","_","_","_","d","_","_"],["_","t","_","_","_","t","_","_","_","t","_","_","_","t","_"],["_","_","_","_","D","_","_","_","_","_","D","_","_","_","_"],["d","_","_","D","_","_","_","d","_","_","_","D","_","_","d"],["_","_","D","_","_","_","d","_","d","_","_","_","D","_","_"],["_","D","_","_","_","t","_","_","_","t","_","_","_","D","_"],["T","_","_","d","_","_","_","T","_","_","_","d","_","_","T"]],Aa={A:1,Á:1,B:3,C:3,D:2,E:1,É:1,F:4,G:2,H:4,I:1,Í:1,J:8,L:1,M:3,N:1,Ñ:8,O:1,Ó:1,P:3,Q:5,R:1,S:1,T:1,U:1,Ú:1,V:4,X:8,Z:10},Bg="AAAAAAAAAAAABBBCCCCHDDDDDEEEEEEEEEEEEFGGHHIIIIIIJLLLLMMNNNNNNOOOOOOOOOPPQRRRRRSSSSSSTTTTUUUUUVXZZ".split(""),fP=t=>({A:"Á",Á:"A",E:"É",É:"E",I:"Í",Í:"I",O:"Ó",Ó:"O",U:"Ú",Ú:"U",N:"Ñ",Ñ:"N"})[t]||t,Lh=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");let ai=null,yc=!1;const Mh=async()=>{if(ai)return ai;if(yc)return null;yc=!0;try{const t="https://raw.githubusercontent.com/kamilmielnik/scrabble-dictionaries/master/spanish/file-2017.txt",e="https://raw.githubusercontent.com/kamilmielnik/scrabble-dictionaries/master/spanish/fise-2.txt";let n=await fetch(t);if(n.ok||(n=await fetch(e)),n.ok){const i=(await n.text()).split(/\r?\n/).map(s=>s.trim().toLowerCase()).filter(Boolean);ai=new Set(i)}else console.warn("Failed to fetch dictionary online. Initializing fallback rules."),ai=new Set}catch(t){console.error("Error downloading Spanish dictionary:",t),ai=new Set}finally{yc=!1}return ai},$g=async t=>{var e,n;try{const r=`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=${encodeURIComponent(t)}`,i=await fetch(r);if(!i.ok)throw new Error("translate failed");const s=await i.json(),o=(n=(e=s==null?void 0:s[0])==null?void 0:e[0])==null?void 0:n[0];return o&&typeof o=="string"&&o.trim()?o.trim():"(sin traducción)"}catch(r){return console.error("Translation error:",r),"(traducción no disponible)"}},pP=(t,e,n)=>{if(!e||e.length===0)return{ok:!1,message:"Coloca al menos una ficha."};const r=e.map(h=>({r:Math.floor(h.index/15),c:h.index%15,index:h.index})),i=r.map(h=>h.r),s=r.map(h=>h.c),o=i.every(h=>h===i[0]),l=s.every(h=>h===s[0]);if(!o&&!l)return{ok:!1,message:"Todas las fichas deben estar en la misma fila o columna."};if(o){const h=[...r].sort((f,p)=>f.c-p.c);for(let f=1;f<h.length;f++)if(h[f].c!==h[f-1].c+1){for(let p=h[f-1].c+1;p<h[f].c;p++)if(t[h[0].r*15+p]===null)return{ok:!1,message:"Las fichas deben formar una línea continua (sin huecos)."}}}else{const h=[...r].sort((f,p)=>f.r-p.r);for(let f=1;f<h.length;f++)if(h[f].r!==h[f-1].r+1){for(let p=h[f-1].r+1;p<h[f].r;p++)if(t[p*15+h[0].c]===null)return{ok:!1,message:"Las fichas deben formar una línea continua (sin huecos)."}}}const u=112;if(n){if(!r.some(f=>f.index===u))return{ok:!1,message:"La primera palabra debe cubrir la estrella del centro."};if(e.length<2)return{ok:!1,message:"La primera palabra debe tener al menos 2 letras."}}else if(!r.some(f=>[[f.r-1,f.c],[f.r+1,f.c],[f.r,f.c-1],[f.r,f.c+1]].some(([y,T])=>y<0||y>=15||T<0||T>=15?!1:t[y*15+T]!==null&&!e.some(N=>N.index===y*15+T))))return{ok:!1,message:"La palabra debe conectar con las fichas ya colocadas en el tablero."};return{ok:!0}},mw=(t,e)=>{if(!e||e.length===0)return[];const n=(h,f)=>h<0||h>=15||f<0||f>=15?null:t[h*15+f],r=new Set,i=e.map(h=>Math.floor(h.index/15)),s=e.map(h=>h.index%15),o=i.every(h=>h===i[0]),l=s.every(h=>h===s[0]),u=(h,f,p,y)=>{let T=h,R=f;for(;n(T-p,R-y)!==null;)T-=p,R-=y;let N="";for(;n(T,R)!==null;)N+=n(T,R).letter,T+=p,R+=y;return N};if(o){const h=u(i[0],s[0],0,1);h.length>1&&r.add(h)}if(l){const h=u(i[0],s[0],1,0);h.length>1&&r.add(h)}return e.forEach(h=>{const f=Math.floor(h.index/15),p=h.index%15,y=u(f,p,0,1);y.length>1&&r.add(y);const T=u(f,p,1,0);T.length>1&&r.add(T)}),Array.from(r)},Wg=(t,e,n,r)=>{const i=[...t];e.forEach((l,u)=>{i[l]={letter:n[u]}});const s=e.map((l,u)=>({index:l,letter:n[u]})),o=mw(i,s);return o.length===0?!1:o.every(l=>r.has(Lh(l)))},mP=(t,e,n,r,i)=>{const s=e.length;for(let o=0;o<15;o++)for(let l=0;l<=15-s;l++){const u=[];let h=!0,f=!1,p=!1;for(let T=0;T<s;T++){const R=o*15+(l+T);if(t[R]!==null){h=!1;break}u.push(R),R===r&&(p=!0);const N=[R-1,R+1,R-15,R+15];for(const V of N)V>=0&&V<225&&t[V]!==null&&!u.includes(V)&&(f=!0)}if(!h)continue;if((n&&p||!n&&f)&&Wg(t,u,e,i))return u}for(let o=0;o<15;o++)for(let l=0;l<=15-s;l++){const u=[];let h=!0,f=!1,p=!1;for(let T=0;T<s;T++){const R=(l+T)*15+o;if(t[R]!==null){h=!1;break}u.push(R),R===r&&(p=!0);const N=[R-1,R+1,R-15,R+15];for(const V of N)V>=0&&V<225&&t[V]!==null&&!u.includes(V)&&(f=!0)}if(!h)continue;if((n&&p||!n&&f)&&Wg(t,u,e,i))return u}return null},gw=(t,e)=>{if(e===1)return t.map(r=>[r]);const n=[];for(let r=0;r<t.length;r++){const i=gw(t.slice(r+1),e-1);for(const s of i)n.push([t[r],...s])}return n};function gP(){const[t,e]=ge.useState(null),[n,r]=ge.useState("lobby"),[i,s]=ge.useState(""),[o,l]=ge.useState(null),[u,h]=ge.useState(!1),[f,p]=ge.useState(!1),[y,T]=ge.useState(!1);ge.useEffect(()=>{(async()=>{try{typeof __initial_auth_token<"u"?await MS(Ga,__initial_auth_token):await DS(Ga)}catch(x){console.error("Error de autenticación",x)}})(),Mh().then(()=>T(!0));const k=jS(Ga,x=>{e(x)});return()=>k()},[]);const R=async()=>{if(!t)return;const _=Math.random().toString(36).substring(2,8).toUpperCase(),k=Array(225).fill(null);let x=[...Bg].sort(()=>Math.random()-.5);const F=x.splice(0,7),U={players:{[t.uid]:{name:"Jugador 1",score:0,rack:F,isHost:!0}},board:k,bag:x,currentTurn:t.uid,status:"waiting",code:_};try{const v=Qs(Vi,"artifacts",Xs,"public","data","rooms",_);await eP(v,U),s(_),r("game")}catch(v){console.error("Error al crear la sala",v)}},N=async _=>{if(!t||!_)return;const k=_.toUpperCase(),x=Qs(Vi,"artifacts",Xs,"public","data","rooms",k);try{const F=await ZC(x);if(F.exists()){const U=F.data();if(!U.players[t.uid]){let v=[...U.bag];const g=v.splice(0,7),w=Object.keys(U.players).length+1,E={...U.players,[t.uid]:{name:`Jugador ${w}`,score:0,rack:g,isHost:!1}};await Oh(x,{players:E,bag:v,status:Object.keys(E).length>=2?"playing":"waiting"})}s(k),r("game")}else alert("Sala no encontrada. Revisa el código e intenta de nuevo.")}catch(F){console.error("Error al unirse",F)}},V=()=>{const _={uid:"local-player",displayName:"Tú"},k=Array(225).fill(null);let x=[...Bg].sort(()=>Math.random()-.5);const F=x.splice(0,7),U=x.splice(0,7),v={players:{"local-player":{name:"Tú",score:0,rack:F,isHost:!0},computer:{name:"Computadora",score:0,rack:U,isHost:!1}},board:k,bag:x,currentTurn:"local-player",status:"playing",code:"SOLO"};e(_),l(v),s("SOLO"),h(!0),r("game")};ge.useEffect(()=>{if(!u&&n==="game"&&i&&t){const _=Qs(Vi,"artifacts",Xs,"public","data","rooms",i),k=tP(_,x=>{x.exists()?l(x.data()):r("lobby")},x=>console.error("Error de sincronización:",x));return()=>k()}},[n,i,t]);const S=!!t;return D.jsxs("div",{className:"h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden flex flex-col select-none",children:[n==="lobby"?D.jsx(yP,{onCreate:R,onJoin:N,onSinglePlayer:V,multiplayerReady:S,onOpenInstructions:()=>p(!0),dictLoaded:y}):D.jsx(_P,{gameState:o,user:t,roomCode:i,isSinglePlayer:u,onLocalUpdate:_=>{u&&l(k=>{if(!k)return k;const x={...k};return _.board&&(x.board=_.board),_.bag&&(x.bag=_.bag),_.currentTurn&&(x.currentTurn=_.currentTurn),_.players&&(x.players={...x.players},Object.keys(_.players).forEach(F=>{x.players[F]={...x.players[F],..._.players[F]}})),x})},onLeave:()=>{r("lobby"),h(!1),l(null)},onOpenInstructions:()=>p(!0)}),f&&D.jsx(vP,{onClose:()=>p(!1)})]})}function yP({onCreate:t,onJoin:e,onSinglePlayer:n,multiplayerReady:r,onOpenInstructions:i,dictLoaded:s}){const[o,l]=ge.useState("");return D.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-950",children:D.jsxs("div",{className:"bg-slate-900/90 border border-amber-500/20 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center backdrop-blur-md",children:[D.jsx("div",{className:"inline-flex p-3 bg-amber-500/10 rounded-2xl mb-4 border border-amber-500/30 text-amber-400",children:D.jsx(Sf,{size:36})}),D.jsx("h1",{className:"text-4xl font-black mb-1 tracking-wide text-amber-400 uppercase",children:"Scrabble Español"}),D.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"Practica vocabulario en español — solo o con amigos"}),D.jsxs("div",{className:"inline-flex items-center gap-2 bg-slate-950 border border-slate-800 text-xs px-3 py-1.5 rounded-full mb-6 text-slate-400",children:[D.jsx(Tf,{size:14,className:s?"text-emerald-400":"text-amber-400 animate-pulse"}),D.jsx("span",{children:s?"Diccionario oficial activo":"Cargando diccionario de Español..."})]}),D.jsxs("div",{className:"space-y-4",children:[D.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-4 px-6 rounded-2xl text-lg transition shadow-lg shadow-emerald-500/20 active:scale-95",children:[D.jsx(jg,{size:22,className:"fill-current"})," Jugar Solo (sin conexión)"]}),D.jsxs("div",{className:"relative flex items-center py-1",children:[D.jsx("div",{className:"flex-grow border-t border-slate-800"}),D.jsx("span",{className:"flex-shrink-0 mx-4 text-xs font-bold text-slate-500 uppercase tracking-wider",children:"o multijugador"}),D.jsx("div",{className:"flex-grow border-t border-slate-800"})]}),D.jsxs("button",{onClick:t,disabled:!r,className:`w-full flex items-center justify-center gap-2 font-black py-4 px-6 rounded-2xl text-lg transition shadow-lg active:scale-95 ${r?"bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20":"bg-slate-800 text-slate-500 cursor-not-allowed"}`,children:[D.jsx(jg,{size:22,className:"fill-current"})," Crear Nueva Partida"]}),D.jsxs("div",{className:"relative flex items-center py-1",children:[D.jsx("div",{className:"flex-grow border-t border-slate-800"}),D.jsx("span",{className:"flex-shrink-0 mx-4 text-xs font-bold text-slate-500 uppercase tracking-wider",children:"o ingresar código"}),D.jsx("div",{className:"flex-grow border-t border-slate-800"})]}),D.jsxs("div",{className:"flex gap-2",children:[D.jsx("input",{type:"text",placeholder:"CÓDIGO",className:"flex-1 uppercase bg-slate-950 border-2 border-slate-800 rounded-2xl px-4 py-3 text-lg font-mono font-bold text-center focus:outline-none focus:border-amber-400 text-amber-300 placeholder-slate-600 tracking-widest",value:o,onChange:u=>l(u.target.value),maxLength:6}),D.jsx("button",{onClick:()=>e(o),disabled:!r,className:`font-bold px-6 rounded-2xl text-base transition active:scale-95 ${r?"bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"}`,children:"Unirse"})]})]}),D.jsxs("button",{onClick:i,className:"mt-6 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-amber-400 transition",children:[D.jsx(If,{size:16})," ¿Cómo se juega? (Reglas y Acentos)"]})]})})}function _P({gameState:t,user:e,roomCode:n,isSinglePlayer:r,onLocalUpdate:i,onLeave:s,onOpenInstructions:o}){const[l,u]=ge.useState(null),[h,f]=ge.useState(null),[p,y]=ge.useState(null),[T,R]=ge.useState([]),[N,V]=ge.useState(!1),[S,_]=ge.useState(null),[k,x]=ge.useState(null),[F,U]=ge.useState(!1),[v,g]=ge.useState([]),[w,E]=ge.useState(null);if(ge.useEffect(()=>{t&&(f(t.board),t.players[e.uid]&&y(t.players[e.uid].rack),R([]),u(null))},[t,e.uid]),ge.useEffect(()=>{if(!r||!t||t.currentTurn!=="computer"||!i)return;const W=setTimeout(async()=>{const Y=await Mh(),Q=t.players.computer;if(!Q||!Y)return;const X=Q.rack.filter(Boolean);if(X.length<2){i({currentTurn:"local-player"});return}const he=[];for(let De=Math.min(X.length,5);De>=2;De--){const pt=gw(X,De);for(const fe of pt.slice(0,100)){const qe=fe.join("");Y.has(Lh(qe))&&he.push({word:qe,letters:fe})}if(he.length>=10)break}const ae=t.board.every(De=>De===null),dt=112;let ze=!1,Qt=[...t.board],He=[...Q.rack],ft=[...t.bag],Xt=0;for(const De of he){const pt=mP(t.board,De.letters,ae,dt,Y);if(pt){for(let fe=0;fe<De.letters.length;fe++){Qt[pt[fe]]={letter:De.letters[fe]},Xt+=(Aa[De.letters[fe]]||0)+2;const qe=He.indexOf(De.letters[fe]);qe!==-1&&(He[qe]=null)}for(He=He.filter(Boolean);He.length<7&&ft.length>0;)He.push(ft.pop());ze=!0;break}}i({board:ze?Qt:t.board,bag:ze?ft:t.bag,currentTurn:"local-player",players:{computer:{rack:ze?He:Q.rack,score:(Q.score||0)+Xt}}})},800);return()=>clearTimeout(W)},[r,t==null?void 0:t.currentTurn]),!t||!h||!p)return D.jsx("div",{className:"flex-1 flex items-center justify-center text-amber-400 font-medium",children:"Cargando estado del juego..."});const A=t.currentTurn===e.uid,C=z=>{if(A)if(l===z){const W=[...p],Y=W[z];if(!Y)return;const Q=fP(Y);Q!==Y&&(W[z]=Q,y(W)),u(null)}else u(z)},I=(z,W)=>{if(!A||W===null||z===null||h[z]!==null)return;const Y=p[W];if(!Y)return;const Q=[...h];Q[z]={letter:Y,isNew:!0},f(Q),R([...T,{index:z,letter:Y,rackIndex:W}]);const X=[...p];X[W]=null,y(X),u(null)},Tt=z=>{const W=h[z];if(W!=null&&W.isNew&&A){const Y=T.find(Q=>Q.index===z);if(Y){const Q=[...h];Q[z]=null,f(Q);const X=[...p];if(X[Y.rackIndex]===null)X[Y.rackIndex]=Y.letter;else{const he=X.findIndex(ae=>ae===null);he!==-1&&(X[he]=Y.letter)}y(X),R(T.filter(he=>he.index!==z)),u(null)}return}if(W&&!W.isNew){qt(z);return}l!==null&&I(z,l)},wn=(z,W)=>{!A||p[W]===null||z.dataTransfer.setData("text/plain",W.toString())},Rr=z=>{z.preventDefault()},Ht=(z,W)=>{z.preventDefault();const Y=z.dataTransfer.getData("text/plain");if(Y!==""){const Q=parseInt(Y,10);I(W,Q)}},B=()=>{if(!A||T.length===0)return;const z=T[T.length-1],W=[...h];W[z.index]=null,f(W);const Y=[...p];Y[z.rackIndex]=z.letter,y(Y),R(T.slice(0,-1)),u(null)},G=()=>{!A||T.length===0||(f(t.board),y(t.players[e.uid].rack),R([]),u(null))},ne=()=>{A&&(G(),U(!0),g([]))},ve=z=>{g(W=>W.includes(z)?W.filter(Q=>Q!==z):[...W,z])},de=async()=>{const z=Object.keys(t.players),W=z.indexOf(e.uid),Y=r?"computer":z[(W+1)%z.length];let Q=[...t.bag],X=[...p];v.forEach(ae=>{X[ae]&&(Q.push(X[ae]),X[ae]=null)}),Q.sort(()=>Math.random()-.5);for(let ae=0;ae<X.length;ae++)X[ae]===null&&Q.length>0&&(X[ae]=Q.pop());for(X=X.filter(ae=>ae!==null);X.length<7&&Q.length>0;)X.push(Q.pop());if(U(!1),g([]),r&&i){i({bag:Q,currentTurn:Y,players:{[e.uid]:{rack:X}}});return}const he=Qs(Vi,"artifacts",Xs,"public","data","rooms",n);try{await Oh(he,{bag:Q,currentTurn:Y,[`players.${e.uid}.rack`]:X})}catch(ae){console.error("Error al pasar el turno",ae)}},Se=()=>{U(!1),g([])},qt=async z=>{if(!h[z])return;const Y=Math.floor(z/15),Q=z%15,X=(He,ft)=>He<0||He>=15||ft<0||ft>=15?null:h[He*15+ft],he=(He,ft,Xt,De)=>{let pt=He,fe=ft;for(;X(pt-Xt,fe-De);)pt-=Xt,fe-=De;let qe="";for(;X(pt,fe);)qe+=X(pt,fe).letter,pt+=Xt,fe+=De;return qe.length>1?qe:null},ae=he(Y,Q,0,1),dt=he(Y,Q,1,0),ze=ae||dt;if(!ze)return;const Qt=await $g(ze);E({word:ze,definition:Qt})},Kt=async()=>{if(!A||T.length===0)return;V(!0);const z=t.board.every(fe=>fe===null),W=pP(h,T,z);if(!W.ok){x({invalidWords:[W.message]}),V(!1);return}const Y=await Mh(),Q=mw(h,T);if(Q.length===0){x({invalidWords:["Por favor coloca las fichas formando una palabra conectada."]}),V(!1);return}const X=[];if(Y&&Y.size>0&&Q.forEach(fe=>{const qe=Lh(fe);Y.has(qe)||X.push(fe)}),X.length>0){x({invalidWords:X}),V(!1);return}let he=T.reduce((fe,qe)=>fe+(Aa[qe.letter]||0),0);he+=T.length*2;const ae=Q[0]||"",dt=await $g(ae);let ze=[...t.bag],Qt=p.filter(fe=>fe!==null);for(;Qt.length<7&&ze.length>0;)Qt.push(ze.pop());const He=h.map(fe=>fe?{letter:fe.letter}:null),ft=Object.keys(t.players),Xt=ft.indexOf(e.uid),De=r?"computer":ft[(Xt+1)%ft.length],pt={board:He,bag:ze,currentTurn:De,[`players.${e.uid}.rack`]:Qt,[`players.${e.uid}.score`]:(t.players[e.uid].score||0)+he};V(!1),_({word:ae,definition:dt,turnScore:he,turnPayload:pt})},Gt=async()=>{if(!S)return;if(r&&i){const W=S.turnPayload,Y={};Object.keys(W).forEach(Q=>{if(Q.startsWith("players.")){const X=Q.split("."),he=X[1],ae=X[2];Y[he]||(Y[he]={}),Y[he][ae]=W[Q]}}),i({board:W.board,bag:W.bag,currentTurn:W.currentTurn,players:Y}),R([]),_(null);return}const z=Qs(Vi,"artifacts",Xs,"public","data","rooms",n);try{await Oh(z,S.turnPayload),R([]),_(null)}catch(W){console.error("Error al actualizar la jugada",W)}};return D.jsxs("div",{className:"flex-1 flex flex-col justify-between p-3 gap-2 bg-slate-950 overflow-hidden relative",children:[D.jsxs("div",{className:"flex items-center justify-between bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl shrink-0",children:[D.jsxs("div",{className:"flex items-center gap-3",children:[D.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-400",children:r?"Modo:":"Código de Sala:"}),D.jsx("span",{className:"bg-slate-950 border border-amber-500/30 px-3 py-1 rounded-xl text-amber-400 font-mono font-black text-lg tracking-wider",children:r?"SOLO":n})]}),D.jsx("div",{className:"flex items-center gap-4",children:Object.entries(t.players).map(([z,W])=>D.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${t.currentTurn===z?"border-amber-400 bg-amber-500/10 text-amber-300 font-bold":"border-slate-800 bg-slate-950 text-slate-400"}`,children:[D.jsx(uP,{size:14}),D.jsx("span",{className:"text-sm",children:z===e.uid?"Tú":W.name}),D.jsxs("span",{className:"bg-slate-800 text-amber-400 text-xs px-2 py-0.5 rounded-lg font-bold",children:[W.score||0," pts"]})]},z))}),D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("button",{onClick:o,className:"p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-xl transition",title:"Instrucciones del juego",children:D.jsx(If,{size:20})}),D.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 bg-rose-950/30 hover:bg-rose-900/40 border border-rose-500/20 px-3 py-2 rounded-xl transition font-semibold",children:[D.jsx(oP,{size:14})," Salir"]})]})]}),D.jsx("div",{className:"flex-1 flex items-center justify-center min-h-0 relative my-1",children:D.jsx("div",{className:"relative bg-slate-900 p-2 rounded-2xl border-2 border-slate-800 shadow-2xl shrink-0",style:{aspectRatio:"1/1",height:"min(100%, 65vh)"},children:D.jsx("div",{className:"grid w-full h-full bg-slate-950 p-1 rounded-xl gap-0.5 border border-slate-800",style:{gridTemplateColumns:"repeat(15, minmax(0, 1fr))",gridTemplateRows:"repeat(15, minmax(0, 1fr))"},children:h.map((z,W)=>{const Y=Math.floor(W/15),Q=W%15,X=dP[Y][Q];let he="bg-slate-900/90 hover:bg-slate-800/80 border border-slate-800/40",ae="",dt="text-slate-600";return X==="T"?(he="bg-rose-950/60 border border-rose-500/30",ae="3P",dt="text-rose-400"):X==="D"||X==="*"?(he="bg-pink-950/60 border border-pink-500/30",ae=X==="*"?"★":"2P",dt="text-pink-400"):X==="t"?(he="bg-sky-950/60 border border-sky-500/30",ae="3L",dt="text-sky-400"):X==="d"&&(he="bg-blue-950/60 border border-blue-500/30",ae="2L",dt="text-blue-400"),D.jsx("div",{onClick:()=>Tt(W),onDragOver:Rr,onDrop:ze=>Ht(ze,W),className:`relative flex items-center justify-center rounded-md font-bold text-xs select-none transition-all cursor-pointer ${z?"bg-amber-100 border-b-2 border-r-2 border-amber-300 shadow-lg":he} ${z!=null&&z.isNew?"ring-2 ring-emerald-400 z-10 animate-pulse":""}`,children:z?D.jsxs("span",{className:"text-slate-950 text-base md:text-xl font-black flex items-center justify-center",children:[z.letter,D.jsx("span",{className:"absolute bottom-0.5 right-0.5 text-[8px] font-bold text-slate-700",children:Aa[z.letter]})]}):D.jsx("span",{className:`text-[10px] font-black pointer-events-none opacity-80 ${dt}`,children:ae})},`${Y}-${Q}`)})})})}),D.jsxs("div",{className:"w-full bg-slate-900 border border-slate-800 p-3 rounded-2xl flex items-center justify-between gap-4 shrink-0 shadow-xl",children:[D.jsxs("div",{className:"flex gap-2 w-48",children:[D.jsxs("button",{onClick:B,disabled:!A||T.length===0||N,className:"flex-1 flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-700 py-2.5 rounded-xl font-bold transition text-xs text-amber-300 active:scale-95",title:"Deshacer la última ficha colocada",children:[D.jsx(zg,{size:14})," Deshacer"]}),D.jsxs("button",{onClick:G,disabled:!A||T.length===0||N,className:"flex-1 flex items-center justify-center gap-1.5 bg-rose-950/40 hover:bg-rose-900/60 disabled:opacity-30 disabled:cursor-not-allowed border border-rose-500/20 py-2.5 rounded-xl font-bold transition text-xs text-rose-300 active:scale-95",title:"Limpiar todas las fichas colocadas en este turno",children:[D.jsx(lP,{size:14})," Limpiar"]})]}),D.jsxs("div",{className:"flex-1 flex flex-col items-center",children:[D.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",children:A?"Tus Fichas (Haz clic para seleccionar o cambiar acentos/Ñ)":"Turno de tu oponente"}),D.jsx("div",{className:"flex gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800 min-h-[3.5rem]",children:p.map((z,W)=>D.jsx("div",{draggable:A&&z!==null,onDragStart:Y=>wn(Y,W),onClick:()=>C(W),className:`
                  relative w-11 h-13 md:w-12 md:h-14 rounded-xl flex items-center justify-center font-black text-xl md:text-2xl select-none transition-all
                  ${z===null?"bg-slate-900/50 border-2 border-dashed border-slate-800":"bg-amber-100 text-slate-950 shadow-md cursor-grab border-b-4 border-amber-300 hover:bg-amber-50"}
                  ${l===W?"-translate-y-2 ring-4 ring-amber-400 shadow-amber-400/50":"hover:-translate-y-0.5"}
                  ${!A&&z!==null?"opacity-40 grayscale cursor-not-allowed":""}
                `,children:z&&D.jsxs(D.Fragment,{children:[z,D.jsx("span",{className:"absolute bottom-0.5 right-1 text-[9px] font-extrabold text-slate-700",children:Aa[z]})]})},W))})]}),D.jsxs("div",{className:"flex gap-2 w-56",children:[D.jsxs("button",{onClick:ne,disabled:!A||N,className:"flex-1 flex items-center justify-center gap-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-700 py-2.5 rounded-xl font-bold transition text-xs text-slate-300 active:scale-95",children:[D.jsx(aP,{size:14})," Pasar"]}),D.jsxs("button",{onClick:Kt,disabled:!A||T.length===0||N,className:"flex-[1.6] flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed py-2.5 rounded-xl font-black text-xs text-slate-950 shadow-lg shadow-emerald-500/20 transition active:scale-95",children:[N?D.jsx(zg,{className:"animate-spin",size:16}):D.jsx(sP,{size:16}),N?"Validando...":"Validar y Jugar"]})]})]}),F&&D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md",children:D.jsxs("div",{className:"bg-slate-900 border-2 border-amber-500/40 rounded-3xl max-w-md w-full p-6 text-slate-200 shadow-2xl",children:[D.jsx("h2",{className:"text-xl font-black text-amber-400 mb-2 text-center",children:"Cambiar fichas"}),D.jsx("p",{className:"text-slate-400 text-xs text-center mb-4",children:"Selecciona las fichas que quieres devolver a la bolsa"}),D.jsx("div",{className:"flex gap-2 justify-center mb-6",children:p.map((z,W)=>z&&D.jsx("button",{onClick:()=>ve(W),className:`w-10 h-12 rounded-lg font-black text-lg transition ${v.includes(W)?"bg-rose-500 text-white ring-2 ring-rose-300":"bg-amber-100 text-slate-950"}`,children:z},W))}),D.jsxs("div",{className:"flex gap-2",children:[D.jsx("button",{onClick:Se,className:"flex-1 bg-slate-800 hover:bg-slate-700 py-2.5 rounded-xl font-bold text-sm",children:"Cancelar"}),D.jsx("button",{onClick:de,className:"flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 py-2.5 rounded-xl font-black text-sm",children:v.length===0?"Pasar sin cambiar":`Cambiar ${v.length}`})]})]})}),w&&D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md",onClick:()=>E(null),children:D.jsxs("div",{className:"bg-slate-900 border-2 border-sky-500/40 rounded-3xl max-w-sm w-full p-6 text-slate-200 shadow-2xl text-center",onClick:z=>z.stopPropagation(),children:[D.jsx("h2",{className:"text-2xl font-black text-sky-400 capitalize mb-2",children:w.word}),D.jsxs("p",{className:"text-slate-300 text-sm italic mb-4",children:['"',w.definition,'"']}),D.jsx("button",{onClick:()=>E(null),className:"w-full bg-sky-500 hover:bg-sky-400 text-slate-950 py-2.5 rounded-xl font-black",children:"Cerrar"})]})}),S&&D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:D.jsxs("div",{className:"bg-slate-900 border-2 border-emerald-500/40 rounded-3xl max-w-md w-full p-6 text-slate-200 shadow-2xl relative text-center",children:[D.jsx("div",{className:"inline-flex p-4 bg-emerald-500/10 rounded-full text-emerald-400 mb-3 border border-emerald-500/30",children:D.jsx(Tf,{size:36})}),D.jsx("h2",{className:"text-3xl font-black text-emerald-400 capitalize mb-1 tracking-wide",children:S.word}),D.jsxs("p",{className:"text-slate-400 text-xs font-semibold mb-4 uppercase tracking-wider",children:["¡Palabra Válida! (+",S.turnScore," Puntos)"]}),D.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left mb-6",children:[D.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5",children:[D.jsx(Sf,{size:14})," Definición en Inglés:"]}),D.jsxs("p",{className:"text-slate-200 text-sm leading-relaxed italic",children:['"',S.definition,'"']})]}),D.jsx("button",{onClick:Gt,className:"w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-3.5 rounded-2xl transition shadow-lg shadow-emerald-500/20 active:scale-95 text-base",children:"Continuar al Siguiente Turno"})]})}),k&&D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:D.jsxs("div",{className:"bg-slate-900 border-2 border-rose-500/40 rounded-3xl max-w-md w-full p-6 text-slate-200 shadow-2xl relative text-center",children:[D.jsx("div",{className:"inline-flex p-4 bg-rose-500/10 rounded-full text-rose-400 mb-3 border border-rose-500/30",children:D.jsx(iP,{size:36})}),D.jsx("h2",{className:"text-2xl font-black text-rose-400 mb-2",children:"Palabra No Reconocida"}),D.jsx("p",{className:"text-slate-300 text-xs mb-4",children:"La siguiente combinación no existe en el diccionario oficial de Scrabble Español:"}),D.jsx("div",{className:"bg-slate-950 p-3 rounded-2xl border border-slate-800 mb-6 flex flex-wrap justify-center gap-2",children:k.invalidWords.map((z,W)=>D.jsx("span",{className:"bg-rose-950/80 border border-rose-500/30 text-rose-300 px-3 py-1 rounded-xl font-bold font-mono text-sm",children:z},W))}),D.jsx("button",{onClick:()=>x(null),className:"w-full bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold py-3 rounded-xl border border-slate-700 transition",children:"Ajustar Fichas"})]})})]})}function vP({onClose:t}){return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in",children:D.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 text-slate-200 shadow-2xl relative",children:[D.jsx("button",{onClick:t,className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition",children:D.jsx(cP,{size:20})}),D.jsxs("div",{className:"flex items-center gap-3 mb-4 text-amber-400",children:[D.jsx(If,{size:28}),D.jsx("h2",{className:"text-2xl font-black uppercase tracking-wide",children:"Instrucciones del Juego"})]}),D.jsxs("div",{className:"space-y-4 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2",children:[D.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800",children:[D.jsxs("h3",{className:"font-bold text-amber-400 mb-1 flex items-center gap-2",children:[D.jsx(Tf,{size:16})," Validación de Diccionario"]}),D.jsxs("p",{className:"text-slate-300 text-xs",children:["Al hacer clic en ",D.jsx("strong",{children:"Validar y Jugar"}),", la palabra se verifica contra el diccionario oficial en español de ",D.jsx("em",{children:"kamilmielnik/scrabble-dictionaries"}),". Si la palabra existe, se muestra su definición breve en inglés para aprender el vocabulario."]})]}),D.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800",children:[D.jsxs("h3",{className:"font-bold text-amber-400 mb-1 flex items-center gap-2",children:[D.jsx(Sf,{size:16})," Acentos y la Letra Ñ"]}),D.jsxs("p",{className:"text-slate-300 text-xs",children:["Para colocar una vocal acentuada (",D.jsx("strong",{children:"Á, É, Í, Ó, Ú"}),") o cambiar una ",D.jsx("strong",{children:"N"})," por una ",D.jsx("strong",{children:"Ñ"}),":",D.jsx("br",{}),"1. Haz clic en la ficha dentro de tu atril para seleccionarla.",D.jsx("br",{}),"2. Vuelve a hacer clic sobre ella para alternar su acento o tilde."]})]}),D.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800",children:[D.jsx("h3",{className:"font-bold text-amber-400 mb-1",children:"Controles de Turno"}),D.jsxs("ul",{className:"list-disc list-inside text-xs text-slate-300 space-y-1",children:[D.jsxs("li",{children:[D.jsx("strong",{children:"Deshacer:"})," Regresa la última ficha colocada en este turno a tu atril."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Limpiar:"})," Regresa todas las fichas colocadas en este turno."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Pasar:"})," Cede tu turno al siguiente jugador sin jugar."]}),D.jsxs("li",{children:[D.jsx("strong",{children:"Validar y Jugar:"})," Confirma la palabra, consulta el diccionario y muestra la definición."]})]})]})]}),D.jsx("button",{onClick:t,className:"w-full mt-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl transition",children:"¡Entendido!"})]})})}_c.createRoot(document.getElementById("root")).render(D.jsx(sE.StrictMode,{children:D.jsx(gP,{})}));
