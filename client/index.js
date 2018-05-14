/** @format */
/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { APIProvider } from '@wordpress/components';
import { render } from '@wordpress/element';
import { pick } from 'lodash';

/**
 * Internal dependencies
 */
import './stylesheets/_wpadmin-reset.scss';
import Layout from './layout';

render(
	<APIProvider
		{ ...wpApiSettings }
		{ ...pick( wp.api, [ 'postTypeRestBaseMapping', 'taxonomyRestBaseMapping' ] ) }
	>
		<Layout />
	</APIProvider>,
	document.getElementById( 'root' )
);

function editText( string ) {
	return `Filtered: ${ string }`;
}
addFilter( 'woodash.example', 'editText', editText );
