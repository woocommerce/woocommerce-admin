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

