/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom/matchers';

/**
 * Internal dependencies
 */
import TableCard from '../index';
import mockHeaders from './data/table-mock-headers';
import mockData from './data/table-mock-data';

expect.extend( { toHaveClass } );

describe( 'TableCard', () => {
	it( 'should render placeholder table while loading', () => {
		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ true }
				rows={ [] }
				rowsPerPage={ 5 }
				totalRows={ 5 }
			/>
		);

		expect( screen.getByRole( 'group', { hidden: true } ) ).toHaveClass(
			'is-loading'
		);
	} );

	it( 'should not render placeholder table when not loading', () => {
		render(
			<TableCard
				title="Revenue"
				headers={ mockHeaders }
				isLoading={ false }
				rows={ mockData }
				rowsPerPage={ 5 }
				totalRows={ 5 }
			/>
		);

		expect( screen.getByRole( 'group' ) ).not.toHaveClass( 'is-loading' );
	} );
} );
