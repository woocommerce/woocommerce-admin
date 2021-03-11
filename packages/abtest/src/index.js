/**
 * External dependencies
 */
import { useState, useEffect, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { CONTROL } from './constants';
import {
	getAndSetGroup,
	getCachedGroup,
	isActive,
	recordABTestEvent,
} from './utils';

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
const ABTest = ( {
	name,
	control,
	experiment,
	onComplete,
	start = 0,
	end = Infinity,
} ) => {
	const [ variation, setVariation ] = useState( CONTROL );
	const [ isFetching, setIsFetching ] = useState( true );
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
			recordABTestEvent( name, cachedGroup, 'from_cache', 'serve' );
		} else {
			( async () => {
				const group = await getAndSetGroup( name );
				setVariation( group );
				handleComplete();
				recordABTestEvent( name, group, 'from_db', 'serve' );
			} )();
		}
	}, [ active, handleComplete, name ] );

	if ( isFetching ) {
		return null;
	}

	return variation === CONTROL ? control : experiment;
};

export default ABTest;
