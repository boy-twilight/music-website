import{g as s,u as a}from"../element-plus/element-plus.f3996937.js";import{G as e,ax as t,Z as o,c as l,a as i,U as n,T as r,O as m,u as p,z as u,o as c,S as d}from"../@vue/@vue.7ad02ad1.js";import{b as h}from"../vue-router/vue-router.53ff932e.js";import{g as j,G as f,o as b,i as g,j as v,e as y,d as T,A as _,_ as A}from"../../assets/index-107c9b53.js";import{A as z}from"../Albums/Albums.13a23bf8.js";import{T as B,_ as R}from"../Tab/Tab.7f2d4d35.js";import{P as x}from"../PlayButton/PlayButton.7c947deb.js";import{D}from"../DecoratedButton/DecoratedButton.033e5b3b.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.07d51cb2.js";import"../lodash/lodash.57b1d944.js";import"../nprogress/nprogress.8c6d26c7.js";const w={class:"album-detail-container scroll-container"},I={class:"header"},E={class:"right"},G={class:"artist"},O={class:"header-operation"},P={class:"content"},U={class:"info"},k={class:"desc"},q=A(e({__name:"AlbumDetailView",setup(e){t((s=>({"8b36d6da":p(A),"9ff621a8":p(q),"671d280a":p(S)})));const A=j().get("fontColor"),q=j().get("fontBlack"),S=j().get("shadow"),C=h(),L=C.query.id,V=C.query.artistId,Z=o({name:"",cover:"",id:L+"",artist:"",publishTime:""}),F=o([]),H=o([]),J=u("firstLoading");J.value=!0;const K=u("hideScroll"),M=()=>{K()};return f(L+"").then((s=>{const{album:{picUrl:a,artist:e,publishTime:t,name:o,company:l,description:i},songs:n}=s;Z.name=o,Z.cover=a,Z.publishTime=b(t),Z.artist=e.name,Z.company=l,Z.description=i;const r=[];n.forEach((s=>{g(r,H,s)})),v(r.join(","),H),J.value=!1})).catch((s=>{y(T.ERROR,s.message)})),_(V+"").then((s=>{const{hotAlbums:a}=s;for(const e of a){const{id:s}=e;if(s!=L+""&&F.length<=5){const{picUrl:a,name:t,publishTime:o}=e;F.push({name:t,id:s,cover:a,publishTime:b(o)})}else if(F.length>5)break}})).catch((s=>{y(T.ERROR,s.message)})),(e,t)=>{const o=s,u=a;return c(),l("div",w,[i("div",I,[n(o,{src:Z.cover,lazy:"",class:"left"},null,8,["src"]),i("div",E,[i("h4",null,r(Z.name),1),i("p",G,r(Z.artist),1),i("p",null,r(Z.publishTime),1),i("div",O,[n(x,{songs:H},null,8,["songs"]),n(D,{name:"收藏",icon:""})])])]),i("div",P,[n(B,{active:"songs",onGetActive:M},{content:m((()=>[n(u,{label:"歌曲",name:"songs"},{default:m((()=>[n(R,{songs:H},null,8,["songs"]),n(z,{albums:F,artistId:p(V)+"",title:"该歌手的其它专辑"},null,8,["albums","artistId"])])),_:1}),n(u,{label:"详情",name:"album"},{default:m((()=>[i("div",U,[i("p",null,[d(" 专辑："),i("span",null,r(Z.name),1)]),i("p",null,[d(" 歌手："),i("span",null,r(Z.artist),1)]),i("p",null,[d(" 唱片公司："),i("span",null,r(Z.company),1)]),i("p",null,[d(" 发布时间："),i("span",null,r(Z.publishTime),1)]),i("p",null,[d(" 专辑简介："),i("span",k,r(Z.description),1)])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-cd9a0a00"]]);export{q as default};
