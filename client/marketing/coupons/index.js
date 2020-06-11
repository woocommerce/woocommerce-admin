/**
 * External depenencies
 */
import { __ } from '@wordpress/i18n';

/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './style.scss';
import RecommendedExtensions from '../components/recommended-extensions';
import KnowledgeBase from '../components/knowledge-base';
import '../data';

const CouponsOverview = () => {
	const allowMarketplaceSuggestions = getSetting(
		'allowMarketplaceSuggestions',
		false
	);

	return (
		<div className="woocommerce-marketing-coupons">
			{ allowMarketplaceSuggestions && (
				<RecommendedExtensions
					title={ __( 'Recommended coupon extensions' ) }
					description={ __(
						'Take your coupon marketing to the next level with our recommended coupon extensions.'
					) }
				/>
			) }
			<KnowledgeBase
				category="coupons"
				description={ __(
					'Learn the ins and outs of successful coupon marketing from the experts at WooCommerce.'
				) }
			/>
		</div>
	);
};

export default CouponsOverview;
