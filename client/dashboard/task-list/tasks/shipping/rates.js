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
import { get, xor } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Flag } from '@woocommerce/components';
import { getCurrencyFormatString } from '@woocommerce/currency';

export default class ShippingRates extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			zoneRates: {},
			enabledZones: [],
		};

		this.handleSubmit = this.handleSubmit.bind( this );
	}

	componentDidUpdate( prevProps ) {
		const { shippingZones } = this.props;

		if ( prevProps.shippingZones !== shippingZones ) {
			const zoneRates = {};
			const enabledZones = [];

			shippingZones.forEach( zone => {
				const flatRateMethods =
					zone.methods && zone.methods.length
						? zone.methods.filter( method => 'flat_rate' === method.method_id )
						: [];
				const rate = flatRateMethods.length
					? flatRateMethods[ 0 ].settings.cost.value
					: getCurrencyFormatString( 0 );
				zoneRates[ zone.id ] = rate;

				if ( zone.toggleEnabled && flatRateMethods.length && flatRateMethods[ 0 ].enabled ) {
					enabledZones.push( zone.id );
				}
			} );

			/* eslint-disable react/no-did-update-set-state */
			this.setState( { zoneRates, enabledZones } );
			/* eslint-enable react/no-did-update-set-state */
		}
	}

	async handleSubmit() {
		const { enabledZones, zoneRates } = this.state;
		const { createNotice, shippingZones } = this.props;

		shippingZones.map( zone => {
			const flatRateMethods = zone.methods.filter( method => 'flat_rate' === method.method_id );

			if ( zone.toggleEnabled && ! enabledZones.includes( zone.id ) ) {
				// Disable any flat rate methods that exist if toggled off.
				if ( flatRateMethods.length ) {
					flatRateMethods.map( method => {
						apiFetch( {
							method: 'POST',
							path: `/wc/v3/shipping/zones/${ zone.id }/methods/${ method.instance_id }`,
							data: {
								enabled: false,
							},
						} );
					} );
				}
				return;
			}

			if ( flatRateMethods.length ) {
				// Update the existing method.
				apiFetch( {
					method: 'POST',
					path: `/wc/v3/shipping/zones/${ zone.id }/methods/${ flatRateMethods[ 0 ].instance_id }`,
					data: {
						enabled: true,
						settings: { cost: zoneRates[ zone.id ] },
					},
				} );
			} else {
				// Add new method if one doesn't exist.
				apiFetch( {
					method: 'POST',
					path: `/wc/v3/shipping/zones/${ zone.id }/methods`,
					data: {
						method_id: 'flat_rate',
						settings: { cost: zoneRates[ zone.id ] },
					},
				} );
			}
		} );

		// @todo This is a workaround to force the task to mark as complete.
		// This should probably be updated to use wc-api so we can fetch shipping methods.
		wcSettings.onboarding.shippingZonesCount = 1;

		createNotice( 'success', __( 'Your shipping rates have been updated.', 'woocommerce-admin' ) );

		this.props.completeStep();
	}

	handleChange( zoneId, value ) {
		this.setState( prevState => ( { zoneRates: { ...prevState.zoneRates, [ zoneId ]: value } } ) );
	}

	handleToggle( zoneId ) {
		this.setState( prevState => ( { enabledZones: xor( prevState.enabledZones, [ zoneId ] ) } ) );
	}

	handleBlur( zoneId ) {
		const { zoneRates } = this.state;
		zoneRates[ zoneId ] = getCurrencyFormatString( zoneRates[ zoneId ] );

		this.setState( { zoneRates } );
	}

	render() {
		const { enabledZones, zoneRates } = this.state;
		const { shippingZones } = this.props;

		if ( ! shippingZones.length ) {
			return null;
		}

		return (
			<Fragment>
				<div className="woocommerce-shipping-rates">
					{ shippingZones.map( zone => (
						<div className="woocommerce-shipping-rate" key={ zone.id }>
							<div className="woocommerce-shipping-rate__icon">
								{ zone.locations ? (
									zone.locations.map( location => (
										<Flag size={ 24 } code={ location.code } key={ location.code } />
									) )
								) : (
									<i className="material-icons-outlined">public</i>
								) }
							</div>
							<div className="woocommerce-shipping-rate__main">
								<div className="woocommerce-shipping-rate__name">
									{ zone.name }
									{ zone.toggleEnabled && (
										<FormToggle
											checked={ enabledZones.includes( zone.id ) }
											onChange={ () => this.handleToggle( zone.id ) }
										/>
									) }
								</div>
								{ ( ! zone.toggleEnabled || enabledZones.includes( zone.id ) ) && (
									<div
										className={ classnames( 'woocommerce-shipping-rate__control-wrapper', {
											'has-value': zoneRates[ zone.id ],
										} ) }
									>
										<span className="woocommerce-shipping-rate__control-prefix">
											{ get( wcSettings, [ 'currency', 'symbol' ], '$' ) }
										</span>
										<TextControl
											label={ __( 'Shipping cost', 'woocommerce-admin' ) }
											required
											value={ zoneRates[ zone.id ] || getCurrencyFormatString( 0 ) }
											onChange={ value => this.handleChange( zone.id, value ) }
											onBlur={ () => this.handleBlur( zone.id ) }
										/>
										{ parseFloat( zoneRates[ zone.id ] ) === parseFloat( 0 ) && (
											<span className="woocommerce-shipping-rate__control-suffix">
												{ __( 'Free shipping', 'woocommerce-admin' ) }
											</span>
										) }
									</div>
								) }
							</div>
						</div>
					) ) }
				</div>

				<Button isPrimary onClick={ this.handleSubmit }>
					{ __( 'Complete task', 'woocommerce-admin' ) }
				</Button>
			</Fragment>
		);
	}
}
