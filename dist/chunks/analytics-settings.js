(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[17],{43:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},590:function(e,t,a){},591:function(e,t,a){},592:function(e,t,a){},653:function(e,t,a){"use strict";a.r(t);var o=a(13),r=a.n(o),s=a(0),c=a(2),i=a(4),n=a(15),m=a(7),l=a(23),d=a(11),p=a(18),u=(a(590),a(300)),b=a(43),h=a.n(b),_=a(1),g=a.n(_),O=a(3);a(591);class j extends s.Component{constructor(e){super(e),h()(this,"renderInput",()=>{const{handleChange:e,name:t,inputText:a,inputType:o,options:c,value:n,component:m}=this.props,{disabled:l}=this.state;switch(o){case"checkboxGroup":return c.map(e=>e.options.length>0&&Object(s.createElement)("div",{className:"woocommerce-setting__options-group",key:e.key,"aria-labelledby":t+"-label"},e.label&&Object(s.createElement)("span",{className:"woocommerce-setting__options-group-label"},e.label),this.renderCheckboxOptions(e.options)));case"checkbox":return this.renderCheckboxOptions(c);case"button":return Object(s.createElement)(i.Button,{isSecondary:!0,onClick:this.handleInputCallback,disabled:l},a);case"component":const o=m;return Object(s.createElement)(o,r()({value:n,onChange:e},this.props));case"text":default:const d=Object(O.uniqueId)(t);return Object(s.createElement)("input",{id:d,type:"text",name:t,onChange:e,value:n,placeholder:a,disabled:l})}}),h()(this,"handleInputCallback",()=>{const{createNotice:e,callback:t}=this.props;if("function"==typeof t)return new Promise((a,o)=>{this.setState({disabled:!0}),t(a,o,e)}).then(()=>{this.setState({disabled:!1})}).catch(()=>{this.setState({disabled:!1})})}),this.state={disabled:!1}}renderCheckboxOptions(e){const{handleChange:t,name:a,value:o}=this.props,{disabled:r}=this.state;return e.map(e=>Object(s.createElement)(i.CheckboxControl,{key:a+"-"+e.value,label:e.label,name:a,checked:o&&o.includes(e.value),onChange:o=>t({target:{checked:o,name:a,type:"checkbox",value:e.value}}),disabled:r}))}render(){const{helpText:e,label:t,name:a}=this.props;return Object(s.createElement)("div",{className:"woocommerce-setting"},Object(s.createElement)("div",{className:"woocommerce-setting__label",id:a+"-label"},t),Object(s.createElement)("div",{className:"woocommerce-setting__input"},this.renderInput(),e&&Object(s.createElement)("span",{className:"woocommerce-setting__help"},e)))}}j.propTypes={callback:g.a.func,handleChange:g.a.func.isRequired,helpText:g.a.oneOfType([g.a.string,g.a.array]),inputText:g.a.string,inputType:g.a.oneOf(["button","checkbox","checkboxGroup","text","component"]),label:g.a.string.isRequired,name:g.a.string.isRequired,options:g.a.arrayOf(g.a.shape({value:g.a.string,label:g.a.string,description:g.a.string,key:g.a.string,options:g.a.array})),value:g.a.oneOfType([g.a.string,g.a.array])};var w=Object(n.compose)(Object(m.withDispatch)(e=>{const{createNotice:t}=e("core/notices");return{createNotice:t}}))(j),v=a(9),I=a.n(v);const S=(e,t,a)=>{const o={};if(a&&(o.skip_existing=!0),"all"!==t.label)if("custom"===t.label){const a=I()().diff(I()(t.date,e),"days",!0);o.days=Math.floor(a)}else o.days=parseInt(t.label,10);return o};var E=a(16);var k=Object(n.compose)([Object(m.withSelect)(e=>{const{getFormSettings:t}=e(d.IMPORT_STORE_NAME),{period:a,skipPrevious:o}=t();return{selectedPeriod:a,skipChecked:o}}),Object(m.withDispatch)(e=>{const{updateImportation:t,setImportStarted:a}=e(d.IMPORT_STORE_NAME),{createNotice:o}=e("core/notices");return{createNotice:o,setImportStarted:a,updateImportation:t}})])((function({clearStatusAndTotalsCache:e,createNotice:t,dateFormat:a,importDate:o,onImportStarted:r,selectedPeriod:n,stopImport:m,skipChecked:l,status:d,setImportStarted:u,updateImportation:b}){const h=()=>{const e=Object(E.addQueryArgs)("/wc-analytics/reports/import",S(a,n,l)),t=Object(c.__)("There was a problem rebuilding your report data.","woocommerce-admin");g(e,t,!0),r()},_=()=>{m();const e=Object(c.__)("There was a problem stopping your current import.","woocommerce-admin");g("/wc-analytics/reports/import/cancel",e)},g=(e,a,o=!1)=>{b(e,o).then(e=>{"success"===e.status?t("success",e.message):(t("error",a),u(!1),m())}).catch(e=>{e&&e.message&&(t("error",e.message),u(!1),m())})},O=()=>{const e=Object(c.__)("There was a problem deleting your previous data.","woocommerce-admin");g("/wc-analytics/reports/import/delete",e),Object(p.recordEvent)("analytics_import_delete_previous"),u(!1)},j=()=>{u(!1),e()};return Object(s.createElement)("div",{className:"woocommerce-settings__actions woocommerce-settings-historical-data__actions"},(()=>{const e="ready"!==d;return["initializing","customers","orders","finalizing"].includes(d)?Object(s.createElement)(s.Fragment,null,Object(s.createElement)(i.Button,{className:"woocommerce-settings-historical-data__action-button",isPrimary:!0,onClick:_},Object(c.__)("Stop Import","woocommerce-admin")),Object(s.createElement)("div",{className:"woocommerce-setting__help woocommerce-settings-historical-data__action-help"},Object(c.__)("Imported data will not be lost if the import is stopped.","woocommerce-admin"),Object(s.createElement)("br",null),Object(c.__)("Navigating away from this page will not affect the import.","woocommerce-admin"))):["ready","nothing"].includes(d)?o?Object(s.createElement)(s.Fragment,null,Object(s.createElement)(i.Button,{isPrimary:!0,onClick:h,disabled:e},Object(c.__)("Start","woocommerce-admin")),Object(s.createElement)(i.Button,{isSecondary:!0,onClick:O},Object(c.__)("Delete Previously Imported Data","woocommerce-admin"))):Object(s.createElement)(s.Fragment,null,Object(s.createElement)(i.Button,{isPrimary:!0,onClick:h,disabled:e},Object(c.__)("Start","woocommerce-admin"))):("error"===d&&t("error",Object(c.__)("Something went wrong with the importation process.","woocommerce-admin")),Object(s.createElement)(s.Fragment,null,Object(s.createElement)(i.Button,{isSecondary:!0,onClick:j},Object(c.__)("Re-import Data","woocommerce-admin")),Object(s.createElement)(i.Button,{isSecondary:!0,onClick:O},Object(c.__)("Delete Previously Imported Data","woocommerce-admin"))))})())})),y=a(21);var f=Object(m.withDispatch)(e=>{const{setImportPeriod:t}=e(d.IMPORT_STORE_NAME);return{setImportPeriod:t}})((function({dateFormat:e,disabled:t,setImportPeriod:a,value:o}){const r=t=>{t.date&&t.date.isValid?a(t.date.format(e),!0):a(t.text,!0)},n=t=>t.isValid()&&o.date.length===e.length?t.isAfter(new Date,"day")?y.dateValidationMessages.future:null:y.dateValidationMessages.invalid;return Object(s.createElement)("div",{className:"woocommerce-settings-historical-data__columns"},Object(s.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(s.createElement)(i.SelectControl,{label:Object(c.__)("Import Historical Data","woocommerce-admin"),value:o.label,disabled:t,onChange:e=>{a(e)},options:[{label:"All",value:"all"},{label:"Last 365 days",value:"365"},{label:"Last 90 days",value:"90"},{label:"Last 30 days",value:"30"},{label:"Last 7 days",value:"7"},{label:"Last 24 hours",value:"1"},{label:"Custom",value:"custom"}]})),"custom"===o.label&&(()=>{const a=I()(o.date,e);return Object(s.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(s.createElement)("div",{className:"woocommerce-settings-historical-data__column-label"},Object(c.__)("Beginning on","woocommerce-admin")),Object(s.createElement)(l.DatePicker,{date:a.isValid()?a.toDate():null,dateFormat:e,disabled:t,error:n(a),isInvalidDate:e=>I()(e).isAfter(new Date,"day"),onUpdate:r,text:o.date}))})())}));var C=function({label:e,progress:t,total:a}){const o=Object(c.sprintf)(Object(c.__)("Imported %(label)s","woocommerce-admin"),{label:e}),r=Object(O.isNil)(a)?null:Object(c.sprintf)(Object(c.__)("%(progress)s of %(total)s","woocommerce-admin"),{progress:t||0,total:a});return Object(s.createElement)("div",{className:"woocommerce-settings-historical-data__progress"},Object(s.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},o),r&&Object(s.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},r),Object(s.createElement)("progress",{className:"woocommerce-settings-historical-data__progress-bar",max:a,value:t||0}))},N=a(34);var T=function({importDate:e,status:t}){const a=Object(N.applyFilters)("woocommerce_admin_import_status",{nothing:Object(c.__)("Nothing To Import","woocommerce-admin"),ready:Object(c.__)("Ready To Import","woocommerce-admin"),initializing:[Object(c.__)("Initializing","woocommerce-admin"),Object(s.createElement)(i.Spinner,{key:"spinner"})],customers:[Object(c.__)("Importing Customers","woocommerce-admin"),Object(s.createElement)(i.Spinner,{key:"spinner"})],orders:[Object(c.__)("Importing Orders","woocommerce-admin"),Object(s.createElement)(i.Spinner,{key:"spinner"})],finalizing:[Object(c.__)("Finalizing","woocommerce-admin"),Object(s.createElement)(i.Spinner,{key:"spinner"})],finished:-1===e?Object(c.__)("All historical data imported","woocommerce-admin"):Object(c.sprintf)(Object(c.__)("Historical data from %s onward imported","woocommerce-admin"),I()(e).format("YYYY-MM-DD"))});return Object(s.createElement)("span",{className:"woocommerce-settings-historical-data__status"},Object(c.__)("Status:","woocommerce-admin")+" ",a[t])};var P=Object(m.withDispatch)(e=>{const{setSkipPrevious:t}=e(d.IMPORT_STORE_NAME);return{setSkipPrevious:t}})((function({checked:e,disabled:t,setSkipPrevious:a}){return Object(s.createElement)(i.CheckboxControl,{className:"woocommerce-settings-historical-data__skip-checkbox",checked:e,disabled:t,label:Object(c.__)("Skip previously imported customers and orders","woocommerce-admin"),onChange:e=>{a(e)}})}));a(592);class A extends s.Component{render(){const{customersProgress:e,customersTotal:t,dateFormat:a,importDate:o,inProgress:r,lastImportStartTimestamp:i,clearStatusAndTotalsCache:n,ordersProgress:m,ordersTotal:d,onImportStarted:p,period:u,stopImport:b,skipChecked:h,status:_}=this.props;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(l.SectionHeader,{title:Object(c.__)("Import Historical Data","woocommerce-admin")}),Object(s.createElement)("div",{className:"woocommerce-settings__wrapper"},Object(s.createElement)("div",{className:"woocommerce-setting"},Object(s.createElement)("div",{className:"woocommerce-setting__input"},Object(s.createElement)("span",{className:"woocommerce-setting__help"},Object(c.__)("This tool populates historical analytics data by processing customers and orders created prior to activating WooCommerce Admin.","woocommerce-admin")),"finished"!==_&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)(f,{dateFormat:a,disabled:r,value:u}),Object(s.createElement)(P,{disabled:r,checked:h}),Object(s.createElement)(C,{label:Object(c.__)("Registered Customers","woocommerce-admin"),progress:e,total:t}),Object(s.createElement)(C,{label:Object(c.__)("Orders and Refunds","woocommerce-admin"),progress:m,total:d})),Object(s.createElement)(T,{importDate:o,status:_})))),Object(s.createElement)(k,{clearStatusAndTotalsCache:n,dateFormat:a,importDate:o,lastImportStartTimestamp:i,onImportStarted:p,stopImport:b,status:_}))}}var D=Object(m.withSelect)((e,t)=>{const{getImportError:a,getImportStatus:o,getImportTotals:r}=e(d.IMPORT_STORE_NAME),{activeImport:s,cacheNeedsClearing:c,dateFormat:i,inProgress:n,onImportStarted:m,onImportFinished:l,period:p,startStatusCheckInterval:u,skipChecked:b}=t,h=S(i,p,b),{customers:_,orders:g,lastImportStartTimestamp:j}=r(h),{customers:w,imported_from:v,is_importing:I,orders:E}=o(j),{imported:k,total:y}=w||{},{imported:f,total:C}=E||{},N=Boolean(a(j)||a(h));Boolean(!j&&!n&&!0===I)&&m();const T=Boolean(n&&!c&&!1===I&&(y>0||C>0)&&k===y&&f===C);let P={customersTotal:_,isError:N,ordersTotal:g};s&&(P={cacheNeedsClearing:c,customersProgress:k,customersTotal:Object(O.isNil)(y)?_:y,inProgress:n,isError:N,ordersProgress:f,ordersTotal:Object(O.isNil)(C)?g:C});const A=(({cacheNeedsClearing:e,customersProgress:t,customersTotal:a,isError:o,inProgress:r,ordersProgress:s,ordersTotal:c})=>o?"error":r?Object(O.isNil)(t)||Object(O.isNil)(s)||Object(O.isNil)(a)||Object(O.isNil)(c)||e?"initializing":t<a?"customers":s<c?"orders":"finalizing":a>0||c>0?t===a&&s===c?"finished":"ready":"nothing")(P);return"initializing"===A&&u(),T&&l(),{...P,importDate:v,status:A}})(A);class x extends s.Component{constructor(){super(...arguments),this.dateFormat=Object(c.__)("MM/DD/YYYY","woocommerce-admin"),this.intervalId=-1,this.lastImportStopTimestamp=0,this.cacheNeedsClearing=!0,this.onImportFinished=this.onImportFinished.bind(this),this.onImportStarted=this.onImportStarted.bind(this),this.clearStatusAndTotalsCache=this.clearStatusAndTotalsCache.bind(this),this.stopImport=this.stopImport.bind(this),this.startStatusCheckInterval=this.startStatusCheckInterval.bind(this),this.cancelStatusCheckInterval=this.cancelStatusCheckInterval.bind(this)}startStatusCheckInterval(){this.intervalId<0&&(this.cacheNeedsClearing=!0,this.intervalId=setInterval(()=>{this.clearCache("getImportStatus")},3*d.SECOND))}cancelStatusCheckInterval(){clearInterval(this.intervalId),this.intervalId=-1}clearCache(e,t){const{invalidateResolution:a,lastImportStartTimestamp:o}=this.props;a(e,["getImportStatus"===e?o:t]).then(()=>{this.cacheNeedsClearing=!1})}stopImport(){this.cancelStatusCheckInterval(),this.lastImportStopTimestamp=Date.now()}onImportFinished(){const{debouncedSpeak:e}=this.props;this.cacheNeedsClearing||(e("Import complete"),this.stopImport())}onImportStarted(){const{notes:e,setImportStarted:t,updateNote:a}=this.props,o=e.find(e=>"wc-admin-historical-data"===e.name);o&&a(o.id,{status:"actioned"}),t(!0)}clearStatusAndTotalsCache(){const{selectedPeriod:e,skipChecked:t}=this.props,a=S(this.dateFormat,e,t);this.clearCache("getImportTotals",a),this.clearCache("getImportStatus")}isImportationInProgress(){const{lastImportStartTimestamp:e}=this.props;return void 0!==e&&void 0===this.lastImportStopTimestamp||e>this.lastImportStopTimestamp}render(){const{activeImport:e,createNotice:t,lastImportStartTimestamp:a,selectedPeriod:o,skipChecked:r}=this.props;return Object(s.createElement)(D,{activeImport:e,cacheNeedsClearing:this.cacheNeedsClearing,createNotice:t,dateFormat:this.dateFormat,inProgress:this.isImportationInProgress(),onImportFinished:this.onImportFinished,onImportStarted:this.onImportStarted,lastImportStartTimestamp:a,clearStatusAndTotalsCache:this.clearStatusAndTotalsCache,period:o,skipChecked:r,startStatusCheckInterval:this.startStatusCheckInterval,stopImport:this.stopImport})}}var R=Object(n.compose)([Object(m.withSelect)(e=>{const{getNotes:t}=e(d.NOTES_STORE_NAME),{getImportStarted:a,getFormSettings:o}=e(d.IMPORT_STORE_NAME),r=t({page:1,per_page:d.QUERY_DEFAULTS.pageSize,type:"update",status:"unactioned"}),{activeImport:s,lastImportStartTimestamp:c}=a(),{period:i,skipPrevious:n}=o();return{activeImport:s,lastImportStartTimestamp:c,notes:r,selectedPeriod:i,skipChecked:n}}),Object(m.withDispatch)(e=>{const{updateNote:t}=e(d.NOTES_STORE_NAME),{invalidateResolution:a,setImportStarted:o}=e(d.IMPORT_STORE_NAME);return{invalidateResolution:a,setImportStarted:o,updateNote:t}}),i.withSpokenMessages])(x);t.default=Object(n.compose)(Object(m.withDispatch)(e=>{const{createNotice:t}=e("core/notices");return{createNotice:t}}))(({createNotice:e,query:t})=>{const{settingsError:a,isRequesting:o,isDirty:n,persistSettings:m,updateAndPersistSettings:b,updateSettings:h,wcAdminSettings:_}=Object(d.useSettings)("wc_admin",["wcAdminSettings"]),g=Object(s.useRef)(!1);Object(s.useEffect)(()=>{function e(e){if(n)return e.returnValue=Object(c.__)("You have unsaved changes. If you proceed, they will be lost.","woocommerce-admin"),e.returnValue}return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)},[n]),Object(s.useEffect)(()=>{o?g.current=!0:!o&&g.current&&(a?e("error",Object(c.__)("There was an error saving your settings. Please try again.","woocommerce-admin")):e("success",Object(c.__)("Your settings have been successfully saved.","woocommerce-admin")),g.current=!1)},[o,a,e]);const O=e=>{const{checked:t,name:a,type:o,value:r}=e.target,s={..._};s[a]="checkbox"===o?t?[...s[a],r]:s[a].filter(e=>e!==r):r,h("wcAdminSettings",s)};return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(l.SectionHeader,{title:Object(c.__)("Analytics Settings","woocommerce-admin")}),Object(s.createElement)("div",{className:"woocommerce-settings__wrapper"},Object.keys(u.b).map(e=>Object(s.createElement)(w,r()({handleChange:O,value:_[e],key:e,name:e},u.b[e]))),Object(s.createElement)("div",{className:"woocommerce-settings__actions"},Object(s.createElement)(i.Button,{isSecondary:!0,onClick:()=>{if(window.confirm(Object(c.__)("Are you sure you want to reset all settings to default values?","woocommerce-admin"))){const e=Object.keys(u.b).reduce((e,t)=>(e[t]=u.b[t].defaultValue,e),{});b("wcAdminSettings",e),Object(p.recordEvent)("analytics_settings_reset_defaults")}}},Object(c.__)("Reset Defaults","woocommerce-admin")),Object(s.createElement)(i.Button,{isPrimary:!0,isBusy:o,onClick:()=>{m(),Object(p.recordEvent)("analytics_settings_save",_),t.period=void 0,t.compare=void 0,t.before=void 0,t.after=void 0,t.interval=void 0,t.type=void 0,window.wpNavMenuUrlUpdate(t)}},Object(c.__)("Save Settings","woocommerce-admin")))),"true"===t.import?Object(s.createElement)(l.ScrollTo,{offset:"-56"},Object(s.createElement)(R,{createNotice:e})):Object(s.createElement)(R,{createNotice:e}))})}}]);