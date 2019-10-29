/** @format */
/**
 * External dependencies
 */
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import { createSlotFill } from '@wordpress/components';

/**
 * Internal dependencies
 */

const { Fill, Slot } = createSlotFill( 'WooCommerceActivityPanel' );

class Panel extends Component {
	static Content = props => {
		const { name, title, children, currentTab, isPanelOpen, isPanelSwitching } = props;
		console.log( 'Panel.Content', props );
		const isActive = name === currentTab;
		const classNames = classnames( 'woocommerce-layout__activity-panel-wrapper', {
			'is-open': isPanelOpen,
			'is-switching': isPanelSwitching,
		} );

		return (
			isActive && (
				<Fill>
					<div
						className={ classNames }
						tabIndex={ 0 }
						role="tabpanel"
						aria-label={ title }
						// onTransitionEnd={ this.clearPanel }
						// onAnimationEnd={ this.clearPanel }
					>
						<div
							className="woocommerce-layout__activity-panel-content"
							key={ 'activity-panel-' + currentTab }
							id={ 'activity-panel-' + currentTab }
						>
							{ children }
						</div>
					</div>
				</Fill>
			)
		);
	};

	render() {
		return <Slot fillProps={ this.props } />;
	}
}

export default Panel;
