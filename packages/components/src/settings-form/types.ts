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
