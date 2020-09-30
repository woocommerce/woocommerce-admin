module.exports = {
	'*.scss': [ 'npm run lint:css' ],
	'(client|packages)/**/*.js': [
		'wp-scripts format-js ./packages ./client',
		'npm run lint:js',
		'npm run test -- --bail --findRelatedTests',
	],
	'*.php': [ 'php -d display_errors=1 -l', 'composer run-script phpcs' ],
};
