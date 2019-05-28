/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

function HistoricalDataActions( {
	activeImport,
	customersProgress,
	onDeletePreviousData,
	onReimportData,
	onStartImport,
	onStopImport,
	ordersProgress,
	status,
} ) {
	const getActions = () => {
		const importDisabled = status !== 'ready';

		// An import is currently in progress
		if ( [ 'customers', 'orders', 'finalizing' ].includes( status ) ) {
			return (
				<Fragment>
					<Button
						className="woocommerce-settings-historical-data__action-button"
						isPrimary
						onClick={ onStopImport }
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
			);
		}

		if ( [ 'ready', 'nothing' ].includes( status ) ) {
			// An import was stopped before finishing
			if ( activeImport && ( customersProgress > 0 || ordersProgress > 0 ) ) {
				return (
					<Fragment>
						<Button isPrimary onClick={ onStartImport } disabled={ importDisabled }>
							{ __( 'Start', 'woocommerce-admin' ) }
						</Button>
						<Button isDefault onClick={ onDeletePreviousData }>
							{ __( 'Delete Previously Imported Data', 'woocommerce-admin' ) }
						</Button>
					</Fragment>
				);
			}

			// Has no imported data or user clicked on 'reimport data'
			return (
				<Fragment>
					<Button isPrimary onClick={ onStartImport } disabled={ importDisabled }>
						{ __( 'Start', 'woocommerce-admin' ) }
					</Button>
				</Fragment>
			);
		}

		// Has imported all possible data
		return (
			<Fragment>
				<Button isDefault onClick={ onReimportData }>
					{ __( 'Re-import Data', 'woocommerce-admin' ) }
				</Button>
				<Button isDefault onClick={ onDeletePreviousData }>
					{ __( 'Delete Previously Imported Data', 'woocommerce-admin' ) }
				</Button>
			</Fragment>
		);
	};

	return (
		<div className="woocommerce-settings__actions woocommerce-settings-historical-data__actions">
			{ getActions() }
		</div>
	);
}

export default HistoricalDataActions;
