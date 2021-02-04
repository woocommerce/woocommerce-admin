/**
 * External dependencies
 */
const execSync = require( 'child_process' ).execSync;
const wpEnvHash = require( './wp-env-hash' );

const containerId = execSync(
	`docker ps -q --filter="name=^${ wpEnvHash }_mysql"`
)
	.toString()
	.trim();

const mysqlPort = execSync( `docker port ${ containerId } 3306/tcp` )
	.toString()
	.split( ':' )[ 1 ]
	.trim();

module.exports = 'Mysql Port: ' + mysqlPort;
