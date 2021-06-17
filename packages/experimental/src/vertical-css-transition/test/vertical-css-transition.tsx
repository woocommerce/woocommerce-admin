/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
import { createRef } from '@wordpress/element';
/**
 * Internal dependencies
 */
import {
	VerticalCSSTransition,
	VerticalCSSTransitionProps,
} from '../vertical-css-transition';

describe( 'VerticalCSSTransition', () => {
	const originalClientHeight = Object.getOwnPropertyDescriptor(
		HTMLElement.prototype,
		'clientHeight'
	);

	beforeEach( () => {
		Object.defineProperty( HTMLElement.prototype, 'clientHeight', {
			configurable: true,
			value: 100,
		} );
	} );

	afterEach( () => {
		if ( originalClientHeight ) {
			Object.defineProperty(
				HTMLElement.prototype,
				'offsetHeight',
				originalClientHeight
			);
		}
	} );

	it( 'should set maxHeight of children to container on render', () => {
		const nodeRef = createRef< undefined | HTMLDivElement >();
		render(
			<VerticalCSSTransition
				in={ true }
				timeout={ 0 }
				nodeRef={ nodeRef as React.RefObject< undefined > }
				classNames="test"
			>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);

		expect(
			nodeRef.current && nodeRef.current.parentElement?.style.maxHeight
		).toBe( '100px' );
	} );

	it( 'should update maxHeight when children are updated', () => {
		const nodeRef = createRef< undefined | HTMLDivElement >();
		const props: VerticalCSSTransitionProps = {
			in: true,
			timeout: 0,
			nodeRef: nodeRef as React.RefObject< undefined >,
			classNames: 'test',
		};
		const { rerender } = render(
			<VerticalCSSTransition { ...props }>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);

		expect(
			nodeRef.current && nodeRef.current.parentElement?.style.maxHeight
		).toBe( '100px' );

		rerender(
			<VerticalCSSTransition { ...props }>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
				<div>New child</div>
			</VerticalCSSTransition>
		);
		expect(
			nodeRef.current && nodeRef.current.parentElement?.style.maxHeight
		).toBe( '200px' );
	} );

	it( 'should set maxHeight to zero if in is set to false', () => {
		const nodeRef = createRef< undefined | HTMLDivElement >();
		render(
			<VerticalCSSTransition
				in={ false }
				timeout={ 0 }
				nodeRef={ nodeRef as React.RefObject< undefined > }
				classNames="test"
			>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);

		expect(
			nodeRef.current && nodeRef.current.parentElement?.style.maxHeight
		).toBe( '0' );
	} );

	it( 'should set transitionDuration to the passed in timeout', () => {
		const nodeRef = createRef< undefined | HTMLDivElement >();
		render(
			<VerticalCSSTransition
				in={ false }
				timeout={ 10 }
				nodeRef={ nodeRef as React.RefObject< undefined > }
				classNames="test"
			>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);

		expect(
			nodeRef.current &&
				nodeRef.current.parentElement?.style.transitionDuration
		).toBe( '10ms' );
	} );

	it( 'should still set css classes on enter transition', ( done ) => {
		const nodeRef = createRef< undefined | HTMLDivElement >();
		const props: VerticalCSSTransitionProps = {
			in: false,
			timeout: 0,
			nodeRef: nodeRef as React.RefObject< undefined >,
			classNames: 'test',
			onEntering: () => {
				expect(
					nodeRef.current &&
						nodeRef.current.classList.contains( 'test-enter' )
				).toEqual( true );
				expect(
					nodeRef.current &&
						nodeRef.current.classList.contains(
							'test-enter-active'
						)
				).toEqual( true );
				done();
			},
		};
		const { rerender } = render(
			<VerticalCSSTransition { ...props }>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);
		rerender(
			<VerticalCSSTransition { ...props } in={ true }>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);
	} );

	it( 'should still set css classes on exit transition', ( done ) => {
		const nodeRef = createRef< undefined | HTMLDivElement >();
		const props: VerticalCSSTransitionProps = {
			in: true,
			timeout: 0,
			nodeRef: nodeRef as React.RefObject< undefined >,
			classNames: 'test',
			onExiting: () => {
				expect(
					nodeRef.current &&
						nodeRef.current.classList.contains( 'test-exit' )
				).toEqual( true );
				expect(
					nodeRef.current &&
						nodeRef.current.classList.contains( 'test-exit-active' )
				).toEqual( true );
				done();
			},
		};
		const { rerender } = render(
			<VerticalCSSTransition { ...props }>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);
		rerender(
			<VerticalCSSTransition { ...props } in={ false }>
				<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
					Test
				</div>
			</VerticalCSSTransition>
		);
	} );

	describe( 'defaultStyle', () => {
		it( 'should overwrite default style when passed in', () => {
			const nodeRef = createRef< undefined | HTMLDivElement >();
			render(
				<VerticalCSSTransition
					in={ false }
					timeout={ 0 }
					nodeRef={ nodeRef as React.RefObject< undefined > }
					classNames="test"
					defaultStyle={ {
						transitionProperty: 'max-height, opacity',
					} }
				>
					<div ref={ nodeRef as React.RefObject< HTMLDivElement > }>
						Test
					</div>
				</VerticalCSSTransition>
			);

			expect(
				nodeRef.current &&
					nodeRef.current.parentElement?.style.transitionProperty
			).toBe( 'max-height, opacity' );
		} );
	} );
} );
