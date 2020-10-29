const path = require( 'path' );
const { jestConfig: baseE2Econfig } = require( '@woocommerce/e2e-environment' );

global.it = async function ( name, func ) {
	return await test( name, async () => {
		try {
			await func();
		} catch ( e ) {
			await fs.ensureDir( 'e2e/screenshots' );
			await page.screenshot( { path: `e2e/screenshots/${ name }.png` } );
			throw e;
		}
	} );
};

module.exports = {
	...baseE2Econfig,
	// Specify the path of your project's E2E tests here.
	roots: [ path.resolve( __dirname, '../specs' ) ],
	testTimeout: 30000,
};
