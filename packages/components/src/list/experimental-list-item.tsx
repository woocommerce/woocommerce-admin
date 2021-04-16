/**
 * External dependencies
 */
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

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
	// control whether to display padding on list item or not.
	disableGutters: boolean;
	className?: string;
	// By default the List is a `nav`, which treats the list item as role `link` if `onClick` is passed. To override this pass a different role.
	role?: 'menuitem' | 'link' | 'button';
	// By default a div is rendered, but if you want the list item to behave as a different tag you can override it here.
	component?: React.ElementType;
} & CSSTransitionProps &
	React.AllHTMLAttributes< HTMLElement >;

export const ExperimentalListItem: React.FC< ListItemProps > = ( {
	children,
	disableGutters = false,
	className = '',
	component = 'a',
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
	// for styling purposes only
	const hasAction = !! otherProps?.onClick;

	const Tag = component;
	const tagTabIndex = tabIndex || '0';

	const tagClasses = classnames( {
		'has-action': hasAction,
		'has-gutters': ! disableGutters,
	} );

	return (
		<CSSTransition
			timeout={ 500 }
			classNames={ `woocommerce-list__item` }
			in={ transitionIn }
			exit={ exit }
			enter={ enter }
			onExited={ onExited }
		>
			<Tag
				tabIndex={ tagTabIndex }
				{ ...otherProps }
				className={ `woocommerce-list__item ${ tagClasses } ${ className }` }
				onKeyDown={ ( e: React.KeyboardEvent< HTMLElement > ) =>
					hasAction ? handleKeyDown( e, otherProps.onClick ) : null
				}
			>
				{ children }
			</Tag>
		</CSSTransition>
	);
};
