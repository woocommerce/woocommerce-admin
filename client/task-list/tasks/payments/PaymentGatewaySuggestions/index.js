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
import { List, Placeholder as ListPlaceholder } from './components/List';
import { Setup, Placeholder as SetupPlaceholder } from './components/Setup';
import { WCPaySuggestionCard } from '../components/WCPaySuggestionCard';
import './plugins/Bacs';

const RECOMMENDED_GATEWAY_IDS = [
	'woocommerce_payments',
	'mercadopago',
	'stripe',
];

export const PaymentGatewaySuggestions = ( { query } ) => {
	const { updatePaymentGateway } = useDispatch( PAYMENT_GATEWAYS_STORE_NAME );
	const {
		additionalGateways,
		enabledGateways,
		getPaymentGateway,
		paymentGateways,
		isResolving,
		wcPayGateway,
	} = useSelect( ( select ) => {
		const installedPaymentGateways = select( PAYMENT_GATEWAYS_STORE_NAME )
			.getPaymentGateways()
			.reduce( ( map, gateway ) => {
				map[ gateway.id ] = gateway;
				return map;
			}, {} );

		const enabled = new Map();
		const additional = new Map();
		let wcPay = null;
		const mappedSuggestions = select( ONBOARDING_STORE_NAME )
			.getPaymentGatewaySuggestions()
			.reduce( ( map, suggestion ) => {
				const { id } = suggestion;
				const installedGateway = installedPaymentGateways[
					suggestion.id
				]
					? installedPaymentGateways[ id ]
					: {};
				const enrichedSuggestion = {
					installed: !! installedPaymentGateways[ id ],
					postInstallScripts: installedGateway.post_install_scripts,
					enabled: installedGateway.enabled,
					needsSetup: installedGateway.needs_setup,
					settingsUrl: installedGateway.settings_url,
					connectionUrl: installedGateway.connection_url,
					setupHelpText: installedGateway.setup_help_text,
					title: installedGateway.title,
					requiredSettings: installedGateway.required_settings_keys
						? installedGateway.required_settings_keys
								.map(
									( settingKey ) =>
										installedGateway.settings[ settingKey ]
								)
								.filter( Boolean )
						: null,
					...suggestion,
				};

				map.set( id, enrichedSuggestion );

				// WCPay is handled separately when not installed and configured
				if (
					id === 'woocommerce_payments' &&
					! (
						enrichedSuggestion.installed &&
						! enrichedSuggestion.needsSetup
					)
				) {
					wcPay = enrichedSuggestion;
					return map;
				}

				if ( enrichedSuggestion.enabled ) {
					enabled.set( id, enrichedSuggestion );
				} else {
					additional.set( id, enrichedSuggestion );
				}

				return map;
			}, new Map() );

		return {
			additionalGateways: additional,
			enabledGateways: enabled,
			getPaymentGateway: select( PAYMENT_GATEWAYS_STORE_NAME )
				.getPaymentGateway,
			getOption: select( OPTIONS_STORE_NAME ).getOption,
			isResolving: select( ONBOARDING_STORE_NAME ).isResolving(
				'getPaymentGatewaySuggestions'
			),
			paymentGateways: mappedSuggestions,
			wcPayGateway: wcPay,
		};
	} );

	const enablePaymentGateway = ( id ) => {
		if ( ! id ) {
			return;
		}

		const gateway = getPaymentGateway( id );

		if ( ! gateway || gateway.enabled ) {
			return;
		}

		updatePaymentGateway( id, {
			enabled: true,
		} );
	};

	const markConfigured = useCallback(
		async ( id, queryParams = {} ) => {
			if ( ! paymentGateways.get( id ) ) {
				throw `Payment gateway ${ id } not found in available gateways list`;
			}

			enablePaymentGateway( id );

			recordEvent( 'tasklist_payment_connect_method', {
				payment_method: id,
			} );

			getHistory().push(
				getNewPath( { ...queryParams, task: 'payments' }, '/', {} )
			);
		},
		[ paymentGateways ]
	);

	const recordConnectStartEvent = useCallback( ( gatewayId ) => {
		recordEvent( 'tasklist_payment_connect_start', {
			payment_method: gatewayId,
		} );
	}, [] );

	const recommendation = useMemo( () => {
		for ( const id in RECOMMENDED_GATEWAY_IDS ) {
			const gateway = paymentGateways.get( id );
			if ( gateway ) {
				return gateway;
			}
		}
		return null;
	}, [ paymentGateways ] );

	const currentGateway = useMemo( () => {
		if ( ! query.id || isResolving || ! paymentGateways.size ) {
			return null;
		}

		const gateway = paymentGateways.get( query.id );

		if ( ! gateway ) {
			throw `Current gateway ${ query.id } not found in available gateways list`;
		}

		return gateway;
	}, [ isResolving, query, paymentGateways ] );

	if ( query.id && ! currentGateway ) {
		return <SetupPlaceholder />;
	}

	if ( currentGateway ) {
		return (
			<Setup
				paymentGateway={ currentGateway }
				markConfigured={ markConfigured }
				recordConnectStartEvent={ recordConnectStartEvent }
			/>
		);
	}

	return (
		<div className="woocommerce-task-payments">
			{ ! paymentGateways.size && <ListPlaceholder /> }

			{ !! wcPayGateway && (
				<WCPaySuggestionCard paymentGateway={ wcPayGateway } />
			) }

			{ !! enabledGateways.size && (
				<List
					heading={ __(
						'Enabled payment gateways',
						'woocommerce-admin'
					) }
					recommendation={ recommendation }
					paymentGateways={ enabledGateways }
				/>
			) }

			{ !! additionalGateways.size && (
				<List
					heading={ __(
						'Additional payment gateways',
						'woocommerce-admin'
					) }
					recommendation={ recommendation }
					paymentGateways={ additionalGateways }
					markConfigured={ markConfigured }
				/>
			) }
		</div>
	);
};

export default PaymentGatewaySuggestions;
