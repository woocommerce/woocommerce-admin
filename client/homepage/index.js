/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import { Suspense, lazy } from '@wordpress/element';
import { identity } from 'lodash';

/**
 * WooCommerce dependencies
 */
import { Spinner } from '@woocommerce/components';
import { withOptionsHydration, OPTIONS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import withSelect from 'wc-api/with-select';
import { isOnboardingEnabled } from 'dashboard/utils';

const ProfileWizard = lazy( () =>
	import( /* webpackChunkName: "profile-wizard" */ '../profile-wizard' )
);

const Homepage = ( { profileItems, query, blogname, blogdescription } ) => {
	console.log( blogname );
	console.log( blogdescription );
	if ( isOnboardingEnabled() && ! profileItems.completed ) {
		return (
			<Suspense fallback={ <Spinner /> }>
				<ProfileWizard query={ query } />
			</Suspense>
		);
	}

	return <div>Hello World</div>;
};

export default compose(
	window.wcSettings.preloadOptions
		? withOptionsHydration( {
				...window.wcSettings.preloadOptions,
		  } )
		: identity,
	withSelect( ( select ) => {
		if ( ! isOnboardingEnabled() ) {
			return;
		}

		const { getProfileItems } = select( 'wc-api' );
		const profileItems = getProfileItems();

		const { getOption, isResolving } = select( OPTIONS_STORE_NAME );
		const blogname = getOption( 'blogname' );
		const blogdescription = getOption( 'blogdescription' );

		console.log(
			'isResolving blogname',
			isResolving( 'getOption', [ 'blogname' ] )
		);
		console.log(
			'isResolving blogdescription',
			isResolving( 'getOption', [ 'blogdescription' ] )
		);

		return { profileItems, blogname, blogdescription };
	} )
)( Homepage );
