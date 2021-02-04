/**
 * External dependencies
 **/
const { spawn } = require( 'child_process' );

module.exports = function ( containerId, commands ) {
	const baseArguments = [ 'exec', '-it', containerId, '/bin/bash' ];

	if ( commands.length > 1 ) {
		baseArguments.push( '-c' );
	}

	if ( commands.length ) {
		baseArguments.push( commands.join( '&&' ) );
	}

	spawn( 'docker', baseArguments, {
		stdio: 'inherit',
	} );
};
