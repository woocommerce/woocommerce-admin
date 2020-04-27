/**
 * External dependencies
 */
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import List from '../';

export default {
	title: 'WooCommerce Admin/components/List',
	component: List,
};

export const Default = () => {
	const listItems = [
		{
			title: 'WooCommerce.com',
			description: 'List item description text',
			href: 'https://woocommerce.com',
		},
		{
			title: 'WordPress.org',
			description: 'List item description text',
			href: 'https://wordpress.org',
		},
		{
			title: 'A list item with no action',
			description: 'List item description text',
		},
		{
			title: 'Click me!',
			onClick: () => {
				// eslint-disable-next-line no-alert
				window.alert( 'List item clicked' );
			},
		},
	];

	return <List items={ listItems } />;
};

export const BeforeAndAfter = () => {
	const listItems = [
		{
			before: <Gridicon icon="cart" />,
			after: <Gridicon icon="chevron-right" />,
			title: 'WooCommerce.com',
			description: 'List item description text',
			href: 'https://woocommerce.com',
		},
		{
			before: <Gridicon icon="my-sites" />,
			after: <Gridicon icon="chevron-right" />,
			title: 'WordPress.org',
			description: 'List item description text',
			href: 'https://wordpress.org',
		},
		{
			before: <Gridicon icon="link-break" />,
			title: 'A list item with no action',
			description: 'List item description text',
		},
		{
			before: <Gridicon icon="notice" />,
			title: 'Click me!',
			onClick: () => {
				// eslint-disable-next-line no-alert
				window.alert( 'List item clicked' );
			},
		},
	];

	return <List items={ listItems } />;
};
