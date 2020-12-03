/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { ONBOARDING_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { BundleBusinessDetailsStep } from './flows/bundle';
import { SelectiveFeaturesBusinessStep } from './flows/selective-bundle';
import { getCountryCode } from '../../../dashboard/utils';

export const BusinessDetailsStep = ( props ) => {
	const profileItems = useSelect( ( select ) => {
		return select( ONBOARDING_STORE_NAME ).getProfileItems();
	} );

	const industrySlugs = ( profileItems.industry || [] ).map(
		( industry ) => industry.slug
	);
	const settings = props.settings || {};

	const selectiveBundleInstallSegmentation =
		getCountryCode( settings.woocommerce_default_country ) === 'US' &&
		( industrySlugs.includes( 'food-drink' ) ||
			industrySlugs.includes( 'other' ) );

	if ( selectiveBundleInstallSegmentation ) {
		return <SelectiveFeaturesBusinessStep { ...props } />;
	}

	return <BundleBusinessDetailsStep { ...props } />;
};
