/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import CustomerEffortScoreTracks from './customer-effort-score-tracks';

let cesSurveyForAnalyticsShown = false;
export function showCesSurveyForAnalytics() {
	if ( cesSurveyForAnalyticsShown ) {
		return;
	}
	cesSurveyForAnalyticsShown = true;

	const appRoot = document.getElementById( 'root' );
	const embeddedRoot = document.getElementById( 'woocommerce-embedded-root' );
	const root = appRoot || embeddedRoot;

	render(
		<CustomerEffortScoreTracks
			action={ 'woocommerce_admin_analytics_filtered' }
			label={ __(
				'How easy was it to filter your store analytics?',
				'woocommerce-admin'
			) }
			onSubmitLabel={ __(
				'Thank you for your feedback!',
				'woocommerce-admin'
			) }
		/>,
		root.insertBefore( document.createElement( 'div' ), null )
	);
}
