/**
 * Internal dependencies
 */
import Rating from '../';
import '../style.scss';

export default {
	title: 'WooCommerce Admin/components/Rating',
	component: Rating,
};

export const Default = () => <Rating rating={ 4 } totalStars={ 5 } />;
