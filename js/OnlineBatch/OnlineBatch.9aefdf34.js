import{s}from"../pinia/pinia.07d51cb2.js";import{u as e,a,e as o,d as n,_ as l}from"../../assets/index-6b4c8495.js";import{D as t}from"../DecoratedButton/DecoratedButton.28e5ed3e.js";import{_ as i}from"../SongList.vue_vue_type_style_index_0_lang/SongList.vue_vue_type_style_index_0_lang.06763e13.js";import{G as c,Z as u,c as p,a as r,U as d,o as v,n as m}from"../@vue/@vue.7ad02ad1.js";const g={class:"online-batch"},_={class:"operation-select"},h=l(c({__name:"OnlineBatch",props:{songs:null,songIdMapper:null},emits:["closeSelect"],setup(l,{emit:c}){const h=e(),{isPlay:f,songList:y,songListId:S,playProcess:I,playTime:C,current:j}=s(h),D=a(),{loveMusicId:L,loveSongs:k}=s(D),w=u([]),x=s=>{0!=w.length&&w.splice(0),w.push(...s)},E=async()=>{w.length>0?(f.value=!1,I.value=0,C.value=0,await m(),w.forEach((s=>{null==S.value.get(s.id)&&y.value.unshift(s)})),j.value=S.value.get(w[0].id),f.value=!0,o(n.SUCCESS,"已添加到播放列表！")):o(n.INFO,"请添加歌曲！")},M=()=>{w.forEach((s=>{D.addMuiscDownload(s)}))},B=()=>{w.forEach((s=>{s.isLove=!0;null==L.value.get(s.id)&&k.value.push(s)}))};return(s,e)=>(v(),p("div",g,[r("div",_,[d(t,{icon:"",name:"播放",class:"play",onClick:E}),d(t,{icon:"",name:"收藏",onClick:B}),d(t,{icon:"󰌄",onClick:M,name:"下载"}),d(t,{icon:"",name:"取消操作",onClick:e[0]||(e[0]=s=>c("closeSelect",!1)),class:"cancel"})]),d(i,{songs:l.songs,"song-id-mapper":l.songIdMapper,"show-select":!0,"show-header":!1,onGetSelectItems:x},null,8,["songs","song-id-mapper"])]))}}),[["__scopeId","data-v-5d9194d1"]]);export{h as O};
