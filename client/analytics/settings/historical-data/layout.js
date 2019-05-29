/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { isNil } from 'lodash';
import { SECOND } from '@fresh-data/framework';

/**
 * Internal dependencies
 */
import { DEFAULT_REQUIREMENT } from 'wc-api/constants';
import { formatParams, getStatus } from './utils';
import HistoricalDataActions from './actions';
import HistoricalDataPeriodSelector from './period-selector';
import HistoricalDataProgress from './progress';
import HistoricalDataStatus from './status';
import HistoricalDataSkipCheckbox from './skip-checkbox';
import withSelect from 'wc-api/with-select';
import './style.scss';

class HistoricalDataLayout extends Component {
	render() {
		const {
			activeImport,
			customersProgress,
			customersTotal,
			dateFormat,
			importDate,
			inProgress,
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
			reimportingData,
			skipChecked,
		} = this.props;
		const status = getStatus( {
			customersProgress,
			customersTotal,
			inProgress,
			ordersProgress,
			ordersTotal,
			reimportingData,
		} );

		return (
			<Fragment>
				<div className="woocommerce-setting">
					<div className="woocommerce-setting__label" id="import-historical-data-label">
						{ __( 'Import Historical Data:', 'woocommerce-admin' ) }
					</div>
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
									label={ __( 'Registered Customers', 'woocommerce-admin' ) }
									progress={ customersProgress }
									total={ customersTotal }
								/>
								<HistoricalDataProgress
									label={ __( 'Orders', 'woocommerce-admin' ) }
									progress={ ordersProgress }
									total={ ordersTotal }
								/>
							</Fragment>
						) }
						<HistoricalDataStatus importDate={ importDate } status={ status } />
					</div>
				</div>
				<HistoricalDataActions
					activeImport={ activeImport }
					customersProgress={ customersProgress }
					onDeletePreviousData={ onDeletePreviousData }
					onReimportData={ onReimportData }
					onStartImport={ onStartImport }
					onStopImport={ onStopImport }
					ordersProgress={ ordersProgress }
					status={ status }
				/>
			</Fragment>
		);
	}
}

export default withSelect( ( select, props ) => {
	const { getImportStatus, isGetImportStatusRequesting, getImportTotals } = select( 'wc-api' );
	const { activeImport, dateFormat, inProgress, lastImportTimestamp, period, skipChecked } = props;

	const params = formatParams( dateFormat, period, skipChecked );
	const { customers, orders } = getImportTotals( params, lastImportTimestamp );
	const requirement = inProgress
		? {
				freshness: 3 * SECOND,
				timeout: 3 * SECOND,
			}
		: DEFAULT_REQUIREMENT;
	// Use the timestamp
	const {
		customers_count: customersProgress,
		customers_total: customersTotal,
		imported_from: importDate,
		is_importing: isImporting,
		orders_count: ordersProgress,
		orders_total: ordersTotal,
	} = getImportStatus( lastImportTimestamp, requirement );
	const isStatusLoading = isGetImportStatusRequesting( lastImportTimestamp );

	if (
		( isNil( activeImport ) && ! isImporting ) ||
		( ! isNil( activeImport ) && ! activeImport )
	) {
		return {
			customersTotal: customers,
			ordersTotal: orders,
		};
	}

	const hasImportFinished = Boolean(
		! isStatusLoading &&
			inProgress &&
			isImporting === false &&
			( ( customersProgress === customersTotal && customersTotal > 0 ) ||
				( ordersProgress === ordersTotal && ordersTotal > 0 ) )
	);
	if ( hasImportFinished ) {
		props.onImportFinish();
	}

	return {
		activeImport: isNil( activeImport ) ? isImporting : activeImport,
		customersProgress,
		customersTotal: isNil( customersTotal ) ? customers : customersTotal,
		importDate,
		inProgress: isNil( inProgress ) ? isImporting : inProgress,
		ordersProgress,
		ordersTotal: isNil( ordersTotal ) ? orders : ordersTotal,
	};
} )( HistoricalDataLayout );
