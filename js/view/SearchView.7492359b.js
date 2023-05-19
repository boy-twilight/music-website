import{u as s}from"../element-plus/element-plus.372e8740.js";import{_ as a}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.b5ca6b08.js";import{G as e,d as l,Z as t,c as n,P as o,V as i,U as r,M as u,O as m,R as c,o as p,a as g,z as d}from"../@vue/@vue.7ad02ad1.js";import{b as v}from"../vue-router/vue-router.53ff932e.js";import{a as h,b as y,n as f,e as j,d as _,o as b,p as R,i as L,j as E,q as S,r as w,_ as C}from"../../assets/index-b4bf3e49.js";import{s as O}from"../pinia/pinia.07d51cb2.js";import{P as x}from"../PlayButton/PlayButton.eb4d2d93.js";import{D as B}from"../DecoratedButton/DecoratedButton.e6f62703.js";import{T as M}from"../Tab/Tab.6c04dd12.js";import{M as P}from"../Mv/Mv.30667258.js";import{A as k}from"../Albums/Albums.3f894f64.js";import{P as z}from"../PlayList/PlayList.7529d68c.js";import{L as A}from"../Loading/Loading.8c96e03d.js";import{S as I}from"../Singer/Singer.642c25b0.js";import{N as T}from"../NoSearch/NoSearch.0466d3b9.js";import{_ as U}from"../OnlineBatch/OnlineBatch.117c65e9.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";const N={class:"search-container scroll-container"},D={class:"song"},G={class:"top-operation"},V={class:"singers"},q=C(e({__name:"SearchView",setup(e){const C=h(),{loveMusicId:q,loveSongs:F}=O(C),H=l(!1),W=s=>{H.value=s},Z=()=>{K.forEach((s=>{s.isLove=!0;null==q.value.get(s.id)&&F.value.push(s)})),S(w.LOCAL,"loveSongs",F.value)},J=v().query.keyWord+"",K=t([]),Q=t([]),X=t([]),Y=t([]),$=t([]),ss=t([]),as=l(!1),es=d("firstLoading"),ls=d("hideScroll"),ts=t([!1,!1,!1,!1,!1]),ns=s=>{ls(),"video"==s&&0==Q.length?y((async()=>{try{const s=await f(1014,60,J),{result:{videos:a}}=s;a&&a.length>0&&a.forEach((s=>{const{vid:a,title:e,coverUrl:l,creator:t,playTime:n}=s;Q.push({id:a,name:e,image:l,artist:t[0].userName,playCount:n})}))}catch(s){j(_.ERROR,s.message)}as.value=!1,ts[0]=0==Q.length}),as):"mv"==s&&0==X.length?y((async()=>{try{const s=await f(1004,60,J),{result:{mvs:a}}=s;a&&0!=a.length&&a.forEach((s=>{const{id:a,name:e,cover:l,artistName:t,playCount:n}=s;X.push({id:a,name:e,image:l,artist:t,playCount:n})}))}catch(s){j(_.ERROR,s.message)}as.value=!1,ts[1]=0==X.length}),as):"album"==s&&0==Y.length?y((async()=>{try{const s=await f(10,60,J),{result:{albums:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,picUrl:l,publishTime:t,artist:n}=s;Y.push({id:a,name:e,cover:l,publishTime:b(t),artistId:n.id})}))}catch(s){j(_.ERROR,s.message)}as.value=!1,ts[2]=0==X.length}),as):"playList"==s&&0==$.length?y((async()=>{try{const s=await f(1e3,60,J),{result:{playlists:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,coverImgUrl:l,playCount:t}=s;$.push({id:a,name:e,image:l,playCount:t,description:"",tag:[],creator:{nickname:"",avatarUrl:""}})}))}catch(s){j(_.ERROR,s.message)}as.value=!1,ts[3]=0==X.length}),as):"singer"==s&&0==ss.length&&y((async()=>{try{const s=await f(100,60,J),{result:{artists:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,picUrl:l,accountId:t}=s;ss.push({id:a,name:e,avatar:l,score:t})}))}catch(s){j(_.ERROR,s.message)}as.value=!1,ts[4]=0==X.length}),as)};return y((async()=>{try{const s=await f(1,100,J),{result:{songs:a}}=s;if(a&&a.length>0){const s=a.map((s=>s.id)).join(","),e=await R(s),{songs:l}=e;l.forEach((s=>{L([],K,s)})),E(s,K),C.initLoveMusic(K)}}catch(s){j(_.ERROR,s.message)}es.value=!1}),es),(e,l)=>{const t=a,d=s;return p(),n("div",N,[o(r(U,{songs:K,onCloseSelect:W},null,8,["songs"]),[[i,H.value]]),H.value?c("",!0):(p(),u(M,{key:0,onGetActive:ns,active:"song",class:"search-tab"},{content:m((()=>[r(d,{label:"歌曲",name:"song"},{default:m((()=>[g("div",D,[g("div",G,[r(x,{songs:K},null,8,["songs"]),r(B,{icon:"",onClick:Z,name:"全部收藏"}),r(B,{icon:"",name:"批量操作",onClick:l[0]||(l[0]=s=>H.value=!H.value)})]),r(t,{songs:K,height:"440px"},null,8,["songs"])])])),_:1}),r(d,{label:"视频",name:"video"},{default:m((()=>[r(A,{"is-loading":as.value},null,8,["is-loading"]),o(r(T,null,null,512),[[i,ts[0]]]),o(r(P,{mvs:Q},null,8,["mvs"]),[[i,!ts[0]]])])),_:1}),r(d,{label:"MV",name:"mv"},{default:m((()=>[r(A,{"is-loading":as.value},null,8,["is-loading"]),o(r(T,null,null,512),[[i,ts[1]]]),o(r(P,{mvs:X},null,8,["mvs"]),[[i,!ts[1]]])])),_:1}),r(d,{label:"专辑",name:"album"},{default:m((()=>[r(A,{"is-loading":as.value},null,8,["is-loading"]),o(r(T,null,null,512),[[i,ts[2]]]),o(r(k,{albums:Y},null,8,["albums"]),[[i,!ts[2]]])])),_:1}),r(d,{label:"歌单",name:"playList"},{default:m((()=>[r(A,{"is-loading":as.value},null,8,["is-loading"]),o(r(T,null,null,512),[[i,ts[3]]]),o(r(z,{playlists:$},null,8,["playlists"]),[[i,!ts[3]]])])),_:1}),r(d,{label:"歌手",name:"singer"},{default:m((()=>[r(A,{"is-loading":as.value},null,8,["is-loading"]),o(r(T,null,null,512),[[i,ts[4]]]),o(g("div",V,[r(I,{"singer-list":ss,"show-all-avatar":!1},null,8,["singer-list"])],512),[[i,!ts[4]]])])),_:1})])),_:1}))])}}}),[["__scopeId","data-v-5c20d43e"]]);export{q as default};
