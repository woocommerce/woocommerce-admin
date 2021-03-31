const { useE2EJestPuppeteerConfig } = require( '@woocommerce/e2e-environment' );

const puppeteerConfig = useE2EJestPuppeteerConfig( {
	launch: {
		args: [ '--incognito' ],
	},
} );

module.exports = puppeteerConfig;
