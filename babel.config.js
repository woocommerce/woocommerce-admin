const {
	babelConfig: e2eBabelConfig,
} = require( '@woocommerce/e2e-environment' );

module.exports = function ( api ) {
	api.cache( true );

	return {
		...e2eBabelConfig,
		presets: [
			'@wordpress/babel-preset-default',
			[
				'@babel/preset-env',
				{
					targets: {
						node: 'current',
						browsers: [
							'> 1%',
							'ie >= 11',
							'last 1 Android versions',
							'last 1 ChromeAndroid versions',
							'last 2 Chrome versions',
							'last 2 Firefox versions',
							'last 2 Safari versions',
							'last 2 iOS versions',
							'last 2 Edge versions',
							'last 2 Opera versions',
						],
					},
					useBuiltIns: 'usage',
					corejs: {
						version: 3,
						proposals: true,
					},
				},
			],
		],
		plugins: [
			/**
			 * This allows arrow functions as class methods so that binding
			 * methods to `this` in the constructor isn't required.
			 */
			'@babel/plugin-proposal-class-properties',
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
