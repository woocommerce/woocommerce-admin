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
 * Provides a modal requesting customer feedback.
 *
 * A label is displayed in the modal asking the customer to score the
 * difficulty completing a task. A group of radio buttons, styled with
 * emoji facial expressions, are used to provide a score between 1 and 5.
 *
 * A low score triggers a comments field to appear.
 *
 * Upon completion, the score and comments is sent to a callback function.
 *
 * @param {Object} props                       Component props.
 * @param {Function} props.recordScoreCallback Function to call when the results are sent.
 * @param {string} props.label                 Question to ask the customer.
 */
function CustomerFeedbackModal( { recordScoreCallback, label } ) {
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
	const [ errorMessage, setErrorMessage ] = useState();
	const [ isOpen, setOpen ] = useState( true );

	const closeModal = () => setOpen( false );

	const sendScore = () => {
		const scoreAsInt = parseInt( score, 10 );
		if ( isNaN( scoreAsInt ) ) {
			setErrorMessage(
				__(
					'Please provide feedback by selecting an option above.',
					'woocommerce-admin'
				)
			);
			return;
		}
		setOpen( false );
		recordScoreCallback( scoreAsInt, comments );
	};

	if ( ! isOpen ) {
		return null;
	}

	return (
		<Modal
			className="woocommerce-customer-effort-score"
			title={ __( 'Please share your feedback', 'woocommerce-admin' ) }
			onRequestClose={ closeModal }
			shouldCloseOnClickOutside={ false }
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

			{ errorMessage && (
				<div
					className="woocommerce-customer-effort-score__errors"
					role="alert"
				>
					<Text variant="body" as="p">
						{ errorMessage }
					</Text>
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

CustomerFeedbackModal.propTypes = {
	recordScoreCallback: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
};

export default CustomerFeedbackModal;
