import{g as a,u as s}from"../element-plus/element-plus.372e8740.js";import{G as e,ax as t,d as o,Z as n,i as l,c as i,P as r,V as m,U as c,u as p,a as u,T as d,F as g,a7 as v,M as j,R as y,O as h,z as f,o as _}from"../@vue/@vue.7ad02ad1.js";import{u as k}from"../vue-router/vue-router.d1338226.js";import{g as b,a as w,b as B,l as L,e as R,d as C,m as P,i as O,j as S,n as x,o as M,C as U,s as z,_ as E}from"../../assets/index-b6c8c353.js";import{O as D}from"../OnlineBatch/OnlineBatch.e5a5a938.js";import{_ as G}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.d9cff3b8.js";import{T as I}from"../Tab/Tab.99462fe7.js";import{P as T}from"../PlayButton/PlayButton.4e32f27c.js";import{D as N}from"../DecoratedButton/DecoratedButton.20fd6afe.js";import{M as A}from"../MoreButton/MoreButton.fa6243ab.js";import{N as F}from"../NoSearch/NoSearch.5c32ab39.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";const V={class:"playlist-container scroll-container"},$={class:"header"},q=["src"],Z={class:"right"},H={class:"title"},J={class:"creator"},K={class:"creator-name"},Q={class:"tag"},W={class:"description"},X={class:"header-operation"},Y=E(e({__name:"PlayListView",setup(e){t((a=>({"70bf7969":p(E),"70afda05":p(Y),"0b41e840":p(aa),"7f83e79d":p(sa)})));const E=b().get("fontColor"),Y=b().get("fontBlack"),aa=b().get("shadow"),sa=f("fontGray"),ea=o(!1),ta=w(),oa=k(),na=oa.query.id+"",la=n({id:na,name:"",image:"",playCount:"",tag:[],description:"",creator:{nickname:"",avatarUrl:""}}),ia=n([]),ra=n([]),ma=l((()=>new Map(ia.map(((a,s)=>[a.id,s]))))),ca=f("firstLoading"),pa=f("hideScroll"),ua=o(!1),da=a=>{ua.value=a},ga=a=>{pa(),ua.value=a},va=()=>{z("我有一个精品歌单分享给你："+la.name+"，地址：https://www.liyinchao.cloud/#"+oa.fullPath)},ja=()=>{pa()};return B((async()=>{try{const a=await L(na),{playlist:{name:s,coverImgUrl:e,description:t,tags:o,creator:n,playCount:l}}=a;la.name=s,la.image=e,la.description=t,la.tag=o,la.creator.avatarUrl=n.avatarUrl,la.creator.nickname=n.nickname,la.playCount=l,ta.initLoveStatus(la,ta.lovePlaylistId)}catch(a){R(C.ERROR,a.message)}try{const a=await P(na),{songs:s}=a,e=[];s.forEach((a=>{O(e,ia,a)})),ta.initLoveMusic(ia),S(e.join(","),ia)}catch(a){R(C.ERROR,a.message)}try{const a=await x(na,100),{comments:s,hotComments:e}=a;M(e,ra),M(s,ra),ea.value=0==ra.length,ca.value=!1}catch(a){R(C.ERROR,a.message)}}),ca),(e,t)=>{const o=a,n=s;return _(),i("div",V,[r(c(D,{"song-id-mapper":p(ma),songs:ia,onCloseSelect:da},null,8,["song-id-mapper","songs"]),[[m,ua.value]]),r(u("div",$,[u("img",{src:la.image,class:"left-image"},null,8,q),u("div",Z,[u("p",H,d(la.name),1),u("div",J,[c(o,{src:la.creator.avatarUrl},null,8,["src"]),u("span",K,d(la.creator.nickname),1),u("div",Q,[(_(!0),i(g,null,v(la.tag,(a=>(_(),i("span",{key:a},"#"+d(a),1)))),128))])]),u("p",W,d(la.description),1),u("div",X,[c(T,{songs:ia},null,8,["songs"]),c(N,{name:la.isLove?"取消收藏":"收藏",icon:la.isLove?"":"","icon-style":la.isLove?"color:#ff6a6a;":"",onClick:t[0]||(t[0]=a=>p(ta).addLove(la,p(ta).lovePlaylist,p(ta).lovePlaylistId))},null,8,["name","icon","icon-style"]),ua.value?y("",!0):(_(),j(A,{key:0,"share-to":va,onOpenSelect:ga}))])])],512),[[m,!ua.value]]),r(c(I,{active:"song",class:"playlist-tab",onGetActive:ja},{content:h((()=>[c(n,{label:`歌曲 ${ia.length}`,name:"song"},{default:h((()=>[c(G,{songs:ia,"song-id-mapper":p(ma)},null,8,["songs","song-id-mapper"])])),_:1},8,["label"]),c(n,{label:`评论 ${ra.length<10?ra.length+10:ra.length}`,name:"comment"},{default:h((()=>[ea.value?(_(),j(F,{key:1})):(_(),j(U,{key:0,comments:ra},null,8,["comments"]))])),_:1},8,["label"])])),_:1},512),[[m,!ua.value]])])}}}),[["__scopeId","data-v-a8106cd6"]]);export{Y as default};
