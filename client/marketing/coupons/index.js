/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useUser } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './style.scss';
import RecommendedExtensions from '../components/recommended-extensions';
import KnowledgeBase from '../components/knowledge-base';
import { getAdminSetting } from '~/utils/admin-settings';
import '../data';

const CouponsOverview = () => {
	const { currentUserCan } = useUser();

	const shouldShowExtensions =
		getAdminSetting( 'allowMarketplaceSuggestions', false ) &&
		currentUserCan( 'install_plugins' );

	return (
		<div className="woocommerce-marketing-coupons">
			{ shouldShowExtensions && (
				<RecommendedExtensions
					title={ __(
						'Recommended coupon extensions',
						'woocommerce-admin'
					) }
					description={ __(
						'Take your coupon marketing to the next level with our recommended coupon extensions.',
						'woocommerce-admin'
					) }
					category="coupons"
				/>
			) }
			<KnowledgeBase
				category="coupons"
				description={ __(
					'Learn the ins and outs of successful coupon marketing from the experts at WooCommerce.',
					'woocommerce-admin'
				) }
			/>
		</div>
	);
};

export default CouponsOverview;
