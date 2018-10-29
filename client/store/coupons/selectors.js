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
 * Returns coupons report details for a specific report query.
 *
 * @param  {Object} state  Current state
 * @param  {Object} query  Report query paremters
 * @return {Object}        Report details
 */
function getCoupons( state, query = {} ) {
	return get( state, [ 'coupons', getJsonString( query ) ], [] );
}

export default {
	getCoupons,

	/**
	 * Returns true if a coupons request is pending.
	 *
	 * @param  {Object} state  Current state
	 * @return {Object}        True if the `getCoupons` request is pending, false otherwise
	 */
	isGetCouponsRequesting( state, ...args ) {
		return select( 'core/data' ).isResolving( 'wc-admin', 'getCoupons', args );
	},

	/**
	 * Returns true if a coupons request has returned an error.
	 *
	 * @param  {Object} state  Current state
	 * @param  {Object} query  Report query paremters
	 * @return {Object}        True if the `getCoupons` request has failed, false otherwise
	 */
	isGetCouponsError( state, query ) {
		return ERROR === getCoupons( state, query );
	},
};
