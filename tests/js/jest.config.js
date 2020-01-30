/**
 * @flow strict
 * @format
 */

// https://jestjs.io/docs/en/configuration.html

module.exports = {
	rootDir: '../../',
	collectCoverageFrom: [
		'client/**/*.js',
		'packages/**/*.js',
		'!**/node_modules/**',
		'!**/vendor/**',
		'!**/test/**',
	],
	moduleDirectories: [
		'node_modules',
		'<rootDir>/client',
		'<rootDir>/packages',
	],
	moduleNameMapper: {
		tinymce: '<rootDir>/tests/js/mocks/tinymce',
		'@woocommerce/(settings|wc-admin-settings)': '<rootDir>/client/settings/index.js',
		'@woocommerce/(.*)': '<rootDir>/packages/$1/src',
	},
	setupFiles: [
		'<rootDir>/node_modules/@wordpress/jest-preset-default/scripts/setup-globals.js',
		'<rootDir>/tests/js/setup-globals',
	],
	preset: '@wordpress/jest-preset-default',
	testPathIgnorePatterns: [
		'/node_modules/',
		'<rootDir>/.*/build/',
		'<rootDir>/.*/build-module/',
		'<rootDir>/tests/e2e-tests',
		'<rootDir>/vendor',
	],
	reporters:
		'TRAVIS' in process.env && 'CI' in process.env
		? [
			'<rootDir>/node_modules/@wordpress/jest-preset-default/scripts/travis-fold-passes-reporter.js',
		]
		: undefined,
	verbose: true,
};
