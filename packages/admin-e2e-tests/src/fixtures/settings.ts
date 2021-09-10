/**
 * External dependencies
 */
import { Setting } from '@woocommerce/api';
/**
 * Internal dependencies
 */
import { httpClient } from './http-client';

export async function resetSettingsGroupToDefault( settingsGroup: string ) {
	const settingsClient = Setting.restRepository( httpClient );
	const settings = await settingsClient.list( settingsGroup );
	if ( ! settings.length ) {
		return;
	}

	const settingUpdates = settings
		.map( async ( setting ) => {
			// The rest api doesn't allow selects to be set to ''.
			if ( setting.type == 'select' && setting.default == '' ) {
				return false;
			}
			const defaultSetting = {
				group_id: settingsGroup,
				id: setting.id,
				value: setting.default,
			};

			return {
				updateRequest: await settingsClient.update(
					settingsGroup,
					defaultSetting.id as any,
					defaultSetting
				),
				setting,
			};
		} )
		.filter( ( setting ) => !! setting );
	const responses = await Promise.all( settingUpdates );
	for ( let s = 0; s < responses.length; s++ ) {
		const response = responses[ s ];
		if ( response !== false && response.setting.type != 'multiselect' ) {
			expect( response.updateRequest.value ).toBe(
				response.setting.default
			);
		}
	}
}
