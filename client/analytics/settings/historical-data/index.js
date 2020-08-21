/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { IMPORT_STORE_NAME, NOTES_STORE_NAME } from '@woocommerce/data';
import { withDispatch, withSelect } from '@wordpress/data';
import { withSpokenMessages } from '@wordpress/components';
import { recordEvent } from '@woocommerce/tracks';
import { SECOND } from '@fresh-data/framework';

/**
 * Internal dependencies
 */
import { formatParams } from './utils';
import HistoricalDataLayout from './layout';
import { QUERY_DEFAULTS } from '../../../wc-api/constants';
import { DEFAULT_REQUIREMENT } from '../constants';

class HistoricalData extends Component {
	constructor() {
		super( ...arguments );

		this.dateFormat = __( 'MM/DD/YYYY', 'woocommerce-admin' );
		this.intervalId = -1;
		this.fetching = false;
		this.lastImportStopTimestamp = 0;

		this.makeQuery = this.makeQuery.bind( this );
		this.onImportFinished = this.onImportFinished.bind( this );
		this.onImportStarted = this.onImportStarted.bind( this );
		this.onDeletePreviousData = this.onDeletePreviousData.bind( this );
		this.onReimportData = this.onReimportData.bind( this );
		this.onStartImport = this.onStartImport.bind( this );
		this.onStopImport = this.onStopImport.bind( this );
		this.startStatusCheckInterval = this.startStatusCheckInterval.bind(
			this
		);
		this.cancelStatusCheckInterval = this.cancelStatusCheckInterval.bind(
			this
		);
	}

	startStatusCheckInterval() {
		const query = this.getImportStatusRequirement();
		const { timeout } = query;
		if ( this.intervalId < 0 ) {
			this.intervalId = setInterval( () => {
				this.clearCache( 'getImportStatus' );
			}, timeout );
		}
	}

	cancelStatusCheckInterval() {
		clearInterval( this.intervalId );
		this.intervalId = -1;
	}

	clearCache( resolver, query ) {
		const { invalidateResolution, lastImportStartTimestamp } = this.props;
		const preparedQuery =
			resolver === 'getImportStatus' ? lastImportStartTimestamp : query;
		invalidateResolution( resolver, [ preparedQuery ] );
	}

	getImportStatusRequirement() {
		const requirement = this.isImportationInProgress()
			? {
					freshness: 3 * SECOND,
					timeout: 3 * SECOND,
			  }
			: DEFAULT_REQUIREMENT;
		return requirement;
	}

	makeQuery( path, errorMessage ) {
		const { createNotice, updateImportStarted } = this.props;
		this.fetching = true;
		apiFetch( { path, method: 'POST' } )
			.then( ( response ) => {
				if ( response.status === 'success' ) {
					this.fetching = false;
					createNotice( 'success', response.message );
				} else {
					createNotice( 'error', errorMessage );
					updateImportStarted( false );
					this.lastImportStopTimestamp = Date.now();
				}
			} )
			.catch( ( error ) => {
				if ( error && error.message ) {
					createNotice( 'error', error.message );
					updateImportStarted( false );
					this.lastImportStopTimestamp = Date.now();
				}
			} );
	}

	onImportFinished() {
		if ( ! this.fetching ) {
			const { debouncedSpeak } = this.props;
			debouncedSpeak( 'Import complete' );
			this.cancelStatusCheckInterval();
			this.lastImportStopTimestamp = Date.now();
		}
	}

	onImportStarted() {
		const { notes, updateImportStarted, updateNote } = this.props;

		const historicalDataNote = notes.find(
			( note ) => note.name === 'wc-admin-historical-data'
		);
		if ( historicalDataNote ) {
			updateNote( historicalDataNote.id, { status: 'actioned' } );
		}

		updateImportStarted( true );
	}

	onDeletePreviousData() {
		const path = '/wc-analytics/reports/import/delete';
		const errorMessage = __(
			'There was a problem deleting your previous data.',
			'woocommerce-admin'
		);
		this.makeQuery( path, errorMessage );

		recordEvent( 'analytics_import_delete_previous' );
	}

	onReimportData() {
		const { selectedPeriod, skipChecked } = this.props;
		const params = formatParams(
			this.dateFormat,
			selectedPeriod,
			skipChecked
		);

		// We need to clear the cache of the selectors `getImportTotals` and `getImportStatus`
		this.clearCache( 'getImportTotals', params );
		this.clearCache( 'getImportStatus' );
	}

	onStartImport() {
		const { selectedPeriod, skipChecked } = this.props;
		const path = addQueryArgs(
			'/wc-analytics/reports/import',
			formatParams( this.dateFormat, selectedPeriod, skipChecked )
		);
		const errorMessage = __(
			'There was a problem rebuilding your report data.',
			'woocommerce-admin'
		);
		const startingImport = true;
		this.makeQuery( path, errorMessage, startingImport );
		this.onImportStarted();
	}

	onStopImport() {
		this.cancelStatusCheckInterval();
		this.lastImportStopTimestamp = Date.now();
		const path = '/wc-analytics/reports/import/cancel';
		const errorMessage = __(
			'There was a problem stopping your current import.',
			'woocommerce-admin'
		);
		this.makeQuery( path, errorMessage );
	}

	isImportationInProgress() {
		const { lastImportStartTimestamp } = this.props;
		return (
			( typeof lastImportStartTimestamp !== 'undefined' &&
				typeof this.lastImportStopTimestamp === 'undefined' ) ||
			lastImportStartTimestamp > this.lastImportStopTimestamp
		);
	}

	render() {
		const {
			activeImport,
			createNotice,
			lastImportStartTimestamp,
			selectedPeriod,
			skipChecked,
		} = this.props;

		return (
			<HistoricalDataLayout
				activeImport={ activeImport }
				createNotice={ createNotice }
				dateFormat={ this.dateFormat }
				inProgress={ this.isImportationInProgress() }
				onImportFinished={ this.onImportFinished }
				onImportStarted={ this.onImportStarted }
				lastImportStartTimestamp={ lastImportStartTimestamp }
				onDeletePreviousData={ this.onDeletePreviousData }
				onReimportData={ this.onReimportData }
				onStartImport={ this.onStartImport }
				onStopImport={ this.onStopImport }
				period={ selectedPeriod }
				skipChecked={ skipChecked }
				startStatusCheckInterval={ this.startStatusCheckInterval }
				cancelStatusCheckInterval={ this.cancelStatusCheckInterval }
			/>
		);
	}
}

export default compose( [
	withSelect( ( select ) => {
		const { getNotes } = select( NOTES_STORE_NAME );
		const { getImportStarted, getFormSettings } = select(
			IMPORT_STORE_NAME
		);

		const notesQuery = {
			page: 1,
			per_page: QUERY_DEFAULTS.pageSize,
			type: 'update',
			status: 'unactioned',
		};
		const notes = getNotes( notesQuery );
		const { activeImport, lastImportStartTimestamp } = getImportStarted();
		const {
			period: selectedPeriod,
			skipPrevious: skipChecked,
		} = getFormSettings();

		return {
			activeImport,
			lastImportStartTimestamp,
			notes,
			selectedPeriod,
			skipChecked,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updateNote } = dispatch( NOTES_STORE_NAME );
		const { invalidateResolution, updateImportStarted } = dispatch(
			IMPORT_STORE_NAME
		);

		return {
			invalidateResolution,
			updateImportStarted,
			updateNote,
		};
	} ),
	withSpokenMessages,
] )( HistoricalData );
