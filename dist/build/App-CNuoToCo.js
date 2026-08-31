import{a as T,h7 as Ys,j as t,S as _,dq as Ht,g as S,A as R,h8 as l,h9 as _e,de as Qs,z as sa,db as na,b as aa,r as c,ha as Zs,f$ as ye,hb as ra,f6 as oa,hc as ia,hd as la,he as da,hf as ca,hg as ua,hh as rt,u as De,k as Ce,y as j,v as fe,fH as ga,hi as he,ch as pa,eS as ha,hj as Xs,hk as fa,hl as ma,d as ae,hm as ze,R as X,E as G,hn as xa,ho as Me,bU as Ie,hp as ya,hq as ba,hr as ja,D as wa,hs as Ma,ht as Ot,cz as Wt,N as Js,b2 as en,bC as ct,b0 as tn,b1 as ot,bk as z,bS as ut,J as gt,cY as qt,hu as sn,dS as nn,cA as N,cx as Z,dY as an,hv as Gt,gd as ve,n as Ca,I as Ze,bT as ke,dz as va,fN as Te,dw as Sa,dx as Da,c as rn,hw as Ia,Y as ka,Q as $a,h as Yt,e$ as Aa,f1 as Fa,f3 as Ra,e_ as Ea,f0 as Ta,f2 as La,hx as Pa,dg as Oa,F as pt,K as on,hy as Na,fG as Ba,gg as _a,a9 as Ua,fR as ht,H as ft,dP as Se,cP as wt,hz as za,bN as Ka,hA as Va,p as Ha,hB as Wa,hC as qa,hD as Ga,hE as Ya,L as hs,P as ln,e1 as Qa,hF as Mt,am as Za,gr as Xa,gs as Ja,hG as er,hH as tr,fT as sr,U as nr,W as ar}from"./strapi-Cl7cWOTI.js";import{g as rr}from"./users-CHXWXr2I.js";import{l as or,m as ir,D as lr,p as dr,k as cr,P as ur,u as dn,f as cn,e as un}from"./core.esm-DlkT-gD4.js";const gr=()=>{const{formatMessage:e}=T(),[s,n]=Ys("STRAPI_UPLOAD_LIBRARY_BETA_NOTICE_DISMISSED",!1);return s?null:t.jsx(_,{paddingBottom:4,children:t.jsx(Ht,{variant:"default",onClose:()=>n(!0),closeLabel:e({id:l("beta.notice.close"),defaultMessage:"Close"}),title:e({id:l("plugin.name"),defaultMessage:"Media Library"}),children:t.jsxs(S,{tag:"span",gap:2,alignItems:"center",children:[t.jsx(_,{tag:"span",background:"neutral150",hasRadius:!0,paddingLeft:2,paddingRight:2,shrink:0,children:t.jsx(R,{variant:"sigma",textColor:"neutral600",children:e({id:l("beta.badge"),defaultMessage:"Beta"})})}),t.jsx(R,{tag:"span",children:e({id:l("beta.notice.content"),defaultMessage:"This is a beta version of the Media Library. Some features are still in progress — please report any issue you run into."})})]})})})},pr=["image/png","image/jpeg","image/webp","image/heic","image/heif"],gn=e=>pr.includes(e),hr=20,fs=hr*2,fr=_e.injectEndpoints({endpoints:e=>({getUploadSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetUploadSettingsQuery:Qt}=fr,mt=e=>{const s=Qs(),{data:n}=Qt();return!s||!(n?.data?.aiMetadata??!1)?!1:e===void 0?!0:gn(e.mime)},{main:ql,...mr}=na,ce=()=>{const{allowedActions:e,isLoading:s}=sa(mr);return{isLoading:s,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},xr="v2",ee="upload",$e=()=>{const{trackUsage:e}=aa(),{data:s}=Qt(),n=Qs();return{trackUsage:c.useCallback((r,o)=>e(r,{...o,...n?{isAiMediaLibraryConfigured:!!s?.data?.aiMetadata}:{},mediaLibraryVersion:xr}),[e,n,s])}},Zt=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),yr=e=>typeof e=="object"&&e!==null&&"data"in e,ms=e=>yr(e)?e.data:e,br=_e.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:a,search:r,filters:o=[]}=s,i={sort:a??"name:ASC",populate:{parent:!0}};if(r)i._q=Zt(r),o.length>0&&(i.filters={$and:[...o]});else{const d=n!=null?{parent:{id:n}}:{parent:{id:{$null:!0}}};i.filters={$and:[d,...o]}}return{url:"/upload/folders",method:"GET",config:{params:i}}},transformResponse:s=>ms(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:s,...n})=>({url:`/upload/folders/${s}`,method:"PUT",data:n}),transformResponse:s=>s.data,invalidatesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>ms(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:a})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:a}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:jr,useUpdateFolderMutation:wr,useGetFoldersQuery:Mr,useGetFolderQuery:Xt,useGetAllFoldersQuery:Cr,useGetFolderStructureQuery:Jt,useBulkMoveMutation:pn}=br,it=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,hn={fileFolderId:()=>{},folderParentId:()=>{}},vr=(e,s)=>{const n=new Map,a=new Map;return e.forEach(r=>{n.set(r.id,it(r.folder))}),s.forEach(r=>{a.set(r.id,it(r.parent))}),{fileFolderId:r=>n.get(r),folderParentId:r=>a.get(r)}},lt=(e,s,n,a)=>{const r=s==="file"?e.fileFolderId(n):e.folderParentId(n);return r===void 0?a:r},Sr=e=>{if(!e||typeof e!="object")return;const{message:s}=e;return typeof s=="string"&&s.length>0?s:void 0},xt=()=>{const{formatMessage:e,messages:s}=T();return c.useCallback((n,a)=>{const r=Sr(n);if(!r)return a;const o=l(`apiError.${r}`);return s[o]?e({id:o}):r},[e,s])},Dr=_e.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,search:a,filters:r=[],...o}=s,i={...o};if(a)i._q=Zt(a),r.length>0&&(i.filters={$and:[...r]});else{const d=n!=null?{folder:{id:n}}:{folder:{id:{$null:!0}}};i.filters={$and:[d,...r]}}return{url:"/upload/files",method:"GET",config:{params:i}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,a)=>[{type:"Asset",id:a}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const a=new FormData;return a.append("fileInfo",JSON.stringify(n)),{url:`/upload/files/${s}`,method:"PUT",data:a}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:a})=>{const r=new FormData;return r.append("files",n),a&&r.append("fileInfo",JSON.stringify(a)),{url:`/upload/files/${s}/replace`,method:"POST",data:r}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,a)=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:es,useGetAssetQuery:Ir,useUpdateAssetMutation:kr,useReplaceAssetMutation:fn,useDeleteAssetMutation:$r,useBulkDeleteItemsMutation:Ar}=Dr,mn=async(e,s)=>{const a=await(await fetch(e)).blob(),r=window.URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.setAttribute("download",s),o.click(),window.URL.revokeObjectURL(r)},Fr={pdf:ua,csv:ca,xls:da,zip:la},Ke=(e,s)=>{const n=Zs(s);return e?.includes(ye.Image)?ra:e?.includes(ye.Video)?oa:e?.includes(ye.Audio)?ia:n?Fr[n]||rt:rt},xn=e=>{const{formatMessage:s}=T(),{data:n,isLoading:a}=Xt({id:e},{skip:e===null}),{data:r,isLoading:o}=es({folder:null,pageSize:1},{skip:e!==null}),i=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?o?{title:i,itemCount:0}:{title:i,itemCount:r?.pagination?.total??0}:a||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},at="assetId",yn=e=>{const s=e?parseInt(e,10):NaN;return Number.isNaN(s)?null:s},Rr=()=>{const[{query:e}]=De();return yn(e?.[at])!==null},Er=j(S)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,bn=({children:e,zIndex:s=20,hideLabel:n=!1})=>t.jsx(Er,{$zIndex:s,children:t.jsx(Ce,{small:n,children:e})}),Tr=1,Lr=({anchorX:e,anchorY:s,point:n,aspectRatio:a})=>{let r=Math.abs(n.x-e),o=Math.abs(n.y-s);a&&(r/a>=o?o=r/a:r=o*a);const i=n.x<e?e-r:e,d=n.y<s?s-o:s;return{x:i,y:d,width:r,height:o}},Pr=()=>{const[e,s]=c.useState({width:0,height:0}),[n,a]=c.useState({x:0,y:0,width:0,height:0}),[r,o]=c.useState(null),i=c.useRef(null),d=c.useCallback(p=>{i.current=p;const m={width:p.naturalWidth,height:p.naturalHeight};s(m),a({x:0,y:0,width:m.width,height:m.height})},[]),u=(p,m,M)=>Math.min(M,Math.max(m,p)),f=c.useCallback(p=>{a(m=>{const M=e.width-m.x,v=e.height-m.y;let C=p.width!==void 0?u(p.width,1,M):m.width,$=p.height!==void 0?u(p.height,1,v):m.height;return r&&(p.width!==void 0?$=u(C/r,1,v):p.height!==void 0&&(C=u($*r,1,M))),{...m,width:C,height:$}})},[e.width,e.height,r]),g=c.useCallback(p=>{a(m=>{const M=p.x!==void 0?u(p.x,0,e.width-m.width):m.x,v=p.y!==void 0?u(p.y,0,e.height-m.height):m.y;return{...m,x:M,y:v}})},[e.width,e.height]),h=c.useCallback(p=>{o(p),p&&a(m=>{const M=e.width-m.x,v=e.height-m.y;let C=m.width,$=C/p;return $>v&&($=v,C=$*p),C>M&&(C=M,$=C/p),{...m,width:Math.round(C),height:Math.round($)}})},[e.width,e.height]),y=c.useCallback((p,m,M)=>new Promise((v,C)=>{const $=i.current;if(!$){C(new Error("Image not ready: call init() before produceFile()."));return}const x=document.createElement("canvas");x.width=Math.max(1,Math.round(n.width)),x.height=Math.max(1,Math.round(n.height));const I=x.getContext("2d");if(!I){C(new Error("Could not get a 2D canvas context to crop the image."));return}I.drawImage($,n.x,n.y,n.width,n.height,0,0,x.width,x.height),x.toBlob(A=>{if(!A){C(new Error("Could not export the cropped image to a blob."));return}v(new File([A],p,{type:m,lastModified:M?new Date(M).getTime():Date.now()}))},m,Tr)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:r,setCropSize:f,setCropPosition:g,setAspectRatio:h,produceFile:y,width:Math.round(n.width),height:Math.round(n.height)}},Xe=5.6,Ct=12,Or=j(S)`
  position: fixed;
  z-index: 1200;
  flex-direction: column;
  top: ${({theme:e})=>e.spaces[1]};
  left: ${({theme:e})=>e.spaces[1]};
  right: ${({theme:e})=>e.spaces[1]};
  bottom: ${({theme:e})=>e.spaces[1]};
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
  /* Focused programmatically on open (tabIndex -1) — no visible ring needed. */
  outline: none;
`,Nr=j(S)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Br=j(_)`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      ${({theme:e})=>e.colors.neutral0} 0% 50%
    )
    50% / 20px 20px;
`,_r=j.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  ${({$aspect:e})=>e?`aspect-ratio: ${e};`:""}

  img {
    display: block;
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-drag: none;
  }
`,Ur=j.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,Je=j.button`
  position: absolute;
  width: ${Ct}px;
  height: ${Ct}px;
  margin: -${Ct/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,zr=j.button`
  position: absolute;
  width: ${Xe}rem;
  height: ${Xe}rem;
  margin: ${-Xe/2}rem 0 0 ${-Xe/2}rem;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.neutral800};
  background: transparent;
  cursor: grab;
  padding: 0;
  touch-action: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.16);
    transform: translate(-50%, -50%);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.neutral800};
    transform: translate(-50%, -50%);
  }

  &:active {
    cursor: grabbing;
  }
`,Kr=j(_)`
  display: none;

  ${({theme:e})=>e.breakpoints.medium} {
    display: block;
    position: absolute;
    right: ${({theme:e})=>e.spaces[1]};
    bottom: ${({theme:e})=>e.spaces[1]};
    width: 100%;
    max-width: 32rem;
    padding: ${({theme:e})=>e.spaces[3]};
    border-radius: ${({theme:e})=>e.borderRadius};
    background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral900};
    z-index: 20;
  }
`,Vr=j(S)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,et=j(X.Root)`
  flex-direction: row;
  align-items: center;
`,tt=j(xa)`
  width: 8.4rem;
`,xs=j(X.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,Hr=j(_)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,Wr=()=>t.jsx(Hr,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),qr=({asset:e,isBusy:s=!1,onClose:n,onApply:a,onSaveAsCopy:r,canSaveAsCopy:o})=>{const{formatMessage:i}=T(),{toggleNotification:d}=fe(),f=ga().colorScheme==="dark",g=f?"neutral1000":"neutral0",h=f?"neutral600":"neutral200",y=c.useRef(null),p=c.useRef(null),m=c.useRef(null);c.useEffect(()=>{m.current?.focus()},[]);const{init:M,crop:v,naturalSize:C,aspectRatio:$,setCropSize:x,setCropPosition:I,setAspectRatio:A,produceFile:w,width:k,height:B}=Pr(),[E,Y]=c.useState(!1),[L,b]=c.useState(e.focalPoint??{x:50,y:50}),D=he(e.url),F=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,U=F!==void 0?`${D}${D.includes("?")?"&":"?"}updatedAt=${F}`:D,V=()=>{y.current&&M(y.current)},H=P=>{const W=p.current?.getBoundingClientRect();if(!W||!C.width||!C.height)return null;const K=C.width/W.width,se=C.height/W.height;return{x:(P.clientX-W.left)*K,y:(P.clientY-W.top)*se}},O=c.useRef(null);c.useEffect(()=>()=>{O.current?.()},[]);const q=(P,W)=>{P.preventDefault(),P.stopPropagation();const{pointerId:K}=P;try{P.currentTarget.setPointerCapture(K)}catch{}const se=re=>{re.pointerId===K&&W(re)},ne=()=>{window.removeEventListener("pointermove",se),window.removeEventListener("pointerup",pe),window.removeEventListener("pointercancel",pe),O.current=null},pe=re=>{re.pointerId===K&&ne()};O.current?.(),O.current=ne,window.addEventListener("pointermove",se),window.addEventListener("pointerup",pe),window.addEventListener("pointercancel",pe)},Q=P=>{const W=H(P);if(!W)return;const K={...v};q(P,se=>{const ne=H(se);ne&&I({x:K.x+(ne.x-W.x),y:K.y+(ne.y-W.y)})})},ie=P=>W=>{const K={...v},se=P==="tl"||P==="bl"?K.x+K.width:K.x,ne=P==="tl"||P==="tr"?K.y+K.height:K.y;q(W,pe=>{const re=H(pe);if(!re)return;const{x:Ye,y:Qe,width:yt,height:bt}=Lr({anchorX:se,anchorY:ne,point:re,aspectRatio:E?$:null});I({x:Ye,y:Qe}),x({width:yt,height:bt})})},xe=()=>{Y(P=>{const W=!P;return A(W&&B?k/B:null),W})},ge=P=>{q(P,W=>{const K=H(W);if(!K)return;const se=(K.x-v.x)/v.width*100,ne=(K.y-v.y)/v.height*100;b({x:Math.round(Math.min(100,Math.max(0,se))),y:Math.round(Math.min(100,Math.max(0,ne)))})})},We=Math.round(L.x/100*k),qe=Math.round(L.y/100*B),Le=(P,W)=>{const K=P==="x"?k:B;if(!K)return;const se=Math.min(100,Math.max(0,W/K*100));b(ne=>({...ne,[P]:Math.round(se)}))},le=C.width&&C.height?{left:v.x/C.width*100,top:v.y/C.height*100,width:v.width/C.width*100,height:v.height/C.height*100}:null,Pe=le!==null,Ge=async P=>{if(!Pe)return;let W;try{W=await w(e.name,e.mime??"image/png",e.updatedAt)}catch{d({type:"danger",message:i({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const K={x:Math.round(L.x),y:Math.round(L.y)};P==="apply"?a(W,K):r(W,K)};return t.jsx(pa,{children:t.jsx(ha,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(Or,{ref:m,tabIndex:-1,children:[t.jsxs(Nr,{alignItems:"center",children:[t.jsx(Xs,{"aria-hidden":!0}),t.jsx(R,{variant:"omega",fontWeight:"bold",children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(Br,{children:[t.jsxs(_r,{ref:p,$aspect:C.width&&C.height?C.width/C.height:void 0,children:[t.jsx("img",{ref:y,src:U,alt:e.name,crossOrigin:"anonymous",onLoad:V,draggable:!1}),le?t.jsxs(Ur,{style:{left:`${le.left}%`,top:`${le.top}%`,width:`${le.width}%`,height:`${le.height}%`},onPointerDown:Q,children:[t.jsx(Je,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:ie("tl")}),t.jsx(Je,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:ie("tr")}),t.jsx(Je,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:ie("bl")}),t.jsx(Je,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:ie("br")}),t.jsx(zr,{type:"button","aria-label":i({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${L.x}%`,top:`${L.y}%`},onPointerDown:ge})]}):null]}),t.jsxs(Kr,{children:[t.jsxs(S,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(R,{variant:"omega",fontWeight:"bold",textColor:g,children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(R,{variant:"pi",textColor:h,children:i({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(S,{gap:6,alignItems:"center",children:[t.jsxs(S,{alignItems:"center",gap:2,children:[t.jsxs(S,{direction:"column",gap:2,children:[t.jsxs(et,{name:"crop-width",gap:2,children:[t.jsx(xs,{textColor:g,children:t.jsx(fa,{})}),t.jsx(tt,{"aria-label":i({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:k,min:1,max:C.width||void 0,onValueChange:P=>{P!==void 0&&x({width:P})}})]}),t.jsxs(et,{name:"crop-height",gap:2,children:[t.jsx(xs,{textColor:g,children:t.jsx(ma,{})}),t.jsx(tt,{"aria-label":i({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:B,min:1,max:C.height||void 0,onValueChange:P=>{P!==void 0&&x({height:P})}})]})]}),t.jsxs(S,{position:"relative",children:[t.jsx(ae,{label:i({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:E?"secondary":"ghost",onClick:xe,children:t.jsx(ze,{})}),t.jsx(Wr,{})]})]}),t.jsxs(S,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(et,{name:"focal-x",gap:2,children:[t.jsx(X.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(tt,{"aria-label":i({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:We,onValueChange:P=>{P!==void 0&&Le("x",P)}})]}),t.jsxs(et,{name:"focal-y",gap:2,children:[t.jsx(X.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(tt,{"aria-label":i({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:qe,onValueChange:P=>{P!==void 0&&Le("y",P)}})]})]})]})]})]}),t.jsxs(Vr,{alignItems:"center",children:[t.jsx(G,{variant:"tertiary",onClick:n,disabled:s,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(S,{gap:2,children:[o&&t.jsx(G,{variant:"secondary",onClick:()=>Ge("copy"),loading:s,disabled:!Pe,children:i({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(G,{variant:"default",onClick:()=>Ge("apply"),loading:s,disabled:!Pe,children:i({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},Ne=j(_)`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 24rem;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: ${({theme:e})=>e.spaces[3]};
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      transparent 0% 50%
    )
    50% / 20px 20px;
`,st=j(S)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,Gr=j.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Yr=j(S)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,Qr=j.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Zr=j.audio`
  width: 100%;
`,Xr=j.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,Jr=j(S)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,eo=j(S)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,nt=()=>{const{formatMessage:e}=T();return t.jsx(eo,{justifyContent:"center",alignItems:"center",children:t.jsx(Ce,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},to=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:a}=T(),{alternativeText:r,ext:o,mime:i,url:d,updatedAt:u,isUrlSigned:f,isLocal:g}=e,h=u&&!f?new Date(u).getTime():void 0,y=x=>!x||h===void 0?x:x.includes("?")?`${x}&v=${h}`:`${x}?v=${h}`,p=y(he(d)),[m,M]=c.useState(!1);c.useEffect(()=>{M(!1)},[p]);const v=c.useRef(null);if(c.useEffect(()=>{const x=v.current;if(!x)return;const I=()=>{const w=x.parentElement;if(!w)return;const k=w.getBoundingClientRect(),B=x.offsetWidth,E=x.offsetHeight;!B||!E||!k.width||k.height};I();const A=new ResizeObserver(I);return A.observe(x),x.parentElement&&A.observe(x.parentElement),()=>A.disconnect()},[m]),i?.includes(ye.Image)){const x=y(he(d));if(x)return t.jsxs(Ne,{children:[(!m||n)&&t.jsx(nt,{}),s?t.jsx(Yr,{children:s}):null,t.jsx(st,{children:t.jsx(Gr,{ref:v,src:x,alt:r||e.name||"",crossOrigin:!g&&f?"anonymous":void 0,onLoad:()=>M(!0),onError:()=>M(!0)})})]})}if(i?.includes(ye.Video)&&p)return t.jsxs(Ne,{children:[!m&&t.jsx(nt,{}),t.jsx(st,{children:t.jsx(Qr,{src:p,controls:!0,title:e.name,onLoadedData:()=>M(!0),onError:()=>M(!0),children:a({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(ye.Audio)&&p)return t.jsxs(Ne,{children:[!m&&t.jsx(nt,{}),t.jsx(st,{children:t.jsx(S,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Zr,{src:p,controls:!0,onLoadedData:()=>M(!0),onError:()=>M(!0)})})})]});if((o?.toLowerCase()==="pdf"||o?.toLowerCase()===".pdf"||i==="application/pdf")&&p)return t.jsxs(Ne,{children:[!m&&t.jsx(nt,{}),t.jsx(st,{children:t.jsx(Xr,{src:`${p}#toolbar=0`,title:e.name,onLoad:()=>M(!0)})})]});const $=Ke(i,o);return t.jsx(Ne,{children:t.jsxs(Jr,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx($,{width:24,height:24}),t.jsx(R,{variant:"pi",children:a({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},jn=c.createContext(null),wn=()=>{const e=c.useContext(jn);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},Mn=c.createContext(null),Cn=()=>{const e=c.useContext(Mn);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},vn=()=>{const[{query:e},s]=De(),n=yn(e?.[at]),a=n!==null,[r,o]=c.useState(a),i=c.useRef(null);c.useEffect(()=>{a&&(i.current=n,o(!0))},[a,n]);const d=c.useCallback(g=>{g.target===g.currentTarget&&!a&&o(!1)},[a]),u=c.useCallback(g=>{s({[at]:String(g)},"push",!0)},[s]),f=c.useCallback(()=>{s({[at]:void 0},"remove",!0)},[s]);return{assetId:a?n:i.current,isVisible:a,shouldRenderDrawer:r,onCloseAnimationEnd:d,openDetails:u,closeDetails:f}},so=j(S)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,we=({label:e,value:s})=>t.jsxs(so,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(R,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(R,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),no=j(_)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;

  > form {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    position: relative;
  }
`,ao=j(_)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,ro=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,oo=j(gt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,vt=({name:e,label:s,required:n,disabled:a})=>{const{formatMessage:r}=T(),o=Js(e),i=Wt("DetailField",h=>h.isSubmitting),d=o.value??"",[u,f]=c.useState(d);c.useEffect(()=>{f(d)},[d]);const g=r({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(X.Root,{name:e,required:n,children:[t.jsx(X.Label,{children:s}),t.jsx(en,{value:u,onChange:h=>{f(h.target.value),o.onChange(e,h.target.value)},endAction:u?void 0:t.jsx(ct,{label:g,children:t.jsx(oo,{"aria-label":g,role:"img"})}),type:"text",disabled:i||a})]})},io=({label:e,rootLabel:s,folders:n,disabled:a})=>{const r=Js("folder"),o=Wt("LocationField",i=>i.isSubmitting);return t.jsxs(X.Root,{name:"folder",required:!0,children:[t.jsx(X.Label,{children:e}),t.jsxs(tn,{value:r.value==null?"":String(r.value),onChange:i=>{const d=i===""?null:Number(i);r.onChange("folder",d)},disabled:o||a,children:[t.jsx(ot,{value:"",children:s}),n.map(i=>t.jsx(ot,{value:String(i.id),children:i.name},i.id))]})]})},lo=()=>{const{formatMessage:e}=T(),{deleteAsset:s,isDeleting:n}=Cn(),[a,r]=c.useState(!1),o=async()=>{await s(),r(!1)},i=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(z.Root,{open:a,onOpenChange:r,children:[t.jsx(z.Trigger,{children:t.jsx(ae,{label:i,variant:"danger-light",children:t.jsx(ut,{})})}),t.jsxs(z.Content,{children:[t.jsx(z.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(z.Body,{icon:t.jsx(gt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(z.Footer,{children:[t.jsx(z.Cancel,{children:t.jsx(G,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(z.Action,{children:t.jsx(G,{variant:"danger-light",loading:n,onClick:o,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},co=({asset:e})=>{const{formatMessage:s}=T(),{copy:n}=qt(),a=wn(),r=async()=>{const o=he(e.url);if(!o)return;const i=await n(o);a({type:i?"success":"danger",message:s(i?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(ae,{label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(ze,{})})},uo=({asset:e})=>{const{formatMessage:s}=T(),n=wn(),[a,r]=c.useState(!1),o=async()=>{const i=he(e.url);if(i){r(!0);try{await mn(i,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(ae,{label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:o,disabled:a,children:t.jsx(sn,{})})},go=({mime:e})=>{const{formatMessage:s}=T(),{replaceAsset:n,isReplacing:a}=Cn(),r=c.useRef(null),[o,i]=c.useState(!1),d=mt({mime:e}),u=()=>{i(!0)},f=()=>{i(!1),r.current?.click()},g=async h=>{const y=h.target.files?.[0];h.target.value="",y&&await n(y)};return t.jsxs(t.Fragment,{children:[t.jsx(Ie,{children:t.jsx("input",{ref:r,type:"file",accept:e??"",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(ae,{label:s({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:a,children:t.jsx(nn,{})}),t.jsx(z.Root,{open:o,onOpenChange:i,children:t.jsxs(z.Content,{children:[t.jsx(z.Header,{children:s({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(z.Body,{textAlign:"center",children:t.jsxs(S,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(z.Footer,{children:[t.jsx(z.Cancel,{children:t.jsx(G,{variant:"tertiary",fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(z.Action,{children:t.jsx(G,{variant:"secondary",onClick:f,fullWidth:!0,children:s({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},po=({onCrop:e})=>{const{formatMessage:s}=T(),n=Wt("AssetImageActions",a=>a.isSubmitting);return t.jsx(S,{direction:"column",gap:2,children:t.jsx(ae,{label:s({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:n||!e,children:t.jsx(Xs,{})})})},ho=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:a}=T(),r=xt(),{canCreate:o,canUpdate:i,canDownload:d,canCopyLink:u}=ce(),{data:f=[]}=Cr(),{toggleNotification:g}=fe(),[h]=kr(),{trackUsage:y}=$e(),[p,{isLoading:m}]=fn(),[M,{isLoading:v}]=$r(),[C,{isLoading:$}]=ja(),[x,I]=c.useState(!1),[A,w]=c.useState(null);c.useEffect(()=>{if(!A)return;const O=window.setTimeout(()=>w(null),5e3);return()=>window.clearTimeout(O)},[A]);const k=c.useCallback(O=>w(O),[]),B=e.mime?.includes(ye.Image),E={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},Y=async O=>{const q={name:O.name,caption:O.caption,alternativeText:O.alternativeText,folder:O.folder},Q=await h({id:e.id,fileInfo:q});if("error"in Q){k({type:"danger",message:r(Q.error,n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."}))});return}y("didEditMediaLibraryElements",{location:ee,type:e.mime?.split("/")[0],changeLocation:O.folder!==E.folder}),k({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:L}=xn(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),b=c.useCallback(async O=>{const q=await p({id:e.id,file:O});if("error"in q){k({type:"danger",message:r(q.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}y("didReplaceMedia",{location:ee}),k({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,n,r,k,p,y]),D=c.useCallback(async()=>{const O=await M(e.id);if("error"in O){k({type:"danger",message:r(O.error,n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."}))});return}g({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:L})}),s()},[e.id,s,M,L,n,r,k,g]),F=O=>{k({type:"danger",message:r(O,n({id:l("asset-details.crop.error"),defaultMessage:"Failed to crop the file."}))})},U=async(O,q)=>{I(!1);const Q=await p({id:e.id,file:O,fileInfo:{focalPoint:q}});if("error"in Q){F(Q.error);return}y("didCropFile",{location:ee,duplicatedFile:!1}),k({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File cropped."})})},V=async(O,q)=>{I(!1);const Q=await C({file:O,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:E.folder,focalPoint:q}});if("error"in Q){F(Q.error);return}y("didCropFile",{location:ee,duplicatedFile:!0}),k({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},H=c.useMemo(()=>({replaceAsset:b,deleteAsset:D,isReplacing:m,isDeleting:v}),[b,D,m,v]);return t.jsx(jn.Provider,{value:k,children:t.jsx(Mn.Provider,{value:H,children:t.jsx(no,{children:t.jsx(wa,{method:"POST",initialValues:E,onSubmit:Y,children:({modified:O,isSubmitting:q,values:Q,resetForm:ie})=>{const xe=(Q.name??"").trim()==="",ge=ro({isDeleting:v,isReplacing:m,isCropCopying:$});return t.jsxs(t.Fragment,{children:[t.jsx(Ma,{onProceed:ie}),x&&B?t.jsx(qr,{asset:e,onClose:()=>I(!1),onApply:U,onSaveAsCopy:V,canSaveAsCopy:o}):null,ge?t.jsx(bn,{children:n(ge)}):null,A?t.jsx(ao,{children:t.jsx(Ht,{variant:A.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>w(null),children:A.message})}):null,t.jsxs(Me.ScrollableContent,{children:[t.jsx(to,{asset:e,actions:B&&i?t.jsx(po,{onCrop:()=>I(!0)}):null}),t.jsxs(S,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(R,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(S,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(we,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(we,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(we,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?rr({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(we,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?Ot(e.size,1):null}),B&&(e.width!=null||e.height!=null)&&t.jsx(we,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(we,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:Zs(e.ext)}),t.jsx(we,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(vt,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!i}),t.jsx(io,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:f,disabled:!i}),t.jsx(vt,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!i}),t.jsx(vt,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!i})]})]}),(i||u||d)&&t.jsxs(S,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(S,{gap:2,children:[i&&t.jsx(lo,{}),u&&t.jsx(co,{asset:e}),d&&t.jsx(uo,{asset:e}),i&&t.jsx(go,{mime:e.mime})]}),i&&t.jsx(G,{type:"submit",variant:"default",loading:q,disabled:!O||q||xe,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},fo=({asset:e,closeDetails:s})=>{const n=e?Ke(e.mime,e.ext):ya;return t.jsxs(S,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(n,{width:20,height:20}),t.jsx(Me.Title,{asChild:!0,children:t.jsx(R,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(_,{marginLeft:"auto",children:t.jsx(Me.CloseButton,{onClose:s,children:t.jsx(ba,{})})})]})},mo=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=T(),{data:a,isLoading:r,error:o}=Ir(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx(S,{justifyContent:"center",padding:8,children:t.jsx(Ce,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):o||!a?t.jsx(S,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(Ht,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(fo,{asset:a,closeDetails:s}),t.jsx(ho,{asset:a,closeDetails:s})]})},xo=()=>{const{formatMessage:e}=T(),{assetId:s,isVisible:n,shouldRenderDrawer:a,onCloseAnimationEnd:r,closeDetails:o}=vn();return!a||s===null?null:t.jsxs(Me.Root,{isVisible:n,onClose:o,children:[t.jsx("div",{children:t.jsxs(Ie,{children:[t.jsx(Me.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(Me.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(Me.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:r,children:t.jsx(mo,{assetId:s,closeDetails:o})})]})},Ve=({children:e,...s})=>{const n=c.useRef(null),[a,r]=c.useState(!1),o=()=>{const d=n.current;d&&r(d.scrollWidth>d.clientWidth)},i=d=>{n.current=d,d&&o()};return t.jsx(ct,{label:a?e:void 0,children:t.jsx(R,{ref:i,ellipsis:!0,onPointerEnter:o,onFocus:o,...s,children:e})})},te=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),be=e=>`asset:${e}`,je=e=>`folder:${e}`,ys=(e,s)=>{const n=new Set;return e.forEach(a=>{const[r,o]=a.split(":");r===s&&n.add(Number(o))}),n},Sn=()=>({selectedKeys:new Set,anchorKey:null}),yo=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},bo=(e,s)=>{const n=new Set(e.selectedKeys);return n.delete(s),{selectedKeys:n,anchorKey:e.anchorKey===s?null:e.anchorKey}},jo=(e,s,n)=>{const a=s.indexOf(n);if(a===-1)return e;const r=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(r===-1)return{selectedKeys:new Set([n]),anchorKey:n};const o=Math.min(r,a),i=Math.max(r,a);return{selectedKeys:new Set(s.slice(o,i+1)),anchorKey:e.anchorKey}},wo=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),Mo=()=>Sn(),Co=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((r,o)=>e.has(o)?r+1:r,0),a=n===s.length;return{allSelected:a,isIndeterminate:n>0&&!a}},ts=c.createContext(null),vo=({children:e,disabled:s=!1})=>{const[n,a]=c.useState(Sn),r=c.useCallback(p=>!s&&n.selectedKeys.has(p),[s,n.selectedKeys]),o=c.useCallback(p=>{s||a(m=>yo(m,p))},[s]),i=c.useCallback((p,m)=>{s||a(M=>jo(M,p,m))},[s]),d=c.useCallback(p=>{s||a(wo(p))},[s]),u=c.useCallback(p=>a(m=>bo(m,p)),[]),f=c.useCallback(()=>a(Mo()),[]),g=c.useMemo(()=>ys(n.selectedKeys,"asset"),[n.selectedKeys]),h=c.useMemo(()=>ys(n.selectedKeys,"folder"),[n.selectedKeys]),y=c.useMemo(()=>({selectedKeys:n.selectedKeys,selectedIds:g,selectedFolderIds:h,anchorKey:n.anchorKey,isSelected:r,toggle:o,selectRange:i,selectAll:d,deselect:u,clear:f}),[n.selectedKeys,g,h,n.anchorKey,r,o,i,d,u,f]);return c.createElement(ts.Provider,{value:y},e)},me=()=>{const e=c.useContext(ts);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},So=()=>c.useContext(ts),Dn=c.createContext(null),Do=({children:e})=>{const[s,n]=c.useState({}),a=c.useCallback((d,u)=>(n(f=>({...f,[d]:u})),()=>n(f=>{const{[d]:g,...h}=f;return h})),[]),r=c.useCallback(d=>s[d]!==void 0,[s]),o=c.useCallback(d=>s[d]??null,[s]),i=c.useMemo(()=>({isBusy:r,getBusyMessage:o,markBusy:a}),[r,o,a]);return c.createElement(Dn.Provider,{value:i},e)},ss=()=>c.useContext(Dn),Io=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},He=()=>{const[{query:e},s]=De(),n=Io(e?.folder),a=c.useCallback(d=>{s({folder:String(d.id),_q:void 0})},[s]),r=c.useCallback(()=>{s({folder:"",_q:""},"remove")},[s]),o=c.useCallback(()=>{s({folder:""},"remove")},[s]);c.useEffect(()=>{e?.folder&&n===null&&o()},[e?.folder,n,o]);const i=c.useCallback(d=>{d==null?r():s({folder:String(d),_q:void 0})},[r,s]);return{currentFolderId:n,navigateToFolder:a,navigateToRoot:r,navigateToFolderId:i}},In=j(N.Content).attrs({maxHeight:"min(var(--radix-popper-available-height, 100vh), 100vh)"})`
  scrollbar-width: thin;
  -ms-overflow-style: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
`,kn=(e,s)=>{for(const n of e){if(n.id===s)return n;const a=kn(n.children,s);if(a)return a}return null},ko=e=>{const s=new Set,n=a=>{for(const r of a.children)r.id!=null&&s.add(r.id),n(r)};return n(e),s},$o=(e,s,n)=>{if(s===n)return!0;const a=kn(e,s);return a?ko(a).has(n):!1},Ao=e=>e.kind==="file"?e.folderId==null:e.parentId==null,Ee=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(r=>!Ao(r));const a=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(a.has(s))return!1;for(const r of a)if($o(n,r,s))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===s||r.kind==="folder"&&r.parentId===s)return!1;return!0},ns=(e,s=new Set,n="")=>e.flatMap(a=>{if(a.id==null||s.has(a.id))return[];const r=n?`${n} / ${a.name??""}`:a.name??"";return[{id:a.id,label:r},...ns(a.children??[],s,r)]}),$n=({formatMessage:e,count:s,source:n,destination:a})=>n===null?e({id:l("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:s,destination:a}):e({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:a}),Ue=e=>e.kind==="folder"?e.parentId:e.folderId,Fo=e=>An(e)?Ue(e[0]):null,An=e=>{if(e.length===0)return!1;const s=Ue(e[0]);return e.every(n=>Ue(n)===s)},Ro=j(Z.Content)`
  max-width: 51.6rem;
`,as=({open:e,onClose:s,items:n,onSuccess:a})=>{const{formatMessage:r}=T(),o=xt(),{toggleNotification:i}=fe(),{data:d=[],isUninitialized:u,isLoading:f,isError:g}=Jt(void 0,{skip:!e}),[h,{isLoading:y}]=pn(),p=c.useMemo(()=>n.filter(D=>D.kind==="file").map(D=>D.id),[n]),m=c.useMemo(()=>n.filter(D=>D.kind==="folder").map(D=>D.id),[n]),M=An(n),v=Fo(n),{data:C}=Xt({id:v},{skip:v===null}),[$,x]=c.useState(""),I=r({id:l("plugin.name"),defaultMessage:"Media Library"}),A=c.useMemo(()=>ns(d,new Set(m)).filter(D=>Ee({items:n,targetFolderId:D.id,folderStructure:d})),[d,m,n]),w=c.useMemo(()=>Ee({items:n,targetFolderId:null,folderStructure:d}),[n,d]),k=w?"":A[0]?.id.toString()??"";c.useEffect(()=>{x(k)},[e,k]);const B=!u&&!f&&!g,E=B&&A.length===0&&!w,Y=n.length,L=async()=>{if(y||!B)return;const D=$===""?null:Number($);try{await h({fileIds:p,folderIds:m,destinationFolderId:D}).unwrap()}catch(V){i({type:"danger",message:o(V,r({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const F=M?v===null?I:C?.name??I:null,U=D===null?I:A.find(V=>V.id===D)?.label??I;i({type:"success",message:$n({formatMessage:r,count:Y,source:F,destination:U})}),a?.(),s()},b=()=>g?t.jsx(R,{textColor:"danger600",children:r({id:l("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):E?t.jsx(R,{textColor:"neutral600",children:r({id:l("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(X.Root,{name:"destination",children:[t.jsx(X.Label,{children:r({id:l("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(tn,{value:$,onChange:D=>x(String(D)),disabled:y||!B,children:[w&&t.jsx(ot,{value:"",children:I}),A.map(D=>t.jsx(ot,{value:String(D.id),children:D.label},D.id))]})]});return t.jsx(Z.Root,{open:e,onOpenChange:D=>{!D&&!y&&s()},children:t.jsxs(Ro,{children:[t.jsx(Z.Header,{children:t.jsx(Z.Title,{children:r({id:l("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(Z.Body,{children:b()}),t.jsx(Z.Footer,{children:t.jsxs(S,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(G,{variant:"tertiary",onClick:s,disabled:y,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{onClick:L,loading:y,disabled:!B||E,children:r({id:l("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},rs=({open:e,onClose:s,target:n,onSuccess:a,onPendingChange:r})=>{const{formatMessage:o}=T(),{toggleNotification:i}=fe(),[d,{isLoading:u}]=Ar(),f=n.fileIds.length+n.folderIds.length;c.useEffect(()=>{r?.(u)},[u,r]);const g=async h=>{if(h.preventDefault(),u)return;if("error"in await d(n)){i({type:"danger",message:o({id:l("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}s(),i({type:"success",message:o({id:l("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:f})}),a?.()};return t.jsx(z.Root,{open:e,onOpenChange:h=>{!h&&!u&&s()},children:t.jsxs(z.Content,{children:[t.jsx(z.Header,{children:o({id:l("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:f})}),t.jsx(z.Body,{icon:t.jsx(gt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(R,{children:o({id:l("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(z.Footer,{children:[t.jsx(z.Cancel,{children:t.jsx(G,{variant:"tertiary",disabled:u,fullWidth:!0,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(z.Action,{children:t.jsx(G,{variant:"danger-light",loading:u,onClick:g,fullWidth:!0,children:o({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},Fn=({asset:e,dragData:s})=>{const{formatMessage:n}=T(),a=xt(),{copy:r}=qt(),{toggleNotification:o}=fe(),{deselect:i}=me(),d=ss()?.markBusy??(()=>()=>{}),{canUpdate:u,canDownload:f,canCopyLink:g,isLoading:h}=ce(),[y,{isLoading:p}]=fn(),m=mt({mime:e.mime}),M=c.useRef(null),[v,C]=c.useState(!1),[$,x]=c.useState(!1),[I,A]=c.useState(!1),[w,k]=c.useState(!1),B=c.useMemo(()=>[s],[s]),E=()=>{C(!1),M.current?.click()},Y=async V=>{const H=V.target.files?.[0];if(V.target.value="",!H)return;const O=d(e.id,n({id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let q;try{q=await y({id:e.id,file:H})}finally{O()}if("error"in q){o({type:"danger",message:a(q.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}o({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},L=async()=>{const V=he(e.url);if(!V)return;const H=await r(V);o({type:H?"success":"danger",message:n(H?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},b=async()=>{const V=he(e.url);if(V){k(!0);try{await mn(V,e.name)}catch{o({type:"danger",message:n({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{k(!1)}}},D=u||g||f,F=u,U=(g||f)&&F;return!h&&!D&&!F?null:t.jsxs(t.Fragment,{children:[t.jsx(Ie,{children:t.jsx("input",{ref:M,type:"file",multiple:!1,onChange:Y,"aria-hidden":!0,tabIndex:-1})}),t.jsxs(N.Root,{modal:!1,children:[t.jsx(N.Trigger,{tag:ae,icon:t.jsx(an,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(In,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[u&&t.jsx(N.Item,{startIcon:t.jsx(nn,{}),disabled:p,onSelect:()=>C(!0),children:n({id:l("list.assets.actions.replace"),defaultMessage:"Replace media"})}),g&&t.jsx(N.Item,{startIcon:t.jsx(ze,{}),onSelect:L,children:n({id:l("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),f&&t.jsx(N.Item,{startIcon:t.jsx(sn,{}),disabled:w,onSelect:b,children:n({id:l("list.assets.actions.download"),defaultMessage:"Download media"})}),U&&t.jsx(N.Separator,{}),u&&t.jsxs(t.Fragment,{children:[t.jsx(N.Item,{startIcon:t.jsx(Gt,{}),onSelect:()=>x(!0),children:n({id:l("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(N.Item,{startIcon:t.jsx(ut,{}),variant:"danger",onSelect:()=>A(!0),children:n({id:l("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]})]}),t.jsx(z.Root,{open:v,onOpenChange:C,children:t.jsxs(z.Content,{children:[t.jsx(z.Header,{children:n({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(z.Body,{textAlign:"center",children:t.jsxs(S,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),m?t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(z.Footer,{children:[t.jsx(z.Cancel,{children:t.jsx(G,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(z.Action,{children:t.jsx(G,{variant:"secondary",onClick:E,fullWidth:!0,children:n({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),$&&t.jsx(as,{open:!0,onClose:()=>x(!1),items:B,onSuccess:()=>i(be(e.id))}),I&&t.jsx(rs,{open:!0,onClose:()=>A(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:()=>i(be(e.id))})]})},Eo=e=>{const s=[],n=[];for(const a of e)a.kind==="file"?s.push(a.id):n.push(a.id);return{fileIds:s,folderIds:n}},bs=(e,s,n)=>{if(s===null)return n;const a=r=>{for(const o of r){if(o.id===s)return o;const i=a(o.children??[]);if(i)return i}return null};return a(e)?.name??n},js=(e,s,n,a)=>{const r=e.kind==="file"?be(e.id):je(e.id),o=Ue(e);if(!s||!s.has(r))return{items:[e],fromSelection:!1,activeSourceFolderId:o,spansMultipleSources:!1};const i=[];return s.forEach(d=>{const u=d.indexOf(":"),f=d.slice(0,u),g=Number(d.slice(u+1));if(f==="asset"){if(e.kind==="file"&&e.id===g){i.push(e);return}i.push({kind:"file",id:g,name:"",folderId:lt(n,"file",g,a)});return}if(e.kind==="folder"&&e.id===g){i.push(e);return}i.push({kind:"folder",id:g,name:"",parentId:lt(n,"folder",g,a)})}),{items:i,fromSelection:!0,activeSourceFolderId:o,spansMultipleSources:i.some(d=>Ue(d)!==o)}},To=(e,s)=>{const n=new Set;if(e.length===0)return n;Ee({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:a}of ns(s))Ee({items:e,targetFolderId:a,folderStructure:s})&&n.add(a);return n},Lo=e=>`file:${e}`,Po=e=>`folder:${e}`,Oo=e=>`folder-target:${e}`,No=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Bo=e=>`folder-tree-target:${e}`,Rn="folder-tree-target:home",_o=e=>{if(typeof e!="string")return null;if(e===Rn)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},St=20,Dt=24,ws=24,En=j(S)`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,Uo=j(En)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,Ms=j(S)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,It=j(S)`
  flex-shrink: 0;
  width: ${ws}px;
  height: ${ws}px;
  align-items: center;
  justify-content: center;
`,zo=j(S)`
  position: absolute;
  top: -${({theme:e})=>e.spaces[2]};
  right: -${({theme:e})=>e.spaces[2]};
  align-items: center;
  justify-content: center;
  min-width: ${({theme:e})=>e.spaces[5]};
  height: ${({theme:e})=>e.spaces[5]};
  padding: 0 ${({theme:e})=>e.spaces[1]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary600};
`,Ko=({items:e})=>{const{formatMessage:s}=T();if(e.length===0)return null;if(e.length===1){const o=e[0],i=o.kind==="folder",d=i?ve:rt,u=i?St:Dt;return t.jsxs(En,{children:[t.jsx(It,{children:t.jsx(d,{width:u,height:u})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:o.name})]})}const n=e.filter(o=>o.kind==="folder").length,a=e.filter(o=>o.kind==="file").length,r=n+a;return t.jsxs(Uo,{gap:3,children:[n>0?t.jsxs(Ms,{children:[t.jsx(It,{children:t.jsx(ve,{width:St,height:St})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,a>0?t.jsxs(Ms,{children:[t.jsx(It,{children:t.jsx(rt,{width:Dt,height:Dt})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:a})})]}):null,t.jsx(zo,{children:t.jsx(R,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:r})})]})},Tn=c.createContext(null),ue=()=>c.useContext(Tn),Cs=e=>{const s=No(e);if(s!=null)return{destinationFolderId:s};const n=_o(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},Vo=Number.MAX_SAFE_INTEGER,Ho=({children:e,locations:s=hn})=>{const{formatMessage:n}=T(),a=xt(),{toggleNotification:r}=fe(),o=So(),{currentFolderId:i}=He(),{data:d=[]}=Jt(),u=n({id:l("plugin.name"),defaultMessage:"Media Library"}),[f,{isLoading:g}]=pn(),[h,y]=c.useState([]),[p,m]=c.useState(""),M=c.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),v=c.useCallback(L=>{m(""),requestAnimationFrame(()=>m(L))},[]),{canUpdate:C}=ce(),$=or(ir(ur,{activationConstraint:{distance:C?8:Vo}})),x=c.useMemo(()=>To(h,d),[h,d]),I=c.useCallback(L=>x.has(L),[x]),A=c.useMemo(()=>({isInternalDragActive:h.length>0,isMovePending:g,isValidDropTarget:I}),[h.length,g,I]),w=c.useCallback(()=>{M.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},y([])},[]),k=c.useCallback(L=>{const b=L.active.data.current;if(!b){w();return}const D=js(b,o?.selectedKeys,s,i);M.current=D,y(D.items)},[w,i,s,o?.selectedKeys]),B=c.useCallback(async L=>{const{over:b}=L,{items:D,fromSelection:F,activeSourceFolderId:U,spansMultipleSources:V}=M.current;if(w(),g||!b||D.length===0)return;const H=Cs(b.id);if(!H)return;const{destinationFolderId:O}=H;if(!Ee({items:D,targetFolderId:O,folderStructure:d}))return;const q=Eo(D),Q=$n({formatMessage:n,count:D.length,source:V?null:bs(d,U,u),destination:bs(d,O,u)}),ie=n({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await f({...q,destinationFolderId:O}).unwrap(),F&&o?.clear(),v(Q),r({type:"success",message:Q})}catch(xe){const ge=a(xe,ie);v(n({id:l("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:ge})),r({type:"danger",message:ge})}},[v,f,w,d,n,a,g,u,o,r]),E=c.useCallback(()=>{w()},[w]),Y=c.useMemo(()=>({onDragStart:({active:L})=>{const b=L.data.current;return b?n({id:l("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:b.name}):""},onDragOver:()=>"",onDragEnd:({active:L,over:b})=>{if(!b)return n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const D=Cs(b.id),F=L.data.current;if(!D||!F)return"";const{items:U}=js(F,o?.selectedKeys,s,i);return Ee({items:U,targetFolderId:D.destinationFolderId,folderStructure:d})?"":n({id:l("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[i,d,n,s,o?.selectedKeys]);return t.jsx(Tn.Provider,{value:A,children:t.jsxs(lr,{sensors:$,collisionDetection:dr,onDragStart:k,onDragEnd:B,onDragCancel:E,accessibility:{announcements:Y},children:[t.jsx(Ie,{"aria-live":"polite","aria-atomic":"true",children:p}),t.jsx(S,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(cr,{dropAnimation:null,children:h.length>0?t.jsx(Ko,{items:h}):null})]})})},Ln=e=>{const{isMovePending:s}=ue()??{isMovePending:!1},n=c.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:it(e.folder)}),[e.folder,e.id,e.name]);return{...cn({id:Lo(e.id),data:n,disabled:s}),dragData:n}},Pn=e=>{const{isMovePending:s,isValidDropTarget:n}=ue()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=dn(),r=it(e.parent),o=c.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),i=c.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=cn({id:Po(e.id),data:o,disabled:s}),u=un({id:Oo(e.id),data:i,disabled:s}),f=n(e.id),g=u.isOver,h=g&&f,y=g&&!f&&a!=null;return{dragData:o,draggable:d,droppable:u,isDragging:d.isDragging,showValidDropHighlight:h,showInvalidDropCursor:y}},Wo=j(Z.Content)`
  max-width: 51.6rem;
`,On=e=>{const{open:s,parentFolderId:n,onClose:a,mode:r}=e,o=e.mode==="rename"?e.initialName:"",{formatMessage:i}=T(),{toggleNotification:d}=fe(),{trackUsage:u}=$e(),[f,g]=c.useState(o),[h,y]=c.useState(),p=c.useRef(null),[m,{isLoading:M}]=jr(),[v,{isLoading:C}]=wr(),$=r==="rename"?C:M;c.useEffect(()=>{s&&(g(o),y(void 0),r==="rename"&&p.current?.select())},[s,o,r]);const x=async I=>{I.preventDefault();const A=f.trim();if(!A){y(i({id:l("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?(await v({id:e.folderId,name:A,parent:n}).unwrap(),u("didEditMediaLibraryElements",{location:ee,type:"folder",changeLocation:!1})):(await m({name:A,parent:n}).unwrap(),u("didAddMediaLibraryFolders",{location:ee})),d({type:"success",message:i(r==="rename"?{id:l("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:l("folder.create.success"),defaultMessage:"Folder has been created"})}),a()}catch(w){const k=w;k?.message?y(k.message):d({type:"danger",message:i(r==="rename"?{id:l("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:l("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(Z.Root,{open:s,onOpenChange:a,children:t.jsxs(Wo,{children:[t.jsx(Z.Header,{children:t.jsx(Z.Title,{children:e.mode==="rename"?i({id:l("folder.rename.title"),defaultMessage:"Rename folder"}):i({id:l("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:x,children:[t.jsx(Z.Body,{children:t.jsxs(X.Root,{error:h,name:"name",required:!0,children:[t.jsx(X.Label,{children:i({id:l("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(en,{ref:p,value:f,onChange:I=>{g(I.target.value),y(void 0)},autoFocus:!0}),t.jsx(X.Error,{})]})}),t.jsx(Z.Footer,{children:t.jsxs(S,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(G,{variant:"tertiary",onClick:a,type:"button",children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",loading:$,disabled:r==="rename"&&f.trim()===o.trim(),children:i(r==="rename"?{id:l("folder.rename.submit"),defaultMessage:"Save"}:{id:l("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Nn=({folder:e,dragData:s})=>{const{formatMessage:n}=T(),{copy:a}=qt(),{toggleNotification:r}=fe(),{deselect:o}=me(),[i,d]=c.useState(!1),[u,f]=c.useState(!1),[g,h]=c.useState(!1),y=c.useMemo(()=>[s],[s]),p=async()=>{const m=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,M=await a(m);r({type:M?"success":"danger",message:n(M?{id:l("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:l("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})};return t.jsxs(t.Fragment,{children:[t.jsxs(N.Root,{modal:!1,children:[t.jsx(N.Trigger,{tag:ae,icon:t.jsx(an,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(In,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[t.jsx(N.Item,{startIcon:t.jsx(ze,{}),onSelect:p,children:n({id:l("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(N.Separator,{}),t.jsx(N.Item,{startIcon:t.jsx(Ca,{}),onSelect:()=>d(!0),children:n({id:l("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(N.Item,{startIcon:t.jsx(Gt,{}),onSelect:()=>f(!0),children:n({id:l("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(N.Item,{startIcon:t.jsx(ut,{}),variant:"danger",onSelect:()=>h(!0),children:n({id:l("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]})]}),i&&t.jsx(On,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:s.parentId,onClose:()=>d(!1)}),u&&t.jsx(as,{open:!0,onClose:()=>f(!1),items:y,onSuccess:()=>o(je(e.id))}),g&&t.jsx(rs,{open:!0,onClose:()=>h(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:()=>o(je(e.id))})]})},Re=e=>{te(e)&&e.stopPropagation()},qo=j(S)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,Go=j(Sa)`
  border: 1px solid
    ${({theme:e,$isSelected:s})=>s?e.colors.primary600:e.colors.neutral200};
  border-radius: 8px;
  overflow: hidden;
  cursor: ${({$isMovePending:e,$isBusy:s})=>e||s?"wait":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  /* No opacity change while busy — the overlay does the dimming, and stacking
     one on the other would wash the card out. */
  pointer-events: ${({$isMovePending:e,$isBusy:s})=>e||s?"none":"auto"};
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:void 0};
  /* Shift+click range selection must not highlight card text. */
  user-select: none;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,Yo=j(_)`
  grid-column: 1 / -1;
`,Qo=j(S)`
  width: 100%;
  user-select: none;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`}; // 8px 12px
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]}; // 8px
  border: 1px solid
    ${({theme:e,$isSelected:s})=>s?e.colors.primary600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isInvalidDropTarget:s})=>e?"wait":s?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  transition: background 0.2s;

  ${({$isValidDropTarget:e,theme:s})=>e&&Te`
      background: ${s.colors.primary100};
      border: 1px dashed ${s.colors.primary600};
    `}

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,Zo=j(S)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,Xo=j(Ve)`
  flex: 1;
  min-width: 0;
`,Jo=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=T(),{navigateToFolder:a}=He(),{isMovePending:r}=ue()??{isMovePending:!1},{isSelected:o,toggle:i,selectRange:d}=me(),{canUpdate:u}=ce(),{dragData:f,draggable:{attributes:g,listeners:h,setNodeRef:y,isDragging:p},droppable:{setNodeRef:m},showValidDropHighlight:M,showInvalidDropCursor:v}=Pn(e),C=je(e.id),$=w=>{y(w),m(w)},x=w=>{te(w)&&(w.shiftKey?d(s,C):w.metaKey||w.ctrlKey?i(C):a(e))},I=w=>{te(w)&&(w.key==="Enter"?(w.preventDefault(),a(e)):w.key===" "&&(w.preventDefault(),i(C)))},A=w=>{w.stopPropagation(),w.shiftKey?d(s,C):i(C)};return t.jsxs(Qo,{ref:$,...g,...h,$isDragging:p,$isMovePending:r,$isValidDropTarget:M,$isInvalidDropTarget:v,$isSelected:o(C),onClick:x,onKeyDown:I,onPointerDown:w=>{te(w)&&h?.onPointerDown?.(w)},role:"listitem",tabIndex:0,children:[u&&t.jsx(S,{onKeyDown:w=>w.stopPropagation(),children:t.jsx(ke,{checked:o(C),onClick:A,"aria-label":n({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Zo,{children:t.jsx(ve,{width:20,height:20})}),t.jsx(Xo,{textColor:"neutral800",children:e.name}),t.jsx(S,{onClick:Re,onKeyDown:Re,onPointerDown:Re,children:t.jsx(Nn,{folder:e,dragData:f})})]})},vs=j(_)`
  position: relative;
  width: 100%;
  padding-bottom: 62.5%;
  height: 0;
  overflow: hidden;
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      transparent 0% 50%
    )
    50% / 20px 20px;
`,ei=j.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ti=j(S)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,si=({asset:e})=>{const{alternativeText:s,ext:n,formats:a,mime:r,url:o,updatedAt:i,isLocal:d,isUrlSigned:u}=e;if(r?.includes(ye.Image)){const g=i&&!u?new Date(i).getTime():void 0,h=m=>g===void 0?m:m.includes("?")?`${m}&v=${g}`:`${m}?v=${g}`,y=he(a?.thumbnail?.url)??he(o),p=y&&h(y);if(p)return t.jsx(vs,{children:t.jsx(ei,{src:p,alt:s||"",crossOrigin:!d&&u?"anonymous":void 0,draggable:!1,onDragStart:m=>m.preventDefault()})})}const f=Ke(r,n);return t.jsx(vs,{children:t.jsx(ti,{justifyContent:"center",alignItems:"center",children:t.jsx(f,{width:48,height:48})})})},ni=j(Da)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ai=j(S)`
  min-width: 0;
  width: 100%;
`,ri=j(S)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,oi=j(Ve)`
  flex: 1;
  min-width: 0;
`,ii=j.button`
  display: inline-flex;
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
  color: inherit;
  font: inherit;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,li=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:a}=T(),r=Ke(e.mime,e.ext),{isMovePending:o}=ue()??{isMovePending:!1},{attributes:i,listeners:d,setNodeRef:u,isDragging:f,dragData:g}=Ln(e),{isSelected:h,toggle:y,selectRange:p}=me(),{canUpdate:m}=ce(),M=ss()?.getBusyMessage(e.id)??null,v=be(e.id),C=h(v),$=w=>{te(w)&&(w.shiftKey?p(s,v):w.metaKey||w.ctrlKey?y(v):n(e.id))},x=w=>{te(w)&&(w.key==="Enter"?(w.preventDefault(),n(e.id)):w.key===" "&&(w.preventDefault(),y(v)))},I=w=>{w.stopPropagation(),n(e.id)},A=w=>{w.stopPropagation(),w.shiftKey?p(s,v):y(v)};return t.jsxs(Go,{ref:u,...i,...d,$isDragging:f,$isMovePending:o,$isBusy:M!==null,$isSelected:C,tabIndex:0,role:"listitem",onDragStart:w=>w.preventDefault(),onClick:$,onKeyDown:x,onPointerDown:w=>{te(w)&&d?.onPointerDown?.(w)},children:[t.jsxs(ni,{children:[m&&t.jsx(qo,{onKeyDown:w=>w.stopPropagation(),children:t.jsx(ke,{checked:C,onClick:A,"aria-label":a({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(si,{asset:e}),M!==null?t.jsx(bn,{zIndex:2,children:M}):null]}),t.jsx(va,{children:t.jsxs(ai,{alignItems:"center",gap:2,children:[t.jsx(ri,{children:t.jsx(r,{width:20,height:20})}),t.jsx(ii,{type:"button",onClick:I,children:t.jsx(oi,{textColor:"primary800",children:e.name})}),t.jsx(S,{onClick:Re,onKeyDown:Re,onPointerDown:Re,children:t.jsx(Fn,{asset:e,dragData:g})})]})})]})},di=({assets:e,folders:s=[],onAssetItemClick:n})=>{const a=s.length+e.length,r=[...s.map(o=>je(o.id)),...e.map(o=>be(o.id))];return a===0?null:t.jsxs(Ze.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(Yo,{children:t.jsx(Ze.Root,{gap:4,children:s.map(o=>t.jsx(Ze.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(Jo,{folder:o,orderedItemKeys:r})},`folder-${o.id}`))})}),e.map(o=>t.jsx(Ze.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(li,{asset:o,orderedItemKeys:r,onAssetItemClick:n})},o.id))]})},Bn=()=>{const[{query:e},s]=De(),n=e?._q??"",a=c.useCallback(o=>{o?s({_q:Zt(o)},"push",!0):s({_q:""},"remove",!0)},[s]),r=c.useCallback(()=>a(""),[a]);return{searchQuery:n,isSearching:n!=="",setSearchQuery:a,clearSearch:r}},ci=300,ui=j($a)`
  > div {
    border: none;
  }
`,gi=()=>{const{formatMessage:e}=T(),{searchQuery:s,setSearchQuery:n}=Bn(),{trackUsage:a}=$e(),r=rn(),[o,i]=c.useState(s),d=Ia(o,ci),u=c.useRef(s),[{query:f}]=De(),g=f?.folder??"",h=c.useRef(g);c.useEffect(()=>{d!==u.current&&(u.current=d,d&&a("didSearchMediaLibraryElements",{location:ee}),n(d))},[d,n,a]),c.useEffect(()=>{s!==u.current&&(u.current=s,i(s))},[s]),c.useEffect(()=>{g!==h.current&&(h.current=g,u.current=s,i(s))},[g,s]);const y=t.jsx(ui,{onSubmit:p=>p.preventDefault(),children:t.jsx(ka,{name:"search-assets",value:o,onChange:p=>i(p.target.value),onClear:()=>i(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:l("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:l("search.label"),defaultMessage:"Search for an asset"})})});return r?t.jsx(_,{width:"100%",children:y}):y},pi={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},Be={GRID:0,TABLE:1},Ss=[{name:"name",label:{id:l("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:l("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:l("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:l("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:l("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],hi=j(Ra)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;

  /* Below desktop only the name column remains. A fixed layout makes a long
     name ellipsize instead of widening the table past the viewport — the
     checkbox (first) and actions (last) columns keep a fixed width and the name
     takes the rest. Desktop keeps the content-sized auto layout. */
  table-layout: fixed;

  & td:last-child,
  & th:last-child {
    width: 5.6rem;
    white-space: nowrap;
  }

  ${({theme:e})=>e.breakpoints.large} {
    table-layout: auto;

    & td:last-child,
    & th:last-child {
      width: auto;
      white-space: normal;
    }
  }
`,fi=j(Ea)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Nt=j(Ta)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,oe=j(La)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,_n=j.tr`
  height: 48px;
  user-select: none;
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isBusy:s,$isInvalidDropTarget:n})=>e||s?"wait":n?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e,$isBusy:s})=>e||s?.4:1};
  pointer-events: ${({$isMovePending:e,$isBusy:s})=>e||s?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&Te`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }

  &:last-child {
    ${oe} {
      border-bottom: 0;
    }
  }
`,Un=j(oe)`
  width: 5.6rem;
  white-space: nowrap;
`,mi=j(Nt)`
  width: 5.6rem;
  white-space: nowrap;
`,xi=j(gt)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,yi=j.button`
  display: inline-flex;
  max-width: 100%;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
  color: inherit;
  font: inherit;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,de=e=>{te(e)&&e.stopPropagation()},bi=({asset:e})=>{const{ext:s,mime:n}=e,a=Ke(n,s);return t.jsx(S,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(a,{width:20,height:20})})},Ds=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const a=Yt(),{formatDate:r,formatMessage:o}=T(),{isMovePending:i}=ue()??{isMovePending:!1},{attributes:d,listeners:u,setNodeRef:f,isDragging:g,dragData:h}=Ln(e),{isSelected:y,toggle:p,selectRange:m}=me(),{canUpdate:M}=ce(),v=ss()?.getBusyMessage(e.id)??null,C=be(e.id),$=y(C),x=!e.caption||!e.alternativeText,I=o({id:l("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),A=E=>{te(E)&&(E.shiftKey?m(s,C):E.metaKey||E.ctrlKey?p(C):n(e.id))},w=E=>{te(E)&&(E.key==="Enter"?(E.preventDefault(),n(e.id)):E.key===" "&&(E.preventDefault(),p(C)))},k=E=>{E.stopPropagation(),n(e.id)},B=E=>{E.stopPropagation(),E.shiftKey?m(s,C):p(C)};return t.jsxs(_n,{ref:f,...d,...u,$isDragging:g,$isMovePending:i,$isBusy:v!==null,$isSelected:$,tabIndex:0,role:"row",onDragStart:E=>E.preventDefault(),onClick:A,onKeyDown:w,onPointerDown:E=>{te(E)&&u?.onPointerDown?.(E)},children:[M&&t.jsx(Un,{onClick:de,onKeyDown:de,children:t.jsx(S,{children:t.jsx(ke,{checked:$,onClick:B,"aria-label":o({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(oe,{children:t.jsxs(S,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs(S,{gap:3,alignItems:"center",minWidth:0,children:[v!==null?t.jsx(S,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx(Ce,{small:!0,children:v})}):t.jsx(bi,{asset:e}),t.jsxs(S,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(yi,{type:"button",onClick:k,children:t.jsx(Ve,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})}),!a&&t.jsx(R,{textColor:"neutral600",variant:"pi",children:e.size?Ot(e.size,1):"-"})]})]}),x&&t.jsx(ct,{label:I,children:t.jsx(xi,{"aria-label":I,role:"img"})})]})}),a&&t.jsxs(t.Fragment,{children:[t.jsx(oe,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(oe,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(oe,{children:t.jsx(R,{textColor:"neutral600",children:e.size?Ot(e.size,1):"-"})})]}),t.jsx(oe,{onClick:de,onKeyDown:de,onPointerDown:de,children:t.jsx(S,{justifyContent:"flex-end",children:t.jsx(Fn,{asset:e,dragData:h})})})]})},ji=j(_n)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Is=({folder:e,orderedItemKeys:s})=>{const n=Yt(),{formatDate:a,formatMessage:r}=T(),{navigateToFolder:o}=He(),{isSelected:i,toggle:d,selectRange:u}=me(),{canUpdate:f}=ce(),{isMovePending:g}=ue()??{isMovePending:!1},{dragData:h,draggable:{attributes:y,listeners:p,setNodeRef:m,isDragging:M},droppable:{setNodeRef:v},showValidDropHighlight:C,showInvalidDropCursor:$}=Pn(e),x=je(e.id),I=k=>{te(k)&&(k.shiftKey?u(s,x):k.metaKey||k.ctrlKey?d(x):o(e))},A=k=>{te(k)&&(k.key==="Enter"?(k.preventDefault(),o(e)):k.key===" "&&(k.preventDefault(),d(x)))},w=k=>{k.stopPropagation(),k.shiftKey?u(s,x):d(x)};return t.jsxs(ji,{ref:k=>{m(k),v(k)},...y,...p,$isDragging:M,$isMovePending:g,$isValidDropTarget:C,$isInvalidDropTarget:$,$isSelected:i(x),tabIndex:0,role:"row",onDragStart:k=>{te(k)&&k.preventDefault()},onClick:I,onKeyDown:A,onPointerDown:k=>{te(k)&&p?.onPointerDown?.(k)},children:[f&&t.jsx(Un,{onClick:de,onKeyDown:de,children:t.jsx(S,{children:t.jsx(ke,{checked:i(x),onClick:w,"aria-label":r({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(oe,{children:t.jsxs(S,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx(S,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(ve,{width:20,height:20})}),t.jsx(Ve,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})]})}),n&&t.jsxs(t.Fragment,{children:[t.jsx(oe,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(oe,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(oe,{children:t.jsx(R,{textColor:"neutral600",children:"-"})})]}),t.jsx(oe,{onClick:de,onKeyDown:de,onPointerDown:de,children:t.jsx(S,{justifyContent:"flex-end",children:t.jsx(Nn,{folder:e,dragData:h})})})]})},wi=({assets:e,folders:s=[],mixedItems:n=null,onAssetItemClick:a})=>{const r=Yt(),{formatMessage:o}=T(),{selectedKeys:i,selectAll:d,clear:u}=me(),{canUpdate:f}=ce(),{trackUsage:g}=$e(),h=r?Ss:Ss.filter(x=>x.name==="name"||x.name==="actions"),y=f,p=h.length+(y?1:0),m=s.length+e.length,M=n?n.map(x=>x.kind==="folder"?je(x.folder.id):be(x.asset.id)):[...s.map(x=>je(x.id)),...e.map(x=>be(x.id))],{allSelected:v,isIndeterminate:C}=Co(i,M),$=()=>{v?u():(g("didSelectAllMediaLibraryElements"),d(M))};return m===0?null:t.jsxs(hi,{colCount:p,rowCount:(n?n.length:m)+1,children:[t.jsx(fi,{children:t.jsxs(Aa,{children:[y&&t.jsx(mi,{children:t.jsx(S,{children:t.jsx(ke,{checked:C?"indeterminate":v,disabled:M.length===0,onCheckedChange:$,"aria-label":o({id:l("list.table.header.select-all"),defaultMessage:"Select all"})})})}),h.map(x=>{const I=o(x.label);return"isVisuallyHidden"in x&&x.isVisuallyHidden?t.jsx(Nt,{children:t.jsx(Ie,{children:o({id:l("table.header.actions"),defaultMessage:"actions"})})},x.name):t.jsx(Nt,{children:t.jsx(R,{textColor:"neutral600",variant:"sigma",children:I})},x.name)})]})}),t.jsxs(Fa,{children:[n?.map(x=>x.kind==="folder"?t.jsx(Is,{folder:x.folder,orderedItemKeys:M},`folder-${x.folder.id}`):t.jsx(Ds,{asset:x.asset,orderedItemKeys:M,onAssetItemClick:a},x.asset.id)),!n&&s.map(x=>t.jsx(Is,{folder:x,orderedItemKeys:M},`folder-${x.id}`)),!n&&e.map(x=>t.jsx(Ds,{asset:x,orderedItemKeys:M,onAssetItemClick:a},x.id))]})]})},Mi=(e,s,n,a)=>{const r=[];return e.forEach(o=>{r.push({kind:"file",id:o,name:"",folderId:lt(n,"file",o,a)})}),s.forEach(o=>{r.push({kind:"folder",id:o,name:"",parentId:lt(n,"folder",o,a)})}),r},Ci=j(S)`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndices.popover};
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[2]} ${e.spaces[3]} ${e.spaces[6]}`};
  background: ${({theme:e})=>e.colors.neutral0};
  border: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 0;
  box-shadow: ${({theme:e})=>e.shadows.popupShadow};

  ${({theme:e})=>e.breakpoints.medium} {
    left: 50%;
    right: auto;
    bottom: ${({theme:e})=>e.spaces[4]};
    transform: translateX(-50%);
    border: 1px solid ${({theme:e})=>e.colors.neutral150};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
`,vi=j(S)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,Si=j(_)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Di=({assets:e=[],locations:s=hn})=>{const{formatMessage:n}=T(),{toggleNotification:a}=fe(),r=mt(),{canUpdate:o}=ce(),{selectedIds:i,selectedFolderIds:d,clear:u}=me(),{currentFolderId:f}=He(),g=Rr(),[h,{isLoading:y}]=Pa(),[p,m]=c.useState(!1),[M,v]=c.useState(!1),[C,$]=c.useState(!1),x=i.size+d.size,I=C||y,A=c.useMemo(()=>Mi(i,d,s,f),[i,d,s,f]),w=i.size>fs,k=c.useMemo(()=>{const L=new Map(e.map(({id:b,mime:D})=>[b,D]));return[...i].filter(b=>gn(L.get(b))).length},[e,i]),B=i.size>0&&k===0;let E;w?E=n({id:l("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:fs}):B&&(E=n({id:l("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const Y=async()=>{if(y||w||B)return;const L=Array.from(i),b=await h({fileIds:L});if("error"in b){a({type:"danger",message:n({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const D=b.data.filter(({status:H})=>H==="success").length,F=b.data.filter(({status:H})=>H==="skipped").length,U=b.data.filter(({status:H})=>H==="error").length,V=d.size;if(U===b.data.length){a({type:"danger",message:n({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}a(F===0&&U===0&&V===0?{type:"success",message:n({id:l("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:D})}:{type:"warning",message:n({id:l("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:D,skippedCount:F,errorCount:U,folderCount:V})}),u()};return x===0||!o||g?null:t.jsxs(Ci,{tag:"section",role:"region","aria-label":n({id:l("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(R,{fontWeight:"bold",textColor:"neutral800",marginRight:4,children:n({id:l("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:x})}),t.jsxs(vi,{children:[r&&t.jsx(ct,{label:E,children:t.jsx(_,{children:t.jsx(G,{size:"S",startIcon:t.jsx(Oa,{}),disabled:I||i.size===0||w||B,loading:y,onClick:Y,children:n({id:l("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(ae,{variant:"tertiary",disabled:I,label:n({id:l("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>v(!0),children:t.jsx(Gt,{})}),t.jsx(as,{open:M,onClose:()=>v(!1),items:A,onSuccess:u}),t.jsx(ae,{variant:"danger-light",disabled:I,label:n({id:l("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>m(!0),children:t.jsx(ut,{})}),t.jsx(rs,{open:p,onClose:()=>m(!1),target:{fileIds:Array.from(i),folderIds:Array.from(d)},onSuccess:u,onPendingChange:$})]}),t.jsx(Si,{"aria-hidden":!0}),t.jsx(ae,{variant:"ghost",label:n({id:l("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:u,disabled:I,children:t.jsx(pt,{})})]})},zn=c.createContext(null),Ii=j(_)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,ki=({children:e,onDrop:s,disabled:n=!1})=>{const[a,r]=c.useState(!1),o=c.useRef(0),i={isDragging:a};c.useEffect(()=>{const h=()=>{r(!1),o.current=0},y=p=>{p.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",h),document.addEventListener("dragleave",y),()=>{document.removeEventListener("dragend",h),document.removeEventListener("dragleave",y)}},[]);const d=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),!n&&h.dataTransfer.types.includes("Files")&&(o.current+=1,r(!0))},[n]),u=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),f=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),h.dataTransfer.dropEffect="copy"},[]),g=c.useCallback(h=>{if(h.preventDefault(),h.stopPropagation(),r(!1),o.current=0,n)return;const{files:y}=h.dataTransfer;y?.length&&s&&s(Array.from(y))},[s,n]);return t.jsx(zn.Provider,{value:i,children:t.jsx(Ii,{"data-testid":"assets-dropzone",onDragEnter:d,onDragLeave:u,onDragOver:f,onDrop:g,children:e})})},Kn=()=>{const e=c.useContext(zn);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},$i=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Ai=j(_)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>$i(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Fi=({children:e})=>{const{isDragging:s}=Kn(),a=ue()?.isInternalDragActive??!1,r=s&&!a;return t.jsxs(_,{position:"relative",children:[r&&t.jsx(Ai,{}),e]})},Ri=j(_)`
  position: fixed;
  bottom: ${({theme:e})=>e.spaces[8]};
  left: 50%;
  transform: translateX(calc(-50% + ${({$leftContentWidth:e})=>e/2}px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spaces[2]};
  background: ${({theme:e})=>e.colors.primary600};
  padding: ${({theme:e})=>e.spaces[4]} ${({theme:e})=>e.spaces[6]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 2;
`,Ei=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=T(),{isDragging:a}=Kn(),o=ue()?.isInternalDragActive??!1,i=a&&!o,[d,u]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const f=()=>{const h=e.current?.getBoundingClientRect();h&&u(y=>y!==h.left?h.left:y)};f();const g=new ResizeObserver(f);return g.observe(e.current),()=>g.disconnect()},[e]),i?t.jsxs(Ri,{$leftContentWidth:d,children:[t.jsx(R,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(S,{gap:2,alignItems:"center",children:[t.jsx(ve,{width:20,height:20,fill:"neutral0"}),t.jsx(R,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},Ti=({onAddAssets:e,canAddAssets:s,searchQuery:n,onClearSearch:a})=>{const{formatMessage:r}=T(),o=!!n;return t.jsxs(S,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(on,{width:"16rem",height:"8.8rem"}),t.jsxs(S,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(R,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:r(o?{id:l("list.search.empty.title"),defaultMessage:"No results found"}:{id:l("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(R,{textColor:"neutral600",children:o?r({id:l("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:n}):r({id:l("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),o?t.jsx(G,{variant:"secondary",startIcon:t.jsx(pt,{"aria-hidden":!0}),onClick:a,children:r({id:l("list.search.empty.clear"),defaultMessage:"Clear search"})}):s&&t.jsx(G,{onClick:e,children:r({id:l("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},Li=({onClearFilters:e})=>{const{formatMessage:s}=T();return t.jsxs(S,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(on,{width:"16rem",height:"8.8rem"}),t.jsx(R,{textColor:"neutral600",children:s({id:l("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(G,{variant:"secondary",startIcon:t.jsx(pt,{"aria-hidden":!0}),onClick:e,children:s({id:l("list.filters.clear"),defaultMessage:"Clear filters"})})]})},os=["folder","picture","audio","video","document"],is=["1day","3days","1week","1month","3months","6months","1year"],Pi={created:"createdAt",updated:"updatedAt"},Oi={createdAt:"created",updatedAt:"updated"},ks={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},Ni={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},$s={rangeis:"is",rangenot:"isNot"},Bi={is:"rangeis",isNot:"rangenot"},As=/^\d{4}-\d{2}-\d{2}$/,_i=e=>os.includes(e),Ui=e=>is.includes(e),zi=e=>{const[s,n,a]=e.split(":");if(!s||!n||!a)return null;if(s==="type"){if(n!=="is"&&n!=="not")return null;const o=a.split(",").filter(_i);return o.length>0?{kind:"type",condition:n==="is"?"is":"isNot",values:o}:null}const r=Pi[s];if(!r)return null;if(n in ks)return Ui(a)?{kind:"date",field:r,mode:"preset",condition:ks[n],preset:a}:null;if(n in $s){const[o,i]=a.split("..");return As.test(o??"")&&As.test(i??"")?{kind:"date",field:r,mode:"range",condition:$s[n],from:o,to:i}:null}return null},Ki=e=>typeof e!="string"||e===""?[]:e.split(";").map(zi).filter(s=>s!==null),Vi=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const s=Oi[e.field];return e.mode==="preset"?`${s}:${Ni[e.condition]}:${e.preset}`:`${s}:${Bi[e.condition]}:${e.from}..${e.to}`},Fs=e=>e.map(Vi).join(";"),Hi=()=>{const[{query:e},s]=De(),n=Ki(e?.filters),a=r=>{r.length===0?s({filters:""},"remove",!0):s({filters:Fs(r)},"push",!0)};return{filters:n,serialized:Fs(n),addFilter:r=>a([...n,r]),updateFilter:(r,o)=>a(n.map((i,d)=>d===r?o:i)),removeFilter:r=>a(n.filter((o,i)=>i!==r)),clearFilters:()=>a([])}},Bt={picture:"image",audio:"audio",video:"video"},Rs=Object.values(Bt),Wi={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},qi=(e,s)=>{const{days:n=0,months:a=0,years:r=0}=Wi[s],o=new Date(e.getTime());if(r||a){const i=o.getDate();o.setDate(1),o.setFullYear(o.getFullYear()-r),o.setMonth(o.getMonth()-a);const d=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();o.setDate(Math.min(i,d))}return o.setDate(o.getDate()-n),o},Es=e=>{const s=new Date(e.getTime());return s.setHours(0,0,0,0),s},Ts=e=>{const s=new Date(e.getTime());return s.setHours(23,59,59,999),s},dt=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},Gi=(e,s)=>{const{field:n}=e;if(e.mode==="preset"){const o=qi(s,e.preset);switch(e.condition){case"withinLast":return{[n]:{$gte:o.toISOString()}};case"notWithinLast":return{[n]:{$lt:o.toISOString()}};case"isExactly":return{[n]:{$gte:Es(o).toISOString(),$lte:Ts(o).toISOString()}}}}const a=Es(dt(e.from)).toISOString(),r=Ts(dt(e.to)).toISOString();return e.condition==="is"?{[n]:{$gte:a,$lte:r}}:{$or:[{[n]:{$lt:a}},{[n]:{$gt:r}}]}},Yi=e=>{const s=e.values.filter(r=>r!=="folder");if(s.length===0)return null;const n=s.map(r=>r==="document"?{$and:Rs.map(o=>({mime:{$notContains:o}}))}:{mime:{$contains:Bt[r]}});if(e.condition==="is")return n.length===1?n[0]:{$or:n};const a=s.map(r=>r==="document"?{$or:Rs.map(o=>({mime:{$contains:o}}))}:{mime:{$notContains:Bt[r]}});return a.length===1?a[0]:{$and:a}},Qi=(e,s)=>{const n=[],a=[];let r=!0,o=!0;for(const i of e){if(i.kind==="date"){const f=Gi(i,s);n.push(f),a.push(f);continue}const d=i.values.includes("folder");(i.condition==="is"?!d:d)&&(r=!1);const u=Yi(i);u?n.push(u):i.condition==="is"&&(o=!1)}return{fileClauses:n,folderClauses:a,showFolders:r,showFiles:o}},Zi=j.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: pointer;
  font: inherit;
  color: ${({theme:e,$isEdge:s,$isMuted:n})=>s?e.colors.primary600:n?e.colors.neutral400:e.colors.neutral800};
  background: ${({theme:e,$inRange:s,$isEdge:n})=>n?e.colors.primary200:s?e.colors.primary100:"transparent"};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,Ls=e=>{const s=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`},Xi=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},Ji=(e,s)=>{const n=new Date(e,s,1),a=new Date(n.getTime());a.setDate(n.getDate()-(n.getDay()+6)%7);const r=[],o=new Date(a.getTime());do{const i=[];for(let d=0;d<7;d+=1)i.push(new Date(o.getTime())),o.setDate(o.getDate()+1);r.push(i)}while(o.getMonth()===s&&o.getFullYear()===e);return r},_t=({from:e,to:s,onSelect:n})=>{const{formatMessage:a,formatDate:r}=T(),o=e?Xi(e):new Date,[i,d]=c.useState(o.getFullYear()),[u,f]=c.useState(o.getMonth()),[g,h]=c.useState(null),y=g??e??null,p=g?null:s??null,m=$=>{const x=new Date(i,u+$,1);d(x.getFullYear()),f(x.getMonth())},M=$=>{const x=Ls($);if(!g){h(x);return}const[I,A]=x<g?[x,g]:[g,x];h(null),n(I,A)},v=Ji(i,u),C=v[0].map($=>r($,{weekday:"short"}).slice(0,2));return t.jsxs(_,{padding:2,width:"100%",role:"group","aria-label":a({id:l("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs(S,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(ae,{variant:"ghost",label:a({id:l("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>m(-1),children:t.jsx(Na,{})}),t.jsx(R,{fontWeight:"semiBold",textColor:"neutral800",children:r(new Date(i,u,1),{month:"long",year:"numeric"})}),t.jsx(ae,{variant:"ghost",label:a({id:l("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>m(1),children:t.jsx(Ba,{})})]}),t.jsx(S,{children:C.map(($,x)=>t.jsx(S,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(R,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:$})},x))}),v.map(($,x)=>t.jsx(S,{children:$.map(I=>{const A=Ls(I),w=A===y||A===p,k=y!==null&&p!==null&&A>y&&A<p;return t.jsxs(Zi,{type:"button",$isEdge:w,$inRange:k,$isMuted:I.getMonth()!==u,onClick:()=>M(I),children:[t.jsx(Ie,{children:r(I,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:I.getDate()})]},A)})},x))]})},Ut={folder:{id:l("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:l("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:l("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:l("list.filters.type.video"),defaultMessage:"Video"},document:{id:l("list.filters.type.document"),defaultMessage:"Document"}},zt={"1day":{id:l("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:l("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:l("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:l("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:l("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:l("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:l("list.filters.preset.1year"),defaultMessage:"1 year ago"}},Kt={createdAt:{id:l("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:l("list.filters.field.updated"),defaultMessage:"Last modified"}},kt=j(N.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,Fe="24.2rem",$t="70dvh",el=`min(${Fe}, calc(100dvw - 2rem))`,At=j(N.Item)`
  width: 100%;
`,Ps=j(_)`
  width: 100%;

  > * {
    width: 100%;
  }

  /* menuitem, menuitemradio and menuitemcheckbox — every option row, plus the
     "Select date range" toggle, which sits at the same level. */
  > [role^='menuitem'] {
    padding-left: ${({theme:e})=>e.spaces[6]};
  }
`,Ft=j(ht)`
  transition: transform 0.2s ease;
  transform: rotate(${({$open:e})=>e?"180deg":"0deg"});
`,Rt=j(N.SubContent)`
  margin-top: calc(-1 * (${({theme:e})=>e.spaces[1]} + 1px));
`,tl=j(Ua)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,sl=({listFilters:e})=>{const{formatMessage:s}=T(),{trackUsage:n}=$e(),[a,r]=c.useState(!1),{filters:o,addFilter:i,updateFilter:d,removeFilter:u}=e,f=b=>n("didFilterMediaLibraryElements",{location:ee,filter:b});let g=-1;for(let b=o.length-1;b>=0;b-=1)if(o[b].kind==="type"){g=b;break}const h=g>=0?o[g]:null,y=h&&h.kind==="type"?h.values:[],p=b=>{const D=!y.includes(b),F=D?[...y,b]:y.filter(U=>U!==b);D&&f("type"),h&&h.kind==="type"?F.length===0?u(g):d(g,{...h,values:F}):F.length>0&&i({kind:"type",condition:"is",values:F})},m=(b,D)=>{f(b);for(let F=o.length-1;F>=0;F-=1){const U=o[F];if(U.kind==="date"&&U.mode==="preset"&&U.field===b){d(F,{...U,preset:D});return}}i({kind:"date",field:b,mode:"preset",condition:"withinLast",preset:D})},M=(b,D)=>{f("createdAt"),i({kind:"date",field:"createdAt",mode:"range",condition:"is",from:b,to:D}),r(!1)},v=rn(),[C,$]=c.useState(null),[x,I]=c.useState(!1),A=b=>{r(b),b||($(null),I(!1))},w=b=>{$(D=>D===b?null:b),I(!1)},k=os.map(b=>t.jsx(N.Item,{role:"menuitemcheckbox","aria-checked":y.includes(b),onSelect:D=>{D.preventDefault(),p(b)},startIcon:t.jsx(ke,{checked:y.includes(b),tabIndex:-1,"aria-hidden":!0}),children:s(Ut[b])},b)),B=b=>{for(let D=o.length-1;D>=0;D-=1){const F=o[D];if(F.kind==="date"&&F.mode==="preset"&&F.field===b)return F.preset}return null},E=b=>{const D=B(b);return is.map(F=>t.jsx(N.Item,{role:"menuitemradio","aria-checked":D===F,onSelect:()=>{m(b,F)},endIcon:D===F?t.jsx(ft,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:s(zt[F])},F))},Y=s({id:l("list.filters.field.type"),defaultMessage:"Type"}),L=s({id:l("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(N.Root,{open:a,onOpenChange:A,children:[t.jsx(N.Trigger,{variant:"tertiary",startIcon:t.jsx(_a,{"aria-hidden":!0}),endIcon:null,children:t.jsxs(S,{gap:2,alignItems:"center",tag:"span",children:[s({id:l("list.filters.trigger"),defaultMessage:"Filter"}),o.length>0&&t.jsx(tl,{children:o.length})]})}),t.jsx(N.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:$t,width:v?el:Fe,children:v?t.jsxs(t.Fragment,{children:[t.jsx(At,{"aria-expanded":C==="type",onSelect:b=>{b.preventDefault(),w("type")},endIcon:t.jsx(Ft,{$open:C==="type","aria-hidden":!0}),children:Y}),C==="type"&&t.jsx(Ps,{children:k}),["createdAt","updatedAt"].map(b=>t.jsxs(_,{width:"100%",children:[t.jsx(At,{"aria-expanded":C===b,onSelect:D=>{D.preventDefault(),w(b)},endIcon:t.jsx(Ft,{$open:C===b,"aria-hidden":!0}),children:s(Kt[b])}),C===b&&t.jsxs(Ps,{children:[E(b),b==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx(At,{"aria-expanded":x,onSelect:D=>{D.preventDefault(),I(F=>!F)},endIcon:t.jsx(Ft,{$open:x,"aria-hidden":!0}),children:L}),x&&t.jsx(_,{paddingLeft:2,children:t.jsx(_t,{onSelect:M})})]})]})]},b))]}):t.jsxs(t.Fragment,{children:[t.jsxs(N.SubRoot,{children:[t.jsx(kt,{children:Y}),t.jsx(Rt,{zIndex:2,maxHeight:$t,width:Fe,children:k})]}),["createdAt","updatedAt"].map(b=>t.jsxs(N.SubRoot,{children:[t.jsx(kt,{children:s(Kt[b])}),t.jsxs(Rt,{zIndex:2,maxHeight:$t,width:Fe,children:[E(b),b==="createdAt"&&t.jsxs(N.SubRoot,{children:[t.jsx(kt,{children:L}),t.jsx(Rt,{zIndex:2,maxHeight:"none",width:Fe,children:t.jsx(_t,{onSelect:M})})]})]})]},b))]})})]})},nl=j(S)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,ls=j.button`
  border: none;
  background: transparent;
  font: inherit;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  cursor: ${({$interactive:e})=>e?"pointer":"default"};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};

  ${({theme:e})=>e.breakpoints.medium} {
    padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  }
  ${({$interactive:e,theme:s})=>e&&`&:hover { background: ${s.colors.primary100}; }`}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,al=j.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ds=j(Se.Content)`
  width: ${Fe};
`,Vn=j.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};
  width: 100%;
  border: none;
  background: transparent;
  font-size: ${({theme:e})=>e.fontSizes[2]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  font-family: inherit;
  text-align: left;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[4]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral800};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,rl=j.button`
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral600};

  &:hover {
    color: ${({theme:e})=>e.colors.neutral800};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,Os={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Ns={isExactly:{id:l("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:l("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:l("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},Bs={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Et=({label:e,options:s,active:n,getOptionLabel:a,onPick:r})=>{const[o,i]=c.useState(!1);return t.jsxs(Se.Root,{open:o,onOpenChange:i,children:[t.jsx(Se.Trigger,{children:t.jsx(ls,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(ds,{children:t.jsx(S,{direction:"column",alignItems:"stretch",padding:1,children:s.map(d=>t.jsxs(Vn,{type:"button",onClick:()=>{r(d),i(!1)},children:[a(d),d===n&&t.jsx(ft,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))})})]})},ol=({filter:e,onChange:s})=>{const{formatMessage:n}=T(),[a,r]=c.useState(!1),o=e.values.map(d=>n(Ut[d])).join(", "),i=d=>{const u=e.values.includes(d)?e.values.filter(f=>f!==d):[...e.values,d];u.length>0&&s({...e,values:u})};return t.jsxs(Se.Root,{open:a,onOpenChange:r,children:[t.jsx(Se.Trigger,{children:t.jsx(ls,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:o})})}),t.jsx(ds,{children:t.jsx(S,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:os.map(d=>t.jsx(ke,{checked:e.values.includes(d),onCheckedChange:()=>i(d),children:n(Ut[d])},d))})})]})},_s=({filter:e,onChange:s})=>{const{formatMessage:n,formatDate:a}=T(),[r,o]=c.useState(!1),i=e.mode==="preset"?n(zt[e.preset]):`${a(dt(e.from),{day:"2-digit",month:"short"})} - ${a(dt(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(Se.Root,{open:r,onOpenChange:o,children:[t.jsx(Se.Trigger,{children:t.jsx(ls,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(ds,{children:e.mode==="preset"?t.jsx(S,{direction:"column",alignItems:"stretch",padding:1,children:is.map(d=>t.jsxs(Vn,{type:"button",onClick:()=>{s({...e,preset:d}),o(!1)},children:[n(zt[d]),d===e.preset&&t.jsx(ft,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))}):t.jsx(_t,{from:e.from,to:e.to,onSelect:(d,u)=>{s({...e,from:d,to:u}),o(!1)}})})]})},il=({filter:e,onChange:s,onRemove:n})=>{const{formatMessage:a}=T(),r=e.kind==="type"?a({id:l("list.filters.field.type"),defaultMessage:"Type"}):a(Kt[e.field]);return t.jsxs(nl,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(al,{children:t.jsx(R,{variant:"pi",textColor:"neutral600",children:r})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(Et,{label:a(Os[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Os[o]),onPick:o=>s({...e,condition:o})}),t.jsx(ol,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(Et,{label:a(Ns[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:o=>a(Ns[o]),onPick:o=>s({...e,condition:o})}),t.jsx(_s,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(Et,{label:a(Bs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Bs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(_s,{filter:e,onChange:s})]}),t.jsx(rl,{type:"button",onClick:n,"aria-label":a({id:l("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:r}),children:t.jsx(pt,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},ll=j(S)`
  padding-top: ${({theme:e,$compact:s})=>s?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,dl=({listFilters:e,compact:s=!1})=>{const{filters:n,updateFilter:a,removeFilter:r}=e;return n.length===0?null:t.jsx(ll,{$compact:s,gap:2,wrap:"wrap","data-testid":"filter-badges",children:n.map((o,i)=>t.jsx(il,{filter:o,onChange:d=>a(i,d),onRemove:()=>r(i)},i))})},Hn=e=>{const{isMovePending:s,isValidDropTarget:n}=ue()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=dn(),r=e.id==null?Rn:Bo(e.id),o={kind:"folder-tree-target",id:e.id,name:e.name},i=un({id:r,data:o,disabled:s}),d=n(e.id),u=i.isOver;return{droppable:i,isOver:u,showValidDropHighlight:u&&d,showInvalidDropCursor:u&&!d&&a!=null}},cl=600,ul=({isOver:e,canExpand:s,onExpand:n})=>{c.useEffect(()=>{if(!e||!s)return;const a=setTimeout(n,cl);return()=>clearTimeout(a)},[e,s,n])},Wn=j.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  width: 100%;
  min-height: 3.2rem;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border: 0;
  background: ${({$isActive:e,$isValidDropTarget:s,theme:n})=>s||e?n.colors.primary100:"transparent"};
  color: ${({$isActive:e,theme:s})=>e?s.colors.primary700:s.colors.neutral800};
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"pointer"};
  text-align: left;
  font: inherit;
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&Te`
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}

  &:hover {
    background: ${({$isActive:e,$isValidDropTarget:s,theme:n})=>s||e?n.colors.primary100:n.colors.neutral100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,gl=j(S)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&Te`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,qn=(e,s,n=[])=>{for(const a of e){if(a.id===s)return n;if(a.children?.length){const r=a.id!=null?[...n,a.id]:n,o=qn(a.children,s,r);if(o!==null)return o}}return null},pl=(e,s)=>{const[n,a]=c.useState(()=>new Set);c.useEffect(()=>{if(s==null)return;const d=qn(e,s);!d||d.length===0||a(u=>{const f=new Set(u);let g=!1;for(const h of d)f.has(h)||(f.add(h),g=!0);return g?f:u})},[e,s]);const r=c.useCallback(d=>{a(u=>{const f=new Set(u);return f.has(d)?f.delete(d):f.add(d),f})},[]),o=c.useCallback(d=>{a(u=>{if(u.has(d))return u;const f=new Set(u);return f.add(d),f})},[]);return{isExpanded:c.useCallback(d=>n.has(d),[n]),toggleExpanded:r,expandFolder:o}},Gn=j.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  /* Grid rather than block, and load-bearing despite rendering a single column:
     a minmax(0, 1fr) track contributes a minimum of 0, which is what stops each
     row propagating the min-content width of its own label.

     Folder names ellipsize, and text-overflow needs white-space: nowrap — so a
     label's min-content width is the entire name, and no box lays out narrower
     than its min-content. In block flow that floor travels up to the SubNav
     ScrollArea, which widens the rail and shows a horizontal scrollbar instead of
     truncating the name. Nesting makes it worse: the indent is spent before the
     label is measured, so shorter names trigger it the deeper you go.

     Measured in Chromium — dropping either declaration brings the scrollbar
     back, and neither min-width nor overflow on the row is a substitute. */
  display: grid;
  grid-template-columns: minmax(0, 1fr);
`,hl=1.6,fl=j(ht)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,ml=({id:e,name:s,folderChildren:n,level:a,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:f,isMovePending:g})=>{const{formatMessage:h}=T(),y=n.length>0,p=i(e),m=o&&r===e,{droppable:{setNodeRef:M},isOver:v,showValidDropHighlight:C,showInvalidDropCursor:$}=Hn({id:e,name:s}),x=c.useCallback(()=>u(e),[e,u]);return ul({isOver:v,canExpand:y&&!p,onExpand:x}),t.jsxs("li",{children:[t.jsxs(gl,{ref:M,alignItems:"center",paddingLeft:`${a*hl}rem`,gap:1,$isValidDropTarget:C,$isInvalidDropCursor:$,$isMovePending:g,children:[t.jsx(ae,{label:h({id:l(p?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:p?"Collapse {name}":"Expand {name}"},{name:s}),onClick:I=>{I.stopPropagation(),d(e)},variant:"ghost",withTooltip:!1,"aria-expanded":p,children:t.jsx(fl,{$expanded:p,fill:"neutral500"})}),t.jsx(_,{flex:"1",minWidth:0,children:t.jsx(Wn,{type:"button",$isActive:m,$isValidDropTarget:C,$isInvalidDropCursor:$,$isMovePending:g,"aria-current":m?"page":void 0,onClick:()=>f(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(Ve,{variant:"omega",fontWeight:m?"semiBold":"regular",children:s})})})]}),y&&p&&t.jsx(Gn,{children:n.map(I=>t.jsx(Yn,{node:I,level:a+1,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:f,isMovePending:g},I.id??I.name))})]})},Yn=({node:e,...s})=>e.id==null?null:t.jsx(ml,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),xl=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n})=>{const{formatMessage:a}=T(),{data:r=[],isLoading:o,isError:i}=Jt(),{isExpanded:d,toggleExpanded:u,expandFolder:f}=pl(r,e),{isMovePending:g}=ue()??{isMovePending:!1},h=s&&e==null,y=a({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:p},showValidDropHighlight:m,showInvalidDropCursor:M}=Hn({id:null,name:y});return t.jsxs(wt.Main,{"aria-label":a({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(wt.Header,{label:a({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(wt.Content,{children:t.jsxs(S,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(Wn,{ref:p,type:"button",$isActive:h,$isValidDropTarget:m,$isInvalidDropCursor:M,$isMovePending:g,"aria-current":h?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(za,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(R,{variant:"omega",fontWeight:h?"semiBold":"regular",children:y})]}),t.jsxs(_,{marginTop:4,children:[t.jsxs(S,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(ve,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(R,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:a({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(S,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(Ce,{children:a({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):i?t.jsx(_,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"danger600",children:a({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):r.length===0?t.jsx(_,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"neutral500",children:a({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(Gn,{children:r.map(v=>t.jsx(Yn,{node:v,level:0,currentFolderId:e,showActiveFolder:s,isExpanded:d,onToggle:u,onExpand:f,onSelect:n,isMovePending:g},v.id??v.name))})]})]})})]})},yl=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:a}=T(),[r,o]=c.useState(""),[i,d]=c.useState(null),u=()=>{o(""),d(null),s()},f=async g=>{g.preventDefault();const{urls:h,error:y}=Va(r);if(y){d(y);return}d(null),u(),await n(h)};return t.jsx(Z.Root,{open:e,onOpenChange:g=>!g&&u(),children:t.jsx(Z.Content,{children:t.jsxs("form",{onSubmit:f,children:[t.jsx(Z.Header,{children:t.jsx(Z.Title,{children:a({id:l("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(Z.Body,{children:t.jsxs(X.Root,{error:i||void 0,hint:a({id:l("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(X.Label,{children:a({id:l("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Ka,{name:"urls",minHeight:"unset",rows:Math.min(r.split(`
`).length,7),maxHeight:"10.5rem",placeholder:a({id:l("input.url.placeholder"),defaultMessage:"Empty"}),value:r,onChange:g=>{o(g.target.value),d(null)}}),t.jsx(X.Hint,{}),t.jsx(X.Error,{})]})}),t.jsxs(Z.Footer,{children:[t.jsx(G,{variant:"tertiary",onClick:u,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",children:a({id:l("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},Tt={oldestUploads:{id:l("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:l("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},Lt={nameAsc:{id:l("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:l("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:l("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:l("list.sort.size-desc"),defaultMessage:"File size descending"}},Us={top:{id:l("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:l("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},bl=j(N.Trigger)``,zs=j(N.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,jl=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=T(),{trackUsage:a}=$e(),r=n({id:l("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(Tt[e.sortBy]):n(Lt[e.direction])}),o=t.jsx(ft,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(N.Root,{children:[t.jsx(bl,{variant:"ghost",endIcon:t.jsx(ht,{"aria-hidden":!0}),children:r}),t.jsxs(N.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(zs,{children:n({id:l("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(Tt).map(i=>t.jsx(N.Item,{role:"menuitemradio","aria-checked":e.sortBy===i,onSelect:d=>{d.preventDefault(),e.sortBy!==i&&a("didSortMediaLibraryElements",{location:ee,sort:i}),e.setSortBy(e.sortBy===i?null:i)},endIcon:e.sortBy===i?o:null,children:n(Tt[i])},i)),Object.keys(Lt).map(i=>t.jsx(N.Item,{role:"menuitemradio","aria-checked":e.direction===i,onSelect:d=>{d.preventDefault(),e.direction!==i&&a("didSortMediaLibraryElements",{location:ee,sort:i}),e.setDirection(e.direction===i?null:i)},endIcon:e.direction===i?o:null,children:n(Lt[i])},i)),s&&t.jsxs(t.Fragment,{children:[t.jsx(N.Separator,{}),t.jsx(zs,{children:n({id:l("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(Us).map(i=>t.jsx(N.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===i,onSelect:d=>{d.preventDefault(),e.setFoldersPosition(i)},endIcon:e.foldersPosition===i?o:null,children:n(Us[i])},i))]})]})]})},Qn=20,wl=e=>{const s=new Map;for(const n of Object.keys(e).map(Number).sort((a,r)=>a-r))for(const a of e[n])s.set(a.id,a);return[...s.values()]},Ml=({queryArgs:e,page:s,onRefreshed:n})=>{const{currentData:a}=es({...e,page:s,pageSize:Qn}),r=a?.results;return c.useEffect(()=>{r&&n(s,r)},[r,s,n]),null},Cl=({folder:e=null,sort:s,search:n,filters:a,enabled:r=!0}={})=>{const o={folder:e,sort:s,search:n,filters:a},i=JSON.stringify(o),d=JSON.stringify({folder:e,sort:s,filters:a}),[u,f]=c.useState({queryKey:i,page:1}),[g,h]=c.useState({queryKey:i,listKey:d,pages:{}}),y=u.queryKey===i?u.page:1;u.queryKey!==i&&f({queryKey:i,page:1});const{currentData:p,isLoading:m,isFetching:M,error:v}=es({...o,page:y,pageSize:Qn},{skip:!r}),C=g.queryKey===i;p&&(!C||g.pages[y]!==p.results)&&h(C?{...g,pages:{...g.pages,[y]:p.results},pagination:p.pagination}:{queryKey:i,listKey:d,pages:{[y]:p.results},pagination:p.pagination});const $=c.useCallback((b,D)=>{h(F=>F.queryKey!==i||F.pages[b]===D?F:{...F,pages:{...F.pages,[b]:D}})},[i]),x=c.createElement(c.Fragment,null,Array.from({length:Math.max(0,y-1)},(b,D)=>D+1).map(b=>c.createElement(Ml,{key:`${i}:${b}`,queryArgs:o,page:b,onRefreshed:$}))),I=Ha(),A=Wa(),w=c.useRef(e);c.useEffect(()=>{const b=w.current;if(w.current=e,b===e)return;const D=A.getState()[_e.reducerPath],F=_e.internalActions.removeQueryResult;Object.keys(D?.queries??{}).forEach(U=>{if(!U.startsWith("getAssets("))return;let V;try{V=JSON.parse(U.slice(10,-1))}catch{return}V.folder===b&&I(F({queryCacheKey:U}))})},[e,I,A]);const k=g.listKey!==d,B=c.useMemo(()=>k?[]:wl(g.pages),[k,g.pages]),E=p?y<p.pagination.pageCount:!1,Y=M&&y>1,L=c.useCallback(()=>{f(b=>({queryKey:i,page:(b.queryKey===i?b.page:1)+1}))},[i]);return r?{assets:B,subscribers:x,pagination:p?.pagination??g.pagination,isLoading:m||k,isFetchingMore:Y,hasNextPage:E,fetchNextPage:L,error:v}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:L,error:void 0}},vl=({hasNextPage:e,isFetchingMore:s,onLoadMore:n,options:a})=>{const r=c.useRef(null),o=c.useRef(null),i=c.useRef(a);i.current=a;const d=c.useRef(n);d.current=n;const u=c.useRef(e);u.current=e;const f=c.useRef(s);f.current=s;const g=c.useCallback(h=>{if(r.current?.disconnect(),o.current=h,!h)return;const y=new IntersectionObserver(([p])=>{p.isIntersecting&&u.current&&!f.current&&d.current()},i.current);y.observe(h),r.current=y},[]);return c.useEffect(()=>()=>r.current?.disconnect(),[]),c.useEffect(()=>{s||!r.current||!o.current||(r.current.unobserve(o.current),r.current.observe(o.current))},[s]),g},cs={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},us={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},Vt="mostRecentUpdates",Ks=Object.fromEntries(Object.entries(cs).map(([e,s])=>[s,e])),Vs=Object.fromEntries(Object.entries(us).map(([e,s])=>[s,e])),Sl=e=>{for(const s of(e??"").split(",")){if(s in Ks)return{sortBy:Ks[s],direction:null,isExplicit:!0};if(s in Vs)return{sortBy:null,direction:Vs[s],isExplicit:!0}}return{sortBy:Vt,direction:null,isExplicit:!1}},Hs=(e,s)=>[e&&cs[e],s&&us[s]].filter(a=>!!a).join(","),Dl=()=>{const[{query:e},s]=De(),{sortBy:n,direction:a,isExplicit:r}=Sl(e?.sort),o=e?.folders==="mixed"?"mixed":"top",i=(m,M)=>{m===null&&M===null&&(m=Vt);const v=Hs(m,M);m===Vt&&M===null?s({sort:""},"remove"):s({sort:v})},d=m=>i(m,null),u=m=>i(null,m),f=m=>{m==="mixed"?s({folders:"mixed"}):s({folders:""},"remove")},g=Hs(n,a),y=[n&&cs[n],a&&!a.startsWith("size")?us[a]:null].filter(m=>!!m),p=r&&y.length>0?y.join(","):"name:ASC";return{sortBy:n,direction:a,foldersPosition:o,assetsSort:g,foldersSort:p,setSortBy:d,setDirection:u,setFoldersPosition:f}},Il=({folderId:e,search:s,sort:n,filter:a})=>JSON.stringify({folderId:e,search:s,sort:n,filter:a}),Ws=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},kl=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[a,r]=n.split(":");return{field:a,desc:r?.toUpperCase()==="DESC"}});return(n,a)=>{for(const{field:r,desc:o}of s){const i=Ws(n,r),d=Ws(a,r);let u;if(typeof i=="string"||typeof d=="string"?u=String(i)<String(d)?-1:String(i)>String(d)?1:0:u=i-d,u!==0)return o?-u:u}return 0}},$l=({folders:e,assets:s,sort:n,hasNextPage:a})=>{const r=kl(n),o=[...e].sort(r),i=s[s.length-1],d=!a||!i?a?[]:o:o.filter(g=>r(g,i)<=0),u=[];let f=0;for(const g of s){for(;f<d.length&&r(d[f],g)<=0;)u.push({kind:"folder",folder:d[f]}),f+=1;u.push({kind:"asset",asset:g})}for(;f<d.length;)u.push({kind:"folder",folder:d[f]}),f+=1;return u},Al={threshold:0,rootMargin:"0px 0px -1px 0px"},Fl={threshold:0},Rl={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},Pt={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},El=(e,s)=>e===0?Pt.assets:s===0?Pt.folders:Pt.both,Tl=({view:e,folders:s,isLoadingFolders:n,assets:a,isLoadingAssets:r,isFetchingMore:o,hasNextPage:i,fetchNextPage:d,error:u,locations:f,searchQuery:g,assetsSort:h,foldersPosition:y,hasActiveFilters:p,onClearFilters:m,onAssetItemClick:M,onAddAssets:v,canAddAssets:C,onClearSearch:$})=>{const{formatMessage:x}=T(),I=e===Be.GRID,A=r||n,w=c.useMemo(()=>y==="mixed"&&!I?$l({folders:s,assets:a,sort:h,hasNextPage:i}):null,[y,I,s,a,h,i]),k=vl({hasNextPage:i,isFetchingMore:o,onLoadMore:d,options:Al});return A?t.jsx(S,{justifyContent:"center",padding:8,children:t.jsx(Ce,{children:x({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(_,{padding:8,children:t.jsx(R,{textColor:"danger600",children:x({id:l("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):s.length===0&&a.length===0?p&&!g?t.jsx(Li,{onClearFilters:m}):t.jsx(Ti,{onAddAssets:v,canAddAssets:C,searchQuery:g,onClearSearch:$}):t.jsxs(t.Fragment,{children:[I?t.jsx(di,{folders:s,assets:a,onAssetItemClick:M}):t.jsx(wi,{assets:a,folders:s,mixedItems:w,onAssetItemClick:M}),t.jsx("div",{ref:k,style:{height:1}}),o&&t.jsx(S,{justifyContent:"center",padding:4,children:t.jsx(Ce,{children:x({id:l("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(Di,{assets:a,locations:f})]})},Ll=({listQueryKey:e})=>{const{clear:s}=me();return c.useEffect(()=>{s()},[e,s]),null},Pl=j(er)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,qs=j(tr)`
  display: flex;
  flex: 1 1 50%;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: 0.6rem ${({theme:e})=>e.spaces[3]};
  border: 1px solid transparent;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSizes[1]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  white-space: nowrap;

  &:hover {
    color: ${({theme:e})=>e.colors.neutral700};
  }

  &[data-state='on'] {
    background: ${({theme:e})=>e.colors.neutral0};
    border-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.primary600};
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`,Ol=j(_)`
  position: sticky;
  top: 0;
  z-index: 2;
  /* Transparent at rest (the grey page shows through); an opaque background +
     shadow appear only once it sticks and content scrolls under it. */
  background: transparent;
  /* Horizontal padding matches the list's default spacing (Layouts.Content /
     RESPONSIVE_DEFAULT_SPACING: 4 / 6 / 10) so the header lines up with the rows. */
  padding: ${({theme:e})=>`${e.spaces[6]} ${e.spaces[4]}`};
  transition:
    padding 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  ${({theme:e})=>e.breakpoints.medium} {
    padding-left: ${({theme:e})=>e.spaces[6]};
    padding-right: ${({theme:e})=>e.spaces[6]};
  }
  ${({theme:e})=>e.breakpoints.large} {
    padding-left: ${({theme:e})=>e.spaces[10]};
    padding-right: ${({theme:e})=>e.spaces[10]};
  }

  /* Compacting is scoped to medium and up, where the header actually sticks. On
     mobile it scrolls away with the list, so shrinking it mid-scroll animated a
     header the user could no longer see — the transition read as a glitch on the
     way back up rather than as the header settling. */
  ${({$compact:e,theme:s})=>e&&Te`
      ${s.breakpoints.medium} {
        padding-top: ${s.spaces[3]};
        padding-bottom: ${s.spaces[3]};
        padding-left: ${s.spaces[4]};
        padding-right: ${s.spaces[4]};
        background: ${s.colors.neutral0};
        box-shadow: ${s.shadows.tableShadow};
      }
      ${s.breakpoints.large} {
        padding-left: ${s.spaces[6]};
        padding-right: ${s.spaces[6]};
      }
    `}
`,Nl=j(S)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Bl=j(S)`
  margin-top: ${({theme:e})=>e.spaces[5]};
  flex-direction: column;
  align-items: stretch;
  gap: ${({theme:e})=>e.spaces[3]};
  transition: margin-top 0.2s ease;

  /* Tightening the gap to the title belongs to the compact header, so it is
     scoped to the breakpoints that compact. On mobile the header never sticks,
     and this was the last thing still shifting as the page scrolled. */
  ${({$compact:e,theme:s})=>e&&Te`
      ${s.breakpoints.medium} {
        margin-top: ${s.spaces[2]};
      }
    `}

  ${({theme:e})=>e.breakpoints.large} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Zn=j(S)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,_l=j(Zn)``,Ul=j(Zn)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,zl=j(_)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,Gs=j.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,Kl=()=>{const{formatMessage:e}=T(),{openDetails:s}=vn(),{canCreate:n,canUpdate:a}=ce(),{currentFolderId:r,navigateToFolderId:o,navigateToRoot:i}=He(),{error:d}=Xt({id:r},{skip:r===null});c.useEffect(()=>{d?.name==="NotFoundError"&&i()},[d,i]);const{title:u,itemCount:f}=xn(r),{searchQuery:g,isSearching:h,clearSearch:y}=Bn(),p=Dl(),m=Hi(),M=c.useMemo(()=>Qi(m.filters,new Date),[m.serialized]),{assets:v,subscribers:C,pagination:$,isLoading:x,isFetchingMore:I,hasNextPage:A,fetchNextPage:w,error:k}=Cl({folder:r,search:g||void 0,sort:p.assetsSort,filters:M.fileClauses,enabled:M.showFiles}),{data:B=[],isLoading:E}=Mr({parentId:r,search:g||void 0,sort:p.foldersSort,filters:M.folderClauses},{skip:!M.showFolders}),Y=c.useMemo(()=>M.showFolders?B:[],[M.showFolders,B]),L=c.useMemo(()=>vr(v,Y),[v,Y]),b=e(Rl,{count:f}),D=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),F=Y.length,U=$?.total??0,V=e(El(F,U),{numberFolders:F,numberAssets:U});let H;h?H=`${D} (${V})`:u?H=`${u} (${b})`:H=e({id:"app.loading",defaultMessage:"Loading..."});const[O,q]=c.useState(!1),[Q,ie]=Ys(pi.view,Be.GRID),xe=Q===Be.GRID,[ge,We]=c.useState(!1),qe=c.useRef(null),Le=c.useRef(null),[le,Pe]=c.useState(!1),Ge=c.useCallback(J=>Pe(!J),[]),P=qa(Ge,Fl),[W]=Ga(),[K]=Ya(),{data:se}=Qt(),ne=se?.data?.concurrentUploadRequests??1,pe=mt(),{trackUsage:re}=$e(),Ye=async(J,Oe)=>{if(J.length===0)return;const ea=J.reduce((Ae,ta)=>{const ps=sr(ta.type);return Ae[ps]=(Ae[ps]??0)+1,Ae},{});re("willAddMediaLibraryAssets",{location:ee,...ea});const jt=new FormData,gs=[];J.forEach(Ae=>{jt.append("files",Ae),gs.push({name:Ae.name,caption:null,alternativeText:null,folder:Oe})}),jt.append("fileInfo",JSON.stringify(gs));try{await W({formData:jt,totalFiles:J.length,concurrency:ne,generateAiMetadata:!!pe}).unwrap()}catch{}},Qe=()=>{qe.current?.click()},yt=async J=>{const Oe=J.target.files;Oe&&Oe.length>0&&(re("didSelectFile",{source:"computer",location:ee}),await Ye(Array.from(Oe),r)),J.target.value=""},bt=async J=>{n&&(re("didSelectFile",{source:"computer",location:ee}),await Ye(J,r))},Xn=async J=>{re("didSelectFile",{source:"url",location:ee}),re("willAddMediaLibraryAssets",{location:ee});try{await K({urls:J,folderId:r,generateAiMetadata:!!pe}).unwrap()}catch{}},Jn=Il({folderId:r,search:g,sort:`${p.assetsSort};folders=${p.foldersPosition}`,filter:m.serialized||null});return t.jsxs(t.Fragment,{children:[t.jsx(ki,{onDrop:bt,disabled:!n,children:t.jsx(vo,{disabled:!a,children:t.jsx(Do,{children:t.jsxs(Ho,{locations:L,children:[t.jsx(Ll,{listQueryKey:Jn}),t.jsx(hs.Root,{sideNav:t.jsx(xl,{currentFolderId:r,showActiveFolder:!h,onSelectFolder:o}),children:t.jsx(ln.Main,{children:t.jsxs(_,{ref:Le,children:[t.jsx(Ie,{children:t.jsx("input",{type:"file",ref:qe,onChange:yt,multiple:!0})}),t.jsx(_,{ref:P,height:0,"aria-hidden":!0}),t.jsxs(Ol,{$compact:le,children:[t.jsxs(Nl,{children:[t.jsx(R,{variant:"alpha",tag:"h1",children:H}),n&&t.jsxs(Qa,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(ht,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx(Mt,{onSelect:()=>q(!0),startIcon:t.jsx(ve,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(Mt,{onSelect:Qe,startIcon:t.jsx(Za,{}),children:e({id:l("import-files"),defaultMessage:"Import files"})}),t.jsx(Mt,{onSelect:()=>We(!0),startIcon:t.jsx(ze,{}),children:e({id:l("import-from-url"),defaultMessage:"Import from URL"})})]})]}),t.jsxs(Bl,{$compact:le,children:[t.jsxs(_l,{children:[t.jsx(_,{children:t.jsx(sl,{listFilters:m})}),t.jsx(zl,{children:t.jsx(gi,{})})]}),t.jsxs(Ul,{children:[t.jsx(_,{children:t.jsx(jl,{sort:p,showFoldersGroup:!xe})}),t.jsxs(Pl,{type:"single",value:xe?"grid":"table",onValueChange:J=>J&&ie(J==="grid"?Be.GRID:Be.TABLE),"aria-label":e({id:l("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(qs,{value:"table","aria-label":e({id:l("view.table"),defaultMessage:"Table view"}),children:[t.jsx(Xa,{}),t.jsx(Gs,{children:e({id:l("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(qs,{value:"grid","aria-label":e({id:l("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(Ja,{}),t.jsx(Gs,{children:e({id:l("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx(dl,{listFilters:m,compact:le})]}),t.jsxs(hs.Content,{children:[t.jsx(gr,{}),C,t.jsxs(Fi,{children:[t.jsx(Ei,{uploadDropZoneRef:Le,folderName:u}),t.jsx(Tl,{view:Q,folders:Y,isLoadingFolders:E,assets:v,isLoadingAssets:x,isFetchingMore:I,hasNextPage:A,fetchNextPage:w,error:k,locations:L,searchQuery:g,assetsSort:p.assetsSort,foldersPosition:p.foldersPosition,hasActiveFilters:m.filters.length>0,onClearFilters:m.clearFilters,onAssetItemClick:s,onAddAssets:Qe,canAddAssets:n,onClearSearch:y})]})]})]})})})]})})})}),t.jsx(On,{open:O,mode:"create",parentFolderName:u,parentFolderId:r,onClose:()=>q(!1)}),t.jsx(yl,{open:ge,onClose:()=>We(!1),onUpload:Xn}),t.jsx(xo,{})]})},Gl=()=>{const{formatMessage:e}=T(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(ln.Title,{children:s}),t.jsx(nr,{children:t.jsx(ar,{index:!0,element:t.jsx(Kl,{})})})]})};export{Gl as BetaMediaLibrary};
