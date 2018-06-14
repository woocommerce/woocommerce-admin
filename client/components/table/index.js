/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';
import classnames from 'classnames';
import { IconButton } from '@wordpress/components';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';

class Table extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			tabIndex: null,
			rows: props.rows || [],
			sortedBy: null,
			sortDir: 'none',
		};
		this.container = createRef();
		this.sortBy = this.sortBy.bind( this );
		this.captionID = uniqueId( 'caption-' );
	}

	sortBy( i ) {
		let sortDir;
		const ascending = this.state.sortDir === 'ascending';
		if ( i === this.state.sortedBy ) {
			sortDir = ! ascending ? 'ascending' : 'descending';
		} else {
			sortDir = 'ascending';
		}
		this.setState( prevState => ( {
			rows: prevState.rows
				.slice( 0 )
				.sort( ( a, b ) => ( sortDir === 'ascending' ? a[ i ] > b[ i ] : a[ i ] < b[ i ] ) ),
			sortedBy: i,
			sortDir: sortDir,
		} ) );
	}

	componentDidMount() {
		const { scrollWidth, clientWidth } = this.container.current;
		const scrollable = scrollWidth > clientWidth;
		/* eslint-disable react/no-did-mount-set-state */
		this.setState( {
			tabIndex: scrollable ? '0' : null,
		} );
		/* eslint-enable react/no-did-mount-set-state */
	}

	render() {
		const { caption, classNames, headers, rowHeader, sortable } = this.props;
		const { rows, sortedBy, sortDir, tabIndex } = this.state;
		const classes = classnames( 'woocommerce-table', classNames );

		return (
			<div
				className={ classes }
				ref={ this.container }
				tabIndex={ tabIndex }
				aria-labelledby={ this.captionID }
				role="group"
			>
				<table className="woocommerce-table__table">
					<caption id={ this.captionID } className="woocommerce-table__caption">
						{ caption }
						{ tabIndex === '0' && <small>(scroll to see more)</small> }
					</caption>
					<tbody>
						<tr>
							{ headers.map( ( header, i ) => (
								<th
									role="columnheader"
									scope="col"
									key={ i }
									aria-sort={ sortedBy === i ? sortDir : 'none' }
									className={ classnames( 'woocommerce-table__header', {
										'is-sorted': sortedBy === i,
									} ) }
								>
									{ header }
									{ sortable && (
										<IconButton
											icon={ sortDir !== 'ascending' ? 'arrow-up' : 'arrow-down' }
											label={
												sortDir !== 'ascending'
													? sprintf( __( 'Sort by %s in ascending order', 'woo-dash' ), header )
													: sprintf( __( 'Sort by %s in descending order', 'woo-dash' ), header )
											}
											onClick={ () => this.sortBy( i ) }
										/>
									) }
								</th>
							) ) }
						</tr>
						{ rows.map( ( row, i ) => (
							<tr key={ i }>
								{ row.map(
									( cell, j ) =>
										rowHeader === j ? (
											<th scope="row" key={ j } className="woocommerce-table__item">
												{ cell }
											</th>
										) : (
											<td key={ j } className="woocommerce-table__item">
												{ cell }
											</td>
										)
								) }
							</tr>
						) ) }
					</tbody>
				</table>
			</div>
		);
	}
}

Table.propTypes = {
	caption: PropTypes.string.isRequired,
	className: PropTypes.string,
	headers: PropTypes.arrayOf( PropTypes.node ),
	rows: PropTypes.arrayOf( PropTypes.arrayOf( PropTypes.node ) ).isRequired,
	rowHeader: PropTypes.oneOfType( [ PropTypes.number, PropTypes.bool ] ),
	sortable: PropTypes.bool,
};

Table.defaultProps = {
	headers: [],
	rowHeader: 0,
	sortable: true,
};

export default Table;
