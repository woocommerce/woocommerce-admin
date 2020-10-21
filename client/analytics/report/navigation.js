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

/**
 * Internal dependencies
 */
import getReports from './get-reports';

const WCAdminNavigation = () => {
	const reports = getReports();
	const persistedQuery = getPersistedQuery( {} );
	return (
		<>
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

registerPlugin( 'wc-admin-navigation', { render: WCAdminNavigation } );
