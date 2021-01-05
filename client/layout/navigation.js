/**
 * External dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import {
	WooNavigationItem,
	getNewPath,
	getPersistedQuery,
	getQueryExcludedScreens,
	getScreenFromPath,
} from '@woocommerce/navigation';
import { Link } from '@woocommerce/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import getReports from '../analytics/report/get-reports';
import { getPages } from './controller';
import { isWCAdmin } from '../dashboard/utils';
import { addHistoryListener } from '../navigation/utils';

const NavigationPlugin = () => {
	const [ persistedQuery, setPersistedQuery ] = useState(
		getPersistedQuery()
	);

	// Update the persisted queries when history is updated
	useEffect( () => {
		return addHistoryListener( () => {
			setTimeout( () => {
				if (
					getQueryExcludedScreens().includes( getScreenFromPath() )
				) {
					return;
				}
				setPersistedQuery( getPersistedQuery() );
			}, 0 );
		} );
	}, [] );

	/**
	 * If the current page is embedded, stay with the default urls
	 * provided by Navigation because the router isn't present to
	 * respond to <Link /> component's manipulation of the url.
	 */
	if ( ! isWCAdmin( window.location.href ) ) {
		return null;
	}

	const reports = getReports()
		.filter( ( item ) => item.navArgs )
		.map( ( item ) => ( {
			...item,
			excludePersisted: getQueryExcludedScreens().includes( item.report ),
		} ) );

	const pages = getPages()
		.filter( ( page ) => page.navArgs )
		.map( ( page ) => {
			if ( page.path === '/analytics/settings' ) {
				return {
					...page,
					breadcrumbs: [ __( 'Analytics', 'woocommerce-admin' ) ],
				};
			}
			return page;
		} )
		.map( ( page ) => {
			const path = page.path || 'homescreen';
			return {
				...page,
				excludePersisted: getQueryExcludedScreens().includes(
					path.replace( '/analytics', '' ).replace( '/', '' )
				),
			};
		} );

	return (
		<>
			{ pages.map( ( page ) => (
				<WooNavigationItem
					item={ page.navArgs.id }
					key={ page.navArgs.id }
				>
					<Link
						className="components-button"
						href={ getNewPath(
							page.excludePersisted ? {} : persistedQuery,
							page.path,
							{}
						) }
						type="wc-admin"
					>
						{ page.breadcrumbs[ page.breadcrumbs.length - 1 ] }
					</Link>
				</WooNavigationItem>
			) ) }
			{ reports.map( ( item ) => (
				<WooNavigationItem
					item={ item.navArgs.id }
					key={ item.navArgs.id }
				>
					<Link
						className="components-button"
						href={ getNewPath(
							item.excludePersisted ? {} : persistedQuery,
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

registerPlugin( 'wc-admin-navigation', {
	render: NavigationPlugin,
} );
