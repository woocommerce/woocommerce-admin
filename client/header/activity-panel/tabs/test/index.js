import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Tabs } from '../';
import { Tab } from '../../tab';

const generateTabs = () => {
	return [ '1', '2', '3', '4' ].map( ( name, i ) => ( {
		name: name,
		title: `Tab ${ name }`,
		icon: <span>icon</span>,
		unread: false,
	} ) );
};

describe( 'Activity Panel Tabs', () => {
	it( 'correctly tracks the selected tab', () => {
		const { getAllByRole } = render(
			<Tabs
				selectedTab={ '3' }
				tabs={ generateTabs() }
				onTabClick={ () => {} }
			/>
		);

		const tabs = getAllByRole( 'tab' );

		fireEvent.click( tabs[ 2 ] );

		expect( tabs[ 2 ] ).toHaveClass( 'is-active' );

		fireEvent.click( tabs[ 3 ] );

		expect( tabs[ 2 ] ).not.toHaveClass( 'is-active' );
		expect( tabs[ 3 ] ).toHaveClass( 'is-active' );
	} );

	it( 'triggers onTabClick with the selected when a tab is clicked', () => {
		const tabClickSpy = jest.fn();

		const { getAllByRole } = render(
			<Tabs
				selectedTab={ '3' }
				tabs={ generateTabs() }
				onTabClick={ tabClickSpy }
			/>
		);

		const tabs = getAllByRole( 'tab' );

		fireEvent.click( tabs[ 3 ] );
	} );

	// it( 'records an event when panels are being opened and when the open panel changes', () => {} );
} );
