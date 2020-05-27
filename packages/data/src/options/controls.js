/**
 * External dependencies
 */
import { controls as dataControls } from '@wordpress/data-controls';

let optionNames = [];

export const getOptionsToRequest = ( optionName ) => {
	return {
		type: 'GET_OPTIONS_TO_REQUEST',
		optionName,
	};
};

export const controls = {
	...dataControls,
	GET_OPTIONS_TO_REQUEST( { optionName } ) {
		optionNames.push( optionName );

		return new Promise( resolve => {
			setTimeout( () => {
				resolve( optionNames.join(',') );

				// Clear option names after all resolved;
				setTimeout( () => {
					optionNames = [];
				}, 1 )
			}, 1 );
		} );
	},
};
