/**
 * Internal dependencies
 */
import Rating from '../';

export default {
	title: 'WooCommerce Admin/components/Rating',
	component: Rating,
};

export const Default = () => <Rating rating={ 4 } totalStars={ 5 } />;
