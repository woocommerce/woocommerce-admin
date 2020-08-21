/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { IMPORT_STORE_NAME } from '@woocommerce/data';
import { withDispatch } from '@wordpress/data';

function HistoricalDataActions( {
	createNotice,
	importDate,
	onDeletePreviousData,
	onReimportData,
	onStartImport,
	onStopImport,
	status,
	updateImportStarted,
} ) {
	const startImport = () => {
		updateImportStarted( true );
		onStartImport();
	};
	const deletePreviousData = () => {
		updateImportStarted( false );
		onDeletePreviousData();
	};
	const reimportData = () => {
		updateImportStarted( false );
		onReimportData();
	};
	const getActions = () => {
		const importDisabled = status !== 'ready';

		// An import is currently in progress
		if (
			[ 'initializing', 'customers', 'orders', 'finalizing' ].includes(
				status
			)
		) {
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
			if ( importDate ) {
				return (
					<Fragment>
						<Button
							isPrimary
							onClick={ startImport }
							disabled={ importDisabled }
						>
							{ __( 'Start', 'woocommerce-admin' ) }
						</Button>
						<Button isSecondary onClick={ deletePreviousData }>
							{ __(
								'Delete Previously Imported Data',
								'woocommerce-admin'
							) }
						</Button>
					</Fragment>
				);
			}

			return (
				<Fragment>
					<Button
						isPrimary
						onClick={ startImport }
						disabled={ importDisabled }
					>
						{ __( 'Start', 'woocommerce-admin' ) }
					</Button>
				</Fragment>
			);
		}

		if ( status === 'error' ) {
			createNotice(
				'error',
				__(
					'Something went wrong with the importation process.',
					'woocommerce-admin'
				)
			);
		}

		// Has imported all possible data
		return (
			<Fragment>
				<Button isSecondary onClick={ reimportData }>
					{ __( 'Re-import Data', 'woocommerce-admin' ) }
				</Button>
				<Button isSecondary onClick={ deletePreviousData }>
					{ __(
						'Delete Previously Imported Data',
						'woocommerce-admin'
					) }
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

export default withDispatch( ( dispatch ) => {
	const { updateImportStarted } = dispatch( IMPORT_STORE_NAME );
	return { updateImportStarted };
} )( HistoricalDataActions );
