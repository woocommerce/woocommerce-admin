/**
 * External dependencies
 */
import { shallow } from 'enzyme';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Connect } from '../index.js';

describe( 'Rendering', () => {
	it( 'should render an abort button when the abort handler is provided', async () => {
		const connectWrapper = shallow( <Connect onAbort={ () => {} } /> );

		const buttons = connectWrapper.find( Button );

		expect( buttons.length ).toBe( 2 );
		expect( buttons.at( 1 ).text() ).toBe( 'Abort' );
	} );
} );
