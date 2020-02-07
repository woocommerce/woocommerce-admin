/**
 * External dependencies
 */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = ( { config: storybookConfig } ) => {
	storybookConfig.module.rules.push(
		{
			test: /\/stories\/.+\.js$/,
			loaders: [ require.resolve( '@storybook/source-loader' ) ],
			enforce: 'pre',
		},
	);

	storybookConfig.plugins.push(
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} )
	);

	return storybookConfig;
};
