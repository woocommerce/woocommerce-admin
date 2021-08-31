(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[11],{479:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return h}));var r=o(0),c=o(1),a=o.n(c),n=o(529),m=o(506),l=o(2),i=o(3),s=o(21),d=o(120),u=o(15),b=o(12),_=o(19),p=o(502),O=o(497);o(576);class j extends r.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(l.__)("Date","woocommerce-admin"),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:Object(l.__)("Order #","woocommerce-admin"),screenReaderLabel:Object(l.__)("Order Number","woocommerce-admin"),key:"order_number",required:!0},{label:Object(l.__)("Status","woocommerce-admin"),key:"status",required:!1,isSortable:!1},{label:Object(l.__)("Customer","woocommerce-admin"),key:"customer_id",required:!1,isSortable:!1},{label:Object(l.__)("Customer Type","woocommerce-admin"),key:"customer_type",required:!1,isSortable:!1},{label:Object(l.__)("Product(s)","woocommerce-admin"),screenReaderLabel:Object(l.__)("Products","woocommerce-admin"),key:"products",required:!1,isSortable:!1},{label:Object(l.__)("Items Sold","woocommerce-admin"),key:"num_items_sold",required:!1,isSortable:!0,isNumeric:!0},{label:Object(l.__)("Coupon(s)","woocommerce-admin"),screenReaderLabel:Object(l.__)("Coupons","woocommerce-admin"),key:"coupons",required:!1,isSortable:!1},{label:Object(l.__)("Net Sales","woocommerce-admin"),screenReaderLabel:Object(l.__)("Net Sales","woocommerce-admin"),key:"net_total",required:!0,isSortable:!0,isNumeric:!0}]}getCustomerName(e){const{first_name:t,last_name:o}=e||{};return t||o?[t,o].join(" "):""}getRowsContent(e){const{query:t}=this.props,o=Object(b.getPersistedQuery)(t),c=Object(u.f)("dateFormat",_.defaultTableDateFormat),{render:a,getCurrencyConfig:n}=this.context;return Object(i.map)(e,e=>{const{currency:t,date_created:m,net_total:i,num_items_sold:_,order_id:p,order_number:O,parent_id:j,status:w,customer_type:f}=e,y=e.extended_info||{},{coupons:v,customer:h,products:S}=y,g=S.sort((e,t)=>t.quantity-e.quantity).map(e=>({label:e.name,quantity:e.quantity,href:Object(b.getNewPath)(o,"/analytics/products",{filter:"single_product",products:e.id})})),C=v.map(e=>({label:e.code,href:Object(b.getNewPath)(o,"/analytics/coupons",{filter:"single_coupon",coupons:e.id})}));return[{display:Object(r.createElement)(s.Date,{date:m,visibleFormat:c}),value:m},{display:Object(r.createElement)(s.Link,{href:"post.php?post="+(j||p)+"&action=edit"+(j?"#order_refunds":""),type:"wp-admin"},O),value:O},{display:Object(r.createElement)(s.OrderStatus,{className:"woocommerce-orders-table__status",order:{status:w},orderStatusMap:Object(u.f)("orderStatuses",{})}),value:w},{display:this.getCustomerName(h),value:this.getCustomerName(h)},{display:(x=f,x.charAt(0).toUpperCase()+x.slice(1)),value:f},{display:this.renderList(g.length?[g[0]]:[],g.map(e=>({label:Object(l.sprintf)(Object(l.__)("%s× %s","woocommerce-admin"),e.quantity,e.label),href:e.href}))),value:g.map(({quantity:e,label:t})=>Object(l.sprintf)(Object(l.__)("%s× %s","woocommerce-admin"),e,t)).join(", ")},{display:Object(d.formatValue)(n(),"number",_),value:_},{display:this.renderList(C.length?[C[0]]:[],C),value:C.map(e=>e.label).join(", ")},{display:a(i,t),value:i}];var x})}getSummary(e){const{orders_count:t=0,total_customers:o=0,products:r=0,num_items_sold:c=0,coupons_count:a=0,net_revenue:n=0}=e,{formatAmount:m,getCurrencyConfig:i}=this.context,s=i();return[{label:Object(l._n)("order","orders",t,"woocommerce-admin"),value:Object(d.formatValue)(s,"number",t)},{label:Object(l._n)(" customer"," customers",o,"woocommerce-admin"),value:Object(d.formatValue)(s,"number",o)},{label:Object(l._n)("product","products",r,"woocommerce-admin"),value:Object(d.formatValue)(s,"number",r)},{label:Object(l._n)("item sold","items sold",c,"woocommerce-admin"),value:Object(d.formatValue)(s,"number",c)},{label:Object(l._n)("coupon","coupons",a,"woocommerce-admin"),value:Object(d.formatValue)(s,"number",a)},{label:Object(l.__)("net sales","woocommerce-admin"),value:m(n)}]}renderLinks(e=[]){return e.map((e,t)=>Object(r.createElement)(s.Link,{href:e.href,key:t,type:"wc-admin"},e.label))}renderList(e,t){return Object(r.createElement)(r.Fragment,null,this.renderLinks(e),t.length>1&&Object(r.createElement)(s.ViewMoreList,{items:this.renderLinks(t)}))}render(){const{query:e,filters:t,advancedFilters:o}=this.props;return Object(r.createElement)(p.a,{endpoint:"orders",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["orders_count","total_customers","products","num_items_sold","coupons_count","net_revenue"],query:e,tableQuery:{extended_info:!0},title:Object(l.__)("Orders","woocommerce-admin"),columnPrefsKey:"orders_report_columns",filters:t,advancedFilters:o})}}j.contextType=O.a;var w=j,f=o(503),y=o(507),v=o(501);class h extends r.Component{render(){const{path:e,query:t}=this.props;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(v.a,{query:t,path:e,filters:n.c,advancedFilters:n.a,report:"orders"}),Object(r.createElement)(y.a,{charts:n.b,endpoint:"orders",query:t,selectedChart:Object(m.a)(t.chart,n.b),filters:n.c,advancedFilters:n.a}),Object(r.createElement)(f.a,{charts:n.b,endpoint:"orders",path:e,query:t,selectedChart:Object(m.a)(t.chart,n.b),filters:n.c,advancedFilters:n.a}),Object(r.createElement)(w,{query:t,filters:n.c,advancedFilters:n.a}))}}h.propTypes={path:a.a.string.isRequired,query:a.a.object.isRequired}},498:function(e,t,o){"use strict";o.d(t,"e",(function(){return d})),o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return b})),o.d(t,"c",(function(){return _})),o.d(t,"d",(function(){return p})),o.d(t,"f",(function(){return O})),o.d(t,"h",(function(){return j})),o.d(t,"g",(function(){return w}));var r=o(14),c=o(17),a=o.n(c),n=o(3),m=o(12),l=o(11),i=o(15),s=o(499);function d(e,t=n.identity){return function(o="",c){const n="function"==typeof e?e(c):e,l=Object(m.getIdsFromQuery)(o);if(l.length<1)return Promise.resolve([]);const i={include:l.join(","),per_page:l.length};return a()({path:Object(r.addQueryArgs)(n,i)}).then(e=>e.map(t))}}d(l.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=d(l.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),b=d(l.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),_=d(l.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),p=d(l.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),O=d(l.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(s.a)(e)}));function j({attributes:e,name:t}){const o=Object(i.f)("variationTitleAttributesSeparator"," - ");if(t.indexOf(o)>-1)return t;const r=e.map(({option:e})=>e).join(", ");return r?t+o+r:t}const w=d(({products:e})=>e?l.NAMESPACE+`/products/${e}/variations`:l.NAMESPACE+"/variations",e=>({key:e.id,label:j(e)}))},499:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o(2);function c(e){return[e.country,e.state,e.name||Object(r.__)("TAX","woocommerce-admin"),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},529:function(e,t,o){"use strict";o.d(t,"b",(function(){return m})),o.d(t,"c",(function(){return l})),o.d(t,"a",(function(){return i}));var r=o(2),c=o(30),a=o(15),n=o(498);const m=Object(c.applyFilters)("woocommerce_admin_orders_report_charts",[{key:"orders_count",label:Object(r.__)("Orders","woocommerce-admin"),type:"number"},{key:"net_revenue",label:Object(r.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_total",type:"currency"},{key:"avg_order_value",label:Object(r.__)("Average Order Value","woocommerce-admin"),type:"currency"},{key:"avg_items_per_order",label:Object(r.__)("Average Items Per Order","woocommerce-admin"),order:"desc",orderby:"num_items_sold",type:"average"}]),l=Object(c.applyFilters)("woocommerce_admin_orders_report_filters",[{label:Object(r.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:Object(r.__)("All Orders","woocommerce-admin"),value:"all"},{label:Object(r.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),i=Object(c.applyFilters)("woocommerce_admin_orders_report_advanced_filters",{title:Object(r._x)("Orders Match {{select /}} Filters","A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin"),filters:{status:{labels:{add:Object(r.__)("Order Status","woocommerce-admin"),remove:Object(r.__)("Remove order status filter","woocommerce-admin"),rule:Object(r.__)("Select an order status filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Order Status{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select an order status","woocommerce-admin")},rules:[{value:"is",label:Object(r._x)("Is","order status","woocommerce-admin")},{value:"is_not",label:Object(r._x)("Is Not","order status","woocommerce-admin")}],input:{component:"SelectControl",options:Object.keys(a.c).map(e=>({value:e,label:a.c[e]}))}},product:{labels:{add:Object(r.__)("Products","woocommerce-admin"),placeholder:Object(r.__)("Search products","woocommerce-admin"),remove:Object(r.__)("Remove products filter","woocommerce-admin"),rule:Object(r.__)("Select a product filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select products","woocommerce-admin")},rules:[{value:"includes",label:Object(r._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(r._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"products",getLabels:n.d}},variation:{labels:{add:Object(r.__)("Variations","woocommerce-admin"),placeholder:Object(r.__)("Search variations","woocommerce-admin"),remove:Object(r.__)("Remove variations filter","woocommerce-admin"),rule:Object(r.__)("Select a variation filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Variation{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select variation","woocommerce-admin")},rules:[{value:"includes",label:Object(r._x)("Includes","variations","woocommerce-admin")},{value:"excludes",label:Object(r._x)("Excludes","variations","woocommerce-admin")}],input:{component:"Search",type:"variations",getLabels:n.g}},coupon:{labels:{add:Object(r.__)("Coupon Codes","woocommerce-admin"),placeholder:Object(r.__)("Search coupons","woocommerce-admin"),remove:Object(r.__)("Remove coupon filter","woocommerce-admin"),rule:Object(r.__)("Select a coupon filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select coupon codes","woocommerce-admin")},rules:[{value:"includes",label:Object(r._x)("Includes","coupon code","woocommerce-admin")},{value:"excludes",label:Object(r._x)("Excludes","coupon code","woocommerce-admin")}],input:{component:"Search",type:"coupons",getLabels:n.b}},customer_type:{labels:{add:Object(r.__)("Customer Type","woocommerce-admin"),remove:Object(r.__)("Remove customer filter","woocommerce-admin"),rule:Object(r.__)("Select a customer filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Customer is{{/title}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select a customer type","woocommerce-admin")},input:{component:"SelectControl",options:[{value:"new",label:Object(r.__)("New","woocommerce-admin")},{value:"returning",label:Object(r.__)("Returning","woocommerce-admin")}],defaultOption:"new"}},refunds:{labels:{add:Object(r.__)("Refunds","woocommerce-admin"),remove:Object(r.__)("Remove refunds filter","woocommerce-admin"),rule:Object(r.__)("Select a refund filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Refunds{{/title}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select a refund type","woocommerce-admin")},input:{component:"SelectControl",options:[{value:"all",label:Object(r.__)("All","woocommerce-admin")},{value:"partial",label:Object(r.__)("Partially refunded","woocommerce-admin")},{value:"full",label:Object(r.__)("Fully refunded","woocommerce-admin")},{value:"none",label:Object(r.__)("None","woocommerce-admin")}],defaultOption:"all"}},tax_rate:{labels:{add:Object(r.__)("Tax Rates","woocommerce-admin"),placeholder:Object(r.__)("Search tax rates","woocommerce-admin"),remove:Object(r.__)("Remove tax rate filter","woocommerce-admin"),rule:Object(r.__)("Select a tax rate filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select tax rates","woocommerce-admin")},rules:[{value:"includes",label:Object(r._x)("Includes","tax rate","woocommerce-admin")},{value:"excludes",label:Object(r._x)("Excludes","tax rate","woocommerce-admin")}],input:{component:"Search",type:"taxes",getLabels:n.f}},attribute:{allowMultiple:!0,labels:{add:Object(r.__)("Attribute","woocommerce-admin"),placeholder:Object(r.__)("Search attributes","woocommerce-admin"),remove:Object(r.__)("Remove attribute filter","woocommerce-admin"),rule:Object(r.__)("Select a product attribute filter match","woocommerce-admin"),title:Object(r.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(r.__)("Select attributes","woocommerce-admin")},rules:[{value:"is",label:Object(r._x)("Is","product attribute","woocommerce-admin")},{value:"is_not",label:Object(r._x)("Is Not","product attribute","woocommerce-admin")}],input:{component:"ProductAttribute"}}}})},576:function(e,t,o){}}]);