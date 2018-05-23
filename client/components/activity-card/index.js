/** @format */
/**
 * External dependencies
 */
// import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { cloneElement, Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

// @TODO Use @wordpress/date to format the date

class ActivityCard extends Component {
	render() {
		const { actions, date, icon, image, label, menu, children } = this.props;
		const className = classnames( 'woo-dash__activity-card' );

		return (
			<section className={ className }>
				<header className="woo-dash__activity-card-header">
					<span className="woo-dash__activity-card-icon">{ icon }</span>
					<h3 className="woo-dash__activity-card-label">
						{ label }
						{ date && <span className="woo-dash__activity-card-date">{ date }</span> }
					</h3>
					{ menu && <div className="woo-dash__activity-card-menu">{ menu }</div> }
				</header>
				<div className="woo-dash__activity-card-content">
					{ children }
					{ image }
				</div>
				{ actions && (
					<footer className="woo-dash__activity-card-actions">
						{ actions.map( ( item, i ) => cloneElement( item, { key: i } ) ) }
					</footer>
				) }
			</section>
		);
	}
}

ActivityCard.propTypes = {
	children: PropTypes.node,
};

// ActivityCard.defaultProps = {};

export default ActivityCard;
