(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[2],{633:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return y})),r.d(t,"f",(function(){return g})),r.d(t,"h",(function(){return b})),r.d(t,"g",(function(){return v}));r(115),r(158),r(281),r(117),r(280);var a=r(38),n=r(48),i=r.n(n),o=r(3),s=r(28),u=r(33),c=r(42),l=r(636);function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,o="function"==typeof e?e(n):e,u=Object(s.getIdsFromQuery)(r);if(u.length<1)return Promise.resolve([]);var c={include:u.join(","),per_page:u.length};return i()({path:Object(a.addQueryArgs)(o,c)}).then((function(e){return e.map(t)}))}}d(u.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var m=d(u.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),f=d(u.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),p=d(u.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),y=d(u.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),g=d(u.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(l.a)(e)}}));function b(e){var t=e.attributes,r=e.name,a=Object(c.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(a)>-1)return r;var n=t.map((function(e){return e.option})).join(", ");return n?r+a+n:r}var v=d((function(e){var t=e.products;return t?u.NAMESPACE+"/products/".concat(t,"/variations"):u.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:b(e)}}))},634:function(e,t,r){"use strict";var a=r(26),n=r(284).trim;a({target:"String",proto:!0,forced:r(635)("trim")},{trim:function(){return n(this)}})},635:function(e,t,r){var a=r(12),n=r(285);e.exports=function(e){return a((function(){return!!n[e]()||"​᠎"!="​᠎"[e]()||n[e].name!==e}))}},636:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(281),r(132),r(117),r(280),r(634),r(115),r(258);var a=r(2);function n(e){return[e.country,e.state,e.name||Object(a.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},637:function(e,t,r){"use strict";r(174),r(83),r(126),r(132),r(151),r(152);var a=r(4),n=r.n(a),i=r(13),o=r.n(i),s=r(14),u=r.n(s),c=r(16),l=r.n(c),d=r(17),m=r.n(d),f=r(7),p=r.n(f),y=r(0),g=(r(117),r(127),r(128),r(118),r(255),r(2)),b=r(34),v=r(184),h=r(15),O=r(3),j=r(1),R=r.n(j),D=r(112),q=r(33),C=r(57),E=r(631),_=r(632),k=(r(283),r(108),r(206),r(28));function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=p()(e);if(t){var n=p()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return m()(this,r)}}var T=function(e){l()(r,e);var t=w(r);function r(){return o()(this,r),t.apply(this,arguments)}return u()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(O.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),S({date:Object(v.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,n=e.selectedChart,i=e.defaultDateRange,o=Object(C.getIntervalForQuery)(t),s=Object(C.getCurrentDates)(t,i),u=s.primary,c=s.secondary;return r.data.intervals.map((function(e,r){var i=Object(C.getPreviousDate)(e.date_start,u.after,c.after,t.compare,o),s=a.data.intervals[r];return{date:Object(v.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(u.label," (").concat(u.range,")"),labelDate:e.date_start,value:e.subtotals[n.key]||0},secondary:{label:"".concat(c.label," (").concat(c.range,")"),labelDate:i.format("YYYY-MM-DD HH:mm:ss"),value:s&&s.subtotals[n.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(O.get)(t,["data","totals",a.key],null),secondary:Object(O.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var n=this.props,i=n.emptySearchResults,o=n.filterParam,s=n.interactiveLegend,u=n.itemsLabel,c=n.legendPosition,l=n.path,d=n.query,m=n.selectedChart,f=n.showHeaderControls,p=n.primaryData,b=Object(C.getIntervalForQuery)(d),v=Object(C.getAllowedIntervalsForQuery)(d),h=Object(C.getDateFormatsForInterval)(b,p.data.intervals.length),O=i?Object(g.__)("No data for the current search","woocommerce-admin"):Object(g.__)("No data for the selected date range","woocommerce-admin"),j=this.context,R=j.formatAmount,E=j.getCurrencyConfig;return Object(y.createElement)(D.Chart,{allowedIntervals:v,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:O,filterParam:o,interactiveLegend:s,interval:b,isRequesting:t,itemsLabel:u,legendPosition:c,legendTotals:a,mode:e,path:l,query:d,screenReaderFormat:h.screenReaderFormat,showHeaderControls:f,title:m.label,tooltipLabelFormat:h.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&m.label||null,tooltipValueFormat:Object(q.getTooltipValueFormat)(m.type,R),chartType:Object(C.getChartTypeForQuery)(d),valueType:m.type,xFormat:h.xFormat,x2Format:h.x2Format,currency:E()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(y.createElement)(_.a,{isError:!0});var a=t||r.isRequesting,n=this.getItemChartData();return this.renderChart("item-comparison",a,n)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(y.createElement)(_.a,{isError:!0});var n=t||r.isRequesting||a.isRequesting,i=this.getTimeChartData(),o=this.getTimeChartTotals();return this.renderChart("time-comparison",n,i,o)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(y.Component);T.contextType=E.a,T.propTypes={filters:R.a.array,isRequesting:R.a.bool,itemsLabel:R.a.string,limitProperties:R.a.array,mode:R.a.string,path:R.a.string.isRequired,primaryData:R.a.object,query:R.a.object.isRequired,secondaryData:R.a.object,selectedChart:R.a.shape({key:R.a.string.isRequired,label:R.a.string.isRequired,order:R.a.oneOf(["asc","desc"]),orderby:R.a.string,type:R.a.oneOf(["average","number","currency"]).isRequired}).isRequired},T.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(b.compose)(Object(h.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.filters,i=t.isRequesting,o=t.limitProperties,s=t.query,u=t.advancedFilters,c=o||[a],l=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var n=t.slice(0),i=n.pop();if(i.showFilters(r,a)){var o=Object(k.flattenFilters)(i.filters),s=r[i.param]||i.defaultValue||"all";return Object(O.find)(o,{value:s})}return e(n,r,a)}(n,s),d=Object(O.get)(l,["settings","param"]),m=t.mode||function(e,t){if(e&&t){var r=Object(O.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(O.get)(e,["chartMode"])}return null}(l,s)||"time-comparison",f=e(q.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,p={mode:m,filterParam:d,defaultDateRange:f};if(i)return p;var y=c.some((function(e){return s[e]&&s[e].length}));if(s.search&&!y)return S(S({},p),{},{emptySearchResults:!0});var g=r&&r.map((function(e){return e.key})),b=Object(q.getReportChartData)({endpoint:a,dataType:"primary",query:s,select:e,limitBy:c,filters:n,advancedFilters:u,defaultDateRange:f,fields:g});if("item-comparison"===m)return S(S({},p),{},{primaryData:b});var v=Object(q.getReportChartData)({endpoint:a,dataType:"secondary",query:s,select:e,limitBy:c,filters:n,advancedFilters:u,defaultDateRange:f,fields:g});return S(S({},p),{},{primaryData:b,secondaryData:v})})))(T)},639:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(3);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},640:function(e,t,r){"use strict";r(174);var a=r(13),n=r.n(a),i=r(14),o=r.n(i),s=r(16),u=r.n(s),c=r(17),l=r.n(c),d=r(7),m=r.n(d),f=r(0),p=(r(117),r(118),r(255),r(2)),y=r(34),g=r(15),b=r(1),v=r.n(b),h=r(28),O=r(112),j=r(282),R=r(33),D=r(57),q=r(44),C=r(632),E=r(631);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return l()(this,r)}}var k=function(e){u()(r,e);var t=_(r);function r(){return n()(this,r),t.apply(this,arguments)}return o()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,n=r.getCurrencyConfig;return"currency"===t?a(e):Object(j.formatValue)(n(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,n=r.summaryData.totals,i=n.primary?n.primary[e]:0,o=n.secondary?n.secondary[e]:0,s=a?0:i,u=a?0:o;return{delta:Object(j.calculateDelta)(s,u),prevValue:this.formatVal(u,t),value:this.formatVal(s,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,n=t.selectedChart,i=t.summaryData,o=t.endpoint,s=t.report,u=t.defaultDateRange,c=i.isError,l=i.isRequesting;if(c)return Object(f.createElement)(C.a,{isError:!0});if(l)return Object(f.createElement)(O.SummaryListPlaceholder,{numberOfItems:r.length});var d=Object(D.getDateParamsFromQuery)(a,u).compare;return Object(f.createElement)(O.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,i=t.order,u=t.orderby,c=t.label,l=t.type,m={chart:r};u&&(m.orderby=u),i&&(m.order=i);var y=Object(h.getNewPath)(m),g=n.key===r,b=e.getValues(r,l),v=b.delta,j=b.prevValue,R=b.value;return Object(f.createElement)(O.SummaryNumber,{key:r,delta:v,href:y,label:c,prevLabel:"previous_period"===d?Object(p.__)("Previous Period:","woocommerce-admin"):Object(p.__)("Previous Year:","woocommerce-admin"),prevValue:j,selected:g,value:R,onLinkClickCallback:function(){a&&a(),Object(q.recordEvent)("analytics_chart_tab_click",{report:s||o,key:r})}})}))}))}}]),r}(f.Component);k.propTypes={charts:v.a.array.isRequired,endpoint:v.a.string.isRequired,limitProperties:v.a.array,query:v.a.object.isRequired,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:v.a.object,report:v.a.string},k.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},k.contextType=E.a,t.a=Object(y.compose)(Object(g.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.limitProperties,i=t.query,o=t.filters,s=t.advancedFilters,u=n||[a],c=u.some((function(e){return i[e]&&i[e].length}));if(i.search&&!c)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),d=e(R.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(R.getSummaryNumbers)({endpoint:a,query:i,select:e,limitBy:u,filters:o,advancedFilters:s,defaultDateRange:d,fields:l}),defaultDateRange:d}})))(k)},652:function(e,t,r){"use strict";function a(e,t,r){return!!t&&(e&&t<=r==="instock")}r.d(t,"a",(function(){return a}))}}]);