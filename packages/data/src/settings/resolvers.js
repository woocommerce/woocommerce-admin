/** @format */

/**
 * Internal dependencies
 */
import { updateSettingsForGroup, updateErrorForGroup } from './actions';
import { getAllSettings } from '@woocommerce/wc-admin-settings';

export function* getSetting( group ) {
	try {
		return updateSettingsForGroup( group, getAllSettings() );
	} catch ( e ) {
		return yield updateErrorForGroup( group, null, e );
	}
}
