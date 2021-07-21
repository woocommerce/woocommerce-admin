(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[14],{521:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var a=r(0),o=r(1),c=r.n(o),n=r(2),s=r(34);const i=Object(s.applyFilters)("woocommerce_admin_stock_report_filters",[{label:Object(n.__)("Show","woocommerce-admin"),staticParams:["paged","per_page"],param:"type",showFilters:()=>!0,filters:[{label:Object(n.__)("All Products","woocommerce-admin"),value:"all"},{label:Object(n.__)("Out of Stock","woocommerce-admin"),value:"outofstock"},{label:Object(n.__)("Low Stock","woocommerce-admin"),value:"lowstock"},{label:Object(n.__)("In Stock","woocommerce-admin"),value:"instock"},{label:Object(n.__)("On Backorder","woocommerce-admin"),value:"onbackorder"}]}]),l=Object(s.applyFilters)("woocommerce_admin_stock_report_advanced_filters",{});var d=r(32),m=r(23),u=r(12),b=r(139),p=r(17),y=r(550);var _=r(545);const g=Object(p.h)("stockStatuses",{});class h extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(n.__)("Product / Variation","woocommerce-admin"),key:"title",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(n.__)("SKU","woocommerce-admin"),key:"sku",isSortable:!0},{label:Object(n.__)("Status","woocommerce-admin"),key:"stock_status",isSortable:!0,defaultSort:!0},{label:Object(n.__)("Stock","woocommerce-admin"),key:"stock_quantity",isSortable:!0}]}getRowsContent(e=[]){const{query:t}=this.props,r=Object(u.getPersistedQuery)(t);return e.map(e=>{const{id:t,manage_stock:o,parent_id:c,sku:s,stock_quantity:i,stock_status:l,low_stock_amount:y}=e,_=Object(d.decodeEntities)(e.name),h=Object(u.getNewPath)(r,"/analytics/products",{filter:"single_product",products:c||t}),j=Object(a.createElement)(m.Link,{href:h,type:"wc-admin"},_),O=Object(p.g)("post.php?action=edit&post="+(c||t));var f,w,v;return[{display:j,value:_},{display:s,value:s},{display:(f=l,v=y,(w=i)&&f&&w<=v==="instock"?Object(a.createElement)(m.Link,{href:O,type:"wp-admin"},Object(n._x)("Low","Indication of a low quantity","woocommerce-admin")):Object(a.createElement)(m.Link,{href:O,type:"wp-admin"},g[l])),value:l},{display:o?Object(b.formatValue)(this.context.getCurrencyConfig(),"number",i):Object(n.__)("N/A","woocommerce-admin"),value:i}]})}getSummary(e){const{products:t=0,outofstock:r=0,lowstock:a=0,instock:o=0,onbackorder:c=0}=e,s=this.context.getCurrencyConfig();return[{label:Object(n._n)("product","products",t,"woocommerce-admin"),value:Object(b.formatValue)(s,"number",t)},{label:Object(n.__)("out of stock","woocommerce-admin"),value:Object(b.formatValue)(s,"number",r)},{label:Object(n.__)("low stock","woocommerce-admin"),value:Object(b.formatValue)(s,"number",a)},{label:Object(n.__)("on backorder","woocommerce-admin"),value:Object(b.formatValue)(s,"number",c)},{label:Object(n.__)("in stock","woocommerce-admin"),value:Object(b.formatValue)(s,"number",o)}]}render(){const{advancedFilters:e,filters:t,query:r}=this.props;return Object(a.createElement)(y.a,{endpoint:"stock",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products","outofstock","lowstock","instock","onbackorder"],query:r,tableQuery:{orderby:r.orderby||"stock_status",order:r.order||"asc",type:r.type||"all"},title:Object(n.__)("Stock","woocommerce-admin"),filters:t,advancedFilters:e})}}h.contextType=_.a;var j=h,O=r(549);class f extends a.Component{render(){const{query:e,path:t}=this.props;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(O.a,{query:e,path:t,showDatePicker:!1,filters:i,advancedFilters:l,report:"stock"}),Object(a.createElement)(j,{query:e,filters:i,advancedFilters:l}))}}f.propTypes={query:c.a.object.isRequired}},545:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return d}));var a=r(0),o=r(34),c=r(105),n=r.n(c),s=r(17);const i=n()(s.b),l=e=>{const t=i.getCurrencyConfig(),r=Object(o.applyFilters)("woocommerce_admin_report_currency",t,e);return n()(r)},d=Object(a.createContext)(i)},548:function(e,t,r){"use strict";var a=r(0),o=r(2),c=r(1),n=r.n(c),s=r(23);function i({className:e}){const t=Object(o.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),r=Object(o.__)("Reload","woocommerce-admin");return Object(a.createElement)(s.EmptyContent,{className:e,title:t,actionLabel:r,actionCallback:()=>{window.location.reload()}})}i.propTypes={className:n.a.string},t.a=i},549:function(e,t,r){"use strict";var a=r(0),o=r(15),c=r(1),n=r.n(c),s=r(3),i=r(7),l=r(23),d=r(17),m=r(11),u=r(21),b=r(18),p=r(545),y=r(62);class _ extends a.Component{constructor(){super(),this.onDateSelect=this.onDateSelect.bind(this),this.onFilterSelect=this.onFilterSelect.bind(this),this.onAdvancedFilterAction=this.onAdvancedFilterAction.bind(this)}onDateSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props;r(),Object(b.recordEvent)("datepicker_update",{report:t,...Object(s.omitBy)(e,s.isUndefined)})}onFilterSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props,a=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(a)&&r();const o={report:t,filter:e.filter||"all"};"single_product"===e.filter&&(o.filter_variation=e["filter-variations"]||"all"),Object(b.recordEvent)("analytics_filter",o)}onAdvancedFilterAction(e,t){const{report:r,addCesSurveyForAnalytics:a}=this.props;switch(e){case"add":Object(b.recordEvent)("analytics_filters_add",{report:r,filter:t.key});break;case"remove":Object(b.recordEvent)("analytics_filters_remove",{report:r,filter:t.key});break;case"filter":const e=Object.keys(t).reduce((e,r)=>(e[Object(s.snakeCase)(r)]=t[r],e),{});a(),Object(b.recordEvent)("analytics_filters_filter",{report:r,...e});break;case"clear_all":Object(b.recordEvent)("analytics_filters_clear_all",{report:r});break;case"match":Object(b.recordEvent)("analytics_filters_all_any",{report:r,value:t.match})}}render(){const{advancedFilters:e,filters:t,path:r,query:o,showDatePicker:c,defaultDateRange:n}=this.props,{period:s,compare:i,before:m,after:b}=Object(u.getDateParamsFromQuery)(o,n),{primary:p,secondary:y}=Object(u.getCurrentDates)(o,n),_={period:s,compare:i,before:m,after:b,primaryDate:p,secondaryDate:y},g=this.context;return Object(a.createElement)(l.ReportFilters,{query:o,siteLocale:d.c.siteLocale,currency:g.getCurrencyConfig(),path:r,filters:t,advancedFilters:e,showDatePicker:c,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:_,isoDateFormat:u.isoDateFormat})}}_.contextType=p.a,t.a=Object(o.compose)(Object(i.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(m.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}}),Object(i.withDispatch)(e=>{const{addCesSurveyForAnalytics:t}=e(y.c);return{addCesSurveyForAnalytics:t}}))(_),_.propTypes={advancedFilters:n.a.object,filters:n.a.array,path:n.a.string.isRequired,query:n.a.object,showDatePicker:n.a.bool,report:n.a.string.isRequired}},550:function(e,t,r){"use strict";var a=r(13),o=r.n(a),c=r(0),n=r(4),s=r(34),i=r(15),l=r(107),d=r(7),m=r(3),u=r(2),b=r(1),p=r.n(b),y=r(23),_=r(12),g=r(516),h=r(11),j=r(18),O=()=>Object(c.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"})),f=r(548);var w=r(62);r(562);const v=e=>{const{getHeadersContent:t,getRowsContent:r,getSummary:a,isRequesting:i,primaryData:d,tableData:b,endpoint:p,itemIdField:w,tableQuery:v,compareBy:S,compareParam:k,searchBy:C,labels:E={},...F}=e,{query:q,columnPrefsKey:R}=e,{items:D,query:x}=b,A=q[k]?Object(_.getIdsFromQuery)(q[S]):[],[T,N]=Object(c.useState)(A),P=Object(c.useRef)(null),{updateUserPreferences:Q,...B}=Object(h.useUserPreferences)();if(b.isError||d.isError)return Object(c.createElement)(f.a,null);let I=[];R&&(I=B&&B[R]?B[R]:I);const L=(e,o,c)=>{const n=a?a(o,c):null;return Object(s.applyFilters)("woocommerce_admin_report_table",{endpoint:p,headers:t(),rows:r(e),totals:o,summary:n,items:D})},V=t=>{const{ids:r}=e;N(t?r:[])},H=(t,r)=>{const{ids:a}=e;if(r)N(Object(m.uniq)([a[t],...T]));else{const e=T.indexOf(a[t]);N([...T.slice(0,e),...T.slice(e+1)])}},M=t=>{const{ids:r=[]}=e,a=-1!==T.indexOf(r[t]);return{display:Object(c.createElement)(n.CheckboxControl,{onChange:Object(m.partial)(H,t),checked:a}),value:!1}},U=()=>{const{ids:t=[]}=e,r=t.length>0,a=r&&t.length===T.length;return{cellClassName:"is-checkbox-column",key:"compare",label:Object(c.createElement)(n.CheckboxControl,{onChange:V,"aria-label":Object(u.__)("Select All"),checked:a,disabled:!r}),required:!0}},z=i||b.isRequesting||d.isRequesting,K=Object(m.get)(d,["data","totals"],{}),G=D.totalResults||0,J=G>0,Y=Object(_.getSearchWords)(q).map(e=>({key:e,label:e})),{data:W}=D,X=L(W,K,G);let{headers:Z,rows:$}=X;const{summary:ee}=X;S&&($=$.map((e,t)=>[M(t),...e]),Z=[U(),...Z]);const te=((e,t)=>t?e.map(e=>({...e,visible:e.required||!t.includes(e.key)})):e.map(e=>({...e,visible:e.required||!e.hiddenByDefault})))(Z,I);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:P,"aria-hidden":!0}),Object(c.createElement)(y.TableCard,o()({className:"woocommerce-report-table",hasSearch:!!C,actions:[S&&Object(c.createElement)(y.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:T.length,helpText:E.helpText||Object(u.__)("Check at least two items below to compare","woocommerce-admin"),onClick:()=>{S&&Object(_.onQueryChange)("compare")(S,k,T.join(","))},disabled:!J},E.compareButton||Object(u.__)("Compare","woocommerce-admin")),C&&Object(c.createElement)(y.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:t=>{const{baseSearchQuery:r,addCesSurveyForCustomerSearch:a}=e,o=t.map(e=>e.label.replace(",","%2C"));o.length?(Object(_.updateQueryString)({filter:void 0,[k]:void 0,[C]:void 0,...r,search:Object(m.uniq)(o).join(",")}),a()):Object(_.updateQueryString)({search:void 0}),Object(j.recordEvent)("analytics_table_filter",{report:p})},placeholder:E.placeholder||Object(u.__)("Search by item name","woocommerce-admin"),selected:Y,showClearButton:!0,type:C,disabled:!J}),J&&Object(c.createElement)(n.Button,{key:"download",className:"woocommerce-table__download-button",disabled:z,onClick:()=>{const{createNotice:t,startExport:r,title:a}=e,o=Object.assign({},q),{data:c,totalResults:n}=D;let s="browser";if(delete o.extended_info,o.search&&delete o[C],c&&c.length===n){const{headers:e,rows:t}=L(c,n);Object(g.downloadCSVFile)(Object(g.generateCSVFileName)(a,o),Object(g.generateCSVDataFromTable)(e,t))}else s="email",r(p,x).then(()=>t("success",Object(u.sprintf)(Object(u.__)("Your %s Report will be emailed to you.","woocommerce-admin"),a))).catch(e=>t("error",e.message||Object(u.sprintf)(Object(u.__)("There was a problem exporting your %s Report. Please try again.","woocommerce-admin"),a)));Object(j.recordEvent)("analytics_table_download",{report:p,rows:n,downloadType:s})}},Object(c.createElement)(O,null),Object(c.createElement)("span",{className:"woocommerce-table__download-button__label"},E.downloadButton||Object(u.__)("Download","woocommerce-admin")))],headers:te,isLoading:z,onQueryChange:_.onQueryChange,onColumnsChange:(e,t)=>{const r=Z.map(e=>e.key).filter(t=>!e.includes(t));if(R){Q({[R]:r})}if(t){const r={report:p,column:t,status:e.includes(t)?"on":"off"};Object(j.recordEvent)("analytics_table_header_toggle",r)}},onSort:(e,t)=>{Object(_.onQueryChange)("sort")(e,t);const r={report:p,column:e,direction:t};Object(j.recordEvent)("analytics_table_sort",r)},onPageChange:(e,t)=>{P.current.scrollIntoView();const r=P.current.nextSibling.querySelector(".woocommerce-table__table"),a=l.focus.focusable.find(r);a.length&&a[0].focus(),t&&("goto"===t?Object(j.recordEvent)("analytics_table_go_to_page",{report:p,page:e}):Object(j.recordEvent)("analytics_table_page_click",{report:p,direction:t}))},rows:$,rowsPerPage:parseInt(x.per_page,10)||h.QUERY_DEFAULTS.pageSize,summary:ee,totalRows:G},F)))};v.propTypes={baseSearchQuery:p.a.object,compareBy:p.a.string,compareParam:p.a.string,columnPrefsKey:p.a.string,endpoint:p.a.string,extendItemsMethodNames:p.a.shape({getError:p.a.string,isRequesting:p.a.string,load:p.a.string}),extendedItemsStoreName:p.a.string,getHeadersContent:p.a.func.isRequired,getRowsContent:p.a.func.isRequired,getSummary:p.a.func,itemIdField:p.a.string,labels:p.a.shape({compareButton:p.a.string,downloadButton:p.a.string,helpText:p.a.string,placeholder:p.a.string}),primaryData:p.a.object,searchBy:p.a.string,summaryFields:p.a.arrayOf(p.a.string),tableData:p.a.object.isRequired,tableQuery:p.a.object,title:p.a.string.isRequired},v.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:m.noop,baseSearchQuery:{}};const S=[],k={};t.a=Object(i.compose)(Object(d.withSelect)((e,t)=>{const{endpoint:r,getSummary:a,isRequesting:o,itemIdField:c,query:n,tableData:s,tableQuery:i,filters:l,advancedFilters:d,summaryFields:u}=t;if(o||n.search&&(!n[r]||!n[r].length))return k;const{woocommerce_default_date_range:b}=e(h.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),p="categories"===r?"products":r,y=a?Object(h.getReportChartData)({endpoint:p,dataType:"primary",query:n,select:e,filters:l,advancedFilters:d,defaultDateRange:b,fields:u}):k,_=function(e,t,r){const{extendItemsMethodNames:a,extendedItemsStoreName:o,itemIdField:c}=t,n=r.items.data;if(!(Array.isArray(n)&&n.length&&a&&c))return r;const{[a.getError]:s,[a.isRequesting]:i,[a.load]:l}=e(o),d={include:n.map(e=>e[c]).join(","),per_page:n.length},u=l(d),b=!!i&&i(d),p=!!s&&s(d),y=n.map(e=>{const t=Object(m.first)(u.filter(t=>e.id===t.id));return{...e,...t}}),_=r.isRequesting||b,g=r.isError||p;return{...r,isRequesting:_,isError:g,items:{...r.items,data:y}}}(e,t,s||Object(h.getReportTableData)({endpoint:r,query:n,select:e,tableQuery:i,filters:l,advancedFilters:d,defaultDateRange:b}));return{primaryData:y,ids:c&&_.items.data?_.items.data.map(e=>e[c]):S,tableData:_,query:n}}),Object(d.withDispatch)(e=>{const{startExport:t}=e(h.EXPORT_STORE_NAME),{createNotice:r}=e("core/notices"),{addCesSurveyForCustomerSearch:a}=e(w.c);return{createNotice:r,startExport:t,addCesSurveyForCustomerSearch:a}}))(v)},562:function(e,t,r){}}]);