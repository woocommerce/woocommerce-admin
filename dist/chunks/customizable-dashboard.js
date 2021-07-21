(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[24],{192:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.size,n=void 0===t?24:t,r=e.onClick,c=(e.icon,e.className),i=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["size","onClick","icon","className"]),s=["gridicon","gridicons-chevron-down",c,!1,!1,!1].filter(Boolean).join(" ");return a.default.createElement("svg",o({className:s,height:n,width:n,onClick:r},i,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),a.default.createElement("g",null,a.default.createElement("path",{d:"M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"})))};var r,c=n(5),a=(r=c)&&r.__esModule?r:{default:r};e.exports=t.default},545:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var o=n(0),r=n(34),c=n(105),a=n.n(c),i=n(17);const s=a()(i.b),l=e=>{const t=s.getCurrencyConfig(),n=Object(r.applyFilters)("woocommerce_admin_report_currency",t,e);return a()(n)},d=Object(o.createContext)(s)},549:function(e,t,n){"use strict";var o=n(0),r=n(15),c=n(1),a=n.n(c),i=n(3),s=n(7),l=n(23),d=n(17),m=n(11),u=n(21),p=n(18),b=n(545),h=n(62);class v extends o.Component{constructor(){super(),this.onDateSelect=this.onDateSelect.bind(this),this.onFilterSelect=this.onFilterSelect.bind(this),this.onAdvancedFilterAction=this.onAdvancedFilterAction.bind(this)}onDateSelect(e){const{report:t,addCesSurveyForAnalytics:n}=this.props;n(),Object(p.recordEvent)("datepicker_update",{report:t,...Object(i.omitBy)(e,i.isUndefined)})}onFilterSelect(e){const{report:t,addCesSurveyForAnalytics:n}=this.props,o=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(o)&&n();const r={report:t,filter:e.filter||"all"};"single_product"===e.filter&&(r.filter_variation=e["filter-variations"]||"all"),Object(p.recordEvent)("analytics_filter",r)}onAdvancedFilterAction(e,t){const{report:n,addCesSurveyForAnalytics:o}=this.props;switch(e){case"add":Object(p.recordEvent)("analytics_filters_add",{report:n,filter:t.key});break;case"remove":Object(p.recordEvent)("analytics_filters_remove",{report:n,filter:t.key});break;case"filter":const e=Object.keys(t).reduce((e,n)=>(e[Object(i.snakeCase)(n)]=t[n],e),{});o(),Object(p.recordEvent)("analytics_filters_filter",{report:n,...e});break;case"clear_all":Object(p.recordEvent)("analytics_filters_clear_all",{report:n});break;case"match":Object(p.recordEvent)("analytics_filters_all_any",{report:n,value:t.match})}}render(){const{advancedFilters:e,filters:t,path:n,query:r,showDatePicker:c,defaultDateRange:a}=this.props,{period:i,compare:s,before:m,after:p}=Object(u.getDateParamsFromQuery)(r,a),{primary:b,secondary:h}=Object(u.getCurrentDates)(r,a),v={period:i,compare:s,before:m,after:p,primaryDate:b,secondaryDate:h},_=this.context;return Object(o.createElement)(l.ReportFilters,{query:r,siteLocale:d.c.siteLocale,currency:_.getCurrencyConfig(),path:n,filters:t,advancedFilters:e,showDatePicker:c,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:v,isoDateFormat:u.isoDateFormat})}}v.contextType=b.a,t.a=Object(r.compose)(Object(s.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(m.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}}),Object(s.withDispatch)(e=>{const{addCesSurveyForAnalytics:t}=e(h.c);return{addCesSurveyForAnalytics:t}}))(v),v.propTypes={advancedFilters:a.a.object,filters:a.a.array,path:a.a.string.isRequired,query:a.a.object,showDatePicker:a.a.bool,report:a.a.string.isRequired}},632:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.size,r=void 0===n?24:n,c=e.onClick,i=(e.icon,e.className),s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["size","onClick","icon","className"]),l=["gridicon","gridicons-list-ordered",i,(t=r,!(0!=t%18)&&"needs-offset"),!1,!1].filter(Boolean).join(" ");return a.default.createElement("svg",o({className:l,height:r,width:r,onClick:c},s,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),a.default.createElement("g",null,a.default.createElement("path",{d:"M8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8zm-4.425.252c.107-.096.197-.188.27-.275-.013.228-.02.48-.02.756V8h1.176V3.717H3.96L2.487 4.915l.6.738.487-.4zm.334 7.764c.474-.426.784-.715.93-.867.145-.153.26-.298.35-.436.087-.138.152-.278.194-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608s-.29-.32-.507-.417c-.218-.1-.465-.148-.742-.148-.22 0-.42.022-.596.067s-.34.11-.49.195c-.15.085-.337.226-.558.423l.636.744c.174-.15.33-.264.467-.34.138-.078.274-.117.41-.117.13 0 .232.032.304.097.073.064.11.152.11.264 0 .09-.02.176-.055.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64L2.42 13.238V14h3.11v-.955H3.91v-.03zm.53 4.746v-.018c.306-.086.54-.225.702-.414.162-.19.243-.42.243-.685 0-.31-.126-.55-.378-.727-.252-.176-.6-.264-1.043-.264-.307 0-.58.033-.816.1s-.47.178-.696.334l.48.773c.293-.183.576-.274.85-.274.147 0 .263.027.35.082s.13.14.13.252c0 .3-.294.45-.882.45h-.27v.87h.264c.217 0 .393.017.527.05.136.03.233.08.294.143.06.064.09.154.09.27 0 .153-.057.265-.173.337-.115.07-.3.106-.554.106-.164 0-.343-.022-.538-.07-.194-.044-.385-.115-.573-.21v.96c.228.088.44.148.637.182.196.033.41.05.64.05.56 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.002-.585-.356-.923-1.07-1.013z"})))};var r,c=n(5),a=(r=c)&&r.__esModule?r:{default:r};e.exports=t.default},633:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.size,n=void 0===t?24:t,r=e.onClick,c=(e.icon,e.className),i=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["size","onClick","icon","className"]),s=["gridicon","gridicons-chevron-up",c,!1,!1,!1].filter(Boolean).join(" ");return a.default.createElement("svg",o({className:s,height:n,width:n,onClick:r},i,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),a.default.createElement("g",null,a.default.createElement("path",{d:"M4 15l8-8 8 8-1.414 1.414L12 9.828l-6.586 6.586"})))};var r,c=n(5),a=(r=c)&&r.__esModule?r:{default:r};e.exports=t.default},643:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),c=n(15),a=n(3),i=n(4),s=n(34),l=n(147),d=n(8),m=Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(d.Path,{d:"M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"})),u=n(7),p=n(23),b=n(11),h=n(12),v=n(21),_=n(18),f=(n(563),Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(o.createElement)(d.Path,{d:"M2 11V9h12l-4-4 1-2 7 7-7 7-1-2 4-4H2z"}))),O=Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(d.Path,{fillRule:"evenodd",d:"M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z",clipRule:"evenodd"})),j=n(632),g=n.n(j);const w=Object(o.lazy)(()=>n.e(26).then(n.bind(null,655))),y=Object(o.lazy)(()=>Promise.all([n.e(2),n.e(32)]).then(n.bind(null,658))),k=Object(o.lazy)(()=>n.e(48).then(n.bind(null,649)));var E=Object(s.applyFilters)("woocommerce_dashboard_default_sections",[{key:"store-performance",component:e=>Object(o.createElement)(o.Suspense,{fallback:Object(o.createElement)(p.Spinner,null)},Object(o.createElement)(k,e)),title:Object(r.__)("Performance","woocommerce-admin"),isVisible:!0,icon:f,hiddenBlocks:["coupons/amount","coupons/orders_count","downloads/download_count","taxes/order_tax","taxes/total_tax","taxes/shipping_tax","revenue/shipping","orders/avg_order_value","revenue/refunds","revenue/gross_sales"]},{key:"charts",component:e=>Object(o.createElement)(o.Suspense,{fallback:Object(o.createElement)(p.Spinner,null)},Object(o.createElement)(w,e)),title:Object(r.__)("Charts","woocommerce-admin"),isVisible:!0,icon:O,hiddenBlocks:["orders_avg_order_value","avg_items_per_order","products_items_sold","revenue_total_sales","revenue_refunds","coupons_amount","coupons_orders_count","revenue_shipping","taxes_total_tax","taxes_order_tax","taxes_shipping_tax","downloads_download_count"]},{key:"leaderboards",component:e=>Object(o.createElement)(o.Suspense,{fallback:Object(o.createElement)(p.Spinner,null)},Object(o.createElement)(y,e)),title:Object(r.__)("Leaderboards","woocommerce-admin"),isVisible:!0,icon:Object(o.createElement)(g.a,null),hiddenBlocks:["coupons","customers"]}]),C=n(13),S=n.n(C),x=Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(o.createElement)(d.Path,{d:"M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"})),M=n(633),B=n.n(M),T=n(192),D=n.n(T);class F extends o.Component{constructor(e){super(e),this.onMoveUp=this.onMoveUp.bind(this),this.onMoveDown=this.onMoveDown.bind(this)}onMoveUp(){const{onMove:e,onToggle:t}=this.props;e(-1),t()}onMoveDown(){const{onMove:e,onToggle:t}=this.props;e(1),t()}render(){const{onRemove:e,isFirst:t,isLast:n,onTitleBlur:c,onTitleChange:a,titleInput:s}=this.props;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)("div",{className:"woocommerce-ellipsis-menu__item"},Object(o.createElement)(i.TextControl,{label:Object(r.__)("Section Title","woocommerce-admin"),onBlur:c,onChange:a,required:!0,value:s})),Object(o.createElement)("div",{className:"woocommerce-dashboard-section-controls"},!t&&Object(o.createElement)(p.MenuItem,{isClickable:!0,onInvoke:this.onMoveUp},Object(o.createElement)(l.a,{icon:Object(o.createElement)(B.a,null),label:Object(r.__)("Move up"),size:20,className:"icon-control"}),Object(r.__)("Move up","woocommerce-admin")),!n&&Object(o.createElement)(p.MenuItem,{isClickable:!0,onInvoke:this.onMoveDown},Object(o.createElement)(l.a,{icon:Object(o.createElement)(D.a,null),size:20,label:Object(r.__)("Move Down"),className:"icon-control"}),Object(r.__)("Move Down","woocommerce-admin")),Object(o.createElement)(p.MenuItem,{isClickable:!0,onInvoke:e},Object(o.createElement)(l.a,{icon:x,size:20,label:Object(r.__)("Remove block"),className:"icon-control"}),Object(r.__)("Remove section","woocommerce-admin"))))}}var V=F;class z extends o.Component{constructor(e){super(e);const{title:t}=e;this.state={titleInput:t},this.onToggleHiddenBlock=this.onToggleHiddenBlock.bind(this),this.onTitleChange=this.onTitleChange.bind(this),this.onTitleBlur=this.onTitleBlur.bind(this)}onTitleChange(e){this.setState({titleInput:e})}onTitleBlur(){const{onTitleUpdate:e,title:t}=this.props,{titleInput:n}=this.state;""===n?this.setState({titleInput:t}):e&&e(n)}onToggleHiddenBlock(e){return()=>{const t=Object(a.xor)(this.props.hiddenBlocks,[e]);this.props.onChangeHiddenBlocks(t)}}render(){const{component:e,...t}=this.props,{titleInput:n}=this.state;return Object(o.createElement)("div",{className:"woocommerce-dashboard-section"},Object(o.createElement)(e,S()({onTitleChange:this.onTitleChange,onTitleBlur:this.onTitleBlur,onToggleHiddenBlock:this.onToggleHiddenBlock,titleInput:n,controls:V},t)))}}var H=n(549),N=n(545);const A=Object(s.applyFilters)("woocommerce_admin_dashboard_filters",[]);t.default=Object(c.compose)(Object(u.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(b.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}}))(({defaultDateRange:e,path:t,query:n})=>{const{updateUserPreferences:c,...s}=Object(b.useUserPreferences)(),d=(e=>{if(!e||0===e.length)return E;const t=E.map(e=>e.key),n=e.map(e=>e.key),o=new Set([...n,...t]),r=[];return o.forEach(t=>{const n=E.find(e=>e.key===t);if(!n)return;const o=e.find(e=>e.key===t);o&&delete o.icon,r.push({...n,...o})}),r})(s.dashboard_sections),u=e=>{c({dashboard_sections:e})},f=(e,t)=>{const n=d.map(n=>(delete n.icon,n.key===e?{...n,...t}:n));u(n)},O=e=>t=>{Object(_.recordEvent)("dash_section_rename",{key:e}),f(e,{title:t})},j=(e,t)=>()=>{t&&t();const n=d.findIndex(t=>e===t.key),o=d.splice(n,1).shift();o.isVisible=!o.isVisible,d.push(o),o.isVisible?Object(_.recordEvent)("dash_section_add",{key:o.key}):Object(_.recordEvent)("dash_section_remove",{key:o.key}),u(d)},g=(e,t)=>{const n=d.splice(e,1).shift(),o=e+t;if(d[t<0?o:o-1].isVisible||0===e||e===d.length-1){d.splice(o,0,n),u(d);const e={key:n.key,direction:t>0?"down":"up"};Object(_.recordEvent)("dash_section_order_change",e)}else g(e,t+t)};return Object(o.createElement)(N.a.Provider,{value:Object(N.b)(Object(h.getQuery)())},(()=>{const{period:c,compare:s,before:u,after:b}=Object(v.getDateParamsFromQuery)(n,e),{primary:h,secondary:_}=Object(v.getCurrentDates)(n,e),w={period:c,compare:s,before:u,after:b,primaryDate:h,secondaryDate:_},y=d.filter(e=>e.isVisible).map(e=>e.key);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(H.a,{report:"dashboard",query:n,path:t,dateQuery:w,isoDateFormat:v.isoDateFormat,filters:A}),d.map((e,r)=>{return e.isVisible?Object(o.createElement)(z,{component:e.component,hiddenBlocks:e.hiddenBlocks,key:e.key,onChangeHiddenBlocks:(c=e.key,e=>{f(c,{hiddenBlocks:e})}),onTitleUpdate:O(e.key),path:t,query:n,title:e.title,onMove:Object(a.partial)(g,r),onRemove:j(e.key),isFirst:e.key===y[0],isLast:e.key===y[y.length-1],filters:A}):null;var c}),(()=>{const e=d.filter(e=>!1===e.isVisible);return 0===e.length?null:Object(o.createElement)(i.Dropdown,{position:"top center",className:"woocommerce-dashboard-section__add-more",renderToggle:({onToggle:e,isOpen:t})=>Object(o.createElement)(i.Button,{onClick:e,title:Object(r.__)("Add more sections","woocommerce-admin"),"aria-expanded":t},Object(o.createElement)(l.a,{icon:m})),renderContent:({onToggle:t})=>Object(o.createElement)(o.Fragment,null,Object(o.createElement)(p.H,null,Object(r.__)("Dashboard Sections","woocommerce-admin")),Object(o.createElement)("div",{className:"woocommerce-dashboard-section__add-more-choices"},e.map(e=>Object(o.createElement)(i.Button,{key:e.key,onClick:j(e.key,t),className:"woocommerce-dashboard-section__add-more-btn",title:Object(r.sprintf)(Object(r.__)("Add %s section","woocommerce-admin"),e.title)},Object(o.createElement)(l.a,{className:e.key+"__icon",icon:e.icon,size:30}),Object(o.createElement)("span",{className:"woocommerce-dashboard-section__add-more-btn-title"},e.title)))))})})())})())})}}]);