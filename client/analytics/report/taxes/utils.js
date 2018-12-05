/** @format */
/**
 * External dependencies
 */

export function getTaxCode( tax ) {
	return [ tax.country, tax.state, tax.name ].join( '-' );
}
