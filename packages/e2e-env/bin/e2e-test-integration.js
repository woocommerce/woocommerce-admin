#!/usr/bin/env node

const { spawnSync } = require( 'child_process' );
const program = require( 'commander' );
const path = require( 'path' );
const fs = require( 'fs' );
const getAppPath = require( '../utils/app-root' );

program
	.usage( '<file ...> [options]' )
	.option( '--dev', 'Development mode' )
	.parse( process.argv );

const testEnvVars = {
	NODE_ENV: 'test:e2e',
	JEST_PUPPETEER_CONFIG: path.resolve(
		__dirname,
		'../config/jest-puppeteer.config.js'
	),
	NODE_CONFIG_DIR: path.resolve(
		__dirname,
		'../config'
	),
};

if ( program.dev ) {
	testEnvVars.JEST_PUPPETEER_CONFIG = path.resolve(
		__dirname,
		'../config/jest-puppeteer.dev.config.js'
	);
}

const envVars = Object.assign( {}, process.env, testEnvVars );

const appPath = getAppPath();
let configPath = path.resolve( __dirname, '../config/jest.config.js' );

// Look for a Jest config in the dependent app's path.
if ( appPath ) {
	const appConfig = path.resolve( appPath, 'tests/e2e-tests/config/jest.config.js' );

	if ( fs.existsSync( appConfig ) ) {
		configPath = appConfig;
	}
}

const jestProcess = spawnSync(
	'jest',
	[
		'--maxWorkers=1',
		'--config=' + configPath,
		'--rootDir=./',
		'--verbose',
		program.args,
	],
	{
		stdio: 'inherit',
		env: envVars,
	}
);

console.log( 'Jest exit code: ' + jestProcess.status );

// Pass Jest exit code to npm
process.exit( jestProcess.status );
