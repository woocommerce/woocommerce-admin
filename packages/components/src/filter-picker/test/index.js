/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { Basic } from '../stories/index';

describe( 'FilterPicker', () => {
	it( 'should render the example from the sotrybook', async () => {
		// Jest and its JSDOM does not allow making extensive use of searchParams used by Basic example.
		const path = '/story/woocommerce-admin-components-filterpicker--basic';

		expect( function () {
			render( <Basic path={ path } /> );
		} ).not.toThrow();
	} );
} );
