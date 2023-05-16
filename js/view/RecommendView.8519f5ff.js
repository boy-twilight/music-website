import{s,t as a,g as e}from"../element-plus/element-plus.372e8740.js";import{G as t,ax as i,M as l,O as o,o as n,c as r,a7 as c,a as m,F as p,Z as u,U as d,u as v,T as g,ay as h,az as y,z as f,n as j}from"../@vue/@vue.7ad02ad1.js";import{s as S}from"../pinia/pinia.07d51cb2.js";import{_ as R,g as I,u as E,a as O,b,s as k,c as _,d as N,e as w,f as C,h as x,i as z,j as L,k as M,l as P,m as U}from"../../assets/index-4587ef8d.js";import{P as F}from"../PlayList/PlayList.c20e3470.js";import{M as T}from"../Mv/Mv.7d2a1764.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.53ff932e.js";import"../nprogress/nprogress.8c6d26c7.js";const B=["src"],G=R(t({__name:"Carousel",props:{pictures:null,type:null,height:null,position:null},setup:e=>(i((s=>({"694f0987":e.height}))),(t,i)=>{const u=a,d=s;return n(),l(d,{height:e.height,type:e.type,"indicator-position":e.position,class:"carousel"},{default:o((()=>[(n(!0),r(p,null,c(e.pictures,(s=>(n(),l(u,{key:s},{default:o((()=>[m("img",{src:s},null,8,B)])),_:2},1024)))),128))])),_:1},8,["height","type","indicator-position"])})}),[["__scopeId","data-v-3ac905cd"]]),V=s=>(h("data-v-a672aeaa"),s=s(),y(),s),Z={class:"main-container"},q={class:"musiclist"},A=V((()=>m("h4",{class:"title"},"推荐新音乐",-1))),D={class:"content"},H=["onClick"],J=[V((()=>m("span",{class:"iconfont"},"",-1)))],K={class:"right"},Q=R(t({__name:"RecommendView",setup(s){i((s=>({"270b324e":v(a),"543598a6":v(t),"7f28ab41":v(l)})));const a=I().get("fontColor"),t=I().get("fontBlack"),l=I().get("shadow"),o=E(),{songList:h,current:y,isPlay:R,playProcess:B,playTime:V,songListId:Q}=S(o),W=O(),X=u(b(k.SESSION,"recommend-banners")||[]),Y=u(b(k.SESSION,"recommend-playlists")||[]),$=u(b(k.SESSION,"recommend-songlists")||[]),ss=u(b(k.SESSION,"recommend-mvlists")||[]),as=f("firstLoading");return 0==X.length&&_((async()=>{try{const s=await N(),{banners:a}=s;a.forEach((s=>{const{imageUrl:a}=s;X.push(a)})),w(k.SESSION,"recommend-banners",X)}catch(s){C(x.ERROR,s.message)}try{const s=await z(),{playlists:a}=s;a.forEach((s=>{if(Y.length<10){const{name:a,id:e,coverImgUrl:t,playCount:i,description:l,tags:o,creator:n}=s;Y.push({name:a,id:e,playCount:i,description:l,image:t,tag:o,creator:{avatarUrl:n.avatarUrl,nickname:n.nickname}})}})),w(k.SESSION,"recommend-playlists",Y)}catch(s){C(x.ERROR,s.message)}try{const s=await L(40),{data:{list:a}}=s,e=[];for(let t of a){const{fee:s}=t.data;if(!($.length<10))break;"0"!=s&&"8"!=s||M(e,$,t.data)}P(e.join(","),$,"recommend-songlists")}catch(s){C(x.ERROR,s.message)}try{const s=await U(10,"内地","全部","最新"),{data:a}=s;a.forEach((s=>{const{id:a,name:e,cover:t,playCount:i,artistName:l}=s;ss.push({id:a,name:e,image:t,playCount:i,artist:l})})),w(k.SESSION,"recommend-mvlists",ss)}catch(s){C(x.ERROR,s.message)}as.value=!1}),as),(s,a)=>{const t=e;return n(),r("div",Z,[d(G,{pictures:X.slice(0,5),type:"card",height:"230px"},null,8,["pictures"]),d(F,{title:"你的歌单补给站",playlists:Y},null,8,["playlists"]),m("div",q,[A,m("div",D,[(n(!0),r(p,null,c($,(s=>(n(),r("div",{key:s.id,class:"song-recommend"},[m("div",{onClick:a=>(async s=>{if("0"==s.available||"8"==s.available){const a=Q.value.get(s.id);null==a?(W.addRecord(s,W.songRecord,W.loveMusicId,"songRecord"),0==y.value?(R&&(R.value=!1),B.value=0,V.value=0,h.value.unshift(s),await j(),R.value=!0):(h.value.unshift(s),y.value=0)):y.value!=a?y.value=a:R.value=!0}else(s.available="1")?C(x.INFO,"此歌曲为vip专属"):(s.available="10")&&C(x.INFO,"此歌曲尚未拥有版权，请切换其它歌曲")})(s),class:"mask"},J,8,H),d(t,{src:s.songImage,loading:"lazy",class:"left"},null,8,["src"]),m("div",K,[m("p",null,g(s.name),1),m("p",null,g(s.singer),1)])])))),128))])]),d(T,{title:"最新mv",mvs:ss,class:"mv-list"},null,8,["mvs"])])}}}),[["__scopeId","data-v-a672aeaa"]]);export{Q as default};
