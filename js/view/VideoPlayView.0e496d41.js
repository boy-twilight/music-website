import{G as a,ax as e,i as s,d as t,Z as o,c as i,a as l,T as n,P as r,V as c,U as m,u as p,S as d,z as u,o as v,ay as y,az as h,n as j}from"../@vue/@vue.7ad02ad1.js";import{b as f}from"../vue-router/vue-router.47595bf3.js";import{p as g,g as R,a as w,b as C,v as b,e as k,d as x,w as E,x as O,y as V,o as T,z,r as D,A as I,B as L,D as _,C as N,s as S,_ as A}from"../../assets/index-362a7631.js";import{D as B}from"../dplayer/dplayer.6b26f8aa.js";import{D as F}from"../DecoratedButton/DecoratedButton.31bd5251.js";import{M}from"../Mv/Mv.0fe9e8b2.js";import"../element-plus/element-plus.ec47f34a.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";const P=a=>(y("data-v-630190a1"),a=a(),h(),a),U={class:"video-container scroll-container"},Z=P((()=>l("div",{class:"players-container"},[l("div",{class:"players"})],-1))),q={class:"detail"},G={class:"title"},$={class:"artist-info"},H={class:"operation"},J={class:"comment-area"},K={class:"title"},Q=P((()=>l("span",{class:"iconfont_1"}," ",-1))),W=A(a({__name:"VideoPlayView",setup(a){e((a=>({"792fe60e":p(h),"794f24d6":p(A),da9abbe6:p(W),"11ecf4e7":p(X),"4d079f70":p(P)})));const y=g(),h=R().get("fontColor"),A=R().get("fontBlack"),P=R().get("shadow"),W=u("fontGray"),X=s((()=>y.isFullScreen?"650px":"520px")),Y=w(),aa=t(),ea=f(),sa=ea.query.id+"",ta=o({id:sa,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),oa=o([]),ia=u("firstLoading"),la=o([]),na=t(!1),ra=()=>{S("我在https://www.liyinchao.cloud/#"+ea.fullPath+"观看"+ta.name+",快来和我一起观看把！")};return C((async()=>{if(/.*[A-Z]+.*/.test(sa)){try{const a=await z(sa),{data:{title:e,coverUrl:s,publishTime:t,playTime:o,creator:i}}=a;ta.name=e,ta.image=s,ta.playCount=o,ta.publishTime=D(t),ta.artist=i.nickname}catch(a){k(x.ERROR,a.message)}try{const a=await I(sa),{urls:e}=a;e?ta.url=e[0].url:k(x.INFO,"此视频暂无播放资源，请切换下一个。")}catch(a){k(x.ERROR,a.message)}try{const a=await L(sa),{data:e}=a;e.forEach((a=>{const{title:e,coverUrl:s,vid:t,playTime:o,creator:i}=a;oa.push({id:t,name:e,image:s,playCount:o,artist:i[0].userName})}))}catch(a){k(x.ERROR,a.message)}try{const a=await _(sa,100),{comments:e,hotComments:s}=a;T(s,la),T(e,la)}catch(a){k(x.ERROR,a.message)}}else{try{const a=await b(sa),{data:{name:e,artistName:s,cover:t,playCount:o,duration:i,publishTime:l}}=a;ta.name=e,ta.image=t,ta.artist=s,ta.playCount=o,ta.time=i,ta.publishTime=l}catch(a){k(x.ERROR,a.message)}try{const a=await E(sa),{data:{url:e,fee:s}}=a;e?(ta.url=e,ta.available=s):k(x.INFO,"此视频暂无播放资源，请切换下一个。")}catch(a){k(x.ERROR,a.message)}try{const a=await O(sa),{mvs:e}=a;e&&e.forEach((a=>{oa.push({id:a.id,image:a.cover,name:a.name,artist:a.artistName,playCount:a.playCount})}))}catch(a){k(x.ERROR,a.message)}try{const a=await V(sa,1e4),{comments:e,hotComments:s}=a;T(s,la),T(e,la)}catch(a){k(x.ERROR,a.message)}}Y.addRecord(ta,Y.videoRecord,Y.videoRecordId),Y.initLoveStatus(ta,Y.loveVideoId),(async()=>{await j(),aa.value=new B({container:document.querySelector(".players"),video:{url:ta.url,thumbnails:ta.image,type:"video/mp4",pic:ta.image},autoplay:!1,loop:!0,hotkey:!0,theme:"#1ed2a9",chromecast:!0,lang:"zh-cn",screenshot:!0,preload:"auto",volume:.9,playbackSpeed:[.75,1,1.25,1.5,1.75,2],contextmenu:[{text:"下载",click:()=>{Y.addVideoDownload(ta)}},{text:"收藏",click:()=>{Y.addLove(ta,Y.loveVideo,Y.loveVideoId)}},{text:"分享",click:()=>{ra()}}]})})(),ia.value=!1}),ia),(a,e)=>(v(),i("div",U,[Z,l("div",q,[l("p",G,n(ta.name),1),l("div",$,[l("span",null,n(/.*[A-Z]+.*/.test(sa)?"创作者："+ta.artist:"演唱："+ta.artist),1),l("span",null,n(ta.playCount)+"次观看",1),l("span",null,"发布时间："+n(ta.publishTime),1)]),r(l("div",H,[m(F,{name:ta.isLove?"取消收藏":"收藏",icon:ta.isLove?"":"","icon-style":ta.isLove?"color:#ff6a6a;":"",onClick:e[0]||(e[0]=a=>p(Y).addLove(ta,p(Y).loveVideo,p(Y).loveVideoId)),class:"operate"},null,8,["name","icon","icon-style"]),m(F,{name:"下载",onClick:e[1]||(e[1]=a=>p(Y).addVideoDownload(ta)),icon:"",class:"operate"}),m(F,{name:"分享",icon:"",onClick:ra,class:"operate"}),m(F,{name:"评论",icon:"",onClick:e[2]||(e[2]=a=>na.value=!0),class:"operate"})],512),[[c,!na.value]])]),r(m(M,{mvs:oa,title:"相关推荐"},null,8,["mvs"]),[[c,!na.value]]),r(l("div",J,[l("h4",K,"全部评论"+n(`(${la.length})`),1),l("button",{class:"exit",onClick:e[3]||(e[3]=a=>na.value=!1)},[Q,d(" 退出 ")]),m(N,{comments:la},null,8,["comments"])],512),[[c,na.value]])]))}}),[["__scopeId","data-v-630190a1"]]);export{W as default};
