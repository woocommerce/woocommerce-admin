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

export const ExperimentalListItemCollapse: React.FC< ListItemCollapseProps > = ( {
	children,
	collapsed = true,
	hideText,
	showText,
	...otherProps
} ): JSX.Element => {
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

				<Dashicon
					className="list-item-collapse__icon"
					icon="arrow-down-alt2"
				/>
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

				<Dashicon
					className="list-item-collapse__icon"
					icon="arrow-up-alt2"
				/>
			</ExperimentalListItem>
		</>
	);
};
