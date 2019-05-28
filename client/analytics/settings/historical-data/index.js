/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Component } from '@wordpress/element';
import moment from 'moment';
import { withSpokenMessages } from '@wordpress/components';

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
			// Whether there is an active import (which might have already finished)
			// which matches the period and skipChecked settings
			activeImport: false,
			// Whether the active import is currently running
			inProgress: false,
			period: {
				date: moment().format( this.dateFormat ),
				label: 'all',
			},
			// Whether there is an active import but the user click on 'reimport data'
			reimportingData: false,
			skipChecked: true,
		};

		this.makeQuery = this.makeQuery.bind( this );
		this.onImportFinish = this.onImportFinish.bind( this );
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
			activeImport: false,
			inProgress: false,
		} );
	}

	onImportFinish() {
		const { debouncedSpeak } = this.props;
		debouncedSpeak( 'Import complete' );
		this.setState( {
			inProgress: false,
		} );
	}

	onReimportData() {
		this.setState( {
			inProgress: false,
			reimportingData: true,
		} );
	}

	onStartImport() {
		const { period, skipChecked } = this.state;
		this.setState( {
			activeImport: true,
			inProgress: true,
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
			inProgress: false,
		} );
		const path = '/wc/v4/reports/import/cancel';
		const errorMessage = __(
			'There was a problem stopping your current import.',
			'woocommerce-admin'
		);
		this.makeQuery( path, errorMessage );
	}

	onPeriodChange( val ) {
		this.setState( {
			activeImport: false,
			inProgress: false,
			period: {
				...this.state.period,
				label: val,
			},
		} );
	}

	onDateChange( val ) {
		this.setState( {
			activeImport: false,
			inProgress: false,
			period: {
				date: val,
				label: 'custom',
			},
		} );
	}

	onSkipChange( val ) {
		this.setState( {
			activeImport: false,
			inProgress: false,
			skipChecked: val,
		} );
	}

	render() {
		const { activeImport, inProgress, period, reimportingData, skipChecked } = this.state;

		return (
			<HistoricalDataLayout
				activeImport={ activeImport }
				dateFormat={ this.dateFormat }
				onImportFinish={ this.onImportFinish }
				inProgress={ inProgress }
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

export default withSpokenMessages( HistoricalData );
