/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { addAction } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import CustomerEffortScoreTracks from './customer-effort-score-tracks';

const SHOWN_FOR_ACTIONS_OPTION_NAME = 'woocommerce_ces_shown_for_actions';
const ACTION_NAME = 'woocommerce_admin_analytics_filtered';

/**
 * Listens for ACTION_NAME event from the client/analytics/components/report-filters/index.js
 * and renders CustomerEffortScoreTracks conditionally.
 *
 * @param {Object}   props	Component props.
 */
function CustomerEffortScoreTracksContainerAnalytics( props ) {
	const { shownActions } = props;
	// Save the result of hasShown() so that the subsequent
	// woocommerce.admin.analytics.filtered actions do not trigger the survey again
	// on the same page
	let hasShown = false;

	// We don't want to render CustomerEffortScoreTracks for the first page load
	const [ showComponent, setShowComponent ] = useState( false );

	if ( shownActions.indexOf( ACTION_NAME ) !== -1 ) {
		hasShown = true;
	}

	const onAnalyticFilterChanged = () => {
		if ( hasShown === true ) {
			return;
		}

		setShowComponent( true );
		hasShown = true;
	};

	// Listen for the events
	[
		'woocommerce_admin_analytics_date_range_query_executed',
		'woocommerce_admin_analytics_filter_query_executed',
	].forEach( ( event ) => {
		addAction( event, 'woocommerce_admin', onAnalyticFilterChanged );
	} );

	return (
		showComponent && (
			<CustomerEffortScoreTracks
				action={ ACTION_NAME }
				label={ __(
					'How easy was it to filter your store analytics?',
					'woocommerce-admin'
				) }
				onSubmitLabel={ __(
					'Thank you for your feedback!',
					'woocommerce-admin'
				) }
			/>
		)
	);
}

CustomerEffortScoreTracksContainerAnalytics.propTypes = {
	/**
	 * Function to get WordPress options.
	 */
	getOption: PropTypes.func,
};

export default compose(
	withSelect( ( select ) => {
		const { getOption } = select( OPTIONS_STORE_NAME );
		return {
			shownActions: getOption( SHOWN_FOR_ACTIONS_OPTION_NAME ) || [],
		};
	} )
)( CustomerEffortScoreTracksContainerAnalytics );
