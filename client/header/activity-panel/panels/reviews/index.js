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
import { getUnapprovedReviews } from '../../unread-indicators';
import Tabs from '../../slotfill/tabs';
import Panel from '../../slotfill/panel';
import ReviewsPanelContent from './panel-content';

class Reviews extends Component {
	render() {
		const { hasUnapprovedReviews } = this.props;
		const title = __( 'Reviews', 'woocommerce-admin' );

		return (
			<Fragment>
				<Tabs.Item name="reviews" title={ title } icon="star" unread={ hasUnapprovedReviews } />
				<Panel.Content name="reviews" title={ title }>
					{ () => <ReviewsPanelContent hasUnapprovedReviews={ hasUnapprovedReviews } /> }
				</Panel.Content>
			</Fragment>
		);
	}
}

export default withSelect( select => {
	const hasUnapprovedReviews = getUnapprovedReviews( select );

	return { hasUnapprovedReviews };
} )( Reviews );
