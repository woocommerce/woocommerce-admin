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
 */
const getABTestOption = () => {
	return apiFetch( {
		path: addQueryArgs( `${ WC_ADMIN_NAMESPACE }/options`, {
			options: ABTEST_OPTION_NAME,
		} ),
	} );
};

/**
 * Set abtest option in backend.
 *
 * Note: Groups for multiple experiments are stored in a single array in the db.
 * As such, we should limit the number of ABTests that are displayed on a page to 1.
 * If we attempt to display more, only one of the experiment groups will be persisted.
 *
 * @param {Object} option Object containing experiment name keys to group values.
 */
const setABTestOption = ( option ) => {
	apiFetch( {
		method: 'POST',
		path: `${ WC_ADMIN_NAMESPACE }/options`,
		data: { [ ABTEST_OPTION_NAME ]: option },
	} );
};

/**
 * Fetch option from backend and set localStorage accordingly.
 *
 * If name doesn't exist, then we pick a value, and update in the backend.
 * We also set localStorage here and trigger a tracks event after we
 * persist this result.
 *
 * @param {string} name Key name.
 *
 * @return {string} - Group name (CONTROL or EXPERIMENT).
 */
export const getAndSetGroup = async ( name ) => {
	try {
		const option = await getABTestOption();
		const group = option[ ABTEST_OPTION_NAME ][ name ] || getRandomGroup();

		if ( ! option[ ABTEST_OPTION_NAME ][ name ] ) {
			setABTestOption( {
				...option[ ABTEST_OPTION_NAME ],
				[ name ]: group,
			} );
			// Then fire tracks event.
		}

		setCachedGroup( name, group );

		return group;
	} catch {
		return CONTROL; // We've failed to initialize. Return control and don't track.
	}
};

/**
 * Randomly select between CONTROL and EXPERIMENT groups.
 */
export const getRandomGroup = () =>
	Math.random() < 0.5 ? CONTROL : EXPERIMENT;
