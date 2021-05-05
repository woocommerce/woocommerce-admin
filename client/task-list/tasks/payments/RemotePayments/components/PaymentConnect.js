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
} from '@woocommerce/components';

import { OPTIONS_STORE_NAME } from '@woocommerce/data';

import { useSlot } from '@woocommerce/experimental';

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

	const isOptionsRequesting = useSelect( ( select ) => {
		const { isOptionsUpdating } = select( OPTIONS_STORE_NAME );

		return isOptionsUpdating();
	} );

	const updateSettings = async ( values, fields ) => {
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

	const validate = ( values, fields ) => {
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
			settingsTransformCallback={ ( settings ) => {
				// This callback will be obsolete when we can derive essential fields from API
				const essentialFields = fieldsConfig.map(
					( field ) => field.name
				);

				return Object.keys( settings ).reduce( ( all, curr ) => {
					if ( essentialFields.includes( curr ) ) {
						all.push( settings[ curr ] );
					}
					return all;
				}, [] );
			} }
			apiPath={ `/wc/v3/payment_gateways/${ key }/` }
			isBusy={ isOptionsRequesting }
			onSubmitCallback={ updateSettings }
			onButtonClickCallback={ () => recordConnectStartEvent( key ) }
			buttonLabel={ __( 'Proceed', 'woocommerce-admin' ) }
			validate={ validate }
			{ ...props }
		/>
	);

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
