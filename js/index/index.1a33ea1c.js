import{G as e,ax as t,u as s,d as a,o,c as l,T as n,R as i,a as c,F as u,a7 as d,I as r}from"../@vue/@vue.7ad02ad1.js";import{u as p,_ as v}from"../../static/index-6eb5ac45.js";const x={class:"button-group-container"},m={key:0,class:"title"},f={class:"type"},b=["onClick"],y=v(e({__name:"index",props:{title:null,curIndex:null,type:null,showTitle:{type:Boolean,default:!0}},emits:["getActiveIndex"],setup(e,{emit:v}){const y=e;t((e=>({c60b4f7c:s(I),"2699eab9":s(h),"6ed9b0ec":s(_)})));const{fontColor:I,boxShadow:h,themeColor:_}=p(),k=a(y.curIndex);return(t,s)=>(o(),l("div",x,[e.showTitle?(o(),l("h4",m,n(e.title),1)):i("",!0),c("div",f,[(o(!0),l(u,null,d(e.type,((e,t)=>(o(),l("button",{key:e,onClick:e=>(e=>{k.value=e,v("getActiveIndex",e,y.title)})(t),class:r({"is-active":t==k.value})},n(e),11,b)))),128))])]))}}),[["__scopeId","data-v-310df2fd"]]);export{y as B};
