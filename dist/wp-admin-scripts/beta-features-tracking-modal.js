this.wc=this.wc||{},this.wc.betaFeaturesTrackingModal=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=474)}({0:function(e,t){e.exports=window.wp.element},11:function(e,t){e.exports=window.wc.data},123:function(e,t){e.exports=window.wc.explat},13:function(e,t){e.exports=window.wp.compose},16:function(e,t){e.exports=window.wc.tracks},2:function(e,t){e.exports=window.wp.i18n},3:function(e,t){e.exports=window.wp.components},462:function(e,t,n){},474:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),c=n(3),a=n(7),i=n(13),u=n(11),s=n(16),d=n(123);const l=Object(i.compose)(Object(a.withDispatch)(e=>{const{updateOptions:t}=e(u.OPTIONS_STORE_NAME);return{updateOptions:t}}))(({updateOptions:e})=>{const[t,n]=Object(o.useState)(!1),[a,i]=Object(o.useState)(!1),u=Object(o.useRef)(document.querySelector("#woocommerce_navigation_enabled")),l=async t=>("function"==typeof window.wcTracks.enable&&(t?window.wcTracks.enable(()=>{Object(d.initializeExPlat)()}):window.wcTracks.isEnabled=!1),t&&Object(s.recordEvent)("settings_features_tracking_enabled"),e({woocommerce_allow_tracking:t?"yes":"no"}));return Object(o.useEffect)(()=>{if(!u.current)return;const e=e=>{e.target.checked&&(e.target.checked=!1,n(!0))},t=u.current;return t.addEventListener("change",e,!1),()=>t.removeEventListener("change",e)},[]),u.current&&t?Object(o.createElement)(c.Modal,{title:Object(r.__)("Build a Better WooCommerce","woocommerce-admin"),onRequestClose:()=>n(!1),className:"woocommerce-beta-features-tracking-modal"},Object(o.createElement)("p",null,Object(r.__)("Testing new features requires sharing non-sensitive data via ","woocommerce-admin"),Object(o.createElement)("a",{href:"https://woocommerce.com/usage-tracking?utm_medium=product"},Object(r.__)("usage tracking","woocommerce-admin")),Object(r.__)(". Gathering usage data allows us to make WooCommerce better — your store will be considered as we evaluate new features, judge the quality of an update, or determine if an improvement makes sense. No personal data is tracked or stored and you can opt-out at any time.","woocommerce-admin")),Object(o.createElement)("div",{className:"woocommerce-beta-features-tracking-modal__checkbox"},Object(o.createElement)(c.CheckboxControl,{label:"Enable usage tracking",onChange:i,checked:a})),Object(o.createElement)("div",{className:"woocommerce-beta-features-tracking-modal__actions"},Object(o.createElement)(c.Button,{isPrimary:!0,onClick:async()=>{a?(await l(!0),u.current.checked=!0):await l(!1),n(!1)}},Object(r.__)("Save","woocommerce-admin")))):null});n(462);const m=document.createElement("div");m.setAttribute("id","beta-features-tracking"),Object(o.render)(Object(o.createElement)(l,null),document.body.appendChild(m))},7:function(e,t){e.exports=window.wp.data}});