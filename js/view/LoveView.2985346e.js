import{x as e,y as s}from"../element-plus/element-plus.93eaa55f.js";import{G as t,ax as l,d as a,M as o,O as i,u as n,o as r,a as p,P as m,V as d,U as u,z as _}from"../@vue/@vue.7ad02ad1.js";import{s as v}from"../pinia/pinia.07d51cb2.js";import{u as c,j as g,g as x,h as j,_ as h}from"../../static/index-1ea6ea63.js";import{A as y}from"../index/index.eae5a8be.js";import{A as f}from"../index/index.752bb5d3.js";import{S as b}from"../index/index.03db74ba.js";import{A as w}from"../index/index.8180a858.js";import"../index.vue_vue_type_style_index_0_scoped_c70cb44b_lang/index.vue_vue_type_style_index_0_scoped_c70cb44b_lang.8adf256f.js";import{U as D,a as I}from"../index/index.cbe96f76.js";/* empty css                                                                                                                     */import{N as G}from"../index/index.d670be34.js";import{T as N}from"../index/index.f739a9eb.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../vue-router/vue-router.53ff932e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";/* empty css                                                                                                                     */import"../index/index.3ec9ec3e.js";const V={class:"love-container scroll-container"},z=h(t({__name:"LoveView",setup(t){l((e=>({"85a5cd0e":n(h)})));const{fontGray:h,contentHeight:z}=c(),A=g(),{loveSongs:L,loveVideo:S,loveSinger:P,lovePlaylist:k,loveAlbum:C,loveRadio:H,loveAlbumId:M,loveVideoId:O,lovePlaylistId:R,loveRadioId:U}=v(A),E=_("firstLoading"),J=a(!1),K=e=>{J.value=e},Q=e=>{J.value=e},T=e=>{const s=O.value.get(e);S.value.splice(s,1)},q=e=>{const s=M.value.get(e);C.value.splice(s,1)},B=e=>{P.value.splice(e,1)},F=e=>{const s=R.value.get(e);k.value.splice(s,1)},W=e=>{const s=U.value.get(e);H.value.splice(s,1)};return x((async()=>{j(L.value),E.value=!1}),E),(t,l)=>{const a=s,_=e;return r(),o(_,{"max-height":n(z)},{default:i((()=>[p("div",V,[m(u(n(D),{"page-name":"LoveView",onCloseSelect:Q},null,512),[[d,J.value]]),m(u(n(N),{active:"song"},{content:i((()=>[u(a,{label:"歌曲",name:"song"},{default:i((()=>[u(n(I),{"page-name":"LoveView",onOpenSelect:K})])),_:1}),u(a,{label:"视频",name:"video"},{default:i((()=>[m(u(n(G),{text:"暂无收藏视频"},null,512),[[d,0==n(S).length]]),m(u(n(w),{mvs:n(S),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:T},null,8,["mvs"]),[[d,n(S).length>0]])])),_:1}),u(a,{label:"歌单",name:"playlist"},{default:i((()=>[m(u(n(G),{text:"暂无收藏歌单"},null,512),[[d,0==n(k).length]]),m(u(n(f),{playlists:n(k),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:F},null,8,["playlists"]),[[d,n(k).length>0]])])),_:1}),u(a,{label:"电台",name:"radio"},{default:i((()=>[m(u(n(G),{text:"暂无收藏电台"},null,512),[[d,0==n(H).length]]),m(u(n(f),{playlists:n(H),type:"radio",transitionName:"list","show-pagination":!0,showDelete:!0,onGetDeleteId:W},null,8,["playlists"]),[[d,n(H).length>0]])])),_:1}),u(a,{label:"歌手",name:"singer"},{default:i((()=>[m(u(n(G),{text:"暂无收藏歌手"},null,512),[[d,0==n(P).length]]),m(u(n(b),{"singer-list":n(P),transitionName:"list",showDelete:!0,onGetDeleteIndex:B},null,8,["singer-list"]),[[d,n(P).length>0]])])),_:1}),u(a,{label:"专辑",name:"album"},{default:i((()=>[m(u(n(G),{text:"暂无收藏专辑"},null,512),[[d,0==n(C).length]]),m(u(n(y),{albums:n(C),transitionName:"list",showDelete:!0,"show-pagination":!0,onGetDeleteId:q},null,8,["albums"]),[[d,n(C).length>=0]])])),_:1})])),_:1},512),[[d,!J.value]])])])),_:1},8,["max-height"])}}}),[["__scopeId","data-v-c9d5913e"]]);export{z as default};
