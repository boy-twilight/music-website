import{G as a,ax as s,Z as e,c as t,a as i,T as o,U as r,u as l,o as m,z as n}from"../@vue/@vue.7ad02ad1.js";import{b as p}from"../vue-router/vue-router.53ff932e.js";import{g as c,b as u,r as d,e as v,f as h,t as y,v as j,w as g,q as f,x as R,y as w,z as C,o as b,_ as E}from"../../assets/index-664b7631.js";import{D as T}from"../DecoratedButton/DecoratedButton.354341dc.js";import{M as O}from"../Mv/Mv.f3df6df7.js";import"../element-plus/element-plus.f3996937.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.07d51cb2.js";import"../nprogress/nprogress.8c6d26c7.js";import"../lodash/lodash.57b1d944.js";const x={class:"video-container common-container"},z=["src"],N={class:"detail"},_={class:"title"},k={class:"artist-info"},B={class:"operation"},M=E(a({__name:"VideoPlayView",setup(a){s((a=>({"7300bddd":l(E),"6de10422":l(M),"1ce3e045":l(U)})));const E=c().get("fontColor"),M=c().get("fontBlack"),U=c().get("shadow"),D=p(),I=D.query.id+"",S=e({id:I,name:"",image:"",artist:"",playCount:"",url:"",time:"",publishTime:"",available:""}),V=e([]),Z=n("firstLoading"),q=()=>{v(h.SUCCESS,"MV开始下载，请稍后。");const a=S.name+"-"+S.artist+".mp4",s=S.url;C(s,a)},A=()=>{b("我在https://www.liyinchao.cloud/#"+D.fullPath+"观看"+S.name+",快来和我一起观看把！")};return u((async()=>{if(/.*[A-Z]+.*/.test(I)){try{const a=await g(I),{data:{title:s,coverUrl:e,publishTime:t,playTime:i,creator:o}}=a;S.name=s,S.image=e,S.playCount=i,S.publishTime=f(t),S.artist=o.nickname}catch(a){v(h.ERROR,a.message)}try{const a=await R(I),{urls:s}=a;s?S.url=s[0].url:v(h.INFO,"此视频暂无播放资源，请切换下一个。")}catch(a){v(h.ERROR,a.message)}try{const a=await w(I),{data:s}=a;s.forEach((a=>{const{title:s,coverUrl:e,vid:t,playTime:i,creator:o}=a;V.push({id:t,name:s,image:e,playCount:i,artist:o[0].userName})}))}catch(a){v(h.ERROR,a.message)}}else{try{const a=await d(I),{data:{name:s,artistName:e,cover:t,playCount:i,duration:o,publishTime:r}}=a;S.name=s,S.image=t,S.artist=e,S.playCount=i,S.time=o,S.publishTime=r}catch(a){v(h.ERROR,a.message)}try{const a=await y(I),{data:{url:s,fee:e}}=a;s?(S.url=s,S.available=e):v(h.INFO,"此视频暂无播放资源，请切换下一个。")}catch(a){v(h.ERROR,a.message)}try{const a=await j(I),{mvs:s}=a;s&&s.forEach((a=>{V.push({id:a.id,image:a.cover,name:a.name,artist:a.artistName,playCount:a.playCount})}))}catch(a){v(h.ERROR,a.message)}}Z.value=!1}),Z),(a,s)=>(m(),t("div",x,[i("video",{src:S.url,controls:"",ref:"video",class:"video-player"},null,8,z),i("div",N,[i("p",_,o(S.name),1),i("div",k,[i("span",null,o(/.*[A-Z]+.*/.test(I)?"创作者："+S.artist:"演唱："+S.artist),1),i("span",null,o(S.playCount)+"次观看",1),i("span",null,"发布时间："+o(S.publishTime),1)]),i("div",B,[r(T,{name:"下载",onClick:q,icon:"",class:"operate"}),r(T,{name:"分享",icon:"",onClick:A,class:"operate"}),r(T,{name:"收藏",icon:"",class:"operate"}),r(T,{name:"评论",icon:"",class:"operate"})])]),r(O,{mvs:V,title:"相关推荐"},null,8,["mvs"])]))}}),[["__scopeId","data-v-365e1240"]]);export{M as default};
