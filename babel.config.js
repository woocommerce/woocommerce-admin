const { babelConfig: e2eBabelConfig } = require( '@woocommerce/e2e-environment' );

module.exports = function( api ) {
	api.cache( true );

	return {
        ...e2eBabelConfig,
        presets: [
              ...e2eBabelConfig.presets,
              '@wordpress/babel-preset-default',
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
