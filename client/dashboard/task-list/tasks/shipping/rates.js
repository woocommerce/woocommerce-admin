/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button, TextControl } from 'newspack-components';
import classnames from 'classnames';
import { Component, Fragment } from '@wordpress/element';
import { FormToggle } from '@wordpress/components';
import { get } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Flag } from '@woocommerce/components';
import { getCurrencyFormatString } from '@woocommerce/currency';

export default class ShippingRates extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			defaultRate: getCurrencyFormatString( 0 ),
			restOfTheWorldRate: getCurrencyFormatString( 0 ),
			restOfTheWorldEnabled: false,
		};

		this.onSubmit = this.onSubmit.bind( this );
	}

	async onSubmit() {
		const { defaultRate, restOfTheWorldEnabled, restOfTheWorldRate } = this.state;
		const { countryCode, countryName } = this.props;

		const zone = await apiFetch( {
			method: 'POST',
			path: '/wc/v3/shipping/zones',
			data: { name: countryName },
		} );
		apiFetch( {
			method: 'POST',
			path: `/wc/v3/shipping/zones/${ zone.id }`,
			data: {
				type: 'country',
				code: countryCode,
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

		wcSettings.onboarding.shippingZonesCount = 1;

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

	onBlur() {
		const { defaultRate, restOfTheWorldRate } = this.state;
		this.setState( {
			defaultRate: getCurrencyFormatString( defaultRate ),
			restOfTheWorldRate: getCurrencyFormatString( restOfTheWorldRate ),
		} );
	}

	render() {
		const { defaultRate, restOfTheWorldRate, restOfTheWorldEnabled } = this.state;
		const { countryCode, countryName } = this.props;

		return (
			<Fragment>
				<div className="woocommerce-shipping-rate">
					<div className="woocommerce-shipping-rate__flag">
						<Flag size={ 24 } code={ countryCode } />
					</div>
					<div className="woocommerce-shipping-rate__main">
						<div className="woocommerce-shipping-rate__name">{ countryName }</div>
						<div
							className={ classnames( 'woocommerce-shipping-rate__control-wrapper', {
								'has-value': defaultRate,
							} ) }
						>
							<span className="woocommerce-shipping-rate__control-prefix">
								{ get( wcSettings, [ 'currency', 'symbol' ], '$' ) }
							</span>
							<TextControl
								label={ __( 'Shipping cost', 'woocommerce-admin' ) }
								required
								value={ defaultRate }
								onChange={ value => this.setState( { defaultRate: value } ) }
								onBlur={ () => this.onBlur() }
							/>
							{ parseFloat( defaultRate ) === parseFloat( 0 ) && (
								<span className="woocommerce-shipping-rate__control-suffix">
									{ __( 'Free shipping', 'woocommerce-admin' ) }
								</span>
							) }
						</div>
					</div>
				</div>

				<div className="woocommerce-shipping-rate">
					<div className="woocommerce-shipping-rate__flag">
						<i className="material-icons-outlined">public</i>
					</div>
					<div className="woocommerce-shipping-rate__main">
						<div className="woocommerce-shipping-rate__name">
							{ __( 'Rest of the world', 'woocommerce-admin' ) }
							<FormToggle
								checked={ restOfTheWorldEnabled }
								onChange={ () =>
									this.setState( { restOfTheWorldEnabled: ! restOfTheWorldEnabled } )
								}
							/>
						</div>
						{ restOfTheWorldEnabled && (
							<div
								className={ classnames( 'woocommerce-shipping-rate__control-wrapper', {
									'has-value': restOfTheWorldRate,
								} ) }
							>
								<span className="woocommerce-shipping-rate__control-prefix">
									{ get( wcSettings, [ 'currency', 'symbol' ], '$' ) }
								</span>
								<TextControl
									label={ __( 'Shipping cost', 'woocommerce-admin' ) }
									required
									value={ restOfTheWorldRate }
									onChange={ value => this.setState( { restOfTheWorldRate: value } ) }
									onBlur={ () => this.onBlur() }
								/>
								{ parseFloat( restOfTheWorldRate ) === parseFloat( 0 ) && (
									<span className="woocommerce-shipping-rate__control-suffix">
										{ __( 'Free shipping', 'woocommerce-admin' ) }
									</span>
								) }
							</div>
						) }
					</div>
				</div>

				<Button isPrimary onClick={ this.onSubmit }>
					{ __( 'Complete task', 'woocommerce-admin' ) }
				</Button>
			</Fragment>
		);
	}
}
