/**
 * External dependencies
 */
import { CSSTransition } from 'react-transition-group';

/**
 * Internal dependencies
 */
import { handleKeyDown, getItemLinkType } from './list-item';

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
	// By default the List is a `nav`, which treats the list item as role `link`. To override this pass a different role.
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
	// extract out the props that must be passed down from TransitionGroup
	exit,
	enter,
	onExited,
	// in is a TS reserved keyword so can't be a variable name
	in: transitionIn,

	// Everything else you might pass into an HTML element
	...otherProps
} ): JSX.Element => {
	const defaultRole = otherProps.onClick && ! role ? 'link' : '';
	const TagName = component || 'div';

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
				role={ defaultRole }
				{ ...otherProps }
				className={ `woocommerce-list__item ${
					otherProps.onClick ? 'has-action' : ''
				} ${ className } ${ disableGutters ? '' : 'has-gutters' }` }
				onKeyDown={ ( e ) =>
					otherProps.onClick
						? handleKeyDown( e, otherProps.onClick )
						: null
				}
			>
				{ children }
			</TagName>
		</CSSTransition>
	);
};
