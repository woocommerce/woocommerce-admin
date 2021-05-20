/**
 * External dependencies
 */
import {
	WCPayCard,
	WCPayCardHeader,
	WCPayCardFooter,
	WCPayCardBody,
	SetupRequired,
	RecommendedRibbon,
} from '@woocommerce/tasks';
import { __ } from '@wordpress/i18n';
import { Text } from '@woocommerce/experimental';
import { Link } from '@woocommerce/components';
import { recordEvent } from '@woocommerce/tracks';
import interpolateComponents from 'interpolate-components';

/**
 * Internal dependencies
 */

import { PaymentAction } from './PaymentAction';

const TosPrompt = () =>
	interpolateComponents( {
		mixedString: __(
			'Upon clicking "Get started", you agree to the {{link}}Terms of service{{/link}}. Next we’ll ask you to share a few details about your business to create your account.',
			'woocommerce-admin'
		),
		components: {
			link: (
				<Link
					href={ 'https://wordpress.com/tos/' }
					target="_blank"
					type="external"
				/>
			),
		},
	} );

const ButtonComponent = ( {
	method: { key: methodKey, isConfigured, isEnabled, loading, onClick },
} ) => (
	<PaymentAction
		methodKey={ methodKey }
		hasSetup={ true }
		isConfigured={ isConfigured }
		isEnabled={ isEnabled }
		isRecommended={ true }
		isLoading={ loading }
		onSetup={ () => {} }
		onSetupCallback={ onClick }
		setupButtonText={ __( 'Get started', 'woocommerce-admin' ) }
		onManageButtonClick={ () => recordEvent( 'tasklist_payment_manage' ) }
	/>
);

const CardBody = () => (
	<WCPayCardBody
		description={ __(
			'Try the new way to get paid. Securely accept credit and debit cards on your site. Manage transactions without leaving your WordPress dashboard. Only with WooCommerce Payments. ',
			'woocommerce-admin'
		) }
		linkOnClick={ () => {
			recordEvent( 'tasklist_payment_learn_more' );
		} }
	/>
);
const CardHeader = ( { isEnabled } ) => (
	<WCPayCardHeader
		headerComponent={
			isEnabled
				? SetupRequired
				: () => <RecommendedRibbon isPill={ true } />
		}
	/>
);
const CardFooter = ( { method } ) => (
	<WCPayCardFooter
		buttonComponent={ () => <ButtonComponent method={ method } /> }
		tosComponent={ () => (
			<Text>
				<TosPrompt />
			</Text>
		) }
	/>
);

export const WCPayMethodCard = ( { method } ) => {
	const { isEnabled } = method;

	return (
		<WCPayCard>
			<CardHeader isEnabled={ isEnabled } />
			<CardBody />
			<CardFooter method={ method } />
		</WCPayCard>
	);
};
