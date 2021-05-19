/**
 * External dependencies
 */
import {
	NOTES_STORE_NAME,
	OPTIONS_STORE_NAME,
	USER_STORE_NAME,
	QUERY_DEFAULTS,
} from '@woocommerce/data';
import { getSetting } from '@woocommerce/wc-admin-settings';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { getUnreadNotesCount } from '../../inbox-panel/utils';
import {
	getLowStockCount as getLowStockProducts,
	getOrderStatuses,
	getUnreadOrders,
} from '../../homescreen/activity-panel/orders/utils';
import { getUnapprovedReviews } from '../../homescreen/activity-panel/reviews/utils';

const UNREAD_NOTES_QUERY = {
	page: 1,
	per_page: QUERY_DEFAULTS.pageSize,
	status: 'unactioned',
	type: QUERY_DEFAULTS.noteTypes,
	orderby: 'date',
	order: 'desc',
};

const ALERTS_QUERY = {
	page: 1,
	per_page: QUERY_DEFAULTS.pageSize,
	type: 'error,update',
	status: 'unactioned',
};

export function getUnreadNotes( select ) {
	const { getNotes, getNotesError, isResolving } = select( NOTES_STORE_NAME );

	const { getCurrentUser } = select( USER_STORE_NAME );
	const userData = getCurrentUser();
	const lastRead = parseInt(
		userData &&
			userData.woocommerce_meta &&
			userData.woocommerce_meta.activity_panel_inbox_last_read,
		10
	);

	if ( ! lastRead ) {
		return null;
	}

	getNotes( UNREAD_NOTES_QUERY );
	const isError = Boolean(
		getNotesError( 'getNotes', [ UNREAD_NOTES_QUERY ] )
	);
	const isRequesting = isResolving( 'getNotes', [ UNREAD_NOTES_QUERY ] );

	if ( isError || isRequesting ) {
		return null;
	}

	const latestNotes = getNotes( UNREAD_NOTES_QUERY );
	const unreadNotesCount = getUnreadNotesCount( latestNotes, lastRead );

	return unreadNotesCount > 0;
}

export function getLowStockCount() {
	return getSetting( 'lowStockCount', 0 );
}

function getIncompleteTasksCount( tasks, dismissedTasks ) {
	if ( ! tasks ) {
		return 0;
	}
	return tasks.filter(
		( task ) =>
			task.visible &&
			! task.completed &&
			! dismissedTasks.includes( task.key )
	).length;
}

function getAbbreviatedNotifications( select ) {
	const { getOption } = select( OPTIONS_STORE_NAME );
	const { getNotes } = select( NOTES_STORE_NAME );
	const storeAlerts = getNotes( ALERTS_QUERY );
	const thingsToDoNext = applyFilters(
		'woocommerce_admin_onboarding_task_list',
		[]
	);
	const dismissedTasks = getOption( 'woocommerce_task_list_dismissed_tasks' );
	const storeAlertsCount = storeAlerts.length ?? 0;
	const orderStatuses = getOrderStatuses( select );
	const notifications = [
		{
			name: 'thingsToDoNext',
			count:
				getIncompleteTasksCount( thingsToDoNext, dismissedTasks ) +
				storeAlertsCount,
			critical: storeAlertsCount,
		},
		{
			name: 'ordersToProcess',
			count: getUnreadOrders( select, orderStatuses ),
		},
		{
			name: 'reviewsToModerate',
			count: getUnapprovedReviews( select ),
		},
		{
			name: 'stockNotices',
			count: getLowStockProducts( select ),
		},
	];

	return applyFilters(
		'woocommerce_admin_abbreviated_notifications',
		notifications
	);
}

export function getUnreadNotifications(
	select,
	setupTaskListHidden,
	extendedTaskListHidden
) {
	if ( ! setupTaskListHidden && extendedTaskListHidden ) {
		return [];
	}
	const notifications = getAbbreviatedNotifications( select );
	return notifications.filter( ( { count, name } ) => {
		const isVisible = setupTaskListHidden
			? ! extendedTaskListHidden || name !== 'thingsToDoNext'
			: ! extendedTaskListHidden && name === 'thingsToDoNext';
		return count > 0 && isVisible;
	} );
}
