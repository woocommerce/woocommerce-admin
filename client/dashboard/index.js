/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';
import CustomizableDashboard from './customizable';
import ProfileWizard from './profile-wizard';
import CartModal from './profile-wizard/cart-modal';
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled, getProductIdsForCart } from 'dashboard/utils';

class Dashboard extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showCartModal: false,
		};
	}
	componentDidUpdate( prevProps ) {
		const profileItems = get( this.props, 'profileItems', {} );
		const prevProfileItems = get( prevProps, 'profileItems', {} );

		// We only want to show the modal during the transition between the profile wizard and dashboard and if products were selected.
		if ( profileItems.completed && ! prevProfileItems.completed ) {
			const productIds = getProductIdsForCart( profileItems );
			if ( productIds.length ) {
				/* eslint-disable react/no-did-update-set-state */
				this.setState( { showCartModal: true } );
				/* eslint-enable react/nod-ddi-update-set-state */
			}
		}
	}

	render() {
		const { path, profileItems, query } = this.props;
		const { showCartModal } = this.state;

		if ( isOnboardingEnabled() && ! profileItems.completed ) {
			return <ProfileWizard query={ query } />;
		}

		if ( isOnboardingEnabled() && showCartModal ) {
			return <CartModal onClose={ () => this.setState( { showCartModal: false } ) } />;
		}

		if ( window.wcAdminFeatures[ 'analytics-dashboard/customizable' ] ) {
			return <CustomizableDashboard query={ query } path={ path } />;
		}

		return null;
	}
}

export default compose(
	withSelect( select => {
		if ( ! isOnboardingEnabled() ) {
			return;
		}

		const { getProfileItems } = select( 'wc-api' );
		const profileItems = getProfileItems();

		return { profileItems };
	} )
)( Dashboard );
