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
	const allowMarketplaceSuggestions = getSetting( 'allowMarketplaceSuggestions', false );

	return (
		<div className="woocommerce-marketing-coupons">
			{ allowMarketplaceSuggestions && <RecommendedExtensions /> }
			<KnowledgeBase category="coupons" />
		</div>
	);
};

export default CouponsOverview;