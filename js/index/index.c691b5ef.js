import{h as e}from"../element-plus/element-plus.79622da4.js";import{G as a,ax as s,u as t,d as l,i as n,o,c as i,P as c,V as u,a as r,T as d,U as m,O as v,F as p,a7 as _,S as g,R as f,a0 as y,M as h,aq as x}from"../@vue/@vue.7ad02ad1.js";import{u as k}from"../vue-router/vue-router.53ff932e.js";import{u as C,a3 as P,P as w,_ as j}from"../../static/index-d885298a.js";/* empty css                                                                                                                     */const D={class:"mv"},S={class:"mv-simi"},b={class:"mask"},z=["onClick"],I=["onClick"],q={key:0,class:"playcount iconfont"},B={class:"title-name"},F={class:"singer"},G=j(a({__name:"index",props:{mvs:null,title:{default:""},showDelete:{type:Boolean,default:!1},transitionName:{default:""},showPagination:{type:Boolean,default:!1}},emits:["getDeleteId"],setup(a,{emit:j}){const G=a;s((e=>({e6b04bcc:t(N),"16476c91":t(U),"67a42ccc":t(M),"74dc6a14":t(A)})));const{fontColor:N,boxShadow:U,themeColor:A,fontGray:M}=C(),O=k(),R=l(1),T=l(P),V=n((()=>G.mvs.length)),E=n((()=>G.mvs.slice((R.value-1)*T.value,R.value*T.value)));return(s,l)=>{const n=e,k=x("prevent");return o(),i("div",D,[c(r("h4",{class:"title"},d(a.title),513),[[u,a.title]]),r("div",S,[m(y,{name:a.transitionName},{default:v((()=>[(o(!0),i(p,null,_(a.showPagination?t(E):a.mvs,(e=>(o(),i("div",{class:"mv-recommend",key:e.id},[m(n,{src:e.image,loading:"lazy",class:"image"},null,8,["src"]),r("div",b,[c((o(),i("span",{onClick:a=>{return s=e.id,void O.push({name:"video",query:{id:s}});var s},class:"iconfont play"},[g("")],8,z)),[[k]]),a.showDelete?c((o(),i("span",{key:0,onClick:a=>j("getDeleteId",e.id),class:"delete iconfont"},[g("")],8,I)),[[k]]):f("",!0)]),e.playCount?(o(),i("span",q," "+d((+e.playCount/1e4).toFixed(1))+"万",1)):f("",!0),r("span",B,d(e.name),1),r("span",F,d(e.artist),1)])))),128))])),_:1},8,["name"]),a.showPagination&&a.mvs.length>T.value?(o(),h(t(w),{key:0,text:"个视频",curPage:R.value,"onUpdate:curPage":l[0]||(l[0]=e=>R.value=e),pageSize:T.value,total:t(V)},null,8,["curPage","pageSize","total"])):f("",!0)])])}}}),[["__scopeId","data-v-f2c74943"]]);export{G as A};
