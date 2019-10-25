/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, CheckboxControl } from 'newspack-components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { recordEvent } from 'lib/tracks';
import { without } from 'lodash';

/**
 * Internal depdencies
 */
import { getCountryCode } from 'dashboard/utils';
import { H, Card, Form } from '@woocommerce/components';
import withSelect from 'wc-api/with-select';
import {
	StoreAddress,
	validateStoreAddress,
} from '../../components/settings/general/store-address';
import UsageModal from './usage-modal';
import { getSetting } from '@woocommerce/wc-admin-settings';

class StoreDetails extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			showUsageModal: false,
		};

		this.initialValues = {
			addressLine1: '123',
			addressLine2: '',
			city: 'Test',
			countryState: '',
			postCode: '123',
			isClient: false,
		};

		this.onContinue = this.onContinue.bind( this );
		this.onSubmit = this.onSubmit.bind( this );
	}

	deriveCurrencySettings( countryState ) {
		if ( ! countryState ) {
			return null;
		}

		let region = getCountryCode( countryState );
		const euCountries = without(
			getSetting( 'onboarding', { euCountries: [] } ).euCountries,
			'GB'
		);
		if ( euCountries.includes( region ) ) {
			region = 'EU';
		}

		// See https://github.com/woocommerce/woocommerce-admin/issues/3101.
		const currencyData = {
			US: {
				code: 'USD',
				position: 'left',
				grouping: ',',
				decimal: '.',
				precision: 2,
			},
			EU: {
				code: 'EUR',
				position: 'left',
				grouping: '.',
				decimal: ',',
				precision: 2,
			},
			IN: {
				code: 'INR',
				position: 'left',
				grouping: ',',
				decimal: '.',
				precision: 2,
			},
			GB: {
				code: 'GBP',
				position: 'left',
				grouping: ',',
				decimal: '.',
				precision: 2,
			},
			BR: {
				code: 'BRL',
				position: 'left',
				grouping: '.',
				decimal: ',',
				precision: 2,
			},
			VN: {
				code: 'VND',
				position: 'right',
				grouping: '.',
				decimal: ',',
				precision: 1,
			},
			ID: {
				code: 'IDR',
				position: 'left',
				grouping: '.',
				decimal: ',',
				precision: 0,
			},
			BD: {
				code: 'BDT',
				position: 'left',
				grouping: ',',
				decimal: '.',
				precision: 0,
			},
			PK: {
				code: 'PKR',
				position: 'left',
				grouping: ',',
				decimal: '.',
				precision: 2,
			},
			RU: {
				code: 'RUB',
				position: 'right',
				grouping: ' ',
				decimal: ',',
				precision: 2,
			},
			TR: {
				code: 'TRY',
				position: 'left',
				grouping: '.',
				decimal: ',',
				precision: 2,
			},
			MX: {
				code: 'MXN',
				position: 'left',
				grouping: ',',
				decimal: '.',
				precision: 2,
			},
			CA: {
				code: 'CAD',
				position: 'left',
				grouping: ',',
				decimal: '.',
				precision: 2,
			},
		};

		return currencyData[ region ] || currencyData.US;
	}

	onSubmit( values ) {
		const { profileItems } = this.props;

		if ( 'already-installed' === profileItems.plugins ) {
			this.setState( { showUsageModal: true } );
			return;
		}

		this.onContinue( values );
	}

	async onContinue( values ) {
		const {
			createNotice,
			goToNextStep,
			isSettingsError,
			updateSettings,
			updateProfileItems,
			isProfileItemsError,
		} = this.props;

		const currencySettings = this.deriveCurrencySettings( values.countryState );

		recordEvent( 'storeprofiler_store_details_continue', {
			store_country: getCountryCode( values.countryState ),
			derived_currency: currencySettings.code,
			setup_client: values.isClient,
		} );

		// @todo Set settings.

		await updateSettings( {
			general: {
				woocommerce_store_address: values.addressLine1,
				woocommerce_store_address_2: values.addressLine2,
				woocommerce_default_country: values.countryState,
				woocommerce_store_city: values.city,
				woocommerce_store_postcode: values.postCode,
			},
		} );

		await updateProfileItems( { setup_client: values.isClient } );

		if ( ! isSettingsError && ! isProfileItemsError ) {
			goToNextStep();
		} else {
			createNotice(
				'error',
				__( 'There was a problem saving your store details.', 'woocommerce-admin' )
			);
		}
	}

	render() {
		const { showUsageModal } = this.state;
		return (
			<Fragment>
				<H className="woocommerce-profile-wizard__header-title">
					{ __( 'Where is your store based?', 'woocommerce-admin' ) }
				</H>
				<H className="woocommerce-profile-wizard__header-subtitle">
					{ __(
						'This will help us configure your store and get you started quickly',
						'woocommerce-admin'
					) }
				</H>

				<Card>
					<Form
						initialValues={ this.initialValues }
						onSubmitCallback={ this.onSubmit }
						validate={ validateStoreAddress }
					>
						{ ( { getInputProps, handleSubmit, values, isValidForm } ) => (
							<Fragment>
								{ showUsageModal && (
									<UsageModal
										onContinue={ () => this.onContinue( values ) }
										onClose={ () => this.setState( { showUsageModal: false } ) }
									/>
								) }
								<StoreAddress getInputProps={ getInputProps } />
								<CheckboxControl
									label={ __( "I'm setting up a store for a client", 'woocommerce-admin' ) }
									{ ...getInputProps( 'isClient' ) }
								/>

								<Button isPrimary onClick={ handleSubmit } disabled={ ! isValidForm }>
									{ __( 'Continue', 'woocommerce-admin' ) }
								</Button>
							</Fragment>
						) }
					</Form>
				</Card>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( select => {
		const {
			getSettings,
			getSettingsError,
			isGetSettingsRequesting,
			getProfileItemsError,
			getProfileItems,
		} = select( 'wc-api' );

		const profileItems = getProfileItems();

		const settings = getSettings( 'general' );
		const isSettingsError = Boolean( getSettingsError( 'general' ) );
		const isSettingsRequesting = isGetSettingsRequesting( 'general' );
		const isProfileItemsError = Boolean( getProfileItemsError() );

		return {
			getSettings,
			isProfileItemsError,
			profileItems,
			isSettingsError,
			isSettingsRequesting,
			settings,
		};
	} ),
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateSettings, updateProfileItems } = dispatch( 'wc-api' );

		return {
			createNotice,
			updateSettings,
			updateProfileItems,
		};
	} )
)( StoreDetails );
