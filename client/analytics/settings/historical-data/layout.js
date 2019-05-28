/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
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
			customersProgress,
			customersTotal,
			dateFormat,
			importDate,
			inProgress,
			ongoingImport,
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
					customersProgress={ customersProgress }
					onDeletePreviousData={ onDeletePreviousData }
					ongoingImport={ ongoingImport }
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
	const { getImportStatus, getImportTotals } = select( 'wc-api' );
	const { dateFormat, inProgress, ongoingImport, period, skipChecked } = props;

	const { customers, orders } = getImportTotals( formatParams( dateFormat, period, skipChecked ) );

	if ( ! ongoingImport ) {
		return {
			customersTotal: customers,
			ordersTotal: orders,
		};
	}

	const requirement = inProgress
		? {
				...DEFAULT_REQUIREMENT,
				timeout: 3 * SECOND,
			}
		: DEFAULT_REQUIREMENT;
	const {
		customers_count: customersProgress,
		customers_total: customersTotal,
		imported_from: importDate,
		is_importing: isImporting,
		orders_count: ordersProgress,
		orders_total: ordersTotal,
	} = getImportStatus( formatParams( dateFormat, period, skipChecked ), requirement );

	const hasImportFinished = Boolean(
		inProgress &&
			isImporting === false &&
			( ( customersProgress === customersTotal && customersTotal > 0 ) ||
				( ordersProgress === ordersTotal && ordersTotal > 0 ) )
	);
	if ( hasImportFinished ) {
		props.onImportFinish();
	}

	return {
		customersProgress,
		customersTotal: customersTotal || customers,
		importDate,
		inProgress: inProgress || isImporting,
		ordersProgress,
		ordersTotal: ordersTotal || orders,
	};
} )( HistoricalDataLayout );
