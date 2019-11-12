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
import ReviewsPanelContent from './panel-content';

/**
 * WooCommerce dependencies
 */
import { ActivityPanelContent, ActivityPanelTab } from '@woocommerce/components';

class Reviews extends Component {
	render() {
		const { hasUnapprovedReviews } = this.props;
		const title = __( 'Reviews', 'woocommerce-admin' );

		return (
			<Fragment>
				<ActivityPanelTab
					name="reviews"
					title={ title }
					icon="star"
					unread={ hasUnapprovedReviews }
				/>
				<ActivityPanelContent name="reviews" title={ title }>
					{ () => <ReviewsPanelContent hasUnapprovedReviews={ hasUnapprovedReviews } /> }
				</ActivityPanelContent>
			</Fragment>
		);
	}
}

export default withSelect( select => {
	const hasUnapprovedReviews = getUnapprovedReviews( select );

	return { hasUnapprovedReviews };
} )( Reviews );
