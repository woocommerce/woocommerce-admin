/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { getHistory, getNewPath } from '@woocommerce/navigation';
import {
	OPTIONS_STORE_NAME,
	ONBOARDING_STORE_NAME,
	PAYMENT_GATEWAYS_STORE_NAME,
} from '@woocommerce/data';
import { recordEvent } from '@woocommerce/tracks';
import { useMemo, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { WCPayCard } from '../components/WCPayCard';
import { PaymentMethodList } from './components/PaymentMethodList';
import { PaymentMethod } from './components/PaymentMethod';

const RECOMMENDED_GATEWAY_KEYS = [ 'wcpay', 'mercadopago', 'stripe' ];

export const RemotePayments = ( { query } ) => {
	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const {
		additionalPaymentGatewayRecommendations,
		enabledPaymentGatewayRecommendations,
		getOption,
		installedPaymentGateways,
		paymentGatewayRecommendations,
		isResolving,
	} = useSelect( ( select ) => {
		const paymentGateways = select( PAYMENT_GATEWAYS_STORE_NAME )
			.getPaymentGateways()
			.reduce( ( map, gateway ) => {
				map[ gateway.id ] = gateway;
				return map;
			}, {} );

		const enabled = new Map();
		const additional = new Map();
		const recommendations = select( ONBOARDING_STORE_NAME )
			.getPaymentMethodRecommendations()
			.reduce( ( map, gateway ) => {
				map.set( gateway.key, gateway );
				if ( paymentGateways[ gateway.key ] ) {
					enabled.set( gateway.key, gateway );
				} else {
					additional.set( gateway.key, gateway );
				}
				return map;
			}, new Map() );

		return {
			additionalPaymentGatewayRecommendations: additional,
			enabledPaymentGatewayRecommendations: enabled,
			getOption: select( OPTIONS_STORE_NAME ).getOption,
			installedPaymentGateways: paymentGateways,
			isResolving: select( ONBOARDING_STORE_NAME ).isResolving(
				'getPaymentMethodRecommendations'
			),
			paymentGatewayRecommendations: recommendations,
		};
	} );

	const recommendedMethod = useMemo( () => {
		for ( const key in RECOMMENDED_GATEWAY_KEYS ) {
			const gateway = paymentGatewayRecommendations.get( key );
			if ( gateway && gateway.visible ) {
				return gateway;
			}
		}
		return null;
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
		async ( paymentGatewayKey, queryParams = {} ) => {
			if ( ! paymentGatewayRecommendations.get( paymentGatewayKey ) ) {
				throw `Method ${ paymentGatewayKey } not found in available methods list`;
			}

			enablePaymentGateway( paymentGatewayKey );

			recordEvent( 'tasklist_payment_connect_method', {
				payment_method: paymentGatewayKey,
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

	const currentPaymentGateway = useMemo( () => {
		if (
			! query.method ||
			isResolving ||
			! paymentGatewayRecommendations.size
		) {
			return null;
		}

		const gateway = paymentGatewayRecommendations.get( query.method );

		if ( ! gateway ) {
			throw `Current method ${ query.method } not found in available methods list`;
		}

		return gateway;
	}, [ isResolving, query, paymentGatewayRecommendations ] );

	if ( currentPaymentGateway ) {
		return (
			<PaymentMethod
				method={ currentPaymentGateway }
				markConfigured={ markConfigured }
				recordConnectStartEvent={ recordConnectStartEvent }
			/>
		);
	}

	const wcPayGateway = additionalPaymentGatewayRecommendations.get( 'wcpay' );
	if ( wcPayGateway ) {
		additionalPaymentGatewayRecommendations.delete( 'wcpay' );
	}

	return (
		<div className="woocommerce-task-payments">
			{ !! wcPayGateway && <WCPayCard method={ wcPayGateway } /> }

			{ !! enabledPaymentGatewayRecommendations.size && (
				<PaymentMethodList
					recommendedMethod={ recommendedMethod }
					heading={ __( 'Enabled payment methods', 'wc-admin' ) }
					methods={ Array.from(
						enabledPaymentGatewayRecommendations.values()
					) }
				/>
			) }

			{ !! additionalPaymentGatewayRecommendations.size && (
				<PaymentMethodList
					recommendedMethod={ recommendedMethod }
					heading={ __( 'Additional payment methods', 'wc-admin' ) }
					methods={ Array.from(
						additionalPaymentGatewayRecommendations.values()
					) }
					markConfigured={ markConfigured }
				/>
			) }
		</div>
	);
};

export default RemotePayments;
