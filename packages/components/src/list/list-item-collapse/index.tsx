/**
 * External dependencies
 */
import { useState, Children, useCallback } from '@wordpress/element';

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
				onClick={ clickHandler }
			>
				<p>{ showText }</p>
			</ExperimentalListItem>
		);
	}

	return (
		<>
			{ children }
			<ExperimentalListItem
				className="list-item-collapse"
				onClick={ clickHandler }
			>
				<p>{ hideText }</p>
			</ExperimentalListItem>
		</>
	);
};
