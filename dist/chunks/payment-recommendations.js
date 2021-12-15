(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[45],{544:function(e,t,c){"use strict";var n=Object.assign||function(e){for(var t,c=1;c<arguments.length;c++)for(var n in t=arguments[c])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,c=e.size,o=void 0===c?24:c,a=e.onClick,i=(e.icon,e.className),s=function(e,t){var c={};for(var n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(c[n]=e[n]);return c}(e,["size","onClick","icon","className"]),m=["gridicon","gridicons-external",i,(t=o,!(0!=t%18)&&"needs-offset"),!1,!1].filter(Boolean).join(" ");return r.default.createElement("svg",n({className:m,height:o,width:o,onClick:a},s,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),r.default.createElement("g",null,r.default.createElement("path",{d:"M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z"})))};var o,a=c(5),r=(o=a)&&o.__esModule?o:{default:o};e.exports=t.default},605:function(e,t,c){},624:function(e,t,c){"use strict";c.r(t),c.d(t,"getPaymentRecommendationData",(function(){return j}));var n=c(0),o=c(2),a=c(7),r=c(30),i=c(3),s=c(21),m=c(17),l=c(11),d=c(16),u=c(544),_=c.n(u),p=c(13),O=(c(605),c(62)),b=c(509),w=c(546);const g="woocommerce_setting_payments_recommendations_hidden";function j(e){const{getOption:t,isResolving:c}=e(l.OPTIONS_STORE_NAME),{getSettings:n}=e(l.SETTINGS_STORE_NAME),{getRecommendedPlugins:o}=e(l.PLUGINS_STORE_NAME),{general:a}=n("general"),r=t(g),i=a&&a.woocommerce_default_country?Object(O.b)(a.woocommerce_default_country):null,s=!!i&&Object(w.c)(i),m=c("getOption",[g]),d=!m&&"yes"!==r&&s;let u=null;d&&(u=o("payments"));return{displayable:d,recommendedPlugins:u,isLoading:m||void 0===r||void 0===a||void 0===u}}const y=document.querySelector('[data-gateway_id="pre_install_woocommerce_payments_promotion"]');t.default=()=>{const[e,t]=Object(n.useState)(null),{updateOptions:c}=Object(a.useDispatch)(l.OPTIONS_STORE_NAME),{installAndActivatePlugins:u}=Object(a.useDispatch)(l.PLUGINS_STORE_NAME),{displayable:O,recommendedPlugins:w,isLoading:f}=Object(a.useSelect)(j),E=Object(n.useRef)(!1),v=O&&w&&w.length>0;if(Object(n.useEffect)(()=>{if((v||y&&!f)&&!E.current){E.current=!0;const e=(w||[]).reduce((e,t)=>t.product?{...e,[t.product.replace(/\-/g,"_")+"_displayed"]:!0}:e,{woocommerce_payments_displayed:!!y});Object(d.recordEvent)("settings_payments_recommendations_pageview",e)}},[v,y,f]),!v)return null;const h=()=>{Object(d.recordEvent)("settings_payments_recommendations_dismiss",{}),c({[g]:"yes"})},N=(w||[]).map(c=>({key:c.slug,title:Object(n.createElement)(n.Fragment,null,c.title,c.recommended&&Object(n.createElement)(s.Pill,null,Object(o.__)("Recommended","woocommerce-admin"))),content:Object(r.decodeEntities)(c.copy),after:Object(n.createElement)(i.Button,{isSecondary:!0,onClick:()=>(c=>{e||(t(c.product),Object(d.recordEvent)("settings_payments_recommendations_setup",{extension_selected:c.product}),u([c.product]).then(()=>{window.location.href=Object(p.e)(c["setup-link"].replace("/wp-admin/",""))}).catch(e=>{Object(b.a)(e),t(null)}))})(c),isBusy:e===c.product,disabled:!!e},c["button-text"]),before:Object(n.createElement)("img",{src:c.icon,alt:""})}));return Object(n.createElement)(i.Card,{size:"medium",className:"woocommerce-recommended-payments-card"},Object(n.createElement)(i.CardHeader,null,Object(n.createElement)("div",{className:"woocommerce-recommended-payments-card__header"},Object(n.createElement)(m.Text,{variant:"title.small",as:"p",size:"20",lineHeight:"28px"},Object(o.__)("Recommended ways to get paid","woocommerce-admin")),Object(n.createElement)(m.Text,{className:"woocommerce-recommended-payments__header-heading",variant:"caption",as:"p",size:"12",lineHeight:"16px"},Object(o.__)('We recommend adding one of the following payment extensions to your store. The extension will be installed and activated for you when you click "Get started".',"woocommerce-admin"))),Object(n.createElement)("div",{className:"woocommerce-card__menu woocommerce-card__header-item"},Object(n.createElement)(s.EllipsisMenu,{label:Object(o.__)("Task List Options","woocommerce-admin"),renderContent:()=>Object(n.createElement)("div",{className:"woocommerce-review-activity-card__section-controls"},Object(n.createElement)(i.Button,{onClick:h},Object(o.__)("Hide this","woocommerce-admin")))}))),Object(n.createElement)(s.List,{items:N}),Object(n.createElement)(i.CardFooter,null,Object(n.createElement)(i.Button,{href:"https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations",target:"_blank",isTertiary:!0},Object(o.__)("See more options","woocommerce-admin"),Object(n.createElement)(_.a,{size:18}))))}}}]);