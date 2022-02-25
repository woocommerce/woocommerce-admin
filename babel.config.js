const {
	babelConfig: e2eBabelConfig,
} = require( '@woocommerce/e2e-environment' );

module.exports = function ( api ) {
	api.cache( true );

	return {
		...e2eBabelConfig,
		presets: [
			...e2eBabelConfig.presets,
			'@babel/preset-typescript',
			'@wordpress/babel-preset-default',
		],
		sourceType: 'unambiguous',
		plugins: [
			/**
			 * This allows arrow functions as class methods so that binding
			 * methods to `this` in the constructor isn't required.
			 */
			'@babel/plugin-proposal-class-properties',
		],
		ignore: [
			/**
			 * An invalid syntax in _locutus_shared_bc.js:6 causes the "BABEL_PARSE_ERROR"
			 * We only import 'locutus/php/strings/number_format' so it's safe to ignore this file for now until the authors fix the issue
			 */
			"packages/number/node_modules/locutus/php/_locutus_shared/_locutus_shared_bc.js"
		],
		env: {
			production: {
				plugins: [
					[
						'@wordpress/babel-plugin-makepot',
						{
							output: 'languages/woocommerce-admin.po',
						},
					],
				],
			},
		},
	};
};
