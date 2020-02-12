const path = require( 'path' );
const baseE2Econfig = require( '@woocommerce/e2e-env' ).jestConfig;

module.exports = {
    ...baseE2Econfig,
    // Where to look for test files
	roots: [ path.resolve( __dirname, '../specs' ) ],
};
