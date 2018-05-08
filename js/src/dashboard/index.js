/** @format */
/**
 * External dependencies
 */
import { Component, compose } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';
import WidgetNumbers from './widgets/numbers';
import ActivityList from './widgets/activity';
import { withHooks, renderHook, renderComponent } from '../extension-api';

class Dashboard extends Component {
	render() {
		const { hooks } = this.props;
		return (
			<div className="woo-dashboard">
				<div className="woo-dash__primary">
					<WidgetNumbers />
					{ renderHook( hooks, 'dashboard_widgets_primary', function( { component } ) {
						return (
							<div>
								{ renderComponent( component ) }
							</div>
						);
					} ) }
				</div>

				<div className="woo-dash__secondary">
					<ActivityList />
				</div>
			</div>
		);
	}
}

export default compose( [
	withHooks( [
		'dashboard_widgets_primary',
	] ),
] )( Dashboard );
