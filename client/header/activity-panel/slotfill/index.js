/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import clickOutside from 'react-click-outside';
import { Component } from '@wordpress/element';
import Gridicon from 'gridicons';
import { IconButton } from '@wordpress/components';
import { uniqueId } from 'lodash';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { PluginArea } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import '../style.scss';
import ActivityPanelToggleBubble from '../toggle-bubble';
import { H, Section, Tabs, Panel, SlotFillProvider } from '@woocommerce/components';
import Inbox from '../panels/inbox';
import Orders from '../panels/orders';
import Stock from '../panels/stock';
import { recordEvent } from 'lib/tracks';
import Reviews from '../panels/reviews';
import WordPressNotices from '../panels/wordpress-notices';

const manageStock = getSetting( 'manageStock', 'no' );
const reviewsEnabled = getSetting( 'reviewsEnabled', 'no' );

class ActivityPanel extends Component {
	constructor() {
		super( ...arguments );
		this.togglePanel = this.togglePanel.bind( this );
		this.clearPanel = this.clearPanel.bind( this );
		this.toggleMobile = this.toggleMobile.bind( this );
		this.state = {
			isPanelOpen: false,
			mobileOpen: false,
			currentTab: '',
			isPanelSwitching: false,
			hasWordPressNotices: false,
		};
	}

	togglePanel( tabName ) {
		const { isPanelOpen, currentTab } = this.state;

		// If a panel is being opened, or if an existing panel is already open and a different one is being opened, record a track.
		if ( ! isPanelOpen || tabName !== currentTab ) {
			recordEvent( 'activity_panel_open', { tab: tabName } );
		}

		// The WordPress Notices tab is handled differently, since they are displayed inline, so the panel should be closed,
		// Close behavior of the expanded notices is based on current tab.
		if ( 'wpnotices' === tabName ) {
			this.setState( state => ( {
				currentTab: 'wpnotices' === state.currentTab ? '' : tabName,
				mobileOpen: 'wpnotices' !== state.currentTab,
				isPanelOpen: false,
			} ) );
			return;
		}

		this.setState( state => {
			if (
				tabName === state.currentTab ||
				'' === state.currentTab ||
				'wpnotices' === state.currentTab
			) {
				return {
					isPanelOpen: ! state.isPanelOpen,
					currentTab: tabName,
					mobileOpen: ! state.isPanelOpen,
				};
			}
			return { currentTab: tabName, isPanelSwitching: true };
		} );
	}

	clearPanel() {
		this.setState(
			( { isPanelOpen } ) => ( isPanelOpen ? { isPanelSwitching: false } : { currentTab: '' } )
		);
	}

	// On smaller screen, the panel buttons are hidden behind a toggle.
	toggleMobile() {
		const tabs = this.getTabs();
		this.setState( state => ( {
			mobileOpen: ! state.mobileOpen,
			currentTab: state.mobileOpen ? '' : tabs[ 0 ].name,
			isPanelOpen: ! state.mobileOpen,
		} ) );
	}

	handleClickOutside() {
		const { isPanelOpen, currentTab } = this.state;

		if ( isPanelOpen ) {
			this.togglePanel( currentTab );
		}
	}

	render() {
		const { currentTab, mobileOpen, isPanelOpen, isPanelSwitching } = this.state;
		const headerId = uniqueId( 'activity-panel-header_' );
		const panelClasses = classnames( 'woocommerce-layout__activity-panel', {
			'is-mobile-open': this.state.mobileOpen,
		} );

		const hasWordPressNotices = Boolean( document.getElementById( 'wp__notice-list' ) );

		// @todo - somehow trigger this from the fills?
		const hasUnread = false;
		const viewLabel = hasUnread
			? __( 'View Activity Panel, you have unread activity', 'woocommerce-admin' )
			: __( 'View Activity Panel', 'woocommerce-admin' );

		return (
			<div>
				<H id={ headerId } className="screen-reader-text">
					{ __( 'Store Activity', 'woocommerce-admin' ) }
				</H>
				<Section component="aside" id="woocommerce-activity-panel" aria-labelledby={ headerId }>
					<IconButton
						onClick={ this.toggleMobile }
						icon={
							mobileOpen ? (
								<Gridicon icon="cross-small" />
							) : (
								<ActivityPanelToggleBubble hasUnread={ hasUnread } />
							)
						}
						label={ mobileOpen ? __( 'Close Activity Panel', 'woocommerce-admin' ) : viewLabel }
						aria-expanded={ mobileOpen }
						tooltip={ false }
						className="woocommerce-layout__activity-panel-mobile-toggle"
					/>
					<div className={ panelClasses }>
						<SlotFillProvider>
							<Tabs
								currentTab={ currentTab }
								handleTabClick={ this.togglePanel }
								isPanelOpen={ isPanelOpen }
							/>
							<Panel
								currentTab={ currentTab }
								isOpen={ isPanelOpen }
								isSwitching={ isPanelSwitching }
								handleTransitionEnd={ this.clearPanel }
							/>
							<Inbox />
							<Orders />
							{ 'yes' === reviewsEnabled && <Reviews /> }
							{ 'yes' === manageStock && <Stock /> }
							<PluginArea />
							{ hasWordPressNotices && (
								<WordPressNotices currentTab={ currentTab } togglePanel={ this.togglePanel } />
							) }
						</SlotFillProvider>
					</div>
				</Section>
			</div>
		);
	}
}

export default clickOutside( ActivityPanel );
