import{x as a,h as e,y as s}from"../element-plus/element-plus.79622da4.js";import{G as t,ax as o,Z as l,d as i,i as n,M as r,O as c,u as m,o as p,a as u,P as d,V as v,U as g,T as y,c as _,a7 as f,F as h,R as j,z as x}from"../@vue/@vue.7ad02ad1.js";import{b}from"../vue-router/vue-router.53ff932e.js";import{u as k,h as w,O as U,i as L,j as P,e as z,f as R,m as S,M as C,k as I,l as E,s as O,n as M,C as G,P as q,S as B,o as F,p as H,_ as T}from"../../static/index-3843a64e.js";import{O as V}from"../index/index.be897d20.js";import{M as $}from"../index/index.b789a33b.js";import{P as J,_ as K}from"../index.vue_vue_type_style_index_0_scoped_b3813f91_lang/index.vue_vue_type_style_index_0_scoped_b3813f91_lang.07178c69.js";/* empty css                                                                                                                     */import{N}from"../index/index.25024e59.js";import{T as Z}from"../index/index.4a2ecc70.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";const A={class:"playlist-container scroll-container"},D={class:"header"},Q=["src"],W={class:"right"},X={class:"title"},Y={class:"creator"},aa={class:"creator-name"},ea={class:"tag"},sa={class:"description"},ta={class:"header-operation"},oa=T(t({__name:"PlayListView",setup(t){o((a=>({"2891f672":m(T),"28b1353a":m(oa),"7556973e":m(la),"0fde787f":m(ia)})));const{fontColor:T,fontBlack:oa,boxShadow:la,fontGray:ia,contentHeight:na}=k(),ra=w(),ca=b(),ma=ca.query.id+"",pa=ca.query.type+"",ua=l({id:ma,name:"",image:"",playCount:"",tag:[],description:"",creator:{nickname:"",avatarUrl:""}}),da=l([]),va=l([]),ga=i(1),ya=i(U),_a=n((()=>da.slice((ga.value-1)*ya.value,ga.value*ya.value))),fa=n((()=>da.length)),ha=x("firstLoading"),ja=i(!1),xa=i(),ba=n((()=>0==va.length)),ka=()=>{F("我有一个精品歌单分享给你："+ua.name+"，地址：https://www.liyinchao.cloud"+ca.fullPath)},wa=()=>{"playlist"==pa?ra.addLove(ua,ra.lovePlaylist,ra.lovePlaylistId):ra.addLove(ua,ra.loveRadio,ra.loveRadioId)};return(async()=>{if(ha.value=!0,"playlist"==pa)try{(await Promise.all([L(ma),P(ma)])).forEach(((a,e)=>{if(0==e){const{playlist:{name:e,coverImgUrl:s,description:t,tags:o,creator:l,playCount:i}}=a;ua.name=e,ua.image=s,ua.description=t,ua.tag=o,ua.creator.avatarUrl=l.avatarUrl,ua.creator.nickname=l.nickname,ua.playCount=i,ra.initLoveStatus(ua,ra.lovePlaylistId)}else if(1==e){const{songs:e}=a;e.forEach((a=>{z(da,a)})),ra.initLoveMusic(da),R(da)}}))}catch(a){S(C.ERROR,a.message)}else try{(await Promise.all([I(ma),E(ma,100)])).forEach(((a,e)=>{if(0==e){const{data:{name:e,dj:{avatarUrl:s,nickname:t},picUrl:o,desc:l,subCount:i}}=a;ua.name=e,ua.id=ma,ua.description=l,ua.image=o,ua.playCount=i,ua.creator.nickname=t,ua.creator.avatarUrl=s,ra.initLoveStatus(ua,ra.loveRadioId)}else if(1==e){const{programs:e}=a;e.forEach((a=>{const{mainSong:{name:e,id:s,fee:t,artists:o,album:{name:l,picUrl:i},duration:n}}=a;da.push({id:s,name:e,singer:o[0].name,songImage:i,album:l,available:t,time:n})})),ra.initLoveMusic(da),R(da)}}))}catch(a){S(C.ERROR,a.message)}await O(H),ha.value=!1;M(ma,"playlist"==pa?"2":"4",va)})(),(t,o)=>{const l=e,i=s,n=a;return p(),r(n,{"max-height":m(na)},{default:c((()=>[u("div",A,[d(g(m(V),{songs:m(_a),"show-select":ja.value,"onUpdate:showSelect":o[0]||(o[0]=a=>ja.value=a),ref_key:"batch",ref:xa},null,8,["songs","show-select"]),[[v,ja.value]]),d(u("div",D,[u("img",{src:ua.image,class:"left-image"},null,8,Q),u("div",W,[u("p",X,y(ua.name),1),u("div",Y,[g(l,{src:ua.creator.avatarUrl},null,8,["src"]),u("span",aa,y(ua.creator.nickname),1),u("div",ea,[(p(!0),_(h,null,f(ua.tag,(a=>(p(),_("span",{key:a},"#"+y(a),1)))),128))])]),u("p",sa,y(ua.description),1),u("div",ta,[g(m(J),{songs:m(_a)},null,8,["songs"]),g(m(G),{name:ua.isLove?"取消收藏":"收藏",icon:ua.isLove?"":"","icon-style":ua.isLove?"color:#ff6a6a;":"",onClick:wa},null,8,["name","icon","icon-style"]),ja.value?j("",!0):(p(),r(m($),{key:0,onShare:ka,onOpenSelect:o[1]||(o[1]=a=>{var e;return null==(e=xa.value)?void 0:e.openSelectBox()})}))])])],512),[[v,!ja.value]]),d(g(m(Z),{active:"song",class:"playlist-tab"},{content:c((()=>[g(i,{label:`歌曲 ${da.length}`,name:"song"},{default:c((()=>[g(m(K),{songs:m(_a),"page-size":ya.value},null,8,["songs","page-size"]),d(g(m(q),{"cur-page":ga.value,"onUpdate:curPage":o[2]||(o[2]=a=>ga.value=a),"page-size":ya.value,total:m(fa)},null,8,["cur-page","page-size","total"]),[[v,ya.value<m(fa)]])])),_:1},8,["label"]),g(i,{label:`评论 ${va.length<10?va.length+10:va.length}`,name:"comment"},{default:c((()=>[d(g(m(B),{comments:va},null,8,["comments"]),[[v,!m(ba)]]),d(g(m(N),{size:280,text:"暂无评论数据"},null,512),[[v,m(ba)]])])),_:1},8,["label"])])),_:1},512),[[v,!ja.value]])])])),_:1},8,["max-height"])}}}),[["__scopeId","data-v-a5444304"]]);export{oa as default};
