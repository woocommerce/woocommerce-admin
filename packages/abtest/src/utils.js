/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import {
	ABTEST_OPTION_NAME,
	CONTROL,
	EXPERIMENT,
	WC_ADMIN_NAMESPACE,
} from './constants';

/**
 * Get named key from localStorage.
 *
 * @param {string} name Key name.
 *
 * @return {string} - Value of named key.
 */
export const getCachedGroup = ( name ) => window.localStorage.getItem( name );

/**
 * Set localStorage named key to value.
 *
 * @param {string} name
 * @param {string} value
 */
export const setCachedGroup = ( name, value ) =>
	window.localStorage.setItem( name, value );

/**
 * Fetch abtest option from backend.
 *
 * @param {string} name
 */
const getABTestOption = ( name ) => {
	return apiFetch( {
		path: addQueryArgs( `${ WC_ADMIN_NAMESPACE }/options`, {
			options: `${ ABTEST_OPTION_NAME }_${ name }`,
		} ),
	} );
};

/**
 * Set abtest option in backend.
 *
 * @param {string} name
 * @param {string} value
 */
const setABTestOption = ( name, value ) => {
	apiFetch( {
		method: 'POST',
		path: `${ WC_ADMIN_NAMESPACE }/options`,
		data: { [ `${ ABTEST_OPTION_NAME }_${ name }` ]: value },
	} );
};

/**
 * Fetch option from backend and set localStorage accordingly.
 *
 * If option doesn't exist, then pick a group, update in the backend,
 * set localStorage, and trigger a tracks event.
 *
 * If apiFetch fails, default to control.
 *
 * @param {string} name
 *
 * @return {string} - Group name (CONTROL or EXPERIMENT).
 */
export const getAndSetGroup = async ( name ) => {
	try {
		const option = await getABTestOption( name );
		const group =
			option[ `${ ABTEST_OPTION_NAME }_${ name }` ] || getRandomGroup();

		if ( ! option[ `${ ABTEST_OPTION_NAME }_${ name }` ] ) {
			setABTestOption( name, group );
			// Then fire tracks event.
		}

		setCachedGroup( name, group );
		return group;
	} catch {
		setCachedGroup( name, CONTROL );
		return CONTROL;
	}
};

/**
 * Randomly select between CONTROL and EXPERIMENT groups.
 */
export const getRandomGroup = () =>
	Math.random() < 0.5 ? CONTROL : EXPERIMENT;
