/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { difference, filter } from 'lodash';
import { Fragment, useEffect, useMemo, useState } from '@wordpress/element';
import interpolateComponents from 'interpolate-components';
import { Link, Stepper, Plugins } from '@woocommerce/components';
import {
	OPTIONS_STORE_NAME,
	PLUGINS_STORE_NAME,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent, queueRecordEvent } from '@woocommerce/tracks';
import { Text } from '@woocommerce/experimental';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { AUTOMATION_PLUGINS, hasCompleteAddress } from './utils';
import Connect from '../../../dashboard/components/connect';
import { createNoticesFromResponse } from '../../../lib/notices';
import { getCountryCode } from '../../../dashboard/utils';
import StoreLocation from '../steps/location';
import './tax.scss';

export const ConfigurationStepper = ( {
	onDisable,
	onEnable,
	onSkip,
	onManual,
	supportsAutomatedTaxes,
} ) => {
	const [ pluginsToActivate, setPluginsToActivate ] = useState( [] );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const {
		activePlugins,
		generalSettings,
		isJetpackConnected,
		isResolving,
		tosAccepted,
	} = useSelect( ( select ) => {
		const { getSettings } = select( SETTINGS_STORE_NAME );
		const { getOption, hasFinishedResolution } = select(
			OPTIONS_STORE_NAME
		);
		const { getActivePlugins } = select( PLUGINS_STORE_NAME );

		return {
			activePlugins: getActivePlugins(),
			generalSettings: getSettings( 'general' )?.general,
			isJetpackConnected: select(
				PLUGINS_STORE_NAME
			).isJetpackConnected(),
			isResolving:
				! hasFinishedResolution( 'getOption', [
					'woocommerce_setup_jetpack_opted_in',
				] ) ||
				! hasFinishedResolution( 'getOption', [
					'wc_connect_options',
				] ),
			tosAccepted:
				getOption( 'wc_connect_options' )?.tos_accepted ||
				getOption( 'woocommerce_setup_jetpack_opted_in' ) === '1',
		};
	} );
	const [ stepIndex, setStepIndex ] = useState(
		hasCompleteAddress( generalSettings ) ? 1 : 0
	);

	useEffect( () => {
		const remainingPlugins = difference(
			AUTOMATION_PLUGINS,
			activePlugins
		);
		if ( remainingPlugins.length <= pluginsToActivate.length ) {
			return;
		}
		setPluginsToActivate( remainingPlugins );
	}, [ activePlugins ] );

	const getVisibleSteps = () => {
		let step2Label, agreementText;

		if ( pluginsToActivate.includes( 'woocommerce-services' ) ) {
			step2Label = __(
				'Install Jetpack and WooCommerce Tax',
				'woocommerce-admin'
			);
			agreementText = __(
				'By installing Jetpack and WooCommerce Tax you agree to the {{link}}Terms of Service{{/link}}.',
				'woocommerce-admin'
			);
		} else {
			step2Label = __( 'Install Jetpack', 'woocommerce-admin' );
			agreementText = __(
				'By installing Jetpack you agree to the {{link}}Terms of Service{{/link}}.',
				'woocommerce-admin'
			);
		}

		const allSteps = [
			{
				key: 'store_location',
				label: __( 'Set store location', 'woocommerce-admin' ),
				description: __(
					'The address from which your business operates',
					'woocommerce-admin'
				),
				content: (
					<StoreLocation
						onComplete={ ( values ) => {
							const country = getCountryCode(
								values.countryState
							);
							recordEvent( 'tasklist_tax_set_location', {
								country,
							} );
							nextStep();
						} }
						isSettingsRequesting={ false }
						settings={ generalSettings }
					/>
				),
				visible: true,
			},
			{
				key: 'plugins',
				label: step2Label,
				description: __(
					'Jetpack and WooCommerce Tax allow you to automate sales tax calculations',
					'woocommerce-admin'
				),
				content: (
					<Fragment>
						<Plugins
							onComplete={ ( activatedPlugins, response ) => {
								createNoticesFromResponse( response );
								recordEvent(
									'tasklist_tax_install_extensions',
									{
										install_extensions: true,
									}
								);
								updateOptions( {
									woocommerce_setup_jetpack_opted_in: true,
								} );
								nextStep();
							} }
							onError={ ( errors, response ) =>
								createNoticesFromResponse( response )
							}
							onSkip={ () => {
								queueRecordEvent(
									'tasklist_tax_install_extensions',
									{
										install_extensions: false,
									}
								);
								onManual();
							} }
							skipText={ __(
								'Set up manually',
								'woocommerce-admin'
							) }
							onAbort={ () => onDisable() }
							abortText={ __(
								"I don't charge sales tax",
								'woocommerce-admin'
							) }
						/>
						{ ! tosAccepted && (
							<Text
								variant="caption"
								className="woocommerce-task__caption"
								size="12"
								lineHeight="16px"
							>
								{ interpolateComponents( {
									mixedString: agreementText,
									components: {
										link: (
											<Link
												href={
													'https://wordpress.com/tos/'
												}
												target="_blank"
												type="external"
											/>
										),
									},
								} ) }
							</Text>
						) }
					</Fragment>
				),
				visible:
					( pluginsToActivate.length || ! tosAccepted ) &&
					supportsAutomatedTaxes,
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
						onConnect={ () => {
							recordEvent( 'tasklist_tax_connect_store', {
								connect: true,
								no_tax: false,
							} );
						} }
						onSkip={ () => {
							queueRecordEvent( 'tasklist_tax_connect_store', {
								connect: false,
								no_tax: false,
							} );
							onManual();
						} }
						skipText={ __(
							'Set up tax rates manually',
							'woocommerce-admin'
						) }
						onAbort={ () => onDisable() }
						abortText={ __(
							"My business doesn't charge sales tax",
							'woocommerce-admin'
						) }
					/>
				),
				visible: ! isJetpackConnected && supportsAutomatedTaxes,
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
							disabled={ isResolving }
							isBusy={ isResolving }
							onClick={ () => {
								recordEvent( 'tasklist_tax_config_rates', {} );
								onManual();
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
												href="https://docs.woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_medium=product#section-1"
												target="_blank"
												type="external"
											/>
										),
									},
								} ) }
						</p>
					</Fragment>
				),
				visible: ! supportsAutomatedTaxes,
			},
		];

		return filter( allSteps, ( step ) => step.visible );
	};

	const steps = getVisibleSteps();

	const nextStep = () => {
		if ( stepIndex + 1 >= steps.length ) {
			return;
		}
		setStepIndex( { stepIndex: stepIndex + 1 } );
	};

	const step = steps[ stepIndex ];

	return (
		<Stepper
			isPending={ isResolving }
			isVertical={ true }
			currentStep={ step.key }
			steps={ steps }
		/>
	);
};
