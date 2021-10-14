/**
 * External dependencies
 */
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WooOnboardingTaskListItem } from '@woocommerce/onboarding';
import { SlotFillProvider } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { useSlot } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { TaskListItem } from '../task-list-item';

jest.mock( '@wordpress/data' );

const mockDispatch = {
	createNotice: jest.fn(),
	dismissTask: jest.fn(),
	snoozeTask: jest.fn(),
	undoDismissTask: jest.fn(),
	undoSnoozeTask: jest.fn(),
};
( useDispatch as jest.Mock ).mockReturnValue( mockDispatch );

jest.mock( '@woocommerce/tracks', () => ( {
	recordEvent: jest.fn(),
} ) );
jest.mock( '@woocommerce/data', () => {
	const originalModule = jest.requireActual( '@woocommerce/data' );
	return {
		...originalModule,
		useUserPreferences: jest.fn(),
	};
} );
jest.mock( '@woocommerce/experimental', () => {
	const originalModule = jest.requireActual( '@woocommerce/experimental' );
	return {
		...originalModule,
		useSlot: jest.fn(),
		TaskItem: jest
			.fn()
			.mockImplementation( ( { title, onSnooze, onDismiss } ) => (
				<div>
					<span>{ title }</span>
					{ onSnooze && (
						<button onClick={ onSnooze } name="Snooze">
							Snooze
						</button>
					) }
					{ onDismiss && (
						<button onClick={ onDismiss } name="Dismiss">
							Dismiss
						</button>
					) }
				</div>
			) ),
	};
} );

const task = {
	id: 'optional',
	title: 'This task is optional',
	isComplete: false,
	visible: true,
	time: '1 minute',
	isDismissable: true,
	isSnoozeable: true,
	type: 'setup',
	action: 'CTA (optional)',
	content: 'This is the optional task content',
	additionalInfo: 'This is the task additional info',
	expandable: true,
	expanded: true,
};

describe( 'TaskListItem', () => {
	beforeEach( () => {
		jest.clearAllMocks();
	} );

	it( 'should render the default task list item', () => {
		const { queryByText } = render(
			<TaskListItem
				task={ { ...task } }
				isExpandable={ false }
				isExpanded={ false }
				setExpandedTask={ () => {} }
			/>
		);
		expect( queryByText( task.title ) ).toBeInTheDocument();
	} );

	it( 'should call dismissTask and trigger a notice when dismissing a task', () => {
		const { getByRole } = render(
			<TaskListItem
				task={ { ...task } }
				isExpandable={ false }
				isExpanded={ false }
				setExpandedTask={ () => {} }
			/>
		);
		act( () => {
			userEvent.click( getByRole( 'button', { name: 'Dismiss' } ) );
		} );
		expect( mockDispatch.dismissTask ).toHaveBeenCalledWith( task.id );
		expect( mockDispatch.createNotice ).toHaveBeenCalled();
		expect( mockDispatch.createNotice.mock.calls[ 0 ][ 0 ] ).toEqual(
			'success'
		);
		expect( mockDispatch.createNotice.mock.calls[ 0 ][ 1 ] ).toEqual(
			'Task dismissed'
		);
	} );

	it( 'should not call dismissTask when isDismissable is set to false', () => {
		const { queryByRole } = render(
			<TaskListItem
				task={ { ...task, isDismissable: false } }
				isExpandable={ false }
				isExpanded={ false }
				setExpandedTask={ () => {} }
			/>
		);
		expect(
			queryByRole( 'button', { name: 'Dismiss' } )
		).not.toBeInTheDocument();
	} );

	it( 'should call snoozeTask and trigger a notice when snoozing a task', () => {
		const { getByRole } = render(
			<TaskListItem
				task={ { ...task } }
				isExpandable={ false }
				isExpanded={ false }
				setExpandedTask={ () => {} }
			/>
		);
		act( () => {
			userEvent.click( getByRole( 'button', { name: 'Snooze' } ) );
		} );
		expect( mockDispatch.snoozeTask ).toHaveBeenCalledWith( task.id );
		expect( mockDispatch.createNotice ).toHaveBeenCalled();
		expect( mockDispatch.createNotice.mock.calls[ 0 ][ 0 ] ).toEqual(
			'success'
		);
		expect( mockDispatch.createNotice.mock.calls[ 0 ][ 1 ] ).toEqual(
			'Task postponed until tomorrow'
		);
	} );

	it( 'should not call snoozeTask when isSnoozeable is set to false', () => {
		const { queryByRole } = render(
			<TaskListItem
				task={ { ...task, isSnoozeable: false } }
				isExpandable={ false }
				isExpanded={ false }
				setExpandedTask={ () => {} }
			/>
		);
		expect(
			queryByRole( 'button', { name: 'Snooze' } )
		).not.toBeInTheDocument();
	} );

	it( 'should not render task if slotfill is registered for id', () => {
		( useSlot as jest.Mock ).mockReturnValue( { fills: [ 'test' ] } );
		const { queryByText } = render(
			<SlotFillProvider>
				<div>
					<TaskListItem
						task={ { ...task, id: 'test' } }
						isExpandable={ false }
						isExpanded={ false }
						setExpandedTask={ () => {} }
					/>
				</div>
			</SlotFillProvider>
		);
		expect( queryByText( task.title ) ).not.toBeInTheDocument();
	} );
} );
