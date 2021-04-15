/**
 * External dependencies
 */
import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	__experimentalText as Text,
} from '@wordpress/components';
import interpolateComponents from 'interpolate-components';
import { Link } from '@woocommerce/components';
import { __ } from '@wordpress/i18n';
import NoticeOutlineIcon from 'gridicons/dist/notice-outline';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import WCPayAcceptedMethods from '../WCPayAcceptedMethods';
import WCPayLogo from '../../images/wcpay-logo';
import { Action } from '../Action';
import './WCPayCard.scss';

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

export const WCPayCard = ( props ) => {
	const {
		key: methodKey,
		isConfigured,
		container,
		isEnabled,
		loading,
		onClick,
	} = props.method;

	return (
		<Card className="woocommerce-task-payment-wcpay">
			<CardHeader as="h2">
				<WCPayLogo />
				{ ! isEnabled && (
					<span className="woocommerce-task-payment__recommended-pill">
						{ __( 'Recommended', 'woocommerce-admin' ) }
					</span>
				) }
				{ isEnabled && (
					<span className="woocommerce-task-payment__setup_required">
						<NoticeOutlineIcon />
						<Text variant="small">
							{ __( 'Setup required', 'woocommerce-admin' ) }
						</Text>
					</span>
				) }
			</CardHeader>
			<CardBody>
				<Text className="woocommerce-task-payment-wcpay__description">
					{ __(
						'Try the new way to get paid. Securely accept credit and debit cards on your site. Manage transactions without leaving your WordPress dashboard. Only with WooCommerce Payments. ',
						'woocommerce-admin'
					) }
					<Link
						target="_blank"
						type="external"
						rel="noreferrer"
						href="https://woocommerce.com/payments/"
						onClick={ () =>
							recordEvent( 'tasklist_payment_learn_more' )
						}
					>
						{ __( 'Learn more', 'woocommerce-admin' ) }
					</Link>
				</Text>

				<WCPayAcceptedMethods />
			</CardBody>
			<CardFooter>
				<Text>
					<TosPrompt />
				</Text>
				<Action
					methodKey={ methodKey }
					hasSetup={ !! container }
					isConfigured={ isConfigured }
					isEnabled={ isEnabled }
					isRecommended={ true }
					isLoading={ loading }
					onSetup={ () => {} }
					onSetupCallback={ onClick }
					setupButtonText={ __( 'Get started', 'woocommerce-admin' ) }
				/>
			</CardFooter>
		</Card>
	);
};
