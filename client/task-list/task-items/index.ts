export type TaskItemProps = {
	key: string;
	title: string;
	container: JSX.Element;
	onClick: () => void;
	completed: boolean;
	visible: true;
	time: string;
	type: string;
};
