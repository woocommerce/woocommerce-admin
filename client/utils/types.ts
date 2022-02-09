export type FormValue = HTMLInputElement[ 'value' ];

export type FormInputProps = {
	value: FromValue;
	checked: boolean;
	selected: FromValue;
	onChange: ( value: FormValue ) => void;
	onBlur: () => void;
	className: string;
	help: string | null;
};
