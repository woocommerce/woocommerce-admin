/** @format */
/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export default function useSettings() {
	useEffect( () => {
		return select( STORE_NAME ).getSettings();
	} );

	return {};
}
