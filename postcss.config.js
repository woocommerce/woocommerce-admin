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
				// the following key is needed because postcss-themes plugin is run after the
				// sass to css transform, and `darken(theme(button), 20%)` isn't valid
				// as far as sass is concerned (it has no idea what to do with
				// `theme(button)`)
				buttonDarken: '#003c54',
			},
			themes: {
				'woocommerce-page': {
					primary: '#7f54b3',
					secondary: '#c9356e',
					toggle: '#674399',
					button: '#c9356e',
					outlines: '#c9356e',
					// the following key is needed because postcss-themes plugin is run after the
					// sass to css transform, and `darken(theme(button), 20%)` isn't valid
					// as far as sass is concerned (it has no idea what to do with
					// `theme(button)`)
					buttonDarken: '#782042',
				},
			},
		} ),
		require( 'autoprefixer' )( { grid: true } ),
		require( 'postcss-color-function' ),
	],
};
