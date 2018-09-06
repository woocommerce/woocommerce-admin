/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import PropTypes from 'prop-types';
import { withState } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Search from 'components/search';
import { updateQueryString } from 'lib/nav-utils';

const CompareFilter = withState( {
	selected: [],
} )( ( { path, query, selected, setState } ) => {
	const updateQuery = () => {
		const idList = selected.map( p => p.id );
		updateQueryString( { products: idList.join( ',' ) }, path, query );
	};

	return (
		<Card title={ __( 'Compare Products', 'wc-admin' ) } className="woocommerce-filters__compare">
			<div className="woocommerce-filters__compare-body">
				<Search
					type="products"
					selected={ selected }
					onChange={ value => {
						setState( { selected: value } );
					} }
				/>
			</div>
			<div className="woocommerce-filters__compare-footer">
				<Button onClick={ updateQuery } isDefault>
					{ __( 'Compare', 'wc-admin' ) }
				</Button>
			</div>
		</Card>
	);
} );

CompareFilter.propTypes = {
	/**
	 * The `path` parameter supplied by React-Router
	 */
	path: PropTypes.string.isRequired,
	/**
	 * The query string represented in object form
	 */
	query: PropTypes.object,
};

CompareFilter.defaultProps = {
	query: {},
};

export default CompareFilter;
