import{h as a}from"../element-plus/element-plus.70abbed3.js";import{G as e,ax as s,u as t,d as l,i as n,o,c as i,T as u,R as p,a as d,U as c,O as r,F as y,a7 as m,P as v,S as _,a0 as f,M as g,z as h,aq as x}from"../@vue/@vue.7ad02ad1.js";import{u as k}from"../vue-router/vue-router.53ff932e.js";import{u as C,P as w,_ as P}from"../../static/index-c54fb4ae.js";/* empty css                                                                                                                     */const j={class:"playlist"},b={key:0,class:"title"},z={class:"content"},D={class:"mask"},I=["onClick"],S=["onClick"],q={class:"name"},B={class:"playcount iconfont"},F=P(e({__name:"index",props:{playlists:null,title:{default:""},showDelete:{type:Boolean,default:!1},transitionName:{default:""},showPagination:{type:Boolean,default:!1},type:{default:"playlist"}},emits:["getDeleteId"],setup(e,{emit:P}){const F=e;s((a=>({eb95443a:t(G),"13d4f05a":t(N),"9c3ae83a":t(M),"28ff5f6b":t(A)})));const{fontColor:G,boxShadow:N,themeColor:A,fontGray:M}=C(),O=h("hideScrollbar"),R=k(),T=l(1),U=l(18),E=n((()=>F.playlists.length)),H=n((()=>F.playlists.slice((T.value-1)*U.value,T.value*U.value))),J=async a=>{T.value=a};return(s,l)=>{const n=a,h=x("prevent");return o(),i("div",j,[e.title?(o(),i("h4",b,u(e.title),1)):p("",!0),d("div",z,[c(f,{name:e.transitionName},{default:r((()=>[(o(!0),i(y,null,m(e.showPagination?t(H):e.playlists,(a=>(o(),i("div",{key:a.id,class:"list"},[d("div",D,[v((o(),i("span",{class:"iconfont",onClick:e=>{return s=a,O(),void R.push({name:"playlist",query:{id:s.id,type:F.type}});var s}},[_("")],8,I)),[[h]]),e.showDelete?v((o(),i("span",{key:0,onClick:e=>P("getDeleteId",a.id),class:"delete iconfont"},[_("")],8,S)),[[h]]):p("",!0)]),c(n,{src:a.image,loading:"lazy",class:"image"},null,8,["src"]),d("span",q,u(a.name),1),d("span",B," "+u((+a.playCount/1e4).toFixed(1))+"万",1)])))),128))])),_:1},8,["name"]),e.showPagination&&e.playlists.length>U.value?(o(),g(t(w),{key:0,"cur-page":T.value,"page-size":U.value,text:"个歌单",onPageChange:J,total:t(E)},null,8,["cur-page","page-size","total"])):p("",!0)])])}}}),[["__scopeId","data-v-8ca17931"]]);export{F as A};
