/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * WooCommerce dependencies
 */
import { Card, List } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * QuickLinks component to display a list of store management links.
 */
class QuickLinks extends Component {
	render() {
		const listItems = [
			{
				title: 'WooCommerce.com',
				href: 'https://woocommerce.com',
			},
			{
				title: 'WordPress.org',
				href: 'https://wordpress.org',
			},
		];

		return (
			<Fragment>
				<Card title={ __( 'Store management', 'woocommerce-admin' ) }>
					<List items={ listItems } />
				</Card>
			</Fragment>
		);
	}
}

export default QuickLinks;
