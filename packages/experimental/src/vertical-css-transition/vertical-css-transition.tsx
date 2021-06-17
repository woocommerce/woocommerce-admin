/**
 * External dependencies
 */
import { useState, useCallback } from '@wordpress/element';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { CSSTransition } from 'react-transition-group';

export type VerticalCSSTransitionProps<
	Ref extends HTMLElement | undefined = undefined
> = CSSTransitionProps< Ref > & {
	defaultStyle?: React.CSSProperties;
};

function getContainerHeight( container: HTMLDivElement ) {
	let containerHeight = 0;
	for ( const child of container.children ) {
		containerHeight += child.clientHeight;
	}
	return containerHeight;
}

/**
 * VerticalCSSTransition is a wrapper for CSSTransition, automatically adding a vertical height transition.
 * The maxHeight is calculated through JS, something CSS does not support.
 */
export const VerticalCSSTransition: React.FC< VerticalCSSTransitionProps > = ( {
	children,
	defaultStyle,
	...props
} ) => {
	const [ containerHeight, setContainerHeight ] = useState( 0 );
	const collapseContainerRef = useCallback(
		( containerElement: HTMLDivElement ) => {
			if ( containerElement ) {
				setContainerHeight( getContainerHeight( containerElement ) );
			}
		},
		[ children ]
	);

	const transitionStyles = {
		entered: { maxHeight: containerHeight },
		entering: { maxHeight: containerHeight },
		exiting: { maxHeight: 0 },
		exited: { maxHeight: 0 },
	};
	const transitionDuration =
		( typeof props.timeout === 'number' ? props.timeout : 500 ) + 'ms';
	defaultStyle = {
		transitionProperty: 'max-height',
		transitionDuration,
		maxHeight: 0,
		overflow: 'hidden',
		...( defaultStyle || {} ),
	};

	return (
		<CSSTransition { ...props }>
			{ ( state: 'entering' | 'entered' | 'exiting' | 'exited' ) => (
				<div
					className="vertical-css-transition-container"
					style={ {
						...defaultStyle,
						...transitionStyles[ state ],
					} }
					ref={ collapseContainerRef }
				>
					{ children }
				</div>
			) }
		</CSSTransition>
	);
};
