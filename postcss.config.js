module.exports = {
	plugins: [
		require( '@wordpress/postcss-themes' )( {
			// @todo A default is required for now. Fix postcss-themes to allow no default
			defaults: {
				primary: '#0085ba',
				secondary: '#11a0d2',
				toggle: '#11a0d2',
				button: '#0085ba',
				outlines: '#007cba',
			},
			themes: {
				// This space intentionally left blank.
			},
		} ),
		require( 'autoprefixer' )( { grid: true } ),
		require( 'postcss-color-function' ),
	],
};
