/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { omit } from 'lodash';

/**
 * WordPress dependencies
 */
import { getBlockType } from '@woodash/registration';
import { withFilters } from '@wordpress/components';

export const Block = props => {
	const { name } = props;
	const blockType = getBlockType( name );

	if ( ! blockType ) {
		return null;
	}

	// Add a class based on this block's name.
	const className = 'woo-dash__widget woo-dash__' + name.replace( /\//, '--' );

	// `render` is a function or component describing how to render a block.
	const Component = blockType.render;

	// @TODO We might want to pass through data attributes based on location?
	return <Component { ...omit( blockType, 'render' ) } className={ className } />;
};

Block.propTypes = {
	name: PropTypes.string.isRequired,
};

export default withFilters( 'WooCommerceDashboard.BlockRender' )( Block );
