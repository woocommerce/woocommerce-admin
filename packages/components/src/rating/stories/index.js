/**
 * External dependencies
 */
import { number } from '@storybook/addon-knobs';

/**
 * Internal dependencies
 */
import Rating from '../';
import '../style.scss';

export default {
	title: 'WooCommerce Admin/components/Rating',
	component: Rating,
};

export const Default = () => <Rating rating={ number( 'Rating', 4.5 ) } totalStars={ number( 'Total Stars', 5 ) } />;
