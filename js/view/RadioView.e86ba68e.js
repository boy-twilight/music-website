import{h as e,z as s}from"../element-plus/element-plus.79622da4.js";import{G as a,ax as i,Z as t,d as o,P as l,c as r,a as n,F as d,a7 as p,U as c,u as m,o as u,M as v,ay as _,az as j,z as y}from"../@vue/@vue.7ad02ad1.js";import{u as f}from"../vue-router/vue-router.53ff932e.js";import{u as h,Z as g,$ as x,m as k,h as w,a0 as C,_ as z}from"../../static/index-14646868.js";/* empty css                                                                                                                     */import{A as E}from"../index/index.24857fb6.js";import{L as b}from"../index/index.7567e585.js";/* empty css                                                                                                                     */import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";const R=["infinite-scroll-disabled"],S=(e=>(_("data-v-692d55d4"),e=e(),j(),e))((()=>n("h4",{class:"r-title"},"精彩推荐",-1))),U={class:"banner"},I=z(a({__name:"RadioView",setup(a){i((e=>({"514f5e50":m(_),"70a0684e":m(j),"728fa805":m(z)})));const{boxShadow:_,fontColor:j,contentHeight:z}=h(),I=f(),L=t([]),P=t([]),Z=t([]),q=o(0),A=y("firstLoading"),D=o(!1),F=o(!1),G=async()=>{const e=await C(P[q.value].id),{djRadios:s}=e;Z.push([]),s.forEach((e=>{const{picUrl:s,name:a,id:i,playCount:t}=e;Z[q.value].push({name:a,id:i,image:s,playCount:t,creator:{nickname:"",avatarUrl:""},tag:[],description:""})})),D.value=!1,F.value=!1},H=()=>{D.value=!0,F.value=!0,q.value++,q.value<P.length?setTimeout((()=>{G()}),1e3):(F.value=!1,k(w.SUCCESS,"已经到达底部！"))};return(async()=>{A.value=!0;try{(await Promise.all([g(),x()])).forEach(((e,s)=>{if(0==s){const{data:s}=e;s.forEach((e=>{const{targetId:s,pic:a}=e;L.push({id:s,pic:a})}))}else if(1==s){const{categories:s}=e;s.forEach((e=>{const{id:s,name:a}=e;P.push({id:s,name:a})}))}}))}catch(e){k(w.ERROR,e.message)}await G(),A.value=!1})(),(a,i)=>{const t=e,o=s;return l((u(),r("div",{class:"radio-container scroll-container","infinite-scroll-distance":"2","infinite-scroll-immediate":!1,"infinite-scroll-disabled":D.value,style:{overflow:"scroll"}},[S,n("div",U,[(u(!0),r(d,null,p(L,(e=>(u(),v(t,{key:e.id,src:e.pic,onClick:s=>{return a=e.id,void I.push({name:"playlist",query:{id:a,type:"radio"}});var a}},null,8,["src","onClick"])))),128))]),(u(!0),r(d,null,p(Z,((e,s)=>(u(),r("div",{class:"radio",key:P[s].id},[c(m(E),{title:P[s].name,playlists:e,type:"radio"},null,8,["title","playlists"])])))),128)),c(m(b),{"is-loading":F.value},null,8,["is-loading"])],8,R)),[[o,H]])}}}),[["__scopeId","data-v-692d55d4"]]);export{I as default};
