"use strict";(self.webpackChunkreact_2022=self.webpackChunkreact_2022||[]).push([[13],{51:function(e,t,n){n.d(t,{V:function(){return i}});var a=n(9090),r=n(184);function i(e){var t=e.title;return(0,r.jsx)(a.xv,{fontSize:"24px",lineHeight:"32px",fontWeight:"bold",color:"gray.900",children:t})}},6013:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(9090),r=n(51),i=n(4942),o=n(1413),l=n(4925),c=n(9439),s=n(2791);function d(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(n){throw new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}else e(t)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){d(t,e)}))}}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.useMemo)((function(){return u.apply(void 0,t)}),t)}var f=n(9610),m=n(2965),h=n(2680),v=n(9194),g=["children","className"],b=["label","placement","spacing","children","className","__css"],y=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],x=["size","colorScheme","variant","className","spacing","isAttached","isDisabled","orientation"],Z=["icon","children","isRound","aria-label"],E=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},_=function(e){return e?"":void 0},S=(0,h.k)({strict:!1,name:"ButtonGroupContext"}),N=(0,c.Z)(S,2),j=N[0],k=N[1];function w(e){var t=e.children,n=e.className,a=(0,l.Z)(e,g),r=(0,s.isValidElement)(t)?(0,s.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,i=E("chakra-button__icon",n);return s.createElement(f.m$.span,(0,o.Z)((0,o.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:i}),r)}function I(e){var t=e.label,n=e.placement,a=e.spacing,r=void 0===a?"0.5rem":a,c=e.children,d=void 0===c?s.createElement(v.$,{color:"currentColor",width:"1em",height:"1em"}):c,u=e.className,p=e.__css,m=(0,l.Z)(e,b),h=E("chakra-button__spinner",u),g="start"===n?"marginEnd":"marginStart",y=(0,s.useMemo)((function(){var e;return(0,o.Z)((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"},(0,i.Z)(e,g,t?r:0),(0,i.Z)(e,"fontSize","1em"),(0,i.Z)(e,"lineHeight","normal"),e),p)}),[p,t,g,r]);return s.createElement(f.m$.div,(0,o.Z)((0,o.Z)({className:h},m),{},{__css:y}),d)}w.displayName="ButtonIcon",I.displayName="ButtonSpinner";var C=(0,f.Gp)((function(e,t){var n=k(),a=(0,f.mq)("Button",(0,o.Z)((0,o.Z)({},n),e)),r=(0,m.Lr)(e),i=r.isDisabled,d=void 0===i?null==n?void 0:n.isDisabled:i,u=r.isLoading,h=r.isActive,v=r.children,g=r.leftIcon,b=r.rightIcon,x=r.loadingText,Z=r.iconSpacing,S=void 0===Z?"0.5rem":Z,N=r.type,j=r.spinner,w=r.spinnerPlacement,C=void 0===w?"start":w,R=r.className,z=r.as,A=(0,l.Z)(r,y),D=(0,s.useMemo)((function(){var e=(0,o.Z)((0,o.Z)({},null==a?void 0:a._focus),{},{zIndex:1});return(0,o.Z)((0,o.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},a),!!n&&{_focus:e})}),[a,n]),T=function(e){var t=(0,s.useState)(!e),n=(0,c.Z)(t,2),a=n[0],r=n[1];return{ref:(0,s.useCallback)((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:a?"button":void 0}}(z),$=T.ref,G=T.type,M={rightIcon:b,leftIcon:g,iconSpacing:S,children:v};return s.createElement(f.m$.button,(0,o.Z)({disabled:d||u,ref:p(t,$),as:z,type:null!==N&&void 0!==N?N:G,"data-active":_(h),"data-loading":_(u),__css:D,className:E("chakra-button",R)},A),u&&"start"===C&&s.createElement(I,{className:"chakra-button__spinner--start",label:x,placement:"start",spacing:S},j),u?x||s.createElement(f.m$.span,{opacity:0},s.createElement(B,(0,o.Z)({},M))):s.createElement(B,(0,o.Z)({},M)),u&&"end"===C&&s.createElement(I,{className:"chakra-button__spinner--end",label:x,placement:"end",spacing:S},j))}));function B(e){var t=e.leftIcon,n=e.rightIcon,a=e.children,r=e.iconSpacing;return s.createElement(s.Fragment,null,t&&s.createElement(w,{marginEnd:r},t),a,n&&s.createElement(w,{marginStart:r},n))}C.displayName="Button";var R={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},z={horizontal:function(e){return{"& > *:not(style) ~ *:not(style)":{marginStart:e}}},vertical:function(e){return{"& > *:not(style) ~ *:not(style)":{marginTop:e}}}};(0,f.Gp)((function(e,t){var n=e.size,a=e.colorScheme,r=e.variant,i=e.className,c=e.spacing,d=void 0===c?"0.5rem":c,u=e.isAttached,p=e.isDisabled,m=e.orientation,h=void 0===m?"horizontal":m,v=(0,l.Z)(e,x),g=E("chakra-button__group",i),b=(0,s.useMemo)((function(){return{size:n,colorScheme:a,variant:r,isDisabled:p}}),[n,a,r,p]),y=(0,o.Z)({display:"inline-flex"},u?R[h]:z[h](d)),Z="vertical"===h;return s.createElement(j,{value:b},s.createElement(f.m$.div,(0,o.Z)({ref:t,role:"group",__css:y,className:g,"data-attached":u?"":void 0,"data-orientation":h,flexDir:Z?"column":void 0},v)))})).displayName="ButtonGroup",(0,f.Gp)((function(e,t){var n=e.icon,a=e.children,r=e.isRound,i=e["aria-label"],c=(0,l.Z)(e,Z),d=n||a,u=(0,s.isValidElement)(d)?(0,s.cloneElement)(d,{"aria-hidden":!0,focusable:!1}):null;return s.createElement(C,(0,o.Z)({padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":i},c),u)})).displayName="IconButton";var A=n(4828),D=n(184);function T(e){var t=e.name,n=e.avatar,r=e.data;return(0,D.jsxs)(a.xu,{children:[(0,D.jsx)(A.Ee,{src:n,alt:t,width:"112px",height:"112px",borderRadius:"10px"}),(0,D.jsx)(a.xv,{color:"gray.900",mt:"12px",textStyle:"xl",fontWeightSemibold:!0,children:t}),(0,D.jsx)(a.xv,{color:"gray.900",mt:"12px",textStyle:"sm",fontWeightSemibold:!0,children:r})]})}function $(){return(0,D.jsxs)(a.kC,{border:"1px solid",borderColor:"gray.200",borderRadius:"10px",w:"100%",p:"16px",backgroundColor:"white",justifyContent:"space-between",children:[(0,D.jsx)(T,{name:"Altair",avatar:"https://leonardo.osnova.io/6546c668-de90-50de-b56e-a65ae9e7bbba/-/format/webp/",data:"\u0424\u0418\u0422, 3 \u043a\u0443\u0440\u0441, 20B030308"}),(0,D.jsxs)(a.kC,{gap:"12px",children:[(0,D.jsx)(C,{variant:"secondary",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,D.jsx)(C,{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"})]})]})}var G=function(){return(0,D.jsxs)(a.xu,{p:"32px",children:[(0,D.jsx)(r.V,{title:"\u041c\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),(0,D.jsx)($,{})]})}}}]);
//# sourceMappingURL=13.469d706e.chunk.js.map