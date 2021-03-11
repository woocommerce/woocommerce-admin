const path = require( 'path' );
const { jestConfig: baseE2Econfig } = require( '@woocommerce/e2e-environment' );

console.log( 'JESTCONFIG' );
console.log( baseE2Econfig );
module.exports = {
	...baseE2Econfig,
	// Specify the path of your project's E2E tests here.
	setupFilesAfterEnv: [
		...baseE2Econfig.setupFilesAfterEnv,
		path.resolve( __dirname, './setup-env.js' ),
	],
	moduleFileExtensions: [ 'js', 'ts' ],
	roots: [ path.resolve( __dirname, '../specs' ) ],
	testMatch: [ '**/*.(test|spec).(j|t)s', '*.(test|spec).(j|t)s' ],
	testTimeout: 30000,
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
	},
};
