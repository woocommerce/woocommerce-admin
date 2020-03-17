/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

class InstalledExtensions extends Component {
	render() {
		return (
			<Card
				title={ __( 'Installed marketing extensions', 'woocommerce-admin' ) }
			/>
		)
	}
}

export default InstalledExtensions;
