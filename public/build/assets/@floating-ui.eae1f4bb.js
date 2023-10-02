function M(t){return t.split("-")[0]}function S(t){return t.split("-")[1]}function F(t){return["top","bottom"].includes(M(t))?"x":"y"}function z(t){return t==="y"?"height":"width"}function B(t,n,e){let{reference:o,floating:i}=t;const f=o.x+o.width/2-i.width/2,s=o.y+o.height/2-i.height/2,r=F(n),c=z(r),l=o[c]/2-i[c]/2,d=M(n),a=r==="x";let u;switch(d){case"top":u={x:f,y:o.y-i.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:s};break;case"left":u={x:o.x-i.width,y:s};break;default:u={x:o.x,y:o.y}}switch(S(n)){case"start":u[r]-=l*(e&&a?-1:1);break;case"end":u[r]+=l*(e&&a?-1:1);break}return u}const it=async(t,n,e)=>{const{placement:o="bottom",strategy:i="absolute",middleware:f=[],platform:s}=e,r=await(s.isRTL==null?void 0:s.isRTL(n));if(s==null&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),f.filter(g=>{let{name:w}=g;return w==="autoPlacement"||w==="flip"}).length>1)throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`","middleware detected. This will lead to an infinite loop. Ensure only","one of either has been passed to the `middleware` array."].join(" "));let c=await s.getElementRects({reference:t,floating:n,strategy:i}),{x:l,y:d}=B(c,o,r),a=o,u={},h=0;for(let g=0;g<f.length;g++){const{name:w,fn:O}=f[g],{x:E,y:V,data:C,reset:p}=await O({x:l,y:d,initialPlacement:o,placement:a,strategy:i,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:n}});if(l=E!=null?E:l,d=V!=null?V:d,u={...u,[w]:{...u[w],...C}},h>50&&console.warn(["Floating UI: The middleware lifecycle appears to be running in an","infinite loop. This is usually caused by a `reset` continually","being returned without a break condition."].join(" ")),p&&h<=50){h++,typeof p=="object"&&(p.placement&&(a=p.placement),p.rects&&(c=p.rects===!0?await s.getElementRects({reference:t,floating:n,strategy:i}):p.rects),{x:l,y:d}=B(c,a,r)),g=-1;continue}}return{x:l,y:d,placement:a,strategy:i,middlewareData:u}};function rt(t){return{top:0,right:0,bottom:0,left:0,...t}}function st(t){return typeof t!="number"?rt(t):{top:t,right:t,bottom:t,left:t}}function I(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}const ct=Math.min,lt=Math.max;function ft(t,n,e){return lt(t,ct(n,e))}const Lt=t=>({name:"arrow",options:t,async fn(n){const{element:e,padding:o=0}=t!=null?t:{},{x:i,y:f,placement:s,rects:r,platform:c}=n;if(e==null)return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."),{};const l=st(o),d={x:i,y:f},a=F(s),u=S(s),h=z(a),g=await c.getDimensions(e),w=a==="y"?"top":"left",O=a==="y"?"bottom":"right",E=r.reference[h]+r.reference[a]-d[a]-r.floating[h],V=d[a]-r.reference[a],C=await(c.getOffsetParent==null?void 0:c.getOffsetParent(e));let p=C?a==="y"?C.clientHeight||0:C.clientWidth||0:0;p===0&&(p=r.floating[h]);const et=E/2-V/2,H=l[w],j=p-g[h]-l[O],T=p/2-g[h]/2+et,$=ft(H,T,j),ot=(u==="start"?l[w]:l[O])>0&&T!==$&&r.reference[h]<=r.floating[h]?T<H?H-T:j-T:0;return{[a]:d[a]-ot,data:{[a]:$,centerOffset:T-$}}}});async function at(t,n){const{placement:e,platform:o,elements:i}=t,f=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=M(e),r=S(e),c=F(e)==="x",l=["left","top"].includes(s)?-1:1,d=f&&c?-1:1,a=typeof n=="function"?n(t):n;let{mainAxis:u,crossAxis:h,alignmentAxis:g}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return r&&typeof g=="number"&&(h=r==="end"?g*-1:g),c?{x:h*d,y:u*l}:{x:u*l,y:h*d}}const Ot=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){const{x:e,y:o}=n,i=await at(n,t);return{x:e+i.x,y:o+i.y,data:i}}}};function q(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function x(t){if(t==null)return window;if(!q(t)){const n=t.ownerDocument;return n&&n.defaultView||window}return t}function b(t){return x(t).getComputedStyle(t)}function y(t){return q(t)?"":t?(t.nodeName||"").toLowerCase():""}function G(){const t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(n=>n.brand+"/"+n.version).join(" "):navigator.userAgent}function m(t){return t instanceof x(t).HTMLElement}function R(t){return t instanceof x(t).Element}function ut(t){return t instanceof x(t).Node}function D(t){if(typeof ShadowRoot>"u")return!1;const n=x(t).ShadowRoot;return t instanceof n||t instanceof ShadowRoot}function P(t){const{overflow:n,overflowX:e,overflowY:o}=b(t);return/auto|scroll|overlay|hidden/.test(n+o+e)}function dt(t){return["table","td","th"].includes(y(t))}function J(t){const n=/firefox/i.test(G()),e=b(t);return e.transform!=="none"||e.perspective!=="none"||e.contain==="paint"||["transform","perspective"].includes(e.willChange)||n&&e.willChange==="filter"||n&&(e.filter?e.filter!=="none":!1)}function K(){return!/^((?!chrome|android).)*safari/i.test(G())}const U=Math.min,L=Math.max,N=Math.round;function A(t,n,e){var o,i,f,s;n===void 0&&(n=!1),e===void 0&&(e=!1);const r=t.getBoundingClientRect();let c=1,l=1;n&&m(t)&&(c=t.offsetWidth>0&&N(r.width)/t.offsetWidth||1,l=t.offsetHeight>0&&N(r.height)/t.offsetHeight||1);const d=R(t)?x(t):window,a=!K()&&e,u=(r.left+(a&&(o=(i=d.visualViewport)==null?void 0:i.offsetLeft)!=null?o:0))/c,h=(r.top+(a&&(f=(s=d.visualViewport)==null?void 0:s.offsetTop)!=null?f:0))/l,g=r.width/c,w=r.height/l;return{width:g,height:w,top:h,right:u+g,bottom:h+w,left:u,x:u,y:h}}function v(t){return((ut(t)?t.ownerDocument:t.document)||window.document).documentElement}function W(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Q(t){return A(v(t)).left+W(t).scrollLeft}function ht(t){const n=A(t);return N(n.width)!==t.offsetWidth||N(n.height)!==t.offsetHeight}function gt(t,n,e){const o=m(n),i=v(n),f=A(t,o&&ht(n),e==="fixed");let s={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(o||!o&&e!=="fixed")if((y(n)!=="body"||P(i))&&(s=W(n)),m(n)){const c=A(n,!0);r.x=c.x+n.clientLeft,r.y=c.y+n.clientTop}else i&&(r.x=Q(i));return{x:f.left+s.scrollLeft-r.x,y:f.top+s.scrollTop-r.y,width:f.width,height:f.height}}function Z(t){return y(t)==="html"?t:t.assignedSlot||t.parentNode||(D(t)?t.host:null)||v(t)}function X(t){return!m(t)||b(t).position==="fixed"?null:t.offsetParent}function pt(t){let n=Z(t);for(D(n)&&(n=n.host);m(n)&&!["html","body"].includes(y(n));){if(J(n))return n;{const e=n.parentNode;n=D(e)?e.host:e}}return null}function k(t){const n=x(t);let e=X(t);for(;e&&dt(e)&&b(e).position==="static";)e=X(e);return e&&(y(e)==="html"||y(e)==="body"&&b(e).position==="static"&&!J(e))?n:e||pt(t)||n}function _(t){if(m(t))return{width:t.offsetWidth,height:t.offsetHeight};const n=A(t);return{width:n.width,height:n.height}}function wt(t){let{rect:n,offsetParent:e,strategy:o}=t;const i=m(e),f=v(e);if(e===f)return n;let s={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if((i||!i&&o!=="fixed")&&((y(e)!=="body"||P(f))&&(s=W(e)),m(e))){const c=A(e,!0);r.x=c.x+e.clientLeft,r.y=c.y+e.clientTop}return{...n,x:n.x-s.scrollLeft+r.x,y:n.y-s.scrollTop+r.y}}function mt(t,n){const e=x(t),o=v(t),i=e.visualViewport;let f=o.clientWidth,s=o.clientHeight,r=0,c=0;if(i){f=i.width,s=i.height;const l=K();(l||!l&&n==="fixed")&&(r=i.offsetLeft,c=i.offsetTop)}return{width:f,height:s,x:r,y:c}}function yt(t){var n;const e=v(t),o=W(t),i=(n=t.ownerDocument)==null?void 0:n.body,f=L(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=L(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let r=-o.scrollLeft+Q(t);const c=-o.scrollTop;return b(i||e).direction==="rtl"&&(r+=L(e.clientWidth,i?i.clientWidth:0)-f),{width:f,height:s,x:r,y:c}}function tt(t){const n=Z(t);return["html","body","#document"].includes(y(n))?t.ownerDocument.body:m(n)&&P(n)?n:tt(n)}function nt(t,n){var e;n===void 0&&(n=[]);const o=tt(t),i=o===((e=t.ownerDocument)==null?void 0:e.body),f=x(o),s=i?[f].concat(f.visualViewport||[],P(o)?o:[]):o,r=n.concat(s);return i?r:r.concat(nt(s))}function xt(t,n){const e=n.getRootNode==null?void 0:n.getRootNode();if(t.contains(n))return!0;if(e&&D(e)){let o=n;do{if(o&&t===o)return!0;o=o.parentNode||o.host}while(o)}return!1}function bt(t,n){const e=A(t,!1,n==="fixed"),o=e.top+t.clientTop,i=e.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function Y(t,n,e){return n==="viewport"?I(mt(t,e)):R(n)?bt(n,e):I(yt(v(t)))}function vt(t){const n=nt(t),o=["absolute","fixed"].includes(b(t).position)&&m(t)?k(t):t;return R(o)?n.filter(i=>R(i)&&xt(i,o)&&y(i)!=="body"):[]}function At(t){let{element:n,boundary:e,rootBoundary:o,strategy:i}=t;const s=[...e==="clippingAncestors"?vt(n):[].concat(e),o],r=s[0],c=s.reduce((l,d)=>{const a=Y(n,d,i);return l.top=L(a.top,l.top),l.right=U(a.right,l.right),l.bottom=U(a.bottom,l.bottom),l.left=L(a.left,l.left),l},Y(n,r,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}const Tt={getClippingRect:At,convertOffsetParentRelativeRectToViewportRelativeRect:wt,isElement:R,getDimensions:_,getOffsetParent:k,getDocumentElement:v,getElementRects:t=>{let{reference:n,floating:e,strategy:o}=t;return{reference:gt(n,k(e),o),floating:{..._(e),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>b(t).direction==="rtl"},Et=(t,n,e)=>it(t,n,{platform:Tt,...e});export{Lt as a,Et as c,Ot as o};
