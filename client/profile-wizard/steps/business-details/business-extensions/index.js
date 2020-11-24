/**
 * External dependencies
 */
import { FormToggle } from '@wordpress/components';
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import { extensionBenefits } from '../data/extension-benefits';

const wcAdminAssetUrl = getSetting( 'wcAdminAssetUrl', '' );

export const BusinessExtensions = ( { values, getInputProps } ) => {
	return (
		<>
			{ extensionBenefits.map( ( benefit ) => (
				<div
					className="woocommerce-profile-wizard__benefit"
					key={ benefit.title }
				>
					<div className="woocommerce-profile-wizard__business-extension">
						<img
							src={ `${ wcAdminAssetUrl }${ benefit.icon }` }
							alt=""
						/>
					</div>
					<div className="woocommerce-profile-wizard__benefit-content">
						<H className="woocommerce-profile-wizard__benefit-title">
							{ benefit.title }
						</H>
						<p>{ benefit.description }</p>
					</div>
					<div className="woocommerce-profile-wizard__benefit-toggle">
						<FormToggle
							checked={ values[ benefit.slug ] }
							{ ...getInputProps( benefit.slug ) }
						/>
					</div>
				</div>
			) ) }
		</>
	);
};
