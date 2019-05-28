/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Component } from '@wordpress/element';
import moment from 'moment';

/**
 * WooCommerce dependencies
 */
import { stringifyQuery } from '@woocommerce/navigation';

/**
 * Internal dependencies
 */
import { formatParams } from './utils';
import HistoricalDataLayout from './layout';

class HistoricalData extends Component {
	constructor() {
		super( ...arguments );

		this.dateFormat = __( 'MM/DD/YYYY', 'woocommerce-admin' );

		this.state = {
			period: {
				date: moment().format( this.dateFormat ),
				label: 'all',
			},
			// Whether there is an ongoing import (that might be paused) which matches the period and skipChecked settings
			ongoingImport: false,
			// Whether there is an ongoingImport but the user click on 'reimport data'
			reimportingData: false,
			skipChecked: true,
		};

		this.makeQuery = this.makeQuery.bind( this );
		this.onDeletePreviousData = this.onDeletePreviousData.bind( this );
		this.onReimportData = this.onReimportData.bind( this );
		this.onStartImport = this.onStartImport.bind( this );
		this.onStopImport = this.onStopImport.bind( this );
		this.onDateChange = this.onDateChange.bind( this );
		this.onPeriodChange = this.onPeriodChange.bind( this );
		this.onSkipChange = this.onSkipChange.bind( this );
	}

	makeQuery( path, errorMessage ) {
		const { addNotice } = this.props;
		apiFetch( { path, method: 'POST' } )
			.then( response => {
				if ( 'success' === response.status ) {
					addNotice( { status: 'success', message: response.message } );
				} else {
					addNotice( { status: 'error', message: errorMessage } );
				}
			} )
			.catch( error => {
				if ( error && error.message ) {
					addNotice( { status: 'error', message: error.message } );
				}
			} );
	}

	onDeletePreviousData() {
		const path = '/wc/v4/reports/import/delete';
		const errorMessage = __(
			'There was a problem deleting your previous data.',
			'woocommerce-admin'
		);
		this.makeQuery( path, errorMessage );
		this.setState( {
			ongoingImport: false,
		} );
	}

	onStartImport() {
		const { period, skipChecked } = this.state;
		this.setState( {
			ongoingImport: true,
			reimportingData: false,
		} );
		const path =
			'/wc/v4/reports/import' +
			stringifyQuery( formatParams( this.dateFormat, period, skipChecked ) );
		const errorMessage = __(
			'There was a problem rebuilding your report data.',
			'woocommerce-admin'
		);
		this.makeQuery( path, errorMessage );
	}

	onStopImport() {
		this.setState( {
			reimportingData: false,
		} );
		const path = '/wc/v4/reports/import/cancel';
		const errorMessage = __(
			'There was a problem stopping your current import.',
			'woocommerce-admin'
		);
		this.makeQuery( path, errorMessage );
	}

	onReimportData() {
		this.setState( {
			reimportingData: true,
		} );
	}

	onPeriodChange( val ) {
		this.setState( {
			period: {
				...this.state.period,
				label: val,
			},
			ongoingImport: false,
		} );
	}

	onDateChange( val ) {
		this.setState( {
			period: {
				date: val,
				label: 'custom',
			},
			ongoingImport: false,
		} );
	}

	onSkipChange( val ) {
		this.setState( {
			ongoingImport: false,
			skipChecked: val,
		} );
	}

	render() {
		const { ongoingImport, period, reimportingData, skipChecked } = this.state;

		return (
			<HistoricalDataLayout
				dateFormat={ this.dateFormat }
				ongoingImport={ ongoingImport }
				onPeriodChange={ this.onPeriodChange }
				onDateChange={ this.onDateChange }
				onSkipChange={ this.onSkipChange }
				onDeletePreviousData={ this.onDeletePreviousData }
				onReimportData={ this.onReimportData }
				onStartImport={ this.onStartImport }
				onStopImport={ this.onStopImport }
				period={ period }
				reimportingData={ reimportingData }
				skipChecked={ skipChecked }
			/>
		);
	}
}

export default HistoricalData;
