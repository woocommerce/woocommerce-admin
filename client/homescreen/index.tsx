/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { identity } from 'lodash';
import {
	ONBOARDING_STORE_NAME,
	withOnboardingHydration,
	WCDataSelector,
} from '@woocommerce/data';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import type { History } from 'history';
/**
 * Internal dependencies
 */
import Layout from './layout';
import { getAdminSetting } from '~/utils/admin-settings';

type HomescreenProps = ReturnType< typeof withSelectHandler > & {
	query: Record< string, string >;
};

const Homescreen = ( { profileItems, query }: HomescreenProps ) => {
	const { completed: profilerCompleted, skipped: profilerSkipped } =
		profileItems || {};
	if ( ! profilerCompleted && ! profilerSkipped ) {
		( getHistory() as History ).push(
			getNewPath( {}, '/setup-wizard', {} )
		);
	}

	return <Layout query={ query } />;
};

const onboardingData = getAdminSetting( 'onboarding', {} );

const withSelectHandler = ( select: WCDataSelector ) => {
	const { getProfileItems } = select( ONBOARDING_STORE_NAME );
	const profileItems = getProfileItems();

	return { profileItems };
};

export default compose(
	onboardingData.profile
		? withOnboardingHydration( {
				profileItems: onboardingData.profile,
		  } )
		: identity,
	withSelect( withSelectHandler )
)( Homescreen );
