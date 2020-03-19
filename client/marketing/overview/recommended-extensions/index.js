/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * WooCommerce dependencies
 */
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss'

class RecommendedExtensions extends Component {
	render() {
		return (
			<Card
				title={ __( 'Recommended extensions', 'woocommerce-admin' ) }
				description={ __( 'Great marketing requires the right tools. Take your marketing to the next level with our recommended marketing extensions.', 'woocommerce-admin' ) }
			/>
		)
	}
}

export default RecommendedExtensions;
