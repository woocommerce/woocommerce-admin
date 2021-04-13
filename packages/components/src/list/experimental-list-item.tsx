/**
 * External dependencies
 */
import { CSSTransition } from 'react-transition-group';

/**
 * Internal dependencies
 */
import { handleKeyDown } from './list-item';

type CSSTransitionProps = {
	in: boolean;
	exit: boolean;
	enter: boolean;
	onExited: () => void;
};

type ListItemProps = {
	onClick?: () => void;
	// control whether to display padding on list item or not.
	disableGutters: boolean;
	className?: string;
	// By default the List is a `nav`, which treats the list item as role `link` if `onClick` is passed. To override this pass a different role.
	role?: 'menuitem' | 'link' | 'button';
	// By default a div is rendered, but if you want the list item to behave as a different tag you can override it here.
	component?: React.ElementType;
} & CSSTransitionProps &
	React.HTMLAttributes< HTMLElement >;

export const ExperimentalListItem: React.FC< ListItemProps > = ( {
	children,
	disableGutters = false,
	className = '',
	role,
	component,
	tabIndex,
	// extract out the props that must be passed down from TransitionGroup
	exit,
	enter,
	onExited,
	// in is a TS reserved keyword so can't be a variable name
	in: transitionIn,

	// Everything else you might pass into an HTML element
	...otherProps
} ): JSX.Element => {
	const hasAction = !! otherProps.onClick;
	const tagRole = role || ( component !== 'a' && hasAction && 'link' ) || '';
	const TagName = component || 'div';
	const tagTabIndex = tabIndex || ( hasAction ? '0' : null );

	return (
		<CSSTransition
			timeout={ 500 }
			classNames={ `woocommerce-list__item` }
			in={ transitionIn }
			exit={ exit }
			enter={ enter }
			onExited={ onExited }
		>
			<TagName
				tabIndex={ tagTabIndex }
				role={ tagRole }
				{ ...otherProps }
				className={ `woocommerce-list__item ${
					otherProps.onClick ? 'has-action' : ''
				} ${ className } ${ disableGutters ? '' : 'has-gutters' }` }
				onKeyDown={ ( e: React.KeyboardEvent< HTMLElement > ) =>
					hasAction ? handleKeyDown( e, otherProps.onClick ) : null
				}
			>
				{ children }
			</TagName>
		</CSSTransition>
	);
};
