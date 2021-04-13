/**
 * External dependencies
 */
import { Slot, SlotFillProvider } from '@wordpress/components';
import QueryString, { parse } from 'qs';

/**
 * Internal dependencies
 */
import { PaymentRecommendationsSlot } from '../payments';
import './style.scss';

type QueryParams = {
	page: string;
	tab: string;
	section?: string;
};

function isWPPage(
	params: QueryParams | QueryString.ParsedQs
): params is QueryParams {
	return ( params as QueryParams ).page !== undefined;
}

/**
 * This component is appended to the bottom of the WooCommerce non-react pages (like settings).
 * You can add a component by writing a Fill component from slot-fill with the `embedded-body-layout` name.
 *
 * Each Fill component receives QueryParams, consisting of a page, tab, and section string.
 */
export const EmbeddedBodyLayout = () => {
	const query = parse( location.search.substring( 1 ) );
	let fillProps: QueryParams = { page: '', tab: '' };
	if ( isWPPage( query ) ) {
		fillProps = query;
	}

	return (
		<SlotFillProvider>
			<div
				className="woocommerce-embedded-layout__primary"
				id="woocommerce-embedded-layout__primary"
			>
				<Slot
					name="embedded-body-layout"
					fillProps={ {
						...fillProps,
					} }
				></Slot>
			</div>
			<PaymentRecommendationsSlot />
		</SlotFillProvider>
	);
};
