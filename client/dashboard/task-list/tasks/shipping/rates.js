/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button, TextControl } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { FormToggle } from '@wordpress/components';

/**
 * WooCommerce dependencies
 */
import { Flag, H } from '@woocommerce/components';
import { getCurrencyFormatString } from '@woocommerce/currency';

export default class ShippingRates extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			defaultRate: 0.0,
			restOfTheWorldRate: 0.0,
			restOfTheWorldEnabled: false,
		};

		this.onSubmit = this.onSubmit.bind( this );
	}

	async onSubmit() {
		const { defaultRate, restOfTheWorldEnabled, restOfTheWorldRate } = this.state;

		const zone = await apiFetch( {
			method: 'POST',
			path: '/wc/v3/shipping/zones',
			data: { name: this.getCountryName() },
		} );
		apiFetch( {
			method: 'POST',
			path: `/wc/v3/shipping/zones/${ zone.id }`,
			data: {
				type: 'country',
				code: this.getCountryCode(),
			},
		} );
		apiFetch( {
			method: 'POST',
			path: `/wc/v3/shipping/zones/${ zone.id }/methods`,
			data: {
				method_id: 'flat_rate',
				settings: { cost: defaultRate },
			},
		} );

		if ( restOfTheWorldEnabled ) {
			apiFetch( {
				method: 'POST',
				path: '/wc/v3/shipping/zones/0/methods',
				data: {
					method_id: 'flat_rate',
					settings: { cost: restOfTheWorldRate },
				},
			} );
		}

		this.props.completeStep();
	}

	getCountryCode() {
		const { settings } = this.props;
		return settings.woocommerce_default_country.split( ':' )[ 0 ];
	}

	getCountryName() {
		const countries = ( wcSettings.dataEndpoints && wcSettings.dataEndpoints.countries ) || [];
		const country = countries.find( c => c.code === this.getCountryCode() );
		return country ? country.name : null;
	}

	onBlur() {
		const { defaultRate, restOfTheWorldRate } = this.state;
		this.setState( {
			defaultRate: getCurrencyFormatString( defaultRate ),
			restOfTheWorldRate: getCurrencyFormatString( restOfTheWorldRate ),
		} );
	}

	render() {
		const { defaultRate, restOfTheWorldRate, restOfTheWorldEnabled } = this.state;

		return (
			<Fragment>
				<Flag code={ this.getCountryCode() } /> { this.getCountryName() }
				<TextControl
					label={ __( 'Shipping cost', 'woocommerce-admin' ) }
					required
					value={ defaultRate }
					onChange={ value => this.setState( { defaultRate: value } ) }
					onBlur={ () => this.onBlur() }
				/>
				<hr />
				<H>
					{ __( 'Rest of the world', 'woocommerce-admin' ) }
					<FormToggle
						checked={ restOfTheWorldEnabled }
						onChange={ () => this.setState( { restOfTheWorldEnabled: ! restOfTheWorldEnabled } ) }
					/>
				</H>
				{ restOfTheWorldEnabled && (
					<TextControl
						label={ __( 'Shipping cost', 'woocommerce-admin' ) }
						required
						value={ restOfTheWorldRate }
						onChange={ value => this.setState( { restOfTheWorldRate: value } ) }
						onBlur={ () => this.onBlur() }
					/>
				) }
				<Button isPrimary onClick={ this.onSubmit }>
					{ __( 'Complete task', 'woocommerce-admin' ) }
				</Button>
			</Fragment>
		);
	}
}
