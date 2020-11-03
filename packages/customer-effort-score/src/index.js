/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import {
	Button,
	Modal,
	RadioControl,
	__experimentalText as Text,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
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
 * @param {Function} props.toggleVisible Callback to toggle the visible prop.
 * @param {string}   props.label         The label displayed in the modal.
 */
function CustomerEffortScore( {
	trackCallback,
	visible,
	toggleVisible,
	label,
} ) {
	const [ score, setScore ] = useState( 0 );
	const [ isOpen, setOpen ] = useState( visible );
	const closeModal = () => {
		setOpen( false );
		toggleVisible( false );
	};
	const sendScore = () => {
		closeModal();
		trackCallback( score );
	};

	if ( ! isOpen ) {
		return null;
	}

	return (
		<Modal
			className="woocommerce-customer-effort-score"
			title={ __( 'Please share your feedback', 'woocommerce-admin' ) }
			onRequestClose={ closeModal }
		>
			<Text variant="subtitle.small" as="p">
				{ label }
			</Text>

			<RadioControl
				selected={ score }
				options={ [
					{
						label: __( 'Very difficult', 'woocommerce-admin' ),
						value: '1',
					},
					{
						label: __( 'Somewhat difficult', 'woocommerce-admin' ),
						value: '2',
					},
					{
						label: __( 'Neutral', 'woocommerce-admin' ),
						value: '3',
					},
					{
						label: __( 'Somewhat easy', 'woocommerce-admin' ),
						value: '4',
					},
					{
						label: __( 'Very easy', 'woocommerce-admin' ),
						value: '5',
					},
				] }
				onChange={ ( value ) => {
					setScore( value );
				} }
			/>

			<div className="woocommerce-customer-effort-score__buttons">
				<Button isTertiary onClick={ closeModal }>
					{ __( 'Cancel', 'woocommerce-admin' ) }
				</Button>
				<Button isPrimary onClick={ sendScore }>
					{ __( 'Send', 'woocommerce-admin' ) }
				</Button>
			</div>
		</Modal>
	);
}

CustomerEffortScore.propTypes = {
	/**
	 * The function to call when the modal is actioned.
	 */
	trackCallback: PropTypes.func.isRequired,
	/**
	 * Whether or not the dialog is visible. True is used for when this is
	 * loaded on page load (in client/index.js). False is used if the modal is
	 * loaded as part of the layout and displayed programmatically.
	 */
	visible: PropTypes.bool.isRequired,
	/**
	 * Callback to toggle the visible prop.
	 */
	toggleVisible: PropTypes.func.isRequired,
	/**
	 * The label displayed in the modal.
	 */
	label: PropTypes.string.isRequired,
};

export default CustomerEffortScore;
