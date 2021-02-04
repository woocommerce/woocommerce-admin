/**
 * External dependencies
 */
const execSync = require( 'child_process' ).execSync;
const wpEnvHash = require( './wp-env-hash' );

const containerId = execSync(
	`docker ps -q --filter="name=^${ wpEnvHash }_wordpress"`
)
	.toString()
	.trim();

module.exports = containerId;
