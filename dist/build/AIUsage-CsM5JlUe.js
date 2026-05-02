import{a as p,b_ as j,j as e,I as n,T as a,y as u,U as b,b$ as v}from"./strapi-B5TVRQk4.js";const d=u(v)`
  width: 100%;
  background-color: ${({theme:s})=>s.colors.neutral200};
  > div {
    background-color: ${({theme:s})=>s.colors.neutral700};
  }
`,f=u(b.Item)`
  ${({theme:s})=>s.breakpoints.large} {
    grid-column: 7 / 13;
  }
`,I=()=>{const{formatMessage:s}=p(),{data:r,isLoading:g,error:m}=j(void 0,{refetchOnMountOrArgChange:!0});if(g||m||!r||!r.subscription?.cmsAiEnabled)return null;const t=r.subscription.cmsAiCreditsBase,i=r.cmsAiCreditsUsed,o=r.subscription.cmsAiCreditsMaxUsage,c=i-t,x=i/t*100,h=i/o*100,l=c>0&&o!==t;return e.jsxs(f,{col:6,s:12,direction:"column",alignItems:"start",gap:2,children:[e.jsx(n,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.ai-usage",defaultMessage:"AI Usage"})}),e.jsxs(a,{gap:2,direction:"column",alignItems:"flex-start",children:[!l&&e.jsxs(e.Fragment,{children:[e.jsx(a,{width:"100%",children:e.jsx(d,{value:x,size:"M"})}),e.jsx(n,{variant:"omega",children:`${i.toFixed(2)} credits used from ${t} credits available in your plan`})]}),l&&e.jsxs(e.Fragment,{children:[e.jsx(a,{width:"100%",children:e.jsx(d,{value:h,size:"M",color:"danger"})}),e.jsx(n,{variant:"omega",textColor:"danger600",children:`${c.toFixed(2)} credits used above the ${t} credits available in your plan`})]})]})]})};export{I as AIUsage};
