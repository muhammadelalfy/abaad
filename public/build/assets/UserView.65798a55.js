import{h as _,j as m}from"./element-plus.f4fb2d76.js";import"./vue.7bf2bcd0.js";import{U as p}from"./user.api.fb936cc2.js";import{_ as h}from"./app.ca0dd7db.js";import{r as u,a5 as g,o as f,c as b,a as s,W as t,X as a,R as i,F as y,V as v}from"./@vue.ab32a142.js";import"./lodash-es.2e433212.js";import"./@vueuse.4ac49989.js";import"./@element-plus.6e503c7c.js";import"./@ctrl.82a509e0.js";import"./dayjs.d96dc93a.js";import"./axios.04e16fa0.js";import"./async-validator.1c690774.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.eae1f4bb.js";import"./jquery.f931fcee.js";import"./lodash.4aca12d0.js";import"./vue-router.2be6d445.js";import"./js-cookie.31874410.js";import"./pinia.a7a730fe.js";import"./nprogress.e46cbde5.js";import"./vue-toastification.f8d70964.js";import"./vue-i18n.0ab86f4b.js";import"./@intlify.20ef3030.js";import"./js-base64.79f56a98.js";import"./pinia-plugin-persistedstate.f4ca662e.js";import"./vue-sweetalert2.891f877f.js";import"./@fortawesome.c9809c2b.js";import"./datatables.net-bs5.e18c8d11.js";import"./datatables.net.c69c83a2.js";import"./datatables.net-responsive-bs5.449cdb0d.js";import"./datatables.net-responsive.2a10a1b3.js";import"./jszip.2c79a5b0.js";import"./pdfmake.45c49c34.js";import"./datatables.net-buttons-bs5.1ab1a926.js";import"./datatables.net-buttons.5f6c1075.js";import"./@vueup.fdb4c0f7.js";import"./quill.2b7d1cee.js";import"./quill-delta.565c40c2.js";import"./fast-diff.40237be0.js";import"./lodash.clonedeep.14434a6c.js";import"./lodash.isequal.30baf809.js";const w={data(){return{filters:{page:1},pagination:{},user:{},activeName:u("1")}},methods:{getUser(){p.get(this.$route.params.id,null,null).then(({data:o})=>{console.log(o),this.user=o.data}).catch(o=>{console.log(o)})}},mounted(){this.getUser()}},k={class:"page-header inner"},x={class:"d-flex flex-column header-bg justify-content-center text-white w-100 p-4"},C=["src"],G={class:"d-flex align-items-center"},V={class:"flex-shrink-0"},$=["src"],N={class:"flex-grow-1 ms-3"},U={class:"mb-2"},B={class:"d-block fw-light mb-3"},E={class:"row"},j={class:"col-md-6 mb-3"},q={class:"text-grayClr"},D={class:"fs-14 fw-bold text-darkGray"},R={class:"col-md-6 mb-3"},z={class:"text-grayClr"},F={class:"fs-14 fw-bold text-darkGray"},P={class:"col-md-6 mb-3"},A={class:"text-grayClr"},I={class:"fs-14 fw-bold text-darkGray"},S={class:"col-md-6 mb-3"},T={class:"text-grayClr"},W={class:"fs-14 fw-bold text-darkGray"},X={class:"col-md-6 mb-3"},H={class:"text-grayClr"},J={class:"fs-14 fw-bold text-darkGray"},K={class:"col-md-6 mb-3"},L={class:"text-grayClr"},M={class:"fs-14 fw-bold text-darkGray"},O={class:"col-md-6 mb-3"},Q={class:"text-grayClr"},Y={class:"fs-14 fw-bold text-darkGray"},Z={class:"col-md-6 mb-3"},ss={class:"text-grayClr"},ts={class:"fs-14 fw-bold text-darkGray"},os={class:"row"},es={class:"col-md-6 mb-3"},as={class:"text-grayClr"},is={class:"fs-14 fw-bold text-darkGray"},rs={class:"col-md-6 mb-3"},ls={class:"text-grayClr"},ns={class:"fs-14 fw-bold text-darkGray"},cs={class:"col-md-6 mb-3"},ds={class:"text-grayClr"},_s={class:"fs-14 fw-bold text-darkGray"},ms={class:"col-md-6 mb-3"},ps={class:"text-grayClr"},hs={class:"fs-14 fw-bold text-darkGray"},us={class:"row"},gs={class:"col-md-6 mb-3"},fs={class:"text-grayClr"},bs=s("span",{class:"fs-14 fw-bold text-darkGray"},"******",-1);function ys(o,l,vs,ws,e,ks){const n=g("router-link"),r=_,c=m;return f(),b(y,null,[s("div",k,[s("div",x,[s("img",{class:"trans-180Deg",alt:"bg",src:`${o.publicPath}/assets/images/user_bg.png`},null,8,C),s("div",G,[s("div",V,[s("img",{class:"user-img position-relative",alt:"user image",src:`${o.publicPath}/assets/images/girl.svg`},null,8,$)]),s("div",N,[s("h5",U,t(e.user.first_name),1),s("span",B,t(e.user.main_job),1),a(n,{to:o.$route.meta.addNewBtn.name,class:"btn ripple btn-babyblue text-white px-4 fw-bold"},{default:i(()=>[v(t(o.$t("pages.edit_information")),1)]),_:1},8,["to"])])])])]),a(c,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=d=>e.activeName=d),accordion:""},{default:i(()=>[a(r,{title:o.$t("pages.user_main_info"),name:"1",class:"mb-3"},{default:i(()=>[s("div",E,[s("div",j,[s("h6",q,t(o.$t("pages.dob")),1),s("span",D,t(e.user.birth_date),1)]),s("div",R,[s("h6",z,t(o.$t("pages.national_iD")),1),s("span",F,t(e.user.national_id),1)]),s("div",P,[s("h6",A,t(o.$t("pages.type")),1),s("span",I,t(e.user.gender_localized),1)]),s("div",S,[s("h6",T,t(o.$t("pages.nationality")),1),s("span",W,t(e.user.nationality),1)]),s("div",X,[s("h6",H,t(o.$t("pages.email")),1),s("span",J,t(e.user.email),1)]),s("div",K,[s("h6",L,t(o.$t("pages.email_status")),1),s("span",M,t(e.user.email_status),1)]),s("div",O,[s("h6",Q,t(o.$t("pages.country")),1),s("span",Y,t(e.user.country),1)]),s("div",Z,[s("h6",ss,t(o.$t("pages.educational_qualification")),1),s("span",ts,t(e.user.qualifications),1)])])]),_:1},8,["title"]),a(r,{title:o.$t("pages.address_info"),name:"2",class:"mb-3"},{default:i(()=>[s("div",os,[s("div",es,[s("h6",as,t(o.$t("pages.phone")),1),s("span",is,t(e.user.phone),1)]),s("div",rs,[s("h6",ls,t(o.$t("pages.phone_status")),1),s("span",ns,t(e.user.phone_status),1)]),s("div",cs,[s("h6",ds,t(o.$t("pages.lang")),1),s("span",_s,t(e.user.lang_localized),1)]),s("div",ms,[s("h6",ps,t(o.$t("pages.status")),1),s("span",hs,t(e.user.status),1)])])]),_:1},8,["title"]),a(r,{title:o.$t("pages.password"),name:"3",class:"mb-3"},{default:i(()=>[s("div",us,[s("div",gs,[s("h6",fs,t(o.$t("pages.password")),1),bs])])]),_:1},8,["title"])]),_:1},8,["modelValue"])],64)}const mt=h(w,[["render",ys],["__file","E:/Roqay/Rasekhon/rasekhon/resources/app/views/users/UserView.vue"]]);export{mt as default};