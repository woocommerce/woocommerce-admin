/** @format */

function create( resourceNames, data ) {
	return [ ...createNotice( resourceNames, data ) ];
}

function createNotice( resourceNames, data ) {
	const resourceName = 'notices';

	if ( resourceNames.includes( resourceName ) ) {
		// @TODO: this should append the notice to the existing state.
		return [ { [ 'notices' ]: { data: [ data[ resourceName ] ] } } ];
	}
	return [];
}

export default {
	create,
};
