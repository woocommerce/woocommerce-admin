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
} & Partial< CSSTransitionProps > &
	React.AllHTMLAttributes< HTMLElement >;

export type ListAnimation = 'slide-right' | 'none';

export const ExperimentalListItem: React.FC< ListItemProps > = ( {
	children,
	disableGutters = false,
	animation = 'none',
	className = '',
	tabIndex = 0,
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

	const roleProps = hasAction
		? {
				role: 'button',
				onKeyDown: ( e: React.KeyboardEvent< HTMLElement > ) =>
					handleKeyDown( e, otherProps.onClick ),
		  }
		: {};

	const tagClasses = classnames( {
		'has-action': hasAction,
		'has-gutters': ! disableGutters,
		// since there is only one valid animation right now, any other value disables them.
		'transitions-disabled': animation !== 'slide-right',
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
			<li
				tabIndex={ tabIndex }
				// spread role props first, in case it is desired to override them
				{ ...roleProps }
				{ ...otherProps }
				className={ `woocommerce-list__item ${ tagClasses } ${ className }` }
			>
				{ children }
			</li>
		</CSSTransition>
	);
};
