/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import {
	WooNavigationItem,
	getNewPath,
	getPersistedQuery,
} from '@woocommerce/navigation';
import { Link } from '@woocommerce/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import getReports from '../analytics/report/get-reports';
import { getPages } from './controller';

const NavigationPlugin = () => {
	const reports = getReports();
	const pages = getPages()
		.filter( ( page ) => page.navigationSlug )
		.map( ( page ) => {
			if ( page.navigationSlug === 'woocommerce-analytics-settings' ) {
				return {
					...page,
					breadcrumbs: [ __( 'Analytics', 'woocommerce-admin' ) ],
				};
			}
			return page;
		} );
	const persistedQuery = getPersistedQuery( {} );
	return (
		<>
			{ pages.map( ( page ) => (
				<WooNavigationItem
					item={ page.navigationSlug }
					key={ page.navigationSlug }
				>
					<Link
						className="components-button"
						href={ getNewPath( persistedQuery, page.path, {} ) }
						type="wc-admin"
					>
						{ page.breadcrumbs[ page.breadcrumbs.length - 1 ] }
					</Link>
				</WooNavigationItem>
			) ) }
			{ reports.map( ( item ) => (
				<WooNavigationItem
					item={ `woocommerce-analytics-${ item.report }` }
					key={ item.report }
				>
					<Link
						className="components-button"
						href={ getNewPath(
							persistedQuery,
							`/analytics/${ item.report }`,
							{}
						) }
						type="wc-admin"
					>
						{ item.title }
					</Link>
				</WooNavigationItem>
			) ) }
		</>
	);
};

registerPlugin( 'wc-admin-navigation', { render: NavigationPlugin } );
