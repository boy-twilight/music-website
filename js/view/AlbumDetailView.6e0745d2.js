import{g as s,u as a}from"../element-plus/element-plus.372e8740.js";import{G as e,ax as o,Z as t,i as l,d as i,c as n,P as r,V as m,U as p,u,a as c,T as d,M as v,R as f,O as g,o as h,S as b,z as j}from"../@vue/@vue.7ad02ad1.js";import{b as y}from"../vue-router/vue-router.47595bf3.js";import{g as _,a as A,b as T,H as w,o as L,e as B,d as x,L as z,i as O,j as R,s as S,_ as I}from"../../assets/index-eee5912f.js";import{P as M}from"../PlayButton/PlayButton.3bfeccdc.js";import{D as k}from"../DecoratedButton/DecoratedButton.63164119.js";import{M as D}from"../MoreButton/MoreButton.b22f303f.js";import{T as P}from"../Tab/Tab.6544de92.js";import{_ as C}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.4dc0a6b7.js";import{O as E}from"../OnlineBatch/OnlineBatch.2f1f9eeb.js";import{A as G}from"../Albums/Albums.e3fed02e.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";const U={class:"album-detail-container scroll-container"},q={class:"header"},V={class:"right"},F={class:"artist"},H={class:"header-operation"},Z={class:"content"},J={class:"info"},K={class:"desc"},N=I(e({__name:"AlbumDetailView",setup(e){o((s=>({ad8d364a:u(I),"508f0be4":u(N),af564f7a:u(Q)})));const I=_().get("fontColor"),N=_().get("fontBlack"),Q=_().get("shadow"),W=A(),X=y(),Y=X.query.id+"",$=X.query.artistId+"",ss=t({id:Y,artistId:$,name:"",cover:"",artist:"",publishTime:""}),as=t([]),es=t([]),os=l((()=>new Map(es.map(((s,a)=>[s.id,a]))))),ts=j("firstLoading"),ls=j("hideScroll"),is=i(!1),ns=s=>{is.value=s},rs=s=>{ls(),is.value=s},ms=()=>{S("我有一个精品专辑分享给你："+ss.name+"，地址：https://www.liyinchao.cloud/#"+X.fullPath)},ps=()=>{ls()};return T((async()=>{try{const s=await w($),{hotAlbums:a}=s;for(let e of a){const{id:s}=e;if(s!=Y&&as.length<=5){const{picUrl:a,name:o,publishTime:t}=e;as.push({name:o,id:s,cover:a,publishTime:L(t),artistId:$+""})}else if(as.length>5)break}}catch(s){B(x.ERROR,s.message)}try{const s=await z(Y),{album:{picUrl:a,artist:e,publishTime:o,name:t,company:l,description:i},songs:n}=s;ss.name=t,ss.cover=a,ss.publishTime=L(o),ss.artist=e.name,ss.company=l,ss.description=i,W.initLoveStatus(ss,W.loveAlbumId);const r=[];n.forEach((s=>{O(r,es,s)})),W.initLoveMusic(es),R(r.join(","),es)}catch(s){B(x.ERROR,s.message)}ts.value=!1}),ts),(e,o)=>{const t=s,l=a;return h(),n("div",U,[r(p(E,{songs:es,"song-id-mapper":u(os),onCloseSelect:ns},null,8,["songs","song-id-mapper"]),[[m,is.value]]),r(c("div",q,[p(t,{src:ss.cover,loading:"lazy",class:"left"},null,8,["src"]),c("div",V,[c("h4",null,d(ss.name),1),c("p",F,d(ss.artist),1),c("p",null,d(ss.publishTime),1),c("div",H,[p(M,{songs:es},null,8,["songs"]),p(k,{name:ss.isLove?"取消收藏":"收藏",icon:ss.isLove?"":"","icon-style":ss.isLove?"color:#ff6a6a;":"",onClick:o[0]||(o[0]=s=>u(W).addLove(ss,u(W).loveAlbum,u(W).loveAlbumId,"loveAlbum"))},null,8,["name","icon","icon-style"]),is.value?f("",!0):(h(),v(D,{key:0,"share-to":ms,onOpenSelect:rs}))])])],512),[[m,!is.value]]),r(c("div",Z,[p(P,{active:"songs",onGetActive:ps},{content:g((()=>[p(l,{label:"歌曲",name:"songs"},{default:g((()=>[p(C,{songs:es,"song-id-mapper":u(os)},null,8,["songs","song-id-mapper"]),p(G,{albums:as,title:"该歌手的其它专辑"},null,8,["albums"])])),_:1}),p(l,{label:"详情",name:"album"},{default:g((()=>[c("div",J,[c("p",null,[b(" 专辑："),c("span",null,d(ss.name),1)]),c("p",null,[b(" 歌手："),c("span",null,d(ss.artist),1)]),c("p",null,[b(" 唱片公司："),c("span",null,d(ss.company),1)]),c("p",null,[b(" 发布时间："),c("span",null,d(ss.publishTime),1)]),c("p",null,[b(" 专辑简介："),c("span",K,d(ss.description),1)])])])),_:1})])),_:1})],512),[[m,!is.value]])])}}}),[["__scopeId","data-v-507b4b42"]]);export{N as default};
