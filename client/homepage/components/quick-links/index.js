/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Card, CardBody, CardHeader, Icon } from '@wordpress/components';
import { Component } from '@wordpress/element';
import Gridicon from 'gridicons';

/**
 * WooCommerce dependencies
 */
import { List } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * QuickLinks component to display a list of store management links.
 */
class QuickLinks extends Component {
	getItems() {
		return [
			{
				title: __( 'Market my store', 'woocommerce-admin' ),
				type: 'wc-admin',
				path: 'marketing',
				iconName: 'megaphone',
			},
			{
				title: __( 'Add products', 'woocommerce-admin' ),
				type: 'wp-admin',
				path: '/post-new.php?post_type=product',
				iconName: 'gridicons-product',
			},
			{
				title: __( 'Personalize my store', 'woocommerce-admin' ),
				type: 'wp-admin',
				path: 'todo', // open editor with shop page open
				iconName: 'admin-customizer',
			},
			{
				title: __( 'Shipping settings', 'woocommerce-admin' ),
				type: 'wc-settings',
				tab: 'shipping',
				iconName: 'gridicons-shipping',
			},
			{
				title: __( 'Tax settings', 'woocommerce-admin' ),
				type: 'wc-settings',
				tab: 'tax',
				iconName: 'gridicons-institution',
			},
			{
				title: __( 'Payment settings', 'woocommerce-admin' ),
				type: 'wc-settings',
				tab: 'checkout',
				iconName: 'gridicons-credit-card',
			},
			{
				title: __( 'Edit store details', 'woocommerce-admin' ),
				type: 'wc-settings',
				tab: 'general',
				iconName: 'store',
			},
			{
				title: __( 'Get support', 'woocommerce-admin' ),
				type: 'external',
				href: 'todo', // support portal: wpcom vs self-hosted
				iconName: 'sos',
			},
			{
				title: __( 'View my store', 'woocommerce-admin' ),
				type: 'external',
				href: 'todo', // frontend
				iconName: 'external',
			},
		];
	}

	getIcon( iconName ) {
		let icon;
		const iconNameWithoutPrefix = iconName.substring(
			iconName.indexOf( '-' ) + 1
		);

		if ( iconName.startsWith( 'gridicons-' ) ) {
			icon = <Gridicon icon={ iconNameWithoutPrefix } />;
		} else if ( iconName.startsWith( 'dashicons-' ) ) {
			icon = <Icon icon={ iconNameWithoutPrefix } />;
		} else {
			icon = <Icon icon={ iconName } />;
		}

		return icon;
	}

	getLinkTypeAndHref( item ) {
		let linkType;
		let href;

		switch ( item.type ) {
			case 'wc-admin':
				linkType = 'wc-admin';
				href = `/admin.php?page=wc-admin&path=%2F${ item.path }`;
				break;
			case 'wp-admin':
				linkType = 'wp-admin';
				href = item.path;
				break;
			case 'wc-settings':
				linkType = 'wp-admin';
				href = `/admin.php?page=wc-settings&tab=${ item.tab }`;
				break;
			default:
				linkType = 'external';
				href = item.href;
				break;
		}

		return {
			linkType,
			href,
		};
	}

	getListItems() {
		return this.getItems().map( ( item ) => {
			return {
				title: item.title,
				before: this.getIcon( item.iconName ),
				after: this.getIcon( 'arrow-right-alt2' ),
				...this.getLinkTypeAndHref( item ),
			};
		} );
	}

	render() {
		const listItems = this.getListItems();

		return (
			<Card>
				<CardHeader>
					{ __( 'Store management', 'woocommerce-admin' ) }
				</CardHeader>
				<CardBody>
					<List items={ listItems } />
				</CardBody>
			</Card>
		);
	}
}

export default QuickLinks;
