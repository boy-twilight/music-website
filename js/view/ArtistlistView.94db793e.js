import{x as e}from"../element-plus/element-plus.79622da4.js";import{G as s,ax as a,Z as t,i as o,d as i,M as l,O as r,u as n,o as p,a as u,U as m,c,a7 as d,P as v,I as j,S as f,T as h,F as x,z as y,n as _,aq as g,ay as w,az as C}from"../@vue/@vue.7ad02ad1.js";import{u as k,N as z,m as M,h as G,_ as I}from"../../static/index-493d9311.js";/* empty css                                                                                                                     */import{S}from"../index/index.68930d45.js";import{B as V}from"../index/index.80ae3613.js";import{S as A}from"../index/index.34d5eee0.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.5953103e.js";import"../crypto-js/crypto-js.6e421324.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../vue-router/vue-router.53ff932e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.787098c3.js";import"../lyc-storage/lyc-storage.12bb0aad.js";const O=e=>(w("data-v-46f8e785"),e=e(),C(),e),R={class:"artistlist-container scroll-container"},U=O((()=>u("h4",{class:"title"},"歌手类型",-1))),b={class:"name-ch"},B=["onClick"],E=O((()=>u("h4",{class:"title"},"全部歌手",-1))),L=I(s({__name:"ArtistlistView",setup(s){a((e=>({"15089efb":n(w),"14f8ff97":n(C),c4d2706a:n(L),c2af9d1c:n(I),"0ed77d5a":n(O)})));const{fontColor:w,fontBlack:C,boxShadow:I,themeColor:O,fontGray:L,contentHeight:P}=k(),F=t([]),H=o((()=>F.filter((e=>e.name.includes(N.value))))),N=i(""),T=t(new Map),Z=i(0),q=o((()=>J.get(D[Z.value]))),D=t(["全部","男歌手","女歌手","组合"]),J=new Map([["全部",-1],["男歌手",1],["女歌手",2],["组合",3]]),K=i(0),Q=o((()=>X.get(W[K.value]))),W=["全部","华语","欧美","日本","韩国","其他"],X=new Map([["全部",-1],["华语",7],["欧美",96],["日本",8],["韩国",16],["其他",0]]),Y=t("全部,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,#".split(",")),$=i("全部"),ee=y("firstLoading"),se=async(e,s)=>{F.splice(0),"歌手地区"==s?K.value=e:"歌手类型"==s?Z.value=e:$.value=Y[e],await _();const a=T.get(q.value+""+Q.value+$.value);a?F.push(...a):ae()},ae=async()=>{ee.value=!0;try{const e=await z(q.value,Q.value,100,"全部"==$.value?void 0:$.value.toLowerCase()),{artists:s}=e;s.forEach((e=>{const{img1v1Url:s,id:a,name:t,fansCount:o}=e;F.push({id:a,name:t,avatar:s,score:o})})),T.set(q.value+""+Q.value+$.value,[...F])}catch(e){M(G.ERROR,e.message)}ee.value=!1};return ae(),(s,a)=>{const t=e,o=g("prevent");return p(),l(t,{"max-height":n(P),noresize:""},{default:r((()=>[u("div",R,[m(n(A),{modelValue:N.value,"onUpdate:modelValue":a[0]||(a[0]=e=>N.value=e)},null,8,["modelValue"]),U,m(n(V),{onGetActiveIndex:se,type:W,"cur-index":0,"show-title":!1,title:"歌手地区",class:"area"}),m(n(V),{onGetActiveIndex:se,type:D,"cur-index":0,"show-title":!1,title:"歌手类型"},null,8,["type"]),u("ul",b,[(p(!0),c(x,null,d(Y,((e,s)=>v((p(),c("li",{key:e,onClick:e=>se(s,"歌手姓名"),class:j({"is-active":$.value==e})},[f(h(e),1)],10,B)),[[o]]))),128))]),E,m(n(S),{"singer-list":n(H)},null,8,["singer-list"])])])),_:1},8,["max-height"])}}}),[["__scopeId","data-v-46f8e785"]]);export{L as default};
