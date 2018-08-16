/** @format */
/**
 * External dependencies
 */
import { APIProvider } from '@wordpress/components';
import { pick } from 'lodash';
import { render } from '@wordpress/element';
import { Provider as SlotFillProvider } from 'react-slot-fill';
import { use, RegistryProvider } from '@wordpress/data';
import 'react-dates/initialize';

/**
 * Internal dependencies
 */
import './stylesheets/_index.scss';
import { PageLayout } from './layout';
import freshDataPlugin from './fresh-data-plugin';
import wcApiSpec from 'wc-api-spec';

const registry = use( freshDataPlugin );

registry.registerStore( 'wc-api', { apiSpec: wcApiSpec } );

render(
	<RegistryProvider value={ registry }>
		<APIProvider
			{ ...wpApiSettings }
			{ ...pick( wp.api, [ 'postTypeRestBaseMapping', 'taxonomyRestBaseMapping' ] ) }
		>
			<SlotFillProvider>
				<PageLayout />
			</SlotFillProvider>
		</APIProvider>
	</RegistryProvider>,
	document.getElementById( 'root' )
);
