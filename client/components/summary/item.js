/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Gridicon from 'gridicons';
import PropTypes from 'prop-types';

const SummaryNumber = ( { delta, label, prevLabel, prevValue, reverseTrend, selected, value } ) => {
	const classes = classnames( 'woocommerce-summary__item', {
		'is-selected': selected,
		'is-good-trend': reverseTrend ? delta < 0 : delta > 0,
		'is-bad-trend': reverseTrend ? delta > 0 : delta < 0,
	} );

	return (
		<li className={ classes }>
			<span className="woocommerce-summary__item-label">{ label }</span>

			<span className="woocommerce-summary__item-data">
				<span className="woocommerce-summary__item-value">{ value }</span>
				{ delta ? (
					<span className="woocommerce-summary__item-delta">
						<Gridicon
							className="woocommerce-summary__item-delta-icon"
							icon={ delta > 0 ? 'arrow-up' : 'arrow-down' }
						/>
						<span className="woocommerce-summary__item-delta-value">{ delta }%</span>
					</span>
				) : (
					<span className="woocommerce-summary__item-delta">
						<Gridicon className="woocommerce-summary__item-delta-icon" icon="minus" />
						<span className="woocommerce-summary__item-delta-value">0%</span>
					</span>
				) }
			</span>
			{ prevLabel && <span className="woocommerce-summary__item-prev-label">{ prevLabel }</span> }
			{ ' ' /* Add a real space so the line breaks here, and not in the label text. */ }
			{ prevValue && <span className="woocommerce-summary__item-prev-value">{ prevValue }</span> }
		</li>
	);
};

SummaryNumber.propTypes = {
	context: PropTypes.string,
	delta: PropTypes.number,
	label: PropTypes.string.isRequired,
	prevLabel: PropTypes.string,
	prevValue: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	selected: PropTypes.bool,
	reverseTrend: PropTypes.bool,
	value: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ).isRequired,
};

SummaryNumber.defaultProps = {
	prevLabel: __( 'Previous Period:', 'wc-admin' ),
	reverseTrend: false,
};

export default SummaryNumber;
