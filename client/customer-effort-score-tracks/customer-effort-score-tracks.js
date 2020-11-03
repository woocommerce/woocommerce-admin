/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import PropTypes from 'prop-types';
import { recordEvent } from '@woocommerce/tracks';
import CustomerEffortScore from '@woocommerce/customer-effort-score';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { OPTIONS_STORE_NAME, MONTH } from '@woocommerce/data';

const SHOWN_FOR_ACTIONS_OPTION_NAME = 'woocommerce_ces_shown_for_actions';
const ADMIN_INSTALL_TIMESTAMP_OPTION_NAME =
	'woocommerce_admin_install_timestamp';

/**
 * A CustomerEffortScore wrapper that uses tracks to track the selected
 * customer effort score.
 *
 * @param {Object}   props                    Component props.
 * @param {string}   props.action             The action name sent to Tracks.
 * @param {Object}   props.trackProps         Additional props sent to Tracks.
 * @param {string}   props.label              The label displayed in the modal.
 * @param {Array}    props.cesShownForActions The array of actions that the CES modal has been shown for.
 * @param {boolean}  props.resolving          Are values still being resolving.
 * @param {number}   props.storeAge           The age of the store in months.
 * @param {Function} props.updateOptions      Function to update options.
 */
function CustomerEffortScoreTracks( {
	action,
	trackProps,
	label,
	cesShownForActions,
	resolving,
	storeAge,
	updateOptions,
} ) {
	const [ shown, setShown ] = useState( false );

	if ( resolving ) {
		return null;
	}

	if ( cesShownForActions.indexOf( action ) !== -1 && ! shown ) {
		return null;
	}

	const openedCallback = () => {
		// Use the `shown` state value to only update the shown_for_actions
		// option once.
		if ( shown ) {
			return;
		}

		setShown( true );
		updateOptions( {
			[ SHOWN_FOR_ACTIONS_OPTION_NAME ]: [
				action,
				...cesShownForActions,
			],
		} );
	};

	const trackCallback = ( score ) => {
		recordEvent( 'ces_feedback', {
			action,
			score,
			store_age: storeAge,
			...trackProps,
		} );
	};

	return (
		<CustomerEffortScore
			trackCallback={ trackCallback }
			label={ label }
			openedCallback={ openedCallback }
		/>
	);
}

CustomerEffortScoreTracks.propTypes = {
	/**
	 * The action name sent to Tracks.
	 */
	action: PropTypes.string.isRequired,
	/**
	 * Additional props sent to Tracks.
	 */
	trackProps: PropTypes.object,
	/**
	 * The label displayed in the modal.
	 */
	label: PropTypes.string.isRequired,
	/**
	 * The array of actions that the CES modal has been shown for.
	 */
	cesShownForActions: PropTypes.arrayOf( PropTypes.string ).isRequired,
	/**
	 * Whether props are still being resolved.
	 */
	resolving: PropTypes.bool.isRequired,
	/**
	 * The age of the store in months.
	 */
	storeAge: PropTypes.number,
};

export default compose(
	withSelect( ( select ) => {
		const { getOption, isResolving } = select( OPTIONS_STORE_NAME );

		const cesShownForActions =
			getOption( SHOWN_FOR_ACTIONS_OPTION_NAME ) || [];

		const adminInstallTimestamp =
			getOption( ADMIN_INSTALL_TIMESTAMP_OPTION_NAME ) || 0;
		// Date.now() is ms since Unix epoch, adminInstallTimestamp is in
		// seconds since Unix epoch.
		const storeAgeInMs = Date.now() - adminInstallTimestamp * 1000;
		const storeAge = Math.round( storeAgeInMs / MONTH );

		const resolving =
			isResolving( 'getOption', [ SHOWN_FOR_ACTIONS_OPTION_NAME ] ) ||
			isResolving( 'getOption', [ ADMIN_INSTALL_TIMESTAMP_OPTION_NAME ] );

		return {
			cesShownForActions,
			storeAge,
			resolving,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updateOptions } = dispatch( OPTIONS_STORE_NAME );

		return {
			updateOptions,
		};
	} )
)( CustomerEffortScoreTracks );
