export type TaskType = {
	actionLabel?: string;
	actionUrl?: string;
	content: string;
	id: string;
	isComplete: boolean;
	isDismissable: boolean;
	isDismissed: boolean;
	isSnoozed: boolean;
	isVisible: boolean;
	isVisited: boolean;
	isSnoozable: boolean;
	snoozedUntil: number;
	time: string;
	title: string;
};

export type TaskListType = {
	id: string;
	isCollapsible?: boolean;
	isComplete: boolean;
	isExpandable?: boolean;
	tasks: TaskType[];
	title: string;
	eventPrefix: string;
	displayProgressHeader: boolean;
};
