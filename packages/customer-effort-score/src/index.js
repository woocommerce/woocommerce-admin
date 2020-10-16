/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

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
 * @param {string}   props.label         The label displayed in the modal.
 * @param {Function} props.createNotice     Create a notice (snackbar)
 */
function CustomerEffortScore( { trackCallback, label, createNotice } ) {
	const [ showModal, setShowModal ] = useState( false );
	const [ score, setScore ] = useState( 0 );
	const [ shouldCreateNotice, setShouldCreateNotice ] = useState( true );

	if ( shouldCreateNotice ) {
		createNotice( 'success', label, {
			actions: [
				{
					label: __( 'Give feedback', 'woocommerce-admin' ),
					onClick: () => setShowModal( true ),
				},
			],
		} );

		setShouldCreateNotice( false );

		return null;
	}

	if ( ! showModal ) {
		return null;
	}

	function close() {
		setScore( 3 ); // TODO let this happen in the UI
		setShowModal( false );
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
	 * The label displayed in the modal.
	 */
	label: PropTypes.string.isRequired,
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
		};
	} )
)( CustomerEffortScore );
