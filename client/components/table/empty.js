/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * `EmptyTable` displays a blank space with an optional message passed as a children node
 * with the purpose of replacing a table with no rows.
 * It mimics the same height a table would have according to the `numberOfRows` prop.
 */
class EmptyTable extends Component {
	render() {
		const { children, numberOfRows } = this.props;

		return (
			<div className="woocommerce-table is-empty" style={ { '--number-of-rows': numberOfRows } }>
				{ children }
			</div>
		);
	}
}

EmptyTable.propTypes = {
	/**
	 * An integer with the number of rows the box should occupy.
	 */
	numberOfRows: PropTypes.number,
};

EmptyTable.defaultProps = {
	numberOfRows: 5,
};

export default EmptyTable;
