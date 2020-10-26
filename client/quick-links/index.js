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
	Icon,
	megaphone,
	box,
	brush,
	home,
	shipping,
	percent,
	payment,
	pencil,
	lifesaver,
	external,
} from '@wordpress/icons';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { List } from '@woocommerce/components';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import './style.scss';

function getItems( siteUrl ) {
	return [
		{
			title: __( 'Market my store', 'woocommerce-admin' ),
			type: 'wc-admin',
			path: 'marketing',
			icon: megaphone,
			listItemTag: 'marketing',
		},
		{
			title: __( 'Add products', 'woocommerce-admin' ),
			type: 'wp-admin',
			path: 'post-new.php?post_type=product',
			icon: box,
			listItemTag: 'add-products',
		},
		{
			title: __( 'Personalize my store', 'woocommerce-admin' ),
			type: 'wp-admin',
			path: 'customize.php',
			icon: brush,
			listItemTag: 'personalize-store',
		},
		{
			title: __( 'Shipping settings', 'woocommerce-admin' ),
			type: 'wc-settings',
			tab: 'shipping',
			icon: shipping,
			listItemTag: 'shipping-settings',
		},
		{
			title: __( 'Tax settings', 'woocommerce-admin' ),
			type: 'wc-settings',
			tab: 'tax',
			icon: percent,
			listItemTag: 'tax-settings',
		},
		{
			title: __( 'Payment settings', 'woocommerce-admin' ),
			type: 'wc-settings',
			tab: 'checkout',
			icon: payment,
			listItemTag: 'payment-settings',
		},
		{
			title: __( 'Edit store details', 'woocommerce-admin' ),
			type: 'wc-settings',
			tab: 'general',
			icon: pencil,
			listItemTag: 'edit-store-details',
		},
		{
			title: __( 'Get support', 'woocommerce-admin' ),
			type: 'external',
			href: 'https://woocommerce.com/my-account/create-a-ticket/',
			icon: lifesaver,
			after: <Icon icon={ external } />,
			listItemTag: 'support',
		},
		{
			title: __( 'View my store', 'woocommerce-admin' ),
			type: 'external',
			href: siteUrl,
			icon: home,
			after: <Icon icon={ external } />,
			listItemTag: 'view-store',
		},
	];
}

function handleOnItemClick( event, onItemClick ) {
	const a = event.currentTarget;
	const listItemTag = a.dataset.listItemTag;

	if ( ! listItemTag ) {
		return;
	}

	recordEvent( 'home_quick_links_click', {
		task_name: listItemTag,
	} );

	if ( ! onItemClick( listItemTag ) ) {
		event.preventDefault();
		return false;
	}
}

export function getLinkTypeAndHref( item ) {
	return (
		{
			'wc-admin': {
				linkType: 'wc-admin',
				href: `admin.php?page=wc-admin&path=%2F${ item.path }`,
			},
			'wp-admin': {
				linkType: 'wp-admin',
				href: item.path,
			},
			'wc-settings': {
				linkType: 'wp-admin',
				href: `admin.php?page=wc-settings&tab=${ item.tab }`,
			},
		}[ item.type ] || {
			linkType: 'external',
			href: item.href,
		}
	);
}

function getListItems( siteUrl, onItemClick ) {
	return getItems( siteUrl ).map( ( item ) => ( {
		title: (
			<Text as="div" variant="button">
				{ item.title }
			</Text>
		),
		before: <Icon icon={ item.icon } />,
		after: item.after,
		...getLinkTypeAndHref( item ),
		listItemTag: item.listItemTag,
		onClick: ( event ) => {
			handleOnItemClick( event, onItemClick );
		},
	} ) );
}

export const QuickLinks = ( { onItemClick = () => {} } ) => {
	const siteUrl = getSetting( 'siteUrl' );
	const listItems = getListItems( siteUrl, onItemClick );

	return (
		<Card size="large" className="woocommerce-quick-links">
			<CardHeader size="medium">
				<Text variant="title.small">
					{ __( 'Store management', 'woocommerce-admin' ) }
				</Text>
			</CardHeader>
			<CardBody>
				<List
					items={ listItems }
					className="woocommerce-quick-links__list"
				/>
			</CardBody>
		</Card>
	);
};
