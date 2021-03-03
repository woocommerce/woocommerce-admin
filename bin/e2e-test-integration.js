#!/usr/bin/env node

const { spawnSync } = require( 'child_process' );
const path = require( 'path' );
const fs = require( 'fs' );

const appPath = path.resolve( __dirname, '../tests/e2e' );
const nodeConfigDirs = [ path.resolve( __dirname, '../tests/e2e/config' ) ];

let testEnvVars = {
	NODE_ENV: 'test-e2e',
	NODE_CONFIG_DIR: nodeConfigDirs.join( ':' ),
	JEST_PLAYWRIGHT_CONFIG: nodeConfigDirs[ 0 ] + '/jest-playwright.config.js',
	node_config_dev: process.env.PWDEBUG ? 'yes' : 'no',
	jest_test_timeout: process.env.PWDEBUG ? 120000 : 30000,
};

// Check for running a specific script
if ( process.argv.length == 3 ) {
	// Check for both absolute and relative paths
	const testSpecAbs = path.resolve( process.argv[ 2 ] );
	const testSpecRel = path.resolve( appPath, process.argv[ 2 ] );
	if ( fs.existsSync( testSpecAbs ) ) {
		process.env.jest_test_spec = testSpecAbs;
	} else if ( fs.existsSync( testSpecRel ) ) {
		process.env.jest_test_spec = testSpecRel;
	}
}

let jestCommand = './node_modules/.bin/jest';
const jestArgs = [
	'--maxWorkers=1',
	'--rootDir=./',
	'--verbose',
	...process.argv.slice( 2 ),
];

if ( process.env.DEBUG ) {
	testEnvVars.E2E_DEBUG = 1;
}

const envVars = Object.assign( {}, process.env, testEnvVars );

let configPath = path.resolve(
	__dirname,
	'../tests/e2e/config/jest.config.js'
);

jestArgs.push( '--config=' + configPath );

const jestProcess = spawnSync( jestCommand, jestArgs, {
	stdio: 'inherit',
	env: envVars,
} );

console.log( 'Jest exit code: ' + jestProcess.status );

// Pass Jest exit code to npm
process.exit( jestProcess.status );
