/**
 * Internal dependencies
 */
import reducer from '../reducer';
import TYPES from '../action-types';

const defaultState = {
	importStatus: {},
	importTotals: {},
	errors: {},
};

describe( 'import reducer', () => {
	it( 'should return a default state', () => {
		const state = reducer( undefined, {} );
		expect( state ).toEqual( defaultState );
		expect( state ).not.toBe( defaultState );
	} );

	it( 'should handle SET_IMPORT_STATUS', () => {
		const state = reducer( defaultState, {
			type: TYPES.SET_IMPORT_STATUS,
			resourceName: 'test-import-status',
			importStatus: { is_importing: false },
		} );

		expect( state.importStatus ).toHaveProperty( 'test-import-status' );
		expect(
			state.importStatus[ 'test-import-status' ].is_importing
		).toEqual( false );
	} );

	it( 'should handle SET_IMPORT_TOTALS', () => {
		const state = reducer( defaultState, {
			type: TYPES.SET_IMPORT_TOTALS,
			resourceName: 'test-import-totals',
			importTotals: {
				customers: 1,
				orders: 6,
			},
		} );

		expect( state.importTotals ).toHaveProperty( 'test-import-totals' );
		expect( state.importTotals[ 'test-import-totals' ].customers ).toEqual(
			1
		);
		expect( state.importTotals[ 'test-import-totals' ].orders ).toEqual(
			6
		);
	} );

	it( 'should handle SET_IMPORT_ERROR', () => {
		const state = reducer( defaultState, {
			type: TYPES.SET_IMPORT_ERROR,
			resourceName: 'test-import-error',
			error: { code: 'error' },
		} );

		expect( state.errors[ 'test-import-error' ].code ).toBe( 'error' );
	} );
} );
