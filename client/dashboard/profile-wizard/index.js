/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal depdencies
 */
import './style.scss';
import { H } from '@woocommerce/components';

export default class ProfileWizard extends Component {
	componentDidMount() {
		const body = document.querySelector( '.wp-admin' );
		body.classList.add( 'woocommerce-profile-wizard__body' );
	}

	componentWillUnmount() {
		const body = document.querySelector( '.wp-admin' );
		body.classList.remove( 'woocommerce-profile-wizard__body' );
	}

	render() {
		return (
			<div>
				<H className="woocommerce-profile-wizard__header-title">
					{ __(
						'Go beyond the confines of traditional eCommerce solutions, and be limited only be your own imagination.',
						'woocommerce-admin'
					) }
				</H>
			</div>
		);
	}
}
