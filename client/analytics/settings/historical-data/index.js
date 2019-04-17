/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import moment from 'moment';

/**
 * Internal dependencies
 */
import HistoricalDataPeriodSelector from './period-selector';
import HistoricalDataProgress from './progress';
import HistoricalDataStatus from './status';
import HistoricalDataSkipCheckbox from './skip-checkbox';
import './style.scss';

class HistoricalData extends Component {
	constructor() {
		super( ...arguments );

		this.dateFormat = __( 'MM/DD/YYYY', 'woocommerce-admin' );

		this.state = {
			customersProgress: 0,
			customersTotal: 0,
			importDate: 'July 1',
			isRequesting: false,
			ordersProgress: 0,
			ordersTotal: 0,
			period: {
				date: moment().format( this.dateFormat ),
				label: 'all',
			},
			skipChecked: true,
			step: 'ready',
		};

		this.changeStep = this.changeStep.bind( this );
		this.onDateChange = this.onDateChange.bind( this );
		this.onPeriodChange = this.onPeriodChange.bind( this );
		this.onSkipChange = this.onSkipChange.bind( this );
	}

	changeStep( newStep ) {
		return () =>
			this.setState( {
				step: newStep,
			} );
	}

	onPeriodChange( val ) {
		this.setState( {
			period: {
				...this.state.period,
				label: val,
			},
		} );
	}

	onDateChange( val ) {
		this.setState( {
			period: {
				date: val,
				label: 'custom',
			},
		} );
	}

	onSkipChange( val ) {
		this.setState( {
			skipChecked: val,
		} );
	}

	isInProgress() {
		const { step } = this.state;
		return step === 'customers' || step === 'orders' || step === 'finalizing';
	}

	render() {
		const {
			customersProgress,
			customersTotal,
			importDate,
			ordersProgress,
			ordersTotal,
			period,
			skipChecked,
			step,
		} = this.state;
		const isInProgress = this.isInProgress();

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
						{ step !== 'finished' && (
							<Fragment>
								<HistoricalDataPeriodSelector
									dateFormat={ this.dateFormat }
									disabled={ isInProgress }
									onPeriodChange={ this.onPeriodChange }
									onDateChange={ this.onDateChange }
									value={ period }
								/>
								<HistoricalDataSkipCheckbox
									disabled={ isInProgress }
									checked={ skipChecked }
									onChange={ this.onSkipChange }
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
						<HistoricalDataStatus importDate={ importDate } status={ step } />
					</div>
				</div>
				<div className="woocommerce-settings__actions woocommerce-settings-historical-data__actions">
					{ step === 'ready' && (
						<Button isPrimary onClick={ this.changeStep( 'customers' ) }>
							{ __( 'Start', 'woocommerce-admin' ) }
						</Button>
					) }
					{ isInProgress && (
						<Fragment>
							<Button
								className="woocommerce-settings-historical-data__action-button"
								isPrimary
								onClick={ this.changeStep( 'stopped' ) }
							>
								{ __( 'Stop Import', 'woocommerce-admin' ) }
							</Button>
							<div className="woocommerce-setting__help woocommerce-settings-historical-data__action-help">
								{ __(
									'Imported data will not be lost if the import is stopped.',
									'woocommerce-admin'
								) }
								<br />
								{ __(
									'Navigating away from this page will not affect the import.',
									'woocommerce-admin'
								) }
							</div>
						</Fragment>
					) }
					{ step === 'stopped' && (
						<Fragment>
							<Button isPrimary onClick={ this.changeStep( 'customers' ) }>
								{ __( 'Start', 'woocommerce-admin' ) }
							</Button>
							<Button isDefault onClick={ this.changeStep( 'finished' ) }>
								{ __( 'Delete Previously Imported Data', 'woocommerce-admin' ) }
							</Button>
						</Fragment>
					) }
					{ step === 'finished' && (
						<Button isDefault onClick={ this.changeStep( 'ready' ) }>
							{ __( 'Import Additional Historical Data', 'woocommerce-admin' ) }
						</Button>
					) }
				</div>
			</Fragment>
		);
	}
}

export default HistoricalData;
