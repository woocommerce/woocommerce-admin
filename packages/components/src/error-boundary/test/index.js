/**
 * External dependencies
 */
import React, { useEffect } from '@wordpress/element';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

/**
 * Internal dependencies
 */
import ErrorBoundary from '..';

describe( 'ErrorBoundary', () => {
	const ComponentThrowingError = ( { children } ) => {
		useEffect( () => {
			throw new Error( 'Some error message' );
		} );

		return children;
	};

	const handleError = ( e ) => {
		e.preventDefault();
	};

	// trying to silence console errors, since the output of this component can be noisy and cannot be avoided.
	beforeEach( () => {
		window.addEventListener( 'error', handleError );
		jest.spyOn( console, 'error' );
		// eslint-disable-next-line no-console
		console.error.mockImplementation( () => undefined );
	} );

	afterEach( () => {
		window.removeEventListener( 'error', handleError );
		// eslint-disable-next-line no-console
		console.error.mockRestore();
	} );

	it( 'should return the error information on error', async () => {
		const errorHandlerMock = jest.fn().mockReturnValue( null );
		render(
			<Router history={ createMemoryHistory() }>
				<span>
					<ErrorBoundary>
						{ ( errorState ) =>
							errorState.error ? (
								errorHandlerMock( errorState )
							) : (
								<ComponentThrowingError>
									Content
								</ComponentThrowingError>
							)
						}
					</ErrorBoundary>
				</span>
			</Router>
		);

		expect( screen.queryByText( 'Content' ) ).not.toBeInTheDocument();
		expect( errorHandlerMock ).toHaveBeenCalledWith( {
			error: expect.any( Error ),
			info: expect.anything(),
		} );
	} );
} );
