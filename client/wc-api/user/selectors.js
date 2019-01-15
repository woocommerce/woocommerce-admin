/** @format */

/**
 * Internal dependencies
 */
import { DEFAULT_REQUIREMENT } from '../constants';

const getCurrentUserData = ( getResource, requireResource ) => (
	requirement = DEFAULT_REQUIREMENT
) => {
	const initalState = wcAdminServer.currentUserData; // eslint-disable-line no-undef
	return requireResource( requirement, 'current-user-data' ).data || initalState;
};

export default {
	getCurrentUserData,
};
