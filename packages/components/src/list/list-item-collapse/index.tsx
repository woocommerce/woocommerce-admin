/**
 * External dependencies
 */
import { Dashicon } from '@wordpress/components';
import { useState, useCallback, useEffect } from '@wordpress/element';
import { CSSTransition } from 'react-transition-group';

/**
 * Internal dependencies
 */
import { ExperimentalListItem } from '../experimental-list-item';

type ListItemCollapseProps = {
	collapsed?: boolean;
	hideText: string;
	showText: string;
	onCollapse?: () => void;
	onExpand?: () => void;
} & React.HTMLAttributes< HTMLElement >;

export const ExperimentalListItemCollapse: React.FC< ListItemCollapseProps > = ( {
	children,
	collapsed = true,
	hideText,
	showText,
	onCollapse,
	onExpand,
	...otherProps
} ): JSX.Element => {
	const [ isCollapsed, setCollapsed ] = useState( collapsed );

	const triggerCallbacks = ( newCollapseValue: boolean ) => {
		if ( onCollapse && newCollapseValue ) {
			onCollapse();
		}
		if ( onExpand && ! newCollapseValue ) {
			onExpand();
		}
	};

	const clickHandler = useCallback( () => {
		setCollapsed( ! isCollapsed );
		triggerCallbacks( ! isCollapsed );
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
