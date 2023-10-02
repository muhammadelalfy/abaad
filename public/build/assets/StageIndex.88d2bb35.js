import{$ as b}from"./jquery.f931fcee.js";import{_ as A,C as L}from"./app.ca0dd7db.js";import{u as S}from"./vue-toastification.f8d70964.js";import{S as c}from"./stages.api.5c5bdb05.js";import"./vue.7bf2bcd0.js";import{a5 as r,o as m,Q as D,R as f,X as a,a as t,V as E,W as l,r as R,a1 as T,e as N,c as v,U as k,F as $,a8 as Q}from"./@vue.ab32a142.js";import{Q as V}from"./@vueup.fdb4c0f7.js";import"./axios.04e16fa0.js";import"./lodash.4aca12d0.js";import"./vue-router.2be6d445.js";import"./js-cookie.31874410.js";import"./pinia.a7a730fe.js";import"./nprogress.e46cbde5.js";import"./element-plus.f4fb2d76.js";import"./lodash-es.2e433212.js";import"./@vueuse.4ac49989.js";import"./@element-plus.6e503c7c.js";import"./@ctrl.82a509e0.js";import"./dayjs.d96dc93a.js";import"./async-validator.1c690774.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.eae1f4bb.js";import"./vue-i18n.0ab86f4b.js";import"./@intlify.20ef3030.js";import"./js-base64.79f56a98.js";import"./pinia-plugin-persistedstate.f4ca662e.js";import"./vue-sweetalert2.891f877f.js";import"./@fortawesome.c9809c2b.js";import"./datatables.net-bs5.e18c8d11.js";import"./datatables.net.c69c83a2.js";import"./datatables.net-responsive-bs5.449cdb0d.js";import"./datatables.net-responsive.2a10a1b3.js";import"./jszip.2c79a5b0.js";import"./pdfmake.45c49c34.js";import"./datatables.net-buttons-bs5.1ab1a926.js";import"./datatables.net-buttons.5f6c1075.js";import"./quill.2b7d1cee.js";import"./quill-delta.565c40c2.js";import"./fast-diff.40237be0.js";import"./lodash.clonedeep.14434a6c.js";import"./lodash.isequal.30baf809.js";const q={name:"StageForm",data(){},props:{id:{type:String,default:"MainAddModal"},ariaLabelledby:String,dataBsBackdrop:String,dataBskeyboard:String,modalDialogScrollable:Boolean,modalDialogCentered:Boolean,modalLg:Boolean,modalFullscreen:Boolean,stage:{type:Object},title:{type:String,default:"pages.add_stage"}},methods:{clearForm(){this.clearErrors(),this.resetForm(this.stage)},update(){this.submitFormDisabled=!0,c.update(this.stage).then(({data:e})=>{S().success(this.$t("messages.success")),this.submitFormDisabled=!1,b("#MainAddModal").modal("hide"),this.afterModalUpdateActions(this.stage,this.$parent.stages,e.data,this.stage.id)}).catch(e=>{console.log(e),this.formErrors=e.response.data.errors})},add(){this.submitFormDisabled=!0,c.store(this.stage).then(({data:e})=>{S().success(this.$t("messages.success")),this.submitFormDisabled=!1,b("#MainAddModal").modal("hide"),this.afterModalAddActions(this.stage,this.$parent.stages,e.data)}).catch(e=>{this.formErrors=e.response.data.errors})},submit(){this.stage.id===void 0?this.add():this.update()}}},z={class:"mb-3"},U={class:"form-label"},j={class:"ms-1 text-grayClr"},O={class:"mb-3"},P={class:"form-label"},W={class:"ms-1 text-grayClr"};function X(e,o,s,p,y,n){const u=r("form-input"),g=r("FormQuillEditor"),h=r("form-validation-errors"),F=r("form-modal");return m(),D(F,{id:s.id,"aria-labelledby":s.ariaLabelledby,"modal-dialog-centered":s.modalDialogCentered,"modal-lg":s.modalLg,onClearForm:n.clearForm,onSubmit:n.submit,buttonDisabled:e.submitFormDisabled,title:s.title},{default:f(()=>[a(u,{label:"pages.stage_ar",type:"text",model:s.stage.name,name:"ar",errors:e.formErrors,error_key:"name.ar",onClearErrors:o[0]||(o[0]=d=>e.clearInput("name.ar"))},null,8,["model","errors"]),a(u,{label:"pages.stage_en",type:"text",model:s.stage.name,name:"en",errors:e.formErrors,error_key:"name.en",onClearErrors:o[1]||(o[1]=d=>e.clearInput("name.en"))},null,8,["model","errors"]),t("div",z,[t("label",U,[E(l(e.$t("pages.desc"))+" (AR) ",1),t("span",j,"( "+l(e.$t("pages.optional"))+" )",1)]),a(g,{model:s.stage.description,name:"ar",onClick:o[2]||(o[2]=d=>e.clearInput("description.ar"))},null,8,["model"]),a(h,{errors:e.formErrors,name:"description.ar"},null,8,["errors"])]),t("div",O,[t("label",P,[E(l(e.$t("pages.desc"))+" (EN) ",1),t("span",W,"( "+l(e.$t("pages.optional"))+" )",1)]),a(g,{model:s.stage.description,name:"en",onClick:o[3]||(o[3]=d=>e.clearInput("description.en"))},null,8,["model"]),a(h,{errors:e.formErrors,name:"description.en"},null,8,["errors"])])]),_:1},8,["id","aria-labelledby","modal-dialog-centered","modal-lg","onClearForm","onSubmit","buttonDisabled","title"])}const G=A(q,[["render",X],["__file","E:/Roqay/Rasekhon/rasekhon/resources/app/views/settings/stages/StageForm.vue"]]),H={components:{Card:L,QuillEditor:V,StageForm:G},setup(){const e=R(!0),o=T({name:{ar:"",en:""},description:{ar:"",en:""}});return N(()=>{b("#modal-btn").on("click",function(){e.value=!0})}),{isAdd:e,stage:o}},methods:{toggle(e={}){c.changeStatus(e).then(o=>{S().success(o.data.message)}).catch(o=>{console.log(o)})},delStage(e,o){c.delete(e).then(s=>{this.stages.splice(o,1),S().success(s.data.message)})},getStages(e=1){this.filters.page=e,c.list(this.filters).then(({data:o})=>{this.stages=o.data,this.pagination=o.meta}).catch(o=>{console.log(o)})},groupForm(e={}){e.id?(this.title="pages.edit_country",this.stage=_.cloneDeep(e)):this.title="pages.add_country",b("#MainAddModal").modal("show")}},created(){this.getStages()},data(){return{statusAction:{status:!1},filters:{page:1},stages:[]}}},J={id:"formFilter",class:"collapse multi-collapse"},K=t("th",null,"#",-1),Y={class:"btn-list d-inline-flex"},Z=["title"],x=["onClick"];function ee(e,o,s,p,y,n){const u=r("filters"),g=r("card"),h=r("form-switcher"),F=r("font-awesome-icon"),d=r("delete-button"),B=r("DataTable"),w=r("Card"),I=r("StageForm");return m(),v($,null,[t("div",J,[a(g,null,{body:f(()=>[a(u,{onSubmit:n.getStages,model:y.filters},null,8,["onSubmit","model"])]),_:1})]),a(w,{class:"pt-3"},{default:f(()=>[a(B,null,{default:f(()=>[t("thead",null,[t("tr",null,[K,t("th",null,l(e.$t("pages.name")),1),t("th",null,l(e.$t("pages.desc")),1),t("th",null,l(e.$t("pages.status")),1),t("th",null,l(e.$t("global.actions")),1)])]),t("tbody",null,[(m(!0),v($,null,Q(y.stages,(i,C)=>(m(),v("tr",{key:i.id},[t("td",null,l(C+1),1),t("td",null,l(i.name_localized),1),t("td",null,[t("p",null,l(i.description_localized),1)]),t("td",null,[a(h,{id:"status",model:i,name:"status",errors:e.formErrors,onClearErrors:e.clearInput,onToggle:M=>n.toggle(i)},null,8,["model","errors","onClearErrors","onToggle"])]),t("td",null,[t("div",Y,[t("div",{"data-bs-toggle":"tooltip","data-bs-placement":"top",title:e.$t("forms.edit")},[t("button",{type:"button",class:"btn btn-light-secondary text-white me-1","data-bs-toggle":"modal","data-bs-target":"#MainAddModal",onClick:M=>{p.isAdd=!1,n.groupForm(i)}},[a(F,{icon:"fa-solid fa-pen-to-square"})],8,x)],8,Z),e.hasPermission("delete","Stage")?(m(),D(d,{key:0,onDelModel:M=>n.delStage(i,C)},null,8,["onDelModel"])):k("v-if",!0)])])]))),128))])]),_:1})]),_:1}),k(" Modal "),a(I,{stage:p.stage,showButton:!1,title:p.isAdd?e.$t("pages.add_stage"):e.$t("pages.edit_stage"),id:"MainAddModal","aria-labelledby":"MainAddModalLabel","modal-dialog-centered":!0,"modal-lg":!0},null,8,["stage","title"])],64)}const Pe=A(H,[["render",ee],["__file","E:/Roqay/Rasekhon/rasekhon/resources/app/views/settings/stages/StageIndex.vue"]]);export{Pe as default};
