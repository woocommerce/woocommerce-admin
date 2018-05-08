/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { DASHBOARD_LOCATIONS, getBlocksByLocation } from '@woocommerce/registration';

/**
 * Internal dependencies
 */
import Block from './block';

export default class BlockList extends Component {
	render() {
		const { location } = this.props;
		const blocks = getBlocksByLocation( location );

		return blocks.map( ( block, i ) => <Block key={ i } name={ block.name } /> );
	}
}

BlockList.propTypes = {
	location: PropTypes.oneOf( DASHBOARD_LOCATIONS ),
};
