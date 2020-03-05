/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Button, Modal } from '@wordpress/components';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import '../style.scss';

export default class DismissModal extends Component {
	setDismissed = ( timestamp ) => {
		dispatch( 'wc-api' ).updateOptions( {
			woocommerce_shipping_dismissed_timestamp: timestamp,
		} );
	};

	remindMeLaterClicked = () => {
		const { onCloseAll } = this.props;
		this.setDismissed( Date.now() );
		// TODO: tracking
		onCloseAll();
	};

	closeForeverClicked = () => {
		const { onCloseAll } = this.props;
		this.setDismissed( -1 );
		// TODO: tracking
		onCloseAll();
	};

	render() {
		const { onClose, visible } = this.props;

		if ( ! visible ) {
			return null;
		}

		return (
			<Modal title="Are you sure?" onRequestClose={ onClose }>
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
