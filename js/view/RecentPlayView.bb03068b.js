import{w as e}from"../element-plus/element-plus.4a0090f9.js";import{G as s,ax as a,r as o,c as t,P as r,V as n,U as i,O as l,u as m,z as p,o as u}from"../@vue/@vue.59fec093.js";import{s as c}from"../pinia/pinia.81428a33.js";import{g as j,a as d,b as v,j as f,_ as g}from"../../assets/index-80c2d692.js";import{T as h}from"../Tab/Tab.f22b580c.js";import{M as y}from"../Mv/Mv.c6907ca1.js";import{U as b,a as _}from"../UserSongTable/UserSongTable.60a5ce30.js";import{_ as w}from"../NoSearch/NoSearch.87300ed6.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.2f940de9.js";import"../nprogress/nprogress.9249ff62.js";import"../DecoratedButton/DecoratedButton.3b84b65f.js";import"../PlayButton/PlayButton.3b452e0e.js";import"../SearchButton/SearchButton.070979c4.js";const S={class:"recent-container scroll-container"},x=g(s({__name:"RecentPlayView",setup(s){a((e=>({a36d3b1a:m(g),"4ff3b553":m(x)})));const g=j().get("fontColor"),x=p("fontGray"),B=d(),{videoRecord:P,songRecord:z}=c(B),M=p("firstLoading"),R=o(!1),T=e=>{R.value=e},D=e=>{R.value=e},N=e=>{const s=P.value.findIndex((s=>s.id==e));P.value.splice(s,1)};return v((async()=>{const e=z.value.map((e=>e.id)).join(",");f(e,z.value),B.initLoveMusic(z.value),M.value=!1}),M),(s,a)=>{const o=e;return u(),t("div",S,[r(i(b,{"page-name":"RecentPlayView",onCloseSelect:D},null,512),[[n,R.value]]),r(i(h,{active:"song"},{content:l((()=>[i(o,{label:"歌曲",name:"song"},{default:l((()=>[i(_,{onOpenSelect:T,"page-name":"RecentPlayView"})])),_:1}),i(o,{label:"视频",name:"video "},{default:l((()=>[r(i(w,{text:"暂无视频播放记录"},null,512),[[n,0==m(P).length]]),r(i(y,{mvs:m(P),"show-delete":!0,transitionName:"list","show-pagination":!0,onGetDeleteId:N},null,8,["mvs"]),[[n,m(P).length>0]])])),_:1})])),_:1},512),[[n,!R.value]])])}}}),[["__scopeId","data-v-f49e0efb"]]);export{x as default};
