/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom/matchers';
import userEvent from '@testing-library/user-event';
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import TableCard from '../index';
import mockHeaders from './data/table-mock-headers';
import mockData from './data/table-mock-data';
import mockSummary from './data/table-mock-summary';

expect.extend( { toHaveClass } );

describe( 'TableCard', () => {
	it( 'should render placeholders for Table and TableSummary while loading', () => {
		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ true }
				rows={ [] }
				rowsPerPage={ 5 }
				totalRows={ 5 }
				summary={ [] }
			/>
		);

		// Check Table
		expect( screen.getByRole( 'group', { hidden: true } ) ).toHaveClass(
			'is-loading'
		);

		// Check TableSummary
		expect( screen.getByRole( 'complementary' ) ).toHaveClass(
			'is-loading'
		);
	} );

	it( 'should render table along with summary data when row and summary data is present', () => {
		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ false }
				rows={ mockData }
				rowsPerPage={ 5 }
				totalRows={ 5 }
				summary={ mockSummary }
			/>
		);

		// Check Table
		expect( screen.getByRole( 'group' ) ).not.toHaveClass( 'is-loading' );

		// Check TableSummary
		expect( screen.getByRole( 'complementary' ) ).not.toHaveClass(
			'is-loading'
		);
	} );

	it( 'should not error with default callback props', () => {
		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ false }
				rows={ mockData }
				rowsPerPage={ 1 }
				totalRows={ 5 }
				summary={ mockSummary }
			/>
		);

		// Trigger a query change (next page).
		userEvent.click(
			screen.getByLabelText( 'Next Page', { selector: 'button' } )
		);

		// Trigger a column change.
		userEvent.click(
			screen.getByTitle( 'Choose which values to display', {
				selector: 'button',
			} )
		);

		// We shouldn't get here if an error occurred.
		expect( true ).toBe( true );
	} );

	it( 'should render rows correctly with custom rowKey prop', () => {
		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ false }
				rows={ mockData }
				rowsPerPage={ 1 }
				totalRows={ 5 }
				rowKey={ ( row ) => row[ 1 ].value }
				summary={ mockSummary }
			/>
		);

		for ( const row of mockData ) {
			expect(
				screen.queryByText( row[ 0 ].display )
			).toBeInTheDocument();
		}
	} );

	it( 'should render headers having class is-left-aligned if isLeftAligned is set to true', () => {
		mockHeaders[ 0 ].isLeftAligned = true;
		mockHeaders[ 1 ].isLeftAligned = true;
		mockHeaders[ 1 ].isNumeric = true;

		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ false }
				rowsPerPage={ 5 }
				totalRows={ 5 }
			/>
		);

		expect( screen.getAllByRole( 'columnheader' )[ 0 ] ).toHaveClass(
			'is-left-aligned'
		);

		expect( screen.getAllByRole( 'columnheader' )[ 1 ] ).toHaveClass(
			'is-left-aligned'
		);
	} );

	it( 'should render headers not having class is-left-aligned if isLeftAligned is not set and isNumeric is true', () => {
		mockHeaders[ 2 ].isNumeric = true;

		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ false }
				rowsPerPage={ 5 }
				totalRows={ 5 }
			/>
		);

		expect( screen.getAllByRole( 'columnheader' )[ 2 ] ).not.toHaveClass(
			'is-left-aligned'
		);
	} );
	it( 'should render headers having class is-left-aligned if isLeftAligned is not set and isNumeric is false', () => {
		mockHeaders[ 3 ].isNumeric = false;

		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ false }
				rowsPerPage={ 5 }
				totalRows={ 5 }
			/>
		);

		expect( screen.getAllByRole( 'columnheader' )[ 3 ] ).toHaveClass(
			'is-left-aligned'
		);
	} );
} );
