/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
// jest.mock( '@wordpress/element', () => ( global.wp.element ) );
import Activity from '../';


describe( 'Activity', () => {
	const activity = shallow( <Activity /> );
	expect( activity.hasClass( 'woo-dash__activity' ) ).toBe( true );
} );
