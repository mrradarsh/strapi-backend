import{a as T,h7 as Ks,j as t,S as N,dq as _t,g as v,A as R,h8 as l,h9 as Pe,de as qn,z as Gn,db as Yn,ha as Hs,f$ as fe,hb as Qn,f6 as Zn,hc as Xn,hd as Jn,he as ea,hf as ta,hg as sa,hh as Xe,k as be,y as b,r as c,v as ge,fH as na,hi as ue,ch as aa,eS as ra,hj as Vs,hk as oa,hl as ia,d as se,hm as Ne,R as Q,E as G,hn as la,u as ke,ho as ye,bU as Me,hp as da,hq as ca,hr as ua,D as ga,hs as pa,ht as Rt,cz as zt,N as Ws,b2 as qs,bC as nt,b0 as Gs,b1 as Je,bk as U,bS as at,J as rt,cY as Ut,hu as Ys,dS as Qs,cA as O,cx as Y,dY as Zs,hv as Kt,gd as je,n as ha,I as Ve,bT as Ce,dz as fa,fN as Ae,dw as ma,dx as xa,c as Xs,hw as ya,Y as ba,Q as ja,h as Ht,e$ as wa,f1 as Ma,f3 as Ca,e_ as va,f0 as Sa,f2 as Da,hx as Ia,dg as $a,F as ot,K as Js,hy as ka,fG as Aa,gg as Fa,a9 as Ra,fR as it,H as lt,dP as we,cP as ft,hz as Ea,bN as Ta,hA as La,p as Pa,hB as Oa,hC as Na,hD as Ba,hE as _a,L as ls,P as en,e1 as za,hF as mt,am as Ua,gr as Ka,gs as Ha,hG as Va,hH as Wa,U as qa,W as Ga}from"./strapi-P_yVRySv.js";import{g as Ya}from"./users-CHXWXr2I.js";import{l as Qa,m as Za,D as Xa,p as Ja,k as er,P as tr,u as tn,f as sn,e as nn}from"./core.esm-CbtTFzLP.js";const sr=()=>{const{formatMessage:e}=T(),[s,n]=Ks("STRAPI_UPLOAD_LIBRARY_BETA_NOTICE_DISMISSED",!1);return s?null:t.jsx(N,{paddingBottom:4,children:t.jsx(_t,{variant:"default",onClose:()=>n(!0),closeLabel:e({id:l("beta.notice.close"),defaultMessage:"Close"}),title:e({id:l("plugin.name"),defaultMessage:"Media Library"}),children:t.jsxs(v,{tag:"span",gap:2,alignItems:"center",children:[t.jsx(N,{tag:"span",background:"neutral150",hasRadius:!0,paddingLeft:2,paddingRight:2,shrink:0,children:t.jsx(R,{variant:"sigma",textColor:"neutral600",children:e({id:l("beta.badge"),defaultMessage:"Beta"})})}),t.jsx(R,{tag:"span",children:e({id:l("beta.notice.content"),defaultMessage:"This is a beta version of the Media Library. Some features are still in progress — please report any issue you run into."})})]})})})},nr=["image/png","image/jpeg","image/webp","image/heic","image/heif"],an=e=>nr.includes(e),ar=20,ds=ar*2,rr=Pe.injectEndpoints({endpoints:e=>({getUploadSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetUploadSettingsQuery:rn}=rr,dt=e=>{const s=qn(),{data:n}=rn();return!s||!(n?.data?.aiMetadata??!1)?!1:e===void 0?!0:an(e.mime)},{main:Ll,...or}=Yn,le=()=>{const{allowedActions:e,isLoading:s}=Gn(or);return{isLoading:s,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},Vt=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),ir=e=>typeof e=="object"&&e!==null&&"data"in e,cs=e=>ir(e)?e.data:e,lr=Pe.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:a,search:r,filters:o=[]}=s,i={sort:a??"name:ASC",populate:{parent:!0}};if(r)i._q=Vt(r),o.length>0&&(i.filters={$and:[...o]});else{const d=n!=null?{parent:{id:n}}:{parent:{id:{$null:!0}}};i.filters={$and:[d,...o]}}return{url:"/upload/folders",method:"GET",config:{params:i}}},transformResponse:s=>cs(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:s,...n})=>({url:`/upload/folders/${s}`,method:"PUT",data:n}),transformResponse:s=>s.data,invalidatesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>cs(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:a})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:a}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:dr,useUpdateFolderMutation:cr,useGetFoldersQuery:ur,useGetFolderQuery:Wt,useGetAllFoldersQuery:gr,useGetFolderStructureQuery:qt,useBulkMoveMutation:on}=lr,et=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,ln={fileFolderId:()=>{},folderParentId:()=>{}},pr=(e,s)=>{const n=new Map,a=new Map;return e.forEach(r=>{n.set(r.id,et(r.folder))}),s.forEach(r=>{a.set(r.id,et(r.parent))}),{fileFolderId:r=>n.get(r),folderParentId:r=>a.get(r)}},tt=(e,s,n,a)=>{const r=s==="file"?e.fileFolderId(n):e.folderParentId(n);return r===void 0?a:r},hr=Pe.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,search:a,filters:r=[],...o}=s,i={...o};if(a)i._q=Vt(a),r.length>0&&(i.filters={$and:[...r]});else{const d=n!=null?{folder:{id:n}}:{folder:{id:{$null:!0}}};i.filters={$and:[d,...r]}}return{url:"/upload/files",method:"GET",config:{params:i}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,a)=>[{type:"Asset",id:a}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const a=new FormData;return a.append("fileInfo",JSON.stringify(n)),{url:"/upload",method:"POST",data:a,config:{params:{id:s}}}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:a})=>{const r=new FormData;return r.append("files",n),a&&r.append("fileInfo",JSON.stringify(a)),{url:"/upload",method:"POST",data:r,config:{params:{id:s}}}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,a)=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:Gt,useGetAssetQuery:fr,useUpdateAssetMutation:mr,useReplaceAssetMutation:dn,useDeleteAssetMutation:xr,useBulkDeleteItemsMutation:yr}=hr,cn=async(e,s)=>{const a=await(await fetch(e)).blob(),r=window.URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.setAttribute("download",s),o.click(),window.URL.revokeObjectURL(r)},br={pdf:sa,csv:ta,xls:ea,zip:Jn},Be=(e,s)=>{const n=Hs(s);return e?.includes(fe.Image)?Qn:e?.includes(fe.Video)?Zn:e?.includes(fe.Audio)?Xn:n?br[n]||Xe:Xe},un=e=>{const{formatMessage:s}=T(),{data:n,isLoading:a}=Wt({id:e},{skip:e===null}),{data:r,isLoading:o}=Gt({folder:null,pageSize:1},{skip:e!==null}),i=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?o?{title:i,itemCount:0}:{title:i,itemCount:r?.pagination?.total??0}:a||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},jr=b(v)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,gn=({children:e,zIndex:s=20,hideLabel:n=!1})=>t.jsx(jr,{$zIndex:s,children:t.jsx(be,{small:n,children:e})}),wr=1,Mr=({anchorX:e,anchorY:s,point:n,aspectRatio:a})=>{let r=Math.abs(n.x-e),o=Math.abs(n.y-s);a&&(r/a>=o?o=r/a:r=o*a);const i=n.x<e?e-r:e,d=n.y<s?s-o:s;return{x:i,y:d,width:r,height:o}},Cr=()=>{const[e,s]=c.useState({width:0,height:0}),[n,a]=c.useState({x:0,y:0,width:0,height:0}),[r,o]=c.useState(null),i=c.useRef(null),d=c.useCallback(f=>{i.current=f;const m={width:f.naturalWidth,height:f.naturalHeight};s(m),a({x:0,y:0,width:m.width,height:m.height})},[]),u=(f,m,w)=>Math.min(w,Math.max(m,f)),p=c.useCallback(f=>{a(m=>{const w=e.width-m.x,I=e.height-m.y;let M=f.width!==void 0?u(f.width,1,w):m.width,y=f.height!==void 0?u(f.height,1,I):m.height;return r&&(f.width!==void 0?y=u(M/r,1,I):f.height!==void 0&&(M=u(y*r,1,w))),{...m,width:M,height:y}})},[e.width,e.height,r]),g=c.useCallback(f=>{a(m=>{const w=f.x!==void 0?u(f.x,0,e.width-m.width):m.x,I=f.y!==void 0?u(f.y,0,e.height-m.height):m.y;return{...m,x:w,y:I}})},[e.width,e.height]),h=c.useCallback(f=>{o(f),f&&a(m=>{const w=e.width-m.x,I=e.height-m.y;let M=m.width,y=M/f;return y>I&&(y=I,M=y*f),M>w&&(M=w,y=M/f),{...m,width:Math.round(M),height:Math.round(y)}})},[e.width,e.height]),x=c.useCallback((f,m,w)=>new Promise((I,M)=>{const y=i.current;if(!y){M(new Error("Image not ready: call init() before produceFile()."));return}const j=document.createElement("canvas");j.width=Math.max(1,Math.round(n.width)),j.height=Math.max(1,Math.round(n.height));const A=j.getContext("2d");if(!A){M(new Error("Could not get a 2D canvas context to crop the image."));return}A.drawImage(y,n.x,n.y,n.width,n.height,0,0,j.width,j.height),j.toBlob(k=>{if(!k){M(new Error("Could not export the cropped image to a blob."));return}I(new File([k],f,{type:m,lastModified:w?new Date(w).getTime():Date.now()}))},m,wr)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:r,setCropSize:p,setCropPosition:g,setAspectRatio:h,produceFile:x,width:Math.round(n.width),height:Math.round(n.height)}},We=5.6,xt=12,vr=b(v)`
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
`,Sr=b(v)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Dr=b(N)`
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
`,Ir=b.div`
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
`,$r=b.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,qe=b.button`
  position: absolute;
  width: ${xt}px;
  height: ${xt}px;
  margin: -${xt/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,kr=b.button`
  position: absolute;
  width: ${We}rem;
  height: ${We}rem;
  margin: ${-We/2}rem 0 0 ${-We/2}rem;
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
`,Ar=b(N)`
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
`,Fr=b(v)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Ge=b(Q.Root)`
  flex-direction: row;
  align-items: center;
`,Ye=b(la)`
  width: 8.4rem;
`,us=b(Q.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,Rr=b(N)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,Er=()=>t.jsx(Rr,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),Tr=({asset:e,isBusy:s=!1,onClose:n,onApply:a,onSaveAsCopy:r,canSaveAsCopy:o})=>{const{formatMessage:i}=T(),{toggleNotification:d}=ge(),p=na().colorScheme==="dark",g=p?"neutral1000":"neutral0",h=p?"neutral600":"neutral200",x=c.useRef(null),f=c.useRef(null),m=c.useRef(null);c.useEffect(()=>{m.current?.focus()},[]);const{init:w,crop:I,naturalSize:M,aspectRatio:y,setCropSize:j,setCropPosition:A,setAspectRatio:k,produceFile:C,width:F,height:_}=Cr(),[E,D]=c.useState(!1),[$,S]=c.useState(e.focalPoint??{x:50,y:50}),B=ue(e.url),H=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,K=H!==void 0?`${B}${B.includes("?")?"&":"?"}updatedAt=${H}`:B,L=()=>{x.current&&w(x.current)},z=P=>{const W=f.current?.getBoundingClientRect();if(!W||!M.width||!M.height)return null;const V=M.width/W.width,ee=M.height/W.height;return{x:(P.clientX-W.left)*V,y:(P.clientY-W.top)*ee}},q=c.useRef(null);c.useEffect(()=>()=>{q.current?.()},[]);const Z=(P,W)=>{P.preventDefault(),P.stopPropagation();const{pointerId:V}=P;try{P.currentTarget.setPointerCapture(V)}catch{}const ee=oe=>{oe.pointerId===V&&W(oe)},te=()=>{window.removeEventListener("pointermove",ee),window.removeEventListener("pointerup",ce),window.removeEventListener("pointercancel",ce),q.current=null},ce=oe=>{oe.pointerId===V&&te()};q.current?.(),q.current=te,window.addEventListener("pointermove",ee),window.addEventListener("pointerup",ce),window.addEventListener("pointercancel",ce)},he=P=>{const W=z(P);if(!W)return;const V={...I};Z(P,ee=>{const te=z(ee);te&&A({x:V.x+(te.x-W.x),y:V.y+(te.y-W.y)})})},ae=P=>W=>{const V={...I},ee=P==="tl"||P==="bl"?V.x+V.width:V.x,te=P==="tl"||P==="tr"?V.y+V.height:V.y;Z(W,ce=>{const oe=z(ce);if(!oe)return;const{x:He,y:ut,width:gt,height:pt}=Mr({anchorX:ee,anchorY:te,point:oe,aspectRatio:E?y:null});A({x:He,y:ut}),j({width:gt,height:pt})})},me=()=>{D(P=>{const W=!P;return k(W&&_?F/_:null),W})},ct=P=>{Z(P,W=>{const V=z(W);if(!V)return;const ee=(V.x-I.x)/I.width*100,te=(V.y-I.y)/I.height*100;S({x:Math.round(Math.min(100,Math.max(0,ee))),y:Math.round(Math.min(100,Math.max(0,te)))})})},ze=Math.round($.x/100*F),Ue=Math.round($.y/100*_),Fe=(P,W)=>{const V=P==="x"?F:_;if(!V)return;const ee=Math.min(100,Math.max(0,W/V*100));S(te=>({...te,[P]:Math.round(ee)}))},re=M.width&&M.height?{left:I.x/M.width*100,top:I.y/M.height*100,width:I.width/M.width*100,height:I.height/M.height*100}:null,Re=re!==null,Ke=async P=>{if(!Re)return;let W;try{W=await C(e.name,e.mime??"image/png",e.updatedAt)}catch{d({type:"danger",message:i({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const V={x:Math.round($.x),y:Math.round($.y)};P==="apply"?a(W,V):r(W,V)};return t.jsx(aa,{children:t.jsx(ra,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(vr,{ref:m,tabIndex:-1,children:[t.jsxs(Sr,{alignItems:"center",children:[t.jsx(Vs,{"aria-hidden":!0}),t.jsx(R,{variant:"omega",fontWeight:"bold",children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(Dr,{children:[t.jsxs(Ir,{ref:f,$aspect:M.width&&M.height?M.width/M.height:void 0,children:[t.jsx("img",{ref:x,src:K,alt:e.name,crossOrigin:"anonymous",onLoad:L,draggable:!1}),re?t.jsxs($r,{style:{left:`${re.left}%`,top:`${re.top}%`,width:`${re.width}%`,height:`${re.height}%`},onPointerDown:he,children:[t.jsx(qe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:ae("tl")}),t.jsx(qe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:ae("tr")}),t.jsx(qe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:ae("bl")}),t.jsx(qe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:ae("br")}),t.jsx(kr,{type:"button","aria-label":i({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${$.x}%`,top:`${$.y}%`},onPointerDown:ct})]}):null]}),t.jsxs(Ar,{children:[t.jsxs(v,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(R,{variant:"omega",fontWeight:"bold",textColor:g,children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(R,{variant:"pi",textColor:h,children:i({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(v,{gap:6,alignItems:"center",children:[t.jsxs(v,{alignItems:"center",gap:2,children:[t.jsxs(v,{direction:"column",gap:2,children:[t.jsxs(Ge,{name:"crop-width",gap:2,children:[t.jsx(us,{textColor:g,children:t.jsx(oa,{})}),t.jsx(Ye,{"aria-label":i({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:F,min:1,max:M.width||void 0,onValueChange:P=>{P!==void 0&&j({width:P})}})]}),t.jsxs(Ge,{name:"crop-height",gap:2,children:[t.jsx(us,{textColor:g,children:t.jsx(ia,{})}),t.jsx(Ye,{"aria-label":i({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:_,min:1,max:M.height||void 0,onValueChange:P=>{P!==void 0&&j({height:P})}})]})]}),t.jsxs(v,{position:"relative",children:[t.jsx(se,{label:i({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:E?"secondary":"ghost",onClick:me,children:t.jsx(Ne,{})}),t.jsx(Er,{})]})]}),t.jsxs(v,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(Ge,{name:"focal-x",gap:2,children:[t.jsx(Q.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(Ye,{"aria-label":i({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:ze,onValueChange:P=>{P!==void 0&&Fe("x",P)}})]}),t.jsxs(Ge,{name:"focal-y",gap:2,children:[t.jsx(Q.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(Ye,{"aria-label":i({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:Ue,onValueChange:P=>{P!==void 0&&Fe("y",P)}})]})]})]})]})]}),t.jsxs(Fr,{alignItems:"center",children:[t.jsx(G,{variant:"tertiary",onClick:n,disabled:s,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(v,{gap:2,children:[o&&t.jsx(G,{variant:"secondary",onClick:()=>Ke("copy"),loading:s,disabled:!Re,children:i({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(G,{variant:"default",onClick:()=>Ke("apply"),loading:s,disabled:!Re,children:i({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},Te=b(N)`
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
`,Qe=b(v)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,Lr=b.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Pr=b(v)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,Or=b.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Nr=b.audio`
  width: 100%;
`,Br=b.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,_r=b(v)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,zr=b(v)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,Ze=()=>{const{formatMessage:e}=T();return t.jsx(zr,{justifyContent:"center",alignItems:"center",children:t.jsx(be,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},Ur=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:a}=T(),{alternativeText:r,ext:o,mime:i,url:d,updatedAt:u,isUrlSigned:p,isLocal:g}=e,h=u&&!p?new Date(u).getTime():void 0,x=j=>!j||h===void 0?j:j.includes("?")?`${j}&v=${h}`:`${j}?v=${h}`,f=x(ue(d)),[m,w]=c.useState(!1);c.useEffect(()=>{w(!1)},[f]);const I=c.useRef(null);if(c.useEffect(()=>{const j=I.current;if(!j)return;const A=()=>{const C=j.parentElement;if(!C)return;const F=C.getBoundingClientRect(),_=j.offsetWidth,E=j.offsetHeight;!_||!E||!F.width||F.height};A();const k=new ResizeObserver(A);return k.observe(j),j.parentElement&&k.observe(j.parentElement),()=>k.disconnect()},[m]),i?.includes(fe.Image)){const j=x(ue(d));if(j)return t.jsxs(Te,{children:[(!m||n)&&t.jsx(Ze,{}),s?t.jsx(Pr,{children:s}):null,t.jsx(Qe,{children:t.jsx(Lr,{ref:I,src:j,alt:r||e.name||"",crossOrigin:!g&&p?"anonymous":void 0,onLoad:()=>w(!0),onError:()=>w(!0)})})]})}if(i?.includes(fe.Video)&&f)return t.jsxs(Te,{children:[!m&&t.jsx(Ze,{}),t.jsx(Qe,{children:t.jsx(Or,{src:f,controls:!0,title:e.name,onLoadedData:()=>w(!0),onError:()=>w(!0),children:a({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(fe.Audio)&&f)return t.jsxs(Te,{children:[!m&&t.jsx(Ze,{}),t.jsx(Qe,{children:t.jsx(v,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Nr,{src:f,controls:!0,onLoadedData:()=>w(!0),onError:()=>w(!0)})})})]});if((o?.toLowerCase()==="pdf"||o?.toLowerCase()===".pdf"||i==="application/pdf")&&f)return t.jsxs(Te,{children:[!m&&t.jsx(Ze,{}),t.jsx(Qe,{children:t.jsx(Br,{src:`${f}#toolbar=0`,title:e.name,onLoad:()=>w(!0)})})]});const y=Be(i,o);return t.jsx(Te,{children:t.jsxs(_r,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(y,{width:24,height:24}),t.jsx(R,{variant:"pi",children:a({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},yt="assetId",pn=c.createContext(null),hn=()=>{const e=c.useContext(pn);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},fn=c.createContext(null),mn=()=>{const e=c.useContext(fn);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},xn=()=>{const[{query:e},s]=ke(),n=e?.[yt],a=n?parseInt(n,10):null,r=a!==null&&!Number.isNaN(a),[o,i]=c.useState(r),d=c.useRef(null);c.useEffect(()=>{r&&(d.current=a,i(!0))},[r,a]);const u=c.useCallback(h=>{h.target===h.currentTarget&&!r&&i(!1)},[r]),p=c.useCallback(h=>{s({[yt]:String(h)},"push",!0)},[s]),g=c.useCallback(()=>{s({[yt]:void 0},"remove",!0)},[s]);return{assetId:r?a:d.current,isVisible:r,shouldRenderDrawer:o,onCloseAnimationEnd:u,openDetails:p,closeDetails:g}},Kr=b(v)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,xe=({label:e,value:s})=>t.jsxs(Kr,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(R,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(R,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),Hr=b(N)`
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
`,Vr=b(N)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,Wr=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,qr=b(rt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,bt=({name:e,label:s,required:n,disabled:a})=>{const{formatMessage:r}=T(),o=Ws(e),i=zt("DetailField",h=>h.isSubmitting),d=o.value??"",[u,p]=c.useState(d);c.useEffect(()=>{p(d)},[d]);const g=r({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(Q.Root,{name:e,required:n,children:[t.jsx(Q.Label,{children:s}),t.jsx(qs,{value:u,onChange:h=>{p(h.target.value),o.onChange(e,h.target.value)},endAction:u?void 0:t.jsx(nt,{label:g,children:t.jsx(qr,{"aria-label":g,role:"img"})}),type:"text",disabled:i||a})]})},Gr=({label:e,rootLabel:s,folders:n,disabled:a})=>{const r=Ws("folder"),o=zt("LocationField",i=>i.isSubmitting);return t.jsxs(Q.Root,{name:"folder",required:!0,children:[t.jsx(Q.Label,{children:e}),t.jsxs(Gs,{value:r.value==null?"":String(r.value),onChange:i=>{const d=i===""?null:Number(i);r.onChange("folder",d)},disabled:o||a,children:[t.jsx(Je,{value:"",children:s}),n.map(i=>t.jsx(Je,{value:String(i.id),children:i.name},i.id))]})]})},Yr=()=>{const{formatMessage:e}=T(),{deleteAsset:s,isDeleting:n}=mn(),[a,r]=c.useState(!1),o=async()=>{await s(),r(!1)},i=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(U.Root,{open:a,onOpenChange:r,children:[t.jsx(U.Trigger,{children:t.jsx(se,{withTooltip:!1,label:i,variant:"danger-light",children:t.jsx(at,{})})}),t.jsxs(U.Content,{children:[t.jsx(U.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(U.Body,{icon:t.jsx(rt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(U.Footer,{children:[t.jsx(U.Cancel,{children:t.jsx(G,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(U.Action,{children:t.jsx(G,{variant:"danger-light",loading:n,onClick:o,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},Qr=({asset:e})=>{const{formatMessage:s}=T(),{copy:n}=Ut(),a=hn(),r=async()=>{const o=ue(e.url);if(!o)return;const i=await n(o);a({type:i?"success":"danger",message:s(i?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(se,{withTooltip:!1,label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(Ne,{})})},Zr=({asset:e})=>{const{formatMessage:s}=T(),n=hn(),[a,r]=c.useState(!1),o=async()=>{const i=ue(e.url);if(i){r(!0);try{await cn(i,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(se,{withTooltip:!1,label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:o,disabled:a,children:t.jsx(Ys,{})})},Xr=({mime:e})=>{const{formatMessage:s}=T(),{replaceAsset:n,isReplacing:a}=mn(),r=c.useRef(null),[o,i]=c.useState(!1),d=dt({mime:e}),u=()=>{i(!0)},p=()=>{i(!1),r.current?.click()},g=async h=>{const x=h.target.files?.[0];h.target.value="",x&&await n(x)};return t.jsxs(t.Fragment,{children:[t.jsx(Me,{children:t.jsx("input",{ref:r,type:"file",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(se,{withTooltip:!1,label:s({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:a,children:t.jsx(Qs,{})}),t.jsx(U.Root,{open:o,onOpenChange:i,children:t.jsxs(U.Content,{children:[t.jsx(U.Header,{children:s({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(U.Body,{textAlign:"center",children:t.jsxs(v,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(U.Footer,{children:[t.jsx(U.Cancel,{children:t.jsx(G,{variant:"tertiary",fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(U.Action,{children:t.jsx(G,{variant:"secondary",onClick:p,fullWidth:!0,children:s({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},Jr=({onCrop:e,mime:s})=>{const{formatMessage:n}=T(),a=zt("AssetImageActions",r=>r.isSubmitting);return t.jsxs(v,{direction:"column",gap:2,children:[t.jsx(se,{withTooltip:!1,label:n({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:a||!e,children:t.jsx(Vs,{})}),t.jsx(Xr,{mime:s})]})},eo=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:a}=T(),{canCreate:r,canUpdate:o,canDownload:i,canCopyLink:d}=le(),{data:u=[]}=gr(),{toggleNotification:p}=ge(),[g]=mr(),[h,{isLoading:x}]=dn(),[f,{isLoading:m}]=xr(),[w,{isLoading:I}]=ua(),[M,y]=c.useState(!1),[j,A]=c.useState(null);c.useEffect(()=>{if(!j)return;const L=window.setTimeout(()=>A(null),5e3);return()=>window.clearTimeout(L)},[j]);const k=c.useCallback(L=>A(L),[]),C=e.mime?.includes(fe.Image),F={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},_=async L=>{const z={name:L.name,caption:L.caption,alternativeText:L.alternativeText,folder:L.folder};if("error"in await g({id:e.id,fileInfo:z})){k({type:"danger",message:n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}k({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:E}=un(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),D=c.useCallback(async L=>{const z=await h({id:e.id,file:L});if("error"in z){const q=z.error,Z=q?.data?.error?.message??q?.data?.message??n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."});k({type:"danger",message:Z});return}k({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,n,k,h]),$=c.useCallback(async()=>{const L=await f(e.id);if("error"in L){const z=L.error,q=z?.data?.error?.message??z?.data?.message??n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."});k({type:"danger",message:q});return}p({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:E})}),s()},[e.id,s,f,E,n,k,p]),S=()=>{k({type:"danger",message:n({id:l("asset-details.crop.error"),defaultMessage:"Failed to crop the file."})})},B=async(L,z)=>{if(y(!1),"error"in await h({id:e.id,file:L,fileInfo:{focalPoint:z}})){S();return}k({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File cropped."})})},H=async(L,z)=>{if(y(!1),"error"in await w({file:L,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:F.folder,focalPoint:z}})){S();return}k({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},K=c.useMemo(()=>({replaceAsset:D,deleteAsset:$,isReplacing:x,isDeleting:m}),[D,$,x,m]);return t.jsx(pn.Provider,{value:k,children:t.jsx(fn.Provider,{value:K,children:t.jsx(Hr,{children:t.jsx(ga,{method:"POST",initialValues:F,onSubmit:_,children:({modified:L,isSubmitting:z,values:q,resetForm:Z})=>{const he=(q.name??"").trim()==="",ae=Wr({isDeleting:m,isReplacing:x,isCropCopying:I});return t.jsxs(t.Fragment,{children:[t.jsx(pa,{onProceed:Z}),M&&C?t.jsx(Tr,{asset:e,onClose:()=>y(!1),onApply:B,onSaveAsCopy:H,canSaveAsCopy:r}):null,ae?t.jsx(gn,{children:n(ae)}):null,j?t.jsx(Vr,{children:t.jsx(_t,{variant:j.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>A(null),children:j.message})}):null,t.jsxs(ye.ScrollableContent,{children:[t.jsx(Ur,{asset:e,actions:C&&o?t.jsx(Jr,{onCrop:()=>y(!0),mime:e.mime}):null}),t.jsxs(v,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(R,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(v,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(xe,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(xe,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(xe,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?Ya({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(xe,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?Rt(e.size,1):null}),C&&(e.width!=null||e.height!=null)&&t.jsx(xe,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(xe,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:Hs(e.ext)}),t.jsx(xe,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(bt,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!o}),t.jsx(Gr,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:u,disabled:!o}),t.jsx(bt,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!o}),t.jsx(bt,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!o})]})]}),(o||d||i)&&t.jsxs(v,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(v,{gap:2,children:[o&&t.jsx(Yr,{}),d&&t.jsx(Qr,{asset:e}),i&&t.jsx(Zr,{asset:e})]}),o&&t.jsx(G,{type:"submit",variant:"default",loading:z,disabled:!L||z||he,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},to=({asset:e,closeDetails:s})=>{const n=e?Be(e.mime,e.ext):da;return t.jsxs(v,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(n,{width:20,height:20}),t.jsx(ye.Title,{asChild:!0,children:t.jsx(R,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(N,{marginLeft:"auto",children:t.jsx(ye.CloseButton,{onClose:s,children:t.jsx(ca,{})})})]})},so=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=T(),{data:a,isLoading:r,error:o}=fr(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx(v,{justifyContent:"center",padding:8,children:t.jsx(be,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):o||!a?t.jsx(v,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(_t,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(to,{asset:a,closeDetails:s}),t.jsx(eo,{asset:a,closeDetails:s})]})},no=()=>{const{formatMessage:e}=T(),{assetId:s,isVisible:n,shouldRenderDrawer:a,onCloseAnimationEnd:r,closeDetails:o}=xn();return!a||s===null?null:t.jsxs(ye.Root,{isVisible:n,onClose:o,children:[t.jsx("div",{children:t.jsxs(Me,{children:[t.jsx(ye.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(ye.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(ye.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:r,children:t.jsx(so,{assetId:s,closeDetails:o})})]})},J=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),De=e=>`asset:${e}`,Ie=e=>`folder:${e}`,gs=(e,s)=>{const n=new Set;return e.forEach(a=>{const[r,o]=a.split(":");r===s&&n.add(Number(o))}),n},yn=()=>({selectedKeys:new Set,anchorKey:null}),ao=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},ro=(e,s,n)=>{const a=s.indexOf(n);if(a===-1)return e;const r=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(r===-1)return{selectedKeys:new Set([n]),anchorKey:n};const o=Math.min(r,a),i=Math.max(r,a);return{selectedKeys:new Set(s.slice(o,i+1)),anchorKey:e.anchorKey}},oo=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),io=()=>yn(),lo=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((r,o)=>e.has(o)?r+1:r,0),a=n===s.length;return{allSelected:a,isIndeterminate:n>0&&!a}},Yt=c.createContext(null),co=({children:e,disabled:s=!1})=>{const[n,a]=c.useState(yn),r=c.useCallback(x=>!s&&n.selectedKeys.has(x),[s,n.selectedKeys]),o=c.useCallback(x=>{s||a(f=>ao(f,x))},[s]),i=c.useCallback((x,f)=>{s||a(m=>ro(m,x,f))},[s]),d=c.useCallback(x=>{s||a(oo(x))},[s]),u=c.useCallback(()=>a(io()),[]),p=c.useMemo(()=>gs(n.selectedKeys,"asset"),[n.selectedKeys]),g=c.useMemo(()=>gs(n.selectedKeys,"folder"),[n.selectedKeys]),h=c.useMemo(()=>({selectedKeys:n.selectedKeys,selectedIds:p,selectedFolderIds:g,anchorKey:n.anchorKey,isSelected:r,toggle:o,selectRange:i,selectAll:d,clear:u}),[n.selectedKeys,p,g,n.anchorKey,r,o,i,d,u]);return c.createElement(Yt.Provider,{value:h},e)},pe=()=>{const e=c.useContext(Yt);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},uo=()=>c.useContext(Yt),bn=c.createContext(null),go=({children:e})=>{const[s,n]=c.useState({}),a=c.useCallback((d,u)=>(n(p=>({...p,[d]:u})),()=>n(p=>{const{[d]:g,...h}=p;return h})),[]),r=c.useCallback(d=>s[d]!==void 0,[s]),o=c.useCallback(d=>s[d]??null,[s]),i=c.useMemo(()=>({isBusy:r,getBusyMessage:o,markBusy:a}),[r,o,a]);return c.createElement(bn.Provider,{value:i},e)},Qt=()=>c.useContext(bn),po=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},_e=()=>{const[{query:e},s]=ke(),n=po(e?.folder),a=c.useCallback(d=>{s({folder:String(d.id),_q:void 0})},[s]),r=c.useCallback(()=>{s({folder:"",_q:""},"remove")},[s]),o=c.useCallback(()=>{s({folder:""},"remove")},[s]);c.useEffect(()=>{e?.folder&&n===null&&o()},[e?.folder,n,o]);const i=c.useCallback(d=>{d==null?r():s({folder:String(d),_q:void 0})},[r,s]);return{currentFolderId:n,navigateToFolder:a,navigateToRoot:r,navigateToFolderId:i}},jn=b(O.Content).attrs({maxHeight:"min(var(--radix-popper-available-height, 100vh), 100vh)"})`
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
`,wn=(e,s)=>{for(const n of e){if(n.id===s)return n;const a=wn(n.children,s);if(a)return a}return null},ho=e=>{const s=new Set,n=a=>{for(const r of a.children)r.id!=null&&s.add(r.id),n(r)};return n(e),s},fo=(e,s,n)=>{if(s===n)return!0;const a=wn(e,s);return a?ho(a).has(n):!1},mo=e=>e.kind==="file"?e.folderId==null:e.parentId==null,$e=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(r=>!mo(r));const a=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(a.has(s))return!1;for(const r of a)if(fo(n,r,s))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===s||r.kind==="folder"&&r.parentId===s)return!1;return!0},Zt=(e,s=new Set,n="")=>e.flatMap(a=>{if(a.id==null||s.has(a.id))return[];const r=n?`${n} / ${a.name??""}`:a.name??"";return[{id:a.id,label:r},...Zt(a.children??[],s,r)]}),Mn=({formatMessage:e,count:s,source:n,destination:a})=>n===null?e({id:l("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:s,destination:a}):e({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:a}),xo=e=>typeof e=="string"&&e.length>0,Cn=(e,s)=>{if(!e||typeof e!="object")return s;const n=e,a=[n.data?.error?.message,n.data?.message,n.message];for(const r of a)if(xo(r))return r;return s},Oe=e=>e.kind==="folder"?e.parentId:e.folderId,yo=e=>vn(e)?Oe(e[0]):null,vn=e=>{if(e.length===0)return!1;const s=Oe(e[0]);return e.every(n=>Oe(n)===s)},bo=b(Y.Content)`
  max-width: 51.6rem;
`,Xt=({open:e,onClose:s,items:n,onSuccess:a})=>{const{formatMessage:r}=T(),{toggleNotification:o}=ge(),{data:i=[],isUninitialized:d,isLoading:u,isError:p}=qt(void 0,{skip:!e}),[g,{isLoading:h}]=on(),x=c.useMemo(()=>n.filter(S=>S.kind==="file").map(S=>S.id),[n]),f=c.useMemo(()=>n.filter(S=>S.kind==="folder").map(S=>S.id),[n]),m=vn(n),w=yo(n),{data:I}=Wt({id:w},{skip:w===null}),[M,y]=c.useState(""),j=r({id:l("plugin.name"),defaultMessage:"Media Library"}),A=c.useMemo(()=>Zt(i,new Set(f)).filter(S=>$e({items:n,targetFolderId:S.id,folderStructure:i})),[i,f,n]),k=c.useMemo(()=>$e({items:n,targetFolderId:null,folderStructure:i}),[n,i]),C=k?"":A[0]?.id.toString()??"";c.useEffect(()=>{y(C)},[e,C]);const F=!d&&!u&&!p,_=F&&A.length===0&&!k,E=n.length,D=async()=>{if(h||!F)return;const S=M===""?null:Number(M);try{await g({fileIds:x,folderIds:f,destinationFolderId:S}).unwrap()}catch(K){o({type:"danger",message:Cn(K,r({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const B=m?w===null?j:I?.name??j:null,H=S===null?j:A.find(K=>K.id===S)?.label??j;o({type:"success",message:Mn({formatMessage:r,count:E,source:B,destination:H})}),a?.(),s()},$=()=>p?t.jsx(R,{textColor:"danger600",children:r({id:l("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):_?t.jsx(R,{textColor:"neutral600",children:r({id:l("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(Q.Root,{name:"destination",children:[t.jsx(Q.Label,{children:r({id:l("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(Gs,{value:M,onChange:S=>y(String(S)),disabled:h||!F,children:[k&&t.jsx(Je,{value:"",children:j}),A.map(S=>t.jsx(Je,{value:String(S.id),children:S.label},S.id))]})]});return t.jsx(Y.Root,{open:e,onOpenChange:S=>{!S&&!h&&s()},children:t.jsxs(bo,{children:[t.jsx(Y.Header,{children:t.jsx(Y.Title,{children:r({id:l("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(Y.Body,{children:$()}),t.jsx(Y.Footer,{children:t.jsxs(v,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(G,{variant:"tertiary",onClick:s,disabled:h,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{onClick:D,loading:h,disabled:!F||_,children:r({id:l("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},Jt=({open:e,onClose:s,target:n,onSuccess:a,onPendingChange:r})=>{const{formatMessage:o}=T(),{toggleNotification:i}=ge(),[d,{isLoading:u}]=yr(),p=n.fileIds.length+n.folderIds.length;c.useEffect(()=>{r?.(u)},[u,r]);const g=async h=>{if(h.preventDefault(),u)return;if("error"in await d(n)){i({type:"danger",message:o({id:l("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}s(),i({type:"success",message:o({id:l("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:p})}),a?.()};return t.jsx(U.Root,{open:e,onOpenChange:h=>{!h&&!u&&s()},children:t.jsxs(U.Content,{children:[t.jsx(U.Header,{children:o({id:l("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:p})}),t.jsx(U.Body,{icon:t.jsx(rt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(R,{children:o({id:l("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(U.Footer,{children:[t.jsx(U.Cancel,{children:t.jsx(G,{variant:"tertiary",disabled:u,fullWidth:!0,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(U.Action,{children:t.jsx(G,{variant:"danger-light",loading:u,onClick:g,fullWidth:!0,children:o({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},Sn=({asset:e,dragData:s})=>{const{formatMessage:n}=T(),{copy:a}=Ut(),{toggleNotification:r}=ge(),{clear:o}=pe(),i=Qt()?.markBusy??(()=>()=>{}),{canUpdate:d,canDownload:u,canCopyLink:p,isLoading:g}=le(),[h,{isLoading:x}]=dn(),f=dt({mime:e.mime}),m=c.useRef(null),[w,I]=c.useState(!1),[M,y]=c.useState(!1),[j,A]=c.useState(!1),[k,C]=c.useState(!1),F=c.useMemo(()=>[s],[s]),_=()=>{I(!1),m.current?.click()},E=async K=>{const L=K.target.files?.[0];if(K.target.value="",!L)return;const z=i(e.id,n({id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let q;try{q=await h({id:e.id,file:L})}finally{z()}if("error"in q){const{message:Z}=q.error;r({type:"danger",message:Z??n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."})});return}r({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},D=async()=>{const K=ue(e.url);if(!K)return;const L=await a(K);r({type:L?"success":"danger",message:n(L?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},$=async()=>{const K=ue(e.url);if(K){C(!0);try{await cn(K,e.name)}catch{r({type:"danger",message:n({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{C(!1)}}},S=d||p||u,B=d,H=(p||u)&&B;return!g&&!S&&!B?null:t.jsxs(t.Fragment,{children:[t.jsx(Me,{children:t.jsx("input",{ref:m,type:"file",multiple:!1,onChange:E,"aria-hidden":!0,tabIndex:-1})}),t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:se,icon:t.jsx(Zs,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(jn,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[d&&t.jsx(O.Item,{startIcon:t.jsx(Qs,{}),disabled:x,onSelect:()=>I(!0),children:n({id:l("list.assets.actions.replace"),defaultMessage:"Replace media"})}),p&&t.jsx(O.Item,{startIcon:t.jsx(Ne,{}),onSelect:D,children:n({id:l("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),u&&t.jsx(O.Item,{startIcon:t.jsx(Ys,{}),disabled:k,onSelect:$,children:n({id:l("list.assets.actions.download"),defaultMessage:"Download media"})}),H&&t.jsx(O.Separator,{}),d&&t.jsxs(t.Fragment,{children:[t.jsx(O.Item,{startIcon:t.jsx(Kt,{}),onSelect:()=>y(!0),children:n({id:l("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(O.Item,{startIcon:t.jsx(at,{}),variant:"danger",onSelect:()=>A(!0),children:n({id:l("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]})]}),t.jsx(U.Root,{open:w,onOpenChange:I,children:t.jsxs(U.Content,{children:[t.jsx(U.Header,{children:n({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(U.Body,{textAlign:"center",children:t.jsxs(v,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),f?t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(U.Footer,{children:[t.jsx(U.Cancel,{children:t.jsx(G,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(U.Action,{children:t.jsx(G,{variant:"secondary",onClick:_,fullWidth:!0,children:n({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),M&&t.jsx(Xt,{open:!0,onClose:()=>y(!1),items:F,onSuccess:o}),j&&t.jsx(Jt,{open:!0,onClose:()=>A(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:o})]})},jo=e=>{const s=[],n=[];for(const a of e)a.kind==="file"?s.push(a.id):n.push(a.id);return{fileIds:s,folderIds:n}},ps=(e,s,n)=>{if(s===null)return n;const a=r=>{for(const o of r){if(o.id===s)return o;const i=a(o.children??[]);if(i)return i}return null};return a(e)?.name??n},hs=(e,s,n,a)=>{const r=e.kind==="file"?De(e.id):Ie(e.id),o=Oe(e);if(!s||!s.has(r))return{items:[e],fromSelection:!1,activeSourceFolderId:o,spansMultipleSources:!1};const i=[];return s.forEach(d=>{const u=d.indexOf(":"),p=d.slice(0,u),g=Number(d.slice(u+1));if(p==="asset"){if(e.kind==="file"&&e.id===g){i.push(e);return}i.push({kind:"file",id:g,name:"",folderId:tt(n,"file",g,a)});return}if(e.kind==="folder"&&e.id===g){i.push(e);return}i.push({kind:"folder",id:g,name:"",parentId:tt(n,"folder",g,a)})}),{items:i,fromSelection:!0,activeSourceFolderId:o,spansMultipleSources:i.some(d=>Oe(d)!==o)}},wo=(e,s)=>{const n=new Set;if(e.length===0)return n;$e({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:a}of Zt(s))$e({items:e,targetFolderId:a,folderStructure:s})&&n.add(a);return n},Mo=e=>`file:${e}`,Co=e=>`folder:${e}`,vo=e=>`folder-target:${e}`,So=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Do=e=>`folder-tree-target:${e}`,Dn="folder-tree-target:home",Io=e=>{if(typeof e!="string")return null;if(e===Dn)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},jt=20,wt=24,fs=24,In=b(v)`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,$o=b(In)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,ms=b(v)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,Mt=b(v)`
  flex-shrink: 0;
  width: ${fs}px;
  height: ${fs}px;
  align-items: center;
  justify-content: center;
`,ko=b(v)`
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
`,Ao=({items:e})=>{const{formatMessage:s}=T();if(e.length===0)return null;if(e.length===1){const o=e[0],i=o.kind==="folder",d=i?je:Xe,u=i?jt:wt;return t.jsxs(In,{children:[t.jsx(Mt,{children:t.jsx(d,{width:u,height:u})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:o.name})]})}const n=e.filter(o=>o.kind==="folder").length,a=e.filter(o=>o.kind==="file").length,r=n+a;return t.jsxs($o,{gap:3,children:[n>0?t.jsxs(ms,{children:[t.jsx(Mt,{children:t.jsx(je,{width:jt,height:jt})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,a>0?t.jsxs(ms,{children:[t.jsx(Mt,{children:t.jsx(Xe,{width:wt,height:wt})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:a})})]}):null,t.jsx(ko,{children:t.jsx(R,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:r})})]})},$n=c.createContext(null),de=()=>c.useContext($n),xs=e=>{const s=So(e);if(s!=null)return{destinationFolderId:s};const n=Io(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},Fo=Number.MAX_SAFE_INTEGER,Ro=({children:e,locations:s=ln})=>{const{formatMessage:n}=T(),{toggleNotification:a}=ge(),r=uo(),{currentFolderId:o}=_e(),{data:i=[]}=qt(),d=n({id:l("plugin.name"),defaultMessage:"Media Library"}),[u,{isLoading:p}]=on(),[g,h]=c.useState([]),[x,f]=c.useState(""),m=c.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),w=c.useCallback(D=>{f(""),requestAnimationFrame(()=>f(D))},[]),{canUpdate:I}=le(),M=Qa(Za(tr,{activationConstraint:{distance:I?8:Fo}})),y=c.useMemo(()=>wo(g,i),[g,i]),j=c.useCallback(D=>y.has(D),[y]),A=c.useMemo(()=>({isInternalDragActive:g.length>0,isMovePending:p,isValidDropTarget:j}),[g.length,p,j]),k=c.useCallback(()=>{m.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},h([])},[]),C=c.useCallback(D=>{const $=D.active.data.current;if(!$){k();return}const S=hs($,r?.selectedKeys,s,o);m.current=S,h(S.items)},[k,o,s,r?.selectedKeys]),F=c.useCallback(async D=>{const{over:$}=D,{items:S,fromSelection:B,activeSourceFolderId:H,spansMultipleSources:K}=m.current;if(k(),p||!$||S.length===0)return;const L=xs($.id);if(!L)return;const{destinationFolderId:z}=L;if(!$e({items:S,targetFolderId:z,folderStructure:i}))return;const q=jo(S),Z=Mn({formatMessage:n,count:S.length,source:K?null:ps(i,H,d),destination:ps(i,z,d)}),he=n({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await u({...q,destinationFolderId:z}).unwrap(),B&&r?.clear(),w(Z),a({type:"success",message:Z})}catch(ae){const me=Cn(ae,he);w(n({id:l("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:me})),a({type:"danger",message:me})}},[w,u,k,i,n,p,d,r,a]),_=c.useCallback(()=>{k()},[k]),E=c.useMemo(()=>({onDragStart:({active:D})=>{const $=D.data.current;return $?n({id:l("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:$.name}):""},onDragOver:()=>"",onDragEnd:({active:D,over:$})=>{if(!$)return n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const S=xs($.id),B=D.data.current;if(!S||!B)return"";const{items:H}=hs(B,r?.selectedKeys,s,o);return $e({items:H,targetFolderId:S.destinationFolderId,folderStructure:i})?"":n({id:l("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[o,i,n,s,r?.selectedKeys]);return t.jsx($n.Provider,{value:A,children:t.jsxs(Xa,{sensors:M,collisionDetection:Ja,onDragStart:C,onDragEnd:F,onDragCancel:_,accessibility:{announcements:E},children:[t.jsx(Me,{"aria-live":"polite","aria-atomic":"true",children:x}),t.jsx(v,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(er,{dropAnimation:null,children:g.length>0?t.jsx(Ao,{items:g}):null})]})})},kn=e=>{const{isMovePending:s}=de()??{isMovePending:!1},n=c.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:et(e.folder)}),[e.folder,e.id,e.name]);return{...sn({id:Mo(e.id),data:n,disabled:s}),dragData:n}},An=e=>{const{isMovePending:s,isValidDropTarget:n}=de()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=tn(),r=et(e.parent),o=c.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),i=c.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=sn({id:Co(e.id),data:o,disabled:s}),u=nn({id:vo(e.id),data:i,disabled:s}),p=n(e.id),g=u.isOver,h=g&&p,x=g&&!p&&a!=null;return{dragData:o,draggable:d,droppable:u,isDragging:d.isDragging,showValidDropHighlight:h,showInvalidDropCursor:x}},Eo=b(Y.Content)`
  max-width: 51.6rem;
`,Fn=e=>{const{open:s,parentFolderId:n,onClose:a,mode:r}=e,o=e.mode==="rename"?e.initialName:"",{formatMessage:i}=T(),{toggleNotification:d}=ge(),[u,p]=c.useState(o),[g,h]=c.useState(),x=c.useRef(null),[f,{isLoading:m}]=dr(),[w,{isLoading:I}]=cr(),M=r==="rename"?I:m;c.useEffect(()=>{s&&(p(o),h(void 0),r==="rename"&&x.current?.select())},[s,o,r]);const y=async j=>{j.preventDefault();const A=u.trim();if(!A){h(i({id:l("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?await w({id:e.folderId,name:A,parent:n}).unwrap():await f({name:A,parent:n}).unwrap(),d({type:"success",message:i(r==="rename"?{id:l("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:l("folder.create.success"),defaultMessage:"Folder has been created"})}),a()}catch(k){const C=k;C?.message?h(C.message):d({type:"danger",message:i(r==="rename"?{id:l("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:l("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(Y.Root,{open:s,onOpenChange:a,children:t.jsxs(Eo,{children:[t.jsx(Y.Header,{children:t.jsx(Y.Title,{children:e.mode==="rename"?i({id:l("folder.rename.title"),defaultMessage:"Rename folder"}):i({id:l("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:y,children:[t.jsx(Y.Body,{children:t.jsxs(Q.Root,{error:g,name:"name",required:!0,children:[t.jsx(Q.Label,{children:i({id:l("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(qs,{ref:x,value:u,onChange:j=>{p(j.target.value),h(void 0)},autoFocus:!0}),t.jsx(Q.Error,{})]})}),t.jsx(Y.Footer,{children:t.jsxs(v,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(G,{variant:"tertiary",onClick:a,type:"button",children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",loading:M,disabled:r==="rename"&&u.trim()===o.trim(),children:i(r==="rename"?{id:l("folder.rename.submit"),defaultMessage:"Save"}:{id:l("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Rn=({folder:e,dragData:s})=>{const{formatMessage:n}=T(),{copy:a}=Ut(),{toggleNotification:r}=ge(),{clear:o}=pe(),[i,d]=c.useState(!1),[u,p]=c.useState(!1),[g,h]=c.useState(!1),x=c.useMemo(()=>[s],[s]),f=async()=>{const m=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,w=await a(m);r({type:w?"success":"danger",message:n(w?{id:l("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:l("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})};return t.jsxs(t.Fragment,{children:[t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:se,icon:t.jsx(Zs,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(jn,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[t.jsx(O.Item,{startIcon:t.jsx(Ne,{}),onSelect:f,children:n({id:l("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(O.Separator,{}),t.jsx(O.Item,{startIcon:t.jsx(ha,{}),onSelect:()=>d(!0),children:n({id:l("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(O.Item,{startIcon:t.jsx(Kt,{}),onSelect:()=>p(!0),children:n({id:l("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(O.Item,{startIcon:t.jsx(at,{}),variant:"danger",onSelect:()=>h(!0),children:n({id:l("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]})]}),i&&t.jsx(Fn,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:s.parentId,onClose:()=>d(!1)}),u&&t.jsx(Xt,{open:!0,onClose:()=>p(!1),items:x,onSuccess:o}),g&&t.jsx(Jt,{open:!0,onClose:()=>h(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:o})]})},Se=e=>{J(e)&&e.stopPropagation()},To=b(v)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,Lo=b(ma)`
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
`,Po=b(N)`
  grid-column: 1 / -1;
`,Oo=b(v)`
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

  ${({$isValidDropTarget:e,theme:s})=>e&&Ae`
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
`,No=b(v)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,Bo=b(R)`
  flex: 1;
  min-width: 0;
`,_o=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=T(),{navigateToFolder:a}=_e(),{isMovePending:r}=de()??{isMovePending:!1},{isSelected:o,toggle:i,selectRange:d}=pe(),{canUpdate:u}=le(),{dragData:p,draggable:{attributes:g,listeners:h,setNodeRef:x,isDragging:f},droppable:{setNodeRef:m},showValidDropHighlight:w,showInvalidDropCursor:I}=An(e),M=Ie(e.id),y=C=>{x(C),m(C)},j=C=>{J(C)&&(C.shiftKey?d(s,M):C.metaKey||C.ctrlKey?i(M):a(e))},A=C=>{J(C)&&(C.key==="Enter"?(C.preventDefault(),a(e)):C.key===" "&&(C.preventDefault(),i(M)))},k=C=>{C.stopPropagation(),C.shiftKey?d(s,M):i(M)};return t.jsxs(Oo,{ref:y,...g,...h,$isDragging:f,$isMovePending:r,$isValidDropTarget:w,$isInvalidDropTarget:I,$isSelected:o(M),onClick:j,onKeyDown:A,onPointerDown:C=>{J(C)&&h?.onPointerDown?.(C)},role:"listitem",tabIndex:0,children:[u&&t.jsx(v,{onKeyDown:C=>C.stopPropagation(),children:t.jsx(Ce,{checked:o(M),onClick:k,"aria-label":n({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(No,{children:t.jsx(je,{width:20,height:20})}),t.jsx(Bo,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(v,{onClick:Se,onKeyDown:Se,onPointerDown:Se,children:t.jsx(Rn,{folder:e,dragData:p})})]})},ys=b(N)`
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
`,zo=b.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Uo=b(v)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,Ko=({asset:e})=>{const{alternativeText:s,ext:n,formats:a,mime:r,url:o,updatedAt:i,isLocal:d,isUrlSigned:u}=e;if(r?.includes(fe.Image)){const g=i&&!u?new Date(i).getTime():void 0,h=m=>g===void 0?m:m.includes("?")?`${m}&v=${g}`:`${m}?v=${g}`,x=ue(a?.thumbnail?.url)??ue(o),f=x&&h(x);if(f)return t.jsx(ys,{children:t.jsx(zo,{src:f,alt:s||"",crossOrigin:!d&&u?"anonymous":void 0,draggable:!1,onDragStart:m=>m.preventDefault()})})}const p=Be(r,n);return t.jsx(ys,{children:t.jsx(Uo,{justifyContent:"center",alignItems:"center",children:t.jsx(p,{width:48,height:48})})})},Ho=b(xa)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Vo=b(v)`
  min-width: 0;
  width: 100%;
`,Wo=b(v)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,qo=b(R)`
  flex: 1;
  min-width: 0;
`,Go=b.button`
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
`,Yo=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:a}=T(),r=Be(e.mime,e.ext),{isMovePending:o}=de()??{isMovePending:!1},{attributes:i,listeners:d,setNodeRef:u,isDragging:p,dragData:g}=kn(e),{isSelected:h,toggle:x,selectRange:f}=pe(),{canUpdate:m}=le(),w=Qt()?.getBusyMessage(e.id)??null,I=De(e.id),M=h(I),y=C=>{J(C)&&(C.shiftKey?f(s,I):C.metaKey||C.ctrlKey?x(I):n(e.id))},j=C=>{J(C)&&(C.key==="Enter"?(C.preventDefault(),n(e.id)):C.key===" "&&(C.preventDefault(),x(I)))},A=C=>{C.stopPropagation(),n(e.id)},k=C=>{C.stopPropagation(),C.shiftKey?f(s,I):x(I)};return t.jsxs(Lo,{ref:u,...i,...d,$isDragging:p,$isMovePending:o,$isBusy:w!==null,$isSelected:M,tabIndex:0,role:"listitem",onDragStart:C=>C.preventDefault(),onClick:y,onKeyDown:j,onPointerDown:C=>{J(C)&&d?.onPointerDown?.(C)},children:[t.jsxs(Ho,{children:[m&&t.jsx(To,{onKeyDown:C=>C.stopPropagation(),children:t.jsx(Ce,{checked:M,onClick:k,"aria-label":a({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Ko,{asset:e}),w!==null?t.jsx(gn,{zIndex:2,children:w}):null]}),t.jsx(fa,{children:t.jsxs(Vo,{alignItems:"center",gap:2,children:[t.jsx(Wo,{children:t.jsx(r,{width:20,height:20})}),t.jsx(Go,{type:"button",onClick:A,children:t.jsx(qo,{textColor:"primary800",ellipsis:!0,children:e.name})}),t.jsx(v,{onClick:Se,onKeyDown:Se,onPointerDown:Se,children:t.jsx(Sn,{asset:e,dragData:g})})]})})]})},Qo=({assets:e,folders:s=[],onAssetItemClick:n})=>{const a=s.length+e.length,r=[...s.map(o=>Ie(o.id)),...e.map(o=>De(o.id))];return a===0?null:t.jsxs(Ve.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(Po,{children:t.jsx(Ve.Root,{gap:4,children:s.map(o=>t.jsx(Ve.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(_o,{folder:o,orderedItemKeys:r})},`folder-${o.id}`))})}),e.map(o=>t.jsx(Ve.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(Yo,{asset:o,orderedItemKeys:r,onAssetItemClick:n})},o.id))]})},En=()=>{const[{query:e},s]=ke(),n=e?._q??"",a=c.useCallback(o=>{o?s({_q:Vt(o)},"push",!0):s({_q:""},"remove",!0)},[s]),r=c.useCallback(()=>a(""),[a]);return{searchQuery:n,isSearching:n!=="",setSearchQuery:a,clearSearch:r}},Zo=300,Xo=b(ja)`
  > div {
    border: none;
  }
`,Jo=()=>{const{formatMessage:e}=T(),{searchQuery:s,setSearchQuery:n}=En(),a=Xs(),[r,o]=c.useState(s),i=ya(r,Zo),d=c.useRef(s),[{query:u}]=ke(),p=u?.folder??"",g=c.useRef(p);c.useEffect(()=>{i!==d.current&&(d.current=i,n(i))},[i,n]),c.useEffect(()=>{s!==d.current&&(d.current=s,o(s))},[s]),c.useEffect(()=>{p!==g.current&&(g.current=p,d.current=s,o(s))},[p,s]);const h=t.jsx(Xo,{onSubmit:x=>x.preventDefault(),children:t.jsx(ba,{name:"search-assets",value:r,onChange:x=>o(x.target.value),onClear:()=>o(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:l("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:l("search.label"),defaultMessage:"Search for an asset"})})});return a?t.jsx(N,{width:"100%",children:h}):h},ei={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},Le={GRID:0,TABLE:1},bs=[{name:"name",label:{id:l("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:l("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:l("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:l("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:l("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],ti=b(Ca)`
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
`,si=b(va)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Et=b(Sa)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,ne=b(Da)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Tn=b.tr`
  height: 48px;
  user-select: none;
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isBusy:s,$isInvalidDropTarget:n})=>e||s?"wait":n?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e,$isBusy:s})=>e||s?.4:1};
  pointer-events: ${({$isMovePending:e,$isBusy:s})=>e||s?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&Ae`
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
    ${ne} {
      border-bottom: 0;
    }
  }
`,Ln=b(ne)`
  width: 5.6rem;
  white-space: nowrap;
`,ni=b(Et)`
  width: 5.6rem;
  white-space: nowrap;
`,ai=b(rt)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,ri=b.button`
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
`,ie=e=>{J(e)&&e.stopPropagation()},oi=({asset:e})=>{const{ext:s,mime:n}=e,a=Be(n,s);return t.jsx(v,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(a,{width:20,height:20})})},js=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const a=Ht(),{formatDate:r,formatMessage:o}=T(),{isMovePending:i}=de()??{isMovePending:!1},{attributes:d,listeners:u,setNodeRef:p,isDragging:g,dragData:h}=kn(e),{isSelected:x,toggle:f,selectRange:m}=pe(),{canUpdate:w}=le(),I=Qt()?.getBusyMessage(e.id)??null,M=De(e.id),y=x(M),j=!e.caption||!e.alternativeText,A=o({id:l("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),k=E=>{J(E)&&(E.shiftKey?m(s,M):E.metaKey||E.ctrlKey?f(M):n(e.id))},C=E=>{J(E)&&(E.key==="Enter"?(E.preventDefault(),n(e.id)):E.key===" "&&(E.preventDefault(),f(M)))},F=E=>{E.stopPropagation(),n(e.id)},_=E=>{E.stopPropagation(),E.shiftKey?m(s,M):f(M)};return t.jsxs(Tn,{ref:p,...d,...u,$isDragging:g,$isMovePending:i,$isBusy:I!==null,$isSelected:y,tabIndex:0,role:"row",onDragStart:E=>E.preventDefault(),onClick:k,onKeyDown:C,onPointerDown:E=>{J(E)&&u?.onPointerDown?.(E)},children:[w&&t.jsx(Ln,{onClick:ie,onKeyDown:ie,children:t.jsx(v,{children:t.jsx(Ce,{checked:y,onClick:_,"aria-label":o({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(ne,{children:t.jsxs(v,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs(v,{gap:3,alignItems:"center",minWidth:0,children:[I!==null?t.jsx(v,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx(be,{small:!0,children:I})}):t.jsx(oi,{asset:e}),t.jsxs(v,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(ri,{type:"button",onClick:F,children:t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})}),!a&&t.jsx(R,{textColor:"neutral600",variant:"pi",children:e.size?Rt(e.size,1):"-"})]})]}),j&&t.jsx(nt,{label:A,children:t.jsx(ai,{"aria-label":A,role:"img"})})]})}),a&&t.jsxs(t.Fragment,{children:[t.jsx(ne,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(ne,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(ne,{children:t.jsx(R,{textColor:"neutral600",children:e.size?Rt(e.size,1):"-"})})]}),t.jsx(ne,{onClick:ie,onKeyDown:ie,onPointerDown:ie,children:t.jsx(v,{justifyContent:"flex-end",children:t.jsx(Sn,{asset:e,dragData:h})})})]})},ii=b(Tn)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,ws=({folder:e,orderedItemKeys:s})=>{const n=Ht(),{formatDate:a,formatMessage:r}=T(),{navigateToFolder:o}=_e(),{isSelected:i,toggle:d,selectRange:u}=pe(),{canUpdate:p}=le(),{isMovePending:g}=de()??{isMovePending:!1},{dragData:h,draggable:{attributes:x,listeners:f,setNodeRef:m,isDragging:w},droppable:{setNodeRef:I},showValidDropHighlight:M,showInvalidDropCursor:y}=An(e),j=Ie(e.id),A=F=>{J(F)&&(F.shiftKey?u(s,j):F.metaKey||F.ctrlKey?d(j):o(e))},k=F=>{J(F)&&(F.key==="Enter"?(F.preventDefault(),o(e)):F.key===" "&&(F.preventDefault(),d(j)))},C=F=>{F.stopPropagation(),F.shiftKey?u(s,j):d(j)};return t.jsxs(ii,{ref:F=>{m(F),I(F)},...x,...f,$isDragging:w,$isMovePending:g,$isValidDropTarget:M,$isInvalidDropTarget:y,$isSelected:i(j),tabIndex:0,role:"row",onDragStart:F=>{J(F)&&F.preventDefault()},onClick:A,onKeyDown:k,onPointerDown:F=>{J(F)&&f?.onPointerDown?.(F)},children:[p&&t.jsx(Ln,{onClick:ie,onKeyDown:ie,children:t.jsx(v,{children:t.jsx(Ce,{checked:i(j),onClick:C,"aria-label":r({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(ne,{children:t.jsxs(v,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx(v,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(je,{width:20,height:20})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),n&&t.jsxs(t.Fragment,{children:[t.jsx(ne,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(ne,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(ne,{children:t.jsx(R,{textColor:"neutral600",children:"-"})})]}),t.jsx(ne,{onClick:ie,onKeyDown:ie,onPointerDown:ie,children:t.jsx(v,{justifyContent:"flex-end",children:t.jsx(Rn,{folder:e,dragData:h})})})]})},li=({assets:e,folders:s=[],mixedItems:n=null,onAssetItemClick:a})=>{const r=Ht(),{formatMessage:o}=T(),{selectedKeys:i,selectAll:d,clear:u}=pe(),{canUpdate:p}=le(),g=r?bs:bs.filter(y=>y.name==="name"||y.name==="actions"),h=p,x=g.length+(h?1:0),f=s.length+e.length,m=n?n.map(y=>y.kind==="folder"?Ie(y.folder.id):De(y.asset.id)):[...s.map(y=>Ie(y.id)),...e.map(y=>De(y.id))],{allSelected:w,isIndeterminate:I}=lo(i,m),M=()=>{w?u():d(m)};return f===0?null:t.jsxs(ti,{colCount:x,rowCount:(n?n.length:f)+1,children:[t.jsx(si,{children:t.jsxs(wa,{children:[h&&t.jsx(ni,{children:t.jsx(v,{children:t.jsx(Ce,{checked:I?"indeterminate":w,disabled:m.length===0,onCheckedChange:M,"aria-label":o({id:l("list.table.header.select-all"),defaultMessage:"Select all"})})})}),g.map(y=>{const j=o(y.label);return"isVisuallyHidden"in y&&y.isVisuallyHidden?t.jsx(Et,{children:t.jsx(Me,{children:o({id:l("table.header.actions"),defaultMessage:"actions"})})},y.name):t.jsx(Et,{children:t.jsx(R,{textColor:"neutral600",variant:"sigma",children:j})},y.name)})]})}),t.jsxs(Ma,{children:[n?.map(y=>y.kind==="folder"?t.jsx(ws,{folder:y.folder,orderedItemKeys:m},`folder-${y.folder.id}`):t.jsx(js,{asset:y.asset,orderedItemKeys:m,onAssetItemClick:a},y.asset.id)),!n&&s.map(y=>t.jsx(ws,{folder:y,orderedItemKeys:m},`folder-${y.id}`)),!n&&e.map(y=>t.jsx(js,{asset:y,orderedItemKeys:m,onAssetItemClick:a},y.id))]})]})},di=(e,s,n,a)=>{const r=[];return e.forEach(o=>{r.push({kind:"file",id:o,name:"",folderId:tt(n,"file",o,a)})}),s.forEach(o=>{r.push({kind:"folder",id:o,name:"",parentId:tt(n,"folder",o,a)})}),r},ci=b(v)`
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
`,ui=b(v)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,gi=b(N)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,pi=({assets:e=[],locations:s=ln})=>{const{formatMessage:n}=T(),{toggleNotification:a}=ge(),r=dt(),{canUpdate:o}=le(),{selectedIds:i,selectedFolderIds:d,clear:u}=pe(),{currentFolderId:p}=_e(),[g,{isLoading:h}]=Ia(),[x,f]=c.useState(!1),[m,w]=c.useState(!1),[I,M]=c.useState(!1),y=i.size+d.size,j=I||h,A=c.useMemo(()=>di(i,d,s,p),[i,d,s,p]),k=i.size>ds,C=c.useMemo(()=>{const D=new Map(e.map(({id:$,mime:S})=>[$,S]));return[...i].filter($=>an(D.get($))).length},[e,i]),F=i.size>0&&C===0;let _;k?_=n({id:l("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:ds}):F&&(_=n({id:l("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const E=async()=>{if(h||k||F)return;const D=Array.from(i),$=await g({fileIds:D});if("error"in $){a({type:"danger",message:n({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const S=$.data.filter(({status:L})=>L==="success").length,B=$.data.filter(({status:L})=>L==="skipped").length,H=$.data.filter(({status:L})=>L==="error").length,K=d.size;if(H===$.data.length){a({type:"danger",message:n({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}a(B===0&&H===0&&K===0?{type:"success",message:n({id:l("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:S})}:{type:"warning",message:n({id:l("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:S,skippedCount:B,errorCount:H,folderCount:K})}),u()};return y===0||!o?null:t.jsxs(ci,{tag:"section",role:"region","aria-label":n({id:l("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(R,{fontWeight:"bold",textColor:"neutral800",marginRight:4,children:n({id:l("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:y})}),t.jsxs(ui,{children:[r&&t.jsx(nt,{label:_,children:t.jsx(N,{children:t.jsx(G,{size:"S",startIcon:t.jsx($a,{}),disabled:j||i.size===0||k||F,loading:h,onClick:E,children:n({id:l("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(se,{variant:"tertiary",disabled:j,label:n({id:l("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>w(!0),children:t.jsx(Kt,{})}),t.jsx(Xt,{open:m,onClose:()=>w(!1),items:A,onSuccess:u}),t.jsx(se,{variant:"danger-light",disabled:j,label:n({id:l("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>f(!0),children:t.jsx(at,{})}),t.jsx(Jt,{open:x,onClose:()=>f(!1),target:{fileIds:Array.from(i),folderIds:Array.from(d)},onSuccess:u,onPendingChange:M})]}),t.jsx(gi,{"aria-hidden":!0}),t.jsx(se,{variant:"ghost",label:n({id:l("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:u,disabled:j,children:t.jsx(ot,{})})]})},Pn=c.createContext(null),hi=b(N)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,fi=({children:e,onDrop:s,disabled:n=!1})=>{const[a,r]=c.useState(!1),o=c.useRef(0),i={isDragging:a};c.useEffect(()=>{const h=()=>{r(!1),o.current=0},x=f=>{f.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",h),document.addEventListener("dragleave",x),()=>{document.removeEventListener("dragend",h),document.removeEventListener("dragleave",x)}},[]);const d=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),!n&&h.dataTransfer.types.includes("Files")&&(o.current+=1,r(!0))},[n]),u=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),p=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),h.dataTransfer.dropEffect="copy"},[]),g=c.useCallback(h=>{if(h.preventDefault(),h.stopPropagation(),r(!1),o.current=0,n)return;const{files:x}=h.dataTransfer;x?.length&&s&&s(Array.from(x))},[s,n]);return t.jsx(Pn.Provider,{value:i,children:t.jsx(hi,{"data-testid":"assets-dropzone",onDragEnter:d,onDragLeave:u,onDragOver:p,onDrop:g,children:e})})},On=()=>{const e=c.useContext(Pn);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},mi=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,xi=b(N)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>mi(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,yi=({children:e})=>{const{isDragging:s}=On(),a=de()?.isInternalDragActive??!1,r=s&&!a;return t.jsxs(N,{position:"relative",children:[r&&t.jsx(xi,{}),e]})},bi=b(N)`
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
`,ji=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=T(),{isDragging:a}=On(),o=de()?.isInternalDragActive??!1,i=a&&!o,[d,u]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const p=()=>{const h=e.current?.getBoundingClientRect();h&&u(x=>x!==h.left?h.left:x)};p();const g=new ResizeObserver(p);return g.observe(e.current),()=>g.disconnect()},[e]),i?t.jsxs(bi,{$leftContentWidth:d,children:[t.jsx(R,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(v,{gap:2,alignItems:"center",children:[t.jsx(je,{width:20,height:20,fill:"neutral0"}),t.jsx(R,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},wi=({onAddAssets:e,canAddAssets:s,searchQuery:n,onClearSearch:a})=>{const{formatMessage:r}=T(),o=!!n;return t.jsxs(v,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(Js,{width:"16rem",height:"8.8rem"}),t.jsxs(v,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(R,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:r(o?{id:l("list.search.empty.title"),defaultMessage:"No results found"}:{id:l("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(R,{textColor:"neutral600",children:o?r({id:l("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:n}):r({id:l("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),o?t.jsx(G,{variant:"secondary",startIcon:t.jsx(ot,{"aria-hidden":!0}),onClick:a,children:r({id:l("list.search.empty.clear"),defaultMessage:"Clear search"})}):s&&t.jsx(G,{onClick:e,children:r({id:l("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},Mi=({onClearFilters:e})=>{const{formatMessage:s}=T();return t.jsxs(v,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(Js,{width:"16rem",height:"8.8rem"}),t.jsx(R,{textColor:"neutral600",children:s({id:l("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(G,{variant:"secondary",startIcon:t.jsx(ot,{"aria-hidden":!0}),onClick:e,children:s({id:l("list.filters.clear"),defaultMessage:"Clear filters"})})]})},es=["folder","picture","audio","video","document"],ts=["1day","3days","1week","1month","3months","6months","1year"],Ci={created:"createdAt",updated:"updatedAt"},vi={createdAt:"created",updatedAt:"updated"},Ms={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},Si={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},Cs={rangeis:"is",rangenot:"isNot"},Di={is:"rangeis",isNot:"rangenot"},vs=/^\d{4}-\d{2}-\d{2}$/,Ii=e=>es.includes(e),$i=e=>ts.includes(e),ki=e=>{const[s,n,a]=e.split(":");if(!s||!n||!a)return null;if(s==="type"){if(n!=="is"&&n!=="not")return null;const o=a.split(",").filter(Ii);return o.length>0?{kind:"type",condition:n==="is"?"is":"isNot",values:o}:null}const r=Ci[s];if(!r)return null;if(n in Ms)return $i(a)?{kind:"date",field:r,mode:"preset",condition:Ms[n],preset:a}:null;if(n in Cs){const[o,i]=a.split("..");return vs.test(o??"")&&vs.test(i??"")?{kind:"date",field:r,mode:"range",condition:Cs[n],from:o,to:i}:null}return null},Ai=e=>typeof e!="string"||e===""?[]:e.split(";").map(ki).filter(s=>s!==null),Fi=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const s=vi[e.field];return e.mode==="preset"?`${s}:${Si[e.condition]}:${e.preset}`:`${s}:${Di[e.condition]}:${e.from}..${e.to}`},Ss=e=>e.map(Fi).join(";"),Ri=()=>{const[{query:e},s]=ke(),n=Ai(e?.filters),a=r=>{r.length===0?s({filters:""},"remove",!0):s({filters:Ss(r)},"push",!0)};return{filters:n,serialized:Ss(n),addFilter:r=>a([...n,r]),updateFilter:(r,o)=>a(n.map((i,d)=>d===r?o:i)),removeFilter:r=>a(n.filter((o,i)=>i!==r)),clearFilters:()=>a([])}},Tt={picture:"image",audio:"audio",video:"video"},Ds=Object.values(Tt),Ei={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},Ti=(e,s)=>{const{days:n=0,months:a=0,years:r=0}=Ei[s],o=new Date(e.getTime());if(r||a){const i=o.getDate();o.setDate(1),o.setFullYear(o.getFullYear()-r),o.setMonth(o.getMonth()-a);const d=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();o.setDate(Math.min(i,d))}return o.setDate(o.getDate()-n),o},Is=e=>{const s=new Date(e.getTime());return s.setHours(0,0,0,0),s},$s=e=>{const s=new Date(e.getTime());return s.setHours(23,59,59,999),s},st=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},Li=(e,s)=>{const{field:n}=e;if(e.mode==="preset"){const o=Ti(s,e.preset);switch(e.condition){case"withinLast":return{[n]:{$gte:o.toISOString()}};case"notWithinLast":return{[n]:{$lt:o.toISOString()}};case"isExactly":return{[n]:{$gte:Is(o).toISOString(),$lte:$s(o).toISOString()}}}}const a=Is(st(e.from)).toISOString(),r=$s(st(e.to)).toISOString();return e.condition==="is"?{[n]:{$gte:a,$lte:r}}:{$or:[{[n]:{$lt:a}},{[n]:{$gt:r}}]}},Pi=e=>{const s=e.values.filter(r=>r!=="folder");if(s.length===0)return null;const n=s.map(r=>r==="document"?{$and:Ds.map(o=>({mime:{$notContains:o}}))}:{mime:{$contains:Tt[r]}});if(e.condition==="is")return n.length===1?n[0]:{$or:n};const a=s.map(r=>r==="document"?{$or:Ds.map(o=>({mime:{$contains:o}}))}:{mime:{$notContains:Tt[r]}});return a.length===1?a[0]:{$and:a}},Oi=(e,s)=>{const n=[],a=[];let r=!0,o=!0;for(const i of e){if(i.kind==="date"){const p=Li(i,s);n.push(p),a.push(p);continue}const d=i.values.includes("folder");(i.condition==="is"?!d:d)&&(r=!1);const u=Pi(i);u?n.push(u):i.condition==="is"&&(o=!1)}return{fileClauses:n,folderClauses:a,showFolders:r,showFiles:o}},Ni=b.button`
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
`,ks=e=>{const s=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`},Bi=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},_i=(e,s)=>{const n=new Date(e,s,1),a=new Date(n.getTime());a.setDate(n.getDate()-(n.getDay()+6)%7);const r=[],o=new Date(a.getTime());do{const i=[];for(let d=0;d<7;d+=1)i.push(new Date(o.getTime())),o.setDate(o.getDate()+1);r.push(i)}while(o.getMonth()===s&&o.getFullYear()===e);return r},Lt=({from:e,to:s,onSelect:n})=>{const{formatMessage:a,formatDate:r}=T(),o=e?Bi(e):new Date,[i,d]=c.useState(o.getFullYear()),[u,p]=c.useState(o.getMonth()),[g,h]=c.useState(null),x=g??e??null,f=g?null:s??null,m=y=>{const j=new Date(i,u+y,1);d(j.getFullYear()),p(j.getMonth())},w=y=>{const j=ks(y);if(!g){h(j);return}const[A,k]=j<g?[j,g]:[g,j];h(null),n(A,k)},I=_i(i,u),M=I[0].map(y=>r(y,{weekday:"short"}).slice(0,2));return t.jsxs(N,{padding:2,width:"100%",role:"group","aria-label":a({id:l("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs(v,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(se,{variant:"ghost",label:a({id:l("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>m(-1),children:t.jsx(ka,{})}),t.jsx(R,{fontWeight:"semiBold",textColor:"neutral800",children:r(new Date(i,u,1),{month:"long",year:"numeric"})}),t.jsx(se,{variant:"ghost",label:a({id:l("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>m(1),children:t.jsx(Aa,{})})]}),t.jsx(v,{children:M.map((y,j)=>t.jsx(v,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(R,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:y})},j))}),I.map((y,j)=>t.jsx(v,{children:y.map(A=>{const k=ks(A),C=k===x||k===f,F=x!==null&&f!==null&&k>x&&k<f;return t.jsxs(Ni,{type:"button",$isEdge:C,$inRange:F,$isMuted:A.getMonth()!==u,onClick:()=>w(A),children:[t.jsx(Me,{children:r(A,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:A.getDate()})]},k)})},j))]})},Pt={folder:{id:l("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:l("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:l("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:l("list.filters.type.video"),defaultMessage:"Video"},document:{id:l("list.filters.type.document"),defaultMessage:"Document"}},Ot={"1day":{id:l("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:l("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:l("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:l("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:l("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:l("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:l("list.filters.preset.1year"),defaultMessage:"1 year ago"}},Nt={createdAt:{id:l("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:l("list.filters.field.updated"),defaultMessage:"Last modified"}},Ct=b(O.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,ve="24.2rem",vt="70dvh",zi=`min(${ve}, calc(100dvw - 2rem))`,St=b(O.Item)`
  width: 100%;
`,As=b(N)`
  width: 100%;

  > * {
    width: 100%;
  }

  /* menuitem, menuitemradio and menuitemcheckbox — every option row, plus the
     "Select date range" toggle, which sits at the same level. */
  > [role^='menuitem'] {
    padding-left: ${({theme:e})=>e.spaces[6]};
  }
`,Dt=b(it)`
  transition: transform 0.2s ease;
  transform: rotate(${({$open:e})=>e?"180deg":"0deg"});
`,It=b(O.SubContent)`
  margin-top: calc(-1 * (${({theme:e})=>e.spaces[1]} + 1px));
`,Ui=b(Ra)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,Ki=({listFilters:e})=>{const{formatMessage:s}=T(),[n,a]=c.useState(!1),{filters:r,addFilter:o,updateFilter:i,removeFilter:d}=e;let u=-1;for(let D=r.length-1;D>=0;D-=1)if(r[D].kind==="type"){u=D;break}const p=u>=0?r[u]:null,g=p&&p.kind==="type"?p.values:[],h=D=>{const $=g.includes(D)?g.filter(S=>S!==D):[...g,D];p&&p.kind==="type"?$.length===0?d(u):i(u,{...p,values:$}):$.length>0&&o({kind:"type",condition:"is",values:$})},x=(D,$)=>{for(let S=r.length-1;S>=0;S-=1){const B=r[S];if(B.kind==="date"&&B.mode==="preset"&&B.field===D){i(S,{...B,preset:$});return}}o({kind:"date",field:D,mode:"preset",condition:"withinLast",preset:$})},f=(D,$)=>{o({kind:"date",field:"createdAt",mode:"range",condition:"is",from:D,to:$}),a(!1)},m=Xs(),[w,I]=c.useState(null),[M,y]=c.useState(!1),j=D=>{a(D),D||(I(null),y(!1))},A=D=>{I($=>$===D?null:D),y(!1)},k=es.map(D=>t.jsx(O.Item,{role:"menuitemcheckbox","aria-checked":g.includes(D),onSelect:$=>{$.preventDefault(),h(D)},startIcon:t.jsx(Ce,{checked:g.includes(D),tabIndex:-1,"aria-hidden":!0}),children:s(Pt[D])},D)),C=D=>{for(let $=r.length-1;$>=0;$-=1){const S=r[$];if(S.kind==="date"&&S.mode==="preset"&&S.field===D)return S.preset}return null},F=D=>{const $=C(D);return ts.map(S=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":$===S,onSelect:()=>{x(D,S)},endIcon:$===S?t.jsx(lt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:s(Ot[S])},S))},_=s({id:l("list.filters.field.type"),defaultMessage:"Type"}),E=s({id:l("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(O.Root,{open:n,onOpenChange:j,children:[t.jsx(O.Trigger,{variant:"tertiary",startIcon:t.jsx(Fa,{"aria-hidden":!0}),endIcon:null,children:t.jsxs(v,{gap:2,alignItems:"center",tag:"span",children:[s({id:l("list.filters.trigger"),defaultMessage:"Filter"}),r.length>0&&t.jsx(Ui,{children:r.length})]})}),t.jsx(O.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:vt,width:m?zi:ve,children:m?t.jsxs(t.Fragment,{children:[t.jsx(St,{"aria-expanded":w==="type",onSelect:D=>{D.preventDefault(),A("type")},endIcon:t.jsx(Dt,{$open:w==="type","aria-hidden":!0}),children:_}),w==="type"&&t.jsx(As,{children:k}),["createdAt","updatedAt"].map(D=>t.jsxs(N,{width:"100%",children:[t.jsx(St,{"aria-expanded":w===D,onSelect:$=>{$.preventDefault(),A(D)},endIcon:t.jsx(Dt,{$open:w===D,"aria-hidden":!0}),children:s(Nt[D])}),w===D&&t.jsxs(As,{children:[F(D),D==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx(St,{"aria-expanded":M,onSelect:$=>{$.preventDefault(),y(S=>!S)},endIcon:t.jsx(Dt,{$open:M,"aria-hidden":!0}),children:E}),M&&t.jsx(N,{paddingLeft:2,children:t.jsx(Lt,{onSelect:f})})]})]})]},D))]}):t.jsxs(t.Fragment,{children:[t.jsxs(O.SubRoot,{children:[t.jsx(Ct,{children:_}),t.jsx(It,{zIndex:2,maxHeight:vt,width:ve,children:k})]}),["createdAt","updatedAt"].map(D=>t.jsxs(O.SubRoot,{children:[t.jsx(Ct,{children:s(Nt[D])}),t.jsxs(It,{zIndex:2,maxHeight:vt,width:ve,children:[F(D),D==="createdAt"&&t.jsxs(O.SubRoot,{children:[t.jsx(Ct,{children:E}),t.jsx(It,{zIndex:2,maxHeight:"none",width:ve,children:t.jsx(Lt,{onSelect:f})})]})]})]},D))]})})]})},Hi=b(v)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,ss=b.button`
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
`,Vi=b.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ns=b(we.Content)`
  width: ${ve};
`,Nn=b.button`
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
`,Wi=b.button`
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
`,Fs={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Rs={isExactly:{id:l("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:l("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:l("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},Es={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},$t=({label:e,options:s,active:n,getOptionLabel:a,onPick:r})=>{const[o,i]=c.useState(!1);return t.jsxs(we.Root,{open:o,onOpenChange:i,children:[t.jsx(we.Trigger,{children:t.jsx(ss,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(ns,{children:t.jsx(v,{direction:"column",alignItems:"stretch",padding:1,children:s.map(d=>t.jsxs(Nn,{type:"button",onClick:()=>{r(d),i(!1)},children:[a(d),d===n&&t.jsx(lt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))})})]})},qi=({filter:e,onChange:s})=>{const{formatMessage:n}=T(),[a,r]=c.useState(!1),o=e.values.map(d=>n(Pt[d])).join(", "),i=d=>{const u=e.values.includes(d)?e.values.filter(p=>p!==d):[...e.values,d];u.length>0&&s({...e,values:u})};return t.jsxs(we.Root,{open:a,onOpenChange:r,children:[t.jsx(we.Trigger,{children:t.jsx(ss,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:o})})}),t.jsx(ns,{children:t.jsx(v,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:es.map(d=>t.jsx(Ce,{checked:e.values.includes(d),onCheckedChange:()=>i(d),children:n(Pt[d])},d))})})]})},Ts=({filter:e,onChange:s})=>{const{formatMessage:n,formatDate:a}=T(),[r,o]=c.useState(!1),i=e.mode==="preset"?n(Ot[e.preset]):`${a(st(e.from),{day:"2-digit",month:"short"})} - ${a(st(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(we.Root,{open:r,onOpenChange:o,children:[t.jsx(we.Trigger,{children:t.jsx(ss,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(ns,{children:e.mode==="preset"?t.jsx(v,{direction:"column",alignItems:"stretch",padding:1,children:ts.map(d=>t.jsxs(Nn,{type:"button",onClick:()=>{s({...e,preset:d}),o(!1)},children:[n(Ot[d]),d===e.preset&&t.jsx(lt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))}):t.jsx(Lt,{from:e.from,to:e.to,onSelect:(d,u)=>{s({...e,from:d,to:u}),o(!1)}})})]})},Gi=({filter:e,onChange:s,onRemove:n})=>{const{formatMessage:a}=T(),r=e.kind==="type"?a({id:l("list.filters.field.type"),defaultMessage:"Type"}):a(Nt[e.field]);return t.jsxs(Hi,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(Vi,{children:t.jsx(R,{variant:"pi",textColor:"neutral600",children:r})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx($t,{label:a(Fs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Fs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(qi,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx($t,{label:a(Rs[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:o=>a(Rs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Ts,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx($t,{label:a(Es[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Es[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Ts,{filter:e,onChange:s})]}),t.jsx(Wi,{type:"button",onClick:n,"aria-label":a({id:l("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:r}),children:t.jsx(ot,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},Yi=b(v)`
  padding-top: ${({theme:e,$compact:s})=>s?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,Qi=({listFilters:e,compact:s=!1})=>{const{filters:n,updateFilter:a,removeFilter:r}=e;return n.length===0?null:t.jsx(Yi,{$compact:s,gap:2,wrap:"wrap","data-testid":"filter-badges",children:n.map((o,i)=>t.jsx(Gi,{filter:o,onChange:d=>a(i,d),onRemove:()=>r(i)},i))})},Bn=e=>{const{isMovePending:s,isValidDropTarget:n}=de()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=tn(),r=e.id==null?Dn:Do(e.id),o={kind:"folder-tree-target",id:e.id,name:e.name},i=nn({id:r,data:o,disabled:s}),d=n(e.id),u=i.isOver;return{droppable:i,isOver:u,showValidDropHighlight:u&&d,showInvalidDropCursor:u&&!d&&a!=null}},Zi=600,Xi=({isOver:e,canExpand:s,onExpand:n})=>{c.useEffect(()=>{if(!e||!s)return;const a=setTimeout(n,Zi);return()=>clearTimeout(a)},[e,s,n])},_n=b.button`
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

  ${({$isValidDropTarget:e,theme:s})=>e&&Ae`
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
`,Ji=b(v)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&Ae`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,zn=(e,s,n=[])=>{for(const a of e){if(a.id===s)return n;if(a.children?.length){const r=a.id!=null?[...n,a.id]:n,o=zn(a.children,s,r);if(o!==null)return o}}return null},el=(e,s)=>{const[n,a]=c.useState(()=>new Set);c.useEffect(()=>{if(s==null)return;const d=zn(e,s);!d||d.length===0||a(u=>{const p=new Set(u);let g=!1;for(const h of d)p.has(h)||(p.add(h),g=!0);return g?p:u})},[e,s]);const r=c.useCallback(d=>{a(u=>{const p=new Set(u);return p.has(d)?p.delete(d):p.add(d),p})},[]),o=c.useCallback(d=>{a(u=>{if(u.has(d))return u;const p=new Set(u);return p.add(d),p})},[]);return{isExpanded:c.useCallback(d=>n.has(d),[n]),toggleExpanded:r,expandFolder:o}},tl=({name:e,isActive:s})=>{const n=c.useRef(null),[a,r]=c.useState(!1);c.useLayoutEffect(()=>{const i=n.current;if(!i)return;const d=()=>{r(i.scrollWidth>i.clientWidth)};d();const u=new ResizeObserver(d);return u.observe(i),()=>u.disconnect()},[e]);const o=t.jsx(R,{ref:n,variant:"omega",fontWeight:s?"semiBold":"regular",ellipsis:!0,children:e});return a?t.jsx(nt,{label:e,children:o}):o},Un=b.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,sl=1.6,nl=b(it)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,al=({id:e,name:s,folderChildren:n,level:a,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g})=>{const{formatMessage:h}=T(),x=n.length>0,f=i(e),m=o&&r===e,{droppable:{setNodeRef:w},isOver:I,showValidDropHighlight:M,showInvalidDropCursor:y}=Bn({id:e,name:s}),j=c.useCallback(()=>u(e),[e,u]);return Xi({isOver:I,canExpand:x&&!f,onExpand:j}),t.jsxs("li",{children:[t.jsxs(Ji,{ref:w,alignItems:"center",paddingLeft:`${a*sl}rem`,gap:1,$isValidDropTarget:M,$isInvalidDropCursor:y,$isMovePending:g,children:[t.jsx(se,{label:h({id:l(f?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:f?"Collapse {name}":"Expand {name}"},{name:s}),onClick:A=>{A.stopPropagation(),d(e)},variant:"ghost",withTooltip:!1,"aria-expanded":f,children:t.jsx(nl,{$expanded:f,fill:"neutral500"})}),t.jsx(N,{flex:"1",minWidth:0,children:t.jsx(_n,{type:"button",$isActive:m,$isValidDropTarget:M,$isInvalidDropCursor:y,$isMovePending:g,"aria-current":m?"page":void 0,onClick:()=>p(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(tl,{name:s,isActive:m})})})]}),x&&f&&t.jsx(Un,{children:n.map(A=>t.jsx(Kn,{node:A,level:a+1,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g},A.id??A.name))})]})},Kn=({node:e,...s})=>e.id==null?null:t.jsx(al,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),rl=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n})=>{const{formatMessage:a}=T(),{data:r=[],isLoading:o,isError:i}=qt(),{isExpanded:d,toggleExpanded:u,expandFolder:p}=el(r,e),{isMovePending:g}=de()??{isMovePending:!1},h=s&&e==null,x=a({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:f},showValidDropHighlight:m,showInvalidDropCursor:w}=Bn({id:null,name:x});return t.jsxs(ft.Main,{"aria-label":a({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(ft.Header,{label:a({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(ft.Content,{children:t.jsxs(v,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(_n,{ref:f,type:"button",$isActive:h,$isValidDropTarget:m,$isInvalidDropCursor:w,$isMovePending:g,"aria-current":h?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(Ea,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(R,{variant:"omega",fontWeight:h?"semiBold":"regular",children:x})]}),t.jsxs(N,{marginTop:4,children:[t.jsxs(v,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(je,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(R,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:a({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(v,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(be,{children:a({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):i?t.jsx(N,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"danger600",children:a({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):r.length===0?t.jsx(N,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"neutral500",children:a({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(Un,{children:r.map(I=>t.jsx(Kn,{node:I,level:0,currentFolderId:e,showActiveFolder:s,isExpanded:d,onToggle:u,onExpand:p,onSelect:n,isMovePending:g},I.id??I.name))})]})]})})]})},ol=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:a}=T(),[r,o]=c.useState(""),[i,d]=c.useState(null),u=()=>{o(""),d(null),s()},p=async g=>{g.preventDefault();const{urls:h,error:x}=La(r);if(x){d(x);return}d(null),u(),await n(h)};return t.jsx(Y.Root,{open:e,onOpenChange:g=>!g&&u(),children:t.jsx(Y.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx(Y.Header,{children:t.jsx(Y.Title,{children:a({id:l("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(Y.Body,{children:t.jsxs(Q.Root,{error:i||void 0,hint:a({id:l("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(Q.Label,{children:a({id:l("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Ta,{name:"urls",minHeight:"unset",rows:Math.min(r.split(`
`).length,7),maxHeight:"10.5rem",placeholder:a({id:l("input.url.placeholder"),defaultMessage:"Empty"}),value:r,onChange:g=>{o(g.target.value),d(null)}}),t.jsx(Q.Hint,{}),t.jsx(Q.Error,{})]})}),t.jsxs(Y.Footer,{children:[t.jsx(G,{variant:"tertiary",onClick:u,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",children:a({id:l("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},kt={oldestUploads:{id:l("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:l("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},At={nameAsc:{id:l("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:l("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:l("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:l("list.sort.size-desc"),defaultMessage:"File size descending"}},Ls={top:{id:l("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:l("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},il=b(O.Trigger)``,Ps=b(O.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,ll=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=T(),a=n({id:l("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(kt[e.sortBy]):n(At[e.direction])}),r=t.jsx(lt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(O.Root,{children:[t.jsx(il,{variant:"ghost",endIcon:t.jsx(it,{"aria-hidden":!0}),children:a}),t.jsxs(O.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(Ps,{children:n({id:l("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(kt).map(o=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.sortBy===o,onSelect:i=>{i.preventDefault(),e.setSortBy(e.sortBy===o?null:o)},endIcon:e.sortBy===o?r:null,children:n(kt[o])},o)),Object.keys(At).map(o=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.direction===o,onSelect:i=>{i.preventDefault(),e.setDirection(e.direction===o?null:o)},endIcon:e.direction===o?r:null,children:n(At[o])},o)),s&&t.jsxs(t.Fragment,{children:[t.jsx(O.Separator,{}),t.jsx(Ps,{children:n({id:l("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(Ls).map(o=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===o,onSelect:i=>{i.preventDefault(),e.setFoldersPosition(o)},endIcon:e.foldersPosition===o?r:null,children:n(Ls[o])},o))]})]})]})},Hn=20,dl=e=>{const s=new Map;for(const n of Object.keys(e).map(Number).sort((a,r)=>a-r))for(const a of e[n])s.set(a.id,a);return[...s.values()]},cl=({queryArgs:e,page:s,onRefreshed:n})=>{const{currentData:a}=Gt({...e,page:s,pageSize:Hn}),r=a?.results;return c.useEffect(()=>{r&&n(s,r)},[r,s,n]),null},ul=({folder:e=null,sort:s,search:n,filters:a,enabled:r=!0}={})=>{const o={folder:e,sort:s,search:n,filters:a},i=JSON.stringify(o),d=JSON.stringify({folder:e,sort:s,filters:a}),[u,p]=c.useState({queryKey:i,page:1}),[g,h]=c.useState({queryKey:i,listKey:d,pages:{}}),x=u.queryKey===i?u.page:1;u.queryKey!==i&&p({queryKey:i,page:1});const{currentData:f,isLoading:m,isFetching:w,error:I}=Gt({...o,page:x,pageSize:Hn},{skip:!r}),M=g.queryKey===i;f&&(!M||g.pages[x]!==f.results)&&h(M?{...g,pages:{...g.pages,[x]:f.results},pagination:f.pagination}:{queryKey:i,listKey:d,pages:{[x]:f.results},pagination:f.pagination});const y=c.useCallback((S,B)=>{h(H=>H.queryKey!==i||H.pages[S]===B?H:{...H,pages:{...H.pages,[S]:B}})},[i]),j=c.createElement(c.Fragment,null,Array.from({length:Math.max(0,x-1)},(S,B)=>B+1).map(S=>c.createElement(cl,{key:`${i}:${S}`,queryArgs:o,page:S,onRefreshed:y}))),A=Pa(),k=Oa(),C=c.useRef(e);c.useEffect(()=>{const S=C.current;if(C.current=e,S===e)return;const B=k.getState()[Pe.reducerPath],H=Pe.internalActions.removeQueryResult;Object.keys(B?.queries??{}).forEach(K=>{if(!K.startsWith("getAssets("))return;let L;try{L=JSON.parse(K.slice(10,-1))}catch{return}L.folder===S&&A(H({queryCacheKey:K}))})},[e,A,k]);const F=g.listKey!==d,_=c.useMemo(()=>F?[]:dl(g.pages),[F,g.pages]),E=f?x<f.pagination.pageCount:!1,D=w&&x>1,$=c.useCallback(()=>{p(S=>({queryKey:i,page:(S.queryKey===i?S.page:1)+1}))},[i]);return r?{assets:_,subscribers:j,pagination:f?.pagination??g.pagination,isLoading:m||F,isFetchingMore:D,hasNextPage:E,fetchNextPage:$,error:I}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:$,error:void 0}},gl=({hasNextPage:e,isFetchingMore:s,onLoadMore:n,options:a})=>{const r=c.useRef(null),o=c.useRef(null),i=c.useRef(a);i.current=a;const d=c.useRef(n);d.current=n;const u=c.useRef(e);u.current=e;const p=c.useRef(s);p.current=s;const g=c.useCallback(h=>{if(r.current?.disconnect(),o.current=h,!h)return;const x=new IntersectionObserver(([f])=>{f.isIntersecting&&u.current&&!p.current&&d.current()},i.current);x.observe(h),r.current=x},[]);return c.useEffect(()=>()=>r.current?.disconnect(),[]),c.useEffect(()=>{s||!r.current||!o.current||(r.current.unobserve(o.current),r.current.observe(o.current))},[s]),g},as={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},rs={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},Bt="mostRecentUpdates",Os=Object.fromEntries(Object.entries(as).map(([e,s])=>[s,e])),Ns=Object.fromEntries(Object.entries(rs).map(([e,s])=>[s,e])),pl=e=>{for(const s of(e??"").split(",")){if(s in Os)return{sortBy:Os[s],direction:null,isExplicit:!0};if(s in Ns)return{sortBy:null,direction:Ns[s],isExplicit:!0}}return{sortBy:Bt,direction:null,isExplicit:!1}},Bs=(e,s)=>[e&&as[e],s&&rs[s]].filter(a=>!!a).join(","),hl=()=>{const[{query:e},s]=ke(),{sortBy:n,direction:a,isExplicit:r}=pl(e?.sort),o=e?.folders==="mixed"?"mixed":"top",i=(m,w)=>{m===null&&w===null&&(m=Bt);const I=Bs(m,w);m===Bt&&w===null?s({sort:""},"remove"):s({sort:I})},d=m=>i(m,null),u=m=>i(null,m),p=m=>{m==="mixed"?s({folders:"mixed"}):s({folders:""},"remove")},g=Bs(n,a),x=[n&&as[n],a&&!a.startsWith("size")?rs[a]:null].filter(m=>!!m),f=r&&x.length>0?x.join(","):"name:ASC";return{sortBy:n,direction:a,foldersPosition:o,assetsSort:g,foldersSort:f,setSortBy:d,setDirection:u,setFoldersPosition:p}},fl=({folderId:e,search:s,sort:n,filter:a})=>JSON.stringify({folderId:e,search:s,sort:n,filter:a}),_s=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},ml=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[a,r]=n.split(":");return{field:a,desc:r?.toUpperCase()==="DESC"}});return(n,a)=>{for(const{field:r,desc:o}of s){const i=_s(n,r),d=_s(a,r);let u;if(typeof i=="string"||typeof d=="string"?u=String(i)<String(d)?-1:String(i)>String(d)?1:0:u=i-d,u!==0)return o?-u:u}return 0}},xl=({folders:e,assets:s,sort:n,hasNextPage:a})=>{const r=ml(n),o=[...e].sort(r),i=s[s.length-1],d=!a||!i?a?[]:o:o.filter(g=>r(g,i)<=0),u=[];let p=0;for(const g of s){for(;p<d.length&&r(d[p],g)<=0;)u.push({kind:"folder",folder:d[p]}),p+=1;u.push({kind:"asset",asset:g})}for(;p<d.length;)u.push({kind:"folder",folder:d[p]}),p+=1;return u},yl={threshold:0,rootMargin:"0px 0px -1px 0px"},bl={threshold:0},jl={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},Ft={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},wl=(e,s)=>e===0?Ft.assets:s===0?Ft.folders:Ft.both,Ml=({view:e,folders:s,isLoadingFolders:n,assets:a,isLoadingAssets:r,isFetchingMore:o,hasNextPage:i,fetchNextPage:d,error:u,locations:p,searchQuery:g,assetsSort:h,foldersPosition:x,hasActiveFilters:f,onClearFilters:m,onAssetItemClick:w,onAddAssets:I,canAddAssets:M,onClearSearch:y})=>{const{formatMessage:j}=T(),A=e===Le.GRID,k=r||n,C=c.useMemo(()=>x==="mixed"&&!A?xl({folders:s,assets:a,sort:h,hasNextPage:i}):null,[x,A,s,a,h,i]),F=gl({hasNextPage:i,isFetchingMore:o,onLoadMore:d,options:yl});return k?t.jsx(v,{justifyContent:"center",padding:8,children:t.jsx(be,{children:j({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(N,{padding:8,children:t.jsx(R,{textColor:"danger600",children:j({id:l("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):s.length===0&&a.length===0?f&&!g?t.jsx(Mi,{onClearFilters:m}):t.jsx(wi,{onAddAssets:I,canAddAssets:M,searchQuery:g,onClearSearch:y}):t.jsxs(t.Fragment,{children:[A?t.jsx(Qo,{folders:s,assets:a,onAssetItemClick:w}):t.jsx(li,{assets:a,folders:s,mixedItems:C,onAssetItemClick:w}),t.jsx("div",{ref:F,style:{height:1}}),o&&t.jsx(v,{justifyContent:"center",padding:4,children:t.jsx(be,{children:j({id:l("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(pi,{assets:a,locations:p})]})},Cl=({listQueryKey:e})=>{const{clear:s}=pe();return c.useEffect(()=>{s()},[e,s]),null},vl=b(Va)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,zs=b(Wa)`
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
`,Sl=b(N)`
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
  ${({$compact:e,theme:s})=>e&&Ae`
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
`,Dl=b(v)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Il=b(v)`
  margin-top: ${({theme:e})=>e.spaces[5]};
  flex-direction: column;
  align-items: stretch;
  gap: ${({theme:e})=>e.spaces[3]};
  transition: margin-top 0.2s ease;

  /* Tightening the gap to the title belongs to the compact header, so it is
     scoped to the breakpoints that compact. On mobile the header never sticks,
     and this was the last thing still shifting as the page scrolled. */
  ${({$compact:e,theme:s})=>e&&Ae`
      ${s.breakpoints.medium} {
        margin-top: ${s.spaces[2]};
      }
    `}

  ${({theme:e})=>e.breakpoints.large} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Vn=b(v)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,$l=b(Vn)``,kl=b(Vn)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,Al=b(N)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,Us=b.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,Fl=()=>{const{formatMessage:e}=T(),{openDetails:s}=xn(),{canCreate:n,canUpdate:a}=le(),{currentFolderId:r,navigateToFolderId:o,navigateToRoot:i}=_e(),{error:d}=Wt({id:r},{skip:r===null});c.useEffect(()=>{d?.name==="NotFoundError"&&i()},[d,i]);const{title:u,itemCount:p}=un(r),{searchQuery:g,isSearching:h,clearSearch:x}=En(),f=hl(),m=Ri(),w=c.useMemo(()=>Oi(m.filters,new Date),[m.serialized]),{assets:I,subscribers:M,pagination:y,isLoading:j,isFetchingMore:A,hasNextPage:k,fetchNextPage:C,error:F}=ul({folder:r,search:g||void 0,sort:f.assetsSort,filters:w.fileClauses,enabled:w.showFiles}),{data:_=[],isLoading:E}=ur({parentId:r,search:g||void 0,sort:f.foldersSort,filters:w.folderClauses},{skip:!w.showFolders}),D=c.useMemo(()=>w.showFolders?_:[],[w.showFolders,_]),$=c.useMemo(()=>pr(I,D),[I,D]),S=e(jl,{count:p}),B=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),H=D.length,K=y?.total??0,L=e(wl(H,K),{numberFolders:H,numberAssets:K});let z;h?z=`${B} (${L})`:u?z=`${u} (${S})`:z=e({id:"app.loading",defaultMessage:"Loading..."});const[q,Z]=c.useState(!1),[he,ae]=Ks(ei.view,Le.GRID),me=he===Le.GRID,[ct,ze]=c.useState(!1),Ue=c.useRef(null),Fe=c.useRef(null),[re,Re]=c.useState(!1),Ke=c.useCallback(X=>Re(!X),[]),P=Na(Ke,bl),[W]=Ba(),[V]=_a(),{data:ee}=rn(),te=ee?.data?.concurrentUploadRequests??1,ce=dt(),oe=async(X,Ee)=>{if(X.length===0)return;const ht=new FormData,os=[];X.forEach(is=>{ht.append("files",is),os.push({name:is.name,caption:null,alternativeText:null,folder:Ee})}),ht.append("fileInfo",JSON.stringify(os));try{await W({formData:ht,totalFiles:X.length,concurrency:te,generateAiMetadata:!!ce}).unwrap()}catch{}},He=()=>{Ue.current?.click()},ut=async X=>{const Ee=X.target.files;Ee&&Ee.length>0&&await oe(Array.from(Ee),r),X.target.value=""},gt=async X=>{n&&await oe(X,r)},pt=async X=>{try{await V({urls:X,folderId:r,generateAiMetadata:!!ce}).unwrap()}catch{}},Wn=fl({folderId:r,search:g,sort:`${f.assetsSort};folders=${f.foldersPosition}`,filter:m.serialized||null});return t.jsxs(t.Fragment,{children:[t.jsx(fi,{onDrop:gt,disabled:!n,children:t.jsx(co,{disabled:!a,children:t.jsx(go,{children:t.jsxs(Ro,{locations:$,children:[t.jsx(Cl,{listQueryKey:Wn}),t.jsx(ls.Root,{sideNav:t.jsx(rl,{currentFolderId:r,showActiveFolder:!h,onSelectFolder:o}),children:t.jsx(en.Main,{children:t.jsxs(N,{ref:Fe,children:[t.jsx(Me,{children:t.jsx("input",{type:"file",ref:Ue,onChange:ut,multiple:!0})}),t.jsx(N,{ref:P,height:0,"aria-hidden":!0}),t.jsxs(Sl,{$compact:re,children:[t.jsxs(Dl,{children:[t.jsx(R,{variant:"alpha",tag:"h1",children:z}),n&&t.jsxs(za,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(it,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx(mt,{onSelect:()=>Z(!0),startIcon:t.jsx(je,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(mt,{onSelect:He,startIcon:t.jsx(Ua,{}),children:e({id:l("import-files"),defaultMessage:"Import files"})}),t.jsx(mt,{onSelect:()=>ze(!0),startIcon:t.jsx(Ne,{}),children:e({id:l("import-from-url"),defaultMessage:"Import from URL"})})]})]}),t.jsxs(Il,{$compact:re,children:[t.jsxs($l,{children:[t.jsx(N,{children:t.jsx(Ki,{listFilters:m})}),t.jsx(Al,{children:t.jsx(Jo,{})})]}),t.jsxs(kl,{children:[t.jsx(N,{children:t.jsx(ll,{sort:f,showFoldersGroup:!me})}),t.jsxs(vl,{type:"single",value:me?"grid":"table",onValueChange:X=>X&&ae(X==="grid"?Le.GRID:Le.TABLE),"aria-label":e({id:l("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(zs,{value:"table","aria-label":e({id:l("view.table"),defaultMessage:"Table view"}),children:[t.jsx(Ka,{}),t.jsx(Us,{children:e({id:l("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(zs,{value:"grid","aria-label":e({id:l("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(Ha,{}),t.jsx(Us,{children:e({id:l("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx(Qi,{listFilters:m,compact:re})]}),t.jsxs(ls.Content,{children:[t.jsx(sr,{}),M,t.jsxs(yi,{children:[t.jsx(ji,{uploadDropZoneRef:Fe,folderName:u}),t.jsx(Ml,{view:he,folders:D,isLoadingFolders:E,assets:I,isLoadingAssets:j,isFetchingMore:A,hasNextPage:k,fetchNextPage:C,error:F,locations:$,searchQuery:g,assetsSort:f.assetsSort,foldersPosition:f.foldersPosition,hasActiveFilters:m.filters.length>0,onClearFilters:m.clearFilters,onAssetItemClick:s,onAddAssets:He,canAddAssets:n,onClearSearch:x})]})]})]})})})]})})})}),t.jsx(Fn,{open:q,mode:"create",parentFolderName:u,parentFolderId:r,onClose:()=>Z(!1)}),t.jsx(ol,{open:ct,onClose:()=>ze(!1),onUpload:pt}),t.jsx(no,{})]})},Pl=()=>{const{formatMessage:e}=T(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(en.Title,{children:s}),t.jsx(qa,{children:t.jsx(Ga,{index:!0,element:t.jsx(Fl,{})})})]})};export{Pl as BetaMediaLibrary};
