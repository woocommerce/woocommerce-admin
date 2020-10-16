/**
 * External dependencies
 */
import { SlotFillProvider, Fill, Slot } from '@wordpress/components';
import { PluginArea, registerPlugin } from '@wordpress/plugins';
import { TestFill } from '@woocommerce/navigation';
import { withNavigationHydration } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import './stylesheets/index.scss';
import Container from './components/container';

// export const TestFill = ( { children } ) => {
// 	return <Fill name="test">{ children }</Fill>;
// };
// TestFill.Slot = () => <Slot name="test" />;

const MyPlugin = () => {
	return <TestFill>TEST TEST TEST</TestFill>;
};
registerPlugin( 'my-plugin', { render: MyPlugin } );

const Navigation = () => (
	<SlotFillProvider>
		<Container />
		<TestFill.Slot />
		<PluginArea />
	</SlotFillProvider>
);

const HydratedNavigation = withNavigationHydration( window.wcNavigation )(
	Navigation
);

export default HydratedNavigation;
