(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[55],{541:function(e,t,o){"use strict";var s=o(0),i=o(2),n=o(14),c=o(8),a=o(20),r=o(4),m=o(22),l=o(12),u=o(123);class d extends s.Component{constructor(e){super(e),this.state={isLoadingScripts:!1,isRequestStarted:!1}}async componentDidUpdate(e,t){const{hasErrors:o,isRequesting:s,onClose:n,onContinue:c,createNotice:a}=this.props,{isLoadingScripts:r,isRequestStarted:m}=this.state;if(!m)return;const l=!s&&!r&&(e.isRequesting||t.isLoadingScripts)&&!o,u=!s&&e.isRequesting&&o;l&&(n(),c()),u&&(a("error",Object(i.__)("There was a problem updating your preferences","woocommerce-admin")),n())}updateTracking(e){let{allowTracking:t}=e;const{updateOptions:o}=this.props;t&&"function"==typeof window.wcTracks.enable?(this.setState({isLoadingScripts:!0}),window.wcTracks.enable(()=>{this._isMounted&&(Object(u.initializeExPlat)(),this.setState({isLoadingScripts:!1}))})):t||(window.wcTracks.isEnabled=!1);const s=t?"yes":"no";this.setState({isRequestStarted:!0}),o({woocommerce_allow_tracking:s})}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}render(){const{allowTracking:e,isResolving:t,onClose:o,onContinue:n}=this.props;if(t)return null;if(e)return o(),n(),null;const{isRequesting:c,title:l=Object(i.__)("Build a better WooCommerce","woocommerce-admin"),message:u=Object(a.a)({mixedString:Object(i.__)("Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} that shows us how WooCommerce is used. No personal data is tracked or stored.","woocommerce-admin"),components:{link:Object(s.createElement)(m.Link,{href:"https://woocommerce.com/usage-tracking?utm_medium=product",target:"_blank",type:"external"})}}),dismissActionText:d=Object(i.__)("No thanks","woocommerce-admin"),acceptActionText:p=Object(i.__)("Yes, count me in!","woocommerce-admin")}=this.props,{isRequestStarted:g}=this.state,w=g&&c;return Object(s.createElement)(r.Modal,{title:l,isDismissible:this.props.isDismissible,onRequestClose:()=>this.props.onClose(),className:"woocommerce-usage-modal"},Object(s.createElement)("div",{className:"woocommerce-usage-modal__wrapper"},Object(s.createElement)("div",{className:"woocommerce-usage-modal__message"},u),Object(s.createElement)("div",{className:"woocommerce-usage-modal__actions"},Object(s.createElement)(r.Button,{isSecondary:!0,isBusy:w,onClick:()=>this.updateTracking({allowTracking:!1})},d),Object(s.createElement)(r.Button,{isPrimary:!0,isBusy:w,onClick:()=>this.updateTracking({allowTracking:!0})},p))))}}t.a=Object(n.compose)(Object(c.withSelect)(e=>{const{getOption:t,getOptionsUpdatingError:o,isOptionsUpdating:s,hasFinishedResolution:i}=e(l.OPTIONS_STORE_NAME);return{allowTracking:"yes"===t("woocommerce_allow_tracking"),isRequesting:Boolean(s()),isResolving:!i("getOption",["woocommerce_allow_tracking"])||void 0===t("woocommerce_allow_tracking"),hasErrors:Boolean(o())}}),Object(c.withDispatch)(e=>{const{createNotice:t}=e("core/notices"),{updateOptions:o}=e(l.OPTIONS_STORE_NAME);return{createNotice:t,updateOptions:o}}))(d)},548:function(e,t,o){"use strict";o.r(t),o.d(t,"UsageModal",(function(){return m}));var s=o(0),i=o(2),n=o(13),c=o(20),a=o(22),r=o(541);const m=()=>{const e="1"===Object(n.getQuery)()["wcpay-connection-success"],[t,o]=Object(s.useState)(e);if(!t)return null;const m=()=>{o(!1),Object(n.updateQueryString)({"wcpay-connection-success":void 0})},l=Object(i.__)("Help us build a better WooCommerce Payments experience","woocommerce-admin"),u=Object(c.a)({mixedString:Object(i.__)("By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.","woocommerce-admin"),components:{link:Object(s.createElement)(a.Link,{href:"https://woocommerce.com/usage-tracking?utm_medium=product",target:"_blank",type:"external"})}});return Object(s.createElement)(r.a,{isDismissible:!1,title:l,message:u,acceptActionText:Object(i.__)("I agree","woocommerce-admin"),dismissActionText:Object(i.__)("No thanks","woocommerce-admin"),onContinue:m,onClose:m})};t.default=m}}]);