import{x as e,h as a}from"../element-plus/element-plus.79622da4.js";import{G as s,ax as o,d as t,Z as i,i as l,y as n,M as r,O as c,u as m,o as d,a as u,U as p,P as v,V as y,c as h,a7 as f,S as j,F as g,W as _,T as x,z as b,n as k,aq as C,ay as w,az as V}from"../@vue/@vue.7ad02ad1.js";import{b as R,u as S}from"../vue-router/vue-router.53ff932e.js";import{u as T,h as z,y as E,z as q,A as I,x as L,m as N,M as O,B as P,D as A,E as D,n as F,C as U,S as Z,o as B,_ as G}from"../../static/index-0b0a9c54.js";import{D as H}from"../dplayer/dplayer.beff636d.js";/* empty css                                                                                                                     */import{A as M}from"../index/index.45f847ac.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";const W=e=>(w("data-v-867a87bf"),e=e(),V(),e),J={class:"video-container scroll-container"},K={class:"players-container"},Q={class:"recommend-container"},X={class:"content"},Y={class:"mask"},$=["onClick"],ee=W((()=>u("div",{class:"players"},null,-1))),ae={class:"detail"},se={class:"title"},oe={class:"artist-info"},te={class:"operation"},ie={class:"comment-area"},le=W((()=>u("h4",{class:"title"},"全部评论",-1))),ne=W((()=>u("span",{class:"iconfont_1"}," ",-1))),re=G(s({__name:"VideoPlayView",setup(s){o((e=>({"4778b573":m(w),"4769160f":m(V),"0be3fb5a":m(re),"5715323e":m(ce),"5dcf702c":m(G),"1426f9db":m(W)})));const{fontColor:w,fontBlack:V,boxShadow:G,themeColor:W,fontGray:re,videoHeight:ce,contentHeight:me}=T(),de=z(),ue=t(),pe=R(),ve=S(),ye=pe.query.id+"",he=i({id:ye,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),fe=i([]),je=l((()=>[he,...fe])),ge=b("firstLoading"),_e=t(!1),xe=i([]),be=t(!1),ke=()=>{B("我在https://www.liyinchao.cloud"+pe.fullPath+"观看"+he.name+",快来和我一起观看把！")};n((()=>{var e;document.querySelector(".dplayer-video").onended=null,null==(e=ue.value)||e.destroy()}));return(async()=>{ge.value=!0;const e=/.*[A-Z]+.*/;if(e.test(ye))try{(await Promise.all([P(ye),A(ye),D(ye)])).forEach(((e,a)=>{if(0==a){const{data:{title:a,coverUrl:s,publishTime:o,playTime:t,creator:i}}=e;he.name=a,he.image=s,he.playCount=t,he.publishTime=L(o),he.artist=i.nickname}else if(1==a){const{urls:a}=e;a?he.url=a[0].url:N(O.INFO,"此视频暂无播放资源，请切换下一个。")}else if(2==a){const{data:a}=e;a.forEach((e=>{const{title:a,coverUrl:s,vid:o,playTime:t,creator:i}=e;fe.push({id:o,name:a,image:s,playCount:t,artist:i[0].userName})}))}}))}catch(s){N(O.ERROR,s.message)}else try{(await Promise.all([E(ye),q(ye),I(ye)])).forEach(((e,a)=>{if(0==a){const{data:{name:a,artistName:s,cover:o,playCount:t,duration:i,publishTime:l}}=e;he.name=a,he.playCount=t,he.image=o,he.artist=s,he.time=i,he.publishTime=L(l)}else if(1==a){const{data:{url:a,fee:s}}=e;a?(he.url=a,he.available=s):N(O.INFO,"此视频暂无播放资源，请切换下一个。")}else if(2==a){const{mvs:a}=e;a&&a.forEach((e=>{const{id:a,cover:s,name:o,artistName:t,playCount:i}=e;fe.push({id:a,image:s,name:o,artist:t,playCount:i})}))}}))}catch(s){N(O.ERROR,s.message)}de.addRecord(he,de.videoRecord,de.videoRecordId),de.initLoveStatus(he,de.loveVideoId),(async()=>{await k(),ue.value=new H({container:document.querySelector(".players"),video:{url:he.url,thumbnails:he.image,type:"video/mp4",pic:he.image},autoplay:!1,loop:!1,hotkey:!0,theme:null==W?void 0:W.value,chromecast:!0,lang:"zh-cn",screenshot:!0,preload:"auto",volume:.9,playbackSpeed:[.75,1,1.25,1.5,1.75,2],contextmenu:[{text:"下载",click:()=>{de.addVideoDownload(he)}},{text:"收藏",click:()=>{de.addLove(he,de.loveVideo,de.loveVideoId)}},{text:"分享",click:()=>{ke()}}]}),document.querySelector(".dplayer-video").onended=()=>{_e.value=!0}})(),ge.value=!1;const a=e.test(ye)?"5":"1";await F(ye,a,xe)})(),(s,o)=>{const t=a,i=e,l=C("prevent");return d(),r(i,{"max-height":m(me)},{default:c((()=>[u("div",J,[u("div",K,[p(_,{name:"show"},{default:c((()=>[v(u("div",Q,[v(u("h4",null,"相关推荐",512),[[y,m(je).length>1]]),u("div",X,[(d(!0),h(g,null,f(m(je),((e,a)=>(d(),h("div",{class:"recommend-video",key:e.id},[p(t,{src:e.image,class:"image"},null,8,["src"]),u("div",Y,[v((d(),h("span",{class:"iconfont play",onClick:s=>((e,a)=>{0==e?(_e.value=!1,document.querySelector(".dplayer-video").play()):ve.push({name:"video",query:{id:a}})})(a,e.id)},[j("")],8,$)),[[l]])])])))),128))])],512),[[y,_e.value]])])),_:1}),ee]),u("div",ae,[u("p",se,x(he.name),1),u("div",oe,[u("span",null,x(/.*[A-Z]+.*/.test(ye)?"创作者："+he.artist:"演唱："+he.artist),1),u("span",null,x(he.playCount)+"次观看",1),u("span",null,"发布时间："+x(he.publishTime),1)]),v(u("div",te,[p(m(U),{name:he.isLove?"取消收藏":"收藏",icon:he.isLove?"":"","icon-style":he.isLove?"color:#ff6a6a;":"",onClick:o[0]||(o[0]=e=>m(de).addLove(he,m(de).loveVideo,m(de).loveVideoId)),class:"operate"},null,8,["name","icon","icon-style"]),p(m(U),{name:"下载",onClick:o[1]||(o[1]=e=>m(de).addVideoDownload(he)),icon:"",class:"operate"}),p(m(U),{name:"分享",icon:"",onClick:ke,class:"operate"}),p(m(U),{name:"评论",icon:"",onClick:o[2]||(o[2]=e=>be.value=!0),class:"operate"})],512),[[y,!be.value]])]),v(p(m(M),{mvs:fe,title:"相关推荐"},null,8,["mvs"]),[[y,!be.value&&fe.length>0]]),v(u("div",ie,[le,u("button",{class:"exit",onClick:o[3]||(o[3]=e=>be.value=!1)},[ne,j(" 退出 ")]),p(m(Z),{comments:xe},null,8,["comments"])],512),[[y,be.value]])])])),_:1},8,["max-height"])}}}),[["__scopeId","data-v-867a87bf"]]);export{re as default};
