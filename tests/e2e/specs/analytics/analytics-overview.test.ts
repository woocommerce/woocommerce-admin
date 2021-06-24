/**
 * Internal dependencies
 */
import { AnalyticsOverview } from '../../pages/AnalyticsOverview';
import { Login } from '../../pages/Login';

describe( 'Analytics pages', () => {
	const analyticsPage = new AnalyticsOverview( page );
	const login = new Login( page );

	beforeAll( async () => {
		await login.login();
		await analyticsPage.navigate();
		await analyticsPage.isDisplayed();
	} );
	afterAll( async () => {
		await login.logout();
	} );

	it( 'a user should see 3 sections by default - Performance, Charts, and Leaderboards', async () => {
		const sections = ( await analyticsPage.getSections() ).map(
			( section ) => section.title
		);
		expect( sections ).toContain( 'Performance' );
		expect( sections ).toContain( 'Charts' );
		expect( sections ).toContain( 'Leaderboards' );
	} );

	it( 'should allow a user to remove a section', async () => {
		await analyticsPage.removeSection( 'Performance' );
		const sections = ( await analyticsPage.getSections() ).map(
			( section ) => section.title
		);
		expect( sections ).not.toContain( 'Performance' );
	} );

	it( 'should allow a user to add a section back in', async () => {
		let sections = ( await analyticsPage.getSections() ).map(
			( section ) => section.title
		);
		expect( sections ).not.toContain( 'Performance' );
		await analyticsPage.addSection( 'Performance' );

		sections = ( await analyticsPage.getSections() ).map(
			( section ) => section.title
		);
		expect( sections ).toContain( 'Performance' );
	} );
} );
