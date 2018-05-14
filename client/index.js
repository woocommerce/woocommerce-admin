/** @format */
/**
 * External dependencies
 */
import { APIProvider } from '@wordpress/components';
import { render, Component, createElement } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { pick, find } from 'lodash';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Analytics from './analytics';
import AnalyticsReport from './analytics/report';
import Dashboard from './dashboard';

const getPages = () => {
	const pages = [
		{
			container: Dashboard,
			path: '/',
			wpMenu: 'toplevel_page_woodash',
		},
		{
			container: Analytics,
			path: '/analytics',
			wpMenu: 'toplevel_page_woodash--analytics',
		},
		{
			container: AnalyticsReport,
			path: '/analytics/:report',
			wpMenu: 'toplevel_page_woodash--analytics',
		},
	];

	return pages;
};

class Controller extends Component {
	render() {
		const { path, params } = this.props.match;
		const page = find( getPages(), { path } );
		window.wpNavMenuClassChange( page.wpMenu );
		return createElement( page.container, { params } );
	}
}

// When the route changes, update wp-admin's menu with the correct section & current link
window.wpNavMenuClassChange = function( menu ) {
	jQuery( '.current' ).each( function( i, obj ) {
		jQuery( obj ).removeClass( 'current' );
	} );
	jQuery( '.wp-has-current-submenu' )
		.removeClass( 'wp-has-current-submenu' )
		.addClass( 'wp-not-current-submenu menu-top' );
	jQuery( 'li > a[href$="admin.php?page=woodash' + window.location.hash + '"]' )
		.parent()
		.addClass( 'current' );
	jQuery( '#' + menu )
		.removeClass( 'wp-not-current-submenu' )
		.addClass( 'wp-has-current-submenu wp-menu-open current' );
};

render(
	<APIProvider
		{ ...wpApiSettings }
		{ ...pick( wp.api, [ 'postTypeRestBaseMapping', 'taxonomyRestBaseMapping' ] ) }
	>
		<Router>
			<Switch>
				{ getPages().map( page => {
					return <Route path={ page.path } exact component={ Controller } />;
				} ) }
				<Route component={ Controller } />
			</Switch>
		</Router>
	</APIProvider>,
	document.getElementById( 'root' )
);

function editText( string ) {
	return `Filtered: ${ string }`;
}
addFilter( 'woodash.example', 'editText', editText );
