/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import { createSlotFill, IconButton, NavigableMenu } from '@wordpress/components';
import Gridicon from 'gridicons';

const { Fill, Slot } = createSlotFill( 'WooCommerceActivityPanelTabs' );
console.log( 'Tabs', { Fill, Slot } );
class Tabs extends Component {
	static Item = props => {
		const { name, title, icon, unread, customTabClick } = props;

		return (
			<Fill>
				{ fillProps => {
					const { currentTab, handleTabClick, isPanelOpen } = fillProps;
					const selected = name === currentTab;
					const className = classnames( 'woocommerce-layout__activity-panel-tab', {
						'is-active': selected,
						'has-unread': unread,
					} );

					// Only make this item tabbable if it is the currently selected item, or the panel is closed.
					const tabIndex = selected || ! isPanelOpen ? null : -1;

					return (
						<IconButton
							role="tab"
							className={ className }
							tabIndex={ tabIndex }
							aria-selected={ selected }
							aria-controls={ 'activity-panel-' + name }
							key={ 'activity-panel-tab-' + name }
							id={ 'activity-panel-tab-' + name }
							onClick={ () => {
								customTabClick && customTabClick();
								handleTabClick( name );
							} }
							icon={ <Gridicon icon={ icon } /> }
						>
							{ title }{' '}
							{ unread && (
								<span className="screen-reader-text">
									{ __( 'unread activity', 'woocommerce-admin' ) }
								</span>
							) }
						</IconButton>
					);
				} }
			</Fill>
		);
	};

	render() {
		const { currentTab, handleTabClick, isPanelOpen } = this.props;

		return (
			<NavigableMenu
				role="tablist"
				orientation="horizontal"
				className="woocommerce-layout__activity-panel-tabs"
			>
				<Slot fillProps={ { currentTab, handleTabClick, isPanelOpen } } />
			</NavigableMenu>
		);
	}
}

export default Tabs;
