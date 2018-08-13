/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { FormTokenField, Spinner } from '@wordpress/components';
import { get } from 'lodash';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

class Search extends Component {
	render() {
		const {
			value,
			onChange,
			placeholder,
			onInputChange,
			requesting,
			suggestions,
			search,
		} = this.props;
		const showSpinner = requesting || ( search && ! suggestions );
		return (
			<div className="woocommerce-search">
				<FormTokenField
					value={ value }
					onChange={ onChange }
					placeholder={ placeholder }
					onInputChange={ onInputChange }
					suggestions={ suggestions }
				/>
				{ showSpinner && (
					<div className="woocommerce-search__requesting">
						<Spinner />
					</div>
				) }
			</div>
		);
	}
}

const getSuggestions = ( data, path, error ) => {
	return data && ! error ? data.map( d => get( d, path ) ) : null;
};

Search.propTypes = {
	value: PropTypes.array,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	search: PropTypes.string,
	searchFn: PropTypes.string.isRequired,
	requestingFn: PropTypes.string.isRequired,
	errorFn: PropTypes.string.isRequired,
	getPath: PropTypes.string,
	perPage: PropTypes.number,
	orderb: PropTypes.string,
};

export default compose(
	withSelect(
		( select, { search, searchFn, requestingFn, errorFn, getPath, perPage, orderby } ) => {
			const selectors = select( 'wc-admin' );
			const query = {
				search,
				per_page: perPage,
				orderby,
			};
			const error = selectors[ errorFn ]( query );
			return {
				requesting: selectors[ requestingFn ]( query ),
				error,
				suggestions: search
					? getSuggestions( selectors[ searchFn ]( query ), getPath, error )
					: null,
			};
		}
	)
)( Search );
