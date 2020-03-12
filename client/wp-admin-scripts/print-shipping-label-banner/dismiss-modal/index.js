/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Button, Modal } from '@wordpress/components';

/**
 * Internal dependencies
 */
import '../style.scss';

export default class DismissModal extends Component {
	remindMeLaterClicked = () => {
		const { onCloseAll } = this.props;
		onCloseAll();
		// TODO: Maybe set counter for when to show again, or just show on next page load.

		// TODO: tracking
	};

	closeForeverClicked = () => {
		const { onCloseAll } = this.props;
		// TODO: Persist something so the banner never appears again.
		onCloseAll();
	};

	render() {
		const { onClose, visible } = this.props;

		if ( ! visible ) {
			return null;
		}

		return (
			<Modal title="Are you sure?" onRequestClose={ onClose } className="wc-admin-shipping-banner__dismiss-modal">
				<p className="wc-admin-shipping-banner__dismiss-modal-help-text">
					{ __(
						'With WooCommerce Services you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.',
						'woocommerce-admin'
					) }
				</p>
				<div className="wc-admin-shipping-banner__dismiss-modal-actions">
					<Button isDefault onClick={ this.remindMeLaterClicked }>
						{ __( 'Remind me later', 'woocommerce-admin' ) }
					</Button>
					<Button isPrimary onClick={ this.closeForeverClicked }>
						{ __( "I don't need this", 'woocommerce-admin' ) }
					</Button>
				</div>
			</Modal>
		);
	}
}
