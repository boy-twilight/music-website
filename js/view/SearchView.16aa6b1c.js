import{u as a}from"../element-plus/element-plus.ec47f34a.js";import{G as s,ax as e,i as t,d as l,Z as i,c as o,P as n,V as r,U as m,u,O as c,z as p,o as g,a as d}from"../@vue/@vue.7ad02ad1.js";import{b as h}from"../vue-router/vue-router.47595bf3.js";import{s as v}from"../pinia/pinia.07d51cb2.js";import{t as y,a as f,b as j,v as _,e as b,d as R,w as x,x as E,i as w,j as L,_ as S}from"../../assets/index-9045ab88.js";import{_ as T}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.db472309.js";import{T as C}from"../Tab/Tab.e81e9855.js";import{O}from"../OnlineBatch/OnlineBatch.9a5325de.js";import{P as k}from"../PlayButton/PlayButton.7835cdac.js";import{D as U}from"../DecoratedButton/DecoratedButton.82cbadba.js";import{M as B}from"../Mv/Mv.85d43df5.js";import{A as M}from"../Albums/Albums.dd6bae11.js";import{P}from"../PlayList/PlayList.537589b4.js";import{S as I}from"../Singer/Singer.79371f71.js";import{L as z}from"../Loading/Loading.9b7fc97c.js";import{_ as A}from"../NoSearch/NoSearch.6d8888b6.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const D={class:"search-container scroll-container"},G={class:"song"},N={class:"header-operation"},V=S(s({__name:"SearchView",setup(s){e((a=>({f13defb0:u(q)})));const S=y(),{isFullScreen:V}=v(S),F=t((()=>V.value?"580px":"440px")),q=p("fontGray"),J=f(),{loveMusicId:K,loveSongs:W}=v(J),Z=l(!1),H=a=>{Z.value=a},Q=()=>{Y.forEach((a=>{a.isLove=!0;null==K.value.get(a.id)&&W.value.push(a)}))},X=h().query.keyWord+"",Y=i([]),$=t((()=>new Map(Y.map(((a,s)=>[a.id,s]))))),aa=i([]),sa=i([]),ea=i([]),ta=i([]),la=i([]),ia=i([]),oa=l(!1),na=p("firstLoading"),ra=p("hideScroll"),ma=i([!1,!1,!1,!1,!1,!1]),ua=a=>{ra(),"video"==a&&0==aa.length?j((async()=>{try{const a=await _(1014,60,X),{result:{videos:s}}=a;s&&s.length>0&&s.forEach((a=>{const{vid:s,title:e,coverUrl:t,creator:l,playTime:i}=a;aa.push({id:s,name:e,image:t,artist:l[0].userName,playCount:i})}))}catch(a){b(R.ERROR,a.message)}setTimeout((()=>{oa.value=!1}),500),ma[0]=0==aa.length}),oa):"mv"==a&&0==sa.length?j((async()=>{try{const a=await _(1004,60,X),{result:{mvs:s}}=a;s&&0!=s.length&&s.forEach((a=>{const{id:s,name:e,cover:t,artistName:l,playCount:i}=a;sa.push({id:s,name:e,image:t,artist:l,playCount:i})}))}catch(a){b(R.ERROR,a.message)}setTimeout((()=>{oa.value=!1}),500),ma[1]=0==sa.length}),oa):"album"==a&&0==ea.length?j((async()=>{try{const a=await _(10,60,X),{result:{albums:s}}=a;s&&s.length>0&&s.forEach((a=>{const{id:s,name:e,picUrl:t,publishTime:l,artist:i}=a;ea.push({id:s,name:e,cover:t,publishTime:x(l),artistId:i.id})}))}catch(a){b(R.ERROR,a.message)}setTimeout((()=>{oa.value=!1}),500),ma[2]=0==ea.length}),oa):"playList"==a&&0==ta.length?j((async()=>{try{const a=await _(1e3,60,X),{result:{playlists:s}}=a;s&&s.length>0&&s.forEach((a=>{const{id:s,name:e,coverImgUrl:t,playCount:l}=a;ta.push({id:s,name:e,image:t,playCount:l,description:"",tag:[],creator:{nickname:"",avatarUrl:""}})}))}catch(a){b(R.ERROR,a.message)}setTimeout((()=>{oa.value=!1}),500),ma[3]=0==ta.length}),oa):"radio"==a?j((async()=>{try{const a=await _(1009,60,X),{result:{djRadios:s}}=a;s&&s.length>0&&s.forEach((a=>{const{id:s,name:e,picUrl:t,playCount:l}=a;la.push({name:e,id:s,image:t,playCount:l,creator:{nickname:"",avatarUrl:""},tag:[],description:""})}))}catch(a){b(R.ERROR,a.message)}setTimeout((()=>{oa.value=!1}),500),ma[4]=0==la.length}),oa):"singer"==a&&0==ia.length&&j((async()=>{try{const a=await _(100,60,X),{result:{artists:s}}=a;s&&s.length>0&&s.forEach((a=>{const{id:s,name:e,picUrl:t,accountId:l}=a;ia.push({id:s,name:e,avatar:t,score:l})}))}catch(a){b(R.ERROR,a.message)}setTimeout((()=>{oa.value=!1}),500),ma[5]=0==ia.length}),oa)};return j((async()=>{try{const a=await _(1,100,X),{result:{songs:s}}=a;if(s&&s.length>0){const a=s.map((a=>a.id)).join(","),e=await E(a),{songs:t}=e;t.forEach((a=>{w([],Y,a)})),L(a,Y),J.initLoveMusic(Y)}}catch(a){b(R.ERROR,a.message)}na.value=!1}),na),(s,e)=>{const t=a;return g(),o("div",D,[n(m(O,{songs:Y,"song-id-mapper":u($),onCloseSelect:H},null,8,["songs","song-id-mapper"]),[[r,Z.value]]),n(m(C,{onGetActive:ua,active:"song",class:"search-tab"},{content:c((()=>[m(t,{label:"歌曲",name:"song"},{default:c((()=>[d("div",G,[d("div",N,[m(k,{songs:Y},null,8,["songs"]),m(U,{icon:"",onClick:Q,name:"全部收藏"}),m(U,{icon:"",name:"批量操作",onClick:e[0]||(e[0]=a=>Z.value=!Z.value)})]),m(T,{songs:Y,"song-id-mapper":u($),height:u(F)},null,8,["songs","song-id-mapper","height"])])])),_:1}),m(t,{label:"视频",name:"video"},{default:c((()=>[m(z,{"is-loading":oa.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ma[0]]]),n(m(B,{mvs:aa},null,8,["mvs"]),[[r,!ma[0]]])])),_:1}),m(t,{label:"MV",name:"mv"},{default:c((()=>[m(z,{"is-loading":oa.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ma[1]]]),n(m(B,{mvs:sa},null,8,["mvs"]),[[r,!ma[1]]])])),_:1}),m(t,{label:"专辑",name:"album"},{default:c((()=>[m(z,{"is-loading":oa.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ma[2]]]),n(m(M,{albums:ea},null,8,["albums"]),[[r,!ma[2]]])])),_:1}),m(t,{label:"歌单",name:"playList"},{default:c((()=>[m(z,{"is-loading":oa.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ma[3]]]),n(m(P,{playlists:ta},null,8,["playlists"]),[[r,!ma[3]]])])),_:1}),m(t,{label:"电台",name:"radio"},{default:c((()=>[m(z,{"is-loading":oa.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ma[4]]]),n(m(P,{playlists:la,type:"radio"},null,8,["playlists"]),[[r,!ma[4]]])])),_:1}),m(t,{label:"歌手",name:"singer"},{default:c((()=>[m(z,{"is-loading":oa.value},null,8,["is-loading"]),n(m(A,{text:"暂无搜索结果"},null,512),[[r,ma[5]]]),n(m(I,{"singer-list":ia},null,8,["singer-list"]),[[r,!ma[5]]])])),_:1})])),_:1},512),[[r,!Z.value]])])}}}),[["__scopeId","data-v-a4015d52"]]);export{V as default};
