/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { useEffect, useRef, useState } from '@wordpress/element';
import { Card, CardBody, CardHeader } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { Badge } from '@woocommerce/components';
import { ONBOARDING_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { Text, List, CollapsibleList } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { TaskListItem } from './task-list-item';
import { TaskListMenu } from './task-list-menu';
import './task-list.scss';

export const getEventPrefix = ( id: string ): string => {
	// This helps retain backwards compatibility with the old event naming.
	if ( id === 'setup' ) {
		return 'tasklist_';
	}

	return `${ id }_tasklist_`;
};

export type TaskProps = {
	actionLabel?: string;
	actionUrl?: string;
	content: string;
	id: string;
	isComplete: boolean;
	isDismissable: boolean;
	isDismissed: boolean;
	isVisible: boolean;
	isSnoozable: boolean;
	snoozedUntil: number;
	time: string;
	title: string;
};

export type TaskListProps = {
	id: string;
	isCollapsible?: boolean;
	isComplete: boolean;
	isExpandable?: boolean;
	tasks: TaskProps[];
	title: string;
	query: {
		task: string;
	};
};

export const TaskList: React.FC< TaskListProps > = ( {
	id,
	tasks,
	title: listTitle,
	isCollapsible = false,
	isExpandable = false,
	query,
} ) => {
	const { hideTaskList } = useDispatch( ONBOARDING_STORE_NAME );
	const { profileItems } = useSelect( ( select ) => {
		const { getProfileItems } = select( ONBOARDING_STORE_NAME );

		return {
			profileItems: getProfileItems(),
		};
	} );
	const eventPrefix = getEventPrefix( id );
	const prevQueryRef = useRef( query );
	const nowTimestamp = Date.now();
	const visibleTasks = tasks.filter(
		( task ) =>
			task.isVisible &&
			! task.isDismissed &&
			( ! task.snoozedUntil || task.snoozedUntil < nowTimestamp )
	);

	const incompleteTasks = tasks.filter(
		( task ) => task.isVisible && ! task.isComplete && ! task.isDismissed
	);

	const [ expandedTask, setExpandedTask ] = useState(
		incompleteTasks[ 0 ]?.id
	);

	const recordTaskListView = () => {
		recordEvent( `${ eventPrefix }_view`, {
			number_tasks: visibleTasks.length,
			store_connected: profileItems.wccom_connected,
		} );
	};

	useEffect( () => {
		recordTaskListView();
	}, [] );

	useEffect( () => {
		const { task: prevTask } = prevQueryRef.current;
		const { task } = query;

		if ( prevTask !== task ) {
			window.document.documentElement.scrollTop = 0;
			prevQueryRef.current = query;
		}
	}, [ query ] );

	if ( ! visibleTasks.length ) {
		return <div className="woocommerce-task-dashboard__container"></div>;
	}

	const expandLabel = sprintf(
		/* translators: %d = number of hidden tasks */
		_n(
			'Show %d more task.',
			'Show %d more tasks.',
			visibleTasks.length - 2,
			'woocommerce-admin'
		),
		visibleTasks.length - 2
	);
	const collapseLabel = __( 'Show less', 'woocommerce-admin' );
	const ListComp = isCollapsible ? CollapsibleList : List;

	const listProps = isCollapsible
		? {
				collapseLabel,
				expandLabel,
				show: 2,
				onCollapse: () =>
					recordEvent( `${ eventPrefix }_collapse`, {} ),
				onExpand: () => recordEvent( `${ eventPrefix }_expand`, {} ),
		  }
		: {};

	return (
		<>
			<div className="woocommerce-task-dashboard__container">
				<Card
					size="large"
					className="woocommerce-task-card woocommerce-homescreen-card"
				>
					<CardHeader size="medium">
						<div className="wooocommerce-task-card__header">
							<Text
								size="20"
								lineHeight="28px"
								variant="title.small"
							>
								{ listTitle }
							</Text>
							<Badge count={ incompleteTasks.length } />
						</div>
						<TaskListMenu id={ id } />
					</CardHeader>
					<ListComp animation="custom" { ...listProps }>
						{ visibleTasks.map( ( task ) => (
							<TaskListItem
								key={ task.id }
								isExpanded={ expandedTask === task.id }
								isExpandable={ isExpandable }
								task={ task }
								setExpandedTask={ setExpandedTask }
							/>
						) ) }
					</ListComp>
				</Card>
			</div>
		</>
	);
};
