/**
 * External dependencies
 */
import { render } from '@testing-library/react';
import { Layout } from '../layout';

// Rendering <StatsOverview /> breaks tests.
jest.mock( 'homepage/stats-overview', () => jest.fn().mockReturnValue( null ) );

describe( 'Homepage Layout', () => {
	it( 'should show TaskList placeholder when loading', () => {
		const { container } = render(
			<Layout
				requestingTaskList
				taskListHidden={ false }
				query={ {} }
			/>
		);

		const placeholder = container.querySelector( '.woocommerce-task-card.is-loading' );

		expect( placeholder ).not.toBeNull();
	} );

	// Commented out for now - dynamic import() isn't working in test.
	// it( 'should show TaskList inline', async () => {
	// 	render(
	// 		<Layout
	// 			requestingTaskList={ false }
	// 			taskListHidden={ false }
	// 			query={ {} }
	// 		/>
	// 	);

	// 	const taskListHeading = await screen.findByText( 'Set up your store and start selling' )

	// 	expect( taskListHeading ).toBeInTheDocument();
	// } );
} );
