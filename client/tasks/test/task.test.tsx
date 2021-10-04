/**
 * External dependencies
 */
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WooOnboardingTask } from '@woocommerce/onboarding';
import { SlotFillProvider, Fill, Slot } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { Task } from '../task';

describe( 'Task', () => {
	// beforeEach( () => {
	// 	jest.clearAllMocks();
	// } );

	it.only( 'should render the registered fill for the slot id', () => {
		const { queryByText, debug, rerender } = render(
			<SlotFillProvider>
				<div>
					<Slot name="woocommerce_onboarding_task_test" />
					<Task query={ { task: 'test' } } />
				</div>
				<Fill name="woocommerce_onboarding_task_test">
					<div>Test Onboarding Task</div>
				</Fill>
				<WooOnboardingTask id="test">
					{ ( { onComplete } ) => {
						return <button onClick={ onComplete }>Complete</button>;
					} }
				</WooOnboardingTask>
			</SlotFillProvider>
		);
		debug();
		expect( queryByText( 'Test Onboarding Task' ) ).toBeInTheDocument();
	} );
} );
