/**
 * External dependencies
 */
import { render } from '@wordpress/element';
import { SlotFillProvider } from '@wordpress/components';
import { PluginArea } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import './stylesheets/index.scss';
import Container from './components/container';

const navigationRoot = document.getElementById(
	'woocommerce-embedded-navigation'
);

if ( navigationRoot ) {
	render(
		<SlotFillProvider>
			<Container />
			<PluginArea />
		</SlotFillProvider>,
		navigationRoot
	);
}
