import {
	SlotFillProvider,
	Panel,
	PanelBody,
	createSlotFill,
} from '@wordpress/components';
import { registerPlugin, PluginArea } from '@wordpress/plugins';

// exported component available to plugins maybe '@woocommerce/slotfills`
const { Fill, Slot } = createSlotFill( 'MyPanelSlot' );
const HomepageContent = ( { children } ) => (
	<Fill>
		<Panel header="Content wrapper">
			<PanelBody>{ children }</PanelBody>
		</Panel>
	</Fill>
);
HomepageContent.Slot = () => <Slot />;

// my-plugion.js
// import { HomepageContent } from '@woocommerce/slotfills`;
const MyPlugin = () => {
	return (
		<HomepageContent>
			<span>I am EXTERNAL content body</span>
		</HomepageContent>
	);
};
registerPlugin(
	'my-plugin-homepage',
	{ render: MyPlugin },
	'wc-admin-homepage'
);
// Register an unrelated plugin which should not be rendered.
// Depends on https://github.com/psealock/gutenberg/tree/update/plugins-area-scoping
registerPlugin( 'my-plugin-unrelated', { render: MyPlugin }, 'something-else' );

// Homepage.js
const Homepage = () => {
	return (
		<div>
			<SlotFillProvider>
				<HomepageContent>
					<span>I am INTERNAL content body</span>
				</HomepageContent>
				<HomepageContent.Slot />
				<PluginArea scope="wc-admin-homepage" />
			</SlotFillProvider>
		</div>
	);
};

export default Homepage;
