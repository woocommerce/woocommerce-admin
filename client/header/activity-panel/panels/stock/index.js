/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
// import classnames from 'classnames';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import { getUnreadStock } from '../../unread-indicators';
import StockPanelContent from './panel-content';

/**
 * WooCommerce dependencies
 */
import { Panel, Tabs } from '@woocommerce/components';

class Stock extends Component {
	render() {
		const { hasLowStock } = this.props;
		const title = __( 'Stock', 'woocommerce-admin' );

		return (
			<Fragment>
				<Tabs.Item name="stock" title={ title } icon="clipboard" unread={ hasLowStock } />
				<Panel.Content name="stock" title={ title }>
					{ () => <StockPanelContent /> }
				</Panel.Content>
			</Fragment>
		);
	}
}

export default withSelect( select => {
	const hasLowStock = getUnreadStock( select );

	return { hasLowStock };
} )( Stock );
