(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{4020:function(e){"use strict";var r="%[a-f0-9]{2}",t=RegExp(r,"gi"),n=RegExp("("+r+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{r[i[0]]=decodeURIComponent(i[0])}catch(s){var a=function(e){try{return decodeURIComponent(e)}catch(i){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=(function e(r,t){try{return decodeURIComponent(r.join(""))}catch(n){}if(1===r.length)return r;t=t||1;var i=r.slice(0,t),a=r.slice(t);return Array.prototype.concat.call([],e(i),e(a))})(r,n).join("")).match(t);return e}}(i[0]);a!==i[0]&&(r[i[0]]=a)}i=n.exec(e)}r["%C2"]="�";for(var o=Object.keys(r),l=0;l<o.length;l++){var c=o[l];e=e.replace(RegExp(c,"g"),r[c])}return e}(e)}}},2806:function(e){"use strict";e.exports=function(e,r){for(var t={},n=Object.keys(e),i=Array.isArray(r),a=0;a<n.length;a++){var s=n[a],o=e[s];(i?-1!==r.indexOf(s):r(s,o,e))&&(t[s]=o)}return t}},6034:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creatorprofile",function(){return t(7788)}])},7788:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return j}});var n=t(5893),i=t(353),a=t(2135),s=t(8186),o=t(5675),l=t.n(o),c=t(7294),u=t(8196),p=t(1163),f=t(4855),d=t(405),g=t(3457),m=t(463),y=t(9008),h=t.n(y),x=t(7563);function j(){let e=(0,p.useRouter)(),{address:r}=e.query;if(!r){let t=e.asPath;r=x.parseUrl(t).query.address}let[o,y]=(0,c.useState)(""),[j,b]=(0,c.useState)(!1);(0,c.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await a.Z.refresh()),b(a.Z.validateCurrentUserRefreshToken()&&a.Z.validateCurrentUserAccessToken())}()},[]),(0,c.useEffect)(()=>{y(a.Z.getUsername())},[j]);let[v,k]=(0,c.useState)({username:"",fname:"",lname:"",bio:"",displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});return(0,c.useEffect)(()=>{(async function(){if(""!=r){let e=await (0,u.is)(null==r?void 0:r.toString());k(e[0])}})()},[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(h(),{children:[(0,n.jsx)("title",{children:"Profile"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{children:j&&o&&v.fname?(0,n.jsxs)("div",{className:"blueTextBlackBackground",style:{fontSize:25},children:[(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{className:"creatorImageDiv",children:""!=v.displaypicture?(0,n.jsx)(l(),{src:v.displaypicture,alt:"",width:150,height:150,className:"creatorDP"}):(0,n.jsx)(i.Z,{size:100,value:r})}),(0,n.jsx)("div",{className:"description",children:(0,n.jsxs)("div",{style:{minWidth:"25vw",width:"30vw",justifyContent:"center"},children:[(0,n.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white",margin:"5px 0 5px 0"},children:v.username}),(0,n.jsx)("div",{style:{fontSize:"16px",color:"white",margin:"5px 0 5px 0"},children:v.fname+" "+v.lname}),""!=v.bio?(0,n.jsx)("div",{style:{fontSize:"16px",color:"white"},children:v.bio}):(0,n.jsx)(n.Fragment,{}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"15px"},children:[(0,n.jsx)("div",{style:{marginRight:"10px"},children:v&&v.twitterhandle?(0,n.jsx)("a",{href:"https://twitter.com/"+v.twitterhandle,style:{marginTop:"5px",marginLeft:"5px"},target:"_blank",rel:"noreferrer",children:(0,n.jsx)(l(),{src:f.Z,alt:"",width:25,height:20})}):(0,n.jsx)(n.Fragment,{})}),(0,n.jsx)("div",{style:{marginRight:"10px"},children:v&&v.instagram?(0,n.jsx)("a",{href:"https://instagram.com/"+v.instagram,style:{marginTop:"5px",marginLeft:"5px"},target:"_blank",rel:"noreferrer",children:(0,n.jsx)(l(),{src:d.Z,alt:"",width:25,height:25})}):(0,n.jsx)(n.Fragment,{})}),(0,n.jsx)("div",{style:{marginRight:"10px"},children:v&&v.youtube?(0,n.jsx)("a",{href:v.youtube.toString().toLowerCase().replace(" ",""),style:{marginTop:"5px",marginLeft:"5px"},target:"_blank",rel:"noreferrer",children:(0,n.jsx)(l(),{src:g.Z,alt:"",width:25,height:20})}):(0,n.jsx)(n.Fragment,{})}),(0,n.jsx)("div",{style:{marginRight:"10px"},children:v&&v.website?(0,n.jsx)("a",{href:v.website,style:{marginTop:"5px",marginLeft:"5px"},target:"_blank",rel:"noreferrer",children:(0,n.jsx)(l(),{src:m.Z,alt:"",width:25,height:20})}):(0,n.jsx)(n.Fragment,{})})]})]})})]}),(0,n.jsx)(s.Z,{onCreatorProfile:!0,creator:v.username,isCreator:!0})]}):(0,n.jsx)(n.Fragment,{})})]})}},7563:function(e,r,t){"use strict";let n=t(8218),i=t(4020),a=t(500),s=t(2806),o=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,r){return r.encode?r.strict?n(e):encodeURIComponent(e):e}function p(e,r){return r.decode?i(e):e}function f(e){let r=e.indexOf("#");return -1!==r&&(e=e.slice(0,r)),e}function d(e){e=f(e);let r=e.indexOf("?");return -1===r?"":e.slice(r+1)}function g(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):r.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e,r){c((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);let t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{if(r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!r){n[e]=t;return}void 0===n[e]&&(n[e]={}),n[e][r[1]]=t};case"bracket":return(e,t,n)=>{if(r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!r){n[e]=t;return}if(void 0===n[e]){n[e]=[t];return}n[e]=[].concat(n[e],t)};case"colon-list-separator":return(e,t,n)=>{if(r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!r){n[e]=t;return}if(void 0===n[e]){n[e]=[t];return}n[e]=[].concat(n[e],t)};case"comma":case"separator":return(r,t,n)=>{let i="string"==typeof t&&t.includes(e.arrayFormatSeparator),a="string"==typeof t&&!i&&p(t,e).includes(e.arrayFormatSeparator);t=a?p(t,e):t;let s=i||a?t.split(e.arrayFormatSeparator).map(r=>p(r,e)):null===t?t:p(t,e);n[r]=s};case"bracket-separator":return(r,t,n)=>{let i=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!i){n[r]=t?p(t,e):t;return}let a=null===t?[]:t.split(e.arrayFormatSeparator).map(r=>p(r,e));if(void 0===n[r]){n[r]=a;return}n[r]=[].concat(n[r],a)};default:return(e,r,t)=>{if(void 0===t[e]){t[e]=r;return}t[e]=[].concat(t[e],r)}}}(r),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let i of e.split("&")){if(""===i)continue;let[s,o]=a(r.decode?i.replace(/\+/g," "):i,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?o:p(o,r),t(p(s,r),o,n)}for(let l of Object.keys(n)){let u=n[l];if("object"==typeof u&&null!==u)for(let f of Object.keys(u))u[f]=g(u[f],r);else n[l]=g(u,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((e,r)=>{let t=n[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=function e(r){return Array.isArray(r)?r.sort():"object"==typeof r?e(Object.keys(r)).sort((e,r)=>Number(e)-Number(r)).map(e=>r[e]):r}(t):e[r]=t,e},Object.create(null))}r.extract=d,r.parse=m,r.stringify=(e,r)=>{if(!e)return"";c((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);let t=t=>r.skipNull&&o(e[t])||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{let i=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),"[",i,"]"].join("")]:[...t,[u(r,e),"[",u(i,e),"]=",u(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),"[]"].join("")]:[...t,[u(r,e),"[]=",u(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),":list="].join("")]:[...t,[u(r,e),":list=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length)?[[u(t,e),r,u(i,e)].join("")]:[[n,u(i,e)].join(e.arrayFormatSeparator)]}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,u(r,e)]:[...t,[u(r,e),"=",u(n,e)].join("")]}}(r),i={};for(let a of Object.keys(e))t(a)||(i[a]=e[a]);let s=Object.keys(i);return!1!==r.sort&&s.sort(r.sort),s.map(t=>{let i=e[t];return void 0===i?"":null===i?u(t,r):Array.isArray(i)?0===i.length&&"bracket-separator"===r.arrayFormat?u(t,r)+"[]":i.reduce(n(t),[]).join("&"):u(t,r)+"="+u(i,r)}).filter(e=>e.length>0).join("&")},r.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);let[t,n]=a(e,"#");return Object.assign({url:t.split("?")[0]||"",query:m(d(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:p(n,r)}:{})},r.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[l]:!0},t);let n=f(e.url).split("?")[0]||"",i=r.extract(e.url),a=r.parse(i,{sort:!1}),s=Object.assign(a,e.query),o=r.stringify(s,t);o&&(o=`?${o}`);let c=function(e){let r="",t=e.indexOf("#");return -1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(c=`#${t[l]?u(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${n}${o}${c}`},r.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[l]:!1},n);let{url:i,query:a,fragmentIdentifier:o}=r.parseUrl(e,n);return r.stringifyUrl({url:i,query:s(a,t),fragmentIdentifier:o},n)},r.exclude=(e,t,n)=>{let i=Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r);return r.pick(e,i,n)}},500:function(e){"use strict";e.exports=(e,r)=>{if(!("string"==typeof e&&"string"==typeof r))throw TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];let t=e.indexOf(r);return -1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},8218:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}},function(e){e.O(0,[229,83,620,522,186,861,212,774,888,179],function(){return e(e.s=6034)}),_N_E=e.O()}]);