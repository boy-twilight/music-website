import{h as e}from"../element-plus/element-plus.79622da4.js";import{G as a,ax as s,u as t,d as l,i as n,o,c as i,T as u,R as p,a as c,U as d,O as r,F as y,a7 as m,P as v,S as _,a0 as f,M as g,aq as h}from"../@vue/@vue.7ad02ad1.js";import{u as x}from"../vue-router/vue-router.53ff932e.js";import{u as k,P as C,_ as w}from"../../static/index-493d9311.js";/* empty css                                                                                                                     */const P={class:"playlist"},j={key:0,class:"title"},D={class:"content"},z={class:"mask"},I=["onClick"],q=["onClick"],B={class:"name"},F={class:"playcount iconfont"},G=w(a({__name:"index",props:{playlists:null,title:{default:""},showDelete:{type:Boolean,default:!1},transitionName:{default:""},showPagination:{type:Boolean,default:!1},type:{default:"playlist"}},emits:["getDeleteId"],setup(a,{emit:w}){const G=a;s((e=>({"5434a1e8":t(N),44579742:t(S),"7e98333e":t(b),c22ec7f4:t(U)})));const{fontColor:N,boxShadow:S,themeColor:U,fontGray:b}=k(),A=x(),M=l(1),O=l(18),R=n((()=>G.playlists.length)),T=n((()=>G.playlists.slice((M.value-1)*O.value,M.value*O.value)));return(s,l)=>{const n=e,x=h("prevent");return o(),i("div",P,[a.title?(o(),i("h4",j,u(a.title),1)):p("",!0),c("div",D,[d(f,{name:a.transitionName},{default:r((()=>[(o(!0),i(y,null,m(a.showPagination?t(T):a.playlists,(e=>(o(),i("div",{key:e.id,class:"list"},[c("div",z,[v((o(),i("span",{class:"iconfont",onClick:a=>{return s=e,void A.push({name:"playlist",query:{id:s.id,type:G.type}});var s}},[_("")],8,I)),[[x]]),a.showDelete?v((o(),i("span",{key:0,onClick:a=>w("getDeleteId",e.id),class:"delete iconfont"},[_("")],8,q)),[[x]]):p("",!0)]),d(n,{src:e.image,loading:"lazy",class:"image"},null,8,["src"]),c("span",B,u(e.name),1),c("span",F," "+u((+e.playCount/1e4).toFixed(1))+"万",1)])))),128))])),_:1},8,["name"]),a.showPagination&&a.playlists.length>O.value?(o(),g(t(C),{key:0,"cur-page":M.value,"onUpdate:curPage":l[0]||(l[0]=e=>M.value=e),"page-size":O.value,text:"个歌单",total:t(R)},null,8,["cur-page","page-size","total"])):p("",!0)])])}}}),[["__scopeId","data-v-5d30407e"]]);export{G as A};
