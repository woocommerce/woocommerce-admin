/**
 * External dependencies
 */
import { Link } from '@woocommerce/components';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { PLUGINS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useDispatch } from '@wordpress/data';
import {
	Visa,
	MasterCard,
	Amex,
	ApplePay,
	GooglePay,
} from '@woocommerce/onboarding';
import { getAdminLink } from '@woocommerce/wc-admin-settings';
import { __ } from '@wordpress/i18n';
import _ from 'lodash';

/**
 * Internal dependencies
 */
import './wc-payments-row.scss';

type WCPaymentsRowProps = {
	sortColumnContent: string;
	descriptionColumnContent: string;
};

const WC_PAY_SLUG = 'woocommerce-payments';
export const WCPaymentsRow: React.FC< WCPaymentsRowProps > = ( {
	sortColumnContent,
	descriptionColumnContent,
} ) => {
	const [ installing, setInstalling ] = useState( false );
	const { installAndActivatePlugins } = useDispatch( PLUGINS_STORE_NAME );

	const installWCPay = () => {
		if ( installing ) {
			return;
		}
		setInstalling( true );
		recordEvent( 'settings_payments_recommendations_setup', {
			extension_selected: 'woocommerce-payments',
		} );
		installAndActivatePlugins( [ WC_PAY_SLUG ] )
			.then( () => {
				window.location.href = getAdminLink(
					'admin.php?page=wc-settings&tab=checkout&section=woocommerce_payments'
				);
			} )
			.catch( ( response: { errors: Record< string, string > } ) => {
				// createNoticesFromResponse( response );
				setInstalling( false );
			} );
	};

	return (
		<>
			<td
				className="sort ui-sortable-handle"
				width="1%"
				dangerouslySetInnerHTML={ {
					__html: sortColumnContent,
				} }
			></td>
			<td className="name">
				<div className="psuedo-wcpay_name">
					<Link
						target="_blank"
						type="external"
						rel="noreferrer"
						href="https://woocommerce.com/payments/?utm_medium=product"
					>
						{ __( 'WooCommerce Payments', 'woocommerce-admin' ) }
					</Link>
					<div className="psuedo-wcpay_accepted">
						<Visa />
						<MasterCard />
						<Amex />
						<GooglePay />
						<ApplePay />
					</div>
				</div>
			</td>
			<td key="status" className="psuedo-status"></td>
			<td
				className="description"
				dangerouslySetInnerHTML={ {
					__html: descriptionColumnContent,
				} }
			></td>
			<td className="action">
				<Button
					className="button alignright"
					onClick={ () => installWCPay() }
					isSecondary
					isBusy={ installing }
					aria-disabled={ installing }
				>
					{ __( 'Install', 'woocommerce-admin' ) }
				</Button>
			</td>
		</>
	);
};
