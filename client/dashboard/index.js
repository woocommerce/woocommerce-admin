/**
 * External dependencies
 */
import { Component, Suspense, lazy } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { identity } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { getAdminLink, getSetting } from '@woocommerce/wc-admin-settings';
import {
	ONBOARDING_STORE_NAME,
	withOnboardingHydration,
} from '@woocommerce/data';
import { Spinner } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import { isOnboardingEnabled } from 'dashboard/utils';

const CustomizableDashboard = lazy( () =>
	import( /* webpackChunkName: "customizable-dashboard" */ './customizable' )
);

class Dashboard extends Component {
	render() {
		const { path, profileItems, query } = this.props;
		const { completed: profileCompleted, skipped: profileSkipped, step: profilerStep } = profileItems;
		if (
			isOnboardingEnabled() &&
			! profileCompleted &&
			! profileSkipped &&
			! window.wcAdminFeatures.homescreen
		) {
			const lastStep = profilerStep ? `&step=${ profilerStep }` : '';
			window.location = getAdminLink(
				`admin.php?page=wc-admin&path=/profiler${ lastStep }`
			);
		}

		if ( window.wcAdminFeatures[ 'analytics-dashboard/customizable' ] ) {
			return (
				<Suspense fallback={ <Spinner /> }>
					<CustomizableDashboard query={ query } path={ path } />
				</Suspense>
			);
		}

		return null;
	}
}

export default compose(
	getSetting( 'onboarding', {} ).profile
		? withOnboardingHydration( getSetting( 'onboarding', {} ).profile )
		: identity,
	withSelect( ( select ) => {
		if ( ! isOnboardingEnabled() ) {
			return;
		}

		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		const profileItems = getProfileItems();

		return { profileItems };
	} )
)( Dashboard );
