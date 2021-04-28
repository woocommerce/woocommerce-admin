/**
 * External dependencies
 */
import { Dashicon } from '@wordpress/components';
import { useState, useCallback, Children } from '@wordpress/element';
import { Transition } from 'react-transition-group';

/**
 * Internal dependencies
 */
import { ExperimentalListItem } from '../experimental-list-item';
import { ListProps, ExperimentalList } from '../experimental-list';

type CollapsibleListProps = {
	hideText: string;
	showText: string;
	collapsed?: boolean;
	minChildrenToShow?: number;
	onCollapse?: () => void;
	onExpand?: () => void;
} & ListProps;

const TASK_HEIGHT = 70;
const defaultStyle = {
	transition: `max-height 500ms ease-in-out`,
	maxHeight: 0,
	overflow: 'hidden',
};

export const ExperimentalCollapsibleList: React.FC< CollapsibleListProps > = ( {
	children,
	collapsed = true,
	hideText,
	showText,
	minChildrenToShow = 0,
	onCollapse,
	onExpand,
	...listProps
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

	let shownChildren: React.ReactNode[] = [];
	let hiddenChildren = Children.toArray( children );
	if ( minChildrenToShow > 0 ) {
		shownChildren = hiddenChildren.slice( 0, minChildrenToShow );
		hiddenChildren = hiddenChildren.slice( minChildrenToShow );
	}

	const transitionStyles = {
		entered: { maxHeight: hiddenChildren.length * TASK_HEIGHT },
		entering: { maxHeight: hiddenChildren.length * TASK_HEIGHT },
		exiting: { maxHeight: 0 },
		exited: { maxHeight: 0 },
	};

	return (
		<ExperimentalList { ...listProps }>
			{ shownChildren }
			<Transition
				timeout={ 500 }
				in={ ! isCollapsed }
				// Fixes initial transition see: https://github.com/reactjs/react-transition-group/issues/223#issuecomment-334748429.
				onEnter={ ( node: HTMLElement ) => node.offsetHeight }
				mountOnEnter
				unmountOnExit
			>
				{ ( state: 'entering' | 'entered' | 'exiting' | 'exited' ) => (
					<div
						style={ {
							...defaultStyle,
							...transitionStyles[ state ],
						} }
					>
						{ hiddenChildren }
					</div>
				) }
			</Transition>
			{ hiddenChildren.length > 0 ? (
				<ExperimentalListItem
					className="list-item-collapse"
					onClick={ clickHandler }
				>
					<p>{ isCollapsed ? showText : hideText }</p>

					<Dashicon
						className="list-item-collapse__icon"
						icon={
							isCollapsed ? 'arrow-down-alt2' : 'arrow-up-alt2'
						}
					/>
				</ExperimentalListItem>
			) : null }
		</ExperimentalList>
	);
};
