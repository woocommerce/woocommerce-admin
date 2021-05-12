/**
 * External dependencies
 */
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { SelectControl } from '../../index';
import { ControlProps, StringToString } from '../types';

interface SelectControlOption {
	key: string;
	label: string;
	value: { id: string };
}

const transformOptions = ( options: StringToString ) => {
	return Object.keys( options ).reduce(
		( all: SelectControlOption[], curr ) => {
			all.push( {
				key: curr,
				label: options[ curr ],
				value: { id: curr },
			} );
			return all;
		},
		[]
	);
};

export const SettingSelect = ( {
	field,
	...props
}: ControlProps ): JSX.Element => {
	const { description, label, options = {} } = field;

	const transformedOptions: SelectControlOption[] = useMemo(
		() => transformOptions( options ),
		[ options ]
	);

	return (
		<SelectControl
			title={ description }
			label={ label }
			options={ transformedOptions }
			{ ...props }
		/>
	);
};
