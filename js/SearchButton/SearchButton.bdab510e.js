import{G as e,d as a,o as s,c as t,a as n,P as o,aj as l,a2 as d,ax as u,u as i,ay as r,az as c}from"../@vue/@vue.69a1071d.js";import{g as v,_ as p}from"../../assets/index-c6c9497e.js";import{_ as h}from"../lodash/lodash.57b1d944.js";const g=e=>(r("data-v-7d823968"),e=e(),c(),e),m={class:"search-area"},x=["onMousedown"],y=[g((()=>n("span",{class:"iconfont"},"",-1))),g((()=>n("span",null," 搜索",-1)))],f=p(e({__name:"SearchButton",emits:["getContent"],setup(e,{emit:r}){u((e=>({"1a29719e":i(p),d4b0e6d4:i(c)})));const c=v().get("searchBg"),p=v().get("fontColor"),g=a(),f=a(""),_=()=>{g.value.style.zIndex="3",g.value.style.height="34px",g.value.style.width="180px"},j=()=>{g.value.style.zIndex="-1",g.value.style.height="34px",g.value.style.width="0",f.value=""};return(e,a)=>(s(),t("div",m,[n("div",{class:"search",ref_key:"search",ref:g},[o(n("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),onInput:a[1]||(a[1]=e=>{h.debounce((()=>{r("getContent",f.value)}),800,{leading:!0,trailing:!1})()})},null,544),[[l,f.value]]),n("span",{onMousedown:d(j,["prevent"]),class:"iconfont"},"",40,x)],512),n("div",{class:"right",onClick:_},y)]))}}),[["__scopeId","data-v-7d823968"]]);export{f as S};
