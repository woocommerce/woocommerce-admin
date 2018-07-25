/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

const SummaryList = ( { children, label } ) => {
	if ( ! label ) {
		label = __( 'Performance Indicators', 'wc-admin' );
	}
	// We default to "one" because we can't have empty children. If `children` is just one item,
	// it's not an array and .length is undefined.
	let hasItemsClass = 'has-one-item';
	if ( children && children.length ) {
		const length = children.filter( Boolean ).length;
		hasItemsClass = length < 10 ? `has-${ length }-items` : 'has-10-items';
	}
	const classes = classnames( 'woocommerce-summary', hasItemsClass );

	return (
		<nav aria-label={ label }>
			<ul className={ classes }>{ children }</ul>
		</nav>
	);
};

SummaryList.propTypes = {
	children: PropTypes.node.isRequired,
	label: PropTypes.string,
};

export { SummaryList };
export { default as SummaryNumber } from './item';
