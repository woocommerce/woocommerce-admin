/**
 * Internal dependencies
 */
import { getCategoriesMap } from '../';

describe( 'getCategoriesMap', () => {
	const menuItems = [
		{ id: 'zero', title: 'zero', isCategory: true },
		{ id: 'one', title: 'one', isCategory: true },
		{ id: 'two', title: 'two', isCategory: true },
		{ id: 'three', title: 'three', isCategory: false },
		{ id: 'four', title: 'four', isCategory: false },
	];

	it( 'should get a map of all categories', () => {
		const categoriesMap = getCategoriesMap( menuItems );

		expect( categoriesMap.zero ).toMatchObject( menuItems[ 0 ] );
		expect( categoriesMap.one ).toMatchObject( menuItems[ 1 ] );
		expect( categoriesMap.two ).toMatchObject( menuItems[ 2 ] );
		expect( categoriesMap.three ).toBeUndefined();
		expect( categoriesMap.four ).toBeUndefined();
	} );

	it( 'should include the topmost WooCommerce parent category', () => {
		const categoriesMap = getCategoriesMap( menuItems );

		expect( categoriesMap.woocommerce ).toBeDefined();
	} );

	it( 'should have the correct number of values', () => {
		const categoriesMap = getCategoriesMap( menuItems );

		expect( Object.keys( categoriesMap ).length ).toBe( 4 );
	} );
} );
