/** @format */
/**
 * External dependencies
 */
import { APIProvider } from '@wordpress/components';
import { pick } from 'lodash';
import { render } from '@wordpress/element';
import { Provider as SlotFillProvider } from 'react-slot-fill';

/**
 * Internal dependencies
 */
import './stylesheets/_index.scss';
import { PageLayout } from './layout';
import 'store';
import Menu from './menu';

render(
	<APIProvider
		{ ...wpApiSettings }
		{ ...pick( wp.api, [ 'postTypeRestBaseMapping', 'taxonomyRestBaseMapping' ] ) }
	>
		<SlotFillProvider>
			<PageLayout />
		</SlotFillProvider>
	</APIProvider>,
	document.getElementById( 'root' )
);

render(
	<APIProvider
		{ ...wpApiSettings }
		{ ...pick( wp.api, [ 'postTypeRestBaseMapping', 'taxonomyRestBaseMapping' ] ) }
	>
		<SlotFillProvider>
			<Menu />
		</SlotFillProvider>
	</APIProvider>,
	document.getElementById( 'adminmenuwrap' )
);
