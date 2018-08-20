/**
 * Returns a string representation of a sorted query object.
 *
 * @format
 * @param {Object} query Current state
 * @return {String}       Query Key
 */

export function getQueryKey( query = {} ) {
	return JSON.stringify( query, Object.keys( query ).sort() );
}
