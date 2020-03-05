/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { render, Component } from '@wordpress/element';
import { ExternalLink, Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';
const metaBox = document.getElementById( 'wc-admin-shipping-banner-root' );

class ShippingBanner extends Component {
	render() {
		return (
			<div>
				<h3>
					{ __(
						'Fulfill 4 items with WooCommerce Shipping',
						'woocommerce-admin'
					) }
				</h3>
				<p>
					{ __(
						'Print discounted shipping labels with a click. This will install WooCommerce Services.'
					) }{ ' ' }
					<ExternalLink href="woocommerce.com">
						Learn More
					</ExternalLink>
				</p>
				<Button isPrimary>{ __( 'Create shipping label' ) }</Button>
			</div>
		);
	}
}

// Render the header.
render( <ShippingBanner />, metaBox );
