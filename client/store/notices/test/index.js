/** @format */
/**
 * Internal dependencies
 */
import actions from '../actions';
import { DEFAULT_STATE, testNotice } from './fixtures';
import reducers from '../reducers';
import selectors from '../selectors';

describe( 'actions', () => {
	test( 'should create an add notice action', () => {
		const expectedAction = {
			type: 'ADD_NOTICE',
			notice: testNotice,
		};

		expect( actions.addNotice( testNotice ) ).toEqual( expectedAction );
	} );

	test( 'should create a refresh store alerts action', () => {
		expect( actions.refreshStoreAlerts().type ).toEqual( 'REFRESH_STORE_ALERTS' );
	} );
} );

describe( 'selectors', () => {
	const notices = [ testNotice ];
	const updatedState = { ...DEFAULT_STATE, ...{ notices } };

	test( 'getNotices should return an emtpy initial state', () => {
		expect( selectors.getNotices( DEFAULT_STATE ) ).toEqual( [] );
	} );

	test( 'getNotices should have an array length matching number of notices', () => {
		expect( selectors.getNotices( updatedState ).length ).toEqual( 1 );
	} );

	test( 'getNotices should return the message content', () => {
		expect( selectors.getNotices( updatedState )[ 0 ].message ).toEqual( 'Test notice' );
	} );

	const timestamp = Date.now();
	const updatedState2 = { ...DEFAULT_STATE, ...{ lastStoreAlertRefresh: timestamp } };

	test( 'getLastStoreAlertRefresh should return a null initial state', () => {
		expect( selectors.getLastStoreAlertRefresh( DEFAULT_STATE ) ).toEqual( null );
	} );

	test( 'getLastStoreAlertRefresh should return the timestamp', () => {
		expect( selectors.getLastStoreAlertRefresh( updatedState2 ) ).toEqual( timestamp );
	} );
} );

describe( 'reducers', () => {
	test( 'notices should return an emtpy initial state', () => {
		expect( reducers.notices( DEFAULT_STATE.notices, {} ) ).toEqual( [] );
	} );

	test( 'notices should return the added notice', () => {
		expect(
			reducers.notices( DEFAULT_STATE.notices, { type: 'ADD_NOTICE', notice: testNotice } )
		).toEqual( [ testNotice ] );
	} );

	const initialNotices = [ { message: 'Initial notice' } ];
	test( 'notices should return the initial notice and the added notice', () => {
		expect(
			reducers.notices( initialNotices, { type: 'ADD_NOTICE', notice: testNotice } )
		).toEqual( [ ...initialNotices, testNotice ] );
	} );

	test( 'lastStoreAlertRefresh should return a null initial state', () => {
		expect( reducers.lastStoreAlertRefresh( DEFAULT_STATE.lastStoreAlertRefresh, {} ) ).toEqual(
			null
		);
	} );

	const timestamp = Date.now();
	test( 'lastStoreAlertRefresh should return the last timestamp', () => {
		expect(
			reducers.lastStoreAlertRefresh( DEFAULT_STATE.lastStoreAlertRefresh, {
				type: 'REFRESH_STORE_ALERTS',
				timestamp,
			} )
		).toEqual( timestamp );
	} );
} );
