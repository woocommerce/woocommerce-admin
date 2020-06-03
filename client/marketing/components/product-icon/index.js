/**
 * External dependencies
 */
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

const ProductIcon = ( {
	src,
	className,
} ) => {

	return (
		<img
			src={ src }
			className={ classnames( className, 'woocommere-admin-marketing-product-icon' ) }
			alt=""
		/>
	);
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
