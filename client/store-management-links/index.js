/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	Card,
	CardBody,
	CardHeader,
	__experimentalText as Text,
} from '@wordpress/components';
import {
	megaphone,
	box,
	brush,
	home,
	shipping,
	percent,
	payment,
	pencil,
} from '@wordpress/icons';
import { getSetting } from '@woocommerce/wc-admin-settings';
// import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { QuickLinks } from './quick-links';

/**
 * Internal dependencies
 */
import './style.scss';
import { QuickLinkCategory } from './quick-link-category';
import { QuickLink } from './quick-link';

function getItemsByCategory( siteUrl ) {
	return [
		{
			title: __( 'Marketing & Merchandising', 'woocommerce-admin' ),
			items: [
				{
					title: __( 'Market my store', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'wc-admin',
						path: 'marketing',
					} ),
					icon: megaphone,
					listItemTag: 'marketing',
				},
				{
					title: __( 'Add products', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'wp-admin',
						path: 'post-new.php?post_type=product',
					} ),
					icon: box,
					listItemTag: 'add-products',
				},
				{
					title: __( 'Personalize my store', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'wp-admin',
						path: 'customize.php',
					} ),
					icon: brush,
					listItemTag: 'personalize-store',
				},
				{
					title: __( 'View my store', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'external',
						href: siteUrl,
					} ),
					icon: home,
					listItemTag: 'view-store',
				},
			],
		},
		{
			title: __( 'Settings', 'woocommerce-admin' ),
			items: [
				{
					title: __( 'Edit store details', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'wc-settings',
						tab: 'general',
					} ),
					icon: pencil,
					listItemTag: 'edit-store-details',
				},
				{
					title: __( 'Payment settings', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'wc-settings',
						tab: 'checkout',
					} ),
					icon: payment,
					listItemTag: 'payment-settings',
				},
				{
					title: __( 'Tax settings', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'wc-settings',
						tab: 'tax',
					} ),
					icon: percent,
					listItemTag: 'tax-settings',
				},
				{
					title: __( 'Shipping settings', 'woocommerce-admin' ),
					link: getLinkTypeAndHref( {
						type: 'wc-settings',
						tab: 'shipping',
					} ),
					icon: shipping,
					listItemTag: 'shipping-settings',
				},
			],
		},
	];
}

export function getLinkTypeAndHref( { path, tab = null, type, href = null } ) {
	return (
		{
			'wc-admin': {
				linkType: 'wc-admin',
				href: `admin.php?page=wc-admin&path=%2F${ path }`,
			},
			'wp-admin': {
				linkType: 'wp-admin',
				href: path,
			},
			'wc-settings': {
				linkType: 'wp-admin',
				href: `admin.php?page=wc-settings&tab=${ tab }`,
			},
		}[ type ] || {
			linkType: 'external',
			href,
		}
	);
}

export const StoreManagementLinks = () => {
	const siteUrl = getSetting( 'siteUrl' );
	const categories = getItemsByCategory( siteUrl );

	return (
		<Card size="medium">
			<CardHeader size="medium">
				<Text variant="title.small">
					{ __( 'Store management', 'woocommerce-admin' ) }
				</Text>
			</CardHeader>
			<CardBody>
				<QuickLinks>
					{ categories.map( ( category ) => {
						return (
							<QuickLinkCategory
								key={ category.title }
								title={ category.title }
							>
								{ category.items.map(
									( { icon, listItemTag, title, link } ) => (
										<QuickLink
											icon={ icon }
											key={ listItemTag }
											title={ title }
											isExternal={
												link.linkType === 'external'
											}
											href={ link.href }
										/>
									)
								) }
							</QuickLinkCategory>
						);
					} ) }
				</QuickLinks>
			</CardBody>
		</Card>
	);
};
