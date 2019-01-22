/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { remove } from 'lodash';
import { withDispatch } from '@wordpress/data';

/**
 * WooCommerce dependencies
 */
import { SectionHeader, useFilters } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import Header from 'header';
import Setting from './setting';

const SETTINGS_FILTER = 'woocommerce_admin_settings_page';

class Settings extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			hasError: false,
			settings: {
				woocommerce_excluded_report_order_statuses:
					wcSettings.wcAdminSettings.woocommerce_excluded_report_order_statuses || [],
			},
		};

		this.handleInputChange = this.handleInputChange.bind( this );
	}

	componentDidCatch( error ) {
		this.setState( {
			hasError: true,
		} );
		/* eslint-disable no-console */
		console.warn( error );
		/* eslint-enable no-console */
	}

	resetDefaults = () => {};

	saveChanges = () => {
		this.props.updateSettings( this.state.settings );
		// @TODO: Need a confirmation on successful update.
	};

	handleInputChange( e ) {
		const { checked, name, type, value } = e.target;
		const { settings } = this.state;

		if ( 'checkbox' === type && Array.isArray( settings[ name ] ) ) {
			if ( checked ) {
				settings[ name ].push( value );
			} else {
				remove( settings[ name ], v => v === value );
			}
		} else {
			settings[ name ] = value;
		}

		this.setState( { settings } );
	}

	render() {
		const { hasError } = this.state;
		if ( hasError ) {
			return null;
		}

		const helpText = sprintf(
			__(
				'Orders with these statuses are excluded from the totals in your reports.' +
					'The <strong>Refunded</strong> status can not be excluded.  <a href="%s">Learn more</a>',
				'wc-admin'
			),
			'#',
			'wc-admin' // @TODO: this needs to be replaced with a real link
		);

		const orderStatuses = Object.keys( wcSettings.orderStatuses ).map( key => {
			return {
				value: key,
				label: wcSettings.orderStatuses[ key ],
				description: sprintf(
					__( 'Exclude the %s status from reports', 'wc-admin' ),
					wcSettings.orderStatuses[ key ]
				),
			};
		} );

		return (
			<Fragment>
				<Header
					sections={ [
						[ '/analytics/revenue', __( 'Analytics', 'wc-admin' ) ],
						__( 'Settings', 'wc-admin' ),
					] }
				/>
				<SectionHeader title={ __( 'Analytics Settings', 'wc-admin' ) } />
				<Setting
					label={ __( 'Excluded Statuses', 'wc-admin' ) }
					options={ orderStatuses }
					helpText={ helpText }
					inputType="checkbox"
					name="woocommerce_excluded_report_order_statuses"
					handleChange={ this.handleInputChange }
					value={ wcSettings.wcAdminSettings.woocommerce_excluded_report_order_statuses }
				/>
				<div className="woocommerce-settings__actions">
					<Button isDefault onClick={ this.resetDefaults }>
						{ __( 'Reset Defaults', 'wc-admin' ) }
					</Button>
					<Button isPrimary onClick={ this.saveChanges }>
						{ __( 'Save Changes', 'wc-admin' ) }
					</Button>
				</div>
			</Fragment>
		);
	}
}

export default compose(
	withDispatch( dispatch => {
		const { updateSettings } = dispatch( 'wc-api' );

		return {
			updateSettings,
		};
	} )
)( useFilters( SETTINGS_FILTER )( Settings ) );
