/**
 * External dependencies
 */
const MiniCssExtractPlugin = require( '@automattic/mini-css-extract-plugin-with-rtl' );
const path = require( 'path' );
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );
const postcssPlugins = require( '@wordpress/postcss-plugins-preset' );

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpackConfig = ( packageDir ) => ( {
	mode: NODE_ENV,
	entry: {
		style: path.join( packageDir, 'src/style.scss' ),
	},
	output: {
		path: path.join( packageDir, 'build-style' ),
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				exclude: [ /storybook\/wordpress/, /build-style\/*\/*.css/ ],
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: postcssPlugins,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: [
									path.resolve(
										__dirname,
										'../../client/stylesheets/abstracts'
									),
								],
							},
							// webpackImporter: true,
							additionalData:
								'@use "sass:math";' +
								'@import "_colors"; ' +
								'@import "_variables"; ' +
								'@import "_breakpoints"; ' +
								'@import "_mixins"; ',
						},
					},
				],
			},
		],
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin( {
			filename: 'style.css',
		} ),
		new WebpackRTLPlugin( {
			filename: 'style-rtl.css',
			minify: NODE_ENV === 'development' ? false : { safe: true },
		} ),
	],
} );

module.exports = { webpackConfig };
