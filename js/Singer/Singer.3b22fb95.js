import{g as a}from"../element-plus/element-plus.372e8740.js";import{G as e,ax as s,M as t,O as o,a0 as l,u as n,o as r,c as i,a7 as u,P as c,V as m,U as d,S as p,T as v,R as f,F as g,z as k,aq as h}from"../@vue/@vue.7ad02ad1.js";import{u as C}from"../vue-router/vue-router.53ff932e.js";import{g as w,_ as y}from"../../assets/index-4587ef8d.js";const A=["onClick"],_=["onClick"],x=y(e({__name:"Singer",props:{singerList:null,showDelete:{type:Boolean,default:!1},transitionName:{default:""},showAllAvatar:{type:Boolean,default:!0},avatarNum:{default:12}},emits:["getDeleteIndex"],setup(e,{emit:y}){s((a=>({"728272ea":n(j),"481c3c1a":n(x)})));const x=w().get("shadow"),j=w().get("fontColor"),D=k("hideScroll"),N=C(),S=(a,e)=>{D(),N.push({name:"artist",query:{id:a,score:e}})};return(s,n)=>{const k=a,C=h("prevent");return r(),t(l,{name:e.transitionName},{default:o((()=>[(r(!0),i(g,null,u(e.singerList,((a,s)=>(r(),i("div",{key:a.id,class:"singer"},[c(d(k,{onClick:e=>S(a.id,a.score),src:a.avatar,loading:"lazy",class:"image"},null,8,["onClick","src"]),[[m,e.showAllAvatar?e.showAllAvatar:s<e.avatarNum]]),c((r(),i("span",{onClick:e=>S(a.id,a.score)},[p(v(a.name),1)],8,A)),[[C]]),e.showDelete?c((r(),i("span",{key:0,onClick:a=>y("getDeleteIndex",s),class:"delete iconfont"},[p("")],8,_)),[[C]]):f("",!0)])))),128))])),_:1},8,["name"])}}}),[["__scopeId","data-v-68f356c5"]]);export{x as S};
