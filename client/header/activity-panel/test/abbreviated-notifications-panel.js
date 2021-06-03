/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { AbbreviatedNotificationsPanel } from '../panels/inbox/abbreviated-notifications-panel';

jest.mock( '@wordpress/data', () => {
	// Require the original module to not be mocked...
	const originalModule = jest.requireActual( '@wordpress/data' );

	return {
		__esModule: true, // Use it when dealing with esModules
		...originalModule,
		useSelect: jest.fn().mockReturnValue( {} ),
	};
} );

describe( 'Inbox', () => {
	beforeEach( () => {
		useSelect.mockImplementation( () => ( {
			stockNoticesCount: 0,
			reviewsToModerateCount: 0,
			ordersToProcessCount: 0,
			thingsToDoNextCount: 0,
		} ) );
	} );
	it( 'does not show any abbreviated notifications', () => {
		const { queryByText } = render(
			<AbbreviatedNotificationsPanel query={ {} } />
		);
		expect( queryByText( 'Things to do next' ) ).toBeNull();
		expect( queryByText( 'Orders to fulfill' ) ).toBeNull();
		expect( queryByText( 'Reviews to moderate' ) ).toBeNull();
		expect( queryByText( 'Inventory to review' ) ).toBeNull();
	} );
	it( 'shows the `Things to do next` notification panel, with 1 thing to do', () => {
		useSelect.mockImplementation( () => ( {
			thingsToDoNextCount: 1,
		} ) );
		const { getByText } = render(
			<AbbreviatedNotificationsPanel query={ {} } />
		);
		expect( getByText( 'Things to do next' ) ).toBeDefined();
		expect( getByText( 'You have 1 new things to do' ) ).toBeDefined();
	} );
	it( 'shows the `Orders to fulfill` notification panel, with 2 thing to do', () => {
		useSelect.mockImplementation( () => ( {
			ordersToProcessCount: 2,
		} ) );
		const { getByText } = render(
			<AbbreviatedNotificationsPanel query={ {} } />
		);
		expect( getByText( 'Orders to fulfill' ) ).toBeDefined();
		expect( getByText( 'You have 2 orders to fulfill' ) ).toBeDefined();
	} );
	it( 'shows the `Reviews to moderate` notification panel, with 3 thing to do', () => {
		useSelect.mockImplementation( () => ( {
			reviewsToModerateCount: 3,
		} ) );
		const { getByText } = render(
			<AbbreviatedNotificationsPanel query={ {} } />
		);
		expect( getByText( 'Reviews to moderate' ) ).toBeDefined();
		expect( getByText( 'You have 3 reviews to moderate' ) ).toBeDefined();
	} );
	it( 'shows the `Inventory to review` notification panel', () => {
		useSelect.mockImplementation( () => ( {
			stockNoticesCount: 4,
		} ) );
		const { getByText } = render(
			<AbbreviatedNotificationsPanel query={ {} } />
		);
		expect( getByText( 'Inventory to review' ) ).toBeDefined();
		expect(
			getByText( 'You have inventory to review and update' )
		).toBeDefined();
	} );
	it( 'shows all the abbreviated notification panels', () => {
		useSelect.mockImplementation( () => ( {
			stockNoticesCount: 4,
			reviewsToModerateCount: 3,
			ordersToProcessCount: 2,
			thingsToDoNextCount: 1,
		} ) );
		const { getByText } = render(
			<AbbreviatedNotificationsPanel query={ {} } />
		);
		expect( getByText( 'Things to do next' ) ).toBeDefined();
		expect( getByText( 'Orders to fulfill' ) ).toBeDefined();
		expect( getByText( 'Reviews to moderate' ) ).toBeDefined();
		expect( getByText( 'Inventory to review' ) ).toBeDefined();
	} );
} );
