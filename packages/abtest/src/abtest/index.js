/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import {
	ABTEST_OPTION_NAME,
	EXPERIMENT,
	CONTROL,
	WC_ADMIN_NAMESPACE,
} from '../constants';

export const getLocalGroup = ( name ) => window.localStorage.getItem( name );

export const setLocalGroup = ( name, value ) =>
	window.localStorage.setItem( name, value );

export const getABTestOption = () => {
	return apiFetch( {
		path: addQueryArgs( `${ WC_ADMIN_NAMESPACE }/options`, {
			options: ABTEST_OPTION_NAME,
		} ),
	} );
};

export const setABTestOption = ( value ) => {
	apiFetch( {
		method: 'POST',
		path: `${ WC_ADMIN_NAMESPACE }/options`,
		data: { [ ABTEST_OPTION_NAME ]: value },
	} );
};

export const getAndSetGroup = async ( name ) => {
	try {
		const options = await getABTestOption();
		const group = options[ ABTEST_OPTION_NAME ] || getRandomGroup();

		setLocalGroup( name, group );

		if ( ! options[ ABTEST_OPTION_NAME ] ) {
			setABTestOption( group );
			// Fire tracks event after setABTestOption completes.
		}

		return group;
	} catch {
		return CONTROL; // We've failed to initialize. Return control and don't track.
	}
};

export const getRandomGroup = () =>
	Math.random() < 0.5 ? CONTROL : EXPERIMENT;

export const ABTest = ( { name, control, experiment, loading } ) => {
	const [ variation, setVariation ] = useState( CONTROL );
	const [ isFetching, setIsFetching ] = useState( CONTROL );

	useEffect( () => {
		const localGroup = getLocalGroup( name );

		if ( localGroup ) {
			setVariation( localGroup );
			setIsFetching( false );
			return;
		}

		getAndSetGroup( name ).then( ( group ) => {
			setVariation( group );
			setIsFetching( false );
		} );
	}, [ name ] );

	if ( isFetching ) {
		return loading;
	}

	return variation === CONTROL ? control : experiment;
};
