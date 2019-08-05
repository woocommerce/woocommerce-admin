/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { filter } from 'lodash';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, Form, Stepper } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import {
	StoreAddress,
	validateStoreAddress,
} from '../../components/settings/general/store-address';
import withSelect from 'wc-api/with-select';

class Shipping extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			step: 'store_location',
		};

		this.onStoreLocationSubmit = this.onStoreLocationSubmit.bind( this );
	}

	async onStoreLocationSubmit( values ) {
		const { createNotice, isSettingsError, updateSettings } = this.props;

		await updateSettings( {
			general: {
				woocommerce_store_address: values.addressLine1,
				woocommerce_store_address_2: values.addressLine2,
				woocommerce_default_country: values.countryState,
				woocommerce_store_city: values.city,
				woocommerce_store_postcode: values.postCode,
			},
		} );

		if ( ! isSettingsError ) {
			this.setState( { step: 'rates' } );
		} else {
			createNotice(
				'error',
				__( 'There was a problem saving your store location.', 'woocommerce-admin' )
			);
		}
	}

	getStoreLocationContent() {
		const { isSettingsRequesting, settings } = this.props;

		if ( isSettingsRequesting ) {
			return;
		}

		const {
			woocommerce_store_address,
			woocommerce_store_address_2,
			woocommerce_store_city,
			woocommerce_default_country,
			woocommerce_store_postcode,
		} = settings;

		const initialValues = {
			addressLine1: woocommerce_store_address || '',
			addressLine2: woocommerce_store_address_2 || '',
			city: woocommerce_store_city || '',
			countryState: woocommerce_default_country || '',
			postCode: woocommerce_store_postcode || '',
		};

		return (
			<Form
				initialValues={ initialValues }
				onSubmitCallback={ this.onStoreLocationSubmit }
				validate={ validateStoreAddress }
			>
				{ ( { getInputProps, handleSubmit } ) => (
					<Fragment>
						<StoreAddress getInputProps={ getInputProps } />
						<Button isPrimary onClick={ handleSubmit }>
							{ __( 'Proceed', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				) }
			</Form>
		);
	}

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
		const { isSettingsRequesting } = this.props;

		return (
			<Fragment>
				<Card>
					<Stepper
						isPending={ isSettingsRequesting }
						isVertical={ true }
						currentStep={ step }
						steps={ this.getSteps() }
					/>
				</Card>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getSettings, getSettingsError, isGetSettingsRequesting } = select( 'wc-api' );

		const settings = getSettings( 'general' );
		const isSettingsError = Boolean( getSettingsError( 'general' ) );
		const isSettingsRequesting = isGetSettingsRequesting( 'general' );

		return { isSettingsError, isSettingsRequesting, settings };
	} ),
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateSettings } = dispatch( 'wc-api' );

		return {
			createNotice,
			updateSettings,
		};
	} )
)( Shipping );
