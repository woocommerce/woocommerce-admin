/**
 * External dependencies
 */
import { join, isArray } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { Button, withAPIData } from '@wordpress/components';

/**
 * Creates a higher-order component which adds the capability to the
 * wrapped component to load PHP based WooCommerce hooks.
 *
 * TODO: Rewrite this in a way that we can request all hooks for a page in a single request and render after request is made
 * TODO: How will loading in new/additional content be displayed? We do have loading status thanks to `withAPIData`.
 *
 * @param {string|array} hookName Hook names exposed to be used by filters.
 *
 * @return {Function} Higher-order component factory.
 */
export function withHooks( hookName ) {
	const hookNames = isArray( hookName ) ? hookName : [ hookName ];
	return function( OriginalComponent ) {
		return withAPIData( () => ( {
			hooks: '/wc-ext/v1/hooks/?hooks=' + join( hookNames, ',' ),
		} ) )(
			class FilteredComponent extends Component {
				render() {
					const { hooks, ...props } = this.props;
					return <OriginalComponent hooks={ hooks && hooks.data || {} } { ...props } />;
				}
			}
		);
	};
}

// TODO Make it so the hooks prop/data doesn't need to be passed into renderHook
export function renderHook( hooks, hook_name, callback ) {
	if ( ! hooks || hooks.length ) {
		return;
	}

	const registeredHooks = hooks[ hook_name ];
	return registeredHooks && registeredHooks.map( hook => {
		return callback( hook );
	} );
}

// This is a simplified version of a component renderer
// TODO Validation
export function renderComponent( component ) {
	const { type, props, children } = component;
	const output = [];
	const childrenOutput = children && children.map( child => {
		return renderComponent( child );
	} ) || null;

	switch ( type ) {
		case 'card':
			output.push(
				<div className="woo-dash__widget">
					<h2>{ props.title }</h2>
					{ childrenOutput }
				</div>
			);
			break;
		case 'button':
			const { label, ...restOfProps } = props;
			output.push(
				<Button { ...restOfProps }> { label } { childrenOutput } </Button>
			);
			break;
	}

	return output;
}
