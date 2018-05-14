/** @format */

const https = require( 'https' );
const fs = require( 'fs' );
var dir = 'built-assets';

if ( !fs.existsSync( dir ) ) {
	fs.mkdirSync( dir );
}

https.get( 'https://downloads.wordpress.org/plugin/gutenberg.2.8.0.zip', function( response ) {
	response.on( 'data', function( data ) {
		fs.writeFileSync( 'built-assets/gutenberg.zip', data );
	} );

	response.on( 'end', function() {
		/**
		 * 1. unzip
		 * 2. Replace this.wp -> _window.wp
		 * 3. Replace this.lodash -> _window.lodash
		 * 4. Replace this.React -> _window.React
		 * 5. Add self-invoking function wrap, injecting window as _window arg
		 */
	} );
} );
