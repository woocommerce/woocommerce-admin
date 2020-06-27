module.exports = {
	extends: [
		'plugin:react-hooks/recommended',
		require.resolve( './custom.js' ),
		'plugin:@wordpress/eslint-plugin/recommended',
	],
	globals: {
		wcSettings: 'readonly',
	},
	plugins: [ '@wordpress' ],
	rules: {
		'jsdoc/valid-types': 'warn',
		'jsdoc/check-tag-names': 'warn',
		radix: 'error',
		yoda: [ 'error', 'never' ],
	},
};
