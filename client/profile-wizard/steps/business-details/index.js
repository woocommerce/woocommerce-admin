import { BundleBusinessDetailsStep } from './flows/bundle';
import { SelectiveFeaturesBusinessStep } from './flows/selective-bundle';

export const BusinessDetailsStep = ( props ) => {
	// TODO determine segmentation here. The normal flow *AND* the old experiment flow will go through <BundleBusinessDetailsStep>
	// only the new defined segmentation will go through <SelectiveFeaturesBusinessStep>

	return <SelectiveFeaturesBusinessStep { ...props } />;
	// return <BundleBusinessDetailsStep { ...props } />;
};
