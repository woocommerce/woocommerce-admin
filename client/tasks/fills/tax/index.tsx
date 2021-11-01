/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Card, CardBody } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import { OPTIONS_STORE_NAME, SETTINGS_STORE_NAME } from '@woocommerce/data';
import { queueRecordEvent } from '@woocommerce/tracks';
import { registerPlugin } from '@wordpress/plugins';
import { useEffect, useState } from '@wordpress/element';
import { WooOnboardingTask } from '@woocommerce/onboarding';

/**
 * Internal dependencies
 */
import { redirectToTaxSettings, SettingsSelector } from './utils';
import { createNoticesFromResponse } from '../../../lib/notices';
import { Partners } from './partners';
import { WooCommerceTax } from './woocommerce-tax/woocommerce-tax';

const Tax = ( { onComplete, query } ) => {
	const [ isPending, setIsPending ] = useState( false );
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { createNotice } = useDispatch( 'core/notices' );
	const { updateAndPersistSettingsForGroup } = useDispatch(
		SETTINGS_STORE_NAME
	);
	const { generalSettings, taxSettings } = useSelect( ( select ) => {
		const { getSettings } = select(
			SETTINGS_STORE_NAME
		) as SettingsSelector;

		return {
			generalSettings: getSettings( 'general' ).general,
			// @Todo this should be removed as soon as https://github.com/woocommerce/woocommerce-admin/pull/7841 is merged.
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
		}
	}, [] );

	const childProps = {
		isPending,
		onAutomate,
		onManual,
		onDisable,
	};

	return (
		<div className="woocommerce-task-tax">
			<Card className="woocommerce-task-card">
				<CardBody>
					{ query.partner === 'woocommerce-tax' ? (
						<WooCommerceTax { ...childProps } />
					) : (
						<Partners { ...childProps } />
					) }
				</CardBody>
			</Card>
		</div>
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
