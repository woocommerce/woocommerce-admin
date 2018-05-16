/** @format */
/**
 * External dependencies
 */
import { Button } from '@wordpress/components';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

class AgendaItem extends Component {
	render() {
		const { children, className, action, actionLabel } = this.props;
		const classes = classnames( 'woo-dash__agenda-item-wrapper', className );

		return (
			<div className={ classes }>
				{ children && <div className="woo-dash__agenda-item-content"> { children } </div> }
				<Button className="woo-dash__agenda-item-action-button button-secondary" onClick={ action }>
					{ actionLabel }
				</Button>
			</div>
		);
	}
}

AgendaItem.propTypes = {
	action: PropTypes.func.isRequired,
	actionLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default AgendaItem;
