/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import interpolateComponents from 'interpolate-components';
import { useDispatch, useSelect } from '@wordpress/data';
import { Link, Settings } from '@woocommerce/components';
import { OPTIONS_STORE_NAME } from '@woocommerce/data';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';

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

	const isOptionsRequesting = useSelect( ( select ) => {
		const { isOptionsUpdating } = select( OPTIONS_STORE_NAME );

		return isOptionsUpdating();
	} );

	const [ state, setState ] = useState( 'loading' );
	const [ errors, setErrors ] = useState( [] );
	const [ fields, setFields ] = useState( null );

	useEffect( () => {
		const essentialFields = fieldsConfig.map( ( field ) => field.name );

		apiFetch( {
			path: `/wc/v3/payment_gateways/${ key }/`,
		} )
			.then( ( results ) => {
				setFields(
					Object.keys( results.settings ).reduce( ( all, curr ) => {
						if ( essentialFields.includes( curr ) ) {
							all.push( results.settings[ curr ] );
						}
						return all;
					}, [] )
				);
				setState( 'loaded' );
			} )
			.catch( ( e ) => {
				setState( 'error' );
				setErrors( [ ...errors, e.message ] );
			} );
	}, [] );

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

	if ( errors.length ) {
		return <p>{ JSON.stringify( errors, null, 3 ) }</p>;
	}

	if ( state !== 'loaded' ) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Settings
				fields={ fields }
				isBusy={ isOptionsRequesting }
				onSubmitCallback={ updateSettings }
				onButtonClickCallback={ () => recordConnectStartEvent( key ) }
				buttonLabel={ __( 'Proceed', 'woocommerce-admin' ) }
			/>

			<p>{ helpText }</p>
		</>
	);
};
