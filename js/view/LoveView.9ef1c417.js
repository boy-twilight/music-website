import{x as e}from"../element-plus/element-plus.f4dce189.js";import{G as s,ax as l,r as t,c as a,P as o,V as i,U as n,u as r,O as m,z as p,o as u}from"../@vue/@vue.59fec093.js";import{s as d}from"../pinia/pinia.81428a33.js";import{a as v,b as c,j as _,_ as j}from"../../assets/index-831d6614.js";import{T as g}from"../Tab/Tab.63db5902.js";import{A as x}from"../index/index.a6f5eda0.js";import{A as h}from"../index/index.2d322a4f.js";import{S as y}from"../index/index.8e8d3f1e.js";import{A as f}from"../index/index.25798000.js";import"../index.vue_vue_type_style_index_0_scoped_2dc764e5_lang/index.vue_vue_type_style_index_0_scoped_2dc764e5_lang.ce8305d1.js";import{U as b,a as w}from"../index/index.d7302b77.js";import{_ as I}from"../NoSearch/NoSearch.4c67f0f6.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../vue-router/vue-router.10a7fca4.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.9249ff62.js";/* empty css                                                                                                                     */import"../index/index.a64c2074.js";const D={class:"love-container scroll-container"},G=j(s({__name:"LoveView",setup(s){l((e=>({"8237c35c":r(j)})));const j=p("fontGray"),G=v(),{loveSongs:N,loveVideo:S,loveSinger:A,lovePlaylist:V,loveAlbum:z,loveRadio:L,loveAlbumId:k,loveVideoId:P,lovePlaylistId:T,loveRadioId:C}=d(G),O=p("firstLoading"),R=t(!1),U=e=>{R.value=e},B=e=>{R.value=e},F=e=>{const s=P.value.get(e);S.value.splice(s,1)},H=e=>{const s=k.value.get(e);z.value.splice(s,1)},J=e=>{A.value.splice(e,1)},M=e=>{const s=T.value.get(e);V.value.splice(s,1)},q=e=>{const s=C.value.get(e);L.value.splice(s,1)};return c((async()=>{const e=N.value.map((e=>e.id)).join(",");_(e,N.value),O.value=!1}),O),(s,l)=>{const t=e;return u(),a("div",D,[o(n(r(b),{"page-name":"LoveView",onCloseSelect:B},null,512),[[i,R.value]]),o(n(g,{active:"song"},{content:m((()=>[n(t,{label:"歌曲",name:"song"},{default:m((()=>[n(r(w),{"page-name":"LoveView",onOpenSelect:U})])),_:1}),n(t,{label:"视频",name:"video"},{default:m((()=>[o(n(I,{text:"暂无收藏视频"},null,512),[[i,0==r(S).length]]),o(n(r(f),{mvs:r(S),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:F},null,8,["mvs"]),[[i,r(S).length>0]])])),_:1}),n(t,{label:"歌单",name:"playlist"},{default:m((()=>[o(n(I,{text:"暂无收藏歌单"},null,512),[[i,0==r(V).length]]),o(n(r(h),{playlists:r(V),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:M},null,8,["playlists"]),[[i,r(V).length>0]])])),_:1}),n(t,{label:"电台",name:"radio"},{default:m((()=>[o(n(I,{text:"暂无收藏电台"},null,512),[[i,0==r(L).length]]),o(n(r(h),{playlists:r(L),type:"radio",transitionName:"list","show-pagination":!0,showDelete:!0,onGetDeleteId:q},null,8,["playlists"]),[[i,r(L).length>0]])])),_:1}),n(t,{label:"歌手",name:"singer"},{default:m((()=>[o(n(I,{text:"暂无收藏歌手"},null,512),[[i,0==r(A).length]]),o(n(r(y),{"singer-list":r(A),transitionName:"list",showDelete:!0,onGetDeleteIndex:J},null,8,["singer-list"]),[[i,r(A).length>0]])])),_:1}),n(t,{label:"专辑",name:"album"},{default:m((()=>[o(n(I,{text:"暂无收藏专辑"},null,512),[[i,0==r(z).length]]),o(n(r(x),{albums:r(z),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:H},null,8,["albums"]),[[i,r(z).length>=0]])])),_:1})])),_:1},512),[[i,!R.value]])])}}}),[["__scopeId","data-v-0b705c4e"]]);export{G as default};
