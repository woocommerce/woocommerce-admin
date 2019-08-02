/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { filter } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Card, Form, Stepper } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import StoreAddress from 'dashboard/components/settings/general/store-address';

export default class Shipping extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			step: 'store_location',
			fields: {},
		};
	}

	getStoreLocationContent() {}

	getSteps() {
		const steps = [
			{
				key: 'store_location',
				label: __( 'Set store location', 'woocommerce-admin' ),
				description: __( 'The address from which your business operates', 'woocommerce-admin' ),
				isPending: true,
				content: this.getStoreLocationContent(),
				visible: true,
			},
			{
				key: 'rates',
				label: __( 'Set shipping costs', 'woocommerce-admin' ),
				description: __(
					'Define how much customers pay to ship to different destinations',
					'woocommerce-admin'
				),
				visible: true,
			},
			{
				key: 'label_printing',
				label: __( 'Enable shipping label printing', 'woocommerce-admin' ),
				description: __(
					'With WooCommerce Services and Jetpack you can save time at the' +
						'Post Office by printing your shipping labels at home.',
					'woocommerce-admin'
				),
				content: (
					<Fragment>
						<Button isPrimary>{ __( 'Install & enable', 'woocommerce-admin' ) }</Button>
						<Button>{ __( 'No thanks', 'woocommerce-admin' ) }</Button>
					</Fragment>
				),
				visible: true,
			},
		];

		return filter( steps, step => step.visible );
	}

	render() {
		const { step } = this.state;
		const validationSchema = {
			addressLine1: {
				required: true,
			},
		};

		return (
			<Fragment>
				<Card>
					<Form
						validationSchema={ validationSchema }
						onSubmitCallback={ () => console.log( 'submitted' ) }
					>
						{ ( { getInputProps, values, errors, touched, handleChange, handleSubmit } ) => (
							<StoreAddress />
						) }
					</Form>;
					<Stepper isVertical={ true } currentStep={ step } steps={ this.getSteps() } />
				</Card>
			</Fragment>
		);
	}
}
