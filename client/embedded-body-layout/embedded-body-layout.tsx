/**
 * External dependencies
 */
import { Router, Route, Switch } from 'react-router-dom';
import { Suspense } from '@wordpress/element';
import { useUser } from '@woocommerce/data';
import { createBrowserHistory } from 'history';
import QueryString, { parse } from 'qs';

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

type QueryParams = {
	page: string;
	tab: string;
	section?: string;
};

function isWPPage(
	params: QueryParams | QueryString.ParsedQs
): params is QueryParams {
	return ( params as QueryParams ).page !== undefined;
}

const customHistory = createBrowserHistory();
Object.defineProperty( customHistory, 'location', {
	get: () => {
		const query = parse( location.search.substring( 1 ) );
		let pathname = location.search;
		if ( isWPPage( query ) ) {
			pathname = `${ query.page }_${ query.tab }`;
			if ( query.section ) {
				pathname += `_${ query.section }`;
			}
		}

		return {
			...location,
			pathname,
		};
	},
} );

export const EmbeddedBodyLayout = () => {
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
