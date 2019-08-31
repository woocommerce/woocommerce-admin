/** @format */

/**
 * Internal dependencies
 */
import { DEFAULT_REQUIREMENT } from '../constants';
import { CURRENT_USER_DATA } from '@woocommerce-admin/constants';

const getCurrentUserData = ( getResource, requireResource ) => (
	requirement = DEFAULT_REQUIREMENT
) => {
	const initialState = CURRENT_USER_DATA;
	return requireResource( requirement, 'current-user-data' ).data || initialState;
};

export default {
	getCurrentUserData,
};
