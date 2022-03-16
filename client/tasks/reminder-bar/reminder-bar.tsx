/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { ONBOARDING_STORE_NAME, TaskListType } from '@woocommerce/data';
import { Link } from '@woocommerce/components';
import { getAdminLink } from '@woocommerce/settings';
import interpolateComponents from '@automattic/interpolate-components';

/**
 * Internal dependencies
 */
import './reminder-bar.scss';

type ReminderBarProps = {
	taskListId: string;
};

type ReminderTextProps = {
	remainingCount: number | null;
};

const ReminderText: React.FC< ReminderTextProps > = ( { remainingCount } ) => {
	if ( typeof remainingCount !== 'number' ) {
		return null;
	}

	const translationText =
		remainingCount === 1
			? /* translators: 1: remaining tasks count */
			  __(
					'🎉 Almost there. Only {{strongText}}%1$d step left{{/strongText}} get your store up and running. {{setupLink}}Finish setup{{/setupLink}}',
					'woocommerce-admin'
			  )
			: /* translators: 1: remaining tasks count */
			  __(
					"🚀 You're doing great! {{strongText}}%1$d steps left{{/strongText}} to get your store up and running. {{setupLink}}Continue setup{{/setupLink}}",
					'woocommerce-admin'
			  );

	return (
		<p>
			{ interpolateComponents( {
				mixedString: sprintf( translationText, remainingCount ),
				components: {
					strongText: <strong />,
					setupLink: (
						<Link
							href={ getAdminLink( 'admin.php?page=wc-admin' ) }
							type="wp-admin"
						/>
					),
				},
			} ) }
		</p>
	);
};

export const TasksReminderBar: React.FC< ReminderBarProps > = ( {
	taskListId,
} ) => {
	const { remainingCount, loading } = useSelect( ( select ) => {
		const { getTaskList, hasFinishedResolution } = select(
			ONBOARDING_STORE_NAME
		);
		const taskList: TaskListType = getTaskList( taskListId );
		const isResolved = hasFinishedResolution( 'getTaskList', [
			taskListId,
		] );
		const nowTimestamp = Date.now();
		const visibleTasks = taskList?.tasks.filter(
			( task ) =>
				! task.isDismissed &&
				( ! task.isSnoozed || task.snoozedUntil < nowTimestamp )
		);

		const completedTasks = visibleTasks?.filter(
			( task ) => task.isComplete
		).length;

		return {
			loading: ! isResolved,
			remainingCount: isResolved
				? visibleTasks?.length - completedTasks
				: null,
		};
	} );

	if ( loading ) {
		return null;
	}

	return (
		<div className="woocommerce-layout__header-tasks-reminder">
			<ReminderText remainingCount={ remainingCount } />
		</div>
	);
};
