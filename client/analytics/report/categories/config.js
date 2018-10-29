/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getRequestByIdString } from 'lib/async-requests';
import { NAMESPACE } from 'store/constants';

export const filters = [
	{ label: __( 'All Categories', 'wc-admin' ), value: 'all' },
	{
		label: __( 'Comparison', 'wc-admin' ),
		value: 'compare',
		settings: {
			type: 'categories',
			param: 'category',
			getLabels: getRequestByIdString( NAMESPACE + 'categories', category => ( {
				id: category.id,
				label: category.code,
			} ) ),
			labels: {
				title: __( 'Compare Category Codes', 'wc-admin' ),
				update: __( 'Compare', 'wc-admin' ),
			},
		},
	},
];
