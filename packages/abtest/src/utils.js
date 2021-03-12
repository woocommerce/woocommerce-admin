/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import {
	CONTROL,
	EXPERIMENT,
	OPTION_NAME,
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
		path: `${ WC_ADMIN_NAMESPACE }/options?options=${ OPTION_NAME }_${ name }`,
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
		data: { [ `${ OPTION_NAME }_${ name }` ]: value },
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
 * @param {string} name Experiment name.
 * @param {number} size Perentage size of experimental group.
 *
 * @return {string} - Group name (CONTROL or EXPERIMENT).
 */
export const getAndSetGroup = async ( name, size ) => {
	try {
		const option = await getABTestOption( name );
		const optionName = `${ OPTION_NAME }_${ name }`;
		const group = option[ optionName ] || getRandomGroup( size );

		if ( ! option[ optionName ] ) {
			setABTestOption( name, group );
		}

		setCachedGroup( name, group );
		recordABTestEvent( name, group, 'persisted' );
		return group;
	} catch {
		setCachedGroup( name, CONTROL );
		recordABTestEvent( name, CONTROL, 'fetch_failed' );
		return CONTROL;
	}
};

/**
 * Randomly select between CONTROL and EXPERIMENT groups.
 *
 * @param {number} size Percentage size of experiment group.
 */
export const getRandomGroup = ( size ) =>
	Math.random() * 100 < size ? EXPERIMENT : CONTROL;

/**
 * Check if we are between start and end timestamps.
 *
 * @param {number} start Start timestamp.
 * @param {number} end End timestamp.
 *
 * @return {boolean} - Whether test is active.
 */
export const isActive = ( start, end ) =>
	Date.now() >= start && Date.now() <= end;

/**
 * Send an A/B Test event.
 *
 * Either assign event (abtest_assign_variant) or serve event (abtest_serve_variant).
 *
 * @param {string} name A/B Test name.
 * @param {string} group A/B Test group.
 * @param {string} context Additional context (persisted, fetch_failed, from_cache, from_db).
 * @param {string} stage Stage of A/B Test. 'assign' (default) or 'serve'.
 */
export const recordABTestEvent = ( name, group, context, stage = 'assign' ) => {
	const properties = {
		abtest_name: name,
		abtest_group: group,
		context,
	};

	recordEvent(
		stage === 'assign' ? 'abtest_assign_variant' : 'abtest_serve_variant',
		properties
	);
};
