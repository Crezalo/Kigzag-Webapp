(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1242],{10265:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editprofile",function(){return i(62164)}])},72535:function(e,t){"use strict";t.Z={src:"/_next/static/media/DummyBanner.9a2c247a.jpg",height:225,width:800,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAQ4H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ap89AB//Z",blurWidth:8,blurHeight:2}},93225:function(e,t){"use strict";t.Z={src:"/_next/static/media/uploading.80a35203.gif",height:256,width:256}},22493:function(e,t,i){"use strict";var l=i(85893),a=i(9669),s=i.n(a),r=i(67294),n=i(76095),o=i(25675),d=i.n(o),u=i(93225),c=i(37878),p=i(37497),h=i(13056),x=i.n(h),f=i(97520);let g={autoPlay:!0,animation:"fade",indicators:!1,duration:500,navButtonsAlwaysVisible:!0,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!1},m=()=>{var e,t;let[i,a]=(0,r.useState)(null),[o,h]=(0,r.useState)(null),[m,A]=(0,r.useState)(0),[y,w]=(0,r.useState)("NO FILE ADDED"),[b,v]=(0,r.useState)(g),j=(null===(e=(0,f.eI)())||void 0===e?void 0:e.width)<(null===(t=(0,f.eI)())||void 0===t?void 0:t.height),C=e=>window.URL.createObjectURL(e),N=async e=>{e.preventDefault();try{if((0,n.z)().Authorization){let t=new FormData;t.append("profilepic",i[0]);for(let l=0;l<o.length;l++)t.append("otherimages",o[l]);w("UPLOADING");let a=await s().post(p.uy+"content/creator_info/upload",t,{headers:{"Content-Type":"multipart/form-data",Authorization:(0,n.z)().Authorization}});a.data.isSuccessful?(w("COMPLETE"),console.log(a.data.result)):(w("Failed To Upload Retry!"),console.log(a.data.errorMsg))}else w("Failed To Upload Retry!"),console.log("User Not Logged In")}catch(r){w("Failed To Upload Retry!"),console.log(r)}};return(0,l.jsxs)("div",{style:{overflowY:"auto",overflowX:"hidden",maxHeight:"80vh",backgroundColor:"#3b82f6",padding:"5px",borderRadius:"1%"},children:["Failed To Upload Retry!"===y?(0,l.jsx)("p",{style:{color:"red"},children:y}):(0,l.jsx)(l.Fragment,{}),"COMPLETE"!==y&&"UPLOADING"!==y?(0,l.jsxs)("form",{onSubmit:N,className:"form",children:[(0,l.jsx)("label",{className:"form label",style:{fontWeight:"100"},children:"Upload Profile Picture"}),(0,l.jsx)("input",{type:"file",onChange(e){a(e.target.files)},required:!0,className:"form inputFile",accept:"image/*"}),i?(0,l.jsx)("div",{style:{margin:"10px",width:"100%",height:"100%"},children:(0,l.jsx)(d(),{id:"thumb_image",src:C(i[0]),width:"350",height:"220",alt:""})}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("label",{className:"form label",style:{fontWeight:"100"},children:"Upload Banner Images"}),(0,l.jsx)("input",{type:"file",onChange(e){h(e.target.files),A(e.target.files.length)},required:!0,className:"form inputFile",accept:"image/*",multiple:!0}),m>0?(0,l.jsx)(x(),{...b,navButtonsProps:{style:{backgroundColor:"cornflowerblue",borderRadius:5}},children:Array.from(o).map((e,t)=>(0,l.jsx)("img",{src:C(e),alt:"Loading ...",width:"100%",height:"100%",onError:()=>A(t)}))}):(0,l.jsx)(l.Fragment,{}),(0,l.jsx)("br",{}),(0,l.jsx)("button",{type:"submit",className:"outline outline-offset-0 px-2 py-2 rounded buyButton",style:{width:j?"50vw":"10vw"},children:"Upload"})]}):(0,l.jsx)(l.Fragment,{children:"UPLOADING"===y?(0,l.jsx)("div",{children:(0,l.jsx)(d(),{src:u.Z,alt:"",width:200,height:200})}):(0,l.jsx)("div",{children:(0,l.jsx)(d(),{src:c.Z,alt:"",width:200,height:200})})})]})};t.Z=m},62164:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return S}});var l=i(85893),a=i(67294),s=i(41120),r=i(83559),n=i(55006),o=i(282),d=i(95477),u=i(72535),c=i(9008),p=i.n(c),h=i(52135),x=i(38196),f=i(50450),g=i(94964),m=i(81760),A=i(42129),y=i(13056),w=i.n(y),b=i(22493),v=i(86554),j=i(97520);let C=(0,s.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",width:"50%",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(0,4,3)},paperMobile:{borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",margin:"0",padding:e.spacing(0,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",borderRadius:"5px",marginTop:"5px"},successful:{color:"green",fontSize:"16px",marginTop:"5px",borderRadius:"5px"},textfield:{width:"80%",margin:"10px 0 10px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"#3b82f6"}}},textfieldMobile:{width:"100%",margin:"10px 0 10px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"#3b82f6"}}}}));(0,r.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});let N={autoPlay:!0,animation:"fade",indicators:!1,duration:500,navButtonsAlwaysVisible:!0,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!1};function S(){let e=C(),[t,i]=(0,a.useState)(""),[s,r]=(0,a.useState)(!1),[c,y]=(0,a.useState)(""),[S,P]=(0,a.useState)("");var I,_,[B,E]=(0,a.useState)([]),[L,D]=(0,a.useState)(-1);let[k,z]=(0,a.useState)(N),[O,Z]=(0,a.useState)(""),[M,F]=(0,a.useState)("0"),[T,U]=(0,a.useState)("0"),[R,H]=(0,a.useState)("0"),[V,Q]=(0,a.useState)(""),[Y,W]=(0,a.useState)("0"),[X,q]=(0,a.useState)("0"),[G,J]=(0,a.useState)("0"),[K,$]=(0,a.useState)("0"),[ee,et]=(0,a.useState)(""),[ei,el]=(0,a.useState)(""),ea=(null===(I=(0,j.eI)())||void 0===I?void 0:I.width)<(null===(_=(0,j.eI)())||void 0===_?void 0:_.height);(0,a.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await h.Z.refresh()),r(h.Z.validateCurrentUserRefreshToken()&&h.Z.validateCurrentUserAccessToken())}()},[]),(0,a.useEffect)(()=>{i(h.Z.getUsername())},[s]);let[es,er]=(0,a.useState)({emailaddress:"",signuptype:1,username:"",fname:"",lname:"",bio:"",iscreator:null,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});(0,a.useEffect)(()=>{!async function(){if(""!=t){let e=await (0,x.is)(t);er(e[0]);let i=await (0,A.O)("profilepic",t);i[0]&&y(i[0].signedurl);let l=await (0,A.O)("oimages",t);l[0]&&"string"!=typeof l&&(E(l[0].signedurls),D(l[0].signedurls.length))}}()},[t]),function(){if((null==B?void 0:B.length)>0){for(let e=0;e<B.length;e++){var t=new XMLHttpRequest;t.open("HEAD",B[e]),t.onreadystatechange=function(){this.readyState==this.DONE&&403==this.status&&-1==L&&D(e)},t.send()}-1!=L&&(B.length=L)}}();let en=async()=>{el(""),et("");let e=await (0,x.Al)(O,M,T,R,V,Y,X,G,K);"string"!=typeof e?el("Successful"):et(e)};return(0,l.jsxs)("div",{children:[(0,l.jsxs)(p(),{children:[(0,l.jsx)("title",{children:"Crezalo: Edit Profile"}),(0,l.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,l.jsx)("div",{style:{backgroundColor:"black"},children:s&&t&&(null==es?void 0:es.username)!=""?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:ea?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{fontSize:"18px",display:"flex",flexDirection:ea?"column":"row"},children:[(0,l.jsxs)("div",{style:{width:ea?"100%":"50%",display:"flex",flexDirection:"column",padding:ea?"0":"50px"},children:[(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,l.jsx)("div",{style:{},children:(null==B?void 0:B.length)>0?(0,l.jsx)(w(),{className:"editPageCarousel",...k,navButtonsProps:{style:{backgroundColor:"cornflowerblue",borderRadius:5}},children:Array.from(B).map((e,t)=>(0,l.jsx)("img",{src:e,alt:"Loading ...",width:"100%",height:"100%",onError(e){let{currentTarget:i}=e;D(t),i.onerror=null,i.src=u.Z.src}}))}):(0,l.jsx)("div",{className:"editPageCarousel shimmer"})}),(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,l.jsxs)("div",{className:"creatorImageDiv",style:{justifyContent:"center",width:"30%",display:"table",position:"relative"},children:[(0,l.jsx)(v.Z,{creator:null==es?void 0:es.username,height:250,width:250}),(0,l.jsx)("div",{className:"bottom-right",children:(0,l.jsx)(m.Z,{modalButtonText:(0,l.jsx)(g.Z,{}),modalBody:(0,l.jsx)(b.Z,{})})})]})})]}),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:ea?"column":"row",justifyContent:"center"},children:[(0,l.jsxs)("div",{style:{justifyContent:"center",marginRight:ea?"0":"10px"},children:[(0,l.jsx)(f.__,{style:{margin:"10px"},children:"First Name"}),(0,l.jsx)(n.Z,{className:ea?e.textfieldMobile:e.textfield,placeholder:"First Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:es.fname,inputProps:{style:{color:"white"}},onChange(e){F(e.target.value)}})]}),(0,l.jsxs)("div",{style:{justifyContent:"center",marginLeft:ea?"0":"10px"},children:[(0,l.jsx)(f.__,{style:{margin:"10px"},children:"Last Name"}),(0,l.jsx)(n.Z,{className:ea?e.textfieldMobile:e.textfield,placeholder:"Last Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:es.lname,inputProps:{style:{color:"white"}},onChange(e){U(e.target.value)}})]})]}),ea?(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Bio"}),(0,l.jsx)(n.Z,{className:e.textfieldMobile,placeholder:"Bio Here ...",type:"text",multiline:!0,rows:3,inputProps:{style:{color:"white"}},InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:es.bio,onChange(e){H(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Twitter"}),(0,l.jsx)(n.Z,{className:e.textfieldMobile,placeholder:"@YourTwitterHandle",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.twitterhandle,onChange(e){W(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Instagram"}),(0,l.jsx)(n.Z,{className:e.textfieldMobile,placeholder:"@YourInstagramUsername",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.instagram,onChange(e){q(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Youtube Channel"}),(0,l.jsx)(n.Z,{className:e.textfieldMobile,placeholder:"https://www.youtube.com/c/channelid",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.youtube,onChange(e){J(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Website"}),(0,l.jsx)(n.Z,{className:e.textfieldMobile,placeholder:"https://www.mywebsite.com/",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.youtube,onChange(e){$(e.target.value)}})]}):(0,l.jsx)(l.Fragment,{}),(0,l.jsxs)("div",{style:{marginTop:"50px",justifyContent:"center"},children:[(0,l.jsx)(o.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px",width:"30%",justifyContent:"center"},className:e.button,variant:"contained",onClick(){en()},children:"SAVE"}),(0,l.jsx)("p",{className:e.error,children:ee}),(0,l.jsx)("p",{className:e.successful,children:ei})]})]}),ea?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)("div",{className:e.paper,children:[(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Bio"}),(0,l.jsx)(n.Z,{className:e.textfield,placeholder:"Bio Here ...",type:"text",multiline:!0,rows:3,inputProps:{style:{color:"white"}},InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:es.bio,onChange(e){H(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Twitter"}),(0,l.jsx)(n.Z,{className:e.textfield,placeholder:"@YourTwitterHandle",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.twitterhandle,onChange(e){W(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Instagram"}),(0,l.jsx)(n.Z,{className:e.textfield,placeholder:"@YourInstagramUsername",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.instagram,onChange(e){q(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Youtube Channel"}),(0,l.jsx)(n.Z,{className:e.textfield,placeholder:"https://www.youtube.com/c/channelid",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.youtube,onChange(e){J(e.target.value)}}),(0,l.jsx)(f.__,{style:{margin:"10px 0 0 10px"},children:"Website"}),(0,l.jsx)(n.Z,{className:e.textfield,placeholder:"https://www.mywebsite.com/",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:es.youtube,onChange(e){$(e.target.value)}})]})]}),(0,l.jsx)("br",{})]}):(0,l.jsx)(d.Z,{style:{display:"flex",margin:"auto",height:"80vh"}})})]})}}},function(e){e.O(0,[6319,260,9565,889,9774,2888,179],function(){return e(e.s=10265)}),_N_E=e.O()}]);