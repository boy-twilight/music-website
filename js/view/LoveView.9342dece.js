import{x as e,y as s}from"../element-plus/element-plus.79622da4.js";import{G as t,ax as l,d as a,M as o,O as i,u as n,o as r,a as p,P as m,V as d,U as u,z as _}from"../@vue/@vue.7ad02ad1.js";import{s as v}from"../pinia/pinia.07d51cb2.js";import{u as c,h as g,f as x,_ as j}from"../../static/index-084673d3.js";import{A as h}from"../index/index.044a2fd9.js";import{A as y}from"../index/index.826f65c3.js";import{S as f}from"../index/index.5a112a9c.js";import{A as w}from"../index/index.8bbc9262.js";import"../index.vue_vue_type_style_index_0_scoped_25a4f7d3_lang/index.vue_vue_type_style_index_0_scoped_25a4f7d3_lang.a3dda64a.js";import{U as b,a as D}from"../index/index.33013673.js";/* empty css                                                                                                                     */import{N as I}from"../index/index.a49edb23.js";import{T as G}from"../index/index.372d7ed4.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../vue-router/vue-router.53ff932e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";/* empty css                                                                                                                     */import"../index/index.8bb47687.js";const N={class:"love-container scroll-container"},S=j(t({__name:"LoveView",setup(t){l((e=>({"106bb59a":n(j)})));const{fontGray:j,contentHeight:S}=c(),V=g(),{loveSongs:z,loveVideo:A,loveSinger:L,lovePlaylist:k,loveAlbum:P,loveRadio:U,loveAlbumId:H,loveVideoId:M,lovePlaylistId:O,loveRadioId:R}=v(V),B=_("firstLoading"),C=a(!1),E=a(),J=()=>{var e;null==(e=E.value)||e.openSelectBox()},K=e=>{const s=M.value.get(e);A.value.splice(s,1)},Q=e=>{const s=H.value.get(e);P.value.splice(s,1)},T=e=>{L.value.splice(e,1)},q=e=>{const s=O.value.get(e);k.value.splice(s,1)},F=e=>{const s=R.value.get(e);U.value.splice(s,1)};return(async()=>{B.value=!0,await x(z.value),B.value=!1})(),(t,l)=>{const a=s,_=e;return r(),o(_,{"max-height":n(S)},{default:i((()=>[p("div",N,[m(u(n(b),{"page-name":"LoveView","show-select":C.value,"onUpdate:showSelect":l[0]||(l[0]=e=>C.value=e),ref_key:"batch",ref:E},null,8,["show-select"]),[[d,C.value]]),m(u(n(G),{active:"song"},{content:i((()=>[u(a,{label:"歌曲",name:"song"},{default:i((()=>[u(n(D),{"page-name":"LoveView",onOpenSelect:J})])),_:1}),u(a,{label:"视频",name:"video"},{default:i((()=>[m(u(n(I),{text:"暂无收藏视频"},null,512),[[d,0==n(A).length]]),m(u(n(w),{mvs:n(A),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:K},null,8,["mvs"]),[[d,n(A).length>0]])])),_:1}),u(a,{label:"歌单",name:"playlist"},{default:i((()=>[m(u(n(I),{text:"暂无收藏歌单"},null,512),[[d,0==n(k).length]]),m(u(n(y),{playlists:n(k),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:q},null,8,["playlists"]),[[d,n(k).length>0]])])),_:1}),u(a,{label:"电台",name:"radio"},{default:i((()=>[m(u(n(I),{text:"暂无收藏电台"},null,512),[[d,0==n(U).length]]),m(u(n(y),{playlists:n(U),type:"radio",transitionName:"list","show-pagination":!0,showDelete:!0,onGetDeleteId:F},null,8,["playlists"]),[[d,n(U).length>0]])])),_:1}),u(a,{label:"歌手",name:"singer"},{default:i((()=>[m(u(n(I),{text:"暂无收藏歌手"},null,512),[[d,0==n(L).length]]),m(u(n(f),{"singer-list":n(L),transitionName:"list",showDelete:!0,onGetDeleteIndex:T},null,8,["singer-list"]),[[d,n(L).length>0]])])),_:1}),u(a,{label:"专辑",name:"album"},{default:i((()=>[m(u(n(I),{text:"暂无收藏专辑"},null,512),[[d,0==n(P).length]]),m(u(n(h),{albums:n(P),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:Q},null,8,["albums"]),[[d,n(P).length>=0]])])),_:1})])),_:1},512),[[d,!C.value]])])])),_:1},8,["max-height"])}}}),[["__scopeId","data-v-5c974956"]]);export{S as default};
