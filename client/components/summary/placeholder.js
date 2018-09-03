/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { range } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import SummaryList from './index';

/**
 * `SummaryListPlaceholder` behaves like `SummaryList` but displays placeholder summary items instead of data.
 * This can be used while loading.
 */
class SummaryListPlaceholder extends Component {
	render() {
		const { numberOfItems } = this.props;
		const rows = range( numberOfItems ).map( i => {
			return (
				<li className="woocommerce-summary__item-container is-placeholder" key={ i }>
					<span className="woocommerce-summary__item">
						<span className="woocommerce-summary__item-label" />
						<span className="woocommerce-summary__item-data">
							<span className="woocommerce-summary__item-value" />
							<div className="woocommerce-summary__item-delta">
								<span className="woocommerce-summary__item-delta-value" />
							</div>
						</span>
						<span className="woocommerce-summary__item-prev-label" />
						<span className="woocommerce-summary__item-prev-value" />
					</span>
				</li>
			);
		} );

		return <SummaryList>{ rows }</SummaryList>;
	}
}

SummaryListPlaceholder.propTypes = {
	/**
	 * An integer with the number of summary items to display. Defaults to 5.
	 */
	numberOfItems: PropTypes.number.isRequired,
};

SummaryListPlaceholder.defaultProps = {
	numberOfRows: 5,
};

export default SummaryListPlaceholder;
