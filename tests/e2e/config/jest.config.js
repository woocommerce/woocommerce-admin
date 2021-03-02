const path = require( 'path' );
// Eventually update e2e-environment to support playwright as well.
// const { jestConfig: baseE2Econfig } = require( '@woocommerce/e2e-environment' );

module.exports = {
	preset: 'jest-playwright-preset',
	roots: [ path.resolve( __dirname, '../specs' ) ],
	testTimeout: 30000,
	setupFilesAfterEnv: [
		path.resolve( __dirname, '../setup-env.js' ),
		'expect-playwright',
	],
	testMatch: [ '**/*.(test|spec).(j|t)s', '*.(test|spec).(j|t)s' ],
};
