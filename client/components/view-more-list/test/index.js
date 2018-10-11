/** @format */
/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import ViewMoreList from '../';

describe( 'ViewMoreList', () => {
	test( 'should not render the view more button if there are less items than `numberOfVisibleItems`', () => {
		const viewMoreList = shallow(
			<ViewMoreList numberOfVisibleItems={ 2 } items={ [ <p>Lorem</p>, <p>Ipsum</p> ] } />
		);

		expect( viewMoreList.find( '.woocommerce-view-more-list__tag' ).length ).toBe( 0 );
	} );

	test( 'should render the view more button if there are more items than `numberOfVisibleItems`', () => {
		const viewMoreList = shallow(
			<ViewMoreList
				numberOfVisibleItems={ 2 }
				items={ [ <p>Lorem</p>, <p>Ipsum</p>, <p>Dolor</p>, <p>Sit</p> ] }
			/>
		);

		expect( viewMoreList.find( '.woocommerce-view-more-list__tag' ).length ).toBe( 1 );
	} );
} );
