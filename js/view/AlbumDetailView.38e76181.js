import{g as s,w as a}from"../element-plus/element-plus.4a0090f9.js";import{G as e,ax as o,Z as t,i as l,r as i,c as n,P as r,V as m,U as p,u,a as c,T as d,M as v,R as h,O as j,z as f,o as g,S as b}from"../@vue/@vue.59fec093.js";import{b as y}from"../vue-router/vue-router.2f940de9.js";import{g as w,a as T,b as B,R as _,w as A,e as R,d as k,W as I,i as L,j as O,s as z,_ as M}from"../../assets/index-ada1d67b.js";import{P as x,_ as D}from"../PlayButton/PlayButton.1ae1ed36.js";import{D as P}from"../DecoratedButton/DecoratedButton.1a2bfc87.js";import{M as C}from"../MoreButton/MoreButton.d0ce8ce3.js";import{T as E}from"../Tab/Tab.5e7d8251.js";import{O as S}from"../OnlineBatch/OnlineBatch.4e1fd202.js";import{A as G}from"../Albums/Albums.2c091c50.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.81428a33.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const U={class:"album-detail-container scroll-container"},q={class:"header"},V={class:"right"},F={class:"artist"},W={class:"header-operation"},Z={class:"content"},H={class:"info"},J={class:"desc"},K=M(e({__name:"AlbumDetailView",setup(e){o((s=>({25627696:u(M),"2581b55e":u(K),"76ee572c":u(N),"417802d1":u(Q)})));const M=w().get("fontColor"),K=w().get("fontBlack"),N=w().get("shadow"),Q=f("fontGray"),X=T(),Y=y(),$=Y.query.id+"",ss=Y.query.artistId+"",as=t({id:$,artistId:ss,name:"",cover:"",artist:"",publishTime:""}),es=t([]),os=t([]),ts=l((()=>new Map(os.map(((s,a)=>[s.id,a]))))),ls=f("firstLoading"),is=i(!1),ns=s=>{is.value=s},rs=s=>{is.value=s},ms=()=>{z("我有一个精品专辑分享给你："+as.name+"，地址：https://www.liyinchao.cloud/#"+Y.fullPath)};return B((async()=>{try{const s=await _(ss),{hotAlbums:a}=s;for(let e of a){const{id:s}=e;if(s!=$&&es.length<=5){const{picUrl:a,name:o,publishTime:t}=e;es.push({name:o,id:s,cover:a,publishTime:A(t),artistId:ss+""})}else if(es.length>5)break}}catch(s){R(k.ERROR,s.message)}try{const s=await I($),{album:{picUrl:a,artist:e,publishTime:o,name:t,company:l,description:i},songs:n}=s;as.name=t,as.cover=a,as.publishTime=A(o),as.artist=e.name,as.company=l,as.description=i,X.initLoveStatus(as,X.loveAlbumId);const r=[];n.forEach((s=>{L(r,os,s)})),X.initLoveMusic(os),O(r.join(","),os)}catch(s){R(k.ERROR,s.message)}ls.value=!1}),ls),(e,o)=>{const t=s,l=a;return g(),n("div",U,[r(p(S,{songs:os,"song-id-mapper":u(ts),onCloseSelect:ns},null,8,["songs","song-id-mapper"]),[[m,is.value]]),r(c("div",q,[p(t,{src:as.cover,loading:"lazy",class:"left"},null,8,["src"]),c("div",V,[c("h4",null,d(as.name),1),c("p",F,d(as.artist),1),c("p",null,d(as.publishTime),1),c("div",W,[p(x,{songs:os},null,8,["songs"]),p(P,{name:as.isLove?"取消收藏":"收藏",icon:as.isLove?"":"","icon-style":as.isLove?"color:#ff6a6a;":"",onClick:o[0]||(o[0]=s=>u(X).addLove(as,u(X).loveAlbum,u(X).loveAlbumId))},null,8,["name","icon","icon-style"]),is.value?h("",!0):(g(),v(C,{key:0,"share-to":ms,onOpenSelect:rs}))])])],512),[[m,!is.value]]),r(c("div",Z,[p(E,{active:"songs"},{content:j((()=>[p(l,{label:"歌曲",name:"songs"},{default:j((()=>[p(D,{songs:os,"song-id-mapper":u(ts)},null,8,["songs","song-id-mapper"]),p(G,{albums:es,title:"该歌手的其它专辑"},null,8,["albums"])])),_:1}),p(l,{label:"详情",name:"album"},{default:j((()=>[c("div",H,[c("p",null,[b(" 专辑："),c("span",null,d(as.name),1)]),c("p",null,[b(" 歌手："),c("span",null,d(as.artist),1)]),c("p",null,[b(" 唱片公司："),c("span",null,d(as.company),1)]),c("p",null,[b(" 发布时间："),c("span",null,d(as.publishTime),1)]),c("p",null,[b(" 专辑简介："),c("span",J,d(as.description),1)])])])),_:1})])),_:1})],512),[[m,!is.value]])])}}}),[["__scopeId","data-v-0d19f652"]]);export{K as default};
