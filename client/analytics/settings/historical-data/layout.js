/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { isNil } from 'lodash';
import { SECOND } from '@fresh-data/framework';
import { SectionHeader } from '@woocommerce/components';
import { IMPORT_STORE_NAME } from '@woocommerce/data';

/**
 * Internal dependencies
 */
import { DEFAULT_REQUIREMENT } from '../../../wc-api/constants';
import { formatParams, getStatus } from './utils';
import HistoricalDataActions from './actions';
import HistoricalDataPeriodSelector from './period-selector';
import HistoricalDataProgress from './progress';
import HistoricalDataStatus from './status';
import HistoricalDataSkipCheckbox from './skip-checkbox';
import withSelect from '../../../wc-api/with-select';
import './style.scss';

class HistoricalDataLayout extends Component {
	render() {
		const {
			createNotice,
			customersProgress,
			customersTotal,
			dateFormat,
			importDate,
			inProgress,
			isError,
			onPeriodChange,
			onDateChange,
			onSkipChange,
			onDeletePreviousData,
			onReimportData,
			onStartImport,
			onStopImport,
			ordersProgress,
			ordersTotal,
			period,
			skipChecked,
		} = this.props;
		const status = getStatus( {
			customersProgress,
			customersTotal,
			inProgress,
			isError,
			ordersProgress,
			ordersTotal,
		} );

		return (
			<Fragment>
				<SectionHeader
					title={ __(
						'Import Historical Data',
						'woocommerce-admin'
					) }
				/>
				<div className="woocommerce-settings__wrapper">
					<div className="woocommerce-setting">
						<div className="woocommerce-setting__input">
							<span className="woocommerce-setting__help">
								{ __(
									'This tool populates historical analytics data by processing customers ' +
										'and orders created prior to activating WooCommerce Admin.',
									'woocommerce-admin'
								) }
							</span>
							{ status !== 'finished' && (
								<Fragment>
									<HistoricalDataPeriodSelector
										dateFormat={ dateFormat }
										disabled={ inProgress }
										onPeriodChange={ onPeriodChange }
										onDateChange={ onDateChange }
										value={ period }
									/>
									<HistoricalDataSkipCheckbox
										disabled={ inProgress }
										checked={ skipChecked }
										onChange={ onSkipChange }
									/>
									<HistoricalDataProgress
										label={ __(
											'Registered Customers',
											'woocommerce-admin'
										) }
										progress={ customersProgress }
										total={ customersTotal }
									/>
									<HistoricalDataProgress
										label={ __(
											'Orders and Refunds',
											'woocommerce-admin'
										) }
										progress={ ordersProgress }
										total={ ordersTotal }
									/>
								</Fragment>
							) }
							<HistoricalDataStatus
								importDate={ importDate }
								status={ status }
							/>
						</div>
					</div>
				</div>
				<HistoricalDataActions
					createNotice={ createNotice }
					importDate={ importDate }
					onDeletePreviousData={ onDeletePreviousData }
					onReimportData={ onReimportData }
					onStartImport={ onStartImport }
					onStopImport={ onStopImport }
					status={ status }
				/>
			</Fragment>
		);
	}
}

export default withSelect( ( select, props ) => {
	const {
		getImportError,
		getImportStatus,
		getImportTotals,
		isResolving,
	} = select( IMPORT_STORE_NAME );
	const {
		activeImport,
		dateFormat,
		lastImportStartTimestamp,
		lastImportStopTimestamp,
		onImportStarted,
		onImportFinished,
		period,
		skipChecked,
	} = props;

	const endpointImportStatus = 'import-status';
	const endpointImportTotals = 'import-totals';

	const inProgress =
		( typeof lastImportStartTimestamp !== 'undefined' &&
			typeof lastImportStopTimestamp === 'undefined' ) ||
		lastImportStartTimestamp > lastImportStopTimestamp;

	const params = formatParams( dateFormat, period, skipChecked );
	const { customers, orders } = getImportTotals(
		endpointImportTotals,
		params
	);
	const requirement = inProgress
		? {
				freshness: 3 * SECOND,
				timeout: 3 * SECOND,
		  }
		: DEFAULT_REQUIREMENT;

	const {
		customers: customersStatus,
		imported_from: importDate,
		is_importing: isImporting,
		orders: ordersStatus,
	} = getImportStatus( endpointImportStatus, requirement );
	const { imported: customersProgress, total: customersTotal } =
		customersStatus || {};
	const { imported: ordersProgress, total: ordersTotal } = ordersStatus || {};
	const isStatusLoading = isResolving( 'getImportStatus', [
		endpointImportStatus,
		requirement,
	] );

	const isError = ! isStatusLoading
		? Boolean(
				getImportError( endpointImportStatus, requirement ) ||
					getImportError( endpointImportTotals, params )
		  )
		: false;

	const hasImportStarted = Boolean(
		! lastImportStartTimestamp &&
			! isStatusLoading &&
			! inProgress &&
			isImporting === true
	);
	if ( hasImportStarted ) {
		onImportStarted();
	}
	const hasImportFinished = Boolean(
		! isStatusLoading &&
			inProgress &&
			isImporting === false &&
			( ( customersProgress === customersTotal && customersTotal > 0 ) ||
				( ordersProgress === ordersTotal && ordersTotal > 0 ) )
	);
	if ( hasImportFinished ) {
		onImportFinished();
	}

	if ( ! activeImport ) {
		return {
			customersTotal: customers,
			importDate,
			isError,
			ordersTotal: orders,
		};
	}

	return {
		customersProgress,
		customersTotal: isNil( customersTotal ) ? customers : customersTotal,
		importDate,
		inProgress,
		isError,
		ordersProgress,
		ordersTotal: isNil( ordersTotal ) ? orders : ordersTotal,
	};
} )( HistoricalDataLayout );
