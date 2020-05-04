/**
 * External dependencies
 */
import Gridicon from 'gridicons';
import { withConsole } from '@storybook/addon-console';

/**
 * Internal dependencies
 */
import List from '../';
import './style.scss';

function logItemClick( event ) {
	const a = event.currentTarget;
	const logMessage = a.href
		? `[${ a.textContent }](${ a.href }) ${ a.dataset.linkType } item clicked`
		: `[${ a.textContent }] item clicked`;

	// eslint-disable-next-line no-console
	console.log( logMessage );

	event.preventDefault();
	return false;
}

export default {
	title: 'WooCommerce Admin/components/List',
	component: List,
	decorators: [ ( storyFn, context ) => withConsole()( storyFn )( context ) ],
};

export const Default = () => {
	const listItems = [
		{
			title: 'WooCommerce.com',
			href: 'https://woocommerce.com',
			onClick: logItemClick,
		},
		{
			title: 'WordPress.org',
			href: 'https://wordpress.org',
			onClick: logItemClick,
		},
		{
			title: 'A list item with no action',
		},
		{
			title: 'Click me!',
			content: 'An alert will be triggered.',
			onClick: ( event ) => {
				// eslint-disable-next-line no-alert
				window.alert( 'List item clicked' );
				return logItemClick( event );
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
			href: 'https://woocommerce.com',
			onClick: logItemClick,
		},
		{
			before: <Gridicon icon="my-sites" />,
			after: <Gridicon icon="chevron-right" />,
			title: 'WordPress.org',
			href: 'https://wordpress.org',
			onClick: logItemClick,
		},
		{
			before: <Gridicon icon="link-break" />,
			title: 'A list item with no action',
			description: 'List item description text',
		},
		{
			before: <Gridicon icon="notice" />,
			title: 'Click me!',
			content: 'An alert will be triggered.',
			onClick: ( event ) => {
				// eslint-disable-next-line no-alert
				window.alert( 'List item clicked' );
				return logItemClick( event );
			},
		},
	];

	return <List items={ listItems } />;
};

export const CustomStyle = () => {
	const listItems = [
		{
			before: <Gridicon icon="cart" />,
			after: <Gridicon icon="chevron-right" />,
			title: 'WooCommerce.com',
			href: 'https://woocommerce.com',
			onClick: logItemClick,
		},
		{
			before: <Gridicon icon="my-sites" />,
			after: <Gridicon icon="chevron-right" />,
			title: 'WordPress.org',
			href: 'https://wordpress.org',
			onClick: logItemClick,
		},
		{
			before: <Gridicon icon="link-break" />,
			title: 'A list item with no action',
		},
		{
			before: <Gridicon icon="notice" />,
			title: 'Click me!',
			content: 'An alert will be triggered.',
			onClick: ( event ) => {
				// eslint-disable-next-line no-alert
				window.alert( 'List item clicked' );
				return logItemClick( event );
			},
		},
	];

	return <List items={ listItems } className="storybook-custom-list" />;
};
