import"./vue.7bf2bcd0.js";import{s as L,g as H,i as A,j as M,k as J,r as c,w as g,u as U,l as V,e as G,n as K,b as q}from"./@vue.ab32a142.js";var X=Object.defineProperty,Y=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&j(e,n,t[n]);if(D)for(var n of D(t))ee.call(t,n)&&j(e,n,t[n]);return e},ne=(e,t)=>Y(e,Z(t));function Ie(e,t){var n;const o=L();return H(()=>{o.value=e()},ne(te({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),A(o)}var W;const E=typeof window<"u",oe=e=>typeof e<"u",Ee=e=>typeof e=="boolean",re=e=>typeof e=="function",Te=e=>typeof e=="number",ie=e=>typeof e=="string",S=()=>{};E&&((W=window==null?void 0:window.navigator)==null?void 0:W.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function y(e){return typeof e=="function"?e():U(e)}function z(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}function se(e,t={}){let n,o;return i=>{const s=y(e),u=y(t.maxWait);if(n&&clearTimeout(n),s<=0||u!==void 0&&u<=0)return o&&(clearTimeout(o),o=null),i();u&&!o&&(o=setTimeout(()=>{n&&clearTimeout(n),o=null,i()},u)),n=setTimeout(()=>{o&&clearTimeout(o),o=null,i()},s)}}function ue(e,t=!0,n=!0){let o=0,r,i=!0;const s=()=>{r&&(clearTimeout(r),r=void 0)};return l=>{const f=y(e),m=Date.now()-o;if(s(),f<=0)return o=Date.now(),l();m>f&&(n||!i)?(o=Date.now(),l()):t&&(r=setTimeout(()=>{o=Date.now(),i=!0,s(),l()},f)),!n&&!r&&(r=setTimeout(()=>i=!0,f)),i=!1}}function ae(e){return e}function F(e){return M()?(J(e),!0):!1}function le(e,t=200,n={}){return z(se(t,n),e)}function Se(e,t=200,n={}){if(t<=0)return e;const o=c(e.value),r=le(()=>{o.value=e.value},t,n);return g(e,()=>r()),o}function $e(e,t=200,n=!1,o=!0){return z(ue(t,n,o),e)}function N(e,t=!0){V()?G(e):t?e():K(e)}function xe(e,t,n={}){const{immediate:o=!0}=n,r=c(!1);let i=null;function s(){i&&(clearTimeout(i),i=null)}function u(){r.value=!1,s()}function l(...f){s(),r.value=!0,i=setTimeout(()=>{r.value=!1,i=null,e(...f)},y(t))}return o&&(r.value=!0,E&&l()),F(u),{isPending:r,start:l,stop:u}}function h(e){var t;const n=y(e);return(t=n==null?void 0:n.$el)!=null?t:n}const P=E?window:void 0,ce=E?window.document:void 0;function O(...e){let t,n,o,r;if(ie(e[0])?([n,o,r]=e,t=P):[t,n,o,r]=e,!t)return S;let i=S;const s=g(()=>h(t),l=>{i(),l&&(l.addEventListener(n,o,r),i=()=>{l.removeEventListener(n,o,r),i=S})},{immediate:!0,flush:"post"}),u=()=>{s(),i()};return F(u),u}function Fe(e,t,n={}){const{window:o=P,ignore:r,capture:i=!0,detectIframe:s=!1}=n;if(!o)return;const u=c(!0);let l;const f=a=>{o.clearTimeout(l);const d=h(e),p=a.composedPath();!d||d===a.target||p.includes(d)||!u.value||r&&r.length>0&&r.some(_=>{const v=h(_);return v&&(a.target===v||p.includes(v))})||t(a)},m=[O(o,"click",f,{passive:!0,capture:i}),O(o,"pointerdown",a=>{const d=h(e);u.value=!!d&&!a.composedPath().includes(d)},{passive:!0}),O(o,"pointerup",a=>{if(a.button===0){const d=a.composedPath();a.composedPath=()=>d,l=o.setTimeout(()=>f(a),50)}},{passive:!0}),s&&O(o,"blur",a=>{var d;const p=h(e);((d=document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(p!=null&&p.contains(document.activeElement))&&t(a)})].filter(Boolean);return()=>m.forEach(a=>a())}function fe(e,t=!1){const n=c(),o=()=>n.value=Boolean(e());return o(),N(o,t),n}function de(e){return JSON.parse(JSON.stringify(e))}const $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__vueuse_ssr_handlers__";$[x]=$[x]||{};$[x];function Ne({document:e=ce}={}){if(!e)return c("visible");const t=c(e.visibilityState);return O(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var C=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,me=(e,t)=>{var n={};for(var o in e)pe.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&C)for(var o of C(e))t.indexOf(o)<0&&ve.call(e,o)&&(n[o]=e[o]);return n};function Oe(e,t,n={}){const o=n,{window:r=P}=o,i=me(o,["window"]);let s;const u=fe(()=>r&&"ResizeObserver"in r),l=()=>{s&&(s.disconnect(),s=void 0)},f=g(()=>h(e),b=>{l(),u.value&&r&&b&&(s=new ResizeObserver(t),s.observe(b,i))},{immediate:!0,flush:"post"}),m=()=>{l(),f()};return F(m),{isSupported:u,stop:m}}function De(e,t={}){const{reset:n=!0,windowResize:o=!0,windowScroll:r=!0,immediate:i=!0}=t,s=c(0),u=c(0),l=c(0),f=c(0),m=c(0),b=c(0),a=c(0),d=c(0);function p(){const _=h(e);if(!_){n&&(s.value=0,u.value=0,l.value=0,f.value=0,m.value=0,b.value=0,a.value=0,d.value=0);return}const v=_.getBoundingClientRect();s.value=v.height,u.value=v.bottom,l.value=v.left,f.value=v.right,m.value=v.top,b.value=v.width,a.value=v.x,d.value=v.y}return Oe(e,p),g(()=>h(e),_=>!_&&p()),r&&O("scroll",p,{passive:!0}),o&&O("resize",p,{passive:!0}),N(()=>{i&&p()}),{height:s,bottom:u,left:l,right:f,top:m,width:b,x:a,y:d,update:p}}var R;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(R||(R={}));var be=Object.defineProperty,Q=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&B(e,n,t[n]);if(Q)for(var n of Q(t))he.call(t,n)&&B(e,n,t[n]);return e};const ge={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};we({linear:ae},ge);function je(e,t,n,o={}){var r,i,s;const{clone:u=!1,passive:l=!1,eventName:f,deep:m=!1,defaultValue:b}=o,a=V(),d=n||(a==null?void 0:a.emit)||((r=a==null?void 0:a.$emit)==null?void 0:r.bind(a))||((s=(i=a==null?void 0:a.proxy)==null?void 0:i.$emit)==null?void 0:s.bind(a==null?void 0:a.proxy));let p=f;t||(t="modelValue"),p=f||p||`update:${t.toString()}`;const _=w=>u?re(u)?u(w):de(w):w,v=()=>oe(e[t])?_(e[t]):b;if(l){const w=v(),T=c(w);return g(()=>e[t],I=>T.value=_(I)),g(T,I=>{(I!==e[t]||m)&&d(p,I)},{deep:m}),T}else return q({get(){return v()},set(w){d(p,w)}})}function We({window:e=P}={}){if(!e)return c(!1);const t=c(e.document.hasFocus());return O(e,"blur",()=>{t.value=!1}),O(e,"focus",()=>{t.value=!0}),t}function Ce(e={}){const{window:t=P,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:i=!0}=e,s=c(n),u=c(o),l=()=>{t&&(i?(s.value=t.innerWidth,u.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};return l(),N(l),O("resize",l,{passive:!0}),r&&O("orientationchange",l,{passive:!0}),{width:s,height:u}}export{Te as a,Ee as b,Ce as c,De as d,O as e,Oe as f,$e as g,xe as h,E as i,Ne as j,We as k,Ie as l,je as m,Fe as o,Se as r,F as t,h as u};
