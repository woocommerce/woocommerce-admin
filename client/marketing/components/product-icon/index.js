/**
 * External dependencies
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';

class ProductIcon extends Component {
	render() {
		return (
			<img src={ this.props.src }
				className={ classnames( this.props.className, 'woocommere-admin-marketing-product-icon' ) }
			/>
		);
	}
}

ProductIcon.propTypes = {
	src: PropTypes.string.isRequired,
};

export default ProductIcon;
