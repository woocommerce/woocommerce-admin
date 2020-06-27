module.exports = {
	extends: [ 'plugin:@woocommerce/eslint-plugin/recommended' ],
	rules: {
		// temporary conversion to warnings until the below are all handled.
		'jsdoc/check-param-names': 'warn',
		'jsdoc/require-param': 'warn',
		'jsdoc/require-property': 'warn',
		'jsdoc/no-undefined-types': 'warn',
		'jsdoc/require-param-type': 'warn',
		'jsdoc/require-property-description': 'warn',
		'jsdoc/require-property-name': 'warn',
		'jsdoc/check-property-names': 'warn',
		'jsdoc/require-property-type': 'warn',
		'@woocommerce/dependency-group': 'warn',
	},
};
