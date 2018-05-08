/** @format */
/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies
 */
import { isFunction } from 'lodash';

/**
 * WordPress dependencies
 */
import { applyFilters } from '@wordpress/hooks';

/**
 * Defined behavior of a block type.
 *
 * @typedef {WCBlock}
 *
 * @property {string}             name       Block's namespaced name.
 * @property {string}             title      Human-readable label for a block. @todo Can be used to
 *                                           create an "on/off" list to customize dashboard.
 * @property {string}             location   Location of this block, must be one of DASHBOARD_LOCATIONS
 * @property {?Object}            attributes Block attributes.
 * @property {WPComponent}        render     Component rendering element to be
 *                                           interacted with in the dashboard.
 */

/**
 * Block type definitions keyed by block name.
 *
 * @type {Object.<string,Block>}
 */
const blocks = {};

/**
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made available as an option to any
 * dashboard interface where blocks are supported.
 *
 * @param {string} name     Block name.
 * @param {Object} settings Block settings.
 *
 * @return {?WCBlock}  The block, if it has been successfully registered;
 *                     otherwise `undefined`.
 */
export function registerBlock( name, settings ) {
	settings = {
		name,
		...settings,
	};

	if ( typeof name !== 'string' ) {
		console.error( 'Block names must be strings.' );
		return;
	}
	if ( ! /^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test( name ) ) {
		console.error(
			'Block names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, ' +
				'and start with a letter. Example: my-plugin/my-custom-block'
		);
		return;
	}
	if ( blocks[ name ] ) {
		console.error( 'Block "' + name + '" is already registered.' );
		return;
	}

	settings = applyFilters( 'WooCommerceDashboard.registerBlock', settings, name );

	if ( ! settings || ! isFunction( settings.render ) ) {
		console.error( 'The "render" property must be specified and must be a valid function.' );
		return;
	}
	if ( ! ( 'location' in settings ) ) {
		console.error( 'The block "' + name + '" must specify a location.' );
		return;
	}
	if ( ! ( 'title' in settings ) || settings.title === '' ) {
		console.error( 'The block "' + name + '" must have a title.' );
		return;
	}
	if ( typeof settings.title !== 'string' ) {
		console.error( 'Block titles must be strings.' );
		return;
	}

	return ( blocks[ name ] = settings );
}

/**
 * Unregisters a block.
 *
 * @param {string} name Block name.
 *
 * @return {?WPBlock} The previous block value, if it has been successfully
 *                     unregistered; otherwise `undefined`.
 */
export function unregisterBlock( name ) {
	if ( ! blocks[ name ] ) {
		console.error( 'Block "' + name + '" is not registered.' );
		return;
	}
	const oldBlock = blocks[ name ];
	delete blocks[ name ];
	return oldBlock;
}

/**
 * Returns a registered block type.
 *
 * @param {string} name Block name.
 *
 * @return {?Object} Block type.
 */
export function getBlock( name ) {
	return blocks[ name ];
}

/**
 * Returns all registered blocks.
 *
 * @return {Array} Block settings.
 */
export function getBlocks() {
	return Object.values( blocks );
}
