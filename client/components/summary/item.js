/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import classnames from 'classnames';
import Gridicon from 'gridicons';
import { isUndefined } from 'lodash';
import PropTypes from 'prop-types';

const SummaryNumber = ( { delta, label, prevLabel, prevValue, reverseTrend, selected, value } ) => {
	const classes = classnames( 'woocommerce-summary__item', {
		'is-selected': selected,
		'is-good-trend': reverseTrend ? delta < 0 : delta > 0,
		'is-bad-trend': reverseTrend ? delta > 0 : delta < 0,
	} );

	let icon = delta > 0 ? 'arrow-up' : 'arrow-down';
	if ( ! delta ) {
		// delta is zero or falsey
		icon = 'arrow-right';
	}

	return (
		<li className={ classes }>
			<span className="woocommerce-summary__item-label">{ label }</span>

			<span className="woocommerce-summary__item-data">
				<span className="woocommerce-summary__item-value">{ value }</span>
				<span className="woocommerce-summary__item-delta">
					<Gridicon className="woocommerce-summary__item-delta-icon" icon={ icon } size={ 18 } />
					<span className="woocommerce-summary__item-delta-value">
						{ ! isUndefined( delta )
							? sprintf( __( '%d%%', 'wc-admin' ), delta )
							: __( 'N/A', 'wc-admin' ) }
					</span>
				</span>
			</span>
			<span className="woocommerce-summary__item-prev-label">{ prevLabel }</span>
			{ ' ' /* Add a real space so the line breaks here, and not in the label text. */ }
			<span className="woocommerce-summary__item-prev-value">
				{ ! isUndefined( prevValue ) ? prevValue : __( 'N/A', 'wc-admin' ) }
			</span>
		</li>
	);
};

SummaryNumber.propTypes = {
	delta: PropTypes.number,
	label: PropTypes.string.isRequired,
	prevLabel: PropTypes.string,
	prevValue: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	reverseTrend: PropTypes.bool,
	selected: PropTypes.bool,
	value: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ).isRequired,
};

SummaryNumber.defaultProps = {
	prevLabel: __( 'Previous Period:', 'wc-admin' ),
	reverseTrend: false,
	selected: false,
};

export default SummaryNumber;
