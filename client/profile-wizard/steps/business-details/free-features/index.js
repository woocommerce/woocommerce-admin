/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { BusinessExtensions } from '../business-extensions';
import { ExtensionsBundle } from '../experiments/extensions-bundle';
import { SelectiveExtensionsBundle } from '../experiments/selective-extensions-bundle';
import { AppIllustration } from '../app-illustration';

import './style.scss';

export const FreeFeatures = ( { getInputProps, values } ) => {
	// TODO calculate experiment from segmentation
	// const bundleInstall = true;

	// const experiment = bundleInstall ? (
	// 	<ExtensionsBundle getInputProps={ getInputProps } />
	// ) : (
	// 	<BusinessExtensions getInputProps={ getInputProps } values={ values } />
	// );

	const experiment = (
		<SelectiveExtensionsBundle getInputProps={ getInputProps } />
	);

	return (
		<div className="woocommerce-profile-wizard__business-details__free-features">
			<Card>
				<div className="woocommerce-profile-wizard__business-details__free-features__illustration">
					<AppIllustration />
				</div>
				{ experiment }
				<div className="woocommerce-profile-wizard__business-details__free-features__action">
					<Button isPrimary>Continue</Button>
				</div>
			</Card>
		</div>
	);
};
