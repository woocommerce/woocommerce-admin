/**
 * External dependencies
 */
import { apiFetch, select } from '@wordpress/data-controls';
import { controls } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import deprecated from '@wordpress/deprecated';
import { parse } from 'qs';

/**
 * Internal dependencies
 */
import { WC_ADMIN_NAMESPACE } from '../constants';
import { OPTIONS_STORE_NAME } from '../options';
import {
	getFreeExtensionsError,
	getFreeExtensionsSuccess,
	getTaskListsError,
	getTaskListsSuccess,
	setProfileItems,
	setError,
	setTasksStatus,
	setPaymentMethods,
	setEmailPrefill,
} from './actions';

const resolveSelect =
	controls && controls.resolveSelect ? controls.resolveSelect : select;

export function* getProfileItems() {
	try {
		const results = yield apiFetch( {
			path: WC_ADMIN_NAMESPACE + '/onboarding/profile',
			method: 'GET',
		} );

		yield setProfileItems( results, true );
	} catch ( error ) {
		yield setError( 'getProfileItems', error );
	}
}

export function* getEmailPrefill() {
	try {
		const results = yield apiFetch( {
			path:
				WC_ADMIN_NAMESPACE +
				'/onboarding/profile/experimental_get_email_prefill',
			method: 'GET',
		} );

		yield setEmailPrefill( results.email );
	} catch ( error ) {
		yield setError( 'getEmailPrefill', error );
	}
}

export function* getTasksStatus() {
	try {
		const results = yield apiFetch( {
			path: WC_ADMIN_NAMESPACE + '/onboarding/tasks/status',
			method: 'GET',
		} );

		yield setTasksStatus( results, true );
	} catch ( error ) {
		yield setError( 'getTasksStatus', error );
	}
}

function getQuery() {
	const searchString = window.location && window.location.search;
	if ( ! searchString ) {
		return {};
	}

	const search = searchString.substring( 1 );
	return parse( search );
}

/**
 * This function will be depreciated in favour of registering tasks on the back-end.
 *
 * @param {Array} taskLists array of task lists.
 */
function* mergeWithFilteredTasks( taskLists ) {
	const filteredTasks = applyFilters(
		'woocommerce_admin_onboarding_task_list',
		[],
		getQuery()
	);
	if ( filteredTasks && filteredTasks.length > 0 ) {
		deprecated( 'woocommerce_admin_onboarding_task_list', {
			version: '2.10.0',
			alternative: 'TaskLists::add_task()',
			plugin: '@woocommerce/data',
		} );
		// Show depreciation notice;
		const dismissedTasks = yield resolveSelect(
			OPTIONS_STORE_NAME,
			'getOption',
			'woocommerce_task_list_dismissed_tasks'
		) || [];
		const snoozedTasks = yield resolveSelect(
			OPTIONS_STORE_NAME,
			'getOption',
			'woocommerce_task_list_remind_me_later_tasks'
		) || {};

		// Format the old task items with the new format.
		for ( const task of filteredTasks ) {
			task.level = task.level ? parseInt( task.level, 10 ) : 3;
			task.type = task.type || 'extended';
			task.isVisible = task.isVisible || task.visible;
			task.id = task.id || task.key;
			task.isDismissed = dismissedTasks.includes( task.id );
			task.isSnoozed =
				snoozedTasks[ task.id ] && snoozedTasks[ task.id ] > Date.now();
			task.snoozedUntil = snoozedTasks[ task.id ];
			task.isSnoozable = task.isSnoozable || task.allowRemindMeLater;
		}
		for ( const taskList of taskLists ) {
			const filteredTaskItems = filteredTasks.filter(
				( task ) => task.type === taskList.id
			);
			taskList.tasks.push( ...filteredTaskItems );
		}
	}
	return taskLists;
}

export function* getTaskLists() {
	try {
		const results = yield apiFetch( {
			path: WC_ADMIN_NAMESPACE + '/onboarding/tasks',
			method: 'GET',
		} );

		const taskLists = yield mergeWithFilteredTasks( results || [] );

		yield getTaskListsSuccess( taskLists );
	} catch ( error ) {
		yield getTaskListsError( error );
	}
}

export function* getPaymentGatewaySuggestions() {
	try {
		const results = yield apiFetch( {
			path: WC_ADMIN_NAMESPACE + '/onboarding/payments',
			method: 'GET',
		} );

		yield setPaymentMethods( results );
	} catch ( error ) {
		yield setError( 'getPaymentGatewaySuggestions', error );
	}
}

export function* getFreeExtensions() {
	try {
		const results = yield apiFetch( {
			path: WC_ADMIN_NAMESPACE + '/onboarding/free-extensions',
			method: 'GET',
		} );

		yield getFreeExtensionsSuccess( results );
	} catch ( error ) {
		yield getFreeExtensionsError( error );
	}
}
