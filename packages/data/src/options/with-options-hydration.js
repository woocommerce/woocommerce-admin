/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export const withOptionsHydration = ( data ) => ( OriginalComponent ) => {
	return ( props ) => {
		const dataRef = useRef( data );

		useSelect( ( select, registry ) => {
			if ( ! dataRef.current ) {
				return;
			}

			const { isResolving, hasFinishedResolution } = select( STORE_NAME );
			const {
				startResolution,
				finishResolution,
				receiveOptions,
			} = registry.dispatch( STORE_NAME );
			const names = Object.keys( dataRef.current );

			if (
				! isResolving( 'getOptionsWithRequest', names ) &&
				! hasFinishedResolution( 'getOptionsWithRequest', names )
			) {
				startResolution( 'getOptionsWithRequest', names );
				receiveOptions( dataRef.current );
				finishResolution( 'getOptionsWithRequest', names );
			}
		}, [] );

		return <OriginalComponent { ...props } />;
	};
};
