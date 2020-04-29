/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Card, CardBody, CardHeader } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

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
				<Card>
					<CardHeader>
						{ __( 'Store management', 'woocommerce-admin' ) }
					</CardHeader>
					<CardBody>
						<List items={ listItems } />
					</CardBody>
				</Card>
			</Fragment>
		);
	}
}

export default QuickLinks;
