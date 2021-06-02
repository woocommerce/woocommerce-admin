/**
 * External dependencies
 */
import { Icon, chevronUp, chevronDown } from '@wordpress/icons';
import { useState, useCallback, useEffect, Children } from '@wordpress/element';
import { Transition } from 'react-transition-group';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { ExperimentalListItem } from '../experimental-list-item';
import { ListProps, ExperimentalList } from '../experimental-list';

type CollapsibleListProps = {
	collapseLabel: string;
	expandLabel: string;
	collapsed?: boolean;
	show?: number;
	onCollapse?: () => void;
	onExpand?: () => void;
} & ListProps;

const defaultStyle = {
	transition: `max-height 500ms ease-in-out`,
	maxHeight: 0,
	overflow: 'hidden',
};

function getContainerHeight( collapseContainer: HTMLDivElement | null ) {
	let containerHeight = 0;
	if ( collapseContainer ) {
		for ( const child of collapseContainer.children ) {
			containerHeight += child.clientHeight;
		}
	}
	return containerHeight;
}

/**
 * This functions returns a new list of shown children depending on the new children updates.
 * If one is removed, it will remove it from the show array.
 * If one is added, it will add it back to the shown list, making use of the new children list to keep order.
 *
 * @param currentChildren a list of the current children.
 * @param currentShownChildren a list of the current shown children.
 * @param newChildren a list of the new children.
 * @returns new list of children that should be shown.
 */
function getUpdatedShownChildren(
	currentChildren: React.ReactElement[],
	currentShownChildren: React.ReactElement[],
	newChildren: React.ReactElement[]
): React.ReactElement[] {
	if ( newChildren.length < currentChildren.length ) {
		const newChildrenKeys = newChildren.map( ( child ) => child.key );
		// Filter out removed child
		return currentShownChildren.filter(
			( item ) => item.key && newChildrenKeys.includes( item.key )
		);
	} else {
		const currentShownChildrenKeys = currentShownChildren.map(
			( child ) => child.key
		);
		const currentChildrenKeys = currentChildren.map(
			( child ) => child.key
		);
		// Add new child back in.
		return newChildren.filter(
			( child ) =>
				child.key &&
				( currentShownChildrenKeys.includes( child.key ) ||
					! currentChildrenKeys.includes( child.key ) )
		);
	}
}

export const ExperimentalCollapsibleList: React.FC< CollapsibleListProps > = ( {
	children,
	collapsed = true,
	collapseLabel,
	expandLabel,
	show = 0,
	onCollapse,
	onExpand,
	...listProps
} ): JSX.Element => {
	const [ isCollapsed, setCollapsed ] = useState( collapsed );
	const [ containerHeight, setContainerHeight ] = useState( 0 );
	const [ footerLabels, setFooterLabels ] = useState( {
		collapse: collapseLabel,
		expand: expandLabel,
	} );
	const [ displayedChildren, setDisplayedChildren ] = useState< {
		all: React.ReactElement[];
		shown: React.ReactElement[];
		hidden: React.ReactElement[];
	} >( {
		all: [],
		shown: [],
		hidden: [],
	} );
	const collapseContainerRef = useCallback(
		( containerElement: HTMLDivElement ) => {
			if ( containerElement ) {
				setContainerHeight( getContainerHeight( containerElement ) );
			}
		},
		[ displayedChildren.hidden ]
	);

	useEffect( () => {
		let allChildren = Children.toArray( children ) as React.ReactElement[];
		if (
			displayedChildren.all.length > 0 &&
			isCollapsed &&
			listProps.animation !== 'none'
		) {
			setDisplayedChildren( {
				...displayedChildren,
				shown: getUpdatedShownChildren(
					displayedChildren.all,
					displayedChildren.shown,
					allChildren
				),
			} );
			setTimeout( () => {
				updateChildren();
			}, 500 );
		} else {
			updateChildren();
		}
	}, [ children ] );

	const updateChildren = () => {
		let shownChildren: React.ReactElement[] = [];
		let allChildren = Children.toArray( children ) as React.ReactElement[];
		let hiddenChildren = allChildren;
		if ( show > 0 ) {
			shownChildren = allChildren.slice( 0, show );
			hiddenChildren = allChildren.slice( show );
		}
		if ( hiddenChildren.length > 0 ) {
			setFooterLabels( { expand: expandLabel, collapse: collapseLabel } );
		}
		setDisplayedChildren( {
			all: allChildren,
			shown: shownChildren,
			hidden: hiddenChildren,
		} );
	};

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

	const transitionStyles = {
		entered: { maxHeight: containerHeight },
		entering: { maxHeight: containerHeight },
		exiting: { maxHeight: 0 },
		exited: { maxHeight: 0 },
	};

	const listClasses = classnames(
		listProps.className || '',
		'woocommerce-experimental-list'
	);

	return (
		<ExperimentalList { ...listProps } className={ listClasses }>
			{ [
				...displayedChildren.shown,
				<Transition
					key="remaining-children"
					timeout={ 500 }
					in={ ! isCollapsed }
					mountOnEnter
					unmountOnExit
				>
					{ (
						state: 'entering' | 'entered' | 'exiting' | 'exited'
					) => (
						<div
							ref={ collapseContainerRef }
							style={ {
								...defaultStyle,
								...transitionStyles[ state ],
							} }
						>
							{ displayedChildren.hidden }
						</div>
					) }
				</Transition>,
				displayedChildren.hidden.length > 0 ? (
					<ExperimentalListItem
						key="collapse-item"
						className="list-item-collapse"
						onClick={ clickHandler }
						animation="none"
						disableGutters
					>
						<p>
							{ isCollapsed
								? footerLabels.expand
								: footerLabels.collapse }
						</p>

						<Icon
							className="list-item-collapse__icon"
							size={ 30 }
							icon={ isCollapsed ? chevronDown : chevronUp }
						/>
					</ExperimentalListItem>
				) : null,
			] }
		</ExperimentalList>
	);
};
