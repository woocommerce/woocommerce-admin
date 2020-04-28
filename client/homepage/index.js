/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import ProfileWizard from '../profile-wizard';
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled } from 'dashboard/utils';
import Layout from './layout';

const Homepage = ( { profileItems, query } ) => {
	if ( isOnboardingEnabled() && ! profileItems.completed ) {
		return <ProfileWizard query={ query } />;
	}

	return <Layout />;
};

export default compose(
	withSelect( ( select ) => {
		if ( ! isOnboardingEnabled() ) {
			return;
		}

		const { getProfileItems } = select( 'wc-api' );
		const profileItems = getProfileItems();

		return { profileItems };
	} )
)( Homepage );
