(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1893],{16034:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creatorprofile",function(){return i(67788)}])},67788:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return b}});var r=i(85893),n=i(52135),s=i(67294),o=i(38196),l=i(11163),a=i(9008),c=i.n(a),d=i(17563),u=i(40103),h=i(99030),x=i(31763),f=i(86554),m=i(74287),j=i(79934),g=i(85476),v=i(81760),p=i(98378),y=i(97520);let w={root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white"},copyContainer:{border:"1px solid blue",background:"rgb(0,0,0,0.7)"},title:{textAlign:"center",color:"white",fontStyle:"italic"}};function b(){var e,t;let i=(0,l.useRouter)(),{address:a}=i.query;if(!a){let b=i.asPath;a=d.parseUrl(b).query.address}let[S,k]=(0,s.useState)(""),[Z,C]=(0,s.useState)(!1),[_,z]=(0,s.useState)(!0),E=(null===(e=(0,y.eI)())||void 0===e?void 0:e.width)<(null===(t=(0,y.eI)())||void 0===t?void 0:t.height);(0,s.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await n.Z.refresh()),C(n.Z.validateCurrentUserRefreshToken()&&n.Z.validateCurrentUserAccessToken())}()},[]),(0,s.useEffect)(()=>{k(n.Z.getUsername())},[Z]);let[N,F]=(0,s.useState)({username:"",fname:"",lname:"",bio:"",iscreator:!0,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});return(0,s.useEffect)(()=>{(async function(){if(""!=a){let e=await (0,o.is)(null==a?void 0:a.toString());e[0]&&"string"!=typeof e?F(e[0]):z(!1)}})()},[a]),console.log(_),(0,r.jsxs)("div",{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:N?(null==N?void 0:N.fname)+" "+(null==N?void 0:N.lname):"Profile"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("div",{children:Z&&S?(0,r.jsx)("div",{className:E?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{fontSize:25},children:_?(0,r.jsx)(r.Fragment,{children:(null==N?void 0:N.username)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{creator:N}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{className:"creatorImageDiv",children:(0,r.jsx)(f.Z,{creator:N.username,height:125,width:125})}),E?(0,r.jsx)("div",{className:"description",children:(0,r.jsx)("div",{style:{minWidth:"25vw",justifyContent:"center"}})}):(0,r.jsx)("div",{className:"description",children:(0,r.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,r.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:N.username}),(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:N.fname+" "+N.lname}),""!=N.bio?(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:N.bio}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(x.Z,{creator:N})]})}),(0,r.jsx)(v.Z,{modalButtonText:(0,r.jsx)(j.Z,{title:"Share Kigzag",children:(0,r.jsx)(m.Z,{className:"pointer",style:{fontSize:"30px",color:"lightgrey"}})}),modalBody:(0,r.jsx)(g.Z,{title:"Share "+N.fname+"'s Kigzag",url:"crezalo.com/@"+N.username,socialTypes:["whatsapp","telegram","twitter","linkedin","facebook","reddit"],onSocialButtonClicked:e=>console.log(e),style:w}),formatting:!0})]}),E?(0,r.jsx)("div",{className:"descriptionMobile",children:(0,r.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,r.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:N.username}),(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:N.fname+" "+N.lname}),""!=N.bio?(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:N.bio}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(x.Z,{creator:N}),(0,r.jsx)("br",{})]})}):(0,r.jsx)(r.Fragment,{}),E?(0,r.jsx)(p.Z,{onCreatorProfile:!0,creator:N.username,isCreator:!0}):(0,r.jsx)(u.Z,{onCreatorProfile:!0,creator:N.username,isCreator:!0})]}):(0,r.jsx)(r.Fragment,{})}):(0,r.jsxs)("div",{style:{textAlign:"center",marginTop:"15vh"},children:["\uD83D\uDE14 ",a," not found"]})}):(0,r.jsx)(r.Fragment,{})})]})}}},function(e){e.O(0,[6319,7642,9565,3461,1762,9418,7053,4054,6374,9794,9774,2888,179],function(){return e(e.s=16034)}),_N_E=e.O()}]);