/**
 * External dependencies
 */
import {
	render,
	screen,
	fireEvent,
	act,
	createEvent,
} from '@testing-library/react';
import { useSelect } from '@wordpress/data';
import { useUser, useUserPreferences } from '@woocommerce/data';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { ActivityPanel } from '../activity-panel';
import { Panel } from '../panel';

jest.mock( '@woocommerce/data', () => ( {
	...jest.requireActual( '@woocommerce/data' ),
	useUser: jest.fn().mockReturnValue( { currentUserCan: () => true } ),
	useUserPreferences: jest.fn().mockReturnValue( {
		updateUserPreferences: () => {},
	} ),
} ) );

// We aren't testing the <DisplayOptions /> component here.
jest.mock( '../display-options', () => ( {
	DisplayOptions: jest.fn().mockReturnValue( '[DisplayOptions]' ),
} ) );

jest.mock( '../highlight-tooltip', () => ( {
	HighlightTooltip: jest.fn().mockReturnValue( '[HighlightTooltip]' ),
} ) );

jest.mock( '@wordpress/data', () => {
	// Require the original module to not be mocked...
	const originalModule = jest.requireActual( '@wordpress/data' );

	return {
		__esModule: true, // Use it when dealing with esModules
		...originalModule,
		useSelect: jest.fn().mockReturnValue( {} ),
	};
} );

jest.mock( '../panel', () => {
	const originalModule = jest.requireActual( '../panel' );
	return {
		__esModule: true,
		...originalModule,
		Panel: jest.fn(),
	};
} );

describe( 'Activity Panel', () => {
	beforeEach( () => {
		useSelect.mockImplementation( () => ( {
			hasUnreadNotifications: false,
			requestingTaskListOptions: false,
			setupTaskListComplete: false,
			setupTaskListHidden: false,
			trackedCompletedTasks: [],
		} ) );
		Panel.mockImplementation( jest.requireActual( '../panel' ).Panel );
		useUser.mockImplementation( () => ( {
			currentUserCan: () => true,
		} ) );
	} );

	it( 'should render inbox tab on embedded pages', () => {
		render( <ActivityPanel isEmbedded query={ {} } /> );

		expect( screen.getByText( 'Activity' ) ).toBeDefined();
	} );

	it( 'should render inbox tab if not on home screen', () => {
		render(
			<ActivityPanel query={ { page: 'wc-admin', path: '/customers' } } />
		);

		expect( screen.getByText( 'Activity' ) ).toBeDefined();
	} );

	it( 'should not render inbox tab on home screen', () => {
		render( <ActivityPanel query={ { page: 'wc-admin' } } /> );

		expect( screen.queryByText( 'Inbox' ) ).toBeNull();
	} );

	it( 'should not render help tab if not on home screen', () => {
		render(
			<ActivityPanel query={ { page: 'wc-admin', path: '/customers' } } />
		);

		expect( screen.queryByText( 'Help' ) ).toBeNull();
	} );

	it( 'should render help tab if on home screen', () => {
		render( <ActivityPanel query={ { page: 'wc-admin' } } /> );

		expect( screen.getByText( 'Help' ) ).toBeDefined();
	} );

	it( 'should render help tab before options load', async () => {
		useSelect.mockImplementation( () => ( {
			requestingTaskListOptions: true,
		} ) );
		render(
			<ActivityPanel
				query={ {
					task: 'products',
				} }
			/>
		);

		const tabs = await screen.findAllByRole( 'tab' );

		// Expect that the only tab is "Help".
		expect( tabs ).toHaveLength( 1 );
		expect( screen.getByText( 'Help' ) ).toBeDefined();
	} );

	it( 'should not render help tab when not on main route', () => {
		render(
			<ActivityPanel
				query={ {
					page: 'wc-admin',
					task: 'products',
					path: '/customers',
				} }
			/>
		);

		// Expect that "Help" tab is absent.
		expect( screen.queryByText( 'Help' ) ).toBeNull();
	} );

	it( 'should render display options if on home screen', () => {
		render(
			<ActivityPanel
				query={ {
					page: 'wc-admin',
				} }
			/>
		);

		expect( screen.getByText( '[DisplayOptions]' ) ).toBeDefined();
	} );

	it( 'should only render the finish setup link when TaskList is not complete', () => {
		const { queryByText, rerender } = render(
			<ActivityPanel
				query={ {
					task: 'products',
				} }
			/>
		);

		expect( queryByText( 'Finish setup' ) ).toBeDefined();

		useSelect.mockImplementation( () => ( {
			requestingTaskListOptions: false,
			setupTaskListComplete: true,
			setupTaskListHidden: false,
		} ) );

		rerender(
			<ActivityPanel
				query={ {
					task: 'products',
				} }
			/>
		);

		expect( queryByText( 'Finish setup' ) ).toBeNull();
	} );

	it( 'should not render the finish setup link when on the home screen and TaskList is not complete', () => {
		const { queryByText } = render(
			<ActivityPanel
				query={ {
					page: 'wc-admin',
					task: '',
				} }
			/>
		);

		expect( queryByText( 'Finish setup' ) ).toBeNull();
	} );

	it( 'should render the finish setup link when on embedded pages and TaskList is not complete', () => {
		const { getByText } = render(
			<ActivityPanel isEmbedded query={ {} } />
		);

		expect( getByText( 'Finish setup' ) ).toBeInTheDocument();
	} );

	it( 'should not render the finish setup link when a user does not have capabilties', () => {
		useUser.mockImplementation( () => ( {
			currentUserCan: () => false,
		} ) );

		const { queryByText } = render(
			<ActivityPanel
				query={ {
					task: 'products',
				} }
			/>
		);

		expect( queryByText( 'Finish setup' ) ).toBeDefined();
	} );

	describe( 'help panel tooltip', () => {
		it( 'should render highlight tooltip when task count is at-least 2, task is not completed, and tooltip not shown yet', () => {
			useUserPreferences.mockReturnValue( {
				updateUserPreferences: () => {},
				task_list_tracked_started_tasks: { payment: 2 },
			} );
			const { getByText } = render(
				<ActivityPanel isEmbedded query={ { task: 'payment' } } />
			);

			expect( getByText( '[HighlightTooltip]' ) ).toBeInTheDocument();
		} );

		it( 'should not render highlight tooltip when task is not visited more then once', () => {
			useSelect.mockImplementation( () => ( {
				requestingTaskListOptions: false,
				setupTaskListComplete: false,
				setupTaskListHidden: false,
				trackedCompletedTasks: [],
			} ) );
			useUserPreferences.mockReturnValue( {
				updateUserPreferences: () => {},
				task_list_tracked_started_tasks: { payment: 1 },
			} );
			render(
				<ActivityPanel isEmbedded query={ { task: 'payment' } } />
			);

			expect( screen.queryByText( '[HighlightTooltip]' ) ).toBeNull();

			useUserPreferences.mockReturnValue( {
				updateUserPreferences: () => {},
				task_list_tracked_started_tasks: {},
			} );

			render(
				<ActivityPanel isEmbedded query={ { task: 'payment' } } />
			);

			expect( screen.queryByText( '[HighlightTooltip]' ) ).toBeNull();
		} );

		it( 'should not render highlight tooltip when task is visited twice, but completed already', () => {
			useSelect.mockImplementation( () => ( {
				requestingTaskListOptions: false,
				setupTaskListComplete: false,
				setupTaskListHidden: false,
				isCompletedTask: true,
			} ) );

			useUserPreferences.mockReturnValue( {
				updateUserPreferences: () => {},
				task_list_tracked_started_tasks: { payment: 2 },
			} );

			const { queryByText } = render(
				<ActivityPanel isEmbedded query={ { task: 'payment' } } />
			);

			expect( queryByText( '[HighlightTooltip]' ) ).toBeNull();
		} );

		it( 'should not render highlight tooltip when task is visited twice, not completed, but already shown', () => {
			useUserPreferences.mockReturnValue( {
				task_list_tracked_started_tasks: { payment: 2 },
				help_panel_highlight_shown: 'yes',
			} );

			const { queryByText } = render(
				<ActivityPanel isEmbedded query={ { task: 'payment' } } />
			);

			expect( queryByText( '[HighlightTooltip]' ) ).toBeNull();
		} );
	} );

	describe( 'panel', () => {
		it( 'should set focus when panel opened/closed without removing element when onTransitionEnd is triggered', () => {
			const content = 'test';
			const TestComponent = () => {
				const [ panelOpen, setPanelOpen ] = useState( true );
				return (
					<div>
						<button onClick={ () => setPanelOpen( ! panelOpen ) }>
							Toggle
						</button>
						<Panel
							isPanelOpen={ panelOpen }
							tab={ {} }
							content={ content }
							clearPanel={ () => {} }
						/>
					</div>
				);
			};
			const { container, queryByText, getByRole } = render(
				<TestComponent />
			);
			expect( queryByText( 'test' ) ).toBeInTheDocument();
			expect( document.activeElement ).toEqual(
				container.getElementsByClassName(
					'woocommerce-layout__activity-panel-wrapper'
				)[ 0 ]
			);
			getByRole( 'button' ).focus();
			expect( document.activeElement ).not.toEqual(
				container.getElementsByClassName(
					'woocommerce-layout__activity-panel-wrapper'
				)[ 0 ]
			);
			fireEvent.click( getByRole( 'button' ) );
			fireEvent.click( getByRole( 'button' ) );
			const event = createEvent.transitionEnd(
				container.getElementsByClassName(
					'woocommerce-layout__activity-panel-wrapper'
				)[ 0 ]
			);
			Object.defineProperty( event, 'propertyName', {
				value: 'transform',
			} );

			fireEvent(
				container.getElementsByClassName(
					'woocommerce-layout__activity-panel-wrapper'
				)[ 0 ],
				event
			);
			expect( document.activeElement ).toEqual(
				container.getElementsByClassName(
					'woocommerce-layout__activity-panel-wrapper'
				)[ 0 ]
			);
		} );
	} );

	describe( 'panel open and closing', () => {
		let clearPanel;
		beforeEach( () => {
			Panel.mockImplementation(
				( { isPanelOpen, isPanelSwitching, tab, ...props } ) => {
					clearPanel = props.clearPanel;
					return (
						<div>
							<span>[panel]</span>
							<span>[panelOpen={ isPanelOpen.toString() }]</span>
							<span>
								[panelSwitching={ isPanelSwitching.toString() }]
							</span>
							<span>[hasTab={ tab ? 'true' : 'false' }]</span>
						</div>
					);
				}
			);
		} );

		it( 'should have panel open and panel switching as false by default', () => {
			const { queryByText, getByRole } = render(
				<ActivityPanel
					query={ {
						task: 'products',
					} }
				/>
			);
			expect( queryByText( '[panel]' ) ).toBeInTheDocument();
			expect( queryByText( '[panelOpen=false]' ) ).toBeInTheDocument();
			expect(
				queryByText( '[panelSwitching=false]' )
			).toBeInTheDocument();
			fireEvent.click( getByRole( 'tab', { name: 'Help' } ) );
		} );

		it( 'should allow user to toggle, an individual panel without setting panelSwitching to true', () => {
			const { queryByText, getByRole } = render(
				<ActivityPanel
					query={ {
						task: '',
						page: 'wc-admin',
					} }
				/>
			);
			expect( queryByText( '[panel]' ) ).toBeInTheDocument();
			expect( queryByText( '[panelOpen=false]' ) ).toBeInTheDocument();
			expect(
				queryByText( '[panelSwitching=false]' )
			).toBeInTheDocument();
			// toggle open
			fireEvent.click( getByRole( 'tab', { name: 'Help' } ) );
			expect( queryByText( '[panelOpen=true]' ) ).toBeInTheDocument();
			expect(
				queryByText( '[panelSwitching=false]' )
			).toBeInTheDocument();
			// toggle close
			fireEvent.click( getByRole( 'tab', { name: 'Help' } ) );
			expect( queryByText( '[panelOpen=false]' ) ).toBeInTheDocument();
			expect(
				queryByText( '[panelSwitching=false]' )
			).toBeInTheDocument();
		} );

		it( 'should remove panel element after clearPanel is triggered', () => {
			const { queryByText, getByRole } = render(
				<ActivityPanel
					query={ {
						task: '',
						page: 'wc-admin',
					} }
				/>
			);
			// toggle open
			fireEvent.click( getByRole( 'tab', { name: 'Help' } ) );
			expect( queryByText( '[panelOpen=true]' ) ).toBeInTheDocument();
			expect(
				queryByText( '[panelSwitching=false]' )
			).toBeInTheDocument();
			// toggle close
			fireEvent.click( getByRole( 'tab', { name: 'Help' } ) );
			expect( queryByText( '[panelOpen=false]' ) ).toBeInTheDocument();
			expect( queryByText( '[hasTab=true]' ) ).toBeInTheDocument();
			expect(
				queryByText( '[panelSwitching=false]' )
			).toBeInTheDocument();
			act( () => {
				clearPanel();
			} );
			expect( queryByText( '[hasTab=false]' ) ).toBeInTheDocument();
		} );
	} );
} );
