import{s as e}from"../pinia/pinia.07d51cb2.js";import{u as a,a as s,e as o,d as l,_ as n,p as t,g as i}from"../../assets/index-b6c8c353.js";import{D as c}from"../DecoratedButton/DecoratedButton.20fd6afe.js";import{_ as u}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.d9cff3b8.js";import{G as r,i as p,Z as v,o as d,c as m,a as g,U as S,u as f,z as h,n as _,ax as w,d as y,O as C,J as b,F as N,a7 as k,M as P,T as B,I as V,P as j,aq as x,ay as I,az as D}from"../@vue/@vue.7ad02ad1.js";import{P as L}from"../PlayButton/PlayButton.4e32f27c.js";import{S as U}from"../SearchButton/SearchButton.436d668f.js";import{b as E,c as M,d as R}from"../element-plus/element-plus.372e8740.js";const F={class:"batch-container"},G={class:"operation-select"},O=n(r({__name:"UserBatch",props:{pageName:null},emits:["closeSelect"],setup(n,{emit:t}){const i=n,r=a(),{isPlay:w,songList:y,songListId:C,playProcess:b,playTime:N,current:k}=e(r),P=s(),{songRecord:B,musicDownload:V,loveSongs:j}=e(P),x=h("hideScroll"),I=p((()=>"LoveView"==i.pageName?j.value:"RecentPlayView"==i.pageName?B.value:V.value)),D=p((()=>new Map(I.value.map(((e,a)=>[e.id,a]))))),L=v([]),U=e=>{0!=L.length&&L.splice(0),L.push(...e)},E=async()=>{L.length>0?(w.value=!1,b.value=0,N.value=0,await _(),L.forEach((e=>{null==C.value.get(e.id)&&y.value.unshift(e)})),k.value=C.value.get(L[0].id),w.value=!0,o(l.SUCCESS,"已添加到播放列表！")):o(l.INFO,"请添加歌曲！")},M=()=>{L.forEach((e=>{P.addMuiscDownload(e)}))},R=()=>{if(L.length>0){const e=L.map((e=>e.id)),a=I.value.filter((a=>!e.includes(a.id)));I.value.splice(0),I.value.push(...a),o(l.SUCCESS,"已清除选中的歌曲！")}else o(l.INFO,"请添加歌曲！")},O=()=>{x(),t("closeSelect",!1)};return(e,a)=>(d(),m("div",F,[g("div",G,[S(c,{icon:"",name:"播放",class:"play",onClick:E}),S(c,{icon:"",onClick:R,name:"删除"}),S(c,{icon:"󰌄",onClick:M,name:"下载"}),S(c,{icon:"",name:"取消操作",onClick:O})]),S(u,{songs:f(I),"song-id-mapper":f(D),showSelect:!0,"show-header":!1,onGetSelectItems:U},null,8,["songs","song-id-mapper"])]))}}),[["__scopeId","data-v-ccb17794"]]),T=e=>(I("data-v-8b16ef51"),e=e(),D(),e),z={class:"sort-btn"},q=[T((()=>g("span",{class:"iconfont"},"",-1))),T((()=>g("span",null," 排序",-1)))],J=n(r({__name:"SortButton",emits:["getSortChoice"],setup(e,{emit:a}){w((e=>({cf39b35c:f(o),48493519:f(n)})));const s=t(),o=i().get("fontColor"),l=i().get("background"),n=p((()=>{var e;return"color"==s.bgMode?null==(e=i().get("searchBg"))?void 0:e.value:"rgba(210,210,210,0.2)"})),c=p((()=>"color"==s.bgMode?"#ffffff"==o.value?"dropdown-dark":"dropdown-light":"dropdown-skin")),u=v(["歌曲排序","歌手排序","专辑排序","时长排序"]),r=v([!1,!1,!1,!1]),h=y(-1),_=p((()=>r.map(((e,a)=>a==h.value)))),I=e=>{"歌曲排序"==e?h.value=_.value[0]?-1:0:"歌手排序"==e?h.value=_.value[1]?-1:1:"专辑排序"==e?h.value=_.value[2]?-1:2:"时长排序"==e&&(h.value=_.value[3]?-1:3),-1==h.value?a("getSortChoice",_.value,!0):a("getSortChoice",_.value,!1)},D=()=>{-1==h.value&&(h.value=0,a("getSortChoice",_.value,!1))};return(e,a)=>{const s=E,n=M,t=R,i=x("prevent");return d(),m("div",z,[S(t,{trigger:"click",onCommand:I,"popper-class":`dropdown sort-drop ${f(c)}`},{dropdown:C((()=>[S(n,{style:b({color:f(o),background:f(l)})},{default:C((()=>[(d(!0),m(N,null,k(u,((e,a)=>(d(),P(s,{key:e,command:e},{default:C((()=>[g("span",{class:V({"is-choose":f(_)[a]})},B(e),3)])),_:2},1032,["command"])))),128))])),_:1},8,["style"])])),default:C((()=>[j((d(),m("div",{class:"sort",onClick:D},q)),[[i]])])),_:1},8,["popper-class"])])}}}),[["__scopeId","data-v-8b16ef51"]]),Z={class:"user-container"},$={class:"top-operation"},A=n(r({__name:"UserSongTable",props:{pageName:null},emits:["openSelect"],setup(a,{emit:n}){const i=a,r=t(),{isFullScreen:h}=e(r),_=s(),{musicDownload:w,loveSongs:C,songRecord:b}=e(_),N=p((()=>{let e=v([]);return e="LoveView"==i.pageName?C.value:"RecentPlayView"==i.pageName?b.value:w.value,e.filter((e=>e.name.includes(V.value)||e.album.includes(V.value)||e.singer.includes(V.value)))})),k=p((()=>new Map(N.value.map(((e,a)=>[e.id,a]))))),P=p((()=>"loveView"==i.pageName?"清空全部收藏":"recentPlayView"==i.pageName?"清空播放记录":"清空下载记录")),B=p((()=>h.value?"RecentPlayView"==i.pageName?"560px":"580px":"RecentPlayView"==i.pageName?"420px":"440px")),V=y(""),j=e=>{V.value=e},x=v([!1,!1,!1,!1]),I=y(!1),D=(e,a)=>{for(let s=0;s<x.length;s++)x[s]=e[s];a&&(I.value=a)},E=()=>{"loveView"==i.pageName?C.value.splice(0):"recentPlayView"==i.pageName?b.value.splice(0):w.value.splice(0),o(l.SUCCESS,"已清空全部下载记录！")};return(e,a)=>(d(),m("div",Z,[g("div",$,[S(L,{songs:f(N)},null,8,["songs"]),S(c,{icon:"",name:f(P),onClick:E},null,8,["name"]),S(c,{icon:"",name:"批量操作",onClick:a[0]||(a[0]=e=>n("openSelect",!0))}),S(U,{onGetContent:j}),S(J,{onGetSortChoice:D})]),S(u,{songs:f(N),"song-id-mapper":f(k),sort:x,"is-cancel-sort":I.value,height:f(B)},null,8,["songs","song-id-mapper","sort","is-cancel-sort","height"])]))}}),[["__scopeId","data-v-92639a4e"]]);export{O as U,A as a};
