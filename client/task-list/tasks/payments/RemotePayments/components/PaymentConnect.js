/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import interpolateComponents from 'interpolate-components';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	Link,
	Settings,
	WooRemotePaymentSettings,
	Spinner,
} from '@woocommerce/components';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import { useSlot, Text } from '@woocommerce/experimental';

export const PaymentConnect = ( {
	markConfigured,
	method,
	recordConnectStartEvent,
} ) => {
	const {
		api_details_url: apiDetailsUrl,
		fields: fieldsConfig,
		key,
		title,
	} = method;

	const { updateOptions } = useDispatch( OPTIONS_STORE_NAME );
	const { createNotice } = useDispatch( 'core/notices' );
	const slot = useSlot( `woocommerce_remote_payment_settings_${ key }` );
	const hasFills = Boolean( slot.fills && slot.fills.length );
	const [ state, setState ] = useState( 'loading' );
	const [ fields, setFields ] = useState( null );

	// This transform will be obsolete when we can derive essential fields from the API
	const settingsTransform = ( settings ) => {
		const essentialFields = fieldsConfig.map( ( field ) => field.name );

		return Object.values( settings ).filter( ( setting ) =>
			essentialFields.includes( setting.id )
		);
	};

	useEffect( () => {
		apiFetch( {
			path: `/wc/v3/payment_gateways/${ key }/`,
		} )
			.then( ( results ) => {
				setFields( settingsTransform( results.settings ) );
				setState( 'loaded' );
			} )
			.catch( ( e ) => {
				setState( 'error' );
				/* eslint-disable no-console */
				console.error( e );
				/* eslint-enable no-console */
			} );
	}, [] );

	const isOptionsRequesting = useSelect( ( select ) => {
		const { isOptionsUpdating } = select( OPTIONS_STORE_NAME );

		return isOptionsUpdating();
	} );

	const updateSettings = async ( values ) => {
		const options = {};

		fields.forEach( ( field ) => {
			const optionName = field.option || field.name;
			options[ optionName ] = values[ field.name ];
		} );

		if ( ! Object.keys( options ).length ) {
			return;
		}

		const update = await updateOptions( {
			...options,
		} );

		if ( update.success ) {
			markConfigured( key );
			createNotice(
				'success',
				title + __( ' connected successfully', 'woocommerce-admin' )
			);
		} else {
			createNotice(
				'error',
				__(
					'There was a problem saving your payment settings',
					'woocommerce-admin'
				)
			);
		}
	};

	const validate = ( values ) => {
		if ( fields ) {
			return fields.reduce( ( errors, field ) => {
				if ( ! values[ field.id ] ) {
					// Matches any word that is capitalized aside from abrevitions like ID.
					const label = field.label.replace(
						/([A-Z][a-z]+)/g,
						( val ) => val.toLowerCase()
					);
					return {
						...errors,
						[ field.id ]:
							field.type === 'checkbox'
								? __( 'This value is required ' )
								: __( 'Please enter your ' ) + label,
					};
				}
				return errors;
			}, {} );
		}
		return {};
	};

	const helpText = interpolateComponents( {
		mixedString: __(
			'Your API details can be obtained from your {{link/}}',
			'woocommerce-admin'
		),
		components: {
			link: (
				<Link href={ apiDetailsUrl } target="_blank" type="external">
					{ sprintf( __( '%(title)s account', 'woocommerce-admin' ), {
						title,
					} ) }
				</Link>
			),
		},
	} );

	const DefaultSettings = ( { ...props } ) => (
		<Settings
			fields={ fields }
			isBusy={ isOptionsRequesting }
			onSubmitCallback={ updateSettings }
			onButtonClickCallback={ () => recordConnectStartEvent( key ) }
			buttonLabel={ __( 'Proceed', 'woocommerce-admin' ) }
			validate={ validate }
			{ ...props }
		/>
	);

	if ( state === 'error' ) {
		return (
			<Text>
				{ __( 'There was an error loading the payment fields' ) }
			</Text>
		);
	}

	if ( state === 'loading' ) {
		return <Spinner />;
	}

	return (
		<>
			{ hasFills ? (
				<WooRemotePaymentSettings.Slot
					defaultSettings={ DefaultSettings }
					defaultUpdate={ updateSettings }
					markConfigured={ () => markConfigured( key ) }
					id={ key }
				/>
			) : (
				<>
					<DefaultSettings />
					<p>{ helpText }</p>
				</>
			) }
		</>
	);
};
