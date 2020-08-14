/**
 * External dependencies
 */
import { useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';

export const withOnboardingHydration = ( data ) => ( OriginalComponent ) => {
	return ( props ) => {
		const onboardingRef = useRef( data );

		useSelect( ( select, registry ) => {
			if ( ! onboardingRef.current ) {
				return;
			}

			const { isResolving, hasFinishedResolution } = select( STORE_NAME );
			const {
				startResolution,
				finishResolution,
				setProfileItems,
				setTasksStatus,
			} = registry.dispatch( STORE_NAME );

			const { profileItems, tasksStatus } = onboardingRef.current;

			if (
				profileItems &&
				! isResolving( 'getProfileItems', [] ) &&
				! hasFinishedResolution( 'getProfileItems', [] )
			) {
				startResolution( 'getProfileItems', [] );
				setProfileItems( profileItems, true );
				finishResolution( 'getProfileItems', [] );
			}

			if (
				tasksStatus &&
				! isResolving( 'getTasksStatus', [] ) &&
				! hasFinishedResolution( 'getTasksStatus', [] )
			) {
				startResolution( 'getTasksStatus', [] );
				setTasksStatus( tasksStatus, true );
				finishResolution( 'getTasksStatus', [] );
			}
		}, [] );

		return <OriginalComponent { ...props } />;
	};
};
