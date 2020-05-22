/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import { Suspense, lazy } from '@wordpress/element';

/**
 * WooCommerce dependencies
 */
import { Spinner } from '@woocommerce/components';
import { ONBOARDING_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled } from 'dashboard/utils';

const ProfileWizard = lazy( () =>
	import( /* webpackChunkName: "profile-wizard" */ '../profile-wizard' )
);
import Layout from './layout';

const Homepage = ( { profileItems, query } ) => {
	if ( isOnboardingEnabled() && ! profileItems.completed ) {
		return (
			<Suspense fallback={ <Spinner /> }>
				<ProfileWizard query={ query } />
			</Suspense>
		);
	}

	return <Layout query={ query } />;
};

export default compose(
	withSelect( ( select ) => {
		if ( ! isOnboardingEnabled() ) {
			return;
		}

		const { getProfileItems } = select( ONBOARDING_STORE_NAME );
		const profileItems = getProfileItems();

		return { profileItems };
	} )
)( Homepage );
