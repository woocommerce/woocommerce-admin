/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from 'newspack-components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { filter } from 'lodash';
import { FormToggle } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, Stepper } from '@woocommerce/components';
import { getAdminLink, getHistory, getNewPath } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import Connect from './steps/connect';
import Plugins from './steps/plugins';
import StoreLocation from './steps/location';
import withSelect from 'wc-api/with-select';
import { Fragment } from '@wordpress/element/build/react';

class Tax extends Component {
	constructor() {
		super( ...arguments );

		this.initialState = {
			isPending: false,
			stepIndex: 0,
			automatedTaxEnabled: true,
		};

		this.state = this.initialState;

		this.completeStep = this.completeStep.bind( this );
		this.updateAutomatedTax = this.updateAutomatedTax.bind( this );
	}

	componentDidMount() {
		this.reset();
	}

	reset() {
		this.setState( this.initialState );
	}

	componentDidUpdate( prevProps ) {
		const { generalSettings, isJetpackConnected, taxSettings } = this.props;
		const {
			woocommerce_store_address,
			woocommerce_default_country,
			woocommerce_store_postcode,
		} = generalSettings;
		const { stepIndex } = this.state;
		const currentStep = this.getSteps()[ stepIndex ];
		const currentStepKey = currentStep && currentStep.key;

		if (
			'store_location' === currentStepKey &&
			woocommerce_store_address &&
			woocommerce_default_country &&
			woocommerce_store_postcode
		) {
			this.completeStep();
		}

		if (
			taxSettings.wc_connect_taxes_enabled &&
			taxSettings.wc_connect_taxes_enabled !== prevProps.taxSettings.wc_connect_taxes_enabled
		) {
			/* eslint-disable react/no-did-update-set-state */
			this.setState( {
				automatedTaxEnabled: 'yes' === taxSettings.wc_connect_taxes_enabled ? true : false,
			} );
			/* eslint-enable react/no-did-update-set-state */
		}

		if ( 'connect' === currentStepKey && isJetpackConnected ) {
			this.completeStep();
		}
	}

	completeStep() {
		const { stepIndex } = this.state;
		const steps = this.getSteps();
		const nextStep = steps[ stepIndex + 1 ];

		if ( nextStep ) {
			this.setState( { stepIndex: stepIndex + 1 } );
		} else {
			getHistory().push( getNewPath( {}, '/', {} ) );
		}
	}

	async updateAutomatedTax() {
		const { createNotice, isTaxSettingsError, updateSettings } = this.props;
		const { automatedTaxEnabled } = this.state;

		await updateSettings( {
			tax: {
				wc_connect_taxes_enabled: automatedTaxEnabled ? 'yes' : 'no',
			},
		} );

		if ( ! isTaxSettingsError ) {
			createNotice( 'success', __( 'Your tax settings have been updated.', 'woocommerce-admin' ) );
			if ( automatedTaxEnabled ) {
				this.completeStep();
			} else {
				window.location = getAdminLink( 'admin.php?page=wc-settings&tab=tax&section=standard' );
			}
		} else {
			createNotice(
				'error',
				__( 'There was a problem updating your tax settings.', 'woocommerce-admin' )
			);
		}
	}

	getAutomatedTaxStepContent() {
		const { automatedTaxEnabled } = this.state;
		const { isTaxSettingsRequesting } = this.props;

		return (
			<Fragment>
				<div className="woocommerce-task-tax__automated-tax-control">
					<i className="material-icons-outlined">autorenew</i>
					<div className="woocommerce-task-tax__automated-tax-control-inner">
						<label
							htmlFor="woocommerce-task-tax__automated-tax-control-input"
							className="woocommerce-task-tax__automated-tax-control-label"
						>
							{ __( 'Automate sales tax calculations', 'woocommerce-adfmin' ) }
						</label>
						<FormToggle
							id="woocommerce-task-tax__automated-tax-control-input"
							checked={ automatedTaxEnabled }
							onChange={ () => this.setState( { automatedTaxEnabled: ! automatedTaxEnabled } ) }
						/>
					</div>
				</div>
				<Button isPrimary onClick={ this.updateAutomatedTax } isBusy={ isTaxSettingsRequesting }>
					{ __( 'Complete task', 'woocommerce-admin' ) }
				</Button>
			</Fragment>
		);
	}

	getSteps() {
		const { countryCode, generalSettings, isGeneralSettingsRequesting } = this.props;
		const { automatedTaxSupportedCountries } = wcSettings.onboarding;

		const steps = [
			{
				key: 'store_location',
				label: __( 'Set store location', 'woocommerce-admin' ),
				description: __( 'The address from which your business operates', 'woocommerce-admin' ),
				content: (
					<StoreLocation
						{ ...this.props }
						completeStep={ this.completeStep }
						isSettingsRequesting={ isGeneralSettingsRequesting }
						settings={ generalSettings }
					/>
				),
				visible: true,
			},
			{
				key: 'plugins',
				label: __( 'Install Jetpack and WooCommerce Services', 'woocommerce-admin' ),
				description: __(
					'Jetpack and WooCommerce services allow you to automate sales tax calculations',
					'woocommerce-admin'
				),
				content: (
					<Plugins
						onComplete={ this.completeStep }
						onSkip={ () =>
							( window.location.href = getAdminLink(
								'admin.php?page=wc-settings&tab=tax&section=standard'
							) )
						}
						skipText={ __( 'Set up tax rates manually', 'woocommerce-admin' ) }
					/>
				),
				visible: automatedTaxSupportedCountries.includes( countryCode ),
			},
			{
				key: 'connect',
				label: __( 'Connect your store', 'woocommerce-admin' ),
				description: __(
					'Connect your store to WordPress.com to enable automated sales tax calculations',
					'woocommerce-admin'
				),
				content: <Connect completeStep={ this.completeStep } { ...this.props } />,
				visible: automatedTaxSupportedCountries.includes( countryCode ),
			},
			{
				key: 'automated_tax',
				label: __( 'Enable automated tax calculations', 'woocommerce-admin' ),
				description: __(
					'Sales taxes will be calculated automatically when a customer checks out',
					'woocommerce-admin'
				),
				content: this.getAutomatedTaxStepContent(),
				visible: automatedTaxSupportedCountries.includes( countryCode ),
			},
			{
				key: 'manual_configuration',
				label: __( 'Congifure tax rates', 'woocommerce-admin' ),
				description: __(
					'Head over to the tax rate settings screen to configure your tax rates',
					'woocommerce-admin'
				),
				content: (
					<Button
						isPrimary
						href={ getAdminLink( 'admin.php?page=wc-settings&tab=tax&section=standard' ) }
					>
						{ __( 'Configure', 'woocommerce-admin' ) }
					</Button>
				),
				visible: ! automatedTaxSupportedCountries.includes( countryCode ),
			},
		];

		return filter( steps, step => step.visible );
	}

	render() {
		const { isPending, stepIndex } = this.state;
		const { isGeneralSettingsRequesting, isTaxSettingsRequesting } = this.props;

		return (
			<div className="woocommerce-task-tax">
				<Card className="is-narrow">
					<Stepper
						isPending={ isPending || isGeneralSettingsRequesting || isTaxSettingsRequesting }
						isVertical={ true }
						currentStep={ this.getSteps()[ stepIndex ].key }
						steps={ this.getSteps() }
					/>
				</Card>
			</div>
		);
	}
}

export default compose(
	withSelect( select => {
		const { getSettings, getSettingsError, isGetSettingsRequesting } = select( 'wc-api' );

		const generalSettings = getSettings( 'general' );
		const isGeneralSettingsError = Boolean( getSettingsError( 'general' ) );
		const isGeneralSettingsRequesting = isGetSettingsRequesting( 'general' );
		const taxSettings = getSettings( 'tax' );
		const isTaxSettingsError = Boolean( getSettingsError( 'tax' ) );
		const isTaxSettingsRequesting = isGetSettingsRequesting( 'tax' );
		// @todo This value should be fetched and updated via the wc-api.
		const isJetpackConnected = true;

		const countryCode = generalSettings.woocommerce_default_country
			? generalSettings.woocommerce_default_country.split( ':' )[ 0 ]
			: null;

		return {
			countryCode,
			isGeneralSettingsError,
			isGeneralSettingsRequesting,
			generalSettings,
			isTaxSettingsError,
			isTaxSettingsRequesting,
			taxSettings,
			isJetpackConnected,
		};
	} ),
	withDispatch( dispatch => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateSettings } = dispatch( 'wc-api' );

		return {
			createNotice,
			updateSettings,
		};
	} )
)( Tax );
