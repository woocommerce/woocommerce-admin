/** @format */

/**
 * External dependencies
 */
import { uniqueId } from 'lodash';

function create( resourceNames, data ) {
	return [ ...createNotice( resourceNames, data ) ];
}

function createNotice( resourceNames, data ) {
	const resourceName = 'notices';

	if ( resourceNames.includes( resourceName ) ) {
		const notice = { ...{ id: uniqueId( 'notice-' ) }, ...data[ resourceName ] };
		// @TODO: this should append the notice to the existing state.
		return [ { [ 'notices' ]: { data: [ notice ] } } ];
	}
	return [];
}

export default {
	create,
};
