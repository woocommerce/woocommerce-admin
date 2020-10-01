/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { numberFormat } from '@woocommerce/number';
import CurrencyFactory from '@woocommerce/currency';
import { CURRENCY } from '@woocommerce/wc-admin-settings';

/**
 * Internal dependencies
 */
import { Leaderboard } from '../';
import mockData from '../data/top-selling-products-mock-data';

const { formatAmount, formatDecimal } = CurrencyFactory( CURRENCY );

const rows = mockData.map( ( row ) => {
	const {
		name,
		items_sold: itemsSold,
		net_revenue: netRevenue,
		orders_count: ordersCount,
	} = row;
	return [
		{
			display: '<a href="#">' + name + '</a>',
			value: name,
		},
		{
			display: numberFormat( CURRENCY, itemsSold ),
			value: itemsSold,
		},
		{
			display: numberFormat( CURRENCY, ordersCount ),
			value: ordersCount,
		},
		{
			display: formatAmount( netRevenue ),
			value: formatDecimal( netRevenue ),
		},
	];
} );

const headers = [
	{
		label: 'Name',
	},
	{
		label: 'Items Sold',
	},
	{
		label: 'Orders',
	},
	{
		label: 'Net Sales',
	},
];

describe( 'Leaderboard', () => {
	test( 'should render empty message when there are no rows', () => {
		const { queryByText } = render(
			<Leaderboard
				id="products"
				title={ '' }
				headers={ [] }
				rows={ [] }
				totalRows={ 5 }
			/>
		);

		expect(
			queryByText( 'No data recorded for the selected time period.' )
		).not.toBeNull();
	} );

	test( 'should render correct data in the table', () => {
		const { container, getAllByRole } = render(
			<Leaderboard
				id="products"
				title={ '' }
				headers={ headers }
				rows={ rows }
				totalRows={ 5 }
			/>
		);

		const leaderboard = container.querySelector(
			'.woocommerce-leaderboard'
		);

		expect( leaderboard ).not.toBeNull();

		const tableRows = getAllByRole( 'row' );

		expect( tableRows.length ).toBe( 5 + 1 ); // Including header row = 6.

		// Check the headers.
		const tableHeaders = getAllByRole( 'columnheader' );

		expect( tableHeaders.length ).toBe( headers.length );
		tableHeaders.forEach( ( header, idx ) =>
			expect( header ).toHaveTextContent( headers[ idx ].label )
		);

		// Check the first data row.
		const firstRowColumns = tableRows[ 1 ].getElementsByClassName(
			'woocommerce-table__item'
		);

		expect( firstRowColumns.length ).toBe( 4 );
		expect( firstRowColumns[ 0 ] ).toHaveTextContent( mockData[ 0 ].name );
		expect( firstRowColumns[ 1 ] ).toHaveTextContent(
			numberFormat( CURRENCY, mockData[ 0 ].items_sold )
		);
		expect( firstRowColumns[ 2 ] ).toHaveTextContent(
			numberFormat( CURRENCY, mockData[ 0 ].orders_count )
		);
		expect( firstRowColumns[ 3 ] ).toHaveTextContent(
			formatAmount( mockData[ 0 ].net_revenue )
		);
	} );
} );
