/** @format */

const https = require( 'https' );
const fs = require( 'fs' );
const download = require( 'download-file' );

const dir = 'tests/unit/built-assets';
const url = 'https://downloads.wordpress.org/plugin/gutenberg.2.8.0.zip';

if ( ! fs.existsSync( dir ) ) {
	fs.mkdirSync( dir );
}


download( url, { directory: dir }, function( err ) {
	if ( err ) throw err;
} );
