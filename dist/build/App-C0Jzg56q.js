import{D as cn,dd as un,h7 as vt,h8 as js,f$ as le,h9 as gn,f6 as hn,ha as pn,hb as fn,hc as mn,hd as xn,he as bn,hf as qe,a as A,hg as l,r as c,x as ve,fH as yn,hh as he,j as t,cj as jn,eS as wn,hi as ws,A as $,v as C,hj as vn,hk as Mn,d as Z,hl as Mt,U as G,I as K,y as w,S as O,hm as Cn,k as be,u as Me,hn as ge,bW as Ce,dq as vs,ho as Sn,hp as Dn,hq as $n,G as kn,hr as In,hs as mt,cB as Ct,T as Ms,b4 as Cs,bE as St,b2 as Ss,b3 as Ge,bm as _,bU as Ds,J as Dt,c_ as An,ht as En,dS as Tn,gd as pe,N as Be,bV as me,dY as Ze,dz as Rn,fN as Xe,dw as Fn,dx as Ln,c as Je,hu as Pn,Q as On,Y as $s,e$ as Nn,f1 as Bn,f3 as _n,e_ as zn,f0 as Un,f2 as Kn,cz as q,hv as Vn,dg as Hn,hw as Wn,F as et,K as ks,hx as qn,fG as Gn,cC as W,gg as Yn,ab as Qn,dP as fe,M as $t,ee as Zn,hy as Xn,fR as kt,bP as Jn,hz as er,hA as tr,hB as sr,hC as nr,L as st,gr as rr,gs as ar,e1 as or,hD as nt,ao as ir,hE as lr,hF as dr,hG as cr,P as _t,X as ur,Z as gr}from"./strapi-DjIOPNjs.js";import{u as Is}from"./useAiAvailability-DksT200S.js";import{g as hr}from"./users-CHXWXr2I.js";import{l as pr,m as fr,D as mr,p as xr,k as br,P as yr,u as As,f as Es,e as Ts}from"./core.esm-D928ejed.js";const{main:qi,...jr}=un,ae=()=>{const{allowedActions:e,isLoading:s}=cn(jr);return{isLoading:s,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},It=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),wr=e=>typeof e=="object"&&e!==null&&"data"in e,zt=e=>wr(e)?e.data:e,vr=vt.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:r,search:o,filters:a=[]}=s,i={sort:r??"name:ASC"};if(o)i._q=It(o),a.length>0&&(i.filters={$and:[...a]});else{const d=n!=null?{parent:{id:n}}:{parent:{id:{$null:!0}}};i.filters={$and:[d,...a]}}return{url:"/upload/folders",method:"GET",config:{params:i}}},transformResponse:s=>zt(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>zt(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:r})=>[{type:"Folder",id:r}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:r})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:r}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:Mr,useGetFoldersQuery:Cr,useGetFolderQuery:At,useGetAllFoldersQuery:Sr,useGetFolderStructureQuery:Et,useBulkMoveMutation:Rs}=vr,Dr=vt.injectEndpoints({endpoints:e=>({getUploadSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetUploadSettingsQuery:Fs}=Dr,$r=vt.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,search:r,filters:o=[],...a}=s,i={...a};if(r)i._q=It(r),o.length>0&&(i.filters={$and:[...o]});else{const d=n!=null?{folder:{id:n}}:{folder:{id:{$null:!0}}};i.filters={$and:[d,...o]}}return{url:"/upload/files",method:"GET",config:{params:i}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,r)=>[{type:"Asset",id:r}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const r=new FormData;return r.append("fileInfo",JSON.stringify(n)),{url:"/upload",method:"POST",data:r,config:{params:{id:s}}}},invalidatesTags:(s,n,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:r})=>{const o=new FormData;return o.append("files",n),r&&o.append("fileInfo",JSON.stringify(r)),{url:"/upload",method:"POST",data:o,config:{params:{id:s}}}},invalidatesTags:(s,n,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,r)=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:Ls,useGetAssetQuery:kr,useUpdateAssetMutation:Ir,useReplaceAssetMutation:Ar,useDeleteAssetMutation:Er,useBulkDeleteItemsMutation:Tr}=$r,Rr=async(e,s)=>{const r=await(await fetch(e)).blob(),o=window.URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.setAttribute("download",s),a.click(),window.URL.revokeObjectURL(o)},Fr={pdf:bn,csv:xn,xls:mn,zip:fn},Ee=(e,s)=>{const n=js(s);return e?.includes(le.Image)?gn:e?.includes(le.Video)?hn:e?.includes(le.Audio)?pn:n?Fr[n]||qe:qe},Ps=e=>{const{formatMessage:s}=A(),{data:n,isLoading:r}=At({id:e},{skip:e===null}),{data:o,isLoading:a}=Ls({folder:null,pageSize:1},{skip:e!==null}),i=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?a?{title:i,itemCount:0}:{title:i,itemCount:o?.pagination?.total??0}:r||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},Lr=1,Pr=({anchorX:e,anchorY:s,point:n,aspectRatio:r})=>{let o=Math.abs(n.x-e),a=Math.abs(n.y-s);r&&(o/r>=a?a=o/r:o=a*r);const i=n.x<e?e-o:e,d=n.y<s?s-a:s;return{x:i,y:d,width:o,height:a}},Or=()=>{const[e,s]=c.useState({width:0,height:0}),[n,r]=c.useState({x:0,y:0,width:0,height:0}),[o,a]=c.useState(null),i=c.useRef(null),d=c.useCallback(m=>{i.current=m;const g={width:m.naturalWidth,height:m.naturalHeight};s(g),r({x:0,y:0,width:g.width,height:g.height})},[]),u=(m,g,b)=>Math.min(b,Math.max(g,m)),h=c.useCallback(m=>{r(g=>{const b=e.width-g.x,M=e.height-g.y;let D=m.width!==void 0?u(m.width,1,b):g.width,x=m.height!==void 0?u(m.height,1,M):g.height;return o&&(m.width!==void 0?x=u(D/o,1,M):m.height!==void 0&&(D=u(x*o,1,b))),{...g,width:D,height:x}})},[e.width,e.height,o]),f=c.useCallback(m=>{r(g=>{const b=m.x!==void 0?u(m.x,0,e.width-g.width):g.x,M=m.y!==void 0?u(m.y,0,e.height-g.height):g.y;return{...g,x:b,y:M}})},[e.width,e.height]),p=c.useCallback(m=>{a(m),m&&r(g=>{const b=e.width-g.x,M=e.height-g.y;let D=g.width,x=D/m;return x>M&&(x=M,D=x*m),D>b&&(D=b,x=D/m),{...g,width:Math.round(D),height:Math.round(x)}})},[e.width,e.height]),y=c.useCallback((m,g,b)=>new Promise((M,D)=>{const x=i.current;if(!x){D(new Error("Image not ready: call init() before produceFile()."));return}const S=document.createElement("canvas");S.width=Math.max(1,Math.round(n.width)),S.height=Math.max(1,Math.round(n.height));const j=S.getContext("2d");if(!j){D(new Error("Could not get a 2D canvas context to crop the image."));return}j.drawImage(x,n.x,n.y,n.width,n.height,0,0,S.width,S.height),S.toBlob(v=>{if(!v){D(new Error("Could not export the cropped image to a blob."));return}M(new File([v],m,{type:g,lastModified:b?new Date(b).getTime():Date.now()}))},g,Lr)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:o,setCropSize:h,setCropPosition:f,setAspectRatio:p,produceFile:y,width:Math.round(n.width),height:Math.round(n.height)}},_e=5.6,rt=12,Nr=w(C)`
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
`,Br=w(C)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,_r=w(O)`
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
`,zr=w.div`
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
`,Ur=w.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,ze=w.button`
  position: absolute;
  width: ${rt}px;
  height: ${rt}px;
  margin: -${rt/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,Kr=w.button`
  position: absolute;
  width: ${_e}rem;
  height: ${_e}rem;
  margin: ${-_e/2}rem 0 0 ${-_e/2}rem;
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
`,Vr=w(O)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[1]};
  bottom: ${({theme:e})=>e.spaces[1]};
  width: 100%;
  max-width: 32rem;
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral900};
  z-index: 20;
`,Hr=w(C)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Ue=w(G.Root)`
  flex-direction: row;
  align-items: center;
`,Ke=w(Cn)`
  width: 8.4rem;
`,Ut=w(G.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,Wr=w(O)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,qr=()=>t.jsx(Wr,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),Gr=({asset:e,isBusy:s=!1,onClose:n,onApply:r,onSaveAsCopy:o,canSaveAsCopy:a})=>{const{formatMessage:i}=A(),{toggleNotification:d}=ve(),h=yn().colorScheme==="dark",f=h?"neutral1000":"neutral0",p=h?"neutral600":"neutral200",y=c.useRef(null),m=c.useRef(null),g=c.useRef(null);c.useEffect(()=>{g.current?.focus()},[]);const{init:b,crop:M,naturalSize:D,aspectRatio:x,setCropSize:S,setCropPosition:j,setAspectRatio:v,produceFile:k,width:R,height:E}=Or(),[T,z]=c.useState(!1),[N,V]=c.useState(e.focalPoint??{x:50,y:50}),Y=he(e.url),Q=e.updatedAt?new Date(e.updatedAt).getTime():void 0,se=Q!==void 0?`${Y}${Y.includes("?")?"&":"?"}v=${Q}`:Y,P=()=>{y.current&&b(y.current)},B=I=>{const F=m.current?.getBoundingClientRect();if(!F||!D.width||!D.height)return null;const L=D.width/F.width,X=D.height/F.height;return{x:(I.clientX-F.left)*L,y:(I.clientY-F.top)*X}},H=c.useRef(null);c.useEffect(()=>()=>{H.current?.()},[]);const ee=(I,F)=>{I.preventDefault(),I.stopPropagation();const{pointerId:L}=I;try{I.currentTarget.setPointerCapture(L)}catch{}const X=U=>{U.pointerId===L&&F(U)},J=()=>{window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",ie),window.removeEventListener("pointercancel",ie),H.current=null},ie=U=>{U.pointerId===L&&J()};H.current?.(),H.current=J,window.addEventListener("pointermove",X),window.addEventListener("pointerup",ie),window.addEventListener("pointercancel",ie)},xe=I=>{const F=B(I);if(!F)return;const L={...M};ee(I,X=>{const J=B(X);J&&j({x:L.x+(J.x-F.x),y:L.y+(J.y-F.y)})})},re=I=>F=>{const L={...M},X=I==="tl"||I==="bl"?L.x+L.width:L.x,J=I==="tl"||I==="tr"?L.y+L.height:L.y;ee(F,ie=>{const U=B(ie);if(!U)return;const{x:ce,y:$e,width:Oe,height:Ne}=Pr({anchorX:X,anchorY:J,point:U,aspectRatio:T?x:null});j({x:ce,y:$e}),S({width:Oe,height:Ne})})},Re=()=>{z(I=>{const F=!I;return v(F&&E?R/E:null),F})},Fe=I=>{ee(I,F=>{const L=B(F);if(!L)return;const X=(L.x-M.x)/M.width*100,J=(L.y-M.y)/M.height*100;V({x:Math.round(Math.min(100,Math.max(0,X))),y:Math.round(Math.min(100,Math.max(0,J)))})})},Le=Math.round(N.x/100*R),tt=Math.round(N.y/100*E),Pe=(I,F)=>{const L=I==="x"?R:E;if(!L)return;const X=Math.min(100,Math.max(0,F/L*100));V(J=>({...J,[I]:Math.round(X)}))},oe=D.width&&D.height?{left:M.x/D.width*100,top:M.y/D.height*100,width:M.width/D.width*100,height:M.height/D.height*100}:null,Se=oe!==null,De=async I=>{if(!Se)return;let F;try{F=await k(e.name,e.mime??"image/png",e.updatedAt)}catch{d({type:"danger",message:i({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const L={x:Math.round(N.x),y:Math.round(N.y)};I==="apply"?r(F,L):o(F,L)};return t.jsx(jn,{children:t.jsx(wn,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(Nr,{ref:g,tabIndex:-1,children:[t.jsxs(Br,{alignItems:"center",children:[t.jsx(ws,{"aria-hidden":!0}),t.jsx($,{variant:"omega",fontWeight:"bold",children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(_r,{children:[t.jsxs(zr,{ref:m,$aspect:D.width&&D.height?D.width/D.height:void 0,children:[t.jsx("img",{ref:y,src:se,alt:e.name,crossOrigin:"anonymous",onLoad:P,draggable:!1}),oe?t.jsxs(Ur,{style:{left:`${oe.left}%`,top:`${oe.top}%`,width:`${oe.width}%`,height:`${oe.height}%`},onPointerDown:xe,children:[t.jsx(ze,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:re("tl")}),t.jsx(ze,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:re("tr")}),t.jsx(ze,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:re("bl")}),t.jsx(ze,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:re("br")}),t.jsx(Kr,{type:"button","aria-label":i({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${N.x}%`,top:`${N.y}%`},onPointerDown:Fe})]}):null]}),t.jsxs(Vr,{children:[t.jsxs(C,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx($,{variant:"omega",fontWeight:"bold",textColor:f,children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx($,{variant:"pi",textColor:p,children:i({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(C,{gap:6,alignItems:"center",children:[t.jsxs(C,{alignItems:"center",gap:2,children:[t.jsxs(C,{direction:"column",gap:2,children:[t.jsxs(Ue,{name:"crop-width",gap:2,children:[t.jsx(Ut,{textColor:f,children:t.jsx(vn,{})}),t.jsx(Ke,{"aria-label":i({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:R,min:1,max:D.width||void 0,onValueChange:I=>{I!==void 0&&S({width:I})}})]}),t.jsxs(Ue,{name:"crop-height",gap:2,children:[t.jsx(Ut,{textColor:f,children:t.jsx(Mn,{})}),t.jsx(Ke,{"aria-label":i({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:E,min:1,max:D.height||void 0,onValueChange:I=>{I!==void 0&&S({height:I})}})]})]}),t.jsxs(C,{position:"relative",children:[t.jsx(Z,{label:i({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:T?"secondary":"ghost",onClick:Re,children:t.jsx(Mt,{})}),t.jsx(qr,{})]})]}),t.jsxs(C,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(Ue,{name:"focal-x",gap:2,children:[t.jsx(G.Label,{textColor:f,children:i({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(Ke,{"aria-label":i({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:Le,onValueChange:I=>{I!==void 0&&Pe("x",I)}})]}),t.jsxs(Ue,{name:"focal-y",gap:2,children:[t.jsx(G.Label,{textColor:f,children:i({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(Ke,{"aria-label":i({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:tt,onValueChange:I=>{I!==void 0&&Pe("y",I)}})]})]})]})]})]}),t.jsxs(Hr,{alignItems:"center",children:[t.jsx(K,{variant:"tertiary",onClick:n,disabled:s,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(C,{gap:2,children:[a&&t.jsx(K,{variant:"secondary",onClick:()=>De("copy"),loading:s,disabled:!Se,children:i({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(K,{variant:"default",onClick:()=>De("apply"),loading:s,disabled:!Se,children:i({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},ke=w(O)`
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
`,Ve=w(C)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,Yr=w.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Qr=w(C)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,Zr=w.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Xr=w.audio`
  width: 100%;
`,Jr=w.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,ea=w(C)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,ta=w(C)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,He=()=>{const{formatMessage:e}=A();return t.jsx(ta,{justifyContent:"center",alignItems:"center",children:t.jsx(be,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},sa=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:r}=A(),{alternativeText:o,ext:a,mime:i,url:d,updatedAt:u,isUrlSigned:h,isLocal:f}=e,p=u&&!h?new Date(u).getTime():void 0,y=S=>!S||p===void 0?S:S.includes("?")?`${S}&v=${p}`:`${S}?v=${p}`,m=y(he(d)),[g,b]=c.useState(!1);c.useEffect(()=>{b(!1)},[m]);const M=c.useRef(null);if(c.useEffect(()=>{const S=M.current;if(!S)return;const j=()=>{const k=S.parentElement;if(!k)return;const R=k.getBoundingClientRect(),E=S.offsetWidth,T=S.offsetHeight;!E||!T||!R.width||R.height};j();const v=new ResizeObserver(j);return v.observe(S),S.parentElement&&v.observe(S.parentElement),()=>v.disconnect()},[g]),i?.includes(le.Image)){const S=y(he(d));if(S)return t.jsxs(ke,{children:[(!g||n)&&t.jsx(He,{}),s?t.jsx(Qr,{children:s}):null,t.jsx(Ve,{children:t.jsx(Yr,{ref:M,src:S,alt:o||e.name||"",crossOrigin:!f&&h?"anonymous":void 0,onLoad:()=>b(!0),onError:()=>b(!0)})})]})}if(i?.includes(le.Video)&&m)return t.jsxs(ke,{children:[!g&&t.jsx(He,{}),t.jsx(Ve,{children:t.jsx(Zr,{src:m,controls:!0,title:e.name,onLoadedData:()=>b(!0),onError:()=>b(!0),children:r({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(le.Audio)&&m)return t.jsxs(ke,{children:[!g&&t.jsx(He,{}),t.jsx(Ve,{children:t.jsx(C,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Xr,{src:m,controls:!0,onLoadedData:()=>b(!0),onError:()=>b(!0)})})})]});if((a?.toLowerCase()==="pdf"||a?.toLowerCase()===".pdf"||i==="application/pdf")&&m)return t.jsxs(ke,{children:[!g&&t.jsx(He,{}),t.jsx(Ve,{children:t.jsx(Jr,{src:`${m}#toolbar=0`,title:e.name,onLoad:()=>b(!0)})})]});const x=Ee(i,a);return t.jsx(ke,{children:t.jsxs(ea,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(x,{width:24,height:24}),t.jsx($,{variant:"pi",children:r({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},at="assetId",Os=c.createContext(null),Ns=()=>{const e=c.useContext(Os);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},Bs=c.createContext(null),_s=()=>{const e=c.useContext(Bs);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},zs=()=>{const[{query:e},s]=Me(),n=e?.[at],r=n?parseInt(n,10):null,o=r!==null&&!Number.isNaN(r),[a,i]=c.useState(o),d=c.useRef(null);c.useEffect(()=>{o&&(d.current=r,i(!0))},[o,r]);const u=c.useCallback(p=>{p.target===p.currentTarget&&!o&&i(!1)},[o]),h=c.useCallback(p=>{s({[at]:String(p)},"push",!0)},[s]),f=c.useCallback(()=>{s({[at]:void 0},"remove",!0)},[s]);return{assetId:o?r:d.current,isVisible:o,shouldRenderDrawer:a,onCloseAnimationEnd:u,openDetails:h,closeDetails:f}},na=w(C)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,ue=({label:e,value:s})=>t.jsxs(na,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx($,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx($,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),ra=w(O)`
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
`,aa=w(O)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,oa=w(C)`
  position: absolute;
  inset: 0;
  z-index: 20;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,ia=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,la=w(Dt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,ot=({name:e,label:s,required:n,disabled:r})=>{const{formatMessage:o}=A(),a=Ms(e),i=Ct("DetailField",p=>p.isSubmitting),d=a.value??"",[u,h]=c.useState(d);c.useEffect(()=>{h(d)},[d]);const f=o({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(G.Root,{name:e,required:n,children:[t.jsx(G.Label,{children:s}),t.jsx(Cs,{value:u,onChange:p=>{h(p.target.value),a.onChange(e,p.target.value)},endAction:u?void 0:t.jsx(St,{label:f,children:t.jsx(la,{"aria-label":f,role:"img"})}),type:"text",disabled:i||r})]})},da=({label:e,rootLabel:s,folders:n,disabled:r})=>{const o=Ms("folder"),a=Ct("LocationField",i=>i.isSubmitting);return t.jsxs(G.Root,{name:"folder",required:!0,children:[t.jsx(G.Label,{children:e}),t.jsxs(Ss,{value:o.value==null?"":String(o.value),onChange:i=>{const d=i===""?null:Number(i);o.onChange("folder",d)},disabled:a||r,children:[t.jsx(Ge,{value:"",children:s}),n.map(i=>t.jsx(Ge,{value:String(i.id),children:i.name},i.id))]})]})},ca=()=>{const{formatMessage:e}=A(),{deleteAsset:s,isDeleting:n}=_s(),[r,o]=c.useState(!1),a=async()=>{await s(),o(!1)},i=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(_.Root,{open:r,onOpenChange:o,children:[t.jsx(_.Trigger,{children:t.jsx(Z,{withTooltip:!1,label:i,variant:"danger-light",children:t.jsx(Ds,{})})}),t.jsxs(_.Content,{children:[t.jsx(_.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(_.Body,{icon:t.jsx(Dt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(_.Footer,{children:[t.jsx(_.Cancel,{children:t.jsx(K,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(_.Action,{children:t.jsx(K,{variant:"danger-light",loading:n,onClick:a,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},ua=({asset:e})=>{const{formatMessage:s}=A(),{copy:n}=An(),r=Ns(),o=async()=>{const a=he(e.url);if(!a)return;const i=await n(a);r({type:i?"success":"danger",message:s(i?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(Z,{withTooltip:!1,label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:o,children:t.jsx(Mt,{})})},ga=({asset:e})=>{const{formatMessage:s}=A(),n=Ns(),[r,o]=c.useState(!1),a=async()=>{const i=he(e.url);if(i){o(!0);try{await Rr(i,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{o(!1)}}};return t.jsx(Z,{withTooltip:!1,label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:a,disabled:r,children:t.jsx(En,{})})},ha=()=>{const{formatMessage:e}=A(),{replaceAsset:s,isReplacing:n}=_s(),r=c.useRef(null),[o,a]=c.useState(!1),{data:i}=Fs(),d=i?.data?.aiMetadata??!1,u=()=>{a(!0)},h=()=>{a(!1),r.current?.click()},f=async p=>{const y=p.target.files?.[0];p.target.value="",y&&await s(y)};return t.jsxs(t.Fragment,{children:[t.jsx(Ce,{children:t.jsx("input",{ref:r,type:"file",multiple:!1,onChange:f,"aria-hidden":!0,tabIndex:-1})}),t.jsx(Z,{withTooltip:!1,label:e({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:n,children:t.jsx(Tn,{})}),t.jsx(_.Root,{open:o,onOpenChange:a,children:t.jsxs(_.Content,{children:[t.jsx(_.Header,{children:e({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(_.Body,{textAlign:"center",children:t.jsxs(C,{direction:"column",textAlign:"center",children:[t.jsx($,{variant:"omega",children:e({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx($,{variant:"omega",children:e({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(_.Footer,{children:[t.jsx(_.Cancel,{children:t.jsx(K,{variant:"tertiary",fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(_.Action,{children:t.jsx(K,{variant:"secondary",onClick:h,fullWidth:!0,children:e({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},pa=({onCrop:e})=>{const{formatMessage:s}=A(),n=Ct("AssetImageActions",r=>r.isSubmitting);return t.jsxs(C,{direction:"column",gap:2,children:[t.jsx(Z,{withTooltip:!1,label:s({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:n||!e,children:t.jsx(ws,{})}),t.jsx(ha,{})]})},fa=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:r}=A(),{canCreate:o,canUpdate:a,canDownload:i,canCopyLink:d}=ae(),{data:u=[]}=Sr(),{toggleNotification:h}=ve(),[f]=Ir(),[p,{isLoading:y}]=Ar(),[m,{isLoading:g}]=Er(),[b,{isLoading:M}]=$n(),[D,x]=c.useState(!1),[S,j]=c.useState(null);c.useEffect(()=>{if(!S)return;const P=window.setTimeout(()=>j(null),5e3);return()=>window.clearTimeout(P)},[S]);const v=c.useCallback(P=>j(P),[]),k=e.mime?.includes(le.Image),R={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},E=async P=>{const B={name:P.name,caption:P.caption,alternativeText:P.alternativeText,folder:P.folder};if("error"in await f({id:e.id,fileInfo:B})){v({type:"danger",message:n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}v({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:T}=Ps(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),z=async P=>{const B=await p({id:e.id,file:P});if("error"in B){const H=B.error,ee=H?.data?.error?.message??H?.data?.message??n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."});v({type:"danger",message:ee});return}v({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},N=async()=>{const P=await m(e.id);if("error"in P){const B=P.error,H=B?.data?.error?.message??B?.data?.message??n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."});v({type:"danger",message:H});return}h({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:T})}),s()},V=()=>{v({type:"danger",message:n({id:l("asset-details.crop.error"),defaultMessage:"Failed to crop the file."})})},Y=async(P,B)=>{if(x(!1),"error"in await p({id:e.id,file:P,fileInfo:{focalPoint:B}})){V();return}v({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File cropped."})})},Q=async(P,B)=>{if(x(!1),"error"in await b({file:P,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:R.folder,focalPoint:B}})){V();return}v({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},se=c.useMemo(()=>({replaceAsset:z,deleteAsset:N,isReplacing:y,isDeleting:g}),[y,g]);return t.jsx(Os.Provider,{value:v,children:t.jsx(Bs.Provider,{value:se,children:t.jsx(ra,{children:t.jsx(kn,{method:"POST",initialValues:R,onSubmit:E,children:({modified:P,isSubmitting:B,values:H,resetForm:ee})=>{const xe=(H.name??"").trim()==="",re=ia({isDeleting:g,isReplacing:y,isCropCopying:M});return t.jsxs(t.Fragment,{children:[t.jsx(In,{onProceed:ee}),D&&k?t.jsx(Gr,{asset:e,onClose:()=>x(!1),onApply:Y,onSaveAsCopy:Q,canSaveAsCopy:o}):null,re?t.jsx(oa,{children:t.jsx(be,{children:n(re)})}):null,S?t.jsx(aa,{children:t.jsx(vs,{variant:S.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>j(null),children:S.message})}):null,t.jsxs(ge.ScrollableContent,{children:[t.jsx(sa,{asset:e,actions:k&&a?t.jsx(pa,{onCrop:()=>x(!0)}):null}),t.jsxs(C,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx($,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(C,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(ue,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(ue,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(ue,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?hr({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(ue,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?mt(e.size,1):null}),k&&(e.width!=null||e.height!=null)&&t.jsx(ue,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(ue,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:js(e.ext)}),t.jsx(ue,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(ot,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!a}),t.jsx(da,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:u,disabled:!a}),k&&t.jsxs(t.Fragment,{children:[t.jsx(ot,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!a}),t.jsx(ot,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!a})]})]})]}),(a||d||i)&&t.jsxs(C,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(C,{gap:2,children:[a&&t.jsx(ca,{}),d&&t.jsx(ua,{asset:e}),i&&t.jsx(ga,{asset:e})]}),a&&t.jsx(K,{type:"submit",variant:"default",loading:B,disabled:!P||B||xe,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},ma=({asset:e,closeDetails:s})=>{const n=e?Ee(e.mime,e.ext):Sn;return t.jsxs(C,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(n,{width:20,height:20}),t.jsx(ge.Title,{asChild:!0,children:t.jsx($,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(O,{marginLeft:"auto",children:t.jsx(ge.CloseButton,{onClose:s,children:t.jsx(Dn,{})})})]})},xa=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=A(),{data:r,isLoading:o,error:a}=kr(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return o?t.jsx(C,{justifyContent:"center",padding:8,children:t.jsx(be,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):a||!r?t.jsx(C,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(vs,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(ma,{asset:r,closeDetails:s}),t.jsx(fa,{asset:r,closeDetails:s})]})},ba=()=>{const{formatMessage:e}=A(),{assetId:s,isVisible:n,shouldRenderDrawer:r,onCloseAnimationEnd:o,closeDetails:a}=zs();return!r||s===null?null:t.jsxs(ge.Root,{isVisible:n,onClose:a,children:[t.jsx("div",{children:t.jsxs(Ce,{children:[t.jsx(ge.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(ge.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(ge.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:o,children:t.jsx(xa,{assetId:s,closeDetails:a})})]})},ye=e=>`asset:${e}`,je=e=>`folder:${e}`,Kt=(e,s)=>{const n=new Set;return e.forEach(r=>{const[o,a]=r.split(":");o===s&&n.add(Number(a))}),n},Us=()=>({selectedKeys:new Set,anchorKey:null}),ya=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},ja=(e,s,n)=>{const r=s.indexOf(n);if(r===-1)return e;const o=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(o===-1)return{selectedKeys:new Set([n]),anchorKey:n};const a=Math.min(o,r),i=Math.max(o,r);return{selectedKeys:new Set(s.slice(a,i+1)),anchorKey:e.anchorKey}},wa=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),va=()=>Us(),Ma=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((o,a)=>e.has(a)?o+1:o,0),r=n===s.length;return{allSelected:r,isIndeterminate:n>0&&!r}},Tt=c.createContext(null),Ca=({children:e,disabled:s=!1})=>{const[n,r]=c.useState(Us),o=c.useCallback(y=>!s&&n.selectedKeys.has(y),[s,n.selectedKeys]),a=c.useCallback(y=>{s||r(m=>ya(m,y))},[s]),i=c.useCallback((y,m)=>{s||r(g=>ja(g,y,m))},[s]),d=c.useCallback(y=>{s||r(wa(y))},[s]),u=c.useCallback(()=>r(va()),[]),h=c.useMemo(()=>Kt(n.selectedKeys,"asset"),[n.selectedKeys]),f=c.useMemo(()=>Kt(n.selectedKeys,"folder"),[n.selectedKeys]),p=c.useMemo(()=>({selectedKeys:n.selectedKeys,selectedIds:h,selectedFolderIds:f,anchorKey:n.anchorKey,isSelected:o,toggle:a,selectRange:i,selectAll:d,clear:u}),[n.selectedKeys,h,f,n.anchorKey,o,a,i,d,u]);return c.createElement(Tt.Provider,{value:p},e)},de=()=>{const e=c.useContext(Tt);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},Sa=()=>c.useContext(Tt),Da=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},Te=()=>{const[{query:e},s]=Me(),n=Da(e?.folder),r=c.useCallback(d=>{s({folder:String(d.id),_q:void 0})},[s]),o=c.useCallback(()=>{s({folder:"",_q:""},"remove")},[s]),a=c.useCallback(()=>{s({folder:""},"remove")},[s]);c.useEffect(()=>{e?.folder&&n===null&&a()},[e?.folder,n,a]);const i=c.useCallback(d=>{d==null?o():s({folder:String(d),_q:void 0})},[o,s]);return{currentFolderId:n,navigateToFolder:r,navigateToRoot:o,navigateToFolderId:i}},$a=e=>{const s=[],n=[];for(const r of e)r.kind==="file"?s.push(r.id):n.push(r.id);return{fileIds:s,folderIds:n}},Ks=(e,s)=>{for(const n of e){if(n.id===s)return n;const r=Ks(n.children,s);if(r)return r}return null},ka=e=>{const s=new Set,n=r=>{for(const o of r.children)o.id!=null&&s.add(o.id),n(o)};return n(e),s},Ia=(e,s,n)=>{if(s===n)return!0;const r=Ks(e,s);return r?ka(r).has(n):!1},Aa=e=>e.kind==="file"?e.folderId==null:e.parentId==null,we=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(o=>!Aa(o));const r=new Set(e.filter(o=>o.kind==="folder").map(o=>o.id));if(r.has(s))return!1;for(const o of r)if(Ia(n,o,s))return!1;for(const o of e)if(o.kind==="file"&&o.folderId===s||o.kind==="folder"&&o.parentId===s)return!1;return!0},Ea=({formatMessage:e,count:s,source:n,destination:r})=>e({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:r}),Ta=e=>typeof e=="string"&&e.length>0,Vs=(e,s)=>{if(!e||typeof e!="object")return s;const n=e,r=[n.data?.error?.message,n.data?.message,n.message];for(const o of r)if(Ta(o))return o;return s},Vt=(e,s,n)=>{if(s===null)return n;const r=o=>{for(const a of o){if(a.id===s)return a;const i=r(a.children??[]);if(i)return i}return null};return r(e)?.name??n},Ht=(e,s)=>e.kind==="file"?{...e,folderId:s}:{...e,parentId:s},Wt=(e,s,n)=>{if(!s||s.size===0)return{items:[Ht(e,n)],fromSelection:!1};const r=e.kind==="file"?ye(e.id):je(e.id);if(!s.has(r))return{items:[Ht(e,n)],fromSelection:!1};const o=[];return s.forEach(a=>{const i=a.indexOf(":"),d=a.slice(0,i),u=Number(a.slice(i+1));if(d==="asset"){o.push({kind:"file",id:u,name:e.kind==="file"&&e.id===u?e.name:"",folderId:n});return}o.push({kind:"folder",id:u,name:e.kind==="folder"&&e.id===u?e.name:"",parentId:n})}),{items:o,fromSelection:!0}},Rt=(e,s=new Set,n="")=>e.flatMap(r=>{if(r.id==null||s.has(r.id))return[];const o=n?`${n} / ${r.name??""}`:r.name??"";return[{id:r.id,label:o},...Rt(r.children??[],s,o)]}),Ra=(e,s)=>{const n=new Set;if(e.length===0)return n;we({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:r}of Rt(s))we({items:e,targetFolderId:r,folderStructure:s})&&n.add(r);return n},Fa=e=>`file:${e}`,La=e=>`folder:${e}`,Pa=e=>`folder-target:${e}`,Oa=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Na=e=>`folder-tree-target:${e}`,Hs="folder-tree-target:home",Ba=e=>{if(typeof e!="string")return null;if(e===Hs)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},it=20,lt=24,qt=24,Ws=w(C)`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,_a=w(Ws)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,Gt=w(C)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,dt=w(C)`
  flex-shrink: 0;
  width: ${qt}px;
  height: ${qt}px;
  align-items: center;
  justify-content: center;
`,za=w(C)`
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
`,Ua=({items:e})=>{const{formatMessage:s}=A();if(e.length===0)return null;if(e.length===1){const a=e[0],i=a.kind==="folder",d=i?pe:qe,u=i?it:lt;return t.jsxs(Ws,{children:[t.jsx(dt,{children:t.jsx(d,{width:u,height:u})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:a.name})]})}const n=e.filter(a=>a.kind==="folder").length,r=e.filter(a=>a.kind==="file").length,o=n+r;return t.jsxs(_a,{gap:3,children:[n>0?t.jsxs(Gt,{children:[t.jsx(dt,{children:t.jsx(pe,{width:it,height:it})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,r>0?t.jsxs(Gt,{children:[t.jsx(dt,{children:t.jsx(qe,{width:lt,height:lt})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:r})})]}):null,t.jsx(za,{children:t.jsx($,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:o})})]})},qs=c.createContext(null),ne=()=>c.useContext(qs),Yt=e=>{const s=Oa(e);if(s!=null)return{destinationFolderId:s};const n=Ba(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},Ka=Number.MAX_SAFE_INTEGER,Va=({children:e})=>{const{formatMessage:s}=A(),{toggleNotification:n}=ve(),r=Sa(),{currentFolderId:o}=Te(),{data:a=[]}=Et(),i=s({id:l("plugin.name"),defaultMessage:"Media Library"}),[d,{isLoading:u}]=Rs(),[h,f]=c.useState([]),[p,y]=c.useState(""),m=c.useRef({items:[],fromSelection:!1}),g=c.useCallback(T=>{y(""),requestAnimationFrame(()=>y(T))},[]),{canUpdate:b}=ae(),M=pr(fr(yr,{activationConstraint:{distance:b?8:Ka}})),D=c.useMemo(()=>Ra(h,a),[h,a]),x=c.useCallback(T=>D.has(T),[D]),S=c.useMemo(()=>({isInternalDragActive:h.length>0,isMovePending:u,isValidDropTarget:x}),[h.length,u,x]),j=c.useCallback(()=>{m.current={items:[],fromSelection:!1},f([])},[]),v=c.useCallback(T=>{const z=T.active.data.current;if(!z){j();return}const{items:N,fromSelection:V}=Wt(z,r?.selectedKeys,o);m.current={items:N,fromSelection:V},f(N)},[j,o,r?.selectedKeys]),k=c.useCallback(async T=>{const{over:z}=T,{items:N,fromSelection:V}=m.current;if(j(),u||!z||N.length===0)return;const Y=Yt(z.id);if(!Y)return;const{destinationFolderId:Q}=Y;if(!we({items:N,targetFolderId:Q,folderStructure:a}))return;const se=$a(N),P=Ea({formatMessage:s,count:N.length,source:Vt(a,o,i),destination:Vt(a,Q,i)}),B=s({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await d({...se,destinationFolderId:Q}).unwrap(),V&&r?.clear(),g(P),n({type:"success",message:P})}catch(H){const ee=Vs(H,B);g(s({id:l("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:ee})),n({type:"danger",message:ee})}},[g,d,j,o,a,s,u,i,r,n]),R=c.useCallback(()=>{j()},[j]),E=c.useMemo(()=>({onDragStart:({active:T})=>{const z=T.data.current;return z?s({id:l("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:z.name}):""},onDragOver:()=>"",onDragEnd:({active:T,over:z})=>{if(!z)return s({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const N=Yt(z.id),V=T.data.current;if(!N||!V)return"";const{items:Y}=Wt(V,r?.selectedKeys,o);return we({items:Y,targetFolderId:N.destinationFolderId,folderStructure:a})?"":s({id:l("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>s({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[o,a,s,r?.selectedKeys]);return t.jsx(qs.Provider,{value:S,children:t.jsxs(mr,{sensors:M,collisionDetection:xr,onDragStart:v,onDragEnd:k,onDragCancel:R,accessibility:{announcements:E},children:[t.jsx(Ce,{"aria-live":"polite","aria-atomic":"true",children:p}),t.jsx(O,{position:"relative",children:e}),t.jsx(br,{dropAnimation:null,children:h.length>0?t.jsx(Ua,{items:h}):null})]})})},Ha=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,Gs=e=>{const{isMovePending:s}=ne()??{isMovePending:!1},n=c.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:Ha(e.folder)}),[e.folder,e.id,e.name]);return Es({id:Fa(e.id),data:n,disabled:s})},Ys=e=>{const{isMovePending:s,isValidDropTarget:n}=ne()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:r}=As(),o=typeof e.parent=="object"&&e.parent!=null?e.parent.id??null:e.parent??null,a=c.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:o}),[e.id,e.name,o]),i=c.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=Es({id:La(e.id),data:a,disabled:s}),u=Ts({id:Pa(e.id),data:i,disabled:s}),h=n(e.id),f=u.isOver,p=f&&h,y=f&&!h&&r!=null;return{dragData:a,draggable:d,droppable:u,isDragging:d.isDragging,showValidDropHighlight:p,showInvalidDropCursor:y}},Wa=w(C)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,qa=w(Fn)`
  border: 1px solid
    ${({theme:e,$isSelected:s})=>s?e.colors.primary600:e.colors.neutral200};
  border-radius: 8px;
  overflow: hidden;
  cursor: ${({$isMovePending:e})=>e?"wait":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
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
`,Ga=w(O)`
  grid-column: 1 / -1;
`,Ya=w(C)`
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

  ${({$isValidDropTarget:e,theme:s})=>e&&Xe`
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
`,Qa=w(C)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,Za=w($)`
  flex: 1;
  min-width: 0;
`,Xa=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=A(),{navigateToFolder:r}=Te(),{isMovePending:o}=ne()??{isMovePending:!1},{isSelected:a,toggle:i,selectRange:d}=de(),{canUpdate:u}=ae(),{draggable:{attributes:h,listeners:f,setNodeRef:p,isDragging:y},droppable:{setNodeRef:m},showValidDropHighlight:g,showInvalidDropCursor:b}=Ys(e),M=je(e.id),D=v=>{p(v),m(v)},x=v=>{v.shiftKey?d(s,M):v.metaKey||v.ctrlKey?i(M):r(e)},S=v=>{v.key==="Enter"?(v.preventDefault(),r(e)):v.key===" "&&(v.preventDefault(),i(M))},j=v=>{v.stopPropagation(),v.shiftKey?d(s,M):i(M)};return t.jsxs(Ya,{ref:D,...h,...f,$isDragging:y,$isMovePending:o,$isValidDropTarget:g,$isInvalidDropTarget:b,$isSelected:a(M),onClick:x,onKeyDown:S,role:"listitem",tabIndex:0,children:[u&&t.jsx(C,{onKeyDown:v=>v.stopPropagation(),children:t.jsx(me,{checked:a(M),onClick:j,"aria-label":n({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Qa,{children:t.jsx(pe,{width:20,height:20})}),t.jsx(Za,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(Z,{label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:v=>v.stopPropagation(),children:t.jsx(Ze,{})})]})},Qt=w(O)`
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
`,Ja=w.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,eo=w(C)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,to=({asset:e})=>{const{alternativeText:s,ext:n,formats:r,mime:o,url:a,isLocal:i,isUrlSigned:d}=e;if(o?.includes(le.Image)){const h=he(r?.thumbnail?.url)??he(a);if(h)return t.jsx(Qt,{children:t.jsx(Ja,{src:h,alt:s||"",crossOrigin:!i&&d?"anonymous":void 0,draggable:!1,onDragStart:f=>f.preventDefault()})})}const u=Ee(o,n);return t.jsx(Qt,{children:t.jsx(eo,{justifyContent:"center",alignItems:"center",children:t.jsx(u,{width:48,height:48})})})},so=w(Ln)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,no=w(C)`
  min-width: 0;
  width: 100%;
`,ro=w(C)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,ao=w($)`
  flex: 1;
  min-width: 0;
`,oo=w.button`
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
`,io=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:r}=A(),o=Ee(e.mime,e.ext),{isMovePending:a}=ne()??{isMovePending:!1},{attributes:i,listeners:d,setNodeRef:u,isDragging:h}=Gs(e),{isSelected:f,toggle:p,selectRange:y}=de(),{canUpdate:m}=ae(),g=ye(e.id),b=f(g),M=j=>{j.shiftKey?y(s,g):j.metaKey||j.ctrlKey?p(g):n(e.id)},D=j=>{j.key==="Enter"?(j.preventDefault(),n(e.id)):j.key===" "&&(j.preventDefault(),p(g))},x=j=>{j.stopPropagation(),n(e.id)},S=j=>{j.stopPropagation(),j.shiftKey?y(s,g):p(g)};return t.jsxs(qa,{ref:u,...i,...d,$isDragging:h,$isMovePending:a,$isSelected:b,tabIndex:0,role:"listitem",onDragStart:j=>j.preventDefault(),onClick:M,onKeyDown:D,children:[t.jsxs(so,{children:[m&&t.jsx(Wa,{onKeyDown:j=>j.stopPropagation(),children:t.jsx(me,{checked:b,onClick:S,"aria-label":r({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(to,{asset:e})]}),t.jsx(Rn,{children:t.jsxs(no,{alignItems:"center",gap:2,children:[t.jsx(ro,{children:t.jsx(o,{width:20,height:20})}),t.jsx(oo,{type:"button",onClick:x,children:t.jsx(ao,{textColor:"primary800",ellipsis:!0,children:e.name})}),t.jsx(Z,{label:r({id:l("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:j=>j.stopPropagation(),children:t.jsx(Ze,{})})]})})]})},lo=({assets:e,folders:s=[],onAssetItemClick:n})=>{const r=s.length+e.length,o=[...s.map(a=>je(a.id)),...e.map(a=>ye(a.id))];return r===0?null:t.jsxs(Be.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(Ga,{children:t.jsx(Be.Root,{gap:4,children:s.map(a=>t.jsx(Be.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(Xa,{folder:a,orderedItemKeys:o})},`folder-${a.id}`))})}),e.map(a=>t.jsx(Be.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(io,{asset:a,orderedItemKeys:o,onAssetItemClick:n})},a.id))]})},Qs=()=>{const[{query:e},s]=Me(),n=e?._q??"",r=c.useCallback(a=>{a?s({_q:It(a)},"push",!0):s({_q:""},"remove",!0)},[s]),o=c.useCallback(()=>r(""),[r]);return{searchQuery:n,isSearching:n!=="",setSearchQuery:r,clearSearch:o}},co=300,uo=()=>{const{formatMessage:e}=A(),{searchQuery:s,setSearchQuery:n}=Qs(),r=Je(),[o,a]=c.useState(s),i=Pn(o,co),d=c.useRef(s),[{query:u}]=Me(),h=u?.folder??"",f=c.useRef(h);c.useEffect(()=>{i!==d.current&&(d.current=i,n(i))},[i,n]),c.useEffect(()=>{s!==d.current&&(d.current=s,a(s))},[s]),c.useEffect(()=>{h!==f.current&&(f.current=h,d.current=s,a(s))},[h,s]);const p=t.jsx(On,{onSubmit:y=>y.preventDefault(),children:t.jsx($s,{name:"search-assets",value:o,onChange:y=>a(y.target.value),onClear:()=>a(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:l("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:l("search.label"),defaultMessage:"Search for an asset"})})});return r?t.jsx(O,{width:"100%",children:p}):p},go={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},Ie={GRID:0,TABLE:1},Zt=[{name:"name",label:{id:l("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:l("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:l("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:l("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:l("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],ho=w(_n)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;
`,po=w(zn)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,xt=w(Un)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,te=w(Kn)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Zs=w.tr`
  height: 48px;
  user-select: none;
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isInvalidDropTarget:s})=>e?"wait":s?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&Xe`
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
    ${te} {
      border-bottom: 0;
    }
  }
`,Xs=w(te)`
  width: 1%;
  white-space: nowrap;
`,fo=w(xt)`
  width: 1%;
  white-space: nowrap;
`,mo=w.button`
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
`,Ye=e=>{e.stopPropagation()},xo=({asset:e})=>{const{ext:s,mime:n}=e,r=Ee(n,s);return t.jsx(C,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(r,{width:20,height:20})})},Xt=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const r=Je(),{formatDate:o,formatMessage:a}=A(),{isMovePending:i}=ne()??{isMovePending:!1},{attributes:d,listeners:u,setNodeRef:h,isDragging:f}=Gs(e),{isSelected:p,toggle:y,selectRange:m}=de(),{canUpdate:g}=ae(),b=ye(e.id),M=p(b),D=v=>{v.shiftKey?m(s,b):v.metaKey||v.ctrlKey?y(b):n(e.id)},x=v=>{v.key==="Enter"?(v.preventDefault(),n(e.id)):v.key===" "&&(v.preventDefault(),y(b))},S=v=>{v.stopPropagation(),n(e.id)},j=v=>{v.stopPropagation(),v.shiftKey?m(s,b):y(b)};return t.jsxs(Zs,{ref:h,...d,...u,$isDragging:f,$isMovePending:i,$isSelected:M,tabIndex:0,role:"row",onDragStart:v=>v.preventDefault(),onClick:D,onKeyDown:x,children:[!r&&g&&t.jsx(Xs,{onClick:Ye,onKeyDown:Ye,children:t.jsx(C,{children:t.jsx(me,{checked:M,onClick:j,"aria-label":a({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(te,{children:t.jsxs(C,{gap:3,alignItems:"center",children:[t.jsx(xo,{asset:e}),t.jsxs(C,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(mo,{type:"button",onClick:S,children:t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})}),r&&t.jsx($,{textColor:"neutral600",variant:"pi",children:e.size?mt(e.size,1):"-"})]})]})}),!r&&t.jsxs(t.Fragment,{children:[t.jsx(te,{children:t.jsx($,{textColor:"neutral600",children:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(te,{children:t.jsx($,{textColor:"neutral600",children:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(te,{children:t.jsx($,{textColor:"neutral600",children:e.size?mt(e.size,1):"-"})})]}),t.jsx(te,{children:t.jsx(C,{justifyContent:"flex-end",children:t.jsx(Z,{label:a({id:l("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:v=>v.stopPropagation(),children:t.jsx(Ze,{})})})})]})},bo=w(Zs)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Jt=({folder:e,orderedItemKeys:s})=>{const n=Je(),{formatDate:r,formatMessage:o}=A(),{navigateToFolder:a}=Te(),{isSelected:i,toggle:d,selectRange:u}=de(),{canUpdate:h}=ae(),{isMovePending:f}=ne()??{isMovePending:!1},{draggable:{attributes:p,listeners:y,setNodeRef:m,isDragging:g},droppable:{setNodeRef:b},showValidDropHighlight:M,showInvalidDropCursor:D}=Ys(e),x=je(e.id),S=k=>{k.shiftKey?u(s,x):k.metaKey||k.ctrlKey?d(x):a(e)},j=k=>{k.key==="Enter"?(k.preventDefault(),a(e)):k.key===" "&&(k.preventDefault(),d(x))},v=k=>{k.stopPropagation(),k.shiftKey?u(s,x):d(x)};return t.jsxs(bo,{ref:k=>{m(k),b(k)},...p,...y,$isDragging:g,$isMovePending:f,$isValidDropTarget:M,$isInvalidDropTarget:D,$isSelected:i(x),tabIndex:0,role:"row",onDragStart:k=>k.preventDefault(),onClick:S,onKeyDown:j,children:[!n&&h&&t.jsx(Xs,{onClick:Ye,onKeyDown:Ye,children:t.jsx(C,{children:t.jsx(me,{checked:i(x),onClick:v,"aria-label":o({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(te,{children:t.jsxs(C,{gap:3,alignItems:"center",children:[t.jsx(C,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(pe,{width:20,height:20})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(te,{children:t.jsx($,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(te,{children:t.jsx($,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(te,{children:t.jsx($,{textColor:"neutral600",children:"-"})})]}),t.jsx(te,{children:t.jsx(C,{justifyContent:"flex-end",children:t.jsx(Z,{label:o({id:l("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:k=>k.stopPropagation(),children:t.jsx(Ze,{})})})})]})},yo=({assets:e,folders:s=[],mixedItems:n=null,onAssetItemClick:r})=>{const o=Je(),{formatMessage:a}=A(),{selectedKeys:i,selectAll:d,clear:u}=de(),{canUpdate:h}=ae(),f=o?Zt.filter(x=>x.name==="name"||x.name==="actions"):Zt,p=!o&&h,y=f.length+(p?1:0),m=s.length+e.length,g=n?n.map(x=>x.kind==="folder"?je(x.folder.id):ye(x.asset.id)):[...s.map(x=>je(x.id)),...e.map(x=>ye(x.id))],{allSelected:b,isIndeterminate:M}=Ma(i,g),D=()=>{b?u():d(g)};return m===0?null:t.jsxs(ho,{colCount:y,rowCount:(n?n.length:m)+1,children:[t.jsx(po,{children:t.jsxs(Nn,{children:[p&&t.jsx(fo,{children:t.jsx(C,{children:t.jsx(me,{checked:M?"indeterminate":b,disabled:g.length===0,onCheckedChange:D,"aria-label":a({id:l("list.table.header.select-all"),defaultMessage:"Select all"})})})}),f.map(x=>{const S=a(x.label);return"isVisuallyHidden"in x&&x.isVisuallyHidden?t.jsx(xt,{children:t.jsx(Ce,{children:a({id:l("table.header.actions"),defaultMessage:"actions"})})},x.name):t.jsx(xt,{children:t.jsx($,{textColor:"neutral600",variant:"sigma",children:S})},x.name)})]})}),t.jsxs(Bn,{children:[n?.map(x=>x.kind==="folder"?t.jsx(Jt,{folder:x.folder,orderedItemKeys:g},`folder-${x.folder.id}`):t.jsx(Xt,{asset:x.asset,orderedItemKeys:g,onAssetItemClick:r},x.asset.id)),!n&&s.map(x=>t.jsx(Jt,{folder:x,orderedItemKeys:g},`folder-${x.id}`)),!n&&e.map(x=>t.jsx(Xt,{asset:x,orderedItemKeys:g,onAssetItemClick:r},x.id))]})]})},jo=["image/png","image/jpeg","image/webp","image/heic","image/heif"],wo=e=>jo.includes(e),vo=20,es=vo*2,Mo=(e,s,n)=>{const r=[];return e.forEach(o=>{r.push({kind:"file",id:o,name:"",folderId:n})}),s.forEach(o=>{r.push({kind:"folder",id:o,name:"",parentId:n})}),r},Co=w(q.Content)`
  max-width: 51.6rem;
`,So=({open:e,onClose:s})=>{const{formatMessage:n}=A(),{toggleNotification:r}=ve(),{selectedIds:o,selectedFolderIds:a,clear:i}=de(),{currentFolderId:d}=Te(),{data:u=[]}=Et(void 0,{skip:!e}),{data:h}=At({id:d},{skip:d===null}),[f,{isLoading:p}]=Rs(),[y,m]=c.useState("");c.useEffect(()=>{e&&m("")},[e]);const g=n({id:l("plugin.name"),defaultMessage:"Media Library"}),b=c.useMemo(()=>Mo(o,a,d),[o,a,d]),M=c.useMemo(()=>Rt(u,a).filter(j=>we({items:b,targetFolderId:j.id,folderStructure:u})),[u,a,b]),D=c.useMemo(()=>we({items:b,targetFolderId:null,folderStructure:u}),[b,u]),x=o.size+a.size,S=async()=>{if(p)return;const j=y===""?null:Number(y);try{await f({fileIds:Array.from(o),folderIds:Array.from(a),destinationFolderId:j}).unwrap()}catch(R){r({type:"danger",message:Vs(R,n({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const v=d===null?g:h?.name??g,k=j===null?g:M.find(R=>R.id===j)?.label??g;r({type:"success",message:n({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:x,source:v,destination:k})}),i(),s()};return t.jsx(q.Root,{open:e,onOpenChange:j=>{!j&&!p&&s()},children:t.jsxs(Co,{children:[t.jsx(q.Header,{children:t.jsx(q.Title,{children:n({id:l("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(q.Body,{children:t.jsxs(G.Root,{name:"destination",children:[t.jsx(G.Label,{children:n({id:l("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(Ss,{value:y,onChange:j=>m(String(j)),disabled:p,children:[D&&t.jsx(Ge,{value:"",children:g}),M.map(j=>t.jsx(Ge,{value:String(j.id),children:j.label},j.id))]})]})}),t.jsx(q.Footer,{children:t.jsxs(C,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(K,{variant:"tertiary",onClick:s,disabled:p,type:"button",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(K,{onClick:S,loading:p,children:n({id:l("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},Do=w(C)`
  position: fixed;
  bottom: ${({theme:e})=>e.spaces[4]};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${({theme:e})=>e.zIndices.popover};
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[2]} ${e.spaces[3]} ${e.spaces[6]}`};
  background: ${({theme:e})=>e.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.popupShadow};
`,$o=w(C)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,ko=w(O)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Io=({assets:e=[]})=>{const{formatMessage:s}=A(),{toggleNotification:n}=ve(),{isEnabled:r}=Is(),{canUpdate:o}=ae(),{selectedIds:a,selectedFolderIds:i,clear:d}=de(),[u,{isLoading:h}]=Tr(),[f,{isLoading:p}]=Vn(),[y,m]=c.useState(!1),[g,b]=c.useState(!1),M=a.size+i.size,D=h||p,x=a.size>es,S=c.useMemo(()=>{const E=new Map(e.map(({id:T,mime:z})=>[T,z]));return[...a].filter(T=>wo(E.get(T))).length},[e,a]),j=a.size>0&&S===0;let v;x?v=s({id:l("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:es}):j&&(v=s({id:l("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const k=async()=>{if(p||x||j)return;const E=Array.from(a),T=await f({fileIds:E});if("error"in T){n({type:"danger",message:s({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const z=T.data.filter(({status:Q})=>Q==="success").length,N=T.data.filter(({status:Q})=>Q==="skipped").length,V=T.data.filter(({status:Q})=>Q==="error").length,Y=i.size;if(V===T.data.length){n({type:"danger",message:s({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}n(N===0&&V===0&&Y===0?{type:"success",message:s({id:l("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:z})}:{type:"warning",message:s({id:l("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:z,skippedCount:N,errorCount:V,folderCount:Y})}),d()},R=async E=>{if(E.preventDefault(),h)return;if("error"in await u({fileIds:Array.from(a),folderIds:Array.from(i)})){n({type:"danger",message:s({id:l("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}m(!1),n({type:"success",message:s({id:l("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:M})}),d()};return M===0||!o?null:t.jsxs(Do,{tag:"section",role:"region","aria-label":s({id:l("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx($,{fontWeight:"bold",textColor:"neutral800",marginRight:4,children:s({id:l("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:M})}),t.jsxs($o,{children:[r&&t.jsx(St,{label:v,children:t.jsx(O,{children:t.jsx(K,{size:"S",startIcon:t.jsx(Hn,{}),disabled:D||a.size===0||x||j,loading:p,onClick:k,children:s({id:l("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(Z,{variant:"tertiary",disabled:D,label:s({id:l("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>b(!0),children:t.jsx(Wn,{})}),t.jsx(So,{open:g,onClose:()=>b(!1)}),t.jsxs(_.Root,{open:y,onOpenChange:E=>{h||m(E)},children:[t.jsx(_.Trigger,{children:t.jsx(Z,{variant:"danger-light",disabled:D,label:s({id:l("list.bulk-actions.delete"),defaultMessage:"Delete"}),children:t.jsx(Ds,{})})}),t.jsxs(_.Content,{children:[t.jsx(_.Header,{children:s({id:l("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:M})}),t.jsxs(_.Body,{icon:t.jsx(Dt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:[t.jsx($,{children:s({id:l("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})}),t.jsx($,{children:s({id:l("list.bulk-actions.delete.confirm.description.cant-be-undone"),defaultMessage:"This action can’t be undone. Deleting a folder also removes everything inside it, and any linked content will break – media asset containers will appear empty."})})]}),t.jsxs(_.Footer,{children:[t.jsx(_.Cancel,{children:t.jsx(K,{variant:"tertiary",disabled:h,fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(_.Action,{children:t.jsx(K,{variant:"danger-light",loading:h,onClick:R,fullWidth:!0,children:s({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})]}),t.jsx(ko,{"aria-hidden":!0}),t.jsx(Z,{variant:"ghost",label:s({id:l("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:d,disabled:D,children:t.jsx(et,{})})]})},Ao=w(q.Content)`
  max-width: 51.6rem;
`,Eo=({open:e,folderName:s,parentFolderId:n,onClose:r})=>{const{formatMessage:o}=A(),{toggleNotification:a}=ve(),[i,d]=c.useState(""),[u,h]=c.useState(),[f,{isLoading:p}]=Mr();c.useEffect(()=>{e&&(d(""),h(void 0))},[e]);const y=async m=>{m.preventDefault();const g=i.trim();if(!g){h(o({id:l("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{await f({name:g,parent:n}).unwrap(),a({type:"success",message:o({id:l("folder.create.success"),defaultMessage:"Folder has been created"})}),r()}catch(b){const M=b;M?.message?h(M.message):a({type:"danger",message:o({id:l("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(q.Root,{open:e,onOpenChange:r,children:t.jsxs(Ao,{children:[t.jsx(q.Header,{children:t.jsx(q.Title,{children:o({id:l("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:s})})}),t.jsxs("form",{onSubmit:y,children:[t.jsx(q.Body,{children:t.jsxs(G.Root,{error:u,name:"name",required:!0,children:[t.jsx(G.Label,{children:o({id:l("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(Cs,{value:i,onChange:m=>{d(m.target.value),h(void 0)},autoFocus:!0}),t.jsx(G.Error,{})]})}),t.jsx(q.Footer,{children:t.jsxs(C,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(K,{variant:"tertiary",onClick:r,type:"button",children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(K,{type:"submit",loading:p,children:o({id:l("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Js=c.createContext(null),To=w(O)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Ro=({children:e,onDrop:s,disabled:n=!1})=>{const[r,o]=c.useState(!1),a=c.useRef(0),i={isDragging:r};c.useEffect(()=>{const p=()=>{o(!1),a.current=0},y=m=>{m.relatedTarget||(o(!1),a.current=0)};return document.addEventListener("dragend",p),document.addEventListener("dragleave",y),()=>{document.removeEventListener("dragend",p),document.removeEventListener("dragleave",y)}},[]);const d=c.useCallback(p=>{p.preventDefault(),p.stopPropagation(),!n&&p.dataTransfer.types.includes("Files")&&(a.current+=1,o(!0))},[n]),u=c.useCallback(p=>{p.preventDefault(),p.stopPropagation(),a.current-=1,a.current<=0&&(o(!1),a.current=0)},[]),h=c.useCallback(p=>{p.preventDefault(),p.stopPropagation(),p.dataTransfer.dropEffect="copy"},[]),f=c.useCallback(p=>{if(p.preventDefault(),p.stopPropagation(),o(!1),a.current=0,n)return;const{files:y}=p.dataTransfer;y?.length&&s&&s(Array.from(y))},[s,n]);return t.jsx(Js.Provider,{value:i,children:t.jsx(To,{"data-testid":"assets-dropzone",onDragEnter:d,onDragLeave:u,onDragOver:h,onDrop:f,children:e})})},en=()=>{const e=c.useContext(Js);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Fo=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Lo=w(O)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Fo(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Po=({children:e})=>{const{isDragging:s}=en(),r=ne()?.isInternalDragActive??!1,o=s&&!r;return t.jsxs(O,{position:"relative",children:[o&&t.jsx(Lo,{}),e]})},Oo=w(O)`
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
`,No=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=A(),{isDragging:r}=en(),a=ne()?.isInternalDragActive??!1,i=r&&!a,[d,u]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const h=()=>{const p=e.current?.getBoundingClientRect();p&&u(y=>y!==p.left?p.left:y)};h();const f=new ResizeObserver(h);return f.observe(e.current),()=>f.disconnect()},[e]),i?t.jsxs(Oo,{$leftContentWidth:d,children:[t.jsx($,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(C,{gap:2,alignItems:"center",children:[t.jsx(pe,{width:20,height:20,fill:"neutral0"}),t.jsx($,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},Bo=({onAddAssets:e,canAddAssets:s,searchQuery:n,onClearSearch:r})=>{const{formatMessage:o}=A(),a=!!n;return t.jsxs(C,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(ks,{width:"16rem",height:"8.8rem"}),t.jsxs(C,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx($,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:o(a?{id:l("list.search.empty.title"),defaultMessage:"No results found"}:{id:l("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx($,{textColor:"neutral600",children:a?o({id:l("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:n}):o({id:l("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),a?t.jsx(K,{variant:"secondary",startIcon:t.jsx(et,{"aria-hidden":!0}),onClick:r,children:o({id:l("list.search.empty.clear"),defaultMessage:"Clear search"})}):s&&t.jsx(K,{onClick:e,children:o({id:l("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},_o=({onClearFilters:e})=>{const{formatMessage:s}=A();return t.jsxs(C,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(ks,{width:"16rem",height:"8.8rem"}),t.jsx($,{textColor:"neutral600",children:s({id:l("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(K,{variant:"secondary",startIcon:t.jsx(et,{"aria-hidden":!0}),onClick:e,children:s({id:l("list.filters.clear"),defaultMessage:"Clear filters"})})]})},Ft=["folder","picture","audio","video","document"],Lt=["1day","3days","1week","1month","3months","6months","1year"],zo={created:"createdAt",updated:"updatedAt"},Uo={createdAt:"created",updatedAt:"updated"},ts={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},Ko={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},ss={rangeis:"is",rangenot:"isNot"},Vo={is:"rangeis",isNot:"rangenot"},ns=/^\d{4}-\d{2}-\d{2}$/,Ho=e=>Ft.includes(e),Wo=e=>Lt.includes(e),qo=e=>{const[s,n,r]=e.split(":");if(!s||!n||!r)return null;if(s==="type"){if(n!=="is"&&n!=="not")return null;const a=r.split(",").filter(Ho);return a.length>0?{kind:"type",condition:n==="is"?"is":"isNot",values:a}:null}const o=zo[s];if(!o)return null;if(n in ts)return Wo(r)?{kind:"date",field:o,mode:"preset",condition:ts[n],preset:r}:null;if(n in ss){const[a,i]=r.split("..");return ns.test(a??"")&&ns.test(i??"")?{kind:"date",field:o,mode:"range",condition:ss[n],from:a,to:i}:null}return null},Go=e=>typeof e!="string"||e===""?[]:e.split(";").map(qo).filter(s=>s!==null),Yo=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const s=Uo[e.field];return e.mode==="preset"?`${s}:${Ko[e.condition]}:${e.preset}`:`${s}:${Vo[e.condition]}:${e.from}..${e.to}`},rs=e=>e.map(Yo).join(";"),Qo=()=>{const[{query:e},s]=Me(),n=Go(e?.filters),r=o=>{o.length===0?s({filters:""},"remove",!0):s({filters:rs(o)},"push",!0)};return{filters:n,serialized:rs(n),addFilter:o=>r([...n,o]),updateFilter:(o,a)=>r(n.map((i,d)=>d===o?a:i)),removeFilter:o=>r(n.filter((a,i)=>i!==o)),clearFilters:()=>r([])}},bt={picture:"image",audio:"audio",video:"video"},as=Object.values(bt),Zo={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},Xo=(e,s)=>{const{days:n=0,months:r=0,years:o=0}=Zo[s],a=new Date(e.getTime());if(o||r){const i=a.getDate();a.setDate(1),a.setFullYear(a.getFullYear()-o),a.setMonth(a.getMonth()-r);const d=new Date(a.getFullYear(),a.getMonth()+1,0).getDate();a.setDate(Math.min(i,d))}return a.setDate(a.getDate()-n),a},os=e=>{const s=new Date(e.getTime());return s.setHours(0,0,0,0),s},is=e=>{const s=new Date(e.getTime());return s.setHours(23,59,59,999),s},Qe=e=>{const[s,n,r]=e.split("-").map(Number);return new Date(s,n-1,r)},Jo=(e,s)=>{const{field:n}=e;if(e.mode==="preset"){const a=Xo(s,e.preset);switch(e.condition){case"withinLast":return{[n]:{$gte:a.toISOString()}};case"notWithinLast":return{[n]:{$lt:a.toISOString()}};case"isExactly":return{[n]:{$gte:os(a).toISOString(),$lte:is(a).toISOString()}}}}const r=os(Qe(e.from)).toISOString(),o=is(Qe(e.to)).toISOString();return e.condition==="is"?{[n]:{$gte:r,$lte:o}}:{$or:[{[n]:{$lt:r}},{[n]:{$gt:o}}]}},ei=e=>{const s=e.values.filter(o=>o!=="folder");if(s.length===0)return null;const n=s.map(o=>o==="document"?{$and:as.map(a=>({mime:{$notContains:a}}))}:{mime:{$contains:bt[o]}});if(e.condition==="is")return n.length===1?n[0]:{$or:n};const r=s.map(o=>o==="document"?{$or:as.map(a=>({mime:{$contains:a}}))}:{mime:{$notContains:bt[o]}});return r.length===1?r[0]:{$and:r}},ti=(e,s)=>{const n=[],r=[];let o=!0,a=!0;for(const i of e){if(i.kind==="date"){const h=Jo(i,s);n.push(h),r.push(h);continue}const d=i.values.includes("folder");(i.condition==="is"?!d:d)&&(o=!1);const u=ei(i);u?n.push(u):i.condition==="is"&&(a=!1)}return{fileClauses:n,folderClauses:r,showFolders:o,showFiles:a}},si=w.button`
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
`,ls=e=>{const s=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`},ni=e=>{const[s,n,r]=e.split("-").map(Number);return new Date(s,n-1,r)},ri=(e,s)=>{const n=new Date(e,s,1),r=new Date(n.getTime());r.setDate(n.getDate()-(n.getDay()+6)%7);const o=[],a=new Date(r.getTime());do{const i=[];for(let d=0;d<7;d+=1)i.push(new Date(a.getTime())),a.setDate(a.getDate()+1);o.push(i)}while(a.getMonth()===s&&a.getFullYear()===e);return o},tn=({from:e,to:s,onSelect:n})=>{const{formatMessage:r,formatDate:o}=A(),a=e?ni(e):new Date,[i,d]=c.useState(a.getFullYear()),[u,h]=c.useState(a.getMonth()),[f,p]=c.useState(null),y=f??e??null,m=f?null:s??null,g=x=>{const S=new Date(i,u+x,1);d(S.getFullYear()),h(S.getMonth())},b=x=>{const S=ls(x);if(!f){p(S);return}const[j,v]=S<f?[S,f]:[f,S];p(null),n(j,v)},M=ri(i,u),D=M[0].map(x=>o(x,{weekday:"short"}).slice(0,2));return t.jsxs(O,{padding:2,width:"100%",role:"group","aria-label":r({id:l("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs(C,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(Z,{variant:"ghost",label:r({id:l("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>g(-1),children:t.jsx(qn,{})}),t.jsx($,{fontWeight:"semiBold",textColor:"neutral800",children:o(new Date(i,u,1),{month:"long",year:"numeric"})}),t.jsx(Z,{variant:"ghost",label:r({id:l("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>g(1),children:t.jsx(Gn,{})})]}),t.jsx(C,{children:D.map((x,S)=>t.jsx(C,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx($,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:x})},S))}),M.map((x,S)=>t.jsx(C,{children:x.map(j=>{const v=ls(j),k=v===y||v===m,R=y!==null&&m!==null&&v>y&&v<m;return t.jsxs(si,{type:"button",$isEdge:k,$inRange:R,$isMuted:j.getMonth()!==u,onClick:()=>b(j),children:[t.jsx(Ce,{children:o(j,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:j.getDate()})]},v)})},S))]})},yt={folder:{id:l("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:l("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:l("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:l("list.filters.type.video"),defaultMessage:"Video"},document:{id:l("list.filters.type.document"),defaultMessage:"Document"}},jt={"1day":{id:l("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:l("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:l("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:l("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:l("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:l("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:l("list.filters.preset.1year"),defaultMessage:"1 year ago"}},sn={createdAt:{id:l("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:l("list.filters.field.updated"),defaultMessage:"Last modified"}},ct=w(W.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,Ae="24.2rem",ut=w(W.SubContent)`
  margin-top: calc(-1 * (${({theme:e})=>e.spaces[1]} + 1px));
`,ai=w(Qn)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,oi=({listFilters:e})=>{const{formatMessage:s}=A(),[n,r]=c.useState(!1),{filters:o,addFilter:a,updateFilter:i,removeFilter:d}=e;let u=-1;for(let g=o.length-1;g>=0;g-=1)if(o[g].kind==="type"){u=g;break}const h=u>=0?o[u]:null,f=h&&h.kind==="type"?h.values:[],p=g=>{const b=f.includes(g)?f.filter(M=>M!==g):[...f,g];h&&h.kind==="type"?b.length===0?d(u):i(u,{...h,values:b}):b.length>0&&a({kind:"type",condition:"is",values:b})},y=(g,b)=>{a({kind:"date",field:g,mode:"preset",condition:"withinLast",preset:b})},m=(g,b)=>{a({kind:"date",field:"createdAt",mode:"range",condition:"is",from:g,to:b}),r(!1)};return t.jsxs(W.Root,{open:n,onOpenChange:r,children:[t.jsx(W.Trigger,{variant:"tertiary",startIcon:t.jsx(Yn,{"aria-hidden":!0}),endIcon:null,children:t.jsxs(C,{gap:2,alignItems:"center",tag:"span",children:[s({id:l("list.filters.trigger"),defaultMessage:"Filter"}),o.length>0&&t.jsx(ai,{children:o.length})]})}),t.jsxs(W.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:"70vh",width:Ae,children:[t.jsxs(W.SubRoot,{children:[t.jsx(ct,{children:s({id:l("list.filters.field.type"),defaultMessage:"Type"})}),t.jsx(ut,{zIndex:2,maxHeight:"70vh",width:Ae,children:Ft.map(g=>t.jsx(W.Item,{role:"menuitemcheckbox","aria-checked":f.includes(g),onSelect:b=>{b.preventDefault(),p(g)},startIcon:t.jsx(me,{checked:f.includes(g),tabIndex:-1,"aria-hidden":!0}),children:s(yt[g])},g))})]}),["createdAt","updatedAt"].map(g=>t.jsxs(W.SubRoot,{children:[t.jsx(ct,{children:s(sn[g])}),t.jsxs(ut,{zIndex:2,maxHeight:"70vh",width:Ae,children:[Lt.map(b=>t.jsx(W.Item,{onSelect:()=>y(g,b),children:s(jt[b])},b)),g==="createdAt"&&t.jsxs(W.SubRoot,{children:[t.jsx(ct,{children:s({id:l("list.filters.select-date-range"),defaultMessage:"Select date range"})}),t.jsx(ut,{zIndex:2,maxHeight:"none",width:Ae,children:t.jsx(tn,{onSelect:m})})]})]})]},g))]})]})},ii=w(C)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,Pt=w.button`
  border: none;
  background: transparent;
  font: inherit;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  cursor: ${({$interactive:e})=>e?"pointer":"default"};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};

  ${({$interactive:e,theme:s})=>e&&`&:hover { background: ${s.colors.primary100}; }`}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,li=w.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Ot=w(fe.Content)`
  width: ${Ae};
`,nn=w.button`
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
`,di=w.button`
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
`,ds={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},cs={isExactly:{id:l("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:l("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:l("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},us={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},gt=({label:e,options:s,active:n,getOptionLabel:r,onPick:o})=>{const[a,i]=c.useState(!1);return t.jsxs(fe.Root,{open:a,onOpenChange:i,children:[t.jsx(fe.Trigger,{children:t.jsx(Pt,{type:"button",$interactive:!0,children:t.jsx($,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(Ot,{children:t.jsx(C,{direction:"column",alignItems:"stretch",padding:1,children:s.map(d=>t.jsxs(nn,{type:"button",onClick:()=>{o(d),i(!1)},children:[r(d),d===n&&t.jsx($t,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))})})]})},ci=({filter:e,onChange:s})=>{const{formatMessage:n}=A(),[r,o]=c.useState(!1),a=e.values.map(d=>n(yt[d])).join(", "),i=d=>{const u=e.values.includes(d)?e.values.filter(h=>h!==d):[...e.values,d];u.length>0&&s({...e,values:u})};return t.jsxs(fe.Root,{open:r,onOpenChange:o,children:[t.jsx(fe.Trigger,{children:t.jsx(Pt,{type:"button",$interactive:!0,children:t.jsx($,{variant:"pi",textColor:"neutral800",children:a})})}),t.jsx(Ot,{children:t.jsx(C,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:Ft.map(d=>t.jsx(me,{checked:e.values.includes(d),onCheckedChange:()=>i(d),children:n(yt[d])},d))})})]})},gs=({filter:e,onChange:s})=>{const{formatMessage:n,formatDate:r}=A(),[o,a]=c.useState(!1),i=e.mode==="preset"?n(jt[e.preset]):`${r(Qe(e.from),{day:"2-digit",month:"short"})} - ${r(Qe(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(fe.Root,{open:o,onOpenChange:a,children:[t.jsx(fe.Trigger,{children:t.jsx(Pt,{type:"button",$interactive:!0,children:t.jsx($,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(Ot,{children:e.mode==="preset"?t.jsx(C,{direction:"column",alignItems:"stretch",padding:1,children:Lt.map(d=>t.jsxs(nn,{type:"button",onClick:()=>{s({...e,preset:d}),a(!1)},children:[n(jt[d]),d===e.preset&&t.jsx($t,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))}):t.jsx(tn,{from:e.from,to:e.to,onSelect:(d,u)=>{s({...e,from:d,to:u}),a(!1)}})})]})},ui=({filter:e,onChange:s,onRemove:n})=>{const{formatMessage:r}=A(),o=e.kind==="type"?r({id:l("list.filters.field.type"),defaultMessage:"Type"}):r(sn[e.field]);return t.jsxs(ii,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(li,{children:t.jsx($,{variant:"pi",textColor:"neutral600",children:o})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(gt,{label:r(ds[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:a=>r(ds[a]),onPick:a=>s({...e,condition:a})}),t.jsx(ci,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(gt,{label:r(cs[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:a=>r(cs[a]),onPick:a=>s({...e,condition:a})}),t.jsx(gs,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(gt,{label:r(us[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:a=>r(us[a]),onPick:a=>s({...e,condition:a})}),t.jsx(gs,{filter:e,onChange:s})]}),t.jsx(di,{type:"button",onClick:n,"aria-label":r({id:l("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:o}),children:t.jsx(et,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},gi=({listFilters:e})=>{const{filters:s,updateFilter:n,removeFilter:r}=e;return s.length===0?null:t.jsx(C,{gap:2,wrap:"wrap",paddingTop:2,"data-testid":"filter-badges",children:s.map((o,a)=>t.jsx(ui,{filter:o,onChange:i=>n(a,i),onRemove:()=>r(a)},a))})},rn=e=>{const{isMovePending:s,isValidDropTarget:n}=ne()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:r}=As(),o=e.id==null?Hs:Na(e.id),a={kind:"folder-tree-target",id:e.id,name:e.name},i=Ts({id:o,data:a,disabled:s}),d=n(e.id),u=i.isOver;return{droppable:i,isOver:u,showValidDropHighlight:u&&d,showInvalidDropCursor:u&&!d&&r!=null}},hi=(e,s)=>{const n=[],r=o=>o.reduce((a,i)=>{const d=r(i.children??[]);return!s(i.name??"")&&d.length===0||(d.length>0&&i.id!=null&&n.push(i.id),a.push({...i,children:d})),a},[]);return{nodes:r(e),expandedIds:n}},pi=600,fi=({isOver:e,canExpand:s,onExpand:n})=>{c.useEffect(()=>{if(!e||!s)return;const r=setTimeout(n,pi);return()=>clearTimeout(r)},[e,s,n])},an=w.button`
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

  ${({$isValidDropTarget:e,theme:s})=>e&&Xe`
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
`,mi=w(C)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&Xe`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,on=(e,s,n=[])=>{for(const r of e){if(r.id===s)return n;if(r.children?.length){const o=r.id!=null?[...n,r.id]:n,a=on(r.children,s,o);if(a!==null)return a}}return null},xi=(e,s)=>{const[n,r]=c.useState(()=>new Set);c.useEffect(()=>{if(s==null)return;const d=on(e,s);!d||d.length===0||r(u=>{const h=new Set(u);let f=!1;for(const p of d)h.has(p)||(h.add(p),f=!0);return f?h:u})},[e,s]);const o=c.useCallback(d=>{r(u=>{const h=new Set(u);return h.has(d)?h.delete(d):h.add(d),h})},[]),a=c.useCallback(d=>{r(u=>{if(u.has(d))return u;const h=new Set(u);return h.add(d),h})},[]);return{isExpanded:c.useCallback(d=>n.has(d),[n]),toggleExpanded:o,expandFolder:a}},bi=({name:e,isActive:s})=>{const n=c.useRef(null),[r,o]=c.useState(!1);c.useLayoutEffect(()=>{const i=n.current;if(!i)return;const d=()=>{o(i.scrollWidth>i.clientWidth)};d();const u=new ResizeObserver(d);return u.observe(i),()=>u.disconnect()},[e]);const a=t.jsx($,{ref:n,variant:"omega",fontWeight:s?"semiBold":"regular",ellipsis:!0,children:e});return r?t.jsx(St,{label:e,children:a}):a},ln=w.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,yi=1.6,ji=w(kt)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,wi=({id:e,name:s,folderChildren:n,level:r,currentFolderId:o,showActiveFolder:a,isExpanded:i,onToggle:d,onExpand:u,onSelect:h,isMovePending:f})=>{const{formatMessage:p}=A(),y=n.length>0,m=i(e),g=a&&o===e,{droppable:{setNodeRef:b},isOver:M,showValidDropHighlight:D,showInvalidDropCursor:x}=rn({id:e,name:s}),S=c.useCallback(()=>u(e),[e,u]);return fi({isOver:M,canExpand:y&&!m,onExpand:S}),t.jsxs("li",{children:[t.jsxs(mi,{ref:b,alignItems:"center",paddingLeft:`${r*yi}rem`,gap:1,$isValidDropTarget:D,$isInvalidDropCursor:x,$isMovePending:f,children:[t.jsx(Z,{label:p({id:l(m?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:m?"Collapse {name}":"Expand {name}"},{name:s}),onClick:j=>{j.stopPropagation(),d(e)},variant:"ghost",withTooltip:!1,"aria-expanded":m,children:t.jsx(ji,{$expanded:m,fill:"neutral500"})}),t.jsx(O,{flex:"1",minWidth:0,children:t.jsx(an,{type:"button",$isActive:g,$isValidDropTarget:D,$isInvalidDropCursor:x,$isMovePending:f,"aria-current":g?"page":void 0,onClick:()=>h(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(bi,{name:s,isActive:g})})})]}),y&&m&&t.jsx(ln,{children:n.map(j=>t.jsx(dn,{node:j,level:r+1,currentFolderId:o,showActiveFolder:a,isExpanded:i,onToggle:d,onExpand:u,onSelect:h,isMovePending:f},j.id??j.name))})]})},dn=({node:e,...s})=>e.id==null?null:t.jsx(wi,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),vi=w(C)`
  /* TODO: reconcile 25.6rem (Figma) with admin WIDTH_SIDE_NAVIGATION (23.2rem) */
  width: 25.6rem;
  height: 100%;
  min-height: 100%;
  background: ${({theme:e})=>e.colors.neutral0};
  flex-shrink: 0;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Mi=w(O)`
  flex-shrink: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ci=w(C)`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,Si=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n})=>{const{formatMessage:r,locale:o}=A(),{data:a=[],isLoading:i,isError:d}=Et(),{isExpanded:u,toggleExpanded:h,expandFolder:f}=xi(a,e),{isMovePending:p}=ne()??{isMovePending:!1},[y,m]=c.useState(""),{contains:g}=Zn(o,{sensitivity:"base"}),b=y.trim(),{nodes:M,expandedIds:D}=c.useMemo(()=>b?hi(a,E=>g(E,b)):{nodes:a,expandedIds:[]},[a,b,g]),x=c.useCallback(E=>D.includes(E)||u(E),[D,u]),S=s&&e==null,j=r({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:v},showValidDropHighlight:k,showInvalidDropCursor:R}=rn({id:null,name:j});return t.jsxs(vi,{direction:"column",alignItems:"stretch",tag:"nav","aria-label":r({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(Mi,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:t.jsxs(C,{direction:"column",alignItems:"stretch",gap:4,children:[t.jsx($,{variant:"beta",tag:"h2",children:r({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx($s,{name:"search-folders",value:y,onChange:E=>m(E.target.value),onClear:()=>m(""),clearLabel:r({id:"clearLabel",defaultMessage:"Clear"}),placeholder:r({id:l("sidebar.search.placeholder"),defaultMessage:"Search folders"}),size:"S",children:r({id:l("sidebar.search.label"),defaultMessage:"Search folders"})})]})}),t.jsxs(Ci,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(an,{ref:v,type:"button",$isActive:S,$isValidDropTarget:k,$isInvalidDropCursor:R,$isMovePending:p,"aria-current":S?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(Xn,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx($,{variant:"omega",fontWeight:S?"semiBold":"regular",children:j})]}),t.jsxs(O,{marginTop:4,children:[t.jsxs(C,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(pe,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx($,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:r({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),i?t.jsx(C,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(be,{children:r({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):d?t.jsx(O,{padding:1,paddingTop:2,children:t.jsx($,{variant:"pi",textColor:"danger600",children:r({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):M.length===0?t.jsx(O,{padding:1,paddingTop:2,children:t.jsx($,{variant:"pi",textColor:"neutral500",children:b?r({id:l("sidebar.tree.no-results"),defaultMessage:'No folders match "{query}"'},{query:b}):r({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(ln,{children:M.map(E=>t.jsx(dn,{node:E,level:0,currentFolderId:e,showActiveFolder:s,isExpanded:x,onToggle:h,onExpand:f,onSelect:n,isMovePending:p},E.id??E.name))})]})]})]})},Di=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:r}=A(),[o,a]=c.useState(""),[i,d]=c.useState(null),u=()=>{a(""),d(null),s()},h=async f=>{f.preventDefault();const{urls:p,error:y}=er(o);if(y){d(y);return}d(null),u(),await n(p)};return t.jsx(q.Root,{open:e,onOpenChange:f=>!f&&u(),children:t.jsx(q.Content,{children:t.jsxs("form",{onSubmit:h,children:[t.jsx(q.Header,{children:t.jsx(q.Title,{children:r({id:l("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(q.Body,{children:t.jsxs(G.Root,{error:i||void 0,hint:r({id:l("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(G.Label,{children:r({id:l("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Jn,{name:"urls",minHeight:"unset",rows:Math.min(o.split(`
`).length,7),maxHeight:"10.5rem",placeholder:r({id:l("input.url.placeholder"),defaultMessage:"Empty"}),value:o,onChange:f=>{a(f.target.value),d(null)}}),t.jsx(G.Hint,{}),t.jsx(G.Error,{})]})}),t.jsxs(q.Footer,{children:[t.jsx(K,{variant:"tertiary",onClick:u,children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(K,{type:"submit",children:r({id:l("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},ht={oldestUploads:{id:l("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:l("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},pt={nameAsc:{id:l("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:l("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:l("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:l("list.sort.size-desc"),defaultMessage:"File size descending"}},hs={top:{id:l("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:l("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},$i=w(W.Trigger)``,ps=w(W.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,ki=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=A(),r=n({id:l("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(ht[e.sortBy]):n(pt[e.direction])}),o=t.jsx($t,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(W.Root,{children:[t.jsx($i,{variant:"ghost",endIcon:t.jsx(kt,{"aria-hidden":!0}),children:r}),t.jsxs(W.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(ps,{children:n({id:l("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(ht).map(a=>t.jsx(W.Item,{role:"menuitemradio","aria-checked":e.sortBy===a,onSelect:i=>{i.preventDefault(),e.setSortBy(e.sortBy===a?null:a)},endIcon:e.sortBy===a?o:null,children:n(ht[a])},a)),Object.keys(pt).map(a=>t.jsx(W.Item,{role:"menuitemradio","aria-checked":e.direction===a,onSelect:i=>{i.preventDefault(),e.setDirection(e.direction===a?null:a)},endIcon:e.direction===a?o:null,children:n(pt[a])},a)),s&&t.jsxs(t.Fragment,{children:[t.jsx(W.Separator,{}),t.jsx(ps,{children:n({id:l("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(hs).map(a=>t.jsx(W.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===a,onSelect:i=>{i.preventDefault(),e.setFoldersPosition(a)},endIcon:e.foldersPosition===a?o:null,children:n(hs[a])},a))]})]})]})},We=20,Ii=({folder:e=null,sort:s,search:n,filters:r,filtersKey:o="",enabled:a=!0}={})=>{const[i,d]=c.useState(1),u=c.useRef([]),h=c.useRef(void 0),f=c.useRef(!0),p=c.useRef(!0),{currentData:y,isLoading:m,isFetching:g,error:b}=Ls({folder:e,page:i,pageSize:We,sort:s,search:n,filters:r},{skip:!a}),M=y?.pagination;M&&(h.current=M);const D=c.useMemo(()=>{if(!y)return u.current;const v=y.results;if(i===1)u.current=v;else{const k=(i-1)*We;if(u.current.length<k-We)return u.current;u.current.length<i*We&&(u.current=[...u.current,...v])}return u.current},[y,i]);c.useEffect(()=>{if(f.current){f.current=!1;return}d(1),u.current=[]},[e,s,o]),c.useEffect(()=>{if(p.current){p.current=!1;return}d(1)},[n]);const x=M?i<M.pageCount:!1,S=g&&i>1,j=c.useCallback(()=>{d(v=>v+1)},[]);return a?{assets:D,pagination:M??h.current,isLoading:m,isFetchingMore:S,hasNextPage:x,fetchNextPage:j,error:b}:{assets:[],pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:j,error:void 0}},Nt={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},Bt={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},wt="mostRecentUpdates",fs=Object.fromEntries(Object.entries(Nt).map(([e,s])=>[s,e])),ms=Object.fromEntries(Object.entries(Bt).map(([e,s])=>[s,e])),Ai=e=>{for(const s of(e??"").split(",")){if(s in fs)return{sortBy:fs[s],direction:null,isExplicit:!0};if(s in ms)return{sortBy:null,direction:ms[s],isExplicit:!0}}return{sortBy:wt,direction:null,isExplicit:!1}},xs=(e,s)=>[e&&Nt[e],s&&Bt[s]].filter(r=>!!r).join(","),Ei=()=>{const[{query:e},s]=Me(),{sortBy:n,direction:r,isExplicit:o}=Ai(e?.sort),a=e?.folders==="mixed"?"mixed":"top",i=(g,b)=>{g===null&&b===null&&(g=wt);const M=xs(g,b);g===wt&&b===null?s({sort:""},"remove"):s({sort:M})},d=g=>i(g,null),u=g=>i(null,g),h=g=>{g==="mixed"?s({folders:"mixed"}):s({folders:""},"remove")},f=xs(n,r),y=[n&&Nt[n],r&&!r.startsWith("size")?Bt[r]:null].filter(g=>!!g),m=o&&y.length>0?y.join(","):"name:ASC";return{sortBy:n,direction:r,foldersPosition:a,assetsSort:f,foldersSort:m,setSortBy:d,setDirection:u,setFoldersPosition:h}},Ti=({folderId:e,search:s,sort:n,filter:r})=>JSON.stringify({folderId:e,search:s,sort:n,filter:r}),bs=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},Ri=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[r,o]=n.split(":");return{field:r,desc:o?.toUpperCase()==="DESC"}});return(n,r)=>{for(const{field:o,desc:a}of s){const i=bs(n,o),d=bs(r,o);let u;if(typeof i=="string"||typeof d=="string"?u=String(i)<String(d)?-1:String(i)>String(d)?1:0:u=i-d,u!==0)return a?-u:u}return 0}},Fi=({folders:e,assets:s,sort:n,hasNextPage:r})=>{const o=Ri(n),a=[...e].sort(o),i=s[s.length-1],d=!r||!i?r?[]:a:a.filter(f=>o(f,i)<=0),u=[];let h=0;for(const f of s){for(;h<d.length&&o(d[h],f)<=0;)u.push({kind:"folder",folder:d[h]}),h+=1;u.push({kind:"asset",asset:f})}for(;h<d.length;)u.push({kind:"folder",folder:d[h]}),h+=1;return u},Li={threshold:.1},Pi={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},ft={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},Oi=(e,s)=>e===0?ft.assets:s===0?ft.folders:ft.both,Ni=({view:e,folders:s,isLoadingFolders:n,assets:r,isLoadingAssets:o,isFetchingMore:a,hasNextPage:i,fetchNextPage:d,error:u,searchQuery:h,assetsSort:f,foldersPosition:p,hasActiveFilters:y,onClearFilters:m,onAssetItemClick:g,onAddAssets:b,canAddAssets:M,onClearSearch:D})=>{const{formatMessage:x}=A(),S=e===Ie.GRID,j=o||n,v=c.useMemo(()=>p==="mixed"&&!S?Fi({folders:s,assets:r,sort:f,hasNextPage:i}):null,[p,S,s,r,f,i]),k=cr(c.useCallback(R=>{R&&i&&!a&&d()},[i,a,d]),Li);return j?t.jsx(C,{justifyContent:"center",padding:8,children:t.jsx(be,{children:x({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(O,{padding:8,children:t.jsx($,{textColor:"danger600",children:x({id:l("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):s.length===0&&r.length===0?y&&!h?t.jsx(_o,{onClearFilters:m}):t.jsx(Bo,{onAddAssets:b,canAddAssets:M,searchQuery:h,onClearSearch:D}):t.jsxs(t.Fragment,{children:[S?t.jsx(lo,{folders:s,assets:r,onAssetItemClick:g}):t.jsx(yo,{assets:r,folders:s,mixedItems:v,onAssetItemClick:g}),t.jsx("div",{ref:k,style:{height:1}}),a&&t.jsx(C,{justifyContent:"center",padding:4,children:t.jsx(be,{children:x({id:l("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(Io,{assets:r})]})},Bi=({listQueryKey:e})=>{const{clear:s}=de();return c.useEffect(()=>{s()},[e,s]),null},_i=w(lr)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,ys=w(dr)`
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
`,zi=w(O)`
  [data-strapi-header] {
    background: ${({theme:e})=>e.colors.neutral0};

    h1 {
      font-size: 1.8rem;
    }
  }
`,Ui=()=>{const{formatMessage:e}=A(),{openDetails:s}=zs(),{canCreate:n,canUpdate:r}=ae(),{currentFolderId:o,navigateToFolderId:a,navigateToRoot:i}=Te(),{error:d}=At({id:o},{skip:o===null});c.useEffect(()=>{d?.name==="NotFoundError"&&i()},[d,i]);const{title:u,itemCount:h}=Ps(o),{searchQuery:f,isSearching:p,clearSearch:y}=Qs(),m=Ei(),g=Qo(),b=c.useMemo(()=>ti(g.filters,new Date),[g.serialized]),{assets:M,pagination:D,isLoading:x,isFetchingMore:S,hasNextPage:j,fetchNextPage:v,error:k}=Ii({folder:o,search:f||void 0,sort:m.assetsSort,filters:b.fileClauses,filtersKey:g.serialized,enabled:b.showFiles}),{data:R=[],isLoading:E}=Cr({parentId:o,search:f||void 0,sort:m.foldersSort,filters:b.folderClauses},{skip:!b.showFolders}),T=c.useMemo(()=>b.showFolders?R:[],[b.showFolders,R]),z=e(Pi,{count:h}),N=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:f}),V=T.length,Y=D?.total??0,Q=e(Oi(V,Y),{numberFolders:V,numberAssets:Y});let se;p?se=`${N} (${Q})`:u?se=`${u} (${z})`:se=e({id:"app.loading",defaultMessage:"Loading..."});const[P,B]=c.useState(!1),[H,ee]=tr(go.view,Ie.GRID),xe=H===Ie.GRID,[re,Re]=c.useState(!1),Fe=c.useRef(null),Le=c.useRef(null),[tt]=sr(),[Pe]=nr(),{data:oe}=Fs(),Se=oe?.data?.concurrentUploadRequests??1,{isEnabled:De}=Is(),I=async(U,ce)=>{if(U.length===0)return;const $e=new FormData,Oe=[];U.forEach(Ne=>{$e.append("files",Ne),Oe.push({name:Ne.name,caption:null,alternativeText:null,folder:ce})}),$e.append("fileInfo",JSON.stringify(Oe));try{await tt({formData:$e,totalFiles:U.length,concurrency:Se,generateAiMetadata:!!De}).unwrap()}catch{}},F=()=>{Fe.current?.click()},L=async U=>{const ce=U.target.files;ce&&ce.length>0&&await I(Array.from(ce),o),U.target.value=""},X=async U=>{n&&await I(U,o)},J=async U=>{try{await Pe({urls:U,folderId:o,generateAiMetadata:!!De}).unwrap()}catch{}},ie=Ti({folderId:o,search:f,sort:`${m.assetsSort};folders=${m.foldersPosition}`,filter:g.serialized||null});return t.jsxs(t.Fragment,{children:[t.jsx(Ro,{onDrop:X,disabled:!n,children:t.jsx(Ca,{disabled:!r,children:t.jsxs(Va,{children:[t.jsx(Bi,{listQueryKey:ie}),t.jsx(O,{ref:Le,children:t.jsxs(st.Root,{minHeight:"100vh",background:"neutral0",sideNav:t.jsx(Si,{currentFolderId:o,showActiveFolder:!p,onSelectFolder:a}),children:[t.jsx(Ce,{children:t.jsx("input",{type:"file",ref:Fe,onChange:L,multiple:!0})}),t.jsx(zi,{children:t.jsx(st.Header,{title:se,primaryAction:n&&t.jsxs(or,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(kt,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx(nt,{onSelect:()=>B(!0),startIcon:t.jsx(pe,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(nt,{onSelect:F,startIcon:t.jsx(ir,{}),children:e({id:l("import-files"),defaultMessage:"Import files"})}),t.jsx(nt,{onSelect:()=>Re(!0),startIcon:t.jsx(Mt,{}),children:e({id:l("import-from-url"),defaultMessage:"Import from URL"})})]}),subtitle:t.jsxs(t.Fragment,{children:[t.jsxs(C,{justifyContent:"space-between",alignItems:"center",gap:4,width:"100%",children:[t.jsxs(C,{gap:4,alignItems:"center",children:[t.jsx(oi,{listFilters:g}),t.jsx(uo,{})]}),t.jsxs(C,{gap:4,alignItems:"center",children:[t.jsx(ki,{sort:m,showFoldersGroup:!xe}),t.jsxs(_i,{type:"single",value:xe?"grid":"table",onValueChange:U=>U&&ee(U==="grid"?Ie.GRID:Ie.TABLE),"aria-label":e({id:l("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(ys,{value:"table","aria-label":e({id:l("view.table"),defaultMessage:"Table view"}),children:[t.jsx(rr,{}),e({id:l("view.table"),defaultMessage:"Table view"})]}),t.jsxs(ys,{value:"grid","aria-label":e({id:l("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(ar,{}),e({id:l("view.grid"),defaultMessage:"Grid view"})]})]})]})]}),t.jsx(gi,{listFilters:g})]})})}),t.jsx(st.Content,{children:t.jsxs(Po,{children:[t.jsx(No,{uploadDropZoneRef:Le,folderName:u}),t.jsx(Ni,{view:H,folders:T,isLoadingFolders:E,assets:M,isLoadingAssets:x,isFetchingMore:S,hasNextPage:j,fetchNextPage:v,error:k,searchQuery:f,assetsSort:m.assetsSort,foldersPosition:m.foldersPosition,hasActiveFilters:g.filters.length>0,onClearFilters:g.clearFilters,onAssetItemClick:s,onAddAssets:F,canAddAssets:n,onClearSearch:y})]})})]})})]})})}),t.jsx(Eo,{open:P,folderName:u,parentFolderId:o,onClose:()=>B(!1)}),t.jsx(Di,{open:re,onClose:()=>Re(!1),onUpload:J}),t.jsx(ba,{})]})},Gi=()=>{const{formatMessage:e}=A(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(_t.Main,{children:[t.jsx(_t.Title,{children:s}),t.jsx(ur,{children:t.jsx(gr,{index:!0,element:t.jsx(Ui,{})})})]})};export{Gi as UnstableMediaLibrary};
