module.exports = {
	'*.scss': [ 'yarn run lint:css-fix' ],
	'(client|packages)/**/*.js': [
		'wp-scripts format-js',
		'wp-scripts lint-js',
		'yarn run test-staged',
	],
	'*.php': [ 'php -d display_errors=1 -l', 'composer run-script phpcs' ],
};
