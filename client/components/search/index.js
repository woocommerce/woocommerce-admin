/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { FormTokenField, Spinner } from '@wordpress/components';
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
			query,
		} = this.props;
		const showSpinner = requesting || ( query.search && ! suggestions );
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

Search.propTypes = {
	value: PropTypes.array,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	query: PropTypes.object.isRequired,
	selector: PropTypes.func.isRequired,
	isRequesting: PropTypes.func.isRequired,
	isError: PropTypes.func.isRequired,
	getSuggestions: PropTypes.func.isRequired,
};

export default compose(
	withSelect( ( select, { query, selector, isRequesting, isError, getSuggestions } ) => {
		const error = isError( query );
		return {
			requesting: isRequesting( query ),
			error,
			suggestions: query.search ? getSuggestions( selector( query ), error ) : null,
		};
	} )
)( Search );
