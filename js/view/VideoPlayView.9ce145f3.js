import{j as e}from"../element-plus/element-plus.85c7c360.js";import{G as a,ax as s,i as t,r as o,Z as i,y as l,c as n,a as c,U as r,O as m,W as d,T as u,P as p,V as v,u as y,S as h,z as g,o as f,F as j,a7 as R,ay as _,az as w,n as C,aq as b}from"../@vue/@vue.59fec093.js";import{b as k,u as x}from"../vue-router/vue-router.10a7fca4.js";import{t as E,g as O,a as V,b as S,B as T,w as I,e as q,d as z,D as L,E as F,F as N,o as A,G as D,H as G,I as P,J as U,C as Z,S as B,s as H,_ as J}from"../../assets/index-41f64cc1.js";import{D as W}from"../dplayer/dplayer.6b26f8aa.js";/* empty css                                                                                                                     */import{A as K}from"../index/index.fd9860ad.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.81428a33.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const M=e=>(_("data-v-9c83cdd9"),e=e(),w(),e),Q={class:"video-container scroll-container"},X={class:"players-container"},Y={class:"recommend-container"},$={class:"content"},ee={class:"mask"},ae=["onClick"],se=M((()=>c("div",{class:"players"},null,-1))),te={class:"detail"},oe={class:"title"},ie={class:"artist-info"},le={class:"operation"},ne={class:"comment-area"},ce=M((()=>c("h4",{class:"title"},"全部评论",-1))),re=M((()=>c("span",{class:"iconfont_1"}," ",-1))),me=J(a({__name:"VideoPlayView",setup(a){s((e=>({b437207a:y(w),b4565f42:y(J),"05cc83fa":y(de),"46dbcd31":y(ue),"2f84023a":y(M),f99aecea:y(me)})));const _=E(),w=O().get("fontColor"),J=O().get("fontBlack"),M=O().get("shadow"),me=O().get("themeColor"),de=g("fontGray"),ue=t((()=>_.isFullScreen?"695px":"555px")),pe=V(),ve=o(),ye=k(),he=x(),ge=ye.query.id+"",fe=i({id:ge,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),je=i([]),Re=t((()=>[fe,...je])),_e=g("firstLoading"),we=o(!1),Ce=i([]),be=o(!1),ke=()=>{H("我在https://www.liyinchao.cloud/#"+ye.fullPath+"观看"+fe.name+",快来和我一起观看把！")};return S((async()=>{if(/.*[A-Z]+.*/.test(ge)){try{const e=await D(ge),{data:{title:a,coverUrl:s,publishTime:t,playTime:o,creator:i}}=e;fe.name=a,fe.image=s,fe.playCount=o,fe.publishTime=I(t),fe.artist=i.nickname}catch(e){q(z.ERROR,e.message)}try{const e=await G(ge),{urls:a}=e;a?fe.url=a[0].url:q(z.INFO,"此视频暂无播放资源，请切换下一个。")}catch(e){q(z.ERROR,e.message)}try{const e=await P(ge),{data:a}=e;a.forEach((e=>{const{title:a,coverUrl:s,vid:t,playTime:o,creator:i}=e;je.push({id:t,name:a,image:s,playCount:o,artist:i[0].userName})}))}catch(e){q(z.ERROR,e.message)}try{const e=await U(ge,100),{comments:a,hotComments:s}=e;A(s,Ce),A(a,Ce)}catch(e){q(z.ERROR,e.message)}}else{try{const e=await T(ge),{data:{name:a,artistName:s,cover:t,playCount:o,duration:i,publishTime:l}}=e;fe.name=a,fe.playCount=o,fe.image=t,fe.artist=s,fe.time=i,fe.publishTime=I(l)}catch(e){q(z.ERROR,e.message)}try{const e=await L(ge),{data:{url:a,fee:s}}=e;a?(fe.url=a,fe.available=s):q(z.INFO,"此视频暂无播放资源，请切换下一个。")}catch(e){q(z.ERROR,e.message)}try{const e=await F(ge),{mvs:a}=e;a&&a.forEach((e=>{const{id:a,cover:s,name:t,artistName:o,playCount:i}=e;je.push({id:a,image:s,name:t,artist:o,playCount:i})}))}catch(e){q(z.ERROR,e.message)}try{const e=await N(ge,1e4),{comments:a,hotComments:s}=e;A(s,Ce),A(a,Ce)}catch(e){q(z.ERROR,e.message)}}pe.addRecord(fe,pe.videoRecord,pe.videoRecordId),pe.initLoveStatus(fe,pe.loveVideoId),(async()=>{await C(),ve.value=new W({container:document.querySelector(".players"),video:{url:fe.url,thumbnails:fe.image,type:"video/mp4",pic:fe.image},autoplay:!1,loop:!1,hotkey:!0,theme:null==me?void 0:me.value,chromecast:!0,lang:"zh-cn",screenshot:!0,preload:"auto",volume:.9,playbackSpeed:[.75,1,1.25,1.5,1.75,2],contextmenu:[{text:"下载",click:()=>{pe.addVideoDownload(fe)}},{text:"收藏",click:()=>{pe.addLove(fe,pe.loveVideo,pe.loveVideoId)}},{text:"分享",click:()=>{ke()}}]}),document.querySelector(".dplayer-video").onended=()=>{we.value=!0}})(),_e.value=!1}),_e),l((()=>{var e;document.querySelector(".dplayer-video").onended=null,null==(e=ve.value)||e.destroy()})),(a,s)=>{const t=e,o=b("prevent");return f(),n("div",Q,[c("div",X,[r(d,{name:"show"},{default:m((()=>[p(c("div",Y,[p(c("h4",null,"相关推荐",512),[[v,y(Re).length>1]]),c("div",$,[(f(!0),n(j,null,R(y(Re),((e,a)=>(f(),n("div",{class:"recommend-video",key:e.id},[r(t,{src:e.image,class:"image"},null,8,["src"]),c("div",ee,[p((f(),n("span",{class:"iconfont play",onClick:s=>((e,a)=>{0==e?(we.value=!1,document.querySelector(".dplayer-video").play()):he.push({name:"video",query:{id:a}})})(a,e.id)},[h("")],8,ae)),[[o]])])])))),128))])],512),[[v,we.value]])])),_:1}),se]),c("div",te,[c("p",oe,u(fe.name),1),c("div",ie,[c("span",null,u(/.*[A-Z]+.*/.test(ge)?"创作者："+fe.artist:"演唱："+fe.artist),1),c("span",null,u(fe.playCount)+"次观看",1),c("span",null,"发布时间："+u(fe.publishTime),1)]),p(c("div",le,[r(y(Z),{name:fe.isLove?"取消收藏":"收藏",icon:fe.isLove?"":"","icon-style":fe.isLove?"color:#ff6a6a;":"",onClick:s[0]||(s[0]=e=>y(pe).addLove(fe,y(pe).loveVideo,y(pe).loveVideoId)),class:"operate"},null,8,["name","icon","icon-style"]),r(y(Z),{name:"下载",onClick:s[1]||(s[1]=e=>y(pe).addVideoDownload(fe)),icon:"",class:"operate"}),r(y(Z),{name:"分享",icon:"",onClick:ke,class:"operate"}),r(y(Z),{name:"评论",icon:"",onClick:s[2]||(s[2]=e=>be.value=!0),class:"operate"})],512),[[v,!be.value]])]),p(r(y(K),{mvs:je,title:"相关推荐"},null,8,["mvs"]),[[v,!be.value&&je.length>0]]),p(c("div",ne,[ce,c("button",{class:"exit",onClick:s[3]||(s[3]=e=>be.value=!1)},[re,h(" 退出 ")]),r(y(B),{comments:Ce},null,8,["comments"])],512),[[v,be.value]])])}}}),[["__scopeId","data-v-9c83cdd9"]]);export{me as default};
