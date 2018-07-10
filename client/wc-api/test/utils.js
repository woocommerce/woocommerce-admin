/** @format */
/**
 * Internal dependencies
 */
import { getResourceName, getResourceIdentifier, isResourcePrefix } from '../utils';

describe( '#getResourceName', () => {
	it( 'should produce a simple numeric id.', () => {
		const resourceName = getResourceName( 'order', 5 );
		expect( resourceName ).toBe( 'order:5' );
	} );

	it( 'should produce a sorted JSON identifier.', () => {
		const resourceName = getResourceName( 'orders-page', { per_page: 20, page: 5 } );
		expect( resourceName ).toBe( 'orders-page:{"page":5,"per_page":20}' );
	} );
} );

describe( '#isResourcePrefix', () => {
	it( 'should not return true if the prefix does not match.', () => {
		const resourceName = 'order:26';
		expect( isResourcePrefix( resourceName, 'product' ) ).toBeFalsy();
		expect( isResourcePrefix( resourceName, 'order:' ) ).toBeFalsy();
		expect( isResourcePrefix( resourceName, 'orderrific' ) ).toBeFalsy();
	} );
	it( 'should identify a simple id resource.', () => {
		const resourceName = 'order:26';
		expect( isResourcePrefix( resourceName, 'order' ) ).toBeTruthy();
	} );
	it( 'should identify a JSON identifier resource.', () => {
		const resourceName = 'orders-page:{"page":4,"per_page":50}';
		expect( isResourcePrefix( resourceName, 'orders-page' ) ).toBeTruthy();
	} );
} );

describe( '#getResourceIdentifier', () => {
	it( 'should parse a numeric id.', () => {
		const identifier = getResourceIdentifier( 'order:24' );
		expect( identifier ).toBe( 24 );
	} );

	it( 'should parse a JSON identifier.', () => {
		const identifier = getResourceIdentifier( 'orders-page:{"page":2,"per_page":15}' );
		expect( identifier ).toEqual( { per_page: 15, page: 2 } );
	} );
} );
