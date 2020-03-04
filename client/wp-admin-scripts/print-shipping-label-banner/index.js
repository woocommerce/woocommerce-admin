import { render, Component } from '@wordpress/element';
import { Card } from '@wordpress/components';

const metaBox = document.getElementById( 'wc-admin-shipping-banner-root' );

class ShippingBanner extends Component {
	render() {
		return (
			<div>
				<Card
					title="Store Performance"
					description="Key performance metrics"
				>
					<p>Your stuff in a Card.</p>
				</Card>
			</div>
		);
	}
}

// Render the header.
render( <ShippingBanner />, metaBox );
