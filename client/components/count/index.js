/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
/**
 * Internal dependencies
 */
import './style.scss';

const Count = ( { count, label } ) => {
	return (
		<span className="woocommerce-count">
			<span className="screen-reader-text">{ label }</span> { count }
		</span>
	);
};

Count.propTypes = {
	count: PropTypes.number.isRequired,
	label: PropTypes.string,
};

Count.defaultProps = {
	label: __( 'Total', 'woo-dash' ),
};

export default Count;
