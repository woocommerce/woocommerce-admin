/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';

export default class ProfileWizardHeader extends Component {
	render() {
		return (
			<div className="woocommerce-profile-wizard__header">
				<img src={ wcSettings.wcAdminAssetUrl + '/woo-jetpack.png' } alt="WooCommerce + Jetpack" />
			</div>
		);
	}
}
