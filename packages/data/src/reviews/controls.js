/**
 * External dependencies
 */
import { controls as dataControls } from '@wordpress/data-controls';

import apiFetch from '@wordpress/api-fetch';

export const fetchWithHeaders = ( options ) => {
	return {
		type: 'FETCH_WITH_HEADERS',
		options,
	};
};

const controls = {
	...dataControls,
	FETCH_WITH_HEADERS( { options } ) {
		let headers;
		return apiFetch( { ...options, parse: false } )
			.then( ( response ) => {
				headers = response.headers;
				return response.json();
			} )
			.then( ( data ) => ( { headers, data } ) );
	},
};

export default controls;
