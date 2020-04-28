import { render } from '@testing-library/react';
import Homepage from '../index';

describe( 'homepage', () => {
	it( 'should render', () => {
		const { container } = render( <Homepage /> );
		// For now
		expect( container ).toBeTruthy();
	} );
} );
