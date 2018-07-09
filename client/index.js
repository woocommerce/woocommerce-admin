/** @format */
/**
 * External dependencies
 */
import { APIProvider } from '@wordpress/components';
import { FreshDataProvider } from '@fresh-data/framework';
import { pick } from 'lodash';
import { render } from '@wordpress/element';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as SlotFillProvider } from 'react-slot-fill';
import 'react-dates/initialize';

/**
 * Internal dependencies
 */
import createStore from 'state/create-store';
import reducer from 'state/reducer';
import './stylesheets/_wpadmin-reset.scss';
import { PageLayout } from './layout';
import WooCommerceRestApi from './wc-api';

const store = createStore( reducer );
const apis = {
	woocommerce: new WooCommerceRestApi(),
};

render(
	<APIProvider
		{ ...wpApiSettings }
		{ ...pick( wp.api, [ 'postTypeRestBaseMapping', 'taxonomyRestBaseMapping' ] ) }
	>
		<SlotFillProvider>
			<ReduxProvider store={ store }>
				<FreshDataProvider apis={ apis }>
					<PageLayout />
				</FreshDataProvider>
			</ReduxProvider>
		</SlotFillProvider>
	</APIProvider>,
	document.getElementById( 'root' )
);
