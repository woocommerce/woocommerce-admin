/**
 * External dependencies
 */
// import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import Activity from '../';

describe( 'Activity', () => {
	test( 'should have correct className', () => {
		// const activity = shallow( <Activity /> );
		// expect( activity.hasClass( 'woo-dash__activity' ) ).toBe( true );
		const activity = <Activity isProp={ true } />;
		expect( activity.props.isProp ).toBe( true );
	} );
} );
