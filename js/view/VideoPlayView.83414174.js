import{j as e}from"../element-plus/element-plus.33b43d50.js";import{G as a,ax as s,i as o,r as t,Z as l,y as i,c as n,a as r,U as c,O as m,W as d,T as u,P as p,V as v,u as y,S as h,z as f,o as j,F as g,a7 as _,ay as C,az as k,n as b,aq as x}from"../@vue/@vue.59fec093.js";import{b as w,u as V}from"../vue-router/vue-router.10a7fca4.js";import{t as R,g as S,a as T,b as I,B as q,D as z,E,F as L,w as F,j as N,k as O,o as P,G as A,H as D,I as G,J as U,C as Z,S as B,s as H,_ as J}from"../../static/index-69487ad6.js";import{D as W}from"../dplayer/dplayer.6b26f8aa.js";/* empty css                                                                                                                     */import{A as K}from"../index/index.511f43a0.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.81428a33.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.5d1173f5.js";const M=e=>(C("data-v-dac8a296"),e=e(),k(),e),Q={class:"video-container scroll-container"},X={class:"players-container"},Y={class:"recommend-container"},$={class:"content"},ee={class:"mask"},ae=["onClick"],se=M((()=>r("div",{class:"players"},null,-1))),oe={class:"detail"},te={class:"title"},le={class:"artist-info"},ie={class:"operation"},ne={class:"comment-area"},re=M((()=>r("h4",{class:"title"},"全部评论",-1))),ce=M((()=>r("span",{class:"iconfont_1"}," ",-1))),me=J(a({__name:"VideoPlayView",setup(a){s((e=>({"990bd844":y(k),"992b170c":y(J),"46fcaaf0":y(de),"4598d68c":y(ue),"3d19a655":y(M),"285168d0":y(me)})));const C=R(),k=S().get("fontColor"),J=S().get("fontBlack"),M=S().get("shadow"),me=S().get("themeColor"),de=f("fontGray"),ue=o((()=>C.isFullScreen?"695px":"555px")),pe=T(),ve=t(),ye=w(),he=V(),fe=ye.query.id+"",je=l({id:fe,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),ge=l([]),_e=o((()=>[je,...ge])),Ce=f("firstLoading"),ke=t(!1),be=l([]),xe=t(!1),we=()=>{H("我在https://www.liyinchao.cloud/#"+ye.fullPath+"观看"+je.name+",快来和我一起观看把！")};return I((async()=>{if(/.*[A-Z]+.*/.test(fe))try{(await Promise.all([A(fe),D(fe),G(fe),U(fe,1e3)])).forEach(((e,a)=>{if(0==a){const{data:{title:a,coverUrl:s,publishTime:o,playTime:t,creator:l}}=e;je.name=a,je.image=s,je.playCount=t,je.publishTime=F(o),je.artist=l.nickname}else if(1==a){const{urls:a}=e;a?je.url=a[0].url:N(O.INFO,"此视频暂无播放资源，请切换下一个。")}else if(2==a){const{data:a}=e;a.forEach((e=>{const{title:a,coverUrl:s,vid:o,playTime:t,creator:l}=e;ge.push({id:o,name:a,image:s,playCount:t,artist:l[0].userName})}))}else if(3==a){const{comments:a,hotComments:s}=e;P(s,be),P(a,be)}}))}catch(e){N(O.ERROR,e.message)}else try{(await Promise.all([q(fe),z(fe),E(fe),L(fe,1e3)])).forEach(((e,a)=>{if(0==a){const{data:{name:a,artistName:s,cover:o,playCount:t,duration:l,publishTime:i}}=e;je.name=a,je.playCount=t,je.image=o,je.artist=s,je.time=l,je.publishTime=F(i)}else if(1==a){const{data:{url:a,fee:s}}=e;a?(je.url=a,je.available=s):N(O.INFO,"此视频暂无播放资源，请切换下一个。")}else if(2==a){const{mvs:a}=e;a&&a.forEach((e=>{const{id:a,cover:s,name:o,artistName:t,playCount:l}=e;ge.push({id:a,image:s,name:o,artist:t,playCount:l})}))}else if(3==a){const{comments:a,hotComments:s}=e;P(s,be),P(a,be)}}))}catch(e){N(O.ERROR,e.message)}pe.addRecord(je,pe.videoRecord,pe.videoRecordId),pe.initLoveStatus(je,pe.loveVideoId),(async()=>{await b(),ve.value=new W({container:document.querySelector(".players"),video:{url:je.url,thumbnails:je.image,type:"video/mp4",pic:je.image},autoplay:!1,loop:!1,hotkey:!0,theme:null==me?void 0:me.value,chromecast:!0,lang:"zh-cn",screenshot:!0,preload:"auto",volume:.9,playbackSpeed:[.75,1,1.25,1.5,1.75,2],contextmenu:[{text:"下载",click:()=>{pe.addVideoDownload(je)}},{text:"收藏",click:()=>{pe.addLove(je,pe.loveVideo,pe.loveVideoId)}},{text:"分享",click:()=>{we()}}]}),document.querySelector(".dplayer-video").onended=()=>{ke.value=!0}})(),Ce.value=!1}),Ce),i((()=>{var e;document.querySelector(".dplayer-video").onended=null,null==(e=ve.value)||e.destroy()})),(a,s)=>{const o=e,t=x("prevent");return j(),n("div",Q,[r("div",X,[c(d,{name:"show"},{default:m((()=>[p(r("div",Y,[p(r("h4",null,"相关推荐",512),[[v,y(_e).length>1]]),r("div",$,[(j(!0),n(g,null,_(y(_e),((e,a)=>(j(),n("div",{class:"recommend-video",key:e.id},[c(o,{src:e.image,class:"image"},null,8,["src"]),r("div",ee,[p((j(),n("span",{class:"iconfont play",onClick:s=>((e,a)=>{0==e?(ke.value=!1,document.querySelector(".dplayer-video").play()):he.push({name:"video",query:{id:a}})})(a,e.id)},[h("")],8,ae)),[[t]])])])))),128))])],512),[[v,ke.value]])])),_:1}),se]),r("div",oe,[r("p",te,u(je.name),1),r("div",le,[r("span",null,u(/.*[A-Z]+.*/.test(fe)?"创作者："+je.artist:"演唱："+je.artist),1),r("span",null,u(je.playCount)+"次观看",1),r("span",null,"发布时间："+u(je.publishTime),1)]),p(r("div",ie,[c(y(Z),{name:je.isLove?"取消收藏":"收藏",icon:je.isLove?"":"","icon-style":je.isLove?"color:#ff6a6a;":"",onClick:s[0]||(s[0]=e=>y(pe).addLove(je,y(pe).loveVideo,y(pe).loveVideoId)),class:"operate"},null,8,["name","icon","icon-style"]),c(y(Z),{name:"下载",onClick:s[1]||(s[1]=e=>y(pe).addVideoDownload(je)),icon:"",class:"operate"}),c(y(Z),{name:"分享",icon:"",onClick:we,class:"operate"}),c(y(Z),{name:"评论",icon:"",onClick:s[2]||(s[2]=e=>xe.value=!0),class:"operate"})],512),[[v,!xe.value]])]),p(c(y(K),{mvs:ge,title:"相关推荐"},null,8,["mvs"]),[[v,!xe.value&&ge.length>0]]),p(r("div",ne,[re,r("button",{class:"exit",onClick:s[3]||(s[3]=e=>xe.value=!1)},[ce,h(" 退出 ")]),c(y(B),{comments:be},null,8,["comments"])],512),[[v,xe.value]])])}}}),[["__scopeId","data-v-dac8a296"]]);export{me as default};
