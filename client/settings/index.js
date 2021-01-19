/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { SETTINGS_STORE_NAME } from '@woocommerce/data';
import { Spinner } from '@wordpress/components';

export default ( { params } ) => {
	const { settings, isLoading } = useSelect( ( select ) => {
		return {
			isLoading: ! select(
				SETTINGS_STORE_NAME
			).hasFinishedResolution( 'getSettings', [ params.page ] ),
			settings:
				select( SETTINGS_STORE_NAME ).getSettings( params.page ) || {},
		};
	} );

	if ( isLoading ) {
		return <Spinner />;
	}

	return <div>Settings page</div>;
};
