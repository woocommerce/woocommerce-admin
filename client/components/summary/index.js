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
	const hasItemsClass =
		children && children.length ? `has-${ children.length }-items` : 'has-one-item';
	const classes = classnames( 'woocommerce-summary', hasItemsClass );

	return (
		<ul className={ classes } aria-label={ label }>
			{ children }
		</ul>
	);
};

SummaryList.propTypes = {
	children: PropTypes.node.isRequired,
	label: PropTypes.string,
};

export { SummaryList };
export { default as SummaryNumber } from './item';
