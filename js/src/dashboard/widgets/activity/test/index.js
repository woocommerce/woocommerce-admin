/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import Activity from '../';

describe( 'Activity', () => {
	test( 'should have correct className', () => {
		const activity = shallow( <Activity /> );
		expect( activity.hasClass( 'woo-dash__activity' ) ).toBe( true );
	} );
} );
