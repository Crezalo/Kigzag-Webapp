(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[422],{6236:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/becomeacreator",function(){return a(97073)}])},72535:function(e,t){"use strict";t.Z={src:"/_next/static/media/DummyBanner.9a2c247a.jpg",height:225,width:800,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAQ4H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ap89AB//Z",blurWidth:8,blurHeight:2}},37878:function(e,t){"use strict";t.Z={src:"/_next/static/media/green-tick.c86f07ad.gif",height:498,width:494}},93225:function(e,t){"use strict";t.Z={src:"/_next/static/media/uploading.80a35203.gif",height:256,width:256}},22493:function(e,t,a){"use strict";var n=a(85893),i=a(9669),r=a.n(i),l=a(67294),o=a(76095),s=a(25675),d=a.n(s),c=a(93225),u=a(37878),h=a(37497),m=a(13056),f=a.n(m);let p={autoPlay:!0,animation:"fade",indicators:!1,duration:500,navButtonsAlwaysVisible:!0,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!1},g=()=>{let[e,t]=(0,l.useState)(null),[a,i]=(0,l.useState)(null),[s,m]=(0,l.useState)(0),[g,x]=(0,l.useState)("NO FILE ADDED"),[A,y]=(0,l.useState)(p),b=e=>window.URL.createObjectURL(e),j=async t=>{t.preventDefault();try{if((0,o.z)().Authorization){let n=new FormData;n.append("profilepic",e[0]);for(let i=0;i<a.length;i++)n.append("otherimages",a[i]);x("UPLOADING");let l=await r().post(h.uy+"content/creator_info/upload",n,{headers:{"Content-Type":"multipart/form-data",Authorization:(0,o.z)().Authorization}});l.data.isSuccessful?(x("COMPLETE"),console.log(l.data.result)):(x("Failed To Upload Retry!"),console.log(l.data.errorMsg))}else x("Failed To Upload Retry!"),console.log("User Not Logged In")}catch(s){x("Failed To Upload Retry!"),console.log(s)}};return(0,n.jsxs)("div",{style:{overflowY:"auto",overflowX:"hidden",maxHeight:"80vh",backgroundColor:"#3b82f6",padding:"5px",borderRadius:"1%"},children:["Failed To Upload Retry!"===g?(0,n.jsx)("p",{style:{color:"red"},children:g}):(0,n.jsx)(n.Fragment,{}),"COMPLETE"!==g&&"UPLOADING"!==g?(0,n.jsxs)("form",{onSubmit:j,className:"form",children:[(0,n.jsx)("label",{className:"form label",style:{fontWeight:"100"},children:"Upload Profile Picture"}),(0,n.jsx)("input",{type:"file",onChange(e){t(e.target.files)},required:!0,className:"form inputFile",accept:"image/*"}),e?(0,n.jsx)("div",{style:{margin:"10px",width:"100%",height:"100%"},children:(0,n.jsx)(d(),{id:"thumb_image",src:b(e[0]),width:"350",height:"220",alt:""})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("label",{className:"form label",style:{fontWeight:"100"},children:"Upload Banner Images"}),(0,n.jsx)("input",{type:"file",onChange(e){i(e.target.files),m(e.target.files.length)},required:!0,className:"form inputFile",accept:"image/*",multiple:!0}),s>0?(0,n.jsx)(f(),{...A,navButtonsProps:{style:{backgroundColor:"cornflowerblue",borderRadius:5}},children:Array.from(a).map((e,t)=>(0,n.jsx)("img",{src:b(e),alt:"Loading ...",width:"100%",height:"100%",onError:()=>m(t)}))}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("button",{type:"submit",className:"outline outline-offset-0 px-2 py-2 rounded buyButton",style:{width:"10vw"},children:"Upload"})]}):(0,n.jsx)(n.Fragment,{children:"UPLOADING"===g?(0,n.jsx)("div",{children:(0,n.jsx)(d(),{src:c.Z,alt:"",width:200,height:200})}):(0,n.jsx)("div",{children:(0,n.jsx)(d(),{src:u.Z,alt:"",width:200,height:200})})})]})};t.Z=g},25797:function(e,t){"use strict";t.Z=["Bank of Baroda","Bank of India","Bank of Maharashtra","Canara Bank","Central Bank of India","Indian Bank","Indian Overseas Bank","Punjab & Sind Bank","Punjab National Bank","State Bank of India","UCO Bank","Union Bank of India","Axis Bank Ltd.","Bandhan Bank Ltd.","CSB Bank Ltd.","City Union Bank Ltd.","DCB Bank Ltd.","Dhanlaxmi Bank Ltd.","Federal Bank Ltd.","HDFC Bank Ltd","ICICI Bank Ltd.","Induslnd Bank Ltd","IDFC First Bank Ltd.","Jammu & Kashmir Bank Ltd.","Karnataka Bank Ltd.","Karur Vysya Bank Ltd.","Kotak Mahindra Bank Ltd","Nainital Bank Ltd.","RBL Bank Ltd.","South Indian Bank Ltd.","Tamilnad Mercantile Bank Ltd.","YES Bank Ltd.","IDBI Bank Ltd.","Au Small Finance Bank Limited","Capital Small Finance Bank Limited","Equitas Small Finance Bank Limited","Suryoday Small Finance Bank Limited","Ujjivan Small Finance Bank Limited","Utkarsh Small Finance Bank Limited","ESAF Small Finance Bank Limited","Fincare Small Finance Bank Limited","Jana Small Finance Bank Limited","North East Small Finance Bank Limited","Shivalik Small Finance Bank Limited"]},97073:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var n=a(85893),i=a(67294),r=a(41120),l=a(83559),o=a(55006),s=a(72535),d=a(9008),c=a.n(d),u=a(52135),h=a(38196),m=a(50450),f=a(94964),p=a(81760),g=a(42129),x=a(13056),A=a.n(x),y=a(22493),b=a(86554),j=a(9669),w=a.n(j),v=a(76095),B=a(25675),L=a.n(B),k=a(93225),C={src:"/_next/static/media/celebrations.7da48b27.gif",height:400,width:400},S=a(37497),N=a(25797),z=a(33057),I=a(40477);let F=()=>{var e;let[t,a]=(0,i.useState)(null),[r,l]=(0,i.useState)("NO FILE ADDED"),o=async e=>{e.preventDefault();try{if((0,v.z)().Authorization){let a=new FormData;a.append("pancard",t[0]),l("UPLOADING");let n=await w().post(S.uy+"content/creator_info/upload",a,{headers:{"Content-Type":"multipart/form-data",Authorization:(0,v.z)().Authorization}}),i=await (0,z.Ur)(e.target.aadharnumber.value,e.target.pannumber.value,e.target.bank_name.value,e.target.ifsccode.value,e.target.aacnumber.value);console.log(i);let r=await (0,h.Al)("","","","","",!0,"","","","","");console.log(r);let o=await (0,I.WR)();console.log(o),n.data.isSuccessful&&"string"!=typeof i[0]&&"string"!=typeof r&&"string"!=typeof o?(l("COMPLETE"),console.log(n.data.result)):(l("Failed To Upload Retry!"),console.log(n.data.errorMsg))}else l("Failed To Upload Retry!"),console.log("User Not Logged In")}catch(s){l("Failed To Upload Retry!"),console.log(s)}};return(0,n.jsxs)("div",{style:{overflowY:"auto",overflowX:"hidden",maxHeight:"80vh",backgroundColor:"#3b82f6",padding:"5px",borderRadius:"1%"},children:["Failed To Upload Retry!"===r?(0,n.jsx)("p",{style:{color:"red"},children:r}):(0,n.jsx)(n.Fragment,{}),"COMPLETE"!==r&&"UPLOADING"!==r?(0,n.jsxs)("form",{onSubmit:o,className:"form",children:[(0,n.jsx)("label",{className:"form label",children:"KYC Verification"}),(0,n.jsx)("label",{className:"form label",style:{fontSize:"medium"},children:"Upload Pan Card Image"}),(0,n.jsx)("input",{type:"file",onChange(e){a(e.target.files)},accept:"image/*",required:!0,className:"form inputFile"}),t?(0,n.jsx)("div",{style:{margin:"10px",width:"100%",height:"100%"},children:(0,n.jsx)(L(),{id:"thumb_image",src:(e=t[0],window.URL.createObjectURL(e)),width:"350",height:"220",alt:""})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsxs)("div",{style:{justifyContent:"center",flexDirection:"column",display:"flex"},children:[(0,n.jsx)("label",{children:"Pan Number"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"pannumber",name:"pannumber",minLength:10,maxLength:10,placeholder:"ABCTY1234D",style:{color:"black",resize:"both",width:"10vw",overflow:"none"},required:!0}),(0,n.jsx)("label",{children:"Aadhar Number"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"aadharnumber",name:"aadharnumber",minLength:12,maxLength:12,placeholder:"000000000000",onChange(e){e.target.value=e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1")},style:{color:"black",resize:"both",width:"10vw",overflow:"none"},required:!0}),(0,n.jsx)("label",{className:"form label",children:"Bank Details"}),(0,n.jsxs)("label",{children:["*You can change banking details in future.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsx)("label",{children:"Bank Name"}),(0,n.jsx)("select",{id:"bank_name",name:"bank_name",className:"mb-4 border-b-2 form inputSingleLineText",style:{color:"black",resize:"both",width:"20vw",overflow:"none"},required:!0,children:N.Z.map(e=>(0,n.jsx)("option",{value:e,children:e}))}),(0,n.jsx)("label",{children:"IFSC Code"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"ifsccode",name:"ifsccode",minLength:11,maxLength:11,placeholder:"ABCD0000000",style:{color:"black",resize:"both",width:"10vw",overflow:"none"},required:!0}),(0,n.jsx)("label",{children:"Account Number"}),(0,n.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"aacnumber",name:"aacnumber",minLength:18,maxLength:18,placeholder:"000000000000000000",onChange(e){e.target.value=e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1")},style:{color:"black",resize:"both",width:"15vw",overflow:"none"},required:!0})]}),(0,n.jsx)("button",{type:"submit",className:"outline outline-offset-0 px-2 py-2 rounded buyButton",children:"Become A Creator"})]}):(0,n.jsx)(n.Fragment,{children:"UPLOADING"===r?(0,n.jsx)("div",{children:(0,n.jsx)(L(),{src:k.Z,alt:"",width:200,height:200})}):(0,n.jsx)("div",{children:(0,n.jsx)(L(),{src:C,alt:"",width:200,height:200})})})]})},D=(0,r.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",width:"50%",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(0,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{width:"80%",margin:"10px 0 10px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"#3b82f6"}}}}));(0,l.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});let _={autoPlay:!0,animation:"fade",indicators:!1,duration:500,navButtonsAlwaysVisible:!0,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!1};function E(){let e=D(),[t,a]=(0,i.useState)(""),[r,l]=(0,i.useState)(!1),[d,x]=(0,i.useState)(""),[j,w]=(0,i.useState)("");var[v,B]=(0,i.useState)([]),[L,k]=(0,i.useState)(-1);let[C,S]=(0,i.useState)(_),[N,z]=(0,i.useState)(""),[I,E]=(0,i.useState)(""),[P,O]=(0,i.useState)(""),[U,T]=(0,i.useState)(""),[Z,R]=(0,i.useState)(""),[M,H]=(0,i.useState)(""),[V,Q]=(0,i.useState)(""),[Y,q]=(0,i.useState)(""),[K,W]=(0,i.useState)(""),[G,J]=(0,i.useState)(!1);(0,i.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await u.Z.refresh()),l(u.Z.validateCurrentUserRefreshToken()&&u.Z.validateCurrentUserAccessToken())}()},[]),(0,i.useEffect)(()=>{a(u.Z.getUsername())},[r]);let[X,$]=(0,i.useState)({emailaddress:"",signuptype:1,username:"",fname:"",lname:"",bio:"",iscreator:null,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});function ee(){if((null==v?void 0:v.length)>0){for(let e=0;e<v.length;e++){var t=new XMLHttpRequest;t.open("HEAD",v[e]),t.onreadystatechange=function(){this.readyState==this.DONE&&403==this.status&&-1==L&&k(e)},t.send()}return -1!=L&&(v.length=L),!0}return!1}(0,i.useEffect)(()=>{(async function(){if(""!=t){let e=await (0,h.is)(t);$(e[0]);let a=await (0,g.O)("profilepic",t);"string"!=typeof a&&x(a[0].signedurl);let n=await (0,g.O)("oimages",t);"string"!=typeof n&&(B(n[0].signedurls),k(n[0].signedurls.length))}})()},[t]),ee();let et=async()=>{let e=await (0,h.Al)(N,"",I,P,U,X.iscreator,Z,M,V,Y,K);console.log(e)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:"Kigzag: Become A Creator"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{children:r&&t&&(null==X?void 0:X.username)!=""?(0,n.jsx)("div",{className:"blueTextBlackBackground",style:{fontSize:"18px",display:"flex",flexDirection:"row"},children:X.iscreator?(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"You Are Already A Creator!!! Enjoy!!!"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{width:"50%",display:"flex",flexDirection:"column",padding:"50px",justifyContent:"center"},children:[(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,n.jsx)("div",{style:{},children:ee()?(0,n.jsx)(A(),{className:"editPageCarousel",...C,navButtonsProps:{style:{backgroundColor:"cornflowerblue",borderRadius:5}},children:Array.from(v).map((e,t)=>(0,n.jsx)("img",{src:e,alt:"Loading ...",width:"100%",height:"100%",onError(e){let{currentTarget:a}=e;k(t),a.onerror=null,a.src=s.Z.src}}))}):(0,n.jsx)(n.Fragment,{})}),(0,n.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,n.jsxs)("div",{className:"creatorImageDiv",style:{justifyContent:"center",width:"30%",display:"table",position:"relative"},children:[(0,n.jsx)(b.Z,{creator:null==X?void 0:X.username,height:250,width:250}),(0,n.jsx)("div",{className:"bottom-right",children:(0,n.jsx)(p.Z,{modalButtonText:(0,n.jsx)(f.Z,{}),modalBody:(0,n.jsx)(y.Z,{})})})]})})]}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[(0,n.jsxs)("div",{style:{justifyContent:"center",marginRight:"10px"},children:[(0,n.jsx)(m.__,{style:{margin:"10px"},children:"First Name"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"First Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:X.fname,inputProps:{style:{color:"white"}},onChange(e){E(e.target.value)}})]}),(0,n.jsxs)("div",{style:{justifyContent:"center",marginLeft:"10px"},children:[(0,n.jsx)(m.__,{style:{margin:"10px"},children:"Last Name"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"Last Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:X.lname,inputProps:{style:{color:"white"}},onChange(e){O(e.target.value)}})]})]}),(0,n.jsx)("div",{style:{marginTop:"50px",justifyContent:"center"},children:(0,n.jsx)(p.Z,{modalButtonText:"Become A Creator",modalBody:(0,n.jsx)(F,{}),onClickFunction:et})})]}),(0,n.jsxs)("div",{className:e.paper,children:[(0,n.jsx)(m.__,{style:{margin:"10px 0 0 10px"},children:"Bio"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"Bio Here ...",type:"text",multiline:!0,rows:3,inputProps:{style:{color:"white"}},InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:X.bio,onChange(e){T(e.target.value)}}),(0,n.jsx)(m.__,{style:{margin:"10px 0 0 10px"},children:"Twitter"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"@YourTwitterHandle",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:X.twitterhandle,onChange(e){H(e.target.value)}}),(0,n.jsx)(m.__,{style:{margin:"10px 0 0 10px"},children:"Instagram"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"@YourInstagramUsername",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:X.instagram,onChange(e){Q(e.target.value)}}),(0,n.jsx)(m.__,{style:{margin:"10px 0 0 10px"},children:"Youtube Channel"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"https://www.youtube.com/c/channelid",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:X.youtube,onChange(e){q(e.target.value)}}),(0,n.jsx)(m.__,{style:{margin:"10px 0 0 10px"},children:"Website"}),(0,n.jsx)(o.Z,{className:e.textfield,placeholder:"https://www.mywebsite.com/",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:X.youtube,onChange(e){W(e.target.value)}})]})]})}):(0,n.jsx)("div",{})})]})}},40477:function(e,t,a){"use strict";a.d(t,{JP:function(){return s},WR:function(){return o},ad:function(){return d}});var n=a(9669),i=a.n(n),r=a(76095);let l="http://crezalo.com/api/";async function o(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().post(l+"features",{},{headers:(0,r.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function s(e){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let t=await i().get(l+"features/"+e,{headers:(0,r.z)()});if(console.log(l+"fininfo"),t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(a){console.log(a)}}async function d(e,t,a,n){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let o=await i().put(l+"features",{video_on_demand:e,courses:t,merchandise:a,tipjar:n},{headers:(0,r.z)()});if(o.data.isSuccessful)return o.data.result;return o.data.errorMsg}}catch(s){console.log(s)}}},33057:function(e,t,a){"use strict";a.d(t,{Ur:function(){return o},V7:function(){return s},u3:function(){return d}});var n=a(9669),i=a.n(n),r=a(76095);let l="http://crezalo.com/api/";async function o(e,t,a,n,o){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let s=await i().post(l+"fininfo",{aadharnumber:e,pannumber:t,bank_name:a,ifsc_code:n,acc_number:o},{headers:(0,r.z)()});if(s.data.isSuccessful)return s.data.result;return s.data.errorMsg}}catch(d){console.log(d)}}async function s(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().get(l+"fininfo/alldetails",{headers:(0,r.z)()});if(console.log(l+"fininfo"),e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function d(e,t,a){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let n=await i().put(l+"FinInfo",{bank_name:e,ifsc_code:t,acc_number:a},{headers:(0,r.z)()});if(n.data.isSuccessful)return n.data.result;return n.data.errorMsg}}catch(o){console.log(o)}}}},function(e){e.O(0,[319,260,565,972,774,888,179],function(){return e(e.s=6236)}),_N_E=e.O()}]);