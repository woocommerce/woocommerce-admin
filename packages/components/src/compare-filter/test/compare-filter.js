/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { Basic } from '../stories/index';

describe( 'CompareFilter', () => {
	it( 'should render the example from the storybook', async () => {
		const path = '/story/woocommerce-admin-components-comparefilter--basic';

		expect( function () {
			render( <Basic path={ path } /> );
		} ).not.toThrow();
	} );
} );
