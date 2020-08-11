/**
 * External dependencies
 */
import { withFilters } from '@wordpress/components';
import deprecated from '@wordpress/deprecated';

/**
 * Creates a higher-order component which adds filtering capability to the
 * wrapped component. Filters get applied when the original component is about
 * to be mounted. When a filter is added or removed that matches the hook name,
 * the wrapped component re-renders.
 *
 * @deprecated
 *
 * @param {string} hookName Hook name exposed to be used by filters.
 *
 * @return {Function} Higher-order component factory.
 */
export default function useFilters( hookName ) {
	deprecated( 'useFilters', {
		version: '5.0.0',
		alternative: 'withFilters',
		plugin: 'WooCommerce',
		hint: 'Use `import { withFilters } from "@wordpress/components"`',
	} );
	return withFilters( hookName );
}
