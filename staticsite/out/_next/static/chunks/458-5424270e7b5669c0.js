"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{40774:function(e,t){t.Z={src:"/_next/static/media/coming_soon.acba7764.png",height:3928,width:3953,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAcHBwEBAQ7OztPT09mZmYREREtLS16enqXTMCHAAAACXBIWXMAAJnKAACZygHjkaQiAAAALElEQVQImWNggAMmKMHEwszIyMwCYrCysnKAGGzM7OzMbCB5RkZGRrBCNAAADqcAYITRmVEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},70405:function(e,t){t.Z={src:"/_next/static/media/instagram.2bef5ba5.png",height:1850,width:1850,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXHPCXOaFa2uDZqLIrbGAIHQB3J9LsFsRszhP1TobD34ugCZGKutCppdTNTxlBTmUkmzBpfgPVOcF6nymg7thCX1rABYUdfDAITbGF/NAHZ2NcRpQc1kRc/EzZZWAAAAHnRSTlMAhE8QWnhXXQleXAx2oE91UX6DWlhRoKZQYENWkIxwy9oCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVQImQXBgwHAQAAAsXubtfZfswl4qZ/qwZfs3Hd4ToMZ8q3YS1g5nKOH2W+hNVtjCvJC2lsMpihIawxW8QNgMQKYllQULgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},44855:function(e,t){t.Z={src:"/_next/static/media/twitter.67a0edbf.png",height:851,width:1034,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAALVBMVEUdm/Acm/AcmvAcm/Adm/AcmvAcmvAdm/Acm/Adm/Acmu8dm/Adm/Adm/Acm/AruKjLAAAADnRSTlMCF/FY+bDeu3DQNo89l7MCS9kAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAxSURBVAiZBcGFAcAwDMAwB0oD/39uJT5g5yjWiEgd/Obpttiq7QPHbhdQqTOgjvMNuC2aAXMwfKEbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},13457:function(e,t){t.Z={src:"/_next/static/media/youtube.da867d95.png",height:1686,width:2400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAGFBMVEXNIB/NIB/MHx7PLi3mlJP00dHMGxrttrb+nIKYAAAABnRSTlP9uKz+/v6PwKXMAAAACXBIWXMAAA4sAAAOLAH5m+4QAAAAJ0lEQVQImTXKwQ0AIAjAwFMU9t/YKPHXtDVJDIi8iF3RVKsFL/35AAiOAE7rUpnNAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},86554:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(85893),s=a(67294),n=a(52135),o={src:"/_next/static/media/DummyProfile.cb181f25.jpg",height:225,width:225,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAACAQEJAAAAAAAAAAAAAAAAEhEBAgMEExQVMVFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKVTD3eztpbWbDOvvM9QAAP/2Q==",blurWidth:8,blurHeight:8},i=a(25675),A=a.n(i),l=a(42129);let c=e=>{let{creator:t,height:a,width:i}=e,[c,u]=(0,s.useState)(""),[d,h]=(0,s.useState)(!1),[g,p]=(0,s.useState)("");return(0,s.useEffect)(()=>{(async function(){console.log("AuthService.refresh()"),console.log(await n.Z.refresh()),h(n.Z.validateCurrentUserRefreshToken()&&n.Z.validateCurrentUserAccessToken())})()},[]),(0,s.useEffect)(()=>{u(n.Z.getUsername())},[d]),(0,s.useEffect)(()=>{(async function(){if(""!=c){let e=await (0,l.O)("profilepic",t);e[0]&&p(e[0].signedurl)}})()},[c]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(A(),{src:g,alt:"",width:i,height:a,className:"creatorDP",onError(e){let{currentTarget:t}=e;t.onerror=null,t.src=o.src}})})};var u=c},63458:function(e,t,a){a.d(t,{Z:function(){return S}});var r=a(85893),s=a(67294),n=a(40774),o=a(25675),i=a.n(o),A=a(41120),l=a(41749),c=a(162),u=a(12461),d=a(11163),h=a.n(d),g=a(44855),p=a(70405),m=a(13457),f=a(6599),x=a(42836),b=a(38196),w=a(86554);let v=(0,A.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5%",boxShadow:e.shadows[5],color:"black",margin:"5px",padding:e.spacing(2,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"70px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{minWidth:"100%","& .MuiFormLabel-root":{fontSize:"18px"}}}));(0,f.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});let y=e=>{let{request:t}=e,a=v(),[n,o]=(0,s.useState)(!1),i=t.usermessage.split("###--###"),A=t.creatorresponse.split("###--###"),l=Date.now()-Date.parse(t.lastupdatedat);p.Z,m.Z,g.Z;let[c,u]=(0,s.useState)("");return(0,s.useEffect)(()=>{(async function(){if(""!=t.creator){var e;let a=await (0,b.A)(t.creator,"displaypicture");u(null===(e=a[0])||void 0===e?void 0:e.displaypicture)}})()},[t.creator]),(0,r.jsx)(r.Fragment,{children:t.creator?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("section",{className:"purchaseCard",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"reqImage",children:[(0,r.jsx)(w.Z,{creator:t.creator,height:50,width:50}),(0,r.jsx)("h2",{className:"hovergreen viewMore pointer",style:{fontSize:"18px",fontWeight:"bold",textAlign:"center",padding:"5px 0 0 15px",margin:"5px 40px 5px 20px"},onClick:()=>h().push({pathname:"/creatorprofile",query:{address:t.creator}}),children:t.creator}),(0,r.jsxs)("div",{style:{margin:"5px 0 5px 40px"},children:[(0,r.jsxs)("p",{className:0==t.status?"Pending":1==t.status?"AcceptedAndWaiting":2==t.status?"Completed":"Rejected",style:{fontSize:"15px",marginRight:"15px",textAlign:"center",borderRadius:"35%",padding:"5px"},children:[0==t.status?"Pending":1==t.status?"Approved":2==t.status?"Completed":"Rejected"," "]})," "]})]}),(0,r.jsxs)("div",{style:{width:"100%",float:"left",paddingLeft:"20px",paddingRight:"20px",fontSize:16,justifyContent:"center",textAlign:"center",marginTop:"5px"},children:[(0,r.jsxs)("p",{style:{fontSize:"13px",color:"white",margin:"10px 0 15px 0"},children:["Updated"," ",l>864e5?new Date(Date.parse(t.lastupdatedat)).getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(Date.parse(t.lastupdatedat)).getMonth()]+" "+new Date(Date.parse(t.lastupdatedat)).getFullYear():l>36e5?Math.round(l/36e5)+"h ago":l>6e4?Math.round(l/6e4)+"m ago":l>1e3?Math.round(l/1e3)+"s ago":""]}),(0,r.jsxs)("div",{className:a.paper,children:[(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsx)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:"Message To Creator"}),(0,r.jsx)(x.Z,{value:i[0],className:a.textfield,placeholder:"Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",type:"text",multiline:!0,rows:5,InputLabelProps:{shrink:!0},variant:"outlined",onChange(e){}})]}),i.map((e,t)=>0!=t?(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsxs)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:["Link ",t]}),(0,r.jsx)(x.Z,{value:e,className:a.textfield,placeholder:"Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",type:"url",InputLabelProps:{shrink:!0},variant:"outlined",onChange(e){}})]}):(0,r.jsx)(r.Fragment,{})),(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsx)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:"Creator Response"}),(0,r.jsx)(x.Z,{value:A[0],className:a.textfield,placeholder:"No Response From Creator Yet..",type:"text",multiline:!0,rows:5,InputLabelProps:{shrink:!0},variant:"outlined",onChange(e){}})]}),A.map((e,t)=>0!=t?(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsxs)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:["Link ",t]}),(0,r.jsx)(x.Z,{value:e,className:a.textfield,placeholder:"Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",type:"url",InputLabelProps:{shrink:!0},variant:"outlined",onChange(e){}})]}):(0,r.jsx)(r.Fragment,{}))]})]}),(0,r.jsx)("div",{style:{fontSize:"15px",width:"100%",color:"black"},children:"Nothing To See Here"})]})}):(0,r.jsx)(r.Fragment,{})})};var j=a(87054),C=a(85390);let E=(0,A.Z)(e=>({paper:{textAlign:"center",backgroundColor:e.palette.background.paper,justifyContent:"center",borderRadius:"5px"}})),M=e=>{let{request:t}=e;return(0,r.jsx)(l.Z,{item:!0,xs:12,sm:12,md:12,children:(0,r.jsx)(y,{request:t})})},z=e=>{let{category:t,type:a,platform:o,creator:A}=e,d=E(),[h,g]=s.useState(0);var p=0,m=0,f=0,x=0;let b=(e,t)=>{g(t)},[w,v]=(0,s.useState)([{creator:"",platform:0,usermessage:"",creatorresponse:"",status:0,lastupdatedat:""}]);(0,s.useEffect)(()=>{!async function(){let e=[];"user"==a?("shoutout"==t?e=await (0,u.rE)():"collab"==t&&(e=await (0,c.sL)()),v(e)):"creator"==a&&("shoutout"==t?e=await (0,u.Mn)(A):"collab"==t&&(e=await (0,c.kJ)(A)),v(e)),console.log("result"),console.log(e)}()},[]);for(var y=0;y<w.length;y++)0==w[y].status&&w[y].platform.toString()==o?p+=1:1==w[y].status&&w[y].platform.toString()==o?m+=1:2==w[y].status&&w[y].platform.toString()==o?f+=1:3==w[y].status&&w[y].platform.toString()==o&&(x+=1);return(0,r.jsx)("div",{className:"blueTextBlackBackground",style:{justifyContent:"center"},children:"perq"==t||"merch"==t?(0,r.jsx)("div",{className:"blueTextBlackBackground",style:{justifyContent:"center",textAlign:"center"},children:(0,r.jsx)(i(),{src:n.Z,alt:"",width:500,height:500})}):(0,r.jsxs)("div",{style:{marginLeft:"10%",marginRight:"10%"},children:[(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsxs)(C.Z,{value:h,exclusive:!0,onChange:b,className:d.paper,children:[(0,r.jsxs)(j.Z,{value:0,children:["Pending (",p,")"]}),(0,r.jsxs)(j.Z,{value:1,children:["Approved (",m,")"]}),(0,r.jsxs)(j.Z,{value:2,children:["Completed (",f,")"]}),(0,r.jsxs)(j.Z,{value:3,children:["Rejected (",x,")"]})]})}),(0,r.jsx)(l.Z,{container:!0,spacing:2,children:w.map((e,t)=>(0,r.jsx)(r.Fragment,{children:e.platform==parseInt(o)&&e.status==h?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(M,{request:e},t)}):(0,r.jsx)(r.Fragment,{})}))})]})})};var S=z},42129:function(e,t,a){a.d(t,{O:function(){return o}});var r=a(9669),s=a.n(r),n=a(76095);async function o(e,t){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let a=await s().get("http://localhost:5000/content/creator_info/"+e+"/"+t,{headers:(0,n.z)()});if(a.data.isSuccessful)return a.data.result;return a.data.errorMsg}}catch(r){console.log(r)}}},162:function(e,t,a){a.d(t,{kJ:function(){return A},sL:function(){return i}});var r=a(9669),s=a.n(r),n=a(76095);let o="http://localhost:5000/";async function i(){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let e=await s().get(o+"user_colab/allcreators",{headers:(0,n.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function A(e){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let t=await s().get(o+"user_colab/"+e,{headers:(0,n.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(a){console.log(a)}}},12461:function(e,t,a){a.d(t,{Mn:function(){return A},rE:function(){return i}});var r=a(9669),s=a.n(r),n=a(76095);let o="http://localhost:5000/";async function i(){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let e=await s().get(o+"user_shoutout/allcreators",{headers:(0,n.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function A(e){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let t=await s().get(o+"user_shoutout/"+e,{headers:(0,n.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(a){console.log(a)}}}}]);