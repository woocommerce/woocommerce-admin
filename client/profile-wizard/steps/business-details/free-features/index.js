/**
 * Internal dependencies
 */
import { BusinessExtensions } from '../business-extensions';
import { ExtensionsBundle } from '../experiments/extensions-bundle';

export const FreeFeatures = ( { getInputProps } ) => {
	// TODO calculate experiment from segmentation
	const bundleInstall = true;

	const experiment = bundleInstall ? (
		<ExtensionsBundle getInputProps={ getInputProps } />
	) : (
		<BusinessExtensions getInputProps={ getInputProps } />
	);

	return <>{ experiment }</>;
};
