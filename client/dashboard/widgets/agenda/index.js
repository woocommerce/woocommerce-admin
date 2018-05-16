/** @format */
/**
 * External dependencies
 */
import { __, _n } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import AgendaAccordion from './accordion';
import AgendaItem from './item';
import Card from 'components/card';

import './style.scss';

// TODO Hook up to API Data once agenda API is available
class Agenda extends Component {
	render() {
		return (
			<Card title={ __( 'Your agenda', 'woo-dash' ) } className="woo-dash__agenda-card">
				<AgendaAccordion
					count={ 2 }
					title={ _n(
						'Order needs to be fulfilled',
						'Orders needs to be fulfilled',
						2,
						'woo-dash'
					) }
				>
					<AgendaItem actionLabel={ __( 'Fulfill', 'woo-dash' ) }>Order #99</AgendaItem>
					<AgendaItem actionLabel={ __( 'Fulfill', 'woo-dash' ) }>Order #101</AgendaItem>
				</AgendaAccordion>
				<AgendaAccordion
					count={ 1 }
					title={ _n( 'Order awaiting payment', 'Orders awaiting payment', 1, 'woo-dash' ) }
				>
					<AgendaItem actionLabel={ __( 'Mark as Paid', 'woo-dash' ) }>Order #99</AgendaItem>
				</AgendaAccordion>
			</Card>
		);
	}
}

export default Agenda;
