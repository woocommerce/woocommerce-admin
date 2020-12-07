/**
 * External dependencies
 */
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import {
	addHistoryListener,
	getDefaultMatchExpression,
	getFullUrl,
	getMatchingItem,
	isMatch,
} from '../utils';

const originalLocation = window.location;
global.window = Object.create( window );
global.window.wcNavigation = {};

const sampleMenuItems = [
	{
		id: 'main',
		title: 'Main page',
		url: 'admin.php?page=wc-admin',
	},
	{
		id: 'path',
		title: 'Page with Path',
		url: 'admin.php?page=wc-admin&path=/test-path',
	},
	{
		id: 'hash',
		title: 'Page with Hash',
		url: 'admin.php?page=wc-admin&path=/test-path#anchor',
	},
	{
		id: 'multiple-args',
		title: 'Page with multiple arguments',
		url: 'admin.php?page=wc-admin&path=/test-path&section=section-name',
	},
];

describe( 'getMatchingItem', () => {
	beforeAll( () => {
		delete window.location;
	} );

	afterAll( () => {
		window.location = originalLocation;
	} );

	it( 'should get the closest matched item', () => {
		window.location = new URL( getAdminLink( 'admin.php?page=wc-admin' ) );
		const matchingItem = getMatchingItem( sampleMenuItems );
		expect( matchingItem.id ).toBe( 'main' );
	} );

	it( 'should match the item without hash if a better match does not exist', () => {
		window.location = new URL(
			getAdminLink( 'admin.php?page=wc-admin#hash' )
		);
		const matchingItem = getMatchingItem( sampleMenuItems );
		expect( matchingItem.id ).toBe( 'main' );
	} );

	it( 'should exactly match the item with a hash if it exists', () => {
		window.location = new URL(
			getAdminLink( 'admin.php?page=wc-admin&path=/test-path#anchor' )
		);
		const matchingItem = getMatchingItem( sampleMenuItems );
		expect( matchingItem.id ).toBe( 'hash' );
	} );

	it( 'should roughly match the item if all menu item arguments exist', () => {
		window.location = new URL(
			getAdminLink(
				'admin.php?page=wc-admin&path=/test-path&section=section-name'
			)
		);
		const matchingItem = getMatchingItem( sampleMenuItems );
		expect( matchingItem.id ).toBe( 'multiple-args' );
	} );
} );

describe( 'getDefaultMatchExpression', () => {
	it( 'should return the regex for the path without query args', () => {
		expect( getDefaultMatchExpression( 'http://wordpress.org' ) ).toBe(
			'^http:\\/\\/wordpress\\.org'
		);
	} );

	it( 'should return the regex for the path and query args', () => {
		expect(
			getDefaultMatchExpression(
				'http://wordpress.org?param1=a&param2=b'
			)
		).toBe(
			'^http:\\/\\/wordpress\\.org(?=.*[?|&]param1=a(&|$|#))(?=.*[?|&]param2=b(&|$|#))'
		);
	} );

	it( 'should return the regex with hash if present', () => {
		expect(
			getDefaultMatchExpression(
				'http://wordpress.org?param1=a&param2=b#hash'
			)
		).toBe(
			'^http:\\/\\/wordpress\\.org(?=.*[?|&]param1=a(&|$|#))(?=.*[?|&]param2=b(&|$|#))(.*#hash$)'
		);
	} );
} );

describe( 'isMatch', () => {
	beforeAll( () => {
		delete window.location;
		window.location = new URL( getAdminLink( '/' ) );
	} );

	afterAll( () => {
		window.location = originalLocation;
	} );

	it( 'should return true if the URL is the same', () => {
		expect(
			isMatch(
				new URL( getAdminLink( 'admin.php?page=testpage' ) ),
				getAdminLink( 'admin.php?page=testpage' )
			)
		).toBe( true );
	} );

	it( 'should return true if the URL starts with the same string', () => {
		expect(
			isMatch(
				new URL(
					getFullUrl(
						'/wp-admin/admin.php?page=testpage&extra_param=a'
					)
				),
				'/wp-admin/admin.php?page=testpage'
			)
		).toBe( true );
	} );

	it( 'should return false if the URL is not the same', () => {
		expect(
			isMatch(
				new URL( getAdminLink( 'admin.php?page=different-page' ) ),
				getAdminLink( 'admin.php?page=testpage' )
			)
		).toBe( false );
	} );

	it( 'should return true for a location matching the expression', () => {
		expect(
			isMatch(
				new URL(
					getAdminLink( 'admin.php?page=different-page&param1=a' )
				),
				getAdminLink( 'admin.php?page=testpage' ),
				'param1=a'
			)
		).toBe( true );
	} );

	it( 'should return false for a location not matching the expression', () => {
		expect(
			isMatch(
				new URL(
					getAdminLink( 'admin.php?page=different-page&param1=b' )
				),
				getAdminLink( 'admin.php?page=testpage' ),
				'param1=a'
			)
		).toBe( false );
	} );

	it( 'should return true if params match but are out of order', () => {
		expect(
			isMatch(
				new URL( getAdminLink( 'admin.php?param1=a&page=testpage' ) ),
				getAdminLink( 'admin.php?page=testpage' ),
				'param1=a'
			)
		).toBe( true );
	} );

	it( 'should return true if multiple params match but are out of order', () => {
		expect(
			isMatch(
				new URL(
					getAdminLink( 'admin.php?param1=a&page=testpage&param2=b' )
				),
				getAdminLink( 'admin.php?page=testpage&param1=a' ),
				'param1=a'
			)
		).toBe( true );
	} );
} );

describe( 'getFullUrl', () => {
	beforeAll( () => {
		delete window.location;
		window.location = new URL( getAdminLink( '/' ) );
	} );

	afterAll( () => {
		window.location = originalLocation;
	} );

	const adminUrl = new URL( getAdminLink( '/' ) );

	it( 'should get the full URL from a path', () => {
		expect( getFullUrl( '/wp-admin/admin.php?page=testpage' ) ).toBe(
			adminUrl.origin + '/wp-admin/admin.php?page=testpage'
		);
	} );

	it( 'should return the same URL from an already complete URL', () => {
		expect( getFullUrl( getAdminLink( 'admin.php?page=testpage' ) ) ).toBe(
			getAdminLink( 'admin.php?page=testpage' )
		);
	} );
} );

describe( 'addHistoryListener', () => {
	it( 'should add a custom event to the browser pushState', () => {
		const mockCallback = jest.fn();
		const removeListener = addHistoryListener( mockCallback );
		window.history.pushState( {}, 'Test pushState' );
		window.history.pushState( {}, 'Test pushState 2' );

		expect( mockCallback.mock.calls.length ).toBe( 2 );

		// Check that events are no longer called after removing the listener.
		removeListener();
		window.history.pushState( {}, 'Test pushState 3' );
		expect( mockCallback.mock.calls.length ).toBe( 2 );
	} );

	it( 'should add a custom event to the browser replaceState', () => {
		const mockCallback = jest.fn();
		const removeListener = addHistoryListener( mockCallback );
		window.history.replaceState( {}, 'Test replaceState' );
		window.history.replaceState( {}, 'Test replaceState 2' );

		expect( mockCallback.mock.calls.length ).toBe( 2 );

		// Check that events are no longer called after removing the listener.
		removeListener();
		window.history.replaceState( {}, 'Test replaceState 3' );
		expect( mockCallback.mock.calls.length ).toBe( 2 );
	} );
} );
