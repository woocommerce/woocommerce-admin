(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[0],{497:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return d}));var a=r(0),s=r(30),n=r(88),o=r.n(n),i=r(15);const c=o()(i.a),l=e=>{const t=c.getCurrencyConfig(),r=Object(s.applyFilters)("woocommerce_admin_report_currency",t,e);return o()(r)},d=Object(a.createContext)(c)},500:function(e,t,r){"use strict";var a=r(0),s=r(2),n=r(1),o=r.n(n),i=r(21);function c({className:e}){const t=Object(s.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),r=Object(s.__)("Reload","woocommerce-admin");return Object(a.createElement)(i.EmptyContent,{className:e,title:t,actionLabel:r,actionCallback:()=>{window.location.reload()}})}c.propTypes={className:o.a.string},t.a=c},501:function(e,t,r){"use strict";var a=r(0),s=r(13),n=r(1),o=r.n(n),i=r(3),c=r(7),l=r(21),d=r(15),m=r(11),u=r(19),p=r(16),b=r(497),y=r(53);class g extends a.Component{constructor(){super(),this.onDateSelect=this.onDateSelect.bind(this),this.onFilterSelect=this.onFilterSelect.bind(this),this.onAdvancedFilterAction=this.onAdvancedFilterAction.bind(this)}onDateSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props;r(),Object(p.recordEvent)("datepicker_update",{report:t,...Object(i.omitBy)(e,i.isUndefined)})}onFilterSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props,a=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(a)&&r();const s={report:t,filter:e.filter||"all"};"single_product"===e.filter&&(s.filter_variation=e["filter-variations"]||"all"),Object(p.recordEvent)("analytics_filter",s)}onAdvancedFilterAction(e,t){const{report:r,addCesSurveyForAnalytics:a}=this.props;switch(e){case"add":Object(p.recordEvent)("analytics_filters_add",{report:r,filter:t.key});break;case"remove":Object(p.recordEvent)("analytics_filters_remove",{report:r,filter:t.key});break;case"filter":const e=Object.keys(t).reduce((e,r)=>(e[Object(i.snakeCase)(r)]=t[r],e),{});a(),Object(p.recordEvent)("analytics_filters_filter",{report:r,...e});break;case"clear_all":Object(p.recordEvent)("analytics_filters_clear_all",{report:r});break;case"match":Object(p.recordEvent)("analytics_filters_all_any",{report:r,value:t.match})}}render(){const{advancedFilters:e,filters:t,path:r,query:s,showDatePicker:n,defaultDateRange:o}=this.props,{period:i,compare:c,before:m,after:p}=Object(u.getDateParamsFromQuery)(s,o),{primary:b,secondary:y}=Object(u.getCurrentDates)(s,o),g={period:i,compare:c,before:m,after:p,primaryDate:b,secondaryDate:y},h=this.context;return Object(a.createElement)(l.ReportFilters,{query:s,siteLocale:d.b.siteLocale,currency:h.getCurrencyConfig(),path:r,filters:t,advancedFilters:e,showDatePicker:n,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:g,isoDateFormat:u.isoDateFormat})}}g.contextType=b.a,t.a=Object(s.compose)(Object(c.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(m.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}}),Object(c.withDispatch)(e=>{const{addCesSurveyForAnalytics:t}=e(y.c);return{addCesSurveyForAnalytics:t}}))(g),g.propTypes={advancedFilters:o.a.object,filters:o.a.array,path:o.a.string.isRequired,query:o.a.object,showDatePicker:o.a.bool,report:o.a.string.isRequired}},502:function(e,t,r){"use strict";var a=r(35),s=r.n(a),n=r(0),o=r(4),i=r(30),c=r(13),l=r(90),d=r(7),m=r(3),u=r(2),p=r(1),b=r.n(p),y=r(21),g=r(12),h=r(471),f=r(11),_=r(16),O=()=>Object(n.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"})),j=r(500);var v=r(53);r(511);const C=e=>{const{getHeadersContent:t,getRowsContent:r,getSummary:a,isRequesting:c,primaryData:d,tableData:p,endpoint:b,itemIdField:v,tableQuery:C,compareBy:w,compareParam:R,searchBy:S,labels:D={},...E}=e,{query:q,columnPrefsKey:F}=e,{items:T,query:k}=p,P=q[R]?Object(g.getIdsFromQuery)(q[w]):[],[x,A]=Object(n.useState)(P),N=Object(n.useRef)(null),{updateUserPreferences:I,...Q}=Object(f.useUserPreferences)();if(p.isError||d.isError)return Object(n.createElement)(j.a,null);let B=[];F&&(B=Q&&Q[F]?Q[F]:B);const L=(e,s,n)=>{const o=a?a(s,n):null;return Object(i.applyFilters)("woocommerce_admin_report_table",{endpoint:b,headers:t(),rows:r(e),totals:s,summary:o,items:T})},V=t=>{const{ids:r}=e;A(t?r:[])},M=(t,r)=>{const{ids:a}=e;if(r)A(Object(m.uniq)([a[t],...x]));else{const e=x.indexOf(a[t]);A([...x.slice(0,e),...x.slice(e+1)])}},Y=t=>{const{ids:r=[]}=e,a=-1!==x.indexOf(r[t]);return{display:Object(n.createElement)(o.CheckboxControl,{onChange:Object(m.partial)(M,t),checked:a}),value:!1}},H=()=>{const{ids:t=[]}=e,r=t.length>0,a=r&&t.length===x.length;return{cellClassName:"is-checkbox-column",key:"compare",label:Object(n.createElement)(o.CheckboxControl,{onChange:V,"aria-label":Object(u.__)("Select All"),checked:a,disabled:!r}),required:!0}},U=c||p.isRequesting||d.isRequesting,G=Object(m.get)(d,["data","totals"],{}),$=T.totalResults||0,z=$>0,J=Object(g.getSearchWords)(q).map(e=>({key:e,label:e})),{data:K}=T,W=L(K,G,$);let{headers:X,rows:Z}=W;const{summary:ee}=W;w&&(Z=Z.map((e,t)=>[Y(t),...e]),X=[H(),...X]);const te=((e,t)=>t?e.map(e=>({...e,visible:e.required||!t.includes(e.key)})):e.map(e=>({...e,visible:e.required||!e.hiddenByDefault})))(X,B);return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:N,"aria-hidden":!0}),Object(n.createElement)(y.TableCard,s()({className:"woocommerce-report-table",hasSearch:!!S,actions:[w&&Object(n.createElement)(y.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:x.length,helpText:D.helpText||Object(u.__)("Check at least two items below to compare","woocommerce-admin"),onClick:()=>{w&&Object(g.onQueryChange)("compare")(w,R,x.join(","))},disabled:!z},D.compareButton||Object(u.__)("Compare","woocommerce-admin")),S&&Object(n.createElement)(y.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:t=>{const{baseSearchQuery:r,addCesSurveyForCustomerSearch:a}=e,s=t.map(e=>e.label.replace(",","%2C"));s.length?(Object(g.updateQueryString)({filter:void 0,[R]:void 0,[S]:void 0,...r,search:Object(m.uniq)(s).join(",")}),a()):Object(g.updateQueryString)({search:void 0}),Object(_.recordEvent)("analytics_table_filter",{report:b})},placeholder:D.placeholder||Object(u.__)("Search by item name","woocommerce-admin"),selected:J,showClearButton:!0,type:S,disabled:!z}),z&&Object(n.createElement)(o.Button,{key:"download",className:"woocommerce-table__download-button",disabled:U,onClick:()=>{const{createNotice:t,startExport:r,title:a}=e,s=Object.assign({},q),{data:n,totalResults:o}=T;let i="browser";if(delete s.extended_info,s.search&&delete s[S],n&&n.length===o){const{headers:e,rows:t}=L(n,o);Object(h.downloadCSVFile)(Object(h.generateCSVFileName)(a,s),Object(h.generateCSVDataFromTable)(e,t))}else i="email",r(b,k).then(()=>t("success",Object(u.sprintf)(Object(u.__)("Your %s Report will be emailed to you.","woocommerce-admin"),a))).catch(e=>t("error",e.message||Object(u.sprintf)(Object(u.__)("There was a problem exporting your %s Report. Please try again.","woocommerce-admin"),a)));Object(_.recordEvent)("analytics_table_download",{report:b,rows:o,downloadType:i})}},Object(n.createElement)(O,null),Object(n.createElement)("span",{className:"woocommerce-table__download-button__label"},D.downloadButton||Object(u.__)("Download","woocommerce-admin")))],headers:te,isLoading:U,onQueryChange:g.onQueryChange,onColumnsChange:(e,t)=>{const r=X.map(e=>e.key).filter(t=>!e.includes(t));if(F){I({[F]:r})}if(t){const r={report:b,column:t,status:e.includes(t)?"on":"off"};Object(_.recordEvent)("analytics_table_header_toggle",r)}},onSort:(e,t)=>{Object(g.onQueryChange)("sort")(e,t);const r={report:b,column:e,direction:t};Object(_.recordEvent)("analytics_table_sort",r)},onPageChange:(e,t)=>{N.current.scrollIntoView();const r=N.current.nextSibling.querySelector(".woocommerce-table__table"),a=l.focus.focusable.find(r);a.length&&a[0].focus(),t&&("goto"===t?Object(_.recordEvent)("analytics_table_go_to_page",{report:b,page:e}):Object(_.recordEvent)("analytics_table_page_click",{report:b,direction:t}))},rows:Z,rowsPerPage:parseInt(k.per_page,10)||f.QUERY_DEFAULTS.pageSize,summary:ee,totalRows:$},E)))};C.propTypes={baseSearchQuery:b.a.object,compareBy:b.a.string,compareParam:b.a.string,columnPrefsKey:b.a.string,endpoint:b.a.string,extendItemsMethodNames:b.a.shape({getError:b.a.string,isRequesting:b.a.string,load:b.a.string}),extendedItemsStoreName:b.a.string,getHeadersContent:b.a.func.isRequired,getRowsContent:b.a.func.isRequired,getSummary:b.a.func,itemIdField:b.a.string,labels:b.a.shape({compareButton:b.a.string,downloadButton:b.a.string,helpText:b.a.string,placeholder:b.a.string}),primaryData:b.a.object,searchBy:b.a.string,summaryFields:b.a.arrayOf(b.a.string),tableData:b.a.object.isRequired,tableQuery:b.a.object,title:b.a.string.isRequired},C.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:m.noop,baseSearchQuery:{}};const w=[],R={};t.a=Object(c.compose)(Object(d.withSelect)((e,t)=>{const{endpoint:r,getSummary:a,isRequesting:s,itemIdField:n,query:o,tableData:i,tableQuery:c,filters:l,advancedFilters:d,summaryFields:u,extendedItemsStoreName:p}=t,b=e(f.REPORTS_STORE_NAME),y=p?e(p):null,{woocommerce_default_date_range:g}=e(f.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");if(s)return R;const h="categories"===r?"products":r,_=a?Object(f.getReportChartData)({endpoint:h,selector:b,dataType:"primary",query:o,filters:l,advancedFilters:d,defaultDateRange:g,fields:u}):R,O=i||Object(f.getReportTableData)({endpoint:r,query:o,selector:b,tableQuery:c,filters:l,advancedFilters:d,defaultDateRange:g}),j=y?function(e,t,r){const{extendItemsMethodNames:a,itemIdField:s}=t,n=r.items.data;if(!(Array.isArray(n)&&n.length&&a&&s))return r;const{[a.getError]:o,[a.isRequesting]:i,[a.load]:c}=e,l={include:n.map(e=>e[s]).join(","),per_page:n.length},d=c(l),u=!!i&&i(l),p=!!o&&o(l),b=n.map(e=>{const t=Object(m.first)(d.filter(t=>e.id===t.id));return{...e,...t}}),y=r.isRequesting||u,g=r.isError||p;return{...r,isRequesting:y,isError:g,items:{...r.items,data:b}}}(y,t,O):O;return{primaryData:_,ids:n&&j.items.data?j.items.data.map(e=>e[n]):w,tableData:j,query:o}}),Object(d.withDispatch)(e=>{const{startExport:t}=e(f.EXPORT_STORE_NAME),{createNotice:r}=e("core/notices"),{addCesSurveyForCustomerSearch:a}=e(v.c);return{createNotice:r,startExport:t,addCesSurveyForCustomerSearch:a}}))(C)},503:function(e,t,r){"use strict";var a=r(0),s=r(2),n=r(13),o=r(57),i=r(7),c=r(3),l=r(1),d=r.n(l),m=r(21),u=r(11),p=r(19),b=r(497),y=r(500),g=r(12);class h extends a.Component{shouldComponentUpdate(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(c.isEqual)(e.query,this.props.query)}getItemChartData(){const{primaryData:e,selectedChart:t}=this.props;return e.data.intervals.map((function(e){const r={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){const a=r[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;r[e.segment_id]={label:a,value:e.subtotals[t.key]||0}}})),{date:Object(o.format)("Y-m-d\\TH:i:s",e.date_start),...r}}))}getTimeChartData(){const{query:e,primaryData:t,secondaryData:r,selectedChart:a,defaultDateRange:s}=this.props,n=Object(p.getIntervalForQuery)(e),{primary:i,secondary:c}=Object(p.getCurrentDates)(e,s);return t.data.intervals.map((function(t,s){const l=Object(p.getPreviousDate)(t.date_start,i.after,c.after,e.compare,n),d=r.data.intervals[s];return{date:Object(o.format)("Y-m-d\\TH:i:s",t.date_start),primary:{label:`${i.label} (${i.range})`,labelDate:t.date_start,value:t.subtotals[a.key]||0},secondary:{label:`${c.label} (${c.range})`,labelDate:l.format("YYYY-MM-DD HH:mm:ss"),value:d&&d.subtotals[a.key]||0}}}))}getTimeChartTotals(){const{primaryData:e,secondaryData:t,selectedChart:r}=this.props;return{primary:Object(c.get)(e,["data","totals",r.key],null),secondary:Object(c.get)(t,["data","totals",r.key],null)}}renderChart(e,t,r,n){const{emptySearchResults:o,filterParam:i,interactiveLegend:c,itemsLabel:l,legendPosition:d,path:b,query:y,selectedChart:g,showHeaderControls:h,primaryData:f}=this.props,_=Object(p.getIntervalForQuery)(y),O=Object(p.getAllowedIntervalsForQuery)(y),j=Object(p.getDateFormatsForInterval)(_,f.data.intervals.length),v=o?Object(s.__)("No data for the current search","woocommerce-admin"):Object(s.__)("No data for the selected date range","woocommerce-admin"),{formatAmount:C,getCurrencyConfig:w}=this.context;return Object(a.createElement)(m.Chart,{allowedIntervals:O,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:v,filterParam:i,interactiveLegend:c,interval:_,isRequesting:t,itemsLabel:l,legendPosition:d,legendTotals:n,mode:e,path:b,query:y,screenReaderFormat:j.screenReaderFormat,showHeaderControls:h,title:g.label,tooltipLabelFormat:j.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&g.label||null,tooltipValueFormat:Object(u.getTooltipValueFormat)(g.type,C),chartType:Object(p.getChartTypeForQuery)(y),valueType:g.type,xFormat:j.xFormat,x2Format:j.x2Format,currency:w()})}renderItemComparison(){const{isRequesting:e,primaryData:t}=this.props;if(t.isError)return Object(a.createElement)(y.a,null);const r=e||t.isRequesting,s=this.getItemChartData();return this.renderChart("item-comparison",r,s)}renderTimeComparison(){const{isRequesting:e,primaryData:t,secondaryData:r}=this.props;if(!t||t.isError||r.isError)return Object(a.createElement)(y.a,null);const s=e||t.isRequesting||r.isRequesting,n=this.getTimeChartData(),o=this.getTimeChartTotals();return this.renderChart("time-comparison",s,n,o)}render(){const{mode:e}=this.props;return"item-comparison"===e?this.renderItemComparison():this.renderTimeComparison()}}h.contextType=b.a,h.propTypes={filters:d.a.array,isRequesting:d.a.bool,itemsLabel:d.a.string,limitProperties:d.a.array,mode:d.a.string,path:d.a.string.isRequired,primaryData:d.a.object,query:d.a.object.isRequired,secondaryData:d.a.object,selectedChart:d.a.shape({key:d.a.string.isRequired,label:d.a.string.isRequired,order:d.a.oneOf(["asc","desc"]),orderby:d.a.string,type:d.a.oneOf(["average","number","currency"]).isRequired}).isRequired},h.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(n.compose)(Object(i.withSelect)((e,t)=>{const{charts:r,endpoint:a,filters:s,isRequesting:n,limitProperties:o,query:i,advancedFilters:l}=t,d=o||[a],m=function e(t,r,a={}){if(!t||0===t.length)return null;const s=t.slice(0),n=s.pop();if(n.showFilters(r,a)){const e=Object(g.flattenFilters)(n.filters),t=r[n.param]||n.defaultValue||"all";return Object(c.find)(e,{value:t})}return e(s,r,a)}(s,i),p=Object(c.get)(m,["settings","param"]),b=t.mode||function(e,t){if(e&&t){const r=Object(c.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(c.get)(e,["chartMode"])}return null}(m,i)||"time-comparison",{woocommerce_default_date_range:y}=e(u.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),h=e(u.REPORTS_STORE_NAME),f={mode:b,filterParam:p,defaultDateRange:y};if(n)return f;const _=d.some(e=>i[e]&&i[e].length);if(i.search&&!_)return{...f,emptySearchResults:!0};const O=r&&r.map(e=>e.key),j=Object(u.getReportChartData)({endpoint:a,dataType:"primary",query:i,selector:h,limitBy:d,filters:s,advancedFilters:l,defaultDateRange:y,fields:O});if("item-comparison"===b)return{...f,primaryData:j};const v=Object(u.getReportChartData)({endpoint:a,dataType:"secondary",query:i,selector:h,limitBy:d,filters:s,advancedFilters:l,defaultDateRange:y,fields:O});return{...f,primaryData:j,secondaryData:v}}))(h)},506:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(3);function s(e,t=[]){const r=Object(a.find)(t,{key:e});return r||t[0]}},507:function(e,t,r){"use strict";var a=r(0),s=r(2),n=r(13),o=r(7),i=r(1),c=r.n(i),l=r(12),d=r(21),m=r(120),u=r(11),p=r(19),b=r(16),y=r(500),g=r(497);class h extends a.Component{formatVal(e,t){const{formatAmount:r,getCurrencyConfig:a}=this.context;return"currency"===t?r(e):Object(m.formatValue)(a(),t,e)}getValues(e,t){const{emptySearchResults:r,summaryData:a}=this.props,{totals:s}=a,n=s.primary?s.primary[e]:0,o=s.secondary?s.secondary[e]:0,i=r?0:n,c=r?0:o;return{delta:Object(m.calculateDelta)(i,c),prevValue:this.formatVal(c,t),value:this.formatVal(i,t)}}render(){const{charts:e,query:t,selectedChart:r,summaryData:n,endpoint:o,report:i,defaultDateRange:c}=this.props,{isError:m,isRequesting:u}=n;if(m)return Object(a.createElement)(y.a,null);if(u)return Object(a.createElement)(d.SummaryListPlaceholder,{numberOfItems:e.length});const{compare:g}=Object(p.getDateParamsFromQuery)(t,c);return Object(a.createElement)(d.SummaryList,null,({onToggle:t})=>e.map(e=>{const{key:n,order:c,orderby:m,label:u,type:p,isReverseTrend:y}=e,h={chart:n};m&&(h.orderby=m),c&&(h.order=c);const f=Object(l.getNewPath)(h),_=r.key===n,{delta:O,prevValue:j,value:v}=this.getValues(n,p);return Object(a.createElement)(d.SummaryNumber,{key:n,delta:O,href:f,label:u,reverseTrend:y,prevLabel:"previous_period"===g?Object(s.__)("Previous Period:","woocommerce-admin"):Object(s.__)("Previous Year:","woocommerce-admin"),prevValue:j,selected:_,value:v,onLinkClickCallback:()=>{t&&t(),Object(b.recordEvent)("analytics_chart_tab_click",{report:i||o,key:n})}})}))}}h.propTypes={charts:c.a.array.isRequired,endpoint:c.a.string.isRequired,limitProperties:c.a.array,query:c.a.object.isRequired,selectedChart:c.a.shape({key:c.a.string.isRequired,label:c.a.string.isRequired,order:c.a.oneOf(["asc","desc"]),orderby:c.a.string,type:c.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:c.a.object,report:c.a.string},h.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},h.contextType=g.a,t.a=Object(n.compose)(Object(o.withSelect)((e,t)=>{const{charts:r,endpoint:a,limitProperties:s,query:n,filters:o,advancedFilters:i}=t,c=s||[a],l=c.some(e=>n[e]&&n[e].length);if(n.search&&!l)return{emptySearchResults:!0};const d=r&&r.map(e=>e.key),{woocommerce_default_date_range:m}=e(u.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{summaryData:Object(u.getSummaryNumbers)({endpoint:a,query:n,select:e,limitBy:c,filters:o,advancedFilters:i,defaultDateRange:m,fields:d}),defaultDateRange:m}}))(h)},511:function(e,t,r){}}]);