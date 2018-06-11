/** @format */
/**
 * External dependencies
 */
import { APIProvider } from '@wordpress/components';
import { pick } from 'lodash';
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './stylesheets/_wpadmin-reset.scss';
//import './layout/style.scss';
import HeaderEmbed from './components/header/embed';

render(
	<APIProvider
		{ ...wpApiSettings }
		{ ...pick( wp.api, [ 'postTypeRestBaseMapping', 'taxonomyRestBaseMapping' ] ) }
	>
		<HeaderEmbed />
	</APIProvider>,
	document.getElementById( 'woocommerce-header' )
);
