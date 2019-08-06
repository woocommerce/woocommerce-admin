/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { filter } from 'lodash';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, Stepper } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import StoreLocation from './location';
import ShippingRates from './rates';
import withSelect from 'wc-api/with-select';

class Shipping extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			shippingZones: [],
			step: 'store_location',
		};

		this.completeStep = this.completeStep.bind( this );
	}

	async componentDidMount() {
		const shippingZones = await apiFetch( { path: '/wc/v3/shipping/zones' } );
		/* eslint-disable react/no-did-mount-set-state */
		this.setState( { shippingZones } );
		/* eslint-enable react/no-did-mount-set-state */
	}

	componentDidUpdate() {
		const { settings } = this.props;
		const {
			woocommerce_store_address,
			woocommerce_default_country,
			woocommerce_store_postcode,
		} = settings;
		const { shippingZones, step } = this.state;

		if (
			'store_location' === step &&
			woocommerce_store_address &&
			woocommerce_default_country &&
			woocommerce_store_postcode
		) {
			this.completeStep();
		} else if ( 'rates' === step && shippingZones.length > 1 ) {
			this.completeStep();
		}
	}

	completeStep() {
		const { step } = this.state;
		const steps = this.getSteps();
		const currentStepIndex = steps.findIndex( s => s.key === step );
		const nextStep = steps[ currentStepIndex + 1 ];

		if ( nextStep ) {
			this.setState( { step: nextStep.key } );
		} else {
			// @todo Complete the shipping task and redirect to dashboard.
		}
	}

	getSteps() {
		const { countryCode } = this.props;

		const steps = [
			{
				key: 'store_location',
				label: __( 'Set store location', 'woocommerce-admin' ),
				description: __( 'The address from which your business operates', 'woocommerce-admin' ),
				isPending: true,
				content: <StoreLocation completeStep={ this.completeStep } { ...this.props } />,
				visible: true,
			},
			{
				key: 'rates',
				label: __( 'Set shipping costs', 'woocommerce-admin' ),
				description: __(
					'Define how much customers pay to ship to different destinations',
					'woocommerce-admin'
				),
				content: <ShippingRates completeStep={ this.completeStep } { ...this.props } />,
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
				visible: [ 'US', 'GB', 'CA', 'AU' ].includes( countryCode ),
			},
		];

		return filter( steps, step => step.visible );
	}

	render() {
		const { shippingZones, step } = this.state;
		const { isSettingsRequesting } = this.props;

		return (
			<Fragment>
				<Card>
					<Stepper
						isPending={ ! shippingZones.length || isSettingsRequesting }
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

		const countryCode = settings.woocommerce_default_country
			? settings.woocommerce_default_country.split( ':' )[ 0 ]
			: null;
		const countries = ( wcSettings.dataEndpoints && wcSettings.dataEndpoints.countries ) || [];
		const country = countryCode ? countries.find( c => c.code === countryCode ) : null;
		const countryName = country ? country.name : null;

		return { countryCode, countryName, isSettingsError, isSettingsRequesting, settings };
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
