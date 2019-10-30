/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { Component } from '@wordpress/element';
import { createSlotFill, IconButton, NavigableMenu } from '@wordpress/components';
import Gridicon from 'gridicons';
import { partial } from 'lodash';

const { Fill, Slot } = createSlotFill( 'WooCommerceActivityPanelTabs' );

class Tabs extends Component {
	static Item = props => {
		const { name, title, icon, unread } = props;

		return (
			<Fill>
				{ fillProps => {
					const { currentTab, handleClick } = fillProps;
					const selected = name === currentTab;
					const className = classnames( 'woocommerce-layout__activity-panel-tab', {
						'is-active': selected,
						'has-unread': unread,
					} );
					const tabIndex = -1;

					return (
						<IconButton
							role="tab"
							className={ className }
							tabIndex={ tabIndex }
							aria-selected={ selected }
							aria-controls={ 'activity-panel-' + name }
							key={ 'activity-panel-tab-' + name }
							id={ 'activity-panel-tab-' + name }
							onClick={ partial( handleClick, name ) }
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
		const { currentTab, handleClick } = this.props;

		return (
			<NavigableMenu
				role="tablist"
				orientation="horizontal"
				className="woocommerce-layout__activity-panel-tabs"
			>
				<Slot fillProps={ { currentTab, handleClick } } />
			</NavigableMenu>
		);
	}
}

export default Tabs;
