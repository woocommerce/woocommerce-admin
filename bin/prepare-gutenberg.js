/** @format */
const fs = require( 'fs' );

const wpGlobals = [ 'is-shallow-equal', 'element' ];

function modify( filename ) {
	const file = `tests/unit/built-assets/gutenberg/${ filename }/build/index.js`;
	fs.readFile( file, 'utf-8', function( err, data ) {
		if ( err ) throw err;
		const wp = data.replace( /this\.wp/g, '_window.wp' );
		const lodash = wp.replace( /this\.lodash/g, '_window.lodash' );
		const react = lodash.replace( /this\.React/g, '_window.React' );
		const last = '( function ( _window ) { \n' + react + '\n' + '} ( window ) )';

		fs.writeFile( file, last, 'utf-8', function( err ) {
			if ( err ) throw err;
			console.log( `${ filename } modified` );
		} );
	} );
}

wpGlobals.forEach( modify );
