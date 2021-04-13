/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExperimentalListItem } from '../experimental-list-item';

/**
 * Internal dependencies
 */
import List from '../index';

describe( 'List', () => {
	describe( 'Experimental List', () => {
		it( 'should render the new List which defaults to a nav component if items are not passed in', () => {
			const { container } = render(
				<List>
					<div>Test</div>
				</List>
			);

			expect( container.querySelector( 'nav' ) ).toBeInTheDocument();
		} );

		it( 'should render children passed in', () => {
			const { container } = render(
				<List>
					<div>Test</div>
				</List>
			);

			expect( container ).toHaveTextContent( 'Test' );
		} );

		it( 'should allow overriding the wrapping element, and passing in arbitrary element props', () => {
			const { container } = render(
				<List component="ul" role="menu">
					<div>Test</div>
				</List>
			);

			expect( container.querySelector( 'ul' ) ).toBeInTheDocument();
		} );

		describe( 'ExperimentalListItem', () => {
			it( 'should render children passed in', () => {
				const { container } = render(
					<ExperimentalListItem>
						<div>Test</div>
					</ExperimentalListItem>
				);

				expect( container ).toHaveTextContent( 'Test' );
			} );

			it( 'should allow overriding the wrapping element, and passing in arbitrary element props', () => {
				const { container } = render(
					<ExperimentalListItem
						component="a"
						href="https://example.com"
					>
						<div>Test</div>
					</ExperimentalListItem>
				);

				expect(
					container.querySelector( "a[href='https://example.com']" )
				).toBeInTheDocument();
			} );
		} );

		it( 'defaults to link role if onClick is passed and role is not overridden', () => {
			const { getByRole } = render(
				<ExperimentalListItem onClick={ () => {} }>
					<div>Test</div>
				</ExperimentalListItem>
			);

			expect( getByRole( 'link' ) ).toBeInTheDocument();
		} );

		it( 'does not affix a link role to the a component', () => {
			const { queryByRole } = render(
				<ExperimentalListItem component="a" onClick={ () => {} }>
					<div>Test</div>
				</ExperimentalListItem>
			);

			expect( queryByRole( 'link' ) ).not.toBeInTheDocument();
		} );
	} );

	describe( 'Legacy List', () => {
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

			render( <List items={ listItems } /> );

			expect( screen.getAllByRole( 'menuitem' ) ).toHaveLength( 2 );
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

			render( <List items={ listItems } /> );

			userEvent.click(
				screen.getByRole( 'menuitem', { name: 'Click me!' } )
			);

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

			render( <List items={ listItems } /> );

			expect(
				screen.getByRole( 'menuitem', { name: 'Add products' } ).dataset
					.linkType
			).toBe( 'wp-admin' );
			expect(
				screen.getByRole( 'menuitem', { name: 'Market my store' } )
					.dataset.linkType
			).toBe( 'wc-admin' );
			expect(
				screen.getByRole( 'menuitem', { name: 'WooCommerce.com' } )
					.dataset.linkType
			).toBe( 'external' );
			expect(
				screen.getByRole( 'menuitem', { name: 'WordPress.org' } )
					.dataset.linkType
			).toBe( 'external' );
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

			render( <List items={ listItems } /> );

			expect(
				screen.getByRole( 'menuitem', { name: 'Add products' } ).dataset
					.listItemTag
			).toBe( 'add-product' );
			expect(
				screen.getByRole( 'menuitem', { name: 'Market my store' } )
					.dataset.listItemTag
			).toBe( 'marketing' );
			expect(
				screen.getByRole( 'menuitem', { name: 'WooCommerce.com' } )
					.dataset.listItemTag
			).toBe( 'woocommerce.com-site' );
			expect(
				screen.getByRole( 'menuitem', { name: 'WordPress.org' } )
					.dataset.listItemTag
			).toBeUndefined();
		} );
	} );
} );
