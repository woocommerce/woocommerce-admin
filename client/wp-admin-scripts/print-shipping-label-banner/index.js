/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { render, Component } from '@wordpress/element';
import { ExternalLink, Button, Modal } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';
const metaBox = document.getElementById( 'wc-admin-shipping-banner-root' );

class ShippingBanner extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showShippingBanner: true, // TODO: update to get state when closedForever is clicked
			isDismissModalOpen: false,
		};
	}

	closeDismissModal = () => this.setState( { isDismissModalOpen: false } );

	openDismissModal = () => {
		this.setState( { isDismissModalOpen: true } );
		// TODO: tracking
	};

	remindMeLaterClicked = () => {
		this.closeDismissModal();
		this.setState( { showShippingBanner: false } );
		// TODO: Maybe set counter for when to show again, or just show on next page load.

		// TODO: tracking
	};

	createShippingLabelClicked = () => {
		// TODO: install and activate WCS
		// TODO: open WCS modal
		// TODO: Tracking
	};

	closeForeverClicked = () => {
		this.closeDismissModal();
		this.setState( { showShippingBanner: false } );
		// TODO: Persist something so the banner never appears again.
	};

	dismissModalCloseButtonClicked = () => {
		this.closeDismissModal();
		// TODO: tracking
	};

	renderDismissModal = () => {
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
	};

	render() {
		const { isDismissModalOpen, showShippingBanner } = this.state;

		if ( ! showShippingBanner ) {
			return null;
		}

		return (
			<div>
				<h3>
					{ __(
						'Fulfill X items with WooCommerce Shipping',
						'woocommerce-admin'
					) }
				</h3>
				<p>
					{ __(
						'Print discounted shipping labels with a click. This will install WooCommerce Services.'
					) }
					<ExternalLink href="woocommerce.com">
						Learn More
					</ExternalLink>
				</p>
				<Button isPrimary onClick={ this.createShippingLabelClicked }>
					{ __( 'Create shipping label' ) }
				</Button>
				<button
					onClick={ this.openDismissModal }
					type="button"
					className="notice-dismiss"
				>
					<span className="screen-reader-text">
						{ __(
							'Close Print Label Banner.',
							'woocommerce-admin'
						) }
					</span>
				</button>
				{ isDismissModalOpen && this.renderDismissModal() }
			</div>
		);
	}
}

// Render the header.
render( <ShippingBanner />, metaBox );
