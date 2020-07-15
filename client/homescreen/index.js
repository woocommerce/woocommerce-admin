/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import { identity } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { getAdminLink, getSetting } from '@woocommerce/wc-admin-settings';
import {
	ONBOARDING_STORE_NAME,
	withOnboardingHydration,
} from '@woocommerce/data';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled } from 'dashboard/utils';

import Layout from './layout';

const Homescreen = ( { profileItems, query } ) => {
	const { completed: profilerCompleted, skipped: profilerSkipped, step: profilerStep } = profileItems;
	if ( isOnboardingEnabled() && ! profilerCompleted && ! profilerSkipped ) {
		const lastStep = profilerStep ? `&step=${ profilerStep }` : '';
		window.location = getAdminLink(
			`admin.php?page=wc-admin&path=/profiler${ lastStep }`
		);
	}

	return <Layout query={ query } />;
};

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
)( Homescreen );
