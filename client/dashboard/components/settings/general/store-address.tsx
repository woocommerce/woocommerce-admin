/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { COUNTRIES_STORE_NAME } from '@woocommerce/data';
import { decodeEntities } from '@wordpress/html-entities';
import { escapeRegExp } from 'lodash';
import { useEffect, useMemo, useState, useRef } from '@wordpress/element';
import { SelectControl, TextControl } from '@woocommerce/components';
import { Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { getAdminSetting } from '~/utils/admin-settings';

const { countries } = getAdminSetting( 'dataEndpoints', { countries: {} } );
/**
 * Check if a given address field is required for the locale.
 *
 * @param {string} fieldName Name of the field to check.
 * @param {Object} locale Locale data.
 * @return {boolean} Field requirement.
 */
export function isAddressFieldRequired( fieldName, locale = {} ) {
	if ( locale[ fieldName ]?.hasOwnProperty( 'required' ) ) {
		return locale[ fieldName ]?.required;
	}

	if ( fieldName === 'address_2' ) {
		return false;
	}

	return true;
}

/**
 * Form validation.
 *
 * @param {Object} locale The store locale.
 * @return {Function} Validator function.
 */
export function getStoreAddressValidator( locale = {} ) {
	/**
	 * Form validator.
	 *
	 * @param {Object} values Keyed values of all fields in the form.
	 * @return {Object} Key value of fields and error messages, { myField: 'This field is required' }
	 */
	return ( values ) => {
		const errors: {
			[ key: string ]: string;
		} = {};

		if (
			isAddressFieldRequired( 'address_1', locale ) &&
			! values.addressLine1.trim().length
		) {
			errors.addressLine1 = __(
				'Please add an address',
				'woocommerce-admin'
			);
		}
		if ( ! values.countryState.trim().length ) {
			errors.countryState = __(
				'Please select a country / region',
				'woocommerce-admin'
			);
		}
		if (
			isAddressFieldRequired( 'city', locale ) &&
			! values.city.trim().length
		) {
			errors.city = __( 'Please add a city', 'woocommerce-admin' );
		}
		if (
			isAddressFieldRequired( 'postcode', locale ) &&
			! values.postCode.trim().length
		) {
			errors.postCode = __(
				'Please add a post code',
				'woocommerce-admin'
			);
		}

		return errors;
	};
}

/**
 * Get all country and state combinations used for select dropdowns.
 *
 * @return {Object} Select options, { value: 'US:GA', label: 'United States - Georgia' }
 */
export function getCountryStateOptions() {
	const countryStateOptions = countries.reduce( ( acc, country ) => {
		if ( ! country.states.length ) {
			acc.push( {
				key: country.code,
				label: decodeEntities( country.name ),
			} );

			return acc;
		}

		const countryStates = country.states.map( ( state ) => {
			return {
				key: country.code + ':' + state.code,
				label:
					decodeEntities( country.name ) +
					' — ' +
					decodeEntities( state.name ),
			};
		} );

		acc.push( ...countryStates );

		return acc;
	}, [] );

	return countryStateOptions;
}

/**
 * Get the autofill countryState fields and set value from filtered options.
 *
 * @param {Array} options Array of filterable options.
 * @param {string} countryState The value of the countryState field.
 * @param {Function} setValue Set value of the countryState input.
 * @return {Object} React component.
 */
export function useGetCountryStateAutofill( options, countryState, setValue ) {
	const [ autofillCountry, setAutofillCountry ] = useState( '' );
	const [ autofillState, setAutofillState ] = useState( '' );
	const isAutofillChange: {
		current: boolean;
	} = useRef();

	useEffect( () => {
		const option = options.find( ( opt ) => opt.key === countryState );
		const labels = option ? option.label.split( /\u2013|\u2014|\-/ ) : [];
		const newCountry = ( labels[ 0 ] || '' ).trim();
		const newState = ( labels[ 1 ] || '' ).trim();

		if (
			! isAutofillChange.current &&
			( newCountry !== autofillCountry || newState !== autofillState )
		) {
			setAutofillCountry( newCountry );
			setAutofillState( newState );
		}
		isAutofillChange.current = false;
	}, [ countryState ] );

	useEffect( () => {
		if ( ! autofillCountry && ! autofillState && countryState ) {
			// Clear form.
			isAutofillChange.current = true;
			setValue( 'countryState', '' );
		}
		let filteredOptions = [];
		const countrySearch = new RegExp(
			escapeRegExp( autofillCountry ),
			'i'
		);
		const stateSearch = new RegExp(
			escapeRegExp( autofillState.replace( /\s/g, '' ) ) + '$', // Always match the end of string for region.
			'i'
		);
		if ( autofillState.length || autofillCountry.length ) {
			filteredOptions = options.filter( ( option ) =>
				( autofillCountry.length ? countrySearch : stateSearch ).test(
					option.label
				)
			);
		}
		if ( autofillCountry.length && autofillState.length ) {
			const isStateAbbreviation = autofillState.length < 3;
			filteredOptions = filteredOptions.filter( ( option ) =>
				stateSearch.test(
					( isStateAbbreviation ? option.key : option.label )
						.replace( '-', '' )
						.replace( /\s/g, '' )
				)
			);

			const isCountryAbbreviation = autofillCountry.length < 3;
			if ( filteredOptions.length > 1 ) {
				let countryKeyOptions = [];
				countryKeyOptions = filteredOptions.filter( ( option ) =>
					countrySearch.test(
						isCountryAbbreviation ? option.key : option.label
					)
				);

				if ( countryKeyOptions.length > 0 ) {
					filteredOptions = countryKeyOptions;
				}
			}

			if ( filteredOptions.length > 1 ) {
				let stateKeyOptions = [];
				stateKeyOptions = filteredOptions.filter( ( option ) =>
					stateSearch.test(
						( isStateAbbreviation ? option.key : option.label )
							.replace( '-', '' )
							.replace( /\s/g, '' )
					)
				);

				if ( stateKeyOptions.length === 1 ) {
					filteredOptions = stateKeyOptions;
				}
			}
		}

		if (
			filteredOptions.length === 1 &&
			countryState !== filteredOptions[ 0 ].key
		) {
			isAutofillChange.current = true;
			setValue( 'countryState', filteredOptions[ 0 ].key );
		}
	}, [ autofillCountry, autofillState, options, setValue ] );

	return (
		<>
			<input
				onChange={ ( event ) =>
					setAutofillCountry( event.target.value )
				}
				value={ autofillCountry }
				name="country"
				type="text"
				className="woocommerce-select-control__autofill-input"
				tabIndex="-1"
				autoComplete="country"
			/>

			<input
				onChange={ ( event ) => setAutofillState( event.target.value ) }
				value={ autofillState }
				name="state"
				type="text"
				className="woocommerce-select-control__autofill-input"
				tabIndex="-1"
				autoComplete="address-level1"
			/>
		</>
	);
}

/**
 * Store address fields.
 *
 * @param {Object} props Props for input components.
 * @return {Object} -
 */
export function StoreAddress( props ) {
	const { getInputProps, setValue, onChange } = props;
	const countryState = getInputProps( 'countryState' ).value;
	const { locale, hasFinishedResolution } = useSelect( ( select ) => {
		return {
			locale: select( COUNTRIES_STORE_NAME ).getLocale( countryState ),
			hasFinishedResolution: select(
				COUNTRIES_STORE_NAME
			).hasFinishedResolution( 'getLocales' ),
		};
	} );
	const countryStateOptions = useMemo( () => getCountryStateOptions(), [] );
	const countryStateAutofill = useGetCountryStateAutofill(
		countryStateOptions,
		countryState,
		setValue
	);

	if ( ! hasFinishedResolution ) {
		return <Spinner />;
	}

	return (
		<div className="woocommerce-store-address-fields">
			<TextControl
				label={
					locale?.address_1?.label ||
					__( 'Address line 1', 'woocommerce-admin' )
				}
				required={ isAddressFieldRequired( 'address_1', locale ) }
				autoComplete="address-line1"
				{ ...getInputProps( 'addressLine1' ) }
			/>

			<TextControl
				label={
					locale?.address_2?.label ||
					__( 'Address line 2 (optional)', 'woocommerce-admin' )
				}
				required={ isAddressFieldRequired( 'address_2', locale ) }
				autoComplete="address-line2"
				{ ...getInputProps( 'addressLine2' ) }
			/>

			<SelectControl
				label={ __( 'Country / Region', 'woocommerce-admin' ) }
				required
				autoComplete="new-password" // disable autocomplete and autofill
				options={ countryStateOptions }
				excludeSelectedOptions={ false }
				showAllOnFocus
				isSearchable
				{ ...getInputProps( 'countryState' ) }
				controlClassName={ getInputProps( 'countryState' ).className }
			>
				{ countryStateAutofill }
			</SelectControl>

			<TextControl
				label={
					locale?.city?.label || __( 'City', 'woocommerce-admin' )
				}
				required={ isAddressFieldRequired( 'city', locale ) }
				{ ...getInputProps( 'city' ) }
				autoComplete="address-level2"
			/>

			<TextControl
				label={
					locale?.postcode?.label ||
					__( 'Post code', 'woocommerce-admin' )
				}
				required={ isAddressFieldRequired( 'postcode', locale ) }
				autoComplete="postal-code"
				{ ...getInputProps( 'postCode' ) }
			/>
		</div>
	);
}
