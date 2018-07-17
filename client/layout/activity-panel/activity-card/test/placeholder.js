/** @format */
/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import { ActivityCardPlaceholder } from '../';

describe( 'ActivityCardPlaceholder', () => {
	test( 'should render a default placeholder', () => {
		const card = shallow(
			<ActivityCardPlaceholder>
				<span className="is-placeholder" />
			</ActivityCardPlaceholder>
		);
		expect( card ).toMatchSnapshot();
	} );

	test( 'should render a card placeholder with subtitle placeholder', () => {
		const card = shallow(
			<ActivityCardPlaceholder hasSubtitle>
				<span className="is-placeholder" />
			</ActivityCardPlaceholder>
		);
		expect( card ).toMatchSnapshot();
	} );

	test( 'should render a card placeholder with date placeholder', () => {
		const card = shallow(
			<ActivityCardPlaceholder hasDate>
				<span className="is-placeholder" />
			</ActivityCardPlaceholder>
		);
		expect( card ).toMatchSnapshot();
	} );

	test( 'should render a card placeholder with action placeholder', () => {
		const card = shallow(
			<ActivityCardPlaceholder hasAction>
				<span className="is-placeholder" />
			</ActivityCardPlaceholder>
		);
		expect( card ).toMatchSnapshot();
	} );

	test( 'should render a card placeholder with all optional placeholder', () => {
		const card = shallow(
			<ActivityCardPlaceholder hasAction hasDate hasSubtitle>
				<span className="is-placeholder" />
			</ActivityCardPlaceholder>
		);
		expect( card ).toMatchSnapshot();
	} );
} );
