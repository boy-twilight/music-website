import{x as e,h as a}from"../element-plus/element-plus.79622da4.js";import{G as s,ax as o,d as t,Z as l,i,y as n,M as r,O as c,u as m,o as d,a as u,U as p,P as v,V as y,c as h,a7 as f,S as j,F as g,W as _,T as C,z as x,n as k,aq as b,ay as w,az as V}from"../@vue/@vue.7ad02ad1.js";import{b as R,u as S}from"../vue-router/vue-router.53ff932e.js";import{u as T,h as q,A as z,B as E,D as I,E as L,z as N,m as O,M as P,l as A,F as D,G as F,H as G,I as H,C as U,S as Z,q as B,_ as M}from"../../static/index-084673d3.js";import{D as W}from"../dplayer/dplayer.beff636d.js";/* empty css                                                                                                                     */import{A as J}from"../index/index.8bbc9262.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";const K=e=>(w("data-v-99543881"),e=e(),V(),e),Q={class:"video-container scroll-container"},X={class:"players-container"},Y={class:"recommend-container"},$={class:"content"},ee={class:"mask"},ae=["onClick"],se=K((()=>u("div",{class:"players"},null,-1))),oe={class:"detail"},te={class:"title"},le={class:"artist-info"},ie={class:"operation"},ne={class:"comment-area"},re=K((()=>u("h4",{class:"title"},"全部评论",-1))),ce=K((()=>u("span",{class:"iconfont_1"}," ",-1))),me=M(s({__name:"VideoPlayView",setup(s){o((e=>({"338dad61":m(w),"337e0dfd":m(V),"3eb956b6":m(me),"0f2c1b4f":m(de),"85a58050":m(M),aa9e00a6:m(K)})));const{fontColor:w,fontBlack:V,boxShadow:M,themeColor:K,fontGray:me,videoHeight:de,contentHeight:ue}=T(),pe=q(),ve=t(),ye=R(),he=S(),fe=ye.query.id+"",je=l({id:fe,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),ge=l([]),_e=i((()=>[je,...ge])),Ce=x("firstLoading"),xe=t(!1),ke=l([]),be=t(!1),we=()=>{B("我在https://www.liyinchao.cloud"+ye.fullPath+"观看"+je.name+",快来和我一起观看把！")};n((()=>{var e;document.querySelector(".dplayer-video").onended=null,null==(e=ve.value)||e.destroy()}));return(async()=>{Ce.value=!0;if(/.*[A-Z]+.*/.test(fe))try{(await Promise.all([D(fe),F(fe),G(fe),H(fe,1e3)])).forEach(((e,a)=>{if(0==a){const{data:{title:a,coverUrl:s,publishTime:o,playTime:t,creator:l}}=e;je.name=a,je.image=s,je.playCount=t,je.publishTime=N(o),je.artist=l.nickname}else if(1==a){const{urls:a}=e;a?je.url=a[0].url:O(P.INFO,"此视频暂无播放资源，请切换下一个。")}else if(2==a){const{data:a}=e;a.forEach((e=>{const{title:a,coverUrl:s,vid:o,playTime:t,creator:l}=e;ge.push({id:o,name:a,image:s,playCount:t,artist:l[0].userName})}))}else if(3==a){const{comments:a,hotComments:s}=e;A(s,ke),A(a,ke)}}))}catch(e){O(P.ERROR,e.message)}else try{(await Promise.all([z(fe),E(fe),I(fe),L(fe,1e3)])).forEach(((e,a)=>{if(0==a){const{data:{name:a,artistName:s,cover:o,playCount:t,duration:l,publishTime:i}}=e;je.name=a,je.playCount=t,je.image=o,je.artist=s,je.time=l,je.publishTime=N(i)}else if(1==a){const{data:{url:a,fee:s}}=e;a?(je.url=a,je.available=s):O(P.INFO,"此视频暂无播放资源，请切换下一个。")}else if(2==a){const{mvs:a}=e;a&&a.forEach((e=>{const{id:a,cover:s,name:o,artistName:t,playCount:l}=e;ge.push({id:a,image:s,name:o,artist:t,playCount:l})}))}else if(3==a){const{comments:a,hotComments:s}=e;A(s,ke),A(a,ke)}}))}catch(e){O(P.ERROR,e.message)}pe.addRecord(je,pe.videoRecord,pe.videoRecordId),pe.initLoveStatus(je,pe.loveVideoId),(async()=>{await k(),ve.value=new W({container:document.querySelector(".players"),video:{url:je.url,thumbnails:je.image,type:"video/mp4",pic:je.image},autoplay:!1,loop:!1,hotkey:!0,theme:null==K?void 0:K.value,chromecast:!0,lang:"zh-cn",screenshot:!0,preload:"auto",volume:.9,playbackSpeed:[.75,1,1.25,1.5,1.75,2],contextmenu:[{text:"下载",click:()=>{pe.addVideoDownload(je)}},{text:"收藏",click:()=>{pe.addLove(je,pe.loveVideo,pe.loveVideoId)}},{text:"分享",click:()=>{we()}}]}),document.querySelector(".dplayer-video").onended=()=>{xe.value=!0}})(),Ce.value=!1})(),(s,o)=>{const t=a,l=e,i=b("prevent");return d(),r(l,{"max-height":m(ue)},{default:c((()=>[u("div",Q,[u("div",X,[p(_,{name:"show"},{default:c((()=>[v(u("div",Y,[v(u("h4",null,"相关推荐",512),[[y,m(_e).length>1]]),u("div",$,[(d(!0),h(g,null,f(m(_e),((e,a)=>(d(),h("div",{class:"recommend-video",key:e.id},[p(t,{src:e.image,class:"image"},null,8,["src"]),u("div",ee,[v((d(),h("span",{class:"iconfont play",onClick:s=>((e,a)=>{0==e?(xe.value=!1,document.querySelector(".dplayer-video").play()):he.push({name:"video",query:{id:a}})})(a,e.id)},[j("")],8,ae)),[[i]])])])))),128))])],512),[[y,xe.value]])])),_:1}),se]),u("div",oe,[u("p",te,C(je.name),1),u("div",le,[u("span",null,C(/.*[A-Z]+.*/.test(fe)?"创作者："+je.artist:"演唱："+je.artist),1),u("span",null,C(je.playCount)+"次观看",1),u("span",null,"发布时间："+C(je.publishTime),1)]),v(u("div",ie,[p(m(U),{name:je.isLove?"取消收藏":"收藏",icon:je.isLove?"":"","icon-style":je.isLove?"color:#ff6a6a;":"",onClick:o[0]||(o[0]=e=>m(pe).addLove(je,m(pe).loveVideo,m(pe).loveVideoId)),class:"operate"},null,8,["name","icon","icon-style"]),p(m(U),{name:"下载",onClick:o[1]||(o[1]=e=>m(pe).addVideoDownload(je)),icon:"",class:"operate"}),p(m(U),{name:"分享",icon:"",onClick:we,class:"operate"}),p(m(U),{name:"评论",icon:"",onClick:o[2]||(o[2]=e=>be.value=!0),class:"operate"})],512),[[y,!be.value]])]),v(p(m(J),{mvs:ge,title:"相关推荐"},null,8,["mvs"]),[[y,!be.value&&ge.length>0]]),v(u("div",ne,[re,u("button",{class:"exit",onClick:o[3]||(o[3]=e=>be.value=!1)},[ce,j(" 退出 ")]),p(m(Z),{comments:ke},null,8,["comments"])],512),[[y,be.value]])])])),_:1},8,["max-height"])}}}),[["__scopeId","data-v-99543881"]]);export{me as default};
