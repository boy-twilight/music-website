import{g as e}from"../element-plus/element-plus.f4dce189.js";import{G as a,ax as s,i as t,r as o,Z as i,y as l,c as n,a as r,U as c,O as m,W as d,T as u,P as p,V as v,u as y,S as h,z as g,o as j,F as R,a7 as f,ay as _,az as C,n as w,aq as k}from"../@vue/@vue.59fec093.js";import{b as x,u as b}from"../vue-router/vue-router.10a7fca4.js";import{v as E,g as O,a as V,b as T,D as I,x as S,e as q,d as z,E as L,F,G as N,o as A,H as D,I as G,J as P,K as U,C as Z,s as B,t as H,_ as J}from"../../assets/index-831d6614.js";import{D as K}from"../dplayer/dplayer.6b26f8aa.js";/* empty css                                                                                                                     */import{A as W}from"../index/index.25798000.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.81428a33.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const M=e=>(_("data-v-81293349"),e=e(),C(),e),Q={class:"video-container scroll-container"},X={class:"players-container"},Y={class:"recommend-container"},$={class:"content"},ee={class:"mask"},ae=["onClick"],se=M((()=>r("div",{class:"players"},null,-1))),te={class:"detail"},oe={class:"title"},ie={class:"artist-info"},le={class:"operation"},ne={class:"comment-area"},re=M((()=>r("h4",{class:"title"},"全部评论",-1))),ce=M((()=>r("span",{class:"iconfont_1"}," ",-1))),me=J(a({__name:"VideoPlayView",setup(a){s((e=>({"5a5814d9":y(C),"5a487575":y(J),"1bb21e2d":y(de),a60af672:y(ue),"3810b160":y(M),"5d338735":y(me)})));const _=E(),C=O().get("fontColor"),J=O().get("fontBlack"),M=O().get("shadow"),me=O().get("themeColor"),de=g("fontGray"),ue=t((()=>_.isFullScreen?"695px":"555px")),pe=V(),ve=o(),ye=x(),he=b(),ge=ye.query.id+"",je=i({id:ge,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),Re=i([]),fe=t((()=>[je,...Re])),_e=g("firstLoading"),Ce=o(!1),we=i([]),ke=o(!1),xe=()=>{H("我在https://www.liyinchao.cloud/#"+ye.fullPath+"观看"+je.name+",快来和我一起观看把！")};return T((async()=>{if(/.*[A-Z]+.*/.test(ge)){try{const e=await D(ge),{data:{title:a,coverUrl:s,publishTime:t,playTime:o,creator:i}}=e;je.name=a,je.image=s,je.playCount=o,je.publishTime=S(t),je.artist=i.nickname}catch(e){q(z.ERROR,e.message)}try{const e=await G(ge),{urls:a}=e;a?je.url=a[0].url:q(z.INFO,"此视频暂无播放资源，请切换下一个。")}catch(e){q(z.ERROR,e.message)}try{const e=await P(ge),{data:a}=e;a.forEach((e=>{const{title:a,coverUrl:s,vid:t,playTime:o,creator:i}=e;Re.push({id:t,name:a,image:s,playCount:o,artist:i[0].userName})}))}catch(e){q(z.ERROR,e.message)}try{const e=await U(ge,100),{comments:a,hotComments:s}=e;A(s,we),A(a,we)}catch(e){q(z.ERROR,e.message)}}else{try{const e=await I(ge),{data:{name:a,artistName:s,cover:t,playCount:o,duration:i,publishTime:l}}=e;je.name=a,je.playCount=o,je.image=t,je.artist=s,je.time=i,je.publishTime=S(l)}catch(e){q(z.ERROR,e.message)}try{const e=await L(ge),{data:{url:a,fee:s}}=e;a?(je.url=a,je.available=s):q(z.INFO,"此视频暂无播放资源，请切换下一个。")}catch(e){q(z.ERROR,e.message)}try{const e=await F(ge),{mvs:a}=e;a&&a.forEach((e=>{const{id:a,cover:s,name:t,artistName:o,playCount:i}=e;Re.push({id:a,image:s,name:t,artist:o,playCount:i})}))}catch(e){q(z.ERROR,e.message)}try{const e=await N(ge,1e4),{comments:a,hotComments:s}=e;A(s,we),A(a,we)}catch(e){q(z.ERROR,e.message)}}pe.addRecord(je,pe.videoRecord,pe.videoRecordId),pe.initLoveStatus(je,pe.loveVideoId),(async()=>{await w(),ve.value=new K({container:document.querySelector(".players"),video:{url:je.url,thumbnails:je.image,type:"video/mp4",pic:je.image},autoplay:!1,loop:!1,hotkey:!0,theme:null==me?void 0:me.value,chromecast:!0,lang:"zh-cn",screenshot:!0,preload:"auto",volume:.9,playbackSpeed:[.75,1,1.25,1.5,1.75,2],contextmenu:[{text:"下载",click:()=>{pe.addVideoDownload(je)}},{text:"收藏",click:()=>{pe.addLove(je,pe.loveVideo,pe.loveVideoId)}},{text:"分享",click:()=>{xe()}}]}),document.querySelector(".dplayer-video").onended=()=>{Ce.value=!0}})(),_e.value=!1}),_e),l((()=>{var e;document.querySelector(".dplayer-video").onended=null,null==(e=ve.value)||e.destroy()})),(a,s)=>{const t=e,o=k("prevent");return j(),n("div",Q,[r("div",X,[c(d,{name:"show"},{default:m((()=>[p(r("div",Y,[p(r("h4",null,"相关推荐",512),[[v,y(fe).length>1]]),r("div",$,[(j(!0),n(R,null,f(y(fe),((e,a)=>(j(),n("div",{class:"recommend-video",key:e.id},[c(t,{src:e.image,class:"image"},null,8,["src"]),r("div",ee,[p((j(),n("span",{class:"iconfont play",onClick:s=>((e,a)=>{0==e?(Ce.value=!1,document.querySelector(".dplayer-video").play()):he.push({name:"video",query:{id:a}})})(a,e.id)},[h("")],8,ae)),[[o]])])])))),128))])],512),[[v,Ce.value]])])),_:1}),se]),r("div",te,[r("p",oe,u(je.name),1),r("div",ie,[r("span",null,u(/.*[A-Z]+.*/.test(ge)?"创作者："+je.artist:"演唱："+je.artist),1),r("span",null,u(je.playCount)+"次观看",1),r("span",null,"发布时间："+u(je.publishTime),1)]),p(r("div",le,[c(y(Z),{name:je.isLove?"取消收藏":"收藏",icon:je.isLove?"":"","icon-style":je.isLove?"color:#ff6a6a;":"",onClick:s[0]||(s[0]=e=>y(pe).addLove(je,y(pe).loveVideo,y(pe).loveVideoId)),class:"operate"},null,8,["name","icon","icon-style"]),c(y(Z),{name:"下载",onClick:s[1]||(s[1]=e=>y(pe).addVideoDownload(je)),icon:"",class:"operate"}),c(y(Z),{name:"分享",icon:"",onClick:xe,class:"operate"}),c(y(Z),{name:"评论",icon:"",onClick:s[2]||(s[2]=e=>ke.value=!0),class:"operate"})],512),[[v,!ke.value]])]),p(c(y(W),{mvs:Re,title:"相关推荐"},null,8,["mvs"]),[[v,!ke.value&&Re.length>0]]),p(r("div",ne,[re,r("button",{class:"exit",onClick:s[3]||(s[3]=e=>ke.value=!1)},[ce,h(" 退出 ")]),c(B,{comments:we},null,8,["comments"])],512),[[v,ke.value]])])}}}),[["__scopeId","data-v-81293349"]]);export{me as default};
