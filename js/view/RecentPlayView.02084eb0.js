import{u as e}from"../element-plus/element-plus.372e8740.js";import{G as s,ax as a,d as o,c as t,P as i,V as r,U as n,O as l,u as m,o as p,z as u,ay as c,az as v,a as d}from"../@vue/@vue.7ad02ad1.js";import{g as j,a as _,b as g,j as y,q as f,r as h,_ as b}from"../../assets/index-b4bf3e49.js";import{s as S}from"../pinia/pinia.07d51cb2.js";import{T as x}from"../Tab/Tab.6c04dd12.js";import{M as z}from"../Mv/Mv.30667258.js";import{U as B,a as L}from"../UserSongTable/UserSongTable.d11f8e19.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.53ff932e.js";import"../nprogress/nprogress.8c6d26c7.js";import"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.b5ca6b08.js";import"../DecoratedButton/DecoratedButton.e6f62703.js";import"../PlayButton/PlayButton.eb4d2d93.js";import"../SearchButton/SearchButton.4868e782.js";const w={class:"recent-container scroll-container"},P=(e=>(c("data-v-eb2444a0"),e=e(),v(),e))((()=>d("p",{class:"tip"},"自动同步该账号下最近一周播放的歌曲",-1))),R=b(s({__name:"RecentPlayView",setup(s){a((e=>({"99287d42":m(c)})));const c=j().get("fontColor"),v=_(),{videoRecord:d,songRecord:b}=S(v),R=u("firstLoading"),T=u("hideScroll"),D=()=>{T()},M=o(!1),U=e=>{M.value=e},V=e=>{M.value=e},A=e=>{d.value.splice(e,1),f(h.LOCAL,"videoRecord",d)};return g((async()=>{const e=b.value.map((e=>e.id)).join(",");y(e,b.value),v.initLoveMusic(b.value),R.value=!1}),R),(s,a)=>{const o=e;return p(),t("div",w,[i(n(B,{"page-name":"RecentPlayView",onCloseSelect:V},null,512),[[r,M.value]]),i(n(x,{active:"song",onGetActive:D},{content:l((()=>[n(o,{label:"歌曲",name:"song"},{default:l((()=>[n(L,{onOpenSelect:U,"page-name":"RecentPlayView"}),P])),_:1}),n(o,{label:"视频",name:"video "},{default:l((()=>[n(z,{mvs:m(d),"show-delete":!0,transitionName:"list",onGetDeleteIndex:A},null,8,["mvs"])])),_:1})])),_:1},512),[[r,!M.value]])])}}}),[["__scopeId","data-v-eb2444a0"]]);export{R as default};
