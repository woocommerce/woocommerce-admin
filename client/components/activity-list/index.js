/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import OrdersList from './orders';

class ActivityList extends Component {
	render() {
		const { section } = this.props;

		switch ( section ) {
			case 'orders':
				return <OrdersList />;
			default:
				return <p>Coming soon…</p>;
		}
	}
}

ActivityList.propTypes = {
	section: PropTypes.oneOf( [ 'orders', 'reviews', 'stock', 'extensions' ] ).isRequired,
};

export default ActivityList;
