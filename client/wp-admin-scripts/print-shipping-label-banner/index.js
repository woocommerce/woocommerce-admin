/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import ShippingBanner from './shipping-banner';

const metaBox = document.getElementById( 'wc-admin-shipping-banner-root' );

// Render the header.
render( <ShippingBanner />, metaBox );
