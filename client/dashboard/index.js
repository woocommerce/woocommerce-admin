/** @format */
/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';
import CustomizableDashboard from './customizable';
import ProfileWizard from './profile-wizard';
import withSelect from 'wc-api/with-select';

class Dashboard extends Component {
	componentDidUpdate( prevProps ) {
		const profileItems = get( this.props, 'profileItems', {} );
		const prevProfileItems = get( prevProps, 'profileItems', {} );

		if ( profileItems.completed && ! prevProfileItems.completed ) {
			this.redirectToCart();
		}
	}

	getProductIds() {
		const profileItems = get( this.props, 'profileItems', {} );

		const productIds = profileItems.product_types.map(
			type =>
				wcSettings.onboarding.productTypes[ type ] &&
				wcSettings.onboarding.productTypes[ type ].product
		);

		const theme = wcSettings.onboarding.themes.find(
			themeData => themeData.slug === profileItems.theme
		);

		if ( theme && theme.id && ! theme.is_installed ) {
			productIds.push( theme.id );
		}

		return productIds;
	}

	redirectToCart() {
		if ( ! window.wcAdminFeatures.onboarding ) {
			return;
		}

		const productIds = this.getProductIds();
		if ( ! productIds.length ) {
			return;
		}

		const url = addQueryArgs( 'https://woocommerce.com/cart', {
			'wccom-back': window.location.href,
			'wccom-replace-with': productIds.join( ',' ),
		} );
		window.location = url;
	}

	render() {
		const { path, profileItems, query } = this.props;

		if ( window.wcAdminFeatures.onboarding && ! profileItems.completed ) {
			return <ProfileWizard query={ query } />;
		}

		if ( window.wcAdminFeatures[ 'analytics-dashboard/customizable' ] ) {
			return <CustomizableDashboard query={ query } path={ path } />;
		}

		return null;
	}
}

export default compose(
	withSelect( select => {
		if ( ! window.wcAdminFeatures.onboarding ) {
			return;
		}

		const { getProfileItems } = select( 'wc-api' );
		const profileItems = getProfileItems();

		return { profileItems };
	} )
)( Dashboard );
