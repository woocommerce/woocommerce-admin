/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';
import { getAdminLink } from '@woocommerce/wc-admin-settings';

/**
 * Returns a promise and resolves when the loader overlay no longer exists.
 *
 * @return {Promise} Promise for overlay existence.
 */
const saveCompleted = () => {
	if ( document.querySelector( '.blockUI.blockOverlay' ) !== null ) {
		const promise = new Promise( ( resolve ) => {
			window.requestAnimationFrame( resolve );
		} );
		return promise.then( () => saveCompleted() );
	}

	return Promise.resolve( true );
};

/**
 * Displays a notice on tax settings save.
 */
const showTaxCompletionNotice = () => {
	const saveButton = document.querySelector( '.woocommerce-save-button' );

	if ( saveButton.classList.contains( 'has-tax' ) ) {
		return;
	}

	saveCompleted().then( () => {
		// Check if a row was added successfully after WooCommerce removes invalid rows.
		if ( ! document.querySelector( '.tips' ) ) {
			return;
		}
		if ( saveButton.disabled ) {
			saveButton.classList.add( 'has-tax' );
			dispatch( 'core/notices' ).createSuccessNotice(
				__( "You've added your first tax rate!", 'woocommerce-admin' ),
				{
					id: 'WOOCOMMERCE_ONBOARDING_TAX_NOTICE',
					actions: [
						{
							url: getAdminLink( 'admin.php?page=wc-admin' ),
							label: __( 'Continue setup.', 'woocommerce-admin' ),
						},
					],
				}
			);
		}
	} );
};

window.onload = () => {
	const saveButton = document.querySelector( '.woocommerce-save-button' );
	if ( ! document.querySelector( '.wc_tax_rates .tips' ) && saveButton ) {
		saveButton.addEventListener( 'click', showTaxCompletionNotice );
	}
};
