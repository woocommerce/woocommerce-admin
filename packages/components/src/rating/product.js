/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { createElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Rating from './index';

/**
 * Display a set of stars representing the product's average rating.
 *
 * @param {Object} props
 * @param {Object} props.product
 * @return {Object} -
 */
const ProductRating = ( { product, ...props } ) => {
	const rating = ( product && product.average_rating ) || 0;
	return <Rating rating={ rating } { ...props } />;
};

ProductRating.propTypes = {
	/**
	 * A product object containing a `average_rating`.
	 * See https://woocommerce.github.io/woocommerce-rest-api-docs/#products.
	 */
	product: PropTypes.object.isRequired,
};

export default ProductRating;
