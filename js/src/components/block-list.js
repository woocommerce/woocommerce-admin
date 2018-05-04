/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { DASHBOARD_LOCATIONS, getBlockTypesByLocation } from '@woodash/registration';

/**
 * Internal dependencies
 */
import Block from './block';

export default class BlockList extends Component {
	render() {
		const { location } = this.props;
		const blocks = getBlockTypesByLocation( location );

		return (
			<Fragment>
				{ blocks.map( ( b, i ) => <Block key={ i } { ...b } /> ) }
			</Fragment>
		);
	}
}

BlockList.propTypes = {
	location: PropTypes.oneOf( DASHBOARD_LOCATIONS ),
};
