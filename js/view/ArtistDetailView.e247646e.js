import{u as a}from"../element-plus/element-plus.372e8740.js";import{G as s,ax as e,d as t,Z as o,i,c as l,P as n,V as r,U as m,u as c,a as u,T as p,R as d,M as v,O as g,z as h,o as f,F as j,a7 as y,ay as b,az as _}from"../@vue/@vue.7ad02ad1.js";import{b as L}from"../vue-router/vue-router.47595bf3.js";import{g as R,a as w,b as M,K as O,e as E,d as S,L as T,r as x,M as B,N as D,O as k,t as z,i as A,j as I,s as C,_ as G}from"../../assets/index-f2c2582e.js";import{M as N}from"../Mv/Mv.2c5334f1.js";import{A as U}from"../Albums/Albums.ac8717a0.js";import{D as q}from"../DecoratedButton/DecoratedButton.47667f48.js";import{M as P}from"../MoreButton/MoreButton.f8f50346.js";import{T as V}from"../Tab/Tab.8e4b6db1.js";import{_ as F}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.f9082fce.js";import{O as K}from"../OnlineBatch/OnlineBatch.5a39cbf2.js";import{L as Z}from"../Loading/Loading.261f6798.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.8c6d26c7.js";const H={class:"artist-detail-container scroll-container"},J={class:"header"},Q=["src"],W={class:"right"},X={class:"name"},Y={class:"info"},$={key:0},aa=(a=>(b("data-v-f612a26d"),a=a(),_(),a))((()=>u("p",{class:"job"},"职业：歌手、词曲创作者",-1))),sa={class:"fans"},ea={class:"header-operation"},ta={class:"content"},oa={class:"detail"},ia={class:"desc"},la=G(s({__name:"ArtistDetailView",setup(s){e((a=>({80776764:c(b),"8096a62c":c(_),ca52b7d0:c(la),"4963dec5":c(G)})));const b=R().get("fontColor"),_=R().get("fontBlack"),G=R().get("shadow"),la=h("fontGray"),na=w(),ra=L(),ma=ra.query.id+"",ca=ra.query.score,ua=t(!1),pa=h("firstLoading"),da=h("hideScroll"),va=o({name:"",score:Math.floor(Number.parseInt(ca)/1e4)+"万",id:ma,avatar:"",alias:[]}),ga=o([]),ha=o([]),fa=i((()=>new Map(ha.map(((a,s)=>[a.id,s]))))),ja=o([]),ya=o([]),ba=t(!1),_a=a=>{ba.value=a},La=a=>{da(),ba.value=a},Ra=()=>{C("我有一个宝藏歌手推荐给你："+va.name+"，地址：https://www.liyinchao.cloud/#"+ra.fullPath)},wa=a=>{da(),"mv"==a&&0==ja.length?M((async()=>{try{const a=await O(ma),{mvs:s}=a;s.forEach((a=>{const{id:s,name:e,artistName:t,imgurl16v9:o,playCount:i}=a;ja.push({id:s,name:e,artist:t,image:o,playCount:i})}))}catch(a){E(S.ERROR,a.message)}setTimeout((()=>{ua.value=!1}),500)}),ua):"album"==a&&0==ya.length?M((async()=>{try{const a=await T(ma),{hotAlbums:s}=a;s.forEach((a=>{const{picUrl:s,name:e,publishTime:t}=a;ya.push({name:e,id:a.id,cover:s,publishTime:x(t),artistId:ma+""})}))}catch(a){E(S.ERROR,a.message)}setTimeout((()=>{ua.value=!1}),500)}),ua):"detail"==a&&0==ga.length&&M((async()=>{try{const a=await B(ma),{introduction:s}=a;s.forEach((a=>{ga.push({title:a.ti,content:a.txt})}))}catch(a){E(S.ERROR,a.message)}setTimeout((()=>{ua.value=!1}),500)}),ua)};return M((async()=>{try{const a=await D(ma),{artist:s}=a,{name:e,alias:t,picUrl:o,briefDesc:i}=s;va.name=e,va.alias=t,va.avatar=o,va.briefDesc=i,na.initLoveStatus(va,na.loveSingerId)}catch(a){E(S.ERROR,a.message)}try{const a=await k(ma,1e3),{songs:s}=a,e=s.map((a=>a.id)).join(","),t=await z(e),{songs:o}=t;o.forEach((a=>{A([],ha,a)})),na.initLoveMusic(ha),I(e,ha)}catch(a){E(S.ERROR,a.message)}pa.value=!1}),pa),(s,e)=>{var t,o;const i=a;return f(),l("div",H,[n(m(K,{songs:ha,"song-id-mapper":c(fa),onCloseSelect:_a},null,8,["songs","song-id-mapper"]),[[r,ba.value]]),n(u("div",J,[u("img",{src:va.avatar,class:"left"},null,8,Q),u("div",W,[u("h4",X,p(va.name),1),u("div",Y,[0!=(null==(t=va.alias)?void 0:t.length)?(f(),l("p",$," 英文名："+p(null==(o=va.alias)?void 0:o.join("、")),1)):d("",!0),aa]),u("span",sa,"粉丝数："+p(va.score),1),u("div",ea,[m(q,{name:va.isLove?"取消关注":"关注",icon:va.isLove?"":"","icon-style":va.isLove?"color:#ff6a6a;":"",onClick:e[0]||(e[0]=a=>c(na).addLove(va,c(na).loveSinger,c(na).loveSingerId))},null,8,["name","icon","icon-style"]),m(q,{icon:"",name:"歌手电台"}),ba.value?d("",!0):(f(),v(P,{key:0,"share-to":Ra,onOpenSelect:La}))])])],512),[[r,!ba.value]]),n(u("div",ta,[m(V,{active:"hot",onGetActive:wa},{content:g((()=>[m(i,{label:"精选",name:"hot"},{default:g((()=>[m(F,{songs:ha,"song-id-mapper":c(fa)},null,8,["songs","song-id-mapper"])])),_:1}),m(i,{label:"专辑",name:"album"},{default:g((()=>[m(Z,{isLoading:ua.value},null,8,["isLoading"]),m(U,{albums:ya},null,8,["albums"])])),_:1}),m(i,{label:"视频",name:"mv"},{default:g((()=>[m(Z,{isLoading:ua.value},null,8,["isLoading"]),m(N,{mvs:ja},null,8,["mvs"])])),_:1}),m(i,{label:"详情",name:"detail"},{default:g((()=>[m(Z,{isLoading:ua.value},null,8,["isLoading"]),u("div",oa,[u("p",ia,p(va.briefDesc),1),ga.length>0?(f(!0),l(j,{key:0},y(ga,(a=>(f(),l(j,{key:a.title},[u("h4",null,p(a.title),1),u("p",null,p(a.content),1)],64)))),128)):d("",!0)])])),_:1})])),_:1})],512),[[r,!ba.value]])])}}}),[["__scopeId","data-v-f612a26d"]]);export{la as default};
