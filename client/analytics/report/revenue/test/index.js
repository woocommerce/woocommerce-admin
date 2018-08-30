/**
 * External dependencies
 *
 * @format
 */
import { shallow } from 'enzyme';
import moment from 'moment';
import fetch from 'node-fetch';
import { saveAs } from 'browser-filesaver';

/**
 * Internal dependencies
 */
import RevenueReport from '../';
import { TableCard } from '@woocommerce/components';
import mockData from '../__mocks__/mock-data';
import mockCSV from '../__mocks__/mock-csv';

jest.mock( 'browser-filesaver', () => ( {
	saveAs: jest.fn(),
} ) );

window.fetch = fetch;

describe( 'RevenueReport', () => {
	test( 'should save CSV when clicking on download', () => {
		global.Blob = ( content, options ) => ( { content, options } );

		const revenueReport = shallow(
			<RevenueReport params={ { report: 'revenue' } } path="/analytics/revenue" query={ {} } />
		);
		revenueReport.setState( { stats: mockData } );
		const tableCard = revenueReport.find( TableCard );
		tableCard.props().onClickDownload();

		const blob = new Blob( [ mockCSV ], { type: 'text/csv;charset=utf-8' } );

		expect( saveAs ).toHaveBeenCalledWith(
			blob,
			'revenue-' + moment().format( 'YYYY-MM-DD' ) + '.csv'
		);
	} );
} );
