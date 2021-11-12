/**
 * External dependencies
 */
import { apiFetch, select } from '@wordpress/data-controls';
import { controls } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from './constants';
import { WC_ADMIN_NAMESPACE } from '../constants';
import {
	getFreeExtensionsError,
	getFreeExtensionsSuccess,
	getTaskListsError,
	getTaskListsSuccess,
	setProfileItems,
	setError,
	setPaymentMethods,
	setEmailPrefill,
	getProductTypesSuccess,
	getProductTypesError,
} from './actions';
import { DeprecatedTasks } from './deprecated-tasks';

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

export function* getTaskLists() {
	const deprecatedTasks = new DeprecatedTasks();
	try {
		const results = yield apiFetch( {
			path: WC_ADMIN_NAMESPACE + '/onboarding/tasks',
			method: deprecatedTasks.hasDeprecatedTasks() ? 'POST' : 'GET',
			data: deprecatedTasks.getPostData(),
		} );

		deprecatedTasks.mergeDeprecatedCallbackFunctions( results );

		yield getTaskListsSuccess( results );
	} catch ( error ) {
		yield getTaskListsError( error );
	}
}

export function* getTaskList() {
	yield resolveSelect( STORE_NAME, 'getTaskLists' );
}

export function* getTask() {
	yield resolveSelect( STORE_NAME, 'getTaskLists' );
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

export function* getProductTypes() {
	try {
		const results = yield apiFetch( {
			path: WC_ADMIN_NAMESPACE + '/onboarding/product-types',
			method: 'GET',
		} );

		yield getProductTypesSuccess( results );
	} catch ( error ) {
		yield getProductTypesError( error );
	}
}
