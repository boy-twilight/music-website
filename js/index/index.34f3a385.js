import{G as e,ax as a,u as s,z as t,i as l,r as o,o as n,c as r,a as u,P as i,aj as v,a2 as c,I as d,aq as p,ay as h,az as g}from"../@vue/@vue.59fec093.js";import{t as y,g as f,_ as m}from"../../static/index-69487ad6.js";import{t as x}from"../lodash-es/lodash-es.3125e237.js";const C=e=>(h("data-v-1718c22c"),e=e(),g(),e),_={class:"search-area"},I=["onMousedown"],j=[C((()=>u("span",{class:"iconfont"},"",-1))),C((()=>u("span",null," 搜索",-1)))],w=m(e({__name:"index",emits:["getContent"],setup(e,{emit:h}){a((e=>({"62f082de":s(m),f0ae8cd0:s(z),faeb4516:s(C),"6ef9147d":s(w)})));const g=y(),m=f().get("fontColor"),C=t("fontGray"),w=f().get("themeColor"),z=l((()=>{var e;return"color"==g.bgMode?null==(e=f().get("searchBg"))?void 0:e.value:"rgba(210,210,210,0.2)"})),b=t("hideScroll"),M=o(),k=o(!1),G=o(""),S=()=>{k.value=!0,M.value.style.zIndex="3",M.value.style.height="34px",M.value.style.width="180px",M.value.style.opacity="1"},q=()=>{M.value.style.zIndex="-1",M.value.style.height="34px",M.value.style.width="0",M.value.style.opacity="0",G.value="",h("getContent",G.value),k.value=!1};return(e,a)=>{const s=p("prevent");return n(),r("div",_,[u("div",{class:"search",ref_key:"search",ref:M},[i(u("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>G.value=e),onInput:a[1]||(a[1]=e=>{x((()=>{b(),h("getContent",G.value)}),800,{leading:!0,trailing:!1})()})},null,544),[[v,G.value]]),u("span",{onMousedown:c(q,["prevent"]),class:"iconfont"},"",40,I)],512),i((n(),r("div",{class:d(["right",{hide:k.value}]),onClick:S},j,2)),[[s]])])}}}),[["__scopeId","data-v-1718c22c"]]);export{w as S};
