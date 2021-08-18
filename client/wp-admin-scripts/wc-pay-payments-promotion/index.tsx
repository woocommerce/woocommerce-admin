/**
 * External dependencies
 */
import { render, cloneElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { WCPaymentsRow } from './wc-payments-row';

const container = document.querySelector(
	'[data-gateway_id="psuedo_woocommerce_payments"]'
);

if ( container ) {
	const sortColumn = container.children[ 0 ].innerHTML;
	render( <WCPaymentsRow sortColumnContent={ sortColumn } />, container );
}
