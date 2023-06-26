import{g as a,w as e}from"../element-plus/element-plus.4a0090f9.js";import{g as s,a as t,b as o,l,e as n,d as i,m as r,i as m,j as c,n as p,o as u,p as d,q as g,r as v,P as h,C as y,s as j,_ as f}from"../../assets/index-80c2d692.js";import{G as R,ax as b,r as k,Z as w,i as C,c as L,P,V as O,U,u as _,a as B,T as z,F as E,a7 as I,M,R as S,O as x,z as D,o as T}from"../@vue/@vue.59fec093.js";import{b as q}from"../vue-router/vue-router.2f940de9.js";import{O as G}from"../OnlineBatch/OnlineBatch.7d898b7d.js";import{P as F,_ as N}from"../PlayButton/PlayButton.3b452e0e.js";import{T as V}from"../Tab/Tab.f22b580c.js";import{D as $}from"../DecoratedButton/DecoratedButton.3b84b65f.js";import{M as H}from"../MoreButton/MoreButton.e415d8f0.js";import{_ as Z}from"../NoSearch/NoSearch.87300ed6.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.81428a33.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const A={class:"playlist-container scroll-container"},J={class:"header"},K=["src"],Q={class:"right"},W={class:"title"},X={class:"creator"},Y={class:"creator-name"},aa={class:"tag"},ea={class:"description"},sa={class:"header-operation"},ta=f(R({__name:"PlayListView",setup(f){b((a=>({"1a5546bd":_(R),"1a45a759":_(ta),b8164d98:_(oa),"2fd5c06e":_(la)})));const R=s().get("fontColor"),ta=s().get("fontBlack"),oa=s().get("shadow"),la=D("fontGray"),na=k(!1),ia=t(),ra=q(),ma=ra.query.id+"",ca=ra.query.type+"",pa=w({id:ma,name:"",image:"",playCount:"",tag:[],description:"",creator:{nickname:"",avatarUrl:""}}),ua=w([]),da=w([]),ga=C((()=>new Map(ua.map(((a,e)=>[a.id,e]))))),va=k(1),ha=k(30),ya=C((()=>ua.slice((va.value-1)*ha.value,va.value*ha.value))),ja=C((()=>ua.length)),fa=a=>{va.value=a},Ra=D("firstLoading"),ba=k(!1),ka=a=>{ba.value=a},wa=a=>{ba.value=a},Ca=()=>{j("我有一个精品歌单分享给你："+pa.name+"，地址：https://www.liyinchao.cloud/#"+ra.fullPath)},La=()=>{"playlist"==ca?ia.addLove(pa,ia.lovePlaylist,ia.lovePlaylistId):ia.addLove(pa,ia.loveRadio,ia.loveRadioId)};return o((async()=>{if("playlist"==ca){try{const a=await l(ma),{playlist:{name:e,coverImgUrl:s,description:t,tags:o,creator:n,playCount:i}}=a;pa.name=e,pa.image=s,pa.description=t,pa.tag=o,pa.creator.avatarUrl=n.avatarUrl,pa.creator.nickname=n.nickname,pa.playCount=i,ia.initLoveStatus(pa,ia.lovePlaylistId)}catch(a){n(i.ERROR,a.message)}try{const a=await r(ma),{songs:e}=a,s=[];e.forEach((a=>{m(s,ua,a)})),ia.initLoveMusic(ua),c(s.join(","),ua)}catch(a){n(i.ERROR,a.message)}try{const a=await p(ma,100),{comments:e,hotComments:s}=a;u(s,da),u(e,da),na.value=0==da.length}catch(a){n(i.ERROR,a.message)}}else{try{const a=await d(ma),{data:{name:e,dj:{avatarUrl:s,nickname:t},picUrl:o,desc:l,subCount:n}}=a;pa.name=e,pa.id=ma,pa.description=l,pa.image=o,pa.playCount=n,pa.creator.nickname=t,pa.creator.avatarUrl=s,ia.initLoveStatus(pa,ia.loveRadioId)}catch(a){n(i.ERROR,a.message)}try{const a=await g(ma,100),{programs:e}=a,s=[];e.forEach((a=>{const{mainSong:{name:e,id:t,fee:o,artists:l,album:{name:n,picUrl:i},duration:r}}=a;s.push(t),ua.push({id:t,name:e,singer:l[0].name,songImage:i,album:n,available:o,time:r})})),ia.initLoveMusic(ua),c(s.join(","),ua)}catch(a){n(i.ERROR,a.message)}v(ma,"7",da,(()=>{na.value=0==da.length}))}Ra.value=!1}),Ra),(s,t)=>{const o=a,l=h,n=e;return T(),L("div",A,[P(U(G,{"song-id-mapper":_(ga),songs:_(ya),onCloseSelect:ka},null,8,["song-id-mapper","songs"]),[[O,ba.value]]),P(B("div",J,[B("img",{src:pa.image,class:"left-image"},null,8,K),B("div",Q,[B("p",W,z(pa.name),1),B("div",X,[U(o,{src:pa.creator.avatarUrl},null,8,["src"]),B("span",Y,z(pa.creator.nickname),1),B("div",aa,[(T(!0),L(E,null,I(pa.tag,(a=>(T(),L("span",{key:a},"#"+z(a),1)))),128))])]),B("p",ea,z(pa.description),1),B("div",sa,[U(F,{songs:_(ya)},null,8,["songs"]),U($,{name:pa.isLove?"取消收藏":"收藏",icon:pa.isLove?"":"","icon-style":pa.isLove?"color:#ff6a6a;":"",onClick:La},null,8,["name","icon","icon-style"]),ba.value?S("",!0):(T(),M(H,{key:0,"share-to":Ca,onOpenSelect:wa}))])])],512),[[O,!ba.value]]),P(U(V,{active:"song",class:"playlist-tab"},{content:x((()=>[U(n,{label:`歌曲 ${ua.length}`,name:"song"},{default:x((()=>[U(N,{songs:_(ya),"song-id-mapper":_(ga)},null,8,["songs","song-id-mapper"]),P(U(l,{"cur-page":va.value,"page-size":ha.value,total:_(ja),onPageChange:fa},null,8,["cur-page","page-size","total"]),[[O,ha.value<_(ja)]])])),_:1},8,["label"]),U(n,{label:`评论 ${da.length<10?da.length+10:da.length}`,name:"comment"},{default:x((()=>[na.value?(T(),M(Z,{key:1,size:280,text:"暂无评论数据"})):(T(),M(y,{key:0,comments:da},null,8,["comments"]))])),_:1},8,["label"])])),_:1},512),[[O,!ba.value]])])}}}),[["__scopeId","data-v-e34ff2d9"]]);export{ta as default};
