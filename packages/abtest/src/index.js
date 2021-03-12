/**
 * External dependencies
 */
import { useState, useEffect, useCallback } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

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
 * @param {number} props.size Optional. Size of experiment group.
 * @param {number} props.start Optional. A/B Test start timestamp.
 * @param {number} props.end Optional. A/B Test end timestamp.
 */
const ABTest = ( {
	name,
	control,
	experiment,
	onComplete,
	size = 50,
	start = 0,
	end = Infinity,
} ) => {
	const [ group, setGroup ] = useState( CONTROL );
	const [ isFetching, setIsFetching ] = useState( true );
	const active = isActive( start, end );
	const handleComplete = useCallback( () => {
		setIsFetching( false );
		if ( onComplete ) {
			onComplete();
		}
	}, [ onComplete ] );

	const setABTestOption = useDispatch( OPTIONS_STORE_NAME ).updateOptions;
	const getABTestOption = useSelect(
		( select ) => select( OPTIONS_STORE_NAME ).getOption
	);

	useEffect( () => {
		if ( active ) {
			const cachedGroup = getCachedGroup( name );
			if ( cachedGroup ) {
				setGroup( cachedGroup );
				recordABTestEvent( name, cachedGroup, 'from_cache', 'serve' );
			} else {
				const newGroup = getAndSetGroup(
					name,
					size,
					getABTestOption,
					setABTestOption
				);
				setGroup( newGroup );
				recordABTestEvent( name, newGroup, 'from_store', 'serve' );
			}
		}
		handleComplete();
	}, [
		active,
		name,
		size,
		handleComplete,
		getABTestOption,
		setABTestOption,
	] );

	if ( isFetching ) {
		return null;
	}

	return group === CONTROL ? control : experiment;
};

export default ABTest;
