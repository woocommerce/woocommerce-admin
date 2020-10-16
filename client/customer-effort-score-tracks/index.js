/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import PropTypes from 'prop-types';
import { recordEvent } from '@woocommerce/tracks';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import CustomerEffortScore from '@woocommerce/customer-effort-score';

/**
 * A CustomerEffortScore wrapper that uses tracks to track the selected
 * customer effort score.
 *
 * @param {Object}   props                  Component props.
 * @param {boolean}  props.initiallyVisible Whether or not the tracks modal is initially visible.
 * @param {string}   props.trackName        The name sent to Tracks.
 * @param {Object}   props.trackProps       Additional props sent to Tracks.
 * @param {string}   props.label            The label displayed in the modal.
 * @param {Function} props.createNotice     Create a notice (snackbar)
 */
function CustomerEffortScoreTracks( {
	initiallyVisible,
	trackName,
	trackProps,
	label,
	createNotice,
} ) {
	const [ showModal, setShowModal ] = useState( false );
	const [ visible, setVisible ] = useState( initiallyVisible );

	const trackCallback = ( score ) => {
		recordEvent( trackName, {
			score,
			...trackProps,
		} );
	};

	if ( ! showModal ) {
		createNotice( 'success', label, {
			actions: [
				{
					label: __( 'Give feedback', 'woocommerce-admin' ),
					onClick: () => setShowModal( true ),
				},
			],
		} );

		return null;
	}

	if ( ! initiallyVisible ) {
		return null;
	}

	return (
		<CustomerEffortScore
			trackCallback={ trackCallback }
			visible={ visible }
			toggleVisible={ () => setVisible( ! visible ) }
			label={ label }
		/>
	);
}

CustomerEffortScoreTracks.propTypes = {
	/**
	 * Whether or not the tracks is initially visible. True is used for when
	 * this is loaded on page load (in client/index.js). False is used if the
	 * tracks modal is loaded as part of the layout and displayed
	 * programmatically.
	 */
	initiallyVisible: PropTypes.bool,
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

export default compose(
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
		};
	} )
)( CustomerEffortScoreTracks );
