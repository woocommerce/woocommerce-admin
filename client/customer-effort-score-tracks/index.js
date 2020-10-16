/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { recordEvent } from '@woocommerce/tracks';
import CustomerEffortScore from '@woocommerce/customer-effort-score';

/**
 * A CustomerEffortScore wrapper that uses tracks to track the selected
 * customer effort score.
 *
 * @param {Object}   props                  Component props.
 * @param {string}   props.trackName        The name sent to Tracks.
 * @param {Object}   props.trackProps       Additional props sent to Tracks.
 * @param {string}   props.label            The label displayed in the modal.
 */
function CustomerEffortScoreTracks( { trackName, trackProps, label } ) {
	const trackCallback = ( score ) => {
		recordEvent( trackName, {
			score,
			...trackProps,
		} );
	};

	return (
		<CustomerEffortScore trackCallback={ trackCallback } label={ label } />
	);
}

CustomerEffortScoreTracks.propTypes = {
	/**
	 * The name sent to Tracks.
	 */
	trackName: PropTypes.string.isRequired,
	/**
	 * Additional props sent to Tracks.
	 */
	trackProps: PropTypes.object,
	/**
	 * The label displayed in the modal.
	 */
	label: PropTypes.string.isRequired,
};

export default CustomerEffortScoreTracks;
