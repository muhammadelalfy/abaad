import{Q as c}from"./quill.2b7d1cee.js";import"./quill-delta.565c40c2.js";import"./vue.7bf2bcd0.js";import{d as R,e as z,f as F,r as k,w as f,h as D,n as M}from"./@vue.ab32a142.js";/*!
 * VueQuill @vueup/vue-quill v1.1.0
 * https://vueup.github.io/vue-quill/
 * 
 * Includes quill v1.3.7
 * https://quilljs.com/
 * 
 * Copyright (c) 2023 Ahmad Luthfi Masruri
 * Released under the MIT license
 * Date: 2023-02-04T04:01:16.430Z
 */const _={essential:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{align:[]}],["blockquote","code-block","link"],[{color:[]},"clean"]],minimal:[[{header:1},{header:2}],["bold","italic","underline"],[{list:"ordered"},{list:"bullet"},{align:[]}]],full:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["link","video","image"],["clean"]]},J=R({name:"QuillEditor",inheritAttrs:!1,props:{content:{type:[String,Object],default:()=>{}},contentType:{type:String,default:"delta",validator:t=>["delta","html","text"].includes(t)},enable:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},placeholder:{type:String,required:!1},theme:{type:String,default:"snow",validator:t=>["snow","bubble",""].includes(t)},toolbar:{type:[String,Array,Object],required:!1,validator:t=>typeof t=="string"&&t!==""?t.charAt(0)==="#"?!0:Object.keys(_).indexOf(t)!==-1:!0},modules:{type:Object,required:!1},options:{type:Object,required:!1},globalOptions:{type:Object,required:!1}},emits:["textChange","selectionChange","editorChange","update:content","focus","blur","ready"],setup:(t,i)=>{z(()=>{b()}),F(()=>{o=null});let o,m;const r=k(),b=()=>{var e;if(!!r.value){if(m=w(),t.modules)if(Array.isArray(t.modules))for(const l of t.modules)c.register(`modules/${l.name}`,l.module);else c.register(`modules/${t.modules.name}`,t.modules.module);o=new c(r.value,m),d(t.content),o.on("text-change",L),o.on("selection-change",S),o.on("editor-change",E),t.theme!=="bubble"&&r.value.classList.remove("ql-bubble"),t.theme!=="snow"&&r.value.classList.remove("ql-snow"),(e=o.getModule("toolbar"))===null||e===void 0||e.container.addEventListener("mousedown",l=>{l.preventDefault()}),i.emit("ready",o)}},w=()=>{const e={};if(t.theme!==""&&(e.theme=t.theme),t.readOnly&&(e.readOnly=t.readOnly),t.placeholder&&(e.placeholder=t.placeholder),t.toolbar&&t.toolbar!==""&&(e.modules={toolbar:(()=>{if(typeof t.toolbar=="object")return t.toolbar;if(typeof t.toolbar=="string")return t.toolbar.charAt(0)==="#"?t.toolbar:_[t.toolbar]})()}),t.modules){const l=(()=>{var n,s;const u={};if(Array.isArray(t.modules))for(const q of t.modules)u[q.name]=(n=q.options)!==null&&n!==void 0?n:{};else u[t.modules.name]=(s=t.modules.options)!==null&&s!==void 0?s:{};return u})();e.modules=Object.assign({},e.modules,l)}return Object.assign({},t.globalOptions,t.options,e)},v=e=>typeof e=="object"?e.slice():e,A=e=>Object.values(e.ops).some(l=>!l.retain||Object.keys(l).length!==1);let a;const h=e=>{if(typeof a==typeof e){if(e===a)return!0;if(typeof e=="object"&&typeof a=="object")return!A(a.diff(e))}return!1},L=(e,l,n)=>{a=v(g()),h(t.content)||i.emit("update:content",a),i.emit("textChange",{delta:e,oldContents:l,source:n})},y=k(),S=(e,l,n)=>{y.value=!!(o!=null&&o.hasFocus()),i.emit("selectionChange",{range:e,oldRange:l,source:n})};f(y,e=>{e?i.emit("focus",r):i.emit("blur",r)});const E=(...e)=>{e[0]==="text-change"&&i.emit("editorChange",{name:e[0],delta:e[1],oldContents:e[2],source:e[3]}),e[0]==="selection-change"&&i.emit("editorChange",{name:e[0],range:e[1],oldRange:e[2],source:e[3]})},Q=()=>r.value,x=()=>{var e;return(e=o==null?void 0:o.getModule("toolbar"))===null||e===void 0?void 0:e.container},H=()=>{if(o)return o;throw`The quill editor hasn't been instantiated yet, 
                  make sure to call this method when the editor ready
                  or use v-on:ready="onReady(quill)" event instead.`},g=(e,l)=>t.contentType==="html"?C():t.contentType==="text"?O(e,l):o==null?void 0:o.getContents(e,l),d=(e,l="api")=>{t.contentType==="html"?j(e):t.contentType==="text"?T(e,l):o==null||o.setContents(e,l),a=v(e)},O=(e,l)=>{var n;return(n=o==null?void 0:o.getText(e,l))!==null&&n!==void 0?n:""},T=(e,l="api")=>{o==null||o.setText(e,l)},C=()=>{var e;return(e=o==null?void 0:o.root.innerHTML)!==null&&e!==void 0?e:""},j=e=>{o&&(o.root.innerHTML=e)},$=(e,l="api")=>{const n=o==null?void 0:o.clipboard.convert(e);n&&(o==null||o.setContents(n,l))},B=()=>{M(()=>{var e;!i.slots.toolbar&&o&&((e=o.getModule("toolbar"))===null||e===void 0||e.container.remove()),b()})};return f(()=>t.content,e=>{if(!o||!e||h(e))return;const l=o.getSelection();l&&M(()=>o==null?void 0:o.setSelection(l)),d(e)},{deep:!0}),f(()=>t.enable,e=>{o&&o.enable(e)}),{editor:r,getEditor:Q,getToolbar:x,getQuill:H,getContents:g,setContents:d,getHTML:C,setHTML:j,pasteHTML:$,getText:O,setText:T,reinit:B}},render(){var t,i;return[(i=(t=this.$slots).toolbar)===null||i===void 0?void 0:i.call(t),D("div",{ref:"editor",...this.$attrs})]}});export{J as Q};
