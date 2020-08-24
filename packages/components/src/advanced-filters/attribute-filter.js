/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { SelectControl as Select, Spinner } from '@wordpress/components';
import { partial } from 'lodash';
import interpolateComponents from 'interpolate-components';
import classnames from 'classnames';
import { Fragment, useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import SelectControl from '../select-control';

const getScreenReaderText = ( filter, config ) => {
	return '';
};

const AttributeFilter = ( props ) => {
	const { className, config, filter, isEnglish, onFilterChange } = props;
	const { key: filterKey, rule, value } = filter;
	const { labels, rules } = config;

	const [ attributes, setAttributes ] = useState( [] );

	// Fetch all product attributes on mount.
	useEffect( () => {
		apiFetch( {
			path: '/wc/v3/products/attributes',
		} )
			.then( ( attrs ) =>
				attrs.map( ( { id, name } ) => ( {
					key: id.toString(),
					label: name,
				} ) )
			)
			.then( setAttributes );
	}, [] );

	const [ selectedAttribute, setSelectedAttribute ] = useState(
		Array.isArray( value ) ? value[ 0 ] : ''
	);

	// Set selected attribute from filter value (in query string).
	useEffect( () => {
		if ( Array.isArray( value ) ) {
			setSelectedAttribute( value[ 0 ] );
		}
	}, [ value ] );

	const [ attributeTerms, setAttributeTerms ] = useState( [] );

	// Fetch all product attributes on mount.
	useEffect( () => {
		if ( ! selectedAttribute ) {
			return;
		}
		setAttributeTerms( [] );
		apiFetch( {
			path: `/wc/v3/products/attributes/${ selectedAttribute }/terms`,
		} )
			.then( ( terms ) =>
				terms.map( ( { id, name } ) => ( {
					key: id.toString(),
					label: name,
				} ) )
			)
			.then( setAttributeTerms );
	}, [ selectedAttribute ] );

	const [ selectedAttributeTerm, setSelectedAttributeTerm ] = useState(
		Array.isArray( value ) ? value[ 1 ] || '' : ''
	);

	const screenReaderText = getScreenReaderText( filter, config );

	/*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
	return (
		<fieldset
			className="woocommerce-filters-advanced__line-item"
			tabIndex="0"
		>
			<legend className="screen-reader-text">{ labels.add || '' }</legend>
			<div
				className={ classnames(
					'woocommerce-filters-advanced__fieldset',
					{
						'is-english': isEnglish,
					}
				) }
			>
				{ interpolateComponents( {
					mixedString: labels.title,
					components: {
						title: <span className={ className } />,
						rule: (
							<Select
								className={ classnames(
									className,
									'woocommerce-filters-advanced__rule'
								) }
								options={ rules }
								value={ rule }
								onChange={ partial(
									onFilterChange,
									filterKey,
									'rule'
								) }
								aria-label={ labels.rule }
							/>
						),
						filter: (
							<div
								className={ classnames(
									className,
									'woocommerce-filters-advanced__attribute-fieldset'
								) }
							>
								{ attributes.length > 0 ? (
									<SelectControl
										className="woocommerce-filters-advanced__input woocommerce-search"
										label="Attribute name"
										isSearchable
										showAllOnFocus
										options={ attributes }
										selected={ selectedAttribute }
										onChange={ ( attr ) => {
											setSelectedAttribute( attr );
											onFilterChange(
												filterKey,
												'value',
												[ attr ]
											);
										} }
									/>
								) : (
									<Spinner />
								) }
								{ attributes.length > 0 &&
									selectedAttribute !== '' &&
									( attributeTerms.length ? (
										<SelectControl
											className="woocommerce-filters-advanced__input woocommerce-search"
											label="Attribute value"
											isSearchable
											showAllOnFocus
											options={ attributeTerms }
											selected={ selectedAttributeTerm }
											onChange={ ( term ) => {
												setSelectedAttributeTerm(
													term
												);
												onFilterChange(
													filterKey,
													'value',
													[ selectedAttribute, term ]
												);
											} }
										/>
									) : (
										<Spinner />
									) ) }
							</div>
						),
					},
				} ) }
			</div>
			{ screenReaderText && (
				<span className="screen-reader-text">{ screenReaderText }</span>
			) }
		</fieldset>
	);
	/*eslint-enable jsx-a11y/no-noninteractive-tabindex*/
};

AttributeFilter.propTypes = {
	/**
	 * The configuration object for the single filter to be rendered.
	 */
	config: PropTypes.shape( {
		labels: PropTypes.shape( {
			rule: PropTypes.string,
			title: PropTypes.string,
			filter: PropTypes.string,
		} ),
		rules: PropTypes.arrayOf( PropTypes.object ),
		input: PropTypes.object,
	} ).isRequired,
	/**
	 * The activeFilter handed down by AdvancedFilters.
	 */
	filter: PropTypes.shape( {
		key: PropTypes.string,
		rule: PropTypes.string,
		value: PropTypes.arrayOf(
			PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] )
		),
	} ).isRequired,
	/**
	 * Function to be called on update.
	 */
	onFilterChange: PropTypes.func.isRequired,
};

export default AttributeFilter;
