/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */

/**
 * Use `CustomerEffortScore` to gather a customer effort score.
 *
 * NOTE: This should live in @woocommerce/customer-effort-score to allow
 * reuse.
 *
 * @param {Object}   props               Component props.
 * @param {Function} props.trackCallback Function to call when the modal is activated.
 * @param {boolean}  props.visible       Whether or not the tracks modal is visible.
 * @param {string}   props.label         The label displayed in the modal.
 */
function CustomerEffortScore( { trackCallback, visible, label } ) {
	const [ score, setScore ] = useState( 0 );
	const [ dismissed, setDismissed ] = useState( false );

	if ( ! visible || dismissed ) {
		return null;
	}

	function close() {
		setScore( 3 ); // TODO let this happen in the UI

		setDismissed( true );
		trackCallback( score );
	}

	return (
		<p className="customer-effort-score_modal">
			{ label } <button onClick={ close }>Click me</button>
		</p>
	);
}

CustomerEffortScore.propTypes = {
	/**
	 * The function to call when the modal is actioned.
	 */
	trackCallback: PropTypes.func.isRequired,
	/**
	 * Whether or not the survey is visible. True is used for when
	 * this is loaded on page load (in client/index.js). False is used if the
	 * survey is loaded as part of the layout and displayed
	 * programmatically.
	 */
	visible: PropTypes.bool.isRequired,
	/**
	 * The label displayed in the survey.
	 */
	label: PropTypes.string.isRequired,
};

export default CustomerEffortScore;
