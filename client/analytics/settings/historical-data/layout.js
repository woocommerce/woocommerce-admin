/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { isNil } from 'lodash';
import { SectionHeader } from '@woocommerce/components';
import { IMPORT_STORE_NAME } from '@woocommerce/data';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { formatParams, getStatus } from './utils';
import HistoricalDataActions from './actions';
import HistoricalDataPeriodSelector from './period-selector';
import HistoricalDataProgress from './progress';
import HistoricalDataStatus from './status';
import HistoricalDataSkipCheckbox from './skip-checkbox';
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
			onDeletePreviousData,
			onReimportData,
			onStartImport,
			onStopImport,
			ordersProgress,
			ordersTotal,
			period,
			skipChecked,
			status,
		} = this.props;

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
										value={ period }
									/>
									<HistoricalDataSkipCheckbox
										disabled={ inProgress }
										checked={ skipChecked }
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
		inProgress,
		onImportStarted,
		onImportFinished,
		period,
		startStatusCheckInterval,
		skipChecked,
	} = props;

	const params = formatParams( dateFormat, period, skipChecked );
	const { customers, orders, lastImportStartTimestamp } = getImportTotals(
		params
	);

	const {
		customers: customersStatus,
		imported_from: importDate,
		is_importing: isImporting,
		orders: ordersStatus,
	} = getImportStatus( lastImportStartTimestamp );
	const { imported: customersProgress, total: customersTotal } =
		customersStatus || {};
	const { imported: ordersProgress, total: ordersTotal } = ordersStatus || {};
	const isStatusLoading = isResolving( 'getImportStatus', [
		lastImportStartTimestamp,
	] );

	const isError = ! isStatusLoading
		? Boolean(
				getImportError( lastImportStartTimestamp ) ||
					getImportError( lastImportStartTimestamp )
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

	let response = {
		customersTotal: customers,
		isError,
		ordersTotal: orders,
	};

	if ( activeImport ) {
		response = {
			customersProgress,
			customersTotal: isNil( customersTotal )
				? customers
				: customersTotal,
			inProgress,
			isError,
			ordersProgress,
			ordersTotal: isNil( ordersTotal ) ? orders : ordersTotal,
		};
	}

	const status = getStatus( response );

	if ( status === 'initializing' ) {
		startStatusCheckInterval();
	}

	if ( hasImportFinished ) {
		onImportFinished();
	}

	return { ...response, importDate, status };
} )( HistoricalDataLayout );
