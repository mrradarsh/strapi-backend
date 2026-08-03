import{h7 as Qe,h8 as Tt,f$ as se,h9 as vs,f6 as Cs,ha as Ms,hb as Ds,hc as Ss,hd as $s,he as ks,hf as Ae,a as A,hg as i,r as u,x as pe,fH as Is,hh as ae,j as t,cj as As,eS as Rs,hi as Ft,A as $,v as C,hj as Ts,hk as Fs,d as G,hl as Ye,U as _,I as z,y,S as L,hm as Es,k as ce,u as Ze,hn as oe,bW as fe,dq as Et,ho as Ls,hp as Ps,hq as Os,G as Bs,hr as Ns,hs as We,cB as Xe,T as Lt,b4 as Pt,bE as Ot,b2 as Bt,b3 as Re,bm as E,bU as Nt,J as Je,c_ as zs,ht as Us,dS as Ks,gd as ie,N as ve,bV as be,dY as Fe,dz as _s,fN as Ee,dw as Hs,dx as Vs,c as et,e$ as Ws,f1 as Gs,f3 as qs,e_ as Qs,f0 as Ys,f2 as Zs,cz as N,dg as Xs,hu as Js,F as en,K as tn,hv as sn,fR as tt,bP as nn,hw as rn,cC as te,M as on,hx as an,hy as ln,hz as dn,L as Pe,gr as cn,gs as un,e1 as gn,hA as Oe,ao as hn,hB as pn,hC as fn,hD as mn,P as ut,X as xn,Z as bn}from"./strapi-DldkATqi.js";import{g as yn}from"./users-DLc-PG84.js";import{l as jn,m as wn,D as vn,p as Cn,k as Mn,P as Dn,u as zt,f as Ut,e as Kt}from"./core.esm-BKhUli1V.js";import{u as Sn}from"./useAiAvailability-BXlBpMRD.js";const $n=e=>typeof e=="object"&&e!==null&&"data"in e,gt=e=>$n(e)?e.data:e,kn=Qe.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:r}=s,o={sort:r??"name:ASC"};return n!=null?o.filters={$and:[{parent:{id:n}}]}:o.filters={$and:[{parent:{id:{$null:!0}}}]},{url:"/upload/folders",method:"GET",config:{params:o}}},transformResponse:s=>gt(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>gt(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:r})=>[{type:"Folder",id:r}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:r})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:r}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:In,useGetFoldersQuery:An,useGetFolderQuery:st,useGetAllFoldersQuery:Rn,useGetFolderStructureQuery:nt,useBulkMoveMutation:_t}=kn,Tn=Qe.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,...r}=s,o={...r};return n!=null?o.filters={$and:[{folder:{id:n}}]}:o.filters={$and:[{folder:{id:{$null:!0}}}]},{url:"/upload/files",method:"GET",config:{params:o}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,r)=>[{type:"Asset",id:r}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const r=new FormData;return r.append("fileInfo",JSON.stringify(n)),{url:"/upload",method:"POST",data:r,config:{params:{id:s}}}},invalidatesTags:(s,n,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:r})=>{const o=new FormData;return o.append("files",n),r&&o.append("fileInfo",JSON.stringify(r)),{url:"/upload",method:"POST",data:o,config:{params:{id:s}}}},invalidatesTags:(s,n,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,r)=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:Ht,useGetAssetQuery:Fn,useUpdateAssetMutation:En,useReplaceAssetMutation:Ln,useDeleteAssetMutation:Pn,useBulkDeleteItemsMutation:On}=Tn,Bn=Qe.injectEndpoints({endpoints:e=>({getSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetSettingsQuery:Nn}=Bn,zn=async(e,s)=>{const r=await(await fetch(e)).blob(),o=window.URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.setAttribute("download",s),a.click(),window.URL.revokeObjectURL(o)},Un={pdf:ks,csv:$s,xls:Ss,zip:Ds},ye=(e,s)=>{const n=Tt(s);return e?.includes(se.Image)?vs:e?.includes(se.Video)?Cs:e?.includes(se.Audio)?Ms:n?Un[n]||Ae:Ae},Vt=e=>{const{formatMessage:s}=A(),{data:n,isLoading:r}=st({id:e},{skip:e===null}),{data:o,isLoading:a}=Ht({folder:null,pageSize:1},{skip:e!==null}),l=s({id:i("plugin.home"),defaultMessage:"Home"});return e===null?a?{title:l,itemCount:0}:{title:l,itemCount:o?.pagination?.total??0}:r||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},Kn=1,_n=({anchorX:e,anchorY:s,point:n,aspectRatio:r})=>{let o=Math.abs(n.x-e),a=Math.abs(n.y-s);r&&(o/r>=a?a=o/r:o=a*r);const l=n.x<e?e-o:e,d=n.y<s?s-a:s;return{x:l,y:d,width:o,height:a}},Hn=()=>{const[e,s]=u.useState({width:0,height:0}),[n,r]=u.useState({x:0,y:0,width:0,height:0}),[o,a]=u.useState(null),l=u.useRef(null),d=u.useCallback(m=>{l.current=m;const g={width:m.naturalWidth,height:m.naturalHeight};s(g),r({x:0,y:0,width:g.width,height:g.height})},[]),c=(m,g,p)=>Math.min(p,Math.max(g,m)),h=u.useCallback(m=>{r(g=>{const p=e.width-g.x,M=e.height-g.y;let b=m.width!==void 0?c(m.width,1,p):g.width,D=m.height!==void 0?c(m.height,1,M):g.height;return o&&(m.width!==void 0?D=c(b/o,1,M):m.height!==void 0&&(b=c(D*o,1,p))),{...g,width:b,height:D}})},[e.width,e.height,o]),f=u.useCallback(m=>{r(g=>{const p=m.x!==void 0?c(m.x,0,e.width-g.width):g.x,M=m.y!==void 0?c(m.y,0,e.height-g.height):g.y;return{...g,x:p,y:M}})},[e.width,e.height]),x=u.useCallback(m=>{a(m),m&&r(g=>{const p=e.width-g.x,M=e.height-g.y;let b=g.width,D=b/m;return D>M&&(D=M,b=D*m),b>p&&(b=p,D=b/m),{...g,width:Math.round(b),height:Math.round(D)}})},[e.width,e.height]),j=u.useCallback((m,g,p)=>new Promise((M,b)=>{const D=l.current;if(!D){b(new Error("Image not ready: call init() before produceFile()."));return}const w=document.createElement("canvas");w.width=Math.max(1,Math.round(n.width)),w.height=Math.max(1,Math.round(n.height));const v=w.getContext("2d");if(!v){b(new Error("Could not get a 2D canvas context to crop the image."));return}v.drawImage(D,n.x,n.y,n.width,n.height,0,0,w.width,w.height),w.toBlob(k=>{if(!k){b(new Error("Could not export the cropped image to a blob."));return}M(new File([k],m,{type:g,lastModified:p?new Date(p).getTime():Date.now()}))},g,Kn)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:o,setCropSize:h,setCropPosition:f,setAspectRatio:x,produceFile:j,width:Math.round(n.width),height:Math.round(n.height)}},Ce=5.6,Be=12,Vn=y(C)`
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
`,Wn=y(C)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Gn=y(L)`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      ${({theme:e})=>e.colors.neutral0} 0% 50%
    )
    50% / 20px 20px;
`,qn=y.div`
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
`,Qn=y.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
`,Me=y.button`
  position: absolute;
  width: ${Be}px;
  height: ${Be}px;
  margin: -${Be/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
`,Yn=y.button`
  position: absolute;
  width: ${Ce}rem;
  height: ${Ce}rem;
  margin: ${-Ce/2}rem 0 0 ${-Ce/2}rem;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.neutral800};
  background: transparent;
  cursor: grab;
  padding: 0;

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
`,Zn=y(L)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[1]};
  bottom: ${({theme:e})=>e.spaces[1]};
  width: 100%;
  max-width: 32rem;
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral900};
  z-index: 20;
`,Xn=y(C)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,De=y(_.Root)`
  flex-direction: row;
  align-items: center;
`,Se=y(Es)`
  width: 8.4rem;
`,ht=y(_.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,Jn=y(L)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,er=()=>t.jsx(Jn,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),tr=({asset:e,isBusy:s=!1,onClose:n,onApply:r,onSaveAsCopy:o})=>{const{formatMessage:a}=A(),{toggleNotification:l}=pe(),c=Is().colorScheme==="dark",h=c?"neutral1000":"neutral0",f=c?"neutral600":"neutral200",x=u.useRef(null),j=u.useRef(null),{init:m,crop:g,naturalSize:p,aspectRatio:M,setCropSize:b,setCropPosition:D,setAspectRatio:w,produceFile:v,width:k,height:U}=Hn(),[H,O]=u.useState(!1),[T,P]=u.useState(e.focalPoint??{x:50,y:50}),V=ae(e.url),S=e.updatedAt?new Date(e.updatedAt).getTime():void 0,R=S!==void 0?`${V}${V.includes("?")?"&":"?"}v=${S}`:V,K=()=>{x.current&&m(x.current)},W=I=>{const F=j.current?.getBoundingClientRect();if(!F||!p.width||!p.height)return null;const B=p.width/F.width,Q=p.height/F.height;return{x:(I.clientX-F.left)*B,y:(I.clientY-F.top)*Q}},X=I=>{I.preventDefault(),I.stopPropagation();const F=W(I);if(!F)return;const B={...g},Q=de=>{const ee=W(de);ee&&D({x:B.x+(ee.x-F.x),y:B.y+(ee.y-F.y)})},Y=()=>{window.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",Y)};window.addEventListener("pointermove",Q),window.addEventListener("pointerup",Y)},J=I=>F=>{F.preventDefault(),F.stopPropagation();const B={...g},Q=I==="tl"||I==="bl"?B.x+B.width:B.x,Y=I==="tl"||I==="tr"?B.y+B.height:B.y,de=xs=>{const ct=W(xs);if(!ct)return;const{x:bs,y:ys,width:js,height:ws}=_n({anchorX:Q,anchorY:Y,point:ct,aspectRatio:H?M:null});D({x:bs,y:ys}),b({width:js,height:ws})},ee=()=>{window.removeEventListener("pointermove",de),window.removeEventListener("pointerup",ee)};window.addEventListener("pointermove",de),window.addEventListener("pointerup",ee)},we=()=>{O(I=>{const F=!I;return w(F&&U?k/U:null),F})},ps=I=>{I.preventDefault(),I.stopPropagation();const F=Q=>{const Y=W(Q);if(!Y)return;const de=(Y.x-g.x)/g.width*100,ee=(Y.y-g.y)/g.height*100;P({x:Math.round(Math.min(100,Math.max(0,de))),y:Math.round(Math.min(100,Math.max(0,ee)))})},B=()=>{window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",B)};window.addEventListener("pointermove",F),window.addEventListener("pointerup",B)},fs=Math.round(T.x/100*k),ms=Math.round(T.y/100*U),lt=(I,F)=>{const B=I==="x"?k:U;if(!B)return;const Q=Math.min(100,Math.max(0,F/B*100));P(Y=>({...Y,[I]:Math.round(Q)}))},le=p.width&&p.height?{left:g.x/p.width*100,top:g.y/p.height*100,width:g.width/p.width*100,height:g.height/p.height*100}:null,Le=le!==null,dt=async I=>{if(!Le)return;let F;try{F=await v(e.name,e.mime??"image/png",e.updatedAt)}catch{l({type:"danger",message:a({id:i("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const B={x:Math.round(T.x),y:Math.round(T.y)};I==="apply"?r(F,B):o(F,B)};return t.jsx(As,{children:t.jsx(Rs,{onEscape:n,children:t.jsxs(Vn,{children:[t.jsxs(Wn,{alignItems:"center",children:[t.jsx(Ft,{"aria-hidden":!0}),t.jsx($,{variant:"omega",fontWeight:"bold",children:a({id:i("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(Gn,{children:[t.jsxs(qn,{ref:j,$aspect:p.width&&p.height?p.width/p.height:void 0,children:[t.jsx("img",{ref:x,src:R,alt:e.name,crossOrigin:"anonymous",onLoad:K,draggable:!1}),le?t.jsxs(Qn,{style:{left:`${le.left}%`,top:`${le.top}%`,width:`${le.width}%`,height:`${le.height}%`},onPointerDown:X,children:[t.jsx(Me,{type:"button","aria-label":a({id:i("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:J("tl")}),t.jsx(Me,{type:"button","aria-label":a({id:i("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:J("tr")}),t.jsx(Me,{type:"button","aria-label":a({id:i("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:J("bl")}),t.jsx(Me,{type:"button","aria-label":a({id:i("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:J("br")}),t.jsx(Yn,{type:"button","aria-label":a({id:i("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${T.x}%`,top:`${T.y}%`},onPointerDown:ps})]}):null]}),t.jsxs(Zn,{children:[t.jsxs(C,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx($,{variant:"omega",fontWeight:"bold",textColor:h,children:a({id:i("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx($,{variant:"pi",textColor:f,children:a({id:i("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(C,{gap:6,alignItems:"center",children:[t.jsxs(C,{alignItems:"center",gap:2,children:[t.jsxs(C,{direction:"column",gap:2,children:[t.jsxs(De,{name:"crop-width",gap:2,children:[t.jsx(ht,{textColor:h,children:t.jsx(Ts,{})}),t.jsx(Se,{"aria-label":a({id:i("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:k,min:1,max:p.width||void 0,onValueChange:I=>{I!==void 0&&b({width:I})}})]}),t.jsxs(De,{name:"crop-height",gap:2,children:[t.jsx(ht,{textColor:h,children:t.jsx(Fs,{})}),t.jsx(Se,{"aria-label":a({id:i("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:U,min:1,max:p.height||void 0,onValueChange:I=>{I!==void 0&&b({height:I})}})]})]}),t.jsxs(C,{position:"relative",children:[t.jsx(G,{label:a({id:i("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:H?"secondary":"ghost",onClick:we,children:t.jsx(Ye,{})}),t.jsx(er,{})]})]}),t.jsxs(C,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(De,{name:"focal-x",gap:2,children:[t.jsx(_.Label,{textColor:h,children:a({id:i("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(Se,{"aria-label":a({id:i("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:fs,onValueChange:I=>{I!==void 0&&lt("x",I)}})]}),t.jsxs(De,{name:"focal-y",gap:2,children:[t.jsx(_.Label,{textColor:h,children:a({id:i("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(Se,{"aria-label":a({id:i("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:ms,onValueChange:I=>{I!==void 0&&lt("y",I)}})]})]})]})]})]}),t.jsxs(Xn,{alignItems:"center",children:[t.jsx(z,{variant:"tertiary",onClick:n,disabled:s,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(C,{gap:2,children:[t.jsx(z,{variant:"secondary",onClick:()=>dt("copy"),loading:s,disabled:!Le,children:a({id:i("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(z,{variant:"default",onClick:()=>dt("apply"),loading:s,disabled:!Le,children:a({id:i("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},me=y(L)`
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
`,$e=y(C)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,sr=y.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,nr=y(C)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,rr=y.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,or=y.audio`
  width: 100%;
`,ar=y.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,ir=y(C)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,lr=y(C)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,ke=()=>{const{formatMessage:e}=A();return t.jsx(lr,{justifyContent:"center",alignItems:"center",children:t.jsx(ce,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},dr=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:r}=A(),{alternativeText:o,ext:a,mime:l,url:d,updatedAt:c,isUrlSigned:h,isLocal:f}=e,x=c&&!h?new Date(c).getTime():void 0,j=w=>!w||x===void 0?w:w.includes("?")?`${w}&v=${x}`:`${w}?v=${x}`,m=j(ae(d)),[g,p]=u.useState(!1);u.useEffect(()=>{p(!1)},[m]);const M=u.useRef(null);if(u.useEffect(()=>{const w=M.current;if(!w)return;const v=()=>{const U=w.parentElement;if(!U)return;const H=U.getBoundingClientRect(),O=w.offsetWidth,T=w.offsetHeight;!O||!T||!H.width||H.height};v();const k=new ResizeObserver(v);return k.observe(w),w.parentElement&&k.observe(w.parentElement),()=>k.disconnect()},[g]),l?.includes(se.Image)){const w=j(ae(d));if(w)return t.jsxs(me,{children:[(!g||n)&&t.jsx(ke,{}),s?t.jsx(nr,{children:s}):null,t.jsx($e,{children:t.jsx(sr,{ref:M,src:w,alt:o||e.name||"",crossOrigin:!f&&h?"anonymous":void 0,onLoad:()=>p(!0),onError:()=>p(!0)})})]})}if(l?.includes(se.Video)&&m)return t.jsxs(me,{children:[!g&&t.jsx(ke,{}),t.jsx($e,{children:t.jsx(rr,{src:m,controls:!0,title:e.name,onLoadedData:()=>p(!0),onError:()=>p(!0),children:r({id:i("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(l?.includes(se.Audio)&&m)return t.jsxs(me,{children:[!g&&t.jsx(ke,{}),t.jsx($e,{children:t.jsx(C,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(or,{src:m,controls:!0,onLoadedData:()=>p(!0),onError:()=>p(!0)})})})]});if((a?.toLowerCase()==="pdf"||a?.toLowerCase()===".pdf"||l==="application/pdf")&&m)return t.jsxs(me,{children:[!g&&t.jsx(ke,{}),t.jsx($e,{children:t.jsx(ar,{src:`${m}#toolbar=0`,title:e.name,onLoad:()=>p(!0)})})]});const D=ye(l,a);return t.jsx(me,{children:t.jsxs(ir,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(D,{width:24,height:24}),t.jsx($,{variant:"pi",children:r({id:i("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},Ne="assetId",Wt=u.createContext(null),Gt=()=>{const e=u.useContext(Wt);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},qt=u.createContext(null),Qt=()=>{const e=u.useContext(qt);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},Yt=()=>{const[{query:e},s]=Ze(),n=e?.[Ne],r=n?parseInt(n,10):null,o=r!==null&&!Number.isNaN(r),[a,l]=u.useState(o),d=u.useRef(null);u.useEffect(()=>{o&&(d.current=r,l(!0))},[o,r]);const c=u.useCallback(x=>{x.target===x.currentTarget&&!o&&l(!1)},[o]),h=u.useCallback(x=>{s({[Ne]:String(x)},"push",!0)},[s]),f=u.useCallback(()=>{s({[Ne]:void 0},"remove",!0)},[s]);return{assetId:o?r:d.current,isVisible:o,shouldRenderDrawer:a,onCloseAnimationEnd:c,openDetails:h,closeDetails:f}},cr=y(C)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,re=({label:e,value:s})=>t.jsxs(cr,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx($,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx($,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),ur=y(L)`
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
`,gr=y(L)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,hr=y(C)`
  position: absolute;
  inset: 0;
  z-index: 20;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,pr=e=>e.isDeleting?{id:i("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:i("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:i("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,fr=y(Je)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,ze=({name:e,label:s,required:n})=>{const{formatMessage:r}=A(),o=Lt(e),a=Xe("DetailField",c=>c.isSubmitting),l=o.value??"",d=r({id:i("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(_.Root,{name:e,required:n,children:[t.jsx(_.Label,{children:s}),t.jsx(Pt,{value:l,onChange:c=>o.onChange(e,c.target.value),endAction:l?void 0:t.jsx(Ot,{label:d,children:t.jsx(fr,{"aria-label":d,role:"img"})}),type:"text",disabled:a})]})},mr=({label:e,rootLabel:s,folders:n})=>{const r=Lt("folder"),o=Xe("LocationField",a=>a.isSubmitting);return t.jsxs(_.Root,{name:"folder",required:!0,children:[t.jsx(_.Label,{children:e}),t.jsxs(Bt,{value:r.value==null?"":String(r.value),onChange:a=>{const l=a===""?null:Number(a);r.onChange("folder",l)},disabled:o,children:[t.jsx(Re,{value:"",children:s}),n.map(a=>t.jsx(Re,{value:String(a.id),children:a.name},a.id))]})]})},xr=()=>{const{formatMessage:e}=A(),{deleteAsset:s,isDeleting:n}=Qt(),[r,o]=u.useState(!1),a=async()=>{await s(),o(!1)},l=e({id:i("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(E.Root,{open:r,onOpenChange:o,children:[t.jsx(E.Trigger,{children:t.jsx(G,{withTooltip:!1,label:l,variant:"danger-light",children:t.jsx(Nt,{})})}),t.jsxs(E.Content,{children:[t.jsx(E.Header,{children:e({id:i("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(E.Body,{icon:t.jsx(Je,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:i("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(E.Footer,{children:[t.jsx(E.Cancel,{children:t.jsx(z,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(E.Action,{children:t.jsx(z,{variant:"danger-light",loading:n,onClick:a,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},br=({asset:e})=>{const{formatMessage:s}=A(),{copy:n}=zs(),r=Gt(),o=async()=>{const a=ae(e.url);if(!a)return;const l=await n(a);r({type:l?"success":"danger",message:s(l?{id:i("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:i("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(G,{withTooltip:!1,label:s({id:i("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:o,children:t.jsx(Ye,{})})},yr=({asset:e})=>{const{formatMessage:s}=A(),n=Gt(),[r,o]=u.useState(!1),a=async()=>{const l=ae(e.url);if(l){o(!0);try{await zn(l,e.name)}catch{n({type:"danger",message:s({id:i("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{o(!1)}}};return t.jsx(G,{withTooltip:!1,label:s({id:i("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:a,disabled:r,children:t.jsx(Us,{})})},jr=()=>{const{formatMessage:e}=A(),{replaceAsset:s,isReplacing:n}=Qt(),r=u.useRef(null),[o,a]=u.useState(!1),{data:l}=Nn(),d=l?.data?.aiMetadata??!1,c=()=>{a(!0)},h=()=>{a(!1),r.current?.click()},f=async x=>{const j=x.target.files?.[0];x.target.value="",j&&await s(j)};return t.jsxs(t.Fragment,{children:[t.jsx(fe,{children:t.jsx("input",{ref:r,type:"file",multiple:!1,onChange:f,"aria-hidden":!0,tabIndex:-1})}),t.jsx(G,{withTooltip:!1,label:e({id:i("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:c,disabled:n,children:t.jsx(Ks,{})}),t.jsx(E.Root,{open:o,onOpenChange:a,children:t.jsxs(E.Content,{children:[t.jsx(E.Header,{children:e({id:i("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(E.Body,{textAlign:"center",children:t.jsxs(C,{direction:"column",textAlign:"center",children:[t.jsx($,{variant:"omega",children:e({id:i("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx($,{variant:"omega",children:e({id:i("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(E.Footer,{children:[t.jsx(E.Cancel,{children:t.jsx(z,{variant:"tertiary",fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(E.Action,{children:t.jsx(z,{variant:"secondary",onClick:h,fullWidth:!0,children:e({id:i("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},wr=({onCrop:e})=>{const{formatMessage:s}=A(),n=Xe("AssetImageActions",r=>r.isSubmitting);return t.jsxs(C,{direction:"column",gap:2,children:[t.jsx(G,{withTooltip:!1,label:s({id:i("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:n||!e,children:t.jsx(Ft,{})}),t.jsx(jr,{})]})},vr=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:r}=A(),{data:o=[]}=Rn(),{toggleNotification:a}=pe(),[l]=En(),[d,{isLoading:c}]=Ln(),[h,{isLoading:f}]=Pn(),[x,{isLoading:j}]=Os(),[m,g]=u.useState(!1),[p,M]=u.useState(null);u.useEffect(()=>{if(!p)return;const S=window.setTimeout(()=>M(null),5e3);return()=>window.clearTimeout(S)},[p]);const b=u.useCallback(S=>M(S),[]),D=e.mime?.includes(se.Image),w={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},v=async S=>{const R={name:S.name,caption:S.caption,alternativeText:S.alternativeText,folder:S.folder};if("error"in await l({id:e.id,fileInfo:R})){b({type:"danger",message:n({id:i("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}b({type:"success",message:n({id:i("asset-details.update.success"),defaultMessage:"File updated"})})},{title:k}=Vt(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),U=async S=>{const R=await d({id:e.id,file:S});if("error"in R){const K=R.error,W=K?.data?.error?.message??K?.data?.message??n({id:i("asset-details.replace.error"),defaultMessage:"Failed to replace the file."});b({type:"danger",message:W});return}b({type:"success",message:n({id:i("asset-details.replace.success"),defaultMessage:"File replaced."})})},H=async()=>{const S=await h(e.id);if("error"in S){const R=S.error,K=R?.data?.error?.message??R?.data?.message??n({id:i("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."});b({type:"danger",message:K});return}a({type:"success",message:n({id:i("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:k})}),s()},O=()=>{b({type:"danger",message:n({id:i("asset-details.crop.error"),defaultMessage:"Failed to crop the file."})})},T=async(S,R)=>{if(g(!1),"error"in await d({id:e.id,file:S,fileInfo:{focalPoint:R}})){O();return}b({type:"success",message:n({id:i("asset-details.crop.success"),defaultMessage:"File cropped."})})},P=async(S,R)=>{if(g(!1),"error"in await x({file:S,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:w.folder,focalPoint:R}})){O();return}b({type:"success",message:n({id:i("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},V=u.useMemo(()=>({replaceAsset:U,deleteAsset:H,isReplacing:c,isDeleting:f}),[c,f]);return t.jsx(Wt.Provider,{value:b,children:t.jsx(qt.Provider,{value:V,children:t.jsx(ur,{children:t.jsx(Bs,{method:"POST",initialValues:w,onSubmit:v,children:({modified:S,isSubmitting:R,values:K,resetForm:W})=>{const X=(K.name??"").trim()==="",J=pr({isDeleting:f,isReplacing:c,isCropCopying:j});return t.jsxs(t.Fragment,{children:[t.jsx(Ns,{onProceed:W}),m&&D?t.jsx(tr,{asset:e,onClose:()=>g(!1),onApply:T,onSaveAsCopy:P}):null,J?t.jsx(hr,{children:t.jsx(ce,{children:n(J)})}):null,p?t.jsx(gr,{children:t.jsx(Et,{variant:p.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>M(null),children:p.message})}):null,t.jsxs(oe.ScrollableContent,{children:[t.jsx(dr,{asset:e,actions:D?t.jsx(wr,{onCrop:()=>g(!0)}):null}),t.jsxs(C,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx($,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:i("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(C,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(re,{label:n({id:i("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(re,{label:n({id:i("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(re,{label:n({id:i("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?yn({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(re,{label:n({id:i("asset-details.size"),defaultMessage:"Size"}),value:e.size?We(e.size,1):null}),D&&(e.width!=null||e.height!=null)&&t.jsx(re,{label:n({id:i("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(re,{label:n({id:i("asset-details.extension"),defaultMessage:"Extension"}),value:Tt(e.ext)}),t.jsx(re,{label:n({id:i("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(ze,{name:"name",label:n({id:i("asset-details.fileName"),defaultMessage:"File name"}),required:!0}),t.jsx(mr,{label:n({id:i("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:i("plugin.home"),defaultMessage:"Home"}),folders:o}),D&&t.jsxs(t.Fragment,{children:[t.jsx(ze,{name:"caption",label:n({id:i("asset-details.caption"),defaultMessage:"Caption"})}),t.jsx(ze,{name:"alternativeText",label:n({id:i("asset-details.alternativeText"),defaultMessage:"Alternative text"})})]})]})]}),t.jsxs(C,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(C,{gap:2,children:[t.jsx(xr,{}),t.jsx(br,{asset:e}),t.jsx(yr,{asset:e})]}),t.jsx(z,{type:"submit",variant:"default",loading:R,disabled:!S||R||X,children:n({id:i("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},Cr=({asset:e,closeDetails:s})=>{const n=e?ye(e.mime,e.ext):Ls;return t.jsxs(C,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(n,{width:20,height:20}),t.jsx(oe.Title,{asChild:!0,children:t.jsx($,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(L,{marginLeft:"auto",children:t.jsx(oe.CloseButton,{onClose:s,children:t.jsx(Ps,{})})})]})},Mr=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=A(),{data:r,isLoading:o,error:a}=Fn(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return o?t.jsx(C,{justifyContent:"center",padding:8,children:t.jsx(ce,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):a||!r?t.jsx(C,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(Et,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:i("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Cr,{asset:r,closeDetails:s}),t.jsx(vr,{asset:r,closeDetails:s})]})},Dr=()=>{const{formatMessage:e}=A(),{assetId:s,isVisible:n,shouldRenderDrawer:r,onCloseAnimationEnd:o,closeDetails:a}=Yt();return!r||s===null?null:t.jsxs(oe.Root,{isVisible:n,onClose:a,children:[t.jsx("div",{children:t.jsxs(fe,{children:[t.jsx(oe.Title,{children:e({id:i("asset-details.title"),defaultMessage:"File details"})}),t.jsx(oe.Description,{children:e({id:i("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(oe.Body,{animationDirection:"left",width:"41.6rem",height:"100vh",onAnimationEnd:o,children:t.jsx(Mr,{assetId:s,closeDetails:a})})]})},ue=e=>`asset:${e}`,ge=e=>`folder:${e}`,pt=(e,s)=>{const n=new Set;return e.forEach(r=>{const[o,a]=r.split(":");o===s&&n.add(Number(a))}),n},Zt=()=>({selectedKeys:new Set,anchorKey:null}),Sr=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},$r=(e,s,n)=>{const r=s.indexOf(n);if(r===-1)return e;const o=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(o===-1)return{selectedKeys:new Set([n]),anchorKey:n};const a=Math.min(o,r),l=Math.max(o,r);return{selectedKeys:new Set(s.slice(a,l+1)),anchorKey:e.anchorKey}},kr=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),Ir=()=>Zt(),Ar=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((o,a)=>e.has(a)?o+1:o,0),r=n===s.length;return{allSelected:r,isIndeterminate:n>0&&!r}},rt=u.createContext(null),Rr=({children:e})=>{const[s,n]=u.useState(Zt),r=u.useCallback(x=>s.selectedKeys.has(x),[s.selectedKeys]),o=u.useCallback(x=>n(j=>Sr(j,x)),[]),a=u.useCallback((x,j)=>n(m=>$r(m,x,j)),[]),l=u.useCallback(x=>n(kr(x)),[]),d=u.useCallback(()=>n(Ir()),[]),c=u.useMemo(()=>pt(s.selectedKeys,"asset"),[s.selectedKeys]),h=u.useMemo(()=>pt(s.selectedKeys,"folder"),[s.selectedKeys]),f=u.useMemo(()=>({selectedKeys:s.selectedKeys,selectedIds:c,selectedFolderIds:h,anchorKey:s.anchorKey,isSelected:r,toggle:o,selectRange:a,selectAll:l,clear:d}),[s.selectedKeys,c,h,s.anchorKey,r,o,a,l,d]);return u.createElement(rt.Provider,{value:f},e)},ne=()=>{const e=u.useContext(rt);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},Tr=()=>u.useContext(rt),Fr=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},je=()=>{const[{query:e},s]=Ze(),n=Fr(e?.folder),r=l=>{s({folder:String(l.id)})},o=u.useCallback(()=>{s({folder:""},"remove")},[s]);return u.useEffect(()=>{e?.folder&&n===null&&o()},[e?.folder,n,o]),{currentFolderId:n,navigateToFolder:r,navigateToRoot:o,navigateToFolderId:l=>{l==null?o():s({folder:String(l)})}}},Er=e=>{const s=[],n=[];for(const r of e)r.kind==="file"?s.push(r.id):n.push(r.id);return{fileIds:s,folderIds:n}},Xt=(e,s)=>{for(const n of e){if(n.id===s)return n;const r=Xt(n.children,s);if(r)return r}return null},Lr=e=>{const s=new Set,n=r=>{for(const o of r.children)o.id!=null&&s.add(o.id),n(o)};return n(e),s},Pr=(e,s,n)=>{if(s===n)return!0;const r=Xt(e,s);return r?Lr(r).has(n):!1},Or=e=>e.kind==="file"?e.folderId==null:e.parentId==null,he=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(o=>!Or(o));const r=new Set(e.filter(o=>o.kind==="folder").map(o=>o.id));if(r.has(s))return!1;for(const o of r)if(Pr(n,o,s))return!1;for(const o of e)if(o.kind==="file"&&o.folderId===s||o.kind==="folder"&&o.parentId===s)return!1;return!0},Br=({formatMessage:e,count:s,source:n,destination:r})=>e({id:i("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:r}),Nr=e=>typeof e=="string"&&e.length>0,Jt=(e,s)=>{if(!e||typeof e!="object")return s;const n=e,r=[n.data?.error?.message,n.data?.message,n.message];for(const o of r)if(Nr(o))return o;return s},ft=(e,s,n)=>{if(s===null)return n;const r=o=>{for(const a of o){if(a.id===s)return a;const l=r(a.children??[]);if(l)return l}return null};return r(e)?.name??n},mt=(e,s)=>e.kind==="file"?{...e,folderId:s}:{...e,parentId:s},xt=(e,s,n)=>{if(!s||s.size===0)return{items:[mt(e,n)],fromSelection:!1};const r=e.kind==="file"?ue(e.id):ge(e.id);if(!s.has(r))return{items:[mt(e,n)],fromSelection:!1};const o=[];return s.forEach(a=>{const l=a.indexOf(":"),d=a.slice(0,l),c=Number(a.slice(l+1));if(d==="asset"){o.push({kind:"file",id:c,name:e.kind==="file"&&e.id===c?e.name:"",folderId:n});return}o.push({kind:"folder",id:c,name:e.kind==="folder"&&e.id===c?e.name:"",parentId:n})}),{items:o,fromSelection:!0}},ot=(e,s=new Set,n="")=>e.flatMap(r=>{if(r.id==null||s.has(r.id))return[];const o=n?`${n} / ${r.name??""}`:r.name??"";return[{id:r.id,label:o},...ot(r.children??[],s,o)]}),zr=(e,s)=>{const n=new Set;if(e.length===0)return n;he({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:r}of ot(s))he({items:e,targetFolderId:r,folderStructure:s})&&n.add(r);return n},Ur=e=>`file:${e}`,Kr=e=>`folder:${e}`,_r=e=>`folder-target:${e}`,Hr=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Vr=e=>`folder-tree-target:${e}`,es="folder-tree-target:home",Wr=e=>{if(typeof e!="string")return null;if(e===es)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Ue=20,Ke=24,bt=24,ts=y(C)`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,Gr=y(ts)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,yt=y(C)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,_e=y(C)`
  flex-shrink: 0;
  width: ${bt}px;
  height: ${bt}px;
  align-items: center;
  justify-content: center;
`,qr=y(C)`
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
`,Qr=({items:e})=>{const{formatMessage:s}=A();if(e.length===0)return null;if(e.length===1){const a=e[0],l=a.kind==="folder",d=l?ie:Ae,c=l?Ue:Ke;return t.jsxs(ts,{children:[t.jsx(_e,{children:t.jsx(d,{width:c,height:c})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:a.name})]})}const n=e.filter(a=>a.kind==="folder").length,r=e.filter(a=>a.kind==="file").length,o=n+r;return t.jsxs(Gr,{gap:3,children:[n>0?t.jsxs(yt,{children:[t.jsx(_e,{children:t.jsx(ie,{width:Ue,height:Ue})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:i("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,r>0?t.jsxs(yt,{children:[t.jsx(_e,{children:t.jsx(Ae,{width:Ke,height:Ke})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:i("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:r})})]}):null,t.jsx(qr,{children:t.jsx($,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:o})})]})},ss=u.createContext(null),Z=()=>u.useContext(ss),jt=e=>{const s=Hr(e);if(s!=null)return{destinationFolderId:s};const n=Wr(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},Yr=({children:e})=>{const{formatMessage:s}=A(),{toggleNotification:n}=pe(),r=Tr(),{currentFolderId:o}=je(),{data:a=[]}=nt(),l=s({id:i("plugin.name"),defaultMessage:"Media Library"}),[d,{isLoading:c}]=_t(),[h,f]=u.useState([]),[x,j]=u.useState(""),m=u.useRef({items:[],fromSelection:!1}),g=u.useCallback(O=>{j(""),requestAnimationFrame(()=>j(O))},[]),p=jn(wn(Dn,{activationConstraint:{distance:8}})),M=u.useMemo(()=>zr(h,a),[h,a]),b=u.useCallback(O=>M.has(O),[M]),D=u.useMemo(()=>({isInternalDragActive:h.length>0,isMovePending:c,isValidDropTarget:b}),[h.length,c,b]),w=u.useCallback(()=>{m.current={items:[],fromSelection:!1},f([])},[]),v=u.useCallback(O=>{const T=O.active.data.current;if(!T){w();return}const{items:P,fromSelection:V}=xt(T,r?.selectedKeys,o);m.current={items:P,fromSelection:V},f(P)},[w,o,r?.selectedKeys]),k=u.useCallback(async O=>{const{over:T}=O,{items:P,fromSelection:V}=m.current;if(w(),c||!T||P.length===0)return;const S=jt(T.id);if(!S)return;const{destinationFolderId:R}=S;if(!he({items:P,targetFolderId:R,folderStructure:a}))return;const K=Er(P),W=Br({formatMessage:s,count:P.length,source:ft(a,o,l),destination:ft(a,R,l)}),X=s({id:i("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await d({...K,destinationFolderId:R}).unwrap(),V&&r?.clear(),g(W),n({type:"success",message:W})}catch(J){const we=Jt(J,X);g(s({id:i("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:we})),n({type:"danger",message:we})}},[g,d,w,o,a,s,c,l,r,n]),U=u.useCallback(()=>{w()},[w]),H=u.useMemo(()=>({onDragStart:({active:O})=>{const T=O.data.current;return T?s({id:i("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:T.name}):""},onDragOver:()=>"",onDragEnd:({active:O,over:T})=>{if(!T)return s({id:i("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const P=jt(T.id),V=O.data.current;if(!P||!V)return"";const{items:S}=xt(V,r?.selectedKeys,o);return he({items:S,targetFolderId:P.destinationFolderId,folderStructure:a})?"":s({id:i("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>s({id:i("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[o,a,s,r?.selectedKeys]);return t.jsx(ss.Provider,{value:D,children:t.jsxs(vn,{sensors:p,collisionDetection:Cn,onDragStart:v,onDragEnd:k,onDragCancel:U,accessibility:{announcements:H},children:[t.jsx(fe,{"aria-live":"polite","aria-atomic":"true",children:x}),t.jsx(L,{position:"relative",children:e}),t.jsx(Mn,{dropAnimation:null,children:h.length>0?t.jsx(Qr,{items:h}):null})]})})},Zr=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,ns=e=>{const{isMovePending:s}=Z()??{isMovePending:!1},n=u.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:Zr(e.folder)}),[e.folder,e.id,e.name]);return Ut({id:Ur(e.id),data:n,disabled:s})},rs=e=>{const{isMovePending:s,isValidDropTarget:n}=Z()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:r}=zt(),o=typeof e.parent=="object"&&e.parent!=null?e.parent.id??null:e.parent??null,a=u.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:o}),[e.id,e.name,o]),l=u.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=Ut({id:Kr(e.id),data:a,disabled:s}),c=Kt({id:_r(e.id),data:l,disabled:s}),h=n(e.id),f=c.isOver,x=f&&h,j=f&&!h&&r!=null;return{dragData:a,draggable:d,droppable:c,isDragging:d.isDragging,showValidDropHighlight:x,showInvalidDropCursor:j}},Xr=y(C)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,Jr=y(Hs)`
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
`,eo=y(L)`
  grid-column: 1 / -1;
`,to=y(C)`
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
`,so=y(C)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,no=y($)`
  flex: 1;
  min-width: 0;
`,ro=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=A(),{navigateToFolder:r}=je(),{isMovePending:o}=Z()??{isMovePending:!1},{isSelected:a,toggle:l,selectRange:d}=ne(),{draggable:{attributes:c,listeners:h,setNodeRef:f,isDragging:x},droppable:{setNodeRef:j},showValidDropHighlight:m,showInvalidDropCursor:g}=rs(e),p=ge(e.id),M=v=>{f(v),j(v)},b=v=>{v.shiftKey?d(s,p):v.metaKey||v.ctrlKey?l(p):r(e)},D=v=>{v.key==="Enter"?(v.preventDefault(),r(e)):v.key===" "&&(v.preventDefault(),l(p))},w=v=>{v.stopPropagation(),v.shiftKey?d(s,p):l(p)};return t.jsxs(to,{ref:M,...c,...h,$isDragging:x,$isMovePending:o,$isValidDropTarget:m,$isInvalidDropTarget:g,$isSelected:a(p),onClick:b,onKeyDown:D,role:"listitem",tabIndex:0,children:[t.jsx(C,{onKeyDown:v=>v.stopPropagation(),children:t.jsx(be,{checked:a(p),onClick:w,"aria-label":n({id:i("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(so,{children:t.jsx(ie,{width:20,height:20})}),t.jsx(no,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(G,{label:n({id:i("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:v=>v.stopPropagation(),children:t.jsx(Fe,{})})]})},wt=y(L)`
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
`,oo=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ao=y(C)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,io=({asset:e})=>{const{alternativeText:s,ext:n,formats:r,mime:o,url:a,isLocal:l,isUrlSigned:d}=e;if(o?.includes(se.Image)){const h=ae(r?.thumbnail?.url)??ae(a);if(h)return t.jsx(wt,{children:t.jsx(oo,{src:h,alt:s||"",crossOrigin:!l&&d?"anonymous":void 0,draggable:!1,onDragStart:f=>f.preventDefault()})})}const c=ye(o,n);return t.jsx(wt,{children:t.jsx(ao,{justifyContent:"center",alignItems:"center",children:t.jsx(c,{width:48,height:48})})})},lo=y(Vs)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,co=y(C)`
  min-width: 0;
  width: 100%;
`,uo=y(C)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,go=y($)`
  flex: 1;
  min-width: 0;
`,ho=y.button`
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
`,po=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:r}=A(),o=ye(e.mime,e.ext),{isMovePending:a}=Z()??{isMovePending:!1},{attributes:l,listeners:d,setNodeRef:c,isDragging:h}=ns(e),{isSelected:f,toggle:x,selectRange:j}=ne(),m=ue(e.id),g=f(m),p=w=>{w.shiftKey?j(s,m):w.metaKey||w.ctrlKey?x(m):n(e.id)},M=w=>{w.key==="Enter"?(w.preventDefault(),n(e.id)):w.key===" "&&(w.preventDefault(),x(m))},b=w=>{w.stopPropagation(),n(e.id)},D=w=>{w.stopPropagation(),w.shiftKey?j(s,m):x(m)};return t.jsxs(Jr,{ref:c,...l,...d,$isDragging:h,$isMovePending:a,$isSelected:g,tabIndex:0,role:"listitem",onDragStart:w=>w.preventDefault(),onClick:p,onKeyDown:M,children:[t.jsxs(lo,{children:[t.jsx(Xr,{onKeyDown:w=>w.stopPropagation(),children:t.jsx(be,{checked:g,onClick:D,"aria-label":r({id:i("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(io,{asset:e})]}),t.jsx(_s,{children:t.jsxs(co,{alignItems:"center",gap:2,children:[t.jsx(uo,{children:t.jsx(o,{width:20,height:20})}),t.jsx(ho,{type:"button",onClick:b,children:t.jsx(go,{textColor:"primary800",ellipsis:!0,children:e.name})}),t.jsx(G,{label:r({id:i("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:w=>w.stopPropagation(),children:t.jsx(Fe,{})})]})})]})},fo=({assets:e,folders:s=[],onAssetItemClick:n})=>{const r=s.length+e.length,o=[...s.map(a=>ge(a.id)),...e.map(a=>ue(a.id))];return r===0?null:t.jsxs(ve.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(eo,{children:t.jsx(ve.Root,{gap:4,children:s.map(a=>t.jsx(ve.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(ro,{folder:a,orderedItemKeys:o})},`folder-${a.id}`))})}),e.map(a=>t.jsx(ve.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(po,{asset:a,orderedItemKeys:o,onAssetItemClick:n})},a.id))]})},mo={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},xe={GRID:0,TABLE:1},vt=[{name:"name",label:{id:i("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:i("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:i("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:i("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:i("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],xo=y(qs)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;
`,bo=y(Qs)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Ge=y(Ys)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,q=y(Zs)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,os=y.tr`
  height: 48px;
  user-select: none;
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isInvalidDropTarget:s})=>e?"wait":s?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

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
    ${q} {
      border-bottom: 0;
    }
  }
`,as=y(q)`
  width: 1%;
  white-space: nowrap;
`,yo=y(Ge)`
  width: 1%;
  white-space: nowrap;
`,jo=y.button`
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
`,Te=e=>{e.stopPropagation()},wo=({asset:e})=>{const{ext:s,mime:n}=e,r=ye(n,s);return t.jsx(C,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(r,{width:20,height:20})})},Ct=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const r=et(),{formatDate:o,formatMessage:a}=A(),{isMovePending:l}=Z()??{isMovePending:!1},{attributes:d,listeners:c,setNodeRef:h,isDragging:f}=ns(e),{isSelected:x,toggle:j,selectRange:m}=ne(),g=ue(e.id),p=x(g),M=v=>{v.shiftKey?m(s,g):v.metaKey||v.ctrlKey?j(g):n(e.id)},b=v=>{v.key==="Enter"?(v.preventDefault(),n(e.id)):v.key===" "&&(v.preventDefault(),j(g))},D=v=>{v.stopPropagation(),n(e.id)},w=v=>{v.stopPropagation(),v.shiftKey?m(s,g):j(g)};return t.jsxs(os,{ref:h,...d,...c,$isDragging:f,$isMovePending:l,$isSelected:p,tabIndex:0,role:"row",onDragStart:v=>v.preventDefault(),onClick:M,onKeyDown:b,children:[!r&&t.jsx(as,{onClick:Te,onKeyDown:Te,children:t.jsx(C,{children:t.jsx(be,{checked:p,onClick:w,"aria-label":a({id:i("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(q,{children:t.jsxs(C,{gap:3,alignItems:"center",children:[t.jsx(wo,{asset:e}),t.jsxs(C,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(jo,{type:"button",onClick:D,children:t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})}),r&&t.jsx($,{textColor:"neutral600",variant:"pi",children:e.size?We(e.size,1):"-"})]})]})}),!r&&t.jsxs(t.Fragment,{children:[t.jsx(q,{children:t.jsx($,{textColor:"neutral600",children:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(q,{children:t.jsx($,{textColor:"neutral600",children:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(q,{children:t.jsx($,{textColor:"neutral600",children:e.size?We(e.size,1):"-"})})]}),t.jsx(q,{children:t.jsx(C,{justifyContent:"flex-end",children:t.jsx(G,{label:a({id:i("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:v=>v.stopPropagation(),children:t.jsx(Fe,{})})})})]})},vo=y(os)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Mt=({folder:e,orderedItemKeys:s})=>{const n=et(),{formatDate:r,formatMessage:o}=A(),{navigateToFolder:a}=je(),{isSelected:l,toggle:d,selectRange:c}=ne(),{isMovePending:h}=Z()??{isMovePending:!1},{draggable:{attributes:f,listeners:x,setNodeRef:j,isDragging:m},droppable:{setNodeRef:g},showValidDropHighlight:p,showInvalidDropCursor:M}=rs(e),b=ge(e.id),D=k=>{k.shiftKey?c(s,b):k.metaKey||k.ctrlKey?d(b):a(e)},w=k=>{k.key==="Enter"?(k.preventDefault(),a(e)):k.key===" "&&(k.preventDefault(),d(b))},v=k=>{k.stopPropagation(),k.shiftKey?c(s,b):d(b)};return t.jsxs(vo,{ref:k=>{j(k),g(k)},...f,...x,$isDragging:m,$isMovePending:h,$isValidDropTarget:p,$isInvalidDropTarget:M,$isSelected:l(b),tabIndex:0,role:"row",onDragStart:k=>k.preventDefault(),onClick:D,onKeyDown:w,children:[!n&&t.jsx(as,{onClick:Te,onKeyDown:Te,children:t.jsx(C,{children:t.jsx(be,{checked:l(b),onClick:v,"aria-label":o({id:i("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(q,{children:t.jsxs(C,{gap:3,alignItems:"center",children:[t.jsx(C,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(ie,{width:20,height:20})}),t.jsx($,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(q,{children:t.jsx($,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(q,{children:t.jsx($,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(q,{children:t.jsx($,{textColor:"neutral600",children:"-"})})]}),t.jsx(q,{children:t.jsx(C,{justifyContent:"flex-end",children:t.jsx(G,{label:o({id:i("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:k=>k.stopPropagation(),children:t.jsx(Fe,{})})})})]})},Co=({assets:e,folders:s=[],mixedItems:n=null,onAssetItemClick:r})=>{const o=et(),{formatMessage:a}=A(),{selectedKeys:l,selectAll:d,clear:c}=ne(),h=o?vt.filter(b=>b.name==="name"||b.name==="actions"):vt,f=!o,x=h.length+(f?1:0),j=s.length+e.length,m=n?n.map(b=>b.kind==="folder"?ge(b.folder.id):ue(b.asset.id)):[...s.map(b=>ge(b.id)),...e.map(b=>ue(b.id))],{allSelected:g,isIndeterminate:p}=Ar(l,m),M=()=>{g?c():d(m)};return j===0?null:t.jsxs(xo,{colCount:x,rowCount:(n?n.length:j)+1,children:[t.jsx(bo,{children:t.jsxs(Ws,{children:[f&&t.jsx(yo,{children:t.jsx(C,{children:t.jsx(be,{checked:p?"indeterminate":g,disabled:m.length===0,onCheckedChange:M,"aria-label":a({id:i("list.table.header.select-all"),defaultMessage:"Select all"})})})}),h.map(b=>{const D=a(b.label);return"isVisuallyHidden"in b&&b.isVisuallyHidden?t.jsx(Ge,{children:t.jsx(fe,{children:a({id:i("table.header.actions"),defaultMessage:"actions"})})},b.name):t.jsx(Ge,{children:t.jsx($,{textColor:"neutral600",variant:"sigma",children:D})},b.name)})]})}),t.jsxs(Gs,{children:[n?.map(b=>b.kind==="folder"?t.jsx(Mt,{folder:b.folder,orderedItemKeys:m},`folder-${b.folder.id}`):t.jsx(Ct,{asset:b.asset,orderedItemKeys:m,onAssetItemClick:r},b.asset.id)),!n&&s.map(b=>t.jsx(Mt,{folder:b,orderedItemKeys:m},`folder-${b.id}`)),!n&&e.map(b=>t.jsx(Ct,{asset:b,orderedItemKeys:m,onAssetItemClick:r},b.id))]})]})},Mo=(e,s,n)=>{const r=[];return e.forEach(o=>{r.push({kind:"file",id:o,name:"",folderId:n})}),s.forEach(o=>{r.push({kind:"folder",id:o,name:"",parentId:n})}),r},Do=y(N.Content)`
  max-width: 51.6rem;
`,So=({open:e,onClose:s})=>{const{formatMessage:n}=A(),{toggleNotification:r}=pe(),{selectedIds:o,selectedFolderIds:a,clear:l}=ne(),{currentFolderId:d}=je(),{data:c=[]}=nt(void 0,{skip:!e}),{data:h}=st({id:d},{skip:d===null}),[f,{isLoading:x}]=_t(),[j,m]=u.useState("");u.useEffect(()=>{e&&m("")},[e]);const g=n({id:i("plugin.name"),defaultMessage:"Media Library"}),p=u.useMemo(()=>Mo(o,a,d),[o,a,d]),M=u.useMemo(()=>ot(c,a).filter(v=>he({items:p,targetFolderId:v.id,folderStructure:c})),[c,a,p]),b=u.useMemo(()=>he({items:p,targetFolderId:null,folderStructure:c}),[p,c]),D=o.size+a.size,w=async()=>{if(x)return;const v=j===""?null:Number(j);try{await f({fileIds:Array.from(o),folderIds:Array.from(a),destinationFolderId:v}).unwrap()}catch(H){r({type:"danger",message:Jt(H,n({id:i("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const k=d===null?g:h?.name??g,U=v===null?g:M.find(H=>H.id===v)?.label??g;r({type:"success",message:n({id:i("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:D,source:k,destination:U})}),l(),s()};return t.jsx(N.Root,{open:e,onOpenChange:v=>{!v&&!x&&s()},children:t.jsxs(Do,{children:[t.jsx(N.Header,{children:t.jsx(N.Title,{children:n({id:i("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(N.Body,{children:t.jsxs(_.Root,{name:"destination",children:[t.jsx(_.Label,{children:n({id:i("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(Bt,{value:j,onChange:v=>m(String(v)),disabled:x,children:[b&&t.jsx(Re,{value:"",children:g}),M.map(v=>t.jsx(Re,{value:String(v.id),children:v.label},v.id))]})]})}),t.jsx(N.Footer,{children:t.jsxs(C,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(z,{variant:"tertiary",onClick:s,disabled:x,type:"button",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(z,{onClick:w,loading:x,children:n({id:i("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},$o=y(C)`
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
`,ko=y(C)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,Io=y(L)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Ao=()=>{const{formatMessage:e}=A(),{toggleNotification:s}=pe(),{isEnabled:n}=Sn(),{selectedIds:r,selectedFolderIds:o,clear:a}=ne(),[l,{isLoading:d}]=On(),[c,h]=u.useState(!1),[f,x]=u.useState(!1),j=r.size+o.size,m=(p,M)=>{s({type:"info",message:e({id:i(p),defaultMessage:M})})},g=async p=>{if(p.preventDefault(),d)return;if("error"in await l({fileIds:Array.from(r),folderIds:Array.from(o)})){s({type:"danger",message:e({id:i("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}h(!1),s({type:"success",message:e({id:i("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:j})}),a()};return j===0?null:t.jsxs($o,{tag:"section",role:"region","aria-label":e({id:i("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx($,{fontWeight:"bold",textColor:"neutral800",marginRight:4,children:e({id:i("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:j})}),t.jsxs(ko,{children:[n&&t.jsx(z,{size:"S",startIcon:t.jsx(Xs,{}),disabled:d,onClick:()=>m("list.bulk-actions.create-metadata-not-available","Generate metadata isn't available yet"),children:e({id:i("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})}),t.jsx(G,{variant:"tertiary",disabled:d,label:e({id:i("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>x(!0),children:t.jsx(Js,{})}),t.jsx(So,{open:f,onClose:()=>x(!1)}),t.jsxs(E.Root,{open:c,onOpenChange:p=>{d||h(p)},children:[t.jsx(E.Trigger,{children:t.jsx(G,{variant:"danger-light",disabled:d,label:e({id:i("list.bulk-actions.delete"),defaultMessage:"Delete"}),children:t.jsx(Nt,{})})}),t.jsxs(E.Content,{children:[t.jsx(E.Header,{children:e({id:i("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:j})}),t.jsxs(E.Body,{icon:t.jsx(Je,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:[t.jsx($,{children:e({id:i("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})}),t.jsx($,{children:e({id:i("list.bulk-actions.delete.confirm.description.cant-be-undone"),defaultMessage:"This action can’t be undone. Deleting a folder also removes everything inside it, and any linked content will break – media asset containers will appear empty."})})]}),t.jsxs(E.Footer,{children:[t.jsx(E.Cancel,{children:t.jsx(z,{variant:"tertiary",disabled:d,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(E.Action,{children:t.jsx(z,{variant:"danger-light",loading:d,onClick:g,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})]}),t.jsx(Io,{"aria-hidden":!0}),t.jsx(G,{variant:"ghost",label:e({id:i("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:a,disabled:d,children:t.jsx(en,{})})]})},Ro=y(N.Content)`
  max-width: 51.6rem;
`,To=({open:e,folderName:s,parentFolderId:n,onClose:r})=>{const{formatMessage:o}=A(),{toggleNotification:a}=pe(),[l,d]=u.useState(""),[c,h]=u.useState(),[f,{isLoading:x}]=In();u.useEffect(()=>{e&&(d(""),h(void 0))},[e]);const j=async m=>{m.preventDefault();const g=l.trim();if(!g){h(o({id:i("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{await f({name:g,parent:n}).unwrap(),a({type:"success",message:o({id:i("folder.create.success"),defaultMessage:"Folder has been created"})}),r()}catch(p){const M=p;M?.message?h(M.message):a({type:"danger",message:o({id:i("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(N.Root,{open:e,onOpenChange:r,children:t.jsxs(Ro,{children:[t.jsx(N.Header,{children:t.jsx(N.Title,{children:o({id:i("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:s})})}),t.jsxs("form",{onSubmit:j,children:[t.jsx(N.Body,{children:t.jsxs(_.Root,{error:c,name:"name",required:!0,children:[t.jsx(_.Label,{children:o({id:i("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(Pt,{value:l,onChange:m=>{d(m.target.value),h(void 0)},autoFocus:!0}),t.jsx(_.Error,{})]})}),t.jsx(N.Footer,{children:t.jsxs(C,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(z,{variant:"tertiary",onClick:r,type:"button",children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(z,{type:"submit",loading:x,children:o({id:i("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},is=u.createContext(null),Fo=y(L)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Eo=({children:e,onDrop:s})=>{const[n,r]=u.useState(!1),o=u.useRef(0),a={isDragging:n};u.useEffect(()=>{const f=()=>{r(!1),o.current=0},x=j=>{j.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",f),document.addEventListener("dragleave",x),()=>{document.removeEventListener("dragend",f),document.removeEventListener("dragleave",x)}},[]);const l=u.useCallback(f=>{f.preventDefault(),f.stopPropagation(),f.dataTransfer.types.includes("Files")&&(o.current+=1,r(!0))},[]),d=u.useCallback(f=>{f.preventDefault(),f.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),c=u.useCallback(f=>{f.preventDefault(),f.stopPropagation(),f.dataTransfer.dropEffect="copy"},[]),h=u.useCallback(f=>{f.preventDefault(),f.stopPropagation(),r(!1),o.current=0;const{files:x}=f.dataTransfer;x?.length&&s&&s(Array.from(x))},[s]);return t.jsx(is.Provider,{value:a,children:t.jsx(Fo,{"data-testid":"assets-dropzone",onDragEnter:l,onDragLeave:d,onDragOver:c,onDrop:h,children:e})})},ls=()=>{const e=u.useContext(is);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Lo=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Po=y(L)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Lo(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Oo=({children:e})=>{const{isDragging:s}=ls(),r=Z()?.isInternalDragActive??!1,o=s&&!r;return t.jsxs(L,{position:"relative",children:[o&&t.jsx(Po,{}),e]})},Bo=y(L)`
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
`,No=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=A(),{isDragging:r}=ls(),a=Z()?.isInternalDragActive??!1,l=r&&!a,[d,c]=u.useState(0);return u.useEffect(()=>{if(!e?.current)return;const h=()=>{const x=e.current?.getBoundingClientRect();x&&c(j=>j!==x.left?x.left:j)};h();const f=new ResizeObserver(h);return f.observe(e.current),()=>f.disconnect()},[e]),l?t.jsxs(Bo,{$leftContentWidth:d,children:[t.jsx($,{textColor:"neutral0",children:n({id:i("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(C,{gap:2,alignItems:"center",children:[t.jsx(ie,{width:20,height:20,fill:"neutral0"}),t.jsx($,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},zo=({onAddAssets:e})=>{const{formatMessage:s}=A();return t.jsxs(C,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(tn,{width:"16rem",height:"8.8rem"}),t.jsxs(C,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx($,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:s({id:i("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx($,{textColor:"neutral600",children:s({id:i("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),t.jsx(z,{onClick:e,children:s({id:i("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},ds=e=>{const{isMovePending:s,isValidDropTarget:n}=Z()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:r}=zt(),o=e.id==null?es:Vr(e.id),a={kind:"folder-tree-target",id:e.id,name:e.name},l=Kt({id:o,data:a,disabled:s}),d=n(e.id),c=l.isOver;return{droppable:l,isOver:c,showValidDropHighlight:c&&d,showInvalidDropCursor:c&&!d&&r!=null}},Uo=600,Ko=({isOver:e,canExpand:s,onExpand:n})=>{u.useEffect(()=>{if(!e||!s)return;const r=setTimeout(n,Uo);return()=>clearTimeout(r)},[e,s,n])},cs=y.button`
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
`,_o=y(C)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&Ee`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,us=(e,s,n=[])=>{for(const r of e){if(r.id===s)return n;if(r.children?.length){const o=r.id!=null?[...n,r.id]:n,a=us(r.children,s,o);if(a!==null)return a}}return null},Ho=(e,s)=>{const[n,r]=u.useState(()=>new Set);u.useEffect(()=>{if(s==null)return;const d=us(e,s);!d||d.length===0||r(c=>{const h=new Set(c);let f=!1;for(const x of d)h.has(x)||(h.add(x),f=!0);return f?h:c})},[e,s]);const o=u.useCallback(d=>{r(c=>{const h=new Set(c);return h.has(d)?h.delete(d):h.add(d),h})},[]),a=u.useCallback(d=>{r(c=>{if(c.has(d))return c;const h=new Set(c);return h.add(d),h})},[]);return{isExpanded:u.useCallback(d=>n.has(d),[n]),toggleExpanded:o,expandFolder:a}},Vo=({name:e,isActive:s})=>{const n=u.useRef(null),[r,o]=u.useState(!1);u.useLayoutEffect(()=>{const l=n.current;if(!l)return;const d=()=>{o(l.scrollWidth>l.clientWidth)};d();const c=new ResizeObserver(d);return c.observe(l),()=>c.disconnect()},[e]);const a=t.jsx($,{ref:n,variant:"omega",fontWeight:s?"semiBold":"regular",ellipsis:!0,children:e});return r?t.jsx(Ot,{label:e,children:a}):a},gs=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,Wo=1.6,Go=y(tt)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,qo=({id:e,name:s,folderChildren:n,level:r,currentFolderId:o,isExpanded:a,onToggle:l,onExpand:d,onSelect:c,isMovePending:h})=>{const{formatMessage:f}=A(),x=n.length>0,j=a(e),m=o===e,{droppable:{setNodeRef:g},isOver:p,showValidDropHighlight:M,showInvalidDropCursor:b}=ds({id:e,name:s}),D=u.useCallback(()=>d(e),[e,d]);return Ko({isOver:p,canExpand:x&&!j,onExpand:D}),t.jsxs("li",{children:[t.jsxs(_o,{ref:g,alignItems:"center",paddingLeft:`${r*Wo}rem`,gap:1,$isValidDropTarget:M,$isInvalidDropCursor:b,$isMovePending:h,children:[t.jsx(G,{label:f({id:i(j?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:j?"Collapse {name}":"Expand {name}"},{name:s}),onClick:w=>{w.stopPropagation(),l(e)},variant:"ghost",withTooltip:!1,"aria-expanded":j,children:t.jsx(Go,{$expanded:j,fill:"neutral500"})}),t.jsx(L,{flex:"1",minWidth:0,children:t.jsx(cs,{type:"button",$isActive:m,$isValidDropTarget:M,$isInvalidDropCursor:b,$isMovePending:h,"aria-current":m?"page":void 0,onClick:()=>c(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(Vo,{name:s,isActive:m})})})]}),x&&j&&t.jsx(gs,{children:n.map(w=>t.jsx(hs,{node:w,level:r+1,currentFolderId:o,isExpanded:a,onToggle:l,onExpand:d,onSelect:c,isMovePending:h},w.id??w.name))})]})},hs=({node:e,...s})=>e.id==null?null:t.jsx(qo,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),Qo=y(C)`
  /* TODO: reconcile 25.6rem (Figma) with admin WIDTH_SIDE_NAVIGATION (23.2rem) */
  width: 25.6rem;
  height: 100%;
  min-height: 100%;
  background: ${({theme:e})=>e.colors.neutral0};
  flex-shrink: 0;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Yo=y(L)`
  flex-shrink: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Zo=y(C)`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,Xo=({currentFolderId:e,onSelectFolder:s})=>{const{formatMessage:n}=A(),{data:r=[],isLoading:o,isError:a}=nt(),{isExpanded:l,toggleExpanded:d,expandFolder:c}=Ho(r,e),{isMovePending:h}=Z()??{isMovePending:!1},f=e==null,x=n({id:i("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:j},showValidDropHighlight:m,showInvalidDropCursor:g}=ds({id:null,name:x});return t.jsxs(Qo,{direction:"column",alignItems:"stretch",tag:"nav","aria-label":n({id:i("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(Yo,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:t.jsx($,{variant:"beta",tag:"h2",children:n({id:i("sidebar.title"),defaultMessage:"Media library"})})}),t.jsxs(Zo,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(cs,{ref:j,type:"button",$isActive:f,$isValidDropTarget:m,$isInvalidDropCursor:g,$isMovePending:h,"aria-current":f?"page":void 0,onClick:()=>s(null),"data-testid":"folder-tree-home",children:[t.jsx(sn,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx($,{variant:"omega",fontWeight:f?"semiBold":"regular",children:x})]}),t.jsxs(L,{marginTop:4,children:[t.jsxs(C,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(ie,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx($,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:n({id:i("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(C,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(ce,{children:n({id:i("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):a?t.jsx(L,{padding:1,paddingTop:2,children:t.jsx($,{variant:"pi",textColor:"danger600",children:n({id:i("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):r.length===0?t.jsx(L,{padding:1,paddingTop:2,children:t.jsx($,{variant:"pi",textColor:"neutral500",children:n({id:i("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(gs,{children:r.map(p=>t.jsx(hs,{node:p,level:0,currentFolderId:e,isExpanded:l,onToggle:d,onExpand:c,onSelect:s,isMovePending:h},p.id??p.name))})]})]})]})},Jo=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:r}=A(),[o,a]=u.useState(""),[l,d]=u.useState(null),c=()=>{a(""),d(null),s()},h=async f=>{f.preventDefault();const{urls:x,error:j}=rn(o);if(j){d(j);return}d(null),c(),await n(x)};return t.jsx(N.Root,{open:e,onOpenChange:f=>!f&&c(),children:t.jsx(N.Content,{children:t.jsxs("form",{onSubmit:h,children:[t.jsx(N.Header,{children:t.jsx(N.Title,{children:r({id:i("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(N.Body,{children:t.jsxs(_.Root,{error:l||void 0,hint:r({id:i("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(_.Label,{children:r({id:i("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(nn,{name:"urls",minHeight:"unset",rows:Math.min(o.split(`
`).length,7),maxHeight:"10.5rem",placeholder:r({id:i("input.url.placeholder"),defaultMessage:"Empty"}),value:o,onChange:f=>{a(f.target.value),d(null)}}),t.jsx(_.Hint,{}),t.jsx(_.Error,{})]})}),t.jsxs(N.Footer,{children:[t.jsx(z,{variant:"tertiary",onClick:c,children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(z,{type:"submit",children:r({id:i("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},He={oldestUploads:{id:i("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:i("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},Ve={nameAsc:{id:i("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:i("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:i("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:i("list.sort.size-desc"),defaultMessage:"File size descending"}},Dt={top:{id:i("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:i("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},ea=y(te.Trigger)`
  height: auto;
`,St=y(te.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,ta=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=A(),r=n({id:i("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(He[e.sortBy]):n(Ve[e.direction])}),o=t.jsx(on,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}),a=t.jsxs(fe,{children:[" ",n({id:i("list.sort.active"),defaultMessage:"(active)"})]});return t.jsxs(te.Root,{children:[t.jsx(ea,{variant:"tertiary",endIcon:t.jsx(tt,{"aria-hidden":!0}),children:r}),t.jsxs(te.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",width:"25rem",children:[t.jsx(St,{children:n({id:i("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(He).map(l=>t.jsxs(te.Item,{onSelect:d=>{d.preventDefault(),e.setSortBy(e.sortBy===l?null:l)},endIcon:e.sortBy===l?o:null,children:[n(He[l]),e.sortBy===l&&a]},l)),Object.keys(Ve).map(l=>t.jsxs(te.Item,{onSelect:d=>{d.preventDefault(),e.setDirection(e.direction===l?null:l)},endIcon:e.direction===l?o:null,children:[n(Ve[l]),e.direction===l&&a]},l)),s&&t.jsxs(t.Fragment,{children:[t.jsx(te.Separator,{}),t.jsx(St,{children:n({id:i("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(Dt).map(l=>t.jsxs(te.Item,{onSelect:d=>{d.preventDefault(),e.setFoldersPosition(l)},endIcon:e.foldersPosition===l?o:null,children:[n(Dt[l]),e.foldersPosition===l&&a]},l))]})]})]})},Ie=20,sa=({folder:e=null,sort:s}={})=>{const[n,r]=u.useState(1),o=u.useRef([]),a=u.useRef(!0),{currentData:l,isLoading:d,isFetching:c,error:h}=Ht({folder:e,page:n,pageSize:Ie,sort:s}),f=l?.pagination,x=u.useMemo(()=>{if(!l)return o.current;const p=l.results;if(n===1)o.current=p;else{const M=(n-1)*Ie;if(o.current.length<M-Ie)return o.current;o.current.length<n*Ie&&(o.current=[...o.current,...p])}return o.current},[l,n]);u.useEffect(()=>{if(a.current){a.current=!1;return}r(1),o.current=[]},[e,s]);const j=f?n<f.pageCount:!1,m=c&&n>1,g=u.useCallback(()=>{r(p=>p+1)},[]);return{assets:x,pagination:f,isLoading:d,isFetchingMore:m,hasNextPage:j,fetchNextPage:g,error:h}},at={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},it={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},qe="mostRecentUpdates",$t=Object.fromEntries(Object.entries(at).map(([e,s])=>[s,e])),kt=Object.fromEntries(Object.entries(it).map(([e,s])=>[s,e])),na=e=>{for(const s of(e??"").split(",")){if(s in $t)return{sortBy:$t[s],direction:null,isExplicit:!0};if(s in kt)return{sortBy:null,direction:kt[s],isExplicit:!0}}return{sortBy:qe,direction:null,isExplicit:!1}},It=(e,s)=>[e&&at[e],s&&it[s]].filter(r=>!!r).join(","),ra=()=>{const[{query:e},s]=Ze(),{sortBy:n,direction:r,isExplicit:o}=na(e?.sort),a=e?.folders==="mixed"?"mixed":"top",l=(g,p)=>{g===null&&p===null&&(g=qe);const M=It(g,p);g===qe&&p===null?s({sort:""},"remove"):s({sort:M})},d=g=>l(g,null),c=g=>l(null,g),h=g=>{g==="mixed"?s({folders:"mixed"}):s({folders:""},"remove")},f=It(n,r),j=[n&&at[n],r&&!r.startsWith("size")?it[r]:null].filter(g=>!!g),m=o&&j.length>0?j.join(","):"name:ASC";return{sortBy:n,direction:r,foldersPosition:a,assetsSort:f,foldersSort:m,setSortBy:d,setDirection:c,setFoldersPosition:h}},oa=({folderId:e,search:s,sort:n,filter:r})=>JSON.stringify({folderId:e,search:s,sort:n,filter:r}),At=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},aa=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[r,o]=n.split(":");return{field:r,desc:o?.toUpperCase()==="DESC"}});return(n,r)=>{for(const{field:o,desc:a}of s){const l=At(n,o),d=At(r,o);let c;if(typeof l=="string"||typeof d=="string"?c=String(l)<String(d)?-1:String(l)>String(d)?1:0:c=l-d,c!==0)return a?-c:c}return 0}},ia=({folders:e,assets:s,sort:n,hasNextPage:r})=>{const o=aa(n),a=[...e].sort(o),l=s[s.length-1],d=!r||!l?r?[]:a:a.filter(f=>o(f,l)<=0),c=[];let h=0;for(const f of s){for(;h<d.length&&o(d[h],f)<=0;)c.push({kind:"folder",folder:d[h]}),h+=1;c.push({kind:"asset",asset:f})}for(;h<d.length;)c.push({kind:"folder",folder:d[h]}),h+=1;return c},la={threshold:.1},da=({view:e,folderId:s,assetsSort:n,foldersSort:r,foldersPosition:o,onAssetItemClick:a,onAddAssets:l})=>{const{formatMessage:d}=A(),{assets:c,isLoading:h,isFetchingMore:f,hasNextPage:x,fetchNextPage:j,error:m}=sa({folder:s,sort:n}),{data:g=[],isLoading:p}=An({parentId:s,sort:r}),M=e===xe.GRID,b=h||p,D=u.useMemo(()=>o==="mixed"&&!M?ia({folders:g,assets:c,sort:n,hasNextPage:x}):null,[o,M,g,c,n,x]),w=mn(u.useCallback(v=>{v&&x&&!f&&j()},[x,f,j]),la);return b?t.jsx(C,{justifyContent:"center",padding:8,children:t.jsx(ce,{children:d({id:"app.loading",defaultMessage:"Loading..."})})}):m?t.jsx(L,{padding:8,children:t.jsx($,{textColor:"danger600",children:d({id:i("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):g.length===0&&c.length===0?t.jsx(zo,{onAddAssets:l}):t.jsxs(t.Fragment,{children:[M?t.jsx(fo,{folders:g,assets:c,onAssetItemClick:a}):t.jsx(Co,{assets:c,folders:g,mixedItems:D,onAssetItemClick:a}),t.jsx("div",{ref:w,style:{height:1}}),f&&t.jsx(C,{justifyContent:"center",padding:4,children:t.jsx(ce,{children:d({id:i("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})})]})},ca=({listQueryKey:e})=>{const{clear:s}=ne();return u.useEffect(()=>{s()},[e,s]),null},ua=y(pn)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Rt=y(fn)`
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
`,ga=y(L)`
  [data-strapi-header] {
    background: ${({theme:e})=>e.colors.neutral0};

    h1 {
      font-size: 1.8rem;
    }
  }
`,ha=()=>{const{formatMessage:e}=A(),{openDetails:s}=Yt(),{currentFolderId:n,navigateToFolderId:r,navigateToRoot:o}=je(),{error:a}=st({id:n},{skip:n===null});u.useEffect(()=>{a?.name==="NotFoundError"&&o()},[a,o]);const{title:l,itemCount:d}=Vt(n),c=e({id:i("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},{count:d}),h=l?`${l} (${c})`:e({id:"app.loading",defaultMessage:"Loading..."}),[f,x]=u.useState(!1),[j,m]=an(mo.view,xe.GRID),g=j===xe.GRID,[p,M]=u.useState(!1),b=u.useRef(null),D=u.useRef(null),[w]=ln(),[v]=dn(),k=async(S,R)=>{if(S.length===0)return;const K=new FormData,W=[];S.forEach(X=>{K.append("files",X),W.push({name:X.name,caption:null,alternativeText:null,folder:R})}),K.append("fileInfo",JSON.stringify(W));try{await w({formData:K,totalFiles:S.length}).unwrap()}catch{}},U=()=>{b.current?.click()},H=async S=>{const R=S.target.files;R&&R.length>0&&await k(Array.from(R),n),S.target.value=""},O=async S=>{await k(S,n)},T=async S=>{try{await v({urls:S,folderId:n}).unwrap()}catch{}},P=ra(),V=oa({folderId:n,search:"",sort:`${P.assetsSort};folders=${P.foldersPosition}`,filter:null});return t.jsxs(t.Fragment,{children:[t.jsx(Eo,{onDrop:O,children:t.jsx(Rr,{children:t.jsxs(Yr,{children:[t.jsx(ca,{listQueryKey:V}),t.jsx(L,{ref:D,children:t.jsxs(Pe.Root,{minHeight:"100vh",background:"neutral0",sideNav:t.jsx(Xo,{currentFolderId:n,onSelectFolder:r}),children:[t.jsx(fe,{children:t.jsx("input",{type:"file",ref:b,onChange:H,multiple:!0})}),t.jsx(ga,{children:t.jsx(Pe.Header,{title:h,primaryAction:t.jsxs(gn,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(tt,{}),label:e({id:i("new"),defaultMessage:"New"}),children:[t.jsx(Oe,{onSelect:()=>x(!0),startIcon:t.jsx(ie,{}),children:e({id:i("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(Oe,{onSelect:U,startIcon:t.jsx(hn,{}),children:e({id:i("import-files"),defaultMessage:"Import files"})}),t.jsx(Oe,{onSelect:()=>M(!0),startIcon:t.jsx(Ye,{}),children:e({id:i("import-from-url"),defaultMessage:"Import from URL"})})]}),subtitle:t.jsxs(C,{justifyContent:"space-between",alignItems:"center",gap:4,width:"100%",children:[t.jsx(C,{gap:4,alignItems:"center",children:"TODO: Filters and search"}),t.jsxs(C,{gap:4,alignItems:"stretch",children:[t.jsx(ta,{sort:P,showFoldersGroup:!g}),t.jsxs(ua,{type:"single",value:g?"grid":"table",onValueChange:S=>S&&m(S==="grid"?xe.GRID:xe.TABLE),"aria-label":e({id:i("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Rt,{value:"table","aria-label":e({id:i("view.table"),defaultMessage:"Table view"}),children:[t.jsx(cn,{}),e({id:i("view.table"),defaultMessage:"Table view"})]}),t.jsxs(Rt,{value:"grid","aria-label":e({id:i("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(un,{}),e({id:i("view.grid"),defaultMessage:"Grid view"})]})]})]})]})})}),t.jsx(Pe.Content,{children:t.jsxs(Oo,{children:[t.jsx(No,{uploadDropZoneRef:D,folderName:l}),t.jsx(da,{view:j,folderId:n,assetsSort:P.assetsSort,foldersSort:P.foldersSort,foldersPosition:P.foldersPosition,onAssetItemClick:s,onAddAssets:U})]})})]})}),t.jsx(Ao,{})]})})}),t.jsx(To,{open:f,folderName:l,parentFolderId:n,onClose:()=>x(!1)}),t.jsx(Jo,{open:p,onClose:()=>M(!1),onUpload:T}),t.jsx(Dr,{})]})},ba=()=>{const{formatMessage:e}=A(),s=e({id:i("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(ut.Main,{children:[t.jsx(ut.Title,{children:s}),t.jsx(xn,{children:t.jsx(bn,{index:!0,element:t.jsx(ha,{})})})]})};export{ba as UnstableMediaLibrary};
