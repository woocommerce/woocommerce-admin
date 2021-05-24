/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import { OPTIONS_STORE_NAME, ONBOARDING_STORE_NAME, PAYMENT_GATEWAYS_STORE_NAME } from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useMemo, useState, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { WCPayCard } from '../components/WCPayCard';
import { PaymentMethodList } from './components/PaymentMethodList';
import { PaymentMethod } from './components/PaymentMethod';
import { sift } from '../../../../utils';

export const RemotePayments = ( { query } ) => {
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const {
		getOption,
		installedPaymentGateways,
		paymentGatewayRecommendations,
		isResolving,
	} = useSelect( ( select ) => {
		const paymentGateways = select(
			PAYMENT_GATEWAYS_STORE_NAME
		).getPaymentGateways();

		return {
			getOption: select( OPTIONS_STORE_NAME ).getOption,
			installedPaymentGateways: paymentGateways.reduce( (acc, curr ) => {
				acc[ curr.id ] = curr;
				return acc;
			}, {} ),
			isResolving: select( ONBOARDING_STORE_NAME ).isResolving(
				'getPaymentMethodRecommendations'
			),
			paymentGatewayRecommendations: select( ONBOARDING_STORE_NAME )
				.getPaymentMethodRecommendations(),
		};
	} );

	const recommendedMethod = useMemo( () => {
		const method = paymentGatewayRecommendations.find(
			( m ) =>
				( m.key === 'wcpay' && m.visible ) ||
				( m.key === 'mercadopago' && m.visible )
		);
		if ( ! method ) {
			return 'stripe';
		}
		return method.key;
	}, [ paymentGatewayRecommendations ] );

	const enablePaymentGateway = ( optionName ) => {
		if ( ! optionName ) {
			return;
		}

		const currentValue = getOption( optionName );

		if ( currentValue === 'yes' ) {
			return;
		}

		// @tood This could be moved to a data store and/or REST API endpoint.
		updateOptions( {
			[ optionName ]: {
				...currentValue,
				enabled: 'yes',
			},
		} );
	};

	const markConfigured = useCallback(
		async ( methodKey, queryParams = {} ) => {
			const method = paymentGatewayRecommendations.find(
				( option ) => option.key === methodKey
			);

			if ( ! method ) {
				throw `Method ${ methodKey } not found in available methods list`;
			}

			setEnabledMethods( {
				...enabledMethods,
				[ methodKey ]: true,
			} );

			enablePaymentGateway( method.optionName );

			recordEvent( 'tasklist_payment_connect_method', {
				payment_method: methodKey,
			} );

			getHistory().push(
				getNewPath( { ...queryParams, task: 'payments' }, '/', {} )
			);
		},
		[ installedPaymentGateways, paymentGatewayRecommendations ]
	);

	const recordConnectStartEvent = useCallback( ( methodName ) => {
		recordEvent( 'tasklist_payment_connect_start', {
			payment_method: methodName,
		} );
	}, [] );

	const currentMethod = useMemo( () => {
		if ( ! query.method || isResolving || ! paymentGatewayRecommendations.length ) {
			return null;
		}

		const method = paymentGatewayRecommendations.find( ( m ) => m.key === query.method );

		if ( ! method ) {
			throw `Current method ${ query.method } not found in available methods list`;
		}

		return method;
	}, [ isResolving, query, paymentGatewayRecommendations ] );

	if ( currentMethod ) {
		return (
			<PaymentMethod
				method={ currentMethod }
				markConfigured={ markConfigured }
				recordConnectStartEvent={ recordConnectStartEvent }
			/>
		);
	}

	const [ enabledPaymentGateways, additionalPaymentGateways ] = sift(
		paymentGatewayRecommendations,
		( gateway ) => installedPaymentGateways[ gateway.key ] && installedPaymentGateways[ gateway.key ].enabled
	);

	const wcPayIndex = additionalPaymentGateways.findIndex(
		( m ) => m.key === 'wcpay'
	);

	const wcPayMethod =
		wcPayIndex === -1
			? null
			: additionalPaymentGateways.splice( wcPayIndex, 1 );

	return (
		<div className="woocommerce-task-payments">
			{ !! wcPayMethod && <WCPayCard method={ wcPayMethod[ 0 ] } /> }

			{ !! enabledPaymentGateways.length && (
				<PaymentMethodList
					recommendedMethod={ recommendedMethod }
					heading={ __( 'Enabled payment methods', 'wc-admin' ) }
					methods={ enabledPaymentGateways }
				/>
			) }

			{ !! additionalPaymentGateways.length && (
				<PaymentMethodList
					recommendedMethod={ recommendedMethod }
					heading={ __( 'Additional payment methods', 'wc-admin' ) }
					methods={ additionalPaymentGateways }
					markConfigured={ markConfigured }
				/>
			) }
		</div>
	);
};

export default RemotePayments;
