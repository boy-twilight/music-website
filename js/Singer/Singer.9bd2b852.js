import{g as a}from"../element-plus/element-plus.372e8740.js";import{G as e,ax as s,M as t,O as o,a0 as l,u as n,z as r,o as i,c as u,a7 as c,P as m,V as d,U as p,S as f,T as g,R as v,F as h,aq as k}from"../@vue/@vue.7ad02ad1.js";import{b as y}from"../vue-router/vue-router.d1338226.js";import{g as C,_ as w}from"../../assets/index-b6c8c353.js";const A=["onClick"],_=["onClick"],x=w(e({__name:"Singer",props:{singerList:null,showDelete:{type:Boolean,default:!1},transitionName:{default:""},showAllAvatar:{type:Boolean,default:!0},avatarNum:{default:12}},emits:["getDeleteIndex"],setup(e,{emit:w}){s((a=>({aa2246d6:n(j),"348e6f0c":n(x),"05856ef1":n(D)})));const x=C().get("shadow"),j=C().get("fontColor"),D=r("fontGray"),N=r("hideScroll"),S=y(),b=(a,e)=>{N(),S.push({name:"artist",query:{id:a,score:e}})};return(s,n)=>{const r=a,y=k("prevent");return i(),t(l,{name:e.transitionName},{default:o((()=>[(i(!0),u(h,null,c(e.singerList,((a,s)=>(i(),u("div",{key:a.id,class:"singer"},[m(p(r,{onClick:e=>b(a.id,a.score),src:a.avatar,loading:"lazy",class:"image"},null,8,["onClick","src"]),[[d,e.showAllAvatar?e.showAllAvatar:s<e.avatarNum]]),m((i(),u("span",{onClick:e=>b(a.id,a.score),class:"singer-name"},[f(g(a.name),1)],8,A)),[[y]]),e.showDelete?m((i(),u("span",{key:0,onClick:a=>w("getDeleteIndex",s),class:"delete iconfont"},[f("")],8,_)),[[y]]):v("",!0)])))),128))])),_:1},8,["name"])}}}),[["__scopeId","data-v-d249073b"]]);export{x as S};
