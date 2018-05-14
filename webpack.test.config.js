/**
 * /* eslint-disable
 *
 * @format
 */

const path = require( 'path' );
// const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const NODE_ENV = process.env.NODE_ENV || 'development';

const wpGlobals = [ 'element' ];

const entryPoints = wpGlobals.reduce( ( entries, global ) => {
	entries[ global ] = `gutenberg/${ global }/index.js`;
	return entries;
}, {} );

const webpackConfig = {
	mode: NODE_ENV,
	entry: entryPoints,
	output: {
		path: path.resolve( 'tests/unit/gutenberg' ),
		filename: '[name]/index.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},
		],
	},
	resolve: {
		modules: [ 'node_modules' ],
	},
};

if ( webpackConfig.mode !== 'production' ) {
	webpackConfig.devtool = process.env.SOURCEMAP || 'source-map';
}

module.exports = webpackConfig;
