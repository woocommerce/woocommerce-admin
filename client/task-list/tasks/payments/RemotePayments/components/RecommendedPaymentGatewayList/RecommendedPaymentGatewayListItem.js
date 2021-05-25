/**
 * External dependencies
 */
import classnames from 'classnames';
import { Fragment } from '@wordpress/element';
import { CardBody, CardMedia, CardDivider } from '@wordpress/components';
import { Text, useSlot } from '@woocommerce/experimental';
import { recordEvent } from '@woocommerce/tracks';

/**
 * Internal dependencies
 */
import { PaymentAction } from '../../../components/PaymentAction';
import { RecommendedRibbon } from '../../../components/RecommendedRibbon';
import { SetupRequired } from '../../../components/SetupRequired';

import './RecommendedPaymentGatewayList.scss';

export const RecommendedPaymentGatewayListItem = ( {
	hasDivider = true,
	installedPaymentGateways,
	isRecommended,
	paymentGateway,
	markConfigured,
	recommendedPaymentGateways,
} ) => {
	const {
		image,
		content,
		key,
		plugins = [],
		title,
		is_visible: isVisible,
		loading,
	} = paymentGateway;

	const slot = useSlot( `woocommerce_remote_payment_${ key }` );

	if ( ! isVisible ) {
		return null;
	}

	const installedPaymentGateway = installedPaymentGateways[ key ];
	const {
		enabled: isEnabled = false,
		needs_setup: needsSetup = false,
		required_settings_keys: requiredSettingsKeys = [],
		settings_url: manageUrl,
	} = installedPaymentGateway || {};

	const isConfigured = ! needsSetup;
	const hasFills = Boolean( slot?.fills?.length );
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
			{ hasDivider && <CardDivider /> }
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
								options: recommendedPaymentGateways.map(
									( option ) => option.key
								),
								selected: key,
							} )
						}
					/>
				</div>
			</CardBody>
		</Fragment>
	);
};
