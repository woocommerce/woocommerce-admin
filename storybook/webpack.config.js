/**
 * External dependencies
 */
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = ( { config: storybookConfig } ) => {
	// @todo import / share this
	const wcAdminConfigModuleRules = [
		{
			parser: {
				amd: false,
			},
		},
		{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.js?$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						[ '@babel/preset-env', { loose: true, modules: 'commonjs' } ],
					],
					plugins: [ 'transform-es2015-template-literals' ],
				},
			},
			include: new RegExp( '/node_modules\/(' +
				'|acorn-jsx' +
				'|d3-array' +
				'|debug' +
				'|regexpu-core' +
				'|unicode-match-property-ecmascript' +
				'|unicode-match-property-value-ecmascript)/'
			),
		},
		{ test: /\.md$/, use: 'raw-loader' },
		{
			test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
			loader: 'url-loader',
		},
		{
			test: /\.s?css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				{
					// postcss loader so we can use autoprefixer and theme Gutenberg components
					loader: 'postcss-loader',
					options: {
						config: {
							path: 'postcss.config.js',
						},
					},
				},
				{
					loader: 'sass-loader',
					query: {
						includePaths: [ 'client/stylesheets/abstracts' ],
						data:
							'@import "node_modules/@wordpress/base-styles/_colors.scss"; ' +
							'@import "node_modules/@wordpress/base-styles/_variables.scss"; ' +
							'@import "node_modules/@wordpress/base-styles/_mixins.scss"; ' +
							'@import "node_modules/@wordpress/base-styles/_breakpoints.scss"; ' +
							'@import "node_modules/@wordpress/base-styles/_animations.scss"; ' +
							'@import "node_modules/@wordpress/base-styles/_z-index.scss"; ' +
							'@import "_colors"; ' +
							'@import "_variables"; ' +
							'@import "_breakpoints"; ' +
							'@import "_mixins"; ',
					},
				},
			],
		},
	];

	storybookConfig.module.rules.push(
		{
			test: /\/stories\/.+\.js$/,
			loaders: [ require.resolve( '@storybook/source-loader' ) ],
			enforce: 'pre',
		},
		...wcAdminConfigModuleRules
	);

	// @todo import / share this
	storybookConfig.resolve.alias = {
		'gutenberg-components': path.resolve( __dirname, 'node_modules/@wordpress/components/src' ),
		// @todo - remove once https://github.com/WordPress/gutenberg/pull/16196 is released.
		'react-spring': 'react-spring/web.cjs',
		'@woocommerce/wc-admin-settings': path.resolve(
			__dirname,
			'client/settings/index.js'
		),
	};

	storybookConfig.plugins.push(
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} )
	);

	return storybookConfig;
};
