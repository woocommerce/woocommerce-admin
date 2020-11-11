/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import CustomerEffortScoreTracks from './customer-effort-score-tracks';

const SHOWN_FOR_ACTIONS_OPTION_NAME = 'woocommerce_ces_shown_for_actions';
const ACTION_NAME = 'woocommerce.admin.analytics.filtered';

/**
 * Listens for ACTION_NAME event from the client/analytics/components/report-filters/index.js
 * and renders CustomerEffortScoreTracks conditionally.
 
 * @param {Object}   props           Component props.
 * @param {Function} props.getOption Function to get WordPress options.
 */
function CustomerEffortScoreTracksContainerAnalytics( { getOption } ) {
	// Save the result of hasShown() so that the subsequent
	// woocommerce.admin.analytics.filtered actions do not trigger the survey again
	// on the same page
	let hasShownResultCache = false;

	// We don't want to render CustomerEffortScoreTracks for the first page load
	const [ showComponent, setShowComponent ] = useState( false );

	const hasShown = () => {
		const shownActions = getOption( SHOWN_FOR_ACTIONS_OPTION_NAME ) || [];
		if ( shownActions.indexOf( ACTION_NAME ) !== -1 ) {
			return true;
		}

		return false;
	};

	const onAnalyticFilterChanged = () => {
		if ( hasShownResultCache === true ) {
			return;
		}

		if ( hasShown( ACTION_NAME ) === false ) {
			setShowComponent( true );
			hasShownResultCache = true;
		}
	};

	// Listen for the action
	wp.hooks.addAction(
		ACTION_NAME,
		'woocommerce.admin',
		onAnalyticFilterChanged
	);

	function getComponent() {
		return (
			<CustomerEffortScoreTracks
				key={ 999 }
				action={ ACTION_NAME }
				label={ __(
					'How easy was it to filter your store analytics?',
					'woocommerce-admin'
				) }
				onSubmitLabel={ __(
					'Thank you for your feedback!',
					'woocommerce-admin'
				) }
				trackProps={ {} }
			/>
		);
	}

	return showComponent ? getComponent() : null;
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
		return { getOption };
	} )
)( CustomerEffortScoreTracksContainerAnalytics );
