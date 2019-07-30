/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * WooCommerce dependencies
 */
import { Card, Stepper } from '@woocommerce/components';

export default class Shipping extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			step: 'store_location',
		};
	}

	render() {
		const { step } = this.state;

		return (
			<Fragment>
				<Card>
					<Stepper
						direction="vertical"
						currentStep={ step }
						steps={ [
							{
								label: __( 'Set store location', 'woocommerce-admin' ),
								key: 'store_location',
							},
							{
								label: __( 'Set shipping costs', 'woocommerce-admin' ),
								key: 'rates',
							},
						] }
					/>
				</Card>
			</Fragment>
		);
	}
}
