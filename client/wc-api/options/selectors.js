/** @format */

/**
 * External dependencies
 */
import { isNil } from 'lodash';

/**
 * Internal dependencies
 */
import { DEFAULT_REQUIREMENT } from '../constants';
import { getResourceName } from '../utils';

const getOptions = ( getResource, requireResource ) => (
	optionNames,
	requirement = DEFAULT_REQUIREMENT
) => {
	const resourceName = getResourceName( 'options', optionNames );
	const options = {};

	const names = requireResource( requirement, resourceName ).data || optionNames;

	names.forEach( name => {
		const data =
			getResource( getResourceName( 'options', name ) ).data || wcSettings.preloadOptions[ name ];
		if ( data ) {
			options[ name ] = data;
		}
	} );
	return options;
};

const getOptionsError = getResource => optionNames => {
	return getResource( getResourceName( 'options', optionNames ) ).error;
};

const isOptionsRequesting = getResource => optionNames => {
	const { lastReceived, lastRequested } = getResource( getResourceName( 'options', optionNames ) );

	if ( ! isNil( lastRequested ) && isNil( lastReceived ) ) {
		return true;
	}

	return lastRequested > lastReceived;
};

export default {
	getOptions,
	getOptionsError,
	isOptionsRequesting,
};
