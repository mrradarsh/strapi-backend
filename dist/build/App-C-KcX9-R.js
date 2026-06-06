import{r as c,j as t,df as T,g_ as Pe,g$ as $e,h0 as Le,h1 as pt,eZ as gt,h2 as mt,h3 as ht,h4 as xt,h5 as jt,h6 as vt,h7 as we,a as S,h8 as te,h9 as f,T as x,I as y,y as h,R as E,F as ne,u as ke,ha as U,bK as ve,de as bt,hb as yt,hc as Ct,p as Ne,z as It,hd as wt,he as ge,A as q,E as _e,cs as Oe,H as L,a_ as Ge,bq as St,aY as Mt,aZ as Se,N as Rt,U as Y,g4 as oe,s as se,dP as ae,dq as Tt,dm as Dt,dn as Ft,c as be,eS as me,eU as Et,eW as At,eR as Pt,eT as $t,eV as Ue,cq as A,bB as Lt,hf as kt,hg as Nt,hh as _t,hi as Ot,L as ce,gi as Gt,gj as Ut,dU as Bt,hj as de,ak as Vt,hk as zt,fI as Ht,hl as qt,P as Me,O as Wt,Q as Kt}from"./strapi-DvvZIjB2.js";import{g as Zt}from"./users-DLc-PG84.js";function ye(e,n=[]){let r=[];function o(a,i){const l=c.createContext(i),u=r.length;r=[...r,i];const p=g=>{const{scope:j,children:v,...C}=g,b=j?.[e]?.[u]||l,m=c.useMemo(()=>C,Object.values(C));return t.jsx(b.Provider,{value:m,children:v})};p.displayName=a+"Provider";function d(g,j){const v=j?.[e]?.[u]||l,C=c.useContext(v);if(C)return C;if(i!==void 0)return i;throw new Error(`\`${g}\` must be used within \`${a}\``)}return[p,d]}const s=()=>{const a=r.map(i=>c.createContext(i));return function(l){const u=l?.[e]||a;return c.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return s.scopeName=e,[o,Qt(s,...n)]}function Qt(...e){const n=e[0];if(e.length===1)return n;const r=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(a){const i=o.reduce((l,{useScope:u,scopeName:p})=>{const g=u(a)[`__scope${p}`];return{...l,...g}},{});return c.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return r.scopeName=n.scopeName,r}function Re(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Be(...e){return n=>{let r=!1;const o=e.map(s=>{const a=Re(s,n);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let s=0;s<o.length;s++){const a=o[s];typeof a=="function"?a():Re(e[s],null)}}}}function he(...e){return c.useCallback(Be(...e),e)}function xe(e){const n=Yt(e),r=c.forwardRef((o,s)=>{const{children:a,...i}=o,l=c.Children.toArray(a),u=l.find(Xt);if(u){const p=u.props.children,d=l.map(g=>g===u?c.Children.count(p)>1?c.Children.only(null):c.isValidElement(p)?p.props.children:null:g);return t.jsx(n,{...i,ref:s,children:c.isValidElement(p)?c.cloneElement(p,void 0,d):null})}return t.jsx(n,{...i,ref:s,children:a})});return r.displayName=`${e}.Slot`,r}function Yt(e){const n=c.forwardRef((r,o)=>{const{children:s,...a}=r;if(c.isValidElement(s)){const i=tn(s),l=en(a,s.props);return s.type!==c.Fragment&&(l.ref=o?Be(o,i):i),c.cloneElement(s,l)}return c.Children.count(s)>1?c.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var Jt=Symbol("radix.slottable");function Xt(e){return c.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Jt}function en(e,n){const r={...n};for(const o in n){const s=e[o],a=n[o];/^on[A-Z]/.test(o)?s&&a?r[o]=(...l)=>{const u=a(...l);return s(...l),u}:s&&(r[o]=s):o==="style"?r[o]={...s,...a}:o==="className"&&(r[o]=[s,a].filter(Boolean).join(" "))}return{...e,...r}}function tn(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var nn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],W=nn.reduce((e,n)=>{const r=xe(`Primitive.${n}`),o=c.forwardRef((s,a)=>{const{asChild:i,...l}=s,u=i?r:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:a})});return o.displayName=`Primitive.${n}`,{...e,[n]:o}},{});function B(e,n,{checkForDefaultPrevented:r=!0}={}){return function(s){if(e?.(s),r===!1||!s.defaultPrevented)return n?.(s)}}function rn(e){const n=e+"CollectionProvider",[r,o]=ye(n),[s,a]=r(n,{collectionRef:{current:null},itemMap:new Map}),i=b=>{const{scope:m,children:M}=b,F=T.useRef(null),I=T.useRef(new Map).current;return t.jsx(s,{scope:m,itemMap:I,collectionRef:F,children:M})};i.displayName=n;const l=e+"CollectionSlot",u=xe(l),p=T.forwardRef((b,m)=>{const{scope:M,children:F}=b,I=a(l,M),R=he(m,I.collectionRef);return t.jsx(u,{ref:R,children:F})});p.displayName=l;const d=e+"CollectionItemSlot",g="data-radix-collection-item",j=xe(d),v=T.forwardRef((b,m)=>{const{scope:M,children:F,...I}=b,R=T.useRef(null),k=he(m,R),w=a(d,M);return T.useEffect(()=>(w.itemMap.set(R,{ref:R,...I}),()=>void w.itemMap.delete(R))),t.jsx(j,{[g]:"",ref:k,children:F})});v.displayName=d;function C(b){const m=a(e+"CollectionConsumer",b);return T.useCallback(()=>{const F=m.collectionRef.current;if(!F)return[];const I=Array.from(F.querySelectorAll(`[${g}]`));return Array.from(m.itemMap.values()).sort((w,P)=>I.indexOf(w.ref.current)-I.indexOf(P.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:i,Slot:p,ItemSlot:v},C,o]}var Ve=globalThis?.document?c.useLayoutEffect:()=>{},on=Pe[" useId ".trim().toString()]||(()=>{}),sn=0;function an(e){const[n,r]=c.useState(on());return Ve(()=>{r(o=>o??String(sn++))},[e]),n?`radix-${n}`:""}function ln(e){const n=c.useRef(e);return c.useEffect(()=>{n.current=e}),c.useMemo(()=>(...r)=>n.current?.(...r),[])}var cn=Pe[" useInsertionEffect ".trim().toString()]||Ve;function ie({prop:e,defaultProp:n,onChange:r=()=>{},caller:o}){const[s,a,i]=dn({defaultProp:n,onChange:r}),l=e!==void 0,u=l?e:s;{const d=c.useRef(e!==void 0);c.useEffect(()=>{const g=d.current;g!==l&&console.warn(`${o} is changing from ${g?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,o])}const p=c.useCallback(d=>{if(l){const g=un(d)?d(e):d;g!==e&&i.current?.(g)}else a(d)},[l,e,a,i]);return[u,p]}function dn({defaultProp:e,onChange:n}){const[r,o]=c.useState(e),s=c.useRef(r),a=c.useRef(n);return cn(()=>{a.current=n},[n]),c.useEffect(()=>{s.current!==r&&(a.current?.(r),s.current=r)},[r,s]),[r,o,a]}function un(e){return typeof e=="function"}var fn=c.createContext(void 0);function ze(e){const n=c.useContext(fn);return e||n||"ltr"}var ue="rovingFocusGroup.onEntryFocus",pn={bubbles:!1,cancelable:!0},K="RovingFocusGroup",[je,He,gn]=rn(K),[mn,qe]=ye(K,[gn]),[hn,xn]=mn(K),We=c.forwardRef((e,n)=>t.jsx(je.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(je.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(jn,{...e,ref:n})})}));We.displayName=K;var jn=c.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:r,orientation:o,loop:s=!1,dir:a,currentTabStopId:i,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:u,onEntryFocus:p,preventScrollOnEntryFocus:d=!1,...g}=e,j=c.useRef(null),v=he(n,j),C=ze(a),[b,m]=ie({prop:i,defaultProp:l??null,onChange:u,caller:K}),[M,F]=c.useState(!1),I=ln(p),R=He(r),k=c.useRef(!1),[w,P]=c.useState(0);return c.useEffect(()=>{const D=j.current;if(D)return D.addEventListener(ue,I),()=>D.removeEventListener(ue,I)},[I]),t.jsx(hn,{scope:r,orientation:o,dir:C,loop:s,currentTabStopId:b,onItemFocus:c.useCallback(D=>m(D),[m]),onItemShiftTab:c.useCallback(()=>F(!0),[]),onFocusableItemAdd:c.useCallback(()=>P(D=>D+1),[]),onFocusableItemRemove:c.useCallback(()=>P(D=>D-1),[]),children:t.jsx(W.div,{tabIndex:M||w===0?-1:0,"data-orientation":o,...g,ref:v,style:{outline:"none",...e.style},onMouseDown:B(e.onMouseDown,()=>{k.current=!0}),onFocus:B(e.onFocus,D=>{const Q=!k.current;if(D.target===D.currentTarget&&Q&&!M){const V=new CustomEvent(ue,pn);if(D.currentTarget.dispatchEvent(V),!V.defaultPrevented){const le=R().filter(O=>O.focusable),dt=le.find(O=>O.active),ut=le.find(O=>O.id===b),ft=[dt,ut,...le].filter(Boolean).map(O=>O.ref.current);Qe(ft,d)}}k.current=!1}),onBlur:B(e.onBlur,()=>F(!1))})})}),Ke="RovingFocusGroupItem",Ze=c.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:r,focusable:o=!0,active:s=!1,tabStopId:a,children:i,...l}=e,u=an(),p=a||u,d=xn(Ke,r),g=d.currentTabStopId===p,j=He(r),{onFocusableItemAdd:v,onFocusableItemRemove:C,currentTabStopId:b}=d;return c.useEffect(()=>{if(o)return v(),()=>C()},[o,v,C]),t.jsx(je.ItemSlot,{scope:r,id:p,focusable:o,active:s,children:t.jsx(W.span,{tabIndex:g?0:-1,"data-orientation":d.orientation,...l,ref:n,onMouseDown:B(e.onMouseDown,m=>{o?d.onItemFocus(p):m.preventDefault()}),onFocus:B(e.onFocus,()=>d.onItemFocus(p)),onKeyDown:B(e.onKeyDown,m=>{if(m.key==="Tab"&&m.shiftKey){d.onItemShiftTab();return}if(m.target!==m.currentTarget)return;const M=yn(m,d.orientation,d.dir);if(M!==void 0){if(m.metaKey||m.ctrlKey||m.altKey||m.shiftKey)return;m.preventDefault();let I=j().filter(R=>R.focusable).map(R=>R.ref.current);if(M==="last")I.reverse();else if(M==="prev"||M==="next"){M==="prev"&&I.reverse();const R=I.indexOf(m.currentTarget);I=d.loop?Cn(I,R+1):I.slice(R+1)}setTimeout(()=>Qe(I))}}),children:typeof i=="function"?i({isCurrentTabStop:g,hasTabStop:b!=null}):i})})});Ze.displayName=Ke;var vn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function bn(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function yn(e,n,r){const o=bn(e.key,r);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return vn[o]}function Qe(e,n=!1){const r=document.activeElement;for(const o of e)if(o===r||(o.focus({preventScroll:n}),document.activeElement!==r))return}function Cn(e,n){return e.map((r,o)=>e[(n+o)%e.length])}var In=We,wn=Ze,Ye="Toggle",Je=c.forwardRef((e,n)=>{const{pressed:r,defaultPressed:o,onPressedChange:s,...a}=e,[i,l]=ie({prop:r,onChange:s,defaultProp:o??!1,caller:Ye});return t.jsx(W.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":e.disabled?"":void 0,...a,ref:n,onClick:B(e.onClick,()=>{e.disabled||l(!i)})})});Je.displayName=Ye;var _="ToggleGroup",[Xe]=ye(_,[qe]),et=qe(),Ce=T.forwardRef((e,n)=>{const{type:r,...o}=e;if(r==="single"){const s=o;return t.jsx(Sn,{...s,ref:n})}if(r==="multiple"){const s=o;return t.jsx(Mn,{...s,ref:n})}throw new Error(`Missing prop \`type\` expected on \`${_}\``)});Ce.displayName=_;var[tt,nt]=Xe(_),Sn=T.forwardRef((e,n)=>{const{value:r,defaultValue:o,onValueChange:s=()=>{},...a}=e,[i,l]=ie({prop:r,defaultProp:o??"",onChange:s,caller:_});return t.jsx(tt,{scope:e.__scopeToggleGroup,type:"single",value:T.useMemo(()=>i?[i]:[],[i]),onItemActivate:l,onItemDeactivate:T.useCallback(()=>l(""),[l]),children:t.jsx(rt,{...a,ref:n})})}),Mn=T.forwardRef((e,n)=>{const{value:r,defaultValue:o,onValueChange:s=()=>{},...a}=e,[i,l]=ie({prop:r,defaultProp:o??[],onChange:s,caller:_}),u=T.useCallback(d=>l((g=[])=>[...g,d]),[l]),p=T.useCallback(d=>l((g=[])=>g.filter(j=>j!==d)),[l]);return t.jsx(tt,{scope:e.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:u,onItemDeactivate:p,children:t.jsx(rt,{...a,ref:n})})});Ce.displayName=_;var[Rn,Tn]=Xe(_),rt=T.forwardRef((e,n)=>{const{__scopeToggleGroup:r,disabled:o=!1,rovingFocus:s=!0,orientation:a,dir:i,loop:l=!0,...u}=e,p=et(r),d=ze(i),g={role:"group",dir:d,...u};return t.jsx(Rn,{scope:r,rovingFocus:s,disabled:o,children:s?t.jsx(In,{asChild:!0,...p,orientation:a,dir:d,loop:l,children:t.jsx(W.div,{...g,ref:n})}):t.jsx(W.div,{...g,ref:n})})}),re="ToggleGroupItem",ot=T.forwardRef((e,n)=>{const r=nt(re,e.__scopeToggleGroup),o=Tn(re,e.__scopeToggleGroup),s=et(e.__scopeToggleGroup),a=r.value.includes(e.value),i=o.disabled||e.disabled,l={...e,pressed:a,disabled:i},u=T.useRef(null);return o.rovingFocus?t.jsx(wn,{asChild:!0,...s,focusable:!i,active:a,ref:u,children:t.jsx(Te,{...l,ref:n})}):t.jsx(Te,{...l,ref:n})});ot.displayName=re;var Te=T.forwardRef((e,n)=>{const{__scopeToggleGroup:r,value:o,...s}=e,a=nt(re,r),i={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l=a.type==="single"?i:void 0;return t.jsx(Je,{...l,...s,ref:n,onPressedChange:u=>{u?a.onItemActivate(o):a.onItemDeactivate(o)}})}),Dn=Ce,Fn=ot;const En=$e.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(n={})=>{const{parentId:r}=n,o={};return r!=null?o.filters={$and:[{parent:{id:r}}]}:o.filters={$and:[{parent:{id:{$null:!0}}}]},{url:"/upload/folders",method:"GET",config:{params:o}}},transformResponse:n=>n.data,providesTags:n=>n?[...n.map(({id:r})=>({type:"Folder",id:r})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:n=>({url:"/upload/folders",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"Folder",id:"LIST"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:n=>n?.data??n??[],providesTags:n=>n?[...n.map(({id:r})=>({type:"Folder",id:r})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:n})=>({url:`/upload/folders/${n}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:n=>n.data,providesTags:(n,r,{id:o})=>[{type:"Folder",id:o}]})})}),{useCreateFolderMutation:An,useGetFoldersQuery:Pn,useGetFolderQuery:$n,useGetAllFoldersQuery:Ln}=En;var N=function(e){return e.Video="video",e.Image="image",e.Document="doc",e.Audio="audio",e}({});const kn=$e.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(n={})=>{const{folder:r,...o}=n,s={...o};return r!=null?s.filters={$and:[{folder:{id:r}}]}:s.filters={$and:[{folder:{id:{$null:!0}}}]},{url:"/upload/files",method:"GET",config:{params:s}}},transformResponse:n=>n,providesTags:n=>n?[...n.results.map(({id:r})=>({type:"Asset",id:r})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:n=>({url:`/upload/files/${n}`,method:"GET"}),providesTags:(n,r,o)=>[{type:"Asset",id:o}]}),updateAsset:e.mutation({query:({id:n,fileInfo:r})=>{const o=new FormData;return o.append("fileInfo",JSON.stringify(r)),{url:"/upload",method:"POST",data:o,config:{params:{id:n}}}},invalidatesTags:(n,r,{id:o})=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"}]})})}),{useGetAssetsQuery:st,useGetAssetQuery:Nn,useUpdateAssetMutation:_n}=kn,On={pdf:vt,csv:jt,xls:xt,zip:ht},Z=(e,n)=>{const r=Le(n);return e?.includes(N.Image)?pt:e?.includes(N.Video)?gt:e?.includes(N.Audio)?mt:r?On[r]||we:we},z=h(E)`
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
`,J=h(x)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,Gn=h.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Un=h.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Bn=h.audio`
  width: 100%;
`,Vn=h.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,zn=h(x)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,Hn=h(x)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,X=()=>{const{formatMessage:e}=S();return t.jsx(Hn,{justifyContent:"center",alignItems:"center",children:t.jsx(ne,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},qn=({asset:e})=>{const{formatMessage:n}=S(),{alternativeText:r,ext:o,mime:s,url:a}=e,i=te(a),[l,u]=c.useState(!1);if(c.useEffect(()=>{u(!1)},[i]),s?.includes(N.Image)){const g=te(a);if(g)return t.jsxs(z,{children:[!l&&t.jsx(X,{}),t.jsx(J,{children:t.jsx(Gn,{src:g,alt:r||e.name||"",onLoad:()=>u(!0),onError:()=>u(!0)})})]})}if(s?.includes(N.Video)&&i)return t.jsxs(z,{children:[!l&&t.jsx(X,{}),t.jsx(J,{children:t.jsx(Un,{src:i,controls:!0,title:e.name,onLoadedData:()=>u(!0),onError:()=>u(!0),children:n({id:f("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(s?.includes(N.Audio)&&i)return t.jsxs(z,{children:[!l&&t.jsx(X,{}),t.jsx(J,{children:t.jsx(x,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Bn,{src:i,controls:!0,onLoadedData:()=>u(!0),onError:()=>u(!0)})})})]});if((o?.toLowerCase()==="pdf"||o?.toLowerCase()===".pdf"||s==="application/pdf")&&i)return t.jsxs(z,{children:[!l&&t.jsx(X,{}),t.jsx(J,{children:t.jsx(Vn,{src:`${i}#toolbar=0`,title:e.name,onLoad:()=>u(!0)})})]});const d=Z(s,o);return t.jsx(z,{children:t.jsxs(zn,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(d,{width:24,height:24}),t.jsx(y,{variant:"pi",children:n({id:f("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},fe="assetId",at=()=>{const[{query:e},n]=ke(),r=e?.[fe],o=r?parseInt(r,10):null,s=o!==null&&!Number.isNaN(o),[a,i]=c.useState(s),l=c.useRef(null);c.useEffect(()=>{s&&(l.current=o,i(!0))},[s,o]);const u=c.useCallback(g=>{g.target===g.currentTarget&&!s&&i(!1)},[s]),p=c.useCallback(g=>{n({[fe]:String(g)},"push",!0)},[n]),d=c.useCallback(()=>{n({[fe]:void 0},"remove",!0)},[n]);return{assetId:s?o:l.current,isVisible:s,shouldRenderDrawer:a,onCloseAnimationEnd:u,openDetails:p,closeDetails:d}},Wn=h(x)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,G=({label:e,value:n})=>t.jsxs(Wn,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(y,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(y,{variant:"pi",textColor:"neutral700",children:n??"-"})]}),Kn=h(Rt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,pe=({name:e,label:n,required:r})=>{const{formatMessage:o}=S(),s=_e(e),a=Oe("DetailField",u=>u.isSubmitting),i=s.value??"",l=o({id:f("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:n});return t.jsxs(L.Root,{name:e,required:r,children:[t.jsx(L.Label,{children:n}),t.jsx(Ge,{value:i,onChange:u=>s.onChange(e,u.target.value),endAction:i?void 0:t.jsx(St,{label:l,children:t.jsx(Kn,{"aria-label":l,role:"img"})}),type:"text",disabled:a})]})},Zn=({label:e,rootLabel:n,folders:r})=>{const o=_e("folder"),s=Oe("LocationField",a=>a.isSubmitting);return t.jsxs(L.Root,{name:"folder",required:!0,children:[t.jsx(L.Label,{children:e}),t.jsxs(Mt,{value:o.value==null?"":String(o.value),onChange:a=>{const i=a===""?null:Number(a);o.onChange("folder",i)},disabled:s,children:[t.jsx(Se,{value:"",children:n}),r.map(a=>t.jsx(Se,{value:String(a.id),children:a.name},a.id))]})]})},Qn=({asset:e})=>{const{formatMessage:n,formatDate:r}=S(),{toggleNotification:o}=Ne(),{data:s=[]}=Ln(),[a]=_n(),i=e.mime?.includes(N.Image),l={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},u=async p=>{if("error"in await a({id:e.id,fileInfo:{name:p.name,caption:p.caption,alternativeText:p.alternativeText,folder:p.folder}})){o({type:"danger",message:n({id:f("asset-details.update.error"),defaultMessage:"Failed to update the file."})});return}o({type:"success",message:n({id:f("asset-details.update.success"),defaultMessage:"File updated"})})};return t.jsx(It,{method:"POST",initialValues:l,onSubmit:u,children:({modified:p,isSubmitting:d,values:g,resetForm:j})=>{const v=(g.name??"").trim()==="";return t.jsxs(t.Fragment,{children:[t.jsx(wt,{onProceed:j}),t.jsxs(x,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(y,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:f("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(x,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(G,{label:n({id:f("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(G,{label:n({id:f("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(G,{label:n({id:f("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?Zt({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(G,{label:n({id:f("asset-details.size"),defaultMessage:"Size"}),value:e.size?ge(e.size,1):null}),i&&(e.width!=null||e.height!=null)&&t.jsx(G,{label:n({id:f("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(G,{label:n({id:f("asset-details.extension"),defaultMessage:"Extension"}),value:Le(e.ext)}),t.jsx(G,{label:n({id:f("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(pe,{name:"name",label:n({id:f("asset-details.fileName"),defaultMessage:"File name"}),required:!0}),t.jsx(Zn,{label:n({id:f("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:f("plugin.home"),defaultMessage:"Home"}),folders:s}),i&&t.jsxs(t.Fragment,{children:[t.jsx(pe,{name:"caption",label:n({id:f("asset-details.caption"),defaultMessage:"Caption"})}),t.jsx(pe,{name:"alternativeText",label:n({id:f("asset-details.alternativeText"),defaultMessage:"Alternative text"})})]}),t.jsx(x,{justifyContent:"flex-end",gap:2,paddingTop:2,children:t.jsx(q,{type:"submit",variant:"default",loading:d,disabled:!p||d||v,children:n({id:f("asset-details.save"),defaultMessage:"Save changes"})})})]})]})}},e.id)},Yn=({asset:e,closeDetails:n})=>{const r=e?Z(e.mime,e.ext):yt;return t.jsxs(x,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,children:[t.jsx(r,{width:20,height:20}),t.jsx(U.Title,{asChild:!0,children:t.jsx(y,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(E,{marginLeft:"auto",children:t.jsx(U.CloseButton,{onClose:n,children:t.jsx(Ct,{})})})]})},Jn=({assetId:e,closeDetails:n})=>{const{formatMessage:r}=S(),{data:o,isLoading:s,error:a}=Nn(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return s?t.jsx(x,{justifyContent:"center",padding:8,children:t.jsx(ne,{children:r({id:"app.loading",defaultMessage:"Loading..."})})}):a||!o?t.jsx(x,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(bt,{variant:"danger",closeLabel:r({id:"global.close",defaultMessage:"Close"}),onClose:n,children:r({id:f("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Yn,{asset:o,closeDetails:n}),t.jsxs(U.ScrollableContent,{children:[t.jsx(qn,{asset:o}),t.jsx(Qn,{asset:o})]})]})},Xn=()=>{const{formatMessage:e}=S(),{assetId:n,isVisible:r,shouldRenderDrawer:o,onCloseAnimationEnd:s,closeDetails:a}=at();return!o||n===null?null:t.jsxs(U.Root,{isVisible:r,onClose:a,children:[t.jsx("div",{children:t.jsxs(ve,{children:[t.jsx(U.Title,{children:e({id:f("asset-details.title"),defaultMessage:"File details"})}),t.jsx(U.Description,{children:e({id:f("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(U.Body,{animationDirection:"left",width:"41.6rem",height:"100vh",onAnimationEnd:s,children:t.jsx(Jn,{assetId:n,closeDetails:a})})]})},Ie=()=>{const[{query:e},n]=ke();return{currentFolderId:e?.folder?Number(e.folder):null,navigateToFolder:s=>{n({folder:String(s.id)})}}},er=h(Dt)`
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
`,tr=h(E)`
  grid-column: 1 / -1;
`,nr=h(x)`
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
`,rr=h(x)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,or=h(y)`
  flex: 1;
  min-width: 0;
`,sr=({folder:e})=>{const{formatMessage:n}=S(),{navigateToFolder:r}=Ie(),o=s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),r(e))};return t.jsxs(nr,{onClick:()=>r(e),onKeyDown:o,role:"listitem",tabIndex:0,children:[t.jsx(rr,{children:t.jsx(oe,{width:20,height:20})}),t.jsx(or,{textColor:"neutral800",ellipsis:!0,children:e.name}),t.jsx(se,{label:n({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:s=>s.stopPropagation(),children:t.jsx(ae,{})})]})},De=h(E)`
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
`,ar=h.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ir=h(x)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,lr=({asset:e})=>{const{alternativeText:n,ext:r,formats:o,mime:s,url:a}=e;if(s?.includes(N.Image)){const l=te(o?.thumbnail?.url)??te(a);if(l)return t.jsx(De,{children:t.jsx(ar,{src:l,alt:n||""})})}const i=Z(s,r);return t.jsx(De,{children:t.jsx(ir,{justifyContent:"center",alignItems:"center",children:t.jsx(i,{width:48,height:48})})})},cr=h(Ft)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,dr=h(x)`
  min-width: 0;
  width: 100%;
`,ur=h(x)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,fr=h(y)`
  flex: 1;
  min-width: 0;
`,pr=({asset:e,onAssetItemClick:n})=>{const{formatMessage:r}=S(),o=Z(e.mime,e.ext),s=a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n(e.id))};return t.jsxs(er,{tabIndex:0,role:"listitem",onClick:()=>n(e.id),onKeyDown:s,children:[t.jsx(cr,{children:t.jsx(lr,{asset:e})}),t.jsx(Tt,{children:t.jsxs(dr,{alignItems:"center",gap:2,children:[t.jsx(ur,{children:t.jsx(o,{width:20,height:20})}),t.jsx(fr,{textColor:"primary800",ellipsis:!0,children:e.name}),t.jsx(se,{label:r({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(ae,{})})]})})]})},gr=({assets:e,folders:n=[],onAssetItemClick:r})=>{const{formatMessage:o}=S();return n.length+e.length===0?t.jsx(E,{padding:8,children:t.jsx(y,{textColor:"neutral600",children:o({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(Y.Root,{gap:4,role:"list",children:[n.length>0&&t.jsx(tr,{children:t.jsx(Y.Root,{gap:4,children:n.map(a=>t.jsx(Y.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(sr,{folder:a})},`folder-${a.id}`))})}),e.map(a=>t.jsx(Y.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(pr,{asset:a,onAssetItemClick:r})},a.id))]})},mr={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},H={GRID:0,TABLE:1},Fe=[{name:"name",label:{id:f("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:f("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:f("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:f("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:f("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],hr=h(At)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;
`,xr=h(Pt)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Ee=h($t)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;
`,$=h(Ue)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,it=h(me)`
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
    ${$} {
      border-bottom: 0;
    }
  }
`,jr=h(Ue)`
  padding: ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,vr=({asset:e})=>{const{ext:n,mime:r}=e,o=Z(r,n);return t.jsx(x,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(o,{width:20,height:20})})},br=({asset:e,onAssetItemClick:n})=>{const r=be(),{formatDate:o,formatMessage:s}=S(),a=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n(e.id))};return t.jsxs(it,{tabIndex:0,role:"row",onClick:()=>n(e.id),onKeyDown:a,children:[t.jsx($,{children:t.jsxs(x,{gap:3,alignItems:"center",children:[t.jsx(vr,{asset:e}),t.jsxs(x,{direction:"column",alignItems:"flex-start",children:[t.jsx(y,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name}),r&&t.jsx(y,{textColor:"neutral600",variant:"pi",children:e.size?ge(e.size,1):"-"})]})]})}),!r&&t.jsxs(t.Fragment,{children:[t.jsx($,{children:t.jsx(y,{textColor:"neutral600",children:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx($,{children:t.jsx(y,{textColor:"neutral600",children:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx($,{children:t.jsx(y,{textColor:"neutral600",children:e.size?ge(e.size,1):"-"})})]}),t.jsx($,{children:t.jsx(x,{justifyContent:"flex-end",children:t.jsx(se,{label:s({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",children:t.jsx(ae,{})})})})]})},yr=h(it)`
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Cr=({folder:e})=>{const n=be(),{formatDate:r,formatMessage:o}=S(),{navigateToFolder:s}=Ie(),a=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),s(e))};return t.jsxs(yr,{tabIndex:0,role:"row",onClick:()=>s(e),onKeyDown:a,children:[t.jsx($,{children:t.jsxs(x,{gap:3,alignItems:"center",children:[t.jsx(x,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(oe,{width:20,height:20})}),t.jsx(y,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:e.name})]})}),!n&&t.jsxs(t.Fragment,{children:[t.jsx($,{children:t.jsx(y,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx($,{children:t.jsx(y,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx($,{children:t.jsx(y,{textColor:"neutral600",children:"-"})})]}),t.jsx($,{children:t.jsx(x,{justifyContent:"flex-end",children:t.jsx(se,{label:o({id:f("control-card.more-actions"),defaultMessage:"More actions"}),variant:"ghost",onClick:i=>i.stopPropagation(),children:t.jsx(ae,{})})})})]})},Ir=({assets:e,folders:n=[],onAssetItemClick:r})=>{const o=be(),{formatMessage:s}=S(),a=o?Fe.filter(l=>l.name==="name"||l.name==="actions"):Fe,i=n.length+e.length;return t.jsxs(hr,{colCount:a.length,rowCount:i+1,children:[t.jsx(xr,{children:t.jsx(me,{children:a.map(l=>{const u=s(l.label);return"isVisuallyHidden"in l&&l.isVisuallyHidden?t.jsx(Ee,{children:t.jsx(ve,{children:s({id:f("table.header.actions"),defaultMessage:"actions"})})},l.name):t.jsx(Ee,{children:t.jsx(y,{textColor:"neutral600",variant:"sigma",children:u})},l.name)})})}),t.jsx(Et,{children:i===0?t.jsx(me,{children:t.jsx(jr,{colSpan:a.length,children:t.jsx(y,{textColor:"neutral600",children:s({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})})}):t.jsxs(t.Fragment,{children:[n.map(l=>t.jsx(Cr,{folder:l},`folder-${l.id}`)),e.map(l=>t.jsx(br,{asset:l,onAssetItemClick:r},l.id))]})})]})},wr=h(A.Content)`
  max-width: 51.6rem;
`,Sr=({open:e,folderName:n,parentFolderId:r,onClose:o})=>{const{formatMessage:s}=S(),{toggleNotification:a}=Ne(),[i,l]=c.useState(""),[u,p]=c.useState(),[d,{isLoading:g}]=An();c.useEffect(()=>{e&&(l(""),p(void 0))},[e]);const j=async v=>{v.preventDefault();const C=i.trim();if(!C){p(s({id:f("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{await d({name:C,parent:r}).unwrap(),a({type:"success",message:s({id:f("folder.create.success"),defaultMessage:"Folder has been created"})}),o()}catch(b){const m=b;m?.message?p(m.message):a({type:"danger",message:s({id:f("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(A.Root,{open:e,onOpenChange:o,children:t.jsxs(wr,{children:[t.jsx(A.Header,{children:t.jsx(A.Title,{children:s({id:f("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:n})})}),t.jsxs("form",{onSubmit:j,children:[t.jsx(A.Body,{children:t.jsxs(L.Root,{error:u,name:"name",required:!0,children:[t.jsx(L.Label,{children:s({id:f("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(Ge,{value:i,onChange:v=>{l(v.target.value),p(void 0)},autoFocus:!0}),t.jsx(L.Error,{})]})}),t.jsx(A.Footer,{children:t.jsxs(x,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(q,{variant:"tertiary",onClick:o,type:"button",children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(q,{type:"submit",loading:g,children:s({id:f("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},lt=c.createContext(null),Mr=h(E)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Rr=({children:e,onDrop:n})=>{const[r,o]=c.useState(!1),s=c.useRef(0),a={isDragging:r};c.useEffect(()=>{const d=()=>{o(!1),s.current=0},g=j=>{j.relatedTarget||(o(!1),s.current=0)};return document.addEventListener("dragend",d),document.addEventListener("dragleave",g),()=>{document.removeEventListener("dragend",d),document.removeEventListener("dragleave",g)}},[]);const i=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),s.current+=1,d.dataTransfer.types.includes("Files")&&o(!0)},[]),l=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),s.current-=1,s.current<=0&&(o(!1),s.current=0)},[]),u=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),d.dataTransfer.dropEffect="copy"},[]),p=c.useCallback(d=>{d.preventDefault(),d.stopPropagation(),o(!1),s.current=0;const{files:g}=d.dataTransfer;g?.length&&n&&n(Array.from(g))},[n]);return t.jsx(lt.Provider,{value:a,children:t.jsx(Mr,{"data-testid":"assets-dropzone",onDragEnter:i,onDragLeave:l,onDragOver:u,onDrop:p,children:e})})},ct=()=>{const e=c.useContext(lt);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Tr=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,Dr=h(E)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Tr(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Fr=({children:e})=>{const{isDragging:n}=ct();return t.jsxs(E,{position:"relative",children:[n&&t.jsx(Dr,{}),e]})},Er=h(E)`
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
`,Ar=({uploadDropZoneRef:e,folderName:n})=>{const{formatMessage:r}=S(),{isDragging:o}=ct(),[s,a]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const i=()=>{const u=e.current?.getBoundingClientRect();u&&a(p=>p!==u.left?u.left:p)};i();const l=new ResizeObserver(i);return l.observe(e.current),()=>l.disconnect()},[e]),o?t.jsxs(Er,{$leftContentWidth:s,children:[t.jsx(y,{textColor:"neutral0",children:r({id:f("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(x,{gap:2,alignItems:"center",children:[t.jsx(oe,{width:20,height:20,fill:"neutral0"}),t.jsx(y,{textColor:"neutral0",fontWeight:"semiBold",children:n})]})]}):null},Pr=({open:e,onClose:n,onUpload:r})=>{const{formatMessage:o}=S(),[s,a]=c.useState(""),[i,l]=c.useState(null),u=()=>{a(""),l(null),n()},p=async d=>{d.preventDefault();const{urls:g,error:j}=kt(s);if(j){l(j);return}l(null),u(),await r(g)};return t.jsx(A.Root,{open:e,onOpenChange:d=>!d&&u(),children:t.jsx(A.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx(A.Header,{children:t.jsx(A.Title,{children:o({id:f("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(A.Body,{children:t.jsxs(L.Root,{error:i||void 0,hint:o({id:f("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(L.Label,{children:o({id:f("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Lt,{name:"urls",minHeight:"unset",rows:Math.min(s.split(`
`).length,7),maxHeight:"10.5rem",placeholder:o({id:f("input.url.placeholder"),defaultMessage:"Empty"}),value:s,onChange:d=>{a(d.target.value),l(null)}}),t.jsx(L.Hint,{}),t.jsx(L.Error,{})]})}),t.jsxs(A.Footer,{children:[t.jsx(q,{variant:"tertiary",onClick:u,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(q,{type:"submit",children:o({id:f("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},$r=e=>{const{formatMessage:n}=S(),{data:r,isLoading:o}=$n({id:e},{skip:e===null}),{data:s,isLoading:a}=st({folder:null,pageSize:1},{skip:e!==null}),i=n({id:f("plugin.home"),defaultMessage:"Home"});return e===null?a?{title:i,itemCount:0}:{title:i,itemCount:s?.pagination?.total??0}:o?{title:i,itemCount:0}:{title:r?.name??i,itemCount:r?.files?.count??0}},ee=20,Lr=({folder:e=null,sort:n}={})=>{const[r,o]=c.useState(1),s=c.useRef([]),a=c.useRef(!0),{currentData:i,isLoading:l,isFetching:u,error:p}=st({folder:e,page:r,pageSize:ee,sort:n}),d=i?.pagination,g=c.useMemo(()=>{if(!i)return s.current;const b=i.results;if(r===1)s.current=b;else{const m=(r-1)*ee;if(s.current.length<m-ee)return s.current;s.current.length<r*ee&&(s.current=[...s.current,...b])}return s.current},[i,r]);c.useEffect(()=>{if(a.current){a.current=!1;return}o(1),s.current=[]},[e,n]);const j=d?r<d.pageCount:!1,v=u&&r>1,C=c.useCallback(()=>{o(b=>b+1)},[]);return{assets:g,pagination:d,isLoading:l,isFetchingMore:v,hasNextPage:j,fetchNextPage:C,error:p}},kr={threshold:.1},Nr=({view:e,folderId:n,onAssetItemClick:r})=>{const{formatMessage:o}=S(),{assets:s,isLoading:a,isFetchingMore:i,hasNextPage:l,fetchNextPage:u,error:p}=Lr({folder:n}),{data:d=[],isLoading:g}=Pn({parentId:n}),j=e===H.GRID,v=a||g,C=qt(c.useCallback(b=>{b&&l&&!i&&u()},[l,i,u]),kr);return v?t.jsx(x,{justifyContent:"center",padding:8,children:t.jsx(ne,{children:o({id:"app.loading",defaultMessage:"Loading..."})})}):p?t.jsx(E,{padding:8,children:t.jsx(y,{textColor:"danger600",children:o({id:f("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):d.length===0&&s.length===0?t.jsx(E,{padding:8,children:t.jsx(y,{textColor:"neutral600",children:o({id:"app.components.EmptyStateLayout.content-document",defaultMessage:"No content found"})})}):t.jsxs(t.Fragment,{children:[j?t.jsx(gr,{folders:d,assets:s,onAssetItemClick:r}):t.jsx(Ir,{assets:s,folders:d,onAssetItemClick:r}),t.jsx("div",{ref:C,style:{height:1}}),i&&t.jsx(x,{justifyContent:"center",padding:4,children:t.jsx(ne,{children:o({id:f("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})})]})},_r=h(Dn)`
  display: flex;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  overflow: hidden;
`,Ae=h(Fn)`
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
`,Or=h(E)`
  [data-strapi-header] {
    background: ${({theme:e})=>e.colors.neutral0};

    h1 {
      font-size: 1.8rem;
    }
  }
`,Gr=()=>{const{formatMessage:e}=S(),{openDetails:n}=at(),{currentFolderId:r}=Ie(),{title:o,itemCount:s}=$r(r),a=e({id:f("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},{count:s}),[i,l]=c.useState(!1),[u,p]=Nt(mr.view,H.GRID),d=u===H.GRID,[g,j]=c.useState(!1),v=c.useRef(null),C=c.useRef(null),[b]=_t(),[m]=Ot(),M=async(w,P)=>{if(w.length===0)return;const D=new FormData,Q=[];w.forEach(V=>{D.append("files",V),Q.push({name:V.name,caption:null,alternativeText:null,folder:P})}),D.append("fileInfo",JSON.stringify(Q));try{await b({formData:D,totalFiles:w.length}).unwrap()}catch{}},F=()=>{v.current?.click()},I=async w=>{const P=w.target.files;P&&P.length>0&&await M(Array.from(P),r),w.target.value=""},R=async w=>{await M(w,r)},k=async w=>{try{await m({urls:w,folderId:r}).unwrap()}catch{}};return t.jsxs(t.Fragment,{children:[t.jsx(Rr,{onDrop:R,children:t.jsx(E,{ref:C,children:t.jsxs(ce.Root,{minHeight:"100vh",background:"neutral0",children:[t.jsx(ve,{children:t.jsx("input",{type:"file",ref:v,onChange:I,multiple:!0})}),t.jsx(Or,{children:t.jsx(ce.Header,{title:`${o} (${a})`,primaryAction:t.jsxs(Bt,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(Ht,{}),label:e({id:f("new"),defaultMessage:"New"}),children:[t.jsx(de,{onSelect:()=>l(!0),startIcon:t.jsx(oe,{}),children:e({id:f("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(de,{onSelect:F,startIcon:t.jsx(Vt,{}),children:e({id:f("import-files"),defaultMessage:"Import files"})}),t.jsx(de,{onSelect:()=>j(!0),startIcon:t.jsx(zt,{}),children:e({id:f("import-from-url"),defaultMessage:"Import from URL"})})]}),subtitle:t.jsxs(x,{justifyContent:"space-between",alignItems:"center",gap:4,width:"100%",children:[t.jsx(x,{gap:4,alignItems:"center",children:"TODO: Filters and search"}),t.jsxs(x,{gap:4,alignItems:"center",children:[t.jsx(E,{children:"TODO: Sort"}),t.jsxs(_r,{type:"single",value:d?"grid":"table",onValueChange:w=>w&&p(w==="grid"?H.GRID:H.TABLE),"aria-label":e({id:f("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Ae,{value:"table","aria-label":e({id:f("view.table"),defaultMessage:"Table view"}),children:[t.jsx(Gt,{}),e({id:f("view.table"),defaultMessage:"Table view"})]}),t.jsxs(Ae,{value:"grid","aria-label":e({id:f("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(Ut,{}),e({id:f("view.grid"),defaultMessage:"Grid view"})]})]})]})]})})}),t.jsx(ce.Content,{children:t.jsxs(Fr,{children:[t.jsx(Ar,{uploadDropZoneRef:C,folderName:o}),t.jsx(Nr,{view:u,folderId:r,onAssetItemClick:n})]})})]})})}),t.jsx(Sr,{open:i,folderName:o,parentFolderId:r,onClose:()=>l(!1)}),t.jsx(Pr,{open:g,onClose:()=>j(!1),onUpload:k}),t.jsx(Xn,{})]})},zr=()=>{const{formatMessage:e}=S(),n=e({id:f("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(Me.Main,{children:[t.jsx(Me.Title,{children:n}),t.jsx(Wt,{children:t.jsx(Kt,{index:!0,element:t.jsx(Gr,{})})})]})};export{zr as UnstableMediaLibrary};
