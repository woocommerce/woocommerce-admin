/** @format */
/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import { uniqueId } from 'lodash';
/**
 * WooCommerce dependencies
 */
import { SectionHeader, useFilters } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import Header from 'header';
import sanitizeHTML from 'lib/sanitize-html';

const SETTINGS_FILTER = 'woocommerce_admin_settings_page';

class Settings extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			hasError: false,
			excludedStatuses: {},
		};

		this.toggleExcludedStatus = this.toggleExcludedStatus.bind( this );
	}

	componentDidCatch( error ) {
		this.setState( {
			hasError: true,
		} );
		/* eslint-disable no-console */
		console.warn( error );
		/* eslint-enable no-console */
	}

	toggleExcludedStatus = e => {
		const status = e.target.value;
		const excludedStatuses = this.state.excludedStatuses;
		if ( e.target.checked ) {
			excludedStatuses[ status ] = true;
		} else {
			delete excludedStatuses[ status ];
		}
		this.setState( { excludedStatuses } );
	};

	resetDefaults = () => {};

	saveChanges = () => {};

	getOrderStatusOptions() {
		const orderStatuses = wcSettings.orderStatuses;
		const { excludedStatuses } = this.state;

		return Object.keys( orderStatuses ).map( key => {
			const id = uniqueId( 'woocommerce-settings__excluded-status-' );
			return (
				<label htmlFor={ id } key={ key }>
					<input
						id={ id }
						type="checkbox"
						onChange={ this.toggleExcludedStatus }
						aria-label={ sprintf(
							__( 'Exclude the %s status from reports', 'wc-admin' ),
							status.name
						) }
						checked={ 'undefined' !== typeof excludedStatuses[ key ] }
						value={ key }
					/>
					{ orderStatuses[ key ] }
				</label>
			);
		} );
	}

	render() {
		const { hasError } = this.state;
		if ( hasError ) {
			return null;
		}

		const help = sprintf(
			__(
				'Orders with these statuses are excluded from the totals in your reports.' +
					'The <strong>Refunded</strong> status can not be excluded.  <a href="%s">Learn more</a>',
				'wc-admin'
			),
			'#',
			'wc-admin' // @TODO: this needs to be replaced with a real link
		);

		return (
			<Fragment>
				<Header
					sections={ [
						[ '/analytics/revenue', __( 'Analytics', 'wc-admin' ) ],
						__( 'Settings', 'wc-admin' ),
					] }
				/>
				<SectionHeader title={ __( 'Analytics Settings', 'wc-admin' ) } />
				<div className="woocommerce-settings__setting-name">
					{ __( 'Excluded Statuses', 'wc-admin' ) }
				</div>
				<div className="woocommerce-settings__setting-options">
					{ this.getOrderStatusOptions() }
					<span
						className="woocommerce-settings__setting-help"
						dangerouslySetInnerHTML={ sanitizeHTML( help ) }
					/>
				</div>
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

export default useFilters( SETTINGS_FILTER )( Settings );
