import{v as s,g as a,w as e}from"../element-plus/element-plus.372e8740.js";import{G as t,ax as l,d as o,Z as i,P as n,c as r,F as u,a7 as c,a as m,u as d,V as p,o as v,T as g,a2 as j,U as h,z as f,ay as y,az as b}from"../@vue/@vue.7ad02ad1.js";import{u as w}from"../vue-router/vue-router.53ff932e.js";import{g as z,c as k,B as x,f as R,h as _,C as E,S as I,_ as M}from"../../assets/index-7ec91af8.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../axios/axios.d4208f68.js";import"../pinia/pinia.07d51cb2.js";import"../nprogress/nprogress.8c6d26c7.js";import"../lodash/lodash.57b1d944.js";import"../default-passive-events/default-passive-events.8ad95ed0.js";const O=["infinite-scroll-disabled"],C={class:"title"},F={class:"content"},N=["onMousedown"],S=(s=>(y("data-v-9708eba2"),s=s(),b(),s))((()=>m("span",{class:"iconfont play"},"",-1))),T=["element-loading-background","element-loading-spinner"],q=M(t({__name:"MusicHall",setup(t){l((s=>({"20653bb9":d(b),"65de1021":d(M)})));const y=w(),b=z().get("fontColor"),M=z().get("shadow"),q=z().get("background"),B=o(1),G=o(!1),H=o(!1),L=i([]),P=i([]),U=f("firstLoading"),V=f("hideScroll"),Z=()=>{B.value<L.length?(H.value=!0,G.value=!0,setTimeout((async()=>{A(L[B.value].id),H.value=!1,G.value=!1,B.value++}),1e3)):(G.value=!0,R(_.INFO,"已达到底部"))};k((async()=>{try{const s=await x(),{data:a}=s;a.forEach(((s,a)=>{const{tagId:e,tagName:t}=s;L.push({id:e,name:t}),a<B.value&&A(e)}))}catch(s){R(_.ERROR,s.message)}U.value=!1}),U);const A=s=>{k((async()=>{try{const a=await E(s),{data:{playlist:e}}=a,t=i([]);e.forEach((s=>{const{id:a,name:e,cover:l}=s;t.push({id:a,name:e,cover:l})})),P.push(t)}catch(a){R(_.ERROR,a.message)}}))};return(t,l)=>{const o=a,i=s,f=e;return n((v(),r("div",{class:"music-hall-container scroll-container","infinite-scroll-distance":"2","infinite-scroll-immediate":!1,"infinite-scroll-disabled":G.value,style:{overflow:"auto"}},[(v(!0),r(u,null,c(L.slice(0,B.value),((s,a)=>(v(),r("div",{key:s.id,class:"style-container"},[m("h4",C,g(s.name),1),m("div",F,[(v(!0),r(u,null,c(P[a],(s=>(v(),r("div",{onMousedown:j((a=>{return e=s.id,V(),void y.push({name:"playlist",query:{id:e+""}});var e}),["prevent"]),key:s.id,class:"style"},[S,h(o,{src:s.cover,loading:"lazy"},null,8,["src"]),m("span",null,g(s.name),1)],40,N)))),128))])])))),128)),n(m("div",{"element-loading-background":d(q),"element-loading-text":"加载中，请勿继续滚动！","element-loading-spinner":d(I),class:"tip"},null,8,T),[[p,H.value],[i,H.value]])],8,O)),[[f,Z]])}}}),[["__scopeId","data-v-9708eba2"]]);export{q as default};
