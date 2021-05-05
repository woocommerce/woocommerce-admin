/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { ErrorBoundary } from '@woocommerce/components';
import { createMemoryHistory } from 'history';
import { Router, useLocation } from 'react-router-dom';

const ErrorThrowerComponent = () => {
	const [ hasError, setHasError ] = useState( false );
	const handleClick = useCallback( () => {
		setHasError( true );
	}, [ setHasError ] );

	useEffect( () => {
		if ( ! hasError ) return;

		throw new Error(
			'Message of the error being thrown - this error would otherwise show a blank page!'
		);
	}, [ hasError ] );

	return <button onClick={ handleClick }>Click me to throw an error</button>;
};

export const Basic = () => {
	return (
		<ErrorBoundary>
			{ ( errorState ) =>
				errorState.error ? (
					<div>
						<p>This is what has been thrown:</p>
						<pre>
							Error message:
							{ JSON.stringify(
								errorState.error.message,
								null,
								2
							) }
						</pre>
						<pre>
							Error info:
							{ JSON.stringify( errorState.info, null, 2 ) }
						</pre>
					</div>
				) : (
					<ErrorThrowerComponent />
				)
			}
		</ErrorBoundary>
	);
};

const ErrorBoundaryRouter = ( { children } ) => {
	const location = useLocation();

	// this demoes what to do when the component is rendered within the context of a route, so that `ErrorBoundary` state resets on route change.
	return (
		<ErrorBoundary key={ location.pathname }>{ children }</ErrorBoundary>
	);
};

export const WithinRouterContext = () => {
	const history = createMemoryHistory();

	return (
		<Router history={ history }>
			<ErrorBoundaryRouter>
				{ ( errorState ) =>
					errorState.error ? (
						<div>
							<button
								onClick={ () =>
									history.push( `/${ Math.random() }` )
								}
							>
								Reset
							</button>
							<p>This is what has been thrown:</p>
							<pre>
								Error message:
								{ JSON.stringify(
									errorState.error.message,
									null,
									2
								) }
							</pre>
							<pre>
								Error info:
								{ JSON.stringify( errorState.info, null, 2 ) }
							</pre>
						</div>
					) : (
						<ErrorThrowerComponent />
					)
				}
			</ErrorBoundaryRouter>
		</Router>
	);
};

export default {
	title: 'WooCommerce Admin/components/ErrorBoundary',
	component: ErrorBoundary,
};
