import{u as s}from"../element-plus/element-plus.f3996937.js";import{G as a,ax as e,Z as o,d as t,c as n,U as i,O as l,u as r,z as m,o as p,a as u,ay as c,az as d}from"../@vue/@vue.7ad02ad1.js";import{g as j,a as v,s as g,E as h,i as f,j as y,e as _,d as b,F as B,_ as x}from"../../assets/index-107c9b53.js";import{T as z,_ as R}from"../Tab/Tab.7f2d4d35.js";import{P as S}from"../PlayButton/PlayButton.7c947deb.js";import{D as E}from"../DecoratedButton/DecoratedButton.033e5b3b.js";import{S as D}from"../SearchButton/SearchButton.263a522e.js";import{M as P}from"../Mv/Mv.b208f279.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.07d51cb2.js";import"../lodash/lodash.57b1d944.js";import"../vue-router/vue-router.53ff932e.js";import"../nprogress/nprogress.8c6d26c7.js";const w={class:"recent-container scroll-container"},G={class:"operation"},O=(s=>(c("data-v-a1595a8e"),s=s(),d(),s))((()=>u("p",{class:"tip"},"自动同步该账号下最近一周播放的歌曲",-1))),C=x(a({__name:"RecentPlayView",setup(a){var c;e((s=>({86320880:r(d)})));const d=j().get("fontColor"),x=null==(c=v(g.SESSION,"userInfo"))?void 0:c.uid,C=o([]),I=o([]);let M;const T=t(""),A=m("firstLoading");A.value=!0;const U=m("hideScroll"),$=s=>{M=o([]),T.value=s;const a=C.filter((s=>s.name.includes(T.value)||s.album.includes(T.value)||s.singer.includes(T.value)));M.push(...a)},k=()=>{U()};return h(x).then((s=>{const{weekData:a}=s;if(a){const s=[];a.forEach((a=>{f(s,C,a.song)})),y(s.join(","),C)}A.value=!1})).catch((s=>{_(b.ERROR,s.message)})),B().then((s=>{const{data:{videos:a}}=s;a&&a.forEach((s=>{const{id:a,text:e,coverUrl:o}=s.mlogBaseData;I.push({id:a,name:e,image:o,artist:"",playCount:""})}))})).catch((s=>{_(b.ERROR,s.message)})),(a,e)=>{const o=s;return p(),n("div",w,[i(z,{active:"song",onGetActive:k},{content:l((()=>[i(o,{label:`歌曲 ${C.length}`,name:"song"},{default:l((()=>[u("div",G,[i(S,{songs:C},null,8,["songs"]),i(E,{icon:"󰌄",name:"下载"}),i(E,{icon:"",name:"批量操作"}),i(D,{onGetContent:$})]),i(R,{songs:T.value?r(M):C,isPlaylist:!0,height:"420px"},null,8,["songs"]),O])),_:1},8,["label"]),i(o,{label:`视频 ${I.length}`,name:"video "},{default:l((()=>[i(P,{mvs:I},null,8,["mvs"])])),_:1},8,["label"])])),_:1})])}}}),[["__scopeId","data-v-a1595a8e"]]);export{C as default};
