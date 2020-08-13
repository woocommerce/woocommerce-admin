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
		const query = { freshness: 1800000, timeout: 60000 };
		const state = reducer( defaultState, {
			type: TYPES.SET_IMPORT_STATUS,
			query,
			importStatus: { is_importing: false },
		} );
		const stringifiedQuery = JSON.stringify( query );
		expect( state.importStatus ).toHaveProperty( stringifiedQuery );
		expect( state.importStatus[ stringifiedQuery ].is_importing ).toEqual(
			false
		);
	} );

	it( 'should handle SET_IMPORT_TOTALS', () => {
		const query = { days: 90, skip_existing: true };
		const state = reducer( defaultState, {
			type: TYPES.SET_IMPORT_TOTALS,
			query,
			importTotals: {
				customers: 1,
				orders: 6,
			},
		} );
		const stringifiedQuery = JSON.stringify( query );

		expect( state.importTotals ).toHaveProperty( stringifiedQuery );
		expect( state.importTotals[ stringifiedQuery ].customers ).toEqual( 1 );
		expect( state.importTotals[ stringifiedQuery ].orders ).toEqual( 6 );
	} );

	it( 'should handle SET_IMPORT_ERROR', () => {
		const query = 'test-import-error';
		const state = reducer( defaultState, {
			type: TYPES.SET_IMPORT_ERROR,
			query,
			error: { code: 'error' },
		} );
		const stringifiedQuery = JSON.stringify( query );

		expect( state.errors[ stringifiedQuery ].code ).toBe( 'error' );
	} );
} );
