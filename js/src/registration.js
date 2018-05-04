/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies
 */
import { filter, get, isFunction } from 'lodash';

/**
 * WordPress dependencies
 */
import { applyFilters } from '@wordpress/hooks';

/**
 * List of available location names.
 *
 * @type {Array}
 */
export const DASHBOARD_LOCATIONS = [
	'sidebar',
	'dashboard',
];

/**
 * Defined behavior of a block type.
 *
 * @typedef {WPBlockType}
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
 * @type {Object.<string,WPBlockType>}
 */
const blocks = {};

/**
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made available as an option to any
 * editor interface where blocks are implemented.
 *
 * @param {string} name     Block name.
 * @param {Object} settings Block settings.
 *
 * @return {?WPBlock} The block, if it has been successfully registered;
 *                     otherwise `undefined`.
 */
export function registerBlockType( name, settings ) {
	settings = {
		name,
		...get( window._wpBlocks, name ),
		...settings,
	};

	if ( typeof name !== 'string' ) {
		console.error(
			'Block names must be strings.'
		);
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
		console.error(
			'Block "' + name + '" is already registered.'
		);
		return;
	}

	settings = applyFilters( 'WooCommerceDashboard.registerBlockType', settings, name );

	if ( ! settings || ! isFunction( settings.render ) ) {
		console.error(
			'The "render" property must be specified and must be a valid function.'
		);
		return;
	}
	if ( ! ( 'location' in settings ) ) {
		console.error(
			'The block "' + name + '" must specify a location.'
		);
		return;
	}
	if ( -1 === DASHBOARD_LOCATIONS.indexOf( settings.location ) ) {
		console.error(
			'The block "' + name + '" location must be one of ' + DASHBOARD_LOCATIONS.join( ', ' )
		);
		return;
	}
	if ( ! ( 'title' in settings ) || settings.title === '' ) {
		console.error(
			'The block "' + name + '" must have a title.'
		);
		return;
	}
	if ( typeof settings.title !== 'string' ) {
		console.error(
			'Block titles must be strings.'
		);
		return;
	}

	return blocks[ name ] = settings;
}

/**
 * Unregisters a block.
 *
 * @param {string} name Block name.
 *
 * @return {?WPBlock} The previous block value, if it has been successfully
 *                     unregistered; otherwise `undefined`.
 */
export function unregisterBlockType( name ) {
	if ( ! blocks[ name ] ) {
		console.error(
			'Block "' + name + '" is not registered.'
		);
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
export function getBlockType( name ) {
	return blocks[ name ];
}

/**
 * Returns all registered blocks.
 *
 * @return {Array} Block settings.
 */
export function getBlockTypes() {
	return Object.values( blocks );
}

/**
 * Returns blocks registered for a single location.
 *
 * @param {string} location Location name.
 *
 * @return {Array} Block settings.
 */
export function getBlockTypesByLocation( location ) {
	return Object.values( filter( blocks, { location } ) );
}
