import{x as a}from"../element-plus/element-plus.d1c0be0b.js";import{G as e,ax as s,i as l,r as i,Z as n,c as t,P as o,V as r,U as c,u,a as p,T as d,a2 as m,O as g,z as v,o as h,F as y,a7 as f,S as _,n as b,ag as x,aq as j}from"../@vue/@vue.59fec093.js";import{b as C,u as k}from"../vue-router/vue-router.10a7fca4.js";import{s as R}from"../pinia/pinia.81428a33.js";import{t as w,g as z,a as E,u as S,b as L,v as I,j as O,k as M,w as P,x as U,h as A,i as N,C as T,P as F,y as G,z as q,s as V,A as B,_ as D}from"../../static/index-9031b76e.js";import{P as H,_ as J}from"../index.vue_vue_type_style_index_0_scoped_775b3144_lang/index.vue_vue_type_style_index_0_scoped_775b3144_lang.3091d25e.js";import{O as K}from"../index/index.c590d526.js";import{A as W}from"../index/index.de9c42f8.js";import{A as Z}from"../index/index.57080ef2.js";import{S as Q}from"../index/index.091588f6.js";import{A as X}from"../index/index.c728ab80.js";import{L as Y}from"../index/index.ab3ceea1.js";import{N as $}from"../index/index.61442e7c.js";import{T as aa}from"../index/index.a35437cd.js";import"../lodash-es/lodash-es.3125e237.js";import"../@vueuse/@vueuse.c2bb539f.js";import"../@element-plus/@element-plus.189e73a2.js";import"../@popperjs/@popperjs.b78c3215.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.c1293ab3.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.3222b0a2.js";import"../@floating-ui/@floating-ui.333ef71e.js";import"../hotkeys-js/hotkeys-js.e364e5e1.js";import"../axios/axios.d4208f68.js";import"../nprogress/nprogress.57559ed5.js";/* empty css                                                                                                                     *//* empty css                                                                                                                     */const ea={class:"search-container scroll-container"},sa=["src"],la={class:"right-singer"},ia={class:"singer-name"},na={class:"singer-info"},ta={class:"song"},oa={class:"header-operation"},ra={class:"lyric-container"},ca={class:"lyric-operation"},ua=["onClick"],pa=["onClick"],da=["onClick"],ma=["onClick"],ga=["onClick"],va={class:"lyric-left"},ha={class:"song-name"},ya={class:"is-vip iconfont"},fa={class:"lyric-center"},_a={class:"lyric-right"},ba=D(e({__name:"SearchView",setup(e){s((a=>({d1663294:u(xa),"5d3e517e":u(ka),"52165d70":u(Ca),48942032:u(ja),c0a58f76:u(Ra),"3f7cc67b":u(wa)})));const D=w(),{bgMode:ba}=R(D),xa=v("fontGray"),ja=z().get("shadow"),Ca=z().get("fontColor"),ka=z().get("themeColor"),Ra=l((()=>"skin"==ba.value?"rgba(220, 220, 220, 0.1)":"#ffffff"==(null==Ca?void 0:Ca.value)?"rgba(30, 30, 30, 0.2)":"rgba(220, 220, 220, 0.25)")),wa=l((()=>"skin"==ba.value?"rgba(230, 230, 230, 0.25)":"#ffffff"==(null==Ca?void 0:Ca.value)?"rgba(30, 30, 30, 1)":"rgba(220, 220, 220, 0.8)")),za=k(),Ea=E(),{loveMusicId:Sa,loveSongs:La}=R(Ea),Ia=i(!1),Oa=a=>{Ia.value=a},Ma=()=>{Ba.forEach((a=>{a.isLove=!0;null==Sa.value.get(a.id)&&La.value.push(a)}))},Pa=S(),{songListId:Ua,songList:Aa,current:Na,playProcess:Ta,playTime:Fa,isPlay:Ga}=R(Pa),qa=C().query.keyWord+"",Va=i("song"),Ba=n([]),Da=l((()=>new Map(Ba.map(((a,e)=>[a.id,e]))))),Ha=n([]),Ja=n([]),Ka=n([]),Wa=n([]),Za=n([]),Qa=n([]),Xa=l((()=>Qa.length>0?Qa[0]:{name:"",avatar:"",id:"",score:"",albumSize:"",mvSize:""})),Ya=n([]),$a=l((()=>new Map(Ya.map(((a,e)=>[a.id,e]))))),ae=i(!1),ee=v("firstLoading"),se=n([!1,!1,!1,!1,!1,!1,!1]),le=n([]),ie=i(1),ne=l((()=>"song"==Va.value?30:10)),te=l((()=>"song"==Va.value?Ba:Ya)),oe=l((()=>te.value.slice((ie.value-1)*ne.value,ie.value*ne.value))),re=l((()=>"song"==Va.value?Ba.length:Ya.length)),ce=a=>{ie.value=a},ue=a=>{Va.value=a,"video"==a&&0==Ha.length?L((async()=>{try{const a=await I(1014,100,qa),{result:{videos:e}}=a;e&&e.length>0&&e.forEach((a=>{const{vid:e,title:s,coverUrl:l,creator:i,playTime:n}=a;Ha.push({id:e,name:s,image:l,artist:i[0].userName,playCount:n})}))}catch(a){O(M.ERROR,a.message)}ae.value=!1,se[0]=0==Ha.length}),ae):"mv"==a&&0==Ja.length?L((async()=>{try{const a=await I(1004,100,qa),{result:{mvs:e}}=a;e&&0!=e.length&&e.forEach((a=>{const{id:e,name:s,cover:l,artistName:i,playCount:n}=a;Ja.push({id:e,name:s,image:l,artist:i,playCount:n})}))}catch(a){O(M.ERROR,a.message)}ae.value=!1,se[1]=0==Ja.length}),ae):"album"==a&&0==Ka.length?L((async()=>{try{const a=await I(10,60,qa),{result:{albums:e}}=a;e&&e.length>0&&e.forEach((a=>{const{id:e,name:s,picUrl:l,publishTime:i,artist:n}=a;Ka.push({id:e,name:s,cover:l,publishTime:P(i),artistId:n.id})}))}catch(a){O(M.ERROR,a.message)}ae.value=!1,se[2]=0==Ka.length}),ae):"radio"==a&&0==Za.length?L((async()=>{try{const a=await I(1009,100,qa),{result:{djRadios:e}}=a;e&&e.length>0&&e.forEach((a=>{const{id:e,name:s,picUrl:l,playCount:i}=a;Za.push({name:s,id:e,image:l,playCount:i,creator:{nickname:"",avatarUrl:""},tag:[],description:""})}))}catch(a){O(M.ERROR,a.message)}ae.value=!1,se[3]=0==Za.length}),ae):"playList"==a&&0==Wa.length?L((async()=>{try{const a=await I(1e3,100,qa),{result:{playlists:e}}=a;e&&e.length>0&&e.forEach((a=>{const{id:e,name:s,coverImgUrl:l,playCount:i}=a;Wa.push({id:e,name:s,image:l,playCount:i,description:"",tag:[],creator:{nickname:"",avatarUrl:""}})}))}catch(a){O(M.ERROR,a.message)}ae.value=!1,se[4]=0==Wa.length}),ae):"lyric"==a&&0==Ya.length&&L((async()=>{try{const a=await I(1006,100,qa),{result:{songs:e}}=a;if(e&&e.length>0){const a=e.map((a=>a.id)).join(","),s=await U(a),{songs:l}=s;l.forEach((a=>{le.push(3),A(Ya,a)})),e.forEach(((a,e)=>{const{lyrics:{txt:s}}=a;Ya[e].lyric=s.split("\n")})),N(Ya),Ea.initLoveMusic(Ba)}}catch(a){O(M.ERROR,a.message)}ae.value=!1,se[6]=0==Ya.length}),ae)};return L((async()=>{try{(await Promise.all([I(1,100,qa),I(100,100,qa)])).forEach((async(a,e)=>{if(0==e){const{result:{songs:e}}=a;if(e&&e.length>0){const a=e.map((a=>a.id)).join(","),s=await U(a),{songs:l}=s;l.forEach((a=>{A(Ba,a)})),N(Ba),Ea.initLoveMusic(Ba)}}else if(1==e){const{result:{artists:e}}=a;e&&e.length>0&&e.forEach((a=>{const{id:e,name:s,picUrl:l,accountId:i,albumSize:n,mvSize:t}=a;Qa.push({id:e,name:s,avatar:l,score:i,albumSize:n,mvSize:t})})),se[5]=0==Qa.length}}))}catch(a){O(M.ERROR,a.message)}ee.value=!1}),ee),(e,s)=>{const l=a,i=x("No"),n=j("prevent");return h(),t("div",ea,[o(c(u(K),{songs:u(oe),"song-id-mapper":u(Da),onCloseSelect:Oa},null,8,["songs","song-id-mapper"]),[[r,Ia.value]]),o(p("div",{class:"result-singer",onClick:s[1]||(s[1]=a=>u(za).push({name:"artist",query:{id:u(Xa).id,score:u(Xa).score}}))},[p("img",{src:u(Xa).avatar,class:"left-singer"},null,8,sa),p("div",la,[p("h4",ia,"歌手："+d(u(Xa).name),1),p("p",na,[p("span",null,"专辑："+d(u(Xa).albumSize),1),p("span",null,"视频："+d(u(Xa).mvSize),1)])]),c(u(T),{name:u(Xa).isLove?"取消关注":"关注歌手",icon:u(Xa).isLove?"":"","icon-style":u(Xa).isLove?"color:#ff6a6a;":"",onClick:s[0]||(s[0]=m((a=>u(Ea).addLove(u(Xa),u(Ea).loveSinger,u(Ea).loveSingerId)),["stop"]))},null,8,["name","icon","icon-style"])],512),[[r,u(Xa).name]]),o(c(u(aa),{onGetActive:ue,active:"song",class:"search-tab"},{content:g((()=>[c(l,{label:"歌曲",name:"song"},{default:g((()=>[p("div",ta,[p("div",oa,[c(u(H),{songs:u(oe)},null,8,["songs"]),c(u(T),{icon:"",onClick:Ma,name:"全部收藏"}),c(u(T),{icon:"",name:"批量操作",onClick:s[2]||(s[2]=a=>Ia.value=!Ia.value)})]),c(u(J),{songs:u(oe),"page-size":u(ne),"song-id-mapper":u(Da)},null,8,["songs","page-size","song-id-mapper"]),o(c(u(F),{"cur-page":ie.value,"page-size":u(ne),total:u(re),onPageChange:ce},null,8,["cur-page","page-size","total"]),[[r,u(ne)<u(re)]])])])),_:1}),c(l,{label:"视频",name:"video"},{default:g((()=>[c(u(Y),{"is-loading":ae.value},null,8,["is-loading"]),o(c(u($),{text:"暂无搜索结果"},null,512),[[r,se[0]]]),o(c(u(X),{mvs:Ha,"show-pagination":!0},null,8,["mvs"]),[[r,!se[0]]])])),_:1}),c(l,{label:"MV",name:"mv"},{default:g((()=>[c(u(Y),{"is-loading":ae.value},null,8,["is-loading"]),o(c(i,{text:"暂无搜索结果"},null,512),[[r,se[1]]]),o(c(u(X),{mvs:Ja,"show-pagination":!0},null,8,["mvs"]),[[r,!se[1]]])])),_:1}),c(l,{label:"专辑",name:"album"},{default:g((()=>[c(u(Y),{"is-loading":ae.value},null,8,["is-loading"]),o(c(u($),{text:"暂无搜索结果"},null,512),[[r,se[2]]]),o(c(u(W),{albums:Ka,"show-pagination":!0},null,8,["albums"]),[[r,!se[2]]])])),_:1}),c(l,{label:"电台",name:"radio"},{default:g((()=>[c(u(Y),{"is-loading":ae.value},null,8,["is-loading"]),o(c(u($),{text:"暂无搜索结果"},null,512),[[r,se[3]]]),o(c(u(Z),{playlists:Za,"show-pagination":!0,type:"radio"},null,8,["playlists"]),[[r,!se[3]]])])),_:1}),c(l,{label:"歌单",name:"playList"},{default:g((()=>[c(u(Y),{"is-loading":ae.value},null,8,["is-loading"]),o(c(u($),{text:"暂无搜索结果"},null,512),[[r,se[4]]]),o(c(u(Z),{playlists:Wa,"show-pagination":!0},null,8,["playlists"]),[[r,!se[4]]])])),_:1}),c(l,{label:"歌手",name:"singer"},{default:g((()=>[c(u(Y),{"is-loading":ae.value},null,8,["is-loading"]),o(c(u($),{text:"暂无搜索结果"},null,512),[[r,se[5]]]),o(c(u(Q),{"singer-list":Qa},null,8,["singer-list"]),[[r,!se[5]]])])),_:1}),c(l,{label:"歌词",name:"lyric"},{default:g((()=>[c(u(Y),{"is-loading":ae.value},null,8,["is-loading"]),o(c(u($),{text:"暂无搜索结果"},null,512),[[r,se[6]]]),p("div",ra,[(h(!0),t(y,null,f(u(oe),(a=>{var e;return h(),t("div",{class:"lyric",key:a.id},[p("div",ca,[o((h(),t("span",{class:"iconfont play-music",onClick:e=>(async a=>{if("0"==a.available||"8"==a.available){const e=Ua.value.get(a.id);null==e?(Ea.addRecord(a,Ea.songRecord,Ea.loveMusicId),0==Na.value?(Ga&&(Ga.value=!1),Ta.value=0,Fa.value=0,Aa.value.unshift(a),await b(),Ga.value=!0):(Aa.value.unshift(a),Na.value=0)):Na.value!=e?Na.value=e:Ga.value=!0}else"1"==a.available?O(M.INFO,"此歌曲为vip专属"):"10"==a.available&&O(M.INFO,"此歌曲尚未拥有版权，请切换其它歌曲")})(a)},[_("")],8,ua)),[[n]]),o((h(),t("span",{class:"iconfont music-info",onClick:e=>u(G)(a)},[_("")],8,pa)),[[n]]),o((h(),t("span",{class:"iconfont",onClick:e=>u(q)(a)},[_("")],8,da)),[[n]]),o((h(),t("span",{class:"open-lyric",onClick:e=>{return s=u($a).get(a.id),void(le[s]=le[s]==Ya[s].lyric.length?3:Ya[s].lyric.length);var s}},[_(d(le[u($a).get(a.id)]==(null==(e=a.lyric)?void 0:e.length)?"收起歌词":"展开歌词"),1)],8,ma)),[[n]]),o((h(),t("span",{class:"copy-lyric",onClick:e=>u(V)(a.name+"\r\n"+a.lyric.join("\r\n"),"歌词复制成功！")},[_("复制歌词")],8,ga)),[[n]])]),p("div",va,[p("p",ha,[p("span",null,d(a.name),1),o(p("span",ya,"",512),[[r,"10"==a.available||"1"==a.available]])]),(h(!0),t(y,null,f(a.lyric,((e,s)=>o((h(),t("p",{key:s},d(e.trim()),1)),[[r,s<le[u($a).get(a.id)]]]))),128))]),p("div",fa,[p("span",null,d(a.singer),1)]),p("div",_a,[p("span",null,d(a.album),1),p("span",null,d(u(B)(a.time)),1)])])})),128)),o(c(u(F),{class:"lyric-pagination","cur-page":ie.value,"page-size":u(ne),total:u(re),onPageChange:ce},null,8,["cur-page","page-size","total"]),[[r,u(ne)<u(re)]])])])),_:1})])),_:1},512),[[r,!Ia.value]])])}}}),[["__scopeId","data-v-7fd4eba3"]]);export{ba as default};
