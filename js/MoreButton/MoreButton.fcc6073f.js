import{b as a,c as o,d as s}from"../element-plus/element-plus.372e8740.js";import{G as e,ax as n,u as t,i as r,Z as p,o as c,M as m,O as d,U as l,J as i,c as u,F as f,a7 as g,a as b,T as x,S as y,ay as _,az as k}from"../@vue/@vue.7ad02ad1.js";import{p as v,g as w,_ as h}from"../../assets/index-6b4c8495.js";const M=(a=>(_("data-v-ab109952"),a=a(),k(),a))((()=>b("button",{class:"more-btn"},"•••",-1))),j=h(e({__name:"MoreButton",props:{shareTo:{type:Function}},emits:["openSelect"],setup(e,{emit:_}){const k=e;n((a=>({"2c14b093":t(S)})));const h=v(),j=w().get("background"),z=w().get("fontColor"),S=w().get("shadow"),T=r((()=>"color"==h.bgMode?"#ffffff"==z.value?"dropdown-dark":"dropdown-light":"dropdown-skin")),$=p([{name:"批量操作",icon:"",command:"批量操作",style:"font-size:17px;margin:0 5px 0 0;"},{name:"分享",icon:"",command:"分享",style:"font-size:14px;margin:0.5px 7px 0 2px;"}]),C=a=>{"批量操作"==a?_("openSelect",!0):"分享"==a&&k.shareTo()};return(e,n)=>{const r=a,p=o,_=s;return c(),m(_,{trigger:"click",onCommand:C,"popper-class":`dropdown more-drop ${t(T)}`},{dropdown:d((()=>[l(p,{style:i({color:t(z),background:`${t(j)} url(${t(h).skinUrl}) no-repeat center/cover`})},{default:d((()=>[(c(!0),u(f,null,g($,(a=>(c(),m(r,{key:a.command,command:a.command},{default:d((()=>[b("span",{class:"iconfont",style:i(a.style)},x(a.icon),5),y(" "+x(a.name),1)])),_:2},1032,["command"])))),128))])),_:1},8,["style"])])),default:d((()=>[M])),_:1},8,["popper-class"])}}}),[["__scopeId","data-v-ab109952"]]);export{j as M};
