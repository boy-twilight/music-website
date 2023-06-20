import{u as s}from"../element-plus/element-plus.ec47f34a.js";import{G as a,ax as e,i as t,d as l,Z as i,c as o,P as n,V as r,U as m,u,O as c,z as p,o as g,a as d}from"../@vue/@vue.7ad02ad1.js";import{b as v}from"../vue-router/vue-router.47595bf3.js";import{s as h}from"../pinia/pinia.07d51cb2.js";import{t as y,a as j,b as f,v as _,e as b,d as R,w as x,x as E,i as L,j as w,_ as S}from"../../assets/index-a64598ed.js";import{_ as T}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.6a6b0b73.js";import{T as O}from"../Tab/Tab.4edd7eb4.js";import{O as C}from"../OnlineBatch/OnlineBatch.5011fa0a.js";import{P as k}from"../PlayButton/PlayButton.cd89caf4.js";import{D as B}from"../DecoratedButton/DecoratedButton.733dc12e.js";import{M}from"../Mv/Mv.86bbab71.js";import{A as P}from"../Albums/Albums.55a580b0.js";import{P as I}from"../PlayList/PlayList.252dc66b.js";import{S as U}from"../Singer/Singer.2b7ceef1.js";import{L as z}from"../Loading/Loading.0cb863e0.js";import{_ as A}from"../NoSearch/NoSearch.e46bbd69.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const D={class:"search-container scroll-container"},G={class:"song"},N={class:"header-operation"},V=S(a({__name:"SearchView",setup(a){e((s=>({"2f590114":u(q)})));const S=y(),{isFullScreen:V}=h(S),F=t((()=>V.value?"580px":"440px")),q=p("fontGray"),J=j(),{loveMusicId:K,loveSongs:W}=h(J),Z=l(!1),H=s=>{Z.value=s},Q=()=>{Y.forEach((s=>{s.isLove=!0;null==K.value.get(s.id)&&W.value.push(s)}))},X=v().query.keyWord+"",Y=i([]),$=t((()=>new Map(Y.map(((s,a)=>[s.id,a]))))),ss=i([]),as=i([]),es=i([]),ts=i([]),ls=i([]),is=i([]),os=l(!1),ns=p("firstLoading"),rs=p("hideScroll"),ms=i([!1,!1,!1,!1,!1,!1]),us=s=>{rs(),"video"==s&&0==ss.length?f((async()=>{try{const s=await _(1014,60,X),{result:{videos:a}}=s;a&&a.length>0&&a.forEach((s=>{const{vid:a,title:e,coverUrl:t,creator:l,playTime:i}=s;ss.push({id:a,name:e,image:t,artist:l[0].userName,playCount:i})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),ms[0]=0==ss.length}),os):"mv"==s&&0==as.length?f((async()=>{try{const s=await _(1004,60,X),{result:{mvs:a}}=s;a&&0!=a.length&&a.forEach((s=>{const{id:a,name:e,cover:t,artistName:l,playCount:i}=s;as.push({id:a,name:e,image:t,artist:l,playCount:i})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),ms[1]=0==as.length}),os):"album"==s&&0==es.length?f((async()=>{try{const s=await _(10,60,X),{result:{albums:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,picUrl:t,publishTime:l,artist:i}=s;es.push({id:a,name:e,cover:t,publishTime:x(l),artistId:i.id})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),ms[2]=0==es.length}),os):"playList"==s&&0==ts.length?f((async()=>{try{const s=await _(1e3,60,X),{result:{playlists:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,coverImgUrl:t,playCount:l}=s;ts.push({id:a,name:e,image:t,playCount:l,description:"",tag:[],creator:{nickname:"",avatarUrl:""}})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),ms[3]=0==ts.length}),os):"radio"==s?f((async()=>{setTimeout((()=>{os.value=!1}),500),ms[4]=0==ls.length}),os):"singer"==s&&0==is.length&&f((async()=>{try{const s=await _(100,60,X),{result:{artists:a}}=s;a&&a.length>0&&a.forEach((s=>{const{id:a,name:e,picUrl:t,accountId:l}=s;is.push({id:a,name:e,avatar:t,score:l})}))}catch(s){b(R.ERROR,s.message)}setTimeout((()=>{os.value=!1}),500),ms[5]=0==is.length}),os)};return f((async()=>{try{const s=await _(1,100,X),{result:{songs:a}}=s;if(a&&a.length>0){const s=a.map((s=>s.id)).join(","),e=await E(s),{songs:t}=e;t.forEach((s=>{L([],Y,s)})),w(s,Y),J.initLoveMusic(Y)}}catch(s){b(R.ERROR,s.message)}ns.value=!1}),ns),(a,e)=>{const t=s;return g(),o("div",D,[n(m(C,{songs:Y,"song-id-mapper":u($),onCloseSelect:H},null,8,["songs","song-id-mapper"]),[[r,Z.value]]),n(m(O,{onGetActive:us,active:"song",class:"search-tab"},{content:c((()=>[m(t,{label:"歌曲",name:"song"},{default:c((()=>[d("div",G,[d("div",N,[m(k,{songs:Y},null,8,["songs"]),m(B,{icon:"",onClick:Q,name:"全部收藏"}),m(B,{icon:"",name:"批量操作",onClick:e[0]||(e[0]=s=>Z.value=!Z.value)})]),m(T,{songs:Y,"song-id-mapper":u($),height:u(F)},null,8,["songs","song-id-mapper","height"])])])),_:1}),m(t,{label:"视频",name:"video"},{default:c((()=>[m(z,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ms[0]]]),n(m(M,{mvs:ss},null,8,["mvs"]),[[r,!ms[0]]])])),_:1}),m(t,{label:"MV",name:"mv"},{default:c((()=>[m(z,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ms[1]]]),n(m(M,{mvs:as},null,8,["mvs"]),[[r,!ms[1]]])])),_:1}),m(t,{label:"专辑",name:"album"},{default:c((()=>[m(z,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ms[2]]]),n(m(P,{albums:es},null,8,["albums"]),[[r,!ms[2]]])])),_:1}),m(t,{label:"歌单",name:"playList"},{default:c((()=>[m(z,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ms[3]]]),n(m(I,{playlists:ts},null,8,["playlists"]),[[r,!ms[3]]])])),_:1}),m(t,{label:"电台",name:"radio"},{default:c((()=>[m(z,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ms[4]]]),n(m(I,{playlists:ls,type:"radio"},null,8,["playlists"]),[[r,!ms[4]]])])),_:1}),m(t,{label:"歌手",name:"singer"},{default:c((()=>[m(z,{"is-loading":os.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ms[5]]]),n(m(U,{"singer-list":is},null,8,["singer-list"]),[[r,!ms[5]]])])),_:1})])),_:1},512),[[r,!Z.value]])])}}}),[["__scopeId","data-v-e97d97c0"]]);export{V as default};
