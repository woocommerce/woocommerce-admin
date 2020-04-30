/**
 * External dependencies
 */
import { Component, Suspense, lazy } from '@wordpress/element';
import { compose } from '@wordpress/compose';

/**
 * WooCommerce dependencies
 */
import { Spinner } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled } from 'dashboard/utils';
import CustomizableDashboard from './customizable';

const ProfileWizard = lazy( () =>
	import( /* webpackChunkName: "profile-wizard" */ '../profile-wizard' )
);

class Dashboard extends Component {
	render() {
		const { path, profileItems, query } = this.props;

		if (
			isOnboardingEnabled() &&
			! profileItems.completed &&
			! window.wcAdminFeatures.homepage
		) {
			return (
				<Suspense fallback={ <Spinner /> }>
					<ProfileWizard query={ query } />
				</Suspense>
			);
		}

		if ( window.wcAdminFeatures[ 'analytics-dashboard/customizable' ] ) {
			return (
				<CustomizableDashboard query={ query } path={ path } />
			);
		}

		return null;
	}
}

export default compose(
	withSelect( ( select ) => {
		if ( ! isOnboardingEnabled() ) {
			return;
		}

		const { getProfileItems } = select( 'wc-api' );
		const profileItems = getProfileItems();

		return { profileItems };
	} )
)( Dashboard );
