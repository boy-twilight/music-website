import{g as e,u as s,a as n,C as a,e as o,c as l,_ as u}from"../../static/index-a47c3a7a.js";import{_ as c}from"../index.vue_vue_type_style_index_0_scoped_2dc764e5_lang/index.vue_vue_type_style_index_0_scoped_2dc764e5_lang.fc383066.js";const t={class:"online-batch"},i={class:"operation-select"},r=u(Vue.defineComponent({__name:"index",props:{songs:null,songIdMapper:null},emits:["closeSelect"],setup(u,{emit:r}){Vue.useCssVars((e=>({"28ef169c":Vue.unref(d)})));const d=e().get("themeColor"),p=s(),{isPlay:V,songList:_,songListId:v,playProcess:g,playTime:m,current:f}=Pinia.storeToRefs(p),h=n(),{loveMusicId:C,loveSongs:y}=Pinia.storeToRefs(h),x=Vue.reactive([]),k=e=>{0!=x.length&&x.splice(0),x.push(...e)},I=async()=>{x.length>0?(V.value=!1,g.value=0,m.value=0,await Vue.nextTick(),x.forEach((e=>{null==v.value.get(e.id)&&_.value.unshift(e)})),f.value=v.value.get(x[0].id),V.value=!0,o(l.SUCCESS,"已添加到播放列表！")):o(l.INFO,"请添加歌曲！")},N=()=>{x.forEach((e=>{h.addMuiscDownload(e)}))},S=()=>{x.forEach((e=>{e.isLove=!0;null==C.value.get(e.id)&&y.value.push(e)}))};return(e,s)=>(Vue.openBlock(),Vue.createElementBlock("div",t,[Vue.createElementVNode("div",i,[Vue.createVNode(Vue.unref(a),{icon:"",name:"播放",class:"play",onClick:I}),Vue.createVNode(Vue.unref(a),{icon:"",name:"收藏",onClick:S}),Vue.createVNode(Vue.unref(a),{icon:"󰌄",onClick:N,name:"下载"}),Vue.createVNode(Vue.unref(a),{icon:"",name:"取消操作",onClick:s[0]||(s[0]=e=>r("closeSelect",!1)),class:"cancel"})]),Vue.createVNode(Vue.unref(c),{songs:u.songs,"song-id-mapper":u.songIdMapper,"show-select":!0,"show-header":!1,onGetSelectItems:k},null,8,["songs","song-id-mapper"])]))}}),[["__scopeId","data-v-340bd685"]]);export{r as O};
