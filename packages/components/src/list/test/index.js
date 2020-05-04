/**
 * External dependencies
 */
import { fireEvent, getAllByRole, render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import List from '../index';

describe( 'List', () => {
	it( 'should have aria roles for items', () => {
		const clickHandler = jest.fn();
		const listItems = [
			{
				title: 'WooCommerce.com',
				href: 'https://woocommerce.com',
			},
			{
				title: 'Click me!',
				onClick: clickHandler,
			},
		];

		const { container } = render( <List items={ listItems } /> );

		expect( getAllByRole( container, 'menuitem' ) ).toHaveLength( 2 );
	} );

	it( 'should support `onClick` for items', () => {
		const clickHandler = jest.fn();
		const listItems = [
			{
				title: 'WooCommerce.com',
				href: 'https://woocommerce.com',
			},
			{
				title: 'Click me!',
				onClick: clickHandler,
			},
		];

		const { container } = render( <List items={ listItems } /> );

		fireEvent.click( getAllByRole( container, 'menuitem' )[ 1 ] );

		expect( clickHandler ).toHaveBeenCalled();
	} );

	it( 'should set `data-link-type` on items', () => {
		const listItems = [
			{
				title: 'Add products',
				href: '/post-new.php?post_type=product',
				linkType: 'wp-admin',
			},
			{
				title: 'Market my store',
				href: '/admin.php?page=wc-admin&path=%2Fmarketing',
				linkType: 'wc-admin',
			},
			{
				title: 'WooCommerce.com',
				href: 'https://woocommerce.com',
				linkType: 'external',
			},
			{
				title: 'WordPress.org',
				href: 'https://wordpress.org',
			},
		];

		const { container } = render( <List items={ listItems } /> );
		const renderedItems = getAllByRole( container, 'menuitem' );

		expect( renderedItems[ 0 ].dataset.linkType ).toBe( 'wp-admin' );
		expect( renderedItems[ 1 ].dataset.linkType ).toBe( 'wc-admin' );
		expect( renderedItems[ 2 ].dataset.linkType ).toBe( 'external' );
		expect( renderedItems[ 3 ].dataset.linkType ).toBe( 'external' );
	} );

	it( 'should set `data-list-item-tag` on items', () => {
		const listItems = [
			{
				title: 'Add products',
				href: '/post-new.php?post_type=product',
				linkType: 'wp-admin',
				listItemTag: 'add-product',
			},
			{
				title: 'Market my store',
				href: '/admin.php?page=wc-admin&path=%2Fmarketing',
				linkType: 'wc-admin',
				listItemTag: 'marketing',
			},
			{
				title: 'WooCommerce.com',
				href: 'https://woocommerce.com',
				linkType: 'external',
				listItemTag: 'woocommerce.com-site',
			},
			{
				title: 'WordPress.org',
				href: 'https://wordpress.org',
			},
		];

		const { container } = render( <List items={ listItems } /> );
		const renderedItems = getAllByRole( container, 'menuitem' );

		expect( renderedItems[ 0 ].dataset.listItemTag ).toBe( 'add-product' );
		expect( renderedItems[ 1 ].dataset.listItemTag ).toBe( 'marketing' );
		expect( renderedItems[ 2 ].dataset.listItemTag ).toBe(
			'woocommerce.com-site'
		);
		expect( renderedItems[ 3 ].dataset.listItemTag ).toBeUndefined();
	} );
} );
