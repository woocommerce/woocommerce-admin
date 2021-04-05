/**
 * External dependencies
 */
import { Router, Route, Switch } from 'react-router-dom';
import { Suspense } from '@wordpress/element';
import { useUser, useOptionsHydration } from '@woocommerce/data';
import { createBrowserHistory } from 'history';
import { Spinner } from '@woocommerce/components';
import { parse } from 'qs';

/**
 * Internal dependencies
 */
import { EmbeddedPage, embeddedPageRegistry } from './page-registry';
import '../payments';
import './style.scss';

interface PrimaryLayoutProps {
	page: EmbeddedPage;
}

const PrimaryLayout = ( { page }: PrimaryLayoutProps ) => {
	return (
		<div
			className="woocommerce-embedded-layout__primary"
			id="woocommerce-embedded-layout__primary"
		>
			<Suspense fallback={ null }>
				<page.container />
			</Suspense>
		</div>
	);
};

const customHistory = createBrowserHistory();
Object.defineProperty( customHistory, 'location', {
	get: () => {
		const query = parse( location.search.substring( 1 ) ) as {
			page: string;
			tab: string;
		};
		const pathname = query.page + '_' + query.tab;

		return {
			...location,
			pathname,
		};
	},
} );

export const EmbeddedBodyLayout = () => {
	useOptionsHydration( window.wcSettings.preloadOptions );
	const { currentUserCan } = useUser();

	const pages = embeddedPageRegistry.getPages();

	return (
		<Router history={ customHistory }>
			<Switch>
				{ pages
					.filter(
						( page ) =>
							! page.capability ||
							currentUserCan( page.capability )
					)
					.map( ( page ) => {
						return (
							<Route
								key={ page.path }
								path={ page.path }
								exact
								render={ ( props ) => (
									<PrimaryLayout page={ page } { ...props } />
								) }
							/>
						);
					} ) }
			</Switch>
		</Router>
	);
};
