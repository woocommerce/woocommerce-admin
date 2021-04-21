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
	disableGutters?: boolean;
	animation?: ListAnimation;
	className?: string;
	// By default a div is rendered, but if you want the list item to behave as a different tag you can override it here.
	component?: React.ElementType;
} & Partial< CSSTransitionProps > &
	React.AllHTMLAttributes< HTMLElement >;

export type ListAnimation = 'slide-right' | 'none';

export const ExperimentalListItem: React.FC< ListItemProps > = ( {
	children,
	disableGutters = false,
	animation = 'none',
	className = '',
	component = 'li',
	tabIndex = '0',
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

	const tagClasses = classnames( {
		'has-action': hasAction,
		'has-gutters': ! disableGutters,
		'transitions-disabled': animation === 'none',
	} );

	return (
		<CSSTransition
			timeout={ 500 }
			classNames="woocommerce-list__item"
			in={ transitionIn }
			exit={ exit }
			enter={ enter }
			onExited={ onExited }
		>
			<Tag
				tabIndex={ tabIndex }
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
