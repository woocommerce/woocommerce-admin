(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[51],{655:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return y}));var n=r(4),a=r.n(n),o=(r(281),r(117),r(83),r(126),r(132),r(151),r(127),r(152),r(21)),c=r.n(o),i=r(3),s=r(57),u=r(33),l=r(28),m=r(282),p=r(42);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.indicator,r=e.primaryData,n=e.secondaryData,a=e.currency,o=e.formatAmount,c=e.persistedQuery,s=Object(i.find)(r.data,(function(e){return e.stat===t.stat})),u=Object(i.find)(n.data,(function(e){return e.stat===t.stat}));if(!s||!u)return{};var d=s._links&&s._links.report[0]&&s._links.report[0].href||"",f=function(e,t,r){return e?"/jetpack"===e?Object(p.f)("admin.php?page=jetpack#/dashboard"):Object(l.getNewPath)(t,e,{chart:r.chart}):""}(d,c,s),b="/jetpack"===d?"wp-admin":"wc-admin",y="currency"===s.format,O=Object(m.calculateDelta)(s.value,u.value);return{primaryValue:y?o(s.value):Object(m.formatValue)(a,s.format,s.value),secondaryValue:y?o(u.value):Object(m.formatValue)(a,u.format,u.value),delta:O,reportUrl:f,reportUrlType:b}},y=function(e,t,r,n){var a=e(u.REPORTS_STORE_NAME),o=a.getReportItems,i=a.getReportItemsError,l=a.isResolving,m=e(u.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,p=Object(s.getCurrentDates)(r,m),d=p.primary.before,b=p.secondary.before,y=t.map((function(e){return e.stat})).join(","),O=Object(u.getFilterQuery)({filters:n,query:r}),j=f(f({},O),{},{after:Object(s.appendTimestamp)(p.primary.after,"start"),before:Object(s.appendTimestamp)(d,d.isSame(c()(),"day")?"now":"end"),stats:y}),g=f(f({},O),{},{after:Object(s.appendTimestamp)(p.secondary.after,"start"),before:Object(s.appendTimestamp)(b,b.isSame(c()(),"day")?"now":"end"),stats:y});return{primaryData:o("performance-indicators",j),primaryError:i("performance-indicators",j)||null,primaryRequesting:l("getReportItems",["performance-indicators",j]),secondaryData:o("performance-indicators",g),secondaryError:i("performance-indicators",g)||null,secondaryRequesting:l("getReportItems",["performance-indicators",g]),defaultDateRange:m}}},735:function(e,t,r){},755:function(e,t,r){"use strict";r.r(t);r(174),r(83),r(126),r(151),r(127),r(152);var n=r(4),a=r.n(n),o=r(13),c=r.n(o),i=r(14),s=r.n(i),u=r(16),l=r.n(u),m=r(17),p=r.n(m),d=r(7),f=r.n(d),b=r(0),y=(r(117),r(108),r(206),r(132),r(2)),O=r(34),j=r(28),g=r(42),v=r(15),h=r(33),w=r(112),_=r(57),E=r(44),k=(r(735),r(631)),P=r(655);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var a=f()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p()(this,r)}}var D=Object(g.g)("dataEndpoints",{performanceIndicators:[]}).performanceIndicators,I=function(e){l()(r,e);var t=T(r);function r(){return c()(this,r),t.apply(this,arguments)}return s()(r,[{key:"renderMenu",value:function(){var e=this.props,t=e.hiddenBlocks,r=e.isFirst,n=e.isLast,a=e.onMove,o=e.onRemove,c=e.onTitleBlur,i=e.onTitleChange,s=e.onToggleHiddenBlock,u=e.titleInput,l=e.controls;return Object(b.createElement)(w.EllipsisMenu,{label:Object(y.__)("Choose which analytics to display and the section name","woocommerce-admin"),renderContent:function(e){var m=e.onToggle;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(w.MenuTitle,null,Object(y.__)("Display Stats:","woocommerce-admin")),D.map((function(e,r){var n=!t.includes(e.stat);return Object(b.createElement)(w.MenuItem,{checked:n,isCheckbox:!0,isClickable:!0,key:r,onInvoke:function(){s(e.stat)(),Object(E.recordEvent)("dash_indicators_toggle",{status:n?"off":"on",key:e.stat})}},e.label)})),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(b.createElement)(l,{onToggle:m,onMove:a,onRemove:o,isFirst:r,isLast:n,onTitleBlur:c,onTitleChange:i,titleInput:u}))}})}},{key:"renderList",value:function(){var e=this.props,t=e.query,r=e.primaryRequesting,n=e.secondaryRequesting,a=e.primaryError,o=e.secondaryError,c=e.primaryData,i=e.secondaryData,s=e.userIndicators,u=e.defaultDateRange;if(r||n)return Object(b.createElement)(w.SummaryListPlaceholder,{numberOfItems:s.length});if(a||o)return null;var l=Object(j.getPersistedQuery)(t),m="previous_period"===Object(_.getDateParamsFromQuery)(t,u).compare?Object(y.__)("Previous Period:","woocommerce-admin"):Object(y.__)("Previous Year:","woocommerce-admin"),p=this.context,d=p.formatAmount,f=(0,p.getCurrencyConfig)();return Object(b.createElement)(w.SummaryList,null,(function(){return s.map((function(e,t){var r=Object(P.b)({indicator:e,primaryData:c,secondaryData:i,currency:f,formatAmount:d,persistedQuery:l}),n=r.primaryValue,a=r.secondaryValue,o=r.delta,s=r.reportUrl,u=r.reportUrlType;return Object(b.createElement)(w.SummaryNumber,{key:t,href:s,hrefType:u,label:e.label,value:n,prevLabel:m,prevValue:a,delta:o,onLinkClickCallback:function(){Object(E.recordEvent)("dash_indicators_click",{key:e.stat})}})}))}))}},{key:"render",value:function(){var e=this.props,t=e.userIndicators,r=e.title;return Object(b.createElement)(b.Fragment,null,Object(b.createElement)(w.SectionHeader,{title:r||Object(y.__)("Store Performance","woocommerce-admin"),menu:this.renderMenu()}),t.length>0&&Object(b.createElement)("div",{className:"woocommerce-dashboard__store-performance"},this.renderList()))}}]),r}(b.Component);I.contextType=k.a,t.default=Object(O.compose)(Object(v.withSelect)((function(e,t){var r=t.hiddenBlocks,n=t.query,a=t.filters,o=D.filter((function(e){return!r.includes(e.stat)})),c=e(h.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,i={hiddenBlocks:r,userIndicators:o,indicators:D,defaultDateRange:c};if(0===o.length)return i;var s=Object(P.a)(e,o,n,a);return R(R({},i),s)})))(I)}}]);