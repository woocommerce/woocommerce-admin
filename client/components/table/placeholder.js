/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';
import { range } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Card from 'components/card';

class TablePlaceholder extends Component {
	render() {
		const { classNames, headers, title, rows } = this.props;
		return (
			<Card
				className={ classnames( 'woocommerce-table is-placeholder', classNames ) }
				title={ title }
			>
				<div className="woocommerce-table__table">
					<table>
						<tbody>
							<tr>
								{ headers.map( ( header, i ) => {
									const { label } = header;
									const thProps = {
										className: classnames( 'woocommerce-table__header' ),
									};

									return (
										<th role="columnheader" scope="col" key={ i } { ...thProps }>
											{ label }
										</th>
									);
								} ) }
							</tr>
							{ range( rows ).map( i => {
								return (
									<tr key={ i }>
										{ headers.map( ( header, j ) => {
											const Cell = 0 === j ? 'th' : 'td';
											const cellClasses = classnames( 'woocommerce-table__item' );
											return <Cell scope="row" key={ j } className={ cellClasses } />;
										} ) }
									</tr>
								);
							} ) }
						</tbody>
					</table>
				</div>
			</Card>
		);
	}
}

TablePlaceholder.propTypes = {
	headers: PropTypes.arrayOf(
		PropTypes.shape( {
			defaultSort: PropTypes.bool,
			isSortable: PropTypes.bool,
			key: PropTypes.string,
			label: PropTypes.string,
			required: PropTypes.bool,
		} )
	),
	rows: PropTypes.number.isRequired,
};

TablePlaceholder.defaultProps = {
	headers: [],
};

export default TablePlaceholder;
