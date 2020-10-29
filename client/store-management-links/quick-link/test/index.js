/**
 * External dependencies
 */
import React from '@wordpress/element';
import { render } from '@testing-library/react';
import { brush } from '@wordpress/icons';
import userEvent from '@testing-library/user-event';

/**
 * Internal dependencies
 */
import { QuickLink } from '../index';

describe( 'QuickLink', () => {
	it( 'renders an title, href and icon based on props passed', () => {
		const { queryByText, queryByRole } = render(
			<QuickLink
				isExternal
				title="hello world"
				icon={ brush }
				href="https://example.com"
			/>
		);

		expect( queryByText( 'hello world' ) ).not.toBeEmptyDOMElement();
		expect( queryByRole( 'link' ) ).toHaveAttribute(
			'href',
			'https://example.com'
		);
	} );

	it( 'attaches a click handler to the link if it is passed', () => {
		const clickHandler = jest.fn();

		const { queryByRole } = render(
			<QuickLink
				isExternal
				title="hello world"
				icon={ brush }
				href="https://example.com"
				onClick={ clickHandler }
			/>
		);

		const link = queryByRole( 'link' );
		userEvent.click( link );
		expect( clickHandler ).toHaveBeenCalled();
	} );
} );
