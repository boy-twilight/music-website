import{x as e}from"../element-plus/element-plus.70abbed3.js";import{G as a,ax as s,d as i,Z as t,i as l,c as o,P as n,V as r,U as c,u as d,a as m,T as p,R as u,M as v,O as g,z as _,o as h,F as f,a7 as j,ay as y,az as x}from"../@vue/@vue.7ad02ad1.js";import{b}from"../vue-router/vue-router.53ff932e.js";import{j as w,g as L,R,v as z,m as E,i as C,T as k,U as O,V as S,W as P,w as A,f as I,h as T,C as D,P as G,s as M,_ as U}from"../../static/index-c54fb4ae.js";import{M as N}from"../index/index.8ae2f87b.js";import{P as V,_ as q}from"../index.vue_vue_type_style_index_0_scoped_841f6d57_lang/index.vue_vue_type_style_index_0_scoped_841f6d57_lang.e971174d.js";import{A as F}from"../index/index.c25428da.js";/* empty css                                                                                                                     */import{A as B}from"../index/index.3ab33549.js";import{O as H}from"../index/index.684680ab.js";import{L as J}from"../index/index.7682c408.js";import{N as K}from"../index/index.8fb16df1.js";import{T as W}from"../index/index.f2ebda2c.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";/* empty css                                                                                                                     */const Z={class:"artist-detail-container scroll-container"},Q={class:"header"},X=["src"],Y={class:"right"},$={class:"name"},ee={class:"info"},ae={key:0},se=(e=>(y("data-v-389c9663"),e=e(),x(),e))((()=>m("p",{class:"job"},"职业：歌手、词曲创作者",-1))),ie={class:"fans"},te={class:"header-operation"},le={class:"content"},oe={class:"detail"},ne={class:"desc"},re=U(a({__name:"ArtistDetailView",setup(a){s((e=>({d8c2bc96:d(y),d8e1fb5e:d(x),"598ef45e":d(ce),"1d3e342c":d(U),"4cbe95d9":d(re)})));const{fontColor:y,fontBlack:x,boxShadow:U,themeColor:re,fontGray:ce}=_("theme"),de=w(),me=b(),pe=me.query.id+"",ue=me.query.score+"",ve=i(!1),ge=_("firstLoading"),_e=t([!1,!1]),he=t({name:"",score:ue,id:pe,avatar:"",alias:[]}),fe=t([]),je=t([]),ye=l((()=>new Map(je.map(((e,a)=>[e.id,a]))))),xe=i(1),be=i(30),we=l((()=>je.length)),Le=l((()=>je.slice((xe.value-1)*be.value,xe.value*be.value))),Re=t([]),ze=t([]),Ee=i(!1),Ce=e=>{xe.value=e},ke=e=>{Ee.value=e},Oe=e=>{Ee.value=e},Se=()=>{M("我有一个宝藏歌手推荐给你："+he.name+"，地址：https://www.liyinchao.cloud"+me.fullPath)},Pe=e=>{"album"==e&&0==ze.length?L((async()=>{try{const e=await R(pe),{hotAlbums:a}=e;a.forEach((e=>{const{picUrl:a,name:s,publishTime:i}=e;ze.push({name:s,id:e.id,cover:a,publishTime:z(i),artistId:pe+""})}))}catch(e){E(C.ERROR,e.message)}_e[0]=0==ze.length,ve.value=!1}),ve):"mv"==e&&0==Re.length?L((async()=>{try{const e=await k(pe),{mvs:a}=e;a.forEach((e=>{const{id:a,name:s,artistName:i,imgurl16v9:t,playCount:l}=e;Re.push({id:a,name:s,artist:i,image:t,playCount:l})}))}catch(e){E(C.ERROR,e.message)}_e[1]=0==Re.length,ve.value=!1}),ve):"detail"==e&&0==fe.length&&L((async()=>{try{const e=await O(pe),{introduction:a}=e;a.forEach((e=>{fe.push({title:e.ti,content:e.txt})}))}catch(e){E(C.ERROR,e.message)}ve.value=!1}),ve)};return L((async()=>{try{(await Promise.all([S(pe),P(pe,1e3)])).forEach((async(e,a)=>{if(0==a){const{artist:a}=e,{name:s,alias:i,picUrl:t,briefDesc:l}=a;he.name=s,he.alias=i,he.avatar=t,he.briefDesc=l,de.initLoveStatus(he,de.loveSingerId)}else if(1==a){const{songs:a}=e,s=a.map((e=>e.id)).join(","),i=await A(s),{songs:t}=i;t.forEach((e=>{I(je,e)})),de.initLoveMusic(je),T(je),ge.value=!1}}))}catch(e){E(C.ERROR,e.message)}}),ge),(a,s)=>{var i,t;const l=e;return h(),o("div",Z,[n(c(d(H),{songs:d(Le),"song-id-mapper":d(ye),onCloseSelect:ke},null,8,["songs","song-id-mapper"]),[[r,Ee.value]]),n(m("div",Q,[m("img",{src:he.avatar,class:"left"},null,8,X),m("div",Y,[m("h4",$,p(he.name),1),m("div",ee,[0!=(null==(i=he.alias)?void 0:i.length)?(h(),o("p",ae," 英文名："+p(null==(t=he.alias)?void 0:t.join("、")),1)):u("",!0),se]),m("span",ie,"粉丝数："+p(he.score),1),m("div",te,[c(d(V),{songs:d(Le)},null,8,["songs"]),c(d(D),{name:he.isLove?"取消关注":"关注",icon:he.isLove?"":"","icon-style":he.isLove?"color:#ff6a6a;":"",onClick:s[0]||(s[0]=e=>d(de).addLove(he,d(de).loveSinger,d(de).loveSingerId))},null,8,["name","icon","icon-style"]),Ee.value?u("",!0):(h(),v(d(N),{key:0,"share-to":Se,onOpenSelect:Oe}))])])],512),[[r,!Ee.value]]),n(m("div",le,[c(d(W),{active:"hot",onGetActive:Pe},{content:g((()=>[c(l,{label:"精选",name:"hot"},{default:g((()=>[c(d(q),{songs:d(Le),"page-size":be.value,"song-id-mapper":d(ye)},null,8,["songs","page-size","song-id-mapper"]),n(c(d(G),{"cur-page":xe.value,"page-size":be.value,total:d(we),onPageChange:Ce},null,8,["cur-page","page-size","total"]),[[r,be.value<d(we)]])])),_:1}),c(l,{label:"专辑",name:"album"},{default:g((()=>[n(c(d(K),{text:"歌手暂无专辑",size:280},null,512),[[r,_e[0]]]),c(d(J),{isLoading:ve.value},null,8,["isLoading"]),n(c(d(F),{albums:ze,"show-pagination":!0},null,8,["albums"]),[[r,!_e[0]]])])),_:1}),c(l,{label:"视频",name:"mv"},{default:g((()=>[n(c(d(K),{text:"歌手暂无视频",size:280},null,512),[[r,_e[1]]]),c(d(J),{isLoading:ve.value},null,8,["isLoading"]),n(c(d(B),{mvs:Re,"show-pagination":!0},null,8,["mvs"]),[[r,!_e[1]]])])),_:1}),c(l,{label:"详情",name:"detail"},{default:g((()=>[c(d(J),{isLoading:ve.value},null,8,["isLoading"]),m("div",oe,[m("p",ne,p(he.briefDesc),1),(h(!0),o(f,null,j(fe,(e=>n((h(),o("div",{key:e.title},[m("h4",null,p(e.title),1),m("p",null,p(e.content),1)])),[[r,fe.length>0]]))),128))])])),_:1})])),_:1})],512),[[r,!Ee.value]])])}}}),[["__scopeId","data-v-389c9663"]]);export{re as default};
