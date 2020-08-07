/**
 * @jest-environment node
 */

jest.mock( '@wordpress/data-controls', () => ( {
	dispatch: jest.fn(),
	select: jest.fn(),
	apiFetch: jest.fn(),
} ) );

import { dispatch } from '@wordpress/data-controls';
import { installJetpackAndConnect, connectToJetpack } from '../actions';
import { STORE_NAME } from '../constants';

// Tests run faster in node env, and we just need access to the window global for this test
global.window = { location: '' };

describe( 'installJetPackAndConnect', () => {
	beforeEach( () => {
		jest.clearAllMocks();
	} );

	it( 'installs jetpack, then activates it', () => {
		const installer = installJetpackAndConnect();

		// Run to first yield
		installer.next();

		// Run the install
		installer.next();

		expect( dispatch ).toHaveBeenCalledWith( STORE_NAME, 'installPlugins', [
			'jetpack',
		] );

		// Run the activate
		installer.next();

		expect( dispatch ).toHaveBeenCalledWith(
			STORE_NAME,
			'activatePlugins',
			[ 'jetpack' ]
		);
	} );

	it( 'creates an error notice if an exception is thrown into the generator', () => {
		const installer = installJetpackAndConnect();

		// Run to first yield
		installer.next();

		// Throw error into generator
		installer.throw( new Error( 'Failed!' ) );

		expect( dispatch ).toHaveBeenCalledWith(
			'core/notices',
			'createNotice',
			'Failed!'
		);
	} );

	it( 'creates an error message if getJetpackConnectUrl generated one', () => {
		const installer = installJetpackAndConnect();

		// Run to yield any errors from getJetpackConnectUrl
		installer.next();
		installer.next();
		installer.next();
		installer.next( 'https://example.com' );
		installer.next( 'Failed' );

		expect( dispatch ).toHaveBeenCalledWith(
			'core/notices',
			'createNotice',
			'Failed'
		);
	} );

	it( 'redirects to the connect url if there are no errors', () => {
		const installer = installJetpackAndConnect();

		// Run to yield any errors from getJetpackConnectUrl
		installer.next();
		installer.next();
		installer.next();
		installer.next( 'https://example.com' );
		installer.next();

		expect( global.window.location ).toBe( 'https://example.com' );
	} );
} );

describe( 'connectToJetpack', () => {
	it( 'redirects to the failure url if there is an error', () => {
		const connect = connectToJetpack( 'https://example.com/failure' );

		connect.next();
		connect.next();
		connect.next( 'Failed' );
		connect.next();

		expect( global.window.location ).toBe( 'https://example.com/failure' );
	} );

	it( 'redirects to the jetpack url if there is no error', () => {
		const connect = connectToJetpack( 'https://example.com/failure' );

		connect.next();
		connect.next( 'https://example.com/success' );
		connect.next();
		connect.next();

		expect( global.window.location ).toBe( 'https://example.com/success' );
	} );

	it( 'creates an error notice if an exception is thrown into the generator', () => {
		const connect = connectToJetpack();

		// Run to first yield
		connect.next();

		// Throw error into generator
		connect.throw( new Error( 'Failed!' ) );

		expect( dispatch ).toHaveBeenCalledWith(
			'core/notices',
			'createNotice',
			'Failed!'
		);
	} );
} );
