(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{71889:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creators",function(){return s(19675)}])},86554:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var n=s(85893),r=s(67294),a=s(52135),c={src:"/_next/static/media/DummyProfile.cb181f25.jpg",height:225,width:225,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAACAQEJAAAAAAAAAAAAAAAAEhEBAgMEExQVMVFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKVTD3eztpbWbDOvvM9QAAP/2Q==",blurWidth:8,blurHeight:8},i=s(25675),o=s.n(i),A=s(42129);let l=e=>{let{creator:t,height:s,width:i}=e,[l,u]=(0,r.useState)(""),[d,h]=(0,r.useState)(!1),[f,g]=(0,r.useState)("");return(0,r.useEffect)(()=>{(async function(){console.log("AuthService.refresh()"),console.log(await a.Z.refresh()),h(a.Z.validateCurrentUserRefreshToken()&&a.Z.validateCurrentUserAccessToken())})()},[]),(0,r.useEffect)(()=>{u(a.Z.getUsername())},[d]),(0,r.useEffect)(()=>{(async function(){if(""!=l){let e=await (0,A.O)("profilepic",t);e[0]&&g(e[0].signedurl)}})()},[l]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o(),{src:f,alt:"",width:i,height:s,className:"creatorDP",onError(e){let{currentTarget:t}=e;t.onerror=null,t.src=c.src}})})};var u=l},19675:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return E}});var n=s(85893),r=s(67294),a=s(41120),c=s(41749),i=s(11163),o=s.n(i),A=s(86554);let l=e=>{let{creator:t}=e;return(0,n.jsx)(n.Fragment,{children:t.username?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("section",{className:"creatorCard pointer",onClick:()=>o().push({pathname:"/creatorprofile",query:{address:t.username}}),children:[(0,n.jsx)("div",{className:"creatorCardImage",children:(0,n.jsx)(A.Z,{creator:t.username,height:125,width:125})}),(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)("h2",{style:{marginBottom:"5px",fontWeight:"bold"},children:t.username}),(0,n.jsx)("h2",{style:{fontSize:"16px",fontWeight:"bold"},children:t.fname+" "+t.lname})]})]})}):(0,n.jsx)(n.Fragment,{})})},u=(0,a.Z)(e=>({paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}})),d=e=>{let{creator:t,classes:s}=e;return(0,n.jsx)(c.Z,{item:!0,xs:12,sm:6,md:3,children:(0,n.jsx)(l,{creator:t})})},h=e=>{let{creatorsList:t}=e,s=u();return(0,n.jsx)("div",{className:"blueTextBlackBackground",children:(0,n.jsx)(c.Z,{container:!0,spacing:1,children:null==t?void 0:t.map(e=>(0,n.jsx)(d,{creator:e,classes:s},e.username))})})};var f=s(52135),g=s(9008),m=s.n(g),x=s(38196),j=s(97650);function E(){let[e,t]=(0,r.useState)(!1),[s,a]=(0,r.useState)(""),[c,i]=(0,r.useState)(0);(0,r.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await f.Z.refresh()),t(f.Z.validateCurrentUserRefreshToken()&&f.Z.validateCurrentUserAccessToken())}()},[]),(0,r.useEffect)(()=>{a(f.Z.getUsername())},[e]);let[o,A]=(0,r.useState)([{username:"",fname:"",lname:"",displaypicture:"",bio:""}]);(0,r.useEffect)(()=>{!async function(){let e=await (0,x.W_)(c);console.log(e),A(e)}()},[s]);let l=e=>{!async function(){let t;console.log(t=""!=e?await (0,x.gK)(e):await (0,x.W_)(c)),A(t)}()},[u,d]=(0,r.useState)([{username:"",fname:"",lname:"",displaypicture:"",bio:""}]),g=(e,t)=>{l(e),console.log(e,t)},E=e=>{console.log(e)},p=e=>{console.log(e)},v=()=>{console.log("Focused")},w=e=>(0,n.jsx)(n.Fragment,{});return(0,n.jsxs)("div",{children:[(0,n.jsxs)(m(),{children:[(0,n.jsx)("title",{children:"Kigzag: Creators"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{children:""!=s&&e?(0,n.jsxs)("div",{className:"blueTextBlackBackground",style:{justifyContent:"center",fontSize:25},children:[(0,n.jsx)("div",{style:{width:400,zIndex:-1},children:(0,n.jsx)(j.R,{items:u,onSearch:g,onHover:E,onSelect:p,onFocus:v,autoFocus:!0,formatResult:w})}),(0,n.jsx)("div",{style:{marginTop:25,marginLeft:0},children:(0,n.jsx)(h,{creatorsList:o})})]}):(0,n.jsx)(n.Fragment,{})})]})}},42129:function(e,t,s){"use strict";s.d(t,{O:function(){return c}});var n=s(9669),r=s.n(n),a=s(76095);async function c(e,t){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let s=await r().get("http://localhost:5000/content/creator_info/"+e+"/"+t,{headers:(0,a.z)()});if(s.data.isSuccessful)return s.data.result;return s.data.errorMsg}}catch(n){console.log(n)}}}},function(e){e.O(0,[14,774,888,179],function(){return e(e.s=71889)}),_N_E=e.O()}]);