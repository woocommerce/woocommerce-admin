export type TaskListItemProps = {
	isExpandable: boolean;
	isExpanded: boolean;
	setExpandedTask: ( id: string ) => void;
	task: {
		id: string;
	};
};

export const TaskListItem: React.FC< TaskListItemProps > = ( { task } ) => (
	<div>Task list item: { task.id }</div>
);
