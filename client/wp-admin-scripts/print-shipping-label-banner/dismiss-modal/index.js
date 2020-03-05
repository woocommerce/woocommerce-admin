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
	render() {
		return (
			<Modal
				title="Are you sure?"
				onRequestClose={ this.dismissModalCloseButtonClicked }
			>
				<p>
					{ __(
						'With WooCommerce Services you can Print shipping labels from your WooCommerce dashboard at the lowest USPS rates.',
						'woocommerce-admin'
					) }
				</p>
				<Button onClick={ this.remindMeLaterClicked }>
					{ __( 'Remind me later', 'woocommerce-admin' ) }
				</Button>
				<Button isPrimary onClick={ this.closeForeverClicked }>
					{ __( "I don't need this", 'woocommerce-admin' ) }
				</Button>
			</Modal>
		);
	}
}
