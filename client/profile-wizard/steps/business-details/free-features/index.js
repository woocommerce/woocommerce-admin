/**
 * Internal dependencies
 */
import { BusinessExtensions } from '../business-extensions';
import { ExtensionsBundle } from '../experiments/extensions-bundle';

export const FreeFeatures = ( { getInputProps } ) => {
	// TODO calculate from segmentation
	const bundleInstall = true;

	return bundleInstall ? (
		<ExtensionsBundle getInputProps={ getInputProps } />
	) : (
		<BusinessExtensions getInputProps={ getInputProps } />
	);
};
