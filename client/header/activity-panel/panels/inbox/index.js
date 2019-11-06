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
import { getUnreadNotes } from '../../unread-indicators';
import InboxPanelContent from './panel-content';

/**
 * WooCommerce dependencies
 */
import { Panel, Tabs } from '@woocommerce/components';

class Inbox extends Component {
	render() {
		const { hasUnreadNotes } = this.props;
		const title = __( 'Inbox', 'woocommerce-admin' );

		return (
			<Fragment>
				<Tabs.Item name="inbox" title={ title } icon="mail" unread={ hasUnreadNotes } />
				<Panel.Content name="inbox" title={ title }>
					{ () => <InboxPanelContent /> }
				</Panel.Content>
			</Fragment>
		);
	}
}

export default withSelect( select => {
	const hasUnreadNotes = getUnreadNotes( select );

	return { hasUnreadNotes };
} )( Inbox );
