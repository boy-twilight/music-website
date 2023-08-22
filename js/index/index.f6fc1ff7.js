import{G as e,ax as a,u as l,Z as s,d as o,i as n,o as u,c as t,U as c,O as i,J as r,F as p,a7 as v,M as d,a as m,T as g,I as _,P as f,aq as S,ay as C,az as h,V as w,z as y}from"../@vue/@vue.7ad02ad1.js";import{s as k}from"../pinia/pinia.07d51cb2.js";import{u as V,_ as x,j as N,C as b,P,m as j,i as z,a as I}from"../../static/index-6eb5ac45.js";import{P as M,_ as R}from"../index.vue_vue_type_style_index_0_scoped_841f6d57_lang/index.vue_vue_type_style_index_0_scoped_841f6d57_lang.35f50a6b.js";import{b as U,c as D,d as L}from"../element-plus/element-plus.70abbed3.js";import{S as E}from"./index.ca33dd7f.js";const F=e=>(C("data-v-93e9715f"),e=e(),h(),e),G={class:"sort-btn"},O=[F((()=>m("span",{class:"iconfont"},"",-1))),F((()=>m("span",null," 排序",-1)))],q=x(e({__name:"index",emits:["getSortChoice"],setup(e,{emit:C}){a((e=>({f55b83f6:l(h),"945da7e8":l(k),dd02f8ee:l(y)})));const{fontColor:h,background:w,themeColor:y,searchColor:k,dropDownMode:x}=V(),N=s(["歌曲排序","歌手排序","专辑排序","时长排序"]),b=s([!1,!1,!1,!1]),P=o(-1),j=n((()=>b.map(((e,a)=>a==P.value)))),z=e=>{"歌曲排序"==e?P.value=j.value[0]?-1:0:"歌手排序"==e?P.value=j.value[1]?-1:1:"专辑排序"==e?P.value=j.value[2]?-1:2:"时长排序"==e&&(P.value=j.value[3]?-1:3),-1==P.value?C("getSortChoice",j.value,!0):C("getSortChoice",j.value,!1)},I=()=>{-1==P.value&&(P.value=0,C("getSortChoice",j.value,!1))};return(e,a)=>{const s=U,o=D,n=L,C=S("prevent");return u(),t("div",G,[c(n,{trigger:"click",onCommand:z,"popper-class":`dropdown sort-drop ${l(x)}`},{dropdown:i((()=>[c(o,{style:r({color:l(h),background:l(w)})},{default:i((()=>[(u(!0),t(p,null,v(N,((e,a)=>(u(),d(s,{key:e,command:e},{default:i((()=>[m("span",{class:_({"is-choose":l(j)[a]})},g(e),3)])),_:2},1032,["command"])))),128))])),_:1},8,["style"])])),default:i((()=>[f((u(),t("div",{class:"sort",onClick:I},O)),[[C]])])),_:1},8,["popper-class"])])}}}),[["__scopeId","data-v-93e9715f"]]),H={class:"user-container"},J={class:"top-operation"},T=x(e({__name:"index",props:{pageName:null},emits:["openSelect"],setup(e,{emit:a}){const i=e,r=N(),{musicDownload:p,loveSongs:v,songRecord:d}=k(r),g=n((()=>{let e=s([]);return e="LoveView"==i.pageName?v.value:"RecentPlayView"==i.pageName?d.value:p.value,e})),_=n((()=>new Map(g.value.map(((e,a)=>[e.id,a]))))),S=o(1),C=o(40),h=n((()=>g.value.slice((S.value-1)*C.value,S.value*C.value).filter((e=>e.name.includes(I.value)||e.album.includes(I.value)||e.singer.includes(I.value))))),y=n((()=>g.value.length)),V=e=>{S.value=e},x=n((()=>"LoveView"==i.pageName?"清空全部收藏":"RecentPlayView"==i.pageName?"清空播放记录":"清空下载记录")),I=o(""),U=s([!1,!1,!1,!1]),D=o(!1),L=(e,a)=>{for(let l=0;l<U.length;l++)U[l]=e[l];a&&(D.value=a)},F=()=>{"LoveView"==i.pageName?v.value.splice(0):"RecentPlayView"==i.pageName?d.value.splice(0):p.value.splice(0),j(z.SUCCESS,"已清空全部下载记录！")};return(e,s)=>(u(),t("div",H,[m("div",J,[c(l(M),{songs:l(h)},null,8,["songs"]),c(l(b),{icon:"",name:l(x),onClick:F},null,8,["name"]),c(l(b),{icon:"",name:"批量操作",onClick:s[0]||(s[0]=e=>a("openSelect",!0))}),c(l(E),{modelValue:I.value,"onUpdate:modelValue":s[1]||(s[1]=e=>I.value=e)},null,8,["modelValue"]),c(l(q),{onGetSortChoice:L})]),c(l(R),{songs:l(h),"song-id-mapper":l(_),sort:U,"page-size":C.value,"is-cancel-sort":D.value},null,8,["songs","song-id-mapper","sort","page-size","is-cancel-sort"]),f(c(l(P),{"cur-page":S.value,"page-size":C.value,total:l(y),onPageChange:V},null,8,["cur-page","page-size","total"]),[[w,C.value<l(y)]])]))}}),[["__scopeId","data-v-dcf589dc"]]),Z={class:"batch-container"},$={class:"operation-select"},A=x(e({__name:"index",props:{pageName:null},emits:["closeSelect"],setup(e,{emit:s}){const i=e;a((e=>({"63c6cc31":l(r)})));const{themeColor:r}=V(),p=y("hideScrollbar"),v=N(),{songRecord:d,musicDownload:g,loveSongs:_}=k(v),f=o(),S=n((()=>"LoveView"==i.pageName?_.value:"RecentPlayView"==i.pageName?d.value:g.value)),C=n((()=>new Map(S.value.map(((e,a)=>[e.id,a]))))),h=n((()=>{var e;return(null==(e=f.value)?void 0:e.getSelectItems())||[]})),{playSelectMusic:w}=I(),x=()=>{var e;w(h.value),null==(e=f.value)||e.clearSelect()},P=()=>{var e;h.value.forEach((e=>{v.addMuiscDownload(e)})),null==(e=f.value)||e.clearSelect()},M=()=>{if(h.value.length>0){const e=h.value.map((e=>e.id)),a=S.value.filter((a=>!e.includes(a.id)));S.value.splice(0),S.value.push(...a),j(z.SUCCESS,"已清除选中的歌曲！")}else j(z.INFO,"请添加歌曲！")},U=()=>{p(),s("closeSelect",!1)};return(e,a)=>(u(),t("div",Z,[m("div",$,[c(l(b),{icon:"",name:"播放",class:"play",onClick:x}),c(l(b),{icon:"",onClick:M,name:"删除"}),c(l(b),{icon:"󰌄",onClick:P,name:"下载"}),c(l(b),{icon:"",name:"取消操作",onClick:U})]),c(l(R),{songs:l(S),"song-id-mapper":l(C),showSelect:!0,"show-header":!1,ref_key:"table",ref:f},null,8,["songs","song-id-mapper"])]))}}),[["__scopeId","data-v-841f6d57"]]);export{A as U,T as a};
