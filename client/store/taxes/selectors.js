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
 * Returns taxes report details for a specific report query.
 *
 * @param  {Object} state  Current state
 * @param  {Object} query  Report query paremters
 * @return {Object}        Report details
 */
function getTaxes( state, query = {} ) {
	return get( state, [ 'taxes', getJsonString( query ) ], [] );
}
export default {
	getTaxes,
	/**
	 * Returns true if a taxes request is pending.
	 *
	 * @param  {Object} state  Current state
	 * @return {Object}        True if the `getTaxes` request is pending, false otherwise
	 */
	isGetTaxesRequesting( state, ...args ) {
		return select( 'core/data' ).isResolving( 'wc-admin', 'getTaxes', args );
	},
	/**
	 * Returns true if a taxes request has returned an error.
	 *
	 * @param  {Object} state  Current state
	 * @param  {Object} query  Report query paremters
	 * @return {Object}        True if the `getTaxes` request has failed, false otherwise
	 */
	isGetTaxesError( state, query ) {
		return ERROR === getTaxes( state, query );
	},
};
