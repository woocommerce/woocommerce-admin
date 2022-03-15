(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[10],{510:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var o=r(0),c=r(1),a=r.n(c),n=r(563),d=r(2),l=r(8),m=r(5),i=r(11),s=r.n(i),u=r(22),b=r(13),_=r(122),p=r(15),w=r(12),O=r(21),f=r(533),j=r(527),y=r(23);class h extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(d.__)("Date","woocommerce-admin"),key:"date",defaultSort:!0,required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(d.__)("Product title","woocommerce-admin"),key:"product",isSortable:!0,required:!0},{label:Object(d.__)("File name","woocommerce-admin"),key:"file_name"},{label:Object(d.__)("Order #","woocommerce-admin"),screenReaderLabel:Object(d.__)("Order Number","woocommerce-admin"),key:"order_number"},{label:Object(d.__)("Username","woocommerce-admin"),key:"user_id"},{label:Object(d.__)("IP","woocommerce-admin"),key:"ip_address"}]}getRowsContent(e){const{query:t}=this.props,r=Object(b.getPersistedQuery)(t),c=Object(y.d)("dateFormat",O.defaultTableDateFormat);return Object(m.map)(e,e=>{const{_embedded:t,date:a,file_name:n,file_path:l,ip_address:m,order_id:i,order_number:s,product_id:_,username:w}=e,{code:O,name:f}=t.product[0];let j,y;if("woocommerce_rest_product_invalid_id"===O)j=Object(d.__)("(Deleted)","woocommerce-admin"),y=Object(d.__)("(Deleted)","woocommerce-admin");else{const e=Object(b.getNewPath)(r,"/analytics/products",{filter:"single_product",products:_});j=Object(o.createElement)(u.Link,{href:e,type:"wc-admin"},f),y=f}return[{display:Object(o.createElement)(u.Date,{date:a,visibleFormat:c}),value:a},{display:j,value:y},{display:Object(o.createElement)(u.Link,{href:l,type:"external"},n),value:n},{display:Object(o.createElement)(u.Link,{href:Object(p.getAdminLink)(`post.php?post=${i}&action=edit`),type:"wp-admin"},s),value:s},{display:w,value:w},{display:m,value:m}]})}getSummary(e){const{download_count:t=0}=e,{query:r,defaultDateRange:o}=this.props,c=Object(O.getCurrentDates)(r,o),a=s()(c.primary.after),n=s()(c.primary.before).diff(a,"days")+1,l=this.context.getCurrencyConfig();return[{label:Object(d._n)("day","days",n,"woocommerce-admin"),value:Object(_.formatValue)(l,"number",n)},{label:Object(d._n)("Download","Downloads",t,"woocommerce-admin"),value:Object(_.formatValue)(l,"number",t)}]}render(){const{query:e,filters:t,advancedFilters:r}=this.props;return Object(o.createElement)(f.a,{endpoint:"downloads",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["download_count"],query:e,tableQuery:{_embed:!0},title:Object(d.__)("Downloads","woocommerce-admin"),columnPrefsKey:"downloads_report_columns",filters:t,advancedFilters:r})}}h.contextType=j.a;var g=Object(l.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(w.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}})(h),v=r(536),S=r(534),E=r(537),A=r(532);class x extends o.Component{render(){const{query:e,path:t}=this.props;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(A.a,{query:e,path:t,filters:n.c,advancedFilters:n.a,report:"downloads"}),Object(o.createElement)(E.a,{charts:n.b,endpoint:"downloads",query:e,selectedChart:Object(v.a)(e.chart,n.b),filters:n.c,advancedFilters:n.a}),Object(o.createElement)(S.a,{charts:n.b,endpoint:"downloads",path:t,query:e,selectedChart:Object(v.a)(e.chart,n.b),filters:n.c,advancedFilters:n.a}),Object(o.createElement)(g,{query:e,filters:n.c,advancedFilters:n.a}))}}x.propTypes={query:a.a.object.isRequired}},528:function(e,t,r){"use strict";r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return w})),r.d(t,"h",(function(){return O})),r.d(t,"g",(function(){return f}));var o=r(16),c=r(19),a=r.n(c),n=r(5),d=r(13),l=r(12),m=r(529),i=r(23);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.identity;return function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0;const n="function"==typeof e?e(c):e,l=Object(d.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);const m={include:l.join(","),per_page:l.length};return a()({path:Object(o.addQueryArgs)(n,m)}).then(e=>e.map(t))}}s(l.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=s(l.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),b=s(l.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),_=s(l.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),p=s(l.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),w=s(l.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(m.a)(e)}));function O(e){let{attributes:t,name:r}=e;const o=Object(i.d)("variationTitleAttributesSeparator"," - ");if(r&&r.indexOf(o)>-1)return r;const c=(t||[]).map(e=>{let{option:t}=e;return t}).join(", ");return c?r+o+c:r}const f=s(e=>{let{products:t}=e;return t?l.NAMESPACE+`/products/${t}/variations`:l.NAMESPACE+"/variations"},e=>({key:e.id,label:O(e)}))},529:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(2);function c(e){return[e.country,e.state,e.name||Object(o.__)("TAX","woocommerce-admin"),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},563:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return l}));var o=r(2),c=r(28),a=r(528);const n=Object(c.applyFilters)("woocommerce_admin_downloads_report_charts",[{key:"download_count",label:Object(o.__)("Downloads","woocommerce-admin"),type:"number"}]),d=Object(c.applyFilters)("woocommerce_admin_downloads_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:Object(o.__)("All downloads","woocommerce-admin"),value:"all"},{label:Object(o.__)("Advanced filters","woocommerce-admin"),value:"advanced"}]}]),l=Object(c.applyFilters)("woocommerce_admin_downloads_report_advanced_filters",{title:Object(o._x)("Downloads match {{select /}} filters","A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg","woocommerce-admin"),filters:{product:{labels:{add:Object(o.__)("Product","woocommerce-admin"),placeholder:Object(o.__)("Search","woocommerce-admin"),remove:Object(o.__)("Remove product filter","woocommerce-admin"),rule:Object(o.__)("Select a product filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select product","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"products",getLabels:a.d}},customer:{labels:{add:Object(o.__)("Username","woocommerce-admin"),placeholder:Object(o.__)("Search customer username","woocommerce-admin"),remove:Object(o.__)("Remove customer username filter","woocommerce-admin"),rule:Object(o.__)("Select a customer username filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select customer username","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","customer usernames","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","customer usernames","woocommerce-admin")}],input:{component:"Search",type:"usernames",getLabels:a.c}},order:{labels:{add:Object(o.__)("Order #","woocommerce-admin"),placeholder:Object(o.__)("Search order number","woocommerce-admin"),remove:Object(o.__)("Remove order number filter","woocommerce-admin"),rule:Object(o.__)("Select a order number filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Order #{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select order number","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","order numbers","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","order numbers","woocommerce-admin")}],input:{component:"Search",type:"orders",getLabels:async e=>{const t=e.split(",");return await t.map(e=>({id:e,label:"#"+e}))}}},ip_address:{labels:{add:Object(o.__)("IP Address","woocommerce-admin"),placeholder:Object(o.__)("Search IP address","woocommerce-admin"),remove:Object(o.__)("Remove IP address filter","woocommerce-admin"),rule:Object(o.__)("Select an IP address filter match","woocommerce-admin"),title:Object(o.__)("{{title}}IP Address{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select IP address","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","IP addresses","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","IP addresses","woocommerce-admin")}],input:{component:"Search",type:"downloadIps",getLabels:async e=>{const t=e.split(",");return await t.map(e=>({id:e,label:e}))}}}}})}}]);