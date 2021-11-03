/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Card, CardBody, Spinner } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import {
	ONBOARDING_STORE_NAME,
	OPTIONS_STORE_NAME,
	SETTINGS_STORE_NAME,
} from '@woocommerce/data';
import { queueRecordEvent, recordEvent } from '@woocommerce/tracks';
import { registerPlugin } from '@wordpress/plugins';
import { updateQueryString } from '@woocommerce/navigation';
import { useEffect, useState, createElement } from '@wordpress/element';
import { WooOnboardingTask } from '@woocommerce/onboarding';

/**
 * Internal dependencies
 */
import {
	redirectToTaxSettings,
	SettingsSelector,
	supportsAvalara,
} from './utils';
import { Card as AvalaraCard } from './avalara/card';
import { Card as WooCommerceTaxCard } from './woocommerce-tax/card';
import { createNoticesFromResponse } from '../../../lib/notices';
import { getCountryCode } from '~/dashboard/utils';
import { ManualConfiguration } from './manual-configuration';
import { Partners } from './partners';
import { WooCommerceTax } from './woocommerce-tax';

const TaskCard = ( { children } ) => {
	return (
		<Card className="woocommerce-task-card">
			<CardBody>{ children }</CardBody>
		</Card>
	);
};

const Tax = ( { onComplete, query } ) => {
	const [ isPending, setIsPending ] = useState( false );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateAndPersistSettingsForGroup } = useDispatch(
		SETTINGS_STORE_NAME
	);
	const {
		generalSettings,
		isResolving,
		tasksStatus,
		taxSettings,
	} = useSelect( ( select ) => {
		const { getSettings, hasFinishedResolution } = select(
			SETTINGS_STORE_NAME
		) as SettingsSelector;

		return {
			generalSettings: getSettings( 'general' ).general,
			isResolving:
				! hasFinishedResolution( 'getSettings', [ 'general' ] ) ||
				! select( ONBOARDING_STORE_NAME ).hasFinishedResolution(
					'getTasksStatus'
				),
			// @Todo this should be removed as soon as https://github.com/woocommerce/woocommerce-admin/pull/7841 is merged.
			tasksStatus: select( ONBOARDING_STORE_NAME ).getTasksStatus(),
			taxSettings: getSettings( 'tax' ).tax || {},
		};
	} );

	const onManual = async () => {
		setIsPending( true );
		if ( generalSettings.woocommerce_calc_taxes !== 'yes' ) {
			updateAndPersistSettingsForGroup( 'tax', {
				tax: {
					...taxSettings,
					wc_connect_taxes_enabled: 'no',
				},
			} );
			updateAndPersistSettingsForGroup( 'general', {
				general: {
					...generalSettings,
					woocommerce_calc_taxes: 'yes',
				},
			} )
				.then( () => redirectToTaxSettings() )
				.catch( ( error ) => {
					setIsPending( false );
					createNoticesFromResponse( error );
				} );
		} else {
			redirectToTaxSettings();
		}
	};

	const onAutomate = () => {
		setIsPending( true );
		updateAndPersistSettingsForGroup( 'tax', {
			tax: {
				...taxSettings,
				wc_connect_taxes_enabled: 'yes',
			},
		} );
		updateAndPersistSettingsForGroup( 'general', {
			general: {
				...generalSettings,
				woocommerce_calc_taxes: 'yes',
			},
		} );

		createNotice(
			'success',
			__(
				"You're awesome! One less item on your to-do list ✅",
				'woocommerce-admin'
			)
		);
		onComplete();
	};

	const onDisable = () => {
		setIsPending( true );
		queueRecordEvent( 'tasklist_tax_connect_store', {
			connect: false,
			no_tax: true,
		} );

		updateOptions( {
			woocommerce_no_sales_tax: true,
			woocommerce_calc_taxes: 'no',
		} ).then( () => {
			window.location.href = getAdminLink( 'admin.php?page=wc-admin' );
		} );
	};

	useEffect( () => {
		const { auto } = query;

		if ( auto === 'true' ) {
			onAutomate();
			return;
		}

		recordEvent( 'wcadmin_tasklist_tax_view_options', {} );
	}, [] );

	const getVisiblePartners = () => {
		const countryCode = getCountryCode(
			generalSettings?.woocommerce_default_country
		);
		const {
			automatedTaxSupportedCountries = [],
			taxJarActivated,
		} = tasksStatus;

		const partners = [
			{
				id: 'woocommerce-tax',
				card: WooCommerceTaxCard,
				component: WooCommerceTax,
				isVisible:
					! taxJarActivated && // WCS integration doesn't work with the official TaxJar plugin.
					automatedTaxSupportedCountries.includes(
						getCountryCode(
							generalSettings?.woocommerce_default_country
						)
					),
			},
			{
				id: 'avalara',
				card: AvalaraCard,
				component: null,
				isVisible: supportsAvalara( countryCode ),
			},
		];

		return partners.filter( ( partner ) => partner.isVisible );
	};

	const partners = getVisiblePartners();

	const getCurrentPartner = () => {
		if ( ! query.partner ) {
			return null;
		}

		return (
			partners.find( ( partner ) => partner.id === query.partner ) || null
		);
	};

	useEffect( () => {
		if ( partners.length > 1 || query.partner ) {
			return;
		}

		if ( partners.length === 1 && partners[ 0 ].component ) {
			updateQueryString( {
				partner: partners[ 0 ].id,
			} );
		}
	}, [ partners ] );

	const childProps = {
		isPending,
		onAutomate,
		onManual,
		onDisable,
	};

	if ( isResolving ) {
		return <Spinner />;
	}

	const currentPartner = getCurrentPartner();

	if ( ! partners.length ) {
		return (
			<TaskCard>
				<ManualConfiguration { ...childProps } />
			</TaskCard>
		);
	}

	if ( currentPartner ) {
		return (
			<TaskCard>
				{ createElement( currentPartner.component, childProps ) }
			</TaskCard>
		);
	}

	return (
		<Partners>
			{ partners.map( ( partner ) =>
				createElement( partner.card, childProps )
			) }
		</Partners>
	);
};

registerPlugin( 'wc-admin-onboarding-task-tax', {
	scope: 'woocommerce-tasks',
	render: () => (
		<WooOnboardingTask id="tax">
			{ ( { onComplete, query } ) => (
				<Tax onComplete={ onComplete } query={ query } />
			) }
		</WooOnboardingTask>
	),
} );
