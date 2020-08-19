/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import interpolateComponents from 'interpolate-components';
import { Link, Pill } from '@woocommerce/components';
import { Tooltip } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { recordEvent } from '../../../lib/tracks';

export default function ProductTypeLabel( {
	annualPrice,
	description,
	isMonthlyPricing,
	moreUrl,
	slug,
} ) {
	const helpText =
		description &&
		interpolateComponents( {
			mixedString: description + ( moreUrl ? ' {{moreLink/}}' : '' ),
			components: {
				moreLink: moreUrl ? (
					<Link
						href={ moreUrl }
						target="_blank"
						type="external"
						onClick={ () =>
							recordEvent(
								'storeprofiler_store_product_type_learn_more',
								{
									product_type: slug,
								}
							)
						}
					>
						{ __( 'Learn more', 'woocommerce-admin' ) }
					</Link>
				) : (
					''
				),
			},
		} );

	if ( ! annualPrice ) {
		return description;
	}

	const priceDescription = isMonthlyPricing
		? sprintf(
				__( '$%f per month', 'woocommerce-admin' ),
				( annualPrice / 12.0 ).toFixed( 2 )
		  )
		: sprintf( __( '$%f per year', 'woocommerce-admin' ), annualPrice );

	/* eslint-disable @wordpress/i18n-no-collapsible-whitespace */
	const toolTipText = __(
		"This product type requires a paid extension.\nWe'll add this to a cart so that\nyou can purchase and install it later.",
		'woocommerce-admin'
	);
	/* eslint-enable @wordpress/i18n-no-collapsible-whitespace */

	return (
		<Fragment>
			<span className="woocommerce-product-wizard__product-types__label">
				{ description }
			</span>
			<Tooltip text={ toolTipText } position="bottom center">
				<span>
					<Pill>
						<span className="screen-reader-text">
							{ toolTipText }
						</span>
						{ priceDescription }
					</Pill>
				</span>
			</Tooltip>
		</Fragment>
	);
}
