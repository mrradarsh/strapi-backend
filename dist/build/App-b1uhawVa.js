import{r as c,j as t,df as F,g_ as Le,g$ as be,h0 as ke,h1 as Ct,eZ as wt,h2 as It,h3 as Mt,h4 as St,h5 as Dt,h6 as Rt,h7 as Se,a as S,h8 as u,h9 as K,T as y,I as w,y as m,R as $,F as Y,u as Ne,ha as z,bK as ae,de as Oe,hb as Tt,hc as At,p as _e,z as Ft,hd as Et,he as me,A as O,s as G,dJ as $t,bN as P,E as Ge,cs as Be,H as N,a_ as Ue,bq as Pt,aY as Lt,aZ as De,bG as kt,N as Ve,cN as Nt,hf as ze,hg as Ot,U as te,g4 as ie,dP as le,dq as _t,dm as Gt,dn as Bt,c as Ce,eS as xe,eU as Ut,eW as Vt,eR as zt,eT as qt,eV as qe,cq as L,bB as Ht,hh as Wt,hi as Kt,hj as Zt,hk as Qt,L as ue,gi as Yt,gj as Jt,dU as Xt,hl as fe,ak as en,fI as tn,hm as nn,P as Re,O as sn,Q as rn}from"./strapi-B75kBOh8.js";import{g as on}from"./users-DLc-PG84.js";function we(e,n=[]){let s=[];function r(a,i){const l=c.createContext(i),f=s.length;s=[...s,i];const g=p=>{const{scope:x,children:j,...C}=p,b=x?.[e]?.[f]||l,h=c.useMemo(()=>C,Object.values(C));return t.jsx(b.Provider,{value:h,children:j})};g.displayName=a+"Provider";function d(p,x){const j=x?.[e]?.[f]||l,C=c.useContext(j);if(C)return C;if(i!==void 0)return i;throw new Error(`\`${p}\` must be used within \`${a}\``)}return[g,d]}const o=()=>{const a=s.map(i=>c.createContext(i));return function(l){const f=l?.[e]||a;return c.useMemo(()=>({[`__scope${e}`]:{...l,[e]:f}}),[l,f])}};return o.scopeName=e,[r,an(o,...n)]}function an(...e){const n=e[0];if(e.length===1)return n;const s=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=r.reduce((l,{useScope:f,scopeName:g})=>{const p=f(a)[`__scope${g}`];return{...l,...p}},{});return c.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return s.scopeName=n.scopeName,s}function Te(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function He(...e){return n=>{let s=!1;const r=e.map(o=>{const a=Te(o,n);return!s&&typeof a=="function"&&(s=!0),a});if(s)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():Te(e[o],null)}}}}function je(...e){return c.useCallback(He(...e),e)}function ye(e){const n=ln(e),s=c.forwardRef((r,o)=>{const{children:a,...i}=r,l=c.Children.toArray(a),f=l.find(dn);if(f){const g=f.props.children,d=l.map(p=>p===f?c.Children.count(g)>1?c.Children.only(null):c.isValidElement(g)?g.props.children:null:p);return t.jsx(n,{...i,ref:o,children:c.isValidElement(g)?c.cloneElement(g,void 0,d):null})}return t.jsx(n,{...i,ref:o,children:a})});return s.displayName=`${e}.Slot`,s}function ln(e){const n=c.forwardRef((s,r)=>{const{children:o,...a}=s;if(c.isValidElement(o)){const i=fn(o),l=un(a,o.props);return o.type!==c.Fragment&&(l.ref=r?He(r,i):i),c.cloneElement(o,l)}return c.Children.count(o)>1?c.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var cn=Symbol("radix.slottable");function dn(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===cn}function un(e,n){const s={...n};for(const r in n){const o=e[r],a=n[r];/^on[A-Z]/.test(r)?o&&a?s[r]=(...l)=>{const f=a(...l);return o(...l),f}:o&&(s[r]=o):r==="style"?s[r]={...o,...a}:r==="className"&&(s[r]=[o,a].filter(Boolean).join(" "))}return{...e,...s}}function fn(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?e.props.ref:e.props.ref||e.ref)}var pn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],J=pn.reduce((e,n)=>{const s=ye(`Primitive.${n}`),r=c.forwardRef((o,a)=>{const{asChild:i,...l}=o,f=i?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(f,{...l,ref:a})});return r.displayName=`Primitive.${n}`,{...e,[n]:r}},{});function q(e,n,{checkForDefaultPrevented:s=!0}={}){return function(o){if(e?.(o),s===!1||!o.defaultPrevented)return n?.(o)}}function gn(e){const n=e+"CollectionProvider",[s,r]=we(n),[o,a]=s(n,{collectionRef:{current:null},itemMap:new Map}),i=b=>{const{scope:h,children:R}=b,E=F.useRef(null),I=F.useRef(new Map).current;return t.jsx(o,{scope:h,itemMap:I,collectionRef:E,children:R})};i.displayName=n;const l=e+"CollectionSlot",f=ye(l),g=F.forwardRef((b,h)=>{const{scope:R,children:E}=b,I=a(l,R),T=je(h,I.collectionRef);return t.jsx(f,{ref:T,children:E})});g.displayName=l;const d=e+"CollectionItemSlot",p="data-radix-collection-item",x=ye(d),j=F.forwardRef((b,h)=>{const{scope:R,children:E,...I}=b,T=F.useRef(null),M=je(h,T),v=a(d,R);return F.useEffect(()=>(v.itemMap.set(T,{ref:T,...I}),()=>void v.itemMap.delete(T))),t.jsx(x,{[p]:"",ref:M,children:E})});j.displayName=d;function C(b){const h=a(e+"CollectionConsumer",b);return F.useCallback(()=>{const E=h.collectionRef.current;if(!E)return[];const I=Array.from(E.querySelectorAll(`[${p}]`));return Array.from(h.itemMap.values()).sort((v,A)=>I.indexOf(v.ref.current)-I.indexOf(A.ref.current))},[h.collectionRef,h.itemMap])}return[{Provider:i,Slot:g,ItemSlot:j},C,r]}var We=globalThis?.document?c.useLayoutEffect:()=>{},hn=Le[" useId ".trim().toString()]||(()=>{}),mn=0;function xn(e){const[n,s]=c.useState(hn());return We(()=>{s(r=>r??String(mn++))},[e]),n?`radix-${n}`:""}function jn(e){const n=c.useRef(e);return c.useEffect(()=>{n.current=e}),c.useMemo(()=>(...s)=>n.current?.(...s),[])}var yn=Le[" useInsertionEffect ".trim().toString()]||We;function ce({prop:e,defaultProp:n,onChange:s=()=>{},caller:r}){const[o,a,i]=vn({defaultProp:n,onChange:s}),l=e!==void 0,f=l?e:o;{const d=c.useRef(e!==void 0);c.useEffect(()=>{const p=d.current;p!==l&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,r])}const g=c.useCallback(d=>{if(l){const p=bn(d)?d(e):d;p!==e&&i.current?.(p)}else a(d)},[l,e,a,i]);return[f,g]}function vn({defaultProp:e,onChange:n}){const[s,r]=c.useState(e),o=c.useRef(s),a=c.useRef(n);return yn(()=>{a.current=n},[n]),c.useEffect(()=>{o.current!==s&&(a.current?.(s),o.current=s)},[s,o]),[s,r,a]}function bn(e){return typeof e=="function"}var Cn=c.createContext(void 0);function Ke(e){const n=c.useContext(Cn);return e||n||"ltr"}var pe="rovingFocusGroup.onEntryFocus",wn={bubbles:!1,cancelable:!0},X="RovingFocusGroup",[ve,Ze,In]=gn(X),[Mn,Qe]=we(X,[In]),[Sn,Dn]=Mn(X),Ye=c.forwardRef((e,n)=>t.jsx(ve.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(ve.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(Rn,{...e,ref:n})})}));Ye.displayName=X;var Rn=c.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,orientation:r,loop:o=!1,dir:a,currentTabStopId:i,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:f,onEntryFocus:g,preventScrollOnEntryFocus:d=!1,...p}=e,x=c.useRef(null),j=je(n,x),C=Ke(a),[b,h]=ce({prop:i,defaultProp:l??null,onChange:f,caller:X}),[R,E]=c.useState(!1),I=jn(g),T=Ze(s),M=c.useRef(!1),[v,A]=c.useState(0);return c.useEffect(()=>{const D=x.current;if(D)return D.addEventListener(pe,I),()=>D.removeEventListener(pe,I)},[I]),t.jsx(Sn,{scope:s,orientation:r,dir:C,loop:o,currentTabStopId:b,onItemFocus:c.useCallback(D=>h(D),[h]),onItemShiftTab:c.useCallback(()=>E(!0),[]),onFocusableItemAdd:c.useCallback(()=>A(D=>D+1),[]),onFocusableItemRemove:c.useCallback(()=>A(D=>D-1),[]),children:t.jsx(J.div,{tabIndex:R||v===0?-1:0,"data-orientation":r,...p,ref:j,style:{outline:"none",...e.style},onMouseDown:q(e.onMouseDown,()=>{M.current=!0}),onFocus:q(e.onFocus,D=>{const H=!M.current;if(D.target===D.currentTarget&&H&&!R){const W=new CustomEvent(pe,wn);if(D.currentTarget.dispatchEvent(W),!W.defaultPrevented){const de=T().filter(U=>U.focusable),yt=de.find(U=>U.active),vt=de.find(U=>U.id===b),bt=[yt,vt,...de].filter(Boolean).map(U=>U.ref.current);et(bt,d)}}M.current=!1}),onBlur:q(e.onBlur,()=>E(!1))})})}),Je="RovingFocusGroupItem",Xe=c.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,focusable:r=!0,active:o=!1,tabStopId:a,children:i,...l}=e,f=xn(),g=a||f,d=Dn(Je,s),p=d.currentTabStopId===g,x=Ze(s),{onFocusableItemAdd:j,onFocusableItemRemove:C,currentTabStopId:b}=d;return c.useEffect(()=>{if(r)return j(),()=>C()},[r,j,C]),t.jsx(ve.ItemSlot,{scope:s,id:g,focusable:r,active:o,children:t.jsx(J.span,{tabIndex:p?0:-1,"data-orientation":d.orientation,...l,ref:n,onMouseDown:q(e.onMouseDown,h=>{r?d.onItemFocus(g):h.preventDefault()}),onFocus:q(e.onFocus,()=>d.onItemFocus(g)),onKeyDown:q(e.onKeyDown,h=>{if(h.key==="Tab"&&h.shiftKey){d.onItemShiftTab();return}if(h.target!==h.currentTarget)return;const R=Fn(h,d.orientation,d.dir);if(R!==void 0){if(h.metaKey||h.ctrlKey||h.altKey||h.shiftKey)return;h.preventDefault();let I=x().filter(T=>T.focusable).map(T=>T.ref.current);if(R==="last")I.reverse();else if(R==="prev"||R==="next"){R==="prev"&&I.reverse();const T=I.indexOf(h.currentTarget);I=d.loop?En(I,T+1):I.slice(T+1)}setTimeout(()=>et(I))}}),children:typeof i=="function"?i({isCurrentTabStop:p,hasTabStop:b!=null}):i})})});Xe.displayName=Je;var Tn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function An(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Fn(e,n,s){const r=An(e.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Tn[r]}function et(e,n=!1){const s=document.activeElement;for(const r of e)if(r===s||(r.focus({preventScroll:n}),document.activeElement!==s))return}function En(e,n){return e.map((s,r)=>e[(n+r)%e.length])}var $n=Ye,Pn=Xe,tt="Toggle",nt=c.forwardRef((e,n)=>{const{pressed:s,defaultPressed:r,onPressedChange:o,...a}=e,[i,l]=ce({prop:s,onChange:o,defaultProp:r??!1,caller:tt});return t.jsx(J.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":e.disabled?"":void 0,...a,ref:n,onClick:q(e.onClick,()=>{e.disabled||l(!i)})})});nt.displayName=tt;var B="ToggleGroup",[st]=we(B,[Qe]),rt=Qe(),Ie=F.forwardRef((e,n)=>{const{type:s,...r}=e;if(s==="single"){const o=r;return t.jsx(Ln,{...o,ref:n})}if(s==="multiple"){const o=r;return t.jsx(kn,{...o,ref:n})}throw new Error(`Missing prop \`type\` expected on \`${B}\``)});Ie.displayName=B;var[ot,at]=st(B),Ln=F.forwardRef((e,n)=>{const{value:s,defaultValue:r,onValueChange:o=()=>{},...a}=e,[i,l]=ce({prop:s,defaultProp:r??"",onChange:o,caller:B});return t.jsx(ot,{scope:e.__scopeToggleGroup,type:"single",value:F.useMemo(()=>i?[i]:[],[i]),onItemActivate:l,onItemDeactivate:F.useCallback(()=>l(""),[l]),children:t.jsx(it,{...a,ref:n})})}),kn=F.forwardRef((e,n)=>{const{value:s,defaultValue:r,onValueChange:o=()=>{},...a}=e,[i,l]=ce({prop:s,defaultProp:r??[],onChange:o,caller:B}),f=F.useCallback(d=>l((p=[])=>[...p,d]),[l]),g=F.useCallback(d=>l((p=[])=>p.filter(x=>x!==d)),[l]);return t.jsx(ot,{scope:e.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:f,onItemDeactivate:g,children:t.jsx(it,{...a,ref:n})})});Ie.displayName=B;var[Nn,On]=st(B),it=F.forwardRef((e,n)=>{const{__scopeToggleGroup:s,disabled:r=!1,rovingFocus:o=!0,orientation:a,dir:i,loop:l=!0,...f}=e,g=rt(s),d=Ke(i),p={role:"group",dir:d,...f};return t.jsx(Nn,{scope:s,rovingFocus:o,disabled:r,children:o?t.jsx($n,{asChild:!0,...g,orientation:a,dir:d,loop:l,children:t.jsx(J.div,{...p,ref:n})}):t.jsx(J.div,{...p,ref:n})})}),oe="ToggleGroupItem",lt=F.forwardRef((e,n)=>{const s=at(oe,e.__scopeToggleGroup),r=On(oe,e.__scopeToggleGroup),o=rt(e.__scopeToggleGroup),a=s.value.includes(e.value),i=r.disabled||e.disabled,l={...e,pressed:a,disabled:i},f=F.useRef(null);return r.rovingFocus?t.jsx(Pn,{asChild:!0,...o,focusable:!i,active:a,ref:f,children:t.jsx(Ae,{...l,ref:n})}):t.jsx(Ae,{...l,ref:n})});lt.displayName=oe;var Ae=F.forwardRef((e,n)=>{const{__scopeToggleGroup:s,value:r,...o}=e,a=at(oe,s),i={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l=a.type==="single"?i:void 0;return t.jsx(nt,{...l,...o,ref:n,onPressedChange:f=>{f?a.onItemActivate(r):a.onItemDeactivate(r)}})}),_n=Ie,Gn=lt;const Bn=be.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(n={})=>{const{parentId:s}=n,r={};return s!=null?r.filters={$and:[{parent:{id:s}}]}:r.filters={$and:[{parent:{id:{$null:!0}}}]},{url:"/upload/folders",method:"GET",config:{params:r}}},transformResponse:n=>n.data,providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:n=>({url:"/upload/folders",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"Folder",id:"LIST"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:n=>n?.data??n??[],providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:n})=>({url:`/upload/folders/${n}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:n=>n.data,providesTags:(n,s,{id:r})=>[{type:"Folder",id:r}]})})}),{useCreateFolderMutation:Un,useGetFoldersQuery:Vn,useGetFolderQuery:zn,useGetAllFoldersQuery:qn}=Bn;var _=function(e){return e.Video="video",e.Image="image",e.Document="doc",e.Audio="audio",e}({});const Hn=be.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(n={})=>{const{folder:s,...r}=n,o={...r};return s!=null?o.filters={$and:[{folder:{id:s}}]}:o.filters={$and:[{folder:{id:{$null:!0}}}]},{url:"/upload/files",method:"GET",config:{params:o}}},transformResponse:n=>n,providesTags:n=>n?[...n.results.map(({id:s})=>({type:"Asset",id:s})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:n=>({url:`/upload/files/${n}`,method:"GET"}),providesTags:(n,s,r)=>[{type:"Asset",id:r}]}),updateAsset:e.mutation({query:({id:n,fileInfo:s})=>{const r=new FormData;return r.append("fileInfo",JSON.stringify(s)),{url:"/upload",method:"POST",data:r,config:{params:{id:n}}}},invalidatesTags:(n,s,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:n,file:s,fileInfo:r})=>{const o=new FormData;return o.append("files",s),r&&o.append("fileInfo",JSON.stringify(r)),{url:"/upload",method:"POST",data:o,config:{params:{id:n}}}},invalidatesTags:(n,s,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:n=>({url:`/upload/files/${n}`,method:"DELETE"}),invalidatesTags:(n,s,r)=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]})})}),{useGetAssetsQuery:ct,useGetAssetQuery:Wn,useUpdateAssetMutation:Kn,useReplaceAssetMutation:Zn,useDeleteAssetMutation:Qn}=Hn,Yn=be.injectEndpoints({endpoints:e=>({getSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetSettingsQuery:Jn}=Yn,Xn=async(e,n)=>{const r=await(await fetch(e)).blob(),o=window.URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.setAttribute("download",n),a.click(),window.URL.revokeObjectURL(o)},es={pdf:Rt,csv:Dt,xls:St,zip:Mt},ee=(e,n)=>{const s=ke(n);return e?.includes(_.Image)?Ct:e?.includes(_.Video)?wt:e?.includes(_.Audio)?It:s?es[s]||Se:Se},dt=e=>{const{formatMessage:n}=S(),{data:s,isLoading:r}=zn({id:e},{skip:e===null}),{data:o,isLoading:a}=ct({folder:null,pageSize:1},{skip:e!==null}),i=n({id:u("plugin.home"),defaultMessage:"Home"});return e===null?a?{title:i,itemCount:0}:{title:i,itemCount:o?.pagination?.total??0}:r?{title:i,itemCount:0}:{title:s?.name??i,itemCount:s?.files?.count??0}},Z=m($)`
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
`,ne=m(y)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,ts=m.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,ns=m(y)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,ss=m.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,rs=m.audio`
  width: 100%;
`,os=m.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,as=m(y)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,is=m(y)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,se=()=>{const{formatMessage:e}=S();return t.jsx(is,{justifyContent:"center",alignItems:"center",children:t.jsx(Y,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},ls=({asset:e,actions:n,isLoading:s=!1})=>{const{formatMessage:r}=S(),{alternativeText:o,ext:a,mime:i,url:l,updatedAt:f}=e,g=f?new Date(f).getTime():void 0,d=h=>!h||g===void 0?h:h.includes("?")?`${h}&v=${g}`:`${h}?v=${g}`,p=d(K(l)),[x,j]=c.useState(!1);if(c.useEffect(()=>{j(!1)},[p]),i?.includes(_.Image)){const h=d(K(l));if(h)return t.jsxs(Z,{children:[(!x||s)&&t.jsx(se,{}),n?t.jsx(ns,{children:n}):null,t.jsx(ne,{children:t.jsx(ts,{src:h,alt:o||e.name||"",onLoad:()=>j(!0),onError:()=>j(!0)})})]})}if(i?.includes(_.Video)&&p)return t.jsxs(Z,{children:[!x&&t.jsx(se,{}),t.jsx(ne,{children:t.jsx(ss,{src:p,controls:!0,title:e.name,onLoadedData:()=>j(!0),onError:()=>j(!0),children:r({id:u("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(_.Audio)&&p)return t.jsxs(Z,{children:[!x&&t.jsx(se,{}),t.jsx(ne,{children:t.jsx(y,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(rs,{src:p,controls:!0,onLoadedData:()=>j(!0),onError:()=>j(!0)})})})]});if((a?.toLowerCase()==="pdf"||a?.toLowerCase()===".pdf"||i==="application/pdf")&&p)return t.jsxs(Z,{children:[!x&&t.jsx(se,{}),t.jsx(ne,{children:t.jsx(os,{src:`${p}#toolbar=0`,title:e.name,onLoad:()=>j(!0)})})]});const b=ee(i,a);return t.jsx(Z,{children:t.jsxs(as,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(b,{width:24,height:24}),t.jsx(w,{variant:"pi",children:r({id:u("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},ge="assetId",ut=c.createContext(null),ft=()=>{const e=c.useContext(ut);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},pt=c.createContext(null),gt=()=>{const e=c.useContext(pt);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},ht=()=>{const[{query:e},n]=Ne(),s=e?.[ge],r=s?parseInt(s,10):null,o=r!==null&&!Number.isNaN(r),[a,i]=c.useState(o),l=c.useRef(null);c.useEffect(()=>{o&&(l.current=r,i(!0))},[o,r]);const f=c.useCallback(p=>{p.target===p.currentTarget&&!o&&i(!1)},[o]),g=c.useCallback(p=>{n({[ge]:String(p)},"push",!0)},[n]),d=c.useCallback(()=>{n({[ge]:void 0},"remove",!0)},[n]);return{assetId:o?r:l.current,isVisible:o,shouldRenderDrawer:a,onCloseAnimationEnd:f,openDetails:g,closeDetails:d}},cs=m(y)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,V=({label:e,value:n})=>t.jsxs(cs,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(w,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(w,{variant:"pi",textColor:"neutral700",children:n??"-"})]}),ds=m($)`
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
`,us=m($)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,fs=m(y)`
  position: absolute;
  inset: 0;
  z-index: 20;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,ps=m(Ve)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,he=({name:e,label:n,required:s})=>{const{formatMessage:r}=S(),o=Ge(e),a=Be("DetailField",f=>f.isSubmitting),i=o.value??"",l=r({id:u("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:n});return t.jsxs(N.Root,{name:e,required:s,children:[t.jsx(N.Label,{children:n}),t.jsx(Ue,{value:i,onChange:f=>o.onChange(e,f.target.value),endAction:i?void 0:t.jsx(Pt,{label:l,children:t.jsx(ps,{"aria-label":l,role:"img"})}),type:"text",disabled:a})]})},gs=({label:e,rootLabel:n,folders:s})=>{const r=Ge("folder"),o=Be("LocationField",a=>a.isSubmitting);return t.jsxs(N.Root,{name:"folder",required:!0,children:[t.jsx(N.Label,{children:e}),t.jsxs(Lt,{value:r.value==null?"":String(r.value),onChange:a=>{const i=a===""?null:Number(a);r.onChange("folder",i)},disabled:o,children:[t.jsx(De,{value:"",children:n}),s.map(a=>t.jsx(De,{value:String(a.id),children:a.name},a.id))]})]})},hs=()=>{const{formatMessage:e}=S(),{deleteAsset:n,isDeleting:s}=gt(),[r,o]=c.useState(!1),a=async()=>{await n(),o(!1)},i=e({id:u("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(P.Root,{open:r,onOpenChange:o,children:[t.jsx(P.Trigger,{children:t.jsx(G,{withTooltip:!1,label:i,variant:"danger-light",children:t.jsx(kt,{})})}),t.jsxs(P.Content,{children:[t.jsx(P.Header,{children:e({id:u("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(P.Body,{icon:t.jsx(Ve,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:u("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(P.Footer,{children:[t.jsx(P.Cancel,{children:t.jsx(O,{variant:"tertiary",disabled:s,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(P.Action,{children:t.jsx(O,{variant:"danger-light",loading:s,onClick:a,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},ms=({asset:e})=>{const{formatMessage:n}=S(),{copy:s}=Nt(),r=ft(),o=async()=>{const a=K(e.url);if(!a)return;const i=await s(a);r({type:i?"success":"danger",message:n(i?{id:u("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:u("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(G,{withTooltip:!1,label:n({id:u("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:o,children:t.jsx(ze,{})})},xs=({asset:e})=>{const{formatMessage:n}=S(),s=ft(),[r,o]=c.useState(!1),a=async()=>{const i=K(e.url);if(i){o(!0);try{await Xn(i,e.name)}catch{s({type:"danger",message:n({id:u("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{o(!1)}}};return t.jsx(G,{withTooltip:!1,label:n({id:u("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:a,disabled:r,children:t.jsx(Ot,{})})},js=()=>{const{formatMessage:e}=S(),{replaceAsset:n,isReplacing:s}=gt(),r=c.useRef(null),[o,a]=c.useState(!1),{data:i}=Jn(),l=i?.data?.aiMetadata??!1,f=()=>{a(!0)},g=()=>{a(!1),r.current?.click()},d=async p=>{const x=p.target.files?.[0];p.target.value="",x&&await n(x)};return t.jsxs(t.Fragment,{children:[t.jsx(ae,{children:t.jsx("input",{ref:r,type:"file",multiple:!1,onChange:d,"aria-hidden":!0,tabIndex:-1})}),t.jsx(G,{withTooltip:!1,label:e({id:u("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:f,disabled:s,children:t.jsx($t,{})}),t.jsx(P.Root,{open:o,onOpenChange:a,children:t.jsxs(P.Content,{children:[t.jsx(P.Header,{children:e({id:u("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(P.Body,{textAlign:"center",children:t.jsxs(y,{direction:"column",textAlign:"center",children:[t.jsx(w,{variant:"omega",children:e({id:u("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),l?t.jsx(w,{variant:"omega",children:e({id:u("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(P.Footer,{children:[t.jsx(P.Cancel,{children:t.jsx(O,{variant:"tertiary",fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(P.Action,{children:t.jsx(O,{variant:"secondary",onClick:g,fullWidth:!0,children:e({id:u("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},ys=({asset:e,closeDetails:n})=>{const{formatMessage:s,formatDate:r}=S(),{data:o=[]}=qn(),{toggleNotification:a}=_e(),[i]=Kn(),[l,{isLoading:f}]=Zn(),[g,{isLoading:d}]=Qn(),[p,x]=c.useState(null);c.useEffect(()=>{if(!p)return;const M=window.setTimeout(()=>x(null),5e3);return()=>window.clearTimeout(M)},[p]);const j=c.useCallback(M=>x(M),[]),C=e.mime?.includes(_.Image),b={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},h=async M=>{if("error"in await i({id:e.id,fileInfo:{name:M.name,caption:M.caption,alternativeText:M.alternativeText,folder:M.folder}})){j({type:"danger",message:s({id:u("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}j({type:"success",message:s({id:u("asset-details.update.success"),defaultMessage:"File updated"})})},{title:R}=dt(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),E=async M=>{const v=await l({id:e.id,file:M});if("error"in v){const A=v.error,D=A?.data?.error?.message??A?.data?.message??s({id:u("asset-details.replace.error"),defaultMessage:"Failed to replace the file."});j({type:"danger",message:D});return}j({type:"success",message:s({id:u("asset-details.replace.success"),defaultMessage:"File replaced."})})},I=async()=>{const M=await g(e.id);if("error"in M){const v=M.error,A=v?.data?.error?.message??v?.data?.message??s({id:u("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."});j({type:"danger",message:A});return}a({type:"success",message:s({id:u("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:R})}),n()},T=c.useMemo(()=>({replaceAsset:E,deleteAsset:I,isReplacing:f,isDeleting:d}),[f,d]);return t.jsx(ut.Provider,{value:j,children:t.jsx(pt.Provider,{value:T,children:t.jsx(ds,{children:t.jsx(Ft,{method:"POST",initialValues:b,onSubmit:h,children:({modified:M,isSubmitting:v,values:A,resetForm:D})=>{const H=(A.name??"").trim()==="";return t.jsxs(t.Fragment,{children:[t.jsx(Et,{onProceed:D}),f||d?t.jsx(fs,{children:t.jsx(Y,{children:s({id:u(d?"asset-details.delete.loading":"asset-details.replace.loading"),defaultMessage:d?"Deleting the file…":"Replacing the file…"})})}):null,p?t.jsx(us,{children:t.jsx(Oe,{variant:p.type==="success"?"success":"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:()=>x(null),children:p.message})}):null,t.jsxs(z.ScrollableContent,{children:[t.jsx(ls,{asset:e,actions:C?t.jsx(y,{direction:"column",gap:2,children:t.jsx(js,{})}):null}),t.jsxs(y,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(w,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:s({id:u("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(y,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(V,{label:s({id:u("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(V,{label:s({id:u("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(V,{label:s({id:u("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?on({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(V,{label:s({id:u("asset-details.size"),defaultMessage:"Size"}),value:e.size?me(e.size,1):null}),C&&(e.width!=null||e.height!=null)&&t.jsx(V,{label:s({id:u("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(V,{label:s({id:u("asset-details.extension"),defaultMessage:"Extension"}),value:ke(e.ext)}),t.jsx(V,{label:s({id:u("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(he,{name:"name",label:s({id:u("asset-details.fileName"),defaultMessage:"File name"}),required:!0}),t.jsx(gs,{label:s({id:u("asset-details.location"),defaultMessage:"Location"}),rootLabel:s({id:u("plugin.home"),defaultMessage:"Home"}),folders:o}),C&&t.jsxs(t.Fragment,{children:[t.jsx(he,{name:"caption",label:s({id:u("asset-details.caption"),defaultMessage:"Caption"})}),t.jsx(he,{name:"alternativeText",label:s({id:u("asset-details.alternativeText"),defaultMessage:"Alternative text"})})]})]})]}),t.jsxs(y,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(y,{gap:2,children:[t.jsx(hs,{}),t.jsx(ms,{asset:e}),t.jsx(xs,{asset:e})]}),t.jsx(O,{type:"submit",variant:"default",loading:v,disabled:!M||v||H,children:s({id:u("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},vs=({asset:e,closeDetails:n})=>{const s=e?ee(e.mime,e.ext):Tt;return t.jsxs(y,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(s,{width:20,height:20}),t.jsx(z.Title,{asChild:!0,children:t.jsx(w,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx($,{marginLeft:"auto",children:t.jsx(z.CloseButton,{onClose:n,children:t.jsx(At,{})})})]})},bs=({assetId:e,closeDetails:n})=>{const{formatMessage:s}=S(),{data:r,isLoading:o,error:a}=Wn(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return o?t.jsx(y,{justifyContent:"center",padding:8,children:t.jsx(Y,{children:s({id:"app.loading",defaultMessage:"Loading..."})})}):a||!r?t.jsx(y,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(Oe,{variant:"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:n,children:s({id:u("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(vs,{asset:r,closeDetails:n}),t.jsx(ys,{asset:r,closeDetails:n})]})},Cs=()=>{const{formatMessage:e}=S(),{assetId:n,isVisible:s,shouldRenderDrawer:r,onCloseAnimationEnd:o,closeDetails:a}=ht();return!r||n===null?null:t.jsxs(z.Root,{isVisible:s,onClose:a,children:[t.jsx("div",{children:t.jsxs(ae,{children:[t.jsx(z.Title,{children:e({id:u("asset-details.title"),defaultMessage:"File details"})}),t.jsx(z.Description,{children:e({id:u("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(z.Body,{animationDirection:"left",width:"41.6rem",height:"100vh",onAnimationEnd:o,children:t.jsx(bs,{assetId:n,closeDetails:a})})]})},Me=()=>{const[{query:e},n]=Ne();return{currentFolderId:e?.folder?Number(e.folder):null,navigateToFolder:o=>{n({folder:String(o.id)})}}},ws=m(Gt)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,Is=m($)`
  grid-column: 1 / -1;
`,Ms=m(y)`
  width: 100%;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`}; // 8px 12px
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]}; // 8px
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,Ss=m(y)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,Ds=m(w)`
  flex: 1;
  min-width: 0;
`,Rs=({folder:e})=>{const{formatMessage:n}=S(),{navigateToFolder:s}=Me(),r=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s(e))};return t.jsxs(Ms,{onClick:()=>s(e),onKeyDown:r,role:"listitem",tabIndex:0,children:[t.jsx(Ss,{children:t.jsx(ie,{width:20,height:20})}),t.jsx(Ds,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(G,{label:n({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:o=>o.stopPropagation(),children:t.jsx(le,{})})]})},Fe=m($)`
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
`,Ts=m.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,As=m(y)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,Fs=({asset:e})=>{const{alternativeText:n,ext:s,formats:r,mime:o,url:a}=e;if(o?.includes(_.Image)){const l=K(r?.thumbnail?.url)??K(a);if(l)return t.jsx(Fe,{children:t.jsx(Ts,{src:l,alt:n||""})})}const i=ee(o,s);return t.jsx(Fe,{children:t.jsx(As,{justifyContent:"center",alignItems:"center",children:t.jsx(i,{width:48,height:48})})})},Es=m(Bt)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,$s=m(y)`
  min-width: 0;
  width: 100%;
`,Ps=m(y)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,Ls=m(w)`
  flex: 1;
  min-width: 0;
`,ks=({asset:e,onAssetItemClick:n})=>{const{formatMessage:s}=S(),r=ee(e.mime,e.ext),o=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n(e.id))};return t.jsxs(ws,{tabIndex:0,role:"listitem",onClick:()=>n(e.id),onKeyDown:o,children:[t.jsx(Es,{children:t.jsx(Fs,{asset:e})}),t.jsx(_t,{children:t.jsxs($s,{alignItems:"center",gap:2,children:[t.jsx(Ps,{children:t.jsx(r,{width:20,height:20})}),t.jsx(Ls,{textColor:"primary800",ellipsis:!0,children:e.name}),t.jsx(G,{label:s({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(le,{})})]})})]})},Ns=({assets:e,folders:n=[],onAssetItemClick:s})=>{const{formatMessage:r}=S();return n.length+e.length===0?t.jsx($,{padding:8,children:t.jsx(w,{textColor:"neutral600",children:r({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(te.Root,{gap:4,role:"list",children:[n.length>0&&t.jsx(Is,{children:t.jsx(te.Root,{gap:4,children:n.map(a=>t.jsx(te.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(Rs,{folder:a})},`folder-${a.id}`))})}),e.map(a=>t.jsx(te.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(ks,{asset:a,onAssetItemClick:s})},a.id))]})},Os={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},Q={GRID:0,TABLE:1},Ee=[{name:"name",label:{id:u("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:u("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:u("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:u("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:u("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],_s=m(Vt)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;
`,Gs=m(zt)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,$e=m(qt)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,k=m(qe)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,mt=m(xe)`
  height: 48px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }

  &:last-child {
    ${k} {
      border-bottom: 0;
    }
  }
`,Bs=m(qe)`
  padding: ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Us=({asset:e})=>{const{ext:n,mime:s}=e,r=ee(s,n);return t.jsx(y,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(r,{width:20,height:20})})},Vs=({asset:e,onAssetItemClick:n})=>{const s=Ce(),{formatDate:r,formatMessage:o}=S(),a=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n(e.id))};return t.jsxs(mt,{tabIndex:0,role:"row",onClick:()=>n(e.id),onKeyDown:a,children:[t.jsx(k,{children:t.jsxs(y,{gap:3,alignItems:"center",children:[t.jsx(Us,{asset:e}),t.jsxs(y,{direction:"column",alignItems:"flex-start",children:[t.jsx(w,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name}),s&&t.jsx(w,{textColor:"neutral600",variant:"pi",children:e.size?me(e.size,1):"-"})]})]})}),!s&&t.jsxs(t.Fragment,{children:[t.jsx(k,{children:t.jsx(w,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(k,{children:t.jsx(w,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(k,{children:t.jsx(w,{textColor:"neutral600",children:e.size?me(e.size,1):"-"})})]}),t.jsx(k,{children:t.jsx(y,{justifyContent:"flex-end",children:t.jsx(G,{label:o({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(le,{})})})})]})},zs=m(mt)`
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,qs=({folder:e})=>{const n=Ce(),{formatDate:s,formatMessage:r}=S(),{navigateToFolder:o}=Me(),a=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),o(e))};return t.jsxs(zs,{tabIndex:0,role:"row",onClick:()=>o(e),onKeyDown:a,children:[t.jsx(k,{children:t.jsxs(y,{gap:3,alignItems:"center",children:[t.jsx(y,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(ie,{width:20,height:20})}),t.jsx(w,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(k,{children:t.jsx(w,{textColor:"neutral600",children:e.createdAt?s(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(k,{children:t.jsx(w,{textColor:"neutral600",children:e.updatedAt?s(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(k,{children:t.jsx(w,{textColor:"neutral600",children:"-"})})]}),t.jsx(k,{children:t.jsx(y,{justifyContent:"flex-end",children:t.jsx(G,{label:r({id:u("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:i=>i.stopPropagation(),children:t.jsx(le,{})})})})]})},Hs=({assets:e,folders:n=[],onAssetItemClick:s})=>{const r=Ce(),{formatMessage:o}=S(),a=r?Ee.filter(l=>l.name==="name"||l.name==="actions"):Ee,i=n.length+e.length;return t.jsxs(_s,{colCount:a.length,rowCount:i+1,children:[t.jsx(Gs,{children:t.jsx(xe,{children:a.map(l=>{const f=o(l.label);return"isVisuallyHidden"in l&&l.isVisuallyHidden?t.jsx($e,{children:t.jsx(ae,{children:o({id:u("table.header.actions"),defaultMessage:"actions"})})},l.name):t.jsx($e,{children:t.jsx(w,{textColor:"neutral600",variant:"sigma",children:f})},l.name)})})}),t.jsx(Ut,{children:i===0?t.jsx(xe,{children:t.jsx(Bs,{colSpan:a.length,children:t.jsx(w,{textColor:"neutral600",children:o({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})})}):t.jsxs(t.Fragment,{children:[n.map(l=>t.jsx(qs,{folder:l},`folder-${l.id}`)),e.map(l=>t.jsx(Vs,{asset:l,onAssetItemClick:s},l.id))]})})]})},Ws=m(L.Content)`
  max-width: 51.6rem;
`,Ks=({open:e,folderName:n,parentFolderId:s,onClose:r})=>{const{formatMessage:o}=S(),{toggleNotification:a}=_e(),[i,l]=c.useState(""),[f,g]=c.useState(),[d,{isLoading:p}]=Un();c.useEffect(()=>{e&&(l(""),g(void 0))},[e]);const x=async j=>{j.preventDefault();const C=i.trim();if(!C){g(o({id:u("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{await d({name:C,parent:s}).unwrap(),a({type:"success",message:o({id:u("folder.create.success"),defaultMessage:"Folder has been created"})}),r()}catch(b){const h=b;h?.message?g(h.message):a({type:"danger",message:o({id:u("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(L.Root,{open:e,onOpenChange:r,children:t.jsxs(Ws,{children:[t.jsx(L.Header,{children:t.jsx(L.Title,{children:o({id:u("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:n})})}),t.jsxs("form",{onSubmit:x,children:[t.jsx(L.Body,{children:t.jsxs(N.Root,{error:f,name:"name",required:!0,children:[t.jsx(N.Label,{children:o({id:u("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(Ue,{value:i,onChange:j=>{l(j.target.value),g(void 0)},autoFocus:!0}),t.jsx(N.Error,{})]})}),t.jsx(L.Footer,{children:t.jsxs(y,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(O,{variant:"tertiary",onClick:r,type:"button",children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(O,{type:"submit",loading:p,children:o({id:u("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},xt=c.createContext(null),Zs=m($)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Qs=({children:e,onDrop:n})=>{const[s,r]=c.useState(!1),o=c.useRef(0),a={isDragging:s};c.useEffect(()=>{const d=()=>{r(!1),o.current=0},p=x=>{x.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",d),document.addEventListener("dragleave",p),()=>{document.removeEventListener("dragend",d),document.removeEventListener("dragleave",p)}},[]);const i=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),o.current+=1,d.dataTransfer.types.includes("Files")&&r(!0)},[]),l=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),f=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),d.dataTransfer.dropEffect="copy"},[]),g=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),r(!1),o.current=0;const{files:p}=d.dataTransfer;p?.length&&n&&n(Array.from(p))},[n]);return t.jsx(xt.Provider,{value:a,children:t.jsx(Zs,{"data-testid":"assets-dropzone",onDragEnter:i,onDragLeave:l,onDragOver:f,onDrop:g,children:e})})},jt=()=>{const e=c.useContext(xt);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Ys=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,Js=m($)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Ys(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Xs=({children:e})=>{const{isDragging:n}=jt();return t.jsxs($,{position:"relative",children:[n&&t.jsx(Js,{}),e]})},er=m($)`
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
`,tr=({uploadDropZoneRef:e,folderName:n})=>{const{formatMessage:s}=S(),{isDragging:r}=jt(),[o,a]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const i=()=>{const f=e.current?.getBoundingClientRect();f&&a(g=>g!==f.left?f.left:g)};i();const l=new ResizeObserver(i);return l.observe(e.current),()=>l.disconnect()},[e]),r?t.jsxs(er,{$leftContentWidth:o,children:[t.jsx(w,{textColor:"neutral0",children:s({id:u("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(y,{gap:2,alignItems:"center",children:[t.jsx(ie,{width:20,height:20,fill:"neutral0"}),t.jsx(w,{textColor:"neutral0",fontWeight:"semiBold",children:n})]})]}):null},nr=({open:e,onClose:n,onUpload:s})=>{const{formatMessage:r}=S(),[o,a]=c.useState(""),[i,l]=c.useState(null),f=()=>{a(""),l(null),n()},g=async d=>{d.preventDefault();const{urls:p,error:x}=Wt(o);if(x){l(x);return}l(null),f(),await s(p)};return t.jsx(L.Root,{open:e,onOpenChange:d=>!d&&f(),children:t.jsx(L.Content,{children:t.jsxs("form",{onSubmit:g,children:[t.jsx(L.Header,{children:t.jsx(L.Title,{children:r({id:u("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(L.Body,{children:t.jsxs(N.Root,{error:i||void 0,hint:r({id:u("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(N.Label,{children:r({id:u("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Ht,{name:"urls",minHeight:"unset",rows:Math.min(o.split(`
`).length,7),maxHeight:"10.5rem",placeholder:r({id:u("input.url.placeholder"),defaultMessage:"Empty"}),value:o,onChange:d=>{a(d.target.value),l(null)}}),t.jsx(N.Hint,{}),t.jsx(N.Error,{})]})}),t.jsxs(L.Footer,{children:[t.jsx(O,{variant:"tertiary",onClick:f,children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(O,{type:"submit",children:r({id:u("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},re=20,sr=({folder:e=null,sort:n}={})=>{const[s,r]=c.useState(1),o=c.useRef([]),a=c.useRef(!0),{currentData:i,isLoading:l,isFetching:f,error:g}=ct({folder:e,page:s,pageSize:re,sort:n}),d=i?.pagination,p=c.useMemo(()=>{if(!i)return o.current;const b=i.results;if(s===1)o.current=b;else{const h=(s-1)*re;if(o.current.length<h-re)return o.current;o.current.length<s*re&&(o.current=[...o.current,...b])}return o.current},[i,s]);c.useEffect(()=>{if(a.current){a.current=!1;return}r(1),o.current=[]},[e,n]);const x=d?s<d.pageCount:!1,j=f&&s>1,C=c.useCallback(()=>{r(b=>b+1)},[]);return{assets:p,pagination:d,isLoading:l,isFetchingMore:j,hasNextPage:x,fetchNextPage:C,error:g}},rr={threshold:.1},or=({view:e,folderId:n,onAssetItemClick:s})=>{const{formatMessage:r}=S(),{assets:o,isLoading:a,isFetchingMore:i,hasNextPage:l,fetchNextPage:f,error:g}=sr({folder:n}),{data:d=[],isLoading:p}=Vn({parentId:n}),x=e===Q.GRID,j=a||p,C=nn(c.useCallback(b=>{b&&l&&!i&&f()},[l,i,f]),rr);return j?t.jsx(y,{justifyContent:"center",padding:8,children:t.jsx(Y,{children:r({id:"app.loading",defaultMessage:"Loading..."})})}):g?t.jsx($,{padding:8,children:t.jsx(w,{textColor:"danger600",children:r({id:u("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):d.length===0&&o.length===0?t.jsx($,{padding:8,children:t.jsx(w,{textColor:"neutral600",children:r({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(t.Fragment,{children:[x?t.jsx(Ns,{folders:d,assets:o,onAssetItemClick:s}):t.jsx(Hs,{assets:o,folders:d,onAssetItemClick:s}),t.jsx("div",{ref:C,style:{height:1}}),i&&t.jsx(y,{justifyContent:"center",padding:4,children:t.jsx(Y,{children:r({id:u("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})})]})},ar=m(_n)`
  display: flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
`,Pe=m(Gn)`
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
`,ir=m($)`
  [data-strapi-header] {
    background: ${({theme:e})=>e.colors.neutral0};

    h1 {
      font-size: 1.8rem;
    }
  }
`,lr=()=>{const{formatMessage:e}=S(),{openDetails:n}=ht(),{currentFolderId:s}=Me(),{title:r,itemCount:o}=dt(s),a=e({id:u("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},{count:o}),[i,l]=c.useState(!1),[f,g]=Kt(Os.view,Q.GRID),d=f===Q.GRID,[p,x]=c.useState(!1),j=c.useRef(null),C=c.useRef(null),[b]=Zt(),[h]=Qt(),R=async(v,A)=>{if(v.length===0)return;const D=new FormData,H=[];v.forEach(W=>{D.append("files",W),H.push({name:W.name,caption:null,alternativeText:null,folder:A})}),D.append("fileInfo",JSON.stringify(H));try{await b({formData:D,totalFiles:v.length}).unwrap()}catch{}},E=()=>{j.current?.click()},I=async v=>{const A=v.target.files;A&&A.length>0&&await R(Array.from(A),s),v.target.value=""},T=async v=>{await R(v,s)},M=async v=>{try{await h({urls:v,folderId:s}).unwrap()}catch{}};return t.jsxs(t.Fragment,{children:[t.jsx(Qs,{onDrop:T,children:t.jsx($,{ref:C,children:t.jsxs(ue.Root,{minHeight:"100vh",background:"neutral0",children:[t.jsx(ae,{children:t.jsx("input",{type:"file",ref:j,onChange:I,multiple:!0})}),t.jsx(ir,{children:t.jsx(ue.Header,{title:`${r} (${a})`,primaryAction:t.jsxs(Xt,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(tn,{}),label:e({id:u("new"),defaultMessage:"New"}),children:[t.jsx(fe,{onSelect:()=>l(!0),startIcon:t.jsx(ie,{}),children:e({id:u("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(fe,{onSelect:E,startIcon:t.jsx(en,{}),children:e({id:u("import-files"),defaultMessage:"Import files"})}),t.jsx(fe,{onSelect:()=>x(!0),startIcon:t.jsx(ze,{}),children:e({id:u("import-from-url"),defaultMessage:"Import from URL"})})]}),subtitle:t.jsxs(y,{justifyContent:"space-between",alignItems:"center",gap:4,width:"100%",children:[t.jsx(y,{gap:4,alignItems:"center",children:"TODO: Filters and search"}),t.jsxs(y,{gap:4,alignItems:"center",children:[t.jsx($,{children:"TODO: Sort"}),t.jsxs(ar,{type:"single",value:d?"grid":"table",onValueChange:v=>v&&g(v==="grid"?Q.GRID:Q.TABLE),"aria-label":e({id:u("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Pe,{value:"table","aria-label":e({id:u("view.table"),defaultMessage:"Table view"}),children:[t.jsx(Yt,{}),e({id:u("view.table"),defaultMessage:"Table view"})]}),t.jsxs(Pe,{value:"grid","aria-label":e({id:u("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(Jt,{}),e({id:u("view.grid"),defaultMessage:"Grid view"})]})]})]})]})})}),t.jsx(ue.Content,{children:t.jsxs(Xs,{children:[t.jsx(tr,{uploadDropZoneRef:C,folderName:r}),t.jsx(or,{view:f,folderId:s,onAssetItemClick:n})]})})]})})}),t.jsx(Ks,{open:i,folderName:r,parentFolderId:s,onClose:()=>l(!1)}),t.jsx(nr,{open:p,onClose:()=>x(!1),onUpload:M}),t.jsx(Cs,{})]})},fr=()=>{const{formatMessage:e}=S(),n=e({id:u("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(Re.Main,{children:[t.jsx(Re.Title,{children:n}),t.jsx(sn,{children:t.jsx(rn,{index:!0,element:t.jsx(lr,{})})})]})};export{fr as UnstableMediaLibrary};
