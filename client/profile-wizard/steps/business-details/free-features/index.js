/**
 * External dependencies
 */
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { BusinessExtensions } from '../business-extensions';
import { ExtensionsBundle } from '../experiments/extensions-bundle';
import { AppIllustration } from '../app-illustration';

import './style.scss';

export const FreeFeatures = ( { getInputProps } ) => {
	// TODO calculate experiment from segmentation
	const bundleInstall = true;

	const experiment = bundleInstall ? (
		<ExtensionsBundle getInputProps={ getInputProps } />
	) : (
		<BusinessExtensions getInputProps={ getInputProps } />
	);

	return (
		<div className="woocommerce-profile-wizard__business-details__free-features">
			<div className="woocommerce-profile-wizard__business-details__free-features__illustration">
				<AppIllustration />
			</div>
			{ experiment }
			<div className="woocommerce-profile-wizard__business-details__free-features__action">
				<Button isPrimary>Continue</Button>
			</div>
		</div>
	);
};
