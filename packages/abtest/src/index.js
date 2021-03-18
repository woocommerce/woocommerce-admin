/**
 * External dependencies
 */
import { useCallback, useEffect, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { CONTROL, OPTION_NAME } from './constants';
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

	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { getOption, hasFinishedResolution, isResolving } = useSelect(
		( select ) => {
			return {
				getOption: select( OPTIONS_STORE_NAME ).getOption,
				hasFinishedResolution: select(
					OPTIONS_STORE_NAME
				).hasFinishedResolution( 'getOption', [ OPTION_NAME ] ),
				isResolving: select(
					OPTIONS_STORE_NAME
				).isResolving( 'getOption', [ OPTION_NAME ] ),
			};
		}
	);
	const isOptionResolving = isResolving || ! hasFinishedResolution;

	useEffect( () => {
		if ( ! active ) {
			setIsFetching( false );
			return;
		}

		const cachedGroup = getCachedGroup( name );
		if ( cachedGroup ) {
			setGroup( cachedGroup );
			recordABTestEvent( name, cachedGroup, 'from_cache', 'serve' );
			handleComplete();
		} else {
			const newGroup = getAndSetGroup(
				name,
				size,
				isOptionResolving,
				getOption,
				updateOptions
			);
			if ( newGroup ) {
				setGroup( newGroup );
				recordABTestEvent( name, newGroup, 'from_store', 'serve' );
				handleComplete();
			}
		}
	}, [
		active,
		name,
		size,
		handleComplete,
		isOptionResolving,
		getOption,
		updateOptions,
	] );

	if ( isFetching ) {
		return null;
	}

	return group === CONTROL ? control : experiment;
};

export default ABTest;
