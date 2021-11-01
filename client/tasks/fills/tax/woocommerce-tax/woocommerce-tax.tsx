/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { difference } from 'lodash';
import { useSelect } from '@wordpress/data';
import { Spinner } from '@woocommerce/components';
import {
	ONBOARDING_STORE_NAME,
	PLUGINS_STORE_NAME,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';

/**
 * Internal dependencies
 */
import {
	AUTOMATION_PLUGINS,
	hasCompleteAddress,
	SettingsSelector,
} from '../utils';
import { AutomatedTaxes } from './automated-taxes';
import { ConfigurationStepper } from './configuration-stepper';
import { getCountryCode } from '~/dashboard/utils';
import './woocommerce-tax.scss';

export const WooCommerceTax = ( {
	isPending,
	onAutomate,
	onManual,
	onDisable,
} ) => {
	const {
		generalSettings,
		isJetpackConnected,
		isResolving,
		pluginsToActivate,
		tasksStatus,
	} = useSelect( ( select ) => {
		const { getSettings } = select(
			SETTINGS_STORE_NAME
		) as SettingsSelector;
		const { getActivePlugins } = select( PLUGINS_STORE_NAME );
		const activePlugins = getActivePlugins();

		return {
			generalSettings: getSettings( 'general' ).general,
			isJetpackConnected: select(
				PLUGINS_STORE_NAME
			).isJetpackConnected(),
			isResolving:
				! select( PLUGINS_STORE_NAME ).hasFinishedResolution(
					'isJetpackConnected'
				) ||
				! select(
					SETTINGS_STORE_NAME
				).hasFinishedResolution( 'getSettings', [ 'general' ] ) ||
				! select( ONBOARDING_STORE_NAME ).hasFinishedResolution(
					'getTasksStatus'
				),
			pluginsToActivate: difference( AUTOMATION_PLUGINS, activePlugins ),
			// @Todo this should be removed as soon as https://github.com/woocommerce/woocommerce-admin/pull/7841 is merged.
			tasksStatus: select( ONBOARDING_STORE_NAME ).getTasksStatus(),
		};
	} );

	const supportsAutomatedTaxes = () => {
		const {
			automatedTaxSupportedCountries = [],
			taxJarActivated,
		} = tasksStatus;

		return (
			! taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
			automatedTaxSupportedCountries.includes(
				getCountryCode( generalSettings?.woocommerce_default_country )
			)
		);
	};

	const canAutomateTaxes = () => {
		return (
			hasCompleteAddress( generalSettings ) &&
			! pluginsToActivate.length &&
			isJetpackConnected &&
			supportsAutomatedTaxes()
		);
	};

	if ( isResolving ) {
		return <Spinner />;
	}

	const childProps = {
		isPending,
		onAutomate,
		onManual,
		onDisable,
		supportsAutomatedTaxes: supportsAutomatedTaxes(),
	};

	if ( canAutomateTaxes() ) {
		return <AutomatedTaxes { ...childProps } />;
	}

	return <ConfigurationStepper { ...childProps } />;
};
