/**
 * External dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { WooOnboardingTask } from '@woocommerce/onboarding';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import { ONBOARDING_STORE_NAME, TaskType } from '@woocommerce/data';
import { useCallback } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { WooHeaderNavigationItem, WooHeaderPageTitle } from '~/header/utils';
import { BackButton } from './back-button';

export type TaskProps = {
	query: { task: string };
	task?: TaskType;
};

export const Task: React.FC< TaskProps > = ( { query, task } ) => {
	const id = query.task;
	const {
		invalidateResolutionForStoreSelector,
		optimisticallyCompleteTask,
	} = useDispatch( ONBOARDING_STORE_NAME );

	const onComplete = useCallback(
		( options ) => {
			optimisticallyCompleteTask( id );
			getHistory().push(
				options && options.redirectPath
					? options.redirectPath
					: getNewPath( {}, '/', {} )
			);
			invalidateResolutionForStoreSelector( 'getTaskLists' );
		},
		[ id ]
	);

	return (
		<>
			<WooHeaderNavigationItem>
				<BackButton title={ task.title } />
			</WooHeaderNavigationItem>
			<WooHeaderPageTitle>{ task.title }</WooHeaderPageTitle>
			<WooOnboardingTask.Slot
				id={ id }
				fillProps={ { onComplete, query, task } }
			/>
		</>
	);
};
