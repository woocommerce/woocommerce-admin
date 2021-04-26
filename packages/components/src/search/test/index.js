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
import productsAutocompleter from '../autocompleters/product';

const delay = ( timeout ) =>
	new Promise( ( resolve ) => setTimeout( resolve, timeout ) );

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

	describe( 'with `type="custom"`', () => {
		describe( 'renders options given in `autocompleter.options`', () => {
			it( 'as a static array', async () => {
				const customAutocompleter = {
					...productsAutocompleter,
					// Set the options as a static array.
					options: [
						{ name: 'Apple', id: 1 },
						{ name: 'Orange', id: 2 },
						{ name: 'Grapes', id: 3 },
					],
				};
				const { getByRole, queryAllByRole } = render(
					<Search
						type="custom"
						autocompleter={ customAutocompleter }
					/>
				);
				// Emulate typing to render available options.
				userEvent.type( getByRole( 'combobox' ), 'A' );
				// Wait for async options procesing.
				await delay( 500 );

				expect( queryAllByRole( 'option' ) ).toHaveLength( 3 );
			} );

			it( 'being a function that for the given query returns an array', async () => {
				const optionsSpy = jest.fn();

				const customAutocompleter = {
					...productsAutocompleter,
					// Set the options as a function that returns an array.
					options: ( ...args ) => {
						optionsSpy( ...args );
						return [
							{ name: 'Apple', id: 1 },
							{ name: 'Orange', id: 2 },
							{ name: 'Grapes', id: 3 },
						];
					},
				};

				const { getByRole, queryAllByRole } = render(
					<Search
						type="custom"
						autocompleter={ customAutocompleter }
					/>
				);
				// Emulate typing to render available options.
				userEvent.type( getByRole( 'combobox' ), 'A' );
				// Wait for async options procesing.
				await delay( 500 );

				expect( optionsSpy ).toBeCalledWith( 'A' );
				expect( queryAllByRole( 'option' ) ).toHaveLength( 3 );
			} );

			it( 'being a function that for the given query returns a promise for an array', async () => {
				const optionsSpy = jest.fn();

				const customAutocompleter = {
					...productsAutocompleter,
					// Set the options as a function that returns a promise for an array.
					options: async ( ...args ) => {
						optionsSpy( ...args );
						await delay( 1 );
						return [
							{ name: 'Apple', id: 1 },
							{ name: 'Orange', id: 2 },
							{ name: 'Grapes', id: 3 },
						];
					},
				};

				const { getByRole, queryAllByRole } = render(
					<Search
						type="custom"
						autocompleter={ customAutocompleter }
					/>
				);
				// Emulate typing to render available options.
				userEvent.type( getByRole( 'combobox' ), 'A' );
				// Wait for async options procesing.
				await delay( 500 );

				expect( optionsSpy ).toBeCalledWith( 'A' );
				expect( queryAllByRole( 'option' ) ).toHaveLength( 3 );
			} );
		} );
	} );
	it( 'returns an object with decoded text', () => {
		const decodedText = computeSuggestionMatch(
			'A test &amp; a &#116;&#101;&#115;&#116;',
			'test'
		);
		const expected =
			'{"suggestionBeforeMatch":"A ","suggestionMatch":"test","suggestionAfterMatch":" & a test"}';
		expect( JSON.stringify( decodedText ) ).toBe( expected );
	} );
} );
