/** @format */
/**
 * External dependencies
 */
import { __, _n } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import AgendaGroup from './group';
import AgendaItem from './item';
import Card from 'components/card';
import { getWpAdminLink } from 'lib/nav-utils';

import './style.scss';

// TODO Hook up to API Data once agenda API is available
class Agenda extends Component {
	render() {
		return (
			<Card title={ __( 'Your agenda', 'woo-dash' ) } className="woo-dash__agenda-card">
				<AgendaGroup
					count={ 2 }
					title={ _n(
						'Order needs to be fulfilled',
						'Orders need to be fulfilled',
						2,
						'woo-dash'
					) }
				>
					<AgendaItem onClick={ noop } actionLabel={ __( 'Fulfill', 'woo-dash' ) }>
						Order #99
					</AgendaItem>
					<AgendaItem
						href={ getWpAdminLink( '/edit.php?post_type=shop_order' ) }
						actionLabel={ __( 'Fulfill', 'woo-dash' ) }
					>
						Order #101
					</AgendaItem>
				</AgendaGroup>
				<AgendaGroup
					count={ 1 }
					title={ _n( 'Order awaiting payment', 'Orders awaiting payment', 1, 'woo-dash' ) }
					href={ getWpAdminLink( '/edit.php?post_status=wc-pending&post_type=shop_order' ) }
				/>
			</Card>
		);
	}
}

export default Agenda;
