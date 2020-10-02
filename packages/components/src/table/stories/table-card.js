/**
 * External dependencies
 */
import { TableCard } from '@woocommerce/components';

/**
 * External dependencies
 */
import { withState } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { headers, rows, summary } from './index';

export const Basic = withState( {
	query: {
		paged: 1,
	},
} )( ( { query, setState } ) => (
	<TableCard
		title="Revenue Last Week"
		rows={ rows }
		headers={ headers }
		onQueryChange={ ( param ) => ( value ) =>
			setState( {
				query: {
					[ param ]: value,
				},
			} ) }
		query={ query }
		rowsPerPage={ 7 }
		totalRows={ 10 }
		summary={ summary }
	/>
) );

export default {
	title: 'WooCommerce Admin/components/TableCard',
	component: TableCard,
};
