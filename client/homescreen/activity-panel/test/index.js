/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { ActivityPanel } from '../';

jest.mock( '@wordpress/data', () => {
	const originalModule = jest.requireActual( '@wordpress/data' );

	return {
		__esModule: true,
		...originalModule,
		useSelect: jest.fn().mockReturnValue( {
			isTaskListHidden: false,
		} ),
	};
} );

// Mock the panels.
jest.mock( '../panels', () => {
	return {
		getAllPanels: jest.fn().mockImplementation( () => [
			{
				id: 'custom-panel-1',
				title: 'custom-panel-1',
				count: 10000,
				initialOpen: true,
				panel: <span>Custom panel 1</span>,
				collapsible: true,
			},
			{
				id: 'custom-panel-2',
				title: 'custom-panel-2',
				count: 20000,
				initialOpen: false,
				panel: <span>Custom panel 2</span>,
				collapsible: true,
			},
		] ),
	};
} );

// Mock the orders and order statuses.
jest.mock( '../orders/utils', () => {
	return {
		getLowStockCount: jest.fn().mockImplementation( () => 0 ),
		getUnreadOrders: jest.fn().mockImplementation( () => 100 ),
		getOrderStatuses: jest.fn().mockImplementation( () => [ 'status' ] ),
	};
} );

describe( 'ActivityPanel', () => {
	it( 'should render a panel with two rows', () => {
		render( <ActivityPanel /> );
		expect( screen.getByText( 'custom-panel-1' ) ).not.toBeNull();
		expect( screen.getByText( 'custom-panel-2' ) ).not.toBeNull();
	} );

	it( 'should render one visible panel and one hidden panel', () => {
		render( <ActivityPanel /> );
		expect( screen.queryByText( 'Custom panel 1' ) ).toBeInTheDocument();
		expect(
			screen.queryByText( 'Custom panel 2' )
		).not.toBeInTheDocument();
	} );

	it( 'should render the count of unread items', () => {
		render( <ActivityPanel /> );
		expect( screen.queryByText( '10000' ) ).toBeInTheDocument();
		expect( screen.queryByText( '20000' ) ).toBeInTheDocument();
	} );
} );
