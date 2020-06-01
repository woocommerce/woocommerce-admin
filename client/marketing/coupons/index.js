/**
 * WooCommerce dependencies
 */
import { getSetting } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import './style.scss';
import RecommendedExtensions from '../overview/recommended-extensions';
import KnowledgeBase from '../overview/knowledge-base';
import '../data';

const CouponsOverview = () => {
	const allowMarketplaceSuggestions = getSetting( 'allowMarketplaceSuggestions', false );

	return (
		<div className="woocommerce-marketing-coupons">
			{ allowMarketplaceSuggestions && <RecommendedExtensions /> }
			<KnowledgeBase />
		</div>
	);
};

export default CouponsOverview;
