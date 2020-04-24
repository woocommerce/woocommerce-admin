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
	];

	return <List items={ listItems } />;
};
