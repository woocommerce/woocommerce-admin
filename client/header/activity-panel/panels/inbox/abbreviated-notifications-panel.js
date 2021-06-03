/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Text } from '@woocommerce/experimental';
import { recordEvent } from '@woocommerce/tracks';
import { AbbreviatedCard } from '@woocommerce/components';
import { useSelect } from '@wordpress/data';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { applyFilters } from '@wordpress/hooks';
import { box, comment, page } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	getLowStockCount,
	getOrderStatuses,
	getUnreadOrders,
} from '../../../../homescreen/activity-panel/orders/utils';
import { getUnapprovedReviews } from '../../../../homescreen/activity-panel/reviews/utils';
import { Bell } from './icons/bell';

const EXTENDED_TASK_LIST_ID = 'extended_task_list';
const ORDER_PANEL_ID = 'orders-panel';
const REVIEWS_PANEL_ID = 'reviews-panel';
const STOCK_PANEL_ID = 'stock-panel';

export const AbbreviatedNotificationsPanel = ( { query } ) => {
	const {
		thingsToDoNextCount,
		ordersToProcessCount,
		reviewsToModerateCount,
		stockNoticesCount,
	} = useSelect( ( select ) => {
		const { getOption } = select( OPTIONS_STORE_NAME );
		const thingsToDoNext = applyFilters(
			'woocommerce_admin_onboarding_task_list',
			[],
			query
		);
		const dismissedTasks =
			getOption( 'woocommerce_task_list_dismissed_tasks' ) || [];
		const orderStatuses = getOrderStatuses( select );
		return {
			ordersToProcessCount: getUnreadOrders( select, orderStatuses ),
			reviewsToModerateCount: getUnapprovedReviews( select ),
			stockNoticesCount: getLowStockCount( select ),
			thingsToDoNextCount: getIncompleteTasksCount(
				thingsToDoNext,
				dismissedTasks
			),
		};
	} );

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

	const trackAbbreviatedCardClick = ( name ) => {
		recordEvent( 'activity_panel_click', {
			task: name,
		} );
	};

	return (
		<div className="woocommerce-abbreviated-notifications">
			{ thingsToDoNextCount > 0 && (
				<AbbreviatedCard
					className="woocommerce-abbreviated-notification"
					icon={ <Bell /> }
					href={ `admin.php?page=wc-admin#${ EXTENDED_TASK_LIST_ID }` }
					onClick={ () =>
						trackAbbreviatedCardClick( 'thingsToDoNext' )
					}
				>
					<Text as="h3">
						{ __( 'Things to do next', 'woocommerce-admin' ) }
					</Text>
					<Text>
						{ sprintf(
							__(
								/* translators: Things the user has to do */
								'You have %s new things to do',
								'woocommerce-admin'
							),
							thingsToDoNextCount
						) }
					</Text>
				</AbbreviatedCard>
			) }
			{ ordersToProcessCount > 0 && (
				<AbbreviatedCard
					className="woocommerce-abbreviated-notification"
					icon={ page }
					href={ `admin.php?page=wc-admin&opened_panel=${ ORDER_PANEL_ID }` }
					onClick={ () =>
						trackAbbreviatedCardClick( 'ordersToProcess' )
					}
				>
					<Text as="h3">
						{ __( 'Orders to fulfill', 'woocommerce-admin' ) }
					</Text>
					<Text>
						{ sprintf(
							/* translators: Number of orders the user has to fulfill */
							__(
								'You have %s orders to fulfill',
								'woocommerce-admin'
							),
							ordersToProcessCount
						) }
					</Text>
				</AbbreviatedCard>
			) }
			{ reviewsToModerateCount > 0 && (
				<AbbreviatedCard
					className="woocommerce-abbreviated-notification"
					icon={ comment }
					href={ `admin.php?page=wc-admin&opened_panel=${ REVIEWS_PANEL_ID }` }
					onClick={ () =>
						trackAbbreviatedCardClick( 'reviewsToModerate' )
					}
				>
					<Text as="h3">
						{ __( 'Reviews to moderate', 'woocommerce-admin' ) }
					</Text>
					<Text>
						{ sprintf(
							__(
								/* translators: Number of reviews the user has to moderate */
								'You have %s reviews to moderate',
								'woocommerce-admin'
							),
							reviewsToModerateCount
						) }
					</Text>
				</AbbreviatedCard>
			) }
			{ stockNoticesCount > 0 && (
				<AbbreviatedCard
					className="woocommerce-abbreviated-notification"
					icon={ box }
					href={ `admin.php?page=wc-admin&opened_panel=${ STOCK_PANEL_ID }` }
					onClick={ () =>
						trackAbbreviatedCardClick( 'stockNotices' )
					}
				>
					<Text as="h3">
						{ __( 'Inventory to review', 'woocommerce-admin' ) }
					</Text>
					<Text>
						{ sprintf(
							__(
								'You have inventory to review and update',
								'woocommerce-admin'
							),
							stockNoticesCount
						) }
					</Text>
				</AbbreviatedCard>
			) }
		</div>
	);
};

export default AbbreviatedNotificationsPanel;
