export interface StringToString {
	[ key: string ]: string;
}

export interface Field {
	id: string;
	type: 'text' | 'password' | 'checkbox' | 'select';
	title: string;
	label: string;
	description?: string;
	default?: string;
	class?: string;
	css?: string;
	options?: StringToString;
	tip?: string;
	value?: string;
	placeholder?: string;
}

export interface GetInputPropsReturn {
	value: string;
	checked: boolean;
	selected: string;
	onChange: ( name: string ) => void;
	onBlur: () => void;
	className: string | null;
	help: string | null;
}

export interface ControlProps extends GetInputPropsReturn {
	key: string;
	field: Field;
}
