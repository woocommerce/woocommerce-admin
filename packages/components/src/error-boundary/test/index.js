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
	let timesErrorHasBeenThrownCount = 0;
	const ComponentThrowingError = ( { children = null } ) => {
		useEffect( () => {
			if ( timesErrorHasBeenThrownCount >= 1 ) {
				return;
			}

			timesErrorHasBeenThrownCount += 1;
			throw new Error( 'Some error message' );
		} );

		return children;
	};

	const onError = ( e ) => {
		e.preventDefault();
	};

	// trying to silence console errors, since the output of this component can be noisy and cannot be avoided.
	beforeEach( () => {
		timesErrorHasBeenThrownCount = 0;
		window.addEventListener( 'error', onError );
		jest.spyOn( console, 'error' );
		// eslint-disable-next-line no-console
		console.error.mockImplementation( () => {} );
	} );

	afterEach( () => {
		window.removeEventListener( 'error', onError );
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

	it( 'removes the previous error information when the location changes', async () => {
		const errorHandlerMock = jest.fn().mockReturnValue( null );
		const history = createMemoryHistory();
		render(
			<Router history={ history }>
				<span>
					<ErrorBoundary>
						{ ( errorState ) =>
							errorState.error ? (
								errorHandlerMock( errorState )
							) : (
								<ComponentThrowingError>
									No more errors!
								</ComponentThrowingError>
							)
						}
					</ErrorBoundary>
				</span>
			</Router>
		);

		expect(
			screen.queryByText( 'No more errors!' )
		).not.toBeInTheDocument();
		expect( errorHandlerMock ).toHaveBeenCalledWith( {
			error: expect.any( Error ),
			info: expect.anything(),
		} );

		errorHandlerMock.mockClear();
		history.push( '/another-route' );

		expect(
			await screen.findByText( 'No more errors!' )
		).toBeInTheDocument();
		expect( errorHandlerMock ).not.toHaveBeenCalled();
	} );
} );
