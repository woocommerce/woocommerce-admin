const path = require( 'path' );
const { jestConfig: baseE2Econfig } = require( '@woocommerce/e2e-environment' );

process.env.JEST_PUPPETEER_CONFIG = path.resolve(
	__dirname,
	'/jest-playwright.config.js'
);

console.log( baseE2Econfig.setupFilesAfterEnv );
console.log( baseE2Econfig );
module.exports = {
	// ...baseE2Econfig,
	// Specify the path of your project's E2E tests here.
	preset: 'jest-playwright-preset',
	roots: [ path.resolve( __dirname, '../specs' ) ],
	testTimeout: 30000,
	setupFilesAfterEnv: [
		path.resolve( __dirname, '../setup-env.js' ),
		'expect-playwright',
	],
};
