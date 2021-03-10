/**
 * External dependencies
 */
import { useState, useEffect, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { CONTROL } from './constants';
import { getCachedGroup, getAndSetGroup, isActive } from './utils';

/**
 * ABTest component.
 *
 * Use to randomly display one of two components to control and experiment groups.
 *
 * @param {Object} props Component props.
 * @param {string} props.name Name of the experiment.
 * @param {Object} props.control React component to display to control group.
 * @param {Object} props.experiment React component to display to experiment group.
 * @param {Function|null} props.onComplete Optional. Callback triggered once A/B Test has completed setup.
 * @param {number} props.start Optional. A/B Test start timestamp.
 * @param {number} props.end Optional. A/B Test end timestamp.
 */
export const ABTest = ( {
	name,
	control,
	experiment,
	onComplete,
	start = 0,
	end = Infinity,
} ) => {
	const [ variation, setVariation ] = useState( CONTROL );
	const [ isFetching, setIsFetching ] = useState( CONTROL );
	const active = isActive( start, end );
	const handleComplete = useCallback( () => {
		setIsFetching( false );
		if ( onComplete ) {
			onComplete();
		}
	}, [ onComplete ] );

	useEffect( () => {
		if ( ! active ) {
			handleComplete();
			return;
		}

		const cachedGroup = getCachedGroup( name );
		if ( cachedGroup ) {
			setVariation( cachedGroup );
			handleComplete();
		} else {
			( async () => {
				const group = await getAndSetGroup( name );
				setVariation( group );
				handleComplete();
			} )();
		}
	}, [ active, handleComplete, name ] );

	if ( isFetching ) {
		return null;
	}

	return variation === CONTROL ? control : experiment;
};
