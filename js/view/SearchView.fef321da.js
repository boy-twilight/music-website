import{u as a}from"../element-plus/element-plus.f3996937.js";import{T as s,_ as e}from"../Tab/Tab.7e2bfc12.js";import{b as t}from"../vue-router/vue-router.53ff932e.js";import{b as l,o,e as i,f as n,p as r,k as m,_ as u}from"../../assets/index-1a5908cb.js";import{P as c}from"../PlayButton/PlayButton.131230e1.js";import{D as p}from"../DecoratedButton/DecoratedButton.9a6b8864.js";import{M as d}from"../Mv/Mv.186257e0.js";import{A as g}from"../Albums/Albums.cf868b48.js";import{P as v}from"../PlayList/PlayList.92cc779a.js";import{L as y}from"../Loading/Loading.f98df4d2.js";import{S as h}from"../Singer/Singer.518999f9.js";import{N as j}from"../NoSearch/NoSearch.cfcbe15e.js";import{G as f,Z as b,d as R,c as k,U as E,O as _,o as w,a as L,M as O,R as S,z as U}from"../@vue/@vue.7ad02ad1.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.5f7505c4.js";import"../@element-plus/@element-plus.cef41b68.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.6b07a04c.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../pinia/pinia.07d51cb2.js";import"../axios/axios.d4208f68.js";import"../lodash/lodash.57b1d944.js";import"../nprogress/nprogress.8c6d26c7.js";const x={class:"search-container scroll-container"},z={class:"song"},C={class:"operation-top"},P={key:1,class:"singers"},T=u(f({__name:"SearchView",setup(u){const f=t().query.keyWord+"",T=b([]),A=b([]),B=b([]),I=b([]),M=b([]),N=b([]),D=R(!1),G=U("firstLoading"),V=U("hideScroll"),q=a=>{V(),"mv"==a&&0==B.length?l((async()=>{try{const a=await o(1004,60,f),{result:{mvs:s}}=a;s&&s.forEach((a=>{const{id:s,name:e,cover:t,artistName:l,playCount:o}=a;B.push({id:s,name:e,image:t,artist:l,playCount:o})}))}catch(a){i(n.ERROR,a.message)}D.value=!1}),D):"album"==a&&0==I.length?l((async()=>{try{const a=await o(10,60,f),{result:{albums:s}}=a;s&&s.forEach((a=>{const{id:s,name:e,picUrl:t,publishTime:l,artist:o}=a;I.push({id:s,name:e,cover:t,publishTime:r(l),artistId:o.id})}))}catch(a){i(n.ERROR,a.message)}D.value=!1}),D):"playList"==a&&0==M.length?l((async()=>{try{const a=await o(1e3,60,f),{result:{playlists:s}}=a;s&&s.forEach((a=>{const{id:s,name:e,coverImgUrl:t,playCount:l}=a;M.push({id:s,name:e,image:t,playCount:l,description:"",tag:[],creator:{nickname:"",avatarUrl:""}})}))}catch(a){i(n.ERROR,a.message)}D.value=!1}),D):"singer"==a&&0==N.length?l((async()=>{try{const a=await o(100,60,f),{result:{artists:s}}=a;s&&s.forEach((a=>{const{id:s,name:e,picUrl:t,accountId:l}=a;N.push({id:s,name:e,avatar:t,score:l})}))}catch(a){i(n.ERROR,a.message)}D.value=!1}),D):"video"==a&&0==A.length&&l((async()=>{try{const a=await o(1014,60,f),{result:{videos:s}}=a;s&&s.forEach((a=>{const{vid:s,title:e,coverUrl:t,creator:l,playTime:o}=a;A.push({id:s,name:e,image:t,artist:l[0].userName,playCount:o})}))}catch(a){i(n.ERROR,a.message)}D.value=!1}),D)};return l((async()=>{try{const a=await o(1,40,f),{result:{songs:s}}=a;if(s){const a=[];s.forEach((s=>{const{id:e,name:t,artists:l,album:o,fee:i}=s;a.push(e),T.push({id:e,name:t,singer:l.map((a=>a.name)).join(","),songImage:l[0].img1v1Url,album:o.name,available:i,url:"",time:""})})),m(a.join(","),T)}}catch(a){i(n.ERROR,a.message)}G.value=!1}),G),(t,l)=>{const o=e,i=a;return w(),k("div",x,[E(s,{onGetActive:q,active:"song",class:"search-tab"},{content:_((()=>[E(i,{label:"歌曲",name:"song"},{default:_((()=>[L("div",z,[L("div",C,[E(c,{songs:T},null,8,["songs"]),E(p,{name:"下载",icon:"󰌄"}),E(p,{name:"批量操作",icon:""})]),E(o,{songs:T,height:"440px"},null,8,["songs"])])])),_:1}),E(i,{label:"视频",name:"video"},{default:_((()=>[D.value?(w(),O(y,{key:0,"is-loading":D.value},null,8,["is-loading"])):S("",!0),0==A.length?(w(),O(j,{key:1})):(w(),O(d,{key:2,mvs:A},null,8,["mvs"]))])),_:1}),E(i,{label:"MV",name:"mv"},{default:_((()=>[D.value?(w(),O(y,{key:0,"is-loading":D.value},null,8,["is-loading"])):S("",!0),0==B.length?(w(),O(j,{key:1})):(w(),O(d,{key:2,mvs:B},null,8,["mvs"]))])),_:1}),E(i,{label:"专辑",name:"album"},{default:_((()=>[D.value?(w(),O(y,{key:0,"is-loading":D.value},null,8,["is-loading"])):S("",!0),0==I.length?(w(),O(j,{key:1})):(w(),O(g,{key:2,albums:I},null,8,["albums"]))])),_:1}),E(i,{label:"歌单",name:"playList"},{default:_((()=>[D.value?(w(),O(y,{key:0,"is-loading":D.value},null,8,["is-loading"])):S("",!0),0==M.length?(w(),O(j,{key:1})):(w(),O(v,{key:2,playlists:M},null,8,["playlists"]))])),_:1}),E(i,{label:"歌手",name:"singer"},{default:_((()=>[0==N.length?(w(),O(j,{key:0})):(w(),k("div",P,[E(h,{"singer-list":N},null,8,["singer-list"])]))])),_:1})])),_:1})])}}}),[["__scopeId","data-v-74209359"]]);export{T as default};
