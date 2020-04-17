/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { difference, filter, get } from 'lodash';
import interpolateComponents from 'interpolate-components';
import { withDispatch, withSelect } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { Card, H, Link, Stepper, Plugins } from '@woocommerce/components';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import {
	getAdminLink,
	getSetting,
	setSetting,
} from '@woocommerce/wc-admin-settings';
import { SETTINGS_STORE_NAME, PLUGINS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import Connect from 'dashboard/components/connect';
import { getCountryCode } from 'dashboard/utils';
import StoreLocation from './steps/location';
import withWCApiSelect from 'wc-api/with-select';
import { recordEvent, queueRecordEvent } from 'lib/tracks';

class Tax extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isPending: false,
			stepIndex: null,
			automatedTaxEnabled: true,
			// Cache the value of pluginsToActivate so that we can show/hide tasks based on it, but not have them update mid task.
			pluginsToActivate: props.pluginsToActivate,
		};

		this.goToNextStep = this.goToNextStep.bind( this );
		this.configureTaxRates = this.configureTaxRates.bind( this );
		this.updateAutomatedTax = this.updateAutomatedTax.bind( this );
		this.setIsPending = this.setIsPending.bind( this );
	}

	componentDidMount() {
		if ( this.props.isWaitingForSettings ) {
			// We need to wait until we have received the initial settings
			// to set the first step, since whether steps should be considered
			// complete depends on the settings; otherwise, we may show a
			// step when it isn't necessary.
			return;
		}

		this.goToFirstStepOrSuccessScreen();
	}

	componentDidUpdate() {
		if (
			this.state.stepIndex === null &&
			! this.props.isWaitingForSettings
		) {
			// We are not currently on a step, and we now have the settings,
			// so we can proceed with going to the first step, or the success screen.
			this.goToFirstStepOrSuccessScreen();
		}
	}

	goToFirstStepOrSuccessScreen() {
		// Don't go to the fist step if all requirements are already satisfied;
		// instead, go to the success screen.
		if (
			this.props.pluginsToActivate.length === 0 &&
			this.props.isStoreLocationComplete &&
			this.props.isJetpackConnected &&
			this.props.isTaxJarSupported
		) {
			return;
		}

		this.goToNextStep( 0 );
	}

	goToNextStep( forcedNextStepIndex ) {
		const { stepIndex } = this.state;
		const steps = this.getSteps();
		const nextStepIndex =
			typeof forcedNextStepIndex !== 'undefined'
				? forcedNextStepIndex
				: stepIndex + 1;
		const nextStep = steps[ nextStepIndex ];

		if ( nextStep ) {
			if ( nextStep.isComplete ) {
				this.goToNextStep( nextStepIndex + 1 );
				return;
			}
			this.setState( { stepIndex: nextStepIndex } );
		} else {
			// Return to the Dashboard
			getHistory().push( getNewPath( {}, '/', {} ) );
		}
	}

	async configureTaxRates() {
		const {
			generalSettings,
			updateAndPersistSettingsForGroup,
		} = this.props;

		if ( generalSettings.woocommerce_calc_taxes !== 'yes' ) {
			this.setState( { isPending: true } );
			await updateAndPersistSettingsForGroup( 'general', {
				general: {
					woocommerce_calc_taxes: 'yes',
				},
			} );
		}

		window.location = getAdminLink(
			'admin.php?page=wc-settings&tab=tax&section=standard&wc_onboarding_active_task=tax'
		);
	}

	async updateAutomatedTax( automatedTaxEnabled ) {
		const { createNotice, updateAndPersistSettingsForGroup } = this.props;

		await updateAndPersistSettingsForGroup( 'tax', {
			tax: {
				wc_connect_taxes_enabled: automatedTaxEnabled ? 'yes' : 'no',
			},
		} );

		await updateAndPersistSettingsForGroup( 'general', {
			general: {
				woocommerce_calc_taxes: 'yes',
			},
		} );

		if (
			! this.props.isTaxSettingsError &&
			! this.props.isGeneralSettingsError
		) {
			// @todo This is a workaround to force the task to mark as complete.
			// This should probably be updated to use wc-api so we can fetch tax rates.
			setSetting( 'onboarding', {
				...getSetting( 'onboarding', {} ),
				isTaxComplete: true,
			} );
			createNotice(
				'success',
				__(
					"You're awesome! One less item on your to-do list ✅",
					'woocommerce-admin'
				)
			);
			if ( automatedTaxEnabled ) {
				// Return to Dashboard
				getHistory().push( getNewPath( {}, '/', {} ) );
			} else {
				this.configureTaxRates();
			}
		} else {
			createNotice(
				'error',
				__(
					'There was a problem updating your tax settings.',
					'woocommerce-admin'
				)
			);
		}
	}

	setIsPending( value ) {
		this.setState( { isPending: value } );
	}

	getSteps() {
		const {
			generalSettings,
			isGeneralSettingsRequesting,
			isJetpackConnected,
			isStoreLocationComplete,
			isTaxJarSupported,
		} = this.props;
		const { isPending, pluginsToActivate } = this.state;

		const steps = [
			{
				key: 'store_location',
				label: __( 'Set store location', 'woocommerce-admin' ),
				description: __(
					'The address from which your business operates',
					'woocommerce-admin'
				),
				content: (
					<StoreLocation
						{ ...this.props }
						onComplete={ ( values ) => {
							const country = getCountryCode(
								values.countryState
							);
							recordEvent( 'tasklist_tax_set_location', {
								country,
							} );
							this.goToNextStep();
						} }
						isSettingsRequesting={ isGeneralSettingsRequesting }
						settings={ generalSettings }
					/>
				),
				visible: true,
				isComplete: isStoreLocationComplete,
			},
			{
				key: 'plugins',
				label: __(
					'Install Jetpack and WooCommerce Services',
					'woocommerce-admin'
				),
				description: __(
					'Jetpack and WooCommerce Services allow you to automate sales tax calculations',
					'woocommerce-admin'
				),
				content: (
					<Plugins
						onComplete={ () => {
							recordEvent( 'tasklist_tax_install_extensions', {
								install_extensions: true,
							} );
							this.goToNextStep();
						} }
						onSkip={ () => {
							queueRecordEvent(
								'tasklist_tax_install_extensions',
								{
									install_extensions: false,
								}
							);
							window.location.href = getAdminLink(
								'admin.php?page=wc-settings&tab=tax&section=standard'
							);
						} }
						skipText={ __(
							'Set up tax rates manually',
							'woocommerce-admin'
						) }
					/>
				),
				visible: pluginsToActivate.length && isTaxJarSupported,
				isComplete: ! pluginsToActivate.length,
			},
			{
				key: 'connect',
				label: __( 'Connect your store', 'woocommerce-admin' ),
				description: __(
					'Connect your store to WordPress.com to enable automated sales tax calculations',
					'woocommerce-admin'
				),
				content: (
					<Connect
						{ ...this.props }
						setIsPending={ this.setIsPending }
						onConnect={ () => {
							recordEvent( 'tasklist_tax_connect_store', {
								connect: true,
							} );
						} }
						onSkip={ () => {
							queueRecordEvent( 'tasklist_tax_connect_store', {
								connect: false,
							} );
							window.location.href = getAdminLink(
								'admin.php?page=wc-settings&tab=tax&section=standard'
							);
						} }
						skipText={ __(
							'Set up tax rates manually',
							'woocommerce-admin'
						) }
					/>
				),
				visible: ! isJetpackConnected && isTaxJarSupported,
				isComplete: isJetpackConnected,
			},
			{
				key: 'manual_configuration',
				label: __( 'Configure tax rates', 'woocommerce-admin' ),
				description: __(
					'Head over to the tax rate settings screen to configure your tax rates',
					'woocommerce-admin'
				),
				content: (
					<Fragment>
						<Button
							isPrimary
							isBusy={ isPending }
							onClick={ () => {
								recordEvent( 'tasklist_tax_config_rates' );
								this.configureTaxRates();
							} }
						>
							{ __( 'Configure', 'woocommerce-admin' ) }
						</Button>
						<p>
							{ generalSettings.woocommerce_calc_taxes !==
								'yes' &&
								interpolateComponents( {
									mixedString: __(
										/*eslint-disable max-len*/
										'By clicking "Configure" you\'re enabling tax rates and calculations. More info {{link}}here{{/link}}.',
										/*eslint-enable max-len*/
										'woocommerce-admin'
									),
									components: {
										link: (
											<Link
												href="https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/#section-1"
												target="_blank"
												type="external"
											/>
										),
									},
								} ) }
						</p>
					</Fragment>
				),
				visible: ! isTaxJarSupported,
				// TODO: Should this step ever be considered complete?
				isComplete: false,
			},
		];

		return filter( steps, ( step ) => step.visible );
	}

	render() {
		const { isPending, stepIndex } = this.state;
		const {
			isTaxSettingsRequesting,
			isWaitingForSettings,
			taxSettings,
		} = this.props;

		// Don't render anything if we are not yet on a step and are still
		// waiting for settings, to avoid temporarily showing incorrect
		// status
		if ( stepIndex === null && isWaitingForSettings ) {
			return null;
		}

		const step = this.getSteps()[ stepIndex ];

		return (
			<div className="woocommerce-task-tax">
				<Card className="is-narrow">
					{ step ? (
						<Stepper
							isPending={ isPending || isWaitingForSettings }
							isVertical={ true }
							currentStep={ step.key }
							steps={ this.getSteps() }
						/>
					) : (
						<div className="woocommerce-task-tax__success">
							<span
								className="woocommerce-task-tax__success-icon"
								role="img"
								aria-labelledby="woocommerce-task-tax__success-message"
							>
								🎊
							</span>
							<H id="woocommerce-task-tax__success-message">
								{ __( 'Good news!', 'woocommerce-admin' ) }
							</H>
							<p>
								{ interpolateComponents( {
									mixedString: __(
										'{{strong}}Jetpack{{/strong}} and {{strong}}WooCommerce Services{{/strong}} ' +
											'can automate your sales tax calculations for you.',
										'woocommerce-admin'
									),
									components: {
										strong: <strong />,
									},
								} ) }
							</p>
							<Button
								isPrimary
								isBusy={
									Object.keys( taxSettings ).length &&
									isTaxSettingsRequesting
								}
								onClick={ () => {
									recordEvent(
										'tasklist_tax_setup_automated_proceed',
										{
											setup_automatically: true,
										}
									);
									this.updateAutomatedTax( true );
								} }
							>
								{ __( 'Yes please', 'woocommerce-admin' ) }
							</Button>
							<Button
								onClick={ () => {
									recordEvent(
										'tasklist_tax_setup_automated_proceed',
										{
											setup_automatically: false,
										}
									);
									this.updateAutomatedTax( false );
								} }
							>
								{ __(
									"No thanks, I'll configure taxes manually",
									'woocommerce-admin'
								) }
							</Button>
						</div>
					) }
				</Card>
			</div>
		);
	}
}

export default compose(
	withWCApiSelect( ( select ) => {
		const { getOptions } = select( 'wc-api' );

		const { getActivePlugins, isJetpackConnected } = select(
			PLUGINS_STORE_NAME
		);
		const activePlugins = getActivePlugins();
		const pluginsToActivate = difference(
			[ 'jetpack', 'woocommerce-services' ],
			activePlugins
		);
		const options = getOptions( [
			'wc_connect_options',
			'woocommerce_setup_jetpack_opted_in',
		] );
		const connectOptions = get( options, 'wc_connect_options', {} );
		const tosAccepted =
			connectOptions.tos_accepted ||
			options.woocommerce_setup_jetpack_opted_in;

		return {
			isJetpackConnected: isJetpackConnected(),
			pluginsToActivate,
			tosAccepted,
		};
	} ),
	withSelect( ( select, ownProps ) => {
		const {
			getSettings,
			getSettingsError,
			isGetSettingsRequesting,
		} = select( SETTINGS_STORE_NAME );

		const { general: generalSettings = {} } = getSettings( 'general' );
		const isGeneralSettingsError = Boolean( getSettingsError( 'general' ) );
		const isGeneralSettingsRequesting = isGetSettingsRequesting(
			'general'
		);
		const countryCode = getCountryCode(
			generalSettings.woocommerce_default_country
		);

		const { tax: taxSettings = {} } = getSettings( 'tax' );
		const isTaxSettingsError = Boolean( getSettingsError( 'tax' ) );
		const isTaxSettingsRequesting = isGetSettingsRequesting( 'tax' );

		const isWaitingForSettings =
			isGeneralSettingsRequesting || isTaxSettingsRequesting;

		const isStoreLocationComplete = Boolean(
			generalSettings.woocommerce_store_address &&
				generalSettings.woocommerce_default_country &&
				generalSettings.woocommerce_store_postcode
		);

		const {
			automatedTaxSupportedCountries = [],
			taxJarActivated,
		} = getSetting( 'onboarding', {} );

		const isTaxJarSupported =
			! taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
			ownProps.tosAccepted &&
			automatedTaxSupportedCountries.includes( countryCode );

		const automatedTaxEnabled =
			taxSettings.wc_connect_taxes_enabled === 'yes';

		return {
			isGeneralSettingsError,
			isGeneralSettingsRequesting,
			generalSettings,
			countryCode,
			taxSettings,
			isTaxSettingsError,
			isTaxSettingsRequesting,
			isWaitingForSettings,
			isStoreLocationComplete,
			isTaxJarSupported,
			automatedTaxEnabled,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );
		const { updateAndPersistSettingsForGroup } = dispatch(
			SETTINGS_STORE_NAME
		);

		return {
			createNotice,
			updateAndPersistSettingsForGroup,
		};
	} )
)( Tax );
