/**
 * External dependencies
 */
import { Router, Route, Switch, useLocation } from 'react-router-dom';
import { Suspense } from '@wordpress/element';
import {
	useUser,
    useOptionsHydration
} from '@woocommerce/data';
import { createBrowserHistory } from 'history';
import { Spinner } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import { EmbeddedPage, embeddedPageRegistry } from './page-registry';
import '../payments';
import './style.scss';

interface PrimaryLayoutProps {
	page: EmbeddedPage;
}

const PrimaryLayout = ({ page }: PrimaryLayoutProps) => {
	console.log(page);
	return (
		<div
			className="woocommerce-embedded-layout__primary"
			id="woocommerce-embedded-layout__primary"
		>
			<Suspense fallback={ <Spinner /> }>
				<page.container />
			</Suspense>
		</div>
	);
}

const Test = () => {
	const location = useLocation();
	console.log(location);

	return <div></div>
}

const customHistory = createBrowserHistory();
Object.defineProperty(customHistory, 'location', {
	get: () => {
		const query = location.search.substring( 1 );
		const pathname = query || '/';

		return {
			...location,
			pathname,
		};
	}
});

export const EmbeddedBodyLayout = () => {
	useOptionsHydration(window.wcSettings.preloadOptions);
	const { currentUserCan } = useUser();

	const pages = embeddedPageRegistry.getPages();
	console.log(pages);

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
