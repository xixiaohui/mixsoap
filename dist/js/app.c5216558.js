(function(t){function e(e){for(var a,s,r=e[0],c=e[1],u=e[2],d=0,m=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"132d":function(t,e,n){},2:function(t,e){},"329d":function(t,e,n){"use strict";n("ea4c")},"377a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={name:"App"},r=s,c=n("2877"),u=Object(c["a"])(r,i,o,!1,null,"7c78a3f8",null),l=u.exports,d=n("28dd"),m=n("43f9"),f=n.n(m),p=(n("51de"),n("e094"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[n("md-toolbar",{staticClass:"md-primary"},[n("h3",{staticClass:"md-title"},[t._v("Welcome to oddfee.")])]),n("md-divider"),n("div",{staticClass:"md-layout md-gutter container"},[n("div",{staticClass:"md-layout-item md-size-15"}),n("div",{staticClass:"md-layout-item"},[n("MusicDetailContent",{attrs:{music:this.$data.music}})],1),n("div",{staticClass:"md-layout-item md-size-15"})]),n("Foot")],1)},y=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-content",[n("div",{staticClass:"footerVideo"},[n("WelcomeVideo")],1)])},g=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-media"),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v("Welcome to oddfee.")]),n("div",{staticClass:"md-subhead"},[t._v("Thank you for your coming. Ads.")])]),n("md-card-content",[n("VideoTrack")],1)],1)},C=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-media",[n("div",{staticClass:"item"},[n("div",{staticClass:"player"},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions,playsinline:!0},on:{play:function(e){return t.onPlayerPlay(e)},pause:function(e){return t.onPlayerPause(e)},ended:function(e){return t.onPlayerEnded(e)},loadeddata:function(e){return t.onPlayerLoadeddata(e)},waiting:function(e){return t.onPlayerWaiting(e)},playing:function(e){return t.onPlayerPlaying(e)},timeupdate:function(e){return t.onPlayerTimeupdate(e)},canplay:function(e){return t.onPlayerCanplay(e)},canplaythrough:function(e){return t.onPlayerCanplaythrough(e)},ready:t.playerReadied,statechanged:function(e){return t.playerStateChanged(e)}}})],1)])])],1)},P=[],k={name:"VideoTrack",data:function(){return{playerOptions:{height:"300",autoplay:!0,muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],poster:"https://i.pinimg.com/600x315/9e/df/af/9edfaf9d82b6d107b25cbe6824926572.jpg"}}},mounted:function(){var t=this;setTimeout((function(){console.log("dynamic change options",t.player),t.player.muted(!1)}),5e3)},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay:function(t){},onPlayerPause:function(t){},onPlayerEnded:function(t){},onPlayerLoadeddata:function(t){},onPlayerWaiting:function(t){},onPlayerPlaying:function(t){},onPlayerTimeupdate:function(t){},onPlayerCanplay:function(t){},onPlayerCanplaythrough:function(t){},playerStateChanged:function(t){},playerReadied:function(t){console.log("example player 1 readied",t),t.currentTime(3)}}},O=k,j=Object(c["a"])(O,_,P,!1,null,"30be049e",null),$=j.exports,M={name:"WelcomeVideo",components:{VideoTrack:$}},T=M,x=Object(c["a"])(T,b,C,!1,null,"20a93ed4",null),S=x.exports,w={name:"Foot",components:{WelcomeVideo:S}},A=w,E=(n("bea4"),Object(c["a"])(A,v,g,!1,null,"7ed606f6",null)),B=E.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-card",[n("md-card-media"),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.music.music.title))]),n("div",{staticClass:"md-subhead"},[t._v(t._s(t.music.music.des))])]),n("md-card-content",[n("AudioTrack",{attrs:{url:t.music.music.url}})],1)],1)],1)},R=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"player"},[n("video-player",{staticClass:"vjs-custom-skin",attrs:{options:t.playerOptions,playsinline:!0},on:{ready:function(e){return t.playerReadied(e)}}})],1)])},V=[],W=n("3d33"),F=n.n(W),z={name:"AudioTrack",props:{url:String},data:function(){return{playerOptions:{height:"300",playbackRates:[.7,1,1.3,1.5,1.7],sources:[{type:"video/mp4",src:this.url}],poster:"https://i.pinimg.com/600x315/9e/df/af/9edfaf9d82b6d107b25cbe6824926572.jpg"}}},methods:{playerReadied:function(t){var e=new F.a.AudioTrack({id:"my-spanish-audio-track",kind:"translation",label:"Spanish",language:"es"});t.audioTracks().addTrack(e);var n=t.audioTracks();n.addEventListener("change",(function(){for(var t=0;t<n.length;t++){var e=n[t];if(e.enabled)return void F.a.log(e.label)}}))}}},I=z,G=(n("329d"),Object(c["a"])(I,L,V,!1,null,"2bd76243",null)),J=G.exports,H={name:"MusicDetailContent",components:{AudioTrack:J},data:function(){return{music:this.$store.state.music}},watch:{"this.$store.state.music":function(){this.music=this.$store.getters.mymusic}},methods:{addCount:function(){this.$store.commit("increment")}},computed:{count:function(){return this.$store.state.count},storeMusic:function(){return this.$store.state.music}},created:function(){a["default"].set(this.$data,"music",this.storeMusic)}},K=H,N=(n("fb6a"),Object(c["a"])(K,D,R,!1,null,"237fd5fe",null)),X=N.exports,q={name:"MusicDetail",components:{Foot:B,MusicDetailContent:X},data:function(){return{music:{}}},methods:{getEventBusMsg:function(){}},mounted:function(){console.log("Music Detail mounted")},created:function(){console.log("Music Detail created...2")}},Q=q,U=(n("a9a3"),Object(c["a"])(Q,h,y,!1,null,"257bf5bd",null)),Y=U.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{attrs:{id:"myheader"}},[n("md-toolbar",{staticClass:"md-primary"},[n("h3",{staticClass:"md-title"},[t._v("Welcome to oddfee.")])])],1),n("RegularButtons",{attrs:{items:t.files},on:{childByValue:t.setData}}),n("md-divider"),n("div",{staticClass:"md-layout md-gutter container"},[n("div",{staticClass:"md-layout-item md-size-15"}),n("div",{staticClass:"md-layout-item"},t._l(this.$data.message,(function(t,e){return n("LayoutCards",{key:e,attrs:{music:t}})})),1),n("div",{staticClass:"md-layout-item md-size-15"})]),n("Foot")],1)},tt=[],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tagBlock"},t._l(t.items,(function(e,a){return n("div",{key:a,staticClass:"tags"},[n("md-button",{staticClass:"md-raised",on:{click:t.sendString}},[t._v(t._s(e))])],1)})),0)},nt=[],at={name:"RegularButtons",props:{items:Array},methods:{sendString:function(t){this.$emit("childByValue",t.target.innerText)}}},it=at,ot=(n("c60a"),Object(c["a"])(it,et,nt,!1,null,"28553849",null)),st=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-card",{on:{mouseenter:function(e){return t.changeActive(e)},mousemove:function(e){return t.removeActive(e)}},nativeOn:{click:function(e){return t.gotoDetails(e)}}},[n("md-card-media"),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.music.title))]),n("div",{staticClass:"md-subhead"},[t._v(t._s(t.music.des))])]),n("md-card-content"),n("md-card-actions")],1)],1)},ct=[],ut={name:"LayoutCards",data:function(){return{}},props:{music:Object},methods:{gotoDetails:function(t){this.$router.push({path:"/details"}),this.$store.commit("setMusic",{music:this.music})},changeActive:function(t){console.log("鼠标移入了")},removeActive:function(t){console.log("鼠标移出了")}}},lt=ut,dt=(n("fbd9"),Object(c["a"])(lt,rt,ct,!1,null,"0a496721",null)),mt=dt.exports,ft={name:"Home",components:{RegularButtons:st,LayoutCards:mt,Foot:B},data:function(){return{message:{},files:["2020","Airtel","Alarm","Animal","Arabic","Attitude","Bengali","BGM","Bhojpuri","Blackberry","Bollywood","Call","Christmas","Classical","Corona","DeshBhakti","Dialogue","Electronica","English","Funny","Google","Infinix","Instrumental","iPhone","IPL","Islamic","Joker","Kannada","LG","Love","Malayalam","Marathi","Mashup","MoodOff","Motorola","Music","Nokia","Oneplus","Oppo","PakistaniSong","Poetry","PSL5","Punjabi","Remix","Romantic","Sad","Samsung","Scary","SMS","Sounds","Spanish","Tamil","Techno","Telugu","TikTok","Vivo","Warning","Xiaomi"]}},computed:{count:function(){return this.$store.state.count}},methods:{addCount:function(){this.$store.commit("increment")},setData:function(t){var e=this,n="files/"+t+".json";this.$http.get(n).then((function(t){a["default"].set(e.$data,"message",t.body)}),(function(t){console.log(t.body)}))}},mounted:function(){},created:function(){this.setData("2020")}},pt=ft,ht=(n("e7e7"),Object(c["a"])(pt,Z,tt,!1,null,"15650147",null)),yt=ht.exports,vt=[{path:"/details",name:"details",component:Y},{path:"/details/:music?",name:"detailsMusic",component:Y},{path:"/home",name:"home",component:yt},{path:"/",name:"home",component:yt}],gt=vt,bt=n("d6d3"),Ct=n.n(bt),_t=(n("fda2"),n("2f62"));a["default"].use(_t["a"]);var Pt=new _t["a"].Store({state:{count:0,music:{}},mutations:{increment:function(t){t.count++},setMusic:function(t,e){t.music=e}},getters:{mymusic:function(t){return t.music}}}),kt=Pt;a["default"].use(p["a"]),a["default"].use(f.a),a["default"].use(d["a"]),a["default"].config.productionTip=!1,a["default"].use(Ct.a);var Ot=new p["a"]({mode:"history",routes:gt});new a["default"]({el:"#app",router:Ot,store:kt,render:function(t){return t(l)}}).$mount("#app")},"78a9":function(t,e,n){},"8cd6":function(t,e,n){},9995:function(t,e,n){},a683:function(t,e,n){},a9a3:function(t,e,n){"use strict";n("a683")},bea4:function(t,e,n){"use strict";n("132d")},c60a:function(t,e,n){"use strict";n("8cd6")},e7e7:function(t,e,n){"use strict";n("9995")},ea4c:function(t,e,n){},fb6a:function(t,e,n){"use strict";n("377a")},fbd9:function(t,e,n){"use strict";n("78a9")}});
//# sourceMappingURL=app.c5216558.js.map