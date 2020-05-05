/**
 * External dependencies
 */
import { render, fireEvent, screen } from '@testing-library/react';
import { StatsOverview } from '../index';
import { recordEvent } from 'lib/tracks';

jest.mock( 'lib/tracks' );
// Mock the stats list so that it can be tested separately.
jest.mock( '../stats-list', () =>
	jest.fn().mockImplementation( () => <div>mocked stats list</div> )
);

describe( 'StatsOverview tracking', () => {
	it( 'should record an event when a stat is toggled', () => {
		render(
			<StatsOverview
				userPrefs={ {
					hiddenStats: null,
				} }
				updateCurrentUserData={ () => {} }
			/>
		);

		const ellipsisBtn = screen.getByTitle(
			'Choose which values to display'
		);
		fireEvent.click( ellipsisBtn );
		const totalSalesBtn = screen.getByText( 'Total Sales' );
		fireEvent.click( totalSalesBtn );

		expect( recordEvent ).toHaveBeenCalledWith(
			'statsoverview_indicators_toggle',
			{
				indicator_name: 'revenue/total_sales',
				status: 'off',
			}
		);
	} );
} );

describe( 'StatsOverview toggle and persist stat preference', () => {
	it( 'should update preferences', () => {
		const updateCurrentUserData = jest.fn();

		render(
			<StatsOverview
				userPrefs={ {
					hiddenStats: null,
				} }
				updateCurrentUserData={ updateCurrentUserData }
			/>
		);

		const ellipsisBtn = screen.getByTitle(
			'Choose which values to display'
		);
		fireEvent.click( ellipsisBtn );
		const totalSalesBtn = screen.getByText( 'Total Sales' );
		fireEvent.click( totalSalesBtn );

		expect( updateCurrentUserData ).toHaveBeenCalledWith( {
			homepage_stats: {
				hiddenStats: [
					'revenue/net_revenue',
					'products/items_sold',
					'revenue/total_sales',
				],
			},
		} );
	} );
} );

describe( 'StatsOverview rendering correct elements', () => {
	it( 'should include a link to all the overview page', () => {
		render(
			<StatsOverview
				userPrefs={ {
					hiddenStats: null,
				} }
				updateCurrentUserData={ () => {} }
			/>
		);

		const viewDetailedStatsLink = screen.getByText( 'View detailed stats' );
		expect( viewDetailedStatsLink ).toBeDefined();
		expect( viewDetailedStatsLink.href ).toBe(
			'http://localhost/admin.php?page=wc-admin&path=%2Fanalytics%2Foverview'
		);
	} );
} );
