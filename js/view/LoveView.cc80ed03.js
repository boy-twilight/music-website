import{u as e}from"../element-plus/element-plus.372e8740.js";import{G as s,ax as a,d as t,c as l,P as o,V as i,U as n,O as r,u as m,z as p,o as u,a as v}from"../@vue/@vue.7ad02ad1.js";import{s as j}from"../pinia/pinia.07d51cb2.js";import{a as c,b as d,j as g,_}from"../../assets/index-b6c8c353.js";import{T as f}from"../Tab/Tab.99462fe7.js";import{M as y}from"../Mv/Mv.9ee71b7c.js";import{S as b}from"../Singer/Singer.9bd2b852.js";import{A as h}from"../Albums/Albums.c3402db2.js";import{P as S}from"../PlayList/PlayList.3f2e23f0.js";import{U as x,a as D}from"../UserSongTable/UserSongTable.c7afd7f7.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../vue-router/vue-router.d1338226.js";import"../nprogress/nprogress.8c6d26c7.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../DecoratedButton/DecoratedButton.20fd6afe.js";import"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.d9cff3b8.js";import"../PlayButton/PlayButton.4e32f27c.js";import"../SearchButton/SearchButton.436d668f.js";const w={class:"love-container scroll-container"},L={class:"singers"},B=_(s({__name:"LoveView",setup(s){a((e=>({"6409fcd6":m(_)})));const _=p("fontGray"),B=c(),{loveSongs:G,loveVideo:P,loveSinger:z,lovePlaylist:I,loveAlbum:A}=j(B),T=p("firstLoading"),V=p("hideScroll"),M=()=>{V()},N=t(!1),U=e=>{N.value=e},k=e=>{N.value=e},C=e=>{P.value.splice(e,1)},O=e=>{A.value.splice(e,1)},E=e=>{z.value.splice(e,1)},H=e=>{I.value.splice(e,1)};return d((async()=>{const e=G.value.map((e=>e.id)).join(",");g(e,G.value),T.value=!1}),T),(s,a)=>{const t=e;return u(),l("div",w,[o(n(x,{"page-name":"LoveView",onCloseSelect:k},null,512),[[i,N.value]]),o(n(f,{active:"song",onGetActive:M},{content:r((()=>[n(t,{label:"歌曲",name:"song"},{default:r((()=>[n(D,{"page-name":"LoveView",onOpenSelect:U})])),_:1}),n(t,{label:"视频",name:"video"},{default:r((()=>[n(y,{mvs:m(P),transitionName:"list",showDelete:!0,onGetDeleteIndex:C},null,8,["mvs"])])),_:1}),n(t,{label:"歌单",name:"playlist"},{default:r((()=>[n(S,{playlists:m(I),transitionName:"list",showDelete:!0,onGetDeleteIndex:H},null,8,["playlists"])])),_:1}),n(t,{label:"歌手",name:"singer"},{default:r((()=>[v("div",L,[n(b,{"singer-list":m(z),transitionName:"list",showDelete:!0,"show-all-avatar":!1,onGetDeleteIndex:E},null,8,["singer-list"])])])),_:1}),n(t,{label:"专辑",name:"album"},{default:r((()=>[n(h,{albums:m(A),transitionName:"list",showDelete:!0,onGetDeleteIndex:O},null,8,["albums"])])),_:1})])),_:1},512),[[i,!N.value]])])}}}),[["__scopeId","data-v-655045e7"]]);export{B as default};
