/**
 * External dependencies
 */
import PropTypes from 'prop-types';

const ActivityCardPlaceholder = ( {
	className,
	hasAction,
	hasDate,
	hasSubtitle,
	lines,
} ) => {
	const cardClasses = [
		'woocommerce-activity-card',
		'is-loading',
	];

	if ( className ) {
		cardClasses.push( className );
	}

	const cardClassName = cardClasses.join( ' ' );

	return (
		<div className={ cardClassName } aria-hidden>
			<span className="woocommerce-activity-card__icon">
				<span className="is-placeholder" />
			</span>
			<div className="woocommerce-activity-card__header">
				<div className="woocommerce-activity-card__title is-placeholder" />
				{ hasSubtitle && (
					<div className="woocommerce-activity-card__subtitle is-placeholder" />
				) }
				{ hasDate && (
					<div className="woocommerce-activity-card__date">
						<span className="is-placeholder" />
					</div>
				) }
			</div>
			<div className="woocommerce-activity-card__body">
				{ Array.from( { length: lines }, ( v, i ) => (
					<span className="is-placeholder" key={ i } />
				) ) }
			</div>
			{ hasAction && (
				<div className="woocommerce-activity-card__actions">
					<span className="is-placeholder" />
				</div>
			) }
		</div>
	);
};

ActivityCardPlaceholder.propTypes = {
	className: PropTypes.string,
	hasAction: PropTypes.bool,
	hasDate: PropTypes.bool,
	hasSubtitle: PropTypes.bool,
	lines: PropTypes.number,
};

ActivityCardPlaceholder.defaultProps = {
	hasAction: false,
	hasDate: false,
	hasSubtitle: false,
	lines: 1,
};

export default ActivityCardPlaceholder;
