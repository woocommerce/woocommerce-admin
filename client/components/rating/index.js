/** @format */

/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import Gridicon from 'gridicons';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

class Rating extends Component {
	stars() {
		const { size, totalStars } = this.props;

		const starStyles = {
			width: size + 'px',
			height: size + 'px',
		};

		const stars = [];
		for ( let i = 0; i < totalStars; i++ ) {
			stars.push( <Gridicon key={ 'star-' + i } icon="star" style={ starStyles } /> );
		}
		return stars;
	}

	render() {
		const { rating, totalStars, className } = this.props;

		const classes = classnames( 'woocommerce-rating', className );
		const perStar = 100 / totalStars;
		const outlineStyles = {
			width: Math.round( perStar * rating ) + '%',
		};

		return (
			<div className={ classes }>
				{ this.stars() }
				<div className="woocommerce-rating__star-outline" style={ outlineStyles }>
					{ this.stars() }
				</div>
			</div>
		);
	}
}

Rating.propTypes = {
	rating: PropTypes.number,
	totalStars: PropTypes.number,
	size: PropTypes.number,
	className: PropTypes.string,
};

Rating.defaultProps = {
	rating: 0,
	totalStars: 5,
	size: 18,
};

export default Rating;
