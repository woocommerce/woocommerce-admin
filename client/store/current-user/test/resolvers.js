/**
 * External dependencies
 *
 * @format
 */

import apiRequest from '@wordpress/api-request';

/**
 * Internal dependencies
 */
import resolvers from '../resolvers';

const { getCurrentUser } = resolvers;

jest.mock( '@wordpress/api-request' );

describe( 'getCurrentUser', () => {
	const USER = {
		first_name: 'Testing',
	};

	beforeAll( () => {
		apiRequest.mockImplementation( options => {
			if ( options.path === '/wp/v2/users/me?context=edit' ) {
				return Promise.resolve( USER );
			}
		} );
	} );

	it( 'returns requested user data', async () => {
		getCurrentUser().then( data => expect( data ).toEqual( USER ) );
	} );
} );
