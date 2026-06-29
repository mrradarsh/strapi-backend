import{r as d,j as t,di as E,h1 as Oe,h2 as Ie,h3 as _e,h4 as Ft,f0 as Et,h5 as At,h6 as $t,h7 as Lt,h8 as kt,h9 as Pt,ha as De,a as I,hb as f,hc as K,T as j,I as b,y as m,R as S,F as Q,u as Ge,hd as q,bK as ue,dh as Be,he as Nt,hf as Ot,p as Ue,z as _t,hg as Gt,hh as ve,A as G,s as B,dM as Bt,bN as L,E as Ve,cs as He,H as O,a_ as We,bq as qe,aY as Ut,aZ as Fe,bG as Vt,N as ze,cQ as Ht,hi as Ke,hj as Wt,U as ae,g7 as te,dS as fe,dt as qt,dq as zt,dr as Kt,c as Me,eV as be,eX as Qt,eZ as Zt,eU as Yt,eW as Xt,eY as Qe,cq as P,hk as Jt,fL as Ze,bB as en,hl as tn,hm as nn,hn as sn,ho as rn,L as ge,gl as on,gm as an,dX as ln,hp as he,ak as dn,hq as cn,P as Ee,O as un,Q as fn}from"./strapi-DTV2J5yN.js";import{g as pn}from"./users-DLc-PG84.js";function Se(e,n=[]){let s=[];function r(a,i){const l=d.createContext(i),u=s.length;s=[...s,i];const g=p=>{const{scope:x,children:v,...C}=p,y=x?.[e]?.[u]||l,h=d.useMemo(()=>C,Object.values(C));return t.jsx(y.Provider,{value:h,children:v})};g.displayName=a+"Provider";function c(p,x){const v=x?.[e]?.[u]||l,C=d.useContext(v);if(C)return C;if(i!==void 0)return i;throw new Error(`\`${p}\` must be used within \`${a}\``)}return[g,c]}const o=()=>{const a=s.map(i=>d.createContext(i));return function(l){const u=l?.[e]||a;return d.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return o.scopeName=e,[r,gn(o,...n)]}function gn(...e){const n=e[0];if(e.length===1)return n;const s=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=r.reduce((l,{useScope:u,scopeName:g})=>{const p=u(a)[`__scope${g}`];return{...l,...p}},{});return d.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return s.scopeName=n.scopeName,s}function Ae(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Ye(...e){return n=>{let s=!1;const r=e.map(o=>{const a=Ae(o,n);return!s&&typeof a=="function"&&(s=!0),a});if(s)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():Ae(e[o],null)}}}}function ye(...e){return d.useCallback(Ye(...e),e)}function Ce(e){const n=hn(e),s=d.forwardRef((r,o)=>{const{children:a,...i}=r,l=d.Children.toArray(a),u=l.find(xn);if(u){const g=u.props.children,c=l.map(p=>p===u?d.Children.count(g)>1?d.Children.only(null):d.isValidElement(g)?g.props.children:null:p);return t.jsx(n,{...i,ref:o,children:d.isValidElement(g)?d.cloneElement(g,void 0,c):null})}return t.jsx(n,{...i,ref:o,children:a})});return s.displayName=`${e}.Slot`,s}function hn(e){const n=d.forwardRef((s,r)=>{const{children:o,...a}=s;if(d.isValidElement(o)){const i=vn(o),l=jn(a,o.props);return o.type!==d.Fragment&&(l.ref=r?Ye(r,i):i),d.cloneElement(o,l)}return d.Children.count(o)>1?d.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var mn=Symbol("radix.slottable");function xn(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===mn}function jn(e,n){const s={...n};for(const r in n){const o=e[r],a=n[r];/^on[A-Z]/.test(r)?o&&a?s[r]=(...l)=>{const u=a(...l);return o(...l),u}:o&&(s[r]=o):r==="style"?s[r]={...o,...a}:r==="className"&&(s[r]=[o,a].filter(Boolean).join(" "))}return{...e,...s}}function vn(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?e.props.ref:e.props.ref||e.ref)}var bn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ee=bn.reduce((e,n)=>{const s=Ce(`Primitive.${n}`),r=d.forwardRef((o,a)=>{const{asChild:i,...l}=o,u=i?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:a})});return r.displayName=`Primitive.${n}`,{...e,[n]:r}},{});function z(e,n,{checkForDefaultPrevented:s=!0}={}){return function(o){if(e?.(o),s===!1||!o.defaultPrevented)return n?.(o)}}function yn(e){const n=e+"CollectionProvider",[s,r]=Se(n),[o,a]=s(n,{collectionRef:{current:null},itemMap:new Map}),i=y=>{const{scope:h,children:T}=y,A=E.useRef(null),M=E.useRef(new Map).current;return t.jsx(o,{scope:h,itemMap:M,collectionRef:A,children:T})};i.displayName=n;const l=e+"CollectionSlot",u=Ce(l),g=E.forwardRef((y,h)=>{const{scope:T,children:A}=y,M=a(l,T),R=ye(h,M.collectionRef);return t.jsx(u,{ref:R,children:A})});g.displayName=l;const c=e+"CollectionItemSlot",p="data-radix-collection-item",x=Ce(c),v=E.forwardRef((y,h)=>{const{scope:T,children:A,...M}=y,R=E.useRef(null),w=ye(h,R),F=a(c,T);return E.useEffect(()=>(F.itemMap.set(R,{ref:R,...M}),()=>void F.itemMap.delete(R))),t.jsx(x,{[p]:"",ref:w,children:A})});v.displayName=c;function C(y){const h=a(e+"CollectionConsumer",y);return E.useCallback(()=>{const A=h.collectionRef.current;if(!A)return[];const M=Array.from(A.querySelectorAll(`[${p}]`));return Array.from(h.itemMap.values()).sort((F,k)=>M.indexOf(F.ref.current)-M.indexOf(k.ref.current))},[h.collectionRef,h.itemMap])}return[{Provider:i,Slot:g,ItemSlot:v},C,r]}var Xe=globalThis?.document?d.useLayoutEffect:()=>{},Cn=Oe[" useId ".trim().toString()]||(()=>{}),wn=0;function In(e){const[n,s]=d.useState(Cn());return Xe(()=>{s(r=>r??String(wn++))},[e]),n?`radix-${n}`:""}function Mn(e){const n=d.useRef(e);return d.useEffect(()=>{n.current=e}),d.useMemo(()=>(...s)=>n.current?.(...s),[])}var Sn=Oe[" useInsertionEffect ".trim().toString()]||Xe;function pe({prop:e,defaultProp:n,onChange:s=()=>{},caller:r}){const[o,a,i]=Tn({defaultProp:n,onChange:s}),l=e!==void 0,u=l?e:o;{const c=d.useRef(e!==void 0);d.useEffect(()=>{const p=c.current;p!==l&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),c.current=l},[l,r])}const g=d.useCallback(c=>{if(l){const p=Rn(c)?c(e):c;p!==e&&i.current?.(p)}else a(c)},[l,e,a,i]);return[u,g]}function Tn({defaultProp:e,onChange:n}){const[s,r]=d.useState(e),o=d.useRef(s),a=d.useRef(n);return Sn(()=>{a.current=n},[n]),d.useEffect(()=>{o.current!==s&&(a.current?.(s),o.current=s)},[s,o]),[s,r,a]}function Rn(e){return typeof e=="function"}var Dn=d.createContext(void 0);function Je(e){const n=d.useContext(Dn);return e||n||"ltr"}var me="rovingFocusGroup.onEntryFocus",Fn={bubbles:!1,cancelable:!0},ne="RovingFocusGroup",[we,et,En]=yn(ne),[An,tt]=Se(ne,[En]),[$n,Ln]=An(ne),nt=d.forwardRef((e,n)=>t.jsx(we.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(we.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(kn,{...e,ref:n})})}));nt.displayName=ne;var kn=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,orientation:r,loop:o=!1,dir:a,currentTabStopId:i,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:u,onEntryFocus:g,preventScrollOnEntryFocus:c=!1,...p}=e,x=d.useRef(null),v=ye(n,x),C=Je(a),[y,h]=pe({prop:i,defaultProp:l??null,onChange:u,caller:ne}),[T,A]=d.useState(!1),M=Mn(g),R=et(s),w=d.useRef(!1),[F,k]=d.useState(0);return d.useEffect(()=>{const D=x.current;if(D)return D.addEventListener(me,M),()=>D.removeEventListener(me,M)},[M]),t.jsx($n,{scope:s,orientation:r,dir:C,loop:o,currentTabStopId:y,onItemFocus:d.useCallback(D=>h(D),[h]),onItemShiftTab:d.useCallback(()=>A(!0),[]),onFocusableItemAdd:d.useCallback(()=>k(D=>D+1),[]),onFocusableItemRemove:d.useCallback(()=>k(D=>D-1),[]),children:t.jsx(ee.div,{tabIndex:T||F===0?-1:0,"data-orientation":r,...p,ref:v,style:{outline:"none",...e.style},onMouseDown:z(e.onMouseDown,()=>{w.current=!0}),onFocus:z(e.onFocus,D=>{const Z=!w.current;if(D.target===D.currentTarget&&Z&&!T){const $=new CustomEvent(me,Fn);if(D.currentTarget.dispatchEvent($),!$.defaultPrevented){const _=R().filter(H=>H.focusable),Y=_.find(H=>H.active),re=_.find(H=>H.id===y),Dt=[Y,re,..._].filter(Boolean).map(H=>H.ref.current);ot(Dt,c)}}w.current=!1}),onBlur:z(e.onBlur,()=>A(!1))})})}),st="RovingFocusGroupItem",rt=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,focusable:r=!0,active:o=!1,tabStopId:a,children:i,...l}=e,u=In(),g=a||u,c=Ln(st,s),p=c.currentTabStopId===g,x=et(s),{onFocusableItemAdd:v,onFocusableItemRemove:C,currentTabStopId:y}=c;return d.useEffect(()=>{if(r)return v(),()=>C()},[r,v,C]),t.jsx(we.ItemSlot,{scope:s,id:g,focusable:r,active:o,children:t.jsx(ee.span,{tabIndex:p?0:-1,"data-orientation":c.orientation,...l,ref:n,onMouseDown:z(e.onMouseDown,h=>{r?c.onItemFocus(g):h.preventDefault()}),onFocus:z(e.onFocus,()=>c.onItemFocus(g)),onKeyDown:z(e.onKeyDown,h=>{if(h.key==="Tab"&&h.shiftKey){c.onItemShiftTab();return}if(h.target!==h.currentTarget)return;const T=On(h,c.orientation,c.dir);if(T!==void 0){if(h.metaKey||h.ctrlKey||h.altKey||h.shiftKey)return;h.preventDefault();let M=x().filter(R=>R.focusable).map(R=>R.ref.current);if(T==="last")M.reverse();else if(T==="prev"||T==="next"){T==="prev"&&M.reverse();const R=M.indexOf(h.currentTarget);M=c.loop?_n(M,R+1):M.slice(R+1)}setTimeout(()=>ot(M))}}),children:typeof i=="function"?i({isCurrentTabStop:p,hasTabStop:y!=null}):i})})});rt.displayName=st;var Pn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Nn(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function On(e,n,s){const r=Nn(e.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Pn[r]}function ot(e,n=!1){const s=document.activeElement;for(const r of e)if(r===s||(r.focus({preventScroll:n}),document.activeElement!==s))return}function _n(e,n){return e.map((s,r)=>e[(n+r)%e.length])}var Gn=nt,Bn=rt,at="Toggle",it=d.forwardRef((e,n)=>{const{pressed:s,defaultPressed:r,onPressedChange:o,...a}=e,[i,l]=pe({prop:s,onChange:o,defaultProp:r??!1,caller:at});return t.jsx(ee.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":e.disabled?"":void 0,...a,ref:n,onClick:z(e.onClick,()=>{e.disabled||l(!i)})})});it.displayName=at;var V="ToggleGroup",[lt]=Se(V,[tt]),dt=tt(),Te=E.forwardRef((e,n)=>{const{type:s,...r}=e;if(s==="single"){const o=r;return t.jsx(Un,{...o,ref:n})}if(s==="multiple"){const o=r;return t.jsx(Vn,{...o,ref:n})}throw new Error(`Missing prop \`type\` expected on \`${V}\``)});Te.displayName=V;var[ct,ut]=lt(V),Un=E.forwardRef((e,n)=>{const{value:s,defaultValue:r,onValueChange:o=()=>{},...a}=e,[i,l]=pe({prop:s,defaultProp:r??"",onChange:o,caller:V});return t.jsx(ct,{scope:e.__scopeToggleGroup,type:"single",value:E.useMemo(()=>i?[i]:[],[i]),onItemActivate:l,onItemDeactivate:E.useCallback(()=>l(""),[l]),children:t.jsx(ft,{...a,ref:n})})}),Vn=E.forwardRef((e,n)=>{const{value:s,defaultValue:r,onValueChange:o=()=>{},...a}=e,[i,l]=pe({prop:s,defaultProp:r??[],onChange:o,caller:V}),u=E.useCallback(c=>l((p=[])=>[...p,c]),[l]),g=E.useCallback(c=>l((p=[])=>p.filter(x=>x!==c)),[l]);return t.jsx(ct,{scope:e.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:u,onItemDeactivate:g,children:t.jsx(ft,{...a,ref:n})})});Te.displayName=V;var[Hn,Wn]=lt(V),ft=E.forwardRef((e,n)=>{const{__scopeToggleGroup:s,disabled:r=!1,rovingFocus:o=!0,orientation:a,dir:i,loop:l=!0,...u}=e,g=dt(s),c=Je(i),p={role:"group",dir:c,...u};return t.jsx(Hn,{scope:s,rovingFocus:o,disabled:r,children:o?t.jsx(Gn,{asChild:!0,...g,orientation:a,dir:c,loop:l,children:t.jsx(ee.div,{...p,ref:n})}):t.jsx(ee.div,{...p,ref:n})})}),ce="ToggleGroupItem",pt=E.forwardRef((e,n)=>{const s=ut(ce,e.__scopeToggleGroup),r=Wn(ce,e.__scopeToggleGroup),o=dt(e.__scopeToggleGroup),a=s.value.includes(e.value),i=r.disabled||e.disabled,l={...e,pressed:a,disabled:i},u=E.useRef(null);return r.rovingFocus?t.jsx(Bn,{asChild:!0,...o,focusable:!i,active:a,ref:u,children:t.jsx($e,{...l,ref:n})}):t.jsx($e,{...l,ref:n})});pt.displayName=ce;var $e=E.forwardRef((e,n)=>{const{__scopeToggleGroup:s,value:r,...o}=e,a=ut(ce,s),i={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l=a.type==="single"?i:void 0;return t.jsx(it,{...l,...o,ref:n,onPressedChange:u=>{u?a.onItemActivate(r):a.onItemDeactivate(r)}})}),qn=Te,zn=pt;const Kn=Ie.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(n={})=>{const{parentId:s}=n,r={};return s!=null?r.filters={$and:[{parent:{id:s}}]}:r.filters={$and:[{parent:{id:{$null:!0}}}]},{url:"/upload/folders",method:"GET",config:{params:r}}},transformResponse:n=>n.data,providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:n=>({url:"/upload/folders",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:n=>n?.data??n??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:n=>n?.data??n??[],providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:n})=>({url:`/upload/folders/${n}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:n=>n.data,providesTags:(n,s,{id:r})=>[{type:"Folder",id:r}]})})}),{useCreateFolderMutation:Qn,useGetFoldersQuery:Zn,useGetFolderQuery:gt,useGetAllFoldersQuery:Yn,useGetFolderStructureQuery:Xn}=Kn;var U=function(e){return e.Video="video",e.Image="image",e.Document="doc",e.Audio="audio",e}({});const Jn=Ie.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(n={})=>{const{folder:s,...r}=n,o={...r};return s!=null?o.filters={$and:[{folder:{id:s}}]}:o.filters={$and:[{folder:{id:{$null:!0}}}]},{url:"/upload/files",method:"GET",config:{params:o}}},transformResponse:n=>n,providesTags:n=>n?[...n.results.map(({id:s})=>({type:"Asset",id:s})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:n=>({url:`/upload/files/${n}`,method:"GET"}),providesTags:(n,s,r)=>[{type:"Asset",id:r}]}),updateAsset:e.mutation({query:({id:n,fileInfo:s})=>{const r=new FormData;return r.append("fileInfo",JSON.stringify(s)),{url:"/upload",method:"POST",data:r,config:{params:{id:n}}}},invalidatesTags:(n,s,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:n,file:s,fileInfo:r})=>{const o=new FormData;return o.append("files",s),r&&o.append("fileInfo",JSON.stringify(r)),{url:"/upload",method:"POST",data:o,config:{params:{id:n}}}},invalidatesTags:(n,s,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:n=>({url:`/upload/files/${n}`,method:"DELETE"}),invalidatesTags:(n,s,r)=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]})})}),{useGetAssetsQuery:ht,useGetAssetQuery:es,useUpdateAssetMutation:ts,useReplaceAssetMutation:ns,useDeleteAssetMutation:ss}=Jn,rs=Ie.injectEndpoints({endpoints:e=>({getSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetSettingsQuery:os}=rs,as=async(e,n)=>{const r=await(await fetch(e)).blob(),o=window.URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.setAttribute("download",n),a.click(),window.URL.revokeObjectURL(o)},is={pdf:Pt,csv:kt,xls:Lt,zip:$t},se=(e,n)=>{const s=_e(n);return e?.includes(U.Image)?Ft:e?.includes(U.Video)?Et:e?.includes(U.Audio)?At:s?is[s]||De:De},mt=e=>{const{formatMessage:n}=I(),{data:s,isLoading:r}=gt({id:e},{skip:e===null}),{data:o,isLoading:a}=ht({folder:null,pageSize:1},{skip:e!==null}),i=n({id:f("plugin.home"),defaultMessage:"Home"});return e===null?a?{title:i,itemCount:0}:{title:i,itemCount:o?.pagination?.total??0}:r||!s?{title:"",itemCount:0}:{title:s.name,itemCount:s.files?.count??0}},X=m(S)`
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
`,ie=m(j)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,ls=m.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,ds=m(j)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,cs=m.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,us=m.audio`
  width: 100%;
`,fs=m.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,ps=m(j)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,gs=m(j)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,le=()=>{const{formatMessage:e}=I();return t.jsx(gs,{justifyContent:"center",alignItems:"center",children:t.jsx(Q,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},hs=({asset:e,actions:n,isLoading:s=!1})=>{const{formatMessage:r}=I(),{alternativeText:o,ext:a,mime:i,url:l,updatedAt:u}=e,g=u?new Date(u).getTime():void 0,c=h=>!h||g===void 0?h:h.includes("?")?`${h}&v=${g}`:`${h}?v=${g}`,p=c(K(l)),[x,v]=d.useState(!1);if(d.useEffect(()=>{v(!1)},[p]),i?.includes(U.Image)){const h=c(K(l));if(h)return t.jsxs(X,{children:[(!x||s)&&t.jsx(le,{}),n?t.jsx(ds,{children:n}):null,t.jsx(ie,{children:t.jsx(ls,{src:h,alt:o||e.name||"",onLoad:()=>v(!0),onError:()=>v(!0)})})]})}if(i?.includes(U.Video)&&p)return t.jsxs(X,{children:[!x&&t.jsx(le,{}),t.jsx(ie,{children:t.jsx(cs,{src:p,controls:!0,title:e.name,onLoadedData:()=>v(!0),onError:()=>v(!0),children:r({id:f("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(U.Audio)&&p)return t.jsxs(X,{children:[!x&&t.jsx(le,{}),t.jsx(ie,{children:t.jsx(j,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(us,{src:p,controls:!0,onLoadedData:()=>v(!0),onError:()=>v(!0)})})})]});if((a?.toLowerCase()==="pdf"||a?.toLowerCase()===".pdf"||i==="application/pdf")&&p)return t.jsxs(X,{children:[!x&&t.jsx(le,{}),t.jsx(ie,{children:t.jsx(fs,{src:`${p}#toolbar=0`,title:e.name,onLoad:()=>v(!0)})})]});const y=se(i,a);return t.jsx(X,{children:t.jsxs(ps,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(y,{width:24,height:24}),t.jsx(b,{variant:"pi",children:r({id:f("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},xe="assetId",xt=d.createContext(null),jt=()=>{const e=d.useContext(xt);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},vt=d.createContext(null),bt=()=>{const e=d.useContext(vt);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},yt=()=>{const[{query:e},n]=Ge(),s=e?.[xe],r=s?parseInt(s,10):null,o=r!==null&&!Number.isNaN(r),[a,i]=d.useState(o),l=d.useRef(null);d.useEffect(()=>{o&&(l.current=r,i(!0))},[o,r]);const u=d.useCallback(p=>{p.target===p.currentTarget&&!o&&i(!1)},[o]),g=d.useCallback(p=>{n({[xe]:String(p)},"push",!0)},[n]),c=d.useCallback(()=>{n({[xe]:void 0},"remove",!0)},[n]);return{assetId:o?r:l.current,isVisible:o,shouldRenderDrawer:a,onCloseAnimationEnd:u,openDetails:g,closeDetails:c}},ms=m(j)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,W=({label:e,value:n})=>t.jsxs(ms,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(b,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(b,{variant:"pi",textColor:"neutral700",children:n??"-"})]}),xs=m(S)`
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
`,js=m(S)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,vs=m(j)`
  position: absolute;
  inset: 0;
  z-index: 20;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,bs=m(ze)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,je=({name:e,label:n,required:s})=>{const{formatMessage:r}=I(),o=Ve(e),a=He("DetailField",u=>u.isSubmitting),i=o.value??"",l=r({id:f("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:n});return t.jsxs(O.Root,{name:e,required:s,children:[t.jsx(O.Label,{children:n}),t.jsx(We,{value:i,onChange:u=>o.onChange(e,u.target.value),endAction:i?void 0:t.jsx(qe,{label:l,children:t.jsx(bs,{"aria-label":l,role:"img"})}),type:"text",disabled:a})]})},ys=({label:e,rootLabel:n,folders:s})=>{const r=Ve("folder"),o=He("LocationField",a=>a.isSubmitting);return t.jsxs(O.Root,{name:"folder",required:!0,children:[t.jsx(O.Label,{children:e}),t.jsxs(Ut,{value:r.value==null?"":String(r.value),onChange:a=>{const i=a===""?null:Number(a);r.onChange("folder",i)},disabled:o,children:[t.jsx(Fe,{value:"",children:n}),s.map(a=>t.jsx(Fe,{value:String(a.id),children:a.name},a.id))]})]})},Cs=()=>{const{formatMessage:e}=I(),{deleteAsset:n,isDeleting:s}=bt(),[r,o]=d.useState(!1),a=async()=>{await n(),o(!1)},i=e({id:f("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(L.Root,{open:r,onOpenChange:o,children:[t.jsx(L.Trigger,{children:t.jsx(B,{withTooltip:!1,label:i,variant:"danger-light",children:t.jsx(Vt,{})})}),t.jsxs(L.Content,{children:[t.jsx(L.Header,{children:e({id:f("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(L.Body,{icon:t.jsx(ze,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:f("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(L.Footer,{children:[t.jsx(L.Cancel,{children:t.jsx(G,{variant:"tertiary",disabled:s,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(L.Action,{children:t.jsx(G,{variant:"danger-light",loading:s,onClick:a,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},ws=({asset:e})=>{const{formatMessage:n}=I(),{copy:s}=Ht(),r=jt(),o=async()=>{const a=K(e.url);if(!a)return;const i=await s(a);r({type:i?"success":"danger",message:n(i?{id:f("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:f("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(B,{withTooltip:!1,label:n({id:f("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:o,children:t.jsx(Ke,{})})},Is=({asset:e})=>{const{formatMessage:n}=I(),s=jt(),[r,o]=d.useState(!1),a=async()=>{const i=K(e.url);if(i){o(!0);try{await as(i,e.name)}catch{s({type:"danger",message:n({id:f("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{o(!1)}}};return t.jsx(B,{withTooltip:!1,label:n({id:f("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:a,disabled:r,children:t.jsx(Wt,{})})},Ms=()=>{const{formatMessage:e}=I(),{replaceAsset:n,isReplacing:s}=bt(),r=d.useRef(null),[o,a]=d.useState(!1),{data:i}=os(),l=i?.data?.aiMetadata??!1,u=()=>{a(!0)},g=()=>{a(!1),r.current?.click()},c=async p=>{const x=p.target.files?.[0];p.target.value="",x&&await n(x)};return t.jsxs(t.Fragment,{children:[t.jsx(ue,{children:t.jsx("input",{ref:r,type:"file",multiple:!1,onChange:c,"aria-hidden":!0,tabIndex:-1})}),t.jsx(B,{withTooltip:!1,label:e({id:f("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:s,children:t.jsx(Bt,{})}),t.jsx(L.Root,{open:o,onOpenChange:a,children:t.jsxs(L.Content,{children:[t.jsx(L.Header,{children:e({id:f("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(L.Body,{textAlign:"center",children:t.jsxs(j,{direction:"column",textAlign:"center",children:[t.jsx(b,{variant:"omega",children:e({id:f("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),l?t.jsx(b,{variant:"omega",children:e({id:f("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(L.Footer,{children:[t.jsx(L.Cancel,{children:t.jsx(G,{variant:"tertiary",fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(L.Action,{children:t.jsx(G,{variant:"secondary",onClick:g,fullWidth:!0,children:e({id:f("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},Ss=({asset:e,closeDetails:n})=>{const{formatMessage:s,formatDate:r}=I(),{data:o=[]}=Yn(),{toggleNotification:a}=Ue(),[i]=ts(),[l,{isLoading:u}]=ns(),[g,{isLoading:c}]=ss(),[p,x]=d.useState(null);d.useEffect(()=>{if(!p)return;const w=window.setTimeout(()=>x(null),5e3);return()=>window.clearTimeout(w)},[p]);const v=d.useCallback(w=>x(w),[]),C=e.mime?.includes(U.Image),y={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},h=async w=>{if("error"in await i({id:e.id,fileInfo:{name:w.name,caption:w.caption,alternativeText:w.alternativeText,folder:w.folder}})){v({type:"danger",message:s({id:f("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}v({type:"success",message:s({id:f("asset-details.update.success"),defaultMessage:"File updated"})})},{title:T}=mt(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),A=async w=>{const F=await l({id:e.id,file:w});if("error"in F){const k=F.error,D=k?.data?.error?.message??k?.data?.message??s({id:f("asset-details.replace.error"),defaultMessage:"Failed to replace the file."});v({type:"danger",message:D});return}v({type:"success",message:s({id:f("asset-details.replace.success"),defaultMessage:"File replaced."})})},M=async()=>{const w=await g(e.id);if("error"in w){const F=w.error,k=F?.data?.error?.message??F?.data?.message??s({id:f("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."});v({type:"danger",message:k});return}a({type:"success",message:s({id:f("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:T})}),n()},R=d.useMemo(()=>({replaceAsset:A,deleteAsset:M,isReplacing:u,isDeleting:c}),[u,c]);return t.jsx(xt.Provider,{value:v,children:t.jsx(vt.Provider,{value:R,children:t.jsx(xs,{children:t.jsx(_t,{method:"POST",initialValues:y,onSubmit:h,children:({modified:w,isSubmitting:F,values:k,resetForm:D})=>{const Z=(k.name??"").trim()==="";return t.jsxs(t.Fragment,{children:[t.jsx(Gt,{onProceed:D}),u||c?t.jsx(vs,{children:t.jsx(Q,{children:s({id:f(c?"asset-details.delete.loading":"asset-details.replace.loading"),defaultMessage:c?"Deleting the file…":"Replacing the file…"})})}):null,p?t.jsx(js,{children:t.jsx(Be,{variant:p.type==="success"?"success":"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:()=>x(null),children:p.message})}):null,t.jsxs(q.ScrollableContent,{children:[t.jsx(hs,{asset:e,actions:C?t.jsx(j,{direction:"column",gap:2,children:t.jsx(Ms,{})}):null}),t.jsxs(j,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(b,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:s({id:f("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(j,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(W,{label:s({id:f("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(W,{label:s({id:f("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(W,{label:s({id:f("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?pn({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(W,{label:s({id:f("asset-details.size"),defaultMessage:"Size"}),value:e.size?ve(e.size,1):null}),C&&(e.width!=null||e.height!=null)&&t.jsx(W,{label:s({id:f("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(W,{label:s({id:f("asset-details.extension"),defaultMessage:"Extension"}),value:_e(e.ext)}),t.jsx(W,{label:s({id:f("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(je,{name:"name",label:s({id:f("asset-details.fileName"),defaultMessage:"File name"}),required:!0}),t.jsx(ys,{label:s({id:f("asset-details.location"),defaultMessage:"Location"}),rootLabel:s({id:f("plugin.home"),defaultMessage:"Home"}),folders:o}),C&&t.jsxs(t.Fragment,{children:[t.jsx(je,{name:"caption",label:s({id:f("asset-details.caption"),defaultMessage:"Caption"})}),t.jsx(je,{name:"alternativeText",label:s({id:f("asset-details.alternativeText"),defaultMessage:"Alternative text"})})]})]})]}),t.jsxs(j,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(j,{gap:2,children:[t.jsx(Cs,{}),t.jsx(ws,{asset:e}),t.jsx(Is,{asset:e})]}),t.jsx(G,{type:"submit",variant:"default",loading:F,disabled:!w||F||Z,children:s({id:f("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},Ts=({asset:e,closeDetails:n})=>{const s=e?se(e.mime,e.ext):Nt;return t.jsxs(j,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(s,{width:20,height:20}),t.jsx(q.Title,{asChild:!0,children:t.jsx(b,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(S,{marginLeft:"auto",children:t.jsx(q.CloseButton,{onClose:n,children:t.jsx(Ot,{})})})]})},Rs=({assetId:e,closeDetails:n})=>{const{formatMessage:s}=I(),{data:r,isLoading:o,error:a}=es(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return o?t.jsx(j,{justifyContent:"center",padding:8,children:t.jsx(Q,{children:s({id:"app.loading",defaultMessage:"Loading..."})})}):a||!r?t.jsx(j,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(Be,{variant:"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:n,children:s({id:f("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Ts,{asset:r,closeDetails:n}),t.jsx(Ss,{asset:r,closeDetails:n})]})},Ds=()=>{const{formatMessage:e}=I(),{assetId:n,isVisible:s,shouldRenderDrawer:r,onCloseAnimationEnd:o,closeDetails:a}=yt();return!r||n===null?null:t.jsxs(q.Root,{isVisible:s,onClose:a,children:[t.jsx("div",{children:t.jsxs(ue,{children:[t.jsx(q.Title,{children:e({id:f("asset-details.title"),defaultMessage:"File details"})}),t.jsx(q.Description,{children:e({id:f("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(q.Body,{animationDirection:"left",width:"41.6rem",height:"100vh",onAnimationEnd:o,children:t.jsx(Rs,{assetId:n,closeDetails:a})})]})},Fs=e=>{if(!e)return null;const n=Number(e);return Number.isFinite(n)?n:null},Re=()=>{const[{query:e},n]=Ge(),s=Fs(e?.folder),r=i=>{n({folder:String(i.id)})},o=d.useCallback(()=>{n({folder:""},"remove")},[n]);return d.useEffect(()=>{e?.folder&&s===null&&o()},[e?.folder,s,o]),{currentFolderId:s,navigateToFolder:r,navigateToRoot:o,navigateToFolderId:i=>{i==null?o():n({folder:String(i)})}}},Es=m(zt)`
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
`,As=m(S)`
  grid-column: 1 / -1;
`,$s=m(j)`
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
`,Ls=m(j)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,ks=m(b)`
  flex: 1;
  min-width: 0;
`,Ps=({folder:e})=>{const{formatMessage:n}=I(),{navigateToFolder:s}=Re(),r=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s(e))};return t.jsxs($s,{onClick:()=>s(e),onKeyDown:r,role:"listitem",tabIndex:0,children:[t.jsx(Ls,{children:t.jsx(te,{width:20,height:20})}),t.jsx(ks,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(B,{label:n({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:o=>o.stopPropagation(),children:t.jsx(fe,{})})]})},Le=m(S)`
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
`,Ns=m.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Os=m(j)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,_s=({asset:e})=>{const{alternativeText:n,ext:s,formats:r,mime:o,url:a}=e;if(o?.includes(U.Image)){const l=K(r?.thumbnail?.url)??K(a);if(l)return t.jsx(Le,{children:t.jsx(Ns,{src:l,alt:n||""})})}const i=se(o,s);return t.jsx(Le,{children:t.jsx(Os,{justifyContent:"center",alignItems:"center",children:t.jsx(i,{width:48,height:48})})})},Gs=m(Kt)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Bs=m(j)`
  min-width: 0;
  width: 100%;
`,Us=m(j)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,Vs=m(b)`
  flex: 1;
  min-width: 0;
`,Hs=({asset:e,onAssetItemClick:n})=>{const{formatMessage:s}=I(),r=se(e.mime,e.ext),o=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n(e.id))};return t.jsxs(Es,{tabIndex:0,role:"listitem",onClick:()=>n(e.id),onKeyDown:o,children:[t.jsx(Gs,{children:t.jsx(_s,{asset:e})}),t.jsx(qt,{children:t.jsxs(Bs,{alignItems:"center",gap:2,children:[t.jsx(Us,{children:t.jsx(r,{width:20,height:20})}),t.jsx(Vs,{textColor:"primary800",ellipsis:!0,children:e.name}),t.jsx(B,{label:s({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(fe,{})})]})})]})},Ws=({assets:e,folders:n=[],onAssetItemClick:s})=>{const{formatMessage:r}=I();return n.length+e.length===0?t.jsx(S,{padding:8,children:t.jsx(b,{textColor:"neutral600",children:r({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(ae.Root,{gap:4,role:"list",children:[n.length>0&&t.jsx(As,{children:t.jsx(ae.Root,{gap:4,children:n.map(a=>t.jsx(ae.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(Ps,{folder:a})},`folder-${a.id}`))})}),e.map(a=>t.jsx(ae.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(Hs,{asset:a,onAssetItemClick:s})},a.id))]})},qs={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},J={GRID:0,TABLE:1},ke=[{name:"name",label:{id:f("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:f("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:f("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:f("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:f("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],zs=m(Zt)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;
`,Ks=m(Yt)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Pe=m(Xt)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,N=m(Qe)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ct=m(be)`
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
    ${N} {
      border-bottom: 0;
    }
  }
`,Qs=m(Qe)`
  padding: ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Zs=({asset:e})=>{const{ext:n,mime:s}=e,r=se(s,n);return t.jsx(j,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(r,{width:20,height:20})})},Ys=({asset:e,onAssetItemClick:n})=>{const s=Me(),{formatDate:r,formatMessage:o}=I(),a=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n(e.id))};return t.jsxs(Ct,{tabIndex:0,role:"row",onClick:()=>n(e.id),onKeyDown:a,children:[t.jsx(N,{children:t.jsxs(j,{gap:3,alignItems:"center",children:[t.jsx(Zs,{asset:e}),t.jsxs(j,{direction:"column",alignItems:"flex-start",children:[t.jsx(b,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name}),s&&t.jsx(b,{textColor:"neutral600",variant:"pi",children:e.size?ve(e.size,1):"-"})]})]})}),!s&&t.jsxs(t.Fragment,{children:[t.jsx(N,{children:t.jsx(b,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(N,{children:t.jsx(b,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(N,{children:t.jsx(b,{textColor:"neutral600",children:e.size?ve(e.size,1):"-"})})]}),t.jsx(N,{children:t.jsx(j,{justifyContent:"flex-end",children:t.jsx(B,{label:o({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(fe,{})})})})]})},Xs=m(Ct)`
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Js=({folder:e})=>{const n=Me(),{formatDate:s,formatMessage:r}=I(),{navigateToFolder:o}=Re(),a=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),o(e))};return t.jsxs(Xs,{tabIndex:0,role:"row",onClick:()=>o(e),onKeyDown:a,children:[t.jsx(N,{children:t.jsxs(j,{gap:3,alignItems:"center",children:[t.jsx(j,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(te,{width:20,height:20})}),t.jsx(b,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),!n&&t.jsxs(t.Fragment,{children:[t.jsx(N,{children:t.jsx(b,{textColor:"neutral600",children:e.createdAt?s(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(N,{children:t.jsx(b,{textColor:"neutral600",children:e.updatedAt?s(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(N,{children:t.jsx(b,{textColor:"neutral600",children:"-"})})]}),t.jsx(N,{children:t.jsx(j,{justifyContent:"flex-end",children:t.jsx(B,{label:r({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:i=>i.stopPropagation(),children:t.jsx(fe,{})})})})]})},er=({assets:e,folders:n=[],onAssetItemClick:s})=>{const r=Me(),{formatMessage:o}=I(),a=r?ke.filter(l=>l.name==="name"||l.name==="actions"):ke,i=n.length+e.length;return t.jsxs(zs,{colCount:a.length,rowCount:i+1,children:[t.jsx(Ks,{children:t.jsx(be,{children:a.map(l=>{const u=o(l.label);return"isVisuallyHidden"in l&&l.isVisuallyHidden?t.jsx(Pe,{children:t.jsx(ue,{children:o({id:f("table.header.actions"),defaultMessage:"actions"})})},l.name):t.jsx(Pe,{children:t.jsx(b,{textColor:"neutral600",variant:"sigma",children:u})},l.name)})})}),t.jsx(Qt,{children:i===0?t.jsx(be,{children:t.jsx(Qs,{colSpan:a.length,children:t.jsx(b,{textColor:"neutral600",children:o({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})})}):t.jsxs(t.Fragment,{children:[n.map(l=>t.jsx(Js,{folder:l},`folder-${l.id}`)),e.map(l=>t.jsx(Ys,{asset:l,onAssetItemClick:s},l.id))]})})]})},tr=m(P.Content)`
  max-width: 51.6rem;
`,nr=({open:e,folderName:n,parentFolderId:s,onClose:r})=>{const{formatMessage:o}=I(),{toggleNotification:a}=Ue(),[i,l]=d.useState(""),[u,g]=d.useState(),[c,{isLoading:p}]=Qn();d.useEffect(()=>{e&&(l(""),g(void 0))},[e]);const x=async v=>{v.preventDefault();const C=i.trim();if(!C){g(o({id:f("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{await c({name:C,parent:s}).unwrap(),a({type:"success",message:o({id:f("folder.create.success"),defaultMessage:"Folder has been created"})}),r()}catch(y){const h=y;h?.message?g(h.message):a({type:"danger",message:o({id:f("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(P.Root,{open:e,onOpenChange:r,children:t.jsxs(tr,{children:[t.jsx(P.Header,{children:t.jsx(P.Title,{children:o({id:f("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:n})})}),t.jsxs("form",{onSubmit:x,children:[t.jsx(P.Body,{children:t.jsxs(O.Root,{error:u,name:"name",required:!0,children:[t.jsx(O.Label,{children:o({id:f("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(We,{value:i,onChange:v=>{l(v.target.value),g(void 0)},autoFocus:!0}),t.jsx(O.Error,{})]})}),t.jsx(P.Footer,{children:t.jsxs(j,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(G,{variant:"tertiary",onClick:r,type:"button",children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",loading:p,children:o({id:f("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},wt=d.createContext(null),sr=m(S)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,rr=({children:e,onDrop:n})=>{const[s,r]=d.useState(!1),o=d.useRef(0),a={isDragging:s};d.useEffect(()=>{const c=()=>{r(!1),o.current=0},p=x=>{x.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",c),document.addEventListener("dragleave",p),()=>{document.removeEventListener("dragend",c),document.removeEventListener("dragleave",p)}},[]);const i=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),o.current+=1,c.dataTransfer.types.includes("Files")&&r(!0)},[]),l=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),u=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),c.dataTransfer.dropEffect="copy"},[]),g=d.useCallback(c=>{c.preventDefault(),c.stopPropagation(),r(!1),o.current=0;const{files:p}=c.dataTransfer;p?.length&&n&&n(Array.from(p))},[n]);return t.jsx(wt.Provider,{value:a,children:t.jsx(sr,{"data-testid":"assets-dropzone",onDragEnter:i,onDragLeave:l,onDragOver:u,onDrop:g,children:e})})},It=()=>{const e=d.useContext(wt);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},or=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,ar=m(S)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>or(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,ir=({children:e})=>{const{isDragging:n}=It();return t.jsxs(S,{position:"relative",children:[n&&t.jsx(ar,{}),e]})},lr=m(S)`
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
`,dr=({uploadDropZoneRef:e,folderName:n})=>{const{formatMessage:s}=I(),{isDragging:r}=It(),[o,a]=d.useState(0);return d.useEffect(()=>{if(!e?.current)return;const i=()=>{const u=e.current?.getBoundingClientRect();u&&a(g=>g!==u.left?u.left:g)};i();const l=new ResizeObserver(i);return l.observe(e.current),()=>l.disconnect()},[e]),r?t.jsxs(lr,{$leftContentWidth:o,children:[t.jsx(b,{textColor:"neutral0",children:s({id:f("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(j,{gap:2,alignItems:"center",children:[t.jsx(te,{width:20,height:20,fill:"neutral0"}),t.jsx(b,{textColor:"neutral0",fontWeight:"semiBold",children:n})]})]}):null},Mt=m.button`
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
`,St=(e,n,s=[])=>{for(const r of e){if(r.id===n)return s;if(r.children?.length){const o=r.id!=null?[...s,r.id]:s,a=St(r.children,n,o);if(a!==null)return a}}return null},cr=(e,n)=>{const[s,r]=d.useState(()=>new Set);d.useEffect(()=>{if(n==null)return;const i=St(e,n);!i||i.length===0||r(l=>{const u=new Set(l);let g=!1;for(const c of i)u.has(c)||(u.add(c),g=!0);return g?u:l})},[e,n]);const o=d.useCallback(i=>{r(l=>{const u=new Set(l);return u.has(i)?u.delete(i):u.add(i),u})},[]);return{isExpanded:d.useCallback(i=>s.has(i),[s]),toggleExpanded:o}},ur=({name:e,isActive:n})=>{const s=d.useRef(null),[r,o]=d.useState(!1);d.useLayoutEffect(()=>{const i=s.current;if(!i)return;const l=()=>{o(i.scrollWidth>i.clientWidth)};l();const u=new ResizeObserver(l);return u.observe(i),()=>u.disconnect()},[e]);const a=t.jsx(b,{ref:s,variant:"omega",fontWeight:n?"semiBold":"regular",ellipsis:!0,children:e});return r?t.jsx(qe,{label:e,children:a}):a},Tt=m.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,fr=1.6,pr=m(Ze)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,Rt=({node:e,level:n,currentFolderId:s,isExpanded:r,onToggle:o,onSelect:a})=>{const{formatMessage:i}=I();if(e.id==null)return null;const l=e.id,u=e.name??"",g=(e.children?.length??0)>0,c=r(l),p=s===l;return t.jsxs("li",{children:[t.jsxs(j,{alignItems:"center",paddingLeft:`${n*fr}rem`,gap:1,children:[t.jsx(B,{label:i({id:f(c?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:c?"Collapse {name}":"Expand {name}"},{name:u}),onClick:x=>{x.stopPropagation(),o(l)},variant:"ghost",withTooltip:!1,"aria-expanded":c,children:t.jsx(pr,{$expanded:c,fill:"neutral500"})}),t.jsx(S,{flex:"1",minWidth:0,children:t.jsx(Mt,{type:"button",$isActive:p,"aria-current":p?"page":void 0,onClick:()=>a(l),"data-testid":`folder-tree-node-${l}`,"data-folder-id":l,children:t.jsx(ur,{name:u,isActive:p})})})]}),g&&c&&t.jsx(Tt,{children:e.children.map(x=>t.jsx(Rt,{node:x,level:n+1,currentFolderId:s,isExpanded:r,onToggle:o,onSelect:a},x.id??x.name))})]})},gr=m(j)`
  /* TODO: reconcile 25.6rem (Figma) with admin WIDTH_SIDE_NAVIGATION (23.2rem) */
  width: 25.6rem;
  height: 100%;
  min-height: 100%;
  background: ${({theme:e})=>e.colors.neutral0};
  flex-shrink: 0;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`,hr=m(S)`
  flex-shrink: 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,mr=m(j)`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,xr=({currentFolderId:e,onSelectFolder:n})=>{const{formatMessage:s}=I(),{data:r=[],isLoading:o,isError:a}=Xn(),{isExpanded:i,toggleExpanded:l}=cr(r,e),u=e==null;return t.jsxs(gr,{direction:"column",alignItems:"stretch",tag:"nav","aria-label":s({id:f("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(hr,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:t.jsx(b,{variant:"beta",tag:"h2",children:s({id:f("sidebar.title"),defaultMessage:"Media library"})})}),t.jsxs(mr,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(Mt,{type:"button",$isActive:u,"aria-current":u?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(Jt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(b,{variant:"omega",fontWeight:u?"semiBold":"regular",children:s({id:f("sidebar.home"),defaultMessage:"Home"})})]}),t.jsxs(S,{children:[t.jsxs(j,{alignItems:"center",gap:1,padding:1,children:[t.jsx(te,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(b,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:s({id:f("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(j,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(Q,{children:s({id:f("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):a?t.jsx(S,{padding:1,paddingTop:2,children:t.jsx(b,{variant:"pi",textColor:"danger600",children:s({id:f("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):r.length===0?t.jsx(S,{padding:1,paddingTop:2,children:t.jsx(b,{variant:"pi",textColor:"neutral500",children:s({id:f("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(Tt,{children:r.map(g=>t.jsx(Rt,{node:g,level:0,currentFolderId:e,isExpanded:i,onToggle:l,onSelect:n},g.id??g.name))})]})]})]})},jr=({open:e,onClose:n,onUpload:s})=>{const{formatMessage:r}=I(),[o,a]=d.useState(""),[i,l]=d.useState(null),u=()=>{a(""),l(null),n()},g=async c=>{c.preventDefault();const{urls:p,error:x}=tn(o);if(x){l(x);return}l(null),u(),await s(p)};return t.jsx(P.Root,{open:e,onOpenChange:c=>!c&&u(),children:t.jsx(P.Content,{children:t.jsxs("form",{onSubmit:g,children:[t.jsx(P.Header,{children:t.jsx(P.Title,{children:r({id:f("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(P.Body,{children:t.jsxs(O.Root,{error:i||void 0,hint:r({id:f("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(O.Label,{children:r({id:f("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(en,{name:"urls",minHeight:"unset",rows:Math.min(o.split(`
`).length,7),maxHeight:"10.5rem",placeholder:r({id:f("input.url.placeholder"),defaultMessage:"Empty"}),value:o,onChange:c=>{a(c.target.value),l(null)}}),t.jsx(O.Hint,{}),t.jsx(O.Error,{})]})}),t.jsxs(P.Footer,{children:[t.jsx(G,{variant:"tertiary",onClick:u,children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(G,{type:"submit",children:r({id:f("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},de=20,vr=({folder:e=null,sort:n}={})=>{const[s,r]=d.useState(1),o=d.useRef([]),a=d.useRef(!0),{currentData:i,isLoading:l,isFetching:u,error:g}=ht({folder:e,page:s,pageSize:de,sort:n}),c=i?.pagination,p=d.useMemo(()=>{if(!i)return o.current;const y=i.results;if(s===1)o.current=y;else{const h=(s-1)*de;if(o.current.length<h-de)return o.current;o.current.length<s*de&&(o.current=[...o.current,...y])}return o.current},[i,s]);d.useEffect(()=>{if(a.current){a.current=!1;return}r(1),o.current=[]},[e,n]);const x=c?s<c.pageCount:!1,v=u&&s>1,C=d.useCallback(()=>{r(y=>y+1)},[]);return{assets:p,pagination:c,isLoading:l,isFetchingMore:v,hasNextPage:x,fetchNextPage:C,error:g}},br={threshold:.1},yr=({view:e,folderId:n,onAssetItemClick:s})=>{const{formatMessage:r}=I(),{assets:o,isLoading:a,isFetchingMore:i,hasNextPage:l,fetchNextPage:u,error:g}=vr({folder:n}),{data:c=[],isLoading:p}=Zn({parentId:n}),x=e===J.GRID,v=a||p,C=cn(d.useCallback(y=>{y&&l&&!i&&u()},[l,i,u]),br);return v?t.jsx(j,{justifyContent:"center",padding:8,children:t.jsx(Q,{children:r({id:"app.loading",defaultMessage:"Loading..."})})}):g?t.jsx(S,{padding:8,children:t.jsx(b,{textColor:"danger600",children:r({id:f("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):c.length===0&&o.length===0?t.jsx(S,{padding:8,children:t.jsx(b,{textColor:"neutral600",children:r({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(t.Fragment,{children:[x?t.jsx(Ws,{folders:c,assets:o,onAssetItemClick:s}):t.jsx(er,{assets:o,folders:c,onAssetItemClick:s}),t.jsx("div",{ref:C,style:{height:1}}),i&&t.jsx(j,{justifyContent:"center",padding:4,children:t.jsx(Q,{children:r({id:f("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})})]})},Cr=m(qn)`
  display: flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
`,Ne=m(zn)`
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
`,wr=m(S)`
  [data-strapi-header] {
    background: ${({theme:e})=>e.colors.neutral0};

    h1 {
      font-size: 1.8rem;
    }
  }
`,Ir=()=>{const{formatMessage:e}=I(),{openDetails:n}=yt(),{currentFolderId:s,navigateToFolderId:r,navigateToRoot:o}=Re(),{error:a}=gt({id:s},{skip:s===null});d.useEffect(()=>{a?.name==="NotFoundError"&&o()},[a,o]);const{title:i,itemCount:l}=mt(s),u=e({id:f("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},{count:l}),g=i?`${i} (${u})`:e({id:"app.loading",defaultMessage:"Loading..."}),[c,p]=d.useState(!1),[x,v]=nn(qs.view,J.GRID),C=x===J.GRID,[y,h]=d.useState(!1),T=d.useRef(null),A=d.useRef(null),[M]=sn(),[R]=rn(),w=async($,_)=>{if($.length===0)return;const Y=new FormData,re=[];$.forEach(oe=>{Y.append("files",oe),re.push({name:oe.name,caption:null,alternativeText:null,folder:_})}),Y.append("fileInfo",JSON.stringify(re));try{await M({formData:Y,totalFiles:$.length}).unwrap()}catch{}},F=()=>{T.current?.click()},k=async $=>{const _=$.target.files;_&&_.length>0&&await w(Array.from(_),s),$.target.value=""},D=async $=>{await w($,s)},Z=async $=>{try{await R({urls:$,folderId:s}).unwrap()}catch{}};return t.jsxs(t.Fragment,{children:[t.jsx(rr,{onDrop:D,children:t.jsx(S,{ref:A,children:t.jsxs(ge.Root,{minHeight:"100vh",background:"neutral0",sideNav:t.jsx(xr,{currentFolderId:s,onSelectFolder:r}),children:[t.jsx(ue,{children:t.jsx("input",{type:"file",ref:T,onChange:k,multiple:!0})}),t.jsx(wr,{children:t.jsx(ge.Header,{title:g,primaryAction:t.jsxs(ln,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(Ze,{}),label:e({id:f("new"),defaultMessage:"New"}),children:[t.jsx(he,{onSelect:()=>p(!0),startIcon:t.jsx(te,{}),children:e({id:f("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(he,{onSelect:F,startIcon:t.jsx(dn,{}),children:e({id:f("import-files"),defaultMessage:"Import files"})}),t.jsx(he,{onSelect:()=>h(!0),startIcon:t.jsx(Ke,{}),children:e({id:f("import-from-url"),defaultMessage:"Import from URL"})})]}),subtitle:t.jsxs(j,{justifyContent:"space-between",alignItems:"center",gap:4,width:"100%",children:[t.jsx(j,{gap:4,alignItems:"center",children:"TODO: Filters and search"}),t.jsxs(j,{gap:4,alignItems:"center",children:[t.jsx(S,{children:"TODO: Sort"}),t.jsxs(Cr,{type:"single",value:C?"grid":"table",onValueChange:$=>$&&v($==="grid"?J.GRID:J.TABLE),"aria-label":e({id:f("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Ne,{value:"table","aria-label":e({id:f("view.table"),defaultMessage:"Table view"}),children:[t.jsx(on,{}),e({id:f("view.table"),defaultMessage:"Table view"})]}),t.jsxs(Ne,{value:"grid","aria-label":e({id:f("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(an,{}),e({id:f("view.grid"),defaultMessage:"Grid view"})]})]})]})]})})}),t.jsx(ge.Content,{children:t.jsxs(ir,{children:[t.jsx(dr,{uploadDropZoneRef:A,folderName:i}),t.jsx(yr,{view:x,folderId:s,onAssetItemClick:n})]})})]})})}),t.jsx(nr,{open:c,folderName:i,parentFolderId:s,onClose:()=>p(!1)}),t.jsx(jr,{open:y,onClose:()=>h(!1),onUpload:Z}),t.jsx(Ds,{})]})},Tr=()=>{const{formatMessage:e}=I(),n=e({id:f("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(Ee.Main,{children:[t.jsx(Ee.Title,{children:n}),t.jsx(un,{children:t.jsx(fn,{index:!0,element:t.jsx(Ir,{})})})]})};export{Tr as UnstableMediaLibrary};
