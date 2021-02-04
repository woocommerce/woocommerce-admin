/**
 * External dependencies
 */
const path = require( 'path' );
const cwd = require( 'path' ).dirname( require.main.filename );
const crypto = require( 'crypto' );

const configPath = path.resolve( `${ cwd }/../../../.wp-env.json` );
const wpEnvHash = crypto
	.createHash( 'md5' )
	.update( configPath )
	.digest( 'hex' );

module.exports = wpEnvHash;
