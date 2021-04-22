/**
 * External dependencies
 */
import { Dashicon } from '@wordpress/components';
import { useState, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { ExperimentalListItem } from '../experimental-list-item';

type ListItemCollapseProps = {
	collapsed?: boolean;
	hideText: string;
	showText: string;
} & React.HTMLAttributes< HTMLElement >;

export const ListItemCollapse: React.FC< ListItemCollapseProps > = ( {
	children,
	collapsed = true,
	hideText,
	showText,
	...otherProps
} ): JSX.Element => {
	// TODO - could use this to derive default text
	// const collapsedItemCount = Children.count( children );
	const [ isCollapsed, setCollapsed ] = useState( collapsed );

	const clickHandler = useCallback( () => {
		setCollapsed( ! isCollapsed );
	}, [ isCollapsed ] );

	if ( isCollapsed ) {
		return (
			<ExperimentalListItem
				className="list-item-collapse"
				{ ...otherProps }
				onClick={ clickHandler }
			>
				<p>{ showText }</p>
				<Dashicon />
			</ExperimentalListItem>
		);
	}

	return (
		<>
			{ children }
			<ExperimentalListItem
				className="list-item-collapse"
				onClick={ clickHandler }
				{ ...otherProps }
			>
				<p>{ hideText }</p>
			</ExperimentalListItem>
		</>
	);
};
