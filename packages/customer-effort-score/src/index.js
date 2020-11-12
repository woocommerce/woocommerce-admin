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
 * @param {Function} props.trackCallback Function to call when the results should be tracked.
 * @param {string}   props.label         The label displayed in the modal.
 * @param {Function} props.createNotice  Create a notice (snackbar).
 * @param {Function} props.openedCallback Function to call when the modal is opened.
 */
function CustomerEffortScore( {
	trackCallback,
	label,
	createNotice,
	openedCallback,
} ) {
	const [ score, setScore ] = useState( 0 );
	const [ comments, setComments ] = useState();
	const [ shouldCreateNotice, setShouldCreateNotice ] = useState( true );
	const [ visible, setVisible ] = useState( false );

	const closeModal = () => {
		setVisible( false );
	};
	const sendScore = () => {
		closeModal();
		trackCallback( score );
	};

	if ( shouldCreateNotice ) {
		createNotice( 'success', label, {
			actions: [
				{
					label: __( 'Give feedback', 'woocommerce-admin' ),
					onClick: () => {
						setVisible( true );
						openedCallback();
					},
				},
			],
		} );

		setShouldCreateNotice( false );

		return null;
	}

	if ( ! visible ) {
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
			{ ( score === '1' || score === '5' ) && (
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
	 * The label displayed in the modal.
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Create a notice (snackbar).
	 */
	createNotice: PropTypes.func,
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			createNotice,
		};
	} )
)( CustomerEffortScore );
