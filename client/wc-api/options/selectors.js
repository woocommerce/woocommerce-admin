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

	const names = requireResource( requirement, resourceName ).data || [];

	names.forEach( name => {
		options[ name ] = getResource( getResourceName( 'options', name ) ).data;
	} );

	return options;
};

const getOptionError = getResource => name => {
	return getResource( getResourceName( 'options', name ) ).error;
};

const isGetOptionsRequesting = getResource => name => {
	const { lastReceived, lastRequested } = getResource( getResourceName( 'options', name ) );

	if ( ! isNil( lastRequested ) && isNil( lastReceived ) ) {
		return true;
	}

	return lastRequested > lastReceived;
};

export default {
	getOptions,
	getOptionError,
	isGetOptionsRequesting,
};
