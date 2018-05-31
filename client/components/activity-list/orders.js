/** @format */
/**
 * External dependencies
 */
import { Component, compose } from '@wordpress/element';
import { Dashicon, withAPIData } from '@wordpress/components';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import ActivityCard from 'components/activity-card';

class OrdersList extends Component {
	renderCard( order, i ) {
		return (
			<ActivityCard
				key={ i }
				label="Order"
				icon={ <Dashicon icon="format-aside" /> }
				date={ order.date_created }
			>
				{ 'Zé Marques placed order #99' }
				{ '4 products - $198.34' }
				[ Completed ]
			</ActivityCard>
		);
	}

	render() {
		const { orders } = this.props;
		const { data = [] } = orders;

		return <div>{ data.length < 1 ? <p>Loading</p> : data.map( this.renderCard ) }</div>;
	}
}

OrdersList.propTypes = {
	orders: PropTypes.object.isRequired,
};

export default compose( [
	withAPIData( () => ( {
		orders: '/wc/v2/orders',
	} ) ),
] )( OrdersList );
