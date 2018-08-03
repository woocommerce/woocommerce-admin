/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Component, createRef } from '@wordpress/element';
import classnames from 'classnames';
import { IconButton } from '@wordpress/components';
import Gridicon from 'gridicons';
import PropTypes from 'prop-types';
import { isEqual, uniqueId, noop } from 'lodash';

const ASC = 'ascending';

const getDisplay = cell => cell.display || null;

class Table extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			tabIndex: null,
			rows: props.rows || [],
		};
		this.container = createRef();
		this.sortBy = this.sortBy.bind( this );
		this.captionID = uniqueId( 'caption-' );
	}

	componentDidUpdate( prevProps ) {
		if ( ! isEqual( this.props.rows, prevProps.rows ) ) {
			/* eslint-disable react/no-did-update-set-state */
			this.setState( {
				rows: this.props.rows,
			} );
			/* eslint-enable react/no-did-update-set-state */
		}
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

	sortBy( key ) {
		return () => this.props.onSort( key );
	}

	render() {
		const { caption, classNames, headers, rowHeader } = this.props;
		const { rows, sortedBy, sortDir, tabIndex } = this.state;
		const classes = classnames( 'woocommerce-table__table', classNames );

		return (
			<div
				className={ classes }
				ref={ this.container }
				tabIndex={ tabIndex }
				aria-labelledby={ this.captionID }
				role="group"
			>
				<table>
					<caption id={ this.captionID } className="woocommerce-table__caption screen-reader-text">
						{ caption }
						{ tabIndex === '0' && <small>{ __( '(scroll to see more)', 'wc-admin' ) }</small> }
					</caption>
					<tbody>
						<tr>
							{ headers.map( ( header, i ) => {
								const { isSortable, key, label } = header;
								const thProps = {
									className: classnames( 'woocommerce-table__header', {
										'is-sortable': isSortable,
										'is-sorted': sortedBy === i,
									} ),
								};
								if ( isSortable ) {
									thProps[ 'aria-sort' ] = sortedBy === i ? sortDir : 'none';
								}
								const iconLabel =
									sortDir !== ASC
										? sprintf( __( 'Sort by %s in ascending order', 'wc-admin' ), label )
										: sprintf( __( 'Sort by %s in descending order', 'wc-admin' ), label );
								return (
									<th role="columnheader" scope="col" key={ i } { ...thProps }>
										{ isSortable ? (
											<IconButton
												icon={
													sortDir === ASC ? (
														<Gridicon size={ 18 } icon="chevron-up" />
													) : (
														<Gridicon size={ 18 } icon="chevron-down" />
													)
												}
												aria-label={ iconLabel }
												onClick={ this.sortBy( key ) }
												isDefault
											>
												{ label }
											</IconButton>
										) : (
											label
										) }
									</th>
								);
							} ) }
						</tr>
						{ rows.map( ( row, i ) => (
							<tr key={ i }>
								{ row.map(
									( cell, j ) =>
										rowHeader === j ? (
											<th scope="row" key={ j } className="woocommerce-table__item">
												{ getDisplay( cell ) }
											</th>
										) : (
											<td key={ j } className="woocommerce-table__item">
												{ getDisplay( cell ) }
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
	headers: PropTypes.arrayOf(
		PropTypes.shape( {
			defaultSort: PropTypes.bool,
			isSortable: PropTypes.bool,
			key: PropTypes.string,
			label: PropTypes.string,
			required: PropTypes.bool,
		} )
	),
	onSort: PropTypes.func,
	rows: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape( {
				display: PropTypes.node,
				value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number, PropTypes.bool ] ),
			} )
		)
	).isRequired,
	rowHeader: PropTypes.oneOfType( [ PropTypes.number, PropTypes.bool ] ),
};

Table.defaultProps = {
	headers: [],
	onSort: noop,
	rowHeader: 0,
};

export default Table;
