/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Internal dependencies
 */
import { Search } from '../index';
import { computeSuggestionMatch } from '../autocompleters/utils';

const delay = ( timeout ) =>
	new Promise( ( resolve ) => setTimeout( resolve, timeout ) );

global.console = { error: jest.fn() };

describe( 'Search', () => {
	it( 'shows the free text search option', async () => {
		const { getByRole, queryAllByRole } = render(
			<Search type="products" allowFreeTextSearch />
		);
		userEvent.type( getByRole( 'combobox' ), 'Product Query' );
		expect( queryAllByRole( 'option' ) ).toHaveLength( 1 );

		userEvent.clear( getByRole( 'combobox' ) );
		expect( queryAllByRole( 'option' ) ).toHaveLength( 0 );
	} );

	it( 'should not throw a warning after unmounting', async () => {
		await delay( 1000 );
		// eslint-disable-next-line no-console
		expect( console.error ).not.toBeCalled();
	} );

	it( 'returns an object with decoded text', async () => {
		const decodedText = computeSuggestionMatch(
			'A test &amp; a &#116;&#101;&#115;&#116;',
			'test'
		);
		const expected =
			'{"suggestionBeforeMatch":"A ","suggestionMatch":"test","suggestionAfterMatch":" & a test"}';
		expect( JSON.stringify( decodedText ) ).toBe( expected );
	} );
} );
