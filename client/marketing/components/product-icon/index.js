/**
 * External dependencies
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from '@wordpress/element';
import { Icon } from '@wordpress/icons';
import { camelCase } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';
import * as icons from './icons';

class ProductIcon extends Component {
	render() {

		let product = camelCase( this.props.product );
		let iconComponent = icons[ 'blank' ];

		if ( product in icons ) {
			iconComponent = icons[ product ];
		}

		return (
			<Icon
				icon={ iconComponent }
				className={ classnames( this.props.className, 'woocommerce-admin-marketing-product-icon' ) }
			/>
		);
	}
}

ProductIcon.propTypes = {
	/**
	 * Icon src.
	 */
	src: PropTypes.string.isRequired,
	/**
	 * Additional classNames.
	 */
	className: PropTypes.string,
};

export default ProductIcon;
