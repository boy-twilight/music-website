import{u as e}from"../element-plus/element-plus.a3a17194.js";import{G as a,ax as s,r as o,c as t,P as n,V as r,U as i,O as l,u as m,z as p,o as u,ay as c,az as j,a as d}from"../@vue/@vue.59fec093.js";import{s as v}from"../pinia/pinia.81428a33.js";import{g,a as f,b as h,j as y,_}from"../../assets/index-bd7d6872.js";import{T as P}from"../Tab/Tab.b46601e3.js";import{M as S}from"../Mv/Mv.f72c7ad2.js";import{U as b,a as w}from"../UserSongTable/UserSongTable.b481c2ef.js";import{_ as x}from"../NoSearch/NoSearch.750333ec.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.2f940de9.js";import"../nprogress/nprogress.9249ff62.js";import"../Pagination/Pagination.9ca352a2.js";import"../DecoratedButton/DecoratedButton.3414623a.js";import"../PlayButton/PlayButton.febf1ecc.js";import"../SearchButton/SearchButton.0020c3d1.js";const B={class:"recent-container scroll-container"},z=(e=>(c("data-v-d8cc4684"),e=e(),j(),e))((()=>d("p",{class:"tip"},"自动同步该账号下最近一周播放的歌曲",-1))),R=_(a({__name:"RecentPlayView",setup(a){s((e=>({"37a544ac":m(c),"64e627fa":m(j)})));const c=g().get("fontColor"),j=p("fontGray"),d=f(),{videoRecord:_,songRecord:R}=v(d),T=p("firstLoading"),G=o(!1),I=e=>{G.value=e},M=e=>{G.value=e},N=e=>{const a=_.value.findIndex((a=>a.id==e));_.value.splice(a,1)};return h((async()=>{const e=R.value.map((e=>e.id)).join(",");y(e,R.value),d.initLoveMusic(R.value),T.value=!1}),T),(a,s)=>{const o=e;return u(),t("div",B,[n(i(b,{"page-name":"RecentPlayView",onCloseSelect:M},null,512),[[r,G.value]]),n(i(P,{active:"song"},{content:l((()=>[i(o,{label:"歌曲",name:"song"},{default:l((()=>[i(w,{onOpenSelect:I,"page-name":"RecentPlayView"}),z])),_:1}),i(o,{label:"视频",name:"video "},{default:l((()=>[n(i(x,{text:"暂无视频播放记录"},null,512),[[r,0==m(_).length]]),n(i(S,{mvs:m(_),"show-delete":!0,transitionName:"list","show-pagination":!0,onGetDeleteId:N},null,8,["mvs"]),[[r,m(_).length>0]])])),_:1})])),_:1},512),[[r,!G.value]])])}}}),[["__scopeId","data-v-d8cc4684"]]);export{R as default};
