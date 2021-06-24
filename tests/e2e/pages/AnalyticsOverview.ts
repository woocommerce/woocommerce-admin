import { waitForElementByText } from '../utils/actions';
import { Analytics } from './Analytics';

export class AnalyticsOverview extends Analytics {
	async navigateTo() {
		await this.navigateToSection( 'overview' );
	}

	async getSections() {
		const list = await this.page.$$(
			'.woocommerce-dashboard-section .woocommerce-section-header'
		);
		return Promise.all(
			list.map( async ( item ) => ( {
				title: await item.evaluate( ( element ) => {
					const header = element.querySelector( 'h2' );
					return header.textContent;
				} ),
				element: item,
			} ) )
		);
	}

	async openSectionEllipsis( sectionTitle: string ) {
		const section = ( await this.getSections() ).find(
			( section ) => section.title === sectionTitle
		);
		if ( section ) {
			const ellipsisMenu = await section.element.$(
				'.woocommerce-ellipsis-menu button'
			);
			ellipsisMenu.click();
		}
	}

	async removeSection( sectionTitle: string ) {
		await this.openSectionEllipsis( sectionTitle );
		const item = await waitForElementByText( 'div', 'Remove section' );
		await item.click();
	}

	async addSection( sectionTitle: string ) {
		await this.page.waitForSelector( "button[title='Add more sections']" );
		await this.page.click( "button[title='Add more sections']" );
		const item = await waitForElementByText( 'span', sectionTitle );
		await item.click();
	}
}
