const webpackOverride = require( '../webpack.config' );

module.exports = {
	stories: [
		// WooCommerce Admin / @woocommerce/components components
		'../../packages/components/src/**/stories/*.@(js|ts|tsx)',
		// WooCommerce Admin / @woocommerce/experimental components
		'../../packages/experimental/src/**/stories/*.@(js|ts|tsx)',
		'../../client/**/stories/*.js',
	],
	addons: [
		{
			name: '@storybook/addon-docs',
			options: { configureJSX: true },
		},
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-links',
	],

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},

	webpackFinal: webpackOverride,
};
