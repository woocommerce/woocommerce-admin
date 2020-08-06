/**
 * External dependencies
 */
import crypto from 'crypto';

export const hashExportArgs = ( args ) => {
	return crypto
		.createHash( 'md5' )
		.update( JSON.stringify( args ) )
		.digest( 'hex' );
};
