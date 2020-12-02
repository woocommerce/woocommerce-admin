/**
 * External dependencies
 */
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { SelectiveExtensionsBundle } from '../selective-extensions-bundle';
import { AppIllustration } from '../app-illustration';

import './style.scss';

export const FreeFeatures = ( { onSubmit, getInputProps } ) => {
	return (
		<div className="woocommerce-profile-wizard__business-details__free-features">
			<Card>
				<div className="woocommerce-profile-wizard__business-details__free-features__illustration">
					<AppIllustration />
				</div>
				<SelectiveExtensionsBundle
					onSubmit={ onSubmit }
					getInputProps={ getInputProps }
				/>
			</Card>
		</div>
	);
};
