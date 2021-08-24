/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { Spinner } from '@woocommerce/components';
import { ONBOARDING_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import StoreDetailsComponent from './component';
import './style.scss';

const LoadingPlaceholder = () => (
	<div className="woocommerce-admin__store-details__spinner">
		<Spinner />
	</div>
);

export default ( props ) => {
	const { isLoading } = useSelect( ( select ) => {
		// Prime profile items into store.
		select( ONBOARDING_STORE_NAME ).getProfileItems();
		return {
			isLoading: ! select( ONBOARDING_STORE_NAME ).hasFinishedResolution(
				'getProfileItems'
			),
		};
	} );

	return (
		<div className="woocommerce-profile-wizard__store-details">
			{ isLoading ? (
				<LoadingPlaceholder />
			) : (
				<StoreDetailsComponent { ...props } />
			) }
		</div>
	);
};
