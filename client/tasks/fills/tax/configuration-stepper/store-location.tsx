/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { ConfigurationStepProps } from '.';
import { getCountryCode } from '../../../../dashboard/utils';
import { default as StoreLocationForm } from '../../steps/location';
import { SettingsSelector } from '../utils';

export const StoreLocation: React.FC< ConfigurationStepProps > = ( {
	nextStep,
} ) => {
	const { updateAndPersistSettingsForGroup } = useDispatch(
		SETTINGS_STORE_NAME
	);
	const { generalSettings } = useSelect( ( select ) => {
		const { getSettings } = select(
			SETTINGS_STORE_NAME
		) as SettingsSelector;

		return {
			generalSettings: getSettings( 'general' )?.general,
		};
	} );

	return (
		<StoreLocationForm
			onComplete={ ( values ) => {
				const country = getCountryCode( values.countryState );
				recordEvent( 'tasklist_tax_set_location', {
					country,
				} );
				nextStep();
			} }
			isSettingsRequesting={ false }
			settings={ generalSettings }
			updateAndPersistSettingsForGroup={
				updateAndPersistSettingsForGroup
			}
		/>
	);
};
