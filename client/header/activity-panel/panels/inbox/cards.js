/**
 * External dependencies
 */
import { applyFilters } from '@wordpress/hooks';
import { Icon, box, comment, page } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Bell } from './icons/bell';

export const cards = applyFilters( 'woocommerce_admin_abbreviated_card_list', [
	{
		name: 'thingsToDoNext',
		icon: <Bell />,
		title: __( 'Things to do next', 'woocommerce-admin' ),
		/* translators: Things the user has to do */
		content: __( 'You have %s new things to do', 'woocommerce-admin' ),
		href: '/wp-admin/admin.php?page=wc-admin',
	},
	{
		name: 'ordersToProcess',
		icon: <Icon icon={ page } />,
		title: __( 'Orders to fulfill', 'woocommerce-admin' ),
		/* translators: Number of orders the user has to fulfill */
		content: __( 'You have %s orders to fulfill', 'woocommerce-admin' ),
		href: '/wp-admin/admin.php?page=wc-admin',
	},
	{
		name: 'reviewsToModerate',
		icon: <Icon icon={ comment } />,
		title: __( 'Reviews to moderate', 'woocommerce-admin' ),
		/* translators: Number of reviews the user has to moderate */
		content: __( 'You have %s reviews to moderate', 'woocommerce-admin' ),
		href: '/wp-admin/admin.php?page=wc-admin',
	},
	{
		name: 'stockNotices',
		icon: <Icon icon={ box } />,
		title: __( 'Inventory to review', 'woocommerce-admin' ),
		content: __(
			'You have inventory to review and update',
			'woocommerce-admin'
		),
		href: '/wp-admin/admin.php?page=wc-admin',
	},
] );
