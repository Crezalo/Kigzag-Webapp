(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8955],{2709:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/videoplayer",function(){return r(48786)}])},48786:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return p}});var t=r(85893),i=r(67294),n=r(65550),s=r(11163),l=r.n(s),a=r(17563),c=r(9008),d=r.n(c),u=r(52135),h=r(44054),v=r(86554),f=r(95366),g=r(5715),y=r(97520),m=r(70754);function p(){let e=(0,s.useRouter)(),{videoid:o}=e.query;if(!o){let r=e.asPath;o=a.parseUrl(r).query.videoid}var c,p,x,j,[w,S]=(0,i.useState)("");let[N,_]=(0,i.useState)(!1),[k,D]=(0,i.useState)(""),[E,P]=(0,i.useState)(!1),V=(0,i.useRef)(null),Z=(null===(x=(0,y.eI)())||void 0===x?void 0:x.width)<(null===(j=(0,y.eI)())||void 0===j?void 0:j.height);(0,i.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await u.Z.refresh()),_(u.Z.validateCurrentUserRefreshToken()&&u.Z.validateCurrentUserAccessToken())}()},[]),(0,i.useEffect)(()=>{D(u.Z.getUsername())},[N]);let[C,F]=(0,i.useState)({title:"",description:"",creator:"",seriesid:"",type:-1,createdat:"",chronology:-1}),M=(c=Date.now(),(p=c-Date.parse(null==C?void 0:C.createdat))<6e4?Math.round(p/1e3)+" seconds ago":p<36e5?Math.round(p/6e4)+" minutes ago":p<864e5?Math.round(p/36e5)+" hours ago":p<2592e6?Math.round(p/864e5)+" days ago":p<31536e6?Math.round(p/2592e6)+" months ago":Math.round(p/31536e6)+" years ago");return(0,i.useEffect)(()=>{(async function(){if(o){let e=await (0,f.ZU)(o.toString());console.log("result"),console.log(e),"string"!=typeof e&&e&&P(e)}})()},[k,o]),(0,i.useEffect)(()=>{(async function(){if(o){let e=await (0,n.kS)(o.toString());F(e[0])}})()},[o]),(0,i.useEffect)(()=>{(async function(){if(o){var e,r,t;let i=await (0,n.sv)(o.toString());S(i[0].signedurl),null===(e=V.current)||void 0===e||e.pause(),null===(r=V.current)||void 0===r||r.load(),null===(t=V.current)||void 0===t||t.play()}})()},[o]),console.log("videoDetails"),console.log(C),console.log("signedURl"),console.log(w),(0,t.jsxs)("div",{children:[(0,t.jsxs)(d(),{children:[(0,t.jsxs)("title",{children:[(null==C?void 0:C.chronology)>0?(null==C?void 0:C.chronology)+". ":"",null==C?void 0:C.title]}),(0,t.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,t.jsx)("div",{className:"videoDiv",style:{backgroundColor:"black"},children:N&&w?(0,t.jsxs)(t.Fragment,{children:[E?(0,t.jsxs)(t.Fragment,{children:[(null==C?void 0:C.type)==0?(0,t.jsx)("video",{controls:!0,autoPlay:!0,crossOrigin:"anonymous",controlsList:"nodownload",ref:V,style:{height:Z?"60vw":"80vh",width:"90vw"},children:(0,t.jsx)("source",{src:w,type:"video/mp4"})}):(0,t.jsx)(g.ZP,{documents:[{uri:w.replace(".mp4",".pdf")}],theme:{primary:"#5296d8",secondary:"#ffffff",tertiary:"#5296d899",textPrimary:"#ffffff",textSecondary:"#5296d8",textTertiary:"#00000099",disableThemeScrollbar:!1},pluginRenderers:g.lX,style:{height:Z?"80vh":"90vh",width:"100vw"}}),(0,t.jsxs)("h1",{className:"videoDiv h1",children:[(null==C?void 0:C.chronology)>0?(null==C?void 0:C.chronology)+". ":"",null==C?void 0:C.title]}),(0,t.jsxs)("section",{onClick(){l().push({pathname:"/creatorprofile",query:{address:null==C?void 0:C.creator}})},className:"creatorIdent pointer",children:[(0,t.jsx)("div",{className:"creatorImageMinor",children:(0,t.jsx)(v.Z,{creator:null==C?void 0:C.creator,height:50,width:50})}),(0,t.jsx)("h2",{className:"VideoDiv h2",children:null==C?void 0:C.creator})]}),(0,t.jsx)("h1",{className:"VideoDiv h1",style:{fontSize:"13px",color:"grey"},children:M.startsWith("1 ")?M.replace("s","").replace("econd","second"):M}),(0,t.jsx)("h1",{className:"VideoDiv p",children:null==C?void 0:C.description})]}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)("div",{style:{marginTop:"5vh"},children:(null==C?void 0:C.seriesid)==="vod_"+(null==C?void 0:C.creator)?(0,t.jsxs)(t.Fragment,{children:[E?(0,t.jsx)("h1",{className:"videoDiv h1",style:{color:"#3B82F6"},children:"Other Videos"}):(0,t.jsx)(t.Fragment,{}),(0,t.jsx)(h.Z,{creator:null==C?void 0:C.creator,onCreatorProfile:!1,category:"Videos",ignoreVideoId:o.toString(),onVideoPlayer:!0})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"videoDiv h1",style:{color:"#3B82F6"},children:"Other lectures from course"}),(0,t.jsx)(h.Z,{creator:null==C?void 0:C.creator,onCreatorProfile:!1,category:"SeriesVideoGrid",seriesid:null==C?void 0:C.seriesid,ignoreVideoId:o.toString(),onVideoPlayer:!0})]})})]}):(0,t.jsx)(m.Z,{style:{display:"flex",margin:"auto",height:"80vh"}})})]})}},14601:function(){},32767:function(){},28251:function(){},57677:function(){},87324:function(){}},function(e){e.O(0,[4824,1388,3461,186,2608,4054,9774,2888,179],function(){return e(e.s=2709)}),_N_E=e.O()}]);