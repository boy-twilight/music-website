import{g as s,u as e}from"../element-plus/element-plus.372e8740.js";import{G as a,ax as o,Z as t,i as l,d as i,c as n,P as r,V as m,U as p,u,a as c,T as d,M as v,R as j,O as g,z as h,o as f,S as b}from"../@vue/@vue.7ad02ad1.js";import{u as y}from"../vue-router/vue-router.d1338226.js";import{g as _,a as T,b as w,L as A,r as B,e as L,d as x,P as O,i as R,j as S,s as k,_ as z}from"../../assets/index-b6c8c353.js";import{P as I}from"../PlayButton/PlayButton.4e32f27c.js";import{D as M}from"../DecoratedButton/DecoratedButton.20fd6afe.js";import{M as P}from"../MoreButton/MoreButton.fa6243ab.js";import{T as D}from"../Tab/Tab.99462fe7.js";import{_ as C}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.d9cff3b8.js";import{O as E}from"../OnlineBatch/OnlineBatch.e5a5a938.js";import{A as G}from"../Albums/Albums.c3402db2.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";const U={class:"album-detail-container scroll-container"},q={class:"header"},V={class:"right"},F={class:"artist"},H={class:"header-operation"},Z={class:"content"},J={class:"info"},K={class:"desc"},N=z(a({__name:"AlbumDetailView",setup(a){o((s=>({"9d3169f4":u(z),"9d50a8bc":u(N),"3b06dd7d":u(Q),"0dfcee60":u(W)})));const z=_().get("fontColor"),N=_().get("fontBlack"),Q=_().get("shadow"),W=h("fontGray"),X=T(),Y=y(),$=Y.query.id+"",ss=Y.query.artistId+"",es=t({id:$,artistId:ss,name:"",cover:"",artist:"",publishTime:""}),as=t([]),os=t([]),ts=l((()=>new Map(os.map(((s,e)=>[s.id,e]))))),ls=h("firstLoading"),is=h("hideScroll"),ns=i(!1),rs=s=>{ns.value=s},ms=s=>{is(),ns.value=s},ps=()=>{k("我有一个精品专辑分享给你："+es.name+"，地址：https://www.liyinchao.cloud/#"+Y.fullPath)},us=()=>{is()};return w((async()=>{try{const s=await A(ss),{hotAlbums:e}=s;for(let a of e){const{id:s}=a;if(s!=$&&as.length<=5){const{picUrl:e,name:o,publishTime:t}=a;as.push({name:o,id:s,cover:e,publishTime:B(t),artistId:ss+""})}else if(as.length>5)break}}catch(s){L(x.ERROR,s.message)}try{const s=await O($),{album:{picUrl:e,artist:a,publishTime:o,name:t,company:l,description:i},songs:n}=s;es.name=t,es.cover=e,es.publishTime=B(o),es.artist=a.name,es.company=l,es.description=i,X.initLoveStatus(es,X.loveAlbumId);const r=[];n.forEach((s=>{R(r,os,s)})),X.initLoveMusic(os),S(r.join(","),os)}catch(s){L(x.ERROR,s.message)}ls.value=!1}),ls),(a,o)=>{const t=s,l=e;return f(),n("div",U,[r(p(E,{songs:os,"song-id-mapper":u(ts),onCloseSelect:rs},null,8,["songs","song-id-mapper"]),[[m,ns.value]]),r(c("div",q,[p(t,{src:es.cover,loading:"lazy",class:"left"},null,8,["src"]),c("div",V,[c("h4",null,d(es.name),1),c("p",F,d(es.artist),1),c("p",null,d(es.publishTime),1),c("div",H,[p(I,{songs:os},null,8,["songs"]),p(M,{name:es.isLove?"取消收藏":"收藏",icon:es.isLove?"":"","icon-style":es.isLove?"color:#ff6a6a;":"",onClick:o[0]||(o[0]=s=>u(X).addLove(es,u(X).loveAlbum,u(X).loveAlbumId))},null,8,["name","icon","icon-style"]),ns.value?j("",!0):(f(),v(P,{key:0,"share-to":ps,onOpenSelect:ms}))])])],512),[[m,!ns.value]]),r(c("div",Z,[p(D,{active:"songs",onGetActive:us},{content:g((()=>[p(l,{label:"歌曲",name:"songs"},{default:g((()=>[p(C,{songs:os,"song-id-mapper":u(ts)},null,8,["songs","song-id-mapper"]),p(G,{albums:as,title:"该歌手的其它专辑"},null,8,["albums"])])),_:1}),p(l,{label:"详情",name:"album"},{default:g((()=>[c("div",J,[c("p",null,[b(" 专辑："),c("span",null,d(es.name),1)]),c("p",null,[b(" 歌手："),c("span",null,d(es.artist),1)]),c("p",null,[b(" 唱片公司："),c("span",null,d(es.company),1)]),c("p",null,[b(" 发布时间："),c("span",null,d(es.publishTime),1)]),c("p",null,[b(" 专辑简介："),c("span",K,d(es.description),1)])])])),_:1})])),_:1})],512),[[m,!ns.value]])])}}}),[["__scopeId","data-v-ab69e746"]]);export{N as default};
