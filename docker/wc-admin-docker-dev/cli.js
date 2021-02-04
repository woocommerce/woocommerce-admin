/**
 * External dependencies
 */
const yargs = require( 'yargs' ).strict();

/**
 * Internal dependencies
 **/
const commands = require( './commands' );
const runFromDocker = require( './run-from-docker' );
const containerId = require( './container-id' );

module.exports = function cli() {
	for ( const i in commands ) {
		const command = commands[ i ];
		yargs.command( {
			command: i,
			describe: command.describe,
			handler() {
				if ( command.type === 'docker' ) {
					runFromDocker( containerId, command.commands );
				} else {
					const handlerOutput = require( command.handler );
					// eslint-disable-next-line no-console
					console.log( handlerOutput );
				}
			},
		} );
	}
	return yargs;
};
