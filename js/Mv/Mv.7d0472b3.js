import{g as a}from"../element-plus/element-plus.4a0090f9.js";import{G as e,ax as s,r as t,i as l,c as o,P as n,V as i,a as u,T as c,U as r,O as m,a0 as v,M as d,u as p,R as g,z as f,o as h,F as y,a7 as k,S as C,aq as w}from"../@vue/@vue.59fec093.js";import{u as P}from"../vue-router/vue-router.2f940de9.js";import{g as _,P as x,_ as j}from"../../assets/index-ada1d67b.js";const z={class:"mv"},D={class:"mv-simi"},b={class:"mask"},I=["onClick"],M=["onClick"],q={key:0,class:"playcount iconfont"},B={class:"title-name"},F={class:"singer"},G=j(e({__name:"Mv",props:{mvs:null,title:{default:""},showDelete:{type:Boolean,default:!1},transitionName:{default:""},showPagination:{type:Boolean,default:!1}},emits:["getDeleteId"],setup(e,{emit:j}){const G=e;s((a=>({"7f19cc1a":p(N),"4a12ac6a":p(S),"0415e45a":p(R),"8b0db54a":p(O)})));const N=_().get("fontColor"),S=_().get("shadow"),O=_().get("themeColor"),R=f("fontGray"),T=P(),U=f("hideScroll"),V=t(1),A=t(15),E=l((()=>G.mvs.length)),H=l((()=>G.mvs.slice((V.value-1)*A.value,V.value*A.value))),J=a=>{V.value=a};return(s,t)=>{const l=a,f=w("prevent");return h(),o("div",z,[n(u("h4",{class:"title"},c(e.title),513),[[i,e.title]]),u("div",D,[r(v,{name:e.transitionName},{default:m((()=>[(h(!0),o(y,null,k(e.showPagination?p(H):e.mvs,(a=>(h(),o("div",{class:"mv-recommend",key:a.id},[r(l,{src:a.image,loading:"lazy",class:"image"},null,8,["src"]),u("div",b,[n((h(),o("span",{onClick:e=>{return s=a.id,U(),void T.push({name:"video",query:{id:s}});var s},class:"iconfont play"},[C("")],8,I)),[[f]]),e.showDelete?n((h(),o("span",{key:0,onClick:e=>j("getDeleteId",a.id),class:"delete iconfont"},[C("")],8,M)),[[f]]):g("",!0)]),a.playCount?(h(),o("span",q," "+c((+a.playCount/1e4).toFixed(1))+"万",1)):g("",!0),u("span",B,c(a.name),1),u("span",F,c(a.artist),1)])))),128))])),_:1},8,["name"]),e.showPagination&&e.mvs.length>A.value?(h(),d(x,{key:0,text:"个视频","cur-page":V.value,"page-size":A.value,onPageChange:J,total:p(E)},null,8,["cur-page","page-size","total"])):g("",!0)])])}}}),[["__scopeId","data-v-b01c735d"]]);export{G as M};
