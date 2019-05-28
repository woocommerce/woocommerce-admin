/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, SelectControl, TextControl } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { decodeEntities } from '@wordpress/html-entities';
import { withDispatch } from '@wordpress/data';

/**
 * Internal depdencies
 */
import { H, Card } from '@woocommerce/components';
import withSelect from 'wc-api/with-select';

class StoreDetails extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			addressLine1: '',
			addressLine2: '',
			city: '',
			countryState: '',
			postCode: '',
		};

		this.submitForm = this.submitForm.bind( this );
	}

	isValidForm() {
		const { addressLine1, city, countryState, postCode } = this.state;

		if ( addressLine1.length && city.length && countryState.length && postCode.length ) {
			return true;
		}

		return false;
	}

	submitForm() {
		if ( ! this.isValidForm() ) {
			return;
		}

		const { addressLine1, addressLine2, city, countryState, postCode } = this.state;

		this.props.updateSettings( {
			general: {
				woocommerce_store_address: addressLine1,
				woocommerce_store_address_2: addressLine2,
				woocommerce_default_country: countryState,
				woocommerce_store_city: city,
				woocommerce_store_postcode: postCode,
			},
		} );

		// @todo Go to next step once https://github.com/woocommerce/woocommerce-admin/pull/2283 is merged.
	}

	getCountryStateOptions() {
		const countries = ( wcSettings.dataEndpoints && wcSettings.dataEndpoints.countries ) || [];

		const countryStateOptions = countries.reduce( ( acc, country ) => {
			if ( ! country.states.length ) {
				acc.push( {
					value: country.code,
					label: decodeEntities( country.name ),
				} );

				return acc;
			}

			const countryStates = country.states.map( state => {
				return {
					value: country.code + ':' + state.code,
					label: decodeEntities( country.name ) + ' -- ' + decodeEntities( state.name ),
				};
			} );

			acc.push( ...countryStates );

			return acc;
		}, [] );

		countryStateOptions.unshift( { value: '', label: '' } );

		return countryStateOptions;
	}

	render() {
		const { addressLine1, addressLine2, city, countryState, postCode } = this.state;

		return (
			<Fragment>
				<H className="woocommerce-profile-wizard__header-title">
					{ __( 'Store Details', 'woocommerce-admin' ) }
				</H>
				<H className="woocommerce-profile-wizard__header-subtitle">
					{ __( 'Tell us about your store', 'woocommerce-admin' ) }
				</H>

				<Card>
					<TextControl
						label={ __( 'Address line 1', 'woocommerce-admin' ) }
						onChange={ value => this.setState( { addressLine1: value } ) }
						required
						value={ addressLine1 }
					/>

					<TextControl
						label={ __( 'Address line 2', 'woocommerce-admin' ) }
						onChange={ value => this.setState( { addressLine2: value } ) }
						required
						value={ addressLine2 }
					/>

					<SelectControl
						label={ __( 'Country / State', 'woocommerce-admin' ) }
						onChange={ value => this.setState( { countryState: value } ) }
						options={ this.getCountryStateOptions() }
						value={ countryState }
						required
					/>

					<TextControl
						label={ __( 'City', 'woocommerce-admin' ) }
						onChange={ value => this.setState( { city: value } ) }
						required
						value={ city }
					/>

					<TextControl
						label={ __( 'Post code', 'woocommerce-admin' ) }
						onChange={ value => this.setState( { postCode: value } ) }
						required
						value={ postCode }
					/>

					<Button isPrimary onClick={ this.submitForm } disabled={ ! this.isValidForm() }>
						{ __( 'Continue', 'woocommerce-admin' ) }
					</Button>
				</Card>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getSettings, getSettingsError, isGetSettingsRequesting } = select( 'wc-api' );

		const settings = getSettings( 'general' );
		const isError = Boolean( getSettingsError( 'general' ) );
		const isRequesting = isGetSettingsRequesting( 'general' );

		return { getSettings, isError, isRequesting, settings };
	} ),
	withDispatch( dispatch => {
		const { addNotice } = dispatch( 'wc-api' );
		const { updateSettings } = dispatch( 'wc-api' );

		return {
			addNotice,
			updateSettings,
		};
	} )
)( StoreDetails );
