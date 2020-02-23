/** @format */
/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import { Search } from '../index';

describe( 'Search', () => {
	it( 'shows the free text search option', () => {
		const search = shallow(
			<Search
				type="products"
				allowFreeTextSearch
			/>
		);
		const options = search.instance().appendFreeTextSearch( [], 'Product Query' );

		expect( options.length ).toBe( 1 );
	} );

	it( "doesn't show options with an empty search", () => {
		const search = shallow(
			<Search
				type="products"
				allowFreeTextSearch
			/>
		);
		const options = search.instance().appendFreeTextSearch( [], '' );

		expect( options.length ).toBe( 0 );
	} );
} );

