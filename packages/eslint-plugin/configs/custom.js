module.exports = {
	plugins: [ '@wordpress', '@woocommerce' ],
	rules: {
		'@wordpress/dependency-group': 'off',
		'@woocommerce/dependency-group': 'error',
	},
	overrides: [
		{
			files: [ '**/tests/**/*.js' ],
			extends: [ 'plugin:@wordpress/eslint-plugin/test-unit' ],
		},
	],
};
