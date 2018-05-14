/**
 * External dependencies
 *
 * @format
 */

import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import Activity from '../';

describe( 'Activity', () => {
	test( 'should have correct className', () => {
		const activity = shallow( <Activity id={ 33 } /> );
		expect( activity.prop( 'id' ) ).toBe( 33 );
	} );
} );
