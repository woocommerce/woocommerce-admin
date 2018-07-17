/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

class ActivityCardPlaceholder extends Component {
	render() {
		const { className, children, hasAction, hasDate, hasSubtitle } = this.props;
		const cardClassName = classnames( 'woocommerce-activity-card is-loading', className );

		return (
			<div className={ cardClassName } aria-hidden>
				<span className="woocommerce-activity-card__icon">
					<span className="is-placeholder" />
				</span>
				<div className="woocommerce-activity-card__header">
					<div className="woocommerce-activity-card__title is-placeholder" />
					{ hasSubtitle && <div className="woocommerce-activity-card__subtitle is-placeholder" /> }
					{ hasDate && (
						<div className="woocommerce-activity-card__date">
							<span className="is-placeholder" />
						</div>
					) }
				</div>
				<div className="woocommerce-activity-card__body">{ children }</div>
				{ hasAction && (
					<div className="woocommerce-activity-card__actions">
						<span className="is-placeholder" />
					</div>
				) }
			</div>
		);
	}
}

ActivityCardPlaceholder.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	hasAction: PropTypes.bool,
	hasDate: PropTypes.bool,
	hasSubtitle: PropTypes.bool,
};

ActivityCardPlaceholder.defaultProps = {
	hasAction: false,
	hasDate: false,
	hasSubtitle: false,
};

export default ActivityCardPlaceholder;
