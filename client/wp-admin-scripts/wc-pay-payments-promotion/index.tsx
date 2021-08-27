/**
 * External dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { WCPaymentsRow } from './wc-payments-row';

const container = document.querySelector(
	'[data-gateway_id="pre_install_woocommerce_payments_promotion"]'
);

if ( container ) {
	const sortColumn = container.children[ 0 ].innerHTML;
	const descriptionColumn = container.children[ 3 ].innerHTML;
	const subTitle = container.getElementsByClassName( 'gateway-subtitle' );

	render(
		<WCPaymentsRow
			sortColumnContent={ sortColumn }
			descriptionColumnContent={ descriptionColumn }
			subTitleContent={
				subTitle.length === 1 ? subTitle[ 0 ].innerHTML : undefined
			}
		/>,
		container
	);
}
