/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import clickOutside from 'react-click-outside';
import { Component } from '@wordpress/element';
import Gridicon from 'gridicons';
<<<<<<< HEAD
import { IconButton } from '@wordpress/components';
import { partial, uniqueId } from 'lodash';
=======
import { IconButton, NavigableMenu } from '@wordpress/components';
import { partial } from 'lodash';
>>>>>>> Fix Accessibility issues: tabpanel behavior, and reduced motion setting

/**
 * Internal dependencies
 */
import './style.scss';
import ActivityPanelToggleBubble from './toggle-bubble';
import { H, Section } from 'layout/section';
import InboxPanel from './inbox';
import OrdersPanel from './orders';
import StockPanel from './stock';
import ReviewsPanel from './reviews';
import WordPressNotices from './wordpress-notices';

class ActivityPanel extends Component {
	constructor() {
		super( ...arguments );
		this.togglePanel = this.togglePanel.bind( this );
		this.toggleMobile = this.toggleMobile.bind( this );
		this.renderTab = this.renderTab.bind( this );
		this.state = {
			isPanelOpen: false,
			mobileOpen: false,
			currentTab: '',
		};
	}

	togglePanel( tabName ) {
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
					currentTab: state.isPanelOpen ? '' : tabName,
					mobileOpen: ! state.isPanelOpen,
				};
			}
			return { currentTab: tabName };
		} );
	}

	// On smaller screen, the panel buttons are hidden behind a toggle.
	toggleMobile() {
		this.setState( state => ( {
			mobileOpen: ! state.mobileOpen,
			currentTab: state.mobileOpen ? '' : 'inbox',
			isPanelOpen: ! state.mobileOpen,
		} ) );
	}

	handleClickOutside() {
		const { isPanelOpen, currentTab } = this.state;

		if ( isPanelOpen ) {
			this.togglePanel( currentTab );
		}
	}

	// TODO Pull in dynamic unread status/count
	getTabs() {
		return [
			{
				name: 'inbox',
				title: __( 'Inbox', 'wc-admin' ),
				icon: <Gridicon icon="mail" />,
				unread: true,
			},
			{
				name: 'orders',
				title: __( 'Orders', 'wc-admin' ),
				icon: <Gridicon icon="pages" />,
				unread: false,
			},
			{
				name: 'stock',
				title: __( 'Stock', 'wc-admin' ),
				icon: <Gridicon icon="clipboard" />,
				unread: true,
			},
			{
				name: 'reviews',
				title: __( 'Reviews', 'wc-admin' ),
				icon: <Gridicon icon="star" />,
				unread: true,
			},
		];
	}

	getPanelContent( tab ) {
		switch ( tab ) {
			case 'inbox':
				return <InboxPanel />;
			case 'orders':
				return <OrdersPanel />;
			case 'stock':
				return <StockPanel />;
			case 'reviews':
				return <ReviewsPanel />;
			default:
				return null;
		}
	}

	renderPanel() {
		const { isPanelOpen, currentTab } = this.state;
		const classNames = classnames( 'woocommerce-layout__activity-panel-wrapper', {
			'is-open': isPanelOpen,
		} );

		return (
			<div className={ classNames }>
				{ ( isPanelOpen && (
					<div
						className="woocommerce-layout__activity-panel-content"
						key={ 'activity-panel-' + currentTab }
						id={ 'activity-panel-' + currentTab }
						role="tabpanel"
						tabindex={ 0 }
						aria-labelledby={ 'activity-panel-tab' + currentTab }
					>
						{ this.getPanelContent( currentTab ) }
					</div>
				) ) ||
					null }
			</div>
		);
	}

	renderTab( tab, i ) {
		const { currentTab, isPanelOpen } = this.state;
		const className = classnames( 'woocommerce-layout__activity-panel-tab', {
			'is-active': tab.name === currentTab,
			'has-unread': tab.unread,
		} );

		const selected = tab.name === currentTab;
		let tabIndex = -1;

		// Only make this item tabbable if it is the currently selected item, or the panel is closed and the item is the first item (Inbox)
		// If wpnotices is currently selected, tabindex below should be  -1 and <WordPressNotices /> will become the tabbed element.
		if ( selected || ( ! isPanelOpen && i === 0 && 'wpnotices' !== currentTab ) ) {
			tabIndex = null;
		}

		return (
			<IconButton
				role="tab"
				className={ className }
				tabIndex={ tabIndex }
				aria-selected={ selected }
				aria-controls={ 'activity-panel-' + tab.name }
				key={ 'activity-panel-tab-' + tab.name }
				id={ 'activity-panel-tab-' + tab.name }
				onClick={ partial( this.togglePanel, tab.name ) }
				icon={ tab.icon }
			>
				{ tab.title }
			</IconButton>
		);
	}

	render() {
		const tabs = this.getTabs();
		const { currentTab, mobileOpen } = this.state;
		const headerId = uniqueId( 'activity-panel-header_' );
		const panelClasses = classnames( 'woocommerce-layout__activity-panel', {
			'is-mobile-open': this.state.mobileOpen,
		} );

		// TODO Replace the mobile toggle with the Woo bubble Gridicon once it has been added.
		return (
			<div>
				<H id={ headerId } className="screen-reader-text">
					{ __( 'Store Activity', 'wc-admin' ) }
				</H>
				<Section component="aside" id="woocommerce-activity-panel" aria-labelledby={ headerId }>
					<IconButton
						onClick={ this.toggleMobile }
						icon={ mobileOpen ? <Gridicon icon="cross-small" /> : <ActivityPanelToggleBubble /> }
						label={
							mobileOpen
								? __( 'Close Activity Panel', 'wc-admin' )
								: __( 'View Activity Panel', 'wc-admin' )
						}
						aria-expanded={ mobileOpen }
						tooltip={ false }
						className="woocommerce-layout__activity-panel-mobile-toggle"
					/>
					<div className={ panelClasses }>
					<NavigableMenu
						role="tablist"
						orientation="horizontal"
						className="woocommerce-layout__activity-panel-tabs"
					>
						{ tabs && tabs.map( this.renderTab ) }
						<WordPressNotices
							showNotices={ 'wpnotices' === currentTab }
							togglePanel={ this.togglePanel }
						/>
					</NavigableMenu>
						{ this.renderPanel() }
					</div>
				</Section>
			</div>
		);
	}
}

export default clickOutside( ActivityPanel );
