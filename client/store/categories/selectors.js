/** @format */

/**
 * External dependencies
 */
import { get } from 'lodash';
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { ERROR } from 'store/constants';
import { getJsonString } from 'store/utils';

/**
 * Returns categories report details for a specific report query.
 *
 * @param  {Object} state  Current state
 * @param  {Object} query  Report query paremters
 * @return {Object}        Report details
 */
function getCategories( state, query = {} ) {
	return get( state, [ 'categories', getJsonString( query ) ], [] );
}

export default {
	getCategories,

	/**
	 * Returns true if a categories request is pending.
	 *
	 * @param  {Object} state  Current state
	 * @return {Object}        True if the `getCategories` request is pending, false otherwise
	 */
	isGetCategoriesRequesting( state, ...args ) {
		return select( 'core/data' ).isResolving( 'wc-admin', 'getCategories', args );
	},

	/**
	 * Returns true if a categories request has returned an error.
	 *
	 * @param  {Object} state  Current state
	 * @param  {Object} query  Report query paremters
	 * @return {Object}        True if the `getCategories` request has failed, false otherwise
	 */
	isGetCategoriesError( state, query ) {
		return ERROR === getCategories( state, query );
	},
};
