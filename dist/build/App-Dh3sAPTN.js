import{r as d,j as t,aL as _,h7 as pt,h8 as ze,h9 as ft,f$ as ee,ha as bn,f6 as vn,hb as yn,hc as jn,hd as wn,he as Cn,hf as Mn,hg as Ne,a as T,hh as u,s as Se,fH as Dn,hi as ie,ch as In,eS as Sn,hj as ht,A as I,v as C,hk as Rn,hl as $n,d as Q,hm as Ve,R as V,E as W,y as b,S as E,hn as Tn,k as ce,u as mt,ho as re,bU as he,dq as xt,hp as An,hq as En,hr as Fn,D as kn,hs as Pn,ht as Oe,cz as He,N as bt,b2 as vt,bC as yt,b0 as Ln,b1 as et,bk as z,bS as Nn,J as jt,cY as On,hu as _n,dS as Bn,gd as ue,I as be,dY as Re,dz as Gn,fN as wt,dw as Un,dx as zn,c as We,e$ as tt,f1 as Vn,f3 as Hn,e_ as Wn,f0 as qn,f2 as Ct,cx as H,hv as Kn,fR as Mt,bN as Qn,hw as Yn,hx as Zn,hy as Xn,hz as Jn,L as Ae,gr as es,gs as ts,e1 as ns,hA as Ee,am as ss,hB as os,P as nt,U as rs,W as as}from"./strapi-B0PLjeFQ.js";import{g as is}from"./users-DLc-PG84.js";import{l as ls,m as ds,D as cs,p as us,k as gs,P as ps,u as fs,f as Dt,e as hs}from"./core.esm-b5fARPnT.js";function qe(e,n=[]){let s=[];function o(a,i){const l=d.createContext(i),g=s.length;s=[...s,i];const p=f=>{const{scope:j,children:m,...h}=f,x=j?.[e]?.[g]||l,v=d.useMemo(()=>h,Object.values(h));return t.jsx(x.Provider,{value:v,children:m})};p.displayName=a+"Provider";function c(f,j){const m=j?.[e]?.[g]||l,h=d.useContext(m);if(h)return h;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${a}\``)}return[p,c]}const r=()=>{const a=s.map(i=>d.createContext(i));return function(l){const g=l?.[e]||a;return d.useMemo(()=>({[`__scope${e}`]:{...l,[e]:g}}),[l,g])}};return r.scopeName=e,[o,ms(r,...n)]}function ms(...e){const n=e[0];if(e.length===1)return n;const s=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(a){const i=o.reduce((l,{useScope:g,scopeName:p})=>{const f=g(a)[`__scope${p}`];return{...l,...f}},{});return d.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return s.scopeName=n.scopeName,s}function st(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function It(...e){return n=>{let s=!1;const o=e.map(r=>{const a=st(r,n);return!s&&typeof a=="function"&&(s=!0),a});if(s)return()=>{for(let r=0;r<o.length;r++){const a=o[r];typeof a=="function"?a():st(e[r],null)}}}}function _e(...e){return d.useCallback(It(...e),e)}function Be(e){const n=xs(e),s=d.forwardRef((o,r)=>{const{children:a,...i}=o,l=d.Children.toArray(a),g=l.find(vs);if(g){const p=g.props.children,c=l.map(f=>f===g?d.Children.count(p)>1?d.Children.only(null):d.isValidElement(p)?p.props.children:null:f);return t.jsx(n,{...i,ref:r,children:d.isValidElement(p)?d.cloneElement(p,void 0,c):null})}return t.jsx(n,{...i,ref:r,children:a})});return s.displayName=`${e}.Slot`,s}function xs(e){const n=d.forwardRef((s,o)=>{const{children:r,...a}=s;if(d.isValidElement(r)){const i=js(r),l=ys(a,r.props);return r.type!==d.Fragment&&(l.ref=o?It(o,i):i),d.cloneElement(r,l)}return d.Children.count(r)>1?d.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var bs=Symbol("radix.slottable");function vs(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===bs}function ys(e,n){const s={...n};for(const o in n){const r=e[o],a=n[o];/^on[A-Z]/.test(o)?r&&a?s[o]=(...l)=>{const g=a(...l);return r(...l),g}:r&&(s[o]=r):o==="style"?s[o]={...r,...a}:o==="className"&&(s[o]=[r,a].filter(Boolean).join(" "))}return{...e,...s}}function js(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?e.props.ref:e.props.ref||e.ref)}var ws=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],fe=ws.reduce((e,n)=>{const s=Be(`Primitive.${n}`),o=d.forwardRef((r,a)=>{const{asChild:i,...l}=r,g=i?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(g,{...l,ref:a})});return o.displayName=`Primitive.${n}`,{...e,[n]:o}},{});function ae(e,n,{checkForDefaultPrevented:s=!0}={}){return function(r){if(e?.(r),s===!1||!r.defaultPrevented)return n?.(r)}}function Cs(e){const n=e+"CollectionProvider",[s,o]=qe(n),[r,a]=s(n,{collectionRef:{current:null},itemMap:new Map}),i=x=>{const{scope:v,children:y}=x,M=_.useRef(null),w=_.useRef(new Map).current;return t.jsx(r,{scope:v,itemMap:w,collectionRef:M,children:y})};i.displayName=n;const l=e+"CollectionSlot",g=Be(l),p=_.forwardRef((x,v)=>{const{scope:y,children:M}=x,w=a(l,y),D=_e(v,w.collectionRef);return t.jsx(g,{ref:D,children:M})});p.displayName=l;const c=e+"CollectionItemSlot",f="data-radix-collection-item",j=Be(c),m=_.forwardRef((x,v)=>{const{scope:y,children:M,...w}=x,D=_.useRef(null),R=_e(v,D),P=a(c,y);return _.useEffect(()=>(P.itemMap.set(D,{ref:D,...w}),()=>void P.itemMap.delete(D))),t.jsx(j,{[f]:"",ref:R,children:M})});m.displayName=c;function h(x){const v=a(e+"CollectionConsumer",x);return _.useCallback(()=>{const M=v.collectionRef.current;if(!M)return[];const w=Array.from(M.querySelectorAll(`[${f}]`));return Array.from(v.itemMap.values()).sort((P,B)=>w.indexOf(P.ref.current)-w.indexOf(B.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:i,Slot:p,ItemSlot:m},h,o]}var St=globalThis?.document?d.useLayoutEffect:()=>{},Ms=pt[" useId ".trim().toString()]||(()=>{}),Ds=0;function Is(e){const[n,s]=d.useState(Ms());return St(()=>{s(o=>o??String(Ds++))},[e]),n?`radix-${n}`:""}function Ss(e){const n=d.useRef(e);return d.useEffect(()=>{n.current=e}),d.useMemo(()=>(...s)=>n.current?.(...s),[])}var Rs=pt[" useInsertionEffect ".trim().toString()]||St;function $e({prop:e,defaultProp:n,onChange:s=()=>{},caller:o}){const[r,a,i]=$s({defaultProp:n,onChange:s}),l=e!==void 0,g=l?e:r;{const c=d.useRef(e!==void 0);d.useEffect(()=>{const f=c.current;f!==l&&console.warn(`${o} is changing from ${f?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=l},[l,o])}const p=d.useCallback(c=>{if(l){const f=Ts(c)?c(e):c;f!==e&&i.current?.(f)}else a(c)},[l,e,a,i]);return[g,p]}function $s({defaultProp:e,onChange:n}){const[s,o]=d.useState(e),r=d.useRef(s),a=d.useRef(n);return Rs(()=>{a.current=n},[n]),d.useEffect(()=>{r.current!==s&&(a.current?.(s),r.current=s)},[s,r]),[s,o,a]}function Ts(e){return typeof e=="function"}var As=d.createContext(void 0);function Rt(e){const n=d.useContext(As);return e||n||"ltr"}var Fe="rovingFocusGroup.onEntryFocus",Es={bubbles:!1,cancelable:!0},me="RovingFocusGroup",[Ge,$t,Fs]=Cs(me),[ks,Tt]=qe(me,[Fs]),[Ps,Ls]=ks(me),At=d.forwardRef((e,n)=>t.jsx(Ge.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(Ge.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(Ns,{...e,ref:n})})}));At.displayName=me;var Ns=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,orientation:o,loop:r=!1,dir:a,currentTabStopId:i,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:g,onEntryFocus:p,preventScrollOnEntryFocus:c=!1,...f}=e,j=d.useRef(null),m=_e(n,j),h=Rt(a),[x,v]=$e({prop:i,defaultProp:l??null,onChange:g,caller:me}),[y,M]=d.useState(!1),w=Ss(p),D=$t(s),R=d.useRef(!1),[P,B]=d.useState(0);return d.useEffect(()=>{const A=j.current;if(A)return A.addEventListener(Fe,w),()=>A.removeEventListener(Fe,w)},[w]),t.jsx(Ps,{scope:s,orientation:o,dir:h,loop:r,currentTabStopId:x,onItemFocus:d.useCallback(A=>v(A),[v]),onItemShiftTab:d.useCallback(()=>M(!0),[]),onFocusableItemAdd:d.useCallback(()=>B(A=>A+1),[]),onFocusableItemRemove:d.useCallback(()=>B(A=>A-1),[]),children:t.jsx(fe.div,{tabIndex:y||P===0?-1:0,"data-orientation":o,...f,ref:m,style:{outline:"none",...e.style},onMouseDown:ae(e.onMouseDown,()=>{R.current=!0}),onFocus:ae(e.onFocus,A=>{const G=!R.current;if(A.target===A.currentTarget&&G&&!y){const k=new CustomEvent(Fe,Es);if(A.currentTarget.dispatchEvent(k),!k.defaultPrevented){const O=D().filter(q=>q.focusable),$=O.find(q=>q.active),L=O.find(q=>q.id===x),Y=[$,L,...O].filter(Boolean).map(q=>q.ref.current);kt(Y,c)}}R.current=!1}),onBlur:ae(e.onBlur,()=>M(!1))})})}),Et="RovingFocusGroupItem",Ft=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,focusable:o=!0,active:r=!1,tabStopId:a,children:i,...l}=e,g=Is(),p=a||g,c=Ls(Et,s),f=c.currentTabStopId===p,j=$t(s),{onFocusableItemAdd:m,onFocusableItemRemove:h,currentTabStopId:x}=c;return d.useEffect(()=>{if(o)return m(),()=>h()},[o,m,h]),t.jsx(Ge.ItemSlot,{scope:s,id:p,focusable:o,active:r,children:t.jsx(fe.span,{tabIndex:f?0:-1,"data-orientation":c.orientation,...l,ref:n,onMouseDown:ae(e.onMouseDown,v=>{o?c.onItemFocus(p):v.preventDefault()}),onFocus:ae(e.onFocus,()=>c.onItemFocus(p)),onKeyDown:ae(e.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){c.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const y=Bs(v,c.orientation,c.dir);if(y!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||v.shiftKey)return;v.preventDefault();let w=j().filter(D=>D.focusable).map(D=>D.ref.current);if(y==="last")w.reverse();else if(y==="prev"||y==="next"){y==="prev"&&w.reverse();const D=w.indexOf(v.currentTarget);w=c.loop?Gs(w,D+1):w.slice(D+1)}setTimeout(()=>kt(w))}}),children:typeof i=="function"?i({isCurrentTabStop:f,hasTabStop:x!=null}):i})})});Ft.displayName=Et;var Os={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _s(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Bs(e,n,s){const o=_s(e.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Os[o]}function kt(e,n=!1){const s=document.activeElement;for(const o of e)if(o===s||(o.focus({preventScroll:n}),document.activeElement!==s))return}function Gs(e,n){return e.map((s,o)=>e[(n+o)%e.length])}var Us=At,zs=Ft,Pt="Toggle",Lt=d.forwardRef((e,n)=>{const{pressed:s,defaultPressed:o,onPressedChange:r,...a}=e,[i,l]=$e({prop:s,onChange:r,defaultProp:o??!1,caller:Pt});return t.jsx(fe.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":e.disabled?"":void 0,...a,ref:n,onClick:ae(e.onClick,()=>{e.disabled||l(!i)})})});Lt.displayName=Pt;var te="ToggleGroup",[Nt]=qe(te,[Tt]),Ot=Tt(),Ke=_.forwardRef((e,n)=>{const{type:s,...o}=e;if(s==="single"){const r=o;return t.jsx(Vs,{...r,ref:n})}if(s==="multiple"){const r=o;return t.jsx(Hs,{...r,ref:n})}throw new Error(`Missing prop \`type\` expected on \`${te}\``)});Ke.displayName=te;var[_t,Bt]=Nt(te),Vs=_.forwardRef((e,n)=>{const{value:s,defaultValue:o,onValueChange:r=()=>{},...a}=e,[i,l]=$e({prop:s,defaultProp:o??"",onChange:r,caller:te});return t.jsx(_t,{scope:e.__scopeToggleGroup,type:"single",value:_.useMemo(()=>i?[i]:[],[i]),onItemActivate:l,onItemDeactivate:_.useCallback(()=>l(""),[l]),children:t.jsx(Gt,{...a,ref:n})})}),Hs=_.forwardRef((e,n)=>{const{value:s,defaultValue:o,onValueChange:r=()=>{},...a}=e,[i,l]=$e({prop:s,defaultProp:o??[],onChange:r,caller:te}),g=_.useCallback(c=>l((f=[])=>[...f,c]),[l]),p=_.useCallback(c=>l((f=[])=>f.filter(j=>j!==c)),[l]);return t.jsx(_t,{scope:e.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:g,onItemDeactivate:p,children:t.jsx(Gt,{...a,ref:n})})});Ke.displayName=te;var[Ws,qs]=Nt(te),Gt=_.forwardRef((e,n)=>{const{__scopeToggleGroup:s,disabled:o=!1,rovingFocus:r=!0,orientation:a,dir:i,loop:l=!0,...g}=e,p=Ot(s),c=Rt(i),f={role:"group",dir:c,...g};return t.jsx(Ws,{scope:s,rovingFocus:r,disabled:o,children:r?t.jsx(Us,{asChild:!0,...p,orientation:a,dir:c,loop:l,children:t.jsx(fe.div,{...f,ref:n})}):t.jsx(fe.div,{...f,ref:n})})}),Ie="ToggleGroupItem",Ut=_.forwardRef((e,n)=>{const s=Bt(Ie,e.__scopeToggleGroup),o=qs(Ie,e.__scopeToggleGroup),r=Ot(e.__scopeToggleGroup),a=s.value.includes(e.value),i=o.disabled||e.disabled,l={...e,pressed:a,disabled:i},g=_.useRef(null);return o.rovingFocus?t.jsx(zs,{asChild:!0,...r,focusable:!i,active:a,ref:g,children:t.jsx(ot,{...l,ref:n})}):t.jsx(ot,{...l,ref:n})});Ut.displayName=Ie;var ot=_.forwardRef((e,n)=>{const{__scopeToggleGroup:s,value:o,...r}=e,a=Bt(Ie,s),i={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l=a.type==="single"?i:void 0;return t.jsx(Lt,{...l,...r,ref:n,onPressedChange:g=>{g?a.onItemActivate(o):a.onItemDeactivate(o)}})}),Ks=Ke,Qs=Ut;const Ys=e=>typeof e=="object"&&e!==null&&"data"in e,rt=e=>Ys(e)?e.data:e,Zs=ze.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(n={})=>{const{parentId:s}=n,o={sort:"name:ASC"};return s!=null?o.filters={$and:[{parent:{id:s}}]}:o.filters={$and:[{parent:{id:{$null:!0}}}]},{url:"/upload/folders",method:"GET",config:{params:o}}},transformResponse:n=>rt(n),providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:n=>({url:"/upload/folders",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:n=>n?.data??n??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:n=>rt(n??[]),providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:n})=>({url:`/upload/folders/${n}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:n=>n.data,providesTags:(n,s,{id:o})=>[{type:"Folder",id:o}]}),bulkMove:e.mutation({query:({fileIds:n=[],folderIds:s=[],destinationFolderId:o})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:n,folderIds:s,destinationFolderId:o}}),transformResponse:n=>n.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:Xs,useGetFoldersQuery:Js,useGetFolderQuery:zt,useGetAllFoldersQuery:eo,useGetFolderStructureQuery:Qe,useBulkMoveMutation:to}=Zs,no=ze.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(n={})=>{const{folder:s,...o}=n,r={...o};return s!=null?r.filters={$and:[{folder:{id:s}}]}:r.filters={$and:[{folder:{id:{$null:!0}}}]},{url:"/upload/files",method:"GET",config:{params:r}}},transformResponse:n=>n,providesTags:n=>n?[...n.results.map(({id:s})=>({type:"Asset",id:s})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:n=>({url:`/upload/files/${n}`,method:"GET"}),providesTags:(n,s,o)=>[{type:"Asset",id:o}]}),updateAsset:e.mutation({query:({id:n,fileInfo:s})=>{const o=new FormData;return o.append("fileInfo",JSON.stringify(s)),{url:"/upload",method:"POST",data:o,config:{params:{id:n}}}},invalidatesTags:(n,s,{id:o})=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:n,file:s,fileInfo:o})=>{const r=new FormData;return r.append("files",s),o&&r.append("fileInfo",JSON.stringify(o)),{url:"/upload",method:"POST",data:r,config:{params:{id:n}}}},invalidatesTags:(n,s,{id:o})=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:n=>({url:`/upload/files/${n}`,method:"DELETE"}),invalidatesTags:(n,s,o)=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"}]})})}),{useGetAssetsQuery:Vt,useGetAssetQuery:so,useUpdateAssetMutation:oo,useReplaceAssetMutation:ro,useDeleteAssetMutation:ao}=no,io=ze.injectEndpoints({endpoints:e=>({getSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetSettingsQuery:lo}=io,co=async(e,n)=>{const o=await(await fetch(e)).blob(),r=window.URL.createObjectURL(o),a=document.createElement("a");a.href=r,a.setAttribute("download",n),a.click(),window.URL.revokeObjectURL(r)},uo={pdf:Mn,csv:Cn,xls:wn,zip:jn},xe=(e,n)=>{const s=ft(n);return e?.includes(ee.Image)?bn:e?.includes(ee.Video)?vn:e?.includes(ee.Audio)?yn:s?uo[s]||Ne:Ne},Ht=e=>{const{formatMessage:n}=T(),{data:s,isLoading:o}=zt({id:e},{skip:e===null}),{data:r,isLoading:a}=Vt({folder:null,pageSize:1},{skip:e!==null}),i=n({id:u("plugin.home"),defaultMessage:"Home"});return e===null?a?{title:i,itemCount:0}:{title:i,itemCount:r?.pagination?.total??0}:o||!s?{title:"",itemCount:0}:{title:s.name,itemCount:s.files?.count??0}},go=1,po=({anchorX:e,anchorY:n,point:s,aspectRatio:o})=>{let r=Math.abs(s.x-e),a=Math.abs(s.y-n);o&&(r/o>=a?a=r/o:r=a*o);const i=s.x<e?e-r:e,l=s.y<n?n-a:n;return{x:i,y:l,width:r,height:a}},fo=()=>{const[e,n]=d.useState({width:0,height:0}),[s,o]=d.useState({x:0,y:0,width:0,height:0}),[r,a]=d.useState(null),i=d.useRef(null),l=d.useCallback(m=>{i.current=m;const h={width:m.naturalWidth,height:m.naturalHeight};n(h),o({x:0,y:0,width:h.width,height:h.height})},[]),g=(m,h,x)=>Math.min(x,Math.max(h,m)),p=d.useCallback(m=>{o(h=>{const x=e.width-h.x,v=e.height-h.y;let y=m.width!==void 0?g(m.width,1,x):h.width,M=m.height!==void 0?g(m.height,1,v):h.height;return r&&(m.width!==void 0?M=g(y/r,1,v):m.height!==void 0&&(y=g(M*r,1,x))),{...h,width:y,height:M}})},[e.width,e.height,r]),c=d.useCallback(m=>{o(h=>{const x=m.x!==void 0?g(m.x,0,e.width-h.width):h.x,v=m.y!==void 0?g(m.y,0,e.height-h.height):h.y;return{...h,x,y:v}})},[e.width,e.height]),f=d.useCallback(m=>{a(m),m&&o(h=>{const x=e.width-h.x,v=e.height-h.y;let y=h.width,M=y/m;return M>v&&(M=v,y=M*m),y>x&&(y=x,M=y/m),{...h,width:Math.round(y),height:Math.round(M)}})},[e.width,e.height]),j=d.useCallback((m,h,x)=>new Promise((v,y)=>{const M=i.current;if(!M){y(new Error("Image not ready: call init() before produceFile()."));return}const w=document.createElement("canvas");w.width=Math.max(1,Math.round(s.width)),w.height=Math.max(1,Math.round(s.height));const D=w.getContext("2d");if(!D){y(new Error("Could not get a 2D canvas context to crop the image."));return}D.drawImage(M,s.x,s.y,s.width,s.height,0,0,w.width,w.height),w.toBlob(R=>{if(!R){y(new Error("Could not export the cropped image to a blob."));return}v(new File([R],m,{type:h,lastModified:x?new Date(x).getTime():Date.now()}))},h,go)}),[s.x,s.y,s.width,s.height]);return{init:l,crop:s,naturalSize:e,aspectRatio:r,setCropSize:p,setCropPosition:c,setAspectRatio:f,produceFile:j,width:Math.round(s.width),height:Math.round(s.height)}},ve=5.6,ke=12,ho=b(C)`
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
`,mo=b(C)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,xo=b(E)`
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
`,bo=b.div`
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
`,vo=b.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
`,ye=b.button`
  position: absolute;
  width: ${ke}px;
  height: ${ke}px;
  margin: -${ke/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
`,yo=b.button`
  position: absolute;
  width: ${ve}rem;
  height: ${ve}rem;
  margin: ${-ve/2}rem 0 0 ${-ve/2}rem;
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
`,jo=b(E)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[1]};
  bottom: ${({theme:e})=>e.spaces[1]};
  width: 100%;
  max-width: 32rem;
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral900};
  z-index: 20;
`,wo=b(C)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,je=b(V.Root)`
  flex-direction: row;
  align-items: center;
`,we=b(Tn)`
  width: 8.4rem;
`,at=b(V.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,Co=b(E)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,Mo=()=>t.jsx(Co,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),Do=({asset:e,isBusy:n=!1,onClose:s,onApply:o,onSaveAsCopy:r})=>{const{formatMessage:a}=T(),{toggleNotification:i}=Se(),g=Dn().colorScheme==="dark",p=g?"neutral1000":"neutral0",c=g?"neutral600":"neutral200",f=d.useRef(null),j=d.useRef(null),{init:m,crop:h,naturalSize:x,aspectRatio:v,setCropSize:y,setCropPosition:M,setAspectRatio:w,produceFile:D,width:R,height:P}=fo(),[B,A]=d.useState(!1),[G,k]=d.useState(e.focalPoint??{x:50,y:50}),O=ie(e.url),$=e.updatedAt?new Date(e.updatedAt).getTime():void 0,L=$!==void 0?`${O}${O.includes("?")?"&":"?"}v=${$}`:O,U=()=>{f.current&&m(f.current)},Y=S=>{const F=j.current?.getBoundingClientRect();if(!F||!x.width||!x.height)return null;const N=x.width/F.width,Z=x.height/F.height;return{x:(S.clientX-F.left)*N,y:(S.clientY-F.top)*Z}},q=S=>{S.preventDefault(),S.stopPropagation();const F=Y(S);if(!F)return;const N={...h},Z=de=>{const J=Y(de);J&&M({x:N.x+(J.x-F.x),y:N.y+(J.y-F.y)})},X=()=>{window.removeEventListener("pointermove",Z),window.removeEventListener("pointerup",X)};window.addEventListener("pointermove",Z),window.addEventListener("pointerup",X)},se=S=>F=>{F.preventDefault(),F.stopPropagation();const N={...h},Z=S==="tl"||S==="bl"?N.x+N.width:N.x,X=S==="tl"||S==="tr"?N.y+N.height:N.y,de=pn=>{const Je=Y(pn);if(!Je)return;const{x:fn,y:hn,width:mn,height:xn}=po({anchorX:Z,anchorY:X,point:Je,aspectRatio:B?v:null});M({x:fn,y:hn}),y({width:mn,height:xn})},J=()=>{window.removeEventListener("pointermove",de),window.removeEventListener("pointerup",J)};window.addEventListener("pointermove",de),window.addEventListener("pointerup",J)},dn=()=>{A(S=>{const F=!S;return w(F&&P?R/P:null),F})},cn=S=>{S.preventDefault(),S.stopPropagation();const F=Z=>{const X=Y(Z);if(!X)return;const de=(X.x-h.x)/h.width*100,J=(X.y-h.y)/h.height*100;k({x:Math.round(Math.min(100,Math.max(0,de))),y:Math.round(Math.min(100,Math.max(0,J)))})},N=()=>{window.removeEventListener("pointermove",F),window.removeEventListener("pointerup",N)};window.addEventListener("pointermove",F),window.addEventListener("pointerup",N)},un=Math.round(G.x/100*R),gn=Math.round(G.y/100*P),Ze=(S,F)=>{const N=S==="x"?R:P;if(!N)return;const Z=Math.min(100,Math.max(0,F/N*100));k(X=>({...X,[S]:Math.round(Z)}))},le=x.width&&x.height?{left:h.x/x.width*100,top:h.y/x.height*100,width:h.width/x.width*100,height:h.height/x.height*100}:null,Te=le!==null,Xe=async S=>{if(!Te)return;let F;try{F=await D(e.name,e.mime??"image/png",e.updatedAt)}catch{i({type:"danger",message:a({id:u("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const N={x:Math.round(G.x),y:Math.round(G.y)};S==="apply"?o(F,N):r(F,N)};return t.jsx(In,{children:t.jsx(Sn,{onEscape:s,children:t.jsxs(ho,{children:[t.jsxs(mo,{alignItems:"center",children:[t.jsx(ht,{"aria-hidden":!0}),t.jsx(I,{variant:"omega",fontWeight:"bold",children:a({id:u("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(xo,{children:[t.jsxs(bo,{ref:j,$aspect:x.width&&x.height?x.width/x.height:void 0,children:[t.jsx("img",{ref:f,src:L,alt:e.name,crossOrigin:"anonymous",onLoad:U,draggable:!1}),le?t.jsxs(vo,{style:{left:`${le.left}%`,top:`${le.top}%`,width:`${le.width}%`,height:`${le.height}%`},onPointerDown:q,children:[t.jsx(ye,{type:"button","aria-label":a({id:u("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:se("tl")}),t.jsx(ye,{type:"button","aria-label":a({id:u("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:se("tr")}),t.jsx(ye,{type:"button","aria-label":a({id:u("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:se("bl")}),t.jsx(ye,{type:"button","aria-label":a({id:u("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:se("br")}),t.jsx(yo,{type:"button","aria-label":a({id:u("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${G.x}%`,top:`${G.y}%`},onPointerDown:cn})]}):null]}),t.jsxs(jo,{children:[t.jsxs(C,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(I,{variant:"omega",fontWeight:"bold",textColor:p,children:a({id:u("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(I,{variant:"pi",textColor:c,children:a({id:u("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(C,{gap:6,alignItems:"center",children:[t.jsxs(C,{alignItems:"center",gap:2,children:[t.jsxs(C,{direction:"column",gap:2,children:[t.jsxs(je,{name:"crop-width",gap:2,children:[t.jsx(at,{textColor:p,children:t.jsx(Rn,{})}),t.jsx(we,{"aria-label":a({id:u("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:R,min:1,max:x.width||void 0,onValueChange:S=>{S!==void 0&&y({width:S})}})]}),t.jsxs(je,{name:"crop-height",gap:2,children:[t.jsx(at,{textColor:p,children:t.jsx($n,{})}),t.jsx(we,{"aria-label":a({id:u("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:P,min:1,max:x.height||void 0,onValueChange:S=>{S!==void 0&&y({height:S})}})]})]}),t.jsxs(C,{position:"relative",children:[t.jsx(Q,{label:a({id:u("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:B?"secondary":"ghost",onClick:dn,children:t.jsx(Ve,{})}),t.jsx(Mo,{})]})]}),t.jsxs(C,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(je,{name:"focal-x",gap:2,children:[t.jsx(V.Label,{textColor:p,children:a({id:u("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(we,{"aria-label":a({id:u("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:un,onValueChange:S=>{S!==void 0&&Ze("x",S)}})]}),t.jsxs(je,{name:"focal-y",gap:2,children:[t.jsx(V.Label,{textColor:p,children:a({id:u("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(we,{"aria-label":a({id:u("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:gn,onValueChange:S=>{S!==void 0&&Ze("y",S)}})]})]})]})]})]}),t.jsxs(wo,{alignItems:"center",children:[t.jsx(W,{variant:"tertiary",onClick:s,disabled:n,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(C,{gap:2,children:[t.jsx(W,{variant:"secondary",onClick:()=>Xe("copy"),loading:n,disabled:!Te,children:a({id:u("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(W,{variant:"default",onClick:()=>Xe("apply"),loading:n,disabled:!Te,children:a({id:u("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},ge=b(E)`
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
`,Ce=b(C)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,Io=b.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,So=b(C)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,Ro=b.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,$o=b.audio`
  width: 100%;
`,To=b.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,Ao=b(C)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,Eo=b(C)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,Me=()=>{const{formatMessage:e}=T();return t.jsx(Eo,{justifyContent:"center",alignItems:"center",children:t.jsx(ce,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},Fo=({asset:e,actions:n,isLoading:s=!1})=>{const{formatMessage:o}=T(),{alternativeText:r,ext:a,mime:i,url:l,updatedAt:g,isUrlSigned:p,isLocal:c}=e,f=g&&!p?new Date(g).getTime():void 0,j=w=>!w||f===void 0?w:w.includes("?")?`${w}&v=${f}`:`${w}?v=${f}`,m=j(ie(l)),[h,x]=d.useState(!1);d.useEffect(()=>{x(!1)},[m]);const v=d.useRef(null);if(d.useEffect(()=>{const w=v.current;if(!w)return;const D=()=>{const P=w.parentElement;if(!P)return;const B=P.getBoundingClientRect(),A=w.offsetWidth,G=w.offsetHeight;!A||!G||!B.width||B.height};D();const R=new ResizeObserver(D);return R.observe(w),w.parentElement&&R.observe(w.parentElement),()=>R.disconnect()},[h]),i?.includes(ee.Image)){const w=j(ie(l));if(w)return t.jsxs(ge,{children:[(!h||s)&&t.jsx(Me,{}),n?t.jsx(So,{children:n}):null,t.jsx(Ce,{children:t.jsx(Io,{ref:v,src:w,alt:r||e.name||"",crossOrigin:!c&&p?"anonymous":void 0,onLoad:()=>x(!0),onError:()=>x(!0)})})]})}if(i?.includes(ee.Video)&&m)return t.jsxs(ge,{children:[!h&&t.jsx(Me,{}),t.jsx(Ce,{children:t.jsx(Ro,{src:m,controls:!0,title:e.name,onLoadedData:()=>x(!0),onError:()=>x(!0),children:o({id:u("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(ee.Audio)&&m)return t.jsxs(ge,{children:[!h&&t.jsx(Me,{}),t.jsx(Ce,{children:t.jsx(C,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx($o,{src:m,controls:!0,onLoadedData:()=>x(!0),onError:()=>x(!0)})})})]});if((a?.toLowerCase()==="pdf"||a?.toLowerCase()===".pdf"||i==="application/pdf")&&m)return t.jsxs(ge,{children:[!h&&t.jsx(Me,{}),t.jsx(Ce,{children:t.jsx(To,{src:`${m}#toolbar=0`,title:e.name,onLoad:()=>x(!0)})})]});const M=xe(i,a);return t.jsx(ge,{children:t.jsxs(Ao,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(M,{width:24,height:24}),t.jsx(I,{variant:"pi",children:o({id:u("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},Pe="assetId",Wt=d.createContext(null),qt=()=>{const e=d.useContext(Wt);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},Kt=d.createContext(null),Qt=()=>{const e=d.useContext(Kt);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},Yt=()=>{const[{query:e},n]=mt(),s=e?.[Pe],o=s?parseInt(s,10):null,r=o!==null&&!Number.isNaN(o),[a,i]=d.useState(r),l=d.useRef(null);d.useEffect(()=>{r&&(l.current=o,i(!0))},[r,o]);const g=d.useCallback(f=>{f.target===f.currentTarget&&!r&&i(!1)},[r]),p=d.useCallback(f=>{n({[Pe]:String(f)},"push",!0)},[n]),c=d.useCallback(()=>{n({[Pe]:void 0},"remove",!0)},[n]);return{assetId:r?o:l.current,isVisible:r,shouldRenderDrawer:a,onCloseAnimationEnd:g,openDetails:p,closeDetails:c}},ko=b(C)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,oe=({label:e,value:n})=>t.jsxs(ko,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(I,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(I,{variant:"pi",textColor:"neutral700",children:n??"-"})]}),Po=b(E)`
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
`,Lo=b(E)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,No=b(C)`
  position: absolute;
  inset: 0;
  z-index: 20;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,Oo=e=>e.isDeleting?{id:u("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:u("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:u("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,_o=b(jt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,Le=({name:e,label:n,required:s})=>{const{formatMessage:o}=T(),r=bt(e),a=He("DetailField",g=>g.isSubmitting),i=r.value??"",l=o({id:u("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:n});return t.jsxs(V.Root,{name:e,required:s,children:[t.jsx(V.Label,{children:n}),t.jsx(vt,{value:i,onChange:g=>r.onChange(e,g.target.value),endAction:i?void 0:t.jsx(yt,{label:l,children:t.jsx(_o,{"aria-label":l,role:"img"})}),type:"text",disabled:a})]})},Bo=({label:e,rootLabel:n,folders:s})=>{const o=bt("folder"),r=He("LocationField",a=>a.isSubmitting);return t.jsxs(V.Root,{name:"folder",required:!0,children:[t.jsx(V.Label,{children:e}),t.jsxs(Ln,{value:o.value==null?"":String(o.value),onChange:a=>{const i=a===""?null:Number(a);o.onChange("folder",i)},disabled:r,children:[t.jsx(et,{value:"",children:n}),s.map(a=>t.jsx(et,{value:String(a.id),children:a.name},a.id))]})]})},Go=()=>{const{formatMessage:e}=T(),{deleteAsset:n,isDeleting:s}=Qt(),[o,r]=d.useState(!1),a=async()=>{await n(),r(!1)},i=e({id:u("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(z.Root,{open:o,onOpenChange:r,children:[t.jsx(z.Trigger,{children:t.jsx(Q,{withTooltip:!1,label:i,variant:"danger-light",children:t.jsx(Nn,{})})}),t.jsxs(z.Content,{children:[t.jsx(z.Header,{children:e({id:u("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(z.Body,{icon:t.jsx(jt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:u("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(z.Footer,{children:[t.jsx(z.Cancel,{children:t.jsx(W,{variant:"tertiary",disabled:s,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(z.Action,{children:t.jsx(W,{variant:"danger-light",loading:s,onClick:a,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},Uo=({asset:e})=>{const{formatMessage:n}=T(),{copy:s}=On(),o=qt(),r=async()=>{const a=ie(e.url);if(!a)return;const i=await s(a);o({type:i?"success":"danger",message:n(i?{id:u("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:u("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(Q,{withTooltip:!1,label:n({id:u("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(Ve,{})})},zo=({asset:e})=>{const{formatMessage:n}=T(),s=qt(),[o,r]=d.useState(!1),a=async()=>{const i=ie(e.url);if(i){r(!0);try{await co(i,e.name)}catch{s({type:"danger",message:n({id:u("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(Q,{withTooltip:!1,label:n({id:u("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:a,disabled:o,children:t.jsx(_n,{})})},Vo=()=>{const{formatMessage:e}=T(),{replaceAsset:n,isReplacing:s}=Qt(),o=d.useRef(null),[r,a]=d.useState(!1),{data:i}=lo(),l=i?.data?.aiMetadata??!1,g=()=>{a(!0)},p=()=>{a(!1),o.current?.click()},c=async f=>{const j=f.target.files?.[0];f.target.value="",j&&await n(j)};return t.jsxs(t.Fragment,{children:[t.jsx(he,{children:t.jsx("input",{ref:o,type:"file",multiple:!1,onChange:c,"aria-hidden":!0,tabIndex:-1})}),t.jsx(Q,{withTooltip:!1,label:e({id:u("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:g,disabled:s,children:t.jsx(Bn,{})}),t.jsx(z.Root,{open:r,onOpenChange:a,children:t.jsxs(z.Content,{children:[t.jsx(z.Header,{children:e({id:u("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(z.Body,{textAlign:"center",children:t.jsxs(C,{direction:"column",textAlign:"center",children:[t.jsx(I,{variant:"omega",children:e({id:u("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),l?t.jsx(I,{variant:"omega",children:e({id:u("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(z.Footer,{children:[t.jsx(z.Cancel,{children:t.jsx(W,{variant:"tertiary",fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(z.Action,{children:t.jsx(W,{variant:"secondary",onClick:p,fullWidth:!0,children:e({id:u("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},Ho=({onCrop:e})=>{const{formatMessage:n}=T(),s=He("AssetImageActions",o=>o.isSubmitting);return t.jsxs(C,{direction:"column",gap:2,children:[t.jsx(Q,{withTooltip:!1,label:n({id:u("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:s||!e,children:t.jsx(ht,{})}),t.jsx(Vo,{})]})},Wo=({asset:e,closeDetails:n})=>{const{formatMessage:s,formatDate:o}=T(),{data:r=[]}=eo(),{toggleNotification:a}=Se(),[i]=oo(),[l,{isLoading:g}]=ro(),[p,{isLoading:c}]=ao(),[f,{isLoading:j}]=Fn(),[m,h]=d.useState(!1),[x,v]=d.useState(null);d.useEffect(()=>{if(!x)return;const $=window.setTimeout(()=>v(null),5e3);return()=>window.clearTimeout($)},[x]);const y=d.useCallback($=>v($),[]),M=e.mime?.includes(ee.Image),w={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},D=async $=>{const L={name:$.name,caption:$.caption,alternativeText:$.alternativeText,folder:$.folder};if("error"in await i({id:e.id,fileInfo:L})){y({type:"danger",message:s({id:u("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}y({type:"success",message:s({id:u("asset-details.update.success"),defaultMessage:"File updated"})})},{title:R}=Ht(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),P=async $=>{const L=await l({id:e.id,file:$});if("error"in L){const U=L.error,Y=U?.data?.error?.message??U?.data?.message??s({id:u("asset-details.replace.error"),defaultMessage:"Failed to replace the file."});y({type:"danger",message:Y});return}y({type:"success",message:s({id:u("asset-details.replace.success"),defaultMessage:"File replaced."})})},B=async()=>{const $=await p(e.id);if("error"in $){const L=$.error,U=L?.data?.error?.message??L?.data?.message??s({id:u("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."});y({type:"danger",message:U});return}a({type:"success",message:s({id:u("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:R})}),n()},A=()=>{y({type:"danger",message:s({id:u("asset-details.crop.error"),defaultMessage:"Failed to crop the file."})})},G=async($,L)=>{if(h(!1),"error"in await l({id:e.id,file:$,fileInfo:{focalPoint:L}})){A();return}y({type:"success",message:s({id:u("asset-details.crop.success"),defaultMessage:"File cropped."})})},k=async($,L)=>{if(h(!1),"error"in await f({file:$,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:w.folder,focalPoint:L}})){A();return}y({type:"success",message:s({id:u("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},O=d.useMemo(()=>({replaceAsset:P,deleteAsset:B,isReplacing:g,isDeleting:c}),[g,c]);return t.jsx(Wt.Provider,{value:y,children:t.jsx(Kt.Provider,{value:O,children:t.jsx(Po,{children:t.jsx(kn,{method:"POST",initialValues:w,onSubmit:D,children:({modified:$,isSubmitting:L,values:U,resetForm:Y})=>{const q=(U.name??"").trim()==="",se=Oo({isDeleting:c,isReplacing:g,isCropCopying:j});return t.jsxs(t.Fragment,{children:[t.jsx(Pn,{onProceed:Y}),m&&M?t.jsx(Do,{asset:e,onClose:()=>h(!1),onApply:G,onSaveAsCopy:k}):null,se?t.jsx(No,{children:t.jsx(ce,{children:s(se)})}):null,x?t.jsx(Lo,{children:t.jsx(xt,{variant:x.type==="success"?"success":"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:()=>v(null),children:x.message})}):null,t.jsxs(re.ScrollableContent,{children:[t.jsx(Fo,{asset:e,actions:M?t.jsx(Ho,{onCrop:()=>h(!0)}):null}),t.jsxs(C,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(I,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:s({id:u("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(C,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(oe,{label:s({id:u("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(oe,{label:s({id:u("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(oe,{label:s({id:u("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?is({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(oe,{label:s({id:u("asset-details.size"),defaultMessage:"Size"}),value:e.size?Oe(e.size,1):null}),M&&(e.width!=null||e.height!=null)&&t.jsx(oe,{label:s({id:u("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(oe,{label:s({id:u("asset-details.extension"),defaultMessage:"Extension"}),value:ft(e.ext)}),t.jsx(oe,{label:s({id:u("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(Le,{name:"name",label:s({id:u("asset-details.fileName"),defaultMessage:"File name"}),required:!0}),t.jsx(Bo,{label:s({id:u("asset-details.location"),defaultMessage:"Location"}),rootLabel:s({id:u("plugin.home"),defaultMessage:"Home"}),folders:r}),M&&t.jsxs(t.Fragment,{children:[t.jsx(Le,{name:"caption",label:s({id:u("asset-details.caption"),defaultMessage:"Caption"})}),t.jsx(Le,{name:"alternativeText",label:s({id:u("asset-details.alternativeText"),defaultMessage:"Alternative text"})})]})]})]}),t.jsxs(C,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(C,{gap:2,children:[t.jsx(Go,{}),t.jsx(Uo,{asset:e}),t.jsx(zo,{asset:e})]}),t.jsx(W,{type:"submit",variant:"default",loading:L,disabled:!$||L||q,children:s({id:u("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},qo=({asset:e,closeDetails:n})=>{const s=e?xe(e.mime,e.ext):An;return t.jsxs(C,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(s,{width:20,height:20}),t.jsx(re.Title,{asChild:!0,children:t.jsx(I,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(E,{marginLeft:"auto",children:t.jsx(re.CloseButton,{onClose:n,children:t.jsx(En,{})})})]})},Ko=({assetId:e,closeDetails:n})=>{const{formatMessage:s}=T(),{data:o,isLoading:r,error:a}=so(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx(C,{justifyContent:"center",padding:8,children:t.jsx(ce,{children:s({id:"app.loading",defaultMessage:"Loading..."})})}):a||!o?t.jsx(C,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(xt,{variant:"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:n,children:s({id:u("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(qo,{asset:o,closeDetails:n}),t.jsx(Wo,{asset:o,closeDetails:n})]})},Qo=()=>{const{formatMessage:e}=T(),{assetId:n,isVisible:s,shouldRenderDrawer:o,onCloseAnimationEnd:r,closeDetails:a}=Yt();return!o||n===null?null:t.jsxs(re.Root,{isVisible:s,onClose:a,children:[t.jsx("div",{children:t.jsxs(he,{children:[t.jsx(re.Title,{children:e({id:u("asset-details.title"),defaultMessage:"File details"})}),t.jsx(re.Description,{children:e({id:u("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(re.Body,{animationDirection:"left",width:"41.6rem",height:"100vh",onAnimationEnd:r,children:t.jsx(Ko,{assetId:n,closeDetails:a})})]})},Yo=e=>{if(!e)return null;const n=Number(e);return Number.isFinite(n)?n:null},Ye=()=>{const[{query:e},n]=mt(),s=Yo(e?.folder),o=i=>{n({folder:String(i.id)})},r=d.useCallback(()=>{n({folder:""},"remove")},[n]);return d.useEffect(()=>{e?.folder&&s===null&&r()},[e?.folder,s,r]),{currentFolderId:s,navigateToFolder:o,navigateToRoot:r,navigateToFolderId:i=>{i==null?r():n({folder:String(i)})}}},Zo=e=>{const n=[],s=[];for(const o of e)o.kind==="file"?n.push(o.id):s.push(o.id);return{fileIds:n,folderIds:s}},Zt=(e,n)=>{for(const s of e){if(s.id===n)return s;const o=Zt(s.children,n);if(o)return o}return null},Xo=e=>{const n=new Set,s=o=>{for(const r of o.children)r.id!=null&&n.add(r.id),s(r)};return s(e),n},Jo=(e,n,s)=>{if(n===s)return!0;const o=Zt(e,n);return o?Xo(o).has(s):!1},Ue=({items:e,targetFolderId:n,folderStructure:s})=>{if(e.length===0)return!1;const o=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(o.has(n))return!1;for(const r of o)if(Jo(s,r,n))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===n||r.kind==="folder"&&r.parentId===n)return!1;return!0},er=e=>typeof e=="string"&&e.length>0,tr=(e,n)=>{if(!e||typeof e!="object")return n;const s=e,o=[s.data?.error?.message,s.data?.message,s.message];for(const r of o)if(er(r))return r;return n},nr=e=>`file:${e}`,sr=e=>`folder:${e}`,or=e=>`folder-target:${e}`,it=e=>{if(typeof e!="string")return null;const n=/^folder-target:(\d+)$/.exec(e);return n?Number(n[1]):null},rr=b(C)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,ar=({item:e})=>{const n=e.kind==="folder"?ue:Ne;return t.jsxs(rr,{children:[t.jsx(n,{width:20,height:20}),t.jsx(I,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})},Xt=d.createContext(null),ne=()=>d.useContext(Xt),lt=e=>e?[e]:[],ir=({children:e})=>{const{formatMessage:n}=T(),{toggleNotification:s}=Se(),{data:o=[]}=Qe(),[r,{isLoading:a}]=to(),[i,l]=d.useState(null),[g,p]=d.useState(""),c=d.useCallback(y=>{p(""),requestAnimationFrame(()=>p(y))},[]),f=ls(ds(ps,{activationConstraint:{distance:8}})),j=d.useMemo(()=>({isInternalDragActive:i!==null,isMovePending:a}),[i,a]),m=d.useCallback(y=>{const M=y.active.data.current;l(M??null)},[]),h=d.useCallback(async y=>{const{active:M,over:w}=y;if(l(null),a||!w)return;const D=it(w.id),R=M.data.current;if(D==null||!R)return;const P=lt(R);if(!Ue({items:P,targetFolderId:D,folderStructure:o}))return;const B=Zo(P),A=n({id:u("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}),G=n({id:u("modal.move.error-label"),defaultMessage:"An error occurred while moving the elements."});try{await r({...B,destinationFolderId:D}).unwrap(),c(A),s({type:"success",message:A})}catch(k){const O=tr(k,G);c(n({id:u("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:O})),s({type:"danger",message:O})}},[c,r,o,n,a,s]),x=d.useCallback(()=>{l(null)},[]),v=d.useMemo(()=>({onDragStart:({active:y})=>{const M=y.data.current;return M?n({id:u("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:M.name}):""},onDragOver:()=>"",onDragEnd:({active:y,over:M})=>{if(!M)return n({id:u("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const w=it(M.id),D=y.data.current;if(w==null||!D)return"";const R=lt(D);return Ue({items:R,targetFolderId:w,folderStructure:o})?"":n({id:u("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>n({id:u("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[o,n]);return t.jsx(Xt.Provider,{value:j,children:t.jsxs(cs,{sensors:f,collisionDetection:us,onDragStart:m,onDragEnd:h,onDragCancel:x,accessibility:{announcements:v},children:[t.jsx(he,{"aria-live":"polite","aria-atomic":"true",children:g}),t.jsx(E,{position:"relative",children:e}),t.jsx(gs,{dropAnimation:null,children:i?t.jsx(ar,{item:i}):null})]})})},Jt=e=>{const{isMovePending:n}=ne()??{isMovePending:!1},s=d.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:e.folder==null?null:typeof e.folder=="number"?e.folder:Number(e.folder)||null}),[e.folder,e.id,e.name]);return Dt({id:nr(e.id),data:s,disabled:n})},en=e=>{const{isMovePending:n}=ne()??{isMovePending:!1},{active:s}=fs(),{data:o=[]}=Qe(),r=typeof e.parent=="object"&&e.parent!=null?e.parent.id??null:e.parent??null,a=d.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),i=d.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),l=Dt({id:sr(e.id),data:a,disabled:n}),g=hs({id:or(e.id),data:i,disabled:n}),p=s?.data.current,c=d.useMemo(()=>!p||p.id===e.id&&p.kind==="folder"?!1:Ue({items:[p],targetFolderId:e.id,folderStructure:o}),[p,e.id,o]),f=g.isOver,j=f&&c,m=f&&!c&&s!=null;return{dragData:a,draggable:l,droppable:g,isDragging:l.isDragging,showValidDropHighlight:j,showInvalidDropCursor:m}},lr=b(Un)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 8px;
  overflow: hidden;
  cursor: ${({$isMovePending:e})=>e?"wait":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,dr=b(E)`
  grid-column: 1 / -1;
`,cr=b(C)`
  width: 100%;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`}; // 8px 12px
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]}; // 8px
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isInvalidDropTarget:n})=>e?"wait":n?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  transition: background 0.2s;

  ${({$isValidDropTarget:e,theme:n})=>e&&wt`
      background: ${n.colors.primary100};
      border: 1px dashed ${n.colors.primary600};
    `}

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,ur=b(C)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,gr=b(I)`
  flex: 1;
  min-width: 0;
`,pr=({folder:e})=>{const{formatMessage:n}=T(),{navigateToFolder:s}=Ye(),{isMovePending:o}=ne()??{isMovePending:!1},{draggable:{attributes:r,listeners:a,setNodeRef:i,isDragging:l},droppable:{setNodeRef:g},showValidDropHighlight:p,showInvalidDropCursor:c}=en(e),f=m=>{i(m),g(m)},j=m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),s(e))};return t.jsxs(cr,{ref:f,...r,...a,$isDragging:l,$isMovePending:o,$isValidDropTarget:p,$isInvalidDropTarget:c,onClick:()=>s(e),onKeyDown:j,role:"listitem",tabIndex:0,children:[t.jsx(ur,{children:t.jsx(ue,{width:20,height:20})}),t.jsx(gr,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(Q,{label:n({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:m=>m.stopPropagation(),children:t.jsx(Re,{})})]})},dt=b(E)`
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
`,fr=b.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,hr=b(C)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,mr=({asset:e})=>{const{alternativeText:n,ext:s,formats:o,mime:r,url:a,isLocal:i,isUrlSigned:l}=e;if(r?.includes(ee.Image)){const p=ie(o?.thumbnail?.url)??ie(a);if(p)return t.jsx(dt,{children:t.jsx(fr,{src:p,alt:n||"",crossOrigin:!i&&l?"anonymous":void 0,draggable:!1,onDragStart:c=>c.preventDefault()})})}const g=xe(r,s);return t.jsx(dt,{children:t.jsx(hr,{justifyContent:"center",alignItems:"center",children:t.jsx(g,{width:48,height:48})})})},xr=b(zn)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,br=b(C)`
  min-width: 0;
  width: 100%;
`,vr=b(C)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,yr=b(I)`
  flex: 1;
  min-width: 0;
`,jr=({asset:e,onAssetItemClick:n})=>{const{formatMessage:s}=T(),o=xe(e.mime,e.ext),{isMovePending:r}=ne()??{isMovePending:!1},{attributes:a,listeners:i,setNodeRef:l,isDragging:g}=Jt(e),p=c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),n(e.id))};return t.jsxs(lr,{ref:l,...a,...i,$isDragging:g,$isMovePending:r,tabIndex:0,role:"listitem",onDragStart:c=>c.preventDefault(),onClick:()=>n(e.id),onKeyDown:p,children:[t.jsx(xr,{children:t.jsx(mr,{asset:e})}),t.jsx(Gn,{children:t.jsxs(br,{alignItems:"center",gap:2,children:[t.jsx(vr,{children:t.jsx(o,{width:20,height:20})}),t.jsx(yr,{textColor:"primary800",ellipsis:!0,children:e.name}),t.jsx(Q,{label:s({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:c=>c.stopPropagation(),children:t.jsx(Re,{})})]})})]})},wr=({assets:e,folders:n=[],onAssetItemClick:s})=>{const{formatMessage:o}=T();return n.length+e.length===0?t.jsx(E,{padding:8,children:t.jsx(I,{textColor:"neutral600",children:o({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(be.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[n.length>0&&t.jsx(dr,{children:t.jsx(be.Root,{gap:4,children:n.map(a=>t.jsx(be.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(pr,{folder:a})},`folder-${a.id}`))})}),e.map(a=>t.jsx(be.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(jr,{asset:a,onAssetItemClick:s})},a.id))]})},Cr={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},pe={GRID:0,TABLE:1},ct=[{name:"name",label:{id:u("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:u("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:u("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:u("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:u("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],Mr=b(Hn)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;
`,Dr=b(Wn)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,ut=b(qn)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,K=b(Ct)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,tn=b.tr`
  height: 48px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isInvalidDropTarget:n})=>e?"wait":n?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

  ${({$isValidDropTarget:e,theme:n})=>e&&wt`
      background: ${n.colors.primary100};
      outline: 1px dashed ${n.colors.primary600};
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
    ${K} {
      border-bottom: 0;
    }
  }
`,Ir=b(Ct)`
  padding: ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Sr=({asset:e})=>{const{ext:n,mime:s}=e,o=xe(s,n);return t.jsx(C,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(o,{width:20,height:20})})},Rr=({asset:e,onAssetItemClick:n})=>{const s=We(),{formatDate:o,formatMessage:r}=T(),{isMovePending:a}=ne()??{isMovePending:!1},{attributes:i,listeners:l,setNodeRef:g,isDragging:p}=Jt(e),c=f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),n(e.id))};return t.jsxs(tn,{ref:g,...i,...l,$isDragging:p,$isMovePending:a,tabIndex:0,role:"row",onDragStart:f=>f.preventDefault(),onClick:()=>n(e.id),onKeyDown:c,children:[t.jsx(K,{children:t.jsxs(C,{gap:3,alignItems:"center",children:[t.jsx(Sr,{asset:e}),t.jsxs(C,{direction:"column",alignItems:"flex-start",children:[t.jsx(I,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name}),s&&t.jsx(I,{textColor:"neutral600",variant:"pi",children:e.size?Oe(e.size,1):"-"})]})]})}),!s&&t.jsxs(t.Fragment,{children:[t.jsx(K,{children:t.jsx(I,{textColor:"neutral600",children:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(K,{children:t.jsx(I,{textColor:"neutral600",children:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(K,{children:t.jsx(I,{textColor:"neutral600",children:e.size?Oe(e.size,1):"-"})})]}),t.jsx(K,{children:t.jsx(C,{justifyContent:"flex-end",children:t.jsx(Q,{label:r({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:f=>f.stopPropagation(),children:t.jsx(Re,{})})})})]})},$r=b(tn)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Tr=({folder:e})=>{const n=We(),{formatDate:s,formatMessage:o}=T(),{navigateToFolder:r}=Ye(),{isMovePending:a}=ne()??{isMovePending:!1},{draggable:{attributes:i,listeners:l,setNodeRef:g,isDragging:p},droppable:{setNodeRef:c},showValidDropHighlight:f,showInvalidDropCursor:j}=en(e),m=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),r(e))};return t.jsxs($r,{ref:h=>{g(h),c(h)},...i,...l,$isDragging:p,$isMovePending:a,$isValidDropTarget:f,$isInvalidDropTarget:j,tabIndex:0,role:"row",onDragStart:h=>h.preventDefault(),onClick:()=>r(e),onKeyDown:m,children:[t.jsx(K,{children:t.jsxs(C,{gap:3,alignItems:"center",children:[t.jsx(C,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(ue,{width:20,height:20})}),t.jsx(I,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(K,{children:t.jsx(I,{textColor:"neutral600",children:e.createdAt?s(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(K,{children:t.jsx(I,{textColor:"neutral600",children:e.updatedAt?s(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(K,{children:t.jsx(I,{textColor:"neutral600",children:"-"})})]}),t.jsx(K,{children:t.jsx(C,{justifyContent:"flex-end",children:t.jsx(Q,{label:o({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:h=>h.stopPropagation(),children:t.jsx(Re,{})})})})]})},Ar=({assets:e,folders:n=[],onAssetItemClick:s})=>{const o=We(),{formatMessage:r}=T(),a=o?ct.filter(l=>l.name==="name"||l.name==="actions"):ct,i=n.length+e.length;return t.jsxs(Mr,{colCount:a.length,rowCount:i+1,children:[t.jsx(Dr,{children:t.jsx(tt,{children:a.map(l=>{const g=r(l.label);return"isVisuallyHidden"in l&&l.isVisuallyHidden?t.jsx(ut,{children:t.jsx(he,{children:r({id:u("table.header.actions"),defaultMessage:"actions"})})},l.name):t.jsx(ut,{children:t.jsx(I,{textColor:"neutral600",variant:"sigma",children:g})},l.name)})})}),t.jsx(Vn,{children:i===0?t.jsx(tt,{children:t.jsx(Ir,{colSpan:a.length,children:t.jsx(I,{textColor:"neutral600",children:r({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})})}):t.jsxs(t.Fragment,{children:[n.map(l=>t.jsx(Tr,{folder:l},`folder-${l.id}`)),e.map(l=>t.jsx(Rr,{asset:l,onAssetItemClick:s},l.id))]})})]})},Er=b(H.Content)`
  max-width: 51.6rem;
`,Fr=({open:e,folderName:n,parentFolderId:s,onClose:o})=>{const{formatMessage:r}=T(),{toggleNotification:a}=Se(),[i,l]=d.useState(""),[g,p]=d.useState(),[c,{isLoading:f}]=Xs();d.useEffect(()=>{e&&(l(""),p(void 0))},[e]);const j=async m=>{m.preventDefault();const h=i.trim();if(!h){p(r({id:u("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{await c({name:h,parent:s}).unwrap(),a({type:"success",message:r({id:u("folder.create.success"),defaultMessage:"Folder has been created"})}),o()}catch(x){const v=x;v?.message?p(v.message):a({type:"danger",message:r({id:u("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(H.Root,{open:e,onOpenChange:o,children:t.jsxs(Er,{children:[t.jsx(H.Header,{children:t.jsx(H.Title,{children:r({id:u("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:n})})}),t.jsxs("form",{onSubmit:j,children:[t.jsx(H.Body,{children:t.jsxs(V.Root,{error:g,name:"name",required:!0,children:[t.jsx(V.Label,{children:r({id:u("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(vt,{value:i,onChange:m=>{l(m.target.value),p(void 0)},autoFocus:!0}),t.jsx(V.Error,{})]})}),t.jsx(H.Footer,{children:t.jsxs(C,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(W,{variant:"tertiary",onClick:o,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(W,{type:"submit",loading:f,children:r({id:u("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},nn=d.createContext(null),kr=b(E)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Pr=({children:e,onDrop:n})=>{const[s,o]=d.useState(!1),r=d.useRef(0),a={isDragging:s};d.useEffect(()=>{const c=()=>{o(!1),r.current=0},f=j=>{j.relatedTarget||(o(!1),r.current=0)};return document.addEventListener("dragend",c),document.addEventListener("dragleave",f),()=>{document.removeEventListener("dragend",c),document.removeEventListener("dragleave",f)}},[]);const i=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),c.dataTransfer.types.includes("Files")&&(r.current+=1,o(!0))},[]),l=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),r.current-=1,r.current<=0&&(o(!1),r.current=0)},[]),g=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),c.dataTransfer.dropEffect="copy"},[]),p=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),o(!1),r.current=0;const{files:f}=c.dataTransfer;f?.length&&n&&n(Array.from(f))},[n]);return t.jsx(nn.Provider,{value:a,children:t.jsx(kr,{"data-testid":"assets-dropzone",onDragEnter:i,onDragLeave:l,onDragOver:g,onDrop:p,children:e})})},sn=()=>{const e=d.useContext(nn);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Lr=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,Nr=b(E)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Lr(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Or=({children:e})=>{const{isDragging:n}=sn(),o=ne()?.isInternalDragActive??!1,r=n&&!o;return t.jsxs(E,{position:"relative",children:[r&&t.jsx(Nr,{}),e]})},_r=b(E)`
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
`,Br=({uploadDropZoneRef:e,folderName:n})=>{const{formatMessage:s}=T(),{isDragging:o}=sn(),a=ne()?.isInternalDragActive??!1,i=o&&!a,[l,g]=d.useState(0);return d.useEffect(()=>{if(!e?.current)return;const p=()=>{const f=e.current?.getBoundingClientRect();f&&g(j=>j!==f.left?f.left:j)};p();const c=new ResizeObserver(p);return c.observe(e.current),()=>c.disconnect()},[e]),i?t.jsxs(_r,{$leftContentWidth:l,children:[t.jsx(I,{textColor:"neutral0",children:s({id:u("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(C,{gap:2,alignItems:"center",children:[t.jsx(ue,{width:20,height:20,fill:"neutral0"}),t.jsx(I,{textColor:"neutral0",fontWeight:"semiBold",children:n})]})]}):null},on=b.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  width: 100%;
  min-height: 3.2rem;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border: 0;
  background: ${({$isActive:e,theme:n})=>e?n.colors.primary100:"transparent"};
  color: ${({$isActive:e,theme:n})=>e?n.colors.primary700:n.colors.neutral800};
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: pointer;
  text-align: left;
  font: inherit;

  &:hover {
    background: ${({$isActive:e,theme:n})=>e?n.colors.primary100:n.colors.neutral100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,rn=(e,n,s=[])=>{for(const o of e){if(o.id===n)return s;if(o.children?.length){const r=o.id!=null?[...s,o.id]:s,a=rn(o.children,n,r);if(a!==null)return a}}return null},Gr=(e,n)=>{const[s,o]=d.useState(()=>new Set);d.useEffect(()=>{if(n==null)return;const i=rn(e,n);!i||i.length===0||o(l=>{const g=new Set(l);let p=!1;for(const c of i)g.has(c)||(g.add(c),p=!0);return p?g:l})},[e,n]);const r=d.useCallback(i=>{o(l=>{const g=new Set(l);return g.has(i)?g.delete(i):g.add(i),g})},[]);return{isExpanded:d.useCallback(i=>s.has(i),[s]),toggleExpanded:r}},Ur=({name:e,isActive:n})=>{const s=d.useRef(null),[o,r]=d.useState(!1);d.useLayoutEffect(()=>{const i=s.current;if(!i)return;const l=()=>{r(i.scrollWidth>i.clientWidth)};l();const g=new ResizeObserver(l);return g.observe(i),()=>g.disconnect()},[e]);const a=t.jsx(I,{ref:s,variant:"omega",fontWeight:n?"semiBold":"regular",ellipsis:!0,children:e});return o?t.jsx(yt,{label:e,children:a}):a},an=b.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,zr=1.6,Vr=b(Mt)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,ln=({node:e,level:n,currentFolderId:s,isExpanded:o,onToggle:r,onSelect:a})=>{const{formatMessage:i}=T();if(e.id==null)return null;const l=e.id,g=e.name??"",p=(e.children?.length??0)>0,c=o(l),f=s===l;return t.jsxs("li",{children:[t.jsxs(C,{alignItems:"center",paddingLeft:`${n*zr}rem`,gap:1,children:[t.jsx(Q,{label:i({id:u(c?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:c?"Collapse {name}":"Expand {name}"},{name:g}),onClick:j=>{j.stopPropagation(),r(l)},variant:"ghost",withTooltip:!1,"aria-expanded":c,children:t.jsx(Vr,{$expanded:c,fill:"neutral500"})}),t.jsx(E,{flex:"1",minWidth:0,children:t.jsx(on,{type:"button",$isActive:f,"aria-current":f?"page":void 0,onClick:()=>a(l),"data-testid":`folder-tree-node-${l}`,"data-folder-id":l,children:t.jsx(Ur,{name:g,isActive:f})})})]}),p&&c&&t.jsx(an,{children:e.children.map(j=>t.jsx(ln,{node:j,level:n+1,currentFolderId:s,isExpanded:o,onToggle:r,onSelect:a},j.id??j.name))})]})},Hr=b(C)`
  /* TODO: reconcile 25.6rem (Figma) with admin WIDTH_SIDE_NAVIGATION (23.2rem) */
  width: 25.6rem;
  height: 100%;
  min-height: 100%;
  background: ${({theme:e})=>e.colors.neutral0};
  flex-shrink: 0;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Wr=b(E)`
  flex-shrink: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,qr=b(C)`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,Kr=({currentFolderId:e,onSelectFolder:n})=>{const{formatMessage:s}=T(),{data:o=[],isLoading:r,isError:a}=Qe(),{isExpanded:i,toggleExpanded:l}=Gr(o,e),g=e==null;return t.jsxs(Hr,{direction:"column",alignItems:"stretch",tag:"nav","aria-label":s({id:u("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(Wr,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:t.jsx(I,{variant:"beta",tag:"h2",children:s({id:u("sidebar.title"),defaultMessage:"Media library"})})}),t.jsxs(qr,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(on,{type:"button",$isActive:g,"aria-current":g?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(Kn,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(I,{variant:"omega",fontWeight:g?"semiBold":"regular",children:s({id:u("sidebar.home"),defaultMessage:"Home"})})]}),t.jsxs(E,{children:[t.jsxs(C,{alignItems:"center",gap:1,padding:1,children:[t.jsx(ue,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(I,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:s({id:u("sidebar.folders"),defaultMessage:"Folders"})})]}),r?t.jsx(C,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(ce,{children:s({id:u("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):a?t.jsx(E,{padding:1,paddingTop:2,children:t.jsx(I,{variant:"pi",textColor:"danger600",children:s({id:u("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):o.length===0?t.jsx(E,{padding:1,paddingTop:2,children:t.jsx(I,{variant:"pi",textColor:"neutral500",children:s({id:u("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(an,{children:o.map(p=>t.jsx(ln,{node:p,level:0,currentFolderId:e,isExpanded:i,onToggle:l,onSelect:n},p.id??p.name))})]})]})]})},Qr=({open:e,onClose:n,onUpload:s})=>{const{formatMessage:o}=T(),[r,a]=d.useState(""),[i,l]=d.useState(null),g=()=>{a(""),l(null),n()},p=async c=>{c.preventDefault();const{urls:f,error:j}=Yn(r);if(j){l(j);return}l(null),g(),await s(f)};return t.jsx(H.Root,{open:e,onOpenChange:c=>!c&&g(),children:t.jsx(H.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx(H.Header,{children:t.jsx(H.Title,{children:o({id:u("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(H.Body,{children:t.jsxs(V.Root,{error:i||void 0,hint:o({id:u("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(V.Label,{children:o({id:u("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Qn,{name:"urls",minHeight:"unset",rows:Math.min(r.split(`
`).length,7),maxHeight:"10.5rem",placeholder:o({id:u("input.url.placeholder"),defaultMessage:"Empty"}),value:r,onChange:c=>{a(c.target.value),l(null)}}),t.jsx(V.Hint,{}),t.jsx(V.Error,{})]})}),t.jsxs(H.Footer,{children:[t.jsx(W,{variant:"tertiary",onClick:g,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(W,{type:"submit",children:o({id:u("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},De=20,Yr=({folder:e=null,sort:n}={})=>{const[s,o]=d.useState(1),r=d.useRef([]),a=d.useRef(!0),{currentData:i,isLoading:l,isFetching:g,error:p}=Vt({folder:e,page:s,pageSize:De,sort:n}),c=i?.pagination,f=d.useMemo(()=>{if(!i)return r.current;const x=i.results;if(s===1)r.current=x;else{const v=(s-1)*De;if(r.current.length<v-De)return r.current;r.current.length<s*De&&(r.current=[...r.current,...x])}return r.current},[i,s]);d.useEffect(()=>{if(a.current){a.current=!1;return}o(1),r.current=[]},[e,n]);const j=c?s<c.pageCount:!1,m=g&&s>1,h=d.useCallback(()=>{o(x=>x+1)},[]);return{assets:f,pagination:c,isLoading:l,isFetchingMore:m,hasNextPage:j,fetchNextPage:h,error:p}},Zr={threshold:.1},Xr=({view:e,folderId:n,onAssetItemClick:s})=>{const{formatMessage:o}=T(),{assets:r,isLoading:a,isFetchingMore:i,hasNextPage:l,fetchNextPage:g,error:p}=Yr({folder:n}),{data:c=[],isLoading:f}=Js({parentId:n}),j=e===pe.GRID,m=a||f,h=os(d.useCallback(x=>{x&&l&&!i&&g()},[l,i,g]),Zr);return m?t.jsx(C,{justifyContent:"center",padding:8,children:t.jsx(ce,{children:o({id:"app.loading",defaultMessage:"Loading..."})})}):p?t.jsx(E,{padding:8,children:t.jsx(I,{textColor:"danger600",children:o({id:u("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):c.length===0&&r.length===0?t.jsx(E,{padding:8,children:t.jsx(I,{textColor:"neutral600",children:o({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(t.Fragment,{children:[j?t.jsx(wr,{folders:c,assets:r,onAssetItemClick:s}):t.jsx(Ar,{assets:r,folders:c,onAssetItemClick:s}),t.jsx("div",{ref:h,style:{height:1}}),i&&t.jsx(C,{justifyContent:"center",padding:4,children:t.jsx(ce,{children:o({id:u("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})})]})},Jr=b(Ks)`
  display: flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
`,gt=b(Qs)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[4]}`};
  border: none;
  background: ${({theme:e})=>e.colors.neutral0};
  color: ${({theme:e})=>e.colors.neutral800};
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSizes[1]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &[data-state='on'] {
    background: ${({theme:e})=>e.colors.neutral150};
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`,ea=b(E)`
  [data-strapi-header] {
    background: ${({theme:e})=>e.colors.neutral0};

    h1 {
      font-size: 1.8rem;
    }
  }
`,ta=()=>{const{formatMessage:e}=T(),{openDetails:n}=Yt(),{currentFolderId:s,navigateToFolderId:o,navigateToRoot:r}=Ye(),{error:a}=zt({id:s},{skip:s===null});d.useEffect(()=>{a?.name==="NotFoundError"&&r()},[a,r]);const{title:i,itemCount:l}=Ht(s),g=e({id:u("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},{count:l}),p=i?`${i} (${g})`:e({id:"app.loading",defaultMessage:"Loading..."}),[c,f]=d.useState(!1),[j,m]=Zn(Cr.view,pe.GRID),h=j===pe.GRID,[x,v]=d.useState(!1),y=d.useRef(null),M=d.useRef(null),[w]=Xn(),[D]=Jn(),R=async(k,O)=>{if(k.length===0)return;const $=new FormData,L=[];k.forEach(U=>{$.append("files",U),L.push({name:U.name,caption:null,alternativeText:null,folder:O})}),$.append("fileInfo",JSON.stringify(L));try{await w({formData:$,totalFiles:k.length}).unwrap()}catch{}},P=()=>{y.current?.click()},B=async k=>{const O=k.target.files;O&&O.length>0&&await R(Array.from(O),s),k.target.value=""},A=async k=>{await R(k,s)},G=async k=>{try{await D({urls:k,folderId:s}).unwrap()}catch{}};return t.jsxs(t.Fragment,{children:[t.jsx(Pr,{onDrop:A,children:t.jsx(ir,{children:t.jsx(E,{ref:M,children:t.jsxs(Ae.Root,{minHeight:"100vh",background:"neutral0",sideNav:t.jsx(Kr,{currentFolderId:s,onSelectFolder:o}),children:[t.jsx(he,{children:t.jsx("input",{type:"file",ref:y,onChange:B,multiple:!0})}),t.jsx(ea,{children:t.jsx(Ae.Header,{title:p,primaryAction:t.jsxs(ns,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(Mt,{}),label:e({id:u("new"),defaultMessage:"New"}),children:[t.jsx(Ee,{onSelect:()=>f(!0),startIcon:t.jsx(ue,{}),children:e({id:u("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(Ee,{onSelect:P,startIcon:t.jsx(ss,{}),children:e({id:u("import-files"),defaultMessage:"Import files"})}),t.jsx(Ee,{onSelect:()=>v(!0),startIcon:t.jsx(Ve,{}),children:e({id:u("import-from-url"),defaultMessage:"Import from URL"})})]}),subtitle:t.jsxs(C,{justifyContent:"space-between",alignItems:"center",gap:4,width:"100%",children:[t.jsx(C,{gap:4,alignItems:"center",children:"TODO: Filters and search"}),t.jsxs(C,{gap:4,alignItems:"center",children:[t.jsx(E,{children:"TODO: Sort"}),t.jsxs(Jr,{type:"single",value:h?"grid":"table",onValueChange:k=>k&&m(k==="grid"?pe.GRID:pe.TABLE),"aria-label":e({id:u("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(gt,{value:"table","aria-label":e({id:u("view.table"),defaultMessage:"Table view"}),children:[t.jsx(es,{}),e({id:u("view.table"),defaultMessage:"Table view"})]}),t.jsxs(gt,{value:"grid","aria-label":e({id:u("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(ts,{}),e({id:u("view.grid"),defaultMessage:"Grid view"})]})]})]})]})})}),t.jsx(Ae.Content,{children:t.jsxs(Or,{children:[t.jsx(Br,{uploadDropZoneRef:M,folderName:i}),t.jsx(Xr,{view:j,folderId:s,onAssetItemClick:n})]})})]})})})}),t.jsx(Fr,{open:c,folderName:i,parentFolderId:s,onClose:()=>f(!1)}),t.jsx(Qr,{open:x,onClose:()=>v(!1),onUpload:G}),t.jsx(Qo,{})]})},ra=()=>{const{formatMessage:e}=T(),n=e({id:u("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(nt.Main,{children:[t.jsx(nt.Title,{children:n}),t.jsx(rs,{children:t.jsx(as,{index:!0,element:t.jsx(ta,{})})})]})};export{ra as UnstableMediaLibrary};
