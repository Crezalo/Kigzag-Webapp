(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1893],{16034:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creatorprofile",function(){return i(67788)}])},67788:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Z}});var r=i(85893),n=i(52135),s=i(25675),o=i.n(s),l=i(67294),a=i(38196),c=i(11163),d=i(9008),u=i.n(d),h=i(17563),x=i(40103),f=i(99030),m=i(31763),g=i(86554),j=i(74287),v=i(79934),p=i(85476),y=i(81760),w=i(98378),b=i(97520),S=i(50717);let k={root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white"},copyContainer:{border:"1px solid blue",background:"rgb(0,0,0,0.7)"},title:{textAlign:"center",color:"white",fontStyle:"italic"}};function Z(){var e,t;let i=(0,c.useRouter)(),{address:s}=i.query;if(!s){let d=i.asPath;s=h.parseUrl(d).query.address}let[Z,C]=(0,l.useState)(""),[_,z]=(0,l.useState)(!1),[E,N]=(0,l.useState)(!0),T=(null===(e=(0,b.eI)())||void 0===e?void 0:e.width)<(null===(t=(0,b.eI)())||void 0===t?void 0:t.height);(0,l.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await n.Z.refresh()),z(n.Z.validateCurrentUserRefreshToken()&&n.Z.validateCurrentUserAccessToken())}()},[]),(0,l.useEffect)(()=>{C(n.Z.getUsername())},[_]);let[B,F]=(0,l.useState)({username:"",fname:"",lname:"",bio:"",iscreator:!0,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});return(0,l.useEffect)(()=>{(async function(){if(""!=s){let e=await (0,a.is)(null==s?void 0:s.toString());e[0]&&"string"!=typeof e?F(e[0]):N(!1)}})()},[s]),console.log(E),(0,r.jsxs)("div",{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:B?(null==B?void 0:B.fname)+" "+(null==B?void 0:B.lname):"Profile"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("div",{style:{backgroundColor:"black"},children:_&&Z?(0,r.jsx)("div",{className:T?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{fontSize:25},children:E?(0,r.jsx)(r.Fragment,{children:(null==B?void 0:B.username)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{creator:B}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{className:"creatorImageDiv",children:(0,r.jsx)(g.Z,{creator:B.username,height:125,width:125})}),T?(0,r.jsx)("div",{className:"description",children:(0,r.jsx)("div",{style:{minWidth:"25vw",justifyContent:"center"}})}):(0,r.jsx)("div",{className:"description",children:(0,r.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,r.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:B.username}),(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:B.fname+" "+B.lname}),""!=B.bio?(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:B.bio}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(m.Z,{creator:B})]})}),(0,r.jsx)(y.Z,{modalButtonText:(0,r.jsx)(v.Z,{title:"Share Kigzag",children:(0,r.jsx)(j.Z,{className:"pointer",style:{fontSize:"30px",color:"lightgrey"}})}),modalBody:(0,r.jsx)(p.Z,{title:"Share "+B.fname+"'s Kigzag",url:"crezalo.com/@"+B.username,socialTypes:["whatsapp","telegram","twitter","linkedin","facebook","reddit"],onSocialButtonClicked:e=>console.log(e),style:k}),formatting:!0})]}),T?(0,r.jsx)("div",{className:"descriptionMobile",children:(0,r.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,r.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:B.username}),(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:B.fname+" "+B.lname}),""!=B.bio?(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:B.bio}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(m.Z,{creator:B}),(0,r.jsx)("br",{})]})}):(0,r.jsx)(r.Fragment,{}),T?(0,r.jsx)(w.Z,{onCreatorProfile:!0,creator:B.username,isCreator:!0}):(0,r.jsx)(x.Z,{onCreatorProfile:!0,creator:B.username,isCreator:!0})]}):(0,r.jsx)(r.Fragment,{})}):(0,r.jsxs)("div",{style:{textAlign:"center",marginTop:"15vh"},children:["\uD83D\uDE14 ",s," not found"]})}):(0,r.jsx)(o(),{src:S.Z,height:"150",width:"150",alt:"",style:{marginTop:"30vh",marginLeft:"45vw"}})})]})}}},function(e){e.O(0,[6319,7642,9565,3461,1762,9418,7053,4037,6374,9794,9774,2888,179],function(){return e(e.s=16034)}),_N_E=e.O()}]);