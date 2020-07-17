import { NavigableMenu } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { Tab } from '../tab';
import { recordEvent } from 'lib/tracks';

export const Tabs = ( { tabs, onTabClick, selectedTab: selectedTabName } ) => {
	const [ tabState, setTabState ] = useState( {
		tabOpen: false,
		currentTab: selectedTabName,
	} );

	return (
		<NavigableMenu
			role="tablist"
			orientation="horizontal"
			className="woocommerce-layout__activity-panel-tabs"
		>
			{ tabs &&
				tabs.map( ( tab, i ) => (
					<Tab
						key={ i }
						index={ i }
						isPanelOpen={ tabState.tabOpen }
						selected={ tabState.currentTab === tab.name }
						{ ...tab }
						onTabClick={ () => {
							const tabOpen =
								tabState.currentTab === tab.name ||
								tabState.currentTab === ''
									? ! tabState.tabOpen
									: true;

							// If a panel is being opened, or if an existing panel is already open and a different one is being opened, record a track.
							if (
								! tabOpen ||
								tabState.currentTab !== tab.name
							) {
								recordEvent( 'activity_panel_open', {
									tab: tab.name,
								} );
							}

							setTabState( { tabOpen, currentTab: tab.name } );
							onTabClick( tab, tabOpen );
						} }
					/>
				) ) }
		</NavigableMenu>
	);
};
