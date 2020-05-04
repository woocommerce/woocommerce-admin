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
} );
