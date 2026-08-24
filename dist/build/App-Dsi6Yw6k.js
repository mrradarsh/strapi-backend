import{a as T,h7 as Gs,j as t,S as U,dq as Vt,g as v,A as R,h8 as l,h9 as Be,de as Ys,z as ta,db as sa,b as na,r as c,ha as Qs,f$ as xe,hb as aa,f6 as ra,hc as oa,hd as ia,he as la,hf as da,hg as ca,hh as nt,k as Me,y as j,v as fe,fH as ua,hi as he,ch as ga,eS as pa,hj as Zs,hk as ha,hl as fa,d as ne,hm as Ue,R as Z,E as G,hn as ma,u as Re,ho as we,bU as Se,hp as xa,hq as ya,hr as ba,D as ja,hs as wa,ht as Pt,cz as Ht,N as Xs,b2 as Js,bC as lt,b0 as en,b1 as at,bk as K,bS as dt,J as ct,cY as Wt,hu as tn,dS as sn,cA as B,cx as Q,dY as nn,hv as qt,gd as Ce,n as Ma,I as Qe,bT as Ie,dz as Ca,fN as Ee,dw as va,dx as Sa,c as an,hw as Ia,Y as ka,Q as Da,h as Gt,e$ as $a,f1 as Aa,f3 as Fa,e_ as Ra,f0 as Ea,f2 as Ta,hx as La,dg as Pa,F as ut,K as rn,hy as Oa,fG as Na,gg as Ba,a9 as _a,fR as gt,H as pt,dP as ve,cP as bt,hz as Ua,bN as za,hA as Ka,p as Va,hB as Ha,hC as Wa,hD as qa,hE as Ga,L as ps,P as on,e1 as Ya,hF as jt,am as Qa,gr as Za,gs as Xa,hG as Ja,hH as er,fT as tr,U as sr,W as nr}from"./strapi-Ds8iRooW.js";import{g as ar}from"./users-CHXWXr2I.js";import{l as rr,m as or,D as ir,p as lr,k as dr,P as cr,u as ln,f as dn,e as cn}from"./core.esm-CnVYl7At.js";const ur=()=>{const{formatMessage:e}=T(),[s,n]=Gs("STRAPI_UPLOAD_LIBRARY_BETA_NOTICE_DISMISSED",!1);return s?null:t.jsx(U,{paddingBottom:4,children:t.jsx(Vt,{variant:"default",onClose:()=>n(!0),closeLabel:e({id:l("beta.notice.close"),defaultMessage:"Close"}),title:e({id:l("plugin.name"),defaultMessage:"Media Library"}),children:t.jsxs(v,{tag:"span",gap:2,alignItems:"center",children:[t.jsx(U,{tag:"span",background:"neutral150",hasRadius:!0,paddingLeft:2,paddingRight:2,shrink:0,children:t.jsx(R,{variant:"sigma",textColor:"neutral600",children:e({id:l("beta.badge"),defaultMessage:"Beta"})})}),t.jsx(R,{tag:"span",children:e({id:l("beta.notice.content"),defaultMessage:"This is a beta version of the Media Library. Some features are still in progress — please report any issue you run into."})})]})})})},gr=["image/png","image/jpeg","image/webp","image/heic","image/heif"],un=e=>gr.includes(e),pr=20,hs=pr*2,hr=Be.injectEndpoints({endpoints:e=>({getUploadSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetUploadSettingsQuery:Yt}=hr,ht=e=>{const s=Ys(),{data:n}=Yt();return!s||!(n?.data?.aiMetadata??!1)?!1:e===void 0?!0:un(e.mime)},{main:Hl,...fr}=sa,ue=()=>{const{allowedActions:e,isLoading:s}=ta(fr);return{isLoading:s,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},mr="v2",J="upload",ke=()=>{const{trackUsage:e}=na(),{data:s}=Yt(),n=Ys();return{trackUsage:c.useCallback((r,o)=>e(r,{...o,...n?{isAiMediaLibraryConfigured:!!s?.data?.aiMetadata}:{},mediaLibraryVersion:mr}),[e,n,s])}},Qt=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),xr=e=>typeof e=="object"&&e!==null&&"data"in e,fs=e=>xr(e)?e.data:e,yr=Be.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:a,search:r,filters:o=[]}=s,i={sort:a??"name:ASC",populate:{parent:!0}};if(r)i._q=Qt(r),o.length>0&&(i.filters={$and:[...o]});else{const d=n!=null?{parent:{id:n}}:{parent:{id:{$null:!0}}};i.filters={$and:[d,...o]}}return{url:"/upload/folders",method:"GET",config:{params:i}}},transformResponse:s=>fs(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:s,...n})=>({url:`/upload/folders/${s}`,method:"PUT",data:n}),transformResponse:s=>s.data,invalidatesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>fs(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:a})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:a}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:br,useUpdateFolderMutation:jr,useGetFoldersQuery:wr,useGetFolderQuery:Zt,useGetAllFoldersQuery:Mr,useGetFolderStructureQuery:Xt,useBulkMoveMutation:gn}=yr,rt=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,pn={fileFolderId:()=>{},folderParentId:()=>{}},Cr=(e,s)=>{const n=new Map,a=new Map;return e.forEach(r=>{n.set(r.id,rt(r.folder))}),s.forEach(r=>{a.set(r.id,rt(r.parent))}),{fileFolderId:r=>n.get(r),folderParentId:r=>a.get(r)}},ot=(e,s,n,a)=>{const r=s==="file"?e.fileFolderId(n):e.folderParentId(n);return r===void 0?a:r},vr=Be.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,search:a,filters:r=[],...o}=s,i={...o};if(a)i._q=Qt(a),r.length>0&&(i.filters={$and:[...r]});else{const d=n!=null?{folder:{id:n}}:{folder:{id:{$null:!0}}};i.filters={$and:[d,...r]}}return{url:"/upload/files",method:"GET",config:{params:i}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,a)=>[{type:"Asset",id:a}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const a=new FormData;return a.append("fileInfo",JSON.stringify(n)),{url:`/upload/files/${s}`,method:"PUT",data:a}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:a})=>{const r=new FormData;return r.append("files",n),a&&r.append("fileInfo",JSON.stringify(a)),{url:`/upload/files/${s}/replace`,method:"POST",data:r}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,a)=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:Jt,useGetAssetQuery:Sr,useUpdateAssetMutation:Ir,useReplaceAssetMutation:hn,useDeleteAssetMutation:kr,useBulkDeleteItemsMutation:Dr}=vr,fn=async(e,s)=>{const a=await(await fetch(e)).blob(),r=window.URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.setAttribute("download",s),o.click(),window.URL.revokeObjectURL(r)},$r={pdf:ca,csv:da,xls:la,zip:ia},ze=(e,s)=>{const n=Qs(s);return e?.includes(xe.Image)?aa:e?.includes(xe.Video)?ra:e?.includes(xe.Audio)?oa:n?$r[n]||nt:nt},mn=e=>{const{formatMessage:s}=T(),{data:n,isLoading:a}=Zt({id:e},{skip:e===null}),{data:r,isLoading:o}=Jt({folder:null,pageSize:1},{skip:e!==null}),i=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?o?{title:i,itemCount:0}:{title:i,itemCount:r?.pagination?.total??0}:a||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},Ar=j(v)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,xn=({children:e,zIndex:s=20,hideLabel:n=!1})=>t.jsx(Ar,{$zIndex:s,children:t.jsx(Me,{small:n,children:e})}),Fr=1,Rr=({anchorX:e,anchorY:s,point:n,aspectRatio:a})=>{let r=Math.abs(n.x-e),o=Math.abs(n.y-s);a&&(r/a>=o?o=r/a:r=o*a);const i=n.x<e?e-r:e,d=n.y<s?s-o:s;return{x:i,y:d,width:r,height:o}},Er=()=>{const[e,s]=c.useState({width:0,height:0}),[n,a]=c.useState({x:0,y:0,width:0,height:0}),[r,o]=c.useState(null),i=c.useRef(null),d=c.useCallback(h=>{i.current=h;const x={width:h.naturalWidth,height:h.naturalHeight};s(x),a({x:0,y:0,width:x.width,height:x.height})},[]),u=(h,x,w)=>Math.min(w,Math.max(x,h)),f=c.useCallback(h=>{a(x=>{const w=e.width-x.x,S=e.height-x.y;let C=h.width!==void 0?u(h.width,1,w):x.width,k=h.height!==void 0?u(h.height,1,S):x.height;return r&&(h.width!==void 0?k=u(C/r,1,S):h.height!==void 0&&(C=u(k*r,1,w))),{...x,width:C,height:k}})},[e.width,e.height,r]),g=c.useCallback(h=>{a(x=>{const w=h.x!==void 0?u(h.x,0,e.width-x.width):x.x,S=h.y!==void 0?u(h.y,0,e.height-x.height):x.y;return{...x,x:w,y:S}})},[e.width,e.height]),p=c.useCallback(h=>{o(h),h&&a(x=>{const w=e.width-x.x,S=e.height-x.y;let C=x.width,k=C/h;return k>S&&(k=S,C=k*h),C>w&&(C=w,k=C/h),{...x,width:Math.round(C),height:Math.round(k)}})},[e.width,e.height]),b=c.useCallback((h,x,w)=>new Promise((S,C)=>{const k=i.current;if(!k){C(new Error("Image not ready: call init() before produceFile()."));return}const m=document.createElement("canvas");m.width=Math.max(1,Math.round(n.width)),m.height=Math.max(1,Math.round(n.height));const I=m.getContext("2d");if(!I){C(new Error("Could not get a 2D canvas context to crop the image."));return}I.drawImage(k,n.x,n.y,n.width,n.height,0,0,m.width,m.height),m.toBlob($=>{if(!$){C(new Error("Could not export the cropped image to a blob."));return}S(new File([$],h,{type:x,lastModified:w?new Date(w).getTime():Date.now()}))},x,Fr)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:r,setCropSize:f,setCropPosition:g,setAspectRatio:p,produceFile:b,width:Math.round(n.width),height:Math.round(n.height)}},Ze=5.6,wt=12,Tr=j(v)`
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
`,Lr=j(v)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Pr=j(U)`
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
`,Or=j.div`
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
`,Nr=j.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,Xe=j.button`
  position: absolute;
  width: ${wt}px;
  height: ${wt}px;
  margin: -${wt/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,Br=j.button`
  position: absolute;
  width: ${Ze}rem;
  height: ${Ze}rem;
  margin: ${-Ze/2}rem 0 0 ${-Ze/2}rem;
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
`,_r=j(U)`
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
`,Ur=j(v)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Je=j(Z.Root)`
  flex-direction: row;
  align-items: center;
`,et=j(ma)`
  width: 8.4rem;
`,ms=j(Z.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,zr=j(U)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,Kr=()=>t.jsx(zr,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),Vr=({asset:e,isBusy:s=!1,onClose:n,onApply:a,onSaveAsCopy:r,canSaveAsCopy:o})=>{const{formatMessage:i}=T(),{toggleNotification:d}=fe(),f=ua().colorScheme==="dark",g=f?"neutral1000":"neutral0",p=f?"neutral600":"neutral200",b=c.useRef(null),h=c.useRef(null),x=c.useRef(null);c.useEffect(()=>{x.current?.focus()},[]);const{init:w,crop:S,naturalSize:C,aspectRatio:k,setCropSize:m,setCropPosition:I,setAspectRatio:$,produceFile:M,width:D,height:z}=Er(),[L,_]=c.useState(!1),[E,y]=c.useState(e.focalPoint??{x:50,y:50}),A=he(e.url),F=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,N=F!==void 0?`${A}${A.includes("?")?"&":"?"}updatedAt=${F}`:A,q=()=>{b.current&&w(b.current)},O=P=>{const W=h.current?.getBoundingClientRect();if(!W||!C.width||!C.height)return null;const H=C.width/W.width,te=C.height/W.height;return{x:(P.clientX-W.left)*H,y:(P.clientY-W.top)*te}},V=c.useRef(null);c.useEffect(()=>()=>{V.current?.()},[]);const Y=(P,W)=>{P.preventDefault(),P.stopPropagation();const{pointerId:H}=P;try{P.currentTarget.setPointerCapture(H)}catch{}const te=ae=>{ae.pointerId===H&&W(ae)},se=()=>{window.removeEventListener("pointermove",te),window.removeEventListener("pointerup",pe),window.removeEventListener("pointercancel",pe),V.current=null},pe=ae=>{ae.pointerId===H&&se()};V.current?.(),V.current=se,window.addEventListener("pointermove",te),window.addEventListener("pointerup",pe),window.addEventListener("pointercancel",pe)},oe=P=>{const W=O(P);if(!W)return;const H={...S};Y(P,te=>{const se=O(te);se&&I({x:H.x+(se.x-W.x),y:H.y+(se.y-W.y)})})},ie=P=>W=>{const H={...S},te=P==="tl"||P==="bl"?H.x+H.width:H.x,se=P==="tl"||P==="tr"?H.y+H.height:H.y;Y(W,pe=>{const ae=O(pe);if(!ae)return;const{x:Ge,y:Ye,width:mt,height:xt}=Rr({anchorX:te,anchorY:se,point:ae,aspectRatio:L?k:null});I({x:Ge,y:Ye}),m({width:mt,height:xt})})},le=()=>{_(P=>{const W=!P;return $(W&&z?D/z:null),W})},ft=P=>{Y(P,W=>{const H=O(W);if(!H)return;const te=(H.x-S.x)/S.width*100,se=(H.y-S.y)/S.height*100;y({x:Math.round(Math.min(100,Math.max(0,te))),y:Math.round(Math.min(100,Math.max(0,se)))})})},He=Math.round(E.x/100*D),We=Math.round(E.y/100*z),Te=(P,W)=>{const H=P==="x"?D:z;if(!H)return;const te=Math.min(100,Math.max(0,W/H*100));y(se=>({...se,[P]:Math.round(te)}))},de=C.width&&C.height?{left:S.x/C.width*100,top:S.y/C.height*100,width:S.width/C.width*100,height:S.height/C.height*100}:null,Le=de!==null,qe=async P=>{if(!Le)return;let W;try{W=await M(e.name,e.mime??"image/png",e.updatedAt)}catch{d({type:"danger",message:i({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const H={x:Math.round(E.x),y:Math.round(E.y)};P==="apply"?a(W,H):r(W,H)};return t.jsx(ga,{children:t.jsx(pa,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(Tr,{ref:x,tabIndex:-1,children:[t.jsxs(Lr,{alignItems:"center",children:[t.jsx(Zs,{"aria-hidden":!0}),t.jsx(R,{variant:"omega",fontWeight:"bold",children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(Pr,{children:[t.jsxs(Or,{ref:h,$aspect:C.width&&C.height?C.width/C.height:void 0,children:[t.jsx("img",{ref:b,src:N,alt:e.name,crossOrigin:"anonymous",onLoad:q,draggable:!1}),de?t.jsxs(Nr,{style:{left:`${de.left}%`,top:`${de.top}%`,width:`${de.width}%`,height:`${de.height}%`},onPointerDown:oe,children:[t.jsx(Xe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:ie("tl")}),t.jsx(Xe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:ie("tr")}),t.jsx(Xe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:ie("bl")}),t.jsx(Xe,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:ie("br")}),t.jsx(Br,{type:"button","aria-label":i({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${E.x}%`,top:`${E.y}%`},onPointerDown:ft})]}):null]}),t.jsxs(_r,{children:[t.jsxs(v,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(R,{variant:"omega",fontWeight:"bold",textColor:g,children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(R,{variant:"pi",textColor:p,children:i({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(v,{gap:6,alignItems:"center",children:[t.jsxs(v,{alignItems:"center",gap:2,children:[t.jsxs(v,{direction:"column",gap:2,children:[t.jsxs(Je,{name:"crop-width",gap:2,children:[t.jsx(ms,{textColor:g,children:t.jsx(ha,{})}),t.jsx(et,{"aria-label":i({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:D,min:1,max:C.width||void 0,onValueChange:P=>{P!==void 0&&m({width:P})}})]}),t.jsxs(Je,{name:"crop-height",gap:2,children:[t.jsx(ms,{textColor:g,children:t.jsx(fa,{})}),t.jsx(et,{"aria-label":i({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:z,min:1,max:C.height||void 0,onValueChange:P=>{P!==void 0&&m({height:P})}})]})]}),t.jsxs(v,{position:"relative",children:[t.jsx(ne,{label:i({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:L?"secondary":"ghost",onClick:le,children:t.jsx(Ue,{})}),t.jsx(Kr,{})]})]}),t.jsxs(v,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(Je,{name:"focal-x",gap:2,children:[t.jsx(Z.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(et,{"aria-label":i({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:He,onValueChange:P=>{P!==void 0&&Te("x",P)}})]}),t.jsxs(Je,{name:"focal-y",gap:2,children:[t.jsx(Z.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(et,{"aria-label":i({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:We,onValueChange:P=>{P!==void 0&&Te("y",P)}})]})]})]})]})]}),t.jsxs(Ur,{alignItems:"center",children:[t.jsx(G,{variant:"tertiary",onClick:n,disabled:s,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(v,{gap:2,children:[o&&t.jsx(G,{variant:"secondary",onClick:()=>qe("copy"),loading:s,disabled:!Le,children:i({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(G,{variant:"default",onClick:()=>qe("apply"),loading:s,disabled:!Le,children:i({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},Oe=j(U)`
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
`,tt=j(v)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,Hr=j.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Wr=j(v)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,qr=j.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Gr=j.audio`
  width: 100%;
`,Yr=j.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,Qr=j(v)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,Zr=j(v)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,st=()=>{const{formatMessage:e}=T();return t.jsx(Zr,{justifyContent:"center",alignItems:"center",children:t.jsx(Me,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},Xr=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:a}=T(),{alternativeText:r,ext:o,mime:i,url:d,updatedAt:u,isUrlSigned:f,isLocal:g}=e,p=u&&!f?new Date(u).getTime():void 0,b=m=>!m||p===void 0?m:m.includes("?")?`${m}&v=${p}`:`${m}?v=${p}`,h=b(he(d)),[x,w]=c.useState(!1);c.useEffect(()=>{w(!1)},[h]);const S=c.useRef(null);if(c.useEffect(()=>{const m=S.current;if(!m)return;const I=()=>{const M=m.parentElement;if(!M)return;const D=M.getBoundingClientRect(),z=m.offsetWidth,L=m.offsetHeight;!z||!L||!D.width||D.height};I();const $=new ResizeObserver(I);return $.observe(m),m.parentElement&&$.observe(m.parentElement),()=>$.disconnect()},[x]),i?.includes(xe.Image)){const m=b(he(d));if(m)return t.jsxs(Oe,{children:[(!x||n)&&t.jsx(st,{}),s?t.jsx(Wr,{children:s}):null,t.jsx(tt,{children:t.jsx(Hr,{ref:S,src:m,alt:r||e.name||"",crossOrigin:!g&&f?"anonymous":void 0,onLoad:()=>w(!0),onError:()=>w(!0)})})]})}if(i?.includes(xe.Video)&&h)return t.jsxs(Oe,{children:[!x&&t.jsx(st,{}),t.jsx(tt,{children:t.jsx(qr,{src:h,controls:!0,title:e.name,onLoadedData:()=>w(!0),onError:()=>w(!0),children:a({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(xe.Audio)&&h)return t.jsxs(Oe,{children:[!x&&t.jsx(st,{}),t.jsx(tt,{children:t.jsx(v,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Gr,{src:h,controls:!0,onLoadedData:()=>w(!0),onError:()=>w(!0)})})})]});if((o?.toLowerCase()==="pdf"||o?.toLowerCase()===".pdf"||i==="application/pdf")&&h)return t.jsxs(Oe,{children:[!x&&t.jsx(st,{}),t.jsx(tt,{children:t.jsx(Yr,{src:`${h}#toolbar=0`,title:e.name,onLoad:()=>w(!0)})})]});const k=ze(i,o);return t.jsx(Oe,{children:t.jsxs(Qr,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(k,{width:24,height:24}),t.jsx(R,{variant:"pi",children:a({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},Mt="assetId",yn=c.createContext(null),bn=()=>{const e=c.useContext(yn);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},jn=c.createContext(null),wn=()=>{const e=c.useContext(jn);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},Mn=()=>{const[{query:e},s]=Re(),n=e?.[Mt],a=n?parseInt(n,10):null,r=a!==null&&!Number.isNaN(a),[o,i]=c.useState(r),d=c.useRef(null);c.useEffect(()=>{r&&(d.current=a,i(!0))},[r,a]);const u=c.useCallback(p=>{p.target===p.currentTarget&&!r&&i(!1)},[r]),f=c.useCallback(p=>{s({[Mt]:String(p)},"push",!0)},[s]),g=c.useCallback(()=>{s({[Mt]:void 0},"remove",!0)},[s]);return{assetId:r?a:d.current,isVisible:r,shouldRenderDrawer:o,onCloseAnimationEnd:u,openDetails:f,closeDetails:g}},Jr=j(v)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,je=({label:e,value:s})=>t.jsxs(Jr,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(R,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(R,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),eo=j(U)`
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
`,to=j(U)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,so=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,no=j(ct)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,Ct=({name:e,label:s,required:n,disabled:a})=>{const{formatMessage:r}=T(),o=Xs(e),i=Ht("DetailField",p=>p.isSubmitting),d=o.value??"",[u,f]=c.useState(d);c.useEffect(()=>{f(d)},[d]);const g=r({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(Z.Root,{name:e,required:n,children:[t.jsx(Z.Label,{children:s}),t.jsx(Js,{value:u,onChange:p=>{f(p.target.value),o.onChange(e,p.target.value)},endAction:u?void 0:t.jsx(lt,{label:g,children:t.jsx(no,{"aria-label":g,role:"img"})}),type:"text",disabled:i||a})]})},ao=({label:e,rootLabel:s,folders:n,disabled:a})=>{const r=Xs("folder"),o=Ht("LocationField",i=>i.isSubmitting);return t.jsxs(Z.Root,{name:"folder",required:!0,children:[t.jsx(Z.Label,{children:e}),t.jsxs(en,{value:r.value==null?"":String(r.value),onChange:i=>{const d=i===""?null:Number(i);r.onChange("folder",d)},disabled:o||a,children:[t.jsx(at,{value:"",children:s}),n.map(i=>t.jsx(at,{value:String(i.id),children:i.name},i.id))]})]})},ro=()=>{const{formatMessage:e}=T(),{deleteAsset:s,isDeleting:n}=wn(),[a,r]=c.useState(!1),o=async()=>{await s(),r(!1)},i=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(K.Root,{open:a,onOpenChange:r,children:[t.jsx(K.Trigger,{children:t.jsx(ne,{withTooltip:!1,label:i,variant:"danger-light",children:t.jsx(dt,{})})}),t.jsxs(K.Content,{children:[t.jsx(K.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(K.Body,{icon:t.jsx(ct,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(K.Footer,{children:[t.jsx(K.Cancel,{children:t.jsx(G,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(K.Action,{children:t.jsx(G,{variant:"danger-light",loading:n,onClick:o,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},oo=({asset:e})=>{const{formatMessage:s}=T(),{copy:n}=Wt(),a=bn(),r=async()=>{const o=he(e.url);if(!o)return;const i=await n(o);a({type:i?"success":"danger",message:s(i?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(ne,{withTooltip:!1,label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(Ue,{})})},io=({asset:e})=>{const{formatMessage:s}=T(),n=bn(),[a,r]=c.useState(!1),o=async()=>{const i=he(e.url);if(i){r(!0);try{await fn(i,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(ne,{withTooltip:!1,label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:o,disabled:a,children:t.jsx(tn,{})})},lo=({mime:e})=>{const{formatMessage:s}=T(),{replaceAsset:n,isReplacing:a}=wn(),r=c.useRef(null),[o,i]=c.useState(!1),d=ht({mime:e}),u=()=>{i(!0)},f=()=>{i(!1),r.current?.click()},g=async p=>{const b=p.target.files?.[0];p.target.value="",b&&await n(b)};return t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:t.jsx("input",{ref:r,type:"file",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(ne,{withTooltip:!1,label:s({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:a,children:t.jsx(sn,{})}),t.jsx(K.Root,{open:o,onOpenChange:i,children:t.jsxs(K.Content,{children:[t.jsx(K.Header,{children:s({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(K.Body,{textAlign:"center",children:t.jsxs(v,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(K.Footer,{children:[t.jsx(K.Cancel,{children:t.jsx(G,{variant:"tertiary",fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(K.Action,{children:t.jsx(G,{variant:"secondary",onClick:f,fullWidth:!0,children:s({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},co=({onCrop:e,mime:s})=>{const{formatMessage:n}=T(),a=Ht("AssetImageActions",r=>r.isSubmitting);return t.jsxs(v,{direction:"column",gap:2,children:[t.jsx(ne,{withTooltip:!1,label:n({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:a||!e,children:t.jsx(Zs,{})}),t.jsx(lo,{mime:s})]})},uo=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:a}=T(),{canCreate:r,canUpdate:o,canDownload:i,canCopyLink:d}=ue(),{data:u=[]}=Mr(),{toggleNotification:f}=fe(),[g]=Ir(),{trackUsage:p}=ke(),[b,{isLoading:h}]=hn(),[x,{isLoading:w}]=kr(),[S,{isLoading:C}]=ba(),[k,m]=c.useState(!1),[I,$]=c.useState(null);c.useEffect(()=>{if(!I)return;const O=window.setTimeout(()=>$(null),5e3);return()=>window.clearTimeout(O)},[I]);const M=c.useCallback(O=>$(O),[]),D=e.mime?.includes(xe.Image),z={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},L=async O=>{const V={name:O.name,caption:O.caption,alternativeText:O.alternativeText,folder:O.folder};if("error"in await g({id:e.id,fileInfo:V})){M({type:"danger",message:n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}p("didEditMediaLibraryElements",{location:J,type:e.mime?.split("/")[0],changeLocation:O.folder!==z.folder}),M({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:_}=mn(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),E=c.useCallback(async O=>{const V=await b({id:e.id,file:O});if("error"in V){const Y=V.error,oe=Y?.data?.error?.message??Y?.data?.message??n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."});M({type:"danger",message:oe});return}p("didReplaceMedia",{location:J}),M({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,n,M,b,p]),y=c.useCallback(async()=>{const O=await x(e.id);if("error"in O){const V=O.error,Y=V?.data?.error?.message??V?.data?.message??n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."});M({type:"danger",message:Y});return}f({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:_})}),s()},[e.id,s,x,_,n,M,f]),A=()=>{M({type:"danger",message:n({id:l("asset-details.crop.error"),defaultMessage:"Failed to crop the file."})})},F=async(O,V)=>{if(m(!1),"error"in await b({id:e.id,file:O,fileInfo:{focalPoint:V}})){A();return}p("didCropFile",{location:J,duplicatedFile:!1}),M({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File cropped."})})},N=async(O,V)=>{if(m(!1),"error"in await S({file:O,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:z.folder,focalPoint:V}})){A();return}p("didCropFile",{location:J,duplicatedFile:!0}),M({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},q=c.useMemo(()=>({replaceAsset:E,deleteAsset:y,isReplacing:h,isDeleting:w}),[E,y,h,w]);return t.jsx(yn.Provider,{value:M,children:t.jsx(jn.Provider,{value:q,children:t.jsx(eo,{children:t.jsx(ja,{method:"POST",initialValues:z,onSubmit:L,children:({modified:O,isSubmitting:V,values:Y,resetForm:oe})=>{const ie=(Y.name??"").trim()==="",le=so({isDeleting:w,isReplacing:h,isCropCopying:C});return t.jsxs(t.Fragment,{children:[t.jsx(wa,{onProceed:oe}),k&&D?t.jsx(Vr,{asset:e,onClose:()=>m(!1),onApply:F,onSaveAsCopy:N,canSaveAsCopy:r}):null,le?t.jsx(xn,{children:n(le)}):null,I?t.jsx(to,{children:t.jsx(Vt,{variant:I.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>$(null),children:I.message})}):null,t.jsxs(we.ScrollableContent,{children:[t.jsx(Xr,{asset:e,actions:D&&o?t.jsx(co,{onCrop:()=>m(!0),mime:e.mime}):null}),t.jsxs(v,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(R,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(v,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(je,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(je,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(je,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?ar({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(je,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?Pt(e.size,1):null}),D&&(e.width!=null||e.height!=null)&&t.jsx(je,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(je,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:Qs(e.ext)}),t.jsx(je,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(Ct,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!o}),t.jsx(ao,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:u,disabled:!o}),t.jsx(Ct,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!o}),t.jsx(Ct,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!o})]})]}),(o||d||i)&&t.jsxs(v,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(v,{gap:2,children:[o&&t.jsx(ro,{}),d&&t.jsx(oo,{asset:e}),i&&t.jsx(io,{asset:e})]}),o&&t.jsx(G,{type:"submit",variant:"default",loading:V,disabled:!O||V||ie,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},go=({asset:e,closeDetails:s})=>{const n=e?ze(e.mime,e.ext):xa;return t.jsxs(v,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(n,{width:20,height:20}),t.jsx(we.Title,{asChild:!0,children:t.jsx(R,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(U,{marginLeft:"auto",children:t.jsx(we.CloseButton,{onClose:s,children:t.jsx(ya,{})})})]})},po=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=T(),{data:a,isLoading:r,error:o}=Sr(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx(v,{justifyContent:"center",padding:8,children:t.jsx(Me,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):o||!a?t.jsx(v,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(Vt,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(go,{asset:a,closeDetails:s}),t.jsx(uo,{asset:a,closeDetails:s})]})},ho=()=>{const{formatMessage:e}=T(),{assetId:s,isVisible:n,shouldRenderDrawer:a,onCloseAnimationEnd:r,closeDetails:o}=Mn();return!a||s===null?null:t.jsxs(we.Root,{isVisible:n,onClose:o,children:[t.jsx("div",{children:t.jsxs(Se,{children:[t.jsx(we.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(we.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(we.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:r,children:t.jsx(po,{assetId:s,closeDetails:o})})]})},Ke=({children:e,...s})=>{const n=c.useRef(null),[a,r]=c.useState(!1),o=()=>{const d=n.current;d&&r(d.scrollWidth>d.clientWidth)},i=d=>{n.current=d,d&&o()};return t.jsx(lt,{label:a?e:void 0,children:t.jsx(R,{ref:i,ellipsis:!0,onPointerEnter:o,onFocus:o,...s,children:e})})},ee=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),ye=e=>`asset:${e}`,be=e=>`folder:${e}`,xs=(e,s)=>{const n=new Set;return e.forEach(a=>{const[r,o]=a.split(":");r===s&&n.add(Number(o))}),n},Cn=()=>({selectedKeys:new Set,anchorKey:null}),fo=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},mo=(e,s)=>{const n=new Set(e.selectedKeys);return n.delete(s),{selectedKeys:n,anchorKey:e.anchorKey===s?null:e.anchorKey}},xo=(e,s,n)=>{const a=s.indexOf(n);if(a===-1)return e;const r=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(r===-1)return{selectedKeys:new Set([n]),anchorKey:n};const o=Math.min(r,a),i=Math.max(r,a);return{selectedKeys:new Set(s.slice(o,i+1)),anchorKey:e.anchorKey}},yo=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),bo=()=>Cn(),jo=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((r,o)=>e.has(o)?r+1:r,0),a=n===s.length;return{allSelected:a,isIndeterminate:n>0&&!a}},es=c.createContext(null),wo=({children:e,disabled:s=!1})=>{const[n,a]=c.useState(Cn),r=c.useCallback(h=>!s&&n.selectedKeys.has(h),[s,n.selectedKeys]),o=c.useCallback(h=>{s||a(x=>fo(x,h))},[s]),i=c.useCallback((h,x)=>{s||a(w=>xo(w,h,x))},[s]),d=c.useCallback(h=>{s||a(yo(h))},[s]),u=c.useCallback(h=>a(x=>mo(x,h)),[]),f=c.useCallback(()=>a(bo()),[]),g=c.useMemo(()=>xs(n.selectedKeys,"asset"),[n.selectedKeys]),p=c.useMemo(()=>xs(n.selectedKeys,"folder"),[n.selectedKeys]),b=c.useMemo(()=>({selectedKeys:n.selectedKeys,selectedIds:g,selectedFolderIds:p,anchorKey:n.anchorKey,isSelected:r,toggle:o,selectRange:i,selectAll:d,deselect:u,clear:f}),[n.selectedKeys,g,p,n.anchorKey,r,o,i,d,u,f]);return c.createElement(es.Provider,{value:b},e)},me=()=>{const e=c.useContext(es);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},Mo=()=>c.useContext(es),vn=c.createContext(null),Co=({children:e})=>{const[s,n]=c.useState({}),a=c.useCallback((d,u)=>(n(f=>({...f,[d]:u})),()=>n(f=>{const{[d]:g,...p}=f;return p})),[]),r=c.useCallback(d=>s[d]!==void 0,[s]),o=c.useCallback(d=>s[d]??null,[s]),i=c.useMemo(()=>({isBusy:r,getBusyMessage:o,markBusy:a}),[r,o,a]);return c.createElement(vn.Provider,{value:i},e)},ts=()=>c.useContext(vn),vo=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},Ve=()=>{const[{query:e},s]=Re(),n=vo(e?.folder),a=c.useCallback(d=>{s({folder:String(d.id),_q:void 0})},[s]),r=c.useCallback(()=>{s({folder:"",_q:""},"remove")},[s]),o=c.useCallback(()=>{s({folder:""},"remove")},[s]);c.useEffect(()=>{e?.folder&&n===null&&o()},[e?.folder,n,o]);const i=c.useCallback(d=>{d==null?r():s({folder:String(d),_q:void 0})},[r,s]);return{currentFolderId:n,navigateToFolder:a,navigateToRoot:r,navigateToFolderId:i}},Sn=j(B.Content).attrs({maxHeight:"min(var(--radix-popper-available-height, 100vh), 100vh)"})`
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
`,In=(e,s)=>{for(const n of e){if(n.id===s)return n;const a=In(n.children,s);if(a)return a}return null},So=e=>{const s=new Set,n=a=>{for(const r of a.children)r.id!=null&&s.add(r.id),n(r)};return n(e),s},Io=(e,s,n)=>{if(s===n)return!0;const a=In(e,s);return a?So(a).has(n):!1},ko=e=>e.kind==="file"?e.folderId==null:e.parentId==null,Fe=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(r=>!ko(r));const a=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(a.has(s))return!1;for(const r of a)if(Io(n,r,s))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===s||r.kind==="folder"&&r.parentId===s)return!1;return!0},ss=(e,s=new Set,n="")=>e.flatMap(a=>{if(a.id==null||s.has(a.id))return[];const r=n?`${n} / ${a.name??""}`:a.name??"";return[{id:a.id,label:r},...ss(a.children??[],s,r)]}),kn=({formatMessage:e,count:s,source:n,destination:a})=>n===null?e({id:l("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:s,destination:a}):e({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:a}),Do=e=>typeof e=="string"&&e.length>0,Dn=(e,s)=>{if(!e||typeof e!="object")return s;const n=e,a=[n.data?.error?.message,n.data?.message,n.message];for(const r of a)if(Do(r))return r;return s},_e=e=>e.kind==="folder"?e.parentId:e.folderId,$o=e=>$n(e)?_e(e[0]):null,$n=e=>{if(e.length===0)return!1;const s=_e(e[0]);return e.every(n=>_e(n)===s)},Ao=j(Q.Content)`
  max-width: 51.6rem;
`,ns=({open:e,onClose:s,items:n,onSuccess:a})=>{const{formatMessage:r}=T(),{toggleNotification:o}=fe(),{data:i=[],isUninitialized:d,isLoading:u,isError:f}=Xt(void 0,{skip:!e}),[g,{isLoading:p}]=gn(),b=c.useMemo(()=>n.filter(y=>y.kind==="file").map(y=>y.id),[n]),h=c.useMemo(()=>n.filter(y=>y.kind==="folder").map(y=>y.id),[n]),x=$n(n),w=$o(n),{data:S}=Zt({id:w},{skip:w===null}),[C,k]=c.useState(""),m=r({id:l("plugin.name"),defaultMessage:"Media Library"}),I=c.useMemo(()=>ss(i,new Set(h)).filter(y=>Fe({items:n,targetFolderId:y.id,folderStructure:i})),[i,h,n]),$=c.useMemo(()=>Fe({items:n,targetFolderId:null,folderStructure:i}),[n,i]),M=$?"":I[0]?.id.toString()??"";c.useEffect(()=>{k(M)},[e,M]);const D=!d&&!u&&!f,z=D&&I.length===0&&!$,L=n.length,_=async()=>{if(p||!D)return;const y=C===""?null:Number(C);try{await g({fileIds:b,folderIds:h,destinationFolderId:y}).unwrap()}catch(N){o({type:"danger",message:Dn(N,r({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const A=x?w===null?m:S?.name??m:null,F=y===null?m:I.find(N=>N.id===y)?.label??m;o({type:"success",message:kn({formatMessage:r,count:L,source:A,destination:F})}),a?.(),s()},E=()=>f?t.jsx(R,{textColor:"danger600",children:r({id:l("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):z?t.jsx(R,{textColor:"neutral600",children:r({id:l("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(Z.Root,{name:"destination",children:[t.jsx(Z.Label,{children:r({id:l("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(en,{value:C,onChange:y=>k(String(y)),disabled:p||!D,children:[$&&t.jsx(at,{value:"",children:m}),I.map(y=>t.jsx(at,{value:String(y.id),children:y.label},y.id))]})]});return t.jsx(Q.Root,{open:e,onOpenChange:y=>{!y&&!p&&s()},children:t.jsxs(Ao,{children:[t.jsx(Q.Header,{children:t.jsx(Q.Title,{children:r({id:l("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(Q.Body,{children:E()}),t.jsx(Q.Footer,{children:t.jsxs(v,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(G,{variant:"tertiary",onClick:s,disabled:p,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{onClick:_,loading:p,disabled:!D||z,children:r({id:l("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},as=({open:e,onClose:s,target:n,onSuccess:a,onPendingChange:r})=>{const{formatMessage:o}=T(),{toggleNotification:i}=fe(),[d,{isLoading:u}]=Dr(),f=n.fileIds.length+n.folderIds.length;c.useEffect(()=>{r?.(u)},[u,r]);const g=async p=>{if(p.preventDefault(),u)return;if("error"in await d(n)){i({type:"danger",message:o({id:l("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}s(),i({type:"success",message:o({id:l("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:f})}),a?.()};return t.jsx(K.Root,{open:e,onOpenChange:p=>{!p&&!u&&s()},children:t.jsxs(K.Content,{children:[t.jsx(K.Header,{children:o({id:l("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:f})}),t.jsx(K.Body,{icon:t.jsx(ct,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(R,{children:o({id:l("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(K.Footer,{children:[t.jsx(K.Cancel,{children:t.jsx(G,{variant:"tertiary",disabled:u,fullWidth:!0,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(K.Action,{children:t.jsx(G,{variant:"danger-light",loading:u,onClick:g,fullWidth:!0,children:o({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},An=({asset:e,dragData:s})=>{const{formatMessage:n}=T(),{copy:a}=Wt(),{toggleNotification:r}=fe(),{deselect:o}=me(),i=ts()?.markBusy??(()=>()=>{}),{canUpdate:d,canDownload:u,canCopyLink:f,isLoading:g}=ue(),[p,{isLoading:b}]=hn(),h=ht({mime:e.mime}),x=c.useRef(null),[w,S]=c.useState(!1),[C,k]=c.useState(!1),[m,I]=c.useState(!1),[$,M]=c.useState(!1),D=c.useMemo(()=>[s],[s]),z=()=>{S(!1),x.current?.click()},L=async N=>{const q=N.target.files?.[0];if(N.target.value="",!q)return;const O=i(e.id,n({id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let V;try{V=await p({id:e.id,file:q})}finally{O()}if("error"in V){const{message:Y}=V.error;r({type:"danger",message:Y??n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."})});return}r({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},_=async()=>{const N=he(e.url);if(!N)return;const q=await a(N);r({type:q?"success":"danger",message:n(q?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},E=async()=>{const N=he(e.url);if(N){M(!0);try{await fn(N,e.name)}catch{r({type:"danger",message:n({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{M(!1)}}},y=d||f||u,A=d,F=(f||u)&&A;return!g&&!y&&!A?null:t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:t.jsx("input",{ref:x,type:"file",multiple:!1,onChange:L,"aria-hidden":!0,tabIndex:-1})}),t.jsxs(B.Root,{modal:!1,children:[t.jsx(B.Trigger,{tag:ne,icon:t.jsx(nn,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(Sn,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[d&&t.jsx(B.Item,{startIcon:t.jsx(sn,{}),disabled:b,onSelect:()=>S(!0),children:n({id:l("list.assets.actions.replace"),defaultMessage:"Replace media"})}),f&&t.jsx(B.Item,{startIcon:t.jsx(Ue,{}),onSelect:_,children:n({id:l("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),u&&t.jsx(B.Item,{startIcon:t.jsx(tn,{}),disabled:$,onSelect:E,children:n({id:l("list.assets.actions.download"),defaultMessage:"Download media"})}),F&&t.jsx(B.Separator,{}),d&&t.jsxs(t.Fragment,{children:[t.jsx(B.Item,{startIcon:t.jsx(qt,{}),onSelect:()=>k(!0),children:n({id:l("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(B.Item,{startIcon:t.jsx(dt,{}),variant:"danger",onSelect:()=>I(!0),children:n({id:l("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]})]}),t.jsx(K.Root,{open:w,onOpenChange:S,children:t.jsxs(K.Content,{children:[t.jsx(K.Header,{children:n({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(K.Body,{textAlign:"center",children:t.jsxs(v,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),h?t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(K.Footer,{children:[t.jsx(K.Cancel,{children:t.jsx(G,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(K.Action,{children:t.jsx(G,{variant:"secondary",onClick:z,fullWidth:!0,children:n({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),C&&t.jsx(ns,{open:!0,onClose:()=>k(!1),items:D,onSuccess:()=>o(ye(e.id))}),m&&t.jsx(as,{open:!0,onClose:()=>I(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:()=>o(ye(e.id))})]})},Fo=e=>{const s=[],n=[];for(const a of e)a.kind==="file"?s.push(a.id):n.push(a.id);return{fileIds:s,folderIds:n}},ys=(e,s,n)=>{if(s===null)return n;const a=r=>{for(const o of r){if(o.id===s)return o;const i=a(o.children??[]);if(i)return i}return null};return a(e)?.name??n},bs=(e,s,n,a)=>{const r=e.kind==="file"?ye(e.id):be(e.id),o=_e(e);if(!s||!s.has(r))return{items:[e],fromSelection:!1,activeSourceFolderId:o,spansMultipleSources:!1};const i=[];return s.forEach(d=>{const u=d.indexOf(":"),f=d.slice(0,u),g=Number(d.slice(u+1));if(f==="asset"){if(e.kind==="file"&&e.id===g){i.push(e);return}i.push({kind:"file",id:g,name:"",folderId:ot(n,"file",g,a)});return}if(e.kind==="folder"&&e.id===g){i.push(e);return}i.push({kind:"folder",id:g,name:"",parentId:ot(n,"folder",g,a)})}),{items:i,fromSelection:!0,activeSourceFolderId:o,spansMultipleSources:i.some(d=>_e(d)!==o)}},Ro=(e,s)=>{const n=new Set;if(e.length===0)return n;Fe({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:a}of ss(s))Fe({items:e,targetFolderId:a,folderStructure:s})&&n.add(a);return n},Eo=e=>`file:${e}`,To=e=>`folder:${e}`,Lo=e=>`folder-target:${e}`,Po=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Oo=e=>`folder-tree-target:${e}`,Fn="folder-tree-target:home",No=e=>{if(typeof e!="string")return null;if(e===Fn)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},vt=20,St=24,js=24,Rn=j(v)`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,Bo=j(Rn)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,ws=j(v)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,It=j(v)`
  flex-shrink: 0;
  width: ${js}px;
  height: ${js}px;
  align-items: center;
  justify-content: center;
`,_o=j(v)`
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
`,Uo=({items:e})=>{const{formatMessage:s}=T();if(e.length===0)return null;if(e.length===1){const o=e[0],i=o.kind==="folder",d=i?Ce:nt,u=i?vt:St;return t.jsxs(Rn,{children:[t.jsx(It,{children:t.jsx(d,{width:u,height:u})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:o.name})]})}const n=e.filter(o=>o.kind==="folder").length,a=e.filter(o=>o.kind==="file").length,r=n+a;return t.jsxs(Bo,{gap:3,children:[n>0?t.jsxs(ws,{children:[t.jsx(It,{children:t.jsx(Ce,{width:vt,height:vt})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,a>0?t.jsxs(ws,{children:[t.jsx(It,{children:t.jsx(nt,{width:St,height:St})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:a})})]}):null,t.jsx(_o,{children:t.jsx(R,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:r})})]})},En=c.createContext(null),ge=()=>c.useContext(En),Ms=e=>{const s=Po(e);if(s!=null)return{destinationFolderId:s};const n=No(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},zo=Number.MAX_SAFE_INTEGER,Ko=({children:e,locations:s=pn})=>{const{formatMessage:n}=T(),{toggleNotification:a}=fe(),r=Mo(),{currentFolderId:o}=Ve(),{data:i=[]}=Xt(),d=n({id:l("plugin.name"),defaultMessage:"Media Library"}),[u,{isLoading:f}]=gn(),[g,p]=c.useState([]),[b,h]=c.useState(""),x=c.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),w=c.useCallback(_=>{h(""),requestAnimationFrame(()=>h(_))},[]),{canUpdate:S}=ue(),C=rr(or(cr,{activationConstraint:{distance:S?8:zo}})),k=c.useMemo(()=>Ro(g,i),[g,i]),m=c.useCallback(_=>k.has(_),[k]),I=c.useMemo(()=>({isInternalDragActive:g.length>0,isMovePending:f,isValidDropTarget:m}),[g.length,f,m]),$=c.useCallback(()=>{x.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},p([])},[]),M=c.useCallback(_=>{const E=_.active.data.current;if(!E){$();return}const y=bs(E,r?.selectedKeys,s,o);x.current=y,p(y.items)},[$,o,s,r?.selectedKeys]),D=c.useCallback(async _=>{const{over:E}=_,{items:y,fromSelection:A,activeSourceFolderId:F,spansMultipleSources:N}=x.current;if($(),f||!E||y.length===0)return;const q=Ms(E.id);if(!q)return;const{destinationFolderId:O}=q;if(!Fe({items:y,targetFolderId:O,folderStructure:i}))return;const V=Fo(y),Y=kn({formatMessage:n,count:y.length,source:N?null:ys(i,F,d),destination:ys(i,O,d)}),oe=n({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await u({...V,destinationFolderId:O}).unwrap(),A&&r?.clear(),w(Y),a({type:"success",message:Y})}catch(ie){const le=Dn(ie,oe);w(n({id:l("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:le})),a({type:"danger",message:le})}},[w,u,$,i,n,f,d,r,a]),z=c.useCallback(()=>{$()},[$]),L=c.useMemo(()=>({onDragStart:({active:_})=>{const E=_.data.current;return E?n({id:l("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:E.name}):""},onDragOver:()=>"",onDragEnd:({active:_,over:E})=>{if(!E)return n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const y=Ms(E.id),A=_.data.current;if(!y||!A)return"";const{items:F}=bs(A,r?.selectedKeys,s,o);return Fe({items:F,targetFolderId:y.destinationFolderId,folderStructure:i})?"":n({id:l("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[o,i,n,s,r?.selectedKeys]);return t.jsx(En.Provider,{value:I,children:t.jsxs(ir,{sensors:C,collisionDetection:lr,onDragStart:M,onDragEnd:D,onDragCancel:z,accessibility:{announcements:L},children:[t.jsx(Se,{"aria-live":"polite","aria-atomic":"true",children:b}),t.jsx(v,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(dr,{dropAnimation:null,children:g.length>0?t.jsx(Uo,{items:g}):null})]})})},Tn=e=>{const{isMovePending:s}=ge()??{isMovePending:!1},n=c.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:rt(e.folder)}),[e.folder,e.id,e.name]);return{...dn({id:Eo(e.id),data:n,disabled:s}),dragData:n}},Ln=e=>{const{isMovePending:s,isValidDropTarget:n}=ge()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=ln(),r=rt(e.parent),o=c.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),i=c.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=dn({id:To(e.id),data:o,disabled:s}),u=cn({id:Lo(e.id),data:i,disabled:s}),f=n(e.id),g=u.isOver,p=g&&f,b=g&&!f&&a!=null;return{dragData:o,draggable:d,droppable:u,isDragging:d.isDragging,showValidDropHighlight:p,showInvalidDropCursor:b}},Vo=j(Q.Content)`
  max-width: 51.6rem;
`,Pn=e=>{const{open:s,parentFolderId:n,onClose:a,mode:r}=e,o=e.mode==="rename"?e.initialName:"",{formatMessage:i}=T(),{toggleNotification:d}=fe(),{trackUsage:u}=ke(),[f,g]=c.useState(o),[p,b]=c.useState(),h=c.useRef(null),[x,{isLoading:w}]=br(),[S,{isLoading:C}]=jr(),k=r==="rename"?C:w;c.useEffect(()=>{s&&(g(o),b(void 0),r==="rename"&&h.current?.select())},[s,o,r]);const m=async I=>{I.preventDefault();const $=f.trim();if(!$){b(i({id:l("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?(await S({id:e.folderId,name:$,parent:n}).unwrap(),u("didEditMediaLibraryElements",{location:J,type:"folder",changeLocation:!1})):(await x({name:$,parent:n}).unwrap(),u("didAddMediaLibraryFolders",{location:J})),d({type:"success",message:i(r==="rename"?{id:l("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:l("folder.create.success"),defaultMessage:"Folder has been created"})}),a()}catch(M){const D=M;D?.message?b(D.message):d({type:"danger",message:i(r==="rename"?{id:l("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:l("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(Q.Root,{open:s,onOpenChange:a,children:t.jsxs(Vo,{children:[t.jsx(Q.Header,{children:t.jsx(Q.Title,{children:e.mode==="rename"?i({id:l("folder.rename.title"),defaultMessage:"Rename folder"}):i({id:l("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:m,children:[t.jsx(Q.Body,{children:t.jsxs(Z.Root,{error:p,name:"name",required:!0,children:[t.jsx(Z.Label,{children:i({id:l("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(Js,{ref:h,value:f,onChange:I=>{g(I.target.value),b(void 0)},autoFocus:!0}),t.jsx(Z.Error,{})]})}),t.jsx(Q.Footer,{children:t.jsxs(v,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(G,{variant:"tertiary",onClick:a,type:"button",children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",loading:k,disabled:r==="rename"&&f.trim()===o.trim(),children:i(r==="rename"?{id:l("folder.rename.submit"),defaultMessage:"Save"}:{id:l("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},On=({folder:e,dragData:s})=>{const{formatMessage:n}=T(),{copy:a}=Wt(),{toggleNotification:r}=fe(),{deselect:o}=me(),[i,d]=c.useState(!1),[u,f]=c.useState(!1),[g,p]=c.useState(!1),b=c.useMemo(()=>[s],[s]),h=async()=>{const x=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,w=await a(x);r({type:w?"success":"danger",message:n(w?{id:l("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:l("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})};return t.jsxs(t.Fragment,{children:[t.jsxs(B.Root,{modal:!1,children:[t.jsx(B.Trigger,{tag:ne,icon:t.jsx(nn,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(Sn,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[t.jsx(B.Item,{startIcon:t.jsx(Ue,{}),onSelect:h,children:n({id:l("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(B.Separator,{}),t.jsx(B.Item,{startIcon:t.jsx(Ma,{}),onSelect:()=>d(!0),children:n({id:l("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(B.Item,{startIcon:t.jsx(qt,{}),onSelect:()=>f(!0),children:n({id:l("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(B.Item,{startIcon:t.jsx(dt,{}),variant:"danger",onSelect:()=>p(!0),children:n({id:l("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]})]}),i&&t.jsx(Pn,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:s.parentId,onClose:()=>d(!1)}),u&&t.jsx(ns,{open:!0,onClose:()=>f(!1),items:b,onSuccess:()=>o(be(e.id))}),g&&t.jsx(as,{open:!0,onClose:()=>p(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:()=>o(be(e.id))})]})},Ae=e=>{ee(e)&&e.stopPropagation()},Ho=j(v)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,Wo=j(va)`
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
`,qo=j(U)`
  grid-column: 1 / -1;
`,Go=j(v)`
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

  ${({$isValidDropTarget:e,theme:s})=>e&&Ee`
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
`,Yo=j(v)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,Qo=j(Ke)`
  flex: 1;
  min-width: 0;
`,Zo=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=T(),{navigateToFolder:a}=Ve(),{isMovePending:r}=ge()??{isMovePending:!1},{isSelected:o,toggle:i,selectRange:d}=me(),{canUpdate:u}=ue(),{dragData:f,draggable:{attributes:g,listeners:p,setNodeRef:b,isDragging:h},droppable:{setNodeRef:x},showValidDropHighlight:w,showInvalidDropCursor:S}=Ln(e),C=be(e.id),k=M=>{b(M),x(M)},m=M=>{ee(M)&&(M.shiftKey?d(s,C):M.metaKey||M.ctrlKey?i(C):a(e))},I=M=>{ee(M)&&(M.key==="Enter"?(M.preventDefault(),a(e)):M.key===" "&&(M.preventDefault(),i(C)))},$=M=>{M.stopPropagation(),M.shiftKey?d(s,C):i(C)};return t.jsxs(Go,{ref:k,...g,...p,$isDragging:h,$isMovePending:r,$isValidDropTarget:w,$isInvalidDropTarget:S,$isSelected:o(C),onClick:m,onKeyDown:I,onPointerDown:M=>{ee(M)&&p?.onPointerDown?.(M)},role:"listitem",tabIndex:0,children:[u&&t.jsx(v,{onKeyDown:M=>M.stopPropagation(),children:t.jsx(Ie,{checked:o(C),onClick:$,"aria-label":n({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Yo,{children:t.jsx(Ce,{width:20,height:20})}),t.jsx(Qo,{textColor:"neutral800",children:e.name}),t.jsx(v,{onClick:Ae,onKeyDown:Ae,onPointerDown:Ae,children:t.jsx(On,{folder:e,dragData:f})})]})},Cs=j(U)`
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
`,Xo=j.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Jo=j(v)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,ei=({asset:e})=>{const{alternativeText:s,ext:n,formats:a,mime:r,url:o,updatedAt:i,isLocal:d,isUrlSigned:u}=e;if(r?.includes(xe.Image)){const g=i&&!u?new Date(i).getTime():void 0,p=x=>g===void 0?x:x.includes("?")?`${x}&v=${g}`:`${x}?v=${g}`,b=he(a?.thumbnail?.url)??he(o),h=b&&p(b);if(h)return t.jsx(Cs,{children:t.jsx(Xo,{src:h,alt:s||"",crossOrigin:!d&&u?"anonymous":void 0,draggable:!1,onDragStart:x=>x.preventDefault()})})}const f=ze(r,n);return t.jsx(Cs,{children:t.jsx(Jo,{justifyContent:"center",alignItems:"center",children:t.jsx(f,{width:48,height:48})})})},ti=j(Sa)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,si=j(v)`
  min-width: 0;
  width: 100%;
`,ni=j(v)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,ai=j(Ke)`
  flex: 1;
  min-width: 0;
`,ri=j.button`
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
`,oi=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:a}=T(),r=ze(e.mime,e.ext),{isMovePending:o}=ge()??{isMovePending:!1},{attributes:i,listeners:d,setNodeRef:u,isDragging:f,dragData:g}=Tn(e),{isSelected:p,toggle:b,selectRange:h}=me(),{canUpdate:x}=ue(),w=ts()?.getBusyMessage(e.id)??null,S=ye(e.id),C=p(S),k=M=>{ee(M)&&(M.shiftKey?h(s,S):M.metaKey||M.ctrlKey?b(S):n(e.id))},m=M=>{ee(M)&&(M.key==="Enter"?(M.preventDefault(),n(e.id)):M.key===" "&&(M.preventDefault(),b(S)))},I=M=>{M.stopPropagation(),n(e.id)},$=M=>{M.stopPropagation(),M.shiftKey?h(s,S):b(S)};return t.jsxs(Wo,{ref:u,...i,...d,$isDragging:f,$isMovePending:o,$isBusy:w!==null,$isSelected:C,tabIndex:0,role:"listitem",onDragStart:M=>M.preventDefault(),onClick:k,onKeyDown:m,onPointerDown:M=>{ee(M)&&d?.onPointerDown?.(M)},children:[t.jsxs(ti,{children:[x&&t.jsx(Ho,{onKeyDown:M=>M.stopPropagation(),children:t.jsx(Ie,{checked:C,onClick:$,"aria-label":a({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(ei,{asset:e}),w!==null?t.jsx(xn,{zIndex:2,children:w}):null]}),t.jsx(Ca,{children:t.jsxs(si,{alignItems:"center",gap:2,children:[t.jsx(ni,{children:t.jsx(r,{width:20,height:20})}),t.jsx(ri,{type:"button",onClick:I,children:t.jsx(ai,{textColor:"primary800",children:e.name})}),t.jsx(v,{onClick:Ae,onKeyDown:Ae,onPointerDown:Ae,children:t.jsx(An,{asset:e,dragData:g})})]})})]})},ii=({assets:e,folders:s=[],onAssetItemClick:n})=>{const a=s.length+e.length,r=[...s.map(o=>be(o.id)),...e.map(o=>ye(o.id))];return a===0?null:t.jsxs(Qe.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(qo,{children:t.jsx(Qe.Root,{gap:4,children:s.map(o=>t.jsx(Qe.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(Zo,{folder:o,orderedItemKeys:r})},`folder-${o.id}`))})}),e.map(o=>t.jsx(Qe.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(oi,{asset:o,orderedItemKeys:r,onAssetItemClick:n})},o.id))]})},Nn=()=>{const[{query:e},s]=Re(),n=e?._q??"",a=c.useCallback(o=>{o?s({_q:Qt(o)},"push",!0):s({_q:""},"remove",!0)},[s]),r=c.useCallback(()=>a(""),[a]);return{searchQuery:n,isSearching:n!=="",setSearchQuery:a,clearSearch:r}},li=300,di=j(Da)`
  > div {
    border: none;
  }
`,ci=()=>{const{formatMessage:e}=T(),{searchQuery:s,setSearchQuery:n}=Nn(),{trackUsage:a}=ke(),r=an(),[o,i]=c.useState(s),d=Ia(o,li),u=c.useRef(s),[{query:f}]=Re(),g=f?.folder??"",p=c.useRef(g);c.useEffect(()=>{d!==u.current&&(u.current=d,d&&a("didSearchMediaLibraryElements",{location:J}),n(d))},[d,n,a]),c.useEffect(()=>{s!==u.current&&(u.current=s,i(s))},[s]),c.useEffect(()=>{g!==p.current&&(p.current=g,u.current=s,i(s))},[g,s]);const b=t.jsx(di,{onSubmit:h=>h.preventDefault(),children:t.jsx(ka,{name:"search-assets",value:o,onChange:h=>i(h.target.value),onClear:()=>i(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:l("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:l("search.label"),defaultMessage:"Search for an asset"})})});return r?t.jsx(U,{width:"100%",children:b}):b},ui={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},Ne={GRID:0,TABLE:1},vs=[{name:"name",label:{id:l("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:l("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:l("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:l("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:l("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],gi=j(Fa)`
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
`,pi=j(Ra)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Ot=j(Ea)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,re=j(Ta)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Bn=j.tr`
  height: 48px;
  user-select: none;
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isBusy:s,$isInvalidDropTarget:n})=>e||s?"wait":n?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e,$isBusy:s})=>e||s?.4:1};
  pointer-events: ${({$isMovePending:e,$isBusy:s})=>e||s?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&Ee`
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
    ${re} {
      border-bottom: 0;
    }
  }
`,_n=j(re)`
  width: 5.6rem;
  white-space: nowrap;
`,hi=j(Ot)`
  width: 5.6rem;
  white-space: nowrap;
`,fi=j(ct)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,mi=j.button`
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
`,ce=e=>{ee(e)&&e.stopPropagation()},xi=({asset:e})=>{const{ext:s,mime:n}=e,a=ze(n,s);return t.jsx(v,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(a,{width:20,height:20})})},Ss=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const a=Gt(),{formatDate:r,formatMessage:o}=T(),{isMovePending:i}=ge()??{isMovePending:!1},{attributes:d,listeners:u,setNodeRef:f,isDragging:g,dragData:p}=Tn(e),{isSelected:b,toggle:h,selectRange:x}=me(),{canUpdate:w}=ue(),S=ts()?.getBusyMessage(e.id)??null,C=ye(e.id),k=b(C),m=!e.caption||!e.alternativeText,I=o({id:l("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),$=L=>{ee(L)&&(L.shiftKey?x(s,C):L.metaKey||L.ctrlKey?h(C):n(e.id))},M=L=>{ee(L)&&(L.key==="Enter"?(L.preventDefault(),n(e.id)):L.key===" "&&(L.preventDefault(),h(C)))},D=L=>{L.stopPropagation(),n(e.id)},z=L=>{L.stopPropagation(),L.shiftKey?x(s,C):h(C)};return t.jsxs(Bn,{ref:f,...d,...u,$isDragging:g,$isMovePending:i,$isBusy:S!==null,$isSelected:k,tabIndex:0,role:"row",onDragStart:L=>L.preventDefault(),onClick:$,onKeyDown:M,onPointerDown:L=>{ee(L)&&u?.onPointerDown?.(L)},children:[w&&t.jsx(_n,{onClick:ce,onKeyDown:ce,children:t.jsx(v,{children:t.jsx(Ie,{checked:k,onClick:z,"aria-label":o({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(re,{children:t.jsxs(v,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs(v,{gap:3,alignItems:"center",minWidth:0,children:[S!==null?t.jsx(v,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx(Me,{small:!0,children:S})}):t.jsx(xi,{asset:e}),t.jsxs(v,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(mi,{type:"button",onClick:D,children:t.jsx(Ke,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})}),!a&&t.jsx(R,{textColor:"neutral600",variant:"pi",children:e.size?Pt(e.size,1):"-"})]})]}),m&&t.jsx(lt,{label:I,children:t.jsx(fi,{"aria-label":I,role:"img"})})]})}),a&&t.jsxs(t.Fragment,{children:[t.jsx(re,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(re,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(re,{children:t.jsx(R,{textColor:"neutral600",children:e.size?Pt(e.size,1):"-"})})]}),t.jsx(re,{onClick:ce,onKeyDown:ce,onPointerDown:ce,children:t.jsx(v,{justifyContent:"flex-end",children:t.jsx(An,{asset:e,dragData:p})})})]})},yi=j(Bn)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Is=({folder:e,orderedItemKeys:s})=>{const n=Gt(),{formatDate:a,formatMessage:r}=T(),{navigateToFolder:o}=Ve(),{isSelected:i,toggle:d,selectRange:u}=me(),{canUpdate:f}=ue(),{isMovePending:g}=ge()??{isMovePending:!1},{dragData:p,draggable:{attributes:b,listeners:h,setNodeRef:x,isDragging:w},droppable:{setNodeRef:S},showValidDropHighlight:C,showInvalidDropCursor:k}=Ln(e),m=be(e.id),I=D=>{ee(D)&&(D.shiftKey?u(s,m):D.metaKey||D.ctrlKey?d(m):o(e))},$=D=>{ee(D)&&(D.key==="Enter"?(D.preventDefault(),o(e)):D.key===" "&&(D.preventDefault(),d(m)))},M=D=>{D.stopPropagation(),D.shiftKey?u(s,m):d(m)};return t.jsxs(yi,{ref:D=>{x(D),S(D)},...b,...h,$isDragging:w,$isMovePending:g,$isValidDropTarget:C,$isInvalidDropTarget:k,$isSelected:i(m),tabIndex:0,role:"row",onDragStart:D=>{ee(D)&&D.preventDefault()},onClick:I,onKeyDown:$,onPointerDown:D=>{ee(D)&&h?.onPointerDown?.(D)},children:[f&&t.jsx(_n,{onClick:ce,onKeyDown:ce,children:t.jsx(v,{children:t.jsx(Ie,{checked:i(m),onClick:M,"aria-label":r({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(re,{children:t.jsxs(v,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx(v,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(Ce,{width:20,height:20})}),t.jsx(Ke,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})]})}),n&&t.jsxs(t.Fragment,{children:[t.jsx(re,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(re,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(re,{children:t.jsx(R,{textColor:"neutral600",children:"-"})})]}),t.jsx(re,{onClick:ce,onKeyDown:ce,onPointerDown:ce,children:t.jsx(v,{justifyContent:"flex-end",children:t.jsx(On,{folder:e,dragData:p})})})]})},bi=({assets:e,folders:s=[],mixedItems:n=null,onAssetItemClick:a})=>{const r=Gt(),{formatMessage:o}=T(),{selectedKeys:i,selectAll:d,clear:u}=me(),{canUpdate:f}=ue(),{trackUsage:g}=ke(),p=r?vs:vs.filter(m=>m.name==="name"||m.name==="actions"),b=f,h=p.length+(b?1:0),x=s.length+e.length,w=n?n.map(m=>m.kind==="folder"?be(m.folder.id):ye(m.asset.id)):[...s.map(m=>be(m.id)),...e.map(m=>ye(m.id))],{allSelected:S,isIndeterminate:C}=jo(i,w),k=()=>{S?u():(g("didSelectAllMediaLibraryElements"),d(w))};return x===0?null:t.jsxs(gi,{colCount:h,rowCount:(n?n.length:x)+1,children:[t.jsx(pi,{children:t.jsxs($a,{children:[b&&t.jsx(hi,{children:t.jsx(v,{children:t.jsx(Ie,{checked:C?"indeterminate":S,disabled:w.length===0,onCheckedChange:k,"aria-label":o({id:l("list.table.header.select-all"),defaultMessage:"Select all"})})})}),p.map(m=>{const I=o(m.label);return"isVisuallyHidden"in m&&m.isVisuallyHidden?t.jsx(Ot,{children:t.jsx(Se,{children:o({id:l("table.header.actions"),defaultMessage:"actions"})})},m.name):t.jsx(Ot,{children:t.jsx(R,{textColor:"neutral600",variant:"sigma",children:I})},m.name)})]})}),t.jsxs(Aa,{children:[n?.map(m=>m.kind==="folder"?t.jsx(Is,{folder:m.folder,orderedItemKeys:w},`folder-${m.folder.id}`):t.jsx(Ss,{asset:m.asset,orderedItemKeys:w,onAssetItemClick:a},m.asset.id)),!n&&s.map(m=>t.jsx(Is,{folder:m,orderedItemKeys:w},`folder-${m.id}`)),!n&&e.map(m=>t.jsx(Ss,{asset:m,orderedItemKeys:w,onAssetItemClick:a},m.id))]})]})},ji=(e,s,n,a)=>{const r=[];return e.forEach(o=>{r.push({kind:"file",id:o,name:"",folderId:ot(n,"file",o,a)})}),s.forEach(o=>{r.push({kind:"folder",id:o,name:"",parentId:ot(n,"folder",o,a)})}),r},wi=j(v)`
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
`,Mi=j(v)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,Ci=j(U)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,vi=({assets:e=[],locations:s=pn})=>{const{formatMessage:n}=T(),{toggleNotification:a}=fe(),r=ht(),{canUpdate:o}=ue(),{selectedIds:i,selectedFolderIds:d,clear:u}=me(),{currentFolderId:f}=Ve(),[g,{isLoading:p}]=La(),[b,h]=c.useState(!1),[x,w]=c.useState(!1),[S,C]=c.useState(!1),k=i.size+d.size,m=S||p,I=c.useMemo(()=>ji(i,d,s,f),[i,d,s,f]),$=i.size>hs,M=c.useMemo(()=>{const _=new Map(e.map(({id:E,mime:y})=>[E,y]));return[...i].filter(E=>un(_.get(E))).length},[e,i]),D=i.size>0&&M===0;let z;$?z=n({id:l("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:hs}):D&&(z=n({id:l("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const L=async()=>{if(p||$||D)return;const _=Array.from(i),E=await g({fileIds:_});if("error"in E){a({type:"danger",message:n({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const y=E.data.filter(({status:q})=>q==="success").length,A=E.data.filter(({status:q})=>q==="skipped").length,F=E.data.filter(({status:q})=>q==="error").length,N=d.size;if(F===E.data.length){a({type:"danger",message:n({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}a(A===0&&F===0&&N===0?{type:"success",message:n({id:l("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:y})}:{type:"warning",message:n({id:l("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:y,skippedCount:A,errorCount:F,folderCount:N})}),u()};return k===0||!o?null:t.jsxs(wi,{tag:"section",role:"region","aria-label":n({id:l("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(R,{fontWeight:"bold",textColor:"neutral800",marginRight:4,children:n({id:l("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:k})}),t.jsxs(Mi,{children:[r&&t.jsx(lt,{label:z,children:t.jsx(U,{children:t.jsx(G,{size:"S",startIcon:t.jsx(Pa,{}),disabled:m||i.size===0||$||D,loading:p,onClick:L,children:n({id:l("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(ne,{variant:"tertiary",disabled:m,label:n({id:l("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>w(!0),children:t.jsx(qt,{})}),t.jsx(ns,{open:x,onClose:()=>w(!1),items:I,onSuccess:u}),t.jsx(ne,{variant:"danger-light",disabled:m,label:n({id:l("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>h(!0),children:t.jsx(dt,{})}),t.jsx(as,{open:b,onClose:()=>h(!1),target:{fileIds:Array.from(i),folderIds:Array.from(d)},onSuccess:u,onPendingChange:C})]}),t.jsx(Ci,{"aria-hidden":!0}),t.jsx(ne,{variant:"ghost",label:n({id:l("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:u,disabled:m,children:t.jsx(ut,{})})]})},Un=c.createContext(null),Si=j(U)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Ii=({children:e,onDrop:s,disabled:n=!1})=>{const[a,r]=c.useState(!1),o=c.useRef(0),i={isDragging:a};c.useEffect(()=>{const p=()=>{r(!1),o.current=0},b=h=>{h.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",p),document.addEventListener("dragleave",b),()=>{document.removeEventListener("dragend",p),document.removeEventListener("dragleave",b)}},[]);const d=c.useCallback(p=>{p.preventDefault(),p.stopPropagation(),!n&&p.dataTransfer.types.includes("Files")&&(o.current+=1,r(!0))},[n]),u=c.useCallback(p=>{p.preventDefault(),p.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),f=c.useCallback(p=>{p.preventDefault(),p.stopPropagation(),p.dataTransfer.dropEffect="copy"},[]),g=c.useCallback(p=>{if(p.preventDefault(),p.stopPropagation(),r(!1),o.current=0,n)return;const{files:b}=p.dataTransfer;b?.length&&s&&s(Array.from(b))},[s,n]);return t.jsx(Un.Provider,{value:i,children:t.jsx(Si,{"data-testid":"assets-dropzone",onDragEnter:d,onDragLeave:u,onDragOver:f,onDrop:g,children:e})})},zn=()=>{const e=c.useContext(Un);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},ki=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Di=j(U)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>ki(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,$i=({children:e})=>{const{isDragging:s}=zn(),a=ge()?.isInternalDragActive??!1,r=s&&!a;return t.jsxs(U,{position:"relative",children:[r&&t.jsx(Di,{}),e]})},Ai=j(U)`
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
`,Fi=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=T(),{isDragging:a}=zn(),o=ge()?.isInternalDragActive??!1,i=a&&!o,[d,u]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const f=()=>{const p=e.current?.getBoundingClientRect();p&&u(b=>b!==p.left?p.left:b)};f();const g=new ResizeObserver(f);return g.observe(e.current),()=>g.disconnect()},[e]),i?t.jsxs(Ai,{$leftContentWidth:d,children:[t.jsx(R,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(v,{gap:2,alignItems:"center",children:[t.jsx(Ce,{width:20,height:20,fill:"neutral0"}),t.jsx(R,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},Ri=({onAddAssets:e,canAddAssets:s,searchQuery:n,onClearSearch:a})=>{const{formatMessage:r}=T(),o=!!n;return t.jsxs(v,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(rn,{width:"16rem",height:"8.8rem"}),t.jsxs(v,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(R,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:r(o?{id:l("list.search.empty.title"),defaultMessage:"No results found"}:{id:l("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(R,{textColor:"neutral600",children:o?r({id:l("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:n}):r({id:l("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),o?t.jsx(G,{variant:"secondary",startIcon:t.jsx(ut,{"aria-hidden":!0}),onClick:a,children:r({id:l("list.search.empty.clear"),defaultMessage:"Clear search"})}):s&&t.jsx(G,{onClick:e,children:r({id:l("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},Ei=({onClearFilters:e})=>{const{formatMessage:s}=T();return t.jsxs(v,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(rn,{width:"16rem",height:"8.8rem"}),t.jsx(R,{textColor:"neutral600",children:s({id:l("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(G,{variant:"secondary",startIcon:t.jsx(ut,{"aria-hidden":!0}),onClick:e,children:s({id:l("list.filters.clear"),defaultMessage:"Clear filters"})})]})},rs=["folder","picture","audio","video","document"],os=["1day","3days","1week","1month","3months","6months","1year"],Ti={created:"createdAt",updated:"updatedAt"},Li={createdAt:"created",updatedAt:"updated"},ks={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},Pi={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},Ds={rangeis:"is",rangenot:"isNot"},Oi={is:"rangeis",isNot:"rangenot"},$s=/^\d{4}-\d{2}-\d{2}$/,Ni=e=>rs.includes(e),Bi=e=>os.includes(e),_i=e=>{const[s,n,a]=e.split(":");if(!s||!n||!a)return null;if(s==="type"){if(n!=="is"&&n!=="not")return null;const o=a.split(",").filter(Ni);return o.length>0?{kind:"type",condition:n==="is"?"is":"isNot",values:o}:null}const r=Ti[s];if(!r)return null;if(n in ks)return Bi(a)?{kind:"date",field:r,mode:"preset",condition:ks[n],preset:a}:null;if(n in Ds){const[o,i]=a.split("..");return $s.test(o??"")&&$s.test(i??"")?{kind:"date",field:r,mode:"range",condition:Ds[n],from:o,to:i}:null}return null},Ui=e=>typeof e!="string"||e===""?[]:e.split(";").map(_i).filter(s=>s!==null),zi=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const s=Li[e.field];return e.mode==="preset"?`${s}:${Pi[e.condition]}:${e.preset}`:`${s}:${Oi[e.condition]}:${e.from}..${e.to}`},As=e=>e.map(zi).join(";"),Ki=()=>{const[{query:e},s]=Re(),n=Ui(e?.filters),a=r=>{r.length===0?s({filters:""},"remove",!0):s({filters:As(r)},"push",!0)};return{filters:n,serialized:As(n),addFilter:r=>a([...n,r]),updateFilter:(r,o)=>a(n.map((i,d)=>d===r?o:i)),removeFilter:r=>a(n.filter((o,i)=>i!==r)),clearFilters:()=>a([])}},Nt={picture:"image",audio:"audio",video:"video"},Fs=Object.values(Nt),Vi={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},Hi=(e,s)=>{const{days:n=0,months:a=0,years:r=0}=Vi[s],o=new Date(e.getTime());if(r||a){const i=o.getDate();o.setDate(1),o.setFullYear(o.getFullYear()-r),o.setMonth(o.getMonth()-a);const d=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();o.setDate(Math.min(i,d))}return o.setDate(o.getDate()-n),o},Rs=e=>{const s=new Date(e.getTime());return s.setHours(0,0,0,0),s},Es=e=>{const s=new Date(e.getTime());return s.setHours(23,59,59,999),s},it=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},Wi=(e,s)=>{const{field:n}=e;if(e.mode==="preset"){const o=Hi(s,e.preset);switch(e.condition){case"withinLast":return{[n]:{$gte:o.toISOString()}};case"notWithinLast":return{[n]:{$lt:o.toISOString()}};case"isExactly":return{[n]:{$gte:Rs(o).toISOString(),$lte:Es(o).toISOString()}}}}const a=Rs(it(e.from)).toISOString(),r=Es(it(e.to)).toISOString();return e.condition==="is"?{[n]:{$gte:a,$lte:r}}:{$or:[{[n]:{$lt:a}},{[n]:{$gt:r}}]}},qi=e=>{const s=e.values.filter(r=>r!=="folder");if(s.length===0)return null;const n=s.map(r=>r==="document"?{$and:Fs.map(o=>({mime:{$notContains:o}}))}:{mime:{$contains:Nt[r]}});if(e.condition==="is")return n.length===1?n[0]:{$or:n};const a=s.map(r=>r==="document"?{$or:Fs.map(o=>({mime:{$contains:o}}))}:{mime:{$notContains:Nt[r]}});return a.length===1?a[0]:{$and:a}},Gi=(e,s)=>{const n=[],a=[];let r=!0,o=!0;for(const i of e){if(i.kind==="date"){const f=Wi(i,s);n.push(f),a.push(f);continue}const d=i.values.includes("folder");(i.condition==="is"?!d:d)&&(r=!1);const u=qi(i);u?n.push(u):i.condition==="is"&&(o=!1)}return{fileClauses:n,folderClauses:a,showFolders:r,showFiles:o}},Yi=j.button`
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
`,Ts=e=>{const s=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`},Qi=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},Zi=(e,s)=>{const n=new Date(e,s,1),a=new Date(n.getTime());a.setDate(n.getDate()-(n.getDay()+6)%7);const r=[],o=new Date(a.getTime());do{const i=[];for(let d=0;d<7;d+=1)i.push(new Date(o.getTime())),o.setDate(o.getDate()+1);r.push(i)}while(o.getMonth()===s&&o.getFullYear()===e);return r},Bt=({from:e,to:s,onSelect:n})=>{const{formatMessage:a,formatDate:r}=T(),o=e?Qi(e):new Date,[i,d]=c.useState(o.getFullYear()),[u,f]=c.useState(o.getMonth()),[g,p]=c.useState(null),b=g??e??null,h=g?null:s??null,x=k=>{const m=new Date(i,u+k,1);d(m.getFullYear()),f(m.getMonth())},w=k=>{const m=Ts(k);if(!g){p(m);return}const[I,$]=m<g?[m,g]:[g,m];p(null),n(I,$)},S=Zi(i,u),C=S[0].map(k=>r(k,{weekday:"short"}).slice(0,2));return t.jsxs(U,{padding:2,width:"100%",role:"group","aria-label":a({id:l("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs(v,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(ne,{variant:"ghost",label:a({id:l("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>x(-1),children:t.jsx(Oa,{})}),t.jsx(R,{fontWeight:"semiBold",textColor:"neutral800",children:r(new Date(i,u,1),{month:"long",year:"numeric"})}),t.jsx(ne,{variant:"ghost",label:a({id:l("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>x(1),children:t.jsx(Na,{})})]}),t.jsx(v,{children:C.map((k,m)=>t.jsx(v,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(R,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:k})},m))}),S.map((k,m)=>t.jsx(v,{children:k.map(I=>{const $=Ts(I),M=$===b||$===h,D=b!==null&&h!==null&&$>b&&$<h;return t.jsxs(Yi,{type:"button",$isEdge:M,$inRange:D,$isMuted:I.getMonth()!==u,onClick:()=>w(I),children:[t.jsx(Se,{children:r(I,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:I.getDate()})]},$)})},m))]})},_t={folder:{id:l("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:l("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:l("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:l("list.filters.type.video"),defaultMessage:"Video"},document:{id:l("list.filters.type.document"),defaultMessage:"Document"}},Ut={"1day":{id:l("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:l("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:l("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:l("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:l("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:l("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:l("list.filters.preset.1year"),defaultMessage:"1 year ago"}},zt={createdAt:{id:l("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:l("list.filters.field.updated"),defaultMessage:"Last modified"}},kt=j(B.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,$e="24.2rem",Dt="70dvh",Xi=`min(${$e}, calc(100dvw - 2rem))`,$t=j(B.Item)`
  width: 100%;
`,Ls=j(U)`
  width: 100%;

  > * {
    width: 100%;
  }

  /* menuitem, menuitemradio and menuitemcheckbox — every option row, plus the
     "Select date range" toggle, which sits at the same level. */
  > [role^='menuitem'] {
    padding-left: ${({theme:e})=>e.spaces[6]};
  }
`,At=j(gt)`
  transition: transform 0.2s ease;
  transform: rotate(${({$open:e})=>e?"180deg":"0deg"});
`,Ft=j(B.SubContent)`
  margin-top: calc(-1 * (${({theme:e})=>e.spaces[1]} + 1px));
`,Ji=j(_a)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,el=({listFilters:e})=>{const{formatMessage:s}=T(),{trackUsage:n}=ke(),[a,r]=c.useState(!1),{filters:o,addFilter:i,updateFilter:d,removeFilter:u}=e,f=y=>n("didFilterMediaLibraryElements",{location:J,filter:y});let g=-1;for(let y=o.length-1;y>=0;y-=1)if(o[y].kind==="type"){g=y;break}const p=g>=0?o[g]:null,b=p&&p.kind==="type"?p.values:[],h=y=>{const A=!b.includes(y),F=A?[...b,y]:b.filter(N=>N!==y);A&&f("type"),p&&p.kind==="type"?F.length===0?u(g):d(g,{...p,values:F}):F.length>0&&i({kind:"type",condition:"is",values:F})},x=(y,A)=>{f(y);for(let F=o.length-1;F>=0;F-=1){const N=o[F];if(N.kind==="date"&&N.mode==="preset"&&N.field===y){d(F,{...N,preset:A});return}}i({kind:"date",field:y,mode:"preset",condition:"withinLast",preset:A})},w=(y,A)=>{f("createdAt"),i({kind:"date",field:"createdAt",mode:"range",condition:"is",from:y,to:A}),r(!1)},S=an(),[C,k]=c.useState(null),[m,I]=c.useState(!1),$=y=>{r(y),y||(k(null),I(!1))},M=y=>{k(A=>A===y?null:y),I(!1)},D=rs.map(y=>t.jsx(B.Item,{role:"menuitemcheckbox","aria-checked":b.includes(y),onSelect:A=>{A.preventDefault(),h(y)},startIcon:t.jsx(Ie,{checked:b.includes(y),tabIndex:-1,"aria-hidden":!0}),children:s(_t[y])},y)),z=y=>{for(let A=o.length-1;A>=0;A-=1){const F=o[A];if(F.kind==="date"&&F.mode==="preset"&&F.field===y)return F.preset}return null},L=y=>{const A=z(y);return os.map(F=>t.jsx(B.Item,{role:"menuitemradio","aria-checked":A===F,onSelect:()=>{x(y,F)},endIcon:A===F?t.jsx(pt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:s(Ut[F])},F))},_=s({id:l("list.filters.field.type"),defaultMessage:"Type"}),E=s({id:l("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(B.Root,{open:a,onOpenChange:$,children:[t.jsx(B.Trigger,{variant:"tertiary",startIcon:t.jsx(Ba,{"aria-hidden":!0}),endIcon:null,children:t.jsxs(v,{gap:2,alignItems:"center",tag:"span",children:[s({id:l("list.filters.trigger"),defaultMessage:"Filter"}),o.length>0&&t.jsx(Ji,{children:o.length})]})}),t.jsx(B.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:Dt,width:S?Xi:$e,children:S?t.jsxs(t.Fragment,{children:[t.jsx($t,{"aria-expanded":C==="type",onSelect:y=>{y.preventDefault(),M("type")},endIcon:t.jsx(At,{$open:C==="type","aria-hidden":!0}),children:_}),C==="type"&&t.jsx(Ls,{children:D}),["createdAt","updatedAt"].map(y=>t.jsxs(U,{width:"100%",children:[t.jsx($t,{"aria-expanded":C===y,onSelect:A=>{A.preventDefault(),M(y)},endIcon:t.jsx(At,{$open:C===y,"aria-hidden":!0}),children:s(zt[y])}),C===y&&t.jsxs(Ls,{children:[L(y),y==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx($t,{"aria-expanded":m,onSelect:A=>{A.preventDefault(),I(F=>!F)},endIcon:t.jsx(At,{$open:m,"aria-hidden":!0}),children:E}),m&&t.jsx(U,{paddingLeft:2,children:t.jsx(Bt,{onSelect:w})})]})]})]},y))]}):t.jsxs(t.Fragment,{children:[t.jsxs(B.SubRoot,{children:[t.jsx(kt,{children:_}),t.jsx(Ft,{zIndex:2,maxHeight:Dt,width:$e,children:D})]}),["createdAt","updatedAt"].map(y=>t.jsxs(B.SubRoot,{children:[t.jsx(kt,{children:s(zt[y])}),t.jsxs(Ft,{zIndex:2,maxHeight:Dt,width:$e,children:[L(y),y==="createdAt"&&t.jsxs(B.SubRoot,{children:[t.jsx(kt,{children:E}),t.jsx(Ft,{zIndex:2,maxHeight:"none",width:$e,children:t.jsx(Bt,{onSelect:w})})]})]})]},y))]})})]})},tl=j(v)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,is=j.button`
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
`,sl=j.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ls=j(ve.Content)`
  width: ${$e};
`,Kn=j.button`
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
`,nl=j.button`
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
`,Ps={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Os={isExactly:{id:l("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:l("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:l("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},Ns={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Rt=({label:e,options:s,active:n,getOptionLabel:a,onPick:r})=>{const[o,i]=c.useState(!1);return t.jsxs(ve.Root,{open:o,onOpenChange:i,children:[t.jsx(ve.Trigger,{children:t.jsx(is,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(ls,{children:t.jsx(v,{direction:"column",alignItems:"stretch",padding:1,children:s.map(d=>t.jsxs(Kn,{type:"button",onClick:()=>{r(d),i(!1)},children:[a(d),d===n&&t.jsx(pt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))})})]})},al=({filter:e,onChange:s})=>{const{formatMessage:n}=T(),[a,r]=c.useState(!1),o=e.values.map(d=>n(_t[d])).join(", "),i=d=>{const u=e.values.includes(d)?e.values.filter(f=>f!==d):[...e.values,d];u.length>0&&s({...e,values:u})};return t.jsxs(ve.Root,{open:a,onOpenChange:r,children:[t.jsx(ve.Trigger,{children:t.jsx(is,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:o})})}),t.jsx(ls,{children:t.jsx(v,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:rs.map(d=>t.jsx(Ie,{checked:e.values.includes(d),onCheckedChange:()=>i(d),children:n(_t[d])},d))})})]})},Bs=({filter:e,onChange:s})=>{const{formatMessage:n,formatDate:a}=T(),[r,o]=c.useState(!1),i=e.mode==="preset"?n(Ut[e.preset]):`${a(it(e.from),{day:"2-digit",month:"short"})} - ${a(it(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(ve.Root,{open:r,onOpenChange:o,children:[t.jsx(ve.Trigger,{children:t.jsx(is,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(ls,{children:e.mode==="preset"?t.jsx(v,{direction:"column",alignItems:"stretch",padding:1,children:os.map(d=>t.jsxs(Kn,{type:"button",onClick:()=>{s({...e,preset:d}),o(!1)},children:[n(Ut[d]),d===e.preset&&t.jsx(pt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))}):t.jsx(Bt,{from:e.from,to:e.to,onSelect:(d,u)=>{s({...e,from:d,to:u}),o(!1)}})})]})},rl=({filter:e,onChange:s,onRemove:n})=>{const{formatMessage:a}=T(),r=e.kind==="type"?a({id:l("list.filters.field.type"),defaultMessage:"Type"}):a(zt[e.field]);return t.jsxs(tl,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(sl,{children:t.jsx(R,{variant:"pi",textColor:"neutral600",children:r})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(Rt,{label:a(Ps[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Ps[o]),onPick:o=>s({...e,condition:o})}),t.jsx(al,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(Rt,{label:a(Os[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:o=>a(Os[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Bs,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(Rt,{label:a(Ns[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Ns[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Bs,{filter:e,onChange:s})]}),t.jsx(nl,{type:"button",onClick:n,"aria-label":a({id:l("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:r}),children:t.jsx(ut,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},ol=j(v)`
  padding-top: ${({theme:e,$compact:s})=>s?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,il=({listFilters:e,compact:s=!1})=>{const{filters:n,updateFilter:a,removeFilter:r}=e;return n.length===0?null:t.jsx(ol,{$compact:s,gap:2,wrap:"wrap","data-testid":"filter-badges",children:n.map((o,i)=>t.jsx(rl,{filter:o,onChange:d=>a(i,d),onRemove:()=>r(i)},i))})},Vn=e=>{const{isMovePending:s,isValidDropTarget:n}=ge()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=ln(),r=e.id==null?Fn:Oo(e.id),o={kind:"folder-tree-target",id:e.id,name:e.name},i=cn({id:r,data:o,disabled:s}),d=n(e.id),u=i.isOver;return{droppable:i,isOver:u,showValidDropHighlight:u&&d,showInvalidDropCursor:u&&!d&&a!=null}},ll=600,dl=({isOver:e,canExpand:s,onExpand:n})=>{c.useEffect(()=>{if(!e||!s)return;const a=setTimeout(n,ll);return()=>clearTimeout(a)},[e,s,n])},Hn=j.button`
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

  ${({$isValidDropTarget:e,theme:s})=>e&&Ee`
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
`,cl=j(v)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&Ee`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,Wn=(e,s,n=[])=>{for(const a of e){if(a.id===s)return n;if(a.children?.length){const r=a.id!=null?[...n,a.id]:n,o=Wn(a.children,s,r);if(o!==null)return o}}return null},ul=(e,s)=>{const[n,a]=c.useState(()=>new Set);c.useEffect(()=>{if(s==null)return;const d=Wn(e,s);!d||d.length===0||a(u=>{const f=new Set(u);let g=!1;for(const p of d)f.has(p)||(f.add(p),g=!0);return g?f:u})},[e,s]);const r=c.useCallback(d=>{a(u=>{const f=new Set(u);return f.has(d)?f.delete(d):f.add(d),f})},[]),o=c.useCallback(d=>{a(u=>{if(u.has(d))return u;const f=new Set(u);return f.add(d),f})},[]);return{isExpanded:c.useCallback(d=>n.has(d),[n]),toggleExpanded:r,expandFolder:o}},qn=j.ul`
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
`,gl=1.6,pl=j(gt)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,hl=({id:e,name:s,folderChildren:n,level:a,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:f,isMovePending:g})=>{const{formatMessage:p}=T(),b=n.length>0,h=i(e),x=o&&r===e,{droppable:{setNodeRef:w},isOver:S,showValidDropHighlight:C,showInvalidDropCursor:k}=Vn({id:e,name:s}),m=c.useCallback(()=>u(e),[e,u]);return dl({isOver:S,canExpand:b&&!h,onExpand:m}),t.jsxs("li",{children:[t.jsxs(cl,{ref:w,alignItems:"center",paddingLeft:`${a*gl}rem`,gap:1,$isValidDropTarget:C,$isInvalidDropCursor:k,$isMovePending:g,children:[t.jsx(ne,{label:p({id:l(h?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:h?"Collapse {name}":"Expand {name}"},{name:s}),onClick:I=>{I.stopPropagation(),d(e)},variant:"ghost",withTooltip:!1,"aria-expanded":h,children:t.jsx(pl,{$expanded:h,fill:"neutral500"})}),t.jsx(U,{flex:"1",minWidth:0,children:t.jsx(Hn,{type:"button",$isActive:x,$isValidDropTarget:C,$isInvalidDropCursor:k,$isMovePending:g,"aria-current":x?"page":void 0,onClick:()=>f(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(Ke,{variant:"omega",fontWeight:x?"semiBold":"regular",children:s})})})]}),b&&h&&t.jsx(qn,{children:n.map(I=>t.jsx(Gn,{node:I,level:a+1,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:f,isMovePending:g},I.id??I.name))})]})},Gn=({node:e,...s})=>e.id==null?null:t.jsx(hl,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),fl=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n})=>{const{formatMessage:a}=T(),{data:r=[],isLoading:o,isError:i}=Xt(),{isExpanded:d,toggleExpanded:u,expandFolder:f}=ul(r,e),{isMovePending:g}=ge()??{isMovePending:!1},p=s&&e==null,b=a({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:h},showValidDropHighlight:x,showInvalidDropCursor:w}=Vn({id:null,name:b});return t.jsxs(bt.Main,{"aria-label":a({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(bt.Header,{label:a({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(bt.Content,{children:t.jsxs(v,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(Hn,{ref:h,type:"button",$isActive:p,$isValidDropTarget:x,$isInvalidDropCursor:w,$isMovePending:g,"aria-current":p?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(Ua,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(R,{variant:"omega",fontWeight:p?"semiBold":"regular",children:b})]}),t.jsxs(U,{marginTop:4,children:[t.jsxs(v,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(Ce,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(R,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:a({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(v,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(Me,{children:a({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):i?t.jsx(U,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"danger600",children:a({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):r.length===0?t.jsx(U,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"neutral500",children:a({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(qn,{children:r.map(S=>t.jsx(Gn,{node:S,level:0,currentFolderId:e,showActiveFolder:s,isExpanded:d,onToggle:u,onExpand:f,onSelect:n,isMovePending:g},S.id??S.name))})]})]})})]})},ml=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:a}=T(),[r,o]=c.useState(""),[i,d]=c.useState(null),u=()=>{o(""),d(null),s()},f=async g=>{g.preventDefault();const{urls:p,error:b}=Ka(r);if(b){d(b);return}d(null),u(),await n(p)};return t.jsx(Q.Root,{open:e,onOpenChange:g=>!g&&u(),children:t.jsx(Q.Content,{children:t.jsxs("form",{onSubmit:f,children:[t.jsx(Q.Header,{children:t.jsx(Q.Title,{children:a({id:l("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(Q.Body,{children:t.jsxs(Z.Root,{error:i||void 0,hint:a({id:l("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(Z.Label,{children:a({id:l("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(za,{name:"urls",minHeight:"unset",rows:Math.min(r.split(`
`).length,7),maxHeight:"10.5rem",placeholder:a({id:l("input.url.placeholder"),defaultMessage:"Empty"}),value:r,onChange:g=>{o(g.target.value),d(null)}}),t.jsx(Z.Hint,{}),t.jsx(Z.Error,{})]})}),t.jsxs(Q.Footer,{children:[t.jsx(G,{variant:"tertiary",onClick:u,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",children:a({id:l("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},Et={oldestUploads:{id:l("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:l("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},Tt={nameAsc:{id:l("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:l("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:l("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:l("list.sort.size-desc"),defaultMessage:"File size descending"}},_s={top:{id:l("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:l("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},xl=j(B.Trigger)``,Us=j(B.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,yl=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=T(),{trackUsage:a}=ke(),r=n({id:l("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(Et[e.sortBy]):n(Tt[e.direction])}),o=t.jsx(pt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(B.Root,{children:[t.jsx(xl,{variant:"ghost",endIcon:t.jsx(gt,{"aria-hidden":!0}),children:r}),t.jsxs(B.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(Us,{children:n({id:l("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(Et).map(i=>t.jsx(B.Item,{role:"menuitemradio","aria-checked":e.sortBy===i,onSelect:d=>{d.preventDefault(),e.sortBy!==i&&a("didSortMediaLibraryElements",{location:J,sort:i}),e.setSortBy(e.sortBy===i?null:i)},endIcon:e.sortBy===i?o:null,children:n(Et[i])},i)),Object.keys(Tt).map(i=>t.jsx(B.Item,{role:"menuitemradio","aria-checked":e.direction===i,onSelect:d=>{d.preventDefault(),e.direction!==i&&a("didSortMediaLibraryElements",{location:J,sort:i}),e.setDirection(e.direction===i?null:i)},endIcon:e.direction===i?o:null,children:n(Tt[i])},i)),s&&t.jsxs(t.Fragment,{children:[t.jsx(B.Separator,{}),t.jsx(Us,{children:n({id:l("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(_s).map(i=>t.jsx(B.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===i,onSelect:d=>{d.preventDefault(),e.setFoldersPosition(i)},endIcon:e.foldersPosition===i?o:null,children:n(_s[i])},i))]})]})]})},Yn=20,bl=e=>{const s=new Map;for(const n of Object.keys(e).map(Number).sort((a,r)=>a-r))for(const a of e[n])s.set(a.id,a);return[...s.values()]},jl=({queryArgs:e,page:s,onRefreshed:n})=>{const{currentData:a}=Jt({...e,page:s,pageSize:Yn}),r=a?.results;return c.useEffect(()=>{r&&n(s,r)},[r,s,n]),null},wl=({folder:e=null,sort:s,search:n,filters:a,enabled:r=!0}={})=>{const o={folder:e,sort:s,search:n,filters:a},i=JSON.stringify(o),d=JSON.stringify({folder:e,sort:s,filters:a}),[u,f]=c.useState({queryKey:i,page:1}),[g,p]=c.useState({queryKey:i,listKey:d,pages:{}}),b=u.queryKey===i?u.page:1;u.queryKey!==i&&f({queryKey:i,page:1});const{currentData:h,isLoading:x,isFetching:w,error:S}=Jt({...o,page:b,pageSize:Yn},{skip:!r}),C=g.queryKey===i;h&&(!C||g.pages[b]!==h.results)&&p(C?{...g,pages:{...g.pages,[b]:h.results},pagination:h.pagination}:{queryKey:i,listKey:d,pages:{[b]:h.results},pagination:h.pagination});const k=c.useCallback((y,A)=>{p(F=>F.queryKey!==i||F.pages[y]===A?F:{...F,pages:{...F.pages,[y]:A}})},[i]),m=c.createElement(c.Fragment,null,Array.from({length:Math.max(0,b-1)},(y,A)=>A+1).map(y=>c.createElement(jl,{key:`${i}:${y}`,queryArgs:o,page:y,onRefreshed:k}))),I=Va(),$=Ha(),M=c.useRef(e);c.useEffect(()=>{const y=M.current;if(M.current=e,y===e)return;const A=$.getState()[Be.reducerPath],F=Be.internalActions.removeQueryResult;Object.keys(A?.queries??{}).forEach(N=>{if(!N.startsWith("getAssets("))return;let q;try{q=JSON.parse(N.slice(10,-1))}catch{return}q.folder===y&&I(F({queryCacheKey:N}))})},[e,I,$]);const D=g.listKey!==d,z=c.useMemo(()=>D?[]:bl(g.pages),[D,g.pages]),L=h?b<h.pagination.pageCount:!1,_=w&&b>1,E=c.useCallback(()=>{f(y=>({queryKey:i,page:(y.queryKey===i?y.page:1)+1}))},[i]);return r?{assets:z,subscribers:m,pagination:h?.pagination??g.pagination,isLoading:x||D,isFetchingMore:_,hasNextPage:L,fetchNextPage:E,error:S}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:E,error:void 0}},Ml=({hasNextPage:e,isFetchingMore:s,onLoadMore:n,options:a})=>{const r=c.useRef(null),o=c.useRef(null),i=c.useRef(a);i.current=a;const d=c.useRef(n);d.current=n;const u=c.useRef(e);u.current=e;const f=c.useRef(s);f.current=s;const g=c.useCallback(p=>{if(r.current?.disconnect(),o.current=p,!p)return;const b=new IntersectionObserver(([h])=>{h.isIntersecting&&u.current&&!f.current&&d.current()},i.current);b.observe(p),r.current=b},[]);return c.useEffect(()=>()=>r.current?.disconnect(),[]),c.useEffect(()=>{s||!r.current||!o.current||(r.current.unobserve(o.current),r.current.observe(o.current))},[s]),g},ds={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},cs={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},Kt="mostRecentUpdates",zs=Object.fromEntries(Object.entries(ds).map(([e,s])=>[s,e])),Ks=Object.fromEntries(Object.entries(cs).map(([e,s])=>[s,e])),Cl=e=>{for(const s of(e??"").split(",")){if(s in zs)return{sortBy:zs[s],direction:null,isExplicit:!0};if(s in Ks)return{sortBy:null,direction:Ks[s],isExplicit:!0}}return{sortBy:Kt,direction:null,isExplicit:!1}},Vs=(e,s)=>[e&&ds[e],s&&cs[s]].filter(a=>!!a).join(","),vl=()=>{const[{query:e},s]=Re(),{sortBy:n,direction:a,isExplicit:r}=Cl(e?.sort),o=e?.folders==="mixed"?"mixed":"top",i=(x,w)=>{x===null&&w===null&&(x=Kt);const S=Vs(x,w);x===Kt&&w===null?s({sort:""},"remove"):s({sort:S})},d=x=>i(x,null),u=x=>i(null,x),f=x=>{x==="mixed"?s({folders:"mixed"}):s({folders:""},"remove")},g=Vs(n,a),b=[n&&ds[n],a&&!a.startsWith("size")?cs[a]:null].filter(x=>!!x),h=r&&b.length>0?b.join(","):"name:ASC";return{sortBy:n,direction:a,foldersPosition:o,assetsSort:g,foldersSort:h,setSortBy:d,setDirection:u,setFoldersPosition:f}},Sl=({folderId:e,search:s,sort:n,filter:a})=>JSON.stringify({folderId:e,search:s,sort:n,filter:a}),Hs=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},Il=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[a,r]=n.split(":");return{field:a,desc:r?.toUpperCase()==="DESC"}});return(n,a)=>{for(const{field:r,desc:o}of s){const i=Hs(n,r),d=Hs(a,r);let u;if(typeof i=="string"||typeof d=="string"?u=String(i)<String(d)?-1:String(i)>String(d)?1:0:u=i-d,u!==0)return o?-u:u}return 0}},kl=({folders:e,assets:s,sort:n,hasNextPage:a})=>{const r=Il(n),o=[...e].sort(r),i=s[s.length-1],d=!a||!i?a?[]:o:o.filter(g=>r(g,i)<=0),u=[];let f=0;for(const g of s){for(;f<d.length&&r(d[f],g)<=0;)u.push({kind:"folder",folder:d[f]}),f+=1;u.push({kind:"asset",asset:g})}for(;f<d.length;)u.push({kind:"folder",folder:d[f]}),f+=1;return u},Dl={threshold:0,rootMargin:"0px 0px -1px 0px"},$l={threshold:0},Al={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},Lt={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},Fl=(e,s)=>e===0?Lt.assets:s===0?Lt.folders:Lt.both,Rl=({view:e,folders:s,isLoadingFolders:n,assets:a,isLoadingAssets:r,isFetchingMore:o,hasNextPage:i,fetchNextPage:d,error:u,locations:f,searchQuery:g,assetsSort:p,foldersPosition:b,hasActiveFilters:h,onClearFilters:x,onAssetItemClick:w,onAddAssets:S,canAddAssets:C,onClearSearch:k})=>{const{formatMessage:m}=T(),I=e===Ne.GRID,$=r||n,M=c.useMemo(()=>b==="mixed"&&!I?kl({folders:s,assets:a,sort:p,hasNextPage:i}):null,[b,I,s,a,p,i]),D=Ml({hasNextPage:i,isFetchingMore:o,onLoadMore:d,options:Dl});return $?t.jsx(v,{justifyContent:"center",padding:8,children:t.jsx(Me,{children:m({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(U,{padding:8,children:t.jsx(R,{textColor:"danger600",children:m({id:l("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):s.length===0&&a.length===0?h&&!g?t.jsx(Ei,{onClearFilters:x}):t.jsx(Ri,{onAddAssets:S,canAddAssets:C,searchQuery:g,onClearSearch:k}):t.jsxs(t.Fragment,{children:[I?t.jsx(ii,{folders:s,assets:a,onAssetItemClick:w}):t.jsx(bi,{assets:a,folders:s,mixedItems:M,onAssetItemClick:w}),t.jsx("div",{ref:D,style:{height:1}}),o&&t.jsx(v,{justifyContent:"center",padding:4,children:t.jsx(Me,{children:m({id:l("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(vi,{assets:a,locations:f})]})},El=({listQueryKey:e})=>{const{clear:s}=me();return c.useEffect(()=>{s()},[e,s]),null},Tl=j(Ja)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Ws=j(er)`
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
`,Ll=j(U)`
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
  ${({$compact:e,theme:s})=>e&&Ee`
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
`,Pl=j(v)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Ol=j(v)`
  margin-top: ${({theme:e})=>e.spaces[5]};
  flex-direction: column;
  align-items: stretch;
  gap: ${({theme:e})=>e.spaces[3]};
  transition: margin-top 0.2s ease;

  /* Tightening the gap to the title belongs to the compact header, so it is
     scoped to the breakpoints that compact. On mobile the header never sticks,
     and this was the last thing still shifting as the page scrolled. */
  ${({$compact:e,theme:s})=>e&&Ee`
      ${s.breakpoints.medium} {
        margin-top: ${s.spaces[2]};
      }
    `}

  ${({theme:e})=>e.breakpoints.large} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Qn=j(v)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,Nl=j(Qn)``,Bl=j(Qn)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,_l=j(U)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,qs=j.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,Ul=()=>{const{formatMessage:e}=T(),{openDetails:s}=Mn(),{canCreate:n,canUpdate:a}=ue(),{currentFolderId:r,navigateToFolderId:o,navigateToRoot:i}=Ve(),{error:d}=Zt({id:r},{skip:r===null});c.useEffect(()=>{d?.name==="NotFoundError"&&i()},[d,i]);const{title:u,itemCount:f}=mn(r),{searchQuery:g,isSearching:p,clearSearch:b}=Nn(),h=vl(),x=Ki(),w=c.useMemo(()=>Gi(x.filters,new Date),[x.serialized]),{assets:S,subscribers:C,pagination:k,isLoading:m,isFetchingMore:I,hasNextPage:$,fetchNextPage:M,error:D}=wl({folder:r,search:g||void 0,sort:h.assetsSort,filters:w.fileClauses,enabled:w.showFiles}),{data:z=[],isLoading:L}=wr({parentId:r,search:g||void 0,sort:h.foldersSort,filters:w.folderClauses},{skip:!w.showFolders}),_=c.useMemo(()=>w.showFolders?z:[],[w.showFolders,z]),E=c.useMemo(()=>Cr(S,_),[S,_]),y=e(Al,{count:f}),A=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),F=_.length,N=k?.total??0,q=e(Fl(F,N),{numberFolders:F,numberAssets:N});let O;p?O=`${A} (${q})`:u?O=`${u} (${y})`:O=e({id:"app.loading",defaultMessage:"Loading..."});const[V,Y]=c.useState(!1),[oe,ie]=Gs(ui.view,Ne.GRID),le=oe===Ne.GRID,[ft,He]=c.useState(!1),We=c.useRef(null),Te=c.useRef(null),[de,Le]=c.useState(!1),qe=c.useCallback(X=>Le(!X),[]),P=Wa(qe,$l),[W]=qa(),[H]=Ga(),{data:te}=Yt(),se=te?.data?.concurrentUploadRequests??1,pe=ht(),{trackUsage:ae}=ke(),Ge=async(X,Pe)=>{if(X.length===0)return;const Jn=X.reduce((De,ea)=>{const gs=tr(ea.type);return De[gs]=(De[gs]??0)+1,De},{});ae("willAddMediaLibraryAssets",{location:J,...Jn});const yt=new FormData,us=[];X.forEach(De=>{yt.append("files",De),us.push({name:De.name,caption:null,alternativeText:null,folder:Pe})}),yt.append("fileInfo",JSON.stringify(us));try{await W({formData:yt,totalFiles:X.length,concurrency:se,generateAiMetadata:!!pe}).unwrap()}catch{}},Ye=()=>{We.current?.click()},mt=async X=>{const Pe=X.target.files;Pe&&Pe.length>0&&(ae("didSelectFile",{source:"computer",location:J}),await Ge(Array.from(Pe),r)),X.target.value=""},xt=async X=>{n&&(ae("didSelectFile",{source:"computer",location:J}),await Ge(X,r))},Zn=async X=>{ae("didSelectFile",{source:"url",location:J}),ae("willAddMediaLibraryAssets",{location:J});try{await H({urls:X,folderId:r,generateAiMetadata:!!pe}).unwrap()}catch{}},Xn=Sl({folderId:r,search:g,sort:`${h.assetsSort};folders=${h.foldersPosition}`,filter:x.serialized||null});return t.jsxs(t.Fragment,{children:[t.jsx(Ii,{onDrop:xt,disabled:!n,children:t.jsx(wo,{disabled:!a,children:t.jsx(Co,{children:t.jsxs(Ko,{locations:E,children:[t.jsx(El,{listQueryKey:Xn}),t.jsx(ps.Root,{sideNav:t.jsx(fl,{currentFolderId:r,showActiveFolder:!p,onSelectFolder:o}),children:t.jsx(on.Main,{children:t.jsxs(U,{ref:Te,children:[t.jsx(Se,{children:t.jsx("input",{type:"file",ref:We,onChange:mt,multiple:!0})}),t.jsx(U,{ref:P,height:0,"aria-hidden":!0}),t.jsxs(Ll,{$compact:de,children:[t.jsxs(Pl,{children:[t.jsx(R,{variant:"alpha",tag:"h1",children:O}),n&&t.jsxs(Ya,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(gt,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx(jt,{onSelect:()=>Y(!0),startIcon:t.jsx(Ce,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(jt,{onSelect:Ye,startIcon:t.jsx(Qa,{}),children:e({id:l("import-files"),defaultMessage:"Import files"})}),t.jsx(jt,{onSelect:()=>He(!0),startIcon:t.jsx(Ue,{}),children:e({id:l("import-from-url"),defaultMessage:"Import from URL"})})]})]}),t.jsxs(Ol,{$compact:de,children:[t.jsxs(Nl,{children:[t.jsx(U,{children:t.jsx(el,{listFilters:x})}),t.jsx(_l,{children:t.jsx(ci,{})})]}),t.jsxs(Bl,{children:[t.jsx(U,{children:t.jsx(yl,{sort:h,showFoldersGroup:!le})}),t.jsxs(Tl,{type:"single",value:le?"grid":"table",onValueChange:X=>X&&ie(X==="grid"?Ne.GRID:Ne.TABLE),"aria-label":e({id:l("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Ws,{value:"table","aria-label":e({id:l("view.table"),defaultMessage:"Table view"}),children:[t.jsx(Za,{}),t.jsx(qs,{children:e({id:l("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(Ws,{value:"grid","aria-label":e({id:l("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(Xa,{}),t.jsx(qs,{children:e({id:l("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx(il,{listFilters:x,compact:de})]}),t.jsxs(ps.Content,{children:[t.jsx(ur,{}),C,t.jsxs($i,{children:[t.jsx(Fi,{uploadDropZoneRef:Te,folderName:u}),t.jsx(Rl,{view:oe,folders:_,isLoadingFolders:L,assets:S,isLoadingAssets:m,isFetchingMore:I,hasNextPage:$,fetchNextPage:M,error:D,locations:E,searchQuery:g,assetsSort:h.assetsSort,foldersPosition:h.foldersPosition,hasActiveFilters:x.filters.length>0,onClearFilters:x.clearFilters,onAssetItemClick:s,onAddAssets:Ye,canAddAssets:n,onClearSearch:b})]})]})]})})})]})})})}),t.jsx(Pn,{open:V,mode:"create",parentFolderName:u,parentFolderId:r,onClose:()=>Y(!1)}),t.jsx(ml,{open:ft,onClose:()=>He(!1),onUpload:Zn}),t.jsx(ho,{})]})},Wl=()=>{const{formatMessage:e}=T(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(on.Title,{children:s}),t.jsx(sr,{children:t.jsx(nr,{index:!0,element:t.jsx(Ul,{})})})]})};export{Wl as BetaMediaLibrary};
