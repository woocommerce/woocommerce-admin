/**
 * External dependencies
 */
import { Dashicon } from '@wordpress/components';
import { useState, useCallback } from '@wordpress/element';
import { CSSTransition } from 'react-transition-group';

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

	return (
		<>
			<CSSTransition
				timeout={ 500 }
				in={ ! isCollapsed }
				classNames="list-item-collapse"
				mountOnEnter
				unmountOnExit
			>
				<div>{ children }</div>
			</CSSTransition>
			<ExperimentalListItem
				className="list-item-collapse"
				onClick={ clickHandler }
				{ ...otherProps }
			>
				<p>{ isCollapsed ? showText : hideText }</p>

				<Dashicon
					className="list-item-collapse__icon"
					icon={ isCollapsed ? 'arrow-down-alt2' : 'arrow-up-alt2' }
				/>
			</ExperimentalListItem>
		</>
	);
};
