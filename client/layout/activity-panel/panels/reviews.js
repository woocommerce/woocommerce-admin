/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ActivityHeader from '../activity-header';
import ProductImage from 'components/product-image';
import Rating from 'components/rating';

class ReviewsPanel extends Component {
	render() {
		return (
			<Fragment>
				<ActivityHeader title={ __( 'Reviews', 'wc-admin' ) } />
				<ProductImage product={ null } />
				<ProductImage product={ { images: [] } } />
				<ProductImage
					product={ {
						images: [
							{
								src: 'https://i.cloudup.com/pt4DjwRB84-3000x3000.png',
							},
						],
					} }
				/>
				<Rating rating={ 2.5 } totalStars={ 5 } />
				<Rating rating={ 2.5 } totalStars={ 6 } />
			</Fragment>
		);
	}
}

export default ReviewsPanel;
