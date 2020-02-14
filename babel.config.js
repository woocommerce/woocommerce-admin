const e2eBabelConfig = require( '@woocommerce/e2e-env' ).babelConfig;

module.exports = function( api ) {
	api.cache( true );

	return {
		...e2eBabelConfig,
		presets: [
			...e2eBabelConfig.presets,
			'@wordpress/babel-preset-default',
		],
		plugins: [
			'@babel/plugin-transform-async-to-generator',
			'transform-class-properties',
			[ '@babel/transform-react-jsx', {
				pragma: 'createElement',
			} ],
			[
				'@wordpress/babel-plugin-import-jsx-pragma',
				{
					scopeVariable: 'createElement',
					source: '@wordpress/element',
					isDefault: false,
				},
			],
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
