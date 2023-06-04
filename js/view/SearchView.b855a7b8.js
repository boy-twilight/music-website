import{u as s}from"../element-plus/element-plus.372e8740.js";import{G as a,ax as e,i as t,d as l,Z as o,c as i,P as n,V as r,U as m,u,O as c,z as p,o as g,a as d}from"../@vue/@vue.7ad02ad1.js";import{b as v}from"../vue-router/vue-router.47595bf3.js";import{s as h}from"../pinia/pinia.07d51cb2.js";import{p as y,a as j,b as f,q as _,e as b,d as R,r as x,t as E,i as L,j as S,_ as w}from"../../assets/index-c020455b.js";import{_ as T}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.ed67998b.js";import{T as O}from"../Tab/Tab.7aec4945.js";import{O as C}from"../OnlineBatch/OnlineBatch.6ac9bbb7.js";import{P as B}from"../PlayButton/PlayButton.97202a40.js";import{D as M}from"../DecoratedButton/DecoratedButton.753238ed.js";import{M as P}from"../Mv/Mv.3660344c.js";import{A as k}from"../Albums/Albums.b34c5c17.js";import{P as z}from"../PlayList/PlayList.dfefebb0.js";import{S as I}from"../Singer/Singer.868e80c0.js";import{L as U}from"../Loading/Loading.d3c756d6.js";import{_ as A}from"../NoSearch/NoSearch.73a6cd29.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";const D={class:"search-container scroll-container"},G={class:"song"},N={class:"header-operation"},V=w(a({__name:"SearchView",setup(a){e((s=>({"5afdd136":u(F)})));const w=y(),{isFullScreen:V}=h(w),q=t((()=>V.value?"580px":"440px")),F=p("fontGray"),H=j(),{loveMusicId:J,loveSongs:W}=h(H),Z=l(!1),K=s=>{Z.value=s},Q=()=>{Y.forEach((s=>{s.isLove=!0;null==J.value.get(s.id)&&W.value.push(s)}))},X=v().query.keyWord+"",Y=o([]),$=t((()=>new Map(Y.map(((s,a)=>[s.id,a]))))),ss=o([]),as=o([]),es=o([]),ts=o([]),ls=o([]),os=l(!1),is=p("firstLoading"),ns=p("hideScroll"),rs=o([!1,!1,!1,!1,!1]),ms=s=>{ns(),"video"==s&&0==ss.length?f((async()=>{try{const s=await _(1014,60,X),{result:{videos:a}}=s;a&&a.length>0&&a.forEach((s=>{const{vid:a,title:e,coverUrl:t,creator:l,playTime:o}=s;ss.push({id:a,name:e,image:t,artist:l[0].userName,playCount:o})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),rs[0]=0==ss.length}),os):"mv"==s&&0==as.length?f((async()=>{try{const s=await _(1004,60,X),{result:{mvs:a}}=s;a&&0!=a.length&&a.forEach((s=>{const{id:a,name:e,cover:t,artistName:l,playCount:o}=s;as.push({id:a,name:e,image:t,artist:l,playCount:o})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),rs[1]=0==as.length}),os):"album"==s&&0==es.length?f((async()=>{try{const s=await _(10,60,X),{result:{albums:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,picUrl:t,publishTime:l,artist:o}=s;es.push({id:a,name:e,cover:t,publishTime:x(l),artistId:o.id})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),rs[2]=0==as.length}),os):"playList"==s&&0==ts.length?f((async()=>{try{const s=await _(1e3,60,X),{result:{playlists:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,coverImgUrl:t,playCount:l}=s;ts.push({id:a,name:e,image:t,playCount:l,description:"",tag:[],creator:{nickname:"",avatarUrl:""}})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),rs[3]=0==as.length}),os):"singer"==s&&0==ls.length&&f((async()=>{try{const s=await _(100,60,X),{result:{artists:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,picUrl:t,accountId:l}=s;ls.push({id:a,name:e,avatar:t,score:l})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),rs[4]=0==as.length}),os)};return f((async()=>{try{const s=await _(1,100,X),{result:{songs:a}}=s;if(a&&a.length>0){const s=a.map((s=>s.id)).join(","),e=await E(s),{songs:t}=e;t.forEach((s=>{L([],Y,s)})),S(s,Y),H.initLoveMusic(Y)}}catch(s){b(R.ERROR,s.message)}is.value=!1}),is),(a,e)=>{const t=s;return g(),i("div",D,[n(m(C,{songs:Y,"song-id-mapper":u($),onCloseSelect:K},null,8,["songs","song-id-mapper"]),[[r,Z.value]]),n(m(O,{onGetActive:ms,active:"song",class:"search-tab"},{content:c((()=>[m(t,{label:"歌曲",name:"song"},{default:c((()=>[d("div",G,[d("div",N,[m(B,{songs:Y},null,8,["songs"]),m(M,{icon:"",onClick:Q,name:"全部收藏"}),m(M,{icon:"",name:"批量操作",onClick:e[0]||(e[0]=s=>Z.value=!Z.value)})]),m(T,{songs:Y,"song-id-mapper":u($),height:u(q)},null,8,["songs","song-id-mapper","height"])])])),_:1}),m(t,{label:"视频",name:"video"},{default:c((()=>[m(U,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,rs[0]]]),n(m(P,{mvs:ss},null,8,["mvs"]),[[r,!rs[0]]])])),_:1}),m(t,{label:"MV",name:"mv"},{default:c((()=>[m(U,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,rs[1]]]),n(m(P,{mvs:as},null,8,["mvs"]),[[r,!rs[1]]])])),_:1}),m(t,{label:"专辑",name:"album"},{default:c((()=>[m(U,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,rs[2]]]),n(m(k,{albums:es},null,8,["albums"]),[[r,!rs[2]]])])),_:1}),m(t,{label:"歌单",name:"playList"},{default:c((()=>[m(U,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,rs[3]]]),n(m(z,{playlists:ts},null,8,["playlists"]),[[r,!rs[3]]])])),_:1}),m(t,{label:"歌手",name:"singer"},{default:c((()=>[m(U,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,rs[4]]]),n(m(I,{"singer-list":ls},null,8,["singer-list"]),[[r,!rs[4]]])])),_:1})])),_:1},512),[[r,!Z.value]])])}}}),[["__scopeId","data-v-e0b6981a"]]);export{V as default};
