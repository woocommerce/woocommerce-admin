/**
 * External dependencies
 */
import { useState } from '@wordpress/element';
import PropTypes from 'prop-types';
import {
	Button,
	Modal,
	RadioControl,
	__experimentalText as Text,
	TextareaControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Use `CustomerEffortScore` to gather a customer effort score.
 *
 * NOTE: This should live in @woocommerce/customer-effort-score to allow
 * reuse.
 *
 * @param {Object}   props                Component props.
 * @param {Function} props.trackCallback  Function to call when the results should be tracked.
 * @param {string}   props.label          The label displayed in the modal.
 * @param {Function} props.createNotice   Create a notice (snackbar).
 * @param {Function} props.openedCallback Function to call when the modal is opened.
 * @param {Object}   props.icon           Icon (React component) to be shown on the notice.
 */
function Survey( { trackCallback, label } ) {
	const options = [
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
	];

	const [ score, setScore ] = useState();
	const [ comments, setComments ] = useState();
	const [ isOpen, setOpen ] = useState( true );

	const closeModal = () => setOpen( false );

	const sendScore = () => {
		setOpen( false );
		trackCallback( score, comments );
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

			<div className="woocommerce-customer-effort-score__selection">
				<RadioControl
					selected={ score }
					options={ options }
					onChange={ ( value ) => setScore( value ) }
				/>
			</div>

			{ ( score === '1' || score === '2' ) && (
				<div className="woocommerce-customer-effort-score__comments">
					<TextareaControl
						label="Comments (Optional)"
						help="Your feedback will go to the WooCommerce development team"
						value={ comments }
						onChange={ ( value ) => setComments( value ) }
						rows="5"
					/>
				</div>
			) }

			<div className="woocommerce-customer-effort-score__buttons">
				<Button isTertiary onClick={ closeModal } name="cancel">
					{ __( 'Cancel', 'woocommerce-admin' ) }
				</Button>
				<Button isPrimary onClick={ sendScore } name="send">
					{ __( 'Send', 'woocommerce-admin' ) }
				</Button>
			</div>
		</Modal>
	);
}

Survey.propTypes = {
	/**
	 * The function to call when the modal is actioned.
	 */
	trackCallback: PropTypes.func.isRequired,
	/**
	 * The label displayed in the modal.
	 */
	label: PropTypes.string.isRequired,
};

export default Survey;
