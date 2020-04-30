/* eslint-disable jest/no-mocks-import */
/**
 * External dependencies
 */
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

/**
 * Internal dependencies
 */
import Timeline from '..';
import mockData from '../__mocks__/timeline-mock-data';

describe( 'Timeline', () => {
	test( 'Renders empty correctly', () => {
		const timeline = shallow( <Timeline /> );
		expect( timeline.find( '.timeline_no_events' ).length ).toBe( 1 );
		expect(
			timeline
				.find( '.timeline_no_events' )
				.first()
				.contains( 'No data to display' )
		).toBe( true );
	} );

	test( 'Renders data correctly', () => {
		const timeline = mount( <Timeline items={ mockData } /> );

		// Ensure correct divs are loaded.
		expect( timeline.find( '.timeline_no_events' ).length ).toBe( 0 );
		expect( timeline.find( '.woocommerce-timeline' ).length ).toBe( 1 );

		// Ensure groups have the correct number of items.
		expect( timeline.find( '.woocommerce-timeline-group' ).length ).toBe(
			3
		);
		expect(
			timeline
				.find( '.woocommerce-timeline-group ul' )
				.at( 0 )
				.children().length
		).toBe( 1 );
		expect(
			timeline
				.find( '.woocommerce-timeline-group ul' )
				.at( 1 )
				.children().length
		).toBe( 2 );
		expect(
			timeline
				.find( '.woocommerce-timeline-group ul' )
				.at( 2 )
				.children().length
		).toBe( 1 );

		// Ensure dates are correctly rendered.
		expect(
			timeline
				.find( '.woocommerce-timeline-group__title' )
				.first()
				.text()
		).toBe( 'January 22, 2020' );
		expect(
			timeline
				.find( '.woocommerce-timeline-group__title' )
				.last()
				.text()
		).toBe( 'January 17, 2020' );

		// Ensure the correct number of items is rendered.
		expect( timeline.find( '.woocommerce-timeline-item' ).length ).toBe(
			4
		);

		// Ensure hidden timestamps are actually hidden and vice versa.
		expect(
			timeline
				.find( '.woocommerce-timeline-item__timestamp' )
				.at( 2 )
				.text()
		).toBe( '' );
		expect(
			timeline
				.find( '.woocommerce-timeline-item__timestamp' )
				.at( 1 )
				.text()
		).not.toBe( '' );
	} );

	test( 'Empty snapshot', () => {
		const tree = renderer.create( <Timeline /> ).toJSON();
		expect( tree ).toMatchSnapshot();
	} );

	test( 'With data snapshot', () => {
		const tree = renderer
			.create( <Timeline items={ mockData } /> )
			.toJSON();
		expect( tree ).toMatchSnapshot();
	} );

	describe( 'Timeline utilities', () => {
		test.todo( 'Sorts correctly' );

		test.todo( 'Groups correctly' );
	} );
} );
