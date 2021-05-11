/**
 * External dependencies
 */
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { SelectControl } from '../../index';
import { Field, StringToString } from '../types';

interface SelectControlOption {
	key: string;
	label: string;
	value: { id: string };
}

const transformOptions = ( options: StringToString ) => {
	return Object.keys( options ).reduce( ( all, curr ) => {
		all.push( {
			key: curr,
			label: options[ curr ],
			value: { id: curr },
		} );
		return all;
	}, [] as SelectControlOption[] );
};

export const SettingSelect = ( {
	field,
	...props
}: {
	field: Field;
} ): JSX.Element => {
	const { description, id, label, options = {} } = field;

	const transformedOptions: SelectControlOption[] = useMemo(
		() => transformOptions( options ),
		[ options ]
	);

	return (
		<SelectControl
			title={ description }
			label={ label }
			key={ id }
			options={ transformedOptions }
			{ ...props }
		/>
	);
};
