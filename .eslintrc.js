/** @format */
const baseConfig = require( '@woocommerce/e2e-env' ).esLintConfig;

module.exports = {
	...baseConfig,
	root: true,
	parser: 'babel-eslint',
	extends: [
		...baseConfig.extends,
		'wpcalypso/react',
		'plugin:jsx-a11y/recommended',
	],
	plugins: [
		...baseConfig.plugins,
		'jsx-a11y',
	],
	env: {
		...baseConfig.env,
		browser: true,
		node: true,
	},
	globals: {
		...baseConfig.globals,
		wp: true,
		wpApiSettings: true,
		wcSettings: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		camelcase: 0,
		indent: 0,
		'max-len': [ 2, { code: 140 } ],
		'no-console': 1,
		'react/no-danger': 0,
		'react/react-in-jsx-scope': 0,
		'wpcalypso/import-no-redux-combine-reducers': 0,
		'wpcalypso/jsx-classname-namespace': 0,
		'wpcalypso/redux-no-bound-selectors': 1,
		'jsx-a11y/label-has-for': [ 'error', {
			required: 'id',
		} ]
	},
};
