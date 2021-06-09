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
		additionalSuggestions,
		enabledSuggestions,
		getPaymentGateway,
		suggestions,
		isResolving,
		wcPaySuggestion,
	} = useSelect( ( select ) => {
		const gateways = select( PAYMENT_GATEWAYS_STORE_NAME )
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
				const gateway = gateways[ id ] ? gateways[ id ] : {};
				const enrichedSuggestion = {
					installed: !! gateways[ id ],
					postInstallScripts: gateway.post_install_scripts,
					enabled: gateway.enabled,
					needsSetup: gateway.needs_setup,
					requiredKeys: gateway.required_settings_keys,
					settingsUrl: gateway.settings_url,
					connectionUrl: gateway.connection_url,
					setupHelpText: gateway.setup_help_text,
					settings: gateway.settings,
					title: gateway.title,
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
			additionalSuggestions: additional,
			enabledSuggestions: enabled,
			getPaymentGateway: select( PAYMENT_GATEWAYS_STORE_NAME )
				.getPaymentGateway,
			getOption: select( OPTIONS_STORE_NAME ).getOption,
			isResolving: select( ONBOARDING_STORE_NAME ).isResolving(
				'getPaymentGatewaySuggestions'
			),
			suggestions: mappedSuggestions,
			wcPaySuggestion: wcPay,
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
			if ( ! suggestions.get( id ) ) {
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
		[ suggestions ]
	);

	const recordConnectStartEvent = useCallback( ( gatewayId ) => {
		recordEvent( 'tasklist_payment_connect_start', {
			payment_method: gatewayId,
		} );
	}, [] );

	const recommendation = useMemo( () => {
		for ( const id in RECOMMENDED_GATEWAY_IDS ) {
			const gateway = suggestions.get( id );
			if ( gateway ) {
				return gateway;
			}
		}
		return null;
	}, [ suggestions ] );

	const currentSuggestion = useMemo( () => {
		if ( ! query.id || isResolving || ! suggestions.size ) {
			return null;
		}

		const gateway = suggestions.get( query.id );

		if ( ! gateway ) {
			throw `Current gateway ${ query.id } not found in available gateways list`;
		}

		return gateway;
	}, [ isResolving, query, suggestions ] );

	if ( query.id && ! currentSuggestion ) {
		return <SetupPlaceholder />;
	}

	if ( currentSuggestion ) {
		return (
			<Setup
				suggestion={ currentSuggestion }
				markConfigured={ markConfigured }
				recordConnectStartEvent={ recordConnectStartEvent }
			/>
		);
	}

	return (
		<div className="woocommerce-task-payments">
			{ ! suggestions.size && <ListPlaceholder /> }

			{ !! wcPaySuggestion && (
				<WCPaySuggestionCard suggestion={ wcPaySuggestion } />
			) }

			{ !! enabledSuggestions.size && (
				<List
					heading={ __(
						'Enabled payment gateways',
						'woocommerce-admin'
					) }
					recommendation={ recommendation }
					suggestions={ enabledSuggestions }
				/>
			) }

			{ !! additionalSuggestions.size && (
				<List
					heading={ __(
						'Additional payment gateways',
						'woocommerce-admin'
					) }
					recommendation={ recommendation }
					suggestions={ additionalSuggestions }
					markConfigured={ markConfigured }
				/>
			) }
		</div>
	);
};

export default PaymentGatewaySuggestions;
