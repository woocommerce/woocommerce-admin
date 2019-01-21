/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';

/**
 * WooCommerce dependencies
 */
import { useFilters } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import './style.scss';
import Header from 'header';

const SETTINGS_FILTER = 'woocommerce_admin_settings_page';

class Settings extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			hasError: false,
		};
	}

	componentDidCatch( error ) {
		this.setState( {
			hasError: true,
		} );
		/* eslint-disable no-console */
		console.warn( error );
		/* eslint-enable no-console */
	}

	render() {
		if ( this.state.hasError ) {
			return null;
		}

		return (
			<Fragment>
				<Header
					sections={ [
						[ '/analytics/revenue', __( 'Analytics', 'wc-admin' ) ],
						__( 'Settings', 'wc-admin' ),
					] }
				/>
				Settings page
			</Fragment>
		);
	}
}

export default useFilters( SETTINGS_FILTER )( Settings );
