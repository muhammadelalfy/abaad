import"./vue.7bf2bcd0.js";import{d as M2,b as A,w as ms,h as i4}from"./@vue.ab32a142.js";function P3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function z(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?P3(Object(e),!0).forEach(function(s){x(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):P3(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function k1(c){return k1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k1(c)}function Cs(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function F3(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function vs(c,a,e){return a&&F3(c.prototype,a),e&&F3(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function x(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function p2(c,a){return hs(c)||Ms(c,a)||f4(c,a)||Ls()}function o1(c){return Hs(c)||Vs(c)||f4(c)||ps()}function Hs(c){if(Array.isArray(c))return i2(c)}function hs(c){if(Array.isArray(c))return c}function Vs(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Ms(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,f,l;try{for(e=e.call(c);!(r=(f=e.next()).done)&&(s.push(f.value),!(a&&s.length===a));r=!0);}catch(n){i=!0,l=n}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw l}}return s}}function f4(c,a){if(!!c){if(typeof c=="string")return i2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i2(c,a)}}function i2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function ps(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ls(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var T3=function(){},L2={},l4={},n4=null,o4={mark:T3,measure:T3};try{typeof window<"u"&&(L2=window),typeof document<"u"&&(l4=document),typeof MutationObserver<"u"&&(n4=MutationObserver),typeof performance<"u"&&(o4=performance)}catch{}var us=L2.navigator||{},B3=us.userAgent,q3=B3===void 0?"":B3,$=L2,L=l4,D3=n4,V1=o4;$.document;var E=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",t4=~q3.indexOf("MSIE")||~q3.indexOf("Trident/"),M1,p1,L1,u1,d1,q="___FONT_AWESOME___",f2=16,z4="fa",m4="svg-inline--fa",j="data-fa-i2svg",l2="data-fa-pseudo-element",ds="data-fa-pseudo-element-pending",u2="data-prefix",d2="data-icon",R3="fontawesome-i2svg",gs="async",xs=["HTML","HEAD","STYLE","SCRIPT"],C4=function(){try{return!1}catch{return!1}}(),p="classic",u="sharp",g2=[p,u];function t1(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[p]}})}var r1=t1((M1={},x(M1,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),x(M1,u,{fa:"solid",fass:"solid","fa-solid":"solid"}),M1)),i1=t1((p1={},x(p1,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(p1,u,{solid:"fass"}),p1)),f1=t1((L1={},x(L1,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(L1,u,{fass:"fa-solid"}),L1)),bs=t1((u1={},x(u1,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(u1,u,{"fa-solid":"fass"}),u1)),Ns=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,v4="fa-layers-text",Ss=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ks=t1((d1={},x(d1,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(d1,u,{900:"fass"}),d1)),H4=[1,2,3,4,5,6,7,8,9,10],ws=H4.concat([11,12,13,14,15,16,17,18,19,20]),ys=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l1=new Set;Object.keys(i1[p]).map(l1.add.bind(l1));Object.keys(i1[u]).map(l1.add.bind(l1));var As=[].concat(g2,o1(l1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",I.GROUP,I.SWAP_OPACITY,I.PRIMARY,I.SECONDARY]).concat(H4.map(function(c){return"".concat(c,"x")})).concat(ws.map(function(c){return"w-".concat(c)})),a1=$.FontAwesomeConfig||{};function Ps(c){var a=L.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Fs(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(L&&typeof L.querySelector=="function"){var Ts=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ts.forEach(function(c){var a=p2(c,2),e=a[0],s=a[1],r=Fs(Ps(e));r!=null&&(a1[s]=r)})}var h4={styleDefault:"solid",familyDefault:"classic",cssPrefix:z4,replacementClass:m4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a1.familyPrefix&&(a1.cssPrefix=a1.familyPrefix);var Q=z(z({},h4),a1);Q.autoReplaceSvg||(Q.observeMutations=!1);var m={};Object.keys(h4).forEach(function(c){Object.defineProperty(m,c,{enumerable:!0,set:function(e){Q[c]=e,e1.forEach(function(s){return s(m)})},get:function(){return Q[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){Q.cssPrefix=a,e1.forEach(function(e){return e(m)})},get:function(){return Q.cssPrefix}});$.FontAwesomeConfig=m;var e1=[];function Bs(c){return e1.push(c),function(){e1.splice(e1.indexOf(c),1)}}var G=f2,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qs(c){if(!(!c||!E)){var a=L.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=L.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=i)}return L.head.insertBefore(a,s),c}}var Ds="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n1(){for(var c=12,a="";c-- >0;)a+=Ds[Math.random()*62|0];return a}function J(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function x2(c){return c.classList?J(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function V4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rs(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(V4(c[e]),'" ')},"").trim()}function F1(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function b2(c){return c.size!==B.size||c.x!==B.x||c.y!==B.y||c.rotate!==B.rotate||c.flipX||c.flipY}function Es(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(i," ").concat(f," ").concat(l)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:n,path:t}}function Us(c){var a=c.transform,e=c.width,s=e===void 0?f2:e,r=c.height,i=r===void 0?f2:r,f=c.startCentered,l=f===void 0?!1:f,n="";return l&&t4?n+="translate(".concat(a.x/G-s/2,"em, ").concat(a.y/G-i/2,"em) "):l?n+="translate(calc(-50% + ".concat(a.x/G,"em), calc(-50% + ").concat(a.y/G,"em)) "):n+="translate(".concat(a.x/G,"em, ").concat(a.y/G,"em) "),n+="scale(".concat(a.size/G*(a.flipX?-1:1),", ").concat(a.size/G*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var Gs=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function M4(){var c=z4,a=m4,e=m.cssPrefix,s=m.replacementClass,r=Gs;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(l,".".concat(s))}return r}var E3=!1;function a2(){m.autoAddCss&&!E3&&(qs(M4()),E3=!0)}var $s={mixout:function(){return{dom:{css:M4,insertCss:a2}}},hooks:function(){return{beforeDOMElementCreation:function(){a2()},beforeI2svg:function(){a2()}}}},D=$||{};D[q]||(D[q]={});D[q].styles||(D[q].styles={});D[q].hooks||(D[q].hooks={});D[q].shims||(D[q].shims=[]);var F=D[q],p4=[],Ws=function c(){L.removeEventListener("DOMContentLoaded",c),w1=1,p4.map(function(a){return a()})},w1=!1;E&&(w1=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),w1||L.addEventListener("DOMContentLoaded",Ws));function Os(c){!E||(w1?setTimeout(c,0):p4.push(c))}function z1(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?V4(c):"<".concat(a," ").concat(Rs(s),">").concat(i.map(z1).join(""),"</").concat(a,">")}function U3(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Is=function(a,e){return function(s,r,i,f){return a.call(e,s,r,i,f)}},e2=function(a,e,s,r){var i=Object.keys(a),f=i.length,l=r!==void 0?Is(e,r):e,n,t,o;for(s===void 0?(n=1,o=a[i[0]]):(n=0,o=s);n<f;n++)t=i[n],o=l(o,a[t],t,a);return o};function Zs(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function n2(c){var a=Zs(c);return a.length===1?a[0].toString(16):null}function js(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function G3(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function o2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=G3(a);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(c,G3(a)):F.styles[c]=z(z({},F.styles[c]||{}),i),c==="fas"&&o2("fa",a)}var g1,x1,b1,Y=F.styles,_s=F.shims,Ys=(g1={},x(g1,p,Object.values(f1[p])),x(g1,u,Object.values(f1[u])),g1),N2=null,L4={},u4={},d4={},g4={},x4={},Xs=(x1={},x(x1,p,Object.keys(r1[p])),x(x1,u,Object.keys(r1[u])),x1);function Ks(c){return~As.indexOf(c)}function Qs(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!Ks(r)?r:null}var b4=function(){var a=function(i){return e2(Y,function(f,l,n){return f[n]=e2(l,i,{}),f},{})};L4=a(function(r,i,f){if(i[3]&&(r[i[3]]=f),i[2]){var l=i[2].filter(function(n){return typeof n=="number"});l.forEach(function(n){r[n.toString(16)]=f})}return r}),u4=a(function(r,i,f){if(r[f]=f,i[2]){var l=i[2].filter(function(n){return typeof n=="string"});l.forEach(function(n){r[n]=f})}return r}),x4=a(function(r,i,f){var l=i[2];return r[f]=f,l.forEach(function(n){r[n]=f}),r});var e="far"in Y||m.autoFetchSvg,s=e2(_s,function(r,i){var f=i[0],l=i[1],n=i[2];return l==="far"&&!e&&(l="fas"),typeof f=="string"&&(r.names[f]={prefix:l,iconName:n}),typeof f=="number"&&(r.unicodes[f.toString(16)]={prefix:l,iconName:n}),r},{names:{},unicodes:{}});d4=s.names,g4=s.unicodes,N2=T1(m.styleDefault,{family:m.familyDefault})};Bs(function(c){N2=T1(c.styleDefault,{family:m.familyDefault})});b4();function S2(c,a){return(L4[c]||{})[a]}function Js(c,a){return(u4[c]||{})[a]}function Z(c,a){return(x4[c]||{})[a]}function N4(c){return d4[c]||{prefix:null,iconName:null}}function cr(c){var a=g4[c],e=S2("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return N2}var k2=function(){return{prefix:null,iconName:null,rest:[]}};function T1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?p:e,r=r1[s][c],i=i1[s][c]||i1[s][r],f=c in F.styles?c:null;return i||f||null}var $3=(b1={},x(b1,p,Object.keys(f1[p])),x(b1,u,Object.keys(f1[u])),b1);function B1(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},x(a,p,"".concat(m.cssPrefix,"-").concat(p)),x(a,u,"".concat(m.cssPrefix,"-").concat(u)),a),f=null,l=p;(c.includes(i[p])||c.some(function(t){return $3[p].includes(t)}))&&(l=p),(c.includes(i[u])||c.some(function(t){return $3[u].includes(t)}))&&(l=u);var n=c.reduce(function(t,o){var C=Qs(m.cssPrefix,o);if(Y[o]?(o=Ys[l].includes(o)?bs[l][o]:o,f=o,t.prefix=o):Xs[l].indexOf(o)>-1?(f=o,t.prefix=T1(o,{family:l})):C?t.iconName=C:o!==m.replacementClass&&o!==i[p]&&o!==i[u]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var h=f==="fa"?N4(t.iconName):{},V=Z(t.prefix,t.iconName);h.prefix&&(f=null),t.iconName=h.iconName||V||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!Y.far&&Y.fas&&!m.autoFetchSvg&&(t.prefix="fas")}return t},k2());return(c.includes("fa-brands")||c.includes("fab"))&&(n.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(n.prefix="fad"),!n.prefix&&l===u&&(Y.fass||m.autoFetchSvg)&&(n.prefix="fass",n.iconName=Z(n.prefix,n.iconName)||n.iconName),(n.prefix==="fa"||f==="fa")&&(n.prefix=W()||"fas"),n}var ar=function(){function c(){Cs(this,c),this.definitions={}}return vs(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var f=r.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(l){e.definitions[l]=z(z({},e.definitions[l]||{}),f[l]),o2(l,f[l]);var n=f1[p][l];n&&o2(n,f[l]),b4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var f=r[i],l=f.prefix,n=f.iconName,t=f.icon,o=t[2];e[l]||(e[l]={}),o.length>0&&o.forEach(function(C){typeof C=="string"&&(e[l][C]=t)}),e[l][n]=t}),e}}]),c}(),W3=[],X={},K={},er=Object.keys(K);function sr(c,a){var e=a.mixoutsTo;return W3=c,X={},Object.keys(K).forEach(function(s){er.indexOf(s)===-1&&delete K[s]}),W3.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(f){typeof r[f]=="function"&&(e[f]=r[f]),k1(r[f])==="object"&&Object.keys(r[f]).forEach(function(l){e[f]||(e[f]={}),e[f][l]=r[f][l]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(f){X[f]||(X[f]=[]),X[f].push(i[f])})}s.provides&&s.provides(K)}),e}function t2(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=X[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(s))}),a}function _(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=X[c]||[];r.forEach(function(i){i.apply(null,e)})}function R(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return K[c]?K[c].apply(null,a):void 0}function z2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||W();if(!!a)return a=Z(e,a)||a,U3(S4.definitions,e,a)||U3(F.styles,e,a)}var S4=new ar,rr=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,_("noAuto")},ir={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(_("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Os(function(){lr({autoReplaceSvgRoot:e}),_("watch",a)})}},fr={icon:function(a){if(a===null)return null;if(k1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=T1(a[0]);return{prefix:s,iconName:Z(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(Ns))){var r=B1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:Z(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=W();return{prefix:i,iconName:Z(i,a)||a}}}},w={noAuto:rr,config:m,dom:ir,parse:fr,library:S4,findIconDefinition:z2,toHtml:z1},lr=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?L:e;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&E&&m.autoReplaceSvg&&w.dom.i2svg({node:s})};function q1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return z1(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!E){var s=L.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function nr(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,f=c.transform;if(b2(f)&&e.found&&!s.found){var l=e.width,n=e.height,t={x:l/n/2,y:.5};r.style=F1(z(z({},i),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function or(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},r),{},{id:f}),children:s}]}]}function w2(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,f=c.transform,l=c.symbol,n=c.title,t=c.maskId,o=c.titleId,C=c.extra,h=c.watchable,V=h===void 0?!1:h,b=s.found?s:e,N=b.width,S=b.height,v=r==="fak",H=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(U){return C.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(C.classes).join(" "),M={children:[],attributes:z(z({},C.attributes),{},{"data-prefix":r,"data-icon":i,class:H,role:C.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(S)})},d=v&&!~C.classes.indexOf("fa-fw")?{width:"".concat(N/S*16*.0625,"em")}:{};V&&(M.attributes[j]=""),n&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(o||n1())},children:[n]}),delete M.attributes.title);var g=z(z({},M),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:f,symbol:l,styles:z(z({},d),C.styles)}),T=s.found&&e.found?R("generateAbstractMask",g)||{children:[],attributes:{}}:R("generateAbstractIcon",g)||{children:[],attributes:{}},y=T.children,c2=T.attributes;return g.children=y,g.attributes=c2,l?or(g):nr(g)}function O3(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,f=c.extra,l=c.watchable,n=l===void 0?!1:l,t=z(z(z({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});n&&(t[j]="");var o=z({},f.styles);b2(r)&&(o.transform=Us({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var C=F1(o);C.length>0&&(t.style=C);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function tr(c){var a=c.content,e=c.title,s=c.extra,r=z(z(z({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=F1(s.styles);i.length>0&&(r.style=i);var f=[];return f.push({tag:"span",attributes:r,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var s2=F.styles;function m2(c){var a=c[0],e=c[1],s=c.slice(4),r=p2(s,1),i=r[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(I.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(I.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(I.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:f}}var zr={found:!1,width:512,height:512};function mr(c,a){!C4&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function C2(c,a){var e=a;return a==="fa"&&m.styleDefault!==null&&(a=W()),new Promise(function(s,r){if(R("missingIconAbstract"),e==="fa"){var i=N4(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&s2[a]&&s2[a][c]){var f=s2[a][c];return s(m2(f))}mr(c,a),s(z(z({},zr),{},{icon:m.showMissingIcons&&c?R("missingIconAbstract")||{}:{}}))})}var I3=function(){},v2=m.measurePerformance&&V1&&V1.mark&&V1.measure?V1:{mark:I3,measure:I3},c1='FA "6.2.1"',Cr=function(a){return v2.mark("".concat(c1," ").concat(a," begins")),function(){return k4(a)}},k4=function(a){v2.mark("".concat(c1," ").concat(a," ends")),v2.measure("".concat(c1," ").concat(a),"".concat(c1," ").concat(a," begins"),"".concat(c1," ").concat(a," ends"))},y2={begin:Cr,end:k4},N1=function(){};function Z3(c){var a=c.getAttribute?c.getAttribute(j):null;return typeof a=="string"}function vr(c){var a=c.getAttribute?c.getAttribute(u2):null,e=c.getAttribute?c.getAttribute(d2):null;return a&&e}function Hr(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function hr(){if(m.autoReplaceSvg===!0)return S1.replace;var c=S1[m.autoReplaceSvg];return c||S1.replace}function Vr(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function Mr(c){return L.createElement(c)}function w4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?Vr:Mr:e;if(typeof c=="string")return L.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(f){r.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){r.appendChild(w4(f,{ceFn:s}))}),r}function pr(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var S1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(w4(r),e)}),e.getAttribute(j)===null&&m.keepOriginalSource){var s=L.createComment(pr(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~x2(e).indexOf(m.replacementClass))return S1.replace(a);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(l,n){return n===m.replacementClass||n.match(r)?l.toSvg.push(n):l.toNode.push(n),l},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var f=s.map(function(l){return z1(l)}).join(`
`);e.setAttribute(j,""),e.innerHTML=f}};function j3(c){c()}function y4(c,a){var e=typeof a=="function"?a:N1;if(c.length===0)e();else{var s=j3;m.mutateApproach===gs&&(s=$.requestAnimationFrame||j3),s(function(){var r=hr(),i=y2.begin("mutate");c.map(r),i(),e()})}}var A2=!1;function A4(){A2=!0}function H2(){A2=!1}var y1=null;function _3(c){if(!!D3&&!!m.observeMutations){var a=c.treeCallback,e=a===void 0?N1:a,s=c.nodeCallback,r=s===void 0?N1:s,i=c.pseudoElementsCallback,f=i===void 0?N1:i,l=c.observeMutationsRoot,n=l===void 0?L:l;y1=new D3(function(t){if(!A2){var o=W();J(t).forEach(function(C){if(C.type==="childList"&&C.addedNodes.length>0&&!Z3(C.addedNodes[0])&&(m.searchPseudoElements&&f(C.target),e(C.target)),C.type==="attributes"&&C.target.parentNode&&m.searchPseudoElements&&f(C.target.parentNode),C.type==="attributes"&&Z3(C.target)&&~ys.indexOf(C.attributeName))if(C.attributeName==="class"&&vr(C.target)){var h=B1(x2(C.target)),V=h.prefix,b=h.iconName;C.target.setAttribute(u2,V||o),b&&C.target.setAttribute(d2,b)}else Hr(C.target)&&r(C.target)})}}),E&&y1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lr(){!y1||y1.disconnect()}function ur(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),f=i[0],l=i.slice(1);return f&&l.length>0&&(s[f]=l.join(":").trim()),s},{})),e}function dr(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=B1(x2(c));return r.prefix||(r.prefix=W()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Js(r.prefix,c.innerText)||S2(r.prefix,n2(c.innerText))),!r.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function gr(c){var a=J(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return m.autoA11y&&(e?a["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||n1()):(a["aria-hidden"]="true",a.focusable="false")),a}function xr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Y3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=dr(c),s=e.iconName,r=e.prefix,i=e.rest,f=gr(c),l=t2("parseNodeAttributes",{},c),n=a.styleParser?ur(c):[];return z({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:n,attributes:f}},l)}var br=F.styles;function P4(c){var a=m.autoReplaceSvg==="nest"?Y3(c,{styleParser:!1}):Y3(c);return~a.extra.classes.indexOf(v4)?R("generateLayersText",c,a):R("generateSvgReplacementMutation",c,a)}var O=new Set;g2.map(function(c){O.add("fa-".concat(c))});Object.keys(r1[p]).map(O.add.bind(O));Object.keys(r1[u]).map(O.add.bind(O));O=o1(O);function X3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var e=L.documentElement.classList,s=function(C){return e.add("".concat(R3,"-").concat(C))},r=function(C){return e.remove("".concat(R3,"-").concat(C))},i=m.autoFetchSvg?O:g2.map(function(o){return"fa-".concat(o)}).concat(Object.keys(br));i.includes("fa")||i.push("fa");var f=[".".concat(v4,":not([").concat(j,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(j,"])")})).join(", ");if(f.length===0)return Promise.resolve();var l=[];try{l=J(c.querySelectorAll(f))}catch{}if(l.length>0)s("pending"),r("complete");else return Promise.resolve();var n=y2.begin("onTree"),t=l.reduce(function(o,C){try{var h=P4(C);h&&o.push(h)}catch(V){C4||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,C){Promise.all(t).then(function(h){y4(h,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),n(),o()})}).catch(function(h){n(),C(h)})})}function Nr(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P4(c).then(function(e){e&&y4([e],a)})}function Sr(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:z2(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:z2(r||{})),c(s,z(z({},e),{},{mask:r}))}}var kr=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?B:s,i=e.symbol,f=i===void 0?!1:i,l=e.mask,n=l===void 0?null:l,t=e.maskId,o=t===void 0?null:t,C=e.title,h=C===void 0?null:C,V=e.titleId,b=V===void 0?null:V,N=e.classes,S=N===void 0?[]:N,v=e.attributes,H=v===void 0?{}:v,M=e.styles,d=M===void 0?{}:M;if(!!a){var g=a.prefix,T=a.iconName,y=a.icon;return q1(z({type:"icon"},a),function(){return _("beforeDOMElementCreation",{iconDefinition:a,params:e}),m.autoA11y&&(h?H["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(b||n1()):(H["aria-hidden"]="true",H.focusable="false")),w2({icons:{main:m2(y),mask:n?m2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:T,transform:z(z({},B),r),symbol:f,title:h,maskId:o,titleId:b,extra:{attributes:H,styles:d,classes:S}})})}},wr={mixout:function(){return{icon:Sr(kr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=X3,e.nodeCallback=Nr,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?L:s,i=e.callback,f=i===void 0?function(){}:i;return X3(r,f)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,f=s.titleId,l=s.prefix,n=s.transform,t=s.symbol,o=s.mask,C=s.maskId,h=s.extra;return new Promise(function(V,b){Promise.all([C2(r,l),o.iconName?C2(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var S=p2(N,2),v=S[0],H=S[1];V([e,w2({icons:{main:v,mask:H},prefix:l,iconName:r,transform:n,symbol:t,maskId:C,title:i,titleId:f,extra:h,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,f=e.transform,l=e.styles,n=F1(l);n.length>0&&(r.style=n);var t;return b2(f)&&(t=R("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},yr={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return q1({type:"layer"},function(){_("beforeDOMElementCreation",{assembler:e,params:s});var f=[];return e(function(l){Array.isArray(l)?l.map(function(n){f=f.concat(n.abstract)}):f=f.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(o1(i)).join(" ")},children:f}]})}}}},Ar={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,f=s.classes,l=f===void 0?[]:f,n=s.attributes,t=n===void 0?{}:n,o=s.styles,C=o===void 0?{}:o;return q1({type:"counter",content:e},function(){return _("beforeDOMElementCreation",{content:e,params:s}),tr({content:e.toString(),title:i,extra:{attributes:t,styles:C,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(o1(l))}})})}}}},Pr={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?B:r,f=s.title,l=f===void 0?null:f,n=s.classes,t=n===void 0?[]:n,o=s.attributes,C=o===void 0?{}:o,h=s.styles,V=h===void 0?{}:h;return q1({type:"text",content:e},function(){return _("beforeDOMElementCreation",{content:e,params:s}),O3({content:e,transform:z(z({},B),i),title:l,extra:{attributes:C,styles:V,classes:["".concat(m.cssPrefix,"-layers-text")].concat(o1(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,f=s.extra,l=null,n=null;if(t4){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();l=o.width/t,n=o.height/t}return m.autoA11y&&!r&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,O3({content:e.innerHTML,width:l,height:n,transform:i,title:r,extra:f,watchable:!0})])}}},Fr=new RegExp('"',"ug"),K3=[1105920,1112319];function Tr(c){var a=c.replace(Fr,""),e=js(a,0),s=e>=K3[0]&&e<=K3[1],r=a.length===2?a[0]===a[1]:!1;return{value:n2(r?a[0]:a),isSecondary:s||r}}function Q3(c,a){var e="".concat(ds).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=J(c.children),f=i.filter(function(y){return y.getAttribute(l2)===a})[0],l=$.getComputedStyle(c,a),n=l.getPropertyValue("font-family").match(Ss),t=l.getPropertyValue("font-weight"),o=l.getPropertyValue("content");if(f&&!n)return c.removeChild(f),s();if(n&&o!=="none"&&o!==""){var C=l.getPropertyValue("content"),h=~["Sharp"].indexOf(n[2])?u:p,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(n[2])?i1[h][n[2].toLowerCase()]:ks[h][t],b=Tr(C),N=b.value,S=b.isSecondary,v=n[0].startsWith("FontAwesome"),H=S2(V,N),M=H;if(v){var d=cr(N);d.iconName&&d.prefix&&(H=d.iconName,V=d.prefix)}if(H&&!S&&(!f||f.getAttribute(u2)!==V||f.getAttribute(d2)!==M)){c.setAttribute(e,M),f&&c.removeChild(f);var g=xr(),T=g.extra;T.attributes[l2]=a,C2(H,V).then(function(y){var c2=w2(z(z({},g),{},{icons:{main:y,mask:k2()},prefix:V,iconName:M,extra:T,watchable:!0})),U=L.createElement("svg");a==="::before"?c.insertBefore(U,c.firstChild):c.appendChild(U),U.outerHTML=c2.map(function(zs){return z1(zs)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Br(c){return Promise.all([Q3(c,"::before"),Q3(c,"::after")])}function qr(c){return c.parentNode!==document.head&&!~xs.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(l2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function J3(c){if(!!E)return new Promise(function(a,e){var s=J(c.querySelectorAll("*")).filter(qr).map(Br),r=y2.begin("searchPseudoElements");A4(),Promise.all(s).then(function(){r(),H2(),a()}).catch(function(){r(),H2(),e()})})}var Dr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=J3,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?L:s;m.searchPseudoElements&&J3(r)}}},c4=!1,Rr={mixout:function(){return{dom:{unwatch:function(){A4(),c4=!0}}}},hooks:function(){return{bootstrap:function(){_3(t2("mutationObserverCallbacks",{}))},noAuto:function(){Lr()},watch:function(e){var s=e.observeMutationsRoot;c4?H2():_3(t2("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},a4=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),f=i[0],l=i.slice(1).join("-");if(f&&l==="h")return s.flipX=!0,s;if(f&&l==="v")return s.flipY=!0,s;if(l=parseFloat(l),isNaN(l))return s;switch(f){case"grow":s.size=s.size+l;break;case"shrink":s.size=s.size-l;break;case"left":s.x=s.x-l;break;case"right":s.x=s.x+l;break;case"up":s.y=s.y-l;break;case"down":s.y=s.y+l;break;case"rotate":s.rotate=s.rotate+l;break}return s},e)},Er={mixout:function(){return{parse:{transform:function(e){return a4(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=a4(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,f=e.iconWidth,l={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),C={transform:"".concat(n," ").concat(t," ").concat(o)},h={transform:"translate(".concat(f/2*-1," -256)")},V={outer:l,inner:C,path:h};return{tag:"g",attributes:z({},V.outer),children:[{tag:"g",attributes:z({},V.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:z(z({},s.icon.attributes),V.path)}]}]}}}},r2={x:0,y:0,width:"100%",height:"100%"};function e4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Ur(c){return c.tag==="g"?c.children:[c]}var Gr={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?B1(r.split(" ").map(function(f){return f.trim()})):k2();return i.prefix||(i.prefix=W()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,f=e.mask,l=e.maskId,n=e.transform,t=i.width,o=i.icon,C=f.width,h=f.icon,V=Es({transform:n,containerWidth:C,iconWidth:t}),b={tag:"rect",attributes:z(z({},r2),{},{fill:"white"})},N=o.children?{children:o.children.map(e4)}:{},S={tag:"g",attributes:z({},V.inner),children:[e4(z({tag:o.tag,attributes:z(z({},o.attributes),V.path)},N))]},v={tag:"g",attributes:z({},V.outer),children:[S]},H="mask-".concat(l||n1()),M="clip-".concat(l||n1()),d={tag:"mask",attributes:z(z({},r2),{},{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,v]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Ur(h)},d]};return s.push(g,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(H,")")},r2)}),{children:s,attributes:r}}}},$r={provides:function(a){var e=!1;$.matchMedia&&(e=$.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=z(z({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:z(z({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},f),{},{values:"1;0;1;1;0;1;"})}),s.push(l),s.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},f),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Wr={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Or=[$s,wr,yr,Ar,Pr,Dr,Rr,Er,Gr,$r,Wr];sr(Or,{mixoutsTo:w});w.noAuto;var F4=w.config,bO=w.library;w.dom;var A1=w.parse;w.findIconDefinition;w.toHtml;var Ir=w.icon;w.layer;var Zr=w.text;w.counter;function s4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?s4(Object(e),!0).forEach(function(s){k(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):s4(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function P1(c){return P1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},P1(c)}function k(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function jr(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function _r(c,a){if(c==null)return{};var e=jr(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function h2(c){return Yr(c)||Xr(c)||Kr(c)||Qr()}function Yr(c){if(Array.isArray(c))return V2(c)}function Xr(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Kr(c,a){if(!!c){if(typeof c=="string")return V2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return V2(c,a)}}function V2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Qr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.