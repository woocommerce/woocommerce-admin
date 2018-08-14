/** @format */

export function serializeQuery( query ) {
	return JSON.stringify( query, Object.keys( query ).sort() );
}
