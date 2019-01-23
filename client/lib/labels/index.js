/** @format */
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { getRequestByIdString } from 'lib/async-requests';
import { NAMESPACE } from 'store/constants';

export const getCategoryLabels = getRequestByIdString(
	NAMESPACE + 'products/categories',
	category => ( {
		id: category.id,
		label: category.name,
	} )
);

export const getCouponLabels = getRequestByIdString( NAMESPACE + 'coupons', coupon => ( {
	id: coupon.id,
	label: coupon.code,
} ) );

export const getCustomerLabel = getRequestByIdString( NAMESPACE + 'customers', customer => ( {
	id: customer.id,
	label: customer.username,
} ) );

export const getProductLabels = getRequestByIdString( NAMESPACE + 'products', product => ( {
	id: product.id,
	label: product.name,
} ) );

export const getVariationLabels = getRequestByIdString(
	query => NAMESPACE + `products/${ query.products }/variations`,
	variation => {
		return {
			id: variation.id,
			label: variation.attributes.reduce(
				( desc, attribute, index, arr ) =>
					desc + `${ attribute.option }${ arr.length === index + 1 ? '' : ', ' }`,
				''
			),
		};
	}
);
