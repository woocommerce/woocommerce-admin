/**
 * External dependencies
 */
import classnames from 'classnames';
import { Fragment } from '@wordpress/element';
import { CardBody, CardMedia, CardDivider } from '@wordpress/components';
import { RecommendedRibbon, SetupRequired } from '@woocommerce/onboarding';
import { recordEvent } from '@woocommerce/tracks';
import { Text, useSlot } from '@woocommerce/experimental';

/**
 * Internal dependencies
 */
import { PaymentAction } from '../../../components/PaymentAction';

import './List.scss';

export const Item = ( {
	installedPaymentGateways,
	isRecommended,
	paymentGateway,
	markConfigured,
	suggestionKeys,
} ) => {
	const {
		image,
		content,
		key,
		plugins = [],
		title,
		loading,
	} = paymentGateway;

	const connectSlot = useSlot(
		`woocommerce_payment_gateway_connect_${ key }`
	);
	const setupSlot = useSlot( `woocommerce_payment_gateway_setup_${ key }` );

	const installedPaymentGateway = installedPaymentGateways[ key ] || {};

	const {
		enabled: isEnabled = false,
		needs_setup: needsSetup = false,
		required_settings_keys: requiredSettingsKeys = [],
		settings_url: manageUrl = null,
	} = installedPaymentGateway;

	const isConfigured = ! needsSetup;
	const hasFills =
		Boolean( connectSlot?.fills?.length ) ||
		Boolean( setupSlot?.fills?.length );
	const hasSetup = Boolean(
		plugins.length || requiredSettingsKeys.length || hasFills
	);
	const showRecommendedRibbon = isRecommended && ! isConfigured;

	const classes = classnames(
		'woocommerce-task-payment',
		'woocommerce-task-card',
		! isConfigured && 'woocommerce-task-payment-not-configured',
		'woocommerce-task-payment-' + key
	);

	return (
		<Fragment key={ key }>
			<CardBody
				style={ { paddingLeft: 0, marginBottom: 0 } }
				className={ classes }
			>
				<CardMedia isBorderless>
					<img src={ image } alt={ title } />
				</CardMedia>
				<div className="woocommerce-task-payment__description">
					{ showRecommendedRibbon && <RecommendedRibbon /> }
					<Text as="h3" className="woocommerce-task-payment__title">
						{ title }
						{ isEnabled && ! isConfigured && <SetupRequired /> }
					</Text>
					<div className="woocommerce-task-payment__content">
						{ content }
					</div>
				</div>
				<div className="woocommerce-task-payment__footer">
					<PaymentAction
						manageUrl={ manageUrl }
						methodKey={ key }
						hasSetup={ hasSetup }
						isConfigured={ isConfigured }
						isEnabled={ isEnabled }
						isRecommended={ isRecommended }
						isLoading={ loading }
						markConfigured={ markConfigured }
						onSetup={ () =>
							recordEvent( 'tasklist_payment_setup', {
								options: suggestionKeys,
								selected: key,
							} )
						}
					/>
				</div>
			</CardBody>
			<CardDivider />
		</Fragment>
	);
};
