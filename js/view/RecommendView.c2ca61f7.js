import{u as s,w as a,h as e}from"../element-plus/element-plus.70abbed3.js";import{G as t,ax as i,o,M as l,O as n,c as r,a7 as c,a as p,F as m,Z as u,U as d,u as h,T as f,ay as g,az as y,z as j}from"../@vue/@vue.7ad02ad1.js";import{_ as v,u as _,a as x,g as k,b as C,c as b,d as z,e as w,f as E,h as I,m as U,i as R}from"../../static/index-a903482c.js";/* empty css                                                                                                                     */import{A}from"../index/index.565291c8.js";import{A as G}from"../index/index.516774d5.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../vue-router/vue-router.53ff932e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";const M=["src"],O=v(t({__name:"index",props:{pictures:null,type:null,height:null,position:null},setup:e=>(i((s=>({"033a72af":e.height}))),(t,i)=>{const u=s,d=a;return o(),l(d,{height:e.height,type:e.type,"indicator-position":e.position,class:"carousel"},{default:n((()=>[(o(!0),r(m,null,c(e.pictures,(s=>(o(),l(u,{key:s},{default:n((()=>[p("img",{src:s.pic},null,8,M)])),_:2},1024)))),128))])),_:1},8,["height","type","indicator-position"])})}),[["__scopeId","data-v-1993c157"]]),B=s=>(g("data-v-c6ecaad1"),s=s(),y(),s),D={class:"main-container"},F={class:"musiclist"},L=B((()=>p("h4",{class:"title"},"推荐新音乐",-1))),N={class:"content"},P=["onClick"],S=[B((()=>p("span",{class:"iconfont"},"",-1)))],T={class:"right"},V=v(t({__name:"RecommendView",setup(s){i((s=>({"6c405e40":h(a),"6c5f9d08":h(t),"537f6357":h(l),"2fcf4546":h(g),"42b967e4":h(n)})));const{fontColor:a,fontBlack:t,boxShadow:l,themeColor:n,fontGray:g}=_(),{playMusic:y}=x(),v=u([]),M=u([]),B=u([]),V=u([]),Z=j("firstLoading");return k((async()=>{try{(await Promise.all([C(),b(10),z(40),w(10,"内地","全部","最新")])).forEach(((s,a)=>{if(0==a){const{banners:a}=s;a.forEach((s=>{const{imageUrl:a,targetId:e}=s;v.push({id:e,pic:a})}))}else if(1==a){const{playlists:a}=s;a.forEach((s=>{if(M.length<10){const{name:a,id:e,coverImgUrl:t,playCount:i,description:o,tags:l,creator:n}=s;M.push({name:a,id:e,playCount:i,description:o,image:t,tag:l,creator:{avatarUrl:n.avatarUrl,nickname:n.nickname}})}}))}else if(2==a){const{data:{list:a}}=s;for(let s of a){const{fee:a}=s.data;if(!(B.length<10))break;"0"!=a&&"8"!=a||E(B,s.data)}I(B)}else{const{data:a}=s;a.forEach((s=>{const{id:a,name:e,cover:t,playCount:i,artistName:o}=s;V.push({id:a,name:e,image:t,playCount:i,artist:o})}))}}))}catch(s){U(R.ERROR,s.message)}Z.value=!1}),Z),(s,a)=>{const t=e;return o(),r("div",D,[d(h(O),{pictures:v.slice(0,5),type:"card",height:"230px"},null,8,["pictures"]),d(h(A),{title:"你的歌单补给站",playlists:M},null,8,["playlists"]),p("div",F,[L,p("div",N,[(o(!0),r(m,null,c(B,(s=>(o(),r("div",{key:s.id,class:"song-recommend"},[p("div",{onClick:a=>h(y)(s),class:"mask"},S,8,P),d(t,{src:s.songImage,loading:"lazy",class:"left"},null,8,["src"]),p("div",T,[p("p",null,f(s.name),1),p("p",null,f(s.singer),1)])])))),128))])]),d(h(G),{title:"最新mv",mvs:V,class:"mv-list"},null,8,["mvs"])])}}}),[["__scopeId","data-v-c6ecaad1"]]);export{V as default};
