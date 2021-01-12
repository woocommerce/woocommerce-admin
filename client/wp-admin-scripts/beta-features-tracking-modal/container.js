/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Modal, CheckboxControl } from '@wordpress/components';

export const BetaFeaturesTrackingContainer = () => {
	const [ isModalOpen, setIsModalOpen ] = useState( true );
	const [ isChecked, setIsChecked ] = useState( false );

	if ( ! isModalOpen ) {
		return null;
	}

	return (
		<Modal
			title={ __( 'Build a Better WooCommerce', 'woocommerce-admin' ) }
			onRequestClose={ () => setIsModalOpen( false ) }
			className="woocommerce-beta-features-tracking-modal"
		>
			<p>
				{ __(
					'Testing new features requires sharing non-sensitive data via ',
					'woocommerce-admin'
				) }
				<a href="https://woocommerce.com/usage-tracking">
					{ __( 'usage tracking', 'woocommerce-admin' ) }
				</a>
				{ __(
					'. Gathering usage data allows us to make WooCommerce better — your store will be considered as we evaluate new features, judge the quality of an update, or determine if an improvement makes sense. No personal data is tracked or stored and you can opt-out at any time.',
					'woocommerce-admin'
				) }
			</p>
			<div className="woocommerce-beta-features-tracking-modal__checkbox">
				<CheckboxControl
					label="Enable usage tracking"
					onChange={ setIsChecked }
					checked={ isChecked }
				/>
			</div>
			<div className="woocommerce-beta-features-tracking-modal__actions">
				<Button
					isPrimary
					onClick={ () => this.setState( { isModalOpen: false } ) }
				>
					{ __( 'Save', 'woocommerce-admin' ) }
				</Button>
			</div>
		</Modal>
	);
};
