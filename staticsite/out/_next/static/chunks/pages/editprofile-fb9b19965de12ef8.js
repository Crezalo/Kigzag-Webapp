(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{265:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editprofile",function(){return i(2164)}])},2164:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var n=i(5893),l=i(7294),a=i(1120),r=i(3559),s=i(8538),o=i(282),u=i(9008),d=i.n(u),c=i(2135),p=i(8196),x=i(450),h=i(353),f=i(5675),m=i.n(f);let g=(0,a.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",width:"50%",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(0,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{width:"80%",margin:"10px 0 10px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"#3b82f6"}}}}));function y(){let e=g(),[t,i]=(0,l.useState)(""),[a,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await c.Z.refresh()),r(c.Z.validateCurrentUserRefreshToken()&&c.Z.validateCurrentUserAccessToken())}()},[]),(0,l.useEffect)(()=>{i(c.Z.getUsername())},[a]);let[u,f]=(0,l.useState)({emailaddress:"",signuptype:1,username:"",fname:"",lname:"",bio:"",iscreator:null,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});(0,l.useEffect)(()=>{!async function(){if(""!=t){let e=await (0,p.is)(t);f(e[0])}}()},[t]);let[y,w]=(0,l.useState)(""),[j,v]=(0,l.useState)(""),[b,C]=(0,l.useState)(""),[_,N]=(0,l.useState)(""),[S,k]=(0,l.useState)(""),[P,Z]=(0,l.useState)(""),[I,L]=(0,l.useState)(""),[E,T]=(0,l.useState)(""),[V,z]=(0,l.useState)(""),B=async()=>{let e=await (0,p.Al)(y,"",j,b,_,u.iscreator,S,P,I,E,V);console.log(e)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(d(),{children:[(0,n.jsx)("title",{children:"Kigzag: Edit Profile"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{children:a&&t&&u.fname?(0,n.jsxs)("div",{className:"blueTextBlackBackground",style:{fontSize:"18px",display:"flex",flexDirection:"row"},children:[(0,n.jsxs)("div",{className:e.paper,children:[(0,n.jsx)(x.__,{style:{margin:"10px 0 0 10px"},children:"Bio"}),(0,n.jsx)(s.Z,{className:e.textfield,placeholder:"Bio Here ...",type:"text",multiline:!0,rows:3,inputProps:{style:{color:"white"}},InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:u.bio,onChange(e){N(e.target.value)}}),(0,n.jsx)(x.__,{style:{margin:"10px 0 0 10px"},children:"Twitter"}),(0,n.jsx)(s.Z,{className:e.textfield,placeholder:"@YourTwitterHandle",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:u.twitterhandle,onChange(e){Z(e.target.value)}}),(0,n.jsx)(x.__,{style:{margin:"10px 0 0 10px"},children:"Instagram"}),(0,n.jsx)(s.Z,{className:e.textfield,placeholder:"@YourInstagramUsername",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:u.instagram,onChange(e){L(e.target.value)}}),(0,n.jsx)(x.__,{style:{margin:"10px 0 0 10px"},children:"Youtube Channel"}),(0,n.jsx)(s.Z,{className:e.textfield,placeholder:"https://www.youtube.com/c/channelid",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:u.youtube,onChange(e){T(e.target.value)}}),(0,n.jsx)(x.__,{style:{margin:"10px 0 0 10px"},children:"Website"}),(0,n.jsx)(s.Z,{className:e.textfield,placeholder:"https://www.mywebsite.com/",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{style:{color:"white"}},defaultValue:u.youtube,onChange(e){z(e.target.value)}})]}),(0,n.jsxs)("div",{style:{width:"50%",display:"flex",flexDirection:"column",paddingLeft:"50px",paddingRight:"50px",paddingTop:"100px"},children:[(0,n.jsx)("div",{className:"creatorImageDiv",style:{justifyContent:"center",width:"100%"},children:""!=u.displaypicture?(0,n.jsx)(m(),{src:u.displaypicture,alt:"",width:250,height:250,className:"creatorDP"}):(0,n.jsx)(h.Z,{size:100,value:t})}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[(0,n.jsxs)("div",{style:{justifyContent:"center",marginRight:"10px"},children:[(0,n.jsx)(x.__,{style:{margin:"10px"},children:"First Name"}),(0,n.jsx)(s.Z,{className:e.textfield,placeholder:"First Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:u.fname,inputProps:{style:{color:"white"}},onChange(e){v(e.target.value)}})]}),(0,n.jsxs)("div",{style:{justifyContent:"center",marginLeft:"10px"},children:[(0,n.jsx)(x.__,{style:{margin:"10px"},children:"Last Name"}),(0,n.jsx)(s.Z,{className:e.textfield,placeholder:"Last Name Here ...",type:"text",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:u.lname,inputProps:{style:{color:"white"}},onChange(e){C(e.target.value)}})]})]}),(0,n.jsx)("div",{style:{marginTop:"50px",justifyContent:"center"},children:(0,n.jsx)(o.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px",width:"30%",justifyContent:"center"},className:e.button,variant:"contained",onClick(){B()},children:"SAVE"})})]})]}):(0,n.jsx)("div",{})})]})}(0,r.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}})}},function(e){e.O(0,[260,83,289,774,888,179],function(){return e(e.s=265)}),_N_E=e.O()}]);